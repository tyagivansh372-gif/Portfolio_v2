"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataDrone() {
  const droneRef = useRef<THREE.Group>(null);
  
  // Initial position far back in the horizon
  const position = new THREE.Vector3(-20, 2, -40);

  useFrame((state, delta) => {
    if (!droneRef.current) return;

    // 1. Movement: Slowly move forward along Z axis across the ocean
    droneRef.current.position.z += delta * 2; // Adjust speed here
    droneRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.5) * 0.02; // Slight side-to-side drift

    // 2. Bobbing effect: Gentle up and down motion simulating floating on waves
    droneRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * 2) * 0.2;

    // 3. Reset position for infinite looping effect
    if (droneRef.current.position.z > 20) {
      droneRef.current.position.z = -50;
      droneRef.current.position.x = (Math.random() - 0.5) * 30; // Randomize starting X position
    }

    // 4. Rotation: Slow, futuristic spin
    droneRef.current.rotation.z += delta * 0.5;
    droneRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={droneRef} position={position}>
      {/* The glowing core of the drone */}
      <mesh>
        <octahedronGeometry args={[0.7, 0]} /> {/* Low-poly tactical shape */}
        <meshStandardMaterial
          color="#00f2ff" // Cyan color matching your theme
          emissive="#00f2ff" // Makes it glow
          emissiveIntensity={2} // Strength of the glow
          toneMapped={false} // Ensures the colors stay vibrant
        />
      </mesh>

      {/* A larger, faint wireframe outer shell for that technical look */}
      <mesh>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#00f2ff" wireframe={true} transparent opacity={0.1} />
      </mesh>
      
      {/* A subtle point light following the drone to illuminate waves beneath it */}
      <pointLight color="#00f2ff" intensity={3} distance={10} decay={2} position={[0, -1, 0]} />
    </group>
  );
}