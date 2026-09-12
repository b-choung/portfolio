import { Experience } from "@/types/experience";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <SectionWrapper tone="peach">
      <SectionHeader index="03" label="Experience" title="경력" tone="peach" />
      <div className="max-w-3xl">
        {experiences.map((item, i) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
