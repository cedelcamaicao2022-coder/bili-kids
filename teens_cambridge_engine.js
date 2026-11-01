/**
 * Bilikids Teens Cambridge B2 First (FCE) Engine
 * Official Cambridge B2 Use of English Training:
 * Part 1: Multiple-Choice Cloze
 * Part 2: Open Cloze (Fill-in)
 * Part 3: Word Formation (Prefixes/Suffixes)
 * Part 4: Key Word Transformation (2-5 words)
 */

const CAMBRIDGE_B2_ACTIVITIES = {
  part1: {
    title: "Part 1: Multiple-Choice Cloze",
    badge: "Lexical & Collocations",
    desc: "Read the text and decide which answer (A, B, C or D) best fits each gap. This tests collocations, idioms, and phrasal verbs.",
    exercises: [
      {
        id: "p1_ex1",
        title: "The Mystery of Bird Migration",
        text: "Every autumn, millions of birds undertake perilous journeys across continents. Scientists have long wondered how these creatures manage to navigate with such incredible (1) _____. Recent research suggests birds possess an internal magnetic compass that allows them to (2) _____ their heading even in cloudy weather. Moreover, older birds appear to rely on learned landmarks, (3) _____ younger individuals depend largely on instinct. Understanding these migration patterns continues to shed light on how species adapt to environmental (4) _____.",
        gaps: [
          {
            number: 1,
            options: ["precision", "accuracy", "strictly", "measure"],
            correct: 0,
            explanation: "'Incredible precision' is the natural collocation referring to navigating an exact course."
          },
          {
            number: 2,
            options: ["hold", "maintain", "possess", "stand"],
            correct: 1,
            explanation: "To 'maintain a heading' is the standard nautical and aeronautical collocation for staying on course."
          },
          {
            number: 3,
            options: ["whereas", "despite", "otherwise", "in spite"],
            correct: 0,
            explanation: "'Whereas' introduces a contrast between older birds and younger individuals."
          },
          {
            number: 4,
            options: ["transformations", "shifts", "shifts", "alterations"],
            correct: 1,
            explanation: "'Environmental shifts' is the recognized ecological term for major habitat changes."
          }
        ]
      },
      {
        id: "p1_ex2",
        title: "The Psychology of Urban Green Spaces",
        text: "Urban planners are increasingly (1) _____ the profound impact of parks and public gardens on mental health. Living close to nature has been shown to (2) _____ stress levels and boost cognitive focus. Experts emphasize that even brief walks among trees can make a significant (3) _____ to emotional resilience. As cities expand, preserving natural sanctuaries has become a vital (4) _____ for architects worldwide.",
        gaps: [
          {
            number: 1,
            options: ["acknowledging", "admitting", "agreeing", "confessing"],
            correct: 0,
            explanation: "To 'acknowledge' an impact means to recognize its factual existence and importance."
          },
          {
            number: 2,
            options: ["diminish", "shorten", "lower", "curb"],
            correct: 2,
            explanation: "We 'lower stress levels' or 'reduce stress'. 'Lower' is the most idiomatic option here."
          },
          {
            number: 3,
            options: ["difference", "contrast", "diversity", "alteration"],
            correct: 0,
            explanation: "Collocation: 'make a significant difference to' something."
          },
          {
            number: 4,
            options: ["priority", "supremacy", "preference", "precedence"],
            correct: 0,
            explanation: "'Vital priority' is the standard fixed expression in policy and design."
          }
        ]
      }
    ]
  },
  part2: {
    title: "Part 2: Open Cloze",
    badge: "Grammar & Structure",
    desc: "Fill in each gap with ONE appropriate grammatical word (preposition, pronoun, auxiliary, connector). No options are given.",
    exercises: [
      {
        id: "p2_ex1",
        title: "Why Do We Dream?",
        text: "Dreams have fascinated humanity since ancient times. (1) _____ fact, modern neuroscientists still debate their exact biological purpose. Some theories suggest that dreaming helps the brain consolidate memories and process emotions experienced (2) _____ the day. (3) _____ it were not for REM sleep, our cognitive problem-solving abilities would deteriorate significantly. Whatever their evolutionary reason, dreams remain one (4) _____ the most intriguing aspects of human consciousness.",
        gaps: [
          { number: 1, correct: ["In", "in"], hint: "Fixed prepositional phrase: '__ fact'", explanation: "'In fact' is a fixed discourse marker used to introduce elaboration." },
          { number: 2, correct: ["during", "throughout"], hint: "Preposition meaning across a time period", explanation: "'During the day' or 'throughout the day' fits grammatically." },
          { number: 3, correct: ["If", "if"], hint: "Conditional structure: '__ it were not for'", explanation: "Second conditional inversion/structure: 'If it were not for...'" },
          { number: 4, correct: ["of"], hint: "Preposition denoting membership in a group: 'one __ the most'", explanation: "Superlative partitive: 'one of the most intriguing'." }
        ]
      },
      {
        id: "p2_ex2",
        title: "The Invention of the Internet",
        text: "The internet has revolutionized modern society in ways (1) _____ pioneers could never have anticipated. Originally designed as an academic network, it has evolved (2) _____ an indispensable global utility. Without (3) _____ access to information, modern science and commerce would come to a complete halt. It is virtually impossible to imagine living in a world (4) _____ digital connectivity.",
        gaps: [
          { number: 1, correct: ["that", "which"], hint: "Relative pronoun referring to 'ways'", explanation: "'Ways that' or 'ways which' introduces the defining relative clause." },
          { number: 2, correct: ["into"], hint: "Preposition following 'evolve'", explanation: "Verb collocation: 'evolve into something'." },
          { number: 3, correct: ["such", "instant", "this"], hint: "Determiner/adjective meaning of this kind", explanation: "'Without such access' or 'without this access'." },
          { number: 4, correct: ["without", "lacking"], hint: "Preposition meaning in the absence of", explanation: "'Living in a world without digital connectivity'." }
        ]
      }
    ]
  },
  part3: {
    title: "Part 3: Word Formation",
    badge: "Affixes & Morphology",
    desc: "Transform the root word in capital letters using prefixes or suffixes so that it fits grammatically into the text.",
    exercises: [
      {
        id: "p3_ex1",
        title: "Renewable Energy Innovations",
        text: "The global transition towards clean energy has accelerated (1) _____ [DRAMA] over the past decade. Engineers have developed solar panels of unprecedented (2) _____ [EFFICIENT], allowing homes to generate electricity even in cloudy conditions. (3) _____ [FORTUNE], the initial cost of installing wind turbines has dropped steadily, making sustainable power increasingly (4) _____ [ACCESS] to developing communities.",
        gaps: [
          { number: 1, root: "DRAMA", correct: ["dramatically"], hint: "Adverb describing how it has accelerated", explanation: "DRAMA -> dramatic (adj) -> dramatically (adv)." },
          { number: 2, root: "EFFICIENT", correct: ["efficiency"], hint: "Noun following 'unprecedented'", explanation: "EFFICIENT (adj) -> efficiency (noun)." },
          { number: 3, root: "FORTUNE", correct: ["Fortunately", "fortunately"], hint: "Positive sentence adverb at the start", explanation: "FORTUNE -> fortunate -> fortunately (sentence adverb)." },
          { number: 4, root: "ACCESS", correct: ["accessible"], hint: "Adjective meaning reachable or available", explanation: "ACCESS (noun/verb) -> accessible (adjective +ible)." }
        ]
      },
      {
        id: "p3_ex2",
        title: "The Art of Creative Writing",
        text: "Writing a compelling novel requires not only vivid (1) _____ [IMAGINE] but also relentless self-discipline. Aspiring authors must learn to accept constructive criticism without feeling (2) _____ [COURAGE]. With persistent dedication and (3) _____ [PATIENT], even complex narratives can reach a state of literary (4) _____ [PERFECT].",
        gaps: [
          { number: 1, root: "IMAGINE", correct: ["imagination"], hint: "Noun following adjective 'vivid'", explanation: "IMAGINE (verb) -> imagination (noun +ation)." },
          { number: 2, root: "COURAGE", correct: ["discouraged"], hint: "Adjective with negative prefix: dis-", explanation: "COURAGE -> encourage -> discouraged (feeling disheartened)." },
          { number: 3, root: "PATIENT", correct: ["patience"], hint: "Abstract noun paired with 'dedication'", explanation: "PATIENT (adj) -> patience (noun)." },
          { number: 4, root: "PERFECT", correct: ["perfection"], hint: "Noun following 'literary'", explanation: "PERFECT (adj) -> perfection (noun +ion)." }
        ]
      }
    ]
  },
  part4: {
    title: "Part 4: Key Word Transformations",
    badge: "Syntax & Paraphrasing",
    desc: "Complete the second sentence so that it has a similar meaning to the first sentence, using the given KEY WORD. You must use between TWO and FIVE words, including the word given.",
    exercises: [
      {
        id: "p4_ex1",
        firstSentence: "I haven't visited London for more than three years.",
        keyWord: "LAST",
        secondPrefix: "It has been three years ",
        secondSuffix: " London.",
        correctAnswers: [
          "since I last visited",
          "since i last visited"
        ],
        explanation: "Time structure: 'It has been [time] since I last visited...'"
      },
      {
        id: "p4_ex2",
        firstSentence: "It was too cold for us to swim in the mountain lake.",
        keyWord: "ENOUGH",
        secondPrefix: "The mountain lake was ",
        secondSuffix: " for us to swim in.",
        correctAnswers: [
          "not warm enough",
          "not warm enough"
        ],
        explanation: "'Too cold' transforms to 'not warm enough'."
      },
      {
        id: "p4_ex3",
        firstSentence: "'You should definitely apologize to your teacher,' Liam told me.",
        keyWord: "ADVISED",
        secondPrefix: "Liam ",
        secondSuffix: " apologize to my teacher.",
        correctAnswers: [
          "advised me to",
          "advised me to"
        ],
        explanation: "Reporting verb: 'advise + object + to-infinitive': advised me to."
      },
      {
        id: "p4_ex4",
        firstSentence: "They are renovating the modern art gallery this month.",
        keyWord: "BEING",
        secondPrefix: "The modern art gallery ",
        secondSuffix: " this month.",
        correctAnswers: [
          "is being renovated",
          "is being renovated"
        ],
        explanation: "Present continuous passive: is + being + past participle (renovated)."
      }
    ]
  }
};

class TeensCambridgeEngine {
  constructor() {
    this.data = CAMBRIDGE_B2_ACTIVITIES;
    this.currentPart = 'part1';
    this.currentExerciseIndex = 0;
    this.userAnswers = {};
    this.feedbackGiven = false;
    this.score = 0;
    this.totalQuestions = 0;
    this.audioCtx = null;
    this.soundEnabled = true;
  }

  init() {
    this.setupAudio();
    this.setupNavigation();
    this.loadPart('part1');
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

  playSuccess() {
    [523.25, 659.25, 783.99].forEach((f, i) => setTimeout(() => this.playTone(f, 0.15, 'triangle'), i * 80));
  }

  playError() {
    this.playTone(220, 0.2, 'sawtooth');
  }

  setupNavigation() {
    const partButtons = document.querySelectorAll('.cambridge-part-btn');
    partButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        partButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.loadPart(btn.dataset.part);
      });
    });
  }

  loadPart(partKey) {
    this.currentPart = partKey;
    this.currentExerciseIndex = 0;
    this.userAnswers = {};
    this.feedbackGiven = false;

    const partData = this.data[partKey];
    document.getElementById('partTitle').textContent = partData.title;
    document.getElementById('partBadge').textContent = partData.badge;
    document.getElementById('partDescription').textContent = partData.desc;

    this.renderExerciseSelector();
    this.renderExercise();
  }

  renderExerciseSelector() {
    const container = document.getElementById('exerciseSelectorPills');
    if (!container) return;
    const partData = this.data[this.currentPart];

    if (this.currentPart === 'part4') {
      container.innerHTML = `<span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">4 Desafíos de Transformación de Oraciones</span>`;
      return;
    }

    container.innerHTML = partData.exercises.map((ex, i) => `
      <button class="ex-pill-btn ${i === this.currentExerciseIndex ? 'active' : ''}" data-index="${i}">
        Texto ${i + 1}: ${ex.title}
      </button>
    `).join('');

    container.querySelectorAll('.ex-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentExerciseIndex = parseInt(btn.dataset.index, 10);
        this.userAnswers = {};
        this.feedbackGiven = false;
        this.renderExerciseSelector();
        this.renderExercise();
      });
    });
  }

  renderExercise() {
    const container = document.getElementById('cambridgeExerciseBody');
    if (!container) return;

    if (this.currentPart === 'part1') {
      this.renderPart1(container);
    } else if (this.currentPart === 'part2') {
      this.renderPart2(container);
    } else if (this.currentPart === 'part3') {
      this.renderPart3(container);
    } else if (this.currentPart === 'part4') {
      this.renderPart4(container);
    }
  }

  // PART 1: Multiple-Choice Cloze
  renderPart1(container) {
    const ex = this.data.part1.exercises[this.currentExerciseIndex];
    let passageHtml = ex.text;

    // Replace (1) _____ with interactive dropdown or token
    ex.gaps.forEach(g => {
      const selectHtml = `
        <select class="cambridge-gap-select" data-gap="${g.number}" id="gap-select-${g.number}">
          <option value="">(${g.number}) ---</option>
          ${g.options.map((opt, optIdx) => `
            <option value="${optIdx}">${opt}</option>
          `).join('')}
        </select>
      `;
      passageHtml = passageHtml.replace(`(${g.number}) _____`, selectHtml);
    });

    container.innerHTML = `
      <div class="cambridge-exercise-card">
        <h3 class="exercise-headline">${ex.title}</h3>
        <div class="cambridge-text-passage">
          ${passageHtml}
        </div>

        <div class="cambridge-action-strip">
          <button id="btnCheckPart1" class="cambridge-cta-btn">
            ✓ Comprobar Respuestas
          </button>
          <div id="part1FeedbackBox" class="cambridge-feedback-msg" style="display:none;"></div>
        </div>

        <div id="part1Explanations" class="cambridge-explanations-list" style="display:none;"></div>
      </div>
    `;

    // Listeners for select
    container.querySelectorAll('.cambridge-gap-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        this.userAnswers[e.target.dataset.gap] = parseInt(e.target.value, 10);
      });
    });

    document.getElementById('btnCheckPart1').addEventListener('click', () => {
      this.checkPart1(ex);
    });
  }

  checkPart1(ex) {
    let correct = 0;
    const explanationsEl = document.getElementById('part1Explanations');
    const feedbackBox = document.getElementById('part1FeedbackBox');

    let explanationsHtml = "<h4>💡 Retroalimentación Detallada:</h4>";

    ex.gaps.forEach(g => {
      const selectEl = document.getElementById(`gap-select-${g.number}`);
      const userVal = this.userAnswers[g.number];
      const isRight = userVal === g.correct;

      if (isRight) {
        correct++;
        selectEl.classList.add('correct');
        selectEl.classList.remove('incorrect');
      } else {
        selectEl.classList.add('incorrect');
        selectEl.classList.remove('correct');
      }

      explanationsHtml += `
        <div class="expl-item ${isRight ? 'good' : 'bad'}">
          <b>Gap (${g.number}):</b> Respuesta correcta: <u>${g.options[g.correct]}</u>.
          <p style="margin:2px 0 0; color:#475569;">${g.explanation}</p>
        </div>
      `;
    });

    if (correct === ex.gaps.length) {
      this.playSuccess();
    } else {
      this.playError();
    }

    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = `Puntuación: <b>${correct} / ${ex.gaps.length}</b> aciertos. (${Math.round((correct/ex.gaps.length)*100)}%)`;
    explanationsEl.style.display = 'flex';
    explanationsEl.innerHTML = explanationsHtml;
  }

  // PART 2: Open Cloze
  renderPart2(container) {
    const ex = this.data.part2.exercises[this.currentExerciseIndex];
    let passageHtml = ex.text;

    ex.gaps.forEach(g => {
      const inputHtml = `
        <input type="text" class="cambridge-gap-input" data-gap="${g.number}" id="gap-input-${g.number}" placeholder="(${g.number})" autocomplete="off" spellcheck="false" />
      `;
      passageHtml = passageHtml.replace(`(${g.number}) _____`, inputHtml);
    });

    container.innerHTML = `
      <div class="cambridge-exercise-card">
        <h3 class="exercise-headline">${ex.title}</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: -6px;">
          Escribe exactamente <b>UNA</b> palabra gramatical en cada espacio vacío.
        </p>
        <div class="cambridge-text-passage">
          ${passageHtml}
        </div>

        <div class="cambridge-action-strip">
          <button id="btnCheckPart2" class="cambridge-cta-btn">
            ✓ Comprobar Respuestas
          </button>
          <div id="part2FeedbackBox" class="cambridge-feedback-msg" style="display:none;"></div>
        </div>

        <div id="part2Explanations" class="cambridge-explanations-list" style="display:none;"></div>
      </div>
    `;

    document.getElementById('btnCheckPart2').addEventListener('click', () => {
      this.checkPart2(ex);
    });
  }

  checkPart2(ex) {
    let correct = 0;
    const explanationsEl = document.getElementById('part2Explanations');
    const feedbackBox = document.getElementById('part2FeedbackBox');
    let explanationsHtml = "<h4>💡 Soluciones y Reglas Gramaticales:</h4>";

    ex.gaps.forEach(g => {
      const inputEl = document.getElementById(`gap-input-${g.number}`);
      const val = (inputEl.value || "").trim().toLowerCase();
      const isRight = g.correct.map(c => c.toLowerCase()).includes(val);

      if (isRight) {
        correct++;
        inputEl.classList.add('correct');
        inputEl.classList.remove('incorrect');
      } else {
        inputEl.classList.add('incorrect');
        inputEl.classList.remove('correct');
      }

      explanationsHtml += `
        <div class="expl-item ${isRight ? 'good' : 'bad'}">
          <b>Gap (${g.number}):</b> Aceptado: <u>${g.correct.join(' / ')}</u> ${val ? `(Tu respuesta: <i>${val}</i>)` : '(Sin responder)'}
          <p style="margin:2px 0 0; color:#475569;">${g.explanation}</p>
        </div>
      `;
    });

    if (correct === ex.gaps.length) this.playSuccess();
    else this.playError();

    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = `Resultado: <b>${correct} / ${ex.gaps.length}</b> correctas.`;
    explanationsEl.style.display = 'flex';
    explanationsEl.innerHTML = explanationsHtml;
  }

  // PART 3: Word Formation
  renderPart3(container) {
    const ex = this.data.part3.exercises[this.currentExerciseIndex];
    let passageHtml = ex.text;

    ex.gaps.forEach(g => {
      const fieldHtml = `
        <span class="wf-inline-group">
          <input type="text" class="cambridge-gap-input wf" data-gap="${g.number}" id="wf-input-${g.number}" placeholder="(${g.number})" autocomplete="off" />
          <span class="wf-root-tag">${g.root}</span>
        </span>
      `;
      passageHtml = passageHtml.replace(`(${g.number}) _____ [${g.root}]`, fieldHtml);
    });

    container.innerHTML = `
      <div class="cambridge-exercise-card">
        <h3 class="exercise-headline">${ex.title}</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: -6px;">
          Transforma la palabra base en mayúscula entre corchetes agregando prefijos y/o sufijos para completar el espacio.
        </p>
        <div class="cambridge-text-passage">
          ${passageHtml}
        </div>

        <div class="cambridge-action-strip">
          <button id="btnCheckPart3" class="cambridge-cta-btn">
            ✓ Comprobar Formaciones
          </button>
          <div id="part3FeedbackBox" class="cambridge-feedback-msg" style="display:none;"></div>
        </div>

        <div id="part3Explanations" class="cambridge-explanations-list" style="display:none;"></div>
      </div>
    `;

    document.getElementById('btnCheckPart3').addEventListener('click', () => {
      this.checkPart3(ex);
    });
  }

  checkPart3(ex) {
    let correct = 0;
    const explanationsEl = document.getElementById('part3Explanations');
    const feedbackBox = document.getElementById('part3FeedbackBox');
    let explanationsHtml = "<h4>💡 Reglas de Formación Léxica:</h4>";

    ex.gaps.forEach(g => {
      const inputEl = document.getElementById(`wf-input-${g.number}`);
      const val = (inputEl.value || "").trim().toLowerCase();
      const isRight = g.correct.map(c => c.toLowerCase()).includes(val);

      if (isRight) {
        correct++;
        inputEl.classList.add('correct');
        inputEl.classList.remove('incorrect');
      } else {
        inputEl.classList.add('incorrect');
        inputEl.classList.remove('correct');
      }

      explanationsHtml += `
        <div class="expl-item ${isRight ? 'good' : 'bad'}">
          <b>[${g.root}] -> Gap (${g.number}):</b> Forma correcta: <u>${g.correct[0]}</u>.
          <p style="margin:2px 0 0; color:#475569;">${g.explanation}</p>
        </div>
      `;
    });

    if (correct === ex.gaps.length) this.playSuccess();
    else this.playError();

    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = `Resultado: <b>${correct} / ${ex.gaps.length}</b> formaciones correctas.`;
    explanationsEl.style.display = 'flex';
    explanationsEl.innerHTML = explanationsHtml;
  }

  // PART 4: Key Word Transformations
  renderPart4(container) {
    const list = this.data.part4.exercises;

    const cardsHtml = list.map((item, idx) => `
      <div class="kwt-box" id="kwt-box-${idx}">
        <div class="kwt-header">
          <span class="kwt-num">Pregunta ${idx + 1}</span>
          <span class="kwt-keyword">${item.keyWord}</span>
        </div>
        <p class="kwt-first-sentence">${item.firstSentence}</p>
        <div class="kwt-second-row">
          <span>${item.secondPrefix}</span>
          <input type="text" class="kwt-input" id="kwt-input-${idx}" placeholder="2 a 5 palabras incluyendo ${item.keyWord}..." autocomplete="off" />
          <span>${item.secondSuffix}</span>
        </div>
        <div id="kwt-expl-${idx}" class="kwt-expl" style="display:none;"></div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="cambridge-exercise-card">
        <h3 class="exercise-headline">Key Word Transformations (Part 4)</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: -6px;">
          Reescribe la segunda oración para que tenga el <b>mismo significado</b> que la primera, usando la palabra clave dada.
          Usa entre <b>2 y 5 palabras</b>. No cambies la palabra clave dada.
        </p>

        <div class="kwt-list-container">
          ${cardsHtml}
        </div>

        <div class="cambridge-action-strip" style="margin-top: 1.5rem;">
          <button id="btnCheckPart4" class="cambridge-cta-btn">
            ✓ Comprobar Todas las Transformaciones
          </button>
          <div id="part4FeedbackBox" class="cambridge-feedback-msg" style="display:none;"></div>
        </div>
      </div>
    `;

    document.getElementById('btnCheckPart4').addEventListener('click', () => {
      this.checkPart4(list);
    });
  }

  checkPart4(list) {
    let correct = 0;
    const feedbackBox = document.getElementById('part4FeedbackBox');

    list.forEach((item, idx) => {
      const inputEl = document.getElementById(`kwt-input-${idx}`);
      const explEl = document.getElementById(`kwt-expl-${idx}`);
      const val = (inputEl.value || "").trim().toLowerCase().replace(/\s+/g, ' ');

      const isRight = item.correctAnswers.some(ans => ans.toLowerCase() === val);

      if (isRight) {
        correct++;
        inputEl.classList.add('correct');
        inputEl.classList.remove('incorrect');
      } else {
        inputEl.classList.add('incorrect');
        inputEl.classList.remove('correct');
      }

      explEl.style.display = 'block';
      explEl.innerHTML = `
        <div class="expl-item ${isRight ? 'good' : 'bad'}">
          <b>Respuesta oficial:</b> <u>${item.correctAnswers[0]}</u>
          <p style="margin:2px 0 0; color:#475569;">${item.explanation}</p>
        </div>
      `;
    });

    if (correct === list.length) this.playSuccess();
    else this.playError();

    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = `Puntuación: <b>${correct} / ${list.length}</b> transformaciones correctas.`;
  }
}
