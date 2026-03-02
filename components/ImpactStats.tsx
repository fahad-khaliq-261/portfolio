"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful compliance implementations",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Long-term partnerships built on trust",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years Experience",
    description: "In regulatory compliance",
  },
  {
    value: 45,
    suffix: "%",
    label: "Cost Reduction",
    description: "Average compliance cost savings",
  },
];

export default function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0f1729] to-[#0a0f1a]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Highlights</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Numbers that
            <br />
            <span className="gradient-text">drive success</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stats-card text-center h-full">
                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold text-text-primary mb-2">
                  {isInView ? (
                    <CountUp end={stat.value} duration={2} />
                  ) : (
                    "0"
                  )}
                  <span className="gradient-text">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#71717a]">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-[#a1a1aa] max-w-3xl mx-auto leading-relaxed">
            We blend cutting-edge AI expertise with deep regulatory knowledge to build
            <span className="text-text-primary"> compliant, scalable solutions</span> that drive growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
