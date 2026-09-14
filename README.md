# Nguyen Trong Nhan — Fullstack Developer Portfolio

Production-ready personal portfolio built with Next.js 16, React 19, TypeScript,
Tailwind CSS v4, Framer Motion, GSAP ScrollTrigger, and Canvas.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content management

All portfolio content, localized copy, projects, skills, and contact information
are centralized in `src/data/portfolioData.ts`.

## Contact form

The form posts to the internal `POST /api/contact` route. The route validates
and normalizes input, checks a honeypot and submission timing, then forwards the
message through FormSubmit. FormSubmit may send a one-time activation email to
the portfolio owner's address before the first message can be delivered.

## Deploy to Vercel

1. Import the repository into Vercel.
2. Keep the detected framework preset as Next.js.
3. Use `npm run build` as the build command.
4. Deploy. No environment variables are required by the current implementation.
