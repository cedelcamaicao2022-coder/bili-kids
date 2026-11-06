/**
 * Bilikids Teens Academy - CEFR Level-Based Interactive Engine
 * Controls levels A1, A2, B1, B2 and the 4 consistent exercise types:
 * 1. Reading
 * 2. Grammar Cloze
 * 3. Vocabulary Matrix
 * 4. Timed Writing Sprint (60s)
 */

const TEENS_LEVEL_CARDS = {
  a1: {
    headline: "Core A1 Competency Tracks",
    sub: "Essential English structures, everyday vocabulary, and simple sentences for confident daily communication.",
    cards: [
      {
        type: "reading",
        icon: "📖",
        badge: "21 CEFR PASSAGES",
        badgeBg: "#dcfce7",
        badgeColor: "#166534",
        title: "Critical Reading A1 (21 Passages)",
        desc: "Master 21 comprehensive reading passages covering school announcements, daily routines, hobbies, and sports with instant feedback.",
        actionText: "Open 21 Readings",
        actionColor: "#10b981"
      },
      {
        type: "grammar",
        icon: "🎯",
        badge: "BASIC SYNTAX",
        badgeBg: "#fae8ff",
        badgeColor: "#86198f",
        title: "Use of English: Daily Routine",
        desc: "Practice Present Simple, 3rd person singular '-s', essential subject/object pronouns, and time prepositions.",
        actionText: "Start Practice",
        actionColor: "#9333ea"
      },
      {
        type: "writing",
        icon: "⚡",
        badge: "60s SPRINT",
        badgeBg: "#ffedd5",
        badgeColor: "#9a3412",
        title: "Timed Writing: Introduce Your Day",
        desc: "Formulate a 25+ word structured paragraph under the 60s countdown using target daily routine connectors.",
        actionText: "Start Sprint",
        actionColor: "#ea580c"
      },
      {
        type: "vocab",
        icon: "🧩",
        badge: "LEXICAL PAIRS",
        badgeBg: "#e0e7ff",
        badgeColor: "#3730a3",
        title: "Vocabulary Matrix: School & Life",
        desc: "Master key vocabulary for academic rooms, school subjects, and everyday phrasal verb pairings.",
        actionText: "Explore Matrix",
        actionColor: "#4f46e5"
      }
    ]
  },
  a2: {
    headline: "Core A2 Competency Tracks",
    sub: "Build descriptive paragraphs, master past narratives, comparative structures, and real-life conversational exchanges.",
    cards: [
      {
        type: "reading",
        icon: "📖",
        badge: "21 CEFR PASSAGES",
        badgeBg: "#e0e7ff",
        badgeColor: "#3730a3",
        title: "Critical Reading A2 (21 Passages)",
        desc: "Analyze 21 engaging narrative and informative texts about environmental cleanups, young inventors, science, and world cultures.",
        actionText: "Open 21 Readings",
        actionColor: "#0284c7"
      },
      {
        type: "grammar",
        icon: "🎯",
        badge: "NARRATIVE TENSES",
        badgeBg: "#fae8ff",
        badgeColor: "#86198f",
        title: "Use of English: Past vs Present",
        desc: "Master regular and irregular past simple verbs, time connectors, and comparative sentence structures.",
        actionText: "Start Practice",
        actionColor: "#9333ea"
      },
      {
        type: "writing",
        icon: "⚡",
        badge: "60s SPRINT",
        badgeBg: "#ffedd5",
        badgeColor: "#9a3412",
        title: "Timed Writing: Memorable Weekend",
        desc: "Write 35+ words describing a trip or weekend activity with target past tense verbs and connectors.",
        actionText: "Start Sprint",
        actionColor: "#ea580c"
      },
      {
        type: "vocab",
        icon: "🧩",
        badge: "COLLOCATIONS",
        badgeBg: "#dcfce7",
        badgeColor: "#166534",
        title: "Vocabulary Matrix: Travel & Actions",
        desc: "Master essential travel collocations, outdoor equipment vocabulary, and compound nouns.",
        actionText: "Explore Matrix",
        actionColor: "#16a34a"
      }
    ]
  },
  b1: {
    headline: "Core B1 Competency Tracks • Saber 9°",
    sub: "Conquer official Colombian Saber 9° passages, modal deductions, conditional clauses, and cohesive academic arguments.",
    cards: [
      {
        type: "reading",
        icon: "📖",
        badge: "21 ICFES PASSAGES",
        badgeBg: "#e0e7ff",
        badgeColor: "#3730a3",
        title: "Critical Reading B1 • Saber 9° (21 Passages)",
        desc: "Analyze implicit opinions, author purpose, and textual synthesis across 21 official passages aligned with ICFES Saber 9° standards.",
        actionText: "Open 21 Readings",
        actionColor: "#4f46e5",
        extLink: "teens_saber_tests.html",
        extLabel: "🇨🇴 Launch Saber 9° Simulator"
      },
      {
        type: "grammar",
        icon: "🎯",
        badge: "CAMBRIDGE PET / B1",
        badgeBg: "#fae8ff",
        badgeColor: "#86198f",
        title: "Use of English: Passive & Modals",
        desc: "Exam-grade sentence transformation, auxiliary verbs, modal deductions, and cloze drills.",
        actionText: "Start Practice",
        actionColor: "#9333ea"
      },
      {
        type: "writing",
        icon: "⚡",
        badge: "60s SYNTHESIS",
        badgeBg: "#ffedd5",
        badgeColor: "#9a3412",
        title: "Timed Argumentation: Tech & Society",
        desc: "Formulate structured thesis statements, cohesive connectors, and arguments under high-pressure countdowns.",
        actionText: "Start Sprint",
        actionColor: "#ea580c",
        extLink: "teens_speed_writing.html",
        extLabel: "⏱️ Speed Writing App"
      },
      {
        type: "vocab",
        icon: "🧩",
        badge: "ACADEMIC WORD LIST",
        badgeBg: "#dcfce7",
        badgeColor: "#166534",
        title: "Academic Word List & Collocations",
        desc: "Master high-frequency academic vocabulary, prepositional collocations, and contextual phrasing.",
        actionText: "Explore Matrix",
        actionColor: "#16a34a"
      }
    ]
  },
  b2: {
    headline: "Core B1/B2 Competency Tracks",
    sub: "Rigorous academic curricula tailored to Colombian national testing and international CEFR certification.",
    cards: [
      {
        type: "reading",
        icon: "📖",
        badge: "21 ADVANCED PASSAGES",
        badgeBg: "#e0e7ff",
        badgeColor: "#3730a3",
        title: "Critical Reading B2 • Saber 11° (21 Passages)",
        desc: "Analyze implicit opinions, pragmatic meaning, and advanced discursive texts across 21 academic passages with detailed rationales.",
        actionText: "Open 21 Readings",
        actionColor: "#4f46e5",
        extLink: "teens_saber_tests.html",
        extLabel: "🇨🇴 Full Saber Simulator (10 Tests)"
      },
      {
        type: "grammar",
        icon: "🎯",
        badge: "CAMBRIDGE FCE",
        badgeBg: "#fae8ff",
        badgeColor: "#86198f",
        title: "Cambridge B2 First",
        desc: "Exam-grade Use of English practice: sentence restructuring, affixes, multiple choice cloze and open cloze drills.",
        actionText: "Start Practice",
        actionColor: "#9333ea",
        extLink: "teens_cambridge_b2.html",
        extLabel: "🎯 Full Cambridge App"
      },
      {
        type: "writing",
        icon: "⚡",
        badge: "60s SYNTHESIS",
        badgeBg: "#ffedd5",
        badgeColor: "#9a3412",
        title: "Timed Argumentation",
        desc: "Formulate structured thesis statements, cohesive connectors, and arguments under high-pressure countdowns.",
        actionText: "Start Sprint",
        actionColor: "#ea580c",
        extLink: "teens_speed_writing.html",
        extLabel: "⏱️ Full Writing Timer"
      },
      {
        type: "vocab",
        icon: "🧩",
        badge: "ADVANCED LEXICON",
        badgeBg: "#dcfce7",
        badgeColor: "#166534",
        title: "Advanced Collocations & Phrasals",
        desc: "Master advanced multi-word verbs, formal academic registers, and nuanced syntactic connectors.",
        actionText: "Explore Matrix",
        actionColor: "#16a34a"
      }
    ]
  }
};

class TeensLevelsEngine {
  constructor() {
    this.currentLevel = 'b2';
    this.currentExerciseType = null; // Do not open test automatically until selected
    this.timerInterval = null;
    this.timeLeft = 60;
    this.timerRunning = false;
    this.userScores = {
      a1: { reading: null, grammar: null, vocab: null, writing: null },
      a2: { reading: null, grammar: null, vocab: null, writing: null },
      b1: { reading: null, grammar: null, vocab: null, writing: null },
      b2: { reading: null, grammar: null, vocab: null, writing: null }
    };

    this.selectedAnswers = {};
    this.audioCtx = null;
    this.readingIndexByLevel = { a1: 0, a2: 0, b1: 0, b2: 0 };
  }

  init() {
    this.bindGlobalEvents();

    // Check URL parameters for direct level and test selection
    const urlParams = new URLSearchParams(window.location.search);
    const lvlParam = urlParams.get('level')?.toLowerCase();
    const testParam = urlParams.get('test')?.toLowerCase();
    const initialLevel = (lvlParam && ['a1', 'a2', 'b1', 'b2'].includes(lvlParam)) ? lvlParam : 'b2';

    this.selectLevel(initialLevel);

    // Only open a test if specifically requested via URL parameter (?test=reading, etc.)
    if (testParam && ['reading', 'grammar', 'vocab', 'writing'].includes(testParam)) {
      this.selectExerciseType(testParam, false);
    }

    this.initAudioUnlock();
  }

  initAudioUnlock() {
    const unlock = () => {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
          if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
          }
        }
      }
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });
  }

  playTone(freq = 440, duration = 0.08, type = 'sine') {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.audioCtx = new AudioContext();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playSuccess() {
    this.playTone(523.25, 0.1, 'triangle'); // C5
    setTimeout(() => this.playTone(659.25, 0.1, 'triangle'), 100); // E5
    setTimeout(() => this.playTone(783.99, 0.25, 'triangle'), 200); // G5
  }

  playError() {
    this.playTone(280, 0.15, 'sawtooth');
    setTimeout(() => this.playTone(220, 0.25, 'sawtooth'), 120);
  }

  bindGlobalEvents() {
    // Level selection buttons
    document.querySelectorAll('.teens-level-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lvl = btn.dataset.level;
        this.selectLevel(lvl);
      });
    });

    // Close test workspace button
    const closeBtn = document.getElementById('btnCloseTestWorkspace');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeTestWorkspace();
      });
    }
  }

  renderCards() {
    const grid = document.getElementById('teensCardsGrid');
    if (!grid) return;

    const levelConfig = TEENS_LEVEL_CARDS[this.currentLevel] || TEENS_LEVEL_CARDS.b2;

    // Update headline & subtitle
    const hl = document.getElementById('teensTracksHeadline');
    const sub = document.getElementById('teensTracksSub');
    if (hl) hl.textContent = levelConfig.headline;
    if (sub) sub.textContent = levelConfig.sub;

    grid.innerHTML = '';

    levelConfig.cards.forEach(card => {
      const isSelected = (this.currentExerciseType !== null && card.type === this.currentExerciseType);
      const cardEl = document.createElement('div');
      cardEl.className = `teens-track-card ${isSelected ? 'active-card' : ''}`;
      cardEl.dataset.cardType = card.type;

      cardEl.innerHTML = `
        ${isSelected ? '<span class="card-open-indicator"><span>●</span> TEST ABIERTO</span>' : ''}
        <div class="card-content">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.8rem;">
            <span style="font-size: 2.2rem;">${card.icon}</span>
            <span style="background: ${card.badgeBg}; color: ${card.badgeColor}; font-size: 0.72rem; font-weight: 800; padding: 3px 9px; border-radius: 999px;">${card.badge}</span>
          </div>
          <h3 style="font-size: 1.15rem; color: #0f172a; margin: 0 0 0.5rem; font-weight: 800;">${card.title}</h3>
          <p style="font-size: 0.84rem; color: #475569; line-height: 1.45; margin: 0;">${card.desc}</p>
        </div>
        <div style="margin-top: 1.2rem; display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 0.84rem; font-weight: 800; color: ${card.actionColor}; display: flex; align-items: center; justify-content: space-between;">
            <span>${isSelected ? 'Active Test Open Below ↓' : card.actionText}</span> ➔
          </div>
          ${card.extLink ? `<a href="${card.extLink}" class="card-simulator-pill" onclick="event.stopPropagation()"><span>🚀</span> ${card.extLabel}</a>` : ''}
        </div>
      `;

      cardEl.addEventListener('click', () => {
        this.selectExerciseType(card.type, true);
      });

      grid.appendChild(cardEl);
    });
  }

  selectLevel(levelKey) {
    if (!TEENS_LEVELS_DATA[levelKey]) return;
    this.currentLevel = levelKey;

    // Reset writing timer if running
    this.stopWritingTimer();

    // Close test workspace upon level change until a card is selected
    this.currentExerciseType = null;
    const workspace = document.getElementById('activeTestContainerWrapper');
    if (workspace) workspace.style.display = 'none';

    // Update active pill UI
    document.querySelectorAll('.teens-level-pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.level === levelKey);
    });

    // Re-render cards for this level (all cards unselected initially)
    this.renderCards();
  }

  closeTestWorkspace() {
    this.stopWritingTimer();
    this.currentExerciseType = null;
    const workspace = document.getElementById('activeTestContainerWrapper');
    if (workspace) workspace.style.display = 'none';
    this.renderCards();
    this.playTone(330, 0.06);
  }

  updateWorkspaceBannerTitle() {
    const bannerTitle = document.getElementById('activeWorkspaceTitle');
    if (!bannerTitle) return;

    const levelConfig = TEENS_LEVEL_CARDS[this.currentLevel] || TEENS_LEVEL_CARDS.b2;
    const currentCard = levelConfig.cards.find(c => c.type === this.currentExerciseType) || levelConfig.cards[0];

    bannerTitle.innerHTML = `${currentCard.icon} Test Abierto: ${currentCard.title}`;
  }

  selectExerciseType(type, shouldScroll = false) {
    this.currentExerciseType = type;
    this.stopWritingTimer();

    // Open workspace
    const workspace = document.getElementById('activeTestContainerWrapper');
    if (workspace) {
      workspace.style.display = 'block';
    }

    // Re-render cards so active border & indicator update
    this.renderCards();

    // Update workspace banner title
    this.updateWorkspaceBannerTitle();

    // Render the test immediately
    this.renderExercise();

    if (shouldScroll && workspace) {
      workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  renderExercise() {
    const data = TEENS_LEVELS_DATA[this.currentLevel];
    if (!data) return;

    const container = document.getElementById('teensExerciseContainer');
    if (!container) return;

    this.selectedAnswers = {};

    switch (this.currentExerciseType) {
      case 'reading':
        this.renderReadingView(container, data.exercises.reading);
        break;
      case 'grammar':
        this.renderGrammarView(container, data.exercises.grammar);
        break;
      case 'vocab':
        this.renderVocabView(container, data.exercises.vocab);
        break;
      case 'writing':
        this.renderWritingView(container, data.exercises.writing);
        break;
    }
  }

  /* ==========================================================================
     1. READING VIEW RENDERER (21 PASSAGES PER LEVEL)
     ========================================================================== */
  renderReadingView(container, exerciseGroup) {
    if (!this.readingIndexByLevel) {
      this.readingIndexByLevel = { a1: 0, a2: 0, b1: 0, b2: 0 };
    }

    const passages = (exerciseGroup && exerciseGroup.passages && exerciseGroup.passages.length > 0)
      ? exerciseGroup.passages
      : [exerciseGroup];

    const totalPassages = passages.length;
    let currentIdx = this.readingIndexByLevel[this.currentLevel] || 0;
    if (currentIdx >= totalPassages) currentIdx = 0;
    if (currentIdx < 0) currentIdx = 0;
    this.readingIndexByLevel[this.currentLevel] = currentIdx;

    const activePassage = passages[currentIdx] || passages[0];
    this.selectedAnswers = {};

    let questionsHtml = '';
    activePassage.questions.forEach((qObj, idx) => {
      let optionsHtml = '';
      qObj.options.forEach((opt, optIdx) => {
        optionsHtml += `
          <button class="level-choice-option-btn" data-qidx="${idx}" data-optidx="${optIdx}">
            <span class="choice-letter">${String.fromCharCode(65 + optIdx)}</span>
            <span class="choice-text">${opt}</span>
          </button>
        `;
      });

      questionsHtml += `
        <div class="reading-question-card" id="qcard-${idx}">
          <h4 class="reading-q-title">${qObj.q}</h4>
          <div class="reading-options-grid">${optionsHtml}</div>
          <div class="pedagogical-feedback-box" id="feedback-${idx}" style="display:none;"></div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="level-exercise-stage">
        <div class="exercise-header-strip">
          <div class="exercise-tag-row">
            <span class="exercise-type-pill" style="background:#ede9fe; color:#6366f1;">📖 CRITICAL READING & COMPREHENSION</span>
            <span class="exercise-level-pill">${this.currentLevel.toUpperCase()}</span>
            <span class="exercise-score-badge" style="background:#fef3c7; color:#92400e; font-weight:800;">
              ${totalPassages} Passages Available
            </span>
          </div>
          <h3 class="exercise-main-title">${activePassage.title}</h3>
          <p class="exercise-instruction-text">${activePassage.instruction}</p>
        </div>

        <!-- 21 PASSAGE NAVIGATOR -->
        <div class="reading-navigator-bar">
          <button class="reading-nav-btn" id="btnPrevPassage" ${currentIdx === 0 ? 'disabled' : ''}>
            ← Previous Passage
          </button>
          <div class="reading-selector-center">
            <label class="reading-select-label" for="readingPassageSelect">Passage:</label>
            <select id="readingPassageSelect" class="reading-dropdown-select">
              ${passages.map((p, idx) => `
                <option value="${idx}" ${idx === currentIdx ? 'selected' : ''}>
                  Passage ${idx + 1}: ${p.title.replace(/^Reading \d+:\s*/, '')} (${(p.badge || '').split('•')[0].trim()})
                </option>
              `).join('')}
            </select>
            <span class="reading-counter-tag">${currentIdx + 1} of ${totalPassages}</span>
          </div>
          <button class="reading-nav-btn" id="btnNextPassage" ${currentIdx === totalPassages - 1 ? 'disabled' : ''}>
            Next Passage →
          </button>
        </div>

        <div class="reading-passage-box">
          <div class="passage-paper-header">
            <span>Official Reading Passage • ${activePassage.badge || ''}</span>
            <button class="btn-listen-passage" id="btnListenPassage">🔊 Listen Passage</button>
          </div>
          <p class="passage-body-text">${activePassage.passage}</p>
        </div>

        <div class="reading-questions-flow">
          ${questionsHtml}
        </div>

        <div class="exercise-actions-bar">
          <button class="btn-submit-exercise" id="btnCheckReading">
            ✓ Check All Answers
          </button>
          <span class="exercise-score-badge" id="readingScoreBadge" style="display:none;"></span>
          ${currentIdx < totalPassages - 1 ? `
            <button class="btn-next-passage-action" id="btnCheckNextPassage" style="display:none;">
              Next Passage (${currentIdx + 2} of ${totalPassages}) ➔
            </button>
          ` : ''}
        </div>
      </div>
    `;

    // Listen Passage event
    const btnListen = document.getElementById('btnListenPassage');
    if (btnListen) {
      btnListen.addEventListener('click', () => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(activePassage.passage);
          u.lang = 'en-US';
          u.rate = 0.95;
          window.speechSynthesis.speak(u);
        }
      });
    }

    // Previous Passage
    const btnPrev = document.getElementById('btnPrevPassage');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (currentIdx > 0) {
          this.readingIndexByLevel[this.currentLevel] = currentIdx - 1;
          this.renderReadingView(container, exerciseGroup);
          window.scrollTo({ top: container.offsetTop - 80, behavior: 'smooth' });
        }
      });
    }

    // Next Passage
    const btnNext = document.getElementById('btnNextPassage');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentIdx < totalPassages - 1) {
          this.readingIndexByLevel[this.currentLevel] = currentIdx + 1;
          this.renderReadingView(container, exerciseGroup);
          window.scrollTo({ top: container.offsetTop - 80, behavior: 'smooth' });
        }
      });
    }

    // Dropdown Select
    const selectPassage = document.getElementById('readingPassageSelect');
    if (selectPassage) {
      selectPassage.addEventListener('change', (e) => {
        this.readingIndexByLevel[this.currentLevel] = parseInt(e.target.value, 10);
        this.renderReadingView(container, exerciseGroup);
        window.scrollTo({ top: container.offsetTop - 80, behavior: 'smooth' });
      });
    }

    // Next Passage from Action Bar (appears after checking)
    const btnCheckNext = document.getElementById('btnCheckNextPassage');
    if (btnCheckNext) {
      btnCheckNext.addEventListener('click', () => {
        if (currentIdx < totalPassages - 1) {
          this.readingIndexByLevel[this.currentLevel] = currentIdx + 1;
          this.renderReadingView(container, exerciseGroup);
          window.scrollTo({ top: container.offsetTop - 80, behavior: 'smooth' });
        }
      });
    }

    // Option selection
    container.querySelectorAll('.level-choice-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.dataset.qidx, 10);
        const optIdx = parseInt(btn.dataset.optidx, 10);
        this.selectedAnswers[qIdx] = optIdx;

        const card = document.getElementById(`qcard-${qIdx}`);
        card.querySelectorAll('.level-choice-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.playTone(480, 0.05, 'sine');
      });
    });

    // Check button
    document.getElementById('btnCheckReading').addEventListener('click', () => {
      let correct = 0;
      activePassage.questions.forEach((qObj, idx) => {
        const userChoice = this.selectedAnswers[idx];
        const card = document.getElementById(`qcard-${idx}`);
        const fb = document.getElementById(`feedback-${idx}`);
        const isCorrect = userChoice === qObj.correct;

        if (isCorrect) {
          correct++;
          card.classList.add('correct');
          card.classList.remove('incorrect');
        } else {
          card.classList.add('incorrect');
          card.classList.remove('correct');
        }

        fb.style.display = 'block';
        fb.innerHTML = `
          <div class="fb-callout ${isCorrect ? 'good' : 'bad'}">
            <strong>${isCorrect ? '✓ Excellent!' : '✗ Pedagogical Review:'}</strong>
            <p>${qObj.explanation}</p>
          </div>
        `;
      });

      const scoreEl = document.getElementById('readingScoreBadge');
      scoreEl.style.display = 'inline-block';
      scoreEl.innerHTML = `Score: <strong>${correct} / ${activePassage.questions.length}</strong> (${Math.round((correct / activePassage.questions.length) * 100)}%)`;

      if (btnCheckNext) {
        btnCheckNext.style.display = 'inline-flex';
      }

      if (correct === activePassage.questions.length) this.playSuccess();
      else this.playError();
    });
  }

  /* ==========================================================================
     2. GRAMMAR CLOZE VIEW RENDERER
     ========================================================================== */
  renderGrammarView(container, exercise) {
    let itemsHtml = '';
    exercise.items.forEach((item, idx) => {
      let optionsHtml = '';
      item.options.forEach((opt, optIdx) => {
        optionsHtml += `
          <button class="level-choice-option-btn" data-itemidx="${idx}" data-optidx="${optIdx}">
            <span class="choice-letter">${String.fromCharCode(65 + optIdx)}</span>
            <span class="choice-text">${opt}</span>
          </button>
        `;
      });

      itemsHtml += `
        <div class="grammar-sentence-card" id="gcard-${idx}">
          <div class="grammar-sentence-text">${item.sentence}</div>
          <div class="reading-options-grid">${optionsHtml}</div>
          <div class="pedagogical-feedback-box" id="gfeedback-${idx}" style="display:none;"></div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="level-exercise-stage">
        <div class="exercise-header-strip">
          <div class="exercise-tag-row">
            <span class="exercise-type-pill" style="background:#e0f2fe; color:#0284c7;">🎯 USE OF ENGLISH & GRAMMAR</span>
            <span class="exercise-level-pill">${this.currentLevel.toUpperCase()}</span>
          </div>
          <h3 class="exercise-main-title">${exercise.title}</h3>
          <p class="exercise-instruction-text">${exercise.instruction}</p>
        </div>

        <div class="grammar-items-flow">
          ${itemsHtml}
        </div>

        <div class="exercise-actions-bar">
          <button class="btn-submit-exercise" id="btnCheckGrammar">
            ✓ Check Grammar Answers
          </button>
          <span class="exercise-score-badge" id="grammarScoreBadge" style="display:none;"></span>
        </div>
      </div>
    `;

    container.querySelectorAll('.level-choice-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemIdx = parseInt(btn.dataset.itemidx, 10);
        const optIdx = parseInt(btn.dataset.optidx, 10);
        this.selectedAnswers[itemIdx] = optIdx;

        const card = document.getElementById(`gcard-${itemIdx}`);
        card.querySelectorAll('.level-choice-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.playTone(520, 0.05, 'sine');
      });
    });

    document.getElementById('btnCheckGrammar').addEventListener('click', () => {
      let correct = 0;
      exercise.items.forEach((item, idx) => {
        const userChoice = this.selectedAnswers[idx];
        const card = document.getElementById(`gcard-${idx}`);
        const fb = document.getElementById(`gfeedback-${idx}`);
        const isCorrect = userChoice === item.correct;

        if (isCorrect) {
          correct++;
          card.classList.add('correct');
          card.classList.remove('incorrect');
        } else {
          card.classList.add('incorrect');
          card.classList.remove('correct');
        }

        fb.style.display = 'block';
        fb.innerHTML = `
          <div class="fb-callout ${isCorrect ? 'good' : 'bad'}">
            <strong>${isCorrect ? '✓ Correct Syntax!' : '✗ Rule & Explanation:'}</strong>
            <p>${item.explanation}</p>
          </div>
        `;
      });

      const scoreEl = document.getElementById('grammarScoreBadge');
      scoreEl.style.display = 'inline-block';
      scoreEl.innerHTML = `Score: <strong>${correct} / ${exercise.items.length}</strong> (${Math.round((correct / exercise.items.length) * 100)}%)`;

      if (correct === exercise.items.length) this.playSuccess();
      else this.playError();
    });
  }

  /* ==========================================================================
     3. VOCABULARY MATRIX VIEW RENDERER
     ========================================================================== */
  renderVocabView(container, exercise) {
    let itemsHtml = '';
    exercise.items.forEach((item, idx) => {
      let optionsHtml = '';
      item.options.forEach((opt, optIdx) => {
        optionsHtml += `
          <button class="level-choice-option-btn" data-vidx="${idx}" data-optidx="${optIdx}">
            <span class="choice-letter">${String.fromCharCode(65 + optIdx)}</span>
            <span class="choice-text">${opt}</span>
          </button>
        `;
      });

      itemsHtml += `
        <div class="vocab-matrix-card" id="vcard-${idx}">
          <div class="vocab-prompt-text">${item.sentence}</div>
          <div class="reading-options-grid">${optionsHtml}</div>
          <div class="pedagogical-feedback-box" id="vfeedback-${idx}" style="display:none;"></div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="level-exercise-stage">
        <div class="exercise-header-strip">
          <div class="exercise-tag-row">
            <span class="exercise-type-pill" style="background:#fef3c7; color:#b45309;">⚡ VOCABULARY & COLLOCATIONS</span>
            <span class="exercise-level-pill">${this.currentLevel.toUpperCase()}</span>
          </div>
          <h3 class="exercise-main-title">${exercise.title}</h3>
          <p class="exercise-instruction-text">${exercise.instruction}</p>
        </div>

        <div class="vocab-items-flow">
          ${itemsHtml}
        </div>

        <div class="exercise-actions-bar">
          <button class="btn-submit-exercise" id="btnCheckVocab">
            ✓ Check Vocabulary Matrix
          </button>
          <span class="exercise-score-badge" id="vocabScoreBadge" style="display:none;"></span>
        </div>
      </div>
    `;

    container.querySelectorAll('.level-choice-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const vIdx = parseInt(btn.dataset.vidx, 10);
        const optIdx = parseInt(btn.dataset.optidx, 10);
        this.selectedAnswers[vIdx] = optIdx;

        const card = document.getElementById(`vcard-${vIdx}`);
        card.querySelectorAll('.level-choice-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.playTone(580, 0.05, 'sine');
      });
    });

    document.getElementById('btnCheckVocab').addEventListener('click', () => {
      let correct = 0;
      exercise.items.forEach((item, idx) => {
        const userChoice = this.selectedAnswers[idx];
        const card = document.getElementById(`vcard-${idx}`);
        const fb = document.getElementById(`vfeedback-${idx}`);
        const isCorrect = userChoice === item.correct;

        if (isCorrect) {
          correct++;
          card.classList.add('correct');
          card.classList.remove('incorrect');
        } else {
          card.classList.add('incorrect');
          card.classList.remove('correct');
        }

        fb.style.display = 'block';
        fb.innerHTML = `
          <div class="fb-callout ${isCorrect ? 'good' : 'bad'}">
            <strong>${isCorrect ? '✓ Precise Collocation!' : '✗ Lexical Context:'}</strong>
            <p>${item.explanation}</p>
          </div>
        `;
      });

      const scoreEl = document.getElementById('vocabScoreBadge');
      scoreEl.style.display = 'inline-block';
      scoreEl.innerHTML = `Score: <strong>${correct} / ${exercise.items.length}</strong> (${Math.round((correct / exercise.items.length) * 100)}%)`;

      if (correct === exercise.items.length) this.playSuccess();
      else this.playError();
    });
  }

  /* ==========================================================================
     4. TIMED WRITING VIEW RENDERER
     ========================================================================== */
  renderWritingView(container, exercise) {
    this.timeLeft = 60;
    this.timerRunning = false;

    let targetBadges = '';
    exercise.targetVocabulary.forEach(term => {
      targetBadges += `<span class="target-vocab-chip">${term}</span>`;
    });

    container.innerHTML = `
      <div class="level-exercise-stage">
        <div class="exercise-header-strip">
          <div class="exercise-tag-row">
            <span class="exercise-type-pill" style="background:#fee2e2; color:#b91c1c;">⏱️ 60-SECOND WRITING CHALLENGE</span>
            <span class="exercise-level-pill">${this.currentLevel.toUpperCase()}</span>
          </div>
          <h3 class="exercise-main-title">${exercise.title}</h3>
          <p class="exercise-instruction-text">${exercise.instruction}</p>
        </div>

        <div class="writing-prompt-card">
          <div class="writing-prompt-header">
            <strong>Target Task (${this.currentLevel.toUpperCase()} Rubric • Min ${exercise.minWords} words):</strong>
            <div class="writing-timer-badge" id="writingTimerBadge">⏱️ 01:00</div>
          </div>
          <p class="writing-prompt-body">${exercise.prompt}</p>
          <div class="target-vocab-row">
            <span>Recommended terms:</span>
            ${targetBadges}
          </div>
        </div>

        <div class="writing-workspace-box">
          <div class="writing-toolbar-row">
            <button class="btn-start-writing-timer" id="btnStartWriting">
              ▶ Start 60s Countdown
            </button>
            <div class="word-counter-tag" id="liveWordCount">0 words (Goal: ${exercise.minWords}+)</div>
          </div>
          <textarea 
            id="writingTextarea" 
            class="writing-input-textarea" 
            placeholder="Click 'Start 60s Countdown' and start typing your English response here..." 
            disabled
          ></textarea>
        </div>

        <div class="exercise-actions-bar">
          <button class="btn-submit-exercise" id="btnEvaluateWriting" disabled>
            ✓ Evaluate & Grade Writing
          </button>
          <button class="btn-view-model-writing" id="btnViewModelWriting" style="display:none;">
            👁️ View Exemplar Answer
          </button>
        </div>

        <div class="pedagogical-feedback-box" id="writingFeedbackBox" style="display:none;"></div>
      </div>
    `;

    const textarea = document.getElementById('writingTextarea');
    const startBtn = document.getElementById('btnStartWriting');
    const evalBtn = document.getElementById('btnEvaluateWriting');
    const wordCountEl = document.getElementById('liveWordCount');
    const timerBadge = document.getElementById('writingTimerBadge');
    const modelBtn = document.getElementById('btnViewModelWriting');
    const fbBox = document.getElementById('writingFeedbackBox');

    // Live word counting
    textarea.addEventListener('input', () => {
      const text = textarea.value.trim();
      const words = text ? text.split(/\s+/).length : 0;
      wordCountEl.textContent = `${words} words (Goal: ${exercise.minWords}+)`;
      if (words >= exercise.minWords) {
        wordCountEl.style.color = '#16a34a';
      } else {
        wordCountEl.style.color = '#64748b';
      }
    });

    startBtn.addEventListener('click', () => {
      textarea.disabled = false;
      textarea.focus();
      startBtn.disabled = true;
      evalBtn.disabled = false;
      this.startWritingTimer(timerBadge, () => {
        textarea.disabled = true;
        this.evaluateWriting(textarea.value, exercise, fbBox, modelBtn);
      });
    });

    evalBtn.addEventListener('click', () => {
      this.stopWritingTimer();
      textarea.disabled = true;
      this.evaluateWriting(textarea.value, exercise, fbBox, modelBtn);
    });

    modelBtn.addEventListener('click', () => {
      fbBox.innerHTML += `
        <div class="exemplar-model-callout">
          <strong>CEFR ${this.currentLevel.toUpperCase()} Exemplar Model Response:</strong>
          <p>${exercise.sampleModel}</p>
        </div>
      `;
      modelBtn.style.display = 'none';
    });
  }

  startWritingTimer(timerBadge, onComplete) {
    this.timeLeft = 60;
    this.timerRunning = true;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const mins = Math.floor(this.timeLeft / 60);
      const secs = this.timeLeft % 60;
      timerBadge.textContent = `⏱️ ${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;

      if (this.timeLeft <= 10) {
        timerBadge.classList.add('urgent');
        this.playTone(320, 0.04, 'sine');
      }

      if (this.timeLeft <= 0) {
        this.stopWritingTimer();
        timerBadge.textContent = "⏱️ Time's Up!";
        if (typeof onComplete === 'function') onComplete();
      }
    }, 1000);
  }

  stopWritingTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.timerRunning = false;
  }

  evaluateWriting(text, exercise, fbBox, modelBtn) {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lowerText = text.toLowerCase();
    let targetHits = 0;

    exercise.targetVocabulary.forEach(term => {
      if (lowerText.includes(term.toLowerCase())) targetHits++;
    });

    const meetsLength = words >= exercise.minWords;
    let scorePercent = Math.min(100, Math.round(((words / exercise.minWords) * 60) + (targetHits * 10)));

    fbBox.style.display = 'block';
    fbBox.innerHTML = `
      <div class="fb-callout ${meetsLength ? 'good' : 'bad'}">
        <h4>${meetsLength ? '✓ 60s Sprint Successfully Completed!' : '⚠️ Word Count Short of Goal'}</h4>
        <p><strong>Words Written:</strong> ${words} (Minimum required: ${exercise.minWords})</p>
        <p><strong>Target Lexicon Employed:</strong> ${targetHits} of ${exercise.targetVocabulary.length} recommended expressions.</p>
        <p><strong>Overall Synthesis Rating:</strong> ${scorePercent}/100 (${this.currentLevel.toUpperCase()} Band)</p>
      </div>
    `;

    modelBtn.style.display = 'inline-block';

    if (meetsLength) this.playSuccess();
    else this.playError();
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.teensLevelsEngine = new TeensLevelsEngine();
  window.teensLevelsEngine.init();
});
