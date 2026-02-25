"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "AI Compliance",
    color: "from-[#1a3d2e] to-[#0d1f17]",
    titleColor: "text-emerald-400",
    accentRgb: "52, 211, 153",
    buttonBg: "bg-emerald-400 text-black hover:bg-emerald-300",
    tags: ["EU AI Act", "Colorado AI Act", "California AI Act", "Risk Assessment", "Audit"],
    description:
      "Navigate the complex landscape of AI regulations with confidence. We provide comprehensive compliance solutions for EU AI Act, Colorado AI Act, and California AI Act, ensuring your AI systems meet all regulatory requirements.",
    href: "/services/ai-compliance",
    lottie: "/gifs/Artificial Intelligence.lottie",
  },
  {
    id: 2,
    title: "Legal",
    color: "from-[#3d1a4d] to-[#1f0d27]",
    titleColor: "text-purple-400",
    accentRgb: "192, 132, 252",
    buttonBg: "bg-purple-400 text-black hover:bg-purple-300",
    tags: ["Contract Analysis", "Legal AI Tools", "Compliance Audit", "Documentation", "Advisory"],
    description:
      "Empower your legal operations with AI-driven solutions. From contract analysis to compliance documentation, we help law firms and legal departments leverage AI while maintaining ethical standards.",
    href: "/services/legal",
    lottie: "/gifs/legal.lottie",
  },
  {
    id: 3,
    title: "Healthcare",
    color: "from-[#1e3a2f] to-[#0f1f17]",
    titleColor: "text-emerald-300",
    accentRgb: "110, 231, 183",
    buttonBg: "bg-emerald-400 text-black hover:bg-emerald-300",
    textColor: "text-white/70",
    tagBorder: "border-white/30 text-white/80",
    tags: ["Medical AI", "Patient Data", "HIPAA Compliance", "Clinical Tools", "Diagnostics"],
    description:
      "Transform healthcare delivery with compliant AI solutions. We specialize in medical AI implementations that meet HIPAA requirements and enhance patient care while protecting sensitive health data.",
    href: "/services/healthcare",
    lottie: "/gifs/healthcare.lottie",
  },
  {
    id: 4,
    title: "Retail",
    color: "from-[#0c3547] to-[#061a24]",
    titleColor: "text-cyan-400",
    accentRgb: "34, 211, 238",
    buttonBg: "bg-cyan-400 text-black hover:bg-cyan-300",
    tags: ["Customer AI", "Inventory", "Personalization", "Analytics", "E-commerce"],
    description:
      "Revolutionize retail experiences with intelligent AI systems. From personalized recommendations to inventory optimization, we help retailers implement AI solutions that comply with consumer protection regulations.",
    href: "/services/retail",
    lottie: "/gifs/retail.lottie",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
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
        className={`group rounded-3xl bg-gradient-to-br ${service.color} p-8 md:p-12 min-h-[450px] flex flex-col justify-between relative overflow-hidden shadow-2xl`}
      >
        {/* Hover glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, rgba(${service.accentRgb}, 0.15), transparent 70%)` }}
        />

        {/* Lottie Animation */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-36 h-36 md:w-52 md:h-52 pointer-events-none">
          <DotLottieReact
            src={service.lottie}
            autoplay
            loop
            speed={0.8}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          {/* Number + Title */}
          <div className="flex items-center gap-4 mb-6">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 0.4, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-xs font-mono tracking-wider ${service.titleColor}`}
            >
              0{service.id}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
              className={`text-3xl md:text-4xl font-bold ${service.titleColor}`}
            >
              {service.title}
            </motion.h3>
          </div>

          {/* Tags with stagger */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 + 0.2 }}
                className={`px-3 py-1 rounded-full text-xs border ${
                  service.tagBorder || "border-white/30 text-white/80"
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
            className={`text-sm md:text-base leading-relaxed mb-8 ${service.textColor || "text-white/70"}`}
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          >
            <Link
              href={service.href}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all group/btn ${service.buttonBg}`}
            >
              {service.title} services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom accent line on hover */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
          style={{ background: `linear-gradient(90deg, transparent, rgba(${service.accentRgb}, 0.6), transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-24 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
