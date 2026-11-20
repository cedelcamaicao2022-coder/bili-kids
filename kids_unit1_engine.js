/**
 * BILIKIDS KIDS CLUB - UNIT 1 ENGINE
 * Age: 7-10 years (Cambridge Starters / Movers A1)
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
      window.__biliSharedAudioCtx = this.ctx;
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
    osc.frequency.setValueAtTime(420, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(840, this.ctx.currentTime + 0.08);
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
// NATIVE SPEECH SYNTHESIS ENGINE (Natural English pronunciation con Fallback Seguro)
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
    utterance.pitch = voiceType === 'maya' ? 1.25 : voiceType === 'clerk' ? 0.95 : voiceType === 'alex' ? 1.15 : 1.05;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Karen'))) 
                      || voices.find(v => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    // Temporizador de seguridad: si el navegador no dispara onend, avanzamos de todos modos
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

// Load voices proactively
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
// ACTIVITY 1: REAL-LIFE DIALOGUES (6 EXTENSIVE SCENARIOS)
// ============================================================================
const RealWorldScenarios = {
  // 1. FIRST DAY AT SCHOOL (10 turns)
  school: {
    title: "First Day at School",
    badge: "School • A1",
    subtitle: "Meeting classmates and finding your classroom.",
    steps: [
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Hello! Good morning. Welcome to Bilikids School!",
        es: "",
        question: "How should Maya reply politely?",
        choices: [
          { text: "Good morning! My name is Maya.", es: "", correct: true },
          { text: "Good night, I am sleeping.", es: "", correct: false },
          { text: "I want an ice cream.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Nice to meet you, Maya! Are you a new student here?",
        es: "",
        question: "Maya confirms she is a new student. What does she say?",
        choices: [
          { text: "Yes, I am! Today is my first day.", es: "", correct: true },
          { text: "No, I am the teacher.", es: "", correct: false },
          { text: "My pencil is red.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "I am ten years old. How old are you, Maya?",
        es: "",
        question: "Maya is 9 years old. What does she say?",
        choices: [
          { text: "I have nine years.", es: "", correct: false },
          { text: "I am nine years old.", es: "", correct: true },
          { text: "Nine o'clock in the morning.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Which grade are you in? Are we in fourth grade?",
        es: "",
        question: "How does Maya reply that they are in the same grade?",
        choices: [
          { text: "Yes, we are in fourth grade together!", es: "", correct: true },
          { text: "No, we are at the beach.", es: "", correct: false },
          { text: "I like bananas.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "The bell is ringing! Where is our classroom?",
        es: "",
        question: "Maya points to classroom number 5. What does she say?",
        choices: [
          { text: "It is room number five, next to the library.", es: "", correct: true },
          { text: "The airplane is flying high.", es: "", correct: false },
          { text: "My shoes are black.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Great! Let's walk to class. We are a great team!",
        es: "",
        question: "How does Maya celebrate excitedly?",
        choices: [
          { text: "Yes, let's go! I am ready to learn.", es: "", correct: true },
          { text: "I am tired, goodbye.", es: "", correct: false },
          { text: "Zero, one, two, three.", es: "", correct: false }
        ]
      }
    ]
  },

  // 2. SHOPPING AT THE MALL (10 turns)
  shopping: {
    title: "Shopping at the Mall",
    badge: "Shopping • A2",
    subtitle: "Shopping for clothes, asking prices, and picking sizes.",
    steps: [
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Hello! Welcome to Fashion Kids. Can I help you?",
        es: "",
        question: "Maya is looking for a blue T-shirt. What does she say?",
        choices: [
          { text: "Yes, please. I am looking for a blue T-shirt.", es: "", correct: true },
          { text: "No, I am eating a burger.", es: "", correct: false },
          { text: "My dog is sleeping.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Sure! What size do you need? Small or medium?",
        es: "",
        question: "Maya needs a medium size. What does she say?",
        choices: [
          { text: "I need size medium, please.", es: "", correct: true },
          { text: "I need a football ball.", es: "", correct: false },
          { text: "Today is Monday.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Here is a nice blue T-shirt. Would you like to try it on?",
        es: "",
        question: "Maya asks where the fitting room is. What does she say?",
        choices: [
          { text: "Yes, thank you! Where is the fitting room?", es: "", correct: true },
          { text: "Where is the swimming pool?", es: "", correct: false },
          { text: "I don't like homework.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "It looks very cool on you, Maya! How much is it?",
        es: "",
        question: "Maya sees the 15-dollar price tag. What does she say?",
        choices: [
          { text: "It is fifteen dollars. That is a great price!", es: "", correct: true },
          { text: "It is fifteen kilometers.", es: "", correct: false },
          { text: "My sister is fifteen years old.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Are you paying with cash or credit card?",
        es: "",
        question: "Maya has cash. What does she reply?",
        choices: [
          { text: "I am paying with cash. Here is twenty dollars.", es: "", correct: true },
          { text: "I am paying with an apple.", es: "", correct: false },
          { text: "My cat is happy.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Here is your five dollars change and the receipt. Have a great day!",
        es: "",
        question: "How does Maya say goodbye politely?",
        choices: [
          { text: "Thank you very much! Have a nice day, goodbye!", es: "", correct: true },
          { text: "No problem, I don't care.", es: "", correct: false },
          { text: "It is raining outside.", es: "", correct: false }
        ]
      }
    ]
  },

  // 3. EN EL CINE CON AMIGOS (10 intercambios)
  cinema: {
    title: "At the Movie Theater",
    badge: "Cinema • A1-A2",
    subtitle: "Buying movie tickets, popcorn, and finding seats.",
    steps: [
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "We are at the cinema! Which movie do you want to see?",
        es: "",
        question: "Maya wants to watch the space movie. What does she reply?",
        choices: [
          { text: "I want to see the new Space Adventure movie!", es: "", correct: true },
          { text: "I want to cook dinner.", es: "", correct: false },
          { text: "My bike is broken.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Ticket Clerk', avatar: '🎟️',
        text: "Hello! Welcome to CineStar. How many tickets do you need?",
        es: "",
        question: "They need 2 tickets for kids. What should Alex ask for?",
        choices: [
          { text: "Two tickets for kids, please. Space Adventure at 4 PM.", es: "", correct: true },
          { text: "Ten adult tickets for tomorrow.", es: "", correct: false },
          { text: "I don't like movies.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Ticket Clerk', avatar: '🎟️',
        text: "That is twelve dollars in total. Here are your tickets for row D.",
        es: "",
        question: "What does Maya say to thank him?",
        choices: [
          { text: "Thank you! Row D is perfect.", es: "", correct: true },
          { text: "Good night teacher.", es: "", correct: false },
          { text: "My dog can run fast.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Now let's go to the candy bar. Do you want popcorn or nachos?",
        es: "",
        question: "Maya prefers cheese popcorn. What does she say?",
        choices: [
          { text: "I would like a large popcorn with cheese, please!", es: "", correct: true },
          { text: "I don't eat breakfast.", es: "", correct: false },
          { text: "My favorite color is green.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "And what would you like to drink? Juice or water?",
        es: "",
        question: "Maya asks for fresh apple juice. What does she say?",
        choices: [
          { text: "An apple juice for me, please.", es: "", correct: true },
          { text: "I drink hot soup.", es: "", correct: false },
          { text: "Water is running in the river.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "The movie is starting now! Seats D4 and D5 are here.",
        es: "",
        question: "How does Maya express that she is excited for the movie?",
        choices: [
          { text: "Awesome! Let's silence our phones and enjoy the movie!", es: "", correct: true },
          { text: "I want to go home right now.", es: "", correct: false },
          { text: "Zero plus two equals two.", es: "", correct: false }
        ]
      }
    ]
  },

  // 4. EN EL AEROPUERTO & VIAJE (10 intercambios)
  airport: {
    title: "At the Airport & Travel",
    badge: "Travel • A2",
    subtitle: "Check-in, passports, luggage, and boarding the plane.",
    steps: [
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Good morning! Welcome to SkyAir. Where are you flying today?",
        es: "",
        question: "Alex and Maya are flying to London. What should they reply?",
        choices: [
          { text: "Good morning! We are flying to London today.", es: "", correct: true },
          { text: "We are walking to the supermarket.", es: "", correct: false },
          { text: "My name is not London.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Wonderful! May I please see your passports and tickets?",
        es: "",
        question: "Maya hands over the documents politely. What does she say?",
        choices: [
          { text: "Here they are, officer. Two passports.", es: "", correct: true },
          { text: "I lost my shoes in the park.", es: "", correct: false },
          { text: "Tomorrow is Sunday.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Thank you. Do you have any luggage to check in?",
        es: "",
        question: "Alex has a suitcase and a backpack. What does he reply?",
        choices: [
          { text: "Yes, we have one big suitcase and one backpack.", es: "", correct: true },
          { text: "We have five elephants.", es: "", correct: false },
          { text: "No, I am wearing a hat.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Please put your suitcase on the scale. It weighs 18 kilos. Perfect!",
        es: "",
        question: "Maya asks for the boarding gate. What does she say?",
        choices: [
          { text: "Thank you! Which gate is our flight departing from?", es: "", correct: true },
          { text: "Where is my bedroom?", es: "", correct: false },
          { text: "The sky is blue today.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Your flight is boarding at Gate 14 at 10:30 AM. Here are your boarding passes.",
        es: "",
        question: "How does Alex say thank you?",
        choices: [
          { text: "Thank you very much for your help! Have a great day.", es: "", correct: true },
          { text: "I don't want to fly anymore.", es: "", correct: false },
          { text: "Eight plus eight is sixteen.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Gate 14 is right over there. Are you excited for London, Maya?",
        es: "",
        question: "What does Maya reply happily about the trip?",
        choices: [
          { text: "Yes, I am super excited! London is an amazing city.", es: "", correct: true },
          { text: "No, I forgot my homework at school.", es: "", correct: false },
          { text: "I need to buy a bicycle.", es: "", correct: false }
        ]
      }
    ]
  },

  // 5. AT THE PIZZERIA / RESTAURANT (10 turns)
  pizza: {
    title: "At the Pizzeria",
    badge: "Food • A1-A2",
    subtitle: "Ordering food, drinks, and interacting with the waiter.",
    steps: [
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Good afternoon! Welcome to Bella Pizza. Table for two?",
        es: "",
        question: "How does Maya reply confirming the table?",
        choices: [
          { text: "Yes, please! Table for two near the window.", es: "", correct: true },
          { text: "No, I am playing soccer.", es: "", correct: false },
          { text: "Ten, twenty, thirty.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Right this way. Here is the menu. What would you like to drink first?",
        es: "",
        question: "Alex orders cold lemonade for both. What does he say?",
        choices: [
          { text: "We would like two cold lemonades, please.", es: "", correct: true },
          { text: "We want two hot coffees.", es: "", correct: false },
          { text: "I have five blue pencils.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Two lemonades, perfect. And what pizza would you like today?",
        es: "",
        question: "Maya wants to order cheese and mushroom pizza. What does she say?",
        choices: [
          { text: "Can we have a medium cheese and mushroom pizza, please?", es: "", correct: true },
          { text: "I want an ice cream sandwich.", es: "", correct: false },
          { text: "The moon is round.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Excellent choice! That is our specialty. Would you like extra cheese?",
        es: "",
        question: "How does Alex say yes, please?",
        choices: [
          { text: "Yes, extra cheese sounds delicious! Thank you.", es: "", correct: true },
          { text: "No, I don't like food.", es: "", correct: false },
          { text: "My shoe is under the table.", es: "", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Here is your hot pizza and drinks! Enjoy your meal.",
        es: "",
        question: "What do Alex and Maya say to the waiter?",
        choices: [
          { text: "Thank you so much! It smells wonderful.", es: "", correct: true },
          { text: "Where is my pencil case?", es: "", correct: false },
          { text: "Goodbye yesterday.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "That was the most delicious pizza ever! Let's ask for the bill.",
        es: "",
        question: "Maya asks the waiter for the bill. What does she say?",
        choices: [
          { text: "Excuse me, could we have the bill, please?", es: "", correct: true },
          { text: "Excuse me, where is the cinema?", es: "", correct: false },
          { text: "I have twelve years old.", es: "", correct: false }
        ]
      }
    ]
  },

  // 6. GUSTOS, HOBBIES Y AMIGOS (10 intercambios)
  hobbies: {
    title: "Hobbies & Free Time",
    badge: "Hobbies • A1-A2",
    subtitle: "Talking about hobbies, sports, music, and favorite games.",
    steps: [
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Hey Maya! What do you like to do in your free time?",
        es: "",
        question: "Maya says she loves drawing and riding her bicycle. What does she reply?",
        choices: [
          { text: "I love drawing pictures and riding my bicycle!", es: "", correct: true },
          { text: "I love sleeping at school.", es: "", correct: false },
          { text: "Two plus three is five.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "That's awesome! Do you play any sports on the weekends?",
        es: "",
        question: "Maya plays football on Saturday mornings. What does she say?",
        choices: [
          { text: "Yes, I play soccer every Saturday morning with my friends.", es: "", correct: true },
          { text: "I play video games 24 hours a day.", es: "", correct: false },
          { text: "My winter jacket is red.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "I play basketball! And do you play any musical instrument?",
        es: "",
        question: "Maya plays the piano. What does she reply?",
        choices: [
          { text: "Yes, I practice the piano three days a week.", es: "", correct: true },
          { text: "I have a big piano in my pocket.", es: "", correct: false },
          { text: "The guitar is drinking water.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "That is so cool. What kind of music is your favorite?",
        es: "",
        question: "Maya says she likes pop music and cheerful songs. What does she say?",
        choices: [
          { text: "I really like pop music and energetic songs!", es: "", correct: true },
          { text: "I don't like listening to sounds.", es: "", correct: false },
          { text: "My brother is seven years old.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Do you want to play a video game together this afternoon?",
        es: "",
        question: "How does Maya reply accepting the invitation?",
        choices: [
          { text: "Yes, I'd love to! We can play the new adventure quest.", es: "", correct: true },
          { text: "No, tomorrow was yesterday.", es: "", correct: false },
          { text: "I lost my shoes again.", es: "", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Great! Let's meet at 4 o'clock at my house. See you later!",
        es: "",
        question: "How does Maya say goodbye confirming the time?",
        choices: [
          { text: "Perfect! See you at 4 PM. Have a great day, Alex!", es: "", correct: true },
          { text: "Goodbye, I am sleeping now.", es: "", correct: false },
          { text: "Ten minus five is five.", es: "", correct: false }
        ]
      }
    ]
  }
};

let currentScenarioKey = 'school';
let currentStoryStep = 0;

function switchScenario(scenarioKey, btnEl) {
  sfx.playPop();
  currentScenarioKey = scenarioKey;
  currentStoryStep = 0;

  document.querySelectorAll('.scenario-chip-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const sc = RealWorldScenarios[scenarioKey];
  document.getElementById('storySceneHeading').textContent = sc.title;
  document.getElementById('storySceneSubtitle').textContent = sc.subtitle;
  document.getElementById('storyLevelBadge').textContent = sc.badge;

  const chatFlow = document.getElementById('storyChatFlow');
  if (chatFlow) chatFlow.innerHTML = '';

  renderStoryCurrentStep();
}

function initInteractiveStory() {
  currentScenarioKey = 'school';
  currentStoryStep = 0;
  
  const chatFlow = document.getElementById('storyChatFlow');
  if (chatFlow) chatFlow.innerHTML = '';
  
  renderStoryCurrentStep();
}

function renderStoryCurrentStep() {
  const sc = RealWorldScenarios[currentScenarioKey];
  const step = sc.steps[currentStoryStep];
  const totalSteps = sc.steps.length;

  const progressBar = document.getElementById('storyProgressBar');
  const stepLabel = document.getElementById('storyStepLabel');
  const decisionContainer = document.getElementById('storyDecisionContainer');

  if (stepLabel) stepLabel.textContent = `Dialogue Turn ${currentStoryStep + 1} of ${totalSteps}`;
  if (progressBar) progressBar.style.width = `${((currentStoryStep + 1) / totalSteps) * 100}%`;

  // Add conversational partner speech bubble
  appendStoryChatMessage(step.speaker, step.name, step.avatar, step.text, step.es);

  // Play audio automatically
  speakEnglish(step.text, step.speaker);

  // Shuffle options so correct answer is never in a fixed position
  const shuffledChoices = [...step.choices].sort(() => Math.random() - 0.5);

  // Render prompt and 3 randomized interactive choices
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
  const isClerk = charKey === 'clerk';

  const row = document.createElement('div');
  row.className = `chat-bubble-row ${isMaya ? 'from-maya' : isClerk ? 'from-clerk' : 'from-alex'}`;
  row.id = msgId;

  row.innerHTML = `
    <div class="character-avatar-bubble ${isMaya ? 'maya' : isClerk ? 'clerk' : ''}" id="avatar-${msgId}">
      ${charAvatar}
    </div>
    <div class="chat-message-bubble">
      <div class="chat-sender-name">
        <span>${charName}</span>
        <button class="chat-listen-btn" id="btn-listen-${msgId}" onclick="replayChatAudio('${textEn.replace(/'/g, "\\'")}', '${charKey}', 'avatar-${msgId}', 'btn-listen-${msgId}')">
          🔊 Listen
        </button>
      </div>
      <div class="chat-text-en">"${textEn}"</div>
      
    </div>
  `;

  chatFlow.appendChild(row);
  chatFlow.scrollTop = chatFlow.scrollHeight;
}

function replayChatAudio(text, charKey, avatarId, btnId) {
  sfx.playPop();
  const avatar = document.getElementById(avatarId);
  const btn = btnId ? document.getElementById(btnId) : null;
  if (avatar) avatar.classList.add('talking');
  if (btn) {
    btn.classList.remove('pulse-listen-cta');
    btn.innerHTML = '🔊 Playing...';
  }
  speakEnglish(text, charKey, () => {
    if (avatar) avatar.classList.remove('talking');
    if (btn) btn.innerHTML = '🔊 Listen';
  });
}

// Handler when browser blocks autoplay before user gesture
if (typeof window !== 'undefined') {
  window.__onAutoplayBlocked = function(text, voiceType, onComplete) {
    const latestBtn = document.querySelector('.chat-bubble-row:last-child .chat-listen-btn');
    if (latestBtn) {
      latestBtn.classList.add('pulse-listen-cta');
      latestBtn.innerHTML = '▶️ Tap to listen';
    }
  };
}

// Typing indicators for natural conversational pacing
function showTypingIndicator(charKey, charName, charAvatar) {
  removeTypingIndicator();
  const chatFlow = document.getElementById('storyChatFlow');
  if (!chatFlow) return;

  const isMaya = charKey === 'maya';
  const isClerk = charKey === 'clerk';
  const typingRow = document.createElement('div');
  typingRow.className = `chat-bubble-row ${isMaya ? 'from-maya' : isClerk ? 'from-clerk' : 'from-alex'}`;
  typingRow.id = 'chatTypingIndicatorRow';

  typingRow.innerHTML = `
    <div class="character-avatar-bubble ${isMaya ? 'maya' : isClerk ? 'clerk' : ''}">
      ${charAvatar}
    </div>
    <div class="chat-typing-indicator">
      <span>${charName} is replying</span>
      <div class="chat-typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;

  chatFlow.appendChild(typingRow);
  chatFlow.scrollTop = chatFlow.scrollHeight;
}

function removeTypingIndicator() {
  const existing = document.getElementById('chatTypingIndicatorRow');
  if (existing) existing.remove();
}

function selectShuffledChoice(isCorrect, btnEl, textEn, textEs) {
  if (isCorrect) {
    // Stop any previous speech or pending autoplay so it never collides
    if (typeof window.stopBilikidsAudio === 'function') {
      window.stopBilikidsAudio();
    }

    sfx.playSuccess();
    btnEl.classList.add('correct-choice');

    // Remove any pulsing on listen buttons
    document.querySelectorAll('.pulse-listen-cta').forEach(b => {
      b.classList.remove('pulse-listen-cta');
      b.innerHTML = '🔊 Listen';
    });

    // Disable all buttons to prevent double click
    document.querySelectorAll('.prompt-option-btn').forEach(b => b.style.pointerEvents = 'none');

    // Show Maya typing indicator for a natural human reaction pause
    showTypingIndicator('maya', 'Maya', '👧');

    // Maya speaks her response in chat after a natural 600ms reaction pause
    setTimeout(() => {
      removeTypingIndicator();
      appendStoryChatMessage('maya', 'Maya', '👧', textEn, textEs);
      
      // Play with safe callback
      speakEnglish(textEn, 'maya', () => {
        // Natural conversational pause: wait 950ms after Maya finishes before Alex replies
        setTimeout(() => {
          advanceStoryStep();
        }, 950);
      });
      AppState.addStars(10);
    }, 600);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong-choice');
    setTimeout(() => btnEl.classList.remove('wrong-choice'), 600);
  }
}

function advanceStoryStep() {
  const sc = RealWorldScenarios[currentScenarioKey];
  if (currentStoryStep < sc.steps.length - 1) {
    currentStoryStep++;

    const nextStep = sc.steps[currentStoryStep];
    // Show Alex (or Clerk) typing indicator
    showTypingIndicator(nextStep.speaker, nextStep.name, nextStep.avatar);

    setTimeout(() => {
      removeTypingIndicator();
      renderStoryCurrentStep();
    }, 850);
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

  const sc = RealWorldScenarios[currentScenarioKey];
  const scenarioKeys = ['school', 'shopping', 'cinema', 'airport', 'pizza', 'hobbies'];
  const currentIndex = scenarioKeys.indexOf(currentScenarioKey);
  const isLast = currentIndex === scenarioKeys.length - 1;
  const nextIndex = isLast ? 0 : currentIndex + 1;
  const nextKey = scenarioKeys[nextIndex];
  const nextSc = RealWorldScenarios[nextKey];

  const scenarioIcons = {
    school: '🏫',
    shopping: '🛍️',
    cinema: '🎬',
    airport: '✈️',
    pizza: '🍕',
    hobbies: ''
  };

  if (decisionContainer) {
    decisionContainer.innerHTML = `
      <div class="story-completed-box">
        <div class="story-complete-icon">🌟</div>
        <h3 class="story-complete-title">Dialogue "${sc.title}" Completed!</h3>
        <p class="story-complete-desc">
          Incredible fluency! You completed all conversational turns in this scenario with success.
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
            <span>${isLast ? 'Restart Cycle: School ➔' : `Next: ${nextSc.title} ➔`}</span>
          </button>
        </div>
      </div>
    `;
  }
}

// ============================================================================
// ACTIVITY 2: WORD EXPLORER (Flashcards & Quiz)
// ============================================================================
const vocabularyData = [
  // Saludos & Expresiones
  { cat: 'greetings', en: 'Hello', es: '', ipa: '/həˈloʊ/', icon: '👋' },
  { cat: 'greetings', en: 'Good morning', es: '', ipa: '/ɡʊd ˈmɔːrnɪŋ/', icon: '🌅' },
  { cat: 'greetings', en: 'Nice to meet you', es: '', ipa: '/naɪs tuː miːt juː/', icon: '🤝' },
  { cat: 'greetings', en: 'Goodbye', es: '', ipa: '/ɡʊdˈbaɪ/', icon: '👋' },
  { cat: 'greetings', en: 'See you later', es: '', ipa: '/siː juː ˈleɪtər/', icon: '⏱️' },
  
  // Datos Personales
  { cat: 'personal', en: 'First name', es: '', ipa: '/fɜːrst neɪm/', icon: '🏷️' },
  { cat: 'personal', en: 'Last name', es: '', ipa: '/læst neɪm/', icon: '📇' },
  { cat: 'personal', en: 'Student', es: '', ipa: '/ˈstjuːdənt/', icon: '🎒' },
  { cat: 'personal', en: 'Teacher', es: '', ipa: '/ˈtiːtʃər/', icon: '👩‍🏫' },
  { cat: 'personal', en: 'Friend', es: '', ipa: '/frend/', icon: '⭐' },

  // Numbers 0-10
  { cat: 'numbers', en: 'Zero', es: '', ipa: '/ˈzɪəroʊ/', icon: '0️⃣' },
  { cat: 'numbers', en: 'One', es: '', ipa: '/wʌn/', icon: '1️⃣' },
  { cat: 'numbers', en: 'Two', es: '', ipa: '/tuː/', icon: '2️⃣' },
  { cat: 'numbers', en: 'Three', es: '', ipa: '/θriː/', icon: '3️⃣' },
  { cat: 'numbers', en: 'Four', es: '', ipa: '/fɔːr/', icon: '4️⃣' },
  { cat: 'numbers', en: 'Five', es: '', ipa: '/faɪv/', icon: '5️⃣' },
  { cat: 'numbers', en: 'Six', es: '', ipa: '/sɪks/', icon: '6️⃣' },
  { cat: 'numbers', en: 'Seven', es: '', ipa: '/ˈsev.ən/', icon: '7️⃣' },
  { cat: 'numbers', en: 'Eight', es: '', ipa: '/eɪt/', icon: '8️⃣' },
  { cat: 'numbers', en: 'Nine', es: '', ipa: '/naɪn/', icon: '9️⃣' },
  { cat: 'numbers', en: 'Ten', es: '', ipa: '/ten/', icon: '🔟' }
];

function renderWordCards(filterCat = 'all') {
  const container = document.getElementById('wordsGridContainer');
  if (!container) return;

  const filtered = filterCat === 'all' 
    ? vocabularyData 
    : vocabularyData.filter(item => item.cat === filterCat);

  container.innerHTML = filtered.map(item => `
    <div class="word-card" onclick="speakWordCard('${item.en}', this)">
      <div class="word-icon">${item.icon}</div>
      <div class="word-english">${item.en}</div>
      <div class="word-ipa">${item.ipa}</div>
      
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
    quiz.style.cssText = 'margin:0 0 20px;padding:18px;border:2px solid #c7d2fe;border-radius:16px;background:#eef2ff;';
    container.before(quiz);
  }
  quiz.innerHTML = `<h3 style="margin:0 0 6px;color:#312e81;">🧠 Quick word recall</h3><p>Review the cards, then hide them and test what you remember.</p><button type="button" class="category-chip recall-start">Start recall check</button>`;
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
    quiz.innerHTML = `<h3 style="margin:0 0 6px;color:#312e81;">🧠 Quick word recall</h3><p style="margin:0 0 12px;">What is the correct English word for <strong style="font-size:1.4rem;">${target.icon}</strong>? Question ${index + 1} of ${questions.length}.</p><div class="recall-options" style="display:flex;flex-wrap:wrap;gap:8px;"></div><p class="recall-feedback" role="status" aria-live="polite"></p><p>Correct: ${score}/${questions.length}</p>`;
    const optionsEl = quiz.querySelector('.recall-options');
    options.forEach(option => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'category-chip';
      button.textContent = `${option.icon} ${option.en}`;
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
// ACTIVITY 3: SENTENCE BUILDER (Grammar Lab - 25 Retos Curriculares)
// ============================================================================
const sentenceChallenges = [
  // 1-5: Basic Greetings & Identity with Verb Be
  {
    es: "",
    target: ["Hello,", "I", "am", "Maya."],
    pool: ["Hello,", "Maya.", "am", "is", "I", "are"],
    tip: "Use the pronoun 'I' with the verb 'am'."
  },
  {
    es: "",
    target: ["What", "is", "your", "name?"],
    pool: ["name?", "What", "your", "are", "is", "my"],
    tip: "Question pattern: Wh-word + Verb be + Subject."
  },
  {
    es: "",
    target: ["We", "are", "students."],
    pool: ["We", "is", "am", "are", "students.", "teachers."],
    tip: "Use 'are' with the plural pronoun 'We'."
  },
  {
    es: "",
    target: ["Are", "you", "ten", "years", "old?"],
    pool: ["Are", "you", "is", "ten", "years", "old?", "nine"],
    tip: "In questions with 'You', start with 'Are'."
  },
  {
    es: "",
    target: ["Nice", "to", "meet", "you,", "Alex!"],
    pool: ["Nice", "you,", "meet", "to", "Alex!", "Good"],
    tip: "Common phrase when meeting someone for the first time."
  },

  // 6-10: Names, Ages, and Daily Greetings
  {
    es: "",
    target: ["My", "name", "is", "David."],
    pool: ["My", "name", "is", "David.", "are", "am"],
    tip: "Use 'is' with the singular subject 'My name'."
  },
  {
    es: "",
    target: ["I", "am", "nine", "years", "old."],
    pool: ["I", "am", "nine", "years", "old.", "have", "is"],
    tip: "Express age with 'am' (verb be), never 'have'."
  },
  {
    es: "",
    target: ["Good", "morning,", "teacher!"],
    pool: ["Good", "morning,", "teacher!", "night,", "afternoon,"],
    tip: "Use 'Good morning' in the morning hours."
  },
  {
    es: "",
    target: ["How", "are", "you", "today?"],
    pool: ["How", "are", "you", "today?", "is", "am"],
    tip: "Friendly greeting pattern: How + are + you + today?"
  },
  {
    es: "",
    target: ["I", "am", "very", "good,", "thank", "you."],
    pool: ["I", "am", "very", "good,", "thank", "you.", "are", "bad,"],
    tip: "Polite, positive reply to 'How are you?'."
  },

  // 11-15: Yes/No Questions, Short Answers, and Personal Info
  {
    es: "",
    target: ["Are", "you", "a", "new", "student?"],
    pool: ["Are", "you", "a", "new", "student?", "is", "an"],
    tip: "In Yes/No questions, the verb 'Are' comes first."
  },
  {
    es: "",
    target: ["Yes,", "I", "am."],
    pool: ["Yes,", "I", "am.", "are.", "is."],
    tip: "Polite short affirmative reply."
  },
  {
    es: "",
    target: ["No,", "I", "am", "not."],
    pool: ["No,", "I", "am", "not.", "are", "is"],
    tip: "Use 'am not' to make a negative sentence with 'I'."
  },
  {
    es: "",
    target: ["What", "is", "your", "first", "name?"],
    pool: ["What", "is", "your", "first", "name?", "are", "last"],
    tip: "'First name' refers to your given name."
  },
  {
    es: "",
    target: ["My", "last", "name", "is", "Gomez."],
    pool: ["My", "last", "name", "is", "Gomez.", "are", "first"],
    tip: "'Last name' refers to your family name."
  },

  // 16-20: Friends, Phone Numbers, and Farewells
  {
    es: "",
    target: ["We", "are", "good", "friends."],
    pool: ["We", "are", "good", "friends.", "is", "am"],
    tip: "Plural subject 'We' always pairs with 'are'."
  },
  {
    es: "",
    target: ["What", "is", "your", "phone", "number?"],
    pool: ["What", "is", "your", "phone", "number?", "are", "my"],
    tip: "Friendly question to ask for phone information."
  },
  {
    es: "",
    target: ["It", "is", "five,", "four,", "three,", "two,", "one."],
    pool: ["It", "is", "five,", "four,", "three,", "two,", "one.", "are"],
    tip: "Say phone numbers digit by digit: 'It is...'."
  },
  {
    es: "",
    target: ["See", "you", "later,", "friend!"],
    pool: ["See", "you", "later,", "friend!", "Good", "tomorrow,"],
    tip: "Friendly farewell when seeing someone later."
  },
  {
    es: "",
    target: ["Goodbye,", "have", "a", "nice", "day!"],
    pool: ["Goodbye,", "have", "a", "nice", "day!", "night!", "week!"],
    tip: "Warm and friendly goodbye."
  },

  // 21-25: Clase escolar, edades y bienvenida
  {
    es: "",
    target: ["You", "are", "in", "my", "English", "class."],
    pool: ["You", "are", "in", "my", "English", "class.", "is", "am"],
    tip: "The pronoun 'You' always takes 'are'."
  },
  {
    es: "",
    target: ["Are", "we", "ready", "for", "school?"],
    pool: ["Are", "we", "ready", "for", "school?", "is", "am"],
    tip: "Plural question pattern: 'Are we...?'"
  },
  {
    es: "",
    target: ["Yes,", "we", "are", "ready!"],
    pool: ["Yes,", "we", "are", "ready!", "is", "am"],
    tip: "'We are' expresses first-person plural."
  },
  {
    es: "",
    target: ["I", "am", "eight", "years", "old."],
    pool: ["I", "am", "eight", "years", "old.", "seven", "is"],
    tip: "Remember the pattern: 'I am' + number + 'years old'."
  },
  {
    es: "",
    target: ["Welcome", "to", "our", "school!"],
    pool: ["Welcome", "to", "our", "school!", "in", "at"],
    tip: "Welcoming phrase: 'Welcome to...'."
  }
];

let currentChallengeIndex = 0;
let userPlacedWords = [];

function loadSentenceChallenge(index) {
  currentChallengeIndex = index;
  userPlacedWords = [];

  const challenge = sentenceChallenges[index];
  document.getElementById('challengeNum').textContent = `Challenge ${index + 1} of ${sentenceChallenges.length}`;
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
    <button class="word-tile" style="background:#ede9fe; border-color:#8b5cf6; border-bottom-color:#6d28d9; color:#4c1d95;" onclick="removePlacedWord(${idx})">
      ${item.word} ✕
    </button>
  `).join('');
}

function resetCurrentSentence() {
  sfx.playPop();
  loadSentenceChallenge(currentChallengeIndex);
}

function checkSentence() {
  const challenge = sentenceChallenges[currentChallengeIndex];
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

    if (currentChallengeIndex === sentenceChallenges.length - 1) {
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
  if (currentChallengeIndex < sentenceChallenges.length - 1) {
    loadSentenceChallenge(currentChallengeIndex + 1);
  } else {
    sfx.playFanfare();
    loadSentenceChallenge(0);
  }
}

// ============================================================================
// ACTIVITY 4: SPEAKING QUEST (Speech Recognition & Evaluation)
// ============================================================================
const speakingPrompts = [
  { phrase: "Hello! My name is Alex.", es: "" },
  { phrase: "I am nine years old.", es: "" },
  { phrase: "Nice to meet you!", es: "" },
  { phrase: "We are students.", es: "" }
];

let currentSpeakingIndex = 0;
let isRecording = false;
let recognitionInstance = null;

function loadSpeakingPrompt(index) {
  currentSpeakingIndex = index;
  const item = speakingPrompts[index];
  document.getElementById('micRecordBtn').disabled = false;
  document.getElementById('speakingTarget').textContent = item.phrase;
  document.getElementById('speakingHint').textContent = '';
  document.getElementById('speakingFeedback').innerHTML = '';
}

function listenSpeakingSample() {
  sfx.playPop();
  const phrase = speakingPrompts[currentSpeakingIndex].phrase;
  speakEnglish(phrase, 'maya');
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

  // Start recognition
  try {
    recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'en-US';
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onstart = () => {
      isRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#6366f1; font-weight:600;">Listening... Speak now! 🎧</span>`;
    };

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const target = speakingPrompts[currentSpeakingIndex].phrase;

      // Evaluate similarity
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
            👍 Keep trying! Listen to native audio and speak again.
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
  currentSpeakingIndex = (currentSpeakingIndex + 1) % speakingPrompts.length;
  loadSpeakingPrompt(currentSpeakingIndex);
}

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar estrellas
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // Initialize Interactive Dialogue
  initInteractiveStory();

  // Renderizar vocabulario
  renderWordCards('all');

  // Load first grammar challenge
  loadSentenceChallenge(0);

  // Cargar primera frase de speaking
  loadSpeakingPrompt(0);
});
