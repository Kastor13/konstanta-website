"use client";

import { categories } from "./content";

type Props = {
  activeId: string;
  onSelect: (id: string) => void;
};

export default function CategorySelector({ activeId, onSelect }: Props) {
  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <span className="wf-label">Выберите тип техники</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const active = cat.id === activeId;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              aria-pressed={active}
              className={`group flex flex-col items-center gap-3 rounded-lg border px-4 py-6 transition-all ${
                active
                  ? "border-brand bg-brand text-on-brand shadow-lift"
                  : "border-line bg-surface text-faint hover:border-brand hover:text-fg"
              }`}
            >
              <Icon
                strokeWidth={1.5}
                className={`h-8 w-8 transition-transform group-hover:scale-105 ${
                  active ? "text-on-brand" : "text-faint group-hover:text-fg"
                }`}
              />
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
