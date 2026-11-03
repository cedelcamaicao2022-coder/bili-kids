import http from 'node:http';
import dotenv from 'dotenv';

dotenv.config({ path: new URL('./.env.local', import.meta.url).pathname });

const HOST = process.env.BILI_VOICE_HOST || '127.0.0.1';
const PORT = Number(process.env.BILI_VOICE_PORT || 8081);
const API_KEY = process.env.DEEPGRAM_API_KEY;
const ALLOWED_ORIGINS = new Set(['http://localhost:8080', 'http://127.0.0.1:8080']);
const MAX_BYTES = 6 * 1024 * 1024;
const MIME_TYPES = new Set(['audio/webm', 'audio/ogg', 'audio/wav', 'audio/mp4']);

function send(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  res.end(JSON.stringify(body));
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') {
    if (origin && !ALLOWED_ORIGINS.has(origin)) return send(res, 403, { error: 'Origin not allowed.' });
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/health') {
    return send(res, 200, { ok: true, transcriptionReady: Boolean(API_KEY), provider: 'Deepgram' });
  }

  if (req.method !== 'POST' || req.url !== '/api/transcribe') {
    return send(res, 404, { error: 'Not found.' });
  }
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return send(res, 403, { error: 'This local endpoint only accepts the Bilikids development page.' });
  }
  if (!API_KEY) {
    return send(res, 503, { error: 'Deepgram is not configured in the local server environment.' });
  }

  const mimeType = (req.headers['content-type'] || '').split(';')[0].trim().toLowerCase();
  if (!MIME_TYPES.has(mimeType)) return send(res, 415, { error: 'Unsupported audio format.' });
  const chunks = [];
  let bytes = 0;
  for await (const chunk of req) {
    bytes += chunk.length;
    if (bytes > MAX_BYTES) {
      req.destroy();
      return send(res, 413, { error: 'Audio is too large.' });
    }
    chunks.push(chunk);
  }
  if (!bytes) return send(res, 400, { error: 'No audio was received.' });

  try {
    const response = await fetch('https://api.deepgram.com/v1/listen?model=nova-3&language=multi&language_hint=en&language_hint=es&smart_format=false&punctuate=false&filler_words=false', {
      method: 'POST',
      headers: { Authorization: `Token ${API_KEY}`, 'Content-Type': mimeType },
      body: Buffer.concat(chunks),
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Deepgram transcription failed (${response.status}).`);
      return send(res, 502, { error: `Speech recognition failed (${response.status}).`, detail: errorText.slice(0, 200) });
    }
    const result = await response.json();
    const transcript = result?.results?.channels?.[0]?.alternatives?.[0]?.transcript || '';
    return send(res, 200, { transcript });
  } catch (error) {
    console.error('Deepgram request failed:', error.message);
    return send(res, 502, { error: 'Could not reach Deepgram.' });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Bilikids voice bridge listening on http://${HOST}:${PORT}; Deepgram ${API_KEY ? 'configured' : 'not configured'}.`);
});

process.on('SIGINT', () => server.close(() => process.exit(0)));
process.on('SIGTERM', () => server.close(() => process.exit(0)));
