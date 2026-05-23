import { ChevronDown } from "lucide-react";
import bgCover from "@/assets/bg-opening.jpg";
import bgCoverPortrait from "@/assets/bg-opening-portrait.jpg";
import cornerOrnament from "@/assets/corner-ornament.png";
import foliageCorner from "@/assets/foliage-corner.png";
import { Divider, GoldenParticles } from "../ornaments";

interface CoverSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  opened: boolean;
  onOpen: () => void;
}

export function CoverSection({ sectionRef, opened, onOpen }: CoverSectionProps) {
  return (
    <section
      ref={sectionRef}
      aria-label="Cover"
      className="relative w-full h-screen overflow-hidden bg-background"
    >
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${bgCoverPortrait})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden sm:block"
        style={{ backgroundImage: `url(${bgCover})` }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_transparent_0%,_rgba(0,0,0,0.15)_60%,_rgba(0,0,0,0.5)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/75" />

      <img src={foliageCorner} alt="" aria-hidden className="cover-corner-top sway absolute top-0 right-0 w-[28%] sm:w-[22%] h-auto pointer-events-none select-none origin-top-right" />
      <img src={cornerOrnament} alt="" aria-hidden className="cover-corner-bottom cover-corner-bottom-left absolute w-[24%] sm:w-[20%] h-auto pointer-events-none select-none -scale-y-100" />
      <img src={cornerOrnament} alt="" aria-hidden className="cover-corner-bottom cover-corner-bottom-right absolute w-[24%] sm:w-[20%] h-auto pointer-events-none select-none -scale-x-100 -scale-y-100" />

      <GoldenParticles count={24} />

      <div className="relative z-10 flex flex-col items-center text-center h-full px-6 pt-10 sm:pt-16 pb-6">
        <div className="flex-1 min-h-[38vh] sm:min-h-[28vh]" />

        <p className="text-[11px] sm:text-xs tracking-[0.55em] font-display text-gold-soft uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          The Wedding Of
        </p>
        <h1 className="mt-5 text-[46px] sm:text-7xl font-display text-gradient-gold leading-[0.95] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          ARUNA
        </h1>
        <span className="my-1 text-3xl sm:text-4xl font-script text-gold-soft drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">&amp;</span>
        <h1 className="text-[46px] sm:text-7xl font-display text-gradient-gold leading-[0.95] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          SASMITA
        </h1>

        <Divider className="mt-7" />

        <p className="mt-5 text-sm sm:text-lg tracking-[0.4em] text-gold-soft font-display">
          20 - 12 - 2025
        </p>
        <p className="mt-2 text-[10px] sm:text-xs tracking-[0.15em] text-gold/80 italic font-serif">
          #ArunaSasmitaInHarmony
        </p>

        {!opened && (
          <button
            onClick={onOpen}
            className="relative mt-7 px-10 py-3 rounded-md text-gold-soft tracking-[0.32em] text-[11px] font-display uppercase hover:bg-gold/10 transition-all backdrop-blur-sm border border-gold/60"
          >
            Buka Undangan
          </button>
        )}

        <ChevronDown className="mt-6 w-5 h-5 text-gold animate-bounce" />
      </div>
    </section>
  );
}
