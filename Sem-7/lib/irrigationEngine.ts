import { ZoneSchedule } from '@/types/analytics';

/**
 * Calculates differential watering volume and valve runtime based on shadow accumulation ratio.
 * Evapotranspiration reduction factor (shaded soil retains up to 40% more moisture)
 * Unshaded Zone Water Volume = Base Rate (100%)
 * Shaded Zone Water Volume = Base Rate * (1 - 0.40 * Shade Ratio)
 */
export function calculateZoneIrrigation(
  zoneId: string,
  zoneName: string,
  shadeRatio: number,
  baseVolume: number = 150,
  baseRuntimeMins: number = 30,
  manualOverride: boolean = false,
  soilMoisturePercent: number = 45
): ZoneSchedule {
  // Evapotranspiration reduction factor (shaded soil retains up to 40% more moisture)
  const reductionFactor = 0.40 * Math.min(1.0, Math.max(0.0, shadeRatio));
  const calculatedWaterVolumeLiters = Math.round(baseVolume * (1 - reductionFactor));
  const valveRuntimeMinutes = Math.round(baseRuntimeMins * (1 - reductionFactor));
  const waterSavingsPercent = Math.round(reductionFactor * 100);

  return {
    zoneId,
    zoneName,
    shadeRatio,
    baseWaterVolumeLiters: baseVolume,
    calculatedWaterVolumeLiters,
    valveRuntimeMinutes,
    waterSavingsPercent,
    manualOverride,
    soilMoisturePercent,
  };
}

export function generateDefaultZoneGrid(
  shadeRatioMatrix: number[][] = [
    [0.75, 0.45, 0.15],
    [0.60, 0.85, 0.30],
    [0.20, 0.50, 0.80],
  ],
  baseVolume: number = 150
): ZoneSchedule[] {
  const zones: ZoneSchedule[] = [];
  let index = 1;

  for (let r = 0; r < shadeRatioMatrix.length; r++) {
    for (let c = 0; c < shadeRatioMatrix[r].length; c++) {
      const shade = shadeRatioMatrix[r][c];
      const zoneId = `ZONE-${index.toString().padStart(2, '0')}`;
      const zoneName = `Bed ${String.fromCharCode(65 + r)}${c + 1}`;
      const mockMoisture = Math.round(40 + shade * 35);

      zones.push(
        calculateZoneIrrigation(
          zoneId,
          zoneName,
          shade,
          baseVolume,
          30,
          false,
          mockMoisture
        )
      );
      index++;
    }
  }

  return zones;
}
