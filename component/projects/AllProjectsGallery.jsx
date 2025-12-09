"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  Minimize,
  Share2,
  EyeIcon,
  Github,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { getProjects } from "@/service/project/project";

const projects = [
  {
    _id: "69352150f25c9580951abf5d",
    title: "Quam dolorem vitae maiores ut consequatu",
    description: "Animi fugit ut obcaecati doloremque dosdfgsdafgfsdgds",
    stack: "Angular",
    technologies: ["Eum consequat Ea in tempore est ducim"],
    github: "Vitae nihil odit esse et qui qui corpor",
    live: "Excepturi et et dolores rerum dignissimo",
    image:
      "https://res.cloudinary.com/dxk842noj/image/upload/v1765089621/portfolio_projects/xzw4ycdtfbf9cxpdacpx.png",
    popular: true,
    createdAt: "2025-12-07T06:40:16.541Z",
    updatedAt: "2025-12-07T06:40:16.541Z",
  },
  {
    _id: "69354ed548afea7d53226e8c",
    title: "Sapiente fuga Dolorum aut tempor commod",
    description:
      "Quis dolores ullam saepe et suscipit harsdfgdfgdfsgfdgfddfg",
    stack: "React Native",
    technologies: ["React", "Next", "JavaScript"],
    github: "Optio nostrud et in sed veniam volupta",
    live: "Aut libero eu nihil sed unde officia dol",
    image:
      "https://res.cloudinary.com/dxk842noj/image/upload/v1765101275/portfolio_projects/p50rhygxyliwr2un9r90.png",
    popular: false,
    createdAt: "2025-12-07T09:54:29.749Z",
    updatedAt: "2025-12-07T09:54:29.749Z",
  },
  {
    _id: "6937bd661baf6a60e6783251",
    title: "MERN stack portfolio",
    description: "Personal portfolio built with React & Zod",
    stack: "React",
    technologies: ["Next", "React", "Express"],
    github: "https://github.com/yourname/portfolio",
    live: "https://github.com/yourname/portfolio",
    image:
      "https://res.cloudinary.com/dxk842noj/image/upload/v1765089621/portfolio_projects/xzw4ycdtfbf9cxpdacpx.png",
    popular: false,
    createdAt: "2025-12-09T06:10:46.532Z",
    updatedAt: "2025-12-09T06:10:46.532Z",
  },
];

const useScrollAnimation = () => {
  const containerAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  const itemAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return {
    containerAnimation,
    itemAnimation,
  };
};

const AllProjectsGallery =  () => {
 const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const res = await getProjects();
      setProjectsData(res);
    }
    loadProjects();
  }, []);
  console.log(projectsData)
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [stack, setStack] = useState("all");
  const [imageError, setImageError] = useState({});
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const ref = useRef(null);
  const modalRef = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });
  
  const { containerAnimation, itemAnimation } = useScrollAnimation();
  
  // Get unique stacks from projects
const stackOptions = useMemo(() => {
  const stacks = new Set(projectsData.map(project => project.stack));
  return ["all", ...Array.from(stacks).map(item => item.toLowerCase())];
}, [projectsData]);


const filteredProjects = useMemo(() => {
  return projectsData.filter((project) => {
    const matchesStack =
      stack === "all" || project.stack.toLowerCase() === stack;
    return matchesStack;
  });
}, [stack, projectsData]);


  const openProject = useCallback(
    (project) => {
      const projectIndex = filteredProjects.findIndex(
        (p) => p._id === project._id
      );
      setCurrentProjectIndex(projectIndex);
      setSelectedProject(project);
      setIsPlaying(false);
      document.body.style.overflow = "hidden";
    },
    [filteredProjects]
  );

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setIsPlaying(false);
    setIsFullscreen(false);
    document.body.style.overflow = "auto";
  }, []);

  const navigateProject = useCallback(
    (direction) => {
      const newIndex =
        direction === "next"
          ? (currentProjectIndex + 1) % filteredProjects.length
          : (currentProjectIndex - 1 + filteredProjects.length) %
            filteredProjects.length;
      setCurrentProjectIndex(newIndex);
      setSelectedProject(filteredProjects[newIndex]);
      setIsPlaying(false);
    },
    [currentProjectIndex, filteredProjects]
  );

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  const handleShare = useCallback(async () => {
    if (navigator.share && selectedProject) {
      try {
        await navigator.share({
          title: selectedProject.title,
          text: selectedProject.description,
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      
      switch (e.key) {
        case "Escape":
          closeProject();
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigateProject("prev");
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateProject("next");
          break;
        case " ":
          e.preventDefault();
          if (!isPlaying) {
            setIsPlaying(true);
          }
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "s":
        case "S":
          e.preventDefault();
          handleShare();
          break;
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedProject,
    isPlaying,
    navigateProject,
    closeProject,
    handleShare,
    toggleFullscreen,
  ]);

  const handleImageError = (id) => {
    setImageError((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const buttonHoverAnimation = {
    scale: 1.05,
    transition: {
      stiffness: 400,
      damping: 10,
    },
  };

  const cardHoverAnimation = {
    scale: 1.03,
    y: -8,
    transition: {
      stiffness: 300,
      damping: 20,
    },
  };

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 md:py-20 bg-black min-h-screen relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemAnimation}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight"
          >
            My Projects Gallery
          </motion.h2>
          <motion.div
            variants={itemAnimation}
            className="w-24 h-1 bg-white mx-auto mb-6"
          />
          <motion.p
            variants={itemAnimation}
            className="text-gray-300 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Explore my portfolio of projects showcasing various technologies and solutions.
 
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16"
        >
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
  <AnimatePresence>
    {stackOptions.map((stackItem, index) => (
      <motion.button
        key={stackItem + index}  // unique key so animation triggers after reload
        initial={{ opacity: 0, y: 20 }}   // animate on first render
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className={`px-4 py-2 rounded cursor-pointer uppercase tracking-wider text-sm font-semibold transition-all duration-300 ${
          stack === stackItem
            ? "bg-white text-black"
            : "border border-gray-600 text-gray-200 hover:border-white hover:text-white"
        }`}
        onClick={() => setStack(stackItem)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {stackItem.charAt(0).toUpperCase() + stackItem.slice(1)}
      </motion.button>
    ))}
  </AnimatePresence>
</div>

        </motion.div>

        <motion.div
          layout
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project._id}
                variants={itemAnimation}
                className="relative group cursor-pointer rounded-xl overflow-hidden h-72 sm:h-80 bg-gray-900 border border-gray-800"
                onClick={() => openProject(project)}
                whileHover={cardHoverAnimation}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                {project.image && !imageError[project._id] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => handleImageError(project._id)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">
                      {project.title || "Project"}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-1"
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.1,
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 text-sm uppercase tracking-wider mb-3"
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.2,
                    }}
                  >
                    {project.stack}
                  </motion.p>
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                  >
                    <div className="w-10 h-8 rounded bg-white flex items-center justify-center">
                      <EyeIcon className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-white text-sm font-medium">
                      View Details
                    </span>
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded text-xs text-gray-300 uppercase tracking-wider font-semibold">
                  {project.stack}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No projects found in this stack.
            </p>
            <button
              onClick={() => setStack("all")}
              className="mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 ${
              isFullscreen ? "p-0" : ""
            }`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeProject}
          >
            <motion.div
              ref={modalRef}
              className={`relative bg-black w-full overflow-y-auto rounded-xl shadow-xl border border-gray-800 ${
                isFullscreen
                  ? "max-w-none max-h-none h-full rounded-none"
                  : "max-w-6xl max-h-[90vh]"
              }`}
              initial={{
                scale: 0.9,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 50,
              }}
              transition={{
                damping: 25,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center space-x-4">
                  <span className="text-white text-sm">
                    {currentProjectIndex + 1} / {filteredProjects.length}
                  </span>
                  <span className="text-gray-400 text-sm">
                    Use ← → to navigate
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleShare}
                    className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                    title="Share (S)"
                  >
                    <Share2 size={16} />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                    title="Fullscreen (F)"
                  >
                    {isFullscreen ? (
                      <Minimize size={16} />
                    ) : (
                      <Expand size={16} />
                    )}
                  </button>
                  <button
                    onClick={closeProject}
                    className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-gray-500 transition-colors duration-300"
                    title="Close (Esc)"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={() => navigateProject("prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded bg-black/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                    title="Previous (←)"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => navigateProject("next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded bg-black/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                    title="Next (→)"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <div
                className={`relative ${isFullscreen ? "h-full" : "h-[450px]"}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </div>

              {!isFullscreen && (
                <motion.div
                  className="p-6 sm:p-8 md:p-10"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-300 text-sm uppercase tracking-widest mb-2">
                        {selectedProject.stack}
                      </p>
                    </div>
                    <div className="flex gap-3 mt-4 sm:mt-0">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-200 mb-8 text-base sm:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-white font-semibold mb-4 text-lg">
                        Project Information
                      </h3>
                      <ul className="text-gray-200 space-y-3">
                        <li>
                          <span className="font-semibold">Stack:</span>{" "}
                          {selectedProject.stack}
                        </li>
                        {
                          selectedProject.popular && (
                            <li>
                              <span className="font-semibold">Status:</span>{" "}
                              {selectedProject.popular ? "Popular" : "Not Popular"}
                            </li>
                          )
                        }
               
                        <li>
                          <span className="font-semibold">Created:</span>{" "}
                          {selectedProject.createdAt ? new Date(selectedProject.createdAt).toLocaleDateString() : "Unknown"}
                        </li>
                        <li>
                          <span className="font-semibold">Updated:</span>{" "}
                          {selectedProject.updatedAt ? new Date(selectedProject.updatedAt).toLocaleDateString() : "Unknown"}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-4 text-lg">
                        Technologies Used
                      </h3>
                      {selectedProject.technologies && selectedProject.technologies.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400">No technologies specified</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AllProjectsGallery;