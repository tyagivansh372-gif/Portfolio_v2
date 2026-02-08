"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DigitalOcean from "./DigitalOcean";
import { Environment, ContactShadows } from "@react-three/drei";
import NavalVessel from "./NavalVessel";

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <Canvas 
        dpr={[1, 2]} 
        // Maintains the tactical 'birds-eye' view for the ship deployment
        camera={{ position: [0, 5, 15], fov: 45 }}
      >
        <color attach="background" args={["#020617"]} />
        
        {/* Fog parameters tuned to hide the ship at Z: -100 (Horizon) */}
        <fog attach="fog" args={["#020617", 10, 50]} />
        
        <Suspense fallback={null}>
          <Environment preset="night" />
          <DigitalOcean />
          
          {/* The NavalVessel now uses a native window scroll listener 
            to sync with your DRDO and McKinsey experience cards.
          */}
          <NavalVessel />
        </Suspense>

        {/* Tactical lighting to highlight the stealth hull and wireframe waves */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
        
        <ContactShadows 
          opacity={0.4} 
          scale={20} 
          blur={2.4} 
          far={10} 
          color="#000000" 
        />
      </Canvas>
    </div>
  );
}