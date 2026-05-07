import HeroSection from "@/components/home/hero/HeroSection";
import SkillsSection from "@/components/home/skills/SkillsSection";
import ExperienceSection from "@/components/home/experience/ExperienceSection";
import ProjectList from "@/components/projects/ProjectList";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import EducationSection from "@/components/home/education/EducationSection";
import ContactSection from "@/components/home/contact/ContactSection";
import ScrollNav from "@/components/common/ScrollNav";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { educations } from "@/data/education";

export default function Home() {
  return (
    <main className="flex-1">
      <ScrollNav />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="skills">
        <SkillsSection skillCategories={skillCategories} />
      </div>

      <div id="experience">
        <ExperienceSection experiences={experiences} />
      </div>

      <div id="projects">
        <SectionWrapper>
          <SectionHeader
            label="Works"
            title="프로젝트"
            description="회사와 개인으로 진행한 프로젝트들을 소개합니다."
          />
          <ProjectList projects={projects} />
        </SectionWrapper>
      </div>

      <div id="education">
        <EducationSection educations={educations} />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
