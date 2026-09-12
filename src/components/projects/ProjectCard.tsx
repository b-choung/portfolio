import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ViewTransitionLink from "@/components/common/ViewTransitionLink";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group surface surface-hover rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="badge-pill mb-2">{String(index).padStart(2, "0")}</span>
          <h3
            className="font-display font-semibold text-xl text-foreground"
            style={{ viewTransitionName: `project-title-${project.id}` } as React.CSSProperties}
          >
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground font-mono mt-1 tracking-widest">
            {project.period}
          </p>
        </div>
        <div className="flex gap-2 shrink-0 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="배포 링크"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="text-xs bg-white/8 text-foreground/80 hover:bg-white/12 rounded-full"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <ViewTransitionLink
        href={`/projects/${project.id}`}
        className="ink-underline text-xs font-mono text-primary self-start tracking-widest uppercase"
      >
        자세히 보기
      </ViewTransitionLink>
    </div>
  );
}
