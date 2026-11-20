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
    "icon": "\ud83e\udd96",
    "period": "Late Cretaceous",
    "fact": "The T-Rex had teeth as large as bananas and powerful jaws!",
    "speechText": "Fossil uncovered! The Tyrannosaurus Rex! The T-Rex had teeth as large as bananas and powerful jaws!",
    "quiz": [
      {
        "q": "How big were the teeth of a T-Rex?",
        "options": [
          "Like pine needles",
          "As large as bananas",
          "Tiny like rice grains"
        ],
        "correct": 1,
        "exp": "T-Rex teeth could reach 30 centimeters (banana-sized)!"
      },
      {
        "q": "In which geologic period did T-Rex rule?",
        "options": [
          "Ice Age",
          "Modern era",
          "Late Cretaceous"
        ],
        "correct": 2,
        "exp": "T-Rex lived at the end of the Cretaceous period."
      },
      {
        "q": "What kind of jaws did T-Rex have?",
        "options": [
          "Soft weak jaws",
          "Crushing, powerful jaws",
          "No teeth at all"
        ],
        "correct": 1,
        "exp": "It had the strongest bite force of any land animal!"
      },
      {
        "q": "Was Tyrannosaurus Rex an herbivore or a carnivore?",
        "options": [
          "Carnivore (meat-eater)",
          "Insectivore",
          "Herbivore (plant-eater)"
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
          "Ten horns",
          "Only one horn",
          "Three sharp horns"
        ],
        "correct": 2,
        "exp": "Two large brow horns and one smaller nose horn!"
      },
      {
        "q": "What diet did Triceratops eat?",
        "options": [
          "Meat and fish",
          "Only seeds",
          "Plants (herbivore)"
        ],
        "correct": 2,
        "exp": "It grazed on prehistoric shrubs and palms."
      },
      {
        "q": "Why did Triceratops use its horns?",
        "options": [
          "To climb trees",
          "To defend against predators",
          "To dig deep swimming pools"
        ],
        "correct": 1,
        "exp": "Horns defended it against hungry predators like T-Rex."
      },
      {
        "q": "What large bony feature protected its neck?",
        "options": [
          "Spiky wings",
          "A solid neck frill",
          "A thick fur collar"
        ],
        "correct": 1,
        "exp": "The frill shielded its neck from lethal bites."
      },
      {
        "q": "What prefix in its name means 'three'?",
        "options": [
          "Tri-",
          "Penta-",
          "Bi-"
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
          "A modern songbird",
          "A mammal",
          "A flying reptile (pterosaur)"
        ],
        "correct": 2,
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
          "Deep underground caves",
          "Underwater reefs",
          "Near ancient coastlines and cliffs"
        ],
        "correct": 2,
        "exp": "They nested on sea cliffs and hunted over water."
      },
      {
        "q": "What did Pterodactyls often catch to eat?",
        "options": [
          "Fish and small animals",
          "Grass only",
          "Leaves and berries"
        ],
        "correct": 0,
        "exp": "They skimmed coastal waters for fish and small prey."
      },
      {
        "q": "Could Pterodactyls glide through the prehistoric sky?",
        "options": [
          "No, they only hopped",
          "Yes, they soared gracefully",
          "No, they only swam"
        ],
        "correct": 1,
        "exp": "They were skilled gliders and fliers."
      }
    ]
  },
  {
    "id": "fossil-mammoth",
    "name": "Woolly Mammoth",
    "icon": "\ud83e\udda3",
    "period": "Ice Age",
    "fact": "Mammoths roamed frozen tundras with thick fur and curved tusks.",
    "speechText": "Fossil uncovered! The Woolly Mammoth! Mammoths roamed frozen tundras with thick fur and curved tusks.",
    "quiz": [
      {
        "q": "During which cold era did Woolly Mammoths roam?",
        "options": [
          "The Ice Age (Pleistocene)",
          "The Space Age",
          "The Jurassic Period"
        ],
        "correct": 0,
        "exp": "Mammoths were adapted to glacial Ice Age climates."
      },
      {
        "q": "What protected mammoths from freezing cold?",
        "options": [
          "Warm sweaters",
          "Thick woolly fur and dense fat",
          "Scaly skin"
        ],
        "correct": 1,
        "exp": "Two layers of dense fur and a 10cm fat layer kept them warm."
      },
      {
        "q": "What distinctive feature curved out of their heads?",
        "options": [
          "Antler crowns",
          "Long curved ivory tusks",
          "Bull horns"
        ],
        "correct": 1,
        "exp": "Their tusks could reach over 4 meters in length!"
      },
      {
        "q": "What modern living animal is the mammoth's closest cousin?",
        "options": [
          "The Asian Elephant",
          "The Horse",
          "The Rhinoceros"
        ],
        "correct": 0,
        "exp": "Asian elephants share over 99% of mammoth DNA."
      },
      {
        "q": "What did Woolly Mammoths graze on?",
        "options": [
          "Fish and seals",
          "Other large animals",
          "Grasses, shrubs, and tundra moss"
        ],
        "correct": 2,
        "exp": "They spent hours each day grazing on tundra vegetation."
      }
    ]
  },
  {
    "id": "fossil-velociraptor",
    "name": "Velociraptor",
    "icon": "\ud83e\udd96",
    "period": "Late Cretaceous",
    "fact": "A swift hunter with sharp curved claws on its feet.",
    "speechText": "Fossil uncovered! The Velociraptor! A swift hunter with sharp curved claws on its feet.",
    "quiz": [
      {
        "q": "What special weapon did Velociraptor have on each foot?",
        "options": [
          "Webbed duck feet",
          "A sharp curved sickle claw",
          "Flat wooden hooves"
        ],
        "correct": 1,
        "exp": "Its deadly second toe bore an 8cm retractable sickle claw!"
      },
      {
        "q": "Was the Velociraptor slow or swift?",
        "options": [
          "Could only crawl",
          "Extremely slow",
          "Swift and agile runner"
        ],
        "correct": 2,
        "exp": "Velociraptor ran swiftly with a stiff balancing tail."
      },
      {
        "q": "What body covering did Velociraptor have in life?",
        "options": [
          "Heavy steel scales",
          "Thick wool fur",
          "Feathers"
        ],
        "correct": 2,
        "exp": "Fossils show clear quill knobs on its forearm bones!"
      },
      {
        "q": "Did Velociraptors hunt alone or in smart packs?",
        "options": [
          "They did not hunt",
          "In smart cooperative packs",
          "Always underwater"
        ],
        "correct": 1,
        "exp": "They were intelligent social hunters."
      },
      {
        "q": "What does the name 'Velociraptor' mean?",
        "options": [
          "Swift seizer or thief",
          "Big green giant",
          "Lazy sleeper"
        ],
        "correct": 0,
        "exp": "'Velox' (swift) and 'raptor' (robber or thief) in Latin."
      }
    ]
  },
  {
    "id": "fossil-stegosaurus",
    "name": "Stegosaurus",
    "icon": "\ud83e\udd95",
    "period": "Late Jurassic",
    "fact": "It had large bony plates on its back and sharp tail spikes.",
    "speechText": "Fossil uncovered! The Stegosaurus! It had large bony plates on its back and sharp tail spikes.",
    "quiz": [
      {
        "q": "What stood upright along the back of a Stegosaurus?",
        "options": [
          "Fluffy white wings",
          "Large bony triangular plates",
          "Pointy shark fins"
        ],
        "correct": 1,
        "exp": "Up to 17 alternating bony plates lined its spine!"
      },
      {
        "q": "What defensive weapon was at the end of its tail?",
        "options": [
          "A soft sponge",
          "A glowing lantern",
          "Four sharp tail spikes (thagomizer)"
        ],
        "correct": 2,
        "exp": "The spikes defended it against predators like Allosaurus."
      },
      {
        "q": "What size was the brain of a Stegosaurus?",
        "options": [
          "About the size of a walnut",
          "Bigger than a basketball",
          "As big as a car"
        ],
        "correct": 0,
        "exp": "Despite weighing 5 tons, its brain was walnut-sized!"
      },
      {
        "q": "Did Stegosaurus eat plants or meat?",
        "options": [
          "Fish only",
          "Other dinosaurs",
          "Low plants and ferns"
        ],
        "correct": 2,
        "exp": "Stegosaurus was a low-browsing herbivore."
      },
      {
        "q": "In which geologic period did Stegosaurus live?",
        "options": [
          "Late Jurassic",
          "Modern era",
          "Ice Age"
        ],
        "correct": 0,
        "exp": "Stegosaurus lived 150 million years ago in the Jurassic."
      }
    ]
  },
  {
    "id": "fossil-brachiosaurus",
    "name": "Brachiosaurus",
    "icon": "\ud83e\udd95",
    "period": "Late Jurassic",
    "fact": "A gentle giant with a long neck that reached tall trees.",
    "speechText": "Fossil uncovered! The Brachiosaurus! A gentle giant with a long neck that reached tall trees.",
    "quiz": [
      {
        "q": "Why did Brachiosaurus have such a towering neck?",
        "options": [
          "To swim deep underwater",
          "To reach high treetop foliage",
          "To sleep on rocks"
        ],
        "correct": 1,
        "exp": "Its neck allowed it to feed on conifer canopies 13 meters high."
      },
      {
        "q": "Were its front legs longer or shorter than its hind legs?",
        "options": [
          "Hind legs were longer",
          "Front legs were longer",
          "All legs were identical"
        ],
        "correct": 1,
        "exp": "'Brachiosaurus' means 'arm lizard' due to its longer front legs."
      },
      {
        "q": "What did Brachiosaurus eat daily?",
        "options": [
          "Hundreds of kilos of leaves and branches",
          "Insects and beetles",
          "Small fish"
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
          "A fast sprinter",
          "An acrobatic hopper",
          "A gentle, slow-moving giant"
        ],
        "correct": 2,
        "exp": "Its immense weight required steady, elephantine walking."
      }
    ]
  },
  {
    "id": "fossil-spinosaurus",
    "name": "Spinosaurus",
    "icon": "\ud83d\udc0a",
    "period": "Cretaceous River Hunter",
    "fact": "A huge swimming dinosaur with a giant sail on its back.",
    "speechText": "Fossil uncovered! The Spinosaurus! A huge swimming dinosaur with a giant sail on its back.",
    "quiz": [
      {
        "q": "What dramatic structure rose from Spinosaurus's spine?",
        "options": [
          "A rocky hump",
          "Two feathered wings",
          "A giant dorsal neural sail"
        ],
        "correct": 2,
        "exp": "Its sail was supported by spines up to 1.8 meters tall."
      },
      {
        "q": "Where did Spinosaurus spend much of its hunting time?",
        "options": [
          "High on mountain peaks",
          "In ancient rivers and water deltas",
          "In snowy glaciers"
        ],
        "correct": 1,
        "exp": "It was semi-aquatic with paddle-like tail swimming."
      },
      {
        "q": "What was its long snout shaped like?",
        "options": [
          "A round beak",
          "A crocodile snout with conical teeth",
          "A duck bill with no teeth"
        ],
        "correct": 1,
        "exp": "Its crocodile snout was built to seize slippery fish."
      },
      {
        "q": "What was Spinosaurus's favorite prey?",
        "options": [
          "Cave bears",
          "Acorns and apples",
          "Giant prehistoric river fish"
        ],
        "correct": 2,
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
    "icon": "\ud83d\udee1\ufe0f",
    "period": "Armored Herbivore",
    "fact": "An armored tank with a heavy bone club on its tail.",
    "speechText": "Fossil uncovered! The Ankylosaurus! An armored tank with a heavy bone club on its tail.",
    "quiz": [
      {
        "q": "What covered the top of an Ankylosaurus's body?",
        "options": [
          "Silky fur",
          "Soft down feathers",
          "Bony armor plates (osteoderms)"
        ],
        "correct": 2,
        "exp": "Tough bone plates embedded in its skin protected it from bites."
      },
      {
        "q": "What powerful weapon was at the tip of its tail?",
        "options": [
          "A stinging barb",
          "A soft brush",
          "A heavy solid bone club"
        ],
        "correct": 2,
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
          "Because it fired cannonballs",
          "Its heavy armored shield and tail club",
          "Because it had wheels"
        ],
        "correct": 1,
        "exp": "Its impregnable armor resembled a military tank."
      }
    ]
  },
  {
    "id": "fossil-sabertooth",
    "name": "Saber-Toothed Cat",
    "icon": "\ud83d\udc2f",
    "period": "Ice Age Mammal",
    "fact": "A powerful hunter with long curved canine teeth.",
    "speechText": "Fossil uncovered! The Saber-Toothed Cat! A powerful hunter with long curved canine teeth.",
    "quiz": [
      {
        "q": "What made the saber-toothed cat's teeth so famous?",
        "options": [
          "Blue glowing teeth",
          "Long curved serrated canine teeth",
          "Tiny blunt molars"
        ],
        "correct": 1,
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
          "The bear family",
          "The cat family (Felidae)",
          "The dog family"
        ],
        "correct": 1,
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
          "Death Valley",
          "The Grand Canyon",
          "La Brea Tar Pits in Los Angeles"
        ],
        "correct": 2,
        "exp": "Thousands of skeletons were preserved in La Brea asphalt."
      }
    ]
  },
  {
    "id": "fossil-plesiosaurus",
    "name": "Plesiosaurus",
    "icon": "\ud83e\udd95",
    "period": "Prehistoric Ocean",
    "fact": "A sea creature with four flippers and a slender neck.",
    "speechText": "Fossil uncovered! The Plesiosaurus! A sea creature with four flippers and a slender neck.",
    "quiz": [
      {
        "q": "Where did the Plesiosaurus live and swim?",
        "options": [
          "In snowy tree branches",
          "In desert sand dunes",
          "In prehistoric oceans and seas"
        ],
        "correct": 2,
        "exp": "Plesiosaurs ruled Mesozoic marine waters."
      },
      {
        "q": "How did Plesiosaurus propel itself through the ocean?",
        "options": [
          "By walking on claws",
          "With four large paddle flippers",
          "With a propeller"
        ],
        "correct": 1,
        "exp": "It 'flew' underwater using four large limb paddles."
      },
      {
        "q": "What shaped its long, graceful upper body?",
        "options": [
          "A slender flexible neck",
          "A wide turtle shell",
          "A giant bony horn"
        ],
        "correct": 0,
        "exp": "Its neck allowed it to dart its head into schools of fish."
      },
      {
        "q": "What did Plesiosaurus catch in the water?",
        "options": [
          "Flying insects",
          "Seaweed and kelp only",
          "Fish, squid, and ammonites"
        ],
        "correct": 2,
        "exp": "Interlocking needle teeth trapped slippery marine prey."
      },
      {
        "q": "Did Plesiosaurus breathe air like modern whales and turtles?",
        "options": [
          "No, it did not breathe",
          "Yes, it surfaced to breathe air",
          "No, it had fish gills"
        ],
        "correct": 1,
        "exp": "It had lungs and surfaced regularly for air."
      }
    ]
  },
  {
    "id": "fossil-allosaurus",
    "name": "Allosaurus",
    "icon": "\ud83e\udd96",
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
          "Ten fingers",
          "One single thumb",
          "Three sharp curved claws"
        ],
        "correct": 2,
        "exp": "It had three-fingered forelimbs with large curved claws."
      },
      {
        "q": "What did Allosaurus hunt in the Jurassic floodplains?",
        "options": [
          "Grass and fruits",
          "Sauropods and Stegosaurus",
          "Tree bark only"
        ],
        "correct": 1,
        "exp": "Bite marks show it hunted large Jurassic herbivores."
      },
      {
        "q": "What small bony feature sat above each eye?",
        "options": [
          "A flower crown",
          "A long metal spike",
          "Short bony crests or horns"
        ],
        "correct": 2,
        "exp": "Small bony horns sat above its eyes, possibly for display."
      }
    ]
  },
  {
    "id": "fossil-parasaurolophus",
    "name": "Parasaurolophus",
    "icon": "\ud83e\udd95",
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
          "Storing extra water",
          "Catching flying birds",
          "Making deep resonant trumpet sounds"
        ],
        "correct": 2,
        "exp": "Air resonated inside the cranial crest like a brass trombone."
      },
      {
        "q": "What family of duck-billed dinosaurs did it belong to?",
        "options": [
          "Hadrosaurs",
          "Theropods",
          "Ceratopsians"
        ],
        "correct": 0,
        "exp": "It was a hadrosaur (duck-billed dinosaur)."
      },
      {
        "q": "What did Parasaurolophus grind with its tooth battery?",
        "options": [
          "Meat and bones",
          "Leaves, twigs, and pine needles",
          "Sea shells only"
        ],
        "correct": 1,
        "exp": "Hundreds of grinding teeth pulverized tough plant matter."
      },
      {
        "q": "Could Parasaurolophus walk on both two and four legs?",
        "options": [
          "No, it hopped like a rabbit",
          "Yes, it could walk on 2 or 4 limbs",
          "No, it only crawled"
        ],
        "correct": 1,
        "exp": "It grazed on all fours and could run on two hind legs."
      }
    ]
  },
  {
    "id": "fossil-archaeopteryx",
    "name": "Archaeopteryx",
    "icon": "\ud83e\udd85",
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
          "Fur like a rabbit",
          "Hard turtle shells",
          "True flight feathers"
        ],
        "correct": 2,
        "exp": "Its feathers were aerodynamically asymmetrical, built for flight."
      },
      {
        "q": "What dinosaur reptilian features did it still have?",
        "options": [
          "A horn on its nose",
          "Toothed jaws, wing claws, and long bony tail",
          "Gills and fins"
        ],
        "correct": 1,
        "exp": "Unlike modern birds, it had teeth and a long bony tail."
      },
      {
        "q": "In which country's limestone was it discovered in 1861?",
        "options": [
          "Brazil",
          "Australia",
          "Germany (Solnhofen limestone)"
        ],
        "correct": 2,
        "exp": "Solnhofen quarries preserved delicate feather impressions."
      },
      {
        "q": "About what size was an Archaeopteryx?",
        "options": [
          "Tiny as a mosquito",
          "About the size of a raven or pigeon",
          "As big as a bus"
        ],
        "correct": 1,
        "exp": "It was roughly the size of a modern magpie or raven."
      }
    ]
  },
  {
    "id": "fossil-diplodocus",
    "name": "Diplodocus",
    "icon": "\ud83e\udd95",
    "period": "Late Jurassic",
    "fact": "One of the longest creatures ever with a whip-like tail.",
    "speechText": "Fossil uncovered! The Diplodocus! One of the longest creatures ever with a whip-like tail.",
    "quiz": [
      {
        "q": "What was remarkable about Diplodocus's body length?",
        "options": [
          "It was shaped like a cube",
          "It was only three feet long",
          "It was over 85 feet (26 meters) long"
        ],
        "correct": 2,
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
          "Crush heavy bones",
          "Chew steak",
          "Strip leaves cleanly from branches"
        ],
        "correct": 2,
        "exp": "Its peg teeth combed foliage straight off conifer twigs."
      },
      {
        "q": "How did Diplodocus hold its long neck most of the time?",
        "options": [
          "Coiled like a spring",
          "Mostly horizontal to sweep low ferns",
          "Straight up into clouds"
        ],
        "correct": 1,
        "exp": "Its vertebrae kept the neck extending forward horizontally."
      },
      {
        "q": "How did Diplodocus reproduce?",
        "options": [
          "Laid clutches of round eggs in nests",
          "Built nests high in trees",
          "Gave live birth"
        ],
        "correct": 0,
        "exp": "Sauropods laid clutches of hard-shelled eggs in ground nests."
      }
    ]
  },
  {
    "id": "fossil-dimetrodon",
    "name": "Dimetrodon",
    "icon": "\ud83e\udd8e",
    "period": "Permian Apex",
    "fact": "It lived before dinosaurs with a sun-catching back sail.",
    "speechText": "Fossil uncovered! The Dimetrodon! It lived before dinosaurs with a sun-catching back sail.",
    "quiz": [
      {
        "q": "Did Dimetrodon live before or after dinosaurs?",
        "options": [
          "During the Ice Age",
          "Before dinosaurs (Permian period)",
          "After dinosaurs died out"
        ],
        "correct": 1,
        "exp": "Dimetrodon lived 295 million years ago, 50M years before dinosaurs!"
      },
      {
        "q": "What supported its iconic dorsal sail?",
        "options": [
          "Stiff wooden poles",
          "Elongated neural spine bones",
          "Paper feathers"
        ],
        "correct": 1,
        "exp": "Extremely tall neural spines supported the vascular skin sail."
      },
      {
        "q": "What was one main purpose of its back sail?",
        "options": [
          "Thermoregulation (warming in the sun)",
          "Flying in air",
          "Sailing on ocean waves"
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
          "King of rocks",
          "Giant red lizard",
          "Two measures of teeth"
        ],
        "correct": 2,
        "exp": "It had two distinct tooth types: shearing canines and molars."
      }
    ]
  },
  {
    "id": "fossil-megalodon",
    "name": "Megalodon",
    "icon": "\ud83e\udd88",
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
          "Less than 1 millimeter",
          "Over 7 inches (18 cm) long",
          "As big as a submarine"
        ],
        "correct": 1,
        "exp": "Its fossil teeth are bigger than an adult human's open hand."
      },
      {
        "q": "What was Megalodon's skeleton made of?",
        "options": [
          "Solid steel",
          "Carved granite rock",
          "Cartilage (which rarely fossilizes)"
        ],
        "correct": 2,
        "exp": "Like modern sharks, its skeleton was cartilage, so teeth fossilize best."
      },
      {
        "q": "What was Megalodon's primary food source?",
        "options": [
          "Kelp and seaweed",
          "Ancient whales and large marine mammals",
          "Plankton only"
        ],
        "correct": 1,
        "exp": "Its massive jaws could crush whale ribs and flippers."
      },
      {
        "q": "What does 'Megalodon' translate to in Greek?",
        "options": [
          "Fast fin",
          "Ocean monster",
          "Big tooth (megas + odon)"
        ],
        "correct": 2,
        "exp": "'Megas' (big) + 'odous/odont' (tooth) = Big Tooth!"
      }
    ]
  },
  {
    "id": "fossil-iguanodon",
    "name": "Iguanodon",
    "icon": "\ud83e\udd95",
    "period": "Early Cretaceous",
    "fact": "A peaceful plant-eater with conical spikes on its thumbs.",
    "speechText": "Fossil uncovered! The Iguanodon! A peaceful plant-eater with conical spikes on its thumbs.",
    "quiz": [
      {
        "q": "What unique feature did Iguanodon have on each thumb?",
        "options": [
          "A poisonous claw",
          "A sixth finger",
          "A sharp conical thumb spike"
        ],
        "correct": 2,
        "exp": "Its sturdy thumb spike was used for defense and cracking seeds."
      },
      {
        "q": "Where did early paleontologists first mistakenly place its thumb spike?",
        "options": [
          "Inside its ear",
          "On its nose like a horn",
          "On its tail"
        ],
        "correct": 1,
        "exp": "Gideon Mantell first reconstructed it as a horn on the nose!"
      },
      {
        "q": "What modern reptile did its teeth closely resemble?",
        "options": [
          "An iguana lizard",
          "A crocodile",
          "A chameleon"
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
          "No, it could only roll",
          "No, only on 2 legs",
          "Yes, it walked on 4 feet and ran on 2"
        ],
        "correct": 2,
        "exp": "Its three middle fingers had hoof-like pads for four-legged walking."
      }
    ]
  },
  {
    "id": "fossil-carnotaurus",
    "name": "Carnotaurus",
    "icon": "\ud83e\udd96",
    "period": "Late Cretaceous",
    "fact": "A fast running predator with bull horns above its eyes.",
    "speechText": "Fossil uncovered! The Carnotaurus! A fast running predator with bull horns above its eyes.",
    "quiz": [
      {
        "q": "What unusual feature sat right above Carnotaurus's eyes?",
        "options": [
          "Long rabbit ears",
          "Two thick bull-like horns",
          "A giant glowing lamp"
        ],
        "correct": 1,
        "exp": "It is the only known meat-eating dinosaur with thick skull horns."
      },
      {
        "q": "What were Carnotaurus's front arms like?",
        "options": [
          "Long with sharp wings",
          "Muscular and heavy",
          "Extremely tiny and vestigial"
        ],
        "correct": 2,
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
          "Could not run",
          "One of the fastest large theropods",
          "Slower than a snail"
        ],
        "correct": 1,
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
    "icon": "\ud83e\udda5",
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
          "As tall as a skyscraper",
          "Only 1 foot tall",
          "Up to 6 meters (20 feet) tall"
        ],
        "correct": 2,
        "exp": "When rearing on its hind legs, it matched the height of an elephant!"
      },
      {
        "q": "Did Megatherium live in trees or on the ground?",
        "options": [
          "High in treetops",
          "On the ground (giant ground sloth)",
          "Deep underwater"
        ],
        "correct": 1,
        "exp": "Weighing 4 tons, it was far too massive to climb trees."
      },
      {
        "q": "What did Megatherium use its massive curved claws for?",
        "options": [
          "Swimming across oceans",
          "Pulling down leafy branches to eat",
          "Digging coal mines"
        ],
        "correct": 1,
        "exp": "Its claws gripped high tree limbs to strip nutritious foliage."
      },
      {
        "q": "During which epoch did Megatherium roam the Americas?",
        "options": [
          "The Carboniferous",
          "The Triassic dawn",
          "The Pleistocene (Ice Age)"
        ],
        "correct": 2,
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
    "icon": "\ud83d\udd70\ufe0f",
    "desc": "Allowed towns to measure hours with gears and bells.",
    "speechText": "The mechanical clock was invented in 14th century europe. Allowed towns to measure hours with gears and bells.",
    "quiz": [
      {
        "q": "What did the mechanical clock allow medieval towns to measure?",
        "options": [
          "The weight of gold",
          "Hours and minutes with gears",
          "The speed of the wind"
        ],
        "correct": 1,
        "exp": "Mechanical gears and bells divided the day into equal hours."
      },
      {
        "q": "In which century were weight-driven clocks built in Europe?",
        "options": [
          "21st Century",
          "Stone Age",
          "14th Century"
        ],
        "correct": 2,
        "exp": "The first public clock towers arose in 14th-century European cities."
      },
      {
        "q": "What moved the hands and rang the bells in town towers?",
        "options": [
          "Weights, gears, and escapements",
          "Water fountains only",
          "Digital batteries"
        ],
        "correct": 0,
        "exp": "Heavy falling weights turned toothed gears regulated by an escapement."
      },
      {
        "q": "Why was measuring time so important for communities?",
        "options": [
          "To change the weather",
          "For market hours, church bells, and daily work",
          "To sail across space"
        ],
        "correct": 1,
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
    "icon": "\ud83d\udcdc",
    "desc": "Revolutionized human knowledge, storytelling and books.",
    "speechText": "Paper & printing was invented in ancient china. Revolutionized human knowledge, storytelling and books.",
    "quiz": [
      {
        "q": "Where were paper and early woodblock printing first invented?",
        "options": [
          "Medieval England",
          "Ancient Egypt",
          "Ancient China"
        ],
        "correct": 2,
        "exp": "Cai Lun perfected papermaking in Han Dynasty China."
      },
      {
        "q": "What did paper and printing revolutionize for humanity?",
        "options": [
          "Cooking recipes only",
          "Building stone walls",
          "Sharing knowledge, storytelling, and books"
        ],
        "correct": 2,
        "exp": "Books and learning could be preserved and shared across nations."
      },
      {
        "q": "What fibers were used by ancient papermakers?",
        "options": [
          "Plastics and glass",
          "Mulberry bark, hemp, and rags",
          "Crushed rock"
        ],
        "correct": 1,
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
          "It used invisible ink",
          "It produced many exact copies swiftly",
          "It was much slower"
        ],
        "correct": 1,
        "exp": "Printing allowed hundreds of books to be produced in days."
      }
    ]
  },
  {
    "id": "inv-compass",
    "item": "The Magnetic Compass",
    "date": "Han Dynasty",
    "icon": "\ud83e\udded",
    "desc": "Helped courageous explorers sail across vast oceans without getting lost.",
    "speechText": "The magnetic compass was invented in han dynasty. Helped courageous explorers sail across vast oceans without getting lost.",
    "quiz": [
      {
        "q": "What mineral did ancient Han inventors use to make the first compass?",
        "options": [
          "Clear diamond",
          "Pure gold",
          "Lodestone (naturally magnetic iron ore)"
        ],
        "correct": 2,
        "exp": "Carved lodestone spoons balanced on bronze plates pointed South."
      },
      {
        "q": "How did the compass help sailors and explorers?",
        "options": [
          "Forecasted ocean rain",
          "Sped up the sailing ship",
          "Showed constant direction on open seas"
        ],
        "correct": 2,
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
          "Road street signs",
          "Flashlights"
        ],
        "correct": 0,
        "exp": "Navigators tracked the North Star (Polaris) across clear skies."
      },
      {
        "q": "What historic age expanded greatly because of the compass?",
        "options": [
          "The Stone Age",
          "The Age of Exploration and Discovery",
          "The Dinosaur Era"
        ],
        "correct": 1,
        "exp": "It enabled trans-oceanic voyages across the Atlantic and Pacific."
      }
    ]
  },
  {
    "id": "inv-telescope",
    "item": "The Telescope",
    "date": "1608 Netherlands",
    "icon": "\ud83d\udd2d",
    "desc": "Galileo looked through it and discovered the moons of Jupiter!",
    "speechText": "The telescope was invented in 1608 netherlands. Galileo looked through it and discovered the moons of jupiter!",
    "quiz": [
      {
        "q": "What famous astronomer turned the telescope toward Jupiter in 1609?",
        "options": [
          "Isaac Newton",
          "Galileo Galilei",
          "Christopher Columbus"
        ],
        "correct": 1,
        "exp": "Galileo built his own telescope and observed the heavens."
      },
      {
        "q": "What did Galileo discover orbiting Jupiter with his telescope?",
        "options": [
          "Rings of pure ice",
          "A giant space station",
          "Four large moons (Galilean moons)"
        ],
        "correct": 2,
        "exp": "Io, Europa, Ganymede, and Callisto orbit around Jupiter."
      },
      {
        "q": "What optical components work together inside a refracting telescope?",
        "options": [
          "Curved optical glass lenses",
          "Clear water tubes",
          "Wooden mirrors"
        ],
        "correct": 0,
        "exp": "An objective lens gathers light and an eyepiece magnifies the image."
      },
      {
        "q": "In which country was the first patented spyglass made in 1608?",
        "options": [
          "Spain",
          "The Netherlands (Hans Lippershey)",
          "Brazil"
        ],
        "correct": 1,
        "exp": "Spectacle-maker Hans Lippershey applied for the first patent in 1608."
      },
      {
        "q": "How does a telescope transform distant stars and planets?",
        "options": [
          "Makes them appear closer and brighter",
          "Makes them invisible",
          "Makes them smaller and darker"
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
    "icon": "\ud83c\udfa1",
    "desc": "The wheel revolutionized transportation and crafting forever.",
    "speechText": "The wheel was invented in 3500 bc. The wheel revolutionized transportation and crafting forever.",
    "quiz": [
      {
        "q": "Where and when was the wheel first invented?",
        "options": [
          "America in 1900",
          "Rome in 500 AD",
          "Mesopotamia around 3500 BC"
        ],
        "correct": 2,
        "exp": "Sumerian craftsmen in Mesopotamia created the first wheels."
      },
      {
        "q": "What was the wheel first used for before transport carts?",
        "options": [
          "A potter's wheel for shaping clay",
          "A bicycle tire",
          "A clock gear"
        ],
        "correct": 0,
        "exp": "Potters first spun horizontal wheels to mold clay bowls and jars."
      },
      {
        "q": "What did adding wheels to carts allow humans to achieve?",
        "options": [
          "Fly over mountains",
          "Transport heavy cargo over long distances",
          "Dig deep under water"
        ],
        "correct": 1,
        "exp": "Friction dropped drastically, letting animals pull massive loads."
      },
      {
        "q": "What central rod connects a pair of wheels together?",
        "options": [
          "A nail",
          "A rubber band",
          "An axle"
        ],
        "correct": 2,
        "exp": "The wheel-and-axle mechanism is a foundational simple machine."
      },
      {
        "q": "What innovation made chariot wheels lighter and faster?",
        "options": [
          "Making square corners",
          "Spokes instead of solid wood disks",
          "Carving from stone"
        ],
        "correct": 1,
        "exp": "Spoked wheels around 2000 BC made chariots fast and agile."
      }
    ]
  },
  {
    "id": "inv-lightbulb",
    "item": "The Lightbulb",
    "date": "1879 America",
    "icon": "\ud83d\udca1",
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
          "Pure oxygen",
          "A vacuum or inert gas",
          "Liquid water"
        ],
        "correct": 1,
        "exp": "Without oxygen, the hot carbon or tungsten filament cannot burn."
      },
      {
        "q": "How did electric lightbulbs improve everyday life in cities?",
        "options": [
          "Cooled down hot houses",
          "Made cars drive faster",
          "Made homes, schools, and streets bright and safe"
        ],
        "correct": 2,
        "exp": "Replaced dangerous open gas flames and smoke in homes."
      },
      {
        "q": "What energy-saving lights do modern homes mostly use today?",
        "options": [
          "Gas lamps",
          "Candle lanterns",
          "LED lights"
        ],
        "correct": 2,
        "exp": "LEDs produce bright light using a fraction of the electricity."
      }
    ]
  },
  {
    "id": "inv-astrolabe",
    "item": "The Astrolabe",
    "date": "Ancient Greece & Islamic Golden Age",
    "icon": "\ud83e\udded",
    "desc": "The astrolabe was invented by ancient astronomers to navigate using the stars.",
    "speechText": "The astrolabe was invented by ancient astronomers to navigate using the stars.",
    "quiz": [
      {
        "q": "What celestial bodies did the astrolabe measure to find time and latitude?",
        "options": [
          "The speed of ocean fish",
          "The altitude of the sun and stars",
          "The shape of clouds"
        ],
        "correct": 1,
        "exp": "By sighting stars through the alidade, it computed local time and position."
      },
      {
        "q": "What civilization brought the astrolabe to artistic and scientific perfection?",
        "options": [
          "Medieval blacksmiths",
          "Astronomers of the Islamic Golden Age",
          "Cave dwellers"
        ],
        "correct": 1,
        "exp": "Scholars in Baghdad, Damascus, and Cordoba added intricate star maps."
      },
      {
        "q": "What was the astrolabe known as in the ancient world?",
        "options": [
          "The ocean compass",
          "The magic lantern",
          "A handheld analog astronomical computer"
        ],
        "correct": 2,
        "exp": "It could solve hundreds of astronomical and geometric problems."
      },
      {
        "q": "What metal was most commonly engraved to make astrolabe plates?",
        "options": [
          "Cast and engraved brass",
          "Clay",
          "Soft pine wood"
        ],
        "correct": 0,
        "exp": "Brass resisted corrosion and held precise engraved degree marks."
      },
      {
        "q": "Could an astrolabe calculate the exact moment of dawn and sunset?",
        "options": [
          "Yes, with remarkable accuracy",
          "No, it only weighed coins",
          "No, it only showed weather"
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
    "icon": "\u2600\ufe0f",
    "desc": "The sundial was created in ancient Egypt to tell time by tracking the shadow of the sun.",
    "speechText": "The sundial was created in ancient Egypt to tell time by tracking the shadow of the sun.",
    "quiz": [
      {
        "q": "How does a sundial measure hours during the day?",
        "options": [
          "By dripping drops of water",
          "By tracking a moving shadow cast by the sun",
          "By ringing loud bells"
        ],
        "correct": 1,
        "exp": "As the sun traverses the sky, the shadow rotates around hour lines."
      },
      {
        "q": "What is the upright pointer that casts the shadow called?",
        "options": [
          "A pendulum",
          "A gnomon",
          "A piston"
        ],
        "correct": 1,
        "exp": "The gnomon's angled edge points toward the celestial pole."
      },
      {
        "q": "Where were early sundials and monumental shadow obelisks erected?",
        "options": [
          "Modern Canada",
          "Antarctica",
          "Ancient Egypt"
        ],
        "correct": 2,
        "exp": "Egyptian shadow clocks date back to 1500 BC."
      },
      {
        "q": "What is one limitation of a traditional outdoor sundial?",
        "options": [
          "It ticks too loudly",
          "It runs out of battery",
          "It cannot tell time at night or on rainy days"
        ],
        "correct": 2,
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
    "icon": "\ud83c\udfdb\ufe0f",
    "desc": "The Roman aqueduct carried fresh water from distant mountains into cities using stone arches.",
    "speechText": "The Roman aqueduct carried fresh water from distant mountains into cities using stone arches.",
    "quiz": [
      {
        "q": "What was the purpose of a Roman aqueduct?",
        "options": [
          "To defend against enemy armies",
          "To keep horses warm",
          "To carry clean mountain water into cities"
        ],
        "correct": 2,
        "exp": "Aqueducts supplied millions of liters of freshwater daily."
      },
      {
        "q": "What architectural feature allowed aqueducts to cross valleys?",
        "options": [
          "Stacked stone arches",
          "Wooden rafts",
          "Rope suspension bridges"
        ],
        "correct": 0,
        "exp": "Tiered stone arches distributed immense weight across wide canyons."
      },
      {
        "q": "What natural force moved water through the aqueduct channel?",
        "options": [
          "Electric motor pumps",
          "Wind sails",
          "Gravity along a steady gentle downhill slope"
        ],
        "correct": 2,
        "exp": "Engineers maintained a gradient of just a few inches per mile!"
      },
      {
        "q": "Where did freshwater arrive inside Roman cities?",
        "options": [
          "Public fountains, thermal baths, and homes",
          "Into deep caves",
          "Only to the emperor's palace"
        ],
        "correct": 0,
        "exp": "Fountains provided free clean drinking water to all citizens."
      },
      {
        "q": "What famous 3-tier Roman aqueduct bridge still stands in France?",
        "options": [
          "Golden Gate",
          "Pont du Gard",
          "London Bridge"
        ],
        "correct": 1,
        "exp": "The Pont du Gard near N\u00eemes is over 2,000 years old!"
      }
    ]
  },
  {
    "id": "inv-gunpowder",
    "item": "Gunpowder",
    "date": "9th Century Tang China",
    "icon": "\ud83d\udca5",
    "desc": "Gunpowder was discovered in China and was first used for colorful fireworks and festivals.",
    "speechText": "Gunpowder was discovered in China and was first used for colorful fireworks and festivals.",
    "quiz": [
      {
        "q": "Where was gunpowder originally discovered in the 9th century?",
        "options": [
          "Medieval Scandinavia",
          "Ancient Greece",
          "China during the Tang Dynasty"
        ],
        "correct": 2,
        "exp": "Chinese alchemists discovered black powder during the Tang period."
      },
      {
        "q": "What was gunpowder first celebrated for in public ceremonies?",
        "options": [
          "Colorful fireworks and lantern festivals",
          "Painting walls",
          "Making baking flour"
        ],
        "correct": 0,
        "exp": "Loud firecrackers and colorful displays warded off evil spirits."
      },
      {
        "q": "What three substances made up traditional black powder?",
        "options": [
          "Saltpeter (potassium nitrate), sulfur, and charcoal",
          "Sand, clay, and water",
          "Salt, sugar, and flour"
        ],
        "correct": 0,
        "exp": "The exact proportion created explosive combustion when ignited."
      },
      {
        "q": "Who stumbled upon the formula while seeking immortality elixirs?",
        "options": [
          "Viking sailors",
          "Daoist alchemists",
          "Roman legionnaires"
        ],
        "correct": 1,
        "exp": "Alchemists experimenting with sulfur and saltpeter discovered the mix."
      },
      {
        "q": "What trade network carried gunpowder knowledge across Eurasia?",
        "options": [
          "The Polar Express",
          "The Silk Road",
          "The Atlantic Canal"
        ],
        "correct": 1,
        "exp": "Traders and diplomats spread fireworks knowledge along the Silk Road."
      }
    ]
  },
  {
    "id": "inv-eyeglasses",
    "item": "Eyeglasses",
    "date": "1286 Italy",
    "icon": "\ud83d\udc53",
    "desc": "Eyeglasses were invented in Italy so scholars and readers could see small letters clearly.",
    "speechText": "Eyeglasses were invented in Italy so scholars and readers could see small letters clearly.",
    "quiz": [
      {
        "q": "Where were the first wearable reading spectacles invented around 1286?",
        "options": [
          "Australia",
          "Northern Italy (Pisa and Venice)",
          "Ancient Japan"
        ],
        "correct": 1,
        "exp": "Italian glass craftsmen in Pisa and Venice created the first pairs."
      },
      {
        "q": "Who benefited first from convex glass lenses?",
        "options": [
          "Blacksmiths only",
          "Marathon runners",
          "Scholars, monks, scribes, and elderly readers"
        ],
        "correct": 2,
        "exp": "It extended the productive reading lives of scholars and artisans."
      },
      {
        "q": "What island near Venice was world-renowned for crystal glassblowing?",
        "options": [
          "Santorini",
          "Murano",
          "Corsica"
        ],
        "correct": 1,
        "exp": "Murano master glassmakers excelled at clear quartz crystal lenses."
      },
      {
        "q": "How were early spectacles held in place on the face?",
        "options": [
          "Ear hooks like today",
          "Glued to eyebrows",
          "Rivet frames pinched onto the bridge of the nose"
        ],
        "correct": 2,
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
    "icon": "\u2699\ufe0f",
    "desc": "The water wheel harnessed river currents to grind grain into flour and power workshops.",
    "speechText": "The water wheel harnessed river currents to grind grain into flour and power workshops.",
    "quiz": [
      {
        "q": "What natural energy source turns the paddles of a water wheel?",
        "options": [
          "Steam pressure",
          "Flowing river or stream currents",
          "Solar radiation"
        ],
        "correct": 1,
        "exp": "The kinetic momentum of rushing water turns the paddle blades."
      },
      {
        "q": "What was one of the most important tasks of early watermills?",
        "options": [
          "Grinding grain into flour for bread",
          "Printing daily news",
          "Carrying passengers"
        ],
        "correct": 0,
        "exp": "Gristmills ground sacks of grain in minutes rather than hours."
      },
      {
        "q": "What mechanical parts transmit rotary power inside a watermill?",
        "options": [
          "A leather strap only",
          "A metal wire",
          "Driveshafts, gears, and millstones"
        ],
        "correct": 2,
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
          "Coal stoves",
          "Nuclear reactors",
          "Hydroelectric dam turbines"
        ],
        "correct": 2,
        "exp": "Modern hydro turbines use the exact same fluid dynamics principle!"
      }
    ]
  },
  {
    "id": "inv-abacus",
    "item": "The Abacus",
    "date": "Ancient Mesopotamia & Asia",
    "icon": "\ud83e\uddee",
    "desc": "The abacus was the first calculating machine using sliding wooden beads on rods.",
    "speechText": "The abacus was the first calculating machine using sliding wooden beads on rods.",
    "quiz": [
      {
        "q": "What is an abacus used for in commerce and accounting?",
        "options": [
          "Playing melodies",
          "Rapid arithmetic calculations and counting",
          "Weighing heavy stones"
        ],
        "correct": 1,
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
          "Drawing maps",
          "Only spelling letters",
          "Addition, subtraction, multiplication, and division"
        ],
        "correct": 2,
        "exp": "Skilled users can even calculate square roots and cube roots!"
      },
      {
        "q": "What famous Asian counting frame uses 1 upper and 4 lower beads?",
        "options": [
          "The Compass",
          "The Japanese Soroban",
          "The Astrolabe"
        ],
        "correct": 1,
        "exp": "The Soroban is a base-10 abacus widely taught in Asian schools."
      },
      {
        "q": "Why is the abacus considered an ancestor of modern computers?",
        "options": [
          "It processes, registers, and stores numeric data mechanically",
          "Because it connected to wifi",
          "Because it had a screen"
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
    "icon": "\ud83d\udca8",
    "desc": "The windmill was invented in Persia to capture the power of the wind and pump water.",
    "speechText": "The windmill was invented in Persia to capture the power of the wind and pump water.",
    "quiz": [
      {
        "q": "What clean atmospheric force drives windmill blades?",
        "options": [
          "Falling rain",
          "River water",
          "The kinetic energy of the wind"
        ],
        "correct": 2,
        "exp": "Air currents strike tilted sails to turn a central drive shaft."
      },
      {
        "q": "Where were vertical-axis windmills first constructed to grind corn?",
        "options": [
          "Ancient Persia (modern Iran)",
          "The Amazon",
          "Ancient Iceland"
        ],
        "correct": 0,
        "exp": "Persian panemone windmills caught strong regional desert winds."
      },
      {
        "q": "What country famously built thousands of windmills to pump polder water?",
        "options": [
          "Switzerland",
          "The Netherlands (Holland)",
          "Greece"
        ],
        "correct": 1,
        "exp": "Dutch windmills pumped water out of lowlands to reclaim farmland."
      },
      {
        "q": "What did windmills grind inside their mill houses?",
        "options": [
          "Iron into gold",
          "Stone into water",
          "Wheat, barley, and corn into flour"
        ],
        "correct": 2,
        "exp": "Heavy rotating millstones crushed grains into fine flour."
      },
      {
        "q": "What modern clean energy generators are direct descendants of windmills?",
        "options": [
          "Water towers",
          "Modern wind turbines",
          "Steam locomotives"
        ],
        "correct": 1,
        "exp": "Giant wind turbines generate clean electricity around the world today."
      }
    ]
  },
  {
    "id": "inv-papyrus",
    "item": "Papyrus",
    "date": "Ancient Egypt",
    "icon": "\ud83d\udcc4",
    "desc": "Papyrus was made from river reeds in ancient Egypt to write scrolls with dark ink.",
    "speechText": "Papyrus was made from river reeds in ancient Egypt to write scrolls with dark ink.",
    "quiz": [
      {
        "q": "What plant harvested along the Nile River was made into papyrus?",
        "options": [
          "Pine wood trees",
          "Cactus leaves",
          "The Cyperus papyrus sedge reed"
        ],
        "correct": 2,
        "exp": "Tall papyrus reeds grew abundantly in the Nile delta marshes."
      },
      {
        "q": "How were papyrus strips bonded into flexible sheets?",
        "options": [
          "Sewn with copper wire",
          "Pressed overlapping strips welded by natural plant sap",
          "With synthetic plastic tape"
        ],
        "correct": 1,
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
          "Pencil",
          "Book",
          "Paper"
        ],
        "correct": 2,
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
    "icon": "\ud83d\udd2c",
    "desc": "The microscope opened a hidden world by making microscopic cells and droplets visible.",
    "speechText": "The microscope opened a hidden world by making microscopic cells and droplets visible.",
    "quiz": [
      {
        "q": "What does an optical microscope do to tiny objects?",
        "options": [
          "Magnifies microscopic specimens for human eyes",
          "Turns them into sound",
          "Shrinks them smaller"
        ],
        "correct": 0,
        "exp": "Curved lenses refract light to magnify specimens hundreds of times."
      },
      {
        "q": "Who was the Dutch pioneer who first observed living microbes in water?",
        "options": [
          "Antonie van Leeuwenhoek",
          "Isaac Newton",
          "Thomas Edison"
        ],
        "correct": 0,
        "exp": "Leeuwenhoek made tiny spherical lenses and discovered 'animalcules'."
      },
      {
        "q": "What did Robert Hooke name the tiny honeycomb boxes he saw in cork?",
        "options": [
          "Atoms",
          "Cells",
          "Bricks"
        ],
        "correct": 1,
        "exp": "He thought they resembled monks' monastery rooms called 'cells'."
      },
      {
        "q": "What two optical lens groups are combined in a compound microscope?",
        "options": [
          "Two flat wooden boards",
          "The objective lens and the eyepiece ocular",
          "Two iron mirrors"
        ],
        "correct": 1,
        "exp": "The objective creates a magnified image, which the eyepiece magnifies further."
      },
      {
        "q": "How did the microscope transform medicine and biology?",
        "options": [
          "Made weather warmer",
          "Helped cars drive faster",
          "Revealed bacteria and viruses to defeat infectious diseases"
        ],
        "correct": 2,
        "exp": "It gave birth to microbiology, modern pathology, and lifesaving vaccines."
      }
    ]
  },
  {
    "id": "inv-pottery",
    "item": "Pottery Kiln",
    "date": "6000 BC Mesopotamia & East Asia",
    "icon": "\ud83c\udffa",
    "desc": "Pottery kilns hardened wet clay into waterproof pots to store food and fresh water.",
    "speechText": "Pottery kilns hardened wet clay into waterproof pots to store food and fresh water.",
    "quiz": [
      {
        "q": "What is a pottery kiln?",
        "options": [
          "A boat for sailing",
          "A high-temperature thermal oven for firing ceramics",
          "A musical drum"
        ],
        "correct": 1,
        "exp": "Kilns trap intense heat to bake clay into durable ceramic."
      },
      {
        "q": "What chemical transformation happens to clay in a firing kiln?",
        "options": [
          "It turns into rubber",
          "It dissolves into water",
          "Water evaporates and minerals fuse into solid stone-hard ceramic"
        ],
        "correct": 2,
        "exp": "Silica particles vitrify, turning fragile mud into permanent ceramic."
      },
      {
        "q": "Why was waterproof ceramic pottery essential for settled civilizations?",
        "options": [
          "To make lightbulbs",
          "To build airplane wings",
          "To store grain, olive oil, and drinking water securely"
        ],
        "correct": 2,
        "exp": "Pots protected food reserves from moisture, insects, and rodents."
      },
      {
        "q": "What glassy coat is fired onto pottery to make it shiny and colorful?",
        "options": [
          "Oil paint",
          "Ceramic glaze",
          "Sand"
        ],
        "correct": 1,
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
        "exp": "Stoneware and porcelain require temperatures from 1,200\u00b0C to 1,400\u00b0C."
      }
    ]
  },
  {
    "id": "inv-hourglass",
    "item": "The Hourglass",
    "date": "8th Century Europe",
    "icon": "\u23f3",
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
          "It was made of gold",
          "It pointed north",
          "It kept accurate time despite the rolling rocking waves"
        ],
        "correct": 2,
        "exp": "Water clocks sloshed and pendulums swung irregularly, but sand flowed steadily."
      },
      {
        "q": "How did sailors measure ship speed using a sandglass and knotted rope?",
        "options": [
          "By looking at clouds",
          "By shouting into a horn",
          "By timing knots passing overboard with a half-minute glass"
        ],
        "correct": 2,
        "exp": "This is why ocean speed is still measured in 'knots' today!"
      },
      {
        "q": "What do you do once all sand empties into the lower glass bulb?",
        "options": [
          "Explode it with fireworks",
          "Flip the hourglass upside down to start timing again",
          "Ring a telephone bell"
        ],
        "correct": 1,
        "exp": "Inverting the bulbs begins the time interval anew."
      },
      {
        "q": "What property of the sand was critical for exact timekeeping?",
        "options": [
          "Perfect dryness and uniform rounded grains",
          "Smell of the sand",
          "Color of the sand"
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
    "icon": "\ud83d\ude82",
    "desc": "The steam engine turned boiling water into powerful motion that moved trains and ships.",
    "speechText": "The steam engine turned boiling water into powerful motion that moved trains and ships.",
    "quiz": [
      {
        "q": "What pushes the pistons to generate mechanical power in a steam engine?",
        "options": [
          "Cold river water",
          "High-pressure expanding steam from boiling water",
          "Compressed air only"
        ],
        "correct": 1,
        "exp": "Water boils into steam, expanding over 1,600 times in volume!"
      },
      {
        "q": "What Scottish engineer patented the separate condenser in 1769?",
        "options": [
          "James Watt",
          "Charles Darwin",
          "Alexander Fleming"
        ],
        "correct": 0,
        "exp": "Watt's condenser saved 75% of fuel, making steam universally practical."
      },
      {
        "q": "What fossil fuel was burned to boil water in industrial steam boilers?",
        "options": [
          "Plastic",
          "Solar electricity",
          "Coal"
        ],
        "correct": 2,
        "exp": "Abundant coal powered the boilers of factories, trains, and mills."
      },
      {
        "q": "What world-changing transit machines were powered by steam engines?",
        "options": [
          "Electric bicycles",
          "Steam railway trains and steamships",
          "Space rockets"
        ],
        "correct": 1,
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
    "icon": "\ud83d\ude9c",
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
          "Camels and monkeys",
          "Oxen, horses, and water buffalo",
          "Lions and wolves"
        ],
        "correct": 1,
        "exp": "Yoked oxen provided immense steady pulling force."
      },
      {
        "q": "Why was the plow critical for the emergence of great cities?",
        "options": [
          "It kept weeds from growing forever",
          "It made rain fall",
          "Farmers produced surplus food to support urban populations"
        ],
        "correct": 2,
        "exp": "Food surpluses freed artisans, scholars, and builders to build civilizations."
      },
      {
        "q": "What curved blade on a plowshare rolls over the soil slice?",
        "options": [
          "The wooden rope",
          "The moldboard",
          "The steering wheel"
        ],
        "correct": 1,
        "exp": "The curved moldboard lifts and flips the furrow upside down."
      },
      {
        "q": "Where did some of the earliest ard scratch plows originate?",
        "options": [
          "The Arctic Circle",
          "Greenland",
          "Mesopotamia and the Nile Valley"
        ],
        "correct": 2,
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
    "icon": "\ud83d\udc51",
    "desc": "Welcome travelers to the Ancient History Museum! Follow me to see the Egyptian Golden Mask.",
    "speechText": "Welcome travelers to the ancient history museum! Follow me to see the egyptian golden mask.",
    "quiz": [
      {
        "q": "Whose world-famous royal tomb contained this golden funerary mask?",
        "options": [
          "Alexander the Great",
          "Julius Caesar",
          "Pharaoh Tutankhamun"
        ],
        "correct": 2,
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
          "Clear diamond",
          "Lapis lazuli",
          "Green emerald"
        ],
        "correct": 1,
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
          "Two soaring eagles",
          "The vulture (Nekhbet) and cobra (Wadjet)",
          "Two roaring lions"
        ],
        "correct": 1,
        "exp": "They symbolized divine protection over Upper and Lower Egypt."
      }
    ]
  },
  {
    "id": "tour-triceratops-skeleton",
    "title": "The Triceratops Skeleton",
    "room": "Paleontology Pavilion",
    "icon": "\ud83e\udd96",
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
          "100 years ago",
          "5,000 years ago",
          "Around 66 to 68 million years ago"
        ],
        "correct": 2,
        "exp": "It lived right up until the asteroid impact 66 million years ago."
      },
      {
        "q": "What massive bone plate protected the Triceratops neck?",
        "options": [
          "A spiky tail",
          "A feathered collar",
          "A wide bony frill"
        ],
        "correct": 2,
        "exp": "Its solid bone neck frill could be over 2 meters across!"
      },
      {
        "q": "What did this prehistoric giant eat with its sharp shearing beak?",
        "options": [
          "Fish and clams",
          "Fibrous palm leaves, cycads, and ferns",
          "Other dinosaurs"
        ],
        "correct": 1,
        "exp": "Its scissor-like tooth batteries sliced tough prehistoric vegetation."
      },
      {
        "q": "What apex predator frequently clashed with Triceratops?",
        "options": [
          "Saber-Toothed Cat",
          "Tyrannosaurus Rex",
          "Woolly Mammoth"
        ],
        "correct": 1,
        "exp": "Fossil frills and horns show healed puncture wounds from T-Rex teeth!"
      }
    ]
  },
  {
    "id": "tour-ancient-temples",
    "title": "Ancient Civilization Temples",
    "room": "Monumental Architecture",
    "icon": "\ud83c\udfdb\ufe0f",
    "desc": "Thousands of years ago, ancient civilizations built monumental pyramids and magnificent temples.",
    "speechText": "Thousands of years ago, ancient civilizations built monumental pyramids and magnificent temples.",
    "quiz": [
      {
        "q": "What monumental geometric structures did Egyptians construct at Giza?",
        "options": [
          "Wooden skyscrapers",
          "Deep submarine tunnels",
          "The Great Pyramids"
        ],
        "correct": 2,
        "exp": "The Great Pyramid of Khufu was the tallest human-made structure for 3,800 years."
      },
      {
        "q": "What stones were ancient temples and pyramids primarily carved from?",
        "options": [
          "Paper and cardboard",
          "Massive blocks of limestone and granite",
          "Glass and plastic"
        ],
        "correct": 1,
        "exp": "Multi-ton limestone blocks were quarried and transported on Nile barges."
      },
      {
        "q": "What celestial markers guided the alignment of ancient temple gates?",
        "options": [
          "Sun equinoxes, solstices, and star positions",
          "Random chance",
          "GPS satellites"
        ],
        "correct": 0,
        "exp": "Temples were aligned with mathematical precision to astronomical events."
      },
      {
        "q": "What sacred pictorial script covered temple walls in ancient Egypt?",
        "options": [
          "Morse code",
          "Computer code",
          "Hieroglyphs"
        ],
        "correct": 2,
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
    "icon": "\ud83d\udcdc",
    "desc": "The Rosetta Stone held three ancient languages that unlocked the secrets of Egyptian hieroglyphs.",
    "speechText": "The Rosetta Stone held three ancient languages that unlocked the secrets of Egyptian hieroglyphs.",
    "quiz": [
      {
        "q": "How many scripts are carved into the dark granodiorite Rosetta Stone?",
        "options": [
          "Three (Hieroglyphic, Demotic, and Ancient Greek)",
          "Ten different scripts",
          "Only one script"
        ],
        "correct": 0,
        "exp": "The decree was inscribed in three scripts for priests, officials, and rulers."
      },
      {
        "q": "Why was Ancient Greek on the stone the key to unlocking hieroglyphs?",
        "options": [
          "It was written in gold",
          "It was a modern language",
          "Scholars knew Greek and could translate the unknown hieroglyphs"
        ],
        "correct": 2,
        "exp": "Scholars compared Greek royal names with the Egyptian cartouches."
      },
      {
        "q": "What French linguist deciphered the hieroglyphic script in 1822?",
        "options": [
          "Jean-Fran\u00e7ois Champollion",
          "Napoleon Bonaparte",
          "Leonardo da Vinci"
        ],
        "correct": 0,
        "exp": "Champollion decoded phonetics in cartouches of Ptolemy and Cleopatra."
      },
      {
        "q": "Where in Egypt was the stone discovered in 1799?",
        "options": [
          "Underwater in the Red Sea",
          "Near the port city of Rashid (Rosetta)",
          "Inside the Great Pyramid"
        ],
        "correct": 1,
        "exp": "French soldiers discovered it embedded in a fort wall in Rashid."
      },
      {
        "q": "In which world-famous London museum can you see the Rosetta Stone?",
        "options": [
          "The Louvre",
          "The British Museum",
          "The Metropolitan Museum"
        ],
        "correct": 1,
        "exp": "It has been displayed in the British Museum since 1802."
      }
    ]
  },
  {
    "id": "tour-parthenon",
    "title": "Parthenon Sculptures",
    "room": "Classical Greece Gallery",
    "icon": "\ud83c\udfdb\ufe0f",
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
          "Aphrodite",
          "Hera",
          "Athena, goddess of wisdom and battle"
        ],
        "correct": 2,
        "exp": "A colossal 12-meter chryselephantine statue of Athena stood inside."
      },
      {
        "q": "What fine white stone was used to sculpt the Parthenon friezes?",
        "options": [
          "Carved oak wood",
          "Soft sandstone",
          "Pentelic marble"
        ],
        "correct": 2,
        "exp": "Pentelic marble has fine grains that gleam golden in Athenian sunlight."
      },
      {
        "q": "What legendary master sculptor directed the Parthenon's art program?",
        "options": [
          "Michelangelo",
          "Phidias",
          "Socrates"
        ],
        "correct": 1,
        "exp": "Phidias designed the pediments, metopes, and friezes around 440 BC."
      },
      {
        "q": "Were classical Greek marble statues originally plain white or painted?",
        "options": [
          "Always plain white",
          "Painted in vivid reds, blues, and gold",
          "Covered in mud"
        ],
        "correct": 1,
        "exp": "Chemical analysis reveals bright polychrome paint covered the marbles!"
      }
    ]
  },
  {
    "id": "tour-terracotta",
    "title": "The Terracotta Army",
    "room": "Imperial China Gallery",
    "icon": "\ud83d\uddff",
    "desc": "Thousands of life-sized clay soldiers stood underground guarding the tomb of the first Chinese emperor.",
    "speechText": "Thousands of life-sized clay soldiers stood underground guarding the tomb of the first Chinese emperor.",
    "quiz": [
      {
        "q": "Whose imperial mausoleum does the underground Terracotta Army guard?",
        "options": [
          "Marco Polo",
          "Confucius",
          "Qin Shi Huang, First Emperor of China"
        ],
        "correct": 2,
        "exp": "Emperor Qin unified China in 221 BC and built this vast funerary army."
      },
      {
        "q": "What material were these thousands of life-sized warriors sculpted from?",
        "options": [
          "Melted bronze",
          "Carved ice",
          "Terracotta baked clay"
        ],
        "correct": 2,
        "exp": "Craftsmen molded, assembled, and kiln-fired yellow clay figures."
      },
      {
        "q": "What makes every individual terracotta soldier astonishing to view?",
        "options": [
          "Each warrior has unique facial features, hair, and uniforms",
          "They are made of plastic",
          "They are all identical"
        ],
        "correct": 0,
        "exp": "Sculptors custom-carved individual faces, ears, and military ranks."
      },
      {
        "q": "Who discovered the underground pits near Xi'an in 1974?",
        "options": [
          "Tourists on a bus",
          "Local farmers digging a water well",
          "Submarine explorers"
        ],
        "correct": 1,
        "exp": "Farmers struck clay fragments while digging a well during a drought."
      },
      {
        "q": "What other military figures stand in the underground pits?",
        "options": [
          "Cavalry horses, war chariots, and generals",
          "Toy airplanes",
          "Dinosaur skeletons"
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
    "icon": "\ud83c\udfdf\ufe0f",
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
          "Only 100 people",
          "Two million people",
          "Over 50,000 spectators"
        ],
        "correct": 2,
        "exp": "It had 80 arched entrances to rapidly seat up to 65,000 Romans."
      },
      {
        "q": "What public events were held on the sand-covered arena floor?",
        "options": [
          "Gladiatorial contests, animal hunts, and dramas",
          "Modern soccer games",
          "Quiet library reading"
        ],
        "correct": 0,
        "exp": "'Arena' is Latin for sand, which absorbed spilled blood during games."
      },
      {
        "q": "What was the multi-level underground labyrinth beneath the floor called?",
        "options": [
          "The catacombs",
          "The hypogeum with trapdoors and elevators",
          "The pantry"
        ],
        "correct": 1,
        "exp": "Pulleys and elevators hoisted gladiators and wild animals onto the stage."
      },
      {
        "q": "What revolutionary building material made its massive walls possible?",
        "options": [
          "Straw and mud only",
          "Roman concrete (pozzolana) and travertine",
          "Pure glass"
        ],
        "correct": 1,
        "exp": "Roman volcanic ash concrete set underwater and lasted for millennia."
      }
    ]
  },
  {
    "id": "tour-aztec-sun",
    "title": "The Aztec Sun Stone",
    "room": "Mesoamerican Treasury",
    "icon": "\u2600\ufe0f",
    "desc": "The Aztec Sun Stone is a giant carved calendar recording the eras and movements of the sun.",
    "speechText": "The Aztec Sun Stone is a giant carved calendar recording the eras and movements of the sun.",
    "quiz": [
      {
        "q": "What Mesoamerican civilization carved the colossal basalt Sun Stone?",
        "options": [
          "The Romans",
          "The Aztec (Mexica) Empire",
          "The Vikings"
        ],
        "correct": 1,
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
          "The four seasons of winter",
          "The four past solar eras (Four Suns)",
          "Four royal banquets"
        ],
        "correct": 1,
        "exp": "In Aztec mythology, the world passed through four previous creation cycles."
      },
      {
        "q": "How much does this monolithic volcanic basalt disk weigh?",
        "options": [
          "About 5 pounds",
          "Less than a bicycle",
          "About 24 metric tons"
        ],
        "correct": 2,
        "exp": "It measures 3.6 meters in diameter and weighs over 24 tonnes!"
      },
      {
        "q": "In which city's central square was the stone rediscovered in 1790?",
        "options": [
          "Havana, Cuba",
          "Lima, Peru",
          "Mexico City (the Z\u00f3calo)"
        ],
        "correct": 2,
        "exp": "Workers excavating the Plaza Mayor unearthed the buried monolith."
      }
    ]
  },
  {
    "id": "tour-cuneiform",
    "title": "The Cuneiform Tablet",
    "room": "Mesopotamia & The Dawn of Writing",
    "icon": "\ud83d\udcdc",
    "desc": "These ancient clay tablets show cuneiform writing, one of the earliest writing systems in human history.",
    "speechText": "These ancient clay tablets show cuneiform writing, one of the earliest writing systems in human history.",
    "quiz": [
      {
        "q": "What tool did Mesopotamian scribes press into damp clay?",
        "options": [
          "A wedge-tipped reed stylus",
          "A paintbrush",
          "A metal hammer"
        ],
        "correct": 0,
        "exp": "The cut reed pressed triangular impressions into soft alluvial clay."
      },
      {
        "q": "What does the Latin root 'cuneus' mean in 'cuneiform'?",
        "options": [
          "Wave",
          "Wedge",
          "Circle"
        ],
        "correct": 1,
        "exp": "'Cuneus' means wedge; cuneiform means 'wedge-shaped writing'."
      },
      {
        "q": "What ancient civilization first created cuneiform around 3200 BC?",
        "options": [
          "The Mayans",
          "The Vikings",
          "The Sumerians of Mesopotamia"
        ],
        "correct": 2,
        "exp": "Sumerians in southern Iraq invented writing for commerce and laws."
      },
      {
        "q": "What world-famous ancient epic poem was recorded on cuneiform tablets?",
        "options": [
          "The Epic of Gilgamesh",
          "The Odyssey",
          "Romeo and Juliet"
        ],
        "correct": 0,
        "exp": "The tale of King Gilgamesh and Enkidu is humanity's oldest epic."
      },
      {
        "q": "Why did clay tablets endure for thousands of years in the desert?",
        "options": [
          "They melted in liquid",
          "They dissolved into smoke",
          "Baking in kiln fires turned clay into durable stone-like ceramic"
        ],
        "correct": 2,
        "exp": "Baked clay resists water, rot, and insects unlike paper and papyrus."
      }
    ]
  },
  {
    "id": "tour-knight-armor",
    "title": "Medieval Knight Armor",
    "room": "Medieval Arms & Armor",
    "icon": "\ud83d\udee1\ufe0f",
    "desc": "This polished steel suit of armor protected medieval knights in tournaments and battles.",
    "speechText": "This polished steel suit of armor protected medieval knights in tournaments and battles.",
    "quiz": [
      {
        "q": "What metal was hammered by armories to create full plate armor?",
        "options": [
          "Hardened steel and wrought iron",
          "Soft tin",
          "Gold and silver"
        ],
        "correct": 0,
        "exp": "Master armorers hammered curved steel plates to deflect sword strikes."
      },
      {
        "q": "What interlocking mesh of metal rings was worn under plate joints?",
        "options": [
          "Chainmail (maille)",
          "Heavy wool sweaters",
          "Leather strap only"
        ],
        "correct": 0,
        "exp": "Chainmail protected exposed armpits, elbows, and groins."
      },
      {
        "q": "What hinged part of a knight's helmet opened for vision and fresh air?",
        "options": [
          "The chin strap",
          "The visor",
          "The plume feather"
        ],
        "correct": 1,
        "exp": "The visor could be raised between clashes and lowered in combat."
      },
      {
        "q": "Could a knight move agilely and mount a horse in full plate armor?",
        "options": [
          "No, they fell over immediately",
          "No, they could not move an inch",
          "Yes, articulated joints allowed full running and agility"
        ],
        "correct": 2,
        "exp": "Evenly distributed across the body, a 25kg suit allowed full mobility."
      },
      {
        "q": "What colorful heraldic designs on shields identified knights on the battlefield?",
        "options": [
          "National flags with stars",
          "Coats of arms and crests",
          "Barcodes"
        ],
        "correct": 1,
        "exp": "Heraldry displayed family lions, eagles, and colors to distinguish allies."
      }
    ]
  },
  {
    "id": "tour-viking-longship",
    "title": "Viking Dragon Longship",
    "room": "Norse Seafarers Gallery",
    "icon": "\u26f5",
    "desc": "Viking longships had carved wooden dragon heads and square sails to cross stormy northern seas.",
    "speechText": "Viking longships had carved wooden dragon heads and square sails to cross stormy northern seas.",
    "quiz": [
      {
        "q": "What fierce wooden carving often decorated the bow of a Viking warship?",
        "options": [
          "A golden crown",
          "A sleeping cat",
          "A carved dragon or serpent head"
        ],
        "correct": 2,
        "exp": "Dragon heads struck fear into foes and protected against sea spirits."
      },
      {
        "q": "What kind of sail powered Viking longships across northern seas?",
        "options": [
          "Three triangular sails",
          "A large square woolen sail",
          "An electric motor"
        ],
        "correct": 1,
        "exp": "Woven wool sails treated with animal fat caught strong ocean gales."
      },
      {
        "q": "What shipbuilding technique used overlapping oak planks for the hull?",
        "options": [
          "Steel welding",
          "Clinker (lapstrake) hull construction",
          "Flat cement pouring"
        ],
        "correct": 1,
        "exp": "Clinker planks flexed with ocean waves, keeping the ship seaworthy."
      },
      {
        "q": "Could Viking longships travel up shallow rivers as well as open ocean?",
        "options": [
          "No, they sank in rivers",
          "No, only in deep oceans",
          "Yes, their shallow draft allowed river raids and beaching"
        ],
        "correct": 2,
        "exp": "Drawing only 1 meter of water, longships sailed directly onto beaches!"
      },
      {
        "q": "What Norse explorer sailed to North America 500 years before Columbus?",
        "options": [
          "Leif Erikson",
          "Ferdinand Magellan",
          "Christopher Columbus"
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
    "icon": "\ud83c\udfad",
    "desc": "This royal Maya mask was made of precious green jade to honor kings in sacred ceremonies.",
    "speechText": "This royal Maya mask was made of precious green jade to honor kings in sacred ceremonies.",
    "quiz": [
      {
        "q": "What precious green gemstone did Maya artisans carve for funerary masks?",
        "options": [
          "Turquoise",
          "Clear quartz",
          "Jadeite (jade)"
        ],
        "correct": 2,
        "exp": "Jade was the most valuable material in the ancient Maya world."
      },
      {
        "q": "Why was green jade considered so sacred in Maya beliefs?",
        "options": [
          "It symbolized life, breath, sacred water, and maize sprouts",
          "It glowed red in dark rooms",
          "It was the softest stone"
        ],
        "correct": 0,
        "exp": "Its vibrant green mirrored young corn shoots and eternal renewal."
      },
      {
        "q": "What celebrated Maya king of Palenque wore a legendary jade mosaic mask?",
        "options": [
          "Atahualpa",
          "Montezuma",
          "K'inich Janaab' Pakal (Pakal the Great)"
        ],
        "correct": 2,
        "exp": "Pakal ruled Palenque for 68 years and was entombed inside the Temple of Inscriptions."
      },
      {
        "q": "How were hundreds of polished jade tesserae fitted together on the mask?",
        "options": [
          "Carved from one giant rock",
          "As a mosaic over a stucco core",
          "Poured as hot liquid glass"
        ],
        "correct": 1,
        "exp": "Over 200 carved jade pieces formed a lifelike mosaic portrait."
      },
      {
        "q": "What iridescent shell material was inlaid to create the eyes of the royal mask?",
        "options": [
          "Mother-of-pearl shell and obsidian pupils",
          "Blue paint only",
          "Plastic beads"
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
    "icon": "\ud83e\udd81",
    "desc": "The Ishtar Gate welcomed visitors to Babylon with brilliant blue tiles and golden lions.",
    "speechText": "The Ishtar Gate welcomed visitors to Babylon with brilliant blue tiles and golden lions.",
    "quiz": [
      {
        "q": "What ancient imperial Mesopotamian metropolis did the Ishtar Gate guard?",
        "options": [
          "Babylon",
          "Ur",
          "Nineveh"
        ],
        "correct": 0,
        "exp": "The gate was the eighth inner gate to the city of Babylon."
      },
      {
        "q": "What color glazed bricks made the towering walls glow under the sun?",
        "options": [
          "Bright purple",
          "Vibrant lapis-lazuli blue",
          "Pitch black"
        ],
        "correct": 1,
        "exp": "Cobalt glazes produced a brilliant blue sheen across the brick facade."
      },
      {
        "q": "What magnificent creatures were sculpted in relief along the walls?",
        "options": [
          "Golden lions, young bulls, and dragons (mu\u0161\u1e2bu\u0161\u0161u)",
          "Penguins and seals",
          "Elephants and giraffes"
        ],
        "correct": 0,
        "exp": "Lions honored Ishtar, bulls Adad, and horned dragons Marduk."
      },
      {
        "q": "Which famous Babylonian king built the grand gate around 575 BC?",
        "options": [
          "Hammurabi",
          "Nebuchadnezzar II",
          "Alexander the Great"
        ],
        "correct": 1,
        "exp": "Nebuchadnezzar II also commissioned the legendary Hanging Gardens."
      },
      {
        "q": "What Mesopotamian goddess was this ceremonial gate dedicated to?",
        "options": [
          "Hera",
          "Venus",
          "Ishtar, goddess of love, beauty, and war"
        ],
        "correct": 2,
        "exp": "Processions entered Babylon through the gate along the Processional Way."
      }
    ]
  },
  {
    "id": "tour-sarcophagus",
    "title": "Painted Egyptian Sarcophagus",
    "room": "Tomb of the Pharaohs",
    "icon": "\u26b0\ufe0f",
    "desc": "This painted Egyptian sarcophagus protected the mummified pharaoh with protective hieroglyphic spells.",
    "speechText": "This painted Egyptian sarcophagus protected the mummified pharaoh with protective hieroglyphic spells.",
    "quiz": [
      {
        "q": "What was the spiritual purpose of an Egyptian sarcophagus?",
        "options": [
          "To store grain harvests",
          "To protect the royal mummy and guide the soul in the afterlife",
          "To sail across the Nile"
        ],
        "correct": 1,
        "exp": "It served as a physical home and protective fortress for the eternal spirit (Ka)."
      },
      {
        "q": "What texts and magical spells were inscribed on its painted panels?",
        "options": [
          "Tax ledgers",
          "Spells from the Book of the Dead",
          "Cooking recipes"
        ],
        "correct": 1,
        "exp": "Spells protected the deceased against perilous afterlife monsters."
      },
      {
        "q": "What winged goddess often stretched her wings across the chest to offer protection?",
        "options": [
          "Cleopatra",
          "Medusa",
          "Isis or Nut"
        ],
        "correct": 2,
        "exp": "Goddess Isis or sky goddess Nut wrapped their wings in divine embrace."
      },
      {
        "q": "What fine wood imported from Lebanon was prized for royal coffins?",
        "options": [
          "Soft pine",
          "Cardboard",
          "Cedar of Lebanon"
        ],
        "correct": 2,
        "exp": "Resinous cedar wood resisted rot, moisture, and desert termites."
      },
      {
        "q": "What sacred eye symbol painted on the side allowed the mummy to view the sun?",
        "options": [
          "The Eye of Horus (Wedjat)",
          "The Solar Compass",
          "The All-Seeing Triangle"
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
    "icon": "\ud83c\udfa8",
    "desc": "Welcome to the Renaissance gallery, where masters like Leonardo painted with light and perspective.",
    "speechText": "Welcome to the Renaissance gallery, where masters like Leonardo painted with light and perspective.",
    "quiz": [
      {
        "q": "What does the word 'Renaissance' mean in European history?",
        "options": [
          "End of the world",
          "Quiet evening",
          "Rebirth of classical art, learning, and culture"
        ],
        "correct": 2,
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
          "Venice only",
          "Florence (Firenze)",
          "Naples"
        ],
        "correct": 1,
        "exp": "Patronage from the Medici family fostered artists in Florence."
      },
      {
        "q": "What medium made from pigments and linseed oil allowed subtle soft blending?",
        "options": [
          "Charcoal on bark",
          "Watercolors on sand",
          "Oil paint on canvas"
        ],
        "correct": 2,
        "exp": "Oil paint dried slowly, allowing Leonardo's famous 'sfumato' blending."
      }
    ]
  },
  {
    "id": "tour-ming-porcelain",
    "title": "Ming Dynasty Porcelain",
    "room": "Imperial China Ceramic Arts",
    "icon": "\ud83c\udffa",
    "desc": "These Ming dynasty vases were painted with fine cobalt blue and traded across the globe.",
    "speechText": "These Ming dynasty vases were painted with fine cobalt blue and traded across the globe.",
    "quiz": [
      {
        "q": "What distinctive two colors define famous Ming imperial porcelain?",
        "options": [
          "Cobalt blue on pure white porcelain",
          "Black on yellow",
          "Green on orange"
        ],
        "correct": 0,
        "exp": "Cobalt blue brushwork beneath a clear glaze on white kaolin clay."
      },
      {
        "q": "What mineral pigment created the brilliant blue brushwork under the glaze?",
        "options": [
          "Crushed emerald",
          "Cobalt oxide",
          "Liquid indigo ink"
        ],
        "correct": 1,
        "exp": "Finely ground cobalt was imported along ancient trade routes from Persia."
      },
      {
        "q": "What Chinese city was the world-famous imperial porcelain capital?",
        "options": [
          "Jingdezhen",
          "Hong Kong",
          "Beijing"
        ],
        "correct": 0,
        "exp": "Jingdezhen's kilns supplied the Forbidden City and royal courts worldwide."
      },
      {
        "q": "What imperial creature symbolizing the Emperor often wound around Ming jars?",
        "options": [
          "Giant sea turtles",
          "Flying horses with wings",
          "Five-clawed dragons swirling among clouds"
        ],
        "correct": 2,
        "exp": "Only the Chinese Emperor had the right to five-clawed dragon porcelain!"
      },
      {
        "q": "Why were Ming vases prized like treasure across Europe and Asia?",
        "options": [
          "Because they could float",
          "For their translucent beauty, hardness, and ringing tone",
          "Because they were unbreakable"
        ],
        "correct": 1,
        "exp": "European kings built entire 'porcelain cabinets' to showcase their collections."
      }
    ]
  },
  {
    "id": "tour-cyrus-cylinder",
    "title": "The Cyrus Cylinder",
    "room": "Ancient Persian Empire",
    "icon": "\ud83d\udcdc",
    "desc": "The Cyrus Cylinder is a famous Persian inscription promoting peace, tolerance, and freedom.",
    "speechText": "The Cyrus Cylinder is a famous Persian inscription promoting peace, tolerance, and freedom.",
    "quiz": [
      {
        "q": "What Persian ruler ordered the royal decree on this clay cylinder in 539 BC?",
        "options": [
          "Xerxes",
          "Darius III",
          "Cyrus the Great (Cyrus II)"
        ],
        "correct": 2,
        "exp": "Cyrus the Great founded the Achaemenid Persian Empire."
      },
      {
        "q": "What humanitarian deed did Cyrus decree upon capturing Babylon?",
        "options": [
          "Building a giant wall",
          "Closing all city gates",
          "Freeing displaced peoples and restoring their sacred temples"
        ],
        "correct": 2,
        "exp": "He allowed captive peoples, including the Jewish exiles, to return home."
      },
      {
        "q": "What ancient script was pressed into the baked clay cylinder?",
        "options": [
          "Babylonian cuneiform script",
          "Arabic calligraphy",
          "Latin letters"
        ],
        "correct": 0,
        "exp": "Scribes pressed 45 lines of Akkadian cuneiform into the clay."
      },
      {
        "q": "What modern landmark declaration does the Cyrus Cylinder foreshadow?",
        "options": [
          "The World Bank Accord",
          "The Universal Declaration of Human Rights",
          "The Olympic Charter"
        ],
        "correct": 1,
        "exp": "A replica is displayed at the United Nations headquarters in New York."
      },
      {
        "q": "What geometric shape makes this inscription distinct among royal stelae?",
        "options": [
          "A flat square brick",
          "A barrel-shaped curved clay cylinder",
          "A hollow round sphere"
        ],
        "correct": 1,
        "exp": "It was designed as a foundation deposit buried under city walls."
      }
    ]
  },
  {
    "id": "tour-cave-art",
    "title": "Prehistoric Cave Art",
    "room": "Paleolithic Origins",
    "icon": "\ud83d\udd90\ufe0f",
    "desc": "Early humans made these painted hand stencils on cave walls forty thousand years ago.",
    "speechText": "Early humans made these painted hand stencils on cave walls forty thousand years ago.",
    "quiz": [
      {
        "q": "How many years ago did Ice Age humans paint these cave hand stencils?",
        "options": [
          "Over 30,000 to 40,000 years ago",
          "100 years ago",
          "500 years ago"
        ],
        "correct": 0,
        "exp": "Cave art in Spain, France, and Indonesia dates back over 40,000 years."
      },
      {
        "q": "How did Paleolithic artists create the distinctive negative hand stencils?",
        "options": [
          "Carving with scissors",
          "Using rubber stamps",
          "By blowing powdered pigment over a hand pressed to stone"
        ],
        "correct": 2,
        "exp": "They blew liquid ochre through hollow bird bones or straight from the mouth!"
      },
      {
        "q": "What natural earth minerals provided vibrant red and black colors?",
        "options": [
          "Crushed glass",
          "Red ochre iron oxide and black charcoal",
          "Chemical acrylic paints"
        ],
        "correct": 1,
        "exp": "Natural ochre, hematite, and manganese provided rich mineral pigments."
      },
      {
        "q": "What majestic Ice Age beasts are painted across caves like Lascaux and Altamira?",
        "options": [
          "Dolphins and whales",
          "Lions and giraffes only",
          "Bison, horses, mammoths, and deer"
        ],
        "correct": 2,
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
    "icon": "\ud83d\udd25",
    "desc": "This bronze vessel carried the sacred flame during the ancient athletic games in Olympia.",
    "speechText": "This bronze vessel carried the sacred flame during the ancient athletic games in Olympia.",
    "quiz": [
      {
        "q": "In which ancient Greek sanctuary were the Olympic games celebrated?",
        "options": [
          "Sparta",
          "Olympia in the Peloponnese",
          "Corinth"
        ],
        "correct": 1,
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
          "The Spartan Treaty",
          "The Athenian Pact",
          "The Olympic Truce (Ekecheiria)"
        ],
        "correct": 2,
        "exp": "Heralds proclaimed the truce so athletes and spectators could travel safely."
      },
      {
        "q": "How often were the ancient Olympic games celebrated?",
        "options": [
          "Every month",
          "Every four years (an Olympiad)",
          "Every ten years"
        ],
        "correct": 1,
        "exp": "The four-year interval was called an 'Olympiad', used to count historical years."
      }
    ]
  },
  {
    "id": "tour-silk-road",
    "title": "The Silk Road Caravan",
    "room": "Global Trade Routes",
    "icon": "\ud83d\udc2a",
    "desc": "The Silk Road was an immense trade route connecting Asia and Europe with spices and silk.",
    "speechText": "The Silk Road was an immense trade route connecting Asia and Europe with spices and silk.",
    "quiz": [
      {
        "q": "What continents were linked by the historic overland and maritime Silk Road?",
        "options": [
          "North and South America",
          "Australia and Antarctica",
          "Asia and Europe (and North Africa)"
        ],
        "correct": 2,
        "exp": "It stretched over 6,400 kilometers from Chang'an (China) to Rome and Venice."
      },
      {
        "q": "What luxurious lightweight Chinese fabric gave this trade network its name?",
        "options": [
          "Wool sweaters",
          "Lustrous mulberry silk",
          "Cotton denim"
        ],
        "correct": 1,
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
          "Only desert sand",
          "Nothing else",
          "Scientific ideas, inventions, philosophy, and art"
        ],
        "correct": 2,
        "exp": "Papermaking, printing, compasses, mathematics, and religions spread globally."
      },
      {
        "q": "What Venetian traveler wrote a famous travelogue of his Silk Road journey to China?",
        "options": [
          "Ferdinand Magellan",
          "Marco Polo",
          "Christopher Columbus"
        ],
        "correct": 1,
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
    window.unit11Engine = this;
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

  toggleCardQuiz(categoryKey, cardIdx) {
    const prefix = categoryKey === 'museum' ? 'tour' : (categoryKey === 'invention' ? 'inv' : 'fossil');
    const quizContainer = document.getElementById(`${prefix}-quiz-${cardIdx}`);
    const btn = document.getElementById(`${prefix}-quiz-btn-${cardIdx}`);
    if (!quizContainer) return;

    const isHidden = (quizContainer.style.display === 'none' || !quizContainer.style.display);
    if (isHidden) {
      quizContainer.style.display = 'flex';
      if (btn) {
        btn.classList.add('active');
        btn.innerHTML = '<span>✖ Close Quiz</span>';
      }
    } else {
      quizContainer.style.display = 'none';
      if (btn) {
        btn.classList.remove('active');
        btn.innerHTML = '<span>🧩 Quiz (5 Qs)</span>';
      }
    }
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
            <div style="display:flex;gap:8px;justify-content:center;margin-top:6px;flex-wrap:wrap;">
              <button type="button" class="card-quiz-retry-btn" aria-label="Replay quiz">🔄 Replay Quiz</button>
              <button type="button" class="card-quiz-close-btn" aria-label="Close quiz">✔ Close</button>
            </div>
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
        const closeBtn = containerEl.querySelector('.card-quiz-close-btn');
        if (closeBtn) {
          closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleCardQuiz(categoryKey, cardIdx);
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
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="card-quiz-dots">${dotsHtml}</div>
            <button type="button" class="card-quiz-close-x" aria-label="Close quiz">✕</button>
          </div>
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

      const closeX = containerEl.querySelector('.card-quiz-close-x');
      if (closeX) {
        closeX.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleCardQuiz(categoryKey, cardIdx);
        });
      }

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
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <button type="button" class="kids-audio-play-btn fossil-audio-btn" data-text="${f.speechText}" aria-label="Listen to ${f.name} fact">
              🔊 Hear Dinosaur Fact
            </button>
            <button type="button" class="kids-quiz-trigger-btn" id="fossil-quiz-btn-${i}" onclick="window.unit11Engine.toggleCardQuiz('fossil', ${i})" aria-label="Open quiz for ${f.name}">
              <span>🧩 Quiz (5 Qs)</span>
            </button>
          </div>
          <span style="font-size:0.75rem; color:#64748b; font-weight:700;">+20 ⭐</span>
        </div>
        <div class="card-quiz-wrapper" id="fossil-quiz-${i}" style="display:none;"></div>
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
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <button type="button" class="kids-audio-play-btn inv-audio-btn" data-text="${inv.speechText}" aria-label="Listen to ${inv.item} discovery story">
              🔊 Hear Discovery Story
            </button>
            <button type="button" class="kids-quiz-trigger-btn" id="inv-quiz-btn-${i}" onclick="window.unit11Engine.toggleCardQuiz('invention', ${i})" aria-label="Open quiz for ${inv.item}">
              <span>🧩 Quiz (5 Qs)</span>
            </button>
          </div>
          <span style="font-size:0.75rem; color:#64748b; font-weight:700;">+20 ⭐</span>
        </div>
        <div class="card-quiz-wrapper" id="inv-quiz-${i}" style="display:none;"></div>
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
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <button type="button" class="kids-audio-play-btn tour-audio-btn" data-text="${ex.speechText}" aria-label="Listen to ${ex.title} docent narration">
              🔊 Hear Tour Narration
            </button>
            <button type="button" class="kids-quiz-trigger-btn" id="tour-quiz-btn-${i}" onclick="window.unit11Engine.toggleCardQuiz('museum', ${i})" aria-label="Open quiz for ${ex.title}">
              <span>🧩 Quiz (5 Qs)</span>
            </button>
          </div>
          <span style="font-size:0.75rem; color:#64748b; font-weight:700;">+30 ⭐</span>
        </div>
        <div class="card-quiz-wrapper" id="tour-quiz-${i}" style="display:none;"></div>
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
