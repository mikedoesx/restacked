import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  ShieldCheck,
  Smartphone,
  Waypoints,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services: AI, Web, Mobile, DevOps, and Technical Consulting",
  description:
    "Restacked provides custom software development, AI consulting, mobile engineering, DevOps automation, and fractional CTO services for startups and enterprises.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Restacked Services | Custom Software and AI Delivery",
    description:
      "Move faster with a full-stack team covering architecture, implementation, and cloud operations.",
    url: "/services",
  },
};

const serviceCards = [
  {
    title: "Web Development",
    subtitle: "Next.js, React, Node.js, TypeScript",
    benefit: "Launch fast and scale without rewriting your platform.",
    details: [
      "Modern web platforms with strong SEO and performance",
      "Secure APIs and backend services designed for growth",
      "Clear release cadence that reduces time-to-market",
    ],
    icon: Code2,
  },
  {
    title: "Mobile Development",
    subtitle: "React Native and Flutter delivery",
    benefit:
      "Ship reliable mobile products for iOS and Android from one roadmap.",
    details: [
      "Native and cross-platform app builds",
      "Performance optimization for smooth UX",
      "Release planning and App Store / Play Store support",
    ],
    icon: Smartphone,
  },
  {
    title: "AI / ML Consulting",
    subtitle: "Applied AI for product and operations",
    benefit:
      "Embed practical AI features that improve user value and team efficiency.",
    details: [
      "Assistant and workflow design for business use cases",
      "Retrieval, summarization, and decision-support pipelines",
      "Measurement frameworks to prove impact",
    ],
    icon: BrainCircuit,
  },
  {
    title: "Technical Consulting",
    subtitle: "Architecture, stack selection, code audits",
    benefit:
      "Reduce technical debt and make high-confidence engineering decisions.",
    details: [
      "Architecture reviews and migration planning",
      "Codebase health audits with prioritized action plans",
      "Fractional CTO guidance for roadmap and team structure",
    ],
    icon: Waypoints,
  },
  {
    title: "DevOps & Infrastructure",
    subtitle: "AWS, GCP, Azure, CI/CD",
    benefit: "Improve release reliability, uptime, and observability.",
    details: [
      "CI/CD automation and deployment hardening",
      "Cloud architecture for cost and performance",
      "Monitoring, alerts, and incident-readiness baselines",
    ],
    icon: Cloud,
  },
  {
    title: "Security & Compliance Support",
    subtitle: "Enterprise-grade engineering practices",
    benefit: "Protect customer trust with secure defaults built into delivery.",
    details: [
      "Secure coding and dependency hygiene",
      "Auth, access-control, and data-protection patterns",
      "Audit-ready documentation and operational guardrails",
    ],
    icon: ShieldCheck,
  },
];

const outcomes = [
  "Faster MVP and feature launches",
  "Lower technical debt and maintenance burden",
  "Higher engineering confidence for founders and CTOs",
  "Scalable cloud infrastructure with predictable releases",
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-24">
        <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Services for startups, growth-stage teams, and enterprise
          modernization
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Full-stack software services designed around business outcomes.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Restacked delivers custom software development, AI consulting, DevOps,
          and CTO-level technical strategy. Every engagement is structured to
          speed up delivery while keeping quality and scalability high.
        </p>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {serviceCards.map((service) => (
            <article key={service.title} className="surface-card">
              <service.icon className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-2xl font-semibold">{service.title}</h2>
              <p className="mt-1 text-sm font-medium text-primary">
                {service.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed">{service.benefit}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.details.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="rounded-2xl border border-border/80 bg-card/85 p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            What you gain by working with Restacked
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {outcomes.map((outcome) => (
              <p
                key={outcome}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden
                />
                {outcome}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="rounded-3xl border border-primary/30 bg-primary/10 px-6 py-10 text-center md:px-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Need help selecting the right service mix?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We can map your product goals, timeline, and team constraints into a
            practical execution plan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="cta-button">
              Get a Project Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/work" className="ghost-button">
              See Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
