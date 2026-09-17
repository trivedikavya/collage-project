import SunCalc from 'suncalc';

export interface PanelShadowResult {
  shadowLength: number; // meters
  dx: number;           // displacement X in meters
  dy: number;           // displacement Y in meters
  altitude: number;     // solar elevation in radians
  azimuth: number;      // solar azimuth in radians
  altitudeDeg: number;  // elevation in degrees
  azimuthDeg: number;   // azimuth in degrees
  isNight: boolean;
}

/**
 * Calculates 2D shadow displacement cast by solar panel arrays using trigonometry:
 * Shadow Length = Panel Height / tan(Solar Elevation)
 * Shadow Angle = Solar Azimuth - Panel Orientation
 */
export function calculatePanelShadow(
  lat: number,
  lng: number,
  date: Date,
  panelHeight: number,
  panelWidth: number = 2.0,
  panelTilt: number = 25
): PanelShadowResult {
  const sunPos = SunCalc.getPosition(date, lat, lng);
  const altitude = sunPos.altitude; // Solar elevation in radians
  const azimuth = sunPos.azimuth;   // Solar azimuth in radians

  const altitudeDeg = (altitude * 180) / Math.PI;
  const azimuthDeg = (azimuth * 180) / Math.PI;

  const isNight = altitude <= 0.01; // Sun below horizon or twilight

  // Effective panel height adjusted for tilt angle
  const effectiveHeight = panelHeight + Math.sin((Math.abs(panelTilt) * Math.PI) / 180) * (panelWidth / 2);

  // Calculate shadow length projection
  const shadowLength = !isNight ? effectiveHeight / Math.tan(altitude) : 0;
  const dx = shadowLength * Math.sin(azimuth);
  const dy = shadowLength * Math.cos(azimuth);

  return {
    shadowLength: Math.min(shadowLength, 25.0), // clamp max shadow visual range
    dx,
    dy,
    altitude,
    azimuth,
    altitudeDeg,
    azimuthDeg,
    isNight,
  };
}
