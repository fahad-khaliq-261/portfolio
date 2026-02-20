"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Heart, Scale, ShoppingBag } from "lucide-react";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";

const projects = [
  { title: "MedTech Solutions", industry: "Healthcare", stat: "+95%", statLabel: "Compliance Rate", description: "Complete EU AI Act compliance implementation for their diagnostic AI platform.", tags: ["EU AI Act", "Risk Assessment", "Documentation"], icon: Heart },
  { title: "LegalAI Pro", industry: "Legal", stat: "+80%", statLabel: "Risk Reduction", description: "California AI Act compliance for their contract analysis AI system.", tags: ["California AI Act", "Transparency", "Audit Support"], icon: Scale },
  { title: "RetailSmart Inc", industry: "Retail", stat: "-40%", statLabel: "Compliance Cost", description: "Colorado AI Act compliance for their recommendation engine.", tags: ["Colorado AI Act", "Impact Assessment", "Monitoring"], icon: ShoppingBag },
  { title: "HealthFirst Network", industry: "Healthcare", stat: "+120%", statLabel: "Efficiency", description: "Multi-jurisdiction compliance strategy for AI-powered patient systems.", tags: ["EU AI Act", "California AI Act", "Strategy"], icon: Heart },
  { title: "Commerce360", industry: "Retail", stat: "+65%", statLabel: "Speed to Compliance", description: "Accelerated compliance program for pricing AI algorithms.", tags: ["Colorado AI Act", "EU AI Act", "Training"], icon: ShoppingBag },
  { title: "JurisAI", industry: "Legal", stat: "100%", statLabel: "Audit Pass Rate", description: "Comprehensive compliance overhaul for their eDiscovery AI platform.", tags: ["EU AI Act", "Documentation", "Governance"], icon: Scale },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#6366f1]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="tag mb-6">Our work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How we helped
              <span className="gradient-text"> others succeed</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Real results from organizations that trusted us with their AI compliance journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/30 flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-[#6366f1]" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#22c55e]">{project.stat}</div>
                      <div className="text-xs text-[#71717a]">{project.statLabel}</div>
                    </div>
                  </div>

                  {/* Industry Badge */}
                  <span className="inline-block self-start px-3 py-1 bg-[#27272a] text-[#a1a1aa] text-xs rounded-full mb-4">
                    {project.industry}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="text-[#a1a1aa] text-sm mb-6 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#71717a] bg-[#18181b] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link href="/contact" className="flex items-center gap-2 text-sm text-[#6366f1] hover:gap-3 transition-all">
                    View case study
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Industries />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="card p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to be our next success story?</h2>
              <p className="text-[#a1a1aa] max-w-2xl mx-auto mb-8">Let&apos;s discuss how we can help with your AI compliance needs.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Start your project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
