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
      <TabsList className="glass mb-8 p-1 h-auto bg-transparent border border-white/10">
        <TabsTrigger
          value="all"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-5 py-2 font-mono"
        >
          전체
        </TabsTrigger>
        <TabsTrigger
          value="company"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-5 py-2 font-mono"
        >
          회사
        </TabsTrigger>
        <TabsTrigger
          value="personal"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-5 py-2 font-mono"
        >
          개인
        </TabsTrigger>
      </TabsList>

      <TabsContent value={tab} className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
