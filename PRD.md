# Restacked Marketing Site Revamp PRD

Status updated: February 7, 2026

## Overview

Restacked, LLC is a full-stack software engineering studio for startups and enterprises. This PRD defines the marketing-site revamp scope: rewrite messaging, improve visual identity, strengthen SEO, promote Clausibly, and improve conversion-oriented UX.

## Goals and Objectives

- [x] Modernize site voice and SEO with benefit-first copy targeting founders, CTOs, product managers, and business owners.
- [x] Showcase experience and trust signals: 100+ projects, 50+ clients, 10+ years, 24/7 support.
- [x] Promote products and services, including Clausibly and core service offerings.
- [x] Improve visual appeal with a premium, non-template feel.
- [x] Preserve technical integrity with responsive, accessible, SEO-aware implementation.

## Scope and Requirements

### Content Rewrite

- [x] Home page rewritten with stronger hero promise, clear value proposition, differentiators, Clausibly spotlight, and clear CTAs.
- [x] Services page expanded with detailed offerings and benefit-driven language.
- [x] Work page converted to case-study format and includes Clausibly as a real project.
- [x] About page rewritten with mission, values, approach, and proof stats.
- [x] Contact page copy improved with response-time and timeline expectations.
- [x] FAQs included on Contact page, including collaboration with existing teams.
- [x] New Products page added with Clausibly details and future-product placeholders.

### Visual and Theming Requirements

- [x] Brand refresh implemented with updated color tokens and typography hierarchy.
- [x] Layout upgraded with card surfaces, spacing, and improved readability.
- [x] Subtle animations and hover states added.
- [x] Dark-mode toggle added and wired site-wide.
- [x] Responsive behavior preserved across key breakpoints.
- [x] SEO metadata and social metadata added for all primary pages.

### Technical and Engineering Requirements

- [x] Next.js + React + Tailwind stack preserved.
- [x] App Router pages and modular components used.
- [x] Tailwind theme customized with font families and design tokens.
- [x] CI workflow added for lint, format, and build checks.
- [x] PR template added with explicit PRD checklist reminder.
- [x] Contact form now has client-side validation and basic bot honeypot field.
- [ ] Server-side form validation + CRM/email delivery not yet implemented.
- [ ] reCAPTCHA or equivalent anti-spam integration not yet implemented.
- [ ] Unit/integration test suite not yet implemented.
- [x] Basic structured data (Organization JSON-LD) added.
- [x] Optional analytics hook added via Plausible script env var (`NEXT_PUBLIC_PLAUSIBLE_DOMAIN`).

## Phase Checklist

### Phase 1 - Discovery and Planning

- [ ] Audit existing site/code and document technical debt.
- [ ] Competitive analysis (3+ reference sites).
- [ ] Keyword research (SEO tools + keyword list).
- [ ] Persona and user journey mapping.
- [ ] Timeline and ownership planning.

### Phase 2 - Copywriting and Information Architecture

- [x] Drafted benefit-oriented copy for Home, Services, Work, About, Contact, Products.
- [ ] Stakeholder review and copy iteration round not completed.
- [x] Page-level metadata and Open Graph entries added.
- [x] Case-study template structure created and applied in Work page.

### Phase 3 - Visual Design and Theme Implementation

- [x] Theme direction implemented in code (colors, typography, layouts).
- [x] Tailwind theme customization completed.
- [x] Core components redesigned (hero, service cards, case-study cards, CTA sections).
- [x] Dark mode support implemented.
- [x] Responsive layout pass completed.
- [ ] Dedicated image sourcing/compression workflow not completed in this pass.

### Phase 4 - Products and Service Promotion

- [x] Products page created and Clausibly promoted.
- [x] Products link integrated into main navigation and footer.
- [x] Work page updated with Clausibly case study.
- [ ] Dedicated service landing pages for each service keyword cluster not yet created.

### Phase 5 - Implementation and Engineering

- [x] Existing pages refactored with new copy/design and reusable data-driven sections.
- [x] Form UX improved with validation, accessibility labels, and better guidance text.
- [x] Accessibility and semantic markup improved across new pages.
- [ ] Automated unit and integration tests pending.
- [x] Analytics integration path added (Plausible env-based script).
- [x] CI/CD workflow added for PR and main branch checks.

### Phase 6 - Testing and Launch

- [ ] UAT across browsers/devices pending.
- [ ] Performance optimization pass pending.
- [ ] Full SEO audit + sitemap submission pending.
- [ ] Production deployment verification pending.
- [ ] Launch announcement planning pending.

### Phase 7 - Post-Launch and Continuous Improvement

- [ ] Ongoing analytics monitoring and conversion iteration pending.
- [ ] Collect and publish additional testimonials/case studies pending.
- [ ] Continuous content publishing plan pending.
- [ ] Future product announcement roadmap pending.

## Development and Collaboration Checklist

- [x] CI baseline established with lint/format/build checks.
- [x] PR template updated to enforce PRD checklist review.
- [ ] Granular task-level issue linking and TODO tagging process pending.
- [ ] Additional component-level documentation pending.
- [x] TypeScript-first implementation maintained.

## Notes

- This pass focuses on implementable product/design/engineering items directly in the repository.
- External activities (stakeholder reviews, keyword tools, launch comms, production rollout logistics) remain open and should be tracked in follow-up tasks.
