"use client";

import { motion } from "framer-motion";
import { Target, Users, Zap, Shield, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ImpactStats from "@/components/ImpactStats";
import Testimonials from "@/components/Testimonials";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We're motivated by impact, not just outcomes. Every project is an opportunity to help organizations navigate AI responsibly." },
  { icon: Shield, title: "Compliance First", description: "We embed compliance into every solution from day one, ensuring your AI systems are built on a solid regulatory foundation." },
  { icon: Users, title: "Partnership", description: "We're not just consultants—we're partners in your success, invested in your long-term compliance journey." },
  { icon: Zap, title: "Innovation", description: "We stay ahead of regulatory changes and leverage cutting-edge approaches to simplify complex compliance requirements." },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", initials: "AM" },
  { name: "Sarah Chen", role: "Chief Compliance Officer", initials: "SC" },
  { name: "Michael Torres", role: "Head of Strategy", initials: "MT" },
  { name: "Jennifer Park", role: "Technical Director", initials: "JP" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#6366f1]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="tag mb-6">About us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              We&apos;re on a mission to make
              <span className="gradient-text"> AI compliance simple</span>
            </h1>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              DataMills was founded with a clear vision: to help organizations harness the power of AI while navigating the complex regulatory landscape with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="tag mb-4">Our story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">From vision to impact</h2>
              <div className="space-y-4 text-[#a1a1aa]">
                <p>As AI regulations began emerging globally—from the EU AI Act to state-level legislation in Colorado and California—we saw organizations struggling to understand and implement these complex requirements.</p>
                <p>Our team of compliance experts, technologists, and industry specialists came together to bridge this gap. We&apos;ve combined deep regulatory knowledge with practical implementation expertise to create a new standard for AI compliance.</p>
                <p>Today, we help organizations across Healthcare, Legal, and Retail industries navigate AI regulations with confidence, turning compliance from a burden into a competitive advantage.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="aspect-square bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-2xl border border-[#27272a] flex items-center justify-center">
                <span className="text-8xl font-bold gradient-text">DM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ImpactStats />

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="tag mb-4">Our values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What drives us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card p-8 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-[#a1a1aa] text-sm">{value.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="tag mb-4">Our team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Meet our leaders</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card p-6 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-[#71717a] mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="card p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to work with us?</h2>
              <p className="text-[#a1a1aa] max-w-2xl mx-auto mb-8">Let&apos;s discuss how we can help you achieve AI compliance.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Get in touch
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
