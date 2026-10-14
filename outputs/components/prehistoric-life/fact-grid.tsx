import type { AnimalFact } from "@/lib/prehistoric-life/types";

export function FactGrid({ facts }: { facts: AnimalFact[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
      {facts.map((fact) => (
        <div className="bg-surface p-5" key={fact.label}>
          <dt className="text-xs font-medium uppercase tracking-[0.14em] text-gold">
            {fact.label}
          </dt>
          <dd className="mt-2 text-sm leading-6 text-muted">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
