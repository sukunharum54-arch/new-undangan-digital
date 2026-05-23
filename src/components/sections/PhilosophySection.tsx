import bgPhilosophy from "@/assets/bg-philosophy.jpg";
import { Section } from "../section";
import { Divider, Lotus, HeartFloral, Leaf } from "../ornaments";

interface PhilosophySectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const pillars = [
  { Icon: Lotus, title: "Restu", desc: "Doa dan ridha keluarga" },
  { Icon: Lotus, title: "Sakinah", desc: "Ketenangan dalam kebersamaan" },
  { Icon: HeartFloral, title: "Mawaddah", desc: "Cinta yang tumbuh tiada henti" },
  { Icon: Leaf, title: "Rahmah", desc: "Kasih yang memberi keberkahan" },
];

export function PhilosophySection({ sectionRef }: PhilosophySectionProps) {
  return (
    <Section
      bg={bgPhilosophy}
      sectionRef={sectionRef}
      label="Philosophy"
      overlay="bg-black/65"
    >
      <div className="flex flex-col items-center text-center min-h-screen px-6 py-20">
        <Lotus className="w-10 h-10 text-gold" />
        <p className="mt-4 text-xs tracking-[0.5em] font-display text-gold-soft uppercase">
          Makna Cinta
        </p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-display text-gradient-gold">
          Dalam Restu
        </h2>
        <h2 className="text-4xl sm:text-5xl font-display text-gradient-gold">
          dan Harmoni
        </h2>
        <Divider className="mt-6" />
        <p className="mt-6 max-w-xl text-base italic font-serif text-foreground/85 leading-relaxed">
          Cinta bukan sekadar pertemuan,
          <br />
          tapi persembahan jiwa untuk tumbuh bersama,
          <br />
          dalam doa, dalam restu,
          <br />
          menuju kehidupan yang sakinah, mawaddah, wa rahmah.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full">
          {pillars.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <Icon className="w-10 h-10 text-gold" />
              <h3 className="mt-4 text-xl font-display text-gold-soft">{title}</h3>
              <p className="mt-2 text-xs font-serif italic text-foreground/70 leading-snug">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
