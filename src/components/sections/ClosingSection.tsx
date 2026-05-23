import { Instagram, Music, Youtube } from "lucide-react";
import bgClosing from "@/assets/bg-closing.jpg";
import { Section } from "../section";
import { Divider, Lotus } from "../ornaments";

interface ClosingSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const socialLinks = [
  { Icon: Instagram, href: "#" },
  { Icon: Music, href: "#" },
  { Icon: Youtube, href: "#" },
];

export function ClosingSection({ sectionRef }: ClosingSectionProps) {
  return (
    <Section
      bg={bgClosing}
      sectionRef={sectionRef}
      label="Closing"
      overlay="bg-black/65"
    >
      <div className="flex flex-col items-center text-center min-h-screen px-6 py-20">
        <Lotus className="w-10 h-10 text-gold" />
        <p className="mt-4 text-xs tracking-[0.5em] font-display text-gold-soft uppercase">
          Terima Kasih
        </p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-display text-gradient-gold">
          Atas Doa &amp; Restu
        </h2>
        <h2 className="text-4xl sm:text-5xl font-display text-gradient-gold">
          yang Diberikan
        </h2>
        <Divider className="mt-6" />
        <p className="mt-6 max-w-xl text-base italic font-serif text-foreground/85 leading-relaxed">
          Merupakan kebahagiaan bagi kami
          <br />
          apabila Bapak/Ibu/Saudara/i berkenan hadir
          <br />
          dan memberikan doa restu.
          <br />
          Kami yang berbahagia,
        </p>
        <p className="mt-6 text-3xl sm:text-4xl font-script text-gradient-gold">
          Aruna &amp; Sasmita
        </p>

        <div className="mt-10 flex items-center gap-4">
          {socialLinks.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-11 h-11 rounded-full border border-gold/50 flex items-center justify-center text-gold-soft hover:bg-gold/15 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
