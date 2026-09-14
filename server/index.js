import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'gp-seoni-student-portal' }));

app.post('/api/study-assistant', async (req, res) => {
  const question = typeof req.body?.question === 'string' ? req.body.question.trim() : '';
  if (!question) return res.status(400).json({ error: 'Question is required.' });
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'AI assistant is not configured yet.' });

  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5.6-luna',
      instructions: 'You are a helpful study assistant for diploma/polytechnic students in India. Explain concepts clearly, step-by-step, and keep answers suitable for exams and practical learning. Do not invent college-specific notices or syllabus details.',
      input: question,
    });
    res.json({ answer: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'The AI assistant could not answer right now.' });
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get(/.*/, (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

const port = Number(process.env.PORT || 8787);
app.listen(port, '0.0.0.0', () => console.log(`GP Seoni Student Portal running on port ${port}`));
