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

// Jessica: Playful, Bright, Warm
const VOICE_ID = 'cgSgspJ2msm6clMCkdW9';
const MODEL_ID = 'eleven_v4';

export const CLIPS_TO_GENERATE = [
  // Standalone Vocabulary Items
  { filename: 'fork.mp3', text: 'Fork' },
  { filename: 'spoon.mp3', text: 'Spoon' },
  { filename: 'cup.mp3', text: 'Cup' },
  { filename: 'plate.mp3', text: 'Plate' },
  { filename: 'milk.mp3', text: 'Milk' },
  { filename: 'juice.mp3', text: 'Juice' },
  { filename: 'cheese.mp3', text: 'Cheese' },
  { filename: 'apple.mp3', text: 'Apple' },
  { filename: 'clock.mp3', text: 'Clock' },
  { filename: 'soap.mp3', text: 'Soap' },
  { filename: 'shampoo.mp3', text: 'Shampoo' },
  { filename: 'toothbrush.mp3', text: 'Toothbrush' },
  { filename: 'toothpaste.mp3', text: 'Toothpaste' },
  { filename: 'water_cup.mp3', text: 'Water cup' },
  { filename: 'tree.mp3', text: 'Tree' },
  { filename: 'butterfly.mp3', text: 'Butterfly' },
  { filename: 'sun.mp3', text: 'Sun' },
  { filename: 'plant.mp3', text: 'Plant' },
  { filename: 'bird.mp3', text: 'Bird' },
  { filename: 'shirt.mp3', text: 'Shirt' },
  { filename: 'socks.mp3', text: 'Socks' },
  { filename: 'pants.mp3', text: 'Pants' },
  { filename: 'bicycle.mp3', text: 'Bicycle' },
  { filename: 'helmet.mp3', text: 'Helmet' },
  { filename: 'guitar.mp3', text: 'Guitar' },
  { filename: 'book.mp3', text: 'Book' },
  { filename: 'ball.mp3', text: 'Ball' },
  { filename: 'robot.mp3', text: 'Robot' },
  { filename: 'train.mp3', text: 'Train' },
  { filename: 'strawberry.mp3', text: 'Strawberry' },
  { filename: 'banana.mp3', text: 'Banana' },
  { filename: 'orange.mp3', text: 'Orange' },
  { filename: 'party_cake.mp3', text: 'Party cake' },
  { filename: 'balloons.mp3', text: 'Balloons' },
  { filename: 'music_box.mp3', text: 'Music box' },
  { filename: 'blue_door.mp3', text: 'Blue door' },
  { filename: 'red_door.mp3', text: 'Red door' },
  { filename: 'yellow_door.mp3', text: 'Yellow door' },
  { filename: 'doorbell.mp3', text: 'Doorbell' },
  { filename: 'water_tap.mp3', text: 'Water tap' },
  { filename: 'knocking.mp3', text: 'Knocking' },
  { filename: 'red_flower.mp3', text: 'Red flower' },
  { filename: 'yellow_flower.mp3', text: 'Yellow flower' },
  { filename: 'purple_flower.mp3', text: 'Purple flower' },
  { filename: 'bedroom.mp3', text: 'Bedroom' },
  { filename: 'living_room.mp3', text: 'Living room' },
  { filename: 'kitchen.mp3', text: 'Kitchen' },
  { filename: 'bathroom.mp3', text: 'Bathroom' },
  { filename: 'garage.mp3', text: 'Garage' },
  { filename: 'dining_room.mp3', text: 'Dining room' },

  // Full Action Prompts (Level 1 - 20)
  // Level 1: Living Room
  { filename: 'act_sofa.mp3', text: 'Find the sofa!' },
  { filename: 'act_tv.mp3', text: 'Find the television!' },
  { filename: 'act_lamp.mp3', text: 'Find the lamp!' },
  { filename: 'act_table.mp3', text: 'Touch the table!' },

  // Level 2: Fridge
  { filename: 'act_milk.mp3', text: 'Open the fridge! Find the milk!' },
  { filename: 'act_juice.mp3', text: 'Open the fridge! Find the juice!' },
  { filename: 'act_cheese.mp3', text: 'Open the fridge! Find the cheese!' },
  { filename: 'act_apple.mp3', text: 'Open the fridge! Find the apple!' },

  // Level 3: Bedroom
  { filename: 'act_bed.mp3', text: 'Bedtime! Find the bed!' },
  { filename: 'act_window.mp3', text: 'Find the window!' },
  { filename: 'act_clock.mp3', text: 'Find the clock!' },

  // Level 4: Bathroom Bubbles
  { filename: 'act_soap.mp3', text: 'Pop the bubble! Pop the soap!' },
  { filename: 'act_bathtub.mp3', text: 'Pop the bubble! Pop the bathtub!' },
  { filename: 'act_toothbrush.mp3', text: 'Pop the bubble! Pop the toothbrush!' },
  { filename: 'act_shampoo.mp3', text: 'Pop the bubble! Pop the shampoo!' },

  // Level 5: Dining Room
  { filename: 'act_fork.mp3', text: 'Set the table! Find the fork!' },
  { filename: 'act_spoon.mp3', text: 'Set the table! Find the spoon!' },
  { filename: 'act_cup.mp3', text: 'Set the table! Find the cup!' },

  // Level 6: Garden
  { filename: 'act_flower.mp3', text: 'In the garden! Water the flower!' },
  { filename: 'act_tree.mp3', text: 'In the garden! Touch the green tree!' },
  { filename: 'act_butterfly.mp3', text: 'In the garden! Touch the butterfly!' },

  // Level 7: Laundry
  { filename: 'act_shirt.mp3', text: 'Wash the clothes! Wash the shirt!' },
  { filename: 'act_socks.mp3', text: 'Wash the clothes! Wash the socks!' },
  { filename: 'act_pants.mp3', text: 'Wash the clothes! Wash the pants!' },

  // Level 8: Garage
  { filename: 'act_car.mp3', text: 'In the garage! Park the car!' },
  { filename: 'act_bicycle.mp3', text: 'In the garage! Find the bicycle!' },
  { filename: 'act_helmet.mp3', text: 'In the garage! Find the helmet!' },

  // Level 9: Attic
  { filename: 'act_teddy.mp3', text: 'Attic treasure! Find the teddy bear!' },
  { filename: 'act_guitar.mp3', text: 'Attic treasure! Find the guitar!' },
  { filename: 'act_book.mp3', text: 'Attic treasure! Find the storybook!' },

  // Level 10: Balcony
  { filename: 'act_plant.mp3', text: 'Sunny balcony! Touch the plant!' },
  { filename: 'act_bird.mp3', text: 'Sunny balcony! Help the little bird fly!' },

  // Level 11: Where Does It Belong?
  { filename: 'act_belong_bed.mp3', text: 'Where does the bed belong? Touch the bedroom!' },
  { filename: 'act_belong_sofa.mp3', text: 'Where does the sofa belong? Touch the living room!' },
  { filename: 'act_belong_car.mp3', text: 'Where does the car belong? Touch the garage!' },

  // Level 12: Light Switch
  { filename: 'act_light_on.mp3', text: 'Turn on the light! Tap the switch!' },
  { filename: 'act_light_off.mp3', text: 'Good night house! Turn off the light!' },

  // Level 13: Tidy Up Toys
  { filename: 'act_ball.mp3', text: 'Tidy up! Put the ball in the toy box!' },
  { filename: 'act_robot.mp3', text: 'Tidy up! Put the robot in the toy box!' },
  { filename: 'act_train.mp3', text: 'Tidy up! Put the train in the toy box!' },

  // Level 14: Knock on Door
  { filename: 'act_blue_door.mp3', text: 'Knock knock! Knock on the blue door!' },
  { filename: 'act_red_door.mp3', text: 'Knock knock! Knock on the red door!' },
  { filename: 'act_yellow_door.mp3', text: 'Knock knock! Knock on the yellow door!' },

  // Level 15: Smoothie
  { filename: 'act_strawberry.mp3', text: 'Add to the blender! Add the sweet strawberry!' },
  { filename: 'act_banana.mp3', text: 'Add to the blender! Add the yellow banana!' },
  { filename: 'act_orange.mp3', text: 'Add to the blender! Add the juicy orange!' },

  // Level 16: Sounds
  { filename: 'act_sound_detective.mp3', text: 'Listen closely! What makes this home sound?' },

  // Level 17: Shadow
  { filename: 'act_shadow_safari.mp3', text: 'Mystery shadow! Look at the shadow and match the object!' },

  // Level 18: Brush Teeth
  { filename: 'act_brush_toothbrush.mp3', text: 'Bathroom routine! Touch the toothbrush!' },
  { filename: 'act_brush_toothpaste.mp3', text: 'Bathroom routine! Touch the toothpaste!' },
  { filename: 'act_brush_water_cup.mp3', text: 'Bathroom routine! Touch the water cup!' },

  // Level 19: Flower Pots
  { filename: 'act_water_red_flower.mp3', text: 'Water the flower pot! Water the red flower!' },
  { filename: 'act_water_yellow_flower.mp3', text: 'Water the flower pot! Water the yellow flower!' },
  { filename: 'act_water_purple_flower.mp3', text: 'Water the flower pot! Water the purple flower!' },

  // Level 20: House Party
  { filename: 'act_party_cake.mp3', text: 'Party time! Put the party cake on the table!' },
  { filename: 'act_party_balloons.mp3', text: 'Party time! Bring the balloons!' },
  { filename: 'act_party_music_box.mp3', text: 'Party time! Start the music box!' }
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

async function run() {
  console.log(`Starting audio generation for ${CLIPS_TO_GENERATE.length} clips...`);
  for (const clip of CLIPS_TO_GENERATE) {
    try {
      await generateSingleClip(clip);
    } catch (e) {
      console.error(`Error on ${clip.filename}:`, e.message);
    }
    await new Promise(r => setTimeout(r, 150));
  }
  console.log('Done generating all clips!');
}

run().catch(console.error);
