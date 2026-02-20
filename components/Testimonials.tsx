"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "DataMills delivered exceptional AI compliance solutions for our healthcare platform. Their professional expertise and strategic approach perfectly understood our needs. Outstanding agency, instrumental to our success!",
    author: "Dr. Sarah Chen",
    role: "CTO",
    company: "MedTech Solutions",
    initial: "S",
  },
  {
    quote: "Working with DataMills transformed our legal AI platform. Their deep understanding of California's AI regulations gave us complete confidence in our compliance posture. Highly recommended!",
    author: "Michael Torres",
    role: "CEO",
    company: "LegalAI Pro",
    initial: "M",
  },
  {
    quote: "The team at DataMills delivered exceptional results. Our e-commerce AI systems are now fully compliant with Colorado AI Act requirements. A 40% reduction in compliance costs!",
    author: "Jennifer Park",
    role: "VP Operations",
    company: "RetailSmart",
    initial: "J",
  },
  {
    quote: "DataMills' strategic approach to AI compliance gave us a competitive advantage. They don't just ensure compliance—they help you build better AI systems. Outstanding partnership.",
    author: "David Rodriguez",
    role: "CCO",
    company: "HealthFirst",
    initial: "D",
  },
];

export default function Testimonials() {
  const [currentPair, setCurrentPair] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const pairIndex = currentPair * 2;
  const visibleTestimonials = testimonials.slice(pairIndex, pairIndex + 2);

  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 border border-yellow-500/50 rounded-full text-[11px] uppercase tracking-[0.15em] text-yellow-400 mb-8">
              Stories of Success
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-10">
              Hear it{" "}
              <span className="text-white/50 italic font-normal">from</span>
              <br />
              our clients
            </h2>

            {/* CTA Button */}
            <button className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-sm text-white hover:bg-white/5 transition-colors">
              Read more stories
            </button>
          </motion.div>

          {/* Right Side - Testimonial Cards */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPair}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${currentPair}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="bg-[#0d1220] rounded-2xl p-8 relative overflow-hidden group"
                  >
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top Section - Avatar for first card style */}
                    {index === 0 && (
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-[#27272a] flex items-center justify-center">
                          <span className="text-white/60 text-sm font-medium">
                            {testimonial.initial}
                          </span>
                        </div>
                        <div>
                          <p className="text-white/40 text-sm">
                            {testimonial.role} @ {testimonial.company}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Quote */}
                    <p className="text-white/80 text-[15px] leading-relaxed mb-6 relative z-10">
                      {testimonial.quote}
                    </p>

                    {/* Bottom Section - Author info for second card style */}
                    <div className="flex items-center gap-3 relative z-10">
                      {index === 1 && (
                        <>
                          <div className="w-10 h-10 rounded-full bg-[#27272a] flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-white/60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M9 12l2 2 4-4" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">
                              {testimonial.author}
                            </p>
                            <p className="text-white/40 text-xs">
                              {testimonial.role} @ {testimonial.company}
                            </p>
                          </div>
                        </>
                      )}

                      {index === 0 && (
                        <div className="w-full flex justify-end">
                          <div className="text-right">
                            <p className="text-white/30 text-xs uppercase tracking-wider">
                              — {testimonial.author}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex items-center gap-2 pt-4">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPair(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentPair
                        ? "w-8 bg-white/60"
                        : "w-1.5 bg-white/20 hover:bg-white/30"
                    }`}
                    aria-label={`Go to testimonials ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
