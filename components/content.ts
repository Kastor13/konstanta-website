// Single source of content for the wireframe (RU — default site language).
// In the build phase this moves to the CMS / i18n layer (RU / EE / EN).

import { Sailboat, Car, Truck, Tractor } from "lucide-react";
import type { SVGProps } from "react";
import MotorcycleIcon from "./MotorcycleIcon";

type IconComponent = React.ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }>;

export type Category = {
  id: string;
  label: string;
  icon: IconComponent;
  /** Subhead variant shown when this category is active */
  tagline: string;
};

// Ordered by physical vehicle size (client requirement). "car" is default-active.
export const categories: Category[] = [
  {
    id: "moto",
    label: "Мотоциклы",
    icon: MotorcycleIcon,
    tagline: "Раскрываем характер мотора без потери ресурса.",
  },
  {
    id: "boat",
    label: "Катера",
    icon: Sailboat,
    tagline: "Оптимизация морских ДВС под реальную нагрузку.",
  },
  {
    id: "car",
    label: "Легковые авто",
    icon: Car,
    tagline:
      "Индивидуальная калибровка под поколение блока управления вашего авто.",
  },
  {
    id: "truck",
    label: "Грузовые",
    icon: Truck,
    tagline:
      "Оптимизация коммерческого транспорта Euro 6 — тяга, эластичность, ресурс.",
  },
  {
    id: "agro",
    label: "Сельхозтехника",
    icon: Tractor,
    tagline: "Максимальное тяговое усилие на моточас для агросектора.",
  },
];

export type Service = {
  title: string;
  body: string;
};

// Engineering language — no direct "EGR off / DPF off" wording (client requirement).
export const services: Service[] = [
  {
    title: "Программная оптимизация мощности",
    body: "Stage 1 / Stage 2. Сглаживание полки крутящего момента, эластичность, рост КПД на основе параметров ECU.",
  },
  {
    title: "Коррекция теплового баланса",
    body: "Оптимизация логики систем рециркуляции и фильтрации для работы в правильном температурном режиме. Безопасно для техосмотра.",
  },
  {
    title: "Оптимизация систем AdBlue",
    body: "Корректная работа систем нейтрализации с сохранением надёжности и штатной диагностики.",
  },
  {
    title: "Индивидуальная калибровка под VIN",
    body: "Точечная настройка под конкретный процессор и тип техники. Универсальных прошивок нет — только адресная работа.",
  },
];

export type MethodGroup = {
  heading: string;
  items: string[];
};

export const methodology: MethodGroup[] = [
  {
    heading: "Методы работы",
    items: [
      "OBD — через штатный разъём",
      "Bench Mode — напрямую через разъём ECU",
      "Boot / JTAG — для защищённых процессоров",
    ],
  },
  {
    heading: "Оборудование",
    items: [
      "FLEX, KESS3 — лицензионные программаторы",
      "Официальные дилерские интерфейсы",
      "Диагностические комплексы экспертного уровня",
    ],
  },
  {
    heading: "Технологии",
    items: [
      "StageX — ИИ-распознавание карт калибровок",
      "Глобальная сеть инженеров и лабораторий",
      "Индивидуальные решения под каждый VIN",
    ],
  },
];

// Dynamic ECU background — live parameter ticker (wireframe: static rotation).
export const liveParams: string[] = [
  'Scania 500 S "Super"  →  Оптимизация КПД  →  Стабилизация полки Нм под нагрузкой',
  "Volvo FH 460 I-Save  →  Настройка Turbo Compound  →  Повышение эластичности",
  "BMW 530d (G30/G60)  →  Устранение турбоямы  →  Коррекция калибровок впрыска",
  "John Deere 8R 410  →  Оптимизация систем  →  Максимальное тяговое усилие",
  "Volvo XC90 B5 (Mild-Hybrid)  →  Оптимизация софта ДВС  →  Рост эффективности",
];

// Service checkboxes for the lead form (full list comes from client later).
export const formServices: string[] = [
  "Stage 1",
  "Stage 2",
  "AdBlue off",
  "EGR off",
  "DPF off",
  "Другое / консультация",
];

export const languages = ["RU", "EE", "EN"] as const;
