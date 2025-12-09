"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OrbitingSkills from "../common/OrbitingSkills";

import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  "HTML / CSS / Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js / Next.js",
  "Node.js / Express.js",
  "MongoDB / Mongoose",
  "REST API Development",
  "Framer Motion Animations",
];
  const skillsLevel = [
    { icon: <SiReact />, name: "React.js", level: 95, color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", level: 90, color: "#ffff" },
    { icon: <SiNodedotjs />, name: "Node.js", level: 88, color: "#339933" },
    { icon: <SiMongodb />, name: "MongoDB", level: 85, color: "#47A248" },
    { icon: <SiTailwindcss />, name: "Tailwind", level: 94, color: "#06B6D4" },
  ];

const SkillSection = () => {
  return (
    <div className="w-full section-padding-x section-padding-y text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          A mix of frontend UI craftsmanship, backend logic, API architecture, and modern tooling.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="flex flex-col">

        {/* LEFT — Skill Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
         
  <OrbitingSkills />
          </motion.div>
           {/* Skills Progress */}
              <div className="pt-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-200">
                  Technical Expertise
                </h3>
                <div className="space-y-4">
                  {skillsLevel.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span style={{ color: skill.color }}>{skill.icon}</span>
                          <span className="font-medium text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}88)` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
       
</div>

        {/* RIGHT — Skill List */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-6">Technical Expertise</h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            I specialize in full-stack development using the MERN stack. I build modern,
            scalable applications with clean UI, animations, and optimized performance.
          </p>

          <div className="space-y-4">
            {skills?.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 8,
                  scale: 1.03,
                  color: "#22d3ee",
                }}
                className="px-4 py-3 border border-white/10 rounded-lg text-gray-300 cursor-pointer bg-[#0c0c0c] hover:border-cyan-400/40 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SkillSection;
