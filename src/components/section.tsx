import { CornerOrnament } from "./ornaments";

interface SectionProps {
  bg: string;
  sectionRef?: React.RefObject<HTMLElement | null>;
  label?: string;
  children: React.ReactNode;
  minH?: string;
  overlay?: string;
}

export function Section({
  bg,
  sectionRef,
  label,
  children,
  minH = "min-h-screen",
  overlay = "bg-black/55",
}: SectionProps) {
  return (
    <section
      ref={sectionRef}
      aria-label={label}
      className={`relative w-full ${minH}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0 ${overlay}`} />
      <CornerOrnament className="absolute top-0 right-0 w-28 h-28 opacity-70 origin-top-right" flip />
      <CornerOrnament className="absolute bottom-0 left-0 w-28 h-28 opacity-70 scale-y-[-1] origin-bottom-left" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </section>
  );
}
