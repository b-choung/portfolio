import { SkillCategory } from "@/types/skill";

function SkillGroup({ category }: { category: SkillCategory }) {
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

export default function SkillsSection({
  skillCategories,
}: {
  skillCategories: SkillCategory[];
}) {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto w-full">
      <div className="mb-10">
        <p className="text-sm font-mono text-muted-foreground mb-3 tracking-widest uppercase">
          Skills
        </p>
        <h2 className="text-3xl font-bold">
          <span className="gradient-text">기술 스택</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillCategories.map((category) => (
          <SkillGroup key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
