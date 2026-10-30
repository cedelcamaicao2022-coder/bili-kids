/**
 * BILIKIDS KIDS CLUB - UNIT 6 ENGINE: NEIGHBORHOODS
 * Age: 7-10 years (Cambridge Starters / Movers A1-A2)
 * Innovative, Highly Distinct Activities:
 * 1. 🗺️ Interactive City Map (Navegante del Mapa de la Ciudad)
 * 2. 🏢 Inspector Stamp: There is vs There are (Sello del Inspector Municipal)
 * 3. 🧭 Preposition Compass GPS (Brújula GPS de Posiciones: next to, between)
 * 4. 🚌 "Let's Go!" Town Tour Guide (Guía del Autobús Turístico con Micrófono)
 */

// ============================================================================
// APP STATE & PERSISTENCE
// ============================================================================
const AppState = {
  stars: parseInt(localStorage.getItem('bilikids_stars') || '180', 10),

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

  playCarHonk() {
    this.init();
    // Friendly double car beep for city map
    [0, 0.12].forEach(delay => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + 0.08);
    });
  }

  playStampThud() {
    this.init();
    // Heavy rubber stamp sound
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  playGPSChime() {
    this.init();
    // Modern GPS navigation chime (ascending pair)
    const freqs = [659.25, 880]; // E5, A5
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.22);
    });
  }

  playBusHorn() {
    this.init();
    // Cheerful tour bus horn
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(310, this.ctx.currentTime);
    osc.frequency.setValueAtTime(390, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.28);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.28);
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

  if (voiceType === 'tour') {
    utterance.pitch = 1.25;
    utterance.rate = 1.0;
  } else if (voiceType === 'inspector') {
    utterance.pitch = 1.0;
    utterance.rate = 0.95;
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
// ACTIVIDAD 1: INTERACTIVE CITY MAP (NAVEGANTE DEL MAPA DE LA CIUDAD)
// 8 misiones de orientación urbana y lugares del barrio
// ============================================================================
const cityPlacesData = [
  { id: "bakery", name: "Bakery", icon: "🥖", es: "Panadería" },
  { id: "library", name: "Library", icon: "📚", es: "Biblioteca" },
  { id: "park", name: "Central Park", icon: "🌳", es: "Parque Central" },
  { id: "toystore", name: "Toy Store", icon: "🧸", es: "Juguetería" },
  { id: "supermarket", name: "Supermarket", icon: "🛒", es: "Supermercado" },
  { id: "cinema", name: "Cinema", icon: "🎬", es: "Cine" },
  { id: "petshop", name: "Pet Shop", icon: "🐶", es: "Tienda de Mascotas" },
  { id: "firestation", name: "Fire Station", icon: "🚒", es: "Estación de Bomberos" }
];

const cityMissionsData = [
  {
    id: 0,
    title: "Mission 1 • The Scent of Warm Bread 🥖",
    targetPlaceId: "bakery",
    targetPlaceName: "Bakery",
    promptEn: "I want to buy fresh warm bread and chocolate croissants for breakfast.",
    promptEs: "Quiero comprar pan caliente fresco y cruasanes de chocolate para el desayuno.",
    clue: "¿Dónde se compra pan recién horneado y pasteles?"
  },
  {
    id: 1,
    title: "Mission 2 • The Mystery Storybook 📚",
    targetPlaceId: "library",
    targetPlaceName: "Library",
    promptEn: "We need to borrow quiet mystery books for our school reading homework.",
    promptEs: "Necesitamos pedir prestados libros de misterio para nuestra tarea escolar de lectura.",
    clue: "¿Dónde puedes leer en silencio y pedir libros prestados?"
  },
  {
    id: 2,
    title: "Mission 3 • Green Grass & Swings 🌳",
    targetPlaceId: "park",
    targetPlaceName: "Central Park",
    promptEn: "It is a sunny afternoon! Children are riding bicycles and flying kites.",
    promptEs: "¡Es una tarde soleada! Los niños están montando bicicleta y elevando cometas.",
    clue: "¿Dónde hay árboles, bancas verdes y juegos al aire libre?"
  },
  {
    id: 3,
    title: "Mission 4 • Birthday Gift Search 🧸",
    targetPlaceId: "toystore",
    targetPlaceName: "Toy Store",
    promptEn: "My little sister wants a robotic dinosaur and a wooden puzzle for her birthday.",
    promptEs: "Mi hermanita quiere un dinosaurio robótico y un rompecabezas de madera de cumpleaños.",
    clue: "¿Dónde venden juegos de mesa, muñecos y pistas de autos?"
  },
  {
    id: 4,
    title: "Mission 5 • Weekly Grocery Shopping 🛒",
    targetPlaceId: "supermarket",
    targetPlaceName: "Supermarket",
    promptEn: "Mom is pushing a shopping cart to buy milk, apples, cereal, and soap.",
    promptEs: "Mamá empuja un carrito de compras para comprar leche, manzanas, cereal y jabón.",
    clue: "¿Dónde compras alimentos, bebidas y productos para el hogar?"
  },
  {
    id: 5,
    title: "Mission 6 • Animated Movie Premiere 🎬",
    targetPlaceId: "cinema",
    targetPlaceName: "Cinema",
    promptEn: "We bought tickets and sweet butter popcorn to watch the superhero movie.",
    promptEs: "Compramos boletos y palomitas de mantequilla para ver la película de superhéroes.",
    clue: "¿Dónde hay una gran pantalla oscura para ver estrenos de películas?"
  },
  {
    id: 6,
    title: "Mission 7 • Puppy Collar & Toys 🐶",
    targetPlaceId: "petshop",
    targetPlaceName: "Pet Shop",
    promptEn: "Our new puppy needs a soft bed, crunchy dog food, and a rubber ball.",
    promptEs: "Nuestro nuevo cachorrito necesita una camita suave, comida para perros y una pelota de goma.",
    clue: "¿Dónde compras artículos y alimentos para animales de compañía?"
  },
  {
    id: 7,
    title: "Mission 8 • Emergency Red Trucks 🚒",
    targetPlaceId: "firestation",
    targetPlaceName: "Fire Station",
    promptEn: "Brave firefighters in yellow coats and tall ladders help people during emergencies.",
    promptEs: "Valientes bomberos con abrigos amarillos y escaleras altas ayudan durante emergencias.",
    clue: "¿Dónde descansan los camiones rojos de bomberos con sirenas?"
  }
];

let currentCityMission = 0;

function loadCityMission(index) {
  currentCityMission = index;
  const m = cityMissionsData[index];

  document.getElementById('cityMissionBadge').textContent = `Misión ${index + 1} de ${cityMissionsData.length}`;
  document.getElementById('cityMissionTitle').textContent = m.title;
  document.getElementById('cityPromptEn').textContent = `"${m.promptEn}"`;
  document.getElementById('cityPromptEs').textContent = m.promptEs;
  document.getElementById('cityMissionClue').innerHTML = `💡 <strong>Pista de Navegación:</strong> ${m.clue}`;

  speakEnglish(m.promptEn, 'guide');
  renderCityMapGrid();
  document.getElementById('cityFeedbackBox').innerHTML = '';
}

function listenCityPrompt() {
  sfx.playCarHonk();
  const m = cityMissionsData[currentCityMission];
  speakEnglish(m.promptEn, 'guide');
}

function renderCityMapGrid() {
  const grid = document.getElementById('cityMapGrid');
  if (!grid) return;

  // Shuffle map places display
  const shuffled = [...cityPlacesData].sort(() => Math.random() - 0.5);

  grid.innerHTML = shuffled.map(p => `
    <button class="city-place-pin" onclick="handleCityPinClick(this, '${p.id}', '${p.name}', '${p.icon}')">
      <span style="font-size:2.4rem;">${p.icon}</span>
      <strong style="font-family:var(--font-display); font-size:1.05rem; color:#0f172a; margin-top:4px;">${p.name}</strong>
      <span style="font-size:0.75rem; color:#64748b;">${p.es}</span>
    </button>
  `).join('');
}

function handleCityPinClick(btnEl, placeId, placeName, placeIcon) {
  const m = cityMissionsData[currentCityMission];
  const feedback = document.getElementById('cityFeedbackBox');

  if (placeId === m.targetPlaceId) {
    sfx.playCarHonk();
    sfx.playSuccess();
    btnEl.classList.add('correct');

    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:16px; padding:14px 20px; color:#065f46; margin-top:16px;">
        <div style="font-weight:700; font-size:1.15rem; margin-bottom:4px;">📍 ¡DESTINO ALCANZADO! (+20 pts)</div>
        <div>Navegaste correctamente hacia <strong>${placeIcon} ${placeName}</strong>.</div>
      </div>
    `;
    AppState.addStars(20);
    speakEnglish(`You arrived at the ${placeName}!`, 'guide');

    setTimeout(() => {
      if (currentCityMission < cityMissionsData.length - 1) {
        loadCityMission(currentCityMission + 1);
      }
    }, 2000);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong');
    setTimeout(() => btnEl.classList.remove('wrong'), 450);

    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ ¡Ese no es el lugar correcto! Revisa la pista de navegación en la tarjeta arriba.
      </div>
    `;
  }
}

function nextCityMission() {
  sfx.playPop();
  currentCityMission = (currentCityMission + 1) % cityMissionsData.length;
  loadCityMission(currentCityMission);
}

// ============================================================================
// ACTIVIDAD 2: THERE IS / THERE ARE BUILDING INSPECTOR (SELLO MUNICIPAL)
// 15 retos de singular vs plural con sello oficial
// ============================================================================
const buildingPermitsData = [
  {
    id: 0,
    sentenceTemplate: "___ a green public park with a water fountain.",
    sentenceComplete: "There is a green public park with a water fountain.",
    sentenceEs: "Hay un parque público verde con una fuente de agua.",
    correctAnswer: "There is",
    countType: "singular",
    explanation: "'a green public park' es singular (1 solo parque) ➔ Usa THERE IS!"
  },
  {
    id: 1,
    sentenceTemplate: "___ three modern supermarkets in our neighborhood.",
    sentenceComplete: "There are three modern supermarkets in our neighborhood.",
    sentenceEs: "Hay tres supermercados modernos en nuestro barrio.",
    correctAnswer: "There are",
    countType: "plural",
    explanation: "'three supermarkets' es plural (3 supermercados) ➔ Usa THERE ARE!"
  },
  {
    id: 2,
    sentenceTemplate: "___ many colorful flowers along the street.",
    sentenceComplete: "There are many colorful flowers along the street.",
    sentenceEs: "Hay muchas flores coloridas a lo largo de la calle.",
    correctAnswer: "There are",
    countType: "plural",
    explanation: "'many colorful flowers' es plural contable ➔ Usa THERE ARE!"
  },
  {
    id: 3,
    sentenceTemplate: "___ an ancient stone library in the town square.",
    sentenceComplete: "There is an ancient stone library in the town square.",
    sentenceEs: "Hay una antigua biblioteca de piedra en la plaza central.",
    correctAnswer: "There is",
    countType: "singular",
    explanation: "'an ancient stone library' es singular (1 biblioteca) ➔ Usa THERE IS!"
  },
  {
    id: 4,
    sentenceTemplate: "___ two big red fire trucks at the station.",
    sentenceComplete: "There are two big red fire trucks at the station.",
    sentenceEs: "Hay dos grandes camiones rojos de bomberos en la estación.",
    correctAnswer: "There are",
    countType: "plural",
    explanation: "'two big fire trucks' es plural (2 camiones) ➔ Usa THERE ARE!"
  },
  {
    id: 5,
    sentenceTemplate: "___ a cozy cafe next to the bookstore.",
    sentenceComplete: "There is a cozy cafe next to the bookstore.",
    sentenceEs: "Hay una cafetería acogedora al lado de la librería.",
    correctAnswer: "There is",
    countType: "singular",
    explanation: "'a cozy cafe' es singular (1 cafetería) ➔ Usa THERE IS!"
  },
  {
    id: 6,
    sentenceTemplate: "___ some fresh bread inside the warm bakery.",
    sentenceComplete: "There is some fresh bread inside the warm bakery.",
    sentenceEs: "Hay algo de pan fresco dentro de la panadería.",
    correctAnswer: "There is",
    countType: "singular",
    explanation: "'bread' es un sustantivo incontable en inglés ➔ Usa THERE IS!"
  },
  {
    id: 7,
    sentenceTemplate: "___ five yellow buses waiting at the terminal.",
    sentenceComplete: "There are five yellow buses waiting at the terminal.",
    sentenceEs: "Hay cinco autobuses amarillos esperando en la terminal.",
    correctAnswer: "There are",
    countType: "plural",
    explanation: "'five yellow buses' es plural (5 autobuses) ➔ Usa THERE ARE!"
  },
  {
    id: 8,
    sentenceTemplate: "___ a tall hospital with emergency doctors.",
    sentenceComplete: "There is a tall hospital with emergency doctors.",
    sentenceEs: "Hay un hospital alto con médicos de emergencia.",
    correctAnswer: "There is",
    countType: "singular",
    explanation: "'a tall hospital' es singular (1 hospital) ➔ Usa THERE IS!"
  },
  {
    id: 9,
    sentenceTemplate: "___ ten noisy birds singing in the oak tree.",
    sentenceComplete: "There are ten noisy birds singing in the oak tree.",
    sentenceEs: "Hay diez pájaros ruidosos cantando en el roble.",
    correctAnswer: "There are",
    countType: "plural",
    explanation: "'ten noisy birds' es plural (10 pájaros) ➔ Usa THERE ARE!"
  },
  {
    id: 10,
    sentenceTemplate: "___ a quiet cinema showing 3D movies.",
    sentenceComplete: "There is a quiet cinema showing 3D movies.",
    sentenceEs: "Hay un cine tranquilo proyectando películas en 3D.",
    correctAnswer: "There is",
    countType: "singular",
    explanation: "'a quiet cinema' es singular (1 cine) ➔ Usa THERE IS!"
  },
  {
    id: 11,
    sentenceTemplate: "___ several wooden benches for people to rest.",
    sentenceComplete: "There are several wooden benches for people to rest.",
    sentenceEs: "Hay varias bancas de madera para que la gente descanse.",
    correctAnswer: "There are",
    countType: "plural",
    explanation: "'several wooden benches' es plural (varias bancas) ➔ Usa THERE ARE!"
  },
  {
    id: 12,
    sentenceTemplate: "___ a friendly pet shop with playful kittens.",
    sentenceComplete: "There is a friendly pet shop with playful kittens.",
    sentenceEs: "Hay una tienda de mascotas amigable con gatitos juguetones.",
    correctAnswer: "There is",
    countType: "singular",
    explanation: "'a friendly pet shop' es singular (1 tienda) ➔ Usa THERE IS!"
  },
  {
    id: 13,
    sentenceTemplate: "___ twenty clean cars parked in the lot.",
    sentenceComplete: "There are twenty clean cars parked in the lot.",
    sentenceEs: "Hay veinte autos limpios estacionados en el lote.",
    correctAnswer: "There are",
    countType: "plural",
    explanation: "'twenty clean cars' es plural (20 autos) ➔ Usa THERE ARE!"
  },
  {
    id: 14,
    sentenceTemplate: "___ an underground train station below the road.",
    sentenceComplete: "There is an underground train station below the road.",
    sentenceEs: "Hay una estación de metro subterránea debajo de la calle.",
    correctAnswer: "There is",
    countType: "singular",
    explanation: "'an underground train station' es singular (1 estación) ➔ Usa THERE IS!"
  }
];

let currentInspectorIndex = 0;

function loadInspectorPermit(index) {
  currentInspectorIndex = index;
  const p = buildingPermitsData[index];

  document.getElementById('inspectorCaseNum').textContent = `Permiso ${index + 1} de ${buildingPermitsData.length}`;
  document.getElementById('permitSentenceTarget').innerHTML = p.sentenceTemplate.replace(
    '___',
    `<span id="permitBlankSlot" class="permit-blank-slot">[ ? ]</span>`
  );
  document.getElementById('permitSentenceEs').textContent = p.sentenceEs;

  // Randomize stamps button order
  const stamps = [
    { text: "There is", isCorrect: p.correctAnswer === "There is", class: "btn-stamp-singular", icon: "🏢" },
    { text: "There are", isCorrect: p.correctAnswer === "There are", class: "btn-stamp-plural", icon: "🏬" }
  ].sort(() => Math.random() - 0.5);

  const stampsRow = document.getElementById('inspectorStampsRow');
  stampsRow.innerHTML = stamps.map(s => `
    <button class="btn-stamp-action ${s.class}" onclick="stampPermit(this, ${s.isCorrect}, '${s.text}', '${p.sentenceComplete.replace(/'/g, "\\'")}', '${p.explanation.replace(/'/g, "\\'")}')">
      <span>${s.icon}</span>
      <span>${s.text}</span>
    </button>
  `).join('');

  document.getElementById('inspectorFeedbackBox').innerHTML = '';
}

function stampPermit(btnEl, isCorrect, chosenText, sentenceComplete, explanation) {
  const blank = document.getElementById('permitBlankSlot');
  const feedback = document.getElementById('inspectorFeedbackBox');

  sfx.playStampThud();

  if (isCorrect) {
    sfx.playSuccess();

    if (blank) {
      blank.textContent = chosenText;
      blank.style.background = '#dcfce7';
      blank.style.borderColor = '#16a34a';
      blank.style.color = '#15803d';
    }

    feedback.innerHTML = `
      <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:14px; padding:12px 18px; color:#065f46; margin-top:16px;">
        <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">📜 ¡PERMISO MUNICIPAL APROBADO! (+15 pts)</div>
        <div style="font-size:1.05rem;">"${sentenceComplete}"</div>
        <div style="font-size:0.85rem; color:#047857; margin-top:6px; font-weight:600;">💡 Regla: ${explanation}</div>
      </div>
    `;
    AppState.addStars(15);
    speakEnglish(sentenceComplete, 'inspector');

    setTimeout(() => {
      if (currentInspectorIndex < buildingPermitsData.length - 1) {
        loadInspectorPermit(currentInspectorIndex + 1);
      }
    }, 1800);

  } else {
    sfx.playError();
    feedback.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#991b1b; font-weight:700; margin-top:14px;">
        ⚠️ ¡Sello denegado! Revisa si el sustantivo es Singular (1 solo) o Plural (2 o más).
      </div>
    `;
  }
}

function nextInspectorPermit() {
  sfx.playPop();
  currentInspectorIndex = (currentInspectorIndex + 1) % buildingPermitsData.length;
  loadInspectorPermit(currentInspectorIndex);
}

// ============================================================================
// ACTIVIDAD 3: PREPOSITION COMPASS GPS (BRÚJULA GPS DE POSICIONES)
// 10 retos de relaciones espaciales (between, next to, opposite, behind, in front of)
// ============================================================================
const gpsStreetChallenges = [
  {
    id: 0,
    sceneTag: "Street Corner A • Main Avenue",
    buildings: [
      { name: "Bakery", icon: "🥖", isTarget: false },
      { name: "Toy Store", icon: "🧸", isTarget: true },
      { name: "Library", icon: "📚", isTarget: false }
    ],
    promptEn: "The Toy Store is ___ the Bakery and the Library.",
    promptComplete: "The Toy Store is between the Bakery and the Library.",
    promptEs: "La juguetería está entre la panadería y la biblioteca.",
    correctAnswer: "between",
    options: ["between", "behind", "opposite", "in front of"],
    explanation: "Estar en medio de dos lugares se dice 'between' (entre ambos)!"
  },
  {
    id: 1,
    sceneTag: "Street Corner B • High Street",
    buildings: [
      { name: "Supermarket", icon: "🛒", isTarget: true },
      { name: "Pharmacy", icon: "💊", isTarget: false }
    ],
    promptEn: "The Supermarket is right ___ the Pharmacy.",
    promptComplete: "The Supermarket is right next to the Pharmacy.",
    promptEs: "El supermercado está justo al lado de la farmacia.",
    correctAnswer: "next to",
    options: ["next to", "between", "opposite", "under"],
    explanation: "Estar inmediatamente al lado se dice 'next to'!"
  },
  {
    id: 2,
    sceneTag: "Street Corner C • Park Road",
    buildings: [
      { name: "Cinema", icon: "🎬", isTarget: true },
      { name: "Central Park", icon: "🌳", isTarget: false }
    ],
    promptEn: "The Cinema is across the road, ___ the Central Park.",
    promptComplete: "The Cinema is across the road, opposite the Central Park.",
    promptEs: "El cine está al otro lado de la calle, enfrente del parque central.",
    correctAnswer: "opposite",
    options: ["opposite", "between", "behind", "under"],
    explanation: "Estar al frente o al otro lado de la calle se dice 'opposite'!"
  },
  {
    id: 3,
    sceneTag: "Street Corner D • Oak Street",
    buildings: [
      { name: "Fire Station", icon: "🚒", isTarget: false },
      { name: "Town Hall", icon: "🏛️", isTarget: true },
      { name: "Police Office", icon: "👮", isTarget: false }
    ],
    promptEn: "The Town Hall is located ___ the Fire Station and the Police Office.",
    promptComplete: "The Town Hall is located between the Fire Station and the Police Office.",
    promptEs: "El ayuntamiento está ubicado entre la estación de bomberos y la estación de policía.",
    correctAnswer: "between",
    options: ["between", "next to", "in front of", "under"],
    explanation: "En medio de dos edificios ➔ 'between'!"
  },
  {
    id: 4,
    sceneTag: "Street Corner E • Sunset Plaza",
    buildings: [
      { name: "Cozy Cafe", icon: "☕", isTarget: true },
      { name: "Flower Shop", icon: "💐", isTarget: false }
    ],
    promptEn: "The Cozy Cafe has tables outside, right ___ the Flower Shop.",
    promptComplete: "The Cozy Cafe has tables outside, right next to the Flower Shop.",
    promptEs: "El café acogedor tiene mesas afuera, justo al lado de la floristería.",
    correctAnswer: "next to",
    options: ["next to", "opposite", "behind", "between"],
    explanation: "Al lado contiguo ➔ 'next to'!"
  },
  {
    id: 5,
    sceneTag: "Street Corner F • Station Boulevard",
    buildings: [
      { name: "Bus Terminal", icon: "🚌", isTarget: true },
      { name: "Train Station", icon: "🚆", isTarget: false }
    ],
    promptEn: "Cross the street! The Bus Terminal is ___ the Train Station.",
    promptComplete: "Cross the street! The Bus Terminal is opposite the Train Station.",
    promptEs: "¡Cruza la calle! La terminal de autobuses está enfrente de la estación de tren.",
    correctAnswer: "opposite",
    options: ["opposite", "behind", "between", "next to"],
    explanation: "Cruzar la calle para estar enfrente ➔ 'opposite'!"
  },
  {
    id: 6,
    sceneTag: "Street Corner G • Market Square",
    buildings: [
      { name: "Pet Shop", icon: "🐶", isTarget: false },
      { name: "Ice Cream Parlor", icon: "🍨", isTarget: true },
      { name: "Bakery", icon: "🥖", isTarget: false }
    ],
    promptEn: "The Ice Cream Parlor is situated ___ the Pet Shop and the Bakery.",
    promptComplete: "The Ice Cream Parlor is situated between the Pet Shop and the Bakery.",
    promptEs: "La heladería está situada entre la tienda de mascotas y la panadería.",
    correctAnswer: "between",
    options: ["between", "in front of", "opposite", "under"],
    explanation: "En el medio de la tienda de mascotas y la panadería ➔ 'between'!"
  },
  {
    id: 7,
    sceneTag: "Street Corner H • Pine Avenue",
    buildings: [
      { name: "Music Store", icon: "🎸", isTarget: true },
      { name: "Bookstore", icon: "📖", isTarget: false }
    ],
    promptEn: "The Music Store shares a wall, sitting ___ the Bookstore.",
    promptComplete: "The Music Store shares a wall, sitting next to the Bookstore.",
    promptEs: "La tienda de música comparte pared, situada al lado de la librería.",
    correctAnswer: "next to",
    options: ["next to", "behind", "between", "opposite"],
    explanation: "Pared con pared / al lado ➔ 'next to'!"
  },
  {
    id: 8,
    sceneTag: "Street Corner I • River Walk",
    buildings: [
      { name: "Sports Arena", icon: "🏟️", isTarget: true },
      { name: "Swimming Pool", icon: "🏊‍♂️", isTarget: false }
    ],
    promptEn: "Across the river avenue, the Sports Arena is ___ the Swimming Pool.",
    promptComplete: "Across the river avenue, the Sports Arena is opposite the Swimming Pool.",
    promptEs: "Cruzando la avenida del río, el estadio deportivo está enfrente de la piscina.",
    correctAnswer: "opposite",
    options: ["opposite", "between", "next to", "behind"],
    explanation: "Al otro lado de la avenida ➔ 'opposite'!"
  },
  {
    id: 9,
    sceneTag: "Street Corner J • City Center",
    buildings: [
      { name: "Museum", icon: "🏛️", isTarget: false },
      { name: "Art Gallery", icon: "🎨", isTarget: true },
      { name: "Theater", icon: "🎭", isTarget: false }
    ],
    promptEn: "The Art Gallery is located ___ the Museum and the Theater.",
    promptComplete: "The Art Gallery is located between the Museum and the Theater.",
    promptEs: "La galería de arte está ubicada entre el museo y el teatro.",
    correctAnswer: "between",
    options: ["between", "next to", "behind", "under"],
    explanation: "Ubicado en medio de ambos centros culturales ➔ 'between'!"
  }
];

let currentGPSIndex = 0;

function loadGPSChallenge(index) {
  currentGPSIndex = index;
  const c = gpsStreetChallenges[index];

  document.getElementById('gpsStageBadge').textContent = `Ubicación ${index + 1} de ${gpsStreetChallenges.length}`;
  document.getElementById('gpsSceneTag').textContent = c.sceneTag;
  document.getElementById('gpsTargetPrompt').innerHTML = c.promptEn.replace(
    '___',
    `<span id="gpsBlankSlot" style="display:inline-block; min-width:90px; padding:2px 12px; background:#0284c7; border-radius:6px; color:#ffffff; font-weight:700;">[ ? ]</span>`
  );
  document.getElementById('gpsTargetPromptEs').textContent = c.promptEs;

  // Render visual scene buildings
  const buildingsBox = document.getElementById('gpsBuildingsScene');
  buildingsBox.innerHTML = c.buildings.map(b => `
    <div class="gps-building-card ${b.isTarget ? 'target-building' : ''}">
      <div style="font-size:2.2rem; margin-bottom:4px;">${b.icon}</div>
      <div style="font-family:var(--font-display); font-size:0.95rem; font-weight:700; color:#f8fafc;">${b.name}</div>
      ${b.isTarget ? '<div style="font-size:0.75rem; color:#fbbf24; font-weight:700;">Objetivo GPS 🎯</div>' : ''}
    </div>
  `).join('');

  // Randomize preposition buttons
  const shuffledOptions = [...c.options].sort(() => Math.random() - 0.5);

  const grid = document.getElementById('gpsPrepositionGrid');
  grid.innerHTML = shuffledOptions.map(opt => `
    <button class="gps-prep-btn" onclick="checkGPSPreposition(this, '${opt}', '${c.correctAnswer}', '${c.promptComplete.replace(/'/g, "\\'")}', '${c.explanation.replace(/'/g, "\\'")}')">
      <span style="font-family:var(--font-display); font-size:1.15rem; font-weight:700;">${opt}</span>
    </button>
  `).join('');

  document.getElementById('gpsFeedbackBox').innerHTML = '';
}

function checkGPSPreposition(btnEl, chosenOpt, correctOpt, promptComplete, explanation) {
  const blank = document.getElementById('gpsBlankSlot');
  const feedback = document.getElementById('gpsFeedbackBox');

  if (chosenOpt === correctOpt) {
    sfx.playGPSChime();
    sfx.playSuccess();
    btnEl.classList.add('correct');

    if (blank) {
      blank.textContent = chosenOpt;
      blank.style.background = '#10b981';
      blank.style.color = '#ffffff';
    }

    feedback.innerHTML = `
      <div style="background:rgba(16, 185, 129, 0.2); border:1px solid #10b981; border-radius:14px; padding:12px 18px; color:#34d399; margin-top:16px;">
        <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">🧭 ¡GPS SINCRONIZADO! (+20 pts)</div>
        <div style="font-size:1.05rem; color:#ffffff;">"${promptComplete}"</div>
        <div style="font-size:0.85rem; color:#a7f3d0; margin-top:6px;">💡 ${explanation}</div>
      </div>
    `;
    AppState.addStars(20);
    speakEnglish(promptComplete, 'guide');

    setTimeout(() => {
      if (currentGPSIndex < gpsStreetChallenges.length - 1) {
        loadGPSChallenge(currentGPSIndex + 1);
      }
    }, 1800);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong');
    setTimeout(() => btnEl.classList.remove('wrong'), 450);

    feedback.innerHTML = `
      <div style="background:rgba(239, 68, 68, 0.2); border:1px solid #ef4444; border-radius:14px; padding:10px 16px; color:#f87171; font-weight:700; margin-top:16px;">
        ⚠️ Posición incorrecta. Observa el orden de los edificios en la pantalla del GPS.
      </div>
    `;
  }
}

function nextGPSChallenge() {
  sfx.playPop();
  currentGPSIndex = (currentGPSIndex + 1) % gpsStreetChallenges.length;
  loadGPSChallenge(currentGPSIndex);
}

// ============================================================================
// ACTIVIDAD 4: "LET'S GO!" TOWN TOUR GUIDE (GUÍA TURÍSTICO CON MICRÓFONO)
// 8 sugerencias urbanas con Let's + Verbo Base y práctica oral
// ============================================================================
const tourGuidePromptsData = [
  {
    id: 0,
    sceneTag: "Tour Stop 1 • Central Park 🌳",
    targetPhrase: "It is sunny today! Let's ride our bicycles in the park.",
    phraseEs: "¡Está soleado hoy! Paseemos en bicicleta en el parque.",
    touristCheer: "Tourists say: Yes! Let's ride through the flowers! 🚲🌸"
  },
  {
    id: 1,
    sceneTag: "Tour Stop 2 • French Bakery 🥐",
    targetPhrase: "I am hungry! Let's buy warm croissants at the bakery.",
    phraseEs: "¡Tengo hambre! Compremos cruasanes calientes en la panadería.",
    touristCheer: "Tourists say: Delicious idea! Smells incredible! 🥖❤️"
  },
  {
    id: 2,
    sceneTag: "Tour Stop 3 • Rainy Day Cinema 🎬",
    targetPhrase: "It is raining outside. Let's watch a funny movie at the cinema.",
    phraseEs: "Está lloviendo afuera. Veamos una película divertida en el cine.",
    touristCheer: "Tourists cheer: Get the sweet popcorn ready! 🍿✨"
  },
  {
    id: 3,
    sceneTag: "Tour Stop 4 • Peaceful Library 📚",
    targetPhrase: "We have a science project. Let's study at the quiet library.",
    phraseEs: "Tenemos un proyecto de ciencias. Estudiemos en la biblioteca tranquila.",
    touristCheer: "Tourists whisper: Shh, let's read together! 📖🔬"
  },
  {
    id: 4,
    sceneTag: "Tour Stop 5 • Cheerful Pet Shop 🐶",
    targetPhrase: "Look at that cute puppy! Let's visit the colorful pet shop.",
    phraseEs: "¡Mira ese lindo cachorrito! Visitemos la tienda de mascotas.",
    touristCheer: "Tourists say: Aww! Such adorable kittens and pups! 🐾⭐"
  },
  {
    id: 5,
    sceneTag: "Tour Stop 6 • Fresh Supermarket 🛒",
    targetPhrase: "We need apples and juice. Let's shop at the big supermarket.",
    phraseEs: "Necesitamos manzanas y jugo. Compremos en el gran supermercado.",
    touristCheer: "Tourists say: Fresh fruit for everyone! 🍎🍊"
  },
  {
    id: 6,
    sceneTag: "Tour Stop 7 • Downtown Toy Store 🧸",
    targetPhrase: "Look at the model trains! Let's explore the toy store.",
    phraseEs: "¡Mira los trenes a escala! Exploremos la juguetería.",
    touristCheer: "Tourists cheer: Fantastic toys for our kids! 🚂🎉"
  },
  {
    id: 7,
    sceneTag: "Tour Stop 8 • Historic Town Hall 🏛️",
    targetPhrase: "Our tour is fantastic! Let's take a photo in front of town hall.",
    phraseEs: "¡Nuestro tour es fantástico! Tomémonos una foto frente al ayuntamiento.",
    touristCheer: "Tourists shout: CHEESE! Thank you guide! 📸🎆"
  }
];

let currentTourIndex = 0;
let isTourRecording = false;

function loadTourPrompt(index) {
  currentTourIndex = index;
  const t = tourGuidePromptsData[index];

  document.getElementById('tourStopBadge').textContent = `Parada ${index + 1} de ${tourGuidePromptsData.length}`;
  document.getElementById('tourSceneTag').textContent = t.sceneTag;
  document.getElementById('tourGuidePhrase').textContent = `"${t.targetPhrase}"`;
  document.getElementById('tourGuidePhraseEs').textContent = t.phraseEs;
  document.getElementById('touristCheerBox').innerHTML = `
    <span style="color:#0369a1; font-weight:600; font-size:0.9rem;">📢 Pasajeros del Bus: ${t.touristCheer}</span>
  `;
  document.getElementById('tourFeedback').innerHTML = '';

  speakEnglish(t.targetPhrase, 'tour');
}

function listenTourPhrase() {
  sfx.playBusHorn();
  const t = tourGuidePromptsData[currentTourIndex];
  speakEnglish(t.targetPhrase, 'tour');
}

function toggleTourMic() {
  const btn = document.getElementById('tourMicBtn');
  const feedback = document.getElementById('tourFeedback');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    sfx.playBusHorn();
    sfx.playApplause();
    feedback.innerHTML = `
      <div style="font-size:1.15rem; font-weight:700; color:#0284c7;">📢 ¡SUGERENCIA ANUNCIADA POR EL ALTAVOZ!</div>
      <span style="display:inline-block; margin-top:8px; background:#e0f2fe; color:#0369a1; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #7dd3fc;">
        👏 ¡Los turistas aplauden tu guía! +25 pts
      </span>
    `;
    AppState.addStars(25);
    return;
  }

  if (isTourRecording) return;

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isTourRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#ef4444; font-weight:700;">📢 ¡AL HABLA EL GUÍA! Haz tu sugerencia con "Let's..."</span>`;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      sfx.playBusHorn();
      sfx.playApplause();
      feedback.innerHTML = `
        <div style="font-size:1.05rem; font-weight:600; color:#0f172a;">Anunciaste: "<strong>${transcript}</strong>"</div>
        <span style="display:inline-block; margin-top:8px; background:#ecfdf5; color:#065f46; font-weight:700; padding:6px 18px; border-radius:999px; border:1px solid #10b981;">
          🚌 ¡Los turistas aceptan tu sugerencia con alegría! (+25 pts)
        </span>
      `;
      AppState.addStars(25);
    };

    recognition.onerror = () => {
      feedback.innerHTML = `<span style="color:#64748b;">Presiona el micrófono y vuelve a intentarlo.</span>`;
    };

    recognition.onend = () => {
      isTourRecording = false;
      btn.classList.remove('recording');
    };

    recognition.start();

  } catch (err) {
    btn.classList.remove('recording');
  }
}

function nextTourPrompt() {
  sfx.playPop();
  currentTourIndex = (currentTourIndex + 1) % tourGuidePromptsData.length;
  loadTourPrompt(currentTourIndex);
}

// ============================================================================
// INICIALIZACIÓN DE LA UNIDAD 6
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // 1. City Map
  loadCityMission(0);

  // 2. Building Inspector
  loadInspectorPermit(0);

  // 3. Preposition Compass GPS
  loadGPSChallenge(0);

  // 4. Tour Guide
  loadTourPrompt(0);
});
