"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const menuLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  { name: "EU AI Act", href: "/services/eu-ai-act" },
  { name: "Colorado AI Act", href: "/services/colorado-ai-act" },
  { name: "California AI Act", href: "/services/california-ai-act" },
  { name: "Consulting", href: "/services/consulting" },
];

const legalLinks = [
  { name: "GDPR", href: "/gdpr" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Conditions", href: "/terms" },
  { name: "Cookies Policy", href: "/cookies" },
];

function FooterColumn({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease }}
    >
      <h3 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-semibold mb-6">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

// Simple 3D cursor effect component
const BigBranding = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-12 cursor-default"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ duration: 0.1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[18vw] md:text-[16vw] font-black leading-none tracking-[-0.07em] text-text-primary/5 text-center select-none pointer-events-none"
        >
          DataMills
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-bg-primary pt-24 pb-12 overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section: Headline + Nav */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-24">
          <div className="max-w-sm">
            <h2 className="text-3xl md:text-4xl font-medium text-text-primary leading-tight">
              Experience <br />
              <span className="text-text-muted italic font-light">Compliance</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-text-secondary hover:text-accent transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-text-secondary hover:text-accent transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Center Section: BIG BRANDING - With simple cursor effect */}
        <BigBranding />

        {/* Bottom Section: Branding & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-border">
          <div className="flex items-center gap-6">
            <span className="text-xl font-black text-text-primary tracking-tighter hover:text-accent transition-colors cursor-default">
              DataMills
            </span>
            <span className="w-px h-4 bg-border hidden md:block" />
            <span className="text-[11px] font-medium text-text-muted tracking-wider hidden md:block uppercase">
              Compliance Systems
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] uppercase tracking-widest text-text-muted hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted/40 font-medium">
              © {new Date().getFullYear()} DataMills All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}