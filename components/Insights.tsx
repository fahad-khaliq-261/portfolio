"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CardVariant = "light" | "featured" | "dark" | "subtle";

interface InsightCard {
  category: string;
  title: string;
  href: string;
  variant: CardVariant;
  tall?: boolean;
}

const insights: InsightCard[] = [
  {
    category: "Perspective",
    title: "Making AI compliance a competitive advantage, not a burden",
    href: "/insights/ai-compliance-advantage",
    variant: "light",
  },
  {
    category: "Research Report",
    title: "EU AI Act 2026: What's changing for high-risk systems",
    href: "/insights/eu-ai-act-2026",
    variant: "featured",
    tall: true,
  },
  {
    category: "Research Report",
    title: "Rewriting healthcare strategy for responsible AI adoption",
    href: "/insights/healthcare-ai-strategy",
    variant: "dark",
    tall: true,
  },
  {
    category: "Research Report",
    title: "Top AI Compliance Trends for 2026",
    href: "/insights/compliance-trends-2026",
    variant: "subtle",
  },
  {
    category: "Case Study",
    title: "Sovereign AI: From managing risk to accelerating growth",
    href: "/insights/sovereign-ai",
    variant: "subtle",
    tall: true,
  },
  {
    category: "Perspective",
    title: "The complexity dividend in regulated industries",
    href: "/insights/complexity-dividend",
    variant: "dark",
  },
  {
    category: "Research Report",
    title: "Learning, reinvented: Accelerating human-AI collaboration",
    href: "/insights/human-ai-collaboration",
    variant: "light",
  },
  {
    category: "Announcement",
    title: "DataMills recognized as a Leader in AI Governance",
    href: "/insights/ai-governance-leader",
    variant: "featured",
  },
];

const variantStyles: Record<CardVariant, { 
  bg: string; 
  border: string;
  category: string; 
  title: string;
  arrowBg: string;
  arrowHover: string;
}> = {
  light: {
    bg: "bg-bg-secondary",
    border: "border-border",
    category: "text-accent",
    title: "text-text-primary",
    arrowBg: "bg-text-primary/5",
    arrowHover: "group-hover:bg-accent group-hover:text-white",
  },
  featured: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    category: "text-accent",
    title: "text-text-primary",
    arrowBg: "bg-accent/20",
    arrowHover: "group-hover:bg-accent group-hover:text-white",
  },
  dark: {
    bg: "bg-bg-card",
    border: "border-border",
    category: "text-text-muted",
    title: "text-text-primary",
    arrowBg: "bg-text-primary/5",
    arrowHover: "group-hover:bg-accent group-hover:text-white",
  },
  subtle: {
    bg: "bg-bg-primary",
    border: "border-border/50",
    category: "text-text-muted",
    title: "text-text-primary",
    arrowBg: "bg-text-primary/5",
    arrowHover: "group-hover:bg-accent group-hover:text-white",
  },
};

function DecoPattern({ variant }: { variant: CardVariant }) {
  const isFeatured = variant === "featured";
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orb */}
      <div className={`absolute -bottom-1/3 -right-1/4 w-3/4 h-3/4 rounded-full bg-accent/5 blur-3xl ${isFeatured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-700`} />
      
      {/* Dot grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Decorative circles */}
      <div className="absolute top-[60%] right-[10%] w-24 h-24 rounded-full border border-text-primary/[0.03]" />
      <div className="absolute top-[45%] right-[20%] w-16 h-16 rounded-full border border-text-primary/[0.02]" />
    </div>
  );
}

function InsightCardComponent({
  card,
  index,
}: {
  card: InsightCard;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const s = variantStyles[card.variant];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={card.tall ? "row-span-2" : ""}
    >
      <Link href={card.href} className="group block h-full">
        <div
          className={`${s.bg} ${s.border} border rounded-2xl h-full min-h-[280px] ${card.tall ? 'min-h-[400px] lg:min-h-[576px]' : ''} p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5`}
        >
          <DecoPattern variant={card.variant} />

          {/* Content */}
          <div className="relative z-10">
            <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${s.category}`}>
              {card.category}
            </span>
            <h3 className={`text-xl lg:text-2xl font-bold leading-snug tracking-tight ${s.title} group-hover:text-accent transition-colors duration-300`}>
              {card.title}
            </h3>
          </div>

          {/* Arrow */}
          <div className="relative z-10 mt-6 self-end">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${s.arrowBg} ${s.arrowHover}`}>
              <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Insights() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-6">
              Latest Insights
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-text-muted">Thinking</span>
              <br />
              <span className="text-text-primary">that leads</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-bg-primary rounded-xl font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-300"
            >
              View all insights
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-5">
          {insights.map((card, i) => (
            <InsightCardComponent key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}