import {
  ArrowRight,
  ExternalLink,
  FileText,
  FlaskConical,
  Waypoints,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work: Real Product Case Studies",
  description:
    "Review real Restacked product case studies, including Varentus and Reach.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Restacked Work | Real Case Studies and Delivery Outcomes",
    description:
      "See how Restacked solves product, engineering, and infrastructure challenges across industries.",
    url: "/work",
  },
};

type CaseStudy = {
  title: string;
  industry: string;
  label: "Built by Restacked";
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  outcomes: string[];
  icon: ComponentType<{ className?: string }>;
  externalUrl?: string;
  externalLabel?: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Varentus",
    industry: "AI Governance SaaS",
    label: "Built by Restacked",
    problem:
      "SMBs were facing widespread shadow AI usage, low policy awareness, and mounting regulatory pressure without an affordable self-serve governance platform.",
    solution:
      "Built an AI governance platform that combines tool discovery, policy creation, approved tool controls, employee attestation, training, and compliance reporting in one self-serve workflow.",
    features: [
      "AI tool discovery and usage visibility",
      "Policy builder with attestation workflows",
      "Compliance snapshots and approved tool registry",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "OpenAI",
      "Stripe",
      "Google Workspace API",
    ],
    outcomes: [
      "Defined a clear AI governance product architecture for SMBs",
      "Packaged policy, discovery, and compliance workflows into a single platform direction",
      "Created a launch-ready SaaS foundation aligned with self-serve adoption goals",
    ],
    icon: FileText,
    externalUrl: siteConfig.varentusUrl,
    externalLabel: "Visit Varentus",
  },
  {
    title: "Reach",
    industry: "Social Lead Generation",
    label: "Built by Restacked",
    problem:
      "Operators and GTM teams needed a reliable way to monitor high-intent social conversations, prioritize leads, and prevent follow-up work from stalling.",
    solution:
      "Built a Reddit-first social lead engine with deterministic scoring, dedupe workflows, and structured pipeline operations that support auditable outreach execution.",
    features: [
      "Configurable subreddit monitoring with keyword-group matching",
      "Deterministic lead scoring, duplicate handling, and queue triage",
      "Follow-up tasks, activity timeline events, and dashboard analytics",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Telegram"],
    outcomes: [
      "Reduced manual monitoring overhead for social lead discovery",
      "Improved lead workflow consistency across queue, stage, and tasks",
      "Established a roadmap-ready foundation for X and LinkedIn expansion",
    ],
    icon: Waypoints,
    externalUrl: siteConfig.reachUrl,
    externalLabel: "Visit Reach",
  },
];

const templateSections = [
  "Business Problem",
  "Our Solution",
  "Key Features",
  "Technology Stack",
  "Measurable Outcomes",
];

export default function WorkPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-24">
        <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Portfolio and case studies
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Real product case studies built by Restacked.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Our case studies use a consistent structure so teams can quickly
          understand context, execution, and outcomes. Varentus and Reach are
          featured as active products built by Restacked.
        </p>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="surface-card bg-card/90">
          <h2 className="text-xl font-semibold">Case Study Template</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Every project summary follows this format to keep comparisons clear
            and decision-ready.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {templateSections.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-5">
          {caseStudies.map((study) => (
            <article key={study.title} className="surface-card">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    <study.icon className="h-3.5 w-3.5 text-primary" />
                    {study.industry}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold">{study.title}</h2>
                </div>
                <span
                  className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {study.label}
                </span>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Business Problem
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Our Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Key Features
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {study.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span
                          className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Technology Stack
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Outcomes
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {study.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span
                          className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {study.externalUrl ? (
                <a
                  href={study.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition hover:opacity-80"
                >
                  {study.externalLabel ?? `Visit ${study.title}`}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="rounded-3xl border border-primary/30 bg-primary/10 px-6 py-10 text-center md:px-12">
          <FlaskConical className="mx-auto h-7 w-7 text-primary" />
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Want a case study for your own product roadmap?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We can run a discovery sprint and map your business goals into a
            scoped solution with architecture, milestones, and risks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="cta-button">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/services" className="ghost-button">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
