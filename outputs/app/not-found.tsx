import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col justify-center px-6 py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">404</p>
      <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-6xl">
        That path is not here.
      </h1>
      <p className="mx-auto mt-5 max-w-lg leading-7 text-muted">
        The page may have moved, or the journey has not been mapped yet.
      </p>
      <div className="mt-9">
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}
