import type { Metadata } from "next";

import { PageIntro } from "@/components/common/page-intro";
import { TopicCard } from "@/components/cards/topic-card";
import { topics } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Topics",
  description: "Choose a subject and begin an INDEPTH learning journey.",
};

export default function TopicsPage() {
  return (
    <div className="pb-24 pt-12 sm:pt-20">
      <PageIntro
        eyebrow="Explore topics"
        title="Find the thread you want to follow."
        description="A growing collection of subjects, each designed to become a guided path through essential ideas and perspectives."
      />
      <section
        aria-label="Topics"
        className="mx-auto mt-14 grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
      >
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </section>
    </div>
  );
}
