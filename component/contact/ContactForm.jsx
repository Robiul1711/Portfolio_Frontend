"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner"; // ✅ import toast

// Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  // Submit Handler
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

      // 🌟 Success toast
      toast.success("Message sent successfully!");

    } catch (err) {
      console.error("Submit error:", err);
      
      // ❌ Error toast
      toast.error("Failed to send message!");
    }

    setLoading(false);
  };

  return (
    <div className="relative p-10 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-xl overflow-hidden">
      {/* Grid BG */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/grid.svg')] bg-repeat pointer-events-none" />

      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
        
        {/* Full Name */}
        <div>
          <label className="text-sm text-gray-400">Full name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your Name"
            className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-400">Email Address</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="text-sm text-gray-400">Address</label>
          <input
            {...register("address")}
            type="text"
            placeholder="Your Address"
            className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            {...register("message")}
            rows="5"
            placeholder="Type your message here..."
            className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-md bg-white text-black font-semibold mt-4 w-full disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {/* Sonner Toaster */}
        <Toaster richColors position="bottom-right" />
      </form>
    </div>
  );
};

export default ContactForm;
