import { Education } from "@/types/education";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import EducationItem from "./EducationItem";

export default function EducationSection({
  educations,
}: {
  educations: Education[];
}) {
  return (
    <SectionWrapper tone="rose">
      <SectionHeader index="05" label="Education" title="학력 및 교육" tone="rose" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {educations.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
