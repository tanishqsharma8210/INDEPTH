import type { RangeRegion } from "@/lib/prehistoric-life/types";

export function GlobeFallback({ regions }: { regions: RangeRegion[] }) {
  return (
    <div
      className="rounded-3xl border border-border bg-surface-muted p-7"
      role="img"
      aria-label="Textual geographic range overview"
    >
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky">
        Range overview
      </p>
      <p className="mt-3 leading-7 text-muted">
        A globe is not available on this device. The documented regions are listed below.
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {regions.map((region) => (
          <li
            className="rounded-2xl border border-border bg-surface px-4 py-3"
            key={region.label}
          >
            <span className="font-medium">{region.label}</span>
            <span className="mt-1 block text-sm leading-6 text-muted">
              {region.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
