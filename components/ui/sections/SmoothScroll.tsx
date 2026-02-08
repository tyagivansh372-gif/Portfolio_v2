"use client";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: any }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        // Syncing with your 3D Digital Ocean background
        syncTouch: true 
      }}
    >
      {children}
    </ReactLenis>
  );
}