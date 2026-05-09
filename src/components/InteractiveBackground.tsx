import { useEffect, useRef } from "react";
import { useActiveTone, type Tone } from "./SectionScroller";

/**
 * Gleamer-style mesh gradient background with two large orbs that follow
 * the cursor and re-tint themselves as the user scrolls between sections.
 */
const TONE_PALETTE: Record<Tone, { a: string; b: string }> = {
  intro: { a: "oklch(0.62 0.24 265 / 0.55)", b: "oklch(0.55 0.18 95 / 0.40)" }, // gleamer signature: blue + olive
  blue: { a: "oklch(0.62 0.24 265 / 0.6)", b: "oklch(0.55 0.2 230 / 0.45)" },
  violet: { a: "oklch(0.6 0.25 305 / 0.55)", b: "oklch(0.62 0.24 265 / 0.45)" },
  teal: { a: "oklch(0.7 0.16 200 / 0.55)", b: "oklch(0.62 0.18 175 / 0.4)" },
  amber: { a: "oklch(0.78 0.18 70 / 0.45)", b: "oklch(0.62 0.24 265 / 0.4)" },
  primary: { a: "oklch(0.7 0.22 285 / 0.6)", b: "oklch(0.6 0.22 250 / 0.5)" },
};

export function InteractiveBackground() {
  const tone = useActiveTone();
  const palette = TONE_PALETTE[tone];

  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0.5, y: 0.3 });
  const current = useRef({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.05;
      current.current.y += (target.current.y - current.current.y) * 0.05;
      const x = current.current.x * 100;
      const y = current.current.y * 100;
      if (orb1.current) orb1.current.style.transform = `translate3d(${x - 50}vw, ${y - 50}vh, 0)`;
      if (orb2.current) orb2.current.style.transform = `translate3d(${50 - x}vw, ${60 - y}vh, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      <div
        ref={orb1}
        className="absolute top-1/2 left-1/2 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-80 transition-[background] duration-[1500ms]"
        style={{ background: `radial-gradient(circle, ${palette.a}, transparent 70%)` }}
      />
      <div
        ref={orb2}
        className="absolute top-1/2 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-70 transition-[background] duration-[1500ms]"
        style={{ background: `radial-gradient(circle, ${palette.b}, transparent 70%)` }}
      />
      {/* subtle moving spotlight */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, oklch(0.13 0.02 260 / 0.92) 100%)",
        }}
      />
    </div>
  );
}
