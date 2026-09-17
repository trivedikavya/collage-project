export type CropType = 'lettuce' | 'spinach' | 'tomatoes' | 'strawberries' | 'berries';

export interface FarmConfig {
  latitude: number;
  longitude: number;
  panelHeight: number; // meters (1.5 - 4.5)
  panelTilt: number;   // degrees (-45 to 45)
  rowPitch: number;    // meters (2.0 - 8.0)
  cropType: CropType;
  targetDLI: number;   // mol/m²/day
}

export interface CropProfile {
  id: CropType;
  name: string;
  targetDLI: number; // mol/m²/day
  minDLI: number;
  maxDLI: number;
  shadeTolerance: 'High' | 'Medium' | 'Low';
  baseWaterReqLiters: number; // Liters/m²/day
  description: string;
  parSensitivity: number; // micro-mols coefficient
}

export interface SolarPosition {
  azimuth: number;    // radians
  altitude: number;   // solar elevation in radians
  azimuthDeg: number; // degrees
  altitudeDeg: number;// degrees
}

export interface ShadowCalculationResult {
  shadowLength: number; // meters
  dx: number;           // meters
  dy: number;           // meters
  altitude: number;     // solar elevation in radians
  azimuth: number;      // solar azimuth in radians
  isSunAboveHorizon: boolean;
}
