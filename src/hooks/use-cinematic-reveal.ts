import { useEffect, useRef, useCallback } from "react";

type RevealStyle = "fade-up" | "fade-scale" | "curtain" | "slide-reveal" | "zoom-pan";

interface CinematicRevealOptions {
  style?: RevealStyle;
  threshold?: number;
  delay?: number;
  duration?: number;
}

const REVEAL_CLASSES: Record<RevealStyle, { initial: string; active: string }> = {
  "fade-up": {
    initial: "cinematic-init-fade-up",
    active: "cinematic-active-fade-up",
  },
  "fade-scale": {
    initial: "cinematic-init-fade-scale",
    active: "cinematic-active-fade-scale",
  },
  "curtain": {
    initial: "cinematic-init-curtain",
    active: "cinematic-active-curtain",
  },
  "slide-reveal": {
    initial: "cinematic-init-slide-reveal",
    active: "cinematic-active-slide-reveal",
  },
  "zoom-pan": {
    initial: "cinematic-init-zoom-pan",
    active: "cinematic-active-zoom-pan",
  },
};

export function useCinematicReveal(options: CinematicRevealOptions = {}) {
  const { style = "fade-up", threshold = 0.15, delay = 0, duration = 1200 } = options;
  const ref = useRef<HTMLElement>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const classes = REVEAL_CLASSES[style];
          setTimeout(() => {
            el.classList.remove(classes.initial);
            el.classList.add(classes.active);
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    [style, delay],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const classes = REVEAL_CLASSES[style];
    el.classList.add(classes.initial);
    el.style.setProperty("--cinematic-duration", `${duration}ms`);

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin: "0px 0px -60px 0px",
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [style, threshold, delay, duration, handleIntersect]);

  return ref;
}

export function useCinematicSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll("[data-reveal]");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = parseInt(target.dataset.revealDelay || "0", 10);
            const style = (target.dataset.reveal || "fade-up") as RevealStyle;
            const classes = REVEAL_CLASSES[style];
            setTimeout(() => {
              target.classList.remove(classes.initial);
              target.classList.add(classes.active);
            }, delay);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    );

    children.forEach((child) => {
      const el = child as HTMLElement;
      const style = (el.dataset.reveal || "fade-up") as RevealStyle;
      const classes = REVEAL_CLASSES[style];
      el.classList.add(classes.initial);
      const dur = parseInt(el.dataset.revealDuration || "1200", 10);
      el.style.setProperty("--cinematic-duration", `${dur}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
