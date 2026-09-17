import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agrivoltaics Micro-Zone Optimizer | Shadow Mapping & Precision Irrigation',
  description:
    'Full-stack AgTech prototype for 2D solar ray-tracing shadow mapping, micro-zone evapotranspiration irrigation control, and PV-crop yield co-optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
