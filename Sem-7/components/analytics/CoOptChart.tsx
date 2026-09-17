'use client';

import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceArea,
  CartesianGrid,
} from 'recharts';
import { HourlyOptimizationData } from '@/types/analytics';
import { Sun, Leaf, AlertTriangle } from 'lucide-react';

interface CoOptChartProps {
  data: HourlyOptimizationData[];
}

export const CoOptChart: React.FC<CoOptChartProps> = ({ data }) => {
  // Custom Dark Tooltip Component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const item: HourlyOptimizationData = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-xl shadow-2xl backdrop-blur-md text-xs space-y-1.5 min-w-[200px]">
          <div className="flex items-center justify-between font-mono font-bold border-b border-slate-800 pb-1 text-slate-200">
            <span>Time: {label}</span>
            {item.heatStressRisk && (
              <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 font-sans text-[10px] flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Heat Risk
              </span>
            )}
          </div>
          <div className="flex items-center justify-between text-amber-400 font-mono">
            <span className="flex items-center gap-1.5"><Sun className="w-3 h-3" /> Solar Revenue:</span>
            <strong>${item.solarRevenue.toFixed(2)}</strong>
          </div>
          <div className="flex items-center justify-between text-emerald-400 font-mono">
            <span className="flex items-center gap-1.5"><Leaf className="w-3 h-3" /> Crop PAR Level:</span>
            <strong>{item.cropPAR} μmol/m²/s</strong>
          </div>
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span>Optimal Target PAR:</span>
            <span className="font-mono">{item.targetPAR} μmol</span>
          </div>
          <div className="flex items-center justify-between text-cyan-400 text-[11px]">
            <span>Canopy Shade:</span>
            <span className="font-mono">{item.shadePercentage}%</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-400" />
            Solar Revenue ($) vs. Crop PAR Light Curve (μmol/m²/s)
          </h3>
          <p className="text-xs text-slate-400">
            Co-optimization trade-off balancing power generation and under-canopy photosynthetic radiation
          </p>
        </div>

        <div className="flex items-center space-x-4 text-xs font-mono">
          <span className="flex items-center gap-1 text-amber-400">
            <span className="w-3 h-3 rounded-sm bg-amber-500" /> Solar Revenue ($)
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-3 h-0.5 bg-emerald-500" /> Crop PAR (μmol)
          </span>
          <span className="flex items-center gap-1 text-red-400">
            <span className="w-3 h-3 rounded bg-red-500/30 border border-red-500/50" /> Heat Stress Warning Zone
          </span>
        </div>
      </div>

      {/* Dual Axis Recharts Container */}
      <div className="w-full h-[360px] pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
            <XAxis
              dataKey="hour"
              stroke="#64748B"
              tick={{ fontSize: 11, fill: '#94A3B8' }}
              tickLine={{ stroke: '#334155' }}
            />
            
            {/* Left Y-Axis: Solar Revenue ($) */}
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#F59E0B"
              tick={{ fontSize: 11, fill: '#F59E0B' }}
              tickFormatter={(v) => `$${v}`}
            />

            {/* Right Y-Axis: Crop PAR (μmol/m²/s) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#10B981"
              tick={{ fontSize: 11, fill: '#10B981' }}
              tickFormatter={(v) => `${v}`}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Highlight Heat Stress Hours (Reference Areas) */}
            {data.map((item, index) => {
              if (item.heatStressRisk) {
                return (
                  <ReferenceArea
                    key={`heat-${index}`}
                    x1={item.hour}
                    x2={data[index + 1] ? data[index + 1].hour : item.hour}
                    yAxisId="left"
                    fill="rgba(239, 68, 68, 0.15)"
                    stroke="rgba(239, 68, 68, 0.4)"
                    strokeDasharray="2 2"
                  />
                );
              }
              return null;
            })}

            {/* Solar Revenue Bar (Left Y-Axis) */}
            <Bar
              yAxisId="left"
              dataKey="solarRevenue"
              name="Solar Revenue ($)"
              fill="#F59E0B"
              radius={[4, 4, 0, 0]}
              barSize={18}
            />

            {/* Crop PAR Line (Right Y-Axis) */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cropPAR"
              name="Crop PAR (μmol/m²/s)"
              stroke="#10B981"
              strokeWidth={2.5}
              dot={{ fill: '#10B981', r: 3 }}
              activeDot={{ r: 6, fill: '#34D399', stroke: '#064E3B' }}
            />

            {/* Crop Target PAR Line */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="targetPAR"
              name="Target Crop PAR"
              stroke="#06B6D4"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
