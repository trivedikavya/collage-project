import SunCalc from 'suncalc';
import { calculatePanelShadow, PanelShadowResult } from './solarMath';
import { FarmConfig } from '@/types/agrivoltaics';
import { HourlyOptimizationData } from '@/types/analytics';

export function getSolarPosition(date: Date, lat: number, lng: number) {
  const sunPos = SunCalc.getPosition(date, lat, lng);
  return {
    azimuthRad: sunPos.azimuth,
    elevationRad: sunPos.altitude,
    azimuthDeg: (sunPos.azimuth * 180) / Math.PI,
    elevationDeg: (sunPos.altitude * 180) / Math.PI,
  };
}

/**
 * Computes 24-hour hourly PAR irradiance (μmol/m²/s) and Solar PV output (kWh)
 * based on solar elevation angles, tilt geometry, and crop sensitivity.
 */
export function generateHourlyOptimizationData(
  config: FarmConfig,
  currentDate: Date = new Date()
): HourlyOptimizationData[] {
  const result: HourlyOptimizationData[] = [];
  const baseDate = new Date(currentDate);

  for (let h = 0; h < 24; h++) {
    const hourDate = new Date(baseDate.setHours(h, 0, 0, 0));
    const shadow = calculatePanelShadow(
      config.latitude,
      config.longitude,
      hourDate,
      config.panelHeight,
      2.0,
      config.panelTilt
    );

    const hourStr = `${h.toString().padStart(2, '0')}:00`;
    const elevationDeg = shadow.altitudeDeg;

    if (shadow.isNight || elevationDeg <= 0) {
      result.push({
        hour: hourStr,
        solarKWh: 0,
        solarRevenue: 0,
        cropPAR: 0,
        targetPAR: 0,
        heatStressRisk: false,
        shadePercentage: 0,
      });
      continue;
    }

    // Solar Irradiance estimation (W/m²) based on clear sky solar elevation model
    const sinElevation = Math.sin(shadow.altitude);
    const clearSkyGHI = 1100 * Math.pow(sinElevation, 1.15); // Global Horizontal Irradiance W/m²

    // Direct Normal Irradiance & PV Angle Factor
    const tiltRad = (config.panelTilt * Math.PI) / 180;
    const pvOrientationFactor = Math.cos(shadow.altitude - tiltRad);
    const pvPowerKW = (clearSkyGHI / 1000) * 4.5 * Math.max(0, pvOrientationFactor); // ~4.5 kW peak system
    const solarKWh = Math.round(pvPowerKW * 100) / 100;
    const solarRevenue = Math.round(solarKWh * 0.14 * 100) / 100; // $0.14 per kWh feed-in tariff

    // PAR (Photosynthetically Active Radiation) conversion ~ 2.15 μmol/J or μmol/m²/s
    const unshadedPAR = clearSkyGHI * 2.15;
    
    // Calculate shadow coverage factor at canopy level
    const pitch = config.rowPitch;
    const shadowCoverageRatio = Math.min(1.0, shadow.shadowLength / pitch);
    const canopyPAR = unshadedPAR * (1 - 0.55 * shadowCoverageRatio);

    // Target PAR derived from crop target DLI
    const targetHourlyPAR = (config.targetDLI * 1000000) / (12 * 3600); // 12 daylight hours approx

    // Heat stress risk occurs when unshaded GHI > 850 W/m² (PAR > 1800 μmol/m²/s) and low shade
    const heatStressRisk = unshadedPAR > 1750 && shadowCoverageRatio < 0.25;

    result.push({
      hour: hourStr,
      solarKWh,
      solarRevenue,
      cropPAR: Math.round(canopyPAR),
      targetPAR: Math.round(targetHourlyPAR),
      heatStressRisk,
      shadePercentage: Math.round(shadowCoverageRatio * 100),
    });
  }

  return result;
}

/**
 * Calculates Daily Light Integral (DLI) in mol/m²/day from hourly PAR data
 */
export function calculateDLIFromHourly(hourlyData: HourlyOptimizationData[]): {
  shadedDLI: number;
  unshadedDLI: number;
} {
  let unshadedSumPAR = 0;
  let shadedSumPAR = 0;

  for (const hour of hourlyData) {
    if (hour.cropPAR > 0) {
      shadedSumPAR += hour.cropPAR;
      const unshadedEstimate = hour.cropPAR / (1 - 0.55 * (hour.shadePercentage / 100) || 1);
      unshadedSumPAR += unshadedEstimate;
    }
  }

  // Convert μmol/m²/s * 3600 sec per hour / 1,000,000 to get mol/m²/day
  const shadedDLI = Math.round(((shadedSumPAR * 3600) / 1000000) * 10) / 10;
  const unshadedDLI = Math.round(((unshadedSumPAR * 3600) / 1000000) * 10) / 10;

  return { shadedDLI, unshadedDLI };
}
