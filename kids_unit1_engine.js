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
// NATIVE SPEECH SYNTHESIS ENGINE (Natural English pronunciation)
// ============================================================================
function speakEnglish(text, voiceType = 'kid', callback) {
  if (!('speechSynthesis' in window)) {
    if (callback) callback();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.88; // Clear & friendly for 7-10 learners
  utterance.pitch = voiceType === 'maya' ? 1.25 : voiceType === 'alex' ? 1.15 : 1.05;

  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Karen'))) 
                    || voices.find(v => v.lang.startsWith('en'));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  utterance.onend = () => {
    if (callback) callback();
  };

  utterance.onerror = () => {
    if (callback) callback();
  };

  window.speechSynthesis.speak(utterance);
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
// ACTIVITY 1: COMIC DIALOGUE
// ============================================================================
const comicLines = [
  { panelId: 'panel-1', char: 'alex', text: "Hello! Welcome to Bilikids Club.", es: "¡Hola! Bienvenido al Club Bilikids." },
  { panelId: 'panel-2', char: 'maya', text: "Hi! My name is Maya. What's your name?", es: "¡Hola! Mi nombre es Maya. ¿Cuál es tu nombre?" },
  { panelId: 'panel-3', char: 'alex', text: "I'm Alex! Are you ready for the adventure?", es: "¡Soy Alex! ¿Estás lista para la aventura?" },
  { panelId: 'panel-4', char: 'maya', text: "Yes, I am! We are a great team.", es: "¡Sí, lo estoy! Somos un gran equipo." }
];

let isComicPlaying = false;

function playComicLine(index) {
  sfx.playPop();
  const line = comicLines[index];
  const panel = document.getElementById(line.panelId);
  
  document.querySelectorAll('.comic-panel').forEach(p => p.classList.remove('talking-now'));
  if (panel) panel.classList.add('talking-now');

  speakEnglish(line.text, line.char, () => {
    if (panel) panel.classList.remove('talking-now');
  });
}

function autoplayEntireComic() {
  if (isComicPlaying) return;
  isComicPlaying = true;
  sfx.playPop();
  
  const playStep = (step) => {
    if (step >= comicLines.length) {
      isComicPlaying = false;
      document.querySelectorAll('.comic-panel').forEach(p => p.classList.remove('talking-now'));
      sfx.playSuccess();
      AppState.addStars(5);
      return;
    }

    const line = comicLines[step];
    const panel = document.getElementById(line.panelId);
    document.querySelectorAll('.comic-panel').forEach(p => p.classList.remove('talking-now'));
    if (panel) panel.classList.add('talking-now');

    speakEnglish(line.text, line.char, () => {
      setTimeout(() => playStep(step + 1), 600);
    });
  };

  playStep(0);
}

// ============================================================================
// ACTIVITY 2: WORD EXPLORER (Flashcards & Quiz)
// ============================================================================
const vocabularyData = [
  // Saludos & Expresiones
  { cat: 'greetings', en: 'Hello', es: 'Hola', ipa: '/həˈloʊ/', icon: '👋' },
  { cat: 'greetings', en: 'Good morning', es: 'Buenos días', ipa: '/ɡʊd ˈmɔːrnɪŋ/', icon: '🌅' },
  { cat: 'greetings', en: 'Nice to meet you', es: 'Mucho gusto', ipa: '/naɪs tuː miːt juː/', icon: '🤝' },
  { cat: 'greetings', en: 'Goodbye', es: 'Adiós', ipa: '/ɡʊdˈbaɪ/', icon: '👋' },
  { cat: 'greetings', en: 'See you later', es: 'Hasta luego', ipa: '/siː juː ˈleɪtər/', icon: '⏱️' },
  
  // Datos Personales
  { cat: 'personal', en: 'First name', es: 'Primer nombre', ipa: '/fɜːrst neɪm/', icon: '🏷️' },
  { cat: 'personal', en: 'Last name', es: 'Apellido', ipa: '/læst neɪm/', icon: '📇' },
  { cat: 'personal', en: 'Student', es: 'Estudiante', ipa: '/ˈstjuːdənt/', icon: '🎒' },
  { cat: 'personal', en: 'Teacher', es: 'Profesor(a)', ipa: '/ˈtiːtʃər/', icon: '👩‍🏫' },
  { cat: 'personal', en: 'Friend', es: 'Amigo(a)', ipa: '/frend/', icon: '⭐' },

  // Números 0-10
  { cat: 'numbers', en: 'Zero', es: 'Cero (0)', ipa: '/ˈzɪəroʊ/', icon: '0️⃣' },
  { cat: 'numbers', en: 'One', es: 'Uno (1)', ipa: '/wʌn/', icon: '1️⃣' },
  { cat: 'numbers', en: 'Two', es: 'Dos (2)', ipa: '/tuː/', icon: '2️⃣' },
  { cat: 'numbers', en: 'Three', es: 'Tres (3)', ipa: '/θriː/', icon: '3️⃣' },
  { cat: 'numbers', en: 'Four', es: 'Cuatro (4)', ipa: '/fɔːr/', icon: '4️⃣' },
  { cat: 'numbers', en: 'Five', es: 'Cinco (5)', ipa: '/faɪv/', icon: '5️⃣' },
  { cat: 'numbers', en: 'Six', es: 'Seis (6)', ipa: '/sɪks/', icon: '6️⃣' },
  { cat: 'numbers', en: 'Seven', es: 'Siete (7)', ipa: '/ˈsev.ən/', icon: '7️⃣' },
  { cat: 'numbers', en: 'Eight', es: 'Ocho (8)', ipa: '/eɪt/', icon: '8️⃣' },
  { cat: 'numbers', en: 'Nine', es: 'Nueve (9)', ipa: '/naɪn/', icon: '9️⃣' },
  { cat: 'numbers', en: 'Ten', es: 'Diez (10)', ipa: '/ten/', icon: '🔟' }
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
      <div class="word-spanish">${item.es}</div>
      <span class="word-audio-btn">🔊 Escuchar</span>
    </div>
  `).join('');
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
  // 1-5: Saludos e Identidad básica con Verbo Be
  {
    es: "Hola, yo soy Maya.",
    target: ["Hello,", "I", "am", "Maya."],
    pool: ["Hello,", "Maya.", "am", "is", "I", "are"],
    tip: "Usa el pronombre 'I' con el verbo 'am'."
  },
  {
    es: "¿Cuál es tu nombre?",
    target: ["What", "is", "your", "name?"],
    pool: ["name?", "What", "your", "are", "is", "my"],
    tip: "Estructura de pregunta: Wh-word + Verb be + Sujeto."
  },
  {
    es: "Nosotros somos estudiantes.",
    target: ["We", "are", "students."],
    pool: ["We", "is", "am", "are", "students.", "teachers."],
    tip: "Con el pronombre plural 'We' usamos 'are'."
  },
  {
    es: "¿Tienes diez años?",
    target: ["Are", "you", "ten", "years", "old?"],
    pool: ["Are", "you", "is", "ten", "years", "old?", "nine"],
    tip: "En preguntas con 'You', el verbo 'Are' va al inicio."
  },
  {
    es: "¡Mucho gusto, Alex!",
    target: ["Nice", "to", "meet", "you,", "Alex!"],
    pool: ["Nice", "you,", "meet", "to", "Alex!", "Good"],
    tip: "Expresión común para saludar a alguien por primera vez."
  },

  // 6-10: Nombres, edades y saludos cotidianos
  {
    es: "Mi nombre es David.",
    target: ["My", "name", "is", "David."],
    pool: ["My", "name", "is", "David.", "are", "am"],
    tip: "Para 'My name' (tercera persona singular) usamos 'is'."
  },
  {
    es: "Tengo nueve años.",
    target: ["I", "am", "nine", "years", "old."],
    pool: ["I", "am", "nine", "years", "old.", "have", "is"],
    tip: "En inglés la edad se dice con 'am' (verbo be), no con 'have'."
  },
  {
    es: "¡Buenos días, profesora!",
    target: ["Good", "morning,", "teacher!"],
    pool: ["Good", "morning,", "teacher!", "night,", "afternoon,"],
    tip: "'Good morning' se usa por las mañanas."
  },
  {
    es: "¿Cómo estás hoy?",
    target: ["How", "are", "you", "today?"],
    pool: ["How", "are", "you", "today?", "is", "am"],
    tip: "Pregunta típica de saludo: How + are + you + today?"
  },
  {
    es: "Estoy muy bien, gracias.",
    target: ["I", "am", "very", "good,", "thank", "you."],
    pool: ["I", "am", "very", "good,", "thank", "you.", "are", "bad,"],
    tip: "Respuesta positiva cordial a 'How are you?'."
  },

  // 11-15: Preguntas Sí/No, respuestas cortas y datos personales
  {
    es: "¿Eres un estudiante nuevo?",
    target: ["Are", "you", "a", "new", "student?"],
    pool: ["Are", "you", "a", "new", "student?", "is", "an"],
    tip: "En preguntas de Sí/No el verbo 'Are' va primero."
  },
  {
    es: "Sí, yo soy.",
    target: ["Yes,", "I", "am."],
    pool: ["Yes,", "I", "am.", "are.", "is."],
    tip: "Respuesta corta afirmativa formal."
  },
  {
    es: "No, no lo soy.",
    target: ["No,", "I", "am", "not."],
    pool: ["No,", "I", "am", "not.", "are", "is"],
    tip: "Para negar en presente usamos 'am not'."
  },
  {
    es: "¿Cuál es tu primer nombre?",
    target: ["What", "is", "your", "first", "name?"],
    pool: ["What", "is", "your", "first", "name?", "are", "last"],
    tip: "'First name' se refiere al nombre de pila."
  },
  {
    es: "Mi apellido es Gómez.",
    target: ["My", "last", "name", "is", "Gomez."],
    pool: ["My", "last", "name", "is", "Gomez.", "are", "first"],
    tip: "'Last name' es el apellido familiar."
  },

  // 16-20: Amigos, números de contacto y despedidas
  {
    es: "Nosotros somos buenos amigos.",
    target: ["We", "are", "good", "friends."],
    pool: ["We", "are", "good", "friends.", "is", "am"],
    tip: "Sujeto plural 'We' siempre se combina con 'are'."
  },
  {
    es: "¿Cuál es tu número de teléfono?",
    target: ["What", "is", "your", "phone", "number?"],
    pool: ["What", "is", "your", "phone", "number?", "are", "my"],
    tip: "Pregunta informativa para pedir contacto."
  },
  {
    es: "Es cinco, cuatro, tres, dos, uno.",
    target: ["It", "is", "five,", "four,", "three,", "two,", "one."],
    pool: ["It", "is", "five,", "four,", "three,", "two,", "one.", "are"],
    tip: "En números de teléfono decimos dígito por dígito con 'It is'."
  },
  {
    es: "¡Hasta luego, amigo!",
    target: ["See", "you", "later,", "friend!"],
    pool: ["See", "you", "later,", "friend!", "Good", "tomorrow,"],
    tip: "Despedida informal para ver a alguien después."
  },
  {
    es: "¡Adiós, que tengas un buen día!",
    target: ["Goodbye,", "have", "a", "nice", "day!"],
    pool: ["Goodbye,", "have", "a", "nice", "day!", "night!", "week!"],
    tip: "Despedida amigable y respetuosa."
  },

  // 21-25: Clase escolar, edades y bienvenida
  {
    es: "Tú estás en mi clase de inglés.",
    target: ["You", "are", "in", "my", "English", "class."],
    pool: ["You", "are", "in", "my", "English", "class.", "is", "am"],
    tip: "'You' siempre se conjuga con 'are'."
  },
  {
    es: "¿Estamos listos para la escuela?",
    target: ["Are", "we", "ready", "for", "school?"],
    pool: ["Are", "we", "ready", "for", "school?", "is", "am"],
    tip: "Pregunta en plural con 'we': 'Are we...?'"
  },
  {
    es: "¡Sí, nosotros estamos listos!",
    target: ["Yes,", "we", "are", "ready!"],
    pool: ["Yes,", "we", "are", "ready!", "is", "am"],
    tip: "'We are' expresa la primera persona plural."
  },
  {
    es: "Tengo ocho años.",
    target: ["I", "am", "eight", "years", "old."],
    pool: ["I", "am", "eight", "years", "old.", "seven", "is"],
    tip: "Recuerda: 'I am' + número + 'years old'."
  },
  {
    es: "¡Bienvenido a nuestra escuela!",
    target: ["Welcome", "to", "our", "school!"],
    pool: ["Welcome", "to", "our", "school!", "in", "at"],
    tip: "Expresión de bienvenida: 'Welcome to...'."
  }
];

let currentChallengeIndex = 0;
let userPlacedWords = [];

function loadSentenceChallenge(index) {
  currentChallengeIndex = index;
  userPlacedWords = [];

  const challenge = sentenceChallenges[index];
  document.getElementById('challengeNum').textContent = `Reto ${index + 1} de ${sentenceChallenges.length}`;
  document.getElementById('promptTranslation').textContent = `"${challenge.es}"`;
  document.getElementById('grammarTip').textContent = `💡 Pista gramatical: ${challenge.tip}`;

  const dropzone = document.getElementById('sentenceDropzone');
  dropzone.className = 'dropzone-target';
  dropzone.innerHTML = '<span style="color:#94a3b8; font-size:0.9rem;">Toca las palabras abajo para colocarlas aquí en orden...</span>';

  // Barajar banco de palabras
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
    dropzone.innerHTML = '<span style="color:#94a3b8; font-size:0.9rem;">Toca las palabras abajo para colocarlas aquí en orden...</span>';
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
      nextBtn.textContent = '¡Completado! Repetir reto 🔄';
    } else {
      nextBtn.textContent = 'Siguiente Reto ➔';
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
  { phrase: "Hello! My name is Alex.", es: "¡Hola! Mi nombre es Alex." },
  { phrase: "I am nine years old.", es: "Tengo nueve años." },
  { phrase: "Nice to meet you!", es: "¡Mucho gusto en conocerte!" },
  { phrase: "We are students.", es: "Nosotros somos estudiantes." }
];

let currentSpeakingIndex = 0;
let isRecording = false;
let recognitionInstance = null;

function loadSpeakingPrompt(index) {
  currentSpeakingIndex = index;
  const item = speakingPrompts[index];
  document.getElementById('speakingTarget').textContent = item.phrase;
  document.getElementById('speakingHint').textContent = item.es;
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
    // Si el navegador no soporta Speech Recognition, dar experiencia asistida interactiva
    sfx.playPop();
    feedback.innerHTML = `
      <div class="speech-result-text">🎙️ Grabación de práctica completada</div>
      <span class="speech-score-badge" style="background:#dcfce7; color:#15803d;">
        🌟 ¡Excelente pronunciación! +10 pts
      </span>
    `;
    sfx.playSuccess();
    AppState.addStars(10);
    return;
  }

  if (isRecording) {
    if (recognitionInstance) recognitionInstance.stop();
    return;
  }

  // Iniciar reconocimiento
  try {
    recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'en-US';
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onstart = () => {
      isRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#6366f1; font-weight:600;">Te estoy escuchando... ¡Habla ahora! 🎧</span>`;
    };

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const target = speakingPrompts[currentSpeakingIndex].phrase;

      // Evaluar similitud
      const cleanTranscript = transcript.toLowerCase().replace(/[^a-z0-9 ]/g, '');
      const cleanTarget = target.toLowerCase().replace(/[^a-z0-9 ]/g, '');

      let isMatch = cleanTranscript === cleanTarget || cleanTarget.includes(cleanTranscript) || cleanTranscript.includes(cleanTarget);

      if (isMatch) {
        sfx.playSuccess();
        feedback.innerHTML = `
          <div class="speech-result-text">Dijiste: "<strong>${transcript}</strong>"</div>
          <span class="speech-score-badge" style="background:#dcfce7; color:#15803d;">
            🌟 ¡Perfecto! Pronunciación 100% (+15 pts)
          </span>
        `;
        AppState.addStars(15);
      } else {
        sfx.playPop();
        feedback.innerHTML = `
          <div class="speech-result-text">Dijiste: "${transcript}"</div>
          <span class="speech-score-badge" style="background:#fef3c7; color:#92400e;">
            👍 ¡Buen intento! Escucha el modelo e intenta de nuevo (+5 pts)
          </span>
        `;
        AppState.addStars(5);
      }
    };

    recognitionInstance.onerror = (err) => {
      console.warn("Speech recognition error:", err);
      feedback.innerHTML = `<span style="color:#64748b; font-size:0.85rem;">No logramos escuchar claramente. Presiona el micrófono e intenta otra vez.</span>`;
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
// INICIALIZACIÓN
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar estrellas
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // Renderizar vocabulario
  renderWordCards('all');

  // Cargar primer reto gramatical
  loadSentenceChallenge(0);

  // Cargar primera frase de speaking
  loadSpeakingPrompt(0);
});
