/**
 * Bilikids Adventure - Toddlers 01 Curriculum Data
 * Units 01 - 05: School Objects, Me, Home and Family, My Body, Sunny and Cloudy
 */

const _BK_ICONS = (typeof window !== 'undefined' && window.BILIKIDS_ICONS) ? window.BILIKIDS_ICONS : {
  TABLE: `<svg viewBox="0 0 64 64" width="1.15em" height="1.15em" style="display:inline-block;vertical-align:-0.18em;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.18));" class="bilikids-icon-table" aria-label="Table"><defs><linearGradient id="bkTableTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient><linearGradient id="bkTableLeg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#78350f"/></linearGradient></defs><line x1="16" y1="30" x2="14" y2="52" stroke="#92400e" stroke-width="4.5" stroke-linecap="round"/><line x1="48" y1="30" x2="50" y2="52" stroke="#92400e" stroke-width="4.5" stroke-linecap="round"/><rect x="11" y="27" width="42" height="6" rx="2" fill="#92400e"/><line x1="11" y1="30" x2="9" y2="58" stroke="url(#bkTableLeg)" stroke-width="5.5" stroke-linecap="round"/><line x1="53" y1="30" x2="55" y2="58" stroke="url(#bkTableLeg)" stroke-width="5.5" stroke-linecap="round"/><rect x="5" y="24" width="54" height="6" rx="3" fill="#b45309"/><rect x="4" y="17" width="56" height="11" rx="4" fill="url(#bkTableTop)"/><line x1="8" y1="20" x2="56" y2="20" stroke="#fef3c7" stroke-width="1.8" stroke-linecap="round" opacity="0.85"/></svg>`,
  TABLE_GREEN: `<svg viewBox="0 0 64 64" width="1.15em" height="1.15em" style="display:inline-block;vertical-align:-0.18em;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.18));" class="bilikids-icon-table" aria-label="Green Table"><defs><linearGradient id="bkTableGreenTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#059669"/></linearGradient><linearGradient id="bkTableGreenLeg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#047857"/><stop offset="100%" stop-color="#064e3b"/></linearGradient></defs><line x1="16" y1="30" x2="14" y2="52" stroke="#065f46" stroke-width="4.5" stroke-linecap="round"/><line x1="48" y1="30" x2="50" y2="52" stroke="#065f46" stroke-width="4.5" stroke-linecap="round"/><rect x="11" y="27" width="42" height="6" rx="2" fill="#065f46"/><line x1="11" y1="30" x2="9" y2="58" stroke="url(#bkTableGreenLeg)" stroke-width="5.5" stroke-linecap="round"/><line x1="53" y1="30" x2="55" y2="58" stroke="url(#bkTableGreenLeg)" stroke-width="5.5" stroke-linecap="round"/><rect x="5" y="24" width="54" height="6" rx="3" fill="#047857"/><rect x="4" y="17" width="56" height="11" rx="4" fill="url(#bkTableGreenTop)"/><line x1="8" y1="20" x2="56" y2="20" stroke="#d1fae5" stroke-width="1.8" stroke-linecap="round" opacity="0.85"/></svg>`,
  TABLE_BROWN: `<svg viewBox="0 0 64 64" width="1.15em" height="1.15em" style="display:inline-block;vertical-align:-0.18em;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.18));" class="bilikids-icon-table" aria-label="Brown Table"><defs><linearGradient id="bkTableBrownTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a16207"/><stop offset="100%" stop-color="#713f12"/></linearGradient><linearGradient id="bkTableBrownLeg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#552c08"/><stop offset="100%" stop-color="#381b04"/></linearGradient></defs><line x1="16" y1="30" x2="14" y2="52" stroke="#451a03" stroke-width="4.5" stroke-linecap="round"/><line x1="48" y1="30" x2="50" y2="52" stroke="#451a03" stroke-width="4.5" stroke-linecap="round"/><rect x="11" y="27" width="42" height="6" rx="2" fill="#451a03"/><line x1="11" y1="30" x2="9" y2="58" stroke="url(#bkTableBrownLeg)" stroke-width="5.5" stroke-linecap="round"/><line x1="53" y1="30" x2="55" y2="58" stroke="url(#bkTableBrownLeg)" stroke-width="5.5" stroke-linecap="round"/><rect x="5" y="24" width="54" height="6" rx="3" fill="#552c08"/><rect x="4" y="17" width="56" height="11" rx="4" fill="url(#bkTableBrownTop)"/><line x1="8" y1="20" x2="56" y2="20" stroke="#fef08a" stroke-width="1.8" stroke-linecap="round" opacity="0.85"/></svg>`
};
if (typeof window !== 'undefined' && !window.BILIKIDS_ICONS) window.BILIKIDS_ICONS = _BK_ICONS;

window.TODDLERS_UNITS_PART1 = [
  // ==========================================================================
  // UNIT 01: SCHOOL OBJECTS
  // ==========================================================================
  {
    id: 1,
    code: "unit_01",
    title: "School Objects",
    subtitle: "Classroom Supplies, Shapes & Colors",
    icon: "🎒",
    themeColor: "#4f46e5",
    themeLight: "#eef2ff",
    structures: ["Verb to be", "Present Simple", "This is"],
    functions: ["Greeting people", "Exchanging personal information", "Identifying classroom objects", "Identifying colors", "Identifying shapes", "Identifying quantity"],
    vocabulary: ["Book", "Chair", "Crayon", "Glue stick", "Lunchbox", "Paper", "School", "Scissors", "Table", "Colors", "Numbers 1–5"],
    phonicsFocus: "Short /u/ and /æ/ sounds: Cut, Bag, Table",

    explore: [
      { name: "Book", icon: "📖", fact: "We read wonderful stories in our classroom books.", audio: "book", color: "Blue", shape: "Rectangle", count: 1 },
      { name: "Chair", icon: "🪑", fact: "We sit comfortably on the chair during storytime.", audio: "chair", color: "Brown", shape: "Square", count: 2 },
      { name: "Crayon", icon: "🖍️", fact: "Crayons bring our drawings to life with bright colors.", audio: "crayon", color: "Red", shape: "Cylinder", count: 5 },
      { name: "Glue stick", icon: "🧴", fact: "Glue stick helps us stick colorful craft papers together.", audio: "glue stick", color: "Purple", shape: "Cylinder", count: 1 },
      { name: "Lunchbox", icon: "🍱", fact: "The lunchbox keeps healthy snacks fresh and yummy.", audio: "lunchbox", color: "Yellow", shape: "Rectangle", count: 1 },
      { name: "Scissors", icon: "✂️", fact: "Safety scissors cut paper shapes with adult supervision.", audio: "scissors", color: "Orange", shape: "Cross", count: 1 },
      { name: "Table", icon: _BK_ICONS.TABLE, fact: "Our classroom table is where we draw, write and create.", audio: "table", color: "Green", shape: "Circle", count: 1 },
      { name: "Paper", icon: "📄", fact: "Clean white paper ready for imaginative sketches.", audio: "paper", color: "White", shape: "Rectangle", count: 4 }
    ],

    listening: [
      {
        id: "u1_l1",
        title: "Classroom Sound Hunt",
        desc: "Listen to the spoken word and tap the correct classroom supply.",
        exercises: [
          { audio: "Book", prompt: "Listen and find: Book", options: [{ name: "Book", icon: "📖" }, { name: "Chair", icon: "🪑" }, { name: "Paper", icon: "📄" }], correct: 0 },
          { audio: "Crayon", prompt: "Listen and find: Crayon", options: [{ name: "Scissors", icon: "✂️" }, { name: "Crayon", icon: "🖍️" }, { name: "Table", icon: _BK_ICONS.TABLE }], correct: 1 },
          { audio: "Lunchbox", prompt: "Listen and find: Lunchbox", options: [{ name: "Glue stick", icon: "🧴" }, { name: "Chair", icon: "🪑" }, { name: "Lunchbox", icon: "🍱" }], correct: 2 },
          { audio: "Scissors", prompt: "Listen and find: Scissors", options: [{ name: "Scissors", icon: "✂️" }, { name: "Book", icon: "📖" }, { name: "Paper", icon: "📄" }], correct: 0 },
          { audio: "Glue stick", prompt: "Listen and find: Glue stick", options: [{ name: "Table", icon: _BK_ICONS.TABLE }, { name: "Glue stick", icon: "🧴" }, { name: "Crayon", icon: "🖍️" }], correct: 1 }
        ]
      },
      {
        id: "u1_l2",
        title: "Listen and Collect",
        desc: "Teacher Luna needs materials. Listen to the instruction and collect the right item.",
        exercises: [
          { audio: "Collect two crayons", prompt: "Collect two crayons for our drawing", options: [{ name: "2 Crayons", icon: "🖍️🖍️" }, { name: "1 Book", icon: "📖" }, { name: "3 Papers", icon: "📄📄📄" }], correct: 0 },
          { audio: "Put the paper on the table", prompt: "Put the paper on the table", options: [{ name: "Paper on table", icon: "📄" + _BK_ICONS.TABLE }, { name: "Scissors in box", icon: "✂️📦" }, { name: "Crayon on chair", icon: "🖍️🪑" }], correct: 0 },
          { audio: "Pick up the blue lunchbox", prompt: "Pick up the blue lunchbox", options: [{ name: "Red crayon", icon: "🖍️" }, { name: "Blue lunchbox", icon: "🍱" }, { name: "Green chair", icon: "🪑" }], correct: 1 },
          { audio: "Find the yellow scissors", prompt: "Find the yellow scissors", options: [{ name: "White paper", icon: "📄" }, { name: "Glue stick", icon: "🧴" }, { name: "Yellow scissors", icon: "✂️" }], correct: 2 },
          { audio: "Place the book on the chair", prompt: "Place the book on the chair", options: [{ name: "Book on chair", icon: "📖🪑" }, { name: "Book on floor", icon: "📖⬇️" }, { name: "Lunchbox on table", icon: "🍱" + _BK_ICONS.TABLE }], correct: 0 }
        ]
      },
      {
        id: "u1_l3",
        title: "Color Instructions",
        desc: "Listen to the color directive and select the item with that exact shade.",
        exercises: [
          { audio: "Touch the red crayon", prompt: "Touch the red crayon", options: [{ name: "Red Crayon", icon: _BK_ICONS.CRAYON_RED, color: "Red" }, { name: "Blue Crayon", icon: _BK_ICONS.CRAYON_BLUE, color: "Blue" }, { name: "Green Crayon", icon: _BK_ICONS.CRAYON_GREEN, color: "Green" }], correct: 0 },
          { audio: "Select the yellow book", prompt: "Select the yellow book", options: [{ name: "Purple Book", icon: _BK_ICONS.BOOK_PURPLE }, { name: "Yellow Book", icon: "📒" }, { name: "Black Book", icon: "📓" }], correct: 1 },
          { audio: "Where is the purple glue stick?", prompt: "Where is the purple glue stick?", options: [{ name: "Orange Box", icon: "📦" }, { name: "Purple Glue", icon: "🧴" }, { name: "Blue Paper", icon: "📄" }], correct: 1 },
          { audio: "Find the green table", prompt: "Find the green table", options: [{ name: "Brown Chair", icon: "🪑" }, { name: "Red Scissors", icon: "✂️" }, { name: "Green Table", icon: _BK_ICONS.TABLE_GREEN }], correct: 2 },
          { audio: "Touch the orange scissors", prompt: "Touch the orange scissors", options: [{ name: "Orange Scissors", icon: "✂️" }, { name: "Blue Lunchbox", icon: "🍱" }, { name: "Yellow Pencil", icon: "✏️" }], correct: 0 }
        ]
      },
      {
        id: "u1_l4",
        title: "What’s Missing?",
        desc: "Look at the desk. An object was removed! Listen to the clue to discover what disappeared.",
        exercises: [
          { audio: "We use it to read stories. What is missing?", prompt: "Clue: We read stories with it.", options: [{ name: "Book", icon: "📖" }, { name: "Chair", icon: "🪑" }, { name: "Scissors", icon: "✂️" }], correct: 0 },
          { audio: "We color rainbows with it. What is missing?", prompt: "Clue: Used to color rainbows.", options: [{ name: "Lunchbox", icon: "🍱" }, { name: "Crayon", icon: "🖍️" }, { name: "Table", icon: _BK_ICONS.TABLE }], correct: 1 },
          { audio: "It sticks pictures onto our poster. What is missing?", prompt: "Clue: It sticks paper together.", options: [{ name: "Paper", icon: "📄" }, { name: "Book", icon: "📖" }, { name: "Glue stick", icon: "🧴" }], correct: 2 },
          { audio: "It keeps your sandwich fresh. What is missing?", prompt: "Clue: Holds your delicious sandwich.", options: [{ name: "Lunchbox", icon: "🍱" }, { name: "Chair", icon: "🪑" }, { name: "Scissors", icon: "✂️" }], correct: 0 },
          { audio: "You sit on it when you listen. What is missing?", prompt: "Clue: You sit on it.", options: [{ name: "Table", icon: _BK_ICONS.TABLE }, { name: "Chair", icon: "🪑" }, { name: "Crayon", icon: "🖍️" }], correct: 1 }
        ]
      },
      {
        id: "u1_l5",
        title: "Count the Supplies",
        desc: "Listen to the quantity stated in English and choose the group matching that count.",
        exercises: [
          { audio: "I see three crayons", prompt: "Listen: 'I see three crayons'", options: [{ name: "2 Crayons", icon: "🖍️🖍️" }, { name: "3 Crayons", icon: "🖍️🖍️🖍️" }, { name: "4 Crayons", icon: "🖍️🖍️🖍️🖍️" }], correct: 1 },
          { audio: "Show me two books", prompt: "Listen: 'Show me two books'", options: [{ name: "2 Books", icon: "📖📖" }, { name: "1 Book", icon: "📖" }, { name: "5 Books", icon: "📖📖📖📖📖" }], correct: 0 },
          { audio: "Find four papers", prompt: "Listen: 'Find four papers'", options: [{ name: "3 Papers", icon: "📄📄📄" }, { name: "5 Papers", icon: "📄📄📄📄📄" }, { name: "4 Papers", icon: "📄📄📄📄" }], correct: 2 },
          { audio: "There is one lunchbox", prompt: "Listen: 'There is one lunchbox'", options: [{ name: "1 Lunchbox", icon: "🍱" }, { name: "2 Lunchboxes", icon: "🍱🍱" }, { name: "3 Lunchboxes", icon: "🍱🍱🍱" }], correct: 0 },
          { audio: "Count five scissors", prompt: "Listen: 'Count five scissors'", options: [{ name: "4 Scissors", icon: "✂️✂️✂️✂️" }, { name: "5 Scissors", icon: "✂️✂️✂️✂️✂️" }, { name: "3 Scissors", icon: "✂️✂️✂️" }], correct: 1 }
        ]
      },
      {
        id: "u1_l6",
        title: "Classroom Instructions",
        desc: "Follow multi-step classroom actions guided by teacher voice.",
        exercises: [
          { audio: "Stand up and point to the door", prompt: "Follow instruction: Stand up & point to door", options: [{ name: "Point to door", icon: "🚪👉" }, { name: "Sit down", icon: "🪑" }, { name: "Open book", icon: "📖" }], correct: 0 },
          { audio: "Open your blue book", prompt: "Follow instruction: Open your blue book", options: [{ name: "Close book", icon: "📕" }, { name: "Open book", icon: "📖" }, { name: "Draw crayon", icon: "🖍️" }], correct: 1 },
          { audio: "Put the crayons in the box", prompt: "Follow instruction: Put crayons in the box", options: [{ name: "Crayons on floor", icon: "🖍️⬇️" }, { name: "Crayons in box", icon: "🖍️📦" }, { name: "Paper in box", icon: "📄📦" }], correct: 1 },
          { audio: "Say hello to your friend", prompt: "Follow instruction: Say hello to your friend", options: [{ name: "Wave & say hello", icon: "👋😊" }, { name: "Sleep on desk", icon: "😴" }, { name: "Eat lunch", icon: "🥪" }], correct: 0 },
          { audio: "Sit on your chair quietly", prompt: "Follow instruction: Sit on your chair", options: [{ name: "Run around", icon: "🏃" }, { name: "Sit quietly", icon: "🪑🤫" }, { name: "Climb table", icon: "🪜" }], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u1_r1",
        title: "Match Classroom Words",
        desc: "Read the written word card and tap the matching illustration.",
        exercises: [
          { text: "BOOK", prompt: "Read: BOOK", options: [{ name: "Book", icon: "📖" }, { name: "Table", icon: _BK_ICONS.TABLE }, { name: "Chair", icon: "🪑" }], correct: 0 },
          { text: "CRAYON", prompt: "Read: CRAYON", options: [{ name: "Scissors", icon: "✂️" }, { name: "Crayon", icon: "🖍️" }, { name: "Paper", icon: "📄" }], correct: 1 },
          { text: "CHAIR", prompt: "Read: CHAIR", options: [{ name: "Lunchbox", icon: "🍱" }, { name: "Glue stick", icon: "🧴" }, { name: "Chair", icon: "🪑" }], correct: 2 },
          { text: "TABLE", prompt: "Read: TABLE", options: [{ name: "Table", icon: _BK_ICONS.TABLE }, { name: "Book", icon: "📖" }, { name: "Paper", icon: "📄" }], correct: 0 },
          { text: "SCISSORS", prompt: "Read: SCISSORS", options: [{ name: "Crayon", icon: "🖍️" }, { name: "Scissors", icon: "✂️" }, { name: "Chair", icon: "🪑" }], correct: 1 }
        ]
      },
      {
        id: "u1_r2",
        title: "Read and Find",
        desc: "Read the short sentence and discover where the item is located in the classroom.",
        exercises: [
          { text: "This is a red crayon.", prompt: "Find: 'This is a red crayon.'", options: [{ name: "Red Crayon", icon: "🖍️" }, { name: "Blue Book", icon: "📖" }, { name: "Yellow Scissors", icon: "✂️" }], correct: 0 },
          { text: "This is my blue lunchbox.", prompt: "Find: 'This is my blue lunchbox.'", options: [{ name: "Brown Chair", icon: "🪑" }, { name: "Blue Lunchbox", icon: "🍱" }, { name: "Green Table", icon: _BK_ICONS.TABLE_GREEN }], correct: 1 },
          { text: "This is white paper.", prompt: "Find: 'This is white paper.'", options: [{ name: "Glue stick", icon: "🧴" }, { name: "Crayon", icon: "🖍️" }, { name: "White paper", icon: "📄" }], correct: 2 },
          { text: "This is a brown table.", prompt: "Find: 'This is a brown table.'", options: [{ name: "Brown Table", icon: _BK_ICONS.TABLE_BROWN }, { name: "Scissors", icon: "✂️" }, { name: "Lunchbox", icon: "🍱" }], correct: 0 },
          { text: "This is a purple glue stick.", prompt: "Find: 'This is a purple glue stick.'", options: [{ name: "Red Book", icon: "📖" }, { name: "Purple Glue stick", icon: "🧴" }, { name: "Yellow Chair", icon: "🪑" }], correct: 1 }
        ]
      },
      {
        id: "u1_r3",
        title: "Complete This Is",
        desc: "Select the correct word to finish the sentence: 'This is a...'",
        exercises: [
          { text: "This is a ______ . (📖)", prompt: "Complete: This is a ______", options: ["book", "chair", "crayon"], correct: 0 },
          { text: "This is a ______ . (🪑)", prompt: "Complete: This is a ______", options: ["table", "chair", "paper"], correct: 1 },
          { text: "This is a ______ . (🖍️)", prompt: "Complete: This is a ______", options: ["lunchbox", "scissors", "crayon"], correct: 2 },
          { text: "This is a ______ . (✂️)", prompt: "Complete: This is a ______", options: ["scissors", "glue stick", "book"], correct: 0 },
          { text: "This is a ______ . (Table)", prompt: "Complete: This is a ______", options: ["chair", "table", "paper"], correct: 1 }
        ]
      },
      {
        id: "u1_r4",
        title: "Classroom Mini Story",
        desc: "Read the 3-line story and answer the comprehension question.",
        exercises: [
          { text: "Leo is at school. He has a blue book. Leo sits on a red chair.", prompt: "What color is Leo's book?", options: ["Blue", "Red", "Yellow"], correct: 0 },
          { text: "Luna has yellow crayons. She draws a big green tree on white paper.", prompt: "What does Luna draw?", options: ["A house", "A green tree", "A car"], correct: 1 },
          { text: "It is 12 o'clock. Bili opens his lunchbox. He eats a delicious apple.", prompt: "What does Bili eat?", options: ["A banana", "A cookie", "An apple"], correct: 2 },
          { text: "The teacher says: 'Take your scissors and glue stick.' The kids make a paper star.", prompt: "What do the kids make?", options: ["A paper star", "A robot", "A boat"], correct: 0 },
          { text: "School is fun! We sing songs and read five storybooks on the rug.", prompt: "How many storybooks did they read?", options: ["Three", "Five", "Two"], correct: 1 }
        ]
      },
      {
        id: "u1_r5",
        title: "Shape and Word Match",
        desc: "Match the classroom object with its geometric shape.",
        exercises: [
          { text: "The book has four sides like a ______ .", prompt: "What shape is the book?", options: ["Rectangle", "Circle", "Triangle"], correct: 0 },
          { text: "The round clock on the classroom wall is a ______ .", prompt: "What shape is the clock?", options: ["Square", "Circle", "Oval"], correct: 1 },
          { text: "The party hat we made is shaped like a ______ .", prompt: "What shape is the party hat?", options: ["Square", "Rectangle", "Triangle"], correct: 2 },
          { text: "The square table top has four equal sides. It is a ______ .", prompt: "Four equal sides makes a...", options: ["Square", "Star", "Circle"], correct: 0 },
          { text: "Our bright yellow star sticker is a ______ .", prompt: "Identify the shape:", options: ["Circle", "Star", "Square"], correct: 1 }
        ]
      },
      {
        id: "u1_r6",
        title: "Read the Classroom Map",
        desc: "Look at the classroom map layout and identify where objects belong.",
        exercises: [
          { text: "The teacher's desk is near the board. (Desk ➔ Board)", prompt: "Where is the teacher's desk?", options: ["Near the board", "Outside in garden", "In the hallway"], correct: 0 },
          { text: "The bookshelf is in the reading corner. (Books ➔ Corner)", prompt: "Where are the books kept?", options: ["In reading corner", "Under the chair", "In the trash can"], correct: 0 },
          { text: "The student chairs are arranged around the green table.", prompt: "What is in the middle of the chairs?", options: ["The door", "The green table", "The window"], correct: 1 },
          { text: "Our backpacks and lunchboxes hang on the hook rack.", prompt: "Where do we hang lunchboxes?", options: ["On the floor", "On table", "On the hook rack"], correct: 2 },
          { text: "The art station has colored paper, crayons, and scissors.", prompt: "What is at the art station?", options: ["Pajamas and beds", "Crayons and paper", "Soup bowls"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u1_w1",
        title: "Build School Words",
        desc: "Unscramble the letters to spell the school object correctly.",
        exercises: [
          { target: "BOOK", letters: ["O", "B", "K", "O"], icon: "📖", hint: "Something you read" },
          { target: "CHAIR", letters: ["A", "C", "H", "I", "R"], icon: "🪑", hint: "You sit on it" },
          { target: "TABLE", letters: ["B", "T", "A", "L", "E"], icon: _BK_ICONS.TABLE, hint: "Desk to work on" },
          { target: "PAPER", letters: ["P", "A", "R", "E", "P"], icon: "📄", hint: "White sheet to draw" },
          { target: "PEN", letters: ["N", "E", "P"], icon: "🖊️", hint: "Used for writing" }
        ]
      },
      {
        id: "u1_w2",
        title: "Complete Missing Letters",
        desc: "Fill in the missing vowel or consonant in the word.",
        exercises: [
          { target: "B_OK", missing: "O", full: "BOOK", options: ["O", "A", "E"], icon: "📖" },
          { target: "CH_IR", missing: "A", full: "CHAIR", options: ["E", "A", "U"], icon: "🪑" },
          { target: "T_BLE", missing: "A", full: "TABLE", options: ["I", "A", "O"], icon: _BK_ICONS.TABLE },
          { target: "P_PER", missing: "A", full: "PAPER", options: ["A", "U", "E"], icon: "📄" },
          { target: "SCH_OL", missing: "O", full: "SCHOOL", options: ["O", "I", "U"], icon: "🏫" }
        ]
      },
      {
        id: "u1_w3",
        title: "Label the Classroom",
        desc: "Type or select the correct label for each featured classroom item.",
        exercises: [
          { prompt: "Label this object: 📖", answer: "book", accepted: ["book", "Book", "a book"] },
          { prompt: "Label this object: 🪑", answer: "chair", accepted: ["chair", "Chair", "a chair"] },
          { prompt: "Label this object: 🖍️", answer: "crayon", accepted: ["crayon", "Crayon", "a crayon"] },
          { prompt: "Label this object: ✂️", answer: "scissors", accepted: ["scissors", "Scissors"] },
          { prompt: "Label this object: Table", icon: _BK_ICONS.TABLE, answer: "table", accepted: ["table", "Table", "a table"] }
        ]
      },
      {
        id: "u1_w4",
        title: "Write the Object",
        desc: "Look at the clue and write the exact vocabulary word.",
        exercises: [
          { clue: "We cut paper with: ✂️", answer: "scissors", accepted: ["scissors", "Scissors"] },
          { clue: "We glue paper with: 🧴", answer: "glue", accepted: ["glue", "glue stick", "Glue stick"] },
          { clue: "We carry lunch in: 🍱", answer: "lunchbox", accepted: ["lunchbox", "Lunchbox"] },
          { clue: "We read stories in: 📖", answer: "book", accepted: ["book", "Book"] },
          { clue: "We sit down on a: 🪑", answer: "chair", accepted: ["chair", "Chair"] }
        ]
      },
      {
        id: "u1_w5",
        title: "Build Sentences with This Is",
        desc: "Reorder the word blocks to make a complete sentence.",
        exercises: [
          { tokens: ["This", "is", "a", "book."], target: "This is a book." },
          { tokens: ["This", "is", "my", "chair."], target: "This is my chair." },
          { tokens: ["This", "is", "a", "red", "crayon."], target: "This is a red crayon." },
          { tokens: ["This", "is", "our", "school."], target: "This is our school." },
          { tokens: ["This", "is", "a", "clean", "table."], target: "This is a clean table." }
        ]
      },
      {
        id: "u1_w6",
        title: "My School Inventory",
        desc: "Complete your inventory checklist with correct numbers and items.",
        exercises: [
          { sentence: "I have ______ (2) books in my backpack.", answer: "two", accepted: ["two", "2"] },
          { sentence: "I have ______ (3) crayons on the table.", answer: "three", accepted: ["three", "3"] },
          { sentence: "I have ______ (1) lunchbox with an apple.", answer: "one", accepted: ["one", "1"] },
          { sentence: "I see ______ (4) chairs in my row.", answer: "four", accepted: ["four", "4"] },
          { sentence: "I have ______ (5) paper sheets.", answer: "five", accepted: ["five", "5"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u1_s1",
        title: "Listen and Repeat School Words",
        desc: "Listen to the native voice and pronounce the word clearly.",
        exercises: [
          { prompt: "Say: Book", audio: "Book", target: "book", icon: "📖" },
          { prompt: "Say: Chair", audio: "Chair", target: "chair", icon: "🪑" },
          { prompt: "Say: Crayon", audio: "Crayon", target: "crayon", icon: "🖍️" },
          { prompt: "Say: School", audio: "School", target: "school", icon: "🏫" },
          { prompt: "Say: Table", audio: "Table", target: "table", icon: _BK_ICONS.TABLE }
        ]
      },
      {
        id: "u1_s2",
        title: "What Is This?",
        desc: "Look at the picture and answer the question aloud: 'This is a...'",
        exercises: [
          { prompt: "What is this? 📖", audio: "What is this?", target: "book", fullAnswer: "This is a book" },
          { prompt: "What is this? 🪑", audio: "What is this?", target: "chair", fullAnswer: "This is a chair" },
          { prompt: "What is this? ✂️", audio: "What is this?", target: "scissors", fullAnswer: "These are scissors" },
          { prompt: "What is this? 🍱", audio: "What is this?", target: "lunchbox", fullAnswer: "This is a lunchbox" },
          { prompt: "What is this? 🧴", audio: "What is this?", target: "glue stick", fullAnswer: "This is a glue stick" }
        ]
      },
      {
        id: "u1_s3",
        title: "What Color Is It?",
        desc: "Look at the object and say its color in English.",
        exercises: [
          { prompt: "What color is the crayon? (🔴)", target: "red", audio: "It is red" },
          { prompt: "What color is the book? (🔵)", target: "blue", audio: "It is blue" },
          { prompt: "What color is the lunchbox? (🟡)", target: "yellow", audio: "It is yellow" },
          { prompt: "What color is the table? (🟢)", target: "green", audio: "It is green" },
          { prompt: "What color is the chair? (🟣)", target: "purple", audio: "It is purple" }
        ]
      },
      {
        id: "u1_s4",
        title: "Count the Objects",
        desc: "Count the items aloud and state the number in English.",
        exercises: [
          { prompt: "Count: 🖍️🖍️🖍️", target: "three", audio: "Three crayons" },
          { prompt: "Count: 📖📖", target: "two", audio: "Two books" },
          { prompt: "Count: 🍱", target: "one", audio: "One lunchbox" },
          { prompt: "Count: 📄📄📄📄", target: "four", audio: "Four papers" },
          { prompt: "Count: ✂️✂️✂️✂️✂️", target: "five", audio: "Five scissors" }
        ]
      },
      {
        id: "u1_s5",
        title: "Describe My Classroom",
        desc: "Practice complete descriptive sentences.",
        exercises: [
          { prompt: "Repeat: 'My classroom is big and clean.'", target: "my classroom is big and clean" },
          { prompt: "Repeat: 'I like my school friends.'", target: "i like my school friends" },
          { prompt: "Repeat: 'We have books on the table.'", target: "we have books on the table" },
          { prompt: "Repeat: 'Teacher Luna is very nice.'", target: "teacher luna is very nice" },
          { prompt: "Repeat: 'I draw with my crayons.'", target: "i draw with my crayons" }
        ]
      },
      {
        id: "u1_s6",
        title: "My Favorite School Object",
        desc: "Express personal preferences: 'My favorite object is...'",
        exercises: [
          { prompt: "Say: 'My favorite school object is the book.'", target: "my favorite school object is the book" },
          { prompt: "Say: 'I love coloring with red crayons.'", target: "i love coloring with red crayons" },
          { prompt: "Say: 'I carry my lunchbox to school.'", target: "i carry my lunchbox to school" },
          { prompt: "Say: 'I sit nicely on my chair.'", target: "i sit nicely on my chair" },
          { prompt: "Say: 'School is fun every day!'", target: "school is fun every day" }
        ]
      }
    ],

    videos: [
      {
        title: "School Supplies Song | British Council LearnEnglish Kids",
        videoId: "g7kK989HiRQ",
        embedUrl: "https://www.youtube-nocookie.com/embed/g7kK989HiRQ",
        thumbnail: "assets/toddlers_hd/toddlers_cont_farm.png",
        description: "Sing along with joyful characters to name crayons, pens, books and scissors in a lively classroom song!",
        checkpoints: [
          { time: 10, question: "What supply did the singer show first?", options: ["Book", "Bicycle", "Apple"], correct: 0 },
          { time: 25, question: "What can you do with a crayon?", options: ["Color and draw", "Eat it", "Sleep on it"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "Classroom Rescue Mission",
      story: "Luna and Bili arrived early at school, but the classroom is completely disorganized! Help them find supplies, arrange chairs, and prepare the classroom across 12 exciting levels.",
      levels: [
        { level: 1, title: "Find the Book", mission: "Tap and collect 3 books hidden under desks.", targetCount: 3, itemType: "book", icon: "📖" },
        { level: 2, title: "Place the Chair", mission: "Place 2 chairs in front of the table.", targetCount: 2, itemType: "chair", icon: "🪑" },
        { level: 3, title: "Collect the Crayons", mission: "Gather 5 colorful crayons into the crayon pot.", targetCount: 5, itemType: "crayon", icon: "🖍️" },
        { level: 4, title: "Match the Objects", mission: "Connect 4 supplies to their matching labels.", targetCount: 4, itemType: "match", icon: "🔗" },
        { level: 5, title: "Build the Lunchbox Word", mission: "Spelling challenge: spell L-U-N-C-H-B-O-X.", targetCount: 1, itemType: "word", targetWord: "LUNCHBOX", icon: "🍱" },
        { level: 6, title: "Find Glue Stick and Paper", mission: "Collect 2 glue sticks and 3 paper sheets for the craft table.", targetCount: 5, itemType: "craft", icon: "🧴" },
        { level: 7, title: "Shape Sorting", mission: "Sort supplies into Circle, Square, and Rectangle trays.", targetCount: 3, itemType: "shapes", icon: "📐" },
        { level: 8, title: "Count to Five", mission: "Count supplies from 1 to 5 to check the inventory.", targetCount: 5, itemType: "counting", icon: "🔢" },
        { level: 9, title: "Complete This Is", mission: "Assemble 3 sentences starting with 'This is a...'", targetCount: 3, itemType: "sentence", icon: "✍️" },
        { level: 10, title: "Follow Classroom Instructions", mission: "Listen and execute 3 quick actions: Sit, Open, Raise Hand.", targetCount: 3, itemType: "instructions", icon: "👂" },
        { level: 11, title: "The Big Classroom Challenge", mission: "Speed round: identify 5 flashcard supplies in 30 seconds.", targetCount: 5, itemType: "speed", icon: "⚡" },
        { level: 12, title: "Classroom Rescue: Final Mission", mission: "Inspect the ready classroom with Teacher Luna and ring the school bell!", targetCount: 1, itemType: "boss", icon: "🔔" }
      ]
    },

    finalChallenge: {
      title: "Classroom Master Integrator",
      story: "Show everything you learned in Unit 1 across 10 interactive mission steps!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the blue book?'", options: ["📖", "🪑", "✂️"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read the label: 'CRAYON'", options: ["🖍️", _BK_ICONS.TABLE, "📄"], correct: 0 },
        { step: 3, type: "writing", prompt: "Unscramble: K O O B", answer: "BOOK" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'This is my school'", target: "this is my school" },
        { step: 5, type: "listening", prompt: "Listen: 'Collect three scissors'", options: ["✂️✂️✂️", "✂️✂️", "✂️✂️✂️✂️"], correct: 0 },
        { step: 6, type: "reading", prompt: "Read: 'This is a red chair.'", options: [{ name: "Red Chair", icon: _BK_ICONS.CHAIR_RED }, { name: "Blue Chair", icon: _BK_ICONS.CHAIR_BLUE }, { name: "Yellow Chair", icon: _BK_ICONS.CHAIR_YELLOW }], correct: 0 },
        { step: 7, type: "writing", prompt: "Fill the blank: 'This is a t_ble.'", answer: "a" },
        { step: 8, type: "speaking", prompt: "Say the color of the grass: 'Green'", target: "green" },
        { step: 9, type: "math_vocab", prompt: "Count the books: 📖 📖 📖 📖", options: ["2", "4", "5"], correct: 1 },
        { step: 10, type: "speaking", prompt: "Celebrate: 'I love my school!'", target: "i love my school" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 02: ME
  // ==========================================================================
  {
    id: 2,
    code: "unit_02",
    title: "Me",
    subtitle: "Identity, Birthdays, Party & The /b/ Sound",
    icon: "🎂",
    themeColor: "#ec4899",
    themeLight: "#fdf2f8",
    structures: ["Present Simple", "Verb to be", "This/These"],
    functions: ["Exchanging personal information", "Identifying oneself", "Counting", "Identifying and describing objects", "Making comparisons", "Identifying the /b/ sound"],
    vocabulary: ["Birthday", "Cake", "Candle", "Cookies", "Hat", "Party", "Present", "Numbers 1–5", "Colors"],
    phonicsFocus: "/b/ Sound: Birthday, Baby, Book, Balloon, Big",

    explore: [
      { name: "Birthday Cake", icon: "🎂", fact: "A sweet vanilla cake with colorful sprinkles and frosting.", audio: "cake", color: "Pink", shape: "Circle", count: 1 },
      { name: "Candles", icon: "🕯️", fact: "Candles to blow out while making a secret birthday wish!", audio: "candle", color: "Yellow", shape: "Cylinder", count: 5 },
      { name: "Party Hat", icon: "🥳", fact: "Pointy cone hat with polka dots to wear at the party.", audio: "hat", color: "Purple", shape: "Triangle", count: 1 },
      { name: "Presents", icon: "🎁", fact: "Wrapped gift boxes tied with shiny satin ribbons.", audio: "present", color: "Blue", shape: "Cube", count: 3 },
      { name: "Cookies", icon: "🍪", fact: "Crispy chocolate chip cookies for party friends.", audio: "cookies", color: "Brown", shape: "Circle", count: 8 },
      { name: "Balloons", icon: "🎈", fact: "Bright floating balloons that bounce in the breeze.", audio: "balloon", color: "Red", shape: "Oval", count: 6 }
    ],

    listening: [
      {
        id: "u2_l1",
        title: "Birthday Word Hunt",
        desc: "Listen to the party word and select the matching party item.",
        exercises: [
          { audio: "Birthday Cake", prompt: "Find: Birthday Cake", options: [{ name: "Cake", icon: "🎂" }, { name: "Hat", icon: "🥳" }, { name: "Present", icon: "🎁" }], correct: 0 },
          { audio: "Party Hat", prompt: "Find: Party Hat", options: [{ name: "Candle", icon: "🕯️" }, { name: "Hat", icon: "🥳" }, { name: "Cookie", icon: "🍪" }], correct: 1 },
          { audio: "Present", prompt: "Find: Present", options: [{ name: "Balloon", icon: "🎈" }, { name: "Cake", icon: "🎂" }, { name: "Present", icon: "🎁" }], correct: 2 },
          { audio: "Cookies", prompt: "Find: Cookies", options: [{ name: "Cookies", icon: "🍪" }, { name: "Candle", icon: "🕯️" }, { name: "Hat", icon: "🥳" }], correct: 0 },
          { audio: "Candle", prompt: "Find: Candle", options: [{ name: "Present", icon: "🎁" }, { name: "Candle", icon: "🕯️" }, { name: "Cake", icon: "🎂" }], correct: 1 }
        ]
      },
      {
        id: "u2_l2",
        title: "Listen and Decorate",
        desc: "Listen to party decoration directions and place the item.",
        exercises: [
          { audio: "Put five candles on the cake", prompt: "Instruction: 5 candles on cake", options: [{ name: "5 Candles", icon: "🎂🕯️🕯️🕯️🕯️🕯️" }, { name: "2 Candles", icon: "🎂🕯️🕯️" }, { name: "1 Candle", icon: "🎂🕯️" }], correct: 0 },
          { audio: "Hang three red balloons", prompt: "Instruction: 3 red balloons", options: [{ name: "3 Red Balloons", icon: "🎈🎈🎈" }, { name: "1 Blue Balloon", icon: _BK_ICONS.BALLOON_BLUE }, { name: "5 Yellow Balloons", icon: _BK_ICONS.BALLOON_YELLOW }], correct: 0 },
          { audio: "Place the blue present on the table", prompt: "Instruction: Blue present on table", options: [{ name: "Red hat", icon: "🥳" }, { name: "Blue present", icon: "🎁" }, { name: "Cookie plate", icon: "🍪" }], correct: 1 },
          { audio: "Put on the shiny party hat", prompt: "Instruction: Put on party hat", options: [{ name: "Shoes", icon: "👟" }, { name: "Socks", icon: "🧦" }, { name: "Party Hat", icon: "🥳" }], correct: 2 },
          { audio: "Serve chocolate cookies on a plate", prompt: "Instruction: Cookies on plate", options: [{ name: "Cookies", icon: "🍪🍽️" }, { name: "Water cup", icon: "🥛" }, { name: "Apple", icon: "🍎" }], correct: 0 }
        ]
      },
      {
        id: "u2_l3",
        title: "Birthday Counting",
        desc: "Listen to the child's age or candle count and tap the match.",
        exercises: [
          { audio: "I am four years old today!", prompt: "Listen: 'I am four years old'", options: [{ name: "3", icon: "3️⃣" }, { name: "4", icon: "4️⃣" }, { name: "5", icon: "5️⃣" }], correct: 1 },
          { audio: "There are three presents for you!", prompt: "Listen: 'Three presents'", options: [{ name: "3 Presents", icon: "🎁🎁🎁" }, { name: "2 Presents", icon: "🎁🎁" }, { name: "4 Presents", icon: "🎁🎁🎁🎁" }], correct: 0 },
          { audio: "I see five yummy cookies", prompt: "Listen: 'Five cookies'", options: [{ name: "4 Cookies", icon: "🍪🍪🍪🍪" }, { name: "5 Cookies", icon: "🍪🍪🍪🍪🍪" }, { name: "3 Cookies", icon: "🍪🍪🍪" }], correct: 1 },
          { audio: "Blow out one candle!", prompt: "Listen: 'One candle'", options: [{ name: "1 Candle", icon: "🕯️" }, { name: "2 Candles", icon: "🕯️🕯️" }, { name: "3 Candles", icon: "🕯️🕯️🕯️" }], correct: 0 },
          { audio: "Two party hats on the chair", prompt: "Listen: 'Two party hats'", options: [{ name: "1 Hat", icon: "🥳" }, { name: "2 Hats", icon: "🥳🥳" }, { name: "4 Hats", icon: "🥳🥳🥳🥳" }], correct: 1 }
        ]
      },
      {
        id: "u2_l4",
        title: "Listen and Compare",
        desc: "Listen to comparative sizes: big vs. small party items.",
        exercises: [
          { audio: "Touch the big present", prompt: "Find: BIG present", options: [{ name: "Big Present", icon: "🎁 (Big)" }, { name: "Small Present", icon: "🎁 (Small)" }], correct: 0 },
          { audio: "Touch the small cookie", prompt: "Find: SMALL cookie", options: [{ name: "Big Cookie", icon: "🍪 (Big)" }, { name: "Small Cookie", icon: "🍪 (Small)" }], correct: 1 },
          { audio: "Find the big birthday cake", prompt: "Find: BIG cake", options: [{ name: "Big Cake", icon: "🎂 (Big)" }, { name: "Cupcake", icon: "🧁 (Small)" }], correct: 0 },
          { audio: "Where is the small balloon?", prompt: "Find: SMALL balloon", options: [{ name: "Big Balloon", icon: "🎈 (Big)" }, { name: "Small Balloon", icon: "🎈 (Small)" }], correct: 1 },
          { audio: "Pick the big party hat", prompt: "Find: BIG party hat", options: [{ name: "Big Hat", icon: "🥳 (Big)" }, { name: "Tiny Hat", icon: "🥳 (Small)" }], correct: 0 }
        ]
      },
      {
        id: "u2_l5",
        title: "Party Instructions",
        desc: "Listen to party game directives like 'Clap hands' and 'Sing happy birthday'.",
        exercises: [
          { audio: "Clap your hands for the birthday boy!", prompt: "Follow: Clap your hands", options: [{ name: "Clap", icon: "👏" }, { name: "Sleep", icon: "😴" }, { name: "Cry", icon: "😢" }], correct: 0 },
          { audio: "Sing Happy Birthday together!", prompt: "Follow: Sing Happy Birthday", options: [{ name: "Eat", icon: "🍽️" }, { name: "Sing", icon: "🎵🎤" }, { name: "Run", icon: "🏃" }], correct: 1 },
          { audio: "Blow out the candles: Whoosh!", prompt: "Follow: Blow candles", options: [{ name: "Jump", icon: "🦘" }, { name: "Blow", icon: "💨🎂" }, { name: "Sit", icon: "🪑" }], correct: 1 },
          { audio: "Open the surprise present!", prompt: "Follow: Open present", options: [{ name: "Open present", icon: "🎁✨" }, { name: "Kick ball", icon: "⚽" }, { name: "Close book", icon: "📕" }], correct: 0 },
          { audio: "Smile and take a party photo!", prompt: "Follow: Smile for photo", options: [{ name: "Frown", icon: "🙁" }, { name: "Smile photo", icon: "📸😁" }, { name: "Hide", icon: "🙈" }], correct: 1 }
        ]
      },
      {
        id: "u2_l6",
        title: "The Birthday Conversation",
        desc: "Listen to a short dialogue between friends at a party.",
        exercises: [
          { audio: "Friend says: 'Happy Birthday, Leo! How old are you?' Leo says: 'I am six years old!'", prompt: "How old is Leo?", options: ["Six (6)", "Four (4)", "Ten (10)"], correct: 0 },
          { audio: "Luna says: 'Here is a present for you!' Leo says: 'Thank you, Luna!'", prompt: "What does Luna give Leo?", options: ["A pencil", "A present", "An apple"], correct: 1 },
          { audio: "Teacher says: 'Let's eat the chocolate cake!' The kids shout: 'Yummy!'", prompt: "What flavor is the cake?", options: ["Cheese", "Lemon", "Chocolate"], correct: 2 },
          { audio: "Mom says: 'Do you want a cookie?' Leo says: 'Yes, please!'", prompt: "Does Leo want a cookie?", options: ["Yes, please", "No, thanks", "He is sleeping"], correct: 0 },
          { audio: "The kids sing: 'Happy Birthday to you, Happy Birthday to you!'", prompt: "What song are they singing?", options: ["ABC Song", "Happy Birthday", "Old MacDonald"], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u2_r1",
        title: "Birthday Word Match",
        desc: "Read the word and select the matching birthday graphic.",
        exercises: [
          { text: "CAKE", prompt: "Read: CAKE", options: [{ name: "Cake", icon: "🎂" }, { name: "Hat", icon: "🥳" }, { name: "Cookie", icon: "🍪" }], correct: 0 },
          { text: "CANDLE", prompt: "Read: CANDLE", options: [{ name: "Present", icon: "🎁" }, { name: "Candle", icon: "🕯️" }, { name: "Balloon", icon: "🎈" }], correct: 1 },
          { text: "PRESENT", prompt: "Read: PRESENT", options: [{ name: "Hat", icon: "🥳" }, { name: "Cake", icon: "🎂" }, { name: "Present", icon: "🎁" }], correct: 2 },
          { text: "HAT", prompt: "Read: HAT", options: [{ name: "Hat", icon: "🥳" }, { name: "Cookie", icon: "🍪" }, { name: "Candle", icon: "🕯️" }], correct: 0 },
          { text: "COOKIES", prompt: "Read: COOKIES", options: [{ name: "Cake", icon: "🎂" }, { name: "Cookies", icon: "🍪" }, { name: "Present", icon: "🎁" }], correct: 1 }
        ]
      },
      {
        id: "u2_r2",
        title: "Read the Birthday Invitation",
        desc: "Read Luna's party invitation card and extract key information.",
        exercises: [
          { text: "YOU ARE INVITED! Party for Luna. Saturday at 3 PM.", prompt: "Who is the party for?", options: ["Luna", "Leo", "Bili"], correct: 0 },
          { text: "Place: Luna's Garden. Come wear your favorite costume!", prompt: "Where is the party?", options: ["In classroom", "Luna's Garden", "At supermarket"], correct: 1 },
          { text: "There will be birthday cake, cookies, and balloons!", prompt: "What treats will be there?", options: ["Soup and rice", "Cake, cookies, balloons", "Sandwiches only"], correct: 1 },
          { text: "Luna is turning 7 years old!", prompt: "How old is Luna turning?", options: ["Five", "Seven (7)", "Ten"], correct: 1 },
          { text: "RSVP to Mommy by Friday. See you there!", prompt: "Who should we confirm with?", options: ["Mommy", "The teacher", "The driver"], correct: 0 }
        ]
      },
      {
        id: "u2_r3",
        title: "Complete My Birthday Sentences",
        desc: "Complete the sentence with the appropriate word.",
        exercises: [
          { text: "I have a sweet birthday ______ .", prompt: "Complete the sentence:", options: ["cake", "chair", "pencil"], correct: 0 },
          { text: "Blow out the five ______ on the cake.", prompt: "Complete the sentence:", options: ["tables", "candles", "shoes"], correct: 1 },
          { text: "I wear a colorful party ______ .", prompt: "Complete the sentence:", options: ["hat", "book", "pencil"], correct: 0 },
          { text: "Open the surprise ______ from Grandma.", prompt: "Complete the sentence:", options: ["cookie", "present", "window"], correct: 1 },
          { text: "We eat chocolate ______ with warm milk.", prompt: "Complete the sentence:", options: ["hats", "cookies", "crayons"], correct: 1 }
        ]
      },
      {
        id: "u2_r4",
        title: "Find the /b/ Words",
        desc: "Identify words that start with the /b/ sound (Baby, Book, Balloon, Birthday, Big).",
        exercises: [
          { prompt: "Which word starts with the /b/ sound?", options: [{ name: "Birthday", icon: "🎂" }, { name: "Cat", icon: "🐱" }, { name: "Dog", icon: "🐶" }], correct: 0 },
          { prompt: "Which word starts with the /b/ sound?", options: [{ name: "Hat", icon: "🥳" }, { name: "Balloon", icon: "🎈" }, { name: "Sun", icon: "☀️" }], correct: 1 },
          { prompt: "Which word starts with the /b/ sound?", options: [{ name: "Apple", icon: "🍎" }, { name: "Tree", icon: "🌳" }, { name: "Baby", icon: "👶" }], correct: 2 },
          { prompt: "Which word starts with the /b/ sound?", options: [{ name: "Book", icon: "📖" }, { name: "Pencil", icon: "✏️" }, { name: "Scissors", icon: "✂️" }], correct: 0 },
          { prompt: "Which word starts with the /b/ sound?", options: [{ name: "Fish", icon: "🐟" }, { name: "Big", icon: "🐘" }, { name: "Moon", icon: "🌙" }], correct: 1 }
        ]
      },
      {
        id: "u2_r5",
        title: "Compare the Party Objects",
        desc: "Read sentences comparing sizes and quantities.",
        exercises: [
          { text: "The birthday cake is BIG. The cookie is SMALL.", prompt: "Which item is big?", options: ["The cake", "The cookie", "Neither"], correct: 0 },
          { text: "There are MORE balloons than presents.", prompt: "Which are there more of?", options: ["Presents", "Balloons", "Same count"], correct: 1 },
          { text: "This candle is TALL. That candle is SHORT.", prompt: "Which candle is tall?", options: ["The first candle", "The second candle"], correct: 0 },
          { text: "This box is HEAVY. The party hat is LIGHT.", prompt: "Which item is light?", options: ["The box", "The party hat"], correct: 1 },
          { text: "Luna has 5 candles. Leo has 3 candles. Luna has MORE.", prompt: "Who has more candles?", options: ["Luna", "Leo"], correct: 0 }
        ]
      },
      {
        id: "u2_r6",
        title: "Birthday Story Comprehension",
        desc: "Read the story and verify details.",
        exercises: [
          { text: "Today is Bili's birthday! Bili invites all his friends. He wears a green hat.", prompt: "What color is Bili's hat?", options: ["Green", "Pink", "Yellow"], correct: 0 },
          { text: "Bili's cake has strawberries on top. Everyone sings happily.", prompt: "What fruit is on the cake?", options: ["Apples", "Strawberries", "Bananas"], correct: 1 },
          { text: "Leo gives Bili a toy robot. Bili says 'Wow, thank you!'", prompt: "What toy does Leo give Bili?", options: ["A toy robot", "A ball", "A puzzle"], correct: 0 },
          { text: "They play musical chairs and eat cookies in the garden.", prompt: "What game do they play?", options: ["Soccer", "Musical chairs", "Video games"], correct: 1 },
          { text: "At the end of the day, Bili smiles. 'Best birthday ever!'", prompt: "How does Bili feel?", options: ["Sad", "Happy and smiling", "Angry"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u2_w1",
        title: "Build Birthday Words",
        desc: "Spell the party words by ordering the letter tiles.",
        exercises: [
          { target: "CAKE", letters: ["E", "C", "A", "K"], icon: "🎂", hint: "Sweet birthday dessert" },
          { target: "HAT", letters: ["T", "H", "A"], icon: "🥳", hint: "Wear on your head" },
          { target: "PARTY", letters: ["Y", "P", "A", "R", "T"], icon: "🎉", hint: "Fun celebration" },
          { target: "GIFT", letters: ["T", "G", "I", "F"], icon: "🎁", hint: "A present for you" },
          { target: "BALL", letters: ["L", "B", "A", "L"], icon: "⚽", hint: "Round toy" }
        ]
      },
      {
        id: "u2_w2",
        title: "Missing Letters: Cake, Candle, Cookies",
        desc: "Choose the correct missing letter to complete party words.",
        exercises: [
          { target: "C_KE", missing: "A", full: "CAKE", options: ["A", "I", "U"], icon: "🎂" },
          { target: "C_NDLE", missing: "A", full: "CANDLE", options: ["E", "A", "O"], icon: "🕯️" },
          { target: "C_OKIES", missing: "O", full: "COOKIES", options: ["U", "O", "I"], icon: "🍪" },
          { target: "P_ESENT", missing: "R", full: "PRESENT", options: ["R", "L", "T"], icon: "🎁" },
          { target: "P_RTY", missing: "A", full: "PARTY", options: ["A", "E", "O"], icon: "🎉" }
        ]
      },
      {
        id: "u2_w3",
        title: "Label the Birthday Scene",
        desc: "Type or select the correct label for each birthday graphic.",
        exercises: [
          { prompt: "Label this object: 🎂", answer: "cake", accepted: ["cake", "Cake", "a cake"] },
          { prompt: "Label this object: 🕯️", answer: "candle", accepted: ["candle", "Candle"] },
          { prompt: "Label this object: 🎁", answer: "present", accepted: ["present", "Present", "gift"] },
          { prompt: "Label this object: 🥳", answer: "hat", accepted: ["hat", "Hat", "party hat"] },
          { prompt: "Label this object: 🍪", answer: "cookie", accepted: ["cookie", "cookies", "Cookie"] }
        ]
      },
      {
        id: "u2_w4",
        title: "Complete My Birthday Card",
        desc: "Complete the guided birthday card with personal words.",
        exercises: [
          { sentence: "Happy ______ to you! (🎉)", answer: "birthday", accepted: ["birthday", "Birthday"] },
          { sentence: "I am ______ (6) years old today.", answer: "six", accepted: ["six", "6"] },
          { sentence: "I love chocolate ______ . (🎂)", answer: "cake", accepted: ["cake", "Cake"] },
          { sentence: "Thank you for the ______ ! (🎁)", answer: "present", accepted: ["present", "gift", "Present"] },
          { sentence: "Let's eat yummy ______ . (🍪)", answer: "cookies", accepted: ["cookies", "Cookies"] }
        ]
      },
      {
        id: "u2_w5",
        title: "This or These",
        desc: "Choose between 'This' (singular) and 'These' (plural).",
        exercises: [
          { sentence: "______ is a birthday cake. (🎂)", options: ["This", "These"], correct: 0 },
          { sentence: "______ are three cookies. (🍪🍪🍪)", options: ["This", "These"], correct: 1 },
          { sentence: "______ is my new present. (🎁)", options: ["This", "These"], correct: 0 },
          { sentence: "______ are five colorful candles. (🕯️🕯️🕯️🕯️🕯️)", options: ["This", "These"], correct: 1 },
          { sentence: "______ is a party hat. (🥳)", options: ["This", "These"], correct: 0 }
        ]
      },
      {
        id: "u2_w6",
        title: "Write About My Party",
        desc: "Complete guided personal sentences about a birthday party.",
        exercises: [
          { sentence: "My name is ______ .", answer: "Alex", accepted: ["Alex", "Leo", "Luna", "Matías", "Matias", "Sam"] },
          { sentence: "My party has ______ balloons. (🎈🎈🎈)", answer: "three", accepted: ["three", "3"] },
          { sentence: "My cake is ______ . (Pink / Red / Blue)", answer: "pink", accepted: ["pink", "red", "blue", "yellow", "chocolate"] },
          { sentence: "I blow out the ______ . (🕯️)", answer: "candles", accepted: ["candles", "candle"] },
          { sentence: "I am very ______ today! (😊)", answer: "happy", accepted: ["happy", "Happy"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u2_s1",
        title: "Say My Name",
        desc: "Practice introducing yourself aloud: 'My name is...'",
        exercises: [
          { prompt: "Say aloud: 'My name is Leo.'", target: "my name is leo", audio: "My name is Leo" },
          { prompt: "Say aloud: 'My name is Luna.'", target: "my name is luna", audio: "My name is Luna" },
          { prompt: "Say aloud: 'I am a boy.'", target: "i am a boy", audio: "I am a boy" },
          { prompt: "Say aloud: 'I am a girl.'", target: "i am a girl", audio: "I am a girl" },
          { prompt: "Say aloud: 'Nice to meet you!'", target: "nice to meet you", audio: "Nice to meet you" }
        ]
      },
      {
        id: "u2_s2",
        title: "When Is Your Birthday?",
        desc: "Answer the birthday question aloud.",
        exercises: [
          { prompt: "Repeat: 'Today is my birthday!'", target: "today is my birthday", audio: "Today is my birthday" },
          { prompt: "Repeat: 'I am six years old.'", target: "i am six years old", audio: "I am six years old" },
          { prompt: "Repeat: 'Happy birthday to me!'", target: "happy birthday to me", audio: "Happy birthday to me" },
          { prompt: "Repeat: 'My party is on Saturday.'", target: "my party is on saturday", audio: "My party is on Saturday" },
          { prompt: "Repeat: 'I love birthday parties!'", target: "i love birthday parties", audio: "I love birthday parties" }
        ]
      },
      {
        id: "u2_s3",
        title: "Describe the Cake",
        desc: "Speak about the cake's taste, color, and toppings.",
        exercises: [
          { prompt: "Say: 'This is a chocolate cake.'", target: "this is a chocolate cake", audio: "This is a chocolate cake" },
          { prompt: "Say: 'The cake is sweet and delicious.'", target: "the cake is sweet and delicious" },
          { prompt: "Say: 'It has pink frosting.'", target: "it has pink frosting" },
          { prompt: "Say: 'I see strawberries on top.'", target: "i see strawberries on top" },
          { prompt: "Say: 'Let us eat the cake!'", target: "let us eat the cake" }
        ]
      },
      {
        id: "u2_s4",
        title: "Count the Candles",
        desc: "Count candles aloud from 1 to 5.",
        exercises: [
          { prompt: "Say: 'One candle'", target: "one candle", audio: "One candle" },
          { prompt: "Say: 'Two candles'", target: "two candles", audio: "Two candles" },
          { prompt: "Say: 'Three candles'", target: "three candles", audio: "Three candles" },
          { prompt: "Say: 'Four candles'", target: "four candles", audio: "Four candles" },
          { prompt: "Say: 'Five candles'", target: "five candles", audio: "Five candles" }
        ]
      },
      {
        id: "u2_s5",
        title: "Big or Small?",
        desc: "Compare party elements speaking with 'Big' or 'Small'.",
        exercises: [
          { prompt: "Say: 'The present is big.'", target: "the present is big" },
          { prompt: "Say: 'The cookie is small.'", target: "the cookie is small" },
          { prompt: "Say: 'The cake is big.'", target: "the cake is big" },
          { prompt: "Say: 'The candle is small.'", target: "the candle is small" },
          { prompt: "Say: 'The balloon is big.'", target: "the balloon is big" }
        ]
      },
      {
        id: "u2_s6",
        title: "My Birthday Presentation",
        desc: "Deliver a short 3-sentence presentation about your birthday celebration.",
        exercises: [
          { prompt: "Sentence 1: 'Hello, my name is Alex.'", target: "hello my name is alex" },
          { prompt: "Sentence 2: 'Today is my birthday party.'", target: "today is my birthday party" },
          { prompt: "Sentence 3: 'I have a big cake and presents.'", target: "i have a big cake and presents" },
          { prompt: "Sentence 4: 'My friends sing Happy Birthday.'", target: "my friends sing happy birthday" },
          { prompt: "Sentence 5: 'Thank you for coming to my party!'", target: "thank you for coming to my party" }
        ]
      }
    ],

    videos: [
      {
        title: "Happy Birthday Song & Party Vocabulary | LearnEnglish Kids",
        videoId: "nl62hhiBMOM",
        embedUrl: "https://www.youtube-nocookie.com/embed/nl62hhiBMOM",
        thumbnail: "assets/toddlers_hd/toddlers_cont_house.png",
        description: "Join the birthday animal friends as they light candles, blow balloons and sing Happy Birthday!",
        checkpoints: [
          { time: 15, question: "What is on top of the cake?", options: ["Candles", "Shoes", "Pencils"], correct: 0 },
          { time: 35, question: "What do you do before blowing candles?", options: ["Make a wish", "Go to sleep", "Cry"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Birthday Party Adventure",
      story: "The guests are arriving in 15 minutes! Help Leo set the table, inflate balloons, light candles and organize gifts across 12 festive levels.",
      levels: [
        { level: 1, title: "Choose the Party Hat", mission: "Select the colorful party hat for the host.", targetCount: 1, itemType: "hat", icon: "🥳" },
        { level: 2, title: "Find the Birthday Cake", mission: "Locate the big birthday cake in the pantry.", targetCount: 1, itemType: "cake", icon: "🎂" },
        { level: 3, title: "Count the Candles", mission: "Place exactly 5 candles onto the cake.", targetCount: 5, itemType: "candles", icon: "🕯️" },
        { level: 4, title: "Collect the Cookies", mission: "Put 6 chocolate cookies onto the serving platter.", targetCount: 6, itemType: "cookies", icon: "🍪" },
        { level: 5, title: "Open the Presents", mission: "Untie 3 wrapped surprise boxes.", targetCount: 3, itemType: "presents", icon: "🎁" },
        { level: 6, title: "Sort Big and Small Objects", mission: "Sort party objects into Big Box and Small Box.", targetCount: 4, itemType: "sorting", icon: "📦" },
        { level: 7, title: "Find the /b/ Sound", mission: "Tap all items starting with /b/: Balloon, Book, Baby, Bag.", targetCount: 4, itemType: "phonics", icon: "🅱️" },
        { level: 8, title: "Match the Birthday Words", mission: "Connect 4 words (Cake, Candle, Hat, Present) to pictures.", targetCount: 4, itemType: "match", icon: "🔗" },
        { level: 9, title: "Decorate the Party", mission: "Hang 6 bright balloons around the living room.", targetCount: 6, itemType: "decor", icon: "🎈" },
        { level: 10, title: "Follow Birthday Instructions", mission: "Clap, Sing, and Cheer with the party guests.", targetCount: 3, itemType: "actions", icon: "👏" },
        { level: 11, title: "Complete the Birthday Card", mission: "Fill in the birthday greeting card with stickers.", targetCount: 3, itemType: "card", icon: "💌" },
        { level: 12, title: "The Big Birthday Celebration", mission: "Blow out all 5 candles in one big breath: Whoosh!", targetCount: 1, itemType: "celebrate", icon: "🎉" }
      ]
    },

    finalChallenge: {
      title: "Birthday Hero Challenge",
      story: "Test your skills across 10 integrative birthday missions!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is the party hat?'", options: ["🥳", "🍪", "📖"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'CANDLE'", options: ["🕯️", "🎁", "🎂"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: C _ K E", answer: "A" },
        { step: 4, type: "speaking", prompt: "Say your age: 'I am six'", target: "i am six" },
        { step: 5, type: "phonics", prompt: "Find /b/ sound word:", options: ["Balloon", "Sun", "Duck"], correct: 0 },
        { step: 6, type: "math_vocab", prompt: "Count the candles: 🕯️ 🕯️ 🕯️", options: ["3", "2", "4"], correct: 0 },
        { step: 7, type: "writing", prompt: "Unscramble: T A H", answer: "HAT" },
        { step: 8, type: "reading", prompt: "Choose: 'This is a big ______ (🎁)'", options: ["present", "crayon", "bed"], correct: 0 },
        { step: 9, type: "listening", prompt: "Listen: 'Blow out the candles!'", options: ["💨🕯️", "😴", "🏃"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Cheer: 'Happy Birthday!'", target: "happy birthday" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 03: HOME AND FAMILY
  // ==========================================================================
  {
    id: 3,
    code: "unit_03",
    title: "Home and Family",
    subtitle: "Rooms, Family Members, Sizes & Shapes",
    icon: "🏡",
    themeColor: "#059669",
    themeLight: "#ecfdf5",
    structures: ["Present Simple", "Verb to be", "There is/are"],
    functions: ["Identifying gender", "Identifying and describing homes", "Identifying family members", "Identifying colors", "Identifying size", "Reviewing the /b/ sound"],
    vocabulary: ["Apartment", "Building", "Baby", "Big", "Boy", "Brother", "Daddy", "Door", "House", "Little", "Mommy", "Sister", "Square", "Window", "Numbers 1–10", "Colors"],
    phonicsFocus: "/b/ Review: Baby, Brother, Boy, Building, Big",

    explore: [
      { name: "House", icon: "🏡", fact: "A cozy family house with a chimney and garden.", audio: "house", color: "Red", shape: "Square", count: 1 },
      { name: "Mommy", icon: "👩", fact: "Mommy gives warm hugs and reads bedtime stories.", audio: "mommy", color: "Purple", shape: "Person", count: 1 },
      { name: "Daddy", icon: "👨", fact: "Daddy cooks delicious pancakes on Sunday mornings.", audio: "daddy", color: "Blue", shape: "Person", count: 1 },
      { name: "Baby", icon: "👶", fact: "The happy baby plays with rattles and drinks milk.", audio: "baby", color: "Yellow", shape: "Person", count: 1 },
      { name: "Brother", icon: "👦", fact: "Big brother loves building tall block towers.", audio: "brother", color: "Green", shape: "Person", count: 1 },
      { name: "Sister", icon: "👧", fact: "Little sister loves drawing butterflies with crayons.", audio: "sister", color: "Pink", shape: "Person", count: 1 },
      { name: "Window", icon: "🪟", fact: "Square glass windows that let bright sunlight into our rooms.", audio: "window", color: "Cyan", shape: "Square", count: 4 },
      { name: "Door", icon: "🚪", fact: "The front door welcomes family and friendly guests.", audio: "door", color: "Brown", shape: "Rectangle", count: 1 }
    ],

    listening: [
      {
        id: "u3_l1",
        title: "Listen and Find the Family Member",
        desc: "Listen to the family member named and tap the correct character.",
        exercises: [
          { audio: "Find Mommy", prompt: "Find Mommy", options: [{ name: "Mommy", icon: "👩" }, { name: "Daddy", icon: "👨" }, { name: "Baby", icon: "👶" }], correct: 0 },
          { audio: "Find Daddy", prompt: "Find Daddy", options: [{ name: "Brother", icon: "👦" }, { name: "Daddy", icon: "👨" }, { name: "Sister", icon: "👧" }], correct: 1 },
          { audio: "Find the Baby", prompt: "Find the Baby", options: [{ name: "Mommy", icon: "👩" }, { name: "Sister", icon: "👧" }, { name: "Baby", icon: "👶" }], correct: 2 },
          { audio: "Find Brother", prompt: "Find Brother", options: [{ name: "Brother", icon: "👦" }, { name: "Daddy", icon: "👨" }, { name: "Baby", icon: "👶" }], correct: 0 },
          { audio: "Find Sister", prompt: "Find Sister", options: [{ name: "Mommy", icon: "👩" }, { name: "Sister", icon: "👧" }, { name: "Brother", icon: "👦" }], correct: 1 }
        ]
      },
      {
        id: "u3_l2",
        title: "Who Is in the House?",
        desc: "Listen to where each family member is located.",
        exercises: [
          { audio: "Daddy is in the kitchen cooking.", prompt: "Who is in the kitchen?", options: ["Daddy", "Baby", "Sister"], correct: 0 },
          { audio: "Mommy is in the living room reading.", prompt: "Where is Mommy?", options: ["In garden", "In living room", "On the roof"], correct: 1 },
          { audio: "Baby is sleeping in the bedroom.", prompt: "What is Baby doing?", options: ["Running", "Cooking", "Sleeping in bedroom"], correct: 2 },
          { audio: "Brother is playing in the garden.", prompt: "Who is in the garden?", options: ["Brother", "Daddy", "Mommy"], correct: 0 },
          { audio: "Sister is washing hands in the bathroom.", prompt: "Where is Sister?", options: ["In bathroom", "In garage", "In tree"], correct: 0 }
        ]
      },
      {
        id: "u3_l3",
        title: "Follow the Home Instructions",
        desc: "Listen to commands about home routines.",
        exercises: [
          { audio: "Open the front door", prompt: "Action: Open front door", options: [{ name: "Open door", icon: "🚪🔓" }, { name: "Close window", icon: "🪟" }, { name: "Turn off lamp", icon: "💡" }], correct: 0 },
          { audio: "Look out the square window", prompt: "Action: Look out window", options: [{ name: "Sit down", icon: "🪑" }, { name: "Look out window", icon: "🪟👀" }, { name: "Wash dishes", icon: "🍽️" }], correct: 1 },
          { audio: "Help Mommy set the table", prompt: "Action: Set the table", options: [{ name: "Set table", icon: _BK_ICONS.TABLE + "🍽️" }, { name: "Play ball", icon: "⚽" }, { name: "Sleep", icon: "😴" }], correct: 0 },
          { audio: "Give the toy to the baby", prompt: "Action: Give toy to baby", options: [{ name: "Give toy to baby", icon: "👶🧸" }, { name: "Eat apple", icon: "🍎" }, { name: "Run away", icon: "🏃" }], correct: 0 },
          { audio: "Say good night to Daddy", prompt: "Action: Say good night", options: [{ name: "Say good morning", icon: "☀️" }, { name: "Say good night", icon: "🌙👨" }, { name: "Drink juice", icon: "🧃" }], correct: 1 }
        ]
      },
      {
        id: "u3_l4",
        title: "Big or Little House?",
        desc: "Listen and distinguish between big buildings and little houses.",
        exercises: [
          { audio: "This is a big apartment building", prompt: "Listen: 'Big building'", options: [{ name: "Big Building", icon: "🏢 (Tall)" }, { name: "Little House", icon: "🏡 (Small)" }], correct: 0 },
          { audio: "This is a little wooden house", prompt: "Listen: 'Little house'", options: [{ name: "Skyscraper", icon: "🏙️" }, { name: "Little House", icon: "🏡" }], correct: 1 },
          { audio: "Find the big window", prompt: "Listen: 'Big window'", options: [{ name: "Big Window", icon: "🪟 (Big)" }, { name: "Small Window", icon: "🪟 (Small)" }], correct: 0 },
          { audio: "Where is the little door?", prompt: "Listen: 'Little door'", options: [{ name: "Big Gate", icon: "🚪 (Giant)" }, { name: "Little Door", icon: "🚪 (Tiny)" }], correct: 1 },
          { audio: "Show me the big family", prompt: "Listen: 'Big family'", options: [{ name: "Big Family (6)", icon: "👨‍👩‍👧‍👦👶👵" }, { name: "One Person", icon: "🧍" }], correct: 0 }
        ]
      },
      {
        id: "u3_l5",
        title: "Count the Windows and Doors",
        desc: "Listen to the quantity of windows and doors.",
        exercises: [
          { audio: "There are four windows in the house", prompt: "Count: 4 windows", options: [{ name: "3 Windows", icon: "🪟🪟🪟" }, { name: "4 Windows", icon: "🪟🪟🪟🪟" }, { name: "2 Windows", icon: "🪟🪟" }], correct: 1 },
          { audio: "There is one front door", prompt: "Count: 1 door", options: [{ name: "1 Door", icon: "🚪" }, { name: "2 Doors", icon: "🚪🚪" }, { name: "3 Doors", icon: "🚪🚪🚪" }], correct: 0 },
          { audio: "I see six windows in the building", prompt: "Count: 6 windows", options: [{ name: "5 Windows", icon: "🪟🪟🪟🪟🪟" }, { name: "6 Windows", icon: "🪟🪟🪟🪟🪟🪟" }, { name: "4 Windows", icon: "🪟🪟🪟🪟" }], correct: 1 },
          { audio: "There are two doors in the hallway", prompt: "Count: 2 doors", options: [{ name: "2 Doors", icon: "🚪🚪" }, { name: "1 Door", icon: "🚪" }, { name: "4 Doors", icon: "🚪🚪🚪🚪" }], correct: 0 },
          { audio: "Three little birds by the window", prompt: "Count: 3 birds", options: [{ name: "2 Birds", icon: "🐦🐦" }, { name: "3 Birds", icon: "🐦🐦🐦" }, { name: "5 Birds", icon: "🐦🐦🐦🐦🐦" }], correct: 1 }
        ]
      },
      {
        id: "u3_l6",
        title: "Family Description Listening",
        desc: "Listen to full descriptions of family members.",
        exercises: [
          { audio: "This is my brother. He is a tall boy with black hair.", prompt: "Who is being described?", options: ["Brother", "Baby", "Sister"], correct: 0 },
          { audio: "This is my sister. She is a little girl with pink shoes.", prompt: "Who is being described?", options: ["Mommy", "Sister", "Daddy"], correct: 1 },
          { audio: "This is my baby brother. He has a little blue rattle.", prompt: "Who is holding the rattle?", options: ["Daddy", "Mommy", "Baby brother"], correct: 2 },
          { audio: "My mommy wears glasses and a purple dress.", prompt: "What does Mommy wear?", options: ["Glasses & purple dress", "A green hat", "Swimsuit"], correct: 0 },
          { audio: "My daddy has a big warm smile and a blue shirt.", prompt: "What color is Daddy's shirt?", options: ["Red", "Blue", "Yellow"], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u3_r1",
        title: "Family Word Matching",
        desc: "Match the family word with the correct portrait.",
        exercises: [
          { text: "MOMMY", prompt: "Read: MOMMY", options: [{ name: "Mommy", icon: "👩" }, { name: "Daddy", icon: "👨" }, { name: "Baby", icon: "👶" }], correct: 0 },
          { text: "DADDY", prompt: "Read: DADDY", options: [{ name: "Brother", icon: "👦" }, { name: "Daddy", icon: "👨" }, { name: "Sister", icon: "👧" }], correct: 1 },
          { text: "BABY", prompt: "Read: BABY", options: [{ name: "Mommy", icon: "👩" }, { name: "Daddy", icon: "👨" }, { name: "Baby", icon: "👶" }], correct: 2 },
          { text: "BROTHER", prompt: "Read: BROTHER", options: [{ name: "Brother", icon: "👦" }, { name: "Sister", icon: "👧" }, { name: "Baby", icon: "👶" }], correct: 0 },
          { text: "SISTER", prompt: "Read: SISTER", options: [{ name: "Brother", icon: "👦" }, { name: "Sister", icon: "👧" }, { name: "Daddy", icon: "👨" }], correct: 1 }
        ]
      },
      {
        id: "u3_r2",
        title: "Read the Family Labels",
        desc: "Read descriptions of parts of the house.",
        exercises: [
          { text: "DOOR", prompt: "Read: DOOR", options: [{ name: "Door", icon: "🚪" }, { name: "Window", icon: "🪟" }, { name: "Roof", icon: "🏠" }], correct: 0 },
          { text: "WINDOW", prompt: "Read: WINDOW", options: [{ name: "Floor", icon: "🟫" }, { name: "Window", icon: "🪟" }, { name: "Door", icon: "🚪" }], correct: 1 },
          { text: "HOUSE", prompt: "Read: HOUSE", options: [{ name: "Car", icon: "🚗" }, { name: "Tree", icon: "🌳" }, { name: "House", icon: "🏡" }], correct: 2 },
          { text: "APARTMENT", prompt: "Read: APARTMENT", options: [{ name: "Apartment", icon: "🏢" }, { name: "Tent", icon: "⛺" }, { name: "Boat", icon: "⛵" }], correct: 0 },
          { text: "BUILDING", prompt: "Read: BUILDING", options: [{ name: "Chair", icon: "🪑" }, { name: "Building", icon: "🏙️" }, { name: "Table", icon: _BK_ICONS.TABLE }], correct: 1 }
        ]
      },
      {
        id: "u3_r3",
        title: "Complete There Is/There Are",
        desc: "Choose between 'There is' (singular) and 'There are' (plural).",
        exercises: [
          { text: "______ one brown door in the house. (🚪)", options: ["There is", "There are"], correct: 0 },
          { text: "______ four windows in the room. (🪟🪟🪟🪟)", options: ["There is", "There are"], correct: 1 },
          { text: "______ one baby in the crib. (👶)", options: ["There is", "There are"], correct: 0 },
          { text: "______ two boys playing in the yard. (👦👦)", options: ["There is", "There are"], correct: 1 },
          { text: "______ a big kitchen in the apartment.", options: ["There is", "There are"], correct: 0 }
        ]
      },
      {
        id: "u3_r4",
        title: "Read the Family Story",
        desc: "Read the story of a loving family at home.",
        exercises: [
          { text: "This is Luna's family. They live in a yellow house with a red door.", prompt: "What color is the front door?", options: ["Red", "Green", "Purple"], correct: 0 },
          { text: "Mommy cooks vegetable soup. Daddy sets five spoons on the table.", prompt: "What does Mommy cook?", options: ["Pancakes", "Vegetable soup", "Pizza"], correct: 1 },
          { text: "Baby brother laughs: 'Giggle giggle!' He plays with a soft teddy bear.", prompt: "What toy does the baby have?", options: ["A car", "A teddy bear", "A ball"], correct: 1 },
          { text: "After dinner, they look through the square window at the stars.", prompt: "What do they look at?", options: ["The stars", "The car", "The television"], correct: 0 },
          { text: "Luna hugs Mommy and Daddy. 'I love my family so much!'", prompt: "How does Luna feel about her family?", options: ["She loves them", "She is scared", "She is tired"], correct: 0 }
        ]
      },
      {
        id: "u3_r5",
        title: "Find the /b/ Words",
        desc: "Locate family words starting with the sound /b/.",
        exercises: [
          { prompt: "Which family member starts with /b/?", options: [{ name: "Baby", icon: "👶" }, { name: "Mommy", icon: "👩" }, { name: "Daddy", icon: "👨" }], correct: 0 },
          { prompt: "Which family member starts with /b/?", options: [{ name: "Sister", icon: "👧" }, { name: "Brother", icon: "👦" }, { name: "Mommy", icon: "👩" }], correct: 1 },
          { prompt: "Which home type starts with /b/?", options: [{ name: "House", icon: "🏡" }, { name: "Tent", icon: "⛺" }, { name: "Building", icon: "🏢" }], correct: 2 },
          { prompt: "Which gender word starts with /b/?", options: [{ name: "Boy", icon: "👦" }, { name: "Girl", icon: "👧" }, { name: "Woman", icon: "👩" }], correct: 0 },
          { prompt: "Which size word starts with /b/?", options: [{ name: "Little", icon: "🐜" }, { name: "Big", icon: "🐘" }, { name: "Small", icon: "🐭" }], correct: 1 }
        ]
      },
      {
        id: "u3_r6",
        title: "Read and Explore the House",
        desc: "Read the labels on the floor plan of the house.",
        exercises: [
          { text: "The KITCHEN has a fridge, a stove, and fruit.", prompt: "What room has the fridge?", options: ["Kitchen", "Bedroom", "Bathroom"], correct: 0 },
          { text: "The BEDROOM has cozy beds, pillows, and blankets.", prompt: "Where do we sleep?", options: ["Living room", "Bedroom", "Garage"], correct: 1 },
          { text: "The BATHROOM has a bathtub, sink, and soap.", prompt: "Where do we wash hands?", options: ["Garden", "Roof", "Bathroom"], correct: 2 },
          { text: "The LIVING ROOM has a sofa and family photos.", prompt: "Where is the sofa?", options: ["Living room", "Kitchen", "Porch"], correct: 0 },
          { text: "The GARDEN has green grass and colorful flowers.", prompt: "Where are the flowers?", options: ["Attic", "Garden", "Closet"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u3_w1",
        title: "Build Family Words",
        desc: "Unscramble the letters to spell family words.",
        exercises: [
          { target: "BABY", letters: ["Y", "B", "A", "B"], icon: "👶", hint: "Little family member" },
          { target: "BOY", letters: ["Y", "B", "O"], icon: "👦", hint: "Young male child" },
          { target: "DOOR", letters: ["R", "D", "O", "O"], icon: "🚪", hint: "Enter through it" },
          { target: "HOME", letters: ["E", "H", "O", "M"], icon: "🏡", hint: "Where your family lives" },
          { target: "MOM", letters: ["M", "O", "M"], icon: "👩", hint: "Loving mother" }
        ]
      },
      {
        id: "u3_w2",
        title: "Complete Missing Letters",
        desc: "Fill in the missing letters in home and family words.",
        exercises: [
          { target: "B_BY", missing: "A", full: "BABY", options: ["A", "O", "E"], icon: "👶" },
          { target: "D_DDY", missing: "A", full: "DADDY", options: ["E", "A", "U"], icon: "👨" },
          { target: "M_MMY", missing: "O", full: "MOMMY", options: ["A", "O", "I"], icon: "👩" },
          { target: "S_STER", missing: "I", full: "SISTER", options: ["A", "I", "U"], icon: "👧" },
          { target: "H_USE", missing: "O", full: "HOUSE", options: ["O", "E", "I"], icon: "🏡" }
        ]
      },
      {
        id: "u3_w3",
        title: "Label the House",
        desc: "Type or select the label for each part of the house.",
        exercises: [
          { prompt: "Label this object: 🚪", answer: "door", accepted: ["door", "Door", "a door"] },
          { prompt: "Label this object: 🪟", answer: "window", accepted: ["window", "Window", "a window"] },
          { prompt: "Label this object: 🏡", answer: "house", accepted: ["house", "House", "a house"] },
          { prompt: "Label this person: 👶", answer: "baby", accepted: ["baby", "Baby", "the baby"] },
          { prompt: "Label this shape: ⏹️", answer: "square", accepted: ["square", "Square"] }
        ]
      },
      {
        id: "u3_w4",
        title: "Complete Family Sentences",
        desc: "Complete sentences about family members.",
        exercises: [
          { sentence: "This is my ______ (👩). She is nice.", answer: "mommy", accepted: ["mommy", "mom", "Mommy", "mother"] },
          { sentence: "This is my ______ (👨). He is tall.", answer: "daddy", accepted: ["daddy", "dad", "Daddy", "father"] },
          { sentence: "This is the little ______ (👶).", answer: "baby", accepted: ["baby", "Baby"] },
          { sentence: "My ______ (👦) plays with blocks.", answer: "brother", accepted: ["brother", "Brother"] },
          { sentence: "My ______ (👧) draws a butterfly.", answer: "sister", accepted: ["sister", "Sister"] }
        ]
      },
      {
        id: "u3_w5",
        title: "Describe the Home with There Is/Are",
        desc: "Write 'There is' or 'There are' to complete the sentences.",
        exercises: [
          { sentence: "______ a front door. (🚪)", answer: "There is", accepted: ["There is", "there is"] },
          { sentence: "______ four windows. (🪟🪟🪟🪟)", answer: "There are", accepted: ["There are", "there are"] },
          { sentence: "______ a baby in the crib. (👶)", answer: "There is", accepted: ["There is", "there is"] },
          { sentence: "______ two chairs at the table. (🪑🪑)", answer: "There are", accepted: ["There are", "there are"] },
          { sentence: "______ a garden outside. (🌳)", answer: "There is", accepted: ["There is", "there is"] }
        ]
      },
      {
        id: "u3_w6",
        title: "My Family and My Home",
        desc: "Fill in personal guided facts about your family and home.",
        exercises: [
          { sentence: "I live in a ______ . (house / apartment)", answer: "house", accepted: ["house", "apartment", "House", "Apartment"] },
          { sentence: "My door is ______ . (brown / red / white)", answer: "brown", accepted: ["brown", "red", "white", "blue", "green"] },
          { sentence: "There are ______ people in my family.", answer: "four", accepted: ["four", "three", "five", "two", "six", "4", "3", "5", "2"] },
          { sentence: "I love my ______ and Daddy.", answer: "Mommy", accepted: ["Mommy", "mommy", "Mom", "mom"] },
          { sentence: "Our home is ______ and happy. (big / little)", answer: "big", accepted: ["big", "little", "Big", "Little", "cozy"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u3_s1",
        title: "Say the Family Members",
        desc: "Pronounce each family title clearly into your microphone.",
        exercises: [
          { prompt: "Say: Mommy", target: "mommy", audio: "Mommy", icon: "👩" },
          { prompt: "Say: Daddy", target: "daddy", audio: "Daddy", icon: "👨" },
          { prompt: "Say: Baby", target: "baby", audio: "Baby", icon: "👶" },
          { prompt: "Say: Brother", target: "brother", audio: "Brother", icon: "👦" },
          { prompt: "Say: Sister", target: "sister", audio: "Sister", icon: "👧" }
        ]
      },
      {
        id: "u3_s2",
        title: "Who Is This?",
        desc: "Look at the portrait and say: 'This is my...'",
        exercises: [
          { prompt: "Who is this? 👩", target: "this is my mommy", audio: "This is my mommy" },
          { prompt: "Who is this? 👨", target: "this is my daddy", audio: "This is my daddy" },
          { prompt: "Who is this? 👶", target: "this is the baby", audio: "This is the baby" },
          { prompt: "Who is this? 👦", target: "this is my brother", audio: "This is my brother" },
          { prompt: "Who is this? 👧", target: "this is my sister", audio: "This is my sister" }
        ]
      },
      {
        id: "u3_s3",
        title: "Describe My House",
        desc: "Practice describing parts of your house aloud.",
        exercises: [
          { prompt: "Say: 'This is my house.'", target: "this is my house" },
          { prompt: "Say: 'The door is brown.'", target: "the door is brown" },
          { prompt: "Say: 'The windows are square.'", target: "the windows are square" },
          { prompt: "Say: 'I have a big bedroom.'", target: "i have a big bedroom" },
          { prompt: "Say: 'We eat in the kitchen.'", target: "we eat in the kitchen" }
        ]
      },
      {
        id: "u3_s4",
        title: "Big or Little?",
        desc: "Compare homes and rooms using 'Big' or 'Little'.",
        exercises: [
          { prompt: "Say: 'The apartment building is big.'", target: "the apartment building is big" },
          { prompt: "Say: 'The baby bed is little.'", target: "the baby bed is little" },
          { prompt: "Say: 'The house is big.'", target: "the house is big" },
          { prompt: "Say: 'The puppy is little.'", target: "the puppy is little" },
          { prompt: "Say: 'The window is big.'", target: "the window is big" }
        ]
      },
      {
        id: "u3_s5",
        title: "How Many Windows?",
        desc: "Count and speak the number of windows and doors.",
        exercises: [
          { prompt: "Say: 'One door'", target: "one door" },
          { prompt: "Say: 'Two windows'", target: "two windows" },
          { prompt: "Say: 'Three bedrooms'", target: "three bedrooms" },
          { prompt: "Say: 'Four chairs'", target: "four chairs" },
          { prompt: "Say: 'Five family members'", target: "five family members" }
        ]
      },
      {
        id: "u3_s6",
        title: "Introduce My Family",
        desc: "Present your whole family aloud in 3 sentences.",
        exercises: [
          { prompt: "Sentence 1: 'Hello! This is my family.'", target: "hello this is my family" },
          { prompt: "Sentence 2: 'I have Mommy, Daddy, and a brother.'", target: "i have mommy daddy and a brother" },
          { prompt: "Sentence 3: 'We live in a nice house.'", target: "we live in a nice house" },
          { prompt: "Sentence 4: 'We play games together.'", target: "we play games together" },
          { prompt: "Sentence 5: 'I love my family very much!'", target: "i love my family very much" }
        ]
      }
    ],

    videos: [
      {
        title: "Finger Family Song | LearnEnglish Kids",
        videoId: "mjFcrv6Lfx8",
        embedUrl: "https://www.youtube-nocookie.com/embed/mjFcrv6Lfx8",
        thumbnail: "assets/toddlers_hd/toddlers_cont_numbers.png",
        description: "Daddy finger, Mommy finger, Brother finger, Sister finger and Baby finger in a cheerful family rhyme!",
        checkpoints: [
          { time: 10, question: "Who is the first finger in the song?", options: ["Daddy finger", "Baby finger", "Grandpa"], correct: 0 },
          { time: 30, question: "Where is Mommy finger?", options: ["Here I am!", "Sleeping", "Away"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Magic Family House",
      story: "A sweet family just moved into their new home! Help them organize each room, unpack family belongings, and discover secrets across 12 levels.",
      levels: [
        { level: 1, title: "Find the House", mission: "Find the right house with the red door on the street.", targetCount: 1, itemType: "house", icon: "🏡" },
        { level: 2, title: "Open the Door", mission: "Turn the key and open the front door.", targetCount: 1, itemType: "door", icon: "🚪" },
        { level: 3, title: "Meet the Baby", mission: "Find the baby in the crib and give a warm rattle.", targetCount: 1, itemType: "baby", icon: "👶" },
        { level: 4, title: "Identify Mommy and Daddy", mission: "Match portraits of Mommy and Daddy to the living room wall.", targetCount: 2, itemType: "parents", icon: "👨‍👩‍👧" },
        { level: 5, title: "Find the Brother and Sister", mission: "Guide brother and sister to the playroom.", targetCount: 2, itemType: "siblings", icon: "👫" },
        { level: 6, title: "Match Family Members", mission: "Connect 4 family figures to their name tags.", targetCount: 4, itemType: "matching", icon: "🔗" },
        { level: 7, title: "Count Windows", mission: "Tap and clean all 4 square windows.", targetCount: 4, itemType: "windows", icon: "🪟" },
        { level: 8, title: "Discover the Building", mission: "Explore the tall apartment building next door.", targetCount: 1, itemType: "building", icon: "🏢" },
        { level: 9, title: "Sort Big and Little Houses", mission: "Sort big family houses and little bird houses.", targetCount: 4, itemType: "sort_sizes", icon: "📦" },
        { level: 10, title: "Identify Squares and Colors", mission: "Spot square windows and colored doors.", targetCount: 3, itemType: "shapes", icon: "⏹️" },
        { level: 11, title: "Complete There Is/There Are", mission: "Count items and form 3 complete sentences.", targetCount: 3, itemType: "sentences", icon: "✍️" },
        { level: 12, title: "The Family House Challenge", mission: "Gather all family members around the dinner table for a family photo!", targetCount: 5, itemType: "finale", icon: "📸" }
      ]
    },

    finalChallenge: {
      title: "Family House Master Quest",
      story: "10 interactive steps to prove your mastery of Home and Family!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Where is Mommy?'", options: ["👩", "👨", "👶"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'DOOR'", options: ["🚪", "🪟", "🏡"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: B _ B Y", answer: "A" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'This is my home'", target: "this is my home" },
        { step: 5, type: "phonics", prompt: "Which word starts with /b/?", options: ["Brother", "Sister", "Mommy"], correct: 0 },
        { step: 6, type: "math_vocab", prompt: "Count windows: 🪟 🪟 🪟 🪟", options: ["3", "4", "5"], correct: 1 },
        { step: 7, type: "writing", prompt: "Unscramble: D A D", answer: "DAD" },
        { step: 8, type: "reading", prompt: "Choose: 'There is a big ______ (🏢)'", options: ["building", "chair", "pencil"], correct: 0 },
        { step: 9, type: "listening", prompt: "Listen: 'Say good night to Baby'", options: ["👶🌙", "🏃", "🥪"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'I love my family!'", target: "i love my family" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 04: MY BODY
  // ==========================================================================
  {
    id: 4,
    code: "unit_04",
    title: "My Body",
    subtitle: "Body Parts, Feelings & The /h/ Sound",
    icon: "🧍",
    themeColor: "#0284c7",
    themeLight: "#f0f9ff",
    structures: ["Present Simple", "Verb to be", "This is/These are", "There is/are"],
    functions: ["Identifying parts of the face and body", "Counting", "Describing size", "Expressing feelings", "Identifying the /h/ sound"],
    vocabulary: ["Angry", "Arm", "Big", "Body", "Eye", "Feet", "Friend", "Happy", "Hand", "Head", "Mouth", "Nose", "Sad", "Small", "Numbers 1–10"],
    phonicsFocus: "/h/ Sound: Head, Hand, Happy, Hat, Heart",

    explore: [
      { name: "Head", icon: "👦", fact: "Our head holds our brain, eyes, ears, nose and smile!", audio: "head", color: "Beige", shape: "Circle", count: 1 },
      { name: "Eyes", icon: "👀", fact: "Two eyes to see colors, friends and books.", audio: "eye", color: "Brown", shape: "Oval", count: 2 },
      { name: "Nose", icon: "👃", fact: "Our nose smells flowers and delicious baked cookies.", audio: "nose", color: "Skin", shape: "Triangle", count: 1 },
      { name: "Mouth", icon: "👄", fact: "A smiling mouth to talk, sing, eat and laugh.", audio: "mouth", color: "Red", shape: "Crescent", count: 1 },
      { name: "Arms", icon: "💪", fact: "Two strong arms to give big friendly hugs.", audio: "arm", color: "Skin", shape: "Long", count: 2 },
      { name: "Hands", icon: "🖐️", fact: "Ten fingers on two hands to draw, clap and wave.", audio: "hand", color: "Skin", shape: "Fan", count: 2 },
      { name: "Feet", icon: "🦶", fact: "Two feet to walk, jump, dance and run in the park.", audio: "feet", color: "Skin", shape: "Oval", count: 2 },
      { name: "Feelings", icon: "😊😢😠", fact: "Happy, sad, or angry: all feelings are normal to express!", audio: "happy", color: "Yellow", shape: "Circle", count: 3 }
    ],

    listening: [
      {
        id: "u4_l1",
        title: "Touch Your Body",
        desc: "Follow the body action command: Touch your head, nose, feet!",
        exercises: [
          { audio: "Touch your head", prompt: "Touch your HEAD", options: [{ name: "Head", icon: "👦" }, { name: "Hand", icon: "🖐️" }, { name: "Feet", icon: "🦶" }], correct: 0 },
          { audio: "Touch your nose", prompt: "Touch your NOSE", options: [{ name: "Eye", icon: "👀" }, { name: "Nose", icon: "👃" }, { name: "Mouth", icon: "👄" }], correct: 1 },
          { audio: "Touch your feet", prompt: "Touch your FEET", options: [{ name: "Arm", icon: "💪" }, { name: "Head", icon: "👦" }, { name: "Feet", icon: "🦶" }], correct: 2 },
          { audio: "Wiggle your fingers", prompt: "Wiggle your FINGERS", options: [{ name: "Fingers", icon: "🖐️✨" }, { name: "Eyes", icon: "👀" }, { name: "Nose", icon: "👃" }], correct: 0 },
          { audio: "Open your mouth", prompt: "Open your MOUTH", options: [{ name: "Feet", icon: "🦶" }, { name: "Mouth", icon: "👄" }, { name: "Arm", icon: "💪" }], correct: 1 }
        ]
      },
      {
        id: "u4_l2",
        title: "Listen and Point",
        desc: "Listen to the body part and point to it on the character.",
        exercises: [
          { audio: "Point to the eyes", prompt: "Point to EYES", options: [{ name: "Eyes", icon: "👀" }, { name: "Nose", icon: "👃" }, { name: "Head", icon: "👦" }], correct: 0 },
          { audio: "Point to the arms", prompt: "Point to ARMS", options: [{ name: "Feet", icon: "🦶" }, { name: "Arms", icon: "💪" }, { name: "Mouth", icon: "👄" }], correct: 1 },
          { audio: "Point to the hands", prompt: "Point to HANDS", options: [{ name: "Head", icon: "👦" }, { name: "Nose", icon: "👃" }, { name: "Hands", icon: "🖐️" }], correct: 2 },
          { audio: "Point to the mouth", prompt: "Point to MOUTH", options: [{ name: "Mouth", icon: "👄" }, { name: "Eyes", icon: "👀" }, { name: "Feet", icon: "🦶" }], correct: 0 },
          { audio: "Point to the feet", prompt: "Point to FEET", options: [{ name: "Hands", icon: "🖐️" }, { name: "Feet", icon: "🦶" }, { name: "Arms", icon: "💪" }], correct: 1 }
        ]
      },
      {
        id: "u4_l3",
        title: "Emotion Detective",
        desc: "Listen to the character's voice and determine if they are happy, sad, or angry.",
        exercises: [
          { audio: "YAY! I am so happy today! Hahaha!", prompt: "How does the voice feel?", options: [{ name: "Happy", icon: "😊" }, { name: "Sad", icon: "😢" }, { name: "Angry", icon: "😠" }], correct: 0 },
          { audio: "Oh no... I lost my toy... sniffle...", prompt: "How does the voice feel?", options: [{ name: "Angry", icon: "😠" }, { name: "Sad", icon: "😢" }, { name: "Happy", icon: "😊" }], correct: 1 },
          { audio: "GRRR! That is not fair! Grrr!", prompt: "How does the voice feel?", options: [{ name: "Happy", icon: "😊" }, { name: "Sleepy", icon: "😴" }, { name: "Angry", icon: "😠" }], correct: 2 },
          { audio: "I love playing with my best friend! We are smiling!", prompt: "How does the voice feel?", options: [{ name: "Happy", icon: "😁" }, { name: "Sad", icon: "😢" }, { name: "Scared", icon: "😨" }], correct: 0 },
          { audio: "I bumped my knee... ouch...", prompt: "How does the voice feel?", options: [{ name: "Happy", icon: "😊" }, { name: "Sad", icon: "😢" }, { name: "Angry", icon: "😠" }], correct: 1 }
        ]
      },
      {
        id: "u4_l4",
        title: "Count the Body Parts",
        desc: "Listen to the sentence and verify the count.",
        exercises: [
          { audio: "I have two eyes to see.", prompt: "How many eyes?", options: [{ name: "1", icon: "1️⃣" }, { name: "2", icon: "2️⃣" }, { name: "3", icon: "3️⃣" }], correct: 1 },
          { audio: "I have one nose to smell.", prompt: "How many noses?", options: [{ name: "1", icon: "1️⃣" }, { name: "2", icon: "2️⃣" }, { name: "5", icon: "5️⃣" }], correct: 0 },
          { audio: "I have ten fingers on my hands.", prompt: "How many fingers?", options: [{ name: "5", icon: "5️⃣" }, { name: "8", icon: "8️⃣" }, { name: "10", icon: "🔟" }], correct: 2 },
          { audio: "I have two feet to run.", prompt: "How many feet?", options: [{ name: "2", icon: "2️⃣" }, { name: "4", icon: "4️⃣" }, { name: "1", icon: "1️⃣" }], correct: 0 },
          { audio: "I have one mouth to smile.", prompt: "How many mouths?", options: [{ name: "2", icon: "2️⃣" }, { name: "1", icon: "1️⃣" }, { name: "3", icon: "3️⃣" }], correct: 1 }
        ]
      },
      {
        id: "u4_l5",
        title: "Big and Small Body Challenge",
        desc: "Distinguish between big and small body features.",
        exercises: [
          { audio: "Look at the elephant's big ears!", prompt: "The elephant has...", options: [{ name: "Big ears", icon: "🐘👂 (Big)" }, { name: "Small ears", icon: "🐭👂 (Small)" }], correct: 0 },
          { audio: "The little mouse has small feet.", prompt: "The mouse has...", options: [{ name: "Giant feet", icon: "🦶 (Big)" }, { name: "Small feet", icon: "🦶 (Small)" }], correct: 1 },
          { audio: "Show me the big smile!", prompt: "Find: BIG smile", options: [{ name: "Big Smile", icon: "😁" }, { name: "Tiny Mouth", icon: "👄" }], correct: 0 },
          { audio: "Find the small nose", prompt: "Find: SMALL nose", options: [{ name: "Big Nose", icon: "👃 (Big)" }, { name: "Small Nose", icon: "👃 (Small)" }], correct: 1 },
          { audio: "Show me two big hands", prompt: "Find: BIG hands", options: [{ name: "Tiny Hands", icon: "🖐️ (Baby)" }, { name: "Big Hands", icon: "🖐️ (Adult)" }], correct: 1 }
        ]
      },
      {
        id: "u4_l6",
        title: "Body Instructions Quiz",
        desc: "Follow the sequence of body movements in English.",
        exercises: [
          { audio: "Clap your hands three times: 1, 2, 3!", prompt: "Action: Clap hands 3 times", options: [{ name: "Clap 1, 2, 3", icon: "👏 3x" }, { name: "Stomp feet", icon: "🦶" }, { name: "Close eyes", icon: "🙈" }], correct: 0 },
          { audio: "Stomp your feet on the ground: Stomp, stomp!", prompt: "Action: Stomp feet", options: [{ name: "Wave hands", icon: "👋" }, { name: "Stomp feet", icon: "🦶🦶" }, { name: "Yawn", icon: "🥱" }], correct: 1 },
          { audio: "Nod your head: Yes, yes!", prompt: "Action: Nod head", options: [{ name: "Shake feet", icon: "🦶" }, { name: "Touch nose", icon: "👃" }, { name: "Nod head", icon: "👦↕️" }], correct: 2 },
          { audio: "Wiggle your nose like a bunny!", prompt: "Action: Wiggle nose", options: [{ name: "Wiggle nose", icon: "👃🐰" }, { name: "Open mouth", icon: "👄" }, { name: "Sit down", icon: "🪑" }], correct: 0 },
          { audio: "Give yourself a warm hug with your arms!", prompt: "Action: Hug yourself", options: [{ name: "Run away", icon: "🏃" }, { name: "Hug yourself", icon: "🤗" }, { name: "Clap", icon: "👏" }], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u4_r1",
        title: "Match Body Parts",
        desc: "Read the word and select the matching body part.",
        exercises: [
          { text: "HEAD", prompt: "Read: HEAD", options: [{ name: "Head", icon: "👦" }, { name: "Feet", icon: "🦶" }, { name: "Hand", icon: "🖐️" }], correct: 0 },
          { text: "EYE", prompt: "Read: EYE", options: [{ name: "Nose", icon: "👃" }, { name: "Eye", icon: "👀" }, { name: "Mouth", icon: "👄" }], correct: 1 },
          { text: "NOSE", prompt: "Read: NOSE", options: [{ name: "Arm", icon: "💪" }, { name: "Head", icon: "👦" }, { name: "Nose", icon: "👃" }], correct: 2 },
          { text: "MOUTH", prompt: "Read: MOUTH", options: [{ name: "Mouth", icon: "👄" }, { name: "Feet", icon: "🦶" }, { name: "Eye", icon: "👀" }], correct: 0 },
          { text: "HAND", prompt: "Read: HAND", options: [{ name: "Head", icon: "👦" }, { name: "Hand", icon: "🖐️" }, { name: "Nose", icon: "👃" }], correct: 1 }
        ]
      },
      {
        id: "u4_r2",
        title: "Read and Touch",
        desc: "Read the command and identify which body part to touch.",
        exercises: [
          { text: "Touch your nose. (👃)", prompt: "What do you touch?", options: ["Nose", "Feet", "Hair"], correct: 0 },
          { text: "Touch your two eyes. (👀)", prompt: "What do you touch?", options: ["Hands", "Eyes", "Ears"], correct: 1 },
          { text: "Touch your feet. (🦶)", prompt: "What do you touch?", options: ["Head", "Mouth", "Feet"], correct: 2 },
          { text: "Show your happy mouth. (👄)", prompt: "What do you show?", options: ["Mouth", "Feet", "Arm"], correct: 0 },
          { text: "Wave your hands. (🖐️)", prompt: "What do you wave?", options: ["Nose", "Hands", "Eyes"], correct: 1 }
        ]
      },
      {
        id: "u4_r3",
        title: "Complete This Is/These Are",
        desc: "Choose 'This is' (singular) or 'These are' (plural) for body parts.",
        exercises: [
          { text: "______ my head. (👦)", options: ["This is", "These are"], correct: 0 },
          { text: "______ my two eyes. (👀)", options: ["This is", "These are"], correct: 1 },
          { text: "______ my nose. (👃)", options: ["This is", "These are"], correct: 0 },
          { text: "______ my two arms. (💪💪)", options: ["This is", "These are"], correct: 1 },
          { text: "______ my feet. (🦶🦶)", options: ["This is", "These are"], correct: 1 }
        ]
      },
      {
        id: "u4_r4",
        title: "Emotion Word Match",
        desc: "Read the feeling word and tap the corresponding emoji.",
        exercises: [
          { text: "HAPPY", prompt: "Read: HAPPY", options: [{ name: "Happy", icon: "😊" }, { name: "Sad", icon: "😢" }, { name: "Angry", icon: "😠" }], correct: 0 },
          { text: "SAD", prompt: "Read: SAD", options: [{ name: "Angry", icon: "😠" }, { name: "Sad", icon: "😢" }, { name: "Happy", icon: "😊" }], correct: 1 },
          { text: "ANGRY", prompt: "Read: ANGRY", options: [{ name: "Sleepy", icon: "😴" }, { name: "Happy", icon: "😊" }, { name: "Angry", icon: "😠" }], correct: 2 },
          { text: "FRIEND", prompt: "Read: FRIEND", options: [{ name: "Friend", icon: "👫" }, { name: "Tree", icon: "🌳" }, { name: "Car", icon: "🚗" }], correct: 0 },
          { text: "SMILE", prompt: "Read: SMILE", options: [{ name: "Cry", icon: "😭" }, { name: "Smile", icon: "😁" }, { name: "Sleep", icon: "😴" }], correct: 1 }
        ]
      },
      {
        id: "u4_r5",
        title: "Find the /h/ Sound",
        desc: "Locate words starting with the sound /h/ (Head, Hand, Happy, Hat, Hug).",
        exercises: [
          { prompt: "Which body part starts with /h/?", options: [{ name: "Head", icon: "👦" }, { name: "Eye", icon: "👀" }, { name: "Foot", icon: "🦶" }], correct: 0 },
          { prompt: "Which body part starts with /h/?", options: [{ name: "Nose", icon: "👃" }, { name: "Hand", icon: "🖐️" }, { name: "Arm", icon: "💪" }], correct: 1 },
          { prompt: "Which feeling starts with /h/?", options: [{ name: "Sad", icon: "😢" }, { name: "Angry", icon: "😠" }, { name: "Happy", icon: "😊" }], correct: 2 },
          { prompt: "Which clothing item starts with /h/?", options: [{ name: "Hat", icon: "🎩" }, { name: "Pants", icon: "👖" }, { name: "Shoes", icon: "👟" }], correct: 0 },
          { prompt: "Which warm action starts with /h/?", options: [{ name: "Kick", icon: "⚽" }, { name: "Hug", icon: "🤗" }, { name: "Run", icon: "🏃" }], correct: 1 }
        ]
      },
      {
        id: "u4_r6",
        title: "My Body Illustrated Story",
        desc: "Read the story of active children playing in the park.",
        exercises: [
          { text: "Leo uses his two feet to run fast. He kicks the ball with his right foot.", prompt: "What does Leo use to run?", options: ["His feet", "His hands", "His nose"], correct: 0 },
          { text: "Luna catches the ball with her two hands. 'Good catch, Luna!'", prompt: "What does Luna catch the ball with?", options: ["Her feet", "Her hands", "Her head"], correct: 1 },
          { text: "They run so much their faces are warm and happy. Big smiles everywhere!", prompt: "How do their faces look?", options: ["Angry", "Sad", "Happy and smiling"], correct: 2 },
          { text: "Mommy gives them water. They drink with their mouths.", prompt: "What do they drink with?", options: ["Their mouths", "Their eyes", "Their ears"], correct: 0 },
          { text: "At night, they close their eyes and sleep peacefully.", prompt: "What do they close to sleep?", options: ["Their hands", "Their eyes", "Their feet"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u4_w1",
        title: "Build Body Words",
        desc: "Spell the body parts by ordering the letter tiles.",
        exercises: [
          { target: "HEAD", letters: ["D", "H", "A", "E"], icon: "👦", hint: "Top of your body" },
          { target: "HAND", letters: ["N", "H", "A", "D"], icon: "🖐️", hint: "Has five fingers" },
          { target: "NOSE", letters: ["S", "N", "O", "E"], icon: "👃", hint: "Used for smelling" },
          { target: "EYE", letters: ["Y", "E", "E"], icon: "👀", hint: "Used for seeing" },
          { target: "ARM", letters: ["M", "A", "R"], icon: "💪", hint: "Connects to your hand" }
        ]
      },
      {
        id: "u4_w2",
        title: "Missing Letters",
        desc: "Fill in the missing letter for each body part word.",
        exercises: [
          { target: "H_AD", missing: "E", full: "HEAD", options: ["E", "A", "O"], icon: "👦" },
          { target: "H_ND", missing: "A", full: "HAND", options: ["E", "A", "I"], icon: "🖐️" },
          { target: "N_SE", missing: "O", full: "NOSE", options: ["A", "O", "U"], icon: "👃" },
          { target: "F_ET", missing: "E", full: "FEET", options: ["E", "I", "A"], icon: "🦶" },
          { target: "M_UTH", missing: "O", full: "MOUTH", options: ["O", "A", "E"], icon: "👄" }
        ]
      },
      {
        id: "u4_w3",
        title: "Label the Body",
        desc: "Type or select the correct label for each indicated body part.",
        exercises: [
          { prompt: "Label: 👦", answer: "head", accepted: ["head", "Head"] },
          { prompt: "Label: 👀", answer: "eyes", accepted: ["eyes", "eye", "Eyes"] },
          { prompt: "Label: 👃", answer: "nose", accepted: ["nose", "Nose"] },
          { prompt: "Label: 👄", answer: "mouth", accepted: ["mouth", "Mouth"] },
          { prompt: "Label: 🖐️", answer: "hand", accepted: ["hand", "hands", "Hand"] }
        ]
      },
      {
        id: "u4_w4",
        title: "Complete the Sentences",
        desc: "Fill in the blanks with correct body words.",
        exercises: [
          { sentence: "I see with my ______ . (👀)", answer: "eyes", accepted: ["eyes", "eye"] },
          { sentence: "I smell with my ______ . (👃)", answer: "nose", accepted: ["nose"] },
          { sentence: "I eat with my ______ . (👄)", answer: "mouth", accepted: ["mouth"] },
          { sentence: "I clap with my ______ . (🖐️)", answer: "hands", accepted: ["hands", "hand"] },
          { sentence: "I run with my ______ . (🦶)", answer: "feet", accepted: ["feet", "foot"] }
        ]
      },
      {
        id: "u4_w5",
        title: "Describe the Character",
        desc: "Complete sentences describing a friendly cartoon character.",
        exercises: [
          { sentence: "Bili has a big round ______ . (👦)", answer: "head", accepted: ["head"] },
          { sentence: "Bili has two big blue ______ . (👀)", answer: "eyes", accepted: ["eyes"] },
          { sentence: "Bili has a happy smiling ______ . (👄)", answer: "mouth", accepted: ["mouth"] },
          { sentence: "Bili waves his friendly ______ . (🖐️)", answer: "hand", accepted: ["hand", "hands"] },
          { sentence: "Bili is a very ______ friend! (😊)", answer: "happy", accepted: ["happy"] }
        ]
      },
      {
        id: "u4_w6",
        title: "My Feelings Card",
        desc: "Express how you feel by writing emotion words.",
        exercises: [
          { sentence: "When I play with friends, I feel ______ . (😊)", answer: "happy", accepted: ["happy", "Happy"] },
          { sentence: "When I lose my toy, I feel ______ . (😢)", answer: "sad", accepted: ["sad", "Sad"] },
          { sentence: "When someone breaks my block, I feel ______ . (😠)", answer: "angry", accepted: ["angry", "Angry"] },
          { sentence: "I give my friend a warm ______ . (🤗)", answer: "hug", accepted: ["hug", "Hug"] },
          { sentence: "My friend makes me ______ . (😁)", answer: "smile", accepted: ["smile", "happy"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u4_s1",
        title: "Say the Body Parts",
        desc: "Pronounce each body part clearly.",
        exercises: [
          { prompt: "Say: Head", target: "head", audio: "Head", icon: "👦" },
          { prompt: "Say: Eye", target: "eye", audio: "Eye", icon: "👀" },
          { prompt: "Say: Nose", target: "nose", audio: "Nose", icon: "👃" },
          { prompt: "Say: Mouth", target: "mouth", audio: "Mouth", icon: "👄" },
          { prompt: "Say: Hand", target: "hand", audio: "Hand", icon: "🖐️" }
        ]
      },
      {
        id: "u4_s2",
        title: "Touch and Say",
        desc: "Touch the part and say: 'This is my...'",
        exercises: [
          { prompt: "Touch head and say: 'This is my head'", target: "this is my head" },
          { prompt: "Touch nose and say: 'This is my nose'", target: "this is my nose" },
          { prompt: "Touch mouth and say: 'This is my mouth'", target: "this is my mouth" },
          { prompt: "Touch eye and say: 'This is my eye'", target: "this is my eye" },
          { prompt: "Wave hand and say: 'This is my hand'", target: "this is my hand" }
        ]
      },
      {
        id: "u4_s3",
        title: "How Do You Feel?",
        desc: "Express emotional states aloud.",
        exercises: [
          { prompt: "Say: 'I am happy!'", target: "i am happy", audio: "I am happy" },
          { prompt: "Say: 'I feel sad.'", target: "i feel sad", audio: "I feel sad" },
          { prompt: "Say: 'I feel angry.'", target: "i feel angry", audio: "I feel angry" },
          { prompt: "Say: 'I am smiling!'", target: "i am smiling", audio: "I am smiling" },
          { prompt: "Say: 'We are good friends.'", target: "we are good friends" }
        ]
      },
      {
        id: "u4_s4",
        title: "Describe the Face",
        desc: "Describe features of a friendly face.",
        exercises: [
          { prompt: "Say: 'I have two eyes.'", target: "i have two eyes" },
          { prompt: "Say: 'I have one nose.'", target: "i have one nose" },
          { prompt: "Say: 'I have a big mouth.'", target: "i have a big mouth" },
          { prompt: "Say: 'My eyes are brown.'", target: "my eyes are brown" },
          { prompt: "Say: 'I have a happy smile.'", target: "i have a happy smile" }
        ]
      },
      {
        id: "u4_s5",
        title: "Count Body Parts",
        desc: "Count parts aloud: 1, 2, 10.",
        exercises: [
          { prompt: "Say: 'One head'", target: "one head" },
          { prompt: "Say: 'Two eyes'", target: "two eyes" },
          { prompt: "Say: 'Two hands'", target: "two hands" },
          { prompt: "Say: 'Two feet'", target: "two feet" },
          { prompt: "Say: 'Ten fingers'", target: "ten fingers" }
        ]
      },
      {
        id: "u4_s6",
        title: "My Body Presentation",
        desc: "Present your body parts and movement abilities in 3 sentences.",
        exercises: [
          { prompt: "Sentence 1: 'Look at my body!'", target: "look at my body" },
          { prompt: "Sentence 2: 'I can clap with my hands.'", target: "i can clap with my hands" },
          { prompt: "Sentence 3: 'I can run with my feet.'", target: "i can run with my feet" },
          { prompt: "Sentence 4: 'I see with my two eyes.'", target: "i see with my two eyes" },
          { prompt: "Sentence 5: 'I am happy and healthy!'", target: "i am happy and healthy" }
        ]
      }
    ],

    videos: [
      {
        title: "Head, Shoulders, Knees and Toes | British Council Kids",
        videoId: "QA48wTGbU7A",
        embedUrl: "https://www.youtube-nocookie.com/embed/QA48wTGbU7A",
        thumbnail: "assets/toddlers_hd/toddlers_cont_routines.png",
        description: "Touch your head, shoulders, knees and toes in this classic active song with Leo and friends!",
        checkpoints: [
          { time: 12, question: "What body part do they touch first?", options: ["Head", "Knees", "Toes"], correct: 0 },
          { time: 28, question: "What do you touch after knees?", options: ["Toes", "Eyes", "Nose"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Body Explorer Mission",
      story: "Help friendly robot Robi assemble his parts, connect his vision sensors, and express his happy emotions across 12 levels!",
      levels: [
        { level: 1, title: "Find the Head", mission: "Discover and position the round robotic head.", targetCount: 1, itemType: "head", icon: "🤖" },
        { level: 2, title: "Add the Eyes", mission: "Place 2 glowing vision eyes into the face plate.", targetCount: 2, itemType: "eyes", icon: "👀" },
        { level: 3, title: "Find the Nose and Mouth", mission: "Attach the speech speaker mouth and sensor nose.", targetCount: 2, itemType: "mouth_nose", icon: "👄" },
        { level: 4, title: "Attach the Arms", mission: "Screw on the left and right mechanical arms.", targetCount: 2, itemType: "arms", icon: "💪" },
        { level: 5, title: "Find the Hands", mission: "Install 2 five-fingered hands to wave hello.", targetCount: 2, itemType: "hands", icon: "🖐️" },
        { level: 6, title: "Complete the Feet", mission: "Attach 2 bipedal walker feet.", targetCount: 2, itemType: "feet", icon: "🦶" },
        { level: 7, title: "Count Body Parts", mission: "Verify inventory: 1 head, 2 eyes, 2 arms, 2 feet.", targetCount: 4, itemType: "count", icon: "🔢" },
        { level: 8, title: "Big and Small Challenge", mission: "Choose big hands or small hands for delicate tasks.", targetCount: 2, itemType: "size", icon: "🔍" },
        { level: 9, title: "Identify the Feelings", mission: "Switch Robi's screen face between Happy, Sad, and Surprised.", targetCount: 3, itemType: "emotions", icon: "😊" },
        { level: 10, title: "Find the /h/ Sound", mission: "Collect /h/ power batteries: Head, Hand, Heart, Happy.", targetCount: 4, itemType: "phonics", icon: "🔋" },
        { level: 11, title: "Follow Body Instructions", mission: "Execute Robi's test dance: Clap, Stomp, and Wave!", targetCount: 3, itemType: "actions", icon: "💃" },
        { level: 12, title: "Build the Complete Character", mission: "Power on Robi and celebrate with a robot victory dance!", targetCount: 1, itemType: "victory", icon: "🌟" }
      ]
    },

    finalChallenge: {
      title: "Body Master Hero Quest",
      story: "Demonstrate complete mastery of body vocabulary and emotions in 10 steps!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'Touch your nose'", options: ["👃", "👀", "👄"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'HAND'", options: ["🖐️", "🦶", "👦"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: E _ E", answer: "Y" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'I have two eyes'", target: "i have two eyes" },
        { step: 5, type: "phonics", prompt: "Which word starts with /h/?", options: ["Head", "Eye", "Nose"], correct: 0 },
        { step: 6, type: "emotions", prompt: "How do you feel when smiling?", options: ["Happy 😊", "Angry 😠", "Sad 😢"], correct: 0 },
        { step: 7, type: "math_vocab", prompt: "Count hands: 🖐️ 🖐️", options: ["1", "2", "3"], correct: 1 },
        { step: 8, type: "writing", prompt: "Unscramble: E E F T", answer: "FEET" },
        { step: 9, type: "listening", prompt: "Listen: 'Clap your hands!'", options: ["👏", "😴", "🏃"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'I am happy and strong!'", target: "i am happy and strong" }
      ]
    }
  },

  // ==========================================================================
  // UNIT 05: SUNNY AND CLOUDY
  // ==========================================================================
  {
    id: 5,
    code: "unit_05",
    title: "Sunny and Cloudy",
    subtitle: "Weather, Wardrobe, Colors & /h/ Sound Review",
    icon: "☀️",
    themeColor: "#f59e0b",
    themeLight: "#fffbeb",
    structures: ["Present Continuous", "Verb to be", "Like", "Adjectives"],
    functions: ["Identifying clothing items", "Describing the weather", "Describing size and color", "Expressing preferences", "Reviewing the /h/ sound"],
    vocabulary: ["Ball", "Big", "Cloudy", "Dress", "Hat", "Jacket", "Pants", "Sandals", "Shirt", "Shoes", "Shorts", "Sunny", "Sweater", "T-shirt", "Colors", "Numbers 1–11"],
    phonicsFocus: "/h/ Review: Hat, Hot, Hood, Happy",

    explore: [
      { name: "Sunny Day", icon: "☀️", fact: "The golden sun shines brightly in the clear blue sky.", audio: "sunny", color: "Yellow", shape: "Circle", count: 1 },
      { name: "Cloudy Day", icon: "☁️", fact: "Soft grey clouds drift over the hills, keeping us cool.", audio: "cloudy", color: "Grey", shape: "Cloud", count: 3 },
      { name: "Sun Hat", icon: "👒", fact: "Protects your face from bright sunshine.", audio: "hat", color: "Yellow", shape: "Cone", count: 1 },
      { name: "Jacket", icon: "🧥", fact: "A warm zip-up jacket for windy and cloudy afternoons.", audio: "jacket", color: "Blue", shape: "Coat", count: 1 },
      { name: "T-shirt", icon: "👕", fact: "Light cotton t-shirt to stay cool while playing.", audio: "shirt", color: "Red", shape: "T-shape", count: 1 },
      { name: "Shorts", icon: "🩳", fact: "Comfortable shorts for jumping and running on sunny days.", audio: "shorts", color: "Green", shape: "Pants", count: 1 },
      { name: "Sandals", icon: "🩴", fact: "Breezy sandals perfect for a sunny day at the beach.", audio: "sandals", color: "Orange", shape: "Footwear", count: 2 },
      { name: "Shoes", icon: "👟", fact: "Sturdy sneakers for running in the playground.", audio: "shoes", color: "Black", shape: "Footwear", count: 2 }
    ],

    listening: [
      {
        id: "u5_l1",
        title: "Weather Detective",
        desc: "Listen to the weather forecast and identify sunny vs. cloudy.",
        exercises: [
          { audio: "Today it is bright and sunny!", prompt: "What is the weather?", options: [{ name: "Sunny", icon: "☀️" }, { name: "Cloudy", icon: "☁️" }, { name: "Rainy", icon: "🌧️" }], correct: 0 },
          { audio: "Look at the grey clouds. It is cloudy.", prompt: "What is the weather?", options: [{ name: "Sunny", icon: "☀️" }, { name: "Cloudy", icon: "☁️" }, { name: "Snowy", icon: "❄️" }], correct: 1 },
          { audio: "Put on your sunglasses, the sun is warm!", prompt: "What is the weather?", options: [{ name: "Sunny", icon: "☀️😎" }, { name: "Thunder", icon: "⛈️" }, { name: "Foggy", icon: "🌫️" }], correct: 0 },
          { audio: "The sky is full of big white clouds.", prompt: "What is the weather?", options: [{ name: "Cloudy", icon: "☁️" }, { name: "Night", icon: "🌙" }, { name: "Hot Sun", icon: "☀️" }], correct: 0 },
          { audio: "It is sunny outside. Let's play in the garden!", prompt: "What is the weather?", options: [{ name: "Snowy", icon: "❄️" }, { name: "Sunny", icon: "☀️" }, { name: "Rainy", icon: "🌧️" }], correct: 1 }
        ]
      },
      {
        id: "u5_l2",
        title: "Listen and Dress",
        desc: "Listen to what clothes the character needs for today's weather.",
        exercises: [
          { audio: "It is sunny! Wear your red t-shirt.", prompt: "Choose: Red t-shirt", options: [{ name: "Red T-shirt", icon: "👕" }, { name: "Blue Jacket", icon: "🧥" }, { name: "Black Shoes", icon: "👟" }], correct: 0 },
          { audio: "It is cloudy and cool. Put on your blue jacket.", prompt: "Choose: Blue jacket", options: [{ name: "Sandals", icon: "🩴" }, { name: "Blue Jacket", icon: "🧥" }, { name: "Shorts", icon: "🩳" }], correct: 1 },
          { audio: "Put on your yellow sun hat.", prompt: "Choose: Yellow sun hat", options: [{ name: "Socks", icon: "🧦" }, { name: "Pants", icon: "👖" }, { name: "Yellow Hat", icon: "👒" }], correct: 2 },
          { audio: "Wear your green shorts to run.", prompt: "Choose: Green shorts", options: [{ name: "Green Shorts", icon: "🩳" }, { name: "Heavy Coat", icon: "🧥" }, { name: "Scarf", icon: "🧣" }], correct: 0 },
          { audio: "Put on comfortable sneakers shoes.", prompt: "Choose: Shoes", options: [{ name: "Hat", icon: "👒" }, { name: "Shoes", icon: "👟" }, { name: "Shirt", icon: "👕" }], correct: 1 }
        ]
      },
      {
        id: "u5_l3",
        title: "Find the Clothing Item",
        desc: "Listen to the clothing word and tap the item.",
        exercises: [
          { audio: "Dress", prompt: "Find: Dress", options: [{ name: "Dress", icon: "👗" }, { name: "Pants", icon: "👖" }, { name: "Hat", icon: "👒" }], correct: 0 },
          { audio: "Jacket", prompt: "Find: Jacket", options: [{ name: "Sandals", icon: "🩴" }, { name: "Jacket", icon: "🧥" }, { name: "Shorts", icon: "🩳" }], correct: 1 },
          { audio: "Sandals", prompt: "Find: Sandals", options: [{ name: "T-shirt", icon: "👕" }, { name: "Pants", icon: "👖" }, { name: "Sandals", icon: "🩴" }], correct: 2 },
          { audio: "Sweater", prompt: "Find: Sweater", options: [{ name: "Sweater", icon: "🧶🧥" }, { name: "Dress", icon: "👗" }, { name: "Shoes", icon: "👟" }], correct: 0 },
          { audio: "Pants", prompt: "Find: Pants", options: [{ name: "Hat", icon: "👒" }, { name: "Pants", icon: "👖" }, { name: "Shirt", icon: "👕" }], correct: 1 }
        ]
      },
      {
        id: "u5_l4",
        title: "Weather and Color Instructions",
        desc: "Listen to combined color and clothing directives.",
        exercises: [
          { audio: "Find the pink dress", prompt: "Listen: 'Pink dress'", options: [{ name: "Pink Dress", icon: _BK_ICONS.DRESS_PINK }, { name: "Blue Dress", icon: _BK_ICONS.DRESS_BLUE }, { name: "Yellow Shirt", icon: "👕" }], correct: 0 },
          { audio: "Select the brown shoes", prompt: "Listen: 'Brown shoes'", options: [{ name: "White Shoes", icon: "👟" }, { name: "Brown Shoes", icon: "👞" }, { name: "Red Sandals", icon: "🩴" }], correct: 1 },
          { audio: "Where are the blue pants?", prompt: "Listen: 'Blue pants'", options: [{ name: "Green Shorts", icon: "🩳" }, { name: "Yellow Hat", icon: "👒" }, { name: "Blue Pants", icon: "👖" }], correct: 2 },
          { audio: "Touch the orange sandals", prompt: "Listen: 'Orange sandals'", options: [{ name: "Orange Sandals", icon: "🩴" }, { name: "Black Shoes", icon: "👟" }, { name: "Purple Jacket", icon: "🧥" }], correct: 0 },
          { audio: "Pick up the yellow sun hat", prompt: "Listen: 'Yellow sun hat'", options: [{ name: "Red T-shirt", icon: "👕" }, { name: "Yellow Hat", icon: "👒" }, { name: "Blue Pants", icon: "👖" }], correct: 1 }
        ]
      },
      {
        id: "u5_l5",
        title: "Listen and Choose the Outfit",
        desc: "Select the full outfit matching the weather condition.",
        exercises: [
          { audio: "It is hot and sunny at the beach. Choose beach clothes.", prompt: "Beach outfit:", options: [{ name: "T-shirt & Shorts", icon: "👕🩳" }, { name: "Heavy Coat & Scarf", icon: "🧥🧣" }, { name: "Raincoat & Boots", icon: "🧥🥾" }], correct: 0 },
          { audio: "It is windy and cloudy in the park. Choose warm clothes.", prompt: "Cool day outfit:", options: [{ name: "Swimsuit", icon: "🩱" }, { name: "Jacket & Pants", icon: "🧥👖" }, { name: "Sandals only", icon: "🩴" }], correct: 1 },
          { audio: "Party time on a sunny day! Wear a pretty dress.", prompt: "Party sunny outfit:", options: [{ name: "Pajamas", icon: "🥱" }, { name: "Winter gloves", icon: "🧤" }, { name: "Sunny Dress", icon: "👗🌸" }], correct: 2 },
          { audio: "Sunny playground day: sneakers and a sun hat.", prompt: "Playground outfit:", options: [{ name: "Hat & Sneakers", icon: "👒👟" }, { name: "Heavy Boots", icon: "🥾" }, { name: "Winter Coat", icon: "🧥" }], correct: 0 },
          { audio: "Cloudy evening walk: cozy sweater and long pants.", prompt: "Evening walk outfit:", options: [{ name: "Shorts & Tank", icon: "🩳" }, { name: "Sweater & Pants", icon: "🧶👖" }, { name: "Flip flops", icon: "🩴" }], correct: 1 }
        ]
      },
      {
        id: "u5_l6",
        title: "Weather Report Listening",
        desc: "Listen to kid meteorologist Leo deliver the morning weather report.",
        exercises: [
          { audio: "Good morning! Today in Bilikids city it is sunny and warm. Don't forget your hat!", prompt: "What should you bring today?", options: ["Your hat", "An umbrella", "Snow boots"], correct: 0 },
          { audio: "In the afternoon, grey clouds will cover the sky. It will be cloudy and breezy.", prompt: "How will the afternoon be?", options: ["Very hot", "Cloudy and breezy", "Snow storm"], correct: 1 },
          { audio: "Tomorrow will be sunny again! Perfect for playing soccer in the park.", prompt: "What can you play tomorrow?", options: ["Stay inside", "Soccer in park", "Ice skating"], correct: 1 },
          { audio: "The temperature is 24 degrees: warm and pleasant.", prompt: "How does the weather feel?", options: ["Warm and pleasant", "Freezing cold", "Very rainy"], correct: 0 },
          { audio: "This was Leo with your daily weather report. Have a wonderful sunny day!", prompt: "Who gave the report?", options: ["Teacher Luna", "Leo", "Bili"], correct: 1 }
        ]
      }
    ],

    reading: [
      {
        id: "u5_r1",
        title: "Match Clothes and Words",
        desc: "Read the word and select the matching garment.",
        exercises: [
          { text: "HAT", prompt: "Read: HAT", options: [{ name: "Hat", icon: "👒" }, { name: "Pants", icon: "👖" }, { name: "Shoes", icon: "👟" }], correct: 0 },
          { text: "JACKET", prompt: "Read: JACKET", options: [{ name: "Dress", icon: "👗" }, { name: "Jacket", icon: "🧥" }, { name: "Shirt", icon: "👕" }], correct: 1 },
          { text: "SHORTS", prompt: "Read: SHORTS", options: [{ name: "Pants", icon: "👖" }, { name: "Sandals", icon: "🩴" }, { name: "Shorts", icon: "🩳" }], correct: 2 },
          { text: "DRESS", prompt: "Read: DRESS", options: [{ name: "Dress", icon: "👗" }, { name: "Hat", icon: "👒" }, { name: "Shoes", icon: "👟" }], correct: 0 },
          { text: "SHOES", prompt: "Read: SHOES", options: [{ name: "Shirt", icon: "👕" }, { name: "Shoes", icon: "👟" }, { name: "Jacket", icon: "🧥" }], correct: 1 }
        ]
      },
      {
        id: "u5_r2",
        title: "Read the Weather Cards",
        desc: "Read weather status cards.",
        exercises: [
          { text: "SUNNY", prompt: "Read: SUNNY", options: [{ name: "Sunny", icon: "☀️" }, { name: "Cloudy", icon: "☁️" }, { name: "Rainy", icon: "🌧️" }], correct: 0 },
          { text: "CLOUDY", prompt: "Read: CLOUDY", options: [{ name: "Sunny", icon: "☀️" }, { name: "Cloudy", icon: "☁️" }, { name: "Snowy", icon: "❄️" }], correct: 1 },
          { text: "HOT", prompt: "Read: HOT", options: [{ name: "Cold", icon: "🥶" }, { name: "Hot", icon: "🥵☀️" }, { name: "Rain", icon: "🌧️" }], correct: 1 },
          { text: "COOL", prompt: "Read: COOL", options: [{ name: "Cool breeze", icon: "🍃☁️" }, { name: "Fire", icon: "🔥" }, { name: "Sun", icon: "☀️" }], correct: 0 },
          { text: "WINDY", prompt: "Read: WINDY", options: [{ name: "Sunny", icon: "☀️" }, { name: "Windy", icon: "💨" }, { name: "Night", icon: "🌙" }], correct: 1 }
        ]
      },
      {
        id: "u5_r3",
        title: "Complete Clothing Sentences",
        desc: "Complete sentences about weather and clothing.",
        exercises: [
          { text: "On sunny days, I wear a ______ . (👒)", prompt: "Complete sentence:", options: ["hat", "coat", "boots"], correct: 0 },
          { text: "On cloudy days, I wear my warm ______ . (🧥)", prompt: "Complete sentence:", options: ["sandals", "jacket", "shorts"], correct: 1 },
          { text: "I run in the grass with my ______ . (👟)", prompt: "Complete sentence:", options: ["hat", "shoes", "jacket"], correct: 1 },
          { text: "Luna wears a pretty pink ______ . (👗)", prompt: "Complete sentence:", options: ["dress", "pants", "shoes"], correct: 0 },
          { text: "Leo wears blue ______ to play soccer. (🩳)", prompt: "Complete sentence:", options: ["sweater", "shorts", "jacket"], correct: 1 }
        ]
      },
      {
        id: "u5_r4",
        title: "Find the /h/ Sound",
        desc: "Review words with the /h/ sound (Hat, Hot, Hand, Head, Hug).",
        exercises: [
          { prompt: "Which clothing word starts with /h/?", options: [{ name: "Hat", icon: "👒" }, { name: "Pants", icon: "👖" }, { name: "Shirt", icon: "👕" }], correct: 0 },
          { prompt: "Which weather condition starts with /h/?", options: [{ name: "Cold", icon: "❄️" }, { name: "Hot", icon: "🥵" }, { name: "Cloudy", icon: "☁️" }], correct: 1 },
          { prompt: "Which body part starts with /h/?", options: [{ name: "Eye", icon: "👀" }, { name: "Nose", icon: "👃" }, { name: "Hand", icon: "🖐️" }], correct: 2 },
          { prompt: "Which top body part starts with /h/?", options: [{ name: "Head", icon: "👦" }, { name: "Foot", icon: "🦶" }, { name: "Arm", icon: "💪" }], correct: 0 },
          { prompt: "Which feeling word starts with /h/?", options: [{ name: "Sad", icon: "😢" }, { name: "Happy", icon: "😊" }, { name: "Angry", icon: "😠" }], correct: 1 }
        ]
      },
      {
        id: "u5_r5",
        title: "Read and Choose the Outfit",
        desc: "Read the scenario and select the right outfit.",
        exercises: [
          { text: "It is 30 degrees and sunny. Time for the beach!", prompt: "What should you wear?", options: ["Sandals and shorts", "Warm winter coat", "Rain boots"], correct: 0 },
          { text: "It is cloudy and chilly in the morning.", prompt: "What should you wear?", options: ["Swimsuit", "A warm sweater", "Flip flops"], correct: 1 },
          { text: "The sun is shining right into your eyes.", prompt: "What protects your eyes?", options: ["Heavy socks", "Gloves", "A sun hat"], correct: 2 },
          { text: "You are going for a run in the gym.", prompt: "What shoes should you wear?", options: ["Running shoes", "Sandals", "High heels"], correct: 0 },
          { text: "Luna is going to a birthday party.", prompt: "What looks festive?", options: ["Old pajamas", "A pretty dress", "Muddy boots"], correct: 1 }
        ]
      },
      {
        id: "u5_r6",
        title: "Weather Story Comprehension",
        desc: "Read the story of a changing day with Bili and friends.",
        exercises: [
          { text: "In the morning, the sun wakes up. It is warm and sunny! Bili puts on his red t-shirt.", prompt: "What is the weather in the morning?", options: ["Sunny", "Snowing", "Rainy"], correct: 0 },
          { text: "At lunchtime, big grey clouds appear. The wind blows gently.", prompt: "What appears at lunchtime?", options: ["Stars", "Grey clouds", "A rainbow"], correct: 1 },
          { text: "Luna puts on her purple jacket so she doesn't feel cold.", prompt: "Why does Luna put on her jacket?", options: ["To swim", "To stay warm", "To sleep"], correct: 1 },
          { text: "They sit under the big oak tree and eat sandwiches together.", prompt: "Where do they sit?", options: ["Under the big oak tree", "On top of the car", "In the pool"], correct: 0 },
          { text: "The sun peeks through the clouds again. A bright sunny smile for everyone!", prompt: "What comes back at the end?", options: ["Snow", "The sun", "Night"], correct: 1 }
        ]
      }
    ],

    writing: [
      {
        id: "u5_w1",
        title: "Build Clothing Words",
        desc: "Unscramble the letters to spell clothing items.",
        exercises: [
          { target: "HAT", letters: ["T", "H", "A"], icon: "👒", hint: "Protects your head" },
          { target: "SHIRT", letters: ["T", "S", "H", "I", "R"], icon: "👕", hint: "Wear on your torso" },
          { target: "PANTS", letters: ["S", "P", "A", "N", "T"], icon: "👖", hint: "Long leg wear" },
          { target: "DRESS", letters: ["S", "D", "R", "E", "S"], icon: "👗", hint: "One-piece clothing" },
          { target: "SHOES", letters: ["S", "S", "H", "O", "E"], icon: "👟", hint: "Wear on feet" }
        ]
      },
      {
        id: "u5_w2",
        title: "Complete Missing Letters",
        desc: "Fill in the missing letters in weather and clothing words.",
        exercises: [
          { target: "S_NNY", missing: "U", full: "SUNNY", options: ["U", "A", "O"], icon: "☀️" },
          { target: "CL_UDY", missing: "O", full: "CLOUDY", options: ["O", "E", "I"], icon: "☁️" },
          { target: "J_CKET", missing: "A", full: "JACKET", options: ["A", "E", "U"], icon: "🧥" },
          { target: "SH_RTS", missing: "O", full: "SHORTS", options: ["O", "A", "E"], icon: "🩳" },
          { target: "H_T", missing: "A", full: "HAT", options: ["A", "I", "U"], icon: "👒" }
        ]
      },
      {
        id: "u5_w3",
        title: "Label the Wardrobe",
        desc: "Label each clothing item in the closet.",
        exercises: [
          { prompt: "Label: 👒", answer: "hat", accepted: ["hat", "Hat", "sun hat"] },
          { prompt: "Label: 👕", answer: "shirt", accepted: ["shirt", "t-shirt", "Shirt"] },
          { prompt: "Label: 🧥", answer: "jacket", accepted: ["jacket", "Jacket", "coat"] },
          { prompt: "Label: 👗", answer: "dress", accepted: ["dress", "Dress"] },
          { prompt: "Label: 👟", answer: "shoes", accepted: ["shoes", "Shoes", "sneakers"] }
        ]
      },
      {
        id: "u5_w4",
        title: "Complete Weather Sentences",
        desc: "Finish sentences describing the sky.",
        exercises: [
          { sentence: "Today is bright and ______ . (☀️)", answer: "sunny", accepted: ["sunny", "Sunny"] },
          { sentence: "The sky has grey ______ . (☁️)", answer: "clouds", accepted: ["clouds", "cloudy"] },
          { sentence: "It is warm and ______ . (🥵)", answer: "hot", accepted: ["hot", "Hot"] },
          { sentence: "Put on your ______ hat. (👒)", answer: "sun", accepted: ["sun", "Sun", "yellow"] },
          { sentence: "Wear a jacket when it is ______ . (☁️)", answer: "cloudy", accepted: ["cloudy", "cool", "cold"] }
        ]
      },
      {
        id: "u5_w5",
        title: "Describe the Outfit",
        desc: "Write sentences describing colors of clothes.",
        exercises: [
          { sentence: "I am wearing a ______ t-shirt. (🔴)", answer: "red", accepted: ["red", "Red"] },
          { sentence: "Luna is wearing a ______ dress. (🟣)", answer: "pink", accepted: ["pink", "purple", "Pink"] },
          { sentence: "Leo has ______ shorts. (🟢)", answer: "green", accepted: ["green", "Green"] },
          { sentence: "My sneakers are ______ and clean. (⚪)", answer: "white", accepted: ["white", "White"] },
          { sentence: "The jacket is ______ . (🔵)", answer: "blue", accepted: ["blue", "Blue"] }
        ]
      },
      {
        id: "u5_w6",
        title: "My Favorite Clothes with Like",
        desc: "Write sentences expressing clothing preferences using 'I like'.",
        exercises: [
          { sentence: "I like my red ______ . (👕)", answer: "shirt", accepted: ["shirt", "t-shirt", "tshirt"] },
          { sentence: "I like wearing comfortable ______ . (👟)", answer: "shoes", accepted: ["shoes", "sneakers"] },
          { sentence: "I like sunny ______ . (☀️)", answer: "days", accepted: ["days", "weather"] },
          { sentence: "I do not like heavy ______ . (🧥)", answer: "jackets", accepted: ["jackets", "coats", "jacket"] },
          { sentence: "I like my yellow ______ . (👒)", answer: "hat", accepted: ["hat", "sun hat"] }
        ]
      }
    ],

    speaking: [
      {
        id: "u5_s1",
        title: "Name the Clothes",
        desc: "Pronounce clothing items clearly.",
        exercises: [
          { prompt: "Say: Hat", target: "hat", audio: "Hat", icon: "👒" },
          { prompt: "Say: Jacket", target: "jacket", audio: "Jacket", icon: "🧥" },
          { prompt: "Say: T-shirt", target: "t-shirt", audio: "Shirt", icon: "👕" },
          { prompt: "Say: Shorts", target: "shorts", audio: "Shorts", icon: "🩳" },
          { prompt: "Say: Shoes", target: "shoes", audio: "Shoes", icon: "👟" }
        ]
      },
      {
        id: "u5_s2",
        title: "What Is the Weather Like?",
        desc: "Speak the weather condition aloud.",
        exercises: [
          { prompt: "Say: 'It is sunny today!'", target: "it is sunny today", audio: "It is sunny today" },
          { prompt: "Say: 'It is cloudy today.'", target: "it is cloudy today", audio: "It is cloudy today" },
          { prompt: "Say: 'The sun is hot.'", target: "the sun is hot" },
          { prompt: "Say: 'The wind is cool.'", target: "the wind is cool" },
          { prompt: "Say: 'I see white clouds.'", target: "i see white clouds" }
        ]
      },
      {
        id: "u5_s3",
        title: "Describe My Outfit",
        desc: "Speak about what you are wearing.",
        exercises: [
          { prompt: "Say: 'I wear a red t-shirt.'", target: "i wear a red t-shirt" },
          { prompt: "Say: 'I wear blue shorts.'", target: "i wear blue shorts" },
          { prompt: "Say: 'I have clean shoes.'", target: "i have clean shoes" },
          { prompt: "Say: 'I wear my yellow hat.'", target: "i wear my yellow hat" },
          { prompt: "Say: 'I like my outfit.'", target: "i like my outfit" }
        ]
      },
      {
        id: "u5_s4",
        title: "What Do You Like?",
        desc: "Speak preferences with 'I like...'",
        exercises: [
          { prompt: "Say: 'I like sunny days.'", target: "i like sunny days" },
          { prompt: "Say: 'I like my sandals.'", target: "i like my sandals" },
          { prompt: "Say: 'I like to play outside.'", target: "i like to play outside" },
          { prompt: "Say: 'I like warm sunshine.'", target: "i like warm sunshine" },
          { prompt: "Say: 'I like my blue jacket.'", target: "i like my blue jacket" }
        ]
      },
      {
        id: "u5_s5",
        title: "Big or Small?",
        desc: "Compare clothes sizes aloud.",
        exercises: [
          { prompt: "Say: 'The jacket is big.'", target: "the jacket is big" },
          { prompt: "Say: 'The sandals are small.'", target: "the sandals are small" },
          { prompt: "Say: 'The hat is big.'", target: "the hat is big" },
          { prompt: "Say: 'The shorts are small.'", target: "the shorts are small" },
          { prompt: "Say: 'The shoes fit well.'", target: "the shoes fit well" }
        ]
      },
      {
        id: "u5_s6",
        title: "My Weather Report",
        desc: "Deliver a 3-sentence live weather forecast.",
        exercises: [
          { prompt: "Sentence 1: 'Good morning! Today is sunny.'", target: "good morning today is sunny" },
          { prompt: "Sentence 2: 'Wear your t-shirt and sunglasses.'", target: "wear your t-shirt and sunglasses" },
          { prompt: "Sentence 3: 'Have fun playing outside!'", target: "have fun playing outside" },
          { prompt: "Sentence 4: 'Later it will be cloudy.'", target: "later it will be cloudy" },
          { prompt: "Sentence 5: 'Thank you for listening!'", target: "thank you for listening" }
        ]
      }
    ],

    videos: [
      {
        title: "Sun, Rain, Wind and Weather Song | British Council Kids",
        videoId: "I8GeA3anPdo",
        embedUrl: "https://www.youtube-nocookie.com/embed/I8GeA3anPdo",
        thumbnail: "assets/toddlers_hd/toddlers_cont_colors.png",
        description: "Sing about sunny mornings, cloudy skies, and dressing up in bright clothes for all weather!",
        checkpoints: [
          { time: 14, question: "What shines in the sky on sunny days?", options: ["The golden sun", "The moon", "A flashlight"], correct: 0 },
          { time: 32, question: "What do you put on when it gets chilly?", options: ["A warm jacket", "Swimsuit", "Sunglasses"], correct: 0 }
        ]
      }
    ],

    game: {
      title: "The Magic Weather Dress-Up",
      story: "The weather machine is switching between sunny sunshine and cloudy breezes! Help dress up Bili, Leo and Luna for beach trips, park soccer, and cozy walks across 12 levels.",
      levels: [
        { level: 1, title: "Discover the Weather", mission: "Look out the window and detect whether it's Sunny or Cloudy.", targetCount: 1, itemType: "weather", icon: "☀️" },
        { level: 2, title: "Choose the Hat", mission: "Pick the sun hat to block the glare.", targetCount: 1, itemType: "hat", icon: "👒" },
        { level: 3, title: "Find the Jacket", mission: "Locate the warm blue jacket in the closet.", targetCount: 1, itemType: "jacket", icon: "🧥" },
        { level: 4, title: "Dress for Sunny Weather", mission: "Assemble the full sunny outfit: T-shirt, Shorts & Sandals.", targetCount: 3, itemType: "sunny_fit", icon: "🩳" },
        { level: 5, title: "Dress for Cloudy Weather", mission: "Assemble the cloudy outfit: Sweater, Pants & Shoes.", targetCount: 3, itemType: "cloudy_fit", icon: "👖" },
        { level: 6, title: "Match Clothes and Colors", mission: "Match 4 garments to red, blue, green, and yellow boxes.", targetCount: 4, itemType: "color_match", icon: "🎨" },
        { level: 7, title: "Find the Shorts and Pants", mission: "Separate short clothes from long clothes.", targetCount: 4, itemType: "sorting", icon: "🩳" },
        { level: 8, title: "Sort Big and Small", mission: "Sort big coats from little baby booties.", targetCount: 4, itemType: "sizes", icon: "📦" },
        { level: 9, title: "Choose Your Favorite Outfit", mission: "Design your custom playground look with 3 accessories.", targetCount: 3, itemType: "custom", icon: "✨" },
        { level: 10, title: "Find the /h/ Sound", mission: "Collect /h/ items: Hat, Hot sun, Hand, Hood.", targetCount: 4, itemType: "phonics", icon: "👒" },
        { level: 11, title: "Complete the Weather Report", mission: "Read the weather icons and complete the forecast text.", targetCount: 3, itemType: "report", icon: "🎙️" },
        { level: 12, title: "The Perfect Outfit Challenge", mission: "Lead the fashion runway showcase in the sunny park!", targetCount: 1, itemType: "runway", icon: "🌟" }
      ]
    },

    finalChallenge: {
      title: "Weather & Wardrobe Master Quest",
      story: "10 interactive steps combining weather, clothing, and speaking mastery!",
      steps: [
        { step: 1, type: "listening", prompt: "Listen: 'It is sunny!'", options: ["☀️", "☁️", "🌧️"], correct: 0 },
        { step: 2, type: "reading", prompt: "Read: 'JACKET'", options: ["🧥", "👒", "🩴"], correct: 0 },
        { step: 3, type: "writing", prompt: "Spell: H _ T", answer: "A" },
        { step: 4, type: "speaking", prompt: "Say aloud: 'It is sunny today'", target: "it is sunny today" },
        { step: 5, type: "phonics", prompt: "Which word starts with /h/?", options: ["Hat", "Shoe", "Pants"], correct: 0 },
        { step: 6, type: "math_vocab", prompt: "Count sandals: 🩴 🩴", options: ["1", "2", "3"], correct: 1 },
        { step: 7, type: "writing", prompt: "Unscramble: D R E S S", answer: "DRESS" },
        { step: 8, type: "reading", prompt: "Choose: 'I wear a sun ______ (👒)'", options: ["hat", "bed", "pencil"], correct: 0 },
        { step: 9, type: "listening", prompt: "Listen: 'Put on your shoes!'", options: ["👟", "😴", "🥪"], correct: 0 },
        { step: 10, type: "speaking", prompt: "Say: 'I love sunny days!'", target: "i love sunny days" }
      ]
    }
  }
];
