import GlowBlob from "@/components/common/GlowBlob";

type Tone = "violet" | "mint" | "peach" | "sky" | "rose" | "lavender";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
}

export default function SectionWrapper({
  children,
  className = "",
  tone,
}: SectionWrapperProps) {
  return (
    <section className={`relative overflow-hidden ${tone ? `tone-${tone}` : ""}`}>
      {tone && <GlowBlob tone={tone} className="-top-32 -right-32 opacity-70" />}
      <div
        className={`relative px-6 md:pr-20 max-w-6xl mx-auto w-full min-h-[50dvh] py-20 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
