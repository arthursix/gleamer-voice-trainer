import { ReactNode } from "react";

/**
 * Mac-style window chrome to frame product screenshots / mockups.
 */
export function MacWindow({
  title,
  children,
  accent,
  className = "",
}: {
  title?: string;
  accent?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mac-reflect relative rounded-2xl overflow-hidden border border-white/10 bg-white/95 text-neutral-900 shadow-[0_50px_140px_-40px_rgba(0,0,0,0.85),0_8px_24px_-12px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div className="relative flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-b from-neutral-100 to-neutral-50 border-b border-neutral-200">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_0_0.5px_rgba(0,0,0,0.1)]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_0_0.5px_rgba(0,0,0,0.1)]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_0_0.5px_rgba(0,0,0,0.1)]" />
        {title && (
          <div className="ml-3 text-[11px] text-neutral-500 tracking-tight font-medium truncate">
            {title}
          </div>
        )}
        {accent && (
          <div className="ml-auto inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {accent}
          </div>
        )}
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
