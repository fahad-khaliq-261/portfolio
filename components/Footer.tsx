"use client";

import Link from "next/link";

const menuLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  { name: "EU AI Act", href: "/services/eu-ai-act" },
  { name: "Colorado AI Act", href: "/services/colorado-ai-act" },
  { name: "California AI Act", href: "/services/california-ai-act" },
  { name: "Consulting", href: "/services/consulting" },
];

const followLinks = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "X (Twitter)", href: "https://x.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Behance", href: "https://behance.net" },
  { name: "Dribbble", href: "https://dribbble.com" },
];

const legalLinks = [
  { name: "GDPR", href: "/gdpr" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Conditions", href: "/terms" },
  { name: "Cookies Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] relative overflow-hidden border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Brand Info */}
          <div className="lg:col-span-4">
            <span className="inline-block px-4 py-1.5 bg-transparent border border-white/20 rounded-full text-[11px] uppercase tracking-[0.15em] text-white/50 mb-6">
              AI Compliance Agency
            </span>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Transform ideas into impactful digital experiences that captivate your audience and fuel business growth.
            </p>
            <p className="text-white/30 text-xs">
              Built with ♡ in India @ 2020 - 2026
            </p>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Menu */}
            <div>
              <h3 className="text-white/80 text-sm font-medium mb-5">Menu</h3>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white/80 text-sm font-medium mb-5">Services</h3>
              <ul className="space-y-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-white/80 text-sm font-medium mb-5">Follow us</h3>
              <ul className="space-y-3">
                {followLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white/80 text-sm font-medium mb-5">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/10"></div>
      </div>

      {/* Large DataMills Text */}
      <div className="relative overflow-hidden pointer-events-none">
        <p className="text-[18vw] font-bold text-white/[0.04] whitespace-nowrap text-center leading-none translate-y-[25%] select-none">
          datamills
        </p>
      </div>
    </footer>
  );
}
