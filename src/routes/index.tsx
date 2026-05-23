import { createFileRoute } from "@tanstack/react-router";
import heroCouple from "@/assets/hero-couple.jpg";
import bgHero from "@/assets/bg-hero.jpg";
import cornerFiligree from "@/assets/corner-filigree.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aruna & Sasmita — The Wedding" },
      {
        name: "description",
        content:
          "Undangan pernikahan Aruna & Sasmita — 20 Desember 2025, Yogyakarta.",
      },
    ],
  }),
  component: HeroPage,
});

const DividerOrnament = () => (
  <svg
    viewBox="0 0 200 16"
    className="mx-auto h-3 w-40 sm:w-48 text-gold"
    fill="none"
    aria-hidden
  >
    <g stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" fill="currentColor" fillOpacity="0.35">
      <line x1="10" y1="8" x2="78" y2="8" />
      <line x1="122" y1="8" x2="190" y2="8" />
      <path d="M100 2 L106 8 L100 14 L94 8 Z" fillOpacity="0.5" />
      <circle cx="84" cy="8" r="1.3" />
      <circle cx="116" cy="8" r="1.3" />
      <circle cx="6" cy="8" r="1.1" />
      <circle cx="194" cy="8" r="1.1" />
      <path d="M70 8 q4 -4 8 0 q-4 4 -8 0 Z" fillOpacity="0.4" />
      <path d="M122 8 q4 -4 8 0 q-4 4 -8 0 Z" fillOpacity="0.4" />
    </g>
  </svg>
);

function HeroPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <section
        aria-label="Hero — Aruna & Sasmita"
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Couple photo — right side, blended into background */}
        <div className="pointer-events-none absolute inset-0 md:left-[38%]">
          <img
            src={heroCouple}
            alt="Aruna & Sasmita in Javanese royal wedding attire"
            className="h-full w-full object-cover object-center opacity-90 md:opacity-100"
            style={{
              maskImage:
                "radial-gradient(ellipse 75% 80% at 65% 50%, #000 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 80% at 65% 50%, #000 55%, transparent 100%)",
            }}
          />
        </div>

        {/* Warm color wash to bind photo & background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,8,6,0.65) 0%, rgba(13,8,6,0.25) 35%, rgba(13,8,6,0.55) 100%)",
          }}
        />
        {/* Left-side darkening for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.7) 30%, rgba(5,5,5,0.15) 55%, rgba(5,5,5,0) 75%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 90%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        {/* Warm golden glow from upper-right */}
        <div
          className="absolute inset-0 mix-blend-screen opacity-60"
          style={{
            background:
              "radial-gradient(circle at 75% 25%, rgba(201,154,88,0.35) 0%, transparent 55%)",
          }}
        />

        {/* Corner filigree — top-left & top-right */}
        <img
          src={cornerFiligree}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-10 w-[28%] max-w-[260px] select-none opacity-25 sm:opacity-30"
        />
        <img
          src={cornerFiligree}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 z-10 w-[28%] max-w-[260px] -scale-x-100 select-none opacity-25 sm:opacity-30"
        />

        {/* Floating golden particles */}
        <div className="particles z-10" aria-hidden>
          {Array.from({ length: 26 }).map((_, i) => {
            const left = (i * 3.9 + 4) % 100;
            const delay = (i % 9) * 1.2;
            const dur = 10 + (i % 7) * 1.6;
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
          {/* LEFT — text */}
          <div className="fade-in flex flex-col items-center justify-center px-6 pt-[18vh] pb-24 text-center md:items-start md:pt-0 md:pl-[clamp(2rem,5vw,5rem)] md:pr-6 md:text-left">
            <h1
              className="font-display leading-[0.95] tracking-[0.08em]"
              style={{
                color: "#E8D3B0",
                fontSize: "clamp(2.75rem, 6vw, 5rem)",
                textShadow: "0 4px 24px rgba(0,0,0,0.85)",
              }}
            >
              ARUNA
            </h1>
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
            <h1
              className="font-display leading-[0.95] tracking-[0.08em]"
              style={{
                color: "#E8D3B0",
                fontSize: "clamp(2.75rem, 6vw, 5rem)",
                textShadow: "0 4px 24px rgba(0,0,0,0.85)",
              }}
            >
              SASMITA
            </h1>

            <p
              className="mt-8 font-serif italic"
              style={{
                color: "rgba(232,211,176,0.85)",
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

            <div className="mt-8">
              <DividerOrnament />
            </div>

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

          {/* RIGHT — empty (photo lives in background layer above) */}
          <div aria-hidden />
        </div>

        {/* Scroll indicator */}
        <button
          aria-label="Scroll down"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full border border-gold/60 p-2 backdrop-blur-sm transition-colors hover:bg-gold/10"
        >
          <span className="scroll-indicator block">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="#E8D3B0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5 L12 19 M6 13 L12 19 L18 13" />
            </svg>
          </span>
        </button>
      </section>
    </main>
  );
}
