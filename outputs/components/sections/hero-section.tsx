import { ArrowRight, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/common/fade-in";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(77,168,218,0.13),transparent_28%),radial-gradient(circle_at_25%_15%,rgba(200,164,93,0.12),transparent_22%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-hero-grid bg-[size:46px_46px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-32">
        <div>
          <FadeIn>
            <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-gold">
              <Compass aria-hidden="true" className="h-4 w-4" /> Knowledge, connected
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="mt-7 max-w-3xl text-balance font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Learn the stories beneath the surface.
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-7 max-w-xl text-balance text-lg leading-8 text-muted">
              INDEPTH makes space for the ideas that matter—inviting you to trace their
              origins, connections, and lasting influence.
            </p>
          </FadeIn>
          <FadeIn delay={0.24} className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/topics">
                Explore topics <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Our approach</Link>
            </Button>
          </FadeIn>
        </div>
        <FadeIn delay={0.18} className="mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-[2rem] border border-border bg-surface p-3 shadow-glow">
            <Image
              alt="Abstract constellation connecting ideas across a learning journey"
              className="h-auto w-full rounded-[1.5rem]"
              height={640}
              priority
              src="/journey-constellation.svg"
              width={640}
            />
            <div className="absolute bottom-7 left-7 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur-md">
              <p className="text-xs font-medium text-gold">A starting point</p>
              <p className="mt-1 text-sm">Every idea opens a path.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
