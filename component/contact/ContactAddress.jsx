"use client";

import React, { useState, useEffect } from "react";
import { FcBusinessContact } from "react-icons/fc";
import { Mail, Phone, Headphones } from "lucide-react";

const ContactAddress = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    async function loadContactInfo() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/contact-info`
        );
        const data = await res.json();
        setContactInfo(data);
      } catch (error) {
        console.log("Error fetching contact info:", error);
      }
    }

    loadContactInfo();
  }, []);

  // ⭐ Skeleton Loader
  if (!contactInfo) {
    return (
      <div className="space-y-8 animate-pulse">
        {/* Icon Skeleton */}
        <div className="w-14 h-14 rounded-xl bg-[#1a1a1a]"></div>

        {/* Title Skeleton */}
        <div className="h-8 w-56 bg-[#1a1a1a] rounded"></div>

        {/* Subtitle Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-80 bg-[#1a1a1a] rounded"></div>
          <div className="h-4 w-64 bg-[#1a1a1a] rounded"></div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 h-20 bg-[#0f0f0f] rounded-xl border border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg"></div>
                <div className="space-y-2 w-full">
                  <div className="h-3 w-24 bg-[#1a1a1a] rounded"></div>
                  <div className="h-4 w-40 bg-[#1a1a1a] rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Skeleton */}
        <div className="w-full h-[350px] bg-[#1a1a1a] rounded-xl border border-white/5"></div>
      </div>
    );
  }

  return (
    <div className="text-white space-y-10">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#111] shadow-lg mb-4">
        <FcBusinessContact className="text-5xl" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Contact Me
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-lg leading-relaxed">
        {contactInfo.subtitle}
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        <div className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-white/10 rounded-xl hover:bg-[#141414] transition">
          <Mail size={22} />
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-medium">{contactInfo.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-white/10 rounded-xl hover:bg-[#141414] transition">
          <Phone size={22} />
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="font-medium">{contactInfo.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-white/10 rounded-xl hover:bg-[#141414] transition">
          <Headphones size={22} />
          <div>
            <p className="text-sm text-gray-400">Support</p>
            <p className="font-medium">{contactInfo.supportEmail}</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative mt-12 w-full h-[350px] rounded-xl overflow-hidden border border-white/10 shadow-xl">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4492.512210123787!2d90.40227107602362!3d23.780965187600955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73c2ff9fc6f%3A0x8574f66d3a144d88!2sMedona%20Tower!5e1!3m2!1sen!2sbd!4v1765270037420!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactAddress;
