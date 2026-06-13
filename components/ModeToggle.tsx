"use client";

import { useEffect, useState } from "react";
import { Layers } from "lucide-react";

type Mode = "wireframe" | "design";
const STORAGE_KEY = "konstanta-mode";

export default function ModeToggle() {
  const [mode, setMode] = useState<Mode>("wireframe");

  // Sync from the attribute the anti-flash script already set.
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-mode");
    if (current === "design" || current === "wireframe") setMode(current);
  }, []);

  function apply(next: Mode) {
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setMode(next);
  }

  const options: Mode[] = ["wireframe", "design"];

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      <div className="flex items-center gap-1 rounded-full border border-line bg-surface/90 p-1 shadow-lift backdrop-blur">
        <span className="flex items-center gap-1.5 pl-2 pr-1 font-mono text-[10px] uppercase tracking-widest text-faint">
          <Layers className="h-3.5 w-3.5" />
        </span>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => apply(opt)}
            aria-pressed={mode === opt}
            className={`rounded-full px-3 py-1.5 font-mono text-xs capitalize transition-colors ${
              mode === opt
                ? "bg-brand text-on-brand"
                : "text-faint hover:text-fg"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
