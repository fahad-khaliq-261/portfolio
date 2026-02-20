"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutTagline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-28 bg-[#0a0f1a] relative overflow-hidden"
    >
      {/* Interactive wave pattern background using CSS */}
      <div 
        className="absolute inset-0 opacity-[0.08] transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 30}px, ${(mousePos.y - 0.5) * 30}px)`,
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 18px,
              rgba(255,255,255,0.3) 18px,
              rgba(255,255,255,0.3) 19px
            )
          `,
          backgroundSize: "20px 100%",
        }}
      />
      
      {/* Second layer */}
      <div 
        className="absolute inset-0 opacity-[0.05] transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -20}px, ${(mousePos.y - 0.5) * -20}px)`,
          backgroundImage: `
            repeating-linear-gradient(
              85deg,
              transparent,
              transparent 24px,
              rgba(255,255,255,0.2) 24px,
              rgba(255,255,255,0.2) 25px
            )
          `,
          backgroundSize: "25px 100%",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex justify-center"
        >
          <Image
            src="/logo.png"
            alt="DataMills"
            width={56}
            height={56}
            className="w-14 h-14"
          />
        </motion.div>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-center"
        >
          <span className="text-white/40 italic">We&apos;re an </span>
          <span className="text-white font-semibold">AI compliance agency</span>
          <br className="hidden md:block" />
          <span className="text-white/40 italic"> founded by tech passionate</span>
          <br className="hidden md:block" />
          <span className="text-white/40 italic">enthusiasts.</span>
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 text-center"
        >
          <span className="text-white/40 italic">We provide </span>
          <span className="text-white font-semibold">compliance solutions,</span>
          <br className="hidden md:block" />
          <span className="text-white font-semibold">risk assessments </span>
          <span className="text-white/40 italic">and </span>
          <span className="text-white font-semibold">AI strategies</span>
          <br className="hidden md:block" />
          <span className="text-white/40 italic">that </span>
          <span className="text-white font-semibold">redefine </span>
          <span className="text-white/40 italic">how </span>
          <span className="text-white font-semibold">Healthcare,</span>
          <br className="hidden md:block" />
          <span className="text-white font-semibold">Legal </span>
          <span className="text-white/40 italic">and </span>
          <span className="text-white font-semibold">Retail </span>
          <span className="text-white/40 italic">navigate the</span>
          <br className="hidden md:block" />
          <span className="text-white font-semibold">AI world.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Get in touch
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors"
          >
            More about us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
