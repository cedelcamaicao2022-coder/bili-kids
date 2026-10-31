/**
 * BILIKIDS KIDS CLUB - UNIT 4 ENGINE: EVERYDAY LIFE
 * Age: 7-10 years (Cambridge Starters / Movers A1-A2)
 * Interactive Activities:
 * 1. Routine Clock & 24H Timeline (10 daily routine slots)
 * 2. Weekly Mission Planner (7-day calendar habits)
 * 3. The Verb -S Balance Scale (20 grammar challenges)
 * 4. My Morning Vlog Studio (8 streamer routine recordings)
 */

// ============================================================================
// APP STATE & PERSISTENCE
// ============================================================================
const AppState = {
  stars: parseInt(localStorage.getItem('bilikids_stars') || '140', 10),

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
    osc.frequency.setValueAtTime(480, this.ctx.currentTime);
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

  playChime() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1320, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  playBalanceTilt() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(640, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }

  playApplause() {
    this.init();
    for (let i = 0; i < 12; i++) {
      const delay = Math.random() * 0.45;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'pink' || 'sine';
      osc.frequency.setValueAtTime(350 + Math.random() * 500, this.ctx.currentTime + delay);
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

  if (voiceType === 'streamer') {
    utterance.pitch = 1.15;
    utterance.rate = 1.0;
  } else if (voiceType === 'narrator') {
    utterance.pitch = 1.0;
    utterance.rate = 0.92;
  } else {
    utterance.pitch = 1.25;
    utterance.rate = 0.95;
  }

  const voices = window.speechSynthesis.getVoices();
  const enVoices = voices.filter(v => v.lang.startsWith('en'));
  if (enVoices.length > 0) {
    const preferred = enVoices.find(v =>
      v.name.includes('Samantha') ||
      v.name.includes('Karen') ||
      v.name.includes('Victoria') ||
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
// ACTIVIDAD 1: RELOJ & TIMELINE 24H (ROUTINE CLOCK)
// 10 Timeline Slots con opciones 100% aleatorizadas en cada carga
// ============================================================================
const routineClockData = [
  {
    id: 0,
    time: "07:00 AM",
    timeDisplay: "7:00 AM",
    dialIcon: "⏰",
    tag: "Morning Awakening",
    sentenceEn: "The alarm clock rings! It is 7:00 AM.",
    sentenceEs: "¡Suena el despertador! Son las 7:00 AM.",
    targetPhrase: "I wake up at seven o'clock.",
    correctIndex: 0,
    choices: [
      { text: "I wake up and get out of bed", icon: "🌅", isCorrect: true, hint: "Despertarse y levantarse" },
      { text: "I go to sleep and close my eyes", icon: "😴", isCorrect: false, hint: "Eso es en la noche" },
      { text: "I eat dinner with my family", icon: "🍲", isCorrect: false, hint: "Eso es a las 8:00 PM" }
    ]
  },
  {
    id: 1,
    time: "07:30 AM",
    timeDisplay: "7:30 AM",
    dialIcon: "🥛",
    tag: "Breakfast Time",
    sentenceEn: "Mom is in the kitchen pouring orange juice.",
    sentenceEs: "Mamá está en la cocina sirviendo jugo de naranja.",
    targetPhrase: "I eat breakfast with cereal and fruit.",
    correctIndex: 1,
    choices: [
      { text: "I take off my shoes for bed", icon: "🧦", isCorrect: false, hint: "Eso es para dormir" },
      { text: "I eat delicious cereal for breakfast", icon: "🥣", isCorrect: true, hint: "Desayunar cereal" },
      { text: "I watch the stars in the dark sky", icon: "✨", isCorrect: false, hint: "De noche" }
    ]
  },
  {
    id: 2,
    time: "08:00 AM",
    timeDisplay: "8:00 AM",
    dialIcon: "🚌",
    tag: "School Journey",
    sentenceEn: "The yellow school bus stops in front of my house.",
    sentenceEs: "El autobús amarillo para frente a mi casa.",
    targetPhrase: "I catch the bus to go to school.",
    correctIndex: 0,
    choices: [
      { text: "I go to school by bus with my friends", icon: "🎒", isCorrect: true, hint: "Ir a la escuela" },
      { text: "I take a warm shower in the bathroom", icon: "🚿", isCorrect: false, hint: "Bañarse" },
      { text: "I do my math homework at my desk", icon: "📐", isCorrect: false, hint: "Hacer tareas" }
    ]
  },
  {
    id: 3,
    time: "12:30 PM",
    timeDisplay: "12:30 PM",
    dialIcon: "🥪",
    tag: "Lunch Break",
    sentenceEn: "The school bell rings for the midday break!",
    sentenceEs: "¡Suena la campana para el descanso de mediodía!",
    targetPhrase: "I eat lunch in the cafeteria.",
    correctIndex: 2,
    choices: [
      { text: "I brush my teeth before sleeping", icon: "🪥", isCorrect: false, hint: "Antes de dormir" },
      { text: "I put on my cozy pajamas", icon: "👕", isCorrect: false, hint: "Ponerse la pijama para dormir" },
      { text: "I eat lunch and drink fresh water", icon: "🥪", isCorrect: true, hint: "Almorzar con amigos" }
    ]
  },
  {
    id: 4,
    time: "03:30 PM",
    timeDisplay: "3:30 PM",
    dialIcon: "🏡",
    tag: "School Ends",
    sentenceEn: "Classes are finished for today! Goodbye teacher!",
    sentenceEs: "¡Las clases terminaron por hoy! ¡Adiós profe!",
    targetPhrase: "I come back home in the afternoon.",
    correctIndex: 1,
    choices: [
      { text: "I eat breakfast with warm pancakes", icon: "🥞", isCorrect: false, hint: "Desayuno matutino" },
      { text: "I arrive home and take off my backpack", icon: "🚪", isCorrect: true, hint: "Llegar a casa" },
      { text: "I dream about flying dragons in bed", icon: "🐉", isCorrect: false, hint: "Soñar de noche" }
    ]
  },
  {
    id: 5,
    time: "05:00 PM",
    timeDisplay: "5:00 PM",
    dialIcon: "📚",
    tag: "Homework & Study",
    sentenceEn: "I sit at my desk with my notebook and pencil.",
    sentenceEs: "Me siento en mi escritorio con mi libreta y lápiz.",
    targetPhrase: "I do my homework and read stories.",
    correctIndex: 0,
    choices: [
      { text: "I do my homework carefully", icon: "✏️", isCorrect: true, hint: "Hacer las tareas" },
      { text: "I wake up and greet the sunshine", icon: "🌞", isCorrect: false, hint: "Despertarse" },
      { text: "I eat breakfast before school", icon: "🍳", isCorrect: false, hint: "Desayunar" }
    ]
  },
  {
    id: 6,
    time: "06:30 PM",
    timeDisplay: "6:30 PM",
    dialIcon: "⚽",
    tag: "Play & Outdoor Fun",
    sentenceEn: "The weather is lovely outside in the park.",
    sentenceEs: "El clima está encantador afuera en el parque.",
    targetPhrase: "I play soccer and ride my bicycle.",
    correctIndex: 2,
    choices: [
      { text: "I sleep eight hours in darkness", icon: "🌙", isCorrect: false, hint: "Dormir" },
      { text: "I catch the morning school bus", icon: "🚌", isCorrect: false, hint: "Autobús de la mañana" },
      { text: "I play football with my classmates", icon: "⚽", isCorrect: true, hint: "Jugar fútbol" }
    ]
  },
  {
    id: 7,
    time: "08:00 PM",
    timeDisplay: "8:00 PM",
    dialIcon: "🍝",
    tag: "Family Dinner",
    sentenceEn: "The whole family sits together around the table.",
    sentenceEs: "Toda la familia se reúne alrededor de la mesa.",
    targetPhrase: "We have dinner and talk about our day.",
    correctIndex: 1,
    choices: [
      { text: "I wake up and stretch my arms", icon: "🙆", isCorrect: false, hint: "Despertarse" },
      { text: "We have a warm dinner together", icon: "🍲", isCorrect: true, hint: "Cenar en familia" },
      { text: "I put on my school uniform", icon: "👔", isCorrect: false, hint: "Vestirse para la escuela" }
    ]
  },
  {
    id: 8,
    time: "08:45 PM",
    timeDisplay: "8:45 PM",
    dialIcon: "🪥",
    tag: "Evening Hygiene",
    sentenceEn: "It is bedtime soon. I go to the bathroom to get ready.",
    sentenceEs: "Pronto es hora de dormir. Voy al baño a prepararme.",
    targetPhrase: "I brush my teeth and wash my face.",
    correctIndex: 0,
    choices: [
      { text: "I brush my teeth for two minutes", icon: "🪥", isCorrect: true, hint: "Cepillarse los dientes" },
      { text: "I play soccer in the stadium", icon: "🏟️", isCorrect: false, hint: "Jugar deporte" },
      { text: "I eat lunch in the cafeteria", icon: "🥪", isCorrect: false, hint: "Almorzar" }
    ]
  },
  {
    id: 9,
    time: "09:30 PM",
    timeDisplay: "9:30 PM",
    dialIcon: "🛏️",
    tag: "Bedtime & Sweet Dreams",
    sentenceEn: "The stars are shining and the house is quiet.",
    sentenceEs: "Las estrellas brillan y la casa está tranquila.",
    targetPhrase: "I go to bed and sleep peacefully.",
    correctIndex: 2,
    choices: [
      { text: "I catch the yellow school bus", icon: "🚌", isCorrect: false, hint: "Autobús matutino" },
      { text: "I do my math homework at my desk", icon: "📖", isCorrect: false, hint: "Hacer tareas" },
      { text: "I go to bed and turn off the light", icon: "🛌", isCorrect: true, hint: "Ir a dormir" }
    ]
  }
];

let currentClockSlot = 0;
let clockAnswered = new Array(routineClockData.length).fill(false);

function renderClockTimelineTrack() {
  const track = document.getElementById('clockTimelineTrack');
  if (!track) return;

  track.innerHTML = routineClockData.map((slot, idx) => `
    <button class="timeline-slot-btn ${idx === currentClockSlot ? 'active' : ''} ${clockAnswered[idx] ? 'slot-completed' : ''}" 
            onclick="selectClockSlot(${idx})">
      <span>${slot.dialIcon}</span>
      <span>${slot.timeDisplay}</span>
    </button>
  `).join('');
}

function selectClockSlot(index) {
  sfx.playPop();
  currentClockSlot = index;
  renderClockTimelineTrack();
  loadClockSlotDetails(index);
}

function loadClockSlotDetails(index) {
  const data = routineClockData[index];

  document.getElementById('dialTimeDisplay').textContent = data.timeDisplay;
  document.getElementById('dialIconDisplay').textContent = data.dialIcon;
  document.getElementById('clockTag').textContent = `Slot ${index + 1}/10 • ${data.tag}`;
  document.getElementById('clockPromptEn').textContent = `"${data.sentenceEn}"`;
  document.getElementById('clockPromptEs').textContent = data.sentenceEs;

  // Speak prompt
  speakEnglish(data.sentenceEn, 'narrator');

  // Randomize choices order every time so correct answer is NOT predictable
  const shuffledChoices = [...data.choices].sort(() => Math.random() - 0.5);

  const optionsContainer = document.getElementById('clockOptionsGrid');
  optionsContainer.innerHTML = shuffledChoices.map(c => `
    <button class="routine-choice-btn" onclick="checkClockChoice(this, ${c.isCorrect}, '${c.text.replace(/'/g, "\\'")}', ${index})">
      <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:1.02rem; color:#0f172a;">
        <span style="font-size:1.4rem;">${c.icon}</span>
        <span>${c.text}</span>
      </div>
      <div style="font-size:0.78rem; color:#64748b; margin-top:4px;">${c.hint}</div>
    </button>
  `).join('');

  document.getElementById('clockFeedbackBox').innerHTML = '';
}

function listenClockPrompt() {
  sfx.playPop();
  const data = routineClockData[currentClockSlot];
  speakEnglish(data.sentenceEn, 'narrator');
}

function checkClockChoice(btnEl, isCorrect, text, slotIndex) {
  const feedback = document.getElementById('clockFeedbackBox');

  if (isCorrect) {
    sfx.playSuccess();
    btnEl.classList.add('correct');
    clockAnswered[slotIndex] = true;
    renderClockTimelineTrack();

    feedback.innerHTML = `
      <div style="display:inline-flex; align-items:center; gap:8px; background:#ecfdf5; border:1px solid #10b981; padding:8px 18px; border-radius:999px; color:#065f46; font-weight:700; animation:fadeIn 0.25s;">
        <span>🎉 Excellent!</span>
        <span>"${text}"</span>
        <span>(+15 pts)</span>
      </div>
    `;
    AppState.addStars(15);
    speakEnglish(text, 'kid');

    // Auto next after 1.5 seconds if there are remaining slots
    setTimeout(() => {
      if (currentClockSlot < routineClockData.length - 1) {
        selectClockSlot(currentClockSlot + 1);
      }
    }, 1500);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong');
    setTimeout(() => btnEl.classList.remove('wrong'), 500);

    feedback.innerHTML = `
      <div style="display:inline-flex; align-items:center; gap:8px; background:#fef2f2; border:1px solid #ef4444; padding:8px 18px; border-radius:999px; color:#b91c1c; font-weight:700; animation:fadeIn 0.25s;">
        <span>❌ Try another routine for this hour!</span>
      </div>
    `;
  }
}

function nextClockSlot() {
  sfx.playPop();
  currentClockSlot = (currentClockSlot + 1) % routineClockData.length;
  selectClockSlot(currentClockSlot);
}

// ============================================================================
// ACTIVIDAD 2: WEEKLY MISSION PLANNER (CALENDARIO DE 7 DÍAS)
// Draggable / Click-to-place habit stickers across Monday - Sunday
// ============================================================================
const weeklyDaysData = [
  { id: 'mon', name: 'Monday', es: 'Lunes', icon: '🚀' },
  { id: 'tue', name: 'Tuesday', es: 'Martes', icon: '🎨' },
  { id: 'wed', name: 'Wednesday', es: 'Miércoles', icon: '🏊‍♂️' },
  { id: 'thu', name: 'Thursday', es: 'Jueves', icon: '🎸' },
  { id: 'fri', name: 'Friday', es: 'Viernes', icon: '🍿' },
  { id: 'sat', name: 'Saturday', es: 'Sábado', icon: '🏕️' },
  { id: 'sun', name: 'Sunday', es: 'Domingo', icon: '🚲' }
];

const weeklyMissionsData = [
  {
    id: 0,
    targetDayId: 'wed',
    targetDayName: 'Wednesday',
    title: "Mission 1 • After-School Sport 🏅",
    clueEn: "On Wednesdays, Leo always goes to swimming practice after school at 4 PM.",
    clueEs: "Los miércoles, Leo siempre va a práctica de natación después de clases a las 4 PM.",
    targetHabit: "Swimming Practice",
    habitIcon: "🏊‍♂️"
  },
  {
    id: 1,
    targetDayId: 'fri',
    targetDayName: 'Friday',
    title: "Mission 2 • Friday Family Tradition 🎬",
    clueEn: "Every Friday evening, our whole family watches animated movies and eats sweet popcorn.",
    clueEs: "Todos los viernes por la noche, nuestra familia ve películas animadas y come palomitas.",
    targetHabit: "Movie & Popcorn Night",
    habitIcon: "🍿"
  },
  {
    id: 2,
    targetDayId: 'sat',
    targetDayName: 'Saturday',
    title: "Mission 3 • Weekend Nature Trip 🌲",
    clueEn: "On Saturdays, Sarah and her cousins camp in the countryside and roast marshmallows.",
    clueEs: "Los sábados, Sarah y sus primos acampan en el campo y asan malvaviscos.",
    targetHabit: "Camp in Countryside",
    habitIcon: "🏕️"
  },
  {
    id: 3,
    targetDayId: 'tue',
    targetDayName: 'Tuesday',
    title: "Mission 4 • Creative Art Workshop 🖌️",
    clueEn: "On Tuesdays, Maya has art workshop and paints colorful birds with watercolors.",
    clueEs: "Los martes, Maya tiene taller de arte y pinta aves coloridas con acuarelas.",
    targetHabit: "Art Workshop Class",
    habitIcon: "🎨"
  },
  {
    id: 4,
    targetDayId: 'sun',
    targetDayName: 'Sunday',
    title: "Mission 5 • Sunny Outdoor Exercise 🌳",
    clueEn: "Every Sunday morning, we ride bicycles around the green park with our dog.",
    clueEs: "Cada domingo por la mañana, paseamos en bicicleta por el parque verde con nuestro perro.",
    targetHabit: "Bicycle Park Ride",
    habitIcon: "🚲"
  },
  {
    id: 5,
    targetDayId: 'mon',
    targetDayName: 'Monday',
    title: "Mission 6 • New School Week Start 🏫",
    clueEn: "On Mondays, we start the school week with science experiments and magnifying glasses.",
    clueEs: "Los lunes, empezamos la semana escolar con experimentos de ciencia y lupas.",
    targetHabit: "Science Experiments",
    habitIcon: "🔬"
  }
];

let currentPlannerMission = 0;
let selectedHabitSticker = null;
let plannerPlacedDays = {}; // dayId -> habitName

function renderPlannerBoard() {
  const board = document.getElementById('daysBoardGrid');
  if (!board) return;

  const mission = weeklyMissionsData[currentPlannerMission];

  board.innerHTML = weeklyDaysData.map(day => {
    const placed = plannerPlacedDays[day.id];
    const isTarget = day.id === mission.targetDayId;

    return `
      <div class="day-column-card ${placed ? 'filled' : ''} ${isTarget ? 'target-day' : ''}" 
           onclick="handleDayColumnClick('${day.id}')">
        <div class="day-name-tag">${day.name}</div>
        <div style="font-size:0.75rem; color:#64748b; margin-bottom:6px;">${day.es}</div>
        <div class="day-activity-slot">
          ${placed 
            ? `<div style="font-size:1.8rem; margin-bottom:4px;">${placed.icon}</div>
               <div style="font-size:0.8rem; font-weight:700; color:#065f46;">${placed.habit}</div>`
            : `<div style="font-size:1.5rem; opacity:0.35;">${day.icon}</div>
               <div style="font-size:0.72rem; color:#94a3b8; margin-top:4px;">Vacío</div>`
          }
        </div>
      </div>
    `;
  }).join('');
}

function renderHabitsPool() {
  const pool = document.getElementById('habitsPoolBar');
  if (!pool) return;

  // Pool contains the 6 mission habits shuffled
  const habitsList = weeklyMissionsData.map(m => ({
    dayId: m.targetDayId,
    habit: m.targetHabit,
    icon: m.habitIcon
  }));

  // Shuffle habit stickers
  const shuffled = [...habitsList].sort(() => 0.5 - Math.random());

  pool.innerHTML = shuffled.map(h => {
    const isPlaced = Object.values(plannerPlacedDays).some(p => p.habit === h.habit);
    return `
      <button class="habit-sticker ${isPlaced ? 'placed' : ''} ${selectedHabitSticker && selectedHabitSticker.habit === h.habit ? 'selected' : ''}" 
              onclick="selectHabitSticker('${h.dayId}', '${h.habit.replace(/'/g, "\\'")}', '${h.icon}')">
        <span>${h.icon}</span>
        <span>${h.habit}</span>
      </button>
    `;
  }).join('');
}

function loadPlannerMission(index) {
  currentPlannerMission = index;
  const mission = weeklyMissionsData[index];

  document.getElementById('plannerMissionBadge').textContent = `Misión ${index + 1} de ${weeklyMissionsData.length}`;
  document.getElementById('plannerMissionTitle').textContent = mission.title;
  document.getElementById('plannerClueEn').textContent = `"${mission.clueEn}"`;
  document.getElementById('plannerClueEs').textContent = mission.clueEs;
  document.getElementById('plannerFeedbackBox').innerHTML = '';

  selectedHabitSticker = null;
  renderPlannerBoard();
  renderHabitsPool();

  speakEnglish(mission.clueEn, 'narrator');
}

function listenPlannerClue() {
  sfx.playPop();
  const m = weeklyMissionsData[currentPlannerMission];
  speakEnglish(m.clueEn, 'narrator');
}

function selectHabitSticker(targetDayId, habit, icon) {
  sfx.playPop();
  selectedHabitSticker = { targetDayId, habit, icon };

  // Highlight selected button
  document.querySelectorAll('.habit-sticker').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.textContent.includes(habit)) {
      btn.classList.add('selected');
    }
  });

  const feedback = document.getElementById('plannerFeedbackBox');
  feedback.innerHTML = `
    <div style="font-size:0.9rem; color:#92400e; font-weight:600;">
      Has seleccionado <strong>${icon} ${habit}</strong>. Ahora toca el día correcto de la semana arriba.
    </div>
  `;
}

function handleDayColumnClick(dayId) {
  if (!selectedHabitSticker) {
    sfx.playError();
    const feedback = document.getElementById('plannerFeedbackBox');
    feedback.innerHTML = `
      <div style="font-size:0.9rem; color:#b91c1c; font-weight:700;">
        👇 Primero selecciona un sticker de hábito en la barra inferior.
      </div>
    `;
    return;
  }

  const mission = weeklyMissionsData[currentPlannerMission];
  const feedback = document.getElementById('plannerFeedbackBox');

  if (dayId === mission.targetDayId && selectedHabitSticker.targetDayId === dayId) {
    // CORRECT!
    sfx.playSuccess();
    plannerPlacedDays[dayId] = {
      habit: selectedHabitSticker.habit,
      icon: selectedHabitSticker.icon
    };

    feedback.innerHTML = `
      <div style="display:inline-flex; align-items:center; gap:8px; background:#ecfdf5; border:1px solid #10b981; padding:8px 18px; border-radius:999px; color:#065f46; font-weight:700;">
        <span>🎯 ¡Perfecto! Asignaste ${selectedHabitSticker.icon} a ${mission.targetDayName}</span>
        <span>(+20 pts)</span>
      </div>
    `;
    AppState.addStars(20);
    speakEnglish(`On ${mission.targetDayName}, ${selectedHabitSticker.habit}`, 'kid');

    selectedHabitSticker = null;
    renderPlannerBoard();
    renderHabitsPool();

    setTimeout(() => {
      if (currentPlannerMission < weeklyMissionsData.length - 1) {
        loadPlannerMission(currentPlannerMission + 1);
      }
    }, 1800);

  } else {
    sfx.playError();
    feedback.innerHTML = `
      <div style="display:inline-flex; align-items:center; gap:8px; background:#fef2f2; border:1px solid #ef4444; padding:8px 18px; border-radius:999px; color:#b91c1c; font-weight:700;">
        <span>❌ No coincide con la pista de la misión. ¡Revisa qué día dice la oración!</span>
      </div>
    `;
  }
}

function nextPlannerMission() {
  sfx.playPop();
  currentPlannerMission = (currentPlannerMission + 1) % weeklyMissionsData.length;
  loadPlannerMission(currentPlannerMission);
}

// ============================================================================
// ACTIVIDAD 3: LA BALANZA DE VERBOS (-S BALANCE SCALE)
// 20 Retos gramaticales de Presente Simple (Singular vs Plural / Base vs -s/-es)
// ============================================================================
const verbScaleChallenges = [
  {
    id: 0,
    subject: "He",
    subjectType: "singular",
    subjectIcon: "👦",
    sentenceTemplate: "He ___ soccer in the afternoon.",
    sentenceComplete: "He plays soccer in the afternoon.",
    verbBase: "play",
    verbSingular: "plays",
    correctAnswer: "plays",
    ruleNote: "Con He / She / It usamos terminación con -S ➔ He plays!"
  },
  {
    id: 1,
    subject: "They",
    subjectType: "plural",
    subjectIcon: "👫",
    sentenceTemplate: "They ___ television after dinner.",
    sentenceComplete: "They watch television after dinner.",
    verbBase: "watch",
    verbSingular: "watches",
    correctAnswer: "watch",
    ruleNote: "Con They / We / I usamos el verbo base sin -s ➔ They watch!"
  },
  {
    id: 2,
    subject: "She",
    subjectType: "singular",
    subjectIcon: "👧",
    sentenceTemplate: "She ___ to school at 8:00 AM.",
    sentenceComplete: "She goes to school at 8:00 AM.",
    verbBase: "go",
    verbSingular: "goes",
    correctAnswer: "goes",
    ruleNote: "Go termina en vocal 'o', agregamos -ES ➔ She goes!"
  },
  {
    id: 3,
    subject: "My brother",
    subjectType: "singular",
    subjectIcon: "🧒",
    sentenceTemplate: "My brother ___ English every Monday.",
    sentenceComplete: "My brother studies English every Monday.",
    verbBase: "study",
    verbSingular: "studies",
    correctAnswer: "studies",
    ruleNote: "Study cambia consonante + y por -IES ➔ My brother studies!"
  },
  {
    id: 4,
    subject: "We",
    subjectType: "plural",
    subjectIcon: "👨‍👩‍👧‍👦",
    sentenceTemplate: "We ___ delicious pancakes on Sunday.",
    sentenceComplete: "We eat delicious pancakes on Sunday.",
    verbBase: "eat",
    verbSingular: "eats",
    correctAnswer: "eat",
    ruleNote: "Con We (nosotros) usamos la forma base ➔ We eat!"
  },
  {
    id: 5,
    subject: "The cat",
    subjectType: "singular",
    subjectIcon: "🐱",
    sentenceTemplate: "The cat ___ on the warm rug.",
    sentenceComplete: "The cat sleeps on the warm rug.",
    verbBase: "sleep",
    verbSingular: "sleeps",
    correctAnswer: "sleeps",
    ruleNote: "The cat es singular (It) ➔ The cat sleeps!"
  },
  {
    id: 6,
    subject: "I",
    subjectType: "plural",
    subjectIcon: "🙋",
    sentenceTemplate: "I ___ my teeth before going to bed.",
    sentenceComplete: "I brush my teeth before going to bed.",
    verbBase: "brush",
    verbSingular: "brushes",
    correctAnswer: "brush",
    ruleNote: "Con I (yo) el verbo va en su forma base ➔ I brush!"
  },
  {
    id: 7,
    subject: "Leo",
    subjectType: "singular",
    subjectIcon: "🧑‍🦰",
    sentenceTemplate: "Leo ___ fast in the playground.",
    sentenceComplete: "Leo runs fast in the playground.",
    verbBase: "run",
    verbSingular: "runs",
    correctAnswer: "runs",
    ruleNote: "Leo es 3ra persona singular ➔ Leo runs!"
  },
  {
    id: 8,
    subject: "The students",
    subjectType: "plural",
    subjectIcon: "🎒",
    sentenceTemplate: "The students ___ books in the library.",
    sentenceComplete: "The students read books in the library.",
    verbBase: "read",
    verbSingular: "reads",
    correctAnswer: "read",
    ruleNote: "The students es plural (They) ➔ The students read!"
  },
  {
    id: 9,
    subject: "Mom",
    subjectType: "singular",
    subjectIcon: "👩",
    sentenceTemplate: "Mom ___ fresh orange juice for breakfast.",
    sentenceComplete: "Mom makes fresh orange juice for breakfast.",
    verbBase: "make",
    verbSingular: "makes",
    correctAnswer: "makes",
    ruleNote: "Mom (She) lleva -s ➔ Mom makes!"
  },
  {
    id: 10,
    subject: "You",
    subjectType: "plural",
    subjectIcon: "👉",
    sentenceTemplate: "You ___ the guitar very well!",
    sentenceComplete: "You play the guitar very well!",
    verbBase: "play",
    verbSingular: "plays",
    correctAnswer: "play",
    ruleNote: "Con You siempre usamos verbo base ➔ You play!"
  },
  {
    id: 11,
    subject: "The mechanic",
    subjectType: "singular",
    subjectIcon: "🔧",
    sentenceTemplate: "The mechanic ___ the old bicycle.",
    sentenceComplete: "The mechanic fixes the old bicycle.",
    verbBase: "fix",
    verbSingular: "fixes",
    correctAnswer: "fixes",
    ruleNote: "Fix termina en 'x', agregamos -ES ➔ The mechanic fixes!"
  },
  {
    id: 12,
    subject: "Birds",
    subjectType: "plural",
    subjectIcon: "🕊️",
    sentenceTemplate: "Birds ___ in the blue morning sky.",
    sentenceComplete: "Birds fly in the blue morning sky.",
    verbBase: "fly",
    verbSingular: "flies",
    correctAnswer: "fly",
    ruleNote: "Birds es plural (They) ➔ Birds fly!"
  },
  {
    id: 13,
    subject: "The little dog",
    subjectType: "singular",
    subjectIcon: "🐶",
    sentenceTemplate: "The little dog ___ the red ball.",
    sentenceComplete: "The little dog catches the red ball.",
    verbBase: "catch",
    verbSingular: "catches",
    correctAnswer: "catches",
    ruleNote: "Catch termina en 'ch', agregamos -ES ➔ The dog catches!"
  },
  {
    id: 14,
    subject: "My friends",
    subjectType: "plural",
    subjectIcon: "🛹",
    sentenceTemplate: "My friends ___ their homework together.",
    sentenceComplete: "My friends do their homework together.",
    verbBase: "do",
    verbSingular: "does",
    correctAnswer: "do",
    ruleNote: "My friends es plural ➔ My friends do!"
  },
  {
    id: 15,
    subject: "Dad",
    subjectType: "singular",
    subjectIcon: "👨",
    sentenceTemplate: "Dad ___ the car on Saturday.",
    sentenceComplete: "Dad washes the car on Saturday.",
    verbBase: "wash",
    verbSingular: "washes",
    correctAnswer: "washes",
    ruleNote: "Wash termina en 'sh', agregamos -ES ➔ Dad washes!"
  },
  {
    id: 16,
    subject: "He (Negative ⛔)",
    subjectType: "singular",
    subjectIcon: "⛔",
    sentenceTemplate: "He ___ like spicy food.",
    sentenceComplete: "He doesn't like spicy food.",
    verbBase: "don't",
    verbSingular: "doesn't",
    correctAnswer: "doesn't",
    ruleNote: "En negativo con He / She / It usamos DOESN'T + verbo base ➔ He doesn't like!"
  },
  {
    id: 17,
    subject: "They (Negative ⛔)",
    subjectType: "plural",
    subjectIcon: "⛔",
    sentenceTemplate: "They ___ walk to school in the rain.",
    sentenceComplete: "They don't walk to school in the rain.",
    verbBase: "don't",
    verbSingular: "doesn't",
    correctAnswer: "don't",
    ruleNote: "En negativo con They / We / I / You usamos DON'T + verbo base ➔ They don't walk!"
  },
  {
    id: 18,
    subject: "The teacher",
    subjectType: "singular",
    subjectIcon: "👩‍🏫",
    sentenceTemplate: "The teacher ___ English with joy.",
    sentenceComplete: "The teacher teaches English with joy.",
    verbBase: "teach",
    verbSingular: "teaches",
    correctAnswer: "teaches",
    ruleNote: "Teach termina en 'ch', agregamos -ES ➔ The teacher teaches!"
  },
  {
    id: 19,
    subject: "We",
    subjectType: "plural",
    subjectIcon: "🏃",
    sentenceTemplate: "We ___ around the track in PE class.",
    sentenceComplete: "We run around the track in PE class.",
    verbBase: "run",
    verbSingular: "runs",
    correctAnswer: "run",
    ruleNote: "Con We usamos verbo base ➔ We run!"
  }
];

let currentScaleIndex = 0;

function loadScaleChallenge(index) {
  currentScaleIndex = index;
  const challenge = verbScaleChallenges[index];

  document.getElementById('scaleCaseNum').textContent = `Reto ${index + 1} de ${verbScaleChallenges.length}`;
  document.getElementById('scaleTargetSentence').innerHTML = `
    <span style="font-size:1.5rem; margin-right:6px;">${challenge.subjectIcon}</span>
    ${challenge.sentenceTemplate.replace('___', '<span id="scaleBlankSlot" style="display:inline-block; min-width:80px; padding:2px 12px; background:#fef3c7; border-bottom:3px solid #f59e0b; border-radius:6px; color:#b45309; font-weight:700;">[ ? ]</span>')}
  `;

  // Neutral balance level at start
  const balance = document.getElementById('scaleBalanceGraphic');
  if (balance) {
    balance.style.transform = 'rotate(0deg)';
  }

  // Randomize button positions (Singular vs Base) so correct answer isn't predictably first
  const options = [
    { text: challenge.verbBase, isCorrect: challenge.verbBase === challenge.correctAnswer },
    { text: challenge.verbSingular, isCorrect: challenge.verbSingular === challenge.correctAnswer }
  ].sort(() => Math.random() - 0.5);

  const btnsRow = document.getElementById('scaleVerbButtonsRow');
  btnsRow.innerHTML = options.map(opt => `
    <button class="btn-scale-verb" onclick="checkScaleVerb(this, ${opt.isCorrect}, '${opt.text}', '${challenge.sentenceComplete.replace(/'/g, "\\'")}', '${challenge.ruleNote.replace(/'/g, "\\'")}')">
      ${opt.text}
    </button>
  `).join('');

  document.getElementById('scaleFeedbackBox').innerHTML = '';
}

function checkScaleVerb(btnEl, isCorrect, chosenText, sentenceComplete, ruleNote) {
  const balance = document.getElementById('scaleBalanceGraphic');
  const blank = document.getElementById('scaleBlankSlot');
  const feedback = document.getElementById('scaleFeedbackBox');

  if (isCorrect) {
    sfx.playSuccess();
    sfx.playBalanceTilt();

    if (blank) {
      blank.textContent = chosenText;
      blank.style.background = '#ecfdf5';
      blank.style.color = '#065f46';
      blank.style.borderColor = '#10b981';
    }

    // Level the scale perfectly
    if (balance) {
      balance.style.transition = 'transform 0.4s ease';
      balance.style.transform = 'scale(1.02)';
      setTimeout(() => { balance.style.transform = 'scale(1)'; }, 400);
    }

    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:14px; padding:12px 18px; margin-top:14px; color:#065f46; font-size:0.95rem;">
        <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">⚖️ ¡Balanza Equilibrada! (+15 pts)</div>
        <div>"${sentenceComplete}"</div>
        <div style="font-size:0.82rem; color:#047857; margin-top:6px; font-weight:600;">💡 Regla: ${ruleNote}</div>
      </div>
    `;
    AppState.addStars(15);
    speakEnglish(sentenceComplete, 'kid');

    setTimeout(() => {
      if (currentScaleIndex < verbScaleChallenges.length - 1) {
        loadScaleChallenge(currentScaleIndex + 1);
      }
    }, 1800);

  } else {
    sfx.playError();
    // Tilt the scale heavily to show imbalance!
    if (balance) {
      balance.style.transition = 'transform 0.25s ease';
      balance.style.transform = 'rotate(-7deg)';
      setTimeout(() => { balance.style.transform = 'rotate(0deg)'; }, 450);
    }

    btnEl.style.borderColor = '#ef4444';
    btnEl.style.background = '#fef2f2';

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; margin-top:14px; color:#b91c1c; font-size:0.92rem; font-weight:700;">
        ⚠️ ¡La balanza se desequilibró! Mira si el sujeto es Singular (He/She/It) o Plural/I/You/We/They.
      </div>
    `;
  }
}

function nextScaleChallenge() {
  sfx.playPop();
  currentScaleIndex = (currentScaleIndex + 1) % verbScaleChallenges.length;
  loadScaleChallenge(currentScaleIndex);
}

// ============================================================================
// ACTIVIDAD 4: MY MORNING VLOG (SIMULADOR DE VLOG EN VIVO)
// 8 Real-world Streamer Prompts con grabación Web Speech API y feedback
// ============================================================================
const vlogEpisodesData = [
  {
    id: 0,
    scene: "Scene 1 • Morning Wake Up ☀️",
    targetPhrase: "Good morning guys! I wake up at seven o'clock.",
    phraseEs: "¡Buenos días chicos! Me despierto a las siete en punto.",
    chatReaction: "10K viewers say: Rise and shine streamer! ☀️"
  },
  {
    id: 1,
    scene: "Scene 2 • Bathroom Routine 🪥",
    targetPhrase: "First, I wash my face and brush my teeth.",
    phraseEs: "Primero, me lavo la cara y me cepillo los dientes.",
    chatReaction: "Chat says: Super fresh smile! ✨"
  },
  {
    id: 2,
    scene: "Scene 3 • Kitchen Breakfast 🥣",
    targetPhrase: "For breakfast, I eat cereal and drink orange juice.",
    phraseEs: "Para el desayuno, como cereal y tomo jugo de naranja.",
    chatReaction: "Chat spam: Delicious breakfast! 🍊🥣"
  },
  {
    id: 3,
    scene: "Scene 4 • Backpack Prep 🎒",
    targetPhrase: "Then, I put on my uniform and pack my backpack.",
    phraseEs: "Luego, me pongo mi uniforme y empaco mi mochila.",
    chatReaction: "Chat: Ready for school! 📚"
  },
  {
    id: 4,
    scene: "Scene 5 • Sibling Routine 👦",
    targetPhrase: "My brother doesn't walk; he takes the yellow bus.",
    phraseEs: "Mi hermano no camina; toma el autobús amarillo.",
    chatReaction: "Chat: Excellent grammar with doesn't! 🚌🔥"
  },
  {
    id: 5,
    scene: "Scene 6 • Afternoon Homework 📝",
    targetPhrase: "In the afternoon, she finishes her homework before dinner.",
    phraseEs: "En la tarde, ella termina sus tareas antes de cenar.",
    chatReaction: "Chat: Big brain energy! 🧠🌟"
  },
  {
    id: 6,
    scene: "Scene 7 • Dinner Table 🍝",
    targetPhrase: "At eight PM, our whole family has dinner together.",
    phraseEs: "A las 8 PM, toda nuestra familia cena junta.",
    chatReaction: "Chat: Wholesome family dinner time! 👨‍👩‍👧‍👦❤️"
  },
  {
    id: 7,
    scene: "Scene 8 • Goodnight Stream 🌙",
    targetPhrase: "Finally, I turn off the lights and go to bed. Good night!",
    phraseEs: "Finalmente, apago las luces y voy a dormir. ¡Buenas noches!",
    chatReaction: "Chat: Sweet dreams streamer! See you tomorrow! 💤⭐"
  }
];

let currentVlogIndex = 0;
let isVlogRecording = false;

function loadVlogEpisode(index) {
  currentVlogIndex = index;
  const ep = vlogEpisodesData[index];

  document.getElementById('vlogEpisodeNum').textContent = `Episodio ${index + 1} de ${vlogEpisodesData.length}`;
  document.getElementById('vlogSceneTag').textContent = ep.scene;
  document.getElementById('vlogPhraseTarget').textContent = ep.targetPhrase;
  document.getElementById('vlogPhraseEs').textContent = ep.phraseEs;
  document.getElementById('vlogChatBox').innerHTML = `
    <span style="color:#94a3b8; font-size:0.85rem;">💬 Chat en Vivo: ${ep.chatReaction}</span>
  `;
  document.getElementById('vlogFeedback').innerHTML = '';

  speakEnglish(ep.targetPhrase, 'streamer');
}

function listenVlogPhrase() {
  sfx.playPop();
  const ep = vlogEpisodesData[currentVlogIndex];
  speakEnglish(ep.targetPhrase, 'streamer');
}

function toggleVlogMic() {
  const btn = document.getElementById('vlogMicBtn');
  const feedback = document.getElementById('vlogFeedback');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    sfx.playApplause();
    feedback.innerHTML = `
      <div style="font-size:1.1rem; font-weight:700; color:#fbbf24;">📹 ¡Transmisión en vivo grabada con éxito!</div>
      <span style="display:inline-block; margin-top:6px; background:rgba(16, 185, 129, 0.2); color:#34d399; font-weight:700; padding:6px 16px; border-radius:999px; border:1px solid #10b981;">
        👏 ¡El chat te regala 50K Likes y +25 pts!
      </span>
    `;
    AppState.addStars(25);
    return;
  }

  if (isVlogRecording) return;

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isVlogRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#ef4444; font-weight:700;">🔴 ¡EN EL AIRE! Lee la frase con buena pronunciación...</span>`;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      sfx.playApplause();
      feedback.innerHTML = `
        <div style="font-size:1.05rem; font-weight:600; color:#ffffff;">Grabaste: "<strong>${transcript}</strong>"</div>
        <span style="display:inline-block; margin-top:8px; background:rgba(245, 158, 11, 0.2); color:#fbbf24; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #f59e0b;">
          🔥 ¡Stream impecable! 100K Likes de los fans (+25 pts)
        </span>
      `;
      AppState.addStars(25);
    };

    recognition.onerror = () => {
      feedback.innerHTML = `<span style="color:#94a3b8;">Toca el micrófono de nuevo e inténtalo.</span>`;
    };

    recognition.onend = () => {
      isVlogRecording = false;
      btn.classList.remove('recording');
    };

    recognition.start();

  } catch (err) {
    btn.classList.remove('recording');
  }
}

function nextVlogEpisode() {
  sfx.playPop();
  currentVlogIndex = (currentVlogIndex + 1) % vlogEpisodesData.length;
  loadVlogEpisode(currentVlogIndex);
}

// ============================================================================
// INICIALIZACIÓN DE LA UNIDAD 4
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // 1. Reloj & Timeline
  renderClockTimelineTrack();
  loadClockSlotDetails(0);

  // 2. Weekly Mission Planner
  loadPlannerMission(0);

  // 3. Verb -S Balance Scale
  loadScaleChallenge(0);

  // 4. My Morning Vlog Studio
  loadVlogEpisode(0);
});
