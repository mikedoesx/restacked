import {
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { featuredProducts } from "@/lib/featured-products";

export const metadata: Metadata = {
  title: "Products | Varentus, Reach, and Upcoming Restacked Tools",
  description:
    "Explore Restacked products including Varentus and Reach, plus upcoming tools for AI governance and social lead generation teams.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Restacked Products | Varentus, Reach, and Upcoming Launches",
    description:
      "Productized software from Restacked with a focus on practical AI and business workflow acceleration.",
    url: "/products",
  },
};

const pricingTiers = [
  {
    name: "Starter",
    price: "$199/mo",
    annualPrice: "$1,910/year",
    audience: "Getting AI governance live quickly",
    summary:
      "Discovery, policy publishing, attestations, and baseline compliance workflows for teams getting started.",
    features: [
      "Workspace discovery",
      "Approve / restrict / block registry controls",
      "Unlimited attestations",
      "1 published policy",
      "1 training module",
      "1 compliance export per month",
    ],
  },
  {
    name: "Growth",
    price: "$399/mo",
    annualPrice: "$3,830/year",
    audience: "Running governance as an operating process",
    summary:
      "Adds ongoing governance depth for teams that need recurring policy, training, and reporting workflows.",
    features: [
      "Everything in Starter",
      "Unlimited policies",
      "Unlimited training modules",
      "Unlimited attestations and exports",
      "Weekly scheduled compliance snapshots",
    ],
    recommended: true,
  },
  {
    name: "Scale",
    price: "$749/mo",
    annualPrice: "$7,190/year",
    audience: "Mature programs needing deeper control",
    summary:
      "Designed for organizations that need extended retention, API access, and higher-touch governance support.",
    features: [
      "Everything in Growth",
      "Extended retention configuration",
      "Chrome extension coverage",
      "API access",
      "MSP mode",
      "Priority support",
    ],
  },
];

const upcoming = [
  {
    title: "AI Delivery Copilot",
    description:
      "A product planning assistant for delivery teams that need clearer estimation and execution visibility.",
  },
  {
    title: "Incident Readiness Console",
    description:
      "A lightweight operational command center for cloud teams managing uptime and incident response.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-24">
        <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Restacked products
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Products that turn AI into practical business leverage.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Alongside our bespoke software services, Restacked builds products
          that solve focused operational problems. Varentus and Reach are our
          featured platforms for AI governance and social lead generation
          workflows.
        </p>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-4 lg:grid-cols-2">
          {featuredProducts.map((product) => (
            <article
              key={product.slug}
              className="surface-card overflow-hidden border-primary/30 bg-primary/10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="inline-flex rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-semibold text-primary">
                    Featured Product
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold">{product.name}</h2>
                  <p className="mt-2 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {product.statusLabel}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {product.summary}
                  </p>
                </div>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button"
                >
                  {product.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {product.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {product.roadmapNote ? (
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  {product.roadmapNote}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Varentus pricing model
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Varentus currently uses three paid plans built around the maturity
            of your AI governance program, from getting started quickly to
            operating with deeper control and support.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article key={tier.name} className="surface-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="mt-2 text-2xl font-semibold text-primary">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {tier.annualPrice}
                  </p>
                </div>
                {tier.recommended ? (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Recommended
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm font-medium text-primary">
                {tier.audience}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {tier.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mb-8 flex items-center gap-2">
          <BriefcaseBusiness className="h-5 w-5 text-primary" />
          <h2 className="text-3xl font-semibold md:text-4xl">
            Upcoming products
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((item) => (
            <article key={item.title} className="surface-card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="rounded-3xl border border-primary/30 bg-primary/10 px-6 py-10 text-center md:px-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Need a custom product strategy?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            If your team needs productized AI capabilities or a new SaaS
            direction, we can help design and build it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="cta-button">
              Talk to Restacked
            </Link>
            <Link href="/work" className="ghost-button">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
