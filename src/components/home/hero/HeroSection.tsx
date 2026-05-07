import TypewriterRole from "./TypewriterRole";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center min-h-dvh px-8 md:px-20">
      {/* Terminal file label */}
      <p className="font-mono text-sm text-muted-foreground mb-10 tracking-widest">
        $ portfolio.tsx
      </p>

      {/* Name */}
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6">
        <span className="gradient-text">홍길동</span>
      </h1>

      {/* Typewriter role */}
      <p className="font-mono text-xl md:text-2xl mb-8 flex items-center gap-2">
        <span className="text-muted-foreground">&gt;</span>
        <TypewriterRole />
      </p>

      {/* Bio */}
      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
        사용자 경험을 중심으로 생각하는<br />
        프론트엔드 개발자입니다.
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-8 md:left-20 flex items-center gap-3 text-muted-foreground">
        <div className="w-px h-12 bg-border" />
        <span className="text-xs font-mono tracking-widest rotate-0">scroll</span>
      </div>
    </section>
  );
}
