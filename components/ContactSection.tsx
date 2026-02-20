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

const serviceOptions = [
  { id: "branding", label: "Branding" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    services: [] as string[],
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0f1a]" id="contact">
      {/* Three.js StarField Background - Same as Hero */}
      <StarField />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* Badge - Same style as Hero */}
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] uppercase tracking-[0.2em] text-white/50 mb-6">
            Let&apos;s make it happen
          </span>

          {/* Heading - Same style as Hero */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.02em]">
            <span className="text-white/50 italic font-normal">Ready to</span>
            <br />
            <span className="text-white">Get started</span>
          </h2>
        </motion.div>

        {/* CTA Buttons - Same style as Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <button className="px-7 py-3.5 bg-white text-black text-sm rounded-full font-medium hover:bg-white/90 transition-all duration-300">
            Request a quote
          </button>
          <button className="px-7 py-3.5 bg-transparent border border-white/20 text-white text-sm rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
            Book a free call
          </button>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0d1220]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 md:p-10"
        >
          {/* Form Header */}
          <p className="text-white/40 text-sm mb-8">Contact information</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name"
                className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Business email"
                className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Message */}
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project"
              rows={3}
              className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
            />

            {/* Budget Dropdown */}
            <div>
              <p className="text-white/40 text-sm mb-3">Budget</p>
              <div className="relative">
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#0d1220] border border-white/10 rounded-lg px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-white/20 transition-colors cursor-pointer"
                >
                  <option value="" className="text-white/50">Select...</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#0d1220]">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Services Checkboxes */}
            {/* <div>
              <p className="text-white/40 text-sm mb-4">How can we help you ?</p>
              <div className="space-y-3">
                {serviceOptions.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                        formData.services.includes(service.id)
                          ? "bg-white border-white"
                          : "border-white/20 group-hover:border-white/40"
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      {formData.services.includes(service.id) && (
                        <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      {service.label}
                    </span>
                  </label>
                ))}
              </div>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 mt-8"
            >
              Send message
            </button>
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
