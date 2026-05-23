import { MapPin } from "lucide-react";
import bgEvent from "@/assets/bg-event.jpg";
import { Section } from "../section";
import { Divider, Gunungan, Lotus } from "../ornaments";

interface EventSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const RingIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10 text-gold" fill="none" stroke="currentColor" strokeWidth="0.9">
    <circle cx="15" cy="20" r="8" />
    <circle cx="25" cy="20" r="8" />
  </svg>
);

const events = [
  {
    icon: <RingIcon />,
    title: "AKAD NIKAH",
    date: "Sabtu, 20 Desember 2025",
    time: "08.00 - 10.00 WIB",
  },
  {
    icon: <Gunungan size={40} />,
    title: "RESEPSI",
    date: "Sabtu, 20 Desember 2025",
    time: "11.00 - 14.00 WIB",
  },
  {
    icon: <Lotus className="w-10 h-10 text-gold" />,
    title: "NGUNDUH MANTU",
    date: "Minggu, 21 Desember 2025",
    time: "10.00 - 13.00 WIB",
  },
];

export function EventSection({ sectionRef }: EventSectionProps) {
  return (
    <Section
      bg={bgEvent}
      sectionRef={sectionRef}
      label="Event"
      overlay="bg-black/75"
    >
      <div className="flex flex-col items-center text-center min-h-screen px-6 py-20">
        <Divider data-reveal="curtain" data-reveal-delay="0" />
        <h2 data-reveal="fade-up" data-reveal-delay="200" className="mt-6 text-3xl sm:text-4xl font-display text-gradient-gold tracking-[0.3em]">
          WAKTU &amp; TEMPAT
        </h2>
        <Divider data-reveal="curtain" data-reveal-delay="350" className="mt-4" />

        <div className="mt-12 grid md:grid-cols-3 gap-6 w-full max-w-5xl">
          {events.map((e, i) => (
            <div
              key={e.title}
              data-reveal="fade-scale" data-reveal-delay={String(500 + i * 200)}
              className="relative rounded-md border border-gold/40 bg-black/40 backdrop-blur-sm p-8 shadow-[0_10px_40px_-15px_oklch(0.78_0.12_75/0.3)]"
            >
              <div className="flex justify-center">{e.icon}</div>
              <h3 className="mt-4 text-lg font-display text-gradient-gold tracking-[0.25em]">
                {e.title}
              </h3>
              <Divider className="my-4 scale-75" />
              <p className="text-sm font-serif text-foreground/85">{e.date}</p>
              <p className="mt-1 text-sm font-display text-gold-soft tracking-wider">
                {e.time}
              </p>
              <p className="mt-4 text-xs font-serif italic text-foreground/70 leading-relaxed">
                Pendopo Agung
                <br />
                Royal Ambarrukmo
                <br />
                Yogyakarta
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://maps.google.com/?q=Royal+Ambarrukmo+Yogyakarta"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gold text-gold-soft tracking-[0.25em] text-xs font-display uppercase hover:bg-gold/15 transition-all"
        >
          Lihat Lokasi
          <MapPin className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}
