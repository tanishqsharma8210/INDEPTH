import type { LucideIcon } from "lucide-react";

import { FadeIn } from "@/components/common/fade-in";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
};

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="group h-full rounded-3xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky/10 text-sky transition-colors group-hover:bg-gold/15 group-hover:text-gold">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 leading-7 text-muted">{description}</p>
      </article>
    </FadeIn>
  );
}
