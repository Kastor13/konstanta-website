import { Check } from "lucide-react";
import { methodology } from "./content";

export default function Methodology() {
  return (
    <section id="methodology" className="border-b border-line bg-subtle">
      <div className="mx-auto max-w-container px-5 py-20">
        <div className="max-w-2xl">
          <p className="wf-label mb-4">Методы и оборудование</p>
          <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Только безопасные протоколы и лицензионное железо
          </h2>
          <p className="mt-4 text-lg text-muted">
            Никакого кустарного оборудования — полная сохранность штатной
            электроники на системном уровне.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {methodology.map((group) => (
            <div
              key={group.heading}
              className="rounded-xl border border-line bg-surface p-7 shadow-panel"
            >
              <h3 className="text-lg font-semibold text-fg">{group.heading}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
