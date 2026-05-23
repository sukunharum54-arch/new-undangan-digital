import { ChevronDown } from "lucide-react";
import bgHero from "@/assets/bg-hero.jpg";
import heroCouple from "@/assets/hero-couple.jpg";
import { Divider } from "../ornaments";

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  onScrollToPhilosophy: () => void;
}

// Bokeh spread evenly across the full width so left-text and right-photo feel unified
function HeroBokeh() {
  const positions = [
    { l: 5,  t: 20, s: 110, o: 0.13 },
    { l: 15, t: 65, s: 85,  o: 0.11 },
    { l: 25, t: 35, s: 65,  o: 0.17 },
    { l: 10, t: 82, s: 130, o: 0.09 },
    { l: 38, t: 52, s: 55,  o: 0.15 },
    { l: 48, t: 15, s: 100, o: 0.13 },
    { l: 55, t: 72, s: 90,  o: 0.12 },
    { l: 64, t: 40, s: 75,  o: 0.16 },
    { l: 74, t: 62, s: 120, o: 0.11 },
    { l: 84, t: 28, s: 65,  o: 0.15 },
    { l: 30, t: 10, s: 50,  o: 0.18 },
    { l: 50, t: 85, s: 95,  o: 0.12 },
    { l: 70, t: 16, s: 60,  o: 0.17 },
    { l: 90, t: 75, s: 80,  o: 0.13 },
    { l: 42, t: 44, s: 70,  o: 0.14 },
    { l: 78, t: 50, s: 105, o: 0.10 },
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
              "radial-gradient(circle, rgba(232,196,128,0.8) 0%, rgba(201,154,88,0.35) 40%, rgba(201,154,88,0) 72%)",
            opacity: p.o,
            filter: "blur(8px)",
            animation: `bokehFloat ${15 + (i % 5) * 2}s ease-in-out ${i * 0.65}s infinite alternate`,
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
      className="relative w-full min-h-screen"
    >
      {/* Full-bleed background image — uses contain + object-fit to avoid cropping on any device */}
      <div className="absolute inset-0">
        <img
          src={bgHero}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center sm:object-[center_30%]"
        />
      </div>

      {/* Couple photo — mask uses a wide soft linear feather on the left edge
          so it blends seamlessly into the text overlay rather than cutting hard */}
      <div className="pointer-events-none absolute inset-0 md:left-[30%]">
        <img
          src={heroCouple}
          alt="Aruna & Sasmita"
          className="h-full w-full object-cover object-[center_20%] sm:object-center"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.55) 18%, rgba(0,0,0,0.88) 32%, #000 52%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.55) 18%, rgba(0,0,0,0.88) 32%, #000 52%, #000 100%)",
          }}
        />
      </div>

      {/* Left-side text backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,8,5,0.94) 0%, rgba(10,8,5,0.85) 16%, rgba(10,8,5,0.60) 28%, rgba(10,8,5,0.30) 42%, rgba(10,8,5,0.08) 58%, rgba(10,8,5,0) 72%)",
        }}
      />

      {/* Subtle bottom vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 130% 80% at 50% 100%, rgba(10,8,5,0.40) 0%, transparent 65%)",
        }}
      />

      <HeroBokeh />

      {/* Film grain — reduced opacity for less sepia wash */}
      <div
        className="pointer-events-none absolute inset-0 z-[11] opacity-[0.08] mix-blend-overlay"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.92  0 0 0 0 0.78  0 0 0 0 0.50  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "200px 200px",
        }}
      />

      <HeroParticles />

      <div className="relative z-20 grid min-h-screen grid-cols-1 md:grid-cols-[42%_58%]">
        <div className="flex flex-col items-center justify-center px-6 pt-[16vh] pb-24 text-center md:items-start md:pt-0 md:pl-[clamp(2rem,5vw,5rem)] md:pr-8 md:text-left">
          <h2
            data-reveal="slide-reveal" data-reveal-delay="0"
            className="font-display leading-[0.95] tracking-[0.08em]"
            style={{
              color: "#EAD8B8",
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              textShadow: "0 2px 18px rgba(10,6,2,0.9), 0 6px 32px rgba(10,6,2,0.6)",
            }}
          >
            ARUNA
          </h2>
          <span
            data-reveal="fade-up" data-reveal-delay="200"
            className="my-1 font-display italic"
            style={{
              color: "#EAD8B8",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              textShadow: "0 2px 12px rgba(10,6,2,0.85)",
            }}
          >
            &amp;
          </span>
          <h2
            data-reveal="slide-reveal" data-reveal-delay="300"
            className="font-display leading-[0.95] tracking-[0.08em]"
            style={{
              color: "#EAD8B8",
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              textShadow: "0 2px 18px rgba(10,6,2,0.9), 0 6px 32px rgba(10,6,2,0.6)",
            }}
          >
            SASMITA
          </h2>

          <p
            data-reveal="fade-up" data-reveal-delay="500"
            className="mt-8 font-serif italic"
            style={{
              color: "rgba(230,208,168,0.82)",
              fontSize: "clamp(0.95rem, 1.25vw, 1.15rem)",
              lineHeight: 1.8,
              maxWidth: "32ch",
              textShadow: "0 1px 8px rgba(10,6,2,0.75)",
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

          <Divider data-reveal="curtain" data-reveal-delay="700" className="mt-8 md:justify-start" />

          <p
            data-reveal="fade-up" data-reveal-delay="900"
            className="mt-8 font-display"
            style={{
              color: "#EAD8B8",
              letterSpacing: "0.45em",
              fontSize: "clamp(0.85rem, 1vw, 1rem)",
              textShadow: "0 1px 8px rgba(10,6,2,0.7)",
            }}
          >
            20 - 12 - 2025
          </p>
          <p
            data-reveal="fade-up" data-reveal-delay="1000"
            className="mt-3 font-display uppercase"
            style={{
              color: "rgba(230,208,168,0.7)",
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
