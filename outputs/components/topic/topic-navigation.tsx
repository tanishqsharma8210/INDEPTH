import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { topics } from "@/lib/topics";

export function TopicNavigation({ currentSlug }: { currentSlug: string }) {
  const otherTopics = topics.filter((t) => t.slug !== currentSlug).slice(0, 3);

  return (
    <section
      aria-labelledby="explore-more-heading"
      className="mt-20 border-t border-border pt-16"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-gold">
            <Compass aria-hidden="true" className="h-4 w-4" /> Connected Inquiries
          </p>
          <h2
            className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl"
            id="explore-more-heading"
          >
            Explore adjacent disciplines
          </h2>
          <p className="mt-2 text-muted">
            Knowledge is interconnected. Follow the threads leading to other curated fields.
          </p>
        </div>
        <Button asChild size="sm" variant="outline">
          <Link href="/topics">
            View all topics <ArrowRight aria-hidden="true" className="ml-2 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {otherTopics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Link
              className="group rounded-3xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow"
              href={topic.href ?? `/topic/${topic.slug}`}
              key={topic.slug}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                {topic.badge && (
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-gold">
                    {topic.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-gold">
                {topic.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                {topic.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
