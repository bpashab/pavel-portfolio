import type { Locale } from "../i18n/config";

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "telegram" | "mail";
}

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/bpashab",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pavel-basha-035685147/",
    icon: "linkedin",
  },
  {
    label: "Telegram",
    href: "https://t.me/boilair",
    icon: "telegram",
  },
  {
    label: "Email",
    href: "mailto:bpasha.public@gmail.com",
    icon: "mail",
  },
] satisfies SocialLink[];

const profiles = {
  uk: {
    name: "Павло Баша",
    role: "Senior Mobile Developer",
    location: "Україна",
    experience: "11 років у комерційній розробці",
    intro:
      "Проєктую та створюю цифрові продукти від першої ідеї до релізу: мобільні застосунки, вебсайти й системи, якими зручно користуватися щодня.",
    socials,
  },
  en: {
    name: "Pavel Basha",
    role: "Senior Mobile Developer",
    location: "Ukraine",
    experience: "11 years in commercial development",
    intro:
      "I design and build digital products from the first idea to launch: mobile applications, websites, and systems people can rely on every day.",
    socials,
  },
} as const satisfies Record<Locale, object>;

export function getProfile(locale: Locale) {
  return profiles[locale];
}
