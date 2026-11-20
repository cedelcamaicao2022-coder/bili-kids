/**
 * Bilikids Kids Club - Unit 11: Looking Back Engine
 * Cambridge A2 English: History, Dinosaurs, Ancient Inventions, & Past Narrative.
 * Expanded with 20 Fossil Dig Cards, 20 Ancient Inventions, and 20 Museum Guide Exhibits.
 * Every card features natural Billi Leo audio narration and an interactive 5-question quiz!
 */

const U11_FOSSILS = [
  {
    "id": "fossil-trex",
    "name": "Tyrannosaurus Rex",
    "icon": "🦖",
    "period": "Late Cretaceous",
    "fact": "The T-Rex had teeth as large as bananas and powerful jaws!",
    "speechText": "Fossil uncovered! The Tyrannosaurus Rex! The T-Rex had teeth as large as bananas and powerful jaws!",
    "quiz": [
      {
        "q": "How big were the teeth of a T-Rex?",
        "options": [
          "As large as bananas",
          "Tiny like rice grains",
          "Like pine needles"
        ],
        "correct": 0,
        "exp": "T-Rex teeth could reach 30 centimeters (banana-sized)!"
      },
      {
        "q": "In which geologic period did T-Rex rule?",
        "options": [
          "Late Cretaceous",
          "Ice Age",
          "Modern era"
        ],
        "correct": 0,
        "exp": "T-Rex lived at the end of the Cretaceous period."
      },
      {
        "q": "What kind of jaws did T-Rex have?",
        "options": [
          "Crushing, powerful jaws",
          "Soft weak jaws",
          "No teeth at all"
        ],
        "correct": 0,
        "exp": "It had the strongest bite force of any land animal!"
      },
      {
        "q": "Was Tyrannosaurus Rex an herbivore or a carnivore?",
        "options": [
          "Carnivore (meat-eater)",
          "Herbivore (plant-eater)",
          "Insectivore"
        ],
        "correct": 0,
        "exp": "It was a ferocious apex meat-eater."
      },
      {
        "q": "What does 'Rex' mean in Latin?",
        "options": [
          "King",
          "Fast",
          "Green"
        ],
        "correct": 0,
        "exp": "Tyrannosaurus Rex means 'King of the Tyrant Lizards'!"
      }
    ]
  },
  {
    "id": "fossil-triceratops",
    "name": "Triceratops",
    "icon": "<img src=\"assets/icons/triceratops.svg\" width=\"48\" height=\"48\" alt=\"Triceratops\" style=\"vertical-align:middle;display:inline-block;\">",
    "period": "Herbivore Giant",
    "fact": "It had three sharp horns on its head to defend against predators.",
    "speechText": "Fossil uncovered! The Triceratops! It had three sharp horns on its head to defend against predators.",
    "quiz": [
      {
        "q": "How many horns did a Triceratops have on its head?",
        "options": [
          "Three sharp horns",
          "Only one horn",
          "Ten horns"
        ],
        "correct": 0,
        "exp": "Two large brow horns and one smaller nose horn!"
      },
      {
        "q": "What diet did Triceratops eat?",
        "options": [
          "Plants (herbivore)",
          "Meat and fish",
          "Only seeds"
        ],
        "correct": 0,
        "exp": "It grazed on prehistoric shrubs and palms."
      },
      {
        "q": "Why did Triceratops use its horns?",
        "options": [
          "To defend against predators",
          "To dig deep swimming pools",
          "To climb trees"
        ],
        "correct": 0,
        "exp": "Horns defended it against hungry predators like T-Rex."
      },
      {
        "q": "What large bony feature protected its neck?",
        "options": [
          "A solid neck frill",
          "Spiky wings",
          "A thick fur collar"
        ],
        "correct": 0,
        "exp": "The frill shielded its neck from lethal bites."
      },
      {
        "q": "What prefix in its name means 'three'?",
        "options": [
          "Tri-",
          "Bi-",
          "Penta-"
        ],
        "correct": 0,
        "exp": "'Tri' means three in Greek (three-horned face)!"
      }
    ]
  },
  {
    "id": "fossil-pterodactyl",
    "name": "Pterodactyl",
    "icon": "<img src=\"assets/icons/pterodactyl.svg\" width=\"48\" height=\"48\" alt=\"Pterodactyl\" style=\"vertical-align:middle;display:inline-block;\">",
    "period": "Flying Reptile",
    "fact": "It was not a dinosaur, but a flying reptile with leathery wings.",
    "speechText": "Fossil uncovered! The Pterodactyl! It was not a dinosaur, but a flying reptile with leathery wings.",
    "quiz": [
      {
        "q": "Was the Pterodactyl a dinosaur or a flying reptile?",
        "options": [
          "A flying reptile (pterosaur)",
          "A mammal",
          "A modern songbird"
        ],
        "correct": 0,
        "exp": "Pterosaurs were flying reptiles, distinct from dinosaurs."
      },
      {
        "q": "What kind of wings did it fly with?",
        "options": [
          "Leathery skin membranes",
          "Feathered wings",
          "Heavy metal wings"
        ],
        "correct": 0,
        "exp": "Its wings were formed of a skin membrane supported by a long finger."
      },
      {
        "q": "Where did Pterodactyls live and hunt?",
        "options": [
          "Near ancient coastlines and cliffs",
          "Deep underground caves",
          "Underwater reefs"
        ],
        "correct": 0,
        "exp": "They nested on sea cliffs and hunted over water."
      },
      {
        "q": "What did Pterodactyls often catch to eat?",
        "options": [
          "Fish and small animals",
          "Leaves and berries",
          "Grass only"
        ],
        "correct": 0,
        "exp": "They skimmed coastal waters for fish and small prey."
      },
      {
        "q": "Could Pterodactyls glide through the prehistoric sky?",
        "options": [
          "Yes, they soared gracefully",
          "No, they only hopped",
          "No, they only swam"
        ],
        "correct": 0,
        "exp": "They were skilled gliders and fliers."
      }
    ]
  },
  {
    "id": "fossil-mammoth",
    "name": "Woolly Mammoth",
    "icon": "🦣",
    "period": "Ice Age",
    "fact": "Mammoths roamed frozen tundras with thick fur and curved tusks.",
    "speechText": "Fossil uncovered! The Woolly Mammoth! Mammoths roamed frozen tundras with thick fur and curved tusks.",
    "quiz": [
      {
        "q": "During which cold era did Woolly Mammoths roam?",
        "options": [
          "The Ice Age (Pleistocene)",
          "The Jurassic Period",
          "The Space Age"
        ],
        "correct": 0,
        "exp": "Mammoths were adapted to glacial Ice Age climates."
      },
      {
        "q": "What protected mammoths from freezing cold?",
        "options": [
          "Thick woolly fur and dense fat",
          "Scaly skin",
          "Warm sweaters"
        ],
        "correct": 0,
        "exp": "Two layers of dense fur and a 10cm fat layer kept them warm."
      },
      {
        "q": "What distinctive feature curved out of their heads?",
        "options": [
          "Long curved ivory tusks",
          "Bull horns",
          "Antler crowns"
        ],
        "correct": 0,
        "exp": "Their tusks could reach over 4 meters in length!"
      },
      {
        "q": "What modern living animal is the mammoth's closest cousin?",
        "options": [
          "The Asian Elephant",
          "The Rhinoceros",
          "The Horse"
        ],
        "correct": 0,
        "exp": "Asian elephants share over 99% of mammoth DNA."
      },
      {
        "q": "What did Woolly Mammoths graze on?",
        "options": [
          "Grasses, shrubs, and tundra moss",
          "Fish and seals",
          "Other large animals"
        ],
        "correct": 0,
        "exp": "They spent hours each day grazing on tundra vegetation."
      }
    ]
  },
  {
    "id": "fossil-velociraptor",
    "name": "Velociraptor",
    "icon": "🦖",
    "period": "Late Cretaceous",
    "fact": "A swift hunter with sharp curved claws on its feet.",
    "speechText": "Fossil uncovered! The Velociraptor! A swift hunter with sharp curved claws on its feet.",
    "quiz": [
      {
        "q": "What special weapon did Velociraptor have on each foot?",
        "options": [
          "A sharp curved sickle claw",
          "Webbed duck feet",
          "Flat wooden hooves"
        ],
        "correct": 0,
        "exp": "Its deadly second toe bore an 8cm retractable sickle claw!"
      },
      {
        "q": "Was the Velociraptor slow or swift?",
        "options": [
          "Swift and agile runner",
          "Extremely slow",
          "Could only crawl"
        ],
        "correct": 0,
        "exp": "Velociraptor ran swiftly with a stiff balancing tail."
      },
      {
        "q": "What body covering did Velociraptor have in life?",
        "options": [
          "Feathers",
          "Heavy steel scales",
          "Thick wool fur"
        ],
        "correct": 0,
        "exp": "Fossils show clear quill knobs on its forearm bones!"
      },
      {
        "q": "Did Velociraptors hunt alone or in smart packs?",
        "options": [
          "In smart cooperative packs",
          "Always underwater",
          "They did not hunt"
        ],
        "correct": 0,
        "exp": "They were intelligent social hunters."
      },
      {
        "q": "What does the name 'Velociraptor' mean?",
        "options": [
          "Swift seizer or thief",
          "Lazy sleeper",
          "Big green giant"
        ],
        "correct": 0,
        "exp": "'Velox' (swift) and 'raptor' (robber or thief) in Latin."
      }
    ]
  },
  {
    "id": "fossil-stegosaurus",
    "name": "Stegosaurus",
    "icon": "🦕",
    "period": "Late Jurassic",
    "fact": "It had large bony plates on its back and sharp tail spikes.",
    "speechText": "Fossil uncovered! The Stegosaurus! It had large bony plates on its back and sharp tail spikes.",
    "quiz": [
      {
        "q": "What stood upright along the back of a Stegosaurus?",
        "options": [
          "Large bony triangular plates",
          "Fluffy white wings",
          "Pointy shark fins"
        ],
        "correct": 0,
        "exp": "Up to 17 alternating bony plates lined its spine!"
      },
      {
        "q": "What defensive weapon was at the end of its tail?",
        "options": [
          "Four sharp tail spikes (thagomizer)",
          "A soft sponge",
          "A glowing lantern"
        ],
        "correct": 0,
        "exp": "The spikes defended it against predators like Allosaurus."
      },
      {
        "q": "What size was the brain of a Stegosaurus?",
        "options": [
          "About the size of a walnut",
          "As big as a car",
          "Bigger than a basketball"
        ],
        "correct": 0,
        "exp": "Despite weighing 5 tons, its brain was walnut-sized!"
      },
      {
        "q": "Did Stegosaurus eat plants or meat?",
        "options": [
          "Low plants and ferns",
          "Other dinosaurs",
          "Fish only"
        ],
        "correct": 0,
        "exp": "Stegosaurus was a low-browsing herbivore."
      },
      {
        "q": "In which geologic period did Stegosaurus live?",
        "options": [
          "Late Jurassic",
          "Ice Age",
          "Modern era"
        ],
        "correct": 0,
        "exp": "Stegosaurus lived 150 million years ago in the Jurassic."
      }
    ]
  },
  {
    "id": "fossil-brachiosaurus",
    "name": "Brachiosaurus",
    "icon": "🦕",
    "period": "Late Jurassic",
    "fact": "A gentle giant with a long neck that reached tall trees.",
    "speechText": "Fossil uncovered! The Brachiosaurus! A gentle giant with a long neck that reached tall trees.",
    "quiz": [
      {
        "q": "Why did Brachiosaurus have such a towering neck?",
        "options": [
          "To reach high treetop foliage",
          "To swim deep underwater",
          "To sleep on rocks"
        ],
        "correct": 0,
        "exp": "Its neck allowed it to feed on conifer canopies 13 meters high."
      },
      {
        "q": "Were its front legs longer or shorter than its hind legs?",
        "options": [
          "Front legs were longer",
          "Hind legs were longer",
          "All legs were identical"
        ],
        "correct": 0,
        "exp": "'Brachiosaurus' means 'arm lizard' due to its longer front legs."
      },
      {
        "q": "What did Brachiosaurus eat daily?",
        "options": [
          "Hundreds of kilos of leaves and branches",
          "Small fish",
          "Insects and beetles"
        ],
        "correct": 0,
        "exp": "It consumed massive amounts of vegetation every day."
      },
      {
        "q": "What type of massive dinosaur was Brachiosaurus?",
        "options": [
          "A giant sauropod",
          "A flying pterosaur",
          "A small carnivore"
        ],
        "correct": 0,
        "exp": "It belonged to the giant sauropod family."
      },
      {
        "q": "Was Brachiosaurus a fast runner or a gentle giant?",
        "options": [
          "A gentle, slow-moving giant",
          "A fast sprinter",
          "An acrobatic hopper"
        ],
        "correct": 0,
        "exp": "Its immense weight required steady, elephantine walking."
      }
    ]
  },
  {
    "id": "fossil-spinosaurus",
    "name": "Spinosaurus",
    "icon": "🐊",
    "period": "Cretaceous River Hunter",
    "fact": "A huge swimming dinosaur with a giant sail on its back.",
    "speechText": "Fossil uncovered! The Spinosaurus! A huge swimming dinosaur with a giant sail on its back.",
    "quiz": [
      {
        "q": "What dramatic structure rose from Spinosaurus's spine?",
        "options": [
          "A giant dorsal neural sail",
          "Two feathered wings",
          "A rocky hump"
        ],
        "correct": 0,
        "exp": "Its sail was supported by spines up to 1.8 meters tall."
      },
      {
        "q": "Where did Spinosaurus spend much of its hunting time?",
        "options": [
          "In ancient rivers and water deltas",
          "High on mountain peaks",
          "In snowy glaciers"
        ],
        "correct": 0,
        "exp": "It was semi-aquatic with paddle-like tail swimming."
      },
      {
        "q": "What was its long snout shaped like?",
        "options": [
          "A crocodile snout with conical teeth",
          "A duck bill with no teeth",
          "A round beak"
        ],
        "correct": 0,
        "exp": "Its crocodile snout was built to seize slippery fish."
      },
      {
        "q": "What was Spinosaurus's favorite prey?",
        "options": [
          "Giant prehistoric river fish",
          "Acorns and apples",
          "Cave bears"
        ],
        "correct": 0,
        "exp": "It hunted giant sawfish (Onchopristis) and lungfish."
      },
      {
        "q": "Was Spinosaurus even longer than T-Rex?",
        "options": [
          "Yes, it was longer (up to 15m)",
          "No, much smaller",
          "They were identical in length"
        ],
        "correct": 0,
        "exp": "Spinosaurus was the longest carnivorous dinosaur known."
      }
    ]
  },
  {
    "id": "fossil-ankylosaurus",
    "name": "Ankylosaurus",
    "icon": "🛡️",
    "period": "Armored Herbivore",
    "fact": "An armored tank with a heavy bone club on its tail.",
    "speechText": "Fossil uncovered! The Ankylosaurus! An armored tank with a heavy bone club on its tail.",
    "quiz": [
      {
        "q": "What covered the top of an Ankylosaurus's body?",
        "options": [
          "Bony armor plates (osteoderms)",
          "Soft down feathers",
          "Silky fur"
        ],
        "correct": 0,
        "exp": "Tough bone plates embedded in its skin protected it from bites."
      },
      {
        "q": "What powerful weapon was at the tip of its tail?",
        "options": [
          "A heavy solid bone club",
          "A stinging barb",
          "A soft brush"
        ],
        "correct": 0,
        "exp": "Its tail club could shatter the legs of attacking predators."
      },
      {
        "q": "How did Ankylosaurus defend against big predators?",
        "options": [
          "By swinging its club tail and crouching low",
          "By climbing a tree",
          "By flying away"
        ],
        "correct": 0,
        "exp": "It crouched low so only its armored back was exposed."
      },
      {
        "q": "What did Ankylosaurus eat?",
        "options": [
          "Low bushes, ferns, and roots",
          "Big ocean fish",
          "Small lizards"
        ],
        "correct": 0,
        "exp": "It had a broad beak to crop low ground plants."
      },
      {
        "q": "Why is Ankylosaurus nicknamed the 'living tank'?",
        "options": [
          "Its heavy armored shield and tail club",
          "Because it had wheels",
          "Because it fired cannonballs"
        ],
        "correct": 0,
        "exp": "Its impregnable armor resembled a military tank."
      }
    ]
  },
  {
    "id": "fossil-sabertooth",
    "name": "Saber-Toothed Cat",
    "icon": "🐯",
    "period": "Ice Age Mammal",
    "fact": "A powerful hunter with long curved canine teeth.",
    "speechText": "Fossil uncovered! The Saber-Toothed Cat! A powerful hunter with long curved canine teeth.",
    "quiz": [
      {
        "q": "What made the saber-toothed cat's teeth so famous?",
        "options": [
          "Long curved serrated canine teeth",
          "Tiny blunt molars",
          "Blue glowing teeth"
        ],
        "correct": 0,
        "exp": "Its canine teeth reached up to 28 cm (11 inches) long!"
      },
      {
        "q": "What other iconic giant lived alongside Smilodon?",
        "options": [
          "Woolly Mammoth",
          "T-Rex",
          "Spinosaurus"
        ],
        "correct": 0,
        "exp": "Smilodon and mammoths lived together during the Ice Age."
      },
      {
        "q": "What animal family did Smilodon belong to?",
        "options": [
          "The cat family (Felidae)",
          "The dog family",
          "The bear family"
        ],
        "correct": 0,
        "exp": "Smilodon was a prehistoric feline predator."
      },
      {
        "q": "Was it built for long marathon running or muscular ambush?",
        "options": [
          "Muscular strength for ambush",
          "Marathon chasing",
          "Built only to swim"
        ],
        "correct": 0,
        "exp": "Its heavy front shoulders tackled prey to the ground."
      },
      {
        "q": "What famous asphalt seeps preserved thousands of Smilodon fossils?",
        "options": [
          "La Brea Tar Pits in Los Angeles",
          "The Grand Canyon",
          "Death Valley"
        ],
        "correct": 0,
        "exp": "Thousands of skeletons were preserved in La Brea asphalt."
      }
    ]
  },
  {
    "id": "fossil-plesiosaurus",
    "name": "Plesiosaurus",
    "icon": "🦕",
    "period": "Prehistoric Ocean",
    "fact": "A sea creature with four flippers and a slender neck.",
    "speechText": "Fossil uncovered! The Plesiosaurus! A sea creature with four flippers and a slender neck.",
    "quiz": [
      {
        "q": "Where did the Plesiosaurus live and swim?",
        "options": [
          "In prehistoric oceans and seas",
          "In desert sand dunes",
          "In snowy tree branches"
        ],
        "correct": 0,
        "exp": "Plesiosaurs ruled Mesozoic marine waters."
      },
      {
        "q": "How did Plesiosaurus propel itself through the ocean?",
        "options": [
          "With four large paddle flippers",
          "With a propeller",
          "By walking on claws"
        ],
        "correct": 0,
        "exp": "It 'flew' underwater using four large limb paddles."
      },
      {
        "q": "What shaped its long, graceful upper body?",
        "options": [
          "A slender flexible neck",
          "A giant bony horn",
          "A wide turtle shell"
        ],
        "correct": 0,
        "exp": "Its neck allowed it to dart its head into schools of fish."
      },
      {
        "q": "What did Plesiosaurus catch in the water?",
        "options": [
          "Fish, squid, and ammonites",
          "Seaweed and kelp only",
          "Flying insects"
        ],
        "correct": 0,
        "exp": "Interlocking needle teeth trapped slippery marine prey."
      },
      {
        "q": "Did Plesiosaurus breathe air like modern whales and turtles?",
        "options": [
          "Yes, it surfaced to breathe air",
          "No, it had fish gills",
          "No, it did not breathe"
        ],
        "correct": 0,
        "exp": "It had lungs and surfaced regularly for air."
      }
    ]
  },
  {
    "id": "fossil-allosaurus",
    "name": "Allosaurus",
    "icon": "🦖",
    "period": "Jurassic Predator",
    "fact": "A fierce Jurassic hunter with sharp serrated teeth.",
    "speechText": "Fossil uncovered! The Allosaurus! A fierce Jurassic hunter with sharp serrated teeth.",
    "quiz": [
      {
        "q": "During which period was Allosaurus the apex predator?",
        "options": [
          "The Jurassic Period",
          "The Ice Age",
          "The Triassic dawn"
        ],
        "correct": 0,
        "exp": "Allosaurus was the top carnivore of the Late Jurassic."
      },
      {
        "q": "What kind of teeth lined its jaw?",
        "options": [
          "Sharp serrated meat-cutting teeth",
          "Flat grinding molars",
          "No teeth at all"
        ],
        "correct": 0,
        "exp": "Its dagger-like teeth had serrated saw edges."
      },
      {
        "q": "How many claws did each of its strong hands have?",
        "options": [
          "Three sharp curved claws",
          "One single thumb",
          "Ten fingers"
        ],
        "correct": 0,
        "exp": "It had three-fingered forelimbs with large curved claws."
      },
      {
        "q": "What did Allosaurus hunt in the Jurassic floodplains?",
        "options": [
          "Sauropods and Stegosaurus",
          "Grass and fruits",
          "Tree bark only"
        ],
        "correct": 0,
        "exp": "Bite marks show it hunted large Jurassic herbivores."
      },
      {
        "q": "What small bony feature sat above each eye?",
        "options": [
          "Short bony crests or horns",
          "A flower crown",
          "A long metal spike"
        ],
        "correct": 0,
        "exp": "Small bony horns sat above its eyes, possibly for display."
      }
    ]
  },
  {
    "id": "fossil-parasaurolophus",
    "name": "Parasaurolophus",
    "icon": "🦕",
    "period": "Crested Herbivore",
    "fact": "It used its long head crest to blow trumpeting sounds.",
    "speechText": "Fossil uncovered! The Parasaurolophus! It used its long head crest to blow trumpeting sounds.",
    "quiz": [
      {
        "q": "What grew backward from the skull of Parasaurolophus?",
        "options": [
          "A long hollow curved crest",
          "A battle axe",
          "A giant umbrella"
        ],
        "correct": 0,
        "exp": "Its hollow curved crest could be up to 1.8 meters long!"
      },
      {
        "q": "What did scientists discover its hollow crest was used for?",
        "options": [
          "Making deep resonant trumpet sounds",
          "Storing extra water",
          "Catching flying birds"
        ],
        "correct": 0,
        "exp": "Air resonated inside the cranial crest like a brass trombone."
      },
      {
        "q": "What family of duck-billed dinosaurs did it belong to?",
        "options": [
          "Hadrosaurs",
          "Ceratopsians",
          "Theropods"
        ],
        "correct": 0,
        "exp": "It was a hadrosaur (duck-billed dinosaur)."
      },
      {
        "q": "What did Parasaurolophus grind with its tooth battery?",
        "options": [
          "Leaves, twigs, and pine needles",
          "Meat and bones",
          "Sea shells only"
        ],
        "correct": 0,
        "exp": "Hundreds of grinding teeth pulverized tough plant matter."
      },
      {
        "q": "Could Parasaurolophus walk on both two and four legs?",
        "options": [
          "Yes, it could walk on 2 or 4 limbs",
          "No, it only crawled",
          "No, it hopped like a rabbit"
        ],
        "correct": 0,
        "exp": "It grazed on all fours and could run on two hind legs."
      }
    ]
  },
  {
    "id": "fossil-archaeopteryx",
    "name": "Archaeopteryx",
    "icon": "🦅",
    "period": "Dino-Bird Transition",
    "fact": "The famous winged fossil linking dinosaurs and birds.",
    "speechText": "Fossil uncovered! The Archaeopteryx! The famous winged fossil linking dinosaurs and birds.",
    "quiz": [
      {
        "q": "Why is Archaeopteryx one of history's most famous fossils?",
        "options": [
          "It shows the transition between dinosaurs and birds",
          "It was the largest creature ever",
          "It had glowing golden bones"
        ],
        "correct": 0,
        "exp": "It proved that modern birds evolved from theropod dinosaurs."
      },
      {
        "q": "What covered Archaeopteryx's wings and body?",
        "options": [
          "True flight feathers",
          "Hard turtle shells",
          "Fur like a rabbit"
        ],
        "correct": 0,
        "exp": "Its feathers were aerodynamically asymmetrical, built for flight."
      },
      {
        "q": "What dinosaur reptilian features did it still have?",
        "options": [
          "Toothed jaws, wing claws, and long bony tail",
          "Gills and fins",
          "A horn on its nose"
        ],
        "correct": 0,
        "exp": "Unlike modern birds, it had teeth and a long bony tail."
      },
      {
        "q": "In which country's limestone was it discovered in 1861?",
        "options": [
          "Germany (Solnhofen limestone)",
          "Brazil",
          "Australia"
        ],
        "correct": 0,
        "exp": "Solnhofen quarries preserved delicate feather impressions."
      },
      {
        "q": "About what size was an Archaeopteryx?",
        "options": [
          "About the size of a raven or pigeon",
          "As big as a bus",
          "Tiny as a mosquito"
        ],
        "correct": 0,
        "exp": "It was roughly the size of a modern magpie or raven."
      }
    ]
  },
  {
    "id": "fossil-diplodocus",
    "name": "Diplodocus",
    "icon": "🦕",
    "period": "Late Jurassic",
    "fact": "One of the longest creatures ever with a whip-like tail.",
    "speechText": "Fossil uncovered! The Diplodocus! One of the longest creatures ever with a whip-like tail.",
    "quiz": [
      {
        "q": "What was remarkable about Diplodocus's body length?",
        "options": [
          "It was over 85 feet (26 meters) long",
          "It was only three feet long",
          "It was shaped like a cube"
        ],
        "correct": 0,
        "exp": "Diplodocus was one of the longest land animals to ever exist."
      },
      {
        "q": "What could Diplodocus do with its long whip-like tail tip?",
        "options": [
          "Crack it like a bullwhip at supersonic speed",
          "Use it to catch fish",
          "Tie it in knots"
        ],
        "correct": 0,
        "exp": "Scientists calculate the tail tip could break the sound barrier!"
      },
      {
        "q": "What did its peg-like front teeth do to food?",
        "options": [
          "Strip leaves cleanly from branches",
          "Crush heavy bones",
          "Chew steak"
        ],
        "correct": 0,
        "exp": "Its peg teeth combed foliage straight off conifer twigs."
      },
      {
        "q": "How did Diplodocus hold its long neck most of the time?",
        "options": [
          "Mostly horizontal to sweep low ferns",
          "Straight up into clouds",
          "Coiled like a spring"
        ],
        "correct": 0,
        "exp": "Its vertebrae kept the neck extending forward horizontally."
      },
      {
        "q": "How did Diplodocus reproduce?",
        "options": [
          "Laid clutches of round eggs in nests",
          "Gave live birth",
          "Built nests high in trees"
        ],
        "correct": 0,
        "exp": "Sauropods laid clutches of hard-shelled eggs in ground nests."
      }
    ]
  },
  {
    "id": "fossil-dimetrodon",
    "name": "Dimetrodon",
    "icon": "🦎",
    "period": "Permian Apex",
    "fact": "It lived before dinosaurs with a sun-catching back sail.",
    "speechText": "Fossil uncovered! The Dimetrodon! It lived before dinosaurs with a sun-catching back sail.",
    "quiz": [
      {
        "q": "Did Dimetrodon live before or after dinosaurs?",
        "options": [
          "Before dinosaurs (Permian period)",
          "After dinosaurs died out",
          "During the Ice Age"
        ],
        "correct": 0,
        "exp": "Dimetrodon lived 295 million years ago, 50M years before dinosaurs!"
      },
      {
        "q": "What supported its iconic dorsal sail?",
        "options": [
          "Elongated neural spine bones",
          "Paper feathers",
          "Stiff wooden poles"
        ],
        "correct": 0,
        "exp": "Extremely tall neural spines supported the vascular skin sail."
      },
      {
        "q": "What was one main purpose of its back sail?",
        "options": [
          "Thermoregulation (warming in the sun)",
          "Sailing on ocean waves",
          "Flying in air"
        ],
        "correct": 0,
        "exp": "Blood flowing through the sail heated or cooled its body."
      },
      {
        "q": "Is Dimetrodon more closely related to reptiles or mammals?",
        "options": [
          "Mammals (it is a synapsid)",
          "Modern birds",
          "Frogs"
        ],
        "correct": 0,
        "exp": "It is a stem-mammal (synapsid), more cousin to us than to lizards!"
      },
      {
        "q": "What does 'Dimetrodon' mean?",
        "options": [
          "Two measures of teeth",
          "Giant red lizard",
          "King of rocks"
        ],
        "correct": 0,
        "exp": "It had two distinct tooth types: shearing canines and molars."
      }
    ]
  },
  {
    "id": "fossil-megalodon",
    "name": "Megalodon",
    "icon": "🦈",
    "period": "Cenozoic Apex",
    "fact": "A colossal ancient shark that ruled prehistoric oceans.",
    "speechText": "Fossil uncovered! The Megalodon! A colossal ancient shark that ruled prehistoric oceans.",
    "quiz": [
      {
        "q": "What prehistoric ocean creature was the Megalodon?",
        "options": [
          "A giant predatory shark",
          "A reptile with flippers",
          "A gentle blue whale"
        ],
        "correct": 0,
        "exp": "Megalodon was the largest shark that ever lived (up to 18m)!"
      },
      {
        "q": "How large could a Megalodon tooth grow?",
        "options": [
          "Over 7 inches (18 cm) long",
          "Less than 1 millimeter",
          "As big as a submarine"
        ],
        "correct": 0,
        "exp": "Its fossil teeth are bigger than an adult human's open hand."
      },
      {
        "q": "What was Megalodon's skeleton made of?",
        "options": [
          "Cartilage (which rarely fossilizes)",
          "Solid steel",
          "Carved granite rock"
        ],
        "correct": 0,
        "exp": "Like modern sharks, its skeleton was cartilage, so teeth fossilize best."
      },
      {
        "q": "What was Megalodon's primary food source?",
        "options": [
          "Ancient whales and large marine mammals",
          "Kelp and seaweed",
          "Plankton only"
        ],
        "correct": 0,
        "exp": "Its massive jaws could crush whale ribs and flippers."
      },
      {
        "q": "What does 'Megalodon' translate to in Greek?",
        "options": [
          "Big tooth (megas + odon)",
          "Fast fin",
          "Ocean monster"
        ],
        "correct": 0,
        "exp": "'Megas' (big) + 'odous/odont' (tooth) = Big Tooth!"
      }
    ]
  },
  {
    "id": "fossil-iguanodon",
    "name": "Iguanodon",
    "icon": "🦕",
    "period": "Early Cretaceous",
    "fact": "A peaceful plant-eater with conical spikes on its thumbs.",
    "speechText": "Fossil uncovered! The Iguanodon! A peaceful plant-eater with conical spikes on its thumbs.",
    "quiz": [
      {
        "q": "What unique feature did Iguanodon have on each thumb?",
        "options": [
          "A sharp conical thumb spike",
          "A poisonous claw",
          "A sixth finger"
        ],
        "correct": 0,
        "exp": "Its sturdy thumb spike was used for defense and cracking seeds."
      },
      {
        "q": "Where did early paleontologists first mistakenly place its thumb spike?",
        "options": [
          "On its nose like a horn",
          "On its tail",
          "Inside its ear"
        ],
        "correct": 0,
        "exp": "Gideon Mantell first reconstructed it as a horn on the nose!"
      },
      {
        "q": "What modern reptile did its teeth closely resemble?",
        "options": [
          "An iguana lizard",
          "A chameleon",
          "A crocodile"
        ],
        "correct": 0,
        "exp": "Its fossil teeth resembled giant iguana teeth, inspiring its name."
      },
      {
        "q": "Was Iguanodon an herbivore or carnivore?",
        "options": [
          "An herbivore (plant-eater)",
          "A fierce meat-hunter",
          "An insect-eater"
        ],
        "correct": 0,
        "exp": "It had a keratinous beak to snip ferns and horsetails."
      },
      {
        "q": "Could Iguanodon move on two and four feet?",
        "options": [
          "Yes, it walked on 4 feet and ran on 2",
          "No, only on 2 legs",
          "No, it could only roll"
        ],
        "correct": 0,
        "exp": "Its three middle fingers had hoof-like pads for four-legged walking."
      }
    ]
  },
  {
    "id": "fossil-carnotaurus",
    "name": "Carnotaurus",
    "icon": "🦖",
    "period": "Late Cretaceous",
    "fact": "A fast running predator with bull horns above its eyes.",
    "speechText": "Fossil uncovered! The Carnotaurus! A fast running predator with bull horns above its eyes.",
    "quiz": [
      {
        "q": "What unusual feature sat right above Carnotaurus's eyes?",
        "options": [
          "Two thick bull-like horns",
          "A giant glowing lamp",
          "Long rabbit ears"
        ],
        "correct": 0,
        "exp": "It is the only known meat-eating dinosaur with thick skull horns."
      },
      {
        "q": "What were Carnotaurus's front arms like?",
        "options": [
          "Extremely tiny and vestigial",
          "Long with sharp wings",
          "Muscular and heavy"
        ],
        "correct": 0,
        "exp": "Its arms were even smaller than T-Rex arms, without wrist bones."
      },
      {
        "q": "What does its name 'Carnotaurus' mean?",
        "options": [
          "Meat-eating bull (carnis + taurus)",
          "Fast running bird",
          "Horned green lizard"
        ],
        "correct": 0,
        "exp": "Named for its bovine horns and carnivorous hunting diet."
      },
      {
        "q": "How fast was Carnotaurus compared to other dinosaurs?",
        "options": [
          "One of the fastest large theropods",
          "Slower than a snail",
          "Could not run"
        ],
        "correct": 0,
        "exp": "Giant caudofemoralis tail muscles powered explosive sprints."
      },
      {
        "q": "In which continent were complete Carnotaurus fossils found?",
        "options": [
          "South America (Patagonia, Argentina)",
          "Antarctica",
          "Europe"
        ],
        "correct": 0,
        "exp": "Discovered in 1984 in the Chubut Province of Argentina."
      }
    ]
  },
  {
    "id": "fossil-megatherium",
    "name": "Megatherium",
    "icon": "🦥",
    "period": "Pleistocene Ice Age",
    "fact": "A giant ground sloth that stood as tall as an elephant.",
    "speechText": "Fossil uncovered! The Megatherium! A giant ground sloth that stood as tall as an elephant.",
    "quiz": [
      {
        "q": "What modern animal is Megatherium related to?",
        "options": [
          "Modern tree sloths and anteaters",
          "Lions and tigers",
          "Giraffes"
        ],
        "correct": 0,
        "exp": "Megatherium was a giant extinct ground sloth cousin."
      },
      {
        "q": "How tall could Megatherium stand when rearing up?",
        "options": [
          "Up to 6 meters (20 feet) tall",
          "Only 1 foot tall",
          "As tall as a skyscraper"
        ],
        "correct": 0,
        "exp": "When rearing on its hind legs, it matched the height of an elephant!"
      },
      {
        "q": "Did Megatherium live in trees or on the ground?",
        "options": [
          "On the ground (giant ground sloth)",
          "High in treetops",
          "Deep underwater"
        ],
        "correct": 0,
        "exp": "Weighing 4 tons, it was far too massive to climb trees."
      },
      {
        "q": "What did Megatherium use its massive curved claws for?",
        "options": [
          "Pulling down leafy branches to eat",
          "Swimming across oceans",
          "Digging coal mines"
        ],
        "correct": 0,
        "exp": "Its claws gripped high tree limbs to strip nutritious foliage."
      },
      {
        "q": "During which epoch did Megatherium roam the Americas?",
        "options": [
          "The Pleistocene (Ice Age)",
          "The Triassic dawn",
          "The Carboniferous"
        ],
        "correct": 0,
        "exp": "It flourished during the Ice Age until around 10,000 years ago."
      }
    ]
  }
];
const U11_INVENTIONS = [
  {
    "id": "inv-clock",
    "item": "The Mechanical Clock",
    "date": "14th Century Europe",
    "icon": "🕰️",
    "desc": "Allowed towns to measure hours with gears and bells.",
    "speechText": "The mechanical clock was invented in 14th century europe. Allowed towns to measure hours with gears and bells.",
    "quiz": [
      {
        "q": "What did the mechanical clock allow medieval towns to measure?",
        "options": [
          "Hours and minutes with gears",
          "The speed of the wind",
          "The weight of gold"
        ],
        "correct": 0,
        "exp": "Mechanical gears and bells divided the day into equal hours."
      },
      {
        "q": "In which century were weight-driven clocks built in Europe?",
        "options": [
          "14th Century",
          "21st Century",
          "Stone Age"
        ],
        "correct": 0,
        "exp": "The first public clock towers arose in 14th-century European cities."
      },
      {
        "q": "What moved the hands and rang the bells in town towers?",
        "options": [
          "Weights, gears, and escapements",
          "Digital batteries",
          "Water fountains only"
        ],
        "correct": 0,
        "exp": "Heavy falling weights turned toothed gears regulated by an escapement."
      },
      {
        "q": "Why was measuring time so important for communities?",
        "options": [
          "For market hours, church bells, and daily work",
          "To change the weather",
          "To sail across space"
        ],
        "correct": 0,
        "exp": "It synchronized daily trade, prayer schedules, and civic work."
      },
      {
        "q": "What rhythmic swinging device later perfected clock precision?",
        "options": [
          "The pendulum",
          "A solar panel",
          "An electric motor"
        ],
        "correct": 0,
        "exp": "Christian Huygens introduced the pendulum in 1656."
      }
    ]
  },
  {
    "id": "inv-paper",
    "item": "Paper & Printing",
    "date": "Ancient China",
    "icon": "📜",
    "desc": "Revolutionized human knowledge, storytelling and books.",
    "speechText": "Paper & printing was invented in ancient china. Revolutionized human knowledge, storytelling and books.",
    "quiz": [
      {
        "q": "Where were paper and early woodblock printing first invented?",
        "options": [
          "Ancient China",
          "Ancient Egypt",
          "Medieval England"
        ],
        "correct": 0,
        "exp": "Cai Lun perfected papermaking in Han Dynasty China."
      },
      {
        "q": "What did paper and printing revolutionize for humanity?",
        "options": [
          "Sharing knowledge, storytelling, and books",
          "Cooking recipes only",
          "Building stone walls"
        ],
        "correct": 0,
        "exp": "Books and learning could be preserved and shared across nations."
      },
      {
        "q": "What fibers were used by ancient papermakers?",
        "options": [
          "Mulberry bark, hemp, and rags",
          "Plastics and glass",
          "Crushed rock"
        ],
        "correct": 0,
        "exp": "Macerated plant fibers were pressed into flat sheets on wire screens."
      },
      {
        "q": "What did people write on before paper was common?",
        "options": [
          "Bamboo slips, silk, and stone tablets",
          "Laptops and tablets",
          "Thin sheets of metal"
        ],
        "correct": 0,
        "exp": "Bamboo slips and silk rolls were heavy and expensive."
      },
      {
        "q": "Why was printing better than copying books by hand?",
        "options": [
          "It produced many exact copies swiftly",
          "It was much slower",
          "It used invisible ink"
        ],
        "correct": 0,
        "exp": "Printing allowed hundreds of books to be produced in days."
      }
    ]
  },
  {
    "id": "inv-compass",
    "item": "The Magnetic Compass",
    "date": "Han Dynasty",
    "icon": "🧭",
    "desc": "Helped courageous explorers sail across vast oceans without getting lost.",
    "speechText": "The magnetic compass was invented in han dynasty. Helped courageous explorers sail across vast oceans without getting lost.",
    "quiz": [
      {
        "q": "What mineral did ancient Han inventors use to make the first compass?",
        "options": [
          "Lodestone (naturally magnetic iron ore)",
          "Pure gold",
          "Clear diamond"
        ],
        "correct": 0,
        "exp": "Carved lodestone spoons balanced on bronze plates pointed South."
      },
      {
        "q": "How did the compass help sailors and explorers?",
        "options": [
          "Showed constant direction on open seas",
          "Forecasted ocean rain",
          "Sped up the sailing ship"
        ],
        "correct": 0,
        "exp": "Sailors could navigate even when clouds hid the sun and stars."
      },
      {
        "q": "What direction does a magnetic compass needle naturally align with?",
        "options": [
          "Magnetic North",
          "The setting sun",
          "The tallest mountain"
        ],
        "correct": 0,
        "exp": "Earth's magnetic field directs the magnetized needle North-South."
      },
      {
        "q": "Before compasses, what did sailors rely on at night?",
        "options": [
          "The stars and constellations",
          "Flashlights",
          "Road street signs"
        ],
        "correct": 0,
        "exp": "Navigators tracked the North Star (Polaris) across clear skies."
      },
      {
        "q": "What historic age expanded greatly because of the compass?",
        "options": [
          "The Age of Exploration and Discovery",
          "The Stone Age",
          "The Dinosaur Era"
        ],
        "correct": 0,
        "exp": "It enabled trans-oceanic voyages across the Atlantic and Pacific."
      }
    ]
  },
  {
    "id": "inv-telescope",
    "item": "The Telescope",
    "date": "1608 Netherlands",
    "icon": "🔭",
    "desc": "Galileo looked through it and discovered the moons of Jupiter!",
    "speechText": "The telescope was invented in 1608 netherlands. Galileo looked through it and discovered the moons of jupiter!",
    "quiz": [
      {
        "q": "What famous astronomer turned the telescope toward Jupiter in 1609?",
        "options": [
          "Galileo Galilei",
          "Isaac Newton",
          "Christopher Columbus"
        ],
        "correct": 0,
        "exp": "Galileo built his own telescope and observed the heavens."
      },
      {
        "q": "What did Galileo discover orbiting Jupiter with his telescope?",
        "options": [
          "Four large moons (Galilean moons)",
          "A giant space station",
          "Rings of pure ice"
        ],
        "correct": 0,
        "exp": "Io, Europa, Ganymede, and Callisto orbit around Jupiter."
      },
      {
        "q": "What optical components work together inside a refracting telescope?",
        "options": [
          "Curved optical glass lenses",
          "Wooden mirrors",
          "Clear water tubes"
        ],
        "correct": 0,
        "exp": "An objective lens gathers light and an eyepiece magnifies the image."
      },
      {
        "q": "In which country was the first patented spyglass made in 1608?",
        "options": [
          "The Netherlands (Hans Lippershey)",
          "Spain",
          "Brazil"
        ],
        "correct": 0,
        "exp": "Spectacle-maker Hans Lippershey applied for the first patent in 1608."
      },
      {
        "q": "How does a telescope transform distant stars and planets?",
        "options": [
          "Makes them appear closer and brighter",
          "Makes them smaller and darker",
          "Makes them invisible"
        ],
        "correct": 0,
        "exp": "It collects more photons than human eyes, magnifying distant details."
      }
    ]
  },
  {
    "id": "inv-wheel",
    "item": "The Wheel",
    "date": "3500 BC Mesopotamia",
    "icon": "🎡",
    "desc": "The wheel revolutionized transportation and crafting forever.",
    "speechText": "The wheel was invented in 3500 bc. The wheel revolutionized transportation and crafting forever.",
    "quiz": [
      {
        "q": "Where and when was the wheel first invented?",
        "options": [
          "Mesopotamia around 3500 BC",
          "America in 1900",
          "Rome in 500 AD"
        ],
        "correct": 0,
        "exp": "Sumerian craftsmen in Mesopotamia created the first wheels."
      },
      {
        "q": "What was the wheel first used for before transport carts?",
        "options": [
          "A potter's wheel for shaping clay",
          "A clock gear",
          "A bicycle tire"
        ],
        "correct": 0,
        "exp": "Potters first spun horizontal wheels to mold clay bowls and jars."
      },
      {
        "q": "What did adding wheels to carts allow humans to achieve?",
        "options": [
          "Transport heavy cargo over long distances",
          "Fly over mountains",
          "Dig deep under water"
        ],
        "correct": 0,
        "exp": "Friction dropped drastically, letting animals pull massive loads."
      },
      {
        "q": "What central rod connects a pair of wheels together?",
        "options": [
          "An axle",
          "A nail",
          "A rubber band"
        ],
        "correct": 0,
        "exp": "The wheel-and-axle mechanism is a foundational simple machine."
      },
      {
        "q": "What innovation made chariot wheels lighter and faster?",
        "options": [
          "Spokes instead of solid wood disks",
          "Carving from stone",
          "Making square corners"
        ],
        "correct": 0,
        "exp": "Spoked wheels around 2000 BC made chariots fast and agile."
      }
    ]
  },
  {
    "id": "inv-lightbulb",
    "item": "The Lightbulb",
    "date": "1879 America",
    "icon": "💡",
    "desc": "Homes and streets were illuminated safely through the night.",
    "speechText": "The lightbulb was invented in 1879. Homes and streets were illuminated safely through the night.",
    "quiz": [
      {
        "q": "What does an incandescent bulb use to produce bright light?",
        "options": [
          "Electricity heating a glowing filament",
          "Burning vegetable oil",
          "Gas candle flames"
        ],
        "correct": 0,
        "exp": "Electric current heats a filament until it glows incandescently."
      },
      {
        "q": "What inventor created a long-lasting carbonized filament bulb in 1879?",
        "options": [
          "Thomas Edison",
          "Alexander Graham Bell",
          "Albert Einstein"
        ],
        "correct": 0,
        "exp": "Edison and his Menlo Park team tested thousands of filament materials."
      },
      {
        "q": "What condition inside the glass bulb kept the filament from burning up?",
        "options": [
          "A vacuum or inert gas",
          "Pure oxygen",
          "Liquid water"
        ],
        "correct": 0,
        "exp": "Without oxygen, the hot carbon or tungsten filament cannot burn."
      },
      {
        "q": "How did electric lightbulbs improve everyday life in cities?",
        "options": [
          "Made homes, schools, and streets bright and safe",
          "Cooled down hot houses",
          "Made cars drive faster"
        ],
        "correct": 0,
        "exp": "Replaced dangerous open gas flames and smoke in homes."
      },
      {
        "q": "What energy-saving lights do modern homes mostly use today?",
        "options": [
          "LED lights",
          "Candle lanterns",
          "Gas lamps"
        ],
        "correct": 0,
        "exp": "LEDs produce bright light using a fraction of the electricity."
      }
    ]
  },
  {
    "id": "inv-astrolabe",
    "item": "The Astrolabe",
    "date": "Ancient Greece & Islamic Golden Age",
    "icon": "🧭",
    "desc": "The astrolabe was invented by ancient astronomers to navigate using the stars.",
    "speechText": "The astrolabe was invented by ancient astronomers to navigate using the stars.",
    "quiz": [
      {
        "q": "What celestial bodies did the astrolabe measure to find time and latitude?",
        "options": [
          "The altitude of the sun and stars",
          "The speed of ocean fish",
          "The shape of clouds"
        ],
        "correct": 0,
        "exp": "By sighting stars through the alidade, it computed local time and position."
      },
      {
        "q": "What civilization brought the astrolabe to artistic and scientific perfection?",
        "options": [
          "Astronomers of the Islamic Golden Age",
          "Cave dwellers",
          "Medieval blacksmiths"
        ],
        "correct": 0,
        "exp": "Scholars in Baghdad, Damascus, and Cordoba added intricate star maps."
      },
      {
        "q": "What was the astrolabe known as in the ancient world?",
        "options": [
          "A handheld analog astronomical computer",
          "The magic lantern",
          "The ocean compass"
        ],
        "correct": 0,
        "exp": "It could solve hundreds of astronomical and geometric problems."
      },
      {
        "q": "What metal was most commonly engraved to make astrolabe plates?",
        "options": [
          "Cast and engraved brass",
          "Soft pine wood",
          "Clay"
        ],
        "correct": 0,
        "exp": "Brass resisted corrosion and held precise engraved degree marks."
      },
      {
        "q": "Could an astrolabe calculate the exact moment of dawn and sunset?",
        "options": [
          "Yes, with remarkable accuracy",
          "No, it only showed weather",
          "No, it only weighed coins"
        ],
        "correct": 0,
        "exp": "Rotating the rete against the plate gave exact sunrise and sunset times."
      }
    ]
  },
  {
    "id": "inv-sundial",
    "item": "The Sundial",
    "date": "Ancient Egypt",
    "icon": "☀️",
    "desc": "The sundial was created in ancient Egypt to tell time by tracking the shadow of the sun.",
    "speechText": "The sundial was created in ancient Egypt to tell time by tracking the shadow of the sun.",
    "quiz": [
      {
        "q": "How does a sundial measure hours during the day?",
        "options": [
          "By tracking a moving shadow cast by the sun",
          "By dripping drops of water",
          "By ringing loud bells"
        ],
        "correct": 0,
        "exp": "As the sun traverses the sky, the shadow rotates around hour lines."
      },
      {
        "q": "What is the upright pointer that casts the shadow called?",
        "options": [
          "A gnomon",
          "A pendulum",
          "A piston"
        ],
        "correct": 0,
        "exp": "The gnomon's angled edge points toward the celestial pole."
      },
      {
        "q": "Where were early sundials and monumental shadow obelisks erected?",
        "options": [
          "Ancient Egypt",
          "Modern Canada",
          "Antarctica"
        ],
        "correct": 0,
        "exp": "Egyptian shadow clocks date back to 1500 BC."
      },
      {
        "q": "What is one limitation of a traditional outdoor sundial?",
        "options": [
          "It cannot tell time at night or on rainy days",
          "It runs out of battery",
          "It ticks too loudly"
        ],
        "correct": 0,
        "exp": "Without direct sunlight, no shadow is cast on the dial plate."
      },
      {
        "q": "Why does the shadow move in a circle across the dial face?",
        "options": [
          "Because the Earth rotates on its axis",
          "Because the sun changes shape",
          "Because clock hands turn"
        ],
        "correct": 0,
        "exp": "Earth's daily 360-degree rotation causes the shadow's steady sweep."
      }
    ]
  },
  {
    "id": "inv-aqueduct",
    "item": "The Roman Aqueduct",
    "date": "Ancient Rome",
    "icon": "🏛️",
    "desc": "The Roman aqueduct carried fresh water from distant mountains into cities using stone arches.",
    "speechText": "The Roman aqueduct carried fresh water from distant mountains into cities using stone arches.",
    "quiz": [
      {
        "q": "What was the purpose of a Roman aqueduct?",
        "options": [
          "To carry clean mountain water into cities",
          "To defend against enemy armies",
          "To keep horses warm"
        ],
        "correct": 0,
        "exp": "Aqueducts supplied millions of liters of freshwater daily."
      },
      {
        "q": "What architectural feature allowed aqueducts to cross valleys?",
        "options": [
          "Stacked stone arches",
          "Rope suspension bridges",
          "Wooden rafts"
        ],
        "correct": 0,
        "exp": "Tiered stone arches distributed immense weight across wide canyons."
      },
      {
        "q": "What natural force moved water through the aqueduct channel?",
        "options": [
          "Gravity along a steady gentle downhill slope",
          "Electric motor pumps",
          "Wind sails"
        ],
        "correct": 0,
        "exp": "Engineers maintained a gradient of just a few inches per mile!"
      },
      {
        "q": "Where did freshwater arrive inside Roman cities?",
        "options": [
          "Public fountains, thermal baths, and homes",
          "Only to the emperor's palace",
          "Into deep caves"
        ],
        "correct": 0,
        "exp": "Fountains provided free clean drinking water to all citizens."
      },
      {
        "q": "What famous 3-tier Roman aqueduct bridge still stands in France?",
        "options": [
          "Pont du Gard",
          "London Bridge",
          "Golden Gate"
        ],
        "correct": 0,
        "exp": "The Pont du Gard near Nîmes is over 2,000 years old!"
      }
    ]
  },
  {
    "id": "inv-gunpowder",
    "item": "Gunpowder",
    "date": "9th Century Tang China",
    "icon": "💥",
    "desc": "Gunpowder was discovered in China and was first used for colorful fireworks and festivals.",
    "speechText": "Gunpowder was discovered in China and was first used for colorful fireworks and festivals.",
    "quiz": [
      {
        "q": "Where was gunpowder originally discovered in the 9th century?",
        "options": [
          "China during the Tang Dynasty",
          "Ancient Greece",
          "Medieval Scandinavia"
        ],
        "correct": 0,
        "exp": "Chinese alchemists discovered black powder during the Tang period."
      },
      {
        "q": "What was gunpowder first celebrated for in public ceremonies?",
        "options": [
          "Colorful fireworks and lantern festivals",
          "Making baking flour",
          "Painting walls"
        ],
        "correct": 0,
        "exp": "Loud firecrackers and colorful displays warded off evil spirits."
      },
      {
        "q": "What three substances made up traditional black powder?",
        "options": [
          "Saltpeter (potassium nitrate), sulfur, and charcoal",
          "Salt, sugar, and flour",
          "Sand, clay, and water"
        ],
        "correct": 0,
        "exp": "The exact proportion created explosive combustion when ignited."
      },
      {
        "q": "Who stumbled upon the formula while seeking immortality elixirs?",
        "options": [
          "Daoist alchemists",
          "Roman legionnaires",
          "Viking sailors"
        ],
        "correct": 0,
        "exp": "Alchemists experimenting with sulfur and saltpeter discovered the mix."
      },
      {
        "q": "What trade network carried gunpowder knowledge across Eurasia?",
        "options": [
          "The Silk Road",
          "The Atlantic Canal",
          "The Polar Express"
        ],
        "correct": 0,
        "exp": "Traders and diplomats spread fireworks knowledge along the Silk Road."
      }
    ]
  },
  {
    "id": "inv-eyeglasses",
    "item": "Eyeglasses",
    "date": "1286 Italy",
    "icon": "👓",
    "desc": "Eyeglasses were invented in Italy so scholars and readers could see small letters clearly.",
    "speechText": "Eyeglasses were invented in Italy so scholars and readers could see small letters clearly.",
    "quiz": [
      {
        "q": "Where were the first wearable reading spectacles invented around 1286?",
        "options": [
          "Northern Italy (Pisa and Venice)",
          "Ancient Japan",
          "Australia"
        ],
        "correct": 0,
        "exp": "Italian glass craftsmen in Pisa and Venice created the first pairs."
      },
      {
        "q": "Who benefited first from convex glass lenses?",
        "options": [
          "Scholars, monks, scribes, and elderly readers",
          "Blacksmiths only",
          "Marathon runners"
        ],
        "correct": 0,
        "exp": "It extended the productive reading lives of scholars and artisans."
      },
      {
        "q": "What island near Venice was world-renowned for crystal glassblowing?",
        "options": [
          "Murano",
          "Corsica",
          "Santorini"
        ],
        "correct": 0,
        "exp": "Murano master glassmakers excelled at clear quartz crystal lenses."
      },
      {
        "q": "How were early spectacles held in place on the face?",
        "options": [
          "Rivet frames pinched onto the bridge of the nose",
          "Ear hooks like today",
          "Glued to eyebrows"
        ],
        "correct": 0,
        "exp": "Two framed lenses were riveted together to grip the nose bridge."
      },
      {
        "q": "What refractive vision condition do concave lenses correct today?",
        "options": [
          "Nearsightedness (myopia)",
          "Hearing problems",
          "Color blindness only"
        ],
        "correct": 0,
        "exp": "Concave lenses spread light rays to focus clearly on the retina."
      }
    ]
  },
  {
    "id": "inv-waterwheel",
    "item": "The Water Wheel",
    "date": "Ancient Greece & Rome",
    "icon": "⚙️",
    "desc": "The water wheel harnessed river currents to grind grain into flour and power workshops.",
    "speechText": "The water wheel harnessed river currents to grind grain into flour and power workshops.",
    "quiz": [
      {
        "q": "What natural energy source turns the paddles of a water wheel?",
        "options": [
          "Flowing river or stream currents",
          "Steam pressure",
          "Solar radiation"
        ],
        "correct": 0,
        "exp": "The kinetic momentum of rushing water turns the paddle blades."
      },
      {
        "q": "What was one of the most important tasks of early watermills?",
        "options": [
          "Grinding grain into flour for bread",
          "Carrying passengers",
          "Printing daily news"
        ],
        "correct": 0,
        "exp": "Gristmills ground sacks of grain in minutes rather than hours."
      },
      {
        "q": "What mechanical parts transmit rotary power inside a watermill?",
        "options": [
          "Driveshafts, gears, and millstones",
          "A metal wire",
          "A leather strap only"
        ],
        "correct": 0,
        "exp": "Wood and iron gear wheels turned the heavy upper runner stone."
      },
      {
        "q": "Why was a water wheel superior to manual hand-cranks?",
        "options": [
          "It produced enormous continuous mechanical power",
          "It produced more water",
          "It baked bread instantly"
        ],
        "correct": 0,
        "exp": "A single mill could do the work of dozens of workers and horses."
      },
      {
        "q": "What modern renewable power station evolved from the water wheel?",
        "options": [
          "Hydroelectric dam turbines",
          "Nuclear reactors",
          "Coal stoves"
        ],
        "correct": 0,
        "exp": "Modern hydro turbines use the exact same fluid dynamics principle!"
      }
    ]
  },
  {
    "id": "inv-abacus",
    "item": "The Abacus",
    "date": "Ancient Mesopotamia & Asia",
    "icon": "🧮",
    "desc": "The abacus was the first calculating machine using sliding wooden beads on rods.",
    "speechText": "The abacus was the first calculating machine using sliding wooden beads on rods.",
    "quiz": [
      {
        "q": "What is an abacus used for in commerce and accounting?",
        "options": [
          "Rapid arithmetic calculations and counting",
          "Playing melodies",
          "Weighing heavy stones"
        ],
        "correct": 0,
        "exp": "Merchants calculated additions, subtractions, and multiplications swiftly."
      },
      {
        "q": "What moves along rods or grooves to represent numbers?",
        "options": [
          "Sliding wooden or stone beads",
          "Steel magnets",
          "Drops of oil"
        ],
        "correct": 0,
        "exp": "Bead positions represent ones, tens, hundreds, and thousands."
      },
      {
        "q": "What math operations can an expert calculate on an abacus?",
        "options": [
          "Addition, subtraction, multiplication, and division",
          "Only spelling letters",
          "Drawing maps"
        ],
        "correct": 0,
        "exp": "Skilled users can even calculate square roots and cube roots!"
      },
      {
        "q": "What famous Asian counting frame uses 1 upper and 4 lower beads?",
        "options": [
          "The Japanese Soroban",
          "The Compass",
          "The Astrolabe"
        ],
        "correct": 0,
        "exp": "The Soroban is a base-10 abacus widely taught in Asian schools."
      },
      {
        "q": "Why is the abacus considered an ancestor of modern computers?",
        "options": [
          "It processes, registers, and stores numeric data mechanically",
          "Because it had a screen",
          "Because it connected to wifi"
        ],
        "correct": 0,
        "exp": "It was humanity's first mechanical device for numeric processing."
      }
    ]
  },
  {
    "id": "inv-windmill",
    "item": "The Windmill",
    "date": "7th Century Persia",
    "icon": "💨",
    "desc": "The windmill was invented in Persia to capture the power of the wind and pump water.",
    "speechText": "The windmill was invented in Persia to capture the power of the wind and pump water.",
    "quiz": [
      {
        "q": "What clean atmospheric force drives windmill blades?",
        "options": [
          "The kinetic energy of the wind",
          "River water",
          "Falling rain"
        ],
        "correct": 0,
        "exp": "Air currents strike tilted sails to turn a central drive shaft."
      },
      {
        "q": "Where were vertical-axis windmills first constructed to grind corn?",
        "options": [
          "Ancient Persia (modern Iran)",
          "Ancient Iceland",
          "The Amazon"
        ],
        "correct": 0,
        "exp": "Persian panemone windmills caught strong regional desert winds."
      },
      {
        "q": "What country famously built thousands of windmills to pump polder water?",
        "options": [
          "The Netherlands (Holland)",
          "Switzerland",
          "Greece"
        ],
        "correct": 0,
        "exp": "Dutch windmills pumped water out of lowlands to reclaim farmland."
      },
      {
        "q": "What did windmills grind inside their mill houses?",
        "options": [
          "Wheat, barley, and corn into flour",
          "Iron into gold",
          "Stone into water"
        ],
        "correct": 0,
        "exp": "Heavy rotating millstones crushed grains into fine flour."
      },
      {
        "q": "What modern clean energy generators are direct descendants of windmills?",
        "options": [
          "Modern wind turbines",
          "Steam locomotives",
          "Water towers"
        ],
        "correct": 0,
        "exp": "Giant wind turbines generate clean electricity around the world today."
      }
    ]
  },
  {
    "id": "inv-papyrus",
    "item": "Papyrus",
    "date": "Ancient Egypt",
    "icon": "📄",
    "desc": "Papyrus was made from river reeds in ancient Egypt to write scrolls with dark ink.",
    "speechText": "Papyrus was made from river reeds in ancient Egypt to write scrolls with dark ink.",
    "quiz": [
      {
        "q": "What plant harvested along the Nile River was made into papyrus?",
        "options": [
          "The Cyperus papyrus sedge reed",
          "Pine wood trees",
          "Cactus leaves"
        ],
        "correct": 0,
        "exp": "Tall papyrus reeds grew abundantly in the Nile delta marshes."
      },
      {
        "q": "How were papyrus strips bonded into flexible sheets?",
        "options": [
          "Pressed overlapping strips welded by natural plant sap",
          "With synthetic plastic tape",
          "Sewn with copper wire"
        ],
        "correct": 0,
        "exp": "Beating and heavy pressing released natural sticky juices that bound them."
      },
      {
        "q": "What format was standard for storing long papyrus texts?",
        "options": [
          "Rolled scrolls",
          "Hardcover binders with rings",
          "Plastic binders"
        ],
        "correct": 0,
        "exp": "Sheets were glued end-to-end and rolled onto wooden rods."
      },
      {
        "q": "What modern English word derives directly from the word papyrus?",
        "options": [
          "Paper",
          "Book",
          "Pencil"
        ],
        "correct": 0,
        "exp": "Papyrus passed through Greek and Latin into our word 'paper'."
      },
      {
        "q": "Why did ancient Egyptian papyrus documents survive thousands of years?",
        "options": [
          "Egypt's extremely dry, arid climate preserved them",
          "They were soaked in salt water",
          "Kept in electric freezers"
        ],
        "correct": 0,
        "exp": "Arid tomb vaults protected delicate plant fibers from mold."
      }
    ]
  },
  {
    "id": "inv-microscope",
    "item": "The Microscope",
    "date": "1590 Netherlands",
    "icon": "🔬",
    "desc": "The microscope opened a hidden world by making microscopic cells and droplets visible.",
    "speechText": "The microscope opened a hidden world by making microscopic cells and droplets visible.",
    "quiz": [
      {
        "q": "What does an optical microscope do to tiny objects?",
        "options": [
          "Magnifies microscopic specimens for human eyes",
          "Shrinks them smaller",
          "Turns them into sound"
        ],
        "correct": 0,
        "exp": "Curved lenses refract light to magnify specimens hundreds of times."
      },
      {
        "q": "Who was the Dutch pioneer who first observed living microbes in water?",
        "options": [
          "Antonie van Leeuwenhoek",
          "Thomas Edison",
          "Isaac Newton"
        ],
        "correct": 0,
        "exp": "Leeuwenhoek made tiny spherical lenses and discovered 'animalcules'."
      },
      {
        "q": "What did Robert Hooke name the tiny honeycomb boxes he saw in cork?",
        "options": [
          "Cells",
          "Bricks",
          "Atoms"
        ],
        "correct": 0,
        "exp": "He thought they resembled monks' monastery rooms called 'cells'."
      },
      {
        "q": "What two optical lens groups are combined in a compound microscope?",
        "options": [
          "The objective lens and the eyepiece ocular",
          "Two flat wooden boards",
          "Two iron mirrors"
        ],
        "correct": 0,
        "exp": "The objective creates a magnified image, which the eyepiece magnifies further."
      },
      {
        "q": "How did the microscope transform medicine and biology?",
        "options": [
          "Revealed bacteria and viruses to defeat infectious diseases",
          "Helped cars drive faster",
          "Made weather warmer"
        ],
        "correct": 0,
        "exp": "It gave birth to microbiology, modern pathology, and lifesaving vaccines."
      }
    ]
  },
  {
    "id": "inv-pottery",
    "item": "Pottery Kiln",
    "date": "6000 BC Mesopotamia & East Asia",
    "icon": "🏺",
    "desc": "Pottery kilns hardened wet clay into waterproof pots to store food and fresh water.",
    "speechText": "Pottery kilns hardened wet clay into waterproof pots to store food and fresh water.",
    "quiz": [
      {
        "q": "What is a pottery kiln?",
        "options": [
          "A high-temperature thermal oven for firing ceramics",
          "A boat for sailing",
          "A musical drum"
        ],
        "correct": 0,
        "exp": "Kilns trap intense heat to bake clay into durable ceramic."
      },
      {
        "q": "What chemical transformation happens to clay in a firing kiln?",
        "options": [
          "Water evaporates and minerals fuse into solid stone-hard ceramic",
          "It dissolves into water",
          "It turns into rubber"
        ],
        "correct": 0,
        "exp": "Silica particles vitrify, turning fragile mud into permanent ceramic."
      },
      {
        "q": "Why was waterproof ceramic pottery essential for settled civilizations?",
        "options": [
          "To store grain, olive oil, and drinking water securely",
          "To build airplane wings",
          "To make lightbulbs"
        ],
        "correct": 0,
        "exp": "Pots protected food reserves from moisture, insects, and rodents."
      },
      {
        "q": "What glassy coat is fired onto pottery to make it shiny and colorful?",
        "options": [
          "Ceramic glaze",
          "Oil paint",
          "Sand"
        ],
        "correct": 0,
        "exp": "Glazes seal pores and produce lustrous colorful finishes."
      },
      {
        "q": "How hot do ceramic kilns typically reach during firing?",
        "options": [
          "Over 1,000 degrees Celsius",
          "10 degrees Celsius",
          "Room temperature"
        ],
        "correct": 0,
        "exp": "Stoneware and porcelain require temperatures from 1,200°C to 1,400°C."
      }
    ]
  },
  {
    "id": "inv-hourglass",
    "item": "The Hourglass",
    "date": "8th Century Europe",
    "icon": "⏳",
    "desc": "The hourglass measured time accurately as fine sand trickled between two glass bulbs.",
    "speechText": "The hourglass measured time accurately as fine sand trickled between two glass bulbs.",
    "quiz": [
      {
        "q": "What trickles through the narrow neck of an hourglass to measure time?",
        "options": [
          "Fine, dry, uniform sand or silica",
          "Cold river water",
          "Liquid honey"
        ],
        "correct": 0,
        "exp": "Gravity pulls a steady stream of dry sand grains downward."
      },
      {
        "q": "Why was the hourglass indispensable aboard ocean sailing ships?",
        "options": [
          "It kept accurate time despite the rolling rocking waves",
          "It was made of gold",
          "It pointed north"
        ],
        "correct": 0,
        "exp": "Water clocks sloshed and pendulums swung irregularly, but sand flowed steadily."
      },
      {
        "q": "How did sailors measure ship speed using a sandglass and knotted rope?",
        "options": [
          "By timing knots passing overboard with a half-minute glass",
          "By looking at clouds",
          "By shouting into a horn"
        ],
        "correct": 0,
        "exp": "This is why ocean speed is still measured in 'knots' today!"
      },
      {
        "q": "What do you do once all sand empties into the lower glass bulb?",
        "options": [
          "Flip the hourglass upside down to start timing again",
          "Explode it with fireworks",
          "Ring a telephone bell"
        ],
        "correct": 0,
        "exp": "Inverting the bulbs begins the time interval anew."
      },
      {
        "q": "What property of the sand was critical for exact timekeeping?",
        "options": [
          "Perfect dryness and uniform rounded grains",
          "Color of the sand",
          "Smell of the sand"
        ],
        "correct": 0,
        "exp": "Any moisture would cause grains to clump and clog the orifice."
      }
    ]
  },
  {
    "id": "inv-steam",
    "item": "The Steam Engine",
    "date": "18th Century Industrial Revolution",
    "icon": "🚂",
    "desc": "The steam engine turned boiling water into powerful motion that moved trains and ships.",
    "speechText": "The steam engine turned boiling water into powerful motion that moved trains and ships.",
    "quiz": [
      {
        "q": "What pushes the pistons to generate mechanical power in a steam engine?",
        "options": [
          "High-pressure expanding steam from boiling water",
          "Cold river water",
          "Compressed air only"
        ],
        "correct": 0,
        "exp": "Water boils into steam, expanding over 1,600 times in volume!"
      },
      {
        "q": "What Scottish engineer patented the separate condenser in 1769?",
        "options": [
          "James Watt",
          "Alexander Fleming",
          "Charles Darwin"
        ],
        "correct": 0,
        "exp": "Watt's condenser saved 75% of fuel, making steam universally practical."
      },
      {
        "q": "What fossil fuel was burned to boil water in industrial steam boilers?",
        "options": [
          "Coal",
          "Solar electricity",
          "Plastic"
        ],
        "correct": 0,
        "exp": "Abundant coal powered the boilers of factories, trains, and mills."
      },
      {
        "q": "What world-changing transit machines were powered by steam engines?",
        "options": [
          "Steam railway trains and steamships",
          "Space rockets",
          "Electric bicycles"
        ],
        "correct": 0,
        "exp": "Locomotives and ocean liners crossed continents and oceans in days."
      },
      {
        "q": "What historical epoch was launched by the steam engine?",
        "options": [
          "The Industrial Revolution",
          "The Bronze Age",
          "The Middle Ages"
        ],
        "correct": 0,
        "exp": "It shifted humanity from muscle power to automated machine production."
      }
    ]
  },
  {
    "id": "inv-plow",
    "item": "The Agricultural Plow",
    "date": "4000 BC Fertile Crescent",
    "icon": "🚜",
    "desc": "The plow transformed agriculture by preparing vast fields to grow abundant food crops.",
    "speechText": "The plow transformed agriculture by preparing vast fields to grow abundant food crops.",
    "quiz": [
      {
        "q": "What does a plow do to the farmer's soil?",
        "options": [
          "Cuts, lifts, and turns the soil for sowing seeds",
          "Waters the plants",
          "Harvests ripe wheat"
        ],
        "correct": 0,
        "exp": "It breaks compacted soil and buries weeds, aerating the ground."
      },
      {
        "q": "What draft animals pulled heavy plows in ancient fields?",
        "options": [
          "Oxen, horses, and water buffalo",
          "Lions and wolves",
          "Camels and monkeys"
        ],
        "correct": 0,
        "exp": "Yoked oxen provided immense steady pulling force."
      },
      {
        "q": "Why was the plow critical for the emergence of great cities?",
        "options": [
          "Farmers produced surplus food to support urban populations",
          "It kept weeds from growing forever",
          "It made rain fall"
        ],
        "correct": 0,
        "exp": "Food surpluses freed artisans, scholars, and builders to build civilizations."
      },
      {
        "q": "What curved blade on a plowshare rolls over the soil slice?",
        "options": [
          "The moldboard",
          "The steering wheel",
          "The wooden rope"
        ],
        "correct": 0,
        "exp": "The curved moldboard lifts and flips the furrow upside down."
      },
      {
        "q": "Where did some of the earliest ard scratch plows originate?",
        "options": [
          "Mesopotamia and the Nile Valley",
          "The Arctic Circle",
          "Greenland"
        ],
        "correct": 0,
        "exp": "Farmers in the Fertile Crescent developed ox-drawn ards by 4000 BC."
      }
    ]
  }
];
const U11_MUSEUM = [
  {
    "id": "tour-golden-mask",
    "title": "The Egyptian Golden Mask",
    "room": "Ancient Egypt Hall",
    "icon": "👑",
    "desc": "Welcome travelers to the Ancient History Museum! Follow me to see the Egyptian Golden Mask.",
    "speechText": "Welcome travelers to the ancient history museum! Follow me to see the egyptian golden mask.",
    "quiz": [
      {
        "q": "Whose world-famous royal tomb contained this golden funerary mask?",
        "options": [
          "Pharaoh Tutankhamun",
          "Julius Caesar",
          "Alexander the Great"
        ],
        "correct": 0,
        "exp": "Boy King Tutankhamun ruled Egypt in the 14th century BC."
      },
      {
        "q": "What precious metal was this royal funerary mask hammered from?",
        "options": [
          "Pure solid gold inlaid with glass and gems",
          "Carved limestone",
          "Polished iron"
        ],
        "correct": 0,
        "exp": "Crafted from over 10 kilograms of solid sheet gold!"
      },
      {
        "q": "What blue gemstone formed the royal stripes of Tutankhamun's nemes headdress?",
        "options": [
          "Lapis lazuli",
          "Green emerald",
          "Clear diamond"
        ],
        "correct": 0,
        "exp": "Deep blue lapis lazuli was imported from ancient Afghanistan."
      },
      {
        "q": "Who discovered the undisturbed royal tomb in 1922?",
        "options": [
          "Howard Carter",
          "Marco Polo",
          "Galileo Galilei"
        ],
        "correct": 0,
        "exp": "Howard Carter unsealed the tomb in Egypt's Valley of the Kings."
      },
      {
        "q": "What protective emblems guard the pharaoh's forehead on the mask?",
        "options": [
          "The vulture (Nekhbet) and cobra (Wadjet)",
          "Two roaring lions",
          "Two soaring eagles"
        ],
        "correct": 0,
        "exp": "They symbolized divine protection over Upper and Lower Egypt."
      }
    ]
  },
  {
    "id": "tour-triceratops-skeleton",
    "title": "The Triceratops Skeleton",
    "room": "Paleontology Pavilion",
    "icon": "🦖",
    "desc": "Look at this giant fossil of a Triceratops! It lived millions of years ago on Earth.",
    "speechText": "Look at this giant fossil of a triceratops! It lived millions of years ago on earth.",
    "quiz": [
      {
        "q": "How many horns protrude from the Triceratops skull in our museum exhibit?",
        "options": [
          "Three prominent horns",
          "Only one horn",
          "None at all"
        ],
        "correct": 0,
        "exp": "Two long brow horns and one short nasal horn crowned its skull."
      },
      {
        "q": "How long ago did Triceratops live during the Late Cretaceous?",
        "options": [
          "Around 66 to 68 million years ago",
          "100 years ago",
          "5,000 years ago"
        ],
        "correct": 0,
        "exp": "It lived right up until the asteroid impact 66 million years ago."
      },
      {
        "q": "What massive bone plate protected the Triceratops neck?",
        "options": [
          "A wide bony frill",
          "A feathered collar",
          "A spiky tail"
        ],
        "correct": 0,
        "exp": "Its solid bone neck frill could be over 2 meters across!"
      },
      {
        "q": "What did this prehistoric giant eat with its sharp shearing beak?",
        "options": [
          "Fibrous palm leaves, cycads, and ferns",
          "Fish and clams",
          "Other dinosaurs"
        ],
        "correct": 0,
        "exp": "Its scissor-like tooth batteries sliced tough prehistoric vegetation."
      },
      {
        "q": "What apex predator frequently clashed with Triceratops?",
        "options": [
          "Tyrannosaurus Rex",
          "Woolly Mammoth",
          "Saber-Toothed Cat"
        ],
        "correct": 0,
        "exp": "Fossil frills and horns show healed puncture wounds from T-Rex teeth!"
      }
    ]
  },
  {
    "id": "tour-ancient-temples",
    "title": "Ancient Civilization Temples",
    "room": "Monumental Architecture",
    "icon": "🏛️",
    "desc": "Thousands of years ago, ancient civilizations built monumental pyramids and magnificent temples.",
    "speechText": "Thousands of years ago, ancient civilizations built monumental pyramids and magnificent temples.",
    "quiz": [
      {
        "q": "What monumental geometric structures did Egyptians construct at Giza?",
        "options": [
          "The Great Pyramids",
          "Wooden skyscrapers",
          "Deep submarine tunnels"
        ],
        "correct": 0,
        "exp": "The Great Pyramid of Khufu was the tallest human-made structure for 3,800 years."
      },
      {
        "q": "What stones were ancient temples and pyramids primarily carved from?",
        "options": [
          "Massive blocks of limestone and granite",
          "Paper and cardboard",
          "Glass and plastic"
        ],
        "correct": 0,
        "exp": "Multi-ton limestone blocks were quarried and transported on Nile barges."
      },
      {
        "q": "What celestial markers guided the alignment of ancient temple gates?",
        "options": [
          "Sun equinoxes, solstices, and star positions",
          "GPS satellites",
          "Random chance"
        ],
        "correct": 0,
        "exp": "Temples were aligned with mathematical precision to astronomical events."
      },
      {
        "q": "What sacred pictorial script covered temple walls in ancient Egypt?",
        "options": [
          "Hieroglyphs",
          "Morse code",
          "Computer code"
        ],
        "correct": 0,
        "exp": "Hieroglyphic carvings told stories of gods, kings, and sacred rituals."
      },
      {
        "q": "Why were monumental temples central to ancient cities?",
        "options": [
          "As religious, astronomical, and cultural gathering hubs",
          "As car garages",
          "To store sports gear only"
        ],
        "correct": 0,
        "exp": "They were the spiritual heart and economic centers of ancient civilizations."
      }
    ]
  },
  {
    "id": "tour-rosetta-stone",
    "title": "The Rosetta Stone",
    "room": "Ancient Egypt & Languages",
    "icon": "📜",
    "desc": "The Rosetta Stone held three ancient languages that unlocked the secrets of Egyptian hieroglyphs.",
    "speechText": "The Rosetta Stone held three ancient languages that unlocked the secrets of Egyptian hieroglyphs.",
    "quiz": [
      {
        "q": "How many scripts are carved into the dark granodiorite Rosetta Stone?",
        "options": [
          "Three (Hieroglyphic, Demotic, and Ancient Greek)",
          "Only one script",
          "Ten different scripts"
        ],
        "correct": 0,
        "exp": "The decree was inscribed in three scripts for priests, officials, and rulers."
      },
      {
        "q": "Why was Ancient Greek on the stone the key to unlocking hieroglyphs?",
        "options": [
          "Scholars knew Greek and could translate the unknown hieroglyphs",
          "It was written in gold",
          "It was a modern language"
        ],
        "correct": 0,
        "exp": "Scholars compared Greek royal names with the Egyptian cartouches."
      },
      {
        "q": "What French linguist deciphered the hieroglyphic script in 1822?",
        "options": [
          "Jean-François Champollion",
          "Napoleon Bonaparte",
          "Leonardo da Vinci"
        ],
        "correct": 0,
        "exp": "Champollion decoded phonetics in cartouches of Ptolemy and Cleopatra."
      },
      {
        "q": "Where in Egypt was the stone discovered in 1799?",
        "options": [
          "Near the port city of Rashid (Rosetta)",
          "Inside the Great Pyramid",
          "Underwater in the Red Sea"
        ],
        "correct": 0,
        "exp": "French soldiers discovered it embedded in a fort wall in Rashid."
      },
      {
        "q": "In which world-famous London museum can you see the Rosetta Stone?",
        "options": [
          "The British Museum",
          "The Louvre",
          "The Metropolitan Museum"
        ],
        "correct": 0,
        "exp": "It has been displayed in the British Museum since 1802."
      }
    ]
  },
  {
    "id": "tour-parthenon",
    "title": "Parthenon Sculptures",
    "room": "Classical Greece Gallery",
    "icon": "🏛️",
    "desc": "These classical marble statues once decorated the Parthenon temple high above ancient Athens.",
    "speechText": "These classical marble statues once decorated the Parthenon temple high above ancient Athens.",
    "quiz": [
      {
        "q": "On what high rocky citadel in Athens did the Parthenon stand?",
        "options": [
          "The Acropolis",
          "Mount Everest",
          "Mount Olympus"
        ],
        "correct": 0,
        "exp": "The Acropolis stands 150 meters above the historic city of Athens."
      },
      {
        "q": "To which Greek patron goddess was the Parthenon temple dedicated?",
        "options": [
          "Athena, goddess of wisdom and battle",
          "Aphrodite",
          "Hera"
        ],
        "correct": 0,
        "exp": "A colossal 12-meter chryselephantine statue of Athena stood inside."
      },
      {
        "q": "What fine white stone was used to sculpt the Parthenon friezes?",
        "options": [
          "Pentelic marble",
          "Soft sandstone",
          "Carved oak wood"
        ],
        "correct": 0,
        "exp": "Pentelic marble has fine grains that gleam golden in Athenian sunlight."
      },
      {
        "q": "What legendary master sculptor directed the Parthenon's art program?",
        "options": [
          "Phidias",
          "Michelangelo",
          "Socrates"
        ],
        "correct": 0,
        "exp": "Phidias designed the pediments, metopes, and friezes around 440 BC."
      },
      {
        "q": "Were classical Greek marble statues originally plain white or painted?",
        "options": [
          "Painted in vivid reds, blues, and gold",
          "Always plain white",
          "Covered in mud"
        ],
        "correct": 0,
        "exp": "Chemical analysis reveals bright polychrome paint covered the marbles!"
      }
    ]
  },
  {
    "id": "tour-terracotta",
    "title": "The Terracotta Army",
    "room": "Imperial China Gallery",
    "icon": "🗿",
    "desc": "Thousands of life-sized clay soldiers stood underground guarding the tomb of the first Chinese emperor.",
    "speechText": "Thousands of life-sized clay soldiers stood underground guarding the tomb of the first Chinese emperor.",
    "quiz": [
      {
        "q": "Whose imperial mausoleum does the underground Terracotta Army guard?",
        "options": [
          "Qin Shi Huang, First Emperor of China",
          "Confucius",
          "Marco Polo"
        ],
        "correct": 0,
        "exp": "Emperor Qin unified China in 221 BC and built this vast funerary army."
      },
      {
        "q": "What material were these thousands of life-sized warriors sculpted from?",
        "options": [
          "Terracotta baked clay",
          "Melted bronze",
          "Carved ice"
        ],
        "correct": 0,
        "exp": "Craftsmen molded, assembled, and kiln-fired yellow clay figures."
      },
      {
        "q": "What makes every individual terracotta soldier astonishing to view?",
        "options": [
          "Each warrior has unique facial features, hair, and uniforms",
          "They are all identical",
          "They are made of plastic"
        ],
        "correct": 0,
        "exp": "Sculptors custom-carved individual faces, ears, and military ranks."
      },
      {
        "q": "Who discovered the underground pits near Xi'an in 1974?",
        "options": [
          "Local farmers digging a water well",
          "Tourists on a bus",
          "Submarine explorers"
        ],
        "correct": 0,
        "exp": "Farmers struck clay fragments while digging a well during a drought."
      },
      {
        "q": "What other military figures stand in the underground pits?",
        "options": [
          "Cavalry horses, war chariots, and generals",
          "Dinosaur skeletons",
          "Toy airplanes"
        ],
        "correct": 0,
        "exp": "Hundreds of life-sized horses, bronze chariots, and officers guard the pits."
      }
    ]
  },
  {
    "id": "tour-colosseum",
    "title": "The Roman Colosseum Model",
    "room": "Imperial Rome Gallery",
    "icon": "🏟️",
    "desc": "This model shows the Roman Colosseum where fifty thousand spectators cheered at great spectacles.",
    "speechText": "This model shows the Roman Colosseum where fifty thousand spectators cheered at great spectacles.",
    "quiz": [
      {
        "q": "What architectural shape is the monumental Colosseum in Rome?",
        "options": [
          "An elliptical amphitheater",
          "A sharp triangle",
          "A straight tunnel"
        ],
        "correct": 0,
        "exp": "Its oval footprint measures 189 meters long by 156 meters wide."
      },
      {
        "q": "How many spectators could gather inside the Colosseum tiers?",
        "options": [
          "Over 50,000 spectators",
          "Only 100 people",
          "Two million people"
        ],
        "correct": 0,
        "exp": "It had 80 arched entrances to rapidly seat up to 65,000 Romans."
      },
      {
        "q": "What public events were held on the sand-covered arena floor?",
        "options": [
          "Gladiatorial contests, animal hunts, and dramas",
          "Quiet library reading",
          "Modern soccer games"
        ],
        "correct": 0,
        "exp": "'Arena' is Latin for sand, which absorbed spilled blood during games."
      },
      {
        "q": "What was the multi-level underground labyrinth beneath the floor called?",
        "options": [
          "The hypogeum with trapdoors and elevators",
          "The catacombs",
          "The pantry"
        ],
        "correct": 0,
        "exp": "Pulleys and elevators hoisted gladiators and wild animals onto the stage."
      },
      {
        "q": "What revolutionary building material made its massive walls possible?",
        "options": [
          "Roman concrete (pozzolana) and travertine",
          "Straw and mud only",
          "Pure glass"
        ],
        "correct": 0,
        "exp": "Roman volcanic ash concrete set underwater and lasted for millennia."
      }
    ]
  },
  {
    "id": "tour-aztec-sun",
    "title": "The Aztec Sun Stone",
    "room": "Mesoamerican Treasury",
    "icon": "☀️",
    "desc": "The Aztec Sun Stone is a giant carved calendar recording the eras and movements of the sun.",
    "speechText": "The Aztec Sun Stone is a giant carved calendar recording the eras and movements of the sun.",
    "quiz": [
      {
        "q": "What Mesoamerican civilization carved the colossal basalt Sun Stone?",
        "options": [
          "The Aztec (Mexica) Empire",
          "The Vikings",
          "The Romans"
        ],
        "correct": 0,
        "exp": "Carved in Tenochtitlan (Mexico City) in the early 16th century."
      },
      {
        "q": "Whose solar countenance is carved in the center of the disk?",
        "options": [
          "Tonatiuh, the sun god",
          "A laughing monkey",
          "A Spanish galleon"
        ],
        "correct": 0,
        "exp": "Tonatiuh is depicted holding human hearts with an obsidian tongue."
      },
      {
        "q": "What do the four rectangular reliefs surrounding the center represent?",
        "options": [
          "The four past solar eras (Four Suns)",
          "The four seasons of winter",
          "Four royal banquets"
        ],
        "correct": 0,
        "exp": "In Aztec mythology, the world passed through four previous creation cycles."
      },
      {
        "q": "How much does this monolithic volcanic basalt disk weigh?",
        "options": [
          "About 24 metric tons",
          "About 5 pounds",
          "Less than a bicycle"
        ],
        "correct": 0,
        "exp": "It measures 3.6 meters in diameter and weighs over 24 tonnes!"
      },
      {
        "q": "In which city's central square was the stone rediscovered in 1790?",
        "options": [
          "Mexico City (the Zócalo)",
          "Lima, Peru",
          "Havana, Cuba"
        ],
        "correct": 0,
        "exp": "Workers excavating the Plaza Mayor unearthed the buried monolith."
      }
    ]
  },
  {
    "id": "tour-cuneiform",
    "title": "The Cuneiform Tablet",
    "room": "Mesopotamia & The Dawn of Writing",
    "icon": "📜",
    "desc": "These ancient clay tablets show cuneiform writing, one of the earliest writing systems in human history.",
    "speechText": "These ancient clay tablets show cuneiform writing, one of the earliest writing systems in human history.",
    "quiz": [
      {
        "q": "What tool did Mesopotamian scribes press into damp clay?",
        "options": [
          "A wedge-tipped reed stylus",
          "A metal hammer",
          "A paintbrush"
        ],
        "correct": 0,
        "exp": "The cut reed pressed triangular impressions into soft alluvial clay."
      },
      {
        "q": "What does the Latin root 'cuneus' mean in 'cuneiform'?",
        "options": [
          "Wedge",
          "Circle",
          "Wave"
        ],
        "correct": 0,
        "exp": "'Cuneus' means wedge; cuneiform means 'wedge-shaped writing'."
      },
      {
        "q": "What ancient civilization first created cuneiform around 3200 BC?",
        "options": [
          "The Sumerians of Mesopotamia",
          "The Vikings",
          "The Mayans"
        ],
        "correct": 0,
        "exp": "Sumerians in southern Iraq invented writing for commerce and laws."
      },
      {
        "q": "What world-famous ancient epic poem was recorded on cuneiform tablets?",
        "options": [
          "The Epic of Gilgamesh",
          "Romeo and Juliet",
          "The Odyssey"
        ],
        "correct": 0,
        "exp": "The tale of King Gilgamesh and Enkidu is humanity's oldest epic."
      },
      {
        "q": "Why did clay tablets endure for thousands of years in the desert?",
        "options": [
          "Baking in kiln fires turned clay into durable stone-like ceramic",
          "They melted in liquid",
          "They dissolved into smoke"
        ],
        "correct": 0,
        "exp": "Baked clay resists water, rot, and insects unlike paper and papyrus."
      }
    ]
  },
  {
    "id": "tour-knight-armor",
    "title": "Medieval Knight Armor",
    "room": "Medieval Arms & Armor",
    "icon": "🛡️",
    "desc": "This polished steel suit of armor protected medieval knights in tournaments and battles.",
    "speechText": "This polished steel suit of armor protected medieval knights in tournaments and battles.",
    "quiz": [
      {
        "q": "What metal was hammered by armories to create full plate armor?",
        "options": [
          "Hardened steel and wrought iron",
          "Gold and silver",
          "Soft tin"
        ],
        "correct": 0,
        "exp": "Master armorers hammered curved steel plates to deflect sword strikes."
      },
      {
        "q": "What interlocking mesh of metal rings was worn under plate joints?",
        "options": [
          "Chainmail (maille)",
          "Leather strap only",
          "Heavy wool sweaters"
        ],
        "correct": 0,
        "exp": "Chainmail protected exposed armpits, elbows, and groins."
      },
      {
        "q": "What hinged part of a knight's helmet opened for vision and fresh air?",
        "options": [
          "The visor",
          "The plume feather",
          "The chin strap"
        ],
        "correct": 0,
        "exp": "The visor could be raised between clashes and lowered in combat."
      },
      {
        "q": "Could a knight move agilely and mount a horse in full plate armor?",
        "options": [
          "Yes, articulated joints allowed full running and agility",
          "No, they could not move an inch",
          "No, they fell over immediately"
        ],
        "correct": 0,
        "exp": "Evenly distributed across the body, a 25kg suit allowed full mobility."
      },
      {
        "q": "What colorful heraldic designs on shields identified knights on the battlefield?",
        "options": [
          "Coats of arms and crests",
          "Barcodes",
          "National flags with stars"
        ],
        "correct": 0,
        "exp": "Heraldry displayed family lions, eagles, and colors to distinguish allies."
      }
    ]
  },
  {
    "id": "tour-viking-longship",
    "title": "Viking Dragon Longship",
    "room": "Norse Seafarers Gallery",
    "icon": "⛵",
    "desc": "Viking longships had carved wooden dragon heads and square sails to cross stormy northern seas.",
    "speechText": "Viking longships had carved wooden dragon heads and square sails to cross stormy northern seas.",
    "quiz": [
      {
        "q": "What fierce wooden carving often decorated the bow of a Viking warship?",
        "options": [
          "A carved dragon or serpent head",
          "A golden crown",
          "A sleeping cat"
        ],
        "correct": 0,
        "exp": "Dragon heads struck fear into foes and protected against sea spirits."
      },
      {
        "q": "What kind of sail powered Viking longships across northern seas?",
        "options": [
          "A large square woolen sail",
          "Three triangular sails",
          "An electric motor"
        ],
        "correct": 0,
        "exp": "Woven wool sails treated with animal fat caught strong ocean gales."
      },
      {
        "q": "What shipbuilding technique used overlapping oak planks for the hull?",
        "options": [
          "Clinker (lapstrake) hull construction",
          "Flat cement pouring",
          "Steel welding"
        ],
        "correct": 0,
        "exp": "Clinker planks flexed with ocean waves, keeping the ship seaworthy."
      },
      {
        "q": "Could Viking longships travel up shallow rivers as well as open ocean?",
        "options": [
          "Yes, their shallow draft allowed river raids and beaching",
          "No, only in deep oceans",
          "No, they sank in rivers"
        ],
        "correct": 0,
        "exp": "Drawing only 1 meter of water, longships sailed directly onto beaches!"
      },
      {
        "q": "What Norse explorer sailed to North America 500 years before Columbus?",
        "options": [
          "Leif Erikson",
          "Christopher Columbus",
          "Ferdinand Magellan"
        ],
        "correct": 0,
        "exp": "Leif Erikson established the Norse settlement at Vinland (Newfoundland)."
      }
    ]
  },
  {
    "id": "tour-maya-mask",
    "title": "Royal Maya Jade Mask",
    "room": "Maya Civilizations Gallery",
    "icon": "🎭",
    "desc": "This royal Maya mask was made of precious green jade to honor kings in sacred ceremonies.",
    "speechText": "This royal Maya mask was made of precious green jade to honor kings in sacred ceremonies.",
    "quiz": [
      {
        "q": "What precious green gemstone did Maya artisans carve for funerary masks?",
        "options": [
          "Jadeite (jade)",
          "Turquoise",
          "Clear quartz"
        ],
        "correct": 0,
        "exp": "Jade was the most valuable material in the ancient Maya world."
      },
      {
        "q": "Why was green jade considered so sacred in Maya beliefs?",
        "options": [
          "It symbolized life, breath, sacred water, and maize sprouts",
          "It was the softest stone",
          "It glowed red in dark rooms"
        ],
        "correct": 0,
        "exp": "Its vibrant green mirrored young corn shoots and eternal renewal."
      },
      {
        "q": "What celebrated Maya king of Palenque wore a legendary jade mosaic mask?",
        "options": [
          "K'inich Janaab' Pakal (Pakal the Great)",
          "Montezuma",
          "Atahualpa"
        ],
        "correct": 0,
        "exp": "Pakal ruled Palenque for 68 years and was entombed inside the Temple of Inscriptions."
      },
      {
        "q": "How were hundreds of polished jade tesserae fitted together on the mask?",
        "options": [
          "As a mosaic over a stucco core",
          "Poured as hot liquid glass",
          "Carved from one giant rock"
        ],
        "correct": 0,
        "exp": "Over 200 carved jade pieces formed a lifelike mosaic portrait."
      },
      {
        "q": "What iridescent shell material was inlaid to create the eyes of the royal mask?",
        "options": [
          "Mother-of-pearl shell and obsidian pupils",
          "Plastic beads",
          "Blue paint only"
        ],
        "correct": 0,
        "exp": "White conch shells and volcanic obsidian created piercing, lifelike eyes."
      }
    ]
  },
  {
    "id": "tour-ishtar-gate",
    "title": "The Ishtar Gate",
    "room": "Ancient Babylon Gallery",
    "icon": "🦁",
    "desc": "The Ishtar Gate welcomed visitors to Babylon with brilliant blue tiles and golden lions.",
    "speechText": "The Ishtar Gate welcomed visitors to Babylon with brilliant blue tiles and golden lions.",
    "quiz": [
      {
        "q": "What ancient imperial Mesopotamian metropolis did the Ishtar Gate guard?",
        "options": [
          "Babylon",
          "Nineveh",
          "Ur"
        ],
        "correct": 0,
        "exp": "The gate was the eighth inner gate to the city of Babylon."
      },
      {
        "q": "What color glazed bricks made the towering walls glow under the sun?",
        "options": [
          "Vibrant lapis-lazuli blue",
          "Bright purple",
          "Pitch black"
        ],
        "correct": 0,
        "exp": "Cobalt glazes produced a brilliant blue sheen across the brick facade."
      },
      {
        "q": "What magnificent creatures were sculpted in relief along the walls?",
        "options": [
          "Golden lions, young bulls, and dragons (mušḫuššu)",
          "Elephants and giraffes",
          "Penguins and seals"
        ],
        "correct": 0,
        "exp": "Lions honored Ishtar, bulls Adad, and horned dragons Marduk."
      },
      {
        "q": "Which famous Babylonian king built the grand gate around 575 BC?",
        "options": [
          "Nebuchadnezzar II",
          "Hammurabi",
          "Alexander the Great"
        ],
        "correct": 0,
        "exp": "Nebuchadnezzar II also commissioned the legendary Hanging Gardens."
      },
      {
        "q": "What Mesopotamian goddess was this ceremonial gate dedicated to?",
        "options": [
          "Ishtar, goddess of love, beauty, and war",
          "Hera",
          "Venus"
        ],
        "correct": 0,
        "exp": "Processions entered Babylon through the gate along the Processional Way."
      }
    ]
  },
  {
    "id": "tour-sarcophagus",
    "title": "Painted Egyptian Sarcophagus",
    "room": "Tomb of the Pharaohs",
    "icon": "⚰️",
    "desc": "This painted Egyptian sarcophagus protected the mummified pharaoh with protective hieroglyphic spells.",
    "speechText": "This painted Egyptian sarcophagus protected the mummified pharaoh with protective hieroglyphic spells.",
    "quiz": [
      {
        "q": "What was the spiritual purpose of an Egyptian sarcophagus?",
        "options": [
          "To protect the royal mummy and guide the soul in the afterlife",
          "To store grain harvests",
          "To sail across the Nile"
        ],
        "correct": 0,
        "exp": "It served as a physical home and protective fortress for the eternal spirit (Ka)."
      },
      {
        "q": "What texts and magical spells were inscribed on its painted panels?",
        "options": [
          "Spells from the Book of the Dead",
          "Cooking recipes",
          "Tax ledgers"
        ],
        "correct": 0,
        "exp": "Spells protected the deceased against perilous afterlife monsters."
      },
      {
        "q": "What winged goddess often stretched her wings across the chest to offer protection?",
        "options": [
          "Isis or Nut",
          "Medusa",
          "Cleopatra"
        ],
        "correct": 0,
        "exp": "Goddess Isis or sky goddess Nut wrapped their wings in divine embrace."
      },
      {
        "q": "What fine wood imported from Lebanon was prized for royal coffins?",
        "options": [
          "Cedar of Lebanon",
          "Soft pine",
          "Cardboard"
        ],
        "correct": 0,
        "exp": "Resinous cedar wood resisted rot, moisture, and desert termites."
      },
      {
        "q": "What sacred eye symbol painted on the side allowed the mummy to view the sun?",
        "options": [
          "The Eye of Horus (Wedjat)",
          "The All-Seeing Triangle",
          "The Solar Compass"
        ],
        "correct": 0,
        "exp": "The Eye of Horus symbolized healing, protection, and eternal sight."
      }
    ]
  },
  {
    "id": "tour-renaissance",
    "title": "Renaissance Art Gallery",
    "room": "Italian Renaissance Hall",
    "icon": "🎨",
    "desc": "Welcome to the Renaissance gallery, where masters like Leonardo painted with light and perspective.",
    "speechText": "Welcome to the Renaissance gallery, where masters like Leonardo painted with light and perspective.",
    "quiz": [
      {
        "q": "What does the word 'Renaissance' mean in European history?",
        "options": [
          "Rebirth of classical art, learning, and culture",
          "Quiet evening",
          "End of the world"
        ],
        "correct": 0,
        "exp": "A cultural rebirth spanning the 14th to 17th centuries in Europe."
      },
      {
        "q": "What mathematical technique created convincing 3D depth on a flat canvas?",
        "options": [
          "Linear perspective with a vanishing point",
          "Random color splashing",
          "Flat silhouettes"
        ],
        "correct": 0,
        "exp": "Brunelleschi and Alberti formalized linear perspective in Florence."
      },
      {
        "q": "What universal genius painted the Mona Lisa and the Last Supper?",
        "options": [
          "Leonardo da Vinci",
          "William Shakespeare",
          "Ludwig van Beethoven"
        ],
        "correct": 0,
        "exp": "Leonardo was a painter, inventor, scientist, and anatomist."
      },
      {
        "q": "What Italian city was the cradle of the early Renaissance?",
        "options": [
          "Florence (Firenze)",
          "Venice only",
          "Naples"
        ],
        "correct": 0,
        "exp": "Patronage from the Medici family fostered artists in Florence."
      },
      {
        "q": "What medium made from pigments and linseed oil allowed subtle soft blending?",
        "options": [
          "Oil paint on canvas",
          "Watercolors on sand",
          "Charcoal on bark"
        ],
        "correct": 0,
        "exp": "Oil paint dried slowly, allowing Leonardo's famous 'sfumato' blending."
      }
    ]
  },
  {
    "id": "tour-ming-porcelain",
    "title": "Ming Dynasty Porcelain",
    "room": "Imperial China Ceramic Arts",
    "icon": "🏺",
    "desc": "These Ming dynasty vases were painted with fine cobalt blue and traded across the globe.",
    "speechText": "These Ming dynasty vases were painted with fine cobalt blue and traded across the globe.",
    "quiz": [
      {
        "q": "What distinctive two colors define famous Ming imperial porcelain?",
        "options": [
          "Cobalt blue on pure white porcelain",
          "Green on orange",
          "Black on yellow"
        ],
        "correct": 0,
        "exp": "Cobalt blue brushwork beneath a clear glaze on white kaolin clay."
      },
      {
        "q": "What mineral pigment created the brilliant blue brushwork under the glaze?",
        "options": [
          "Cobalt oxide",
          "Crushed emerald",
          "Liquid indigo ink"
        ],
        "correct": 0,
        "exp": "Finely ground cobalt was imported along ancient trade routes from Persia."
      },
      {
        "q": "What Chinese city was the world-famous imperial porcelain capital?",
        "options": [
          "Jingdezhen",
          "Beijing",
          "Hong Kong"
        ],
        "correct": 0,
        "exp": "Jingdezhen's kilns supplied the Forbidden City and royal courts worldwide."
      },
      {
        "q": "What imperial creature symbolizing the Emperor often wound around Ming jars?",
        "options": [
          "Five-clawed dragons swirling among clouds",
          "Flying horses with wings",
          "Giant sea turtles"
        ],
        "correct": 0,
        "exp": "Only the Chinese Emperor had the right to five-clawed dragon porcelain!"
      },
      {
        "q": "Why were Ming vases prized like treasure across Europe and Asia?",
        "options": [
          "For their translucent beauty, hardness, and ringing tone",
          "Because they were unbreakable",
          "Because they could float"
        ],
        "correct": 0,
        "exp": "European kings built entire 'porcelain cabinets' to showcase their collections."
      }
    ]
  },
  {
    "id": "tour-cyrus-cylinder",
    "title": "The Cyrus Cylinder",
    "room": "Ancient Persian Empire",
    "icon": "📜",
    "desc": "The Cyrus Cylinder is a famous Persian inscription promoting peace, tolerance, and freedom.",
    "speechText": "The Cyrus Cylinder is a famous Persian inscription promoting peace, tolerance, and freedom.",
    "quiz": [
      {
        "q": "What Persian ruler ordered the royal decree on this clay cylinder in 539 BC?",
        "options": [
          "Cyrus the Great (Cyrus II)",
          "Darius III",
          "Xerxes"
        ],
        "correct": 0,
        "exp": "Cyrus the Great founded the Achaemenid Persian Empire."
      },
      {
        "q": "What humanitarian deed did Cyrus decree upon capturing Babylon?",
        "options": [
          "Freeing displaced peoples and restoring their sacred temples",
          "Building a giant wall",
          "Closing all city gates"
        ],
        "correct": 0,
        "exp": "He allowed captive peoples, including the Jewish exiles, to return home."
      },
      {
        "q": "What ancient script was pressed into the baked clay cylinder?",
        "options": [
          "Babylonian cuneiform script",
          "Latin letters",
          "Arabic calligraphy"
        ],
        "correct": 0,
        "exp": "Scribes pressed 45 lines of Akkadian cuneiform into the clay."
      },
      {
        "q": "What modern landmark declaration does the Cyrus Cylinder foreshadow?",
        "options": [
          "The Universal Declaration of Human Rights",
          "The Olympic Charter",
          "The World Bank Accord"
        ],
        "correct": 0,
        "exp": "A replica is displayed at the United Nations headquarters in New York."
      },
      {
        "q": "What geometric shape makes this inscription distinct among royal stelae?",
        "options": [
          "A barrel-shaped curved clay cylinder",
          "A flat square brick",
          "A hollow round sphere"
        ],
        "correct": 0,
        "exp": "It was designed as a foundation deposit buried under city walls."
      }
    ]
  },
  {
    "id": "tour-cave-art",
    "title": "Prehistoric Cave Art",
    "room": "Paleolithic Origins",
    "icon": "🖐️",
    "desc": "Early humans made these painted hand stencils on cave walls forty thousand years ago.",
    "speechText": "Early humans made these painted hand stencils on cave walls forty thousand years ago.",
    "quiz": [
      {
        "q": "How many years ago did Ice Age humans paint these cave hand stencils?",
        "options": [
          "Over 30,000 to 40,000 years ago",
          "500 years ago",
          "100 years ago"
        ],
        "correct": 0,
        "exp": "Cave art in Spain, France, and Indonesia dates back over 40,000 years."
      },
      {
        "q": "How did Paleolithic artists create the distinctive negative hand stencils?",
        "options": [
          "By blowing powdered pigment over a hand pressed to stone",
          "Using rubber stamps",
          "Carving with scissors"
        ],
        "correct": 0,
        "exp": "They blew liquid ochre through hollow bird bones or straight from the mouth!"
      },
      {
        "q": "What natural earth minerals provided vibrant red and black colors?",
        "options": [
          "Red ochre iron oxide and black charcoal",
          "Chemical acrylic paints",
          "Crushed glass"
        ],
        "correct": 0,
        "exp": "Natural ochre, hematite, and manganese provided rich mineral pigments."
      },
      {
        "q": "What majestic Ice Age beasts are painted across caves like Lascaux and Altamira?",
        "options": [
          "Bison, horses, mammoths, and deer",
          "Lions and giraffes only",
          "Dolphins and whales"
        ],
        "correct": 0,
        "exp": "Artists captured the power, movement, and muscle of herds in torchlight."
      },
      {
        "q": "Why did Ice Age artists venture into deep pitch-black cave chambers?",
        "options": [
          "For ceremonial rituals, storytelling, and spiritual rites",
          "Because it was cold outside",
          "To hide treasure chests"
        ],
        "correct": 0,
        "exp": "Caves were sacred sanctuaries for tribal initiation and shamanic ceremonies."
      }
    ]
  },
  {
    "id": "tour-olympic-torch",
    "title": "Ancient Olympic Torch & Cauldron",
    "room": "Classical Athletics & Olympia",
    "icon": "🔥",
    "desc": "This bronze vessel carried the sacred flame during the ancient athletic games in Olympia.",
    "speechText": "This bronze vessel carried the sacred flame during the ancient athletic games in Olympia.",
    "quiz": [
      {
        "q": "In which ancient Greek sanctuary were the Olympic games celebrated?",
        "options": [
          "Olympia in the Peloponnese",
          "Sparta",
          "Corinth"
        ],
        "correct": 0,
        "exp": "Athletes gathered at the sanctuary of Zeus in Olympia starting in 776 BC."
      },
      {
        "q": "What burned continuously throughout the festival to honor the gods?",
        "options": [
          "A sacred eternal flame in a bronze hearth",
          "A stone campfire",
          "A wooden lantern"
        ],
        "correct": 0,
        "exp": "The sacred flame burned at the altar of Hestia, goddess of the hearth."
      },
      {
        "q": "What prized crown was bestowed upon Olympic champions?",
        "options": [
          "A wreath of wild olive leaves (kotinos)",
          "A crown of gold coins",
          "A medal of silver"
        ],
        "correct": 0,
        "exp": "Olive branches were cut with a golden sickle from Zeus's sacred tree."
      },
      {
        "q": "What sacred treaty stopped all wars between Greek city-states for the games?",
        "options": [
          "The Olympic Truce (Ekecheiria)",
          "The Athenian Pact",
          "The Spartan Treaty"
        ],
        "correct": 0,
        "exp": "Heralds proclaimed the truce so athletes and spectators could travel safely."
      },
      {
        "q": "How often were the ancient Olympic games celebrated?",
        "options": [
          "Every four years (an Olympiad)",
          "Every month",
          "Every ten years"
        ],
        "correct": 0,
        "exp": "The four-year interval was called an 'Olympiad', used to count historical years."
      }
    ]
  },
  {
    "id": "tour-silk-road",
    "title": "The Silk Road Caravan",
    "room": "Global Trade Routes",
    "icon": "🐪",
    "desc": "The Silk Road was an immense trade route connecting Asia and Europe with spices and silk.",
    "speechText": "The Silk Road was an immense trade route connecting Asia and Europe with spices and silk.",
    "quiz": [
      {
        "q": "What continents were linked by the historic overland and maritime Silk Road?",
        "options": [
          "Asia and Europe (and North Africa)",
          "North and South America",
          "Australia and Antarctica"
        ],
        "correct": 0,
        "exp": "It stretched over 6,400 kilometers from Chang'an (China) to Rome and Venice."
      },
      {
        "q": "What luxurious lightweight Chinese fabric gave this trade network its name?",
        "options": [
          "Lustrous mulberry silk",
          "Wool sweaters",
          "Cotton denim"
        ],
        "correct": 0,
        "exp": "Silk was so prized in Rome that it was traded ounce-for-ounce for gold."
      },
      {
        "q": "What hardy pack animal was known as the 'ship of the desert' on caravan routes?",
        "options": [
          "The Bactrian two-humped camel",
          "The polar bear",
          "The mountain goat"
        ],
        "correct": 0,
        "exp": "Two-humped Bactrian camels navigated freezing winters and scorching deserts."
      },
      {
        "q": "Besides merchandise like spices and silk, what else traveled along the Silk Road?",
        "options": [
          "Scientific ideas, inventions, philosophy, and art",
          "Only desert sand",
          "Nothing else"
        ],
        "correct": 0,
        "exp": "Papermaking, printing, compasses, mathematics, and religions spread globally."
      },
      {
        "q": "What Venetian traveler wrote a famous travelogue of his Silk Road journey to China?",
        "options": [
          "Marco Polo",
          "Christopher Columbus",
          "Ferdinand Magellan"
        ],
        "correct": 0,
        "exp": "Marco Polo served at the court of Kublai Khan and published his memoirs in 1300."
      }
    ]
  }
];

class KidsUnit11Engine {
  constructor() {
    this.stars = 210;
    this.soundEnabled = true;
    this.audioCtx = null;
    this.quizStates = {}; // key: category_index -> { currentQ: 0, score: 0 }
  }

  init() {
    this.setupAudio();
    this.updateStars();
    this.setupFossilDig();
    this.setupInventionMatcher();
    this.setupStoryWeaver();
    this.setupMuseumTour();
  }

  setupAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    } catch (e) {}
  }

  playTone(freq, duration, type = "sine") {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === "suspended") this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playSuccess() {
    [523.25, 659.25, 783.99].forEach((f, i) => setTimeout(() => this.playTone(f, 0.12, 'triangle'), i * 70));
  }

  playError() {
    this.playTone(220, 0.2, 'sawtooth');
  }

  speak(text) {
    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(text, 'kid');
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
    }
  }

  addStars(pts) {
    this.stars += pts;
    this.updateStars();
  }

  updateStars() {
    const el = document.getElementById('unitStarsCount');
    if (el) el.textContent = `${this.stars} pts`;
  }

  // --- REUSABLE INTERACTIVE 5-QUESTION QUIZ RENDERER ---
  renderCardQuiz(containerEl, quizList, categoryKey, cardIdx) {
    const stateKey = `${categoryKey}_${cardIdx}`;
    if (!this.quizStates[stateKey]) {
      this.quizStates[stateKey] = { currentQ: 0, score: 0, answered: false };
    }
    const st = this.quizStates[stateKey];

    const updateUI = () => {
      const total = quizList.length;

      // Completion view
      if (st.currentQ >= total) {
        containerEl.innerHTML = `
          <div class="card-quiz-complete">
            <div class="card-quiz-complete-title">⭐ 5/5 Questions Solved!</div>
            <div class="card-quiz-complete-sub">Mastery accomplished! +50 Bonus Stars Awarded!</div>
            <button type="button" class="card-quiz-retry-btn" aria-label="Replay quiz">🔄 Replay Quiz</button>
          </div>
        `;
        const retryBtn = containerEl.querySelector('.card-quiz-retry-btn');
        if (retryBtn) {
          retryBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            st.currentQ = 0;
            st.score = 0;
            st.answered = false;
            updateUI();
          });
        }
        return;
      }

      // Active question view
      const cur = quizList[st.currentQ];
      const dotsHtml = quizList.map((_, i) => {
        let cls = 'card-quiz-dot';
        if (i < st.currentQ) cls += ' done';
        else if (i === st.currentQ) cls += ' active';
        return `<span class="${cls}"></span>`;
      }).join('');

      containerEl.innerHTML = `
        <div class="card-quiz-header">
          <span class="card-quiz-title">🧩 Quiz: Question ${st.currentQ + 1} of ${total}</span>
          <div class="card-quiz-dots">${dotsHtml}</div>
        </div>
        <div class="card-quiz-qtext">${cur.q}</div>
        <div class="card-quiz-options">
          ${cur.options.map((opt, optIdx) => `
            <button type="button" class="card-quiz-opt" data-opt="${optIdx}">
              <strong style="color:#2563eb;margin-right:6px;">${['A', 'B', 'C'][optIdx]}.</strong>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="card-quiz-feedback" style="font-size:0.78rem;font-weight:700;margin-top:6px;display:none;"></div>
      `;

      const fb = containerEl.querySelector('.card-quiz-feedback');
      const optButtons = containerEl.querySelectorAll('.card-quiz-opt');

      optButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (st.answered) return;
          const optIdx = parseInt(btn.dataset.opt, 10);
          const isCorrect = (optIdx === cur.correct);

          if (isCorrect) {
            st.answered = true;
            st.score++;
            btn.classList.add('correct');
            this.playSuccess();
            this.addStars(10);
            if (fb) {
              fb.style.display = 'block';
              fb.style.color = '#15803d';
              fb.textContent = `⭐ Correct! ${cur.exp || ''}`;
            }
            setTimeout(() => {
              st.currentQ++;
              st.answered = false;
              if (st.currentQ >= total) {
                this.addStars(50);
              }
              updateUI();
            }, 750);
          } else {
            btn.classList.add('incorrect');
            btn.disabled = true;
            this.playError();
            if (fb) {
              fb.style.display = 'block';
              fb.style.color = '#b91c1c';
              fb.textContent = 'Not quite! Try another answer.';
            }
          }
        });
      });
    };

    updateUI();
  }

  // 1. FOSSIL DIG SITE (20 Prehistoric Creatures)
  setupFossilDig() {
    const grid = document.getElementById('fossilDigGrid');
    if (!grid) return;

    grid.innerHTML = U11_FOSSILS.map((f, i) => `
      <div class="kids-unit11-card fossil-card" data-idx="${i}" id="fossil-card-${i}">
        <div class="kids-unit11-card-top">
          <span class="kids-unit11-card-icon">${f.icon}</span>
          <div class="kids-unit11-card-meta">
            <h3 class="kids-unit11-card-title">${f.name}</h3>
            <span class="kids-unit11-card-sub">${f.period}</span>
          </div>
        </div>
        <p class="kids-unit11-card-desc">${f.fact}</p>
        <div class="kids-unit11-audio-row">
          <button type="button" class="kids-audio-play-btn fossil-audio-btn" data-text="${f.speechText}" aria-label="Listen to ${f.name} fact">
            🔊 Hear Dinosaur Fact
          </button>
          <span style="font-size:0.75rem; color:#64748b; font-weight:700;">+20 ⭐</span>
        </div>
        <div class="card-quiz-wrapper" id="fossil-quiz-${i}"></div>
      </div>
    `).join('');

    // Attach audio and quiz
    grid.querySelectorAll('.kids-unit11-card').forEach((cardEl, i) => {
      const f = U11_FOSSILS[i];
      const audioBtn = cardEl.querySelector('.fossil-audio-btn');
      if (audioBtn) {
        audioBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.speak(f.speechText);
          this.playSuccess();
          this.addStars(20);
        });
      }
      const quizContainer = cardEl.querySelector(`#fossil-quiz-${i}`);
      if (quizContainer && f.quiz) {
        this.renderCardQuiz(quizContainer, f.quiz, 'fossil', i);
      }
    });
  }

  // 2. ANCIENT INVENTIONS (20 Great Inventions)
  setupInventionMatcher() {
    const container = document.getElementById('inventionsGrid');
    if (!container) return;

    container.innerHTML = U11_INVENTIONS.map((inv, i) => `
      <div class="kids-unit11-card invention-card" data-idx="${i}" id="invention-card-${i}">
        <div class="kids-unit11-card-top">
          <span class="kids-unit11-card-icon">${inv.icon}</span>
          <div class="kids-unit11-card-meta">
            <h3 class="kids-unit11-card-title">${inv.item}</h3>
            <span class="kids-unit11-card-sub">${inv.date}</span>
          </div>
        </div>
        <p class="kids-unit11-card-desc">${inv.desc}</p>
        <div class="kids-unit11-audio-row">
          <button type="button" class="kids-audio-play-btn inv-audio-btn" data-text="${inv.speechText}" aria-label="Listen to ${inv.item} discovery story">
            🔊 Hear Discovery Story
          </button>
          <span style="font-size:0.75rem; color:#64748b; font-weight:700;">+20 ⭐</span>
        </div>
        <div class="card-quiz-wrapper" id="inv-quiz-${i}"></div>
      </div>
    `).join('');

    // Attach audio and quiz
    container.querySelectorAll('.kids-unit11-card').forEach((cardEl, i) => {
      const inv = U11_INVENTIONS[i];
      const audioBtn = cardEl.querySelector('.inv-audio-btn');
      if (audioBtn) {
        audioBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.speak(inv.speechText);
          this.playSuccess();
          this.addStars(20);
        });
      }
      const quizContainer = cardEl.querySelector(`#inv-quiz-${i}`);
      if (quizContainer && inv.quiz) {
        this.renderCardQuiz(quizContainer, inv.quiz, 'invention', i);
      }
    });

    // Memory Recall Section
    const existingRecall = document.getElementById('inventionRecallCheck');
    if (!existingRecall) {
      const recall = document.createElement('section');
      recall.id = 'inventionRecallCheck';
      recall.style.cssText = 'grid-column:1/-1;margin-top:24px;padding:20px;border:2px solid #c4b5fd;border-radius:18px;background:#f5f3ff;';
      recall.setAttribute('aria-labelledby', 'inventionRecallTitle');
      recall.innerHTML = `
        <h3 id="inventionRecallTitle" style="margin:0 0 6px;color:#5b21b6;font-size:1.2rem;">🧠 Invention Recall Challenge</h3>
        <p style="font-size:0.92rem;color:#4c1d95;margin-bottom:12px;">Test your memory across all 20 historical inventions! Match each clue to the correct world-changing invention.</p>
        <button type="button" class="kids-audio-play-btn" data-action="start" style="background:#7c3aed;color:#ffffff;border:none;padding:8px 18px;font-size:0.95rem;">
          🚀 Start 5-Question Recall Challenge
        </button>
        <div class="invention-recall-question" role="status" aria-live="polite" style="margin-top:14px;"></div>
      `;
      container.after(recall);

      const recallBox = recall.querySelector('.invention-recall-question');
      const startBtn = recall.querySelector('[data-action="start"]');

      startBtn.addEventListener('click', () => {
        let index = 0;
        let score = 0;
        const shuffledPool = [...U11_INVENTIONS].sort(() => Math.random() - 0.5).slice(0, 5);

        const renderQuestion = () => {
          if (index >= shuffledPool.length) {
            recallBox.innerHTML = `
              <div style="background:#dcfce7;border:1.5px solid #86efac;padding:14px;border-radius:12px;margin-top:10px;">
                <p style="font-weight:800;color:#166534;font-size:1.05rem;margin:0 0 8px;">
                  🎉 Recall Complete: ${score}/${shuffledPool.length} Correct!
                </p>
                <button type="button" class="kids-audio-play-btn" data-action="restart" style="background:#166534;color:#ffffff;border:none;">
                  🔄 Play Another Recall Challenge
                </button>
              </div>
            `;
            this.addStars(score * 15);
            recallBox.querySelector('[data-action="restart"]').addEventListener('click', () => startBtn.click());
            return;
          }

          const target = shuffledPool[index];
          const distractorPool = U11_INVENTIONS.filter(item => item !== target).sort(() => Math.random() - 0.5).slice(0, 2);
          const options = [target, ...distractorPool].sort(() => Math.random() - 0.5);

          recallBox.innerHTML = `
            <div style="background:#ffffff;border:1.5px solid #cbd5e1;border-radius:14px;padding:14px;">
              <p style="font-weight:700;color:#1e293b;font-size:0.96rem;margin-bottom:10px;">
                <strong>Clue ${index + 1} of ${shuffledPool.length}:</strong> "${target.desc}"
              </p>
              <div class="invention-recall-options" style="display:flex;flex-wrap:wrap;gap:8px;"></div>
              <p class="invention-recall-feedback" style="font-weight:700;font-size:0.86rem;margin-top:10px;display:none;"></p>
            </div>
          `;

          const optionsBox = recallBox.querySelector('.invention-recall-options');
          const fb = recallBox.querySelector('.invention-recall-feedback');

          options.forEach(option => {
            const choice = document.createElement('button');
            choice.type = 'button';
            choice.className = 'kids-tile-btn';
            choice.style.cssText = 'flex:1 1 200px;padding:10px;font-size:0.9rem;border-radius:12px;';
            choice.innerHTML = `<span style="font-size:1.4rem;display:block;">${option.icon}</span><strong>${option.item}</strong>`;

            choice.addEventListener('click', () => {
              if (option === target) {
                score++;
                choice.classList.add('correct');
                fb.style.display = 'block';
                fb.style.color = '#15803d';
                fb.textContent = `⭐ Correct: ${target.item}!`;
                this.speak(target.speechText);
                this.playSuccess();
                optionsBox.querySelectorAll('button').forEach(b => { b.disabled = true; });
                setTimeout(() => {
                  index++;
                  renderQuestion();
                }, 1200);
              } else {
                choice.classList.add('incorrect');
                choice.disabled = true;
                this.playError();
                fb.style.display = 'block';
                fb.style.color = '#b91c1c';
                fb.textContent = 'Not that invention! Try another choice.';
              }
            });
            optionsBox.appendChild(choice);
          });
        };

        renderQuestion();
      });
    }
  }

  // 3. PAST TENSE STORY WEAVER
  setupStoryWeaver() {
    const storyGaps = [
      { text: "Long ago, Barnaby the Bear _____ into an ancient Egyptian pyramid.", verb: "walked", options: ["walked", "walking", "walks"] },
      { text: "Inside the stone chamber, he _____ a golden glowing torch.", verb: "found", options: ["found", "finded", "find"] },
      { text: "Suddenly, a friendly mummy _____ hello with a smile!", verb: "said", options: ["said", "sayed", "says"] }
    ];

    let current = 0;
    const render = () => {
      if (current >= storyGaps.length) {
        current = 0;
      }
      const item = storyGaps[current];
      const promptEl = document.getElementById('storyWeaverPrompt');
      const optionsEl = document.getElementById('storyWeaverOptions');
      const fb = document.getElementById('storyWeaverFeedback');

      if (promptEl) promptEl.textContent = item.text.replace("_____", "______");
      if (fb) fb.style.display = 'none';

      if (optionsEl) {
        optionsEl.innerHTML = item.options.map(opt => `
          <button class="kids-tile-btn" data-val="${opt}">
            <span class="kids-tile-name">${opt}</span>
          </button>
        `).join('');

        optionsEl.querySelectorAll('.kids-tile-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const isRight = btn.dataset.val === item.verb;
            if (isRight) {
              btn.classList.add('correct');
              this.playSuccess();
              this.addStars(25);
              const fullSentence = item.text.replace("_____", item.verb);
              this.speak(fullSentence);
              if (fb) {
                fb.className = 'kids-toast-feedback good';
                fb.textContent = `⭐ Correct! "${item.verb}" is the past simple!`;
                fb.style.display = 'block';
              }
              setTimeout(() => {
                current++;
                render();
              }, 1400);
            } else {
              btn.classList.add('incorrect');
              this.playError();
              if (fb) {
                fb.className = 'kids-toast-feedback bad';
                fb.textContent = `Remember to use the past simple form!`;
                fb.style.display = 'block';
              }
            }
          });
        });
      }
    };

    render();
  }

  // 4. MUSEUM TOUR SPEAKING (20 Legendary Exhibits)
  setupMuseumTour() {
    const container = document.getElementById('museumPhrasesContainer');
    if (!container) return;

    // Use responsive grid
    container.className = 'kids-interactive-grid';

    container.innerHTML = U11_MUSEUM.map((ex, i) => `
      <div class="kids-unit11-card museum-card" data-idx="${i}" id="museum-card-${i}">
        <div class="kids-unit11-card-top">
          <span class="kids-unit11-card-icon">${ex.icon}</span>
          <div class="kids-unit11-card-meta">
            <h3 class="kids-unit11-card-title">${ex.title}</h3>
            <span class="kids-unit11-card-sub">${ex.room}</span>
          </div>
        </div>
        <p class="kids-unit11-card-desc">"${ex.desc}"</p>
        <div class="kids-unit11-audio-row">
          <button type="button" class="kids-audio-play-btn tour-audio-btn" data-text="${ex.speechText}" aria-label="Listen to ${ex.title} docent narration">
            🔊 Hear Tour Narration
          </button>
          <span style="font-size:0.75rem; color:#64748b; font-weight:700;">+30 ⭐</span>
        </div>
        <div class="card-quiz-wrapper" id="tour-quiz-${i}"></div>
      </div>
    `).join('');

    // Attach audio and quiz
    container.querySelectorAll('.kids-unit11-card').forEach((cardEl, i) => {
      const ex = U11_MUSEUM[i];
      const audioBtn = cardEl.querySelector('.tour-audio-btn');
      if (audioBtn) {
        audioBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.speak(ex.speechText);
          this.playSuccess();
          this.addStars(30);
        });
      }
      const quizContainer = cardEl.querySelector(`#tour-quiz-${i}`);
      if (quizContainer && ex.quiz) {
        this.renderCardQuiz(quizContainer, ex.quiz, 'museum', i);
      }
    });
  }
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.activity-view').forEach(v => v.classList.remove('active-view'));

  btn.classList.add('active');
  const view = document.getElementById(`view-${tabId}`);
  if (view) view.classList.add('active-view');
}
