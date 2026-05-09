import { useRef, useState, ReactNode, useEffect } from "react";

/**
 * Apple-style 3D tilt on hover + drag-to-rotate.
 * Smooth spring-like easing, perspective preserved on children.
 */
export function Tilt3D({
  children,
  max = 12,
  className = "",
  glare = true,
  draggable = true,
}: {
  children: ReactNode;
  max?: number;
  className?: string;
  glare?: boolean;
  draggable?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const current = useRef({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const dragging = useRef(false);
  const dragOffset = useRef({ rx: 0, ry: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const c = current.current;
      const t = target.current;
      c.rx += (t.rx - c.rx) * 0.08;
      c.ry += (t.ry - c.ry) * 0.08;
      c.gx += (t.gx - c.gx) * 0.12;
      c.gy += (t.gy - c.gy) * 0.12;
      const el = ref.current;
      if (el) {
        el.style.transform = `perspective(1200px) rotateX(${c.rx.toFixed(2)}deg) rotateY(${c.ry.toFixed(2)}deg)`;
        el.style.setProperty("--gx", `${c.gx}%`);
        el.style.setProperty("--gy", `${c.gy}%`);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    if (dragging.current) {
      target.current.ry = dragOffset.current.ry + (px - 0.5) * max * 4;
      target.current.rx = dragOffset.current.rx - (py - 0.5) * max * 4;
    } else {
      target.current.ry = (px - 0.5) * max * 2;
      target.current.rx = -(py - 0.5) * max * 2;
    }
    target.current.gx = px * 100;
    target.current.gy = py * 100;
  };

  const onLeave = () => {
    setHover(false);
    if (!dragging.current) {
      target.current.rx = 0;
      target.current.ry = 0;
    }
  };

  const onDown = (e: React.MouseEvent) => {
    if (!draggable) return;
    dragging.current = true;
    dragOffset.current = { rx: current.current.rx, ry: current.current.ry };
    e.preventDefault();
  };
  const onUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      className={`relative will-change-transform transition-[box-shadow] duration-500 ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      } ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(600px circle at var(--gx) var(--gy), rgba(255,255,255,0.18), transparent 40%)",
            mixBlendMode: "overlay",
          }}
        />
      )}
    </div>
  );
}
