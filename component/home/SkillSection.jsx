"use client";

import { motion } from "framer-motion";
import OrbitingSkills from "../common/OrbitingSkills";
import { 
  SiNextdotjs, SiReact, SiNodedotjs, 
  SiMongodb, SiTailwindcss, SiTypescript 
} from "react-icons/si";

const skillsLevel = [
  { icon: <SiReact />, name: "React.js", level: 95, color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", level: 90, color: "#ffffff" },
  { icon: <SiTypescript />, name: "TypeScript", level: 85, color: "#3178C6" },
  { icon: <SiNodedotjs />, name: "Node.js", level: 88, color: "#339933" },
  { icon: <SiMongodb />, name: "MongoDB", level: 85, color: "#47A248" },
  { icon: <SiTailwindcss />, name: "Tailwind", level: 94, color: "#06B6D4" },
];

const SkillSection = () => {
  return (
    <div className="w-full py-24 px-6 md:px-12 text-white bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Simple & Centered */}
        <header className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase"
          >
            Technical Stack
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter"
          >
            Core Expertise.
          </motion.h2>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT - Visual Orbit (Glass Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 flex flex-col items-center justify-center sm:p-8 sm:bg-white/[0.02] sm:border sm:border-white/5 sm:rounded-3xl sm:backdrop-blur-3xl "
          >
            <OrbitingSkills />
            <div className="mt-8 text-center">
              <h3 className="text-xl font-medium text-gray-300">Modern Ecosystem</h3>
              <p className="text-gray-500 text-sm mt-2">Specializing in high-performance web architecture</p>
            </div>
          </motion.div>

          {/* RIGHT - Technical Metrics */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Short Bio */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Frontend & Backend Mastery</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                I build full-stack applications with a focus on **scalability**, **clean code**, 
                and **user-centric animations**. From MERN architecture to advanced Next.js patterns.
              </p>
            </div>

            {/* Progress Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {skillsLevel.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl group hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-mono">{skill.level}%</span>
                  </div>

                  {/* Slim Modern Bar */}
                  <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full rounded-full bg-gradient-to-r"
                      style={{ 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}55` 
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["RESTful APIs", "Framer Motion", "State Management", "Git / GitHub", "UI/UX Design"].map((item) => (
                <span 
                  key={item} 
                  className="px-4 py-2 bg-cyan-400/5 border border-cyan-400/10 text-cyan-400/80 rounded-full text-xs font-medium hover:bg-cyan-400/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;