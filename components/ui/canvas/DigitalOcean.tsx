"use client";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const vertexShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform float uTime;

  // Standard Simplex Noise for displacement
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vUv = uv;
    
    // Create multiple layers of noise for organic motion
    float elevation = snoise(vec2(position.x * 0.3, position.y * 0.3 + uTime * 0.2)) * 0.4;
    elevation += snoise(vec2(position.x * 0.5, position.y * 0.5 - uTime * 0.1)) * 0.2;
    
    vec3 newPosition = position;
    newPosition.z += elevation;
    vElevation = elevation;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  void main() {
    // Dynamic color mixing based on height
    float mixStrength = (vElevation + 0.5) * 0.8;
    vec3 color = mix(uColorA, uColorB, mixStrength);
    
    // Sharp grid overlay for the "Digital" look
    float grid = sin(vUv.x * 120.0) * sin(vUv.y * 120.0);
    grid = step(0.97, grid);
    
    // Combine base color with grid glow
    color += grid * 0.4;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function DigitalOcean() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Memoizing uniforms prevents unnecessary re-renders
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color("#020617") }, // Deep midnight
    uColorB: { value: new THREE.Color("#00f2ff") }  // Electric cyan
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      // Direct mutation of uniform for maximum performance
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, 0]}>
      {/* High density segments (160x160) are required for smooth wave displacement.
        As a CS student, you'll recognize this as a trade-off between vertex 
        computation and visual fidelity.
      */}
      <planeGeometry args={[40, 40, 160, 160]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe={true}
        transparent={true}
      />
    </mesh>
  );
}