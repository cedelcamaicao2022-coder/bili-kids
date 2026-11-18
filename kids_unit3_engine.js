/**
 * BILIKIDS KIDS CLUB - UNIT 3 ENGINE: FAVORITE PEOPLE
 * Age: 7-10 years (Cambridge Starters / Movers A1)
 * Brand New Activities: Family Tree Detective, Match & Link, Sentence Doctor, Talk Show Podcast
 */

// ============================================================================
// AUDIO SFX SYNTHESIZER
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
    osc.frequency.setValueAtTime(460, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(920, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playSuccess() {
    this.init();
    const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
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
    osc.frequency.setValueAtTime(240, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(170, this.ctx.currentTime + 0.18);
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

  playApplause() {
    this.init();
    // Ruido suave filtrado simulando aplausos en el talk show
    const bufferSize = this.ctx.sampleRate * 0.8;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.3));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();
  }
}

const sfx = new SoundEffects();

// ============================================================================
// NATIVE SPEECH SYNTHESIS ENGINE
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
    utterance.pitch = voiceType === 'host' ? 1.15 : voiceType === 'grandpa' ? 0.85 : voiceType === 'kid' ? 1.25 : 1.05;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Karen'))) 
                      || voices.find(v => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

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

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// ============================================================================
// APP STATE
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

function switchTab(tabKey, btn) {
  sfx.playPop();
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.activity-view').forEach(v => v.classList.remove('active-view'));

  if (btn) btn.classList.add('active');
  const targetView = document.getElementById(`view-${tabKey}`);
  if (targetView) targetView.classList.add('active-view');
}

// ============================================================================
// ACTIVITY 1: FAMILY TREE & DETECTIVE (FLIP CARDS)
// ============================================================================
const familyMembersData = [
  {
    id: 'grandfather', role: 'Grandfather', name: 'Robert', avatar: '👴',
    desc: "Carlos's father. He is seventy-two years old, wears glasses, and tells wonderful stories.",
    descEs: "",
    intro: "Hello! I am Robert, Maya's grandfather."
  },
  {
    id: 'grandmother', role: 'Grandmother', name: 'Elena', avatar: '👵',
    desc: "Carlos's mother. She has silver hair, is seventy years old, and loves baking warm cookies.",
    descEs: "",
    intro: "Hello! I am Elena, Maya's grandmother."
  },
  {
    id: 'father', role: 'Father', name: 'Carlos', avatar: '👨',
    desc: "Maya's father. He is forty-two, works as a smart architect, and designs modern houses.",
    descEs: "",
    intro: "Hi! I am Carlos, Maya's father."
  },
  {
    id: 'mother', role: 'Mother', name: 'Sofia', avatar: '👩',
    desc: "Maya's mother. She is forty years old and works as a kind doctor at the hospital.",
    descEs: "",
    intro: "Hello! I am Sofia, Maya's mother."
  },
  {
    id: 'brother', role: 'Brother', name: 'Leo', avatar: '👦',
    desc: "Maya's younger brother. He is seven years old, very energetic, and loves dinosaurs.",
    descEs: "",
    intro: "Hey! I am Leo, Maya's brother."
  },
  {
    id: 'sister', role: 'Sister', name: 'Maya', avatar: '👧',
    desc: "The main club explorer. She is nine years old and in fourth grade.",
    descEs: "",
    intro: "Hi! I am Maya. Welcome to my family tree!"
  },
  {
    id: 'baby', role: 'Baby Brother', name: 'Lucas', avatar: '👶',
    desc: "The youngest family member. He is only one year old and very playful.",
    descEs: "",
    intro: "Goo-goo! I am baby Lucas."
  },
  {
    id: 'uncle', role: 'Uncle', name: 'David', avatar: '🧔',
    desc: "Carlos's brother. He has a dark beard and plays the electric guitar.",
    descEs: "",
    intro: "What's up! I am Uncle David."
  },
  {
    id: 'aunt', role: 'Aunt', name: 'Laura', avatar: '👩‍🦰',
    desc: "Carlos's sister. She has reddish hair and is a creative landscape painter.",
    descEs: "",
    intro: "Hello! I am Aunt Laura."
  },
  {
    id: 'cousin', role: 'Cousin', name: 'Mia', avatar: '🧒',
    desc: "David's daughter. She is ten years old and practices gymnastics every day.",
    descEs: "",
    intro: "Hi! I am Mia, Maya's cousin."
  },
  {
    id: 'friend_boy', role: 'Best Friend', name: 'Alex', avatar: '👦',
    desc: "Maya's classmate. He is ten years old, funny, and plays basketball.",
    descEs: "",
    intro: "Hey there! I am Alex."
  },
  {
    id: 'friend_girl', role: 'Best Friend', name: 'Lily', avatar: '👧',
    desc: "Maya's friend. She is nine years old, smart, and reads science fiction books.",
    descEs: "",
    intro: "Hi! I am Lily, Maya's friend."
  }
];

const detectiveClues = [
  {
    targetId: 'uncle',
    title: "Case 1: The Mystery of the Vanished Cookies 🍪",
    clueEn: "Someone ate grandmother's chocolate cookies in the kitchen! The suspect has a dark beard and left an electric guitar pick on the table. Who is the cookie thief?",
    clueEs: "",
    hint: "Look for the card with: 'Carlos's brother... has a dark beard and plays the electric guitar.'"
  },
  {
    targetId: 'brother',
    title: "Case 2: The Green Dinosaur Footprint 🦕",
    clueEn: "A bright green footprint was painted on the living room wall! The suspect is very energetic, loves dinosaurs, and is Carlos's young seven-year-old son. Who left the footprint?",
    clueEs: "",
    hint: "Look for the card with: 'Maya's younger brother... seven years old, loves dinosaurs.'"
  },
  {
    targetId: 'grandfather',
    title: "Case 3: The Forgotten Silver Glasses 👓",
    clueEn: "A pair of reading glasses was left on the history encyclopedia. The suspect is seventy-two years old, has silver hair, and loves telling stories to his grandchildren. Who lost the glasses?",
    clueEs: "",
    hint: "Look for the card with: 'Carlos's father... seventy-two years old, wears glasses.'"
  },
  {
    targetId: 'mother',
    title: "Case 4: The Emergency Medical Bag 🩺",
    clueEn: "Someone rushed out early in the morning and took the medical bag to the children's hospital. The suspect is forty years old, very kind, and Carlos's wife. Who is the doctor?",
    clueEs: "",
    hint: "Look for the card with: 'Maya's mother... forty years old and works as a kind doctor.'"
  },
  {
    targetId: 'friend_boy',
    title: "Case 5: The Basketball in the Flowers 🏀",
    clueEn: "An orange basketball bounced into the garden and knocked down a flower pot! The suspect is ten years old, Maya's funny classmate, and plays basketball after school. Who threw the ball?",
    clueEs: "",
    hint: "Look for the card with: 'Maya's classmate... ten years old, funny, and plays basketball.'"
  },
  {
    targetId: 'aunt',
    title: "Case 6: The Sunset Painting on the Balcony 🎨",
    clueEn: "A fresh watercolor painting was left drying on the balcony with red paint drops. The suspect is Carlos's sister, thirty-six years old, and a creative landscape painter. Who is the artist?",
    clueEs: "",
    hint: "Look for the card with: 'Carlos's sister... reddish hair and creative landscape painter.'"
  },
  {
    targetId: 'cousin',
    title: "Case 7: The Treehouse Gymnastics Ribbon 🤸‍♀️",
    clueEn: "A shiny gymnastics ribbon was found tangled in the treehouse branch. The suspect is ten years old, David's daughter, and practices gymnastics every day. Who is the gymnast?",
    clueEs: "",
    hint: "Look for the card with: 'David's daughter... ten years old and practices gymnastics.'"
  },
  {
    targetId: 'grandmother',
    title: "Case 8: The Secret Cinnamon Cake Recipe 🍰",
    clueEn: "A handwritten cake recipe with cinnamon sugar was found on the counter. The suspect is Carlos's mother, seventy years old, and Maya's loving grandmother. Who wrote the secret recipe?",
    clueEs: "",
    hint: "Look for the card with: 'Carlos's mother... seventy years old, loves baking warm cookies.'"
  }
];

let currentClueIndex = 0;

function renderFamilyTree() {
  const grid = document.getElementById('familyTreeGrid');
  if (!grid) return;

  grid.innerHTML = familyMembersData.map((person, idx) => `
    <div class="mystery-flip-card" id="card-${person.id}">
      <div class="mystery-card-inner">
        
        <!-- FRENTE: CARTA OCULTA / EXPEDIENTE MISTERIOSO -->
        <div class="mystery-card-face mystery-card-front" onclick="flipDetectiveCard('${person.id}')">
          <span class="case-file-badge">📁 FILE #${idx + 1}</span>
          <div class="mystery-silhouette-avatar">🕵️‍♂️</div>
          <div class="mystery-question-title">Suspect #${idx + 1}</div>
          <span class="mystery-tap-hint">Tap to flip & read profile 🔄</span>
        </div>

        <!-- BACK: ENGLISH PROFILE -->
        <div class="mystery-card-face mystery-card-back">
          <div class="back-avatar">${person.avatar}</div>
          <div class="back-name">${person.name}</div>
          <div class="back-desc-en">"${person.desc}"</div>
          <div class="back-desc-es">${person.descEs}</div>
          <div class="back-actions">
            <button class="btn-flip-back" onclick="flipDetectiveCard('${person.id}')">🔄 Voltear</button>
            <button class="btn-solve-detective" onclick="confirmDetectiveTarget('${person.id}')">🎯 It's him/her!</button>
          </div>
        </div>

      </div>
    </div>
  `).join('');
}

function flipDetectiveCard(personId) {
  sfx.playPop();
  const targetCard = document.getElementById(`card-${personId}`);
  if (!targetCard) return;

  const isAlreadyFlipped = targetCard.classList.contains('is-flipped');

  // Automatically close any other open card
  document.querySelectorAll('.mystery-flip-card').forEach(c => {
    if (c !== targetCard) {
      c.classList.remove('is-flipped');
    }
  });

  if (!isAlreadyFlipped) {
    targetCard.classList.add('is-flipped');
  } else {
    targetCard.classList.remove('is-flipped');
  }
}

function loadDetectiveClue(index) {
  currentClueIndex = index;
  const clue = detectiveClues[index];

  const caseTitleEl = document.getElementById('clueCaseTitle');
  if (caseTitleEl) caseTitleEl.textContent = clue.title;

  document.getElementById('clueBadgeNum').textContent = `Caso ${index + 1} de ${detectiveClues.length}`;
  document.getElementById('clueTextEn').textContent = `"${clue.clueEn}"`;
  document.getElementById('clueTextEs').textContent = clue.clueEs;
  document.getElementById('clueFeedback').textContent = '';

  // Voltear todas las cartas al frente para el nuevo misterio
  document.querySelectorAll('.mystery-flip-card').forEach(c => {
    c.classList.remove('is-flipped', 'correct-target', 'wrong-target');
    const solveButton = c.querySelector('.btn-solve-detective');
    if (solveButton) solveButton.disabled = false;
  });

  speakEnglish(clue.clueEn, 'host');
}

function confirmDetectiveTarget(personId) {
  sfx.playPop();
  const clue = detectiveClues[currentClueIndex];
  const card = document.getElementById(`card-${personId}`);
  if (!card || card.classList.contains('correct-target')) return;

  if (personId === clue.targetId) {
    sfx.playSuccess();
    card.classList.add('correct-target');
    const solveButton = card.querySelector('.btn-solve-detective');
    if (solveButton) solveButton.disabled = true;
    AppState.addStars(20);

    const person = familyMembersData.find(p => p.id === personId);
    document.getElementById('clueFeedback').innerHTML = `
      <span style="color:#15803d; font-weight:700;">🌟 Case Solved! The suspect is ${person.name} (${person.role}). +20 pts</span>
    `;

    speakEnglish(`Case solved! The suspect is ${person.name}, the ${person.role}.`, 'host', () => {
      setTimeout(() => {
        if (currentClueIndex < detectiveClues.length - 1) {
          loadDetectiveClue(currentClueIndex + 1);
        } else {
          sfx.playFanfare();
          document.getElementById('clueFeedback').innerHTML = `
            <span style="color:#7c3aed; font-weight:700;">🎉 Congratulations Detective! You solved all mystery cases.</span>
          `;
        }
      }, 1400);
    });

  } else {
    sfx.playError();
    card.classList.add('wrong-target');
    
    // Flip card back if not suspect
    setTimeout(() => {
      card.classList.remove('wrong-target', 'is-flipped');
    }, 700);

    document.getElementById('clueFeedback').innerHTML = `
      <span style="color:#dc2626; font-weight:600;">❌ Does not match the clues for this case. Try checking another profile!</span>
    `;
  }
}

// ============================================================================
// ACTIVITY 2: MATCH & LINK (INTERACTIVE CONNECTIONS)
// ============================================================================
const matchRoundsData = [
  // Round 1: Pronouns vs Possessive Adjectives
  {
    title: "Round 1: Subject Pronoun ➔ Possessive Adjective",
    sub: "Match the pronoun with its correct possessive adjective",
    left: [
      { id: 'p1', text: 'I', matchId: 'm1' },
      { id: 'p2', text: 'You', matchId: 'm2' },
      { id: 'p3', text: 'He', matchId: 'm3' },
      { id: 'p4', text: 'She', matchId: 'm4' },
      { id: 'p5', text: 'We', matchId: 'm5' },
      { id: 'p6', text: 'They', matchId: 'm6' }
    ],
    right: [
      { id: 'm1', text: 'My', matchId: 'p1' },
      { id: 'm2', text: 'Your', matchId: 'p2' },
      { id: 'm3', text: 'His', matchId: 'p3' },
      { id: 'm4', text: 'Her', matchId: 'p4' },
      { id: 'm5', text: 'Our', matchId: 'p5' },
      { id: 'm6', text: 'Their', matchId: 'p6' }
    ]
  },
  // Round 2: Personality Traits
  {
    title: "Round 2: Person Description ➔ Personality Trait",
    sub: "Connect each description to its matching adjective",
    left: [
      { id: 't1', text: 'Always makes everyone laugh', matchId: 'a1' },
      { id: 't2', text: 'Solves complex math puzzles', matchId: 'a2' },
      { id: 't3', text: 'Shares toys and helps others', matchId: 'a3' },
      { id: 't4', text: 'Loves painting and creating art', matchId: 'a4' },
      { id: 't5', text: 'Feels quiet around new people', matchId: 'a5' },
      { id: 't6', text: 'Plays sports all afternoon', matchId: 'a6' }
    ],
    right: [
      { id: 'a1', text: 'Funny', matchId: 't1' },
      { id: 'a2', text: 'Smart', matchId: 't2' },
      { id: 'a3', text: 'Kind', matchId: 't3' },
      { id: 'a4', text: 'Creative', matchId: 't4' },
      { id: 'a5', text: 'Shy', matchId: 't5' },
      { id: 'a6', text: 'Energetic', matchId: 't6' }
    ]
  },
  // Round 3: Numbers 10 to 100
  {
    title: "Round 3: Number Digits ➔ English Words",
    sub: "Match the numbers to their English words",
    left: [
      { id: 'n1', text: '20', matchId: 'w1' },
      { id: 'n2', text: '30', matchId: 'w2' },
      { id: 'n3', text: '40', matchId: 'w3' },
      { id: 'n4', text: '50', matchId: 'w4' },
      { id: 'n5', text: '80', matchId: 'w5' },
      { id: 'n6', text: '100', matchId: 'w6' }
    ],
    right: [
      { id: 'w1', text: 'Twenty', matchId: 'n1' },
      { id: 'w2', text: 'Thirty', matchId: 'n2' },
      { id: 'w3', text: 'Forty', matchId: 'n3' },
      { id: 'w4', text: 'Fifty', matchId: 'n4' },
      { id: 'w5', text: 'Eighty', matchId: 'n5' },
      { id: 'w6', text: 'One hundred', matchId: 'n6' }
    ]
  }
];

let currentMatchRound = 0;
let selectedLeftItem = null;
let selectedRightItem = null;
let matchesFoundInRound = 0;

function loadMatchRound(roundIdx) {
  currentMatchRound = roundIdx;
  selectedLeftItem = null;
  selectedRightItem = null;
  matchesFoundInRound = 0;

  const round = matchRoundsData[roundIdx];
  document.getElementById('matchRoundTitle').textContent = round.title;
  document.getElementById('matchRoundSub').textContent = round.sub;
  document.getElementById('matchFeedback').textContent = '';

  const shuffledLeft = [...round.left].sort(() => Math.random() - 0.5);
  const shuffledRight = [...round.right].sort(() => Math.random() - 0.5);

  const leftCol = document.getElementById('matchLeftCol');
  const rightCol = document.getElementById('matchRightCol');

  leftCol.innerHTML = shuffledLeft.map(item => `
    <div class="match-item-card" id="card-${item.id}" onclick="selectLeftMatch('${item.id}', '${item.matchId}')">
      <span>${item.text}</span>
      <span style="font-size:0.9rem; opacity:0.5;">●</span>
    </div>
  `).join('');

  rightCol.innerHTML = shuffledRight.map(item => `
    <div class="match-item-card" id="card-${item.id}" onclick="selectRightMatch('${item.id}', '${item.matchId}')">
      <span style="font-size:0.9rem; opacity:0.5;">●</span>
      <span>${item.text}</span>
    </div>
  `).join('');
}

function selectLeftMatch(itemId, matchId) {
  sfx.playPop();
  document.querySelectorAll('#matchLeftCol .match-item-card').forEach(c => c.classList.remove('selected'));
  const card = document.getElementById(`card-${itemId}`);
  if (card.classList.contains('matched')) return;

  card.classList.add('selected');
  selectedLeftItem = { id: itemId, matchId };

  checkMatchPair();
}

function selectRightMatch(itemId, matchId) {
  sfx.playPop();
  document.querySelectorAll('#matchRightCol .match-item-card').forEach(c => c.classList.remove('selected'));
  const card = document.getElementById(`card-${itemId}`);
  if (card.classList.contains('matched')) return;

  card.classList.add('selected');
  selectedRightItem = { id: itemId, matchId };

  checkMatchPair();
}

function checkMatchPair() {
  if (!selectedLeftItem || !selectedRightItem) return;

  if (selectedLeftItem.matchId === selectedRightItem.id) {
    sfx.playSuccess();
    const leftCard = document.getElementById(`card-${selectedLeftItem.id}`);
    const rightCard = document.getElementById(`card-${selectedRightItem.id}`);

    leftCard.classList.remove('selected');
    rightCard.classList.remove('selected');

    leftCard.classList.add('matched');
    rightCard.classList.add('matched');

    AppState.addStars(10);
    matchesFoundInRound++;

    selectedLeftItem = null;
    selectedRightItem = null;

    if (matchesFoundInRound === matchRoundsData[currentMatchRound].left.length) {
      sfx.playFanfare();
      document.getElementById('matchFeedback').innerHTML = `
        <span style="color:#15803d; font-weight:700;">🌟 Round completed successfully! (+30 pts)</span>
      `;
      setTimeout(() => {
        if (currentMatchRound < matchRoundsData.length - 1) {
          loadMatchRound(currentMatchRound + 1);
        } else {
          loadMatchRound(0);
        }
      }, 1500);
    }
  } else {
    sfx.playError();
    const leftCard = document.getElementById(`card-${selectedLeftItem.id}`);
    const rightCard = document.getElementById(`card-${selectedRightItem.id}`);

    leftCard.classList.add('wrong-target');
    rightCard.classList.add('wrong-target');

    setTimeout(() => {
      leftCard.classList.remove('wrong-target', 'selected');
      rightCard.classList.remove('wrong-target', 'selected');
      selectedLeftItem = null;
      selectedRightItem = null;
    }, 600);
  }
}

// ============================================================================
// ACTIVIDAD 3: SENTENCE DOCTOR (CAZA-ERRORES GRAMATICAL)
// ============================================================================
const doctorCasesData = [
  {
    sentence: ["He", "is", "playing", "with", "she", "dog."],
    wrongIndex: 4,
    wrongWord: "she",
    prescriptionOptions: ["his", "her", "their"],
    correctFix: "his",
    translation: "He is playing with his dog.",
    explanation: "The possessive adjective for 'He' is 'his', not 'she'."
  },
  {
    sentence: ["Who", "are", "that", "tall", "boy?"],
    wrongIndex: 1,
    wrongWord: "are",
    prescriptionOptions: ["is", "am", "be"],
    correctFix: "is",
    translation: "Who is that tall boy?",
    explanation: "Because 'that tall boy' is singular, we use 'is'."
  },
  {
    sentence: ["They", "is", "my", "grandparents."],
    wrongIndex: 1,
    wrongWord: "is",
    prescriptionOptions: ["are", "am", "be"],
    correctFix: "are",
    translation: "They are my grandparents.",
    explanation: "The plural pronoun 'They' pairs with 'are'."
  },
  {
    sentence: ["Her", "name", "are", "Sophia."],
    wrongIndex: 2,
    wrongWord: "are",
    prescriptionOptions: ["is", "am", "be"],
    correctFix: "is",
    translation: "Her name is Sophia.",
    explanation: "'Her name' is singular, so it takes 'is'."
  },
  {
    sentence: ["This", "is", "my", "father.", "She", "is", "forty."],
    wrongIndex: 4,
    wrongWord: "She",
    prescriptionOptions: ["He", "His", "They"],
    correctFix: "He",
    translation: "This is my father. He is forty.",
    explanation: "Refer to 'father' using the masculine pronoun 'He'."
  },
  {
    sentence: ["We", "love", "they", "new", "house."],
    wrongIndex: 2,
    wrongWord: "they",
    prescriptionOptions: ["their", "our", "his"],
    correctFix: "their",
    translation: "We love their new house.",
    explanation: "The possessive adjective for 'they' is 'their'."
  },
  {
    sentence: ["Alex", "has", "two", "cats.", "It", "are", "cute."],
    wrongIndex: 4,
    wrongWord: "It",
    prescriptionOptions: ["They", "He", "She"],
    correctFix: "They",
    translation: "Alex has two cats. They are cute.",
    explanation: "For plural animals (two cats), use 'They', not 'It'."
  },
  {
    sentence: ["Are", "your", "brother", "friendly?"],
    wrongIndex: 0,
    wrongWord: "Are",
    prescriptionOptions: ["Is", "Am", "Do"],
    correctFix: "Is",
    translation: "Is your brother friendly?",
    explanation: "'Your brother' is singular (he), so the question starts with 'Is'."
  },
  {
    sentence: ["Whose", "sister", "is", "he?"],
    wrongIndex: 3,
    wrongWord: "he?",
    prescriptionOptions: ["she?", "her?", "they?"],
    correctFix: "she?",
    translation: "Whose sister is she?",
    explanation: "'Sister' is feminine, so use the pronoun 'she'."
  },
  {
    sentence: ["My", "parents", "is", "seventy", "years", "old."],
    wrongIndex: 2,
    wrongWord: "is",
    prescriptionOptions: ["are", "am", "be"],
    correctFix: "are",
    translation: "My parents are seventy years old.",
    explanation: "'My parents' is plural, so we use 'are'."
  },
  {
    sentence: ["David", "is", "a", "very", "friend", "person."],
    wrongIndex: 4,
    wrongWord: "friend",
    prescriptionOptions: ["friendly", "friendship", "friends"],
    correctFix: "friendly",
    translation: "David is a very friendly person.",
    explanation: "The descriptive adjective is 'friendly'."
  },
  {
    sentence: ["They", "are", "eighty", "year", "old."],
    wrongIndex: 3,
    wrongWord: "year",
    prescriptionOptions: ["years", "yearly", "age"],
    correctFix: "years",
    translation: "They are eighty years old.",
    explanation: "For numbers greater than 1, use the plural form 'years old'."
  },
  {
    sentence: ["Our", "teacher", "are", "very", "smart."],
    wrongIndex: 2,
    wrongWord: "are",
    prescriptionOptions: ["is", "am", "be"],
    correctFix: "is",
    translation: "Our teacher is very smart.",
    explanation: "'Our teacher' is singular, so it takes 'is'."
  },
  {
    sentence: ["She", "cat", "is", "sleeping", "on", "the", "sofa."],
    wrongIndex: 0,
    wrongWord: "She",
    prescriptionOptions: ["Her", "His", "Their"],
    correctFix: "Her",
    translation: "Her cat is sleeping on the couch.",
    explanation: "The possessive for female singular is 'Her' (Her cat)."
  },
  {
    sentence: ["I", "love", "my", "family", "because", "they", "is", "kind."],
    wrongIndex: 6,
    wrongWord: "is",
    prescriptionOptions: ["are", "am", "be"],
    correctFix: "are",
    translation: "I love my family because they are kind.",
    explanation: "The pronoun 'they' always agrees with 'are'."
  }
];

let currentDoctorCaseIndex = 0;
let spottedWord = null;

function loadDoctorCase(index) {
  currentDoctorCaseIndex = index;
  spottedWord = null;

  const caseData = doctorCasesData[index];
  document.getElementById('doctorCaseCounter').textContent = `Clinic Case ${index + 1} of ${doctorCasesData.length}`;
  document.getElementById('doctorSentenceEs').textContent = `"${caseData.translation}"`;
  document.getElementById('doctorFeedback').textContent = '';
  document.getElementById('doctorCorrectionPanel').style.display = 'none';

  const sentenceWrap = document.getElementById('doctorSentenceWrap');
  sentenceWrap.innerHTML = caseData.sentence.map((word, wIdx) => `
    <button class="doctor-word-chip" id="doc-chip-${wIdx}" onclick="diagnoseWord(${wIdx})">${word}</button>
  `).join('');
}

function diagnoseWord(wordIndex) {
  sfx.playPop();
  const caseData = doctorCasesData[currentDoctorCaseIndex];
  const chip = document.getElementById(`doc-chip-${wordIndex}`);

  if (wordIndex === caseData.wrongIndex) {
    sfx.playSuccess();
    chip.classList.add('wrong-spotted');
    spottedWord = wordIndex;

    const panel = document.getElementById('doctorCorrectionPanel');
    panel.style.display = 'block';
    document.getElementById('doctorPrescriptionDesc').textContent = `You diagnosed the error in "${caseData.wrongWord}"! Which correct word cures it?`;

    // Shuffle correction options
    const shuffledOptions = [...caseData.prescriptionOptions].sort(() => Math.random() - 0.5);
    document.getElementById('doctorOptionsRow').innerHTML = shuffledOptions.map(opt => `
      <button class="doctor-fix-btn" onclick="applyCorrection('${opt}')">${opt}</button>
    `).join('');

  } else {
    sfx.playError();
    chip.style.borderColor = '#ef4444';
    setTimeout(() => chip.style.borderColor = '#e2e8f0', 500);
  }
}

function applyCorrection(chosenWord) {
  const caseData = doctorCasesData[currentDoctorCaseIndex];

  if (chosenWord === caseData.correctFix) {
    sfx.playSuccess();
    const chip = document.getElementById(`doc-chip-${caseData.wrongIndex}`);
    chip.textContent = chosenWord;
    chip.className = 'doctor-word-chip fixed-chip';

    document.getElementById('doctorCorrectionPanel').style.display = 'none';
    document.getElementById('doctorFeedback').innerHTML = `
      <span style="color:#15803d; font-weight:700;">💊 Cured successfully! +15 pts. ${caseData.explanation}</span>
    `;
    AppState.addStars(15);

    // Speak corrected sentence
    const correctedSentence = caseData.sentence.map((w, idx) => idx === caseData.wrongIndex ? chosenWord : w).join(' ');
    speakEnglish(correctedSentence, 'kid', () => {
      setTimeout(() => {
        if (currentDoctorCaseIndex < doctorCasesData.length - 1) {
          loadDoctorCase(currentDoctorCaseIndex + 1);
        } else {
          sfx.playFanfare();
          loadDoctorCase(0);
        }
      }, 1500);
    });

  } else {
    sfx.playError();
  }
}

// ============================================================================
// ACTIVIDAD 4: TALK SHOW PODCAST SIMULATOR
// ============================================================================
const podcastInterviewsData = [
  {
    hostQuestion: "Welcome to Bilikids Talk Show! Tell our audience: who is your favorite person in your family?",
    hostEs: "",
    suggestedAnswer: "My mother is my favorite person. Her name is Sofia and she is very kind.",
    suggestedEs: ""
  },
  {
    hostQuestion: "That's lovely! And what is your best friend like? Is he or she funny?",
    hostEs: "",
    suggestedAnswer: "His name is Alex. He is ten years old and he is very funny!",
    suggestedEs: ""
  },
  {
    hostQuestion: "How old are your grandparents? Do they live in your city?",
    hostEs: "",
    suggestedAnswer: "They are seventy years old and they are very loving grandparents.",
    suggestedEs: ""
  },
  {
    hostQuestion: "Do you have any brothers or sisters? What are their names?",
    hostEs: "",
    suggestedAnswer: "Yes! I have a younger brother. His name is Leo and he is seven.",
    suggestedEs: ""
  },
  {
    hostQuestion: "Who is the most creative person in your whole family?",
    hostEs: "",
    suggestedAnswer: "My Aunt Laura is very creative. She paints wonderful pictures.",
    suggestedEs: ""
  },
  {
    hostQuestion: "To wrap up our interview: why is friendship so important to you?",
    hostEs: "",
    suggestedAnswer: "Because good friends are always loyal, helpful, and fun to be with!",
    suggestedEs: ""
  }
];

let currentPodcastIndex = 0;
let isPodcastRecording = false;

function loadPodcastInterview(index) {
  currentPodcastIndex = index;
  const interview = podcastInterviewsData[index];
  document.getElementById('podcastMicBtn').disabled = false;

  document.getElementById('podcastEpisodeNum').textContent = `Entrevista ${index + 1} de ${podcastInterviewsData.length}`;
  document.getElementById('podcastHostQuestion').textContent = interview.hostQuestion;
  document.getElementById('podcastHostQuestionEs').textContent = interview.hostEs;
  document.getElementById('podcastTargetPhrase').textContent = `"${interview.suggestedAnswer}"`;
  document.getElementById('podcastTargetEs').textContent = interview.suggestedEs;
  document.getElementById('podcastFeedback').innerHTML = '';

  speakEnglish(interview.hostQuestion, 'host');
}

function listenHostQuestion() {
  sfx.playPop();
  const q = podcastInterviewsData[currentPodcastIndex].hostQuestion;
  speakEnglish(q, 'host');
}

function listenAnswerSample() {
  sfx.playPop();
  const a = podcastInterviewsData[currentPodcastIndex].suggestedAnswer;
  speakEnglish(a, 'kid');
}

function togglePodcastMic() {
  const btn = document.getElementById('podcastMicBtn');
  const feedback = document.getElementById('podcastFeedback');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    feedback.innerHTML = `
      <div style="font-size:1.1rem; font-weight:700; color:#db2777;">🎙️ This browser cannot verify your voice.</div>
      <span style="display:inline-block; margin-top:6px; background:#dcfce7; color:#15803d; font-weight:700; padding:6px 16px; border-radius:999px;">
        Practice mode. Listen to native audio and reply aloud.
      </span>
    `;
    btn.disabled = true;
    return;
  }

  if (isPodcastRecording) return;

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isPodcastRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#ec4899; font-weight:700;">You are live on the Podcast! Speak now 🎙️</span>`;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      feedback.innerHTML = `
        <div style="font-size:1.05rem; font-weight:600; color:#0f172a;">Respondiste: "<strong>${transcript}</strong>"</div>
        <span style="display:inline-block; margin-top:6px; background:#fdf2f8; color:#db2777; font-weight:700; padding:6px 16px; border-radius:999px; border:1px solid #fbcfe8;">
          🎙️ Live practice transcript.
        </span>
      `;
    };

    recognition.onerror = () => {
      feedback.innerHTML = `<span style="color:#64748b;">Tap the microphone to try again.</span>`;
    };

    recognition.onend = () => {
      isPodcastRecording = false;
      btn.classList.remove('recording');
    };

    recognition.start();

  } catch (err) {
    btn.classList.remove('recording');
  }
}

function nextPodcastInterview() {
  sfx.playPop();
  currentPodcastIndex = (currentPodcastIndex + 1) % podcastInterviewsData.length;
  loadPodcastInterview(currentPodcastIndex);
}

// ============================================================================
// UNIT 3 INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // 1. Family Tree
  renderFamilyTree();
  loadDetectiveClue(0);

  // 2. Match & Link
  loadMatchRound(0);

  // 3. Sentence Doctor
  loadDoctorCase(0);

  // 4. Talk Show Podcast
  loadPodcastInterview(0);
});
