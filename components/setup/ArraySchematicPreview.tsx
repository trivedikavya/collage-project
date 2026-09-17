'use client';

import React from 'react';
import { useFarmConfig } from '@/hooks/useFarmConfig';
import { CROP_PROFILES } from '@/lib/cropData';
import { Eye, Sun, Compass, Ruler } from 'lucide-react';

export const ArraySchematicPreview: React.FC = () => {
  const { config } = useFarmConfig();
  const crop = CROP_PROFILES[config.cropType];

  // Scaling calculations for SVG view box (width 600, height 260)
  const svgWidth = 600;
  const svgHeight = 260;
  const groundY = 210;

  // Scale: 1 meter = 45 SVG pixels
  const scale = 45;
  const heightPx = config.panelHeight * scale;
  const pitchPx = config.rowPitch * scale;
  const tiltRad = (config.panelTilt * Math.PI) / 180;

  // Panel length in meters = 2.2m
  const panelLengthPx = 2.2 * scale;
  const panelDx = (panelLengthPx / 2) * Math.cos(tiltRad);
  const panelDy = (panelLengthPx / 2) * Math.sin(tiltRad);

  // Position 2 panel rows horizontally
  const row1CenterX = 180;
  const row2CenterX = Math.min(row1CenterX + pitchPx, 520);

  const row1TopY = groundY - heightPx;
  const row2TopY = groundY - heightPx;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Eye className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base font-semibold text-slate-100">Dynamic Array Schematic</h3>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Ruler className="w-3.5 h-3.5 text-emerald-400" /> Height: {config.panelHeight.toFixed(1)}m
          </span>
          <span className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-amber-400" /> Tilt: {config.panelTilt}°
          </span>
        </div>
      </div>

      {/* SVG Vector Drawing */}
      <div className="relative w-full bg-slate-950 border border-slate-800/80 rounded-xl overflow-hidden p-2">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto">
          <defs>
            {/* Sun Rays Gradient */}
            <linearGradient id="sunRayGrad" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
            </linearGradient>

            {/* Soil Bed Pattern */}
            <pattern id="soilGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 20 10 M 10 0 L 10 20" fill="none" stroke="#1E293B" strokeWidth="0.5" />
            </pattern>

            {/* PV Blue Glass */}
            <linearGradient id="pvGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>

          {/* Sky background */}
          <rect width={svgWidth} height={groundY} fill="#0B132B" opacity="0.6" />

          {/* Simulated Sun Rays */}
          <polygon
            points={`${svgWidth - 60},20 ${row1CenterX - panelDx},${row1TopY - panelDy} ${row1CenterX + panelDx + 80},${groundY}`}
            fill="url(#sunRayGrad)"
          />

          {/* Sun Icon Vector */}
          <g transform={`translate(${svgWidth - 60}, 40)`}>
            <circle cx="0" cy="0" r="16" fill="#F59E0B" opacity="0.9" />
            <circle cx="0" cy="0" r="22" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3,3" opacity="0.6" />
          </g>

          {/* Ground & Crop Soil Line */}
          <rect x="0" y={groundY} width={svgWidth} height={svgHeight - groundY} fill="#0F172A" />
          <line x1="0" y1={groundY} x2={svgWidth} y2={groundY} stroke="#10B981" strokeWidth="2" />

          {/* Crop Canopy Green Layer */}
          <rect
            x={40}
            y={groundY - 18}
            width={svgWidth - 80}
            height="18"
            fill="#10B981"
            fillOpacity="0.15"
            stroke="#10B981"
            strokeDasharray="2,2"
            strokeWidth="1"
          />
          <text x="50" y={groundY - 6} fill="#34D399" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
            {crop.name} Canopy (DLI Target: {crop.targetDLI} mol/m²)
          </text>

          {/* ROW 1: Tracker Mounting Stanchion Pole */}
          <line x1={row1CenterX} y1={groundY} x2={row1CenterX} y2={row1TopY} stroke="#64748B" strokeWidth="4" />
          <circle cx={row1CenterX} cy={row1TopY} r="4" fill="#94A3B8" />

          {/* ROW 1: PV Panel Array Board */}
          <line
            x1={row1CenterX - panelDx}
            y1={row1TopY + panelDy}
            x2={row1CenterX + panelDx}
            y2={row1TopY - panelDy}
            stroke="url(#pvGlass)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* ROW 2: Tracker Mounting Stanchion Pole */}
          <line x1={row2CenterX} y1={groundY} x2={row2CenterX} y2={row2TopY} stroke="#64748B" strokeWidth="4" />
          <circle cx={row2CenterX} cy={row2TopY} r="4" fill="#94A3B8" />

          {/* ROW 2: PV Panel Array Board */}
          <line
            x1={row2CenterX - panelDx}
            y1={row2TopY + panelDy}
            x2={row2CenterX + panelDx}
            y2={row2TopY - panelDy}
            stroke="url(#pvGlass)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Height Dimension Arrow */}
          <line x1={row1CenterX - 45} y1={groundY} x2={row1CenterX - 45} y2={row1TopY} stroke="#10B981" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x={row1CenterX - 85} y={row1TopY + heightPx / 2} fill="#10B981" fontSize="10" fontFamily="monospace">
            {config.panelHeight.toFixed(1)}m H
          </text>

          {/* Pitch Inter-Row Dimension Arrow */}
          <line x1={row1CenterX} y1={groundY + 18} x2={row2CenterX} y2={groundY + 18} stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x={(row1CenterX + row2CenterX) / 2 - 25} y={groundY + 34} fill="#F59E0B" fontSize="10" fontFamily="monospace">
            Pitch: {config.rowPitch.toFixed(1)}m
          </text>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
          <span className="text-slate-400 block text-[10px]">Tracker Angle</span>
          <span className="font-mono text-amber-400 font-semibold">{config.panelTilt}° Single Axis</span>
        </div>
        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
          <span className="text-slate-400 block text-[10px]">Crop Canopy Space</span>
          <span className="font-mono text-emerald-400 font-semibold">{(config.panelHeight - 0.4).toFixed(1)}m Clearance</span>
        </div>
        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
          <span className="text-slate-400 block text-[10px]">Shade Mask Index</span>
          <span className="font-mono text-cyan-400 font-semibold">{(config.rowPitch / config.panelHeight).toFixed(2)} Pitch Ratio</span>
        </div>
      </div>
    </div>
  );
};
