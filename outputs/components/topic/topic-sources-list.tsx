import { BookOpen } from "lucide-react";

import type { TopicSource } from "@/lib/topic-details";

export function TopicSourcesList({ sources }: { sources: TopicSource[] }) {
  return (
    <section
      aria-labelledby="topic-sources-heading"
      className="mt-20 border-t border-border pt-12"
    >
      <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-gold">
        <BookOpen aria-hidden="true" className="h-4 w-4" />
        <span>Primary Literature & Citations</span>
      </div>
      <h2
        className="mt-3 text-2xl font-semibold tracking-tight"
        id="topic-sources-heading"
      >
        Foundational texts and papers
      </h2>

      <div className="mt-6 grid gap-4">
        {sources.map((source) => (
          <div
            className="rounded-2xl border border-border bg-surface p-5 transition hover:border-sky/40"
            key={source.title}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium text-foreground">{source.title}</h3>
              <span className="font-mono text-xs text-sky">{source.year}</span>
            </div>
            <p className="mt-1 text-sm text-gold">{source.authorOrPublisher}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{source.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
