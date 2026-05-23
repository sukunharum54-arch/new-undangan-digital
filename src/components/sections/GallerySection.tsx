import { ChevronLeft, ChevronRight } from "lucide-react";
import bgEvent from "@/assets/bg-event.jpg";
import heroCouple from "@/assets/hero-couple.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { Section } from "../section";
import { Divider } from "../ornaments";

interface GallerySectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  galleryIdx: number;
  onPrev: () => void;
  onNext: () => void;
}

const galleryPhotos = [heroCouple, gallery1, gallery2, gallery3, heroCouple, gallery2];

export function GallerySection({ sectionRef, galleryIdx, onPrev, onNext }: GallerySectionProps) {
  return (
    <Section
      bg={bgEvent}
      sectionRef={sectionRef}
      label="Gallery"
      overlay="bg-black/80"
    >
      <div className="flex flex-col items-center text-center min-h-screen px-6 py-20">
        <h2 data-reveal="fade-up" data-reveal-delay="0" className="text-3xl sm:text-5xl font-display text-gradient-gold tracking-[0.3em]">
          KENANGAN
        </h2>
        <p data-reveal="fade-up" data-reveal-delay="200" className="mt-3 text-2xl sm:text-3xl font-script text-gold-soft">
          Dalam Perjalanan Cinta
        </p>
        <Divider data-reveal="curtain" data-reveal-delay="350" className="mt-4" />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl w-full">
          <img src={galleryPhotos[0]} alt="" data-reveal="fade-scale" data-reveal-delay="500" className="aspect-[3/4] object-cover rounded border border-gold/30" />
          <img
            src={galleryPhotos[galleryIdx]}
            alt=""
            data-reveal="zoom-pan" data-reveal-delay="600"
            className="col-span-2 row-span-2 aspect-square object-cover rounded border border-gold/50 shadow-[0_20px_60px_-20px_oklch(0.78_0.12_75/0.5)]"
          />
          <img src={galleryPhotos[2]} alt="" data-reveal="fade-scale" data-reveal-delay="700" className="aspect-[3/4] object-cover rounded border border-gold/30" />
          <img src={galleryPhotos[3]} alt="" data-reveal="fade-scale" data-reveal-delay="800" className="aspect-[3/4] object-cover rounded border border-gold/30" />
          <img src={galleryPhotos[4]} alt="" data-reveal="fade-scale" data-reveal-delay="900" className="aspect-[3/4] object-cover rounded border border-gold/30" />
        </div>

        <div className="mt-8 flex items-center gap-4 text-gold">
          <button
            onClick={onPrev}
            className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center hover:bg-gold/15"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-display tracking-[0.3em]">
            {String(galleryIdx + 1).padStart(2, "0")} -{" "}
            {String(galleryPhotos.length).padStart(2, "0")}
          </span>
          <button
            onClick={onNext}
            className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center hover:bg-gold/15"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
