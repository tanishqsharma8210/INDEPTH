import { ArrowRight, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { prehistoricAnimals } from "@/lib/prehistoric-life/animals";

type JourneyNavigationProps = {
  currentSlug: string;
};

export function JourneyNavigation({ currentSlug }: JourneyNavigationProps) {
  const otherAnimals = prehistoricAnimals.filter((animal) => animal.slug !== currentSlug);

  return (
    <section
      aria-labelledby="connected-journeys-heading"
      className="mt-20 border-t border-border pt-16"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-gold">
            <Compass aria-hidden="true" className="h-4 w-4" /> Connected journeys
          </p>
          <h2
            className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl"
            id="connected-journeys-heading"
          >
            Continue your Ice Age exploration
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Follow the evidence across other late Pleistocene species from the same
            changing world.
          </p>
        </div>
        <Button asChild size="sm" variant="outline">
          <Link href="/topics/prehistoric-life">
            View all 3 journeys{" "}
            <ArrowRight aria-hidden="true" className="ml-2 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {otherAnimals.map((animal) => (
          <article
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow"
            key={animal.slug}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                alt={animal.image.alt}
                className="object-cover transition duration-500 group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                src={animal.image.src}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                {animal.eyebrow}
              </p>
              <h3 className="mt-3 font-serif text-2xl tracking-tight">
                {animal.commonName}
              </h3>
              <p className="mt-1 text-sm italic text-sky">{animal.scientificName}</p>
              <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted">
                {animal.summary}
              </p>
              <Button asChild className="mt-6 w-fit" size="sm" variant="outline">
                <Link href={`/topic/prehistoric-life/${animal.slug}`}>
                  Explore journey{" "}
                  <ArrowRight aria-hidden="true" className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
