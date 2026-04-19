import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceDetailClient } from "@/components/experience-detail-client";
import { experiences, getExperienceBySlug } from "@/data/experiences";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return {};
  }

  return {
    title: `${experience.company} Experience`,
    description: experience.role.en,
  };
}

export default async function ExperiencePage({
  params,
}: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailClient experience={experience} />;
}
