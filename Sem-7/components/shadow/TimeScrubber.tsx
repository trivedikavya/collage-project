'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sun, Moon, Clock, FastForward } from 'lucide-react';

interface TimeScrubberProps {
  activeTime: Date;
  onChangeTime: (newTime: Date) => void;
}

export const TimeScrubber: React.FC<TimeScrubberProps> = ({ activeTime, onChangeTime }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  // Minutes from 00:00 (0 to 1439)
  const currentMinutes = activeTime.getHours() * 60 + activeTime.getMinutes();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        const nextTime = new Date(activeTime.getTime() + 15 * 60 * 1000); // advance 15 mins
        // Loop back to 06:00 if past 21:00
        if (nextTime.getHours() >= 21) {
          nextTime.setHours(6, 0, 0, 0);
        }
        onChangeTime(nextTime);
      }, 500 / speedMultiplier);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeTime, onChangeTime, speedMultiplier]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mins = parseInt(e.target.value);
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const updated = new Date(activeTime);
    updated.setHours(h, m, 0, 0);
    onChangeTime(updated);
  };

  const jumpToPresetHour = (hour: number) => {
    const updated = new Date(activeTime);
    updated.setHours(hour, 0, 0, 0);
    onChangeTime(updated);
  };

  // Format time display string (e.g. "02:30 PM")
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-md space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-100">Solar Time Scrubber</h3>
            <p className="text-xs text-slate-400">Simulate daily solar progression and dynamic shadows</p>
          </div>
        </div>

        {/* Big Active Time Display */}
        <div className="flex items-center space-x-3 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
          <Sun className={`w-4 h-4 ${activeTime.getHours() >= 6 && activeTime.getHours() <= 19 ? 'text-amber-400 animate-spin-slow' : 'text-slate-600'}`} />
          <span className="text-lg font-bold font-mono text-slate-100 tracking-wider">
            {formatTime(activeTime)}
          </span>
        </div>
      </div>

      {/* Main Slider Track */}
      <div className="space-y-2">
        <div className="relative">
          <input
            type="range"
            min={360}  // 06:00 AM
            max={1200} // 08:00 PM (20:00)
            step={15}
            value={currentMinutes}
            onChange={handleSliderChange}
            className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-slate-800"
          />
        </div>

        {/* Time Ticks */}
        <div className="flex justify-between text-[11px] font-mono text-slate-400 px-1">
          <span>06:00 AM (Dawn)</span>
          <span>09:00 AM</span>
          <span>12:00 PM (Zenith)</span>
          <span>03:00 PM</span>
          <span>06:00 PM</span>
          <span>08:00 PM (Dusk)</span>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold text-xs transition-all ${
              isPlaying
                ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/20'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Pause Simulation' : 'Play Solar Loop'}</span>
          </button>

          <button
            onClick={() => {
              setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 5 : 1));
            }}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 flex items-center space-x-1"
          >
            <FastForward className="w-3.5 h-3.5 text-amber-400" />
            <span>{speedMultiplier}x Speed</span>
          </button>
        </div>

        {/* Jump Presets */}
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-slate-500 text-[11px]">Quick Jump:</span>
          <button
            onClick={() => jumpToPresetHour(7)}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            Morning (07:00)
          </button>
          <button
            onClick={() => jumpToPresetHour(12)}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            Noon (12:00)
          </button>
          <button
            onClick={() => jumpToPresetHour(17)}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            Evening (17:00)
          </button>
        </div>
      </div>
    </div>
  );
};
