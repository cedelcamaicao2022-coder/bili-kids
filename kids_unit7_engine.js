/**
 * BILIKIDS KIDS CLUB - UNIT 7 ENGINE: OUT AND ABOUT (A2 LEVEL)
 * Age: 7-10 years (Cambridge Movers A1-A2)
 * Innovative Game Mechanics:
 * 1. 🐸 Froggy Stepping Stones (River Jumps)
 * 2. 🎈 Cloud Balloon Popper (Wordwall Balloon Burst - Sentence Unscramble)
 * 3. 🎡 Weather & Wardrobe Fortune Wheel (Blooket/Wordwall Random Wheel)
 * 4. ⚡ Live TV Weather Broadcast con Power-Ups estilo Quizizz (50/50, 2X Stars)
 */

// ============================================================================
// APP STATE & PERSISTENCE
// ============================================================================
const AppState = {
  stars: parseInt(localStorage.getItem('bilikids_stars') || '200', 10),
  activeMultiplier: 1,

  addStars(amount) {
    const finalAmount = amount * this.activeMultiplier;
    this.stars += finalAmount;
    localStorage.setItem('bilikids_stars', this.stars.toString());
    const starEl = document.getElementById('unitStarsCount');
    if (starEl) {
      starEl.textContent = `${this.stars} pts`;
      starEl.classList.add('pulse-star');
      setTimeout(() => starEl.classList.remove('pulse-star'), 600);
    }
    this.activeMultiplier = 1; // reset after use
  }
};

// ============================================================================
// AUDIO SFX SYNTHESIZER (Pure Web Audio API)
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
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playSplash() {
    this.init();
    // Water splash simulation
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(380, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(120, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  playBalloonBurst() {
    this.init();
    // Loud crisp balloon pop
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.28, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  playWheelTick() {
    this.init();
    // Ratchet mechanical click
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.03);
  }

  playPowerUp() {
    this.init();
    // Sparkling Quizizz powerup sound
    const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.06);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.06 + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.06);
      osc.stop(this.ctx.currentTime + i * 0.06 + 0.15);
    });
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
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.28);
    });
  }

  playError() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(130, this.ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }

  playApplause() {
    this.init();
    for (let i = 0; i < 14; i++) {
      const delay = Math.random() * 0.5;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320 + Math.random() * 450, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + 0.08);
    }
  }
}

const sfx = new SoundEffects();

// ============================================================================
// SPEECH SYNTHESIS ENGINE (Safe Callback + Timeout Fallback)
// ============================================================================
function speakEnglish(text, voiceType = 'guide', onComplete = null) {
  if (typeof playStudioOrSynthAudio === "function") {
    return playStudioOrSynthAudio(arguments[0], arguments[1], arguments[2]);
  }
  if (!('speechSynthesis' in window)) {
    if (onComplete) onComplete();
    return;
  }

  window.speechSynthesis.cancel();

  let called = false;
  const finish = () => {
    if (!called) {
      called = true;
      if (onComplete) onComplete();
    }
  };

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';

  if (voiceType === 'reporter') {
    utterance.pitch = 1.15;
    utterance.rate = 1.0;
  } else if (voiceType === 'frog') {
    utterance.pitch = 1.35;
    utterance.rate = 1.05;
  } else {
    utterance.pitch = 1.2;
    utterance.rate = 0.98;
  }

  const voices = window.speechSynthesis.getVoices();
  const enVoices = voices.filter(v => v.lang.startsWith('en'));
  if (enVoices.length > 0) {
    const preferred = enVoices.find(v =>
      v.name.includes('Samantha') ||
      v.name.includes('Karen') ||
      v.name.includes('Google US English')
    );
    utterance.voice = preferred || enVoices[0];
  }

  const safeTimer = setTimeout(finish, Math.max(1500, text.length * 85));

  utterance.onend = () => {
    clearTimeout(safeTimer);
    finish();
  };

  utterance.onerror = () => {
    clearTimeout(safeTimer);
    finish();
  };

  try {
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    clearTimeout(safeTimer);
    finish();
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// ============================================================================
// TAB NAVIGATION SYSTEM
// ============================================================================
function switchTab(tabId, btnElement) {
  sfx.playPop();

  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  document.querySelectorAll('.activity-view').forEach(view => view.classList.remove('active-view'));
  const target = document.getElementById(`view-${tabId}`);
  if (target) {
    target.classList.add('active-view');
  }
}

// ============================================================================
// ACTIVIDAD 1: 🐸 FROGGY STEPPING STONES (EDUCAPLAY RIVER JUMPS)
// 8 river crossing stages based on weather and Present Continuous
// ============================================================================
const froggyStagesData = [
  {
    id: 0,
    weatherTitle: "Stage 1 • Heavy Winter Snowfall ❄️",
    weatherPromptEn: "Look outside! Thick white snow is falling from the grey clouds.",
    weatherPromptEs: "",
    questionEn: "What is Barnaby doing right now in the cold snow?",
    pads: [
      { text: "He is wearing a warm winter coat and making a snowman.", isCorrect: true, hint: "" },
      { text: "He is swimming in cold water in summer shorts.", isCorrect: false, hint: "" },
      { text: "He is sunbathing with dark sunglasses on the sand.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 1,
    weatherTitle: "Stage 2 • Summer Heatwave ☀️",
    weatherPromptEn: "The sun is shining brightly and the temperature is thirty-two degrees.",
    weatherPromptEs: "",
    questionEn: "What are the children doing at the beach right now?",
    pads: [
      { text: "They are putting on heavy wool scarves and boots.", isCorrect: false, hint: "" },
      { text: "They are swimming in the sea and eating lemon ice cream.", isCorrect: true, hint: "" },
      { text: "They are holding umbrellas inside a rainstorm.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 2,
    weatherTitle: "Stage 3 • Autumn Rainstorm 🌧️",
    weatherPromptEn: "Large raindrops are pouring down on the city streets.",
    weatherPromptEs: "",
    questionEn: "What is Maya doing to stay dry?",
    pads: [
      { text: "She is wearing a yellow raincoat and holding an umbrella.", isCorrect: true, hint: "" },
      { text: "She is reading sunglasses under the blazing sun.", isCorrect: false, hint: "" },
      { text: "She is flying a paper kite in the stormy sky.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 3,
    weatherTitle: "Stage 4 • Windy Hilltop 💨",
    weatherPromptEn: "A strong cool breeze is blowing the colorful tree leaves.",
    weatherPromptEs: "",
    questionEn: "What are Leo and Tom doing in the meadow?",
    pads: [
      { text: "They are sleeping underwater in the pond.", isCorrect: false, hint: "" },
      { text: "They are making a snowman with white ice.", isCorrect: false, hint: "" },
      { text: "They are flying a high dragon kite in the wind.", isCorrect: true, hint: "" }
    ]
  },
  {
    id: 4,
    weatherTitle: "Stage 5 • Thunderstorm Lightning ⛈️",
    weatherPromptEn: "Dark storm clouds are rumbling with loud thunder.",
    weatherPromptEs: "",
    questionEn: "What is the family doing for safety right now?",
    pads: [
      { text: "They are staying inside the house and drinking hot tea.", isCorrect: true, hint: "" },
      { text: "They are swimming in the deep outdoor pool.", isCorrect: false, hint: "" },
      { text: "They are riding rollerblades on the wet road.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 5,
    weatherTitle: "Stage 6 • Foggy Morning 🌫️",
    weatherPromptEn: "Thick grey fog is covering the mountain roads.",
    weatherPromptEs: "",
    questionEn: "What are the cars doing on the foggy road?",
    pads: [
      { text: "They are turning on their bright fog lights and driving slowly.", isCorrect: true, hint: "" },
      { text: "They are swimming across the mountain river.", isCorrect: false, hint: "" },
      { text: "They are turning off all their lights in darkness.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 6,
    weatherTitle: "Stage 7 • Sunny Spring Garden 🌸",
    weatherPromptEn: "Warm sunshine is warming the green grass and pink flowers are blooming.",
    weatherPromptEs: "",
    questionEn: "What is Grandmother doing in the garden?",
    pads: [
      { text: "She is wearing winter boots and shoveling ice.", isCorrect: false, hint: "" },
      { text: "She is watering the red roses with a green garden hose.", isCorrect: true, hint: "" },
      { text: "She is lighting a fireplace in the snow.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 7,
    weatherTitle: "Stage 8 • Final Golden Island Celebration 🏆",
    weatherPromptEn: "A magnificent colorful rainbow is stretching across the clear blue sky!",
    weatherPromptEs: "",
    questionEn: "What are all the friends doing at the finish line?",
    pads: [
      { text: "They are crying in the cold darkness.", isCorrect: false, hint: "" },
      { text: "They are celebrating and taking victory photos under the rainbow.", isCorrect: true, hint: "" },
      { text: "They are shoveling heavy snow in summer.", isCorrect: false, hint: "" }
    ]
  }
];

let currentFrogStage = 0;
let isFrogAdvancing = false;

function loadFroggyStage(index) {
  isFrogAdvancing = false;
  currentFrogStage = index;
  const stage = froggyStagesData[index];

  document.getElementById('riverStageBadge').textContent = `Etapa ${index + 1} de ${froggyStagesData.length}`;
  document.getElementById('riverWeatherTitle').textContent = stage.weatherTitle;
  document.getElementById('riverWeatherPromptEn').textContent = `"${stage.weatherPromptEn}"`;
  document.getElementById('riverWeatherPromptEs').textContent = stage.weatherPromptEs;
  document.getElementById('froggyQuestionPrompt').innerHTML = `❓ <strong>${stage.questionEn}</strong>`;

  // Render progress dots
  renderRiverPathDots();

  // Speak prompt
  speakEnglish(stage.weatherPromptEn, 'guide');

  // Randomize lily pad options
  const shuffledPads = [...stage.pads].sort(() => Math.random() - 0.5);

  const padsGrid = document.getElementById('lilypadsGrid');
  padsGrid.innerHTML = shuffledPads.map(pad => `
    <button class="lilypad-card" onclick="handleLilypadJump(this, ${pad.isCorrect}, '${pad.text.replace(/'/g, "\\'")}')">
      <span style="font-size:2.2rem;">🪷</span>
      <div style="font-family:var(--font-display); font-size:1.05rem; font-weight:700; line-height:1.35;">${pad.text}</div>
      <div style="font-size:0.75rem; color:#a7f3d0; margin-top:4px;">${pad.hint}</div>
    </button>
  `).join('');

  document.getElementById('riverFeedbackBox').innerHTML = '';
}

function renderRiverPathDots() {
  const dotsContainer = document.getElementById('riverPathProgress');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = froggyStagesData.map((_, i) => {
    let stateClass = '';
    let icon = i + 1;
    if (i === currentFrogStage) {
      stateClass = 'active-step';
      icon = '🐸';
    } else if (i < currentFrogStage) {
      stateClass = 'completed-step';
      icon = '✓';
    }
    return `<div class="river-step-dot ${stateClass}">${icon}</div>`;
  }).join('');
}

function listenRiverWeather() {
  sfx.playSplash();
  const stage = froggyStagesData[currentFrogStage];
  speakEnglish(stage.weatherPromptEn, 'guide');
}

function handleLilypadJump(btnEl, isCorrect, sentenceText) {
  if (isFrogAdvancing) return;
  const feedback = document.getElementById('riverFeedbackBox');

  if (isCorrect) {
    isFrogAdvancing = true;
    sfx.playSplash();
    sfx.playSuccess();
    btnEl.classList.add('correct');

    // Deshabilitar todos los lirios para prevenir clics repetidos
    document.querySelectorAll('.lilypad-card').forEach(b => {
      b.style.pointerEvents = 'none';
      if (b !== btnEl) {
        b.style.opacity = '0.55';
      }
    });

    // Salto visual inmediato en las piedras de progreso
    const dotsContainer = document.getElementById('riverPathProgress');
    if (dotsContainer) {
      const allDots = dotsContainer.querySelectorAll('.river-step-dot');
      if (allDots[currentFrogStage]) {
        allDots[currentFrogStage].className = 'river-step-dot completed-step';
        allDots[currentFrogStage].textContent = '✓';
      }
      if (currentFrogStage + 1 < froggyStagesData.length && allDots[currentFrogStage + 1]) {
        allDots[currentFrogStage + 1].className = 'river-step-dot active-step leaping';
        allDots[currentFrogStage + 1].textContent = '🐸';
      }
    }

    const isFinalStage = currentFrogStage >= froggyStagesData.length - 1;
    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:2px solid #10b981; border-radius:16px; padding:14px 20px; color:#065f46; margin-top:16px; box-shadow:0 6px 20px rgba(16,185,129,0.25);">
        <div style="font-weight:700; font-size:1.15rem; margin-bottom:4px; display:flex; align-items:center; justify-content:center; gap:8px;">
          <span>🐸💦</span>
          <span>SAFE JUMP TO THE LILY PAD! (+20 pts)</span>
        </div>
        <div style="font-size:1.05rem; font-weight:600; margin:6px 0;">"${sentenceText}"</div>
        <div style="font-size:0.88rem; color:#059669; font-weight:700; margin-top:6px; display:flex; align-items:center; justify-content:center; gap:6px;">
          <span style="display:inline-block; animation:spin 1s linear infinite;">⏳</span>
          <span>${!isFinalStage ? 'Moving to the next river stone...' : 'Reaching the Golden Island!...'}</span>
        </div>
      </div>
    `;
    AppState.addStars(20);
    speakEnglish(sentenceText, 'frog');

    // Smooth automatic transition
    setTimeout(() => {
      isFrogAdvancing = false;
      if (currentFrogStage < froggyStagesData.length - 1) {
        loadFroggyStage(currentFrogStage + 1);
      } else {
        showFroggyGoldenIslandVictory();
      }
    }, 1200);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong');
    setTimeout(() => btnEl.classList.remove('wrong'), 450);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ Watch out, that lily pad sinks! That action doesn't match the current weather. Try again!
      </div>
    `;
  }
}

function showFroggyGoldenIslandVictory() {
  sfx.playApplause();
  AppState.addStars(50);

  const padsGrid = document.getElementById('lilypadsGrid');
  const questionPrompt = document.getElementById('froggyQuestionPrompt');
  const feedback = document.getElementById('riverFeedbackBox');

  if (questionPrompt) {
    questionPrompt.innerHTML = `🏆 <strong>GOLDEN ISLAND REACHED WITH SUCCESS!</strong>`;
  }

  if (padsGrid) {
    padsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border:3px solid #f59e0b; border-radius:24px; padding:28px 20px; text-align:center; color:#92400e; box-shadow:0 12px 32px rgba(245, 158, 11, 0.35);">
        <div style="font-size:3.5rem; margin-bottom:8px; animation:frogJumpSplash 0.8s ease infinite alternate;">🏝️🐸👑</div>
        <h3 style="font-family:var(--font-display); font-size:1.6rem; font-weight:800; color:#78350f; margin-bottom:8px;">
          CONGRATULATIONS! YOU CROSSED THE WEATHER RIVER!
        </h3>
        <p style="font-size:1.05rem; max-width:620px; margin:0 auto 18px; color:#92400e; line-height:1.5;">
          Barnaby and Froggy mastered Present Continuous and weather states for Movers A2! You won <strong>+50 bonus pts</strong>!
        </p>
        <div style="display:flex; justify-content:center; gap:14px; flex-wrap:wrap;">
          <button class="btn-back-map" style="background:#0284c7; color:#ffffff; border-color:#0284c7; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="switchTab('balloon', document.querySelectorAll('.tab-btn')[1])">
            🎈 Next Activity: Cloud Balloons ➔
          </button>
          <button class="btn-back-map" style="background:#ffffff; color:#b45309; border-color:#f59e0b; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="loadFroggyStage(0)">
            🔄 Cross the River Again
          </button>
        </div>
      </div>
    `;
  }

  if (feedback) feedback.innerHTML = '';
}

function nextFroggyStage() {
  sfx.playPop();
  currentFrogStage = (currentFrogStage + 1) % froggyStagesData.length;
  loadFroggyStage(currentFrogStage);
}

// ============================================================================
// ACTIVIDAD 2: 🎈 CLOUD BALLOON POPPER (SENTENCE UNSCRAMBLE)
// 10 oraciones de Presente Continuo donde los globos explotan al ordenarse
// ============================================================================
const balloonSentencesData = [
  {
    id: 0,
    targetSentence: "The girls are eating ice cream in the park.",
    sentenceEs: "",
    correctTokens: ["The girls", "are", "eating", "ice cream", "in the park."],
    distractors: ["swimming"]
  },
  {
    id: 1,
    targetSentence: "My brother is riding his bicycle right now.",
    sentenceEs: "",
    correctTokens: ["My brother", "is", "riding", "his bicycle", "right now."],
    distractors: ["sleeps"]
  },
  {
    id: 2,
    targetSentence: "They are wearing warm jackets in the snow.",
    sentenceEs: "",
    correctTokens: ["They", "are", "wearing", "warm jackets", "in the snow."],
    distractors: ["is"]
  },
  {
    id: 3,
    targetSentence: "The little dog is chasing a yellow butterfly.",
    sentenceEs: "",
    correctTokens: ["The little dog", "is", "chasing", "a yellow butterfly."],
    distractors: ["are"]
  },
  {
    id: 4,
    targetSentence: "We are swimming in the cool blue pool.",
    sentenceEs: "",
    correctTokens: ["We", "are", "swimming", "in the cool", "blue pool."],
    distractors: ["snowing"]
  },
  {
    id: 5,
    targetSentence: "Look! It is raining outside our classroom window.",
    sentenceEs: "",
    correctTokens: ["Look!", "It is", "raining", "outside our", "classroom window."],
    distractors: ["sun"]
  },
  {
    id: 6,
    targetSentence: "Oliver is taking photos of the colorful birds.",
    sentenceEs: "",
    correctTokens: ["Oliver", "is", "taking", "photos of", "the colorful birds."],
    distractors: ["cooks"]
  },
  {
    id: 7,
    targetSentence: "Grandmother is drinking warm tea by the fire.",
    sentenceEs: "",
    correctTokens: ["Grandmother", "is", "drinking", "warm tea", "by the fire."],
    distractors: ["running"]
  },
  {
    id: 8,
    targetSentence: "The children are building a tall sandcastle.",
    sentenceEs: "",
    correctTokens: ["The children", "are", "building", "a tall", "sandcastle."],
    distractors: ["is"]
  },
  {
    id: 9,
    targetSentence: "Listen! The birds are singing in the garden.",
    sentenceEs: "",
    correctTokens: ["Listen!", "The birds", "are", "singing", "in the garden."],
    distractors: ["barking"]
  }
];

let currentBalloonIndex = 0;
let collectedTokens = [];
let availableBalloonTokens = [];
let isBalloonAdvancing = false;

function loadBalloonChallenge(index) {
  isBalloonAdvancing = false;
  currentBalloonIndex = index;
  collectedTokens = [];
  const b = balloonSentencesData[index];

  document.getElementById('balloonCaseBadge').textContent = `Mission ${index + 1} of ${balloonSentencesData.length}`;
  document.getElementById('balloonTargetSentenceEs').textContent = `🎯 Objetivo: "${b.sentenceEs}"`;

  // Combine correct tokens and distractors, then shuffle
  availableBalloonTokens = [...b.correctTokens, ...b.distractors].sort(() => Math.random() - 0.5);

  renderSentenceCollector();
  renderCloudBalloons();
  document.getElementById('balloonFeedbackBox').innerHTML = '';
}

function renderSentenceCollector() {
  const tray = document.getElementById('sentenceCollectorTray');
  if (!tray) return;

  if (collectedTokens.length === 0) {
    tray.innerHTML = `<span style="color:#94a3b8; font-size:0.95rem; font-style:italic;">Tap the cloud balloons in the correct order to form the sentence...</span>`;
  } else {
    tray.innerHTML = collectedTokens.map((tok, i) => `
      <span class="collected-word-tile" onclick="removeLastCollectedToken(${i})">${tok}</span>
    `).join(' ');
  }
}

function renderCloudBalloons() {
  const cloudsRow = document.getElementById('balloonCloudsRow');
  if (!cloudsRow) return;

  cloudsRow.innerHTML = availableBalloonTokens.map((tok, i) => `
    <button class="cloud-balloon-btn" onclick="popCloudBalloon(this, '${tok.replace(/'/g, "\\'")}', ${i})">
      <span>☁️</span>
      <span>${tok}</span>
    </button>
  `).join('');
}

function popCloudBalloon(btnEl, tokenText, tokenIndex) {
  if (isBalloonAdvancing) return;
  const b = balloonSentencesData[currentBalloonIndex];
  const expectedNextToken = b.correctTokens[collectedTokens.length];

  if (tokenText === expectedNextToken) {
    // CORRECT STEP!
    sfx.playBalloonBurst();
    btnEl.classList.add('popped');
    btnEl.style.pointerEvents = 'none';
    collectedTokens.push(tokenText);
    renderSentenceCollector();

    if (collectedTokens.length === b.correctTokens.length) {
      // Completed sentence!
      isBalloonAdvancing = true;
      sfx.playSuccess();

      // Deshabilitar todos los globos restantes
      document.querySelectorAll('.cloud-balloon-btn').forEach(btn => {
        btn.style.pointerEvents = 'none';
      });

      const isFinalMission = currentBalloonIndex >= balloonSentencesData.length - 1;
      const feedback = document.getElementById('balloonFeedbackBox');
      feedback.innerHTML = `
        <div style="background:#ecfdf5; border:2px solid #10b981; border-radius:16px; padding:14px 20px; color:#065f46; margin-top:14px; box-shadow:0 6px 20px rgba(16,185,129,0.25);">
          <div style="font-weight:700; font-size:1.18rem; margin-bottom:4px; display:flex; align-items:center; justify-content:center; gap:8px;">
            <span>🎈💥</span>
            <span>FULL SENTENCE POPPED SUCCESSFULLY! (+20 pts)</span>
          </div>
          <div style="font-size:1.05rem; font-weight:600; margin:6px 0;">"${b.targetSentence}"</div>
          <div style="font-size:0.88rem; color:#059669; font-weight:700; margin-top:6px; display:flex; align-items:center; justify-content:center; gap:6px;">
            <span style="display:inline-block; animation:spin 1s linear infinite;">⏳</span>
            <span>${!isFinalMission ? 'Moving to the next balloon sentence...' : 'Completing all sky missions!...'}</span>
          </div>
        </div>
      `;
      AppState.addStars(20);
      speakEnglish(b.targetSentence, 'guide');

      setTimeout(() => {
        isBalloonAdvancing = false;
        if (currentBalloonIndex < balloonSentencesData.length - 1) {
          loadBalloonChallenge(currentBalloonIndex + 1);
        } else {
          showBalloonVictory();
        }
      }, 1200);
    }

  } else {
    // Incorrect token order or distractor
    sfx.playError();
    btnEl.style.animation = 'shakeBtn 0.35s';
    setTimeout(() => { btnEl.style.animation = 'floatCloud 3s ease-in-out infinite alternate'; }, 400);

    const feedback = document.getElementById('balloonFeedbackBox');
    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ That balloon is not next in order. Check the subject, verb 'to be' (is/are), and the -ING verb.
      </div>
    `;
  }
}

function showBalloonVictory() {
  sfx.playApplause();
  AppState.addStars(50);

  const cloudsRow = document.getElementById('balloonCloudsRow');
  const targetEs = document.getElementById('balloonTargetSentenceEs');
  const feedback = document.getElementById('balloonFeedbackBox');

  if (targetEs) {
    targetEs.innerHTML = `🏆 <strong>ALL SENTENCES COMPLETED! (+50 pts bonus)</strong>`;
  }

  if (cloudsRow) {
    cloudsRow.innerHTML = `
      <div style="width:100%; background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border:3px solid #3b82f6; border-radius:24px; padding:28px 20px; text-align:center; color:#1e40af; box-shadow:0 12px 32px rgba(59, 130, 246, 0.25);">
        <div style="font-size:3.5rem; margin-bottom:8px; animation:frogJumpSplash 0.8s ease infinite alternate;">🎈🌈⭐</div>
        <h3 style="font-family:var(--font-display); font-size:1.6rem; font-weight:800; color:#1e3a8a; margin-bottom:8px;">
          PRESENT CONTINUOUS SKY MASTER!
        </h3>
        <p style="font-size:1.05rem; max-width:620px; margin:0 auto 18px; color:#1e40af; line-height:1.5;">
          You successfully popped all 10 sentences in the perfect grammatical order! You won <strong>+50 bonus pts</strong>.
        </p>
        <div style="display:flex; justify-content:center; gap:14px; flex-wrap:wrap;">
          <button class="btn-back-map" style="background:#2563eb; color:#ffffff; border-color:#2563eb; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="switchTab('fortune', document.querySelectorAll('.tab-btn')[2])">
            🎡 Next Activity: Wardrobe Wheel ➔
          </button>
          <button class="btn-back-map" style="background:#ffffff; color:#1d4ed8; border-color:#93c5fd; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="loadBalloonChallenge(0)">
            🔄 Play Balloons Again
          </button>
        </div>
      </div>
    `;
  }

  if (feedback) feedback.innerHTML = '';
}

function removeLastCollectedToken(index) {
  if (isBalloonAdvancing) return;
  // Allow tapping to remove if needed
  sfx.playPop();
  const removed = collectedTokens.splice(index);
  renderSentenceCollector();
  renderCloudBalloons();
}

function nextBalloonChallenge() {
  sfx.playPop();
  currentBalloonIndex = (currentBalloonIndex + 1) % balloonSentencesData.length;
  loadBalloonChallenge(currentBalloonIndex);
}

// ============================================================================
// ACTIVIDAD 3: 🎡 WEATHER & WARDROBE FORTUNE WHEEL (BLOOKET & WORDWALL)
// 6 climate zones on fortune wheel and wardrobe selection
// ============================================================================
const wardrobeSeasonsData = [
  {
    weatherName: "Rainy Day",
    icon: "🌧️",
    degree: 30, // conic section
    promptEn: "It is raining heavily! We need water-resistant clothes and gear.",
    promptEs: "",
    requiredItems: ["Raincoat", "Umbrella"],
    itemsPool: [
      { name: "Raincoat", icon: "🧥", isCorrect: true, es: "" },
      { name: "Umbrella", icon: "☂️", isCorrect: true, es: "" },
      { name: "Sunglasses", icon: "🕶️", isCorrect: false, es: "" },
      { name: "Swimsuit", icon: "🩱", isCorrect: false, es: "" }
    ]
  },
  {
    weatherName: "Snowy Winter",
    icon: "❄️",
    degree: 90,
    promptEn: "Freezing snow is covering the ground! We need warm protection.",
    promptEs: "",
    requiredItems: ["Wool Scarf", "Winter Boots"],
    itemsPool: [
      { name: "Wool Scarf", icon: "🧣", isCorrect: true, es: "" },
      { name: "Winter Boots", icon: "🥾", isCorrect: true, es: "" },
      { name: "Sun Hat", icon: "👒", isCorrect: false, es: "" },
      { name: "Flip Flops", icon: "🩴", isCorrect: false, es: "" }
    ]
  },
  {
    weatherName: "Sunny Summer",
    icon: "☀️",
    degree: 150,
    promptEn: "The hot summer sun is shining at the beach! Time to cool down.",
    promptEs: "",
    requiredItems: ["Sunglasses", "Sun Hat"],
    itemsPool: [
      { name: "Sunglasses", icon: "🕶️", isCorrect: true, es: "" },
      { name: "Sun Hat", icon: "👒", isCorrect: true, es: "" },
      { name: "Heavy Winter Coat", icon: "🧥", isCorrect: false, es: "" },
      { name: "Wool Gloves", icon: "🧤", isCorrect: false, es: "" }
    ]
  },
  {
    weatherName: "Windy Autumn",
    icon: "💨",
    degree: 210,
    promptEn: "A chilly wind is blowing dry leaves across the park.",
    promptEs: "",
    requiredItems: ["Windbreaker Jacket", "Beanie Cap"],
    itemsPool: [
      { name: "Windbreaker Jacket", icon: "🧥", isCorrect: true, es: "" },
      { name: "Beanie Cap", icon: "🧢", isCorrect: true, es: "" },
      { name: "Swimsuit", icon: "🩱", isCorrect: false, es: "" },
      { name: "Beach Towel", icon: "🏖️", isCorrect: false, es: "" }
    ]
  },
  {
    weatherName: "Stormy Afternoon",
    icon: "⛈️",
    degree: 270,
    promptEn: "Dark thunderclouds are flashing with lightning! Stay safe inside.",
    promptEs: "",
    requiredItems: ["Rubber Boots", "Waterproof Hood"],
    itemsPool: [
      { name: "Rubber Boots", icon: "👢", isCorrect: true, es: "" },
      { name: "Waterproof Hood", icon: "🧥", isCorrect: true, es: "" },
      { name: "Straw Hat", icon: "👒", isCorrect: false, es: "" },
      { name: "Shorts", icon: "🩳", isCorrect: false, es: "" }
    ]
  },
  {
    weatherName: "Spring Flower Walk",
    icon: "🌸",
    degree: 330,
    promptEn: "Fresh spring air with gentle warmth and blooming flowers.",
    promptEs: "",
    requiredItems: ["Light Cardigan", "Comfortable Sneakers"],
    itemsPool: [
      { name: "Light Cardigan", icon: "🧥", isCorrect: true, es: "" },
      { name: "Comfortable Sneakers", icon: "👟", isCorrect: true, es: "" },
      { name: "Snow Goggles", icon: "🥽", isCorrect: false, es: "" },
      { name: "Heavy Scarf", icon: "🧣", isCorrect: false, es: "" }
    ]
  }
];

let currentWheelSeasonIndex = 0;
let isWheelSpinning = false;
let currentRotationDegree = 0;
let selectedWardrobeItems = [];

function spinFortuneWheel() {
  if (isWheelSpinning) return;
  isWheelSpinning = true;
  selectedWardrobeItems = [];

  const disc = document.getElementById('fortuneWheelDisc');
  const btn = document.getElementById('spinWheelBtn');
  btn.disabled = true;

  // Pick random weather
  const randomIndex = Math.floor(Math.random() * wardrobeSeasonsData.length);
  currentWheelSeasonIndex = randomIndex;
  const target = wardrobeSeasonsData[randomIndex];

  // Calculate rotation (3 to 5 full turns + target angle)
  const fullSpins = (4 + Math.floor(Math.random() * 2)) * 360;
  // Offset so needle at top (270 deg / -90 deg) lands on the target angle
  const targetDegree = fullSpins + (360 - target.degree);
  currentRotationDegree += targetDegree;

  if (disc) {
    disc.style.transform = `rotate(${currentRotationDegree}deg)`;
  }

  // Ratchet tick sounds during spin
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      sfx.playWheelTick();
    }, i * 150 + Math.random() * 20);
  }

  setTimeout(() => {
    isWheelSpinning = false;
    btn.disabled = false;
    sfx.playSuccess();
    displaySeasonWardrobeMission(target);
  }, 3600);
}

function displaySeasonWardrobeMission(season) {
  document.getElementById('wheelSelectedSeasonBadge').innerHTML = `${season.icon} <strong>${season.weatherName}</strong>`;
  document.getElementById('wheelPromptEn').textContent = `"${season.promptEn}"`;
  document.getElementById('wheelPromptEs').textContent = season.promptEs;

  speakEnglish(season.promptEn, 'guide');

  // Render wardrobe items (shuffled)
  const pool = [...season.itemsPool].sort(() => Math.random() - 0.5);
  const itemsContainer = document.getElementById('wardrobeItemsGrid');
  itemsContainer.innerHTML = pool.map(item => `
    <div class="wardrobe-item-card" onclick="handleWardrobeItemClick(this, '${item.name}', ${item.isCorrect}, '${item.icon}')">
      <span style="font-size:2.2rem;">${item.icon}</span>
      <strong style="font-family:var(--font-display); font-size:0.95rem; color:#0f172a;">${item.name}</strong>
      <span style="font-size:0.75rem; color:#64748b;">${item.es}</span>
    </div>
  `).join('');

  document.getElementById('wheelFeedbackBox').innerHTML = `
    <div style="color:#0369a1; font-weight:700; font-size:0.95rem;">
      👗 Choose the 2 matching clothing items for this weather in the wardrobe:
    </div>
  `;
}

function handleWardrobeItemClick(cardEl, itemName, isCorrect, itemIcon) {
  const season = wardrobeSeasonsData[currentWheelSeasonIndex];
  const feedback = document.getElementById('wheelFeedbackBox');

  if (isCorrect) {
    if (selectedWardrobeItems.includes(itemName) || selectedWardrobeItems.length >= 2) return;
    sfx.playPop();
    cardEl.classList.add('dressed');
    selectedWardrobeItems.push(itemName);

    speakEnglish(itemName, 'kid');

    if (selectedWardrobeItems.length === 2) {
      sfx.playSuccess();
      feedback.innerHTML = `
        <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:16px; padding:14px 20px; color:#065f46; margin-top:14px;">
          <div style="font-weight:700; font-size:1.15rem; margin-bottom:4px;">🎉 CHARACTER DRESSED PERFECTLY! (+25 pts)</div>
          <div>You selected the right outfit for <strong>${season.weatherName}</strong>. Spin the wheel again to dress for another climate!</div>
        </div>
      `;
      AppState.addStars(25);
    } else {
      feedback.innerHTML = `
        <div style="color:#059669; font-weight:700; font-size:0.95rem;">
          🧥 ${itemIcon} ${itemName} selected! Choose 1 more item.
        </div>
      `;
    }

  } else {
    sfx.playError();
    cardEl.classList.add('wrong');
    setTimeout(() => cardEl.classList.remove('wrong'), 450);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ That item does not protect properly against ${season.weatherName}! Choose another item.
      </div>
    `;
  }
}

// ============================================================================
// ACTIVIDAD 4: ⚡ LIVE TV WEATHER BROADCAST CON POWER-UPS (QUIZIZZ)
// 8 TV weather forecasts with 50/50 and 2X power-ups
// ============================================================================
const tvBroadcastData = [
  {
    id: 0,
    city: "London 🌧️",
    headline: "Breaking Weather • London Downpour",
    teleprompterEn: "Attention viewers! Right now in London, it is raining heavily and people are holding colorful umbrellas.",
    teleprompterEs: "",
    viewerReaction: "150K live viewers: Stay dry London! ☔✨"
  },
  {
    id: 1,
    city: "New York ❄️",
    headline: "Central Park Winter Storm",
    teleprompterEn: "Good evening! In New York, soft snowflakes are falling and children are building snowmen.",
    teleprompterEs: "",
    viewerReaction: "200K viewers: Magical snowy Central Park! ⛄❄️"
  },
  {
    id: 2,
    city: "Miami ☀️",
    headline: "Sunny Coastline Heatwave",
    teleprompterEn: "Welcome back! In sunny Miami, people are swimming in the ocean and wearing dark sunglasses.",
    teleprompterEs: "",
    viewerReaction: "180K viewers: Sunscreen and cool waves! 🌊🕶️"
  },
  {
    id: 3,
    city: "Tokyo 🌸",
    headline: "Spring Cherry Blossom Breeze",
    teleprompterEn: "Live from Tokyo! Gentle spring wind is blowing and families are walking under pink cherry trees.",
    teleprompterEs: "",
    viewerReaction: "300K viewers: Breathtaking spring blossoms! 🌸🎎"
  },
  {
    id: 4,
    city: "Chicago 💨",
    headline: "The Windy City Alert",
    teleprompterEn: "Weather update! In Chicago, strong autumn wind is howling and yellow leaves are flying in the air.",
    teleprompterEs: "",
    viewerReaction: "220K viewers: Hold on to your hats Chicago! 🍃🎩"
  },
  {
    id: 5,
    city: "Sydney 🏖️",
    headline: "Summer Beach Action",
    teleprompterEn: "Good morning Australia! Surfers are riding giant waves at Bondi Beach under the warm sun.",
    teleprompterEs: "",
    viewerReaction: "250K viewers: Awesome surfing conditions! 🏄‍♂️🇦🇺"
  },
  {
    id: 6,
    city: "Paris ☕",
    headline: "Cozy Autumn Afternoon",
    teleprompterEn: "Live in Paris! People are drinking hot chocolate at street cafes while cool rain is tapping on windows.",
    teleprompterEs: "",
    viewerReaction: "190K viewers: So cozy and charming! 🥐☕"
  },
  {
    id: 7,
    city: "Global Final 🌍",
    headline: "World Weather Spectacular",
    teleprompterEn: "Thank you for watching Bilikids Weather Live! Have a fantastic day wherever you are!",
    teleprompterEs: "",
    viewerReaction: "1 MILLION VIEWERS: Best weather reporter ever! 🌟🎉"
  }
];

let currentTVIndex = 0;
let isTVRecording = false;

function loadTVBroadcast(index) {
  currentTVIndex = index;
  const b = tvBroadcastData[index];
  document.getElementById('tvMicBtn').disabled = false;

  document.getElementById('tvCityBadge').textContent = `Forecast ${index + 1} of ${tvBroadcastData.length} • ${b.city}`;
  document.getElementById('tvHeadlineBanner').textContent = b.headline;
  document.getElementById('tvTeleprompterText').textContent = `"${b.teleprompterEn}"`;
  document.getElementById('tvTeleprompterEs').textContent = '';
  document.getElementById('tvViewersLiveChat').innerHTML = `
    <span style="color:#38bdf8; font-size:0.9rem;">💬 Live Chat: ${b.viewerReaction}</span>
  `;
  document.getElementById('tvBroadcastFeedback').innerHTML = '';

  speakEnglish(b.teleprompterEn, 'reporter');
}

function listenTVForecast() {
  sfx.playPop();
  const b = tvBroadcastData[currentTVIndex];
  speakEnglish(b.teleprompterEn, 'reporter');
}

// QUIZIZZ POWER-UPS
function triggerPowerUp(type, btnEl) {
  sfx.playPowerUp();
  btnEl.classList.add('used');

  const feedback = document.getElementById('tvBroadcastFeedback');

  if (type === 'double') {
    AppState.activeMultiplier = 2;
    feedback.innerHTML = `
      <div style="display:inline-block; background:rgba(245, 158, 11, 0.25); border:1px solid #f59e0b; padding:8px 18px; border-radius:999px; color:#fbbf24; font-weight:700;">
        🌟 POWER-UP ACTIVATED: 2X POINTS! Your next report earns double points (50 pts).
      </div>
    `;
  } else if (type === 'freeze') {
    feedback.innerHTML = `
      <div style="display:inline-block; background:rgba(56, 189, 248, 0.25); border:1px solid #38bdf8; padding:8px 18px; border-radius:999px; color:#38bdf8; font-weight:700;">
        ⏱️ TIME FROZEN! Read calmly with clear intonation into the camera.
      </div>
    `;
  } else if (type === '5050') {
    feedback.innerHTML = `
      <div style="display:inline-block; background:rgba(16, 185, 129, 0.25); border:1px solid #10b981; padding:8px 18px; border-radius:999px; color:#34d399; font-weight:700;">
        💡 50/50 ACTIVATED! Guided teleprompter with key phrases.
      </div>
    `;
  }
}

function toggleTVMic() {
  const btn = document.getElementById('tvMicBtn');
  const feedback = document.getElementById('tvBroadcastFeedback');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    feedback.innerHTML = `
      <div style="font-size:1.15rem; font-weight:700; color:#38bdf8;">📺 LIVE WEATHER FORECAST BROADCASTED!</div>
      <span style="display:inline-block; margin-top:8px; background:rgba(16, 185, 129, 0.2); color:#34d399; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #10b981;">
        Practice mode. Listen to native audio and try again.
      </span>
    `;
    btn.disabled = true;
    return;
  }

  if (isTVRecording) return;

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isTVRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#ef4444; font-weight:700;">🔴 ON AIR ON NATIONAL TELEVISION! Read your forecast in English...</span>`;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      feedback.innerHTML = `
        <div style="font-size:1.05rem; font-weight:600; color:#ffffff;">Transmitiste: "<strong>${transcript}</strong>"</div>
        <span style="display:inline-block; margin-top:8px; background:rgba(59, 130, 246, 0.25); color:#60a5fa; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #3b82f6;">
          📺 Weather broadcast practice transcript.
        </span>
      `;
    };

    recognition.onerror = () => {
      feedback.innerHTML = `<span style="color:#94a3b8;">Tap the microphone again to try.</span>`;
    };

    recognition.onend = () => {
      isTVRecording = false;
      btn.classList.remove('recording');
    };

    recognition.start();

  } catch (err) {
    btn.classList.remove('recording');
  }
}

function nextTVBroadcast() {
  sfx.playPop();
  currentTVIndex = (currentTVIndex + 1) % tvBroadcastData.length;
  loadTVBroadcast(currentTVIndex);
}

// ============================================================================
// UNIT 7 INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // 1. Froggy Stepping Stones
  loadFroggyStage(0);

  // 2. Cloud Balloon Popper
  loadBalloonChallenge(0);

  // 3. Weather Fortune Wheel (Initial Season Display)
  displaySeasonWardrobeMission(wardrobeSeasonsData[0]);

  // 4. Live TV Broadcast
  loadTVBroadcast(0);
});
