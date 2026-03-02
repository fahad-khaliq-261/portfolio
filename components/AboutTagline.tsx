"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const wordVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

function AnimatedLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="block"
    >
      {children}
    </motion.span>
  );
}

export default function AboutTagline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 sm:py-40 bg-bg-primary relative overflow-hidden"
    >
      {/* Mouse-following glow orb */}
      <div
        ref={containerRef}
        className="absolute inset-0"
      >
        <div
          className="absolute w-[600px] h-[600px] rounded-full transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top/bottom fade edges */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0f1a] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1a] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-12 origin-center"
        />

        {/* Main statement */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.4] sm:leading-[1.5] tracking-tight">
            <AnimatedLine delay={0}>
              <span className="text-text-primary/30 font-light">We&apos;re an </span>
              <span className="text-text-primary font-semibold">AI compliance agency</span>
            </AnimatedLine>
            <AnimatedLine delay={0.12}>
              <span className="text-text-primary/30 font-light">founded by tech passionate enthusiasts.</span>
            </AnimatedLine>
          </h2>
        </div>

        {/* Second statement */}
        <div className="text-center mb-14">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.4] sm:leading-[1.5] tracking-tight">
            <AnimatedLine delay={0.3}>
              <span className="text-text-primary/30 font-light">We provide </span>
              <span className="text-text-primary font-semibold">compliance solutions,</span>
            </AnimatedLine>
            <AnimatedLine delay={0.42}>
              <span className="text-text-primary font-semibold">risk assessments </span>
              <span className="text-text-primary/30 font-light">and </span>
              <span className="text-text-primary font-semibold">AI strategies</span>
            </AnimatedLine>
            <AnimatedLine delay={0.54}>
              <span className="text-text-primary/30 font-light">that </span>
              <span className="text-text-primary font-semibold">redefine </span>
              <span className="text-text-primary/30 font-light">how </span>
              <span className="text-text-primary font-semibold">Healthcare,</span>
            </AnimatedLine>
            <AnimatedLine delay={0.66}>
              <span className="text-text-primary font-semibold">Legal </span>
              <span className="text-text-primary/30 font-light">and </span>
              <span className="text-text-primary font-semibold">Retail </span>
              <span className="text-text-primary/30 font-light">navigate the </span>
              <span className="text-text-primary font-semibold">AI world.</span>
            </AnimatedLine>
          </h3>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-12 origin-center"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-bg-primary text-text-primary text-sm font-medium rounded-full hover:bg-bg-primary/90 transition-all duration-300"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="px-7 py-3.5 bg-bg-primary/[0.06] border border-white/[0.1] text-text-primary/70 text-sm font-medium rounded-full hover:bg-bg-primary/[0.1] hover:text-text-primary transition-all duration-300"
          >
            More about us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
