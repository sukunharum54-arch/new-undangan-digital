import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { CoverSection } from "@/components/sections/CoverSection";
import { GununganSection } from "@/components/sections/GununganSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { EventSection } from "@/components/sections/EventSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { FloatingNav } from "@/components/FloatingNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aruna & Sasmita — The Wedding" },
      { name: "description", content: "Undangan pernikahan Aruna & Sasmita — 20 Desember 2025, Yogyakarta." },
      { property: "og:title", content: "The Wedding of Aruna & Sasmita" },
      { property: "og:description", content: "20 - 12 - 2025 — Yogyakarta. #ArunaSasmitaInHarmony" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const [opened, setOpened] = useState(true);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    cover: useRef<HTMLElement>(null),
    gunungan: useRef<HTMLElement>(null),
    hero: useRef<HTMLElement>(null),
    philosophy: useRef<HTMLElement>(null),
    event: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
    closing: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    if (opened && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [opened]);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <CoverSection
        sectionRef={sectionRefs.cover}
        opened={opened}
        onOpen={() => setOpened(true)}
      />

      <div ref={contentRef}>
        <GununganSection sectionRef={sectionRefs.gunungan} />

        <HeroSection
          sectionRef={sectionRefs.hero}
          onScrollToPhilosophy={() =>
            sectionRefs.philosophy.current?.scrollIntoView({ behavior: "smooth" })
          }
        />

        <PhilosophySection sectionRef={sectionRefs.philosophy} />

        <EventSection sectionRef={sectionRefs.event} />

        <GallerySection
          sectionRef={sectionRefs.gallery}
          galleryIdx={galleryIdx}
          onPrev={() => setGalleryIdx((i) => (i - 1 + 6) % 6)}
          onNext={() => setGalleryIdx((i) => (i + 1) % 6)}
        />

        <ClosingSection sectionRef={sectionRefs.closing} />
      </div>

      <FloatingNav sectionRefs={sectionRefs} />
    </main>
  );
}
