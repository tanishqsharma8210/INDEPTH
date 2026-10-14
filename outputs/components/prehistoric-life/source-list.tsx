import { ExternalLink } from "lucide-react";

import type { Source } from "@/lib/prehistoric-life/types";

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section
      aria-labelledby="sources-heading"
      className="mt-16 border-t border-border pt-10"
    >
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
        Research notes
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight" id="sources-heading">
        Sources behind this page
      </h2>
      <ul className="mt-6 grid gap-3">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              className="group flex items-center justify-between gap-5 rounded-2xl border border-border bg-surface px-5 py-4 transition-colors hover:border-sky/50"
              href={source.url}
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <span className="block font-medium">{source.title}</span>
                <span className="mt-1 block text-sm text-muted">{source.publisher}</span>
              </span>
              <ExternalLink
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-sky"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
