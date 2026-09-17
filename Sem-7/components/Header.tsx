'use client';

import React from 'react';
import { Sun, Layers, Droplets, LineChart, ShieldCheck, Activity, MapPin } from 'lucide-react';
import { useFarmConfig } from '@/hooks/useFarmConfig';

interface HeaderProps {
  activeTab: 'setup' | 'shadow' | 'irrigation' | 'analytics' | 'unified';
  setActiveTab: (tab: 'setup' | 'shadow' | 'irrigation' | 'analytics' | 'unified') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { config } = useFarmConfig();

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 border-b border-slate-800 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Brand Title */}
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-gradient-to-tr from-emerald-500 to-amber-500 rounded-xl shadow-lg shadow-emerald-500/20 text-slate-950">
            <Sun className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
              AGRIVOLTAICS
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-normal">
                Micro-Zone v1.0
              </span>
            </h1>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span>Shadow Mapping & Precision Irrigation Engine</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" /> {config.latitude.toFixed(2)}°, {config.longitude.toFixed(2)}°
              </span>
            </p>
          </div>
        </div>

        {/* Tab Navigation Buttons */}
        <nav className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-2xl text-xs">
          <button
            onClick={() => setActiveTab('unified')}
            className={`px-3.5 py-2 rounded-xl font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'unified'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Unified Command</span>
          </button>

          <button
            onClick={() => setActiveTab('setup')}
            className={`px-3.5 py-2 rounded-xl font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'setup'
                ? 'bg-slate-800 text-slate-100 font-semibold border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Screen 1: Field Setup</span>
          </button>

          <button
            onClick={() => setActiveTab('shadow')}
            className={`px-3.5 py-2 rounded-xl font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'shadow'
                ? 'bg-slate-800 text-slate-100 font-semibold border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Screen 2: 2D Shadow Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('irrigation')}
            className={`px-3.5 py-2 rounded-xl font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'irrigation'
                ? 'bg-slate-800 text-slate-100 font-semibold border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            <span>Screen 3: Irrigation</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3.5 py-2 rounded-xl font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'analytics'
                ? 'bg-slate-800 text-slate-100 font-semibold border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <LineChart className="w-3.5 h-3.5 text-purple-400" />
            <span>Screen 4: Analytics</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
