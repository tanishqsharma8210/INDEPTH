import type { TopicChapter } from "@/lib/topic-details";

export function TopicChapters({ chapters }: { chapters: TopicChapter[] }) {
  return (
    <section aria-labelledby="chapters-heading" className="mt-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
          Landmark Milestones
        </p>
        <h2
          className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl"
          id="chapters-heading"
        >
          Pivotal turning points and discoveries
        </h2>
        <p className="mt-3 leading-7 text-muted">
          Trace the empirical breakthroughs, systemic shifts, and foundational ideas
          that shaped this discipline.
        </p>
      </div>

      <div className="mt-10 grid gap-6">
        {chapters.map((chapter) => (
          <article
            className="group rounded-3xl border border-border bg-surface p-7 transition duration-300 hover:border-gold/40 hover:shadow-glow sm:p-9"
            key={chapter.id}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold/15 font-mono text-xs font-bold text-gold">
                  {chapter.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">
                  {chapter.timeframe}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {chapter.keyFigures.map((figure) => (
                  <span
                    className="rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-xs text-muted"
                    key={figure}
                  >
                    {figure}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="mt-6 font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
              {chapter.title}
            </h3>

            <p className="mt-4 text-base leading-8 text-muted">{chapter.summary}</p>

            <div className="mt-6 rounded-2xl border border-border/70 bg-surface-muted/40 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                Systemic Significance
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/90">
                {chapter.significance}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
