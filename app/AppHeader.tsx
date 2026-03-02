"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/site";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(12,11,25,0.94),rgba(10,10,22,0.9))]">
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

        <nav className="mx-2 flex-1 overflow-x-auto" aria-label="Primary">
          <div className="flex w-max min-w-full items-center justify-center gap-1">
            <NavLinks />
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(88,68,214,0.18)] transition hover:opacity-90 dark:shadow-[0_14px_36px_rgba(124,97,255,0.28)] sm:inline-flex"
          >
            Start Project
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "rounded-lg px-2.5 py-2 text-xs font-medium transition sm:px-3 sm:text-sm",
              active
                ? "bg-primary/10 text-primary dark:bg-primary/15"
                : "text-muted-foreground hover:bg-muted hover:text-foreground dark:hover:bg-white/5",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
