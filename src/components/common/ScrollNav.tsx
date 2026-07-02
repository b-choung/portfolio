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

      // 페이지 맨 아래에 닿으면 마지막 섹션(높이가 작아도)을 활성화
      const scrolledToBottom =
        scrollY + windowHeight >= document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        setActive(SECTIONS[SECTIONS.length - 1].id);
        return;
      }

      // 뷰포트 상단에서 일정 지점(기준선)을 지난 마지막 섹션을 활성화
      const line = scrollY + windowHeight * 0.35;
      let current = SECTIONS[0].id;

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= line) {
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
