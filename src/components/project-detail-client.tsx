"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import {
  useLanguage,
} from "@/components/language-provider";
import type { ProjectEntry } from "@/data/projects";

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

function renderParagraphs(value: string) {
  return value.split("\n").map((line) => (
    <p key={line} className="leading-8 text-[#4f5a66]">
      {line}
    </p>
  ));
}

const pageLabels = {
  en: {
    back: "Back to projects",
    gallery: "Project visuals",
  },
  fr: {
    back: "Retour aux projets",
    gallery: "Visuels du projet",
  },
} as const;

export function ProjectDetailClient({ project }: { project: ProjectEntry }) {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen bg-[#f3f5f7] text-[#171c24]">
      <div className="mx-auto w-full max-w-[1520px] px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#projects"
            className="font-mono text-xs uppercase tracking-[0.22em] text-[#64748b] underline decoration-[#94a3b8] underline-offset-4"
          >
            {pageLabels[locale].back}
          </Link>
          <LanguageToggle />
        </div>

        <header className="mt-8 border-b border-[#d7dde5] pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6b7280]">
            {project.category[locale]}
          </p>
          <h1
            className="mt-4 text-[clamp(2.2rem,5vw,4.2rem)] leading-none text-[#171c24]"
            style={{
              fontFamily:
                '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            {project.title[locale]}
          </h1>
        </header>

        <section className="mt-10 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            {project.detailSections.map((section) => (
              <Fragment key={section.key}>
                <div className="font-mono text-sm uppercase tracking-[0.16em] text-[#6b7280]">
                  {section.label[locale]}
                </div>
                <div className="space-y-4">
                  {section.key === "context" ? (
                    <StatusPill value={section.value[locale]} />
                  ) : null}
                  {section.key !== "context" && section.value[locale] ? (
                    <div
                      className={
                        section.key === "mainGoal"
                          ? "text-[1.1rem] italic leading-8 text-[#475569]"
                          : "text-lg"
                      }
                    >
                      {renderParagraphs(section.value[locale])}
                    </div>
                  ) : null}
                  {section.tags ? (
                    <div className="flex flex-wrap gap-2">
                      {section.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </Fragment>
            ))}
          </div>
        </section>

        {project.gallery && project.gallery.length > 0 ? (
          <section className="mt-10 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
            <div className="flex items-center justify-between gap-4">
              <h2
                className="text-2xl leading-tight text-[#171c24]"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
                  fontWeight: 600,
                }}
              >
                {pageLabels[locale].gallery}
              </h2>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {project.gallery.map((image) => (
                <a
                  key={image.src}
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-lg border border-[#d7dde5] bg-white transition-transform hover:-translate-y-1 hover:shadow-[0_18px_56px_rgba(15,23,42,0.08)]"
                  aria-label={image.alt[locale]}
                >
                  <div className="relative aspect-[4/3] w-full bg-[#f8fafc]">
                    <Image
                      src={image.src}
                      alt={image.alt[locale]}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
