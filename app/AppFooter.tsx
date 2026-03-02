import { siteConfig } from "@/lib/site";

import { ArrowUpRight, Dot } from "lucide-react";
import Image from "next/image";

export function AppFooter() {
  return (
    <footer className="mt-16 border-t border-border/70 bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-header.png"
            width={224}
            height={48}
            alt="Restacked, LLC logo"
            className="h-auto w-40 dark:hidden"
          />
          <Image
            src="/logo-header-white.png"
            width={224}
            height={48}
            alt="Restacked, LLC logo"
            className="hidden h-auto w-40 dark:block"
          />
          <p className="text-xs text-muted-foreground">
            Software. Optimized.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition hover:text-foreground"
          >
            {siteConfig.email}
          </a>
          <Dot className="h-4 w-4" />
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="transition hover:text-foreground"
          >
            {siteConfig.phone}
          </a>
          <Dot className="h-4 w-4" />
          <a
            href={siteConfig.varentusUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-foreground"
          >
            Varentus
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <Dot className="h-4 w-4" />
          <a
            href={siteConfig.reachUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-foreground"
          >
            Reach
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <Dot className="h-4 w-4" />
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.legalName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
