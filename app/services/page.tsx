"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

const services = [
  {
    id: "ai-compliance",
    image: "/img/Ai-services.jpg",
    title: "AI Compliance",
    description: "Enterprise-grade compliance frameworks for the world's most regulated AI systems. We ensure your innovation meets global legal standards like the EU AI Act.",
    features: ["Risk Classification & Assessment", "Algorithmic Impact Audits", "Conformity Assessment Support", "Ongoing Governance"],
    link: "/services/ai-compliance",
    light: {
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      accentColor: "bg-blue-600"
    },
    dark: {
      bgColor: "bg-blue-950/30",
      borderColor: "border-blue-800",
      accentColor: "bg-blue-500"
    }
  },
  {
    id: "legal",
    image: "/img/legal.jpg",
    title: "Legal AI",
    description: "Augmenting legal intelligence with secure, compliant AI systems. Built for the modern law firm and enterprise legal department.",
    features: ["Contract Analysis", "Compliance Audit", "Document Review", "Ethics Verification"],
    link: "/services/legal",
    light: {
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      accentColor: "bg-slate-600"
    },
    dark: {
      bgColor: "bg-slate-800/50",
      borderColor: "border-slate-700",
      accentColor: "bg-slate-500"
    }
  },
  {
    id: "retail",
    image: "/img/reatail-services.jpg",
    title: "Retail AI",
    description: "Redefining the consumer experience through intelligent AI while maintaining strict data privacy and fair-trade standards.",
    features: ["Inventory Optimization", "Personalization", "Supply Chain", "Customer AI"],
    link: "/services/retail",
    light: {
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      accentColor: "bg-blue-500"
    },
    dark: {
      bgColor: "bg-indigo-950/30",
      borderColor: "border-indigo-800",
      accentColor: "bg-indigo-500"
    }
  },
  {
    id: "healthcare",
    image: "/img/health-care-services.jpg",
    title: "Healthcare",
    description: "Safe, compliant AI implementation for the care providers of tomorrow. Protecting patients while empowering medical professionals.",
    features: ["HIPAA Compliance", "Clinical AI", "Diagnostics", "Patient Privacy"],
    link: "/services/healthcare",
    light: {
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
      accentColor: "bg-gray-600"
    },
    dark: {
      bgColor: "bg-zinc-800/50",
      borderColor: "border-zinc-700",
      accentColor: "bg-zinc-500"
    }
  },
];

// Simple 3D tilt card component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent/30 overflow-hidden">
      {/* Subtle Background - Adapts to theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-24"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-8">
            Our Services
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">
            Enterprise AI
            <span className="block text-accent">Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl">
            Bridging the gap between AI innovation and global regulatory frameworks. Secure, scalable, and compliant by design.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center overflow-hidden ${service.light.bgColor} ${service.light.borderColor} dark:${service.dark.bgColor} dark:${service.dark.borderColor}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className={`w-12 h-px ${service.light.accentColor} dark:${service.dark.accentColor}`} />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    {service.title}
                  </h2>

                  <p className="text-lg text-text-muted leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-text-secondary"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${service.light.accentColor} dark:${service.dark.accentColor}`} />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className={`group inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg hover:opacity-90 transition-all text-sm text-white ${service.light.accentColor} dark:${service.dark.accentColor}`}
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual Side - Large Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                  <TiltCard className="relative">
                    <div className={`aspect-[4/3] rounded-2xl border flex items-center justify-center relative overflow-hidden ${service.light.bgColor} ${service.light.borderColor} dark:${service.dark.bgColor} dark:${service.dark.borderColor}`}>
                      {/* Grid Pattern */}
                      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                        style={{
                          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                          backgroundSize: '40px 40px',
                          color: 'currentColor'
                        }}
                      />

                      {/* Large Image */}
                      <div className="relative z-10 w-3/4 h-3/4">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* Decorative Elements */}
                      <div className={`absolute top-8 right-8 w-16 h-16 border rounded-full ${service.light.borderColor} dark:${service.dark.borderColor}`} />
                      <div className={`absolute bottom-8 left-8 w-8 h-8 opacity-10 rounded-full ${service.light.accentColor} dark:${service.dark.accentColor}`} />

                      {/* Number Badge */}
                      <div className="absolute top-6 left-6 w-10 h-10 bg-bg-primary border border-border rounded-full flex items-center justify-center font-bold text-text-muted text-sm shadow-sm">
                        0{index + 1}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="border-t border-border bg-bg-secondary/30">
        <ContactSection />
      </div>
    </div>
  );
}