import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { Topic } from "@/lib/topics";

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  const Icon = topic.icon;
  return (
    <Link
      className="group rounded-3xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      href={topic.href ?? `/topic/${topic.slug}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-2">
          {topic.badge && (
            <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-xs font-medium uppercase tracking-[0.12em] text-gold">
              {topic.badge}
            </span>
          )}
          <ArrowUpRight
            aria-hidden="true"
            className="h-5 w-5 text-muted transition group-hover:text-sky"
          />
        </div>
      </div>
      <h2 className="mt-10 text-xl font-semibold tracking-tight">{topic.name}</h2>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
        {topic.description}
      </p>
    </Link>
  );
}
