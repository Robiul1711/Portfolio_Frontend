"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import CommonButton from "../common/CommonButton";
import ReactAudioPlayer from "react-audio-player";
import { FlipWords } from "@/components/ui/flipwords";

const Banner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const actionKeywords = [
    "developing scalable apps",
    "architecting systems",
    "optimizing performance",
    "building modern web apps",
    "deploying products",
    "crafting experiences",
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Main glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-cyan-400/20 rounded-full blur-[140px]" />

        {/* Floating Particles - Fixed logic */}
        {mounted &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/70 rounded-full"
              style={{
                // Using percentages ensures they cover the screen without needing window width/height state
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 40, 0],
                x: [0, 20, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>

      {/* Gradient Grid Overlay */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

      <div className="text-center max-w-4xl mx-auto">
        {/* Badge/Label */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 2xl:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 mb-4 2xl:mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-medium text-xs 2xl:text-sm tracking-wider uppercase">
            Full Stack Developer & Designer
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="2xl:mb-6 mb-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-bold leading-tight text-white">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Robiul Islam
              </span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -right-6 -top-6 text-cyan-400"
              >
                ✦
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="2xl:mb-8 mb-4"
        >
          <div className="text-2xl sm:text-3xl md:text-2xl 2xl:text-4xl font-bold 2xl:mb-4">
            <span className="text-gray-300">I specialize in </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              <FlipWords
                words={actionKeywords}
                duration={2000}
                className="font-bold"
              />
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="2xl:mt-6 text-gray-300 text-base sm:text-lg 2xl:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          I craft{" "}
          <span className="text-cyan-400 font-medium">
            high-performance web applications
          </span>{" "}
          using the MERN stack, with focus on{" "}
          <span className="text-blue-400 font-medium">clean architecture</span>,{" "}
          <span className="text-purple-400 font-medium">
            scalable solutions
          </span>
          , and{" "}
          <span className="text-green-400 font-medium">
            exceptional user experiences
          </span>
          .
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 md:mt-6 2xl:mt-10 flex flex-col sm:flex-row items-center justify-center z-50 gap-4 hidden sm:flex"
        >
          <div className="z-50">
            <CommonButton text="Get In Touch" link="/contact" />
          </div>
          {/* <a
      href="./RobiulIslamResume.pdf" // Path to your file in the 'public' folder
      download="Robiul_Islam_Resume.pdf" // The name the file will have when downloaded
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
    >
      <span>Download Resume</span>
      <Download size={20} />
    </a> */}
          <a
            href="https://drive.google.com/file/d/1CVXsLKUY71ClID9RSpiGm_Pe4ANrSFEj/view?usp=sharing"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="2xl:px-8 px-5 py-1.5 2xl:py-2.5 rounded-full border border-gray-400/40 
             hover:border-cyan-400/60 hover:bg-cyan-400/10 
             text-gray-300 font-medium z-40 transition-all 
             duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            <span>Download Resume</span>
            <Download size={20} />
          </a>
        </motion.div>

        {/* Social & Audio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 2xl:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="bg-gradient-to-r from-gray-800/30 z-40 to-gray-900/30 backdrop-blur-sm rounded-full p-1 border border-gray-700/30">
            <ReactAudioPlayer
              src="/voice.mp3"
              controls
              className="audio-player"
              style={{
                filter: "invert(1) brightness(1.2)",
                width: "280px",
                height: "40px",
                maxWidth: "100%",
              }}
            />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="absolute bottom-4 2xl:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm tracking-wider">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
