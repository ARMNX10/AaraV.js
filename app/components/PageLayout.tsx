'use client';

import { ReactNode } from 'react';
import InteractiveBackground from './InteractiveBackground';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 -z-10 opacity-80">
        <InteractiveBackground />
      </div>
      <div className="relative z-10">
        {children}
        {/* Fade effect at the bottom */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
