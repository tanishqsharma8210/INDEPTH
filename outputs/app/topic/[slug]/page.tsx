import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { FactGrid } from "@/components/prehistoric-life/fact-grid";
import { TopicChapters } from "@/components/topic/topic-chapters";
import { TopicInquiries } from "@/components/topic/topic-inquiries";
import { TopicNavigation } from "@/components/topic/topic-navigation";
import { TopicSourcesList } from "@/components/topic/topic-sources-list";
import { Button } from "@/components/ui/button";
import { getTopicDetail } from "@/lib/topic-details";
import { getTopicBySlug, topics } from "@/lib/topics";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topics.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  const detail = getTopicDetail(slug);

  if (!topic) {
    return { title: "Topic not found" };
  }

  return {
    title: `${topic.name} | INDEPTH`,
    description: detail?.headline ?? topic.description,
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;

  // Prehistoric Life has its own specialized hub with 3D range mapping
  if (slug === "prehistoric-life") {
    redirect("/topics/prehistoric-life");
  }

  const topic = getTopicBySlug(slug);
  const detail = getTopicDetail(slug);

  if (!topic || !detail) {
    notFound();
  }

  const Icon = topic.icon;

  return (
    <div className="pb-24 pt-12 sm:pt-20">
      <article className="mx-auto max-w-5xl px-6 lg:px-8">
        <Button
          asChild
          className="-ml-3 text-muted hover:text-foreground"
          size="sm"
          variant="ghost"
        >
          <Link href="/topics">
            <ArrowLeft aria-hidden="true" className="mr-2 h-4 w-4" />
            All topics
          </Link>
        </Button>

        {/* Hero Section */}
        <header className="mt-10 rounded-[2.5rem] border border-border bg-gradient-to-br from-surface via-surface to-surface-muted p-8 shadow-glow sm:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <Icon aria-hidden="true" className="h-7 w-7" />
            </div>
            {topic.badge && (
              <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                {topic.badge} Chapter
              </span>
            )}
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-gold">
            {detail.eyebrow}
          </p>

          <h1 className="mt-4 font-serif text-5xl tracking-tight text-foreground sm:text-6xl">
            {topic.name}
          </h1>

          <p className="mt-4 font-serif text-2xl italic text-sky sm:text-3xl">
            {detail.headline}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {detail.premise}
          </p>
        </header>

        {/* Fact Grid / At a Glance */}
        <section aria-labelledby="at-a-glance-heading" className="mt-14">
          <h2 className="sr-only" id="at-a-glance-heading">
            At a glance
          </h2>
          <FactGrid facts={detail.facts} />
        </section>

        {/* Landmark Milestone Chapters */}
        <TopicChapters chapters={detail.chapters} />

        {/* Active Frontiers & Open Questions */}
        <TopicInquiries questions={detail.openQuestions} />

        {/* Primary Literature & Sources */}
        <TopicSourcesList sources={detail.sources} />

        {/* Connected Navigation */}
        <TopicNavigation currentSlug={slug} />
      </article>
    </div>
  );
}
