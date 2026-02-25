"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    lottie: "/gifs/healthcare.lottie",
    stat: "+95%",
    statLabel: "Compliance Rate",
    description:
      "AI compliance solutions for hospitals, clinics, health tech companies, and medical device manufacturers navigating AI regulations.",
    features: ["HIPAA Integration", "Clinical AI Systems", "Patient Data Protection", "Medical Device AI"],
    href: "/industries/healthcare",
  },
  {
    title: "Legal",
    lottie: "/gifs/legal.lottie",
    stat: "+80%",
    statLabel: "Risk Reduction",
    description:
      "Helping law firms, legal tech companies, and corporate legal departments implement compliant AI solutions.",
    features: ["Legal AI Tools", "Document Analysis", "Contract Review AI", "eDiscovery Systems"],
    href: "/industries/legal",
  },
  {
    title: "Retail",
    lottie: "/gifs/retail.lottie",
    stat: "+120%",
    statLabel: "Efficiency Gain",
    description:
      "AI compliance for e-commerce platforms, retail chains, and consumer brands using AI-powered solutions.",
    features: ["Recommendation Engines", "Pricing AI", "Customer Analytics", "Inventory AI"],
    href: "/industries/retail",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0.5px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5">
            Industries we serve
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Specialized expertise
            <br />
            <span className="gradient-text">for your sector</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Deep industry knowledge combined with AI compliance expertise to deliver tailored solutions for highly regulated sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={industry.href} className="group block h-full">
                <div className="bg-[#131d2e] border border-[#1e3a5f] rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:border-blue-500 hover:bg-[#182436] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]">
                  {/* Lottie + Stat header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-105 transition-transform duration-500">
                      <DotLottieReact
                        src={industry.lottie}
                        autoplay
                        loop
                        speed={0.8}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#22c55e]">{industry.stat}</div>
                      <div className="text-xs text-white/30">{industry.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {industry.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">
                    {industry.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {industry.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-white/30">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all duration-300 mt-auto">
                    Explore solutions
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
