import type { Locale } from "@/components/language-provider";

export type LocalizedText = Record<Locale, string>;

export type ExperienceEntry = {
  slug: string;
  company: string;
  logo: {
    src: string;
    alt: string;
  };
  period: LocalizedText;
  location: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
};

export const experiences: ExperienceEntry[] = [
  {
    slug: "thales",
    company: "Thales",
    logo: {
      src: "/logos/thales.png",
      alt: "Thales logo",
    },
    period: {
      en: "March 2026 - August 2026",
      fr: "Mars 2026 - Aout 2026",
    },
    location: {
      en: "Paris, France",
      fr: "Paris, France",
    },
    role: {
      en: "AI Algorithm Engineering Intern",
      fr: "Stagiaire ingenieur en algorithmes d'IA",
    },
    description: {
      en:
        "I trained and fine-tuned CNN models on annotated flight-test infrared datasets.\nI applied data augmentation techniques to improve model robustness and generalization.\nI optimized model performance by analyzing detection rates, false alarms, and execution-time constraints.\nThis internship gave me hands-on exposure to deep learning for sub-pixel target detection in airborne surveillance systems.",
      fr:
        "J'ai entraine et ajuste des modeles CNN sur des jeux de donnees infrarouges annotes issus d'essais en vol.\nJ'ai applique des techniques de data augmentation afin d'ameliorer la robustesse et la capacite de generalisation des modeles.\nJ'ai optimise les performances en analysant les taux de detection, les faux positifs et les contraintes de temps d'execution.\nCette experience m'a apporte une exposition concrete au deep learning pour la detection sub-pixel de cibles dans des systemes de surveillance aéroportes.",
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
      fr: "Mai 2025 - Aout 2025",
    },
    location: {
      en: "Singapore, Singapore",
      fr: "Singapour, Singapour",
    },
    role: {
      en: "AI Engineer Intern",
      fr: "Stagiaire ingenieur IA",
    },
    description: {
      en:
        "I joined a team of three AI engineers, where I worked on building a conversational AI system using LangGraph and Retrieval-Augmented Generation (RAG) techniques to assist with admissions queries for a group of schools (EDH Group).\nI contributed to designing the conversation flow and building the pipeline, while maintaining a critical balance between response quality and execution speed.\nThis experience significantly strengthened my skills in LLM orchestration, building efficient and real-world AI systems within a collaborative, production-focused environment.",
      fr:
        "J'ai rejoint une equipe de trois ingenieurs IA pour contribuer au developpement d'un systeme d'IA conversationnelle utilisant LangGraph et des techniques de Retrieval-Augmented Generation (RAG), afin d'assister les demandes d'admission pour un groupe d'ecoles (EDH Group).\nJ'ai contribue a la conception du flux conversationnel et a la construction de la pipeline, en veillant a maintenir un equilibre exigeant entre qualite des reponses et vitesse d'execution.\nCette experience a fortement renforce mes competences en orchestration de LLM et en construction de systemes d'IA efficaces, concrets et deployables dans un environnement collaboratif oriente production.",
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
      fr: "Nov. 2024 - Dec. 2024",
    },
    location: {
      en: "Lyon, France",
      fr: "Lyon, France",
    },
    role: {
      en: "Assistant Project Manager",
      fr: "Assistant chef de projet",
    },
    description: {
      en:
        "I supported the project manager in implementing an international project involving a team of 15 people based in Lyon, Toronto, and Montpellier.\nMy responsibilities included organizing and facilitating workshops, evaluating the project's economic viability, and conducting internal and external benchmarks.\nI also contributed to researching and recommending methodologies and software tools to support the project's execution.\nThis experience helped me develop strong analytical, organizational, and strategic skills in a collaborative and multicultural environment.",
      fr:
        "J'ai accompagne le chef de projet dans la mise en oeuvre d'un projet international impliquant une equipe de 15 personnes basees a Lyon, Toronto et Montpellier.\nMes responsabilites comprenaient l'organisation et l'animation d'ateliers, l'evaluation de la viabilite economique du projet, ainsi que la conduite de benchmarks internes et externes.\nJ'ai egalement contribue a la recherche et a la recommandation de methodologies et d'outils logiciels pour soutenir la bonne execution du projet.\nCette experience m'a permis de developper de solides competences analytiques, organisationnelles et strategiques dans un environnement collaboratif et multiculturel.",
    },
  },
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
