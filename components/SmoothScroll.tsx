"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Integrate with GSAP ScrollTrigger if available
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }: {
      scroll: number;
      limit: number;
      velocity: number;
      direction: number;
      progress: number;
    }) => {
      // Expose scroll data for debugging if needed
      if (typeof window !== "undefined") {
        (window as any).lenisScroll = { scroll, limit, velocity, direction, progress };
      }
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor?.hash) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element as HTMLElement, {
            offset: -100,
            duration: 1.8,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Handle resize
    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Prevent flash of unstyled content
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <div className="lenis lenis-smooth">
      {children}
    </div>
  ); 
}