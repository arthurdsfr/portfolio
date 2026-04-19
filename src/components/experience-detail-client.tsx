"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import type { ExperienceEntry } from "@/data/experiences";

function renderParagraphs(value: string) {
  return value.split("\n").map((line) => (
    <p key={line} className="leading-8 text-[#4f5a66]">
      {line}
    </p>
  ));
}

const pageLabels = {
  en: {
    back: "Back to profile",
    duration: "Duration",
    description: "Job Description",
    location: "Location",
    role: "Role",
  },
  fr: {
    back: "Retour au profil",
    duration: "Duree",
    description: "Description du poste",
    location: "Localisation",
    role: "Role",
  },
} as const;

export function ExperienceDetailClient({
  experience,
}: {
  experience: ExperienceEntry;
}) {
  const { locale } = useLanguage();

  const sections = [
    {
      key: "duration",
      label: pageLabels[locale].duration,
      value: experience.period[locale],
    },
    {
      key: "description",
      label: pageLabels[locale].description,
      value: experience.description[locale],
    },
    {
      key: "location",
      label: pageLabels[locale].location,
      value: experience.location[locale],
    },
    {
      key: "role",
      label: pageLabels[locale].role,
      value: experience.role[locale],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f3f5f7] text-[#171c24]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-10 lg:px-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#nutshell"
            className="font-mono text-xs uppercase tracking-[0.22em] text-[#64748b] underline decoration-[#94a3b8] underline-offset-4"
          >
            {pageLabels[locale].back}
          </Link>
          <LanguageToggle />
        </div>

        <header className="mt-8 border-b border-[#d7dde5] pb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#d7dde5] bg-white px-3">
              <Image
                src={experience.logo.src}
                alt={experience.logo.alt}
                width={80}
                height={40}
                className="max-h-9 w-auto object-contain"
              />
            </div>
            <h1
              className="text-[clamp(2.6rem,6vw,5rem)] leading-none text-[#171c24]"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              {experience.company}
            </h1>
          </div>
        </header>

        <section className="mt-10 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            {sections.map((section) => (
              <Fragment key={section.key}>
                <div className="font-mono text-sm uppercase tracking-[0.16em] text-[#6b7280]">
                  {section.label}
                </div>
                <div
                  className={
                    section.key === "description" ? "space-y-4 text-lg" : "text-lg text-[#4f5a66]"
                  }
                >
                  {section.key === "description"
                    ? renderParagraphs(section.value)
                    : section.value}
                </div>
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
