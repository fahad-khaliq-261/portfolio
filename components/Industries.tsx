"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowUpRight, Shield, Scale, Activity, ShoppingBag } from "lucide-react";

const industries = [
  {
    title: "AI Compliance",
    lottie: "/gifs/Artificial intelligence.lottie",
    icon: Shield,
    stat: "+95%",
    statLabel: "Audit Success",
    description: "End-to-end compliance frameworks for the EU AI Act, ensuring your systems meet regulatory standards.",
    features: ["Risk Classification", "Conformity Assessment", "Documentation", "Ongoing Monitoring"],
    href: "/industries/ai-compliance",
    accent: "blue",
  },
  {
    title: "Legal",
    lottie: "/gifs/legal.lottie",
    icon: Scale,
    stat: "+80%",
    statLabel: "Risk Reduction",
    description: "Helping law firms and legal departments implement compliant AI for contract analysis and research.",
    features: ["Contract Analysis", "Legal Research AI", "eDiscovery", "Compliance Audit"],
    href: "/services/legal",
    accent: "slate",
  },
  {
    title: "Healthcare",
    lottie: "/gifs/healthcare.lottie",
    icon: Activity,
    stat: "+120%",
    statLabel: "Efficiency Gain",
    description: "HIPAA-compliant AI solutions for hospitals, clinics, and medical device manufacturers.",
    features: ["Clinical AI", "Patient Data Protection", "Medical Imaging", "Diagnostics"],
    href: "/industries/healthcare",
    accent: "indigo",
  },
  {
    title: "Retail",
    lottie: "/gifs/retail.lottie",
    icon: ShoppingBag,
    stat: "+65%",
    statLabel: "Revenue Growth",
    description: "AI compliance for e-commerce platforms and retail chains using personalization and pricing AI.",
    features: ["Recommendation Engines", "Dynamic Pricing", "Inventory AI", "Customer Analytics"],
    href: "/industries/retail",
    accent: "violet",
  },
];

const accentColors: Record<string, { light: string; dark: string; bg: string; border: string }> = {
  blue: {
    light: "text-blue-600",
    dark: "text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
  },
  slate: {
    light: "text-slate-600",
    dark: "text-slate-400",
    bg: "bg-slate-100 dark:bg-slate-800/50",
    border: "border-slate-300 dark:border-slate-700",
  },
  indigo: {
    light: "text-indigo-600",
    dark: "text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    border: "border-indigo-200 dark:border-indigo-800",
  },
  violet: {
    light: "text-violet-600",
    dark: "text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
  },
};

export default function Industries() {
  return (
    <section className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-6">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight">
            Specialized expertise
            <br />
            <span className="text-accent">for your sector</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Deep industry knowledge combined with AI compliance expertise to deliver 
            tailored solutions for highly regulated sectors.
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const colors = accentColors[industry.accent];
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={industry.href} className="group block h-full">
                  <div className="relative h-full bg-bg-card border border-border rounded-3xl p-6 flex flex-col overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 dark:hover:shadow-accent/10">
                    
                    {/* Ambient Glow on Hover */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${colors.bg}`} />

                    {/* Header: Icon + Stat */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                        <Icon className={`w-7 h-7 ${colors.light} dark:${colors.dark}`} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-text-primary tracking-tight">
                          {industry.stat}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                          {industry.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Lottie Animation */}
                    <div className="w-full h-32 mb-4 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      <DotLottieReact
                        src={industry.lottie}
                        autoplay
                        loop
                        speed={0.8}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10 group-hover:text-accent transition-colors duration-300">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1 relative z-10">
                      {industry.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 relative z-10">
                      {industry.features.map((feature, i) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-text-muted">
                          <div className={`w-1 h-1 rounded-full ${colors.light.replace('text-', 'bg-')} dark:${colors.dark.replace('text-', 'bg-')}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer Link */}
                    <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between relative z-10">
                      <span className="text-xs font-semibold uppercase tracking-widest text-text-muted group-hover:text-text-primary transition-colors duration-300">
                        Explore
                      </span>
                      <div className="w-8 h-8 rounded-full bg-bg-secondary border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Index Number */}
                    <div className="absolute bottom-4 right-4 text-6xl font-black text-text-primary/[0.02] leading-none select-none pointer-events-none">
                      0{index + 1}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}