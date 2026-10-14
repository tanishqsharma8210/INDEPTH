"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navigationItems } from "@/components/navigation/navigation-items";
import { IconButton } from "@/components/ui/icon-button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <IconButton
        label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </IconButton>
      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-4 top-[4.75rem] rounded-2xl border border-border bg-surface p-3 shadow-glow"
        >
          {navigationItems.map((item) => (
            <Link
              className="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              href={item.href}
              key={item.label}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
