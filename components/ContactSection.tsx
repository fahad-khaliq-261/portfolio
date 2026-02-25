"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const StarField = dynamic(() => import("./StarField"), { ssr: false });

const budgetOptions = [
  "$10K - $25K",
  "$25K - $50K",
  "$50K - $100K",
  "$100K+",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    services: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0e1424]" id="contact">
      {/* Three.js StarField Background */}
      <StarField />

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="mesh-gradient opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[12px] uppercase tracking-[0.2em] text-blue-300 font-bold mb-6">
            Let&apos;s make it happen
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.03em] text-white">
            <span className="text-white/40 italic font-medium">Ready to</span>
            <br />
            Get started
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <button className="px-8 py-4 bg-white text-black text-sm rounded-full font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10">
            Request a quote
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
            Book a free call
          </button>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-10 md:p-12"
        >
          {/* Form Header */}
          <h3 className="text-white font-bold text-xl mb-10 border-l-4 border-blue-500 pl-4">Contact Information</h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">Business Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project or regulatory needs..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none font-medium"
              />
            </div>

            {/* Budget Dropdown */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">Project Budget</label>
              <div className="relative">
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all cursor-pointer font-medium"
                >
                  <option value="" className="bg-[#18233a]">Select budget range...</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#18233a]">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white text-sm font-bold tracking-wide hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-300 mt-4 border border-blue-400/20"
            >
              Send Secure Message
            </motion.button>
          </form>
        </motion.div>

        {/* Small logo at bottom left */}
        <div className="absolute bottom-8 left-8">
          <Image
            src="/logo.png"
            alt="DataMills"
            width={32}
            height={32}
            className="opacity-40"
          />
        </div>
      </div>
    </section>
  );
}
