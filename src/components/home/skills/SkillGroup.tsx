import { SkillCategory } from "@/types/skill";

export default function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <div className="glass rounded-xl p-6">
      <p className="text-xs font-mono text-primary mb-4 tracking-widest">
        &gt; {category.label.toLowerCase()}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg text-sm font-mono text-foreground/80 bg-white/5 border border-border hover:border-primary/30 hover:text-primary transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
