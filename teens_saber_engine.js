/**
 * Bilikids Teens Academy - Pruebas Saber 9° a 11° Engine
 * Interactive state management, multi-reading navigation, chronometer, and pedagogical feedback.
 */

class TeensSaberEngine {
  constructor() {
    this.tests = (typeof TEENS_SABER_TESTS !== 'undefined') ? TEENS_SABER_TESTS : [];
    this.currentTestIndex = 0;
    this.currentReadingIndex = 0;
    this.userAnswers = {}; // { questionId: 'A' | 'B' | 'C' | 'D' }
    
    // Timer properties
    this.timerMode = 'countdown'; // 'countdown' or 'stopwatch'
    this.totalSeconds = 20 * 60; // 20 minutes default
    this.remainingSeconds = this.totalSeconds;
    this.stopwatchSeconds = 0;
    this.timerInterval = null;
    this.isTimerRunning = false;
    this.soundEnabled = true;

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
      gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio fallback silent
    }
  }

  playSuccessFanfare() {
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 0.22, 'triangle'), idx * 90);
    });
  }

  playOptionClickSound() {
    this.playTone(440, 0.08, 'sine');
  }

  setupEventListeners() {
    // Timer toggle
    const btnPause = document.getElementById('btnTimerPause');
    if (btnPause) {
      btnPause.addEventListener('click', () => this.toggleTimer());
    }

    const btnReset = document.getElementById('btnTimerReset');
    if (btnReset) {
      btnReset.addEventListener('click', () => this.resetTimer());
    }

    const btnSound = document.getElementById('btnSoundToggle');
    if (btnSound) {
      btnSound.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        btnSound.textContent = this.soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
      });
    }

    // Navigation buttons
    const btnPrev = document.getElementById('btnPrevReading');
    const btnNext = document.getElementById('btnNextReading');
    const btnFinish = document.getElementById('btnFinishTest');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => this.navigateReading(-1));
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => this.navigateReading(1));
    }
    if (btnFinish) {
      btnFinish.addEventListener('click', () => this.submitAndEvaluate());
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
        <div class="pill-meta">${test.readings.length} Readings • B2</div>
      `;
      btn.addEventListener('click', () => {
        if (idx !== this.currentTestIndex) {
          if (confirm('¿Deseas cambiar a otra prueba? Las respuestas no enviadas de esta prueba se reiniciarán.')) {
            this.loadTest(idx);
          }
        }
      });
      container.appendChild(btn);
    });
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

    const test = this.tests[testIndex];
    document.getElementById('currentTestTitle').textContent = test.title;
    document.getElementById('currentTestMeta').textContent = `${test.level} • 3 Lecturas Críticas • Temporizador Recomendado: ${test.recommendedMinutes} min`;

    this.renderReadingTabs();
    this.renderCurrentReading();
  }

  renderReadingTabs() {
    const container = document.getElementById('readingTabsContainer');
    if (!container) return;
    container.innerHTML = '';

    const test = this.tests[this.currentTestIndex];
    test.readings.forEach((reading, idx) => {
      const btn = document.createElement('button');
      btn.className = `reading-tab-btn ${idx === this.currentReadingIndex ? 'active' : ''}`;
      btn.innerHTML = `<span>📖</span> Reading ${idx + 1}`;
      btn.addEventListener('click', () => {
        this.currentReadingIndex = idx;
        this.updateReadingTabsUI();
        this.renderCurrentReading();
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

    // Update passage side
    document.getElementById('passageTopicTag').textContent = `Reading ${this.currentReadingIndex + 1} of ${test.readings.length} • ${reading.topic}`;
    document.getElementById('passageTitle').textContent = reading.title;
    document.getElementById('passageBody').textContent = reading.text;

    // Update questions side
    const questionsContainer = document.getElementById('questionsListContainer');
    questionsContainer.innerHTML = '';

    reading.questions.forEach((q, qIdx) => {
      const qBox = document.createElement('div');
      qBox.className = 'question-box';
      qBox.id = `qbox-${q.id}`;

      let optionsHtml = '';
      q.options.forEach(opt => {
        const isSelected = this.userAnswers[q.id] === opt.key;
        optionsHtml += `
          <div class="option-label ${isSelected ? 'selected' : ''}" data-qid="${q.id}" data-opt="${opt.key}">
            <div class="option-badge">${opt.key}</div>
            <div class="option-text">${opt.text}</div>
          </div>
        `;
      });

      qBox.innerHTML = `
        <div class="question-meta">
          <span class="question-num-tag">Pregunta ${qIdx + 1}</span>
          <span class="question-competence">${q.competence}</span>
        </div>
        <div class="question-prompt">${q.question}</div>
        <div class="options-list">${optionsHtml}</div>
      `;

      questionsContainer.appendChild(qBox);
    });

    // Add option selection events
    questionsContainer.querySelectorAll('.option-label').forEach(label => {
      label.addEventListener('click', (e) => {
        const qid = label.dataset.qid;
        const optKey = label.dataset.opt;
        this.selectAnswer(qid, optKey);
      });
    });

    // Update Prev / Next buttons
    const btnPrev = document.getElementById('btnPrevReading');
    const btnNext = document.getElementById('btnNextReading');
    if (btnPrev) btnPrev.disabled = (this.currentReadingIndex === 0);
    if (btnNext) btnNext.disabled = (this.currentReadingIndex === test.readings.length - 1);

    // Scroll passage to top
    const passageCard = document.querySelector('.passage-card');
    if (passageCard) passageCard.scrollTop = 0;
  }

  selectAnswer(questionId, optionKey) {
    this.userAnswers[questionId] = optionKey;
    this.playOptionClickSound();

    // Update UI in current view
    const qBox = document.getElementById(`qbox-${questionId}`);
    if (qBox) {
      qBox.querySelectorAll('.option-label').forEach(lbl => {
        lbl.classList.toggle('selected', lbl.dataset.opt === optionKey);
      });
    }

    this.updateProgressBadge();
  }

  updateProgressBadge() {
    const test = this.tests[this.currentTestIndex];
    let totalQuestions = 0;
    test.readings.forEach(r => totalQuestions += r.questions.length);
    const answeredCount = Object.keys(this.userAnswers).length;

    const progressEl = document.getElementById('examProgressCounter');
    if (progressEl) {
      progressEl.textContent = `${answeredCount} de ${totalQuestions} respondidas`;
    }
  }

  navigateReading(direction) {
    const test = this.tests[this.currentTestIndex];
    const newIdx = this.currentReadingIndex + direction;
    if (newIdx >= 0 && newIdx < test.readings.length) {
      this.currentReadingIndex = newIdx;
      this.updateReadingTabsUI();
      this.renderCurrentReading();
    }
  }

  // Timer methods
  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isTimerRunning = true;
    this.updateTimerBtnUI();

    this.timerInterval = setInterval(() => {
      if (this.timerMode === 'countdown') {
        if (this.remainingSeconds > 0) {
          this.remainingSeconds--;
          this.renderTimerDisplay();
          if (this.remainingSeconds === 60) {
            this.playTone(660, 0.4, 'triangle');
          }
        } else {
          clearInterval(this.timerInterval);
          this.isTimerRunning = false;
          alert('¡Tiempo oficial agotado! Se evaluarán automáticamente las respuestas registradas.');
          this.submitAndEvaluate();
        }
      } else {
        this.stopwatchSeconds++;
        this.renderTimerDisplay();
      }
    }, 1000);
  }

  toggleTimer() {
    if (this.isTimerRunning) {
      clearInterval(this.timerInterval);
      this.isTimerRunning = false;
    } else {
      this.startTimer();
    }
    this.updateTimerBtnUI();
  }

  resetTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.remainingSeconds = this.totalSeconds;
    this.stopwatchSeconds = 0;
    this.isTimerRunning = false;
    this.renderTimerDisplay();
    this.updateTimerBtnUI();
  }

  updateTimerBtnUI() {
    const btn = document.getElementById('btnTimerPause');
    if (btn) {
      btn.textContent = this.isTimerRunning ? '⏸ Pausar' : '▶ Reanudar';
    }
  }

  renderTimerDisplay() {
    const display = document.getElementById('timerDisplay');
    if (!display) return;

    let sec = (this.timerMode === 'countdown') ? this.remainingSeconds : this.stopwatchSeconds;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    display.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    if (this.timerMode === 'countdown' && this.remainingSeconds <= 120) {
      display.classList.add('danger');
    } else {
      display.classList.remove('danger');
    }
  }

  // Evaluation & Pedagogical Feedback
  submitAndEvaluate() {
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;

    const test = this.tests[this.currentTestIndex];
    let totalQuestions = 0;
    let correctCount = 0;
    const questionResults = [];

    test.readings.forEach((reading, rIdx) => {
      reading.questions.forEach((q, qIdx) => {
        totalQuestions++;
        const selected = this.userAnswers[q.id] || null;
        const isCorrect = (selected === q.correct);
        if (isCorrect) correctCount++;

        questionResults.push({
          readingNum: rIdx + 1,
          readingTitle: reading.title,
          questionNum: qIdx + 1,
          questionText: q.question,
          competence: q.competence,
          selected: selected,
          correct: q.correct,
          isCorrect: isCorrect,
          options: q.options,
          explanation: q.explanation
        });
      });
    });

    const percentScore = Math.round((correctCount / totalQuestions) * 100);

    // ICFES / CEFR Performance Classification
    let icfesBand = "";
    let bandColor = "";
    let qualitativeFeedback = "";

    if (percentScore >= 90) {
      icfesBand = "Nivel B2+ • Desempeño Sobresaliente (Superior)";
      bandColor = "#059669";
      qualitativeFeedback = "¡Extraordinario dominio analítico! Demuestras una excelente capacidad de inferencia crítica, vocabulario académico en contexto y captación precisa de la intención del autor. Estás en la cúspide del nivel B2 según los estándares del ICFES.";
      this.playSuccessFanfare();
    } else if (percentScore >= 75) {
      icfesBand = "Nivel B1 / B2 • Desempeño Alto (Competente)";
      bandColor = "#2563eb";
      qualitativeFeedback = "¡Muy buen resultado! Comprendes las tesis principales y deduces argumentos complejos con sólida precisión. Para consolidar tu puntaje hacia el nivel superior, refuerza la interpretación de matices de tono y conectores lógicos avanzados.";
      this.playSuccessFanfare();
    } else if (percentScore >= 60) {
      icfesBand = "Nivel A2 • Desempeño Medio (Básico Consolidado)";
      bandColor = "#d97706";
      qualitativeFeedback = "Buen esfuerzo. Identificas información explícita y hechos concretos con claridad. Enfoca tu práctica en la inferencia de ideas no literales y en descifrar vocabulario abstracto a partir del contexto del párrafo.";
    } else {
      icfesBand = "Nivel A1 / A- • En Desarrollo";
      bandColor = "#dc2626";
      qualitativeFeedback = "Identificas vocabulario básico, pero las lecturas complejas requieren mayor entrenamiento. Te recomendamos revisar detenidamente la retroalimentación de cada pregunta para familiarizarte con las trampas comunes de los distractores del examen.";
    }

    this.showResultsModal(percentScore, correctCount, totalQuestions, icfesBand, bandColor, qualitativeFeedback, questionResults);
  }

  showResultsModal(score, correctCount, totalQuestions, band, bandColor, feedbackText, questionResults) {
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'results-modal-backdrop';
    modalBackdrop.id = 'resultsModal';

    let reviewItemsHtml = '';
    questionResults.forEach((res, i) => {
      reviewItemsHtml += `
        <div class="review-item ${res.isCorrect ? 'correct' : 'incorrect'}">
          <div class="review-item-header">
            <div>
              <strong>Lectura ${res.readingNum} • Pregunta ${res.questionNum}</strong>
              <span style="font-size: 0.78rem; color: #64748b; margin-left: 8px;">(${res.competence})</span>
            </div>
            <div class="review-status-badge">
              ${res.isCorrect ? '✅ Respuesta Correcta (+1)' : '❌ Incorrecta'}
            </div>
          </div>
          <div style="font-weight: 700; color: #0f172a; margin-bottom: 6px;">${res.questionText}</div>
          <div style="font-size: 0.88rem; color: #475569; margin-bottom: 4px;">
            Tu respuesta: <strong style="color: ${res.isCorrect ? '#16a34a' : '#dc2626'}">${res.selected ? res.selected + ') ' + (res.options.find(o => o.key === res.selected)?.text || '') : 'Sin responder'}</strong>
          </div>
          ${!res.isCorrect ? `
            <div style="font-size: 0.88rem; color: #15803d; font-weight: 700;">
              Respuesta correcta: ${res.correct}) ${res.options.find(o => o.key === res.correct)?.text}
            </div>
          ` : ''}
          <div class="review-explanation">
            <strong>💡 Justificación Pedagógica (ICFES):</strong><br>
            ${res.explanation}
          </div>
        </div>
      `;
    });

    modalBackdrop.innerHTML = `
      <div class="results-modal-card">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <h2 style="font-family: var(--font-display, 'Fredoka', sans-serif); font-size: 1.8rem; color: #1e1b4b;">
            📊 Informe de Evaluación • Pruebas Saber 11
          </h2>
          <button id="btnCloseModal" style="background: none; border: none; font-size: 1.8rem; cursor: pointer; color: #94a3b8;">&times;</button>
        </div>

        <div class="results-hero-grid">
          <div class="score-circle-box" style="background: ${bandColor};">
            <span class="score-number">${score}</span>
            <span class="score-label">Puntaje / 100</span>
          </div>
          <div class="results-summary-info">
            <div class="icfes-band-pill" style="background: ${bandColor}18; color: ${bandColor};">
              ${band}
            </div>
            <h2>${correctCount} de ${totalQuestions} respuestas correctas</h2>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.5;">${feedbackText}</p>
          </div>
        </div>

        <div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #1e293b; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 8px;">
            <span>🔍</span> Retroalimentación Detallada Pregunta por Pregunta
          </h3>
          <div class="feedback-breakdown-list">
            ${reviewItemsHtml}
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 12px; margin-top: 1rem;">
          <button id="btnRetryTest" class="btn-secondary">🔄 Reintentar Esta Prueba</button>
          <button id="btnNextTest" class="btn-primary-finish">Siguiente Prueba ➔</button>
        </div>
      </div>
    `;

    document.body.appendChild(modalBackdrop);

    // Modal buttons
    document.getElementById('btnCloseModal').addEventListener('click', () => modalBackdrop.remove());
    document.getElementById('btnRetryTest').addEventListener('click', () => {
      modalBackdrop.remove();
      this.loadTest(this.currentTestIndex);
    });
    document.getElementById('btnNextTest').addEventListener('click', () => {
      modalBackdrop.remove();
      const nextIdx = (this.currentTestIndex + 1) % this.tests.length;
      this.loadTest(nextIdx);
    });
  }
}

// Auto-initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  window.saberEngine = new TeensSaberEngine();
  window.saberEngine.init();
});
