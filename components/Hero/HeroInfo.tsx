"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { rotatingWords } from "./data";

export default function HeroInfo() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
            >
                {/* Accent Line */}
                <motion.div
                    className="w-12 h-1 bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                />

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                    Shaping compliant AI,{" "}
                    <span className="relative inline-block">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentIndex}
                                initial={{ y: 20, opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                exit={{ y: -20, opacity: 0, rotateX: 90 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                                className="inline-block text-accent"
                            >
                                {rotatingWords[currentIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </h2>

                {/* Description */}
                <p className="text-text-secondary text-base leading-relaxed max-w-sm">
                    Helping <span className="text-text-primary">Healthcare</span>, <span className="text-text-primary">Legal</span> & <span className="text-text-primary">Retail</span> navigate{" "}
                    <span className="text-accent">EU AI Act</span>, <span className="text-accent">Colorado AI Act</span> & <span className="text-accent">California AI Act</span>.
                </p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 text-text-primary font-medium group"
                    >
                        <span>See what we do</span>
                        <motion.span
                            className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-text-primary"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
