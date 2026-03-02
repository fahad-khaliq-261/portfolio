"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CardVariant = "light" | "purple" | "dark" | "teal" | "violet" | "emerald";

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
    variant: "purple",
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
    variant: "violet",
  },
  {
    category: "Case Study",
    title: "Sovereign AI: From managing risk to accelerating growth",
    href: "/insights/sovereign-ai",
    variant: "emerald",
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
    variant: "teal",
  },
  {
    category: "Announcement",
    title: "DataMills recognized as a Leader in AI Governance",
    href: "/insights/ai-governance-leader",
    variant: "purple",
  },
];

const variantStyles: Record<
  CardVariant,
  { bg: string; category: string; title: string; decoration: string; decorationOpacity: string }
> = {
  light: {
    bg: "bg-bg-secondary",
    category: "text-accent/60",
    title: "text-text-primary",
    decoration: "from-accent/20 to-accent/5",
    decorationOpacity: "opacity-60",
  },
  purple: {
    bg: "bg-gradient-to-br from-bg-card to-bg-primary",
    category: "text-accent/70",
    title: "text-text-primary",
    decoration: "from-accent/15 to-accent/5",
    decorationOpacity: "opacity-100",
  },
  dark: {
    bg: "bg-bg-card",
    category: "text-text-muted/60",
    title: "text-text-primary",
    decoration: "from-accent/10 to-accent/5",
    decorationOpacity: "opacity-100",
  },
  teal: {
    bg: "bg-gradient-to-br from-bg-secondary to-bg-card",
    category: "text-accent/60",
    title: "text-text-primary",
    decoration: "from-accent/12 to-accent/5",
    decorationOpacity: "opacity-100",
  },
  violet: {
    bg: "bg-gradient-to-br from-bg-card to-bg-secondary",
    category: "text-accent/70",
    title: "text-text-primary",
    decoration: "from-accent/20 to-accent/10",
    decorationOpacity: "opacity-100",
  },
  emerald: {
    bg: "bg-gradient-to-br from-bg-secondary to-bg-primary",
    category: "text-accent/60",
    title: "text-text-primary",
    decoration: "from-accent/10 to-accent/5",
    decorationOpacity: "opacity-100",
  },
};

function DecoPattern({ variant }: { variant: CardVariant }) {
  const s = variantStyles[variant];
  const isLight = variant === "light";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
      <div
        className={`absolute -bottom-1/3 -right-1/4 w-3/4 h-3/4 rounded-full bg-gradient-to-br ${s.decoration} ${s.decorationOpacity} blur-2xl`}
        suppressHydrationWarning
      />
      <div
        className={`absolute inset-0 ${isLight ? "opacity-[0.04]" : "opacity-[0.03]"}`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isLight ? "#000" : "#fff"} 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
        }}
        suppressHydrationWarning
      />
      <div
        className={`absolute top-[60%] right-[10%] w-32 h-32 rounded-full border ${isLight ? "border-black/[0.06]" : "border-white/[0.04]"
          }`}
        suppressHydrationWarning
      />
      <div
        className={`absolute top-[45%] right-[20%] w-20 h-20 rounded-full border ${isLight ? "border-black/[0.04]" : "border-white/[0.03]"
          }`}
        suppressHydrationWarning
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-px ${isLight ? "bg-bg-primary/[0.06]" : "bg-bg-primary/[0.04]"
          }`}
        suppressHydrationWarning
      />
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
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={card.tall ? "row-span-2 sm:row-span-1 lg:row-span-2" : ""}
    >
      <Link href={card.href} className="group block h-full">
        <div
          className={`${s.bg} rounded-xl sm:rounded-2xl h-full min-h-[240px] sm:min-h-[280px] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
        >
          <DecoPattern variant={card.variant} />

          {/* Content */}
          <div className="relative z-10">
            <span
              className={`inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 ${s.category}`}
            >
              {card.category}
            </span>
            <h3
              className={`text-lg sm:text-xl md:text-[22px] font-bold leading-snug tracking-tight ${s.title}`}
            >
              {card.title}
            </h3>
          </div>

          {/* Arrow indicator */}
          <div className="relative z-10 mt-6 self-end">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${card.variant === "light"
                  ? "bg-bg-primary/[0.06] group-hover:bg-bg-primary/[0.12]"
                  : "bg-bg-primary/[0.06] group-hover:bg-bg-primary/[0.12]"
                }`}
            >
              <ArrowUpRight
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${card.variant === "light" ? "text-text-primary/50" : "text-text-primary/50"
                  }`}
              />
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
    <section ref={sectionRef} className="py-20 sm:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-bg-secondary border border-border rounded-full text-[11px] uppercase tracking-[0.2em] text-text-muted mb-5">
              Latest Insights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <span className="text-text-muted/25">Thinking</span>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-bg-primary text-sm font-medium rounded-full hover:bg-accent hover:text-text-primary transition-colors"
            >
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Card grid - 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 sm:gap-5">
          {insights.map((card, i) => (
            <InsightCardComponent key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
