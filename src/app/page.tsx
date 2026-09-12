import HeroSection from "@/components/home/hero/HeroSection";
import SkillsSection from "@/components/home/skills/SkillsSection";
import ExperienceSection from "@/components/home/experience/ExperienceSection";
import ProjectList from "@/components/projects/ProjectList";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import EducationSection from "@/components/home/education/EducationSection";
import ContactSection from "@/components/home/contact/ContactSection";
import Reveal from "@/components/common/Reveal";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { educations } from "@/data/education";

export default function Home() {
  return (
    <main className="flex-1">
      <div id="hero">
        <HeroSection />
      </div>

      <div id="skills">
        <Reveal>
          <SkillsSection skillCategories={skillCategories} />
        </Reveal>
      </div>

      <div id="experience">
        <Reveal>
          <ExperienceSection experiences={experiences} />
        </Reveal>
      </div>

      <div id="projects">
        <Reveal>
          <SectionWrapper tone="sky">
            <SectionHeader
              index="04"
              label="Work"
              title="프로젝트"
              description="회사와 개인으로 진행한 프로젝트들을 소개합니다."
              tone="sky"
            />
            <ProjectList projects={projects} />
          </SectionWrapper>
        </Reveal>
      </div>

      <div id="education">
        <Reveal>
          <EducationSection educations={educations} />
        </Reveal>
      </div>

      <div id="contact">
        <Reveal>
          <ContactSection />
        </Reveal>
      </div>
    </main>
  );
}
