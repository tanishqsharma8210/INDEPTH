import Link from "next/link";

const footerLinks = [
  { label: "Topics", href: "/topics" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "About", href: "/about" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <Link className="text-sm font-semibold tracking-[0.2em]" href="/">
            INDEPTH
          </Link>
          <p className="mt-2 text-sm text-muted">Learning through connected journeys.</p>
        </div>
        <div className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <Link
              className="text-sm text-muted transition-colors hover:text-foreground"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
