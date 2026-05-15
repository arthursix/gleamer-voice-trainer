import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Typewriter({
  text,
  speed = 28,
  className = "",
  cursor = true,
  startDelay = 0,
}: {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
  startDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [out, setOut] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let id: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      id = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [inView, text, speed, startDelay]);

  return (
    <span ref={ref} className={className}>
      {out}
      {cursor && (
        <span
          className="inline-block w-[2px] h-[1em] align-middle ml-0.5"
          style={{
            background: "#4F6EF7",
            animation: "blink 1s steps(1) infinite",
          }}
        />
      )}
    </span>
  );
}
