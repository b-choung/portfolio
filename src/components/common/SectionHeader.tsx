interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  index,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 rule-b pb-6 flex items-end justify-between gap-6 flex-wrap">
      <div>
        <p className="text-sm font-mono text-primary mb-3 tracking-[0.3em] uppercase">
          {label}
        </p>
        <h2 className="font-serif italic text-4xl md:text-5xl leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground mt-3 text-base max-w-md">
            {description}
          </p>
        )}
      </div>
      <span className="font-serif italic text-6xl md:text-7xl text-muted-foreground/30 leading-none shrink-0">
        {index}
      </span>
    </div>
  );
}
