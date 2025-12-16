"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Building a Scalable MERN Stack Application",
    excerpt:
      "Learn how to structure and scale a MERN stack application using best practices, clean architecture, and performance optimization.",
    date: "Aug 12, 2025",
    readTime: "6 min read",
    tag: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 2,
    title: "Next.js App Router: A Complete Guide",
    excerpt:
      "A deep dive into the Next.js App Router, layouts, metadata, and real-world project structure.",
    date: "Jul 28, 2025",
    readTime: "5 min read",
    tag: "Next.js",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    id: 3,
    title: "React Performance Optimization Techniques",
    excerpt:
      "Improve React app performance using memoization, code splitting, and rendering optimizations.",
    date: "Jul 10, 2025",
    readTime: "7 min read",
    tag: "React",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlogSection = () => {
  return (
    <section className="relative bg-[#0B0F19] py-32 px-6 overflow-hidden">
      {/* Background Decor (Glow effects) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 border border-cyan-400/20 px-4 py-1.5 rounded-full bg-cyan-400/5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              Insights
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Writing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Knowledge</span> Sharing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Exploring the frontiers of web development, sharing insights on MERN stack architecture, and documenting the journey of building scalable software.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Link
                href={`/blog/${blog.id}`}
                className="group block h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 relative"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10 opacity-60" />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                      {blog.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col h-[calc(100%-14rem)]">
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs font-medium text-cyan-400/80 mb-4">
                    <span className="flex items-center gap-1">
                       {/* Calendar Icon SVG */}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {blog.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="flex items-center gap-1">
                      {/* Clock Icon SVG */}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors pt-4 border-t border-white/5">
                    Read Article
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-20"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 font-medium hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Articles
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;