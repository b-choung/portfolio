import TypewriterRole from "./TypewriterRole";
import KineticText from "@/components/common/KineticText";
import GlowBlob from "@/components/common/GlowBlob";
import { personal } from "@/data/personal";

export default function HeroSection() {
  return (
    <section className="tone-violet relative flex flex-col justify-center min-h-dvh px-6 md:px-20 overflow-hidden">
      <GlowBlob tone="violet" size={520} className="-top-40 -left-40 opacity-80" />
      <GlowBlob tone="sky" size={420} className="bottom-0 right-0 opacity-60" />

      <span className="badge-pill mb-8 w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-(--tone)" />
        Frontend Developer
      </span>

      <KineticText
        as="h1"
        className="font-display font-bold text-6xl md:text-8xl lg:text-[8rem] leading-[0.95] tracking-tight mb-6 max-w-4xl"
      >
        {personal.name}
      </KineticText>

      <p className="font-display text-2xl md:text-3xl mb-8 text-muted-foreground">
        <TypewriterRole />
      </p>

      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mb-10">
        {personal.bio.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < personal.bio.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className="flex items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center rounded-full bg-primary text-primary-foreground text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
        >
          프로젝트 보기
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center rounded-full border border-border text-sm font-medium px-6 py-3 hover:border-primary/50 hover:text-primary transition-colors"
        >
          이메일 보내기
        </a>
      </div>
    </section>
  );
}
