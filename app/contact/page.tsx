"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@datamills.io", href: "mailto:hello@datamills.io" },
  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, label: "Location", value: "Remote-First Organization", href: null },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
];

const faqs = [
  { q: "What industries do you serve?", a: "We specialize in Healthcare, Legal, and Retail industries, though our expertise applies to any organization using AI systems that fall under EU AI Act, Colorado AI Act, or California AI Act regulations." },
  { q: "How long does compliance implementation take?", a: "Timelines vary based on complexity. A basic assessment takes 1-2 weeks, while full implementation can range from 4-12 weeks depending on your AI systems and requirements." },
  { q: "Do you offer ongoing support?", a: "Yes! Our Managed Compliance service provides continuous monitoring, regulatory updates, quarterly reviews, and a dedicated account manager to ensure ongoing compliance." },
  { q: "What's included in a free consultation?", a: "Our 15-30 minute discovery call covers your current AI systems, compliance needs, and a high-level assessment of what it would take to achieve full regulatory compliance." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="mesh-gradient opacity-40" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-[12px] uppercase tracking-[0.2em] text-accent font-bold mb-6">Contact us</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight">
              Let&apos;s start a
              <span className="gradient-text"> conversation</span>
            </h1>
            <p className="text-xl text-text-secondary font-medium">
              Ready to navigate AI compliance with confidence? We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 relative bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="glass-panel p-8 text-center h-full hover:border-accent/30 transition-all duration-300 group bg-bg-card/50 backdrop-blur-xl border border-border rounded-3xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 border border-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-text-muted text-sm font-semibold uppercase tracking-wider mb-2">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-lg text-text-primary hover:text-accent transition-colors font-bold">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-text-primary font-bold">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* FAQ Section */}
      <section className="py-24 relative bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-[12px] uppercase tracking-[0.2em] text-accent font-bold mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">Frequently asked questions</h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="glass-panel p-8 hover:bg-bg-card/80 transition-colors bg-bg-card/50 backdrop-blur-xl border border-border rounded-2xl">
                  <h3 className="text-xl font-bold text-text-primary mb-4">{faq.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
