"use client";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NavalVessel() {
  const shipRef = useRef<THREE.Group>(null);
  const radarRef = useRef<THREE.Mesh>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Listen to native browser scroll to prevent the 'dual scrollbar' issue
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the user has scrolled as a decimal between 0 and 1
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!shipRef.current) return;

    // 2. TACTICAL DEPLOYMENT: Map scroll progress to Z-axis movement
    // Starts deep in the fog (-100) and sails past the camera (+40)
    const targetZ = -100 + (scrollProgress * 140);
    
    // Smoothly interpolate (lerp) the position to prevent jittering
    shipRef.current.position.z = THREE.MathUtils.lerp(
      shipRef.current.position.z, 
      targetZ, 
      0.05
    );

    // 3. HYDRO-DYNAMICS: Simulating the weight of a heavy stealth hull on waves
    shipRef.current.position.y = -1.8 + Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
    shipRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.02;
    shipRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.01;

    // 4. RADAR: Rotating sensor for high-tech scanning effect
    if (radarRef.current) {
      radarRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={shipRef} position={[0, -1.8, -100]}>
      {/* STEALTH HULL: Inspired by Visakhapatnam-class geometry */}
      <mesh castShadow>
        <boxGeometry args={[4.6, 2.6, 23]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* TIERED SUPERSTRUCTURE */}
      <group position={[0, 2, 2]}>
        {/* Main Deck House (Bridge) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.6, 1.8, 8.5]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>

        {/* Integrated Sensor Mast */}
        <mesh position={[0, 3, -1.5]}>
          <boxGeometry args={[1.2, 5.5, 1.2]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>

        {/* Tactical Scanning Radar */}
        <mesh ref={radarRef} position={[0, 5.8, -1.5]}>
          <boxGeometry args={[2.5, 0.15, 0.25]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={5} />
        </mesh>
      </group>

      {/* WEAPON MOUNTS: 76mm Gun & VLS cells placeholder */}
      <mesh position={[0, 1.6, 9]}>
        <cylinderGeometry args={[0.5, 0.7, 1.2]} />
        <meshStandardMaterial color="#334155" />
      </mesh>

      {/* TACTICAL LIGHTING & HULL GLOW */}
      <pointLight position={[0, 2, 12]} color="#22d3ee" intensity={12} distance={25} />
      <pointLight position={[-2.4, 0.6, 11]} color="red" intensity={3} distance={6} />
      <pointLight position={[2.4, 0.6, 11]} color="green" intensity={3} distance={6} />
    </group>
  );
}