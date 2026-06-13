"use client";

import { useState } from "react";
import Image from "next/image";
import { languages } from "./content";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#methodology", label: "Методы" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#form", label: "Контакты" },
];

export default function Nav() {
  const [activeLang, setActiveLang] = useState<string>("RU");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-6 px-5">
        {/* Logo — black/white banner */}
        <a href="#top" className="flex shrink-0 items-center">
          <Image
            src="/logo-square.avif"
            alt="Konstanta OÜ"
            width={48}
            height={48}
            className="brand-logo h-12 w-12 rounded-full object-cover"
            priority
          />
        </a>

        {/* Primary nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center rounded-md border border-line p-0.5">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`rounded px-2 py-1 font-mono text-xs transition-colors ${
                  activeLang === lang
                    ? "bg-brand text-on-brand"
                    : "text-faint hover:text-fg"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#form"
            className="hidden rounded-md bg-cta px-4 py-2 text-sm font-medium text-on-cta shadow-panel transition-colors hover:bg-cta-hover sm:inline-block"
          >
            Узнать потенциал
          </a>
        </div>
      </div>
    </header>
  );
}
