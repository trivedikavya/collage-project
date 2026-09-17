import { z } from 'zod';

export const farmConfigSchema = z.object({
  latitude: z
    .number({ invalid_type_error: 'Latitude must be a number' })
    .min(-90, 'Latitude must be between -90 and 90')
    .max(90, 'Latitude must be between -90 and 90'),
  longitude: z
    .number({ invalid_type_error: 'Longitude must be a number' })
    .min(-180, 'Longitude must be between -180 and 180')
    .max(180, 'Longitude must be between -180 and 180'),
  panelHeight: z
    .number({ invalid_type_error: 'Panel height must be a number' })
    .min(1.5, 'Panel height must be at least 1.5 meters for agricultural clearance')
    .max(4.5, 'Panel height cannot exceed 4.5 meters'),
  panelTilt: z
    .number({ invalid_type_error: 'Tilt angle must be a number' })
    .min(-45, 'Tilt angle must be at least -45 degrees')
    .max(45, 'Tilt angle cannot exceed 45 degrees'),
  rowPitch: z
    .number({ invalid_type_error: 'Row pitch must be a number' })
    .min(2.0, 'Row pitch (spacing) must be at least 2.0 meters')
    .max(8.0, 'Row pitch cannot exceed 8.0 meters'),
  cropType: z.enum(['lettuce', 'spinach', 'tomatoes', 'strawberries', 'berries'], {
    errorMap: () => ({ message: 'Please select a valid crop profile' }),
  }),
  targetDLI: z
    .number({ invalid_type_error: 'Target DLI must be a number' })
    .min(5, 'Target DLI must be at least 5 mol/m²/day')
    .max(40, 'Target DLI cannot exceed 40 mol/m²/day'),
});

export type FarmConfigSchemaType = z.infer<typeof farmConfigSchema>;
