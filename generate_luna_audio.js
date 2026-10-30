import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Readable } from 'stream';
import { elevenlabs } from './elevenlabs_client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AUDIO_DIR = path.join(__dirname, 'assets', 'luna', 'audio');
if (!fs.existsSync(AUDIO_DIR)) {
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
}

// Jessica: Playful, Bright, Warm (Premade voice suitable for children's mascot)
const VOICE_ID = 'cgSgspJ2msm6clMCkdW9';
const MODEL_ID = 'eleven_v4';

export const LUNA_CLIPS = [
  // Greetings & Mascot Intro
  {
    filename: 'luna_welcome.mp3',
    text: "Hi friends! I'm Luna the Bunny Explorer! Welcome to my house! Let's explore together!"
  },
  {
    filename: 'luna_hello.mp3',
    text: "Hello! I'm Luna! Are you ready for fun in our house adventure?"
  },

  // Cheers & Celebrations
  {
    filename: 'cheer_great_job.mp3',
    text: "Great job! You are amazing!"
  },
  {
    filename: 'cheer_awesome.mp3',
    text: "Awesome work! High five!"
  },
  {
    filename: 'cheer_super.mp3',
    text: "Super! Look at that shine!"
  },
  {
    filename: 'cheer_you_did_it.mp3',
    text: "Hooray! You did it! Beautiful!"
  },
  {
    filename: 'oops_try_again.mp3',
    text: "Almost! Let's try again together!"
  },
  {
    filename: 'level_complete.mp3',
    text: "Level complete! You are a superstar house explorer!"
  },
  {
    filename: 'diploma_congrats.mp3',
    text: "Congratulations! You explored all twenty rooms and earned your official Little Explorer Diploma!"
  },

  // Stage 1 Instructions (Rooms of the House)
  {
    filename: 'inst_living_room.mp3',
    text: "Welcome to the Living Room! Find the comfy furniture!"
  },
  {
    filename: 'inst_fridge.mp3',
    text: "Kitchen time! Open the fridge and find a yummy snack!"
  },
  {
    filename: 'inst_bedroom.mp3',
    text: "Bedtime in the bedroom! Find the bedroom item!"
  },
  {
    filename: 'inst_bath_bubbles.mp3',
    text: "Splish splash in the bathroom! Pop all the bubbly soaps!"
  },
  {
    filename: 'inst_dining_table.mp3',
    text: "Dining room! Set the yummy food on the table!"
  },
  {
    filename: 'inst_garden.mp3',
    text: "Look at the sunny garden! Tap the watering can to water the flower!"
  },
  {
    filename: 'inst_laundry.mp3',
    text: "Laundry room! Wash the clothes in the washing machine!"
  },
  {
    filename: 'inst_garage.mp3',
    text: "Beep beep! Park the blue car inside the garage!"
  },
  {
    filename: 'inst_attic.mp3',
    text: "The attic is dark! Shine your flashlight to find the star!"
  },
  {
    filename: 'inst_balcony.mp3',
    text: "Breezy balcony! Help the little yellow bird fly into the sky!"
  },

  // Stage 2 Instructions (House Activities & Logic)
  {
    filename: 'inst_where_belong.mp3',
    text: "Where does this item belong? Touch the right room!"
  },
  {
    filename: 'inst_light_on.mp3',
    text: "Let's turn the lights on! Click the switch!"
  },
  {
    filename: 'inst_light_off.mp3',
    text: "Good night house! Turn the switch off!"
  },
  {
    filename: 'inst_tidy_toys.mp3',
    text: "Let's tidy up! Put the toy in the toy box!"
  },
  {
    filename: 'inst_knock_door.mp3',
    text: "Knock knock! Who is at the front door? Tap to answer!"
  },
  {
    filename: 'inst_blender.mp3',
    text: "Whirr! Let's make a fruit smoothie! Tap the blender!"
  },
  {
    filename: 'inst_sound_detective.mp3',
    text: "Sound Detective! Listen closely! What makes this home sound?"
  },
  {
    filename: 'inst_shadow_safari.mp3',
    text: "Shadow Safari! Look at the shadow and find the matching object!"
  },
  {
    filename: 'inst_brush_teeth.mp3',
    text: "Brush brush brush! Make Luna's teeth sparkle and shine!"
  },
  {
    filename: 'inst_flower_pots.mp3',
    text: "Water the flower pot to make it bloom!"
  },
  {
    filename: 'inst_house_party.mp3',
    text: "Hooray! Time for our house party! Pop the balloons and celebrate!"
  },

  // Key Household Items
  { filename: 'sofa.mp3', text: 'Sofa' },
  { filename: 'lamp.mp3', text: 'Lamp' },
  { filename: 'television.mp3', text: 'Television' },
  { filename: 'table.mp3', text: 'Table' },
  { filename: 'bed.mp3', text: 'Bed' },
  { filename: 'fridge.mp3', text: 'Fridge' },
  { filename: 'bathtub.mp3', text: 'Bathtub' },
  { filename: 'car.mp3', text: 'Car' },
  { filename: 'flower.mp3', text: 'Flower' },
  { filename: 'teddy.mp3', text: 'Teddy Bear' },
  { filename: 'door.mp3', text: 'Door' },
  { filename: 'window.mp3', text: 'Window' }
];

async function generateSingleClip(clip) {
  const filePath = path.join(AUDIO_DIR, clip.filename);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    if (stat.size > 1000) {
      console.log(`[EXISTS] ${clip.filename}`);
      return;
    }
  }

  console.log(`[GENERATING] ${clip.filename} -> "${clip.text}"`);
  const audioStream = await elevenlabs.textToSpeech.convert(VOICE_ID, {
    text: clip.text,
    modelId: MODEL_ID,
    voiceSettings: {
      stability: 0.40,
      similarityBoost: 0.75
    }
  });

  await new Promise((resolve, reject) => {
    const fileOut = fs.createWriteStream(filePath);
    Readable.fromWeb(audioStream)
      .pipe(fileOut)
      .on('finish', resolve)
      .on('error', reject);
  });
  console.log(`[SAVED] ${clip.filename} (${fs.statSync(filePath).size} bytes)`);
}

export async function generateAllClips() {
  console.log(`Starting audio generation for ${LUNA_CLIPS.length} clips into ${AUDIO_DIR}...`);
  for (const clip of LUNA_CLIPS) {
    try {
      await generateSingleClip(clip);
    } catch (e) {
      console.error(`Error on ${clip.filename}:`, e.message);
    }
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('All audio clips generated successfully!');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAllClips().catch(err => {
    console.error('Generation error:', err);
    process.exit(1);
  });
}
