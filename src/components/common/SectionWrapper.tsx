interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      className={`px-6 md:pr-20 max-w-6xl mx-auto w-full min-h-[50dvh] py-20 ${className}`}
    >
      {children}
    </section>
  );
}
