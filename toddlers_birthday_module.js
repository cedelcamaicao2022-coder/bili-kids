/**
 * ==============================================================================
 * BILIKIDS ADVENTURE - TODDLERS 01
 * UNIT 2 - ACTIVITY 2: BIRTHDAY VOCABULARY
 * 
 * Interactive pedagogical module designed for children aged 6 to 8.
 * 
 * 12 Target Words:
 * Group A (Main Curricular): Birthday, Cake, Candle, Cookies, Hat, Party, Present
 * Group B (Complementary):   Balloon, Invitation, Birthday card, Ribbon, Gift bag
 * 
 * 5 Screens:
 * 1. WELCOME - Overview & introduction with 2D digital birthday scene
 * 2. LOOK AND LISTEN - Interactive library divided into 2 collections
 * 3. FIND THE PICTURE - Auditory recognition quiz (12 exercises, 4 visual options)
 * 4. MATCH THE WORD - Two-column interactive matching (12 words <-> 12 images)
 * 5. WHAT DID YOU LEARN? - Mixed review quiz (12 questions: Types A, B, C) + Results
 * ==============================================================================
 */

(function () {
  'use strict';

  const VOCABULARY_DATA = [
    // GROUP A: Main Curricular (7 words)
    {
      id: 'birthday',
      word: 'Birthday',
      translation: 'Cumpleaños',
      group: 'A',
      groupTitle: 'COLLECTION 1 – BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_birthday.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_birthday.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_birthday.mp3',
      aliasAudio: 'assets/toddlers_media/audio/birthday.mp3'
    },
    {
      id: 'cake',
      word: 'Cake',
      translation: 'Pastel',
      group: 'A',
      groupTitle: 'COLLECTION 1 – BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_cake.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_cake.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_cake.mp3',
      aliasAudio: 'assets/toddlers_media/audio/cake.mp3'
    },
    {
      id: 'candle',
      word: 'Candle',
      translation: 'Vela',
      group: 'A',
      groupTitle: 'COLLECTION 1 – BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_candle.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_candle.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_candle.mp3',
      aliasAudio: 'assets/toddlers_media/audio/candle.mp3'
    },
    {
      id: 'cookies',
      word: 'Cookies',
      translation: 'Galletas',
      group: 'A',
      groupTitle: 'COLLECTION 1 – BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_cookies.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_cookies.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_cookies.mp3',
      aliasAudio: 'assets/toddlers_media/audio/cookies.mp3'
    },
    {
      id: 'hat',
      word: 'Hat',
      translation: 'Sombrero',
      group: 'A',
      groupTitle: 'COLLECTION 1 – BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_hat.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_hat.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_hat.mp3',
      aliasAudio: 'assets/toddlers_media/audio/hat.mp3'
    },
    {
      id: 'party',
      word: 'Party',
      translation: 'Fiesta',
      group: 'A',
      groupTitle: 'COLLECTION 1 – BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_party.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_party.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_party.mp3',
      aliasAudio: 'assets/toddlers_media/audio/party.mp3'
    },
    {
      id: 'present',
      word: 'Present',
      translation: 'Regalo',
      group: 'A',
      groupTitle: 'COLLECTION 1 – BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_present.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_present.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_present.mp3',
      aliasAudio: 'assets/toddlers_media/audio/present.mp3'
    },

    // GROUP B: Complementary Vocabulary (5 words)
    {
      id: 'balloon',
      word: 'Balloon',
      translation: 'Globo',
      group: 'B',
      groupTitle: 'COLLECTION 2 – MORE BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_balloon.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_balloon.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_balloon.mp3',
      aliasAudio: 'assets/toddlers_media/audio/balloon.mp3'
    },
    {
      id: 'invitation',
      word: 'Invitation',
      translation: 'Invitación',
      group: 'B',
      groupTitle: 'COLLECTION 2 – MORE BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_invitation.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_invitation.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_invitation.mp3',
      aliasAudio: 'assets/toddlers_media/audio/invitation.mp3'
    },
    {
      id: 'birthday_card',
      word: 'Birthday card',
      translation: 'Tarjeta de cumpleaños',
      group: 'B',
      groupTitle: 'COLLECTION 2 – MORE BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_birthday_card.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_birthday_card.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_birthday_card.mp3',
      aliasAudio: 'assets/toddlers_media/audio/birthday_card.mp3'
    },
    {
      id: 'ribbon',
      word: 'Ribbon',
      translation: 'Cinta',
      group: 'B',
      groupTitle: 'COLLECTION 2 – MORE BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_ribbon.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_ribbon.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_ribbon.mp3',
      aliasAudio: 'assets/toddlers_media/audio/ribbon.mp3'
    },
    {
      id: 'gift_bag',
      word: 'Gift bag',
      translation: 'Bolsa de regalo',
      group: 'B',
      groupTitle: 'COLLECTION 2 – MORE BIRTHDAY WORDS',
      image: 'assets/toddlers_units/u2_birthday/u2_card_gift_bag.webp',
      imagePng: 'assets/toddlers_units/u2_birthday/u2_card_gift_bag.png',
      audio: 'assets/toddlers_media/audio/bili_toddler_u2_gift_bag.mp3',
      aliasAudio: 'assets/toddlers_media/audio/gift_bag.mp3'
    }
  ];

  class ToddlersBirthdayModule {
    constructor() {
      this.currentScreen = 1;
      this.container = null;
      this.engine = null;
      this._currentAudio = null;

      // Screen 2 state
      this.screen2ActiveId = 'birthday';

      // Screen 3 state (Find the picture)
      this.screen3StepIndex = 0;
      this.screen3CompletedCount = 0;
      this.screen3ShuffledQueue = [];
      this.screen3CurrentOptions = [];
      this.screen3Answered = false;

      // Screen 4 state (Match the word)
      this.screen4Matched = new Set();
      this.screen4SelectedWord = null;
      this.screen4SelectedImage = null;
      this.screen4WordsOrder = [];
      this.screen4ImagesOrder = [];

      // Screen 5 state (What did you learn?)
      this.screen5Index = 0;
      this.screen5Questions = [];
      this.screen5Score = 0;
      this.screen5Answered = false;
      this.screen5UserAnswers = [];

      this.injectStyles();
    }

    /* ==========================================================================
       INITIALIZATION & RENDERING
       ========================================================================== */
    render(container, engine) {
      this.container = container;
      this.engine = engine;

      const html = `
        <div class="birthday-module-wrapper" id="birthdayModuleRoot">
          <!-- TOP HEADER BAR -->
          <div class="birthday-top-bar">
            <div class="birthday-breadcrumb">
              <button class="btn-back-hub" onclick="toddlersEngine.switchTab('hub')" title="Volver al Hub de Apps">
                <span>📱 Hub</span>
              </button>
              <span class="crumb-separator">/</span>
              <span class="crumb-unit">Unit 2 • Activity 2</span>
              <span class="crumb-separator">/</span>
              <span class="crumb-title">🎂 Birthday Vocabulary</span>
            </div>

            <!-- 5 SCREENS PROGRESS PILLS -->
            <div class="birthday-screen-pills">
              <button class="screen-pill ${this.currentScreen === 1 ? 'active' : this.currentScreen > 1 ? 'completed' : ''}" onclick="window.toddlersBirthdayModule.goToScreen(1)">
                <span class="pill-dot">1</span>
                <span class="pill-label">Welcome</span>
              </button>
              <button class="screen-pill ${this.currentScreen === 2 ? 'active' : this.currentScreen > 2 ? 'completed' : ''}" onclick="window.toddlersBirthdayModule.goToScreen(2)">
                <span class="pill-dot">2</span>
                <span class="pill-label">Look & Listen</span>
              </button>
              <button class="screen-pill ${this.currentScreen === 3 ? 'active' : this.currentScreen > 3 ? 'completed' : ''}" onclick="window.toddlersBirthdayModule.goToScreen(3)">
                <span class="pill-dot">3</span>
                <span class="pill-label">Find Picture</span>
              </button>
              <button class="screen-pill ${this.currentScreen === 4 ? 'active' : this.currentScreen > 4 ? 'completed' : ''}" onclick="window.toddlersBirthdayModule.goToScreen(4)">
                <span class="pill-dot">4</span>
                <span class="pill-label">Match Word</span>
              </button>
              <button class="screen-pill ${this.currentScreen === 5 ? 'active' : ''}" onclick="window.toddlersBirthdayModule.goToScreen(5)">
                <span class="pill-dot">5</span>
                <span class="pill-label">Review Quiz</span>
              </button>
            </div>
          </div>

          <!-- SCREEN CONTAINER BODY -->
          <div class="birthday-screen-body" id="birthdayScreenBody">
            <!-- Injected by screen renderer -->
          </div>
        </div>
      `;

      container.innerHTML = html;
      this.renderScreen();
    }

    goToScreen(screenNum) {
      this.currentScreen = Math.max(1, Math.min(5, screenNum));
      this.stopAudio();

      if (this.currentScreen === 3 && this.screen3ShuffledQueue.length === 0) {
        this.initScreen3();
      } else if (this.currentScreen === 4 && this.screen4WordsOrder.length === 0) {
        this.initScreen4();
      } else if (this.currentScreen === 5 && this.screen5Questions.length === 0) {
        this.initScreen5();
      }

      this.render(this.container, this.engine);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    renderScreen() {
      const body = document.getElementById('birthdayScreenBody');
      if (!body) return;

      switch (this.currentScreen) {
        case 1:
          this.renderScreen1Welcome(body);
          break;
        case 2:
          this.renderScreen2LookListen(body);
          break;
        case 3:
          this.renderScreen3FindPicture(body);
          break;
        case 4:
          this.renderScreen4MatchWord(body);
          break;
        case 5:
          this.renderScreen5WhatDidYouLearn(body);
          break;
        default:
          this.renderScreen1Welcome(body);
      }
    }

    /* ==========================================================================
       AUDIO UTILITIES
       ========================================================================== */
    playAudio(srcOrText, onEnd = null) {
      this.stopAudio();
      if (!srcOrText) return;

      let resolvedSrc = null;
      if (typeof srcOrText === 'string' && (srcOrText.includes('.mp3') || srcOrText.startsWith('assets/'))) {
        resolvedSrc = srcOrText;
      } else {
        const manifest = Object.assign({}, window.ToddlersAudioManifest || {}, window.BilikidsAudioManifest || {});
        const clean = String(srcOrText).trim().toLowerCase();
        resolvedSrc = manifest[srcOrText] || manifest[clean] || `assets/toddlers_media/audio/bili_toddler_u2_${clean.replace(/\s+/g, '_')}.mp3`;
      }

      try {
        const audio = new Audio(resolvedSrc);
        this._currentAudio = audio;
        audio.playbackRate = 0.88; // Calm, natural child-friendly pacing
        audio.onended = () => {
          this._currentAudio = null;
          if (typeof onEnd === 'function') onEnd();
        };
        audio.onerror = () => {
          if (this.engine && typeof this.engine.playAudio === 'function') {
            this.engine.playAudio(srcOrText);
          }
          if (typeof onEnd === 'function') onEnd();
        };
        audio.play().catch(() => {
          if (this.engine && typeof this.engine.playAudio === 'function') {
            this.engine.playAudio(srcOrText);
          }
          if (typeof onEnd === 'function') onEnd();
        });
      } catch (e) {
        if (typeof onEnd === 'function') onEnd();
      }
    }

    stopAudio() {
      if (this._currentAudio) {
        try {
          this._currentAudio.pause();
          this._currentAudio.currentTime = 0;
        } catch (e) {}
        this._currentAudio = null;
      }
    }

    playWord(wordId) {
      const item = VOCABULARY_DATA.find(x => x.id === wordId);
      if (item) {
        this.playAudio(item.audio);
      }
    }

    /* ==========================================================================
       PANTALLA 1: WELCOME
       ========================================================================== */
    renderScreen1Welcome(body) {
      const welcomeAudioSrc = 'assets/toddlers_media/audio/bili_toddler_u2_birthday_welcome.mp3';

      body.innerHTML = `
        <div class="birthday-welcome-container">
          <div class="welcome-card-hero">
            <!-- Scene Header Badges -->
            <div class="welcome-badge-tag">TODDLERS 01 • UNIT 2 • ACTIVITY 2</div>
            <h1 class="welcome-main-title">BIRTHDAY VOCABULARY</h1>
            <p class="welcome-subtitle">"Let's learn birthday words!"</p>

            <!-- Illustrated Birthday Scene (Pure 2D digital art, no humans/pets/avatars) -->
            <div class="welcome-scene-frame">
              <picture>
                <source srcset="assets/toddlers_units/u2_birthday/u2_birthday_welcome.webp" type="image/webp">
                <img src="assets/toddlers_units/u2_birthday/u2_birthday_welcome.png" alt="Birthday Celebration Scene" class="welcome-scene-img" onerror="this.onerror=null; this.src='assets/toddlers_units/u2_birthday/u2_birthday_welcome.png';">
              </picture>
            </div>

            <!-- Welcome Audio Speech Box -->
            <div class="welcome-speech-box">
              <button class="btn-play-welcome-audio" onclick="window.toddlersBirthdayModule.playAudio('${welcomeAudioSrc}')" title="Escuchar bienvenida">
                <span class="audio-btn-icon">🔊</span>
                <span class="audio-btn-text">"Hello! Today we are going to learn birthday words. Let's get started!"</span>
              </button>
            </div>

            <!-- Action Start Button -->
            <div class="welcome-actions-row">
              <button class="btn-birthday-start" onclick="window.toddlersBirthdayModule.goToScreen(2)">
                <span>START</span>
                <span class="arrow-icon">➔</span>
              </button>
            </div>
          </div>
        </div>
      `;

      // Polite, gentle auto-play on first landing
      setTimeout(() => {
        this.playAudio(welcomeAudioSrc);
      }, 400);
    }

    /* ==========================================================================
       PANTALLA 2: LOOK AND LISTEN (Interactive Vocabulary Library)
       ========================================================================== */
    renderScreen2LookListen(body) {
      const groupA = VOCABULARY_DATA.filter(x => x.group === 'A');
      const groupB = VOCABULARY_DATA.filter(x => x.group === 'B');

      body.innerHTML = `
        <div class="birthday-look-listen-view">
          <!-- Instruction Header -->
          <div class="screen-inst-header">
            <div class="inst-left">
              <span class="inst-num-badge">PANTALLA 2 DE 5</span>
              <h2 class="inst-title">Look and Listen</h2>
              <p class="inst-desc">Tap each card to hear the birthday word. Listen and repeat!</p>
            </div>
            <div class="inst-audio-action">
              <button class="btn-inst-audio" onclick="window.toddlersBirthdayModule.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_inst_screen2.mp3')">
                <span>🔊 Instruction</span>
              </button>
            </div>
          </div>

          <!-- COLLECTION 1: BIRTHDAY WORDS (7 words) -->
          <div class="vocab-collection-section">
            <div class="collection-header-bar group-a-bar">
              <span class="collection-icon">🎂</span>
              <span class="collection-title">COLLECTION 1 – BIRTHDAY WORDS</span>
              <span class="collection-count">7 palabras curriculares</span>
            </div>
            <div class="vocab-cards-grid">
              ${groupA.map(item => this.renderVocabCard(item)).join('')}
            </div>
          </div>

          <!-- COLLECTION 2: MORE BIRTHDAY WORDS (5 words) -->
          <div class="vocab-collection-section" style="margin-top: 2rem;">
            <div class="collection-header-bar group-b-bar">
              <span class="collection-icon">🎈</span>
              <span class="collection-title">COLLECTION 2 – MORE BIRTHDAY WORDS</span>
              <span class="collection-count">5 palabras complementarias</span>
            </div>
            <div class="vocab-cards-grid">
              ${groupB.map(item => this.renderVocabCard(item)).join('')}
            </div>
          </div>

          <!-- BOTTOM NAVIGATION BAR -->
          <div class="birthday-nav-footer">
            <button class="btn-nav-prev" onclick="window.toddlersBirthdayModule.goToScreen(1)">
              <span>⬅ Welcome</span>
            </button>
            <button class="btn-nav-next glow-btn" onclick="window.toddlersBirthdayModule.goToScreen(3)">
              <span>Next: Find the Picture ➔</span>
            </button>
          </div>
        </div>
      `;

      // Auto play instruction on entry
      setTimeout(() => {
        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_inst_screen2.mp3');
      }, 350);
    }

    renderVocabCard(item) {
      const isSelected = this.screen2ActiveId === item.id;
      return `
        <div class="birthday-vocab-card ${isSelected ? 'active-highlight' : ''}" id="card_${item.id}" onclick="window.toddlersBirthdayModule.selectVocabCard('${item.id}')">
          <div class="card-img-wrapper">
            <picture>
              <source srcset="${item.image}" type="image/webp">
              <img src="${item.imagePng}" alt="${item.word}" class="card-vocab-img" loading="lazy" onerror="this.onerror=null; this.src='${item.imagePng}';">
            </picture>
          </div>
          <div class="card-info-box">
            <span class="card-word-en">${item.word}</span>
            <span class="card-word-es">${item.translation}</span>
          </div>
          <div class="card-audio-controls">
            <button class="btn-card-audio" onclick="event.stopPropagation(); window.toddlersBirthdayModule.playWord('${item.id}')" title="Repetir audio de ${item.word}">
              <span class="audio-icon">🔊</span>
              <span class="audio-label">Listen</span>
            </button>
          </div>
        </div>
      `;
    }

    selectVocabCard(itemId) {
      this.screen2ActiveId = itemId;
      document.querySelectorAll('.birthday-vocab-card').forEach(c => {
        c.classList.remove('active-highlight');
      });
      const el = document.getElementById(`card_${itemId}`);
      if (el) el.classList.add('active-highlight');
      this.playWord(itemId);
    }

    /* ==========================================================================
       PANTALLA 3: FIND THE PICTURE (Auditory Recognition, 12 Exercises)
       ========================================================================== */
    initScreen3() {
      // Shuffle all 12 words so each appears once
      this.screen3ShuffledQueue = [...VOCABULARY_DATA].sort(() => Math.random() - 0.5);
      this.screen3StepIndex = 0;
      this.screen3CompletedCount = 0;
      this.prepareScreen3Step();
    }

    prepareScreen3Step() {
      if (this.screen3StepIndex >= this.screen3ShuffledQueue.length) return;
      this.screen3Answered = false;
      const target = this.screen3ShuffledQueue[this.screen3StepIndex];

      // Pick 3 distractors
      const distractors = VOCABULARY_DATA
        .filter(x => x.id !== target.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      // Combine and shuffle the 4 choices
      this.screen3CurrentOptions = [target, ...distractors].sort(() => Math.random() - 0.5);
    }

    renderScreen3FindPicture(body) {
      if (!this.screen3ShuffledQueue || this.screen3ShuffledQueue.length === 0) {
        this.initScreen3();
      }

      const isFinished = this.screen3CompletedCount >= 12;
      const currentTarget = this.screen3ShuffledQueue[this.screen3StepIndex] || this.screen3ShuffledQueue[0];
      const stepDisplay = Math.min(12, this.screen3StepIndex + 1);

      body.innerHTML = `
        <div class="birthday-find-picture-view">
          <!-- Instruction Header -->
          <div class="screen-inst-header">
            <div class="inst-left">
              <span class="inst-num-badge">PANTALLA 3 DE 5 • IDENTIFICACIÓN AUDITIVA</span>
              <h2 class="inst-title">Listen and find the picture!</h2>
              <p class="inst-desc">Escucha la palabra en inglés y selecciona la ilustración correcta.</p>
            </div>
            <div class="inst-audio-action">
              <button class="btn-inst-audio" onclick="window.toddlersBirthdayModule.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_inst_screen3.mp3')">
                <span>🔊 Instruction</span>
              </button>
            </div>
          </div>

          <!-- Progress Bar (0/12 to 12/12) -->
          <div class="quiz-progress-bar-container">
            <div class="quiz-progress-text">
              <span>Ejercicio <strong>${stepDisplay}</strong> de 12</span>
              <span>Progreso: <strong>${this.screen3CompletedCount}/12</strong> completados</span>
            </div>
            <div class="quiz-progress-track">
              <div class="quiz-progress-fill" style="width: ${(this.screen3CompletedCount / 12) * 100}%;"></div>
            </div>
          </div>

          <!-- AUDIO TARGET PROMPT (NO text shown before answering!) -->
          <div class="find-target-sound-box">
            <div class="sound-wave-icon">🎧</div>
            <div class="sound-prompt-info">
              <span class="sound-prompt-label">Palabra misteriosa:</span>
              <span class="sound-prompt-sub">Toca el botón para escuchar la palabra:</span>
            </div>
            <button class="btn-play-mystery-word pulse-btn" onclick="window.toddlersBirthdayModule.playWord('${currentTarget.id}')">
              <span class="btn-icon">🔊</span>
              <span>Escuchar de nuevo</span>
            </button>
          </div>

          <!-- FEEDBACK BANNER -->
          <div class="find-feedback-banner" id="findFeedbackBanner" style="display: none;"></div>

          <!-- 4 CHOICES GRID (Illustrations only, randomized positions) -->
          <div class="find-choices-grid">
            ${this.screen3CurrentOptions.map((opt, idx) => `
              <div class="find-choice-card" id="findOpt_${opt.id}" onclick="window.toddlersBirthdayModule.handleScreen3Choice('${opt.id}')">
                <div class="choice-img-box">
                  <picture>
                    <source srcset="${opt.image}" type="image/webp">
                    <img src="${opt.imagePng}" alt="Opción ${idx + 1}" class="find-choice-img" onerror="this.onerror=null; this.src='${opt.imagePng}';">
                  </picture>
                </div>
                <!-- Word revealed only upon answering correctly -->
                <div class="choice-revealed-label" id="reveal_${opt.id}" style="display: none;">
                  <span class="revealed-word">${opt.word}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- BOTTOM NAVIGATION BAR -->
          <div class="birthday-nav-footer">
            <button class="btn-nav-prev" onclick="window.toddlersBirthdayModule.goToScreen(2)">
              <span>⬅ Look & Listen</span>
            </button>
            <button class="btn-nav-next ${isFinished ? 'glow-btn' : 'disabled-btn'}" id="btnScreen3Next" ${isFinished ? '' : 'disabled'} onclick="window.toddlersBirthdayModule.goToScreen(4)">
              <span>Next: Match the Word (4) ➔</span>
            </button>
          </div>
        </div>
      `;

      // Automatically play the mystery target audio
      setTimeout(() => {
        this.playWord(currentTarget.id);
      }, 450);
    }

    handleScreen3Choice(selectedId) {
      if (this.screen3Answered) return;
      const target = this.screen3ShuffledQueue[this.screen3StepIndex];
      const feedbackBanner = document.getElementById('findFeedbackBanner');
      const cardEl = document.getElementById(`findOpt_${selectedId}`);

      if (selectedId === target.id) {
        // Correct answer!
        this.screen3Answered = true;
        if (cardEl) {
          cardEl.classList.add('correct-glow');
        }
        const revealEl = document.getElementById(`reveal_${selectedId}`);
        if (revealEl) revealEl.style.display = 'block';

        if (feedbackBanner) {
          feedbackBanner.className = 'find-feedback-banner correct-banner';
          feedbackBanner.innerHTML = `<span>🌟 ¡Excellent! Well done! Es <strong>${target.word}</strong> (${target.translation})!</span>`;
          feedbackBanner.style.display = 'flex';
        }

        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_feedback_correct.mp3');

        if (this.screen3CompletedCount < 12) {
          this.screen3CompletedCount++;
        }

        // Advance to next step after brief celebration
        setTimeout(() => {
          if (this.screen3StepIndex < 11) {
            this.screen3StepIndex++;
            this.prepareScreen3Step();
            this.renderScreen();
          } else {
            // Completed all 12 exercises
            this.renderScreen();
          }
        }, 1300);
      } else {
        // Incorrect attempt -> allow retry, no penalty!
        if (cardEl) {
          cardEl.classList.add('shake-card');
          setTimeout(() => cardEl.classList.remove('shake-card'), 600);
        }

        if (feedbackBanner) {
          feedbackBanner.className = 'find-feedback-banner incorrect-banner';
          feedbackBanner.innerHTML = `<span>🔄 Try again! Escucha atentamente la palabra.</span>`;
          feedbackBanner.style.display = 'flex';
        }

        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_feedback_incorrect.mp3');
      }
    }

    /* ==========================================================================
       PANTALLA 4: MATCH THE WORD (Relacionar palabras e imágenes)
       ========================================================================== */
    initScreen4() {
      this.screen4Matched = new Set();
      this.screen4SelectedWord = null;
      this.screen4SelectedImage = null;
      // Left: 12 words in order
      this.screen4WordsOrder = [...VOCABULARY_DATA];
      // Right: 12 illustrations shuffled
      this.screen4ImagesOrder = [...VOCABULARY_DATA].sort(() => Math.random() - 0.5);
    }

    renderScreen4MatchWord(body) {
      if (!this.screen4WordsOrder || this.screen4WordsOrder.length === 0) {
        this.initScreen4();
      }

      const isFinished = this.screen4Matched.size >= 12;

      body.innerHTML = `
        <div class="birthday-match-view">
          <!-- Instruction Header -->
          <div class="screen-inst-header">
            <div class="inst-left">
              <span class="inst-num-badge">PANTALLA 4 DE 5 • RELACIÓN PALABRA - IMAGEN</span>
              <h2 class="inst-title">Match the Word!</h2>
              <p class="inst-desc">Toca una palabra a la izquierda y luego toca su ilustración a la derecha para relacionarlas.</p>
            </div>
            <div class="inst-audio-action">
              <button class="btn-inst-audio" onclick="window.toddlersBirthdayModule.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_inst_screen4.mp3')">
                <span>🔊 Instruction</span>
              </button>
            </div>
          </div>

          <!-- Progress Bar (0/12 to 12/12) -->
          <div class="quiz-progress-bar-container">
            <div class="quiz-progress-text">
              <span>Parejas conectadas: <strong>${this.screen4Matched.size}/12</strong></span>
              <span>${isFinished ? '🎉 ¡Todas las palabras relacionadas!' : 'Selecciona una palabra y su imagen'}</span>
            </div>
            <div class="quiz-progress-track">
              <div class="quiz-progress-fill" style="width: ${(this.screen4Matched.size / 12) * 100}%;"></div>
            </div>
          </div>

          <!-- TWO COLUMNS MATCHING ARENA -->
          <div class="matching-columns-arena">
            <!-- LEFT COLUMN: 12 WORDS -->
            <div class="match-column left-words-col">
              <div class="match-col-header">
                <span>🔤 Palabras en Inglés</span>
              </div>
              <div class="match-items-stack">
                ${this.screen4WordsOrder.map(item => {
                  const isDone = this.screen4Matched.has(item.id);
                  const isSelected = this.screen4SelectedWord === item.id;
                  return `
                    <div class="match-word-card ${isDone ? 'matched-card' : ''} ${isSelected ? 'selected-card' : ''}" id="matchWord_${item.id}" onclick="window.toddlersBirthdayModule.selectMatchWord('${item.id}')">
                      <button class="btn-mini-audio" onclick="event.stopPropagation(); window.toddlersBirthdayModule.playWord('${item.id}')" title="Escuchar pronunciación">
                        <span>🔊</span>
                      </button>
                      <span class="match-word-text">${item.word}</span>
                      <span class="match-status-badge">${isDone ? '✓' : '•'}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- RIGHT COLUMN: 12 IMAGES (Shuffled) -->
            <div class="match-column right-images-col">
              <div class="match-col-header">
                <span>🖼️ Ilustraciones</span>
              </div>
              <div class="match-items-stack">
                ${this.screen4ImagesOrder.map(item => {
                  const isDone = this.screen4Matched.has(item.id);
                  const isSelected = this.screen4SelectedImage === item.id;
                  return `
                    <div class="match-image-card ${isDone ? 'matched-card' : ''} ${isSelected ? 'selected-card' : ''}" id="matchImg_${item.id}" onclick="window.toddlersBirthdayModule.selectMatchImage('${item.id}')">
                      <div class="match-img-thumb">
                        <picture>
                          <source srcset="${item.image}" type="image/webp">
                          <img src="${item.imagePng}" alt="Ilustración" class="img-thumb" onerror="this.onerror=null; this.src='${item.imagePng}';">
                        </picture>
                      </div>
                      ${isDone ? `<span class="matched-name-label">${item.word}</span>` : ''}
                      <span class="match-status-badge">${isDone ? '✓' : '•'}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- BOTTOM NAVIGATION BAR -->
          <div class="birthday-nav-footer">
            <button class="btn-nav-prev" onclick="window.toddlersBirthdayModule.goToScreen(3)">
              <span>⬅ Find the Picture</span>
            </button>
            <button class="btn-nav-next ${isFinished ? 'glow-btn' : 'disabled-btn'}" id="btnScreen4Next" ${isFinished ? '' : 'disabled'} onclick="window.toddlersBirthdayModule.goToScreen(5)">
              <span>Next: What Did You Learn? (5) ➔</span>
            </button>
          </div>
        </div>
      `;

      // Auto play instruction on entry
      setTimeout(() => {
        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_inst_screen4.mp3');
      }, 350);
    }

    selectMatchWord(itemId) {
      if (this.screen4Matched.has(itemId)) return;
      this.screen4SelectedWord = itemId;
      this.playWord(itemId);
      this.checkMatchingPair();
      this.renderScreen();
    }

    selectMatchImage(itemId) {
      if (this.screen4Matched.has(itemId)) return;
      this.screen4SelectedImage = itemId;
      this.checkMatchingPair();
      this.renderScreen();
    }

    checkMatchingPair() {
      if (!this.screen4SelectedWord || !this.screen4SelectedImage) return;

      if (this.screen4SelectedWord === this.screen4SelectedImage) {
        // MATCH!
        this.screen4Matched.add(this.screen4SelectedWord);
        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_feedback_correct.mp3');
        this.screen4SelectedWord = null;
        this.screen4SelectedImage = null;
      } else {
        // MISMATCH!
        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_feedback_incorrect.mp3');
        const wId = this.screen4SelectedWord;
        const iId = this.screen4SelectedImage;
        setTimeout(() => {
          if (this.screen4SelectedWord === wId) this.screen4SelectedWord = null;
          if (this.screen4SelectedImage === iId) this.screen4SelectedImage = null;
          this.renderScreen();
        }, 700);
      }
    }

    /* ==========================================================================
       PANTALLA 5: WHAT DID YOU LEARN? (12 Questions: Types A, B, C + Results)
       ========================================================================== */
    initScreen5() {
      this.screen5Index = 0;
      this.screen5Score = 0;
      this.screen5Answered = false;
      this.screen5UserAnswers = [];

      // Create 12 questions (one per word), alternating types A, B, C
      const types = ['A', 'B', 'C'];
      const shuffledWords = [...VOCABULARY_DATA].sort(() => Math.random() - 0.5);

      this.screen5Questions = shuffledWords.map((item, idx) => {
        const qType = types[idx % 3]; // Alternating Types A, B, C
        // 2 distractors
        const distractors = VOCABULARY_DATA
          .filter(x => x.id !== item.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 2);

        const options = [item, ...distractors].sort(() => Math.random() - 0.5);

        return {
          index: idx + 1,
          type: qType,
          target: item,
          options: options,
          answered: false,
          userChoice: null,
          isCorrect: null
        };
      });
    }

    renderScreen5WhatDidYouLearn(body) {
      if (!this.screen5Questions || this.screen5Questions.length === 0) {
        this.initScreen5();
      }

      // Check if all 12 questions have been answered
      if (this.screen5Index >= 12) {
        this.renderScreen5Results(body);
        return;
      }

      const q = this.screen5Questions[this.screen5Index];

      body.innerHTML = `
        <div class="birthday-quiz-view">
          <!-- Instruction Header -->
          <div class="screen-inst-header">
            <div class="inst-left">
              <span class="inst-num-badge">PANTALLA 5 DE 5 • EVALUACIÓN DE APRENDIZAJE</span>
              <h2 class="inst-title">What Did You Learn?</h2>
              <p class="inst-desc">Pregunta <strong>${q.index}</strong> de 12 • ${
                q.type === 'A' ? 'Tipo A: Identificación Visual' :
                q.type === 'B' ? 'Tipo B: Identificación Auditiva' :
                'Tipo C: Identificación de Palabra'
              }</p>
            </div>
            <div class="inst-audio-action">
              <button class="btn-inst-audio" onclick="window.toddlersBirthdayModule.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_inst_screen5.mp3')">
                <span>🔊 Instruction</span>
              </button>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="quiz-progress-bar-container">
            <div class="quiz-progress-text">
              <span>Pregunta <strong>${q.index}</strong> de 12</span>
              <span>Aciertos: <strong>${this.screen5Score}</strong></span>
            </div>
            <div class="quiz-progress-track">
              <div class="quiz-progress-fill" style="width: ${((q.index - 1) / 12) * 100}%;"></div>
            </div>
          </div>

          <!-- QUESTION CARD CONTAINER -->
          <div class="quiz-question-box">
            ${this.renderQuestionContent(q)}
          </div>

          <!-- FEEDBACK BANNER -->
          <div class="quiz-feedback-box" id="quizFeedbackBox" style="display: none;"></div>

          <!-- BOTTOM NAVIGATION BAR -->
          <div class="birthday-nav-footer">
            <button class="btn-nav-prev" onclick="window.toddlersBirthdayModule.goToScreen(4)">
              <span>⬅ Match the Word</span>
            </button>
            <button class="btn-nav-next ${this.screen5Answered ? 'glow-btn' : 'disabled-btn'}" id="btnQuizNext" ${this.screen5Answered ? '' : 'disabled'} onclick="window.toddlersBirthdayModule.nextQuizQuestion()">
              <span>${q.index === 12 ? 'Ver Resultados 🏆' : 'Siguiente Pregunta ➔'}</span>
            </button>
          </div>
        </div>
      `;

      // Auto play prompt audio when relevant
      if (q.type === 'A') {
        setTimeout(() => this.playWord(q.target.id), 300);
      } else if (q.type === 'B') {
        setTimeout(() => this.playWord(q.target.id), 300);
      }
    }

    renderQuestionContent(q) {
      if (q.type === 'A') {
        // TIPO A – IDENTIFICACIÓN VISUAL (Muestra palabra y 3 ilustraciones)
        return `
          <div class="quiz-prompt-header">
            <div class="prompt-instruction-badge">TIPO A • IDENTIFICACIÓN VISUAL</div>
            <h3 class="quiz-prompt-heading">¿Cuál de las siguientes imágenes corresponde a:</h3>
            <div class="quiz-target-word-banner">
              <span class="target-word-text">${q.target.word}</span>
              <button class="btn-inline-audio" onclick="window.toddlersBirthdayModule.playWord('${q.target.id}')">
                <span>🔊 Escuchar</span>
              </button>
            </div>
          </div>

          <div class="quiz-options-grid-3">
            ${q.options.map(opt => `
              <div class="quiz-img-option-card ${this.screen5Answered && opt.id === q.target.id ? 'correct-opt' : ''} ${this.screen5Answered && q.userChoice === opt.id && opt.id !== q.target.id ? 'wrong-opt' : ''}" onclick="window.toddlersBirthdayModule.handleQuizChoice('${opt.id}')">
                <div class="quiz-img-holder">
                  <picture>
                    <source srcset="${opt.image}" type="image/webp">
                    <img src="${opt.imagePng}" alt="Opción" class="quiz-opt-img" onerror="this.onerror=null; this.src='${opt.imagePng}';">
                  </picture>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else if (q.type === 'B') {
        // TIPO B – IDENTIFICACIÓN AUDITIVA (Reproduce audio y 3 ilustraciones)
        return `
          <div class="quiz-prompt-header">
            <div class="prompt-instruction-badge">TIPO B • IDENTIFICACIÓN AUDITIVA</div>
            <h3 class="quiz-prompt-heading">Escucha el audio con atención y selecciona la ilustración correcta:</h3>
            <div class="quiz-audio-trigger-box">
              <button class="btn-play-quiz-sound pulse-btn" onclick="window.toddlersBirthdayModule.playWord('${q.target.id}')">
                <span class="btn-icon">🔊</span>
                <span>Tocar para Escuchar Palabra</span>
              </button>
            </div>
          </div>

          <div class="quiz-options-grid-3">
            ${q.options.map(opt => `
              <div class="quiz-img-option-card ${this.screen5Answered && opt.id === q.target.id ? 'correct-opt' : ''} ${this.screen5Answered && q.userChoice === opt.id && opt.id !== q.target.id ? 'wrong-opt' : ''}" onclick="window.toddlersBirthdayModule.handleQuizChoice('${opt.id}')">
                <div class="quiz-img-holder">
                  <picture>
                    <source srcset="${opt.image}" type="image/webp">
                    <img src="${opt.imagePng}" alt="Opción" class="quiz-opt-img" onerror="this.onerror=null; this.src='${opt.imagePng}';">
                  </picture>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        // TIPO C – IDENTIFICACIÓN DE PALABRA (Muestra ilustración y 3 palabras)
        return `
          <div class="quiz-prompt-header">
            <div class="prompt-instruction-badge">TIPO C • IDENTIFICACIÓN DE PALABRA</div>
            <h3 class="quiz-prompt-heading">Observa la ilustración y selecciona la palabra correcta en inglés:</h3>
            <div class="quiz-target-illustration-box">
              <picture>
                <source srcset="${q.target.image}" type="image/webp">
                <img src="${q.target.imagePng}" alt="Ilustración misteriosa" class="target-illustration-img" onerror="this.onerror=null; this.src='${q.target.imagePng}';">
              </picture>
            </div>
          </div>

          <div class="quiz-word-options-stack">
            ${q.options.map(opt => `
              <button class="quiz-word-option-btn ${this.screen5Answered && opt.id === q.target.id ? 'correct-word-opt' : ''} ${this.screen5Answered && q.userChoice === opt.id && opt.id !== q.target.id ? 'wrong-word-opt' : ''}" onclick="window.toddlersBirthdayModule.handleQuizChoice('${opt.id}')">
                <span class="btn-choice-icon">🔤</span>
                <span class="btn-choice-text">${opt.word}</span>
                <span class="btn-choice-status">${this.screen5Answered && opt.id === q.target.id ? '✓' : ''}</span>
              </button>
            `).join('')}
          </div>
        `;
      }
    }

    handleQuizChoice(choiceId) {
      const q = this.screen5Questions[this.screen5Index];
      const feedbackBox = document.getElementById('quizFeedbackBox');

      if (choiceId === q.target.id) {
        // Correct!
        if (!this.screen5Answered) {
          this.screen5Score++;
        }
        this.screen5Answered = true;
        q.answered = true;
        q.userChoice = choiceId;
        q.isCorrect = true;

        if (feedbackBox) {
          feedbackBox.className = 'quiz-feedback-box correct-feedback';
          feedbackBox.innerHTML = `<span>🌟 ¡Excelente! "${q.target.word}" significa ${q.target.translation}.</span>`;
          feedbackBox.style.display = 'flex';
        }

        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_feedback_correct.mp3');

        // Automatically advance after brief celebration or enable Next button
        const nextBtn = document.getElementById('btnQuizNext');
        if (nextBtn) {
          nextBtn.removeAttribute('disabled');
          nextBtn.classList.add('glow-btn');
          nextBtn.classList.remove('disabled-btn');
        }
      } else {
        // Incorrect -> allow retry, no penalty
        q.userChoice = choiceId;
        if (feedbackBox) {
          feedbackBox.className = 'quiz-feedback-box incorrect-feedback';
          feedbackBox.innerHTML = `<span>🔄 Try again! Intenta seleccionar la otra opción.</span>`;
          feedbackBox.style.display = 'flex';
        }
        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_feedback_incorrect.mp3');
      }

      this.renderScreen();
    }

    nextQuizQuestion() {
      if (this.screen5Index < 11) {
        this.screen5Index++;
        this.screen5Answered = false;
        this.renderScreen();
      } else {
        // All 12 done -> Go to results view
        this.screen5Index = 12;
        this.renderScreen();
      }
    }

    /* ==========================================================================
       PANTALLA 5: RESULTADOS
       ========================================================================== */
    renderScreen5Results(body) {
      const totalWords = 12;
      const correctCount = this.screen5Score;
      const needsPracticeCount = Math.max(0, totalWords - correctCount);

      // Save activity completion in engine progress
      if (this.engine) {
        const uProg = this.engine.getUnitProgress(2);
        uProg.activity2Completed = true;
        uProg.birthdayCompleted = true;
        this.engine.saveProgress();
      }

      body.innerHTML = `
        <div class="birthday-results-view">
          <div class="results-card-container">
            <div class="results-trophy-badge">🏆🎉</div>
            <h2 class="results-heading">Congratulations!</h2>
            <h3 class="results-subheading">You've learned 12 new words!</h3>

            <!-- Performance Metrics -->
            <div class="results-metrics-grid">
              <div class="metric-card metric-correct">
                <span class="metric-num">${correctCount} / 12</span>
                <span class="metric-label">Respuestas Correctas</span>
              </div>
              <div class="metric-card metric-practice">
                <span class="metric-num">${needsPracticeCount}</span>
                <span class="metric-label">Palabras para Repasar</span>
              </div>
            </div>

            <!-- Learned Vocabulary Chips Grid -->
            <div class="results-vocab-summary">
              <div class="summary-title">Vocabulario de Cumpleaños Aprendido:</div>
              <div class="summary-chips-flex">
                ${VOCABULARY_DATA.map(item => `
                  <div class="summary-chip" onclick="window.toddlersBirthdayModule.playWord('${item.id}')">
                    <span class="chip-dot">🎂</span>
                    <span class="chip-en"><strong>${item.word}</strong></span>
                    <span class="chip-es">(${item.translation})</span>
                    <span class="chip-speaker">🔊</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- ACTIONS ROW: TRY AGAIN & FINISH -->
            <div class="results-actions-row">
              <button class="btn-results-tryagain" onclick="window.toddlersBirthdayModule.restartActivity()">
                <span>🔄 TRY AGAIN</span>
              </button>
              <button class="btn-results-finish glow-btn" onclick="window.toddlersBirthdayModule.finishActivity()">
                <span>FINISH ➔</span>
              </button>
            </div>
          </div>
        </div>
      `;

      // Auto play celebration audio
      setTimeout(() => {
        this.playAudio('assets/toddlers_media/audio/bili_toddler_u2_birthday_congratulations.mp3');
      }, 400);
    }

    restartActivity() {
      this.initScreen5();
      this.goToScreen(2);
    }

    finishActivity() {
      if (this.engine && typeof this.engine.switchTab === 'function') {
        this.engine.switchTab('hub');
      } else {
        window.location.href = 'toddlers_units.html?unit=2&tab=hub';
      }
    }

    /* ==========================================================================
       SCOPED STYLES
       ========================================================================== */
    injectStyles() {
      if (document.getElementById('birthdayModuleStyles')) return;
      const style = document.createElement('style');
      style.id = 'birthdayModuleStyles';
      style.textContent = `
        /* Top wrapper */
        .birthday-module-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          font-family: 'Nunito', system-ui, -apple-system, sans-serif;
          color: #1e293b;
        }

        /* Top Breadcrumb & Screen Nav */
        .birthday-top-bar {
          background: #ffffff;
          border-radius: 20px;
          padding: 12px 20px;
          margin-bottom: 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          border: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .birthday-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 700;
        }
        .btn-back-hub {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          padding: 6px 14px;
          font-weight: 800;
          font-size: 0.85rem;
          color: #0284c7;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-back-hub:hover {
          background: #e0f2fe;
          border-color: #38bdf8;
        }
        .crumb-separator {
          color: #cbd5e1;
        }
        .crumb-title {
          color: #ec4899;
          font-weight: 800;
        }

        /* Screen Pills */
        .birthday-screen-pills {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .screen-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          font-size: 0.8rem;
          font-weight: 800;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }
        .screen-pill .pill-dot {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #cbd5e1;
          color: #ffffff;
          font-size: 0.7rem;
        }
        .screen-pill.active {
          background: #fdf2f8;
          border-color: #ec4899;
          color: #be185d;
        }
        .screen-pill.active .pill-dot {
          background: #ec4899;
        }
        .screen-pill.completed {
          background: #f0fdf4;
          border-color: #86efac;
          color: #15803d;
        }
        .screen-pill.completed .pill-dot {
          background: #22c55e;
        }

        /* Instruction Header */
        .screen-inst-header {
          background: linear-gradient(135deg, #ffffff 0%, #fdf2f8 100%);
          border-radius: 20px;
          padding: 18px 24px;
          margin-bottom: 20px;
          border: 1.5px solid #fbcfe8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .inst-num-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #be185d;
          background: #fce7f3;
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 6px;
        }
        .inst-title {
          margin: 0;
          font-size: 1.45rem;
          font-weight: 900;
          color: #831843;
        }
        .inst-desc {
          margin: 4px 0 0;
          font-size: 0.95rem;
          color: #475569;
          font-weight: 600;
        }
        .btn-inst-audio {
          background: #ffffff;
          border: 1.5px solid #f472b6;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 0.88rem;
          font-weight: 800;
          color: #be185d;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-inst-audio:hover {
          background: #fdf2f8;
          transform: translateY(-1px);
        }

        /* Progress Bar Track */
        .quiz-progress-bar-container {
          background: #ffffff;
          border-radius: 16px;
          padding: 12px 18px;
          margin-bottom: 20px;
          border: 1px solid #f1f5f9;
        }
        .quiz-progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 6px;
        }
        .quiz-progress-track {
          height: 10px;
          background: #f1f5f9;
          border-radius: 999px;
          overflow: hidden;
        }
        .quiz-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ec4899, #f43f5e);
          border-radius: 999px;
          transition: width 0.4s ease;
        }

        /* Screen 1 Welcome */
        .birthday-welcome-container {
          text-align: center;
          padding: 10px 0 20px;
        }
        .welcome-card-hero {
          background: #ffffff;
          border-radius: 28px;
          padding: 32px 28px;
          border: 2px solid #fbcfe8;
          box-shadow: 0 12px 36px rgba(236,72,153,0.08);
          max-width: 820px;
          margin: 0 auto;
        }
        .welcome-badge-tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 900;
          color: #be185d;
          background: #fce7f3;
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.06em;
          margin-bottom: 12px;
        }
        .welcome-main-title {
          font-size: 2.2rem;
          font-weight: 900;
          color: #831843;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }
        .welcome-subtitle {
          font-size: 1.25rem;
          font-weight: 700;
          color: #db2777;
          margin: 0 0 20px;
        }
        .welcome-scene-frame {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          margin-bottom: 24px;
          background: #fff5f8;
          border: 1px solid #fce7f3;
        }
        .welcome-scene-img {
          width: 100%;
          height: auto;
          display: block;
          max-height: 420px;
          object-fit: cover;
        }
        .welcome-speech-box {
          margin-bottom: 24px;
        }
        .btn-play-welcome-audio {
          background: #fdf2f8;
          border: 2px solid #f472b6;
          border-radius: 20px;
          padding: 14px 24px;
          font-size: 1.05rem;
          font-weight: 800;
          color: #9d174d;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.2s;
        }
        .btn-play-welcome-audio:hover {
          background: #fce7f3;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(244,114,182,0.25);
        }
        .btn-birthday-start {
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          border: none;
          border-radius: 999px;
          padding: 16px 48px;
          font-size: 1.25rem;
          font-weight: 900;
          color: #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(219,39,119,0.35);
          transition: all 0.2s;
        }
        .btn-birthday-start:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 30px rgba(219,39,119,0.45);
        }

        /* Screen 2 Look & Listen */
        .vocab-collection-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 22px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
        }
        .collection-header-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 14px;
          margin-bottom: 18px;
        }
        .group-a-bar {
          background: #fdf2f8;
          border-left: 5px solid #ec4899;
          color: #9d174d;
        }
        .group-b-bar {
          background: #f0fdf4;
          border-left: 5px solid #22c55e;
          color: #166534;
        }
        .collection-title {
          font-size: 1.1rem;
          font-weight: 900;
        }
        .collection-count {
          margin-left: auto;
          font-size: 0.8rem;
          font-weight: 800;
          opacity: 0.8;
        }
        .vocab-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 16px;
        }
        .birthday-vocab-card {
          background: #ffffff;
          border-radius: 20px;
          border: 2px solid #e2e8f0;
          padding: 16px;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .birthday-vocab-card:hover {
          transform: translateY(-4px);
          border-color: #f472b6;
          box-shadow: 0 8px 24px rgba(236,72,153,0.12);
        }
        .birthday-vocab-card.active-highlight {
          border-color: #ec4899;
          background: #fff5f8;
          box-shadow: 0 0 0 4px rgba(236,72,153,0.2), 0 8px 24px rgba(236,72,153,0.15);
          transform: translateY(-4px) scale(1.02);
        }
        .card-img-wrapper {
          width: 140px;
          height: 140px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-vocab-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 12px;
        }
        .card-info-box {
          margin-bottom: 12px;
        }
        .card-word-en {
          display: block;
          font-size: 1.25rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 2px;
        }
        .card-word-es {
          display: block;
          font-size: 0.9rem;
          font-weight: 700;
          color: #64748b;
        }
        .btn-card-audio {
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.85rem;
          font-weight: 800;
          color: #334155;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .btn-card-audio:hover {
          background: #ec4899;
          color: #ffffff;
          border-color: #ec4899;
        }

        /* Screen 3 Find the Picture */
        .find-target-sound-box {
          background: #ffffff;
          border-radius: 20px;
          padding: 20px 24px;
          margin-bottom: 20px;
          border: 2px solid #e0e7ff;
          box-shadow: 0 4px 16px rgba(99,102,241,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .sound-wave-icon {
          font-size: 2.2rem;
        }
        .sound-prompt-info {
          flex: 1;
        }
        .sound-prompt-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 800;
          color: #6366f1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .sound-prompt-sub {
          display: block;
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e1b4b;
        }
        .btn-play-mystery-word {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          border: none;
          border-radius: 999px;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(79,70,229,0.3);
          transition: all 0.2s;
        }
        .btn-play-mystery-word:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79,70,229,0.4);
        }
        .find-choices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }
        .find-choice-card {
          background: #ffffff;
          border-radius: 24px;
          border: 3px solid #e2e8f0;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          min-height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .find-choice-card:hover {
          transform: translateY(-6px);
          border-color: #6366f1;
          box-shadow: 0 10px 24px rgba(99,102,241,0.15);
        }
        .find-choice-card.correct-glow {
          border-color: #22c55e;
          background: #f0fdf4;
          box-shadow: 0 0 0 4px rgba(34,197,94,0.25), 0 8px 24px rgba(34,197,94,0.2);
          transform: translateY(-4px) scale(1.02);
        }
        .find-choice-card.shake-card {
          animation: shakeCardAnim 0.5s ease;
          border-color: #ef4444;
          background: #fef2f2;
        }
        @keyframes shakeCardAnim {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .choice-img-box {
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .find-choice-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .choice-revealed-label {
          margin-top: 10px;
          animation: fadeInPop 0.3s ease;
        }
        .revealed-word {
          display: inline-block;
          background: #22c55e;
          color: #ffffff;
          padding: 4px 14px;
          border-radius: 999px;
          font-size: 1.1rem;
          font-weight: 900;
        }
        .find-feedback-banner {
          padding: 12px 20px;
          border-radius: 16px;
          margin-bottom: 20px;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .correct-banner {
          background: #dcfce7;
          color: #166534;
          border: 1.5px solid #86efac;
        }
        .incorrect-banner {
          background: #fee2e2;
          color: #991b1b;
          border: 1.5px solid #fca5a5;
        }

        /* Screen 4 Match the Word */
        .matching-columns-arena {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        .match-column {
          background: #ffffff;
          border-radius: 24px;
          padding: 20px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
        }
        .match-col-header {
          font-size: 1rem;
          font-weight: 800;
          color: #475569;
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 2px solid #f1f5f9;
        }
        .match-items-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .match-word-card {
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .match-word-card:hover {
          border-color: #38bdf8;
          background: #f0f9ff;
          transform: translateX(3px);
        }
        .match-word-card.selected-card {
          border-color: #0284c7;
          background: #e0f2fe;
          box-shadow: 0 0 0 3px rgba(2,132,199,0.2);
        }
        .match-word-card.matched-card {
          border-color: #22c55e;
          background: #f0fdf4;
          cursor: default;
          opacity: 0.85;
        }
        .match-word-text {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          flex: 1;
        }
        .btn-mini-audio {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.85rem;
        }
        .match-image-card {
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .match-image-card:hover {
          border-color: #ec4899;
          background: #fff5f8;
          transform: translateX(-3px);
        }
        .match-image-card.selected-card {
          border-color: #ec4899;
          background: #fdf2f8;
          box-shadow: 0 0 0 3px rgba(236,72,153,0.2);
        }
        .match-image-card.matched-card {
          border-color: #22c55e;
          background: #f0fdf4;
          cursor: default;
          opacity: 0.85;
        }
        .match-img-thumb {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }
        .match-img-thumb .img-thumb {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .matched-name-label {
          font-size: 1rem;
          font-weight: 800;
          color: #15803d;
          flex: 1;
        }
        .match-status-badge {
          font-size: 1rem;
          font-weight: 900;
          color: #94a3b8;
          margin-left: auto;
        }
        .matched-card .match-status-badge {
          color: #22c55e;
        }

        /* Screen 5 What Did You Learn? (Review Quiz) */
        .quiz-question-box {
          background: #ffffff;
          border-radius: 28px;
          padding: 28px;
          border: 2px solid #f1f5f9;
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
          margin-bottom: 24px;
        }
        .prompt-instruction-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          background: #e0f2fe;
          color: #0369a1;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 8px;
        }
        .quiz-prompt-heading {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 16px;
        }
        .quiz-target-word-banner {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: #fdf2f8;
          border: 2px solid #fbcfe8;
          border-radius: 16px;
          padding: 8px 20px;
          margin-bottom: 20px;
        }
        .target-word-text {
          font-size: 1.8rem;
          font-weight: 900;
          color: #be185d;
        }
        .btn-inline-audio {
          background: #ffffff;
          border: 1.5px solid #ec4899;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.85rem;
          font-weight: 800;
          color: #be185d;
          cursor: pointer;
        }
        .quiz-audio-trigger-box {
          margin: 16px 0 24px;
        }
        .btn-play-quiz-sound {
          background: linear-gradient(135deg, #ec4899, #db2777);
          border: none;
          border-radius: 999px;
          padding: 14px 28px;
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 16px rgba(219,39,119,0.3);
        }
        .quiz-target-illustration-box {
          width: 180px;
          height: 180px;
          margin: 16px auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border-radius: 20px;
          border: 2px solid #e2e8f0;
          padding: 12px;
        }
        .target-illustration-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .quiz-options-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 16px;
        }
        .quiz-img-option-card {
          background: #ffffff;
          border-radius: 20px;
          border: 3px solid #e2e8f0;
          padding: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          min-height: 180px;
        }
        .quiz-img-option-card:hover {
          transform: translateY(-4px);
          border-color: #ec4899;
          box-shadow: 0 8px 20px rgba(236,72,153,0.12);
        }
        .quiz-img-option-card.correct-opt {
          border-color: #22c55e;
          background: #f0fdf4;
          box-shadow: 0 0 0 4px rgba(34,197,94,0.25);
        }
        .quiz-img-option-card.wrong-opt {
          border-color: #ef4444;
          background: #fef2f2;
        }
        .quiz-img-holder {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .quiz-opt-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .quiz-word-options-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 520px;
          margin: 0 auto;
        }
        .quiz-word-option-btn {
          background: #ffffff;
          border: 2.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 14px 22px;
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.2s;
        }
        .quiz-word-option-btn:hover {
          border-color: #ec4899;
          background: #fdf2f8;
          transform: translateY(-2px);
        }
        .quiz-word-option-btn.correct-word-opt {
          border-color: #22c55e;
          background: #f0fdf4;
          color: #15803d;
        }
        .quiz-word-option-btn.wrong-word-opt {
          border-color: #ef4444;
          background: #fef2f2;
          color: #991b1b;
        }
        .quiz-feedback-box {
          padding: 14px 20px;
          border-radius: 16px;
          font-size: 1.05rem;
          font-weight: 800;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .correct-feedback {
          background: #dcfce7;
          border: 1.5px solid #86efac;
          color: #166534;
        }
        .incorrect-feedback {
          background: #fee2e2;
          border: 1.5px solid #fca5a5;
          color: #991b1b;
        }

        /* Results Screen */
        .birthday-results-view {
          text-align: center;
          padding: 20px 0;
        }
        .results-card-container {
          background: #ffffff;
          border-radius: 28px;
          padding: 36px 28px;
          border: 2px solid #fbcfe8;
          box-shadow: 0 12px 36px rgba(236,72,153,0.09);
          max-width: 820px;
          margin: 0 auto;
        }
        .results-trophy-badge {
          font-size: 4rem;
          margin-bottom: 12px;
        }
        .results-heading {
          font-size: 2.2rem;
          font-weight: 900;
          color: #831843;
          margin: 0 0 6px;
        }
        .results-subheading {
          font-size: 1.3rem;
          font-weight: 800;
          color: #db2777;
          margin: 0 0 24px;
        }
        .results-metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          max-width: 500px;
          margin: 0 auto 28px;
        }
        .metric-card {
          padding: 16px;
          border-radius: 20px;
          text-align: center;
        }
        .metric-correct {
          background: #f0fdf4;
          border: 2px solid #86efac;
          color: #15803d;
        }
        .metric-practice {
          background: #fffbeb;
          border: 2px solid #fde68a;
          color: #b45309;
        }
        .metric-num {
          display: block;
          font-size: 1.8rem;
          font-weight: 900;
          margin-bottom: 4px;
        }
        .metric-label {
          font-size: 0.85rem;
          font-weight: 800;
        }
        .results-vocab-summary {
          margin-bottom: 32px;
          text-align: left;
        }
        .summary-title {
          font-size: 1rem;
          font-weight: 800;
          color: #475569;
          margin-bottom: 12px;
        }
        .summary-chips-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .summary-chip {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.88rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .summary-chip:hover {
          border-color: #ec4899;
          background: #fdf2f8;
        }
        .results-actions-row {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        .btn-results-tryagain {
          background: #f8fafc;
          border: 2px solid #cbd5e1;
          border-radius: 999px;
          padding: 14px 32px;
          font-size: 1.1rem;
          font-weight: 800;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-results-tryagain:hover {
          background: #e2e8f0;
        }
        .btn-results-finish {
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          border: none;
          border-radius: 999px;
          padding: 14px 44px;
          font-size: 1.15rem;
          font-weight: 900;
          color: #ffffff;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(219,39,119,0.3);
          transition: all 0.2s;
        }
        .btn-results-finish:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(219,39,119,0.4);
        }

        /* Nav Footer Buttons */
        .birthday-nav-footer {
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }
        .btn-nav-prev {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 999px;
          padding: 10px 22px;
          font-size: 0.95rem;
          font-weight: 800;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-nav-prev:hover {
          background: #f1f5f9;
        }
        .btn-nav-next {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          border: none;
          border-radius: 999px;
          padding: 12px 28px;
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(2,132,199,0.25);
          transition: all 0.2s;
        }
        .btn-nav-next:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(2,132,199,0.35);
        }
        .btn-nav-next.disabled-btn,
        .btn-nav-next:disabled {
          background: #cbd5e1 !0;
          background-color: #cbd5e1 !important;
          color: #64748b !important;
          cursor: not-allowed !important;
          box-shadow: none !important;
          transform: none !important;
        }
        .glow-btn {
          animation: glowPulse 2s infinite;
        }
        @keyframes glowPulse {
          0% { box-shadow: 0 0 0 0 rgba(2,132,199,0.5); }
          70% { box-shadow: 0 0 0 10px rgba(2,132,199,0); }
          100% { box-shadow: 0 0 0 0 rgba(2,132,199,0); }
        }

        /* Responsive Mobile Adjustments */
        @media (max-width: 768px) {
          .matching-columns-arena {
            grid-template-columns: 1fr;
          }
          .quiz-options-grid-3 {
            grid-template-columns: 1fr;
          }
          .vocab-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .welcome-main-title {
            font-size: 1.7rem;
          }
          .birthday-top-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Global Singleton & Expose
  window.toddlersBirthdayModule = new ToddlersBirthdayModule();
  window.renderToddlersBirthdayModule = function (container, engine) {
    window.toddlersBirthdayModule.render(container, engine);
  };
})();
