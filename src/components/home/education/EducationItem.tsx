import { Education } from "@/types/education";

const categoryLabel: Record<Education["category"], string> = {
  degree: "학위",
  course: "교육",
  certificate: "자격증",
};

export default function EducationItem({ item }: { item: Education }) {
  return (
    <div className="glass rounded-xl p-6 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-primary">
            [{categoryLabel[item.category]}]
          </span>
          <h3 className="text-base font-semibold text-foreground mt-1">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground">{item.institution}</p>
        </div>
        <span className="text-xs font-mono text-muted-foreground shrink-0 pt-1">
          {item.period}
        </span>
      </div>
      {item.description && (
        <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-3 mt-1">
          {item.description}
        </p>
      )}
    </div>
  );
}
