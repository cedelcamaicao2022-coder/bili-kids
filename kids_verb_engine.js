/**
 * Bilikids Kids Verb Sprint Engine (1-Minute Challenge)
 * Cambridge A1-A2 Verb Mastery: Present Simple, Past Simple, Continuous, & Modals.
 */

const KIDS_VERB_QUESTIONS = [
  // Present Simple (3rd person)
  {
    sentence: "Lucas always _____ his teeth before going to sleep.",
    options: ["brushes", "brush", "brushing", "brushed"],
    correct: 0,
    explanation: "With 'he/Lucas' in the present, we add -es: brushes!",
    category: "Present Simple"
  },
  {
    sentence: "Birds usually _____ south when winter arrives.",
    options: ["fly", "flies", "flying", "flew"],
    correct: 0,
    explanation: "Birds is plural (they), so the base verb is 'fly'.",
    category: "Present Simple"
  },
  {
    sentence: "My sister _____ pizza every Friday evening.",
    options: ["eats", "eat", "eating", "ate"],
    correct: 0,
    explanation: "My sister (she) takes -s in present simple: eats!",
    category: "Present Simple"
  },
  {
    sentence: "The sun _____ in the east every morning.",
    options: ["rises", "rise", "rising", "rose"],
    correct: 0,
    explanation: "The sun (it) is singular: rises!",
    category: "Present Simple"
  },
  // Past Simple (Regular & Irregular)
  {
    sentence: "Yesterday, Sofia _____ a fantastic picture in art class.",
    options: ["painted", "paints", "paint", "painting"],
    correct: 0,
    explanation: "'Yesterday' signals the past simple: painted (regular +ed).",
    category: "Past Simple"
  },
  {
    sentence: "Last night, Diego _____ a strange noise in the garden.",
    options: ["heard", "hears", "heared", "hearing"],
    correct: 0,
    explanation: "'Hear' is an irregular verb in the past: heard!",
    category: "Past Simple"
  },
  {
    sentence: "We _____ to the city zoo last weekend.",
    options: ["went", "goed", "go", "going"],
    correct: 0,
    explanation: "The past tense of 'go' is 'went'!",
    category: "Past Simple"
  },
  {
    sentence: "Oliver _____ his bicycle to school yesterday morning.",
    options: ["rode", "rides", "rid", "riding"],
    correct: 0,
    explanation: "The past simple of 'ride' is 'rode'.",
    category: "Past Simple"
  },
  {
    sentence: "They _____ a giant sandcastle on the beach yesterday.",
    options: ["built", "builded", "build", "building"],
    correct: 0,
    explanation: "'Build' becomes 'built' in the past simple.",
    category: "Past Simple"
  },
  // Present Continuous (-ing)
  {
    sentence: "Listen! The baby _____ right now.",
    options: ["is sleeping", "sleeps", "slept", "are sleeping"],
    correct: 0,
    explanation: "'Right now' indicates present continuous: is sleeping.",
    category: "Continuous"
  },
  {
    sentence: "Look at the sky! It _____ heavily outside.",
    options: ["is raining", "rains", "rained", "raining"],
    correct: 0,
    explanation: "Happening now: It is raining!",
    category: "Continuous"
  },
  {
    sentence: "The children _____ soccer in the park at this moment.",
    options: ["are playing", "is playing", "plays", "played"],
    correct: 0,
    explanation: "Children is plural (they), so we use 'are playing'.",
    category: "Continuous"
  },
  // Modals & Auxiliaries
  {
    sentence: "Dolphins _____ swim very fast in the ocean.",
    options: ["can", "are", "do", "musts"],
    correct: 0,
    explanation: "We express ability with the modal verb 'can'.",
    category: "Modals"
  },
  {
    sentence: "_____ you like chocolate ice cream?",
    options: ["Do", "Does", "Are", "Did"],
    correct: 0,
    explanation: "With 'you' in present simple questions, we use 'Do'.",
    category: "Questions"
  },
  {
    sentence: "_____ your brother play guitar in a band?",
    options: ["Does", "Do", "Is", "Are"],
    correct: 0,
    explanation: "With 'your brother' (he), we ask with 'Does'.",
    category: "Questions"
  },
  // More common verbs
  {
    sentence: "Emma _____ her English homework before dinner.",
    options: ["finishes", "finish", "finishing", "finished"],
    correct: 0,
    explanation: "Emma (she) -> finishes!",
    category: "Present Simple"
  },
  {
    sentence: "Grandpa _____ us an exciting story last Sunday.",
    options: ["told", "telled", "tells", "telling"],
    correct: 0,
    explanation: "The past tense of 'tell' is 'told'.",
    category: "Past Simple"
  },
  {
    sentence: "I _____ my favorite book two days ago.",
    options: ["read", "reading", "reads", "readed"],
    correct: 0,
    explanation: "In the past simple, 'read' is spelled 'read' (pronounced /red/)!",
    category: "Past Simple"
  },
  {
    sentence: "Kangaroos _____ jump up to three meters high!",
    options: ["can", "could to", "cans", "are"],
    correct: 0,
    explanation: "'Can' describes natural physical ability.",
    category: "Modals"
  },
  {
    sentence: "We _____ happy when we won the science championship.",
    options: ["were", "was", "are", "is"],
    correct: 0,
    explanation: "'We' in the past simple takes 'were'.",
    category: "Past Simple"
  }
];

class KidsVerbEngine {
  constructor() {
    this.allQuestions = KIDS_VERB_QUESTIONS;
    this.deck = [];
    this.currentIndex = 0;
    this.timeLimit = 60;
    this.timeRemaining = 60;
    this.timerInterval = null;
    this.isPlaying = false;
    this.isFinished = false;

    // Scores & Stats
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.correctCount = 0;
    this.totalAnswered = 0;
    this.history = [];

    // Audio
    this.soundEnabled = true;
    this.audioCtx = null;
  }

  init() {
    this.setupAudio();
    this.setupListeners();
    this.prepareDeck();
    this.renderInitialScreen();
  }

  setupAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    } catch (e) {
      console.warn("Web Audio not available", e);
    }
  }

  playTone(freq, duration, type = "sine") {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === "suspended") this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.09, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playSuccessSound() {
    const freqs = [440, 554.37, 659.25];
    freqs.forEach((f, i) => setTimeout(() => this.playTone(f, 0.12, "triangle"), i * 60));
  }

  playWrongSound() {
    this.playTone(220, 0.18, "sawtooth");
  }

  playTickSound() {
    this.playTone(800, 0.05, "sine");
  }

  playVictoryFanfare() {
    const fanfare = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    fanfare.forEach((f, i) => setTimeout(() => this.playTone(f, 0.22, "triangle"), i * 110));
  }

  shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  prepareDeck() {
    // Shuffle questions and randomize their option order
    this.deck = this.shuffle(this.allQuestions).map(q => {
      const correctOptionText = q.options[q.correct];
      const shuffledOptions = this.shuffle(q.options);
      const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);
      return {
        sentence: q.sentence,
        options: shuffledOptions,
        correct: newCorrectIndex,
        explanation: q.explanation,
        category: q.category
      };
    });
    this.currentIndex = 0;
  }

  setupListeners() {
    const startBtn = document.getElementById('btnStartSprint');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startSprint());
    }

    const soundBtn = document.getElementById('btnSoundSprint');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        soundBtn.textContent = this.soundEnabled ? '🔊 Sonido: ON' : '🔇 Sonido: OFF';
      });
    }
  }

  renderInitialScreen() {
    document.getElementById('sprintStartCard').style.display = 'block';
    document.getElementById('sprintGameCard').style.display = 'none';
    this.updateStatsBar();
  }

  startSprint() {
    this.isPlaying = true;
    this.isFinished = false;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.correctCount = 0;
    this.totalAnswered = 0;
    this.history = [];
    this.timeRemaining = this.timeLimit;

    this.prepareDeck();

    document.getElementById('sprintStartCard').style.display = 'none';
    document.getElementById('sprintGameCard').style.display = 'block';

    this.updateStatsBar();
    this.showQuestion();

    this.playTone(587.33, 0.25, "sine");

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();

      if (this.timeRemaining <= 10 && this.timeRemaining > 0) {
        this.playTickSound();
      }

      if (this.timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.finishSprint();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById('sprintTimerDisplay');
    const barEl = document.getElementById('sprintTimerBar');
    if (timerEl) {
      timerEl.textContent = `${this.timeRemaining}s`;
    }
    if (barEl) {
      const pct = (this.timeRemaining / this.timeLimit) * 100;
      barEl.style.width = `${pct}%`;
      if (this.timeRemaining <= 10) barEl.style.backgroundColor = '#ef4444';
      else if (this.timeRemaining <= 25) barEl.style.backgroundColor = '#f59e0b';
      else barEl.style.backgroundColor = '#10b981';
    }
  }

  updateStatsBar() {
    const scoreEl = document.getElementById('sprintScoreVal');
    const streakEl = document.getElementById('sprintStreakVal');
    const countEl = document.getElementById('sprintCountVal');

    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `${this.streak} 🔥`;
    if (countEl) countEl.textContent = `${this.correctCount}/${this.totalAnswered}`;
  }

  showQuestion() {
    if (this.currentIndex >= this.deck.length) {
      this.prepareDeck(); // recycle deck
    }

    const currentQ = this.deck[this.currentIndex];
    const catBadge = document.getElementById('sprintCategoryBadge');
    const sentenceEl = document.getElementById('sprintSentenceText');
    const optionsContainer = document.getElementById('sprintOptionsGrid');

    if (catBadge) catBadge.textContent = currentQ.category;
    if (sentenceEl) {
      // Highlight the blank ____
      const formattedSentence = currentQ.sentence.replace("_____", "<span class='verb-blank'>______</span>");
      sentenceEl.innerHTML = formattedSentence;
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = currentQ.options.map((opt, i) => `
        <button class="verb-option-btn" data-index="${i}">
          <span class="verb-opt-bullet">${['A', 'B', 'C', 'D'][i]}</span>
          <span class="verb-opt-text">${opt}</span>
        </button>
      `).join('');

      optionsContainer.querySelectorAll('.verb-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(btn.dataset.index, 10);
          this.handleAnswer(idx, btn);
        });
      });
    }
  }

  handleAnswer(chosenIndex, btnElement) {
    if (!this.isPlaying) return;

    const currentQ = this.deck[this.currentIndex];
    const isCorrect = chosenIndex === currentQ.correct;
    this.totalAnswered++;

    const allButtons = document.querySelectorAll('.verb-option-btn');
    allButtons.forEach(b => b.disabled = true);

    if (isCorrect) {
      this.correctCount++;
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;

      // Score points: base 50 + streak bonus (up to 30)
      const points = 50 + Math.min(30, this.streak * 5);
      this.score += points;

      btnElement.classList.add('correct');
      this.playSuccessSound();
      this.showFloatingIndicator(`+${points} ⭐`, '#10b981');
    } else {
      this.streak = 0;
      btnElement.classList.add('incorrect');
      allButtons[currentQ.correct].classList.add('correct');
      this.playWrongSound();
      this.showFloatingIndicator('¡Ups!', '#ef4444');
    }

    this.history.push({
      question: currentQ.sentence,
      userAnswer: currentQ.options[chosenIndex],
      correctAnswer: currentQ.options[currentQ.correct],
      explanation: currentQ.explanation,
      isCorrect
    });

    this.updateStatsBar();

    // Fast progression after 400ms
    setTimeout(() => {
      this.currentIndex++;
      if (this.isPlaying) {
        this.showQuestion();
      }
    }, 450);
  }

  showFloatingIndicator(text, color) {
    const container = document.getElementById('sprintGameCard');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'verb-floating-toast';
    toast.style.color = color;
    toast.textContent = text;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 700);
  }

  finishSprint() {
    this.isPlaying = false;
    this.isFinished = true;
    clearInterval(this.timerInterval);

    this.playVictoryFanfare();
    this.showResultsModal();
  }

  showResultsModal() {
    const existing = document.getElementById('verbResultsModal');
    if (existing) existing.remove();

    const accuracy = this.totalAnswered > 0 ? Math.round((this.correctCount / this.totalAnswered) * 100) : 0;
    
    // Title & Medals
    let title = "¡Gran Esfuerzo!";
    let medal = "🥉";
    let message = "Sigue practicando para aumentar tu racha de verbos.";
    if (this.score >= 500) {
      title = "¡Maestro de Verbos Cambridge!";
      medal = "👑";
      message = "¡Increíble reflejo y dominio perfecto de los tiempos verbales!";
    } else if (this.score >= 300) {
      title = "¡Súper Atleta de Verbos!";
      medal = "🥇";
      message = "¡Fantástica velocidad y precisión gramatical en 60 segundos!";
    } else if (this.score >= 150) {
      title = "¡Muy Buen Trabajo!";
      medal = "🥈";
      message = "Has acertado la mayoría de los verbos con muy buena energía.";
    }

    const modal = document.createElement('div');
    modal.id = 'verbResultsModal';
    modal.className = 'verb-modal-overlay';
    modal.innerHTML = `
      <div class="verb-modal-dialog">
        <header class="verb-modal-header">
          <div style="font-size: 3rem;">${medal}</div>
          <h2 style="margin: 0; font-family: var(--font-display); font-size: 1.6rem; color: #065f46;">
            ${title}
          </h2>
          <p style="margin: 4px 0 0; color: #047857; font-weight: 600;">
            ${message}
          </p>
        </header>

        <div class="verb-modal-body">
          <!-- Big Score Box -->
          <div class="verb-summary-box">
            <div class="verb-stat-tile">
              <span class="verb-tile-num">${this.score}</span>
              <span class="verb-tile-lbl">⭐ Puntos Totales</span>
            </div>
            <div class="verb-stat-tile">
              <span class="verb-tile-num">${this.correctCount} / ${this.totalAnswered}</span>
              <span class="verb-tile-lbl">🎯 Aciertos</span>
            </div>
            <div class="verb-stat-tile">
              <span class="verb-tile-num">${this.bestStreak} 🔥</span>
              <span class="verb-tile-lbl">Mejor Racha</span>
            </div>
            <div class="verb-stat-tile">
              <span class="verb-tile-num">${accuracy}%</span>
              <span class="verb-tile-lbl">Precisión</span>
            </div>
          </div>

          <!-- Mistakes review -->
          ${this.history.some(h => !h.isCorrect) ? `
            <div style="margin-top: 1.25rem;">
              <h4 style="margin: 0 0 8px; font-size: 1rem; color: #065f46;">💡 Repaso de Verbos para Aprender:</h4>
              <div class="verb-review-list">
                ${this.history.filter(h => !h.isCorrect).slice(0, 4).map(h => `
                  <div class="verb-review-item">
                    <strong>${h.question.replace('_____', `[${h.correctAnswer}]`)}</strong>
                    <div style="font-size: 0.85rem; color: #047857; margin-top: 2px;">
                      ✓ Correcto: <b>${h.correctAnswer}</b> • Tu respuesta: <s>${h.userAnswer}</s>
                    </div>
                    <div style="font-size: 0.8rem; color: #4b5563; margin-top: 2px;">
                      ${h.explanation}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : `
            <div style="text-align: center; margin-top: 1rem; color: #059669; font-weight: 700;">
              🎉 ¡Felicidades! Tuviste cero errores en todas tus respuestas.
            </div>
          `}
        </div>

        <footer class="verb-modal-footer">
          <button id="btnExitToKids" class="verb-btn-secondary">
            Volver a Kids
          </button>
          <button id="btnPlayAgainSprint" class="verb-btn-primary">
            ⚡ Jugar Otra Ronda (60s)
          </button>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('btnExitToKids').addEventListener('click', () => {
      window.location.href = 'kids.html';
    });

    document.getElementById('btnPlayAgainSprint').addEventListener('click', () => {
      modal.remove();
      this.startSprint();
    });
  }
}
