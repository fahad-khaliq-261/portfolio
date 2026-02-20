"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const StarField = dynamic(() => import("./StarField"), { ssr: false });

const rotatingWords = [
  "Healthcare",
  "Legal",
  "Retail",
  "AI Compliance",
];

const clients = [
  "OPTIMO AUTOHAUS",
  "RecruiterOne",
  "sKOOLvers",
  "Vignetique",
  "OXIDELTA",
  "MC",
  "WESTGROW",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-[#0a0f1a] overflow-hidden">
      {/* Three.js StarField Background */}
      <StarField />


      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] uppercase tracking-[0.2em] text-white/50">
              Digital Transformation Agency
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] mb-6 tracking-[-0.02em]"
          >
            <span className="text-white">Transforming</span>
            <br />
            <span className="relative inline-flex h-[1.15em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="text-white"
                >
                  {rotatingWords[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[15px] md:text-base text-white/40 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Empowering Healthcare, Legal, and Retail industries with AI compliance solutions 
            for EU AI Act, Colorado AI Act, and California AI Act.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link 
              href="/services" 
              className="px-7 py-3.5 bg-transparent border border-white/20 text-white text-sm rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Our services
            </Link>
            <Link 
              href="/contact" 
              className="px-7 py-3.5 bg-white text-black text-sm rounded-full font-medium hover:bg-white/90 transition-all duration-300"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Trusted By Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 py-8 border-t border-white/5"
      >
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-white/30 mb-6">
          They trusted us
        </p>
        
        {/* Infinite Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="mx-12 text-white/40 font-semibold text-lg md:text-xl tracking-wide"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

