import { ChevronDown } from "lucide-react";
import bgGunungan from "@/assets/bg-gunungan-landscape.jpg";
import bgGununganPortrait from "@/assets/bg-gunungan-portrait.jpg";
import { Divider } from "../ornaments";

interface GununganSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

function GununganParticles() {
  return (
    <div className="particles" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => {
        const left = (i * 5.5) % 100;
        const delay = (i % 6) * 1.5;
        const dur = 10 + (i % 5) * 1.8;
        const size = 2 + (i % 3) * 2;
        return (
          <span
            key={i}
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function GununganSection({ sectionRef }: GununganSectionProps) {
  return (
    <section
      ref={sectionRef}
      aria-label="Gunungan"
      className="relative w-full h-screen bg-background -mt-px"
    >
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${bgGununganPortrait})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${bgGunungan})` }}
      />

      <div className="absolute inset-x-0 top-0 h-[22vh] bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,_transparent_0%,_rgba(0,0,0,0.25)_55%,_rgba(0,0,0,0.7)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />

      <GununganParticles />

      <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pt-10 sm:pt-16 pb-10 sm:pb-14">
        <p data-reveal="zoom-pan" data-reveal-delay="0" className="text-base sm:text-xl italic font-serif text-gold-soft max-w-md leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          Sebuah perjalanan suci
          <br />
          menuju ikatan yang diridhai
        </p>
        <Divider data-reveal="curtain" data-reveal-delay="300" className="mt-7" />
        <ChevronDown className="mt-6 w-5 h-5 text-gold animate-bounce" />
      </div>
    </section>
  );
}
