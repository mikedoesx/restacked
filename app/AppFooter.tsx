import { navItems, siteConfig } from "@/lib/site";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "AI & ML Consulting", href: "/services" },
  { label: "Custom Web Development", href: "/services" },
  { label: "Mobile Development", href: "/services" },
  { label: "DevOps & Infrastructure", href: "/services" },
];

export function AppFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-primary/30 bg-[linear-gradient(180deg,#120d30_0%,#0a091b_100%)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70rem_26rem_at_20%_-10%,hsl(var(--primary)/0.34),transparent),radial-gradient(40rem_22rem_at_100%_6%,hsl(var(--accent)/0.26),transparent)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logo-header-white.png"
            width={224}
            height={48}
            alt="Restacked, LLC logo"
            className="mb-5 h-auto w-52"
          />
          <p className="max-w-xl text-sm text-white/78">
            Restacked builds AI-powered, enterprise-grade software for startups
            and established teams that need reliable delivery and measurable
            outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-white"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="transition hover:text-white"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/92">
            Services
          </h2>
          <ul className="space-y-2 text-sm text-white/72">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/92">
            Company
          </h2>
          <ul className="space-y-2 text-sm text-white/72">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.clausiblyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition hover:text-white"
              >
                Clausibly
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/58 md:flex-row md:items-center">
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.legalName}. All
            rights reserved.
          </p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
