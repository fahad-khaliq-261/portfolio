"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const StarField = dynamic(() => import("./StarField"), { ssr: false });

const rotatingWords = ["Healthcare", "Legal", "Retail", "Innovation"];

// ── HEADLINE CONFIG ──
// Just edit these lines to change the hero text. Last word of the last line gets the glow effect.
const headlineLines = [
  { text: "WE BUILD AI", color: "text-white" },
  { text: "COMPLIANCE", color: "text-white" },
  { text: "SYSTEMS", color: "text-white", glowLastWord: true },
];

const insightCards = [
  {
    category: "AI COMPLIANCE",
    title: "EU AI Act: Complete Implementation Guide for 2026",
    href: "/insights/eu-ai-act",
    image: "/img/ai.jpg",
    overlay: "from-blue-950/90 via-blue-950/60 to-transparent",
  },
  {
    category: "RESEARCH REPORT",
    title: "How Healthcare Leaders Navigate AI Regulations",
    href: "/insights/healthcare-ai",
    image: "/img/health care.jpg",
    overlay: "from-[#0a0f1a]/90 via-[#0a0f1a]/60 to-transparent",
  },
  {
    category: "CASE STUDY",
    title: "Transforming Legal Tech with Compliant AI Solutions",
    href: "/work/legal-tech",
    image: "/img/legal.jpg",
    overlay: "from-[#0a0f1a]/90 via-[#0a0f1a]/60 to-transparent",
  },
  {
    category: "INDUSTRY INSIGHT",
    title: "Retail AI Trends & Compliance Strategies for 2026",
    href: "/insights/retail-ai",
    image: "/img/Retail.jpg",
    overlay: "from-blue-950/90 via-blue-950/60 to-transparent",
  },
];

const stats = [
  { value: "98%", label: "Compliance Rate" },
  { value: "150+", label: "Projects Delivered" },
  { value: "3", label: "AI Acts Covered" },
];

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const AnimatedWord = ({ word, className, delay = 0 }: { word: string; className?: string; delay?: number }) => {
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {word.split("").map((letter, i) => (
        <motion.span
          key={i}
          custom={i + delay}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

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
      <div className="relative z-10 flex-1 flex flex-col pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex flex-col">
          {/* Top Section - Main Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-8">
            {/* Left Side - Big Headline (60%) */}
            <div className="lg:col-span-7">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-[-0.03em]"
              >
                {headlineLines.map((line, lineIdx) => {
                  const words = line.text.split(" ");
                  let charCount = 0;
                  for (let l = 0; l < lineIdx; l++) charCount += headlineLines[l].text.replace(/ /g, "").length;

                  if (line.glowLastWord) {
                    const lastWord = words[words.length - 1];
                    const restWords = words.slice(0, -1);
                    const restText = restWords.join(" ");
                    const glowDelay = charCount + restText.replace(/ /g, "").length;

                    return (
                      <span key={lineIdx} className={`block overflow-visible ${lineIdx > 0 ? "mt-2" : ""}`}>
                        {restWords.map((word, wi) => (
                          <span key={wi}>
                            {wi > 0 && <span className="inline-block w-4" />}
                            <AnimatedWord word={word} className={line.color} delay={charCount + restWords.slice(0, wi).join("").length} />
                          </span>
                        ))}
                        {restWords.length > 0 && <span className="inline-block w-4" />}

                        {/* Highlighted word - clean professional style */}
                        <span className="relative inline-block">
                          <AnimatedWord word={lastWord} className="text-blue-400" delay={glowDelay} />

                          {/* Subtle underline */}
                          <motion.span
                            className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ delay: (glowDelay + lastWord.length) * 0.03 + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                          />
                        </span>
                      </span>
                    );
                  }

                  return (
                    <span key={lineIdx} className={`block overflow-hidden ${lineIdx > 0 ? "mt-2" : ""}`}>
                      {words.map((word, wi) => (
                        <span key={wi}>
                          {wi > 0 && <span className="inline-block w-4" />}
                          <AnimatedWord word={word} className={line.color} delay={charCount + words.slice(0, wi).join("").length} />
                        </span>
                      ))}
                    </span>
                  );
                })}
              </motion.h1>

              {/* Animated tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="mt-8 text-white/50 text-lg max-w-md"
              >
                Your trusted partner for{" "}
                <motion.span
                  className="text-white font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  AI compliance
                </motion.span>{" "}
                across industries
              </motion.p>
            </div>

            {/* Right Side - Info Panel (40%) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Accent Line */}
                <motion.div
                  className="w-12 h-1 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                />

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Shaping compliant AI,{" "}
                  <span className="relative inline-block">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentIndex}
                        initial={{ y: 20, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -20, opacity: 0, rotateX: 90 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="inline-block text-blue-400"
                      >
                        {rotatingWords[currentIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h2>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  Helping <span className="text-white">Healthcare</span>, <span className="text-white">Legal</span> & <span className="text-white">Retail</span> navigate{" "}
                  <span className="text-blue-400">EU AI Act</span>, <span className="text-blue-400">Colorado AI Act</span> & <span className="text-blue-400">California AI Act</span>.
                </p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 text-white font-medium group"
                  >
                    <span>See what we do</span>
                    <motion.span
                      className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section - Image Insight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-auto"
          >
            {insightCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group cursor-pointer"
              >
                <Link
                  href={card.href}
                  className="block relative overflow-hidden min-h-[230px] sm:min-h-[250px]"
                  style={{
                    borderRadius: "16px",
                    background: "linear-gradient(160deg, #0d1628 0%, #080e1c 100%)",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* ── NEON LEFT ACCENT BAR ── */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] z-20 transition-all duration-500"
                    style={{
                      background: "linear-gradient(to bottom, #38bdf8, #6366f1, #38bdf8)",
                      boxShadow: "0 0 12px 2px rgba(56,189,248,0.6), 0 0 30px 4px rgba(99,102,241,0.3)",
                      opacity: 0.7,
                    }}
                  />
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to bottom, #7dd3fc, #a5b4fc, #7dd3fc)",
                      boxShadow: "0 0 20px 6px rgba(125,211,252,0.8), 0 0 50px 10px rgba(165,180,252,0.4)",
                    }}
                  />

                  {/* ── GIANT GHOST INDEX NUMBER ── */}
                  <div
                    className="absolute -right-2 -top-4 text-[110px] font-black leading-none select-none pointer-events-none z-10 transition-all duration-500"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(96,165,250,0.08)",
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {/* Ghost number brightens on hover */}
                  <div
                    className="absolute -right-2 -top-4 text-[110px] font-black leading-none select-none pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(125,211,252,0.2)",
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* ── DIAGONAL IMAGE PANEL (right side) ── */}
                  <div
                    className="absolute inset-y-0 right-0 w-[55%] overflow-hidden z-0"
                    style={{
                      clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover opacity-55 group-hover:opacity-75 transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Image dark vignette */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080e1c] via-[#080e1c]/30 to-transparent" />
                  </div>

                  {/* ── SCAN-LINE SWEEP ON HOVER ── */}
                  <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl pointer-events-none">
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to right, transparent 0%, rgba(125,211,252,0.06) 50%, transparent 100%)",
                        x: "-100%",
                      }}
                      animate={{}}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>

                  {/* ── CONTENT ── */}
                  <div className="relative z-20 p-5 flex flex-col justify-between h-full min-h-[230px] sm:min-h-[250px]">
                    {/* TOP: Category chip */}
                    <div className="flex items-start gap-2">
                      <span
                        className="px-2.5 py-[5px] text-[8px] uppercase tracking-[0.2em] font-extrabold"
                        style={{
                          background: "linear-gradient(90deg, rgba(56,189,248,0.15), rgba(99,102,241,0.15))",
                          border: "1px solid rgba(56,189,248,0.2)",
                          borderRadius: "6px",
                          color: "#7dd3fc",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {card.category}
                      </span>
                    </div>

                    {/* BOTTOM: Title + read tag */}
                    <div className="space-y-3">
                      <h3
                        className="text-white font-bold text-[13px] leading-snug tracking-tight"
                        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
                      >
                        {card.title}
                      </h3>

                      {/* Animated read tag */}
                      <div className="flex items-center gap-2">
                        <motion.span
                          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide"
                          style={{ color: "rgba(125,211,252,0.7)" }}
                          whileHover={{ color: "rgba(125,211,252,1)" }}
                        >
                          Read more
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                          >
                            →
                          </motion.span>
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* ── HOVER GLOW BORDER ── */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(56,189,248,0.25), 0 0 40px rgba(56,189,248,0.08)",
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
