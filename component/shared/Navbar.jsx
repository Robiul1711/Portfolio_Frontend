"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, Book, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo3.svg";
import ThemeToggleButton from "../common/ThemeToggleButton";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// Effects for animation
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
      fixed w-full top-0 z-50 section-padding-x py-4 flex justify-between items-center
      transition-all duration-500
      ${
        scrolled
          ? "bg-[rgba(0,255,255,0.06)] backdrop-blur-xl shadow-lg dark:bg-[rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }
    `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        {/* <Image src={logo} alt="logo" width={120} /> */}
      </Link>

      {/* Desktop Nav */}
      <motion.nav
        className="hidden md:block p-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20"
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
                  {/* Glow */}
                  <motion.div
                    className="absolute inset-0 z-0 rounded-full pointer-events-none"
                    variants={glowVariants}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(0,200,255,0.12) 0%, rgba(0,200,255,0.04) 50%, rgba(0,200,255,0) 100%)",
                    }}
                  />

                  {/* Front */}
                  <motion.div
                    variants={itemVariants}
                    transition={{ duration: 0.4 }}
                    className={`px-4 py-2 rounded-xl text-sm sm:text-base  font-medium
                      ${
                        isActive
                          ? "text-cyan-400 font-semibold"
                          : "text-gray-300 group-hover:text-white"
                      }
                    `}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </motion.div>

                  {/* Back */}
                  <motion.div
                    variants={backVariants}
                    transition={{ duration: 0.4 }}
                    className={`px-4 py-2 rounded-xl text-sm sm:text-base font-medium absolute inset-0
                      ${
                        isActive
                          ? "text-cyan-400 font-semibold"
                          : "text-gray-300 group-hover:text-white"
                      }
                    `}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                    }}
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
      <div className="flex items-center gap-4">
        <ThemeToggleButton />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition"
          onClick={() => setOpenMenu(true)}
        >
          <Menu className="size-7 text-cyan-400" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {openMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed top-0 right-0 w-72 h-full bg-black/90 backdrop-blur-xl p-8 z-[999] border-l border-white/10"
        >
          <div className="flex justify-between items-center mb-10">
            <Image src={logo} alt="logo" width={100} />
            <button
              className="text-gray-400 hover:text-white text-xl"
              onClick={() => setOpenMenu(false)}
            >
              ✕
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  onClick={() => setOpenMenu(false)}
                  href={item.href}
                  className={`
                    text-lg font-medium 
                    ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
