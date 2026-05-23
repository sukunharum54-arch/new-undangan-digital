import { Hop as Home, Heart, Calendar, Image as ImageIcon, Sparkles, Users, Mail } from "lucide-react";
import navBg from "@/assets/bg-nav.jpg";

interface FloatingNavProps {
  sectionRefs: {
    cover: React.RefObject<HTMLElement | null>;
    gunungan: React.RefObject<HTMLElement | null>;
    hero: React.RefObject<HTMLElement | null>;
    philosophy: React.RefObject<HTMLElement | null>;
    event: React.RefObject<HTMLElement | null>;
    gallery: React.RefObject<HTMLElement | null>;
    closing: React.RefObject<HTMLElement | null>;
  };
}

const navItems = [
  { Icon: Home, label: "Cover", key: "cover" as const },
  { Icon: Sparkles, label: "Gunungan", key: "gunungan" as const },
  { Icon: Users, label: "Hero", key: "hero" as const },
  { Icon: Heart, label: "Filosofi", key: "philosophy" as const },
  { Icon: Calendar, label: "Acara", key: "event" as const },
  { Icon: ImageIcon, label: "Galeri", key: "gallery" as const },
  { Icon: Mail, label: "Penutup", key: "closing" as const },
];

export function FloatingNav({ sectionRefs }: FloatingNavProps) {
  return (
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
        {navItems.map(({ Icon, label, key }) => (
          <button
            key={label}
            onClick={() => sectionRefs[key].current?.scrollIntoView({ behavior: "smooth" })}
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
  );
}
