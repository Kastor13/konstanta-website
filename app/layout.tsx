import type { Metadata } from "next";
import { Alumni_Sans, Onest, Martian_Mono } from "next/font/google";
import "./globals.css";

// Design-mode type system (basic-Cyrillic complete for RU, off the reflex-default list):
//   Alumni Sans  — condensed industrial display (headings)
//   Onest        — modern humanist grotesque (body)
//   Martian Mono — squared technical monospace (data readouts)
// Loaded always; applied only in design mode via --ff-* in globals.css.
const alumni = Alumni_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-alumni",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-martian",
  display: "swap",
});

// SEO scaffold — real per-language meta tags are layered on in the build phase.
export const metadata: Metadata = {
  title: "Konstanta OÜ — Чип-тюнинг и программная оптимизация двигателей в Таллине",
  description:
    "Konstanta OÜ — высокотехнологичная программная оптимизация и калибровка блоков управления (ECU). Индивидуальный подбор под конкретное железо. Таллин, с 2000 года.",
};

// Set the active mode before paint to avoid a flash.
// Priority: ?mode= URL override (shareable) → localStorage → default 'wireframe'.
const modeInitScript = `(function(){try{var u=new URLSearchParams(location.search).get('mode');var m=(u==='design'||u==='wireframe')?u:(localStorage.getItem('konstanta-mode')||'wireframe');document.documentElement.setAttribute('data-mode',m);localStorage.setItem('konstanta-mode',m);}catch(e){document.documentElement.setAttribute('data-mode','wireframe');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      data-mode="wireframe"
      className={`${alumni.variable} ${onest.variable} ${martian.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
