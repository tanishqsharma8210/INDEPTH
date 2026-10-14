import type { Metadata } from "next";
import { Compass, Layers3, Sparkles } from "lucide-react";

import { PageIntro } from "@/components/common/page-intro";

export const metadata: Metadata = {
  title: "About",
  description: "Why INDEPTH exists and the principles guiding its first chapter.",
};

const principles = [
  {
    icon: Compass,
    title: "Start with curiosity",
    description:
      "Every journey begins with a question worth following, not an endless feed to scroll.",
  },
  {
    icon: Layers3,
    title: "Connect the context",
    description:
      "Ideas become clearer when their origins, consequences, and neighbouring disciplines are visible.",
  },
  {
    icon: Sparkles,
    title: "Keep learning human",
    description:
      "The product stays calm, intentional, and respectful of a learner's focus and time.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-12 sm:pt-20">
      <PageIntro
        eyebrow="About INDEPTH"
        title="Knowledge deserves more than a crowded interface."
        description="INDEPTH is being built as a home for clear thinking: a place to follow enduring questions across subjects, stories, and discoveries."
      />
      <section className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 md:grid-cols-3 lg:px-8">
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <article
              className="rounded-3xl border border-border bg-surface p-7 shadow-glow"
              key={principle.title}
            >
              <Icon aria-hidden="true" className="h-6 w-6 text-gold" />
              <h2 className="mt-7 text-xl font-semibold tracking-tight">
                {principle.title}
              </h2>
              <p className="mt-3 leading-7 text-muted">{principle.description}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}
