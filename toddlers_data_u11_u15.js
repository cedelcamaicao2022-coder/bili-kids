/**
 * Bilikids Adventure - Toddlers 01 Curriculum Data
 * Units 11 - 15: My Backyard, Vehicles, The Ocean, My Toy Box, Being Helpful
 */

window.TODDLERS_UNITS_PART3 = [
  // ==========================================================================
  // UNIT 11: MY BACKYARD
  // ==========================================================================
  {
    id: 11,
    code: "unit_11",
    title: "My Backyard",
    subtitle: "Plants, Nature, Prepositions (On/Under) & /g/ Review",
    icon: "🌱",
    themeColor: "#15803d",
    themeLight: "#f0fdf4",
    structures: ["Present Simple", "Verb to be", "There is/are"],
    functions: ["Identifying and describing animals", "Identifying and describing plants", "Identifying location of objects", "Counting", "Reviewing the /g/ sound"],
    vocabulary: ["Leaves", "On", "Plant", "Root", "Seed", "Soil", "Spider", "Sprout", "Stem", "Tree", "Under", "Watering can", "Worm", "Numbers 1–14"],
    phonicsFocus: "/g/ Review: Garden, Grow, Green, Grass, Ground",

    explore: [
      { name: "Seed", icon: "🌰", fact: "A tiny seed sleeping in dark soil, ready to grow into a plant.", audio: "seed", color: "Brown", shape: "Oval", count: 1 },
      { name: "Sprout", icon: "🌱", fact: "A baby green sprout poking its first little leaves toward the sun.", audio: "sprout", color: "Bright Green", shape: "Sprout", count: 1 },
      { name: "Plant & Stem", icon: "🌿", fact: "The strong stem carries water from the roots up to the green leaves.", audio: "stem", color: "Green", shape: "Stem", count: 1 },
      { name: "Roots", icon: "🥕", fact: "Roots grow underground to drink rainwater and anchor the plant.", audio: "root", color: "Brownish", shape: "Web", count: 1 },
      { name: "Leaves", icon: "🍃", fact: "Green leaves absorb sunshine to make sweet food for the plant.", audio: "leaves", color: "Green", shape: "Leaf", count: 6 },
      { name: "Watering Can", icon: "🚿", fact: "We sprinkle gentle water drops on our backyard garden.", audio: "watering can", color: "Blue", shape: "Can", count: 1 },
      { name: "Earthworm", icon: "🪱", fact: "Friendly earthworms live under the soil and make it rich and soft.", audio: "worm", color: "Pinkish", shape: "Long", count: 1 },
      { name: "Spider", icon: "🕷️", fact: "Eight-legged garden spider spins a sparkling web on the tree branch.", audio: "spider", color: "Black", shape: "Spider", count: 1 }
    ],

    listening: [
      {
        id: "u11_l1",
        title: "Garden Sound Hunt",
        desc: "Listen to the backyard creature or plant part and tap its picture.",
        exercises: [
          { audio: "Find the tiny seed in the soil", prompt: "Find: Seed", options: [{ name: "Seed", icon: "🌰" }, { name: "Tree", icon: "🌳" }, { name: "Spider", icon: "🕷️" }], correct: 0 },
          { audio: "Where is the baby green sprout?", prompt: "Find: Sprout", options: [{ name: "Worm", icon: "🪱" }, { name: "Sprout", icon: "🌱" }, { name: "Watering can", icon: "🚿" }], correct: 1 },
          { audio: "Find the friendly earthworm under the ground", prompt: "Find: Worm", options: [{ name: "Leaves", icon: "🍃" }, { name: "Seed", icon: "🌰" }, { name: "Worm", icon: "🪱" }], correct: 2 },
          { audio: "Where is the blue watering can?", prompt: "Find: Watering can", options: [{ name: "Watering can", icon: "🚿" }, { name: "Spider", icon: "🕷️" }, { name: "Tree", icon: "🌳" }], correct: 0 },
          { audio: "Find the garden spider on its web", prompt: "Find: Spider", options: [{ name: "Worm", icon: "🪱" }, { name: "Spider", icon: "🕷️" }, { name: "Sprout", icon: "🌱" }], correct: 1 }
        ]
      },
      {
        id: "u11_l2",
        title: "Find the Plant Part",
        desc: "Listen to plant anatomy (Roots, Stem, Leaves, Flower).",
        exercises: [
          { audio: "Roots drink water deep underground.", prompt: "Find: Roots", options: [{ name: "Roots", icon: "🥕" }, { name: "Leaves", icon: "🍃" }, { name: "Flower", icon: "🌸" }], correct: 0 },
          { audio: "The green stem holds the plant tall.", prompt: "Find: Stem", options: [{ name: "Seed", icon: "🌰" }, { name: "Stem", icon: "🌿" }, { name: "Watering can", icon: "🚿" }], correct: 1 },
          { audio: "Leaves catch the bright yellow sunshine.", prompt: "Find: Leaves", options: [{ name: "Worm", icon: "🪱" }, { name: "Spider", icon: "🕷️" }, { name: "Leaves", icon: "🍃" }], correct: 2 },
          { audio: "A beautiful purple flower blooms at the top.", prompt: "Find: Flower", options: [{ name: "Flower", icon: "🌸" }, { name: "Root", icon: "🥕" }, { name: "Stem", icon: "🌿" }], correct: 0 },
          { audio: "Plant the seed into the warm dark soil.", prompt: "Find: Soil", options: [{ name: "Cloud", icon: "☁️" }, { name: "Soil", icon: "🟤" }, { name: "Leaf", icon: "🍃" }], correct: 1 }
        ]
      },
      {
        id: "u11_l3",
        title: "Listen and Water the Plant",
        desc: "Follow the steps to help a seed sprout and grow.",
        exercises: [
          { audio: "Step 1: Dig a small hole and drop in the brown seed.", prompt: "Step 1: Plant seed", options: [{ name: "Drop seed", icon: "🌰⬇️" }, { name: "Pick fruit", icon: "🍎" }, { name: "Chop tree", icon: "🪓" }], correct: 0 },
          { audio: "Step 2: Cover the seed with soft dark soil.", prompt: "Step 2: Cover with soil", options: [{ name: "Pour paint", icon: "🎨" }, { name: "Cover with soil", icon: "🟤🌰" }, { name: "Put hat", icon: "👒" }], correct: 1 },
          { audio: "Step 3: Sprinkle gentle water with the watering can.", prompt: "Step 3: Water with can", options: [{ name: "Watering can", icon: "🚿💧" }, { name: "Blow wind", icon: "💨" }, { name: "Turn off lamp", icon: "💡" }], correct: 0 },
          { audio: "Step 4: Sunshine warms the ground. Look, a green sprout!", prompt: "Step 4: Sprout appears", options: [{ name: "Snowstorm", icon: "❄️" }, { name: "Green sprout", icon: "🌱✨" }, { name: "Dry stone", icon: "🪨" }], correct: 1 },
          { audio: "Step 5: The plant grows tall with bright green leaves!", prompt: "Step 5: Tall plant", options: [{ name: "Tall plant", icon: "🌿🌸" }, { name: "Dead twig", icon: "🪵" }, { name: "Empty pot", icon: "🪴" }], correct: 0 }
        ]
      },
      {
        id: "u11_l4",
        title: "On or Under?",
        desc: "Listen to prepositions: ON the leaf vs. UNDER the soil.",
        exercises: [
          { audio: "The spider is ON the green leaf.", prompt: "Where is the spider?", options: [{ name: "ON the leaf", icon: "🕷️🍃 (On top)" }, { name: "UNDER the soil", icon: "🪱🟤 (Underneath)" }], correct: 0 },
          { audio: "The worm is UNDER the dark soil.", prompt: "Where is the worm?", options: [{ name: "ON the roof", icon: "🏠" }, { name: "UNDER the soil", icon: "🪱🟤 (Underneath)" }], correct: 1 },
          { audio: "The watering can is ON the garden table.", prompt: "Where is the can?", options: [{ name: "ON the table", icon: "🚿" + (typeof window !== "undefined" && window.BILIKIDS_ICONS ? window.BILIKIDS_ICONS.TABLE : "🪑") + " (On top)" }, { name: "UNDER the table", icon: "⬇️ (Under)" }], correct: 0 },
          { audio: "The roots are growing UNDER the ground.", prompt: "Where are roots?", options: [{ name: "ON the tree", icon: "🍃" }, { name: "UNDER the ground", icon: "🥕🟤 (Under)" }], correct: 1 },
          { audio: "A red ladybug is ON the purple flower.", prompt: "Where is ladybug?", options: [{ name: "ON the flower", icon: "🐞🌸 (On top)" }, { name: "UNDER the stone", icon: "🪨" }], correct: 0 }
        ]
      },
      {
        id: "u11_l5",
        title: "Count Garden Elements",
        desc: "Count garden leaves, seeds, and worms up to 14.",
        exercises: [
          { audio: "I see six green leaves on the branch.", prompt: "Count: 6 leaves", options: [{ name: "4 Leaves", icon: "🍃🍃🍃🍃" }, { name: "6 Leaves", icon: "🍃🍃🍃🍃🍃🍃" }, { name: "8 Leaves", icon: "🍃 8" }], correct: 1 },
          { audio: "There are three tiny seeds in the hand.", prompt: "Count: 3 seeds", options: [{ name: "3 Seeds", icon: "🌰🌰🌰" }, { name: "2 Seeds", icon: "🌰🌰" }, { name: "5 Seeds", icon: "🌰🌰🌰🌰🌰" }], correct: 0 },
          { audio: "Look at two earthworms wiggling in the soil.", prompt: "Count: 2 worms", options: [{ name: "1 Worm", icon: "🪱" }, { name: "4 Worms", icon: "🪱🪱🪱🪱" }, { name: "2 Worms", icon: "🪱🪱" }], correct: 2 },
          { audio: "Count four blooming flowers.", prompt: "Count: 4 flowers", options: [{ name: "4 Flowers", icon: "🌸🌸🌸🌸" }, { name: "2 Flowers", icon: "🌸🌸" }, { name: "5 Flowers", icon: "🌸🌸🌸🌸🌸" }], correct: 0 },
          { audio: "There is one big oak tree in the backyard.", prompt: "Count: 1 tree", options: [{ name: "2 Trees", icon: "🌳🌳" }, { name: "1 Tree", icon: "🌳" }, { name: "3 Trees", icon: "🌳🌳🌳" }], correct: 1 }
        ]
      },
      {
        id: "u11_l6",
        title: "Garden Instructions Challenge",
        desc: "Follow backyard nature discovery commands.",
        exercises: [
          { audio: "Smell the sweet garden flower: Ahhh!", prompt: "Action: Smell flower", options: [{ name: "Smell flower", icon: "🌸👃" }, { name: "Eat soil", icon: "🟤" }, { name: "Sleep", icon: "😴" }], correct: 0 },
          { audio: "Look closely at the spider spinning its web.", prompt: "Action: Look at web", options: [{ name: "Break web", icon: "💥" }, { name: "Look at web", icon: "🕸️👀" }, { name: "Run away", icon: "🏃" }], correct: 1 },
          { audio: "Pour water gently on the thirsty green sprout.", prompt: "Action: Water sprout", options: [{ name: "Water sprout", icon: "🌱💧" }, { name: "Dig hole", icon: "🕳️" }, { name: "Step on it", icon: "🦶" }], correct: 0 },
          { audio: "Count the leaves on the young plant.", prompt: "Action: Count leaves", options: [{ name: "Eat leaves", icon: "🥗" }, { name: "Count leaves", icon: "🍃🔢" }, { name: "Paint leaves", icon: "🎨" }], correct: 1 },
          { audio: "Say hello to the little garden worm!", prompt: "Action: Say hello to worm", options: [{ name: "Scare worm", icon: "🙀" }, { name: "Wave & say hello", icon: "🪱👋" }, { name: "Hide", icon: "🙈" }], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u11_r1",
        title: "Match Plant Words",
        desc: "Read the plant word and select the matching graphic.",
        exercises: [
          { text: "SEED", prompt: "Read: SEED", options: [{ name: "Seed", icon: "🌰" }, { name: "Sprout", icon: "🌱" }, { name: "Tree", icon: "🌳" }], correct: 0 },
          { text: "SPROUT", prompt: "Read: SPROUT", options: [{ name: "Root", icon: "🥕" }, { name: "Sprout", icon: "🌱" }, { name: "Worm", icon: "🪱" }], correct: 1 },
          { text: "LEAF", prompt: "Read: LEAF", options: [{ name: "Soil", icon: "🟤" }, { name: "Spider", icon: "🕷️" }, { name: "Leaf", icon: "🍃" }], correct: 2 },
          { text: "TREE", prompt: "Read: TREE", options: [{ name: "Tree", icon: "🌳" }, { name: "Seed", icon: "🌰" }, { name: "Sprout", icon: "🌱" }], correct: 0 },
          { text: "WORM", prompt: "Read: WORM", options: [{ name: "Flower", icon: "🌸" }, { name: "Worm", icon: "🪱" }, { name: "Leaf", icon: "🍃" }], correct: 1 }
        ]
      },
      {
        id: "u11_r2",
        title: "Read and Identify Plant Parts",
        desc: "Read descriptions of botanical parts.",
        exercises: [
          { text: "This part is underground and drinks water. It is the ROOT.", prompt: "What part is this?", options: ["Root", "Leaf", "Flower"], correct: 0 },
          { text: "This part is green, flat, and absorbs sunshine. It is a LEAF.", prompt: "What part is this?", options: ["Seed", "Leaf", "Worm"], correct: 1 },
          { text: "This part holds the plant straight and carries water. It is the STEM.", prompt: "What part is this?", options: ["Root", "Spider", "Stem"], correct: 2 },
          { text: "We plant this tiny brown thing into the soil. It is a SEED.", prompt: "What part is this?", options: ["Seed", "Tree", "Bench"], correct: 0 },
          { text: "A baby plant with two tiny green leaves. It is a SPROUT.", prompt: "What part is this?", options: ["Branch", "Sprout", "Root"], correct: 1 }
        ]
      },
      {
        id: "u11_r3",
        title: "Complete There Is/Are",
        desc: "Choose 'There is' or 'There are' for garden features.",
        exercises: [
          { text: "______ a tiny seed in the soil. (🌰)", options: ["There is", "There are"], correct: 0 },
          { text: "______ six leaves on the stem. (🍃🍃🍃🍃🍃🍃)", options: ["There is", "There are"], correct: 1 },
          { text: "______ an earthworm in the ground. (🪱)", options: ["There is", "There are"], correct: 0 },
          { text: "______ two blue watering cans. (🚿🚿)", options: ["There is", "There are"], correct: 1 },
          { text: "______ a big tree in the backyard. (🌳)", options: ["There is", "There are"], correct: 0 }
        ]
      },
      {
        id: "u11_r4",
        title: "Read the Plant Growth Story",
        desc: "Read how a seed transforms into a blooming flower.",
        exercises: [
          { text: "Luna plants a little sunflower seed in the garden. She waters it every morning.", prompt: "What does Luna plant?", options: ["A sunflower seed", "A rock", "A toy car"], correct: 0 },
          { text: "After three sunny days, a little green sprout appears above the soil.", prompt: "What appears above the soil?", options: ["A frog", "A green sprout", "A boot"], correct: 1 },
          { text: "Under the ground, strong roots grow to anchor the plant.", prompt: "Where do the roots grow?", options: ["In the sky", "Under the ground", "On the roof"], correct: 1 },
          { text: "The stem grows tall. Beautiful yellow petals open to the warm sun.", prompt: "What color are the petals?", options: ["Yellow", "Black", "Blue"], correct: 0 },
          { text: "A honeybee lands on the flower: 'Buzz buzz!' Nature is amazing.", prompt: "Who lands on the flower?", options: ["A cat", "A honeybee", "A rabbit"], correct: 1 }
        ]
      },
      {
        id: "u11_r5",
        title: "Find the /g/ Sound",
        desc: "Review words starting with /g/ (Garden, Grow, Green, Grass, Ground).",
        exercises: [
          { prompt: "Which backyard place starts with /g/?", options: [{ name: "Garden", icon: "🏡🌱" }, { name: "House", icon: "🏠" }, { name: "Room", icon: "🛏️" }], correct: 0 },
          { prompt: "Which color starts with /g/?", options: [{ name: "Red", icon: "🔴" }, { name: "Green", icon: "🟢" }, { name: "Blue", icon: "🔵" }], correct: 1 },
          { prompt: "What do plants do? They...", options: [{ name: "Sleep", icon: "😴" }, { name: "Fly", icon: "✈️" }, { name: "Grow", icon: "🌱⬆️" }], correct: 2 },
          { prompt: "What is green on the ground?", options: [{ name: "Grass", icon: "🌿" }, { name: "Snow", icon: "❄️" }, { name: "Sand", icon: "🏖️" }], correct: 0 },
          { prompt: "What do we walk on outside?", options: [{ name: "Cloud", icon: "☁️" }, { name: "Ground", icon: "🟤" }, { name: "Sun", icon: "☀️" }], correct: 1 }
        ]
      },
      {
        id: "u11_r6",
        title: "Read the Garden Map",
        desc: "Read the diagram of garden zones.",
        exercises: [
          { text: "ZONE 1: The Vegetable Patch (Carrots, tomatoes and soil).", prompt: "What grows in Zone 1?", options: ["Vegetables", "Fish", "Cars"], correct: 0 },
          { text: "ZONE 2: The Flower Bed (Sunflowers, roses and butterflies).", prompt: "What is in Zone 2?", options: ["Shoes", "Flower bed", "Books"], correct: 1 },
          { text: "ZONE 3: The Big Oak Tree (Bird nests and cool shade).", prompt: "What is in Zone 3?", options: ["Television", "Big oak tree", "Bathtub"], correct: 1 },
          { text: "ZONE 4: The Tool Shed (Watering cans, shovels and pots).", prompt: "Where are watering cans stored?", options: ["Tool shed", "In the pool", "In bedroom"], correct: 0 },
          { text: "Earthworms live UNDER Zone 1 helping the carrots grow.", prompt: "Where do earthworms live?", options: ["In clouds", "Under Zone 1 soil", "On top of trees"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u11_w1",
        title: "Build Garden Words",
        desc: "Unscramble the letters to spell plant vocabulary.",
        exercises: [
          { target: "SEED", letters: ["E", "S", "D", "E"], icon: "🌰", hint: "Tiny plant starter" },
          { target: "LEAF", letters: ["F", "L", "A", "E"], icon: "🍃", hint: "Green and flat" },
          { target: "ROOT", letters: ["T", "R", "O", "O"], icon: "🥕", hint: "Underground part" },
          { target: "TREE", letters: ["E", "T", "R", "E"], icon: "🌳", hint: "Tall with branches" },
          { target: "WORM", letters: ["M", "W", "O", "R"], icon: "🪱", hint: "Wiggles in soil" }
        ]
      },
      {
        id: "u11_w2",
        title: "Missing Letters",
        desc: "Fill in the missing letter for garden words.",
        exercises: [
          { target: "S_ED", missing: "E", full: "SEED", options: ["E", "A", "O"], icon: "🌰" },
          { target: "L_AF", missing: "E", full: "LEAF", options: ["E", "I", "U"], icon: "🍃" },
          { target: "R_OT", missing: "O", full: "ROOT", options: ["O", "A", "E"], icon: "🥕" },
          { target: "W_RM", missing: "O", full: "WORM", options: ["O", "A", "I"], icon: "🪱" },
          { target: "PL_NT", missing: "A", full: "PLANT", options: ["A", "E", "O"], icon: "🌿" }
        ]
      },
      {
        id: "u11_w3",
        title: "Label the Plant",
        desc: "Type or select the correct label for each part of the plant.",
        exercises: [
          { prompt: "Label: 🌰", answer: "seed", accepted: ["seed", "Seed"] },
          { prompt: "Label: 🌱", answer: "sprout", accepted: ["sprout", "Sprout"] },
          { prompt: "Label: 🍃", answer: "leaf", accepted: ["leaf", "leaves", "Leaf"] },
          { prompt: "Label: 🌿", answer: "stem", accepted: ["stem", "plant", "Stem"] },
          { prompt: "Label: 🪱", answer: "worm", accepted: ["worm", "Worm", "earthworm"] }
        ]
      },
      {
        id: "u11_w4",
        title: "Complete Location Sentences",
        desc: "Write 'on' or 'under' to indicate location.",
        exercises: [
          { sentence: "The spider is ______ the leaf. (🕷️🍃)", answer: "on", accepted: ["on", "On"] },
          { sentence: "The worm is ______ the soil. (🪱🟤)", answer: "under", accepted: ["under", "Under"] },
          { sentence: "The watering can is ______ the table. (Table)", answer: "on", accepted: ["on", "On"] },
          { sentence: "The roots grow ______ the ground. (🥕)", answer: "under", accepted: ["under", "Under"] },
          { sentence: "The ladybug rests ______ the flower. (🌸)", answer: "on", accepted: ["on", "On"] }
        ]
      },
      {
        id: "u11_w5",
        title: "Describe the Plant",
        desc: "Finish sentences describing plants.",
        exercises: [
          { sentence: "The leaves are bright ______ . (🟢)", answer: "green", accepted: ["green", "Green"] },
          { sentence: "The sunflower is ______ . (🟡)", answer: "yellow", accepted: ["yellow", "Yellow"] },
          { sentence: "The soil is dark ______ . (🟤)", answer: "brown", accepted: ["brown", "Brown"] },
          { sentence: "The tree is very ______ . (🌳)", answer: "tall", accepted: ["tall", "big", "Tall", "Big"] },
          { sentence: "Water makes plants ______ . (🌱⬆️)", answer: "grow", accepted: ["grow", "Grow", "happy"] }
        ]
      },
      {
        id: "u11_w6",
        title: "Write the Garden Inventory",
        desc: "Fill in the backyard nature log.",
        exercises: [
          { sentence: "I planted ______ (3) sunflower seeds.", answer: "three", accepted: ["three", "3"] },
          { sentence: "I watered the plants with my ______ . (🚿)", answer: "watering can", accepted: ["watering can", "can"] },
          { sentence: "I saw ______ (1) friendly worm.", answer: "one", accepted: ["one", "1"] },
          { sentence: "The plant has ______ (6) green leaves.", answer: "six", accepted: ["six", "6"] },
          { sentence: "Our backyard is a beautiful ______ !", answer: "garden", accepted: ["garden", "place", "home"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u11_s1",
        title: "Name the Plant Parts",
        desc: "Pronounce botanical parts clearly.",
        exercises: [
          { prompt: "Say: Seed", target: "seed", audio: "Seed", icon: "🌰" },
          { prompt: "Say: Sprout", target: "sprout", audio: "Sprout", icon: "🌱" },
          { prompt: "Say: Leaf", target: "leaf", audio: "Leaf", icon: "🍃" },
          { prompt: "Say: Root", target: "root", audio: "Root", icon: "🥕" },
          { prompt: "Say: Tree", target: "tree", audio: "Tree", icon: "🌳" }
        ]
      },
      {
        id: "u11_s2",
        title: "Describe the Garden",
        desc: "Speak about your backyard garden aloud.",
        exercises: [
          { prompt: "Say: 'This is my backyard garden.'", target: "this is my backyard garden" },
          { prompt: "Say: 'The plants are green.'", target: "the plants are green" },
          { prompt: "Say: 'The seeds grow tall.'", target: "the seeds grow tall" },
          { prompt: "Say: 'I water the flowers.'", target: "i water the flowers" },
          { prompt: "Say: 'The sun shines bright.'", target: "the sun shines bright" }
        ]
      },
      {
        id: "u11_s3",
        title: "Where Is the Worm?",
        desc: "Answer location questions using prepositions: 'on' or 'under'.",
        exercises: [
          { prompt: "Where is the worm? 🪱", target: "the worm is under the soil", audio: "The worm is under the soil" },
          { prompt: "Where is the spider? 🕷️", target: "the spider is on the leaf", audio: "The spider is on the leaf" },
          { prompt: "Where are the roots? 🥕", target: "the roots are under the ground" },
          { prompt: "Where is the watering can? 🚿", target: "the watering can is on the table" },
          { prompt: "Where is the bird? 🐦", target: "the bird is on the tree" }
        ]
      },
      {
        id: "u11_s4",
        title: "Count the Leaves",
        desc: "Count garden leaves aloud from 1 to 5.",
        exercises: [
          { prompt: "Say: 'One leaf'", target: "one leaf" },
          { prompt: "Say: 'Two leaves'", target: "two leaves" },
          { prompt: "Say: 'Three leaves'", target: "three leaves" },
          { prompt: "Say: 'Four leaves'", target: "four leaves" },
          { prompt: "Say: 'Five leaves'", target: "five leaves" }
        ]
      },
      {
        id: "u11_s5",
        title: "What Is Under the Tree?",
        desc: "Speak about what you discover under the tree.",
        exercises: [
          { prompt: "Say: 'Cool shade is under the tree.'", target: "cool shade is under the tree" },
          { prompt: "Say: 'Soft grass is under the tree.'", target: "soft grass is under the tree" },
          { prompt: "Say: 'A friendly worm is under the tree.'", target: "a friendly worm is under the tree" },
          { prompt: "Say: 'Roots are under the tree.'", target: "roots are under the tree" },
          { prompt: "Say: 'We rest under the tree.'", target: "we rest under the tree" }
        ]
      },
      {
        id: "u11_s6",
        title: "My Garden Presentation",
        desc: "Deliver a 3-sentence presentation about taking care of plants.",
        exercises: [
          { prompt: "Sentence 1: 'I take care of my garden.'", target: "i take care of my garden" },
          { prompt: "Sentence 2: 'I plant seeds in rich soil.'", target: "i plant seeds in rich soil" },
          { prompt: "Sentence 3: 'I water them with my blue can.'", target: "i water them with my blue can" },
          { prompt: "Sentence 4: 'They grow into pretty flowers.'", target: "they grow into pretty flowers" },
          { prompt: "Sentence 5: 'Nature makes me very happy!'", target: "nature makes me very happy" }
        ]
      }
    ],

    videos: [
      {
        title: "How Plants Grow | British Council LearnEnglish Kids",
        videoId: "dUBIQ1fTRzI",
        embedUrl: "https://www.youtube-nocookie.com/embed/dUBIQ1fTRzI",
        thumbnail: "assets/toddlers_hd/toddlers_cont_farm.png",
        description: "Watch a tiny seed sprout roots in the soil, grow a sturdy stem, and open vibrant green leaves to the sun!",
        checkpoints: [
          { time: 14, question: "What does a seed need to grow?", options: ["Water and sunshine", "Ice cream", "Shoes"], correct: 0 },
          { time: 30, question: "Where do roots grow?", options: ["Under the soil", "In the sky", "In bed"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Magic Garden Rescue",
      story: "The backyard garden was dry and neglected! Join Luna and Bili with shovels and watering cans to revive the soil, plant seeds, and watch flowers bloom across 12 levels.",
      levels: [
        { level: 1, title: "Find the Seed", mission: "Collect 3 golden sunflower seeds from the seed packet.", targetCount: 3, itemType: "seed", icon: "🌰" },
        { level: 2, title: "Discover the Soil", mission: "Loosen the garden soil with the hand rake.", targetCount: 1, itemType: "soil", icon: "🟤" },
        { level: 3, title: "Plant the Seed", mission: "Tuck 3 seeds safely under the warm soil.", targetCount: 3, itemType: "plant_seed", icon: "🌱" },
        { level: 4, title: "Find the Root", mission: "Watch the roots branch underground to drink groundwater.", targetCount: 2, itemType: "root", icon: "🥕" },
        { level: 5, title: "Discover the Stem", mission: "Support the young stem as it pushes toward the sky.", targetCount: 1, itemType: "stem", icon: "🌿" },
        { level: 6, title: "Watch the Sprout Grow", mission: "Nurture the sprout into a strong young plant.", targetCount: 1, itemType: "sprout", icon: "🌱✨" },
        { level: 7, title: "Find the Leaves", mission: "Count and inspect 6 green leaves catching sunlight.", targetCount: 6, itemType: "leaves", icon: "🍃" },
        { level: 8, title: "Water the Plant", mission: "Sprinkle 4 watering can showers over the garden bed.", targetCount: 4, itemType: "water", icon: "🚿" },
        { level: 9, title: "Discover the Spider", mission: "Gently watch the garden spider weave its dewy web.", targetCount: 1, itemType: "spider", icon: "🕷️" },
        { level: 10, title: "Find the Worm", mission: "Help 2 earthworms aerate the nutrient-rich soil.", targetCount: 2, itemType: "worm", icon: "🪱" },
        { level: 11, title: "On or Under Challenge", mission: "Sort bugs: caterpillars ON leaves, worms UNDER soil.", targetCount: 4, itemType: "prepositions", icon: "🔍" },
        { level: 12, title: "Complete the Magic Garden", mission: "Watch all sunflowers bloom and welcome honeybees!", targetCount: 1, itemType: "bloom", icon: "🌻" }
      ]
    },

    finalChallenge: {
      title: "Backyard Nature Master Quest",
      story: "Complete 10 botanical challenges to earn your Master Junior Gardener Badge!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the seed?'", options: ["🌰", "🍃", "🕷️"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'SPROUT'", options: ["🌱", "🥕", "🪱"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: L E _ F", answer: "A" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'The plant grows tall'", target: "the plant grows tall" },
        { step: 5, type: "phonics", prompt: "Which word starts with /g/?", options: ["Garden", "Seed", "Leaf"], correct: 0 },
        { step: 6, type: "location", prompt: "Where do earthworms live?", options: ["Under the soil 🪱", "In the clouds ☁️"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count leaves: 🍃 🍃 🍃 🍃", options: ["3", "4", "5"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: R O O T", answer: "ROOT" },
        { step: 9, type: "listening", prompt: "Listen: 'Water the plants!'", options: ["🚿💧", "😴", "🚗"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'I love nature and green plants!'", target: "i love nature and green plants" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 12: VEHICLES
  // ==========================================================================
  {
    id: 12,
    code: "unit_12",
    title: "Vehicles",
    subtitle: "Transportation, Wheels, Fast & Slow & The /k/ Sound",
    icon: "🚗",
    themeColor: "#2563eb",
    themeLight: "#eff6ff",
    structures: ["Present Simple", "Verb to be", "This is/These are"],
    functions: ["Identifying and describing vehicles", "Counting", "Identifying colors", "Identifying the /k/ sound"],
    vocabulary: ["Bicycle", "Big", "Bumper", "Bus", "Car", "Different", "Door", "Fast", "Little", "Mirror", "Motorcycle", "Same", "Slow", "Truck", "Wheel", "Colors", "Numbers 1–14"],
    phonicsFocus: "/k/ Sound: Car, Cab, Key, Cart, Cargo",

    explore: [
      { name: "Car", icon: "🚗", fact: "A red family car with four rubber tires and comfy seats.", audio: "car", color: "Red", shape: "Car", count: 1 },
      { name: "Bus", icon: "🚌", fact: "A big yellow bus that takes children safely to school.", audio: "bus", color: "Yellow", shape: "Long vehicle", count: 1 },
      { name: "Bicycle", icon: "🚲", fact: "Two pedal wheels and handlebars for healthy park riding.", audio: "bicycle", color: "Blue", shape: "Two wheels", count: 1 },
      { name: "Truck", icon: "🚚", fact: "A heavy cargo truck that carries boxes between towns.", audio: "truck", color: "Green", shape: "Heavy vehicle", count: 1 },
      { name: "Motorcycle", icon: "🏍️", fact: "A fast two-wheeled vehicle with a shiny helmet.", audio: "motorcycle", color: "Orange", shape: "Fast bike", count: 1 },
      { name: "Wheels", icon: "🛞", fact: "Round rubber wheels roll smoothly along paved roads.", audio: "wheel", color: "Black", shape: "Circle", count: 4 },
      { name: "Door & Mirror", icon: "🪞🚪", fact: "Doors keep passengers safe; side mirrors let drivers see behind.", audio: "mirror", color: "Silver", shape: "Rectangle", count: 2 },
      { name: "Fast & Slow", icon: "🏎️🐢", fact: "Race cars zoom fast; heavy tractors move calm and slow.", audio: "fast", color: "Red / Green", shape: "Speed", count: 2 }
    ],

    listening: [
      {
        id: "u12_l1",
        title: "Listen and Find the Vehicle",
        desc: "Listen to the engine sound and vehicle name, then tap the match.",
        exercises: [
          { audio: "Beep beep! Here comes the red family car.", prompt: "Find: Car", options: [{ name: "Car", icon: "🚗" }, { name: "Bicycle", icon: "🚲" }, { name: "Truck", icon: "🚚" }], correct: 0 },
          { audio: "Honk honk! The big yellow school bus is here.", prompt: "Find: Bus", options: [{ name: "Motorcycle", icon: "🏍️" }, { name: "Bus", icon: "🚌" }, { name: "Car", icon: "🚗" }], correct: 1 },
          { audio: "Ring ring! Ring the little bell on the blue bicycle.", prompt: "Find: Bicycle", options: [{ name: "Truck", icon: "🚚" }, { name: "Bus", icon: "🚌" }, { name: "Bicycle", icon: "🚲" }], correct: 2 },
          { audio: "Rumble rumble! The heavy green truck carries boxes.", prompt: "Find: Truck", options: [{ name: "Truck", icon: "🚚" }, { name: "Car", icon: "🚗" }, { name: "Bicycle", icon: "🚲" }], correct: 0 },
          { audio: "Vroom vroom! The fast orange motorcycle zooms past.", prompt: "Find: Motorcycle", options: [{ name: "Bus", icon: "🚌" }, { name: "Motorcycle", icon: "🏍️" }, { name: "Truck", icon: "🚚" }], correct: 1 }
        ]
      },
      {
        id: "u12_l2",
        title: "Vehicle Parts Hunt",
        desc: "Listen to vehicle components: Wheel, Door, Bumper, Mirror.",
        exercises: [
          { audio: "Find the round black wheel that rolls.", prompt: "Find: Wheel", options: [{ name: "Wheel", icon: "🛞" }, { name: "Mirror", icon: "🪞" }, { name: "Bumper", icon: "🛡️" }], correct: 0 },
          { audio: "Open the car door to get inside.", prompt: "Find: Door", options: [{ name: "Wheel", icon: "🛞" }, { name: "Door", icon: "🚪" }, { name: "Engine", icon: "⚙️" }], correct: 1 },
          { audio: "The driver looks in the side mirror.", prompt: "Find: Mirror", options: [{ name: "Bumper", icon: "🛡️" }, { name: "Tire", icon: "🛞" }, { name: "Mirror", icon: "🪞" }], correct: 2 },
          { audio: "The front bumper protects the car.", prompt: "Find: Bumper", options: [{ name: "Bumper", icon: "🛡️" }, { name: "Seat", icon: "🪑" }, { name: "Window", icon: "🪟" }], correct: 0 },
          { audio: "Turn on the bright car headlights.", prompt: "Find: Headlights", options: [{ name: "Tire", icon: "🛞" }, { name: "Headlights", icon: "💡🚗" }, { name: "Door", icon: "🚪" }], correct: 1 }
        ]
      },
      {
        id: "u12_l3",
        title: "Fast or Slow?",
        desc: "Listen and distinguish fast vs. slow vehicles.",
        exercises: [
          { audio: "The race car zooms FAST around the track!", prompt: "Is the race car fast or slow?", options: [{ name: "Fast 🏎️💨", icon: "🏎️" }, { name: "Slow 🐢", icon: "🐢" }], correct: 0 },
          { audio: "The heavy tractor moves SLOW across the farm field.", prompt: "Is the tractor fast or slow?", options: [{ name: "Fast 🏎️", icon: "🏎️" }, { name: "Slow 🚜💨", icon: "🚜" }], correct: 1 },
          { audio: "The airplane flies super fast through the clouds.", prompt: "The airplane is...", options: [{ name: "Fast ✈️", icon: "✈️" }, { name: "Slow", icon: "🐢" }], correct: 0 },
          { audio: "The little turtle walks very slow.", prompt: "The turtle is...", options: [{ name: "Fast", icon: "🏎️" }, { name: "Slow 🐢", icon: "🐢" }], correct: 1 },
          { audio: "The motorcycle zooms fast on the highway.", prompt: "The motorcycle is...", options: [{ name: "Fast 🏍️", icon: "🏍️" }, { name: "Slow", icon: "🐌" }], correct: 0 }
        ]
      },
      {
        id: "u12_l4",
        title: "Listen and Compare",
        desc: "Compare big trucks and little bicycles: SAME or DIFFERENT.",
        exercises: [
          { audio: "These two red cars are the SAME color.", prompt: "Are they same or different?", options: [{ name: "SAME 🚗🚗 (Both red)", icon: "🔴🔴" }, { name: "DIFFERENT", icon: "🔴🔵" }], correct: 0 },
          { audio: "One is a big green bus, the other is a yellow car. They are DIFFERENT.", prompt: "Are they same or different?", options: [{ name: "SAME", icon: "🟡🟡" }, { name: "DIFFERENT 🚌🚗", icon: "🟢🟡" }], correct: 1 },
          { audio: "The truck is BIG. The bicycle is LITTLE.", prompt: "Which vehicle is big?", options: [{ name: "The Truck 🚚", icon: "🚚" }, { name: "The Bicycle 🚲", icon: "🚲" }], correct: 0 },
          { audio: "Both wheels are round. They have the SAME shape.", prompt: "Do wheels have same shape?", options: [{ name: "SAME shape ⭕⭕", icon: "⭕⭕" }, { name: "DIFFERENT", icon: "⭕⏹️" }], correct: 0 },
          { audio: "A fast car and a slow tractor have DIFFERENT speeds.", prompt: "Are their speeds same or different?", options: [{ name: "SAME", icon: "🏎️🏎️" }, { name: "DIFFERENT 🏎️🚜", icon: "⚡🐢" }], correct: 1 }
        ]
      },
      {
        id: "u12_l5",
        title: "Count the Wheels",
        desc: "Listen to the wheel count and match to vehicle.",
        exercises: [
          { audio: "A bicycle has TWO wheels. Count: 1, 2.", prompt: "How many wheels on a bicycle?", options: [{ name: "2 Wheels", icon: "🛞🛞" }, { name: "4 Wheels", icon: "🛞🛞🛞🛞" }, { name: "6 Wheels", icon: "🛞 6" }], correct: 0 },
          { audio: "A car has FOUR wheels. Count: 1, 2, 3, 4.", prompt: "How many wheels on a car?", options: [{ name: "2 Wheels", icon: "🛞🛞" }, { name: "4 Wheels", icon: "🛞🛞🛞🛞" }, { name: "3 Wheels", icon: "🛞🛞🛞" }], correct: 1 },
          { audio: "A big semi-truck has SIX heavy wheels.", prompt: "How many wheels on this truck?", options: [{ name: "4 Wheels", icon: "🛞🛞🛞🛞" }, { name: "2 Wheels", icon: "🛞🛞" }, { name: "6 Wheels", icon: "🛞🛞🛞🛞🛞🛞" }], correct: 2 },
          { audio: "A motorcycle has TWO wheels. Count: 1, 2.", prompt: "How many wheels on a motorcycle?", options: [{ name: "2 Wheels", icon: "🛞🛞" }, { name: "4 Wheels", icon: "🛞🛞🛞🛞" }, { name: "1 Wheel", icon: "🛞" }], correct: 0 },
          { audio: "A school bus has FOUR large wheels.", prompt: "How many wheels on the bus?", options: [{ name: "2 Wheels", icon: "🛞🛞" }, { name: "4 Wheels", icon: "🛞🛞🛞🛞" }, { name: "5 Wheels", icon: "🛞 5" }], correct: 1 }
        ]
      },
      {
        id: "u12_l6",
        title: "Traffic Instructions",
        desc: "Follow city transportation rules.",
        exercises: [
          { audio: "Buckle your seatbelt securely before driving: Click!", prompt: "Instruction: Buckle seatbelt", options: [{ name: "Seatbelt click", icon: "🔒💺" }, { name: "Open door", icon: "🚪" }, { name: "Sleep", icon: "😴" }], correct: 0 },
          { audio: "Wear your safety helmet while riding a bicycle.", prompt: "Instruction: Wear helmet", options: [{ name: "Pajamas", icon: "👕" }, { name: "Helmet on", icon: "🪖🚲" }, { name: "Sandals", icon: "🩴" }], correct: 1 },
          { audio: "Look in the side mirror before turning left.", prompt: "Instruction: Look in mirror", options: [{ name: "Look in mirror", icon: "🪞👀" }, { name: "Cover eyes", icon: "🙈" }, { name: "Honk loud", icon: "📢" }], correct: 0 },
          { audio: "Slow down near the school zone: drive slowly.", prompt: "Instruction: Drive slow", options: [{ name: "Zoom fast", icon: "🏎️" }, { name: "Drive slow", icon: "🐢🚗" }, { name: "Stop engine", icon: "🛑" }], correct: 1 },
          { audio: "Wave hello to the school bus driver!", prompt: "Instruction: Wave to driver", options: [{ name: "Hide", icon: "🙈" }, { name: "Wave hello", icon: "👋🚌" }, { name: "Cry", icon: "😢" }], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u12_r1",
        title: "Vehicle Word Matching",
        desc: "Read the vehicle word and tap its illustration.",
        exercises: [
          { text: "CAR", prompt: "Read: CAR", options: [{ name: "Car", icon: "🚗" }, { name: "Bus", icon: "🚌" }, { name: "Bicycle", icon: "🚲" }], correct: 0 },
          { text: "BUS", prompt: "Read: BUS", options: [{ name: "Truck", icon: "🚚" }, { name: "Bus", icon: "🚌" }, { name: "Car", icon: "🚗" }], correct: 1 },
          { text: "BICYCLE", prompt: "Read: BICYCLE", options: [{ name: "Motorcycle", icon: "🏍️" }, { name: "Car", icon: "🚗" }, { name: "Bicycle", icon: "🚲" }], correct: 2 },
          { text: "TRUCK", prompt: "Read: TRUCK", options: [{ name: "Truck", icon: "🚚" }, { name: "Bus", icon: "🚌" }, { name: "Bicycle", icon: "🚲" }], correct: 0 },
          { text: "MOTORCYCLE", prompt: "Read: MOTORCYCLE", options: [{ name: "Car", icon: "🚗" }, { name: "Motorcycle", icon: "🏍️" }, { name: "Truck", icon: "🚚" }], correct: 1 }
        ]
      },
      {
        id: "u12_r2",
        title: "Read and Identify the Vehicle",
        desc: "Read vehicle characteristics and select the vehicle.",
        exercises: [
          { text: "This vehicle has four wheels and carries my family. It is a CAR.", prompt: "What vehicle is it?", options: ["Car", "Boat", "Plane"], correct: 0 },
          { text: "This big yellow vehicle carries students to school. It is a BUS.", prompt: "What vehicle is it?", options: ["Truck", "Bus", "Bicycle"], correct: 1 },
          { text: "This vehicle has two wheels and pedals. It is a BICYCLE.", prompt: "What vehicle is it?", options: ["Car", "Train", "Bicycle"], correct: 2 },
          { text: "This heavy vehicle carries freight and cargo. It is a TRUCK.", prompt: "What vehicle is it?", options: ["Truck", "Bus", "Car"], correct: 0 },
          { text: "This fast two-wheeler has a motor engine. It is a MOTORCYCLE.", prompt: "What vehicle is it?", options: ["Bicycle", "Motorcycle", "Bus"], correct: 1 }
        ]
      },
      {
        id: "u12_r3",
        title: "Complete This Is/These Are",
        desc: "Choose 'This is' or 'These are' for vehicle parts.",
        exercises: [
          { text: "______ a red car. (🚗)", options: ["This is", "These are"], correct: 0 },
          { text: "______ four round wheels. (🛞🛞🛞🛞)", options: ["This is", "These are"], correct: 1 },
          { text: "______ a yellow bus. (🚌)", options: ["This is", "These are"], correct: 0 },
          { text: "______ two shiny mirrors. (🪞🪞)", options: ["This is", "These are"], correct: 1 },
          { text: "______ a blue bicycle. (🚲)", options: ["This is", "These are"], correct: 0 }
        ]
      },
      {
        id: "u12_r4",
        title: "Read the Vehicle Cards",
        desc: "Read descriptive speed and color cards.",
        exercises: [
          { text: "The sports car is FAST and RED.", prompt: "What is the sports car like?", options: ["Fast and red", "Slow and green", "Big and brown"], correct: 0 },
          { text: "The school bus is BIG and YELLOW.", prompt: "What is the school bus like?", options: ["Tiny and blue", "Big and yellow", "Fast and black"], correct: 1 },
          { text: "The little bicycle is BLUE with two wheels.", prompt: "How many wheels on the bicycle?", options: ["Four", "Three", "Two"], correct: 2 },
          { text: "The garbage truck is GREEN and HEAVY.", prompt: "What color is the garbage truck?", options: ["Green", "Pink", "Red"], correct: 0 },
          { text: "The tractor is SLOW and STRONG.", prompt: "How does the tractor move?", options: ["Fast like a jet", "Slow and strong", "It flies"], correct: 1 }
        ]
      },
      {
        id: "u12_r5",
        title: "Find the /k/ Sound",
        desc: "Identify words starting with the sound /k/ (Car, Cab, Key, Cart, Cargo).",
        exercises: [
          { prompt: "Which vehicle starts with /k/?", options: [{ name: "Car", icon: "🚗" }, { name: "Bus", icon: "🚌" }, { name: "Truck", icon: "🚚" }], correct: 0 },
          { prompt: "Which vehicle starter starts with /k/?", options: [{ name: "Wheel", icon: "🛞" }, { name: "Key", icon: "🔑" }, { name: "Mirror", icon: "🪞" }], correct: 1 },
          { prompt: "Which yellow taxi word starts with /k/?", options: [{ name: "Train", icon: "🚆" }, { name: "Boat", icon: "⛵" }, { name: "Cab", icon: "🚕" }], correct: 2 },
          { prompt: "Which freight box starts with /k/?", options: [{ name: "Cargo", icon: "📦" }, { name: "Tire", icon: "🛞" }, { name: "Road", icon: "🛣️" }], correct: 0 },
          { prompt: "Which shopping roller starts with /k/?", options: [{ name: "Bag", icon: "🛍️" }, { name: "Cart", icon: "🛒" }, { name: "Box", icon: "📦" }], correct: 1 }
        ]
      },
      {
        id: "u12_r6",
        title: "Vehicle Adventure Story",
        desc: "Read the story of a road trip to grandmother's house.",
        exercises: [
          { text: "Leo and his family pack bags into the blue car. Daddy buckles Leo's seatbelt.", prompt: "What color is the car?", options: ["Blue", "Yellow", "Red"], correct: 0 },
          { text: "They drive on the highway. Leo sees big trucks carrying timber and toys.", prompt: "What does Leo see on highway?", options: ["Big trucks", "Boats in water", "Elephants"], correct: 1 },
          { text: "A shiny red motorcycle zooms past. 'Vroom!' goes the engine.", prompt: "What zooms past?", options: ["A bicycle", "A red motorcycle", "A horse"], correct: 1 },
          { text: "They pass a school where children ride bicycles with colorful helmets.", prompt: "What do children wear on bikes?", options: ["Colorful helmets", "Pajamas", "Boots"], correct: 0 },
          { text: "They arrive at Grandma's house. The car honks: 'Beep beep!' Grandma waves.", prompt: "Who waves when they arrive?", options: ["Teacher", "Grandma", "The police"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u12_w1",
        title: "Build Vehicle Words",
        desc: "Unscramble the letters to spell vehicles.",
        exercises: [
          { target: "CAR", letters: ["R", "C", "A"], icon: "🚗", hint: "Four wheels on road" },
          { target: "BUS", letters: ["S", "B", "U"], icon: "🚌", hint: "Big yellow school ride" },
          { target: "VAN", letters: ["N", "V", "A"], icon: "🚐", hint: "Medium family vehicle" },
          { target: "TRUCK", letters: ["K", "T", "R", "U", "C"], icon: "🚚", hint: "Heavy cargo carrier" },
          { target: "BIKE", letters: ["E", "B", "I", "K"], icon: "🚲", hint: "Two pedals and wheels" }
        ]
      },
      {
        id: "u12_w2",
        title: "Complete Missing Letters",
        desc: "Fill in the missing letter for vehicle words.",
        exercises: [
          { target: "C_R", missing: "A", full: "CAR", options: ["A", "O", "E"], icon: "🚗" },
          { target: "B_S", missing: "U", full: "BUS", options: ["U", "A", "O"], icon: "🚌" },
          { target: "TR_CK", missing: "U", full: "TRUCK", options: ["U", "I", "E"], icon: "🚚" },
          { target: "WH_EL", missing: "E", full: "WHEEL", options: ["E", "A", "O"], icon: "🛞" },
          { target: "D_OR", missing: "O", full: "DOOR", options: ["O", "E", "I"], icon: "🚪" }
        ]
      },
      {
        id: "u12_w3",
        title: "Label the Vehicle",
        desc: "Type or select the label for each vehicle graphic.",
        exercises: [
          { prompt: "Label: 🚗", answer: "car", accepted: ["car", "Car", "a car"] },
          { prompt: "Label: 🚌", answer: "bus", accepted: ["bus", "Bus", "a bus"] },
          { prompt: "Label: 🚲", answer: "bicycle", accepted: ["bicycle", "bike", "Bicycle"] },
          { prompt: "Label: 🚚", answer: "truck", accepted: ["truck", "Truck", "a truck"] },
          { prompt: "Label: 🛞", answer: "wheel", accepted: ["wheel", "Wheel", "tire"] }
        ]
      },
      {
        id: "u12_w4",
        title: "Complete Descriptions",
        desc: "Finish sentences describing vehicle speeds and sizes.",
        exercises: [
          { sentence: "The race car is very ______ . (🏎️)", answer: "fast", accepted: ["fast", "Fast"] },
          { sentence: "The tractor is ______ . (🚜)", answer: "slow", accepted: ["slow", "Slow"] },
          { sentence: "The school bus is ______ . (🚌)", answer: "big", accepted: ["big", "Big"] },
          { sentence: "The bicycle is ______ . (🚲)", answer: "little", accepted: ["little", "small", "Little"] },
          { sentence: "The car has four ______ . (🛞)", answer: "wheels", accepted: ["wheels", "doors"] }
        ]
      },
      {
        id: "u12_w5",
        title: "Same or Different?",
        desc: "Write 'same' or 'different' to compare vehicle features.",
        exercises: [
          { sentence: "Two red cars have the ______ color. (🔴🔴)", answer: "same", accepted: ["same", "Same"] },
          { sentence: "A bus and a bicycle are ______ . (🚌🚲)", answer: "different", accepted: ["different", "Different"] },
          { sentence: "All four wheels on the car are the ______ size.", answer: "same", accepted: ["same", "Same"] },
          { sentence: "A fast car and slow tractor have ______ speeds.", answer: "different", accepted: ["different", "Different"] },
          { sentence: "Two blue helmets look the ______ .", answer: "same", accepted: ["same", "Same"] }
        ]
      },
      {
        id: "u12_w6",
        title: "My Favorite Vehicle",
        desc: "Write short sentences about your favorite vehicle.",
        exercises: [
          { sentence: "My favorite vehicle is the ______ . (car / bus / bicycle)", answer: "bicycle", accepted: ["bicycle", "car", "bus", "truck", "motorcycle", "bike"] },
          { sentence: "My bicycle is painted ______ . (blue / red / yellow)", answer: "blue", accepted: ["blue", "red", "yellow", "green", "pink"] },
          { sentence: "It has ______ wheels. (2 / 4)", answer: "two", accepted: ["two", "2", "four", "4"] },
          { sentence: "I wear a safe ______ when I ride. (🪖)", answer: "helmet", accepted: ["helmet"] },
          { sentence: "Riding my vehicle is so much ______ !", answer: "fun", accepted: ["fun", "great"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u12_s1",
        title: "Name the Vehicles",
        desc: "Pronounce vehicle names clearly into your microphone.",
        exercises: [
          { prompt: "Say: Car", target: "car", audio: "Car", icon: "🚗" },
          { prompt: "Say: Bus", target: "bus", audio: "Bus", icon: "🚌" },
          { prompt: "Say: Bicycle", target: "bicycle", audio: "Bicycle", icon: "🚲" },
          { prompt: "Say: Truck", target: "truck", audio: "Truck", icon: "🚚" },
          { prompt: "Say: Motorcycle", target: "motorcycle", audio: "Motorcycle", icon: "🏍️" }
        ]
      },
      {
        id: "u12_s2",
        title: "Describe the Car",
        desc: "Speak about car color, wheels and doors.",
        exercises: [
          { prompt: "Say: 'This is a red car.'", target: "this is a red car", audio: "This is a red car" },
          { prompt: "Say: 'The car has four wheels.'", target: "the car has four wheels" },
          { prompt: "Say: 'It has two shiny mirrors.'", target: "it has two shiny mirrors" },
          { prompt: "Say: 'The car drives fast.'", target: "the car drives fast" },
          { prompt: "Say: 'I ride in the car with family.'", target: "i ride in the car with family" }
        ]
      },
      {
        id: "u12_s3",
        title: "Fast or Slow?",
        desc: "State vehicle speeds aloud.",
        exercises: [
          { prompt: "Say: 'The car is fast.'", target: "the car is fast" },
          { prompt: "Say: 'The tractor is slow.'", target: "the tractor is slow" },
          { prompt: "Say: 'The motorcycle is fast.'", target: "the motorcycle is fast" },
          { prompt: "Say: 'The turtle is slow.'", target: "the turtle is slow" },
          { prompt: "Say: 'We drive safely.'", target: "we drive safely" }
        ]
      },
      {
        id: "u12_s4",
        title: "Count the Wheels",
        desc: "Count wheels aloud on various vehicles.",
        exercises: [
          { prompt: "Say: 'A bicycle has two wheels.'", target: "a bicycle has two wheels" },
          { prompt: "Say: 'A car has four wheels.'", target: "a car has four wheels" },
          { prompt: "Say: 'A motorcycle has two wheels.'", target: "a motorcycle has two wheels" },
          { prompt: "Say: 'The bus has four big wheels.'", target: "the bus has four big wheels" },
          { prompt: "Say: 'Wheels roll round and round.'", target: "wheels roll round and round" }
        ]
      },
      {
        id: "u12_s5",
        title: "Same or Different?",
        desc: "Speak comparative sentences aloud.",
        exercises: [
          { prompt: "Say: 'Both cars are red: they are the same.'", target: "both cars are red they are the same" },
          { prompt: "Say: 'The bus and bike are different.'", target: "the bus and bike are different" },
          { prompt: "Say: 'All wheels are round: they are the same.'", target: "all wheels are round they are the same" },
          { prompt: "Say: 'Fast and slow are different.'", target: "fast and slow are different" },
          { prompt: "Say: 'I can compare vehicles.'", target: "i can compare vehicles" }
        ]
      },
      {
        id: "u12_s6",
        title: "My Vehicle Presentation",
        desc: "Deliver a 3-sentence presentation of transportation in your town.",
        exercises: [
          { prompt: "Sentence 1: 'There are many vehicles in my city.'", target: "there are many vehicles in my city" },
          { prompt: "Sentence 2: 'I ride my blue bicycle in the park.'", target: "i ride my blue bicycle in the park" },
          { prompt: "Sentence 3: 'Cars and buses drive on the road.'", target: "cars and buses drive on the road" },
          { prompt: "Sentence 4: 'We always buckle our seatbelts.'", target: "we always buckle our seatbelts" },
          { prompt: "Sentence 5: 'Vehicles help us travel everywhere!'", target: "vehicles help us travel everywhere" }
        ]
      }
    ],

    videos: [
      {
        title: "The Wheels on the Bus | British Council LearnEnglish Kids",
        videoId: "yWirt38UKnM",
        embedUrl: "https://www.youtube-nocookie.com/embed/yWirt38UKnM",
        thumbnail: "assets/toddlers_hd/toddlers_cont_house.png",
        description: "The wheels on the bus go round and round, the wipers go swish swish, and the horn goes beep beep all through the town!",
        checkpoints: [
          { time: 15, question: "What do the wheels on the bus do?", options: ["Go round and round", "Stop and sleep", "Fly up high"], correct: 0 },
          { time: 35, question: "What sound does the horn make?", options: ["Beep beep beep", "Moo moo moo", "Quack quack"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "Vehicle Race and Rescue",
      story: "The city vehicles need maintenance before the grand transportation parade! Help mechanic Leo assemble parts, test wheels, and wash trucks across 12 levels.",
      levels: [
        { level: 1, title: "Find the Bicycle", mission: "Pump up the 2 tires on the blue bicycle.", targetCount: 2, itemType: "bike", icon: "🚲" },
        { level: 2, title: "Discover the Car", mission: "Wash the red family car with sudsy bubbles.", targetCount: 1, itemType: "car", icon: "🚗" },
        { level: 3, title: "Prepare the Bus", mission: "Inspect the 4 passenger doors on the school bus.", targetCount: 4, itemType: "bus", icon: "🚌" },
        { level: 4, title: "Find the Motorcycle", mission: "Equip the motorcycle driver with a safety helmet.", targetCount: 1, itemType: "moto", icon: "🏍️" },
        { level: 5, title: "Discover the Truck", mission: "Load 3 delivery boxes into the green cargo truck.", targetCount: 3, itemType: "truck", icon: "🚚" },
        { level: 6, title: "Identify the Wheels", mission: "Check tire pressure on 4 car wheels.", targetCount: 4, itemType: "wheels", icon: "🛞" },
        { level: 7, title: "Find the Bumper and Door", mission: "Attach the shiny chrome bumper to the front.", targetCount: 2, itemType: "parts", icon: "🛡️" },
        { level: 8, title: "Discover the Mirror", mission: "Adjust the driver side mirror for clear vision.", targetCount: 2, itemType: "mirror", icon: "🪞" },
        { level: 9, title: "Compare Big and Little", mission: "Sort big trucks to the depot and little bikes to the rack.", targetCount: 4, itemType: "sizes", icon: "📦" },
        { level: 10, title: "Compare Fast and Slow", mission: "Place race cars in the fast lane, tractors in the slow lane.", targetCount: 4, itemType: "speed", icon: "🏎️" },
        { level: 11, title: "Find the /k/ Sound", mission: "Spot /k/ vehicle items: Car, Cab, Key, Cart.", targetCount: 4, itemType: "phonics", icon: "🔑" },
        { level: 12, title: "Complete the Vehicle Adventure", mission: "Lead the City Transportation Parade with all vehicles!", targetCount: 1, itemType: "parade", icon: "🏁" }
      ]
    },

    finalChallenge: {
      title: "Transportation Master Quest",
      story: "Complete 10 interactive vehicle challenges to earn your Master City Driver License!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the car?'", options: ["🚗", "🚌", "🚲"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'BUS'", options: ["🚌", "🚚", "🏍️"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: C _ R", answer: "A" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'A car has four wheels'", target: "a car has four wheels" },
        { step: 5, type: "phonics", prompt: "Which word starts with /k/?", options: ["Car", "Bus", "Train"], correct: 0 },
        { step: 6, type: "speed", prompt: "Which vehicle is fast?", options: ["Race car 🏎️", "Tractor 🚜"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count wheels on a bike: 🛞 🛞", options: ["2", "4", "6"], correct: 0 },
        { step: 8, type: "writing", prompt: "Unscramble: T R U C K", answer: "TRUCK" },
        { step: 9, type: "listening", prompt: "Listen: 'Honk the horn: Beep beep!'", options: ["📢🚗", "😴", "🥪"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'I love driving and riding vehicles!'", target: "i love driving and riding vehicles" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 13: THE OCEAN
  // ==========================================================================
  {
    id: 13,
    code: "unit_13",
    title: "The Ocean",
    subtitle: "Marine Creatures, In/On/Under & /k/ Review",
    icon: "🐬",
    themeColor: "#0284c7",
    themeLight: "#f0f9ff",
    structures: ["Present Simple", "Verb to be"],
    functions: ["Identifying and describing animals", "Identifying colors", "Describing size", "Identifying location", "Counting", "Reviewing the /k/ sound"],
    vocabulary: ["Big", "Boat", "Cave", "Coral", "Dolphin", "Fish", "In", "Jellyfish", "Little", "Ocean", "Octopus", "On", "Rock", "Shark", "Shell", "Under", "Whale", "Colors", "Numbers 1–15"],
    phonicsFocus: "/k/ Review: Coral, Cave, Clam, Crab, Coast",

    explore: [
      { name: "Ocean", icon: "🌊", fact: "Vast blue ocean covering most of our beautiful planet Earth.", audio: "ocean", color: "Deep Blue", shape: "Waves", count: 1 },
      { name: "Dolphin", icon: "🐬", fact: "Playful, friendly dolphins leap above the waves and click to talk.", audio: "dolphin", color: "Silver grey", shape: "Sleek animal", count: 2 },
      { name: "Whale", icon: "🐋", fact: "The blue whale is the biggest animal in the entire world!", audio: "whale", color: "Blue", shape: "Giant animal", count: 1 },
      { name: "Fish", icon: "🐠", fact: "Tropical fish with colorful stripes swimming through coral reefs.", audio: "fish", color: "Yellow & Blue", shape: "Fish", count: 8 },
      { name: "Octopus", icon: "🐙", fact: "Eight flexible tentacles and smart camouflage in rocky caves.", audio: "octopus", color: "Purple", shape: "Eight arms", count: 1 },
      { name: "Sea Shell", icon: "🐚", fact: "Pretty spiral shells washed onto the sandy shore by gentle tides.", audio: "shell", color: "Pink & Cream", shape: "Spiral", count: 5 },
      { name: "Coral Reef", icon: "🪸", fact: "Living underwater coral gardens providing homes to tiny sea creatures.", audio: "coral", color: "Coral pink", shape: "Branches", count: 3 },
      { name: "Sailboat", icon: "⛵", fact: "Glides ON top of the blue ocean waves propelled by coastal breeze.", audio: "boat", color: "White & Red", shape: "Boat", count: 1 }
    ],

    listening: [
      {
        id: "u13_l1",
        title: "Ocean Animal Detective",
        desc: "Listen to the sea creature described and tap its picture.",
        exercises: [
          { audio: "Click click! I leap above the waves with a happy whistle. I am a dolphin.", prompt: "Find: Dolphin", options: [{ name: "Dolphin", icon: "🐬" }, { name: "Whale", icon: "🐋" }, { name: "Crab", icon: "🦀" }], correct: 0 },
          { audio: "I am the giant of the deep ocean. I spray water from my blowhole. I am a whale.", prompt: "Find: Whale", options: [{ name: "Fish", icon: "🐠" }, { name: "Whale", icon: "🐋" }, { name: "Octopus", icon: "🐙" }], correct: 1 },
          { audio: "I have eight wiggly tentacles and hide in underwater caves. I am an octopus.", prompt: "Find: Octopus", options: [{ name: "Jellyfish", icon: "🪼" }, { name: "Shark", icon: "🦈" }, { name: "Octopus", icon: "🐙" }], correct: 2 },
          { audio: "I have colorful scales and swim quickly through the coral. I am a fish.", prompt: "Find: Fish", options: [{ name: "Fish", icon: "🐠" }, { name: "Boat", icon: "⛵" }, { name: "Shell", icon: "🐚" }], correct: 0 },
          { audio: "I float gently like a clear parachute in the water. I am a jellyfish.", prompt: "Find: Jellyfish", options: [{ name: "Dolphin", icon: "🐬" }, { name: "Jellyfish", icon: "🪼" }, { name: "Whale", icon: "🐋" }], correct: 1 }
        ]
      },
      {
        id: "u13_l2",
        title: "Listen and Find the Animal",
        desc: "Listen to the ocean creature named and tap it.",
        exercises: [
          { audio: "Where is the gray dolphin?", prompt: "Find: Dolphin", options: [{ name: "Dolphin", icon: "🐬" }, { name: "Shark", icon: "🦈" }, { name: "Fish", icon: "🐠" }], correct: 0 },
          { audio: "Find the big blue whale", prompt: "Find: Whale", options: [{ name: "Octopus", icon: "🐙" }, { name: "Whale", icon: "🐋" }, { name: "Jellyfish", icon: "🪼" }], correct: 1 },
          { audio: "Where is the fierce shark?", prompt: "Find: Shark", options: [{ name: "Dolphin", icon: "🐬" }, { name: "Whale", icon: "🐋" }, { name: "Shark", icon: "🦈" }], correct: 2 },
          { audio: "Find the spiral pink sea shell", prompt: "Find: Shell", options: [{ name: "Shell", icon: "🐚" }, { name: "Boat", icon: "⛵" }, { name: "Coral", icon: "🪸" }], correct: 0 },
          { audio: "Find the bright pink coral branch", prompt: "Find: Coral", options: [{ name: "Fish", icon: "🐠" }, { name: "Coral", icon: "🪸" }, { name: "Octopus", icon: "🐙" }], correct: 1 }
        ]
      },
      {
        id: "u13_l3",
        title: "Underwater Location Challenge",
        desc: "Listen to prepositions: IN the cave, ON the rock, UNDER the boat.",
        exercises: [
          { audio: "The octopus is hiding IN the underwater cave.", prompt: "Where is the octopus?", options: [{ name: "IN the cave", icon: "🐙🪨 (Inside cave)" }, { name: "ON the boat", icon: "⛵" }], correct: 0 },
          { audio: "The sea star is resting ON the flat rock.", prompt: "Where is the star?", options: [{ name: "UNDER sand", icon: "🏖️" }, { name: "ON the rock", icon: "⭐🪨 (On top)" }], correct: 1 },
          { audio: "The dolphin is swimming UNDER the sailboat.", prompt: "Where is the dolphin?", options: [{ name: "UNDER the boat", icon: "🐬⛵ (Under boat)" }, { name: "ON the cloud", icon: "☁️" }], correct: 0 },
          { audio: "The colorful fish is swimming IN the coral reef.", prompt: "Where is the fish?", options: [{ name: "ON the tree", icon: "🌳" }, { name: "IN the coral", icon: "🐠🪸 (In reef)" }], correct: 1 },
          { audio: "The shell is lying ON the sandy ocean floor.", prompt: "Where is the shell?", options: [{ name: "ON the sand", icon: "🐚🏖️ (On sand)" }, { name: "UNDER a car", icon: "🚗" }], correct: 0 }
        ]
      },
      {
        id: "u13_l4",
        title: "Big or Little Sea Animals?",
        desc: "Distinguish between giant whales and little tropical fish.",
        exercises: [
          { audio: "The blue whale is HUGE and BIG.", prompt: "The whale is...", options: [{ name: "Big 🐋", icon: "🐋" }, { name: "Little 🐠", icon: "🐠" }], correct: 0 },
          { audio: "The baby clownfish is little and cute.", prompt: "The clownfish is...", options: [{ name: "Giant", icon: "🐋" }, { name: "Little 🐠", icon: "🐠" }], correct: 1 },
          { audio: "The ocean is BIG and vast.", prompt: "The ocean is...", options: [{ name: "Big 🌊", icon: "🌊" }, { name: "Small cup", icon: "🥛" }], correct: 0 },
          { audio: "This tiny sea shell is little.", prompt: "The sea shell is...", options: [{ name: "Big", icon: "🐋" }, { name: "Little 🐚", icon: "🐚" }], correct: 1 },
          { audio: "Show me the big dolphin jumping high.", prompt: "Find: BIG dolphin", options: [{ name: "Big Dolphin 🐬", icon: "🐬" }, { name: "Tiny Shrimp 🦐", icon: "🦐" }], correct: 0 }
        ]
      },
      {
        id: "u13_l5",
        title: "Count the Ocean Creatures",
        desc: "Count dolphins, fish, and shells up to 15.",
        exercises: [
          { audio: "I see three friendly dolphins jumping.", prompt: "Count: 3 dolphins", options: [{ name: "2 Dolphins", icon: "🐬🐬" }, { name: "3 Dolphins", icon: "🐬🐬🐬" }, { name: "4 Dolphins", icon: "🐬🐬🐬🐬" }], correct: 1 },
          { audio: "There are five yellow fish in the coral.", prompt: "Count: 5 fish", options: [{ name: "5 Fish", icon: "🐠🐠🐠🐠🐠" }, { name: "3 Fish", icon: "🐠🐠🐠" }, { name: "6 Fish", icon: "🐠 6" }], correct: 0 },
          { audio: "Four pretty pink shells on the sand.", prompt: "Count: 4 shells", options: [{ name: "2 Shells", icon: "🐚🐚" }, { name: "3 Shells", icon: "🐚🐚🐚" }, { name: "4 Shells", icon: "🐚🐚🐚🐚" }], correct: 2 },
          { audio: "There is one giant blue whale.", prompt: "Count: 1 whale", options: [{ name: "1 Whale", icon: "🐋" }, { name: "2 Whales", icon: "🐋🐋" }, { name: "3 Whales", icon: "🐋🐋🐋" }], correct: 0 },
          { audio: "Count two white sailboats on the water.", prompt: "Count: 2 boats", options: [{ name: "1 Boat", icon: "⛵" }, { name: "2 Boats", icon: "⛵⛵" }, { name: "4 Boats", icon: "⛵⛵⛵⛵" }], correct: 1 }
        ]
      },
      {
        id: "u13_l6",
        title: "Ocean Exploration Listening",
        desc: "Listen to the submarine ocean diver story.",
        exercises: [
          { audio: "Diver Luna puts on her goggles and dives into the warm turquoise water.", prompt: "What does Luna put on?", options: ["Goggles", "Snow boots", "Heavy coat"], correct: 0 },
          { audio: "A school of silvery fish swims past her fingers. 'Hello little fish!'", prompt: "Who swims past her fingers?", options: ["Silvery fish", "A dog", "A horse"], correct: 0 },
          { audio: "Down near the reef, an octopus changes color to match the purple coral.", prompt: "What animal changes color?", options: ["A bird", "An octopus", "A rabbit"], correct: 1 },
          { audio: "Dolphin Bili swims beside Luna and does a playful barrel roll.", prompt: "Who swims beside Luna?", options: ["Dolphin Bili", "A wolf", "A bear"], correct: 0 },
          { audio: "Luna picks up a shiny spiral shell to remember her wonderful ocean dive.", prompt: "What does Luna pick up?", options: ["A shoe", "A shiny spiral shell", "A banana"], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u13_r1",
        title: "Match Ocean Animals",
        desc: "Read the marine creature word and tap its illustration.",
        exercises: [
          { text: "DOLPHIN", prompt: "Read: DOLPHIN", options: [{ name: "Dolphin", icon: "🐬" }, { name: "Whale", icon: "🐋" }, { name: "Fish", icon: "🐠" }], correct: 0 },
          { text: "WHALE", prompt: "Read: WHALE", options: [{ name: "Octopus", icon: "🐙" }, { name: "Whale", icon: "🐋" }, { name: "Shark", icon: "🦈" }], correct: 1 },
          { text: "FISH", prompt: "Read: FISH", options: [{ name: "Shell", icon: "🐚" }, { name: "Boat", icon: "⛵" }, { name: "Fish", icon: "🐠" }], correct: 2 },
          { text: "OCTOPUS", prompt: "Read: OCTOPUS", options: [{ name: "Octopus", icon: "🐙" }, { name: "Dolphin", icon: "🐬" }, { name: "Whale", icon: "🐋" }], correct: 0 },
          { text: "SHELL", prompt: "Read: SHELL", options: [{ name: "Fish", icon: "🐠" }, { name: "Shell", icon: "🐚" }, { name: "Shark", icon: "🦈" }], correct: 1 }
        ]
      },
      {
        id: "u13_r2",
        title: "Read the Ocean Map",
        desc: "Read ocean zones: Surface, Coral Reef, Deep Cave.",
        exercises: [
          { text: "SURFACE: Sailboats float ON the water and dolphins leap into the air.", prompt: "What floats on the surface?", options: ["Sailboats", "Caves", "Rocks"], correct: 0 },
          { text: "CORAL REEF: Colorful fish swim IN the coral garden.", prompt: "Where do fish swim?", options: ["In the clouds", "In coral garden", "On the roof"], correct: 1 },
          { text: "DEEP CAVE: Octopuses and crabs rest UNDER the rocks.", prompt: "Where do crabs rest?", options: ["Under the rocks", "In bedroom", "On airplane"], correct: 0 },
          { text: "SHORE: Gentle waves wash pink sea shells ON the sand.", prompt: "What is on the sand?", options: ["Snow", "Pink sea shells", "Hot soup"], correct: 1 },
          { text: "OPEN SEA: The giant blue whale swims freely.", prompt: "Where does the whale swim?", options: ["In a bathtub", "In open sea", "In a sandbox"], correct: 1 }
        ]
      },
      {
        id: "u13_r3",
        title: "Complete Location Sentences",
        desc: "Choose between 'in', 'on', and 'under' for sea creatures.",
        exercises: [
          { text: "The boat sails ______ the water. (⛵)", options: ["on", "under", "in"], correct: 0 },
          { text: "The fish swims ______ the ocean. (🐠)", options: ["on", "under", "in"], correct: 2 },
          { text: "The crab hides ______ the rock. (🦀🪨)", options: ["under", "on", "in"], correct: 0 },
          { text: "The shell rests ______ the sand. (🐚)", options: ["on", "under", "in"], correct: 0 },
          { text: "The dolphin dives ______ the boat. (🐬⛵)", options: ["under", "on", "in"], correct: 0 }
        ]
      },
      {
        id: "u13_r4",
        title: "Read the Sea Animal Cards",
        desc: "Read descriptive flashcards of marine creatures.",
        exercises: [
          { text: "DOLPHIN: Friendly, gray, smart, leaps above waves.", prompt: "What animal is friendly and leaps?", options: ["Dolphin", "Worm", "Cat"], correct: 0 },
          { text: "WHALE: Giant, blue, sings deep ocean songs.", prompt: "What animal is giant and blue?", options: ["Rabbit", "Whale", "Duck"], correct: 1 },
          { text: "OCTOPUS: Eight arms, purple, lives in caves.", prompt: "How many arms does an octopus have?", options: ["Two", "Four", "Eight"], correct: 2 },
          { text: "SHARK: Fast swimmer with sharp teeth and dorsal fin.", prompt: "What animal has a dorsal fin?", options: ["Shark", "Cow", "Chicken"], correct: 0 },
          { text: "CORAL: Beautiful pink branches where fish sleep.", prompt: "What is coral like?", options: ["Cold ice", "Pink branches for fish", "Hot fire"], correct: 1 }
        ]
      },
      {
        id: "u13_r5",
        title: "Find the /k/ Sound",
        desc: "Review ocean words starting with /k/ (Coral, Cave, Crab, Coast, Clam).",
        exercises: [
          { prompt: "Which ocean animal starts with /k/?", options: [{ name: "Crab", icon: "🦀" }, { name: "Fish", icon: "🐠" }, { name: "Whale", icon: "🐋" }], correct: 0 },
          { prompt: "Which underwater structure starts with /k/?", options: [{ name: "Tree", icon: "🌳" }, { name: "Coral", icon: "🪸" }, { name: "Cloud", icon: "☁️" }], correct: 1 },
          { prompt: "Which rock shelter starts with /k/?", options: [{ name: "House", icon: "🏠" }, { name: "Bed", icon: "🛏️" }, { name: "Cave", icon: "🪨" }], correct: 2 },
          { prompt: "Which sea shell creature starts with /k/?", options: [{ name: "Clam", icon: "🦪" }, { name: "Dolphin", icon: "🐬" }, { name: "Shark", icon: "🦈" }], correct: 0 },
          { prompt: "Which seaside word starts with /k/?", options: [{ name: "Mountain", icon: "⛰️" }, { name: "Coast", icon: "🏖️" }, { name: "Forest", icon: "🌲" }], correct: 1 }
        ]
      },
      {
        id: "u13_r6",
        title: "The Ocean Adventure Story",
        desc: "Read the story of a peaceful boat ride across the bay.",
        exercises: [
          { text: "Captain Leo sails his small white boat into the calm blue ocean.", prompt: "Who is the captain?", options: ["Captain Leo", "Bili", "Farmer"], correct: 0 },
          { text: "Two gray dolphins jump alongside the boat: 'Splash, splash!'", prompt: "How many dolphins jump?", options: ["One", "Two", "Ten"], correct: 1 },
          { text: "Through the clear glass floor, Luna sees colorful coral and tiny fish.", prompt: "What does Luna see through the glass?", options: ["Cars", "Coral and tiny fish", "Trees"], correct: 1 },
          { text: "In the distance, a mother whale spouts a rainbow spray of water.", prompt: "What does the whale spout?", options: ["A rainbow spray of water", "Sand", "Rocks"], correct: 0 },
          { text: "They return to the sandy harbor feeling thankful for the wondrous ocean.", prompt: "How do they feel about the ocean?", options: ["Angry", "Thankful and wondrous", "Bored"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u13_w1",
        title: "Build Ocean Words",
        desc: "Unscramble the letters to spell marine vocabulary.",
        exercises: [
          { target: "FISH", letters: ["H", "F", "I", "S"], icon: "🐠", hint: "Swims with fins" },
          { target: "BOAT", letters: ["T", "B", "A", "O"], icon: "⛵", hint: "Sails on water" },
          { target: "ROCK", letters: ["K", "R", "C", "O"], icon: "🪨", hint: "Hard mineral stone" },
          { target: "CAVE", letters: ["E", "C", "A", "V"], icon: "🪨", hint: "Hollow inside rock" },
          { target: "SEAS", letters: ["S", "S", "E", "A"], icon: "🌊", hint: "Big blue waters" }
        ]
      },
      {
        id: "u13_w2",
        title: "Missing Letters",
        desc: "Fill in the missing letter for ocean words.",
        exercises: [
          { target: "F_SH", missing: "I", full: "FISH", options: ["I", "E", "A"], icon: "🐠" },
          { target: "B_AT", missing: "O", full: "BOAT", options: ["O", "A", "E"], icon: "⛵" },
          { target: "SH_LL", missing: "E", full: "SHELL", options: ["E", "I", "U"], icon: "🐚" },
          { target: "WH_LE", missing: "A", full: "WHALE", options: ["A", "E", "O"], icon: "🐋" },
          { target: "C_VE", missing: "A", full: "CAVE", options: ["A", "O", "I"], icon: "🪨" }
        ]
      },
      {
        id: "u13_w3",
        title: "Label the Ocean",
        desc: "Type or select the label for each marine graphic.",
        exercises: [
          { prompt: "Label: 🐬", answer: "dolphin", accepted: ["dolphin", "Dolphin"] },
          { prompt: "Label: 🐋", answer: "whale", accepted: ["whale", "Whale"] },
          { prompt: "Label: 🐠", answer: "fish", accepted: ["fish", "Fish"] },
          { prompt: "Label: 🐙", answer: "octopus", accepted: ["octopus", "Octopus"] },
          { prompt: "Label: ⛵", answer: "boat", accepted: ["boat", "Boat", "sailboat"] }
        ]
      },
      {
        id: "u13_w4",
        title: "Complete In/On/Under",
        desc: "Fill in the blanks with correct prepositions: in, on, under.",
        exercises: [
          { sentence: "The boat sails ______ the ocean. (⛵)", answer: "on", accepted: ["on", "On"] },
          { sentence: "The fish swims ______ the water. (🐠)", answer: "in", accepted: ["in", "In"] },
          { sentence: "The crab hides ______ the rock. (🦀)", answer: "under", accepted: ["under", "Under"] },
          { sentence: "The dolphin dives ______ the waves. (🐬)", answer: "under", accepted: ["under", "in"] },
          { sentence: "The shell rests ______ the sand. (🐚)", answer: "on", accepted: ["on", "On"] }
        ]
      },
      {
        id: "u13_w5",
        title: "Describe Sea Animals",
        desc: "Complete descriptive sentences about marine life.",
        exercises: [
          { sentence: "The whale is very ______ . (🐋)", answer: "big", accepted: ["big", "Big", "giant"] },
          { sentence: "The clownfish is ______ . (🐠)", answer: "little", accepted: ["little", "small", "Little"] },
          { sentence: "The ocean is deep ______ . (🔵)", answer: "blue", accepted: ["blue", "Blue"] },
          { sentence: "The dolphin is very ______ . (😊)", answer: "friendly", accepted: ["friendly", "smart", "happy"] },
          { sentence: "The octopus has eight ______ . (🐙)", answer: "arms", accepted: ["arms", "tentacles"] }
        ]
      },
      {
        id: "u13_w6",
        title: "My Ocean Discovery",
        desc: "Write your ocean expedition diary entry.",
        exercises: [
          { sentence: "I went on a boat in the ______ . (ocean / pool)", answer: "ocean", accepted: ["ocean", "sea"] },
          { sentence: "I saw ______ (2) dolphins jumping.", answer: "two", accepted: ["two", "2"] },
          { sentence: "I found a pretty pink ______ . (🐚)", answer: "shell", accepted: ["shell", "sea shell"] },
          { sentence: "The water was warm and ______ . (blue / black)", answer: "blue", accepted: ["blue", "clear"] },
          { sentence: "The ocean is full of ______ !", answer: "wonders", accepted: ["wonders", "animals", "fish", "life"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u13_s1",
        title: "Name the Ocean Animals",
        desc: "Pronounce marine creature names clearly.",
        exercises: [
          { prompt: "Say: Dolphin", target: "dolphin", audio: "Dolphin", icon: "🐬" },
          { prompt: "Say: Whale", target: "whale", audio: "Whale", icon: "🐋" },
          { prompt: "Say: Fish", target: "fish", audio: "Fish", icon: "🐠" },
          { prompt: "Say: Octopus", target: "octopus", audio: "Octopus", icon: "🐙" },
          { prompt: "Say: Shark", target: "shark", audio: "Shark", icon: "🦈" }
        ]
      },
      {
        id: "u13_s2",
        title: "Describe the Dolphin",
        desc: "Speak about dolphin actions and beauty.",
        exercises: [
          { prompt: "Say: 'The dolphin is gray and sleek.'", target: "the dolphin is gray and sleek" },
          { prompt: "Say: 'It jumps above the water.'", target: "it jumps above the water" },
          { prompt: "Say: 'Dolphins are very friendly.'", target: "dolphins are very friendly" },
          { prompt: "Say: 'They swim with their friends.'", target: "they swim with their friends" },
          { prompt: "Say: 'I love watching dolphins!'", target: "i love watching dolphins" }
        ]
      },
      {
        id: "u13_s3",
        title: "Big or Little?",
        desc: "Compare sizes of ocean animals aloud.",
        exercises: [
          { prompt: "Say: 'The whale is big.'", target: "the whale is big" },
          { prompt: "Say: 'The fish is little.'", target: "the fish is little" },
          { prompt: "Say: 'The ocean is big.'", target: "the ocean is big" },
          { prompt: "Say: 'The shell is little.'", target: "the shell is little" },
          { prompt: "Say: 'The boat floats on water.'", target: "the boat floats on water" }
        ]
      },
      {
        id: "u13_s4",
        title: "Where Is the Fish?",
        desc: "State location using prepositions aloud.",
        exercises: [
          { prompt: "Say: 'The fish is in the ocean.'", target: "the fish is in the ocean" },
          { prompt: "Say: 'The boat is on the water.'", target: "the boat is on the water" },
          { prompt: "Say: 'The crab is under the rock.'", target: "the crab is under the rock" },
          { prompt: "Say: 'The shell is on the sand.'", target: "the shell is on the sand" },
          { prompt: "Say: 'The octopus is in the cave.'", target: "the octopus is in the cave" }
        ]
      },
      {
        id: "u13_s5",
        title: "Count the Sea Animals",
        desc: "Count ocean creatures aloud from 1 to 5.",
        exercises: [
          { prompt: "Say: 'One big whale'", target: "one big whale" },
          { prompt: "Say: 'Two jumping dolphins'", target: "two jumping dolphins" },
          { prompt: "Say: 'Three pink shells'", target: "three pink shells" },
          { prompt: "Say: 'Four yellow fish'", target: "four yellow fish" },
          { prompt: "Say: 'Five coral branches'", target: "five coral branches" }
        ]
      },
      {
        id: "u13_s6",
        title: "My Ocean Presentation",
        desc: "Deliver a 3-sentence presentation of the deep blue sea.",
        exercises: [
          { prompt: "Sentence 1: 'The ocean is vast and deep.'", target: "the ocean is vast and deep" },
          { prompt: "Sentence 2: 'Dolphins and whales swim in the sea.'", target: "dolphins and whales swim in the sea" },
          { prompt: "Sentence 3: 'Colorful fish hide in the coral.'", target: "colorful fish hide in the coral" },
          { prompt: "Sentence 4: 'We must keep our oceans clean.'", target: "we must keep our oceans clean" },
          { prompt: "Sentence 5: 'The sea is full of magical life!'", target: "the sea is full of magical life" }
        ]
      }
    ],

    videos: [
      {
        title: "A Sailor Went to Sea | British Council LearnEnglish Kids",
        videoId: "6f-Q2Xf6f34",
        embedUrl: "https://www.youtube-nocookie.com/embed/6f-Q2Xf6f34",
        thumbnail: "assets/toddlers_hd/toddlers_cont_house.png",
        description: "A sailor went to sea, sea, sea to see what he could see, see, see! Discover dolphins, whales and deep ocean wonders.",
        checkpoints: [
          { time: 15, question: "Where did the sailor go?", options: ["To the sea", "To the moon", "To the supermarket"], correct: 0 },
          { time: 35, question: "What is at the bottom of the deep blue sea?", options: ["Sea creatures and corals", "A kitchen stove", "A classroom desk"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Underwater Treasure Mission",
      story: "A chest of ancient golden coins was lost in the coral kingdom! Pilot the Bilikids Yellow Submarine through 12 levels of oceanic wonder, helping sea friends along the way.",
      levels: [
        { level: 1, title: "Find the Boat", mission: "Launch the exploration boat from the sandy harbor.", targetCount: 1, itemType: "boat", icon: "⛵" },
        { level: 2, title: "Discover the Ocean", mission: "Dive into the clear turquoise waters.", targetCount: 1, itemType: "dive", icon: "🌊" },
        { level: 3, title: "Find the Fish", mission: "Guide 5 clownfish safely through the sea anemone.", targetCount: 5, itemType: "fish", icon: "🐠" },
        { level: 4, title: "Meet the Dolphin", mission: "Do 3 synchronized flips with friendly dolphin Bili.", targetCount: 3, itemType: "dolphin", icon: "🐬" },
        { level: 5, title: "Discover the Jellyfish", mission: "Navigate gently past 4 glowing jellyfish without bumping.", targetCount: 4, itemType: "jellyfish", icon: "🪼" },
        { level: 6, title: "Find the Octopus", mission: "Untangle the octopus's 8 colorful ribbons.", targetCount: 8, itemType: "octopus", icon: "🐙" },
        { level: 7, title: "Identify the Shark", mission: "Observe the sleek shark swimming peacefully in the deep.", targetCount: 1, itemType: "shark", icon: "🦈" },
        { level: 8, title: "Discover the Whale", mission: "Swim alongside the gentle giant blue whale.", targetCount: 1, itemType: "whale", icon: "🐋" },
        { level: 9, title: "Explore the Coral Cave", mission: "Light up the dark coral cave with submarine spotlights.", targetCount: 1, itemType: "cave", icon: "🪸" },
        { level: 10, title: "Find the Shells and Rocks", mission: "Collect 5 sparkling pearl shells from the seabed.", targetCount: 5, itemType: "shells", icon: "🐚" },
        { level: 11, title: "In, On or Under?", mission: "Solve 3 preposition puzzles to unlock the treasure vault.", targetCount: 3, itemType: "prepositions", icon: "🗝️" },
        { level: 12, title: "The Underwater Treasure Challenge", mission: "Open the treasure chest and share the pearls with ocean friends!", targetCount: 1, itemType: "chest", icon: "💎" }
      ]
    },

    finalChallenge: {
      title: "Ocean Master Explorer Quest",
      story: "Complete 10 deep sea challenges to earn your Deep Ocean Diver Trophy!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the dolphin?'", options: ["🐬", "🐋", "🐙"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'WHALE'", options: ["🐋", "🐠", "⛵"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: F _ S H", answer: "I" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'The whale is big'", target: "the whale is big" },
        { step: 5, type: "phonics", prompt: "Which word starts with /k/?", options: ["Coral", "Dolphin", "Fish"], correct: 0 },
        { step: 6, type: "location", prompt: "Where does the fish swim?", options: ["In the ocean 🌊", "In the sky ☁️"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count dolphins: 🐬 🐬 🐬", options: ["2", "3", "4"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: B O A T", answer: "BOAT" },
        { step: 9, type: "listening", prompt: "Listen: 'Collect the pretty shells!'", options: ["🐚", "😴", "🚗"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'The ocean is full of wonders!'", target: "the ocean is full of wonders" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 14: MY TOY BOX
  // ==========================================================================
  {
    id: 14,
    code: "unit_14",
    title: "My Toy Box",
    subtitle: "Toys, Hard & Soft, Locations & The /f/ Sound",
    icon: "🧸",
    themeColor: "#8b5cf6",
    themeLight: "#f5f3ff",
    structures: ["Present Simple", "Verb to be"],
    functions: ["Identifying and describing toys", "Identifying feelings", "Identifying colors", "Counting", "Describing location", "Identifying the /f/ sound"],
    vocabulary: ["Ball", "Bunny", "Car", "Chair", "Doll", "Family", "Fish", "Hard", "In", "Kite", "On", "Puzzle", "Rock", "Soft", "Teddy bear", "Toys", "Truck", "Under", "Colors", "Numbers 1–15"],
    phonicsFocus: "/f/ Sound: Fish, Family, Five, Fast, Feather",

    explore: [
      { name: "Teddy Bear", icon: "🧸", fact: "A soft, cuddly brown teddy bear for warm hugs at bedtime.", audio: "teddy", color: "Brown", shape: "Soft bear", count: 1 },
      { name: "Toy Box", icon: "📦", fact: "A colorful chest where all our favorite toys sleep neatly.", audio: "toy box", color: "Blue & Yellow", shape: "Chest", count: 1 },
      { name: "Doll", icon: "🪆", fact: "A smiling doll in a pretty dress with brushable hair.", audio: "doll", color: "Pink", shape: "Doll", count: 1 },
      { name: "Kite", icon: "🪁", fact: "A diamond kite that dances high in the windy sky.", audio: "kite", color: "Rainbow", shape: "Diamond", count: 1 },
      { name: "Puzzle", icon: "🧩", fact: "Interlocking wooden puzzle pieces that fit together to make a picture.", audio: "puzzle", color: "Multi-color", shape: "Piece", count: 4 },
      { name: "Toy Truck", icon: "🚛", fact: "A sturdy plastic truck that carries blocks and toy cargo.", audio: "truck", color: "Red", shape: "Hard toy", count: 1 },
      { name: "Soft Bunny", icon: "🐰", fact: "A fluffy plush bunny with long velvety ears.", audio: "bunny", color: "White", shape: "Soft plush", count: 1 },
      { name: "Hard Blocks", icon: "🧱", fact: "Smooth wooden building blocks for constructing tall castles.", audio: "blocks", color: "Primary colors", shape: "Cube", count: 6 }
    ],

    listening: [
      {
        id: "u14_l1",
        title: "Listen and Find the Toy",
        desc: "Listen to the toy name and select its picture.",
        exercises: [
          { audio: "Find the brown teddy bear", prompt: "Find: Teddy bear", options: [{ name: "Teddy bear", icon: "🧸" }, { name: "Doll", icon: "🪆" }, { name: "Car", icon: "🚗" }], correct: 0 },
          { audio: "Where is the pretty doll?", prompt: "Find: Doll", options: [{ name: "Puzzle", icon: "🧩" }, { name: "Doll", icon: "🪆" }, { name: "Truck", icon: "🚛" }], correct: 1 },
          { audio: "Find the flying kite", prompt: "Find: Kite", options: [{ name: "Bunny", icon: "🐰" }, { name: "Ball", icon: "⚽" }, { name: "Kite", icon: "🪁" }], correct: 2 },
          { audio: "Where is the puzzle piece?", prompt: "Find: Puzzle", options: [{ name: "Puzzle", icon: "🧩" }, { name: "Teddy bear", icon: "🧸" }, { name: "Doll", icon: "🪆" }], correct: 0 },
          { audio: "Find the fluffy plush bunny", prompt: "Find: Bunny", options: [{ name: "Truck", icon: "🚛" }, { name: "Bunny", icon: "🐰" }, { name: "Kite", icon: "🪁" }], correct: 1 }
        ]
      },
      {
        id: "u14_l2",
        title: "What’s Inside the Toy Box?",
        desc: "Listen to the items discovered inside the toy chest.",
        exercises: [
          { audio: "Open the toy box! Inside is a soft teddy bear.", prompt: "What is inside?", options: [{ name: "Teddy bear", icon: "🧸" }, { name: "Soup", icon: "🥣" }, { name: "Hat", icon: "🎩" }], correct: 0 },
          { audio: "Inside the box, I see three wooden blocks.", prompt: "What is inside?", options: [{ name: "Shoes", icon: "👟" }, { name: "3 Blocks", icon: "🧱🧱🧱" }, { name: "Apple", icon: "🍎" }], correct: 1 },
          { audio: "Look! A red toy car is sleeping in the corner.", prompt: "What is inside?", options: [{ name: "Pencil", icon: "✏️" }, { name: "Book", icon: "📖" }, { name: "Red toy car", icon: "🚗" }], correct: 2 },
          { audio: "There is a rainbow puzzle inside the toy box.", prompt: "What is inside?", options: [{ name: "Rainbow puzzle", icon: "🧩🌈" }, { name: "Spoon", icon: "🥄" }, { name: "Glass", icon: "🥛" }], correct: 0 },
          { audio: "Inside is a plush white bunny with long ears.", prompt: "What is inside?", options: [{ name: "Toothbrush", icon: "🪥" }, { name: "White bunny", icon: "🐰" }, { name: "Bicycle", icon: "🚲" }], correct: 1 }
        ]
      },
      {
        id: "u14_l3",
        title: "Hard or Soft?",
        desc: "Listen to textural differences: HARD plastic/wood vs. SOFT plush/fabric.",
        exercises: [
          { audio: "The teddy bear is plush and SOFT to hug.", prompt: "Is the teddy bear hard or soft?", options: [{ name: "Soft 🧸 (Fluffy)", icon: "🧸" }, { name: "Hard 🧱 (Solid)", icon: "🧱" }], correct: 0 },
          { audio: "The wooden building block is solid and HARD.", prompt: "Is the block hard or soft?", options: [{ name: "Soft ☁️", icon: "☁️" }, { name: "Hard 🧱 (Solid)", icon: "🧱" }], correct: 1 },
          { audio: "A rock in the garden is very HARD.", prompt: "The rock is...", options: [{ name: "Hard 🪨", icon: "🪨" }, { name: "Soft", icon: "🐰" }], correct: 0 },
          { audio: "The bunny pillow is warm and SOFT.", prompt: "The pillow is...", options: [{ name: "Hard", icon: "🪨" }, { name: "Soft 🐰", icon: "🐰" }], correct: 1 },
          { audio: "The plastic toy truck is strong and HARD.", prompt: "The truck is...", options: [{ name: "Hard 🚛", icon: "🚛" }, { name: "Soft", icon: "🧸" }], correct: 0 }
        ]
      },
      {
        id: "u14_l4",
        title: "Listen and Put Away the Toys",
        desc: "Listen to cleanup instructions: Put the doll IN the box, car ON the shelf.",
        exercises: [
          { audio: "Put the teddy bear IN the toy box.", prompt: "Instruction: Bear IN box", options: [{ name: "Bear IN box", icon: "🧸📦 (Inside)" }, { name: "Bear ON chair", icon: "🪑" }, { name: "Bear on floor", icon: "⬇️" }], correct: 0 },
          { audio: "Place the red car ON the wooden shelf.", prompt: "Instruction: Car ON shelf", options: [{ name: "Car under bed", icon: "🛏️" }, { name: "Car ON shelf", icon: "🚗🪜 (On top)" }, { name: "Car in trash", icon: "🗑️" }], correct: 1 },
          { audio: "Put the doll UNDER the warm blanket.", prompt: "Instruction: Doll UNDER blanket", options: [{ name: "Doll in tree", icon: "🌳" }, { name: "Doll on table", icon: (typeof window !== "undefined" && window.BILIKIDS_ICONS ? window.BILIKIDS_ICONS.TABLE : "🪑") }, { name: "Doll UNDER blanket", icon: "🪆🛏️ (Under)" }], correct: 2 },
          { audio: "Put the puzzle pieces IN the cardboard box.", prompt: "Instruction: Puzzle IN box", options: [{ name: "Puzzle IN box", icon: "🧩📦 (Inside)" }, { name: "Puzzle on roof", icon: "🏠" }, { name: "Puzzle in water", icon: "💧" }], correct: 0 },
          { audio: "Place the kite ON the wall hook.", prompt: "Instruction: Kite ON hook", options: [{ name: "Kite under bed", icon: "🛏️" }, { name: "Kite ON hook", icon: "🪁🪝 (On wall)" }, { name: "Kite outside", icon: "🌧️" }], correct: 1 }
        ]
      },
      {
        id: "u14_l5",
        title: "Count the Toys",
        desc: "Count toys in the playroom up to 15.",
        exercises: [
          { audio: "I have two soft teddy bears.", prompt: "Count: 2 bears", options: [{ name: "1 Bear", icon: "🧸" }, { name: "2 Bears", icon: "🧸🧸" }, { name: "3 Bears", icon: "🧸🧸🧸" }], correct: 1 },
          { audio: "There are four colorful puzzle pieces.", prompt: "Count: 4 pieces", options: [{ name: "4 Pieces", icon: "🧩🧩🧩🧩" }, { name: "2 Pieces", icon: "🧩🧩" }, { name: "5 Pieces", icon: "🧩 5" }], correct: 0 },
          { audio: "Look at three plastic trucks lined up.", prompt: "Count: 3 trucks", options: [{ name: "2 Trucks", icon: "🚛🚛" }, { name: "4 Trucks", icon: "🚛🚛🚛🚛" }, { name: "3 Trucks", icon: "🚛🚛🚛" }], correct: 2 },
          { audio: "There is one flying diamond kite.", prompt: "Count: 1 kite", options: [{ name: "1 Kite", icon: "🪁" }, { name: "2 Kites", icon: "🪁🪁" }, { name: "3 Kites", icon: "🪁🪁🪁" }], correct: 0 },
          { audio: "Count five building blocks.", prompt: "Count: 5 blocks", options: [{ name: "4 Blocks", icon: "🧱🧱🧱🧱" }, { name: "5 Blocks", icon: "🧱🧱🧱🧱🧱" }, { name: "6 Blocks", icon: "🧱 6" }], correct: 1 }
        ]
      },
      {
        id: "u14_l6",
        title: "Toy Location Listening",
        desc: "Listen to where toys are hiding in the bedroom.",
        exercises: [
          { audio: "Where is my teddy bear? Look, it is ON the chair!", prompt: "Where is the bear?", options: ["ON the chair", "In the fridge", "Under the car"], correct: 0 },
          { audio: "Where did my toy truck go? It is UNDER the bed!", prompt: "Where is the truck?", options: ["On the roof", "UNDER the bed", "In the sink"], correct: 1 },
          { audio: "My puzzle is IN the blue toy box.", prompt: "Where is the puzzle?", options: ["Outside in rain", "IN the toy box", "Under the rug"], correct: 1 },
          { audio: "The doll is sitting ON the bedside table.", prompt: "Where is the doll?", options: ["ON the table", "In the oven", "Under the grass"], correct: 0 },
          { audio: "All my toys are safe IN my bedroom.", prompt: "Where are all toys?", options: ["At school", "IN my bedroom", "In the street"], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u14_r1",
        title: "Match Toys and Words",
        desc: "Read the toy word and select the matching object.",
        exercises: [
          { text: "TEDDY BEAR", prompt: "Read: TEDDY BEAR", options: [{ name: "Teddy bear", icon: "🧸" }, { name: "Doll", icon: "🪆" }, { name: "Puzzle", icon: "🧩" }], correct: 0 },
          { text: "DOLL", prompt: "Read: DOLL", options: [{ name: "Kite", icon: "🪁" }, { name: "Doll", icon: "🪆" }, { name: "Truck", icon: "🚛" }], correct: 1 },
          { text: "KITE", prompt: "Read: KITE", options: [{ name: "Bunny", icon: "🐰" }, { name: "Ball", icon: "⚽" }, { name: "Kite", icon: "🪁" }], correct: 2 },
          { text: "PUZZLE", prompt: "Read: PUZZLE", options: [{ name: "Puzzle", icon: "🧩" }, { name: "Teddy", icon: "🧸" }, { name: "Doll", icon: "🪆" }], correct: 0 },
          { text: "TRUCK", prompt: "Read: TRUCK", options: [{ name: "Kite", icon: "🪁" }, { name: "Truck", icon: "🚛" }, { name: "Bunny", icon: "🐰" }], correct: 1 }
        ]
      },
      {
        id: "u14_r2",
        title: "Read the Toy Inventory",
        desc: "Read the playroom toy checklist.",
        exercises: [
          { text: "CHECKLIST: 1. Teddy bear (🧸)  2. Ball (⚽)", prompt: "Which soft toy is listed?", options: ["Teddy bear", "Hammer", "Shoe"], correct: 0 },
          { text: "CHECKLIST: 1. Doll (🪆)  2. Wooden blocks (🧱)", prompt: "Which hard toys are listed?", options: ["Pillow", "Wooden blocks", "Blanket"], correct: 1 },
          { text: "CHECKLIST: 1. Rainbow kite (🪁)  2. Puzzle (🧩)", prompt: "What flying toy is listed?", options: ["Car", "Airplane", "Rainbow kite"], correct: 2 },
          { text: "CHECKLIST: 1. Plush bunny (🐰)  2. Toy box (📦)", prompt: "Where do we store toys?", options: ["Toy box", "In the pool", "Trash can"], correct: 0 },
          { text: "CHECKLIST: 1. Plastic truck (🚛)  2. Drum (🥁)", prompt: "What vehicle toy is listed?", options: ["Bicycle", "Plastic truck", "Boat"], correct: 1 }
        ]
      },
      {
        id: "u14_r3",
        title: "Complete Location Sentences",
        desc: "Choose between 'in', 'on', and 'under' for toys.",
        exercises: [
          { text: "The teddy bear is ______ the toy box. (🧸📦)", options: ["in", "on", "under"], correct: 0 },
          { text: "The doll sits ______ the chair. (🪆🪑)", options: ["in", "on", "under"], correct: 1 },
          { text: "The toy truck rolled ______ the bed. (🚛🛏️)", options: ["in", "on", "under"], correct: 2 },
          { text: "The puzzle pieces are ______ the table. (🧩)", options: ["in", "on", "under"], correct: 1 },
          { text: "The blocks are stored ______ the closet shelf.", options: ["on", "under", "in"], correct: 0 }
        ]
      },
      {
        id: "u14_r4",
        title: "Read the Toy Story",
        desc: "Read about Leo organizing his bedroom toys.",
        exercises: [
          { text: "Leo loves his brown teddy bear named Barnaby. Barnaby is very soft.", prompt: "What is the teddy bear's name?", options: ["Barnaby", "Bili", "Leo"], correct: 0 },
          { text: "Before dinner, Mommy says: 'Tidy up your toys, Leo!'", prompt: "What does Mommy ask Leo to do?", options: ["Go to sleep", "Tidy up your toys", "Watch TV"], correct: 1 },
          { text: "Leo puts his hard blocks into the blue bin and the puzzle on the desk.", prompt: "Where do the blocks go?", options: ["Under the rug", "Out the window", "Into the blue bin"], correct: 2 },
          { text: "He hugs Barnaby and sets him on his pillow. 'Good boy, Leo!'", prompt: "Where does Barnaby sleep?", options: ["On the pillow", "In the kitchen", "Under the floor"], correct: 0 },
          { text: "The bedroom is clean and tidy. Time for a delicious dinner!", prompt: "How does the bedroom look?", options: ["Messy", "Clean and tidy", "Dark"], correct: 1 }
        ]
      },
      {
        id: "u14_r5",
        title: "Find the /f/ Sound",
        desc: "Identify words starting with the sound /f/ (Fish, Family, Five, Fast, Feather).",
        exercises: [
          { prompt: "Which pet word starts with /f/?", options: [{ name: "Fish", icon: "🐟" }, { name: "Cat", icon: "🐱" }, { name: "Dog", icon: "🐶" }], correct: 0 },
          { prompt: "Which people group starts with /f/?", options: [{ name: "School", icon: "🏫" }, { name: "Family", icon: "👨‍👩‍👧" }, { name: "Park", icon: "🏞️" }], correct: 1 },
          { prompt: "Which number starts with /f/?", options: [{ name: "Two", icon: "2️⃣" }, { name: "Three", icon: "3️⃣" }, { name: "Five", icon: "5️⃣" }], correct: 2 },
          { prompt: "Which speed word starts with /f/?", options: [{ name: "Fast", icon: "⚡" }, { name: "Slow", icon: "🐢" }, { name: "Big", icon: "🐘" }], correct: 0 },
          { prompt: "Which soft bird part starts with /f/?", options: [{ name: "Beak", icon: "🦜" }, { name: "Feather", icon: "🪶" }, { name: "Egg", icon: "🥚" }], correct: 1 }
        ]
      },
      {
        id: "u14_r6",
        title: "Read and Classify the Toys",
        desc: "Classify toys into SOFT toys and HARD toys.",
        exercises: [
          { text: "TEDDY BEAR is ______ . (🧸)", prompt: "Hard or Soft?", options: ["Soft", "Hard"], correct: 0 },
          { text: "WOODEN BLOCK is ______ . (🧱)", prompt: "Hard or Soft?", options: ["Soft", "Hard"], correct: 1 },
          { text: "PLUSH BUNNY is ______ . (🐰)", prompt: "Hard or Soft?", options: ["Soft", "Hard"], correct: 0 },
          { text: "PLASTIC TRUCK is ______ . (🚛)", prompt: "Hard or Soft?", options: ["Soft", "Hard"], correct: 1 },
          { text: "COTTON PILLOW is ______ . (☁️)", prompt: "Hard or Soft?", options: ["Soft", "Hard"], correct: 0 }
        ]
      }
    ],

    writing: [
      {
        id: "u14_w1",
        title: "Build Toy Words",
        desc: "Unscramble the letters to spell toy names.",
        exercises: [
          { target: "DOLL", letters: ["L", "D", "O", "L"], icon: "🪆", hint: "Toy with dress and hair" },
          { target: "KITE", letters: ["T", "K", "I", "E"], icon: "🪁", hint: "Flies in the wind" },
          { target: "BALL", letters: ["L", "B", "A", "L"], icon: "⚽", hint: "Round and bouncy" },
          { target: "BEAR", letters: ["R", "B", "E", "A"], icon: "🧸", hint: "Teddy bear" },
          { target: "TOYS", letters: ["S", "T", "O", "Y"], icon: "🧸", hint: "Fun playthings" }
        ]
      },
      {
        id: "u14_w2",
        title: "Missing Letters",
        desc: "Fill in the missing letter for toy words.",
        exercises: [
          { target: "D_LL", missing: "O", full: "DOLL", options: ["O", "A", "E"], icon: "🪆" },
          { target: "K_TE", missing: "I", full: "KITE", options: ["I", "E", "A"], icon: "🪁" },
          { target: "B_AR", missing: "E", full: "BEAR", options: ["E", "I", "O"], icon: "🧸" },
          { target: "T_YS", missing: "O", full: "TOYS", options: ["O", "A", "U"], icon: "🧸" },
          { target: "P_ZZLE", missing: "U", full: "PUZZLE", options: ["U", "O", "A"], icon: "🧩" }
        ]
      },
      {
        id: "u14_w3",
        title: "Label the Toy Box",
        desc: "Type or select the label for each playroom item.",
        exercises: [
          { prompt: "Label: 🧸", answer: "teddy bear", accepted: ["teddy bear", "bear", "Teddy bear"] },
          { prompt: "Label: 🪆", answer: "doll", accepted: ["doll", "Doll"] },
          { prompt: "Label: 🪁", answer: "kite", accepted: ["kite", "Kite"] },
          { prompt: "Label: 🧩", answer: "puzzle", accepted: ["puzzle", "Puzzle"] },
          { prompt: "Label: 📦", answer: "toy box", accepted: ["toy box", "box", "Toy box"] }
        ]
      },
      {
        id: "u14_w4",
        title: "Complete In/On/Under",
        desc: "Write 'in', 'on', or 'under' to complete sentences.",
        exercises: [
          { sentence: "The bear is ______ the toy box. (🧸📦)", answer: "in", accepted: ["in", "In"] },
          { sentence: "The doll sits ______ the chair. (🪆🪑)", answer: "on", accepted: ["on", "On"] },
          { sentence: "The car rolled ______ the bed. (🚗🛏️)", answer: "under", accepted: ["under", "Under"] },
          { sentence: "The kite rests ______ the shelf. (🪁)", answer: "on", accepted: ["on", "On"] },
          { sentence: "Toys belong ______ the room.", answer: "in", accepted: ["in", "In"] }
        ]
      },
      {
        id: "u14_w5",
        title: "Describe Hard and Soft Toys",
        desc: "Write 'hard' or 'soft' to describe the toys.",
        exercises: [
          { sentence: "My teddy bear is very ______ . (🧸)", answer: "soft", accepted: ["soft", "Soft"] },
          { sentence: "The wooden block is ______ . (🧱)", answer: "hard", accepted: ["hard", "Hard"] },
          { sentence: "The plush bunny is ______ . (🐰)", answer: "soft", accepted: ["soft", "Soft"] },
          { sentence: "The metal car is ______ . (🚗)", answer: "hard", accepted: ["hard", "Hard"] },
          { sentence: "The rock in garden is ______ . (🪨)", answer: "hard", accepted: ["hard", "Hard"] }
        ]
      },
      {
        id: "u14_w6",
        title: "My Favorite Toy Description",
        desc: "Write about your absolute favorite toy.",
        exercises: [
          { sentence: "My favorite toy is my ______ . (teddy bear / doll / truck)", answer: "teddy bear", accepted: ["teddy bear", "doll", "truck", "car", "kite", "puzzle"] },
          { sentence: "It is very ______ to cuddle. (soft / hard)", answer: "soft", accepted: ["soft", "Soft"] },
          { sentence: "Its color is ______ . (brown / pink / blue)", answer: "brown", accepted: ["brown", "pink", "blue", "red", "yellow"] },
          { sentence: "I sleep with it ______ my bed. (in / on)", answer: "in", accepted: ["in", "on"] },
          { sentence: "I love playing with my ______ every day!", answer: "toys", accepted: ["toys", "toy", "friends"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u14_s1",
        title: "Name the Toys",
        desc: "Pronounce toy names clearly.",
        exercises: [
          { prompt: "Say: Teddy bear", target: "teddy bear", audio: "Teddy bear", icon: "🧸" },
          { prompt: "Say: Doll", target: "doll", audio: "Doll", icon: "🪆" },
          { prompt: "Say: Kite", target: "kite", audio: "Kite", icon: "🪁" },
          { prompt: "Say: Puzzle", target: "puzzle", audio: "Puzzle", icon: "🧩" },
          { prompt: "Say: Toy box", target: "toy box", audio: "Toy box", icon: "📦" }
        ]
      },
      {
        id: "u14_s2",
        title: "Describe My Teddy Bear",
        desc: "Speak about your teddy bear aloud.",
        exercises: [
          { prompt: "Say: 'This is my brown teddy bear.'", target: "this is my brown teddy bear" },
          { prompt: "Say: 'It is soft and fluffy.'", target: "it is soft and fluffy" },
          { prompt: "Say: 'I give it warm hugs.'", target: "i give it warm hugs" },
          { prompt: "Say: 'It sleeps on my pillow.'", target: "it sleeps on my pillow" },
          { prompt: "Say: 'Barnaby is my best toy friend.'", target: "barnaby is my best toy friend" }
        ]
      },
      {
        id: "u14_s3",
        title: "Hard or Soft?",
        desc: "Describe textures aloud: 'It is hard' or 'It is soft'.",
        exercises: [
          { prompt: "Say: 'The teddy bear is soft.'", target: "the teddy bear is soft" },
          { prompt: "Say: 'The wooden block is hard.'", target: "the wooden block is hard" },
          { prompt: "Say: 'The bunny pillow is soft.'", target: "the bunny pillow is soft" },
          { prompt: "Say: 'The rock is hard.'", target: "the rock is hard" },
          { prompt: "Say: 'The doll dress is soft.'", target: "the doll dress is soft" }
        ]
      },
      {
        id: "u14_s4",
        title: "Where Is the Toy?",
        desc: "State toy locations using prepositions aloud.",
        exercises: [
          { prompt: "Say: 'The bear is in the toy box.'", target: "the bear is in the toy box" },
          { prompt: "Say: 'The doll is on the chair.'", target: "the doll is on the chair" },
          { prompt: "Say: 'The car is under the bed.'", target: "the car is under the bed" },
          { prompt: "Say: 'The kite is on the shelf.'", target: "the kite is on the shelf" },
          { prompt: "Say: 'The puzzle is on the desk.'", target: "the puzzle is on the desk" }
        ]
      },
      {
        id: "u14_s5",
        title: "Count the Toys",
        desc: "Count toys aloud from 1 to 5.",
        exercises: [
          { prompt: "Say: 'One teddy bear'", target: "one teddy bear" },
          { prompt: "Say: 'Two pretty dolls'", target: "two pretty dolls" },
          { prompt: "Say: 'Three toy trucks'", target: "three toy trucks" },
          { prompt: "Say: 'Four puzzle pieces'", target: "four puzzle pieces" },
          { prompt: "Say: 'Five wooden blocks'", target: "five wooden blocks" }
        ]
      },
      {
        id: "u14_s6",
        title: "My Favorite Toy Presentation",
        desc: "Deliver a 3-sentence presentation about your favorite toy.",
        exercises: [
          { prompt: "Sentence 1: 'I have many fun toys in my room.'", target: "i have many fun toys in my room" },
          { prompt: "Sentence 2: 'My favorite toy is my soft teddy bear.'", target: "my favorite toy is my soft teddy bear" },
          { prompt: "Sentence 3: 'I keep my toys neat in my toy box.'", target: "i keep my toys neat in my toy box" },
          { prompt: "Sentence 4: 'I share my toys with friends.'", target: "i share my toys with friends" },
          { prompt: "Sentence 5: 'Playtime is my favorite time!'", target: "playtime is my favorite time" }
        ]
      }
    ],

    videos: [
      {
        title: "Toys Song | British Council LearnEnglish Kids",
        videoId: "eb53_Kdc1do",
        embedUrl: "https://www.youtube-nocookie.com/embed/eb53_Kdc1do",
        thumbnail: "assets/toddlers_hd/toddlers_cont_house.png",
        description: "Teddy bear, doll, kite, ball and puzzle! Sing along as children play and put their toys away neatly in the toy box.",
        checkpoints: [
          { time: 14, question: "What toy is soft and brown?", options: ["Teddy bear", "Iron rock", "Scissors"], correct: 0 },
          { time: 32, question: "Where do toys go after playtime?", options: ["In the toy box", "In the trash", "On the stove"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Lost Toy Box",
      story: "Playtime was so fun that toys are scattered all over the bedroom! Help Luna and Leo find every missing toy, sort them by hard and soft, and organize the toy box across 12 levels.",
      levels: [
        { level: 1, title: "Find the Ball", mission: "Find the bouncy soccer ball behind the closet door.", targetCount: 1, itemType: "ball", icon: "⚽" },
        { level: 2, title: "Discover the Bunny", mission: "Rescue the fluffy white bunny from beneath the chair.", targetCount: 1, itemType: "bunny", icon: "🐰" },
        { level: 3, title: "Find the Car", mission: "Retrieve the red toy car from under the bed.", targetCount: 1, itemType: "car", icon: "🚗" },
        { level: 4, title: "Rescue the Doll", mission: "Gently pick up the pretty doll from the windowsill.", targetCount: 1, itemType: "doll", icon: "🪆" },
        { level: 5, title: "Discover the Fish", mission: "Find the wind-up swimming fish toy.", targetCount: 1, itemType: "fish", icon: "🐠" },
        { level: 6, title: "Find the Kite", mission: "Untangle the rainbow diamond kite from the coat rack.", targetCount: 1, itemType: "kite", icon: "🪁" },
        { level: 7, title: "Complete the Puzzle", mission: "Assemble 4 puzzle pieces onto the wooden board.", targetCount: 4, itemType: "puzzle", icon: "🧩" },
        { level: 8, title: "Find the Teddy Bear", mission: "Locate Barnaby the teddy bear tucked into the blanket.", targetCount: 1, itemType: "teddy", icon: "🧸" },
        { level: 9, title: "Hard or Soft?", mission: "Sort toys into Soft Plush Basket and Hard Plastic Crate.", targetCount: 4, itemType: "textures", icon: "📦" },
        { level: 10, title: "In, On or Under?", mission: "Place items: Teddy IN box, Doll ON chair, Truck ON shelf.", targetCount: 3, itemType: "locations", icon: "📍" },
        { level: 11, title: "Find the /f/ Sound", mission: "Collect /f/ items: Fish, Family photo, Feather, Five blocks.", targetCount: 4, itemType: "phonics", icon: "🐟" },
        { level: 12, title: "Complete the Toy Box Mission", mission: "Close the toy box lid and celebrate a sparkling clean bedroom!", targetCount: 1, itemType: "tidy", icon: "✨" }
      ]
    },

    finalChallenge: {
      title: "Toy Box Master Quest",
      story: "Complete 10 interactive toy challenges to earn your Master Room Organizer Trophy!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the teddy bear?'", options: ["🧸", "🪆", "🚗"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'DOLL'", options: ["🪆", "🪁", "🧩"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: K _ T E", answer: "I" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'My teddy bear is soft'", target: "my teddy bear is soft" },
        { step: 5, type: "phonics", prompt: "Which word starts with /f/?", options: ["Fish", "Teddy", "Doll"], correct: 0 },
        { step: 6, type: "texture", prompt: "Is a wooden block hard or soft?", options: ["Hard 🧱", "Soft ☁️"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count bears: 🧸 🧸", options: ["1", "2", "3"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: B A L L", answer: "BALL" },
        { step: 9, type: "listening", prompt: "Listen: 'Put toys in the toy box!'", options: ["📦🧸", "😴", "🚗"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'My bedroom is clean and tidy!'", target: "my bedroom is clean and tidy" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 15: BEING HELPFUL
  // ==========================================================================
  {
    id: 15,
    code: "unit_15",
    title: "Being Helpful",
    subtitle: "Kindness, House Chores, Can/Can't & /f/ Review",
    icon: "🤝",
    themeColor: "#059669",
    themeLight: "#ecfdf5",
    structures: ["Present Simple", "Verb to be", "This is/These are", "Can"],
    functions: ["Identifying objects", "Offering help", "Identifying helping actions", "Counting", "Identifying colors", "Reviewing the /f/ sound"],
    vocabulary: ["Ball", "Bed", "Blocks", "Books", "Car", "Dishes", "Doll", "Fish", "Flower", "Paintbrush", "Pencil", "Pick up", "Plant", "Shelf", "Sweep", "Toy", "Toy box", "Trash", "Trash can", "Wash", "Water", "Watering can", "Colors", "Numbers 1–15"],
    phonicsFocus: "/f/ Review: Floor, Flower, Friend, Fast, Feed",

    explore: [
      { name: "Sweep the Floor", icon: "🧹", fact: "Using a broom to sweep crumbs and dust neatly into the dustpan.", audio: "sweep", color: "Brown", shape: "Broom", count: 1 },
      { name: "Wash Dishes", icon: "🧼🍽️", fact: "Washing plates and cups with warm water and foamy bubbles.", audio: "wash", color: "White", shape: "Plate", count: 3 },
      { name: "Water Plants", icon: "🚿🪴", fact: "Sprinkling refreshing water to keep household flowers green and blooming.", audio: "water", color: "Green", shape: "Plant", count: 2 },
      { name: "Pick up Toys", icon: "🧸📦", fact: "Picking up toys from the rug and placing them into the toy box.", audio: "pick up", color: "Blue", shape: "Action", count: 4 },
      { name: "Make the Bed", icon: "🛏️✨", fact: "Pulling up blankets and fluffing pillows neatly after waking up.", audio: "bed", color: "Yellow", shape: "Bed", count: 1 },
      { name: "Throw in Trash Can", icon: "🗑️", fact: "Putting scrap paper and fruit peels into the trash can.", audio: "trash", color: "Grey", shape: "Can", count: 1 },
      { name: "Organize Books", icon: "📚", fact: "Arranging storybooks neatly on the wooden bookshelf.", audio: "books", color: "Multi-color", shape: "Bookshelf", count: 5 },
      { name: "Feed the Fish", icon: "🐟🥫", fact: "Pinching tiny fish flakes into the aquarium for hungry pet fish.", audio: "feed", color: "Blue & Gold", shape: "Aquarium", count: 1 }
    ],

    listening: [
      {
        id: "u15_l1",
        title: "Listen and Help",
        desc: "Listen to who needs help at home and offer the right assistance.",
        exercises: [
          { audio: "Mommy says: 'Can someone help wash the breakfast plates?'", prompt: "Offer help: Wash dishes", options: [{ name: "Wash dishes", icon: "🧼🍽️" }, { name: "Sleep on sofa", icon: "😴" }, { name: "Play video game", icon: "🎮" }], correct: 0 },
          { audio: "Daddy says: 'The floor has cookie crumbs. Can someone sweep?'", prompt: "Offer help: Sweep floor", options: [{ name: "Throw more crumbs", icon: "🍪" }, { name: "Sweep floor", icon: "🧹✨" }, { name: "Eat dinner", icon: "🍽️" }], correct: 1 },
          { audio: "Teacher says: 'Please pick up the blocks from the floor.'", prompt: "Offer help: Pick up blocks", options: [{ name: "Kick blocks", icon: "🦶" }, { name: "Run away", icon: "🏃" }, { name: "Pick up blocks", icon: "🧱📦" }], correct: 2 },
          { audio: "Grandma says: 'The garden flowers are thirsty.'", prompt: "Offer help: Water flowers", options: [{ name: "Water flowers", icon: "🚿🌸" }, { name: "Pick flowers", icon: "🥀" }, { name: "Watch TV", icon: "📺" }], correct: 0 },
          { audio: "Baby brother's toys are everywhere in the hallway.", prompt: "Offer help: Tidy toys", options: [{ name: "Step on toys", icon: "🦶" }, { name: "Tidy toys into box", icon: "🧸📦" }, { name: "Cry", icon: "😢" }], correct: 1 }
        ]
      },
      {
        id: "u15_l2",
        title: "Find the Object",
        desc: "Listen to the household tool named and select its picture.",
        exercises: [
          { audio: "Where is the cleaning broom?", prompt: "Find: Broom", options: [{ name: "Broom", icon: "🧹" }, { name: "Trash can", icon: "🗑️" }, { name: "Bed", icon: "🛏️" }], correct: 0 },
          { audio: "Find the blue trash can", prompt: "Find: Trash can", options: [{ name: "Dishes", icon: "🍽️" }, { name: "Trash can", icon: "🗑️" }, { name: "Broom", icon: "🧹" }], correct: 1 },
          { audio: "Where is the watering can?", prompt: "Find: Watering can", options: [{ name: "Toy box", icon: "📦" }, { name: "Bed", icon: "🛏️" }, { name: "Watering can", icon: "🚿" }], correct: 2 },
          { audio: "Find the stack of clean dishes", prompt: "Find: Dishes", options: [{ name: "Dishes", icon: "🍽️" }, { name: "Pencil", icon: "✏️" }, { name: "Paintbrush", icon: "🖌️" }], correct: 0 },
          { audio: "Where is the cozy made bed?", prompt: "Find: Bed", options: [{ name: "Shelf", icon: "🪜" }, { name: "Bed", icon: "🛏️" }, { name: "Trash can", icon: "🗑️" }], correct: 1 }
        ]
      },
      {
        id: "u15_l3",
        title: "Follow the Cleaning Instructions",
        desc: "Listen and execute home chore sequences.",
        exercises: [
          { audio: "Pick up the scrap paper and throw it in the trash can.", prompt: "Action: Paper in trash", options: [{ name: "Paper in trash", icon: "📄➡️🗑️" }, { name: "Leave on rug", icon: "📄⬇️" }, { name: "Eat paper", icon: "😋" }], correct: 0 },
          { audio: "Take the sponge and wash the white cup with bubbles.", prompt: "Action: Wash cup", options: [{ name: "Drop cup", icon: "💥" }, { name: "Wash with bubbles", icon: "☕🧼" }, { name: "Put in pocket", icon: "👖" }], correct: 1 },
          { audio: "Pull up your soft blanket and fluff your pillow.", prompt: "Action: Make bed", options: [{ name: "Jump on bed", icon: "🦘" }, { name: "Mess blankets", icon: "🌪️" }, { name: "Make bed neatly", icon: "🛏️✨" }], correct: 2 },
          { audio: "Put all the paintbrushes into the pencil pot.", prompt: "Action: Organize brushes", options: [{ name: "Brushes in pot", icon: "🖌️✏️🏺" }, { name: "Paint on wall", icon: "🎨" }, { name: "Throw on floor", icon: "⬇️" }], correct: 0 },
          { audio: "Sprinkle water on the small green houseplant.", prompt: "Action: Water plant", options: [{ name: "Break plant", icon: "🥀" }, { name: "Water plant", icon: "🪴💧" }, { name: "Put in dark", icon: "🌑" }], correct: 1 }
        ]
      },
      {
        id: "u15_l4",
        title: "Listen and Organize",
        desc: "Organize items: Books on shelf, clothes in closet, trash in bin.",
        exercises: [
          { audio: "Books belong on the bookshelf.", prompt: "Where do books go?", options: [{ name: "On bookshelf", icon: "📚🪜" }, { name: "In trash can", icon: "🗑️" }, { name: "Under the rug", icon: "⬇️" }], correct: 0 },
          { audio: "Garbage belongs in the trash can.", prompt: "Where does trash go?", options: [{ name: "On the bed", icon: "🛏️" }, { name: "In trash can", icon: "🗑️" }, { name: "In toy box", icon: "📦" }], correct: 1 },
          { audio: "Toys belong in the toy box.", prompt: "Where do toys go?", options: [{ name: "In the sink", icon: "🚰" }, { name: "On the stove", icon: "🍳" }, { name: "In toy box", icon: "🧸📦" }], correct: 2 },
          { audio: "Clean dishes belong in the kitchen cupboard.", prompt: "Where do dishes go?", options: [{ name: "Kitchen cupboard", icon: "🍽️🗄️" }, { name: "Under the sofa", icon: "🛋️" }, { name: "Outside in yard", icon: "🌳" }], correct: 0 },
          { audio: "Pencils belong in the pencil case.", prompt: "Where do pencils go?", options: [{ name: "In water cup", icon: "🥛" }, { name: "In pencil case", icon: "✏️👝" }, { name: "On the floor", icon: "⬇️" }], correct: 1 }
        ]
      },
      {
        id: "u15_l5",
        title: "Count the Objects",
        desc: "Count dishes, books, and flowers up to 15.",
        exercises: [
          { audio: "I washed three white plates.", prompt: "Count: 3 plates", options: [{ name: "2 Plates", icon: "🍽️🍽️" }, { name: "3 Plates", icon: "🍽️🍽️🍽️" }, { name: "4 Plates", icon: "🍽️🍽️🍽️🍽️" }], correct: 1 },
          { audio: "There are five storybooks on the shelf.", prompt: "Count: 5 books", options: [{ name: "5 Books", icon: "📚 5" }, { name: "3 Books", icon: "📚 3" }, { name: "6 Books", icon: "📚 6" }], correct: 0 },
          { audio: "Four potted plants are watered and fresh.", prompt: "Count: 4 plants", options: [{ name: "2 Plants", icon: "🪴🪴" }, { name: "3 Plants", icon: "🪴🪴🪴" }, { name: "4 Plants", icon: "🪴🪴🪴🪴" }], correct: 2 },
          { audio: "There is one clean dustpan and broom.", prompt: "Count: 1 broom", options: [{ name: "1 Broom", icon: "🧹" }, { name: "2 Brooms", icon: "🧹🧹" }, { name: "3 Brooms", icon: "🧹🧹🧹" }], correct: 0 },
          { audio: "Count six colorful building blocks put away.", prompt: "Count: 6 blocks", options: [{ name: "5 Blocks", icon: "🧱 5" }, { name: "6 Blocks", icon: "🧱 6" }, { name: "4 Blocks", icon: "🧱 4" }], correct: 1 }
        ]
      },
      {
        id: "u15_l6",
        title: "Helping Actions Listening",
        desc: "Listen to children offering help with 'I can help!'",
        exercises: [
          { audio: "Leo says: 'Mommy, I can help wash the dishes!'", prompt: "What can Leo do?", options: ["Wash dishes", "Drive a car", "Go to sleep"], correct: 0 },
          { audio: "Luna says: 'Daddy, I can sweep the kitchen floor!'", prompt: "What can Luna do?", options: ["Paint the wall", "Sweep the kitchen floor", "Fly a kite"], correct: 1 },
          { audio: "Bili says: 'I can water all the thirsty flowers in the garden!'", prompt: "What can Bili do?", options: ["Eat all cookies", "Water flowers", "Sleep all day"], correct: 1 },
          { audio: "The children say: 'We can tidy up all our toys together!'", prompt: "What can they do together?", options: ["Tidy up toys", "Break windows", "Cry"], correct: 0 },
          { audio: "Mommy smiles: 'Thank you, my little helpful heroes!'", prompt: "What does Mommy call the children?", options: ["Little helpful heroes", "Angry monsters", "Strangers"], correct: 0 }
        ]
      }
    ],

    reading: [
      {
        id: "u15_r1",
        title: "Match Objects and Actions",
        desc: "Read the chore action and match to the correct tool.",
        exercises: [
          { text: "SWEEP", prompt: "Read: SWEEP", options: [{ name: "Broom", icon: "🧹" }, { name: "Watering can", icon: "🚿" }, { name: "Book", icon: "📖" }], correct: 0 },
          { text: "WASH", prompt: "Read: WASH", options: [{ name: "Pencil", icon: "✏️" }, { name: "Soap & Dishes", icon: "🧼🍽️" }, { name: "Broom", icon: "🧹" }], correct: 1 },
          { text: "WATER", prompt: "Read: WATER", options: [{ name: "Bed", icon: "🛏️" }, { name: "Trash can", icon: "🗑️" }, { name: "Watering can", icon: "🚿" }], correct: 2 },
          { text: "PICK UP", prompt: "Read: PICK UP", options: [{ name: "Pick up toys", icon: "🧸📦" }, { name: "Sleep", icon: "😴" }, { name: "Eat", icon: "🥪" }], correct: 0 },
          { text: "MAKE BED", prompt: "Read: MAKE BED", options: [{ name: "Dishes", icon: "🍽️" }, { name: "Neat bed", icon: "🛏️✨" }, { name: "Broom", icon: "🧹" }], correct: 1 }
        ]
      },
      {
        id: "u15_r2",
        title: "Read the Helping Instructions",
        desc: "Read household chore guidelines.",
        exercises: [
          { text: "HELPFUL RULE 1: Throw trash IN the trash can.", prompt: "Where does trash go?", options: ["Trash can", "On the bed", "Under sofa"], correct: 0 },
          { text: "HELPFUL RULE 2: Put books ON the bookshelf.", prompt: "Where do books go?", options: ["In the pool", "On bookshelf", "In the fridge"], correct: 1 },
          { text: "HELPFUL RULE 3: Water plants with gentle water drops.", prompt: "How do you water plants?", options: ["With milk", "With paint", "With gentle water"], correct: 2 },
          { text: "HELPFUL RULE 4: Wash your hands after helping.", prompt: "What do you wash?", options: ["Your hands", "Your shoes", "The wall"], correct: 0 },
          { text: "HELPFUL RULE 5: Say 'Thank you' and 'You are welcome.'", prompt: "What polite words do you say?", options: ["Goodbye", "Thank you & You're welcome", "No"], correct: 1 }
        ]
      },
      {
        id: "u15_r3",
        title: "Complete Can Sentences",
        desc: "Complete sentences using 'can' for capabilities.",
        exercises: [
          { text: "I ______ sweep the floor with the broom. (🧹)", options: ["can", "cannot"], correct: 0 },
          { text: "I ______ wash the small plastic cups. (🧼)", options: ["can", "cannot"], correct: 0 },
          { text: "I ______ pick up my teddy bear and blocks. (🧸)", options: ["can", "cannot"], correct: 0 },
          { text: "I ______ water the little potted plant. (🪴)", options: ["can", "cannot"], correct: 0 },
          { text: "We ______ make our home clean and happy!", options: ["can", "cannot"], correct: 0 }
        ]
      },
      {
        id: "u15_r4",
        title: "Read the Helpful Story",
        desc: "Read the story of Team Bilikids' Saturday cleanup.",
        exercises: [
          { text: "Saturday is Family Cleanup Day! Leo puts on his apron. 'I can wash the bowls!'", prompt: "What does Leo wash?", options: ["The bowls", "The car", "The cat"], correct: 0 },
          { text: "Luna takes the broom. She sweeps the hallway until the floor shines.", prompt: "What does Luna sweep?", options: ["The ceiling", "The hallway floor", "The garden tree"], correct: 1 },
          { text: "Bili carries the watering can and gives water to four thirsty houseplants.", prompt: "How many plants does Bili water?", options: ["One", "Ten", "Four houseplants"], correct: 2 },
          { text: "They make all the beds and put books neatly onto the wooden shelf.", prompt: "Where do books go?", options: ["Onto the shelf", "In the trash", "Under the bed"], correct: 0 },
          { text: "Mommy baked warm blueberry muffins to celebrate the helpful family team!", prompt: "What did Mommy bake?", options: ["Pizza", "Blueberry muffins", "Bread only"], correct: 1 }
        ]
      },
      {
        id: "u15_r5",
        title: "Find the /f/ Sound",
        desc: "Review words starting with /f/ (Floor, Flower, Friend, Fast, Feed).",
        exercises: [
          { prompt: "Which room part starts with /f/?", options: [{ name: "Floor", icon: "🟫" }, { name: "Wall", icon: "🧱" }, { name: "Door", icon: "🚪" }], correct: 0 },
          { prompt: "Which garden blossom starts with /f/?", options: [{ name: "Tree", icon: "🌳" }, { name: "Flower", icon: "🌸" }, { name: "Grass", icon: "🌿" }], correct: 1 },
          { prompt: "Which kind person starts with /f/?", options: [{ name: "Dog", icon: "🐶" }, { name: "Teacher", icon: "👩‍🏫" }, { name: "Friend", icon: "👫" }], correct: 2 },
          { prompt: "Which speed word starts with /f/?", options: [{ name: "Fast", icon: "⚡" }, { name: "Slow", icon: "🐢" }, { name: "Big", icon: "🐘" }], correct: 0 },
          { prompt: "Which pet care action starts with /f/?", options: [{ name: "Sleep", icon: "😴" }, { name: "Feed", icon: "🥫🐟" }, { name: "Wash", icon: "🧼" }], correct: 1 }
        ]
      },
      {
        id: "u15_r6",
        title: "Read and Solve the House Problems",
        desc: "Read the household problem and choose the helpful solution.",
        exercises: [
          { text: "PROBLEM: Crumbs on the kitchen floor.  ➔  SOLUTION: ______", prompt: "How do you solve this?", options: ["Sweep with broom", "Go to sleep", "Play soccer"], correct: 0 },
          { text: "PROBLEM: Dry wilted flowers in the pot.  ➔  SOLUTION: ______", prompt: "How do you solve this?", options: ["Throw paint", "Water with watering can", "Cut them down"], correct: 1 },
          { text: "PROBLEM: Toys scattered across the rug.  ➔  SOLUTION: ______", prompt: "How do you solve this?", options: ["Kick them away", "Leave forever", "Pick up into toy box"], correct: 2 },
          { text: "PROBLEM: Messy blankets on the bed.  ➔  SOLUTION: ______", prompt: "How do you solve this?", options: ["Make the bed neatly", "Jump on bed", "Turn off lamp"], correct: 0 },
          { text: "PROBLEM: Banana peel on the table.  ➔  SOLUTION: ______", prompt: "How do you solve this?", options: ["Put on floor", "Throw in trash can", "Eat the peel"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u15_w1",
        title: "Build Helping Words",
        desc: "Unscramble the letters to spell chore words.",
        exercises: [
          { target: "HELP", letters: ["P", "H", "E", "L"], icon: "🤝", hint: "Assisting someone kindly" },
          { target: "WASH", letters: ["H", "W", "A", "S"], icon: "🧼", hint: "Clean with water & soap" },
          { target: "BED", letters: ["D", "B", "E"], icon: "🛏️", hint: "Where we sleep" },
          { target: "BOOK", letters: ["K", "B", "O", "O"], icon: "📚", hint: "Read and put on shelf" },
          { target: "CLEAN", letters: ["N", "C", "L", "E", "A"], icon: "✨", hint: "Tidy and spotless" }
        ]
      },
      {
        id: "u15_w2",
        title: "Missing Letters",
        desc: "Fill in the missing letter for helping words.",
        exercises: [
          { target: "H_LP", missing: "E", full: "HELP", options: ["E", "A", "O"], icon: "🤝" },
          { target: "W_SH", missing: "A", full: "WASH", options: ["A", "E", "I"], icon: "🧼" },
          { target: "SW_EP", missing: "E", full: "SWEEP", options: ["E", "A", "U"], icon: "🧹" },
          { target: "PL_NT", missing: "A", full: "PLANT", options: ["A", "O", "E"], icon: "🪴" },
          { target: "TR_SH", missing: "A", full: "TRASH", options: ["A", "E", "I"], icon: "🗑️" }
        ]
      },
      {
        id: "u15_w3",
        title: "Label the House",
        desc: "Type or select the label for each cleaning item.",
        exercises: [
          { prompt: "Label: 🧹", answer: "broom", accepted: ["broom", "Broom"] },
          { prompt: "Label: 🗑️", answer: "trash can", accepted: ["trash can", "trash", "bin"] },
          { prompt: "Label: 🚿", answer: "watering can", accepted: ["watering can", "can"] },
          { prompt: "Label: 🛏️", answer: "bed", accepted: ["bed", "Bed"] },
          { prompt: "Label: 🍽️", answer: "dishes", accepted: ["dishes", "plate", "plates"] }
        ]
      },
      {
        id: "u15_w4",
        title: "Complete Can Sentences",
        desc: "Write sentences expressing what chores you can do.",
        exercises: [
          { sentence: "I ______ sweep the floor. (🧹)", answer: "can", accepted: ["can", "Can"] },
          { sentence: "I ______ wash my dishes. (🍽️)", answer: "can", accepted: ["can", "Can"] },
          { sentence: "I ______ water the flowers. (🌸)", answer: "can", accepted: ["can", "Can"] },
          { sentence: "I ______ make my bed. (🛏️)", answer: "can", accepted: ["can", "Can"] },
          { sentence: "I ______ be a helpful child!", answer: "can", accepted: ["can", "Can"] }
        ]
      },
      {
        id: "u15_w5",
        title: "Write the Helping Actions",
        desc: "Complete sentences with chore action verbs.",
        exercises: [
          { sentence: "I can ______ up my toys. (🧸)", answer: "pick", accepted: ["pick", "pick up"] },
          { sentence: "I can ______ the kitchen floor. (🧹)", answer: "sweep", accepted: ["sweep"] },
          { sentence: "I can ______ the breakfast dishes. (🧼)", answer: "wash", accepted: ["wash"] },
          { sentence: "I can ______ the green plant. (🪴)", answer: "water", accepted: ["water"] },
          { sentence: "I can ______ my cozy bed. (🛏️)", answer: "make", accepted: ["make"] }
        ]
      },
      {
        id: "u15_w6",
        title: "My Helpful Day",
        desc: "Write your personal helpful diary entry.",
        exercises: [
          { sentence: "Today I helped ______ at home. (Mommy / Daddy)", answer: "Mommy", accepted: ["Mommy", "Daddy", "mommy", "daddy", "family"] },
          { sentence: "I used the ______ to sweep the crumbs. (🧹)", answer: "broom", accepted: ["broom"] },
          { sentence: "I threw the garbage in the ______ . (🗑️)", answer: "trash can", accepted: ["trash can", "trash", "bin"] },
          { sentence: "My family felt very ______ of me! (😊)", answer: "proud", accepted: ["proud", "happy"] },
          { sentence: "Being helpful makes me ______ !", answer: "happy", accepted: ["happy", "smile", "good"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u15_s1",
        title: "Name the Objects",
        desc: "Pronounce household chore objects clearly.",
        exercises: [
          { prompt: "Say: Broom", target: "broom", audio: "Broom", icon: "🧹" },
          { prompt: "Say: Trash can", target: "trash can", audio: "Trash can", icon: "🗑️" },
          { prompt: "Say: Watering can", target: "watering can", audio: "Watering can", icon: "🚿" },
          { prompt: "Say: Bed", target: "bed", audio: "Bed", icon: "🛏️" },
          { prompt: "Say: Dishes", target: "dishes", audio: "Dishes", icon: "🍽️" }
        ]
      },
      {
        id: "u15_s2",
        title: "What Can You Do?",
        desc: "Speak your capabilities: 'I can...'",
        exercises: [
          { prompt: "Say: 'I can sweep the floor.'", target: "i can sweep the floor", audio: "I can sweep the floor" },
          { prompt: "Say: 'I can wash the dishes.'", target: "i can wash the dishes", audio: "I can wash the dishes" },
          { prompt: "Say: 'I can water the plants.'", target: "i can water the plants" },
          { prompt: "Say: 'I can make my bed.'", target: "i can make my bed" },
          { prompt: "Say: 'I can pick up my toys.'", target: "i can pick up my toys" }
        ]
      },
      {
        id: "u15_s3",
        title: "Describe the Helping Action",
        desc: "Describe what chore is being done.",
        exercises: [
          { prompt: "Say: 'Mommy is washing plates.'", target: "mommy is washing plates" },
          { prompt: "Say: 'Daddy is sweeping the kitchen.'", target: "daddy is sweeping the kitchen" },
          { prompt: "Say: 'I am watering the flower.'", target: "i am watering the flower" },
          { prompt: "Say: 'We are tidying up the room.'", target: "we are tidying up the room" },
          { prompt: "Say: 'Our house is clean and bright.'", target: "our house is clean and bright" }
        ]
      },
      {
        id: "u15_s4",
        title: "Count the Objects",
        desc: "Count household chore items aloud.",
        exercises: [
          { prompt: "Say: 'One clean bed'", target: "one clean bed" },
          { prompt: "Say: 'Two watering cans'", target: "two watering cans" },
          { prompt: "Say: 'Three washed plates'", target: "three washed plates" },
          { prompt: "Say: 'Four tidy books'", target: "four tidy books" },
          { prompt: "Say: 'Five helpful friends'", target: "five helpful friends" }
        ]
      },
      {
        id: "u15_s5",
        title: "Offer Help",
        desc: "Practice offering help politely: 'Can I help you?'",
        exercises: [
          { prompt: "Say: 'Can I help you, Mommy?'", target: "can i help you mommy" },
          { prompt: "Say: 'Can I help you, Daddy?'", target: "can i help you daddy" },
          { prompt: "Say: 'Let us work together.'", target: "let us work together" },
          { prompt: "Say: 'I am happy to help!'", target: "i am happy to help" },
          { prompt: "Say: 'You are very welcome.'", target: "you are very welcome" }
        ]
      },
      {
        id: "u15_s6",
        title: "My Helpful Actions Presentation",
        desc: "Deliver a 3-sentence presentation of your helpful deeds.",
        exercises: [
          { prompt: "Sentence 1: 'I love being helpful at home.'", target: "i love being helpful at home" },
          { prompt: "Sentence 2: 'I can make my bed and pick up toys.'", target: "i can make my bed and pick up toys" },
          { prompt: "Sentence 3: 'I help Mommy wash the dishes.'", target: "i help mommy wash the dishes" },
          { prompt: "Sentence 4: 'Working together makes family happy.'", target: "working together makes family happy" },
          { prompt: "Sentence 5: 'I am a true helpful hero!'", target: "i am a true helpful hero" }
        ]
      }
    ],

    videos: [
      {
        title: "Helping Hands Song | British Council LearnEnglish Kids",
        videoId: "qduN46lQf84",
        embedUrl: "https://www.youtube-nocookie.com/embed/qduN46lQf84",
        thumbnail: "assets/toddlers_hd/toddlers_cont_routines.png",
        description: "Two helping hands to clean, sweep, wash and care! Sing along as friends work together to create a sparkling home.",
        checkpoints: [
          { time: 15, question: "What do helping hands do with toys?", options: ["Put them away in the box", "Throw them outside", "Hide them"], correct: 0 },
          { time: 35, question: "How does family feel when you help?", options: ["Proud and happy", "Angry", "Tired"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Big Helpful Hero Mission",
      story: "It's community and home helpfulness day! Join Bili, Luna and Leo on a grand mission through the house and neighborhood to assist friends across 12 levels.",
      levels: [
        { level: 1, title: "Find the Ball", mission: "Rescue the stray soccer ball from the rose bushes.", targetCount: 1, itemType: "ball", icon: "⚽" },
        { level: 2, title: "Pick Up the Blocks", mission: "Gather 5 wooden building blocks into the storage crate.", targetCount: 5, itemType: "blocks", icon: "🧱" },
        { level: 3, title: "Organize the Books", mission: "Place 4 storybooks spine-out on the reading shelf.", targetCount: 4, itemType: "books", icon: "📚" },
        { level: 4, title: "Put Away the Car and Doll", mission: "Park the toy car on the shelf and tuck the doll into her cradle.", targetCount: 2, itemType: "toys", icon: "🪆" },
        { level: 5, title: "Wash the Dishes", mission: "Soap and rinse 3 breakfast plates and 2 mugs.", targetCount: 5, itemType: "dishes", icon: "🍽️" },
        { level: 6, title: "Clean the Bed Area", mission: "Straighten the duvet and arrange two pillows neatly.", targetCount: 2, itemType: "bed", icon: "🛏️" },
        { level: 7, title: "Collect the Trash", mission: "Pick up 4 snack wrappers and toss them into the trash bin.", targetCount: 4, itemType: "trash", icon: "🗑️" },
        { level: 8, title: "Sweep the Floor", mission: "Sweep crumbs across 3 kitchen tiles into the dustpan.", targetCount: 3, itemType: "sweep", icon: "🧹" },
        { level: 9, title: "Water the Plant", mission: "Sprinkle 4 refreshing water showers on the houseplants.", targetCount: 4, itemType: "water", icon: "🪴" },
        { level: 10, title: "Organize Paintbrush and Pencil", mission: "Put 3 paintbrushes and 3 pencils into the art jar.", targetCount: 6, itemType: "art_tools", icon: "🖌️" },
        { level: 11, title: "Find the /f/ Sound", mission: "Collect /f/ items: Floor, Flower, Friend, Fast, Feed.", targetCount: 5, itemType: "phonics", icon: "🌸" },
        { level: 12, title: "The Big Helpful Mission", mission: "Assemble the whole family for the Helpful Hero Golden Trophy ceremony!", targetCount: 1, itemType: "trophy", icon: "🏆" }
      ]
    },

    finalChallenge: {
      title: "Being Helpful Master Quest",
      story: "Complete the ultimate 10-step helpfulness challenge to graduate from Toddlers 01!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Can you help wash the dishes?'", options: ["🍽️ Wash dishes", "😴 Go sleep", "🚗 Drive"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'SWEEP'", options: ["🧹", "🛏️", "🗑️"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: H _ L P", answer: "E" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'I can help at home'", target: "i can help at home" },
        { step: 5, type: "phonics", prompt: "Which word starts with /f/?", options: ["Flower", "Broom", "Bed"], correct: 0 },
        { step: 6, type: "chores", prompt: "Where do we throw trash?", options: ["In the trash can 🗑️", "On the bed 🛏️"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count clean plates: 🍽️ 🍽️ 🍽️", options: ["2", "3", "4"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: C L E A N", answer: "CLEAN" },
        { step: 9, type: "listening", prompt: "Listen: 'Water the green plants!'", options: ["🪴💧", "😴", "🚗"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Celebrate: 'I am a true helpful hero!'", target: "i am a true helpful hero" }
      ]
    }
  }
];
