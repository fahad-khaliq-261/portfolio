"use client";

import { motion } from "framer-motion";

export default function WorkHero() {
    return (
        <section className="relative pt-40 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="mesh-gradient opacity-20" />
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-[11px] uppercase tracking-[0.2em] text-accent font-black mb-6">
                        Proven Impact
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-8 tracking-tighter leading-none italic">
                        How we helped
                        <br />
                        <span className="gradient-text">others succeed</span>
                    </h1>
                    <p className="text-xl text-text-secondary font-medium leading-relaxed">
                        Case studies from organizations that trust us to navigate the complexities of AI compliance and regulatory strategy.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
