import { Link, useRouterState } from "@tanstack/react-router";
import { Mic } from "lucide-react";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/dictee", label: "1. Dictée naturelle" },
  { to: "/modeles", label: "2. Modèles" },
  { to: "/setup", label: "3. Setup" },
  { to: "/workflow", label: "4. Workflow" },
  { to: "/avance", label: "5. Aller plus loin" },
  { to: "/recap", label: "Récap" },
] as const;

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-glass border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
            <Mic className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-semibold tracking-tight">
            Gleamer <span className="text-muted-foreground font-normal">Voice</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-4 overflow-x-auto">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                  active
                    ? "bg-primary/20 text-foreground ring-1 ring-primary/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto hidden md:block text-xs text-muted-foreground">
          Formation · ~20 min
        </div>
      </div>
    </header>
  );
}
