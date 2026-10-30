import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Readable } from 'stream';
import { elevenlabs } from './elevenlabs_client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AUDIO_DIR = path.join(__dirname, 'assets', 'stories', 'audio');
if (!fs.existsSync(AUDIO_DIR)) {
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
}

// Alice: Clear, warm, engaging children's educator voice
const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
const MODEL_ID = 'eleven_v4';

// 4 Stories * 10 Pages = 40 Pages
// Concise, expressive preschool narrations (~70-95 characters each) to fit comfortably within API limits
export const STORY_CLIPS = [
  // --- STORY 1: Bili and the Rainbow Forest ---
  {
    id: 'bili_p1',
    text: "Once upon a time, deep in the Rainbow Forest, lived Bili, a fluffy blue monster."
  },
  {
    id: 'bili_p2',
    text: "One sunny morning, Bili woke up. Oh no, the forest flowers had lost their colors!"
  },
  {
    id: 'bili_p3',
    text: "Bili took his golden paintbrush and tapped red paint. Swish! Red roses bloomed!"
  },
  {
    id: 'bili_p4',
    text: "Next came the butterflies. Bili gave them bright yellow wings that shone like sunshine."
  },
  {
    id: 'bili_p5',
    text: "Little frogs hopped by. Bili giggled and painted them fresh, sparkling green!"
  },
  {
    id: 'bili_p6',
    text: "With a splash of blue, the crystal river danced with happy little waves."
  },
  {
    id: 'bili_p7',
    text: "A puffy cloud floated down. Bili swirled purple and pink on its soft cheeks."
  },
  {
    id: 'bili_p8',
    text: "The cloud rained glitter drops of joy all over the happy forest animals."
  },
  {
    id: 'bili_p9',
    text: "Look! A magnificent giant rainbow arched across the entire bright blue sky!"
  },
  {
    id: 'bili_p10',
    text: "Every color is special, just like you, smiled Bili. Sweet dreams, little explorer!"
  },

  // --- STORY 2: Leo's Sunshine Farm ---
  {
    id: 'leo_p1',
    text: "Cock-a-doodle-doo! The morning sun rose, and Little Leo the lion stretched his paws."
  },
  {
    id: 'leo_p2',
    text: "Leo put on his tiny farmer hat. Today was his big day on the Sunshine Farm!"
  },
  {
    id: 'leo_p3',
    text: "First, Leo visited Bella the cow in the green meadow. Moo, good morning Leo!"
  },
  {
    id: 'leo_p4',
    text: "Leo shared a basket of sweet red apples. Crunch, crunch! Bella wagged her tail."
  },
  {
    id: 'leo_p5',
    text: "By the blue pond, five yellow ducklings splashed. Quack, quack! Swim with us, Leo!"
  },
  {
    id: 'leo_p6',
    text: "Leo skipped shiny stones across the water. The ducklings cheered with happy splashes."
  },
  {
    id: 'leo_p7',
    text: "In the pen, baby lamb Woolly looked sad. Oh dear, where is my golden bell?"
  },
  {
    id: 'leo_p8',
    text: "Leo spotted the bell hiding in a sunflower! Ting-a-ling! Woolly jumped with delight."
  },
  {
    id: 'leo_p9',
    text: "The evening farm bell chimed. All the farm animals thanked kind Little Leo."
  },
  {
    id: 'leo_p10',
    text: "Leo rested on soft golden hay under the stars. Being kind is the best adventure of all."
  },

  // --- STORY 3: Luna's Cozy House Quest ---
  {
    id: 'luna_p1',
    text: "Hop, hop, hop! Luna the bunny explorer packed her little backpack for a secret quest."
  },
  {
    id: 'luna_p2',
    text: "Luna unfolded her map. Clue number one was hidden in the cozy living room!"
  },
  {
    id: 'luna_p3',
    text: "Cuckoo! The smiling wall clock popped out with a shiny silver key in its beak."
  },
  {
    id: 'luna_p4',
    text: "Next stop, the kitchen! It smelled of sweet warm cookies and fresh milk."
  },
  {
    id: 'luna_p5',
    text: "Behind the fruit bowl, Luna found a message: Follow the bubbly trail to the bathroom!"
  },
  {
    id: 'luna_p6',
    text: "In the warm bath, a rubber duck floated happily and pointed up toward the stairs."
  },
  {
    id: 'luna_p7',
    text: "Creak, creak! Luna climbed all the way up to the quiet, mysterious attic."
  },
  {
    id: 'luna_p8',
    text: "An antique wooden chest waited in the center. Luna used her silver key. Click!"
  },
  {
    id: 'luna_p9',
    text: "Inside was a glowing star lantern and a magical book of bedtime stories!"
  },
  {
    id: 'luna_p10',
    text: "Luna hugged her teddy bear. Every home is magical with the ones you love. Good night!"
  },

  // --- STORY 4: The Three Friends and the Starlight Tree ---
  {
    id: 'friends_p1',
    text: "At the edge of the valley, the magical trails of the forest, farm, and house met."
  },
  {
    id: 'friends_p2',
    text: "Here came Bili, Little Leo, and Luna! They cheered and hugged with huge smiles."
  },
  {
    id: 'friends_p3',
    text: "Tonight was the Starlight Festival, but the great crystal tree was dark and silent."
  },
  {
    id: 'friends_p4',
    text: "Luna checked her map. The tree needs three gifts: Color, Kindness, and Curiosity!"
  },
  {
    id: 'friends_p5',
    text: "Bili touched the roots with his brush. Shimmering rainbow lights began to glow!"
  },
  {
    id: 'friends_p6',
    text: "Leo shared his sweet harvest apples and sang a warm song of pure kindness."
  },
  {
    id: 'friends_p7',
    text: "Luna climbed high and placed her glowing star lantern right on the top branch!"
  },
  {
    id: 'friends_p8',
    text: "Whoosh! A wave of dazzling starlight burst across the entire enchanted night sky!"
  },
  {
    id: 'friends_p9',
    text: "Bili, Leo, and Luna danced hand in paw. All their animal friends joined the celebration."
  },
  {
    id: 'friends_p10',
    text: "Together, we can light up the whole world, they cheered. Friendship is the greatest magic!"
  }
];

async function generateSingleStoryClip(clip) {
  const filePath = path.join(AUDIO_DIR, `${clip.id}.mp3`);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    if (stat.size > 1000) {
      console.log(`[EXISTS] ${clip.id}.mp3`);
      return;
    }
  }

  console.log(`[GENERATING ${clip.id}] "${clip.text}"`);
  const audioStream = await elevenlabs.textToSpeech.convert(VOICE_ID, {
    text: clip.text,
    modelId: MODEL_ID,
    voiceSettings: {
      stability: 0.65,
      similarityBoost: 0.80
    }
  });

  await new Promise((resolve, reject) => {
    const fileOut = fs.createWriteStream(filePath);
    Readable.fromWeb(audioStream)
      .pipe(fileOut)
      .on('finish', resolve)
      .on('error', reject);
  });
  console.log(`[SAVED] ${clip.id}.mp3 (${fs.statSync(filePath).size} bytes)`);
}

export async function generateAllStoryClips() {
  let totalChars = 0;
  STORY_CLIPS.forEach(c => totalChars += c.text.length);
  console.log(`Generating 40 story narrations (Total characters: ${totalChars})...`);

  for (const clip of STORY_CLIPS) {
    try {
      await generateSingleStoryClip(clip);
    } catch (err) {
      console.error(`Error on ${clip.id}:`, err.message);
    }
    // Respect rate limit
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('All 40 story narration clips generated successfully!');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAllStoryClips().catch(err => {
    console.error('Narrator generation error:', err);
    process.exit(1);
  });
}
