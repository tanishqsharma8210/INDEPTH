type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 text-center lg:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        {eyebrow}
      </p>
      <h1 className="mt-5 text-balance font-serif text-5xl tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-muted">
        {description}
      </p>
    </section>
  );
}
