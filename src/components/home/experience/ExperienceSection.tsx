import { Experience } from "@/types/experience";
import { Badge } from "@/components/ui/badge";

function ExperienceItem({
  item,
  isLast,
}: {
  item: Experience;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-6">
      {/* Timeline axis */}
      <div className="flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full border-2 border-primary mt-1 shrink-0"
          style={item.current ? { background: "var(--color-primary)" } : {}}
        />
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      {/* Content */}
      <div className={`glass rounded-xl p-6 flex-1 ${isLast ? "" : "mb-6"}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
          <div>
            <h3 className="font-semibold text-foreground">{item.company}</h3>
            <p className="text-sm text-primary font-mono">{item.role}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {item.current && (
              <span className="text-xs font-mono text-primary-foreground bg-primary px-2 py-0.5 rounded-full">
                재직 중
              </span>
            )}
            <span className="text-xs font-mono text-muted-foreground">
              {item.period}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {item.description}
        </p>

        {item.techStack && (
          <div className="flex flex-wrap gap-2">
            {item.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-white/5 text-foreground/70"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto w-full">
      <div className="mb-10">
        <p className="text-sm font-mono text-muted-foreground mb-3 tracking-widest uppercase">
          Experience
        </p>
        <h2 className="text-3xl font-bold">
          <span className="gradient-text">경력</span>
        </h2>
      </div>

      <div className="max-w-3xl">
        {experiences.map((item, i) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
