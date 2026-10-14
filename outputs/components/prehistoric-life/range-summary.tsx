import type { RangeRegion } from "@/lib/prehistoric-life/types";

export function RangeSummary({
  summary,
  regions,
}: {
  summary: string;
  regions: RangeRegion[];
}) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-7">
      <p className="leading-7 text-muted">{summary}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {regions.map((region) => (
          <li className="rounded-2xl bg-surface-muted p-4" key={region.label}>
            <p className="font-medium">{region.label}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{region.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
