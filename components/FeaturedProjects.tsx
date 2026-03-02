"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  category: string;
  title: string;
  tags: string[];
  description: string;
  stat: string;
  statLabel: string;
  image: string;
  slug: string;
}

export default function FeaturedProjects({ serverProjects }: { serverProjects?: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultProjects = [
    {
      id: "1",
      category: "HEALTHCARE",
      title: "MedTech Solutions",
      tags: ["AI COMPLIANCE", "CONSULTING", "STRATEGY"],
      description: "EU AI Act Compliance for Medical AI Systems",
      stat: "+95%",
      statLabel: "Compliance Rate",
      image: "/projects/healthcare.jpg",
      slug: "medtech-solutions"
    },
    {
      id: "2",
      category: "LEGAL",
      title: "JurisAI Partners",
      tags: ["RISK ASSESSMENT", "AUDIT", "TRAINING"],
      description: "California AI Act Implementation for Legal Tech",
      stat: "+80%",
      statLabel: "Risk Reduction",
      image: "/projects/legal.jpg",
      slug: "jurisai-partners"
    }
  ];

  const projects = serverProjects?.length ? serverProjects : defaultProjects;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  if (!currentProject) return null;

  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-bg-secondary border border-border rounded-full text-[11px] uppercase tracking-[0.15em] text-text-muted mb-6">
              Proven Impact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic">
              <span className="text-text-muted/30">How</span>{" "}
              <span className="text-text-primary">we helped</span>
              <br />
              <span className="text-text-primary">others succeed</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="px-8 py-4 bg-text-primary text-bg-primary text-xs font-black uppercase tracking-widest rounded-full hover:bg-accent hover:text-text-primary transition-all self-start lg:self-auto shadow-xl"
          >
            See all stories
          </Link>
        </div>

        {/* Project Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-bg-card rounded-[3rem] overflow-hidden border border-border backdrop-blur-3xl shadow-2xl shadow-black/5"
            >
              {/* Left - Image & Stats */}
              <div className="relative aspect-[4/3] lg:aspect-auto group/img">
                {/* Real Image or Placeholder */}
                <div className="absolute inset-0 bg-bg-secondary">
                  {currentProject.image ? (
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-card to-transparent opacity-80" />
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-6xl lg:text-8xl font-black text-text-primary italic tracking-tighter"
                  >
                    {currentProject.stat}
                  </motion.div>
                  <div className="text-text-muted text-[10px] uppercase tracking-[0.3em] font-black mt-2">
                    {currentProject.statLabel}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-10 right-10 left-1/2 lg:bottom-16 lg:right-16 lg:left-auto lg:w-48">
                  <div className="h-0.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      key={currentProject.id}
                      onAnimationComplete={nextProject}
                    />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-10 lg:p-20 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                  <div className="text-[120px] font-black leading-none pointer-events-none text-text-primary">0{currentIndex + 1}</div>
                </div>

                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-[10px] uppercase tracking-[0.2em] font-black rounded-full self-start mb-8 border border-accent/20">
                  {currentProject.category}
                </span>

                <h3 className="text-4xl lg:text-5xl font-black text-text-primary mb-10 tracking-tight leading-none italic">
                  {currentProject.title}
                </h3>

                <p className="text-text-secondary text-lg leading-relaxed mb-12">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-10 border-t border-border">
                  <Link
                    href={`/work/${currentProject.slug}`}
                    className="px-8 py-4 bg-bg-secondary border border-border rounded-2xl hover:bg-accent hover:text-text-primary transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-3 group/btn"
                  >
                    Read Full Story
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-3 mt-10">
            <button
              onClick={prevProject}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-all"
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


