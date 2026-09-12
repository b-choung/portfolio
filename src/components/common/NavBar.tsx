"use client";

import { useEffect, useState, MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SECTIONS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      const line = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) setScrolled(true);
  }, [isHome]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "surface-strong backdrop-blur-lg border-b" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto w-full px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 shrink-0"
          aria-label="홈으로"
        >
          <span className="w-6 h-6 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-primary" />
          </span>
          <span className="font-display font-semibold text-sm tracking-tight">Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              href={isHome ? `#${id}` : `/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`px-3.5 py-1.5 rounded-full text-sm transition-colors ${
                active === id
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => {
            if (isHome) {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            } else {
              router.push("/#contact");
            }
          }}
          className="inline-flex items-center rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 hover:opacity-90 transition-opacity shrink-0"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
