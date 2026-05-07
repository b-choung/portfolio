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
    <SectionWrapper>
      <SectionHeader label="Experience" title="경력" />
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
