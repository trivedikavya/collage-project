<img width="1919" height="958" alt="image" src="https://github.com/user-attachments/assets/c6f5166f-a9b6-4485-be31-b4b8bf0609f3" />
<img width="1898" height="956" alt="image" src="https://github.com/user-attachments/assets/6f016f04-9f6b-4919-8bdf-df2d8eab626c" />
<img width="1912" height="963" alt="image" src="https://github.com/user-attachments/assets/eb33d6d4-e0e8-4d8c-966a-c52f2e2b57d3" />
<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/8e49750f-475b-4514-b0ae-d454f89ef55e" />



#  Agrivoltaics Micro-Zone Shadow Mapping & Precision Irrigation Engine

> **A full-stack enterprise AgTech web application prototype designed to co-optimize photovoltaic (PV) power generation alongside under-canopy crop microclimates and precision differential irrigation.**

---

##  Key Features & Architectural Highlights

The system addresses the dual-land-use challenge of modern Agrivoltaics by unifying solar physics ray-tracing, evapotranspiration water reduction modeling, and economic trade-off optimization across 4 dedicated control screens:

1. **Screen 1: Field Setup & Array Geometry Config**
   - Controlled geometric sliders for Ground Clearance Height ($1.5\text{m} - 4.5\text{m}$), Single-Axis Tilt Angle ($-45^\circ$ to $+45^\circ$), and Row Pitch Spacing ($2.0\text{m} - 8.0\text{m}$).
   - Dynamic real-time 2D SVG isometric cross-sectional preview illustrating tracker poles, PV glass panels, sun ray vectors, and crop canopy height.
   - Crop profile preset selector (Butterhead Lettuce, Baby Spinach, Vine Tomatoes, June-Bearing Strawberries, Blueberries).
   - Zod schema validation with instant error messages.

2. **Screen 2: Dynamic 2D Shadow Map Engine**
   - High-performance 60 FPS HTML5 Canvas ray-tracing simulation rendering parallel PV array strings over ground soil beds.
   - Real-time trigonometric shadow displacement calculation based on `SunCalc` solar elevation ($\theta$) and azimuth ($\phi$).
   - Visual ground color coding: Shaded micro-zones (`rgba(30, 58, 138, 0.45)`) vs. Direct Sunlight (`rgba(245, 158, 11, 0.25)`).
   - Interactive 24-hour time scrubber with play/pause loop (15-min ticks) and jump presets (Dawn, Zenith, Dusk).
   - Accumulated Daily Light Integral (DLI) estimation in $\text{mol/m}^2/\text{day}$.

3. **Screen 3: Micro-Zone Precision Irrigation Controller**
   - Differential watering calculation incorporating evapotranspiration suppression:
     $$\text{Evapotranspiration Reduction Factor} = 0.40 \times \text{Shade Ratio}$$
     $$\text{Water Volume (L)} = \text{Base Volume} \times (1 - 0.40 \times \text{Shade Ratio})$$
   - Interactive $3 \times 3$ micro-zone grid displaying water savings badges, soil moisture progress bars, and manual valve override toggles.
   - Automated CSV schedule export generator formatting valve timing, runtime, and volume for field microcontrollers.

4. **Screen 4: Power Output vs. Crop Yield Co-Optimization**
   - Dual-axis Recharts visualization plotting Solar PV Revenue ($) on Left Y-Axis alongside Under-Canopy Crop PAR ($\mu\text{mol/m}^2/\text{s}$) on Right Y-Axis.
   - Translucent red reference highlights identifying ambient solar heat stress hours.
   - Interactive Pareto strategy weight slider ($0 = \text{100\% Crop Priority}$, $100 = \text{100\% PV Priority}$) updating projected net economic gain:
     $$\text{Net Gain} = (\text{Solar Revenue} \times w) + (\text{Crop Value} \times (1 - w)) - \text{Heat Stress Penalty}$$
   - MQTT / HTTP API Hardware Angle Override Modal for dispatching manual tracker tilt and STOW commands.

---

##  Mathematical & Physics Engine

### 1. Trigonometric Shadow Projection (`lib/solarMath.ts`)
Solar position vectors are calculated via `SunCalc`. The 2D ground shadow displacement length and Cartesian offsets are derived as follows:

$$\text{Solar Elevation Angle} = \alpha$$
$$\text{Solar Azimuth Angle} = \phi$$
$$\text{Effective Panel Height} = H_{\text{panel}} + \sin(|\theta_{\text{tilt}}|) \cdot \left(\frac{W_{\text{panel}}}{2}\right)$$
$$\text{Shadow Length } (L) = \frac{\text{Effective Height}}{\tan(\alpha)} \quad \text{for } \alpha > 0$$
$$\Delta x = L \cdot \sin(\phi)$$
$$\Delta y = L \cdot \cos(\phi)$$

### 2. Evapotranspiration & Microclimate Irrigation (`lib/irrigationEngine.ts`)
Solar shading under PV panels reduces soil evaporation and crop transpiration rate by up to 40%:

$$\text{Shade Ratio } (S) = \min\left(1.0, \frac{\text{Shadow Length}}{\text{Row Pitch}}\right)$$
$$V_{\text{calculated}} = V_{\text{base}} \cdot (1 - 0.40 \cdot S)$$
$$T_{\text{valve}} = T_{\text{base}} \cdot (1 - 0.40 \cdot S)$$
$$\text{Water Savings \%} = (0.40 \cdot S) \cdot 100$$

---

##  Technology Stack Architecture

- **Frontend Framework**: Next.js 14 (App Router), React 18, TypeScript.
- **Styling & Theme**: Tailwind CSS (Custom dark charcoal `#0F172A`, emerald accents `#10B981`, amber warnings `#F59E0B`), Lucide-React Icons.
- **Physics Engine**: `SunCalc` (solar position calculations), HTML5 2D Canvas API (hardware-accelerated ray tracing).
- **State Management**: `Zustand` with `persist` middleware for automatic `localStorage` synchronization.
- **Charts & Data Visualization**: `Recharts` (`ResponsiveContainer`, `ComposedChart`, `Bar`, `Line`, `ReferenceArea`).
- **Validation**: `Zod` schema validation.

---

##  Directory Structure

```
c:\Users\hp\OneDrive\Desktop\Agri\
├── app/
│   ├── globals.css               # Global dark theme tokens & animations
│   ├── layout.tsx                # App root layout with HTML metadata
│   └── page.tsx                  # Main AgTech dashboard shell & tab controller
├── components/
│   ├── Header.tsx                # Enterprise navigation bar & GPS status
│   ├── setup/
│   │   ├── FieldSetupForm.tsx         # Controlled range inputs & Zod validation
│   │   ├── ArraySchematicPreview.tsx  # Dynamic SVG vector cross-section diagram
│   │   └── MetricSummaryBar.tsx       # Calculated KPI cards (kWp, DLI, LER)
│   ├── shadow/
│   │   ├── ShadowCanvas.tsx           # High-FPS HTML5 Canvas 2D shadow ray-tracer
│   │   └── TimeScrubber.tsx           # 24-hour solar progression scrubber
│   ├── irrigation/
│   │   └── ZoneGrid.tsx               # Micro-zone bed cards with valve manual toggle
│   └── analytics/
│       ├── CoOptChart.tsx             # Dual-axis Recharts (Solar Revenue vs Crop PAR)
│       ├── ParetoSlider.tsx           # Trade-off strategy weight slider & Net Gain
│       └── OverrideModal.tsx          # Direct MQTT / HTTP tracker angle override modal
├── hooks/
│   ├── useFarmConfig.ts          # Zustand store for farm parameters & persistence
│   └── useCoOptimization.ts      # Pareto trade-off weight calculator
├── lib/
│   ├── cropData.ts               # Crop profiles (Lettuce, Tomato, Spinach, Strawberries)
│   ├── exportSchedule.ts         # CSV exporter for irrigation microcontrollers
│   ├── irrigationEngine.ts       # Micro-zone evapotranspiration water formula
│   ├── solarEngine.ts            # 24-hour PAR irradiance & DLI calculations
│   ├── solarMath.ts              # SunCalc shadow projection utility
│   └── validations/
│       └── setupSchema.ts        # Zod validation rules
├── types/
│   ├── agrivoltaics.ts           # Domain interfaces for farm config & solar output
│   └── analytics.ts              # Types for optimization data & irrigation schedule
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

##  Quickstart Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the Agrivoltaics Micro-Zone Optimizer.


