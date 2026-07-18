# Charbel Barrak Portfolio

Personal portfolio for a Computer Science graduate, built with React, Vite, Tailwind CSS, Framer Motion, and a Node.js/Express backend with Nodemailer for the contact form.

**Live site:** https://charbell2005.github.io/Porfolio/

## Sections

- Hero with resume download and call-to-action buttons
- Stats bar with animated counters
- Skills grid (Frontend, Backend, AI & ML, Database, Mobile, Programming, Tools)
- 4 featured projects with descriptions, metrics, and tech tags
- Professional experience timeline
- Education (Bachelor's + Master's in progress)
- Certifications and languages
- Contact form with real email delivery

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, Nodemailer
- **Deployment:** GitHub Pages

## Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
cp .env.example .env   # add your Yahoo app password
npm run dev
```

The backend runs on port 5000. The Vite dev server proxies `/api` requests to it.

## Deployment

The site is deployed via GitHub Pages using a GitHub Actions workflow. Pushing to `main` triggers an automatic build and deploy.
