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
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  const model = process.env.OPENAI_MODEL?.trim() || 'gpt-5.6-luna';
  if (!apiKey) return res.status(503).json({ error: 'AI assistant is not configured yet. Check the OPENAI_API_KEY variable on Render.' });

  try {
    const client = new OpenAI({ apiKey });
    const response = await client.responses.create({
      model,
      instructions: 'You are a helpful study assistant for diploma/polytechnic students in India. Explain concepts clearly, step-by-step, and keep answers suitable for exams and practical learning. Do not invent college-specific notices or syllabus details.',
      input: question,
    });

    const answer = response.output_text
      .replace(/\*\*(.*?)\*\*/gs, '$1')
      .replace(/^#{1,6}\s*/gm, '')
      .replace(/^\s*[-*]\s+/gm, '• ');

    res.json({ answer });
  } catch (error) {
    console.error('Study assistant error:', error);
    const status = Number(error?.status) || 500;
    const code = error?.code || error?.name || 'unknown_error';
    let message = 'The AI assistant could not answer right now.';

    if (status === 401) {
      message = 'OpenAI authentication failed. Check the OPENAI_API_KEY on Render.';
    } else if (status === 403) {
      message = 'OpenAI access was denied. Check the API project/key permissions on OpenAI Platform.';
    } else if (status === 429) {
      message = 'OpenAI request limit or quota was reached. Check the API project billing/limits.';
    } else if (code === 'model_not_found' || status === 404) {
      message = `The configured OpenAI model could not be used. Current model: ${model}`;
    }

    res.status(status >= 400 && status < 600 ? status : 500).json({ error: message, code });
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get(/.*/, (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

const port = Number(process.env.PORT || 8787);
app.listen(port, '0.0.0.0', () => console.log(`GP Seoni Student Portal running on port ${port}`));
