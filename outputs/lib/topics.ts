import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Brain,
  ChartNoAxesCombined,
  Dna,
  Footprints,
  History,
  Orbit,
  Palette,
  Terminal,
} from "lucide-react";

export type Topic = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  badge?: string;
};

export const topics: Topic[] = [
  {
    slug: "history",
    name: "History",
    description:
      "Trace the decisions, movements, and turning points that shaped the present.",
    icon: History,
    badge: "Curated",
  },
  {
    slug: "science",
    name: "Science",
    description:
      "Explore how questions, evidence, and experiment reshape our understanding.",
    icon: Atom,
    badge: "Curated",
  },
  {
    slug: "space",
    name: "Space",
    description:
      "Look outward to the immense systems, mysteries, and discoveries beyond Earth.",
    icon: Orbit,
    badge: "Curated",
  },
  {
    slug: "biotechnology",
    name: "Biotechnology",
    description:
      "Explore the genetic code, recombinant DNA, CRISPR, and synthetic biology reshaping life.",
    icon: Dna,
    badge: "Curated",
  },
  {
    slug: "technology",
    name: "Technology",
    description:
      "Examine the physical switches, distributed protocols, and algorithms powering modern computing.",
    icon: Terminal,
    badge: "Curated",
  },
  {
    slug: "psychology",
    name: "Psychology",
    description:
      "Understand cognition, heuristics, memory malleability, and the architecture of the mind.",
    icon: Brain,
    badge: "Curated",
  },
  {
    slug: "philosophy",
    name: "Philosophy",
    description:
      "Follow enduring inquiries across epistemology, moral philosophy, logic, and scientific demarcation.",
    icon: Palette,
    badge: "Curated",
  },
  {
    slug: "economics",
    name: "Economics",
    description:
      "See how choices, incentives, trade mechanisms, and institutional design allocate resources.",
    icon: ChartNoAxesCombined,
    badge: "Curated",
  },
  {
    slug: "prehistoric-life",
    name: "Prehistoric Life",
    description:
      "Meet the Ice Age animals revealed through fossils, landscapes, and scientific evidence.",
    icon: Footprints,
    href: "/topics/prehistoric-life",
    badge: "3 Journeys",
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
