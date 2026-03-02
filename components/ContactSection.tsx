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
    <section className="py-24 relative overflow-hidden bg-bg-primary" id="contact">
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
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-[12px] uppercase tracking-[0.2em] text-accent font-bold mb-6">
            Let&apos;s make it happen
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
            <span className="text-text-muted italic font-medium">Ready to</span>
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
          <button className="px-8 py-4 bg-text-primary text-bg-primary text-sm rounded-full font-bold hover:bg-accent hover:text-text-primary transition-all duration-300 hover:scale-105 shadow-lg shadow-black/5">
            Request a quote
          </button>
          <button className="px-8 py-4 bg-transparent border border-border text-text-primary text-sm rounded-full font-bold hover:bg-bg-secondary transition-all duration-300 hover:scale-105">
            Book a free call
          </button>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-10 md:p-12 bg-bg-card/50 backdrop-blur-xl border border-border rounded-3xl"
        >
          {/* Form Header */}
          <h3 className="text-text-primary font-bold text-xl mb-10 border-l-4 border-accent pl-4">Contact Information</h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-text-muted font-bold">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-muted/40 text-sm focus:outline-none focus:border-accent/50 focus:bg-bg-card transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-text-muted font-bold">Business Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-muted/40 text-sm focus:outline-none focus:border-accent/50 focus:bg-bg-card transition-all font-medium"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-text-muted font-bold">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project or regulatory needs..."
                rows={4}
                className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-muted/40 text-sm focus:outline-none focus:border-accent/50 focus:bg-bg-card transition-all resize-none font-medium"
              />
            </div>

            {/* Budget Dropdown */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-text-muted font-bold">Project Budget</label>
              <div className="relative">
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3.5 text-text-primary text-sm appearance-none focus:outline-none focus:border-accent/50 focus:bg-bg-card transition-all cursor-pointer font-medium"
                >
                  <option value="" className="bg-bg-card">Select budget range...</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-bg-card">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-5 bg-gradient-to-r from-accent to-accent-hover rounded-xl text-text-primary text-sm font-bold tracking-wide hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.3)] transition-all duration-300 mt-4 border border-accent/20"
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
            className="opacity-40 invert dark:invert-0"
          />
        </div>
      </div>
    </section>
  );
}
