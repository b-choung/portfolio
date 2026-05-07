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
    <SectionWrapper>
      <SectionHeader label="Education" title="학력 및 교육" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {educations.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
