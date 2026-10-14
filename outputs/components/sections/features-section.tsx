import { BookOpenCheck, Network, Route } from "lucide-react";

import { FeatureCard } from "@/components/cards/feature-card";

const features = [
  {
    icon: Route,
    title: "Follow a meaningful path",
    description:
      "Move beyond isolated facts with journeys that give each subject shape and direction.",
  },
  {
    icon: Network,
    title: "See what connects",
    description:
      "Notice the ideas, people, and moments that link disciplines and make knowledge stick.",
  },
  {
    icon: BookOpenCheck,
    title: "Learn at a considered pace",
    description:
      "A calm interface built to help you focus on the question in front of you.",
  },
];

export function FeaturesSection() {
  return (
    <section
      className="border-y border-border bg-surface-muted/35 py-24 sm:py-32"
      id="stories"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky">
            A better learning surface
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">
            Built for understanding, not just consumption.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard {...feature} delay={index * 0.08} key={feature.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
