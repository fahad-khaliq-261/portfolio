"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── HEADLINE CONFIG ──
const headlineLines = [
  { text: "WE BUILD AI", color: "text-white" },
  { text: "COMPLIANCE", color: "text-white" },
  { text: "SYSTEMS", color: "text-white", highlight: true },
];

const rotatingWords = ["Healthcare", "Legal", "Retail", "Innovation"];

const showcaseImages = [
  { src: "/img/ai.jpg", label: "AI Governance", tag: "AI COMPLIANCE" },
  { src: "/img/health care.jpg", label: "Healthcare AI", tag: "HEALTHCARE" },
  { src: "/img/legal.jpg", label: "Legal Tech", tag: "LEGAL" },
  { src: "/img/Retail.jpg", label: "Retail Intelligence", tag: "RETAIL" },
];

const letterAnim = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.5, ease },
  }),
};

function AnimatedWord({ word, className, delay = 0 }: { word: string; className?: string; delay?: number }) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {word.split("").map((ch, i) => (
        <motion.span key={i} custom={i + delay} variants={letterAnim} initial="hidden" animate="visible" className="inline-block">
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero2() {
  const [wordIdx, setWordIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((p) => (p + 1) % rotatingWords.length), 2500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setImgIdx((p) => (p + 1) % showcaseImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  const currentImg = showcaseImages[imgIdx];

  return (
    <section className="relative min-h-screen bg-[#0a0f1a] overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 sm:py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* ── Left: Text ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/[0.08] border border-blue-500/20 rounded-full text-xs font-medium text-blue-400 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                AI Compliance Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.03em] mb-8">
              {headlineLines.map((line, lineIdx) => {
                const words = line.text.split(" ");
                let charCount = 0;
                for (let l = 0; l < lineIdx; l++) charCount += headlineLines[l].text.replace(/ /g, "").length;

                if (line.highlight) {
                  return (
                    <span key={lineIdx} className="block overflow-visible mt-2">
                      {words.map((word, wi) => {
                        const isLast = wi === words.length - 1;
                        const wordDelay = charCount + words.slice(0, wi).join("").length;
                        return (
                          <span key={wi}>
                            {wi > 0 && <span className="inline-block w-3 lg:w-4" />}
                            {isLast ? (
                              <span className="relative inline-block">
                                <AnimatedWord word={word} className="text-blue-400" delay={wordDelay} />
                                <motion.span
                                  className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={{ delay: (wordDelay + word.length) * 0.03 + 0.3, duration: 0.6, ease }}
                                />
                              </span>
                            ) : (
                              <AnimatedWord word={word} className={line.color} delay={wordDelay} />
                            )}
                          </span>
                        );
                      })}
                    </span>
                  );
                }

                return (
                  <span key={lineIdx} className={`block overflow-hidden ${lineIdx > 0 ? "mt-2" : ""}`}>
                    {words.map((word, wi) => (
                      <span key={wi}>
                        {wi > 0 && <span className="inline-block w-3 lg:w-4" />}
                        <AnimatedWord word={word} className={line.color} delay={charCount + words.slice(0, wi).join("").length} />
                      </span>
                    ))}
                  </span>
                );
              })}
            </motion.h1>

            {/* Subtitle with rotating word */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease }}
              className="text-white/40 text-base sm:text-lg max-w-md mb-8 leading-relaxed"
            >
              Helping{" "}
              <span className="text-white/70">Healthcare</span>,{" "}
              <span className="text-white/70">Legal</span> &{" "}
              <span className="text-white/70">Retail</span>{" "}
              navigate{" "}
              <span className="text-blue-400">EU AI Act</span>,{" "}
              <span className="text-blue-400">Colorado AI Act</span> &{" "}
              <span className="text-blue-400">California AI Act</span>.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-400 transition-colors duration-300"
              >
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.12] text-white/60 text-sm font-medium rounded-full hover:bg-white/[0.05] hover:text-white transition-all duration-300"
              >
                Our services
              </Link>
            </motion.div>

            {/* Rotating word indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-white/20 text-xs uppercase tracking-widest">Shaping</span>
              <div className="relative h-5 overflow-hidden w-24">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIdx}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="absolute left-0 text-blue-400 text-xs font-semibold uppercase tracking-widest"
                  >
                    {rotatingWords[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Image Showcase ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIdx}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImg.src}
                    alt={currentImg.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/70 via-transparent to-[#0a0f1a]/20" />
                </motion.div>
              </AnimatePresence>

              {/* Tag badge */}
              <div className="absolute top-5 left-5 z-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={imgIdx}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.4, ease }}
                    className="inline-block px-3 py-1.5 bg-white/[0.1] backdrop-blur-md border border-white/[0.12] rounded-full text-[10px] uppercase tracking-[0.15em] text-white/80 font-semibold"
                  >
                    {currentImg.tag}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={imgIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.1, ease }}
                    className="text-white font-semibold text-lg drop-shadow-lg"
                  >
                    {currentImg.label}
                  </motion.span>
                </AnimatePresence>

                {/* Image counter */}
                <span className="text-white/30 text-xs font-mono tabular-nums">
                  0{imgIdx + 1} / 0{showcaseImages.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06] z-10">
                <motion.div
                  key={imgIdx}
                  className="h-full bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-3">
              {showcaseImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`relative flex-1 h-16 sm:h-20 rounded-lg overflow-hidden border transition-all duration-300 ${
                    i === imgIdx
                      ? "border-blue-500/50 ring-1 ring-blue-500/20"
                      : "border-white/[0.06] opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                    sizes="12vw"
                  />
                  {i !== imgIdx && <div className="absolute inset-0 bg-[#0a0f1a]/50" />}
                </button>
              ))}
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
