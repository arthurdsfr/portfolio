"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  financialProjects,
  otherProjects,
  type ProjectEntry,
} from "@/data/projects";

type SkillGroup = {
  title: string;
  accent: string;
  items: string[];
  note?: string;
};

type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  ranking: string;
  location: string;
};

type ExperienceEntry = {
  company: string;
  period: string;
  location: string;
  role: string;
};

type Reference = {
  name: string;
  role: string;
  company: string;
  quote: React.ReactNode;
};

type OtherInterest = {
  title: string;
  description: string;
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Profile", href: "#nutshell" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    accent: "bg-[#6b7280]",
    items: [
      "Python (Expert)",
      "R (Advanced)",
      "SQL (Advanced)",
      "VBA (Intermediate)",
      "Java (Intermediate)",
      "NoSQL",
      "Solidity (Beginner)",
    ],
  },
  {
    title: "AI & Data Science",
    accent: "bg-[#475569]",
    items: [
      "Machine Learning (random forest, SVM)",
      "Deep Learning (Transformers, CNN, RNN)",
      "Supervised and reinforcement learning",
      "Time series",
    ],
    note: "Libraries: TensorFlow, PyTorch, scikit-learn, Hugging Face",
  },
  {
    title: "Data Analysis",
    accent: "bg-[#64748b]",
    items: [
      "Exploratory Data Analysis (EDA)",
      "Statistical modeling and regression",
      "Data visualization",
    ],
    note: "Libraries: yfinance, pandas, matplotlib, seaborn",
  },
  {
    title: "Mathematics",
    accent: "bg-[#7c8695]",
    items: [
      "Probabilities and statistics (frequentist and Bayesian statistics)",
      "Linear algebra (PCA, covariance analysis)",
      "Combinatorial optimisation (heuristic approaches)",
      "Advanced mathematics for machine learning",
    ],
  },
  {
    title: "Languages",
    accent: "bg-[#5f6b7a]",
    items: ["French (Native)", "English (C1)"],
    note: "English certification: TOEIC 920/990",
  },
  {
    title: "Collaboration",
    accent: "bg-[#4b5563]",
    items: ["GitHub", "Agile"],
  },
];

const educationEntries: EducationEntry[] = [
  {
    institution: "IMT Mines Ales",
    degree: "General Engineering (AI & Data Science Specialization)",
    period: "2023 - 2026",
    ranking: "14th / 171 among French engineering schools (L'Etudiant 2025)",
    location: "Ales, France",
  },
  {
    institution: "La Prat's",
    degree: "Preparatory Classes for Grandes Ecoles (CPGE)",
    period: "2021 - 2023",
    ranking: "17th / 69 among PT French CPGE (L'Etudiant 2025)",
    location: "Cluny, France",
  },
  {
    institution: "Lycee Saint-Thomas d'Aquin",
    degree: "High school diploma (Mathematics and Physics)",
    period: "2018 - 2021",
    ranking: "160th / 2720 among French high schools (L'Etudiant 2025)",
    location: "Lyon, France",
  },
];

const experienceEntries: ExperienceEntry[] = [
  {
    company: "ZettaByte",
    period: "May 2025 - August 2025",
    location: "Singapore, Singapore",
    role: "AI Engineer Intern",
  },
  {
    company: "Sanofi",
    period: "Nov. 2024 - Dec. 2024",
    location: "Lyon, France",
    role: "Assistant Project Manager",
  },
];

const references: Reference[] = [
  {
    name: "Doris Cadar",
    role: "Ex-Tutor",
    company: "Sanofi",
    quote: (
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
          proactive, insightful, and hard worker
        </strong>
        . I have no doubt he will excel in future endeavors and I highly
        recommend him.
      </>
    ),
  },
  {
    name: "Chris Mugnier",
    role: "CTO",
    company: "ZettaByte",
    quote: (
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
        to the projects they were involved in. He has{" "}
        <strong className="font-semibold text-[#171c24]">
          immense potential to grow and thrive
        </strong>{" "}
        in a dynamic, collaborative work environment.
      </>
    ),
  },
];

const otherInterests: OtherInterest[] = [
  {
    title: "Soccer",
    description:
      "Played at the highest regional level from age 6 to 20, and served as team captain from age 14.",
  },
  {
    title: "Gym",
    description: "Training three times a week for two years.",
  },
];

type ProfileTabKey = "skills" | "education" | "experience";
type ContactTabKey = "contact" | "references" | "other";

const profileTabs: { key: ProfileTabKey; label: string }[] = [
  { key: "skills", label: "Skills" },
  { key: "education", label: "Education" },
  { key: "experience", label: "Experience" },
];

const contactTabs: { key: ContactTabKey; label: string }[] = [
  { key: "contact", label: "Contact" },
  { key: "references", label: "References" },
  { key: "other", label: "Other" },
];

function Banner() {
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
            Portfolio
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

function StatusPill({ value }: { value: ProjectEntry["status"] }) {
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

function SkillsPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {skillGroups.map((group) => (
        <article
          key={group.title}
          className="min-h-64 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
        >
          <div className="flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${group.accent}`} />
            <h3 className="text-xl font-semibold text-[#171c24]">{group.title}</h3>
          </div>
          <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#4f5a66]">
            {group.items.map((item) => (
              <li
                key={item}
                className="border-b border-[#e7ebf0] pb-3 last:border-b-0 last:pb-0"
              >
                {item}
              </li>
            ))}
          </ul>
          {group.note ? (
            <p className="mt-5 text-sm italic leading-6 text-[#6b7280]">{group.note}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function EducationPanel() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#d7dde5] bg-[#fbfcfd]">
      <div className="hidden grid-cols-[1.25fr_2.35fr_0.9fr_2.15fr_1fr] gap-4 border-b border-[#d7dde5] bg-[#f3f6f9] px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[#66707d] lg:grid">
        <span>Institution</span>
        <span>Degree</span>
        <span>Period</span>
        <span>Ranking</span>
        <span>Location</span>
      </div>
      <div>
        {educationEntries.map((entry) => (
          <article
            key={entry.institution}
            className="grid gap-4 border-b border-[#e6ebf1] px-6 py-6 last:border-b-0 lg:grid-cols-[1.25fr_2.35fr_0.9fr_2.15fr_1fr]"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Institution
              </p>
              <p className="mt-1 text-xl font-semibold text-[#171c24]">
                {entry.institution}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Degree
              </p>
              <p className="mt-1 text-base leading-7 text-[#4f5a66]">{entry.degree}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Period
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">{entry.period}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Ranking
              </p>
              <p className="mt-1 text-base leading-7 text-[#4f5a66]">{entry.ranking}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Location
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">{entry.location}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExperiencePanel() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#d7dde5] bg-[#fbfcfd]">
      <div className="hidden grid-cols-[1.15fr_1fr_1fr_1fr] gap-4 border-b border-[#d7dde5] bg-[#f3f6f9] px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[#66707d] lg:grid">
        <span>Company</span>
        <span>Period</span>
        <span>Location</span>
        <span>Role</span>
      </div>
      <div>
        {experienceEntries.map((entry) => (
          <article
            key={`${entry.company}-${entry.period}`}
            className="grid gap-4 border-b border-[#e6ebf1] px-6 py-6 last:border-b-0 lg:grid-cols-[1.15fr_1fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Company
              </p>
              <p className="mt-1 text-xl font-semibold text-[#171c24]">{entry.company}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Period
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">{entry.period}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Location
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">{entry.location}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7b8490] lg:hidden">
                Role
              </p>
              <p className="mt-1 text-base text-[#4f5a66]">{entry.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_18px_56px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
            {project.category}
          </p>
          <h3
            className="mt-3 text-[1.75rem] leading-tight text-[#171c24]"
            style={{
              fontFamily: '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            {project.title}
          </h3>
        </div>
        <StatusPill value={project.status} />
      </div>
      <p className="mt-6 text-lg italic leading-8 text-[#475569]">
        Goal: {project.goal}
      </p>
      <p className="mt-5 flex-1 text-base leading-8 text-[#4f5a66]">
        {project.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <span className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-[#64748b]">
        Open project note
      </span>
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

function ReferencesPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {references.map((reference) => (
        <article
          key={reference.name}
          className="rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
            Professional Reference
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#171c24]">
            {reference.name}
          </h3>
          <p className="mt-2 text-base text-[#6b7280]">
            {reference.role}, {reference.company}
          </p>
          <blockquote className="mt-6 border-l border-[#cbd5e1] pl-5 text-lg leading-8 text-[#4f5a66]">
            {reference.quote}
          </blockquote>
        </article>
      ))}
    </div>
  );
}

function OtherPanel() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {otherInterests.map((item) => (
        <article
          key={item.title}
          className="rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
            Personal Interest
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[#171c24]">{item.title}</h3>
          <p className="mt-5 text-lg leading-8 text-[#4f5a66]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeProfileTab, setActiveProfileTab] =
    useState<ProfileTabKey>("skills");
  const [activeContactTab, setActiveContactTab] =
    useState<ContactTabKey>("contact");

  const currentProfilePanel = useMemo(() => {
    if (activeProfileTab === "education") return <EducationPanel />;
    if (activeProfileTab === "experience") return <ExperiencePanel />;
    return <SkillsPanel />;
  }, [activeProfileTab]);

  const currentContactPanel = useMemo(() => {
    if (activeContactTab === "references") return <ReferencesPanel />;
    if (activeContactTab === "other") return <OtherPanel />;

    return (
      <div className="grid gap-5 lg:grid-cols-3">
        <ContactCard
          title="Email"
          value="arthur.desfrancais@gmail.com"
          href="mailto:arthur.desfrancais@gmail.com"
        />
        <ContactCard
          title="LinkedIn"
          value="www.linkedin.com/in/arthur-desfrancais"
          href="https://www.linkedin.com/in/arthur-desfrancais"
        />
        <ContactCard title="Phone" value="+33 6 14 98 26 86" href="tel:+33614982686" />
      </div>
    );
  }, [activeContactTab]);

  return (
    <main className="bg-[#f3f5f7] text-[#171c24]">
      <Banner />
      <div className="mx-auto flex w-full max-w-[1400px] flex-col px-6 pb-24 pt-0 sm:px-10 lg:px-14">
        <header className="sticky top-0 z-20 border-b border-[#d7dde5]/90 bg-[#f3f5f7]/95 py-5 backdrop-blur">
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#5f6b78] sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#7b8490]">
              Arthur Desfrancais
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[#d6dbe1] bg-[#fbfcfd] px-4 py-2 transition-colors hover:bg-[#eef2f6]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <section
          id="about"
          className="grid gap-12 border-b border-[#d7dde5] py-16 lg:grid-cols-[minmax(0,1.6fr)_360px] lg:items-start"
        >
          <div>
            <SectionTitle
              eyebrow="Introduction"
              title="About me"
            />
            <div className="mt-10 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:p-10">
              <div className="space-y-8 text-lg leading-9 text-[#4b5563]">
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
                  designing solutions that combine{" "}
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
                  , combining technical expertise with a strong understanding of{" "}
                  <strong className="font-semibold text-[#171c24]">
                    financial products and quantitative tools
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:pt-[4.4rem]">
            <div className="aspect-[4/5] rounded-lg border border-[#d7dde5] bg-[linear-gradient(180deg,#f8fafc_0%,#e8edf3_100%)] p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
              <div className="flex h-full flex-col justify-between rounded-md border border-[#d9dfe7] bg-[#f8fafc] p-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6b7280]">
                    Profile
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
                </div>
                <div className="space-y-4">
                  <div className="h-px w-full bg-[#d9dfe7]" />
                  <p className="text-sm uppercase tracking-[0.16em] text-[#64748b]">
                    AI & Data Science
                  </p>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#64748b]">
                    Finance
                  </p>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#64748b]">
                    Quantitative profile
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="nutshell" className="border-b border-[#d7dde5] py-16">
          <SectionTitle
            eyebrow="Profile"
            title="Me in a nutshell"
          />

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {profileTabs.map((tab) => (
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
            eyebrow="Selected Work"
            title="Financial projects"
          />
          <div className="mt-8 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-6">
            <p className="text-base leading-8 text-[#556170]">
              <span className="font-semibold text-[#171c24]">Disclaimer:</span>{" "}
              Although some of these projects are intended for personal use or
              curiosity, I maintain critical distance from the results and remain
              aware of their limitations. They are primarily opportunities to
              explore, learn, and experiment rather than offer definitive
              conclusions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {financialProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-16">
            <SectionTitle
              eyebrow="Additional Work"
              title="Other projects"
            />
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <SectionTitle
            eyebrow="Contact"
            title="Let's get in touch"
          />

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {contactTabs.map((tab) => (
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
