"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import blog from "@/public/images/blog.jpg";

const items = [
  {
    id: "1",
    title: "Mastering React Hook Form",
    description: "Build perfect forms with RHF + Zod validation.",
    date: "Jan 12, 2025",
    slug: "react-hook-form-guide",
    tag: "React",
    thumbnail: blog,
  },
  {
    id: "2",
    title: "Best MERN Folder Structure",
    description: "Write professional, scalable MERN applications.",
    date: "Jan 5, 2025",
    slug: "mern-best-structure",
    tag: "MERN",
    thumbnail: blog,
  },
  {
    id: "3",
    title: "TanStack Query Full Guide",
    description: "Fetch, cache & manage API data like a professional.",
    date: "Dec 29, 2024",
    slug: "tanstack-guide",
    tag: "React",
    thumbnail: blog,
  },
];

const WaveTransition = () => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleView = () => setIsGrid(!isGrid);

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Blog & Insights</h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Articles on React, MERN, UI animation, API architecture & modern frontend development.
        </p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-end mb-10">
        <button
          onClick={toggleView}
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {isGrid ? "Switch to List" : "Switch to Grid"}
        </button>
      </div>

      <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
        {items.map((item, i) => {
          const waveDelay = isGrid
            ? (i % 3) * 0.1 + Math.floor(i / 3) * 0.1
            : i * 0.1;

          return (
            <motion.div
              key={item.id}
              layout
              initial={false}
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0.5, 1],
                scale: [1, 0.95, 1],
                transition: {
                  duration: 0.6,
                  times: [0, 0.5, 1],
                  delay: waveDelay,
                },
              }}
              className="group rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/10 
                         hover:border-cyan-400/40 transition-all duration-300 
                         shadow-lg hover:shadow-cyan-500/20"
            >
              <motion.div
                layout
                className={`${isGrid ? "p-4" : "p-4 flex items-center gap-4"}`}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: waveDelay + 0.3,
                }}
              >
                {/* Thumbnail */}
                <div className={`${isGrid ? "w-full" : "w-24 h-24 flex-shrink-0"}`}>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    className={`rounded-lg object-cover 
                      ${isGrid ? "w-full h-[200px] md:h-[280px]" : "w-24 h-24"} 
                      group-hover:scale-[1.08] transition-transform duration-500`}
                  />
                </div>

                {/* Content */}
                <div>
                    <div className="flex items-center justify-between gap-2 mt-4">

                  <motion.h3
                    layout
                    className={`${isGrid ? "text-xl " : "text-lg"} 
                    font-semibold text-white group-hover:text-cyan-400 transition`}
                  >
                    {item.title}
                  </motion.h3>

                    <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                      {item.tag}
                    </span>
                    </div>

                  <motion.p layout className="text-gray-400 mt-1 text-sm">
                    {item.description}
                  </motion.p>

                  <div className="text-gray-500 text-xs mt-2">{item.date}</div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WaveTransition;
