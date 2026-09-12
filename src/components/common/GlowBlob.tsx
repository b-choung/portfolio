type Tone = "violet" | "mint" | "peach" | "sky" | "rose" | "lavender";

interface GlowBlobProps {
  tone: Tone;
  className?: string;
  size?: number;
}

export default function GlowBlob({ tone, className = "", size = 420 }: GlowBlobProps) {
  return (
    <div
      className={`glow-blob tone-${tone} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}
