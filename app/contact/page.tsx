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
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366f1]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="tag mb-6">Contact us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s start a
              <span className="gradient-text"> conversation</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Ready to navigate AI compliance with confidence? We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/30 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <p className="text-[#71717a] text-sm mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white hover:text-[#6366f1] transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* FAQ Section */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="tag mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently asked questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                  <p className="text-[#a1a1aa] text-sm">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
