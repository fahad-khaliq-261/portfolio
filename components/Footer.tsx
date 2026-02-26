"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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

const followLinks = [
  { name: "LinkedIn", abbr: "Li", href: "https://linkedin.com" },
  { name: "Instagram", abbr: "Ig", href: "https://instagram.com" },
  { name: "X", abbr: "X", href: "https://x.com" },
  { name: "Behance", abbr: "Be", href: "https://behance.net" },
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
      <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium mb-6">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] pt-24 pb-12 overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section: Headline + Nav */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-24">
          <div className="max-w-sm">
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
              Experience <br />
              <span className="text-white/40 italic font-light">Compliance</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Center Section: BIG BRANDING - High Impact & Visible */}
        <div className="relative select-none pointer-events-none py-12">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16vw] font-black leading-none tracking-[-0.07em] text-white text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            DataMills
          </motion.h1>
        </div>

        {/* Bottom Section: Branding & Copyright - Enhanced Visibility */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/[0.08]">
          <div className="flex items-center gap-6">
            <span className="text-xl font-black text-white tracking-tighter hover:text-blue-400 transition-colors cursor-default">
              DataMills
            </span>
            <span className="w-px h-4 bg-white/10 hidden md:block" />
            <span className="text-[11px] font-medium text-white/40 tracking-wider hidden md:block uppercase">
              Compliance Systems
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
              © {new Date().getFullYear()} DataMills All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
