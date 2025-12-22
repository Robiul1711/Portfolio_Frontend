"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock } from "lucide-react";
import PaginationComponent from "../common/PaginationComponent";

const ITEMS_PER_PAGE = 6; // ✅ Limits cards per page

const WaveTransition = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  
  // ✅ Pagination State
  const [page, setPage] = useState(1);

  const toggleView = () => setIsGrid(!isGrid);

  // 1. Fetch Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || ""}/api/blogs`
        );
        if (!response.ok) throw new Error("Failed to fetch blogs");
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

  // ✅ Calculate Pagination Data
  // (We use Math.ceil to round up, e.g., 13 items / 6 = 3 pages)
  const pageCount = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  
  // ✅ Get only the blogs for the current page
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Modal Handlers
  const openModal = (blog) => {
    setSelectedBlog(blog);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setSelectedBlog(null);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  // --- SKELETON COMPONENT ---
  const SkeletonCard = () => (
    <div className={`rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/10 ${isGrid ? "" : "flex items-center gap-6 p-4"}`}>
      <div className={`${isGrid ? "w-full h-[200px]" : "w-32 h-32 shrink-0"} bg-white/5 animate-pulse rounded-lg`} />
      <div className={`flex-1 ${isGrid ? "p-4" : ""}`}>
        <div className="h-6 w-3/4 bg-white/5 animate-pulse rounded mb-4" />
        <div className="h-4 w-full bg-white/5 animate-pulse rounded mb-2" />
        <div className="h-4 w-2/3 bg-white/5 animate-pulse rounded mb-4" />
        <div className="flex justify-between items-center mt-4">
          <div className="h-3 w-1/4 bg-white/5 animate-pulse rounded" />
          <div className="h-5 w-16 bg-white/5 animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  );

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
          AI Generated Articles on React, MERN, UI animation, API architecture & modern frontend development.
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

      {/* Blog Grid/List Container */}
      <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
        {loading ? (
          // Render Skeletons
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : (
          // Render Real Blogs (Using currentBlogs instead of blogs)
          <AnimatePresence mode="popLayout">
            {currentBlogs.map((blog, i) => { // ✅ Changed blogs.map to currentBlogs.map
              const waveDelay = isGrid ? (i % 3) * 0.1 + Math.floor(i / 3) * 0.1 : i * 0.1;

              return (
                <motion.div
                  onClick={() => openModal(blog)}
                  key={blog._id || i}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: waveDelay },
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                >
                  <motion.div layout="position" className={`${isGrid ? "p-4" : "p-4 flex items-center gap-6"}`}>
                    <div className={`${isGrid ? "w-full" : "w-32 h-32 flex-shrink-0"}`}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className={`rounded-lg object-cover ${isGrid ? "w-full h-[200px] md:h-[240px]" : "w-32 h-32"} group-hover:scale-[1.03] transition-transform duration-500`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mt-4 mb-2">
                        <h3 className={`${isGrid ? "text-xl" : "text-2xl"} font-semibold text-white group-hover:text-cyan-400 line-clamp-2 transition leading-tight`}>
                          {blog.title}
                        </h3>
                      </div>
                      <div className="text-gray-400 text-sm line-clamp-3">
                        {blog.excerpt}
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-gray-500 text-xs flex items-center gap-2">
                          <span>{blog.date}</span>
                          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                          <span>{blog.readTime}</span>
                        </div>
                        <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full whitespace-nowrap">
                          {blog.tag}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>

      {!loading && blogs.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No blogs found. Try generating one using the AI Generator!
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0F1623] border border-white/10 rounded-3xl shadow-2xl"
            >
              <button onClick={closeModal} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors">
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1623] to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-white bg-cyan-500/80 rounded-full backdrop-blur-md">
                    {selectedBlog.tag}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                    {selectedBlog.title}
                  </h2>
                </div>
              </div>
              <div className="p-6 md:p-10 space-y-6">
                <div className="flex items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-6">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-cyan-400" /> {selectedBlog.date}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> {selectedBlog.readTime}</span>
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                  <p className="whitespace-pre-line leading-relaxed">{selectedBlog.excerpt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Pagination Component */}
      {!loading && blogs.length > 0 && (
        <div className="mt-12 flex justify-center">
          <PaginationComponent
            pageCount={pageCount}     // Total number of pages
            setPageCount={setPage}    // Function to update current page
            forcePage={page}          // Current active page
          />
        </div>
      )}
    </div>
  );
};

export default WaveTransition;