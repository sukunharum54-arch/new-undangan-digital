import { ChevronDown } from "lucide-react";
import bgHero from "@/assets/bg-hero.jpg";
import heroCouple from "@/assets/hero-couple.jpg";
import { Divider } from "../ornaments";

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  onScrollToPhilosophy: () => void;
}

function HeroBokeh() {
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

  return (
    <div className="pointer-events-none absolute inset-0 z-10 mix-blend-screen" aria-hidden>
      {positions.map((p, i) => (
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
      ))}
    </div>
  );
}

function HeroParticles() {
  return (
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
  );
}

export function HeroSection({ sectionRef, onScrollToPhilosophy }: HeroSectionProps) {
  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 18% 50%, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.75) 20%, rgba(8,6,4,0.5) 40%, rgba(8,6,4,0.25) 60%, rgba(8,6,4,0.08) 78%, rgba(8,6,4,0) 95%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.35) 85%, rgba(0,0,0,0.55) 95%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <div
        className="absolute inset-0 mix-blend-screen opacity-40"
        style={{
          background:
            "radial-gradient(circle at 75% 22%, rgba(201,154,88,0.35) 0%, rgba(201,154,88,0.15) 35%, transparent 65%)",
        }}
      />

      <HeroBokeh />

      <div
        className="pointer-events-none absolute inset-0 z-[11] opacity-[0.18] mix-blend-overlay"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.82  0 0 0 0 0.55  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />

      <HeroParticles />

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
            20 - 12 - 2025
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

      <button
        aria-label="Scroll down"
        onClick={onScrollToPhilosophy}
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full border border-gold/60 p-2 backdrop-blur-sm transition-colors hover:bg-gold/10"
      >
        <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
      </button>
    </section>
  );
}
