"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { formServices } from "./content";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  // Wireframe: no backend. Submit toggles the hi-tech confirmation state.
  // Real integration (Telegram bot + email duplicate) is wired in the build phase.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-md border border-line-strong bg-canvas px-3.5 py-2.5 text-fg placeholder:text-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  return (
    <section id="form" className="border-b border-line bg-subtle">
      <div className="mx-auto max-w-container px-5 py-20">
        <div className="mx-auto max-w-xl">
          {submitted ? (
            // Success state — hi-tech confirmation
            <div className="rounded-2xl border border-line-strong bg-surface p-10 text-center shadow-panel">
              <CheckCircle2
                strokeWidth={1.5}
                className="mx-auto h-14 w-14 text-brand"
              />
              <h2 className="mt-6 text-2xl font-semibold text-fg">
                Спасибо! Информация принята
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted">
                Наш специалист уже анализирует конфигурацию вашего автомобиля. Мы
                свяжемся с вами в ближайшее время.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 font-mono text-xs uppercase tracking-widest text-faint underline-offset-4 hover:text-fg hover:underline"
              >
                ← Отправить ещё раз (демо)
              </button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <span className="wf-label">Заявка</span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  Узнать потенциал по номеру машины
                </h2>
                <p className="mt-4 text-muted">
                  В Эстонии по регистрационному номеру можно узнать о машине всё
                  — не нужно вписывать сложные технические данные.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-5 rounded-2xl border border-line bg-surface p-7 shadow-panel"
              >
                {/* Registration number — required */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-fg">
                    Регистрационный номер <span className="text-cta">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="123 ABC"
                    className={inputClass}
                  />
                </div>

                {/* Phone — required */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-fg">
                    Номер телефона <span className="text-cta">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+372 ..."
                    className={inputClass}
                  />
                </div>

                {/* Services — checkboxes */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-fg">
                    Интересующие услуги
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {formServices.map((service) => (
                      <label
                        key={service}
                        className="flex cursor-pointer items-center gap-2.5 rounded-md border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-brand hover:text-fg"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-brand"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name — optional */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-fg">
                    Имя{" "}
                    <span className="font-normal text-faint">(по желанию)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Как к вам обращаться"
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-base font-medium text-on-cta shadow-panel transition-all hover:bg-cta-hover hover:shadow-lift"
                >
                  Отправить заявку
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="pt-1 text-center font-mono text-xs text-faint">
                  → Telegram-бот + дубль на email
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
