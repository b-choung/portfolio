"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [tab, setTab] = useState("all");

  const filtered =
    tab === "all" ? projects : projects.filter((p) => p.category === tab);

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <TabsList className="mb-8 p-0 h-auto bg-transparent border-b border-border rounded-none gap-6">
        <TabsTrigger
          value="all"
          className="rounded-none border-0 border-b-2 border-transparent px-0 py-2 font-serif italic text-base data-active:bg-transparent data-active:border-primary data-active:text-primary shadow-none"
        >
          전체
        </TabsTrigger>
        <TabsTrigger
          value="company"
          className="rounded-none border-0 border-b-2 border-transparent px-0 py-2 font-serif italic text-base data-active:bg-transparent data-active:border-primary data-active:text-primary shadow-none"
        >
          회사
        </TabsTrigger>
        <TabsTrigger
          value="personal"
          className="rounded-none border-0 border-b-2 border-transparent px-0 py-2 font-serif italic text-base data-active:bg-transparent data-active:border-primary data-active:text-primary shadow-none"
        >
          개인
        </TabsTrigger>
      </TabsList>

      <TabsContent value={tab} className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
