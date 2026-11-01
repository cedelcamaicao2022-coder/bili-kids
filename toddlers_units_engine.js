/**
 * Bilikids Adventure - Toddlers 01 Comprehensive Curriculum Engine
 * Complete implementation for all 15 Units:
 * 1. School Objects, 2. Me, 3. Home and Family, 4. My Body, 5. Sunny and Cloudy,
 * 6. Farm Animals, 7. At the Supermarket, 8. Daily Activities, 9. The Park, 10. Around Town,
 * 11. My Backyard, 12. Vehicles, 13. The Ocean, 14. My Toy Box, 15. Being Helpful.
 *
 * Each Unit features:
 * - Explore Section with Interactive Flashcards & Phonics
 * - 6 Listening Activities (5 exercises each = 30)
 * - 6 Reading Activities (5 exercises each = 30)
 * - 6 Writing Activities (5 exercises each = 30)
 * - 6 Speaking Activities (5 exercises each = 30)
 * - Interactive Educational Videos with Checkpoints
 * - 12-Level Progressive Story-driven Game
 * - 10-Step Final Integrative Challenge
 * - Individual Skills Assessment and LocalStorage Persistence
 */

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

    // Word builder state
    this.selectedLetters = [];

    // LocalStorage Key
    this.storageKey = 'bilikids_toddlers_progress_v2';
    this.userProgress = this.loadProgress();
  }

  /* ==========================================================================
     INITIALIZATION & URL ROUTING
     ========================================================================== */
  init() {
    console.log('[ToddlersUnitsEngine] Initializing...');

    // Read unit from URL param if present (e.g. ?unit=4)
    const urlParams = new URLSearchParams(window.location.search);
    const unitParam = urlParams.get('unit');
    if (unitParam) {
      const parsedId = parseInt(unitParam, 10);
      if (parsedId >= 1 && parsedId <= 15) {
        this.currentUnitId = parsedId;
      }
    }

    // Read tab from URL if present
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
        listening: [0, 0, 0, 0, 0, 0], // scores per activity
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
     AUDIO PLAYBACK & SPEECH UTILITIES
     ========================================================================== */
  playAudio(text, voice = 'kid') {
    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(text, voice);
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
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

    // Update URL query param without full reload
    const url = new URL(window.location.href);
    url.searchParams.set('unit', unitId);
    window.history.replaceState({}, '', url.toString());

    this.renderUnitsSelector();
    this.renderHeader();
    this.renderTabs();
    this.renderWorkspace();

    // Scroll workspace into view smoothly
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
      { id: 'videos', label: '🎬 Videos', className: '' },
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
          <h2 style="margin:0; font-size:1.45rem; color:#78350f;">🌟 Unit ${unit.id} Vocabulary & Phonics Explorer</h2>
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
     SECTION: 4 SKILLS (LISTENING, READING, WRITING, SPEAKING)
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

    // Skill Theme Color Settings
    const skillTitles = {
      listening: { title: '🎧 Listening Studio', desc: 'Listen attentively to English audio and pick the right answer!' },
      reading: { title: '📖 Reading Corner', desc: 'Read words, stories, and sentences with visual clues!' },
      writing: { title: '✍️ Writing Workshop', desc: 'Unscramble letters, type words, and build complete sentences!' },
      speaking: { title: '🗣️ Speaking Lab', desc: 'Listen, repeat, and speak English out loud with Luna and Leo!' }
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
      html += `
        <button class="skill-activity-btn ${active}" onclick="toddlersEngine.switchActivity('${skillName}', ${idx})">
          <span>Act ${idx + 1}:</span>
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

    // Render Skill-Specific Exercise UI
    if (skillName === 'listening') {
      html += this.renderListeningExercise(currentEx);
    } else if (skillName === 'reading') {
      html += this.renderReadingExercise(currentEx);
    } else if (skillName === 'writing') {
      html += this.renderWritingExercise(currentEx);
    } else if (skillName === 'speaking') {
      html += this.renderSpeakingExercise(currentEx);
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
    const ws = document.getElementById('toddlerWorkspace');
    if (ws) this.renderSkillWorkspace(ws, skillName);
  }

  /* --------------------------------------------------------------------------
     1. LISTENING EXERCISES
     -------------------------------------------------------------------------- */
  renderListeningExercise(ex) {
    const audioWord = ex.audio || ex.audioWord || ex.targetWord || ex.prompt || 'Listen';
    const cleanAudio = audioWord.replace(/'/g, "\\'");

    let html = `
      <div class="exercise-prompt-card">
        <div style="font-size:3rem; margin-bottom:8px;">🎧</div>
        <h3 class="exercise-instruction">${ex.prompt || ex.instruction || 'Listen carefully and select the correct option:'}</h3>
        <p class="exercise-sub-instruction">Click the button below if you want to hear the sound again.</p>
        <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${cleanAudio}')">
          🔊 Listen Again: "${audioWord}"
        </button>
      </div>

      <div class="exercise-choices-grid">
    `;

    (ex.options || []).forEach((opt, idx) => {
      const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
      const optIcon = (typeof opt === 'object') ? (opt.icon || '✨') : '✨';
      const cleanOptText = optName.replace(/'/g, "\\'");

      const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
        (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));

      html += `
        <div class="exercise-choice-card" id="choice-${idx}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'listening')">
          <div class="choice-icon">${optIcon}</div>
          <div class="choice-text">${optName}</div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  /* --------------------------------------------------------------------------
     2. READING EXERCISES
     -------------------------------------------------------------------------- */
  renderReadingExercise(ex) {
    let storyHtml = '';
    if (ex.storyText || ex.story) {
      storyHtml = `
        <div style="background:#fef3c7; border:2px solid #fde68a; border-radius:18px; padding:1.25rem; margin-bottom:1.25rem; font-size:1.1rem; line-height:1.6; color:#78350f;">
          <div style="font-size:2rem; float:left; margin-right:12px;">📖</div>
          ${ex.storyText || ex.story}
          <div style="clear:both;"></div>
        </div>
      `;
    }

    let html = `
      ${storyHtml}
      <div class="exercise-prompt-card">
        <h3 class="exercise-instruction">${ex.prompt || ex.text || ex.question || 'Read and select the matching answer:'}</h3>
        ${ex.sentence ? `<p style="font-size:1.35rem; font-weight:800; color:#4b5563; margin:8px 0;">"${ex.sentence}"</p>` : ''}
      </div>

      <div class="exercise-choices-grid">
    `;

    (ex.options || []).forEach((opt, idx) => {
      const optName = (typeof opt === 'string') ? opt : (opt.name || opt.text || opt.word || '');
      const optIcon = (typeof opt === 'object') ? (opt.icon || '📖') : '📖';
      const cleanOptText = optName.replace(/'/g, "\\'");

      const isCorrect = (idx === ex.correct || optName === ex.correct || opt === ex.correct ||
        (ex.correct !== undefined && optName.toLowerCase() === String(ex.correct).toLowerCase()));

      html += `
        <div class="exercise-choice-card" id="choice-${idx}" onclick="toddlersEngine.handleChoiceClick(${idx}, ${isCorrect}, '${cleanOptText}', 'reading')">
          <div class="choice-icon">${optIcon}</div>
          <div class="choice-text">${optName}</div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  /* --------------------------------------------------------------------------
     3. WRITING EXERCISES (WORD BUILDER, MISSING LETTERS, TEXT INPUT)
     -------------------------------------------------------------------------- */
  renderWritingExercise(ex) {
    const targetWord = (ex.target || ex.word || ex.correct || ex.answer || '').toUpperCase();
    const letters = (ex.letters || ex.scrambledLetters || targetWord.split('').sort(() => Math.random() - 0.5));

    let html = `
      <div class="exercise-prompt-card">
        <div style="font-size:3.5rem; margin-bottom:8px;">${ex.icon || '✏️'}</div>
        <h3 class="exercise-instruction">${ex.prompt || ex.instruction || 'Build or write the correct word:'}</h3>
        <p class="exercise-sub-instruction">${ex.hint || ex.clue || ex.sentence || 'Tap letters in order or write the word.'}</p>
        <button class="exercise-audio-trigger" onclick="toddlersEngine.playAudio('${targetWord.toLowerCase()}')">
          🔊 Hear Word
        </button>
      </div>
    `;

    if (ex.type === 'sentence_builder' && ex.words) {
      // Sentence builder mode
      html += `
        <div class="writing-slots-container" id="sentenceDropArea">
          ${(this.selectedLetters || []).map((w, idx) => `
            <span class="writing-letter-tile" onclick="toddlersEngine.removeWordTile(${idx})">${w}</span>
          `).join('')}
        </div>
        <div class="writing-tiles-pool">
          ${ex.words.map((w, idx) => `
            <button class="writing-letter-tile" onclick="toddlersEngine.addWordTile('${w.replace(/'/g, "\\'")}')">${w}</button>
          `).join('')}
        </div>
        <div style="text-align:center;">
          <button class="writing-check-btn" onclick="toddlersEngine.checkSentenceAnswer('${(ex.correct || '').replace(/'/g, "\\'")}')">
            ✅ Check Sentence
          </button>
        </div>
      `;
    } else if (ex.type === 'text_input' || ex.mode === 'keyboard') {
      // Keyboard input mode
      html += `
        <div class="writing-input-box">
          <input type="text" id="writingInput" class="writing-text-input" placeholder="Type here..." autocomplete="off" autocorrect="off" autocapitalize="none">
          <button class="writing-check-btn" onclick="toddlersEngine.checkTextInputAnswer('${targetWord.replace(/'/g, "\\'")}')">
            Check ✅
          </button>
        </div>
      `;
    } else {
      // Default: Interactive Letter Tiles unscrambler
      html += `
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

    return html;
  }

  addLetterTile(letter, tileIndex, targetWord) {
    if (this.selectedLetters.length < targetWord.length) {
      this.selectedLetters.push(letter);
      this.playAudio(letter.toLowerCase());
      document.getElementById(`tile-${tileIndex}`)?.classList.add('used');

      // Update slots display
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

      // Check if full
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
    const input = document.getElementById('writingInput');
    if (!input) return;
    const userVal = input.value.trim().toUpperCase();
    if (userVal === target.toUpperCase()) {
      this.handleCorrectAnswer('writing', target);
    } else {
      input.classList.add('wrong');
      this.handleWrongAnswer('writing');
      setTimeout(() => input.classList.remove('wrong'), 800);
    }
  }

  addWordTile(word) {
    this.selectedLetters.push(word);
    const area = document.getElementById('sentenceDropArea');
    if (area) {
      area.innerHTML = this.selectedLetters.map((w, idx) => `
        <span class="writing-letter-tile" onclick="toddlersEngine.removeWordTile(${idx})">${w}</span>
      `).join('');
    }
  }

  removeWordTile(idx) {
    this.selectedLetters.splice(idx, 1);
    const area = document.getElementById('sentenceDropArea');
    if (area) {
      area.innerHTML = this.selectedLetters.map((w, i) => `
        <span class="writing-letter-tile" onclick="toddlersEngine.removeWordTile(${i})">${w}</span>
      `).join('');
    }
  }

  checkSentenceAnswer(correctSentence) {
    const formed = this.selectedLetters.join(' ').trim().toLowerCase();
    const target = correctSentence.trim().toLowerCase();
    if (formed === target) {
      this.handleCorrectAnswer('writing', correctSentence);
    } else {
      this.handleWrongAnswer('writing');
    }
  }

  /* --------------------------------------------------------------------------
     4. SPEAKING EXERCISES (RECORDER & RECOGNITION)
     -------------------------------------------------------------------------- */
  renderSpeakingExercise(ex) {
    const targetPhrase = ex.target || ex.targetPhrase || ex.word || ex.sentence || 'Hello';
    const cleanPhrase = targetPhrase.replace(/'/g, "\\'");

    let html = `
      <div class="speaking-panel">
        <div style="font-size:3.5rem; margin-bottom:0.5rem;">${ex.icon || '🎤'}</div>
        <h3 class="exercise-instruction">${ex.instruction || 'Listen and repeat clearly:'}</h3>
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

    return html;
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

    // Use SpeechRecognition if supported
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      try {
        const recognition = new SpeechRec();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 3;

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript.toLowerCase();
          console.log('[SpeechRecognition] Heard:', transcript);
          const targetClean = targetPhrase.toLowerCase().replace(/[^a-z0-9 ]/g, '');
          const heardClean = transcript.replace(/[^a-z0-9 ]/g, '');

          if (heardClean.includes(targetClean) || targetClean.includes(heardClean) || heardClean.length > 2) {
            this.handleSpeakingSuccess(targetPhrase, transcript);
          } else {
            this.handleSpeakingFallback(targetPhrase);
          }
        };

        recognition.onerror = (e) => {
          console.warn('[SpeechRecognition] Error or fallback:', e);
          this.handleSpeakingFallback(targetPhrase);
        };

        recognition.start();
      } catch (err) {
        console.warn('SpeechRec start failed:', err);
      }
    }

    // MediaRecorder for playback
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
      }).catch(err => {
        console.warn('MediaRecorder permission error:', err);
      });
    }

    // Auto-stop recording after 4.5 seconds
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

    // Trigger encouraging completion
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
     HANDLERS: ANSWER EVALUATION & PROGRESSION
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
        // Next exercise
        this.currentExerciseIndex++;
        this.selectedLetters = [];
        const ws = document.getElementById('toddlerWorkspace');
        if (ws) this.renderSkillWorkspace(ws, skillName);
      } else {
        // Activity completed!
        this.markActivityCompleted(skillName, this.currentActivityIndex);
        if (this.currentActivityIndex < activities.length - 1) {
          this.currentActivityIndex++;
          this.currentExerciseIndex = 0;
          this.selectedLetters = [];
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
     SECTION: INTERACTIVE VIDEOS
     ========================================================================== */
  renderVideos(container) {
    const unit = this.getCurrentUnit();
    if (!unit) return;

    const videos = unit.videos || [
      {
        title: `${unit.title} Sing-Along Adventure`,
        youtubeId: 'k1xvdq5J_3A', // Fallback educational toddler song
        checkpoints: [
          { question: `What is the main topic of Unit ${unit.id}?`, options: [unit.title, 'Outer Space', 'Dinosaurs'], answer: unit.title }
        ]
      }
    ];

    const currentVid = videos[0];
    const embedUrl = `https://www.youtube-nocookie.com/embed/${currentVid.youtubeId || 'k1xvdq5J_3A'}?rel=0&modestbranding=1`;

    let html = `
      <div class="video-section-wrap">
        <div style="margin-bottom:1.25rem;">
          <h2 style="margin:0 0 4px; font-size:1.45rem; color:#78350f;">🎬 ${currentVid.title || unit.title + ' Video'}</h2>
          <p style="margin:0; font-size:0.95rem; color:#6b7280;">Watch the educational video and answer the comprehension checkpoints below!</p>
        </div>

        <div class="video-player-frame-box">
          <iframe src="${embedUrl}" title="${currentVid.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="video-checkpoints-card">
          <h3 style="margin:0 0 1rem; color:#92400e; font-size:1.15rem;">🎯 Video Comprehension Checkpoints</h3>
    `;

    (currentVid.checkpoints || []).forEach((cp, idx) => {
      html += `
        <div class="video-checkpoint-item" id="video-cp-${idx}">
          <div style="font-weight:800; color:#374151; margin-bottom:8px;">${idx + 1}. ${cp.question}</div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            ${(cp.options || []).map(opt => `
              <button class="toddler-nav-pill" onclick="toddlersEngine.checkVideoCheckpoint(${idx}, '${opt.replace(/'/g, "\\'")}', '${(cp.answer || '').replace(/'/g, "\\'")}')">
                ${opt}
              </button>
            `).join('')}
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

  checkVideoCheckpoint(cpIndex, selected, correct) {
    if (selected.trim().toLowerCase() === correct.trim().toLowerCase()) {
      this.playCheerSound();
      this.addStars(15);
      const cpItem = document.getElementById(`video-cp-${cpIndex}`);
      if (cpItem) {
        cpItem.style.background = '#d1fae5';
        cpItem.style.borderColor = '#10b981';
        cpItem.innerHTML += `<div style="color:#047857; font-weight:800; margin-top:8px;">✅ Correct! +15 Stars</div>`;
      }
    } else {
      this.playAudio('Try again!');
    }
  }

  /* ==========================================================================
     SECTION: MAIN GAME (12 PROGRESSIVE LEVELS)
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

    // Quick interactive game modal
    const cleanWord = (lvl.targetWord || lvl.title || 'Target').replace(/'/g, "\\'");
    const choices = lvl.choices || [
      { text: lvl.targetWord || lvl.title, icon: lvl.icon || '⭐', correct: true },
      { text: 'Wrong 1', icon: '❌', correct: false },
      { text: 'Wrong 2', icon: '❓', correct: false }
    ];

    const modal = document.createElement('div');
    modal.className = 'diploma-modal-overlay';
    modal.id = 'gameLevelModal';
    modal.innerHTML = `
      <div class="diploma-modal-card" style="border-color:#d946ef;">
        <div style="font-size:3.5rem;">${lvl.icon || '🎮'}</div>
        <h2 style="color:#86198f; margin:0 0 8px;">Level ${lvl.level}: ${lvl.title}</h2>
        <p style="color:#6b7280; font-size:1.1rem; margin-bottom:1.5rem;">${lvl.mission || 'Find and select the matching item!'}</p>

        <button class="exercise-audio-trigger" style="background:#d946ef; margin-bottom:1.5rem;" onclick="toddlersEngine.playAudio('${cleanWord}')">
          🔊 Hear Target Word
        </button>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:12px; margin-bottom:1.5rem;">
          ${choices.map((c, i) => `
            <button class="exercise-choice-card" onclick="toddlersEngine.handleGameLevelChoice(${lvl.level}, ${c.correct})">
              <div class="choice-icon">${c.icon || '✨'}</div>
              <div class="choice-text">${c.text}</div>
            </button>
          `).join('')}
        </div>

        <button class="toddler-nav-pill" style="margin:0 auto;" onclick="document.getElementById('gameLevelModal')?.remove()">
          Close
        </button>
      </div>
    `;

    document.body.appendChild(modal);
    this.playAudio(lvl.targetWord || lvl.title);
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
      const isCorrect = (opt.text === currentStep.answer || opt === currentStep.answer);
      const optText = (typeof opt === 'string') ? opt : (opt.text || '');
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
        // Completed Step 10!
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
