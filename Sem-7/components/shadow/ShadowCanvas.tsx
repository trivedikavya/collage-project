'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useFarmConfig } from '@/hooks/useFarmConfig';
import { calculatePanelShadow, PanelShadowResult } from '@/lib/solarMath';

interface ShadowCanvasProps {
  activeTime: Date; // Active timestamp from TimeScrubber
}

export const ShadowCanvas: React.FC<ShadowCanvasProps> = ({ activeTime }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { config } = useFarmConfig();

  const [shadowMetrics, setShadowMetrics] = useState<PanelShadowResult>({
    shadowLength: 0,
    dx: 0,
    dy: 0,
    altitude: 0,
    azimuth: 0,
    altitudeDeg: 0,
    azimuthDeg: 0,
    isNight: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const renderFrame = () => {
      // Get device pixel ratio for crisp rendering
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      // Clear previous canvas frame context completely to avoid memory leak / overlap
      ctx.clearRect(0, 0, width, height);

      // Compute solar calculations using SunCalc & solarMath
      const calc = calculatePanelShadow(
        config.latitude,
        config.longitude,
        activeTime,
        config.panelHeight,
        2.0,
        config.panelTilt
      );
      setShadowMetrics(calc);

      // 1. Draw Soil Ground Grid Background
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(0, 0, width, height);

      // Grid line properties
      const gridSize = 40; // 40px = 1 meter equivalent
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Crop Beds (Green Stripes)
      const numRows = 5;
      const rowPitchPx = config.rowPitch * 25; // Scale row pitch to canvas
      const startY = 60;
      const bedWidth = width - 80;

      for (let r = 0; r < numRows; r++) {
        const bedY = startY + r * rowPitchPx;
        if (bedY > height - 40) break;

        // Sunlight background tint for crop beds (Warm Golden Amber)
        ctx.fillStyle = calc.isNight ? 'rgba(15, 23, 42, 0.9)' : 'rgba(245, 158, 11, 0.15)';
        ctx.fillRect(40, bedY - 15, bedWidth, 30);

        // Crop row center line
        ctx.strokeStyle = '#10B981';
        ctx.setLineDash([6, 6]);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(40, bedY);
        ctx.lineTo(40 + bedWidth, bedY);
        ctx.stroke();
        ctx.setLineDash([]); // Reset line dash
      }

      // 3. Render Panel Strings and Dynamic Shadow Polygons
      if (!calc.isNight && calc.shadowLength > 0) {
        // Shadow Vector displacement mapped to canvas scale (1m = 18px)
        const shadowPxX = calc.dx * 18;
        const shadowPxY = calc.dy * 18;

        for (let r = 0; r < numRows; r++) {
          const rowY = startY + r * rowPitchPx;
          if (rowY > height - 40) break;

          const panelX = 50;
          const panelW = bedWidth - 20;
          const panelH = 16; // Panel string depth in pixels

          // Shadow Polygon vertices cast across the ground
          ctx.beginPath();
          ctx.moveTo(panelX, rowY - panelH / 2);
          ctx.lineTo(panelX + panelW, rowY - panelH / 2);
          ctx.lineTo(panelX + panelW + shadowPxX, rowY + panelH / 2 + shadowPxY);
          ctx.lineTo(panelX + shadowPxX, rowY + panelH / 2 + shadowPxY);
          ctx.closePath();

          // Dark Slate Gray / Blue Tint Shadow overlay as specified
          ctx.fillStyle = 'rgba(30, 58, 138, 0.45)';
          ctx.fill();

          // Soft shadow blur stroke
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // 4. Render Solar Panel String Rectangles on top of ground
      for (let r = 0; r < numRows; r++) {
        const rowY = startY + r * rowPitchPx;
        if (rowY > height - 40) break;

        const panelX = 50;
        const panelW = bedWidth - 20;
        const panelH = 14;

        // Panel frame shadow
        ctx.fillStyle = '#020617';
        ctx.fillRect(panelX - 2, rowY - panelH / 2 - 2, panelW + 4, panelH + 4);

        // Photovoltaic Dark Blue Glass
        const pvGradient = ctx.createLinearGradient(panelX, rowY - panelH / 2, panelX, rowY + panelH / 2);
        pvGradient.addColorStop(0, '#2563EB');
        pvGradient.addColorStop(1, '#1E3A8A');
        ctx.fillStyle = pvGradient;
        ctx.fillRect(panelX, rowY - panelH / 2, panelW, panelH);

        // Panel Silicon Grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1;
        for (let gx = panelX + 30; gx < panelX + panelW; gx += 30) {
          ctx.beginPath();
          ctx.moveTo(gx, rowY - panelH / 2);
          ctx.lineTo(gx, rowY + panelH / 2);
          ctx.stroke();
        }

        // Row identifier label
        ctx.fillStyle = '#94A3B8';
        ctx.font = '10px monospace';
        ctx.fillText(`PV ARRAY STRING ${r + 1}`, 10, rowY + 3);
      }

      // 5. Draw Sun Position Compass / Compass Arrow
      const compassX = width - 60;
      const compassY = 60;
      ctx.beginPath();
      ctx.arc(compassX, compassY, 28, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Cardinal N label
      ctx.fillStyle = '#10B981';
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText('N', compassX - 4, compassY - 14);

      if (!calc.isNight) {
        // Draw Solar Ray Arrow from sun azimuth angle
        const sunArrowX = compassX + Math.sin(calc.azimuth) * 20;
        const sunArrowY = compassY - Math.cos(calc.azimuth) * 20;

        ctx.beginPath();
        ctx.moveTo(compassX, compassY);
        ctx.lineTo(sunArrowX, sunArrowY);
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sunArrowX, sunArrowY, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#F59E0B';
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [config, activeTime]);

  return (
    <div className="relative w-full h-full min-h-[420px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between">
      {/* HUD Top Bar Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="bg-slate-900/90 border border-slate-800/90 backdrop-blur-md px-3 py-2 rounded-xl flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-200 font-semibold">2D Ray-Tracing Engine</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 font-mono">
            Elevation: <strong className="text-amber-400">{shadowMetrics.altitudeDeg.toFixed(1)}°</strong>
          </span>
          <span className="text-slate-400 font-mono">
            Azimuth: <strong className="text-amber-400">{shadowMetrics.azimuthDeg.toFixed(1)}°</strong>
          </span>
        </div>

        <div className="bg-slate-900/90 border border-slate-800/90 backdrop-blur-md px-3 py-2 rounded-xl text-xs font-mono text-slate-300">
          Shadow Length: <strong className="text-cyan-400">{shadowMetrics.shadowLength.toFixed(2)}m</strong>
        </div>
      </div>

      {/* Main Render Canvas */}
      <canvas ref={canvasRef} className="w-full h-full min-h-[420px] block cursor-crosshair" />

      {/* Legend Footer */}
      <div className="bg-slate-900/95 border-t border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded bg-blue-900/80 border border-blue-500/50" />
            <span className="text-slate-300 font-medium">Shaded Micro-Zone (Dark Blue)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded bg-amber-500/20 border border-amber-500/50" />
            <span className="text-slate-300 font-medium">Direct Sunlight Zone (Golden Amber)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded bg-emerald-500/20 border border-emerald-500/50" />
            <span className="text-slate-300 font-medium">Crop Bed Canopy</span>
          </div>
        </div>
        <span className="text-[11px] text-slate-400 font-mono">60 FPS Hardware Accelerated</span>
      </div>
    </div>
  );
};
