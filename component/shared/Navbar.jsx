"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo3.svg";
import ThemeToggleButton from "../common/ThemeToggleButton";
import { SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Animation Variants
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // Handle Scroll effect for Navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle Body Scroll Lock
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
      // Optional: Add padding to prevent layout shift if scrollbar disappears
      document.body.style.paddingRight = "var(--removed-body-scroll-bar-size)"; 
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [openMenu]);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`
          fixed w-full top-0 z-[60] section-padding-x py-3 flex justify-between items-center
          transition-all duration-500
          ${
            scrolled
              ? " backdrop-blur-xl shadow-lg bg-black/30 "
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-[100px] sm:w-[120px]" />
        </Link>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:block p-2 rounded-full bg-black/20 backdrop-blur-lg border border-white/20"
          initial="initial"
          whileHover="hover"
        >
          <ul className="flex items-center gap-6 relative z-10">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.li key={item.label} className="relative">
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    whileHover="hover"
                    initial="initial"
                    style={{ perspective: 600 }}
                  >
                    <motion.div
                      className="absolute inset-0 z-0 rounded-full pointer-events-none"
                      variants={glowVariants}
                      style={{
                        background:
                          "radial-gradient(circle, rgba(0,200,255,0.12) 0%, rgba(0,200,255,0.04) 50%, rgba(0,200,255,0) 100%)",
                      }}
                    />
                    <motion.div
                      variants={itemVariants}
                      transition={{ duration: 0.4 }}
                      className={`px-4 py-2 rounded-xl text-sm sm:text-base  font-medium ${
                        isActive ? "text-cyan-400 font-semibold" : "text-gray-300 group-hover:text-white"
                      }`}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </motion.div>
                    <motion.div
                      variants={backVariants}
                      transition={{ duration: 0.4 }}
                      className={`px-4 py-2 rounded-xl text-sm sm:text-base font-medium absolute inset-0 ${
                        isActive ? "text-cyan-400 font-semibold" : "text-gray-300 group-hover:text-white"
                      }`}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top" }}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </motion.div>
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>

        {/* Right actions */}
        <div className="flex items-center gap-6">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <SiGithub className="text-xl text-white hover:text-cyan-400 duration-300" />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl text-white hover:text-cyan-400 duration-300" />
          </Link>
          <ThemeToggleButton />
          <button
            className="md:hidden  rounded-full hover:bg-white/10 transition"
            onClick={() => setOpenMenu(true)}
          >
            <Menu className="size-7 text-cyan-400" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Section */}
      <AnimatePresence>
        {openMenu && (
          <>
            {/* Dark Overlay (Backdrop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenMenu(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            />

            {/* The Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 right-0 w-72 h-full bg-slate-50 dark:bg-neutral-950/60 z-[80] p-6 shadow-2xl flex flex-col border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-10">
                <Image src={logo} alt="logo" width={100} />
                <button
                  className="text-gray-500 hover:text-cyan-400 transition"
                  onClick={() => setOpenMenu(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      onClick={() => setOpenMenu(false)}
                      href={item.href}
                      className={`text-xl font-medium transition-colors ${
                        isActive ? "text-cyan-400" : "text-gray-600 dark:text-gray-300 hover:text-cyan-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;