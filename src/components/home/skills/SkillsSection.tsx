import { SkillCategory } from "@/types/skill";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import SkillGroup from "./SkillGroup";

export default function SkillsSection({
  skillCategories,
}: {
  skillCategories: SkillCategory[];
}) {
  return (
    <SectionWrapper tone="mint">
      <SectionHeader index="02" label="Skills" title="기술 스택" tone="mint" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr_2fr] gap-5">
        {skillCategories.map((category) => (
          <SkillGroup key={category.id} category={category} />
        ))}
      </div>
    </SectionWrapper>
  );
}
