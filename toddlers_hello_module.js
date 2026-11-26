/**
 * Bilikids Toddlers Academy - Unit 2 Activity 1: "Hello, It's Me!"
 * Modular, self-contained interactive engine.
 * 6 Pedagogical Screens:
 * 1. WELCOME (Speech bubbles hero, START button, welcome audio)
 * 2. LISTEN (8 Core Expressions cards with individual repeatable audio)
 * 3. LEARN (Matching questions to answers, drag&drop + tap-to-match, immediate feedback)
 * 4. CHOOSE (6 Audio questions, 3 options, retry on error, no penalties)
 * 5. COMPLETE (Step-by-step interactive builder of personal presentation)
 * 6. MY INTRODUCTION (Full presentation card, audio playback, congratulations & rewards)
 */

(function () {
  'use strict';

  // 8 Core Expressions
  const EXPRESSIONS = [
    {
      id: 'hello',
      en: 'Hello!',
      es: '¡Hola!',
      icon: '👋',
      svg: `<svg viewBox="0 0 100 100" class="hello-svg-art"><circle cx="50" cy="50" r="44" fill="#dbeafe"/><text x="50" y="62" font-size="44" text-anchor="middle">👋</text></svg>`,
      audio: 'Hello!'
    },
    {
      id: 'hi',
      en: 'Hi!',
      es: '¡Hola! (Informal)',
      icon: '💬',
      svg: `<svg viewBox="0 0 100 100" class="hello-svg-art"><circle cx="50" cy="50" r="44" fill="#fef3c7"/><text x="50" y="62" font-size="44" text-anchor="middle">💬</text></svg>`,
      audio: 'Hi!'
    },
    {
      id: 'whats_your_name',
      en: "What's your name?",
      es: '¿Cómo te llamas?',
      icon: '❓',
      svg: `<svg viewBox="0 0 100 100" class="hello-svg-art"><circle cx="50" cy="50" r="44" fill="#e0e7ff"/><text x="50" y="62" font-size="44" text-anchor="middle">❓👦</text></svg>`,
      audio: "What's your name?"
    },
    {
      id: 'my_name_is',
      en: 'My name is...',
      es: 'Mi nombre es...',
      icon: '🪪',
      svg: `<svg viewBox="0 0 100 100" class="hello-svg-art"><circle cx="50" cy="50" r="44" fill="#fce7f3"/><text x="50" y="62" font-size="44" text-anchor="middle">🪪✨</text></svg>`,
      audio: 'My name is...'
    },
    {
      id: 'how_are_you',
      en: 'How are you?',
      es: '¿Cómo estás?',
      icon: '🤝',
      svg: `<svg viewBox="0 0 100 100" class="hello-svg-art"><circle cx="50" cy="50" r="44" fill="#ccfbf1"/><text x="50" y="62" font-size="44" text-anchor="middle">🤝🗣️</text></svg>`,
      audio: 'How are you?'
    },
    {
      id: 'im_happy',
      en: "I'm happy.",
      es: 'Estoy feliz.',
      icon: '😄',
      svg: `<svg viewBox="0 0 100 100" class="hello-svg-art"><circle cx="50" cy="50" r="44" fill="#fef08a"/><text x="50" y="62" font-size="44" text-anchor="middle">😄🌟</text></svg>`,
      audio: "I'm happy."
    },
    {
      id: 'im_fine',
      en: "I'm fine.",
      es: 'Estoy bien.',
      icon: '👍',
      svg: `<svg viewBox="0 0 100 100" class="hello-svg-art"><circle cx="50" cy="50" r="44" fill="#dcfce7"/><text x="50" y="62" font-size="44" text-anchor="middle">👍😊</text></svg>`,
      audio: "I'm fine."
    },
    {
      id: 'im_sad',
      en: "I'm sad.",
      es: 'Estoy triste.',
      icon: '😢',
      svg: `<svg viewBox="0 0 100 100" class="hello-svg-art"><circle cx="50" cy="50" r="44" fill="#e0f2fe"/><text x="50" y="62" font-size="44" text-anchor="middle">😢🌧️</text></svg>`,
      audio: "I'm sad."
    }
  ];

  // Screen 3: Learn Matching Pairs
  const MATCH_PAIRS = [
    {
      id: 'pair_name',
      question: "What's your name?",
      qAudio: "What's your name?",
      qIcon: '❓👦',
      answer: "My name is...",
      aAudio: "My name is...",
      aIcon: '🪪✨',
      category: 'Identity'
    },
    {
      id: 'pair_greet',
      question: 'Hello!',
      qAudio: 'Hello!',
      qIcon: '👋',
      answer: 'Hi!',
      aAudio: 'Hi!',
      aIcon: '💬',
      category: 'Greetings'
    },
    {
      id: 'pair_happy',
      question: 'How are you?',
      qAudio: 'How are you?',
      qIcon: '🤝',
      answer: "I'm happy.",
      aAudio: "I'm happy.",
      aIcon: '😄🌟',
      category: 'Feelings'
    },
    {
      id: 'pair_fine',
      question: 'Are you okay?',
      qAudio: 'How are you?',
      qIcon: '❓😊',
      answer: "I'm fine.",
      aAudio: "I'm fine.",
      aIcon: '👍✨',
      category: 'Feelings'
    }
  ];

  // Screen 4: Choose Questions
  const CHOOSE_QUESTIONS = [
    {
      id: 'q1',
      question: 'How do we say hello to a friend?',
      audioPrompt: 'How do we say hello to a friend?',
      subPrompt: '¿Cómo le decimos "hola" a un amigo?',
      options: [
        { text: 'Hello!', icon: '👋', correct: true },
        { text: "I'm sad.", icon: '😢', correct: false },
        { text: 'Goodbye.', icon: '🚪', correct: false }
      ]
    },
    {
      id: 'q2',
      question: "Someone asks: What's your name? What do you say?",
      audioPrompt: "What's your name?",
      subPrompt: 'Alguien pregunta "¿Cómo te llamas?", tú respondes:',
      options: [
        { text: 'Hi!', icon: '💬', correct: false },
        { text: 'My name is Leo.', icon: '🦁', correct: true },
        { text: "I'm fine.", icon: '👍', correct: false }
      ]
    },
    {
      id: 'q3',
      question: "Someone asks: How are you? If you are feeling great, you say:",
      audioPrompt: 'How are you?',
      subPrompt: '¿Cómo estás? Si te sientes feliz y genial, respondes:',
      options: [
        { text: "I'm happy.", icon: '😄', correct: true },
        { text: "What's your name?", icon: '❓', correct: false },
        { text: 'Hello!', icon: '👋', correct: false }
      ]
    },
    {
      id: 'q4',
      question: 'Another short way to say Hello is:',
      audioPrompt: 'Another short way to say hello is:',
      subPrompt: 'Otra forma corta y amigable de decir "hola" es:',
      options: [
        { text: "I'm sad.", icon: '😢', correct: false },
        { text: 'Hi!', icon: '✨', correct: true },
        { text: 'My name is...', icon: '🪪', correct: false }
      ]
    },
    {
      id: 'q5',
      question: "If a friend asks 'How are you?' and you feel okay, you say:",
      audioPrompt: 'If a friend asks how are you, and you feel okay, you say:',
      subPrompt: 'Si te sientes bien y tranquilo, respondes:',
      options: [
        { text: "I'm fine.", icon: '👍', correct: true },
        { text: 'Hi!', icon: '💬', correct: false },
        { text: 'Blue.', icon: '🎨', correct: false }
      ]
    },
    {
      id: 'q6',
      question: 'If you are not feeling happy today, you say:',
      audioPrompt: 'If you are not feeling happy today, you say:',
      subPrompt: 'Si hoy no te sientes contento o estás triste, dices:',
      options: [
        { text: "I'm happy.", icon: '😄', correct: false },
        { text: "What's your name?", icon: '❓', correct: false },
        { text: "I'm sad.", icon: '😢', correct: true }
      ]
    }
  ];

  // Screen 5 & 6 Presets
  const BUILDER_PRESETS = {
    greetings: [
      { id: 'hello', text: 'Hello!', icon: '👋' },
      { id: 'hi', text: 'Hi!', icon: '💬' }
    ],
    names: [
      { id: 'leo', text: 'Leo', avatar: '🦁', color: '#f59e0b' },
      { id: 'luna', text: 'Luna', avatar: '👧', color: '#ec4899' },
      { id: 'bili', text: 'Bili', avatar: '🐻', color: '#3b82f6' },
      { id: 'matias', text: 'Matías', avatar: '👦', color: '#10b981' }
    ],
    feelings: [
      { id: 'happy', text: "I'm happy.", icon: '😄', color: '#f59e0b' },
      { id: 'fine', text: "I'm fine.", icon: '👍', color: '#10b981' },
      { id: 'sad', text: "I'm sad.", icon: '😢', color: '#0ea5e9' }
    ]
  };

  class ToddlersHelloModule {
    constructor() {
      this.currentScreen = 1; // 1 to 6
      this.engine = null;

      // Screen 2 State
      this.listenedSet = new Set();

      // Screen 3 State (Matching)
      this.selectedQuestion = null;
      this.matchedPairs = new Set();

      // Screen 4 State (Choose)
      this.chooseIndex = 0;
      this.chooseAttempts = {};
      this.chooseCompleted = false;

      // Screen 5 & 6 State (Builder)
      this.builderState = {
        greeting: 'Hello!',
        name: 'Leo',
        avatar: '🦁',
        feeling: "I'm happy."
      };
    }

    render(container, engine) {
      this.engine = engine;
      this.container = container;

      // Ensure clean styles
      this.injectStyles();

      // Render step navigator & screen content
      let html = `
        <div class="hello-module-wrap">
          <!-- TOP STEP PROGRESS BAR -->
          <div class="hello-stepper-bar">
            <div class="hello-step-pill ${this.currentScreen === 1 ? 'active' : (this.currentScreen > 1 ? 'done' : '')}" onclick="window.toddlersHelloModule.goToScreen(1)">
              <span class="step-num">1</span> <span class="step-lbl">Welcome</span>
            </div>
            <div class="hello-step-pill ${this.currentScreen === 2 ? 'active' : (this.currentScreen > 2 ? 'done' : '')}" onclick="window.toddlersHelloModule.goToScreen(2)">
              <span class="step-num">2</span> <span class="step-lbl">Listen</span>
            </div>
            <div class="hello-step-pill ${this.currentScreen === 3 ? 'active' : (this.currentScreen > 3 ? 'done' : '')}" onclick="window.toddlersHelloModule.goToScreen(3)">
              <span class="step-num">3</span> <span class="step-lbl">Learn</span>
            </div>
            <div class="hello-step-pill ${this.currentScreen === 4 ? 'active' : (this.currentScreen > 4 ? 'done' : '')}" onclick="window.toddlersHelloModule.goToScreen(4)">
              <span class="step-num">4</span> <span class="step-lbl">Choose</span>
            </div>
            <div class="hello-step-pill ${this.currentScreen === 5 ? 'active' : (this.currentScreen > 5 ? 'done' : '')}" onclick="window.toddlersHelloModule.goToScreen(5)">
              <span class="step-num">5</span> <span class="step-lbl">Complete</span>
            </div>
            <div class="hello-step-pill ${this.currentScreen === 6 ? 'active' : ''}" onclick="window.toddlersHelloModule.goToScreen(6)">
              <span class="step-num">6</span> <span class="step-lbl">My Intro</span>
            </div>
          </div>

          <!-- SCREEN CONTAINER -->
          <div class="hello-screen-body" id="helloScreenBody">
            <!-- Dynamic Content -->
          </div>
        </div>
      `;

      container.innerHTML = html;
      this.renderScreen();
    }

    goToScreen(screenNum) {
      this.currentScreen = Math.max(1, Math.min(6, screenNum));
      this.render(this.container, this.engine);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }

    play(text) {
      if (this.engine && typeof this.engine.playAudio === 'function') {
        this.engine.playAudio(text);
      }
    }

    /* ==========================================================================
       SCREEN DISPATCHER
       ========================================================================== */
    renderScreen() {
      const body = document.getElementById('helloScreenBody');
      if (!body) return;

      switch (this.currentScreen) {
        case 1:
          this.renderScreen1Welcome(body);
          break;
        case 2:
          this.renderScreen2Listen(body);
          break;
        case 3:
          this.renderScreen3Learn(body);
          break;
        case 4:
          this.renderScreen4Choose(body);
          break;
        case 5:
          this.renderScreen5Complete(body);
          break;
        case 6:
          this.renderScreen6Introduction(body);
          break;
        default:
          this.renderScreen1Welcome(body);
      }
    }

    /* ==========================================================================
       PANTALLA 1: WELCOME
       • Título: Hello, It's Me!
       • Ilustración decorativa de burbujas de conversación
       • Botón START
       • Audio de bienvenida: "Hello! Let's learn how to introduce ourselves!"
       ========================================================================== */
    renderScreen1Welcome(body) {
      const welcomeAudioText = "Hello! Let's learn how to introduce ourselves!";

      body.innerHTML = `
        <div class="hello-welcome-card">
          <!-- Animated Floating Speech Bubbles -->
          <div class="hello-hero-bubbles">
            <div class="bubble bubble-1 float-slow">
              <span class="bubble-icon">👋</span>
              <span class="bubble-text">Hello!</span>
            </div>
            <div class="bubble bubble-2 float-mid">
              <span class="bubble-icon">💬</span>
              <span class="bubble-text">Hi!</span>
            </div>
            <div class="bubble bubble-3 float-fast">
              <span class="bubble-icon">❓</span>
              <span class="bubble-text">What's your name?</span>
            </div>
            <div class="bubble bubble-4 float-mid">
              <span class="bubble-icon">😄</span>
              <span class="bubble-text">I'm happy!</span>
            </div>
          </div>

          <div class="hello-welcome-badge">UNIT 2 • ACTIVITY 1</div>
          <h1 class="hello-welcome-title">Hello, It's Me!</h1>
          <p class="hello-welcome-sub">
            Aprende a saludar, decir tu nombre y expresar cómo te sientes con expresiones sencillas en inglés.
          </p>

          <!-- Audio Welcome Button -->
          <div class="hello-audio-welcome-wrap">
            <button class="hello-hear-btn" onclick="window.toddlersHelloModule.play('${welcomeAudioText}')">
              <span class="hear-icon">🔊</span>
              <span>Listen Welcome: <em>"${welcomeAudioText}"</em></span>
            </button>
          </div>

          <!-- START ACTION -->
          <div class="hello-start-btn-wrap">
            <button class="hello-btn-start pulse-btn" onclick="window.toddlersHelloModule.startActivity()">
              <span>START ACTIVITY</span>
              <span class="arrow-icon">➔</span>
            </button>
          </div>
        </div>
      `;

      // Auto play welcome audio softly on first arrival
      setTimeout(() => {
        this.play(welcomeAudioText);
      }, 350);
    }

    startActivity() {
      if (this.engine) this.engine.playTapChime();
      this.goToScreen(2);
    }

    /* ==========================================================================
       PANTALLA 2: LISTEN
       • Presentar las ocho expresiones
       • Una expresión por tarjeta
       • Incorporar audio individual
       • Permitir repetir cada audio
       • Mostrar el texto en inglés
       • Incorporar ilustraciones relacionadas
       ========================================================================== */
    renderScreen2Listen(body) {
      let cardsHtml = '';
      EXPRESSIONS.forEach(exp => {
        const isListened = this.listenedSet.has(exp.id);
        cardsHtml += `
          <div class="hello-exp-card ${isListened ? 'listened' : ''}" id="card_${exp.id}" onclick="window.toddlersHelloModule.listenExpression('${exp.id}')">
            <div class="exp-card-badge">${isListened ? '✅ Heard' : '🔊 Tap to Hear'}</div>
            <div class="exp-card-visual">${exp.svg}</div>
            <div class="exp-card-en">${exp.en}</div>
            <div class="exp-card-es">${exp.es}</div>
            <button class="exp-repeat-btn" onclick="event.stopPropagation(); window.toddlersHelloModule.listenExpression('${exp.id}')">
              <span>🔊 Repeat</span>
            </button>
          </div>
        `;
      });

      body.innerHTML = `
        <div class="hello-listen-view">
          <div class="hello-section-header">
            <span class="section-badge">PANTALLA 2 • LISTEN</span>
            <h2 class="section-title">Listen & Repeat • Las 8 Expresiones</h2>
            <p class="section-desc">Toca cada tarjeta para escuchar su pronunciación en inglés y repite en voz alta con Leo:</p>
          </div>

          <div class="hello-exp-grid">
            ${cardsHtml}
          </div>

          <div class="hello-nav-footer">
            <div class="listen-counter-pill">
              <span>Practicadas: <strong>${this.listenedSet.size}</strong> de ${EXPRESSIONS.length}</span>
            </div>
            <button class="hello-primary-btn" onclick="window.toddlersHelloModule.goToScreen(3)">
              <span>Siguiente: Learn (Relacionar) ➔</span>
            </button>
          </div>
        </div>
      `;
    }

    listenExpression(expId) {
      const exp = EXPRESSIONS.find(e => e.id === expId);
      if (!exp) return;

      this.listenedSet.add(expId);
      this.play(exp.audio);

      const card = document.getElementById(`card_${expId}`);
      if (card) {
        card.classList.add('playing');
        card.classList.add('listened');
        const badge = card.querySelector('.exp-card-badge');
        if (badge) badge.innerText = '✅ Heard';
        setTimeout(() => card.classList.remove('playing'), 800);
      }

      // Update counter
      const footerCounter = document.querySelector('.listen-counter-pill span');
      if (footerCounter) {
        footerCounter.innerHTML = `Practicadas: <strong>${this.listenedSet.size}</strong> de ${EXPRESSIONS.length}`;
      }
    }

    /* ==========================================================================
       PANTALLA 3: LEARN (Match Questions with Answers)
       • Actividad para relacionar preguntas con respuestas
       • Utilizar tarjetas interactivas
       • Permitir arrastrar y soltar o seleccionar ambas tarjetas
       • Mostrar retroalimentación inmediata
       ========================================================================== */
    renderScreen3Learn(body) {
      const isComplete = this.matchedPairs.size === MATCH_PAIRS.length;

      // Render Left Column (Questions) and Right Column (Answers shuffled or arranged)
      // To keep it friendly for toddlers, let's arrange right column in an alternate order
      const rightPairs = [...MATCH_PAIRS].sort((a, b) => b.answer.localeCompare(a.answer));

      let leftHtml = '';
      MATCH_PAIRS.forEach(p => {
        const isMatched = this.matchedPairs.has(p.id);
        const isSelected = this.selectedQuestion === p.id;
        leftHtml += `
          <div class="match-card match-q ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" 
               id="q_${p.id}"
               draggable="${!isMatched}"
               data-pair-id="${p.id}"
               onclick="window.toddlersHelloModule.handleQuestionClick('${p.id}')">
            <div class="match-icon">${p.qIcon}</div>
            <div class="match-text">
              <span class="match-en">${p.question}</span>
              <span class="match-sub">${p.category}</span>
            </div>
            <button class="match-audio-mini" onclick="event.stopPropagation(); window.toddlersHelloModule.play('${p.qAudio}')">🔊</button>
          </div>
        `;
      });

      let rightHtml = '';
      rightPairs.forEach(p => {
        const isMatched = this.matchedPairs.has(p.id);
        rightHtml += `
          <div class="match-card match-a ${isMatched ? 'matched' : ''}" 
               id="a_${p.id}"
               data-pair-id="${p.id}"
               onclick="window.toddlersHelloModule.handleAnswerClick('${p.id}')">
            <div class="match-icon">${p.aIcon}</div>
            <div class="match-text">
              <span class="match-en">${p.answer}</span>
              <span class="match-sub">${isMatched ? '¡Pareja Correcta! ✨' : 'Toca para emparejar'}</span>
            </div>
            <button class="match-audio-mini" onclick="event.stopPropagation(); window.toddlersHelloModule.play('${p.aAudio}')">🔊</button>
          </div>
        `;
      });

      body.innerHTML = `
        <div class="hello-learn-view">
          <div class="hello-section-header">
            <span class="section-badge">PANTALLA 3 • LEARN</span>
            <h2 class="section-title">Relaciona Pregunta y Respuesta</h2>
            <p class="section-desc">
              Selecciona una pregunta de la izquierda y luego toca su respuesta correspondiente a la derecha (¡también puedes arrastrar y soltar!):
            </p>
          </div>

          <div class="matching-arena">
            <div class="match-col">
              <h3 class="col-heading">Pregunta o Saludo ❓</h3>
              <div class="match-cards-col">
                ${leftHtml}
              </div>
            </div>

            <div class="match-divider">
              <div class="divider-icon">⟷</div>
              <div class="match-score-pill">
                ${this.matchedPairs.size} / ${MATCH_PAIRS.length}
              </div>
            </div>

            <div class="match-col">
              <h3 class="col-heading">Respuesta Correcta 💬</h3>
              <div class="match-cards-col">
                ${rightHtml}
              </div>
            </div>
          </div>

          <div id="matchFeedbackBanner" class="match-feedback-banner ${isComplete ? 'show-win' : ''}">
            ${isComplete 
              ? `<span style="font-size:1.4rem;">🎉 ¡Excelente trabajo! Has conectado todas las parejas con éxito.</span>` 
              : `<span>Selecciona una tarjeta para comenzar.</span>`}
          </div>

          <div class="hello-nav-footer">
            <button class="hello-secondary-btn" onclick="window.toddlersHelloModule.goToScreen(2)">
              <span>◀ Volver a Listen</span>
            </button>
            <button class="hello-primary-btn ${isComplete ? 'glow-btn' : ''}" onclick="window.toddlersHelloModule.goToScreen(4)">
              <span>Siguiente: Choose (Preguntas) ➔</span>
            </button>
          </div>
        </div>
      `;

      this.setupDragAndDrop();
    }

    handleQuestionClick(pairId) {
      if (this.matchedPairs.has(pairId)) return;

      const pair = MATCH_PAIRS.find(p => p.id === pairId);
      if (pair) this.play(pair.qAudio);

      if (this.selectedQuestion === pairId) {
        this.selectedQuestion = null;
      } else {
        this.selectedQuestion = pairId;
      }
      this.renderScreen3Learn(document.getElementById('helloScreenBody'));
    }

    handleAnswerClick(pairId) {
      if (this.matchedPairs.has(pairId)) return;

      if (!this.selectedQuestion) {
        // Just play audio of this answer
        const pair = MATCH_PAIRS.find(p => p.id === pairId);
        if (pair) this.play(pair.aAudio);

        const banner = document.getElementById('matchFeedbackBanner');
        if (banner) {
          banner.className = 'match-feedback-banner info';
          banner.innerHTML = `<span>Primero selecciona una tarjeta de la columna izquierda 👈</span>`;
        }
        return;
      }

      // Check if match
      if (this.selectedQuestion === pairId) {
        // MATCH!
        this.matchedPairs.add(pairId);
        const pair = MATCH_PAIRS.find(p => p.id === pairId);
        if (pair) this.play(pair.aAudio);

        if (this.engine) this.engine.addStars(10);

        this.selectedQuestion = null;
        this.renderScreen3Learn(document.getElementById('helloScreenBody'));

        const banner = document.getElementById('matchFeedbackBanner');
        if (banner) {
          banner.className = 'match-feedback-banner success';
          banner.innerHTML = `<span>🌟 ¡Correcto! "${pair.question}" ➔ "${pair.answer}"</span>`;
        }
      } else {
        // MISMATCH
        const cardA = document.getElementById(`a_${pairId}`);
        if (cardA) {
          cardA.classList.add('shake-wrong');
          setTimeout(() => cardA.classList.remove('shake-wrong'), 600);
        }

        const banner = document.getElementById('matchFeedbackBanner');
        if (banner) {
          banner.className = 'match-feedback-banner wrong';
          banner.innerHTML = `<span>Intenta otra respuesta, ¡tú puedes! 😊</span>`;
        }
      }
    }

    setupDragAndDrop() {
      const qCards = document.querySelectorAll('.match-q[draggable="true"]');
      const aCards = document.querySelectorAll('.match-a');

      qCards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', card.dataset.pairId);
          card.classList.add('dragging');
        });
        card.addEventListener('dragend', () => {
          card.classList.remove('dragging');
        });
      });

      aCards.forEach(card => {
        card.addEventListener('dragover', (e) => {
          e.preventDefault();
          card.classList.add('drag-over');
        });
        card.addEventListener('dragleave', () => {
          card.classList.remove('drag-over');
        });
        card.addEventListener('drop', (e) => {
          e.preventDefault();
          card.classList.remove('drag-over');
          const draggedPairId = e.dataTransfer.getData('text/plain');
          const targetPairId = card.dataset.pairId;
          this.selectedQuestion = draggedPairId;
          this.handleAnswerClick(targetPairId);
        });
      });
    }

    /* ==========================================================================
       PANTALLA 4: CHOOSE (6 Questions, 3 Options, 1 Correct)
       • Crear seis preguntas
       • Tres opciones por pregunta
       • Una respuesta correcta
       • Reproducir las preguntas mediante audio
       • Permitir nuevos intentos
       • No penalizar los errores
       ========================================================================== */
    renderScreen4Choose(body) {
      const q = CHOOSE_QUESTIONS[this.chooseIndex] || CHOOSE_QUESTIONS[0];
      const isLast = this.chooseIndex === CHOOSE_QUESTIONS.length - 1;

      let optionsHtml = '';
      q.options.forEach((opt, idx) => {
        optionsHtml += `
          <button class="choose-option-card" id="opt_${this.chooseIndex}_${idx}" onclick="window.toddlersHelloModule.handleChooseOption(${idx})">
            <span class="option-icon">${opt.icon}</span>
            <span class="option-text">${opt.text}</span>
            <span class="option-status-icon"></span>
          </button>
        `;
      });

      body.innerHTML = `
        <div class="hello-choose-view">
          <div class="hello-section-header">
            <span class="section-badge">PANTALLA 4 • CHOOSE</span>
            <div class="choose-progress-dots">
              ${CHOOSE_QUESTIONS.map((_, i) => `
                <span class="dot ${i === this.chooseIndex ? 'active' : (i < this.chooseIndex ? 'done' : '')}"></span>
              `).join('')}
            </div>
            <h2 class="section-title">Pregunta ${this.chooseIndex + 1} de ${CHOOSE_QUESTIONS.length}</h2>
          </div>

          <div class="choose-prompt-card">
            <div class="prompt-speaker-badge">
              <button class="choose-hear-question-btn" onclick="window.toddlersHelloModule.play('${q.audioPrompt}')">
                <span class="pulse-icon">🔊</span>
                <span>Escuchar Pregunta en Inglés</span>
              </button>
            </div>
            <div class="prompt-en">"${q.question}"</div>
            <div class="prompt-es">${q.subPrompt}</div>
          </div>

          <div class="choose-options-grid">
            ${optionsHtml}
          </div>

          <div id="chooseFeedbackBox" class="choose-feedback-box">
            <span>Toca la opción que creas correcta. Si fallas, ¡puedes intentar de nuevo!</span>
          </div>

          <div class="hello-nav-footer">
            <button class="hello-secondary-btn" onclick="window.toddlersHelloModule.prevChooseQuestion()" ${this.chooseIndex === 0 ? 'disabled' : ''}>
              <span>◀ Pregunta Anterior</span>
            </button>
            <button class="hello-primary-btn" id="btnNextChoose" onclick="window.toddlersHelloModule.nextChooseQuestion()" style="display:none;">
              <span>${isLast ? 'Siguiente: Complete ➔' : 'Siguiente Pregunta ➔'}</span>
            </button>
          </div>
        </div>
      `;

      // Auto-play question audio softly
      setTimeout(() => {
        this.play(q.audioPrompt);
      }, 300);
    }

    handleChooseOption(optionIdx) {
      const q = CHOOSE_QUESTIONS[this.chooseIndex];
      const opt = q.options[optionIdx];
      const btn = document.getElementById(`opt_${this.chooseIndex}_${optionIdx}`);
      const feedback = document.getElementById('chooseFeedbackBox');
      const btnNext = document.getElementById('btnNextChoose');

      if (opt.correct) {
        // CORRECT!
        this.play(opt.text);
        if (this.engine) this.engine.addStars(10);

        btn.classList.add('correct');
        const status = btn.querySelector('.option-status-icon');
        if (status) status.innerText = '✅';

        // Disable other options to prevent multi-tapping
        q.options.forEach((_, i) => {
          const b = document.getElementById(`opt_${this.chooseIndex}_${i}`);
          if (b && i !== optionIdx) b.style.opacity = '0.55';
        });

        if (feedback) {
          feedback.className = 'choose-feedback-box success';
          feedback.innerHTML = `<span>🌟 ¡Excelente! "${opt.text}" es la respuesta correcta.</span>`;
        }

        if (btnNext) {
          btnNext.style.display = 'inline-flex';
          btnNext.classList.add('glow-btn');
        }
      } else {
        // WRONG: DO NOT PENALIZE! Just allow retry
        btn.classList.add('wrong');
        const status = btn.querySelector('.option-status-icon');
        if (status) status.innerText = '❌';

        if (feedback) {
          feedback.className = 'choose-feedback-box retry';
          feedback.innerHTML = `<span>Casi, pero esa no es. ¡Intenta con otra opción! 😊</span>`;
        }

        // Allow retry after gentle animation
        setTimeout(() => {
          btn.classList.remove('wrong');
          if (status) status.innerText = '';
        }, 1200);
      }
    }

    nextChooseQuestion() {
      if (this.chooseIndex < CHOOSE_QUESTIONS.length - 1) {
        this.chooseIndex++;
        this.renderScreen4Choose(document.getElementById('helloScreenBody'));
      } else {
        this.goToScreen(5);
      }
    }

    prevChooseQuestion() {
      if (this.chooseIndex > 0) {
        this.chooseIndex--;
        this.renderScreen4Choose(document.getElementById('helloScreenBody'));
      }
    }

    /* ==========================================================================
       PANTALLA 5: COMPLETE
       • El aprendiz construye su presentación
       • Selecciona una opción para completar su nombre de ejemplo
       • Selecciona una expresión emocional
       • Mostrar la presentación construida
       ========================================================================== */
    renderScreen5Complete(body) {
      body.innerHTML = `
        <div class="hello-complete-view">
          <div class="hello-section-header">
            <span class="section-badge">PANTALLA 5 • COMPLETE</span>
            <h2 class="section-title">Construye Tu Presentación</h2>
            <p class="section-desc">Selecciona tu saludo, tu nombre y cómo te sientes para armar tu presentación personal:</p>
          </div>

          <div class="complete-layout">
            <!-- BUILDER CONTROLS -->
            <div class="builder-controls-pane">
              <!-- Step 1: Greeting -->
              <div class="builder-group">
                <div class="group-label">1. Elige tu Saludo:</div>
                <div class="preset-pills-row">
                  ${BUILDER_PRESETS.greetings.map(g => `
                    <button class="preset-pill ${this.builderState.greeting === g.text ? 'active' : ''}" 
                            onclick="window.toddlersHelloModule.setGreeting('${g.text}')">
                      <span>${g.icon}</span> <span>${g.text}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Step 2: Name -->
              <div class="builder-group">
                <div class="group-label">2. Elige tu Nombre (o escribe el tuyo):</div>
                <div class="preset-pills-row">
                  ${BUILDER_PRESETS.names.map(n => `
                    <button class="preset-pill ${this.builderState.name === n.text ? 'active' : ''}" 
                            onclick="window.toddlersHelloModule.setName('${n.text}', '${n.avatar}')">
                      <span>${n.avatar}</span> <span>${n.text}</span>
                    </button>
                  `).join('')}
                </div>
                <div class="custom-name-box">
                  <input type="text" id="customNameInput" placeholder="Escribe tu propio nombre..." value="${this.builderState.name}" oninput="window.toddlersHelloModule.setCustomName(this.value)" class="name-text-input">
                </div>
              </div>

              <!-- Step 3: Feeling -->
              <div class="builder-group">
                <div class="group-label">3. ¿Cómo te sientes hoy?:</div>
                <div class="preset-pills-row">
                  ${BUILDER_PRESETS.feelings.map(f => `
                    <button class="preset-pill ${this.builderState.feeling === f.text ? 'active' : ''}" 
                            onclick="window.toddlersHelloModule.setFeeling('${f.text}')">
                      <span>${f.icon}</span> <span>${f.text}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- LIVE PRESENTATION PREVIEW CARD -->
            <div class="builder-preview-pane">
              <div class="preview-badge">VISTA PREVIA EN TIEMPO REAL</div>
              <div class="intro-preview-card" id="introPreviewCard">
                <div class="preview-avatar">${this.builderState.avatar}</div>
                <div class="preview-speech-bubble">
                  <div class="preview-line-greeting">
                    <span class="tag-greeting">${this.builderState.greeting}</span>
                  </div>
                  <div class="preview-line-name">
                    My name is <strong>${this.builderState.name}</strong>.
                  </div>
                  <div class="preview-line-feeling">
                    ${this.builderState.feeling}
                  </div>
                </div>
                <div class="preview-hear-trigger">
                  <button class="btn-hear-preview" onclick="window.toddlersHelloModule.playIntroAudio()">
                    <span>🔊 Escuchar Presentación</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="hello-nav-footer">
            <button class="hello-secondary-btn" onclick="window.toddlersHelloModule.goToScreen(4)">
              <span>◀ Volver a Choose</span>
            </button>
            <button class="hello-primary-btn glow-btn" onclick="window.toddlersHelloModule.goToScreen(6)">
              <span>¡Listo! Ver Mi Presentación Final ➔</span>
            </button>
          </div>
        </div>
      `;
    }

    setGreeting(greeting) {
      this.builderState.greeting = greeting;
      this.play(greeting);
      this.renderScreen5Complete(document.getElementById('helloScreenBody'));
    }

    setName(name, avatar) {
      this.builderState.name = name;
      this.builderState.avatar = avatar;
      this.play(name);
      this.renderScreen5Complete(document.getElementById('helloScreenBody'));
    }

    setCustomName(name) {
      if (!name || name.trim() === '') return;
      this.builderState.name = name.trim();
      const el = document.querySelector('.preview-line-name strong');
      if (el) el.innerText = this.builderState.name;
    }

    setFeeling(feeling) {
      this.builderState.feeling = feeling;
      this.play(feeling);
      this.renderScreen5Complete(document.getElementById('helloScreenBody'));
    }

    getIntroFullText() {
      return `${this.builderState.greeting} My name is ${this.builderState.name}. ${this.builderState.feeling}`;
    }

    playIntroAudio() {
      // Check if we have pre-rendered combo in manifest
      const g = (this.builderState.greeting || '').toLowerCase().includes('hi') ? 'hi' : 'hello';
      const n = (this.builderState.name || '').toLowerCase().replace(/[^a-z]/g, '');
      const f = (this.builderState.feeling || '').toLowerCase().includes('fine') ? 'fine' : ((this.builderState.feeling || '').toLowerCase().includes('sad') ? 'sad' : 'happy');

      const manifestKey = `assets/toddlers_media/audio/bili_toddler_u2_intro_${g}_${n}_${f}.mp3`;
      const fullText = this.getIntroFullText();

      // Check if file exists in manifest
      const manifest = window.ToddlersAudioManifest || {};
      let audioPath = null;
      for (const [k, v] of Object.entries(manifest)) {
        if (v === manifestKey || k === fullText.toLowerCase()) {
          audioPath = v;
          break;
        }
      }

      if (audioPath) {
        const audio = new Audio(audioPath);
        audio.play().catch(() => this.play(fullText));
      } else {
        this.play(fullText);
      }
    }

    /* ==========================================================================
       PANTALLA 6: MY INTRODUCTION
       • Mostrar la presentación completa
       • Reproducirla mediante audio en inglés
       • Permitir repetir
       • Mostrar mensaje de felicitación al finalizar
       ========================================================================== */
    renderScreen6Introduction(body) {
      const fullIntroText = this.getIntroFullText();

      body.innerHTML = `
        <div class="hello-intro-final-view">
          <!-- CONGRATS RIBBON -->
          <div class="congrats-ribbon-bar">
            <span class="ribbon-star">🌟</span>
            <span>¡FELICITACIONES! HAS COMPLETADO LA ACTIVIDAD 1</span>
            <span class="ribbon-star">🌟</span>
          </div>

          <div class="final-passport-card">
            <div class="passport-header">
              <span class="passport-flag">🇺🇸🇬🇧</span>
              <span class="passport-title">MY ENGLISH PASSPORT • UNIT 2</span>
              <span class="passport-stars">⭐⭐⭐⭐⭐</span>
            </div>

            <div class="passport-body">
              <div class="passport-avatar-zone">
                <div class="passport-avatar">${this.builderState.avatar}</div>
                <div class="passport-name-tag">${this.builderState.name}</div>
              </div>

              <div class="passport-dialogue-zone">
                <div class="passport-speech-balloon">
                  <div class="dialogue-line greeting-line">${this.builderState.greeting} 👋</div>
                  <div class="dialogue-line name-line">My name is <strong>${this.builderState.name}</strong>. 🪪</div>
                  <div class="dialogue-line feeling-line">${this.builderState.feeling} ✨</div>
                </div>
              </div>
            </div>

            <!-- AUDIO PLAYBACK CONTROLS -->
            <div class="passport-audio-actions">
              <button class="btn-primary-audio-play" onclick="window.toddlersHelloModule.playIntroAudio()">
                <span class="btn-icon">🔊</span>
                <span>Listen to My Introduction</span>
              </button>
              <button class="btn-repeat-audio-play" onclick="window.toddlersHelloModule.playIntroAudio()">
                <span class="btn-icon">🔁</span>
                <span>Repeat</span>
              </button>
            </div>
          </div>

          <!-- SUCCESS CELEBRATION BOX -->
          <div class="congrats-summary-box">
            <div class="congrats-trophy">🏆🎉</div>
            <div class="congrats-heading">¡You can now introduce yourself in English!</div>
            <p class="congrats-p">
              Has aprendido a saludar (<strong>Hello / Hi</strong>), preguntar y responder tu nombre (<strong>What's your name? / My name is...</strong>) 
              y expresar tus emociones (<strong>I'm happy / I'm fine / I'm sad</strong>).
            </p>
          </div>

          <div class="hello-nav-footer">
            <button class="hello-secondary-btn" onclick="window.toddlersHelloModule.goToScreen(1)">
              <span>🔄 Practicar de Nuevo</span>
            </button>
            <button class="hello-primary-btn glow-btn" onclick="toddlersEngine.switchTab('hub')">
              <span>📱 Volver al Hub de Apps ➔</span>
            </button>
          </div>
        </div>
      `;

      // Award completion points
      if (this.engine) {
        this.engine.addStars(30);
      }

      // Play intro and celebration audio
      setTimeout(() => {
        this.playIntroAudio();
      }, 350);

      setTimeout(() => {
        this.play("Congratulations! You can now introduce yourself in English! Super job!");
      }, 3200);
    }

    /* ==========================================================================
       SCOPED STYLES FOR HELLO, IT'S ME!
       ========================================================================== */
    injectStyles() {
      if (document.getElementById('toddlers-hello-module-styles')) return;

      const style = document.createElement('style');
      style.id = 'toddlers-hello-module-styles';
      style.textContent = `
        /* Top Stepper Bar */
        .hello-module-wrap {
          max-width: 1040px;
          margin: 0 auto;
          padding-bottom: 90px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #1e293b;
        }
        .hello-stepper-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 12px 16px;
          margin-bottom: 24px;
          background: #ffffff;
          border-radius: 100px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .hello-step-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748b;
          background: #f8fafc;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .hello-step-pill:hover {
          background: #f1f5f9;
          color: #334155;
        }
        .hello-step-pill.active {
          background: #0284c7;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(2,132,199,0.3);
        }
        .hello-step-pill.done {
          background: #dcfce7;
          color: #166534;
        }
        .hello-step-pill .step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(0,0,0,0.08);
          font-size: 0.75rem;
        }
        .hello-step-pill.active .step-num {
          background: rgba(255,255,255,0.25);
        }

        /* Screen 1: Welcome */
        .hello-welcome-card {
          text-align: center;
          padding: 40px 24px;
          background: #ffffff;
          border-radius: 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 32px rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
        }
        .hello-hero-bubbles {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .hello-hero-bubbles .bubble {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1.05rem;
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
        }
        .bubble-1 { background: #dbeafe; color: #1e40af; border: 2px solid #bfdbfe; }
        .bubble-2 { background: #fef3c7; color: #b45309; border: 2px solid #fde68a; }
        .bubble-3 { background: #e0e7ff; color: #3730a3; border: 2px solid #c7d2fe; }
        .bubble-4 { background: #fce7f3; color: #9d174d; border: 2px solid #fbcfe8; }
        .float-slow { animation: floatSlow 3s ease-in-out infinite alternate; }
        .float-mid { animation: floatSlow 2.5s ease-in-out 0.5s infinite alternate; }
        .float-fast { animation: floatSlow 2s ease-in-out 1s infinite alternate; }
        @keyframes floatSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        .hello-welcome-badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          background: #eff6ff;
          color: #0284c7;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }
        .hello-welcome-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }
        .hello-welcome-sub {
          max-width: 600px;
          margin: 0 auto 28px;
          font-size: 1.15rem;
          color: #64748b;
          line-height: 1.5;
        }
        .hello-hear-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: #f8fafc;
          border: 2px solid #cbd5e1;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s;
        }
        .hello-hear-btn:hover {
          background: #e2e8f0;
          border-color: #94a3b8;
          transform: scale(1.02);
        }
        .hello-start-btn-wrap {
          margin-top: 36px;
        }
        .hello-btn-start {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 48px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          border: none;
          border-radius: 50px;
          font-size: 1.35rem;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(2,132,199,0.4);
          transition: all 0.2s ease;
        }
        .hello-btn-start:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 30px rgba(2,132,199,0.5);
        }
        .pulse-btn {
          animation: pulseStart 2s infinite;
        }
        @keyframes pulseStart {
          0% { box-shadow: 0 0 0 0 rgba(2,132,199,0.45); }
          70% { box-shadow: 0 0 0 16px rgba(2,132,199,0); }
          100% { box-shadow: 0 0 0 0 rgba(2,132,199,0); }
        }

        /* Screen Headers & Shared Styles */
        .hello-section-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .section-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          padding: 4px 12px;
          border-radius: 12px;
          margin-bottom: 8px;
        }
        .section-title {
          font-size: 1.85rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 8px;
        }
        .section-desc {
          font-size: 1.05rem;
          color: #64748b;
          max-width: 680px;
          margin: 0 auto;
        }

        /* Screen 2: Listen Grid */
        .hello-exp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 28px;
        }
        .hello-exp-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 20px 16px;
          text-align: center;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          cursor: pointer;
          transition: all 0.22s ease;
          position: relative;
        }
        .hello-exp-card:hover {
          transform: translateY(-4px);
          border-color: #38bdf8;
          box-shadow: 0 8px 24px rgba(56,189,248,0.18);
        }
        .hello-exp-card.playing {
          transform: scale(1.04);
          border-color: #0284c7;
          box-shadow: 0 0 0 4px rgba(2,132,199,0.2);
        }
        .hello-exp-card.listened {
          border-color: #86efac;
        }
        .exp-card-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 12px;
          background: #f1f5f9;
          color: #475569;
          margin-bottom: 12px;
        }
        .hello-exp-card.listened .exp-card-badge {
          background: #dcfce7;
          color: #15803d;
        }
        .exp-card-visual {
          width: 80px;
          height: 80px;
          margin: 0 auto 12px;
        }
        .hello-svg-art {
          width: 100%;
          height: 100%;
          display: block;
        }
        .exp-card-en {
          font-size: 1.25rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 4px;
        }
        .exp-card-es {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 14px;
        }
        .exp-repeat-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 20px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          font-size: 0.85rem;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s;
        }
        .exp-repeat-btn:hover {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
        }

        /* Screen 3: Learn Matching Arena */
        .matching-arena {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .match-col {
          flex: 1 1 320px;
          max-width: 440px;
        }
        .col-heading {
          text-align: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: #334155;
          margin: 0 0 12px;
        }
        .match-cards-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .match-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: #ffffff;
          border-radius: 20px;
          border: 2px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }
        .match-card:hover {
          border-color: #38bdf8;
          transform: translateY(-2px);
        }
        .match-card.selected {
          border-color: #0284c7;
          background: #eff6ff;
          box-shadow: 0 0 0 4px rgba(2,132,199,0.25);
        }
        .match-card.matched {
          border-color: #22c55e;
          background: #f0fdf4;
          cursor: default;
          opacity: 0.95;
        }
        .match-card.matched .match-en {
          color: #15803d;
        }
        .match-icon {
          font-size: 1.8rem;
        }
        .match-text {
          flex: 1;
        }
        .match-en {
          display: block;
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
        }
        .match-sub {
          display: block;
          font-size: 0.8rem;
          color: #64748b;
        }
        .match-audio-mini {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .match-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 8px;
        }
        .divider-icon {
          font-size: 1.5rem;
          color: #94a3b8;
        }
        .match-score-pill {
          padding: 4px 12px;
          border-radius: 12px;
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.9rem;
        }
        .match-feedback-banner {
          text-align: center;
          padding: 12px 20px;
          border-radius: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .match-feedback-banner.success {
          background: #dcfce7;
          border-color: #86efac;
          color: #166534;
        }
        .match-feedback-banner.wrong {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #991b1b;
        }
        .shake-wrong {
          animation: shakeCard 0.4s ease-in-out;
        }
        @keyframes shakeCard {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }

        /* Screen 4: Choose */
        .choose-prompt-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 24px;
          text-align: center;
          border: 2px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(0,0,0,0.04);
          margin-bottom: 24px;
        }
        .choose-hear-question-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: #eff6ff;
          border: 2px solid #bfdbfe;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 800;
          color: #1d4ed8;
          cursor: pointer;
          margin-bottom: 12px;
          transition: all 0.2s;
        }
        .choose-hear-question-btn:hover {
          background: #dbeafe;
          transform: scale(1.02);
        }
        .prompt-en {
          font-size: 1.6rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .prompt-es {
          font-size: 1rem;
          color: #64748b;
        }
        .choose-options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .choose-option-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .choose-option-card:hover {
          border-color: #38bdf8;
          transform: translateY(-2px);
        }
        .choose-option-card .option-icon {
          font-size: 2rem;
        }
        .choose-option-card .option-text {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          flex: 1;
        }
        .choose-option-card.correct {
          background: #f0fdf4;
          border-color: #22c55e;
          box-shadow: 0 0 0 4px rgba(34,197,94,0.2);
        }
        .choose-option-card.wrong {
          background: #fef2f2;
          border-color: #ef4444;
          animation: shakeCard 0.4s ease-in-out;
        }
        .choose-feedback-box {
          text-align: center;
          padding: 12px 18px;
          border-radius: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .choose-feedback-box.success {
          background: #dcfce7;
          border-color: #86efac;
          color: #15803d;
        }
        .choose-feedback-box.retry {
          background: #fffbeb;
          border-color: #fde68a;
          color: #b45309;
        }
        .choose-progress-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .choose-progress-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #cbd5e1;
        }
        .choose-progress-dots .dot.active {
          background: #0284c7;
          transform: scale(1.3);
        }
        .choose-progress-dots .dot.done {
          background: #22c55e;
        }

        /* Screen 5: Complete (Builder) */
        .complete-layout {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .builder-controls-pane {
          flex: 1 1 420px;
        }
        .builder-group {
          background: #ffffff;
          border-radius: 20px;
          padding: 16px 20px;
          border: 1px solid #e2e8f0;
          margin-bottom: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .group-label {
          font-size: 0.95rem;
          font-weight: 800;
          color: #334155;
          margin-bottom: 10px;
        }
        .preset-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .preset-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          font-size: 0.95rem;
          font-weight: 800;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s;
        }
        .preset-pill:hover {
          border-color: #94a3b8;
          transform: translateY(-1px);
        }
        .preset-pill.active {
          background: #eff6ff;
          border-color: #0284c7;
          color: #0369a1;
          box-shadow: 0 0 0 3px rgba(2,132,199,0.2);
        }
        .custom-name-box {
          margin-top: 10px;
        }
        .name-text-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: 2px solid #cbd5e1;
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          box-sizing: border-box;
          outline: none;
        }
        .name-text-input:focus {
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2,132,199,0.15);
        }
        .builder-preview-pane {
          flex: 1 1 360px;
          display: flex;
          flex-direction: column;
        }
        .preview-badge {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }
        .intro-preview-card {
          flex: 1;
          background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
          border-radius: 28px;
          padding: 28px;
          border: 2px dashed #86efac;
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .preview-avatar {
          font-size: 4rem;
          margin-bottom: 12px;
        }
        .preview-speech-bubble {
          background: #ffffff;
          border-radius: 20px;
          padding: 16px 20px;
          border: 2px solid #cbd5e1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          margin-bottom: 16px;
          width: 100%;
          box-sizing: border-box;
        }
        .preview-line-greeting {
          font-size: 1.3rem;
          font-weight: 900;
          color: #0284c7;
          margin-bottom: 6px;
        }
        .preview-line-name {
          font-size: 1.25rem;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .preview-line-feeling {
          font-size: 1.2rem;
          font-weight: 800;
          color: #059669;
        }
        .btn-hear-preview {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 800;
          color: #334155;
          cursor: pointer;
        }

        /* Screen 6: Final Passport */
        .hello-intro-final-view {
          max-width: 760px;
          margin: 0 auto;
        }
        .congrats-ribbon-bar {
          text-align: center;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #ffffff;
          font-weight: 900;
          font-size: 1rem;
          padding: 10px 20px;
          border-radius: 50px;
          margin-bottom: 20px;
          box-shadow: 0 4px 16px rgba(245,158,11,0.3);
        }
        .final-passport-card {
          background: #ffffff;
          border-radius: 32px;
          border: 3px solid #e2e8f0;
          box-shadow: 0 16px 40px rgba(0,0,0,0.06);
          overflow: hidden;
          margin-bottom: 24px;
        }
        .passport-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background: #f8fafc;
          border-bottom: 2px solid #e2e8f0;
          font-weight: 800;
          font-size: 0.9rem;
          color: #475569;
        }
        .passport-body {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px 28px;
          flex-wrap: wrap;
        }
        .passport-avatar-zone {
          text-align: center;
          flex: 0 0 140px;
        }
        .passport-avatar {
          font-size: 4.5rem;
          line-height: 1;
        }
        .passport-name-tag {
          margin-top: 8px;
          font-size: 1.15rem;
          font-weight: 900;
          color: #0f172a;
          background: #f1f5f9;
          padding: 4px 12px;
          border-radius: 12px;
          display: inline-block;
        }
        .passport-dialogue-zone {
          flex: 1 1 300px;
        }
        .passport-speech-balloon {
          background: #eff6ff;
          border-radius: 24px;
          padding: 24px;
          border: 2px solid #bfdbfe;
          position: relative;
        }
        .dialogue-line {
          margin-bottom: 8px;
          font-size: 1.4rem;
        }
        .greeting-line {
          font-weight: 900;
          color: #1d4ed8;
        }
        .name-line {
          color: #0f172a;
        }
        .feeling-line {
          font-weight: 800;
          color: #059669;
          margin-bottom: 0;
        }
        .passport-audio-actions {
          display: flex;
          gap: 12px;
          padding: 18px 28px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary-audio-play {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #0284c7;
          color: #ffffff;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(2,132,199,0.3);
          transition: all 0.2s;
        }
        .btn-primary-audio-play:hover {
          background: #0369a1;
          transform: scale(1.02);
        }
        .btn-repeat-audio-play {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          background: #ffffff;
          border: 2px solid #cbd5e1;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 800;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-repeat-audio-play:hover {
          border-color: #0284c7;
          color: #0284c7;
        }
        .congrats-summary-box {
          background: #f0fdf4;
          border-radius: 24px;
          padding: 24px;
          border: 2px solid #bbf7d0;
          text-align: center;
          margin-bottom: 24px;
        }
        .congrats-trophy {
          font-size: 2.8rem;
          margin-bottom: 8px;
        }
        .congrats-heading {
          font-size: 1.4rem;
          font-weight: 900;
          color: #166534;
          margin-bottom: 8px;
        }
        .congrats-p {
          font-size: 1rem;
          color: #15803d;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* Nav Footer Buttons */
        .hello-nav-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .hello-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #0284c7;
          color: #ffffff;
          border: none;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(2,132,199,0.25);
        }
        .hello-primary-btn:hover {
          background: #0369a1;
          transform: translateY(-1px);
        }
        .hello-secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          background: #f8fafc;
          border: 2px solid #cbd5e1;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }
        .hello-secondary-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        .glow-btn {
          animation: pulseGlow 2s infinite;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(2,132,199,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(2,132,199,0); }
          100% { box-shadow: 0 0 0 0 rgba(2,132,199,0); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Global Singleton & Expose
  window.toddlersHelloModule = new ToddlersHelloModule();
  window.renderToddlersHelloModule = function (container, engine) {
    window.toddlersHelloModule.render(container, engine);
  };
})();
