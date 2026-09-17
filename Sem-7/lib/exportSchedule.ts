import { ZoneSchedule } from '@/types/analytics';

/**
 * Generates and triggers a downloadable CSV blob with columns:
 * Zone_ID, Zone_Name, Shade_Ratio_Pct, Base_Volume_L, Calculated_Volume_L, Valve_Runtime_Mins, Water_Savings_Pct, Valve_Open_Time, Manual_Override
 */
export function exportIrrigationCSV(schedules: ZoneSchedule[], filename = 'agrivoltaics_irrigation_schedule.csv') {
  const headers = [
    'Zone_ID',
    'Zone_Name',
    'Shade_Ratio_Pct',
    'Base_Volume_Liters',
    'Calculated_Volume_Liters',
    'Valve_Runtime_Minutes',
    'Water_Savings_Percent',
    'Valve_Open_Time',
    'Manual_Override',
    'Soil_Moisture_Pct',
  ];

  const rows = schedules.map((zone, idx) => {
    // Stagger valve start times every 15 minutes starting from 05:00 AM
    const startHour = 5 + Math.floor((idx * 15) / 60);
    const startMin = (idx * 15) % 60;
    const openTimeStr = `${startHour.toString().padStart(2, '0')}:${startMin.toString().padStart(2, '0')} AM`;

    return [
      zone.zoneId,
      `"${zone.zoneName}"`,
      `${Math.round(zone.shadeRatio * 100)}%`,
      zone.baseWaterVolumeLiters,
      zone.calculatedWaterVolumeLiters,
      zone.valveRuntimeMinutes,
      `${zone.waterSavingsPercent}%`,
      `"${openTimeStr}"`,
      zone.manualOverride ? 'ENABLED' : 'AUTO',
      `${zone.soilMoisturePercent}%`,
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Browser download trigger
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
