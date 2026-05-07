import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground font-mono mb-1">
            {project.period}
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-2 shrink-0 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
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
              className="text-muted-foreground hover:text-foreground transition-colors"
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
            className="text-xs bg-white/8 text-foreground/80 hover:bg-white/12"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
