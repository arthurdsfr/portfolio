"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import {
  type Locale,
  useLanguage,
} from "@/components/language-provider";
import {
  financialProjects,
  otherProjects,
  type ProjectEntry,
} from "@/data/projects";

type Localized<T> = Record<Locale, T>;

type SkillGroup = {
  title: Localized<string>;
  accent: string;
  items: Localized<string[]>;
  note?: Localized<string>;
};

type EducationEntry = {
  institution: string;
  degree: Localized<string>;
  period: string;
  ranking: Localized<string>;
  location: Localized<string>;
};

type Reference = {
  name: string;
  role: Localized<string>;
  company: string;
  quote: Localized<React.ReactNode>;
};

type OtherInterest = {
  title: Localized<string>;
  description: Localized<string>;
};

const navigation = {
  en: [
    { label: "About", href: "#about" },
    { label: "Profile", href: "#nutshell" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  fr: [
    { label: "À propos", href: "#about" },
    { label: "Profil", href: "#nutshell" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

const skillGroups: SkillGroup[] = [
  {
    title: {
      en: "Programming Languages",
      fr: "Langages de programmation",
    },
    accent: "bg-[#6b7280]",
    items: {
      en: [
        "Python (Expert)",
        "R (Advanced)",
        "SQL / NoSQL (Advanced)",
        "VBA (Intermediate)",
        "Java (Intermediate)",
      ],
      fr: [
        "Python (Expert)",
        "R (Avancé)",
        "SQL / NoSQL (Avancé)",
        "VBA (Intermédiaire)",
        "Java (Intermédiaire)",
      ],
    },
  },
  {
    title: {
      en: "AI & Data Science",
      fr: "IA & Data Science",
    },
    accent: "bg-[#475569]",
    items: {
      en: [
        "Machine Learning (random forest, SVM)",
        "Deep Learning (Transformers, CNN, RNN)",
        "Supervised and reinforcement learning",
        "Time series",
      ],
      fr: [
        "Machine Learning (random forest, SVM)",
        "Deep Learning (Transformers, CNN, RNN)",
        "Apprentissage supervisé et par renforcement",
        "Séries temporelles",
      ],
    },
    note: {
      en: "Libraries: TensorFlow, PyTorch, scikit-learn, Hugging Face",
      fr: "Bibliothèques : TensorFlow, PyTorch, scikit-learn, Hugging Face",
    },
  },
  {
    title: {
      en: "Data Analysis",
      fr: "Analyse de données",
    },
    accent: "bg-[#64748b]",
    items: {
      en: [
        "Exploratory Data Analysis (EDA)",
        "Statistical modeling and regression",
        "Data visualization",
      ],
      fr: [
        "Analyse exploratoire des données (EDA)",
        "Modélisation statistique et régression",
        "Visualisation de données",
      ],
    },
    note: {
      en: "Libraries: yfinance, pandas, matplotlib, seaborn",
      fr: "Bibliothèques : yfinance, pandas, matplotlib, seaborn",
    },
  },
  {
    title: {
      en: "Mathematics",
      fr: "Mathématiques",
    },
    accent: "bg-[#7c8695]",
    items: {
      en: [
        "Probabilities and statistics (frequentist and Bayesian statistics)",
        "Linear algebra (PCA, covariance analysis)",
        "Combinatorial optimisation (heuristic approaches)",
        "Advanced mathematics for machine learning",
      ],
      fr: [
        "Probabilités et statistiques (fréquentistes et bayésiennes)",
        "Algèbre linéaire (PCA, analyse de covariance)",
        "Optimisation combinatoire (approches heuristiques)",
        "Mathématiques avancées pour le machine learning",
      ],
    },
  },
  {
    title: {
      en: "Languages",
      fr: "Langues",
    },
    accent: "bg-[#5f6b7a]",
    items: {
      en: ["French (Native)", "English (C1)"],
      fr: ["Français (natif)", "Anglais (C1)"],
    },
    note: {
      en: "English certification: TOEIC 930/990",
      fr: "Certification d'anglais : TOEIC 930/990",
    },
  },
  {
    title: {
      en: "Collaboration",
      fr: "Collaboration",
    },
    accent: "bg-[#4b5563]",
    items: {
      en: ["GitHub", "Agile"],
      fr: ["GitHub", "Agile"],
    },
  },
];

const educationEntries: EducationEntry[] = [
  {
    institution: "IMT Mines Ales",
    degree: {
      en: "General Engineering (AI & Data Science Specialization)",
      fr: "Ingénierie généraliste (spécialisation IA & Data Science)",
    },
    period: "2023 - 2026",
    ranking: {
      en: "14th / 171 among French engineering schools (L'Etudiant 2025)",
      fr: "14e / 171 parmi les écoles d'ingénieurs françaises (L'Étudiant 2025)",
    },
    location: {
      en: "Ales, France",
      fr: "Alès, France",
    },
  },
  {
    institution: "La Prat's",
    degree: {
      en: "Preparatory Classes for Grandes Ecoles (CPGE)",
      fr: "Classes préparatoires aux grandes écoles (CPGE)",
    },
    period: "2021 - 2023",
    ranking: {
      en: "17th / 69 among PT French CPGE (L'Etudiant 2025)",
      fr: "17e / 69 parmi les CPGE PT françaises (L'Étudiant 2025)",
    },
    location: {
      en: "Cluny, France",
      fr: "Cluny, France",
    },
  },
  {
    institution: "Lycee Saint-Thomas d'Aquin",
    degree: {
      en: "High school diploma (Mathematics and Physics)",
      fr: "Baccalauréat (mathématiques et physique)",
    },
    period: "2018 - 2021",
    ranking: {
      en: "160th / 2720 among French high schools (L'Etudiant 2025)",
      fr: "160e / 2720 parmi les lycées français (L'Étudiant 2025)",
    },
    location: {
      en: "Lyon, France",
      fr: "Lyon, France",
    },
  },
];

const experienceEntries = [
  {
    slug: "thales",
    company: "Thales",
    logo: {
      src: "/logos/thales.png",
      alt: "Thales logo",
    },
    period: {
      en: "March 2026 - August 2026",
      fr: "Mars 2026 - Août 2026",
    },
    location: {
      en: "Paris, France",
      fr: "Paris, France",
    },
    role: {
      en: "AI Algorithm Engineering Intern",
      fr: "Stagiaire ingénieur en algorithmes d'IA",
    },
  },
  {
    slug: "zettabyte",
    company: "ZettaByte",
    logo: {
      src: "/logos/zettabyte.jpg",
      alt: "ZettaByte logo",
    },
    period: {
      en: "May 2025 - August 2025",
      fr: "Mai 2025 - Août 2025",
    },
    location: {
      en: "Singapore, Singapore",
      fr: "Singapour, Singapour",
    },
    role: {
      en: "AI Engineer Intern",
      fr: "Stagiaire Ingénieur IA",
    },
  },
  {
    slug: "sanofi",
    company: "Sanofi",
    logo: {
      src: "/logos/sanofi.png",
      alt: "Sanofi logo",
    },
    period: {
      en: "Nov. 2024 - Dec. 2024",
      fr: "Nov. 2024 - Déc. 2024",
    },
    location: {
      en: "Lyon, France",
      fr: "Lyon, France",
    },
    role: {
      en: "Assistant Project Manager",
      fr: "Assistant chef de projet",
    },
  },
];

const references: Reference[] = [
  {
    name: "Doris Cadar",
    role: {
      en: "Ex-Tutor",
      fr: "Ancienne tutrice",
    },
    company: "Sanofi",
    quote: {
      en: (
        <>
          I had the pleasure of working with Arthur Desfrancais for a month at
          Sanofi. He quickly grasped the project objective and key missions of our
          department. During the internship, he brought{" "}
          <strong className="font-semibold text-[#171c24]">
            creative collaboration ideas
          </strong>
          ,{" "}
          <strong className="font-semibold text-[#171c24]">
            strong financial acumen
          </strong>{" "}
          and understanding of digital transformation. Arthur is{" "}
          <strong className="font-semibold text-[#171c24]">
            proactive, insightful, and hard-working
          </strong>
          . I have no doubt he will excel in future endeavors and I highly
          recommend him.
        </>
      ),
      fr: (
        <>
          J&apos;ai eu le plaisir de travailler avec Arthur Desfrancais pendant un
          mois chez Sanofi. Il a très rapidement compris l&apos;objectif du projet
          et les missions clés de notre département. Durant son stage, il a apporté{" "}
          <strong className="font-semibold text-[#171c24]">
            des idées de collaboration pertinentes
          </strong>
          ,{" "}
          <strong className="font-semibold text-[#171c24]">
            une vraie sensibilité financière
          </strong>{" "}
          et une bonne compréhension de la transformation digitale. Arthur est{" "}
          <strong className="font-semibold text-[#171c24]">
            proactif, perspicace et travailleur
          </strong>
          . Je n&apos;ai aucun doute sur le fait qu&apos;il réussira dans ses futurs
          projets et je le recommande vivement.
        </>
      ),
    },
  },
  {
    name: "Chris Mugnier",
    role: {
      en: "CTO",
      fr: "CTO",
    },
    company: "ZettaByte",
    quote: {
      en: (
        <>
          It is with great pleasure that we recommend Arthur Desfrancais for his{" "}
          <strong className="font-semibold text-[#171c24]">
            exceptional skills and abilities
          </strong>
          . He has proven to be an{" "}
          <strong className="font-semibold text-[#171c24]">
            enthusiastic, proactive individual
          </strong>{" "}
          with excellent adaptability skills. He quickly integrated into our team
          and{" "}
          <strong className="font-semibold text-[#171c24]">
            significantly contributed
          </strong>{" "}
          to the projects he was involved in. He has{" "}
          <strong className="font-semibold text-[#171c24]">
            immense potential to grow and thrive
          </strong>{" "}
          in a dynamic, collaborative work environment.
        </>
      ),
      fr: (
        <>
          C&apos;est avec grand plaisir que nous recommandons Arthur Desfrancais
          pour{" "}
          <strong className="font-semibold text-[#171c24]">
            la qualité de ses compétences et de ses capacités
          </strong>
          . Il s&apos;est montré{" "}
          <strong className="font-semibold text-[#171c24]">
            enthousiaste et proactif
          </strong>
          , avec une excellente capacité d&apos;adaptation. Il s&apos;est intégré
          rapidement à notre équipe et a{" "}
          <strong className="font-semibold text-[#171c24]">
            contribué de manière significative
          </strong>{" "}
          aux projets sur lesquels il a travaillé. Il possède{" "}
          <strong className="font-semibold text-[#171c24]">
            un potentiel remarquable pour progresser et réussir
          </strong>{" "}
          dans un environnement dynamique et collaboratif.
        </>
      ),
    },
  },
];

const otherInterests: OtherInterest[] = [
  {
    title: {
      en: "Soccer",
      fr: "Football",
    },
    description: {
      en: "Played at the highest regional level from age 6 to 20, and served as team captain from age 14.",
      fr: "Pratique au plus haut niveau régional de 6 à 20 ans, avec un rôle de capitaine à partir de 14 ans.",
    },
  },
  {
    title: {
      en: "Gym",
      fr: "Musculation",
    },
    description: {
      en: "Training three times a week for two years.",
      fr: "Entraînement trois fois par semaine depuis deux ans.",
    },
  },
];

type ProfileTabKey = "skills" | "education" | "experience";
type ContactTabKey = "contact" | "references" | "other";

const profileTabs = {
  en: [
    { key: "skills" as const, label: "Skills" },
    { key: "education" as const, label: "Education" },
    { key: "experience" as const, label: "Experience" },
  ],
  fr: [
    { key: "skills" as const, label: "Compétences" },
    { key: "education" as const, label: "Formation" },
    { key: "experience" as const, label: "Expérience" },
  ],
};

const contactTabs = {
  en: [
    { key: "contact" as const, label: "Contact" },
    { key: "references" as const, label: "References" },
    { key: "other" as const, label: "Other" },
  ],
  fr: [
    { key: "contact" as const, label: "Contact" },
    { key: "references" as const, label: "Références" },
    { key: "other" as const, label: "Autres" },
  ],
};

const uiLabels = {
  en: {
    intro: "Introduction",
    profile: "Profile",
    selectedWork: "Selected Work",
    additionalWork: "Additional Work",
    contactEyebrow: "Contact",
    aboutTitle: "About me",
    profileTitle: "Me in a nutshell",
    financialProjectsTitle: "Financial projects",
    otherProjectsTitle: "Other projects",
    contactTitle: "Let's get in touch",
    profileCardTitle: "Profile",
    profileRole: "General Engineer",
    keywords: ["AI & Data Science", "Finance", "Quantitative profile"],
    email: "Email",
    linkedin: "LinkedIn",
    phone: "Phone",
    disclaimerLabel: "Disclaimer:",
    disclaimer:
      "Although some of these projects are intended for personal use or curiosity, I maintain critical distance from the results and remain aware of their limitations. They are primarily opportunities to explore, learn, and experiment rather than offer definitive conclusions.",
    projectCta: "Open project note",
    referenceLabel: "Professional Reference",
    interestLabel: "Personal Interest",
  },
  fr: {
    intro: "Introduction",
    profile: "Profil",
    selectedWork: "Travaux sélectionnés",
    additionalWork: "Travaux complémentaires",
    contactEyebrow: "Contact",
    aboutTitle: "À propos",
    profileTitle: "En bref",
    financialProjectsTitle: "Projets financiers",
    otherProjectsTitle: "Autres projets",
    contactTitle: "Restons en contact",
    profileCardTitle: "Profil",
    profileRole: "Ingénieur généraliste",
    keywords: ["IA & Data Science", "Finance", "Profil quantitatif"],
    email: "Email",
    linkedin: "LinkedIn",
    phone: "Téléphone",
    disclaimerLabel: "Avertissement :",
    disclaimer:
      "Même si certains de ces projets ont été conçus par curiosité ou pour un usage personnel, je garde toujours une distance critique vis-à-vis des résultats et reste attentif à leurs limites. Ces projets sont avant tout des occasions d'explorer, d'apprendre et d'expérimenter, et non de fournir des conclusions définitives.",
    projectCta: "Ouvrir la fiche projet",
    referenceLabel: "Référence professionnelle",
    interestLabel: "Centre d'intérêt",
  },
} as const;

function Banner({ locale }: { locale: Locale }) {
  return (
    <section className="border-b border-[#2c3440] bg-[#12161c] text-[#f8fafc]">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-14 lg:py-18">
        <div className="overflow-hidden">
          <p
            className="leading-none text-[#f8fafc]"
            style={{
              fontFamily: '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
              fontSize: "clamp(7rem, 19vw, 15rem)",
              letterSpacing: "0",
              transform: "translateX(-0.06em)",
            }}
          >
            AD
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p
            className="text-[clamp(2rem,4.2vw,4.7rem)] leading-none text-[#f8fafc]"
            style={{
              fontFamily: '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
              letterSpacing: "0.18em",
            }}
          >
            ARTHUR DESFRANCAIS
          </p>
          <div className="mt-4 h-px w-full max-w-[640px] bg-[#64748b]" />
          <p className="mt-5 font-mono text-sm uppercase tracking-[0.5em] text-[#cbd5e1]">
            {locale === "fr" ? "Portfolio" : "Portfolio"}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6b7280]">
        {eyebrow}
      </p>
      <h2
        className="mt-3 text-3xl leading-tight text-[#171c24] sm:text-4xl"
        style={{
          fontFamily: '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
          fontStyle: "italic",
          fontWeight: 600,
        }}
      >
        {title}
      </h2>
    </header>
  );
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
      active
          ? "border-[#1f2937] bg-[#1f2937] text-[#f8fafc] shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
          : "border-[#d6dbe1] bg-[#fbfcfd] text-[#525c69] hover:bg-[#eef2f6]"
      }`}
    >
      {label}
    </button>
  );
}

function StatusPill({ value }: { value: string }) {
  return (
    <span className="inline-flex rounded-full border border-[#d4dae2] bg-[#f1f5f9] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#52606f]">
      {value}
    </span>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-[#d5dbe3] bg-[#f8fafc] px-3 py-1 text-sm text-[#54606d]">
      {label}
    </span>
  );
}

function SkillsPanel({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {skillGroups.map((group) => (
        <article
          key={group.title.en}
          className="min-h-64 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
        >
          <div className="flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${group.accent}`} />
            <h3 className="text-xl font-semibold text-[#171c24]">
              {group.title[locale]}
            </h3>
          </div>
          <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#4f5a66]">
            {group.items[locale].map((item) => (
              <li
                key={item}
                className="border-b border-[#e7ebf0] pb-3 last:border-b-0 last:pb-0"
              >
                {item}
              </li>
            ))}
          </ul>
          {group.note ? (
            <p className="mt-5 text-sm italic leading-6 text-[#6b7280]">
              {group.note[locale]}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function EducationPanel({ locale }: { locale: Locale }) {
  const headers =
    locale === "fr"
      ? ["Établissement", "Diplôme", "Période", "Classement", "Localisation"]
      : ["Institution", "Degree", "Period", "Ranking", "Location"];

  return (
    <div className="overflow-hidden rounded-lg border border-[#d7dde5] bg-[#fbfcfd]">
      <div className="hidden grid-cols-[1.25fr_2.35fr_0.9fr_2.15fr_1fr] gap-4 border-b border-[#d7dde5] bg-[#f3f6f9] px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[#66707d] lg:grid">
        {headers.map((header) => (
          <span key={header}>{header}</span>
        ))}
      </div>
      <div>
        {educationEntries.map((entry) => (
          <article
            key={entry.institution}
            className="grid gap-4 border-b border-[#e6ebf1] px-6 py-6 last:border-b-0 lg:grid-cols-[1.25fr_2.35fr_0.9fr_2.15fr_1fr]"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                {headers[0]}
              </p>
              <p className="mt-1 text-xl font-semibold text-[#171c24]">
                {entry.institution}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Degree
              </p>
              <p className="mt-1 text-base leading-7 text-[#4f5a66]">
                {entry.degree[locale]}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                {headers[2]}
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">{entry.period}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                {headers[3]}
              </p>
              <p className="mt-1 text-base leading-7 text-[#4f5a66]">
                {entry.ranking[locale]}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                {headers[4]}
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">
                {entry.location[locale]}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExperiencePanel({ locale }: { locale: Locale }) {
  const headers =
    locale === "fr"
      ? ["Entreprise", "Période", "Localisation", "Rôle"]
      : ["Company", "Period", "Location", "Role"];

  return (
    <div className="overflow-hidden rounded-lg border border-[#d7dde5] bg-[#fbfcfd]">
      <div className="hidden grid-cols-[1.15fr_1fr_1fr_1fr] gap-4 border-b border-[#d7dde5] bg-[#f3f6f9] px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[#66707d] lg:grid">
        {headers.map((header) => (
          <span key={header}>{header}</span>
        ))}
      </div>
      <div>
        {experienceEntries.map((entry) => (
          <Link
            key={`${entry.company}-${entry.period.en}`}
            href={`/experiences/${entry.slug}`}
            className="grid gap-4 border-b border-[#e6ebf1] px-6 py-6 transition-colors hover:bg-[#f7f9fb] last:border-b-0 lg:grid-cols-[1.15fr_1fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                {headers[0]}
              </p>
              <div className="mt-1 flex items-center gap-4">
                <div className="flex h-11 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#e6ebf1] bg-white px-2">
                  <Image
                    src={entry.logo.src}
                    alt={entry.logo.alt}
                    width={64}
                    height={32}
                    className="max-h-7 w-auto object-contain"
                  />
                </div>
                <p className="text-xl font-semibold text-[#171c24]">{entry.company}</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                {headers[1]}
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">
                {entry.period[locale]}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                {headers[2]}
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">
                {entry.location[locale]}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                {headers[3]}
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">{entry.role[locale]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  locale,
}: {
  project: ProjectEntry;
  locale: Locale;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#d7dde5] bg-[#fbfcfd] shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_18px_56px_rgba(15,23,42,0.08)]"
    >
      {project.teaserImage ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#d7dde5] bg-white">
          <Image
            src={project.teaserImage.src}
            alt={project.teaserImage.alt[locale]}
            fill
            className={`transition-transform duration-300 group-hover:scale-[1.02] ${
              project.teaserImage.fit === "contain"
                ? "object-contain p-3"
                : "object-cover"
            }`}
          />
        </div>
      ) : null}
      <div className="p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
            {project.category[locale]}
          </p>
          <h3
            className="mt-3 text-[1.75rem] leading-tight text-[#171c24]"
            style={{
              fontFamily: '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            {project.title[locale]}
          </h3>
        </div>
        <StatusPill value={project.status[locale]} />
      </div>
      <p className="mt-6 text-lg italic leading-8 text-[#475569]">
        {locale === "fr" ? "Objectif :" : "Goal:"} {project.goal[locale]}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <span className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-[#64748b]">
        {uiLabels[locale].projectCta}
      </span>
      </div>
    </Link>
  );
}

function ContactCard({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="mt-6 inline-block text-lg leading-8 text-[#4f5a66] underline decoration-[#94a3b8] underline-offset-4 transition-colors hover:text-[#171c24]"
    >
      {value}
    </a>
  ) : (
    <p className="mt-6 text-lg leading-8 text-[#4f5a66]">{value}</p>
  );

  return (
    <article className="rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
        {title}
      </p>
      {content}
    </article>
  );
}

function ReferencesPanel({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {references.map((reference) => (
        <article
          key={reference.name}
          className="rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
            {uiLabels[locale].referenceLabel}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#171c24]">
            {reference.name}
          </h3>
          <p className="mt-2 text-base text-[#6b7280]">
            {reference.role[locale]}, {reference.company}
          </p>
          <blockquote className="mt-6 border-l border-[#cbd5e1] pl-5 text-lg leading-8 text-[#4f5a66]">
            {reference.quote[locale]}
          </blockquote>
        </article>
      ))}
    </div>
  );
}

function OtherPanel({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {otherInterests.map((item) => (
        <article
          key={item.title.en}
          className="rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
            {uiLabels[locale].interestLabel}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[#171c24]">
            {item.title[locale]}
          </h3>
          <p className="mt-5 text-lg leading-8 text-[#4f5a66]">
            {item.description[locale]}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  const { locale } = useLanguage();
  const [activeProfileTab, setActiveProfileTab] =
    useState<ProfileTabKey>("skills");
  const [activeContactTab, setActiveContactTab] =
    useState<ContactTabKey>("contact");

  const currentProfilePanel = useMemo(() => {
    if (activeProfileTab === "education") return <EducationPanel locale={locale} />;
    if (activeProfileTab === "experience") return <ExperiencePanel locale={locale} />;
    return <SkillsPanel locale={locale} />;
  }, [activeProfileTab, locale]);

  const currentContactPanel = useMemo(() => {
    if (activeContactTab === "references") return <ReferencesPanel locale={locale} />;
    if (activeContactTab === "other") return <OtherPanel locale={locale} />;

    return (
      <div className="grid gap-5 lg:grid-cols-3">
        <ContactCard
          title={uiLabels[locale].email}
          value="arthur.desfrancais@gmail.com"
          href="mailto:arthur.desfrancais@gmail.com"
        />
        <ContactCard
          title={uiLabels[locale].linkedin}
          value="www.linkedin.com/in/arthur-desfrancais"
          href="https://www.linkedin.com/in/arthur-desfrancais"
        />
        <ContactCard
          title={uiLabels[locale].phone}
          value="+33 6 14 98 26 86"
          href="tel:+33614982686"
        />
      </div>
    );
  }, [activeContactTab, locale]);

  return (
    <main className="bg-[#f3f5f7] text-[#171c24]">
      <Banner locale={locale} />
      <div className="mx-auto flex w-full max-w-[1400px] flex-col px-6 pb-24 pt-0 sm:px-10 lg:px-14">
        <header className="sticky top-0 z-20 border-b border-[#d7dde5]/90 bg-[#f3f5f7]/95 py-5 backdrop-blur">
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#5f6b78] sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#7b8490]">
              Arthur Desfrancais
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {navigation[locale].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[#d6dbe1] bg-[#fbfcfd] px-4 py-2 transition-colors hover:bg-[#eef2f6]"
                >
                  {item.label}
                </a>
              ))}
              <LanguageToggle />
            </div>
          </nav>
        </header>

        <section
          id="about"
          className="grid gap-12 border-b border-[#d7dde5] py-16 lg:grid-cols-[minmax(0,1.6fr)_360px] lg:items-start"
        >
          <div>
            <SectionTitle
              eyebrow={uiLabels[locale].intro}
              title={uiLabels[locale].aboutTitle}
            />
            <div className="mt-10 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:p-10">
              <div className="space-y-8 text-lg leading-9 text-[#4b5563]">
                {locale === "fr" ? (
                  <>
                    <p>
                      <strong className="font-semibold text-[#171c24]">
                        Futur ingénieur diplômé
                      </strong>{" "}
                      de l&apos;IMT Mines Ales (juin 2026), spécialisé en{" "}
                      <strong className="font-semibold text-[#171c24]">
                        IA et Data Science
                      </strong>
                      , avec de solides bases en{" "}
                      <strong className="font-semibold text-[#171c24]">
                        mathématiques, programmation et intelligence artificielle
                      </strong>
                      .
                    </p>
                    <p>
                      Très intéressé par la{" "}
                      <strong className="font-semibold text-[#171c24]">
                        finance
                      </strong>
                      , les technologies Web3 et la finance décentralisée (DeFi),
                      j&apos;aime développer des solutions à l&apos;intersection des{" "}
                      <strong className="font-semibold text-[#171c24]">
                        mécanismes financiers
                      </strong>
                      ,{" "}
                      <strong className="font-semibold text-[#171c24]">
                        modélisation mathématique
                      </strong>{" "}
                      et technologies avancées.
                    </p>
                    <p>
                      <strong className="font-semibold text-[#171c24]">
                        Ambitieux et déterminé
                      </strong>
                      , je souhaite poursuivre un{" "}
                      <strong className="font-semibold text-[#171c24]">
                        MSc in Finance
                      </strong>{" "}
                      afin de développer un profil complet pour une carrière en{" "}
                      <strong className="font-semibold text-[#171c24]">
                        finance de marché
                      </strong>
                      , en combinant une expertise technique solide et une bonne compréhension des{" "}
                      <strong className="font-semibold text-[#171c24]">
                        produits financiers et outils quantitatifs
                      </strong>
                      .
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong className="font-semibold text-[#171c24]">
                        Future graduate engineer
                      </strong>{" "}
                      from IMT Mines Ales (June 2026), specialized in{" "}
                      <strong className="font-semibold text-[#171c24]">
                        AI and Data Science
                      </strong>
                      , with a strong foundation in{" "}
                      <strong className="font-semibold text-[#171c24]">
                        mathematics, programming, and artificial intelligence
                      </strong>
                      .
                    </p>
                    <p>
                      Deeply interested in{" "}
                      <strong className="font-semibold text-[#171c24]">
                        finance
                      </strong>
                      , Web3 technologies, and decentralized finance (DeFi), I enjoy
                      building solutions at the intersection of{" "}
                      <strong className="font-semibold text-[#171c24]">
                        financial mechanisms
                      </strong>
                      ,{" "}
                      <strong className="font-semibold text-[#171c24]">
                        mathematical modeling
                      </strong>
                      , and advanced technologies.
                    </p>
                    <p>
                      <strong className="font-semibold text-[#171c24]">
                        Ambitious and driven
                      </strong>
                      , I aim to pursue an{" "}
                      <strong className="font-semibold text-[#171c24]">
                        MSc in Finance
                      </strong>{" "}
                      to develop a well-rounded profile for a career in{" "}
                      <strong className="font-semibold text-[#171c24]">
                        market finance
                      </strong>
                      , combining strong technical skills with a solid understanding of{" "}
                      <strong className="font-semibold text-[#171c24]">
                        financial products and quantitative tools
                      </strong>
                      .
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <aside className="lg:pt-[6.5rem]">
            <div className="aspect-[4/5] rounded-lg border border-[#d7dde5] bg-[linear-gradient(180deg,#f8fafc_0%,#e8edf3_100%)] p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
              <div className="flex h-full flex-col justify-between rounded-md border border-[#d9dfe7] bg-[#f8fafc] p-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
                    {uiLabels[locale].profile}
                  </p>
                  <p
                    className="mt-4 text-3xl leading-tight text-[#171c24]"
                    style={{
                      fontFamily:
                        '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
                      fontWeight: 600,
                    }}
                  >
                    Arthur
                    <br />
                    Desfrancais
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[#64748b]">
                    {uiLabels[locale].profileRole}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="h-px w-full bg-[#d9dfe7]" />
                  {uiLabels[locale].keywords.map((keyword) => (
                    <p
                      key={keyword}
                      className="text-sm uppercase tracking-[0.16em] text-[#64748b]"
                    >
                      {keyword}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="nutshell" className="border-b border-[#d7dde5] py-16">
            <SectionTitle
              eyebrow={uiLabels[locale].profile}
              title={uiLabels[locale].profileTitle}
            />

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {profileTabs[locale].map((tab) => (
              <TabButton
                key={tab.key}
                active={tab.key === activeProfileTab}
                label={tab.label}
                onClick={() => setActiveProfileTab(tab.key)}
              />
            ))}
          </div>

          <div className="mt-8">{currentProfilePanel}</div>
        </section>

        <section id="projects" className="border-b border-[#d7dde5] py-16">
            <SectionTitle
              eyebrow={uiLabels[locale].selectedWork}
              title={uiLabels[locale].financialProjectsTitle}
            />
          <div className="mt-8 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-6">
            <p className="text-base leading-8 text-[#556170]">
              <span className="font-semibold text-[#171c24]">
                {uiLabels[locale].disclaimerLabel}
              </span>{" "}
              {uiLabels[locale].disclaimer}
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {financialProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>

          <div className="mt-16">
            <SectionTitle
              eyebrow={uiLabels[locale].additionalWork}
              title={uiLabels[locale].otherProjectsTitle}
            />
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <SectionTitle
            eyebrow={uiLabels[locale].contactEyebrow}
            title={uiLabels[locale].contactTitle}
          />

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {contactTabs[locale].map((tab) => (
              <TabButton
                key={tab.key}
                active={tab.key === activeContactTab}
                label={tab.label}
                onClick={() => setActiveContactTab(tab.key)}
              />
            ))}
          </div>

          <div className="mt-8">{currentContactPanel}</div>
        </section>
      </div>
    </main>
  );
}
