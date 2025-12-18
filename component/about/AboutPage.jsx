"use client";
import React from "react";
import about from "@/public/images/about.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiCode, FiUsers } from "react-icons/fi";

const AboutMe = () => {
  const stats = [
    { icon: <FiBriefcase />, label: "Years Experience", value: "3+" },
    { icon: <FiCode />, label: "Projects Completed", value: "50+" },
    { icon: <FiUsers />, label: "Happy Clients", value: "40+" },
    { icon: <FiAward />, label: "Certifications", value: "15+" },
  ];

  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "MongoDB", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "AWS/DevOps", level: 75 },
  ];

  return (
    <section id="about" className="w-full mt-24 section-padding-x section-padding-y bg-gradient-to-b  from-[#09161a]/40 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full text-sm font-medium mb-4"
          >
            ABOUT ME
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Crafting Digital <span className="text-cyan-500">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Transforming ideas into exceptional web experiences with modern technologies
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-400/10 group">
                <Image
                  src={about}
                  alt="Profile"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-cyan-300 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-blue-300 rounded-2xl -z-10" />
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {["React", "Next.js", "Node.js", "MongoDB", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-gray-300 shadow-lg shadow-gray-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Center Divider */}
          <div className="hidden lg:flex w-[1px] h-auto self-stretch bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Full Stack Developer & Problem Solver
                </h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm a passionate <span className="font-semibold text-cyan-400">MERN Stack Developer</span> with over 3 years of experience in building scalable, high-performance web applications. My expertise lies in creating seamless user experiences with cutting-edge technologies.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code that not only works perfectly but also scales efficiently. My approach combines modern development practices with a keen eye for design, ensuring every project delivers both functionality and aesthetic appeal.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-gray-800 rounded-2xl shadow-lg shadow-gray-900"
                  >
                    <div className="text-2xl text-cyan-400 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Section */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">
                  Technical Expertise
                </h4>
                <div className="space-y-4">
                  {skills?.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy */}
              <div className="pt-6">
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-800">
                  <h4 className="text-lg font-bold text-white mb-3">
                    My Development Philosophy
                  </h4>
                  <p className="text-gray-300">
                    "I focus on building solutions that are not just functional, but also future-proof. 
                    Every line of code should tell a story of efficiency, scalability, and user-centric design."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;