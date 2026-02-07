import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Handshake,
  Lightbulb,
  Target,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { companyStats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Restacked: Mission, Values, and Engineering Approach",
  description:
    "Learn how Restacked helps businesses build transformative software with user-centered design, scalable architecture, and transparent collaboration.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Restacked | Engineering Excellence with Business Impact",
    description:
      "Discover Restacked's mission, values, and delivery approach across AI, SaaS, and enterprise software initiatives.",
    url: "/about",
  },
};

const values = [
  {
    title: "Excellence",
    description:
      "We hold a high engineering bar and treat quality as part of velocity, not a tradeoff.",
    icon: Target,
  },
  {
    title: "Collaboration",
    description:
      "We work as an embedded partner with clear communication, shared context, and accountable execution.",
    icon: Handshake,
  },
  {
    title: "Innovation",
    description:
      "We apply modern tools and emerging technologies only when they create practical value.",
    icon: Lightbulb,
  },
];

const principles = [
  "User-centered product design grounded in real workflows",
  "Scalable architecture and modular components from day one",
  "Continuous integration, release discipline, and observability",
  "Transparent communication across strategy and implementation",
];

export default function AboutPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-24">
        <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          About Restacked
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          We build software that is not just functional, but transformative.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Restacked exists to help ambitious teams turn ideas into reliable
          digital products. Our mission is to empower businesses with
          cutting-edge software solutions that create lasting competitive
          advantages.
        </p>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="surface-card">
            <Compass className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold">Our story</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Restacked was built around one simple idea: software teams move
              faster when product thinking and engineering execution are tightly
              connected. We partner with startups and enterprises that need
              clear architecture, dependable delivery, and measurable impact.
            </p>
          </article>
          <article className="surface-card">
            <h2 className="text-2xl font-semibold">Our approach</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {principles.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-4 rounded-2xl border border-border/80 bg-card/85 p-6 text-center backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Values that shape every engagement
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="surface-card">
              <value.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="rounded-3xl border border-primary/30 bg-primary/10 px-6 py-10 text-center md:px-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Let&apos;s build your next product with confidence.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            If you need a strategic technology partner for product development,
            modernization, or AI integration, we&apos;re ready to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="cta-button">
              Start the Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/work" className="ghost-button">
              Review Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
