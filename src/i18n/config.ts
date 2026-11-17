export const locales = ["uk", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(pathname: string, locale: Locale): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (/^\/(uk|en)(?=\/|$)/.test(normalizedPath)) {
    return normalizedPath.replace(/^\/(uk|en)(?=\/|$)/, `/${locale}`);
  }

  return `/${locale}${normalizedPath === "/" ? "/" : normalizedPath}`;
}
