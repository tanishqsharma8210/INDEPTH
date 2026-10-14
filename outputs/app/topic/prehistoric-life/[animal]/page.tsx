import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { AnimalHero } from "@/components/prehistoric-life/animal-hero";
import { EvidenceList } from "@/components/prehistoric-life/evidence-list";
import { FactGrid } from "@/components/prehistoric-life/fact-grid";
import { JourneyNavigation } from "@/components/prehistoric-life/journey-navigation";
import { RangeAndWorld } from "@/components/prehistoric-life/range-and-world";
import { RangeSummary } from "@/components/prehistoric-life/range-summary";
import { SourceList } from "@/components/prehistoric-life/source-list";
import { getPrehistoricAnimal, prehistoricAnimals } from "@/lib/prehistoric-life/animals";

type AnimalPageProps = {
  params: Promise<{ animal: string }>;
};

export function generateStaticParams() {
  return prehistoricAnimals.map((animal) => ({ animal: animal.slug }));
}

export async function generateMetadata({ params }: AnimalPageProps): Promise<Metadata> {
  const { animal: slug } = await params;
  const animal = getPrehistoricAnimal(slug);
  if (!animal) return { title: "Journey not found" };
  return { title: animal.commonName, description: animal.summary };
}

export default async function PrehistoricAnimalPage({ params }: AnimalPageProps) {
  const { animal: slug } = await params;
  const animal = getPrehistoricAnimal(slug);
  if (!animal) notFound();

  return (
    <>
      <AnimalHero animal={animal} />
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky">
              At a glance
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight">
              Life in a changing world
            </h2>
            <div className="mt-8">
              <FactGrid facts={animal.facts} />
            </div>
          </div>
          <aside className="rounded-3xl border border-border bg-surface p-7">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
              Timeline
            </p>
            <p className="mt-4 text-xl font-semibold">{animal.timePeriod}</p>
            <p className="mt-3 leading-7 text-muted">{animal.dateRange}</p>
          </aside>
        </div>

        <section className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-7 sm:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
              Habitat and climate
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              The landscapes it inhabited
            </h2>
            <p className="mt-5 leading-8 text-muted">{animal.habitat}</p>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-7 sm:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
              Diet and ecology
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Its place in the food web
            </h2>
            <p className="mt-5 leading-8 text-muted">{animal.diet}</p>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-7 sm:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
              Physical traits
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              What the remains reveal
            </h2>
            <p className="mt-5 leading-8 text-muted">{animal.physicalTraits}</p>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-7 sm:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
              Nature and behaviour
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Evidence, not mythology
            </h2>
            <p className="mt-5 leading-8 text-muted">{animal.behaviour}</p>
          </div>
        </section>

        <section className="mt-20 grid gap-10 rounded-3xl border border-border bg-surface-muted/45 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky">
              Reading the evidence
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight">
              A body built for its world
            </h2>
            <p className="mt-5 leading-8 text-muted">{animal.adaptation}</p>
            <div className="mt-8 border-t border-border pt-8">
              <h3 className="text-xl font-semibold tracking-tight">
                Fossils as a record
              </h3>
              <p className="mt-3 leading-8 text-muted">{animal.fossilEvidence}</p>
            </div>
            <div className="mt-8 border-t border-border pt-8">
              <h3 className="text-xl font-semibold tracking-tight">
                Why this journey matters
              </h3>
              <p className="mt-3 leading-8 text-muted">{animal.whyItMatters}</p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="relative aspect-[4/3]">
              <Image
                alt={animal.image.alt}
                className="object-cover"
                fill
                sizes="(max-width: 1023px) 100vw, 38vw"
                src={animal.image.src}
              />
            </div>
            <figcaption className="px-5 py-4 text-sm leading-6 text-muted">
              {animal.image.caption}
            </figcaption>
          </figure>
        </section>

        <section className="mt-20 border-y border-border py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
              End of the journey
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight">
              Extinction in context
            </h2>
            <p className="mt-5 leading-8 text-muted">{animal.extinction}</p>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="range-heading">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky">
            Range and world
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight" id="range-heading">
            Where the evidence places it
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-muted">
            Highlighted range areas are broad evidence markers derived from fossil and
            research records. They do not represent precise territory, modern political
            borders, or a complete species-distribution model.
          </p>
          <div className="mt-8">
            <RangeAndWorld regions={animal.rangeRegions} />
          </div>
          <div className="mt-6">
            <RangeSummary regions={animal.rangeRegions} summary={animal.rangeSummary} />
          </div>
        </section>

        <section className="mt-20 grid gap-5 lg:grid-cols-2">
          <EvidenceList items={animal.known} title="What we know" tone="known" />
          <EvidenceList
            items={animal.uncertain}
            title="What remains uncertain"
            tone="uncertain"
          />
        </section>
        <SourceList sources={animal.sources} />
        <JourneyNavigation currentSlug={animal.slug} />
      </article>
    </>
  );
}
