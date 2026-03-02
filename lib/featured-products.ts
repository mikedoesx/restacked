import { siteConfig } from "@/lib/site";

export type FeaturedProduct = {
  slug: "varentus" | "reach";
  name: string;
  url: string;
  statusLabel: string;
  summary: string;
  bullets: [string, string, string];
  roadmapNote?: string;
  ctaLabel: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    slug: "varentus",
    name: "Varentus",
    url: siteConfig.varentusUrl,
    statusLabel: "Public Product",
    summary:
      "Varentus is our AI governance platform for SMBs that helps teams discover AI tool usage, set enforceable policies, and prove compliance readiness without a heavy implementation cycle.",
    bullets: [
      "AI tool discovery across the organization",
      "Policy builder and employee attestation",
      "Compliance snapshots mapped to real regulations",
    ],
    ctaLabel: "Visit Varentus",
  },
  {
    slug: "reach",
    name: "Reach",
    url: siteConfig.reachUrl,
    statusLabel: "Internal Product (Private Beta)",
    summary:
      "Reach is a configurable social lead engine for operators and GTM teams with Reddit-first lead monitoring and workflow management.",
    bullets: [
      "Monitor subreddits with configurable keyword groups.",
      "Deterministic lead scoring, dedupe handling, and pipeline triage.",
      "Follow-up tasks, activity timeline, and operator analytics.",
    ],
    roadmapNote:
      "Roadmap: X connector MVP and LinkedIn manual-assisted workflows.",
    ctaLabel: "Visit Reach",
  },
];
