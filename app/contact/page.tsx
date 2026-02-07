import { Clock3, Mail, Phone, Users } from "lucide-react";
import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Restacked | Start Your Software Project",
  description:
    "Contact Restacked for custom software, AI consulting, and DevOps support. We typically respond within 24 hours and work with startups and enterprises.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Restacked | Let\'s Build Something Impactful",
    description:
      "Share your project goals and timeline. Restacked provides software delivery support from strategy through launch.",
    url: "/contact",
  },
};

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Simple web applications usually take 4-8 weeks. Enterprise platforms and multi-team initiatives commonly run 3-6 months.",
  },
  {
    question: "Do you work with startups and enterprise teams?",
    answer:
      "Yes. We support early-stage founders building MVPs and enterprise organizations modernizing existing systems.",
  },
  {
    question: "Can you collaborate with our existing engineering team?",
    answer:
      "Absolutely. We often integrate directly with internal teams to provide extra capacity or specialized expertise.",
  },
  {
    question: "When should we expect a response?",
    answer:
      "We review incoming requests quickly and usually respond within 24 hours.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-24">
        <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Contact Restacked
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Let&apos;s build something amazing together.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Share your goals and constraints. We&apos;ll help scope the right
          approach and outline a practical plan to get from idea to production.
        </p>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm />

          <aside className="space-y-5">
            <div className="surface-card">
              <h2 className="text-xl font-semibold">Project Fit</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  We partner with startups, scaleups, and enterprise teams.
                </li>
                <li className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-primary" />
                  Most engagements begin with a focused discovery and delivery
                  plan.
                </li>
              </ul>
            </div>

            <div className="surface-card">
              <h2 className="text-xl font-semibold">Direct Contact</h2>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                    className="hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="surface-card">
              <h2 className="text-xl font-semibold">Engagement Models</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Fixed-scope MVP builds</li>
                <li>Dedicated product squad partnerships</li>
                <li>Fractional CTO and architecture advisory</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="surface-card">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
