import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  Cpu,
  Gauge,
  Layers,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { companyStats, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Development & Custom Software for Startups and Enterprises",
  description:
    "Restacked turns product ideas into intelligent software. We deliver AI development, full-stack apps, DevOps, and fractional CTO guidance with measurable outcomes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Restacked | Transform Your Vision into Intelligent Software",
    description:
      "Custom software, AI consulting, and cloud-native engineering for founders, CTOs, and product teams.",
    url: "/",
  },
};

const differentiators = [
  {
    title: "AI Expertise",
    description:
      "Embed practical AI in your workflows, products, and data operations without adding unnecessary complexity.",
    icon: Bot,
  },
  {
    title: "Rapid Delivery",
    description:
      "Move from idea to production quickly with focused scopes, iterative releases, and transparent execution.",
    icon: Gauge,
  },
  {
    title: "Enterprise Security",
    description:
      "Ship with security and reliability in mind from day one, including architecture patterns that scale.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Stack Capability",
    description:
      "Design, front-end, backend, infrastructure, and CI/CD under one team so nothing gets lost in handoffs.",
    icon: Layers,
  },
];

const services = [
  {
    title: "Custom Software Development",
    description:
      "Build scalable SaaS and internal tools with Next.js, React, Node.js, and TypeScript.",
    icon: Cpu,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Deploy LLM-powered assistants, retrieval workflows, and predictive capabilities that create real leverage.",
    icon: Bot,
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description:
      "Automate releases, stabilize environments, and improve uptime on AWS, GCP, and Azure.",
    icon: Cloud,
  },
];

const testimonials = [
  {
    quote:
      "Restacked helped us launch our B2B platform faster than expected and gave our internal team a production-ready foundation.",
    person: "Director of Product, HealthTech Client",
  },
  {
    quote:
      "Their architecture and delivery discipline reduced technical debt while improving release velocity across teams.",
    person: "CTO, Enterprise SaaS Client",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="fade-up">
            <p className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              AI Development and Custom Software Studio
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Transform your vision into intelligent software.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              We help founders, CTOs, and product leaders ship secure, scalable
              digital products faster with expert engineering, AI integration,
              and pragmatic technical strategy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="cta-button">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/products" className="ghost-button">
                Explore Products
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Startups to enterprise engagements
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Typical response within 24 hours
              </span>
            </div>
          </div>

          <div className="surface-card fade-in">
            <h2 className="text-xl font-semibold">
              Clausibly Product Spotlight
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Clausibly is our AI-powered contract analysis platform that turns
              dense legal language into plain-English summaries, risk alerts,
              and actionable next steps.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Instant clause-level summaries
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Risk detection for legal and business teams
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Subscription model for freelancers to enterprises
              </li>
            </ul>
            <a
              href={siteConfig.clausiblyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition hover:opacity-80"
            >
              Visit clausibly.com
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-4 rounded-2xl border border-border/80 bg-card/75 p-6 text-center backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="section-shell py-16 md:py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Why teams choose Restacked
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            We combine product thinking and engineering depth so your software
            roadmap stays aligned with business outcomes.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item.title} className="surface-card">
              <item.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Core services
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Built for fast-moving startups and enterprise teams modernizing
              legacy systems.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden text-sm font-semibold text-primary md:inline-flex"
          >
            View all services
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="surface-card">
              <service.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Trusted by product and engineering leaders
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.person} className="surface-card">
              <p className="text-base leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                {item.person}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="rounded-3xl border border-primary/30 bg-primary/10 px-6 py-10 text-center md:px-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Need to ship faster without sacrificing quality?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tell us what you are building and where your team is blocked. We
            will propose a practical path to launch.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="cta-button">
              Book a Consultation
            </Link>
            <Link href="/work" className="ghost-button">
              Review Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
