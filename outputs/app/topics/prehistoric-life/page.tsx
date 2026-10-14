import type { Metadata } from "next";
import { ArrowRight, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/common/page-intro";
import { Button } from "@/components/ui/button";
import { prehistoricAnimals } from "@/lib/prehistoric-life/animals";

export const metadata: Metadata = {
  title: "Prehistoric Life",
  description:
    "Explore evidence-aware learning journeys through iconic Ice Age animals and their changing worlds.",
};

export default function PrehistoricLifePage() {
  return (
    <div className="pb-24 pt-12 sm:pt-20">
      <PageIntro
        eyebrow="Prehistoric Life"
        title="Read the Ice Age through its survivors and ghosts."
        description="These learning journeys begin with fossil evidence—then make room for the questions science is still working to answer."
      />
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface-muted/55 p-7 sm:p-10">
          <Compass aria-hidden="true" className="h-6 w-6 text-sky" />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">
            Evidence before spectacle
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            Each journey separates well-supported evidence from informed inference.
            Geographic highlights describe fossil-supported regions, not exact prehistoric
            borders or guaranteed continuous ranges.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {prehistoricAnimals.map((animal) => (
            <article
              className="group overflow-hidden rounded-3xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow"
              key={animal.slug}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  alt={animal.image.alt}
                  className="object-cover transition duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  src={animal.image.src}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/45 to-transparent"
                />
              </div>
              <div className="flex min-h-80 flex-col p-7">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
                  {animal.eyebrow}
                </p>
                <h2 className="mt-5 font-serif text-3xl tracking-tight">
                  {animal.commonName}
                </h2>
                <p className="mt-2 text-sm italic text-sky">{animal.scientificName}</p>
                <p className="mt-5 flex-1 leading-7 text-muted">{animal.summary}</p>
                <Button asChild className="mt-7 w-fit" variant="outline">
                  <Link href={`/topic/prehistoric-life/${animal.slug}`}>
                    Enter journey{" "}
                    <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
