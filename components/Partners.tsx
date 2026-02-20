"use client";

import { motion } from "framer-motion";

const partners = [
  "MedTech Corp",
  "HealthFirst",
  "LegalAI Pro",
  "RetailSmart",
  "CareConnect",
  "LawTech Solutions",
  "ShopifyPlus",
  "ClinicOS",
  "JurisAI",
  "Commerce360",
  "PatientHub",
  "LegalEase",
];

export default function Partners() {
  return (
    <section className="py-16 border-y border-[#27272a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#71717a] text-sm"
        >
          Trusted by leading organizations
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0b] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0b] to-transparent z-10" />

        {/* Marquee */}
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center"
            >
              <div className="px-6 py-3 border border-[#27272a] rounded-lg bg-[#18181b]/50 hover:border-[#6366f1]/50 transition-colors">
                <span className="text-[#71717a] font-medium text-sm whitespace-nowrap hover:text-white transition-colors">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
