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
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <footer className="bg-[#060a12] relative overflow-hidden">
      {/* ── CTA Banner ── */}
      <div ref={ctaRef} className="border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white/20">Ready to make</span>
                <br />
                <span className="text-white">your AI compliant?</span>
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-400 transition-colors duration-300"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.1] text-white/60 text-sm font-medium rounded-full hover:bg-white/[0.04] hover:text-white transition-all duration-300"
              >
                Our services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <Image
                src="/logo.png"
                alt="DataMills"
                width={48}
                height={48}
                className="w-12 h-12 mb-6"
              />
              <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-8">
                We help organizations build AI systems that meet regulatory requirements across Healthcare, Legal, and Retail industries.
              </p>

              {/* Social icons */}
              <div className="flex gap-2">
                {followLinks.map((link) => (
                  <a
                    key={link.abbr}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 text-[11px] font-semibold hover:border-blue-500/30 hover:text-blue-400 hover:bg-blue-500/[0.05] transition-all duration-300"
                  >
                    {link.abbr}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <FooterColumn title="Menu" delay={0.1}>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-50 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Services" delay={0.15}>
              <ul className="space-y-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Legal" delay={0.2}>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact" delay={0.25}>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@datamills.ai" className="text-white/40 text-sm hover:text-blue-400 transition-colors duration-300">
                    hello@datamills.ai
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} DataMills. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Large watermark ── */}
      <div className="relative overflow-hidden pointer-events-none">
        <p className="text-[16vw] font-bold text-white/[0.015] whitespace-nowrap text-center leading-none translate-y-[30%] select-none">
          datamills
        </p>
      </div>
    </footer>
  );
}
