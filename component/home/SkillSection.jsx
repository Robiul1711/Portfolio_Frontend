"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OrbitingSkills from "../common/OrbitingSkills";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiN8N,
} from "react-icons/si";
import { FiCode, FiLayers, FiCpu } from "react-icons/fi";

const DEFAULT_SKILLS = [
  { icon: <SiReact />, name: "React.js", level: 95, color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", level: 90, color: "#ffffff" },
  { icon: <SiTypescript />, name: "TypeScript", level: 85, color: "#3178C6" },
  { icon: <SiNodedotjs />, name: "Node.js", level: 88, color: "#339933" },
  { icon: <SiMongodb />, name: "MongoDB", level: 85, color: "#47A248" },
  { icon: <SiSupabase />, name: "Supabase", level: 86, color: "#3ECF8E" },
  { icon: <SiN8N />, name: "n8n Automation", level: 84, color: "#EA4B71" },
  { icon: <SiTailwindcss />, name: "Tailwind", level: 94, color: "#06B6D4" },
];

const ICON_MAP = {
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiNodedotjs: <SiNodedotjs />,
  SiMongodb: <SiMongodb />,
  SiSupabase: <SiSupabase />,
  SiN8N: <SiN8N />,
  SiTailwindcss: <SiTailwindcss />,
};

const getSkillIcon = (name, iconName) => {
  if (iconName && ICON_MAP[iconName]) return ICON_MAP[iconName];
  const n = name.toLowerCase();
  if (n.includes("react")) return <SiReact />;
  if (n.includes("next")) return <SiNextdotjs />;
  if (n.includes("type")) return <SiTypescript />;
  if (n.includes("node")) return <SiNodedotjs />;
  if (n.includes("mongo")) return <SiMongodb />;
  if (n.includes("supa")) return <SiSupabase />;
  if (n.includes("n8n")) return <SiN8N />;
  if (n.includes("tail")) return <SiTailwindcss />;
  return <FiCode />;
};

const SkillSection = () => {
  const [skillsList, setSkillsList] = useState(DEFAULT_SKILLS);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/api/skills`);
        if (res.ok) {
          const json = await res.json();
          if (json?.data?.length > 0) {
            const mapped = json.data.map((item) => ({
              name: item.name,
              level: item.level,
              color: item.color || "#06B6D4",
              icon: getSkillIcon(item.name, item.iconName),
            }));
            setSkillsList(mapped);
          }
        }
      } catch (e) {
        // Use default skills as fallback
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="w-full section-padding-x py-16 sm:py-24 text-white bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        {/* Header - Simple & Centered */}
        <header className="text-center mb-12 sm:mb-16 space-y-2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase"
          >
            Technical Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-1"
          >
            Core Expertise.
          </motion.h2>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT - Visual Orbit (Glass Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-xl shadow-xl"
          >
            <OrbitingSkills />
            <div className="mt-4 sm:mt-6 text-center">
              <h3 className="text-lg sm:text-xl font-medium text-gray-300">
                Modern Ecosystem
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Specializing in high-performance web architecture
              </p>
            </div>
          </motion.div>

          {/* RIGHT - Technical Metrics */}
          <div className="lg:col-span-7 space-y-10">
            {/* Short Bio */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Frontend & Backend Mastery</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                I build full-stack applications with a focus on **scalability**,
                **clean code**, and **user-centric animations**. From MERN
                architecture to advanced Next.js patterns.
              </p>
            </div>

            {/* Progress Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {skillsList.map((skill, idx) => (
                <motion.div
                  key={skill.name + idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl group hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                      <span className="font-semibold text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-cyan-400 text-sm font-mono">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Slim Modern Bar */}
                  <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "circOut" }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}55`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Supabase (BaaS)",
                "n8n Workflow Automation",
                "RESTful APIs",
                "Framer Motion",
                "State Management",
                "Git / GitHub",
                "UI/UX Design",
              ].map((item) => (
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
