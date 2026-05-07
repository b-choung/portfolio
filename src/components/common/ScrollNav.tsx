"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function ScrollNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let maxVisible = 0;
      let current = SECTIONS[0].id;

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        const visibleHeight = Math.max(
          0,
          Math.min(bottom, scrollY + windowHeight) - Math.max(top, scrollY),
        );
        if (visibleHeight > maxVisible) {
          maxVisible = visibleHeight;
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group flex items-center gap-3 justify-end"
          aria-label={label}
        >
          <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
          <div
            className={`rounded-full transition-all duration-300 ${
              active === id
                ? "w-2.5 h-2.5 bg-primary translate-x-0.5"
                : "w-1.5 h-1.5 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
