import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import bgCover from "@/assets/bg-opening.jpg";
import bgCoverPortrait from "@/assets/bg-opening-portrait.jpg";
import bgGunungan from "@/assets/bg-gunungan-landscape.jpg";
import bgGununganPortrait from "@/assets/bg-gunungan-portrait.jpg";
import bgHero from "@/assets/bg-hero.jpg";
import bgPhilosophy from "@/assets/bg-philosophy.jpg";
import bgEvent from "@/assets/bg-event.jpg";
import bgClosing from "@/assets/bg-closing.jpg";
import heroCouple from "@/assets/hero-couple.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import navBg from "@/assets/bg-nav.jpg";
import gununganOrnament from "@/assets/gunungan-ornament.png";
import cornerOrnament from "@/assets/corner-ornament.png";
import cornerFiligreeClean from "@/assets/corner-filigree-gold-clean.png";
import foliageCorner from "@/assets/foliage-corner.png";
import {
  Home, Heart, Calendar, Image as ImageIcon, Sparkles, Users, Mail,
  ChevronDown, MapPin, ChevronLeft, ChevronRight, Instagram, Music, Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aruna & Sasmita — The Wedding" },
      { name: "description", content: "Undangan pernikahan Aruna & Sasmita — 20 Desember 2025, Yogyakarta." },
      { property: "og:title", content: "The Wedding of Aruna & Sasmita" },
      { property: "og:description", content: "20 · 12 · 2025 — Yogyakarta. #ArunaSasmitaInHarmony" },
    ],
  }),
  component: Invitation,
});

// --- Reusable ornament pieces (SVG) ---

const Gunungan = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 80 110" width={size} height={size * 1.375} className={className} fill="none">
    <defs>
      <linearGradient id="gunGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f7e2a0" />
        <stop offset="45%" stopColor="#d4b264" />
        <stop offset="100%" stopColor="#8b6a2a" />
      </linearGradient>
    </defs>
    <g stroke="url(#gunGold)" fill="none" strokeWidth="0.9" strokeLinecap="round">
      <path d="M40 2 L58 30 Q70 55 40 106 Q10 55 22 30 Z" strokeWidth="1.4" fill="url(#gunGold)" fillOpacity="0.10" />
      <path d="M40 8 L54 32 Q64 55 40 98 Q16 55 26 32 Z" strokeWidth="0.7" />
      <path d="M40 18 Q44 35 40 70 Q36 35 40 18 Z" fill="url(#gunGold)" fillOpacity="0.3" />
      <path d="M40 22 L40 78" strokeWidth="0.5" />
      <path d="M40 30 Q32 32 28 28 M40 30 Q48 32 52 28" />
      <path d="M40 40 Q30 42 24 38 M40 40 Q50 42 56 38" />
      <path d="M40 50 Q28 52 22 48 M40 50 Q52 52 58 48" />
      <path d="M40 60 Q30 62 26 58 M40 60 Q50 62 54 58" />
      <path d="M40 70 Q34 72 30 68 M40 70 Q46 72 50 68" />
      <circle cx="28" cy="28" r="1.2" fill="url(#gunGold)" />
      <circle cx="52" cy="28" r="1.2" fill="url(#gunGold)" />
      <circle cx="24" cy="38" r="1.2" fill="url(#gunGold)" />
      <circle cx="56" cy="38" r="1.2" fill="url(#gunGold)" />
      <circle cx="22" cy="48" r="1.2" fill="url(#gunGold)" />
      <circle cx="58" cy="48" r="1.2" fill="url(#gunGold)" />
      <path d="M26 86 Q40 92 54 86" />
      <path d="M30 92 Q40 96 50 92" />
      <path d="M40 2 L37 7 L43 7 Z" fill="url(#gunGold)" />
    </g>
  </svg>
);

const CornerOrnament = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 160 160"
    className={className}
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
    fill="none"
  >
    <defs>
      <linearGradient id="cornerGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f7e2a0" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#8b6a2a" stopOpacity="0.45" />
      </linearGradient>
    </defs>
    <g stroke="url(#cornerGold)" strokeWidth="0.9" fill="none" strokeLinecap="round">
      <path d="M0 140 Q40 138 65 115 Q88 92 78 68 Q68 44 90 28 Q112 12 150 12" />
      <path d="M0 156 Q60 154 95 122 Q128 88 116 58 Q104 28 145 22" strokeWidth="0.6" />
      <path d="M14 122 Q34 120 50 102 Q66 84 58 66" strokeWidth="0.6" />
      <path d="M60 90 Q70 80 80 90 Q70 100 60 90 Z" fill="url(#cornerGold)" fillOpacity="0.3" />
      <path d="M42 110 Q50 102 58 110 Q50 118 42 110 Z" fill="url(#cornerGold)" fillOpacity="0.25" />
      <path d="M80 60 Q88 52 96 60 Q88 68 80 60 Z" fill="url(#cornerGold)" fillOpacity="0.25" />
      <path d="M100 38 Q110 28 120 38 Q110 48 100 38 Z" fill="url(#cornerGold)" fillOpacity="0.3" />
      <path d="M122 20 Q132 10 142 20 Q132 30 122 20 Z" fill="url(#cornerGold)" fillOpacity="0.3" />
      <circle cx="70" cy="74" r="1.6" fill="url(#cornerGold)" />
      <circle cx="90" cy="50" r="1.6" fill="url(#cornerGold)" />
      <circle cx="112" cy="28" r="1.6" fill="url(#cornerGold)" />
      <circle cx="36" cy="125" r="1.6" fill="url(#cornerGold)" />
      <path d="M22 132 Q20 122 30 118" strokeWidth="0.5" />
      <path d="M75 100 Q82 95 78 86" strokeWidth="0.5" />
      <path d="M52 78 Q58 72 66 76" strokeWidth="0.5" />
    </g>
  </svg>
);


const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
    <svg viewBox="0 0 24 12" className="w-6 h-3 text-gold">
      <path
        d="M2 6 L8 6 M12 2 L16 6 L12 10 L8 6 L12 2 Z M16 6 L22 6"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
    <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
  </div>
);

// Small icons for philosophy cards
const Lotus = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="0.9">
    <path d="M20 6 Q14 18 20 30 Q26 18 20 6 Z" />
    <path d="M20 14 Q10 20 14 30 Q22 26 20 14 Z" />
    <path d="M20 14 Q30 20 26 30 Q18 26 20 14 Z" />
    <path d="M8 28 Q20 34 32 28" />
  </svg>
);

const HeartFloral = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="0.9">
    <path d="M20 32 Q6 22 10 14 Q14 8 20 14 Q26 8 30 14 Q34 22 20 32 Z" />
    <path d="M20 18 L20 26 M16 22 L24 22" />
  </svg>
);

const Leaf = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="0.9">
    <path d="M20 6 Q8 16 12 30 Q24 28 28 14 Q26 10 20 6 Z" />
    <path d="M14 26 Q20 18 26 12" />
  </svg>
);

// --- Sections ---

function Section({
  bg,
  sectionRef,
  label,
  children,
  minH = "min-h-screen",
  overlay = "bg-black/55",
}: {
  bg: string;
  sectionRef?: React.RefObject<HTMLElement | null>;
  label?: string;
  children: React.ReactNode;
  minH?: string;
  overlay?: string;
}) {
  return (
    <section
      ref={sectionRef}
      aria-label={label}
      className={`relative w-full ${minH} overflow-hidden`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0 ${overlay}`} />
      {/* Gold corner ornaments */}
      <CornerOrnament className="absolute top-0 right-0 w-28 h-28 opacity-70 origin-top-right" flip />
      <CornerOrnament className="absolute bottom-0 left-0 w-28 h-28 opacity-70 scale-y-[-1] origin-bottom-left" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </section>
  );
}

function Invitation() {
  const [opened, setOpened] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const galleryPhotos = [heroCouple, gallery1, gallery2, gallery3, heroCouple, gallery2];

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
      {/* ============ COVER ============ */}
      <section
        ref={sectionRefs.cover}
        aria-label="Cover"
        className="relative w-full h-screen overflow-hidden bg-background"
      >
        {/* Background — portrait on mobile, landscape on desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{ backgroundImage: `url(${bgCoverPortrait})` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center hidden sm:block"
          style={{ backgroundImage: `url(${bgCover})` }}
        />

        {/* Light vignette — keep temple & golden glow clearly visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_transparent_0%,_rgba(0,0,0,0.15)_60%,_rgba(0,0,0,0.5)_100%)]" />
        {/* Soft bottom darken so text reads well */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/75" />

        {/* Ornate gold — top-right melambai (sway), bottom corners filigree menempel */}
        <img src={foliageCorner} alt="" aria-hidden className="cover-corner-top sway absolute top-0 right-0 w-[28%] sm:w-[22%] h-auto pointer-events-none select-none origin-top-right" />
        <img src={cornerOrnament} alt="" aria-hidden className="cover-corner-bottom cover-corner-bottom-left absolute w-[24%] sm:w-[20%] h-auto pointer-events-none select-none -scale-y-100" />
        <img src={cornerOrnament} alt="" aria-hidden className="cover-corner-bottom cover-corner-bottom-right absolute w-[24%] sm:w-[20%] h-auto pointer-events-none select-none -scale-x-100 -scale-y-100" />

        {/* Floating golden light particles — sepoy-sepoy */}
        <div className="particles" aria-hidden>
          {Array.from({ length: 24 }).map((_, i) => {
            const left = (i * 4.3) % 100;
            const delay = (i % 8) * 1.3;
            const dur = 9 + (i % 7) * 1.5;
            const size = 3 + (i % 4) * 2;
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

        <div className="relative z-10 flex flex-col items-center text-center h-full px-6 pt-10 sm:pt-16 pb-6">
          {/* Spacer to push text block down — biarkan candi & langit jadi focal point */}
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
            20 · 12 · 2025
          </p>
          <p className="mt-2 text-[10px] sm:text-xs tracking-[0.15em] text-gold/80 italic font-serif">
            #ArunaSasmitaInHarmony
          </p>

          {!opened && (
            <button
              onClick={() => setOpened(true)}
              className="relative mt-7 px-10 py-3 rounded-md text-gold-soft tracking-[0.32em] text-[11px] font-display uppercase hover:bg-gold/10 transition-all backdrop-blur-sm border border-gold/60"
            >
              Buka Undangan
            </button>
          )}

          <ChevronDown className="mt-6 w-5 h-5 text-gold animate-bounce" />
        </div>
      </section>


      {opened && (
        <div ref={contentRef}>
          {/* ============ GUNUNGAN ============ */}
          <section
            ref={sectionRefs.gunungan}
            aria-label="Gunungan"
            className="relative w-full h-screen overflow-hidden bg-background -mt-px"
          >
            {/* Background — portrait khusus HP, landscape untuk tablet & desktop */}
            <div
              className="absolute inset-0 bg-cover bg-center md:hidden"
              style={{ backgroundImage: `url(${bgGununganPortrait})` }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center hidden md:block"
              style={{ backgroundImage: `url(${bgGunungan})` }}
            />

            {/* Top fade — menyambung gelap dari bawah cover agar transisi mulus */}
            <div className="absolute inset-x-0 top-0 h-[22vh] bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
            {/* Vignette lembut — fokus ke gunungan di tengah */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,_transparent_0%,_rgba(0,0,0,0.25)_55%,_rgba(0,0,0,0.7)_100%)]" />
            {/* Bottom darken agar text terbaca & menyambung ke section berikutnya */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />


            {/* Floating golden particles */}
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

            {/* Text overlay — sejajarkan padding & spacing dengan cover */}
            <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pt-10 sm:pt-16 pb-10 sm:pb-14">
              <p className="text-base sm:text-xl italic font-serif text-gold-soft max-w-md leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                Sebuah perjalanan suci
                <br />
                menuju ikatan yang diridhai
              </p>
              <Divider className="mt-7" />
              <ChevronDown className="mt-6 w-5 h-5 text-gold animate-bounce" />
            </div>
          </section>

          {/* ============ HERO ============ */}
          <section
            ref={sectionRefs.hero}
            aria-label="Hero"
            className="relative w-full min-h-screen overflow-hidden"
            style={{
              backgroundImage: `url(${bgHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Couple photo blended into background — right side */}
            <div className="pointer-events-none absolute inset-0 md:left-[35%]">
              <img
                src={heroCouple}
                alt="Aruna & Sasmita"
                className="h-full w-full object-cover object-center"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 95% 100% at 62% 50%, #000 80%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 95% 100% at 62% 50%, #000 80%, transparent 100%)",
                }}
              />
            </div>

            {/* Warm base tone matching photo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(38,22,12,0.25) 0%, rgba(38,22,12,0.05) 45%, rgba(20,12,6,0.35) 100%)",
              }}
            />
            {/* Left soft sepia shading — feathered into photo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 75% 85% at 16% 45%, rgba(28,18,10,0.78) 0%, rgba(34,20,12,0.5) 38%, rgba(46,28,16,0.18) 62%, rgba(60,36,20,0) 82%)",
              }}
            />
            {/* Bottom blend — warm fade so text base melts into photo */}
            <div
              className="absolute inset-x-0 bottom-0 h-[55%]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(40,24,14,0) 0%, rgba(40,24,14,0.25) 55%, rgba(28,18,10,0.55) 100%)",
              }}
            />
            {/* Vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 58%, rgba(20,12,6,0.4) 92%, rgba(10,6,3,0.7) 100%)",
              }}
            />


            {/* Golden glow upper right */}
            <div
              className="absolute inset-0 mix-blend-screen opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 75% 22%, rgba(201,154,88,0.28) 0%, transparent 55%)",
              }}
            />

            {/* Golden bokeh — spans full hero for visual cohesion */}
            <div className="pointer-events-none absolute inset-0 z-10 mix-blend-screen" aria-hidden>
              {Array.from({ length: 14 }).map((_, i) => {
                const positions = [
                  { l: 8, t: 18, s: 120, o: 0.18 },
                  { l: 22, t: 62, s: 90, o: 0.14 },
                  { l: 34, t: 30, s: 70, o: 0.22 },
                  { l: 14, t: 80, s: 140, o: 0.12 },
                  { l: 45, t: 50, s: 60, o: 0.2 },
                  { l: 55, t: 18, s: 110, o: 0.18 },
                  { l: 62, t: 70, s: 95, o: 0.16 },
                  { l: 72, t: 38, s: 80, o: 0.22 },
                  { l: 82, t: 60, s: 130, o: 0.14 },
                  { l: 90, t: 25, s: 70, o: 0.2 },
                  { l: 28, t: 12, s: 55, o: 0.24 },
                  { l: 48, t: 82, s: 100, o: 0.15 },
                  { l: 68, t: 14, s: 65, o: 0.22 },
                  { l: 88, t: 78, s: 85, o: 0.16 },
                ];
                const p = positions[i];
                return (
                  <span
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      left: `${p.l}%`,
                      top: `${p.t}%`,
                      width: `${p.s}px`,
                      height: `${p.s}px`,
                      background:
                        "radial-gradient(circle, rgba(232,196,128,0.85) 0%, rgba(201,154,88,0.45) 35%, rgba(201,154,88,0) 70%)",
                      opacity: p.o,
                      filter: "blur(6px)",
                      animation: `bokehFloat ${14 + (i % 5) * 2}s ease-in-out ${i * 0.7}s infinite alternate`,
                    }}
                  />
                );
              })}
            </div>

            {/* Film grain — unifies entire hero */}
            <div
              className="pointer-events-none absolute inset-0 z-[11] opacity-[0.18] mix-blend-overlay"
              aria-hidden
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.82  0 0 0 0 0.55  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                backgroundSize: "240px 240px",
              }}
            />

            {/* Floating golden particles */}
            <div className="particles z-10" aria-hidden>
              {Array.from({ length: 24 }).map((_, i) => {
                const left = (i * 4.1 + 3) % 100;
                const delay = (i % 8) * 1.3;
                const dur = 10 + (i % 6) * 1.6;
                const size = 2 + (i % 4) * 1.5;
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


            {/* CONTENT */}
            <div className="relative z-20 grid min-h-screen grid-cols-1 md:grid-cols-[40%_60%]">
              <div className="fade-in flex flex-col items-center justify-center px-6 pt-[16vh] pb-24 text-center md:items-start md:pt-0 md:pl-[clamp(2rem,5vw,5rem)] md:pr-6 md:text-left">
                <h2
                  className="font-display leading-[0.95] tracking-[0.08em]"
                  style={{
                    color: "#E8D3B0",
                    fontSize: "clamp(2.75rem, 6vw, 5rem)",
                    textShadow: "0 4px 24px rgba(0,0,0,0.85)",
                  }}
                >
                  ARUNA
                </h2>
                <span
                  className="my-1 font-display italic"
                  style={{
                    color: "#E8D3B0",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    textShadow: "0 2px 14px rgba(0,0,0,0.8)",
                  }}
                >
                  &amp;
                </span>
                <h2
                  className="font-display leading-[0.95] tracking-[0.08em]"
                  style={{
                    color: "#E8D3B0",
                    fontSize: "clamp(2.75rem, 6vw, 5rem)",
                    textShadow: "0 4px 24px rgba(0,0,0,0.85)",
                  }}
                >
                  SASMITA
                </h2>

                <p
                  className="mt-8 font-serif italic"
                  style={{
                    color: "rgba(232,211,176,0.88)",
                    fontSize: "clamp(0.95rem, 1.25vw, 1.15rem)",
                    lineHeight: 1.8,
                    maxWidth: "32ch",
                    textShadow: "0 2px 10px rgba(0,0,0,0.7)",
                  }}
                >
                  Dua jiwa, satu tujuan,
                  <br />
                  dalam harmoni cinta dan doa,
                  <br />
                  mengukir janji suci
                  <br />
                  untuk selamanya.
                </p>

                <Divider className="mt-8 md:justify-start" />

                <p
                  className="mt-8 font-display"
                  style={{
                    color: "#E8D3B0",
                    letterSpacing: "0.45em",
                    fontSize: "clamp(0.85rem, 1vw, 1rem)",
                  }}
                >
                  20 • 12 • 2025
                </p>
                <p
                  className="mt-3 font-display uppercase"
                  style={{
                    color: "rgba(232,211,176,0.75)",
                    letterSpacing: "0.55em",
                    fontSize: "clamp(0.7rem, 0.85vw, 0.85rem)",
                  }}
                >
                  Yogyakarta
                </p>
              </div>
              <div aria-hidden />
            </div>

            {/* Scroll indicator */}
            <button
              aria-label="Scroll down"
              onClick={() =>
                sectionRefs.philosophy.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full border border-gold/60 p-2 backdrop-blur-sm transition-colors hover:bg-gold/10"
            >
              <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
            </button>
          </section>


          {/* ============ PHILOSOPHY ============ */}
          <Section
            bg={bgPhilosophy}
            sectionRef={sectionRefs.philosophy}
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
                {[
                  { Icon: Lotus, title: "Restu", desc: "Doa dan ridha keluarga" },
                  { Icon: Lotus, title: "Sakinah", desc: "Ketenangan dalam kebersamaan" },
                  { Icon: HeartFloral, title: "Mawaddah", desc: "Cinta yang tumbuh tiada henti" },
                  { Icon: Leaf, title: "Rahmah", desc: "Kasih yang memberi keberkahan" },
                ].map(({ Icon, title, desc }) => (
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

          {/* ============ EVENT ============ */}
          <Section
            bg={bgEvent}
            sectionRef={sectionRefs.event}
            label="Event"
            overlay="bg-black/75"
          >
            <div className="flex flex-col items-center text-center min-h-screen px-6 py-20">
              <Divider />
              <h2 className="mt-6 text-3xl sm:text-4xl font-display text-gradient-gold tracking-[0.3em]">
                WAKTU &amp; TEMPAT
              </h2>
              <Divider className="mt-4" />

              <div className="mt-12 grid md:grid-cols-3 gap-6 w-full max-w-5xl">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 40 40" className="w-10 h-10 text-gold" fill="none" stroke="currentColor" strokeWidth="0.9">
                        <circle cx="15" cy="20" r="8" />
                        <circle cx="25" cy="20" r="8" />
                      </svg>
                    ),
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
                ].map((e) => (
                  <div
                    key={e.title}
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

          {/* ============ GALLERY ============ */}
          <Section
            bg={bgEvent}
            sectionRef={sectionRefs.gallery}
            label="Gallery"
            overlay="bg-black/80"
          >
            <div className="flex flex-col items-center text-center min-h-screen px-6 py-20">
              <h2 className="text-3xl sm:text-5xl font-display text-gradient-gold tracking-[0.3em]">
                KENANGAN
              </h2>
              <p className="mt-3 text-2xl sm:text-3xl font-script text-gold-soft">
                Dalam Perjalanan Cinta
              </p>
              <Divider className="mt-4" />

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl w-full">
                <img src={galleryPhotos[0]} alt="" className="aspect-[3/4] object-cover rounded border border-gold/30" />
                <img
                  src={galleryPhotos[galleryIdx]}
                  alt=""
                  className="col-span-2 row-span-2 aspect-square object-cover rounded border border-gold/50 shadow-[0_20px_60px_-20px_oklch(0.78_0.12_75/0.5)]"
                />
                <img src={galleryPhotos[2]} alt="" className="aspect-[3/4] object-cover rounded border border-gold/30" />
                <img src={galleryPhotos[3]} alt="" className="aspect-[3/4] object-cover rounded border border-gold/30" />
                <img src={galleryPhotos[4]} alt="" className="aspect-[3/4] object-cover rounded border border-gold/30" />
              </div>

              <div className="mt-8 flex items-center gap-4 text-gold">
                <button
                  onClick={() => setGalleryIdx((i) => (i - 1 + galleryPhotos.length) % galleryPhotos.length)}
                  className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center hover:bg-gold/15"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-display tracking-[0.3em]">
                  {String(galleryIdx + 1).padStart(2, "0")} —{" "}
                  {String(galleryPhotos.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => setGalleryIdx((i) => (i + 1) % galleryPhotos.length)}
                  className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center hover:bg-gold/15"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Section>

          {/* ============ CLOSING ============ */}
          <Section
            bg={bgClosing}
            sectionRef={sectionRefs.closing}
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
                {[
                  { Icon: Instagram, href: "#" },
                  { Icon: Music, href: "#" },
                  { Icon: Youtube, href: "#" },
                ].map(({ Icon, href }, i) => (
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
        </div>
      )}

      {/* ============ FLOATING NAV ============ */}
      {opened && (
        <nav
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full border border-gold backdrop-blur-md shadow-[0_10px_40px_-10px_oklch(0.78_0.12_75/0.5)]"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.14 0.018 50 / 0.85), oklch(0.14 0.018 50 / 0.92)), url(${navBg})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto max-w-[92vw]">
            {[
              { Icon: Home, label: "Cover", target: sectionRefs.cover },
              { Icon: Sparkles, label: "Gunungan", target: sectionRefs.gunungan },
              { Icon: Users, label: "Hero", target: sectionRefs.hero },
              { Icon: Heart, label: "Filosofi", target: sectionRefs.philosophy },
              { Icon: Calendar, label: "Acara", target: sectionRefs.event },
              { Icon: ImageIcon, label: "Galeri", target: sectionRefs.gallery },
              { Icon: Mail, label: "Penutup", target: sectionRefs.closing },
            ].map(({ Icon, label, target }) => (
              <button
                key={label}
                onClick={() => target.current?.scrollIntoView({ behavior: "smooth" })}
                className="flex flex-col items-center gap-0.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-gold-soft hover:bg-gold/15 transition-all shrink-0"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline text-[10px] tracking-[0.15em] font-display uppercase">
                  {label}
                </span>
              </button>
            ))}
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </nav>
      )}
    </main>
  );
}
