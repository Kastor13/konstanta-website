import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { languages } from "./content";

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-container px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/logo-square.avif"
              alt="Konstanta OÜ"
              width={80}
              height={80}
              className="brand-logo h-20 w-20 rounded-full object-cover"
            />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Программная оптимизация и калибровка блоков управления. Constant
              Quality, с 2000 года.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <p className="wf-label mb-4">Контакты</p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand" /> +372 0000 0000
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand" /> info@konstanta.ee
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand" /> Таллин, Эстония
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <p className="wf-label mb-4">Язык сайта</p>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-faint">Phase 2: FI · SE</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Konstanta OÜ. Все права защищены.
          </p>
          <p className="wf-label wf-only">Wireframe · структура для согласования</p>
        </div>
      </div>
    </footer>
  );
}
