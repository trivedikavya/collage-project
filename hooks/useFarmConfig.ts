import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FarmConfig, CropType } from '@/types/agrivoltaics';
import { CROP_PROFILES } from '@/lib/cropData';

interface FarmConfigState {
  config: FarmConfig;
  updateConfig: <K extends keyof FarmConfig>(key: K, value: FarmConfig[K]) => void;
  setCropType: (crop: CropType) => void;
  resetToDefaults: () => void;
}

const DEFAULT_CONFIG: FarmConfig = {
  latitude: 37.7749,
  longitude: -122.4194,
  panelHeight: 2.5,  // meters
  panelTilt: 25,     // degrees
  rowPitch: 4.5,     // meters
  cropType: 'lettuce',
  targetDLI: 14,     // mol/m²/day
};

export const useFarmConfig = create<FarmConfigState>()(
  persist(
    (set) => ({
      config: DEFAULT_CONFIG,
      updateConfig: (key, value) =>
        set((state) => ({
          config: {
            ...state.config,
            [key]: value,
          },
        })),
      setCropType: (crop) =>
        set((state) => {
          const cropProfile = CROP_PROFILES[crop];
          return {
            config: {
              ...state.config,
              cropType: crop,
              targetDLI: cropProfile ? cropProfile.targetDLI : state.config.targetDLI,
            },
          };
        }),
      resetToDefaults: () => set({ config: DEFAULT_CONFIG }),
    }),
    {
      name: 'agrivoltaics-farm-config-v1',
    }
  )
);
