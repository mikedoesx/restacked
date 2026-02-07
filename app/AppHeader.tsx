"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/site";

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="Go to Restacked home" className="shrink-0">
          <Image
            src="/logo-header.png"
            width={224}
            height={48}
            priority
            alt="Restacked, LLC logo"
            className="h-auto w-44 md:w-56 dark:hidden"
          />
          <Image
            src="/logo-header-white.png"
            width={224}
            height={48}
            priority
            alt="Restacked, LLC logo"
            className="hidden h-auto w-44 md:w-56 dark:block"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Start Project
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
          >
            {menuOpen ? (
              <XIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={clsx(
          "overflow-hidden border-t border-border/60 transition-all md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3"
          aria-label="Mobile primary"
        >
          <NavLinks mobile onNavigate={() => setMenuOpen(false)} />
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
          >
            Start Project
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavLinks({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={clsx(
              "rounded-lg px-3 py-2 text-sm font-medium transition",
              mobile && "text-base",
              active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
