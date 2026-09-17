'use client';

import React from 'react';
import { CoOptStrategy } from '@/types/analytics';
import { Sliders, Sun, Leaf, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

interface ParetoSliderProps {
  optimization: CoOptStrategy;
  onWeightChange: (newWeight: number) => void;
  onOpenOverrideModal: () => void;
}

export const ParetoSlider: React.FC<ParetoSliderProps> = ({
  optimization,
  onWeightChange,
  onOpenOverrideModal,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-100">Pareto Strategy Weight Controller</h3>
            <p className="text-xs text-slate-400">Balance agricultural yield vs. photovoltaic economic revenue</p>
          </div>
        </div>

        <button
          onClick={onOpenOverrideModal}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-amber-500/20"
        >
          <Sun className="w-4 h-4" />
          <span>Tracker Tilt Override (MQTT)</span>
        </button>
      </div>

      {/* Dual Weight Distribution Bar */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Leaf className="w-4 h-4" /> 100% Crop Canopy Priority ({optimization.agriPriorityPercent}%)
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <Sun className="w-4 h-4" /> 100% PV Generation Priority ({optimization.pvPriorityPercent}%)
          </span>
        </div>

        {/* Dual Color Slider Track */}
        <input
          type="range"
          min={0}
          max={100}
          value={optimization.strategyWeight}
          onChange={(e) => onWeightChange(parseInt(e.target.value))}
          className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500 border border-slate-800"
        />

        <div className="flex justify-between text-[11px] font-mono text-slate-400">
          <span>Max Shade / Moisture Protection</span>
          <span>Balanced Co-Optimization</span>
          <span>Max Solar Track Angle</span>
        </div>
      </div>

      {/* Projected Net Gain Economic Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
        <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
          <span className="text-xs text-slate-400 block mb-1">Daily Solar Revenue</span>
          <span className="text-xl font-bold font-mono text-amber-400">
            ${optimization.dailySolarRevenue.toFixed(2)}
          </span>
          <span className="text-[10px] text-slate-500 block">Feed-in tariff output</span>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
          <span className="text-xs text-slate-400 block mb-1">Estimated Crop Biomass Value</span>
          <span className="text-xl font-bold font-mono text-emerald-400">
            ${optimization.dailyCropValue.toFixed(2)}
          </span>
          <span className="text-[10px] text-slate-500 block">PAR accumulation value</span>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
          <span className="text-xs text-slate-400 block mb-1">Heat Stress Risk Mitigation</span>
          <span className="text-xl font-bold font-mono text-red-400">
            -${optimization.heatPenalty.toFixed(2)}
          </span>
          <span className="text-[10px] text-slate-500 block">Microclimate penalty savings</span>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl">
          <span className="text-xs text-emerald-400 font-semibold block mb-1">Projected Net Daily Gain</span>
          <span className="text-2xl font-bold font-mono text-emerald-300">
            ${optimization.netGainDollars.toFixed(2)}
          </span>
          <span className="text-[10px] text-emerald-400/80 block font-medium">+18.4% vs unoptimized baseline</span>
        </div>
      </div>
    </div>
  );
};
