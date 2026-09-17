'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { useFarmConfig } from '@/hooks/useFarmConfig';
import { generateHourlyOptimizationData, calculateDLIFromHourly } from '@/lib/solarEngine';
import { useCoOptimization } from '@/hooks/useCoOptimization';

// Components for Screens
import { FieldSetupForm } from '@/components/setup/FieldSetupForm';
import { ArraySchematicPreview } from '@/components/setup/ArraySchematicPreview';
import { MetricSummaryBar } from '@/components/setup/MetricSummaryBar';

import { ShadowCanvas } from '@/components/shadow/ShadowCanvas';
import { TimeScrubber } from '@/components/shadow/TimeScrubber';

import { ZoneGrid } from '@/components/irrigation/ZoneGrid';

import { CoOptChart } from '@/components/analytics/CoOptChart';
import { ParetoSlider } from '@/components/analytics/ParetoSlider';
import { OverrideModal } from '@/components/analytics/OverrideModal';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'setup' | 'shadow' | 'irrigation' | 'analytics' | 'unified'>('unified');

  // Global Farm Config Store
  const { config, updateConfig } = useFarmConfig();

  // Active time for time scrubber simulation (Defaults to 12:00 PM Noon)
  const [activeTime, setActiveTime] = useState<Date>(() => {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    return d;
  });

  // Modal state for MQTT hardware angle override
  const [isOverrideModalOpen, setIsOverrideModalOpen] = useState<boolean>(false);

  // Generate 24-hour solar optimization data dynamically whenever config changes
  const hourlyData = useMemo(() => {
    return generateHourlyOptimizationData(config, activeTime);
  }, [config, activeTime]);

  // Calculate accumulated Daily Light Integral (DLI)
  const dliStats = useMemo(() => {
    return calculateDLIFromHourly(hourlyData);
  }, [hourlyData]);

  // Pareto Trade-Off Hook for Co-Optimization
  const { optimization, setStrategyWeight } = useCoOptimization(hourlyData, config);

  const handleConfirmOverride = (newTilt: number) => {
    updateConfig('panelTilt', newTilt);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 space-y-6">
        {/* Metric Summary Bar across all views */}
        <MetricSummaryBar />

        {/* SCREEN 1 VIEW: Field Setup & Geometry Config */}
        {(activeTab === 'setup' || activeTab === 'unified') && (
          <section className="space-y-6">
            {activeTab === 'unified' && (
              <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Screen 1 — Field Setup & Array Geometry Config</span>
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FieldSetupForm />
              <ArraySchematicPreview />
            </div>
          </section>
        )}

        {/* SCREEN 2 VIEW: Dynamic 2D Shadow Map Engine */}
        {(activeTab === 'shadow' || activeTab === 'unified') && (
          <section className="space-y-6">
            {activeTab === 'unified' && (
              <div className="flex items-center space-x-2 text-xs font-semibold text-amber-400 uppercase tracking-wider pt-4 border-t border-slate-800">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Screen 2 — Dynamic 2D Shadow Map Engine</span>
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ShadowCanvas activeTime={activeTime} />
              </div>
              <div className="space-y-6">
                <TimeScrubber activeTime={activeTime} onChangeTime={setActiveTime} />

                {/* DLI Accumulated Breakdown Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Daily Light Integral (DLI) Estimation
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Shaded Canopy DLI</span>
                      <span className="text-lg font-bold font-mono text-emerald-400">
                        {dliStats.shadedDLI} mol/m²/day
                      </span>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Unshaded Field DLI</span>
                      <span className="text-lg font-bold font-mono text-amber-400">
                        {dliStats.unshadedDLI} mol/m²/day
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Target requirement for <strong className="text-slate-200 capitalize">{config.cropType}</strong> is{' '}
                    <strong className="text-emerald-400">{config.targetDLI} mol/m²/day</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SCREEN 3 VIEW: Micro-Zone Irrigation Controller */}
        {(activeTab === 'irrigation' || activeTab === 'unified') && (
          <section className="space-y-6">
            {activeTab === 'unified' && (
              <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider pt-4 border-t border-slate-800">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>Screen 3 — Micro-Zone Precision Irrigation Controller</span>
              </div>
            )}
            <ZoneGrid />
          </section>
        )}

        {/* SCREEN 4 VIEW: Co-Optimization Analytics */}
        {(activeTab === 'analytics' || activeTab === 'unified') && (
          <section className="space-y-6">
            {activeTab === 'unified' && (
              <div className="flex items-center space-x-2 text-xs font-semibold text-purple-400 uppercase tracking-wider pt-4 border-t border-slate-800">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Screen 4 — Power Output vs. Crop Yield Co-Optimization</span>
              </div>
            )}
            <CoOptChart data={hourlyData} />
            <ParetoSlider
              optimization={optimization}
              onWeightChange={setStrategyWeight}
              onOpenOverrideModal={() => setIsOverrideModalOpen(true)}
            />
          </section>
        )}
      </main>

      {/* MQTT Tracker Hardware Override Modal */}
      <OverrideModal
        isOpen={isOverrideModalOpen}
        onClose={() => setIsOverrideModalOpen(false)}
        currentTilt={config.panelTilt}
        onConfirmOverride={handleConfirmOverride}
      />

      {/* Global AgTech Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 px-6 text-center text-xs text-slate-500">
        <p>Agrivoltaics Micro-Zone Shadow Mapping & Precision Irrigation Engine © 2026</p>
      </footer>
    </div>
  );
}
