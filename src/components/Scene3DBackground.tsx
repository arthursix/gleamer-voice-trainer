import { useEffect, useRef } from "react";

/**
 * Floating 3D shapes (CSS perspective) that drift with scroll & mouse.
 * Pure CSS — no extra dependency. Sits behind InteractiveBackground orbs.
 */
type Shape = {
  kind: "cube" | "ring" | "sphere" | "pyramid";
  top: string;
  left: string;
  size: number;
  depth: number; // parallax factor (0.05 - 0.4)
  hue: number; // 0..360
  spinX: number;
  spinY: number;
  delay: number;
};

const SHAPES: Shape[] = [
  { kind: "cube", top: "8%", left: "82%", size: 120, depth: 0.18, hue: 260, spinX: 0.04, spinY: 0.06, delay: 0 },
  { kind: "ring", top: "22%", left: "6%", size: 220, depth: 0.10, hue: 220, spinX: 0.0, spinY: 0.03, delay: 1.5 },
  { kind: "sphere", top: "55%", left: "88%", size: 160, depth: 0.25, hue: 200, spinX: 0, spinY: 0, delay: 2.2 },
  { kind: "pyramid", top: "70%", left: "10%", size: 140, depth: 0.20, hue: 285, spinX: 0.03, spinY: 0.05, delay: 0.8 },
  { kind: "cube", top: "120%", left: "78%", size: 90, depth: 0.30, hue: 175, spinX: 0.06, spinY: 0.04, delay: 1.1 },
  { kind: "ring", top: "150%", left: "12%", size: 280, depth: 0.08, hue: 265, spinX: 0, spinY: 0.025, delay: 0 },
  { kind: "sphere", top: "200%", left: "85%", size: 200, depth: 0.22, hue: 230, spinX: 0, spinY: 0, delay: 2 },
  { kind: "pyramid", top: "240%", left: "8%", size: 110, depth: 0.16, hue: 305, spinX: 0.05, spinY: 0.04, delay: 0.5 },
  { kind: "cube", top: "300%", left: "75%", size: 130, depth: 0.20, hue: 200, spinX: 0.04, spinY: 0.05, delay: 1 },
  { kind: "ring", top: "350%", left: "20%", size: 260, depth: 0.07, hue: 260, spinX: 0, spinY: 0.02, delay: 1.7 },
  { kind: "sphere", top: "420%", left: "82%", size: 180, depth: 0.18, hue: 205, spinX: 0, spinY: 0, delay: 0.4 },
  { kind: "pyramid", top: "470%", left: "6%", size: 130, depth: 0.22, hue: 285, spinX: 0.03, spinY: 0.05, delay: 1.2 },
];

function ShapeNode({ shape, idx }: { shape: Shape; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = () => {
      const el = ref.current;
      if (el) {
        const t = (performance.now() - start) / 1000 + shape.delay;
        const rx = t * shape.spinX * 60;
        const ry = t * shape.spinY * 60 + Math.sin(t * 0.4) * 6;
        const float = Math.sin(t * 0.6 + idx) * 12;
        el.style.setProperty("--rx", `${rx}deg`);
        el.style.setProperty("--ry", `${ry}deg`);
        el.style.setProperty("--fy", `${float}px`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shape.delay, shape.spinX, shape.spinY, idx]);

  const s = shape.size;
  const color = `oklch(0.7 0.18 ${shape.hue})`;
  const colorSoft = `oklch(0.7 0.18 ${shape.hue} / 0.35)`;

  const wrapStyle: React.CSSProperties = {
    top: shape.top,
    left: shape.left,
    width: s,
    height: s,
    perspective: 1200,
    transform: `translateY(var(--scroll-y, 0px))`,
    ["--depth" as never]: shape.depth,
  };

  return (
    <div ref={ref} className="scene-shape absolute pointer-events-none" style={wrapStyle} data-depth={shape.depth}>
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(var(--rx)) rotateY(var(--ry)) translateY(var(--fy))",
          transition: "transform 60ms linear",
        }}
      >
        {shape.kind === "cube" && <Cube size={s} color={color} />}
        {shape.kind === "ring" && <Ring size={s} color={color} colorSoft={colorSoft} />}
        {shape.kind === "sphere" && <Sphere size={s} hue={shape.hue} />}
        {shape.kind === "pyramid" && <Pyramid size={s} color={color} />}
      </div>
    </div>
  );
}

function Cube({ size, color }: { size: number; color: string }) {
  const half = size / 2;
  const faces: React.CSSProperties[] = [
    { transform: `translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  return (
    <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
      {faces.map((f, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-lg"
          style={{
            ...f,
            border: `1px solid ${color}`,
            background: `linear-gradient(135deg, ${color.replace("0.7", "0.7").replace(")", " / 0.08)")}, transparent)`,
            boxShadow: `inset 0 0 40px ${color.replace(")", " / 0.15)")}`,
            backdropFilter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
}

function Ring({ size, color, colorSoft }: { size: number; color: string; colorSoft: string }) {
  return (
    <div
      className="absolute inset-0 rounded-full"
      style={{
        border: `1px solid ${colorSoft}`,
        boxShadow: `0 0 60px ${colorSoft}, inset 0 0 60px ${colorSoft}`,
        background: `conic-gradient(from 0deg, transparent, ${color.replace(")", " / 0.25)")}, transparent, ${color.replace(")", " / 0.2)")}, transparent)`,
        maskImage: "radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 71%)",
        WebkitMaskImage: "radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 71%)",
      }}
    />
  );
}

function Sphere({ size, hue }: { size: number; hue: number }) {
  return (
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: `radial-gradient(circle at 30% 30%, oklch(0.85 0.16 ${hue} / 0.55), oklch(0.45 0.22 ${hue} / 0.25) 55%, transparent 75%)`,
        filter: "blur(1px)",
        boxShadow: `0 0 80px oklch(0.7 0.2 ${hue} / 0.35)`,
      }}
    />
  );
}

function Pyramid({ size, color }: { size: number; color: string }) {
  const h = size;
  const faces = [0, 90, 180, 270];
  return (
    <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
      {faces.map((deg) => (
        <div
          key={deg}
          className="absolute left-1/2 bottom-0"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${h}px solid ${color.replace(")", " / 0.12)")}`,
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotateY(${deg}deg) rotateX(15deg)`,
            filter: `drop-shadow(0 0 20px ${color.replace(")", " / 0.4)")})`,
          }}
        />
      ))}
    </div>
  );
}

export function Scene3DBackground() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const layer = layerRef.current;
        if (!layer) return;
        const y = window.scrollY;
        const nodes = layer.querySelectorAll<HTMLDivElement>(".scene-shape");
        nodes.forEach((n) => {
          const d = parseFloat(n.dataset.depth || "0.15");
          n.style.transform = `translateY(${-y * d}px)`;
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="fixed inset-0 -z-[5] overflow-hidden pointer-events-none"
      style={{ perspective: 1400 }}
    >
      <div className="relative w-full" style={{ height: "500vh" }}>
        {SHAPES.map((s, i) => (
          <ShapeNode key={i} shape={s} idx={i} />
        ))}
      </div>
    </div>
  );
}
