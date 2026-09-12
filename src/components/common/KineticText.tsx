"use client";

import { ElementType, useEffect, useRef } from "react";

interface KineticTextProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const MAX_SKEW = 4;
const DECAY = 0.85;

export default function KineticText({ children, className = "", as = "span" }: KineticTextProps) {
  const ref = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const skew = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lastY.current = window.scrollY;

    const apply = () => {
      if (ref.current) ref.current.style.transform = `skewY(${skew.current.toFixed(2)}deg)`;
    };

    const decay = () => {
      skew.current *= DECAY;
      apply();
      if (Math.abs(skew.current) > 0.05) {
        raf.current = requestAnimationFrame(decay);
      } else {
        skew.current = 0;
        if (ref.current) ref.current.style.transform = "";
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;
      skew.current = Math.max(-MAX_SKEW, Math.min(MAX_SKEW, delta * 0.6));
      apply();
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(decay);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const Tag = as as ElementType;

  return (
    <Tag ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </Tag>
  );
}
