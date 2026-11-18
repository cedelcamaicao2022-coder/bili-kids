/**
 * BILIKIDS KIDS CLUB - UNIT 2 ENGINE: IN CLASS
 * Age: 7-10 years (Cambridge Starters / Movers A1)
 * Topics: School & Classroom Objects, Articles a/an, Demonstratives This/These, Prepositions, Possessive 's
 */

// ============================================================================
// AUDIO SFX SYNTHESIZER (Web Audio API - Zero External Dependencies)
// ============================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playSuccess() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
    });
  }

  playError() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(160, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  playFanfare() {
    this.init();
    const chord = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    chord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.09);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.09 + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.09);
      osc.stop(this.ctx.currentTime + idx * 0.09 + 0.5);
    });
  }
}

const sfx = new SoundEffects();

// ============================================================================
// NATIVE SPEECH SYNTHESIS ENGINE CON FALLBACK SEGURO
// ============================================================================
function speakEnglish(text, voiceType = 'kid', callback) {
  if (typeof playStudioOrSynthAudio === "function") {
    return playStudioOrSynthAudio(arguments[0], arguments[1], arguments[2]);
  }
  let called = false;
  const finish = () => {
    if (!called) {
      called = true;
      if (callback) callback();
    }
  };

  if (!('speechSynthesis' in window)) {
    finish();
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.88;
    utterance.pitch = voiceType === 'maya' ? 1.25 : voiceType === 'teacher' ? 0.95 : voiceType === 'alex' ? 1.15 : 1.05;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Karen'))) 
                      || voices.find(v => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    const safeTimer = setTimeout(finish, Math.max(1400, text.length * 75));

    utterance.onend = () => {
      clearTimeout(safeTimer);
      finish();
    };

    utterance.onerror = () => {
      clearTimeout(safeTimer);
      finish();
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn("TTS Error:", err);
    finish();
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// ============================================================================
// APP STATE & STARS
// ============================================================================
const AppState = {
  stars: parseInt(localStorage.getItem('bilikids_stars') || '120', 10),
  addStars(amount) {
    this.stars += amount;
    localStorage.setItem('bilikids_stars', this.stars);
    const starEl = document.getElementById('unitStarsCount');
    if (starEl) starEl.textContent = `${this.stars} pts`;
  }
};

// ============================================================================
// TABS NAVIGATION
// ============================================================================
function switchTab(tabKey, btn) {
  sfx.playPop();
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.activity-view').forEach(v => v.classList.remove('active-view'));

  if (btn) btn.classList.add('active');
  const targetView = document.getElementById(`view-${tabKey}`);
  if (targetView) targetView.classList.add('active-view');
}

// ============================================================================
// ACTIVITY 1: INTERACTIVE DIALOGUE (6 SCHOOL SCENARIOS)
// ============================================================================
const RealWorldScenariosUnit2 = {
  // 1. ASKING FOR SCHOOL SUPPLIES (12 turns)
  supplies: {
    title: "Borrowing School Supplies",
    badge: "Classroom • A1",
    subtitle: "Borrowing school supplies, asking who owns them, and finding where they are.",
    steps: [
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Hi Maya! I forgot my pencil case. May I borrow a blue pen?",
        es: "",
        question: "Maya has two blue pens. What should she reply politely?",
        choices: [
          { text: "Sure, Alex! Here is a blue pen for you.", es: "", correct: true },
          { text: "I am eating a pizza.", es: "", correct: false },
          { text: "No, today is Saturday.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Thank you so much! And do you have an eraser? I made a mistake.",
        es: "",
        question: "Maya lends him her white eraser. What does she reply?",
        choices: [
          { text: "Yes, here is an eraser. You can keep it.", es: "", correct: true },
          { text: "Here is a umbrella.", es: "", correct: false },
          { text: "My shoes are under the bed.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Where is your ruler? I need to draw a straight line.",
        es: "",
        question: "Maya's ruler is on her desk. How does she point it out?",
        choices: [
          { text: "It is on my desk, next to the notebook.", es: "", correct: true },
          { text: "The ruler is swimming in the pool.", es: "", correct: false },
          { text: "I have ten cats.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Whose backpack is this under the chair? Is it yours?",
        es: "",
        question: "Maya says it is David's backpack. What does she say?",
        choices: [
          { text: "No, it is David's backpack. His backpack is green.", es: "", correct: true },
          { text: "Yes, they are chairs.", es: "", correct: false },
          { text: "I am drinking milk.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "And what are these on the shelf? Are these colored markers?",
        es: "",
        question: "Maya confirms using 'These'. What does she say?",
        choices: [
          { text: "Yes! These are the teacher's markers for art class.", es: "", correct: true },
          { text: "This is a car.", es: "", correct: false },
          { text: "No, they are sleeping.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Great! The teacher is coming. Let's open our English books!",
        es: "",
        question: "How does Maya reply ready to begin the lesson?",
        choices: [
          { text: "Yes! My book is on page twelve. Let's study!", es: "", correct: true },
          { text: "Goodbye, I am going home.", es: "", correct: false },
          { text: "One plus one equals five.", es: "", correct: false }
        ]
      }
    ]
  },

  // 2. EN EL LABORATORIO DE CIENCIAS (12 intercambios)
  lab: {
    title: "In the Science Lab",
    badge: "Science Lab • A1-A2",
    subtitle: "Scientific instruments, microscopes, and prepositions of place.",
    steps: [
      {
        speaker: 'teacher', name: 'Mr. Clark (Teacher)', avatar: '🔬',
        text: "Welcome to the science lab, class! Put on your safety glasses.",
        es: "",
        question: "How does Maya reply respectfully to the teacher?",
        choices: [
          { text: "Yes, Mr. Clark! We are wearing our safety glasses.", es: "", correct: true },
          { text: "I want chocolate cake.", es: "", correct: false },
          { text: "The moon is yellow.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Mr. Clark (Teacher)', avatar: '🔬',
        text: "Alex, what is that machine on the large table?",
        es: "",
        question: "Alex identifies the microscope using 'That is a...'. What does he say?",
        choices: [
          { text: "That is a microscope! We use it to see tiny cells.", es: "", correct: true },
          { text: "That are books.", es: "", correct: false },
          { text: "It is a telephone.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Maya, where are the glass test tubes for our experiment?",
        es: "",
        question: "Maya says they are in the box, behind the microscope. What does she say?",
        choices: [
          { text: "They are in the blue box, behind the microscope.", es: "", correct: true },
          { text: "The dog is in the kitchen.", es: "", correct: false },
          { text: "They are dancing.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Mr. Clark (Teacher)', avatar: '🔬',
        text: "Very good! And please be careful: is there water on the floor?",
        es: "",
        question: "Maya checks under the table and says the floor is dry. What does she say?",
        choices: [
          { text: "No, Mr. Clark. The floor under the table is clean and dry.", es: "", correct: true },
          { text: "Yes, I am ten years old.", es: "", correct: false },
          { text: "My pencil is broken.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Look! This plant leaf has tiny green dots under the lens!",
        es: "",
        question: "How does Maya react amazed by what she sees?",
        choices: [
          { text: "Amazing! These are plant cells. Science is so fun!", es: "", correct: true },
          { text: "I don't like homework.", es: "", correct: false },
          { text: "Today is Monday.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Mr. Clark (Teacher)', avatar: '🔬',
        text: "Great teamwork, Maya and Alex! Put the slides back in the cabinet.",
        es: "",
        question: "What do they both reply when finishing the lab?",
        choices: [
          { text: "Yes, sir! We are putting everything in its place. Thank you!", es: "", correct: true },
          { text: "Goodbye yesterday.", es: "", correct: false },
          { text: "No, I am asleep.", es: "", correct: false }
        ]
      }
    ]
  },

  // 3. EN LA BIBLIOTECA ESCOLAR (12 intercambios)
  library: {
    title: "At the School Library",
    badge: "Library • A1",
    subtitle: "Finding dictionaries, encyclopedias, and respecting quiet study time.",
    steps: [
      {
        speaker: 'teacher', name: 'Librarian', avatar: '📖',
        text: "Shh... Welcome to the library. How can I help you two today?",
        es: "",
        question: "Maya is looking for an English dictionary. How does she ask quietly?",
        choices: [
          { text: "Hello! We are looking for an English dictionary, please.", es: "", correct: true },
          { text: "We want to play football loudly.", es: "", correct: false },
          { text: "I have a bicycle.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Librarian', avatar: '📖',
        text: "Of course! The dictionaries are on the shelf next to the big window.",
        es: "",
        question: "What does Alex say to thank the librarian?",
        choices: [
          { text: "Thank you! We will walk quietly to that shelf.", es: "", correct: true },
          { text: "I like running fast in the hall.", es: "", correct: false },
          { text: "My dog is white.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Maya, look at this huge book! Is this an encyclopedia of animals?",
        es: "",
        question: "Maya looks at the cover and confirms using 'Yes, it is.' What does she say?",
        choices: [
          { text: "Yes, it is! It has colorful photos of lions and eagles.", es: "", correct: true },
          { text: "No, they are bananas.", es: "", correct: false },
          { text: "It is nine o'clock at night.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Where can we sit down to read? Those chairs look comfortable.",
        es: "",
        question: "Maya suggests sitting at the round table near the lamp. What does she say?",
        choices: [
          { text: "Let's sit at the round table under the warm lamp.", es: "", correct: true },
          { text: "Let's sit on the roof.", es: "", correct: false },
          { text: "I am twelve years old.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Librarian', avatar: '📖',
        text: "Do you have your student library cards to borrow these books?",
        es: "",
        question: "Maya shows both student library cards. What does she say?",
        choices: [
          { text: "Yes, here are our two library cards, ma'am.", es: "", correct: true },
          { text: "No, I only have five apples.", es: "", correct: false },
          { text: "Tomorrow is Sunday.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Librarian', avatar: '📖',
        text: "Perfect! You can keep the books for two weeks. Enjoy reading!",
        es: "",
        question: "How do Alex and Maya say goodbye politely?",
        choices: [
          { text: "Thank you very much! Have a wonderful day, goodbye!", es: "", correct: true },
          { text: "I don't like reading at all.", es: "", correct: false },
          { text: "Zero plus zero is ten.", es: "", correct: false }
        ]
      }
    ]
  },

  // 4. EN LA CLASE DE ARTE (12 intercambios)
  art: {
    title: "In the Art Classroom",
    badge: "Art Class • A1-A2",
    subtitle: "Paintbrushes, scissors, cardboard, and organizing creative materials.",
    steps: [
      {
        speaker: 'teacher', name: 'Art Teacher', avatar: '🎨',
        text: "Good afternoon, young artists! Today we are painting landscapes.",
        es: "",
        question: "How does Maya express her excitement for painting?",
        choices: [
          { text: "Good afternoon! Painting landscapes is my favorite activity.", es: "", correct: true },
          { text: "I forgot my shoes today.", es: "", correct: false },
          { text: "The car is blue.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Maya, are these your paintbrushes on the tray?",
        es: "",
        question: "Maya explains that the thin ones are hers and the thick ones are Alex's. What does she say?",
        choices: [
          { text: "The thin ones are mine, and the thick brushes are yours!", es: "", correct: true },
          { text: "These are tomatoes.", es: "", correct: false },
          { text: "I am sleeping in class.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Art Teacher', avatar: '🎨',
        text: "Who has the scissors? We need to cut blue paper for the sky.",
        es: "",
        question: "Alex says the scissors are on the teacher's desk. What does he say?",
        choices: [
          { text: "The scissors are on your desk, teacher, next to the glue.", es: "", correct: true },
          { text: "Scissors are eating grass.", es: "", correct: false },
          { text: "I have four brothers.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Look at my mountain drawing! Is this green paint too dark?",
        es: "",
        question: "Maya suggests mixing it with a little yellow. What does she say?",
        choices: [
          { text: "It is nice, but add a little yellow to make it brighter!", es: "", correct: true },
          { text: "Green is a number.", es: "", correct: false },
          { text: "I need to take a nap.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Art Teacher', avatar: '🎨',
        text: "Ten minutes left! Please wash your brushes in the sink.",
        es: "",
        question: "How does Maya confirm they will clean their table?",
        choices: [
          { text: "Yes, teacher! We are cleaning our brushes and palettes.", es: "", correct: true },
          { text: "No, we are going to the moon.", es: "", correct: false },
          { text: "Five times five is twenty.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Our paintings are drying on the rack. They look wonderful!",
        es: "",
        question: "What does Maya say happy with their artwork?",
        choices: [
          { text: "Yes! We are proud of our artwork today.", es: "", correct: true },
          { text: "I don't like colors.", es: "", correct: false },
          { text: "The door is purple.", es: "", correct: false }
        ]
      }
    ]
  },

  // 5. CAJA DE OBJETOS PERDIDOS (12 intercambios)
  lost: {
    title: "The Lost and Found Box",
    badge: "Lost & Found • A1-A2",
    subtitle: "Identifying belongings with possessive 's and demonstratives.",
    steps: [
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Maya, someone left a yellow jacket on the bench. Whose jacket is it?",
        es: "",
        question: "Maya recognizes Emma's jacket by the name tag. What does she say?",
        choices: [
          { text: "Look at the tag: it is Emma's jacket! She was looking for it.", es: "", correct: true },
          { text: "It is a sandwich.", es: "", correct: false },
          { text: "I am twelve years old.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "And what about this blue notebook? Is it the teacher's notebook?",
        es: "",
        question: "Maya reads Lucas's name on the first page. What does she say?",
        choices: [
          { text: "No, it is Lucas's English notebook. His name is on the cover.", es: "", correct: true },
          { text: "The notebook is flying in the sky.", es: "", correct: false },
          { text: "I have eight dogs.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "There are two pencil sharpeners in the box. Are these yours?",
        es: "",
        question: "Maya says the red sharpener is hers, but the blue one is not. What does she say?",
        choices: [
          { text: "The red sharpener is mine, but the blue one is not mine.", es: "", correct: true },
          { text: "They are elephants.", es: "", correct: false },
          { text: "I don't go to school.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'School Secretary', avatar: '📋',
        text: "Hello kids! Are you helping return lost items to their owners?",
        es: "",
        question: "Alex confirms kindly and helpfully. What does he say?",
        choices: [
          { text: "Yes! We are returning Emma's jacket and Lucas's notebook.", es: "", correct: true },
          { text: "No, we are eating lunch right now.", es: "", correct: false },
          { text: "My shoes are wet.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'School Secretary', avatar: '📋',
        text: "That is so kind of you! You are very responsible students.",
        es: "",
        question: "How does Maya reply politely to the staff?",
        choices: [
          { text: "Thank you! We always like to help our classmates.", es: "", correct: true },
          { text: "I don't know who I am.", es: "", correct: false },
          { text: "Ten plus five is fifty.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "All items are back with their owners now. Mission accomplished!",
        es: "",
        question: "How does Maya celebrate with her classmate?",
        choices: [
          { text: "High five, Alex! Teamwork makes everything easier.", es: "", correct: true },
          { text: "Goodbye yesterday night.", es: "", correct: false },
          { text: "I lost my hat.", es: "", correct: false }
        ]
      }
    ]
  },

  // 6. IN THE COMPUTER LAB & TABLETS (12 turns)
  tech: {
    title: "In the Computer & Tablet Lab",
    badge: "Tech Lab • A1-A2",
    subtitle: "Digital devices, headphones, screens, and computer room instructions.",
    steps: [
      {
        speaker: 'teacher', name: 'Tech Teacher', avatar: '💻',
        text: "Good morning! Please sit at your assigned computer desk.",
        es: "",
        question: "What does Alex reply as he takes his seat?",
        choices: [
          { text: "Good morning, teacher! We are at desk number four.", es: "", correct: true },
          { text: "I am at the supermarket.", es: "", correct: false },
          { text: "My cat can fly.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Maya, is this a tablet or a touchscreen monitor?",
        es: "",
        question: "Maya checks the device and explains what it is. What does she say?",
        choices: [
          { text: "This is a touchscreen monitor connected to the keyboard.", es: "", correct: true },
          { text: "This is an apple pie.", es: "", correct: false },
          { text: "They are pencils.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Where are the headphones? We need them for English listening.",
        es: "",
        question: "Maya says the headphones are next to the screen. What does she say?",
        choices: [
          { text: "They are hanging next to the screen on the right side.", es: "", correct: true },
          { text: "The headphones are in the refrigerator.", es: "", correct: false },
          { text: "I have two dogs.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Tech Teacher', avatar: '💻',
        text: "Open the Bilikids Learning App and enter your student username.",
        es: "",
        question: "Maya helps Alex type his name in the app. What does she say?",
        choices: [
          { text: "I am typing my username now: Maya_Grade4. Done!", es: "", correct: true },
          { text: "I am singing a song loudly.", es: "", correct: false },
          { text: "My pencil is under the bed.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "The audio sounds crystal clear through these headphones!",
        es: "",
        question: "What does Maya say when listening to the English audio?",
        choices: [
          { text: "Yes! The pronunciation exercises are very clear and helpful.", es: "", correct: true },
          { text: "I don't like computers at all.", es: "", correct: false },
          { text: "Seven plus seven is forty.", es: "", correct: false }
        ]
      },
      {
        speaker: 'teacher', name: 'Tech Teacher', avatar: '💻',
        text: "Time is up! Log out of your session and leave your desks neat.",
        es: "",
        question: "How do the students say goodbye to the teacher?",
        choices: [
          { text: "We logged out and pushed our chairs in. Thank you, teacher!", es: "", correct: true },
          { text: "Goodbye last month.", es: "", correct: false },
          { text: "I am sleeping under the computer.", es: "", correct: false }
        ]
      }
    ]
  }
};

let currentScenarioKey = 'supplies';
let currentStoryStep = 0;

function switchScenario(scenarioKey, btnEl) {
  sfx.playPop();
  currentScenarioKey = scenarioKey;
  currentStoryStep = 0;

  document.querySelectorAll('.scenario-chip-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const sc = RealWorldScenariosUnit2[scenarioKey];
  document.getElementById('storySceneHeading').textContent = sc.title;
  document.getElementById('storySceneSubtitle').textContent = sc.subtitle;
  document.getElementById('storyLevelBadge').textContent = sc.badge;

  const chatFlow = document.getElementById('storyChatFlow');
  if (chatFlow) chatFlow.innerHTML = '';

  renderStoryCurrentStep();
}

function initInteractiveStory() {
  currentScenarioKey = 'supplies';
  currentStoryStep = 0;
  
  const chatFlow = document.getElementById('storyChatFlow');
  if (chatFlow) chatFlow.innerHTML = '';
  
  renderStoryCurrentStep();
}

function renderStoryCurrentStep() {
  const sc = RealWorldScenariosUnit2[currentScenarioKey];
  const step = sc.steps[currentStoryStep];
  const totalSteps = sc.steps.length;

  const progressBar = document.getElementById('storyProgressBar');
  const stepLabel = document.getElementById('storyStepLabel');
  const decisionContainer = document.getElementById('storyDecisionContainer');

  if (stepLabel) stepLabel.textContent = `Dialogue Turn ${currentStoryStep + 1} of ${totalSteps}`;
  if (progressBar) progressBar.style.width = `${((currentStoryStep + 1) / totalSteps) * 100}%`;

  appendStoryChatMessage(step.speaker, step.name, step.avatar, step.text, step.es);
  speakEnglish(step.text, step.speaker);

  // Shuffle 3 options randomly
  const shuffledChoices = [...step.choices].sort(() => Math.random() - 0.5);

  if (decisionContainer) {
    decisionContainer.innerHTML = `
      <div class="story-prompt-card">
        <span class="prompt-badge">🤔 Your turn • Choose the best reply</span>
        <h3 class="prompt-question">${step.question}</h3>
        <div class="prompt-options-list">
          ${shuffledChoices.map((choice) => `
            <button class="prompt-option-btn" onclick="selectShuffledChoice(${choice.correct}, this, '${choice.text.replace(/'/g, "\\'")}', '${choice.es.replace(/'/g, "\\'")}')">
              <div>
                <div>${choice.text}</div>
                
              </div>
              <span style="font-size:1.1rem; opacity:0.6;">👉</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function appendStoryChatMessage(charKey, charName, charAvatar, textEn, textEs) {
  const chatFlow = document.getElementById('storyChatFlow');
  if (!chatFlow) return;

  const msgId = `msg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const isMaya = charKey === 'maya';
  const isTeacher = charKey === 'teacher';

  const row = document.createElement('div');
  row.className = `chat-bubble-row ${isMaya ? 'from-maya' : isTeacher ? 'from-teacher' : 'from-alex'}`;
  row.id = msgId;

  row.innerHTML = `
    <div class="character-avatar-bubble ${isMaya ? 'maya' : isTeacher ? 'teacher' : ''}" id="avatar-${msgId}">
      ${charAvatar}
    </div>
    <div class="chat-message-bubble">
      <div class="chat-sender-name">
        <span>${charName}</span>
        <button class="chat-listen-btn" onclick="replayChatAudio('${textEn.replace(/'/g, "\\'")}', '${charKey}', 'avatar-${msgId}')">
          🔊 Listen
        </button>
      </div>
      <div class="chat-text-en">"${textEn}"</div>
      
    </div>
  `;

  chatFlow.appendChild(row);
  chatFlow.scrollTop = chatFlow.scrollHeight;
}

function replayChatAudio(text, charKey, avatarId) {
  sfx.playPop();
  const avatar = document.getElementById(avatarId);
  if (avatar) avatar.classList.add('talking');
  speakEnglish(text, charKey, () => {
    if (avatar) avatar.classList.remove('talking');
  });
}

function selectShuffledChoice(isCorrect, btnEl, textEn, textEs) {
  if (isCorrect) {
    sfx.playSuccess();
    btnEl.classList.add('correct-choice');

    document.querySelectorAll('.prompt-option-btn').forEach(b => b.style.pointerEvents = 'none');

    setTimeout(() => {
      appendStoryChatMessage('maya', 'Maya', '👧', textEn, textEs);
      
      speakEnglish(textEn, 'maya', () => {
        advanceStoryStep();
      });
      AppState.addStars(10);
    }, 300);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong-choice');
    setTimeout(() => btnEl.classList.remove('wrong-choice'), 600);
  }
}

function advanceStoryStep() {
  const sc = RealWorldScenariosUnit2[currentScenarioKey];
  if (currentStoryStep < sc.steps.length - 1) {
    currentStoryStep++;
    setTimeout(() => {
      renderStoryCurrentStep();
    }, 400);
  } else {
    finishStoryCelebration();
  }
}

function finishStoryCelebration() {
  sfx.playFanfare();
  AppState.addStars(25);

  const decisionContainer = document.getElementById('storyDecisionContainer');
  const progressBar = document.getElementById('storyProgressBar');
  if (progressBar) progressBar.style.width = '100%';

  const sc = RealWorldScenariosUnit2[currentScenarioKey];
  const scenarioKeys = ['supplies', 'lab', 'library', 'art', 'lost', 'tech'];
  const currentIndex = scenarioKeys.indexOf(currentScenarioKey);
  const isLast = currentIndex === scenarioKeys.length - 1;
  const nextIndex = isLast ? 0 : currentIndex + 1;
  const nextKey = scenarioKeys[nextIndex];
  const nextSc = RealWorldScenariosUnit2[nextKey];

  const scenarioIcons = {
    supplies: '',
    lab: '🔬',
    library: '📖',
    art: '🎨',
    lost: '📋',
    tech: '💻'
  };

  if (decisionContainer) {
    decisionContainer.innerHTML = `
      <div class="story-completed-box">
        <div class="story-complete-icon">🌟</div>
        <h3 class="story-complete-title">Dialogue "${sc.title}" Completed!</h3>
        <p class="story-complete-desc">
          Excellent fluency and classroom vocabulary! You mastered all turns in this school scenario.
        </p>
        <div style="display:inline-flex; align-items:center; gap:8px; background:#fef3c7; color:#92400e; font-weight:700; padding:8px 18px; border-radius:999px; margin-bottom:18px;">
          <span>⭐</span>
          <span>+35 Stars Earned</span>
        </div>
        <div class="story-actions-row">
          <button class="btn-builder btn-builder-reset" onclick="initInteractiveStory()">
            <span>🔄</span>
            <span>Replay this Scenario</span>
          </button>
          <button class="btn-builder btn-builder-check" onclick="switchScenario('${nextKey}', document.querySelectorAll('.scenario-chip-btn')[${nextIndex}])">
            <span>${scenarioIcons[nextKey] || '➔'}</span>
            <span>${isLast ? 'Restart Cycle: School Supplies ➔' : `Next: ${nextSc.title} ➔`}</span>
          </button>
        </div>
      </div>
    `;
  }
}

// ============================================================================
// ACTIVITY 2: WORD EXPLORER (24 KEY WORDS WITH PHONICS & AUDIO)
// ============================================================================
const vocabularyDataUnit2 = [
  // School Supplies
  { cat: 'supplies', en: 'Backpack', es: '', ipa: '/ˈbækˌpæk/', icon: '🎒', grammar: 'Noun' },
  { cat: 'supplies', en: 'Pencil case', es: '', ipa: '/ˈpen.səl keɪs/', icon: '👝', grammar: 'Noun' },
  { cat: 'supplies', en: 'Eraser', es: '', ipa: '/ɪˈreɪ.sər/', icon: (window.BILIKIDS_ICONS ? window.BILIKIDS_ICONS.ERASER : '🧼'), grammar: 'takes "an"' },
  { cat: 'supplies', en: 'Ruler', es: '', ipa: '/ˈruː.lər/', icon: '📏', grammar: 'takes "a"' },
  { cat: 'supplies', en: 'Sharpener', es: '', ipa: '/ˈʃɑːr.pən.ər/', icon: (window.BILIKIDS_ICONS ? window.BILIKIDS_ICONS.SHARPENER : '✏️'), grammar: 'Noun' },
  { cat: 'supplies', en: 'Scissors', es: '', ipa: '/ˈsɪz.ərz/', icon: '✂️', grammar: 'Plural' },
  { cat: 'supplies', en: 'Notebook', es: '', ipa: '/ˈnoʊt.bʊk/', icon: '📓', grammar: 'takes "a"' },
  { cat: 'supplies', en: 'Glue', es: '', ipa: '/ɡluː/', icon: '🧴', grammar: 'Uncountable' },

  // Mobiliario & Aula
  { cat: 'furniture', en: 'Desk', es: '', ipa: '/desk/', icon: (window.BILIKIDS_ICONS ? window.BILIKIDS_ICONS.DESK : '🪑'), grammar: 'Furniture' },
  { cat: 'furniture', en: 'Chair', es: '', ipa: '/tʃer/', icon: '🪑', grammar: 'Furniture' },
  { cat: 'furniture', en: 'Whiteboard', es: '', ipa: '/ˈwaɪt.bɔːrd/', icon: '📋', grammar: 'Classroom' },
  { cat: 'furniture', en: 'Clock', es: '', ipa: '/klɑːk/', icon: '⏰', grammar: 'takes "a"' },
  { cat: 'furniture', en: 'Bookshelf', es: '', ipa: '/ˈbʊk.ʃelf/', icon: '📚', grammar: 'Furniture' },
  { cat: 'furniture', en: 'Tablet', es: '', ipa: '/ˈtæb.lət/', icon: '📱', grammar: 'Technology' },

  // Preposiciones de Lugar
  { cat: 'prepositions', en: 'In', es: '', ipa: '/ɪn/', icon: '📥', grammar: 'Preposition' },
  { cat: 'prepositions', en: 'On', es: '', ipa: '/ɑːn/', icon: '🔝', grammar: 'Preposition' },
  { cat: 'prepositions', en: 'Under', es: '', ipa: '/ˈʌn.dər/', icon: '🔽', grammar: 'Preposition' },
  { cat: 'prepositions', en: 'Next to', es: '', ipa: '/nekst tuː/', icon: '↔️', grammar: 'Preposition' },
  { cat: 'prepositions', en: 'Behind', es: '', ipa: '/bɪˈhaɪnd/', icon: '🔙', grammar: 'Preposition' },
  { cat: 'prepositions', en: 'In front of', es: '', ipa: '/ɪn frʌnt ʌv/', icon: '👀', grammar: 'Preposition' },

  // Articles & Demonstratives
  { cat: 'grammar', en: 'This', es: '', ipa: '/ðɪs/', icon: '👉', grammar: 'Singular' },
  { cat: 'grammar', en: 'These', es: '', ipa: '/ðiːz/', icon: '👐', grammar: 'Plural' },
  { cat: 'grammar', en: 'That', es: '', ipa: '/ðæt/', icon: '👉', grammar: 'Singular' },
  { cat: 'grammar', en: 'Those', es: '', ipa: '/ðoʊz/', icon: '🙌', grammar: 'Plural' }
];

function renderWordCards(filterCat = 'all') {
  const container = document.getElementById('wordsGridContainer');
  if (!container) return;

  const filtered = filterCat === 'all' 
    ? vocabularyDataUnit2 
    : vocabularyDataUnit2.filter(item => item.cat === filterCat);

  container.innerHTML = filtered.map(item => `
    <div class="word-card" onclick="speakWordCard('${item.en}', this)">
      <div class="word-icon">${item.icon}</div>
      <div class="word-english">${item.en}</div>
      <div class="word-ipa">${item.ipa}</div>
      
      <span class="word-grammar-badge">${item.grammar}</span>
      <span class="word-audio-btn">🔊 Listen</span>
    </div>
  `).join('');
  renderWordRecallQuiz(filtered);
}

function renderWordRecallQuiz(items) {
  const container = document.getElementById('wordsGridContainer');
  if (!container) return;
  container.hidden = false;
  let quiz = document.getElementById('wordRecallQuiz');
  if (!quiz) {
    quiz = document.createElement('section');
    quiz.id = 'wordRecallQuiz';
    quiz.style.cssText = 'margin:0 0 20px;padding:18px;border:2px solid #bae6fd;border-radius:16px;background:#f0f9ff;';
    container.before(quiz);
  }
  quiz.innerHTML = `<h3 style="margin:0 0 6px;color:#075985;">🧠 Quick word recall</h3><p>Review the cards, then hide them and test what you remember.</p><button type="button" class="category-chip recall-start">Start recall check</button>`;
  const questions = [...items].sort(() => Math.random() - 0.5).slice(0, Math.min(5, items.length));
  let index = 0;
  let score = 0;
  const render = () => {
    if (index >= questions.length) {
      quiz.innerHTML = `<h3>🧠 Vocabulary recall complete</h3><p role="status">You recalled ${score} of ${questions.length} words.</p><button type="button" class="category-chip recall-review">Review word cards</button>`;
      quiz.querySelector('.recall-review').addEventListener('click', () => { container.hidden = false; index = 0; score = 0; renderWordRecallQuiz(items); });
      return;
    }
    const target = questions[index];
    const options = [target, ...items.filter(item => item !== target).sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
    quiz.innerHTML = `<h3 style="margin:0 0 6px;color:#075985;">🧠 Quick word recall</h3><p style="margin:0 0 12px;">What is the correct English word for <strong style="font-size:1.4rem;">${target.icon}</strong>? Question ${index + 1} of ${questions.length}.</p><div class="recall-options" style="display:flex;flex-wrap:wrap;gap:8px;"></div><p class="recall-feedback" role="status" aria-live="polite"></p><p>Correct: ${score}/${questions.length}</p>`;
    const optionsEl = quiz.querySelector('.recall-options');
    options.forEach(option => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'category-chip';
      button.innerHTML = `${option.icon} <span>${option.en}</span>`;
      button.addEventListener('click', () => {
        const feedback = quiz.querySelector('.recall-feedback');
        if (option === target) {
          score++;
          feedback.textContent = `Correct: ${target.en}. Listen and repeat the word.`;
          speakWordCard(target.en);
          optionsEl.querySelectorAll('button').forEach(choice => { choice.disabled = true; });
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'category-chip';
          next.textContent = index + 1 === questions.length ? 'Finish check' : 'Next word';
          next.addEventListener('click', () => { index++; render(); });
          optionsEl.after(next);
        } else feedback.textContent = 'Not that one. Think of the word before choosing again.';
      });
      optionsEl.appendChild(button);
    });
  };
  quiz.querySelector('.recall-start').addEventListener('click', () => { container.hidden = true; render(); });
}

function filterWordCards(category, chipEl) {
  sfx.playPop();
  document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
  chipEl.classList.add('active');
  renderWordCards(category);
}

function speakWordCard(text, cardEl) {
  sfx.playPop();
  speakEnglish(text, 'kid');
}

// ============================================================================
// ACTIVIDAD 3: SENTENCE BUILDER (25 RETOS GRAMATICALES - UNIT 2)
// ============================================================================
const sentenceChallengesUnit2 = [
  // 1-5: Articles A / AN and Singular Nouns
  {
    es: "",
    target: ["This", "is", "a", "blue", "notebook."],
    pool: ["This", "is", "a", "an", "blue", "notebook."],
    tip: "Use the article 'a' before consonant sounds (blue notebook)."
  },
  {
    es: "",
    target: ["She", "has", "an", "eraser."],
    pool: ["She", "has", "an", "a", "eraser.", "have"],
    tip: "Use 'an' before words starting with vowel sounds (eraser)."
  },
  {
    es: "",
    target: ["The", "whiteboard", "is", "clean."],
    pool: ["The", "whiteboard", "is", "clean.", "are", "am"],
    tip: "'The whiteboard' is singular, so we use 'is'."
  },
  {
    es: "",
    target: ["He", "is", "our", "teacher."],
    pool: ["He", "is", "our", "are", "teacher.", "my"],
    tip: "With the pronoun 'He', use the singular form 'is'."
  },
  {
    es: "",
    target: ["They", "are", "in", "the", "classroom."],
    pool: ["They", "are", "in", "the", "classroom.", "is", "on"],
    tip: "The plural pronoun 'They' pairs with 'are'."
  },

  // 6-10: Demostrativos THIS vs THESE
  {
    es: "",
    target: ["This", "is", "my", "backpack."],
    pool: ["This", "is", "my", "These", "backpack.", "are"],
    tip: "'This is' refers to a single object close by."
  },
  {
    es: "",
    target: ["These", "are", "my", "pencils."],
    pool: ["These", "are", "my", "pencils.", "This", "is"],
    tip: "'These are' refers to multiple objects close by (plural)."
  },
  {
    es: "",
    target: ["That", "is", "the", "clock."],
    pool: ["That", "is", "the", "clock.", "Those", "are"],
    tip: "'That is' points to a single object far away."
  },
  {
    es: "",
    target: ["Those", "are", "English", "books."],
    pool: ["Those", "are", "English", "books.", "That", "is"],
    tip: "'Those are' points to multiple objects far away."
  },
  {
    es: "",
    target: ["Are", "these", "your", "markers?"],
    pool: ["Are", "these", "your", "markers?", "Is", "this"],
    tip: "In plural questions, 'Are' comes first before 'these'."
  },

  // 11-15: Preposiciones de Lugar (IN, ON, UNDER, NEXT TO, BEHIND)
  {
    es: "",
    target: ["The", "pen", "is", "in", "the", "pencil", "case."],
    pool: ["The", "pen", "is", "in", "the", "pencil", "case.", "on"],
    tip: "Use 'in' to indicate that something is inside a container."
  },
  {
    es: "",
    target: ["The", "ruler", "is", "on", "the", "desk."],
    pool: ["The", "ruler", "is", "on", "the", "desk.", "in", "under"],
    tip: "Use 'on' for objects placed on a surface."
  },
  {
    es: "",
    target: ["The", "backpack", "is", "under", "the", "chair."],
    pool: ["The", "backpack", "is", "under", "the", "chair.", "on", "next"],
    tip: "Use 'under' to indicate something below an object."
  },
  {
    es: "",
    target: ["The", "clock", "is", "next", "to", "the", "window."],
    pool: ["The", "clock", "is", "next", "to", "the", "window.", "in"],
    tip: "The compound preposition 'next to' means beside."
  },
  {
    es: "",
    target: ["The", "eraser", "is", "behind", "the", "book."],
    pool: ["The", "eraser", "is", "behind", "the", "book.", "front", "under"],
    tip: "Use 'behind' to indicate at the back of."
  },

  // 16-20: Posesivo 'S (Emma's, Alex's, Teacher's)
  {
    es: "",
    target: ["It", "is", "Maya's", "pencil", "case."],
    pool: ["It", "is", "Maya's", "pencil", "case.", "Maya", "are"],
    tip: "Add apostrophe-s ('s) to show possession: Maya's pencil case."
  },
  {
    es: "",
    target: ["This", "is", "Alex's", "book."],
    pool: ["This", "is", "Alex's", "book.", "Alex", "are"],
    tip: "Alex's book = the book belonging to Alex."
  },
  {
    es: "",
    target: ["Whose", "ruler", "is", "this?"],
    pool: ["Whose", "ruler", "is", "this?", "Who", "are"],
    tip: "Use 'Whose' to ask who owns an item."
  },
  {
    es: "",
    target: ["It", "is", "the", "teacher's", "desk."],
    pool: ["It", "is", "the", "teacher's", "desk.", "teacher", "are"],
    tip: "The teacher's desk = the desk belonging to the teacher."
  },
  {
    es: "",
    target: ["Whose", "scissors", "are", "these?"],
    pool: ["Whose", "scissors", "are", "these?", "is", "this?"],
    tip: "Because 'scissors' is plural, ask 'are these?'."
  },

  // 21-25: Comandos de clase y expresiones escolares
  {
    es: "",
    target: ["Open", "your", "books,", "please."],
    pool: ["Open", "your", "books,", "please.", "Close", "read"],
    tip: "Classroom imperative command with 'Open'."
  },
  {
    es: "",
    target: ["Close", "the", "door", "carefully."],
    pool: ["Close", "the", "door", "carefully.", "Open", "window"],
    tip: "Classroom instruction with 'Close'."
  },
  {
    es: "",
    target: ["May", "I", "borrow", "your", "ruler?"],
    pool: ["May", "I", "borrow", "your", "ruler?", "Can", "have"],
    tip: "'May I borrow...?' is a polite way to ask for an item."
  },
  {
    es: "",
    target: ["Raise", "your", "hand", "to", "speak."],
    pool: ["Raise", "your", "hand", "to", "speak.", "Put", "down"],
    tip: "Polite classroom rule for listening carefully."
  },
  {
    es: "",
    target: ["We", "take", "care", "of", "our", "classroom."],
    pool: ["We", "take", "care", "of", "our", "classroom.", "clean", "are"],
    tip: "'Take care of' means to look after school supplies."
  }
];

let currentChallengeIndex = 0;
let userPlacedWords = [];

function loadSentenceChallenge(index) {
  currentChallengeIndex = index;
  userPlacedWords = [];

  const challenge = sentenceChallengesUnit2[index];
  document.getElementById('challengeNum').textContent = `Challenge ${index + 1} of ${sentenceChallengesUnit2.length}`;
  document.getElementById('promptTranslation').textContent = `🎯 Build: "${challenge.target.join(' ')}"`;
  document.getElementById('grammarTip').textContent = `💡 Grammar tip: ${challenge.tip}`;

  const dropzone = document.getElementById('sentenceDropzone');
  dropzone.className = 'dropzone-target';
  dropzone.innerHTML = '<span style="color:#94a3b8; font-size:0.9rem;">Tap the words below to arrange them in order...</span>';

  // Shuffle word bank
  const shuffled = [...challenge.pool].sort(() => Math.random() - 0.5);
  const poolContainer = document.getElementById('wordBankContainer');
  poolContainer.innerHTML = shuffled.map((word, wIdx) => `
    <button class="word-tile" id="tile-${wIdx}" onclick="selectWordTile('${word}', 'tile-${wIdx}')">${word}</button>
  `).join('');

  document.getElementById('btnCheckSentence').style.display = 'inline-flex';
  document.getElementById('btnNextSentence').style.display = 'none';
}

function selectWordTile(word, tileId) {
  sfx.playPop();
  const tile = document.getElementById(tileId);
  if (!tile || tile.classList.contains('placed')) return;

  tile.classList.add('placed');
  userPlacedWords.push({ word, tileId });

  renderDropzone();
}

function removePlacedWord(placedIndex) {
  sfx.playPop();
  const removed = userPlacedWords.splice(placedIndex, 1)[0];
  const originalTile = document.getElementById(removed.tileId);
  if (originalTile) {
    originalTile.classList.remove('placed');
  }

  renderDropzone();
}

function renderDropzone() {
  const dropzone = document.getElementById('sentenceDropzone');
  dropzone.className = 'dropzone-target';

  if (userPlacedWords.length === 0) {
    dropzone.innerHTML = '<span style="color:#94a3b8; font-size:0.9rem;">Tap the words below to arrange them in order...</span>';
    return;
  }

  dropzone.innerHTML = userPlacedWords.map((item, idx) => `
    <button class="word-tile" style="background:#e0f2fe; border-color:#0ea5e9; border-bottom-color:#0284c7; color:#0369a1;" onclick="removePlacedWord(${idx})">
      ${item.word} ✕
    </button>
  `).join('');
}

function resetCurrentSentence() {
  sfx.playPop();
  loadSentenceChallenge(currentChallengeIndex);
}

function checkSentence() {
  const challenge = sentenceChallengesUnit2[currentChallengeIndex];
  const userSentence = userPlacedWords.map(w => w.word).join(' ');
  const targetSentence = challenge.target.join(' ');

  const dropzone = document.getElementById('sentenceDropzone');

  if (userSentence === targetSentence) {
    sfx.playSuccess();
    dropzone.className = 'dropzone-target correct';
    speakEnglish(targetSentence, 'alex');
    AppState.addStars(15);

    document.getElementById('btnCheckSentence').style.display = 'none';
    const nextBtn = document.getElementById('btnNextSentence');
    nextBtn.style.display = 'inline-flex';

    if (currentChallengeIndex === sentenceChallengesUnit2.length - 1) {
      nextBtn.textContent = 'Completed! Restart challenges 🔄';
    } else {
      nextBtn.textContent = 'Next Challenge ➔';
    }
  } else {
    sfx.playError();
    dropzone.className = 'dropzone-target error';
  }
}

function nextSentenceChallenge() {
  sfx.playPop();
  if (currentChallengeIndex < sentenceChallengesUnit2.length - 1) {
    loadSentenceChallenge(currentChallengeIndex + 1);
  } else {
    sfx.playFanfare();
    loadSentenceChallenge(0);
  }
}

// ============================================================================
// ACTIVITY 4: SPEAKING QUEST (CLASSROOM PRONUNCIATION)
// ============================================================================
const speakingPromptsUnit2 = [
  { phrase: "This is a blue notebook.", es: "" },
  { phrase: "These are my colored pencils.", es: "" },
  { phrase: "The eraser is on the desk.", es: "" },
  { phrase: "May I borrow your ruler, please?", es: "" },
  { phrase: "The backpack is under the chair.", es: "" },
  { phrase: "Open your English book on page ten.", es: "" },
  { phrase: "They are students in my class.", es: "" },
  { phrase: "This is Maya's pencil case.", es: "" }
];

let currentSpeakingIndex = 0;
let isRecording = false;
let recognitionInstance = null;

function loadSpeakingPrompt(index) {
  currentSpeakingIndex = index;
  const item = speakingPromptsUnit2[index];
  document.getElementById('micRecordBtn').disabled = false;
  document.getElementById('speakingTarget').textContent = `"${item.phrase}"`;
  document.getElementById('speakingHint').textContent = '';
  document.getElementById('speakingFeedback').innerHTML = '';
}

function listenSpeakingSample() {
  sfx.playPop();
  const phrase = speakingPromptsUnit2[currentSpeakingIndex].phrase;
  speakEnglish(phrase, 'teacher');
}

function toggleVoiceRecord() {
  const btn = document.getElementById('micRecordBtn');
  const feedback = document.getElementById('speakingFeedback');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    sfx.playPop();
    feedback.innerHTML = `
      <div class="speech-result-text">🎙️ This browser does not support speech recognition.</div>
      <span class="speech-score-badge" style="background:#fef3c7; color:#92400e;">
        Practice mode. Listen to native audio and repeat aloud.
      </span>
    `;
    btn.disabled = true;
    return;
  }

  if (isRecording) {
    if (recognitionInstance) recognitionInstance.stop();
    return;
  }

  try {
    recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'en-US';
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onstart = () => {
      isRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#0ea5e9; font-weight:600;">Listening... Speak now! 🎧</span>`;
    };

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const target = speakingPromptsUnit2[currentSpeakingIndex].phrase;

      const cleanTranscript = transcript.toLowerCase().replace(/[^a-z0-9 ]/g, '');
      const cleanTarget = target.toLowerCase().replace(/[^a-z0-9 ]/g, '');

      const targetWords = cleanTarget.split(/\s+/).filter(Boolean);
      const heardWords = new Set(cleanTranscript.split(/\s+/).filter(Boolean));
      const matchedWords = targetWords.filter(word => heardWords.has(word)).length;
      const isMatch = cleanTranscript.length > 0 && matchedWords >= Math.min(2, targetWords.length) && matchedWords / targetWords.length >= 0.6;

      if (isMatch) {
        sfx.playSuccess();
        feedback.innerHTML = `
          <div class="speech-result-text">You said: "<strong>${transcript}</strong>"</div>
          <span class="speech-score-badge" style="background:#dcfce7; color:#15803d;">
            🌟 Great speaking! Phrase recognized (+15 pts).
          </span>
        `;
        AppState.addStars(15);
      } else {
        sfx.playPop();
        feedback.innerHTML = `
          <div class="speech-result-text">You said: "${transcript}"</div>
          <span class="speech-score-badge" style="background:#fef3c7; color:#92400e;">
            👍 Keep trying! Listen to native audio and repeat again.
          </span>
        `;
      }
    };

    recognitionInstance.onerror = (err) => {
      console.warn("Speech recognition error:", err);
      feedback.innerHTML = `<span style="color:#64748b; font-size:0.85rem;">Could not hear clearly. Tap the microphone and try again.</span>`;
    };

    recognitionInstance.onend = () => {
      isRecording = false;
      btn.classList.remove('recording');
    };

    recognitionInstance.start();

  } catch (e) {
    console.error(e);
    btn.classList.remove('recording');
  }
}

function nextSpeakingPrompt() {
  sfx.playPop();
  currentSpeakingIndex = (currentSpeakingIndex + 1) % speakingPromptsUnit2.length;
  loadSpeakingPrompt(currentSpeakingIndex);
}

// ============================================================================
// INITIALIZATION DE LA UNIDAD 2
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // Initialize Interactive Dialogue with scenario 1
  initInteractiveStory();

  // Render vocabulary with phonics and audio
  renderWordCards('all');

  // Load first Sentence Builder challenge
  loadSentenceChallenge(0);

  // Load first pronunciation phrase
  loadSpeakingPrompt(0);
});
