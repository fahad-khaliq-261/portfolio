"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    duration: "1-2 weeks",
    description: "We analyze your AI systems, data practices, and current compliance posture. Through detailed assessments, we identify gaps and create a clear picture of your regulatory requirements.",
    deliverables: ["AI System Inventory", "Gap Analysis Report", "Risk Assessment"],
  },
  {
    number: "02",
    title: "Strategy & Planning",
    duration: "2-3 weeks",
    description: "We develop a comprehensive compliance roadmap tailored to your specific needs. Our strategy aligns with your business objectives while ensuring full regulatory adherence.",
    deliverables: ["Compliance Roadmap", "Implementation Timeline", "Resource Planning"],
  },
  {
    number: "03",
    title: "Implementation",
    duration: "4-8 weeks",
    description: "We execute the compliance strategy, implementing necessary changes to your AI systems, documentation, and processes. Our team works alongside yours for seamless integration.",
    deliverables: ["Technical Documentation", "Process Updates", "Staff Training"],
  },
  {
    number: "04",
    title: "Validation & Launch",
    duration: "1-2 weeks",
    description: "We validate all compliance measures through rigorous testing and audits. Post-launch, we provide ongoing monitoring and support to maintain compliance.",
    deliverables: ["Compliance Audit", "Certification Support", "Ongoing Monitoring"],
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="tag mb-4">How we work</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              How we bring
              <br />
              <span className="gradient-text">ideas to life</span>
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors group"
            >
              Learn more about us
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="card p-8 h-full relative overflow-hidden group">
                {/* Step Number Background */}
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-[#1e3a5f]/30 leading-none select-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Number and Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-blue-500">{step.number}</span>
                      <div className="w-8 h-px bg-[#1e3a5f]" />
                    </div>
                    <span className="text-xs text-white/40 bg-[#0f1729] px-3 py-1 rounded-full border border-[#1e3a5f]">
                      {step.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    {step.deliverables.map((deliverable) => (
                      <div key={deliverable} className="flex items-center gap-2 text-sm text-white/40">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
