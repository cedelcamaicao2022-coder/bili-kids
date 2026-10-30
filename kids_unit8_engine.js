/**
 * ============================================================================
 * BILIKIDS KIDS CLUB - UNIDAD 8: SHOPPING & THE MALL OBBY RUN
 * Motor Interactivo de Videojuego 2D Canvas, Blooket Gold Quest, Cajero Táctil y Vlogger
 * Compatible con Cambridge Young Learners Movers A2 (CEFR Pre-A1 / A1-A2)
 * ============================================================================
 */

// ============================================================================
// GESTIÓN DE ESTADO GLOBAL Y ESTRELLAS (Local Storage)
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

const sfx = new SoundEffects();

// ============================================================================
// SPEECH SYNTHESIS ENGINE (Safe Callback + Timeout Fallback)
// ============================================================================
function speakEnglish(text, voiceType = 'guide', onComplete = null) {
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
// SISTEMA DE NAVEGACIÓN POR PESTAÑAS
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

  // Si abrimos la pestaña del Obby, asegurarnos de que el Canvas y el loop estén activos
  if (tabId === 'obby') {
    startObbyEngine();
  }
}

// ============================================================================
// ACTIVIDAD 1: 🏃‍♂️ BARNABY'S MALL OBBY RUN 2D (HTML5 CANVAS PLATFORMER)
// Videojuego estilo Roblox Obbies / Stumble Guys
// ============================================================================
const ObbyStages = [
  {
    id: 0,
    title: "Stage 1 • The Sneaker Boutique (This vs These) 👟",
    desc: "Salta cajas de zapatos y percheros. Elige el puente correcto: si caes en el puente incorrecto, colapsará.",
    promptEn: "Find THIS blue jacket and choose the correct bridge to cross!",
    promptEs: "¡Encuentra ESTA chaqueta azul y elige el puente gramaticalmente correcto para cruzar!",
    requiredItems: ["blue_jacket"],
    checkpointX: 40,
    finishX: 1350,
    bgColor: "#312e81",
    hasTerminal: false,
    platforms: [
      { x: 0, y: 340, w: 200, h: 60, type: 'normal' },
      { x: 235, y: 300, w: 120, h: 20, type: 'shoe_box' },
      { x: 385, y: 260, w: 130, h: 20, type: 'shoe_box' },
      // Plataforma de aproximación a los dos puentes
      { x: 545, y: 280, w: 100, h: 20, type: 'normal' },
      // Dos puentes misteriosos (sin pistas ✅ ni ❌)
      { x: 675, y: 215, w: 250, h: 24, type: 'dual_bridge_solid', label: "These white sneakers are new." },
      { x: 675, y: 310, w: 250, h: 24, type: 'dual_bridge_wrong', label: "This white sneakers are new." },
      // Plataforma de aterrizaje post-puente
      { x: 955, y: 260, w: 120, h: 20, type: 'normal' },
      { x: 1105, y: 300, w: 75, h: 18, type: 'jelly' },
      { x: 1210, y: 320, w: 240, h: 80, type: 'normal' }
    ],
    items: [
      { id: "blue_jacket", x: 420, y: 210, name: "This Blue Jacket", icon: "🧥", collected: false }
    ],
    coins: [
      { x: 280, y: 260, collected: false },
      { x: 580, y: 230, collected: false },
      { x: 1010, y: 210, collected: false },
      { x: 1140, y: 200, collected: false }
    ],
    gate: { x: 1280, y: 220, w: 30, h: 100, unlocked: false }
  },
  {
    id: 1,
    title: "Stage 2 • The Food Court Conveyor Rush (Some vs A/An) 🛒",
    desc: "Cintas transportadoras en movimiento. Distingue sustantivos contables e incontables en los puentes.",
    promptEn: "Collect THESE red apples and step on the bridge with correct food grammar!",
    promptEs: "¡Recoge ESTAS manzanas rojas y pisa el puente con la gramática correcta de comida!",
    requiredItems: ["red_apples"],
    checkpointX: 40,
    finishX: 1400,
    bgColor: "#0f766e",
    hasTerminal: false,
    platforms: [
      { x: 0, y: 340, w: 180, h: 60, type: 'normal' },
      { x: 215, y: 300, w: 160, h: 20, type: 'conveyor_right', speed: 1.4 },
      { x: 405, y: 270, w: 120, h: 20, type: 'normal' },
      { x: 555, y: 270, w: 100, h: 20, type: 'normal' },
      // Dos puentes de alimentos (sin pistas)
      { x: 685, y: 215, w: 260, h: 24, type: 'dual_bridge_solid', label: "We need some milk and three apples." },
      { x: 685, y: 310, w: 260, h: 24, type: 'dual_bridge_wrong', label: "We need a milk and three breads." },
      // Plataforma receptora con cinta transportadora en reversa
      { x: 975, y: 250, w: 160, h: 20, type: 'conveyor_left', speed: -1.2 },
      { x: 1165, y: 280, w: 75, h: 18, type: 'jelly' },
      { x: 1270, y: 320, w: 240, h: 80, type: 'normal' }
    ],
    items: [
      { id: "red_apples", x: 280, y: 250, name: "These Red Apples", icon: "🍎", collected: false }
    ],
    coins: [
      { x: 450, y: 225, collected: false },
      { x: 600, y: 220, collected: false },
      { x: 1030, y: 200, collected: false },
      { x: 1200, y: 190, collected: false }
    ],
    gate: { x: 1320, y: 220, w: 30, h: 100, unlocked: false }
  },
  {
    id: 2,
    title: "Stage 3 • The Keypad Security Vault (Typing Challenge) 💻🔒",
    desc: "¡Nivel de escritura interactiva! Acércate a la terminal y escribe la palabra en inglés que falta.",
    promptEn: "Approach the security keypad terminal and type the missing question word!",
    promptEs: "¡Acércate a la terminal de seguridad y escribe la palabra en inglés que falta para desbloquear!",
    requiredItems: [],
    checkpointX: 40,
    finishX: 1300,
    bgColor: "#1e1b4b",
    hasTerminal: true,
    terminalX: 740,
    terminalY: 260,
    terminalTargetWord: "MUCH",
    terminalPromptEn: "Type the missing word: How _______ is this video game?",
    terminalPromptEs: "Escribe la palabra que falta para preguntar el precio ('much').",
    platforms: [
      { x: 0, y: 340, w: 200, h: 60, type: 'normal' },
      { x: 235, y: 300, w: 120, h: 20, type: 'normal' },
      { x: 385, y: 270, w: 75, h: 18, type: 'jelly' },
      { x: 495, y: 190, w: 140, h: 20, type: 'normal' },
      // Plataforma de la terminal interactiva
      { x: 675, y: 270, w: 170, h: 20, type: 'normal' },
      // Plataformas post-terminal hacia el portón de salida
      { x: 885, y: 240, w: 120, h: 20, type: 'normal' },
      { x: 1035, y: 280, w: 75, h: 18, type: 'jelly' },
      { x: 1145, y: 320, w: 250, h: 80, type: 'normal' }
    ],
    items: [],
    coins: [
      { x: 280, y: 250, collected: false },
      { x: 550, y: 140, collected: false },
      { x: 930, y: 190, collected: false },
      { x: 1070, y: 190, collected: false }
    ],
    gate: { x: 1200, y: 220, w: 30, h: 100, unlocked: false }
  },
  {
    id: 3,
    title: "Stage 4 • The Winter Fashion Department (How Much Is/Are) 🧥❄️",
    desc: "Concordancia de preguntas de precio en singular y plural. ¡Descubre el puente sólido!",
    promptEn: "Find THIS warm scarf and choose the bridge with correct singular price grammar!",
    promptEs: "¡Encuentra ESTA bufanda abrigada y elige el puente con la pregunta de precio correcta!",
    requiredItems: ["warm_scarf"],
    checkpointX: 40,
    finishX: 1350,
    bgColor: "#0369a1",
    hasTerminal: false,
    platforms: [
      { x: 0, y: 340, w: 190, h: 60, type: 'normal' },
      { x: 225, y: 290, w: 110, h: 20, type: 'shoe_box' },
      { x: 365, y: 250, w: 120, h: 20, type: 'shoe_box' },
      { x: 515, y: 280, w: 100, h: 20, type: 'normal' },
      // Dos puentes de concordancia singular/plural
      { x: 645, y: 215, w: 260, h: 24, type: 'dual_bridge_solid', label: "How much is this warm coat?" },
      { x: 645, y: 310, w: 260, h: 24, type: 'dual_bridge_wrong', label: "How much are this warm coat?" },
      // Plataforma de llegada
      { x: 935, y: 260, w: 120, h: 20, type: 'normal' },
      { x: 1085, y: 290, w: 75, h: 18, type: 'jelly' },
      { x: 1195, y: 320, w: 250, h: 80, type: 'normal' }
    ],
    items: [
      { id: "warm_scarf", x: 410, y: 200, name: "This Wool Scarf", icon: "🧣", collected: false }
    ],
    coins: [
      { x: 270, y: 240, collected: false },
      { x: 550, y: 230, collected: false },
      { x: 980, y: 210, collected: false },
      { x: 1120, y: 200, collected: false }
    ],
    gate: { x: 1260, y: 220, w: 30, h: 100, unlocked: false }
  },
  {
    id: 4,
    title: "Stage 5 • The Toy Store Castle & Secret Password 🏆👑",
    desc: "¡El gran reto final! Elige el puente de cortesía (would like to) y escribe la contraseña final en la caja registradora.",
    promptEn: "Cross the polite bridge and type the secret password to win the Golden Trophy!",
    promptEs: "¡Cruza el puente educado ('would like to') y escribe la palabra secreta para ganar el Trofeo!",
    requiredItems: [],
    checkpointX: 40,
    finishX: 1400,
    bgColor: "#831843",
    hasTerminal: true,
    terminalX: 980,
    terminalY: 260,
    terminalTargetWord: "SHOP",
    terminalPromptEn: "Type the secret word: We are having fun in the toy _______!",
    terminalPromptEs: "Escribe la palabra de tienda en inglés: 'S H O P'.",
    platforms: [
      { x: 0, y: 340, w: 180, h: 60, type: 'normal' },
      { x: 210, y: 300, w: 110, h: 20, type: 'normal' },
      { x: 350, y: 270, w: 75, h: 18, type: 'jelly' },
      { x: 455, y: 280, w: 100, h: 20, type: 'normal' },
      // Dos puentes de cortesía 'would like to'
      { x: 585, y: 215, w: 260, h: 24, type: 'dual_bridge_solid', label: "I would like to buy that toy robot." },
      { x: 585, y: 310, w: 260, h: 24, type: 'dual_bridge_wrong', label: "I would like buy that toy robot." },
      // Plataforma de la terminal final
      { x: 875, y: 260, w: 190, h: 20, type: 'normal' },
      { x: 1095, y: 290, w: 75, h: 18, type: 'jelly' },
      { x: 1205, y: 320, w: 260, h: 80, type: 'normal' }
    ],
    items: [],
    coins: [
      { x: 250, y: 250, collected: false },
      { x: 490, y: 230, collected: false },
      { x: 920, y: 210, collected: false },
      { x: 1130, y: 200, collected: false }
    ],
    gate: { x: 1280, y: 220, w: 30, h: 100, unlocked: false }
  }
];

let currentObbyStageIndex = 0;
let obbyEngineRunning = false;
let obbyAnimationId = null;

// Objeto del Jugador (Barnaby) con DOBLE SALTO
const Player = {
  x: 40,
  y: 280,
  vx: 0,
  vy: 0,
  w: 32,
  h: 42,
  speed: 5.0,
  jumpPower: -12.2,
  isGrounded: false,
  jumpsLeft: 2, // 2 saltos disponibles
  maxJumps: 2,
  facing: 'right',
  respawnX: 40,
  respawnY: 280,
  coinsCollected: 0
};

const ObbyControls = {
  left: false,
  right: false,
  jump: false
};

let cameraX = 0;
let obbyParticles = [];
let obbyBannerMessage = "";
let obbyBannerTimer = 0;

// Variables de la Terminal de Escritura Interactiva
let currentTerminalWord = "";
let targetTerminalAnswer = "";

function startObbyEngine() {
  const canvas = document.getElementById('obbyCanvas');
  if (!canvas) return;

  // Ajustar resolución nativa
  canvas.width = canvas.parentElement.clientWidth || 800;
  canvas.height = 400;

  loadObbyStage(currentObbyStageIndex);

  if (!obbyEngineRunning) {
    obbyEngineRunning = true;
    setupObbyEventListeners();
    requestAnimationFrame(obbyGameLoop);
  }
}

function loadObbyStage(index) {
  currentObbyStageIndex = index;
  const stage = ObbyStages[index];

  Player.x = stage.checkpointX;
  Player.y = 260;
  Player.vx = 0;
  Player.vy = 0;
  Player.jumpsLeft = Player.maxJumps;
  Player.respawnX = stage.checkpointX;
  Player.respawnY = 260;
  cameraX = 0;

  // Reset stage items & coins
  stage.items.forEach(it => it.collected = false);
  stage.coins.forEach(c => c.collected = false);
  stage.gate.unlocked = false;

  // Cerrar terminal si estaba abierta
  const termModal = document.getElementById('obbyTerminalModal');
  if (termModal) termModal.style.display = 'none';

  document.getElementById('obbyStageTitle').textContent = stage.title;
  document.getElementById('obbyGatePromptEn').textContent = `🎯 Mission: "${stage.promptEn}"`;
  document.getElementById('obbyGatePromptEs').textContent = stage.promptEs;
  document.getElementById('obbyCoinsBadge').textContent = `🪙 Monedas: ${Player.coinsCollected}`;

  updateObbyHudChecklist();
  showObbyFloatingBanner(`🎯 MISIÓN: ${stage.promptEs}`, 200);

  speakEnglish(stage.promptEn, 'guide');
}

function updateObbyHudChecklist() {
  const stage = ObbyStages[currentObbyStageIndex];
  const checklistEl = document.getElementById('obbyItemsChecklist');
  const gateBadgeEl = document.getElementById('obbyGateStatusBadge');
  const stepCollectEl = document.getElementById('stepChipCollect');
  const stepGateEl = document.getElementById('stepChipGate');

  if (checklistEl) {
    if (stage.hasTerminal) {
      checklistEl.innerHTML = `<span style="color:#38bdf8; font-weight:800;">💻 Terminal: ${stage.gate.unlocked ? '✅ Desbloqueada' : '🔒 Requiere Contraseña'}</span>`;
    } else {
      checklistEl.innerHTML = stage.items.map(it => `
        <span style="${it.collected ? 'color:#10b981; font-weight:800;' : 'color:#fef08a;'}">
          ${it.collected ? '✅' : '⬜'} ${it.icon} ${it.name}
        </span>
      `).join(' &nbsp;|&nbsp; ');
    }
  }

  const isUnlocked = stage.gate.unlocked;

  if (gateBadgeEl) {
    if (isUnlocked) {
      gateBadgeEl.innerHTML = `<span style="color:#10b981; font-weight:800; animation:pulseLive 1s infinite;">🔓 Puerta: ¡ABIERTA! Corre a la meta 🏁</span>`;
    } else {
      gateBadgeEl.innerHTML = `<span style="color:#fca5a5;">🔒 Puerta: CERRADA</span>`;
    }
  }

  if (stepCollectEl && stepGateEl) {
    if (isUnlocked) {
      stepCollectEl.classList.add('completed');
      stepGateEl.classList.add('active');
    } else {
      stepCollectEl.classList.remove('completed');
      stepCollectEl.classList.add('active');
      stepGateEl.classList.remove('active');
    }
  }
}

function showObbyFloatingBanner(text, durationFrames = 180) {
  obbyBannerMessage = text;
  obbyBannerTimer = durationFrames;
}

function tryPlayerJump() {
  if (Player.jumpsLeft > 0) {
    const isDoubleJump = Player.jumpsLeft === 1;
    Player.jumpsLeft--;
    Player.vy = Player.jumpPower;
    Player.isGrounded = false;
    sfx.playJump();
    createJumpDust(Player.x + Player.w / 2, Player.y + Player.h, isDoubleJump);
  }
}

function setupObbyEventListeners() {
  // Controles de teclado
  window.addEventListener('keydown', (e) => {
    // Si la terminal modal está abierta, no mover a Barnaby
    const modal = document.getElementById('obbyTerminalModal');
    if (modal && modal.style.display === 'flex') return;

    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      ObbyControls.left = true;
    }
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      ObbyControls.right = true;
    }
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') {
      if (!ObbyControls.jump) {
        tryPlayerJump();
      }
      ObbyControls.jump = true;
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') ObbyControls.left = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') ObbyControls.right = false;
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') ObbyControls.jump = false;
  });

  // Controles táctiles de botones en pantalla
  const btnLeft = document.getElementById('touchBtnLeft');
  const btnRight = document.getElementById('touchBtnRight');
  const btnJump = document.getElementById('touchBtnJump');

  if (btnLeft && btnRight && btnJump) {
    const bindTouch = (el, onStart, onEnd) => {
      el.addEventListener('touchstart', (e) => { e.preventDefault(); onStart(); }, { passive: false });
      el.addEventListener('touchend', (e) => { e.preventDefault(); onEnd(); }, { passive: false });
      el.addEventListener('mousedown', onStart);
      el.addEventListener('mouseup', onEnd);
      el.addEventListener('mouseleave', onEnd);
    };

    bindTouch(btnLeft, () => ObbyControls.left = true, () => ObbyControls.left = false);
    bindTouch(btnRight, () => ObbyControls.right = true, () => ObbyControls.right = false);
    bindTouch(btnJump, () => {
      tryPlayerJump();
      ObbyControls.jump = true;
    }, () => ObbyControls.jump = false);
  }
}

// ============================================================================
// GESTIÓN DE LA TERMINAL DE ESCRITURA EN INGLÉS
// ============================================================================
function openTerminalGate(targetWord, promptEn, promptEs) {
  currentTerminalWord = "";
  targetTerminalAnswer = targetWord.toUpperCase();

  const modal = document.getElementById('obbyTerminalModal');
  if (!modal) return;

  document.getElementById('terminalPromptEn').textContent = `"${promptEn}"`;
  document.getElementById('terminalPromptEs').textContent = promptEs;
  document.getElementById('terminalInputDisplay').textContent = "_ ".repeat(targetWord.length).trim();
  document.getElementById('terminalFeedbackMsg').innerHTML = '';

  const physInput = document.getElementById('terminalPhysicalInput');
  if (physInput) {
    physInput.value = '';
    setTimeout(() => physInput.focus(), 100);
  }

  renderTerminalKeypad();
  modal.style.display = 'flex';
  sfx.playLaserBeep();
  speakEnglish(promptEn, 'guide');
}

function renderTerminalKeypad() {
  const container = document.getElementById('terminalKeypadContainer');
  if (!container) return;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  container.innerHTML = letters.map(char => `
    <button class="terminal-key" onclick="pressTerminalKey('${char}')">${char}</button>
  `).join('') + `
    <button class="terminal-key key-del" onclick="pressTerminalDelete()">⌫ BORRAR</button>
  `;
}

function pressTerminalKey(char) {
  sfx.playPop();
  if (currentTerminalWord.length < targetTerminalAnswer.length) {
    currentTerminalWord += char;
    updateTerminalDisplay();
  }
}

function pressTerminalDelete() {
  sfx.playPop();
  currentTerminalWord = currentTerminalWord.slice(0, -1);
  updateTerminalDisplay();
}

function handleTerminalInputKey(e) {
  const physInput = document.getElementById('terminalPhysicalInput');
  if (physInput) {
    currentTerminalWord = physInput.value.toUpperCase();
    updateTerminalDisplay();
    if (e.key === 'Enter') {
      submitTerminalWord();
    }
  }
}

function updateTerminalDisplay() {
  const display = document.getElementById('terminalInputDisplay');
  if (!display) return;
  const remaining = Math.max(0, targetTerminalAnswer.length - currentTerminalWord.length);
  const text = currentTerminalWord.split('').join(' ') + ' ' + '_ '.repeat(remaining);
  display.textContent = text.trim();
}

function submitTerminalWord() {
  const feedback = document.getElementById('terminalFeedbackMsg');
  const stage = ObbyStages[currentObbyStageIndex];

  if (currentTerminalWord.trim() === targetTerminalAnswer) {
    sfx.playLaserBeep();
    sfx.playSuccess();
    feedback.innerHTML = `<span style="color:#10b981;">✅ ¡ACCESO AUTORIZADO! Portón de seguridad desbloqueado (+25 pts)</span>`;
    AppState.addStars(25);

    stage.gate.unlocked = true;
    updateObbyHudChecklist();
    showObbyFloatingBanner("🔓 ¡PORTÓN DESBLOQUEADO! ¡CRUZA LA META! ➔➔➔", 220);

    setTimeout(() => {
      const modal = document.getElementById('obbyTerminalModal');
      if (modal) modal.style.display = 'none';
    }, 1100);

  } else {
    sfx.playError();
    feedback.innerHTML = `<span style="color:#ef4444;">⚠️ Palabra incorrecta. Inténtalo de nuevo.</span>`;
    currentTerminalWord = "";
    updateTerminalDisplay();
  }
}

function createJumpDust(x, y, isDouble = false) {
  const count = isDouble ? 12 : 6;
  const color = isDouble ? '#ec4899' : 'rgba(255, 255, 255, 0.85)';
  for (let i = 0; i < count; i++) {
    obbyParticles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * (isDouble ? 5 : 3),
      vy: (Math.random() - 0.5) * 2,
      radius: (isDouble ? 3.5 : 2.5) + Math.random() * 2,
      color: color,
      life: isDouble ? 24 : 18
    });
  }
}

function createCoinSparkle(x, y) {
  for (let i = 0; i < 8; i++) {
    obbyParticles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      radius: 2.5 + Math.random() * 2,
      color: '#f59e0b',
      life: 22
    });
  }
}

function obbyGameLoop() {
  const canvas = document.getElementById('obbyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const stage = ObbyStages[currentObbyStageIndex];

  // 1. FÍSICAS DEL JUGADOR
  if (ObbyControls.left) {
    Player.vx = -Player.speed;
    Player.facing = 'left';
  } else if (ObbyControls.right) {
    Player.vx = Player.speed;
    Player.facing = 'right';
  } else {
    Player.vx *= 0.8; // Fricción suave
  }

  // Gravedad
  Player.vy += 0.52;
  if (Player.vy > 12) Player.vy = 12;

  // Actualizar posiciones
  Player.x += Player.vx;
  Player.y += Player.vy;

  // Colisión con plataformas
  Player.isGrounded = false;
  stage.platforms.forEach(p => {
    // Si es un puente dual incorrecto, colapsa y devuelve a Barnaby al inicio del nivel
    if (p.type === 'dual_bridge_wrong') {
      if (
        Player.x + Player.w > p.x &&
        Player.x < p.x + p.w &&
        Player.y + Player.h >= p.y &&
        Player.y + Player.h <= p.y + p.h + Math.max(8, Player.vy) &&
        Player.vy >= 0
      ) {
        sfx.playError();
        Player.x = stage.checkpointX;
        Player.y = 260;
        Player.vx = 0;
        Player.vy = 0;
        Player.jumpsLeft = Player.maxJumps;
        showObbyFloatingBanner("💥 ¡Ese puente era gramaticalmente incorrecto y colapsó! Regresando al inicio del nivel...", 180);
        return;
      }
    }

    // Puentes duales sólidos (Gramática correcta)
    if (p.type === 'dual_bridge_solid') {
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
      }
      return;
    }

    // Plataformas sólidas
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
      Player.jumpsLeft = Player.maxJumps; // Restaura doble salto al tocar suelo

      // Trampolín de Gelatina
      if (p.type === 'jelly') {
        Player.vy = -16.0; // Súper impulso
        Player.isGrounded = false;
        sfx.playBoing();
        createJumpDust(Player.x + Player.w / 2, Player.y + Player.h, true);
      }

      // Cinta Transportadora
      if (p.type === 'conveyor_right') {
        Player.x += p.speed;
      } else if (p.type === 'conveyor_left') {
        Player.x += p.speed;
      }
    }
  });

  // Detección de proximidad con Terminal de Escritura
  if (stage.hasTerminal && !stage.gate.unlocked) {
    if (Math.abs(Player.x - stage.terminalX) < 45 && Math.abs(Player.y - stage.terminalY) < 60) {
      const modal = document.getElementById('obbyTerminalModal');
      if (modal && modal.style.display !== 'flex') {
        openTerminalGate(stage.terminalTargetWord, stage.terminalPromptEn, stage.terminalPromptEs);
      }
    }
  }

  // Colisión con objetos requeridos
  stage.items.forEach(it => {
    if (!it.collected) {
      if (
        Player.x + Player.w > it.x - 10 &&
        Player.x < it.x + 40 &&
        Player.y + Player.h > it.y - 10 &&
        Player.y < it.y + 40
      ) {
        it.collected = true;
        sfx.playCoin();
        createCoinSparkle(it.x + 15, it.y + 15);
        speakEnglish(it.name, 'kid');
        AppState.addStars(15);

        // Actualizar HUD
        updateObbyHudChecklist();

        // Verificar si se recolectaron todos los artículos requeridos
        const allCollected = stage.items.every(item => item.collected);
        if (allCollected) {
          stage.gate.unlocked = true;
          sfx.playSuccess();
          showObbyFloatingBanner("🎉 ¡TODOS LOS ARTÍCULOS RECOGIDOS! ¡LA PUERTA ESTÁ ABIERTA! ➔➔➔", 220);
          updateObbyHudChecklist();
        } else {
          showObbyFloatingBanner(`✨ ¡Recogiste ${it.name}! Falta 1 artículo...`, 160);
        }
      }
    }
  });

  // Colisión con monedas flotantes
  stage.coins.forEach(c => {
    if (!c.collected) {
      if (
        Player.x + Player.w > c.x &&
        Player.x < c.x + 20 &&
        Player.y + Player.h > c.y &&
        Player.y < c.y + 20
      ) {
        c.collected = true;
        Player.coinsCollected += 5;
        sfx.playCoin();
        createCoinSparkle(c.x + 10, c.y + 10);
        document.getElementById('obbyCoinsBadge').textContent = `🪙 Monedas: ${Player.coinsCollected}`;
        AppState.addStars(5);
      }
    }
  });

  // Colisión con la Puerta del Checkpoint/Meta
  if (stage.gate.unlocked) {
    if (Player.x > stage.gate.x) {
      // ¡Etapa completada!
      sfx.playSuccess();
      sfx.playApplause();
      AppState.addStars(30);

      if (currentObbyStageIndex < ObbyStages.length - 1) {
        loadObbyStage(currentObbyStageIndex + 1);
      } else {
        showObbyVictoryScreen();
        return;
      }
    }
  }

  // Caída al vacío (Respawn en checkpoint)
  if (Player.y > 420) {
    sfx.playError();
    Player.x = Player.respawnX;
    Player.y = Player.respawnY;
    Player.vx = 0;
    Player.vy = 0;
    Player.jumpsLeft = Player.maxJumps;
    showObbyFloatingBanner("⚠️ ¡Caíste al agua! Reapareciendo en el checkpoint...", 100);
  }

  // 2. CÁMARA DINÁMICA
  const targetCameraX = Player.x - canvas.width * 0.35;
  cameraX += (targetCameraX - cameraX) * 0.1;
  if (cameraX < 0) cameraX = 0;

  // 3. RENDERIZADO DEL ESCENARIO
  ctx.fillStyle = stage.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Fondo con cuadrícula decorativa estilo Roblox
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 1;
  const gridSize = 40;
  const offsetX = -cameraX % gridSize;
  for (let x = offsetX; x < canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // Dibujar plataformas
  stage.platforms.forEach(p => {
    const rx = p.x - cameraX;
    if (rx + p.w < 0 || rx > canvas.width) return;

    if (p.type === 'jelly') {
      // Trampolín verde brillante
      ctx.fillStyle = "#10b981";
      ctx.fillRect(rx, p.y, p.w, p.h);
      ctx.fillStyle = "#34d399";
      ctx.fillRect(rx + 4, p.y + 2, p.w - 8, 4);
      // Texto "BOING"
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 9px Outfit, sans-serif";
      ctx.fillText("⚡ BOING!", rx + p.w / 2 - 18, p.y + 13);
    } else if (p.type === 'shoe_box') {
      // Caja de zapatos boutique
      ctx.fillStyle = "#a855f7";
      ctx.fillRect(rx, p.y, p.w, p.h);
      ctx.fillStyle = "#c084fc";
      ctx.fillRect(rx, p.y, p.w, 4);
    } else if (p.type === 'conveyor_right' || p.type === 'conveyor_left') {
      // Cinta transportadora
      ctx.fillStyle = "#334155";
      ctx.fillRect(rx, p.y, p.w, p.h);
      ctx.fillStyle = "#f59e0b";
      ctx.fillRect(rx, p.y, p.w, 3);
      // Flechas de dirección animadas
      ctx.fillStyle = "#fde047";
      ctx.font = "bold 11px sans-serif";
      const arrow = p.type === 'conveyor_right' ? '➔➔➔' : '⬅⬅⬅';
      ctx.fillText(arrow, rx + p.w / 2 - 18, p.y + 14);
    } else if (p.type === 'dual_bridge_solid' || p.type === 'dual_bridge_wrong') {
      // Dibujar ambos puentes IDÉNTICOS (estilo Roblox Obby: madera morada brillante con texto blanco limpio, SIN SPOILERS)
      ctx.fillStyle = "#312e81";
      ctx.fillRect(rx, p.y, p.w, p.h);
      ctx.fillStyle = "#6366f1";
      ctx.fillRect(rx, p.y, p.w, 3);
      // Texto neutral con la oración en inglés
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 11px Outfit, sans-serif";
      ctx.fillText(p.label, rx + 12, p.y + 16);
      // Icono decorativo de puente
      ctx.font = "12px sans-serif";
      ctx.fillText("🌉", rx + p.w - 24, p.y + 16);
    } else {
      // Plataforma normal
      ctx.fillStyle = "#475569";
      ctx.fillRect(rx, p.y, p.w, p.h);
      ctx.fillStyle = "#94a3b8";
      ctx.fillRect(rx, p.y, p.w, 4);
    }
  });

  // Dibujar Terminal de Escritura Interactiva si la etapa la incluye
  if (stage.hasTerminal) {
    const tx = stage.terminalX - cameraX;
    const ty = stage.terminalY - 36;
    ctx.fillStyle = "#1e1b4b";
    ctx.roundRect(tx - 30, ty, 60, 36, 8);
    ctx.fill();
    ctx.strokeStyle = stage.gate.unlocked ? "#10b981" : "#38bdf8";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = "20px sans-serif";
    ctx.fillText("💻", tx - 10, ty + 24);

    // Letrero flotante sobre la terminal
    ctx.fillStyle = stage.gate.unlocked ? "rgba(16, 185, 129, 0.9)" : "rgba(56, 189, 248, 0.9)";
    ctx.roundRect(tx - 65, ty - 22, 130, 18, 6);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 9px Outfit, sans-serif";
    ctx.fillText(stage.gate.unlocked ? "✅ CLAVE CORRECTA" : "⌨️ ESCRIBE LA CLAVE", tx - 56, ty - 10);
  }

  // Dibujar artículos de misión con etiquetas de texto y flechas flotantes
  stage.items.forEach(it => {
    if (!it.collected) {
      const ix = it.x - cameraX;
      const floatY = Math.sin(Date.now() * 0.005) * 5;

      // Icono flotante
      ctx.font = "26px sans-serif";
      ctx.fillText(it.icon, ix, it.y + 24 + floatY);

      // Halo brillante
      ctx.beginPath();
      ctx.arc(ix + 13, it.y + 13 + floatY, 20, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(253, 224, 71, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Etiqueta de texto superior (Nombre del artículo en inglés)
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.roundRect(ix - 36, it.y - 18 + floatY, 100, 20, 6);
      ctx.fill();
      ctx.fillStyle = "#fef08a";
      ctx.font = "bold 10px Outfit, sans-serif";
      ctx.fillText(it.name, ix - 30, it.y - 4 + floatY);

      // Flecha apuntando hacia abajo
      ctx.fillStyle = "#f59e0b";
      ctx.font = "12px sans-serif";
      ctx.fillText("▼", ix + 8, it.y - 18 + floatY);
    }
  });

  // Dibujar monedas
  stage.coins.forEach(c => {
    if (!c.collected) {
      const cx = c.x - cameraX;
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(cx + 8, c.y + 8, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fef08a";
      ctx.beginPath();
      ctx.arc(cx + 6, c.y + 6, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // Dibujar Puerta del Checkpoint / Meta
  const gx = stage.gate.x - cameraX;
  if (stage.gate.unlocked) {
    // Puerta Abierta en Verde
    ctx.fillStyle = "#10b981";
    ctx.fillRect(gx, stage.gate.y, 10, stage.gate.h);
    ctx.font = "32px sans-serif";
    ctx.fillText("🏁", gx - 10, stage.gate.y - 10);

    // Cartel brillante encima de la puerta abierta
    ctx.fillStyle = "rgba(16, 185, 129, 0.95)";
    ctx.roundRect(gx - 80, stage.gate.y - 36, 170, 24, 8);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 11px Outfit, sans-serif";
    ctx.fillText("🔓 ¡META ABIERTA! ➔➔➔", gx - 70, stage.gate.y - 20);
  } else {
    // Puerta Bloqueada en Rojo
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(gx, stage.gate.y, 18, stage.gate.h);
    ctx.font = "24px sans-serif";
    ctx.fillText("🔒", gx - 3, stage.gate.y + 45);

    // Cartel rojo de bloqueo
    ctx.fillStyle = "rgba(239, 68, 68, 0.95)";
    ctx.roundRect(gx - 75, stage.gate.y - 28, 160, 20, 6);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 10px Outfit, sans-serif";
    ctx.fillText("🔒 BLOQUEADA: Recoge los ítems", gx - 68, stage.gate.y - 14);
  }

  // 4. DIBUJAR A BARNABY (PERSONAJE JUGADOR EN 2D)
  const px = Player.x - cameraX;
  const py = Player.y;

  // Si tiene doble salto disponible, halo tenue en los pies
  if (Player.jumpsLeft === 2) {
    ctx.fillStyle = "rgba(236, 72, 153, 0.3)";
    ctx.beginPath();
    ctx.ellipse(px + Player.w / 2, py + Player.h, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cuerpo de Barnaby (Osito tierno con gorro de chef o shopping)
  ctx.fillStyle = "#92400e"; // Pelo castaño de osito
  ctx.beginPath();
  ctx.roundRect(px + 4, py + 12, Player.w - 8, Player.h - 14, 8);
  ctx.fill();

  // Cabeza
  ctx.beginPath();
  ctx.arc(px + Player.w / 2, py + 14, 13, 0, Math.PI * 2);
  ctx.fill();

  // Orejitas
  ctx.beginPath();
  ctx.arc(px + 6, py + 4, 5, 0, Math.PI * 2);
  ctx.arc(px + Player.w - 6, py + 4, 5, 0, Math.PI * 2);
  ctx.fill();

  // Ojos y hocico
  ctx.fillStyle = "#fef3c7";
  ctx.beginPath();
  ctx.ellipse(px + Player.w / 2, py + 16, 7, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#1e293b";
  ctx.beginPath();
  ctx.arc(px + Player.w / 2, py + 14, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Gorrito de compras rojo/fucsia
  ctx.fillStyle = "#ec4899";
  ctx.beginPath();
  ctx.arc(px + Player.w / 2, py + 2, 7, Math.PI, 0);
  ctx.fill();

  // Patas animadas al correr
  ctx.fillStyle = "#78350f";
  if (Math.abs(Player.vx) > 0.5) {
    const legOffset = Math.sin(Date.now() * 0.02) * 5;
    ctx.fillRect(px + 6, py + Player.h - 4 + legOffset, 6, 6);
    ctx.fillRect(px + Player.w - 12, py + Player.h - 4 - legOffset, 6, 6);
  } else {
    ctx.fillRect(px + 6, py + Player.h - 2, 6, 4);
    ctx.fillRect(px + Player.w - 12, py + Player.h - 2, 6, 4);
  }

  // 5. RENDERIZAR PARTÍCULAS
  obbyParticles.forEach((p, idx) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x - cameraX, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    if (p.life <= 0) {
      obbyParticles.splice(idx, 1);
    }
  });

  // 6. RENDERIZAR BANNER FLOTANTE SUPERIOR
  if (obbyBannerTimer > 0) {
    obbyBannerTimer--;
    ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
    ctx.roundRect(canvas.width / 2 - 240, 16, 480, 36, 12);
    ctx.fill();
    ctx.strokeStyle = "#c084fc";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 13px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(obbyBannerMessage, canvas.width / 2, 39);
    ctx.textAlign = "left"; // Restablecer alineación
  }

  requestAnimationFrame(obbyGameLoop);
}

function listenObbyPrompt() {
  const stage = ObbyStages[currentObbyStageIndex];
  sfx.playPop();
  speakEnglish(stage.promptEn, 'guide');
}

function restartObbyStage() {
  sfx.playPop();
  loadObbyStage(currentObbyStageIndex);
}

function showObbyVictoryScreen() {
  sfx.playApplause();
  AppState.addStars(50);

  const container = document.querySelector('.obby-game-container');
  if (!container) return;

  container.innerHTML = `
    <div style="text-align:center; padding:36px 20px; background:linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%); border-radius:24px; border:3px solid #8b5cf6;">
      <div style="font-size:4rem; margin-bottom:12px; animation:frogJumpSplash 0.8s ease infinite alternate;">🏆👑🛍️</div>
      <h2 style="font-family:var(--font-display); font-size:2rem; font-weight:800; color:#5b21b6; margin-bottom:10px;">
        ¡CAMPEÓN DEL MALL OBBY RUN!
      </h2>
      <p style="font-size:1.15rem; color:#6d28d9; max-width:640px; margin:0 auto 20px; line-height:1.5;">
        ¡Barnaby superó todas las plataformas, esquivó obstáculos y desbloqueó las 3 tiendas departamentales de Cambridge Movers! Ganaste <strong>+50 pts bonus</strong> y todas las monedas del centro comercial.
      </p>
      <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
        <button class="btn-back-map" style="background:#7c3aed; color:#ffffff; border-color:#7c3aed; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="switchTab('goldquest', document.querySelectorAll('.tab-btn')[1])">
          💎 Siguiente Actividad: Blooket Gold Quest ➔
        </button>
        <button class="btn-back-map" style="background:#ffffff; color:#7c3aed; border-color:#ddd6fe; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="location.reload()">
          🔄 Volver a Jugar el Obby
        </button>
      </div>
    </div>
  `;
}

// ============================================================================
// ACTIVIDAD 2: 💎 BLOOKET-STYLE "GOLD CHEST MARKET RAID"
// 8 rondas con preguntas de gramática de compras y apertura de cofres misteriosos
// ============================================================================
const GoldQuestRounds = [
  {
    id: 0,
    questionEn: "Look at the sweater in my hands! How do we describe it?",
    questionEs: "¡Mira el suéter en mis manos! ¿Cómo lo describimos?",
    options: [
      { text: "This warm sweater", isCorrect: true, hint: "Cerca y singular (en mis manos)" },
      { text: "Those warm sweater", isCorrect: false, hint: "Those es para plural lejano" },
      { text: "These warm sweater", isCorrect: false, hint: "These es para plural cercano" }
    ]
  },
  {
    id: 1,
    questionEn: "Look at the shoes over there in the shop window! How do we ask the price?",
    questionEs: "¿Cómo preguntamos el precio de los zapatos que están allá en la vitrina?",
    options: [
      { text: "How much is that shoes?", isCorrect: false, hint: "Shoes es plural, requiere 'are'" },
      { text: "How much are those shoes?", isCorrect: true, hint: "Plural y lejano: 'are those'" },
      { text: "How many is those shoes?", isCorrect: false, hint: "El precio se pregunta con 'How much'" }
    ]
  },
  {
    id: 2,
    questionEn: "At the bookstore, you want to buy a comic. What is the polite request?",
    questionEs: "En la librería quieres un cómic. ¿Cuál es la petición educada?",
    options: [
      { text: "I would like to buy that comic book.", isCorrect: true, hint: "Petición educada con 'would like'" },
      { text: "I wants that comic book now.", isCorrect: false, hint: "Gramática incorrecta y descortés" },
      { text: "Give me comic book.", isCorrect: false, hint: "Demasiado rudo" }
    ]
  },
  {
    id: 3,
    questionEn: "The cashier asks: 'Can I help you?' What do you say?",
    questionEs: "El cajero pregunta: '¿Puedo ayudarte?' ¿Qué respondes?",
    options: [
      { text: "Yes, please. I am looking for a jacket.", isCorrect: true, hint: "Respuesta natural y educada" },
      { text: "No, you cannot swimming.", isCorrect: false, hint: "No tiene sentido en una tienda" },
      { text: "Yes, I am sleeping today.", isCorrect: false, hint: "No encaja en la situación" }
    ]
  },
  {
    id: 4,
    questionEn: "These pants are too small! What do you need?",
    questionEs: "¡Estos pantalones son muy pequeños! ¿Qué necesitas?",
    options: [
      { text: "I need a bigger size, please.", isCorrect: true, hint: "Una talla más grande" },
      { text: "I need yesterday morning.", isCorrect: false, hint: "Tiempo pasado no es ropa" },
      { text: "I need five books.", isCorrect: false, hint: "Los libros no son pantalones" }
    ]
  },
  {
    id: 5,
    questionEn: "How much is this bottle of strawberry milkshake?",
    questionEs: "¿Cuánto cuesta esta botella de batido de fresa?",
    options: [
      { text: "They are fifteen books.", isCorrect: false, hint: "Botella es singular y es dinero" },
      { text: "It is three dollars and fifty cents.", isCorrect: true, hint: "Respuesta exacta de precio singular" },
      { text: "It is ten kilometers.", isCorrect: false, hint: "Kilómetros es distancia" }
    ]
  },
  {
    id: 6,
    questionEn: "Which sentence uses 'some' correctly for food shopping?",
    questionEs: "¿Cuál oración usa 'some' correctamente para compras de comida?",
    options: [
      { text: "We need some apples and some milk.", isCorrect: true, hint: "Some para plurales e incontables" },
      { text: "We need an milks.", isCorrect: false, hint: "Milk es incontable, no lleva 'an'" },
      { text: "We need some a apple.", isCorrect: false, hint: "No se mezclan 'some' y 'a'" }
    ]
  },
  {
    id: 7,
    questionEn: "You are paying at the cash register. What does the cashier say?",
    questionEs: "Estás pagando en la caja registradora. ¿Qué dice el cajero?",
    options: [
      { text: "Here is your change and receipt. Have a great day!", isCorrect: true, hint: "Cambio y recibo" },
      { text: "Please do your homework now.", isCorrect: false, hint: "Eso lo dice el profesor" },
      { text: "It is snowing in the mountains.", isCorrect: false, hint: "Eso es del clima" }
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
        ✨ ¡RESPUESTA CORRECTA! ¡Abriendo los 3 Cofres Misteriosos del Mall!...
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
        ⚠️ Revisa bien el sujeto y el uso de this/that/these/those. ¡Intenta con otra opción!
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
    { title: "+40 Gold Coins", value: 40, icon: "💰", msg: "¡Bolsa de 40 monedas de oro!" },
    { title: "+75 Royal Gold", value: 75, icon: "🪙", msg: "¡Cofre Real con 75 monedas!" },
    { title: "💎 Diamond Card (+100)", value: 100, icon: "💎", msg: "¡Tarjeta Diamante VIP +100 puntos!" },
    { title: "2X Multiplier", value: 50, icon: "✨", msg: "¡Multiplicador de oro activado!" }
  ];

  const shuffledPrizes = [...prizePool].sort(() => Math.random() - 0.5).slice(0, 3);
  const chestsGrid = document.getElementById('mysteryChestsGrid');

  chestsGrid.innerHTML = shuffledPrizes.map((prize, i) => `
    <div class="gold-chest-card" onclick="openMysteryChest(this, ${prize.value}, '${prize.icon}', '${prize.msg}')">
      <div class="gold-chest-icon">🎁</div>
      <div style="font-family:var(--font-display); font-size:1.15rem; font-weight:800; color:#78350f;">Cofre Secreto #${i + 1}</div>
      <div style="font-size:0.8rem; color:#b45309; margin-top:4px;">Toca para abrir</div>
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

  // Deshabilitar todos los cofres
  document.querySelectorAll('.gold-chest-card').forEach(c => {
    c.style.pointerEvents = 'none';
    if (c !== cardEl) c.style.opacity = '0.5';
  });

  cardEl.innerHTML = `
    <div class="gold-chest-icon" style="transform:scale(1.2);">${icon}</div>
    <div style="font-family:var(--font-display); font-size:1.25rem; font-weight:800; color:#065f46;">${message}</div>
    <div style="font-size:0.9rem; color:#047857; font-weight:700; margin-top:4px;">+${amount} estrellas sumadas</div>
  `;
  cardEl.style.background = '#ecfdf5';
  cardEl.style.borderColor = '#10b981';

  const feedback = document.getElementById('chestResultFeedback');
  const isFinalRound = currentGoldRoundIndex >= GoldQuestRounds.length - 1;

  feedback.innerHTML = `
    <div style="margin-top:16px; font-weight:700; color:#047857; display:flex; align-items:center; justify-content:center; gap:8px;">
      <span style="display:inline-block; animation:spin 1s linear infinite;">⏳</span>
      <span>${!isFinalRound ? 'Avanzando a la siguiente ronda de preguntas...' : '¡Calculando tu botín de oro final!...'}</span>
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
        ¡BOTÍN SUPREMO DE ORO CONSEGUIDO!
      </h2>
      <p style="font-size:1.15rem; color:#b45309; max-width:640px; margin:0 auto 20px; line-height:1.5;">
        ¡Acumulaste un total de <strong>${userGoldTotal} monedas de oro</strong> en el Blooket Gold Quest del Centro Comercial! Ganaste <strong>+50 pts de bonificación</strong> de gran comprador.
      </p>
      <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
        <button class="btn-back-map" style="background:#d97706; color:#ffffff; border-color:#d97706; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="switchTab('cashier', document.querySelectorAll('.tab-btn')[2])">
          🛒 Siguiente Actividad: El Cajero Táctil ➔
        </button>
        <button class="btn-back-map" style="background:#ffffff; color:#b45309; border-color:#fde68a; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="userGoldTotal = 0; loadGoldQuestRound(0);">
          🔄 Volver a Jugar Gold Quest
        </button>
      </div>
    </div>
  `;
}

// ============================================================================
// ACTIVIDAD 3: 🛒 TACTILE CASHIER SCANNER & BAGGING CONVEYOR
// Simulador interactivo de escáner láser de código de barras y cobro en inglés
// ============================================================================
const CashierOrdersData = [
  {
    id: 0,
    customerName: "Emma 👧",
    customerSpeechEn: "Hello! I would like to buy this green shirt and that blue watch, please.",
    customerSpeechEs: "¡Hola! Me gustaría comprar esta camisa verde y ese reloj azul, por favor.",
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
    customerSpeechEs: "¡Buenos días! Necesito estas zapatillas blancas y un gorro abrigado de invierno.",
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
    customerSpeechEs: "Disculpe, querido. Quiero este pan fresco y dos botellas de leche.",
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
    customerSpeechEs: "¡Hola! ¿Cuánto cuestan estos auriculares y este libro de cómics?",
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
    customerSpeechEs: "¡Buenas tardes! Me gustaría este impermeable amarillo para mi hermanito.",
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
    customerSpeechEs: "¡Hola! ¡Necesito tres manzanas frescas y este delicioso queso para mi pizza!",
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

  // Pool de artículos en la cinta transportadora (requeridos + distractores mezclados)
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
          <div style="font-weight:700; font-size:1.15rem; margin-bottom:4px;">🧾 ¡TOTAL COBRADO CON ÉXITO! (+25 pts)</div>
          <div>El cliente pagó el total de <strong>$${currentRegisterTotal.toFixed(2)}</strong>. ¡Excelente cajero en inglés!</div>
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
          🛒 ¡BEEP! ${itemName} escaneado ($${price.toFixed(2)}). Escanea el siguiente artículo del pedido.
        </div>
      `;
    }

  } else {
    sfx.playError();
    cardEl.style.animation = 'shakeBtn 0.35s';
    setTimeout(() => cardEl.style.animation = '', 400);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ ¡El cliente no pidió ese artículo! Escucha de nuevo lo que necesita.
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
        ¡JEFE DE CAJAS REGISTRADORAS DEL MALL!
      </h2>
      <p style="font-size:1.15rem; color:#047857; max-width:640px; margin:0 auto 20px; line-height:1.5;">
        ¡Atendiste a todos los clientes del supermercado a la perfección usando preguntas de compras y precios en inglés! Ganaste <strong>+50 pts bonus</strong>.
      </p>
      <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
        <button class="btn-back-map" style="background:#059669; color:#ffffff; border-color:#059669; cursor:pointer; font-size:1rem; padding:12px 24px;" onclick="switchTab('vlogger', document.querySelectorAll('.tab-btn')[3])">
          🎙️ Siguiente Actividad: Mall Vlogger Studio ➔
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
// Speaking Quest interactivo con Web Speech Recognition y transmisión en vivo
// ============================================================================
const VloggerHaulData = [
  {
    id: 0,
    title: "Mall Haul • Weekend Sneakers",
    scriptEn: "Hey everyone! Look at these awesome white sneakers I bought today! They are super comfortable.",
    scriptEs: "¡Hola a todos! ¡Miren estas increíbles zapatillas blancas que compré hoy! Son supercómodas.",
    viewersCount: "120K Viewers Live 🔥"
  },
  {
    id: 1,
    title: "Fashion Review • Winter Jacket",
    scriptEn: "Welcome back friends! This warm red jacket was thirty dollars and it has huge cozy pockets.",
    scriptEs: "¡Bienvenidos de nuevo amigos! Esta chaqueta roja abrigada costó 30 dólares y tiene bolsillos enormes.",
    viewersCount: "185K Viewers Live ✨"
  },
  {
    id: 2,
    title: "Gadget Unboxing • Cool Headphones",
    scriptEn: "Check out that electronics shop! I would like to show you these wireless blue headphones.",
    scriptEs: "¡Miren esa tienda de tecnología! Me gustaría mostrarles estos auriculares inalámbricos azules.",
    viewersCount: "250K Viewers Live 🎧"
  },
  {
    id: 3,
    title: "Bookstore Hunt • Comic Adventures",
    scriptEn: "Look at this superhero comic book! The drawings are colorful and the story is fantastic.",
    scriptEs: "¡Miren este cómic de superhéroes! Los dibujos son coloridos y la historia es fantástica.",
    viewersCount: "210K Viewers Live 📚"
  },
  {
    id: 4,
    title: "Food Court Tasting • Fruit Smoothie",
    scriptEn: "We are at the food court! This cold strawberry smoothie is fresh and tastes delicious.",
    scriptEs: "¡Estamos en la plaza de comidas! Este batido frío de fresa está fresco y sabe delicioso.",
    viewersCount: "300K Viewers Live 🍓"
  },
  {
    id: 5,
    title: "Grand Mall Tour • Shopping Finale",
    scriptEn: "Thank you for shopping with me today! Remember to like, subscribe and practice your English!",
    scriptEs: "¡Gracias por acompañarme de compras hoy! ¡Recuerden suscribirse y practicar su inglés!",
    viewersCount: "500K Viewers Live 🏆"
  }
];

let currentVloggerIndex = 0;
let isVloggerRecording = false;

function loadVloggerScript(index) {
  currentVloggerIndex = index;
  const item = VloggerHaulData[index];

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
    sfx.playSuccess();
    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:14px; padding:12px; color:#065f46; font-weight:700;">
        🎤 ¡Tu navegador no soporta SpeechRecognition, pero te otorgamos +25 pts por practicar en voz alta!
      </div>
    `;
    AppState.addStars(25);
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
      feedback.innerHTML = `<span style="color:#ec4899; font-weight:700;">🔴 ¡EN VIVO EN EL CANAL! Lee el guion frente a tu audiencia...</span>`;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      sfx.playApplause();
      feedback.innerHTML = `
        <div style="font-size:1.05rem; font-weight:600; color:#ffffff;">Dijiste: "<strong>${transcript}</strong>"</div>
        <span style="display:inline-block; margin-top:8px; background:rgba(236, 72, 153, 0.25); color:#f472b6; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #ec4899;">
          🌟 ¡Tu video se volvió viral! Calificación 5 Estrellas (+25 pts)
        </span>
      `;
      AppState.addStars(25);
    };

    recognition.onerror = () => {
      feedback.innerHTML = `<span style="color:#94a3b8;">Toca el micrófono de nuevo e inténtalo.</span>`;
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
// INICIALIZACIÓN DE LA UNIDAD 8
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // 1. Iniciar Obby Engine 2D
  startObbyEngine();

  // 2. Iniciar Gold Quest
  loadGoldQuestRound(0);

  // 3. Iniciar Cajero Táctil
  loadCashierOrder(0);

  // 4. Iniciar Vlogger Studio
  loadVloggerScript(0);
});
