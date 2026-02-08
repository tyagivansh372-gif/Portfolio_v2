"use client";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Globe, Layout } from "lucide-react";

const projects = [
  {
    title: "Tyagi Estates",
    type: "Business Architecture // Lead Optimization",
    image: "/tyagi-estates.jpeg", 
    description: "Designed and built a digital backbone for a family-run real estate business, modernizing property workflows and data systems — ‘we build systems that work.'",
    tech: ["Next.js", "Tailwind CSS", "Typescript", "Sanity CMS",],
    liveLink: "https://tyagi-estate-gams.vercel.app/", 
    isPortfolio: false
  },
  {
    title: "Portfolio ",
    type: "Digital Blueprint // 3D UI Development",
    image: "/Batman.jpg", 
    description: "Built this because normal websites felt too easy. A real-time 3D UI experiment mixing spatial design, motion systems, and modern web graphics — ‘fine, I’ll do it myself",
    tech: ["Three.js", "React Three Fiber", "Framer Motion"],
    liveLink: "/", 
    isPortfolio: true
  }
];

export default function Projects() {
  const handleLiveSignal = (e: React.MouseEvent, link: string, isPortfolio: boolean) => {
    if (isPortfolio) {
      e.preventDefault();
      window.location.href = link;
    }
  };

  return (
    <section id="projects" className="relative z-10 py-32 px-4 max-w-7xl mx-auto w-full">
      <div className="flex flex-col mb-20">
        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase animate-pulse mb-2">
          Verified_Deployments // Strategic_Output
        </span>
        <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
      </div>

      <div className="flex flex-col gap-20">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative w-full flex flex-col lg:flex-row gap-12 p-8 md:p-12 border border-white/5 bg-[#020617]/60 backdrop-blur-3xl"
          >
            {/* Project Image Shell */}
            <div className="lg:w-1/2 relative overflow-hidden border border-white/10 aspect-video bg-black">
               <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>

            {/* Project Data Shell */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 w-fit">
                <ShieldCheck className="w-4 h-4 text-cyan-400/80" />
                <span className="font-mono text-[9px] text-gray-400 tracking-[0.2em] uppercase">
                  {project.type}
                </span>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-cyan-400/60 bg-cyan-400/5 px-3 py-1 border border-cyan-400/10 uppercase">
                    {t}
                  </span>
                ))}
              </div>

              {/* TACTICAL REDIRECT LOGIC */}
              <div className="flex gap-6">
                <a 
                  href={project.liveLink}
                  target={project.isPortfolio ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  onClick={(e) => handleLiveSignal(e, project.liveLink, project.isPortfolio)}
                  className="group/link flex items-center gap-4"
                >
                  <div className="p-3 bg-white/5 border border-white/10 group-hover/link:border-cyan-400 group-hover/link:bg-cyan-400/10 transition-all">
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover/link:text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-cyan-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] group-hover/link:text-white transition-colors">
                      Live_Signal // {project.isPortfolio ? 'Reboot' : 'Established'}
                    </span>
                    <span className="text-gray-600 font-mono text-[8px] uppercase tracking-widest mt-1">
                      {project.isPortfolio ? 'Internal_Refresh' : 'External_Relay'}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-cyan-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-500 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}