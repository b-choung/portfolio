import TypewriterRole from "./TypewriterRole";
import { personal } from "@/data/personal";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center min-h-dvh px-8 md:px-20">
      <p className="font-mono text-sm text-muted-foreground mb-10 tracking-widest">
        $ portfolio.tsx
      </p>

      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6">
        <span className="gradient-text">{personal.name}</span>
      </h1>

      <p className="font-mono text-xl md:text-2xl mb-8 flex items-center gap-2">
        <span className="text-muted-foreground">&gt;</span>
        <TypewriterRole />
      </p>

      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
        {personal.bio.split("\n").map((line, i) => (
          <span key={i}>{line}{i < personal.bio.split("\n").length - 1 && <br />}</span>
        ))}
      </p>

      <div className="absolute bottom-10 left-8 md:left-20 flex items-center gap-3 text-muted-foreground">
        <div className="w-px h-12 bg-border" />
        <span className="text-xs font-mono tracking-widest">scroll</span>
      </div>
    </section>
  );
}
