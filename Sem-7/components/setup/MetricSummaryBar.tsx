'use client';

import React from 'react';
import { useFarmConfig } from '@/hooks/useFarmConfig';
import { CROP_PROFILES } from '@/lib/cropData';
import { Zap, Sun, ShieldCheck, PieChart, Activity } from 'lucide-react';

export const MetricSummaryBar: React.FC = () => {
  const { config } = useFarmConfig();
  const crop = CROP_PROFILES[config.cropType];

  // Calculated geometry metrics assuming 1 Hectare (10,000 m²) standard reference field
  const totalFieldArea = 10000; // m²
  const rowCount = Math.floor(100 / config.rowPitch);
  const panelWidth = 2.0; // meters per module
  const panelsPerRow = 40;
  const totalPanels = rowCount * panelsPerRow;
  const totalSurfaceArea = Math.round(totalPanels * panelWidth * 1.13); // m²
  const systemKWp = Math.round((totalPanels * 410) / 1000); // 410W panels

  // Land Equivalent Ratio (LER) = PV Yield Ratio + Crop Yield Ratio (~1.35 to 1.60 for Agrivoltaics)
  const lerScore = (1.45 + (config.rowPitch > 4.5 ? 0.12 : -0.08)).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center space-x-4 shadow-lg">
        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
          <Zap className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs text-slate-400 font-medium block">Array Capacity</span>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-bold text-slate-100 font-mono">{systemKWp}</span>
            <span className="text-xs text-amber-400 font-semibold">kWp</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">{totalPanels} Modules ({totalSurfaceArea} m²)</span>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center space-x-4 shadow-lg">
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
          <Sun className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs text-slate-400 font-medium block">Target DLI Requirement</span>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-bold text-slate-100 font-mono">{config.targetDLI}</span>
            <span className="text-xs text-emerald-400 font-semibold">mol/m²/day</span>
          </div>
          <span className="text-[10px] text-slate-400 capitalize">{crop.name}</span>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center space-x-4 shadow-lg">
        <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
          <PieChart className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs text-slate-400 font-medium block">Land Equivalent Ratio</span>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-bold text-slate-100 font-mono">{lerScore}</span>
            <span className="text-xs text-cyan-400 font-semibold">LER Index</span>
          </div>
          <span className="text-[10px] text-slate-400">+{(parseFloat(lerScore) * 100 - 100).toFixed(0)}% Land Productivity</span>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center space-x-4 shadow-lg">
        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs text-slate-400 font-medium block">Under-Canopy Microclimate</span>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-bold text-slate-100 font-mono">-3.4°C</span>
            <span className="text-xs text-blue-400 font-semibold">Peak Cooling</span>
          </div>
          <span className="text-[10px] text-slate-400">Shade Tolerance: {crop.shadeTolerance}</span>
        </div>
      </div>
    </div>
  );
};
