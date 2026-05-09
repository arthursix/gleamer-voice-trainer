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
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-white/95 text-neutral-900 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] ${className}`}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-b from-neutral-100 to-neutral-50 border-b border-neutral-200">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        {title && (
          <div className="ml-3 text-[11px] text-neutral-500 tracking-tight font-medium truncate">
            {title}
          </div>
        )}
        {accent && (
          <div className="ml-auto text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
            {accent}
          </div>
        )}
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
