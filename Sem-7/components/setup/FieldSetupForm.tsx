'use client';

import React, { useState } from 'react';
import { useFarmConfig } from '@/hooks/useFarmConfig';
import { CROP_PROFILES } from '@/lib/cropData';
import { farmConfigSchema } from '@/lib/validations/setupSchema';
import { CropType } from '@/types/agrivoltaics';
import { Sliders, MapPin, Layers, Sun, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';

export const FieldSetupForm: React.FC = () => {
  const { config, updateConfig, setCropType, resetToDefaults } = useFarmConfig();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: string, value: any) => {
    const nextConfig = { ...config, [field]: value };
    const result = farmConfigSchema.safeParse(nextConfig);
    if (!result.success) {
      const fieldError = result.error.errors.find((err) => err.path[0] === field);
      if (fieldError) {
        setErrors((prev) => ({ ...prev, [field]: fieldError.message }));
      } else {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[field];
          return updated;
        });
      }
    } else {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleInputChange = (field: keyof typeof config, val: number | string) => {
    updateConfig(field, val as never);
    validateField(field, val);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Field Geometry & Configuration</h2>
            <p className="text-xs text-slate-400">Adjust micro-climate and PV tracker parameters</p>
          </div>
        </div>
        <button
          onClick={resetToDefaults}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors border border-slate-700"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      <div className="space-y-6">
        {/* Geographic Coordinates */}
        <div>
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Field Location (GPS)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Latitude (°N)</span>
                <span className="font-mono text-emerald-400">{config.latitude.toFixed(4)}</span>
              </div>
              <input
                type="number"
                step="0.0001"
                value={config.latitude}
                onChange={(e) => handleInputChange('latitude', parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm font-mono text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              {errors.latitude && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.latitude}</p>}
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Longitude (°E/W)</span>
                <span className="font-mono text-emerald-400">{config.longitude.toFixed(4)}</span>
              </div>
              <input
                type="number"
                step="0.0001"
                value={config.longitude}
                onChange={(e) => handleInputChange('longitude', parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm font-mono text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              {errors.longitude && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.longitude}</p>}
            </div>
          </div>
        </div>

        {/* Panel Array Geometry Controls */}
        <div className="space-y-4 pt-2 border-t border-slate-800/80">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            PV Tracker Array Geometry
          </label>

          {/* Panel Height Slider */}
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Ground Clearance Height: <strong className="text-emerald-400 font-mono">{config.panelHeight.toFixed(1)} m</strong></span>
              <span className="text-slate-500 font-mono">1.5m - 4.5m</span>
            </div>
            <input
              type="range"
              min={1.5}
              max={4.5}
              step={0.1}
              value={config.panelHeight}
              onChange={(e) => handleInputChange('panelHeight', parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            {errors.panelHeight && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.panelHeight}</p>}
          </div>

          {/* Panel Tilt Angle Slider */}
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Panel Tilt Angle: <strong className="text-amber-400 font-mono">{config.panelTilt}°</strong></span>
              <span className="text-slate-500 font-mono">-45° to +45°</span>
            </div>
            <input
              type="range"
              min={-45}
              max={45}
              step={1}
              value={config.panelTilt}
              onChange={(e) => handleInputChange('panelTilt', parseInt(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            {errors.panelTilt && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.panelTilt}</p>}
          </div>

          {/* Row Pitch / Spacing Slider */}
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Row Pitch (Inter-row Spacing): <strong className="text-emerald-400 font-mono">{config.rowPitch.toFixed(1)} m</strong></span>
              <span className="text-slate-500 font-mono">2.0m - 8.0m</span>
            </div>
            <input
              type="range"
              min={2.0}
              max={8.0}
              step={0.1}
              value={config.rowPitch}
              onChange={(e) => handleInputChange('rowPitch', parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            {errors.rowPitch && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.rowPitch}</p>}
          </div>
        </div>

        {/* Crop Profile Selection */}
        <div className="space-y-3 pt-2 border-t border-slate-800/80">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sun className="w-3.5 h-3.5 text-emerald-400" />
            Under-Canopy Crop Selection
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(CROP_PROFILES) as CropType[]).map((key) => {
              const crop = CROP_PROFILES[key];
              const isSelected = config.cropType === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCropType(key)}
                  className={`p-2.5 rounded-xl border text-left transition-all text-xs flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 shadow-sm ring-1 ring-emerald-500/30'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="font-semibold text-slate-200 capitalize">{key}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <span className="text-[10px] text-slate-400">Target DLI: <span className="font-mono text-emerald-400">{crop.targetDLI}</span></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
