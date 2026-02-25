"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "HEALTHCARE",
    title: "MedTech Solutions",
    tags: ["AI COMPLIANCE", "CONSULTING", "STRATEGY"],
    description: "EU AI Act Compliance for Medical AI Systems",
    stat: "+95%",
    statLabel: "Compliance Rate",
    image: "/projects/healthcare.jpg",
  },
  {
    id: 2,
    category: "LEGAL",
    title: "JurisAI Partners",
    tags: ["RISK ASSESSMENT", "AUDIT", "TRAINING"],
    description: "California AI Act Implementation for Legal Tech",
    stat: "+80%",
    statLabel: "Risk Reduction",
    image: "/projects/legal.jpg",
  },
  {
    id: 3,
    category: "RETAIL",
    title: "RetailSmart Inc",
    tags: ["COLORADO AI ACT", "AUTOMATION", "COMPLIANCE"],
    description: "AI-Powered Customer Analytics Compliance",
    stat: "+120%",
    statLabel: "Efficiency Gain",
    image: "/projects/retail.jpg",
  },
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-24 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] uppercase tracking-[0.15em] text-white/50 mb-6">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white/30">How</span>{" "}
              <span className="text-white">we helped</span>
              <br />
              <span className="text-white">other succeed</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors self-start lg:self-auto"
          >
            See all projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#0d1220] rounded-2xl overflow-hidden border border-white/5"
            >
              {/* Left - Image & Stats */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                {/* Placeholder for project image - replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                  {/* Mock browser window */}
                  <div className="absolute inset-4 lg:inset-8 bg-[#0d0d0d] rounded-lg overflow-hidden border border-white/10">
                    <div className="h-8 bg-[#1a1a1a] flex items-center px-3 gap-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="px-4 py-1 bg-white/5 rounded text-[10px] text-white/30">
                          {currentProject.title.toLowerCase().replace(/\s/g, "")}.com
                        </div>
                      </div>
                    </div>
                    <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                      <div className="text-3xl font-bold text-white/20 mb-2">{currentProject.title}</div>
                      <div className="text-sm text-white/10">{currentProject.category} Platform</div>
                    </div>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8">
                  <div className="text-5xl lg:text-6xl font-bold text-white">
                    {currentProject.stat}
                  </div>
                  <div className="text-white/60 text-sm mt-1">
                    {currentProject.statLabel}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-4 right-4 left-1/2 lg:bottom-8 lg:right-8 lg:left-auto lg:w-48">
                  <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white/40"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={currentIndex}
                      onAnimationComplete={nextProject}
                    />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-[11px] uppercase tracking-wider rounded-full self-start mb-6">
                  {currentProject.category}
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  {currentProject.title}
                </h3>

                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-white/40 mb-4">
                  {currentProject.tags.map((tag, i) => (
                    <span key={tag}>
                      {tag}
                      {i < currentProject.tags.length - 1 && (
                        <span className="ml-2 text-white/20">•</span>
                      )}
                    </span>
                  ))}
                </div>

                <p className="text-white/60 text-lg">
                  {currentProject.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

