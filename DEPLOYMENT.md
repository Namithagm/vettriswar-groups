# Deployment Guide

This project is a standard Next.js 15 App Router app and can be deployed to
any Node-compatible host. Instructions for the two most common paths are
below.

## Option A: Deploy to Vercel (recommended)

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build settings need to change:
   - **Build command:** `npm run build`
   - **Output directory:** (leave default — Vercel handles this for Next.js)
   - **Install command:** `npm install`
4. Under **Project Settings → Environment Variables**, add every key from
   `.env.example` with its real production value:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
   - `RESEND_AUDIENCE_ID`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
5. Deploy. Vercel Analytics (`@vercel/analytics`) activates automatically —
   no extra configuration required.
6. Once you have a custom domain, update `SITE.url` in `lib/constants.ts` to
   match it exactly (this feeds `metadataBase`, canonical URLs, the sitemap,
   and JSON-LD).

## Option B: Deploy to a generic Node host (VPS, Docker, etc.)

1. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```
2. Set the same environment variables listed above (via a `.env.production`
   file, your process manager, or your container's env config).
3. Start the production server:
   ```bash
   npm run start
   ```
   By default this serves on port 3000. Put a reverse proxy (Nginx, Caddy)
   in front of it for TLS termination and to serve on port 443.
4. Use a process manager (PM2, systemd, or your container orchestrator) to
   keep the Node process running and to restart it on crash/reboot.

### Minimal Dockerfile (optional)

```dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /app ./
EXPOSE 3000
CMD ["npm", "run", "start"]
```

## Post-Deployment Checks

- [ ] Homepage loads and all sections render
- [ ] `/privacy-policy` and `/terms` load correctly
- [ ] `/sitemap.xml` and `/robots.txt` return valid output and reference the
      correct production domain
- [ ] Submitting the contact form sends an email (requires `RESEND_API_KEY`
      and a verified sending domain)
- [ ] Newsletter signup adds the subscriber to your Resend Audience
- [ ] Favicons and the Open Graph preview image render correctly when the
      URL is shared on social platforms
- [ ] `SITE.url` in `lib/constants.ts` matches your live domain exactly (no
      trailing slash mismatch)
