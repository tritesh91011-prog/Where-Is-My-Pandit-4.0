# Where Is My Pandit

Premium, responsive Hindu Spiritual Booking Platform for Pandit Giriraj Nandan Dadhich.

## Stack
- Next.js 15 + React 19 + TypeScript
- TailwindCSS + Framer Motion
- Node.js Express API reference server
- PostgreSQL schema
- JWT-ready admin authentication
- Nodemailer, Cloudinary, WhatsApp Business API integration hooks
- PWA manifest + service worker
- SEO sitemap, robots, Open Graph metadata

## Run
```bash
npm install
npm run dev
```

Optional Express API:
```bash
cp .env.example .env
npm run server
```

## Key Routes
- `/` Home
- `/about` Pandit Ji profile
- `/services` 16 spiritual service cards
- `/book` complete booking workflow and Booking ID generation
- `/confirmation` booking confirmation
- `/payment` UPI QR and verification submission
- `/gallery` lightbox gallery and video placeholder
- `/testimonials` reviews
- `/blog` categories and articles
- `/contact` contact form, click-to-call and WhatsApp
- `/admin` admin dashboard demo
- `/devotee-dashboard` premium future modules

## Production Notes
Connect route handlers or `server/index.ts` to PostgreSQL using `database/schema.sql`, replace demo admin login with bcrypt + JWT protected APIs, enable Cloudinary uploads, SMTP email templates, WhatsApp Business template messages and payment gateway webhooks.
