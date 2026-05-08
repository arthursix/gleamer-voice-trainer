import { useEffect, useRef } from "react";

/**
 * Gleamer-inspired interactive background.
 * Two large blurred orbs that follow the mouse with smoothing,
 * plus a subtle grain layer. Pure CSS/DOM, no canvas overhead.
 */
export function InteractiveBackground() {
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
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      const x = current.current.x * 100;
      const y = current.current.y * 100;
      if (orb1.current) {
        orb1.current.style.transform = `translate3d(${x - 50}vw, ${y - 50}vh, 0)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate3d(${50 - x}vw, ${60 - y}vh, 0)`;
      }
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
        className="absolute top-1/2 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.24 265 / 0.55), transparent 70%)",
        }}
      />
      <div
        ref={orb2}
        className="absolute top-1/2 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.2 200 / 0.45), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.16 0.02 260 / 0.85) 100%)",
        }}
      />
    </div>
  );
}
