import { services } from "./content";

export default function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-container px-5 py-20">
        <div className="max-w-2xl">
          <p className="wf-label mb-4">Услуги</p>
          <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Инженерные решения
          </h2>
          <p className="mt-4 text-lg text-muted">
            Подача через физику и доказуемые параметры — без абстрактных
            обещаний экономии топлива.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="flex flex-col bg-surface p-7 transition-colors hover:bg-subtle"
            >
              <span className="font-mono text-sm font-medium text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-fg">
                {service.title}
              </h3>
              <p className="mt-2 text-muted">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
