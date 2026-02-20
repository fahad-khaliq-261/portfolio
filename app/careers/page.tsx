"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Briefcase, MapPin, Clock, Zap, Users, Globe, Heart } from "lucide-react";

const values = [
  { icon: Zap, title: "Innovation", description: "We stay ahead of regulatory changes and use cutting-edge approaches." },
  { icon: Users, title: "Collaboration", description: "We believe the best work happens when talented people work together." },
  { icon: Globe, title: "Remote-First", description: "Work from anywhere while making a global impact on AI compliance." },
  { icon: Heart, title: "Purpose-Driven", description: "We're motivated by helping organizations use AI responsibly." },
];

const positions = [
  { title: "Senior Compliance Consultant", type: "Full-time", location: "Remote", department: "Consulting" },
  { title: "AI Policy Analyst", type: "Full-time", location: "Remote", department: "Research" },
  { title: "Technical Documentation Specialist", type: "Full-time", location: "Remote", department: "Operations" },
  { title: "Business Development Manager", type: "Full-time", location: "Remote", department: "Sales" },
  { title: "Full-Stack Developer", type: "Full-time", location: "Remote", department: "Engineering" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366f1]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="tag mb-6">Careers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join our
              <span className="gradient-text"> mission</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Help shape the future of responsible AI. Join a team of experts making AI compliance accessible to organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="tag mb-4">Our culture</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Work that matters</h2>
              <div className="space-y-4 text-[#a1a1aa]">
                <p>At DataMills, we&apos;re building a team of passionate professionals who believe in the power of responsible AI.</p>
                <p>We offer competitive compensation, flexible remote work, and the opportunity to work on challenging problems at the intersection of technology and regulation.</p>
                <p>If you&apos;re excited about helping organizations navigate the evolving AI landscape, we&apos;d love to hear from you.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={value.title} className="card p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/30 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-[#6366f1]" />
                    </div>
                    <h3 className="font-semibold text-white mb-1">{value.title}</h3>
                    <p className="text-xs text-[#71717a]">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="tag mb-4">Open positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join our team</h2>
            <p className="text-[#a1a1aa]">Find your next opportunity with us.</p>
          </motion.div>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div key={position.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Link href="/contact" className="block group">
                  <div className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#6366f1] transition-colors mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#71717a]">
                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{position.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{position.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{position.type}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#6366f1]" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="card p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don&apos;t see the right fit?</h2>
              <p className="text-[#a1a1aa] max-w-2xl mx-auto mb-8">We&apos;re always looking for talented people. Send us your resume and let&apos;s talk.</p>
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
