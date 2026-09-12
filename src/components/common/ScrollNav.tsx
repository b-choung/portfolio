"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hero", label: "Intro", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "education", label: "Education", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
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
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3 items-end">
      {SECTIONS.map(({ id, label, index }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-2 justify-end"
            aria-label={label}
          >
            <span
              className={`text-xs font-mono tracking-widest whitespace-nowrap transition-opacity ${
                isActive ? "opacity-100 text-primary" : "opacity-0 group-hover:opacity-60 text-muted-foreground"
              }`}
            >
              {label}
            </span>
            <span
              className={`font-serif italic text-sm transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground/40 group-hover:text-muted-foreground"
              }`}
            >
              {index}
            </span>
          </button>
        );
      })}
    </div>
  );
}
