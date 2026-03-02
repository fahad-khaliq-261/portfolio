"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },


];

import { ThemeToggle } from "./ThemeToggle";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
        {/* Glass pill container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div
            className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-2xl transition-all duration-500 border"
            style={{
              background: scrolled
                ? "var(--bg-secondary)"
                : "transparent",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: scrolled
                ? "var(--border)"
                : "rgba(128,128,128,0.1)",
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.1)"
                : "none",
            }}
          >
            {/* Logo */}
            <Link href="/" onClick={close} className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="DataMills"
                width={72}
                height={72}
                className="w-16 h-16 object-contain dark:invert-0 invert transition-all"
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? "text-accent" : "text-text-secondary group-hover:text-text-primary"
                        }`}
                    >
                      {item.name}
                    </span>

                    {/* Active indicator dot */}
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Hover pill background */}
                    <span className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/5 transition-colors duration-200 pointer-events-none" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA + Toggle + Hamburger */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* CTA button — desktop only */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-text-primary nav-cta-btn"
              >
                Contact us
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-200 border border-border bg-bg-secondary"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-4 h-4 text-text-primary" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-4 h-4 text-text-primary" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* ─── MOBILE DROPDOWN DRAWER ─── */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                key="mobile-drawer"
                initial={{ opacity: 0, y: -12, scaleY: 0.92 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -8, scaleY: 0.94 }}
                transition={{ duration: 0.3, ease }}
                style={{ transformOrigin: "top" }}
                className="md:hidden mt-2 rounded-2xl overflow-hidden"
              >
                <div
                  className="p-4 flex flex-col gap-1 border border-border"
                  style={{
                    background: "var(--bg-secondary)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
                  }}
                >
                  {navItems.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3, ease }}
                      >
                        <Link
                          href={item.href}
                          onClick={close}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl group transition-colors duration-200 ${isActive
                            ? "bg-accent/10 border border-accent/20"
                            : "border border-transparent hover:bg-accent/5"
                            }`}
                        >
                          <span
                            className={`text-sm font-medium ${isActive ? "text-accent" : "text-text-secondary"}`}
                          >
                            {item.name}
                          </span>
                          <ArrowUpRight
                            className={`w-3.5 h-3.5 transition-opacity ${isActive ? "text-accent opacity-100" : "text-text-muted opacity-0 group-hover:opacity-100"
                              }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Divider + CTA */}
                  <div
                    className="my-2 h-px bg-border"
                  />
                  <Link
                    href="/contact"
                    onClick={close}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-text-primary nav-cta-btn shadow-lg shadow-accent/20"
                  >
                    Get Started
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
