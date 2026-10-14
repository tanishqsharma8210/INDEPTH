import { Search } from "lucide-react";
import Link from "next/link";

import { MobileMenu } from "@/components/navigation/mobile-menu";
import { navigationItems } from "@/components/navigation/navigation-items";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { IconButton } from "@/components/ui/icon-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          aria-label="INDEPTH home"
          className="group flex items-center gap-2.5"
          href="/"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold font-serif text-lg font-bold text-ink transition-transform group-hover:-rotate-6">
            I
          </span>
          <span className="text-sm font-semibold tracking-[0.2em]">INDEPTH</span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navigationItems.map((item) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <IconButton label="Search coming soon" title="Search coming soon">
            <Search className="h-4 w-4" />
          </IconButton>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
