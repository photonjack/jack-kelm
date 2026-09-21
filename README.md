# Jack Kelm — Resume Website

Personal portfolio / resume site for Jack Kelm, Automation Engineer.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Edit resume data in [`lib/content.ts`](lib/content.ts).

Replace project photos/videos in `public/projects/` and update the `projects` array.

## SEO

- Metadata + Open Graph in `lib/seo.ts` / `app/layout.tsx`
- JSON-LD Person + FAQ structured data
- `public/llms.txt` for AI crawlers
- `app/sitemap.ts` and `app/robots.ts`
