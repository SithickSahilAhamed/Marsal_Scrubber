# MARSAL Website — Deployment Guide

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Production Build

```bash
npm run build
```

Output is in the `dist/` folder.

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to https://vercel.com and sign in
3. Click "New Project" → Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**

Your site will be live at `your-project.vercel.app`

## Deploy to Netlify

1. Run `npm run build`
2. Go to https://netlify.com → "Sites" → "Add new site"
3. Drag and drop the `dist/` folder
4. Done — live instantly

Or connect via GitHub for auto-deploy on every push.

## Before Going Live — Checklist

- [ ] Replace `WHATSAPP_NUMBER` (`919999999999`) with real number in:
  - `src/components/Navbar.jsx`
  - `src/components/WhatsAppFloat.jsx`
  - `src/sections/Distributors.jsx`
  - `src/sections/Contact.jsx`
  - `src/sections/Footer.jsx`
- [ ] Update email `info@marsal.in` in `src/sections/Contact.jsx` and `src/sections/Footer.jsx`
- [ ] Add real social media links in `src/sections/Footer.jsx`
- [ ] Update meta description / OG tags in `index.html` with final URL
- [ ] Add a real favicon (replace `/favicon.svg`)
- [ ] Optionally add Google Analytics script to `index.html`
