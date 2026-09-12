import Link from "next/link";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group paper rounded-sm p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors relative overflow-hidden">
      <span className="index-num absolute -top-4 -right-2 text-7xl leading-none pointer-events-none select-none">
        {String(index).padStart(2, "0")}
      </span>

      <div className="flex items-start justify-between gap-3 relative">
        <div>
          <p className="text-xs text-muted-foreground font-mono mb-1 tracking-widest">
            {project.period}
          </p>
          <h3 className="font-serif italic text-xl text-foreground">
            {project.title}
          </h3>
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

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 relative">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 relative">
        {project.techStack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="text-xs bg-white/8 text-foreground/80 hover:bg-white/12 rounded-none"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="ink-underline text-xs font-mono text-primary self-start relative tracking-widest uppercase"
      >
        자세히 보기
      </Link>
    </div>
  );
}
