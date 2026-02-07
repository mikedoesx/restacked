import {
  ArrowRight,
  ExternalLink,
  FileText,
  FlaskConical,
  HeartPulse,
  Landmark,
  PackageSearch,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work: Case Studies in SaaS, AI, and Enterprise Software",
  description:
    "Review Restacked case studies including Clausibly and industry-focused software engagements across fintech, healthcare, e-learning, and supply chain.",
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
  label: "Real Project" | "Example Project";
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  outcomes: string[];
  icon: ComponentType<{ className?: string }>;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Clausibly",
    industry: "LegalTech SaaS",
    label: "Real Project",
    problem:
      "Contracts were slowing business decisions because legal language was dense and review workflows required manual interpretation.",
    solution:
      "Built an AI-powered contract analysis SaaS that transforms raw agreements into plain-language summaries with surfaced risks and action points.",
    features: [
      "Natural-language contract summaries",
      "Risk alerting and clause highlighting",
      "Workflow-ready outputs for business teams",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "AI APIs",
      "Cloud Infrastructure",
    ],
    outcomes: [
      "Reduced contract review effort for non-legal teams",
      "Improved visibility into risk before signing",
      "Created a repeatable SaaS foundation for ongoing feature growth",
    ],
    icon: FileText,
  },
  {
    title: "FinTech Operations Platform",
    industry: "FinTech",
    label: "Example Project",
    problem:
      "A scaling finance startup needed to replace fragmented dashboards and manual reconciliation workflows.",
    solution:
      "Designed a secure internal platform consolidating transaction monitoring, reporting, and alert workflows.",
    features: [
      "Role-based access controls",
      "Automated reconciliation",
      "Operational analytics dashboards",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcomes: [
      "Faster issue triage for operations teams",
      "Reduced manual reporting overhead",
      "Higher confidence in data quality",
    ],
    icon: Landmark,
  },
  {
    title: "Care Coordination System",
    industry: "Healthcare",
    label: "Example Project",
    problem:
      "Care teams struggled with disconnected systems for patient records, scheduling, and communication.",
    solution:
      "Implemented a centralized care coordination experience with role-based workflows and secure messaging.",
    features: [
      "Appointment orchestration",
      "Clinical workflow views",
      "Secure provider collaboration",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "HIPAA-ready deployment patterns",
    ],
    outcomes: [
      "Improved coordination between care stakeholders",
      "Lower scheduling friction",
      "Better visibility into patient progress",
    ],
    icon: HeartPulse,
  },
  {
    title: "Supply Chain Insight Hub",
    industry: "Supply Chain",
    label: "Example Project",
    problem:
      "Operations teams lacked real-time inventory and delivery visibility across multiple systems.",
    solution:
      "Delivered a multi-source analytics layer with predictive alerts and executive reporting dashboards.",
    features: [
      "Live inventory views",
      "Delay risk alerts",
      "Custom planning dashboards",
    ],
    technologies: ["React", "Python", "Data Pipelines", "Cloud Monitoring"],
    outcomes: [
      "Faster exception handling",
      "Improved planning visibility",
      "Higher on-time delivery confidence",
    ],
    icon: PackageSearch,
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
          Real delivery stories across SaaS and enterprise software.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Our case studies use a consistent structure so teams can quickly
          understand context, execution, and outcomes. Clausibly is featured as
          an active product built by Restacked.
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
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    study.label === "Real Project"
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
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

              {study.title === "Clausibly" ? (
                <a
                  href={siteConfig.clausiblyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition hover:opacity-80"
                >
                  Visit Clausibly
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
