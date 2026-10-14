type EvidenceListProps = {
  title: string;
  items: string[];
  tone: "known" | "uncertain";
};

export function EvidenceList({ title, items, tone }: EvidenceListProps) {
  const markerClass = tone === "known" ? "bg-sky" : "bg-gold";
  return (
    <section className="rounded-3xl border border-border bg-surface p-7 sm:p-8">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
        Evidence guide
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li className="flex gap-3 leading-7 text-muted" key={item}>
            <span
              aria-hidden="true"
              className={`mt-2 h-2 w-2 shrink-0 rounded-full ${markerClass}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
