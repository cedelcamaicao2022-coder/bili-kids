/**
 * Bilikids Teens Speed Writing Challenge Engine
 * 1-Minute Paragraph Writing Challenge with Real-Time Grammar, Coherence, and Cohesion Evaluator.
 */

const SPEED_WRITING_PROMPTS = [
  {
    id: 1,
    title: "Artificial Intelligence in Schools",
    category: "Technology & Society",
    prompt: "Should artificial intelligence tools like ChatGPT be integrated into secondary school classrooms, or do they weaken students' critical thinking? Explain your perspective in one clear, cohesive paragraph.",
    starter: "In today's digital era, artificial intelligence...",
    keywords: ["technology", "students", "learning", "critical", "future", "benefit", "challenge"]
  },
  {
    id: 2,
    title: "Climate Change & Youth Action",
    category: "Global Challenges",
    prompt: "Do individual lifestyle choices truly make a difference in tackling global warming, or should governments take all responsibility? Defend your view in a structured paragraph.",
    starter: "When addressing climate change, both individual actions and...",
    keywords: ["environment", "responsibility", "sustainable", "governments", "impact", "planet"]
  },
  {
    id: 3,
    title: "Social Media: Connection or Isolation?",
    category: "Social Psychology",
    prompt: "Does social media bring teenagers closer together, or does it heighten loneliness and superficial comparison? Write a balanced or persuasive paragraph.",
    starter: "Although social media platforms allow adolescents to connect instantly,...",
    keywords: ["communication", "mental health", "relationships", "isolation", "society", "comparison"]
  },
  {
    id: 4,
    title: "Space Exploration: Worth the Investment?",
    category: "Science & Exploration",
    prompt: "Billions of dollars are invested in missions to the Moon and Mars. Is space exploration justified when urgent problems persist on Earth? Argue your stance in one cohesive paragraph.",
    starter: "While space exploration opens groundbreaking frontiers for science,...",
    keywords: ["investment", "science", "discovery", "resources", "future", "humanity", "priorities"]
  },
  {
    id: 5,
    title: "The Power of Failure in Learning",
    category: "Personal Growth",
    prompt: "Many successful leaders describe failure as their greatest teacher. How can learning from mistakes foster resilience and genuine mastery? Synthesize your thought in one paragraph.",
    starter: "Failure is frequently perceived as an obstacle; nevertheless,...",
    keywords: ["resilience", "growth", "mistakes", "learning", "success", "experience", "mindset"]
  },
  {
    id: 6,
    title: "Remote Work vs. Traditional Classrooms",
    category: "Education & Lifestyle",
    prompt: "Has digital remote learning made education more adaptable, or has it damaged collaborative teamwork and motivation? Formulate your analysis in a focused paragraph.",
    starter: "The shift towards virtual education has transformed how students...",
    keywords: ["flexibility", "collaboration", "discipline", "interaction", "advantage", "skills"]
  }
];

class TeensSpeedEngine {
  constructor() {
    this.prompts = SPEED_WRITING_PROMPTS;
    this.currentPromptIndex = 0;
    this.timeLimit = 60; // 60 seconds
    this.timeRemaining = 60;
    this.timerInterval = null;
    this.hasStarted = false;
    this.isFinished = false;
    this.soundEnabled = true;
    this.audioCtx = null;
    this.startTime = null;
    this.endTime = null;
  }

  init() {
    this.setupAudio();
    this.loadPrompt(0);
    this.setupListeners();
    this.renderPromptSelector();
  }

  setupAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    } catch (e) {
      console.warn("Web Audio not supported", e);
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
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playCountdownTick() {
    this.playTone(880, 0.08, 'triangle');
  }

  playFinishFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.25, 'triangle'), i * 140);
    });
  }

  renderPromptSelector() {
    const container = document.getElementById('promptPillsList');
    if (!container) return;
    container.innerHTML = this.prompts.map((p, i) => `
      <button class="prompt-pill-btn ${i === this.currentPromptIndex ? 'active' : ''}" data-index="${i}">
        #${p.id} ${p.title}
      </button>
    `).join('');

    container.querySelectorAll('.prompt-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (this.hasStarted && !this.isFinished) {
          if (!confirm("¿Deseas cambiar de tema? Se reiniciará el reto actual.")) return;
        }
        this.loadPrompt(idx);
      });
    });
  }

  loadPrompt(index) {
    this.resetChallenge();
    this.currentPromptIndex = index;
    const p = this.prompts[index];

    document.getElementById('promptTitle').textContent = p.title;
    document.getElementById('promptCategoryBadge').textContent = p.category;
    document.getElementById('promptInstructions').textContent = p.prompt;

    const textarea = document.getElementById('studentTextInput');
    textarea.value = "";
    textarea.placeholder = `Escribe aquí tu párrafo en inglés en 60 segundos... Tip: Inicia con "${p.starter}"`;
    textarea.disabled = true;

    document.getElementById('startChallengeBtn').style.display = 'inline-flex';
    document.getElementById('submitChallengeBtn').style.display = 'none';

    this.updateLiveStats("");
    this.renderPromptSelector();
  }

  setupListeners() {
    const textarea = document.getElementById('studentTextInput');
    const startBtn = document.getElementById('startChallengeBtn');
    const submitBtn = document.getElementById('submitChallengeBtn');
    const resetBtn = document.getElementById('resetChallengeBtn');
    const soundToggle = document.getElementById('soundToggleBtn');

    textarea.addEventListener('input', (e) => {
      this.updateLiveStats(e.target.value);
    });

    startBtn.addEventListener('click', () => this.startChallenge());
    submitBtn.addEventListener('click', () => this.finishChallenge(false));
    resetBtn.addEventListener('click', () => this.resetChallenge());

    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        soundToggle.textContent = this.soundEnabled ? '🔊 Sonido' : '🔇 Silencio';
      });
    }
  }

  startChallenge() {
    const textarea = document.getElementById('studentTextInput');
    textarea.disabled = false;
    textarea.focus();

    this.hasStarted = true;
    this.isFinished = false;
    this.timeRemaining = this.timeLimit;
    this.startTime = Date.now();

    document.getElementById('startChallengeBtn').style.display = 'none';
    document.getElementById('submitChallengeBtn').style.display = 'inline-flex';

    this.playTone(440, 0.2, 'sine');
    this.renderTimer();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.renderTimer();

      if (this.timeRemaining <= 10 && this.timeRemaining > 0) {
        this.playCountdownTick();
      }

      if (this.timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.finishChallenge(true); // timed out
      }
    }, 1000);
  }

  renderTimer() {
    const clockEl = document.getElementById('timerSecondsDisplay');
    const progressRing = document.getElementById('timerProgressBar');
    if (clockEl) {
      clockEl.textContent = `${this.timeRemaining}s`;
    }

    if (progressRing) {
      const percentage = (this.timeRemaining / this.timeLimit) * 100;
      progressRing.style.width = `${percentage}%`;

      if (this.timeRemaining <= 10) {
        progressRing.style.backgroundColor = '#ef4444';
      } else if (this.timeRemaining <= 25) {
        progressRing.style.backgroundColor = '#f59e0b';
      } else {
        progressRing.style.backgroundColor = '#6366f1';
      }
    }
  }

  updateLiveStats(text) {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;

    const elapsedSeconds = this.hasStarted ? Math.max(1, Math.round((Date.now() - (this.startTime || Date.now())) / 1000)) : 1;
    const wpm = Math.round((words / elapsedSeconds) * 60);

    const wordCountEl = document.getElementById('statWordCount');
    const charCountEl = document.getElementById('statCharCount');
    const wpmEl = document.getElementById('statWpm');

    if (wordCountEl) wordCountEl.textContent = words;
    if (charCountEl) charCountEl.textContent = chars;
    if (wpmEl) wpmEl.textContent = isFinite(wpm) ? wpm : 0;
  }

  resetChallenge() {
    clearInterval(this.timerInterval);
    this.hasStarted = false;
    this.isFinished = false;
    this.timeRemaining = this.timeLimit;
    this.startTime = null;
    this.endTime = null;

    const textarea = document.getElementById('studentTextInput');
    textarea.value = "";
    textarea.disabled = true;

    document.getElementById('startChallengeBtn').style.display = 'inline-flex';
    document.getElementById('submitChallengeBtn').style.display = 'none';

    this.renderTimer();
    this.updateLiveStats("");

    const resultsCard = document.getElementById('evaluationResultsCard');
    if (resultsCard) resultsCard.style.display = 'none';
  }

  finishChallenge(isTimeout = false) {
    if (this.isFinished) return;
    this.isFinished = true;
    clearInterval(this.timerInterval);
    this.endTime = Date.now();

    const textarea = document.getElementById('studentTextInput');
    textarea.disabled = true;

    this.playFinishFanfare();

    const text = textarea.value.trim();
    const elapsedSeconds = Math.min(60, Math.round((this.endTime - (this.startTime || this.endTime)) / 1000));
    
    // Evaluate paragraph
    const evaluation = this.evaluateParagraph(text, elapsedSeconds, isTimeout);
    this.displayEvaluationModal(evaluation);
  }

  evaluateParagraph(text, elapsedSeconds, isTimeout) {
    const prompt = this.prompts[this.currentPromptIndex];
    const words = text ? text.split(/\s+/).filter(w => w.length > 0) : [];
    const wordCount = words.length;
    const sentences = text ? text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0) : [];
    const sentenceCount = sentences.length;

    // Connectors / Cohesion markers (Cambridge B2 indicators)
    const connectors = [
      "however", "therefore", "furthermore", "in addition", "moreover", "consequently",
      "although", "even though", "despite", "in contrast", "on the other hand",
      "nevertheless", "firstly", "secondly", "finally", "as a result", "for instance",
      "for example", "in conclusion", "to sum up", "whereas", "while"
    ];
    const lowerText = text.toLowerCase();
    const detectedConnectors = connectors.filter(c => lowerText.includes(c));

    // B2 / Academic Lexicon
    const b2VocabList = [
      "crucial", "essential", "perspective", "implement", "consequence", "beneficial",
      "significant", "demonstrate", "fundamental", "sustainable", "challenging",
      "integrate", "substantially", "adversely", "enhance", "foster", "diminish",
      "facilitate", "comprehensive", "innovative", "phenomenon", "contemporary"
    ];
    const detectedB2Vocab = b2VocabList.filter(v => lowerText.includes(v));

    // Topic keywords detected
    const detectedKeywords = prompt.keywords.filter(k => lowerText.includes(k));

    // Structural Checks
    const startsWithCapital = /^[A-Z]/.test(text);
    const endsWithPeriod = /[.!?]$/.test(text);
    const hasMultipleSentences = sentenceCount >= 2;

    // Grammatical Coherence & Structure Score (0 - 30)
    let grammarScore = 0;
    if (wordCount >= 25) grammarScore += 10;
    else if (wordCount >= 15) grammarScore += 6;
    else grammarScore += 3;

    if (startsWithCapital) grammarScore += 5;
    if (endsWithPeriod) grammarScore += 5;
    if (hasMultipleSentences) grammarScore += 10;
    else if (wordCount > 10) grammarScore += 5;

    // Discourse Cohesion & Connectors Score (0 - 30)
    let cohesionScore = 0;
    if (detectedConnectors.length >= 2) cohesionScore = 30;
    else if (detectedConnectors.length === 1) cohesionScore = 20;
    else cohesionScore = 10;

    // Vocabulary & Thematic Sense Score (0 - 40)
    let vocabSenseScore = 0;
    if (detectedKeywords.length >= 2) vocabSenseScore += 15;
    else if (detectedKeywords.length === 1) vocabSenseScore += 10;
    else vocabSenseScore += 5;

    if (detectedB2Vocab.length >= 2) vocabSenseScore += 15;
    else if (detectedB2Vocab.length === 1) vocabSenseScore += 10;
    else vocabSenseScore += 5;

    // Speed efficiency bonus
    const wpm = Math.round((wordCount / (elapsedSeconds / 60)));
    let speedBonus = 0;
    if (wpm >= 35) speedBonus = 10;
    else if (wpm >= 20) speedBonus = 6;
    else speedBonus = 3;

    let totalScore = Math.min(100, grammarScore + cohesionScore + vocabSenseScore + (speedBonus - 5));
    if (wordCount < 10) totalScore = Math.min(totalScore, 35);

    // CEFR Assessment Level
    let cefrLevel = "A2 Basic";
    let badgeColor = "#f59e0b";
    let levelLabel = "Developing";
    if (totalScore >= 85) {
      cefrLevel = "B2 First (Vantage)";
      badgeColor = "#10b981";
      levelLabel = "Fluidez Sobresaliente";
    } else if (totalScore >= 70) {
      cefrLevel = "B1+ Independent";
      badgeColor = "#6366f1";
      levelLabel = "Buen Control Discursivo";
    } else if (totalScore >= 50) {
      cefrLevel = "B1 Threshold";
      badgeColor = "#3b82f6";
      levelLabel = "Comprensible con Áreas de Mejora";
    }

    // Detailed pedagogical feedback
    const feedbackPillars = [];

    // Cohesion feedback
    if (detectedConnectors.length > 0) {
      feedbackPillars.push({
        status: "good",
        title: "Conectores Lógicos Identificados",
        desc: `Empleaste de forma efectiva: ${detectedConnectors.map(c => `"${c}"`).join(', ')}. Esto le da estructura discursiva a tu párrafo.`
      });
    } else {
      feedbackPillars.push({
        status: "improve",
        title: "Incorpora Conectores Discursivos",
        desc: "Para alcanzar nivel B2, enlaza tus oraciones con conectores como: 'However', 'Furthermore', 'Consequently' o 'On the other hand'."
      });
    }

    // Grammar & mechanics
    if (startsWithCapital && endsWithPeriod && hasMultipleSentences) {
      feedbackPillars.push({
        status: "good",
        title: "Puntuación y Mecánica Textual",
        desc: "Excelente uso de mayúscula inicial, división de oraciones y puntuación final."
      });
    } else {
      feedbackPillars.push({
        status: "improve",
        title: "Estructura Oracional",
        desc: "Recuerda que un párrafo académico debe iniciar con mayúscula, contener al menos 2 a 3 oraciones completas y finalizar con punto."
      });
    }

    // Vocabulary feedback
    if (detectedB2Vocab.length > 0 || detectedKeywords.length >= 2) {
      feedbackPillars.push({
        status: "good",
        title: "Léxico Temático y B2",
        desc: `Buen repertorio de vocabulario pertinente al tema (${[...detectedKeywords, ...detectedB2Vocab].slice(0, 4).join(', ')}).`
      });
    } else {
      feedbackPillars.push({
        status: "improve",
        title: "Riqueza Léxica Recomendada",
        desc: `Intenta incluir términos más académicos como: ${prompt.keywords.slice(0, 3).join(', ')}.`
      });
    }

    return {
      wordCount,
      sentenceCount,
      elapsedSeconds,
      wpm,
      isTimeout,
      grammarScore,
      cohesionScore,
      vocabSenseScore,
      totalScore,
      cefrLevel,
      badgeColor,
      levelLabel,
      feedbackPillars,
      detectedConnectors,
      studentText: text
    };
  }

  displayEvaluationModal(result) {
    const existing = document.getElementById('speedWritingModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'speedWritingModal';
    modal.className = 'speed-modal-overlay';

    modal.innerHTML = `
      <div class="speed-modal-dialog">
        <header class="speed-modal-header">
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:2rem;">📝</span>
            <div>
              <h2 style="margin:0; font-family:var(--font-display); font-size:1.45rem; color:#1e1b4b;">
                Evaluación de Escritura Rápida (1 Minuto)
              </h2>
              <p style="margin:2px 0 0; font-size:0.85rem; color:#64748b;">
                Tiempo: ${result.elapsedSeconds}s • Velocidad: ${result.wpm} PPM • ${result.wordCount} Palabras
              </p>
            </div>
          </div>
          <button id="closeSpeedModal" class="speed-close-btn">✕</button>
        </header>

        <div class="speed-modal-body">
          <!-- Score Banner -->
          <div class="speed-score-card" style="border-left: 6px solid ${result.badgeColor};">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <span class="speed-cefr-badge" style="background:${result.badgeColor}; color:#ffffff;">
                  Nivel Estimado: ${result.cefrLevel}
                </span>
                <h3 style="margin:8px 0 4px; font-size:1.35rem; color:#0f172a;">${result.levelLabel}</h3>
                <p style="margin:0; font-size:0.85rem; color:#475569;">
                  ${result.isTimeout ? '⏰ Se agotó el minuto de escritura.' : '⚡ Completaste el reto antes de que expirara el tiempo.'}
                </p>
              </div>
              <div class="speed-score-circle">
                <span class="speed-score-number">${result.totalScore}</span>
                <span class="speed-score-denom">/ 100 pts</span>
              </div>
            </div>
          </div>

          <!-- Score Breakdown Columns -->
          <div class="speed-metrics-row">
            <div class="speed-metric-box">
              <span class="metric-title">Coherencia & Gramática</span>
              <span class="metric-val">${result.grammarScore} / 30</span>
              <div class="metric-bar"><div style="width:${(result.grammarScore/30)*100}%; background:#6366f1;"></div></div>
            </div>
            <div class="speed-metric-box">
              <span class="metric-title">Cohesión Discursiva</span>
              <span class="metric-val">${result.cohesionScore} / 30</span>
              <div class="metric-bar"><div style="width:${(result.cohesionScore/30)*100}%; background:#10b981;"></div></div>
            </div>
            <div class="speed-metric-box">
              <span class="metric-title">Léxico & Sentido B2</span>
              <span class="metric-val">${result.vocabSenseScore} / 40</span>
              <div class="metric-bar"><div style="width:${(result.vocabSenseScore/40)*100}%; background:#f59e0b;"></div></div>
            </div>
          </div>

          <!-- Written Paragraph Review -->
          <div class="speed-original-text-box">
            <strong style="display:block; font-size:0.85rem; color:#475569; margin-bottom:6px; text-transform:uppercase; letter-spacing:0.04em;">
              Tu Párrafo Escrito:
            </strong>
            <p style="margin:0; font-style:italic; color:#1e293b; line-height:1.6; font-size:0.95rem;">
              "${result.studentText || '(No ingresaste texto a tiempo)'}"
            </p>
          </div>

          <!-- Pedagogical Feedback List -->
          <div class="speed-feedback-section">
            <h4 style="margin:1rem 0 0.5rem; font-size:1.05rem; color:#1e1b4b; display:flex; align-items:center; gap:8px;">
              <span>🎯</span> Retroalimentación Pedagógica
            </h4>
            <div class="feedback-items-container">
              ${result.feedbackPillars.map(item => `
                <div class="feedback-pill-card ${item.status}">
                  <span class="feedback-icon">${item.status === 'good' ? '✅' : '💡'}</span>
                  <div>
                    <strong>${item.title}</strong>
                    <p style="margin:3px 0 0; font-size:0.85rem; color:#475569;">${item.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <footer class="speed-modal-footer">
          <button id="btnTryAnotherPrompt" class="speed-btn-secondary">
            ↻ Probar Otro Tema
          </button>
          <button id="btnRetryCurrentPrompt" class="speed-btn-primary">
            ⚡ Reintentar Este Tema
          </button>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('closeSpeedModal').addEventListener('click', () => modal.remove());
    document.getElementById('btnRetryCurrentPrompt').addEventListener('click', () => {
      modal.remove();
      this.resetChallenge();
      this.startChallenge();
    });
    document.getElementById('btnTryAnotherPrompt').addEventListener('click', () => {
      modal.remove();
      const nextIdx = (this.currentPromptIndex + 1) % this.prompts.length;
      this.loadPrompt(nextIdx);
    });
  }
}
