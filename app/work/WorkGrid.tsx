"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Shield, Zap, Target, BookOpen } from "lucide-react";

interface CaseStudy {
    id: string;
    title: string;
    domain: string;
    slug: string;
    thumbnail_url: string;
    created_at: string;
    content?: string;
}

interface WorkGridProps {
    initialCaseStudies: any[];
}

export default function WorkGrid({ initialCaseStudies }: WorkGridProps) {
    const placeholders = [
        {
            id: "p1",
            title: "MedTech Compliance Framework",
            domain: "Healthcare",
            slug: "medtech-compliance",
            icon: Shield,
            stat: "+95%",
            statLabel: "Audit Success"
        },
        {
            id: "p2",
            title: "Sovereign AI Strategy",
            domain: "Governance",
            slug: "sovereign-ai",
            icon: Target,
            stat: "100%",
            statLabel: "Regulatory Alignment"
        },
        {
            id: "p3",
            title: "Algorithmic Transparency Audit",
            domain: "Legal",
            slug: "transparency-audit",
            icon: Zap,
            stat: "-40%",
            statLabel: "Risk Mitigation"
        },
    ];

    const displayStudies = initialCaseStudies.length > 0
        ? initialCaseStudies
        : placeholders;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayStudies.map((cs, index) => {
                const Icon = (cs as any).icon || BookOpen;
                const hasThumbnail = !!cs.thumbnail_url;
                return (
                    <motion.div
                        key={cs.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link href={`/work/${cs.slug}`} className="group block">
                            <div className="glass-panel h-full flex flex-col bg-bg-card/40 backdrop-blur-xl border border-border group-hover:border-accent/30 rounded-[2.5rem] transition-all duration-500 overflow-hidden relative group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
                                {/* Hover Accent Deco */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/10 transition-colors z-0" />

                                {/* Thumbnail */}
                                <div className="relative w-full h-52 overflow-hidden rounded-t-[2.5rem] bg-bg-secondary border-b border-border flex-shrink-0">
                                    {hasThumbnail ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={cs.thumbnail_url}
                                            alt={cs.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-card">
                                            <Icon className="w-16 h-16 text-text-primary/10" strokeWidth={1} />
                                        </div>
                                    )}
                                    {/* Domain badge */}
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-bg-primary/80 backdrop-blur-sm border border-border text-text-muted text-[10px] uppercase tracking-[0.2em] font-black rounded-full">
                                        {cs.domain}
                                    </span>
                                </div>

                                {/* Card Body */}
                                <div className="p-8 flex flex-col flex-1 relative z-10">
                                    {/* Header: Icon + Stats */}
                                    <div className="flex items-start justify-between mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-bg-secondary border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="w-5 h-5 text-accent" />
                                        </div>
                                        {cs.stat && (
                                            <div className="text-right">
                                                <div className="text-2xl font-black text-text-primary tracking-tighter">{cs.stat}</div>
                                                <div className="text-[9px] uppercase tracking-widest text-text-muted font-bold">{cs.statLabel}</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-black text-text-primary mb-3 tracking-tight leading-tight group-hover:text-accent transition-colors">
                                        {cs.title}
                                    </h3>

                                    {cs.content && (
                                        <p className="text-sm text-text-muted mb-6 line-clamp-2">
                                            {cs.content.replace(/<[^>]+>/g, '')}
                                        </p>
                                    )}

                                    {/* Footer */}
                                    <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted group-hover:text-text-primary transition-colors">
                                            Explore Insight
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-bg-secondary border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                            <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
}
