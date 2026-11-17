import type { Locale } from "../i18n/config";
import type { Project } from "./projects";

type LocalizedProjectFields =
  | "title"
  | "eyebrow"
  | "imageAlt"
  | "shortDescription"
  | "introduction"
  | "challenge"
  | "solution"
  | "capabilities";

type ProjectTranslation = Pick<Project, LocalizedProjectFields>;

const englishProjects: Record<string, ProjectTranslation> = {
  metalcash: {
    title: "MetalCash",
    eyebrow: "Business website",
    imageAlt: "MetalCash website homepage",
    shortDescription:
      "A website for a Kyiv scrap metal collection service, with current pricing, a clear service journey, and a fast enquiry flow.",
    introduction:
      "MetalCash helps individuals and businesses estimate their metal, arrange collection, or find a drop-off point. The website turns a complicated offline service into a simple digital journey: check the price, understand the terms, and submit a request.",
    challenge:
      "Visitors need to understand within seconds which metals are accepted, what they are worth, and what to do next. At the same time, the business needs qualified enquiries without unnecessary calls and repeated questions.",
    solution:
      "A focused product presentation combines services, current prices, benefits, a three-step process, and a short enquiry form. Contact details, opening hours, and the collection point remain easy to reach throughout the page.",
    capabilities: [
      "Metal and service catalogue",
      "Current pricing on one page",
      "Collection or valuation enquiries",
      "A clear three-step process",
      "Contact details, hours, and location",
      "Responsive mobile experience",
    ],
  },
  calistudio: {
    title: "CaliStudio",
    eyebrow: "Product concept",
    imageAlt: "CaliStudio product concept homepage",
    shortDescription:
      "A mobile product presentation that transforms PDF training programs into a complete iOS and Android experience.",
    introduction:
      "CaliStudio shows how established calisthenics programs can work as a premium mobile product rather than a spreadsheet with links, bringing workouts, video, progress, and support into one experience.",
    challenge:
      "Structured programs, demo videos, and coaching notes already provide value, but a PDF forces athletes to switch between a file, video, and timer while remembering their own progress.",
    solution:
      "The concept brings the full training loop into one application: today’s session, exercise video, rest timer, skill path, and personal progress. It also presents a realistic phased roadmap for launching the product.",
    capabilities: [
      "Programs, weeks, and training sessions",
      "Video demonstrations and coaching cues",
      "Sets, repetitions, and automatic rest timer",
      "Progress, streaks, and skill paths",
      "Offline access and smart reminders",
      "A phased product roadmap",
    ],
  },
  foxycake: {
    title: "FoxyCake",
    eyebrow: "Product ecosystem",
    imageAlt: "FoxyCake concept homepage",
    shortDescription:
      "A concept for a bakery’s live mobile showcase and loyalty program, synchronized with a simple web back office.",
    introduction:
      "FoxyCake is a digital ecosystem concept for a bakery whose selection changes every day. Guests see the current showcase for a specific location, while the team manages products, availability, and promotions from a web dashboard.",
    challenge:
      "A static menu becomes outdated quickly: desserts sell out, new items appear during the day, and guests call to ask what is available. A traditional loyalty card also creates little personal connection.",
    solution:
      "The mobile app shows live availability, saves favourites, and announces when a dessert returns. A personal QR code tracks purchases and unlocks discount tiers, while the back office synchronizes every update across customers’ phones.",
    capabilities: [
      "A live showcase for each location",
      "Real-time product photos and availability",
      "Favourites and personalized push notifications",
      "QR profile and cumulative discounts",
      "Loyalty tiers and personal promotions",
      "Back office for products and rules",
    ],
  },
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "uk") return project;

  const translation = englishProjects[project.slug];
  return translation ? { ...project, ...translation } : project;
}
