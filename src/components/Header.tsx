import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NAV = [
  { id: "features", label: "Fonctionnalités" },
  { id: "comparison", label: "Avant / Après" },
  { id: "how", label: "Comment ça marche" },
  { id: "setup", label: "Setup" },
];

export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10,10,15,0)", "rgba(10,10,15,0.9)"],
  );
  const border = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.06)"],
  );

  return (
    <motion.header
      style={{
        background: bg,
        borderBottom: "1px solid",
        borderBottomColor: border,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <span
            className="h-7 w-7 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #4F6EF7, #00D4FF)",
              boxShadow: "0 4px 16px rgba(79,110,247,0.5)",
            }}
          />
          <span className="font-bold text-[16px] tracking-tight text-gradient-hero">
            Gleamer Voice
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 mx-auto">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-[14px] text-[#8B92A5] hover:text-white transition-colors group"
            >
              {item.label}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] w-full origin-left"
                style={{
                  background: "linear-gradient(90deg, #4F6EF7, #00D4FF)",
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </a>
          ))}
        </nav>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="#hero"
          className="ml-auto md:ml-0 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-[13px] font-semibold text-white"
          style={{
            background: "#4F6EF7",
            boxShadow: "0 4px 16px rgba(79,110,247,0.4)",
          }}
        >
          Commencer
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.a>
      </div>
    </motion.header>
  );
}
