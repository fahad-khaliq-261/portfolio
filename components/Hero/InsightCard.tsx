"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface InsightCardProps {
    card: any;
    index: number;
}

export default function InsightCard({ card, index }: InsightCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 1.4 + index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? -3 : 3, scale: 1.02 }}
            style={{ perspective: 800, transformStyle: "preserve-3d" }}
            className="group cursor-pointer"
        >
            <Link
                href={card.href}
                className="block relative overflow-hidden min-h-[280px] sm:min-h-[310px] bg-bg-card border border-border"
                style={{
                    borderRadius: "16px",
                    boxShadow: `0 0 0 1px rgba(var(--accent-rgb), 0.06), 0 20px 60px rgba(0,0,0,0.1)`,
                }}
            >
                {/* ── PER-CARD NEON LEFT ACCENT BAR ── */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] z-20"
                    style={{
                        background: card.accent.bar,
                        boxShadow: `0 0 10px 2px ${card.accent.glow}, 0 0 28px 4px ${card.accent.glow.replace('0.7', '0.25')}`,
                        opacity: 0.75,
                    }}
                />
                <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                        background: card.accent.bar,
                        boxShadow: `0 0 20px 6px ${card.accent.glow}, 0 0 50px 12px ${card.accent.glow.replace('0.7', '0.4')}`,
                    }}
                />

                {/* ── GIANT GHOST INDEX NUMBER ── */}
                <div
                    className="absolute -right-2 -top-4 text-[110px] font-black leading-none select-none pointer-events-none z-10 opacity-10"
                    style={{
                        color: "transparent",
                        WebkitTextStroke: `1px var(--accent)`,
                        letterSpacing: "-0.05em",
                    }}
                >
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* ── FULL BACKGROUND IMAGE ── */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover opacity-20 dark:opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Subtle Gradient for Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent z-10" />
                </div>

                {/* ── GLASS GLINT EFFECTS ── */}
                <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl pointer-events-none">
                    <motion.div
                        className="absolute inset-0 w-[40%] h-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-accent/[0.15] to-transparent"
                        initial={{ left: "-100%" }}
                        whileHover={{ left: "200%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </div>

                {/* ── CONTENT OVERLAY ── */}
                <div className="relative z-20 flex flex-col justify-between h-full p-6">
                    {/* Top: Meta Badge */}
                    <div className="flex items-center justify-start">
                        <span
                            className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-black whitespace-nowrap"
                            style={{
                                background: "var(--bg-secondary)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid var(--border)",
                                borderRadius: "8px",
                                color: "var(--text-primary)",
                            }}
                        >
                            {card.category}
                        </span>
                    </div>

                    {/* Bottom Section: Consolidated Title & Action Block */}
                    <div className="glass-panel p-5 rounded-2xl border-border flex flex-col justify-between min-h-[170px] md:min-h-[190px]">
                        <div>
                            <h3
                                className="text-text-primary font-black text-xl md:text-[22px] leading-[1.2] tracking-tight mb-4 line-clamp-2"
                                style={{ textShadow: "0 4px 12px rgba(var(--bg-primary-rgb),0.5)" }}
                            >
                                {card.title}
                            </h3>

                            {/* Progress Bar */}
                            <div
                                className="w-full h-[3px] rounded-full overflow-hidden"
                                style={{ background: "var(--bg-secondary)" }}
                            >
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{ background: card.accent.bar, boxShadow: `0 0 10px ${card.accent.glow}` }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${card.progress}%` }}
                                    transition={{ delay: 1.8 + index * 0.15, duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                            <motion.span
                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-text-muted group-hover:text-text-primary transition-all"
                            >
                                Read full insight
                                <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <ArrowUpRight className="w-3 h-3 text-accent" />
                                </motion.span>
                            </motion.span>
                        </div>
                    </div>
                </div>

                {/* ── HOVER GLOW BORDER (per-card color) ── */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        boxShadow: `inset 0 0 0 1px ${card.accent.chipBorder}, 0 0 40px ${card.accent.chip}`,
                    }}
                />
            </Link>
        </motion.div>
    );
}
