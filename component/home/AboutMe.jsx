"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import profileImg from "@/public/images/portfolio.png";
import { useRef } from "react";
import { 
  FiCode, 
  FiCpu, 
  FiLayers, 
  FiServer, 
  FiZap, 
  FiGlobe,
  FiDatabase,
  FiSmartphone,
  FiAward,
  FiCoffee,
  FiTrendingUp
} from "react-icons/fi";
const skills = [
  { name: "React", icon: <FiCode />, color: "#61DAFB" },
  { name: "Next.js", icon: <FiServer />, color: "#ffffff" },
  { name: "Node.js", icon: <FiCpu />, color: "#68A063" },
  { name: "MongoDB", icon: <FiDatabase />, color: "#4DB33D" },
  { name: "UI/UX", icon: <FiLayers />, color: "#FFB800" },
  { name: "Performance", icon: <FiZap />, color: "#22D3EE" },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);


  const stats = [
    { number: "50+", label: "Projects", icon: <FiCode />, suffix: "" },
    { number: "3", label: "Years Exp", icon: <FiTrendingUp />, suffix: "+" },
    { number: "40", label: "Clients", icon: <FiGlobe />, suffix: "+" },
    { number: "99", label: "Satisfaction", icon: <FiAward />, suffix: "%" },
  ];

  const services = [
    {
      icon: <FiCpu />,
      title: "Full Stack Development",
      description: "End-to-end web solutions with modern frameworks"
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive Design",
      description: "Pixel-perfect designs across all devices"
    },
    {
      icon: <FiServer />,
      title: "API Development",
      description: "RESTful & GraphQL APIs with Node.js"
    },
    {
      icon: <FiDatabase />,
      title: "Database Design",
      description: "Scalable database architecture"
    },
    // {
    //   icon: <FiLayers />,
    //   title: "UI/UX Design",
    //   description: "Intuitive and engaging user interfaces"
    // },
    // {
    //   icon: <FiZap />,
    //   title: "Performance",
    //   description: "Optimized, fast-loading applications"
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b  from-[#09161a]/50 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 section-padding-x py-20 max-w-[1540px] mx-auto">
        
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6"
          >
            <FiCoffee className="inline mr-2" />
            PASSIONATE DEVELOPER
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6"
          >
            Crafting Digital
            <span className="block mt-2">Experiences</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I transform complex problems into elegant, performant solutions with cutting-edge web technologies
          </motion.p>
        </motion.div>

        {/* Profile & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Profile Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Gradient Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30"></div>
              
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <Image
                  src={profileImg}
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                
                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-32 h-32"
                >
                  {skills?.map((skill, idx) => (
                    <div
                      key={idx}
                      className="absolute w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-xl"
                      style={{
                        left: `${50 + 40 * Math.cos((idx * 2 * Math.PI) / skills.length)}%`,
                        top: `${50 + 40 * Math.sin((idx * 2 * Math.PI) / skills.length)}%`,
                      }}
                    >
                      <span style={{ color: skill?.color }}>{skill?.icon}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline">
                          <span className="text-2xl font-bold">{stat.number}</span>
                          <span className="text-cyan-400 font-bold">{stat.suffix}</span>
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                      <div className="text-cyan-400 text-xl">
                        {stat.icon}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* About Text */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                Full-Stack Developer & Problem Solver
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                With over 3 years of professional experience, I specialize in building scalable, 
                high-performance web applications using the MERN stack. My passion lies in creating 
                seamless user experiences that combine aesthetic design with technical excellence.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                I believe in writing clean, maintainable code and following best practices to ensure 
                projects are scalable, efficient, and future-proof. Every project is an opportunity 
                to learn, innovate, and push the boundaries of what's possible on the web.
              </motion.p>
            </div>

            {/* Services Grid */}
            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">
                What I Offer
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(8, 47, 73, 0.5)" }}
                    className="group bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 cursor-pointer transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                        <span className="text-cyan-400 text-xl">{service.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200 mb-1">{service.title}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

   
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
            
            {/* Content */}
            <div className="relative backdrop-blur-sm bg-black/30 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <FiAward className="text-4xl text-cyan-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    My Development Philosophy
                  </span>
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  "Great software is more than just functional code—it's about creating experiences 
                  that are intuitive, performant, and delightful. I strive to build solutions that 
                  not only solve problems but also inspire and elevate."
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                    Clean Code
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    User-Centric
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    Performance First
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
                    Scalable Architecture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}