import { Fragment } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
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

function renderParagraphs(value: string) {
  return value.split("\n").map((line) => (
    <p key={line} className="leading-8 text-[#4f5a66]">
      {line}
    </p>
  ));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f3f5f7] text-[#171c24]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-10 lg:px-14">
        <Link
          href="/#projects"
          className="font-mono text-xs uppercase tracking-[0.22em] text-[#64748b] underline decoration-[#94a3b8] underline-offset-4"
        >
          Back to projects
        </Link>

        <header className="mt-8 border-b border-[#d7dde5] pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6b7280]">
            {project.category}
          </p>
          <h1
            className="mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-none text-[#171c24]"
            style={{
              fontFamily:
                '"Iowan Old Style", "Baskerville Old Face", Baskerville, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            {project.title}
          </h1>
        </header>

        <section className="mt-10 rounded-lg border border-[#d7dde5] bg-[#fbfcfd] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            {project.detailSections.map((section) => (
              <Fragment key={section.label}>
                <div
                  className="font-mono text-sm uppercase tracking-[0.16em] text-[#6b7280]"
                >
                  {section.label}
                </div>
                <div className="space-y-4">
                  {section.label === "Context" ? (
                    <StatusPill value={section.value} />
                  ) : null}
                  {section.label !== "Context" && section.value ? (
                    <div
                      className={
                        section.label === "Main Goal"
                          ? "text-[1.1rem] italic leading-8 text-[#475569]"
                          : "text-lg"
                      }
                    >
                      {renderParagraphs(section.value)}
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
      </div>
    </main>
  );
}
