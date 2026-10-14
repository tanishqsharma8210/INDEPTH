import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TopicCard } from "@/components/cards/topic-card";
import { Button } from "@/components/ui/button";
import { prehistoricAnimals } from "@/lib/prehistoric-life/animals";
import { topics } from "@/lib/topics";

export function TopicsSection() {
  const previewTopics = topics.slice(0, 4);

  return (
    <section className="py-24 sm:py-32" id="explore">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
              Explore the collection
            </p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">
              Every subject is a doorway.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Choose a field of inquiry. Follow deliberate paths through evidence,
              context, and ideas.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/topics">
              View all topics <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Featured Journey Highlight */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-surface via-surface to-surface-muted p-7 shadow-glow sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                  Featured Journey
                </span>
                <span className="text-xs uppercase tracking-[0.14em] text-sky">
                  3 Guided Chapters
                </span>
              </div>
              <h3 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
                Prehistoric Life: The Ice Age Record
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                Read the late Pleistocene through its apex predators and northern grazers.
                Each journey separates verified fossil evidence from popular myth—complete
                with radiometric timelines, diet isotopes, and an interactive 3D range
                globe.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/topics/prehistoric-life">
                    Explore Ice Age journeys{" "}
                    <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <span className="text-sm text-muted">
                  Smilodon · Woolly mammoth · Dire wolf
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {prehistoricAnimals.map((animal) => (
                <Link
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-gold/50"
                  href={`/topic/prehistoric-life/${animal.slug}`}
                  key={animal.slug}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      alt={animal.image.alt}
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1023px) 30vw, 15vw"
                      src={animal.image.src}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
                    />
                  </div>
                  <div className="p-3">
                    <p className="line-clamp-1 text-xs font-medium text-foreground transition-colors group-hover:text-gold">
                      {animal.commonName}
                    </p>
                    <p className="line-clamp-1 text-[11px] italic text-sky">
                      {animal.scientificName}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Curated Foundations & Disciplines
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {previewTopics.map((topic) => (
              <TopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
