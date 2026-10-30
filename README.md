# Pandit Ji website (Dr. Tara Chandra Sharma)

Plain HTML + CSS + JavaScript. No build step, no backend. Open `index.html` to preview.

## Edit content
- `js/detail.js`: Pandit Ji's name, photo, experience, education, contacts, service area, FAQs, gallery, testimonials, SEO text. Empty values hide automatically.
- `js/servicesdata.js`: every pooja (cards, details popup, samagri list and the form dropdown).

## Before going live
1. In `detail.js` set `whatsapp` (digits with country code, e.g. 919876543210), `phone` and `siteUrl`.
2. Add the real portrait to `assets/images/` and set `photo`.
3. Fill only verified details (experience, education, sampradaya). Empty fields are hidden.
4. Replace `https://divinecenter.in/` with your domain in `index.html` (canonical, hreflang, og:url), `robots.txt` and `sitemap.xml`.
5. Upload to any static host (Netlify, Vercel, GitHub Pages, cPanel). Submit `sitemap.xml` in Google Search Console and create a Google Business Profile.
