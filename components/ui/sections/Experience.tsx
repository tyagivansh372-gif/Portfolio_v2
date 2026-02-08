"use client";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase, GraduationCap, Award, Target } from "lucide-react";

const experience = [
  {
    title: "SDE Intern",
    organization: "DRDO (Defense Research and Development Organization)",
    period: "Dec 2025 — Feb 2026",
    description: "Developed real-time tactical dashboards and WebSocket-driven telemetry systems for defense environments, enabling rapid, high-clarity visualization of mission-critical data streams",
    icon: <Briefcase className="w-5 h-5 text-cyan-400" />
  },
  {
    title: "Winter Consulting Participant (Top 10%)",
    organization: "Consulting & Analytics Club, IIT Guwahati",
    period: "Dec 2025 — Feb 2026",
    description: "Ranked in the top 10% for excellence in case strategy, market entry frameworks, and structured analytical problem-solving during an intensive consulting program ",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
  },
  {
    title: "Forward Learn Program Graduate",
    organization: "McKinsey & Company",
    period: "Oct 2025 — Dec 2025",
    description: "Graduated from McKinsey’s Forward Program, developing capabilities in strategic thinking, digital transformation, and solving multi-layered business challenges",
    icon: <Award className="w-5 h-5 text-violet-400" />
  }
];

export default function Experience() {
  return (
    <section className="relative z-10 min-h-screen py-32 px-4 max-w-7xl mx-auto w-full">
      <div className="flex flex-col mb-20">
        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase animate-pulse">
          Tactical_Record // Dec_2025_Active
        </span>
        <h2 className="text-5xl font-bold text-white tracking-tighter uppercase mt-2">
          Service <span className="text-cyan-400">Record</span>
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {experience.map((item, index) => (
          <motion.div
            key={item.title}
            // MODIFIED ANIMATION: Safer 'y' offset to ensure visibility
            initial={{ y: -100, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }} 
            transition={{ 
              type: "spring", 
              stiffness: 60, 
              damping: 15, 
              delay: index * 0.2 
            }}
            whileHover={{ 
              scale: 1.01,
              borderColor: "rgba(34, 211, 238, 0.4)",
              backgroundColor: "rgba(34, 211, 238, 0.08)"
            }}
            className="group relative p-12 border border-white/10 bg-[#020617]/80 backdrop-blur-2xl transition-all duration-500 cursor-crosshair"
          >
            {/* Target UI corner accent */}
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
               <Target className="text-cyan-400 w-6 h-6 animate-pulse" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg group-hover:border-cyan-500/50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mt-1">
                    {item.organization}
                  </p>
                </div>
              </div>
              <div className="font-mono text-[10px] text-gray-500 bg-white/5 px-4 py-2 border border-white/10 uppercase tracking-widest">
                {item.period}
              </div>
            </div>
            
            <p className="text-gray-300 font-light leading-relaxed max-w-5xl text-lg">
              {item.description}
            </p>

            {/* Tactical Frame Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50" />
          </motion.div>
        ))}
      </div>

      {/* RE-STYLED CREDENTIALS BUTTON: High Visibility & High Energy */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 flex justify-center"
      >
        <motion.a 
          href="https://www.linkedin.com/in/vansh-tyagi-069365328" 
          target="_blank"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0px 0px 30px rgba(34, 211, 238, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          // SOLID BACKGROUND: Using solid Cyan to contrast with the Digital Ocean
          className="relative flex items-center gap-4 px-14 py-6 bg-cyan-400 text-black font-mono text-xs font-black tracking-[0.5em] group overflow-hidden"
        >
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2 -skew-x-12"
          />
          
          <ExternalLink className="w-5 h-5" /> 
          <span className="relative z-10">VERIFY_CREDENTIAL</span>
        </motion.a>
      </motion.div>
    </section>
  );
}