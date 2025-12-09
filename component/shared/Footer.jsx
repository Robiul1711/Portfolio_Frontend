"use client";
import logo from "@/public/images/logo3.svg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 ">
      <div className="section-padding-x py-12">
        {/* Footer content wrapper */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">

          {/* Left: Brand + Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
         <Image src={logo} alt="logo" width={120} height={120} />
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-sm">
              Building modern, scalable, and high-performance web applications 
              using the MERN stack — with clean UI and smooth user experiences.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-col md:flex-row gap-6 text-gray-700 dark:text-gray-300">
            <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
            <Link href="/projects" className="hover:text-cyan-400 transition">Projects</Link>
            <Link href="/blog" className="hover:text-cyan-400 transition">Blog</Link>
            <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Robiul Islam Ashiq. All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition"
          >
            <ArrowUp size={18} />
            <span className="text-sm">Back to top</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
