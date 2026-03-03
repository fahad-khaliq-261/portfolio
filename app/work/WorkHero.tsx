"use client";

import { motion, Variants } from "framer-motion";

export default function WorkHero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* Eyebrow */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-8">
                            Proven Impact
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8 tracking-tight leading-[1.1]"
                    >
                        How we helped
                        <br />
                        <span className="text-accent">others succeed</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
                    >
                        Case studies from organizations that trust us to navigate the
                        complexities of AI compliance and regulatory strategy.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                    >
                        {[
                            { value: "50+", label: "Projects" },
                            { value: "95%", label: "Success Rate" },
                            { value: "24/7", label: "Support" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs uppercase tracking-widest text-text-muted font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}