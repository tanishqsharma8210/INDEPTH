"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

import { GlobeFallback } from "@/components/prehistoric-life/globe/globe-fallback";
import type { RangeRegion } from "@/lib/prehistoric-life/types";

const AnimalRangeGlobe = dynamic(
  () =>
    import("@/components/prehistoric-life/globe/animal-range-globe").then(
      (module) => module.AnimalRangeGlobe,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-[25rem] animate-pulse rounded-3xl border border-border bg-surface-muted sm:h-[30rem]" />
    ),
  },
);

function subscribeToMotionPreference(listener: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", listener);
  return () => mediaQuery.removeEventListener("change", listener);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function supportsWebGl() {
  const canvas = document.createElement("canvas");
  return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
}

export function RangeAndWorld({ regions }: { regions: RangeRegion[] }) {
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    () => false,
  );
  const canRenderWebGl = useSyncExternalStore(
    () => () => undefined,
    supportsWebGl,
    () => false,
  );

  return canRenderWebGl ? (
    <AnimalRangeGlobe reducedMotion={reducedMotion} regions={regions} />
  ) : (
    <GlobeFallback regions={regions} />
  );
}
