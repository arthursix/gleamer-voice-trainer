import { Link } from "@tanstack/react-router";
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

  // Show only main chapters in nav for clarity
  const navItems = SECTIONS.filter((s) =>
    ["dictee", "modeles", "live", "workflow", "prompts"].includes(s.id)
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="relative inline-flex h-6 w-6 rounded-full bg-gradient-to-br from-white via-white/60 to-white/20 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3)]" />
          <span className="font-semibold tracking-tight text-[16px]">Gleamer</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 mx-auto">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors whitespace-nowrap ${
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
          className="ml-auto md:ml-0 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-[13px] font-medium hover:opacity-90 transition shadow-[0_8px_30px_-10px_oklch(0.62_0.24_265_/_0.8)]"
        >
          Démarrer la formation
        </a>
      </div>
    </header>
  );
}
