"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tags = [
    { label: "SDE_INTERN_DRDO", glow: "cyan" },
    { label: "TOP_10%_IITG_CONSULTING", glow: "violet" },
    { label: "MCKINSEY_FORWARD_ALUM", glow: "cyan" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-40 px-4 md:px-10 z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* TOP STATUS LINE */}
        <span className="text-cyan-400 font-mono tracking-[0.6em] text-[10px] md:text-[12px] uppercase mb-16 block animate-pulse text-center">
          Full Stack Architect // Strategic Consultant
        </span>

        {/* PERSONNEL BLOCK: Responsive Flex Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 mb-16 w-full">

          {/* CIRCULAR PERSONNEL ID: Fluid Scaling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-[-6px] rounded-full border-2 border-cyan-500/20 animate-pulse" />

            <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-4 border-cyan-400/30 overflow-hidden bg-black shadow-[0_0_60px_rgba(34,211,238,0.2)]">
              <img
                src="/profile.jpeg"
                alt="Vansh Tyagi Personnel ID"
                className="w-full h-full object-cover object-[50%_28%] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-cyan-500 px-3 py-1 rounded-sm shadow-2xl">
               <span className="text-[8px] font-mono font-black text-black tracking-tighter uppercase"></span>
            </div>
          </motion.div>

          {/* NAME IDENTIFIER: Responsive Typography */}
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold text-white tracking-tighter whitespace-nowrap drop-shadow-2xl leading-none text-center lg:text-left"
          >
            Vansh <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">Tyagi</span>
          </motion.h1>
        </div>

        {/* MISSION DESCRIPTION: Fluid Scaling */}
        <div className="max-w-[95vw] md:max-w-5xl mx-auto text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-100 text-xl sm:text-2xl md:text-4xl leading-tight font-light tracking-tight drop-shadow-xl italic"
          >
            "This is Where <span className="text-cyan-400 font-medium">Code</span>, 
            <span className="text-white font-medium"> Data</span> & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500 font-medium"> Strategy</span> Converge."
          </motion.p>
        </div>

        {/* COMMAND CHIPS: Responsive Grid-to-Flex */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-4 md:gap-8 mb-20 w-full">
          {tags.map((tag, i) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`
                flex items-center gap-4 px-6 md:px-8 py-4 md:py-5 
                bg-black border-2 border-white/10 
                rounded-none backdrop-blur-3xl shadow-2xl
                transition-all duration-300 hover:border-white/40
                ${tag.glow === 'cyan' ? 'shadow-cyan-500/10' : 'shadow-violet-500/10'}
              `}
            >
              <div className={`h-3 w-3 rounded-full ${tag.glow === 'cyan' ? 'bg-cyan-500 animate-pulse' : 'bg-violet-500 animate-pulse'}`} />
              <span className="text-white font-mono text-[9px] md:text-[14px] font-black tracking-[0.3em] uppercase whitespace-nowrap">
                {tag.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* PRIMARY HUD ACTIONS - FIXED FOR MOBILE RESPONSIVENESS */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center w-full max-w-[90vw] sm:max-w-none">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-black rounded-none px-8 sm:px-16 py-7 sm:py-9 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] transition-all shadow-xl"
          >
            EXPLORE_MY_WORK 
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto border-white/20 text-white hover:border-cyan-400/50 hover:bg-cyan-400/5 rounded-none px-8 sm:px-16 py-7 sm:py-9 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] backdrop-blur-md bg-white/5"
          >
            CONTACT_ME
          </Button>
        </div>
      </motion.div>
    </section>
  );
}