import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("ERROR: No ELEVENLABS_API_KEY found in .env.local");
  process.exit(1);
}

const client = new ElevenLabsClient({ apiKey });

// Voices
const VOICES = {
  liam: "TX3LPaxmHKxFdv7VOQHJ", // Liam - clear energetic child
  alice: "Xb7hH8MSUJpSbSDYk0k2", // Alice - warm young educator
};

const ITEMS_TO_GENERATE = [
  // U1 School Objects
  { id: "toddler_glue_stick", text: "glue stick", voice: "alice" },
  { id: "toddler_lunchbox", text: "lunchbox", voice: "liam" },
  { id: "toddler_scissors", text: "scissors", voice: "alice" },
  { id: "toddler_paper", text: "paper", voice: "liam" },
  { id: "toddler_chair", text: "chair", voice: "alice" },

  // U2 Me & Birthday
  { id: "toddler_birthday_cake", text: "birthday cake", voice: "liam" },
  { id: "toddler_candle", text: "candle", voice: "alice" },
  { id: "toddler_cookies", text: "cookies", voice: "liam" },
  { id: "toddler_party_hat", text: "party hat", voice: "alice" },
  { id: "toddler_presents", text: "presents", voice: "liam" },

  // U3 Home & Family
  { id: "toddler_mommy", text: "mommy", voice: "alice" },
  { id: "toddler_daddy", text: "daddy", voice: "liam" },
  { id: "toddler_brother", text: "brother", voice: "liam" },
  { id: "toddler_sister", text: "sister", voice: "alice" },
  { id: "toddler_baby", text: "baby", voice: "alice" },
  { id: "toddler_house", text: "house", voice: "liam" },

  // U4 My Body
  { id: "toddler_head", text: "head", voice: "alice" },
  { id: "toddler_eyes", text: "eyes", voice: "liam" },
  { id: "toddler_nose", text: "nose", voice: "alice" },
  { id: "toddler_mouth", text: "mouth", voice: "liam" },
  { id: "toddler_arms", text: "arms", voice: "alice" },
  { id: "toddler_hands", text: "hands", voice: "liam" },
  { id: "toddler_feet", text: "feet", voice: "alice" },

  // U5 Sunny & Cloudy
  { id: "toddler_sunny", text: "sunny", voice: "alice" },
  { id: "toddler_cloudy", text: "cloudy", voice: "liam" },
  { id: "toddler_rainy", text: "rainy", voice: "alice" },
  { id: "toddler_windy", text: "windy", voice: "liam" },
  { id: "toddler_jacket", text: "jacket", voice: "alice" },
  { id: "toddler_boots", text: "boots", voice: "liam" },

  // U6 Farm Animals & Barn
  { id: "toddler_barn", text: "barn", voice: "liam" },
  { id: "toddler_hay", text: "hay", voice: "alice" },
  { id: "toddler_tractor", text: "tractor", voice: "liam" },

  // U7 At the Supermarket
  { id: "toddler_supermarket", text: "supermarket", voice: "alice" },
  { id: "toddler_bread", text: "bread", voice: "liam" },
  { id: "toddler_carrot", text: "carrot", voice: "alice" },
  { id: "toddler_cart", text: "cart", voice: "liam" },

  // U8 Daily Activities
  { id: "toddler_daytime", text: "daytime", voice: "alice" },
  { id: "toddler_nighttime", text: "nighttime", voice: "liam" },
  { id: "toddler_breakfast", text: "breakfast", voice: "alice" },

  // U9 The Park
  { id: "toddler_playground", text: "playground", voice: "liam" },
  { id: "toddler_swing", text: "swing", voice: "alice" },
  { id: "toddler_slide", text: "slide", voice: "liam" },
  { id: "toddler_bench", text: "bench", voice: "alice" },

  // U10 Around Town
  { id: "toddler_hospital", text: "hospital", voice: "alice" },
  { id: "toddler_school", text: "school", voice: "liam" },
  { id: "toddler_police_station", text: "police station", voice: "alice" },
  { id: "toddler_nurse", text: "nurse", voice: "alice" },

  // U11 My Backyard
  { id: "toddler_ladybug", text: "ladybug", voice: "liam" },
  { id: "toddler_earthworm", text: "earthworm", voice: "alice" },
  { id: "toddler_leaves", text: "leaves", voice: "liam" },

  // U12 Vehicles
  { id: "toddler_bus", text: "bus", voice: "alice" },
  { id: "toddler_truck", text: "truck", voice: "liam" },
  { id: "toddler_motorcycle", text: "motorcycle", voice: "alice" },
  { id: "toddler_train", text: "train", voice: "liam" },

  // U13 The Ocean
  { id: "toddler_ocean", text: "ocean", voice: "alice" },
  { id: "toddler_dolphin", text: "dolphin", voice: "liam" },
  { id: "toddler_whale", text: "whale", voice: "alice" },
  { id: "toddler_shark", text: "shark", voice: "liam" },
  { id: "toddler_octopus", text: "octopus", voice: "alice" },
  { id: "toddler_fish", text: "fish", voice: "liam" },

  // U14 My Toy Box
  { id: "toddler_toy_box", text: "toy box", voice: "alice" },
  { id: "toddler_doll", text: "doll", voice: "liam" },
  { id: "toddler_kite", text: "kite", voice: "alice" },
  { id: "toddler_blocks", text: "blocks", voice: "liam" },

  // U15 Being Helpful & Motivating Prompts
  { id: "toddler_helping_hands", text: "helping hands", voice: "alice" },
  { id: "toddler_clean_up", text: "clean up", voice: "liam" },
  { id: "toddler_super_toddler", text: "super toddler", voice: "alice" },
  { id: "toddler_welcome", text: "welcome to bilikids", voice: "alice" },
  { id: "toddler_listen_and_find", text: "listen and find", voice: "liam" }
];

function normalizeKey(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
}

async function run() {
  const destDir = path.join(__dirname, 'assets', 'toddlers_media', 'audio');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  console.log(`Starting ElevenLabs generation for ${ITEMS_TO_GENERATE.length} Toddler audio clips...`);
  
  let generated = 0;
  let skipped = 0;
  let totalChars = 0;

  for (let i = 0; i < ITEMS_TO_GENERATE.length; i++) {
    const it = ITEMS_TO_GENERATE[i];
    const destFile = path.join(destDir, `${it.id}.mp3`);

    if (fs.existsSync(destFile) && fs.statSync(destFile).size > 1000) {
      console.log(`[${i+1}/${ITEMS_TO_GENERATE.length}] Skipping existing: ${it.id} ("${it.text}")`);
      skipped++;
      continue;
    }

    const voiceId = VOICES[it.voice] || VOICES.liam;
    console.log(`[${i+1}/${ITEMS_TO_GENERATE.length}] Generating (${it.text.length} chars): [${it.voice}] "${it.text}"...`);

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
      totalChars += it.text.length;
      console.log(`   -> OK: ${it.id}.mp3 (${fs.statSync(destFile).size} bytes)`);

      // Gentle pause between calls
      await new Promise(r => setTimeout(r, 150));
    } catch (err) {
      console.error(`   -> Error generating ${it.id}:`, err.message);
      if (err.message && err.message.includes('quota')) {
        console.warn('Quota limit reached. Halting batch generation gracefully.');
        break;
      }
    }
  }

  console.log('==================================================');
  console.log(`ElevenLabs Generation Complete: ${generated} new generated, ${skipped} skipped.`);
  console.log(`Total characters consumed in this run: ${totalChars}`);
}

run().catch(console.error);
