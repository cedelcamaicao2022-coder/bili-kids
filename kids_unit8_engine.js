/**
 * ============================================================================
 * BILIKIDS KIDS CLUB - UNIDAD 8: SHOPPING & THE MALL OBBY RUN
 * Interactive 2D Canvas Game Engine, Blooket Gold Quest, POS Scanner & Vlogger
 * Compatible con Cambridge Young Learners Movers A2 (CEFR Pre-A1 / A1-A2)
 * ============================================================================
 */

// ============================================================================
// GLOBAL STATE MANAGEMENT & STARS (Local Storage)
// ============================================================================
const AppState = {
  stars: parseInt(localStorage.getItem('bili_kids_stars') || '0', 10),
  addStars(amount) {
    this.stars += amount;
    localStorage.setItem('bili_kids_stars', this.stars.toString());
    const starEl = document.getElementById('unitStarsCount');
    if (starEl) {
      starEl.textContent = `${this.stars} pts`;
      starEl.parentElement.classList.add('pulse-star');
      setTimeout(() => starEl.parentElement.classList.remove('pulse-star'), 600);
    }
  }
};

// ============================================================================
// MOTOR DE AUDIO SINTETIZADO (Web Audio API Arcade Sound Effects)
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
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playJump() {
    this.init();
    // Springy cartoon platformer jump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.16);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.16);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.16);
  }

  playCoin() {
    this.init();
    // Crisp Mario/Arcade coin ding
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, this.ctx.currentTime); // B5
    osc.frequency.setValueAtTime(1318.51, this.ctx.currentTime + 0.08); // E6
    gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }

  playBoing() {
    this.init();
    // Resonant jelly trampoline boing
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(680, this.ctx.currentTime + 0.12);
    osc.frequency.linearRampToValueAtTime(320, this.ctx.currentTime + 0.28);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }

  playBlockHit() {
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(380, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch(e) {}
  }

  playLaserBeep() {
    this.init();
    // Supermarket scanner laser beep
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1760, this.ctx.currentTime); // A6
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }

  playChestOpen() {
    this.init();
    // Blooket chest opening sparkling sound
    const freqs = [440, 554.37, 659.25, 880, 1108.73];
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.06);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.06 + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.06);
      osc.stop(this.ctx.currentTime + i * 0.06 + 0.18);
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
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }

  playApplause() {
    this.init();
    for (let i = 0; i < 15; i++) {
      const delay = Math.random() * 0.5;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300 + Math.random() * 450, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + 0.08);
    }
  }
}

const _rawSfx = new SoundEffects();
const sfx = new Proxy(_rawSfx, {
  get(target, prop) {
    if (prop in target) {
      const val = target[prop];
      return typeof val === 'function' ? val.bind(target) : val;
    }
    return () => {};
  }
});

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

  if (voiceType === 'cashier') {
    utterance.pitch = 1.1;
    utterance.rate = 1.0;
  } else if (voiceType === 'vlogger') {
    utterance.pitch = 1.25;
    utterance.rate = 1.05;
  } else {
    utterance.pitch = 1.15;
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

  const safeTimer = setTimeout(finish, Math.max(1400, text.length * 85));

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

  // Ensure Canvas and loop are active when Obby tab is open
  if (tabId === 'obby') {
    startObbyEngine();
  }
}

// ============================================================================
// ACTIVIDAD 1: 🏃‍♂️ SUPER PLATFORMER WORLDS & BOSS BATTLE SYSTEM (CYBER MARIO KIDS)
// Powered by Official BiliKids Pixel Art Mascot & Active English Combat
// ============================================================================

// ============================================================================
// 16-BIT RETRO MASCOT SPRITES ENGINE & HERO SELECTION (LEO, BILI, LUNA)
// ============================================================================
const HEROES_CONFIG = {
  leo: {
    id: 'leo',
    name: 'Leo',
    title: 'El León Valiente',
    icon: '🦁',
    stripSrc: 'assets/mascot/leo_pixel_walk_strip.png',
    celebrateSrc: 'assets/mascot/leo_pixel_celebrate.png',
    walkGif: 'assets/mascot/official_leo_walk.gif',
    celebrateGif: 'assets/mascot/official_leo_celebrate.gif',
    color: '#38bdf8',
    desc: '¡Rápido, audaz y valiente con su gorrita y sudadera azul!'
  },
  bili: {
    id: 'bili',
    name: 'Bili',
    title: 'El Oso Explorador',
    icon: '🐻',
    stripSrc: 'assets/mascot/bili_pixel_walk_strip.png',
    celebrateSrc: 'assets/mascot/bili_pixel_celebrate.png',
    walkGif: 'assets/mascot/official_bili_walk.gif',
    celebrateGif: 'assets/mascot/official_bili_celebrate.gif',
    color: '#fbbf24',
    desc: '¡Curioso y alegre con su gorrita azul y buzo amarillo!'
  },
  luna: {
    id: 'luna',
    name: 'Luna',
    title: 'La Conejita Veloz',
    icon: '🐰',
    stripSrc: 'assets/mascot/luna_pixel_walk_strip.png',
    celebrateSrc: 'assets/mascot/luna_pixel_celebrate.png',
    walkGif: 'assets/mascot/official_luna_walk.gif',
    celebrateGif: 'assets/mascot/official_luna_celebrate.gif',
    color: '#f472b6',
    desc: '¡Ágil y brillante con su lazo rosa, sudadera rosa y mochila morada!'
  }
};

let currentHeroId = localStorage.getItem('bilikids_active_hero') || 'leo';
let isHeroSelectOpen = true; // Empieza visible en la pantalla de inicio

const PixelMascot = {
  strip: new Image(),
  celebrate: new Image(),
  isLoaded: false
};
PixelMascot.strip.onload = () => { PixelMascot.isLoaded = true; };

function applyHero(heroId) {
  const hero = HEROES_CONFIG[heroId] || HEROES_CONFIG.leo;
  currentHeroId = hero.id;
  localStorage.setItem('bilikids_active_hero', hero.id);

  PixelMascot.strip.src = hero.stripSrc;
  PixelMascot.celebrate.src = hero.celebrateSrc;

  // Actualizar HUD
  const hudIcon = document.getElementById('hudHeroIcon');
  const hudName = document.getElementById('hudHeroName');
  if (hudIcon) hudIcon.textContent = hero.icon;
  if (hudName) hudName.textContent = hero.name;

  // Actualizar Boss player hearts HUD
  const bossPlayerName = document.getElementById('bossPlayerHeroName');
  if (bossPlayerName) bossPlayerName.textContent = hero.name;
}

function selectHero(heroId, playSound = true) {
  applyHero(heroId);
  updateHeroSelectionUI(heroId);
  if (playSound) {
    try { sfx.playPop(); } catch(e) {}
  }
}

function updateHeroSelectionUI(heroId) {
  const hero = HEROES_CONFIG[heroId] || HEROES_CONFIG.leo;
  ['leo', 'bili', 'luna'].forEach(id => {
    const card = document.getElementById('cardHero' + id.charAt(0).toUpperCase() + id.slice(1));
    const btn = document.getElementById('btnPick' + id.charAt(0).toUpperCase() + id.slice(1));
    if (card) {
      if (id === heroId) {
        card.classList.add('selected');
        if (btn) btn.innerHTML = '<span class="pick-check">✓</span> <span class="pick-text">¡SELECCIONADO!</span>';
      } else {
        card.classList.remove('selected');
        if (btn) btn.innerHTML = '<span class="pick-text">Seleccionar</span>';
      }
    }
  });

  const summary = document.getElementById('summaryHeroName');
  if (summary) {
    summary.innerHTML = hero.icon + ' <strong>' + hero.name + '</strong> • ' + hero.title;
  }

  const btnStart = document.getElementById('btnStartAdventure');
  if (btnStart) {
    btnStart.innerHTML = '<span>¡COMENZAR CON ' + hero.name.toUpperCase() + '! 🎮 🚀</span>';
  }
}

function confirmHeroAndStart() {
  try { sfx.playSuccess(); } catch(e) {}
  closeHeroSelectOverlay();
}

function openHeroSelectOverlay() {
  isHeroSelectOpen = true;
  const modal = document.getElementById('heroSelectModal');
  if (modal) {
    modal.classList.add('active');
  }
  const closeBtn = document.getElementById('btnHeroClose');
  if (closeBtn) {
    closeBtn.style.display = 'flex';
  }
  updateHeroSelectionUI(currentHeroId);
}

function closeHeroSelectOverlay() {
  isHeroSelectOpen = false;
  const modal = document.getElementById('heroSelectModal');
  if (modal) {
    modal.classList.remove('active');
  }
  if (obbyCanvas) {
    obbyCanvas.focus();
  }
}

window.openHeroSelectOverlay = openHeroSelectOverlay;
window.closeHeroSelectOverlay = closeHeroSelectOverlay;
window.selectHero = selectHero;
window.confirmHeroAndStart = confirmHeroAndStart;

// WORLDS & STAGES SPECIFICATION
let currentWorldId = parseInt(localStorage.getItem('bili_current_world') || '1', 10);
let unlockedWorlds = parseInt(localStorage.getItem('bili_unlocked_worlds') || '1', 10);
let currentStageIndex = 0;

const WORLDS_DATA = [
  {
    id: 1,
    name: "World 1 • Sunny Meadows",
    icon: "🌱",
    subtitle: "Colinas Soleadas & Bloques de Pregunta [ ? ]",
    boss: {
      name: "Giga Clockwork Mech",
      icon: "🤖",
      subtitle: "World 1 Boss Guardian • Steampunk Giant",
      maxHp: 100,
      challenges: [
        {
          type: "listening",
          promptEn: "Listen and find THIS blue jacket to charge your blaster!",
          audioFile: "assets/kids_audio/keywords/bili_kw_u8_this_blue_jacket.mp3",
          audioText: "This blue jacket",
          options: [
            { id: "jacket", name: "This Blue Jacket", icon: "🧥", correct: true },
            { id: "boots", name: "These Boots", icon: "👢", correct: false },
            { id: "cap", name: "This Red Cap", icon: "🧢", correct: false }
          ]
        },
        {
          type: "writing",
          promptEn: "Type the missing word: How _______ is this video game?",
          targetWord: "MUCH",
          hint: "M _ _ H"
        },
        {
          type: "sentence",
          promptEn: "Put the words in order to form the sentence:",
          words: ["These", "white", "sneakers", "are", "cool"],
          correctSentence: "These white sneakers are cool"
        },
        {
          type: "speaking",
          promptEn: "I would like to buy these sneakers!",
          displaySentence: "I would like to buy these sneakers!"
        }
      ]
    },
    stages: [
      {
        id: 0,
        title: "Stage 1 • The Sunny Hills & Mystery Blocks [ ? ] 👟",
        promptEn: "Hit the [ ? ] blocks with Barnaby's head to solve grammar challenges!",
        bgTheme: "meadow",
        requiredItems: ["blue_jacket"],
        checkpointX: 40,
        finishX: 1350,
        platforms: [
          { x: 0, y: 340, w: 220, h: 60, type: 'grass' },
          { x: 260, y: 290, w: 120, h: 35, type: 'grass' },
          { x: 420, y: 240, w: 110, h: 35, type: 'trampoline' },
          { x: 570, y: 270, w: 120, h: 35, type: 'grass' },
          { x: 740, y: 230, w: 130, h: 35, type: 'grass' },
          { x: 920, y: 280, w: 110, h: 35, type: 'trampoline' },
          { x: 1080, y: 320, w: 260, h: 80, type: 'pipe_ground' }
        ],
        mysteryBlocks: [
          {
            x: 300, y: 190, w: 42, h: 42, content: "THIS", hit: false, bumpY: 0, icon: "🧥",
            challenge: {
              title: "Grammar Mystery Block: THIS vs THESE",
              promptEn: "Barnaby has ONE warm jacket in his hands. Which demonstrative word is correct for 1 item close to us?",
              audioFile: "assets/kids_audio/keywords/bili_kw_u8_this_blue_jacket.mp3",
              audioText: "This blue jacket",
              options: [
                { text: "🧥 THIS (One item / Singular)", correct: true },
                { text: "👟 THESE (Two or more / Plural)", correct: false }
              ],
              rule: "We use 'THIS' for ONE singular object near us!"
            }
          },
          {
            x: 610, y: 170, w: 42, h: 42, content: "THESE", hit: false, bumpY: 0, icon: "👟",
            challenge: {
              title: "Grammar Mystery Block: THESE vs THIS",
              promptEn: "Look at the cool sneakers! There are TWO sneakers (Plural pair). Which word do we use for items close to us?",
              audioFile: "assets/kids_audio/keywords/bili_kw_u8_white_sneakers.mp3",
              audioText: "These white sneakers",
              options: [
                { text: "👟 THESE (Plural items close)", correct: true },
                { text: "🧥 THIS (Only one item)", correct: false }
              ],
              rule: "We use 'THESE' for TWO or more plural objects near us!"
            }
          }
        ],
        gatekeeperChallenge: {
          title: "Stage 1 Gatekeeper Checkpoint",
          promptEn: "Before entering the Warp Pipe, identify the item Barnaby is wearing:",
          audioFile: "assets/kids_audio/keywords/bili_kw_u8_this_blue_jacket.mp3",
          audioText: "This blue jacket",
          options: [
            { text: "🧥 This blue jacket is very warm and stylish", correct: true },
            { text: "👢 These white boots are very warm and stylish", correct: false }
          ]
        },
        items: [
          { id: "blue_jacket", x: 780, y: 170, name: "This Blue Jacket", icon: "🧥", collected: false }
        ],
        coins: [
          { x: 290, y: 240, collected: false },
          { x: 470, y: 170, collected: false },
          { x: 630, y: 210, collected: false },
          { x: 960, y: 210, collected: false }
        ],
        gate: { x: 1260, y: 220, w: 30, h: 100, unlocked: false }
      },
      {
        id: 1,
        title: "Stage 2 • The Green Pipe Valley & Keypad Terminal 💻",
        promptEn: "Approach the cyber terminal or security gate to enter the password!",
        bgTheme: "meadow",
        hasTerminal: true,
        terminalX: 720,
        terminalY: 260,
        terminalTargetWord: "JACKET",
        terminalPromptEn: "Type the clothing word: J _ _ _ E T (Barnaby's warm clothes)",
        terminalAudio: "assets/kids_audio/keywords/bili_kw_u8_this_blue_jacket.mp3",
        terminalAudioText: "Jacket",
        requiredItems: [],
        checkpointX: 40,
        finishX: 1350,
        platforms: [
          { x: 0, y: 340, w: 200, h: 60, type: 'grass' },
          { x: 240, y: 300, w: 120, h: 35, type: 'grass' },
          { x: 400, y: 250, w: 110, h: 35, type: 'trampoline' },
          { x: 550, y: 200, w: 130, h: 35, type: 'grass' },
          { x: 720, y: 290, w: 180, h: 35, type: 'grass' },
          { x: 950, y: 250, w: 120, h: 35, type: 'trampoline' },
          { x: 1120, y: 320, w: 260, h: 80, type: 'pipe_ground' }
        ],
        mysteryBlocks: [
          {
            x: 590, y: 120, w: 42, h: 42, content: "SNEAKERS", hit: false, bumpY: 0, icon: "👟",
            challenge: {
              title: "Vocabulary Mystery Block: Footwear",
              promptEn: "Which word describes Barnaby's comfortable running shoes?",
              audioFile: "assets/kids_audio/keywords/bili_kw_u8_white_sneakers.mp3",
              audioText: "These white sneakers",
              options: [
                { text: "👟 White Sneakers", correct: true },
                { text: "🧣 Wool Scarf", correct: false }
              ],
              rule: "Sneakers are comfortable athletic shoes!"
            }
          }
        ],
        items: [],
        coins: [
          { x: 280, y: 250, collected: false },
          { x: 450, y: 180, collected: false },
          { x: 790, y: 230, collected: false },
          { x: 1000, y: 190, collected: false }
        ],
        gate: { x: 1260, y: 220, w: 30, h: 100, unlocked: false }
      },
      {
        id: 2,
        title: "Stage 3 • 👑 BOSS BATTLE ARENA: Giga Clockwork Mech 🤖⚔️",
        promptEn: "Defeat the Giant Mech using your English attacks to unlock World 2!",
        bgTheme: "meadow",
        isBossArena: true,
        checkpointX: 60,
        finishX: 1400,
        platforms: [
          { x: 0, y: 340, w: 300, h: 60, type: 'grass' },
          { x: 340, y: 270, w: 140, h: 30, type: 'grass' },
          { x: 520, y: 220, w: 130, h: 30, type: 'trampoline' },
          { x: 690, y: 270, w: 140, h: 30, type: 'grass' },
          { x: 860, y: 340, w: 540, h: 60, type: 'pipe_ground' }
        ],
        mysteryBlocks: [],
        items: [],
        coins: [
          { x: 380, y: 220, collected: false },
          { x: 570, y: 160, collected: false },
          { x: 740, y: 220, collected: false }
        ],
        gate: { x: 1320, y: 220, w: 30, h: 100, unlocked: false }
      }
    ]
  },
  {
    id: 2,
    name: "World 2 • Tropical Beach",
    icon: "🏖️",
    subtitle: "Océano Turquesa & El Pulpo Pirata Captain Squiddy",
    boss: {
      name: "Captain Squiddy",
      icon: "🐙",
      subtitle: "World 2 Boss • Pirate Kraken of the Seas",
      maxHp: 100,
      challenges: [
        {
          type: "listening",
          promptEn: "Listen and find SOME fresh apples for the crew!",
          audioFile: "assets/kids_audio/keywords/bili_kw_u8_fresh_apples.mp3",
          audioText: "Fresh apples",
          options: [
            { id: "apples", name: "These Fresh Apples", icon: "🍎", correct: true },
            { id: "milk", name: "A Bottle of Milk", icon: "🥛", correct: false },
            { id: "bread", name: "Some Bread", icon: "🥖", correct: false }
          ]
        },
        {
          type: "writing",
          promptEn: "Type the food word: A P _ _ _ S (Barnaby's fruit)",
          targetWord: "APPLES",
          hint: "A P P L E S"
        },
        {
          type: "sentence",
          promptEn: "Order the sentence correctly to break Squiddy's water shield:",
          words: ["We", "need", "some", "milk", "and", "apples"],
          correctSentence: "We need some milk and apples"
        },
        {
          type: "speaking",
          promptEn: "These red apples are very delicious!",
          displaySentence: "These red apples are very delicious!"
        }
      ]
    },
    stages: [
      {
        id: 0,
        title: "Stage 1 • The Sand Dunes & Coconut Pier 🍎",
        promptEn: "Find THESE red apples and leap across the wooden piers!",
        bgTheme: "beach",
        requiredItems: ["red_apples"],
        checkpointX: 40,
        finishX: 1350,
        platforms: [
          { x: 0, y: 340, w: 220, h: 60, type: 'sand' },
          { x: 260, y: 290, w: 130, h: 25, type: 'wood_pier' },
          { x: 430, y: 240, w: 110, h: 35, type: 'trampoline' },
          { x: 580, y: 270, w: 120, h: 25, type: 'wood_pier' },
          { x: 740, y: 230, w: 130, h: 25, type: 'wood_pier' },
          { x: 920, y: 280, w: 110, h: 35, type: 'trampoline' },
          { x: 1080, y: 320, w: 260, h: 80, type: 'sand' }
        ],
        mysteryBlocks: [
          {
            x: 310, y: 190, w: 42, h: 42, content: "SOME", hit: false, bumpY: 0, icon: "🥛",
            challenge: {
              title: "Grammar Mystery Block: Quantifier SOME",
              promptEn: "We want milk to drink. Which quantifier do we use for food and drinks?",
              audioFile: "assets/kids_audio/keywords/bili_kw_u8_bottle_of_milk.mp3",
              audioText: "Some fresh milk",
              options: [
                { text: "🥛 SOME milk (Quantifier)", correct: true },
                { text: "❌ AN milk (Incorrect)", correct: false }
              ],
              rule: "We use 'SOME' with uncountable drinks like milk!"
            }
          },
          {
            x: 620, y: 170, w: 42, h: 42, content: "AN", hit: false, bumpY: 0, icon: "🍎",
            challenge: {
              title: "Grammar Mystery Block: Article AN vs A",
              promptEn: "Apple starts with the vowel letter 'A'. Which article is correct?",
              audioFile: "assets/kids_audio/keywords/bili_kw_u8_red_apple.mp3",
              audioText: "An apple",
              options: [
                { text: "🍎 AN apple (Vowel sound)", correct: true },
                { text: "❌ A apple (Incorrect)", correct: false }
              ],
              rule: "We use 'AN' before words starting with vowel sounds!"
            }
          }
        ],
        gatekeeperChallenge: {
          title: "Stage 1 Gatekeeper Checkpoint",
          promptEn: "Before entering the Warp Pipe, what fruit did Barnaby find?",
          audioFile: "assets/kids_audio/keywords/bili_kw_u8_these_red_apples.mp3",
          audioText: "These red apples",
          options: [
            { text: "🍎 These red apples are fresh and tasty", correct: true },
            { text: "🥖 That dry bread is fresh and tasty", correct: false }
          ]
        },
        items: [
          { id: "red_apples", x: 790, y: 170, name: "These Red Apples", icon: "🍎", collected: false }
        ],
        coins: [
          { x: 300, y: 240, collected: false },
          { x: 480, y: 170, collected: false },
          { x: 640, y: 210, collected: false },
          { x: 970, y: 210, collected: false }
        ],
        gate: { x: 1260, y: 220, w: 30, h: 100, unlocked: false }
      },
      {
        id: 1,
        title: "Stage 2 • 👑 BOSS BATTLE ARENA: Captain Squiddy 🐙⚓",
        promptEn: "Use your English skills to defeat Captain Squiddy and unlock World 3!",
        bgTheme: "beach",
        isBossArena: true,
        checkpointX: 60,
        finishX: 1400,
        platforms: [
          { x: 0, y: 340, w: 300, h: 60, type: 'sand' },
          { x: 340, y: 270, w: 140, h: 25, type: 'wood_pier' },
          { x: 520, y: 220, w: 130, h: 35, type: 'trampoline' },
          { x: 690, y: 270, w: 140, h: 25, type: 'wood_pier' },
          { x: 860, y: 340, w: 540, h: 60, type: 'sand' }
        ],
        mysteryBlocks: [],
        items: [],
        coins: [
          { x: 380, y: 220, collected: false },
          { x: 570, y: 160, collected: false },
          { x: 740, y: 220, collected: false }
        ],
        gate: { x: 1320, y: 220, w: 30, h: 100, unlocked: false }
      }
    ]
  },
  {
    id: 3,
    name: "World 3 • Sweet Cloud Kingdom",
    icon: "☁️",
    subtitle: "Cielo de Nubes Dulces & El Dragón King Gummy Dragon",
    boss: {
      name: "King Gummy Dragon",
      icon: "🐉",
      subtitle: "World 3 Boss • Candy Gummy Sovereign",
      maxHp: 100,
      challenges: [
        {
          type: "listening",
          promptEn: "Listen and identify THIS wool scarf to extinguish dragon fire!",
          audioFile: "assets/kids_audio/keywords/bili_kw_u8_this_wool_scarf.mp3",
          audioText: "This wool scarf",
          options: [
            { id: "scarf", name: "This Wool Scarf", icon: "🧣", correct: true },
            { id: "watch", name: "This Smart Watch", icon: "⌚", correct: false },
            { id: "hat", name: "A Winter Hat", icon: "👒", correct: false }
          ]
        },
        {
          type: "writing",
          promptEn: "Type the place word: S T _ _ E (Where we buy toys)",
          targetWord: "STORE",
          hint: "S T O R E"
        },
        {
          type: "sentence",
          promptEn: "Arrange the polite sentence for the shopkeeper:",
          words: ["I", "would", "like", "to", "buy", "this", "toy"],
          correctSentence: "I would like to buy this toy"
        },
        {
          type: "speaking",
          promptEn: "How much is this beautiful toy?",
          displaySentence: "How much is this beautiful toy?"
        }
      ]
    },
    stages: [
      {
        id: 0,
        title: "Stage 1 • Marshmallow Clouds & Cookie Bridges 🧣",
        promptEn: "Collect THIS wool scarf and jump across chocolate wafers!",
        bgTheme: "clouds",
        requiredItems: ["wool_scarf"],
        checkpointX: 40,
        finishX: 1350,
        platforms: [
          { x: 0, y: 340, w: 220, h: 60, type: 'cloud' },
          { x: 260, y: 290, w: 130, h: 30, type: 'candy_cookie' },
          { x: 430, y: 240, w: 120, h: 35, type: 'cloud_bounce' },
          { x: 590, y: 270, w: 120, h: 30, type: 'candy_cookie' },
          { x: 750, y: 230, w: 130, h: 30, type: 'candy_cookie' },
          { x: 930, y: 280, w: 110, h: 35, type: 'cloud_bounce' },
          { x: 1090, y: 320, w: 260, h: 80, type: 'cloud' }
        ],
        mysteryBlocks: [
          {
            x: 310, y: 190, w: 42, h: 42, content: "MUCH", hit: false, bumpY: 0, icon: "🪙",
            challenge: {
              title: "Shopping Mystery Block: HOW MUCH",
              promptEn: "To ask the PRICE of a toy or souvenir at a shop, what question do we use?",
              audioText: "How much is it?",
              options: [
                { text: "🪙 How MUCH is it? (Asking for price)", correct: true },
                { text: "⭐ How MANY is it? (Counting objects)", correct: false }
              ],
              rule: "'How much' is used to ask for the price of something!"
            }
          },
          {
            x: 630, y: 170, w: 42, h: 42, content: "MANY", hit: false, bumpY: 0, icon: "⭐",
            challenge: {
              title: "Shopping Mystery Block: HOW MANY",
              promptEn: "To COUNT how many toys or cookies are on the shelf, what do we ask?",
              audioText: "How many toys are there?",
              options: [
                { text: "⭐ How MANY toys? (Countable count)", correct: true },
                { text: "🪙 How MUCH toys? (Incorrect for counting)", correct: false }
              ],
              rule: "'How many' is used to count quantities of countable items!"
            }
          }
        ],
        gatekeeperChallenge: {
          title: "Stage 1 Gatekeeper Checkpoint",
          promptEn: "Which warm winter accessory did Barnaby find in the clouds?",
          audioFile: "assets/kids_audio/keywords/bili_kw_u8_this_wool_scarf.mp3",
          audioText: "This wool scarf",
          options: [
            { text: "🧣 This wool scarf keeps me cozy", correct: true },
            { text: "🧢 This beach hat keeps me cozy", correct: false }
          ]
        },
        items: [
          { id: "wool_scarf", x: 790, y: 170, name: "This Wool Scarf", icon: "🧣", collected: false }
        ],
        coins: [
          { x: 300, y: 240, collected: false },
          { x: 480, y: 170, collected: false },
          { x: 640, y: 210, collected: false },
          { x: 970, y: 210, collected: false }
        ],
        gate: { x: 1260, y: 220, w: 30, h: 100, unlocked: false }
      },
      {
        id: 1,
        title: "Stage 2 • 👑 GRAND FINALE: King Gummy Dragon 🐉🏆",
        promptEn: "Conquer the Grand Candy Dragon and claim the Cambridge Trophy!",
        bgTheme: "clouds",
        isBossArena: true,
        checkpointX: 60,
        finishX: 1400,
        platforms: [
          { x: 0, y: 340, w: 300, h: 60, type: 'cloud' },
          { x: 340, y: 270, w: 140, h: 30, type: 'candy_cookie' },
          { x: 520, y: 220, w: 130, h: 35, type: 'cloud_bounce' },
          { x: 690, y: 270, w: 140, h: 30, type: 'candy_cookie' },
          { x: 860, y: 340, w: 540, h: 60, type: 'cloud' }
        ],
        mysteryBlocks: [],
        items: [],
        coins: [
          { x: 380, y: 220, collected: false },
          { x: 570, y: 160, collected: false },
          { x: 740, y: 220, collected: false }
        ],
        gate: { x: 1320, y: 220, w: 30, h: 100, unlocked: false }
      }
    ]
  }
];
window.WORLDS_DATA = WORLDS_DATA;

// Active Game Engine Variables
let currentObbyStage = null;
let obbyCanvas = null;
let obbyCtx = null;
let obbyLoopId = null;
let cameraX = 0;
let isObbyRunning = false;
var activeMysteryBlock = null;

// Player Physics Entity
const Player = {
  x: 40,
  y: 260,
  w: 42,
  h: 58,
  vx: 0,
  vy: 0,
  isGrounded: false,
  facing: 'right',
  scaleX: 1,
  scaleY: 1,
  rotation: 0,
  jumpsLeft: 2,
  maxJumps: 2,
  distanceMoved: 0,
  hearts: 3,
  celebratingTimer: 0,
  coinsCollected: 0,
  respawnX: 40,
  respawnY: 260
};
window.Player = Player;

// Boss Entity State
const Boss = {
  active: false,
  x: 1080,
  y: 200,
  w: 120,
  h: 140,
  hp: 100,
  maxHp: 100,
  currentChallengeIndex: 0,
  projectiles: [],
  shootTimer: 0,
  hitFlashes: 0,
  bobTimer: 0,
  defeated: false
};
window.Boss = Boss;

// Particles & FX
let obbyParticles = [];

// Input state
var inputKeys = { left: false, right: false, jump: false };
window.inputKeys = inputKeys;

// Sound instance already initialized in global scope
// Sentence Builder dynamic state
let currentSentenceWords = [];
let availableWordBank = [];

// ============================================================================
// ENGINE INITIALIZATION & WORLD NAVIGATION
// ============================================================================
function startObbyEngine() {
  obbyCanvas = document.getElementById('obbyCanvas');
  if (!obbyCanvas) return;
  obbyCtx = obbyCanvas.getContext('2d');
  obbyCtx.imageSmoothingEnabled = false;

  applyHero(currentHeroId);
  updateHeroSelectionUI(currentHeroId);
  updateWorldNavUI();
  loadCurrentWorldStage();
  setupObbyEventListeners();

  if (!isObbyRunning) {
    isObbyRunning = true;
    requestAnimationFrame(obbyGameLoop);
  }
}

function updateWorldNavUI() {
  unlockedWorlds = parseInt(localStorage.getItem('bili_unlocked_worlds') || '1', 10);
  for (let w = 1; w <= 3; w++) {
    const tab = document.getElementById(`tabWorld${w}`);
    const badge = document.getElementById(`badgeWorld${w}`);
    if (tab && badge) {
      if (w <= unlockedWorlds) {
        tab.classList.remove('locked');
        badge.textContent = "UNLOCKED";
        badge.style.background = "#059669";
        badge.style.color = "#ffffff";
      } else {
        tab.classList.add('locked');
        badge.textContent = "🔒 LOCKED";
        badge.style.background = "#475569";
        badge.style.color = "#cbd5e1";
      }

      if (w === currentWorldId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }
  }
}

function selectWorld(worldNum) {
  unlockedWorlds = parseInt(localStorage.getItem('bili_unlocked_worlds') || '1', 10);
  if (worldNum > unlockedWorlds) {
    sfx.playError();
    speakEnglish("Defeat the current world boss to unlock this world!", "guide");
    return;
  }
  currentWorldId = worldNum;
  currentStageIndex = 0;
  localStorage.setItem('bili_current_world', worldNum.toString());
  updateWorldNavUI();
  loadCurrentWorldStage();
}

function loadCurrentWorldStage() {
  const world = WORLDS_DATA.find(w => w.id === currentWorldId) || WORLDS_DATA[0];
  const stage = world.stages[currentStageIndex] || world.stages[0];
  currentObbyStage = stage;
  window.currentObbyStage = currentObbyStage;

  // Reset player
  Player.x = stage.checkpointX;
  Player.y = 260;
  Player.vx = 0;
  Player.vy = 0;
  Player.jumpsLeft = Player.maxJumps;
  Player.respawnX = stage.checkpointX;
  Player.respawnY = 260;
  Player.hearts = 3;
  cameraX = 0;

  // Reset stage items & blocks
  if (stage.items) stage.items.forEach(it => it.collected = false);
  if (stage.coins) stage.coins.forEach(c => c.collected = false);
  if (stage.mysteryBlocks) stage.mysteryBlocks.forEach(b => { b.hit = false; b.bumpY = 0; });
  if (stage.gate) stage.gate.unlocked = false;

  // Setup Boss if Boss Arena
  const bossHud = document.getElementById('bossHudBar');
  const obbyHud = document.getElementById('obbyHudBar');

  if (stage.isBossArena) {
    Boss.active = true;
    Boss.hp = world.boss.maxHp;
    Boss.maxHp = world.boss.maxHp;
    Boss.currentChallengeIndex = 0;
    Boss.projectiles = [];
    Boss.shootTimer = 0;
    Boss.hitFlashes = 0;
    Boss.defeated = false;

    if (bossHud) bossHud.style.display = 'block';
    if (obbyHud) obbyHud.style.display = 'none';

    document.getElementById('bossNameTitle').textContent = world.boss.name;
    document.getElementById('bossAvatarIcon').textContent = world.boss.icon;
    document.getElementById('bossSubtitle').textContent = world.boss.subtitle;
    updateBossHpBarUI();
  } else {
    Boss.active = false;
    if (bossHud) bossHud.style.display = 'none';
    if (obbyHud) obbyHud.style.display = 'flex';
  }

  // Update Headers
  document.getElementById('obbyStageTitle').textContent = `${world.icon} ${stage.title}`;
  document.getElementById('obbyGatePromptEn').textContent = `🎯 Mission: "${stage.promptEn}"`;
  document.getElementById('obbyCoinsBadge').textContent = `🪙 Coins: ${Player.coinsCollected}`;

  updateObbyHudChecklist();
  updatePlayerHeartsUI();
}

function updateBossHpBarUI() {
  const hpFill = document.getElementById('bossHpFill');
  const hpText = document.getElementById('bossHpText');
  if (hpFill && hpText) {
    const pct = Math.max(0, Math.min(100, (Boss.hp / Boss.maxHp) * 100));
    hpFill.style.width = `${pct}%`;
    hpText.textContent = `BOSS HP: ${Boss.hp} / ${Boss.maxHp}`;
  }
}

function updatePlayerHeartsUI() {
  const heartsEl = document.getElementById('playerHeartsDisplay');
  if (heartsEl) {
    heartsEl.textContent = '❤️'.repeat(Math.max(0, Player.hearts));
  }
}

function updateObbyHudChecklist() {
  const container = document.getElementById('obbyItemsChecklist');
  if (!container || !currentObbyStage) return;

  if (currentObbyStage.isBossArena) {
    container.innerHTML = `<span style="color:#f472b6; font-weight:800;">👑 BOSS ARENA ACTIVE</span>`;
    return;
  }

  if (currentObbyStage.requiredItems && currentObbyStage.requiredItems.length > 0) {
    const html = currentObbyStage.items.map(it => {
      const isDone = it.collected;
      return `<span style="margin-right:8px; font-weight:700; color:${isDone ? '#34d399' : '#fef08a'};">
        ${isDone ? '✅' : '⬜'} ${it.icon} ${it.name}
      </span>`;
    }).join('');
    container.innerHTML = html;
  } else if (currentObbyStage.hasTerminal) {
    container.innerHTML = `<span style="color:#38bdf8; font-weight:700;">💻 Password Terminal Active</span>`;
  } else {
    container.innerHTML = `<span style="color:#38bdf8; font-weight:700;">Explore & Reach Goal</span>`;
  }

  const gateBadge = document.getElementById('obbyGateStatusBadge');
  if (gateBadge && currentObbyStage.gate) {
    if (currentObbyStage.gate.unlocked) {
      gateBadge.innerHTML = "🔓 Gate: OPEN!";
      gateBadge.style.color = "#34d399";
    } else {
      gateBadge.innerHTML = "🔒 Gate: LOCKED";
      gateBadge.style.color = "#fca5a5";
    }
  }
}

function restartObbyStage() {
  loadCurrentWorldStage();
  sfx.playPop();
}

function tryPlayerJump() {
  if (Player.jumpsLeft > 0) {
    Player.vy = -11.0;
    Player.jumpsLeft--;
    Player.scaleX = 0.8;
    Player.scaleY = 1.25;
    sfx.playJump();
    createJumpDust(Player.x + Player.w / 2, Player.y + Player.h);
  }
}

function setupObbyEventListeners() {
  const btnLeft = document.getElementById('touchBtnLeft');
  const btnRight = document.getElementById('touchBtnRight');
  const btnJump = document.getElementById('touchBtnJump');

  if (btnLeft && !btnLeft._bound) {
    btnLeft._bound = true;
    const setL = (v) => { inputKeys.left = v; };
    btnLeft.addEventListener('mousedown', () => setL(true));
    btnLeft.addEventListener('mouseup', () => setL(false));
    btnLeft.addEventListener('touchstart', (e) => { e.preventDefault(); setL(true); });
    btnLeft.addEventListener('touchend', (e) => { e.preventDefault(); setL(false); });
  }

  if (btnRight && !btnRight._bound) {
    btnRight._bound = true;
    const setR = (v) => { inputKeys.right = v; };
    btnRight.addEventListener('mousedown', () => setR(true));
    btnRight.addEventListener('mouseup', () => setR(false));
    btnRight.addEventListener('touchstart', (e) => { e.preventDefault(); setR(true); });
    btnRight.addEventListener('touchend', (e) => { e.preventDefault(); setR(false); });
  }

  if (btnJump && !btnJump._bound) {
    btnJump._bound = true;
    btnJump.addEventListener('mousedown', () => tryPlayerJump());
    btnJump.addEventListener('touchstart', (e) => { e.preventDefault(); tryPlayerJump(); });
  }

  if (!window._obbyKeysBound) {
    window._obbyKeysBound = true;
    window.addEventListener('keydown', (e) => {
      // 1. Terminal modal active
      const termModal = document.getElementById('obbyTerminalModal');
      if (termModal && termModal.style.display === 'flex') {
        if (e.key === 'Escape') {
          closeTerminalModal();
          return;
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          submitTerminalWord();
          return;
        }
        if (e.key === 'Backspace') {
          if (document.activeElement !== document.getElementById('terminalPhysicalInput')) {
            e.preventDefault();
            pressTerminalDelete();
          }
          return;
        }
        if (/^[a-zA-Z]$/.test(e.key)) {
          if (document.activeElement !== document.getElementById('terminalPhysicalInput')) {
            e.preventDefault();
            pressTerminalKey(e.key.toUpperCase());
          }
          return;
        }
        return;
      }

      // 2. Mystery block modal or gatekeeper modal active
      if (document.getElementById('obbyMysteryModal')?.style.display === 'flex') {
        if (e.key === 'Escape') closeMysteryBlockModal();
        return;
      }
      if (document.getElementById('obbyGatekeeperModal')?.style.display === 'flex') {
        if (e.key === 'Escape') closeGatekeeperModal();
        return;
      }

      // 3. Boss challenge modal active
      const bossModal = document.getElementById('bossChallengeModal');
      if (bossModal && bossModal.style.display === 'flex') {
        const areaWriting = document.getElementById('challengeWritingArea');
        if (areaWriting && areaWriting.style.display === 'block') {
          if (e.key === 'Enter') {
            e.preventDefault();
            submitBossWriting();
            return;
          }
          if (e.key === 'Backspace') {
            if (document.activeElement !== document.getElementById('bossPhysicalInput')) {
              e.preventDefault();
              pressBossWritingDel();
            }
            return;
          }
          if (/^[a-zA-Z]$/.test(e.key)) {
            if (document.activeElement !== document.getElementById('bossPhysicalInput')) {
              e.preventDefault();
              pressBossWritingKey(e.key.toUpperCase());
            }
            return;
          }
        }
        return;
      }

      // 4. In-Game Movement
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') inputKeys.left = true;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') inputKeys.right = true;
      if (e.key === 'ArrowUp' || e.key === ' ' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        tryPlayerJump();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') inputKeys.left = false;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') inputKeys.right = false;
    });
  }
}

// ============================================================================
// BOSS COMBAT CHALLENGE SYSTEM (ENGLISH AS THE WEAPON)
// ============================================================================
function triggerBossEncounter() {
  const world = WORLDS_DATA.find(w => w.id === currentWorldId) || WORLDS_DATA[0];
  const challenge = world.boss.challenges[Boss.currentChallengeIndex];
  if (!challenge || Boss.defeated) return;

  const modal = document.getElementById('bossChallengeModal');
  if (!modal) return;
  modal.style.display = 'flex';

  const pill = document.getElementById('challengePhasePill');
  const icon = document.getElementById('challengePhaseIcon');
  const name = document.getElementById('challengePhaseName');
  const prompt = document.getElementById('challengeBossPrompt');
  const feedback = document.getElementById('bossChallengeFeedback');
  feedback.textContent = '';

  const areaListening = document.getElementById('challengeListeningArea');
  const areaWriting = document.getElementById('challengeWritingArea');
  const areaSentence = document.getElementById('challengeSentenceArea');
  const areaSpeaking = document.getElementById('challengeSpeakingArea');
  const audioRow = document.getElementById('challengeAudioRow');

  areaListening.style.display = 'none';
  areaWriting.style.display = 'none';
  areaSentence.style.display = 'none';
  areaSpeaking.style.display = 'none';
  audioRow.style.display = 'none';

  if (challenge.type === 'listening') {
    pill.className = "challenge-phase-pill phase-listening";
    icon.textContent = "🎧";
    name.textContent = "Challenge 1: Listening Energy Blast";
    prompt.textContent = challenge.promptEn;
    audioRow.style.display = 'block';
    areaListening.style.display = 'grid';

    areaListening.innerHTML = challenge.options.map((opt, idx) => `
      <button class="audio-choice-btn" onclick="selectListeningChoice(${idx})">
        <span class="audio-choice-icon">${opt.icon}</span>
        <span>${opt.name}</span>
      </button>
    `).join('');

    playBossChallengeAudio();

  } else if (challenge.type === 'writing') {
    pill.className = "challenge-phase-pill phase-writing";
    icon.textContent = "⌨️";
    name.textContent = "Challenge 2: Keyword Spell Explosion";
    prompt.textContent = challenge.promptEn;
    areaWriting.style.display = 'block';

    window._bossCurrentTargetWord = challenge.targetWord;
    window._bossTypedWord = "";
    updateBossWritingDisplay();

    const inp = document.getElementById('bossPhysicalInput');
    if (inp) {
      inp.value = "";
      setTimeout(() => inp.focus(), 60);
    }

    renderBossWritingKeypad();

  } else if (challenge.type === 'sentence') {
    pill.className = "challenge-phase-pill phase-sentence";
    icon.textContent = "🧩";
    name.textContent = "Challenge 3: Sentence Combo Strike";
    prompt.textContent = challenge.promptEn;
    areaSentence.style.display = 'block';

    window._bossCorrectSentence = challenge.correctSentence;
    currentSentenceWords = [];
    availableWordBank = [...challenge.words].sort(() => Math.random() - 0.5);

    renderBossSentenceUI();

  } else if (challenge.type === 'speaking') {
    pill.className = "challenge-phase-pill phase-speaking";
    icon.textContent = "🎙️";
    name.textContent = "Challenge 4: Pronunciation Final Finisher";
    prompt.textContent = "Unleash Barnaby's Ultimate Finisher by saying:";
    areaSpeaking.style.display = 'block';

    document.getElementById('bossSpeakingPrompt').textContent = `"${challenge.displaySentence}"`;
    speakEnglish(challenge.displaySentence, 'guide');
  }
}

function playBossChallengeAudio() {
  const world = WORLDS_DATA.find(w => w.id === currentWorldId) || WORLDS_DATA[0];
  const challenge = world.boss.challenges[Boss.currentChallengeIndex];
  if (challenge && challenge.audioFile) {
    const snd = new Audio(challenge.audioFile);
    snd.playbackRate = 1.0;
    snd.play().catch(() => {
      speakEnglish(challenge.audioText, 'guide');
    });
  } else if (challenge && challenge.audioText) {
    speakEnglish(challenge.audioText, 'guide');
  }
}

function selectListeningChoice(idx) {
  const world = WORLDS_DATA.find(w => w.id === currentWorldId) || WORLDS_DATA[0];
  const challenge = world.boss.challenges[Boss.currentChallengeIndex];
  const chosen = challenge.options[idx];

  if (chosen && chosen.correct) {
    executeBossAttack(25, "✨ Correct! Barnaby fires a Radiant Energy Blast!");
  } else {
    sfx.playError();
    document.getElementById('bossChallengeFeedback').innerHTML = `<span style="color:#f87171;">Oops! Listen closely and try again!</span>`;
    playBossChallengeAudio();
  }
}

function updateBossWritingDisplay() {
  const disp = document.getElementById('bossWritingDisplay');
  if (!disp) return;
  const target = window._bossCurrentTargetWord || "MUCH";
  const typed = window._bossTypedWord || "";

  let html = "";
  for (let i = 0; i < target.length; i++) {
    const ch = typed[i] || "";
    html += `<span class="terminal-slot ${ch ? 'filled' : ''}">${ch || '_'}</span>`;
  }
  disp.innerHTML = html;
}

function renderBossWritingKeypad() {
  const container = document.getElementById('bossWritingKeypad');
  if (!container) return;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let html = letters.map(l => `<button type="button" class="terminal-key" onclick="pressBossWritingKey('${l}')">${l}</button>`).join('');
  html += `<button type="button" class="terminal-key key-del" onclick="pressBossWritingDel()" title="Delete">⌫</button>`;
  container.innerHTML = html;
}

function pressBossWritingKey(char) {
  if (!window._bossTypedWord) window._bossTypedWord = "";
  const targetLen = (window._bossCurrentTargetWord || "MUCH").length;
  if (window._bossTypedWord.length < targetLen) {
    window._bossTypedWord += char.toUpperCase();
    const inp = document.getElementById('bossPhysicalInput');
    if (inp) inp.value = window._bossTypedWord;
    updateBossWritingDisplay();
    sfx.playPop();
  }
}

function pressBossWritingDel() {
  if (window._bossTypedWord && window._bossTypedWord.length > 0) {
    window._bossTypedWord = window._bossTypedWord.slice(0, -1);
    const inp = document.getElementById('bossPhysicalInput');
    if (inp) inp.value = window._bossTypedWord;
    updateBossWritingDisplay();
    sfx.playPop();
  }
}

function clearBossWriting() {
  window._bossTypedWord = "";
  const inp = document.getElementById('bossPhysicalInput');
  if (inp) inp.value = "";
  updateBossWritingDisplay();
  sfx.playPop();
}

function handleBossWritingInput(e) {
  const targetLen = (window._bossCurrentTargetWord || "MUCH").length;
  window._bossTypedWord = e.target.value.trim().toUpperCase().slice(0, targetLen);
  e.target.value = window._bossTypedWord;
  updateBossWritingDisplay();
}

function handleBossWritingKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitBossWriting();
  }
}

function submitBossWriting() {
  const typed = (window._bossTypedWord || document.getElementById('bossPhysicalInput')?.value || "").trim().toUpperCase();
  const target = (window._bossCurrentTargetWord || "").toUpperCase();

  if (typed === target) {
    executeBossAttack(25, "💥 BOOM! Keyword Spell triggers a Plasma Blast!");
  } else {
    sfx.playError();
    document.getElementById('bossChallengeFeedback').innerHTML = `<span style="color:#f87171; font-weight:800;">Try again! Hint: Begins with '${target[0]}'...</span>`;
  }
}

function renderBossSentenceUI() {
  const disp = document.getElementById('bossSentenceDisplay');
  const bank = document.getElementById('bossWordBank');
  if (!disp || !bank) return;

  disp.innerHTML = currentSentenceWords.map((w, idx) => `
    <span class="word-chip in-sentence" onclick="removeWordFromSentence(${idx})">${w} ✕</span>
  `).join('');

  bank.innerHTML = availableWordBank.map((w, idx) => `
    <span class="word-chip" onclick="addWordToSentence(${idx})">${w}</span>
  `).join('');
}

function addWordToSentence(idx) {
  const w = availableWordBank.splice(idx, 1)[0];
  currentSentenceWords.push(w);
  renderBossSentenceUI();
  sfx.playPop();
}

function removeWordFromSentence(idx) {
  const w = currentSentenceWords.splice(idx, 1)[0];
  availableWordBank.push(w);
  renderBossSentenceUI();
  sfx.playPop();
}

function resetBossSentence() {
  const world = WORLDS_DATA.find(w => w.id === currentWorldId) || WORLDS_DATA[0];
  const challenge = world.boss.challenges[Boss.currentChallengeIndex];
  currentSentenceWords = [];
  availableWordBank = [...challenge.words].sort(() => Math.random() - 0.5);
  renderBossSentenceUI();
  sfx.playPop();
}

function submitBossSentence() {
  const userSent = currentSentenceWords.join(' ');
  const correct = window._bossCorrectSentence;

  if (userSent.toLowerCase().trim() === correct.toLowerCase().trim()) {
    executeBossAttack(25, "⚡ Star Comet Combo breaks the monster's defense!");
  } else {
    sfx.playError();
    document.getElementById('bossChallengeFeedback').innerHTML = `<span style="color:#f87171;">Sentence order incorrect. Listen and try again!</span>`;
    speakEnglish(correct, 'guide');
  }
}

function triggerSpeakingFinisher() {
  const world = WORLDS_DATA.find(w => w.id === currentWorldId) || WORLDS_DATA[0];
  const challenge = world.boss.challenges[Boss.currentChallengeIndex];
  const btn = document.getElementById('btnBossFinisher');
  if (btn) btn.classList.add('recording');

  sfx.playLaserBeep();
  setTimeout(() => {
    if (btn) btn.classList.remove('recording');
    executeBossAttack(25, "🏆 CRITICAL HIT! Barnaby executes the Ultimate Victory Attack!");
  }, 900);
}

function executeBossAttack(dmg, msg) {
  sfx.playSuccess();
  Boss.hp = Math.max(0, Boss.hp - dmg);
  Boss.hitFlashes = 20;
  updateBossHpBarUI();

  // Star fx
  for (let i = 0; i < 25; i++) {
    createJumpDust(Boss.x + Boss.w / 2, Boss.y + Boss.h / 2, true);
  }

  const feedback = document.getElementById('bossChallengeFeedback');
  if (feedback) feedback.innerHTML = `<span style="color:#34d399;">${msg}</span>`;

  setTimeout(() => {
    const modal = document.getElementById('bossChallengeModal');
    if (modal) modal.style.display = 'none';

    if (Boss.hp <= 0) {
      handleBossDefeat();
    } else {
      Boss.currentChallengeIndex++;
    }
  }, 1200);
}

function handleBossDefeat() {
  Boss.defeated = true;
  sfx.playApplause();

  // Open victory modal
  const vicModal = document.getElementById('worldVictoryModal');
  const title = document.getElementById('worldVictoryTitle');
  const desc = document.getElementById('worldVictoryDesc');
  const btnNext = document.getElementById('btnNextWorldUnlock');

  if (vicModal) {
    vicModal.style.display = 'flex';
    title.textContent = `WORLD ${currentWorldId} CONQUERED! 🏆`;
    desc.textContent = `You defeated ${WORLDS_DATA[currentWorldId - 1].boss.name} with your English mastery!`;

    // Unlock next world
    if (unlockedWorlds <= currentWorldId && currentWorldId < 3) {
      unlockedWorlds = currentWorldId + 1;
      localStorage.setItem('bili_unlocked_worlds', unlockedWorlds.toString());
    }
    updateWorldNavUI();
    AppState.addStars(50);
  }
}

function proceedToNextWorld() {
  const vicModal = document.getElementById('worldVictoryModal');
  if (vicModal) vicModal.style.display = 'none';

  if (currentWorldId < 3) {
    selectWorld(currentWorldId + 1);
  } else {
    // Loop or reset to World 1
    selectWorld(1);
    speakEnglish("Congratulations! You completed all Super Platformer Worlds!", "guide");
  }
}

// ============================================================================
// TERMINAL MODAL KEYPAD (STAGES WITH SECURITY TERMINALS)
// ============================================================================
function openTerminalGate(targetWord, promptEn, promptEs) {
  const modal = document.getElementById('obbyTerminalModal');
  if (!modal) return;
  // Guard against multi-frame re-execution while open
  if (modal.style.display === 'flex') return;

  modal.style.display = 'flex';

  // Freeze player movement
  inputKeys.left = false;
  inputKeys.right = false;
  Player.vx = 0;

  window._currentTerminalTargetWord = targetWord;
  window._currentTerminalTyped = "";

  document.getElementById('terminalTitle').textContent = "Security Keypad Terminal";
  document.getElementById('terminalPromptEn').textContent = promptEn;
  document.getElementById('terminalFeedbackMsg').innerHTML = "";

  updateTerminalDisplay();
  renderTerminalKeypad();

  setTimeout(() => {
    const inp = document.getElementById('terminalPhysicalInput');
    if (inp) {
      inp.value = "";
      inp.focus();
    }
  }, 60);

  listenTerminalHint();
}

function listenTerminalHint() {
  const stage = currentObbyStage;
  if (stage && stage.terminalAudio) {
    const snd = new Audio(stage.terminalAudio);
    snd.playbackRate = 1.0;
    snd.play().catch(() => {
      speakEnglish(stage.terminalAudioText || window._currentTerminalTargetWord || "jacket", 'guide');
    });
  } else {
    speakEnglish(window._currentTerminalTargetWord || "jacket", 'guide');
  }
}

function updateTerminalDisplay() {
  const disp = document.getElementById('terminalInputDisplay');
  if (!disp) return;
  const target = window._currentTerminalTargetWord || "JACKET";
  const typed = window._currentTerminalTyped || "";

  let html = "";
  for (let i = 0; i < target.length; i++) {
    const ch = typed[i] || "";
    html += `<span class="terminal-slot ${ch ? 'filled' : ''}">${ch || '_'}</span>`;
  }
  disp.innerHTML = html;
}

function renderTerminalKeypad() {
  const container = document.getElementById('terminalKeypadContainer');
  if (!container) return;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let html = letters.map(l => `<button type="button" class="terminal-key" onclick="pressTerminalKey('${l}')">${l}</button>`).join('');
  html += `<button type="button" class="terminal-key key-del" onclick="pressTerminalDelete()" title="Delete">⌫</button>`;
  container.innerHTML = html;
}

function pressTerminalKey(char) {
  if (!window._currentTerminalTyped) window._currentTerminalTyped = "";
  const targetLen = (window._currentTerminalTargetWord || "JACKET").length;
  if (window._currentTerminalTyped.length < targetLen) {
    window._currentTerminalTyped += char.toUpperCase();
    const inp = document.getElementById('terminalPhysicalInput');
    if (inp) inp.value = window._currentTerminalTyped;
    updateTerminalDisplay();
    sfx.playPop();
  }
}

function pressTerminalDelete() {
  if (window._currentTerminalTyped && window._currentTerminalTyped.length > 0) {
    window._currentTerminalTyped = window._currentTerminalTyped.slice(0, -1);
    const inp = document.getElementById('terminalPhysicalInput');
    if (inp) inp.value = window._currentTerminalTyped;
    updateTerminalDisplay();
    sfx.playPop();
  }
}

function clearTerminalWord() {
  window._currentTerminalTyped = "";
  const inp = document.getElementById('terminalPhysicalInput');
  if (inp) inp.value = "";
  updateTerminalDisplay();
  sfx.playPop();
}

function handleTerminalInputChange(e) {
  const val = e.target.value.trim().toUpperCase();
  const targetLen = (window._currentTerminalTargetWord || "JACKET").length;
  window._currentTerminalTyped = val.slice(0, targetLen);
  e.target.value = window._currentTerminalTyped;
  updateTerminalDisplay();
}

function handleTerminalInputKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitTerminalWord();
  }
}

function closeTerminalModal() {
  const modal = document.getElementById('obbyTerminalModal');
  if (modal) modal.style.display = 'none';
  if (currentObbyStage && currentObbyStage.hasTerminal) {
    if (Math.abs(Player.x - currentObbyStage.terminalX) < 60) {
      Player.x = currentObbyStage.terminalX - 65;
      Player.vx = -2;
    }
  }
}

function submitTerminalWord() {
  const typed = (window._currentTerminalTyped || document.getElementById('terminalPhysicalInput')?.value || "").trim().toUpperCase();
  const target = (window._currentTerminalTargetWord || "").toUpperCase();

  if (typed === target) {
    sfx.playSuccess();
    AppState.addStars(20);
    Player.coinsCollected += 20;
    if (currentObbyStage && currentObbyStage.gate) {
      currentObbyStage.gate.unlocked = true;
      updateObbyHudChecklist();
    }
    document.getElementById('obbyCoinsBadge').textContent = `🪙 Coins: ${Player.coinsCollected}`;
    document.getElementById('terminalFeedbackMsg').innerHTML = `<span style="color:#34d399; font-size:1.1rem; font-weight:800;">✅ ACCESS GRANTED! Gate Opening...</span>`;
    
    setTimeout(() => {
      closeTerminalModal();
      showObbyFloatingBanner("🔓 GATE UNLOCKED! RUN TO THE PIPE!");
    }, 750);
  } else {
    sfx.playError();
    document.getElementById('terminalFeedbackMsg').innerHTML = `<span style="color:#f87171; font-weight:800;">❌ Incorrect password. Hint: Begins with '${target[0]}'!</span>`;
    const card = document.querySelector('#obbyTerminalModal .terminal-card');
    if (card) {
      card.classList.add('shake-anim');
      setTimeout(() => card.classList.remove('shake-anim'), 400);
    }
  }
}

// ============================================================================
// MYSTERY QUESTION BLOCK [ ? ] SYSTEM (PEDAGOGICAL RETENTION)
// ============================================================================

function openMysteryBlockModal(block) {
  const modal = document.getElementById('obbyMysteryModal');
  if (!modal || !block.challenge) return;
  if (modal.style.display === 'flex') return;

  activeMysteryBlock = block;
  block.isPrompting = true;
  modal.style.display = 'flex';

  // Freeze player velocity cleanly
  inputKeys.left = false;
  inputKeys.right = false;
  Player.vx = 0;
  Player.vy = 0;

  document.getElementById('mysteryModalTitle').textContent = block.challenge.title || "Mystery Question Block [ ? ]";
  document.getElementById('mysteryModalPromptEn').textContent = block.challenge.promptEn;
  document.getElementById('mysteryModalFeedback').innerHTML = "";

  const optsContainer = document.getElementById('mysteryModalOptions');
  optsContainer.innerHTML = block.challenge.options.map((opt, idx) => `
    <button type="button" class="mystery-choice-card" onclick="selectMysteryChoice(${idx})">
      <span style="font-size:1.8rem;">${opt.icon || '⭐'}</span>
      <span>${opt.text}</span>
    </button>
  `).join('');

  playMysteryModalAudio();
}

function closeMysteryBlockModal() {
  const modal = document.getElementById('obbyMysteryModal');
  if (modal) modal.style.display = 'none';
  if (activeMysteryBlock) {
    activeMysteryBlock.isPrompting = false;
    activeMysteryBlock = null;
  }
}

function closeGatekeeperModal() {
  const modal = document.getElementById('obbyGatekeeperModal');
  if (modal) modal.style.display = 'none';
}

function playMysteryModalAudio() {
  if (!activeMysteryBlock || !activeMysteryBlock.challenge) return;
  const ch = activeMysteryBlock.challenge;
  if (ch.audioFile) {
    const snd = new Audio(ch.audioFile);
    snd.playbackRate = 1.0;
    snd.play().catch(() => {
      speakEnglish(ch.audioText || ch.promptEn, 'guide');
    });
  } else {
    speakEnglish(ch.audioText || ch.promptEn, 'guide');
  }
}

function selectMysteryChoice(idx) {
  if (!activeMysteryBlock || !activeMysteryBlock.challenge) return;
  const ch = activeMysteryBlock.challenge;
  const chosen = ch.options[idx];
  const cards = document.querySelectorAll('#mysteryModalOptions .mystery-choice-card');
  const card = cards[idx];

  if (chosen && chosen.correct) {
    sfx.playSuccess();
    if (card) card.classList.add('correct');
    AppState.addStars(15);
    Player.coinsCollected += 15;
    document.getElementById('obbyCoinsBadge').textContent = `🪙 Coins: ${Player.coinsCollected}`;
    createCoinSparkle(activeMysteryBlock.x + activeMysteryBlock.w / 2, activeMysteryBlock.y);

    document.getElementById('mysteryModalFeedback').innerHTML = `<span style="color:#34d399; font-size:1.05rem;">✨ EXCELLENT! ${ch.rule || 'Great job!'} (+15 ⭐)</span>`;

    activeMysteryBlock.hit = true;
    activeMysteryBlock.solved = true;
    activeMysteryBlock.isPrompting = false;

    setTimeout(() => {
      const modal = document.getElementById('obbyMysteryModal');
      if (modal) modal.style.display = 'none';
      const revealedWord = activeMysteryBlock ? activeMysteryBlock.content : 'KEYWORD';
      activeMysteryBlock = null;
      showObbyFloatingBanner(`⭐ Solved: "${revealedWord}"!`);
    }, 1100);
  } else {
    sfx.playError();
    if (card) {
      card.classList.add('wrong');
      card.classList.add('shake-anim');
      setTimeout(() => card.classList.remove('shake-anim'), 400);
    }
    document.getElementById('mysteryModalFeedback').innerHTML = `<span style="color:#f87171;">Listen closely and try again! Hint: ${ch.rule || ''}</span>`;
    playMysteryModalAudio();
  }
}

// ============================================================================
// GATEKEEPER CHECKPOINT SYSTEM (ACTIVE KNOWLEDGE CHECK BEFORE WARP)
// ============================================================================
function openGatekeeperChallenge() {
  const modal = document.getElementById('obbyGatekeeperModal');
  const stage = currentObbyStage;
  if (!modal || !stage || !stage.gatekeeperChallenge) {
    if (stage && stage.gate) {
      stage.gate.unlocked = true;
      updateObbyHudChecklist();
    }
    return;
  }

  if (modal.style.display === 'flex') return;

  modal.style.display = 'flex';
  inputKeys.left = false;
  inputKeys.right = false;
  Player.vx = 0;

  const ch = stage.gatekeeperChallenge;
  document.getElementById('gatekeeperModalTitle').textContent = ch.title || "Gatekeeper Checkpoint Challenge";
  document.getElementById('gatekeeperModalPromptEn').textContent = ch.promptEn;
  document.getElementById('gatekeeperModalFeedback').innerHTML = "";

  const optsContainer = document.getElementById('gatekeeperModalOptions');
  optsContainer.innerHTML = ch.options.map((opt, idx) => `
    <button type="button" class="mystery-choice-card" style="text-align:left; flex-direction:row; justify-content:flex-start; padding:12px 18px;" onclick="selectGatekeeperChoice(${idx})">
      <span style="font-size:1.5rem; margin-right:10px;">${opt.icon || '🔑'}</span>
      <span style="font-size:1.05rem;">${opt.text}</span>
    </button>
  `).join('');

  playGatekeeperAudio();
}

function playGatekeeperAudio() {
  const stage = currentObbyStage;
  if (!stage || !stage.gatekeeperChallenge) return;
  const ch = stage.gatekeeperChallenge;
  if (ch.audioFile) {
    const snd = new Audio(ch.audioFile);
    snd.playbackRate = 1.0;
    snd.play().catch(() => {
      speakEnglish(ch.audioText || ch.promptEn, 'guide');
    });
  } else {
    speakEnglish(ch.audioText || ch.promptEn, 'guide');
  }
}

function selectGatekeeperChoice(idx) {
  const stage = currentObbyStage;
  if (!stage || !stage.gatekeeperChallenge) return;
  const ch = stage.gatekeeperChallenge;
  const chosen = ch.options[idx];
  const cards = document.querySelectorAll('#gatekeeperModalOptions .mystery-choice-card');
  const card = cards[idx];

  if (chosen && chosen.correct) {
    sfx.playSuccess();
    if (card) card.classList.add('correct');
    AppState.addStars(20);
    if (stage.gate) {
      stage.gate.unlocked = true;
      updateObbyHudChecklist();
    }
    document.getElementById('gatekeeperModalFeedback').innerHTML = `<span style="color:#34d399; font-size:1.1rem; font-weight:800;">🔓 CORRECT! The Warp Pipe is now unlocked! (+20 ⭐)</span>`;

    setTimeout(() => {
      const modal = document.getElementById('obbyGatekeeperModal');
      if (modal) modal.style.display = 'none';
      showObbyFloatingBanner("🔓 GATE UNLOCKED! JUMP IN THE PIPE!");
    }, 1000);
  } else {
    sfx.playError();
    if (card) {
      card.classList.add('wrong');
      card.classList.add('shake-anim');
      setTimeout(() => card.classList.remove('shake-anim'), 400);
    }
    document.getElementById('gatekeeperModalFeedback').innerHTML = `<span style="color:#f87171;">Check the grammar rule and try again!</span>`;
    playGatekeeperAudio();
  }
}

// Particle creators
function createJumpDust(x, y, isDouble = false) {
  for (let i = 0; i < 6; i++) {
    obbyParticles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 3 - (isDouble ? 2 : 1),
      life: 1.0,
      size: Math.random() * 4 + 3,
      color: isDouble ? '#f59e0b' : '#38bdf8'
    });
  }
}

function createCoinSparkle(x, y) {
  for (let i = 0; i < 10; i++) {
    obbyParticles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      life: 1.0,
      size: Math.random() * 4 + 2,
      color: '#fef08a'
    });
  }
}

// ============================================================================
// MAIN 60 FPS GAME LOOP WITH FLUID SPRITE RENDERING & MARIO WORLDS
// ============================================================================
function obbyGameLoop() {
  if (!isObbyRunning) return;

  const canvas = obbyCanvas;
  const ctx = obbyCtx;
  const stage = currentObbyStage;

  if (!canvas || !ctx || !stage) {
    requestAnimationFrame(obbyGameLoop);
    return;
  }

  const now = Date.now();

  // 1. UPDATE PHYSICS (Pausado mientras la pantalla de selección esté activa)
  if (!isHeroSelectOpen) {
  // Horizontal movement
  if (inputKeys.left) {
    Player.vx = -4.8;
    Player.facing = 'left';
    Player.distanceMoved += 4.8;
  } else if (inputKeys.right) {
    Player.vx = 4.8;
    Player.facing = 'right';
    Player.distanceMoved += 4.8;
  } else {
    Player.vx *= 0.75;
  }

  // Gravity
  Player.vy += 0.52;
  if (Player.vy > 12) Player.vy = 12;

  Player.x += Player.vx;
  Player.y += Player.vy;

  // Fluid squash & stretch easing
  Player.scaleX += (1 - Player.scaleX) * 0.15;
  Player.scaleY += (1 - Player.scaleY) * 0.15;
  Player.rotation = Player.vx * 0.02;

  if (Player.celebratingTimer > 0) Player.celebratingTimer--;

  // Camera tracking
  const targetCamX = Player.x - canvas.width * 0.35;
  cameraX += (targetCamX - cameraX) * 0.1;
  if (cameraX < 0) cameraX = 0;
  if (cameraX > (stage.finishX || 1350) - canvas.width + 100) {
    cameraX = (stage.finishX || 1350) - canvas.width + 100;
  }

  // Platform collisions
  Player.isGrounded = false;
  stage.platforms.forEach(p => {
    // Smoothly restore trampoline / mushroom bounce compression
    if (p.compression) {
      p.compression *= 0.72;
      if (p.compression < 0.5) p.compression = 0;
    }

    if (
      Player.x + Player.w > p.x &&
      Player.x < p.x + p.w &&
      Player.y + Player.h >= p.y &&
      Player.y + Player.h <= p.y + p.h + Math.max(8, Player.vy) &&
      Player.vy >= 0
    ) {
      Player.y = p.y - Player.h;
      Player.vy = 0;
      Player.isGrounded = true;
      Player.jumpsLeft = Player.maxJumps;

      if (p.type === 'trampoline') {
        p.compression = 14;
        Player.vy = -16.0; // High bounce
        Player.scaleX = 0.7;
        Player.scaleY = 1.4;
        sfx.playBoing();
        createJumpDust(Player.x + Player.w / 2, Player.y + Player.h, true);
        showObbyFloatingBanner("⚡ SUPER BOING!");
      } else if (p.type.includes('mushroom') || p.type.includes('bounce')) {
        p.compression = 10;
        Player.vy = -14.0;
        Player.scaleX = 0.75;
        Player.scaleY = 1.35;
        sfx.playBoing();
        createJumpDust(Player.x + Player.w / 2, Player.y + Player.h, true);
      }
    }
  });

  // Mystery Blocks [ ? ] collisions
  if (stage.mysteryBlocks) {
    stage.mysteryBlocks.forEach(b => {
      if (
        Player.x + Player.w > b.x &&
        Player.x < b.x + b.w &&
        Player.y <= b.y + b.h &&
        Player.y >= b.y + b.h - 14 &&
        Player.vy < 0
      ) {
        Player.y = b.y + b.h + 2;
        Player.vy = 2.5;
        b.bumpY = -14;
        Player.celebratingTimer = 30;

        if (!b.hit && !b.isPrompting) {
          sfx.playBlockHit();
          if (b.challenge) {
            b.isPrompting = true;
            openMysteryBlockModal(b);
          } else {
            b.hit = true;
            b.solved = true;
            Player.coinsCollected += 10;
            sfx.playCoin();
            createCoinSparkle(b.x + b.w / 2, b.y);
            document.getElementById('obbyCoinsBadge').textContent = `🪙 Coins: ${Player.coinsCollected}`;
            showObbyFloatingBanner(`⭐ Revealed: "${b.content}"!`);
          }
        }
      }
      b.bumpY *= 0.8;
    });
  }

  // Item Collection
  if (stage.items) {
    stage.items.forEach(it => {
      if (!it.collected) {
        const dist = Math.hypot((Player.x + Player.w / 2) - it.x, (Player.y + Player.h / 2) - it.y);
        if (dist < 45) {
          it.collected = true;
          sfx.playChestOpen();
          createCoinSparkle(it.x, it.y);
          speakEnglish(it.name, 'guide');

          const allDone = stage.items.every(i => i.collected);
          if (allDone && stage.gate) {
            sfx.playSuccess();
            showObbyFloatingBanner(`🎉 Collected ${it.name}! Approach the Gate!`);
          }
          updateObbyHudChecklist();
        }
      }
    });
  }

  // Coins Collection
  if (stage.coins) {
    stage.coins.forEach(c => {
      if (!c.collected) {
        const dist = Math.hypot((Player.x + Player.w / 2) - c.x, (Player.y + Player.h / 2) - c.y);
        if (dist < 32) {
          c.collected = true;
          Player.coinsCollected += 5;
          sfx.playCoin();
          createCoinSparkle(c.x, c.y);
          document.getElementById('obbyCoinsBadge').textContent = `🪙 Coins: ${Player.coinsCollected}`;
        }
      }
    });
  }

  // Terminal Trigger (Protected against re-entry)
  if (stage.hasTerminal) {
    const distT = Math.hypot((Player.x + Player.w / 2) - stage.terminalX, (Player.y + Player.h / 2) - stage.terminalY);
    const termModal = document.getElementById('obbyTerminalModal');
    if (distT < 50 && (!stage.gate || !stage.gate.unlocked) && termModal && termModal.style.display !== 'flex') {
      openTerminalGate(stage.terminalTargetWord, stage.terminalPromptEn, "");
    }
  }

  // Boss Arena Logic & Encounter Trigger
  if (stage.isBossArena && Boss.active && !Boss.defeated) {
    Boss.bobTimer += 0.04;
    Boss.shootTimer++;

    // Trigger Boss Challenge when close
    if (Player.x > 800) {
      const modal = document.getElementById('bossChallengeModal');
      if (modal && modal.style.display !== 'flex' && Boss.hp > 0) {
        triggerBossEncounter();
      }
    }

    // Boss shoots dodgable projectile every ~4.5 seconds
    if (Boss.shootTimer > 260) {
      Boss.shootTimer = 0;
      Boss.projectiles.push({
        x: Boss.x - 20,
        y: 320,
        vx: -3.8,
        radius: 14
      });
      sfx.playLaserBeep();
    }

    // Update projectiles
    for (let i = Boss.projectiles.length - 1; i >= 0; i--) {
      const pr = Boss.projectiles[i];
      pr.x += pr.vx;

      // Check collision with player
      if (
        Player.x + Player.w > pr.x - pr.radius &&
        Player.x < pr.x + pr.radius &&
        Player.y + Player.h > pr.y - pr.radius &&
        Player.y < pr.y + pr.radius
      ) {
        // Player hit by obstacle
        sfx.playError();
        Player.hearts = Math.max(0, Player.hearts - 1);
        updatePlayerHeartsUI();
        Player.vy = -6;
        Player.vx = -8;
        Boss.projectiles.splice(i, 1);

        if (Player.hearts <= 0) {
          // Respawn in arena
          Player.x = stage.checkpointX;
          Player.y = 260;
          Player.hearts = 3;
          updatePlayerHeartsUI();
        }
      } else if (pr.x < -100) {
        Boss.projectiles.splice(i, 1);
      }
    }
  }

  // Gate Exit Pass Through & Locked Barrier Collision
  if (stage.gate) {
    if (stage.gate.unlocked) {
      if (Player.x > stage.gate.x) {
        if (currentStageIndex < WORLDS_DATA[currentWorldId - 1].stages.length - 1) {
          currentStageIndex++;
          sfx.playSuccess();
          loadCurrentWorldStage();
        } else {
          showObbyVictoryScreen();
        }
      }
    } else {
      // Locked Gate Barrier: push back and give active feedback
      if (Player.x + Player.w > stage.gate.x && Player.x < stage.gate.x + stage.gate.w + 40) {
        Player.x = stage.gate.x - Player.w - 8;
        Player.vx = -3;

        if (stage.hasTerminal) {
          sfx.playError();
          openTerminalGate(stage.terminalTargetWord, stage.terminalPromptEn, "");
          showObbyFloatingBanner("🔒 GATE LOCKED! Enter Password to Open!");
        } else if (stage.requiredItems && stage.requiredItems.length > 0) {
          const allCollected = stage.items.every(it => it.collected);
          if (!allCollected) {
            sfx.playError();
            const missing = stage.items.find(it => !it.collected);
            showObbyFloatingBanner(`🔒 GATE LOCKED! Find: ${missing ? missing.icon + ' ' + missing.name : 'required item'} first!`);
          } else {
            openGatekeeperChallenge();
          }
        }
      }
    }
  }

  // Fall into abyss respawn
  if (Player.y > 440) {
    Player.x = Player.respawnX;
    Player.y = Player.respawnY;
    Player.vy = 0;
    sfx.playError();
  }
  } // Fin if (!isHeroSelectOpen)

  // =========================================================================
  // 2. RENDER STAGE (MARIO WORLDS AESTHETICS)
  // =========================================================================
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const theme = stage.bgTheme || 'meadow';
  renderMarioWorldBackdrop(ctx, canvas.width, canvas.height, theme, now);

  // Render Platforms
  stage.platforms.forEach(p => {
    const rx = p.x - cameraX;
    if (rx + p.w < -50 || rx > canvas.width + 50) return;

    if (p.type === 'grass') {
      drawMarioGrassPlatform(ctx, rx, p.y, p.w, p.h);
    } else if (p.type === 'sand') {
      ctx.fillStyle = "#fde047";
      ctx.beginPath();
      ctx.roundRect(rx, p.y, p.w, p.h, 12);
      ctx.fill();
      ctx.fillStyle = "#f59e0b";
      ctx.fillRect(rx, p.y + 6, p.w, p.h - 6);
    } else if (p.type === 'wood_pier') {
      ctx.fillStyle = "#b45309";
      ctx.fillRect(rx, p.y, p.w, p.h);
      ctx.fillStyle = "#d97706";
      ctx.fillRect(rx + 2, p.y + 2, p.w - 4, 4);
      ctx.strokeStyle = "#78350f";
      ctx.lineWidth = 2;
      ctx.strokeRect(rx, p.y, p.w, p.h);
    } else if (p.type === 'cloud' || p.type === 'cloud_bounce') {
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.roundRect(rx, p.y + (p.compression || 0), p.w, p.h, 18);
      ctx.fill();
      ctx.strokeStyle = "#fbcfe8";
      ctx.lineWidth = 3;
      ctx.stroke();
    } else if (p.type === 'candy_cookie') {
      ctx.fillStyle = "#92400e";
      ctx.beginPath();
      ctx.roundRect(rx, p.y, p.w, p.h, 8);
      ctx.fill();
      ctx.fillStyle = "#fef08a";
      ctx.fillRect(rx + 4, p.y + p.h / 2 - 2, p.w - 8, 4);
    } else if (p.type === 'trampoline') {
      drawSuperTrampoline(ctx, rx, p.y, p.w, p.h, p.compression || 0, now);
    } else if (p.type.includes('mushroom')) {
      drawMarioMushroom(ctx, rx, p.y, p.w, p.h, p.type.includes('yellow') ? '#f59e0b' : '#ef4444', p.compression || 0);
    } else if (p.type === 'pipe_ground') {
      drawMarioGrassPlatform(ctx, rx, p.y, p.w, p.h);
      drawMarioWarpPipe(ctx, rx + 40, p.y - 75, 70, 75, stage.gate && stage.gate.unlocked, now);
    } else {
      ctx.fillStyle = "#475569";
      ctx.fillRect(rx, p.y, p.w, p.h);
    }
  });

  // Render Keypad Terminal Pod Station
  if (stage.hasTerminal) {
    const tx = stage.terminalX - cameraX;
    const ty = stage.terminalY;
    const isUnlocked = stage.gate && stage.gate.unlocked;
    drawKeypadTerminalStation(ctx, tx, ty, isUnlocked, now);
  }

  // Render Mystery Blocks [ ? ]
  if (stage.mysteryBlocks) {
    stage.mysteryBlocks.forEach(b => {
      const rx = b.x - cameraX;
      const ry = b.y + b.bumpY;
      if (rx + b.w < -20 || rx > canvas.width + 20) return;

      if (!b.hit) {
        const bgGrad = ctx.createLinearGradient(rx, ry, rx, ry + b.h);
        bgGrad.addColorStop(0, "#fde047");
        bgGrad.addColorStop(0.5, "#f59e0b");
        bgGrad.addColorStop(1, "#d97706");
        ctx.fillStyle = bgGrad;
        ctx.beginPath();
        ctx.roundRect(rx, ry, b.w, b.h, 6);
        ctx.fill();

        ctx.strokeStyle = "#78350f";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fillRect(rx + 3, ry + 3, b.w - 6, 3);

        ctx.fillStyle = "#78350f";
        ctx.font = "900 22px Outfit, sans-serif";
        ctx.fillText("?", rx + 15, ry + 28);
      } else {
        // Solved golden block with star
        const bgGrad = ctx.createLinearGradient(rx, ry, rx, ry + b.h);
        bgGrad.addColorStop(0, "#fef08a");
        bgGrad.addColorStop(1, "#ca8a04");
        ctx.fillStyle = bgGrad;
        ctx.beginPath();
        ctx.roundRect(rx, ry, b.w, b.h, 6);
        ctx.fill();
        ctx.strokeStyle = "#a16207";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = "18px sans-serif";
        ctx.fillText("⭐", rx + 11, ry + 27);

        // Floating keyword badge above block
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
        ctx.beginPath();
        ctx.roundRect(rx - 14, ry - 22, b.w + 28, 18, 4);
        ctx.fill();
        ctx.fillStyle = "#fef08a";
        ctx.font = "900 11px Outfit, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(b.icon + " " + b.content, rx + b.w / 2, ry - 9);
        ctx.textAlign = "start";
      }
    });
  }

  // Render Items (Floating clothing cards)
  if (stage.items) {
    stage.items.forEach(it => {
      if (!it.collected) {
        const ix = it.x - cameraX;
        const floatY = Math.sin(now * 0.005) * 6;

        ctx.font = "32px sans-serif";
        ctx.fillText(it.icon, ix, it.y + floatY);

        ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
        ctx.beginPath();
        ctx.roundRect(ix - 36, it.y - 18 + floatY, 110, 22, 6);
        ctx.fill();

        ctx.fillStyle = "#fef08a";
        ctx.font = "bold 11px Outfit, sans-serif";
        ctx.fillText(it.name, ix - 30, it.y - 4 + floatY);
      }
    });
  }

  // Render Coins
  if (stage.coins) {
    stage.coins.forEach(c => {
      if (!c.collected) {
        const cx = c.x - cameraX;
        ctx.fillStyle = "#f59e0b";
        ctx.beginPath();
        ctx.arc(cx + 8, c.y + 8, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fef08a";
        ctx.beginPath();
        ctx.arc(cx + 6, c.y + 6, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }

  // Render Boss in Boss Arena
  if (stage.isBossArena && Boss.active) {
    const bx = Boss.x - cameraX;
    const by = Boss.y + Math.sin(Boss.bobTimer) * 8;

    if (Boss.hitFlashes > 0) {
      Boss.hitFlashes--;
      ctx.globalAlpha = 0.5;
    }

    if (currentWorldId === 1) {
      drawBossClockworkMech(ctx, bx, by, Boss.w, Boss.h, now);
    } else if (currentWorldId === 2) {
      drawBossCaptainSquiddy(ctx, bx, by, Boss.w, Boss.h, now);
    } else {
      drawBossGummyDragon(ctx, bx, by, Boss.w, Boss.h, now);
    }

    ctx.globalAlpha = 1.0;

    // Render Boss Projectiles
    Boss.projectiles.forEach(pr => {
      const px = pr.x - cameraX;
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(px, pr.y, pr.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fde047";
      ctx.beginPath();
      ctx.arc(px - 3, pr.y - 3, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // =========================================================================
  // 3. RENDER OFFICIAL BILIKIDS PIXEL ART MASCOT WITH FLUID MOTION
  // =========================================================================
  const px = Player.x - cameraX;
  const py = Player.y;
  const pw = Player.w;
  const ph = Player.h;

  // Drop shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
  ctx.beginPath();
  ctx.ellipse(px + pw / 2, py + ph + 2, 16 * Player.scaleX, 5 * Player.scaleY, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  const cx = px + pw / 2;
  const cy = py + ph;
  ctx.translate(cx, cy);

  const dir = Player.facing === 'left' ? -1 : 1;
  ctx.scale(dir * Player.scaleX, Player.scaleY);
  ctx.rotate(Player.rotation);

  let activeImg = PixelMascot.strip;
  let yBob = 0;
  let frameIdx = 0;

  if (!Player.isGrounded) {
    activeImg = PixelMascot.celebrate; // Arms up jumping
    yBob = -4;
  } else if (Player.celebratingTimer > 0) {
    activeImg = PixelMascot.celebrate;
    yBob = Math.sin(now * 0.02) * 5 - 3;
  } else if (Math.abs(Player.vx) > 0.4) {
    const stepRate = 20;
    frameIdx = Math.floor((Player.distanceMoved / stepRate) % 4);
    yBob = Math.abs(Math.sin((Player.distanceMoved / stepRate) * Math.PI)) * -3;
  } else {
    frameIdx = 0;
    yBob = Math.sin(now * 0.003) * 1.5;
  }

  const spriteW = 46;
  const spriteH = 68;
  const drawX = -spriteW / 2;
  const drawY = -spriteH + yBob;

  if (activeImg === PixelMascot.celebrate && PixelMascot.celebrate.complete && PixelMascot.celebrate.naturalWidth > 0) {
    ctx.drawImage(PixelMascot.celebrate, drawX, drawY, spriteW, spriteH);
  } else if (PixelMascot.strip.complete && PixelMascot.strip.naturalWidth > 0) {
    const sw = PixelMascot.strip.naturalWidth / 4;
    const sh = PixelMascot.strip.naturalHeight;
    ctx.drawImage(PixelMascot.strip, frameIdx * sw, 0, sw, sh, drawX, drawY, spriteW, spriteH);
  } else {
    // Crisp fallback
    ctx.fillStyle = "#eab308";
    ctx.fillRect(drawX + 4, drawY + 16, spriteW - 8, spriteH - 16);
  }

  ctx.restore();

  // Render particles
  for (let i = obbyParticles.length - 1; i >= 0; i--) {
    const pt = obbyParticles[i];
    pt.x += pt.vx;
    pt.y += pt.vy;
    pt.life -= 0.035;
    if (pt.life <= 0) {
      obbyParticles.splice(i, 1);
    } else {
      ctx.fillStyle = pt.color;
      ctx.globalAlpha = pt.life;
      ctx.beginPath();
      ctx.arc(pt.x - cameraX, pt.y, pt.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1.0;

  requestAnimationFrame(obbyGameLoop);
}

// Procedural World Renderers (Mario Bros)
function renderMarioWorldBackdrop(ctx, W, H, theme, now) {
  if (theme === 'beach') {
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    skyGrad.addColorStop(0, "#0284c7");
    skyGrad.addColorStop(0.6, "#38bdf8");
    skyGrad.addColorStop(1, "#fed7aa");
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = "#fbbf24";
    ctx.beginPath();
    ctx.arc(680, 50, 30, 0, Math.PI * 2);
    ctx.fill();

    const oceanGrad = ctx.createLinearGradient(0, 240, 0, H);
    oceanGrad.addColorStop(0, "#06b6d4");
    oceanGrad.addColorStop(1, "#0891b2");
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 240, W, H - 240);

  } else if (theme === 'clouds') {
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    skyGrad.addColorStop(0, "#f472b6");
    skyGrad.addColorStop(0.5, "#c084fc");
    skyGrad.addColorStop(1, "#93c5fd");
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    drawMarioCloud(ctx, 120, 60, 1.4);
    drawMarioCloud(ctx, 520, 50, 1.6);
  } else {
    // Sunny Meadow
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    skyGrad.addColorStop(0, "#38bdf8");
    skyGrad.addColorStop(0.65, "#7dd3fc");
    skyGrad.addColorStop(1, "#bae6fd");
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = "#fef08a";
    ctx.beginPath();
    ctx.arc(80, 50, 32, 0, Math.PI * 2);
    ctx.fill();

    drawMarioCloud(ctx, 220, 60, 1.2);
    drawMarioCloud(ctx, 580, 45, 1.0);

    ctx.fillStyle = "#86efac";
    ctx.beginPath();
    ctx.arc(160, 360, 160, Math.PI, 0);
    ctx.arc(520, 370, 180, Math.PI, 0);
    ctx.fill();

    ctx.fillStyle = "#4ade80";
    ctx.beginPath();
    ctx.arc(320, 370, 150, Math.PI, 0);
    ctx.arc(700, 370, 160, Math.PI, 0);
    ctx.fill();
  }
}

function drawMarioCloud(ctx, x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(0, 0, 18, 0, Math.PI * 2);
  ctx.arc(20, -6, 22, 0, Math.PI * 2);
  ctx.arc(42, 0, 18, 0, Math.PI * 2);
  ctx.arc(20, 10, 18, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#0f172a";
  ctx.fillRect(15, -4, 3, 8);
  ctx.fillRect(26, -4, 3, 8);
  ctx.restore();
}

function drawMarioGrassPlatform(ctx, x, y, w, h) {
  const soilGrad = ctx.createLinearGradient(x, y, x, y + h);
  soilGrad.addColorStop(0, "#92400e");
  soilGrad.addColorStop(1, "#78350f");
  ctx.fillStyle = soilGrad;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 10);
  ctx.fill();

  ctx.fillStyle = "#22c55e";
  ctx.beginPath();
  ctx.roundRect(x, y, w, 12, [10, 10, 0, 0]);
  ctx.fill();

  ctx.fillStyle = "#16a34a";
  for (let gx = x + 10; gx < x + w - 10; gx += 16) {
    ctx.beginPath();
    ctx.moveTo(gx, y + 12);
    ctx.lineTo(gx + 6, y + 18);
    ctx.lineTo(gx + 12, y + 12);
    ctx.fill();
  }
}

function drawSuperTrampoline(ctx, x, y, w, h, compression, now) {
  const comp = compression || 0;
  const padY = y + comp;
  const baseY = y + h;

  // Base Legs & Frame (industrial dark steel with rubber safety pads)
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.roundRect(x + 6, baseY - 7, w - 12, 7, 3);
  ctx.fill();

  ctx.fillStyle = "#334155";
  ctx.fillRect(x + 4, baseY - 5, 10, 6);
  ctx.fillRect(x + w - 14, baseY - 5, 10, 6);
  ctx.fillRect(x + w / 2 - 5, baseY - 5, 10, 6);

  // Chrome Spring Coils (squash with comp)
  const springCount = 4;
  const springSpacing = (w - 32) / (springCount - 1);
  for (let i = 0; i < springCount; i++) {
    const sx = x + 16 + i * springSpacing;
    const sTop = padY + 12;
    const sBot = baseY - 7;
    const sH = Math.max(4, sBot - sTop);

    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(sx, sBot);
    const coils = 3;
    for (let c = 1; c <= coils; c++) {
      const cy = sBot - (sH / coils) * (c - 0.5);
      const xOffset = (c % 2 === 0) ? -7 : 7;
      ctx.lineTo(sx + xOffset, cy);
    }
    ctx.lineTo(sx, sTop);
    ctx.stroke();
  }

  // Trampoline Bouncy Bed (Pad)
  const padGrad = ctx.createLinearGradient(x, padY, x, padY + 15);
  padGrad.addColorStop(0, "#fb923c");
  padGrad.addColorStop(0.5, "#ea580c");
  padGrad.addColorStop(1, "#9a3412");
  ctx.fillStyle = padGrad;
  ctx.beginPath();
  ctx.roundRect(x, padY, w, 15, 6);
  ctx.fill();

  ctx.strokeStyle = "#fde047";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Bouncy Bed Texture & Chevron Indicators
  ctx.fillStyle = "#fef08a";
  ctx.font = "bold 10px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("▲   ▲   SUPER BOING   ▲   ▲", x + w / 2, padY + 11);
  ctx.textAlign = "start";
}

function drawKeypadTerminalStation(ctx, x, y, isUnlocked, now) {
  const pulse = Math.sin((now || 0) * 0.006) * 4;

  // Ground Holographic Base Ring
  ctx.strokeStyle = isUnlocked ? "rgba(52, 211, 153, 0.7)" : "rgba(168, 85, 247, 0.75)";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(x, y + 26, 34, 10, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Cyber Podium Column
  const baseGrad = ctx.createLinearGradient(x - 16, y - 20, x + 16, y + 25);
  baseGrad.addColorStop(0, "#312e81");
  baseGrad.addColorStop(1, "#0f172a");
  ctx.fillStyle = baseGrad;
  ctx.beginPath();
  ctx.roundRect(x - 14, y - 20, 28, 45, 6);
  ctx.fill();
  ctx.strokeStyle = isUnlocked ? "#34d399" : "#818cf8";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Slanted Terminal Monitor
  ctx.fillStyle = "#1e1b4b";
  ctx.beginPath();
  ctx.roundRect(x - 30, y - 58, 60, 38, 8);
  ctx.fill();
  ctx.strokeStyle = isUnlocked ? "#10b981" : "#c084fc";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Screen Interior
  ctx.fillStyle = isUnlocked ? "#065f46" : "#0284c7";
  ctx.fillRect(x - 26, y - 54, 52, 30);

  ctx.fillStyle = isUnlocked ? "#34d399" : "#fef08a";
  ctx.font = "bold 9px monospace";
  ctx.textAlign = "center";
  ctx.fillText(isUnlocked ? "UNLOCKED" : "KEYPAD", x, y - 41);
  ctx.font = "14px sans-serif";
  ctx.fillText(isUnlocked ? "🔓" : "💻", x, y - 26);

  // Floating Animated Indicator
  if (!isUnlocked) {
    ctx.fillStyle = "#facc15";
    ctx.font = "bold 11px Outfit, sans-serif";
    ctx.fillText("⬇ ENTER CODE", x, y - 66 + pulse);
  }
  ctx.textAlign = "start";
}

function drawMarioMushroom(ctx, x, y, w, h, capColor, compression) {
  const comp = compression || 0;
  const capY = y + comp;

  ctx.fillStyle = "#fef08a";
  ctx.fillRect(x + w / 2 - 14, capY + 10, 28, Math.max(4, h - 10 - comp));

  ctx.fillStyle = capColor;
  ctx.beginPath();
  ctx.ellipse(x + w / 2, capY + 12, w / 2, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(x + w / 2 - 20, capY + 10, 6, 0, Math.PI * 2);
  ctx.arc(x + w / 2, capY + 8, 7, 0, Math.PI * 2);
  ctx.arc(x + w / 2 + 20, capY + 10, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "900 11px Outfit, sans-serif";
  ctx.fillText("⚡ BOING!", x + w / 2 - 24, capY - 4);
}

function drawMarioWarpPipe(ctx, x, y, w, h, isUnlocked, now) {
  const pipeGrad = ctx.createLinearGradient(x, y, x + w, y);
  pipeGrad.addColorStop(0, "#15803d");
  pipeGrad.addColorStop(0.3, "#22c55e");
  pipeGrad.addColorStop(0.6, "#4ade80");
  pipeGrad.addColorStop(1, "#166534");

  ctx.fillStyle = pipeGrad;
  ctx.beginPath();
  ctx.roundRect(x - 5, y, w + 10, 20, 5);
  ctx.fill();
  ctx.strokeStyle = "#14532d";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.fillStyle = pipeGrad;
  ctx.fillRect(x, y + 20, w, h - 20);
  ctx.strokeRect(x, y + 20, w, h - 20);

  const pulse = Math.sin((now || 0) * 0.006) * 3;
  if (isUnlocked) {
    ctx.font = "24px sans-serif";
    ctx.fillText("🏁", x + w / 2 - 12, y - 8 + pulse);
    ctx.fillStyle = "#34d399";
    ctx.font = "bold 11px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("ENTER ➔", x + w / 2, y - 28 + pulse);
    ctx.textAlign = "start";
  } else {
    ctx.font = "24px sans-serif";
    ctx.fillText("🔒", x + w / 2 - 12, y - 8 + pulse);
    ctx.fillStyle = "#f87171";
    ctx.font = "bold 10px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("LOCKED", x + w / 2, y - 28 + pulse);
    ctx.textAlign = "start";
  }
}

// Procedural Boss Monster Renderers
function drawBossClockworkMech(ctx, x, y, w, h, now) {
  // Steampunk Robo-Mech
  ctx.fillStyle = "#334155";
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 18);
  ctx.fill();
  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = 4;
  ctx.stroke();

  // Steam Chimney
  ctx.fillStyle = "#475569";
  ctx.fillRect(x + 20, y - 24, 20, 24);
  // Steam puff
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.beginPath();
  ctx.arc(x + 30, y - 35, 12, 0, Math.PI * 2);
  ctx.fill();

  // Glowing Eye
  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.arc(x + w / 2, y + 45, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fef08a";
  ctx.beginPath();
  ctx.arc(x + w / 2, y + 45, 8, 0, Math.PI * 2);
  ctx.fill();

  // Mechanical Teeth
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(x + 25, y + 85, w - 50, 18);
  ctx.fillStyle = "#ffffff";
  for (let tx = x + 30; tx < x + w - 35; tx += 12) {
    ctx.fillRect(tx, y + 87, 8, 6);
    ctx.fillRect(tx, y + 96, 8, 6);
  }
}

function drawBossCaptainSquiddy(ctx, x, y, w, h, now) {
  // Giant Pirate Kraken
  ctx.fillStyle = "#a855f7";
  ctx.beginPath();
  ctx.arc(x + w / 2, y + 50, 45, 0, Math.PI * 2);
  ctx.fill();

  // Pirate Hat
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.moveTo(x + 10, y + 25);
  ctx.lineTo(x + w / 2, y - 20);
  ctx.lineTo(x + w - 10, y + 25);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#fbbf24";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Eye and Eye patch
  ctx.fillStyle = "#000000";
  ctx.fillRect(x + 35, y + 42, 14, 14); // Patch
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(x + 72, y + 48, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x + 72, y + 48, 4, 0, Math.PI * 2);
  ctx.fill();

  // Tentacles
  ctx.fillStyle = "#9333ea";
  for (let i = 0; i < 4; i++) {
    const tx = x + 18 + i * 24;
    const wave = Math.sin(now * 0.006 + i) * 12;
    ctx.beginPath();
    ctx.roundRect(tx, y + 85 + wave, 14, 45 - wave, 7);
    ctx.fill();
  }
}

function drawBossGummyDragon(ctx, x, y, w, h, now) {
  // Translucent Candy Dragon
  ctx.fillStyle = "#ec4899";
  ctx.beginPath();
  ctx.roundRect(x, y + 10, w, h - 20, 24);
  ctx.fill();
  ctx.strokeStyle = "#f43f5e";
  ctx.lineWidth = 4;
  ctx.stroke();

  // Candy Horns
  ctx.fillStyle = "#fde047";
  ctx.beginPath();
  ctx.moveTo(x + 25, y + 10);
  ctx.lineTo(x + 15, y - 25);
  ctx.lineTo(x + 35, y + 5);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + w - 25, y + 10);
  ctx.lineTo(x + w - 15, y - 25);
  ctx.lineTo(x + w - 35, y + 5);
  ctx.closePath();
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(x + 38, y + 45, 12, 0, Math.PI * 2);
  ctx.arc(x + w - 38, y + 45, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(x + 38, y + 45, 6, 0, Math.PI * 2);
  ctx.arc(x + w - 38, y + 45, 6, 0, Math.PI * 2);
  ctx.fill();

  // Smiling snout
  ctx.fillStyle = "#fb7185";
  ctx.beginPath();
  ctx.ellipse(x + w / 2, y + 78, 28, 16, 0, 0, Math.PI * 2);
  ctx.fill();
}

function listenObbyPrompt() {
  if (currentObbyStage) {
    speakEnglish(currentObbyStage.promptEn, 'guide');
  }
}

function showObbyFloatingBanner(text, durationFrames = 180) {
  // Visual banner
}

function showObbyVictoryScreen() {
  handleBossDefeat();
}


// ============================================================================
// ACTIVIDAD 2: 💎 BLOOKET-STYLE "GOLD CHEST MARKET RAID"
// 8 rounds of shopping grammar questions and mystery chests
// ============================================================================
const GoldQuestRounds = [
  {
    id: 0,
    questionEn: "Look at the sweater in my hands! How do we describe it?",
    questionEs: "",
    options: [
      { text: "This warm sweater", isCorrect: true, hint: "" },
      { text: "Those warm sweater", isCorrect: false, hint: "" },
      { text: "These warm sweater", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 1,
    questionEn: "Look at the shoes over there in the shop window! How do we ask the price?",
    questionEs: "",
    options: [
      { text: "How much is that shoes?", isCorrect: false, hint: "" },
      { text: "How much are those shoes?", isCorrect: true, hint: "" },
      { text: "How many is those shoes?", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 2,
    questionEn: "At the bookstore, you want to buy a comic. What is the polite request?",
    questionEs: "",
    options: [
      { text: "I would like to buy that comic book.", isCorrect: true, hint: "" },
      { text: "I wants that comic book now.", isCorrect: false, hint: "" },
      { text: "Give me comic book.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 3,
    questionEn: "The cashier asks: 'Can I help you?' What do you say?",
    questionEs: "",
    options: [
      { text: "Yes, please. I am looking for a jacket.", isCorrect: true, hint: "" },
      { text: "No, you cannot swimming.", isCorrect: false, hint: "" },
      { text: "Yes, I am sleeping today.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 4,
    questionEn: "These pants are too small! What do you need?",
    questionEs: "",
    options: [
      { text: "I need a bigger size, please.", isCorrect: true, hint: "" },
      { text: "I need yesterday morning.", isCorrect: false, hint: "" },
      { text: "I need five books.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 5,
    questionEn: "How much is this bottle of strawberry milkshake?",
    questionEs: "",
    options: [
      { text: "They are fifteen books.", isCorrect: false, hint: "" },
      { text: "It is three dollars and fifty cents.", isCorrect: true, hint: "" },
      { text: "It is ten kilometers.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 6,
    questionEn: "Which sentence uses 'some' correctly for food shopping?",
    questionEs: "",
    options: [
      { text: "We need some apples and some milk.", isCorrect: true, hint: "" },
      { text: "We need an milks.", isCorrect: false, hint: "" },
      { text: "We need some a apple.", isCorrect: false, hint: "" }
    ]
  },
  {
    id: 7,
    questionEn: "You are paying at the cash register. What does the cashier say?",
    questionEs: "",
    options: [
      { text: "Here is your change and receipt. Have a great day!", isCorrect: true, hint: "" },
      { text: "Please do your homework now.", isCorrect: false, hint: "" },
      { text: "It is snowing in the mountains.", isCorrect: false, hint: "" }
    ]
  }
];

let currentGoldRoundIndex = 0;
let userGoldTotal = 0;
let isGoldRoundAnswering = true;
let isGoldAdvancing = false;

function loadGoldQuestRound(index) {
  isGoldAdvancing = false;
  isGoldRoundAnswering = true;
  currentGoldRoundIndex = index;
  const q = GoldQuestRounds[index];

  document.getElementById('goldRoundBadge').textContent = `Ronda ${index + 1} de ${GoldQuestRounds.length}`;
  document.getElementById('goldTotalCounter').textContent = `${userGoldTotal} 🪙`;

  const questionCard = document.getElementById('goldQuestionContainer');
  questionCard.style.display = 'block';
  document.getElementById('goldChestsPlayfield').style.display = 'none';

  document.getElementById('goldQuestionPromptEn').textContent = `❓ ${q.questionEn}`;
  document.getElementById('goldQuestionPromptEs').textContent = q.questionEs;

  speakEnglish(q.questionEn, 'guide');

  // Randomize choices
  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
  const optionsGrid = document.getElementById('goldOptionsGrid');
  optionsGrid.innerHTML = shuffledOptions.map(opt => `
    <button class="lilypad-card" style="background:#f8fafc; color:#1e293b; border-color:#cbd5e1;" onclick="handleGoldAnswer(this, ${opt.isCorrect})">
      <div style="font-family:var(--font-display); font-size:1.1rem; font-weight:700;">${opt.text}</div>
      <div style="font-size:0.75rem; color:#64748b; margin-top:4px;">${opt.hint}</div>
    </button>
  `).join('');

  document.getElementById('goldFeedbackBox').innerHTML = '';
}

function handleGoldAnswer(btnEl, isCorrect) {
  if (!isGoldRoundAnswering) return;
  const feedback = document.getElementById('goldFeedbackBox');

  if (isCorrect) {
    isGoldRoundAnswering = false;
    sfx.playSuccess();
    btnEl.style.background = '#ecfdf5';
    btnEl.style.borderColor = '#10b981';
    btnEl.style.color = '#065f46';

    document.querySelectorAll('#goldOptionsGrid button').forEach(b => b.style.pointerEvents = 'none');

    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:2px solid #10b981; border-radius:16px; padding:12px 18px; color:#065f46; font-weight:700; margin-top:14px;">
        ✨ CORRECT ANSWER! Opening the 3 Mystery Mall Chests!...
      </div>
    `;

    setTimeout(() => {
      displayMysteryChests();
    }, 1000);

  } else {
    sfx.playError();
    btnEl.style.background = '#fef2f2';
    btnEl.style.borderColor = '#ef4444';
    btnEl.style.color = '#991b1b';
    btnEl.style.animation = 'shakeBtn 0.35s';
    setTimeout(() => { btnEl.style.animation = ''; }, 400);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ Check the subject and the use of this/that/these/those. Try another option!
      </div>
    `;
  }
}

function displayMysteryChests() {
  document.getElementById('goldQuestionContainer').style.display = 'none';
  const chestsField = document.getElementById('goldChestsPlayfield');
  chestsField.style.display = 'block';

  // Generar 3 cofres con premios sorpresa aleatorios
  const prizePool = [
    { title: "+40 Gold Coins", value: 40, icon: "💰", msg: "" },
    { title: "+75 Royal Gold", value: 75, icon: "🪙", msg: "" },
    { title: "💎 Diamond Card (+100)", value: 100, icon: "💎", msg: "" },
    { title: "2X Multiplier", value: 50, icon: "✨", msg: "" }
  ];

  const shuffledPrizes = [...prizePool].sort(() => Math.random() - 0.5).slice(0, 3);
  const chestsGrid = document.getElementById('mysteryChestsGrid');

  chestsGrid.innerHTML = shuffledPrizes.map((prize, i) => `
    <div class="gold-chest-card" onclick="openMysteryChest(this, ${prize.value}, '${prize.icon}', '${prize.msg}')">
      <div class="gold-chest-icon">🎁</div>
      <div style="font-family:var(--font-display); font-size:1.15rem; font-weight:800; color:#78350f;">Mystery Chest #${i + 1}</div>
      <div style="font-size:0.8rem; color:#b45309; margin-top:4px;">Tap to open</div>
    </div>
  `).join('');

  document.getElementById('chestResultFeedback').innerHTML = '';
}

function openMysteryChest(cardEl, amount, icon, message) {
  if (isGoldAdvancing) return;
  isGoldAdvancing = true;

  sfx.playChestOpen();
  userGoldTotal += amount;
  AppState.addStars(amount);

  document.getElementById('goldTotalCounter').textContent = `${userGoldTotal} 🪙`;

  // Disable all chests
  document.querySelectorAll('.gold-chest-card').forEach(c => {
    c.style.pointerEvents = 'none';
    if (c !== cardEl) c.style.opacity = '0.5';
  });

  cardEl.innerHTML = `
    <div class="gold-chest-icon" style="transform:scale(1.2);">${icon}</div>
    <div style="font-family:var(--font-display); font-size:1.25rem; font-weight:800; color:#065f46;">${message}</div>
    <div style="font-size:0.9rem; color:#047857; font-weight:700; margin-top:4px;">+${amount} bonus stars!</div>
  `;
  cardEl.style.background = '#ecfdf5';
  cardEl.style.borderColor = '#10b981';

  const feedback = document.getElementById('chestResultFeedback');
  const isFinalRound = currentGoldRoundIndex >= GoldQuestRounds.length - 1;

  feedback.innerHTML = `
    <div style="margin-top:16px; font-weight:700; color:#047857; display:flex; align-items:center; justify-content:center; gap:8px;">
      <span style="display:inline-block; animation:spin 1s linear infinite;">⏳</span>
      <span>${!isFinalRound ? 'Moving to the next question round...' : 'Calculating your final gold stash!...'}</span>
    </div>
  `;

  setTimeout(() => {
    isGoldAdvancing = false;
    if (currentGoldRoundIndex < GoldQuestRounds.length - 1) {
      loadGoldQuestRound(currentGoldRoundIndex + 1);
    } else {
      showGoldQuestVictory();
    }
  }, 1300);
}

function showGoldQuestVictory() {
  sfx.playApplause();
  AppState.addStars(50);

  const container = document.querySelector('.gold-quest-container');
  if (!container) return;

  container.innerHTML = `
    <div style="text-align:center; padding:36px 20px; background:linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border-radius:24px; border:3px solid #f59e0b;">
      <div style="font-size:4rem; margin-bottom:12px; animation:frogJumpSplash 0.8s ease infinite alternate;">👑💎💰</div>
      <h2 style="font-family:var(--font-display); font-size:2rem; font-weight:800; color:#92400e; margin-bottom:10px;">
        SUPREME GOLD STASH ACHIEVED!
      </h2>
      <p style="font-size:1.15rem; color:#b45309; max-width:640px; margin:0 auto 20px; line-height:1.5;">
        You accumulated a total of <strong>${userGoldTotal} gold coins</strong> in the Shopping Mall Blooket Gold Quest! You won <strong>+50 bonus pts</strong> as a master shopper.
      </p>
      <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
        <button class="btn-back-map" style="background:#d97706; color:#ffffff; border-color:#d97706; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="switchTab('cashier', document.querySelectorAll('.tab-btn')[2])">
          🛒 Next Activity: POS Touch Register ➔
        </button>
        <button class="btn-back-map" style="background:#ffffff; color:#b45309; border-color:#fde68a; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="userGoldTotal = 0; loadGoldQuestRound(0);">
          🔄 Play Gold Quest Again
        </button>
      </div>
    </div>
  `;
}

// ============================================================================
// ACTIVIDAD 3: 🛒 TACTILE CASHIER SCANNER & BAGGING CONVEYOR
// Interactive barcode scanner and POS checkout simulator
// ============================================================================
const CashierOrdersData = [
  {
    id: 0,
    customerName: "Emma 👧",
    customerSpeechEn: "Hello! I would like to buy this green shirt and that blue watch, please.",
    customerSpeechEs: "",
    requiredItems: [
      { name: "Green Shirt", icon: "👕", price: 15.00, scanned: false },
      { name: "Blue Watch", icon: "⌚", price: 25.00, scanned: false }
    ],
    distractors: [
      { name: "Red Apple", icon: "🍎", price: 2.00, scanned: false }
    ]
  },
  {
    id: 1,
    customerName: "Lucas 👦",
    customerSpeechEn: "Good morning! I need these cool white sneakers and a warm winter hat.",
    customerSpeechEs: "",
    requiredItems: [
      { name: "White Sneakers", icon: "👟", price: 35.00, scanned: false },
      { name: "Winter Hat", icon: "🧢", price: 12.00, scanned: false }
    ],
    distractors: [
      { name: "Milk Carton", icon: "🥛", price: 3.00, scanned: false }
    ]
  },
  {
    id: 2,
    customerName: "Grandma Rose 👵",
    customerSpeechEn: "Excuse me, dear. I want this loaf of fresh bread and two bottles of milk.",
    customerSpeechEs: "",
    requiredItems: [
      { name: "Fresh Bread", icon: "🍞", price: 4.50, scanned: false },
      { name: "Bottle of Milk", icon: "🥛", price: 3.50, scanned: false }
    ],
    distractors: [
      { name: "Headphones", icon: "🎧", price: 40.00, scanned: false }
    ]
  },
  {
    id: 3,
    customerName: "Liam 👨‍🦱",
    customerSpeechEn: "Hi! How much are these headphones and this comic book?",
    customerSpeechEs: "",
    requiredItems: [
      { name: "Headphones", icon: "🎧", price: 45.00, scanned: false },
      { name: "Comic Book", icon: "📚", price: 8.00, scanned: false }
    ],
    distractors: [
      { name: "Green Shirt", icon: "👕", price: 15.00, scanned: false }
    ]
  },
  {
    id: 4,
    customerName: "Sophia 👩",
    customerSpeechEn: "Good afternoon! I would like this yellow raincoat for my little brother.",
    customerSpeechEs: "",
    requiredItems: [
      { name: "Yellow Raincoat", icon: "🧥", price: 30.00, scanned: false },
      { name: "Red Umbrella", icon: "☂️", price: 14.00, scanned: false }
    ],
    distractors: [
      { name: "Blue Watch", icon: "⌚", price: 25.00, scanned: false }
    ]
  },
  {
    id: 5,
    customerName: "Chef Barnaby 🐻",
    customerSpeechEn: "Ribbit! I need three fresh apples and this delicious cheese for my pizza!",
    customerSpeechEs: "",
    requiredItems: [
      { name: "Fresh Apples", icon: "🍎", price: 5.00, scanned: false },
      { name: "Tasty Cheese", icon: "🧀", price: 7.50, scanned: false }
    ],
    distractors: [
      { name: "Winter Hat", icon: "🧢", price: 12.00, scanned: false }
    ]
  }
];

let currentCashierOrderIndex = 0;
let scannedItemsCount = 0;
let currentRegisterTotal = 0.00;

function loadCashierOrder(index) {
  currentCashierOrderIndex = index;
  scannedItemsCount = 0;
  currentRegisterTotal = 0.00;
  const order = CashierOrdersData[index];

  document.getElementById('cashierOrderBadge').textContent = `Cliente ${index + 1} de ${CashierOrdersData.length}`;
  document.getElementById('cashierCustomerPromptEn').textContent = `"${order.customerSpeechEn}"`;
  document.getElementById('cashierCustomerPromptEs').textContent = `${order.customerName}: ${order.customerSpeechEs}`;

  updateRegisterScreenDisplay();
  speakEnglish(order.customerSpeechEn, 'cashier');

  // Conveyor belt items pool
  const conveyorItems = [...order.requiredItems, ...order.distractors].sort(() => Math.random() - 0.5);
  conveyorItems.forEach(it => it.scanned = false);

  const beltContainer = document.getElementById('cashierBeltContainer');
  beltContainer.innerHTML = conveyorItems.map((item, i) => `
    <div class="market-item-card" onclick="scanConveyorItem(this, '${item.name}', ${item.price}, ${order.requiredItems.some(req => req.name === item.name)})">
      <div style="font-size:2.4rem;">${item.icon}</div>
      <div style="font-family:var(--font-display); font-weight:700; font-size:0.92rem; margin-top:4px;">${item.name}</div>
      <div style="font-size:0.85rem; font-weight:800; color:#0284c7; margin-top:2px;">$${item.price.toFixed(2)}</div>
    </div>
  `).join('');

  document.getElementById('cashierFeedbackBox').innerHTML = '';
}

function scanConveyorItem(cardEl, itemName, price, isRequired) {
  const order = CashierOrdersData[currentCashierOrderIndex];
  const feedback = document.getElementById('cashierFeedbackBox');

  if (isRequired) {
    sfx.playLaserBeep();
    cardEl.classList.add('scanned');
    scannedItemsCount++;
    currentRegisterTotal += price;

    updateRegisterScreenDisplay();

    if (scannedItemsCount === order.requiredItems.length) {
      // Pedido completado exitosamente
      sfx.playSuccess();
      AppState.addStars(25);

      feedback.innerHTML = `
        <div style="background:#ecfdf5; border:2px solid #10b981; border-radius:16px; padding:14px 20px; color:#065f46; margin-top:14px;">
          <div style="font-weight:700; font-size:1.15rem; margin-bottom:4px;">🧾 TOTAL CHARGED SUCCESSFULLY! (+25 pts)</div>
          <div>The customer paid the total of <strong>$${currentRegisterTotal.toFixed(2)}</strong>. Excellent English cashier skills!</div>
        </div>
      `;

      setTimeout(() => {
        if (currentCashierOrderIndex < CashierOrdersData.length - 1) {
          loadCashierOrder(currentCashierOrderIndex + 1);
        } else {
          showCashierVictory();
        }
      }, 1400);

    } else {
      feedback.innerHTML = `
        <div style="color:#0369a1; font-weight:700; font-size:0.95rem;">
          🛒 BEEP! ${itemName} scanned ($${price.toFixed(2)}). Scan the next requested item.
        </div>
      `;
    }

  } else {
    sfx.playError();
    cardEl.style.animation = 'shakeBtn 0.35s';
    setTimeout(() => cardEl.style.animation = '', 400);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ The customer did not ask for that item! Listen again to what they need.
      </div>
    `;
  }
}

function updateRegisterScreenDisplay() {
  const screen = document.getElementById('cashierScreenText');
  if (screen) {
    screen.innerHTML = `
      <div>>> BILIKIDS SUPERMARKET POS SYSTEM <<</div>
      <div>ITEMS SCANNED: ${scannedItemsCount}</div>
      <div style="color:#f59e0b; font-size:1.25rem; font-weight:800; margin-top:6px;">TOTAL AMOUNT: $${currentRegisterTotal.toFixed(2)} USD</div>
    `;
  }
}

function listenCashierCustomer() {
  sfx.playPop();
  const order = CashierOrdersData[currentCashierOrderIndex];
  speakEnglish(order.customerSpeechEn, 'cashier');
}

function nextCashierOrder() {
  sfx.playPop();
  currentCashierOrderIndex = (currentCashierOrderIndex + 1) % CashierOrdersData.length;
  loadCashierOrder(currentCashierOrderIndex);
}

function showCashierVictory() {
  sfx.playApplause();
  AppState.addStars(50);

  const container = document.querySelector('.cashier-sim-container');
  if (!container) return;

  container.innerHTML = `
    <div style="text-align:center; padding:36px 20px; background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius:24px; border:3px solid #10b981;">
      <div style="font-size:4rem; margin-bottom:12px; animation:frogJumpSplash 0.8s ease infinite alternate;">🛒🧾🌟</div>
      <h2 style="font-family:var(--font-display); font-size:2rem; font-weight:800; color:#065f46; margin-bottom:10px;">
        MALL CASHIER MASTER!
      </h2>
      <p style="font-size:1.15rem; color:#047857; max-width:640px; margin:0 auto 20px; line-height:1.5;">
        You served all supermarket customers to perfection using shopping and price questions in English! You won <strong>+50 bonus pts</strong>.
      </p>
      <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
        <button class="btn-back-map" style="background:#059669; color:#ffffff; border-color:#059669; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="switchTab('vlogger', document.querySelectorAll('.tab-btn')[3])">
          🎙️ Next Activity: Mall Vlogger Studio ➔
        </button>
        <button class="btn-back-map" style="background:#ffffff; color:#065f46; border-color:#a7f3d0; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="loadCashierOrder(0)">
          🔄 Volver a Atender Clientes
        </button>
      </div>
    </div>
  `;
}

// ============================================================================
// ACTIVIDAD 4: 🎙️ MALL VLOGGER & SHOPPING INFLUENCER STUDIO
// Interactive Speaking Quest with Web Speech Recognition and live stream
// ============================================================================
const VloggerHaulData = [
  {
    id: 0,
    title: "Mall Haul • Weekend Sneakers",
    scriptEn: "Hey everyone! Look at these awesome white sneakers I bought today! They are super comfortable.",
    scriptEs: "",
    viewersCount: "120K Viewers Live 🔥"
  },
  {
    id: 1,
    title: "Fashion Review • Winter Jacket",
    scriptEn: "Welcome back friends! This warm red jacket was thirty dollars and it has huge cozy pockets.",
    scriptEs: "",
    viewersCount: "185K Viewers Live ✨"
  },
  {
    id: 2,
    title: "Gadget Unboxing • Cool Headphones",
    scriptEn: "Check out that electronics shop! I would like to show you these wireless blue headphones.",
    scriptEs: "",
    viewersCount: "250K Viewers Live 🎧"
  },
  {
    id: 3,
    title: "Bookstore Hunt • Comic Adventures",
    scriptEn: "Look at this superhero comic book! The drawings are colorful and the story is fantastic.",
    scriptEs: "",
    viewersCount: "210K Viewers Live 📚"
  },
  {
    id: 4,
    title: "Food Court Tasting • Fruit Smoothie",
    scriptEn: "We are at the food court! This cold strawberry smoothie is fresh and tastes delicious.",
    scriptEs: "",
    viewersCount: "300K Viewers Live 🍓"
  },
  {
    id: 5,
    title: "Grand Mall Tour • Shopping Finale",
    scriptEn: "Thank you for shopping with me today! Remember to like, subscribe and practice your English!",
    scriptEs: "",
    viewersCount: "500K Viewers Live 🏆"
  }
];

let currentVloggerIndex = 0;
let isVloggerRecording = false;

function loadVloggerScript(index) {
  currentVloggerIndex = index;
  const item = VloggerHaulData[index];
  document.getElementById('vloggerMicBtn').disabled = false;

  document.getElementById('vloggerHaulBadge').textContent = `Video ${index + 1} de ${VloggerHaulData.length}`;
  document.getElementById('vloggerLiveViewers').textContent = item.viewersCount;
  document.getElementById('vloggerTeleprompterText').textContent = `"${item.scriptEn}"`;
  document.getElementById('vloggerTeleprompterEs').textContent = item.scriptEs;
  document.getElementById('vloggerFeedbackBox').innerHTML = '';
}

function listenVloggerModel() {
  sfx.playPop();
  const item = VloggerHaulData[currentVloggerIndex];
  speakEnglish(item.scriptEn, 'vlogger');
}

function toggleVloggerMic() {
  const btn = document.getElementById('vloggerMicBtn');
  const feedback = document.getElementById('vloggerFeedbackBox');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:14px; padding:12px; color:#065f46; font-weight:700;">
        🎤 This browser cannot verify your voice. Practice mode; listen to native audio.
      </div>
    `;
    btn.disabled = true;
    return;
  }

  if (isVloggerRecording) return;

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isVloggerRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#ec4899; font-weight:700;">🔴 LIVE ON THE CHANNEL! Read the script in front of your audience...</span>`;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      feedback.innerHTML = `
        <div style="font-size:1.05rem; font-weight:600; color:#ffffff;">Dijiste: "<strong>${transcript}</strong>"</div>
        <span style="display:inline-block; margin-top:8px; background:rgba(236, 72, 153, 0.25); color:#f472b6; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #ec4899;">
          🌟 Live review practice transcript.
        </span>
      `;
    };

    recognition.onerror = () => {
      feedback.innerHTML = `<span style="color:#94a3b8;">Tap the microphone again to try.</span>`;
    };

    recognition.onend = () => {
      isVloggerRecording = false;
      btn.classList.remove('recording');
    };

    recognition.start();

  } catch (err) {
    btn.classList.remove('recording');
  }
}

function nextVloggerScript() {
  sfx.playPop();
  currentVloggerIndex = (currentVloggerIndex + 1) % VloggerHaulData.length;
  loadVloggerScript(currentVloggerIndex);
}

// ============================================================================
// UNIT 8 INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // 1. Iniciar Obby Engine 2D
  startObbyEngine();

  if (window.location.hash === '#boss') {
    currentStageIndex = 2;
    loadCurrentWorldStage();
    setTimeout(() => {
      triggerBossEncounter();
    }, 400);
  }

  // 2. Iniciar Gold Quest
  loadGoldQuestRound(0);

  // 3. Start POS Touch Register
  loadCashierOrder(0);

  // 4. Iniciar Vlogger Studio
  loadVloggerScript(0);
});
