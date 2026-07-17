# Charbel Barrak Portfolio

Modern personal portfolio for a Computer Science graduate, built with React, Tailwind CSS, Framer Motion, and a lightweight Node.js/Express backend for the contact form.

## What’s Included

- Dark, professional developer aesthetic
- Animated hero section with call-to-action buttons
- About, Skills, Projects, Experience, Education, Certifications, and Contact sections
- Reusable React components
- Responsive layout for mobile and desktop
- Placeholder project artwork stored locally in `frontend/public/projects`
- Contact form wired to the backend API

## Folder Structure

```text
Portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── .vscode/
    └── tasks.json
```

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
npm run dev
```

## Build

```bash
cd frontend
npm run build
```

## API Endpoints

- `GET /api/health`
- `GET /api/projects`
- `POST /api/contact`

## Notes

- The resume button currently points to a placeholder file in `frontend/public/resume-placeholder.txt`.
- Replace the placeholder GitHub and LinkedIn URLs in `frontend/src/data/portfolio.js` with your real profiles.
- The backend is intentionally small and ready for future expansion.
