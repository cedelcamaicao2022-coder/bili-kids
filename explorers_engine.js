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

  playRainbowNote(freq = 440) {
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.32);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.32);
    } catch(e) {}
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

// ============================================================================
// PRESCHOOL AUDIO & SPARKLE HELPERS (BARNABY LITTLE EXPLORERS)
// ============================================================================
function playColorAudio(colorName) {
  const colorMap = {
    'red': 'assets/games_interactive/audio/leo_red_ee38e4d5.mp3',
    'blue': 'assets/games_interactive/audio/leo_blue_9594eec9.mp3',
    'yellow': 'assets/games_interactive/audio/leo_yellow_51e6cd92.mp3',
    'green': 'assets/games_interactive/audio/leo_green_d382816a.mp3',
    'orange': 'assets/games_interactive/audio/leo_orange_909cea0c.mp3',
    'purple': 'assets/games_interactive/audio/leo_purple_b9ba865f.mp3',
    'pink': 'assets/games_interactive/audio/leo_pink_8dc5344b.mp3'
  };
  const path = colorMap[(colorName || '').toLowerCase()];
  if (path) {
    const snd = new Audio(path);
    snd.play().catch(() => speakEnglish(colorName, 'guide'));
  } else {
    speakEnglish(colorName, 'guide');
  }
}

function playCountingAudio(num) {
  const countMap = {
    1: 'assets/kids_audio/keywords/bili_kw_u1_one.mp3',
    2: 'assets/kids_audio/keywords/bili_kw_u1_two.mp3',
    3: 'assets/kids_audio/keywords/bili_kw_u1_three.mp3'
  };
  const path = countMap[num];
  if (path) {
    const snd = new Audio(path);
    snd.play().catch(() => speakEnglish(num.toString(), 'guide'));
  } else {
    speakEnglish(num.toString(), 'guide');
  }
}

function createRainbowSparkles(x, y) {
  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7", "#ec4899", "#ffffff"];
  for (let i = 0; i < 22; i++) {
    const angle = (Math.PI * 2 / 22) * i + Math.random() * 0.2;
    const speed = 2.5 + Math.random() * 4.5;
    if (typeof obbyParticles !== 'undefined') {
      obbyParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        life: 1.0,
        size: Math.random() * 5 + 3,
        color: colors[i % colors.length]
      });
    }
  }
}

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
    name: "World 1 • Rainbow Color World",
    icon: "🌈",
    subtitle: "Learn Colors: Red, Blue, Yellow, Green, Purple! 🎨",
    boss: {
      name: "The Color Monster",
      icon: "👾",
      subtitle: "Adorable Rainbow Eater • Feed Me Colors!",
      maxHp: 100,
      challenges: [
        {
          type: "listening",
          promptEn: "I'm hungry for colors! Feed me RED!",
          audioFile: "assets/games_interactive/audio/leo_red_ee38e4d5.mp3",
          audioText: "Red",
          tryAgainAudio: "assets/games_interactive/audio/leo_try_again_that_is_not_red_2250513d.mp3",
          options: [
            { id: "red", name: "RED", icon: "🔴", colorHex: "#ef4444", correct: true },
            { id: "blue", name: "BLUE", icon: "🔵", colorHex: "#3b82f6", correct: false },
            { id: "yellow", name: "YELLOW", icon: "🟡", colorHex: "#eab308", correct: false }
          ]
        },
        {
          type: "listening",
          promptEn: "I want more colors! Feed me BLUE!",
          audioFile: "assets/games_interactive/audio/leo_blue_9594eec9.mp3",
          audioText: "Blue",
          tryAgainAudio: "assets/games_interactive/audio/leo_try_again_that_is_not_blue_41cdb59f.mp3",
          options: [
            { id: "green", name: "GREEN", icon: "🟢", colorHex: "#22c55e", correct: false },
            { id: "blue", name: "BLUE", icon: "🔵", colorHex: "#3b82f6", correct: true },
            { id: "purple", name: "PURPLE", icon: "🟣", colorHex: "#a855f7", correct: false }
          ]
        },
        {
          type: "listening",
          promptEn: "So yummy! Now feed me YELLOW!",
          audioFile: "assets/games_interactive/audio/leo_yellow_51e6cd92.mp3",
          audioText: "Yellow",
          tryAgainAudio: "assets/games_interactive/audio/leo_try_again_that_is_not_yellow_08544965.mp3",
          options: [
            { id: "yellow", name: "YELLOW", icon: "🟡", colorHex: "#eab308", correct: true },
            { id: "red", name: "RED", icon: "🔴", colorHex: "#ef4444", correct: false },
            { id: "orange", name: "ORANGE", icon: "🟠", colorHex: "#f97316", correct: false }
          ]
        },
        {
          type: "listening",
          promptEn: "Almost full! Feed me GREEN!",
          audioFile: "assets/games_interactive/audio/leo_green_d382816a.mp3",
          audioText: "Green",
          tryAgainAudio: "assets/games_interactive/audio/leo_try_again_that_is_not_green_316e6301.mp3",
          options: [
            { id: "pink", name: "PINK", icon: "🌸", colorHex: "#ec4899", correct: false },
            { id: "blue", name: "BLUE", icon: "🔵", colorHex: "#3b82f6", correct: false },
            { id: "green", name: "GREEN", icon: "🟢", colorHex: "#22c55e", correct: true }
          ]
        }
      ]
    },
    stages: [
      {
        id: 0,
        title: "Stage 1 • The Rainbow Hills & Color Jump 🌈",
        promptEn: "Jump on Blue, Yellow, and Red platforms to restore world colors!",
        bgTheme: "rainbow",
        colorSequence: ["blue", "yellow", "red"],
        currentColorIndex: 0,
        checkpointX: 40,
        finishX: 1350,
        platforms: [
          { x: 0, y: 340, w: 220, h: 60, type: 'grass' },
          { x: 260, y: 280, w: 120, h: 35, type: 'color_pad', color: 'blue', colorHex: '#3b82f6', label: 'BLUE' },
          { x: 480, y: 280, w: 120, h: 35, type: 'color_pad', color: 'yellow', colorHex: '#eab308', label: 'YELLOW' },
          { x: 640, y: 300, w: 100, h: 35, type: 'trampoline' },
          { x: 780, y: 240, w: 120, h: 35, type: 'color_pad', color: 'red', colorHex: '#ef4444', label: 'RED' },
          { x: 940, y: 270, w: 120, h: 35, type: 'color_pad', color: 'green', colorHex: '#22c55e', label: 'GREEN' },
          { x: 1100, y: 320, w: 260, h: 80, type: 'rainbow_ground' }
        ],
        mysteryBlocks: [
          { x: 420, y: 170, w: 45, h: 45, type: 'paint_block', content: 'PAINT 🎨', hit: false, bumpY: 0 }
        ],
        coins: [
          { x: 300, y: 220, collected: false },
          { x: 520, y: 220, collected: false },
          { x: 820, y: 180, collected: false }
        ],
        gate: { x: 1240, y: 215, w: 40, h: 105, unlocked: false }
      },
      {
        id: 1,
        title: "Stage 2 • Starlight Meadow & Red Stars ⭐",
        promptEn: "Collect three shiny Red Stars (One, Two, Three!)",
        bgTheme: "rainbow",
        totalStars: 3,
        starsCollected: 0,
        checkpointX: 40,
        finishX: 1350,
        platforms: [
          { x: 0, y: 340, w: 200, h: 60, type: 'grass' },
          { x: 240, y: 290, w: 120, h: 35, type: 'cloud_bounce' },
          { x: 410, y: 250, w: 130, h: 35, type: 'grass' },
          { x: 580, y: 280, w: 110, h: 35, type: 'mushroom_red' },
          { x: 740, y: 220, w: 130, h: 35, type: 'cloud_bounce' },
          { x: 920, y: 270, w: 130, h: 35, type: 'grass' },
          { x: 1100, y: 320, w: 260, h: 80, type: 'rainbow_ground' }
        ],
        items: [
          { id: "star_1", type: "color_star", color: "red", x: 475, y: 190, name: "Red Star", icon: "⭐", collected: false },
          { id: "star_2", type: "color_star", color: "red", x: 805, y: 160, name: "Red Star", icon: "⭐", collected: false },
          { id: "star_3", type: "color_star", color: "red", x: 985, y: 210, name: "Red Star", icon: "⭐", collected: false }
        ],
        coins: [
          { x: 280, y: 240, collected: false },
          { x: 630, y: 210, collected: false }
        ],
        gate: { x: 1240, y: 215, w: 40, h: 105, unlocked: false }
      },
      {
        id: 2,
        title: "Stage 3 • The Rainbow Bridge & Color Doors 🚪🌈",
        promptEn: "Cross the Rainbow Bridge steps and find the Yellow Door!",
        bgTheme: "rainbow",
        targetDoorColor: "yellow",
        doorWarping: false,
        checkpointX: 40,
        finishX: 1400,
        platforms: [
          { x: 0, y: 340, w: 150, h: 60, type: 'grass' },
          { x: 180, y: 310, w: 85, h: 25, type: 'rainbow_step', colorHex: '#ef4444', noteFreq: 261.63, name: 'RED' },
          { x: 285, y: 270, w: 85, h: 25, type: 'rainbow_step', colorHex: '#f97316', noteFreq: 293.66, name: 'ORANGE' },
          { x: 390, y: 230, w: 85, h: 25, type: 'rainbow_step', colorHex: '#eab308', noteFreq: 329.63, name: 'YELLOW' },
          { x: 495, y: 230, w: 85, h: 25, type: 'rainbow_step', colorHex: '#22c55e', noteFreq: 349.23, name: 'GREEN' },
          { x: 600, y: 270, w: 85, h: 25, type: 'rainbow_step', colorHex: '#3b82f6', noteFreq: 392.00, name: 'BLUE' },
          { x: 705, y: 310, w: 85, h: 25, type: 'rainbow_step', colorHex: '#a855f7', noteFreq: 440.00, name: 'PURPLE' },
          { x: 820, y: 340, w: 560, h: 60, type: 'rainbow_ground' }
        ],
        doors: [
          { x: 910, y: 255, w: 55, h: 85, color: 'red', colorHex: '#ef4444', label: 'RED DOOR', icon: '🔴', isTarget: false },
          { x: 1040, y: 255, w: 55, h: 85, color: 'yellow', colorHex: '#eab308', label: 'YELLOW DOOR', icon: '🟡', isTarget: true },
          { x: 1170, y: 255, w: 55, h: 85, color: 'blue', colorHex: '#3b82f6', label: 'BLUE DOOR', icon: '🔵', isTarget: false }
        ],
        gate: null
      },
      {
        id: 3,
        title: "Stage 4 • 👑 BOSS ARENA: The Color Monster 👾🎨",
        promptEn: "Feed yummy colors to The Color Monster to restore the world!",
        bgTheme: "rainbow",
        isBossArena: true,
        checkpointX: 60,
        finishX: 1400,
        platforms: [
          { x: 0, y: 340, w: 1400, h: 60, type: 'rainbow_ground' }
        ],
        items: [],
        coins: [],
        gate: { x: 1320, y: 215, w: 40, h: 105, unlocked: false }
      }
    ]
  },
  {
    id: 2,
    name: "World 2 • Animal Forest",
    icon: "🦁",
    subtitle: "Animals & Nature Sounds: Lion, Elephant, Monkey, Bird!",
    boss: {
      name: "The Sleepy Lion",
      icon: "🦁",
      subtitle: "Wobbly Big Kitty • Wake Up With Sounds!",
      maxHp: 100,
      challenges: [
        {
          type: "listening",
          promptEn: "Listen and find the elephant!",
          audioFile: "assets/games_interactive/audio/leo_elephant_a5f3c6a1.mp3",
          audioText: "Elephant",
          options: [
            { id: "elephant", name: "ELEPHANT", icon: "🐘", correct: true },
            { id: "cat", name: "CAT", icon: "🐱", correct: false },
            { id: "dog", name: "DOG", icon: "🐶", correct: false }
          ]
        }
      ]
    },
    stages: [
      {
        id: 0,
        title: "Stage 1 • The Emerald Canopy 🌿",
        promptEn: "Find friendly animal friends in the deep forest!",
        bgTheme: "meadow",
        checkpointX: 40,
        finishX: 1350,
        platforms: [
          { x: 0, y: 340, w: 220, h: 60, type: 'grass' },
          { x: 260, y: 290, w: 130, h: 25, type: 'wood_pier' },
          { x: 430, y: 240, w: 110, h: 35, type: 'trampoline' },
          { x: 580, y: 270, w: 120, h: 25, type: 'wood_pier' },
          { x: 740, y: 230, w: 130, h: 25, type: 'wood_pier' },
          { x: 920, y: 280, w: 110, h: 35, type: 'trampoline' },
          { x: 1080, y: 320, w: 260, h: 80, type: 'grass' }
        ],
        gate: { x: 1240, y: 215, w: 40, h: 105, unlocked: true }
      }
    ]
  },
  {
    id: 3,
    name: "World 3 • Number Kingdom",
    icon: "🔢",
    subtitle: "Count 1 to 10 with Stars, Balloons & Blocks!",
    boss: {
      name: "The Number Giant",
      icon: "🗿",
      subtitle: "Friendly Stone Giant • Give Me Numbers!",
      maxHp: 100,
      challenges: []
    },
    stages: []
  },
  {
    id: 4,
    name: "World 4 • My Little House",
    icon: "🏠",
    subtitle: "House & Rooms: Bedroom, Kitchen, Living Room!",
    boss: {
      name: "The Messy House Monster",
      icon: "🧹",
      subtitle: "Tidy Up the Toys & Furniture!",
      maxHp: 100,
      challenges: []
    },
    stages: []
  },
  {
    id: 5,
    name: "World 5 • Yummy Garden",
    icon: "🍎",
    subtitle: "Delicious Fruits: Apple, Banana, Grapes, Strawberry!",
    boss: {
      name: "The Hungry Caterpillar",
      icon: "🐛",
      subtitle: "Yummy Yummy Fruits!",
      maxHp: 100,
      challenges: []
    },
    stages: []
  },
  {
    id: 6,
    name: "World 6 • Vehicle City",
    icon: "🚗",
    subtitle: "Vehicles & Speed: Car, Bus, Train, Plane, Boat!",
    boss: {
      name: "The Traffic Robot",
      icon: "🚦",
      subtitle: "Red Light, Green Light!",
      maxHp: 100,
      challenges: []
    },
    stages: []
  },
  {
    id: 7,
    name: "World 7 • Toy Wonder Park",
    icon: "🧸",
    subtitle: "Action Verbs: Jump, Run, Dance, Sing & Play!",
    boss: {
      name: "The Wind-Up King",
      icon: "👑",
      subtitle: "Dance with the Wind-Up King!",
      maxHp: 100,
      challenges: []
    },
    stages: []
  },
  {
    id: 8,
    name: "World 8 • Little Cosmos",
    icon: "🪐",
    subtitle: "Cosmic Wonders: Sun, Moon, Stars, Rockets & Planets!",
    boss: {
      name: "The Cosmic Nova",
      icon: "✨",
      subtitle: "Galaxy Light Guardian!",
      maxHp: 100,
      challenges: []
    },
    stages: []
  }
];
window.WORLDS_DATA = WORLDS_DATA;

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
  for (let w = 1; w <= 8; w++) {
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
  stage.isPainted = false;
  stage.doorWarping = false;

  if (stage.colorSequence) {
    stage.currentColorIndex = 0;
    const firstCol = stage.colorSequence[0];
    setTimeout(() => {
      playColorAudio(firstCol);
      showObbyFloatingBanner(`🎯 JUMP ON ${firstCol.toUpperCase()}! 🌈`);
    }, 600);
  } else if (stage.items && stage.items.length > 0) {
    stage.starsCollected = 0;
    setTimeout(() => {
      const starSnd = new Audio('assets/games_interactive/audio/leo_star_26f93e6e.mp3');
      starSnd.play().catch(() => speakEnglish("Collect three red stars!", "guide"));
      showObbyFloatingBanner("⭐ COLLECT THREE RED STARS! 🔴");
    }, 600);
  } else if (stage.doors) {
    setTimeout(() => {
      const yellowSnd = new Audio('assets/games_interactive/audio/leo_yellow_51e6cd92.mp3');
      yellowSnd.play().catch(() => speakEnglish("Find the yellow door!", "guide"));
      showObbyFloatingBanner("🚪 FIND THE YELLOW DOOR! 🌟");
    }, 600);
  }

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
  const titleEl = document.getElementById('obbyStageTitle');
  if (titleEl) titleEl.textContent = `${world.icon} ${stage.title}`;
  const promptEnEl = document.getElementById('obbyGatePromptEn');
  if (promptEnEl) promptEnEl.textContent = `🎯 Mission: "${stage.promptEn}"`;
  const promptEsEl = document.getElementById('obbyGatePromptEs');
  if (promptEsEl) promptEsEl.style.display = 'none';
  const coinsBadge = document.getElementById('obbyCoinsBadge');
  if (coinsBadge) coinsBadge.textContent = `🪙 Coins: ${Player.coinsCollected}`;

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
    container.innerHTML = `<span style="color:#f472b6; font-weight:800; font-size:1rem;">👾 THE COLOR MONSTER: FEED COLORS!</span>`;
  } else if (currentObbyStage.colorSequence) {
    const isDone = currentObbyStage.currentColorIndex >= currentObbyStage.colorSequence.length;
    const curr = isDone ? 'COMPLETED' : currentObbyStage.colorSequence[currentObbyStage.currentColorIndex];
    container.innerHTML = `<span style="color:${isDone ? '#34d399' : '#fde047'}; font-weight:800; font-size:0.95rem;">
      ${isDone ? '🎉 ALL COLORS JUMPED!' : `🎯 JUMP ON: ${curr.toUpperCase()} (${currentObbyStage.currentColorIndex}/${currentObbyStage.colorSequence.length})`}
    </span>`;
  } else if (currentObbyStage.items && currentObbyStage.items.length > 0) {
    const count = currentObbyStage.items.filter(i => i.collected).length;
    const total = currentObbyStage.items.length;
    container.innerHTML = `<span style="color:${count >= total ? '#34d399' : '#f87171'}; font-weight:800; font-size:0.95rem;">
      ⭐ RED STARS: ${count} / ${total}
    </span>`;
  } else if (currentObbyStage.doors) {
    container.innerHTML = `<span style="color:#fde047; font-weight:800; font-size:0.95rem;">
      🚪 FIND: YELLOW DOOR
    </span>`;
  } else {
    container.innerHTML = `<span style="color:#38bdf8; font-weight:700;">Explore & Reach Goal</span>`;
  }

  const gateBadge = document.getElementById('obbyGateStatusBadge');
  if (gateBadge) {
    if (currentObbyStage.gate && currentObbyStage.gate.unlocked) {
      gateBadge.innerHTML = `<span style="color:#34d399; font-weight:800;">🌈 PORTAL: OPEN!</span>`;
    } else if (currentObbyStage.doors) {
      gateBadge.innerHTML = `<span style="color:#fde047; font-weight:800;">🚪 WARP DOORS ACTIVE</span>`;
    } else {
      gateBadge.innerHTML = `<span style="color:#fca5a5; font-weight:700;">🔒 PORTAL: LOCKED</span>`;
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

    areaListening.style.display = 'flex';
    areaListening.style.justifyContent = 'center';
    areaListening.style.gap = '14px';
    areaListening.style.flexWrap = 'wrap';

    areaListening.innerHTML = challenge.options.map((opt, idx) => `
      <button class="audio-choice-btn" style="background:${opt.colorHex || '#312e81'}; border:3px solid #ffffff; min-width:115px; padding:16px 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); cursor:pointer;" onclick="selectListeningChoice(${idx})">
        <span class="audio-choice-icon" style="font-size:2.8rem;">${opt.icon}</span>
        <span style="font-size:1.15rem; font-weight:900; letter-spacing:1px; color:#ffffff; text-shadow:0 2px 4px rgba(0,0,0,0.6);">${opt.name}</span>
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
  if (!challenge) return;
  const chosen = challenge.options[idx];

  if (chosen && chosen.correct) {
    // Correct! Spawn joyful friendly color cannon from hero to boss
    Boss.projectiles.push({
      x: Player.x + Player.w,
      y: 280,
      vx: 14,
      radius: 16,
      color: chosen.colorHex || '#ef4444',
      isFriendly: true
    });

    // Play color praise audio
    const colorVoice = new Audio(challenge.audioFile);
    colorVoice.play().catch(() => {});

    Player.celebratingTimer = 40;
    executeBossAttack(25, `✨ Correct! Barnaby feeds yummy ${chosen.name} to The Color Monster! 🌈`);
  } else {
    sfx.playError();
    if (challenge.tryAgainAudio) {
      const trySnd = new Audio(challenge.tryAgainAudio);
      trySnd.play().catch(() => {});
    }
    document.getElementById('bossChallengeFeedback').innerHTML = `<span style="color:#fde047; font-weight:800; font-size:1.05rem;">Try again! Find ${challenge.audioText.toUpperCase()}! 🎨</span>`;
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

  // Play triumphant completion audio!
  const winAudio = new Audio('assets/games_interactive/audio/leo_hooray_you_mastered_all_color_le_f67c3e13.mp3');
  winAudio.play().catch(() => {});

  // Open victory modal
  const vicModal = document.getElementById('worldVictoryModal');
  const title = document.getElementById('worldVictoryTitle');
  const desc = document.getElementById('worldVictoryDesc');
  const btnNext = document.getElementById('btnNextWorldUnlock');

  if (vicModal) {
    vicModal.style.display = 'flex';
    title.innerHTML = `WORLD ${currentWorldId} CONQUERED! 🌈🏆`;
    desc.textContent = `You restored all colors to Rainbow Color World and became best friends with ${WORLDS_DATA[currentWorldId - 1].boss.name}!`;

    // Unlock next world
    if (unlockedWorlds <= currentWorldId && currentWorldId < 8) {
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

  if (currentWorldId < 8) {
    selectWorld(currentWorldId + 1);
  } else {
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

      if (p.type === 'color_pad') {
        if (stage.colorSequence && stage.currentColorIndex < stage.colorSequence.length) {
          const targetCol = stage.colorSequence[stage.currentColorIndex];
          if (p.color === targetCol) {
            stage.currentColorIndex++;
            sfx.playSuccess();
            createRainbowSparkles(Player.x + Player.w / 2, Player.y + Player.h);
            playColorAudio(p.color);
            Player.vy = -10;
            Player.celebratingTimer = 35;

            if (stage.currentColorIndex >= stage.colorSequence.length) {
              if (stage.gate) stage.gate.unlocked = true;
              showObbyFloatingBanner("🌟 ALL COLORS RESTORED! ENTER THE PORTAL! 🌈");
              setTimeout(() => {
                const winSnd = new Audio('assets/games_interactive/audio/leo_awesome_job_level_1_completed_ne_b2ef1e9e.mp3');
                winSnd.play().catch(() => {});
              }, 400);
            } else {
              const nextCol = stage.colorSequence[stage.currentColorIndex];
              showObbyFloatingBanner(`🎯 JUMP ON ${nextCol.toUpperCase()}! 🌈`);
              setTimeout(() => {
                playColorAudio(nextCol);
              }, 600);
            }
            updateObbyHudChecklist();
          }
        }
      } else if (p.type === 'rainbow_step') {
        if (!p.steppedRecently) {
          p.steppedRecently = true;
          setTimeout(() => { p.steppedRecently = false; }, 350);
          _rawSfx.playRainbowNote(p.noteFreq || 350);
          createRainbowSparkles(Player.x + Player.w / 2, p.y);
          Player.scaleY = 1.15;
        }
      } else if (p.type === 'trampoline') {
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
          if (b.type === 'paint_block') {
            b.hit = true;
            b.solved = true;
            b.bumpY = -16;
            stage.isPainted = true;
            sfx.playSuccess();
            createRainbowSparkles(b.x + b.w / 2, b.y);
            showObbyFloatingBanner("🎨 PAINT THE WORLD! VIBRANT COLORS RESTORED! 🌈");
            speakEnglish("Paint the world! Beautiful rainbow colors!", "guide");
          } else if (b.challenge) {
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
          if (it.type === 'color_star') {
            stage.starsCollected = (stage.starsCollected || 0) + 1;
            createCoinSparkle(it.x, it.y);
            playCountingAudio(stage.starsCollected);
            Player.celebratingTimer = 25;
            showObbyFloatingBanner(`⭐ ${stage.starsCollected} / ${stage.totalStars || 3} STARS COLLECTED!`);
            if (stage.starsCollected >= (stage.totalStars || 3)) {
              if (stage.gate) {
                stage.gate.unlocked = true;
                setTimeout(() => {
                  const winSnd = new Audio('assets/games_interactive/audio/leo_awesome_job_level_1_completed_ne_b2ef1e9e.mp3');
                  winSnd.play().catch(() => {});
                }, 500);
                showObbyFloatingBanner("🌟 ALL 3 STARS COLLECTED! WARP PORTAL OPEN! 🌈");
              }
            }
            updateObbyHudChecklist();
          } else {
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

    // Boss shoots dodgable projectile every ~4.5 seconds (Only in non-preschool worlds)
    if (Boss.shootTimer > 260 && currentWorldId !== 1) {
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

      if (pr.isFriendly) {
        // Friendly color cannon blast hits the monster
        if (pr.x >= Boss.x + 20) {
          Boss.hitFlashes = 25;
          createRainbowSparkles(Boss.x + Boss.w / 2, Boss.y + Boss.h / 2);
          sfx.playPop();
          Boss.projectiles.splice(i, 1);
        }
      } else {
        // Player hit by obstacle
        if (
          Player.x + Player.w > pr.x - pr.radius &&
          Player.x < pr.x + pr.radius &&
          Player.y + Player.h > pr.y - pr.radius &&
          Player.y < pr.y + pr.radius
        ) {
          sfx.playError();
          Player.hearts = Math.max(0, Player.hearts - 1);
          updatePlayerHeartsUI();
          Player.vy = -5;
          Player.vx = -6;
          Boss.projectiles.splice(i, 1);

          if (Player.hearts <= 0) {
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
  }

  // Rainbow Color Doors Collision Check
  if (stage.doors) {
    stage.doors.forEach(d => {
      const dist = Math.hypot((Player.x + Player.w / 2) - (d.x + d.w / 2), (Player.y + Player.h / 2) - (d.y + d.h / 2));
      if (dist < 45 && !stage.doorWarping) {
        if (d.isTarget) {
          stage.doorWarping = true;
          sfx.playSuccess();
          createRainbowSparkles(d.x + d.w / 2, d.y + d.h / 2);
          showObbyFloatingBanner("🚪 YELLOW DOOR OPEN! ENTERING BOSS ARENA! 🌈");
          const doorSnd = new Audio('assets/games_interactive/audio/leo_yes_that_is_yellow_sun_awesome_c9d4747d.mp3');
          doorSnd.play().catch(() => {});
          setTimeout(() => {
            currentStageIndex++;
            loadCurrentWorldStage();
          }, 900);
        } else {
          if (!d.lastWarn || now - d.lastWarn > 2500) {
            d.lastWarn = now;
            sfx.playError();
            const trySnd = new Audio('assets/games_interactive/audio/leo_try_again_that_is_not_yellow_08544965.mp3');
            trySnd.play().catch(() => speakEnglish("Try again! Find the yellow door!", "guide"));
            showObbyFloatingBanner("🚪 Not this door! Find the YELLOW door!");
          }
        }
      }
    });
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

    if (p.type === 'color_pad') {
      const isTarget = stage.colorSequence && stage.colorSequence[stage.currentColorIndex] === p.color;
      drawColorPadPlatform(ctx, rx, p.y, p.w, p.h, p, isTarget, now);
    } else if (p.type === 'rainbow_step') {
      drawRainbowStep(ctx, rx, p.y, p.w, p.h, p.colorHex, p.name, now);
    } else if (p.type === 'rainbow_ground') {
      drawRainbowGround(ctx, rx, p.y, p.w, p.h, now);
      if (stage.gate) {
        drawRainbowPortalGate(ctx, rx + 140, p.y - 85, 75, 85, stage.gate.unlocked, now);
      }
    } else if (p.type === 'grass') {
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

  // Render Color Doors
  if (stage.doors) {
    stage.doors.forEach(d => {
      drawColorDoor(ctx, d.x - cameraX, d.y, d.w, d.h, d, now);
    });
  }

  // Render Mystery Blocks [ ? ]
  if (stage.mysteryBlocks) {
    stage.mysteryBlocks.forEach(b => {
      const rx = b.x - cameraX;
      const ry = b.y + b.bumpY;
      if (rx + b.w < -20 || rx > canvas.width + 20) return;

      if (b.type === 'paint_block') {
        drawPaintBlock(ctx, rx, ry, b.w, b.h, b.hit, b.bumpY, now);
      } else if (!b.hit) {
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

  // Render Items (Floating stars / items)
  if (stage.items) {
    stage.items.forEach(it => {
      if (!it.collected) {
        if (it.type === 'color_star') {
          drawColorStar(ctx, it.x - cameraX, it.y, it.color, now);
        } else {
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
      drawBossColorMonster(ctx, bx, by, Boss.w, Boss.h, now);
    } else if (currentWorldId === 2) {
      drawBossCaptainSquiddy(ctx, bx, by, Boss.w, Boss.h, now);
    } else {
      drawBossGummyDragon(ctx, bx, by, Boss.w, Boss.h, now);
    }

    ctx.globalAlpha = 1.0;

    // Render Projectiles
    Boss.projectiles.forEach(pr => {
      const px = pr.x - cameraX;
      if (pr.isFriendly) {
        ctx.fillStyle = pr.color || "#ef4444";
        ctx.beginPath();
        ctx.arc(px, pr.y, pr.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(px - 4, pr.y - 4, pr.radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(px, pr.y, pr.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fde047";
        ctx.beginPath();
        ctx.arc(px - 3, pr.y - 3, 4, 0, Math.PI * 2);
        ctx.fill();
      }
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
  if (theme === 'rainbow') {
    const isPainted = currentObbyStage && currentObbyStage.isPainted;
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    if (isPainted) {
      skyGrad.addColorStop(0, "#c084fc");
      skyGrad.addColorStop(0.4, "#67e8f9");
      skyGrad.addColorStop(0.8, "#fbcfe8");
      skyGrad.addColorStop(1, "#fef08a");
    } else {
      skyGrad.addColorStop(0, "#d8b4fe");
      skyGrad.addColorStop(0.5, "#bae6fd");
      skyGrad.addColorStop(1, "#fed7aa");
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    // Giant Rainbow Arch in background
    const rainbowColors = isPainted
      ? ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"]
      : ["rgba(239, 68, 68, 0.4)", "rgba(249, 115, 22, 0.4)", "rgba(234, 179, 8, 0.4)", "rgba(34, 197, 94, 0.4)", "rgba(59, 130, 246, 0.4)", "rgba(139, 92, 246, 0.4)", "rgba(236, 72, 153, 0.4)"];

    const archCenterX = W * 0.5;
    const archCenterY = H * 0.95;
    rainbowColors.forEach((col, idx) => {
      ctx.strokeStyle = col;
      ctx.lineWidth = 11;
      ctx.beginPath();
      ctx.arc(archCenterX, archCenterY, 270 - idx * 11, Math.PI, 0);
      ctx.stroke();
    });

    // Golden sunshine
    ctx.fillStyle = "#fef08a";
    ctx.beginPath();
    ctx.arc(80, 50, 34, 0, Math.PI * 2);
    ctx.fill();

    // Kawaii Clouds
    drawMarioCloud(ctx, 160, 55, 1.2);
    drawMarioCloud(ctx, 480, 45, 1.4);
    drawMarioCloud(ctx, 720, 65, 1.1);

    // Rolling pastel hills
    ctx.fillStyle = isPainted ? "#86efac" : "rgba(134, 239, 172, 0.65)";
    ctx.beginPath();
    ctx.arc(140, 360, 160, Math.PI, 0);
    ctx.arc(460, 370, 180, Math.PI, 0);
    ctx.fill();

    ctx.fillStyle = isPainted ? "#4ade80" : "rgba(74, 222, 128, 0.65)";
    ctx.beginPath();
    ctx.arc(300, 370, 150, Math.PI, 0);
    ctx.arc(680, 370, 160, Math.PI, 0);
    ctx.fill();

  } else if (theme === 'beach') {
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


// ============================================================================
// PRESCHOOL PROCEDURAL RENDERERS (BARNABY LITTLE EXPLORERS)
// ============================================================================
function drawColorPadPlatform(ctx, x, y, w, h, p, isTarget, now) {
  const pulse = isTarget ? Math.sin((now || 0) * 0.008) * 4 : 0;
  const col = p.colorHex || "#3b82f6";

  // Base platform
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.roundRect(x, y - (isTarget ? pulse : 0), w, h + (isTarget ? pulse : 0), 10);
  ctx.fill();

  // Glossy highlight
  ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
  ctx.beginPath();
  ctx.roundRect(x + 4, y - (isTarget ? pulse : 0) + 3, w - 8, 8, 4);
  ctx.fill();

  // Border
  ctx.strokeStyle = isTarget ? "#ffffff" : "rgba(0, 0, 0, 0.25)";
  ctx.lineWidth = isTarget ? 3 : 2;
  ctx.stroke();

  // Color label text
  ctx.fillStyle = "#ffffff";
  ctx.font = "900 12px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(p.label || p.color.toUpperCase(), x + w / 2, y + 20 - (isTarget ? pulse : 0));

  // If active target, draw bouncy arrow indicator above
  if (isTarget) {
    ctx.font = "16px sans-serif";
    ctx.fillText("⬇", x + w / 2, y - 12 - pulse);
  }
  ctx.textAlign = "start";
}

function drawRainbowStep(ctx, x, y, w, h, col, noteName, now) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 8);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.beginPath();
  ctx.roundRect(x + 2, y + 2, w - 4, 6, 3);
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.65)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 11px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🎵 " + (noteName || ""), x + w / 2, y + 16);
  ctx.textAlign = "start";
}

function drawRainbowGround(ctx, x, y, w, h, now) {
  const soilGrad = ctx.createLinearGradient(x, y, x, y + h);
  soilGrad.addColorStop(0, "#7c3aed");
  soilGrad.addColorStop(1, "#4c1d95");
  ctx.fillStyle = soilGrad;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 10);
  ctx.fill();

  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"];
  const stripW = w / colors.length;
  colors.forEach((col, idx) => {
    ctx.fillStyle = col;
    ctx.fillRect(x + idx * stripW, y, stripW + 1, 8);
  });
}

function drawColorDoor(ctx, x, y, w, h, door, now) {
  const pulse = door.isTarget ? Math.sin((now || 0) * 0.007) * 4 : 0;
  const col = door.colorHex || "#ef4444";

  // Door Frame
  ctx.fillStyle = "#334155";
  ctx.beginPath();
  ctx.roundRect(x - 4, y - 4, w + 8, h + 4, [16, 16, 0, 0]);
  ctx.fill();

  // Arched Door Panel
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, [14, 14, 0, 0]);
  ctx.fill();

  // Door Knob
  ctx.fillStyle = "#fbbf24";
  ctx.beginPath();
  ctx.arc(x + 10, y + h / 2, 5, 0, Math.PI * 2);
  ctx.fill();

  // Gem on top
  ctx.fillStyle = door.isTarget ? "#fde047" : "#ffffff";
  ctx.beginPath();
  ctx.arc(x + w / 2, y - 10, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Label above door
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 10px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(door.label || door.color.toUpperCase(), x + w / 2, y - 22 + (door.isTarget ? pulse : 0));
  if (door.isTarget) {
    ctx.font = "14px sans-serif";
    ctx.fillText("🌟", x + w / 2, y - 36 + pulse);
  }
  ctx.textAlign = "start";
}

function drawRainbowPortalGate(ctx, x, y, w, h, isUnlocked, now) {
  const pulse = Math.sin((now || 0) * 0.006) * 4;

  const portalGrad = ctx.createLinearGradient(x, y, x + w, y + h);
  portalGrad.addColorStop(0, "#f43f5e");
  portalGrad.addColorStop(0.3, "#fbbf24");
  portalGrad.addColorStop(0.6, "#22c55e");
  portalGrad.addColorStop(1, "#3b82f6");

  ctx.strokeStyle = isUnlocked ? portalGrad : "#475569";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(x + w / 2, y + 25, w / 2, Math.PI, 0);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.closePath();
  ctx.stroke();

  if (isUnlocked) {
    const vortexGrad = ctx.createRadialGradient(x + w / 2, y + 35, 4, x + w / 2, y + 35, w / 2);
    vortexGrad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
    vortexGrad.addColorStop(0.5, "rgba(168, 85, 247, 0.6)");
    vortexGrad.addColorStop(1, "rgba(59, 130, 246, 0.4)");
    ctx.fillStyle = vortexGrad;
    ctx.beginPath();
    ctx.arc(x + w / 2, y + 25, w / 2 - 4, Math.PI, 0);
    ctx.lineTo(x + w - 4, y + h);
    ctx.lineTo(x + 4, y + h);
    ctx.closePath();
    ctx.fill();

    ctx.font = "24px sans-serif";
    ctx.fillText("🌈", x + w / 2 - 12, y - 10 + pulse);
    ctx.fillStyle = "#34d399";
    ctx.font = "bold 11px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("ENTER ➔", x + w / 2, y - 28 + pulse);
    ctx.textAlign = "start";
  } else {
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.beginPath();
    ctx.arc(x + w / 2, y + 25, w / 2 - 4, Math.PI, 0);
    ctx.lineTo(x + w - 4, y + h);
    ctx.lineTo(x + 4, y + h);
    ctx.closePath();
    ctx.fill();

    ctx.font = "22px sans-serif";
    ctx.fillText("🔒", x + w / 2 - 11, y - 8 + pulse);
    ctx.fillStyle = "#f87171";
    ctx.font = "bold 10px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("LOCKED", x + w / 2, y - 26 + pulse);
    ctx.textAlign = "start";
  }
}

function drawPaintBlock(ctx, x, y, w, h, isHit, bumpY, now) {
  const ry = y + bumpY;
  const grad = ctx.createLinearGradient(x, ry, x, ry + h);
  if (!isHit) {
    grad.addColorStop(0, "#ec4899");
    grad.addColorStop(0.5, "#a855f7");
    grad.addColorStop(1, "#6366f1");
  } else {
    grad.addColorStop(0, "#64748b");
    grad.addColorStop(1, "#334155");
  }
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(x, ry, w, h, 8);
  ctx.fill();

  ctx.strokeStyle = isHit ? "#475569" : "#fde047";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.font = isHit ? "18px sans-serif" : "20px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(isHit ? "✨" : "🎨", x + w / 2, ry + h / 2 + 7);
  ctx.textAlign = "start";
}

function drawColorStar(ctx, x, y, color, now) {
  const bob = Math.sin((now || 0) * 0.005 + x) * 6;
  const sy = y + bob;
  const pulse = Math.sin((now || 0) * 0.008) * 2;

  ctx.save();
  ctx.translate(x, sy);

  ctx.fillStyle = color === 'red' ? "rgba(239, 68, 68, 0.4)" : "rgba(250, 204, 21, 0.4)";
  ctx.beginPath();
  ctx.arc(0, 0, 18 + pulse, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color === 'red' ? "#ef4444" : "#facc15";
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const r = 14 + pulse;
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(-3, -3, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawBossColorMonster(ctx, x, y, w, h, now) {
  const bob = Math.sin((now || 0) * 0.005) * 6;
  const my = y + bob;
  const phase = Boss.currentChallengeIndex || 0;

  let bodyColor = "#94a3b8";
  let bellyColor = "#cbd5e1";

  if (phase === 1) {
    bodyColor = "#ef4444";
    bellyColor = "#fca5a5";
  } else if (phase === 2) {
    bodyColor = "#3b82f6";
    bellyColor = "#93c5fd";
  } else if (phase === 3) {
    bodyColor = "#eab308";
    bellyColor = "#fef08a";
  } else if (phase >= 4 || Boss.defeated) {
    const hue = (now * 0.1) % 360;
    bodyColor = `hsl(${hue}, 85%, 60%)`;
    bellyColor = "#ffffff";
  }

  ctx.save();

  // Gentle shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.beginPath();
  ctx.ellipse(x + w / 2, y + h + 8, w / 2 + 10, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Cute Little Horns / Antennae
  ctx.fillStyle = "#fbbf24";
  ctx.beginPath();
  ctx.arc(x + 28, my + 6, 10, 0, Math.PI * 2);
  ctx.arc(x + w - 28, my + 6, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#d97706";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Round chubby body
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.roundRect(x, my + 14, w, h - 14, [40, 40, 26, 26]);
  ctx.fill();
  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Soft belly
  ctx.fillStyle = bellyColor;
  ctx.beginPath();
  ctx.ellipse(x + w / 2, my + 64, w * 0.32, h * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();

  // Big Expressive Kawaii Eyes
  const eyeBlink = Math.sin((now || 0) * 0.003) > 0.96;
  const eyeY = my + 38;
  const leftEyeX = x + w / 2 - 20;
  const rightEyeX = x + w / 2 + 20;

  if (eyeBlink) {
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(leftEyeX, eyeY, 8, Math.PI, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(rightEyeX, eyeY, 8, Math.PI, 0);
    ctx.stroke();
  } else {
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.arc(leftEyeX, eyeY, 11, 0, Math.PI * 2);
    ctx.arc(rightEyeX, eyeY, 11, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(leftEyeX - 3, eyeY - 3, 4, 0, Math.PI * 2);
    ctx.arc(rightEyeX - 3, eyeY - 3, 4, 0, Math.PI * 2);
    ctx.arc(leftEyeX + 3, eyeY + 3, 2, 0, Math.PI * 2);
    ctx.arc(rightEyeX + 3, eyeY + 3, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Rosy cheeks
  ctx.fillStyle = "rgba(244, 63, 94, 0.45)";
  ctx.beginPath();
  ctx.ellipse(leftEyeX - 10, eyeY + 12, 7, 5, 0, 0, Math.PI * 2);
  ctx.ellipse(rightEyeX + 10, eyeY + 12, 7, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Cheerful Mouth
  ctx.fillStyle = "#b91c1c";
  ctx.beginPath();
  ctx.arc(x + w / 2, my + 54, 9, 0, Math.PI);
  ctx.fill();
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Little stubby feet
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.ellipse(x + 24, my + h + 2, 14, 8, 0, 0, Math.PI * 2);
  ctx.ellipse(x + w - 24, my + h + 2, 14, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Crown when full
  if (phase >= 4 || Boss.defeated) {
    ctx.font = "24px sans-serif";
    ctx.fillText("👑", x + w / 2 - 12, my - 6);
  }

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
    if (currentObbyStage.colorSequence && currentObbyStage.currentColorIndex < currentObbyStage.colorSequence.length) {
      const col = currentObbyStage.colorSequence[currentObbyStage.currentColorIndex];
      playColorAudio(col);
    } else {
      speakEnglish(currentObbyStage.promptEn, 'guide');
    }
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

  // Obby 2D Engine runs
  if (typeof loadGoldQuestRound === 'function' && document.getElementById('goldQuestionContainer')) {
    loadGoldQuestRound(0);
  }
  if (typeof loadCashierOrder === 'function' && document.getElementById('cashierScreenText')) {
    loadCashierOrder(0);
  }
  if (typeof loadVloggerScript === 'function' && document.getElementById('vloggerTeleprompterText')) {
    loadVloggerScript(0);
  }
});
