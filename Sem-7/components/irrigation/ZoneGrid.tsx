'use client';

import React, { useState } from 'react';
import { ZoneSchedule } from '@/types/analytics';
import { generateDefaultZoneGrid, calculateZoneIrrigation } from '@/lib/irrigationEngine';
import { exportIrrigationCSV } from '@/lib/exportSchedule';
import { Droplets, Download, Sliders, Check, AlertTriangle, ShieldCheck, ToggleLeft, ToggleRight } from 'lucide-react';

export const ZoneGrid: React.FC = () => {
  const [baseWaterVolume, setBaseWaterVolume] = useState<number>(150);
  const [zones, setZones] = useState<ZoneSchedule[]>(() => generateDefaultZoneGrid());
  const [notification, setNotification] = useState<string | null>(null);

  // Toggle manual override for a specific zone
  const toggleZoneOverride = (zoneId: string) => {
    setZones((prev) =>
      prev.map((zone) => {
        if (zone.zoneId === zoneId) {
          const updatedOverride = !zone.manualOverride;
          setNotification(`Zone ${zone.zoneId} valve set to ${updatedOverride ? 'MANUAL OVERRIDE' : 'AUTOMATIC DLI MODE'}`);
          setTimeout(() => setNotification(null), 3000);
          return { ...zone, manualOverride: updatedOverride };
        }
        return zone;
      })
    );
  };

  // Recalculate all zones when base volume changes
  const handleBaseVolumeChange = (newVol: number) => {
    setBaseWaterVolume(newVol);
    setZones((prev) =>
      prev.map((zone) =>
        calculateZoneIrrigation(
          zone.zoneId,
          zone.zoneName,
          zone.shadeRatio,
          newVol,
          30,
          zone.manualOverride,
          zone.soilMoisturePercent
        )
      )
    );
  };

  // Summary Metrics
  const totalBaseWater = zones.reduce((acc, z) => acc + z.baseWaterVolumeLiters, 0);
  const totalCalculatedWater = zones.reduce((acc, z) => acc + z.calculatedWaterVolumeLiters, 0);
  const totalSavedWater = totalBaseWater - totalCalculatedWater;
  const overallSavedPct = Math.round((totalSavedWater / (totalBaseWater || 1)) * 100);

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {notification && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-4 py-3 rounded-xl flex items-center justify-between shadow-lg text-xs font-semibold animate-fade-in">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Top Header & Base Water Volume Controller */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
            <Droplets className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Micro-Zone Precision Irrigation Controller</h2>
            <p className="text-xs text-slate-400">Evapotranspiration-adjusted differential watering schedules</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 flex items-center space-x-3 text-xs">
            <span className="text-slate-400">Base Rate:</span>
            <input
              type="number"
              min={50}
              max={500}
              step={10}
              value={baseWaterVolume}
              onChange={(e) => handleBaseVolumeChange(parseInt(e.target.value) || 100)}
              className="w-16 bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-emerald-400 font-bold focus:outline-none"
            />
            <span className="text-slate-400 font-mono">Liters/zone</span>
          </div>

          <button
            onClick={() => exportIrrigationCSV(zones)}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-emerald-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Export Hardware CSV</span>
          </button>
        </div>
      </div>

      {/* Microclimate Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-xs text-slate-400 block mb-1">Standard Flat Baseline</span>
          <span className="text-xl font-bold font-mono text-slate-200">{totalBaseWater} Liters</span>
          <span className="text-[10px] text-slate-500 block">Without micro-zone shadow mapping</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-xs text-slate-400 block mb-1">Optimized Agrivoltaic Volume</span>
          <span className="text-xl font-bold font-mono text-cyan-400">{totalCalculatedWater} Liters</span>
          <span className="text-[10px] text-emerald-400 block">Moisture retention adjusted</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-xs text-slate-400 block mb-1">Net Daily Water Saved</span>
          <span className="text-xl font-bold font-mono text-emerald-400">{totalSavedWater} Liters</span>
          <span className="text-[10px] text-slate-400 block">{overallSavedPct}% Evapotranspiration Reduction</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-xs text-slate-400 block mb-1">Active Micro-Zones</span>
          <span className="text-xl font-bold font-mono text-amber-400">{zones.length} Field Beds</span>
          <span className="text-[10px] text-slate-400 block">{zones.filter(z => z.manualOverride).length} Manual Overrides</span>
        </div>
      </div>

      {/* Interactive Micro-Zone Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {zones.map((zone) => (
          <div
            key={zone.zoneId}
            className={`bg-slate-900 border rounded-2xl p-5 shadow-xl transition-all relative overflow-hidden ${
              zone.manualOverride
                ? 'border-amber-500/50 ring-1 ring-amber-500/20'
                : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            {/* Water Savings Badge Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">
                  {zone.zoneId}
                </span>
                <h3 className="text-base font-semibold text-slate-100">{zone.zoneName}</h3>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono font-bold text-xs">
                -{zone.waterSavingsPercent}% Water
              </span>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Soil Moisture Level</span>
                  <span className="font-mono text-cyan-400 font-bold">{zone.soilMoisturePercent}%</span>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${zone.soilMoisturePercent}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Shade Ratio</span>
                  <span className="font-mono text-blue-400 font-bold">
                    {Math.round(zone.shadeRatio * 100)}% Shadow
                  </span>
                </div>

                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Target Water</span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {zone.calculatedWaterVolumeLiters} L
                  </span>
                </div>
              </div>
            </div>

            {/* Valve Runtime & Manual Override Toggle */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5 text-slate-400">
                <span>Valve Runtime:</span>
                <strong className="font-mono text-slate-200">{zone.valveRuntimeMinutes} mins</strong>
              </div>

              <button
                onClick={() => toggleZoneOverride(zone.zoneId)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                  zone.manualOverride
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {zone.manualOverride ? (
                  <>
                    <ToggleRight className="w-4 h-4 text-amber-400" />
                    <span>Manual</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft className="w-4 h-4 text-slate-400" />
                    <span>Auto</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
