import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { elevenlabs } from './elevenlabs_client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VOICE_ID = 'cgSgspJ2msm6clMCkdW9'; // Jessica: Playful, Bright, Warm
const MODEL_ID = 'eleven_multilingual_v2';

// 1. Color Sorting Baskets (assets/lab/audio/)
const LAB_AUDIO_DIR = path.join(__dirname, 'assets', 'lab', 'audio');
if (!fs.existsSync(LAB_AUDIO_DIR)) fs.mkdirSync(LAB_AUDIO_DIR, { recursive: true });

// 2. Feed Animals (assets/leo/audio/)
const LEO_AUDIO_DIR = path.join(__dirname, 'assets', 'leo', 'audio');
if (!fs.existsSync(LEO_AUDIO_DIR)) fs.mkdirSync(LEO_AUDIO_DIR, { recursive: true });

// 3. Luna Stage 2 (assets/luna/audio/)
const LUNA_AUDIO_DIR = path.join(__dirname, 'assets', 'luna', 'audio');
if (!fs.existsSync(LUNA_AUDIO_DIR)) fs.mkdirSync(LUNA_AUDIO_DIR, { recursive: true });

const CLIPS = [
  // --- COLOR SORTING (LEVEL 3) ---
  { dir: LAB_AUDIO_DIR, filename: 'sort_hint_r1.mp3', text: 'Put Red, Yellow, and Blue items into their matching baskets!' },
  { dir: LAB_AUDIO_DIR, filename: 'sort_hint_r2.mp3', text: 'Put Green, Orange, and Purple items into their matching baskets!' },
  { dir: LAB_AUDIO_DIR, filename: 'sort_hint_r3.mp3', text: 'Four colors! Red, Yellow, Blue and Green!' },
  { dir: LAB_AUDIO_DIR, filename: 'item_red_apple.mp3', text: 'Red Apple' },
  { dir: LAB_AUDIO_DIR, filename: 'item_red_strawberry.mp3', text: 'Red Strawberry' },
  { dir: LAB_AUDIO_DIR, filename: 'item_yellow_banana.mp3', text: 'Yellow Banana' },
  { dir: LAB_AUDIO_DIR, filename: 'item_yellow_sun.mp3', text: 'Yellow Sun' },
  { dir: LAB_AUDIO_DIR, filename: 'item_blue_car.mp3', text: 'Blue Car' },
  { dir: LAB_AUDIO_DIR, filename: 'item_blue_dolphin.mp3', text: 'Blue Dolphin' },
  { dir: LAB_AUDIO_DIR, filename: 'item_green_frog.mp3', text: 'Green Frog' },
  { dir: LAB_AUDIO_DIR, filename: 'item_green_leaf.mp3', text: 'Green Leaf' },
  { dir: LAB_AUDIO_DIR, filename: 'item_orange_carrot.mp3', text: 'Orange Carrot' },
  { dir: LAB_AUDIO_DIR, filename: 'item_orange_orange.mp3', text: 'Orange' },
  { dir: LAB_AUDIO_DIR, filename: 'item_purple_grapes.mp3', text: 'Purple Grapes' },
  { dir: LAB_AUDIO_DIR, filename: 'item_purple_eggplant.mp3', text: 'Purple Eggplant' },
  { dir: LAB_AUDIO_DIR, filename: 'item_red_heart.mp3', text: 'Red Heart' },
  { dir: LAB_AUDIO_DIR, filename: 'item_red_balloon.mp3', text: 'Red Balloon' },
  { dir: LAB_AUDIO_DIR, filename: 'item_yellow_star.mp3', text: 'Yellow Star' },
  { dir: LAB_AUDIO_DIR, filename: 'item_yellow_lemon.mp3', text: 'Yellow Lemon' },
  { dir: LAB_AUDIO_DIR, filename: 'item_blue_whale.mp3', text: 'Blue Whale' },
  { dir: LAB_AUDIO_DIR, filename: 'item_blue_bird.mp3', text: 'Blue Bird' },
  { dir: LAB_AUDIO_DIR, filename: 'item_green_tree.mp3', text: 'Green Tree' },
  { dir: LAB_AUDIO_DIR, filename: 'item_green_caterpillar.mp3', text: 'Green Caterpillar' },

  // --- LEO FEEDING ANIMALS ---
  { dir: LEO_AUDIO_DIR, filename: 'feed_rabbit_carrot.mp3', text: 'Feed the rabbit! Give it a crunchy carrot!' },
  { dir: LEO_AUDIO_DIR, filename: 'feed_horse_hay.mp3', text: 'Feed the horse! Give it sweet golden hay!' },
  { dir: LEO_AUDIO_DIR, filename: 'feed_dog_bone.mp3', text: 'Feed the dog! Give it a tasty bone!' },
  { dir: LEO_AUDIO_DIR, filename: 'feed_pig_apple.mp3', text: 'Feed the pig! Give it a red apple!' },
  { dir: LEO_AUDIO_DIR, filename: 'feed_hen_corn.mp3', text: 'Feed the hen! Give it yellow corn!' },
  { dir: LEO_AUDIO_DIR, filename: 'food_carrot.mp3', text: 'Carrot' },
  { dir: LEO_AUDIO_DIR, filename: 'food_hay.mp3', text: 'Hay' },
  { dir: LEO_AUDIO_DIR, filename: 'food_bone.mp3', text: 'Bone' },
  { dir: LEO_AUDIO_DIR, filename: 'food_corn.mp3', text: 'Corn' },

  // --- LUNA STAGE 2 MISSING AUDIOS ---
  { dir: LUNA_AUDIO_DIR, filename: 'act_belong_bed.mp3', text: 'Where does the bed belong? Tap the bedroom!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_belong_sofa.mp3', text: 'Where does the sofa belong? Tap the living room!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_belong_car.mp3', text: 'Where does the car belong? Tap the garage!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_light_on.mp3', text: 'Turn on the light! Tap the lamp!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_light_off.mp3', text: 'Turn off the light! Tap the lamp!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_ball.mp3', text: 'Put the soccer ball into the toy box!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_robot.mp3', text: 'Put the shiny robot into the toy box!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_train.mp3', text: 'Put the wooden train into the toy box!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_blue_door.mp3', text: 'Knock, knock! Knock on the blue door!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_red_door.mp3', text: 'Knock, knock! Knock on the red door!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_yellow_door.mp3', text: 'Knock, knock! Knock on the yellow door!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_plant.mp3', text: 'Water the green plant on the balcony!' },
  { dir: LUNA_AUDIO_DIR, filename: 'act_bird.mp3', text: 'Look at the happy little bird!' }
];

async function generateAll() {
  console.log(`Starting generation for ${CLIPS.length} clips...`);
  let totalChars = 0;

  for (const clip of CLIPS) {
    const destPath = path.join(clip.dir, clip.filename);
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 2000) {
      console.log(`[SKIP] Already exists: ${clip.filename}`);
      continue;
    }

    console.log(`[GENERATING] ${clip.filename}: "${clip.text}" (${clip.text.length} chars)`);
    totalChars += clip.text.length;

    try {
      const audioStream = await elevenlabs.textToSpeech.convert(VOICE_ID, {
        text: clip.text,
        model_id: MODEL_ID,
        voice_settings: {
          stability: 0.65,
          similarity_boost: 0.85
        }
      });

      const writeStream = fs.createWriteStream(destPath);
      for await (const chunk of audioStream) {
        writeStream.write(chunk);
      }
      writeStream.end();

      // Wait a small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 350));
      console.log(`  -> Saved ${destPath} (${fs.statSync(destPath).size} bytes)`);
    } catch (err) {
      console.error(`  -> ERROR on ${clip.filename}:`, err.message);
    }
  }

  console.log(`\nAll done! Total characters sent: ${totalChars}`);
}

generateAll();
