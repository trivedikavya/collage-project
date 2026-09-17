export interface HourlyOptimizationData {
  hour: string;           // "06:00", "07:00", etc.
  solarKWh: number;       // Solar generation power in kWh
  solarRevenue: number;   // $ Solar revenue generated
  cropPAR: number;        // μmol/m²/s Photosynthetically Active Radiation
  targetPAR: number;      // μmol/m²/s Optimal PAR requirement
  heatStressRisk: boolean;// True if ambient solar irradiance causes crop heat stress
  shadePercentage: number;// % Shade cast over crop canopy
}

export interface ZoneSchedule {
  zoneId: string;
  zoneName: string;
  shadeRatio: number;               // 0.0 to 1.0 (0% to 100% shadow accumulation)
  baseWaterVolumeLiters: number;
  calculatedWaterVolumeLiters: number;
  valveRuntimeMinutes: number;
  waterSavingsPercent: number;
  manualOverride: boolean;
  soilMoisturePercent: number;
}

export interface CoOptStrategy {
  strategyWeight: number;    // 0 = 100% Agri Priority, 100 = 100% PV Priority
  dailySolarRevenue: number; // $ Total daily solar revenue
  dailyCropValue: number;    // $ Estimated daily crop value
  heatPenalty: number;       // $ Revenue lost to crop heat stress
  netGainDollars: number;    // Net optimized economic output ($)
  pvPriorityPercent: number; // % Priority allocated to PV energy generation
  agriPriorityPercent: number;// % Priority allocated to under-canopy crop yield
}
