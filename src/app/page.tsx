import HeroSection from "@/components/home/hero/HeroSection";
import SkillsSection from "@/components/home/skills/SkillsSection";
import ExperienceSection from "@/components/home/experience/ExperienceSection";
import ProjectList from "@/components/projects/ProjectList";
import EducationSection from "@/components/home/education/EducationSection";
import ContactSection from "@/components/home/contact/ContactSection";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { educations } from "@/data/education";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative">
        <HeroSection />
      </div>

      <SkillsSection skillCategories={skillCategories} />

      <ExperienceSection experiences={experiences} />

      <section className="min-h-dvh px-6 py-20 max-w-6xl mx-auto w-full">
        <div className="mb-10">
          <p className="text-sm font-mono text-muted-foreground mb-3 tracking-widest uppercase">
            Works
          </p>
          <h2 className="text-3xl font-bold">
            <span className="gradient-text">프로젝트</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-base">
            회사와 개인으로 진행한 프로젝트들을 소개합니다.
          </p>
        </div>
        <ProjectList projects={projects} />
      </section>

      <EducationSection educations={educations} />
      <ContactSection />
    </main>
  );
}
