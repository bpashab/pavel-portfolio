import type { Locale } from "./config";

export const ui = {
  uk: {
    meta: {
      title: "Павло Баша — Mobile Developer & Digital Product Builder",
      description:
        "Портфоліо Павла Баші: мобільні продукти, вебсайти та цифрові рішення від ідеї до релізу.",
    },
    navigation: {
      home: "На головну",
      work: "Робота",
      projects: "Проєкти",
      contacts: "Контакти",
      allProjects: "Усі проєкти",
      language: "Мова сайту",
    },
    hero: {
      eyebrow: "Mobile · Web · Product",
      titleStart: "Цифрові продукти",
      titleAccent: "від ідеї",
      titleEnd: "до релізу.",
      cta: "Дивитися роботи",
      role: "Senior Mobile Developer",
      availability: "Доступний для нових проєктів",
    },
    work: {
      eyebrow: "Основна робота",
      title: "Створюю мобільні продукти, які працюють у реальному світі.",
      role: "Senior Mobile Developer",
      description:
        "11 років у комерційній розробці. Веду продукт крізь увесь цикл: структура й UX, iOS та Android, інтеграції, підготовка до Store і підтримка після запуску.",
      services: [
        {
          title: "Mobile",
          description:
            "Нативні та кросплатформні застосунки з продуманими сценаріями й надійною архітектурою.",
        },
        {
          title: "Web",
          description: "Швидкі промосайти, продуктові презентації та веб-інтерфейси для бізнесу.",
        },
        {
          title: "Product",
          description: "Від перевірки ідеї та MVP до системи, яку можна поступово масштабувати.",
        },
      ],
    },
    projects: {
      eyebrow: "Pet-проєкти та замовлення",
      title: "Вибрані роботи.",
      description:
        "Кожен проєкт починається з бізнес-задачі, а не з шаблону. Натисніть на картку, щоб побачити деталі рішення.",
      websites: "Вебсайти",
      projectCount: "проєкти",
      details: "Детальніше про",
      dragHint: "Тягніть, щоб переглянути",
      mobileEyebrow: "Незабаром",
      mobileTitle: "Мобільні застосунки",
      mobileDescription:
        "Готові продукти зʼявляться тут після публікації в App Store та Google Play.",
      inProgress: "У розробці",
    },
    contact: {
      eyebrow: "Контакти",
      title: "Є ідея?",
      accent: "Давайте поговоримо.",
      description:
        "Напишіть про продукт, сайт або мобільний застосунок. Відповім особисто й допоможу визначити найкоротший шлях до першої робочої версії.",
    },
    caseStudy: {
      openSite: "Відкрити сайт",
      about: "Про проєкт",
      challenge: "Задача",
      solution: "Рішення",
      capabilities: "Можливості",
      capabilitiesTitle: "Що працює всередині.",
      nextProject: "Наступний проєкт",
      descriptionLabel: "Опис проєкту",
    },
  },
  en: {
    meta: {
      title: "Pavel Basha — Mobile Developer & Digital Product Builder",
      description:
        "Pavel Basha’s portfolio: mobile products, websites, and digital solutions built from idea to launch.",
    },
    navigation: {
      home: "Home",
      work: "Work",
      projects: "Projects",
      contacts: "Contact",
      allProjects: "All projects",
      language: "Site language",
    },
    hero: {
      eyebrow: "Mobile · Web · Product",
      titleStart: "Digital products",
      titleAccent: "from idea",
      titleEnd: "to launch.",
      cta: "View my work",
      role: "Senior Mobile Developer",
      availability: "Available for new projects",
    },
    work: {
      eyebrow: "Primary work",
      title: "I build mobile products that work in the real world.",
      role: "Senior Mobile Developer",
      description:
        "11 years in commercial development. I take products through the entire cycle: structure and UX, iOS and Android, integrations, store delivery, and post-launch support.",
      services: [
        {
          title: "Mobile",
          description:
            "Native and cross-platform applications with thoughtful user journeys and reliable architecture.",
        },
        {
          title: "Web",
          description: "Fast marketing sites, product presentations, and practical web interfaces for businesses.",
        },
        {
          title: "Product",
          description: "From validating an idea and shipping an MVP to a system that can grow over time.",
        },
      ],
    },
    projects: {
      eyebrow: "Pet projects and client work",
      title: "Selected work.",
      description:
        "Every project starts with a business problem, not a template. Open a card to explore the thinking behind the solution.",
      websites: "Websites",
      projectCount: "projects",
      details: "Read more about",
      dragHint: "Drag to explore",
      mobileEyebrow: "Coming soon",
      mobileTitle: "Mobile applications",
      mobileDescription: "Finished products will appear here after their App Store and Google Play releases.",
      inProgress: "In progress",
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an idea?",
      accent: "Let’s talk.",
      description:
        "Tell me about your product, website, or mobile application. I will reply personally and help identify the shortest path to a useful first release.",
    },
    caseStudy: {
      openSite: "Visit website",
      about: "About the project",
      challenge: "Challenge",
      solution: "Solution",
      capabilities: "Capabilities",
      capabilitiesTitle: "What works inside.",
      nextProject: "Next project",
      descriptionLabel: "Project description",
    },
  },
} as const satisfies Record<Locale, object>;

export function getUi(locale: Locale) {
  return ui[locale];
}
