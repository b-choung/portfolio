import TypewriterRole from "./TypewriterRole";
import { personal } from "@/data/personal";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center min-h-dvh px-6 md:px-20 overflow-hidden">
      <span
        className="index-num absolute -top-10 right-4 md:right-16 text-[14rem] md:text-[24rem] leading-none pointer-events-none select-none"
        aria-hidden
      >
        01
      </span>

      <p className="font-mono text-xs md:text-sm text-muted-foreground mb-10 tracking-[0.3em] uppercase">
        Issue №01 — Frontend Developer
      </p>

      <h1 className="font-serif italic text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight mb-8 max-w-5xl">
        {personal.name}
      </h1>

      <p className="font-serif text-2xl md:text-3xl mb-10 flex items-baseline gap-3">
        <span className="text-muted-foreground not-italic font-mono text-base">
          role:
        </span>
        <TypewriterRole />
      </p>

      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl rule pt-6">
        {personal.bio.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < personal.bio.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-3 text-muted-foreground">
        <div className="w-px h-12 bg-border" />
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
