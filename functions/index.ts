type RequestWithCloudflare = Request & {
  cf?: {
    country?: string;
  };
};

interface PagesContext {
  request: RequestWithCloudflare;
}

function getSavedLocale(cookieHeader: string | null): "uk" | "en" | undefined {
  const locale = cookieHeader?.match(/(?:^|;\s*)site_locale=(uk|en)(?:;|$)/)?.[1];
  return locale === "uk" || locale === "en" ? locale : undefined;
}

export function onRequest({ request }: PagesContext): Response {
  const url = new URL(request.url);
  const savedLocale = getSavedLocale(request.headers.get("Cookie"));
  const country = request.headers.get("CF-IPCountry") ?? request.cf?.country;
  const locale = savedLocale ?? (country === "UA" ? "uk" : "en");

  url.pathname = `/${locale}/`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      "Cache-Control": "private, no-store",
      Vary: "Cookie",
    },
  });
}
