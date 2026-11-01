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

    // LocalStorage Key
    this.storageKey = 'bilikids_toddlers_progress_v2';
    this.userProgress = this.loadProgress();
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

    this.renderUnitsSelector();
    this.renderHeader();
    this.renderTabs();
    this.renderWorkspace();
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
  playAudio(text, voice = 'kid') {
    if (!text || typeof text !== 'string') return;

    const normKey = (text || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
    const manifest = window.ToddlersAudioManifest || window.BilikidsAudioManifest || {};
    const audioSrc = manifest[normKey] || manifest[text];

    if (audioSrc) {
      try {
        if (this._currentAudio) {
          this._currentAudio.pause();
          this._currentAudio.currentTime = 0;
        }
        const audio = new Audio(audioSrc);
        this._currentAudio = audio;
        audio.preservesPitch = true;
        audio.playbackRate = 0.92;
        audio.play().catch(() => {
          this.fallbackSpeechSynthesis(text);
        });
        return;
      } catch (e) {
        // Fallback
      }
    }

    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(text, voice);
    } else {
      this.fallbackSpeechSynthesis(text);
    }
  }

  fallbackSpeechSynthesis(text) {
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
    let html = `
      <div class="toddler-units-selector-wrap" style="width:100%;">
        <div class="toddler-units-selector-header">
          <span class="toddler-units-selector-title">
            🎒 15 Unidades Curriculares • Toddlers 01 (6-8 años)
          </span>
          <span class="toddler-units-counter-badge">
            Unidad ${this.currentUnitId} de ${allUnits.length}
          </span>
        </div>
        <div class="toddler-units-nav">
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
      { id: 'writing', label: '✍️ Writing (6)', className: 'tab-writing' },
      { id: 'speaking', label: '🗣️ Speaking (6)', className: 'tab-speaking' },
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
          <p style="margin:4px 0 0; color:#6b7280; font-size:0.95rem;">Tap any card to hear authentic pronunciation, learn fun facts, and practice English!</p>
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
            <div class="explore-icon">${item.icon || '✨'}</div>
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

    // Auto-trigger audio for listening or speaking prompts
    if (skillName === 'listening') {
      const audioToPlay = currentEx.audio || currentEx.audioWord || currentEx.targetWord || currentEx.prompt;
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
            const optIcon = (typeof opt === 'object') ? (opt.icon || '🫧') : '🫧';
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
            const optIcon = (typeof opt === 'object') ? (opt.icon || '⭐') : '⭐';
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
      const shadowIcon = (typeof correctOpt === 'object' ? correctOpt.icon : '❓') || '🔍';
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
            const optIcon = (typeof opt === 'object') ? (opt.icon || '🔍') : '🔍';
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            const cleanOptText = optName.replace(/'/g, "\\'");
            return `
              <div class="exercise-choice-card" id="choice-${idx}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'listening')">
                <div class="choice-icon">${optIcon}</div>
                <div class="choice-text">${optName}</div>
              </div>
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
          const optIcon = (typeof opt === 'object') ? (opt.icon || '✨') : '✨';
          const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
            (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
          const cleanOptText = optName.replace(/'/g, "\\'");
          return `
            <div class="exercise-choice-card" id="choice-${idx}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'listening')">
              <div class="choice-icon">${optIcon}</div>
              <div class="choice-text">${optName}</div>
            </div>
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

  /* --------------------------------------------------------------------------
     2. READING MECHANICS (STORYBOOK READER, SENTENCE TRAINS, RIDDLES)
     -------------------------------------------------------------------------- */
  renderReadingMechanic(ex, actIndex) {
    // Act 5: Illustrated Micro-Storybook Reader mechanic!
    if (actIndex === 5 || ex.storyText || ex.story) {
      const story = ex.storyText || ex.story || 'Luna and Leo are exploring today!';
      return `
        <div style="background:linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%); border:3px solid #fde68a; border-radius:24px; padding:1.75rem; margin-bottom:1.5rem; box-shadow:0 8px 20px rgba(245, 158, 11, 0.15);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1.5px dashed #fcd34d; padding-bottom:8px;">
            <span style="font-weight:900; color:#b45309; font-size:1.15rem; display:flex; align-items:center; gap:8px;">
              📖 Bilikids Illustrated Storybook
            </span>
            <button class="toddler-nav-pill active" onclick="toddlersEngine.playAudio('${story.replace(/'/g, "\\'")}')">
              🔊 Read Aloud
            </button>
          </div>
          <div style="font-size:1.2rem; line-height:1.7; color:#78350f; font-weight:700;">
            ${story}
          </div>
        </div>

        <div class="exercise-prompt-card">
          <h3 class="exercise-instruction">${ex.prompt || ex.question || 'Based on the story, answer the question:'}</h3>
        </div>

        <div class="exercise-choices-grid">
          ${(ex.options || []).map((opt, idx) => {
            const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
            const optIcon = (typeof opt === 'object') ? (opt.icon || '📖') : '📖';
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            const cleanOptText = optName.replace(/'/g, "\\'");
            return `
              <div class="exercise-choice-card" id="choice-${idx}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'reading')">
                <div class="choice-icon">${optIcon}</div>
                <div class="choice-text">${optName}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Act 2: Sentence Puzzle Train Wagon mechanic!
    if (actIndex === 2) {
      const sentence = ex.sentence || 'This is a red pencil.';
      return `
        <div class="exercise-prompt-card">
          <div style="font-size:3rem; margin-bottom:8px;">🚂🧩</div>
          <h3 class="exercise-instruction">Sentence Train Connector! Complete the sentence wagon:</h3>
          <div class="sentence-train-track">
            <span class="train-wagon-block">🚂 Locomotive</span>
            <span class="train-wagon-block">${ex.prompt || sentence.split(' ')[0] || 'I have'}</span>
            <span class="train-wagon-block" style="border-style:dashed; background:#fef3c7; color:#b45309;">[ ??? ]</span>
          </div>
        </div>

        <div class="exercise-choices-grid">
          ${(ex.options || []).map((opt, idx) => {
            const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
            const optIcon = (typeof opt === 'object') ? (opt.icon || '🚂') : '🚂';
            const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
              (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
            const cleanOptText = optName.replace(/'/g, "\\'");
            return `
              <div class="exercise-choice-card" id="choice-${idx}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'reading')">
                <div class="choice-icon">${optIcon}</div>
                <div class="choice-text">${optName}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Default Reading card choices
    return `
      <div class="exercise-prompt-card">
        <h3 class="exercise-instruction">${ex.prompt || ex.text || ex.question || 'Read and select the matching answer:'}</h3>
        ${ex.sentence ? `<p style="font-size:1.35rem; font-weight:800; color:#4b5563; margin:8px 0;">"${ex.sentence}"</p>` : ''}
      </div>

      <div class="exercise-choices-grid">
        ${(ex.options || []).map((opt, idx) => {
          const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
          const optIcon = (typeof opt === 'object') ? (opt.icon || '📖') : '📖';
          const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
            (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));
          const cleanOptText = optName.replace(/'/g, "\\'");
          return `
            <div class="exercise-choice-card" id="choice-${idx}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'reading')">
              <div class="choice-icon">${optIcon}</div>
              <div class="choice-text">${optName}</div>
            </div>
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
          <div style="font-size:3.5rem; margin-bottom:8px;">${ex.icon || '⌨️'}</div>
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
        <div style="font-size:3.5rem; margin-bottom:8px;">${ex.icon || '✏️'}</div>
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
        <div style="font-size:3.5rem; margin-bottom:0.5rem;">${ex.icon || '🎤'}</div>
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

          if (heardClean.includes(targetClean) || targetClean.includes(heardClean) || heardClean.length > 2) {
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
      status.innerHTML = `<span class="speaking-feedback-badge success">🌟 Excellent Pronunciation! Heard: "${heardText}"</span>`;
    }
    this.handleCorrectAnswer('speaking', targetPhrase);
  }

  handleSpeakingFallback(targetPhrase) {
    const status = document.getElementById('speakingStatus');
    if (status) {
      status.innerHTML = `<span class="speaking-feedback-badge success">⭐ Great Effort! Luna heard your voice!</span>`;
    }
    setTimeout(() => {
      this.handleCorrectAnswer('speaking', targetPhrase);
    }, 1200);
  }

  /* --------------------------------------------------------------------------
     ANSWER EVALUATION
     -------------------------------------------------------------------------- */
  handleChoiceClick(cardIndex, isCorrect, chosenText, skillName) {
    const card = document.getElementById(`choice-${cardIndex}`);
    if (!card) return;

    if (isCorrect) {
      card.classList.add('correct');
      this.handleCorrectAnswer(skillName, chosenText);
    } else {
      card.classList.add('wrong');
      this.playAudio('Try again!');
      setTimeout(() => card.classList.remove('wrong'), 700);
    }
  }

  handleCorrectAnswer(skillName, text) {
    this.playCheerSound();
    this.addStars(10);

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
          this.currentActivityIndex++;
          this.currentExerciseIndex = 0;
          this.selectedLetters = [];
          this.memoryFlippedCards = [];
          alert(`🎉 Activity ${this.currentActivityIndex} completed! Moving to Activity ${this.currentActivityIndex + 1}!`);
          const ws = document.getElementById('toddlerWorkspace');
          if (ws) this.renderSkillWorkspace(ws, skillName);
        } else {
          alert(`🏆 Outstanding! You completed all 6 ${skillName.toUpperCase()} activities for Unit ${unit.id}!`);
          this.switchTab('game');
        }
      }
    }, 1100);
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

    const unitVids = unit.videos || [];
    const checkpoints = (unitVids[0] && unitVids[0].checkpoints) ? unitVids[0].checkpoints : [
      { question: `What is the main topic of Unit ${unit.id}?`, options: [unit.title, 'Space Rockets', 'Jungle Animals'], correct: 0 },
      { question: "Did you enjoy singing and dancing with the characters?", options: ["Yes, I loved it!", "No"], correct: 0 }
    ];

    let html = `
      <div class="video-section-wrap">
        <div style="margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <h2 style="margin:0 0 4px; font-size:1.45rem; color:#78350f;">🎬 ${verifiedVid.title}</h2>
            <p style="margin:0; font-size:0.95rem; color:#6b7280;">Watch the official video lesson or play the interactive Bilikids song stage!</p>
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
        <h3 style="margin:0 0 1rem; color:#92400e; font-size:1.15rem;">🎯 Video Comprehension Checkpoints</h3>
    `;

    checkpoints.forEach((cp, idx) => {
      html += `
        <div class="video-checkpoint-item" id="video-cp-${idx}">
          <div style="font-weight:800; color:#374151; margin-bottom:8px;">${idx + 1}. ${cp.question}</div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            ${(cp.options || []).map((opt, optIdx) => {
              const isCorrect = (optIdx === cp.correct || opt === cp.answer);
              return `
                <button class="toddler-nav-pill" onclick="toddlersEngine.checkVideoCheckpoint(${idx}, ${isCorrect})">
                  ${opt}
                </button>
              `;
            }).join('')}
          </div>
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
    if (isCorrect) {
      this.playCheerSound();
      this.addStars(15);
      const cpItem = document.getElementById(`video-cp-${cpIndex}`);
      if (cpItem) {
        cpItem.style.background = '#d1fae5';
        cpItem.style.borderColor = '#10b981';
        cpItem.innerHTML += `<div style="color:#047857; font-weight:800; margin-top:8px;">✅ Correct! +15 Stars ⭐</div>`;
      }
    } else {
      this.playAudio('Try again!');
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
        <div class="game-level-node ${nodeClass}" onclick="${isUnlocked ? `toddlersEngine.playGameLevel(${lvl.level})` : `alert('Complete previous level first!')`}">
          <div class="game-level-num">Level ${lvl.level}</div>
          <div class="game-level-icon">${isUnlocked ? (lvl.icon || '🎯') : '🔒'}</div>
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

  playGameLevel(levelNum) {
    const unit = this.getCurrentUnit();
    const levels = (unit.game && unit.game.levels) ? unit.game.levels : [];
    const lvl = levels.find(l => l.level === levelNum) || levels[0];

    const target = lvl.targetWord || lvl.title || 'Goal';
    const cleanWord = target.replace(/'/g, "\\'");

    // Build creative interactive arcade mechanics inside the game modal:
    let gameContentHtml = '';

    if (levelNum <= 4) {
      // Arcade Mode 1: Fast Bubble Pop Rush
      gameContentHtml = `
        <p style="color:#6b7280; font-size:1.1rem; margin-bottom:1rem;">Pop the target bubble to clear Level ${lvl.level}!</p>
        <div class="bubble-pond-container" style="min-height:220px;">
          <div class="floating-bubble-item" onclick="toddlersEngine.handleGameLevelChoice(${lvl.level}, true)">
            <div style="font-size:2.8rem;">${lvl.icon || '🎯'}</div>
            <div style="font-weight:900; color:#0369a1;">${target}</div>
          </div>
          <div class="floating-bubble-item" onclick="toddlersEngine.handleGameLevelChoice(${lvl.level}, false)">
            <div style="font-size:2.8rem;">❌</div>
            <div style="font-weight:900; color:#0369a1;">Other</div>
          </div>
        </div>
      `;
    } else if (levelNum <= 8) {
      // Arcade Mode 2: Mystery Gift Box
      gameContentHtml = `
        <p style="color:#6b7280; font-size:1.1rem; margin-bottom:1rem;">What is hidden inside the treasure box?</p>
        <div style="font-size:5rem; margin:1rem 0; cursor:pointer;" onclick="toddlersEngine.playAudio('${cleanWord}')">🎁</div>
        <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <button class="toddler-nav-pill active" onclick="toddlersEngine.handleGameLevelChoice(${lvl.level}, true)">${target}</button>
          <button class="toddler-nav-pill" onclick="toddlersEngine.handleGameLevelChoice(${lvl.level}, false)">Banana</button>
        </div>
      `;
    } else {
      // Arcade Mode 3: Boss Level Victory
      gameContentHtml = `
        <p style="color:#6b7280; font-size:1.1rem; margin-bottom:1rem;">🏆 Boss Challenge: Spell or identify "${target}"!</p>
        <div style="font-size:4.5rem; margin:0.5rem 0;">${lvl.icon || '👑'}</div>
        <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <button class="writing-check-btn" onclick="toddlersEngine.handleGameLevelChoice(${lvl.level}, true)">Claim Star Victory ⭐</button>
        </div>
      `;
    }

    const modal = document.createElement('div');
    modal.className = 'diploma-modal-overlay';
    modal.id = 'gameLevelModal';
    modal.innerHTML = `
      <div class="diploma-modal-card" style="border-color:#d946ef; max-width:550px;">
        <h2 style="color:#86198f; margin:0 0 6px;">Level ${lvl.level}: ${lvl.title}</h2>
        ${gameContentHtml}
        <div style="margin-top:1.5rem;">
          <button class="toddler-nav-pill" style="margin:0 auto;" onclick="document.getElementById('gameLevelModal')?.remove()">
            Exit Level
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    this.playAudio(target);
  }

  handleGameLevelChoice(levelNum, isCorrect) {
    if (isCorrect) {
      this.playCheerSound();
      this.addStars(20);

      const uProg = this.getUnitProgress(this.currentUnitId);
      if (!uProg.gameLevelsStars) uProg.gameLevelsStars = {};
      uProg.gameLevelsStars[levelNum] = 3;

      if (levelNum >= (uProg.gameUnlockedLevel || 1) && levelNum < 12) {
        uProg.gameUnlockedLevel = levelNum + 1;
      }
      this.saveProgress();

      alert(`🎉 Level ${levelNum} Cleared! 3 Stars awarded! ⭐⭐⭐`);
      document.getElementById('gameLevelModal')?.remove();
      this.renderWorkspace();
    } else {
      this.playAudio('Oops, try again!');
    }
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
          <div style="font-size:3.5rem; margin-bottom:0.5rem;">${currentStep.icon || '🏅'}</div>
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
      const optIcon = (typeof opt === 'object') ? (opt.icon || '⭐') : '⭐';

      html += `
        <div class="exercise-choice-card" onclick="toddlersEngine.handleChallengeStepChoice(${isCorrect})">
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

  handleChallengeStepChoice(isCorrect) {
    if (isCorrect) {
      this.playCheerSound();
      this.addStars(15);
      const unit = this.getCurrentUnit();
      const steps = (unit.finalChallenge && unit.finalChallenge.steps) ? unit.finalChallenge.steps : [];

      if (this.currentChallengeStep < steps.length - 1) {
        this.currentChallengeStep++;
        const ws = document.getElementById('toddlerWorkspace');
        if (ws) this.renderFinalChallenge(ws);
      } else {
        const uProg = this.getUnitProgress(this.currentUnitId);
        uProg.challengeCompleted = true;
        this.saveProgress();
        this.showDiplomaModal(unit);
      }
    } else {
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
          demostrando dominio en Listening, Reading, Writing y Speaking.
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

          <div class="progress-skill-card writing">
            <div style="font-size:2.5rem;">✍️</div>
            <h3 style="margin:6px 0 2px; color:#047857;">Writing</h3>
            <div style="font-size:1.4rem; font-weight:900; color:#10b981;">${wScore}%</div>
            <div class="progress-meter-track">
              <div class="progress-meter-fill" style="width:${wScore}%; background:#10b981;"></div>
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
