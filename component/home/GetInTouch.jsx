"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MapPin, Mail, User, Home, Loader2 } from "lucide-react";
import { Toaster, toast } from "sonner";
import {
  Map,
  MapCircle,
  MapLocateControl,
  MapTileLayer,
  MapZoomControl,
} from "@/components/ui/map";

// ✅ Updated Schema to match your logic (name instead of fullName)
const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  // ✅ Updated Submit Handler with your provided logic
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) throw new Error("Submission failed");

      const result = await res.json();
      console.log("Form submitted:", result);

      reset();
      toast.success("Message sent successfully!");
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  const TORONTO_COORDINATES = [23.781205725681417, 90.40480308120745];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <Toaster richColors position="bottom-right" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-500 mr-4"></div>
            <span className="text-cyan-400 font-semibold tracking-wider text-sm">
              GET IN TOUCH
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent ml-4"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Connect
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Reach out and let&apos;s build something
            extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side: Map & Cards */}
          <div className="flex flex-col gap-8">
            <div className="flex-grow bg-slate-900/50 rounded-2xl border border-slate-800/50 overflow-hidden min-h-[400px]">
              <Map
                center={TORONTO_COORDINATES}
                zoom={14}
                className="h-full w-full"
              >
                <MapTileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution="&copy; CARTO"
                />
                <MapZoomControl className="bottom-4 right-4" />
                <MapLocateControl className="top-4 right-4" />
                <MapCircle center={TORONTO_COORDINATES} radius={200} />
              </Map>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 group hover:border-cyan-500/30 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-200 text-sm">
                      Email
                    </h3>
                    <p className="text-slate-400 text-xs">
                      contact@portfolio.dev
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 group hover:border-blue-500/30 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-200 text-sm">
                      Location
                    </h3>
                    <p className="text-slate-400 text-xs">Toronto, Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-3xl p-8 shadow-2xl relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Row Container: Stacks on mobile, 2 columns on medium screens and up */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all outline-none text-white placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs ml-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Address Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all outline-none text-white placeholder:text-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs ml-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Address Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Address
                </label>
                <div className="relative">
                  <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    {...register("address")}
                    type="text"
                    className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all outline-none text-white placeholder:text-slate-600"
                    placeholder="Toronto, Canada"
                  />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-xs ml-1">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full p-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all outline-none resize-none text-white placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs ml-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-cyan-500/20"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send
                      className={`w-4 h-4 transition-transform ${
                        isHovered ? "translate-x-1 -translate-y-1" : ""
                      }`}
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
