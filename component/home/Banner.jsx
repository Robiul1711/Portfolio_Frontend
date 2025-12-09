"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import CommonButton from "../common/CommonButton";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-20">
      {/* Glow Background (Soft Blur) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="text-center max-w-3xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 font-medium tracking-widest uppercase"
        >
          MERN Stack Developer
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight mt-3 text-gray-900 dark:text-white"
        >
          Hi, I'm <span className="text-cyan-400">Robiul Islam</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl"
        >
          I build modern, scalable & production-ready web applications using
          <span className="text-cyan-400 font-medium"> MERN Stack</span>,  
          with clean UI, optimized backend & powerful dashboards.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
    <CommonButton text="Get Start Now" link="/contact"  />

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-gray-400/40 hover:border-cyan-400 hover:bg-cyan-400/10 text-gray-700 dark:text-gray-300 font-medium transition"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-400 transition"
          >
            <Github size={28} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-400 transition"
          >
            <Linkedin size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
