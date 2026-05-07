interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-mono text-muted-foreground mb-3 tracking-widest uppercase">
        {label}
      </p>
      <h2 className="text-3xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground mt-2 text-base">{description}</p>
      )}
    </div>
  );
}
