"use client";

import { motion } from "framer-motion";
import { Shield, FileCheck, Scale, Cpu, Users, TrendingUp, ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

const services = [
  { icon: Shield, title: "EU AI Act Compliance", description: "Comprehensive compliance solutions for the European Union's landmark AI regulation. From risk classification to technical documentation.", features: ["Risk Classification & Assessment", "Technical Documentation", "Conformity Assessment Support", "Ongoing Monitoring & Updates"] },
  { icon: FileCheck, title: "Colorado AI Act Compliance", description: "Navigate Colorado's consumer protection AI requirements with confidence. Impact assessments, disclosures, and governance.", features: ["Algorithmic Impact Assessments", "Consumer Disclosure Requirements", "Risk Management Frameworks", "Developer & Deployer Obligations"] },
  { icon: Scale, title: "California AI Act Compliance", description: "Meet California's AI transparency and accountability standards. Regulatory guidance and audit support.", features: ["Transparency Report Generation", "Accountability Measures", "Compliance Audit Support", "Regulatory Change Monitoring"] },
  { icon: Cpu, title: "AI Strategy & Implementation", description: "Develop and implement AI strategies that are compliant by design. From readiness to deployment.", features: ["AI Readiness Assessment", "Compliance-First Architecture", "Implementation Roadmap", "Team Training & Enablement"] },
  { icon: Users, title: "Consulting & Advisory", description: "Expert guidance on AI governance, policy development, and regulatory compliance tailored to your industry.", features: ["Governance Framework Design", "Policy Development", "Regulatory Advisory", "Board & Executive Briefings"] },
  { icon: TrendingUp, title: "Managed Compliance", description: "Ongoing compliance monitoring and management. Stay ahead of regulatory changes with continuous support.", features: ["Continuous Monitoring", "Regulatory Update Alerts", "Quarterly Compliance Reviews", "Dedicated Account Manager"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366f1]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="tag mb-6">Our services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Compliance
              <span className="gradient-text"> solutions</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Comprehensive compliance services for EU AI Act, Colorado AI Act, and California AI Act. Tailored for Healthcare, Legal, and Retail industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "" : ""}`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-[#a1a1aa] mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-[#a1a1aa]">
                          <CheckCircle className="w-5 h-5 text-[#6366f1]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[#6366f1] font-medium hover:gap-3 transition-all">
                      Learn more
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-video bg-gradient-to-br from-[#18181b] to-[#111113] rounded-2xl border border-[#27272a] flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-[#27272a]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
