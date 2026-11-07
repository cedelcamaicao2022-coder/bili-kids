/**
 * Bilikids Adventure - Toddlers 01 Curriculum Data
 * Units 06 - 10: Farm Animals, At the Supermarket, Daily Activities, The Park, Around Town
 */

window.TODDLERS_UNITS_PART2 = [
  // ==========================================================================
  // UNIT 06: FARM ANIMALS
  // ==========================================================================
  {
    id: 6,
    code: "unit_06",
    title: "Farm Animals",
    subtitle: "Farmyard Friends, Sounds & The /p/ Sound",
    icon: "🐮",
    themeColor: "#16a34a",
    themeLight: "#f0fdf4",
    structures: ["Present Simple", "Verb to be", "This is/These are"],
    functions: ["Identifying and describing animals", "Identifying colors", "Counting", "Identifying the /p/ sound"],
    vocabulary: ["Big", "Bowl", "Cat", "Cow", "Dog", "Duck", "Hay", "Horse", "Paper", "Pig", "Rabbit", "Small", "Numbers 1–11", "Colors"],
    phonicsFocus: "/p/ Sound: Pig, Paper, Puppy, Pony, Pen",

    explore: [
      { name: "Cow", icon: "🐮", fact: "Cows chew sweet green grass and say 'Moo moo!'", audio: "cow", color: "Black & White", shape: "Big animal", count: 1 },
      { name: "Horse", icon: "🐴", fact: "Horses gallop across meadows and sleep standing up.", audio: "horse", color: "Brown", shape: "Tall animal", count: 1 },
      { name: "Pig", icon: "🐷", fact: "Pigs are very smart and roll in mud to stay cool.", audio: "pig", color: "Pink", shape: "Round animal", count: 3 },
      { name: "Duck", icon: "🦆", fact: "Ducks swim in the farm pond and say 'Quack quack!'", audio: "duck", color: "Yellow & Green", shape: "Bird", count: 4 },
      { name: "Dog", icon: "🐶", fact: "The friendly sheepdog helps guide the farm animals.", audio: "dog", color: "Golden", shape: "Pet", count: 1 },
      { name: "Cat", icon: "🐱", fact: "Barn cats catch mice and purr when petted gently.", audio: "cat", color: "Orange", shape: "Pet", count: 2 },
      { name: "Rabbit", icon: "🐰", fact: "Rabbits hop quickly with long ears and twitchy noses.", audio: "rabbit", color: "White", shape: "Small animal", count: 5 },
      { name: "Hay", icon: "🌾", fact: "Dry golden hay makes warm beds and food for horses.", audio: "hay", color: "Yellow", shape: "Bundle", count: 6 }
    ],

    listening: [
      {
        id: "u6_l1",
        title: "Animal Sound Detective",
        desc: "Listen to the farm animal sound and tap the correct creature.",
        exercises: [
          { audio: "Moo moo! I am a big animal that gives fresh milk.", prompt: "Listen: 'Moo moo!'", options: [{ name: "Cow", icon: "🐮" }, { name: "Duck", icon: "🦆" }, { name: "Cat", icon: "🐱" }], correct: 0 },
          { audio: "Oink oink! I love rolling in the cool mud.", prompt: "Listen: 'Oink oink!'", options: [{ name: "Horse", icon: "🐴" }, { name: "Pig", icon: "🐷" }, { name: "Dog", icon: "🐶" }], correct: 1 },
          { audio: "Neigh neigh! I run fast across the green hills.", prompt: "Listen: 'Neigh neigh!'", options: [{ name: "Rabbit", icon: "🐰" }, { name: "Cow", icon: "🐮" }, { name: "Horse", icon: "🐴" }], correct: 2 },
          { audio: "Quack quack! I swim with my webbed feet in the pond.", prompt: "Listen: 'Quack quack!'", options: [{ name: "Duck", icon: "🦆" }, { name: "Pig", icon: "🐷" }, { name: "Cat", icon: "🐱" }], correct: 0 },
          { audio: "Woof woof! I wag my tail and guard the farm.", prompt: "Listen: 'Woof woof!'", options: [{ name: "Cow", icon: "🐮" }, { name: "Dog", icon: "🐶" }, { name: "Duck", icon: "🦆" }], correct: 1 }
        ]
      },
      {
        id: "u6_l2",
        title: "Listen and Find the Animal",
        desc: "Listen to the animal's name in English and tap its picture.",
        exercises: [
          { audio: "Where is the fluffy rabbit?", prompt: "Find: Rabbit", options: [{ name: "Rabbit", icon: "🐰" }, { name: "Dog", icon: "🐶" }, { name: "Horse", icon: "🐴" }], correct: 0 },
          { audio: "Find the pink pig", prompt: "Find: Pig", options: [{ name: "Cow", icon: "🐮" }, { name: "Pig", icon: "🐷" }, { name: "Cat", icon: "🐱" }], correct: 1 },
          { audio: "Where is the little barn cat?", prompt: "Find: Cat", options: [{ name: "Duck", icon: "🦆" }, { name: "Horse", icon: "🐴" }, { name: "Cat", icon: "🐱" }], correct: 2 },
          { audio: "Find the big brown horse", prompt: "Find: Horse", options: [{ name: "Horse", icon: "🐴" }, { name: "Rabbit", icon: "🐰" }, { name: "Pig", icon: "🐷" }], correct: 0 },
          { audio: "Find the spotted cow", prompt: "Find: Cow", options: [{ name: "Dog", icon: "🐶" }, { name: "Cow", icon: "🐮" }, { name: "Cat", icon: "🐱" }], correct: 1 }
        ]
      },
      {
        id: "u6_l3",
        title: "Feed the Correct Animal",
        desc: "Listen to who is hungry and give them their favorite meal.",
        exercises: [
          { audio: "The rabbit wants a crunchy orange carrot.", prompt: "Feed: Rabbit with carrot", options: [{ name: "Rabbit & Carrot", icon: "🐰🥕" }, { name: "Cat & Fish", icon: "🐱🐟" }, { name: "Dog & Bone", icon: "🐶🦴" }], correct: 0 },
          { audio: "Give the golden hay to the hungry horse.", prompt: "Feed: Horse with hay", options: [{ name: "Pig & Corn", icon: "🐷🌽" }, { name: "Horse & Hay", icon: "🐴🌾" }, { name: "Duck & Bread", icon: "🦆🍞" }], correct: 1 },
          { audio: "The cute cat wants a bowl of milk.", prompt: "Feed: Cat with milk", options: [{ name: "Cow & Hay", icon: "🐮🌾" }, { name: "Rabbit & Grass", icon: "🐰🌿" }, { name: "Cat & Milk", icon: "🐱🥛" }], correct: 2 },
          { audio: "Feed the yellow duck some pond seeds.", prompt: "Feed: Duck with seeds", options: [{ name: "Duck & Seeds", icon: "🦆🌱" }, { name: "Horse & Apple", icon: "🐴🍎" }, { name: "Dog & Meat", icon: "🐶🥩" }], correct: 0 },
          { audio: "Give the puppy dog a crunchy biscuit.", prompt: "Feed: Dog with biscuit", options: [{ name: "Pig & Mud", icon: "🐷💧" }, { name: "Dog & Biscuit", icon: "🐶🍪" }, { name: "Cat & Water", icon: "🐱💧" }], correct: 1 }
        ]
      },
      {
        id: "u6_l4",
        title: "Count the Farm Animals",
        desc: "Listen to the quantity of animals and select the matching group.",
        exercises: [
          { audio: "I see three pink pigs", prompt: "Listen: 'Three pigs'", options: [{ name: "2 Pigs", icon: "🐷🐷" }, { name: "3 Pigs", icon: "🐷🐷🐷" }, { name: "4 Pigs", icon: "🐷🐷🐷🐷" }], correct: 1 },
          { audio: "There are two cows in the field", prompt: "Listen: 'Two cows'", options: [{ name: "2 Cows", icon: "🐮🐮" }, { name: "1 Cow", icon: "🐮" }, { name: "3 Cows", icon: "🐮🐮🐮" }], correct: 0 },
          { audio: "Four little ducks swimming in a row", prompt: "Listen: 'Four ducks'", options: [{ name: "3 Ducks", icon: "🦆🦆🦆" }, { name: "5 Ducks", icon: "🦆🦆🦆🦆🦆" }, { name: "4 Ducks", icon: "🦆🦆🦆🦆" }], correct: 2 },
          { audio: "There is one proud horse", prompt: "Listen: 'One horse'", options: [{ name: "1 Horse", icon: "🐴" }, { name: "2 Horses", icon: "🐴🐴" }, { name: "3 Horses", icon: "🐴🐴🐴" }], correct: 0 },
          { audio: "Count five fluffy rabbits", prompt: "Listen: 'Five rabbits'", options: [{ name: "4 Rabbits", icon: "🐰🐰🐰🐰" }, { name: "5 Rabbits", icon: "🐰🐰🐰🐰🐰" }, { name: "3 Rabbits", icon: "🐰🐰🐰" }], correct: 1 }
        ]
      },
      {
        id: "u6_l5",
        title: "Big and Small Animal Listening",
        desc: "Listen and distinguish big animals from small animals on the farm.",
        exercises: [
          { audio: "The cow is BIG. The rabbit is SMALL.", prompt: "Which animal is big?", options: [{ name: "The Cow", icon: "🐮 (Big)" }, { name: "The Rabbit", icon: "🐰 (Small)" }], correct: 0 },
          { audio: "Find the small animal: a tiny yellow chick.", prompt: "Find: SMALL animal", options: [{ name: "Big Horse", icon: "🐴 (Big)" }, { name: "Small Chick", icon: "🐥 (Small)" }], correct: 1 },
          { audio: "The horse is big and strong.", prompt: "The horse is...", options: [{ name: "Big", icon: "🐴 (Big)" }, { name: "Small", icon: "🐴 (Tiny)" }], correct: 0 },
          { audio: "Look at the little duckling. It is small.", prompt: "The duckling is...", options: [{ name: "Big", icon: "🦆" }, { name: "Small", icon: "🐥" }], correct: 1 },
          { audio: "Find the big red barn.", prompt: "Find: BIG barn", options: [{ name: "Big Barn", icon: "🏚️ (Big)" }, { name: "Small Doghouse", icon: "🏠 (Small)" }], correct: 0 }
        ]
      },
      {
        id: "u6_l6",
        title: "Farm Instructions Challenge",
        desc: "Follow the farm helper instructions with Bili.",
        exercises: [
          { audio: "Open the barn gate for the cows", prompt: "Action: Open barn gate", options: [{ name: "Open gate", icon: "🚪🔓🐮" }, { name: "Close door", icon: "🚪🔒" }, { name: "Sleep in hay", icon: "😴" }], correct: 0 },
          { audio: "Bring fresh water in a bowl for the dog", prompt: "Action: Water for dog", options: [{ name: "Water in bowl", icon: "🐶🥣💧" }, { name: "Eat an apple", icon: "🍎" }, { name: "Ride bicycle", icon: "🚲" }], correct: 0 },
          { audio: "Pet the sweet cat gently: Purr purr!", prompt: "Action: Pet cat", options: [{ name: "Scare cat", icon: "🙀" }, { name: "Pet cat gently", icon: "🐱🖐️❤️" }, { name: "Run away", icon: "🏃" }], correct: 1 },
          { audio: "Brush the horse's brown mane", prompt: "Action: Brush horse", options: [{ name: "Brush horse", icon: "🐴🪮" }, { name: "Wash dishes", icon: "🍽️" }, { name: "Climb tree", icon: "🌳" }], correct: 0 },
          { audio: "Scatter grain on the ground for the ducks", prompt: "Action: Feed ducks", options: [{ name: "Chase ducks", icon: "🏃" }, { name: "Scatter grain", icon: "🦆🌾✨" }, { name: "Go to bed", icon: "🛌" }], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u6_r1",
        title: "Match Animals and Words",
        desc: "Read the animal name and tap the matching illustration.",
        exercises: [
          { text: "COW", prompt: "Read: COW", options: [{ name: "Cow", icon: "🐮" }, { name: "Horse", icon: "🐴" }, { name: "Pig", icon: "🐷" }], correct: 0 },
          { text: "PIG", prompt: "Read: PIG", options: [{ name: "Duck", icon: "🦆" }, { name: "Pig", icon: "🐷" }, { name: "Cat", icon: "🐱" }], correct: 1 },
          { text: "HORSE", prompt: "Read: HORSE", options: [{ name: "Dog", icon: "🐶" }, { name: "Rabbit", icon: "🐰" }, { name: "Horse", icon: "🐴" }], correct: 2 },
          { text: "DUCK", prompt: "Read: DUCK", options: [{ name: "Duck", icon: "🦆" }, { name: "Cow", icon: "🐮" }, { name: "Pig", icon: "🐷" }], correct: 0 },
          { text: "RABBIT", prompt: "Read: RABBIT", options: [{ name: "Cat", icon: "🐱" }, { name: "Rabbit", icon: "🐰" }, { name: "Dog", icon: "🐶" }], correct: 1 }
        ]
      },
      {
        id: "u6_r2",
        title: "Read the Animal Cards",
        desc: "Read descriptions of farm animals.",
        exercises: [
          { text: "This animal says 'Moo' and is black and white. It is a COW.", prompt: "What animal is it?", options: ["Cow", "Pig", "Duck"], correct: 0 },
          { text: "This animal is pink and loves mud. It is a PIG.", prompt: "What animal is it?", options: ["Horse", "Pig", "Dog"], correct: 1 },
          { text: "This animal has long ears and hops. It is a RABBIT.", prompt: "What animal is it?", options: ["Cat", "Duck", "Rabbit"], correct: 2 },
          { text: "This animal swims in water and says 'Quack'. It is a DUCK.", prompt: "What animal is it?", options: ["Duck", "Horse", "Cow"], correct: 0 },
          { text: "This animal runs very fast and eats hay. It is a HORSE.", prompt: "What animal is it?", options: ["Pig", "Horse", "Cat"], correct: 1 }
        ]
      },
      {
        id: "u6_r3",
        title: "Complete This Is/These Are",
        desc: "Choose between 'This is' and 'These are' for farm animals.",
        exercises: [
          { text: "______ a big brown horse. (🐴)", options: ["This is", "These are"], correct: 0 },
          { text: "______ three pink pigs. (🐷🐷🐷)", options: ["This is", "These are"], correct: 1 },
          { text: "______ a yellow duck. (🦆)", options: ["This is", "These are"], correct: 0 },
          { text: "______ two fluffy rabbits. (🐰🐰)", options: ["This is", "These are"], correct: 1 },
          { text: "______ my friendly dog. (🐶)", options: ["This is", "These are"], correct: 0 }
        ]
      },
      {
        id: "u6_r4",
        title: "Find the /p/ Words",
        desc: "Identify farm words that start with the sound /p/ (Pig, Paper, Pony, Puppy, Pen).",
        exercises: [
          { prompt: "Which farm animal starts with /p/?", options: [{ name: "Pig", icon: "🐷" }, { name: "Cow", icon: "🐮" }, { name: "Duck", icon: "🦆" }], correct: 0 },
          { prompt: "Which baby animal starts with /p/?", options: [{ name: "Kitten", icon: "🐱" }, { name: "Puppy", icon: "🐶" }, { name: "Calf", icon: "🐮" }], correct: 1 },
          { prompt: "Which drawing sheet starts with /p/?", options: [{ name: "Crayon", icon: "🖍️" }, { name: "Brush", icon: "🖌️" }, { name: "Paper", icon: "📄" }], correct: 2 },
          { prompt: "Which small horse starts with /p/?", options: [{ name: "Pony", icon: "🐴" }, { name: "Donkey", icon: "🫏" }, { name: "Goat", icon: "🐐" }], correct: 0 },
          { prompt: "Which color starts with /p/?", options: [{ name: "Red", icon: "🔴" }, { name: "Pink", icon: "🌸" }, { name: "Blue", icon: "🔵" }], correct: 1 }
        ]
      },
      {
        id: "u6_r5",
        title: "Read and Count",
        desc: "Read the sentence and pick the matching animal number.",
        exercises: [
          { text: "There are four ducks in the farm pond.", prompt: "How many ducks?", options: ["4", "2", "6"], correct: 0 },
          { text: "Farmer Bili has two big horses.", prompt: "How many horses?", options: ["1", "2", "3"], correct: 1 },
          { text: "I count five little rabbits in the grass.", prompt: "How many rabbits?", options: ["3", "4", "5"], correct: 2 },
          { text: "There is one black and white cow.", prompt: "How many cows?", options: ["1", "2", "4"], correct: 0 },
          { text: "Three pigs are sleeping in the mud.", prompt: "How many pigs?", options: ["2", "3", "5"], correct: 1 }
        ]
      },
      {
        id: "u6_r6",
        title: "The Farm Story",
        desc: "Read the story of a sunny morning on Farmer Leo's farm.",
        exercises: [
          { text: "The sun rises over the green farm. The rooster crows: 'Cock-a-doodle-doo!'", prompt: "Who wakes up the farm?", options: ["The rooster", "The cat", "The duck"], correct: 0 },
          { text: "Farmer Leo brings fresh hay to the horse. The horse says 'Neigh!' happily.", prompt: "What does the horse eat?", options: ["Cookies", "Fresh hay", "Soup"], correct: 1 },
          { text: "Luna visits the pond. She feeds breadcrumbs to five yellow ducks.", prompt: "Who does Luna feed?", options: ["Pigs", "Five yellow ducks", "Cows"], correct: 1 },
          { text: "Baby pig plays with a red ball in the barnyard.", prompt: "What does baby pig play with?", options: ["A red ball", "A book", "A hat"], correct: 0 },
          { text: "All the animals are happy and safe on the farm.", prompt: "How are the animals?", options: ["Sad", "Happy and safe", "Scared"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u6_w1",
        title: "Build Animal Names",
        desc: "Unscramble the letter tiles to spell farm animals.",
        exercises: [
          { target: "PIG", letters: ["G", "P", "I"], icon: "🐷", hint: "Pink farm animal" },
          { target: "COW", letters: ["W", "C", "O"], icon: "🐮", hint: "Gives fresh milk" },
          { target: "DUCK", letters: ["K", "D", "U", "C"], icon: "🦆", hint: "Swims and quacks" },
          { target: "CAT", letters: ["T", "C", "A"], icon: "🐱", hint: "Purrs and meows" },
          { target: "DOG", letters: ["G", "D", "O"], icon: "🐶", hint: "Man's best friend" }
        ]
      },
      {
        id: "u6_w2",
        title: "Missing Letters",
        desc: "Complete the missing letter in animal names.",
        exercises: [
          { target: "P_G", missing: "I", full: "PIG", options: ["I", "A", "U"], icon: "🐷" },
          { target: "C_W", missing: "O", full: "COW", options: ["O", "E", "A"], icon: "🐮" },
          { target: "D_CK", missing: "U", full: "DUCK", options: ["U", "O", "I"], icon: "🦆" },
          { target: "H_RSE", missing: "O", full: "HORSE", options: ["O", "A", "E"], icon: "🐴" },
          { target: "R_BBIT", missing: "A", full: "RABBIT", options: ["A", "E", "O"], icon: "🐰" }
        ]
      },
      {
        id: "u6_w3",
        title: "Label the Farm",
        desc: "Type or select the label for each farm animal.",
        exercises: [
          { prompt: "Label: 🐮", answer: "cow", accepted: ["cow", "Cow", "a cow"] },
          { prompt: "Label: 🐷", answer: "pig", accepted: ["pig", "Pig", "a pig"] },
          { prompt: "Label: 🐴", answer: "horse", accepted: ["horse", "Horse", "a horse"] },
          { prompt: "Label: 🦆", answer: "duck", accepted: ["duck", "Duck", "a duck"] },
          { prompt: "Label: 🐰", answer: "rabbit", accepted: ["rabbit", "Rabbit", "bunny"] }
        ]
      },
      {
        id: "u6_w4",
        title: "Complete Animal Sentences",
        desc: "Fill in the blank with the correct animal word.",
        exercises: [
          { sentence: "The ______ gives sweet milk. (🐮)", answer: "cow", accepted: ["cow"] },
          { sentence: "The ______ runs very fast. (🐴)", answer: "horse", accepted: ["horse"] },
          { sentence: "The pink ______ rolls in mud. (🐷)", answer: "pig", accepted: ["pig"] },
          { sentence: "The yellow ______ swims in the pond. (🦆)", answer: "duck", accepted: ["duck"] },
          { sentence: "The fluffy ______ hops in the grass. (🐰)", answer: "rabbit", accepted: ["rabbit"] }
        ]
      },
      {
        id: "u6_w5",
        title: "Describe Big and Small Animals",
        desc: "Complete sentences using 'big' or 'small'.",
        exercises: [
          { sentence: "The horse is ______ . (🐴)", answer: "big", accepted: ["big", "Big"] },
          { sentence: "The duckling is ______ . (🐥)", answer: "small", accepted: ["small", "Small", "little"] },
          { sentence: "The cow is ______ . (🐮)", answer: "big", accepted: ["big", "Big"] },
          { sentence: "The rabbit is ______ . (🐰)", answer: "small", accepted: ["small", "Small", "little"] },
          { sentence: "The puppy is ______ . (🐶)", answer: "small", accepted: ["small", "Small", "little"] }
        ]
      },
      {
        id: "u6_w6",
        title: "My Farm Inventory",
        desc: "Fill in your farm inventory sheet.",
        exercises: [
          { sentence: "I have ______ (2) cows in the barn.", answer: "two", accepted: ["two", "2"] },
          { sentence: "I have ______ (3) pigs in the pen.", answer: "three", accepted: ["three", "3"] },
          { sentence: "I have ______ (1) brown horse.", answer: "one", accepted: ["one", "1"] },
          { sentence: "I see ______ (4) yellow ducks.", answer: "four", accepted: ["four", "4"] },
          { sentence: "I love all my farm ______ !", answer: "animals", accepted: ["animals", "friends"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u6_s1",
        title: "Name the Animals",
        desc: "Pronounce each farm animal name aloud.",
        exercises: [
          { prompt: "Say: Cow", target: "cow", audio: "Cow", icon: "🐮" },
          { prompt: "Say: Pig", target: "pig", audio: "Pig", icon: "🐷" },
          { prompt: "Say: Horse", target: "horse", audio: "Horse", icon: "🐴" },
          { prompt: "Say: Duck", target: "duck", audio: "Duck", icon: "🦆" },
          { prompt: "Say: Rabbit", target: "rabbit", audio: "Rabbit", icon: "🐰" }
        ]
      },
      {
        id: "u6_s2",
        title: "What Animal Is This?",
        desc: "Look at the picture and say: 'This is a...'",
        exercises: [
          { prompt: "What animal is this? 🐮", target: "this is a cow", audio: "This is a cow" },
          { prompt: "What animal is this? 🐷", target: "this is a pig", audio: "This is a pig" },
          { prompt: "What animal is this? 🐴", target: "this is a horse", audio: "This is a horse" },
          { prompt: "What animal is this? 🦆", target: "this is a duck", audio: "This is a duck" },
          { prompt: "What animal is this? 🐰", target: "this is a rabbit", audio: "This is a rabbit" }
        ]
      },
      {
        id: "u6_s3",
        title: "Describe the Animal",
        desc: "Speak about an animal's color and sound.",
        exercises: [
          { prompt: "Say: 'The cow says moo moo.'", target: "the cow says moo moo" },
          { prompt: "Say: 'The pig is pink and round.'", target: "the pig is pink and round" },
          { prompt: "Say: 'The horse is tall and strong.'", target: "the horse is tall and strong" },
          { prompt: "Say: 'The duck swims in the pond.'", target: "the duck swims in the pond" },
          { prompt: "Say: 'The rabbit hops quickly.'", target: "the rabbit hops quickly" }
        ]
      },
      {
        id: "u6_s4",
        title: "Count the Animals",
        desc: "Count farm animals aloud.",
        exercises: [
          { prompt: "Say: 'One horse'", target: "one horse" },
          { prompt: "Say: 'Two cows'", target: "two cows" },
          { prompt: "Say: 'Three pigs'", target: "three pigs" },
          { prompt: "Say: 'Four ducks'", target: "four ducks" },
          { prompt: "Say: 'Five rabbits'", target: "five rabbits" }
        ]
      },
      {
        id: "u6_s5",
        title: "Big or Small?",
        desc: "Compare animal sizes aloud.",
        exercises: [
          { prompt: "Say: 'The cow is big.'", target: "the cow is big" },
          { prompt: "Say: 'The rabbit is small.'", target: "the rabbit is small" },
          { prompt: "Say: 'The horse is big.'", target: "the horse is big" },
          { prompt: "Say: 'The duck is small.'", target: "the duck is small" },
          { prompt: "Say: 'The dog is friendly.'", target: "the dog is friendly" }
        ]
      },
      {
        id: "u6_s6",
        title: "My Favorite Farm Animal",
        desc: "Express your favorite farm friend in 3 sentences.",
        exercises: [
          { prompt: "Sentence 1: 'My favorite animal is the horse.'", target: "my favorite animal is the horse" },
          { prompt: "Sentence 2: 'It runs very fast.'", target: "it runs very fast" },
          { prompt: "Sentence 3: 'I like feeding it sweet carrots.'", target: "i like feeding it sweet carrots" },
          { prompt: "Sentence 4: 'Farm animals are wonderful.'", target: "farm animals are wonderful" },
          { prompt: "Sentence 5: 'I love visiting the farm!'", target: "i love visiting the farm" }
        ]
      }
    ],

    videos: [
      {
        title: "Old MacDonald Had a Farm | British Council Kids",
        videoId: "5oYKonGIhYw",
        embedUrl: "https://www.youtube-nocookie.com/embed/5oYKonGIhYw",
        thumbnail: "assets/toddlers_hd/toddlers_cont_farm.png",
        description: "Old MacDonald has cows, pigs, ducks and horses! Sing along with every animal sound in this timeless classic.",
        checkpoints: [
          { time: 15, question: "What sound does the cow make on the farm?", options: ["Moo moo", "Oink oink", "Quack quack"], correct: 0 },
          { time: 35, question: "What sound does the pig make?", options: ["Neigh neigh", "Oink oink", "Woof woof"], correct: 1 }
        ]
      }
    ],

    game: {
      title: "Farm Rescue Adventure",
      story: "The farm gate was left open and the animals wandered into different pastures! Help Farmer Leo and Bili round them up, feed them, and organize the barn across 12 levels.",
      levels: [
        { level: 1, title: "Find the Cat", mission: "Discover the barn cat napping in the hayloft.", targetCount: 1, itemType: "cat", icon: "🐱" },
        { level: 2, title: "Discover the Cow", mission: "Lead the spotted cow back to the milking barn.", targetCount: 1, itemType: "cow", icon: "🐮" },
        { level: 3, title: "Help the Dog", mission: "Give the loyal sheepdog a bowl of fresh water.", targetCount: 1, itemType: "dog", icon: "🐶" },
        { level: 4, title: "Find the Duck", mission: "Gather 4 ducklings from the farm pond.", targetCount: 4, itemType: "duck", icon: "🦆" },
        { level: 5, title: "Guide the Horse", mission: "Guide the brown stallion into the spacious stall.", targetCount: 1, itemType: "horse", icon: "🐴" },
        { level: 6, title: "Feed the Pig", mission: "Pour crunchy apples into the pig's trough.", targetCount: 3, itemType: "pig", icon: "🐷" },
        { level: 7, title: "Find the Rabbit", mission: "Find 3 rabbits hiding behind the vegetable garden.", targetCount: 3, itemType: "rabbit", icon: "🐰" },
        { level: 8, title: "Count the Animals", mission: "Count all 5 animal pens to verify everyone is safe.", targetCount: 5, itemType: "count", icon: "🔢" },
        { level: 9, title: "Sort Big and Small", mission: "Direct big cows and horses to the pasture, small ducks to the coop.", targetCount: 4, itemType: "sorting", icon: "📦" },
        { level: 10, title: "Collect Hay and Paper", mission: "Stack 3 bundles of golden hay and 2 farm logs.", targetCount: 5, itemType: "supplies", icon: "🌾" },
        { level: 11, title: "Find the /p/ Sound", mission: "Spot /p/ farm items: Pig, Pony, Puppy, Pen.", targetCount: 4, itemType: "phonics", icon: "🅿️" },
        { level: 12, title: "Complete the Farm Rescue", mission: "Close the farm gate and celebrate with Farmer Leo!", targetCount: 1, itemType: "celebration", icon: "🚜" }
      ]
    },

    finalChallenge: {
      title: "Farm Master Quest",
      story: "Prove your farm knowledge across 10 interactive challenge steps!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the cow?'", options: ["🐮", "🐴", "🐷"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'PIG'", options: ["🐷", "🦆", "🐱"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: C _ W", answer: "O" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'This is a horse'", target: "this is a horse" },
        { step: 5, type: "phonics", prompt: "Which word starts with /p/?", options: ["Pig", "Cow", "Duck"], correct: 0 },
        { step: 6, type: "sound", prompt: "Who says 'Quack quack'?", options: ["Duck 🦆", "Pig 🐷", "Cat 🐱"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count pigs: 🐷 🐷 🐷", options: ["2", "3", "4"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: D U C K", answer: "DUCK" },
        { step: 9, type: "reading", prompt: "Choose: 'The cow is ______ (🐮)'", options: ["big", "pencil", "hat"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'I love farm animals!'", target: "i love farm animals" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 07: AT THE SUPERMARKET
  // ==========================================================================
  {
    id: 7,
    code: "unit_07",
    title: "At the Supermarket",
    subtitle: "Healthy Food, Groceries, Preferences & /p/ Review",
    icon: "🛒",
    themeColor: "#dc2626",
    themeLight: "#fef2f2",
    structures: ["Present Simple", "Verb to be", "Like/Don’t like", "There is/are"],
    functions: ["Identifying food", "Identifying colors", "Expressing preferences", "Counting", "Reviewing the /p/ sound"],
    vocabulary: ["Apple", "Banana", "Bread", "Carrot", "Cheese", "Chicken", "Cookie", "Ice cream", "Juice", "Meat", "Milk", "Orange", "Pineapple", "Yogurt", "Colors", "Numbers 1–12"],
    phonicsFocus: "/p/ Review: Pineapple, Pizza, Pear, Peach, Plate",

    explore: [
      { name: "Apple", icon: "🍎", fact: "Crispy sweet red apple, full of healthy vitamins.", audio: "apple", color: "Red", shape: "Round", count: 1 },
      { name: "Banana", icon: "🍌", fact: "Yellow sweet banana, easy to peel and packed with energy.", audio: "banana", color: "Yellow", shape: "Curved", count: 3 },
      { name: "Bread", icon: "🍞", fact: "Fresh baked warm bread for yummy toast and sandwiches.", audio: "bread", color: "Brown", shape: "Loaf", count: 1 },
      { name: "Carrot", icon: "🥕", fact: "Crunchy orange carrot that helps keep our eyes sharp.", audio: "carrot", color: "Orange", shape: "Cone", count: 4 },
      { name: "Cheese", icon: "🧀", fact: "Creamy golden cheese made from rich dairy milk.", audio: "cheese", color: "Yellow", shape: "Triangle", count: 2 },
      { name: "Milk", icon: "🥛", fact: "Cold fresh milk that builds strong white teeth and bones.", audio: "milk", color: "White", shape: "Bottle", count: 1 },
      { name: "Juice", icon: "🧃", fact: "Sweet fruit juice in a colorful box with a straw.", audio: "juice", color: "Orange", shape: "Box", count: 2 },
      { name: "Pineapple", icon: "🍍", fact: "Tropical pineapple with a spiky green crown and sweet fruit.", audio: "pineapple", color: "Yellow", shape: "Oval", count: 1 }
    ],

    listening: [
      {
        id: "u7_l1",
        title: "Listen and Find the Food",
        desc: "Listen to the food item and find it on the supermarket shelf.",
        exercises: [
          { audio: "Find the red apple", prompt: "Find: Red apple", options: [{ name: "Apple", icon: "🍎" }, { name: "Banana", icon: "🍌" }, { name: "Bread", icon: "🍞" }], correct: 0 },
          { audio: "Find the yellow banana", prompt: "Find: Yellow banana", options: [{ name: "Cheese", icon: "🧀" }, { name: "Banana", icon: "🍌" }, { name: "Milk", icon: "🥛" }], correct: 1 },
          { audio: "Where is the fresh bread?", prompt: "Find: Bread", options: [{ name: "Juice", icon: "🧃" }, { name: "Carrot", icon: "🥕" }, { name: "Bread", icon: "🍞" }], correct: 2 },
          { audio: "Find the orange carrot", prompt: "Find: Carrot", options: [{ name: "Carrot", icon: "🥕" }, { name: "Apple", icon: "🍎" }, { name: "Cheese", icon: "🧀" }], correct: 0 },
          { audio: "Where is the bottle of milk?", prompt: "Find: Milk", options: [{ name: "Banana", icon: "🍌" }, { name: "Milk", icon: "🥛" }, { name: "Juice", icon: "🧃" }], correct: 1 }
        ]
      },
      {
        id: "u7_l2",
        title: "Shopping List Challenge",
        desc: "Listen to Mommy's grocery list and collect the items.",
        exercises: [
          { audio: "Buy two apples and one carton of milk.", prompt: "List: 2 apples & 1 milk", options: [{ name: "2 Apples & 1 Milk", icon: "🍎🍎🥛" }, { name: "1 Banana & 1 Bread", icon: "🍌🍞" }, { name: "3 Carrots", icon: "🥕🥕🥕" }], correct: 0 },
          { audio: "Buy three bananas and a wedge of cheese.", prompt: "List: 3 bananas & cheese", options: [{ name: "2 Juices", icon: "🧃🧃" }, { name: "3 Bananas & Cheese", icon: "🍌🍌🍌🧀" }, { name: "Bread & Butter", icon: "🍞🧈" }], correct: 1 },
          { audio: "Buy one fresh bread and four carrots.", prompt: "List: 1 bread & 4 carrots", options: [{ name: "Milk & Apple", icon: "🥛🍎" }, { name: "Cheese & Juice", icon: "🧀🧃" }, { name: "1 Bread & 4 Carrots", icon: "🍞🥕🥕🥕🥕" }], correct: 2 },
          { audio: "We need pineapple and orange juice for breakfast.", prompt: "List: Pineapple & juice", options: [{ name: "Pineapple & Juice", icon: "🍍🧃" }, { name: "Milk & Cookies", icon: "🥛🍪" }, { name: "Carrot & Meat", icon: "🥕🥩" }], correct: 0 },
          { audio: "Buy two chocolate cookies and ice cream.", prompt: "List: Cookies & ice cream", options: [{ name: "Bread & Cheese", icon: "🍞🧀" }, { name: "Cookies & Ice cream", icon: "🍪🍦" }, { name: "Apples", icon: "🍎🍎" }], correct: 1 }
        ]
      },
      {
        id: "u7_l3",
        title: "Listen and Fill the Basket",
        desc: "Put the requested grocery items into your shopping cart.",
        exercises: [
          { audio: "Put three carrots into the basket.", prompt: "Action: 3 carrots in basket", options: [{ name: "3 Carrots", icon: "🛒🥕🥕🥕" }, { name: "1 Apple", icon: "🛒🍎" }, { name: "2 Breads", icon: "🛒🍞🍞" }], correct: 0 },
          { audio: "Put two juice boxes into the basket.", prompt: "Action: 2 juices in basket", options: [{ name: "Milk", icon: "🛒🥛" }, { name: "2 Juices", icon: "🛒🧃🧃" }, { name: "Pineapple", icon: "🛒🍍" }], correct: 1 },
          { audio: "Put one sweet pineapple into the basket.", prompt: "Action: 1 pineapple in basket", options: [{ name: "Cheese", icon: "🛒🧀" }, { name: "Bananas", icon: "🛒🍌🍌" }, { name: "1 Pineapple", icon: "🛒🍍" }], correct: 2 },
          { audio: "Add a block of cheese to your cart.", prompt: "Action: Cheese in basket", options: [{ name: "Cheese", icon: "🛒🧀" }, { name: "Chicken", icon: "🛒🍗" }, { name: "Carrot", icon: "🛒🥕" }], correct: 0 },
          { audio: "Put delicious strawberry yogurt in the basket.", prompt: "Action: Yogurt in basket", options: [{ name: "Meat", icon: "🛒🥩" }, { name: "Yogurt", icon: "🛒🥣🍓" }, { name: "Bread", icon: "🛒🍞" }], correct: 1 }
        ]
      },
      {
        id: "u7_l4",
        title: "Food and Color Listening",
        desc: "Listen to food colors and select the correct fresh produce.",
        exercises: [
          { audio: "Apples are RED and sweet.", prompt: "What color are apples?", options: [{ name: "Red", icon: "🔴" }, { name: "Blue", icon: "🔵" }, { name: "Purple", icon: "🟣" }], correct: 0 },
          { audio: "Ripe bananas are YELLOW.", prompt: "What color are bananas?", options: [{ name: "Green", icon: "🟢" }, { name: "Yellow", icon: "🟡" }, { name: "Black", icon: "⚫" }], correct: 1 },
          { audio: "Crunchy carrots are ORANGE.", prompt: "What color are carrots?", options: [{ name: "Pink", icon: "🌸" }, { name: "White", icon: "⚪" }, { name: "Orange", icon: "🟠" }], correct: 2 },
          { audio: "Fresh milk is pure WHITE.", prompt: "What color is milk?", options: [{ name: "White", icon: "⚪" }, { name: "Yellow", icon: "🟡" }, { name: "Red", icon: "🔴" }], correct: 0 },
          { audio: "Cheese is golden YELLOW.", prompt: "What color is cheese?", options: [{ name: "Blue", icon: "🔵" }, { name: "Yellow", icon: "🟡" }, { name: "Green", icon: "🟢" }], correct: 1 }
        ]
      },
      {
        id: "u7_l5",
        title: "Count the Products",
        desc: "Count groceries in the cart up to 12.",
        exercises: [
          { audio: "I have six red apples.", prompt: "Count: 6 apples", options: [{ name: "4 Apples", icon: "🍎🍎🍎🍎" }, { name: "6 Apples", icon: "🍎🍎🍎🍎🍎🍎" }, { name: "8 Apples", icon: "🍎🍎🍎🍎🍎🍎🍎🍎" }], correct: 1 },
          { audio: "There are three bottles of juice.", prompt: "Count: 3 juices", options: [{ name: "3 Juices", icon: "🧃🧃🧃" }, { name: "2 Juices", icon: "🧃🧃" }, { name: "5 Juices", icon: "🧃🧃🧃🧃🧃" }], correct: 0 },
          { audio: "Count eight cookies in the box.", prompt: "Count: 8 cookies", options: [{ name: "6 Cookies", icon: "🍪 6" }, { name: "10 Cookies", icon: "🍪 10" }, { name: "8 Cookies", icon: "🍪 8" }], correct: 2 },
          { audio: "There is one big pineapple.", prompt: "Count: 1 pineapple", options: [{ name: "1 Pineapple", icon: "🍍" }, { name: "2 Pineapples", icon: "🍍🍍" }, { name: "3 Pineapples", icon: "🍍🍍🍍" }], correct: 0 },
          { audio: "I bought four loaves of bread.", prompt: "Count: 4 breads", options: [{ name: "3 Breads", icon: "🍞🍞🍞" }, { name: "4 Breads", icon: "🍞🍞🍞🍞" }, { name: "5 Breads", icon: "🍞🍞🍞🍞🍞" }], correct: 1 }
        ]
      },
      {
        id: "u7_l6",
        title: "Like or Don’t Like Listening",
        desc: "Listen to food preferences: 'I like apples' vs. 'I don't like broccoli'.",
        exercises: [
          { audio: "I like sweet bananas! Yum yum!", prompt: "Does the speaker like bananas?", options: [{ name: "Yes, I like! 😊", icon: "👍🍌" }, { name: "No, I don't like 🙁", icon: "👎🍌" }], correct: 0 },
          { audio: "I don't like sour lemons. No, thank you.", prompt: "Does the speaker like lemons?", options: [{ name: "Likes lemons", icon: "👍🍋" }, { name: "Doesn't like lemons", icon: "👎🍋" }], correct: 1 },
          { audio: "I love cheese on my bread. It's so good!", prompt: "Does the speaker like cheese?", options: [{ name: "Likes cheese", icon: "👍🧀" }, { name: "Hates cheese", icon: "👎🧀" }], correct: 0 },
          { audio: "I don't like salty fish. Yuck!", prompt: "Does the speaker like fish?", options: [{ name: "Likes fish", icon: "👍🐟" }, { name: "Doesn't like fish", icon: "👎🐟" }], correct: 1 },
          { audio: "We like chocolate ice cream on warm days!", prompt: "Do they like ice cream?", options: [{ name: "Yes, like ice cream", icon: "👍🍦" }, { name: "No, don't like", icon: "👎🍦" }], correct: 0 }
        ]
      }
    ],

    reading: [
      {
        id: "u7_r1",
        title: "Food Word Matching",
        desc: "Read the food word card and choose the matching grocery item.",
        exercises: [
          { text: "APPLE", prompt: "Read: APPLE", options: [{ name: "Apple", icon: "🍎" }, { name: "Banana", icon: "🍌" }, { name: "Bread", icon: "🍞" }], correct: 0 },
          { text: "BANANA", prompt: "Read: BANANA", options: [{ name: "Carrot", icon: "🥕" }, { name: "Banana", icon: "🍌" }, { name: "Cheese", icon: "🧀" }], correct: 1 },
          { text: "CHEESE", prompt: "Read: CHEESE", options: [{ name: "Milk", icon: "🥛" }, { name: "Juice", icon: "🧃" }, { name: "Cheese", icon: "🧀" }], correct: 2 },
          { text: "BREAD", prompt: "Read: BREAD", options: [{ name: "Bread", icon: "🍞" }, { name: "Apple", icon: "🍎" }, { name: "Cookie", icon: "🍪" }], correct: 0 },
          { text: "MILK", prompt: "Read: MILK", options: [{ name: "Carrot", icon: "🥕" }, { name: "Milk", icon: "🥛" }, { name: "Banana", icon: "🍌" }], correct: 1 }
        ]
      },
      {
        id: "u7_r2",
        title: "Read the Shopping List",
        desc: "Read the written shopping list and identify items.",
        exercises: [
          { text: "LIST: 1. Apples  2. Bread  3. Milk", prompt: "Which item is on the list?", options: ["Apples", "Ice cream", "Bicycle"], correct: 0 },
          { text: "LIST: 1. Bananas  2. Cheese  3. Juice", prompt: "Which item is on the list?", options: ["Pants", "Cheese", "Pencil"], correct: 1 },
          { text: "LIST: 1. Carrots  2. Chicken  3. Pineapple", prompt: "Which fruit is on the list?", options: ["Apple", "Orange", "Pineapple"], correct: 2 },
          { text: "LIST: 1. Cookies  2. Yogurt  3. Meat", prompt: "Which sweet treat is on the list?", options: ["Cookies", "Salad", "Shoes"], correct: 0 },
          { text: "LIST: 1. Oranges  2. Rice  3. Eggs", prompt: "Which citrus fruit is on the list?", options: ["Lemon", "Oranges", "Apple"], correct: 1 }
        ]
      },
      {
        id: "u7_r3",
        title: "Complete There Is/Are",
        desc: "Choose between 'There is' and 'There are' for groceries.",
        exercises: [
          { text: "______ an apple in the basket. (🍎)", options: ["There is", "There are"], correct: 0 },
          { text: "______ three bananas on the counter. (🍌🍌🍌)", options: ["There is", "There are"], correct: 1 },
          { text: "______ a loaf of fresh bread. (🍞)", options: ["There is", "There are"], correct: 0 },
          { text: "______ four carrots in the bag. (🥕🥕🥕🥕)", options: ["There is", "There are"], correct: 1 },
          { text: "______ two cartons of cold milk. (🥛🥛)", options: ["There is", "There are"], correct: 1 }
        ]
      },
      {
        id: "u7_r4",
        title: "Read the Food Labels",
        desc: "Match food packaging labels to grocery items.",
        exercises: [
          { text: "100% ORANGE JUICE", prompt: "What product is this?", options: ["Orange Juice", "Milk", "Yogurt"], correct: 0 },
          { text: "FRESH WHOLE MILK", prompt: "What product is this?", options: ["Soda", "Whole Milk", "Water"], correct: 1 },
          { text: "CHEDDAR CHEESE", prompt: "What product is this?", options: ["Butter", "Cookies", "Cheddar Cheese"], correct: 2 },
          { text: "WHOLE WHEAT BREAD", prompt: "What product is this?", options: ["Wheat Bread", "Cake", "Pizza"], correct: 0 },
          { text: "STRAWBERRY YOGURT", prompt: "What product is this?", options: ["Cheese", "Strawberry Yogurt", "Ice cream"], correct: 1 }
        ]
      },
      {
        id: "u7_r5",
        title: "Find the /p/ Sound",
        desc: "Review food items starting with /p/ (Pineapple, Pizza, Pear, Peach, Plate).",
        exercises: [
          { prompt: "Which fruit starts with /p/?", options: [{ name: "Pineapple", icon: "🍍" }, { name: "Banana", icon: "🍌" }, { name: "Carrot", icon: "🥕" }], correct: 0 },
          { prompt: "Which Italian food starts with /p/?", options: [{ name: "Bread", icon: "🍞" }, { name: "Pizza", icon: "🍕" }, { name: "Soup", icon: "🥣" }], correct: 1 },
          { prompt: "Which sweet fruit starts with /p/?", options: [{ name: "Apple", icon: "🍎" }, { name: "Orange", icon: "🍊" }, { name: "Pear", icon: "🍐" }], correct: 2 },
          { prompt: "Which dish starts with /p/?", options: [{ name: "Plate", icon: "🍽️" }, { name: "Fork", icon: "🍴" }, { name: "Cup", icon: "🥛" }], correct: 0 },
          { prompt: "Which soft fruit starts with /p/?", options: [{ name: "Lemon", icon: "🍋" }, { name: "Peach", icon: "🍑" }, { name: "Grape", icon: "🍇" }], correct: 1 }
        ]
      },
      {
        id: "u7_r6",
        title: "Supermarket Story Comprehension",
        desc: "Read the story of a shopping trip with Luna and Daddy.",
        exercises: [
          { text: "Luna and Daddy push a big silver shopping cart. Luna holds the shopping list.", prompt: "Who holds the shopping list?", options: ["Luna", "Bili", "The cashier"], correct: 0 },
          { text: "In the fruit aisle, Luna picks five red apples and three yellow bananas.", prompt: "What fruits did Luna pick?", options: ["Apples and bananas", "Watermelon", "Grapes"], correct: 0 },
          { text: "Daddy picks fresh bread from the bakery. It smells delicious!", prompt: "Where does Daddy get the bread?", options: ["In the freezer", "From the bakery", "Outside"], correct: 1 },
          { text: "At checkout, the cashier scans the items: 'Beep, beep!'", prompt: "What sound does the scanner make?", options: ["Moo moo", "Beep beep", "Quack quack"], correct: 1 },
          { text: "Daddy pays and Luna carries a small paper bag of apples.", prompt: "What does Luna carry?", options: ["A bag of apples", "A heavy box", "A chair"], correct: 0 }
        ]
      }
    ],

    writing: [
      {
        id: "u7_w1",
        title: "Build Food Words",
        desc: "Unscramble the letters to spell food items.",
        exercises: [
          { target: "APPLE", letters: ["P", "A", "L", "P", "E"], icon: "🍎", hint: "Red crispy fruit" },
          { target: "BREAD", letters: ["D", "B", "R", "A", "E"], icon: "🍞", hint: "Baked for toast" },
          { target: "MILK", letters: ["K", "M", "L", "I"], icon: "🥛", hint: "Cold white drink" },
          { target: "JUICE", letters: ["E", "J", "U", "I", "C"], icon: "🧃", hint: "Sweet fruit beverage" },
          { target: "CHEESE", letters: ["E", "C", "H", "S", "E", "E"], icon: "🧀", hint: "Yellow dairy food" }
        ]
      },
      {
        id: "u7_w2",
        title: "Missing Letters",
        desc: "Fill in the missing letter for each food word.",
        exercises: [
          { target: "AP_LE", missing: "P", full: "APPLE", options: ["P", "B", "T"], icon: "🍎" },
          { target: "B_NANA", missing: "A", full: "BANANA", options: ["A", "O", "E"], icon: "🍌" },
          { target: "C_RROT", missing: "A", full: "CARROT", options: ["A", "E", "U"], icon: "🥕" },
          { target: "M_LK", missing: "I", full: "MILK", options: ["I", "E", "A"], icon: "🥛" },
          { target: "BR_AD", missing: "E", full: "BREAD", options: ["E", "A", "O"], icon: "🍞" }
        ]
      },
      {
        id: "u7_w3",
        title: "Label the Supermarket",
        desc: "Type or select the correct label for each grocery item.",
        exercises: [
          { prompt: "Label: 🍎", answer: "apple", accepted: ["apple", "Apple", "an apple"] },
          { prompt: "Label: 🍌", answer: "banana", accepted: ["banana", "Banana", "a banana"] },
          { prompt: "Label: 🍞", answer: "bread", accepted: ["bread", "Bread"] },
          { prompt: "Label: 🥛", answer: "milk", accepted: ["milk", "Milk"] },
          { prompt: "Label: 🧀", answer: "cheese", accepted: ["cheese", "Cheese"] }
        ]
      },
      {
        id: "u7_w4",
        title: "Complete Like/Don’t Like",
        desc: "Write 'I like' or 'I do not like' to express preferences.",
        exercises: [
          { sentence: "______ apples! They are sweet. (🍎)", answer: "I like", accepted: ["I like", "i like"] },
          { sentence: "______ bananas! They are delicious. (🍌)", answer: "I like", accepted: ["I like", "i like"] },
          { sentence: "______ warm milk before bed. (🥛)", answer: "I like", accepted: ["I like", "i like"] },
          { sentence: "______ spicy peppers. (🌶️)", answer: "I do not like", accepted: ["I do not like", "I don't like", "i do not like"] },
          { sentence: "______ chocolate cookies. (🍪)", answer: "I like", accepted: ["I like", "i like"] }
        ]
      },
      {
        id: "u7_w5",
        title: "Write My Shopping List",
        desc: "Complete your grocery list with food words.",
        exercises: [
          { sentence: "1. Two red ______ (🍎)", answer: "apples", accepted: ["apples", "apple"] },
          { sentence: "2. Three yellow ______ (🍌)", answer: "bananas", accepted: ["bananas", "banana"] },
          { sentence: "3. One loaf of ______ (🍞)", answer: "bread", accepted: ["bread"] },
          { sentence: "4. One bottle of ______ (🥛)", answer: "milk", accepted: ["milk"] },
          { sentence: "5. A block of ______ (🧀)", answer: "cheese", accepted: ["cheese"] }
        ]
      },
      {
        id: "u7_w6",
        title: "Organize the Food Categories",
        desc: "Classify items into Fruits or Dairy.",
        exercises: [
          { sentence: "Apple is a ______ . (Fruit / Dairy)", answer: "Fruit", accepted: ["Fruit", "fruit"] },
          { sentence: "Milk is ______ . (Fruit / Dairy)", answer: "Dairy", accepted: ["Dairy", "dairy"] },
          { sentence: "Banana is a ______ . (Fruit / Dairy)", answer: "Fruit", accepted: ["Fruit", "fruit"] },
          { sentence: "Cheese is ______ . (Fruit / Dairy)", answer: "Dairy", accepted: ["Dairy", "dairy"] },
          { sentence: "Pineapple is a ______ . (Fruit / Dairy)", answer: "Fruit", accepted: ["Fruit", "fruit"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u7_s1",
        title: "Name the Food",
        desc: "Pronounce grocery items clearly.",
        exercises: [
          { prompt: "Say: Apple", target: "apple", audio: "Apple", icon: "🍎" },
          { prompt: "Say: Banana", target: "banana", audio: "Banana", icon: "🍌" },
          { prompt: "Say: Bread", target: "bread", audio: "Bread", icon: "🍞" },
          { prompt: "Say: Milk", target: "milk", audio: "Milk", icon: "🥛" },
          { prompt: "Say: Cheese", target: "cheese", audio: "Cheese", icon: "🧀" }
        ]
      },
      {
        id: "u7_s2",
        title: "Do You Like It?",
        desc: "Answer the food preference question: 'Yes, I like it!'",
        exercises: [
          { prompt: "Do you like apples? (🍎)", target: "yes i like apples", audio: "Yes, I like apples" },
          { prompt: "Do you like bananas? (🍌)", target: "yes i like bananas", audio: "Yes, I like bananas" },
          { prompt: "Do you like milk? (🥛)", target: "yes i like milk", audio: "Yes, I like milk" },
          { prompt: "Do you like bread? (🍞)", target: "yes i like bread", audio: "Yes, I like bread" },
          { prompt: "Do you like cookies? (🍪)", target: "yes i like cookies", audio: "Yes, I like cookies" }
        ]
      },
      {
        id: "u7_s3",
        title: "Describe the Food",
        desc: "Speak about taste and colors of food.",
        exercises: [
          { prompt: "Say: 'The apple is red and sweet.'", target: "the apple is red and sweet" },
          { prompt: "Say: 'The banana is yellow.'", target: "the banana is yellow" },
          { prompt: "Say: 'The milk is cold.'", target: "the milk is cold" },
          { prompt: "Say: 'The bread is warm.'", target: "the bread is warm" },
          { prompt: "Say: 'The carrot is crunchy.'", target: "the carrot is crunchy" }
        ]
      },
      {
        id: "u7_s4",
        title: "Count the Products",
        desc: "Count groceries aloud from 1 to 5.",
        exercises: [
          { prompt: "Say: 'One pineapple'", target: "one pineapple" },
          { prompt: "Say: 'Two apples'", target: "two apples" },
          { prompt: "Say: 'Three bananas'", target: "three bananas" },
          { prompt: "Say: 'Four carrots'", target: "four carrots" },
          { prompt: "Say: 'Five cookies'", target: "five cookies" }
        ]
      },
      {
        id: "u7_s5",
        title: "What Is in the Basket?",
        desc: "Describe what is in your shopping basket.",
        exercises: [
          { prompt: "Say: 'There is milk in my basket.'", target: "there is milk in my basket" },
          { prompt: "Say: 'There are apples in my basket.'", target: "there are apples in my basket" },
          { prompt: "Say: 'There is bread in my basket.'", target: "there is bread in my basket" },
          { prompt: "Say: 'There is cheese in my basket.'", target: "there is cheese in my basket" },
          { prompt: "Say: 'My shopping basket is full!'", target: "my shopping basket is full" }
        ]
      },
      {
        id: "u7_s6",
        title: "My Shopping Experience",
        desc: "Deliver a 3-sentence presentation about grocery shopping.",
        exercises: [
          { prompt: "Sentence 1: 'I go to the supermarket with Daddy.'", target: "i go to the supermarket with daddy" },
          { prompt: "Sentence 2: 'We buy fresh apples and sweet milk.'", target: "we buy fresh apples and sweet milk" },
          { prompt: "Sentence 3: 'We pay at the register.'", target: "we pay at the register" },
          { prompt: "Sentence 4: 'I help carry the bags.'", target: "i help carry the bags" },
          { prompt: "Sentence 5: 'Eating healthy food is great!'", target: "eating healthy food is great" }
        ]
      }
    ],

    videos: [
      {
        title: "Shopping for Food Song | British Council LearnEnglish Kids",
        videoId: "6-xfsGMKC9M",
        embedUrl: "https://www.youtube-nocookie.com/embed/6-xfsGMKC9M",
        thumbnail: "assets/toddlers_hd/toddlers_cont_house.png",
        description: "Sing along through the supermarket aisles: fruit, dairy, bread and healthy veggies for dinner!",
        checkpoints: [
          { time: 12, question: "What fruit did they buy first?", options: ["Apples", "Ice cream", "Hot dog"], correct: 0 },
          { time: 30, question: "Where do you pay for the food?", options: ["At the cash register", "In the parking lot", "In bed"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "Supermarket Shopping Mission",
      story: "Mommy gave Leo and Luna a grocery shopping list. Navigate the 12 aisles of Bilikids Supermarket to collect every ingredient before dinner time!",
      levels: [
        { level: 1, title: "Find the Apple", mission: "Pick 3 shiny red apples from the fruit display.", targetCount: 3, itemType: "apple", icon: "🍎" },
        { level: 2, title: "Collect the Banana", mission: "Grab a bunch of 4 yellow bananas.", targetCount: 4, itemType: "banana", icon: "🍌" },
        { level: 3, title: "Choose the Bread", mission: "Pick a warm loaf of whole grain bread.", targetCount: 1, itemType: "bread", icon: "🍞" },
        { level: 4, title: "Find the Carrot", mission: "Collect 5 crunchy orange carrots.", targetCount: 5, itemType: "carrot", icon: "🥕" },
        { level: 5, title: "Collect Cheese and Chicken", mission: "Get 1 block of cheese and 1 fresh chicken.", targetCount: 2, itemType: "dairy_meat", icon: "🧀" },
        { level: 6, title: "Choose Cookies and Ice Cream", mission: "Select 1 box of cookies and 1 strawberry ice cream tub.", targetCount: 2, itemType: "treats", icon: "🍦" },
        { level: 7, title: "Find Juice and Milk", mission: "Gather 2 cartons of milk and 2 apple juices.", targetCount: 4, itemType: "drinks", icon: "🥛" },
        { level: 8, title: "Collect Meat and Orange", mission: "Pick fresh steak and 3 juicy oranges.", targetCount: 4, itemType: "produce", icon: "🍊" },
        { level: 9, title: "Find Pineapple and Yogurt", mission: "Add 1 sweet pineapple and 2 peach yogurts to cart.", targetCount: 3, itemType: "fruit_yogurt", icon: "🍍" },
        { level: 10, title: "Count the Products", mission: "Check off your list: count 10 items in your cart.", targetCount: 10, itemType: "count", icon: "🔢" },
        { level: 11, title: "Complete the Shopping List", mission: "Review and stamp every item on the clipboard.", targetCount: 5, itemType: "list", icon: "📋" },
        { level: 12, title: "Checkout Challenge", mission: "Scan all groceries at the register: Beep beep!", targetCount: 1, itemType: "register", icon: "💳" }
      ]
    },

    finalChallenge: {
      title: "Supermarket Hero Quest",
      story: "Complete 10 fun grocery challenges to earn your Supermarket Helper Badge!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the milk?'", options: ["🥛", "🍞", "🍎"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'BANANA'", options: ["🍌", "🥕", "🧀"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: A P P L _", answer: "E" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'I like apples'", target: "i like apples" },
        { step: 5, type: "phonics", prompt: "Which fruit starts with /p/?", options: ["Pineapple", "Banana", "Orange"], correct: 0 },
        { step: 6, type: "math_vocab", prompt: "Count carrots: 🥕 🥕 🥕 🥕", options: ["3", "4", "5"], correct: 1 },
        { step: 7, type: "writing", prompt: "Unscramble: B R E A D", answer: "BREAD" },
        { step: 8, type: "reading", prompt: "Choose: 'There is a bottle of ______ (🥛)'", options: ["milk", "hat", "table"], correct: 0 },
        { step: 9, type: "listening", prompt: "Listen: 'Put the bananas in the cart!'", options: ["🛒🍌", "😴", "🚗"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'Shopping is fun and healthy!'", target: "shopping is fun and healthy" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 08: DAILY ACTIVITIES
  // ==========================================================================
  {
    id: 8,
    code: "unit_08",
    title: "Daily Activities",
    subtitle: "Routines, Day and Night, Feelings & The /s/ Sound",
    icon: "⏰",
    themeColor: "#8b5cf6",
    themeLight: "#f5f3ff",
    structures: ["Present Simple", "Verb to be"],
    functions: ["Identifying times of day", "Identifying feelings", "Following instructions", "Counting", "Identifying elements in a picture", "Identifying numbers", "Identifying the /s/ sound"],
    vocabulary: ["Day", "Daytime", "Eat", "Flower", "Hungry", "Ladybug", "Moon", "Night", "Play", "Rabbit", "Sleep", "Sleepy", "Star", "Sun", "Thirsty", "Colors", "Numbers 1–12"],
    phonicsFocus: "/s/ Sound: Sun, Star, Sleep, Sleepy, Smile",

    explore: [
      { name: "Daytime", icon: "☀️", fact: "The golden sun shines bright in the day. Time to learn and play!", audio: "day", color: "Sky blue", shape: "Daylight", count: 1 },
      { name: "Nighttime", icon: "🌙", fact: "The calm silver moon and twinkling stars watch as we dream.", audio: "night", color: "Dark blue", shape: "Crescent", count: 1 },
      { name: "Sun", icon: "🌞", fact: "Warm sun rises in the morning and gives light to plants and animals.", audio: "sun", color: "Yellow", shape: "Circle", count: 1 },
      { name: "Stars", icon: "⭐", fact: "Sparkling stars twinkle high in the velvet night sky.", audio: "star", color: "Yellow", shape: "Star", count: 5 },
      { name: "Eat Breakfast", icon: "🥣", fact: "A delicious morning bowl of cereal and fruit fuels our adventures.", audio: "eat", color: "Orange", shape: "Bowl", count: 1 },
      { name: "Play Time", icon: "⚽", fact: "Running, kicking balls and laughing with friends in daytime.", audio: "play", color: "Green", shape: "Ball", count: 1 },
      { name: "Sleep Time", icon: "😴", fact: "Tucking into a soft bed to rest our bodies for tomorrow.", audio: "sleep", color: "Blue", shape: "Bed", count: 1 },
      { name: "Ladybug", icon: "🐞", fact: "A cute red ladybug with black spots crawling on a green leaf.", audio: "ladybug", color: "Red & Black", shape: "Insect", count: 1 }
    ],

    listening: [
      {
        id: "u8_l1",
        title: "Day or Night?",
        desc: "Listen to the description and choose whether it happens in the Day or at Night.",
        exercises: [
          { audio: "The bright yellow sun is shining in the sky.", prompt: "Day or Night?", options: [{ name: "Daytime ☀️", icon: "☀️" }, { name: "Nighttime 🌙", icon: "🌙" }], correct: 0 },
          { audio: "The moon and stars twinkle as we sleep in our beds.", prompt: "Day or Night?", options: [{ name: "Daytime ☀️", icon: "☀️" }, { name: "Nighttime 🌙", icon: "🌙" }], correct: 1 },
          { audio: "We eat breakfast and pack our backpacks for school.", prompt: "Day or Night?", options: [{ name: "Daytime ☀️", icon: "☀️" }, { name: "Nighttime 🌙", icon: "🌙" }], correct: 0 },
          { audio: "Mommy reads a quiet bedtime story and turns off the lamp.", prompt: "Day or Night?", options: [{ name: "Daytime ☀️", icon: "☀️" }, { name: "Nighttime 🌙", icon: "🌙" }], correct: 1 },
          { audio: "Children play soccer outside on the green grass.", prompt: "Day or Night?", options: [{ name: "Daytime ☀️", icon: "☀️" }, { name: "Nighttime 🌙", icon: "🌙" }], correct: 0 }
        ]
      },
      {
        id: "u8_l2",
        title: "Listen and Choose the Activity",
        desc: "Listen to the daily action and pick the matching icon.",
        exercises: [
          { audio: "Eat a healthy lunch", prompt: "Find: Eat", options: [{ name: "Eat", icon: "🥪🍽️" }, { name: "Sleep", icon: "😴" }, { name: "Run", icon: "🏃" }], correct: 0 },
          { audio: "Go to sleep and rest", prompt: "Find: Sleep", options: [{ name: "Play", icon: "⚽" }, { name: "Sleep", icon: "🛌😴" }, { name: "Read", icon: "📖" }], correct: 1 },
          { audio: "Play with toys with friends", prompt: "Find: Play", options: [{ name: "Sleep", icon: "😴" }, { name: "Eat", icon: "🥣" }, { name: "Play", icon: "🧸⚽" }], correct: 2 },
          { audio: "Wake up and stretch your arms", prompt: "Find: Wake up", options: [{ name: "Wake up", icon: "⏰🥱" }, { name: "Sleep", icon: "😴" }, { name: "Eat", icon: "🍽️" }], correct: 0 },
          { audio: "Brush your teeth before bed", prompt: "Find: Brush teeth", options: [{ name: "Play ball", icon: "⚽" }, { name: "Brush teeth", icon: "🪥✨" }, { name: "Run", icon: "🏃" }], correct: 1 }
        ]
      },
      {
        id: "u8_l3",
        title: "Follow the Daily Routine",
        desc: "Listen to sequence steps: Morning, Afternoon, Evening.",
        exercises: [
          { audio: "Step 1: Wake up in the morning and wash your face.", prompt: "Morning step:", options: [{ name: "Wash face", icon: "🧼🚿" }, { name: "Go to bed", icon: "🛌" }, { name: "Look at stars", icon: "⭐" }], correct: 0 },
          { audio: "Step 2: Eat a yummy bowl of cereal for breakfast.", prompt: "Breakfast step:", options: [{ name: "Eat cereal", icon: "🥣" }, { name: "Play video game", icon: "🎮" }, { name: "Sleep", icon: "😴" }], correct: 0 },
          { audio: "Step 3: In the afternoon, play outside in the sunshine.", prompt: "Afternoon step:", options: [{ name: "Play outside", icon: "☀️⚽" }, { name: "Sleep in bed", icon: "🛌" }, { name: "Midnight snack", icon: "🥪" }], correct: 0 },
          { audio: "Step 4: At night, put on cozy pajamas.", prompt: "Night step:", options: [{ name: "Put on pajamas", icon: "👕🛌" }, { name: "Go to school", icon: "🏫" }, { name: "Swim in pool", icon: "🏊" }], correct: 0 },
          { audio: "Step 5: Close your eyes and dream happy dreams.", prompt: "Bedtime step:", options: [{ name: "Close eyes & dream", icon: "😴✨" }, { name: "Play trumpet", icon: "🎺" }, { name: "Ride bicycle", icon: "🚲" }], correct: 0 }
        ]
      },
      {
        id: "u8_l4",
        title: "Identify the Feelings",
        desc: "Listen to physical sensations: hungry, thirsty, sleepy.",
        exercises: [
          { audio: "My tummy is rumbling! I am HUNGRY. I need lunch.", prompt: "How do they feel?", options: [{ name: "Hungry", icon: "🤤🥪" }, { name: "Sleepy", icon: "🥱" }, { name: "Cold", icon: "🥶" }], correct: 0 },
          { audio: "My throat is dry from running. I am THIRSTY. Water, please!", prompt: "How do they feel?", options: [{ name: "Angry", icon: "😠" }, { name: "Thirsty", icon: "🥛💧" }, { name: "Full", icon: "🤰" }], correct: 1 },
          { audio: "I am yawning so much... I am SLEEPY. Good night.", prompt: "How do they feel?", options: [{ name: "Excited", icon: "🤩" }, { name: "Sad", icon: "😢" }, { name: "Sleepy", icon: "🥱😴" }], correct: 2 },
          { audio: "I had a big snack. I am not hungry anymore!", prompt: "Are they hungry?", options: [{ name: "Not hungry", icon: "😊" }, { name: "Very hungry", icon: "🤤" }], correct: 0 },
          { audio: "Drinking cold water feels great! Not thirsty now.", prompt: "Are they thirsty?", options: [{ name: "Thirsty", icon: "🥛" }, { name: "Happy and refreshed", icon: "😁💧" }], correct: 1 }
        ]
      },
      {
        id: "u8_l5",
        title: "Listen and Count",
        desc: "Count nighttime stars and daytime flowers.",
        exercises: [
          { audio: "I see three twinkling stars in the sky.", prompt: "Count: 3 stars", options: [{ name: "2 Stars", icon: "⭐⭐" }, { name: "3 Stars", icon: "⭐⭐⭐" }, { name: "4 Stars", icon: "⭐⭐⭐⭐" }], correct: 1 },
          { audio: "There are five colorful flowers in the garden.", prompt: "Count: 5 flowers", options: [{ name: "5 Flowers", icon: "🌸🌸🌸🌸🌸" }, { name: "3 Flowers", icon: "🌸🌸🌸" }, { name: "6 Flowers", icon: "🌸🌸🌸🌸🌸🌸" }], correct: 0 },
          { audio: "Look at the four little ladybugs on the leaf.", prompt: "Count: 4 ladybugs", options: [{ name: "2 Ladybugs", icon: "🐞🐞" }, { name: "3 Ladybugs", icon: "🐞🐞🐞" }, { name: "4 Ladybugs", icon: "🐞🐞🐞🐞" }], correct: 2 },
          { audio: "There is one bright round sun.", prompt: "Count: 1 sun", options: [{ name: "1 Sun", icon: "☀️" }, { name: "2 Suns", icon: "☀️☀️" }, { name: "3 Suns", icon: "☀️☀️☀️" }], correct: 0 },
          { audio: "Two fluffy rabbits hopping by.", prompt: "Count: 2 rabbits", options: [{ name: "1 Rabbit", icon: "🐰" }, { name: "2 Rabbits", icon: "🐰🐰" }, { name: "4 Rabbits", icon: "🐰🐰🐰🐰" }], correct: 1 }
        ]
      },
      {
        id: "u8_l6",
        title: "Daily Instructions Challenge",
        desc: "Listen and act out routine instructions.",
        exercises: [
          { audio: "Stretch your arms and say: 'Good morning!'", prompt: "Action: Good morning stretch", options: [{ name: "Stretch & Good Morning", icon: "🥱☀️" }, { name: "Sleep", icon: "😴" }, { name: "Eat lunch", icon: "🥪" }], correct: 0 },
          { audio: "Wash your hands with warm water and soap.", prompt: "Action: Wash hands", options: [{ name: "Wash hands", icon: "🧼🖐️" }, { name: "Kick ball", icon: "⚽" }, { name: "Read book", icon: "📖" }], correct: 0 },
          { audio: "Sit down at the table and eat your soup.", prompt: "Action: Eat soup", options: [{ name: "Run outside", icon: "🏃" }, { name: "Eat soup", icon: "🥣🍽️" }, { name: "Sleep", icon: "🛌" }], correct: 1 },
          { audio: "Tidy up your toys into the toy box.", prompt: "Action: Tidy toys", options: [{ name: "Tidy toys", icon: "📦🧸" }, { name: "Throw toys", icon: "💥" }, { name: "Jump", icon: "🦘" }], correct: 0 },
          { audio: "Yawn, close your eyes and say: 'Good night!'", prompt: "Action: Say good night", options: [{ name: "Dance", icon: "💃" }, { name: "Good night", icon: "🌙😴" }, { name: "Eat", icon: "🍽️" }], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u8_r1",
        title: "Match Day and Night Words",
        desc: "Read the word and select the matching time of day graphic.",
        exercises: [
          { text: "SUN", prompt: "Read: SUN", options: [{ name: "Sun", icon: "☀️" }, { name: "Moon", icon: "🌙" }, { name: "Star", icon: "⭐" }], correct: 0 },
          { text: "MOON", prompt: "Read: MOON", options: [{ name: "Flower", icon: "🌸" }, { name: "Moon", icon: "🌙" }, { name: "Sun", icon: "☀️" }], correct: 1 },
          { text: "STAR", prompt: "Read: STAR", options: [{ name: "Rabbit", icon: "🐰" }, { name: "Ladybug", icon: "🐞" }, { name: "Star", icon: "⭐" }], correct: 2 },
          { text: "DAY", prompt: "Read: DAY", options: [{ name: "Day", icon: "☀️" }, { name: "Night", icon: "🌙" }, { name: "Bed", icon: "🛏️" }], correct: 0 },
          { text: "NIGHT", prompt: "Read: NIGHT", options: [{ name: "Day", icon: "☀️" }, { name: "Night", icon: "🌙" }, { name: "Sun", icon: "☀️" }], correct: 1 }
        ]
      },
      {
        id: "u8_r2",
        title: "Read the Daily Routine",
        desc: "Read short action sentences.",
        exercises: [
          { text: "I eat breakfast in the morning. (🥣)", prompt: "What do you do?", options: ["Eat breakfast", "Sleep", "Play soccer"], correct: 0 },
          { text: "I play with my friends in the afternoon. (⚽)", prompt: "What do you do?", options: ["Wash dishes", "Play with friends", "Sleep"], correct: 1 },
          { text: "I sleep in my bed at night. (😴)", prompt: "What do you do at night?", options: ["Go to school", "Eat breakfast", "Sleep in bed"], correct: 2 },
          { text: "I drink water when I am thirsty. (🥛)", prompt: "What do you drink?", options: ["Water", "Paint", "Soap"], correct: 0 },
          { text: "I smile when I am happy! (😊)", prompt: "What do you do when happy?", options: ["Cry", "Smile", "Sleep"], correct: 1 }
        ]
      },
      {
        id: "u8_r3",
        title: "Complete the Sentences",
        desc: "Fill in the blank with routine vocabulary.",
        exercises: [
          { text: "In the morning, the yellow ______ rises. (☀️)", options: ["sun", "moon", "star"], correct: 0 },
          { text: "At night, we see the white ______ . (🌙)", options: ["sun", "moon", "flower"], correct: 1 },
          { text: "When I am hungry, I ______ food. (🥪)", options: ["sleep", "run", "eat"], correct: 2 },
          { text: "When I am tired, I go to ______ . (🛏️)", options: ["sleep", "jump", "draw"], correct: 0 },
          { text: "In the garden, I see a cute ______ . (🐞)", options: ["chair", "ladybug", "table"], correct: 1 }
        ]
      },
      {
        id: "u8_r4",
        title: "Find the /s/ Sound",
        desc: "Identify words starting with the sound /s/ (Sun, Star, Sleep, Sleepy, Smile).",
        exercises: [
          { prompt: "Which sky object starts with /s/?", options: [{ name: "Sun", icon: "☀️" }, { name: "Moon", icon: "🌙" }, { name: "Cloud", icon: "☁️" }], correct: 0 },
          { prompt: "Which night object starts with /s/?", options: [{ name: "Bed", icon: "🛏️" }, { name: "Star", icon: "⭐" }, { name: "Pajamas", icon: "👕" }], correct: 1 },
          { prompt: "Which resting action starts with /s/?", options: [{ name: "Eat", icon: "🍽️" }, { name: "Run", icon: "🏃" }, { name: "Sleep", icon: "😴" }], correct: 2 },
          { prompt: "Which happy expression starts with /s/?", options: [{ name: "Smile", icon: "😁" }, { name: "Cry", icon: "😢" }, { name: "Frown", icon: "🙁" }], correct: 0 },
          { prompt: "Which feeling starts with /s/?", options: [{ name: "Hungry", icon: "🤤" }, { name: "Sleepy", icon: "🥱" }, { name: "Thirsty", icon: "🥛" }], correct: 1 }
        ]
      },
      {
        id: "u8_r5",
        title: "Read the Illustrated Sequence",
        desc: "Put the 3 daily scenes in the correct timeline.",
        exercises: [
          { text: "1. Morning: Eat breakfast  ➔  2. Afternoon: Play  ➔  3. Night: Sleep", prompt: "What happens first in the day?", options: ["Morning: Breakfast", "Night: Sleep", "Afternoon: Play"], correct: 0 },
          { text: "After playing in the afternoon, evening comes and we have dinner.", prompt: "When do we have dinner?", options: ["Midnight", "Evening", "Sunrise"], correct: 1 },
          { text: "Before sleeping, brush your teeth clean with toothbrush.", prompt: "What do you do before bed?", options: ["Run in street", "Brush teeth", "Eat candy"], correct: 1 },
          { text: "Morning alarm rings: Time to wake up and start a new day!", prompt: "What does the alarm tell you?", options: ["Wake up", "Stay in bed all day", "Eat dinner"], correct: 0 },
          { text: "Stars shine bright when it is completely dark outside.", prompt: "When do stars shine bright?", options: ["At noon", "When it is dark night", "At breakfast"], correct: 1 }
        ]
      },
      {
        id: "u8_r6",
        title: "Story: A Day with the Rabbit",
        desc: "Read about a friendly rabbit's daily routine.",
        exercises: [
          { text: "Little Rabbit wakes up at sunrise. He hops to the garden to eat sweet carrots.", prompt: "What does Rabbit eat for breakfast?", options: ["Sweet carrots", "Cookies", "Bread"], correct: 0 },
          { text: "In the afternoon, Rabbit plays with a friendly ladybug on a purple flower.", prompt: "Who does Rabbit play with?", options: ["A wolf", "A friendly ladybug", "A bear"], correct: 1 },
          { text: "Rabbit drinks fresh water from the river because he is thirsty.", prompt: "Why does Rabbit drink water?", options: ["He is angry", "He is cold", "He is thirsty"], correct: 2 },
          { text: "When the silver moon rises, Rabbit yawns. He is very sleepy.", prompt: "How does Rabbit feel when the moon rises?", options: ["Sleepy", "Hungry", "Loud"], correct: 0 },
          { text: "Rabbit snuggles into his warm burrow under the stars. 'Good night, world!'", prompt: "Where does Rabbit sleep?", options: ["In a car", "In his warm burrow", "On a chair"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u8_w1",
        title: "Build Daily Words",
        desc: "Unscramble the letters to spell routine words.",
        exercises: [
          { target: "SUN", letters: ["N", "S", "U"], icon: "☀️", hint: "Shines in the day" },
          { target: "MOON", letters: ["O", "M", "N", "O"], icon: "🌙", hint: "Shines at night" },
          { target: "STAR", letters: ["R", "S", "T", "A"], icon: "⭐", hint: "Twinkles in the sky" },
          { target: "EAT", letters: ["T", "E", "A"], icon: "🥪", hint: "Chew food" },
          { target: "PLAY", letters: ["Y", "P", "A", "L"], icon: "⚽", hint: "Have fun with toys" }
        ]
      },
      {
        id: "u8_w2",
        title: "Missing Letters",
        desc: "Fill in the missing letter for each routine word.",
        exercises: [
          { target: "S_N", missing: "U", full: "SUN", options: ["U", "A", "O"], icon: "☀️" },
          { target: "M_ON", missing: "O", full: "MOON", options: ["O", "E", "I"], icon: "🌙" },
          { target: "ST_R", missing: "A", full: "STAR", options: ["A", "O", "E"], icon: "⭐" },
          { target: "SL_EP", missing: "E", full: "SLEEP", options: ["E", "A", "I"], icon: "😴" },
          { target: "D_Y", missing: "A", full: "DAY", options: ["A", "O", "E"], icon: "☀️" }
        ]
      },
      {
        id: "u8_w3",
        title: "Label the Day and Night Scene",
        desc: "Type or select the label for each scene element.",
        exercises: [
          { prompt: "Label: ☀️", answer: "sun", accepted: ["sun", "Sun", "the sun"] },
          { prompt: "Label: 🌙", answer: "moon", accepted: ["moon", "Moon", "the moon"] },
          { prompt: "Label: ⭐", answer: "star", accepted: ["star", "Star", "a star"] },
          { prompt: "Label: 🐞", answer: "ladybug", accepted: ["ladybug", "Ladybug"] },
          { prompt: "Label: 🌸", answer: "flower", accepted: ["flower", "Flower"] }
        ]
      },
      {
        id: "u8_w4",
        title: "Order Daily Activities",
        desc: "Number or arrange the sequence: 1. Wake up, 2. Play, 3. Sleep.",
        exercises: [
          { sentence: "Morning comes: I ______ up. (wake / sleep)", answer: "wake", accepted: ["wake", "wake up"] },
          { sentence: "Afternoon comes: I ______ with friends. (play / sleep)", answer: "play", accepted: ["play"] },
          { sentence: "Night comes: I go to ______ . (sleep / run)", answer: "sleep", accepted: ["sleep"] },
          { sentence: "Before eating, I wash my ______ . (hands / shoes)", answer: "hands", accepted: ["hands"] },
          { sentence: "Before sleeping, I brush my ______ . (teeth / hair)", answer: "teeth", accepted: ["teeth"] }
        ]
      },
      {
        id: "u8_w5",
        title: "Complete the Routine Sentences",
        desc: "Finish sentences describing sensations.",
        exercises: [
          { sentence: "I want an apple because I am ______ . (🤤)", answer: "hungry", accepted: ["hungry", "Hungry"] },
          { sentence: "I want water because I am ______ . (🥛)", answer: "thirsty", accepted: ["thirsty", "Thirsty"] },
          { sentence: "I yawn because I am ______ . (🥱)", answer: "sleepy", accepted: ["sleepy", "Sleepy", "tired"] },
          { sentence: "I smile because I am ______ . (😊)", answer: "happy", accepted: ["happy", "Happy"] },
          { sentence: "I close my eyes to ______ . (😴)", answer: "sleep", accepted: ["sleep", "Sleep"] }
        ]
      },
      {
        id: "u8_w6",
        title: "Write My Daily Activity",
        desc: "Write about your favorite daily routine step.",
        exercises: [
          { sentence: "In the daytime, I like to ______ . (play / sleep)", answer: "play", accepted: ["play", "read", "draw", "sing"] },
          { sentence: "My favorite breakfast is ______ . (cereal / fruit / eggs)", answer: "cereal", accepted: ["cereal", "fruit", "eggs", "pancakes", "toast"] },
          { sentence: "At night, I see the ______ and moon.", answer: "stars", accepted: ["stars", "star"] },
          { sentence: "I go to bed at ______ o'clock. (8 / 9)", answer: "eight", accepted: ["eight", "8", "nine", "9"] },
          { sentence: "I have sweet ______ in my bed. (dreams / snacks)", answer: "dreams", accepted: ["dreams", "Dreams"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u8_s1",
        title: "Describe Day and Night",
        desc: "Speak about daytime and nighttime aloud.",
        exercises: [
          { prompt: "Say: 'The sun shines in the day.'", target: "the sun shines in the day", audio: "The sun shines in the day" },
          { prompt: "Say: 'The moon shines at night.'", target: "the moon shines at night", audio: "The moon shines at night" },
          { prompt: "Say: 'Stars twinkle in the sky.'", target: "stars twinkle in the sky" },
          { prompt: "Say: 'Daytime is bright.'", target: "daytime is bright" },
          { prompt: "Say: 'Nighttime is quiet.'", target: "nighttime is quiet" }
        ]
      },
      {
        id: "u8_s2",
        title: "What Do You Do?",
        desc: "Speak about daily activities.",
        exercises: [
          { prompt: "Say: 'I eat breakfast.'", target: "i eat breakfast", audio: "I eat breakfast" },
          { prompt: "Say: 'I play with toys.'", target: "i play with toys", audio: "I play with toys" },
          { prompt: "Say: 'I sleep at night.'", target: "i sleep at night", audio: "I sleep at night" },
          { prompt: "Say: 'I wash my hands.'", target: "i wash my hands" },
          { prompt: "Say: 'I brush my teeth.'", target: "i brush my teeth" }
        ]
      },
      {
        id: "u8_s3",
        title: "How Do You Feel?",
        desc: "Speak about sensations: hungry, thirsty, sleepy.",
        exercises: [
          { prompt: "Say: 'I am hungry.'", target: "i am hungry", audio: "I am hungry" },
          { prompt: "Say: 'I am thirsty.'", target: "i am thirsty", audio: "I am thirsty" },
          { prompt: "Say: 'I am sleepy.'", target: "i am sleepy", audio: "I am sleepy" },
          { prompt: "Say: 'I am happy!'", target: "i am happy" },
          { prompt: "Say: 'I am rested.'", target: "i am rested" }
        ]
      },
      {
        id: "u8_s4",
        title: "Count the Stars",
        desc: "Count stars aloud from 1 to 5.",
        exercises: [
          { prompt: "Say: 'One star'", target: "one star" },
          { prompt: "Say: 'Two stars'", target: "two stars" },
          { prompt: "Say: 'Three stars'", target: "three stars" },
          { prompt: "Say: 'Four stars'", target: "four stars" },
          { prompt: "Say: 'Five stars'", target: "five stars" }
        ]
      },
      {
        id: "u8_s5",
        title: "Describe the Picture",
        desc: "Speak about a scene with sun, flowers, and rabbits.",
        exercises: [
          { prompt: "Say: 'The rabbit is in the garden.'", target: "the rabbit is in the garden" },
          { prompt: "Say: 'The sun is shining bright.'", target: "the sun is shining bright" },
          { prompt: "Say: 'I see a red ladybug.'", target: "i see a red ladybug" },
          { prompt: "Say: 'The flowers are purple.'", target: "the flowers are purple" },
          { prompt: "Say: 'It is a beautiful day.'", target: "it is a beautiful day" }
        ]
      },
      {
        id: "u8_s6",
        title: "My Daily Routine",
        desc: "Deliver a 3-sentence presentation of your daily schedule.",
        exercises: [
          { prompt: "Sentence 1: 'In the morning, I wake up and eat.'", target: "in the morning i wake up and eat" },
          { prompt: "Sentence 2: 'In the afternoon, I play outside.'", target: "in the afternoon i play outside" },
          { prompt: "Sentence 3: 'At night, I sleep peacefully.'", target: "at night i sleep peacefully" },
          { prompt: "Sentence 4: 'I say good night to Mommy.'", target: "i say good night to mommy" },
          { prompt: "Sentence 5: 'Every day is a happy day!'", target: "every day is a happy day" }
        ]
      }
    ],

    videos: [
      {
        title: "This Is the Way We Go to School | LearnEnglish Kids",
        videoId: "fsIb5L0_p6U",
        embedUrl: "https://www.youtube-nocookie.com/embed/fsIb5L0_p6U",
        thumbnail: "assets/toddlers_hd/toddlers_cont_routines.png",
        description: "Wash your face, comb your hair, brush your teeth and get ready for a bright sunny day with friendly characters!",
        checkpoints: [
          { time: 14, question: "What do you do first in the morning?", options: ["Wash your face", "Go to sleep", "Play football"], correct: 0 },
          { time: 32, question: "What do you brush before school?", options: ["Your teeth", "Your shoes", "The wall"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "Day and Night Adventure",
      story: "The sky clock is spinning between day and night! Help small bunny Bella complete her daytime play and nighttime resting routines across 12 levels.",
      levels: [
        { level: 1, title: "Find the Sun", mission: "Wake up the morning sun by tapping through the clouds.", targetCount: 1, itemType: "sun", icon: "☀️" },
        { level: 2, title: "Discover the Moon", mission: "Find the crescent moon rising over the forest.", targetCount: 1, itemType: "moon", icon: "🌙" },
        { level: 3, title: "Collect the Stars", mission: "Gather 5 twinkling stars to light up the night path.", targetCount: 5, itemType: "stars", icon: "⭐" },
        { level: 4, title: "Help the Rabbit Eat", mission: "Feed Bella 3 crunchy carrots for breakfast.", targetCount: 3, itemType: "eat", icon: "🥕" },
        { level: 5, title: "Find the Flower", mission: "Discover 4 colorful blossoms opening in the sunlight.", targetCount: 4, itemType: "flower", icon: "🌸" },
        { level: 6, title: "Discover the Ladybug", mission: "Spot the tiny ladybug crawling on a green leaf.", targetCount: 1, itemType: "ladybug", icon: "🐞" },
        { level: 7, title: "Identify Hungry and Thirsty", mission: "Give food when hungry and fresh water when thirsty.", targetCount: 2, itemType: "needs", icon: "🥣" },
        { level: 8, title: "Organize Daytime Activities", mission: "Sort breakfast, playground soccer, and art into daytime.", targetCount: 3, itemType: "day_sort", icon: "☀️" },
        { level: 9, title: "Organize Night Activities", mission: "Sort pajamas, bedtime story, and sleeping into night.", targetCount: 3, itemType: "night_sort", icon: "🌙" },
        { level: 10, title: "Follow the Daily Instructions", mission: "Brush teeth, wash hands, and say good night.", targetCount: 3, itemType: "actions", icon: "🪥" },
        { level: 11, title: "Find the /s/ Sound", mission: "Tap all /s/ items: Sun, Star, Sleep, Smile.", targetCount: 4, itemType: "phonics", icon: "✨" },
        { level: 12, title: "Complete the Day and Night Mission", mission: "Tuck Bella into her cozy bed and watch the stars twinkle!", targetCount: 1, itemType: "finish", icon: "🛌" }
      ]
    },

    finalChallenge: {
      title: "Daily Routine Master Quest",
      story: "Complete 10 interactive timeline challenges to prove your mastery of daily habits!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the sun?'", options: ["☀️", "🌙", "⭐"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'NIGHT'", options: ["🌙", "☀️", "🌸"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: S _ N", answer: "U" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'Good morning sun!'", target: "good morning sun" },
        { step: 5, type: "phonics", prompt: "Which word starts with /s/?", options: ["Star", "Moon", "Cloud"], correct: 0 },
        { step: 6, type: "routine", prompt: "When do you sleep in bed?", options: ["At night 🌙", "At noon ☀️"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count stars: ⭐ ⭐ ⭐ ⭐", options: ["3", "4", "5"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: M O O N", answer: "MOON" },
        { step: 9, type: "listening", prompt: "Listen: 'Brush your teeth!'", options: ["🪥", "🥪", "⚽"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'Good night sweet dreams!'", target: "good night sweet dreams" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 09: THE PARK
  // ==========================================================================
  {
    id: 9,
    code: "unit_09",
    title: "The Park",
    subtitle: "Playground, Actions, Shapes & /s/ Review",
    icon: "🛝",
    themeColor: "#0284c7",
    themeLight: "#f0f9ff",
    structures: ["Present Simple", "Verb to be", "There is/are"],
    functions: ["Identifying actions", "Counting", "Following commands", "Identifying and describing objects at a park", "Expressing likes", "Identifying shapes", "Reviewing the /s/ sound"],
    vocabulary: ["Ball", "Big", "Circle", "Climb", "Jump", "Leaf", "Play", "Ride", "Run", "Sandbox", "Slide", "Small", "Square", "Swing", "Tree", "Triangle", "Numbers 1–10", "Colors"],
    phonicsFocus: "/s/ Review: Slide, Swing, Sandbox, See-saw, Step",

    explore: [
      { name: "Slide", icon: "🛝", fact: "Climb up the ladder and slide down with a joyful 'Wheee!'", audio: "slide", color: "Blue", shape: "Slide", count: 1 },
      { name: "Swing", icon: "⛓️🪑", fact: "Pumping your legs to swing high toward the fluffy clouds.", audio: "swing", color: "Red", shape: "Swing", count: 2 },
      { name: "Sandbox", icon: "🏖️", fact: "Build sandcastles with buckets, shovels, and molds in the sand.", audio: "sandbox", color: "Yellow", shape: "Square", count: 1 },
      { name: "Ball", icon: "⚽", fact: "Kick, bounce, and roll the round soccer ball on the grass.", audio: "ball", color: "White & Black", shape: "Circle", count: 1 },
      { name: "Tree", icon: "🌳", fact: "A tall green oak tree that provides cool shade on sunny afternoons.", audio: "tree", color: "Green", shape: "Tree", count: 3 },
      { name: "Leaves", icon: "🍃", fact: "Green and golden leaves that flutter in the gentle park breeze.", audio: "leaf", color: "Green", shape: "Oval", count: 8 },
      { name: "Bicycle Path", icon: "🚲", fact: "Smooth paths where kids ride bicycles and scooters safely.", audio: "bicycle", color: "Grey", shape: "Path", count: 1 },
      { name: "Park Bench", icon: "🪑", fact: "Where Mommy and Daddy sit and wave as we play on the swings.", audio: "bench", color: "Brown", shape: "Rectangle", count: 2 }
    ],

    listening: [
      {
        id: "u9_l1",
        title: "Listen and Move",
        desc: "Listen to the park action command: Jump, Run, Climb, Ride!",
        exercises: [
          { audio: "Jump up high in the air: Jump, jump!", prompt: "Action: Jump!", options: [{ name: "Jump", icon: "🦘⬆️" }, { name: "Sleep", icon: "😴" }, { name: "Sit", icon: "🪑" }], correct: 0 },
          { audio: "Run fast across the green grass: Run, run!", prompt: "Action: Run!", options: [{ name: "Eat", icon: "🥪" }, { name: "Run fast", icon: "🏃💨" }, { name: "Sleep", icon: "🛌" }], correct: 1 },
          { audio: "Climb up the ladder to the slide!", prompt: "Action: Climb!", options: [{ name: "Swim", icon: "🏊" }, { name: "Read", icon: "📖" }, { name: "Climb", icon: "🪜🧗" }], correct: 2 },
          { audio: "Ride your bicycle on the park path!", prompt: "Action: Ride bike!", options: [{ name: "Ride bicycle", icon: "🚲🚴" }, { name: "Sleep", icon: "😴" }, { name: "Cook", icon: "🍳" }], correct: 0 },
          { audio: "Swing back and forth high on the swing!", prompt: "Action: Swing!", options: [{ name: "Run away", icon: "🏃" }, { name: "Swing high", icon: "⛓️🪑✨" }, { name: "Sit still", icon: "🪑" }], correct: 1 }
        ]
      },
      {
        id: "u9_l2",
        title: "Find the Park Object",
        desc: "Listen to the playground equipment named and tap its picture.",
        exercises: [
          { audio: "Where is the red slide?", prompt: "Find: Slide", options: [{ name: "Slide", icon: "🛝" }, { name: "Swing", icon: "⛓️🪑" }, { name: "Sandbox", icon: "🏖️" }], correct: 0 },
          { audio: "Find the swing in the park", prompt: "Find: Swing", options: [{ name: "Ball", icon: "⚽" }, { name: "Swing", icon: "⛓️🪑" }, { name: "Tree", icon: "🌳" }], correct: 1 },
          { audio: "Look at the big sandbox", prompt: "Find: Sandbox", options: [{ name: "Slide", icon: "🛝" }, { name: "Bicycle", icon: "🚲" }, { name: "Sandbox", icon: "🏖️" }], correct: 2 },
          { audio: "Find the round soccer ball", prompt: "Find: Ball", options: [{ name: "Ball", icon: "⚽" }, { name: "Bench", icon: "🪑" }, { name: "Tree", icon: "🌳" }], correct: 0 },
          { audio: "Where is the tall green tree?", prompt: "Find: Tree", options: [{ name: "Slide", icon: "🛝" }, { name: "Tree", icon: "🌳" }, { name: "Swing", icon: "⛓️🪑" }], correct: 1 }
        ]
      },
      {
        id: "u9_l3",
        title: "Follow the Commands",
        desc: "Listen to playground navigation instructions.",
        exercises: [
          { audio: "Walk to the sandbox and build a castle.", prompt: "Instruction: Go to sandbox", options: [{ name: "Sandbox castle", icon: "🏖️🏰" }, { name: "Climb tree", icon: "🌳" }, { name: "Ride bike", icon: "🚲" }], correct: 0 },
          { audio: "Go to the swing and ask for a push.", prompt: "Instruction: Go to swing", options: [{ name: "Eat ice cream", icon: "🍦" }, { name: "Swing push", icon: "⛓️🪑🖐️" }, { name: "Sit on grass", icon: "🌿" }], correct: 1 },
          { audio: "Kick the ball to Leo!", prompt: "Instruction: Kick ball", options: [{ name: "Sleep", icon: "😴" }, { name: "Read book", icon: "📖" }, { name: "Kick ball", icon: "⚽👟" }], correct: 2 },
          { audio: "Slide down with your hands in the air!", prompt: "Instruction: Slide down", options: [{ name: "Slide down", icon: "🛝🙌" }, { name: "Climb fence", icon: "🪜" }, { name: "Wash hands", icon: "🧼" }], correct: 0 },
          { audio: "Pick up three dry green leaves.", prompt: "Instruction: Pick leaves", options: [{ name: "Pick flowers", icon: "🌸" }, { name: "Pick leaves", icon: "🍃🍃🍃" }, { name: "Drink water", icon: "🥛" }], correct: 1 }
        ]
      },
      {
        id: "u9_l4",
        title: "Listen and Count",
        desc: "Count playground items and equipment.",
        exercises: [
          { audio: "There are two swings on the swing set.", prompt: "Count: 2 swings", options: [{ name: "1 Swing", icon: "🪑" }, { name: "2 Swings", icon: "🪑🪑" }, { name: "3 Swings", icon: "🪑🪑🪑" }], correct: 1 },
          { audio: "I see three tall trees providing shade.", prompt: "Count: 3 trees", options: [{ name: "3 Trees", icon: "🌳🌳🌳" }, { name: "2 Trees", icon: "🌳🌳" }, { name: "4 Trees", icon: "🌳🌳🌳🌳" }], correct: 0 },
          { audio: "Four children are running on the grass.", prompt: "Count: 4 children", options: [{ name: "3 Kids", icon: "🧒🧒🧒" }, { name: "5 Kids", icon: "🧒🧒🧒🧒🧒" }, { name: "4 Kids", icon: "🧒🧒🧒🧒" }], correct: 2 },
          { audio: "There is one yellow slide.", prompt: "Count: 1 slide", options: [{ name: "1 Slide", icon: "🛝" }, { name: "2 Slides", icon: "🛝🛝" }, { name: "3 Slides", icon: "🛝🛝🛝" }], correct: 0 },
          { audio: "Count five round soccer balls.", prompt: "Count: 5 balls", options: [{ name: "4 Balls", icon: "⚽⚽⚽⚽" }, { name: "5 Balls", icon: "⚽⚽⚽⚽⚽" }, { name: "3 Balls", icon: "⚽⚽⚽" }], correct: 1 }
        ]
      },
      {
        id: "u9_l5",
        title: "Shape Detective",
        desc: "Identify shapes in the playground: Circle, Square, Triangle.",
        exercises: [
          { audio: "The soccer ball is a CIRCLE: round and smooth.", prompt: "What shape is the ball?", options: [{ name: "Circle ⭕", icon: "⭕" }, { name: "Square ⏹️", icon: "⏹️" }, { name: "Triangle 🔺", icon: "🔺" }], correct: 0 },
          { audio: "The wooden sandbox has four equal sides. It is a SQUARE.", prompt: "What shape is the sandbox?", options: [{ name: "Circle ⭕", icon: "⭕" }, { name: "Square ⏹️", icon: "⏹️" }, { name: "Oval ⬭", icon: "⬭" }], correct: 1 },
          { audio: "The climbing frame has three sides like a TRIANGLE.", prompt: "What shape is the frame?", options: [{ name: "Rectangle ▭", icon: "▭" }, { name: "Circle ⭕", icon: "⭕" }, { name: "Triangle 🔺", icon: "🔺" }], correct: 2 },
          { audio: "The round clock on the park tower is a CIRCLE.", prompt: "What shape is the clock?", options: [{ name: "Circle ⭕", icon: "⭕" }, { name: "Square ⏹️", icon: "⏹️" }, { name: "Star ⭐", icon: "⭐" }], correct: 0 },
          { audio: "The park picnic table is a RECTANGLE.", prompt: "What shape is the table?", options: [{ name: "Circle ⭕", icon: "⭕" }, { name: "Rectangle ▭", icon: "▭" }, { name: "Triangle 🔺", icon: "🔺" }], correct: 1 }
        ]
      },
      {
        id: "u9_l6",
        title: "Park Action Listening",
        desc: "Listen to complete stories of children playing in the park.",
        exercises: [
          { audio: "Leo runs fast and kicks the soccer ball into the net: Goal!", prompt: "What sport is Leo playing?", options: ["Soccer", "Tennis", "Basketball"], correct: 0 },
          { audio: "Luna sits on the swing. Her brother pushes her gently into the air.", prompt: "What is Luna riding?", options: ["A bicycle", "The swing", "A scooter"], correct: 1 },
          { audio: "Bili climbs up the wooden steps and slides down laughing.", prompt: "What does Bili do?", options: ["Slides down", "Digs in mud", "Sleeps on bench"], correct: 0 },
          { audio: "Three friends build a tall sandcastle with shells in the sandbox.", prompt: "What do they build?", options: ["A car", "A sandcastle", "A tree"], correct: 1 },
          { audio: "The sun sets over the park. It's time to pack the ball and go home.", prompt: "What time is it?", options: ["Breakfast time", "Sunset / Go home time", "Morning school"], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u9_r1",
        title: "Park Word Matching",
        desc: "Read the playground word and tap its illustration.",
        exercises: [
          { text: "SLIDE", prompt: "Read: SLIDE", options: [{ name: "Slide", icon: "🛝" }, { name: "Swing", icon: "⛓️🪑" }, { name: "Sandbox", icon: "🏖️" }], correct: 0 },
          { text: "SWING", prompt: "Read: SWING", options: [{ name: "Ball", icon: "⚽" }, { name: "Swing", icon: "⛓️🪑" }, { name: "Tree", icon: "🌳" }], correct: 1 },
          { text: "BALL", prompt: "Read: BALL", options: [{ name: "Sandbox", icon: "🏖️" }, { name: "Slide", icon: "🛝" }, { name: "Ball", icon: "⚽" }], correct: 2 },
          { text: "TREE", prompt: "Read: TREE", options: [{ name: "Tree", icon: "🌳" }, { name: "Bench", icon: "🪑" }, { name: "Swing", icon: "⛓️🪑" }], correct: 0 },
          { text: "SANDBOX", prompt: "Read: SANDBOX", options: [{ name: "Ball", icon: "⚽" }, { name: "Sandbox", icon: "🏖️" }, { name: "Slide", icon: "🛝" }], correct: 1 }
        ]
      },
      {
        id: "u9_r2",
        title: "Read and Find the Object",
        desc: "Read the descriptive sentence and find the item in the park.",
        exercises: [
          { text: "This is a blue slide with red steps. (🛝)", prompt: "What object is this?", options: ["Slide", "Swing", "Tree"], correct: 0 },
          { text: "Two swings hang from the tall metal bar. (⛓️🪑)", prompt: "What object is this?", options: ["Slide", "Swings", "Sandbox"], correct: 1 },
          { text: "Children dig in the golden sand with shovels. (🏖️)", prompt: "What place is this?", options: ["The pond", "The road", "The sandbox"], correct: 2 },
          { text: "The round ball bounces on the green grass. (⚽)", prompt: "What object bounces?", options: ["The ball", "The tree", "The bench"], correct: 0 },
          { text: "Birds sing in the big green tree. (🌳)", prompt: "Where are the birds?", options: ["In the sand", "In the big green tree", "In the pool"], correct: 1 }
        ]
      },
      {
        id: "u9_r3",
        title: "Complete There Is/Are",
        desc: "Choose between 'There is' and 'There are' for park features.",
        exercises: [
          { text: "______ a yellow slide in the playground. (🛝)", options: ["There is", "There are"], correct: 0 },
          { text: "______ two swings next to the oak tree. (⛓️🪑🪑)", options: ["There is", "There are"], correct: 1 },
          { text: "______ a big sandbox for little kids. (🏖️)", options: ["There is", "There are"], correct: 0 },
          { text: "______ three balls on the grass. (⚽⚽⚽)", options: ["There is", "There are"], correct: 1 },
          { text: "______ four park benches under the trees. (🪑🪑🪑🪑)", options: ["There is", "There are"], correct: 1 }
        ]
      },
      {
        id: "u9_r4",
        title: "Read the Park Map",
        desc: "Interpret the illustrated map of playground zones.",
        exercises: [
          { text: "ZONE 1 has the slide and swings for active play.", prompt: "What is in Zone 1?", options: ["Slide and swings", "Parking lot", "Swimming pool"], correct: 0 },
          { text: "ZONE 2 has the sandbox and baby swings.", prompt: "What is in Zone 2?", options: ["Skate park", "Sandbox and baby swings", "Airport"], correct: 1 },
          { text: "ZONE 3 is the open grass field for soccer and running.", prompt: "What do you do in Zone 3?", options: ["Sleep", "Drive cars", "Play soccer on grass"], correct: 2 },
          { text: "ZONE 4 has picnic tables and clean water fountains.", prompt: "Where can you drink water?", options: ["Zone 4", "Zone 1", "Outside"], correct: 0 },
          { text: "The bicycle path wraps around the whole park.", prompt: "Where is the bicycle path?", options: ["Inside the sandbox", "Around the whole park", "On the slide"], correct: 1 }
        ]
      },
      {
        id: "u9_r5",
        title: "Find the /s/ Sound",
        desc: "Review words starting with /s/ (Slide, Swing, Sandbox, Sun, Step).",
        exercises: [
          { prompt: "Which playground ride starts with /s/?", options: [{ name: "Slide", icon: "🛝" }, { name: "Bicycle", icon: "🚲" }, { name: "Tree", icon: "🌳" }], correct: 0 },
          { prompt: "Which playground ride starts with /s/?", options: [{ name: "Bench", icon: "🪑" }, { name: "Swing", icon: "⛓️🪑" }, { name: "Ball", icon: "⚽" }], correct: 1 },
          { prompt: "Which sand area starts with /s/?", options: [{ name: "Grass", icon: "🌿" }, { name: "Pool", icon: "🏊" }, { name: "Sandbox", icon: "🏖️" }], correct: 2 },
          { prompt: "Which sky light starts with /s/?", options: [{ name: "Sun", icon: "☀️" }, { name: "Moon", icon: "🌙" }, { name: "Cloud", icon: "☁️" }], correct: 0 },
          { prompt: "Which movement starts with /s/?", options: [{ name: "Jump", icon: "🦘" }, { name: "Step", icon: "🦶" }, { name: "Climb", icon: "🧗" }], correct: 1 }
        ]
      },
      {
        id: "u9_r6",
        title: "Park Adventure Story",
        desc: "Read the story of a weekend afternoon in the park.",
        exercises: [
          { text: "On Saturday afternoon, Bili, Leo and Luna run to the park.", prompt: "When do the friends go to the park?", options: ["Saturday afternoon", "Midnight", "Monday morning"], correct: 0 },
          { text: "Luna climbs to the top of the blue slide and waves: 'Look at me!'", prompt: "What color is the slide?", options: ["Green", "Blue", "Pink"], correct: 1 },
          { text: "Leo kicks the ball. Bili catches it with his hands. They score a goal!", prompt: "Who kicks the ball?", options: ["Teacher", "Mommy", "Leo"], correct: 2 },
          { text: "They build three sand turtles in the warm sandbox.", prompt: "What animals do they make in the sand?", options: ["Sand turtles", "Snowmen", "Birds"], correct: 0 },
          { text: "At 5 o'clock, they eat juicy orange slices on the wooden bench.", prompt: "What snack do they eat?", options: ["Pizza", "Orange slices", "Candy"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u9_w1",
        title: "Build Park Words",
        desc: "Unscramble the letters to spell park playground items.",
        exercises: [
          { target: "SLIDE", letters: ["E", "S", "L", "I", "D"], icon: "🛝", hint: "Slide down fast" },
          { target: "SWING", letters: ["G", "S", "W", "I", "N"], icon: "⛓️🪑", hint: "Swings back and forth" },
          { target: "BALL", letters: ["L", "B", "A", "L"], icon: "⚽", hint: "Round and bounces" },
          { target: "TREE", letters: ["E", "T", "R", "E"], icon: "🌳", hint: "Tall plant with leaves" },
          { target: "PARK", letters: ["K", "P", "A", "R"], icon: "🏞️", hint: "Place to play" }
        ]
      },
      {
        id: "u9_w2",
        title: "Complete Missing Letters",
        desc: "Fill in the missing letter for park words.",
        exercises: [
          { target: "SL_DE", missing: "I", full: "SLIDE", options: ["I", "E", "A"], icon: "🛝" },
          { target: "SW_NG", missing: "I", full: "SWING", options: ["I", "O", "A"], icon: "⛓️🪑" },
          { target: "B_LL", missing: "A", full: "BALL", options: ["A", "O", "E"], icon: "⚽" },
          { target: "TR_E", missing: "E", full: "TREE", options: ["E", "A", "O"], icon: "🌳" },
          { target: "P_RK", missing: "A", full: "PARK", options: ["A", "O", "I"], icon: "🏞️" }
        ]
      },
      {
        id: "u9_w3",
        title: "Label the Park",
        desc: "Type or select the label for each park feature.",
        exercises: [
          { prompt: "Label: 🛝", answer: "slide", accepted: ["slide", "Slide", "a slide"] },
          { prompt: "Label: ⛓️🪑", answer: "swing", accepted: ["swing", "Swing", "a swing"] },
          { prompt: "Label: ⚽", answer: "ball", accepted: ["ball", "Ball", "soccer ball"] },
          { prompt: "Label: 🌳", answer: "tree", accepted: ["tree", "Tree", "a tree"] },
          { prompt: "Label: 🏖️", answer: "sandbox", accepted: ["sandbox", "Sandbox"] }
        ]
      },
      {
        id: "u9_w4",
        title: "Write the Actions",
        desc: "Complete sentences with park action verbs (run, jump, climb, play, slide).",
        exercises: [
          { sentence: "I can ______ on the grass. (🏃)", answer: "run", accepted: ["run", "Run"] },
          { sentence: "I can ______ up high. (🦘)", answer: "jump", accepted: ["jump", "Jump"] },
          { sentence: "I can ______ up the ladder. (🧗)", answer: "climb", accepted: ["climb", "Climb"] },
          { sentence: "I can ______ with my ball. (⚽)", answer: "play", accepted: ["play", "Play"] },
          { sentence: "I can ______ down fast! (🛝)", answer: "slide", accepted: ["slide", "Slide"] }
        ]
      },
      {
        id: "u9_w5",
        title: "Complete Likes Sentences",
        desc: "Express playground likes with 'I like...'",
        exercises: [
          { sentence: "I like the high ______ . (⛓️🪑)", answer: "swing", accepted: ["swing", "swings"] },
          { sentence: "I like the fast ______ . (🛝)", answer: "slide", accepted: ["slide"] },
          { sentence: "I like building in the ______ . (🏖️)", answer: "sandbox", accepted: ["sandbox", "sand"] },
          { sentence: "I like kicking the ______ . (⚽)", answer: "ball", accepted: ["ball", "soccer ball"] },
          { sentence: "I like playing in the ______ . (🏞️)", answer: "park", accepted: ["park"] }
        ]
      },
      {
        id: "u9_w6",
        title: "Describe the Park Scene",
        desc: "Write descriptive facts about park shapes and colors.",
        exercises: [
          { sentence: "The soccer ball is a round ______ . (⭕)", answer: "circle", accepted: ["circle", "Circle"] },
          { sentence: "The sandbox is a square ______ . (⏹️)", answer: "shape", accepted: ["shape", "square"] },
          { sentence: "The grass in the park is ______ . (🟢)", answer: "green", accepted: ["green", "Green"] },
          { sentence: "The slide is bright ______ . (🔵)", answer: "blue", accepted: ["blue", "yellow", "red"] },
          { sentence: "Playing in the park is so much ______ !", answer: "fun", accepted: ["fun", "Fun", "great"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u9_s1",
        title: "Name the Park Objects",
        desc: "Pronounce playground items clearly.",
        exercises: [
          { prompt: "Say: Slide", target: "slide", audio: "Slide", icon: "🛝" },
          { prompt: "Say: Swing", target: "swing", audio: "Swing", icon: "⛓️🪑" },
          { prompt: "Say: Ball", target: "ball", audio: "Ball", icon: "⚽" },
          { prompt: "Say: Tree", target: "tree", audio: "Tree", icon: "🌳" },
          { prompt: "Say: Sandbox", target: "sandbox", audio: "Sandbox", icon: "🏖️" }
        ]
      },
      {
        id: "u9_s2",
        title: "What Can You Do?",
        desc: "Say what active movements you can do: 'I can...'",
        exercises: [
          { prompt: "Say: 'I can run fast.'", target: "i can run fast", audio: "I can run fast" },
          { prompt: "Say: 'I can jump high.'", target: "i can jump high", audio: "I can jump high" },
          { prompt: "Say: 'I can slide down.'", target: "i can slide down", audio: "I can slide down" },
          { prompt: "Say: 'I can swing high.'", target: "i can swing high" },
          { prompt: "Say: 'I can kick the ball.'", target: "i can kick the ball" }
        ]
      },
      {
        id: "u9_s3",
        title: "Describe the Park",
        desc: "Speak about features of the park.",
        exercises: [
          { prompt: "Say: 'The park is big and green.'", target: "the park is big and green" },
          { prompt: "Say: 'I see a yellow slide.'", target: "i see a yellow slide" },
          { prompt: "Say: 'The trees give cool shade.'", target: "the trees give cool shade" },
          { prompt: "Say: 'Friends play in the sandbox.'", target: "friends play in the sandbox" },
          { prompt: "Say: 'The grass is soft.'", target: "the grass is soft" }
        ]
      },
      {
        id: "u9_s4",
        title: "Count the Objects",
        desc: "Count park items aloud.",
        exercises: [
          { prompt: "Say: 'One slide'", target: "one slide" },
          { prompt: "Say: 'Two swings'", target: "two swings" },
          { prompt: "Say: 'Three trees'", target: "three trees" },
          { prompt: "Say: 'Four balls'", target: "four balls" },
          { prompt: "Say: 'Five children'", target: "five children" }
        ]
      },
      {
        id: "u9_s5",
        title: "Identify the Shapes",
        desc: "State geometric shapes in the park.",
        exercises: [
          { prompt: "Say: 'The ball is a circle.'", target: "the ball is a circle" },
          { prompt: "Say: 'The sandbox is a square.'", target: "the sandbox is a square" },
          { prompt: "Say: 'The frame is a triangle.'", target: "the frame is a triangle" },
          { prompt: "Say: 'The bench is a rectangle.'", target: "the bench is a rectangle" },
          { prompt: "Say: 'I see many shapes.'", target: "i see many shapes" }
        ]
      },
      {
        id: "u9_s6",
        title: "My Favorite Park Activity",
        desc: "Deliver a 3-sentence presentation of your favorite playground ride.",
        exercises: [
          { prompt: "Sentence 1: 'My favorite park ride is the swing.'", target: "my favorite park ride is the swing" },
          { prompt: "Sentence 2: 'I swing high up in the air.'", target: "i swing high up in the air" },
          { prompt: "Sentence 3: 'I laugh with all my friends.'", target: "i laugh with all my friends" },
          { prompt: "Sentence 4: 'We play until sunset.'", target: "we play until sunset" },
          { prompt: "Sentence 5: 'The park is my favorite place!'", target: "the park is my favorite place" }
        ]
      }
    ],

    videos: [
      {
        title: "Playground Song | British Council LearnEnglish Kids",
        videoId: "6h9_UvP53C0",
        embedUrl: "https://www.youtube-nocookie.com/embed/6h9_UvP53C0",
        thumbnail: "assets/toddlers_hd/toddlers_cont_colors.png",
        description: "Climb the ladder, slide on down, swing high in the air and run on the grass in a playful playground tune!",
        checkpoints: [
          { time: 14, question: "What ride do the children climb up?", options: ["The slide", "A tall fence", "The chimney"], correct: 0 },
          { time: 30, question: "What do they kick on the grass?", options: ["A soccer ball", "A rock", "A book"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Great Park Adventure",
      story: "A gentle breeze scattered colorful park stamps across the playground! Help Bili, Luna and Leo explore every corner, jump, climb, and solve shape puzzles across 12 levels.",
      levels: [
        { level: 1, title: "Find the Ball", mission: "Discover the soccer ball hiding behind the tree trunk.", targetCount: 1, itemType: "ball", icon: "⚽" },
        { level: 2, title: "Discover the Tree", mission: "Climb up to the treehouse platform.", targetCount: 1, itemType: "tree", icon: "🌳" },
        { level: 3, title: "Collect the Leaves", mission: "Gather 5 golden oak leaves for an autumn collage.", targetCount: 5, itemType: "leaves", icon: "🍃" },
        { level: 4, title: "Jump to the Correct Place", mission: "Hop across 3 stepping stones: 1, 2, 3!", targetCount: 3, itemType: "jump", icon: "🦘" },
        { level: 5, title: "Find the Slide", mission: "Climb the steps and slide down smoothly.", targetCount: 1, itemType: "slide", icon: "🛝" },
        { level: 6, title: "Discover the Swing", mission: "Swing back and forth to reach the high star badge.", targetCount: 2, itemType: "swing", icon: "⛓️🪑" },
        { level: 7, title: "Play in the Sandbox", mission: "Build 3 sandcastles using buckets and shovels.", targetCount: 3, itemType: "sand", icon: "🏖️" },
        { level: 8, title: "Identify the Circle and Square", mission: "Sort round balls into circles, sand trays into squares.", targetCount: 4, itemType: "shapes", icon: "⭕" },
        { level: 9, title: "Find the Triangle", mission: "Spot 3 triangular flags fluttering above the playground.", targetCount: 3, itemType: "triangles", icon: "🔺" },
        { level: 10, title: "Follow the Park Commands", mission: "Run, Stop, Jump and Wave upon whistle commands.", targetCount: 4, itemType: "commands", icon: "📣" },
        { level: 11, title: "Find the /s/ Sound", mission: "Collect /s/ items: Slide, Swing, Sandbox, Sun.", targetCount: 4, itemType: "phonics", icon: "🛝" },
        { level: 12, title: "The Great Park Challenge", mission: "Finish the obstacle course and receive the Playground Champion Medal!", targetCount: 1, itemType: "medal", icon: "🥇" }
      ]
    },

    finalChallenge: {
      title: "Playground Master Quest",
      story: "Prove your park vocabulary and movement skills across 10 interactive steps!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the swing?'", options: ["⛓️🪑", "🛝", "⚽"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'SLIDE'", options: ["🛝", "🌳", "🏖️"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: B _ L L", answer: "A" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'I can jump high'", target: "i can jump high" },
        { step: 5, type: "phonics", prompt: "Which word starts with /s/?", options: ["Slide", "Ball", "Tree"], correct: 0 },
        { step: 6, type: "shape", prompt: "What shape is the soccer ball?", options: ["Circle ⭕", "Square ⏹️", "Triangle 🔺"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count trees: 🌳 🌳 🌳", options: ["2", "3", "4"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: T R E E", answer: "TREE" },
        { step: 9, type: "listening", prompt: "Listen: 'Slide down fast!'", options: ["🛝💨", "😴", "🥪"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'I love playing in the park!'", target: "i love playing in the park" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 10: AROUND TOWN
  // ==========================================================================
  {
    id: 10,
    code: "unit_10",
    title: "Around Town",
    subtitle: "Community Helpers, City Places & The /g/ Sound",
    icon: "🏙️",
    themeColor: "#0f766e",
    themeLight: "#f0fdfa",
    structures: ["Present Simple", "Verb to be", "This/These"],
    functions: ["Identifying community helpers", "Identifying places in town", "Identifying objects", "Counting", "Identifying shapes and colors", "Identifying the /g/ sound"],
    vocabulary: ["Builder", "Construction site", "Farm", "Farmer", "Garbage collector", "Garbage truck", "Gloves", "Glue stick", "Helmet", "Hospital", "Nurse", "School", "Teacher", "Vest", "Colors", "Numbers 1–13"],
    phonicsFocus: "/g/ Sound: Garbage, Gloves, Glue stick, Green, Gate",

    explore: [
      { name: "Hospital", icon: "🏥", fact: "Where friendly nurses and doctors help us feel healthy and strong.", audio: "hospital", color: "White & Red", shape: "Cross", count: 1 },
      { name: "School", icon: "🏫", fact: "Where caring teachers teach us reading, writing, and numbers.", audio: "school", color: "Red brick", shape: "Building", count: 1 },
      { name: "Construction Site", icon: "🏗️", fact: "Where strong builders construct homes, bridges, and libraries.", audio: "construction", color: "Yellow", shape: "Crane", count: 1 },
      { name: "Garbage Truck", icon: "🚛", fact: "Cleans our neighborhood streets and recycles trash safely.", audio: "garbage truck", color: "Green", shape: "Truck", count: 1 },
      { name: "Nurse", icon: "👩‍⚕️", fact: "Checks our heartbeat, gives medicine, and bandages scraped knees.", audio: "nurse", color: "White & Blue", shape: "Person", count: 1 },
      { name: "Teacher", icon: "👩‍🏫", fact: "Inspires students with books, songs, and science experiments.", audio: "teacher", color: "Purple", shape: "Person", count: 1 },
      { name: "Builder", icon: "👷", fact: "Wears a yellow safety helmet and builds with bricks and cement.", audio: "builder", color: "Yellow & Orange", shape: "Person", count: 1 },
      { name: "Garbage Collector", icon: "🧑‍🏭", fact: "Wears protective gloves and an orange safety vest to keep town clean.", audio: "garbage collector", color: "Orange & Green", shape: "Person", count: 1 }
    ],

    listening: [
      {
        id: "u10_l1",
        title: "Who Works Here?",
        desc: "Listen to the worker's description and identify their community role.",
        exercises: [
          { audio: "I work at the hospital and help sick people feel better. Who am I?", prompt: "Who works at hospital?", options: [{ name: "Nurse", icon: "👩‍⚕️" }, { name: "Teacher", icon: "👩‍🏫" }, { name: "Builder", icon: "👷" }], correct: 0 },
          { audio: "I work at the school and teach children to read. Who am I?", prompt: "Who works at school?", options: [{ name: "Farmer", icon: "👨‍🌾" }, { name: "Teacher", icon: "👩‍🏫" }, { name: "Garbage collector", icon: "🧑‍🏭" }], correct: 1 },
          { audio: "I wear a yellow helmet and build tall buildings. Who am I?", prompt: "Who builds buildings?", options: [{ name: "Nurse", icon: "👩‍⚕️" }, { name: "Doctor", icon: "👨‍⚕️" }, { name: "Builder", icon: "👷" }], correct: 2 },
          { audio: "I drive a big green truck and collect the recycling bins. Who am I?", prompt: "Who drives garbage truck?", options: [{ name: "Garbage Collector", icon: "🧑‍🏭" }, { name: "Teacher", icon: "👩‍🏫" }, { name: "Chef", icon: "👨‍🍳" }], correct: 0 },
          { audio: "I grow vegetables and care for farm animals. Who am I?", prompt: "Who grows vegetables?", options: [{ name: "Pilot", icon: "👨‍✈️" }, { name: "Farmer", icon: "👨‍🌾" }, { name: "Builder", icon: "👷" }], correct: 1 }
        ]
      },
      {
        id: "u10_l2",
        title: "Listen and Find the Place",
        desc: "Listen to the building description and tap the correct location on the town map.",
        exercises: [
          { audio: "Find the hospital with the red cross on top.", prompt: "Find: Hospital", options: [{ name: "Hospital", icon: "🏥" }, { name: "School", icon: "🏫" }, { name: "Farm", icon: "🚜" }], correct: 0 },
          { audio: "Where is the school with the bell tower?", prompt: "Find: School", options: [{ name: "Construction Site", icon: "🏗️" }, { name: "School", icon: "🏫" }, { name: "Hospital", icon: "🏥" }], correct: 1 },
          { audio: "Locate the busy construction site with the yellow crane.", prompt: "Find: Construction site", options: [{ name: "Park", icon: "🏞️" }, { name: "School", icon: "🏫" }, { name: "Construction Site", icon: "🏗️" }], correct: 2 },
          { audio: "Where is the green farm with the red barn?", prompt: "Find: Farm", options: [{ name: "Farm", icon: "🚜" }, { name: "Hospital", icon: "🏥" }, { name: "Airport", icon: "✈️" }], correct: 0 },
          { audio: "Find the fire station with the red fire engine.", prompt: "Find: Fire station", options: [{ name: "School", icon: "🏫" }, { name: "Fire Station", icon: "🚒" }, { name: "Construction", icon: "🏗️" }], correct: 1 }
        ]
      },
      {
        id: "u10_l3",
        title: "Match the Worker and Tool",
        desc: "Listen to the tool described and match it to the correct worker.",
        exercises: [
          { audio: "The builder needs a yellow hard helmet for safety.", prompt: "Tool for builder:", options: [{ name: "Helmet", icon: "👷🪖" }, { name: "Stethoscope", icon: "🩺" }, { name: "Chalk", icon: "🖍️" }], correct: 0 },
          { audio: "The nurse uses a thermometer to check temperatures.", prompt: "Tool for nurse:", options: [{ name: "Hammer", icon: "🔨" }, { name: "Thermometer", icon: "👩‍⚕️🌡️" }, { name: "Tractor", icon: "🚜" }], correct: 1 },
          { audio: "The garbage collector wears heavy protective gloves.", prompt: "Tool for collector:", options: [{ name: "Paintbrush", icon: "🖌️" }, { name: "Book", icon: "📖" }, { name: "Gloves", icon: "🧑‍🏭🧤" }], correct: 2 },
          { audio: "The teacher writes on the board with white chalk.", prompt: "Tool for teacher:", options: [{ name: "Chalk & Board", icon: "👩‍🏫📋" }, { name: "Bricks", icon: "🧱" }, { name: "Shovel", icon: "🪚" }], correct: 0 },
          { audio: "The farmer drives the green tractor in the field.", prompt: "Tool for farmer:", options: [{ name: "Bandage", icon: "🩹" }, { name: "Tractor", icon: "👨‍🌾🚜" }, { name: "Computer", icon: "💻" }], correct: 1 }
        ]
      },
      {
        id: "u10_l4",
        title: "Follow the City Instructions",
        desc: "Navigate through the city safely following traffic and helper rules.",
        exercises: [
          { audio: "Stop at the red pedestrian light: Do not cross!", prompt: "Instruction: Red light", options: [{ name: "Stop & Wait", icon: "🛑✋" }, { name: "Run across", icon: "🏃" }, { name: "Jump", icon: "🦘" }], correct: 0 },
          { audio: "The light is green: Look both ways and walk safely.", prompt: "Instruction: Green light", options: [{ name: "Sleep on sidewalk", icon: "😴" }, { name: "Walk safely", icon: "🚶🟢" }, { name: "Ride on road", icon: "🚗" }], correct: 1 },
          { audio: "Wave hello to the friendly police officer.", prompt: "Instruction: Wave hello", options: [{ name: "Wave hello", icon: "👋👮" }, { name: "Hide behind car", icon: "🙈" }, { name: "Shout loud", icon: "📢" }], correct: 0 },
          { audio: "Put your empty juice box into the recycling bin.", prompt: "Instruction: Recycle bin", options: [{ name: "Drop on street", icon: "🚯" }, { name: "Recycle bin", icon: "♻️🗑️" }, { name: "Put in pocket", icon: "👖" }], correct: 1 },
          { audio: "Walk quietly through the hospital hallway.", prompt: "Instruction: Quiet in hospital", options: [{ name: "Scream and run", icon: "🏃📢" }, { name: "Walk quietly", icon: "🏥🤫" }, { name: "Play drums", icon: "🥁" }], correct: 1 }
        ]
      },
      {
        id: "u10_l5",
        title: "Count the Town Objects",
        desc: "Count community helper vehicles and tools up to 13.",
        exercises: [
          { audio: "I see three big green garbage trucks.", prompt: "Count: 3 trucks", options: [{ name: "2 Trucks", icon: "🚛🚛" }, { name: "3 Trucks", icon: "🚛🚛🚛" }, { name: "4 Trucks", icon: "🚛🚛🚛🚛" }], correct: 1 },
          { audio: "There are two white ambulances near the hospital.", prompt: "Count: 2 ambulances", options: [{ name: "2 Ambulances", icon: "🚑🚑" }, { name: "1 Ambulance", icon: "🚑" }, { name: "3 Ambulances", icon: "🚑🚑🚑" }], correct: 0 },
          { audio: "Four builders are wearing orange safety vests.", prompt: "Count: 4 vests", options: [{ name: "3 Vests", icon: "🦺🦺🦺" }, { name: "5 Vests", icon: "🦺🦺🦺🦺🦺" }, { name: "4 Vests", icon: "🦺🦺🦺🦺" }], correct: 2 },
          { audio: "There is one tall yellow construction crane.", prompt: "Count: 1 crane", options: [{ name: "1 Crane", icon: "🏗️" }, { name: "2 Cranes", icon: "🏗️🏗️" }, { name: "3 Cranes", icon: "🏗️🏗️🏗️" }], correct: 0 },
          { audio: "Count five yellow safety helmets.", prompt: "Count: 5 helmets", options: [{ name: "4 Helmets", icon: "🪖🪖🪖🪖" }, { name: "5 Helmets", icon: "🪖🪖🪖🪖🪖" }, { name: "6 Helmets", icon: "🪖🪖🪖🪖🪖🪖" }], correct: 1 }
        ]
      },
      {
        id: "u10_l6",
        title: "Community Helpers Listening",
        desc: "Listen to community helpers describe how they help our town.",
        exercises: [
          { audio: "Hello! I am Nurse Clara. When kids have a fever, I take care of them with gentle kindness.", prompt: "What does Nurse Clara do?", options: ["Takes care of kids", "Bakes bread", "Builds roofs"], correct: 0 },
          { audio: "Hello! I am Builder Bob. I construct schools where children can learn and grow.", prompt: "What does Builder Bob build?", options: ["Airplanes", "Schools", "Boats"], correct: 1 },
          { audio: "Hello! I am Collector Sam. Every morning at 6 AM, my team cleans the city streets.", prompt: "What does Collector Sam clean?", options: ["The city streets", "Only his shoes", "The swimming pool"], correct: 0 },
          { audio: "Hello! I am Teacher Maya. I love teaching my students ABCs and fun songs.", prompt: "What does Teacher Maya teach?", options: ["ABCs and songs", "Driving trucks", "Catching fish"], correct: 0 },
          { audio: "Community helpers work together to make our city safe, clean, and happy!", prompt: "Why do helpers work together?", options: ["To make city clean and happy", "To sleep all day", "To hide away"], correct: 0 }
        ]
      }
    ],

    reading: [
      {
        id: "u10_r1",
        title: "Match Workers and Words",
        desc: "Read the job title and tap the matching community helper illustration.",
        exercises: [
          { text: "NURSE", prompt: "Read: NURSE", options: [{ name: "Nurse", icon: "👩‍⚕️" }, { name: "Builder", icon: "👷" }, { name: "Teacher", icon: "👩‍🏫" }], correct: 0 },
          { text: "TEACHER", prompt: "Read: TEACHER", options: [{ name: "Farmer", icon: "👨‍🌾" }, { name: "Teacher", icon: "👩‍🏫" }, { name: "Nurse", icon: "👩‍⚕️" }], correct: 1 },
          { text: "BUILDER", prompt: "Read: BUILDER", options: [{ name: "Collector", icon: "🧑‍🏭" }, { name: "Teacher", icon: "👩‍🏫" }, { name: "Builder", icon: "👷" }], correct: 2 },
          { text: "FARMER", prompt: "Read: FARMER", options: [{ name: "Farmer", icon: "👨‍🌾" }, { name: "Nurse", icon: "👩‍⚕️" }, { name: "Builder", icon: "👷" }], correct: 0 },
          { text: "GARBAGE COLLECTOR", prompt: "Read: GARBAGE COLLECTOR", options: [{ name: "Teacher", icon: "👩‍🏫" }, { name: "Garbage Collector", icon: "🧑‍🏭" }, { name: "Doctor", icon: "👨‍⚕️" }], correct: 1 }
        ]
      },
      {
        id: "u10_r2",
        title: "Read the Town Map",
        desc: "Read town locations on the neighborhood map.",
        exercises: [
          { text: "HOSPITAL", prompt: "Read: HOSPITAL", options: [{ name: "Hospital", icon: "🏥" }, { name: "School", icon: "🏫" }, { name: "Farm", icon: "🚜" }], correct: 0 },
          { text: "SCHOOL", prompt: "Read: SCHOOL", options: [{ name: "Park", icon: "🏞️" }, { name: "School", icon: "🏫" }, { name: "Hospital", icon: "🏥" }], correct: 1 },
          { text: "CONSTRUCTION SITE", prompt: "Read: CONSTRUCTION SITE", options: [{ name: "Farm", icon: "🚜" }, { name: "Store", icon: "🏪" }, { name: "Construction Site", icon: "🏗️" }], correct: 2 },
          { text: "FARM", prompt: "Read: FARM", options: [{ name: "Farm", icon: "🚜" }, { name: "School", icon: "🏫" }, { name: "Hospital", icon: "🏥" }], correct: 0 },
          { text: "GARBAGE TRUCK", prompt: "Read: GARBAGE TRUCK", options: [{ name: "Car", icon: "🚗" }, { name: "Garbage Truck", icon: "🚛" }, { name: "Bus", icon: "🚌" }], correct: 1 }
        ]
      },
      {
        id: "u10_r3",
        title: "Complete This/These",
        desc: "Choose 'This is' or 'These are' for tools and helpers.",
        exercises: [
          { text: "______ a yellow safety helmet. (🪖)", options: ["This is", "These are"], correct: 0 },
          { text: "______ heavy work gloves. (🧤🧤)", options: ["This is", "These are"], correct: 1 },
          { text: "______ our town hospital. (🏥)", options: ["This is", "These are"], correct: 0 },
          { text: "______ three garbage trucks. (🚛🚛🚛)", options: ["This is", "These are"], correct: 1 },
          { text: "______ a kind nurse. (👩‍⚕️)", options: ["This is", "These are"], correct: 0 }
        ]
      },
      {
        id: "u10_r4",
        title: "Read the Community Helpers Story",
        desc: "Read the story of helpers saving the day in Bilikids Town.",
        exercises: [
          { text: "A storm blew leaves onto the street. The garbage collectors came with their green truck.", prompt: "Who came to clean the street?", options: ["The garbage collectors", "The pilot", "The chef"], correct: 0 },
          { text: "The builders repaired the wooden school fence with hammers and nails.", prompt: "What did the builders repair?", options: ["A car", "The school fence", "A bridge"], correct: 1 },
          { text: "Nurse Clara checked Leo's bandaged finger and gave him a sticker.", prompt: "What did Nurse Clara give Leo?", options: ["A toy", "A sticker", "A book"], correct: 1 },
          { text: "Teacher Maya welcomed everyone back into the warm classroom.", prompt: "Where did Teacher Maya welcome everyone?", options: ["Into the classroom", "To the airport", "Into the forest"], correct: 0 },
          { text: "Everyone cheered: 'Thank you, community helpers!'", prompt: "What did everyone say?", options: ["Good night", "Thank you, helpers!", "We are angry"], correct: 1 }
        ]
      },
      {
        id: "u10_r5",
        title: "Find the /g/ Sound",
        desc: "Identify words starting with the sound /g/ (Garbage, Gloves, Glue stick, Green, Gate).",
        exercises: [
          { prompt: "Which vehicle starts with /g/?", options: [{ name: "Garbage truck", icon: "🚛" }, { name: "Bus", icon: "🚌" }, { name: "Car", icon: "🚗" }], correct: 0 },
          { prompt: "Which handwear starts with /g/?", options: [{ name: "Hat", icon: "🎩" }, { name: "Gloves", icon: "🧤" }, { name: "Shoes", icon: "👟" }], correct: 1 },
          { prompt: "Which school supply starts with /g/?", options: [{ name: "Book", icon: "📖" }, { name: "Pencil", icon: "✏️" }, { name: "Glue stick", icon: "🧴" }], correct: 2 },
          { prompt: "Which color starts with /g/?", options: [{ name: "Green", icon: "🟢" }, { name: "Red", icon: "🔴" }, { name: "Blue", icon: "🔵" }], correct: 0 },
          { prompt: "Which fence door starts with /g/?", options: [{ name: "Door", icon: "🚪" }, { name: "Gate", icon: "⛩️" }, { name: "Window", icon: "🪟" }], correct: 1 }
        ]
      },
      {
        id: "u10_r6",
        title: "Read and Identify the Places",
        desc: "Read descriptions of where people work.",
        exercises: [
          { text: "Doctor and nurse work here: HOSP_TAL.", prompt: "What place is this?", options: ["Hospital", "School", "Store"], correct: 0 },
          { text: "Students and teachers learn here: SCH_OL.", prompt: "What place is this?", options: ["Airport", "School", "Bank"], correct: 1 },
          { text: "Builders with cranes build here: CONST_UCTION.", prompt: "What place is this?", options: ["Park", "Garden", "Construction Site"], correct: 2 },
          { text: "Cows, horses, and farmers live here: F_RM.", prompt: "What place is this?", options: ["Farm", "Hospital", "School"], correct: 0 },
          { text: "Trees, slides, and swings are here: P_RK.", prompt: "What place is this?", options: ["Store", "Park", "Hospital"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u10_w1",
        title: "Build Community Words",
        desc: "Unscramble the letters to spell helper titles.",
        exercises: [
          { target: "NURSE", letters: ["S", "N", "U", "R", "E"], icon: "👩‍⚕️", hint: "Cares for patients" },
          { target: "FARM", letters: ["M", "F", "A", "R"], icon: "🚜", hint: "Where crops grow" },
          { target: "VEST", letters: ["T", "V", "E", "S"], icon: "🦺", hint: "Bright safety clothing" },
          { target: "TOWN", letters: ["N", "T", "O", "W"], icon: "🏙️", hint: "Where we live" },
          { target: "GATE", letters: ["E", "G", "A", "T"], icon: "⛩️", hint: "Opens to enter" }
        ]
      },
      {
        id: "u10_w2",
        title: "Complete Missing Letters",
        desc: "Fill in the missing letter for town words.",
        exercises: [
          { target: "N_RSE", missing: "U", full: "NURSE", options: ["U", "A", "O"], icon: "👩‍⚕️" },
          { target: "F_RMER", missing: "A", full: "FARMER", options: ["A", "E", "I"], icon: "👨‍🌾" },
          { target: "H_LMET", missing: "E", full: "HELMET", options: ["E", "A", "U"], icon: "🪖" },
          { target: "GL_VES", missing: "O", full: "GLOVES", options: ["O", "E", "A"], icon: "🧤" },
          { target: "V_ST", missing: "E", full: "VEST", options: ["E", "A", "I"], icon: "🦺" }
        ]
      },
      {
        id: "u10_w3",
        title: "Label the Town",
        desc: "Type or select the label for each town graphic.",
        exercises: [
          { prompt: "Label: 🏥", answer: "hospital", accepted: ["hospital", "Hospital"] },
          { prompt: "Label: 🏫", answer: "school", accepted: ["school", "School"] },
          { prompt: "Label: 🏗️", answer: "construction", accepted: ["construction", "construction site"] },
          { prompt: "Label: 🪖", answer: "helmet", accepted: ["helmet", "Helmet"] },
          { prompt: "Label: 🧤", answer: "gloves", accepted: ["gloves", "Gloves"] }
        ]
      },
      {
        id: "u10_w4",
        title: "Write the Worker Names",
        desc: "Write the helper name based on their description.",
        exercises: [
          { prompt: "Works at the hospital: 👩‍⚕️", answer: "nurse", accepted: ["nurse", "Nurse", "doctor"] },
          { prompt: "Teaches at school: 👩‍🏫", answer: "teacher", accepted: ["teacher", "Teacher"] },
          { prompt: "Builds with bricks: 👷", answer: "builder", accepted: ["builder", "Builder"] },
          { prompt: "Works on the farm: 👨‍🌾", answer: "farmer", accepted: ["farmer", "Farmer"] },
          { prompt: "Drives garbage truck: 🧑‍🏭", answer: "collector", accepted: ["collector", "garbage collector"] }
        ]
      },
      {
        id: "u10_w5",
        title: "Complete This/These Sentences",
        desc: "Finish sentences describing helper gear.",
        exercises: [
          { sentence: "This is a yellow ______ . (🪖)", answer: "helmet", accepted: ["helmet", "hard hat"] },
          { sentence: "These are protective ______ . (🧤)", answer: "gloves", accepted: ["gloves"] },
          { sentence: "This is an orange ______ . (🦺)", answer: "vest", accepted: ["vest", "safety vest"] },
          { sentence: "This is our big town ______ . (🏥)", answer: "hospital", accepted: ["hospital"] },
          { sentence: "This is a green garbage ______ . (🚛)", answer: "truck", accepted: ["truck"] }
        ]
      },
      {
        id: "u10_w6",
        title: "My Town Description",
        desc: "Write short personal sentences about your town.",
        exercises: [
          { sentence: "I live in a happy ______ . (city / town)", answer: "town", accepted: ["town", "city", "Town", "City"] },
          { sentence: "My school has a caring ______ . (👩‍🏫)", answer: "teacher", accepted: ["teacher", "Teacher"] },
          { sentence: "The garbage truck is ______ . (🟢)", answer: "green", accepted: ["green", "Green", "blue"] },
          { sentence: "The builder wears a ______ . (🪖)", answer: "helmet", accepted: ["helmet", "Helmet"] },
          { sentence: "I love my community ______ !", answer: "helpers", accepted: ["helpers", "town", "friends"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u10_s1",
        title: "Name the Community Helpers",
        desc: "Pronounce helper titles clearly into your microphone.",
        exercises: [
          { prompt: "Say: Nurse", target: "nurse", audio: "Nurse", icon: "👩‍⚕️" },
          { prompt: "Say: Teacher", target: "teacher", audio: "Teacher", icon: "👩‍🏫" },
          { prompt: "Say: Builder", target: "builder", audio: "Builder", icon: "👷" },
          { prompt: "Say: Farmer", target: "farmer", audio: "Farmer", icon: "👨‍🌾" },
          { prompt: "Say: Collector", target: "collector", audio: "Collector", icon: "🧑‍🏭" }
        ]
      },
      {
        id: "u10_s2",
        title: "Where Does the Nurse Work?",
        desc: "Answer location questions aloud.",
        exercises: [
          { prompt: "Where does the nurse work? 🏥", target: "the nurse works at the hospital", audio: "The nurse works at the hospital" },
          { prompt: "Where does the teacher work? 🏫", target: "the teacher works at the school", audio: "The teacher works at the school" },
          { prompt: "Where does the builder work? 🏗️", target: "the builder works at the construction site" },
          { prompt: "Where does the farmer work? 🚜", target: "the farmer works on the farm" },
          { prompt: "Where does the driver drive? 🚛", target: "the driver drives on the street" }
        ]
      },
      {
        id: "u10_s3",
        title: "Describe the Town",
        desc: "Speak about your town buildings and streets.",
        exercises: [
          { prompt: "Say: 'Our town is clean and safe.'", target: "our town is clean and safe" },
          { prompt: "Say: 'The hospital is big.'", target: "the hospital is big" },
          { prompt: "Say: 'The school has many books.'", target: "the school has many books" },
          { prompt: "Say: 'Green trucks keep streets clean.'", target: "green trucks keep streets clean" },
          { prompt: "Say: 'I love my neighborhood.'", target: "i love my neighborhood" }
        ]
      },
      {
        id: "u10_s4",
        title: "Identify the Tools",
        desc: "Speak the helper tools aloud.",
        exercises: [
          { prompt: "Say: 'The builder wears a helmet.'", target: "the builder wears a helmet" },
          { prompt: "Say: 'The collector wears gloves.'", target: "the collector wears gloves" },
          { prompt: "Say: 'The worker wears an orange vest.'", target: "the worker wears an orange vest" },
          { prompt: "Say: 'The teacher uses a board.'", target: "the teacher uses a board" },
          { prompt: "Say: 'The nurse uses a thermometer.'", target: "the nurse uses a thermometer" }
        ]
      },
      {
        id: "u10_s5",
        title: "Count the Objects",
        desc: "Count community helper items aloud.",
        exercises: [
          { prompt: "Say: 'One hospital'", target: "one hospital" },
          { prompt: "Say: 'Two schools'", target: "two schools" },
          { prompt: "Say: 'Three trucks'", target: "three trucks" },
          { prompt: "Say: 'Four helmets'", target: "four helmets" },
          { prompt: "Say: 'Five helpers'", target: "five helpers" }
        ]
      },
      {
        id: "u10_s6",
        title: "My Favorite Community Helper",
        desc: "Deliver a 3-sentence presentation of the helper you admire most.",
        exercises: [
          { prompt: "Sentence 1: 'My favorite helper is the nurse.'", target: "my favorite helper is the nurse" },
          { prompt: "Sentence 2: 'She takes care of sick people.'", target: "she takes care of sick people" },
          { prompt: "Sentence 3: 'She is kind and helpful.'", target: "she is kind and helpful" },
          { prompt: "Sentence 4: 'Helpers make our town great.'", target: "helpers make our town great" },
          { prompt: "Sentence 5: 'Thank you for your hard work!'", target: "thank you for your hard work" }
        ]
      }
    ],

    videos: [
      {
        title: "Jobs and Community Helpers | British Council LearnEnglish Kids",
        videoId: "ckKQclquAXU",
        embedUrl: "https://www.youtube-nocookie.com/embed/ckKQclquAXU",
        thumbnail: "assets/toddlers_hd/toddlers_cont_farm.png",
        description: "Explore the busy town and meet nurses, builders, teachers and drivers who keep the city running smoothly!",
        checkpoints: [
          { time: 14, question: "Who teaches in the classroom?", options: ["The teacher", "The driver", "The chef"], correct: 0 },
          { time: 32, question: "Who wears a yellow safety helmet?", options: ["The builder", "The baby", "The duck"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The City Helpers Rescue",
      story: "A busy morning in Bilikids Town! Help different workers get their equipment, reach their stations, and solve town emergencies across 12 levels.",
      levels: [
        { level: 1, title: "Visit the Hospital", mission: "Drive the ambulance safely to the hospital entrance.", targetCount: 1, itemType: "hospital", icon: "🏥" },
        { level: 2, title: "Find the Nurse", mission: "Deliver bandages and thermometers to Nurse Clara.", targetCount: 2, itemType: "nurse", icon: "👩‍⚕️" },
        { level: 3, title: "Discover the School", mission: "Ring the morning bell at Bilikids School.", targetCount: 1, itemType: "school", icon: "🏫" },
        { level: 4, title: "Meet the Teacher", mission: "Deliver storybooks and crayons to Teacher Maya.", targetCount: 3, itemType: "teacher", icon: "👩‍🏫" },
        { level: 5, title: "Visit the Construction Site", mission: "Check the safety perimeter around the yellow crane.", targetCount: 1, itemType: "site", icon: "🏗️" },
        { level: 6, title: "Find the Builder", mission: "Hand 4 bricks to Builder Bob.", targetCount: 4, itemType: "builder", icon: "👷" },
        { level: 7, title: "Collect the Helmet and Vest", mission: "Equip 3 workers with helmets and orange vests.", targetCount: 3, itemType: "gear", icon: "🪖" },
        { level: 8, title: "Visit the Farm", mission: "Drive through the farm gate to visit Farmer Leo.", targetCount: 1, itemType: "farm", icon: "🚜" },
        { level: 9, title: "Meet the Farmer", mission: "Help Farmer Leo pack 5 fresh vegetable crates.", targetCount: 5, itemType: "farmer", icon: "👨‍🌾" },
        { level: 10, title: "Help the Garbage Collector", mission: "Collect 4 green recycling bins into the garbage truck.", targetCount: 4, itemType: "collector", icon: "🚛" },
        { level: 11, title: "Find the /g/ Sound", mission: "Spot /g/ town items: Garbage, Gloves, Glue stick, Green.", targetCount: 4, itemType: "phonics", icon: "🧤" },
        { level: 12, title: "Complete the City Helpers Mission", mission: "Raise the Town Flag in city square with all helpers!", targetCount: 1, itemType: "flag", icon: "🚩" }
      ]
    },

    finalChallenge: {
      title: "Town Hero Master Quest",
      story: "Complete 10 interactive community challenges to earn your Junior Town Mayor Medal!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where does the nurse work?'", options: ["🏥 Hospital", "🚜 Farm", "🏗️ Site"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'TEACHER'", options: ["👩‍🏫", "👩‍⚕️", "👷"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: N U R S _", answer: "E" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'Helpers make our town safe'", target: "helpers make our town safe" },
        { step: 5, type: "phonics", prompt: "Which word starts with /g/?", options: ["Gloves", "Hat", "Pants"], correct: 0 },
        { step: 6, type: "matching", prompt: "Who wears a yellow helmet?", options: ["Builder 👷", "Nurse 👩‍⚕️", "Baby 👶"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count trucks: 🚛 🚛 🚛", options: ["2", "3", "4"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: T O W N", answer: "TOWN" },
        { step: 9, type: "listening", prompt: "Listen: 'Stop at the red light!'", options: ["🛑", "😴", "🥪"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'Thank you community helpers!'", target: "thank you community helpers" }
      ]
    }
  }
];
