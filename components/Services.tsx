"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "AI Compliance",
    color: "from-[#1a3d2e] to-[#0d1f17]",
    titleColor: "text-emerald-400",
    buttonBg: "bg-emerald-400 text-black hover:bg-emerald-300",
    tags: ["EU AI Act", "Colorado AI Act", "California AI Act", "Risk Assessment", "Audit"],
    description: "Navigate the complex landscape of AI regulations with confidence. We provide comprehensive compliance solutions for EU AI Act, Colorado AI Act, and California AI Act, ensuring your AI systems meet all regulatory requirements.",
    href: "/services/ai-compliance",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
        <path d="M50 20 L50 50 L75 65" stroke="#0d1f17" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M35 50 Q50 35 65 50 Q50 65 35 50" stroke="#0d1f17" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Legal",
    color: "from-[#3d1a4d] to-[#1f0d27]",
    titleColor: "text-purple-400",
    buttonBg: "bg-purple-400 text-black hover:bg-purple-300",
    tags: ["Contract Analysis", "Legal AI Tools", "Compliance Audit", "Documentation", "Advisory"],
    description: "Empower your legal operations with AI-driven solutions. From contract analysis to compliance documentation, we help law firms and legal departments leverage AI while maintaining ethical standards.",
    href: "/services/legal",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad2)" />
        <path d="M30 50 L50 30 L70 50 L50 70 Z" stroke="#1f0d27" strokeWidth="3" fill="none" />
        <circle cx="50" cy="50" r="8" fill="#1f0d27" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Healthcare",
    color: "from-[#e2e8f0] to-[#cbd5e1]",
    titleColor: "text-slate-700",
    buttonBg: "bg-slate-700 text-white hover:bg-slate-600",
    textColor: "text-slate-600",
    tagBorder: "border-slate-400 text-slate-600",
    tags: ["Medical AI", "Patient Data", "HIPAA Compliance", "Clinical Tools", "Diagnostics"],
    description: "Transform healthcare delivery with compliant AI solutions. We specialize in medical AI implementations that meet HIPAA requirements and enhance patient care while protecting sensitive health data.",
    href: "/services/healthcare",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad3)" />
        <path d="M50 25 L50 75 M25 50 L75 50" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Retail",
    color: "from-[#0c3547] to-[#061a24]",
    titleColor: "text-cyan-400",
    buttonBg: "bg-cyan-400 text-black hover:bg-cyan-300",
    tags: ["Customer AI", "Inventory", "Personalization", "Analytics", "E-commerce"],
    description: "Revolutionize retail experiences with intelligent AI systems. From personalized recommendations to inventory optimization, we help retailers implement AI solutions that comply with consumer protection regulations.",
    href: "/services/retail",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad4)" />
        <path d="M30 40 Q50 20 70 40 L65 70 L35 70 Z" stroke="#061a24" strokeWidth="3" fill="none" />
        <circle cx="50" cy="55" r="10" stroke="#061a24" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale }}
      className="sticky top-24"
    >
      <div
        className={`rounded-3xl bg-gradient-to-br ${service.color} p-8 md:p-12 min-h-[450px] flex flex-col justify-between relative overflow-hidden shadow-2xl`}
      >
        {/* Icon */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 opacity-90">
          {service.icon}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${service.titleColor}`}
          >
            {service.title}
          </motion.h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs border ${
                  service.tagBorder || "border-white/30 text-white/80"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className={`text-sm md:text-base leading-relaxed mb-8 ${service.textColor || "text-white/70"}`}>
            {service.description}
          </p>

          {/* CTA Button */}
          <Link
            href={service.href}
            className={`inline-block px-6 py-3 rounded-full text-sm font-medium transition-all ${service.buttonBg}`}
          >
            {service.title} services
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-24 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] uppercase tracking-[0.15em] text-white/50 mb-6">
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white/30">Transforming</span>
              <br />
              <span className="text-white">ideas into reality</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors self-start lg:self-auto"
          >
            Our services
          </Link>
        </div>

        {/* Service Cards - Stacked */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
