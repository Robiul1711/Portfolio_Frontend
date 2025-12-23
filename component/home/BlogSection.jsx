"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { X, Calendar, Clock, ArrowRight } from "lucide-react"; // Make sure to install lucide-react or use SVGs

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Refs for animation
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);

  // 1. Fetch Data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
        const data = await response.json();
        // Limit to 3 blogs for the homepage section if desired
        setBlogs(data.slice(0, 3)); 
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // 2. Animate Only After Loading
  useGSAP(() => {
    if (loading) return; // Don't animate until data is ready

    gsap.from([titleRef.current, subtitleRef.current, cardRef.current?.children], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [loading]); // Re-run when loading finishes

  // Modal Handlers
  const openModal = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "auto";
  };

  if (loading) return null; // Or a loading spinner

  return (
    <section ref={sectionRef} className="relative bg-[#0B0F19] py-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 border border-cyan-400/20 px-4 py-1.5 rounded-full bg-cyan-400/5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            Insights
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-bold text-white mb-6 tracking-tight">
            Writing &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Knowledge
            </span>{" "}
            Sharing
          </h2>

          <p ref={subtitleRef} className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Exploring the frontiers of web development, sharing insights on MERN
            stack architecture, and documenting the journey of building scalable software.
          </p>
        </div>

        {/* Blog Grid */}
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              onClick={() => openModal(blog)}
              className="group block h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 relative cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10 opacity-60" />
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    {blog.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col h-[calc(100%-14rem)]">
                <div className="flex items-center gap-4 text-xs font-medium text-cyan-400/80 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {blog.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors pt-4 border-t border-white/5">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <Link href="/blog">
            <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 font-medium hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                View All Articles
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* -------------------- BEAUTIFUL MODAL -------------------- */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0F1623] border border-white/10 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image Header */}
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                className="w-full h-full object-cover"
              />
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

            {/* Modal Body */}
            <div className="p-6 md:p-10 space-y-6">
              
              {/* Meta Data */}
              <div className="flex items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-6">
                <span className="flex items-center gap-2">
                   <Calendar className="w-4 h-4 text-cyan-400" /> {selectedBlog.date}
                </span>
                <span className="flex items-center gap-2">
                   <Clock className="w-4 h-4 text-cyan-400" /> {selectedBlog.readTime}
                </span>
              </div>

              {/* Full Description / Content */}
              <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                <p className="whitespace-pre-line leading-relaxed">
                  {selectedBlog.excerpt}
                </p>
                {/* Note: If you add a real 'content' field to your DB later, use that here instead of excerpt */}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;