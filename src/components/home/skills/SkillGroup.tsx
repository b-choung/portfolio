import { SkillCategory } from "@/types/skill";

export default function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <div className="surface surface-hover rounded-2xl p-6">
      <p className="font-display font-semibold text-lg text-primary mb-4">
        {category.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-sm text-foreground/80 border border-border hover:border-primary/50 hover:text-primary transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
