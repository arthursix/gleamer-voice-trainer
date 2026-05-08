import { Link } from "@tanstack/react-router";
import { Mic } from "lucide-react";
import { useEffect, useState } from "react";
import { SECTIONS, useActiveSection } from "./SectionScroller";

export function Header() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
            <Mic className="h-3.5 w-3.5 text-primary-foreground" />
          </span>
          <span className="font-semibold tracking-tight text-[15px]">
            Gleamer <span className="text-muted-foreground font-normal">Voice</span>
          </span>
          <span className="ml-2 hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-primary/80 border border-primary/30 rounded-full px-2 py-0.5">
            Formation
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {SECTIONS.filter((s) => s.id !== "intro").map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-full text-[13px] transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-foreground bg-white/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a
          href="#dictee"
          className="ml-auto md:ml-0 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-1.5 text-[13px] font-medium hover:opacity-90 transition"
        >
          Commencer
        </a>
      </div>
    </header>
  );
}
