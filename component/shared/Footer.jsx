"use client";

import logo from "@/public/images/logo3.svg";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Twitter,
  Heart,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:your@email.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-gray-800/50 bg-[#050505] bg-gradient-to-b from-transparent  to-gray-900/30 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-padding-x py-8 lg:py-10 ">
        <div className="">
          {/* Main footer content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-16">
            {/* Brand section */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Image
                    src={logo}
                    alt="logo"
                    width={120}
                    height={120}
                    className="drop-shadow-lg"
                  />
                  <div className="absolute -inset-3 bg-cyan-400/20 blur-xl rounded-full -z-10"></div>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base  leading-relaxed max-w-md">
                Crafting exceptional digital experiences with modern web
                technologies. Focused on building scalable, performant
                applications that make an impact.
              </p>

              {/* Social links */}
              <div className="flex gap-4 mt-6 sm:mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 sm:p-2.5  rounded-xl bg-gray-800/50 backdrop-blur-sm 
                             border border-gray-700/50 
                             hover:border-cyan-400/30 hover:bg-cyan-900/20
                             transition-all duration-300 hover:scale-105"
                    aria-label={social.label}
                  >
                    <social.icon
                      className=" size-5 sm:size-auto
                                          group-hover:text-cyan-400 
                                           transition-colors"
                    />
                    <span
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 
                                   opacity-0 group-hover:opacity-100 transition-opacity 
                                   text-xs text-gray-400 whitespace-nowrap"
                    >
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-semibold text-white mb-4 sm:mb-8">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-2 ">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group relative py-2  px-4 rounded-xl 
                            hover:bg-gray-800/50 
                             border border-transparent hover:border-gray-700/30
                             transition-all duration-300"
                  >
                    <span
                      className="text-gray-300 
                                   group-hover:text-cyan-400 
                                   transition-colors font-medium"
                    >
                      {link.name}
                    </span>
                    <div
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 
                                  group-hover:w-full transition-all duration-300"
                    ></div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Contact/Newsletter */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-semibold text-white mb-4 sm:mb-8">
                Let&apos;s Connect
              </h3>
              <p className=" text-sm sm:text-base text-gray-300 mb-6">
                Have a project in mind? Let&apos;s discuss how we can bring your
                ideas to life.
              </p>

              <div className="space-y-4 flex flex-wrap gap-2 lg:gap-6 mt-6 md:mt-8">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                      Email
                    </p>
                    <a
                      href="mailto:your@email.com"
                      className="text-xs  text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      robiulislam.1711@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                      Location
                    </p>
                    <p className="text-xs  text-gray-300">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 sm:my-10 border-t border-gray-800/50"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm sm:text-base">
                © {currentYear} Robiul Islam Ashiq. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                Built with using Next.js & Tailwind CSS
              </p>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group relative px-4  py-2 rounded-full 
                       bg-gray-800/50 backdrop-blur-sm
                       border border-gray-700/30
                       hover:border-cyan-400/30 hover:bg-cyan-900/20
                       transition-all duration-300 hover:scale-105"
              aria-label="Back to top"
            >
              <div className="flex items-center gap-2">
                <ArrowUp
                  className="size-4 text-gray-300 
                                  group-hover:text-cyan-500 dark:group-hover:text-cyan-400 
                                  transition-colors"
                />
                <span
                  className="text-gray-300 text-sm 
                               group-hover:text-cyan-400 
                               font-medium transition-colors"
                >
                  Back to top
                </span>
              </div>
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 
                            group-hover:from-cyan-400/10 group-hover:via-cyan-400/5 group-hover:to-cyan-400/10 
                            transition-all duration-500 -z-10"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
