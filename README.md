# GP Seoni Student Portal

A modern student learning portal for Government Polytechnic College Seoni, Madhya Pradesh.

## Current build
- Responsive React + Vite interface
- Student dashboard with subject cards and quick-access learning areas
- Search/filter for subjects
- Notes, question papers, MCQ practice and study-planner entry points
- Academic blue/navy visual system with responsive mobile navigation
- Lucide icons
- Secure server-side OpenAI Responses API endpoint for the future AI Study Assistant

## Run locally

```bash
npm install
npm run dev
```

For the AI assistant server, create a local `.env` from `.env.example`, add your OpenAI project key, then run:

```bash
npm run server
```

Never put an OpenAI API key in frontend code or commit a real `.env` file.

## Important
This is a student learning portal project, not an official college administration website. Official notes, syllabus, notices and papers should be added only from authorized college sources.
