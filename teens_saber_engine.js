/**
 * Bilikids Teens Academy - Pruebas Saber 9° a 11° Engine
 * Interactive state management, multi-reading navigation, chronometer, font switcher,
 * test stepper, and deep pedagogical feedback.
 */

class TeensSaberEngine {
  constructor() {
    this.tests = (typeof TEENS_SABER_TESTS !== 'undefined') ? TEENS_SABER_TESTS : [];
    this.currentTestIndex = 0;
    this.currentReadingIndex = 0;
    this.userAnswers = {}; // { questionId: 'A' | 'B' | 'C' | 'D' }
    
    // Timer properties
    this.totalSeconds = 20 * 60; // 20 minutes default
    this.remainingSeconds = this.totalSeconds;
    this.timerInterval = null;
    this.isTimerRunning = false;
    this.soundEnabled = true;

    // Font size setting (default medium)
    this.fontSizeLevel = 'md'; // sm: 0.98rem, md: 1.08rem, lg: 1.25rem

    // Web Audio Synthesizer
    this.audioCtx = null;
  }

  init() {
    this.setupAudio();
    this.renderTestPills();
    this.loadTest(0);
    this.setupEventListeners();
    this.startTimer();
  }

  setupAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }

  playTone(freq, duration, type = 'sine') {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playSelectSound() {
    this.playTone(620, 0.08, 'sine');
  }

  playFinishFanfare() {
    const freqs = [523.25, 659.25, 783.99, 1046.50];
    freqs.forEach((f, i) => {
      setTimeout(() => this.playTone(f, 0.25, 'triangle'), i * 140);
    });
  }

  setupEventListeners() {
    // Timer Buttons
    const btnPause = document.getElementById('btnTimerPause');
    if (btnPause) {
      btnPause.addEventListener('click', () => this.toggleTimer());
    }

    const btnReset = document.getElementById('btnTimerReset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.resetTimer();
        this.startTimer();
      });
    }

    const btnSound = document.getElementById('btnSoundToggle');
    if (btnSound) {
      btnSound.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        btnSound.textContent = this.soundEnabled ? '🔊' : '🔇';
      });
    }

    // Top Prev/Next Test Stepper
    const btnPrevTestTop = document.getElementById('btnPrevTestTop');
    if (btnPrevTestTop) {
      btnPrevTestTop.addEventListener('click', () => this.goToPrevTest());
    }
    const btnNextTestTop = document.getElementById('btnNextTestTop');
    if (btnNextTestTop) {
      btnNextTestTop.addEventListener('click', () => this.goToNextTest());
    }

    // Reading Navigation Buttons
    const btnPrev = document.getElementById('btnPrevReading');
    const btnNext = document.getElementById('btnNextReading');
    const btnFinish = document.getElementById('btnFinishTest');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (this.currentReadingIndex > 0) {
          this.currentReadingIndex--;
          this.updateReadingTabsUI();
          this.renderCurrentReading();
          window.scrollTo({ top: 180, behavior: 'smooth' });
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        const test = this.tests[this.currentTestIndex];
        if (this.currentReadingIndex < test.readings.length - 1) {
          this.currentReadingIndex++;
          this.updateReadingTabsUI();
          this.renderCurrentReading();
          window.scrollTo({ top: 180, behavior: 'smooth' });
        }
      });
    }

    if (btnFinish) {
      btnFinish.addEventListener('click', () => this.finishTestAndEvaluate());
    }

    // Font size controls
    const fontBtns = document.querySelectorAll('.font-size-btn');
    fontBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fontBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.setFontSize(btn.dataset.size);
      });
    });
  }

  setFontSize(size) {
    this.fontSizeLevel = size;
    const passage = document.getElementById('passageBody');
    if (!passage) return;
    if (size === 'sm') {
      passage.style.fontSize = '0.98rem';
      passage.style.lineHeight = '1.7';
    } else if (size === 'lg') {
      passage.style.fontSize = '1.24rem';
      passage.style.lineHeight = '1.95';
    } else {
      passage.style.fontSize = '1.08rem';
      passage.style.lineHeight = '1.85';
    }
  }

  renderTestPills() {
    const container = document.getElementById('testPillsContainer');
    if (!container) return;
    container.innerHTML = '';

    this.tests.forEach((test, idx) => {
      const btn = document.createElement('button');
      btn.className = `test-pill-btn ${idx === this.currentTestIndex ? 'active' : ''}`;
      btn.innerHTML = `
        <div class="pill-name">Test ${test.id}</div>
        <div class="pill-meta">${test.level} • 3 Readings</div>
      `;
      btn.addEventListener('click', () => {
        if (idx !== this.currentTestIndex) {
          this.loadTest(idx);
        }
      });
      container.appendChild(btn);
    });
  }

  goToNextTest() {
    const nextIdx = (this.currentTestIndex + 1) % this.tests.length;
    this.loadTest(nextIdx);
  }

  goToPrevTest() {
    const prevIdx = (this.currentTestIndex - 1 + this.tests.length) % this.tests.length;
    this.loadTest(prevIdx);
  }

  loadTest(testIndex) {
    this.currentTestIndex = testIndex;
    this.currentReadingIndex = 0;
    this.userAnswers = {};
    this.resetTimer();
    this.startTimer();

    // Update test pills UI
    const pills = document.querySelectorAll('.test-pill-btn');
    pills.forEach((p, i) => p.classList.toggle('active', i === testIndex));

    // Update Stepper disabled states
    const btnPrevTestTop = document.getElementById('btnPrevTestTop');
    const btnNextTestTop = document.getElementById('btnNextTestTop');
    if (btnPrevTestTop) btnPrevTestTop.disabled = testIndex === 0;
    if (btnNextTestTop) btnNextTestTop.disabled = testIndex === this.tests.length - 1;

    const test = this.tests[testIndex];
    const testNumEl = document.getElementById('currentTestNumberIndicator');
    if (testNumEl) testNumEl.textContent = `Test ${testIndex + 1} of ${this.tests.length}`;

    document.getElementById('currentTestTitle').textContent = test.title;
    document.getElementById('currentTestMeta').textContent = `${test.level} • 3 Critical Passages • Recommended Time: ${test.recommendedMinutes} min`;

    this.renderReadingTabs();
    this.renderCurrentReading();
    this.updateProgressCounter();
  }

  renderReadingTabs() {
    const container = document.getElementById('readingTabsContainer');
    if (!container) return;
    container.innerHTML = '';

    const test = this.tests[this.currentTestIndex];
    test.readings.forEach((reading, idx) => {
      const btn = document.createElement('button');
      btn.className = `reading-tab-btn ${idx === this.currentReadingIndex ? 'active' : ''}`;
      btn.innerHTML = `<span>📖</span> Passage ${idx + 1}`;
      btn.addEventListener('click', () => {
        this.currentReadingIndex = idx;
        this.updateReadingTabsUI();
        this.renderCurrentReading();
        window.scrollTo({ top: 180, behavior: 'smooth' });
      });
      container.appendChild(btn);
    });
  }

  updateReadingTabsUI() {
    const tabs = document.querySelectorAll('.reading-tab-btn');
    tabs.forEach((tab, i) => tab.classList.toggle('active', i === this.currentReadingIndex));
  }

  renderCurrentReading() {
    const test = this.tests[this.currentTestIndex];
    const reading = test.readings[this.currentReadingIndex];

    document.getElementById('passageTopicTag').textContent = `Passage ${this.currentReadingIndex + 1} of ${test.readings.length} • ${reading.topic}`;
    document.getElementById('passageTitle').textContent = reading.title;
    
    const passageEl = document.getElementById('passageBody');
    passageEl.textContent = reading.text;
    this.setFontSize(this.fontSizeLevel);

    // Questions List
    const questionsContainer = document.getElementById('questionsListContainer');
    questionsContainer.innerHTML = '';

    reading.questions.forEach((q, qLocalIdx) => {
      const qBox = document.createElement('div');
      const isAnswered = this.userAnswers[q.id] !== undefined;
      qBox.className = `question-box ${isAnswered ? 'answered' : ''}`;
      qBox.id = `qbox-${q.id}`;

      const optionsHtml = Object.keys(q.options).map(letter => {
        const isSelected = this.userAnswers[q.id] === letter;
        return `
          <button type="button" class="option-btn ${isSelected ? 'selected' : ''}" data-qid="${q.id}" data-letter="${letter}">
            <span class="option-bullet">${letter}</span>
            <span class="option-text">${q.options[letter]}</span>
          </button>
        `;
      }).join('');

      qBox.innerHTML = `
        <div class="question-meta-row">
          <span class="question-number-badge">Question ${q.id}</span>
          <span class="question-competency-tag">🎯 ${q.competency}</span>
        </div>
        <div class="question-stem">${q.stem}</div>
        <div class="options-list">
          ${optionsHtml}
        </div>
      `;

      questionsContainer.appendChild(qBox);
    });

    // Wire Option Click Handlers
    questionsContainer.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qid = parseInt(btn.dataset.qid, 10);
        const letter = btn.dataset.letter;
        this.selectAnswer(qid, letter);
      });
    });

    // Update Bottom Navigation Buttons
    const btnPrev = document.getElementById('btnPrevReading');
    const btnNext = document.getElementById('btnNextReading');

    if (btnPrev) btnPrev.disabled = this.currentReadingIndex === 0;
    if (btnNext) btnNext.disabled = this.currentReadingIndex === test.readings.length - 1;

    this.updateProgressCounter();
  }

  selectAnswer(questionId, letter) {
    this.userAnswers[questionId] = letter;
    this.playSelectSound();

    const qBox = document.getElementById(`qbox-${questionId}`);
    if (qBox) {
      qBox.classList.add('answered');
      qBox.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.letter === letter);
      });
    }

    this.updateProgressCounter();
  }

  updateProgressCounter() {
    const test = this.tests[this.currentTestIndex];
    let totalQuestions = 0;
    test.readings.forEach(r => totalQuestions += r.questions.length);

    const answeredCount = Object.keys(this.userAnswers).length;
    const progressEl = document.getElementById('examProgressCounter');
    if (progressEl) {
      progressEl.textContent = `${answeredCount} of ${totalQuestions} Answered`;
    }
  }

  // TIMER MANAGEMENT
  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isTimerRunning = true;
    this.updateTimerButtonUI();

    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.renderTimerDisplay();

        if (this.remainingSeconds === 5 * 60) {
          this.playTone(440, 0.4, 'triangle'); // 5 minutes warning
        } else if (this.remainingSeconds <= 10 && this.remainingSeconds > 0) {
          this.playTone(880, 0.08, 'sine'); // Last 10s tick
        }
      } else {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        this.updateTimerButtonUI();
        this.playTone(220, 1.2, 'sawtooth');
        alert('Time is up! Your test answers will now be evaluated.');
        this.finishTestAndEvaluate();
      }
    }, 1000);
  }

  pauseTimer() {
    this.isTimerRunning = false;
    clearInterval(this.timerInterval);
    this.updateTimerButtonUI();
  }

  toggleTimer() {
    if (this.isTimerRunning) this.pauseTimer();
    else this.startTimer();
  }

  resetTimer() {
    this.pauseTimer();
    this.remainingSeconds = this.totalSeconds;
    this.renderTimerDisplay();
  }

  updateTimerButtonUI() {
    const btn = document.getElementById('btnTimerPause');
    if (btn) {
      btn.textContent = this.isTimerRunning ? '⏸' : '▶';
      btn.title = this.isTimerRunning ? 'Pause timer' : 'Resume timer';
    }
  }

  renderTimerDisplay() {
    const display = document.getElementById('timerDisplay');
    if (!display) return;
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // EVALUATION & PEDAGOGICAL MODAL
  finishTestAndEvaluate() {
    this.pauseTimer();
    this.playFinishFanfare();

    const test = this.tests[this.currentTestIndex];
    let totalQuestions = 0;
    let correctAnswers = 0;
    const reviewItems = [];

    test.readings.forEach(reading => {
      reading.questions.forEach(q => {
        totalQuestions++;
        const userChoice = this.userAnswers[q.id];
        const isCorrect = userChoice === q.correct;
        if (isCorrect) correctAnswers++;

        reviewItems.push({
          questionId: q.id,
          stem: q.stem,
          topic: reading.topic,
          competency: q.competency,
          userChoice: userChoice || 'Unanswered',
          correctChoice: q.correct,
          correctText: q.options[q.correct],
          userText: userChoice ? q.options[userChoice] : 'No answer selected',
          isCorrect,
          rationale: q.rationale
        });
      });
    });

    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    const minutesTaken = Math.round((this.totalSeconds - this.remainingSeconds) / 60);

    let cefrBadge = 'A2 Basic';
    let badgeColor = '#f59e0b';
    let performanceTitle = 'Need more practice';
    if (percentage >= 85) {
      cefrBadge = 'B2 Vantage (High Honors)';
      badgeColor = '#10b981';
      performanceTitle = 'Outstanding Reading Mastery!';
    } else if (percentage >= 70) {
      cefrBadge = 'B1+ Independent User';
      badgeColor = '#6366f1';
      performanceTitle = 'Solid Reading Comprehension!';
    } else if (percentage >= 50) {
      cefrBadge = 'B1 Threshold';
      badgeColor = '#3b82f6';
      performanceTitle = 'Good Effort - Room for Growth';
    }

    this.displayResultsModal({
      testTitle: test.title,
      totalQuestions,
      correctAnswers,
      percentage,
      minutesTaken,
      cefrBadge,
      badgeColor,
      performanceTitle,
      reviewItems
    });
  }

  displayResultsModal(data) {
    const existing = document.getElementById('saberModalBackdrop');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'saberModalBackdrop';
    modal.className = 'saber-modal-backdrop';

    const reviewItemsHtml = data.reviewItems.map(item => `
      <div class="feedback-item-card ${item.isCorrect ? 'correct' : 'incorrect'}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <strong style="font-size: 0.95rem; color: #0f172a;">Question ${item.questionId}: ${item.stem}</strong>
          <span style="font-size: 0.78rem; font-weight: 800; color: ${item.isCorrect ? '#10b981' : '#ef4444'};">
            ${item.isCorrect ? '✓ CORRECT (+1 pt)' : '✗ INCORRECT (0 pts)'}
          </span>
        </div>
        <div style="font-size: 0.85rem; color: #475569; margin: 4px 0;">
          <strong>Your Answer:</strong> (${item.userChoice}) ${item.userText} 
          ${!item.isCorrect ? `• <strong style="color: #047857;">Correct Answer:</strong> (${item.correctChoice}) ${item.correctText}` : ''}
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; margin-top: 6px; font-size: 0.82rem; color: #334155; line-height: 1.45;">
          <strong style="color: #4338ca;">Pedagogical Rationale:</strong> ${item.rationale}
        </div>
      </div>
    `).join('');

    modal.innerHTML = `
      <div class="saber-modal-dialog">
        <header class="saber-modal-header">
          <div>
            <span style="background: rgba(255,255,255,0.2); font-size: 0.75rem; font-weight: 800; padding: 2px 10px; border-radius: 999px; text-transform: uppercase;">
              MEN / ICFES Score Report
            </span>
            <h2 style="margin: 4px 0 0; font-family: var(--font-display, inherit); font-size: 1.4rem;">
              ${data.testTitle}
            </h2>
          </div>
          <button id="btnCloseModalX" class="modal-close-icon-btn" title="Close report">✕</button>
        </header>

        <div class="saber-modal-body">
          <!-- Overview Card -->
          <div class="saber-score-overview-card" style="border-left: 6px solid ${data.badgeColor};">
            <div>
              <span style="background: ${data.badgeColor}; color: #ffffff; font-size: 0.78rem; font-weight: 800; padding: 3px 12px; border-radius: 999px;">
                Estimated Level: ${data.cefrBadge}
              </span>
              <h3 style="margin: 8px 0 2px; font-size: 1.35rem; color: #0f172a;">
                ${data.performanceTitle}
              </h3>
              <p style="margin: 0; font-size: 0.85rem; color: #64748b;">
                Time taken: ${data.minutesTaken} minutes • Accuracy: ${data.percentage}%
              </p>
            </div>
            <div class="score-big-circle">
              <span class="score-big-num" style="color: ${data.badgeColor};">${data.correctAnswers}</span>
              <span class="score-big-denom">/ ${data.totalQuestions} pts</span>
            </div>
          </div>

          <!-- Question Breakdown -->
          <h4 style="margin: 1.25rem 0 0.75rem; font-size: 1.1rem; color: #1e1b4b; display: flex; align-items: center; gap: 8px;">
            <span>🔍</span> Detailed Question-by-Question Analysis
          </h4>
          <div class="feedback-breakdown-list">
            ${reviewItemsHtml}
          </div>
        </div>

        <footer class="saber-modal-footer">
          <button id="btnExitSimulatorModal" class="saber-nav-btn secondary">
            🚪 Exit to Teens Academy
          </button>
          <div style="display: flex; gap: 10px;">
            <button id="btnRetryTestModal" class="saber-nav-btn secondary">
              ↺ Try Again
            </button>
            <button id="btnNextTestModal" class="saber-nav-btn primary">
              Next Test ➔
            </button>
          </div>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);

    // Modal Action Handlers
    document.getElementById('btnCloseModalX').addEventListener('click', () => modal.remove());
    document.getElementById('btnExitSimulatorModal').addEventListener('click', () => {
      window.location.href = 'teens.html';
    });
    document.getElementById('btnRetryTestModal').addEventListener('click', () => {
      modal.remove();
      this.loadTest(this.currentTestIndex);
    });
    document.getElementById('btnNextTestModal').addEventListener('click', () => {
      modal.remove();
      const nextIdx = (this.currentTestIndex + 1) % this.tests.length;
      this.loadTest(nextIdx);
    });
  }
}
