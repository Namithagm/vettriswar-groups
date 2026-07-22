# Production Checklist

Use this checklist before taking the site live. Items are grouped by area.

## Company Information

- [ ] Replace demo emails in `lib/constants.ts` (`SITE.emails`) with real
      addresses: general, sales, support, careers
- [ ] Replace demo phone numbers (`SITE.phones`) with real numbers
- [ ] Replace demo office address (`SITE.address`) with the confirmed,
      real office address
- [ ] Confirm working hours (`SITE.hours`) match actual business hours
- [ ] Confirm all social links (`SITE.social`) point to real, live accounts
- [ ] Update `SITE.url` to the final production domain

## Content

- [ ] Replace the 6 demo Portfolio case studies with real, permissioned
      client projects (or remove the "Demo Project" tag once real)
- [ ] Replace the 6 demo Testimonials with real, permissioned client quotes
- [ ] Replace the 8 demo Career openings with actual current vacancies
- [ ] Replace the 8 demo Blog articles with real published content
- [ ] Confirm the founder's name, title, bio, and quote in `lib/constants.ts`
      (`FOUNDER`) are accurate and approved
- [ ] Add a real founder portrait in `components/sections/founder.tsx`
      (currently shows initials as a placeholder avatar)
- [ ] Replace demo client names in `components/sections/client-logos.tsx`
      with real, permissioned client names/logos
- [ ] Confirm Mission / Vision / Core Values / Company Overview copy in
      `components/sections/about.tsx` is final and approved

## Legal

- [ ] Have Privacy Policy (`app/privacy-policy/page.tsx`) reviewed by
      qualified legal counsel
- [ ] Have Terms of Service (`app/terms/page.tsx`) reviewed by qualified
      legal counsel, including the governing-law clause
- [ ] Update "Last updated" dates on both legal pages once finalized

## Integrations & Environment

- [ ] Set `RESEND_API_KEY` in production environment variables
- [ ] Set `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (verify the sending
      domain in Resend before launch)
- [ ] Set `RESEND_AUDIENCE_ID` for newsletter signups
- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` if Google Analytics is desired
      (site works correctly without it — analytics simply stays off)
- [ ] Confirm the WhatsApp button number is correct (auto-derived from
      `SITE.phones[0]` in `components/ui/whatsapp-button.tsx`)

## Technical Verification

- [ ] `npm install` completes with no errors
- [ ] `npm run build` completes with no TypeScript or compile errors
- [ ] `npm run lint` reports no errors
- [ ] All routes load correctly: `/`, `/privacy-policy`, `/terms`,
      `/sitemap.xml`, `/robots.txt`, and a 404 test path
- [ ] Contact form submits successfully and an email is received
- [ ] Newsletter form submits successfully and the subscriber appears in
      your Resend Audience
- [ ] Favicons, Open Graph image, and site manifest reflect final branding
- [ ] JSON-LD structured data validates (test with Google's Rich Results
      Test once the real domain is live)

## Status at Handoff

As of this delivery:

- ✅ Branding fully replaced (0 remaining references to the old name)
- ✅ No `[PLACEHOLDER]`, `TODO`, `FIXME`, or Lorem Ipsum remaining anywhere
- ✅ `npm install`, `npm run build`, and `npm run lint` all pass cleanly
- ✅ All routes verified via a live dev-server smoke test
- ⚠️ All contact details, portfolio, testimonials, careers, and blog
     content are **demo data** — see the Content and Company Information
     sections above before going live
