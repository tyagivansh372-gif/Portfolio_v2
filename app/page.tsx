
// import Hero from "../components/ui/sections/Hero"
// import Skills from "../components/ui/sections/Skills"
// }
import Hero from "../components/ui/sections/Hero";
import Skills from "../components/ui/sections/Skills";
import Projects from "../components/ui/sections/Projects";
import Experience from "../components/ui/sections/Experience";
import Contact from "../components/ui/sections/Contact";
import Footer from "../components/ui/sections/Footer";
export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      {/* 1. HERO SECTION 
        High-impact entrance featuring your role as a Full Stack Architect.
      */}
      <Hero />

      {/* 2. TECHNICAL ARSENAL 
        Showcasing expertise in C++, Data Structures, and Next.js.
      */}
      <Skills />

      {/* 3. PROJECT ARCHIVES 
        Featuring Tyagi Estates and this 3D Portfolio.
      */}
      <Projects />

      {/* FOOTER PLACEHOLDER 
        A subtle finish to maintain the futuristic aesthetic.
      */}
      <Experience />
      <Contact />
      <Footer />
      <footer className="relative z-10 py-20 w-full flex flex-col items-center border-t border-white/5">
        <p className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase">
          End_Of_Transmission // 2026
        </p>
      </footer>
    </div>
  );
}