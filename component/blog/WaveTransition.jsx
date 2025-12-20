"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WaveTransition = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleView = () => setIsGrid(!isGrid);

  // 1. Fetch Blogs on Load
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center py-20 text-white">Loading awesome content...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Blog & Insights <br className="hidden md:block" />
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          AI Generated Articles on React, MERN, UI animation, API architecture & modern
          frontend development.
        </p>
      </motion.div>

      {/* Toggle Button */}
      <div className="flex justify-end mb-10">
        <button
          onClick={toggleView}
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {isGrid ? "Switch to List" : "Switch to Grid"}
        </button>
      </div>

      {/* Blog Grid/List */}
      <div
        className={
          isGrid
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
        }
      >
        {blogs.map((blog, i) => {
          // Calculate delay for wave animation
          const waveDelay = isGrid
            ? (i % 3) * 0.1 + Math.floor(i / 3) * 0.1
            : i * 0.1;

          return (
            <motion.div
              key={blog._id} // Use MongoDB _id
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: waveDelay,
                },
              }}
              className="group rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/10 
                         hover:border-cyan-400/40 transition-all duration-300 
                         shadow-lg hover:shadow-cyan-500/20"
            >
              <motion.div
                layout
                className={`${isGrid ? "p-4" : "p-4 flex items-center gap-6"}`}
              >
                {/* Thumbnail */}
                <div
                  className={`${isGrid ? "w-full" : "w-32 h-32 flex-shrink-0"}`}
                >
                  {/* Using standard img tag to avoid Next.js domain config issues with localhost/external URLs */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={`rounded-lg object-cover 
                      ${isGrid ? "w-full h-[200px] md:h-[240px]" : "w-32 h-32"} 
                      group-hover:scale-[1.03] transition-transform duration-500`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mt-4 mb-2">
                    <motion.h3
                      layout
                      className={`${isGrid ? "text-xl" : "text-2xl"} 
                    font-semibold text-white group-hover:text-cyan-400 line-clamp-2 transition leading-tight`}
                    >
                      {blog.title}
                    </motion.h3>

      
                  </div>

                  <motion.p layout className="text-gray-400 text-sm line-clamp-3">
                    {blog.excerpt}
                  </motion.p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="text-gray-500 text-xs flex items-center gap-2">
                      <span>{blog.date}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>{blog.readTime}</span>
                    </div>
                    
                    {!isGrid && (
                       <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full whitespace-nowrap">
                       {blog.tag}
                     </span>
                    )}
                                  {/* Tag */}
                    {isGrid && (
                      <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full whitespace-nowrap">
                        {blog.tag}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {blogs.length === 0 && !loading && (
        <div className="text-center text-gray-500 mt-10">
          No blogs found. Try generating one using the AI Generator!
        </div>
      )}
    </div>
  );
};

export default WaveTransition;