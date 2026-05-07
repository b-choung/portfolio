export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-dvh px-6 text-center">
      <div className="glass-strong rounded-xl px-12 py-16 max-w-2xl w-full text-left font-mono">
        <p className="text-muted-foreground text-sm mb-6 tracking-widest">
          // portfolio.ts
        </p>

        <div className="space-y-3 mb-8">
          <p className="text-muted-foreground">
            <span className="text-primary">const</span>{" "}
            <span className="text-foreground">name</span>{" "}
            <span className="text-primary">=</span>{" "}
            <span className="gradient-text font-bold text-xl">&quot;홍길동&quot;</span>
          </p>
          <p className="text-muted-foreground">
            <span className="text-primary">const</span>{" "}
            <span className="text-foreground">role</span>{" "}
            <span className="text-primary">=</span>{" "}
            <span className="text-accent">&quot;Frontend Developer&quot;</span>
          </p>
          <p className="text-muted-foreground">
            <span className="text-primary">const</span>{" "}
            <span className="text-foreground">bio</span>{" "}
            <span className="text-primary">=</span>{" "}
            <span className="text-accent/80">
              &quot;사용자 경험을 중심으로 생각합니다.&quot;
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span className="text-primary">$</span>
          <span className="border-r-2 border-primary animate-pulse">&nbsp;</span>
        </div>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
