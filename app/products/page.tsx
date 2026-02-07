import {
  ArrowRight,
  BriefcaseBusiness,
  FileSearch2,
  Gavel,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products | Clausibly and Upcoming Restacked Tools",
  description:
    "Explore Restacked products including Clausibly, our AI-powered contract analysis platform for businesses, freelancers, and legal teams.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Restacked Products | Clausibly and Upcoming Launches",
    description:
      "Productized software from Restacked with a focus on practical AI and business workflow acceleration.",
    url: "/products",
  },
};

const clausiblyFeatures = [
  {
    title: "Natural-language summaries",
    description:
      "Upload complex agreements and receive plain-English explanations your team can act on quickly.",
    icon: FileSearch2,
  },
  {
    title: "Risk alerts",
    description:
      "Surface key clauses and risk areas early to improve review confidence before signatures.",
    icon: TriangleAlert,
  },
  {
    title: "Actionable insights",
    description:
      "Get structured highlights that speed up business, legal, and procurement decision-making.",
    icon: Sparkles,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    audience: "Freelancers and small teams",
    summary: "Great for occasional contract reviews and solo operators.",
  },
  {
    name: "Growth",
    audience: "Growing businesses",
    summary:
      "Designed for recurring contract workflows and cross-functional teams.",
  },
  {
    name: "Enterprise",
    audience: "Legal and procurement organizations",
    summary: "Advanced governance and higher-volume review support.",
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
          that solve focused operational problems. Clausibly is our first
          flagship platform.
        </p>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <article className="surface-card overflow-hidden border-primary/30 bg-primary/10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-semibold text-primary">
                <Gavel className="h-3.5 w-3.5" />
                Featured Product
              </p>
              <h2 className="mt-4 text-3xl font-semibold">Clausibly</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Clausibly helps businesses, freelancers, and legal teams analyze
                contracts faster with AI-powered summarization, clause-level
                risk alerts, and clear next-step recommendations.
              </p>
            </div>
            <a
              href={siteConfig.clausiblyUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-button"
            >
              Try Clausibly
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {clausiblyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-4"
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold md:text-4xl">Pricing model</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Clausibly uses subscription tiers so teams can start small and scale
            usage as contract volume grows.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article key={tier.name} className="surface-card">
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm font-medium text-primary">
                {tier.audience}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {tier.summary}
              </p>
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
