import { Lock, Cpu, Database } from "lucide-react";

// Phase 1: architecture / skeleton only. Full logic (Excel/CSV-driven) ships in Phase 2.
export default function CalculatorSkeleton() {
  return (
    <section id="calculator" className="border-b border-line">
      <div className="mx-auto max-w-container px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="wf-label mb-4">Калькулятор потенциала</p>
            <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Подбор программного пакета
            </h2>
            <p className="mt-4 text-lg text-muted">
              Архитектура закладывается сейчас. Полный расчёт по базе моделей
              подключается на втором этапе.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-raised px-3 py-1.5 font-mono text-xs text-faint">
            <Lock className="h-3.5 w-3.5" /> Phase 2
          </span>
        </div>

        {/* Locked preview of the calculator surface */}
        <div className="relative mt-10 overflow-hidden rounded-xl border border-dashed border-line-strong bg-subtle">
          <div className="grid gap-px bg-line md:grid-cols-3">
            {[
              { icon: Cpu, label: "Тип техники + блок управления" },
              { icon: Database, label: "База моделей (Excel / CSV)" },
              { icon: Lock, label: "Результат: рекомендованный пакет" },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="flex items-center gap-3 bg-subtle p-6 text-faint"
                >
                  <Icon className="h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm">{step.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 border-t border-dashed border-line-strong bg-surface/60 py-8 text-faint">
            <Lock className="h-4 w-4" />
            <span className="font-mono text-xs tracking-wide">
              Полная функциональность — этап 2
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
