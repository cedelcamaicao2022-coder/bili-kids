/**
 * Bilikids Adventure - Toddlers 01 Comprehensive Curriculum Engine
 * 15 Units with Rich, Creative, Varied Interactive Gameplay Mechanics:
 * - Bubble Pop Rush (Floating animated bubbles)
 * - 3D Flip Card Memory Match
 * - Interactive Scene Sorting Trays
 * - Phonics Mystery Box Shaker
 * - Shadow & Silhouette Detective
 * - Sentence Puzzle Train Wagons
 * - Toddler Virtual On-Screen Keyboard
 * - Parrot Echo Voice Studio with Pitch-Playback
 * - 15 Verified Video Lessons + Interactive Animated Song Theater
 * - 12-Level Progressive Arcade Game
 * - 10-Step Final Integrative Challenge & Bilikids Diploma
 */

// 15 Verified, embeddable YouTube Videos for each Toddler Unit
const VERIFIED_UNIT_VIDEOS = {
  1: { id: "g7kK989HiRQ", title: "School Supplies Song | Talking Flashcards", lyrics: "Pencil, Pen, Book, Eraser, Scissors, Crayon! In my school bag every day!" },
  2: { id: "tVlcKp3bWH8", title: "Hello! Greeting Song & Feelings | Super Simple", lyrics: "Hello, hello, how are you? I'm good, I'm great, I'm wonderful!" },
  3: { id: "YJyNoFkud6g", title: "Finger Family Song | Daddy & Mommy Finger", lyrics: "Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?" },
  4: { id: "WX8HmogNyCY", title: "Head Shoulders Knees & Toes | Super Simple", lyrics: "Head, shoulders, knees and toes, knees and toes! And eyes and ears and mouth and nose!" },
  5: { id: "rD6FRDd9Hew", title: "How's The Weather? | Super Simple Songs", lyrics: "How's the weather? Is it sunny? Is it cloudy? Is it rainy? Is it snowy?" },
  6: { id: "_6HzoUcx3eo", title: "Old MacDonald Had A Farm | Super Simple Songs", lyrics: "Old MacDonald had a farm, E-I-E-I-O! And on that farm he had a cow, moo moo!" },
  7: { id: "frN3nvhIHUk", title: "Do You Like Broccoli Ice Cream? | Super Simple", lyrics: "Do you like broccoli? Yes, I do! Do you like ice cream? Yes, I do!" },
  8: { id: "eUXkj6j6Ezw", title: "Wake Up Daily Routines Song for Kids", lyrics: "This is the way we wash our face, brush our teeth, and put on our clothes!" },
  9: { id: "GoSq-yZcJ-4", title: "Walking In The Jungle & Animal Play | Super Simple", lyrics: "Walking in the jungle, walking in the jungle, we're not afraid, we're not afraid!" },
  10: { id: "e_04ZrNroTo", title: "The Wheels on the Bus Through Town | CoComelon", lyrics: "The wheels on the bus go round and round, all through the town!" },
  11: { id: "yCjJyiqpAuU", title: "Twinkle Twinkle Little Star & Nature | Super Simple", lyrics: "Twinkle, twinkle, little star, how I wonder what you are! Up above the world so high!" },
  12: { id: "OEbRDtCAFdU", title: "Vehicle Shapes and Sounds | The Singing Walrus", lyrics: "Cars go beep beep, trains go choo choo, airplanes fly high in the blue sky!" },
  13: { id: "XqZsoesa55w", title: "Baby Shark Ocean Animals | Pinkfong Songs", lyrics: "Baby shark, doo-doo, doo-doo! Sea turtle swimming in the sea!" },
  14: { id: "RNUZBHlRH4Y", title: "Open Shut Them (Toy & Action Song) | Super Simple", lyrics: "Open, shut them, open, shut them, give a little clap, clap, clap!" },
  15: { id: "l4WNrvVjiTw", title: "If You're Happy and You Know It | Super Simple", lyrics: "If you're happy and you know it, clap your hands! Be helpful and say thank you!" }
};

const TODDLER_VIDEO_RECALL = {
  1: { question: 'Which item belongs in a school bag?', options: ['A book', 'A banana', 'A pillow'], correct: 0 },
  2: { question: 'Which greeting did you hear?', options: ['Hello, how are you?', 'Good night, goodbye', 'Where is my shoe?'], correct: 0 },
  3: { question: 'Who is in the finger family song?', options: ['Daddy finger', 'Baby shark', 'Farmer Leo'], correct: 0 },
  4: { question: 'Which body parts are named in the song?', options: ['Head, shoulders, knees and toes', 'Wings, tail and paws', 'Wheels, doors and seats'], correct: 0 },
  5: { question: 'Which weather words are in the song?', options: ['Sunny and rainy', 'Hungry and sleepy', 'Fast and slow'], correct: 0 },
  6: { question: 'Which animal is on Old MacDonald’s farm?', options: ['A cow', 'A shark', 'A penguin'], correct: 0 },
  7: { question: 'Which two foods are named in the song?', options: ['Broccoli and ice cream', 'Rice and soup', 'Apples and bread'], correct: 0 },
  8: { question: 'What does the song say to do first?', options: ['Wash your face', 'Ride a bus', 'Feed a cow'], correct: 0 },
  9: { question: 'What are the characters doing in the jungle?', options: ['Walking', 'Sleeping in class', 'Cooking dinner'], correct: 0 },
  10: { question: 'What do the bus wheels do?', options: ['Go round and round', 'Fly up high', 'Swim in the sea'], correct: 0 },
  11: { question: 'Where is the little star?', options: ['Up above the world', 'Under the bed', 'Inside a school bag'], correct: 0 },
  12: { question: 'What sound does the train make?', options: ['Choo choo', 'Moo moo', 'Quack quack'], correct: 0 },
  13: { question: 'Which animal swims in the ocean song?', options: ['A sea turtle', 'A farm cow', 'A little lamb'], correct: 0 },
  14: { question: 'What do we do after opening and closing our hands?', options: ['Give a little clap', 'Brush our teeth', 'Turn the page'], correct: 0 },
  15: { question: 'What do you do when you are happy?', options: ['Clap your hands', 'Hide your shoes', 'Close your book'], correct: 0 }
};

class ToddlersUnitsEngine {
  constructor() {
    this.currentUnitId = 1;
    this.currentTab = 'explore'; // 'explore', 'listening', 'reading', 'writing', 'speaking', 'videos', 'game', 'finalChallenge', 'progress'
    this.currentActivityIndex = 0; // 0 to 5
    this.currentExerciseIndex = 0; // 0 to 4
    this.currentGameLevel = 1; // 1 to 12
    this.currentChallengeStep = 0; // 0 to 9

    // Audio recording state
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.recordedAudioUrl = null;
    this.isRecording = false;

    // Interactive construction state
    this.selectedLetters = [];
    this.memoryFlippedCards = [];
    this.memoryMatchedCount = 0;
    this.videoMode = 'youtube'; // 'youtube' or 'theater'
    try {
      this.videoRecallCompleteUnits = new Set(JSON.parse(localStorage.getItem('bili_toddler_video_recall') || '[]'));
    } catch (e) {
      this.videoRecallCompleteUnits = new Set();
    }

    // LocalStorage Key
    this.storageKey = 'bilikids_toddlers_progress_v2';
    this.userProgress = this.loadProgress();
  }

  renderVisual(iconOrText, context = '') {
    if (typeof window !== 'undefined' && window.bilikidsRenderIcon) {
      return window.bilikidsRenderIcon(iconOrText, context);
    }
    return iconOrText || '✨';
  }

  /* ==========================================================================
     INITIALIZATION & URL ROUTING
     ========================================================================== */
  init() {
    console.log('[ToddlersUnitsEngine] Initializing with rich interactive mechanics...');

    const urlParams = new URLSearchParams(window.location.search);
    const unitParam = urlParams.get('unit');
    if (unitParam) {
      const parsedId = parseInt(unitParam, 10);
      if (parsedId >= 1 && parsedId <= 15) {
        this.currentUnitId = parsedId;
      }
    }

    const tabParam = urlParams.get('tab');
    if (tabParam && ['explore', 'listening', 'reading', 'writing', 'speaking', 'videos', 'game', 'finalChallenge', 'progress'].includes(tabParam)) {
      this.currentTab = tabParam;
    }

    const actParam = urlParams.get('act') || urlParams.get('activity');
    if (actParam !== null) {
      const parsedAct = parseInt(actParam, 10);
      if (!isNaN(parsedAct) && parsedAct >= 0 && parsedAct <= 5) {
        this.currentActivityIndex = parsedAct;
      }
    }

    this.renderUnitsSelector();
    this.renderHeader();
    this.renderTabs();
    this.renderWorkspace();

    const levelParam = urlParams.get('level');
    if (levelParam && this.currentTab === 'game') {
      const parsedLevel = parseInt(levelParam, 10);
      if (parsedLevel >= 1 && parsedLevel <= 12) {
        setTimeout(() => this.playGameLevel(parsedLevel), 120);
      }
    }
  }

  getUnitActivities(unit, skillName) {
    if (!unit) return [];
    if (unit[skillName] && Array.isArray(unit[skillName])) return unit[skillName];
    if (unit.skills && unit.skills[skillName] && Array.isArray(unit.skills[skillName])) return unit.skills[skillName];
    return [];
  }

  getCurrentUnit() {
    const allUnits = window.TODDLERS_ALL_UNITS || [];
    return allUnits.find(u => u.id === this.currentUnitId) || allUnits[0] || null;
  }

  /* ==========================================================================
     LOCAL STORAGE & PROGRESS TRACKING
     ========================================================================== */
  loadProgress() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('Could not load toddlers progress:', e);
    }
    return {
      totalStars: 100,
      units: {}
    };
  }

  saveProgress() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.userProgress));
      this.updateScoreDisplay();
    } catch (e) {
      console.warn('Could not save toddlers progress:', e);
    }
  }

  getUnitProgress(unitId) {
    if (!this.userProgress.units[unitId]) {
      this.userProgress.units[unitId] = {
        listening: [0, 0, 0, 0, 0, 0],
        reading: [0, 0, 0, 0, 0, 0],
        writing: [0, 0, 0, 0, 0, 0],
        speaking: [0, 0, 0, 0, 0, 0],
        gameUnlockedLevel: 1,
        gameLevelsStars: {},
        challengeCompleted: false,
        stars: 0
      };
    }
    return this.userProgress.units[unitId];
  }

  addStars(amount) {
    this.userProgress.totalStars = (this.userProgress.totalStars || 0) + amount;
    const uProg = this.getUnitProgress(this.currentUnitId);
    uProg.stars = (uProg.stars || 0) + amount;
    this.saveProgress();
  }

  updateScoreDisplay() {
    const scoreElem = document.getElementById('toddlerScoreDisplay');
    if (scoreElem) {
      scoreElem.innerHTML = `<span>${this.userProgress.totalStars || 100} ⭐</span><span class="score-label">Super Toddler</span>`;
    }
  }

  /* ==========================================================================
     AUDIO PLAYBACK & SPEECH UTILITIES (ELEVENLABS STUDIO + SPEECH SYNTHESIS)
     ========================================================================== */
  escapeHtmlAttr(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  playAudio(text, voice = 'kid') {
    if (!text || typeof text !== 'string') return;

    const manifest = window.ToddlersAudioManifest || window.BilikidsAudioManifest || {};
    
    // Priority candidates for manifest audio lookup
    const candidates = [];
    const rawTrim = text.trim();
    candidates.push(rawTrim);
    candidates.push(rawTrim.toLowerCase());

    // 1. Standard alphanumeric normalizations
    const normKey = rawTrim.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
    const noSpaceKey = normKey.replace(/\s+/g, '');
    candidates.push(normKey, noSpaceKey);

    // 2. Clean quotes, emojis, parentheticals, blanks, arrows
    const cleaned = rawTrim
      .replace(/['"`«»]/g, '')
      .replace(/\([^)]*\)/g, '')
      .replace(/➔.*/g, '')
      .replace(/_+/g, '')
      .trim();
    const normC = cleaned.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
    const noSpaceC = normC.replace(/\s+/g, '');
    candidates.push(normC, noSpaceC);

    // 3. Strip command prefixes (Read:, Find:, Complete:, Tap:, Choose:, Listen:, Follow instruction:, etc.)
    const stripped = cleaned.replace(/^(read|find|complete|listen|say|repeat|tap|choose|follow instruction)\s*:?\s*/i, '').trim();
    const normS = stripped.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
    const noSpaceS = normS.replace(/\s+/g, '');
    candidates.push(normS, noSpaceS);

    let audioSrc = null;
    for (const c of candidates) {
      if (c && manifest[c]) {
        audioSrc = manifest[c];
        break;
      }
    }

    if (audioSrc) {
      try {
        if ('speechSynthesis' in window) {
          try { window.speechSynthesis.cancel(); } catch (e) {}
        }
        if (this._currentAudio) {
          this._currentAudio.pause();
          this._currentAudio.currentTime = 0;
        }
        const audio = new Audio(audioSrc);
        this._currentAudio = audio;
        audio.playbackRate = 1.0;
        console.log('[ToddlersAudio] Playing Studio MP3:', audioSrc, 'for text:', text);
        audio.play().catch((err) => {
          console.warn('[ToddlersAudio] HTML5 audio.play() blocked or aborted:', err);
        });
        return;
      } catch (e) {
        console.warn('[ToddlersAudio] Audio error:', e);
      }
    }

    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(stripped || cleaned || text, voice);
    } else {
      this.fallbackSpeechSynthesis(stripped || cleaned || text);
    }
  }

  fallbackSpeechSynthesis(text) {
    if (this._currentAudio && !this._currentAudio.paused && !this._currentAudio.ended) {
      console.warn('[ToddlersAudio] Speech synthesis skipped because studio audio is currently playing.');
      return;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = 0.85;
        window.speechSynthesis.speak(u);
      } catch (err) {}
    }
  }

  playCheerSound() {
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    const cheers = [
      'assets/audio/cheer_great_job.mp3',
      'assets/audio/cheer_awesome.mp3',
      'assets/audio/cheer_super.mp3',
      'assets/audio/cheer_you_did_it.mp3'
    ];
    const randCheer = cheers[Math.floor(Math.random() * cheers.length)];
    try {
      const a = new Audio(randCheer);
      a.volume = 0.8;
      a.play().catch(() => {});
    } catch (e) {}
  }

  /* ==========================================================================
     RENDER: 15-UNIT SELECTOR
     ========================================================================== */
  renderUnitsSelector() {
    const navElem = document.getElementById('toddlerUnitsNav');
    if (!navElem) return;

    const allUnits = window.TODDLERS_ALL_UNITS || [];
    const currentUnit = this.getCurrentUnit();
    let html = `
      <div class="toddler-units-selector-wrap" style="width:100%;">
        <div class="toddler-units-selector-header">
          <span class="toddler-units-selector-title">
            🎒 Unidad ${this.currentUnitId} • ${currentUnit?.title || 'Toddlers'}
          </span>
          <button class="toddler-units-toggle" id="toddlerUnitsToggle" type="button" aria-expanded="false" aria-controls="toddlerUnitsList" onclick="toddlersEngine.toggleUnitsSelector()">Cambiar unidad <span aria-hidden="true">⌄</span></button>
        </div>
        <div class="toddler-units-nav" id="toddlerUnitsList" hidden>
    `;

    allUnits.forEach(u => {
      const activeClass = (u.id === this.currentUnitId) ? 'active' : '';
      const uProg = this.getUnitProgress(u.id);
      const stars = uProg.stars > 0 ? `⭐${uProg.stars}` : '';
      html += `
        <button class="toddler-nav-pill ${activeClass}" onclick="toddlersEngine.switchUnit(${u.id})">
          <span class="unit-num-badge">U${u.id}</span>
          <span>${u.icon || '📘'}</span>
          <span>${u.title}</span>
          ${stars ? `<span style="font-size:0.75rem; color:#f59e0b;">${stars}</span>` : ''}
        </button>
      `;
    });

    html += `
        </div>
      </div>
    `;

    navElem.innerHTML = html;
  }

  toggleUnitsSelector() {
    const list = document.getElementById('toddlerUnitsList');
    const toggle = document.getElementById('toddlerUnitsToggle');
    if (!list || !toggle) return;

    const isOpen = list.hidden;
    list.hidden = !isOpen;
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.innerHTML = `${isOpen ? 'Ocultar unidades' : 'Cambiar unidad'} <span aria-hidden="true">${isOpen ? '⌃' : '⌄'}</span>`;
  }

  switchUnit(unitId) {
    this.currentUnitId = unitId;
    this.currentActivityIndex = 0;
    this.currentExerciseIndex = 0;
    this.currentChallengeStep = 0;
    this.selectedLetters = [];

    const url = new URL(window.location.href);
    url.searchParams.set('unit', unitId);
    window.history.replaceState({}, '', url.toString());

    this.renderUnitsSelector();
    this.renderHeader();
    this.renderTabs();
    this.renderWorkspace();

    document.getElementById('toddlerWorkspace')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ==========================================================================
     RENDER: HEADER
     ========================================================================== */
  renderHeader() {
    const unit = this.getCurrentUnit();
    if (!unit) return;

    const tagElem = document.getElementById('toddlerUnitTag');
    const titleElem = document.getElementById('toddlerUnitTitle');
    const descElem = document.getElementById('toddlerUnitDesc');

    if (tagElem) tagElem.innerText = `Unit ${unit.id} • ${unit.theme || 'English Adventure'}`;
    if (titleElem) titleElem.innerHTML = `${unit.icon || '🌟'} ${unit.title}`;
    if (descElem) descElem.innerText = unit.desc || 'Explore vocabulary, practice listening, reading, writing, and speaking, play levels, and complete the final challenge!';

    this.updateScoreDisplay();
  }

  /* ==========================================================================
     RENDER: SUB-TABS (Explore, 4 Skills, Videos, Game, Final Challenge, Progress)
     ========================================================================== */
  renderTabs() {
    let container = document.getElementById('toddlerTabsContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toddlerTabsContainer';
      const workspace = document.getElementById('toddlerWorkspace');
      if (workspace && workspace.parentNode) {
        workspace.parentNode.insertBefore(container, workspace);
      }
    }

    const tabs = [
      { id: 'explore', label: '🌟 Explore', className: '' },
      { id: 'listening', label: '🎧 Listening (6)', className: 'tab-listening' },
      { id: 'reading', label: '📖 Reading (6)', className: 'tab-reading' },
      { id: 'speaking', label: '🗣️ Speaking (6)', className: 'tab-speaking' },
      { id: 'writing', label: '✍️ Writing (6)', className: 'tab-writing' },
      { id: 'videos', label: '🎬 Videos & Music', className: '' },
      { id: 'game', label: '🎮 Game (12L)', className: 'tab-game' },
      { id: 'finalChallenge', label: '🏆 Final Challenge', className: 'tab-challenge' },
      { id: 'progress', label: '📊 Progress', className: '' }
    ];

    let html = `<nav class="toddler-tabs-nav">`;
    tabs.forEach(t => {
      const active = (this.currentTab === t.id) ? 'active' : '';
      html += `
        <button class="toddler-tab-btn ${t.className} ${active}" onclick="toddlersEngine.switchTab('${t.id}')">
          ${t.label}
        </button>
      `;
    });
    html += `</nav>`;

    container.innerHTML = html;
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    this.currentActivityIndex = 0;
    this.currentExerciseIndex = 0;
    this.selectedLetters = [];
    this.renderTabs();
    this.renderWorkspace();
  }

  /* ==========================================================================
     RENDER: MAIN WORKSPACE ROUTER
     ========================================================================== */
  renderWorkspace() {
    const ws = document.getElementById('toddlerWorkspace');
    if (!ws) return;

    switch (this.currentTab) {
      case 'explore':
        this.renderExplore(ws);
        break;
      case 'listening':
        this.renderSkillWorkspace(ws, 'listening');
        break;
      case 'reading':
        this.renderSkillWorkspace(ws, 'reading');
        break;
      case 'writing':
        this.renderSkillWorkspace(ws, 'writing');
        break;
      case 'speaking':
        this.renderSkillWorkspace(ws, 'speaking');
        break;
      case 'videos':
        this.renderVideos(ws);
        break;
      case 'game':
        this.renderGame(ws);
        break;
      case 'finalChallenge':
        this.renderFinalChallenge(ws);
        break;
      case 'progress':
        this.renderProgressDashboard(ws);
        break;
      default:
        this.renderExplore(ws);
    }
  }

  /* ==========================================================================
     SECTION: EXPLORE (FLASHCARDS, PHONICS & FACTS)
     ========================================================================== */
  renderExplore(container) {
    const unit = this.getCurrentUnit();
    if (!unit) return;

    const items = unit.explore || [];
    let html = `
      <div style="margin-bottom: 1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <h2 style="margin:0; font-size:1.45rem; color:#78350f;">🌟 Unit ${unit.id} • Vocabulary & Phonics Explorer</h2>
          <p style="margin:4px 0 0; color:#6b7280; font-size:0.95rem;">Explore the cards, then try the picture-to-word recall check below.</p>
        </div>
        <button class="toddler-nav-pill active" onclick="toddlersEngine.playAudio('Welcome to ${unit.title}! Let us explore together.')">
          🔊 Hear Welcome Audio
        </button>
      </div>

      <div class="explore-grid">
    `;

    items.forEach(item => {
      const cleanWord = (item.word || item.name || '').replace(/'/g, "\\'");
      const cleanFact = (item.fact || '').replace(/'/g, "\\'");
      html += `
        <div class="explore-card" onclick="toddlersEngine.playAudio('${cleanWord}')">
          <div>
            <div class="explore-icon">${this.renderVisual(item.icon, item.word || item.name)}</div>
            <h3 class="explore-word">${item.word || item.name}</h3>
            ${item.phonics ? `<div style="font-size:0.85rem; color:#f59e0b; font-weight:800; margin-bottom:6px;">Phonics: ${item.phonics}</div>` : ''}
            <p class="explore-fact">${item.fact || 'Listen and repeat to master this word!'}</p>
          </div>
          <div>
            <button class="explore-audio-btn" onclick="event.stopPropagation(); toddlersEngine.playAudio('${cleanWord}')">
              🔊 Listen "${item.word || item.name}"
            </button>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
    this.setupExploreRecall(container, items);
  }

  setupExploreRecall(container, items) {
    const cards = container.querySelector('.explore-grid');
    const quiz = document.createElement('section');
    quiz.style.cssText = 'margin-top:22px;padding:18px;border-radius:18px;background:#fffbeb;border:2px solid #fcd34d;';
    quiz.setAttribute('aria-labelledby', 'toddlerRecallTitle');
    quiz.innerHTML = `<h3 id="toddlerRecallTitle" style="margin:0 0 6px;color:#78350f;">🧠 Picture-to-word recall</h3><p style="margin:0 0 12px;color:#6b7280;">Review the cards first, then hide them and choose each English word from memory.</p><button type="button" class="toddler-nav-pill toddler-recall-start">Start recall check</button><div class="toddler-recall-question" aria-live="polite"></div>`;
    container.appendChild(quiz);
    const questionBox = quiz.querySelector('.toddler-recall-question');
    const pool = items.filter(item => (item.word || item.name) && item.icon);
    const questions = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(3, pool.length));
    let index = 0;
    let score = 0;
    const render = () => {
      if (index >= questions.length) {
        questionBox.innerHTML = `<p role="status" style="font-weight:800;color:#166534;">Recall check complete: ${score}/${questions.length} correct.</p><button type="button" class="toddler-nav-pill toddler-recall-review">Review vocabulary cards</button>`;
        questionBox.querySelector('.toddler-recall-review').addEventListener('click', () => {
          if (cards) cards.hidden = false;
          index = 0;
          score = 0;
          questionBox.innerHTML = '';
          const start = quiz.querySelector('.toddler-recall-start');
          start.disabled = false;
        });
        return;
      }
      const target = questions[index];
      const targetWord = target.word || target.name;
      const options = [target, ...pool.filter(item => item !== target).sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
      questionBox.innerHTML = `<div style="display:flex;align-items:center;gap:10px;margin:10px 0 14px;"><span style="font-size:2.5rem;" aria-hidden="true">${this.renderVisual(target.icon, targetWord)}</span><strong>Picture ${index + 1} of ${questions.length}</strong></div><div style="display:flex;flex-wrap:wrap;gap:8px;" class="toddler-recall-options"></div><p class="toddler-recall-feedback" role="status" aria-live="polite"></p><p style="font-size:.9rem;color:#6b7280;">Correct: ${score}/${questions.length}</p>`;
      const buttons = questionBox.querySelector('.toddler-recall-options');
      options.forEach(option => {
        const word = option.word || option.name;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'toddler-nav-pill';
        button.textContent = word;
        button.addEventListener('click', () => {
          const feedback = questionBox.querySelector('.toddler-recall-feedback');
          if (word === targetWord) {
            score++;
            feedback.textContent = `Correct: ${targetWord}. Listen and say it aloud.`;
            this.playAudio(targetWord);
            buttons.querySelectorAll('button').forEach(choice => { choice.disabled = true; });
            const next = document.createElement('button');
            next.type = 'button';
            next.className = 'toddler-nav-pill';
            next.textContent = index + 1 === questions.length ? 'Finish recall check' : 'Next picture';
            next.addEventListener('click', () => { index++; render(); });
            buttons.after(next);
          } else {
            feedback.textContent = 'Not this word. Look at the picture and try another choice.';
          }
        });
        buttons.appendChild(button);
      });
    };
    quiz.querySelector('.toddler-recall-start').addEventListener('click', event => {
      if (cards) cards.hidden = true;
      event.currentTarget.disabled = true;
      render();
    });
  }

  /* ==========================================================================
     SECTION: 4 SKILLS (DIVERSE INTERACTIVE GAMEPLAY MECHANICS)
     ========================================================================== */
  renderSkillWorkspace(container, skillName) {
    const unit = this.getCurrentUnit();
    const activities = this.getUnitActivities(unit, skillName);
    if (!unit || activities.length === 0) {
      container.innerHTML = `<p style="padding:2rem; text-align:center; color:#92400e;">Actividades no disponibles para esta habilidad.</p>`;
      return;
    }

    const currentActivity = activities[this.currentActivityIndex] || activities[0];
    const exercises = currentActivity.exercises || [];
    const currentEx = exercises[this.currentExerciseIndex] || exercises[0];

    const skillTitles = {
      listening: { title: '🎧 Listening Studio', desc: 'Listen attentively to English audio, pop bubbles, find shadows, and flip cards!' },
      reading: { title: '📖 Reading Corner', desc: 'Connect word puzzle blocks, assemble sentence trains, and explore illustrated stories!' },
      writing: { title: '✍️ Writing Workshop', desc: 'Snap magnetic letter tiles, type on the kids keyboard, and build sentences!' },
      speaking: { title: '🗣️ Speaking Lab', desc: 'Record your voice, hear the parrot mimic, unlock treasure chests, and speak clearly!' }
    };

    let html = `
      <div style="margin-bottom: 1.25rem;">
        <h2 style="margin:0 0 4px; font-size:1.4rem; color:#78350f;">${skillTitles[skillName].title}</h2>
        <p style="margin:0; font-size:0.92rem; color:#6b7280;">${skillTitles[skillName].desc}</p>
      </div>

      <!-- 6 Activities Sub-Navigation -->
      <div class="skill-activities-nav">
    `;

    activities.forEach((act, idx) => {
      const active = (idx === this.currentActivityIndex) ? 'active' : '';
      const uProg = this.getUnitProgress(this.currentUnitId);
      const isDone = uProg[skillName] && uProg[skillName][idx] > 0;
      html += `
        <button class="skill-activity-btn ${active}" onclick="toddlersEngine.switchActivity('${skillName}', ${idx})">
          <span>${isDone ? '✅' : '🎯'} Act ${idx + 1}:</span>
          <span>${act.title || act.name}</span>
        </button>
      `;
    });

    html += `
      </div>

      <!-- Exercise Runner Box -->
      <div class="exercise-runner-box">
        <div class="exercise-header">
          <span style="font-weight:800; color:#b45309; font-size:1rem;">
            Activity ${this.currentActivityIndex + 1} of 6 • Exercise ${this.currentExerciseIndex + 1} of ${exercises.length}
          </span>
          <div class="exercise-progress-dots">
    `;

    for (let i = 0; i < exercises.length; i++) {
      let dotClass = 'exercise-dot';
      if (i < this.currentExerciseIndex) dotClass += ' completed';
      else if (i === this.currentExerciseIndex) dotClass += ' active';
      html += `<div class="${dotClass}"></div>`;
    }

    html += `
          </div>
        </div>
    `;

    // Dispatch to distinct creative mechanics by skill & activity index
    if (skillName === 'listening') {
      html += this.renderListeningMechanic(currentEx, this.currentActivityIndex);
    } else if (skillName === 'reading') {
      html += this.renderReadingMechanic(currentEx, this.currentActivityIndex);
    } else if (skillName === 'writing') {
      html += this.renderWritingMechanic(currentEx, this.currentActivityIndex);
    } else if (skillName === 'speaking') {
      html += this.renderSpeakingMechanic(currentEx, this.currentActivityIndex);
    }

    html += `</div>`;
    container.innerHTML = html;

    // Auto-trigger audio for listening or reading prompts
    if (skillName === 'listening' || skillName === 'reading') {
      const audioToPlay = currentEx.audio || currentEx.text || currentEx.prompt || currentEx.audioWord || currentEx.targetWord;
      if (audioToPlay) setTimeout(() => this.playAudio(audioToPlay), 350);
    }
  }

  switchActivity(skillName, index) {
    this.currentActivityIndex = index;
    this.currentExerciseIndex = 0;
    this.selectedLetters = [];
    this.memoryFlippedCards = [];
    const ws = document.getElementById('toddlerWorkspace');
    if (ws) this.renderSkillWorkspace(ws, skillName);
  }

  /* --------------------------------------------------------------------------
     1. LISTENING MECHANICS (BUBBLE POP, MEMORY FLIP, SHADOW DETECTIVE, ETC.)
     -------------------------------------------------------------------------- */
  renderListeningMechanic(ex, actIndex) {
    const audioWord = ex.audio || ex.audioWord || ex.targetWord || ex.prompt || 'Listen';
    const cleanAudio = audioWord.replace(/'/g, "\\'");

    // Act 0 or 4: Bubble Pop Catcher mechanic!
    if (actIndex === 0 || actIndex === 4) {
      return `
        <div class="exercise-prompt-card">
          <div style="font-size:3rem; margin-bottom:8px;">🫧🎯</div>
          <h3 class="exercise-instruction">${ex.prompt || ex.instruction || 'Bubble Pop Rush! Listen and pop the right bubble:'}</h3>
          <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${cleanAudio}')">
            🔊 Listen Audio: "${audioWord}"
          </button>
        </div>

        <div class="bubble-pond-container">
          ${(ex.options || []).map((opt, idx) => {
            const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
            const optIcon = this.renderVisual((typeof opt === 'object') ? (opt.icon || '🫧') : '🫧', optName);
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            const cleanOptText = optName.replace(/'/g, "\\'");
            return `
              <div class="floating-bubble-item" id="bubble-${idx}" onclick="toddlersEngine.handleBubblePop(${idx}, ${isCorrect}, '${cleanOptText}', 'listening')">
                <div style="font-size:2.8rem; margin-bottom:4px;">${optIcon}</div>
                <div style="font-size:1.05rem; font-weight:900; color:#0369a1;">${optName}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Act 1: 3D Flip Card Memory Pairs mechanic!
    if (actIndex === 1) {
      return `
        <div class="exercise-prompt-card">
          <div style="font-size:3rem; margin-bottom:8px;">🃏✨</div>
          <h3 class="exercise-instruction">Memory Flip Card Challenge! Find the matching pair:</h3>
          <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${cleanAudio}')">
            🔊 Listen Target Sound
          </button>
        </div>

        <div class="memory-board-grid">
          ${(ex.options || []).map((opt, idx) => {
            const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
            const optIcon = this.renderVisual((typeof opt === 'object') ? (opt.icon || '⭐') : '⭐', optName);
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            const cleanOptText = optName.replace(/'/g, "\\'");
            return `
              <div class="memory-card-box" id="memcard-${idx}" onclick="toddlersEngine.handleMemoryFlip(${idx}, ${isCorrect}, '${cleanOptText}', 'listening')">
                <div class="memory-card-inner">
                  <div class="memory-card-front">❓</div>
                  <div class="memory-card-back">
                    <div style="font-size:2.6rem;">${optIcon}</div>
                    <div style="font-weight:900; font-size:1rem; margin-top:4px;">${optName}</div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Act 3: Mystery Shadow Detective mechanic!
    if (actIndex === 3) {
      const correctOpt = (ex.options || [])[typeof ex.correct === 'number' ? ex.correct : 0] || {};
      const shadowIcon = this.renderVisual((typeof correctOpt === 'object' ? correctOpt.icon : '❓') || '🔍', correctOpt.name || correctOpt.text || '');
      return `
        <div class="exercise-prompt-card">
          <div style="font-size:3rem; margin-bottom:8px;">🕵️‍♂️🔍</div>
          <h3 class="exercise-instruction">Shadow Detective! Who casts this mystery shadow?</h3>
          <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${cleanAudio}')">
            🔊 Listen Detective Clue
          </button>
        </div>

        <div class="shadow-detective-stage">
          <div style="font-size:0.85rem; font-weight:800; color:#64748b; text-transform:uppercase;">Mystery Silhouette</div>
          <div class="silhouette-display">${shadowIcon}</div>
        </div>

        <div class="exercise-choices-grid">
          ${(ex.options || []).map((opt, idx) => {
            const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
            const optIcon = this.renderVisual((typeof opt === 'object') ? (opt.icon || '🔍') : '🔍', optName);
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            const cleanOptText = optName.replace(/'/g, "\\'");
            return `
              <button type="button" class="exercise-choice-card" id="choice-${idx}" aria-label="${optName}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'listening')">
                <div class="choice-icon">${optIcon}</div>
                <div class="choice-text">${optName}</div>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    // Default Interactive Card Choice
    return `
      <div class="exercise-prompt-card">
        <div style="font-size:3rem; margin-bottom:8px;">🎧</div>
        <h3 class="exercise-instruction">${ex.prompt || ex.instruction || 'Listen carefully and select the correct option:'}</h3>
        <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${cleanAudio}')">
          🔊 Listen Again: "${audioWord}"
        </button>
      </div>

      <div class="exercise-choices-grid">
        ${(ex.options || []).map((opt, idx) => {
          const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
          const optIcon = this.renderVisual((typeof opt === 'object') ? (opt.icon || '✨') : '✨', optName);
          const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
            (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
          const cleanOptText = optName.replace(/'/g, "\\'");
          return `
            <button type="button" class="exercise-choice-card" id="choice-${idx}" aria-label="${optName}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'listening')">
              <div class="choice-icon">${optIcon}</div>
              <div class="choice-text">${optName}</div>
              </button>
          `;
        }).join('')}
      </div>
    `;
  }

  handleBubblePop(idx, isCorrect, chosenText, skillName) {
    const bubble = document.getElementById(`bubble-${idx}`);
    if (!bubble) return;

    if (isCorrect) {
      bubble.classList.add('popping');
      this.playAudio(chosenText);
      this.handleCorrectAnswer(skillName, chosenText);
    } else {
      bubble.style.transform = 'scale(0.85) rotate(-10deg)';
      this.playAudio('Try again!');
      setTimeout(() => bubble.style.transform = '', 500);
    }
  }

  handleMemoryFlip(idx, isCorrect, chosenText, skillName) {
    const card = document.getElementById(`memcard-${idx}`);
    if (!card || card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    this.playAudio(chosenText);

    if (isCorrect) {
      this.handleCorrectAnswer(skillName, chosenText);
    } else {
      setTimeout(() => {
        card.classList.remove('flipped');
        this.playAudio('Try again!');
      }, 1000);
    }
  }

  getChoiceIcon(label, fallback = '📖') {
    const value = String(label || '').toLowerCase();
    if (typeof window !== 'undefined' && window.bilikidsRenderIcon) {
      const rendered = window.bilikidsRenderIcon(fallback, label);
      if (rendered && rendered.includes('<svg')) return rendered;
    }
    const choices = [
      [/\b(luna|moon)\b/, '🌙'], [/\bleo\b/, '🦁'], [/\bbili\b/, '🐻'],
      [/\b(apple|apples)\b/, '🍎'], [/\b(balloon|balloons)\b/, '🎈'],
      [/\b(cake|cupcake)\b/, '🧁'], [/\b(cat|kitten)\b/, '🐱'],
      [/\b(dog|puppy)\b/, '🐶'], [/\b(duck|duckling)\b/, '🦆'],
      [/\b(fish)\b/, '🐟'], [/\b(hat|hats)\b/, '🎩'], [/\b(flower|flowers)\b/, '🌼'],
      [/\b(book|books)\b/, '📚'], [/\b(pencil|pencils)\b/, '✏️'],
      [/\b(crayon|crayons)\b/, '🖍️'], [/\b(red)\b/, '🔴'],
      [/\b(blue)\b/, '🔵'], [/\b(yellow)\b/, '🟡'],
      [/\b(green)\b/, '🟢'], [/\b(number|one|two|three|four|five)\b/, '🔢'],
      [/\b(chair|chairs)\b/, '🪑'], [/\b(scissors)\b/, '✂️'],
      [/\b(paper|papers)\b/, '📄'], [/\b(lunchbox|lunchboxes)\b/, '🍱'],
      [/\b(glue|glue stick)\b/, '🧴']
    ];
    const match = choices.find(([pattern]) => pattern.test(value));
    if (match) return match[1];
    return this.renderVisual(fallback, label);
  }

  /* --------------------------------------------------------------------------
     2. READING MECHANICS (STORYBOOK READER, SENTENCE TRAINS, RIDDLES)
     -------------------------------------------------------------------------- */
  renderReadingMechanic(ex, actIndex) {
    // 1. Illustrated Micro-Storybook Reader mechanic (Act 3, Act 5, or exercises with multi-sentence stories)
    const isStory = (actIndex === 3 || actIndex === 5 || ex.storyText || ex.story || (ex.text && ex.text.length > 35 && ex.text.includes('.')));
    if (isStory) {
      const story = ex.storyText || ex.story || ex.text || 'Luna and Leo are exploring today!';
      const promptText = ex.prompt || ex.question || 'Based on the story, answer the question:';
      return `
        <div style="background:linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%); border:3px solid #fde68a; border-radius:24px; padding:1.75rem; margin-bottom:1.5rem; box-shadow:0 8px 20px rgba(245, 158, 11, 0.15);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1.5px dashed #fcd34d; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
            <span style="font-weight:900; color:#b45309; font-size:1.15rem; display:flex; align-items:center; gap:8px;">
              📖 Bilikids Illustrated Storybook
            </span>
            <button type="button" class="exercise-audio-trigger" style="margin:0; padding:8px 18px; font-size:0.95rem;" onclick="toddlersEngine.playAudio(this.dataset.audio)" data-audio="${this.escapeHtmlAttr(story)}">
              🔊 Listen Story
            </button>
          </div>
          <div style="font-size:1.25rem; line-height:1.75; color:#78350f; font-weight:700;">
            ${story}
          </div>
        </div>

        <div class="exercise-prompt-card">
          <h3 class="exercise-instruction">${promptText}</h3>
          <button type="button" class="exercise-audio-trigger" onclick="toddlersEngine.playAudio(this.dataset.audio)" data-audio="${this.escapeHtmlAttr(promptText)}">
            🔊 Listen Question: "${promptText}"
          </button>
        </div>

        <div class="exercise-choices-grid">
          ${(ex.options || []).map((opt, idx) => {
            const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
            const optIcon = (typeof opt === 'object') ? this.getChoiceIcon(optName, opt.icon || '📖') : this.getChoiceIcon(optName, '📖');
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            return `
              <button type="button" class="exercise-choice-card" id="choice-${idx}" aria-label="${this.escapeHtmlAttr(optName)}" data-option="${this.escapeHtmlAttr(optName)}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, this.dataset.option, 'reading')">
                <div class="choice-icon">${optIcon}</div>
                <div class="choice-text">${optName}</div>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    // 2. Sentence Puzzle Train Wagon mechanic (Act 2)
    if (actIndex === 2) {
      const sentence = ex.sentence || ex.text || 'This is a red pencil.';
      const cleanWagonPrompt = sentence.replace(/______.*$/, '').trim() || 'This is a';
      const promptToPlay = ex.prompt || sentence;
      const rawEmojiClue = sentence.match(/\([^\)]+\)/) ? sentence.match(/\([^\)]+\)/)[0].replace(/[\(\)]/g, '') : '📖';
      const emojiClue = this.renderVisual(rawEmojiClue, sentence);
      return `
        <div class="exercise-prompt-card">
          <div style="font-size:3rem; margin-bottom:8px;">🚂🧩</div>
          <h3 class="exercise-instruction">Sentence Train Connector! Complete the sentence wagon:</h3>
          <div class="sentence-train-track" style="display:flex; justify-content:center; align-items:center; gap:8px; flex-wrap:wrap; margin:1rem 0;">
            <span class="train-wagon-block" style="background:#e0f2fe; border:2px solid #bae6fd; padding:8px 16px; border-radius:12px; font-weight:800; color:#0369a1;">🚂 Locomotive</span>
            <span class="train-wagon-block" style="background:#fef3c7; border:2px solid #fde68a; padding:8px 16px; border-radius:12px; font-weight:800; color:#b45309;">${cleanWagonPrompt}</span>
            <span class="train-wagon-block" style="border:2px dashed #f59e0b; background:#fffbeb; padding:8px 16px; border-radius:12px; font-weight:900; color:#b45309;">[ ??? ]</span>
            <span class="train-wagon-block" style="font-size:1.6rem;">${emojiClue}</span>
          </div>
          <button type="button" class="exercise-audio-trigger" onclick="toddlersEngine.playAudio(this.dataset.audio)" data-audio="${this.escapeHtmlAttr(promptToPlay)}">
            🔊 Listen Prompt: "${promptToPlay}"
          </button>
        </div>

        <div class="exercise-choices-grid">
          ${(ex.options || []).map((opt, idx) => {
            const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
            const optIcon = this.renderVisual((typeof opt === 'object') ? (opt.icon || '🚂') : '🚂', optName);
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            return `
              <button type="button" class="exercise-choice-card" id="choice-${idx}" aria-label="${this.escapeHtmlAttr(optName)}" data-option="${this.escapeHtmlAttr(optName)}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, this.dataset.option, 'reading')">
                <div class="choice-icon">${optIcon}</div>
                <div class="choice-text">${optName}</div>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    // 3. Match Classroom Words - Flashcard Word Mode (Act 0 or single isolated word)
    const isSingleWord = (actIndex === 0 || (ex.text && ex.text.length <= 15 && !ex.text.includes(' ') && !ex.text.includes('.')));
    if (isSingleWord) {
      const displayWord = ex.text || 'BOOK';
      return `
        <div class="exercise-prompt-card">
          <div style="background:#ffffff; border:3px solid #fde68a; border-radius:24px; display:inline-block; padding:1.25rem 3rem; margin-bottom:1rem; box-shadow:0 8px 24px rgba(245, 158, 11, 0.15);">
            <span style="font-size:2.8rem; font-weight:900; letter-spacing:3px; color:#d97706; text-transform:uppercase;">
              ${displayWord}
            </span>
          </div>
          <h3 class="exercise-instruction">${ex.prompt || 'Read the word card above and tap the matching illustration:'}</h3>
          <button type="button" class="exercise-audio-trigger" onclick="toddlersEngine.playAudio(this.dataset.audio)" data-audio="${this.escapeHtmlAttr(displayWord)}">
            🔊 Listen Word: "${displayWord}"
          </button>
        </div>

        <div class="exercise-choices-grid">
          ${(ex.options || []).map((opt, idx) => {
            const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
            const optIcon = (typeof opt === 'object') ? this.getChoiceIcon(optName, opt.icon || '📖') : this.getChoiceIcon(optName, '📖');
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            return `
              <button type="button" class="exercise-choice-card" id="choice-${idx}" aria-label="${this.escapeHtmlAttr(optName)}" data-option="${this.escapeHtmlAttr(optName)}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, this.dataset.option, 'reading')">
                <div class="choice-icon">${optIcon}</div>
                <div class="choice-text">${optName}</div>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    // 4. Default Sentence / Map Guide / Clue reading mechanic
    const displaySentence = ex.sentence || ex.text || '';
    const audioTarget = displaySentence || ex.prompt || 'Read and select the matching answer';
    return `
      <div class="exercise-prompt-card">
        ${displaySentence ? `
          <div style="background:linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%); border:2.5px solid #fde68a; border-radius:20px; padding:1.25rem 2rem; margin-bottom:1.25rem; font-size:1.35rem; font-weight:800; color:#78350f; display:inline-block; box-shadow:0 4px 14px rgba(245, 158, 11, 0.12);">
            "${displaySentence}"
          </div>
        ` : ''}
        <h3 class="exercise-instruction">${ex.prompt || 'Read and select the matching answer:'}</h3>
        <button type="button" class="exercise-audio-trigger" onclick="toddlersEngine.playAudio(this.dataset.audio)" data-audio="${this.escapeHtmlAttr(audioTarget)}">
          🔊 Listen: "${displaySentence || ex.prompt}"
        </button>
      </div>

      <div class="exercise-choices-grid">
        ${(ex.options || []).map((opt, idx) => {
          const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
          const optIcon = (typeof opt === 'object') ? this.getChoiceIcon(optName, opt.icon || '📖') : this.getChoiceIcon(optName, '📖');
          const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
            (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
          return `
            <button type="button" class="exercise-choice-card" id="choice-${idx}" aria-label="${this.escapeHtmlAttr(optName)}" data-option="${this.escapeHtmlAttr(optName)}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, this.dataset.option, 'reading')">
              <div class="choice-icon">${optIcon}</div>
              <div class="choice-text">${optName}</div>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
     3. WRITING MECHANICS (MAGNET TILES, KIDS VIRTUAL KEYBOARD, SENTENCE TRAIN)
     -------------------------------------------------------------------------- */
  renderWritingMechanic(ex, actIndex) {
    const targetWord = (ex.target || ex.word || ex.correct || ex.answer || '').toUpperCase();
    const letters = (ex.letters || ex.scrambledLetters || targetWord.split('').sort(() => Math.random() - 0.5));

    // Act 3: Kids Virtual ABC Keyboard typing mechanic!
    if (actIndex === 3) {
      return `
        <div class="exercise-prompt-card">
          <div style="font-size:3.5rem; margin-bottom:8px;">${this.renderVisual(ex.icon || '⌨️', targetWord)}</div>
          <h3 class="exercise-instruction">Kids Keyboard Studio! Type the word:</h3>
          <p class="exercise-sub-instruction">${ex.hint || ex.clue || 'Tap the colorful keys to write the word.'}</p>
          <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${targetWord.toLowerCase()}')">
            🔊 Hear Word: "${targetWord}"
          </button>
        </div>

        <div class="writing-input-box">
          <input type="text" id="writingInput" class="writing-text-input" placeholder="Type here..." autocomplete="off" readonly value="${this.selectedLetters.join('')}">
          <button class="writing-check-btn" onclick="toddlersEngine.checkTextInputAnswer('${targetWord.replace(/'/g, "\\'")}')">
            Check ✅
          </button>
        </div>

        <div class="kids-keyboard-wrap">
          <div class="kids-keyboard-row">
            ${['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(k => `
              <button class="kids-key-btn" onclick="toddlersEngine.handleVirtualKeyPress('${k}')">${k}</button>
            `).join('')}
          </div>
          <div class="kids-keyboard-row">
            ${['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(k => `
              <button class="kids-key-btn" onclick="toddlersEngine.handleVirtualKeyPress('${k}')">${k}</button>
            `).join('')}
          </div>
          <div class="kids-keyboard-row">
            ${['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(k => `
              <button class="kids-key-btn" onclick="toddlersEngine.handleVirtualKeyPress('${k}')">${k}</button>
            `).join('')}
            <button class="kids-key-btn action-key" onclick="toddlersEngine.handleVirtualKeyBackspace()">⌫ Borrar</button>
          </div>
        </div>
      `;
    }

    // Default: Magnetic Letter Tiles Unscrambler
    return `
      <div class="exercise-prompt-card">
        <div style="font-size:3.5rem; margin-bottom:8px;">${this.renderVisual(ex.icon || '✏️', targetWord)}</div>
        <h3 class="exercise-instruction">${ex.prompt || ex.instruction || 'Build or write the correct word:'}</h3>
        <p class="exercise-sub-instruction">${ex.hint || ex.clue || ex.sentence || 'Tap letters in order or write the word.'}</p>
        <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${targetWord.toLowerCase()}')">
          🔊 Hear Word
        </button>
      </div>

      <div class="writing-slots-container" id="writingSlots">
        ${targetWord.split('').map((_, i) => {
          const letter = this.selectedLetters[i] || '';
          const filledClass = letter ? 'filled' : '';
          return `<div class="writing-slot ${filledClass}" onclick="toddlersEngine.removeLetterTile(${i})">${letter}</div>`;
        }).join('')}
      </div>

      <div class="writing-tiles-pool">
        ${letters.map((l, i) => `
          <button class="writing-letter-tile" id="tile-${i}" onclick="toddlersEngine.addLetterTile('${l}', ${i}, '${targetWord}')">${l}</button>
        `).join('')}
      </div>

      <div style="text-align:center;">
        <button class="toddler-nav-pill" style="margin:0 auto;" onclick="toddlersEngine.resetLetterTiles()">
          🔄 Reset Letters
        </button>
      </div>
    `;
  }

  handleVirtualKeyPress(char) {
    this.playAudio(char.toLowerCase());
    this.selectedLetters.push(char);
    const input = document.getElementById('writingInput');
    if (input) input.value = this.selectedLetters.join('');
  }

  handleVirtualKeyBackspace() {
    this.selectedLetters.pop();
    const input = document.getElementById('writingInput');
    if (input) input.value = this.selectedLetters.join('');
  }

  addLetterTile(letter, tileIndex, targetWord) {
    if (this.selectedLetters.length < targetWord.length) {
      this.selectedLetters.push(letter);
      this.playAudio(letter.toLowerCase());
      document.getElementById(`tile-${tileIndex}`)?.classList.add('used');

      const slots = document.querySelectorAll('.writing-slot');
      slots.forEach((s, idx) => {
        if (this.selectedLetters[idx]) {
          s.innerText = this.selectedLetters[idx];
          s.classList.add('filled');
        } else {
          s.innerText = '';
          s.classList.remove('filled');
        }
      });

      if (this.selectedLetters.length === targetWord.length) {
        const formedWord = this.selectedLetters.join('').toUpperCase();
        if (formedWord === targetWord) {
          this.handleCorrectAnswer('writing', targetWord);
        } else {
          this.handleWrongAnswer('writing');
          setTimeout(() => this.resetLetterTiles(), 1000);
        }
      }
    }
  }

  removeLetterTile(index) {
    if (this.selectedLetters[index]) {
      this.selectedLetters.splice(index, 1);
      const ws = document.getElementById('toddlerWorkspace');
      if (ws) this.renderSkillWorkspace(ws, 'writing');
    }
  }

  resetLetterTiles() {
    this.selectedLetters = [];
    const ws = document.getElementById('toddlerWorkspace');
    if (ws) this.renderSkillWorkspace(ws, 'writing');
  }

  checkTextInputAnswer(target) {
    const userVal = this.selectedLetters.join('').trim().toUpperCase();
    if (userVal === target.toUpperCase()) {
      this.handleCorrectAnswer('writing', target);
    } else {
      const input = document.getElementById('writingInput');
      input?.classList.add('wrong');
      this.handleWrongAnswer('writing');
      setTimeout(() => input?.classList.remove('wrong'), 800);
    }
  }

  /* --------------------------------------------------------------------------
     4. SPEAKING MECHANICS (PARROT ECHO, MAGIC CHEST, QUESTION & ANSWER)
     -------------------------------------------------------------------------- */
  renderSpeakingMechanic(ex, actIndex) {
    const targetPhrase = ex.target || ex.targetPhrase || ex.word || ex.sentence || 'Hello';
    const cleanPhrase = targetPhrase.replace(/'/g, "\\'");

    // Act 0: Parrot Echo Studio mechanic!
    if (actIndex === 0) {
      return `
        <div class="parrot-studio-card">
          <div class="parrot-mascot-box">🦜</div>
          <h2 style="color:#be123c; margin:0 0 6px;">Parrot Echo Mimic!</h2>
          <p style="color:#6b7280; font-size:1.05rem; margin:0 0 1rem;">Speak to Barnaby the Parrot and hear him repeat your voice!</p>
          <div class="speaking-target-phrase">"${targetPhrase}"</div>

          <div>
            <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${cleanPhrase}')">
              🔊 Hear Model Pronunciation
            </button>
          </div>

          <div>
            <button class="speaking-mic-btn" id="speakingMicBtn" onclick="toddlersEngine.toggleVoiceRecording('${cleanPhrase}')" title="Tap to Speak">
              🎙️
            </button>
          </div>

          <div id="speakingStatus" style="font-size:1.05rem; font-weight:700; color:#6b7280;">
            Tap the microphone and say: "<strong>${targetPhrase}</strong>"
          </div>

          <div id="speakingPlaybackWrap" style="margin-top:1rem; display:none;">
            <audio id="speakingPlaybackAudio" controls style="margin:0 auto;"></audio>
          </div>
        </div>
      `;
    }

    // Default Speaking Lab
    return `
      <div class="speaking-panel">
        <div style="font-size:3.5rem; margin-bottom:0.5rem;">${this.renderVisual(ex.icon || '🎤', targetPhrase)}</div>
        <h3 class="exercise-instruction">${ex.prompt || ex.instruction || 'Listen and repeat clearly:'}</h3>
        <div class="speaking-target-phrase">"${targetPhrase}"</div>

        <div>
          <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${cleanPhrase}')">
            🔊 Listen Example Model
          </button>
        </div>

        <div>
          <button class="speaking-mic-btn" id="speakingMicBtn" onclick="toddlersEngine.toggleVoiceRecording('${cleanPhrase}')" title="Tap to Speak">
            🎙️
          </button>
        </div>

        <div id="speakingStatus" style="font-size:1.05rem; font-weight:700; color:#6b7280;">
          Tap the microphone and say: "<strong>${targetPhrase}</strong>"
        </div>

        <div id="speakingPlaybackWrap" style="margin-top:1rem; display:none;">
          <audio id="speakingPlaybackAudio" controls style="margin:0 auto;"></audio>
        </div>
      </div>
    `;
  }

  toggleVoiceRecording(targetPhrase) {
    if (this.isRecording) {
      this.stopVoiceRecording(targetPhrase);
    } else {
      this.startVoiceRecording(targetPhrase);
    }
  }

  startVoiceRecording(targetPhrase) {
    const micBtn = document.getElementById('speakingMicBtn');
    const status = document.getElementById('speakingStatus');

    if (micBtn) micBtn.classList.add('recording');
    if (status) status.innerHTML = `<span style="color:#dc2626;">🔴 Listening... Say: "${targetPhrase}"</span>`;
    this.isRecording = true;

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      try {
        const recognition = new SpeechRec();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 3;

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript.toLowerCase();
          const targetClean = targetPhrase.toLowerCase().replace(/[^a-z0-9 ]/g, '');
          const heardClean = transcript.replace(/[^a-z0-9 ]/g, '');
          const targetWords = targetClean.split(/\s+/).filter(Boolean);
          const heardWords = new Set(heardClean.split(/\s+/).filter(Boolean));
          const matchedWords = targetWords.filter(word => heardWords.has(word)).length;
          const matchRatio = targetWords.length ? matchedWords / targetWords.length : 0;

          if (heardClean && matchedWords >= Math.min(2, targetWords.length) && matchRatio >= 0.6) {
            this.handleSpeakingSuccess(targetPhrase, transcript);
          } else {
            this.handleSpeakingFallback(targetPhrase);
          }
        };

        recognition.onerror = () => {
          this.handleSpeakingFallback(targetPhrase);
        };

        recognition.start();
      } catch (err) {
        console.warn('SpeechRec failed:', err);
      }
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.audioChunks = [];
        this.mediaRecorder.ondataavailable = e => this.audioChunks.push(e.data);
        this.mediaRecorder.onstop = () => {
          const blob = new Blob(this.audioChunks, { type: 'audio/webm' });
          this.recordedAudioUrl = URL.createObjectURL(blob);
          const playAudio = document.getElementById('speakingPlaybackAudio');
          const playWrap = document.getElementById('speakingPlaybackWrap');
          if (playAudio && playWrap) {
            playAudio.src = this.recordedAudioUrl;
            playWrap.style.display = 'block';
          }
        };
        this.mediaRecorder.start();
      }).catch(() => {});
    }

    setTimeout(() => {
      if (this.isRecording) {
        this.stopVoiceRecording(targetPhrase);
      }
    }, 4500);
  }

  stopVoiceRecording(targetPhrase) {
    this.isRecording = false;
    const micBtn = document.getElementById('speakingMicBtn');
    if (micBtn) micBtn.classList.remove('recording');

    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }

    this.handleSpeakingFallback(targetPhrase);
  }

  handleSpeakingSuccess(targetPhrase, heardText) {
    const status = document.getElementById('speakingStatus');
    if (status) {
      status.innerHTML = `<span class="speaking-feedback-badge success">🌟 Phrase recognized: "${heardText}". This checks the recognized words, not pronunciation quality.</span>`;
    }
    this.handleCorrectAnswer('speaking', targetPhrase);
  }

  handleSpeakingFallback(targetPhrase) {
    this.isRecording = false;
    const micBtn = document.getElementById('speakingMicBtn');
    if (micBtn) micBtn.classList.remove('recording');
    const status = document.getElementById('speakingStatus');
    if (status) {
      status.innerHTML = `<span class="speaking-feedback-badge">⚠️ We couldn't verify this response. Your recording was not scored. Listen to the model and try again with an adult.</span>`;
    }
  }

  /* --------------------------------------------------------------------------
     ANSWER EVALUATION
     -------------------------------------------------------------------------- */
  handleChoiceClick(cardIndex, isCorrect, chosenText, skillName) {
    const card = document.getElementById(`choice-${cardIndex}`);
    if (!card) return;

    // Immediately pronounce the tapped option card in English
    if (chosenText) {
      this.playAudio(chosenText);
    }

    if (isCorrect) {
      card.classList.add('correct');
      setTimeout(() => this.handleCorrectAnswer(skillName, chosenText), 400);
    } else {
      card.classList.add('wrong');
      if (window.BilikidsMascot) window.BilikidsMascot.encourage();
      setTimeout(() => this.playAudio('Try again!'), 450);
      setTimeout(() => card.classList.remove('wrong'), 750);
    }
  }

  handleCorrectAnswer(skillName, text) {
    this.playCheerSound();
    this.addStars(10);
    if (window.BilikidsMascot) window.BilikidsMascot.celebrate();

    const unit = this.getCurrentUnit();
    const activities = this.getUnitActivities(unit, skillName);
    const currentActivity = activities[this.currentActivityIndex] || {};
    const exercises = currentActivity.exercises || [];

    setTimeout(() => {
      if (this.currentExerciseIndex < exercises.length - 1) {
        this.currentExerciseIndex++;
        this.selectedLetters = [];
        this.memoryFlippedCards = [];
        const ws = document.getElementById('toddlerWorkspace');
        if (ws) this.renderSkillWorkspace(ws, skillName);
      } else {
        this.markActivityCompleted(skillName, this.currentActivityIndex);
        if (this.currentActivityIndex < activities.length - 1) {
          const completedNum = this.currentActivityIndex + 1;
          const nextNum = completedNum + 1;
          this.currentActivityIndex++;
          this.currentExerciseIndex = 0;
          this.selectedLetters = [];
          this.memoryFlippedCards = [];

          this.showCelebrationBanner(
            `🎉 ¡Actividad ${completedNum} Completada!`,
            `Pasando a la Actividad ${nextNum}... ⭐⭐⭐`,
            '#059669'
          );

          const ws = document.getElementById('toddlerWorkspace');
          if (ws) this.renderSkillWorkspace(ws, skillName);
        } else {
          this.showCelebrationBanner(
            `🏆 ¡Excelente! ¡6 de 6 actividades superadas!`,
            `Pasando a los Juegos Arcade... 🎮`,
            '#8b5cf6'
          );
          setTimeout(() => {
            this.switchTab('game');
          }, 1500);
        }
      }
    }, 1100);
  }

  showCelebrationBanner(title, subtitle, bgColor = '#10b981') {
    const existing = document.getElementById('toddlerCelebrationBanner');
    if (existing) existing.remove();

    const banner = document.createElement('div');
    banner.id = 'toddlerCelebrationBanner';
    banner.style.position = 'fixed';
    banner.style.top = '85px';
    banner.style.left = '50%';
    banner.style.transform = 'translateX(-50%) scale(0.9)';
    banner.style.background = bgColor;
    banner.style.color = '#ffffff';
    banner.style.padding = '12px 28px';
    banner.style.borderRadius = '999px';
    banner.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
    banner.style.zIndex = '10000';
    banner.style.display = 'flex';
    banner.style.flexDirection = 'column';
    banner.style.alignItems = 'center';
    banner.style.textAlign = 'center';
    banner.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    banner.style.pointerEvents = 'none';
    banner.innerHTML = `
      <div style="font-weight:900; font-size:1.15rem; font-family:'Fredoka',sans-serif;">${title}</div>
      <div style="font-size:0.9rem; font-weight:700; opacity:0.95;">${subtitle}</div>
    `;

    document.body.appendChild(banner);
    requestAnimationFrame(() => {
      banner.style.transform = 'translateX(-50%) scale(1)';
    });

    setTimeout(() => {
      banner.style.transform = 'translateX(-50%) scale(0.8)';
      banner.style.opacity = '0';
      setTimeout(() => banner.remove(), 350);
    }, 2400);
  }

  handleWrongAnswer(skillName) {
    this.playAudio('Oops, try again!');
  }

  markActivityCompleted(skillName, activityIndex) {
    const uProg = this.getUnitProgress(this.currentUnitId);
    if (uProg[skillName]) {
      uProg[skillName][activityIndex] = 100;
    }
    this.saveProgress();
  }

  /* ==========================================================================
     SECTION: VIDEOS & INTERACTIVE SONG THEATER
     ========================================================================== */
  renderVideos(container) {
    const unit = this.getCurrentUnit();
    if (!unit) return;

    const verifiedVid = VERIFIED_UNIT_VIDEOS[unit.id] || VERIFIED_UNIT_VIDEOS[1];
    const embedUrl = `https://www.youtube-nocookie.com/embed/${verifiedVid.id}?rel=0&modestbranding=1&autoplay=0`;

    const checkpoints = [TODDLER_VIDEO_RECALL[unit.id]];

    let html = `
      <div class="video-section-wrap">
        <div style="margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <h2 style="margin:0 0 4px; font-size:1.45rem; color:#78350f;">🎬 ${verifiedVid.title}</h2>
            <p style="margin:0; font-size:0.95rem; color:#6b7280;">Watch or listen first, then answer a question about the words and ideas in the song.</p>
          </div>
          <div class="theater-mode-tabs">
            <button class="theater-mode-btn ${this.videoMode === 'youtube' ? 'active' : ''}" onclick="toddlersEngine.setVideoMode('youtube')">
              📺 YouTube Player
            </button>
            <button class="theater-mode-btn ${this.videoMode === 'theater' ? 'active' : ''}" onclick="toddlersEngine.setVideoMode('theater')">
              🎵 Bilikids Song Stage
            </button>
          </div>
        </div>
    `;

    if (this.videoMode === 'youtube') {
      html += `
        <div class="video-player-frame-box">
          <iframe src="${embedUrl}" title="${verifiedVid.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div style="text-align:right; margin:-1rem 0 1.5rem;">
          <a href="https://www.youtube.com/watch?v=${verifiedVid.id}" target="_blank" rel="noopener" style="font-size:0.85rem; color:#d97706; text-decoration:none; font-weight:800;">
            🔗 ¿Problemas para reproducir? Abrir en YouTube directamente ➔
          </a>
        </div>
      `;
    } else {
      // Bilikids Interactive Karaoke Stage (100% works locally without YouTube!)
      html += `
        <div class="interactive-karaoke-stage">
          <div style="font-size:1rem; font-weight:800; color:#fde68a; text-transform:uppercase; letter-spacing:0.05em;">
            🌟 Bilikids Animated Musical Theater 🌟
          </div>
          <div class="stage-dancer-row">
            <span class="stage-dancer">🐻</span>
            <span class="stage-dancer">👧</span>
            <span class="stage-dancer">🦁</span>
          </div>
          <div class="stage-lyrics-box" id="stageLyrics">
            "${verifiedVid.lyrics}"
          </div>
          <div style="display:flex; justify-content:center; gap:12px; margin-top:1rem;">
            <button class="toddler-nav-pill active" onclick="toddlersEngine.playAudio('${verifiedVid.lyrics.replace(/'/g, "\\'")}')">
              ▶ Play Singing Audio
            </button>
          </div>
        </div>
      `;
    }

    // Interactive Checkpoints
    html += `
      <div class="video-checkpoints-card">
        <h3 style="margin:0 0 1rem; color:#92400e; font-size:1.15rem;">🎯 Watch, listen, and remember</h3>
    `;

    checkpoints.forEach((cp, idx) => {
      const alreadyCompleted = this.videoRecallCompleteUnits.has(unit.id);
      html += `
        <div class="video-checkpoint-item" id="video-cp-${idx}">
          <div style="font-weight:800; color:#374151; margin-bottom:8px;">${idx + 1}. ${cp.question}</div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            ${(cp.options || []).map((opt, optIdx) => {
              const isCorrect = (optIdx === cp.correct || opt === cp.answer);
              return `
                <button class="toddler-nav-pill" ${alreadyCompleted ? 'disabled' : ''} onclick="toddlersEngine.checkVideoCheckpoint(${idx}, ${isCorrect})">
                  ${opt}
                </button>
              `;
            }).join('')}
          </div>
          ${alreadyCompleted ? '<div role="status" style="color:#047857;font-weight:800;margin-top:8px;">✅ You completed this recall check.</div>' : '<div class="video-checkpoint-feedback" role="status" aria-live="polite"></div>'}
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  setVideoMode(mode) {
    this.videoMode = mode;
    const ws = document.getElementById('toddlerWorkspace');
    if (ws) this.renderVideos(ws);
  }

  checkVideoCheckpoint(cpIndex, isCorrect) {
    const cpItem = document.getElementById(`video-cp-${cpIndex}`);
    if (!cpItem || cpItem.dataset.answered === 'true') return;
    if (isCorrect) {
      cpItem.dataset.answered = 'true';
      this.playCheerSound();
      this.addStars(15);
      this.videoRecallCompleteUnits.add(this.currentUnitId);
      try { localStorage.setItem('bili_toddler_video_recall', JSON.stringify([...this.videoRecallCompleteUnits])); } catch (e) {}
      cpItem.style.background = '#d1fae5';
      cpItem.style.borderColor = '#10b981';
      cpItem.querySelectorAll('button').forEach(button => { button.disabled = true; });
      cpItem.insertAdjacentHTML('beforeend', `<div role="status" style="color:#047857; font-weight:800; margin-top:8px;">✅ Correct! You remembered a detail from the video or song. +15 Stars ⭐</div>`);
    } else {
      this.playAudio('Try again!');
      const feedback = cpItem.querySelector('.video-checkpoint-feedback') || document.createElement('div');
      feedback.className = 'video-checkpoint-feedback';
      feedback.setAttribute('role', 'status');
      feedback.textContent = 'Try again. Think about the words you heard.';
      if (!feedback.isConnected) cpItem.appendChild(feedback);
    }
  }

  /* ==========================================================================
     SECTION: MAIN GAME (12 PROGRESSIVE ARCADE LEVELS)
     ========================================================================== */
  renderGame(container) {
    const unit = this.getCurrentUnit();
    if (!unit || !unit.game) return;

    const levels = unit.game.levels || [];
    const uProg = this.getUnitProgress(this.currentUnitId);
    const unlockedLevel = uProg.gameUnlockedLevel || 1;

    let html = `
      <div class="game-levels-map-wrap">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:10px;">
          <div>
            <h2 style="margin:0 0 4px; font-size:1.45rem; color:#86198f;">🎮 ${unit.game.title || '12-Level Bilikids Quest'}</h2>
            <p style="margin:0; font-size:0.95rem; color:#6b7280;">Beat each level to unlock the next one and win the Unit ${unit.id} Golden Star Trophy!</p>
          </div>
          <div style="background:#fdf4ff; border:2px solid #d946ef; padding:8px 18px; border-radius:999px; font-weight:900; color:#86198f;">
            Unlocked: Level ${unlockedLevel} of 12
          </div>
        </div>

        <div class="game-levels-grid">
    `;

    levels.forEach(lvl => {
      const isUnlocked = lvl.level <= unlockedLevel;
      const isCompleted = lvl.level < unlockedLevel;
      let nodeClass = isUnlocked ? 'unlocked' : 'locked';
      if (isCompleted) nodeClass += ' completed';

      const starsCount = (uProg.gameLevelsStars && uProg.gameLevelsStars[lvl.level]) || (isCompleted ? 3 : 0);
      const starsDisplay = '⭐'.repeat(starsCount) || '☆☆☆';

      html += `
        <div class="game-level-node ${nodeClass}" onclick="${isUnlocked ? `toddlersEngine.playGameLevel(${lvl.level})` : `toddlersEngine.showCelebrationBanner('🔒 Nivel Bloqueado', '¡Completa los niveles anteriores primero!', '#d97706')`}">
          <div class="game-level-num">Level ${lvl.level}</div>
          <div class="game-level-icon">${isUnlocked ? this.renderVisual(lvl.icon || '🎯', lvl.title || 'Game') : '🔒'}</div>
          <div class="game-level-title">${lvl.title || 'Level ' + lvl.level}</div>
          <div class="game-level-stars">${starsDisplay}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  /* ==========================================================================
     PEDAGOGICAL ARCADE GAME SYSTEM (12 LEVELS)
     Filters: 1. Habilidad a Desarrollar, 2. Contenido Interactivo Justificado,
              3. Medición del Aprendizaje
     ========================================================================== */
  playGameLevel(levelNum) {
    const unit = this.getCurrentUnit();
    const levels = (unit.game && unit.game.levels) ? unit.game.levels : [];
    const lvl = levels.find(l => l.level === levelNum) || levels[0] || { level: levelNum, title: `Level ${levelNum}` };

    const exploreItems = (Array.isArray(unit.explore) ? unit.explore : (unit.explore && unit.explore.items ? unit.explore.items : []));
    
    // 1. Target Name & Icon Extraction
    let targetName = '';
    let targetIcon = lvl.icon || '🎯';
    const lvlTitle = lvl.title || '';
    const lvlMission = lvl.mission || '';
    const itemType = (lvl.itemType || '').toLowerCase();

    let matchedItem = exploreItems.find(it => {
      const itName = (it.name || it.word || '').toLowerCase();
      return itName === itemType || lvlTitle.toLowerCase().includes(itName) || lvlMission.toLowerCase().includes(itName);
    });

    if (matchedItem) {
      targetName = matchedItem.name || matchedItem.word;
      targetIcon = matchedItem.icon || targetIcon;
    } else {
      targetName = lvlTitle.replace(/^(Find the|Collect the|Place the|Discover the|Choose the|Build the|Meet the|Help the|Prepare the|Pick up the|Visit the|Organize the)\s+/i, '').replace(/\s+Word$/i, '').trim();
      if (!targetName) targetName = 'Item';
    }

    // 2. Determine Pedagogical Skill & Game Mode
    let gameMode = 'collector';
    let skillName = 'Discriminación Auditiva y Búsqueda Visual';

    if (itemType === 'spelling' || levelNum === 5 || lvlTitle.toLowerCase().includes('build')) {
      gameMode = 'phonics';
      skillName = 'Conciencia Fonológica y Formación de Palabras';
    } else if (itemType === 'counting' || levelNum === 8 || lvlTitle.toLowerCase().includes('count')) {
      gameMode = 'counting';
      skillName = 'Correspondencia Numérica y Conteo 1 a 1';
      // For counting mode, pick a concrete countable unit object
      const countCandidate = exploreItems.find(it => {
        const n = (it.name || it.word || '').toLowerCase();
        return !n.includes('count') && !n.includes('five') && !n.includes('number') && (lvlMission.toLowerCase().includes(n) || true);
      }) || exploreItems[0];
      if (countCandidate) {
        targetName = countCandidate.name || countCandidate.word || 'Star';
        targetIcon = countCandidate.icon || '⭐';
      }
    } else if (itemType === 'challenge' || itemType === 'finale' || itemType === 'instruction' || itemType === 'sentence' || levelNum >= 9) {
      gameMode = 'checkpoints';
      skillName = (levelNum >= 11) ? 'Integración y Maestría del Vocabulario' : 'Comprensión Auditiva y Seguimiento de Instrucciones';
    } else if (itemType === 'match' || itemType === 'shapes' || levelNum === 4 || levelNum === 7) {
      gameMode = 'checkpoints';
      skillName = 'Asociación Léxico-Visual y Clasificación';
    } else {
      gameMode = 'collector';
      skillName = 'Comprensión Auditiva y Búsqueda de Objetos';
    }

    const targetCount = (gameMode === 'counting')
      ? Math.max(3, Math.min(lvl.targetCount || 5, 5))
      : Math.max(2, Math.min(lvl.targetCount || 3, 4));

    // 3. Initialize State
    this.currentGameLevelState = {
      levelNum,
      lvl,
      unit,
      skillName,
      gameMode,
      targetName,
      targetIcon,
      targetCount,
      collectedCount: 0,
      errorsCount: 0,
      letterIndex: 0,
      countedItems: 0,
      stepIndex: 0,
      totalSteps: 3
    };

    // 4. Mount Modal
    let modal = document.getElementById('gameLevelModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'diploma-modal-overlay';
      modal.id = 'gameLevelModal';
      document.body.appendChild(modal);
    }

    this.renderGameLevelModalContent();
    this.playAudio(`Level ${levelNum}. ${lvl.title}!`);
  }

  renderGameLevelModalContent() {
    const modal = document.getElementById('gameLevelModal');
    if (!modal) return;
    const state = this.currentGameLevelState;
    const { lvl, targetName, targetIcon, targetCount, skillName, levelNum, gameMode } = state;
    const cleanWord = targetName.replace(/'/g, "\\'");
    const exploreItems = (Array.isArray(state.unit.explore) ? state.unit.explore : (state.unit.explore && state.unit.explore.items ? state.unit.explore.items : []));

    let contentHtml = '';

    if (gameMode === 'collector') {
      const distractors = exploreItems.filter(it => (it.name || it.word || '').toLowerCase() !== targetName.toLowerCase());
      const shuffledDistractors = [...distractors].sort(() => Math.random() - 0.5).slice(0, 4);

      const pool = [];
      for (let i = 0; i < targetCount; i++) {
        pool.push({ isTarget: true, name: targetName, icon: targetIcon });
      }
      shuffledDistractors.forEach(d => {
        pool.push({ isTarget: false, name: d.name || d.word, icon: d.icon });
      });
      const shuffledPool = pool.sort(() => Math.random() - 0.5);

      contentHtml = `
        <div class="pedagogical-skill-badge">🎯 Habilidad: ${skillName}</div>
        <p style="color:#4b5563; font-size:1.05rem; margin:6px 0 12px; font-weight:700;">
          ${lvl.mission || `Encuentra y recolecta ${targetCount} ${targetName}s en el aula.`}
        </p>
        <button class="toddler-nav-pill active" style="margin:0 auto 12px; display:inline-flex; align-items:center; gap:8px;" onclick="toddlersEngine.playAudio('Find the ${cleanWord}! Can you collect ${targetCount} ${cleanWord}s?')">
          🔊 Escuchar Misión ("Find the ${targetName}")
        </button>
        <div class="collector-mission-bar">
          <span>🎯 Recolectados: <strong id="collectorCounterText">${state.collectedCount} / ${targetCount}</strong></span>
          <span style="color:#0284c7;">Objetivo: ${targetName} ${this.renderVisual(targetIcon, targetName)}</span>
        </div>
        <div id="collectorHintBanner" style="min-height:24px; font-weight:800; font-size:0.92rem; color:#6b7280; margin-bottom:10px;">
          Toca cada ${targetName} que encuentres:
        </div>
        <div class="game-collector-grid">
          ${shuffledPool.map((it, idx) => `
            <div class="collector-card" id="colCard-${idx}" onclick="toddlersEngine.handleCollectorCardClick(this, ${it.isTarget}, '${it.name.replace(/'/g, "\\'")}', '${cleanWord}')">
              <span class="card-icon">${this.renderVisual(it.icon, it.name)}</span>
              <span class="card-name">${it.name}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (gameMode === 'phonics') {
      const wordToSpell = (targetName.replace(/[^A-Za-z]/g, '') || 'BOOK').toUpperCase();
      state.targetWord = wordToSpell;
      state.letterIndex = 0;

      const letters = wordToSpell.split('');
      const shuffledTiles = letters.map((char, i) => ({ char, id: i })).sort(() => Math.random() - 0.5);

      contentHtml = `
        <div class="pedagogical-skill-badge">🔤 Habilidad: ${skillName}</div>
        <p style="color:#4b5563; font-size:1.05rem; margin:6px 0 12px; font-weight:700;">
          Construye la palabra <strong>${wordToSpell}</strong> tocando las letras en orden fonético:
        </p>
        <div style="font-size:3.5rem; margin:6px 0;">${this.renderVisual(targetIcon, targetName)}</div>
        <button class="toddler-nav-pill active" style="margin:0 auto 10px; display:inline-flex; align-items:center; gap:8px;" onclick="toddlersEngine.playAudio('${wordToSpell}')">
          🔊 Escuchar Palabra ("${wordToSpell}")
        </button>
        <div class="letter-builder-slots" id="letterSlotsContainer">
          ${letters.map((char, i) => `<div class="letter-slot" id="letterSlot-${i}">_</div>`).join('')}
        </div>
        <div id="phonicsHintBanner" style="min-height:24px; font-weight:800; font-size:0.92rem; color:#6b7280; margin:10px 0 6px;">
          Toca la primera letra: <strong>${letters[0]}</strong>
        </div>
        <div class="letter-tiles-pool">
          ${shuffledTiles.map(t => `
            <button type="button" class="letter-tile-btn" onclick="toddlersEngine.handlePhonicsTileClick(this, '${t.char}', '${wordToSpell}')">
              ${t.char}
            </button>
          `).join('')}
        </div>
      `;
    } else if (gameMode === 'counting') {
      const countN = Math.max(3, Math.min(targetCount || 5, 5));
      state.targetCount = countN;
      state.countedItems = 0;

      contentHtml = `
        <div class="pedagogical-skill-badge">🔢 Habilidad: ${skillName}</div>
        <p style="color:#4b5563; font-size:1.05rem; margin:6px 0 12px; font-weight:700;">
          Toca y cuenta los <strong>${countN} ${targetName}s</strong> uno por uno:
        </p>
        <button class="toddler-nav-pill active" style="margin:0 auto 12px; display:inline-flex; align-items:center; gap:8px;" onclick="toddlersEngine.playAudio('Count to ${countN}! Tap each ${cleanWord}!')">
          🔊 Escuchar Consigna
        </button>
        <div class="collector-mission-bar">
          <span>🔢 Conteo: <strong id="countingCounterText">0 / ${countN}</strong></span>
          <span id="countingSpokenWord" style="color:#2563eb; font-weight:900;">¡Empieza a contar!</span>
        </div>
        <div class="counting-stage-grid">
          ${Array.from({ length: countN }).map((_, i) => `
            <button type="button" class="counting-item-btn" id="countBtn-${i}" onclick="toddlersEngine.handleCountingItemClick(this, ${countN}, '${cleanWord}')">
              ${this.renderVisual(targetIcon, targetName)}
            </button>
          `).join('')}
        </div>
      `;
    } else {
      const currentStep = state.stepIndex;
      const explorePool = exploreItems.length >= 3 ? exploreItems : [
        { name: targetName, icon: targetIcon },
        { name: 'Book', icon: '📖' },
        { name: 'Chair', icon: '🪑' }
      ];

      const stepTarget = explorePool[currentStep % explorePool.length];
      const stepDistractors = explorePool.filter(it => (it.name || it.word) !== (stepTarget.name || stepTarget.word)).slice(0, 2);
      const stepOptions = [stepTarget, ...stepDistractors].sort(() => Math.random() - 0.5);

      const stepPrompt = (currentStep === 0) 
        ? `Encuentra: "${stepTarget.name || stepTarget.word}"`
        : ((currentStep === 1) ? `¿Cuál objeto es "${stepTarget.name || stepTarget.word}"?` : `Reto final: Toca "${stepTarget.name || stepTarget.word}"`);

      contentHtml = `
        <div class="pedagogical-skill-badge">🎯 Habilidad: ${skillName}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin:8px 0 12px; flex-wrap:wrap; gap:8px;">
          <span style="font-weight:900; color:#86198f; font-size:1.05rem;">Paso ${currentStep + 1} de 3</span>
          <span style="background:#e0e7ff; color:#3730a3; padding:4px 12px; border-radius:999px; font-weight:800; font-size:0.85rem;">Precisión en curso</span>
        </div>
        <p style="color:#1f2937; font-size:1.15rem; font-weight:800; margin:0 0 10px;">
          ${stepPrompt}
        </p>
        <button class="toddler-nav-pill active" style="margin:0 auto 12px; display:inline-flex; align-items:center; gap:8px;" onclick="toddlersEngine.playAudio('${(stepTarget.name || stepTarget.word).replace(/'/g, "\\'")}')">
          🔊 Escuchar Sonido ("${stepTarget.name || stepTarget.word}")
        </button>
        <div class="checkpoint-choices-grid">
          ${stepOptions.map(opt => {
            const isCorrect = (opt.name || opt.word) === (stepTarget.name || stepTarget.word);
            const optName = opt.name || opt.word;
            return `
              <button type="button" class="checkpoint-choice-btn" onclick="toddlersEngine.handleCheckpointAnswer(this, ${isCorrect}, ${currentStep + 1}, 3, ${levelNum})">
                <div style="font-size:3rem; margin-bottom:6px;">${this.renderVisual(opt.icon, optName)}</div>
                <div style="font-size:1rem; font-weight:800; color:#1e293b;">${optName}</div>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    modal.innerHTML = `
      <div class="diploma-modal-card" style="border-color:#d946ef; max-width:620px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1.5px solid #f3e8ff; padding-bottom:8px;">
          <h2 style="color:#86198f; margin:0; font-size:1.35rem;">Nivel ${levelNum}: ${lvl.title}</h2>
          <button style="border:none; background:none; font-size:1.4rem; cursor:pointer; color:#9ca3af;" onclick="document.getElementById('gameLevelModal')?.remove()">✕</button>
        </div>
        ${contentHtml}
        <div style="margin-top:1.25rem;">
          <button class="toddler-nav-pill" style="margin:0 auto;" onclick="document.getElementById('gameLevelModal')?.remove()">
            Salir del Nivel
          </button>
        </div>
      </div>
    `;
  }

  handleCollectorCardClick(cardEl, isTarget, itemName, targetName) {
    if (cardEl.classList.contains('collected')) return;
    const state = this.currentGameLevelState;

    if (isTarget) {
      cardEl.classList.add('collected');
      const badge = document.createElement('span');
      badge.className = 'check-badge';
      badge.textContent = '✓';
      cardEl.appendChild(badge);

      state.collectedCount++;
      const countWords = ['One', 'Two', 'Three', 'Four', 'Five'];
      const spokenCount = countWords[state.collectedCount - 1] || `${state.collectedCount}`;
      this.playAudio(`${targetName}! ${spokenCount}!`);

      const counterText = document.getElementById('collectorCounterText');
      if (counterText) counterText.textContent = `${state.collectedCount} / ${state.targetCount}`;

      const hintBanner = document.getElementById('collectorHintBanner');
      if (hintBanner) {
        hintBanner.style.color = '#10b981';
        hintBanner.textContent = `✓ ¡Excelente! Encontraste un ${targetName} (${state.collectedCount} de ${state.targetCount}).`;
      }

      if (state.collectedCount >= state.targetCount) {
        setTimeout(() => {
          this.completeGameLevelWithAssessment(state.levelNum, state.skillName, state.targetCount, state.errorsCount);
        }, 700);
      }
    } else {
      state.errorsCount++;
      cardEl.style.transform = 'translateX(-6px)';
      cardEl.style.borderColor = '#ef4444';
      setTimeout(() => {
        cardEl.style.transform = 'translateX(6px)';
        setTimeout(() => {
          cardEl.style.transform = 'none';
          cardEl.style.borderColor = '#e2e8f0';
        }, 120);
      }, 120);

      this.playAudio(`That is ${itemName}! Look for the ${targetName}!`);
      const hintBanner = document.getElementById('collectorHintBanner');
      if (hintBanner) {
        hintBanner.style.color = '#dc2626';
        hintBanner.textContent = `❌ Eso es "${itemName}". ¡Busca "${targetName}"!`;
      }
    }
  }

  handlePhonicsTileClick(tileEl, letter, targetWord) {
    if (tileEl.classList.contains('used')) return;
    const state = this.currentGameLevelState;
    const expectedLetter = targetWord[state.letterIndex];

    if (letter === expectedLetter) {
      tileEl.classList.add('used');
      const slot = document.getElementById(`letterSlot-${state.letterIndex}`);
      if (slot) {
        slot.textContent = letter;
        slot.classList.add('filled');
      }

      this.playAudio(letter);
      state.letterIndex++;

      const hintBanner = document.getElementById('phonicsHintBanner');
      if (state.letterIndex < targetWord.length) {
        if (hintBanner) {
          hintBanner.style.color = '#10b981';
          hintBanner.textContent = `✓ ¡Bien! Ahora toca la letra: ${targetWord[state.letterIndex]}`;
        }
      } else {
        if (hintBanner) {
          hintBanner.style.color = '#10b981';
          hintBanner.textContent = `🎉 ¡Palabra completa: ${targetWord}!`;
        }
        this.playAudio(`${targetWord}! Awesome!`);
        setTimeout(() => {
          this.completeGameLevelWithAssessment(state.levelNum, state.skillName, targetWord.length, state.errorsCount);
        }, 800);
      }
    } else {
      state.errorsCount++;
      tileEl.style.transform = 'translateX(-6px)';
      setTimeout(() => {
        tileEl.style.transform = 'translateX(6px)';
        setTimeout(() => {
          tileEl.style.transform = 'none';
        }, 120);
      }, 120);

      this.playAudio(`Find letter ${expectedLetter}`);
      const hintBanner = document.getElementById('phonicsHintBanner');
      if (hintBanner) {
        hintBanner.style.color = '#dc2626';
        hintBanner.textContent = `❌ Necesitamos la letra "${expectedLetter}". ¡Búscala!`;
      }
    }
  }

  handleCountingItemClick(btnEl, targetCount, targetName) {
    if (btnEl.classList.contains('counted')) return;
    const state = this.currentGameLevelState;

    btnEl.classList.add('counted');
    state.countedItems++;

    const badge = document.createElement('span');
    badge.className = 'counting-num-badge';
    badge.textContent = `${state.countedItems}`;
    btnEl.appendChild(badge);

    const countWords = ['One', 'Two', 'Three', 'Four', 'Five'];
    const spoken = countWords[state.countedItems - 1] || `${state.countedItems}`;
    this.playAudio(spoken);

    const counterText = document.getElementById('countingCounterText');
    if (counterText) counterText.textContent = `${state.countedItems} / ${targetCount}`;

    const spokenBanner = document.getElementById('countingSpokenWord');
    if (spokenBanner) spokenBanner.textContent = `"${spoken}!"`;

    if (state.countedItems >= targetCount) {
      setTimeout(() => {
        this.playAudio(`${targetCount}! Fantastic counting!`);
        this.completeGameLevelWithAssessment(state.levelNum, state.skillName, targetCount, state.errorsCount);
      }, 700);
    }
  }

  handleCheckpointAnswer(btnEl, isCorrect, nextStepIndex, totalSteps, levelNum) {
    const state = this.currentGameLevelState;

    if (isCorrect) {
      this.playAudio('Correct! Great job!');
      btnEl.style.borderColor = '#10b981';
      btnEl.style.background = '#dcfce7';

      setTimeout(() => {
        if (nextStepIndex < totalSteps) {
          state.stepIndex = nextStepIndex;
          this.renderGameLevelModalContent();
        } else {
          this.completeGameLevelWithAssessment(levelNum, state.skillName, totalSteps, state.errorsCount);
        }
      }, 500);
    } else {
      state.errorsCount++;
      btnEl.style.transform = 'translateX(-6px)';
      btnEl.style.borderColor = '#ef4444';
      setTimeout(() => {
        btnEl.style.transform = 'translateX(6px)';
        setTimeout(() => {
          btnEl.style.transform = 'none';
        }, 120);
      }, 120);
      this.playAudio('Oops, listen carefully and try again!');
    }
  }

  completeGameLevelWithAssessment(levelNum, skillName, totalQuestions, errorsCount) {
    this.playCheerSound();

    let stars = 3;
    let feedbackMsg = "¡Desempeño Perfecto! Dominaste completamente la habilidad.";
    if (errorsCount === 1 || errorsCount === 2) {
      stars = 2;
      feedbackMsg = "¡Muy Buen Trabajo! Superaste el reto con gran perseverancia.";
    } else if (errorsCount >= 3) {
      stars = 1;
      feedbackMsg = "¡Buen Esfuerzo! Puedes repetirlo para conseguir las 3 estrellas.";
    }

    const accuracy = Math.max(10, Math.round((totalQuestions / (totalQuestions + errorsCount)) * 100));

    const uProg = this.getUnitProgress(this.currentUnitId);
    if (!uProg.gameLevelsStars) uProg.gameLevelsStars = {};
    uProg.gameLevelsStars[levelNum] = Math.max(uProg.gameLevelsStars[levelNum] || 0, stars);

    if (levelNum >= (uProg.gameUnlockedLevel || 1) && levelNum < 12) {
      uProg.gameUnlockedLevel = levelNum + 1;
    }
    this.addStars(20);
    this.saveProgress();

    let modal = document.getElementById('gameLevelModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'gameLevelModal';
      modal.className = 'diploma-modal-overlay';
      document.body.appendChild(modal);
    }

    const starsHtml = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

    modal.innerHTML = `
      <div class="diploma-modal-card" style="border-color:${stars === 3 ? '#10b981' : '#d946ef'}; max-width:620px;">
        <div style="font-size:3.5rem; margin-bottom:8px; animation: popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);">
          ${stars === 3 ? '🏆 🌟 🌟 🌟' : (stars === 2 ? '🎉 ⭐ ⭐ ☆' : '💪 ⭐ ☆ ☆')}
        </div>
        <h2 style="color:${stars === 3 ? '#059669' : '#86198f'}; font-size:1.65rem; margin:0 0 6px; font-weight:900;">
          ¡Nivel ${levelNum} Completado!
        </h2>
        <div style="font-size:1.8rem; color:#f59e0b; margin-bottom:10px;">${starsHtml}</div>
        <p style="color:#4b5563; font-weight:700; font-size:0.98rem; margin:0 0 14px;">${feedbackMsg}</p>

        <div class="assessment-rubric-card">
          <div class="rubric-row">
            <span style="color:#64748b; font-weight:700;">Habilidad Evaluada:</span>
            <span style="color:#86198f; font-weight:800;">${skillName}</span>
          </div>
          <div class="rubric-row">
            <span style="color:#64748b; font-weight:700;">Precisión del Niño:</span>
            <span style="color:#059669; font-weight:800;">${accuracy}% (${totalQuestions} superados)</span>
          </div>
          <div class="rubric-row">
            <span style="color:#64748b; font-weight:700;">Reintentos / Errores:</span>
            <span style="color:${errorsCount === 0 ? '#059669' : '#d97706'}; font-weight:800;">${errorsCount}</span>
          </div>
          <div class="rubric-row">
            <span style="color:#64748b; font-weight:700;">Recompensa:</span>
            <span style="color:#f59e0b; font-weight:800;">+20 Estrellas ⭐</span>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:12px; margin-top:1.5rem; flex-wrap:wrap;">
          <button class="toddler-nav-pill" onclick="toddlersEngine.playGameLevel(${levelNum})">
            🔁 Repetir Nivel
          </button>
          ${levelNum < 12 ? `
            <button class="toddler-nav-pill active" onclick="document.getElementById('gameLevelModal')?.remove(); toddlersEngine.playGameLevel(${levelNum + 1}); const ws = document.getElementById('toddlerWorkspace'); if (ws && toddlersEngine.currentTab === 'game') toddlersEngine.renderGame(ws);">
              Siguiente Nivel (${levelNum + 1}) ➔
            </button>
          ` : `
            <button class="toddler-nav-pill active" onclick="document.getElementById('gameLevelModal')?.remove(); toddlersEngine.switchTab('finalChallenge');">
              Ver Trofeo Dorado 🏆
            </button>
          `}
        </div>
      </div>
    `;

    const ws = document.getElementById('toddlerWorkspace');
    if (ws && this.currentTab === 'game') this.renderGame(ws);
  }

  /* ==========================================================================
     SECTION: FINAL INTEGRATIVE CHALLENGE (10 STEPS)
     ========================================================================== */
  renderFinalChallenge(container) {
    const unit = this.getCurrentUnit();
    if (!unit || !unit.finalChallenge) return;

    const steps = unit.finalChallenge.steps || [];
    const currentStep = steps[this.currentChallengeStep] || steps[0];

    let html = `
      <div class="final-challenge-stepper-wrap">
        <div style="text-align:center; margin-bottom:1.5rem;">
          <h2 style="margin:0 0 6px; font-size:1.5rem; color:#854d0e;">🏆 Unit ${unit.id} Final Integrative Challenge</h2>
          <p style="margin:0; font-size:0.95rem; color:#6b7280;">Complete all 10 multi-skill steps to earn your official Bilikids Certificate!</p>
        </div>

        <div class="challenge-stepper-bar">
    `;

    for (let i = 0; i < steps.length; i++) {
      let stepClass = 'challenge-step-badge';
      if (i < this.currentChallengeStep) stepClass += ' completed';
      else if (i === this.currentChallengeStep) stepClass += ' active';
      html += `<div class="${stepClass}">${i + 1}</div>`;
    }

    html += `
        </div>

        <div class="exercise-prompt-card" style="border-color:#eab308; background:#fefce8;">
          <div style="font-size:3.5rem; margin-bottom:0.5rem;">${this.renderVisual(currentStep.icon || '🏅', currentStep.question || currentStep.instruction)}</div>
          <span style="background:#fef08a; color:#854d0e; padding:4px 12px; border-radius:999px; font-weight:800; font-size:0.8rem; text-transform:uppercase;">
            Step ${this.currentChallengeStep + 1} of 10 • ${currentStep.skill || 'Mastery'}
          </span>
          <h3 class="exercise-instruction" style="margin-top:0.75rem;">${currentStep.question || currentStep.instruction}</h3>
          ${currentStep.audioPrompt ? `
            <button class="exercise-audio-trigger" style="background:#eab308;" onclick="toddlersEngine.playAudio('${currentStep.audioPrompt.replace(/'/g, "\\'")}')">
              🔊 Listen Prompt
            </button>
          ` : ''}
        </div>

        <div class="exercise-choices-grid">
    `;

    (currentStep.options || []).forEach((opt, idx) => {
      const isCorrect = (opt.text === currentStep.answer || opt === currentStep.answer || idx === currentStep.correct);
      const optText = (typeof opt === 'string') ? opt : (opt.text || opt.name || '');
      const optIcon = this.renderVisual((typeof opt === 'object') ? (opt.icon || '⭐') : '⭐', optText);

      html += `
        <div class="exercise-choice-card" onclick="toddlersEngine.handleChallengeStepChoice(${isCorrect}, this)">
          <div class="choice-icon">${optIcon}</div>
          <div class="choice-text">${optText}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  handleChallengeStepChoice(isCorrect, element) {
    if (isCorrect) {
      if (element) element.classList.add('correct');
      this.playCheerSound();
      this.addStars(15);
      const unit = this.getCurrentUnit();
      const steps = (unit.finalChallenge && unit.finalChallenge.steps) ? unit.finalChallenge.steps : [];

      if (this.currentChallengeStep < steps.length - 1) {
        this.showCelebrationBanner(
          `⭐ ¡Paso ${this.currentChallengeStep + 1} Superado!`,
          `Avanzando al siguiente paso... 🚀`,
          '#0284c7'
        );
        setTimeout(() => {
          this.currentChallengeStep++;
          const ws = document.getElementById('toddlerWorkspace');
          if (ws) this.renderFinalChallenge(ws);
        }, 750);
      } else {
        const uProg = this.getUnitProgress(this.currentUnitId);
        uProg.challengeCompleted = true;
        this.saveProgress();
        setTimeout(() => {
          this.showDiplomaModal(unit);
        }, 600);
      }
    } else {
      if (element) {
        element.classList.add('wrong');
        setTimeout(() => element.classList.remove('wrong'), 700);
      }
      this.playAudio('Try again!');
    }
  }

  showDiplomaModal(unit) {
    const modal = document.createElement('div');
    modal.className = 'diploma-modal-overlay';
    modal.id = 'diplomaModal';
    modal.innerHTML = `
      <div class="diploma-modal-card">
        <div class="diploma-ribbon-badge">🎓🌟</div>
        <h2 class="diploma-title">¡FELICITACIONES, SUPER TODDLER!</h2>
        <p class="diploma-desc">
          Has completado con éxito la <strong>Unidad ${unit.id}: ${unit.title}</strong> de Bilikids Adventure,
          demostrando dominio en Listening, Reading, Speaking y Writing.
        </p>
        <div style="background:#fef3c7; border:2px dashed #f59e0b; border-radius:18px; padding:1.25rem; margin-bottom:1.5rem;">
          <div style="font-size:1.15rem; font-weight:900; color:#92400e;">Diploma de Honor Bilikids</div>
          <div style="font-size:0.95rem; color:#78350f; margin-top:4px;">Otorgado a: <strong>Matías (Toddler)</strong></div>
          <div style="font-size:1.5rem; margin-top:8px;">⭐⭐⭐⭐⭐</div>
        </div>
        <button class="diploma-close-btn" onclick="document.getElementById('diplomaModal')?.remove(); toddlersEngine.switchTab('progress');">
          Continuar al Panel de Progreso ➔
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    this.playAudio(`Congratulations! You completed Unit ${unit.id}!`);
  }

  /* ==========================================================================
     SECTION: PROGRESS & 4-SKILLS ASSESSMENT
     ========================================================================== */
  renderProgressDashboard(container) {
    const unit = this.getCurrentUnit();
    if (!unit) return;

    const uProg = this.getUnitProgress(this.currentUnitId);
    const getAvg = arr => arr.reduce((a, b) => a + b, 0) / (arr.length || 1);

    const lScore = Math.round(getAvg(uProg.listening || [0]));
    const rScore = Math.round(getAvg(uProg.reading || [0]));
    const wScore = Math.round(getAvg(uProg.writing || [0]));
    const sScore = Math.round(getAvg(uProg.speaking || [0]));

    let html = `
      <div style="max-width:860px; margin:0 auto;">
        <div style="text-align:center; margin-bottom:2rem;">
          <h2 style="margin:0 0 6px; font-size:1.5rem; color:#78350f;">📊 Unit ${unit.id} Skills Assessment</h2>
          <p style="margin:0; font-size:0.95rem; color:#6b7280;">Real-time mastery tracking across the 4 core language competencies.</p>
        </div>

        <div class="progress-summary-grid">
          <div class="progress-skill-card listening">
            <div style="font-size:2.5rem;">🎧</div>
            <h3 style="margin:6px 0 2px; color:#0369a1;">Listening</h3>
            <div style="font-size:1.4rem; font-weight:900; color:#0284c7;">${lScore}%</div>
            <div class="progress-meter-track">
              <div class="progress-meter-fill" style="width:${lScore}%; background:#0ea5e9;"></div>
            </div>
          </div>

          <div class="progress-skill-card reading">
            <div style="font-size:2.5rem;">📖</div>
            <h3 style="margin:6px 0 2px; color:#5b21b6;">Reading</h3>
            <div style="font-size:1.4rem; font-weight:900; color:#8b5cf6;">${rScore}%</div>
            <div class="progress-meter-track">
              <div class="progress-meter-fill" style="width:${rScore}%; background:#8b5cf6;"></div>
            </div>
          </div>

          <div class="progress-skill-card speaking">
            <div style="font-size:2.5rem;">🗣️</div>
            <h3 style="margin:6px 0 2px; color:#be123c;">Speaking</h3>
            <div style="font-size:1.4rem; font-weight:900; color:#f43f5e;">${sScore}%</div>
            <div class="progress-meter-track">
              <div class="progress-meter-fill" style="width:${sScore}%; background:#f43f5e;"></div>
            </div>
          </div>

          <div class="progress-skill-card writing">
            <div style="font-size:2.5rem;">✍️</div>
            <h3 style="margin:6px 0 2px; color:#047857;">Writing</h3>
            <div style="font-size:1.4rem; font-weight:900; color:#10b981;">${wScore}%</div>
            <div class="progress-meter-track">
              <div class="progress-meter-fill" style="width:${wScore}%; background:#10b981;"></div>
            </div>
          </div>
        </div>

        <div style="background:#ffffff; border:2px solid #fde68a; border-radius:20px; padding:1.5rem; text-align:center;">
          <h3 style="margin:0 0 8px; color:#92400e;">🏆 Unit ${unit.id} Status</h3>
          <p style="color:#6b7280; font-size:1rem; margin-bottom:1.25rem;">
            Game Levels Unlocked: <strong>${uProg.gameUnlockedLevel || 1} / 12</strong> •
            Final Challenge: <strong>${uProg.challengeCompleted ? '✅ Completed' : '⏳ In Progress'}</strong>
          </p>
          <button class="toddler-nav-pill active" style="margin:0 auto;" onclick="toddlersEngine.switchTab('explore')">
            Back to Explore Vocabulary ➔
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }
}

// Make engine globally accessible
window.ToddlersUnitsEngine = ToddlersUnitsEngine;
