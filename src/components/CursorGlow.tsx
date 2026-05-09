import { useEffect, useRef, useState } from "react";

/** Apple-style cursor: large soft glow + small dot, hidden on touch devices. */
export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const cur = useRef({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a,button,[role=button],input,textarea,[data-tilt]"));
    };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      cur.current.x += (target.current.x - cur.current.x) * 0.18;
      cur.current.y += (target.current.y - cur.current.y) * 0.18;
      if (glow.current)
        glow.current.style.transform = `translate3d(${cur.current.x - 200}px, ${cur.current.y - 200}px, 0)`;
      if (dot.current)
        dot.current.style.transform = `translate3d(${target.current.x - 4}px, ${target.current.y - 4}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={glow}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.18 260 / 0.18), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={dot}
        className={`pointer-events-none fixed left-0 top-0 z-[61] h-2 w-2 rounded-full bg-white transition-[width,height,opacity] duration-200 ${
          hovering ? "h-4 w-4 opacity-70 -translate-x-1 -translate-y-1" : "opacity-90"
        }`}
        style={{ boxShadow: "0 0 20px oklch(0.78 0.18 260 / 0.8)" }}
      />
    </>
  );
}
