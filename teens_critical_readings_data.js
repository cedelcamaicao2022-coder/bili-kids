/**
 * Bilikids Teens Academy - Critical Reading Master Database
 * Comprehensive CEFR Reading Passages (21 Passages per Level = 84 Total)
 * Levels: A1, A2, B1, B2
 * Each passage includes:
 * - Authentic, level-appropriate passage (A1 to B2)
 * - 4 multiple choice questions with A, B, C, D options
 * - In-depth pedagogical feedback for correct and incorrect answers
 */

const TEENS_CRITICAL_READINGS = {
  "a1": [
    {
      "id": "a1_p1",
      "number": 1,
      "title": "Reading 1: The New Robotics Club",
      "badge": "School Notice • A1",
      "instruction": "Read the school noticeboard announcement and answer the 4 questions.",
      "passage": "Welcome to the Bilikids Robotics Club! We meet every Wednesday at 3:30 PM in Science Lab 2. Our club is open to all students aged 11 to 14. You do not need any experience with programming or electronics. In our weekly sessions, we build small solar-powered cars, learn basic coding blocks on tablets, and design mini-robots with LEGO bricks. Please bring your student ID card and a notebook. If you have questions, email Mr. Harrison at harrison@bilikids.org or visit Room 14 during morning recess.",
      "questions": [
        {
          "q": "1. On what day does the Robotics Club meet?",
          "options": [
            "Every Monday",
            "Every Wednesday",
            "Every Friday",
            "Every weekend"
          ],
          "correct": 1,
          "explanation": "The text states: 'We meet every Wednesday at 3:30 PM'."
        },
        {
          "q": "2. Who can join the Robotics Club?",
          "options": [
            "Only students with coding experience",
            "Only 10-year-old students",
            "All students aged 11 to 14",
            "Only science teachers"
          ],
          "correct": 2,
          "explanation": "The passage clarifies: 'Our club is open to all students aged 11 to 14'."
        },
        {
          "q": "3. What do students build during the sessions?",
          "options": [
            "Solar-powered cars and mini-robots",
            "Full-sized computers",
            "Flying airplanes",
            "Mobile phones"
          ],
          "correct": 0,
          "explanation": "The announcement mentions building small solar-powered cars and mini-robots."
        },
        {
          "q": "4. What must students bring to the club?",
          "options": [
            "A solar battery",
            "Their own laptop",
            "A student ID card and a notebook",
            "Safety goggles and tools"
          ],
          "correct": 2,
          "explanation": "The text says: 'Please bring your student ID card and a notebook'."
        }
      ]
    },
    {
      "id": "a1_p2",
      "number": 2,
      "title": "Reading 2: The School Cafeteria Menu",
      "badge": "Daily Routine • A1",
      "instruction": "Read the notice about cafeteria lunches and answer the 4 questions.",
      "passage": "The school cafeteria is open from Monday to Friday between 12:00 PM and 1:30 PM. Every day, students can choose between two hot meals: grilled chicken with rice or vegetarian pasta with tomato sauce. Each lunch includes a fresh green salad, a slice of whole-wheat bread, and a glass of cold water or milk. On Thursdays, students receive a complimentary fruit salad with apples and bananas. Remember to return your empty tray to the cleaning window before leaving.",
      "questions": [
        {
          "q": "1. What time does lunch start in the cafeteria?",
          "options": [
            "At 11:30 AM",
            "At 12:00 PM",
            "At 1:30 PM",
            "At 2:00 PM"
          ],
          "correct": 1,
          "explanation": "The text clearly states the cafeteria is open from 12:00 PM to 1:30 PM."
        },
        {
          "q": "2. Which two hot meals are available every day?",
          "options": [
            "Fish and soup",
            "Pizza and burgers",
            "Grilled chicken or vegetarian pasta",
            "Hot dogs and tacos"
          ],
          "correct": 2,
          "explanation": "The passage mentions: 'grilled chicken with rice or vegetarian pasta'."
        },
        {
          "q": "3. What special item do students get on Thursdays?",
          "options": [
            "Chocolate cake",
            "Fruit salad with apples and bananas",
            "Ice cream",
            "Orange juice"
          ],
          "correct": 1,
          "explanation": "The text notes: 'On Thursdays, students receive a complimentary fruit salad with apples and bananas'."
        },
        {
          "q": "4. What must students do before leaving?",
          "options": [
            "Pay the chef in cash",
            "Wash the dishes with soap",
            "Return their empty tray to the cleaning window",
            "Clean the floor"
          ],
          "correct": 2,
          "explanation": "Students are reminded to 'return your empty tray to the cleaning window'."
        }
      ]
    },
    {
      "id": "a1_p3",
      "number": 3,
      "title": "Reading 3: Lucas and His Skateboard",
      "badge": "Hobbies • A1",
      "instruction": "Read about Lucas's hobby and answer the 4 questions.",
      "passage": "Lucas is twelve years old and lives near Oakwood Park. Every Saturday afternoon, he grabs his blue skateboard and rides to the skatepark with his older brother, David. Lucas always wears a black helmet, elbow pads, and knee protectors because safety is very important. He is currently practicing a new trick called the kickflip. When he gets tired, he buys a bottle of cold lemonade from the kiosk and chats with other skaters.",
      "questions": [
        {
          "q": "1. How old is Lucas?",
          "options": [
            "Ten years old",
            "Twelve years old",
            "Fourteen years old",
            "Sixteen years old"
          ],
          "correct": 1,
          "explanation": "The text begins: 'Lucas is twelve years old'."
        },
        {
          "q": "2. Who goes to the skatepark with Lucas?",
          "options": [
            "His father",
            "His school teacher",
            "His older brother, David",
            "His best friend, Sam"
          ],
          "correct": 2,
          "explanation": "The passage notes he rides 'with his older brother, David'."
        },
        {
          "q": "3. What safety gear does Lucas wear?",
          "options": [
            "Only sunglasses",
            "A helmet, elbow pads, and knee protectors",
            "Heavy winter boots",
            "No safety gear"
          ],
          "correct": 1,
          "explanation": "The text states he 'always wears a black helmet, elbow pads, and knee protectors'."
        },
        {
          "q": "4. What trick is Lucas currently practicing?",
          "options": [
            "The backflip",
            "The kickflip",
            "The spin jump",
            "The slide stop"
          ],
          "correct": 1,
          "explanation": "The passage mentions he is practicing a new trick called the kickflip."
        }
      ]
    },
    {
      "id": "a1_p4",
      "number": 4,
      "title": "Reading 4: The City Library Rules",
      "badge": "Community • A1",
      "instruction": "Read the rules of the city library and answer the 4 questions.",
      "passage": "The Central City Library is a quiet place where everyone can study and enjoy books. Visitors must turn off their phone ringers and keep conversations at a whisper. You can borrow up to five books for three weeks with your student library card. Eating hot food inside the reading hall is not allowed, but you may drink water from a sealed bottle. If you return a book late, you must pay a fee of 50 cents per day.",
      "questions": [
        {
          "q": "1. How many books can a student borrow at one time?",
          "options": [
            "Two books",
            "Three books",
            "Up to five books",
            "Ten books"
          ],
          "correct": 2,
          "explanation": "The text states: 'You can borrow up to five books'."
        },
        {
          "q": "2. How long can you keep the borrowed books?",
          "options": [
            "For one week",
            "For three weeks",
            "For two months",
            "For one year"
          ],
          "correct": 1,
          "explanation": "The passage mentions you can borrow them 'for three weeks'."
        },
        {
          "q": "3. What kind of drink is allowed in the reading hall?",
          "options": [
            "Hot chocolate",
            "Soda cans",
            "Water from a sealed bottle",
            "Milkshakes"
          ],
          "correct": 2,
          "explanation": "The rules specify: 'you may drink water from a sealed bottle'."
        },
        {
          "q": "4. What happens if you return a book late?",
          "options": [
            "You lose your card forever",
            "You must buy a new book",
            "You pay a fee of 50 cents per day",
            "You cannot enter the city"
          ],
          "correct": 2,
          "explanation": "The text states: 'you must pay a fee of 50 cents per day'."
        }
      ]
    },
    {
      "id": "a1_p5",
      "number": 5,
      "title": "Reading 5: A Weekend at Green Park",
      "badge": "Nature & Leisure • A1",
      "instruction": "Read about the Garcia family's weekend trip and answer the 4 questions.",
      "passage": "Last Sunday, the Garcia family spent the day at Green Park. The weather was warm and sunny with a gentle breeze. Mateo and his sister Camila rented yellow bicycles and rode along the lake path, where they saw wild ducks swimming peacefully. At 1:00 PM, their parents spread a large red blanket under an oak tree and unpacked sandwiches, fresh grapes, and orange juice. After lunch, they played frisbee until sunset.",
      "questions": [
        {
          "q": "1. What was the weather like last Sunday?",
          "options": [
            "Rainy and cold",
            "Warm and sunny with a breeze",
            "Snowy and windy",
            "Stormy with thunder"
          ],
          "correct": 1,
          "explanation": "The passage describes the weather as 'warm and sunny with a gentle breeze'."
        },
        {
          "q": "2. What animal did Mateo and Camila see near the lake?",
          "options": [
            "Horses",
            "Wild ducks",
            "Fish jumping",
            "Frogs"
          ],
          "correct": 1,
          "explanation": "The text notes: 'they saw wild ducks swimming peacefully'."
        },
        {
          "q": "3. Where did the family have their picnic lunch?",
          "options": [
            "In a restaurant",
            "Under an oak tree on a red blanket",
            "Inside their car",
            "On a boat"
          ],
          "correct": 1,
          "explanation": "The text states their parents spread a blanket 'under an oak tree'."
        },
        {
          "q": "4. What game did the family play after lunch?",
          "options": [
            "Soccer",
            "Board games",
            "Frisbee",
            "Video games"
          ],
          "correct": 2,
          "explanation": "The passage confirms: 'After lunch, they played frisbee until sunset'."
        }
      ]
    },
    {
      "id": "a1_p6",
      "number": 6,
      "title": "Reading 6: Emma's Pet Rabbit, Toby",
      "badge": "Pets & Daily Care • A1",
      "instruction": "Read about Emma and her pet rabbit and answer the 4 questions.",
      "passage": "Emma has a small pet rabbit named Toby. Toby has white fur with brown spots and long soft ears. Every morning before school, Emma fills Toby's bowl with fresh green hay and clean water. In the afternoon, she gives him a small piece of crunchy carrot or sweet apple. Toby loves running around Emma's bedroom and hiding behind the wooden chair. Emma brushes Toby's fur twice a week to keep it clean and healthy.",
      "questions": [
        {
          "q": "1. What color is Toby's fur?",
          "options": [
            "Completely black",
            "Grey with black ears",
            "White with brown spots",
            "Golden brown"
          ],
          "correct": 2,
          "explanation": "The passage notes: 'Toby has white fur with brown spots'."
        },
        {
          "q": "2. What does Emma give Toby in the morning?",
          "options": [
            "Bread and cheese",
            "Fresh green hay and clean water",
            "Chocolate cookies",
            "Meat and potatoes"
          ],
          "correct": 1,
          "explanation": "The text says: 'Emma fills Toby's bowl with fresh green hay and clean water'."
        },
        {
          "q": "3. Where does Toby love to hide?",
          "options": [
            "Inside Emma's backpack",
            "Behind the wooden chair",
            "Under the bed in the dark",
            "In the garden tree"
          ],
          "correct": 1,
          "explanation": "The passage states he loves 'hiding behind the wooden chair'."
        },
        {
          "q": "4. How often does Emma brush Toby's fur?",
          "options": [
            "Every hour",
            "Once a month",
            "Twice a week",
            "Only in the summer"
          ],
          "correct": 2,
          "explanation": "The text explicitly states: 'Emma brushes Toby's fur twice a week'."
        }
      ]
    },
    {
      "id": "a1_p7",
      "number": 7,
      "title": "Reading 7: The Annual Sports Day",
      "badge": "School Events • A1",
      "instruction": "Read the announcement about Sports Day and answer the 4 questions.",
      "passage": "Next Friday is our school's Annual Sports Day! Classes will begin at 8:00 AM on the main soccer field. Students will compete in three fun categories: the 100-meter sprint, the sack race, and the relay race. Every participant will receive a blue ribbon, and the top three winners will win gold, silver, or bronze medals. Don't forget to wear your gym uniform, running sneakers, and a sun hat. Water stations will be available around the track.",
      "questions": [
        {
          "q": "1. On what day will Sports Day take place?",
          "options": [
            "Next Monday",
            "Next Wednesday",
            "Next Friday",
            "Next Sunday"
          ],
          "correct": 2,
          "explanation": "The text states: 'Next Friday is our school's Annual Sports Day'."
        },
        {
          "q": "2. Where will the events begin?",
          "options": [
            "In the gymnasium",
            "On the main soccer field",
            "In the auditorium",
            "At the swimming pool"
          ],
          "correct": 1,
          "explanation": "The passage notes: 'Classes will begin at 8:00 AM on the main soccer field'."
        },
        {
          "q": "3. What will every participant receive?",
          "options": [
            "A brand new soccer ball",
            "A blue ribbon",
            "A certificate of honor",
            "A free meal ticket"
          ],
          "correct": 1,
          "explanation": "The text says: 'Every participant will receive a blue ribbon'."
        },
        {
          "q": "4. What must students wear?",
          "options": [
            "Their formal uniform",
            "Their gym uniform, running sneakers, and a sun hat",
            "Costumes and masks",
            "Jeans and heavy boots"
          ],
          "correct": 1,
          "explanation": "The text advises wearing gym uniform, running sneakers, and a sun hat."
        }
      ]
    },
    {
      "id": "a1_p8",
      "number": 8,
      "title": "Reading 8: Painting the Wall Mural",
      "badge": "Arts & Creativity • A1",
      "instruction": "Read about the art students and answer the 4 questions.",
      "passage": "The seventh-grade art class is painting a colorful mural on the wall next to the playground. Their teacher, Mrs. Torres, drew an outline of a magical rainforest with tall green trees, flying parrots, and a sparkling blue waterfall. Ten students are helping to mix bright acrylic paints in plastic cups. Diego is painting the yellow feathers of a toucan, while Sofia is coloring the leaves with different shades of green. The mural will be finished by Friday afternoon.",
      "questions": [
        {
          "q": "1. Where are the students painting the mural?",
          "options": [
            "Inside the classroom",
            "On the wall next to the playground",
            "On the library ceiling",
            "On the school bus"
          ],
          "correct": 1,
          "explanation": "The passage says they are painting 'on the wall next to the playground'."
        },
        {
          "q": "2. What scene is shown on the mural?",
          "options": [
            "A snowy winter city",
            "A busy space station",
            "A magical rainforest with trees and a waterfall",
            "A desert with camels"
          ],
          "correct": 2,
          "explanation": "The teacher drew 'an outline of a magical rainforest with tall green trees... and a waterfall'."
        },
        {
          "q": "3. What is Diego painting?",
          "options": [
            "The blue waterfall",
            "The yellow feathers of a toucan",
            "The green grass",
            "The sky and clouds"
          ],
          "correct": 1,
          "explanation": "The text specifies: 'Diego is painting the yellow feathers of a toucan'."
        },
        {
          "q": "4. When will the mural be completed?",
          "options": [
            "By Wednesday morning",
            "By Friday afternoon",
            "In two months",
            "Next school year"
          ],
          "correct": 1,
          "explanation": "The text concludes: 'The mural will be finished by Friday afternoon'."
        }
      ]
    },
    {
      "id": "a1_p9",
      "number": 9,
      "title": "Reading 9: My Morning Schedule",
      "badge": "Daily Habits • A1",
      "instruction": "Read about Carlos's morning routine and answer the 4 questions.",
      "passage": "My name is Carlos, and I am thirteen years old. My alarm clock rings at 6:15 AM every weekday. First, I make my bed and wash my face with cool water. Then, I put on my navy blue school uniform. At 6:40 AM, I eat breakfast with my grandmother. I usually have toasted bread with butter and hot chocolate. At 7:00 AM, my neighbor Mr. Diaz drives me and my friend Daniel to school in his yellow car. We always arrive ten minutes before the first bell.",
      "questions": [
        {
          "q": "1. What time does Carlos's alarm clock ring?",
          "options": [
            "At 6:00 AM",
            "At 6:15 AM",
            "At 6:45 AM",
            "At 7:00 AM"
          ],
          "correct": 1,
          "explanation": "The text states: 'My alarm clock rings at 6:15 AM'."
        },
        {
          "q": "2. What color is Carlos's school uniform?",
          "options": [
            "White and green",
            "Navy blue",
            "Red and black",
            "Brown"
          ],
          "correct": 1,
          "explanation": "The passage mentions: 'I put on my navy blue school uniform'."
        },
        {
          "q": "3. Who does Carlos have breakfast with?",
          "options": [
            "His older brother",
            "His grandmother",
            "His teacher",
            "His soccer coach"
          ],
          "correct": 1,
          "explanation": "The text states: 'I eat breakfast with my grandmother'."
        },
        {
          "q": "4. How does Carlos get to school?",
          "options": [
            "He walks alone",
            "He rides a bicycle",
            "Mr. Diaz drives him and Daniel in his yellow car",
            "He takes the subway"
          ],
          "correct": 2,
          "explanation": "The passage confirms: 'Mr. Diaz drives me and my friend Daniel to school in his yellow car'."
        }
      ]
    },
    {
      "id": "a1_p10",
      "number": 10,
      "title": "Reading 10: The Science Fair Invitation",
      "badge": "Academic Events • A1",
      "instruction": "Read the Science Fair invitation and answer the 4 questions.",
      "passage": "You are invited to the Bilikids Annual Science Fair! The event will take place on Saturday, October 24th, from 9:00 AM to 1:00 PM in the school gymnasium. More than forty young scientists will display their projects about renewable energy, volcano models, and plant growth. Parents and friends are welcome to attend. Free popcorn and fruit punch will be served at the welcome table. Admission is completely free, but please register online before Thursday.",
      "questions": [
        {
          "q": "1. On what date will the Science Fair take place?",
          "options": [
            "Saturday, October 10th",
            "Saturday, October 24th",
            "Sunday, November 1st",
            "Friday, October 30th"
          ],
          "correct": 1,
          "explanation": "The text states: 'Saturday, October 24th'."
        },
        {
          "q": "2. Where will the Science Fair be held?",
          "options": [
            "In the school gymnasium",
            "In the science laboratory",
            "In the principal's office",
            "At the city park"
          ],
          "correct": 0,
          "explanation": "The passage mentions it takes place 'in the school gymnasium'."
        },
        {
          "q": "3. What free snacks will be served?",
          "options": [
            "Pizza and sodas",
            "Popcorn and fruit punch",
            "Burgers and fries",
            "Cookies and ice cream"
          ],
          "correct": 1,
          "explanation": "The text states: 'Free popcorn and fruit punch will be served'."
        },
        {
          "q": "4. What is the admission cost for visitors?",
          "options": [
            "$5 per person",
            "$10 per family",
            "Admission is completely free",
            "$2 for students"
          ],
          "correct": 2,
          "explanation": "The passage says: 'Admission is completely free'."
        }
      ]
    },
    {
      "id": "a1_p11",
      "number": 11,
      "title": "Reading 11: Visiting the Dinosaur Museum",
      "badge": "Museums & History • A1",
      "instruction": "Read about the class trip to the Natural History Museum and answer the 4 questions.",
      "passage": "Yesterday, Class 7B visited the City Dinosaur Museum. Their tour guide, Dr. Vance, showed them the fossil skeleton of a Tyrannosaurus rex that was twelve meters long. Dr. Vance explained that dinosaurs lived millions of years ago when the Earth was much warmer. Students touched a real petrified dinosaur bone and looked at fossilized footprints found in rock layers. In the museum gift shop, each student bought a small wooden dinosaur toy before boarding the bus home.",
      "questions": [
        {
          "q": "1. What giant fossil skeleton did Dr. Vance show the class?",
          "options": [
            "A giant woolly mammoth",
            "A Tyrannosaurus rex",
            "A blue whale skeleton",
            "A saber-toothed tiger"
          ],
          "correct": 1,
          "explanation": "The text says Dr. Vance showed them 'the fossil skeleton of a Tyrannosaurus rex'."
        },
        {
          "q": "2. How long was the Tyrannosaurus rex skeleton?",
          "options": [
            "Five meters",
            "Eight meters",
            "Twelve meters",
            "Twenty meters"
          ],
          "correct": 2,
          "explanation": "The text explicitly says it was 'twelve meters long'."
        },
        {
          "q": "3. What did the students touch during the tour?",
          "options": [
            "Dinosaur eggs in a nest",
            "A real petrified dinosaur bone",
            "The teeth of a live crocodile",
            "Ancient gold coins"
          ],
          "correct": 1,
          "explanation": "The passage notes: 'Students touched a real petrified dinosaur bone'."
        },
        {
          "q": "4. What souvenir did each student buy in the gift shop?",
          "options": [
            "A picture postcard",
            "A science book",
            "A small wooden dinosaur toy",
            "A fossil necklace"
          ],
          "correct": 2,
          "explanation": "The text states: 'each student bought a small wooden dinosaur toy'."
        }
      ]
    },
    {
      "id": "a1_p12",
      "number": 12,
      "title": "Reading 12: The Lost Backpack",
      "badge": "School Life • A1",
      "instruction": "Read the notice on the student bulletin board and answer the 4 questions.",
      "passage": "LOST ITEM NOTICE: A blue canvas backpack was left on the wooden benches near the basketball court yesterday at 4:15 PM. Inside the backpack, there is an English textbook, a green plastic pencil case with three pens, and a red water bottle. There is also a small keychain in the shape of a white cat attached to the zipper. If you found this backpack, please return it to the Lost & Found desk in Room 3 or speak to Elena in Class 8A.",
      "questions": [
        {
          "q": "1. What color is the lost canvas backpack?",
          "options": [
            "Red",
            "Black",
            "Blue",
            "Green"
          ],
          "correct": 2,
          "explanation": "The notice states: 'A blue canvas backpack was left on the wooden benches'."
        },
        {
          "q": "2. Where was the backpack left?",
          "options": [
            "In the cafeteria",
            "Near the basketball court",
            "Inside the library",
            "On the school bus"
          ],
          "correct": 1,
          "explanation": "The text notes it was left 'on the wooden benches near the basketball court'."
        },
        {
          "q": "3. What keychain is attached to the zipper?",
          "options": [
            "A miniature soccer ball",
            "A small white cat",
            "A silver star",
            "A golden key"
          ],
          "correct": 1,
          "explanation": "The notice describes: 'a small keychain in the shape of a white cat'."
        },
        {
          "q": "4. Where should someone take the backpack if they find it?",
          "options": [
            "To the police station",
            "To the principal's car",
            "To the Lost & Found desk in Room 3",
            "To the cafeteria kitchen"
          ],
          "correct": 2,
          "explanation": "The text says: 'please return it to the Lost & Found desk in Room 3'."
        }
      ]
    },
    {
      "id": "a1_p13",
      "number": 13,
      "title": "Reading 13: Music Band Practice on Friday",
      "badge": "Music & Friendship • A1",
      "instruction": "Read about the school music group and answer the 4 questions.",
      "passage": "Every Friday afternoon, four friends meet in the school music room for band practice. Maya plays the acoustic guitar, Noah plays the drums, Liam plays the electric keyboard, and Olivia is the lead singer. They are practicing two popular pop songs for the upcoming holiday concert. Mr. Gomez, the music teacher, helps them adjust the microphone volume and teaches them how to keep the correct tempo. After two hours of practice, they pack their instruments and share a box of warm pizza.",
      "questions": [
        {
          "q": "1. What musical instrument does Maya play?",
          "options": [
            "The drums",
            "The acoustic guitar",
            "The violin",
            "The trumpet"
          ],
          "correct": 1,
          "explanation": "The passage confirms: 'Maya plays the acoustic guitar'."
        },
        {
          "q": "2. Who is the lead singer of the band?",
          "options": [
            "Maya",
            "Noah",
            "Olivia",
            "Liam"
          ],
          "correct": 2,
          "explanation": "The text states: 'and Olivia is the lead singer'."
        },
        {
          "q": "3. How does Mr. Gomez help the band?",
          "options": [
            "He writes songs for them",
            "He buys them new instruments",
            "He adjusts microphone volume and teaches tempo",
            "He drives them to concerts"
          ],
          "correct": 2,
          "explanation": "The text notes he 'helps them adjust the microphone volume and teaches them how to keep the correct tempo'."
        },
        {
          "q": "4. What snack do the friends share after practice?",
          "options": [
            "Chocolate chip cookies",
            "Warm pizza",
            "Fruit salad",
            "Ice cream cones"
          ],
          "correct": 1,
          "explanation": "The text states: 'they pack their instruments and share a box of warm pizza'."
        }
      ]
    },
    {
      "id": "a1_p14",
      "number": 14,
      "title": "Reading 14: A Letter to a Pen Pal in Canada",
      "badge": "Pen Pals • A1",
      "instruction": "Read the letter from Valeria to her pen pal and answer the 4 questions.",
      "passage": "Dear Chloe, Greetings from sunny Colombia! My name is Valeria, and I am twelve years old. I live in a quiet neighborhood with my parents and my ginger cat, Rusty. My favorite subjects at school are English and Geography because I love learning about other countries. In my free time, I like roller-skating in the park and drawing cartoon characters. What is the weather like in Vancouver right now? I hope we can exchange pictures soon! Best wishes, Valeria.",
      "questions": [
        {
          "q": "1. In which country does Valeria live?",
          "options": [
            "Canada",
            "Colombia",
            "Australia",
            "Mexico"
          ],
          "correct": 1,
          "explanation": "The letter begins with: 'Greetings from sunny Colombia!'"
        },
        {
          "q": "2. What pet does Valeria have?",
          "options": [
            "A golden retriever",
            "A ginger cat named Rusty",
            "A green parrot",
            "A hamster"
          ],
          "correct": 1,
          "explanation": "The passage mentions: 'my ginger cat, Rusty'."
        },
        {
          "q": "3. Why does Valeria love English and Geography?",
          "options": [
            "Because they have no exams",
            "Because she loves learning about other countries",
            "Because her mother teaches them",
            "Because they are very easy"
          ],
          "correct": 1,
          "explanation": "Valeria explains: 'because I love learning about other countries'."
        },
        {
          "q": "4. What does Valeria like doing in her free time?",
          "options": [
            "Playing video games all day",
            "Roller-skating and drawing cartoon characters",
            "Cooking meals for the family",
            "Playing the drums"
          ],
          "correct": 1,
          "explanation": "The text states: 'I like roller-skating in the park and drawing cartoon characters'."
        }
      ]
    },
    {
      "id": "a1_p15",
      "number": 15,
      "title": "Reading 15: The School Recycling Project",
      "badge": "Environment • A1",
      "instruction": "Read about the school recycling project and answer the 4 questions.",
      "passage": "Our school has started a new green recycling initiative called 'Clean Planet'. Three large colored bins are now placed in every hallway: blue for clean paper and cardboard, yellow for plastic bottles and aluminum cans, and green for food waste. Student ambassadors check the bins every day at 3:00 PM to ensure items are separated properly. Last month, our school collected 150 kilograms of paper that was sent to a local paper mill to be recycled into new notebooks.",
      "questions": [
        {
          "q": "1. What goes into the blue recycling bins?",
          "options": [
            "Food waste and banana peels",
            "Clean paper and cardboard",
            "Glass bottles and ceramics",
            "Plastic bags"
          ],
          "correct": 1,
          "explanation": "The text explains: 'blue for clean paper and cardboard'."
        },
        {
          "q": "2. What goes into the yellow bins?",
          "options": [
            "Old clothing",
            "Plastic bottles and aluminum cans",
            "Wood chips",
            "Chemicals"
          ],
          "correct": 1,
          "explanation": "The text explains: 'yellow for plastic bottles and aluminum cans'."
        },
        {
          "q": "3. How often do student ambassadors check the bins?",
          "options": [
            "Once a month",
            "Every Friday morning",
            "Every day at 3:00 PM",
            "Only during holidays"
          ],
          "correct": 2,
          "explanation": "The passage notes ambassadors 'check the bins every day at 3:00 PM'."
        },
        {
          "q": "4. What was the collected paper turned into?",
          "options": [
            "Cardboard boxes",
            "New notebooks",
            "Paper airplanes",
            "Newspaper print"
          ],
          "correct": 1,
          "explanation": "The text states it was sent 'to be recycled into new notebooks'."
        }
      ]
    },
    {
      "id": "a1_p16",
      "number": 16,
      "title": "Reading 16: Shopping for School Supplies",
      "badge": "Shopping & Numbers • A1",
      "instruction": "Read about shopping for school materials and answer the 4 questions.",
      "passage": "On Saturday morning, Felipe and his mother visited the Central Stationery Shop to buy supplies for the new school term. Felipe had a shopping list written by his teacher: three lined notebooks, a wooden ruler, two glue sticks, and a pack of twelve colored pencils. The shop was busy with families buying school bags. Felipe chose three dark green notebooks for two dollars each, and his mother bought him a sturdy blue pencil sharpener. The total cost was eighteen dollars.",
      "questions": [
        {
          "q": "1. When did Felipe and his mother go shopping?",
          "options": [
            "On Friday evening",
            "On Saturday morning",
            "On Sunday afternoon",
            "On Monday recess"
          ],
          "correct": 1,
          "explanation": "The passage begins: 'On Saturday morning, Felipe and his mother visited the Central Stationery Shop'."
        },
        {
          "q": "2. What color notebooks did Felipe choose?",
          "options": [
            "Bright yellow",
            "Dark green",
            "Light pink",
            "Purple"
          ],
          "correct": 1,
          "explanation": "The text specifies: 'Felipe chose three dark green notebooks'."
        },
        {
          "q": "3. How much did each notebook cost?",
          "options": [
            "One dollar",
            "Two dollars",
            "Five dollars",
            "Ten dollars"
          ],
          "correct": 1,
          "explanation": "The text states: 'for two dollars each'."
        },
        {
          "q": "4. What was the total cost of their purchases?",
          "options": [
            "Ten dollars",
            "Fifteen dollars",
            "Eighteen dollars",
            "Twenty-five dollars"
          ],
          "correct": 2,
          "explanation": "The text concludes: 'The total cost was eighteen dollars'."
        }
      ]
    },
    {
      "id": "a1_p17",
      "number": 17,
      "title": "Reading 17: Cooking Easy Pancakes on Sunday",
      "badge": "Cooking & Recipes • A1",
      "instruction": "Read the simple cooking story and answer the 4 questions.",
      "passage": "Every Sunday morning, Gabriel makes breakfast for his younger sister, Sara. Today, he is making fluffy banana pancakes. First, he mashes two ripe bananas in a glass bowl with a fork. Next, he adds one fresh egg, a cup of white flour, and half a cup of milk, mixing everything until smooth. His mother helps him pour the batter into a warm frying pan. When small bubbles appear on top, Gabriel flips the pancake carefully. They serve the warm pancakes with sweet honey and sliced strawberries.",
      "questions": [
        {
          "q": "1. What is Gabriel making for breakfast?",
          "options": [
            "Waffles with chocolate",
            "Fluffy banana pancakes",
            "Scrambled eggs with toast",
            "Oatmeal porridge"
          ],
          "correct": 1,
          "explanation": "The text says: 'Today, he is making fluffy banana pancakes'."
        },
        {
          "q": "2. What ingredients does Gabriel mix with the mashed bananas?",
          "options": [
            "One egg, a cup of flour, and half a cup of milk",
            "Sugar, butter, and salt only",
            "Water and yeast",
            "Apples and cinnamon"
          ],
          "correct": 0,
          "explanation": "The passage lists: 'one fresh egg, a cup of white flour, and half a cup of milk'."
        },
        {
          "q": "3. How does Gabriel know when to flip the pancake?",
          "options": [
            "When smoke comes out",
            "When small bubbles appear on top",
            "After twenty minutes",
            "When his mother tells him to stop"
          ],
          "correct": 1,
          "explanation": "The text states: 'When small bubbles appear on top, Gabriel flips the pancake'."
        },
        {
          "q": "4. What toppings do they put on the warm pancakes?",
          "options": [
            "Peanut butter and raisins",
            "Sweet honey and sliced strawberries",
            "Chocolate syrup and nuts",
            "Cheese and butter"
          ],
          "correct": 1,
          "explanation": "The text confirms: 'They serve the warm pancakes with sweet honey and sliced strawberries'."
        }
      ]
    },
    {
      "id": "a1_p18",
      "number": 18,
      "title": "Reading 18: The Basketball Tournament",
      "badge": "Sports & Teamwork • A1",
      "instruction": "Read about the inter-school basketball match and answer the 4 questions.",
      "passage": "The final game of the junior basketball tournament took place yesterday at the Westside Sports Pavilion. The Bilikids Eagles were playing against the North River Tigers. The game was intense, with both teams scoring points rapidly. With only ten seconds left on the clock, the score was tied 32 to 32. Julian, the point guard for the Eagles, caught a fast pass from Adrian and threw the ball into the hoop just before the buzzer rang! The Eagles won 34 to 32.",
      "questions": [
        {
          "q": "1. Where was the final basketball game played?",
          "options": [
            "At the school playground",
            "At the Westside Sports Pavilion",
            "In the city park",
            "In the school library"
          ],
          "correct": 1,
          "explanation": "The text states: 'at the Westside Sports Pavilion'."
        },
        {
          "q": "2. What was the score with ten seconds left on the clock?",
          "options": [
            "Tied 20 to 20",
            "Tied 32 to 32",
            "Eagles leading 30 to 28",
            "Tigers leading 32 to 30"
          ],
          "correct": 1,
          "explanation": "The text states: 'the score was tied 32 to 32'."
        },
        {
          "q": "3. Who scored the winning points for the Bilikids Eagles?",
          "options": [
            "Adrian",
            "Coach Ramirez",
            "Julian",
            "The referee"
          ],
          "correct": 2,
          "explanation": "The text confirms: 'Julian... threw the ball into the hoop just before the buzzer rang'."
        },
        {
          "q": "4. What was the final score of the match?",
          "options": [
            "32 to 30",
            "34 to 32",
            "36 to 34",
            "40 to 38"
          ],
          "correct": 1,
          "explanation": "The passage concludes: 'The Eagles won 34 to 32'."
        }
      ]
    },
    {
      "id": "a1_p19",
      "number": 19,
      "title": "Reading 19: A Rainy Afternoon at Home",
      "badge": "Weather & Free Time • A1",
      "instruction": "Read about a cozy rainy day and answer the 4 questions.",
      "passage": "Outside, heavy rain was falling on the roof and tapping against the living room window. Instead of going outside to play soccer, Andres and his sister Lucia decided to stay in the warm living room. They laid out a 500-piece jigsaw puzzle of a world map on the coffee table. While they searched for matching border pieces, their father made hot herbal tea with lemon and honey. By evening, the rain had stopped, and they had completed more than half of the puzzle.",
      "questions": [
        {
          "q": "1. Why did Andres and Lucia stay inside the house?",
          "options": [
            "Because they were feeling sick",
            "Because heavy rain was falling outside",
            "Because they had too much homework",
            "Because the electricity was gone"
          ],
          "correct": 1,
          "explanation": "The text mentions heavy rain was falling outside instead of playing soccer."
        },
        {
          "q": "2. What puzzle did Andres and Lucia put together?",
          "options": [
            "A puzzle of cartoon animals",
            "A 500-piece jigsaw puzzle of a world map",
            "A picture of a solar system",
            "A puzzle of an airplane"
          ],
          "correct": 1,
          "explanation": "The text notes: 'a 500-piece jigsaw puzzle of a world map'."
        },
        {
          "q": "3. What warm drink did their father prepare?",
          "options": [
            "Hot chocolate with marshmallows",
            "Hot herbal tea with lemon and honey",
            "Black coffee",
            "Warm apple cider"
          ],
          "correct": 1,
          "explanation": "The text says: 'their father made hot herbal tea with lemon and honey'."
        },
        {
          "q": "4. How much of the puzzle was finished by evening?",
          "options": [
            "Only five pieces",
            "Exactly twenty pieces",
            "More than half of the puzzle",
            "The entire puzzle was completed"
          ],
          "correct": 2,
          "explanation": "The passage states: 'they had completed more than half of the puzzle'."
        }
      ]
    },
    {
      "id": "a1_p20",
      "number": 20,
      "title": "Reading 20: The School Garden Project",
      "badge": "Nature & Plants • A1",
      "instruction": "Read about the students planting vegetables and answer the 4 questions.",
      "passage": "Every Tuesday during the afternoon science block, students in Grade 6 work in the school organic garden. Today, they are planting red cherry tomatoes and crisp green lettuce. Mr. Alvarez showed the students how to dig small holes in the rich soil, place the seeds carefully, and cover them with compost. Maya and David watered the vegetable beds with a green watering can. The class hopes to harvest fresh vegetables in two months for the school cafeteria salad bar.",
      "questions": [
        {
          "q": "1. On what day do the Grade 6 students work in the garden?",
          "options": [
            "Every Monday",
            "Every Tuesday",
            "Every Thursday",
            "Every Saturday"
          ],
          "correct": 1,
          "explanation": "The text starts: 'Every Tuesday during the afternoon science block'."
        },
        {
          "q": "2. What two vegetables are the students planting today?",
          "options": [
            "Potatoes and carrots",
            "Red cherry tomatoes and crisp green lettuce",
            "Corn and beans",
            "Pumpkins and onions"
          ],
          "correct": 1,
          "explanation": "The text explicitly states: 'red cherry tomatoes and crisp green lettuce'."
        },
        {
          "q": "3. What did Maya and David do?",
          "options": [
            "Built a wooden fence",
            "Watered the vegetable beds with a green watering can",
            "Sold the seeds to teachers",
            "Picked ripe fruit"
          ],
          "correct": 1,
          "explanation": "The passage confirms: 'Maya and David watered the vegetable beds with a green watering can'."
        },
        {
          "q": "4. When does the class hope to harvest the vegetables?",
          "options": [
            "Tomorrow morning",
            "Next week",
            "In two months",
            "Next year"
          ],
          "correct": 2,
          "explanation": "The text notes: 'The class hopes to harvest fresh vegetables in two months'."
        }
      ]
    },
    {
      "id": "a1_p21",
      "number": 21,
      "title": "Reading 21: The End-of-Year Festival",
      "badge": "Celebration • A1",
      "instruction": "Read about the school celebration and answer the 4 questions.",
      "passage": "The school year ended with a wonderful celebration in the courtyard. The trees were decorated with paper lanterns and colorful streamers. The student choir sang three songs in English and Spanish, and the drama club performed a short funny play about time travel. The principal presented certificates of excellence to students who showed kindness, curiosity, and good teamwork. Everyone enjoyed fresh watermelon slices and fruit punch while saying goodbye for the summer holidays.",
      "questions": [
        {
          "q": "1. Where was the End-of-Year Festival celebrated?",
          "options": [
            "In the cafeteria",
            "In the school courtyard",
            "At the city beach",
            "Inside the library"
          ],
          "correct": 1,
          "explanation": "The passage says it was held 'in the courtyard'."
        },
        {
          "q": "2. What languages did the choir sing in?",
          "options": [
            "French and Italian",
            "English and Spanish",
            "German and English",
            "Portuguese only"
          ],
          "correct": 1,
          "explanation": "The text mentions: 'The student choir sang three songs in English and Spanish'."
        },
        {
          "q": "3. What qualities did the certificate winners demonstrate?",
          "options": [
            "Kindness, curiosity, and good teamwork",
            "Only high athletic speed",
            "Playing video games",
            "Being the tallest in class"
          ],
          "correct": 0,
          "explanation": "The text states certificates recognized 'kindness, curiosity, and good teamwork'."
        },
        {
          "q": "4. What refreshing snack did everyone enjoy?",
          "options": [
            "Hot soup",
            "Fresh watermelon slices and fruit punch",
            "Popcorn and candy",
            "Ice cream sandwiches"
          ],
          "correct": 1,
          "explanation": "The passage concludes: 'Everyone enjoyed fresh watermelon slices and fruit punch'."
        }
      ]
    }
  ],
  "a2": [
    {
      "id": "a2_p1",
      "number": 1,
      "title": "Reading 1: The Ocean Cleanup Expedition",
      "badge": "Environmental Story • A2",
      "instruction": "Read the article about young climate activists and answer the 4 questions.",
      "passage": "Last summer, fourteen-year-old Mateo and his classmates organized a beach cleanup along the northern coast. Over two days, fifty volunteers collected more than 300 kilograms of plastic bottles, fishing nets, and food wrappers. Instead of throwing the trash into landfill sites, the team partnered with a local recycling workshop. The workshop melted the cleaned plastic and transformed it into colorful benches for a community playground. Mateo explained: 'Many people think one teenager cannot change anything, but when our school worked together, we created something genuinely useful for our town.' The group now plans to organize river cleanups every month.",
      "questions": [
        {
          "q": "1. How much plastic waste did the volunteers collect?",
          "options": [
            "Under 50 kilograms",
            "Exactly 100 kilograms",
            "More than 300 kilograms",
            "Over 1,000 kilograms"
          ],
          "correct": 2,
          "explanation": "The passage states: 'fifty volunteers collected more than 300 kilograms of plastic'."
        },
        {
          "q": "2. What did the local workshop do with the collected plastic?",
          "options": [
            "Buried it in a landfill",
            "Turned it into playground benches",
            "Sold it to foreign companies",
            "Burned it for energy"
          ],
          "correct": 1,
          "explanation": "The text says the workshop 'transformed it into colorful benches for a community playground'."
        },
        {
          "q": "3. What was Mateo's main message about teenagers?",
          "options": [
            "Teenagers should never do physical work",
            "Individual actions never succeed",
            "Working together allows teenagers to make a real difference",
            "Cleanups are too expensive for schools"
          ],
          "correct": 2,
          "explanation": "Mateo stated that when people work together, they can create something genuinely useful."
        },
        {
          "q": "4. What is the group planning to do next?",
          "options": [
            "Move to another city",
            "Stop the project permanently",
            "Organize monthly river cleanups",
            "Build a plastic factory"
          ],
          "correct": 2,
          "explanation": "The final sentence notes: 'The group now plans to organize river cleanups every month'."
        }
      ]
    },
    {
      "id": "a2_p2",
      "number": 2,
      "title": "Reading 2: Adventures in Chingaza National Park",
      "badge": "Travel & Wildlife • A2",
      "instruction": "Read about an expedition to the high mountain ecosystems and answer the 4 questions.",
      "passage": "Chingaza National Park is a high-altitude natural reserve located in the eastern Andes of Colombia. Last month, a group of high school students hiked through the misty páramo ecosystem, which sits more than 3,000 meters above sea level. Their biology guide, Patricia, pointed out the frailejón plants, which have thick velvety leaves that capture water from passing clouds. Patricia explained that these plants act as giant natural sponges, supplying over 70 percent of the drinking water for nearby cities. The students also spotted a rare spectacled bear grazing on wild berries in the valley.",
      "questions": [
        {
          "q": "1. Where is Chingaza National Park located?",
          "options": [
            "Along the Pacific coast",
            "In the eastern Andes of Colombia",
            "Inside a large metropolitan city",
            "In a tropical desert"
          ],
          "correct": 1,
          "explanation": "The text states it is located 'in the eastern Andes of Colombia'."
        },
        {
          "q": "2. How high is the páramo ecosystem above sea level?",
          "options": [
            "500 meters",
            "1,500 meters",
            "More than 3,000 meters",
            "10,000 meters"
          ],
          "correct": 2,
          "explanation": "The text notes the ecosystem 'sits more than 3,000 meters above sea level'."
        },
        {
          "q": "3. Why are frailejón plants important for surrounding cities?",
          "options": [
            "They produce edible fruits",
            "They provide over 70 percent of drinking water by capturing moisture",
            "They generate solar energy",
            "They scare away predators"
          ],
          "correct": 1,
          "explanation": "The guide explained these plants 'act as giant natural sponges, supplying over 70 percent of the drinking water'."
        },
        {
          "q": "4. What rare wild animal did the students observe?",
          "options": [
            "A mountain lion",
            "A spectacled bear",
            "A giant condor",
            "An alligator"
          ],
          "correct": 1,
          "explanation": "The text mentions: 'students also spotted a rare spectacled bear grazing on wild berries'."
        }
      ]
    },
    {
      "id": "a2_p3",
      "number": 3,
      "title": "Reading 3: Young Inventor: The Solar Charger",
      "badge": "Technology & Innovation • A2",
      "instruction": "Read about a student inventor and answer the 4 questions.",
      "passage": "Thirteen-year-old Isaac noticed that many students in his rural community struggled to complete their online homework because frequent thunderstorms caused power cuts. Determined to solve this issue, Isaac built a portable solar charger using recycled computer batteries, a miniature solar panel, and a wooden casing from an old fruit box. The device can charge two smartphones and a study lamp simultaneously after just four hours under direct sunlight. Isaac presented his project at the Regional Youth Science Fair and won first prize, earning a scholarship for a summer coding academy.",
      "questions": [
        {
          "q": "1. Why did students in Isaac's community struggle with online homework?",
          "options": [
            "They lacked computers",
            "Frequent thunderstorms caused power cuts",
            "The internet was too expensive",
            "They did not have textbooks"
          ],
          "correct": 1,
          "explanation": "The passage explains: 'frequent thunderstorms caused power cuts'."
        },
        {
          "q": "2. What materials did Isaac use to build his solar charger?",
          "options": [
            "Gold wires and diamonds",
            "Recycled batteries, a small solar panel, and a wooden fruit box",
            "Plastic bottles and sand",
            "Brand new car parts"
          ],
          "correct": 1,
          "explanation": "The text lists: 'recycled computer batteries, a miniature solar panel, and a wooden casing from an old fruit box'."
        },
        {
          "q": "3. How long does the device need to charge under direct sunlight?",
          "options": [
            "One hour",
            "Four hours",
            "Twelve hours",
            "Two full days"
          ],
          "correct": 1,
          "explanation": "The passage states: 'after just four hours under direct sunlight'."
        },
        {
          "q": "4. What award did Isaac win at the science fair?",
          "options": [
            "A cash prize of $10,000",
            "First prize and a scholarship for a coding academy",
            "A new smartphone",
            "A trophy for the best poster"
          ],
          "correct": 1,
          "explanation": "The text notes he won first prize and 'a scholarship for a summer coding academy'."
        }
      ]
    },
    {
      "id": "a2_p4",
      "number": 4,
      "title": "Reading 4: The Story of the Modern Bicycle",
      "badge": "History of Everyday Objects • A2",
      "instruction": "Read the historical text about bicycles and answer the 4 questions.",
      "passage": "The earliest version of the bicycle was invented in Germany in 1817 by Baron Karl von Drais. Unlike modern bikes, it had a wooden frame and no pedals; riders pushed their feet against the ground to move forward. Later in the 1870s, the famous 'penny-farthing' bicycle appeared, featuring an enormous front wheel and a tiny rear wheel. While it was fast, falling off was very dangerous. The breakthrough came in 1885 with the invention of the 'safety bicycle', which introduced two equal-sized wheels, pedals connected to a chain, and rubber tires filled with air, making cycling safe and accessible for everyone.",
      "questions": [
        {
          "q": "1. Who invented the earliest version of the bicycle in 1817?",
          "options": [
            "Thomas Edison",
            "Baron Karl von Drais",
            "Henry Ford",
            "Leonardo da Vinci"
          ],
          "correct": 1,
          "explanation": "The passage opens: 'invented in Germany in 1817 by Baron Karl von Drais'."
        },
        {
          "q": "2. How did riders move the earliest 1817 bicycle?",
          "options": [
            "By pedaling backward",
            "By using a small steam engine",
            "By pushing their feet against the ground",
            "By pulling a rope"
          ],
          "correct": 2,
          "explanation": "The text says: 'riders pushed their feet against the ground to move forward'."
        },
        {
          "q": "3. What was a major disadvantage of the penny-farthing bicycle?",
          "options": [
            "It was too heavy to carry",
            "Falling off was very dangerous due to the huge front wheel",
            "It could only travel on grass",
            "It was illegal in cities"
          ],
          "correct": 1,
          "explanation": "The passage notes: 'While it was fast, falling off was very dangerous'."
        },
        {
          "q": "4. What features made the 1885 'safety bicycle' popular?",
          "options": [
            "A wooden engine",
            "Three wheels and a sail",
            "Two equal wheels, pedals with a chain, and air-filled rubber tires",
            "Steel tracks instead of wheels"
          ],
          "correct": 2,
          "explanation": "The text lists: 'two equal-sized wheels, pedals connected to a chain, and rubber tires filled with air'."
        }
      ]
    },
    {
      "id": "a2_p5",
      "number": 5,
      "title": "Reading 5: Volunteering at the Animal Shelter",
      "badge": "Community Service • A2",
      "instruction": "Read about teenage volunteers at the rescue shelter and answer the 4 questions.",
      "passage": "Every Saturday morning, sixteen-year-old Laura volunteers at the Happy Paws Animal Rescue Shelter. The shelter cares for abandoned dogs and cats until responsible families adopt them. Laura's tasks include washing food bowls, preparing fresh meals according to dietary instructions, and taking energetic rescue dogs on forty-minute walks around the neighborhood park. Laura also takes clear, cheerful photographs of the animals to post on the shelter's social media page. Thanks to these adoption photos, more than thirty pets found loving homes during the past six months.",
      "questions": [
        {
          "q": "1. How often does Laura volunteer at the shelter?",
          "options": [
            "Every Monday afternoon",
            "Every Saturday morning",
            "Once a month",
            "Only during winter"
          ],
          "correct": 1,
          "explanation": "The text states: 'Every Saturday morning, sixteen-year-old Laura volunteers'."
        },
        {
          "q": "2. What is one of Laura's physical duties at the shelter?",
          "options": [
            "Performing medical surgeries",
            "Taking rescue dogs on forty-minute walks",
            "Selling dog food for profit",
            "Building new kennels"
          ],
          "correct": 1,
          "explanation": "The text mentions: 'taking energetic rescue dogs on forty-minute walks'."
        },
        {
          "q": "3. Why does Laura take photographs of the animals?",
          "options": [
            "To sell photo albums",
            "To post them on social media for adoption",
            "For a school art test",
            "To win a photography medal"
          ],
          "correct": 1,
          "explanation": "The text explains she takes photos 'to post on the shelter's social media page'."
        },
        {
          "q": "4. How many pets were adopted in the last six months thanks to the photos?",
          "options": [
            "Five pets",
            "Ten pets",
            "More than thirty pets",
            "One hundred pets"
          ],
          "correct": 2,
          "explanation": "The passage concludes: 'more than thirty pets found loving homes during the past six months'."
        }
      ]
    },
    {
      "id": "a2_p6",
      "number": 6,
      "title": "Reading 6: Digital Photography for Beginners",
      "badge": "Arts & Hobbies • A2",
      "instruction": "Read the guide on basic photography and answer the 4 questions.",
      "passage": "You do not need an expensive professional camera to take stunning photos; modern smartphones are equipped with capable lenses and sensors. First, clean your camera lens with a microfiber cloth before shooting, as smudges can make photos look blurry. Second, use natural morning or late afternoon light, often called the 'golden hour', because harsh midday sun creates dark shadows. Third, follow the 'rule of thirds': imagine your screen divided into a three-by-three grid and place your subject along the intersecting lines rather than dead center. This simple technique creates balance and visual interest.",
      "questions": [
        {
          "q": "1. What should you do before taking a photograph?",
          "options": [
            "Buy a new lens",
            "Clean your camera lens with a microfiber cloth",
            "Turn off all lights",
            "Shake the phone vigorously"
          ],
          "correct": 1,
          "explanation": "The text advises to 'clean your camera lens with a microfiber cloth before shooting'."
        },
        {
          "q": "2. When is the 'golden hour' for photography?",
          "options": [
            "At midnight",
            "In the early morning or late afternoon",
            "Exactly at noon",
            "During heavy thunderstorms"
          ],
          "correct": 1,
          "explanation": "The passage identifies the golden hour as 'natural morning or late afternoon light'."
        },
        {
          "q": "3. Why should photographers avoid shooting under harsh midday sun?",
          "options": [
            "The camera overheats quickly",
            "It creates dark, unflattering shadows",
            "The sky turns completely purple",
            "Batteries drain faster"
          ],
          "correct": 1,
          "explanation": "The text explains: 'harsh midday sun creates dark shadows'."
        },
        {
          "q": "4. What does the 'rule of thirds' suggest doing?",
          "options": [
            "Take only three photos per day",
            "Place your subject along intersecting grid lines instead of the center",
            "Use three different filters on every shot",
            "Zoom in three times on every subject"
          ],
          "correct": 1,
          "explanation": "The rule recommends placing your subject 'along the intersecting lines rather than dead center'."
        }
      ]
    },
    {
      "id": "a2_p7",
      "number": 7,
      "title": "Reading 7: Healthy Habits for Teen Athletes",
      "badge": "Health & Fitness • A2",
      "instruction": "Read about nutrition and recovery for young athletes and answer the 4 questions.",
      "passage": "Participating in high school sports requires both rigorous training and smart lifestyle habits. Sports nutritionists emphasize that young athletes need complex carbohydrates, like brown rice and oats, to maintain sustained energy throughout two-hour practices. Lean proteins, such as eggs and beans, are essential for muscle recovery. In addition, drinking water before, during, and after exercise prevents dehydration and muscle cramps. Finally, getting eight to nine hours of continuous sleep each night is crucial; during deep sleep, the body releases growth hormones that repair tissue and improve athletic reaction time.",
      "questions": [
        {
          "q": "1. What food group provides sustained energy for sports training?",
          "options": [
            "Sugary candy and sodas",
            "Complex carbohydrates like brown rice and oats",
            "Deep-fried fast food",
            "Energy drinks with caffeine"
          ],
          "correct": 1,
          "explanation": "The text notes athletes need 'complex carbohydrates, like brown rice and oats, to maintain sustained energy'."
        },
        {
          "q": "2. Why are lean proteins like eggs and beans important?",
          "options": [
            "They help athletes sleep immediately",
            "They are essential for muscle recovery",
            "They replace drinking water",
            "They make bones flexible"
          ],
          "correct": 1,
          "explanation": "The passage clarifies that lean proteins 'are essential for muscle recovery'."
        },
        {
          "q": "3. What does drinking enough water help prevent?",
          "options": [
            "Dehydration and muscle cramps",
            "Broken bones",
            "Sneezing",
            "Weight gain"
          ],
          "correct": 0,
          "explanation": "The text states: 'drinking water... prevents dehydration and muscle cramps'."
        },
        {
          "q": "4. How many hours of sleep do young athletes need per night?",
          "options": [
            "Four to five hours",
            "Six hours exactly",
            "Eight to nine hours",
            "Twelve hours"
          ],
          "correct": 2,
          "explanation": "The text confirms: 'getting eight to nine hours of continuous sleep each night is crucial'."
        }
      ]
    },
    {
      "id": "a2_p8",
      "number": 8,
      "title": "Reading 8: Astronomy Night at the Observatory",
      "badge": "Science & Space • A2",
      "instruction": "Read about the high school stargazing event and answer the 4 questions.",
      "passage": "On Friday night, seventy students gathered at the Mount Horizon Astronomical Observatory for the annual Stargazing Night. Because the observatory is situated away from bright city lights, the sky was crystal clear and filled with thousands of visible stars. Professor Ortiz set up three high-powered optical telescopes. Through the largest telescope, students were thrilled to observe the distinct rings of Saturn and the red surface of Mars. Professor Ortiz also showed students how to find the North Star using the constellation known as the Big Dipper.",
      "questions": [
        {
          "q": "1. Why was the sky crystal clear at the observatory?",
          "options": [
            "Because a giant fan blew the clouds away",
            "Because the observatory is situated away from bright city lights",
            "Because it was snowing",
            "Because the moon was full"
          ],
          "correct": 1,
          "explanation": "The text says the sky was clear 'Because the observatory is situated away from bright city lights'."
        },
        {
          "q": "2. How many high-powered optical telescopes were used?",
          "options": [
            "One telescope",
            "Three telescopes",
            "Ten telescopes",
            "Twenty telescopes"
          ],
          "correct": 1,
          "explanation": "The passage states: 'Professor Ortiz set up three high-powered optical telescopes'."
        },
        {
          "q": "3. What celestial feature were students able to see on Saturn?",
          "options": [
            "Saturn's oceans",
            "Saturn's distinct rings",
            "Saturn's volcanic craters",
            "Saturn's green forests"
          ],
          "correct": 1,
          "explanation": "The text says students observed 'the distinct rings of Saturn'."
        },
        {
          "q": "4. Which constellation did Professor Ortiz use to locate the North Star?",
          "options": [
            "Orion's Belt",
            "The Big Dipper",
            "Scorpius",
            "Cassiopeia"
          ],
          "correct": 1,
          "explanation": "The passage specifies: 'using the constellation known as the Big Dipper'."
        }
      ]
    },
    {
      "id": "a2_p9",
      "number": 9,
      "title": "Reading 9: Traditional Festivals of the World",
      "badge": "Culture & Traditions • A2",
      "instruction": "Read about unique cultural festivals and answer the 4 questions.",
      "passage": "Cultural festivals provide a fascinating glimpse into human traditions and community heritage. In Thailand, the Songkran Water Festival marks the traditional New Year every April; people playfully splash water on friends and strangers in the streets to symbolize washing away bad luck. In Mexico, families celebrate the Day of the Dead (Día de los Muertos) by building colorful altars adorned with bright marigold flowers, sugar skulls, and family photographs to honor deceased ancestors with joy and music. Both festivals illustrate how celebrations unite generations through shared values.",
      "questions": [
        {
          "q": "1. When is the Songkran Water Festival celebrated in Thailand?",
          "options": [
            "Every January",
            "Every April",
            "Every August",
            "Every December"
          ],
          "correct": 1,
          "explanation": "The text states Songkran occurs 'every April'."
        },
        {
          "q": "2. What does splashing water symbolize during Songkran?",
          "options": [
            "Beginning a swimming race",
            "Washing away bad luck",
            "Cooling down hot buildings",
            "Inviting rain for farming"
          ],
          "correct": 1,
          "explanation": "The passage explains water is splashed 'to symbolize washing away bad luck'."
        },
        {
          "q": "3. What items are placed on altars during the Day of the Dead in Mexico?",
          "options": [
            "Electronics and money",
            "Marigold flowers, sugar skulls, and family photographs",
            "Winter coats and snow boots",
            "Silver swords and armor"
          ],
          "correct": 1,
          "explanation": "The text mentions altars are decorated with 'marigold flowers, sugar skulls, and family photographs'."
        },
        {
          "q": "4. What is the underlying purpose of both festivals?",
          "options": [
            "To boost international tourism only",
            "To unite generations through shared cultural values",
            "To promote commercial products",
            "To compete against other countries"
          ],
          "correct": 1,
          "explanation": "The final sentence concludes: 'Both festivals illustrate how celebrations unite generations through shared values'."
        }
      ]
    },
    {
      "id": "a2_p10",
      "number": 10,
      "title": "Reading 10: The School Debate Championship",
      "badge": "Communication • A2",
      "instruction": "Read about the inter-school debate tournament and answer the 4 questions.",
      "passage": "Last Thursday, our high school auditorium hosted the regional debate championship. Eight teams from different towns debated whether artificial intelligence should replace human grading on school essays. Mariana, the captain of the Bilikids affirmative team, argued that AI provides instant grammatical feedback and eliminates personal bias. The opposing team counter-argued that machines cannot evaluate human creativity or emotional depth. After three rounds of thoughtful rebuttals, the judges awarded first place to the Bilikids team for their clear structure and evidence-based arguments.",
      "questions": [
        {
          "q": "1. What was the central topic of the debate championship?",
          "options": [
            "Whether school uniforms should be banned",
            "Whether artificial intelligence should replace human grading on essays",
            "Whether students should have shorter summer breaks",
            "Whether homework should be eliminated entirely"
          ],
          "correct": 1,
          "explanation": "The text states teams debated 'whether artificial intelligence should replace human grading on school essays'."
        },
        {
          "q": "2. What argument did Mariana present in favor of AI grading?",
          "options": [
            "AI gives higher grades to everyone",
            "AI provides instant feedback and eliminates personal bias",
            "AI does not require electricity",
            "AI writes the essays for students"
          ],
          "correct": 1,
          "explanation": "The passage notes Mariana argued 'AI provides instant grammatical feedback and eliminates personal bias'."
        },
        {
          "q": "3. What was the counter-argument from the opposing team?",
          "options": [
            "Machines break down too easily",
            "Machines cannot evaluate human creativity or emotional depth",
            "AI is too expensive for schools",
            "Teachers dislike technology"
          ],
          "correct": 1,
          "explanation": "The text explains opponents argued 'machines cannot evaluate human creativity or emotional depth'."
        },
        {
          "q": "4. Why did the judges award first place to the Bilikids team?",
          "options": [
            "Because they spoke louder than the opponents",
            "For their clear structure and evidence-based arguments",
            "Because they finished the debate faster",
            "Because they had more team members"
          ],
          "correct": 1,
          "explanation": "The passage concludes the award was given 'for their clear structure and evidence-based arguments'."
        }
      ]
    },
    {
      "id": "a2_p11",
      "number": 11,
      "title": "Reading 11: Smart Cities and Public Transport",
      "badge": "Urban Life • A2",
      "instruction": "Read about modern urban transportation and answer the 4 questions.",
      "passage": "As global urban populations expand, cities are redesigning public transit systems to reduce traffic jams and air pollution. In modern 'smart cities', electric buses recharge in five minutes at bus stops using roof-mounted conductive panels. Underground metros use automated digital sensors to optimize train frequency, preventing overcrowding during rush hours. Furthermore, integrated mobile apps allow commuters to unlock shared bicycles, ride light rail trains, and board buses using a single contactless digital ticket. Studies show these improvements encourage thousands of commuters to leave private cars at home.",
      "questions": [
        {
          "q": "1. What is a key goal of redesigning urban transit systems?",
          "options": [
            "To increase the price of gasoline",
            "To reduce traffic congestion and air pollution",
            "To replace roads with rivers",
            "To encourage people to walk twenty kilometers daily"
          ],
          "correct": 1,
          "explanation": "The text mentions cities are redesigning transit 'to reduce traffic jams and air pollution'."
        },
        {
          "q": "2. How do electric buses recharge quickly in smart cities?",
          "options": [
            "Using roof-mounted conductive panels at stops",
            "By replacing their engines manually",
            "Using solar mirrors",
            "By plugging into household wall outlets"
          ],
          "correct": 0,
          "explanation": "The text states buses 'recharge in five minutes at bus stops using roof-mounted conductive panels'."
        },
        {
          "q": "3. What do digital sensors on underground metros help optimize?",
          "options": [
            "The volume of onboard music",
            "Train frequency to prevent overcrowding during rush hours",
            "The price of snacks inside wagons",
            "The color of station walls"
          ],
          "correct": 1,
          "explanation": "The passage notes sensors 'optimize train frequency, preventing overcrowding'."
        },
        {
          "q": "4. What does the integrated mobile app allow commuters to do?",
          "options": [
            "Buy airline tickets worldwide",
            "Use a single contactless digital ticket for bikes, trains, and buses",
            "Drive buses without a driver's license",
            "Control traffic lights remotely"
          ],
          "correct": 1,
          "explanation": "The text confirms apps allow commuters 'using a single contactless digital ticket'."
        }
      ]
    },
    {
      "id": "a2_p12",
      "number": 12,
      "title": "Reading 12: Honeybees and Pollination",
      "badge": "Ecology & Nature • A2",
      "instruction": "Read about honeybees and ecosystems and answer the 4 questions.",
      "passage": "Honeybees are tiny insects that perform an indispensable ecological role: pollination. While collecting sweet nectar from flowers, microscopic pollen grains stick to the fuzzy hairs on a bee's body. When the bee flies to another blossom, it transfers this pollen, enabling plants to reproduce and produce seeds. Scientists estimate that one out of every three bites of food we consume—including apples, strawberries, almonds, and avocados—relies directly on bee pollination. Protecting bees by reducing pesticide use and planting flowering gardens ensures our agricultural food supply remains secure.",
      "questions": [
        {
          "q": "1. What valuable service do honeybees provide to ecosystems?",
          "options": [
            "They clean leaves with water",
            "Pollination, enabling plants to reproduce",
            "They scare away harmful birds",
            "They dig underground tunnels for irrigation"
          ],
          "correct": 1,
          "explanation": "The text highlights their role: 'pollination... enabling plants to reproduce and produce seeds'."
        },
        {
          "q": "2. How does pollen travel between flowers?",
          "options": [
            "It sticks to the fuzzy hairs on the bee's body",
            "Bees carry it in small wooden buckets",
            "It blows away through underground vents",
            "It melts in the nectar"
          ],
          "correct": 0,
          "explanation": "The passage states: 'pollen grains stick to the fuzzy hairs on a bee's body'."
        },
        {
          "q": "3. What proportion of the food we consume depends on bee pollination?",
          "options": [
            "One out of ten bites",
            "One out of every three bites",
            "Nearly 99 percent",
            "Only five percent"
          ],
          "correct": 1,
          "explanation": "The text confirms: 'one out of every three bites of food we consume'."
        },
        {
          "q": "4. How can communities help protect bee populations?",
          "options": [
            "By spraying stronger chemical pesticides",
            "By reducing pesticide use and planting flowering gardens",
            "By keeping bees inside glass boxes",
            "By removing all wildflowers from roadsides"
          ],
          "correct": 1,
          "explanation": "The text recommends 'reducing pesticide use and planting flowering gardens'."
        }
      ]
    },
    {
      "id": "a2_p13",
      "number": 13,
      "title": "Reading 13: Building a Rainwater Harvesting Tank",
      "badge": "Sustainability • A2",
      "instruction": "Read about the student sustainability project and answer the 4 questions.",
      "passage": "To promote water conservation, the student environmental council at Green Valley High constructed a rainwater harvesting system. The project utilized the school's sloping metal roof to capture rainwater during tropical storms. Wide PVC gutters channel the water through a wire mesh filter that removes leaves and debris before storing it in a 2,000-liter storage cistern. The collected water is used exclusively for irrigating the school's vegetable plots and cleaning outdoor corridors, saving thousands of liters of treated municipal tap water each month.",
      "questions": [
        {
          "q": "1. Where does the school capture rainwater?",
          "options": [
            "From an underground natural spring",
            "From the school's sloping metal roof",
            "From the city swimming pool",
            "From air conditioning units"
          ],
          "correct": 1,
          "explanation": "The text states the project 'utilized the school's sloping metal roof'."
        },
        {
          "q": "2. What is the function of the wire mesh filter?",
          "options": [
            "To cool the water down",
            "To remove leaves and debris from the flowing water",
            "To add vitamins to the water",
            "To test the water's speed"
          ],
          "correct": 1,
          "explanation": "The passage explains the filter 'removes leaves and debris'."
        },
        {
          "q": "3. What is the capacity of the storage cistern?",
          "options": [
            "500 liters",
            "1,000 liters",
            "2,000 liters",
            "10,000 liters"
          ],
          "correct": 2,
          "explanation": "The text specifies: 'storing it in a 2,000-liter storage cistern'."
        },
        {
          "q": "4. How is the harvested rainwater used?",
          "options": [
            "For drinking and cooking in the cafeteria",
            "For irrigating vegetable plots and cleaning corridors",
            "It is bottled and sold to neighbors",
            "It is pumped into fire hydrants"
          ],
          "correct": 1,
          "explanation": "The text confirms: 'used exclusively for irrigating the school's vegetable plots and cleaning outdoor corridors'."
        }
      ]
    },
    {
      "id": "a2_p14",
      "number": 14,
      "title": "Reading 14: A Journey through Maya Ruins",
      "badge": "Archaeology & History • A2",
      "instruction": "Read about the archaeological expedition and answer the 4 questions.",
      "passage": "Deep within the dense tropical forests of Central America lie the stone pyramids and plazas of the ancient Maya civilization. During a summer educational trip, ninth-grade students explored the ancient city of Tikal. Their archaeological guide, Dr. Morales, explained that the Maya developed an advanced calendar, a sophisticated hieroglyphic writing system, and remarkable architectural engineering without modern steel machinery. At the summit of Temple IV, standing sixty-five meters above the jungle canopy, students listened to the loud calls of howler monkeys as the sunset illuminated the ancient stone monuments.",
      "questions": [
        {
          "q": "1. What ancient city did the ninth-grade students explore?",
          "options": [
            "Rome",
            "Machu Picchu",
            "Tikal",
            "Athens"
          ],
          "correct": 2,
          "explanation": "The passage explicitly names the city: 'explored the ancient city of Tikal'."
        },
        {
          "q": "2. What intellectual achievement was developed by the ancient Maya?",
          "options": [
            "Steam engines",
            "An advanced calendar and hieroglyphic writing system",
            "Electric lighting",
            "Gunpowder weaponry"
          ],
          "correct": 1,
          "explanation": "Dr. Morales explained the Maya developed 'an advanced calendar, a sophisticated hieroglyphic writing system'."
        },
        {
          "q": "3. How tall is Temple IV?",
          "options": [
            "Twenty meters",
            "Thirty-five meters",
            "Sixty-five meters",
            "One hundred meters"
          ],
          "correct": 2,
          "explanation": "The text says Temple IV stands 'sixty-five meters above the jungle canopy'."
        },
        {
          "q": "4. What animal sounds did the students hear from the temple summit?",
          "options": [
            "Parrots singing songs",
            "Loud calls of howler monkeys",
            "Tigers roaring",
            "Dolphins jumping"
          ],
          "correct": 1,
          "explanation": "The passage mentions they 'listened to the loud calls of howler monkeys'."
        }
      ]
    },
    {
      "id": "a2_p15",
      "number": 15,
      "title": "Reading 15: Young Chefs Cooking Competition",
      "badge": "Culinary Arts • A2",
      "instruction": "Read about the cooking competition and answer the 4 questions.",
      "passage": "Five junior high schools competed in the Junior Master Chef Challenge held at the Culinary Arts Institute. Each two-student team was given a mystery basket containing five secret ingredients: chicken breast, ripe mangoes, fresh cilantro, red bell peppers, and quinoa. The teams had exactly sixty minutes to design, cook, and present a balanced main course. Judges evaluated three criteria: kitchen hygiene, creativity of flavor combinations, and visual plating. The winning dish was an herb-crusted chicken accompanied by a zesty mango salsa and warm seasoned quinoa.",
      "questions": [
        {
          "q": "1. Where was the Junior Master Chef Challenge held?",
          "options": [
            "In a school cafeteria",
            "At the Culinary Arts Institute",
            "In a local bakery",
            "At an outdoor barbecue park"
          ],
          "correct": 1,
          "explanation": "The text states it was held 'at the Culinary Arts Institute'."
        },
        {
          "q": "2. How much time did teams have to prepare their dish?",
          "options": [
            "Thirty minutes",
            "Forty-five minutes",
            "Exactly sixty minutes",
            "Two hours"
          ],
          "correct": 2,
          "explanation": "The passage notes: 'The teams had exactly sixty minutes to design, cook, and present'."
        },
        {
          "q": "3. What were the three judging criteria?",
          "options": [
            "Price, weight, and temperature",
            "Kitchen hygiene, flavor creativity, and visual plating",
            "Cooking speed, noise level, and table decoration",
            "Brand of knives used"
          ],
          "correct": 1,
          "explanation": "The text lists: 'kitchen hygiene, creativity of flavor combinations, and visual plating'."
        },
        {
          "q": "4. What was the winning dish?",
          "options": [
            "Fried fish with potatoes",
            "Herb-crusted chicken with mango salsa and quinoa",
            "Cheese pizza with tomatoes",
            "Beef stew with bread"
          ],
          "correct": 1,
          "explanation": "The winning dish was 'an herb-crusted chicken accompanied by a zesty mango salsa and warm seasoned quinoa'."
        }
      ]
    },
    {
      "id": "a2_p16",
      "number": 16,
      "title": "Reading 16: Protecting Coral Reefs in the Caribbean",
      "badge": "Marine Biology • A2",
      "instruction": "Read about marine conservation and answer the 4 questions.",
      "passage": "Coral reefs are often called the rainforests of the ocean because they support more than twenty-five percent of all marine species, despite covering less than one percent of the seabed. However, rising sea temperatures cause coral bleaching, a dangerous condition where corals expel the microscopic algae that provide them with color and vital nutrients. In response, a marine conservation group in San Andres is cultivating resilient coral fragments in underwater nurseries. Once these fragments mature, divers carefully transplant them onto damaged natural reefs to restore healthy underwater ecosystems.",
      "questions": [
        {
          "q": "1. Why are coral reefs compared to rainforests?",
          "options": [
            "Because they grow tall trees",
            "Because they support over 25 percent of all marine species",
            "Because it rains frequently underwater",
            "Because they are green in color"
          ],
          "correct": 1,
          "explanation": "The text explains they are compared to rainforests 'because they support more than twenty-five percent of all marine species'."
        },
        {
          "q": "2. What happens during coral bleaching?",
          "options": [
            "Corals turn completely black from pollution",
            "Corals expel microscopic algae and lose their color and nutrients",
            "Corals dissolve instantly into sand",
            "Corals grow twice as fast"
          ],
          "correct": 1,
          "explanation": "The text defines bleaching as when 'corals expel the microscopic algae that provide them with color and vital nutrients'."
        },
        {
          "q": "3. Where does the conservation team grow new coral fragments?",
          "options": [
            "In plastic buckets on land",
            "In underwater nurseries",
            "Inside swimming pools",
            "In glass jars in classrooms"
          ],
          "correct": 1,
          "explanation": "The text states the team is 'cultivating resilient coral fragments in underwater nurseries'."
        },
        {
          "q": "4. What do divers do once the coral fragments mature?",
          "options": [
            "Sell them as decorative souvenirs",
            "Transplant them onto damaged natural reefs",
            "Move them to colder oceans",
            "Feed them to wild fish"
          ],
          "correct": 1,
          "explanation": "The passage confirms: 'divers carefully transplant them onto damaged natural reefs'."
        }
      ]
    },
    {
      "id": "a2_p17",
      "number": 17,
      "title": "Reading 17: The Evolution of Video Game Design",
      "badge": "Technology & Careers • A2",
      "instruction": "Read about the history of video games and answer the 4 questions.",
      "passage": "In the early 1980s, video games featured simple two-dimensional pixel sprites and basic eight-bit sound effects. Players controlled simple characters jumping over obstacles on television screens. Over the past four decades, advancements in graphics cards and software engines have transformed gaming into a multidisciplinary art form. Modern video game studios employ hundreds of specialized professionals, including 3D modelers, orchestral composers, screenwriters, and motion-capture actors. Video games are now celebrated not only for entertaining players, but also for telling emotionally powerful stories.",
      "questions": [
        {
          "q": "1. What characterized video games in the early 1980s?",
          "options": [
            "Photorealistic 3D graphics",
            "Simple 2D pixel sprites and basic 8-bit sound effects",
            "Full virtual reality headsets",
            "Voice-controlled characters"
          ],
          "correct": 1,
          "explanation": "The text says early games featured 'simple two-dimensional pixel sprites and basic eight-bit sound effects'."
        },
        {
          "q": "2. What enabled the transformation of video games over four decades?",
          "options": [
            "Advancements in graphics cards and software engines",
            "Lower electricity costs",
            "Smaller television screens",
            "Faster keyboard typing speeds"
          ],
          "correct": 0,
          "explanation": "The passage mentions: 'advancements in graphics cards and software engines'."
        },
        {
          "q": "3. Which professional role is mentioned as working in modern game studios?",
          "options": [
            "Airline pilots",
            "3D modelers and orchestral composers",
            "Automobile mechanics",
            "Undercover detectives"
          ],
          "correct": 1,
          "explanation": "The text highlights: '3D modelers, orchestral composers, screenwriters, and motion-capture actors'."
        },
        {
          "q": "4. Beyond entertainment, what are video games celebrated for today?",
          "options": [
            "Replacing traditional school entirely",
            "Telling emotionally powerful stories",
            "Teaching children how to fly planes",
            "Eliminating all physical books"
          ],
          "correct": 1,
          "explanation": "The text concludes games are celebrated 'for telling emotionally powerful stories'."
        }
      ]
    },
    {
      "id": "a2_p18",
      "number": 18,
      "title": "Reading 18: Mountain Hike and Weather Safety",
      "badge": "Outdoor Safety • A2",
      "instruction": "Read about outdoor mountain safety and answer the 4 questions.",
      "passage": "High mountain environments are known for unpredictable weather that can shift from warm sunshine to freezing sleet in less than an hour. Experienced hikers always pack essential safety gear before embarking on a trail: waterproof breathable jackets, thermal gloves, a high-frequency whistle, and an offline topographical map. If sudden fog covers the mountain ridges, hikers should stop moving immediately and take shelter behind rocks to avoid losing the trail. Experts emphasize that returning early when weather conditions deteriorate is a sign of wisdom, not failure.",
      "questions": [
        {
          "q": "1. How quickly can mountain weather change?",
          "options": [
            "Only across different seasons",
            "Over several weeks",
            "From warm sunshine to freezing sleet in under an hour",
            "Weather never changes in mountains"
          ],
          "correct": 2,
          "explanation": "The text states weather can shift 'in less than an hour'."
        },
        {
          "q": "2. What should hikers pack for weather protection?",
          "options": [
            "Cotton t-shirts only",
            "Waterproof breathable jackets, thermal gloves, and an offline map",
            "Heavy books and radios",
            "Sandals and sunglasses only"
          ],
          "correct": 1,
          "explanation": "The text lists: 'waterproof breathable jackets, thermal gloves, a high-frequency whistle, and an offline topographical map'."
        },
        {
          "q": "3. What should hikers do if dense fog blankets the trail?",
          "options": [
            "Run down the mountain as fast as possible",
            "Stop moving immediately and take shelter behind rocks",
            "Climb the tallest tree",
            "Turn off their flashlights"
          ],
          "correct": 1,
          "explanation": "The text advises hikers 'should stop moving immediately and take shelter behind rocks'."
        },
        {
          "q": "4. What do outdoor experts say about turning back early in bad weather?",
          "options": [
            "It is a sign of cowardice",
            "It is a sign of wisdom, not failure",
            "It requires paying a fine",
            "It ruins the trail for others"
          ],
          "correct": 1,
          "explanation": "The passage confirms: 'returning early when weather conditions deteriorate is a sign of wisdom, not failure'."
        }
      ]
    },
    {
      "id": "a2_p19",
      "number": 19,
      "title": "Reading 19: The Power of Teen Podcasts",
      "badge": "Media & Communication • A2",
      "instruction": "Read about youth audio storytelling and answer the 4 questions.",
      "passage": "Podcasts have emerged as one of the most accessible storytelling mediums for young creators worldwide. With just a standard USB microphone and free editing software, high school students can record interviews, debate cultural issues, and share original audio dramas with global audiences. Fourteen-year-old Sofia hosts 'Teen Minds', a biweekly podcast discussing book recommendations, science news, and study techniques. Over the past year, her show has gained five thousand regular listeners across twelve countries, proving that authentic voices resonate regardless of creator age.",
      "questions": [
        {
          "q": "1. What equipment is needed to create a podcast?",
          "options": [
            "A multi-million dollar recording studio",
            "A standard USB microphone and free editing software",
            "Television broadcasting satellites",
            "Heavy printed manuals"
          ],
          "correct": 1,
          "explanation": "The text explains: 'With just a standard USB microphone and free editing software'."
        },
        {
          "q": "2. What is the name of Sofia's podcast?",
          "options": [
            "Youth News Today",
            "Teen Minds",
            "Science Weekly",
            "The Student Voice"
          ],
          "correct": 1,
          "explanation": "The passage mentions Sofia hosts 'Teen Minds'."
        },
        {
          "q": "3. What topics does Sofia discuss on her show?",
          "options": [
            "Car repairs and sports betting",
            "Book recommendations, science news, and study techniques",
            "Celebrity gossip exclusively",
            "Cooking meat"
          ],
          "correct": 1,
          "explanation": "The text lists: 'book recommendations, science news, and study techniques'."
        },
        {
          "q": "4. How many regular listeners does Sofia's podcast have?",
          "options": [
            "Fifty listeners",
            "Five hundred listeners",
            "Five thousand regular listeners across twelve countries",
            "One million listeners"
          ],
          "correct": 2,
          "explanation": "The text notes: 'five thousand regular listeners across twelve countries'."
        }
      ]
    },
    {
      "id": "a2_p20",
      "number": 20,
      "title": "Reading 20: Renewable Energy in Rural Towns",
      "badge": "Clean Energy • A2",
      "instruction": "Read about clean power in remote communities and answer the 4 questions.",
      "passage": "For decades, the remote mountain village of San Isidro relied on diesel generators that produced noisy fumes and frequent power outages. Two years ago, a partnership between engineers and local leaders installed a hybrid renewable energy microgrid. The system combines forty rooftop solar panels with a small hydroelectric turbine powered by a mountain stream. The clean energy generated is stored in lithium battery banks, providing uninterrupted green electricity for the village health clinic, primary school, and twenty homes without burning fossil fuels.",
      "questions": [
        {
          "q": "1. How did San Isidro generate electricity before the project?",
          "options": [
            "Nuclear power plants",
            "Diesel generators with noisy fumes and frequent outages",
            "Imported coal",
            "They had no lights at all"
          ],
          "correct": 1,
          "explanation": "The text states the village relied on 'diesel generators that produced noisy fumes and frequent power outages'."
        },
        {
          "q": "2. What two renewable sources power the village microgrid?",
          "options": [
            "Windmills and ocean waves",
            "Rooftop solar panels and a hydroelectric stream turbine",
            "Wood burning and geothermal steam",
            "Gasoline and batteries"
          ],
          "correct": 1,
          "explanation": "The text says the system combines 'forty rooftop solar panels with a small hydroelectric turbine'."
        },
        {
          "q": "3. Where is the clean energy stored for nighttime use?",
          "options": [
            "In giant water tanks",
            "In lithium battery banks",
            "In underground caves",
            "In car engines"
          ],
          "correct": 1,
          "explanation": "The passage notes energy is stored 'in lithium battery banks'."
        },
        {
          "q": "4. What facilities benefit from the clean electricity?",
          "options": [
            "A shopping mall and casino",
            "The village health clinic, primary school, and twenty homes",
            "An airport and hotel",
            "A factory"
          ],
          "correct": 1,
          "explanation": "The text confirms it provides electricity for 'the village health clinic, primary school, and twenty homes'."
        }
      ]
    },
    {
      "id": "a2_p21",
      "number": 21,
      "title": "Reading 21: Internship at the Botanical Garden",
      "badge": "Career Exploration • A2",
      "instruction": "Read about a summer work experience and answer the 4 questions.",
      "passage": "During the summer vacation, fifteen-year-old Daniel completed a four-week youth internship at the National Botanical Garden. Working alongside professional horticulturists, Daniel learned how to identify endemic orchid species, regulate greenhouse humidity levels, and prepare organic compost from fallen leaves. He also guided weekend visitors along the medicinal plant trail, explaining traditional uses of herbs like chamomile and rosemary. Daniel reflected that this real-world experience confirmed his ambition to study environmental biology at university.",
      "questions": [
        {
          "q": "1. Where did Daniel do his four-week summer internship?",
          "options": [
            "At a veterinarian clinic",
            "At the National Botanical Garden",
            "In a city supermarket",
            "At an engineering workshop"
          ],
          "correct": 1,
          "explanation": "The text states Daniel completed an internship 'at the National Botanical Garden'."
        },
        {
          "q": "2. What plant species did Daniel learn to identify?",
          "options": [
            "Desert cacti only",
            "Endemic orchid species",
            "Poisonous mushrooms",
            "Pond algae"
          ],
          "correct": 1,
          "explanation": "The text mentions he learned 'how to identify endemic orchid species'."
        },
        {
          "q": "3. What was Daniel's duty with weekend visitors?",
          "options": [
            "Selling tickets and cold drinks",
            "Guiding visitors and explaining traditional uses of medicinal herbs",
            "Cleaning the car parking lot",
            "Taking visitor photographs"
          ],
          "correct": 1,
          "explanation": "The text says he 'guided weekend visitors... explaining traditional uses of herbs'."
        },
        {
          "q": "4. What university career does Daniel want to pursue?",
          "options": [
            "Architecture",
            "Civil engineering",
            "Environmental biology",
            "Business management"
          ],
          "correct": 2,
          "explanation": "The passage concludes: 'confirmed his ambition to study environmental biology at university'."
        }
      ]
    }
  ],
  "b1": [
    {
      "id": "b1_p1",
      "number": 1,
      "title": "Reading 1: Teen Digital Entrepreneurs",
      "badge": "ICFES Saber 9° • B1",
      "instruction": "Read the informational text and answer the 4 critical comprehension questions.",
      "passage": "Across Latin America, an increasing number of teenagers are leveraging digital platforms to launch creative enterprises. Rather than viewing smartphones merely as entertainment devices, youth are designing mobile applications, editing videos for international clients, and selling customized digital artwork. Economists highlight that digital entrepreneurship equips young individuals with vital 21st-century competencies, such as algorithmic thinking, financial literacy, and intercultural communication. However, educators also caution that students must balance their entrepreneurial ambitions with academic responsibilities. Maintaining adequate sleep, completing secondary coursework, and engaging in physical exercise remain indispensable for holistic adolescent development.",
      "questions": [
        {
          "q": "1. What is the author's primary attitude toward teenage digital entrepreneurship?",
          "options": [
            "Completely hostile and dismissive",
            "Constructively positive while highlighting the necessity of balance",
            "Indifferent to modern youth trends",
            "Strictly concerned with government taxation"
          ],
          "correct": 1,
          "explanation": "The text praises the valuable skills gained while warning that students must balance work with academics and health."
        },
        {
          "q": "2. Which of the following is cited as a skill developed by young digital entrepreneurs?",
          "options": [
            "Automotive mechanics",
            "Algorithmic thinking and financial literacy",
            "Industrial chemical manufacturing",
            "Heavy equipment operation"
          ],
          "correct": 1,
          "explanation": "Paragraph 1 highlights 'algorithmic thinking, financial literacy, and intercultural communication'."
        },
        {
          "q": "3. What concern do educators express regarding teen entrepreneurs?",
          "options": [
            "They might neglect coursework, sleep, and physical health",
            "They will earn too much foreign currency",
            "Digital skills will become obsolete quickly",
            "Clients will refuse to pay teenagers"
          ],
          "correct": 0,
          "explanation": "Educators caution that students must maintain adequate sleep, coursework, and exercise."
        },
        {
          "q": "4. The word 'indispensable' in the last sentence is closest in meaning to:",
          "options": [
            "Optional",
            "Essential",
            "Dangerous",
            "Expensive"
          ],
          "correct": 1,
          "explanation": "'Indispensable' means absolutely necessary or essential for proper functioning."
        }
      ]
    },
    {
      "id": "b1_p2",
      "number": 2,
      "title": "Reading 2: Social Media and Adolescent Well-Being",
      "badge": "Psychology & Society • B1",
      "instruction": "Read the psychology article and answer the 4 questions.",
      "passage": "The ubiquitous presence of social networking platforms has profoundly transformed adolescent interpersonal socialization. While these platforms facilitate collaborative academic peer groups and global friendships, clinical psychologists express concern regarding passive consumption patterns. Prolonged scrolling through idealized digital representations frequently fosters social comparison, triggering heightened anxiety and diminished self-esteem among vulnerable teens. Conversely, proactive engagement—such as participating in interest-based forums, creative content authoring, and direct messaging with established friends—tends to correlate with positive emotional outcomes. Researchers conclude that digital literacy curricula must emphasize deliberate digital hygiene rather than advocating for total technological disconnection.",
      "questions": [
        {
          "q": "1. What distinction do psychologists make regarding social media use?",
          "options": [
            "Between using smartphones versus desktop computers",
            "Between passive scrolling and proactive, meaningful engagement",
            "Between morning and nighttime usage",
            "Between video streaming and music listening"
          ],
          "correct": 1,
          "explanation": "The text contrasts 'passive consumption patterns' with 'proactive engagement'."
        },
        {
          "q": "2. What negative outcome is associated with passive digital consumption?",
          "options": [
            "Loss of hearing acuity",
            "Heightened social comparison, anxiety, and diminished self-esteem",
            "Severe memory loss",
            "Inability to type properly"
          ],
          "correct": 1,
          "explanation": "The passage notes passive scrolling triggers 'social comparison, triggering heightened anxiety and diminished self-esteem'."
        },
        {
          "q": "3. Which behavior correlates with positive psychological outcomes on social media?",
          "options": [
            "Constantly checking follower metrics",
            "Participating in interest-based forums and direct communication with friends",
            "Posting anonymously to critique strangers",
            "Ignoring all digital messages"
          ],
          "correct": 1,
          "explanation": "The text identifies 'participating in interest-based forums, creative content authoring, and direct messaging with established friends'."
        },
        {
          "q": "4. What pedagogical approach do researchers recommend regarding adolescent digital habits?",
          "options": [
            "Enforcing complete bans on electronic devices",
            "Teaching deliberate digital hygiene and media literacy",
            "Taxing social media companies exclusively",
            "Eliminating all online communication in schools"
          ],
          "correct": 1,
          "explanation": "The final sentence recommends emphasizing 'deliberate digital hygiene rather than advocating for total technological disconnection'."
        }
      ]
    },
    {
      "id": "b1_p3",
      "number": 3,
      "title": "Reading 3: The Global Challenge of E-Waste",
      "badge": "Environmental Science • B1",
      "instruction": "Read the environmental report and answer the 4 questions.",
      "passage": "Electronic waste, commonly designated as e-waste, represents the fastest-growing municipal solid waste stream on the planet. Millions of discarded smartphones, laptops, monitors, and tablets are dumped annually into informal scrap repositories. These devices contain hazardous heavy metals—such as lead, mercury, and cadmium—that leach into subterranean aquifers and agricultural soils, posing acute health hazards to nearby populations. Simultaneously, e-waste contains significant quantities of precious elements, including gold, copper, and rare-earth minerals. Environmental economists argue that adopting circular design policies, which require manufacturers to design modular electronics that are easily dismantled and recycled, is essential to counteract this ecological crisis.",
      "questions": [
        {
          "q": "1. Why does e-waste represent a critical environmental danger?",
          "options": [
            "It occupies more space than organic waste",
            "It leaches hazardous heavy metals like lead and mercury into soil and water",
            "It causes electronic devices to explode",
            "It prevents computers from being manufactured"
          ],
          "correct": 1,
          "explanation": "The passage states hazardous heavy metals 'leach into subterranean aquifers and agricultural soils'."
        },
        {
          "q": "2. What valuable economic resources are discarded within electronic devices?",
          "options": [
            "Crude petroleum",
            "Precious elements such as gold, copper, and rare-earth minerals",
            "Synthetic rubber",
            "Industrial diamonds"
          ],
          "correct": 1,
          "explanation": "The text highlights: 'significant quantities of precious elements, including gold, copper, and rare-earth minerals'."
        },
        {
          "q": "3. What does the proposed 'circular design policy' require manufacturers to do?",
          "options": [
            "Lower the retail price of consumer electronics",
            "Design modular electronics that can be easily dismantled and recycled",
            "Sell only one smartphone per customer",
            "Export all waste to remote islands"
          ],
          "correct": 1,
          "explanation": "The text specifies policies 'require manufacturers to design modular electronics that are easily dismantled and recycled'."
        },
        {
          "q": "4. The word 'subterranean' in the text refers to something located:",
          "options": [
            "High in the atmosphere",
            "Beneath the surface of the Earth",
            "Inside ocean waves",
            "In urban skyscrapers"
          ],
          "correct": 1,
          "explanation": "'Subterranean' means underground or beneath the Earth's surface."
        }
      ]
    },
    {
      "id": "b1_p4",
      "number": 4,
      "title": "Reading 4: Algorithmic Personalization & Critical Thinking",
      "badge": "Digital Literacy • B1",
      "instruction": "Read about digital information ecosystems and answer the 4 questions.",
      "passage": "Modern search engines and content streaming platforms employ machine learning algorithms to personalize the information presented to individual users. By analyzing browsing history, geographic coordinates, and engagement velocity, algorithms curate feeds that maximize user retention. However, media analysts caution that algorithmic personalization often creates 'echo chambers' or 'filter bubbles'—digital environments where users are exposed exclusively to viewpoints that reinforce their preexisting biases. When consumers rarely encounter dissenting perspectives or nuanced reporting, societal polarization intensifies. Consequently, educators argue that secondary students must cultivate algorithmic awareness, actively seeking diverse international sources to evaluate contentious global issues objectively.",
      "questions": [
        {
          "q": "1. What is the primary commercial goal of content personalization algorithms?",
          "options": [
            "To educate citizens about world history",
            "To maximize user retention and engagement on the platform",
            "To reduce battery consumption on devices",
            "To protect copyright laws"
          ],
          "correct": 1,
          "explanation": "The passage states algorithms curate feeds 'that maximize user retention'."
        },
        {
          "q": "2. What is an 'echo chamber' according to the passage?",
          "options": [
            "A room with specialized sound insulation",
            "A digital environment that reinforces preexisting biases by hiding dissenting views",
            "A software program that repeats audio files",
            "A physical concert hall for orchestra practice"
          ],
          "correct": 1,
          "explanation": "The text defines it as an environment where users are 'exposed exclusively to viewpoints that reinforce their preexisting biases'."
        },
        {
          "q": "3. What negative societal consequence results from algorithmic filter bubbles?",
          "options": [
            "Decreased internet speeds",
            "Intensified societal polarization",
            "Failure of electronic hardware",
            "Loss of digital music tracks"
          ],
          "correct": 1,
          "explanation": "The text notes: 'When consumers rarely encounter dissenting perspectives... societal polarization intensifies'."
        },
        {
          "q": "4. What pedagogical solution do educators advocate?",
          "options": [
            "Prohibiting all search engine access in schools",
            "Encouraging students to actively seek diverse international viewpoints",
            "Requiring companies to pay students for reading news",
            "Deleting all personal accounts"
          ],
          "correct": 1,
          "explanation": "Educators argue students must 'cultivate algorithmic awareness, actively seeking diverse international sources'."
        }
      ]
    },
    {
      "id": "b1_p5",
      "number": 5,
      "title": "Reading 5: The Fast Fashion Dilemma",
      "badge": "Consumer Ethics • B1",
      "instruction": "Read about the global textile industry and answer the 4 questions.",
      "passage": "The fast fashion industry has revolutionized retail by replicating runway trends and delivering inexpensive garments to retail stores in unprecedented turnaround times. While this democratizes access to contemporary apparel, the ecological and human repercussions are catastrophic. Textile manufacturing requires colossal volumes of water and relies heavily on petroleum-based synthetic fibers like polyester, which shed microplastics into aquatic food chains during residential washing. Furthermore, pressure to minimize manufacturing costs frequently leads to precarious working conditions and substandard wages in developing export nations. Ethical consumerism initiatives encourage adolescents to embrace thrift shopping, repair existing apparel, and demand transparency regarding corporate supply chains.",
      "questions": [
        {
          "q": "1. What commercial advantage has fast fashion provided to consumers?",
          "options": [
            "Garments that last for fifty years",
            "Affordable access to trendy garments delivered in record time",
            "Free clothing for secondary school students",
            "Custom-tailored silk suits"
          ],
          "correct": 1,
          "explanation": "The text explains it delivers 'inexpensive garments to retail stores in unprecedented turnaround times'."
        },
        {
          "q": "2. How does washing synthetic polyester clothing harm the environment?",
          "options": [
            "It consumes all household electricity",
            "It sheds microplastics into aquatic food chains",
            "It produces carbon monoxide gas in laundry rooms",
            "It destroys washing machines"
          ],
          "correct": 1,
          "explanation": "The passage states synthetic fibers 'shed microplastics into aquatic food chains during residential washing'."
        },
        {
          "q": "3. What socio-economic problem is linked to minimizing apparel production costs?",
          "options": [
            "Overpaying textile workers",
            "Precarious working conditions and substandard wages in export nations",
            "Shortage of cotton seeds",
            "High shipping taxes"
          ],
          "correct": 1,
          "explanation": "The text highlights: 'precarious working conditions and substandard wages in developing export nations'."
        },
        {
          "q": "4. What alternative practices does ethical consumerism promote among teenagers?",
          "options": [
            "Purchasing fast fashion garments weekly",
            "Thrifting, repairing existing apparel, and demanding corporate supply chain transparency",
            "Burning unused clothing",
            "Ignoring textile production origins"
          ],
          "correct": 1,
          "explanation": "The text recommends teens 'embrace thrift shopping, repair existing apparel, and demand transparency'."
        }
      ]
    },
    {
      "id": "b1_p6",
      "number": 6,
      "title": "Reading 6: Artificial Intelligence in Classrooms",
      "badge": "Education & Future • B1",
      "instruction": "Read the analysis of educational technology and answer the 4 questions.",
      "passage": "The integration of generative artificial intelligence into secondary education has ignited vigorous debate among pedagogues. Advocates emphasize that adaptive learning systems can act as personalized tutors, tailoring explanations to each student's pace, detecting mathematical misconceptions in real time, and generating interactive practice problems. Conversely, skeptics caution that over-reliance on generative tools could erode foundational cognitive skills, such as reading stamina, authentic voice, and algorithmic problem-solving. Educational theorists suggest that rather than banning generative technology, educational institutions must design assessment frameworks that evaluate meta-cognition, oral defense of concepts, and collaborative project-based inquiry.",
      "questions": [
        {
          "q": "1. What major pedagogical benefit do proponents of classroom AI highlight?",
          "options": [
            "Automated grading that gives everyone top marks",
            "Adaptive tutoring that personalizes explanations and targets misconceptions",
            "Replacing human teachers entirely",
            "Eliminating all homework assignments"
          ],
          "correct": 1,
          "explanation": "Proponents note AI systems can 'tailor explanations to each student's pace, detecting mathematical misconceptions'."
        },
        {
          "q": "2. What cognitive risk concerns educational skeptics?",
          "options": [
            "Physical eye fatigue only",
            "The erosion of foundational reading stamina, authentic voice, and independent problem-solving",
            "Inability to use computer keyboards",
            "Loss of spoken vocabulary"
          ],
          "correct": 1,
          "explanation": "Skeptics caution AI over-reliance could 'erode foundational cognitive skills, such as reading stamina, authentic voice'."
        },
        {
          "q": "3. What assessment model do educational theorists recommend instead of technology bans?",
          "options": [
            "Multiple-choice standardized tests exclusively",
            "Assessing meta-cognition, oral concept defense, and project-based inquiry",
            "Pen-and-paper spelling bees",
            "Prohibiting home computers"
          ],
          "correct": 1,
          "explanation": "The text suggests assessments that 'evaluate meta-cognition, oral defense of concepts, and collaborative project-based inquiry'."
        },
        {
          "q": "4. The word 'stamina' in paragraph 2 is closest in meaning to:",
          "options": [
            "Endurance and sustained capacity",
            "Fragility and weakness",
            "Speed of running",
            "Visual sharpness"
          ],
          "correct": 0,
          "explanation": "'Stamina' refers to the ability to sustain mental or physical effort over an extended period."
        }
      ]
    },
    {
      "id": "b1_p7",
      "number": 7,
      "title": "Reading 7: Urban Green Spaces & Mental Health",
      "badge": "Urban Planning • B1",
      "instruction": "Read about urban ecology and answer the 4 questions.",
      "passage": "As modern metropolises grow denser, urban planners are recognizing that municipal parks, tree-lined boulevards, and community gardens are not decorative luxuries, but essential public health infrastructure. Epidemiological studies demonstrate that spending as little as twenty minutes in biodiverse green spaces significantly reduces physiological markers of stress, including salivary cortisol levels and elevated blood pressure. Furthermore, urban vegetation combats the 'heat island effect' by shading paved asphalt and transpiring cooling water vapor, reducing city temperatures by up to three degrees Celsius. Forward-thinking municipalities are passing zoning laws requiring all residents to live within a ten-minute walk of a certified green zone.",
      "questions": [
        {
          "q": "1. How do modern urban planners view city parks and vegetation?",
          "options": [
            "As decorative luxuries that waste space",
            "As essential public health infrastructure",
            "As commercial areas for shopping centers",
            "As zones reserved only for athletes"
          ],
          "correct": 1,
          "explanation": "The text notes green spaces are 'not decorative luxuries, but essential public health infrastructure'."
        },
        {
          "q": "2. What physiological response occurs after spending twenty minutes in a green space?",
          "options": [
            "Blood sugar spikes dramatically",
            "Significant reduction in cortisol stress levels and blood pressure",
            "Temporary memory loss",
            "Heightened adrenaline production"
          ],
          "correct": 1,
          "explanation": "Studies demonstrate it 'significantly reduces physiological markers of stress, including salivary cortisol levels'."
        },
        {
          "q": "3. How does urban vegetation counteract the 'heat island effect'?",
          "options": [
            "By blowing industrial fans",
            "By shading asphalt and transpiring cooling water vapor",
            "By reflecting sunlight with giant mirrors",
            "By freezing pavement overnight"
          ],
          "correct": 1,
          "explanation": "The text explains vegetation acts 'by shading paved asphalt and transpiring cooling water vapor'."
        },
        {
          "q": "4. What zoning mandate are progressive municipalities adopting?",
          "options": [
            "Banning private automobiles permanently",
            "Ensuring every resident lives within a ten-minute walk of a green zone",
            "Planting only plastic trees",
            "Charging admission fees for public parks"
          ],
          "correct": 1,
          "explanation": "The passage highlights laws 'requiring all residents to live within a ten-minute walk of a certified green zone'."
        }
      ]
    },
    {
      "id": "b1_p8",
      "number": 8,
      "title": "Reading 8: Space Debris: Orbital Traffic Jam",
      "badge": "Aerospace Science • B1",
      "instruction": "Read the aerospace article and answer the 4 questions.",
      "passage": "Since the dawn of the space age with Sputnik in 1957, humanity has launched thousands of rockets and satellites into low Earth orbit. Today, space agencies track more than thirty thousand individual pieces of orbital debris larger than a softball, ranging from spent rocket boosters to defunct communication satellites and dropped astronaut tools. Traveling at hyper-velocity speeds exceeding 28,000 kilometers per hour, even a millimeter-sized paint fleck carries enough kinetic energy to puncture pressurized spacecraft hulls or shatter satellite solar arrays. Aerospace engineers are testing active debris-removal technologies, such as magnetic docking arms and deployable harpoons, to prevent the 'Kessler Syndrome'—a theoretical chain reaction where colliding debris generates cascading fields of destructive fragments.",
      "questions": [
        {
          "q": "1. How many pieces of orbital debris larger than a softball are currently tracked?",
          "options": [
            "Around five hundred",
            "Exactly five thousand",
            "More than thirty thousand",
            "Over ten million"
          ],
          "correct": 2,
          "explanation": "The text states agencies track 'more than thirty thousand individual pieces of orbital debris'."
        },
        {
          "q": "2. At what speed does orbital space debris travel in low Earth orbit?",
          "options": [
            "500 km/h",
            "2,500 km/h",
            "Exceeding 28,000 kilometers per hour",
            "At the speed of light"
          ],
          "correct": 2,
          "explanation": "The text notes: 'Traveling at hyper-velocity speeds exceeding 28,000 kilometers per hour'."
        },
        {
          "q": "3. What is the 'Kessler Syndrome' described in the passage?",
          "options": [
            "A human disease caused by zero gravity",
            "A cascading chain reaction of orbital collisions generating more debris",
            "The loss of satellite radio signals during solar flares",
            "A computer glitch in spacecraft guidance"
          ],
          "correct": 1,
          "explanation": "The passage defines it as 'a theoretical chain reaction where colliding debris generates cascading fields of destructive fragments'."
        },
        {
          "q": "4. Which active debris-removal mechanism is being developed by engineers?",
          "options": [
            "Laser cannons on Earth",
            "Magnetic docking arms and deployable harpoons",
            "Blowing debris toward the moon",
            "Painting debris black to hide it"
          ],
          "correct": 1,
          "explanation": "The text lists technologies such as 'magnetic docking arms and deployable harpoons'."
        }
      ]
    },
    {
      "id": "b1_p9",
      "number": 9,
      "title": "Reading 9: Financial Literacy for Teens",
      "badge": "Economics & Life Skills • B1",
      "instruction": "Read about personal finance for adolescents and answer the 4 questions.",
      "passage": "Financial literacy remains one of the most critical yet frequently overlooked components of secondary curricula. Economists argue that understanding compound interest, budgeting, and debt structures during adolescence establishes the foundation for lifelong economic autonomy. One of the most vital principles is the concept of compound growth: when interest earned on savings is reinvested, it begins generating interest on itself, compounding exponentially over time. Conversely, misunderstanding revolving credit card interest can trap young adults in cycles of financial strain. Educators recommend that high schoolers practice managing a simple 50-30-20 budget—allocating 50 percent of income to necessities, 30 percent to personal wants, and 20 percent to disciplined savings.",
      "questions": [
        {
          "q": "1. What is the author's primary argument regarding financial literacy?",
          "options": [
            "It should be taught only to university economics majors",
            "It is a vital competency that establishes lifelong economic autonomy",
            "It has become unnecessary due to digital banking apps",
            "It encourages teenagers to take risky loans"
          ],
          "correct": 1,
          "explanation": "The text argues understanding financial principles 'establishes the foundation for lifelong economic autonomy'."
        },
        {
          "q": "2. How does compound interest operate according to the passage?",
          "options": [
            "Banks take a percentage of deposits every week",
            "Interest earned is reinvested and generates interest on itself over time",
            "Interest decreases as savings increase",
            "It is calculated only once every decade"
          ],
          "correct": 1,
          "explanation": "The text explains: 'interest earned on savings is reinvested, it begins generating interest on itself'."
        },
        {
          "q": "3. What is the suggested breakdown of the 50-30-20 budget framework?",
          "options": [
            "50% savings, 30% taxes, 20% entertainment",
            "50% necessities, 30% personal wants, 20% savings",
            "50% entertainment, 30% food, 20% clothes",
            "50% investments, 30% rent, 20% travel"
          ],
          "correct": 1,
          "explanation": "The passage specifies: '50 percent... to necessities, 30 percent to personal wants, and 20 percent to disciplined savings'."
        },
        {
          "q": "4. The word 'autonomy' in the first paragraph is closest in meaning to:",
          "options": [
            "Independence and self-governance",
            "Confusion and debt",
            "Government supervision",
            "Total isolation"
          ],
          "correct": 0,
          "explanation": "'Autonomy' refers to the ability to make independent decisions and maintain self-sufficiency."
        }
      ]
    },
    {
      "id": "b1_p10",
      "number": 10,
      "title": "Reading 10: The Psychology of Habit Formation",
      "badge": "Behavioral Science • B1",
      "instruction": "Read about neuroplasticity and habits and answer the 4 questions.",
      "passage": "Human behavior is profoundly governed by automatic cognitive loops known as habits. Neuroscientists explain that the brain establishes habits to conserve mental energy, delegating repetitive actions to the basal ganglia rather than exhausting the conscious prefrontal cortex. Behavioral psychologists break this process into the 'habit loop': a specific cue, a routine action, and a neurological reward. For instance, receiving a phone notification (cue) prompts checking an app (routine), delivering a brief surge of dopamine (reward). To alter an undesirable habit, researchers advise maintaining the established cue and reward while deliberately substituting the routine—such as substituting five minutes of mindful stretching when feeling mental fatigue instead of mindless scrolling.",
      "questions": [
        {
          "q": "1. Why does the human brain construct automatic habits?",
          "options": [
            "To avoid learning foreign languages",
            "To conserve mental energy by automating routine actions",
            "Because the prefrontal cortex stops working at night",
            "To force muscles to grow faster"
          ],
          "correct": 1,
          "explanation": "The text explains: 'the brain establishes habits to conserve mental energy'."
        },
        {
          "q": "2. What three stages comprise the 'habit loop'?",
          "options": [
            "Desire, action, regret",
            "Cue, routine action, and neurological reward",
            "Morning, afternoon, evening",
            "Input, processing, output"
          ],
          "correct": 1,
          "explanation": "The text outlines: 'a specific cue, a routine action, and a neurological reward'."
        },
        {
          "q": "3. What neurotransmitter is associated with the reward stage?",
          "options": [
            "Melatonin",
            "Adrenaline",
            "Dopamine",
            "Cortisol"
          ],
          "correct": 2,
          "explanation": "The passage mentions checking the app delivers 'a brief surge of dopamine (reward)'."
        },
        {
          "q": "4. What is the recommended strategy for modifying an unwanted habit?",
          "options": [
            "Eliminating all cues from your life completely",
            "Maintaining the cue and reward while substituting the routine behavior",
            "Punishing oneself with severe physical exercise",
            "Pretending the habit does not exist"
          ],
          "correct": 1,
          "explanation": "Researchers advise 'maintaining the established cue and reward while deliberately substituting the routine'."
        }
      ]
    },
    {
      "id": "b1_p11",
      "number": 11,
      "title": "Reading 11: Cognitive Benefits of Bilingualism",
      "badge": "Linguistics & Brain • B1",
      "instruction": "Read about bilingual language processing and answer the 4 questions.",
      "passage": "For decades, pedagogical myths suggested that learning two languages concurrently during childhood could delay speech milestones. Contemporary neuroimaging has entirely disproven this misconception. Cognitive neuroscientists have discovered that managing multiple linguistic systems serves as an intensive cognitive workout for the brain. Bilingual individuals display heightened executive control, enabling them to filter irrelevant distractions, switch between analytical tasks with greater agility, and resolve conflicting information efficiently. This heightened mental flexibility stems from the brain's constant need to inhibit the dormant language while activating the target tongue during active conversation.",
      "questions": [
        {
          "q": "1. What former pedagogical belief does modern research disprove?",
          "options": [
            "That bilingualism improves listening acuity",
            "That learning two languages concurrently causes developmental delays",
            "That languages share grammatical roots",
            "That adults can learn foreign vocabulary"
          ],
          "correct": 1,
          "explanation": "The passage notes old myths claimed learning two languages 'could delay speech milestones'."
        },
        {
          "q": "2. Which cognitive capability is enhanced in bilingual individuals?",
          "options": [
            "Executive control and task switching",
            "Nighttime vision acuity",
            "Finger dexterity for typing",
            "Mathematical rote memorization exclusively"
          ],
          "correct": 0,
          "explanation": "The text highlights: 'Bilingual individuals display heightened executive control, enabling them to... switch between analytical tasks'."
        },
        {
          "q": "3. Why does bilingualism act as an intensive cognitive workout for the brain?",
          "options": [
            "Because bilinguals read twice as fast as monolinguals",
            "Because the brain must constantly inhibit the non-active language while speaking",
            "Because two languages require separate physical brains",
            "Because grammar rules cause physical muscle contraction"
          ],
          "correct": 1,
          "explanation": "Mental flexibility stems from 'the brain's constant need to inhibit the dormant language while activating the target tongue'."
        },
        {
          "q": "4. The word 'inhibit' in the last sentence means to:",
          "options": [
            "Accelerate",
            "Suppress or hold back",
            "Translate directly",
            "Shout loudly"
          ],
          "correct": 1,
          "explanation": "'Inhibit' means to restrain, suppress, or prevent an action or process from occurring."
        }
      ]
    },
    {
      "id": "b1_p12",
      "number": 12,
      "title": "Reading 12: Renewable vs Nuclear Energy",
      "badge": "Energy Policy • B1",
      "instruction": "Read the energy debate article and answer the 4 questions.",
      "passage": "As global economies strive to decarbonize power generation, energy analysts are evaluating the trade-offs between renewable infrastructure and next-generation nuclear energy. Solar and wind systems have experienced precipitous cost declines over the past decade, enabling rapid deployment without producing greenhouse gases or radioactive byproducts. However, their output is inherently intermittent, requiring utility-scale storage batteries or backup capacity when the sun sets or winds diminish. In contrast, modern nuclear reactors provide continuous, baseload zero-carbon electricity with small geographic footprints. Yet, high capital costs, decade-long construction timelines, and unresolved long-term waste disposal remain persistent obstacles. Most climate scientists conclude that a diversified energy portfolio combining both technologies offers the most realistic path to carbon neutrality.",
      "questions": [
        {
          "q": "1. What major advantage has catalyzed the deployment of wind and solar energy?",
          "options": [
            "They work equally well day and night",
            "Precipitous cost declines and absence of greenhouse emissions",
            "They require no maintenance ever",
            "They consume no land space"
          ],
          "correct": 1,
          "explanation": "The text highlights solar and wind have experienced 'precipitous cost declines... enabling rapid deployment'."
        },
        {
          "q": "2. What is the fundamental challenge of solar and wind generation?",
          "options": [
            "They produce toxic radioactive fumes",
            "Intermittency dependent on environmental conditions",
            "They cannot be connected to power grids",
            "They cause severe air pollution"
          ],
          "correct": 1,
          "explanation": "The passage states: 'their output is inherently intermittent, requiring utility-scale storage batteries'."
        },
        {
          "q": "3. What is cited as a notable advantage of modern nuclear reactors?",
          "options": [
            "Zero construction costs",
            "Continuous, baseload zero-carbon electricity on small geographic footprints",
            "They can be built in two weeks",
            "They generate free household water"
          ],
          "correct": 1,
          "explanation": "The text states nuclear provides 'continuous, baseload zero-carbon electricity with small geographic footprints'."
        },
        {
          "q": "4. What conclusion do most climate scientists reach regarding energy transition?",
          "options": [
            "Fossil fuels should remain the only energy source",
            "A diversified energy portfolio combining both renewables and nuclear is optimal",
            "All cities must eliminate electricity completely",
            "Wind power should be banned"
          ],
          "correct": 1,
          "explanation": "Scientists conclude 'a diversified energy portfolio combining both technologies offers the most realistic path'."
        }
      ]
    },
    {
      "id": "b1_p13",
      "number": 13,
      "title": "Reading 13: Combatting Cyberbullying",
      "badge": "Digital Citizenship • B1",
      "instruction": "Read about digital ethics and peer support and answer the 4 questions.",
      "passage": "Unlike traditional schoolyard bullying, cyberbullying transcends physical boundaries, infiltrating a teenager's private home environment through digital notifications at all hours. Cruelly manipulated photographs, exclusionary gaming groups, and malicious anonymous comments can inflict severe psychological harm on developing adolescents. Sociologists emphasize the pivotal role of 'upstanders'—peers who refuse to remain passive bystanders when witnessing digital harassment. Upstanders document abusive behavior, report incidents to platform moderators, and offer direct private solidarity to targeted peers. Digital citizenship education teaches adolescents that empathy, online accountability, and bystander intervention are vital for fostering healthy, supportive online ecosystems.",
      "questions": [
        {
          "q": "1. Why can cyberbullying be more pervasive than traditional bullying?",
          "options": [
            "It only happens during school hours",
            "It transcends physical boundaries and infiltrates private homes at all hours",
            "It costs money to send messages",
            "It only affects adults"
          ],
          "correct": 1,
          "explanation": "The text explains it 'transcends physical boundaries, infiltrating a teenager's private home environment... at all hours'."
        },
        {
          "q": "2. What distinguishes an 'upstander' from a passive bystander?",
          "options": [
            "Upstanders retaliate with physical aggression",
            "Upstanders document abuse, report harassment, and offer private solidarity",
            "Upstanders delete their own social accounts",
            "Upstanders ignore what is happening"
          ],
          "correct": 1,
          "explanation": "The passage notes upstanders 'document abusive behavior, report incidents... and offer direct private solidarity'."
        },
        {
          "q": "3. What psychological impact can malicious anonymous comments have on teens?",
          "options": [
            "They improve academic grades",
            "They can inflict severe psychological distress and emotional harm",
            "They accelerate reading speed",
            "They eliminate fear of failure"
          ],
          "correct": 1,
          "explanation": "The text states digital harassment can 'inflict severe psychological harm on developing adolescents'."
        },
        {
          "q": "4. What is the overarching objective of digital citizenship education?",
          "options": [
            "Banning smartphones permanently from society",
            "Fostering empathy, online accountability, and supportive digital ecosystems",
            "Teaching students how to hack school servers",
            "Limiting internet access to ten minutes daily"
          ],
          "correct": 1,
          "explanation": "The text concludes education teaches 'empathy, online accountability, and bystander intervention'."
        }
      ]
    },
    {
      "id": "b1_p14",
      "number": 14,
      "title": "Reading 14: Teen Sleep & Circadian Rhythms",
      "badge": "Health Science • B1",
      "instruction": "Read about the biology of adolescent sleep and answer the 4 questions.",
      "passage": "During adolescence, the human biological clock undergoes a significant neurological transformation known as a circadian phase delay. In teenagers, the pineal gland releases melatonin—the neurochemical hormone responsible for inducing drowsiness—approximately two hours later in the evening than in adults or young children. Consequently, adolescents naturally struggle to fall asleep before 11:00 PM, regardless of physical tiredness. Compelling students to wake up before 6:00 AM for early school schedules forces them to operate in chronic sleep debt, impairing memory consolidation, immune health, and emotional stability. Several school districts that delayed morning start times to 8:30 AM reported measurable improvements in academic performance, alertness, and student driving safety.",
      "questions": [
        {
          "q": "1. What biological phenomenon occurs in adolescent circadian rhythms?",
          "options": [
            "Melatonin production stops entirely",
            "A circadian phase delay where melatonin is released two hours later in the evening",
            "Teenagers require only three hours of sleep",
            "The brain sleeps during the day"
          ],
          "correct": 1,
          "explanation": "The text explains the pineal gland releases melatonin 'approximately two hours later in the evening'."
        },
        {
          "q": "2. Why do adolescents naturally struggle to sleep before 11:00 PM?",
          "options": [
            "Because they drink too much coffee",
            "Because neurological melatonin release is delayed naturally",
            "Because they dislike their bedrooms",
            "Because of room temperature fluctuations"
          ],
          "correct": 1,
          "explanation": "The passage confirms: 'adolescents naturally struggle to fall asleep before 11:00 PM' due to delayed melatonin release."
        },
        {
          "q": "3. What negative consequences result from chronic sleep debt in students?",
          "options": [
            "Impaired memory consolidation, weakened immune function, and emotional instability",
            "Enhanced athletic stamina and faster reading",
            "Rapid teeth development",
            "Improved visual acuity"
          ],
          "correct": 0,
          "explanation": "The text notes chronic sleep debt results in 'impairing memory consolidation, immune health, and emotional stability'."
        },
        {
          "q": "4. What outcome was observed in school districts that delayed start times to 8:30 AM?",
          "options": [
            "Higher dropout rates",
            "Measurable gains in academic performance, alertness, and driving safety",
            "Increased bus accidents",
            "Decreased graduation numbers"
          ],
          "correct": 1,
          "explanation": "Districts reported 'measurable improvements in academic performance, alertness, and student driving safety'."
        }
      ]
    },
    {
      "id": "b1_p15",
      "number": 15,
      "title": "Reading 15: Preserving Indigenous Languages",
      "badge": "Anthropology & Culture • B1",
      "instruction": "Read about linguistic conservation and answer the 4 questions.",
      "passage": "Linguists estimate that of the roughly seven thousand languages spoken across the globe today, more than half could fall silent by the end of the century. When an indigenous language disappears, humanity loses not merely a vocabulary, but unique epistemological systems, oral historical records, and irreplaceable ecological knowledge. For example, indigenous languages in the Amazon contain intricate botanical taxonomies that classify medicinal plants unknown to Western pharmacology. In response, youth activist collectives are collaborating with community elders to record digital audio dictionaries, produce bilingual podcasts, and integrate indigenous languages into mobile messaging apps, ensuring ancestral linguistic heritage thrives in contemporary digital spheres.",
      "questions": [
        {
          "q": "1. What alarming projection do linguists make regarding global languages?",
          "options": [
            "All languages will merge into one language by next year",
            "More than half of spoken languages could vanish by century's end",
            "No new words will ever be invented",
            "Children will stop speaking completely"
          ],
          "correct": 1,
          "explanation": "The text states: 'more than half could fall silent by the end of the century'."
        },
        {
          "q": "2. What invaluable knowledge is lost when an indigenous language disappears?",
          "options": [
            "Only folk songs and dances",
            "Unique epistemological systems, oral histories, and botanical taxonomies",
            "Computer programming code",
            "Commercial advertising methods"
          ],
          "correct": 1,
          "explanation": "The text emphasizes losing 'unique epistemological systems, oral historical records, and irreplaceable ecological knowledge'."
        },
        {
          "q": "3. What example of specialized botanical knowledge is highlighted in the text?",
          "options": [
            "Desert sand types",
            "Amazonian plant classifications unknown to Western pharmacology",
            "Synthetic chemical names",
            "Arctic glacier classifications"
          ],
          "correct": 1,
          "explanation": "The passage mentions indigenous languages 'contain intricate botanical taxonomies that classify medicinal plants'."
        },
        {
          "q": "4. How are youth activists revitalizing indigenous languages?",
          "options": [
            "By destroying modern technology",
            "By recording audio dictionaries, producing podcasts, and creating mobile app tools",
            "By refusing to speak to outsiders",
            "By moving exclusively to remote mountaintops"
          ],
          "correct": 1,
          "explanation": "Youth are 'collaborating with community elders to record digital audio dictionaries, produce bilingual podcasts'."
        }
      ]
    },
    {
      "id": "b1_p16",
      "number": 16,
      "title": "Reading 16: Electric Vehicles & Grid Infrastructure",
      "badge": "Engineering & Urban Energy • B1",
      "instruction": "Read about transport electrification and answer the 4 questions.",
      "passage": "The global transition toward electric vehicles (EVs) represents a transformative pillar in mitigating urban greenhouse emissions. However, widespread EV adoption presents unprecedented engineering challenges for electrical grid operators. If thousands of commuters simultaneously plug in their vehicles upon returning home in the evening, local distribution transformers can suffer severe thermal overload. Electrical engineers are developing 'smart charging' and Vehicle-to-Grid (V2G) bidirectional protocols. Under V2G technology, parked electric cars can feed stored battery electricity back into the electrical grid during peak demand hours, earning credits for car owners and stabilizing the public power supply before recharging during off-peak overnight hours.",
      "questions": [
        {
          "q": "1. What engineering challenge arises from mass electric vehicle adoption?",
          "options": [
            "EVs produce dangerous toxic exhaust fumes",
            "Simultaneous evening charging can trigger severe transformer overloads",
            "Batteries cannot charge with electricity",
            "Tires wear down ten times faster"
          ],
          "correct": 1,
          "explanation": "The text warns: 'distribution transformers can suffer severe thermal overload' from simultaneous charging."
        },
        {
          "q": "2. What does Vehicle-to-Grid (V2G) technology enable parked cars to do?",
          "options": [
            "Drive automatically without passengers",
            "Feed stored battery electricity back into the grid during peak demand hours",
            "Change their exterior paint color",
            "Fly over traffic jams"
          ],
          "correct": 1,
          "explanation": "Under V2G, 'parked electric cars can feed stored battery electricity back into the electrical grid'."
        },
        {
          "q": "3. What benefit do car owners receive for participating in V2G systems?",
          "options": [
            "Free new vehicles every year",
            "Financial credits while stabilizing the public grid",
            "A private parking space in every city",
            "Exemption from all driving rules"
          ],
          "correct": 1,
          "explanation": "The text notes owners earn 'credits for car owners and stabilizing the public power supply'."
        },
        {
          "q": "4. When do smart charging protocols schedule vehicle recharging?",
          "options": [
            "During peak afternoon hours",
            "During off-peak overnight hours when demand is low",
            "Exclusively during thunderstorms",
            "Only on weekend mornings"
          ],
          "correct": 1,
          "explanation": "The passage confirms vehicles recharge 'during off-peak overnight hours'."
        }
      ]
    },
    {
      "id": "b1_p17",
      "number": 17,
      "title": "Reading 17: Food Waste & Sustainable Logistics",
      "badge": "Agriculture & Ethics • B1",
      "instruction": "Read about global food security and logistics and answer the 4 questions.",
      "passage": "According to the United Nations Food and Agriculture Organization, approximately one-third of all food produced for human consumption—amounting to 1.3 billion metric tons annually—is lost or wasted. In developing economies, food loss occurs primarily upstream due to inadequate refrigeration, rudimentary storage facilities, and damaged transport infrastructure. In contrast, in industrialized nations, food waste happens downstream, where supermarkets discard cosmetic 'imperfect' produce and consumers discard edible groceries past arbitrary expiration dates. Decomposing food waste in landfill sites accounts for nearly ten percent of global greenhouse emissions in the form of potent methane gas. Solving this paradox requires investment in cold-chain logistics and dynamic food redistribution networks.",
      "questions": [
        {
          "q": "1. What fraction of globally produced food is lost or wasted each year?",
          "options": [
            "Five percent",
            "Approximately one-third (1.3 billion tons)",
            "Exactly half",
            "Nearly ninety percent"
          ],
          "correct": 1,
          "explanation": "The text states: 'approximately one-third of all food produced for human consumption... is lost or wasted'."
        },
        {
          "q": "2. Where does food loss primarily occur in developing nations?",
          "options": [
            "In high-end luxury restaurants",
            "Upstream due to poor refrigeration, storage, and transport",
            "Because consumers buy too much food",
            "In fast food franchises"
          ],
          "correct": 1,
          "explanation": "The text notes loss occurs upstream due to 'inadequate refrigeration, rudimentary storage facilities, and damaged transport'."
        },
        {
          "q": "3. Why do supermarkets in industrialized nations frequently discard edible produce?",
          "options": [
            "Because the produce is completely poisonous",
            "Due to minor cosmetic imperfections",
            "Because trucks refuse to unload them",
            "Because food is legally required to be burned"
          ],
          "correct": 1,
          "explanation": "The passage explains supermarkets 'discard cosmetic 'imperfect' produce'."
        },
        {
          "q": "4. What harmful greenhouse gas is released when food decomposes in landfills?",
          "options": [
            "Pure oxygen",
            "Potent methane gas",
            "Nitrogen gas",
            "Helium"
          ],
          "correct": 1,
          "explanation": "The text notes decomposing food waste produces 'nearly ten percent of global greenhouse emissions in the form of potent methane gas'."
        }
      ]
    },
    {
      "id": "b1_p18",
      "number": 18,
      "title": "Reading 18: The Future of Remote Work & Teams",
      "badge": "Workplace Evolution • B1",
      "instruction": "Read about workplace transformation and answer the 4 questions.",
      "passage": "The worldwide acceleration of high-speed broadband and cloud collaboration suites has decoupled white-collar labor from centralized commercial offices. Organizations now assemble distributed project teams spanning multiple continents and time zones. For employees, remote flexibility eliminates exhausting daily commutes, expands employment opportunities for individuals residing outside metropolitan capitals, and affords greater work-life balance. However, organizational psychologists also identify profound friction points: asynchronous communication can diminish spontaneous creative collaboration, while blurred boundaries between professional duties and private life can lead to occupational burnout. Successful remote enterprises intentionally cultivate explicit communication guidelines, designated digital disconnection policies, and periodic in-person retreats.",
      "questions": [
        {
          "q": "1. What technological infrastructure enabled the growth of remote work?",
          "options": [
            "Fax machines and landline telephones",
            "High-speed broadband and cloud collaboration suites",
            "Television broadcast towers",
            "Automated assembly robots"
          ],
          "correct": 1,
          "explanation": "The text attributes the shift to 'high-speed broadband and cloud collaboration suites'."
        },
        {
          "q": "2. What is cited as a significant benefit of remote work for employees?",
          "options": [
            "Mandatory unpaid overtime",
            "Eliminating daily commutes and expanding geographical job opportunities",
            "Free meals delivered daily",
            "Never interacting with coworkers"
          ],
          "correct": 1,
          "explanation": "The text highlights eliminating 'exhausting daily commutes, expands employment opportunities'."
        },
        {
          "q": "3. What risk is highlighted by organizational psychologists regarding remote environments?",
          "options": [
            "Workers will forget how to speak English",
            "Blurred boundaries between work and private life leading to burnout",
            "Computers breaking down constantly",
            "Loss of all stored company data"
          ],
          "correct": 1,
          "explanation": "Psychologists note 'blurred boundaries between professional duties and private life can lead to occupational burnout'."
        },
        {
          "q": "4. How do effective remote organizations maintain team cohesion?",
          "options": [
            "By monitoring employees with webcams 24 hours a day",
            "Through explicit communication rules, disconnection policies, and periodic retreats",
            "By eliminating all holidays",
            "By prohibiting email communication"
          ],
          "correct": 1,
          "explanation": "The passage concludes enterprises 'cultivate explicit communication guidelines, designated digital disconnection policies, and periodic in-person retreats'."
        }
      ]
    },
    {
      "id": "b1_p19",
      "number": 19,
      "title": "Reading 19: Youth Civic Engagement",
      "badge": "Civics & Democracy • B1",
      "instruction": "Read about youth civic participation and answer the 4 questions.",
      "passage": "Historically, adolescent participation in democratic governance was perceived as limited until reaching the legal voting age of eighteen. However, contemporary youth are reshaping civic engagement through participatory municipal budgeting and youth advisory councils. In cities across Europe and Latin America, municipal governments allocate dedicated portions of public budgets directly to student assemblies, who debate, evaluate proposals, and vote on community investments. Projects funded by youth councils have included neighborhood skate parks, skate-safe bike corridors, mental health support centers, and public solar charging stations. Political scientists note that hands-on civic participation during adolescence cultivates lifelong voting habits and strengthens community social capital.",
      "questions": [
        {
          "q": "1. How are contemporary youth participating in democratic governance before age eighteen?",
          "options": [
            "By running for president illegally",
            "Through participatory municipal budgeting and youth advisory councils",
            "By refusing to pay sales taxes",
            "By avoiding all community discussions"
          ],
          "correct": 1,
          "explanation": "The text states youth engage 'through participatory municipal budgeting and youth advisory councils'."
        },
        {
          "q": "2. What power do student assemblies have in participatory budgeting programs?",
          "options": [
            "They decide foreign military policy",
            "They debate, evaluate proposals, and vote on public community investments",
            "They collect municipal property taxes",
            "They set the national minimum wage"
          ],
          "correct": 1,
          "explanation": "The passage explains student assemblies 'debate, evaluate proposals, and vote on community investments'."
        },
        {
          "q": "3. Which infrastructure project was funded through youth councils?",
          "options": [
            "A commercial airport terminal",
            "Neighborhood skate parks, bike corridors, and mental health centers",
            "A highway toll booth",
            "A private golf course"
          ],
          "correct": 1,
          "explanation": "The text lists: 'neighborhood skate parks, skate-safe bike corridors, mental health support centers'."
        },
        {
          "q": "4. What long-term democratic benefit is observed by political scientists?",
          "options": [
            "Youth will demand the elimination of elections",
            "Hands-on participation cultivates lifelong voting habits and social capital",
            "All political parties will merge into one",
            "Young people stop reading news"
          ],
          "correct": 1,
          "explanation": "The text notes early participation 'cultivates lifelong voting habits and strengthens community social capital'."
        }
      ]
    },
    {
      "id": "b1_p20",
      "number": 20,
      "title": "Reading 20: Critical Media Literacy & Clickbait",
      "badge": "Media Literacy • B1",
      "instruction": "Read about online misinformation and answer the 4 questions.",
      "passage": "The modern digital attention economy relies heavily on hyper-sensationalized headlines, universally termed 'clickbait'. Digital publishers engineer exaggerated titles to evoke intense emotional reactions—such as outrage, fear, or astonishment—compelling users to click and generate advertising revenue. Often, the actual text beneath the headline contradicts the sensational assertion or distorts scientific findings through cherry-picked statistics. Media literacy scholars advise consumers to practice 'lateral reading': rather than evaluating a website based on its visual appearance, users should open new browser tabs to verify the publisher's credentials, consult authoritative peer-reviewed sources, and cross-reference multiple independent news agencies before sharing information on social feeds.",
      "questions": [
        {
          "q": "1. What is the commercial purpose of sensationalized 'clickbait' headlines?",
          "options": [
            "To summarize complicated scientific journals accurately",
            "To evoke strong emotions to generate clicks and advertising revenue",
            "To teach children how to write poetry",
            "To reduce internet bandwidth usage"
          ],
          "correct": 1,
          "explanation": "The text notes publishers engineer titles 'to evoke intense emotional reactions... to click and generate advertising revenue'."
        },
        {
          "q": "2. What discrepancy frequently occurs in clickbait articles?",
          "options": [
            "The article is written in Latin",
            "The body text contradicts the sensational headline or distorts scientific data",
            "The font size is too small to read",
            "The article contains no words at all"
          ],
          "correct": 1,
          "explanation": "The text states: 'the actual text beneath the headline contradicts the sensational assertion or distorts scientific findings'."
        },
        {
          "q": "3. What is the practice of 'lateral reading' recommended by media scholars?",
          "options": [
            "Reading a book while lying on your side",
            "Opening new tabs to verify publisher credentials and consult independent sources",
            "Reading only the first paragraph of every article",
            "Translating articles into another language"
          ],
          "correct": 1,
          "explanation": "The passage defines it as when 'users should open new browser tabs to verify the publisher's credentials... and cross-reference'."
        },
        {
          "q": "4. The word 'authoritative' in the passage is closest in meaning to:",
          "options": [
            "Dependable, verified, and expert",
            "Violent and aggressive",
            "Inexpensive and cheap",
            "Anonymous and untraceable"
          ],
          "correct": 0,
          "explanation": "'Authoritative' means highly reliable, recognized, and backed by expert credentials."
        }
      ]
    },
    {
      "id": "b1_p21",
      "number": 21,
      "title": "Reading 21: The Amazon Rainforest Ecosystem",
      "badge": "Ecology & Conservation • B1",
      "instruction": "Read about the Amazon basin and answer the 4 questions.",
      "passage": "The Amazon River Basin encompasses the largest and most biodiverse tropical rainforest biome on the planet. Spanning across nine South American nations, the forest acts as a critical terrestrial carbon sink, absorbing billions of metric tons of carbon dioxide and producing twenty percent of the world's river discharge. Furthermore, the forest generates massive atmospheric moisture flows termed 'flying rivers', which distribute rainfall across South American agricultural heartlands. However, expanding cattle ranching, illegal timber logging, and commercial soybean monocultures threaten irreversible deforestation. Climate scientists warn that if deforestation exceeds twenty-five percent, the Amazon could reach a critical tipping point, converting lush tropical canopies into degraded, dry savannas.",
      "questions": [
        {
          "q": "1. What vital environmental service is performed by the Amazon rainforest?",
          "options": [
            "It generates cold arctic blizzards",
            "It acts as a terrestrial carbon sink and regulates atmospheric rainfall flows",
            "It produces all industrial plastics worldwide",
            "It eliminates the need for ocean water"
          ],
          "correct": 1,
          "explanation": "The passage explains it 'acts as a critical terrestrial carbon sink... and produces twenty percent of the world's river discharge'."
        },
        {
          "q": "2. What are the 'flying rivers' mentioned in the passage?",
          "options": [
            "Airplanes that carry fresh water to deserts",
            "Massive atmospheric moisture flows that distribute rainfall across the continent",
            "Rivers that flow on top of high mountain ranges",
            "Pipes installed above the forest canopy"
          ],
          "correct": 1,
          "explanation": "The text defines them as 'massive atmospheric moisture flows... which distribute rainfall across South American agricultural heartlands'."
        },
        {
          "q": "3. What industrial activities drive deforestation in the Amazon basin?",
          "options": [
            "Wind turbine manufacturing",
            "Cattle ranching, illegal timber logging, and commercial soybean monocultures",
            "Building small solar observatories",
            "Eco-tourism and birdwatching"
          ],
          "correct": 1,
          "explanation": "The text identifies: 'expanding cattle ranching, illegal timber logging, and commercial soybean monocultures'."
        },
        {
          "q": "4. What catastrophic tipping point do climate scientists warn about?",
          "options": [
            "The forest freezing into glaciers",
            "Conversion of lush tropical canopies into degraded dry savannas",
            "The Amazon River drying up overnight",
            "Animals moving permanently to cities"
          ],
          "correct": 1,
          "explanation": "Scientists warn crossing the threshold would risk 'converting lush tropical canopies into degraded, dry savannas'."
        }
      ]
    }
  ],
  "b2": [
    {
      "id": "b2_p1",
      "number": 1,
      "title": "Reading 1: Neurobiology of Multilingual Cognition",
      "badge": "Cambridge B2 / Saber 11° • B2",
      "instruction": "Read the analytical passage and solve the 4 inferential and rhetorical questions.",
      "passage": "For decades, pedagogical dogma held that raising children in a multilingual environment could trigger cognitive interference and developmental delays. Modern neuroimaging, however, has decisively overturned this assumption. Contemporary research indicates that navigating multiple linguistic codes strengthens executive function—the cognitive control mechanism responsible for selective attention, task switching, and working memory. Because bilingual individuals must continuously inhibit the dormant language while speaking the target tongue, their prefrontal cortex undergoes habitual structural refinement. Crucially, this cognitive reserve does not merely accelerate language acquisition; longitudinal clinical studies demonstrate that lifelong bilingualism delays the onset of neurodegenerative symptoms by an average of four to five years. Thus, linguistic diversity proves to be not merely a communicative asset, but a profound neurobiological safeguard.",
      "questions": [
        {
          "q": "1. What former misconception regarding multilingual upbringing does the passage refute?",
          "options": [
            "That bilingual children learn arithmetic faster",
            "That bilingualism causes cognitive interference and delays",
            "That learning languages damages hearing acuity",
            "That multilingual adults forget their native tongue"
          ],
          "correct": 1,
          "explanation": "Paragraph 1 notes old dogma assumed multilingualism triggered 'cognitive interference and developmental delays', which neuroimaging overturned."
        },
        {
          "q": "2. According to the text, why does bilingualism strengthen executive function?",
          "options": [
            "Because speakers constantly suppress the non-active language during speech",
            "Because bilingual speakers sleep more hours per night",
            "Because bilingualism eliminates all emotional stress",
            "Because grammar rules replace mathematical formulas"
          ],
          "correct": 0,
          "explanation": "The author explains: 'Because bilingual individuals must continuously inhibit the dormant language... their prefrontal cortex undergoes habitual refinement'."
        },
        {
          "q": "3. What clinical benefit is associated with lifelong bilingualism in elderly populations?",
          "options": [
            "Immediate restoration of 20/20 vision",
            "Postponing neurodegenerative symptoms by four to five years",
            "Permanent immunity against physical fatigue",
            "Complete prevention of cardiovascular illness"
          ],
          "correct": 1,
          "explanation": "The text states that lifelong bilingualism 'delays the onset of neurodegenerative symptoms by an average of four to five years'."
        },
        {
          "q": "4. The author's primary communicative purpose is to:",
          "options": [
            "Criticize schools that teach only one foreign language",
            "Explain the neurocognitive advantages substantiated by modern bilingualism research",
            "Debate the economic cost of MRI neuroimaging equipment",
            "Discourage foreign language study in adult learners"
          ],
          "correct": 1,
          "explanation": "The entire passage provides scientific explanation and evidence demonstrating the cognitive and neural benefits of bilingualism."
        }
      ]
    },
    {
      "id": "b2_p2",
      "number": 2,
      "title": "Reading 2: Algorithmic Bias in Machine Learning",
      "badge": "Computer Science & Ethics • B2",
      "instruction": "Read the technology ethics article and answer the 4 questions.",
      "passage": "As automated algorithmic systems increasingly govern consequential domains such as credit scoring, university admissions, and judicial sentencing risk assessments, computer scientists are grappling with the paradox of algorithmic neutrality. While machine learning models are ostensibly mathematical and objective, their inductive predictions are fundamentally derived from historical datasets. If training corpora reflect structural societal disparities, historical discrimination, or biased policing patterns, the algorithm codifies and amplifies these prejudices beneath a facade of computational impartiality. Computer ethicists emphasize that eliminating explicit demographic variables like race or gender fails to eliminate bias, as proxy indicators—such as postal zip codes or educational institutions—allow models to reconstruct protected attributes latently. Ensuring equitable algorithmic outcomes requires active fairness constraints and independent external audits of closed-source proprietary systems.",
      "questions": [
        {
          "q": "1. Why is the concept of 'algorithmic neutrality' described as a paradox?",
          "options": [
            "Because computers have human feelings and desires",
            "Because mathematical models inherit and amplify prejudices present in historical training data",
            "Because algorithms cost too much to run on standard servers",
            "Because software developers refuse to write mathematical equations"
          ],
          "correct": 1,
          "explanation": "The text explains algorithms derive predictions from historical datasets that reflect structural societal disparities and historical discrimination."
        },
        {
          "q": "2. Why is removing explicit demographic variables like race or gender insufficient to prevent bias?",
          "options": [
            "Because computers crash when variables are removed",
            "Because proxy indicators like zip codes allow algorithms to reconstruct protected attributes latently",
            "Because users always volunteer their demographic data anyway",
            "Because governments mandate demographic labeling"
          ],
          "correct": 1,
          "explanation": "The text states: 'proxy indicators—such as postal zip codes or educational institutions—allow models to reconstruct protected attributes latently'."
        },
        {
          "q": "3. In which critical socio-economic sectors are automated algorithms deployed?",
          "options": [
            "Video game character animation exclusively",
            "Credit scoring, university admissions, and judicial risk assessments",
            "Weather forecasting for weekend sports events",
            "Selecting paint colors for public schools"
          ],
          "correct": 1,
          "explanation": "The opening sentence identifies domains including 'credit scoring, university admissions, and judicial sentencing risk assessments'."
        },
        {
          "q": "4. What regulatory remedy is advocated by computer ethicists?",
          "options": [
            "A complete global ban on all computer programming",
            "Active fairness constraints and independent external audits of proprietary models",
            "Allowing private corporations to self-regulate without oversight",
            "Making all algorithmic code confidential"
          ],
          "correct": 1,
          "explanation": "Ethicists emphasize: 'active fairness constraints and independent external audits of closed-source proprietary systems'."
        }
      ]
    },
    {
      "id": "b2_p3",
      "number": 3,
      "title": "Reading 3: CRISPR & the Bioethics of Genetic Editing",
      "badge": "Biotechnology & Bioethics • B2",
      "instruction": "Read the biotechnology critique and answer the 4 questions.",
      "passage": "The advent of the CRISPR-Cas9 endonuclease system has democratized molecular genetic editing, enabling researchers to manipulate target genomic sequences with unprecedented precision and cost-efficiency. In therapeutic oncology and monogenic disorder treatment, somatic cell gene therapy holds immense promise for eradicating debilitating conditions like sickle cell anemia and cystic fibrosis. However, profound bioethical controversies erupt when editing transitions from somatic cells to heritable germline modifications. Modifying human embryos alters the hereditary genetic heritage of future generations without their consent. Bioethicists warn that without stringent international governance, germline gene editing could transcend restorative therapeutics and plunge into eugenic enhancement, exacerbating social stratifications into biological divides.",
      "questions": [
        {
          "q": "1. What technological breakthrough did the CRISPR-Cas9 system accomplish?",
          "options": [
            "Inventing synthetic antibiotics in pill form",
            "Enabling precise, accessible, and cost-efficient genomic editing",
            "Eliminating the need for medical doctors",
            "Sequencing computer viruses"
          ],
          "correct": 1,
          "explanation": "The text notes CRISPR enables researchers 'to manipulate target genomic sequences with unprecedented precision and cost-efficiency'."
        },
        {
          "q": "2. What fundamental distinction separates somatic gene therapy from germline editing?",
          "options": [
            "Somatic editing affects only patient cells, whereas germline alterations are passed down to future generations",
            "Somatic editing is illegal worldwide",
            "Germline editing applies only to plant species",
            "Somatic editing requires no scientific equipment"
          ],
          "correct": 0,
          "explanation": "The passage explains germline modifications alter 'the hereditary genetic heritage of future generations without their consent'."
        },
        {
          "q": "3. What clinical conditions show high promise for somatic gene therapy treatment?",
          "options": [
            "Common head colds and fevers",
            "Monogenic disorders like sickle cell anemia and cystic fibrosis",
            "Bone fractures and sprains",
            "Physical aging and wrinkles"
          ],
          "correct": 1,
          "explanation": "The text specifies: 'eradicating debilitating conditions like sickle cell anemia and cystic fibrosis'."
        },
        {
          "q": "4. What dystopian scenario do bioethicists caution against in unregulated germline editing?",
          "options": [
            "All human cells becoming immune to water",
            "Enhancement technologies creating biological divides and social stratification",
            "Humans losing the capacity for spoken language",
            "All bacteria disappearing from ecosystems"
          ],
          "correct": 1,
          "explanation": "Bioethicists warn editing could 'plunge into eugenic enhancement, exacerbating social stratifications into biological divides'."
        }
      ]
    },
    {
      "id": "b2_p4",
      "number": 4,
      "title": "Reading 4: Phenomenological Dimensions of VR",
      "badge": "Philosophy of Mind • B2",
      "instruction": "Read about cognitive immersion and virtual realities and answer the 4 questions.",
      "passage": "Virtual reality (VR) technologies are often discussed in commercial entertainment terms, yet their cognitive implications pose radical questions for the phenomenology of human consciousness. Traditional audiovisual media maintain an ontological distinction between the observer and the observed screen. Conversely, high-fidelity head-mounted displays achieve sensorimotor immersion by updating stereoscopic visual fields and binaural spatial audio in direct response to vestibular head movement, inducing the psychological illusion of 'telepresence'. Cognitive scientists studying body transfer illusions demonstrate that when a participant's virtual avatar is threatened, galvanic skin conductance spikes identically to a physical threat. This blurring of real and simulated embodiment challenges philosophical models of self-localization and perception.",
      "questions": [
        {
          "q": "1. How does virtual reality fundamentally differ from traditional screen media?",
          "options": [
            "VR screens have lower pixel counts",
            "VR breaks the barrier between observer and screen through sensorimotor immersion and telepresence",
            "VR operates without electrical power",
            "Traditional media are interactive whereas VR is entirely passive"
          ],
          "correct": 1,
          "explanation": "The text explains VR achieves sensorimotor immersion, 'inducing the psychological illusion of 'telepresence'' unlike traditional screens."
        },
        {
          "q": "2. How does the VR system produce the illusion of immersive presence?",
          "options": [
            "By flashing bright colors rapidly",
            "By updating stereoscopic visuals and spatial audio in response to vestibular movements",
            "By increasing ambient room temperature",
            "By projecting holograms into open air"
          ],
          "correct": 1,
          "explanation": "The passage notes it works 'by updating stereoscopic visual fields and binaural spatial audio in direct response to vestibular head movement'."
        },
        {
          "q": "3. What biological evidence indicates that participants internalize virtual embodiment?",
          "options": [
            "Heart rates drop to zero",
            "Galvanic skin conductance spikes when a virtual avatar is threatened",
            "Pupils stop dilating in the dark",
            "Body temperature drops ten degrees"
          ],
          "correct": 1,
          "explanation": "The text states: 'when a participant's virtual avatar is threatened, galvanic skin conductance spikes identically to a physical threat'."
        },
        {
          "q": "4. What overarching philosophical question does high-fidelity VR evoke?",
          "options": [
            "How to price digital gaming consoles",
            "Challenges to traditional philosophical models of self-localization and perceptual reality",
            "Whether computer screens cause permanent blindness",
            "How to design lighter headphones"
          ],
          "correct": 1,
          "explanation": "The final sentence concludes: 'This blurring of real and simulated embodiment challenges philosophical models of self-localization and perception'."
        }
      ]
    },
    {
      "id": "b2_p5",
      "number": 5,
      "title": "Reading 5: The Circular Economy & Industrial Metabolism",
      "badge": "Economics & Sustainability • B2",
      "instruction": "Read the ecological economics paper and answer the 4 questions.",
      "passage": "Since the Industrial Revolution, global macroeconomic production has conformed to a linear 'take-make-dispose' trajectory, assuming an inexhaustible supply of planetary virgin resources and infinite environmental absorption capacity for toxic effluents. In stark contrast, ecological economics proposes the 'circular economy' framework, inspired by the closed metabolic loops of natural ecosystems where waste does not exist. Industrial metabolism under circular principles mandates that products be designed for disassembly, restorative biological degradation, or infinite technical cascading. By transitioning from consumer ownership models to product-as-a-service paradigms—where manufacturers retain ownership of raw materials and lease utility—enterprises are financially incentivized to maximize product longevity and modularity rather than engineering planned obsolescence.",
      "questions": [
        {
          "q": "1. What foundational flaw characterizes the traditional linear economic model?",
          "options": [
            "It produces too much gold",
            "It assumes infinite natural resources and unlimited planetary waste absorption capacity",
            "It requires too much physical labor",
            "It prohibits international trade"
          ],
          "correct": 1,
          "explanation": "The text explains it conforms to 'a linear 'take-make-dispose' trajectory, assuming an inexhaustible supply of planetary virgin resources'."
        },
        {
          "q": "2. What natural phenomenon inspires the design of the circular economy?",
          "options": [
            "The solar magnetic cycle",
            "The closed metabolic nutrient loops of biological ecosystems",
            "Volcanic geothermal energy",
            "Oceanic tidal fluctuations"
          ],
          "correct": 1,
          "explanation": "The text specifies it is 'inspired by the closed metabolic loops of natural ecosystems where waste does not exist'."
        },
        {
          "q": "3. What occurs in a 'product-as-a-service' commercial paradigm?",
          "options": [
            "Customers must throw away products after thirty days",
            "Manufacturers retain material ownership and lease utility, incentivizing durability",
            "Products are given away entirely for free",
            "Governments nationalize all retail stores"
          ],
          "correct": 1,
          "explanation": "Under this paradigm, 'manufacturers retain ownership of raw materials and lease utility... incentivized to maximize product longevity'."
        },
        {
          "q": "4. The word 'obsolescence' in the final sentence refers to:",
          "options": [
            "The state of becoming outdated, worn out, or useless",
            "The process of rapid financial growth",
            "High industrial precision",
            "Recycling old metal"
          ],
          "correct": 0,
          "explanation": "'Obsolescence' refers to the process of becoming obsolete, outdated, or no longer functional."
        }
      ]
    },
    {
      "id": "b2_p6",
      "number": 6,
      "title": "Reading 6: Cognitive Heuristics & Decision-Making",
      "badge": "Behavioral Economics • B2",
      "instruction": "Read about behavioral economics and cognitive biases and answer the 4 questions.",
      "passage": "Classical economic theory operated on the foundational premise of *Homo economicus*—the idealized rational actor possessing limitless computational capacity who unfailingly maximizes personal utility. Groundbreaking experiments by behavioral economists Daniel Kahneman and Amos Tversky dismantled this axiom, demonstrating that human judgment is systematically skewed by cognitive heuristics: mental shortcuts employed under uncertainty to reduce cognitive strain. For example, the 'availability heuristic' leads individuals to overestimate the statistical probability of dramatic events (like plane crashes or shark attacks) simply because vivid memories are effortlessly retrieved from memory. Similarly, 'loss aversion' reveals that the psychological pain of losing one hundred dollars is empirically twice as intense as the joy of gaining the equivalent sum, distorting risk evaluation across capital markets and public policy.",
      "questions": [
        {
          "q": "1. What foundational assumption of classical economics did Kahneman and Tversky dismantle?",
          "options": [
            "That money is used as a medium of exchange",
            "That humans act as purely rational utility-maximizing agents (*Homo economicus*)",
            "That supply and demand affect prices",
            "That banks manage interest rates"
          ],
          "correct": 1,
          "explanation": "They dismantled the premise of '*Homo economicus*—the idealized rational actor possessing limitless computational capacity'."
        },
        {
          "q": "2. How does the 'availability heuristic' distort human risk perception?",
          "options": [
            "People forget their own bank account passwords",
            "Individuals overestimate probabilities of dramatic events because vivid instances are easily recalled",
            "People refuse to make financial transactions",
            "People ignore all news media"
          ],
          "correct": 1,
          "explanation": "It leads individuals 'to overestimate the statistical probability of dramatic events... simply because vivid memories are effortlessly retrieved'."
        },
        {
          "q": "3. What does behavioral research reveal regarding 'loss aversion'?",
          "options": [
            "Gaining money causes acute psychological depression",
            "The pain of financial loss is empirically twice as intense as the pleasure of equivalent gain",
            "Losses have zero psychological impact on traders",
            "Humans always prefer gambling over guaranteed savings"
          ],
          "correct": 1,
          "explanation": "The text states: 'the psychological pain of losing one hundred dollars is empirically twice as intense as the joy of gaining the equivalent sum'."
        },
        {
          "q": "4. The word 'axiom' in paragraph 1 is closest in meaning to:",
          "options": [
            "An unproven scientific hypothesis",
            "An established, widely accepted foundational truth or premise",
            "A financial debt contract",
            "A complex mathematical equation"
          ],
          "correct": 1,
          "explanation": "An 'axiom' is a foundational premise or accepted truth that serves as the basis for an argument or theory."
        }
      ]
    },
    {
      "id": "b2_p7",
      "number": 7,
      "title": "Reading 7: Linguistic Relativity: Does Syntax Shape Reality?",
      "badge": "Epistemology & Linguistics • B2",
      "instruction": "Read the linguistic philosophy treatise and answer the 4 questions.",
      "passage": "The Sapir-Whorf hypothesis, or linguistic relativity, posits that the structural syntax and lexical taxonomies of a speaker's native language influence or constrain their cognitive perception of the external world. While linguistic determinism—the radical assertion that language strictly dictates thought—has been largely rejected, modern empirical psycholinguistics validates a nuanced, neo-Whorfian perspective. For instance, speakers of languages like Guugu Yimithirr, who utilize absolute cardinal directions (North, South, East, West) rather than egocentric coordinates (left, right), exhibit extraordinarily acute spatial dead-reckoning capabilities, even inside windowless subterranean bunkers. Similarly, cross-linguistic color categorization studies demonstrate that possessing distinct linguistic labels for shades of blue (such as *siniy* and *goluboy* in Russian) accelerates pre-attentive perceptual discrimination on chromatic spectrum tasks.",
      "questions": [
        {
          "q": "1. What is the central proposition of the linguistic relativity hypothesis?",
          "options": [
            "All human languages derive from a single African dialect",
            "Language structure and lexical categories influence cognitive perception and thought",
            "Grammar is learned exclusively through physical writing drills",
            "Animals communicate with human syntax"
          ],
          "correct": 1,
          "explanation": "The hypothesis posits 'that the structural syntax and lexical taxonomies of a speaker's native language influence or constrain their cognitive perception'."
        },
        {
          "q": "2. What cognitive trait characterizes native speakers of Guugu Yimithirr?",
          "options": [
            "Inability to read maps",
            "Extraordinary spatial dead-reckoning using absolute cardinal directions",
            "Loss of color vision",
            "Total reliance on left-right egocentric terms"
          ],
          "correct": 1,
          "explanation": "Speakers exhibit 'extraordinarily acute spatial dead-reckoning capabilities, even inside windowless subterranean bunkers'."
        },
        {
          "q": "3. What perceptual advantage is observed among Russian speakers regarding the color spectrum?",
          "options": [
            "They can see in total darkness",
            "Faster pre-attentive discrimination between distinct shades of blue",
            "They perceive yellow as red",
            "They cannot identify green hues"
          ],
          "correct": 1,
          "explanation": "Distinct linguistic terms accelerate 'pre-attentive perceptual discrimination on chromatic spectrum tasks'."
        },
        {
          "q": "4. What is the contemporary consensus regarding 'linguistic determinism'?",
          "options": [
            "It has been proven universally correct in all laboratories",
            "It has been largely rejected in favor of a nuanced, moderate neo-Whorfian perspective",
            "It is legally enforced by international courts",
            "It is taught in all secondary schools"
          ],
          "correct": 1,
          "explanation": "The text notes deterministic views were 'largely rejected' in favor of a 'nuanced, neo-Whorfian perspective'."
        }
      ]
    },
    {
      "id": "b2_p8",
      "number": 8,
      "title": "Reading 8: Quantum Computing & Cryptography",
      "badge": "Theoretical Physics & Cyber • B2",
      "instruction": "Read about quantum computing breakthroughs and answer the 4 questions.",
      "passage": "Classical computing architecture relies on binary bits that exist deterministically as either zero or one. In revolutionary contrast, quantum computing exploits the bizarre principles of quantum mechanics: superposition and quantum entanglement. Utilizing subatomic qubits, a quantum processor can evaluate an exponential multiversal computational state simultaneously. While full fault-tolerant quantum supremacy remains an engineering frontier, Shor's algorithm proved mathematically that an operational quantum computer can factor colossal prime integers in polynomial time. Because modern public-key cryptography—securing global banking transfers, encrypted government communications, and digital infrastructure—relies precisely on the computational infeasibility of prime factorization for classical supercomputers, the emergence of quantum computation necessitates an immediate transition to post-quantum lattice-based cryptographic algorithms.",
      "questions": [
        {
          "q": "1. How do quantum qubits fundamentally differ from classical binary bits?",
          "options": [
            "Qubits require no electrical power whatsoever",
            "Qubits exist in states of superposition rather than deterministic zeros or ones",
            "Qubits are five times larger physically than transistors",
            "Qubits only function at room temperature"
          ],
          "correct": 1,
          "explanation": "The text explains quantum computing relies on 'superposition and quantum entanglement' rather than deterministic binary states."
        },
        {
          "q": "2. What cryptographic vulnerability is exposed by Shor's algorithm?",
          "options": [
            "It can erase computer hard drives wirelessly",
            "It can factor colossal prime numbers in polynomial time, breaking public-key encryption",
            "It reveals physical banking passwords to hackers",
            "It disables internet routers"
          ],
          "correct": 1,
          "explanation": "Shor's algorithm proved quantum computers can 'factor colossal prime integers in polynomial time', compromising public-key encryption."
        },
        {
          "q": "3. What modern digital systems rely on the computational difficulty of prime factorization?",
          "options": [
            "Social media video games",
            "Global banking transactions, encrypted government communications, and digital infrastructure",
            "FM radio transmissions",
            "Digital wristwatch clocks"
          ],
          "correct": 1,
          "explanation": "The text lists: 'securing global banking transfers, encrypted government communications, and digital infrastructure'."
        },
        {
          "q": "4. What defensive countermeasure must cybersecurity engineers implement?",
          "options": [
            "Eliminating all encryption permanently",
            "Transitioning to post-quantum lattice-based cryptographic algorithms",
            "Printing bank accounts on paper exclusively",
            "Disconnecting the internet worldwide"
          ],
          "correct": 1,
          "explanation": "The text concludes by calling for an 'immediate transition to post-quantum lattice-based cryptographic algorithms'."
        }
      ]
    },
    {
      "id": "b2_p9",
      "number": 9,
      "title": "Reading 9: Antimicrobial Resistance Surveillance",
      "badge": "Epidemiology & Global Health • B2",
      "instruction": "Read about infectious disease microbiology and answer the 4 questions.",
      "passage": "The discovery of penicillin by Alexander Fleming in 1928 transformed global medicine, turning fatal bacterial infections into easily treatable conditions. However, nearly a century of widespread clinical over-prescription and rampant prophylactic antibiotic use in intensive livestock agriculture has unleashed an escalating public health catastrophe: antimicrobial resistance (AMR). Bacterial pathogens rapidly evolve resistance mechanisms through spontaneous genetic mutations and horizontal gene transfer via plasmid conjugation, exchanging multidrug-resistant genes across divergent bacterial species. Medical epidemiologists project that without novel antibiotic classes, diagnostic stewardship, and global genomic surveillance networks, superbug infections could cause ten million annual fatalities by 2050, threatening to thrust modern medicine back into a pre-antibiotic era where routine surgical procedures become life-threatening.",
      "questions": [
        {
          "q": "1. What human activities have accelerated the emergence of antimicrobial resistance?",
          "options": [
            "Drinking filtered tap water",
            "Clinical over-prescription and prophylactic agricultural antibiotic overuse in livestock",
            "Aerobic athletic training",
            "Vaccinating infants against viral diseases"
          ],
          "correct": 1,
          "explanation": "The passage identifies 'clinical over-prescription and rampant prophylactic antibiotic use in intensive livestock agriculture'."
        },
        {
          "q": "2. How do bacterial pathogens acquire resistance traits from other bacteria?",
          "options": [
            "By absorbing sunlight",
            "Through spontaneous mutations and horizontal gene transfer via plasmid conjugation",
            "By swimming into ocean water",
            "Through viral cell division"
          ],
          "correct": 1,
          "explanation": "The text states pathogens evolve resistance through 'spontaneous genetic mutations and horizontal gene transfer via plasmid conjugation'."
        },
        {
          "q": "3. What catastrophic projection is made regarding AMR fatalities by 2050 without intervention?",
          "options": [
            "One thousand fatalities",
            "Ten million annual fatalities globally",
            "Zero fatalities",
            "Fifty thousand cases"
          ],
          "correct": 1,
          "explanation": "Epidemiologists project 'superbug infections could cause ten million annual fatalities by 2050'."
        },
        {
          "q": "4. The word 'prophylactic' in the passage refers to medical treatment that is:",
          "options": [
            "Administered as a preventive precaution before disease occurs",
            "Given only when a patient is critically ill",
            "Extremely expensive and rare",
            "Ineffective and herbal"
          ],
          "correct": 0,
          "explanation": "'Prophylactic' means intended to prevent disease or infection before it develops."
        }
      ]
    },
    {
      "id": "b2_p10",
      "number": 10,
      "title": "Reading 10: Urban Sociology & Gentrification",
      "badge": "Sociology & Urban Geography • B2",
      "instruction": "Read the sociological analysis of urban redevelopment and answer the 4 questions.",
      "passage": "Gentrification represents a complex socio-spatial phenomenon wherein historically disinvested working-class urban neighborhoods experience an influx of affluent residents, private speculative capital, and high-end commercial enterprises. While municipal governments celebrate gentrification for revitalizing deteriorating building facades, expanding municipal property tax bases, and attracting technology corridors, urban sociologists emphasize its asymmetric human toll. Escalating residential rents and commercial property assessments systematically displace long-standing multi-generational residents and legacy small businesses who cannot shoulder the sudden cost-of-living surges. Furthermore, gentrification erodes established informal social safety nets and cultural heritage, fracturing community solidarity. Urban policy scholars argue that inclusive urban revitalization must mandate community land trusts, deed-restricted affordable housing quotas, and municipal rent stabilization mechanisms.",
      "questions": [
        {
          "q": "1. Why do municipal governments frequently welcome gentrification?",
          "options": [
            "Because it decreases property values",
            "Because it renovates infrastructure, broadens tax revenues, and attracts capital",
            "Because it forces banks to close down",
            "Because it eliminates public transport"
          ],
          "correct": 1,
          "explanation": "Governments celebrate it for 'revitalizing deteriorating building facades, expanding municipal property tax bases, and attracting technology corridors'."
        },
        {
          "q": "2. What asymmetric consequence does gentrification impose on working-class populations?",
          "options": [
            "Free university education",
            "Systematic displacement due to soaring rents and cost-of-living surges",
            "Guaranteed corporate employment",
            "Lower grocery costs"
          ],
          "correct": 1,
          "explanation": "The text highlights: 'Escalating residential rents... systematically displace long-standing multi-generational residents'."
        },
        {
          "q": "3. In addition to economic displacement, what intangible community asset is fractured?",
          "options": [
            "Telephone lines",
            "Informal social safety nets, cultural heritage, and community solidarity",
            "Municipal water supplies",
            "Local radio frequencies"
          ],
          "correct": 1,
          "explanation": "The passage notes gentrification 'erodes established informal social safety nets and cultural heritage, fracturing community solidarity'."
        },
        {
          "q": "4. What policy intervention do urban scholars recommend to achieve equitable redevelopment?",
          "options": [
            "Banning all construction forever",
            "Community land trusts, affordable housing quotas, and rent stabilization",
            "Eliminating property taxes entirely",
            "Privatizing all public housing"
          ],
          "correct": 1,
          "explanation": "Scholars argue revitalization 'must mandate community land trusts, deed-restricted affordable housing quotas, and municipal rent stabilization'."
        }
      ]
    },
    {
      "id": "b2_p11",
      "number": 11,
      "title": "Reading 11: Benthic Ecology & Deep-Sea Mining",
      "badge": "Oceanography & Geopolitics • B2",
      "instruction": "Read about deep-sea mining and benthic ecosystems and answer the 4 questions.",
      "passage": "Thousands of meters beneath the sunlit ocean surface, the abyssal plains harbor polymetallic nodules—potato-sized mineral accretions containing high concentrations of nickel, cobalt, copper, and rare-earth elements vital for green battery technologies. Mining consortia are petitioning international regulatory bodies to authorize commercial benthic dredging. However, benthic oceanographers warn that deep-sea ecosystems are among the most fragile, slow-recovering habitats on Earth. Hydrothermal vents and abyssal muds support unique chemotrophic biodiversity that has evolved over millions of years in perpetual darkness. Heavy seabed scraping equipment would destroy ancient biomes, while colossal sediment plumes discharged from extraction vessels could drift for thousands of nautical miles, choking filter-feeding organisms across pelagic water columns. Marine scientists advocate a precautionary moratorium until the ecological impacts of benthic disruption are fully quantified.",
      "questions": [
        {
          "q": "1. Why are commercial mining consortia targeting deep-sea abyssal plains?",
          "options": [
            "To search for sunken pirate treasure",
            "To harvest polymetallic nodules containing battery minerals like nickel and cobalt",
            "To install underwater hotel resorts",
            "To capture deep-sea sharks for aquariums"
          ],
          "correct": 1,
          "explanation": "Mining groups target 'polymetallic nodules... containing high concentrations of nickel, cobalt, copper, and rare-earth elements'."
        },
        {
          "q": "2. Why are benthic abyssal ecosystems particularly susceptible to permanent damage?",
          "options": [
            "Because they are too warm",
            "Because they are fragile, slow-recovering habitats with specialized chemotrophic biodiversity",
            "Because ocean currents move too fast",
            "Because the seabed is made of volcanic glass"
          ],
          "correct": 1,
          "explanation": "The text notes: 'deep-sea ecosystems are among the most fragile, slow-recovering habitats on Earth'."
        },
        {
          "q": "3. What hazard do suspended sediment plumes pose to pelagic marine life?",
          "options": [
            "They freeze the ocean surface",
            "They drift across vast distances, choking filter-feeding marine organisms",
            "They increase ocean water salinity to toxic levels",
            "They attract predatory terrestrial birds"
          ],
          "correct": 1,
          "explanation": "Plumes 'could drift for thousands of nautical miles, choking filter-feeding organisms across pelagic water columns'."
        },
        {
          "q": "4. What international policy do marine scientists strongly advocate?",
          "options": [
            "Unrestricted commercial dredging immediately",
            "A precautionary moratorium until ecological ramifications are thoroughly quantified",
            "Subsidizing deep-sea mining companies with public funds",
            "Selling seabed minerals at fixed prices"
          ],
          "correct": 1,
          "explanation": "Scientists advocate 'a precautionary moratorium until the ecological impacts of benthic disruption are fully quantified'."
        }
      ]
    },
    {
      "id": "b2_p12",
      "number": 12,
      "title": "Reading 12: Dark Matter & Cosmological Models",
      "badge": "Astrophysics & Cosmology • B2",
      "instruction": "Read the astrophysics paper on cosmological structure and answer the 4 questions.",
      "passage": "In the standard Lambda Cold Dark Matter (Lambda-CDM) cosmological paradigm, baryonic matter—the ordinary atomic substance comprising stars, planets, and living organisms—accounts for a meager five percent of the total mass-energy inventory of the universe. An overwhelming twenty-seven percent is constituted by dark matter, an elusive, non-luminous substance that does not emit, absorb, or reflect electromagnetic radiation. Its pervasive presence is inferred strictly through gravitational interactions: Vera Rubin's foundational observations of galactic rotation curves revealed that outer stars in spiral galaxies orbit at velocities far exceeding predictions derived solely from visible mass, indicating an immense surrounding halo of unseen matter. Astrophysicists worldwide are deploying deep subterranean cryogenic detectors and particle colliders to detect hypothesized Weakly Interacting Massive Particles (WIMPs), seeking to unravel cosmology's most profound enigma.",
      "questions": [
        {
          "q": "1. What percentage of the universe's mass-energy inventory is composed of visible baryonic matter?",
          "options": [
            "Approximately five percent",
            "Twenty-seven percent",
            "Over sixty-eight percent",
            "Nearly ninety-nine percent"
          ],
          "correct": 0,
          "explanation": "The text specifies: 'baryonic matter... accounts for a meager five percent of the total mass-energy inventory'."
        },
        {
          "q": "2. How is dark matter detected if it does not interact with electromagnetic radiation?",
          "options": [
            "Through radio broadcast signals",
            "Strictly through its gravitational effects on visible celestial bodies",
            "By using optical telescopes at night",
            "Through its chemical smell in space"
          ],
          "correct": 1,
          "explanation": "The text states: 'Its pervasive presence is inferred strictly through gravitational interactions'."
        },
        {
          "q": "3. What observational discovery did Vera Rubin make regarding spiral galaxies?",
          "options": [
            "That galaxies collapse into black holes in minutes",
            "That outer stars orbit at velocities far greater than predicted by visible mass",
            "That galaxies stop spinning when stars cool down",
            "That all galaxies have identical shapes"
          ],
          "correct": 1,
          "explanation": "Rubin's observations 'revealed that outer stars in spiral galaxies orbit at velocities far exceeding predictions derived solely from visible mass'."
        },
        {
          "q": "4. What hypothetical particle are subterranean cryogenic detectors attempting to capture?",
          "options": [
            "Protons and neutrons",
            "Weakly Interacting Massive Particles (WIMPs)",
            "Cosmic dust grains",
            "Light photons"
          ],
          "correct": 1,
          "explanation": "The text notes detectors seek to capture 'hypothesized Weakly Interacting Massive Particles (WIMPs)'."
        }
      ]
    },
    {
      "id": "b2_p13",
      "number": 13,
      "title": "Reading 13: Rhetorical Devices in Dystopian Fiction",
      "badge": "Literary Criticism • B2",
      "instruction": "Read the literary analysis of dystopian novels and answer the 4 questions.",
      "passage": "Dystopian literature operates not merely as speculative entertainment, but as a razor-sharp rhetorical vehicle for sociocultural critique. In seminal twentieth-century masterworks such as George Orwell's *1984* and Aldous Huxley's *Brave New World*, the authors project contemporary political, technological, and ideological anxieties into extrapolated futures to sound profound warnings. Orwell investigates the psychological weaponization of language through 'Newspeak', demonstrating that by methodically excising nuanced vocabulary from the public lexicon, an authoritarian state can render subversive thought literally unthinkable. Conversely, Huxley illustrates a subtler modality of totalitarian control: subjugation achieved not through overt violence, but through ubiquitous sensory pleasure, biological conditioning, and engineered triviality that pacify citizen autonomy. Both texts demonstrate how linguistic manipulation and manufactured consensus serve as the bedrock of tyrannical regimes.",
      "questions": [
        {
          "q": "1. What is the fundamental socio-political function of dystopian literature according to the text?",
          "options": [
            "To provide cheerful escapism for leisure reading",
            "To serve as a rhetorical vehicle for sociocultural critique and political warning",
            "To teach children how to govern nations",
            "To celebrate authoritarian governments"
          ],
          "correct": 1,
          "explanation": "The text asserts dystopian literature 'operates... as a razor-sharp rhetorical vehicle for sociocultural critique'."
        },
        {
          "q": "2. How does the fictional language 'Newspeak' achieve totalitarian control in Orwell's *1984*?",
          "options": [
            "By making everyone whisper in public",
            "By methodically eliminating nuanced vocabulary to render subversive thought unthinkable",
            "By translating foreign literature",
            "By forcing citizens to write backward"
          ],
          "correct": 1,
          "explanation": "Orwell demonstrates that 'by methodically excising nuanced vocabulary... an authoritarian state can render subversive thought literally unthinkable'."
        },
        {
          "q": "3. In contrast to Orwell, how is authoritarian subjugation maintained in Huxley's *Brave New World*?",
          "options": [
            "Through physical torture in secret prisons",
            "Through ubiquitous sensory pleasure, conditioning, and engineered triviality",
            "Through military curfews and martial law",
            "Through complete economic starvation"
          ],
          "correct": 1,
          "explanation": "Huxley illustrates control 'achieved not through overt violence, but through ubiquitous sensory pleasure, biological conditioning, and engineered triviality'."
        },
        {
          "q": "4. The word 'subversive' in the second paragraph describes ideas that:",
          "options": [
            "Are officially approved by the government",
            "Seek to undermine, challenge, or overthrow an established authority",
            "Are related to underwater submarine navigation",
            "Have no meaning whatsoever"
          ],
          "correct": 1,
          "explanation": "'Subversive' refers to intentions or actions aimed at challenging, disrupting, or overthrowing established systems or power structures."
        }
      ]
    },
    {
      "id": "b2_p14",
      "number": 14,
      "title": "Reading 14: Intellectual Property & Generative AI",
      "badge": "Jurisprudence & Tech Law • B2",
      "instruction": "Read the legal critique of generative AI and intellectual property and answer the 4 questions.",
      "passage": "The rapid commercial proliferation of large-scale generative artificial intelligence models has destabilized traditional intellectual property (IP) jurisprudence. Deep neural networks are trained on billions of scraped digital assets—including copyrighted novels, digital illustrations, proprietary codebase repositories, and professional photographs—without explicit creator consent or monetary compensation. Technology firms invoke the Anglo-American 'fair use' doctrine, arguing that model ingestion constitutes a transformative process that extracts abstract statistical patterns rather than reproducing original creative expressions. However, visual artists and authors contend that generative engines function as unauthorized derivative synthesis engines, outputting commercial replications that unfairly undercut human livelihood. Legal scholars forecast that legislative bodies must overhaul copyright statutes, establishing statutory collective licensing frameworks to ensure creators receive equitable royalties for model training ingestion.",
      "questions": [
        {
          "q": "1. Why has generative AI destabilized traditional intellectual property law?",
          "options": [
            "Because computers cannot connect to the internet legally",
            "Because models train on billions of copyrighted works without explicit author consent or compensation",
            "Because software programs refuse to register copyright trademarks",
            "Because all digital artwork has become completely free"
          ],
          "correct": 1,
          "explanation": "The text explains models 'are trained on billions of scraped digital assets... without explicit creator consent or monetary compensation'."
        },
        {
          "q": "2. What legal defense do technology corporations invoke to justify mass data scraping?",
          "options": [
            "The sovereign immunity doctrine",
            "The 'fair use' doctrine, asserting that model training is transformative and extracts abstract statistical patterns",
            "The public domain contract",
            "The right of eminent domain"
          ],
          "correct": 1,
          "explanation": "Companies invoke 'the Anglo-American 'fair use' doctrine, arguing that model ingestion constitutes a transformative process'."
        },
        {
          "q": "3. What is the counter-argument articulated by visual artists and authors?",
          "options": [
            "That computers should be banned from drawing pictures",
            "That generative engines act as unauthorized derivative tools that undermine creator livelihood",
            "That all digital artwork should be printed on physical canvas",
            "That human artists should stop using technology"
          ],
          "correct": 1,
          "explanation": "Creators contend models 'function as unauthorized derivative synthesis engines, outputting commercial replications that unfairly undercut human livelihood'."
        },
        {
          "q": "4. What legislative compromise do legal scholars propose?",
          "options": [
            "Imprisoning all computer scientists",
            "Statutory collective licensing frameworks ensuring creators receive royalties for training ingestion",
            "Eliminating all copyright laws globally",
            "Forcing artists to give away their work for free"
          ],
          "correct": 1,
          "explanation": "Scholars forecast 'establishing statutory collective licensing frameworks to ensure creators receive equitable royalties'."
        }
      ]
    },
    {
      "id": "b2_p15",
      "number": 15,
      "title": "Reading 15: Nudge Theory & Public Policy",
      "badge": "Behavioral Science & Governance • B2",
      "instruction": "Read about behavioral public policy and answer the 4 questions.",
      "passage": "Conceived by economist Richard Thaler and legal scholar Cass Sunstein, 'Nudge Theory'—or libertarian paternalism—proposes that public policy can guide human behavior toward beneficial societal outcomes without mandating coercive bans or severe financial penalties. By altering the 'choice architecture' in subtle ways, policymakers steer choices while preserving individual freedom. A classic demonstration involves organ donation registries: countries utilizing 'opt-out' default enrollment—where citizens are automatically registered as organ donors unless they actively check a box to decline—routinely achieve consent rates exceeding ninety percent, compared to less than fifteen percent in nations utilizing 'opt-in' frameworks. However, ethical critics warn that manipulative nudging can border on subliminal coercion, demanding that governmental choice architects maintain transparent operational standards.",
      "questions": [
        {
          "q": "1. What is the core premise of 'Nudge Theory' (libertarian paternalism)?",
          "options": [
            "Imposing severe prison sentences for minor infractions",
            "Altering choice architecture to guide behavior toward beneficial outcomes without coercive bans",
            "Eliminating all government regulations and taxes",
            "Forcing citizens to make identical financial investments"
          ],
          "correct": 1,
          "explanation": "The text explains it 'can guide human behavior toward beneficial societal outcomes without mandating coercive bans or severe financial penalties'."
        },
        {
          "q": "2. How does the default setting affect organ donation registration rates?",
          "options": [
            "Default settings have zero impact on human decisions",
            "Opt-out defaults achieve consent rates exceeding 90%, whereas opt-in yields under 15%",
            "Opt-in frameworks double donation rates",
            "People refuse to donate under any default system"
          ],
          "correct": 1,
          "explanation": "The text states 'countries utilizing 'opt-out' default enrollment... achieve consent rates exceeding ninety percent, compared to less than fifteen percent in... 'opt-in''."
        },
        {
          "q": "3. What ethical concern do critics raise regarding behavioral nudging?",
          "options": [
            "That nudges cost too much taxpayer money to implement",
            "That manipulative nudging can border on subliminal coercion and lack democratic transparency",
            "That nudges never alter human habits",
            "That nudges cause economic inflation"
          ],
          "correct": 1,
          "explanation": "Critics warn 'that manipulative nudging can border on subliminal coercion, demanding that governmental choice architects maintain transparent operational standards'."
        },
        {
          "q": "4. What is 'choice architecture' in the context of behavioral policy?",
          "options": [
            "Designing the physical floor plans of voting booths",
            "The deliberate structural context and presentation through which choices are organized",
            "The mathematical calculation of election ballots",
            "Building architectural monuments for government leaders"
          ],
          "correct": 1,
          "explanation": "'Choice architecture' refers to the way in which choices are presented and structured to decision-makers."
        }
      ]
    },
    {
      "id": "b2_p16",
      "number": 16,
      "title": "Reading 16: Smart Grids & Utility-Scale Storage",
      "badge": "Energy Engineering • B2",
      "instruction": "Read about grid modernization and energy engineering and answer the 4 questions.",
      "passage": "The fundamental challenge of modern power grids is the instantaneous thermodynamic balancing of electrical supply and demand. Historically, baseload coal and natural gas turbines modulated output to mirror consumer load curves. However, the mass integration of non-synchronous, intermittent renewables like solar photovoltaics and wind turbines decouples generation from predictable demand patterns. When high renewable generation coincides with low demand, transmission lines risk severe overvoltage, necessitating costly renewable curtailment. To resolve this instability, electrical engineers are deploying utility-scale lithium-iron-phosphate (LFP) and redox-flow batteries alongside smart grid telemetry. By dynamically absorbing excess midday solar power and discharging it during peak evening surges in milliseconds, smart grids ensure grid reliability without relying on polluting fossil-fueled 'peaker plants'.",
      "questions": [
        {
          "q": "1. What is the fundamental physical requirement of electrical power grids?",
          "options": [
            "Generating electricity only on sunny days",
            "Instantaneous thermodynamic balancing of electrical supply and demand",
            "Keeping power lines at freezing temperatures",
            "Operating without transformers"
          ],
          "correct": 1,
          "explanation": "The opening sentence highlights: 'the instantaneous thermodynamic balancing of electrical supply and demand'."
        },
        {
          "q": "2. What grid problem occurs when high renewable output coincides with low consumer demand?",
          "options": [
            "Transmission lines risk severe overvoltage, forcing costly renewable curtailment",
            "Solar panels stop absorbing photons",
            "Windmills spin backward indefinitely",
            "Batteries discharge all power into the soil"
          ],
          "correct": 0,
          "explanation": "The text states: 'transmission lines risk severe overvoltage, necessitating costly renewable curtailment'."
        },
        {
          "q": "3. Which battery chemistries are deployed for utility-scale energy storage?",
          "options": [
            "Lead-acid car batteries only",
            "Lithium-iron-phosphate (LFP) and redox-flow batteries",
            "Standard alkaline AA batteries",
            "Mercury-zinc button cells"
          ],
          "correct": 1,
          "explanation": "The text lists: 'utility-scale lithium-iron-phosphate (LFP) and redox-flow batteries'."
        },
        {
          "q": "4. What polluting infrastructure is rendered obsolete by fast-reacting utility batteries?",
          "options": [
            "Rooftop solar panels",
            "Fossil-fueled 'peaker plants' used for evening surges",
            "Hydroelectric dams",
            "High-speed electric trains"
          ],
          "correct": 1,
          "explanation": "Batteries ensure reliability 'without relying on polluting fossil-fueled 'peaker plants''."
        }
      ]
    },
    {
      "id": "b2_p17",
      "number": 17,
      "title": "Reading 17: Anthropology of Asynchronous Digital Discourse",
      "badge": "Digital Humanities • B2",
      "instruction": "Read the anthropological critique of digital communication and answer the 4 questions.",
      "passage": "Digital anthropology investigates how asynchronous messaging platforms are reshaping human communicative rituals and linguistic pragmatics. In face-to-face vocal exchanges, interpersonal communication is enriched by immediate paralinguistic cues: prosodic inflection, ocular gaze, micro-gestures, and somatic pacing. In text-based digital corridors, where these physical modulators are stripped away, users have innovated complex semiotic compensatory systems. The strategic deployment of emojis, deliberate typographical alterations (such as elongated vowels or omission of terminal punctuation), and viral memes function not as juvenile slang, but as sophisticated pragmatic devices that convey nuanced emotional posture, irony, and conversational intimacy across temporal and geographic divides.",
      "questions": [
        {
          "q": "1. What paralinguistic elements are present in face-to-face communication but absent in digital text?",
          "options": [
            "Spelling and grammar rules",
            "Prosodic inflection, ocular gaze, micro-gestures, and somatic pacing",
            "Vocabulary lists",
            "Written signatures"
          ],
          "correct": 1,
          "explanation": "The text lists: 'prosodic inflection, ocular gaze, micro-gestures, and somatic pacing'."
        },
        {
          "q": "2. How do digital anthropology scholars view the use of emojis and typographical alterations?",
          "options": [
            "As evidence of linguistic degeneration and illiteracy",
            "As sophisticated pragmatic devices that convey tone, irony, and emotional nuance",
            "As accidental computer keyboard errors",
            "As secret military code"
          ],
          "correct": 1,
          "explanation": "Scholars view them 'not as juvenile slang, but as sophisticated pragmatic devices that convey nuanced emotional posture, irony'."
        },
        {
          "q": "3. What is an example of typographical compensation mentioned in the text?",
          "options": [
            "Writing in capital letters exclusively",
            "Elongated vowels or intentional omission of terminal punctuation",
            "Replacing words with numbers only",
            "Typing without spaces between sentences"
          ],
          "correct": 1,
          "explanation": "The text notes examples like 'elongated vowels or omission of terminal punctuation'."
        },
        {
          "q": "4. The word 'semiotic' in the passage relates to the study of:",
          "options": [
            "Geological rock layers",
            "Signs, symbols, and how meaning is constructed and communicated",
            "Bacterial cell division",
            "Historical coin currencies"
          ],
          "correct": 1,
          "explanation": "'Semiotic' pertains to semiotics, the study of signs, symbols, gestures, and communicative systems."
        }
      ]
    },
    {
      "id": "b2_p18",
      "number": 18,
      "title": "Reading 18: Synaptic Plasticity & Memory Consolidation",
      "badge": "Cognitive Neuroscience • B2",
      "instruction": "Read about neurobiology and long-term memory formation and answer the 4 questions.",
      "passage": "Memory formation is not a static recording process akin to videotape storage, but a dynamic, molecularly intricate neurobiological phenomenon. The cellular foundation of learning is Long-Term Potentiation (LTP)—a persistent strengthening of synapses based on recent patterns of neural activity. When two neurons repeatedly fire in temporal synchrony, biochemical cascades trigger the insertion of additional AMPA receptors into the postsynaptic dendritic spine, lowering the threshold for future electrical excitation. During deep non-rapid eye movement (NREM) slow-wave sleep, the hippocampus replays these newly encoded neural patterns, transferring episodic representations to the neocortex for long-term consolidation. Disrupting slow-wave sleep prevents this systemic transfer, leaving memories labile and vulnerable to retrograde interference.",
      "questions": [
        {
          "q": "1. What cellular mechanism constitutes the biological foundation of learning and memory?",
          "options": [
            "Cellular apoptosis",
            "Long-Term Potentiation (LTP), strengthening synaptic connections through synchronized firing",
            "Bone marrow cell division",
            "Muscle fiber expansion"
          ],
          "correct": 1,
          "explanation": "The text identifies 'Long-Term Potentiation (LTP)—a persistent strengthening of synapses based on recent patterns of neural activity'."
        },
        {
          "q": "2. What molecular change occurs at the postsynaptic dendritic spine during LTP?",
          "options": [
            "The spine completely detaches from the neuron",
            "Insertion of additional AMPA receptors, lowering the threshold for electrical excitation",
            "AMPA receptors are permanently destroyed",
            "The spine fills with calcium carbonate crystals"
          ],
          "correct": 1,
          "explanation": "Cascades trigger 'the insertion of additional AMPA receptors into the postsynaptic dendritic spine'."
        },
        {
          "q": "3. What critical neurobiological transfer occurs during deep slow-wave NREM sleep?",
          "options": [
            "The brain forgets all childhood memories",
            "The hippocampus replays neural patterns, transferring memories to the neocortex for long-term consolidation",
            "The brain stops all metabolic activity",
            "Neurons switch from electrical to pneumatic signals"
          ],
          "correct": 1,
          "explanation": "During sleep, 'the hippocampus replays these newly encoded neural patterns, transferring episodic representations to the neocortex'."
        },
        {
          "q": "4. The word 'labile' in the final sentence means:",
          "options": [
            "Permanent, unchangeable, and rock-solid",
            "Unstable, easily altered, or prone to decay",
            "Extremely painful",
            "Invisible to microscopes"
          ],
          "correct": 1,
          "explanation": "'Labile' means chemically or biologically unstable, fluctuating, and susceptible to alteration."
        }
      ]
    },
    {
      "id": "b2_p19",
      "number": 19,
      "title": "Reading 19: Climate Tipping Points & Teleconnections",
      "badge": "Earth Systems Science • B2",
      "instruction": "Read the climatology treatise on systemic climate thresholds and answer the 4 questions.",
      "passage": "Climate models frequently depict anthropogenic global warming as a gradual, linear trajectory proportional to cumulative greenhouse gas emissions. However, Earth systems scientists increasingly warn of nonlinear 'tipping elements'—critical continental-scale biophysical thresholds where modest incremental warming can trigger self-perpetuating, irreversible regime shifts. Prominent examples include the destabilization of the West Antarctic Ice Sheet, the thawing of subarctic permafrost releasing gigatons of trapped methane, and the collapse of the Atlantic Meridional Overturning Circulation (AMOC). Furthermore, climatologists emphasize planetary 'teleconnections': interconnected planetary feedback loops where the failure of one tipping element (such as Arctic sea ice loss) alters global jet stream dynamics, directly destabilizing monsoonal rainfall regimes in South Asia and South America.",
      "questions": [
        {
          "q": "1. How do climate tipping points differ from linear warming projections?",
          "options": [
            "Tipping points are completely reversible within days",
            "They represent nonlinear thresholds where modest warming triggers irreversible, self-perpetuating shifts",
            "Tipping points cool the Earth down immediately",
            "They apply only to polar bear populations"
          ],
          "correct": 1,
          "explanation": "Tipping elements are 'critical continental-scale biophysical thresholds where modest incremental warming can trigger self-perpetuating, irreversible regime shifts'."
        },
        {
          "q": "2. What catastrophic consequence is linked to the thawing of subarctic permafrost?",
          "options": [
            "Creation of new agricultural farmlands",
            "The release of gigatons of trapped greenhouse methane gas",
            "The freezing of ocean waters",
            "Immediate reforestation of the tundra"
          ],
          "correct": 1,
          "explanation": "The text warns of: 'thawing of subarctic permafrost releasing gigatons of trapped methane'."
        },
        {
          "q": "3. What is an Earth system 'teleconnection' as defined in the passage?",
          "options": [
            "A telecommunications satellite in low orbit",
            "Interconnected planetary feedback loops where disruption in one region triggers cascading systemic failures elsewhere",
            "A telephone line connecting research stations",
            "A computer network between climate laboratories"
          ],
          "correct": 1,
          "explanation": "Teleconnections are 'interconnected planetary feedback loops where the failure of one tipping element... directly destabilizes' distant systems."
        },
        {
          "q": "4. What distant weather pattern could be disrupted by Arctic sea ice loss?",
          "options": [
            "Daily sunrise times",
            "Monsoonal rainfall regimes in South Asia and South America",
            "Volcanic eruptions in Hawaii",
            "Ocean tidal heights on the moon"
          ],
          "correct": 1,
          "explanation": "The text notes Arctic loss alters jet streams, 'directly destabilizing monsoonal rainfall regimes in South Asia and South America'."
        }
      ]
    },
    {
      "id": "b2_p20",
      "number": 20,
      "title": "Reading 20: Pragmatics & Discourse in Political Speeches",
      "badge": "Political Rhetoric & Discourse • B2",
      "instruction": "Read the rhetorical analysis of political communication and answer the 4 questions.",
      "passage": "Critical discourse analysis (CDA) approaches political rhetoric not as passive descriptive communication, but as an active instrument of hegemonic power and ideological persuasion. In public speeches, political actors rarely rely solely on propositional logic or empirical data; instead, they mobilize calculated pragmatic framing to delineate the boundaries of acceptable debate. A ubiquitous device is the construction of binary dichotomies—such as framing complex geopolitical conflicts as clean struggles between 'freedom' and 'tyranny'. By strategically employing passive voice constructions ('mistakes were made'), orators systematically obfuscate personal agency and institutional culpability for controversial policies. Linguists demonstrate that deconstructing speech acts, presuppositions, and metaphors reveals the implicit power hierarchies covertly encoded within political discourse.",
      "questions": [
        {
          "q": "1. What is the foundational premise of Critical Discourse Analysis (CDA)?",
          "options": [
            "That all political speeches are entirely factual",
            "That rhetoric serves as an active instrument of power and ideological persuasion",
            "That grammar errors should be publicly penalized",
            "That political speeches should be translated into Latin"
          ],
          "correct": 1,
          "explanation": "CDA approaches rhetoric 'not as passive descriptive communication, but as an active instrument of hegemonic power and ideological persuasion'."
        },
        {
          "q": "2. How do political orators use binary dichotomies to manipulate public perception?",
          "options": [
            "By presenting ten equal viewpoints",
            "By simplifying complex geopolitical conflicts into stark contrasts like 'freedom' vs 'tyranny'",
            "By refusing to use adjectives",
            "By reciting mathematical formulas"
          ],
          "correct": 1,
          "explanation": "The text notes: 'framing complex geopolitical conflicts as clean struggles between 'freedom' and 'tyranny''."
        },
        {
          "q": "3. What rhetorical effect is achieved by using passive voice ('mistakes were made')?",
          "options": [
            "It highlights who committed the mistake clearly",
            "It obfuscates personal agency and institutional culpability for controversial actions",
            "It improves the poetic rhythm of the sentence",
            "It makes the speech longer"
          ],
          "correct": 1,
          "explanation": "The text explains orators 'systematically obfuscate personal agency and institutional culpability'."
        },
        {
          "q": "4. The word 'obfuscate' in the text is closest in meaning to:",
          "options": [
            "To clarify and make transparent",
            "To obscure, conceal, or make ambiguous",
            "To celebrate publicly",
            "To calculate mathematically"
          ],
          "correct": 1,
          "explanation": "'Obfuscate' means to deliberately make something obscure, unclear, or difficult to perceive."
        }
      ]
    },
    {
      "id": "b2_p21",
      "number": 21,
      "title": "Reading 21: Autonomous Systems & Legal Liability",
      "badge": "Jurisprudence & Emerging Tech • B2",
      "instruction": "Read the legal jurisprudence analysis and answer the 4 questions.",
      "passage": "The rapid deployment of autonomous systems—such as Level 4 self-driving vehicles, algorithmic medical diagnostics, and automated trading algorithms—has exposed profound theoretical cracks in traditional tort jurisprudence. Century-old legal doctrines assign liability based on human intentionality or negligence: a reasonable person failed to exercise due care. However, modern autonomous systems utilize deep learning architectures that operate with high degrees of emergent opacity—often termed the 'black box' problem—wherein decisions cannot be reconstructed post-hoc even by the software's original engineers. When an autonomous vehicle inevitably causes a fatal collision, does culpability lie with the passenger who failed to intervene, the automotive manufacturer, the software engineer who coded the perception model, or the fleet operator? Legal scholars argue that existing liability frameworks must transition toward strict enterprise liability or mandatory algorithmic risk insurance funds.",
      "questions": [
        {
          "q": "1. Why do autonomous systems challenge traditional tort law doctrines?",
          "options": [
            "Because computers do not have money to pay fines",
            "Because traditional tort law relies on human negligence and intent, which do not apply to opaque algorithmic agents",
            "Because self-driving cars never get into accidents",
            "Because software companies operate in outer space"
          ],
          "correct": 1,
          "explanation": "The text explains century-old law assigns liability based on 'human intentionality or negligence', which cracks under autonomous systems."
        },
        {
          "q": "2. What is the 'black box' problem described in the passage?",
          "options": [
            "The physical color of the vehicle's engine",
            "The inability to reconstruct an algorithm's internal decision path post-hoc due to deep neural complexity",
            "A flight recorder device in airplanes",
            "A locked luggage compartment in cars"
          ],
          "correct": 1,
          "explanation": "The text defines it as 'the 'black box' problem—wherein decisions cannot be reconstructed post-hoc even by the software's original engineers'."
        },
        {
          "q": "3. What liability dilemma arises when an autonomous vehicle causes a fatal accident?",
          "options": [
            "Whether the road should be closed forever",
            "Determining whether fault lies with the passenger, manufacturer, programmer, or fleet operator",
            "Whether driving should be banned for humans",
            "Calculating the price of gasoline consumed"
          ],
          "correct": 1,
          "explanation": "The text asks: 'does culpability lie with the passenger... the automotive manufacturer, the software engineer... or the fleet operator?'"
        },
        {
          "q": "4. What legal solution do scholars propose to resolve autonomous system liability?",
          "options": [
            "Complete immunity for all corporations",
            "Strict enterprise liability or mandatory algorithmic risk insurance funds",
            "Eliminating all courts of law",
            "Arresting computer scientists when accidents occur"
          ],
          "correct": 1,
          "explanation": "Scholars argue frameworks must 'transition toward strict enterprise liability or mandatory algorithmic risk insurance funds'."
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.TEENS_CRITICAL_READINGS = TEENS_CRITICAL_READINGS;
}
if (typeof globalThis !== "undefined") {
  globalThis.TEENS_CRITICAL_READINGS = TEENS_CRITICAL_READINGS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TEENS_CRITICAL_READINGS };
}

