import { HelpCircle } from "lucide-react";

export function TopicInquiries({ questions }: { questions: string[] }) {
  return (
    <section className="mt-20 rounded-3xl border border-border bg-surface-muted/30 p-7 sm:p-10">
      <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-sky">
        <HelpCircle aria-hidden="true" className="h-4 w-4" />
        <span>Active Frontiers</span>
      </div>
      <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
        Enduring questions science and inquiry are actively exploring
      </h2>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Every field is defined as much by its unanswered inquiries as by its settled facts.
      </p>

      <ul className="mt-8 space-y-4">
        {questions.map((question, index) => (
          <li
            className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 leading-7 text-foreground"
            key={index}
          >
            <span
              aria-hidden="true"
              className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold"
            >
              {index + 1}
            </span>
            <span className="leading-7 text-muted">{question}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
