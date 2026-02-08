"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, MapPin, Cpu } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  // Live Tactical Clock
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#020617]/95 backdrop-blur-3xl py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        
        {/* Left: Tactical Location & Time */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest">
            <MapPin className="w-3 h-3" />
            STATION_ORIGIN: DELHI_INDIA
          </div>
          <div className="text-gray-500 font-mono text-[10px] tracking-widest flex items-center gap-2">
            <Cpu className="w-3 h-3 animate-pulse" />
            SYSTEM_TIME: {time || "00:00:00"}
          </div>
        </div>

        {/* Center: Brand Identity */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-white font-bold tracking-[0.3em] text-lg uppercase">
            Vansh <span className="text-cyan-400 text-glow">Tyagi</span>
          </h3>
          <p className="text-gray-500 font-mono text-[8px] mt-2 tracking-[0.4em] uppercase">
           ENGINEERING SYSTEMS WITH A CONSULTING MINDSET
          </p>
        </div>

        {/* Right: Focused Professional Channel */}
        <div className="flex justify-center md:justify-end">
          <motion.a 
            href="https://www.linkedin.com/in/vansh-tyagi-069365328" 
            target="_blank"
            whileHover={{ 
              scale: 1.1,
              color: "#22d3ee",
              filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.5))" 
            }}
            className="text-gray-400 transition-all flex items-center gap-3 font-mono text-[10px] tracking-[0.2em]"
          >
            <span>VERIFY_SIGNAL</span>
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Bottom Security Bar */}
      <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
        <p className="text-gray-600 font-mono text-[8px] tracking-[0.5em] uppercase">
          © 2026 // ALL_SYSTEMS_OPERATIONAL // ARCH_V1.0
        </p>
        
        {/* Visual Progress Bar */}
        <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
            className="absolute inset-0 bg-cyan-500"
          />
        </div>
      </div>
    </footer>
  );
}