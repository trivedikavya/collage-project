'use client';

import React, { useState } from 'react';
import { X, Send, AlertTriangle, ShieldCheck, Sun, Compass } from 'lucide-react';

interface OverrideModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTilt: number;
  onConfirmOverride: (newTilt: number) => void;
}

export const OverrideModal: React.FC<OverrideModalProps> = ({
  isOpen,
  onClose,
  currentTilt,
  onConfirmOverride,
}) => {
  const [targetTilt, setTargetTilt] = useState<number>(currentTilt);
  const [stowMode, setStowMode] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSendPayload = () => {
    setIsSending(true);
    setStatusMessage('Connecting to MQTT Broker (mqtt://agri-tracker.field01.local:1883)...');

    setTimeout(() => {
      setStatusMessage('Publishing topic `agri/tracker/zone1/tilt/set` with payload...');
      setTimeout(() => {
        setIsSending(false);
        onConfirmOverride(stowMode ? 0 : targetTilt);
        setStatusMessage('ACK 200 OK - Tracker tilt command dispatched successfully!');
        setTimeout(() => {
          setStatusMessage(null);
          onClose();
        }, 1500);
      }, 1000);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-100">Hardware Angle Override</h3>
              <p className="text-xs text-slate-400">Dispatch direct MQTT / HTTP tilt command</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Toast */}
        {statusMessage && (
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-300 text-xs font-mono flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Modal Controls */}
        <div className="space-y-4 text-xs">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Manual Target Angle: <strong className="text-amber-400 font-mono">{stowMode ? '0° (STOW)' : `${targetTilt}°`}</strong></span>
              <span className="text-slate-500 font-mono">-45° to +45°</span>
            </div>
            <input
              type="range"
              min={-45}
              max={45}
              step={1}
              disabled={stowMode}
              value={targetTilt}
              onChange={(e) => setTargetTilt(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500 disabled:opacity-40"
            />
          </div>

          {/* Quick Mode Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setStowMode(false);
                setTargetTilt(0);
              }}
              className={`p-2.5 rounded-xl border text-center font-mono font-semibold transition-colors ${
                !stowMode && targetTilt === 0
                  ? 'bg-amber-500/10 border-amber-500 text-amber-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              0° Flat Solar Zenith
            </button>

            <button
              type="button"
              onClick={() => setStowMode(!stowMode)}
              className={`p-2.5 rounded-xl border text-center font-mono font-semibold transition-colors ${
                stowMode
                  ? 'bg-red-500/20 border-red-500 text-red-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              ⚠️ Hail/Wind STOW Mode
            </button>
          </div>

          {/* JSON Payload Inspection Preview */}
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block">
              MQTT Payload Inspection
            </span>
            <pre className="text-[11px] font-mono text-emerald-400 whitespace-pre-wrap">
{`{
  "device_id": "PV_TRACKER_ARRAY_01",
  "target_tilt_deg": ${stowMode ? 0 : targetTilt},
  "stow_override": ${stowMode},
  "timestamp": "${new Date().toISOString()}"
}`}
            </pre>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleSendPayload}
            disabled={isSending}
            className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSending ? 'Transmitting MQTT...' : 'Send Hardware Override'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
