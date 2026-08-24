"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo3.svg";
import SocialSidebar from "../common/SocialSidebar";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMenu]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-[60] section-padding-x py-3 sm:py-4 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#030712]/70 shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1540px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Image
                src={logo}
                alt="Robiul Islam"
                priority
                className="w-[90px] sm:w-[115px] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Desktop Nav Floating Island */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-slate-900/60 backdrop-blur-2xl border border-white/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.label} className="relative">
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${
                        isActive
                          ? "text-cyan-300 font-semibold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://drive.google.com/file/d/1YB6dyTDSrI1PcucDpxJZsw7KNvL2S1m4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300 active:scale-95"
              title="Download Resume"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-300 group-hover:text-white tracking-wide">
                Resume
              </span>
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              aria-label="Open Navigation Menu"
              className="md:hidden p-2 rounded-xl bg-slate-900/60 border border-white/10 text-cyan-400 hover:text-white hover:bg-white/5 transition"
              onClick={() => setOpenMenu(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenMenu(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[70]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-[#070b14]/95 backdrop-blur-2xl z-[80] p-6 shadow-2xl flex flex-col border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                <Image src={logo} alt="logo" width={100} />
                <button
                  aria-label="Close Navigation Menu"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                  onClick={() => setOpenMenu(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {menuItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        onClick={() => setOpenMenu(false)}
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-8 pt-4 border-t border-white/10">
                <a
                  href="https://drive.google.com/file/d/1YB6dyTDSrI1PcucDpxJZsw7KNvL2S1m4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <SocialSidebar className="flex flex-row justify-center gap-4" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;