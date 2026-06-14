"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Cpu } from "lucide-react";
import CategorySelector from "./CategorySelector";
import SignalField from "./SignalField";
import { categories, liveParams } from "./content";

export default function Hero() {
  const [activeId, setActiveId] = useState("car");
  const [paramIndex, setParamIndex] = useState(0);

  const activeCategory =
    categories.find((c) => c.id === activeId) ?? categories[2];

  // Dynamic ECU background — live parameter rotation.
  useEffect(() => {
    const t = setInterval(() => {
      setParamIndex((i) => (i + 1) % liveParams.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Radial brand aura — design mode only */}
      <div aria-hidden className="hero-aura pointer-events-none absolute inset-0" />

      {/* ECU circuit grid — color + alpha driven by theme tokens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--grid) / var(--grid-alpha)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--grid) / var(--grid-alpha)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      {/* Animated signal pulses travelling up the ECU grid — design mode only */}
      <SignalField />

      <span className="wf-label wf-only absolute right-4 top-4 z-10">
        <Cpu className="h-3.5 w-3.5" /> Фон: интерактивная микросхема ECU
      </span>

      <div className="relative mx-auto max-w-container px-5 py-20 lg:py-28">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Высокотехнологичная оптимизация и программная настройка двигателей
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted">
            Инженерные решения: повышаем КПД, оптимизируем работу систем и
            раскрываем реальный потенциал техники на основе параметров блока
            управления.
          </p>
        </div>

        {/* Live parameter ticker — fixed width sized to longest string */}
        <div className="mx-auto mt-10 w-fit rounded-lg border border-line bg-subtle px-6 py-3 shadow-panel">
          <div className="flex items-center gap-3">
            <span className="live-dot flex h-2 w-2 shrink-0 rounded-full bg-faint" />
            {/* All strings share one grid cell — width stays constant, no jumping */}

            <div className="grid justify-items-center">
              {liveParams.map((param, i) => (
                <p
                  key={i}
                  className={`col-start-1 row-start-1 whitespace-nowrap font-mono text-xs text-muted transition-opacity duration-500 sm:text-sm ${
                    i === paramIndex ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  {param}
                </p>
              ))}
            </div>
            <span className="live-dot flex h-2 w-2 shrink-0 rounded-full bg-faint" />
          </div>
        </div>

        {/* Vehicle category selector */}
        <div className="mx-auto mt-12 max-w-4xl">
          <CategorySelector activeId={activeId} onSelect={setActiveId} />
          <p className="mt-5 text-center text-base text-fg">
            {activeCategory.tagline}
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#form"
            className="inline-flex items-center gap-2 rounded-md bg-cta px-6 py-3 text-base font-medium text-on-cta shadow-panel transition-all hover:bg-cta-hover hover:shadow-lift"
          >
            Узнать потенциал и подобрать пакет
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
