type Tone = "violet" | "mint" | "peach" | "sky" | "rose" | "lavender";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  tone?: Tone;
}

export default function SectionHeader({
  index,
  label,
  title,
  description,
  tone = "violet",
}: SectionHeaderProps) {
  return (
    <div className={`tone-${tone} mb-12 flex items-end justify-between gap-6 flex-wrap`}>
      <div>
        <span className="badge-pill mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-(--tone)" />
          {label}
        </span>
        <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground mt-3 text-base max-w-md">
            {description}
          </p>
        )}
      </div>
      <span className="font-mono text-xs text-muted-foreground tracking-widest shrink-0 pb-2">
        {index} / 06
      </span>
    </div>
  );
}
