"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Scale, ShoppingBag, ArrowUpRight } from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    stat: "+95%",
    statLabel: "Compliance Rate",
    description: "AI compliance solutions for hospitals, clinics, health tech companies, and medical device manufacturers navigating AI regulations.",
    features: ["HIPAA Integration", "Clinical AI Systems", "Patient Data Protection", "Medical Device AI"],
    image: "/images/healthcare.jpg",
    href: "/industries/healthcare",
  },
  {
    icon: Scale,
    title: "Legal",
    stat: "+80%",
    statLabel: "Risk Reduction",
    description: "Helping law firms, legal tech companies, and corporate legal departments implement compliant AI solutions.",
    features: ["Legal AI Tools", "Document Analysis", "Contract Review AI", "eDiscovery Systems"],
    image: "/images/legal.jpg",
    href: "/industries/legal",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    stat: "+120%",
    statLabel: "Efficiency Gain",
    description: "AI compliance for e-commerce platforms, retail chains, and consumer brands using AI-powered solutions.",
    features: ["Recommendation Engines", "Pricing AI", "Customer Analytics", "Inventory AI"],
    image: "/images/retail.jpg",
    href: "/industries/retail",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#111113] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Industries we serve</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Specialized expertise
            <br />
            <span className="gradient-text">for your sector</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto">
            Deep industry knowledge combined with AI compliance expertise to deliver tailored solutions for highly regulated sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link href={industry.href} className="group block h-full">
                <div className="card p-8 h-full flex flex-col">
                  {/* Header with Icon and Stat */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <industry.icon className="w-8 h-8 text-[#6366f1]" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#22c55e]">{industry.stat}</div>
                      <div className="text-xs text-[#71717a]">{industry.statLabel}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#6366f1] transition-colors">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 flex-1">
                    {industry.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {industry.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-[#71717a]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-[#6366f1] font-medium group-hover:gap-3 transition-all">
                    Explore solutions
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

