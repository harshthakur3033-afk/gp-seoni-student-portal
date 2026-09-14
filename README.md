# GP Seoni Student Portal

A modern student learning portal for Government Polytechnic College Seoni, Madhya Pradesh.

## Current build
- Responsive React + Vite interface
- Student dashboard with subject cards and quick-access learning areas
- Subject/module explorer
- Notes and study-material library
- Question-paper practice area
- Interactive MCQ practice with score tracking
- Personal study planner with task tracking
- AI Study Assistant using a server-side OpenAI Responses API endpoint
- Global subject/topic/resource search
- Mobile navigation and responsive layout
- Lucide icons
- Production-ready Express server for hosting the built frontend and AI API

## Run locally

Install dependencies:

```bash
npm install
```

Start the frontend in development mode:

```bash
npm run dev
```

For the AI assistant during development, create a local `.env` from `.env.example`, add your OpenAI project key, and run the API server in a second terminal:

```bash
npm run server
```

Then open the Vite URL shown in the terminal.

### Production-style local run

Build the frontend first:

```bash
npm run build
```

Then start the Express server:

```bash
npm start
```

The server uses the `PORT` environment variable when provided.

## OpenAI security

Keep `OPENAI_API_KEY` on the server only. Never put it in React/Vite frontend code, never use a `VITE_` environment variable for it, and never commit a real `.env` file. The repository includes `.gitignore` protection for local environment files.

## Deployment

This project can be deployed to a Node-capable host. Use `npm install` (or the platform's automatic Node install), `npm run build` as the build command, and `npm start` as the start command. Add `OPENAI_API_KEY` and `OPENAI_MODEL` as server environment variables in the hosting provider's dashboard.

## Important

This is a student learning portal project, not an official college administration website. Official notes, syllabus, notices and papers should be added only from authorized college sources.
