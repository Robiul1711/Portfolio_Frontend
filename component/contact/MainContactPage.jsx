"use client";

import ContactAddress from "@/component/contact/ContactAddress";
import ContactForm from "@/component/contact/ContactForm";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function MainContactPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Decorative Background Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative section-padding-x section-padding-y mt-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mx-auto text-center mb-4 sm:mb-16 md:mb-20"
        >
          {/* Badge Style Icon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-gray-300">
              Get in Touch
            </span>
          </div>
   

          <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Let&apos;s Build Something <br className="hidden md:block" />{" "}
            Together
          </h1>

          <p className="text-gray-400 sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always
            open. I’ll do my best to get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Left Side: Address/Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className=" r">
              <div className="">
                <ContactAddress />
              </div>
            </div>

            {/* Subtle "Direct Message" Hint */}
            <div className="hidden lg:flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Live Chat with Me?</h4>
                <p className="text-sm text-gray-400">
                  Prefer real-time communication? Check the Aahiq's AI Chatbot on
                  the bottom right corner to start a conversation instantly.
                  
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="relative group">
              {/* Decorative Glow behind the form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />

              <div className="">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
