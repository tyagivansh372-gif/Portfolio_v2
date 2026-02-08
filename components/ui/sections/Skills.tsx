"use client";
import { motion } from "framer-motion";

const skills = [
  { 
    category: "Frontend", 
    // Added HTML, CSS, and JavaScript as requested
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion","TypeScript","Three.js" ,"Lucide Icons"
     ]
  },
  { 
    category: "Backend & Systems", 
    items: ["REST APIs", "WebSockets", "Real-time Systems","Node.js","Express", "MySQL", "MongoDB"] 
  },
  { 
    category: "Design & Tools", 
    items: ["UI/UX Design", "Figma", "Git","Canva","Github"]
  },
  {
    category: "Systems & Algorithms",  
items :[
  "Data Structures & Algorithms"," Object-Oriented Programming", "Design Patterns", "System Design", "Performance Optimization", "C++ " , "Python"
]
  }
];

export default function Skills() {
  return (
    // Increased max-width for more breadth
    <section className="relative z-10 min-h-screen py-20 px-4 max-w-7xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-white mb-12 tracking-tighter uppercase">
        Technical <span className="text-cyan-400">Arsenal</span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-10 border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500 group"
          >
            <h3 className="text-cyan-400 font-mono text-xs mb-8 uppercase tracking-[0.4em]">
              {skill.category}
            </h3>
            <ul className="space-y-5">
              {skill.items.map((item) => (
                <li key={item} className="text-gray-300 font-light flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:shadow-[0_0_12px_#22d3ee] transition-all" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}