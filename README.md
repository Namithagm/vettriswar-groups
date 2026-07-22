# Vettriswar Groups of Company — Marketing Website

A production-ready marketing site for **Vettriswar Groups of Company**, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

> **Demo data notice:** This build ships with placeholder-free *demo* content —
> sample portfolio projects, testimonials, job openings, and blog posts — plus
> demo contact details (email, phone, address). All of it is clearly marked as
> demo/fictional in the UI and is meant to be replaced with real company data
> before going live. See [Production Checklist](#production-checklist) below.

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, custom "Midnight Executive" navy-and-gold design system
- **Animation:** Framer Motion, GSAP, Lenis (smooth scroll)
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend (contact form + newsletter)
- **UI/Carousel:** Swiper
- **Analytics:** Google Analytics 4 (opt-in via cookie consent), Vercel Analytics

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command         | Description                                  |
|-----------------|-----------------------------------------------|
| `npm run dev`   | Start the local development server            |
| `npm run build` | Create an optimized production build          |
| `npm run start` | Serve the production build locally            |
| `npm run lint`  | Run ESLint against the project                 |

## Project Structure

```
app/                     Next.js App Router pages, layouts, and API routes
  api/contact/           Contact form submission endpoint (Resend)
  api/newsletter/        Newsletter signup endpoint (Resend Audiences)
  privacy-policy/        Privacy Policy page
  terms/                 Terms of Service page
  layout.tsx             Root layout, global <head> metadata & JSON-LD
  page.tsx                Home page (composes all sections)
  sitemap.ts / robots.ts  Dynamic sitemap.xml and robots.txt
components/
  layout/                Navigation, Footer, smooth-scroll provider
  sections/               Hero, About, Services, Portfolio, Careers, Blog, etc.
  ui/                     Reusable UI: buttons, cookie consent, loading screen, etc.
  providers/              Theme provider (next-themes)
lib/
  constants.ts            ⭐ Single source of truth for company name, contact
                            details, address, hours, and social links
  schemas.ts               Zod validation schemas for forms
  utils.ts                 Small shared utilities
public/                   Static assets: logo, favicons, manifest
```

### Where to change company information

All company-facing content — name, tagline, emails, phone numbers, address,
working hours, and social links — lives in **`lib/constants.ts`**. Update the
`SITE` object there and it propagates automatically to the metadata, Open
Graph tags, JSON-LD structured data, footer, contact page, and legal pages.

## Demo Content

The following sections currently contain **demo / fictional content**, clearly
labelled in the UI, so the template is fully explorable out of the box:

- **Portfolio** — 6 sample case studies, each tagged "Demo Project"
- **Testimonials** — 6 sample client quotes, marked as demo/fictional
- **Careers** — 8 sample job openings, marked as demo
- **Blog** — 8 sample articles, marked as demo
- **Contact details** — demo email addresses, phone numbers, and office
  address (Salem, Tamil Nadu)

Replace these with real company data before launch — see the checklist below.

## Production Checklist

- [ ] Replace demo emails/phones/address in `lib/constants.ts` with real details
- [ ] Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and
      `RESEND_AUDIENCE_ID` in your hosting provider's environment settings
- [ ] Verify your sending domain in Resend before relying on contact/newsletter emails
- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` if you want Google Analytics enabled
- [ ] Replace demo Portfolio, Testimonials, Careers, and Blog content with real entries
- [ ] Replace the founder profile photo placeholder in `components/sections/founder.tsx`
- [ ] Have Privacy Policy and Terms of Service reviewed by legal counsel
- [ ] Confirm the WhatsApp number in `components/ui/whatsapp-button.tsx` (derived
      from `SITE.phones[0]`)
- [ ] Update `public/site.webmanifest`, favicons, and OG image if branding changes
- [ ] Run `npm run build` and `npm run lint` locally before deploying

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step deployment instructions
(Vercel and generic Node hosting).

## License

Private and proprietary — © Vettriswar Groups of Company. Not for redistribution.
