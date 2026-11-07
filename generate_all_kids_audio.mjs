import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env.local') });

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("ERROR: No ELEVENLABS_API_KEY found in .env.local");
  process.exit(1);
}

const client = new ElevenLabsClient({ apiKey });

// Available voices - 100% Youthful and Child-friendly
const VOICES = {
  alex: "TX3LPaxmHKxFdv7VOQHJ",       // Liam - energetic boy
  maya: "cgSgspJ2msm6clMCkdW9",       // Jessica - playful, bright, warm girl
  kid: "TX3LPaxmHKxFdv7VOQHJ",        // Liam - energetic boy
  teacher: "cgSgspJ2msm6clMCkdW9",    // Jessica - young female
  clerk: "FGY2WhTYpPnrIDTdsKH5",      // Laura - young enthusiast
  officer: "bIHbv24MWmeRgasZH58o",    // Will - young male
  judge: "bIHbv24MWmeRgasZH58o",      // Will - young male
  host: "bIHbv24MWmeRgasZH58o",       // Will - young male
  guide: "cgSgspJ2msm6clMCkdW9",      // Jessica - young female
  reporter: "cgSgspJ2msm6clMCkdW9",   // Jessica - young female
  vlogger: "TX3LPaxmHKxFdv7VOQHJ",    // Liam - mall streamer
  default: "TX3LPaxmHKxFdv7VOQHJ"
};

const itemsRaw = fs.readFileSync(path.join(__dirname, 'all_kids_audio_items.json'), 'utf-8');
const items = JSON.parse(itemsRaw);

function normalizeKey(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
}

async function run() {
  console.log(`Starting generation of ${items.length} audio items for Kids module...`);
  
  const manifest = {};
  let totalCharsUsed = 0;
  let skipped = 0;
  let generated = 0;

  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const category = it.category || 'scenarios';
    const destDir = path.join(__dirname, 'assets', 'kids_audio', category);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    const destFile = path.join(destDir, `${it.id}.mp3`);
    const relUrl = `assets/kids_audio/${category}/${it.id}.mp3`;
    const normText = normalizeKey(it.text);

    manifest[normText] = relUrl;
    manifest[it.id] = relUrl;

    const voiceId = VOICES[it.voice] || VOICES.default;
    console.log(`[${i+1}/${items.length}] (${it.text.length} chars) Generating with ElevenLabs: [${it.voice}] "${it.text.substring(0, 40)}..."`);

    try {
      const audioStream = await client.textToSpeech.convert(voiceId, {
        text: it.text,
        model_id: "eleven_turbo_v2_5",
        voice_settings: {
          stability: 0.55,
          similarity_boost: 0.75,
          style: 0.25,
          use_speaker_boost: true
        }
      });

      const writeStream = fs.createWriteStream(destFile);
      for await (const chunk of audioStream) {
        writeStream.write(chunk);
      }
      writeStream.end();

      generated++;
      totalCharsUsed += it.text.length;
      console.log(`   -> OK: ${it.id}.mp3 (${destFile})`);

      // 120ms pause to ensure polite API consumption
      await new Promise(r => setTimeout(r, 120));
    } catch (err) {
      console.error(`   -> Error generating ${it.id}:`, err.message);
    }
  }

  // Save JS and JSON manifest
  const manifestJsPath = path.join(__dirname, 'assets', 'kids_audio', 'kids_audio_manifest.js');
  const manifestJsonPath = path.join(__dirname, 'assets', 'kids_audio', 'kids_audio_manifest.json');

  fs.writeFileSync(manifestJsonPath, JSON.stringify(manifest, null, 2), 'utf-8');
  fs.writeFileSync(manifestJsPath, `// Bilikids Audio Manifest (Auto-generated)\nwindow.BilikidsAudioManifest = ${JSON.stringify(manifest, null, 2)};\n`, 'utf-8');

  console.log('==================================================');
  console.log(`Finished: ${generated} generated, ${skipped} skipped.`);
  console.log(`Characters consumed: ${totalCharsUsed}`);
  console.log(`Manifests saved to ${manifestJsPath} and ${manifestJsonPath}`);
}

run().catch(console.error);
