import { useState, useMemo } from 'react';
import { HourlyOptimizationData, CoOptStrategy } from '@/types/analytics';
import { FarmConfig } from '@/types/agrivoltaics';
import { CROP_PROFILES } from '@/lib/cropData';

export function useCoOptimization(hourlyData: HourlyOptimizationData[], config: FarmConfig) {
  // Strategy weight slider: 0 = 100% Agri Priority, 100 = 100% PV Priority
  const [strategyWeight, setStrategyWeight] = useState<number>(50);

  const optimization = useMemo<CoOptStrategy>(() => {
    // 1. Calculate baseline total daily solar revenue
    const dailySolarRevenue = hourlyData.reduce((acc, curr) => acc + curr.solarRevenue, 0);

    // 2. Calculate baseline daily crop value ($) based on PAR coverage & target DLI match
    const cropProfile = CROP_PROFILES[config.cropType];
    const totalPAR = hourlyData.reduce((acc, curr) => acc + curr.cropPAR, 0);
    const targetPARSum = hourlyData.reduce((acc, curr) => acc + curr.targetPAR, 0);
    const parRatio = Math.min(1.2, totalPAR / (targetPARSum || 1));
    const baseDailyCropValue = cropProfile ? cropProfile.baseWaterReqLiters * 1.85 : 250;
    const dailyCropValue = Math.round(baseDailyCropValue * parRatio * 100) / 100;

    // 3. Compute heat stress penalty hours
    const heatStressHoursCount = hourlyData.filter((h) => h.heatStressRisk).length;
    const heatPenalty = Math.round(heatStressHoursCount * 14.5 * 100) / 100;

    // 4. Weight factors (0.0 to 1.0)
    const w = strategyWeight / 100; // PV weight
    const pvPriorityPercent = Math.round(w * 100);
    const agriPriorityPercent = 100 - pvPriorityPercent;

    // Projected Daily Net Gain Formula:
    // NetGain = (SolarRevenue * w) + (CropValue * (1 - w)) - HeatPenalty * (1 - w)
    const netGainDollars = Math.round(
      (dailySolarRevenue * w + dailyCropValue * (1 - w) - heatPenalty * (1 - w * 0.5)) * 100
    ) / 100;

    return {
      strategyWeight,
      dailySolarRevenue: Math.round(dailySolarRevenue * 100) / 100,
      dailyCropValue,
      heatPenalty,
      netGainDollars,
      pvPriorityPercent,
      agriPriorityPercent,
    };
  }, [hourlyData, config, strategyWeight]);

  return {
    strategyWeight,
    setStrategyWeight,
    optimization,
  };
}
