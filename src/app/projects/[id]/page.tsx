import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return { title: project ? `${project.title} | Portfolio` : "Not Found" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const categoryLabel = project.category === "company" ? "회사" : "개인";

  return (
    <main className="flex-1 px-6 py-20 max-w-4xl mx-auto w-full">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-10"
      >
        <FiArrowLeft size={14} />
        돌아가기
      </Link>

      {/* Header */}
      <div className="glass-strong rounded-xl p-8 mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-muted-foreground">
                {project.period}
              </span>
              <Badge
                variant="secondary"
                className="text-xs bg-primary/10 text-primary border-primary/20"
              >
                {categoryLabel}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold gradient-text">{project.title}</h1>
          </div>
          <div className="flex gap-3 shrink-0 pt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
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
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="glass rounded-xl p-8 mb-6">
        <p className="text-xs font-mono text-primary mb-4 tracking-widest">
          &gt; overview
        </p>
        <p className="text-foreground/90 leading-relaxed">
          {project.longDescription ?? project.description}
        </p>
      </div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="glass rounded-xl p-8 mb-6">
          <p className="text-xs font-mono text-primary mb-4 tracking-widest">
            &gt; highlights
          </p>
          <ul className="space-y-3">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/90">
                <span className="text-primary font-mono shrink-0">─</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="glass rounded-xl p-8">
        <p className="text-xs font-mono text-primary mb-4 tracking-widest">
          &gt; tech_stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-sm bg-white/8 text-foreground/80 hover:bg-white/12"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </main>
  );
}
