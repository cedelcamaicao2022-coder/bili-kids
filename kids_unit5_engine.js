/**
 * BILIKIDS KIDS CLUB - UNIT 5 ENGINE: FREE TIME
 * Age: 7-10 years (Cambridge Starters / Movers A1-A2)
 * Innovative Activities:
 * 1. 🎯 Hobby Arcade & Wh- Target (Laser de Preguntas Wh-)
 * 2. 🎚️ Frequency DJ Mixer (Equalizador de Adverbios de Frecuencia)
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

  playLaser() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(950, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
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
    osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  playBeatDrop() {
    this.init();
    // Low punchy bass drop for DJ mixer
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.35);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  playBuzzerGold() {
    this.init();
    // Grand Golden Buzzer fanfare
    const notes = [440, 554.37, 659.25, 880, 1108.73]; // A major fanfare
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
  } else if (voiceType === 'arcade') {
    utterance.pitch = 1.25;
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
// ACTIVIDAD 1: HOBBY ARCADE & WH- TARGET
// 10 retos de preguntas Wh- sobre actividades de tiempo libre
// ============================================================================
const arcadeWhData = [
  {
    id: 0,
    tag: "Arcade Stage 1 • Location",
    storySentence: "Leo plays basketball <span style='color:#38bdf8; text-decoration:underline;'>at the sports center</span> on Saturdays.",
    storyPlain: "Leo plays basketball at the sports center on Saturdays.",
    storyEs: "Leo juega baloncesto en el polideportivo los sábados.",
    missionClue: "Target info: 'at the sports center' (Lugar / Location)",
    targetWh: "Where?",
    ruleReason: "Where asks about places and locations! ➔ 'Where does Leo play basketball?'",
    options: [
      { text: "Where?", meaning: "Dónde", isCorrect: true, icon: "📍" },
      { text: "When?", meaning: "Cuándo", isCorrect: false, icon: "⏰" },
      { text: "Who?", meaning: "Quién", isCorrect: false, icon: "👤" },
      { text: "Why?", meaning: "Por qué", isCorrect: false, icon: "❓" }
    ]
  },
  {
    id: 1,
    tag: "Arcade Stage 2 • Time & Day",
    storySentence: "Maya practices the violin <span style='color:#38bdf8; text-decoration:underline;'>every Tuesday afternoon</span>.",
    storyPlain: "Maya practices the violin every Tuesday afternoon.",
    storyEs: "Maya practica el violín todos los martes por la tarde.",
    missionClue: "Target info: 'every Tuesday afternoon' (Tiempo / Time)",
    targetWh: "When?",
    ruleReason: "When asks about times, days and moments! ➔ 'When does Maya practice violin?'",
    options: [
      { text: "When?", meaning: "Cuándo", isCorrect: true, icon: "⏰" },
      { text: "Where?", meaning: "Dónde", isCorrect: false, icon: "📍" },
      { text: "What?", meaning: "Qué", isCorrect: false, icon: "🎯" },
      { text: "How?", meaning: "Cómo", isCorrect: false, icon: "💡" }
    ]
  },
  {
    id: 2,
    tag: "Arcade Stage 3 • Companions",
    storySentence: "Tom goes skateboarding <span style='color:#38bdf8; text-decoration:underline;'>with his best friend Jack</span>.",
    storyPlain: "Tom goes skateboarding with his best friend Jack.",
    storyEs: "Tom va a montar en patineta con su mejor amigo Jack.",
    missionClue: "Target info: 'with his best friend Jack' (Persona / People)",
    targetWh: "Who?",
    ruleReason: "Who asks about people and friends! ➔ 'Who does Tom skateboard with?'",
    options: [
      { text: "Who?", meaning: "Quién", isCorrect: true, icon: "👤" },
      { text: "Where?", meaning: "Dónde", isCorrect: false, icon: "📍" },
      { text: "When?", meaning: "Cuándo", isCorrect: false, icon: "⏰" },
      { text: "Why?", meaning: "Por qué", isCorrect: false, icon: "❓" }
    ]
  },
  {
    id: 3,
    tag: "Arcade Stage 4 • Activity & Object",
    storySentence: "In her free time, Sarah loves to paint <span style='color:#38bdf8; text-decoration:underline;'>colorful watercolor animals</span>.",
    storyPlain: "In her free time, Sarah loves to paint colorful watercolor animals.",
    storyEs: "En su tiempo libre, a Sarah le encanta pintar animales coloridos con acuarelas.",
    missionClue: "Target info: 'colorful watercolor animals' (Objeto / Actividad)",
    targetWh: "What?",
    ruleReason: "What asks about activities, things and objects! ➔ 'What does Sarah love to paint?'",
    options: [
      { text: "What?", meaning: "Qué", isCorrect: true, icon: "🎯" },
      { text: "Where?", meaning: "Dónde", isCorrect: false, icon: "📍" },
      { text: "Who?", meaning: "Quién", isCorrect: false, icon: "👤" },
      { text: "When?", meaning: "Cuándo", isCorrect: false, icon: "⏰" }
    ]
  },
  {
    id: 4,
    tag: "Arcade Stage 5 • Frequency",
    storySentence: "Ben plays online chess with his grandfather <span style='color:#38bdf8; text-decoration:underline;'>three times a week</span>.",
    storyPlain: "Ben plays online chess with his grandfather three times a week.",
    storyEs: "Ben juega ajedrez en línea con su abuelo tres veces por semana.",
    missionClue: "Target info: 'three times a week' (Frecuencia de repetición)",
    targetWh: "How often?",
    ruleReason: "How often asks about frequency! ➔ 'How often does Ben play chess?'",
    options: [
      { text: "How often?", meaning: "Con qué frecuencia", isCorrect: true, icon: "🔁" },
      { text: "Where?", meaning: "Dónde", isCorrect: false, icon: "📍" },
      { text: "Who?", meaning: "Quién", isCorrect: false, icon: "👤" },
      { text: "Why?", meaning: "Por qué", isCorrect: false, icon: "❓" }
    ]
  },
  {
    id: 5,
    tag: "Arcade Stage 6 • Reason & Purpose",
    storySentence: "Emma rides her bike to school <span style='color:#38bdf8; text-decoration:underline;'>because she loves fresh air</span>.",
    storyPlain: "Emma rides her bike to school because she loves fresh air.",
    storyEs: "Emma va en bicicleta a la escuela porque le encanta el aire fresco.",
    missionClue: "Target info: 'because she loves fresh air' (Razón / Motivo)",
    targetWh: "Why?",
    ruleReason: "Why asks for reasons and explanations with 'because'! ➔ 'Why does Emma ride her bike?'",
    options: [
      { text: "Why?", meaning: "Por qué", isCorrect: true, icon: "❓" },
      { text: "What?", meaning: "Qué", isCorrect: false, icon: "🎯" },
      { text: "When?", meaning: "Cuándo", isCorrect: false, icon: "⏰" },
      { text: "Where?", meaning: "Dónde", isCorrect: false, icon: "📍" }
    ]
  },
  {
    id: 6,
    tag: "Arcade Stage 7 • Transportation & Method",
    storySentence: "The family travels to the sunny beach <span style='color:#38bdf8; text-decoration:underline;'>by blue train</span>.",
    storyPlain: "The family travels to the sunny beach by blue train.",
    storyEs: "La familia viaja a la playa soleada en tren azul.",
    missionClue: "Target info: 'by blue train' (Medio de transporte / Método)",
    targetWh: "How?",
    ruleReason: "How asks about the way or method! ➔ 'How does the family travel to the beach?'",
    options: [
      { text: "How?", meaning: "Cómo", isCorrect: true, icon: "🚆" },
      { text: "Who?", meaning: "Quién", isCorrect: false, icon: "👤" },
      { text: "What?", meaning: "Qué", isCorrect: false, icon: "🎯" },
      { text: "Where?", meaning: "Dónde", isCorrect: false, icon: "📍" }
    ]
  },
  {
    id: 7,
    tag: "Arcade Stage 8 • Location",
    storySentence: "We build tall sandcastles <span style='color:#38bdf8; text-decoration:underline;'>near the sea waves</span>.",
    storyPlain: "We build tall sandcastles near the sea waves.",
    storyEs: "Construimos altos castillos de arena cerca de las olas del mar.",
    missionClue: "Target info: 'near the sea waves' (Lugar / Location)",
    targetWh: "Where?",
    ruleReason: "Where asks about place! ➔ 'Where do you build sandcastles?'",
    options: [
      { text: "Where?", meaning: "Dónde", isCorrect: true, icon: "📍" },
      { text: "When?", meaning: "Cuándo", isCorrect: false, icon: "⏰" },
      { text: "Who?", meaning: "Quién", isCorrect: false, icon: "👤" },
      { text: "How often?", meaning: "Con qué frecuencia", isCorrect: false, icon: "🔁" }
    ]
  },
  {
    id: 8,
    tag: "Arcade Stage 9 • Exact Time",
    storySentence: "The animated movie starts <span style='color:#38bdf8; text-decoration:underline;'>at five o'clock</span>.",
    storyPlain: "The animated movie starts at five o'clock.",
    storyEs: "La película animada empieza a las cinco en punto.",
    missionClue: "Target info: 'at five o'clock' (Hora exacta / Time)",
    targetWh: "What time?",
    ruleReason: "What time asks for specific clock hours! ➔ 'What time does the movie start?'",
    options: [
      { text: "What time?", meaning: "A qué hora", isCorrect: true, icon: "⏰" },
      { text: "Where?", meaning: "Dónde", isCorrect: false, icon: "📍" },
      { text: "Who?", meaning: "Quién", isCorrect: false, icon: "👤" },
      { text: "Why?", meaning: "Por qué", isCorrect: false, icon: "❓" }
    ]
  },
  {
    id: 9,
    tag: "Arcade Stage 10 • Hobby Choice",
    storySentence: "On rainy Sundays, my brother prefers to read <span style='color:#38bdf8; text-decoration:underline;'>comic books</span>.",
    storyPlain: "On rainy Sundays, my brother prefers to read comic books.",
    storyEs: "En los domingos lluviosos, mi hermano prefiere leer cómics.",
    missionClue: "Target info: 'comic books' (Cosa / Objeto)",
    targetWh: "What?",
    ruleReason: "What asks about things! ➔ 'What does your brother prefer to read?'",
    options: [
      { text: "What?", meaning: "Qué", isCorrect: true, icon: "🎯" },
      { text: "Where?", meaning: "Dónde", isCorrect: false, icon: "📍" },
      { text: "When?", meaning: "Cuándo", isCorrect: false, icon: "⏰" },
      { text: "Who?", meaning: "Quién", isCorrect: false, icon: "👤" }
    ]
  }
];

let currentArcadeIndex = 0;

function loadArcadeStage(index) {
  currentArcadeIndex = index;
  const stage = arcadeWhData[index];

  document.getElementById('arcadeStageBadge').textContent = `Nivel ${index + 1} de ${arcadeWhData.length}`;
  document.getElementById('arcadeStoryEn').innerHTML = stage.storySentence;
  document.getElementById('arcadeStoryEs').textContent = stage.storyEs;
  document.getElementById('arcadeTargetMission').innerHTML = `🎯 <strong>Misión Láser:</strong> ${stage.missionClue}`;

  // Speak sentence
  speakEnglish(stage.storyPlain, 'arcade');

  // Randomize laser button positions every time
  const shuffledOptions = [...stage.options].sort(() => Math.random() - 0.5);

  const laserGrid = document.getElementById('arcadeLaserGrid');
  laserGrid.innerHTML = shuffledOptions.map(opt => `
    <button class="arcade-laser-btn" onclick="shootLaserWh(this, ${opt.isCorrect}, '${opt.text}', '${stage.ruleReason.replace(/'/g, "\\'")}')">
      <span style="font-size:1.8rem;">${opt.icon}</span>
      <span style="font-family:var(--font-display); font-size:1.15rem; font-weight:700;">${opt.text}</span>
      <span style="font-size:0.75rem; color:#94a3b8;">${opt.meaning}</span>
    </button>
  `).join('');

  document.getElementById('arcadeFeedbackBox').innerHTML = '';
}

function listenArcadeStory() {
  sfx.playLaser();
  const stage = arcadeWhData[currentArcadeIndex];
  speakEnglish(stage.storyPlain, 'arcade');
}

function shootLaserWh(btnEl, isCorrect, chosenText, ruleReason) {
  const feedback = document.getElementById('arcadeFeedbackBox');

  if (isCorrect) {
    sfx.playLaser();
    sfx.playSuccess();
    btnEl.classList.add('correct');

    feedback.innerHTML = `
      <div style="background:rgba(16, 185, 129, 0.2); border:1px solid #10b981; border-radius:14px; padding:12px 18px; color:#34d399; margin-top:16px;">
        <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">🎯 ¡DISPARO DIRECTO AL BLANCO! (+20 pts)</div>
        <div style="color:#ffffff;">Disparaste: <strong>${chosenText}</strong></div>
        <div style="font-size:0.85rem; color:#a7f3d0; margin-top:6px;">💡 ${ruleReason}</div>
      </div>
    `;
    AppState.addStars(20);
    speakEnglish(`Correct! ${chosenText}`, 'kid');

    setTimeout(() => {
      if (currentArcadeIndex < arcadeWhData.length - 1) {
        loadArcadeStage(currentArcadeIndex + 1);
      }
    }, 1800);

  } else {
    sfx.playLaser();
    sfx.playError();
    btnEl.classList.add('wrong');
    setTimeout(() => btnEl.classList.remove('wrong'), 450);

    feedback.innerHTML = `
      <div style="background:rgba(239, 68, 68, 0.2); border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#f87171; font-weight:700; margin-top:16px;">
        ⚡ ¡Láser desviado! Revisa si la pista pide lugar (Where), tiempo (When), persona (Who) o frecuencia (How often).
      </div>
    `;
  }
}

function nextArcadeStage() {
  sfx.playPop();
  currentArcadeIndex = (currentArcadeIndex + 1) % arcadeWhData.length;
  loadArcadeStage(currentArcadeIndex);
}

// ============================================================================
// ACTIVIDAD 2: FREQUENCY DJ MIXER
// 10 pistas musicales graduando adverbios de frecuencia (Never a Always)
// ============================================================================
const djTracksData = [
  {
    id: 0,
    title: "DJ Track 1 • The Daily Gamer 🎮",
    routineEn: "Max plays video games on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.",
    routineEs: "Max juega videojuegos los 7 días de la semana (Lunes a Domingo).",
    activeDays: [1, 2, 3, 4, 5, 6, 7], // 7/7 days
    correctAdverb: "always",
    percentage: "100%",
    explanation: "7 de 7 días ➔ 100% de frecuencia es ALWAYS (siempre)!"
  },
  {
    id: 1,
    title: "DJ Track 2 • Zero Skateboarding 🛹",
    routineEn: "Emma doesn't have a skateboard and she has never tried it in her life (0 days).",
    routineEs: "Emma no tiene patineta y jamás la ha probado en su vida (0 días).",
    activeDays: [], // 0 days
    correctAdverb: "never",
    percentage: "0%",
    explanation: "0 veces ➔ 0% de frecuencia es NEVER (nunca)!"
  },
  {
    id: 2,
    title: "DJ Track 3 • Casual Acoustic Guitar 🎸",
    routineEn: "Lucas plays the acoustic guitar only on Saturday afternoons (1 or 2 times a month).",
    routineEs: "Lucas toca la guitarra acústica solo a veces (1 o 2 veces al mes).",
    activeDays: [6], // 1 day
    correctAdverb: "sometimes",
    percentage: "25%",
    explanation: "Ocasionalmente ➔ Alrededor del 25% es SOMETIMES (a veces)!"
  },
  {
    id: 3,
    title: "DJ Track 4 • Regular Swimmer 🏊‍♂️",
    routineEn: "Chloe swims at the heated pool on Monday, Wednesday, Friday, and Saturday (4 days a week).",
    routineEs: "Chloe nada en la piscina 4 días por semana con regularidad.",
    activeDays: [1, 3, 5, 6], // 4 days
    correctAdverb: "often",
    percentage: "50%",
    explanation: "Con bastante regularidad (4 días) ➔ 50% es OFTEN (a menudo)!"
  },
  {
    id: 4,
    title: "DJ Track 5 • School Bus Traveler 🚌",
    routineEn: "David rides the yellow bus from Monday through Friday (almost every day).",
    routineEs: "David toma el autobús escolar casi todos los días (5 días por semana).",
    activeDays: [1, 2, 3, 4, 5], // 5 days
    correctAdverb: "usually",
    percentage: "75%",
    explanation: "Casi todos los días (5 días) ➔ 75% es USUALLY (usualmente)!"
  },
  {
    id: 5,
    title: "DJ Track 6 • Toothbrush Master 🪥",
    routineEn: "Sofia brushes her teeth every morning and every evening without exception (every single day).",
    routineEs: "Sofía se cepilla los dientes todos los días sin falta.",
    activeDays: [1, 2, 3, 4, 5, 6, 7], // 7/7 days
    correctAdverb: "always",
    percentage: "100%",
    explanation: "Todos los días sin excepción ➔ 100% es ALWAYS!"
  },
  {
    id: 6,
    title: "DJ Track 7 • No Coffee Kid ☕",
    routineEn: "Kids don't drink black coffee. Liam drinks warm milk or juice (0 times coffee).",
    routineEs: "Los niños no toman café negro. Liam toma leche o jugo (0 veces café).",
    activeDays: [], // 0 days
    correctAdverb: "never",
    percentage: "0%",
    explanation: "Cero veces ➔ 0% es NEVER!"
  },
  {
    id: 7,
    title: "DJ Track 8 • Weekend Cyclist 🚲",
    routineEn: "On sunny Saturdays and Sundays, Sarah and her dad ride bicycles in the park.",
    routineEs: "Los fines de semana soleados, Sarah y su papá montan bicicleta.",
    activeDays: [6, 7], // 2 days
    correctAdverb: "sometimes",
    percentage: "25%",
    explanation: "Solo los fines de semana ➔ 25% es SOMETIMES!"
  },
  {
    id: 8,
    title: "DJ Track 9 • Comic Book Reader 📚",
    routineEn: "Leo reads superhero comic books on Monday, Tuesday, Thursday, and Sunday evening.",
    routineEs: "Leo lee cómics de superhéroes 4 días a la semana frecuentemente.",
    activeDays: [1, 2, 4, 7], // 4 days
    correctAdverb: "often",
    percentage: "50%",
    explanation: "Frecuentemente ➔ 50% es OFTEN!"
  },
  {
    id: 9,
    title: "DJ Track 10 • Homework Champion 📝",
    routineEn: "Oliver finishes his homework from Monday to Friday right after arriving home.",
    routineEs: "Oliver hace sus tareas de lunes a viernes en cuanto llega a casa.",
    activeDays: [1, 2, 3, 4, 5], // 5 days
    correctAdverb: "usually",
    percentage: "75%",
    explanation: "Casi toda la semana ➔ 75% es USUALLY!"
  }
];

const djAdverbsList = [
  { adverb: "never", display: "Never", icon: "❌", level: "0%", es: "Nunca" },
  { adverb: "sometimes", display: "Sometimes", icon: "🟨", level: "25%", es: "A veces" },
  { adverb: "often", display: "Often", icon: "🟩", level: "50%", es: "A menudo" },
  { adverb: "usually", display: "Usually", icon: "🟦", level: "75%", es: "Usualmente" },
  { adverb: "always", display: "Always", icon: "🟪", level: "100%", es: "Siempre" }
];

let currentDJIndex = 0;

function loadDJTrack(index) {
  currentDJIndex = index;
  const track = djTracksData[index];

  document.getElementById('djTrackBadge').textContent = `Pista ${index + 1} de ${djTracksData.length}`;
  document.getElementById('djTrackTitle').textContent = track.title;
  document.getElementById('djRoutineEn').textContent = `"${track.routineEn}"`;
  document.getElementById('djRoutineEs').textContent = track.routineEs;

  // Render weekly active calendar chips
  const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const calBar = document.getElementById('djCalendarFrequencyBar');
  calBar.innerHTML = dayNames.map((d, i) => {
    const isActive = track.activeDays.includes(i + 1);
    return `<span class="dj-day-chip ${isActive ? 'active-day' : ''}">${d} ${isActive ? '✅' : '▫️'}</span>`;
  }).join('');

  speakEnglish(track.routineEn, 'narrator');

  // Randomize fader order or keep graduated order
  // For DJ faders, showing the scale from Never to Always is educationally superior,
  // but let's ensure the user must think about the percentage!
  const fadersContainer = document.getElementById('djFadersTrack');
  fadersContainer.innerHTML = djAdverbsList.map(item => `
    <button class="dj-fader-btn" onclick="checkDJFrequency(this, '${item.adverb}', '${track.correctAdverb}', '${track.explanation.replace(/'/g, "\\'")}')">
      <span class="dj-fader-level">${item.level}</span>
      <span style="font-size:1.6rem;">${item.icon}</span>
      <span style="font-family:var(--font-display); font-size:1.1rem; font-weight:700;">${item.display}</span>
      <span style="font-size:0.75rem; color:#64748b;">${item.es}</span>
    </button>
  `).join('');

  document.getElementById('djFeedbackBox').innerHTML = '';
}

function listenDJRoutine() {
  sfx.playBeatDrop();
  const track = djTracksData[currentDJIndex];
  speakEnglish(track.routineEn, 'narrator');
}

function checkDJFrequency(btnEl, chosenAdverb, correctAdverb, explanation) {
  const feedback = document.getElementById('djFeedbackBox');

  if (chosenAdverb === correctAdverb) {
    sfx.playBeatDrop();
    sfx.playSuccess();
    btnEl.classList.add('correct');

    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:14px; padding:12px 18px; color:#065f46; margin-top:16px;">
        <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">🎧 ¡BEAT PERFECTO! Frecuencia calzada (+20 pts)</div>
        <div style="font-size:0.9rem;">💡 ${explanation}</div>
      </div>
    `;
    AppState.addStars(20);
    speakEnglish(`Correct! ${chosenAdverb}`, 'kid');

    setTimeout(() => {
      if (currentDJIndex < djTracksData.length - 1) {
        loadDJTrack(currentDJIndex + 1);
      }
    }, 1800);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong');
    setTimeout(() => btnEl.classList.remove('wrong'), 450);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:16px;">
        ⚠️ Ese nivel no coincide con los días marcados. Mira cuántos días de la semana están iluminados en verde.
      </div>
    `;
  }
}

function nextDJTrack() {
  sfx.playPop();
  currentDJIndex = (currentDJIndex + 1) % djTracksData.length;
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

  // Speak judge question
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
    sfx.playBuzzerGold();
    sfx.playApplause();
    feedback.innerHTML = `
      <div style="font-size:1.15rem; font-weight:700; color:#fbbf24;">🔔 ¡GOLDEN BUZZER ACTIVADO!</div>
      <span style="display:inline-block; margin-top:8px; background:rgba(245, 158, 11, 0.25); color:#fbbf24; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #f59e0b;">
        🌟 ¡Los 3 jueces se pusieron de pie! +25 pts
      </span>
    `;
    AppState.addStars(25);
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
      sfx.playBuzzerGold();
      sfx.playApplause();
      feedback.innerHTML = `
        <div style="font-size:1.05rem; font-weight:600; color:#ffffff;">Dijiste: "<strong>${transcript}</strong>"</div>
        <span style="display:inline-block; margin-top:8px; background:rgba(245, 158, 11, 0.25); color:#fbbf24; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #f59e0b;">
          🔔 ¡GOLDEN BUZZER! Los tres jueces votaron SÍ (+25 pts)
        </span>
      `;
      AppState.addStars(25);
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

  // 1. Hobby Arcade
  loadArcadeStage(0);

  // 2. Frequency DJ Mixer
  loadDJTrack(0);

  // 3. Verb-ING Magnet Fusion Lab
  loadMagnetChallenge(0);

  // 4. Talent Show Audition
  loadTalentAudition(0);
});
