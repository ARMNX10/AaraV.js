'use client';

import { ReactNode } from 'react';
import InteractiveBackground from './InteractiveBackground';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 -z-10">
        <InteractiveBackground />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
