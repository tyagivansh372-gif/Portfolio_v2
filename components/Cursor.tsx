"use client";
import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useSpring(0, { stiffness: 1000, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 4); 
      mouseY.set(e.clientY - 4);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        mixBlendMode: "difference", 
      }}
      className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_10px_rgba(34,211,238,0.8)]"
    />
  );
}