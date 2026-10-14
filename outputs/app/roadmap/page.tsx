import type { Metadata } from "next";
import { Check, Circle } from "lucide-react";

import { PageIntro } from "@/components/common/page-intro";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "The deliberate path from INDEPTH's foundation to richer learning journeys.",
};

const milestones = [
  {
    status: "current",
    version: "Version 0.1",
    title: "A calm, connected foundation",
    description:
      "A responsive home for discovering subjects, navigating the product, and establishing the design system.",
  },
  {
    status: "next",
    version: "Next",
    title: "Guided learning paths",
    description:
      "Structured topic journeys with a clear sense of progress, context, and thoughtful editorial direction.",
  },
  {
    status: "future",
    version: "Future",
    title: "Richer ways to explore",
    description:
      "Deeper connections between ideas, richer visual storytelling, and carefully designed learning tools.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="pb-24 pt-12 sm:pt-20">
      <PageIntro
        eyebrow="Product roadmap"
        title="Built in deliberate chapters."
        description="INDEPTH is starting small on purpose. Each version earns its place by making learning clearer, calmer, and more connected."
      />
      <section className="mx-auto mt-16 max-w-3xl px-6 lg:px-8">
        <ol className="space-y-10 border-l border-border pl-7 sm:pl-10">
          {milestones.map((milestone) => {
            const isCurrent = milestone.status === "current";
            return (
              <li className="relative" key={milestone.version}>
                <span
                  className="absolute -left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface sm:-left-[53px]"
                  aria-hidden="true"
                >
                  {isCurrent ? (
                    <Check className="h-3.5 w-3.5 text-gold" />
                  ) : (
                    <Circle className="h-3 w-3 text-muted" />
                  )}
                </span>
                <p className="text-sm font-medium text-gold">{milestone.version}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {milestone.title}
                </h2>
                <p className="mt-3 max-w-xl leading-7 text-muted">
                  {milestone.description}
                </p>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
