/**
 * BILIKIDS KIDS CLUB - UNIT 5 ENGINE: FREE TIME
 * Age: 7-10 years (Cambridge Starters / Movers A1-A2)
 * Innovative, Highly Distinct Activities:
 * 1. 🎒 The Hobby Gear Locker (Casillero de Equipamiento de Hobbies)
 * 2. 🎚️ Tactile Frequency DJ Mixer (Consola con Fader Deslizante & Scratch)
 * 3. 🧪 Verb-ING Magnet Fusion Lab (Laboratorio Ortográfico -ING)
 * 4. 🏆 Talent Show Audition ("Yes, I can!" Talent Stage & Golden Buzzer)
 */

// ============================================================================
// APP STATE & PERSISTENCE
// ============================================================================
const AppState = {
  stars: parseInt(localStorage.getItem('bilikids_stars') || '160', 10),

  addStars(amount) {
    this.stars += amount;
    localStorage.setItem('bilikids_stars', this.stars.toString());
    const starEl = document.getElementById('unitStarsCount');
    if (starEl) {
      starEl.textContent = `${this.stars} pts`;
      starEl.classList.add('pulse-star');
      setTimeout(() => starEl.classList.remove('pulse-star'), 600);
    }
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

  playPackGear() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.14);
  }

  playScratch() {
    this.init();
    // Emulate realistic vinyl scratch
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(280, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(850, this.ctx.currentTime + 0.07);
    osc.frequency.linearRampToValueAtTime(350, this.ctx.currentTime + 0.14);
    gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playBeatDrop() {
    this.init();
    // Punchy electronic bass drop
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
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

  playBuzzerGold() {
    this.init();
    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.4);
    });
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
function speakEnglish(text, voiceType = 'kid', onComplete = null) {
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

  if (voiceType === 'judge') {
    utterance.pitch = 0.95;
    utterance.rate = 0.95;
  } else if (voiceType === 'dj') {
    utterance.pitch = 1.15;
    utterance.rate = 1.0;
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

// Pre-load voices
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
// ACTIVIDAD 1: THE HOBBY GEAR LOCKER (CASILLERO DE EQUIPAMIENTO)
// 8 misiones de preparación de equipamiento deportivo y hobbies
// ============================================================================
const lockerMissionsData = [
  {
    id: 0,
    member: "Leo the Skateboarder",
    hobby: "Skateboarding",
    avatar: "🛹",
    promptEn: "Leo is packing his gear bag to go skateboarding at the skatepark this afternoon.",
    promptEs: "Leo está empacando su maletín para montar patineta en el skatepark esta tarde.",
    requiredCount: 3,
    itemsPool: [
      { id: "skate", name: "Skateboard", icon: "🛹", isCorrect: true, es: "Patineta" },
      { id: "helmet", name: "Safety Helmet", icon: "⛑️", isCorrect: true, es: "Casco de seguridad" },
      { id: "kneepads", name: "Knee Pads", icon: "🛡️", isCorrect: true, es: "Rodilleras de protección" },
      { id: "pan", name: "Frying Pan", icon: "🍳", isCorrect: false, es: "Sartén (¡No pertenece!)" },
      { id: "snorkel", name: "Snorkel Mask", icon: "🤿", isCorrect: false, es: "Máscara de buceo" }
    ]
  },
  {
    id: 1,
    member: "Maya the Watercolor Artist",
    hobby: "Painting",
    avatar: "🎨",
    promptEn: "Maya is organizing her studio locker for watercolor painting class.",
    promptEs: "Maya está organizando su casillero para la clase de pintura en acuarela.",
    requiredCount: 3,
    itemsPool: [
      { id: "palette", name: "Color Palette", icon: "🎨", isCorrect: true, es: "Paleta de colores" },
      { id: "brushes", name: "Paint Brushes", icon: "🖌️", isCorrect: true, es: "Pinceles" },
      { id: "canvas", name: "Canvas Easel", icon: "🖼️", isCorrect: true, es: "Lienzo de pintura" },
      { id: "ball", name: "Soccer Ball", icon: "⚽", isCorrect: false, es: "Balón de fútbol" },
      { id: "brush", name: "Toothbrush", icon: "🪥", isCorrect: false, es: "Cepillo de dientes" }
    ]
  },
  {
    id: 2,
    member: "Lucas the Rock Guitarist",
    hobby: "Playing Guitar",
    avatar: "🎸",
    promptEn: "Lucas is getting ready for rock band rehearsal in the music room.",
    promptEs: "Lucas se prepara para el ensayo de su banda de rock en el salón de música.",
    requiredCount: 3,
    itemsPool: [
      { id: "guitar", name: "Electric Guitar", icon: "🎸", isCorrect: true, es: "Guitarra eléctrica" },
      { id: "amp", name: "Sound Amplifier", icon: "🔊", isCorrect: true, es: "Amplificador de sonido" },
      { id: "picks", name: "Guitar Picks", icon: "🎵", isCorrect: true, es: "Púas de guitarra" },
      { id: "bball", name: "Basketball", icon: "🏀", isCorrect: false, es: "Balón de baloncesto" },
      { id: "goggles", name: "Swim Goggles", icon: "🏊‍♂️", isCorrect: false, es: "Gafas de natación" }
    ]
  },
  {
    id: 3,
    member: "Chloe the Swimmer",
    hobby: "Swimming",
    avatar: "🏊‍♀️",
    promptEn: "Chloe is packing her sports backpack for swimming practice at the heated pool.",
    promptEs: "Chloe empaca su mochila deportiva para la práctica de natación en la piscina climatizada.",
    requiredCount: 3,
    itemsPool: [
      { id: "swimsuit", name: "Swimsuit", icon: "🩱", isCorrect: true, es: "Traje de baño" },
      { id: "goggles", name: "Swimming Goggles", icon: "🤿", isCorrect: true, es: "Gafas de natación" },
      { id: "cap", name: "Silicone Swim Cap", icon: "🧢", isCorrect: true, es: "Gorro de natación" },
      { id: "roller", name: "Rollerblade", icon: "🛼", isCorrect: false, es: "Patín en línea" },
      { id: "book", name: "Dictionary", icon: "📖", isCorrect: false, es: "Diccionario escolar" }
    ]
  },
  {
    id: 4,
    member: "Ben the Chess Master",
    hobby: "Playing Chess",
    avatar: "♟️",
    promptEn: "Ben is preparing his tactical equipment for the school chess tournament.",
    promptEs: "Ben prepara su equipamiento táctico para el torneo escolar de ajedrez.",
    requiredCount: 3,
    itemsPool: [
      { id: "board", name: "Chess Board", icon: "♟️", isCorrect: true, es: "Tablero y piezas de ajedrez" },
      { id: "clock", name: "Chess Digital Clock", icon: "⏱️", isCorrect: true, es: "Reloj cronómetro de ajedrez" },
      { id: "notebook", name: "Score Notebook", icon: "📝", isCorrect: true, es: "Libreta de jugadas" },
      { id: "boxing", name: "Boxing Gloves", icon: "🥊", isCorrect: false, es: "Guantes de boxeo" },
      { id: "skis", name: "Snow Skis", icon: "🎿", isCorrect: false, es: "Esquís de nieve" }
    ]
  },
  {
    id: 5,
    member: "Sarah the Tennis Player",
    hobby: "Playing Tennis",
    avatar: "🎾",
    promptEn: "Sarah is checking her locker before her tennis match on the clay court.",
    promptEs: "Sarah revisa su casillero antes de su partido de tenis en la cancha de arcilla.",
    requiredCount: 3,
    itemsPool: [
      { id: "racket", name: "Tennis Racket", icon: "🎾", isCorrect: true, es: "Raqueta de tenis" },
      { id: "balls", name: "Tennis Balls Can", icon: "🟡", isCorrect: true, es: "Tubo de pelotas de tenis" },
      { id: "visor", name: "Sun Visor Cap", icon: "🧢", isCorrect: true, es: "Visera para el sol" },
      { id: "pan", name: "Cooking Pan", icon: "🍳", isCorrect: false, es: "Sartén de cocina" },
      { id: "guitar", name: "Acoustic Guitar", icon: "🎸", isCorrect: false, es: "Guitarra acústica" }
    ]
  },
  {
    id: 6,
    member: "Oliver the Wildlife Photographer",
    hobby: "Photography",
    avatar: "📷",
    promptEn: "Oliver is packing his equipment bag to take wildlife photos of birds in the forest.",
    promptEs: "Oliver empaca su bolso para tomar fotografías de aves silvestres en el bosque.",
    requiredCount: 3,
    itemsPool: [
      { id: "camera", name: "Digital Camera", icon: "📷", isCorrect: true, es: "Cámara digital" },
      { id: "lens", name: "Telephoto Zoom Lens", icon: "🔭", isCorrect: true, es: "Lente teleobjetivo" },
      { id: "tripod", name: "Camera Tripod", icon: "📐", isCorrect: true, es: "Trípode para cámara" },
      { id: "soccer", name: "Soccer Cleats", icon: "👟", isCorrect: false, es: "Guayos de fútbol" },
      { id: "mic", name: "Stage Microphone", icon: "🎤", isCorrect: false, es: "Micrófono de escenario" }
    ]
  },
  {
    id: 7,
    member: "Sofia the Rollerblader",
    hobby: "Rollerblading",
    avatar: "🛼",
    promptEn: "Sofia is getting her protective gear ready to rollerblade along the sunny beach promenade.",
    promptEs: "Sofía alista su equipo de protección para patinar por el paseo marítimo soleado.",
    requiredCount: 3,
    itemsPool: [
      { id: "roller", name: "Rollerblades", icon: "🛼", isCorrect: true, es: "Patines en línea" },
      { id: "helmet", name: "Safety Helmet", icon: "⛑️", isCorrect: true, es: "Casco de patinaje" },
      { id: "guards", name: "Wrist Guards", icon: "🧤", isCorrect: true, es: "Muñequeras de protección" },
      { id: "pan", name: "Frying Pan", icon: "🍳", isCorrect: false, es: "Sartén de cocina" },
      { id: "chess", name: "Chess Clock", icon: "⏱️", isCorrect: false, es: "Reloj de ajedrez" }
    ]
  }
];

let currentLockerMission = 0;
let packedLockerItems = []; // Array of packed item objects

function loadLockerMission(index) {
  currentLockerMission = index;
  packedLockerItems = [];
  const m = lockerMissionsData[index];

  document.getElementById('lockerMissionBadge').textContent = `Misión ${index + 1} de ${lockerMissionsData.length}`;
  document.getElementById('lockerMemberName').textContent = `${m.avatar} ${m.member} (${m.hobby})`;
  document.getElementById('lockerPromptEn').textContent = `"${m.promptEn}"`;
  document.getElementById('lockerPromptEs').textContent = m.promptEs;

  speakEnglish(m.promptEn, 'narrator');

  renderLockerSlotsTray();
  renderGearItemsPool();
  document.getElementById('lockerFeedbackBox').innerHTML = '';
}

function listenLockerPrompt() {
  sfx.playPop();
  const m = lockerMissionsData[currentLockerMission];
  speakEnglish(m.promptEn, 'narrator');
}

function renderLockerSlotsTray() {
  const tray = document.getElementById('lockerSlotsTray');
  if (!tray) return;

  const slots = [0, 1, 2];
  tray.innerHTML = slots.map(i => {
    const item = packedLockerItems[i];
    if (item) {
      return `
        <div class="locker-slot-box filled">
          <div style="font-size:2.2rem; margin-bottom:4px;">${item.icon}</div>
          <div style="font-family:var(--font-display); font-size:1.05rem; font-weight:700; color:#34d399;">${item.name}</div>
          <div style="font-size:0.75rem; color:#a7f3d0;">Empacado ✅</div>
        </div>
      `;
    } else {
      return `
        <div class="locker-slot-box">
          <div style="font-size:2rem; opacity:0.3; margin-bottom:4px;">📦</div>
          <div style="font-family:var(--font-display); font-size:0.95rem; font-weight:700;">Espacio Vacío ${i + 1}</div>
          <div style="font-size:0.75rem; color:#64748b;">Selecciona un artículo abajo</div>
        </div>
      `;
    }
  }).join('');
}

function renderGearItemsPool() {
  const poolContainer = document.getElementById('gearPoolGrid');
  if (!poolContainer) return;

  const m = lockerMissionsData[currentLockerMission];
  // Randomize pool order every time
  const shuffled = [...m.itemsPool].sort(() => Math.random() - 0.5);

  poolContainer.innerHTML = shuffled.map(item => {
    const isAlreadyPacked = packedLockerItems.some(p => p.id === item.id);
    return `
      <div class="gear-item-card ${isAlreadyPacked ? 'packed' : ''}" 
           onclick="handleGearItemClick(this, '${item.id}', ${item.isCorrect}, '${item.name.replace(/'/g, "\\'")}', '${item.icon}')">
        <span style="font-size:2.2rem;">${item.icon}</span>
        <strong style="font-family:var(--font-display); font-size:0.95rem; color:#0f172a;">${item.name}</strong>
        <span style="font-size:0.75rem; color:#64748b;">${item.es}</span>
      </div>
    `;
  }).join('');
}

function handleGearItemClick(cardEl, itemId, isCorrect, itemName, itemIcon) {
  const feedback = document.getElementById('lockerFeedbackBox');

  if (isCorrect) {
    if (packedLockerItems.some(item => item.id === itemId) || packedLockerItems.length >= 3) return;
    sfx.playPackGear();
    cardEl.classList.add('packed');
    packedLockerItems.push({ id: itemId, name: itemName, icon: itemIcon });
    renderLockerSlotsTray();

    speakEnglish(itemName, 'kid');

    if (packedLockerItems.length === 3) {
      // Mission Complete!
      sfx.playSuccess();
      feedback.innerHTML = `
        <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:16px; padding:14px 20px; color:#065f46; margin-top:16px;">
          <div style="font-weight:700; font-size:1.15rem; margin-bottom:4px;">🔒 ¡CASILLERO COMPLETO Y ASEGURADO! (+25 pts)</div>
          <div>Empacaste todo el equipamiento necesario para este deporte. ¡Excelente vocabulario!</div>
        </div>
      `;
      AppState.addStars(25);

      setTimeout(() => {
        if (currentLockerMission < lockerMissionsData.length - 1) {
          loadLockerMission(currentLockerMission + 1);
        }
      }, 2000);
    } else {
      feedback.innerHTML = `
        <div style="color:#059669; font-weight:700; font-size:0.95rem; margin-top:10px;">
          🎒 ¡${itemIcon} ${itemName} empacado! Llevas ${packedLockerItems.length} de 3 artículos.
        </div>
      `;
    }

  } else {
    sfx.playError();
    cardEl.classList.add('wrong');
    setTimeout(() => cardEl.classList.remove('wrong'), 450);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ ¡${itemName} no pertenece a este deporte o hobby! Elige el equipamiento adecuado.
      </div>
    `;
  }
}

function nextLockerMission() {
  sfx.playPop();
  currentLockerMission = (currentLockerMission + 1) % lockerMissionsData.length;
  loadLockerMission(currentLockerMission);
}

// ============================================================================
// ACTIVIDAD 2: TACTILE FREQUENCY DJ MIXER (CONSOLA CON CROSSFADER Y SCRATCH)
// 10 pistas musicales con control deslizante de 0% a 100% y scratch interactivo
// ============================================================================
const djMixerTracksData = [
  {
    id: 0,
    title: "Track 1 • The Daily Gamer 🎮",
    routineEn: "Max plays video games on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.",
    routineEs: "Max juega videojuegos los 7 días de la semana (Lunes a Domingo sin falta).",
    activeDays: [1, 2, 3, 4, 5, 6, 7], // 7/7
    targetPercentage: 100,
    targetAdverb: "always",
    explanation: "7 de 7 días ➔ 100% de frecuencia es ALWAYS (siempre)!"
  },
  {
    id: 1,
    title: "Track 2 • Zero Skateboarding 🛹",
    routineEn: "Emma doesn't have a skateboard and she has never tried it in her life (0 days).",
    routineEs: "Emma no tiene patineta y jamás la ha probado en su vida (0 días).",
    activeDays: [], // 0/7
    targetPercentage: 0,
    targetAdverb: "never",
    explanation: "0 veces ➔ 0% de frecuencia es NEVER (nunca)!"
  },
  {
    id: 2,
    title: "Track 3 • Casual Acoustic Guitar 🎸",
    routineEn: "Lucas plays the acoustic guitar only on Saturday afternoons (1 or 2 times a month).",
    routineEs: "Lucas toca la guitarra acústica solo de vez en cuando (1 o 2 veces al mes).",
    activeDays: [6],
    targetPercentage: 25,
    targetAdverb: "sometimes",
    explanation: "Ocasionalmente ➔ Alrededor del 25% es SOMETIMES (a veces)!"
  },
  {
    id: 3,
    title: "Track 4 • Regular Swimmer 🏊‍♂️",
    routineEn: "Chloe swims at the heated pool on Monday, Wednesday, Friday, and Saturday (4 days a week).",
    routineEs: "Chloe nada en la piscina 4 días por semana con regularidad.",
    activeDays: [1, 3, 5, 6],
    targetPercentage: 50,
    targetAdverb: "often",
    explanation: "Con bastante regularidad (4 días) ➔ 50% es OFTEN (a menudo)!"
  },
  {
    id: 4,
    title: "Track 5 • School Bus Traveler 🚌",
    routineEn: "David rides the yellow bus from Monday through Friday (almost every day).",
    routineEs: "David toma el autobús escolar casi todos los días (5 días por semana).",
    activeDays: [1, 2, 3, 4, 5],
    targetPercentage: 75,
    targetAdverb: "usually",
    explanation: "Casi toda la semana (5 días) ➔ 75% es USUALLY (usualmente)!"
  },
  {
    id: 5,
    title: "Track 6 • Toothbrush Champion 🪥",
    routineEn: "Sofia brushes her teeth every morning and evening without exception (every single day).",
    routineEs: "Sofía se cepilla los dientes todos los días sin falta.",
    activeDays: [1, 2, 3, 4, 5, 6, 7],
    targetPercentage: 100,
    targetAdverb: "always",
    explanation: "Todos los días sin excepción ➔ 100% es ALWAYS!"
  },
  {
    id: 6,
    title: "Track 7 • No Coffee Kid ☕",
    routineEn: "Kids don't drink black coffee. Liam drinks warm milk or juice (0 times coffee).",
    routineEs: "Los niños no toman café negro. Liam toma leche o jugo (0 veces café).",
    activeDays: [],
    targetPercentage: 0,
    targetAdverb: "never",
    explanation: "Cero veces ➔ 0% es NEVER!"
  },
  {
    id: 7,
    title: "Track 8 • Weekend Cyclist 🚲",
    routineEn: "On sunny Saturdays and Sundays, Sarah and her dad ride bicycles in the park.",
    routineEs: "Los fines de semana soleados, Sarah y su papá montan bicicleta.",
    activeDays: [6, 7],
    targetPercentage: 25,
    targetAdverb: "sometimes",
    explanation: "Solo los fines de semana ➔ 25% es SOMETIMES!"
  },
  {
    id: 8,
    title: "Track 9 • Comic Book Reader 📚",
    routineEn: "Leo reads superhero comic books on Monday, Tuesday, Thursday, and Sunday evening.",
    routineEs: "Leo lee cómics de superhéroes 4 días a la semana frecuentemente.",
    activeDays: [1, 2, 4, 7],
    targetPercentage: 50,
    targetAdverb: "often",
    explanation: "Frecuentemente (4 días) ➔ 50% es OFTEN!"
  },
  {
    id: 9,
    title: "Track 10 • Homework Champion 📝",
    routineEn: "Oliver finishes his homework from Monday to Friday right after arriving home.",
    routineEs: "Oliver hace sus tareas de lunes a viernes en cuanto llega a casa.",
    activeDays: [1, 2, 3, 4, 5],
    targetPercentage: 75,
    targetAdverb: "usually",
    explanation: "Casi toda la semana (5 días) ➔ 75% es USUALLY!"
  }
];

let currentDJIndex = 0;
let currentSliderValue = 50;
let djRewardClaimed = false;

function loadDJTrack(index) {
  currentDJIndex = index;
  djRewardClaimed = false;
  const track = djMixerTracksData[index];

  document.getElementById('djTrackBadge').textContent = `Pista ${index + 1} de ${djMixerTracksData.length}`;
  document.getElementById('djTrackTitle').textContent = track.title;
  document.getElementById('djRoutineEn').textContent = `"${track.routineEn}"`;
  document.getElementById('djRoutineEs').textContent = track.routineEs;

  // Active weekly days display
  const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const calBar = document.getElementById('djCalendarFrequencyBar');
  calBar.innerHTML = dayNames.map((d, i) => {
    const isActive = track.activeDays.includes(i + 1);
    return `<span class="dj-day-chip ${isActive ? 'active-day' : ''}">${d} ${isActive ? '✅' : '▫️'}</span>`;
  }).join('');

  // Reset fader to center (50%)
  const slider = document.getElementById('crossfaderInput');
  if (slider) {
    slider.value = 50;
    currentSliderValue = 50;
    updateVUMeters(50);
  }

  speakEnglish(track.routineEn, 'dj');
  document.getElementById('djFeedbackBox').innerHTML = '';
}

function listenDJRoutine() {
  sfx.playScratch();
  const track = djMixerTracksData[currentDJIndex];
  speakEnglish(track.routineEn, 'dj');
}

function handleVinylScratch() {
  sfx.playScratch();
  const disc = document.getElementById('vinylDisc');
  if (disc) {
    disc.classList.add('spinning');
    setTimeout(() => disc.classList.remove('spinning'), 1200);
  }
}

function handleCrossfaderChange(val) {
  currentSliderValue = parseInt(val, 10);
  sfx.playPop();
  updateVUMeters(currentSliderValue);
}

function updateVUMeters(val) {
  // Update LEDs (1 to 5)
  const leds = [
    document.getElementById('vuLed1'),
    document.getElementById('vuLed2'),
    document.getElementById('vuLed3'),
    document.getElementById('vuLed4'),
    document.getElementById('vuLed5')
  ];

  leds.forEach(l => {
    if (l) l.className = 'vu-led-bar';
  });

  const levelText = document.getElementById('djLiveFaderDisplay');

  if (val === 0) {
    if (leds[0]) leds[0].classList.add('active-led-1');
    if (levelText) levelText.innerHTML = `<span style="color:#ef4444;">0% • NEVER (Nunca) ❌</span>`;
  } else if (val === 25) {
    if (leds[0]) leds[0].classList.add('active-led-1');
    if (leds[1]) leds[1].classList.add('active-led-2');
    if (levelText) levelText.innerHTML = `<span style="color:#f59e0b;">25% • SOMETIMES (A veces) 🟨</span>`;
  } else if (val === 50) {
    if (leds[0]) leds[0].classList.add('active-led-1');
    if (leds[1]) leds[1].classList.add('active-led-2');
    if (leds[2]) leds[2].classList.add('active-led-3');
    if (levelText) levelText.innerHTML = `<span style="color:#10b981;">50% • OFTEN (A menudo) 🟩</span>`;
  } else if (val === 75) {
    if (leds[0]) leds[0].classList.add('active-led-1');
    if (leds[1]) leds[1].classList.add('active-led-2');
    if (leds[2]) leds[2].classList.add('active-led-3');
    if (leds[3]) leds[3].classList.add('active-led-4');
    if (levelText) levelText.innerHTML = `<span style="color:#06b6d4;">75% • USUALLY (Usualmente) 🟦</span>`;
  } else if (val === 100) {
    leds.forEach((l, i) => {
      if (l) l.classList.add(`active-led-${i + 1}`);
    });
    if (levelText) levelText.innerHTML = `<span style="color:#a855f7;">100% • ALWAYS (Siempre) 🟪</span>`;
  }
}

function dropTheDJBeat() {
  if (djRewardClaimed) return;
  const track = djMixerTracksData[currentDJIndex];
  const feedback = document.getElementById('djFeedbackBox');
  const disc = document.getElementById('vinylDisc');

  if (currentSliderValue === track.targetPercentage) {
    djRewardClaimed = true;
    // CORRECT BEAT DROP!
    sfx.playScratch();
    setTimeout(() => sfx.playBeatDrop(), 180);
    setTimeout(() => sfx.playSuccess(), 450);

    if (disc) {
      disc.classList.add('spinning');
      setTimeout(() => disc.classList.remove('spinning'), 3000);
    }

    feedback.innerHTML = `
      <div style="background:rgba(16, 185, 129, 0.2); border:1px solid #10b981; border-radius:16px; padding:14px 20px; color:#34d399; margin-top:16px;">
        <div style="font-weight:700; font-size:1.15rem; margin-bottom:4px;">🎧 ¡BEAT DROP PERFECTO! Fader en ${track.targetPercentage}% (+20 pts)</div>
        <div style="font-size:0.95rem; color:#ffffff;">"${track.targetAdverb.toUpperCase()}" calza exactamente con la rutina.</div>
        <div style="font-size:0.85rem; color:#a7f3d0; margin-top:4px;">💡 ${track.explanation}</div>
      </div>
    `;
    AppState.addStars(20);
    speakEnglish(`Drop the beat! ${track.targetAdverb}`, 'dj');

    setTimeout(() => {
      if (currentDJIndex < djMixerTracksData.length - 1) {
        loadDJTrack(currentDJIndex + 1);
      }
    }, 2200);

  } else {
    sfx.playScratch();
    sfx.playError();

    feedback.innerHTML = `
      <div style="background:rgba(239, 68, 68, 0.2); border:1px solid #ef4444; border-radius:14px; padding:12px 18px; color:#f87171; font-weight:700; margin-top:16px;">
        ⚠️ ¡El beat no calza! Tu fader está en ${currentSliderValue}%. Revisa cuántos días marcados en verde tiene el calendario arriba.
      </div>
    `;
  }
}

function nextDJTrack() {
  sfx.playPop();
  currentDJIndex = (currentDJIndex + 1) % djMixerTracksData.length;
  loadDJTrack(currentDJIndex);
}

// ============================================================================
// ACTIVIDAD 3: VERB-ING MAGNET FUSION LAB
// 15 retos de fusión ortográfica con verbos de gusto (like/love/enjoy/hate + -ing)
// ============================================================================
const magnetLabChallenges = [
  {
    id: 0,
    baseVerb: "play",
    ruleType: "normal",
    ruleDescription: "Verbo normal ➔ Agrega -ING directamente: play + ing = playing",
    sentenceTemplate: "I love ___ soccer with my friends in the park.",
    sentenceComplete: "I love playing soccer with my friends in the park.",
    correctAnswer: "playing",
    options: ["playing", "playying", "plaing"]
  },
  {
    id: 1,
    baseVerb: "dance",
    ruleType: "drop-e",
    ruleDescription: "Termina en 'e' muda ➔ Elimina la 'e' y agrega -ING: dance ➔ dancing",
    sentenceTemplate: "She enjoys ___ hip-hop music in her room.",
    sentenceComplete: "She enjoys dancing hip-hop music in her room.",
    correctAnswer: "dancing",
    options: ["dancing", "danceing", "danning"]
  },
  {
    id: 2,
    baseVerb: "swim",
    ruleType: "double-consonant",
    ruleDescription: "Consonante + Vocal + Consonante (CVC) ➔ Duplica la consonante: swim ➔ swimming",
    sentenceTemplate: "They like ___ in the Olympic swimming pool.",
    sentenceComplete: "They like swimming in the Olympic swimming pool.",
    correctAnswer: "swimming",
    options: ["swimming", "swiming", "swimeing"]
  },
  {
    id: 3,
    baseVerb: "ride",
    ruleType: "drop-e",
    ruleDescription: "Termina en 'e' muda ➔ Elimina la 'e': ride ➔ riding",
    sentenceTemplate: "He loves ___ his bicycle down the green hill.",
    sentenceComplete: "He loves riding his bicycle down the green hill.",
    correctAnswer: "riding",
    options: ["riding", "rideing", "ridding"]
  },
  {
    id: 4,
    baseVerb: "read",
    ruleType: "normal",
    ruleDescription: "Tiene doble vocal 'ea' ➔ Agrega -ING directamente: read ➔ reading",
    sentenceTemplate: "We enjoy ___ adventure mystery books.",
    sentenceComplete: "We enjoy reading adventure mystery books.",
    correctAnswer: "reading",
    options: ["reading", "readding", "readeing"]
  },
  {
    id: 5,
    baseVerb: "run",
    ruleType: "double-consonant",
    ruleDescription: "Una sílaba CVC ➔ Duplica la 'n': run ➔ running",
    sentenceTemplate: "The dog hates ___ in the cold rain.",
    sentenceComplete: "The dog hates running in the cold rain.",
    correctAnswer: "running",
    options: ["running", "runing", "runeing"]
  },
  {
    id: 6,
    baseVerb: "watch",
    ruleType: "normal",
    ruleDescription: "Verbo normal ➔ Agrega -ING: watch ➔ watching",
    sentenceTemplate: "My brother likes ___ cartoon movies on Friday.",
    sentenceComplete: "My brother likes watching cartoon movies on Friday.",
    correctAnswer: "watching",
    options: ["watching", "watchhing", "watchin"]
  },
  {
    id: 7,
    baseVerb: "skate",
    ruleType: "drop-e",
    ruleDescription: "Termina en 'e' muda ➔ Elimina la 'e': skate ➔ skating",
    sentenceTemplate: "Sarah loves ___ at the ice rink in winter.",
    sentenceComplete: "Sarah loves skating at the ice rink in winter.",
    correctAnswer: "skating",
    options: ["skating", "skateing", "skatting"]
  },
  {
    id: 8,
    baseVerb: "draw",
    ruleType: "normal",
    ruleDescription: "Termina en 'w' ➔ Agrega -ING directamente: draw ➔ drawing",
    sentenceTemplate: "Leo is great at ___ comic superheroes.",
    sentenceComplete: "Leo is great at drawing comic superheroes.",
    correctAnswer: "drawing",
    options: ["drawing", "drawwing", "draweing"]
  },
  {
    id: 9,
    baseVerb: "make",
    ruleType: "drop-e",
    ruleDescription: "Termina en 'e' muda ➔ Elimina la 'e': make ➔ making",
    sentenceTemplate: "We enjoy ___ delicious banana pancakes.",
    sentenceComplete: "We enjoy making delicious banana pancakes.",
    correctAnswer: "making",
    options: ["making", "makeing", "makking"]
  },
  {
    id: 10,
    baseVerb: "sing",
    ruleType: "normal",
    ruleDescription: "Verbo normal ➔ Agrega -ING: sing ➔ singing",
    sentenceTemplate: "They love ___ English pop songs together.",
    sentenceComplete: "They love singing English pop songs together.",
    correctAnswer: "singing",
    options: ["singing", "singging", "singeing"]
  },
  {
    id: 11,
    baseVerb: "take",
    ruleType: "drop-e",
    ruleDescription: "Termina en 'e' muda ➔ Elimina la 'e': take ➔ taking",
    sentenceTemplate: "Dad likes ___ photos of wild birds in the forest.",
    sentenceComplete: "Dad likes taking photos of wild birds in the forest.",
    correctAnswer: "taking",
    options: ["taking", "takeing", "takking"]
  },
  {
    id: 12,
    baseVerb: "paint",
    ruleType: "normal",
    ruleDescription: "Verbo normal ➔ Agrega -ING: paint ➔ painting",
    sentenceTemplate: "Maya loves ___ wooden boxes with bright colors.",
    sentenceComplete: "Maya loves painting wooden boxes with bright colors.",
    correctAnswer: "painting",
    options: ["painting", "paintting", "painteing"]
  },
  {
    id: 13,
    baseVerb: "stop",
    ruleType: "double-consonant",
    ruleDescription: "Una sílaba CVC ➔ Duplica la 'p': stop ➔ stopping",
    sentenceTemplate: "He keeps playing without ___ for lunch.",
    sentenceComplete: "He keeps playing without stopping for lunch.",
    correctAnswer: "stopping",
    options: ["stopping", "stoping", "stoppeing"]
  },
  {
    id: 14,
    baseVerb: "cook",
    ruleType: "normal",
    ruleDescription: "Doble vocal 'oo' ➔ Agrega -ING directamente: cook ➔ cooking",
    sentenceTemplate: "Grandmother enjoys ___ vegetable soup on Sunday.",
    sentenceComplete: "Grandmother enjoys cooking vegetable soup on Sunday.",
    correctAnswer: "cooking",
    options: ["cooking", "cookking", "cookeing"]
  }
];

let currentMagnetIndex = 0;

function loadMagnetChallenge(index) {
  currentMagnetIndex = index;
  const item = magnetLabChallenges[index];

  document.getElementById('magnetCaseBadge').textContent = `Fusión ${index + 1} de ${magnetLabChallenges.length}`;
  document.getElementById('magnetSentenceDisplay').innerHTML = item.sentenceTemplate.replace(
    '___',
    `<span id="magnetBlankSlot" class="magnet-blank-pill">[ ? ]</span>`
  );
  document.getElementById('magnetRuleClue').innerHTML = `🧲 Verbo Base: <strong>${item.baseVerb}</strong>`;

  // Randomize button positions
  const shuffledOptions = [...item.options].sort(() => Math.random() - 0.5);

  const optionsRow = document.getElementById('magnetOptionsRow');
  optionsRow.innerHTML = shuffledOptions.map(opt => `
    <button class="btn-magnet-option" onclick="fuseMagnetVerb(this, '${opt}', '${item.correctAnswer}', '${item.sentenceComplete.replace(/'/g, "\\'")}', '${item.ruleDescription.replace(/'/g, "\\'")}')">
      ${opt}
    </button>
  `).join('');

  document.getElementById('magnetFeedbackBox').innerHTML = '';
}

function fuseMagnetVerb(btnEl, chosenOpt, correctOpt, sentenceComplete, ruleDesc) {
  const blank = document.getElementById('magnetBlankSlot');
  const feedback = document.getElementById('magnetFeedbackBox');

  if (chosenOpt === correctOpt) {
    sfx.playSuccess();
    btnEl.classList.add('correct');

    if (blank) {
      blank.textContent = chosenOpt;
      blank.style.background = '#d1fae5';
      blank.style.borderColor = '#10b981';
      blank.style.color = '#065f46';
    }

    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:14px; padding:12px 18px; color:#065f46; margin-top:16px;">
        <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">🧲 ¡FUSIÓN ORTOGRÁFICA EXITOSA! (+15 pts)</div>
        <div style="font-size:1.05rem;">"${sentenceComplete}"</div>
        <div style="font-size:0.85rem; color:#047857; margin-top:6px; font-weight:600;">💡 Regla: ${ruleDesc}</div>
      </div>
    `;
    AppState.addStars(15);
    speakEnglish(sentenceComplete, 'kid');

    setTimeout(() => {
      if (currentMagnetIndex < magnetLabChallenges.length - 1) {
        loadMagnetChallenge(currentMagnetIndex + 1);
      }
    }, 1800);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong');
    setTimeout(() => btnEl.classList.remove('wrong'), 450);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:16px;">
        ⚠️ Revisa la regla ortográfica: ¿lleva 'e' muda que se elimina o duplica la consonante CVC?
      </div>
    `;
  }
}

function nextMagnetChallenge() {
  sfx.playPop();
  currentMagnetIndex = (currentMagnetIndex + 1) % magnetLabChallenges.length;
  loadMagnetChallenge(currentMagnetIndex);
}

// ============================================================================
// ACTIVIDAD 4: TALENT SHOW AUDITION ("YES, I CAN!" TALENT STAGE)
// 8 audiciones de talentos con botón de Golden Buzzer y práctica oral
// ============================================================================
const talentAuditionsData = [
  {
    id: 0,
    talentTag: "Audition 1 • Acoustic Guitar 🎸",
    judgeQuestion: "Can you play the acoustic guitar?",
    judgeQuestionEs: "¿Puedes tocar la guitarra acústica?",
    candidateAnswer: "Yes, I can play the guitar very well!",
    candidateAnswerEs: "¡Sí, puedo tocar la guitarra muy bien!",
    judgeFeedback: "Judge Simon: Outstanding rhythm and clean chords! 🌟"
  },
  {
    id: 1,
    talentTag: "Audition 2 • Skateboard Tricks 🛹",
    judgeQuestion: "Can you do tricks on a skateboard?",
    judgeQuestionEs: "¿Puedes hacer trucos en patineta?",
    candidateAnswer: "Yes, I can jump and ride fast on my skateboard!",
    candidateAnswerEs: "¡Sí, puedo saltar y montar rápido en mi patineta!",
    judgeFeedback: "Judge Paula: Fearless balance on four wheels! 🛹🔥"
  },
  {
    id: 2,
    talentTag: "Audition 3 • English Singing 🎤",
    judgeQuestion: "Can you sing pop songs in English?",
    judgeQuestionEs: "¿Puedes cantar canciones pop en inglés?",
    candidateAnswer: "Yes, I can sing with energy and joy!",
    candidateAnswerEs: "¡Sí, puedo cantar con energía y alegría!",
    judgeFeedback: "Judge David: Fantastic vocal pitch and smile! 🎵✨"
  },
  {
    id: 3,
    talentTag: "Audition 4 • Swimming Distance 🏊‍♂️",
    judgeQuestion: "Can you swim fifty meters in the pool?",
    judgeQuestionEs: "¿Puedes nadar cincuenta metros en la piscina?",
    candidateAnswer: "Yes, I can swim fast like a dolphin!",
    candidateAnswerEs: "¡Sí, puedo nadar rápido como un delfín!",
    judgeFeedback: "Judge Simon: Incredible stamina in the water! 🐬🏆"
  },
  {
    id: 4,
    talentTag: "Audition 5 • Juggling Skills 🤹",
    judgeQuestion: "Can you juggle three tennis balls?",
    judgeQuestionEs: "¿Puedes hacer malabares con tres pelotas de tenis?",
    candidateAnswer: "Yes, I can juggle without dropping any ball!",
    candidateAnswerEs: "¡Sí, puedo hacer malabares sin dejar caer ninguna pelota!",
    judgeFeedback: "Judge Paula: Amazing hand-eye coordination! 🎾⭐"
  },
  {
    id: 5,
    talentTag: "Audition 6 • Comic Illustration 🎨",
    judgeQuestion: "Can you draw comic cartoon characters?",
    judgeQuestionEs: "¿Puedes dibujar personajes de caricaturas?",
    candidateAnswer: "Yes, I can draw funny heroes and monsters!",
    candidateAnswerEs: "¡Sí, puedo dibujar héroes graciosos y monstruos!",
    judgeFeedback: "Judge David: High level creative imagination! 🖌️🌟"
  },
  {
    id: 6,
    talentTag: "Audition 7 • Cooking Breakfast 🥞",
    judgeQuestion: "Can you make sweet banana pancakes?",
    judgeQuestionEs: "¿Puedes preparar panqueques dulces de plátano?",
    candidateAnswer: "Yes, I can cook delicious pancakes for my family!",
    candidateAnswerEs: "¡Sí, puedo cocinar panqueques deliciosos para mi familia!",
    judgeFeedback: "Judge Simon: Delicious recipe presentation! 🥞❤️"
  },
  {
    id: 7,
    talentTag: "Audition 8 • Grand Finale Languages 🌍",
    judgeQuestion: "Can you speak English and Spanish fluently?",
    judgeQuestionEs: "¿Puedes hablar inglés y español con fluidez?",
    candidateAnswer: "Yes, I can speak both languages with confidence!",
    candidateAnswerEs: "¡Sí, puedo hablar ambos idiomas con confianza!",
    judgeFeedback: "All Judges: GOLDEN BUZZER! You are a Bilikids Superstar! 🔔✨"
  }
];

let currentTalentIndex = 0;
let isTalentRecording = false;

function loadTalentAudition(index) {
  currentTalentIndex = index;
  const audition = talentAuditionsData[index];
  document.getElementById('talentMicBtn').disabled = false;

  document.getElementById('talentEpisodeNum').textContent = `Audición ${index + 1} de ${talentAuditionsData.length}`;
  document.getElementById('talentSceneTag').textContent = audition.talentTag;
  document.getElementById('talentJudgeQuestion').textContent = `Judge asks: "${audition.judgeQuestion}"`;
  document.getElementById('talentJudgeQuestionEs').textContent = audition.judgeQuestionEs;
  document.getElementById('talentCandidateAnswer').textContent = `"${audition.candidateAnswer}"`;
  document.getElementById('talentCandidateAnswerEs').textContent = audition.candidateAnswerEs;
  document.getElementById('talentJudgeBox').innerHTML = `
    <span style="color:#fbbf24; font-size:0.9rem;">⭐ Panel del Jurado: ${audition.judgeFeedback}</span>
  `;
  document.getElementById('talentFeedback').innerHTML = '';

  speakEnglish(audition.judgeQuestion, 'judge');
}

function listenJudgeQuestion() {
  sfx.playPop();
  const a = talentAuditionsData[currentTalentIndex];
  speakEnglish(a.judgeQuestion, 'judge');
}

function listenCandidateAnswer() {
  sfx.playPop();
  const a = talentAuditionsData[currentTalentIndex];
  speakEnglish(a.candidateAnswer, 'kid');
}

function toggleTalentMic() {
  const btn = document.getElementById('talentMicBtn');
  const feedback = document.getElementById('talentFeedback');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    feedback.innerHTML = `
      <div style="font-size:1.15rem; font-weight:700; color:#fbbf24;">🔔 ¡GOLDEN BUZZER ACTIVADO!</div>
      <span style="display:inline-block; margin-top:8px; background:rgba(245, 158, 11, 0.25); color:#fbbf24; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #f59e0b;">
      Práctica sin puntuación. Escucha el modelo y responde en voz alta.
      </span>
    `;
    btn.disabled = true;
    return;
  }

  if (isTalentRecording) return;

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isTalentRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#ef4444; font-weight:700;">🎤 ¡EN EL ESCENARIO! Responde al jurado en inglés...</span>`;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      feedback.innerHTML = `
        <div style="font-size:1.05rem; font-weight:600; color:#ffffff;">Dijiste: "<strong>${transcript}</strong>"</div>
        <span style="display:inline-block; margin-top:8px; background:rgba(245, 158, 11, 0.25); color:#fbbf24; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #f59e0b;">
          🔔 Transcripción de práctica; la respuesta y pronunciación no se evalúan.
        </span>
      `;
    };

    recognition.onerror = () => {
      feedback.innerHTML = `<span style="color:#94a3b8;">Toca el micrófono de nuevo e inténtalo.</span>`;
    };

    recognition.onend = () => {
      isTalentRecording = false;
      btn.classList.remove('recording');
    };

    recognition.start();

  } catch (err) {
    btn.classList.remove('recording');
  }
}

function nextTalentAudition() {
  sfx.playPop();
  currentTalentIndex = (currentTalentIndex + 1) % talentAuditionsData.length;
  loadTalentAudition(currentTalentIndex);
}

// ============================================================================
// INICIALIZACIÓN DE LA UNIDAD 5
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // 1. Hobby Gear Locker
  loadLockerMission(0);

  // 2. Tactile Frequency DJ Mixer
  loadDJTrack(0);

  // 3. Verb-ING Magnet Fusion Lab
  loadMagnetChallenge(0);

  // 4. Talent Show Audition
  loadTalentAudition(0);
});
