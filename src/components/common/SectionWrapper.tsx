interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  py?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  py = "py-20",
}: SectionWrapperProps) {
  return (
    <section
      className={`pl-6 pr-20 max-w-6xl mx-auto w-full min-h-[50dvh] ${py} ${className}`}
    >
      {children}
    </section>
  );
}
