export function Gunungan({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
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
}

export function CornerOrnament({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
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
}

export function Divider({ className = "" }: { className?: string }) {
  return (
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
}

export function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="0.9">
      <path d="M20 6 Q14 18 20 30 Q26 18 20 6 Z" />
      <path d="M20 14 Q10 20 14 30 Q22 26 20 14 Z" />
      <path d="M20 14 Q30 20 26 30 Q18 26 20 14 Z" />
      <path d="M8 28 Q20 34 32 28" />
    </svg>
  );
}

export function HeartFloral({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="0.9">
      <path d="M20 32 Q6 22 10 14 Q14 8 20 14 Q26 8 30 14 Q34 22 20 32 Z" />
      <path d="M20 18 L20 26 M16 22 L24 22" />
    </svg>
  );
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="0.9">
      <path d="M20 6 Q8 16 12 30 Q24 28 28 14 Q26 10 20 6 Z" />
      <path d="M14 26 Q20 18 26 12" />
    </svg>
  );
}

export function GoldenParticles({ count = 24 }: { count?: number }) {
  return (
    <div className="particles" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
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
  );
}
