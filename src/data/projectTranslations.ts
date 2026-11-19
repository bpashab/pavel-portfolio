import type { Locale } from "../i18n/config";
import type { Project } from "./projects";

type LocalizedProjectFields =
  | "title"
  | "eyebrow"
  | "imageAlt"
  | "shortDescription"
  | "overviewLead"
  | "introduction"
  | "highlights"
  | "challenge"
  | "solution"
  | "capabilities"
  | "sections";

type ProjectTranslation = Pick<Project, LocalizedProjectFields>;

const englishProjects: Record<string, ProjectTranslation> = {
  metalcash: {
    title: "MetalCash",
    eyebrow: "Website + Admin Panel + Bot",
    imageAlt: "MetalCash website homepage",
    shortDescription:
      "A website for a Kyiv scrap metal collection service with a custom pricing admin panel and instant Telegram lead alerts.",
    overviewLead:
      "A complete digital setup for a scrap metal collection business: a public customer website, a custom admin panel, and automated Telegram lead routing.",
    introduction:
      "MetalCash turns a complex offline service into a straightforward customer flow: check live scrap prices, review pickup or drop-off terms, and leave a request in seconds. Behind the scenes, the owner updates pricing, metal categories, phone numbers, and schedules directly without developer.",
    highlights: [
      {
        label: "System scope",
        value: "Public website, password-protected admin panel, and a team Telegram bot",
      },
      {
        label: "Content control",
        value: "Live edits for prices, metal items, phone numbers, hours, and update dates",
      },
      {
        label: "Lead routing",
        value: "Instant customer enquiries delivered straight to the managers’ Telegram group",
      },
    ],
    challenge:
      "Visitors need to see current scrap metal prices, understand pickup conditions, and submit a request within seconds. At the same time, purchase rates, phone numbers, and operating hours (especially during power outages) change frequently — the business needed a way to update the live site instantly without a developer while routing new requests straight to managers.",
    solution:
      "Built an integrated setup combining a fast marketing site, a custom web admin panel, and a Telegram bot. Visitors browse accepted metals, transparent pricing, a clear three-step process, and a short enquiry form. From the admin panel, the owner updates price ranges, catalog items and their display order, the price update date, phone numbers, messenger buttons, and schedules in real time. Every submitted enquiry is sent via Telegram bot directly into the team’s group so a manager can process it and call the client back right away.",
    capabilities: [
      "Custom admin panel for editing live website content without redeploying",
      "Management of prices, metal items, display order, and the price update date",
      "Configuration of phone numbers, mobile carriers, and Viber, Telegram, and WhatsApp buttons",
      "Editable site title, working hours, quick status badges, address, and map coordinates",
      "Direct lead delivery via Telegram bot into the managers’ group for fast follow-up",
      "Responsive public metal and service catalogue with live pricing and a quick request form",
    ],
    sections: [
      {
        eyebrow: "Admin panel",
        title: "Full control over pricing and site content without redeploys.",
        description:
          "A protected web dashboard lets the owner manage daily operations independently. Any change to metal rates, catalog items, phone numbers, or schedules goes live immediately after saving.",
        bullets: [
          "Pricing & metal catalogue: add or remove items, set min/max rates or “Price on request”, pick item visuals, reorder cards, and set the “last updated” date.",
          "Phones & messengers: manage multiple phone numbers, carrier labels, ordering, and active Viber, Telegram, and WhatsApp shortcuts.",
          "Core site settings: update brand name, full and short working hours, drop-off address, Google Maps link, and map coordinates.",
          "Password-protected sign-in showing the latest save timestamp and a quick link to the live website.",
        ],
        screenshots: [
          {
            src: "/images/projects/metalcash/admin-prices-contacts.png",
            alt: "MetalCash admin panel: editing phone numbers, messengers, metal items, prices, and update date",
            caption: "Managing phone numbers, messenger buttons, metal items, price ranges, and update date",
            width: 1024,
            height: 597,
          },
          {
            src: "/images/projects/metalcash/admin-general.png",
            alt: "MetalCash admin panel: core website settings, working hours, address, and map coordinates",
            caption: "Editing core site details, working schedule, collection address, and Google Maps coordinates",
            width: 1024,
            height: 597,
          },
          {
            src: "/images/projects/metalcash/admin-login.png",
            alt: "MetalCash admin panel login screen",
            caption: "Protected sign-in to the content management panel",
            width: 1024,
            height: 617,
          },
        ],
      },
      {
        eyebrow: "Lead automation",
        title: "Instant enquiries routed straight to a Telegram group.",
        description:
          "Website requests never sit unread in an inbox: MetalCashBot posts a structured notification directly to the designated Telegram group so a manager can claim the lead and contact the customer right away.",
        bullets: [
          "Direct delivery into the team’s operational Telegram group with zero delay.",
          "Structured lead summary with a tap-to-call phone number, client name, and comment.",
          "Automatic metadata including submission timestamp, locale, and source page link.",
        ],
        screenshots: [
          {
            src: "/images/projects/metalcash/telegram-bot-leads.png",
            alt: "MetalCashBot lead notifications inside a Telegram group",
            caption: "MetalCashBot messages in the team group with phone number, client name, and comment",
            width: 1024,
            height: 977,
          },
        ],
      },
    ],
  },
  calistudio: {
    title: "CaliStudio",
    eyebrow: "Product concept",
    imageAlt: "CaliStudio product concept homepage",
    shortDescription:
      "A mobile product presentation that transforms PDF training programs into a complete iOS and Android experience.",
    overviewLead:
      "A mobile product concept for calisthenics coaching that replaces static PDF guides with a guided daily workout experience.",
    introduction:
      "CaliStudio demonstrates how established coaching programs can work as a cohesive iOS and Android application rather than a spreadsheet of external video links — combining scheduled sessions, form cues, rest timers, and personal progress tracking.",
    highlights: [
      {
        label: "Format",
        value: "Interactive product presentation and mobile UX concept for iOS & Android",
      },
      {
        label: "Core shift",
        value: "Moving from scattered PDF files and video links to one guided workout view",
      },
      {
        label: "Rollout plan",
        value: "Practical phased product roadmap from focused MVP to full release",
      },
    ],
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
    overviewLead:
      "A connected digital ecosystem for a bakery chain: a live mobile showcase with guest loyalty and a lightweight web back office for staff.",
    introduction:
      "Bakery assortments change throughout the day as fresh batches come out of the oven and favourites sell out. FoxyCake keeps each location’s live menu synced with customers’ phones while pairing daily discovery with personal loyalty rewards.",
    highlights: [
      {
        label: "Ecosystem",
        value: "Customer-facing mobile app paired with a staff web back office",
      },
      {
        label: "Live menu",
        value: "Per-location dessert availability, photos, and back-in-stock alerts",
      },
      {
        label: "Retention",
        value: "Personal QR loyalty card, cumulative discount tiers, and saved favourites",
      },
    ],
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
