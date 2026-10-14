import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PrehistoricAnimal } from "@/lib/prehistoric-life/types";

export function AnimalHero({ animal }: { animal: PrehistoricAnimal }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-muted/35">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(200,164,93,0.17),transparent_28%),radial-gradient(circle_at_12%_75%,rgba(77,168,218,0.12),transparent_28%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:px-8">
        <Button
          asChild
          size="sm"
          variant="ghost"
          className="-ml-3 text-muted hover:text-foreground"
        >
          <Link href="/topics/prehistoric-life">
            <ArrowLeft aria-hidden="true" className="mr-2 h-4 w-4" />
            Prehistoric Life
          </Link>
        </Button>
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.78fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
              {animal.eyebrow}
            </p>
            <h1 className="mt-5 text-balance font-serif text-5xl tracking-tight sm:text-6xl">
              {animal.commonName}
            </h1>
            <p className="mt-4 font-serif text-2xl italic text-sky">
              {animal.scientificName}
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              {animal.summary}
            </p>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-border bg-surface shadow-glow">
            <div className="relative aspect-[4/3]">
              <Image
                alt={animal.image.alt}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 42vw"
                src={animal.image.src}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm leading-6 text-muted">
              {animal.image.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
