// BiliKids Writing Practice & Tracing Engine
(() => {
  'use strict';

  // --- Word Bank mapped to ElevenLabs Audio Assets ---
  const WORD_BANKS = {
    1: [
      { word: 'CAT', emoji: '🐱', audio: 'assets/leo/audio/cat.mp3' },
      { word: 'DOG', emoji: '🐶', audio: 'assets/leo/audio/dog.mp3' },
      { word: 'RED', emoji: '🔴', audio: 'assets/audio/red.mp3' },
      { word: 'SUN', emoji: '☀️', audio: null },
      { word: 'CUP', emoji: '🥤', audio: 'assets/luna/audio/cup.mp3' },
      { word: 'BED', emoji: '🛏️', audio: 'assets/luna/audio/bed.mp3' },
      { word: 'PIG', emoji: '🐷', audio: 'assets/leo/audio/pig.mp3' },
      { word: 'COW', emoji: '🐮', audio: 'assets/leo/audio/cow.mp3' },
      { word: 'HEN', emoji: '🐔', audio: 'assets/leo/audio/hen.mp3' },
      { word: 'CAR', emoji: '🚗', audio: 'assets/luna/audio/car.mp3' }
    ],
    2: [
      { word: 'BLUE', emoji: '🔵', audio: 'assets/audio/blue.mp3' },
      { word: 'DUCK', emoji: '🦆', audio: 'assets/leo/audio/duck.mp3' },
      { word: 'BOOK', emoji: '📚', audio: 'assets/luna/audio/book.mp3' },
      { word: 'TREE', emoji: '🌳', audio: 'assets/luna/audio/tree.mp3' },
      { word: 'BALL', emoji: '⚽', audio: 'assets/luna/audio/ball.mp3' },
      { word: 'MILK', emoji: '🥛', audio: 'assets/luna/audio/milk.mp3' },
      { word: 'DOOR', emoji: '🚪', audio: 'assets/luna/audio/door.mp3' },
      { word: 'FORK', emoji: '🍴', audio: 'assets/luna/audio/fork.mp3' },
      { word: 'LAMP', emoji: '💡', audio: 'assets/luna/audio/lamp.mp3' },
      { word: 'BIRD', emoji: '🐦', audio: 'assets/luna/audio/bird.mp3' },
      { word: 'PINK', emoji: '🌸', audio: 'assets/audio/pink.mp3' }
    ],
    3: [
      { word: 'GREEN', emoji: '🟢', audio: 'assets/audio/green.mp3' },
      { word: 'HORSE', emoji: '🐴', audio: 'assets/leo/audio/horse.mp3' },
      { word: 'APPLE', emoji: '🍎', audio: 'assets/luna/audio/apple.mp3' },
      { word: 'SPOON', emoji: '🥄', audio: 'assets/luna/audio/spoon.mp3' },
      { word: 'TRAIN', emoji: '🚂', audio: 'assets/luna/audio/train.mp3' },
      { word: 'TABLE', emoji: (typeof window !== 'undefined' && window.BILIKIDS_ICONS ? window.BILIKIDS_ICONS.TABLE : '🪑'), audio: 'assets/luna/audio/table.mp3' },
      { word: 'PLANT', emoji: '🪴', audio: 'assets/luna/audio/plant.mp3' },
      { word: 'CLOCK', emoji: '⏰', audio: 'assets/luna/audio/clock.mp3' }
    ]
  };

  const CHEER_AUDIOS = [
    'assets/audio/cheer_awesome.mp3',
    'assets/audio/cheer_great_job.mp3',
    'assets/audio/cheer_you_did_it.mp3'
  ];
  const OOPS_AUDIO = 'assets/audio/oops_try_again.mp3';

  // --- State Variables ---
  let currentLevel = 1;
  let wordIndex = 0;
  let currentMode = 'script'; // 'script' | 'cursive'
  let strokeColor = '#1e3a8a';
  let currentTool = 'pen'; // 'pen' | 'eraser'
  let guideVisible = true;
  let starsEarned = 0;
  let isMuted = false;
  let hasFailedAttempt = false;

  // DOM Elements
  const canvas = document.getElementById('writingCanvas');
  const ctx = canvas.getContext('2d');
  const guideCanvas = document.getElementById('guideCanvas');
  const gctx = guideCanvas.getContext('2d');
  const dashedGuideOverlay = document.getElementById('dashedGuideOverlay');
  const guideText = document.getElementById('guideText');

  // Offscreen Mask Canvas for Strict Letter Boundary Blocking
  const maskCanvas = document.createElement('canvas');
  const maskCtx = maskCanvas.getContext('2d');
  let maskData = null;
  const targetWordText = document.getElementById('targetWordText');
  const currentEmoji = document.getElementById('currentEmoji');
  const wordSubHint = document.getElementById('wordSubHint');
  const feedbackBanner = document.getElementById('feedbackBanner');
  const feedbackText = document.getElementById('feedbackText');
  const starsCount = document.getElementById('starsCount');
  const wordRibbon = document.getElementById('wordRibbon');

  const btnPrevWord = document.getElementById('btnPrevWord');
  const btnNextWord = document.getElementById('btnNextWord');
  const btnSpeakWord = document.getElementById('btnSpeakWord');
  const btnModeScript = document.getElementById('btnModeScript');
  const btnModeCursive = document.getElementById('btnModeCursive');
  const btnToolPen = document.getElementById('btnToolPen');
  const btnToolEraser = document.getElementById('btnToolEraser');
  const btnToggleGuide = document.getElementById('btnToggleGuide');
  const btnClearCanvas = document.getElementById('btnClearCanvas');
  const btnCheckWriting = document.getElementById('btnCheckWriting');
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const colorDots = document.querySelectorAll('.color-dot');
  const lvlTabs = document.querySelectorAll('.lvl-tab');

  // Audio Player Cache
  const audioCache = {};

  function playAudioFile(path) {
    if (isMuted || !path) return;
    try {
      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
      if (!audioCache[path]) {
        audioCache[path] = new Audio(path);
      }
      const audio = audioCache[path];
      audio.currentTime = 0;
      audio.play().catch(e => console.log('Audio autoplay prevented:', e));
    } catch (err) {
      console.warn('Audio playback error:', err);
    }
  }

  function playCurrentWordAudio() {
    const list = WORD_BANKS[currentLevel];
    const item = list[wordIndex];
    if (!item) return;
    if (item.audio) {
      playAudioFile(item.audio);
      return;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(item.word.toLowerCase());
      utterance.lang = 'en-US';
      utterance.rate = 0.82;
      window.speechSynthesis.speak(utterance);
    }
  }

  function playRandomCheer() {
    const randomCheer = CHEER_AUDIOS[Math.floor(Math.random() * CHEER_AUDIOS.length)];
    playAudioFile(randomCheer);
  }

  function playOopsAudio() {
    playAudioFile(OOPS_AUDIO);
  }

  // --- Canvas Sizing & High DPI ---
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    if (rect.width === 0 || rect.height === 0) return;
    
    // Save existing drawing data if any
    let tempCanvas = null;
    if (canvas.width > 0 && canvas.height > 0) {
      tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempCanvas.getContext('2d').drawImage(canvas, 0, 0);
    }

    // Resize active drawing canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    // Resize guide canvas (shaded letters + dashed lines)
    guideCanvas.width = rect.width * dpr;
    guideCanvas.height = rect.height * dpr;
    guideCanvas.style.width = rect.width + 'px';
    guideCanvas.style.height = rect.height + 'px';
    gctx.scale(dpr, dpr);

    // Resize offscreen letter boundary mask
    maskCanvas.width = rect.width * dpr;
    maskCanvas.height = rect.height * dpr;

    if (tempCanvas) {
      ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
    }
    setupCanvasContext();
    renderGuideAndMask();
  }

  function setupCanvasContext() {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 36;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 14;
    }
  }

  window.addEventListener('resize', resizeCanvas);

  // --- Render Shaded Letters & Dotted Tracing Guidelines ---
  function renderGuideAndMask() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    if (rect.width === 0 || rect.height === 0) return;

    gctx.clearRect(0, 0, rect.width, rect.height);
    maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);

    const spans = guideText.querySelectorAll('.letter-char');
    if (!spans || spans.length === 0) return;

    // Use computed font from guideText so sizes/styles automatically sync
    const computedStyle = window.getComputedStyle(guideText);
    const font = computedStyle.font || '900 9.5rem "Fredoka One", cursive';

    // Scale mask context with dpr for crisp hardware compositing
    maskCtx.save();
    maskCtx.scale(dpr, dpr);

    spans.forEach(span => {
      const sr = span.getBoundingClientRect();
      const ch = span.textContent.trim();
      const cx = sr.left - rect.left + sr.width / 2;
      const cy = sr.top - rect.top + sr.height / 2;
      const isMissing = span.classList.contains('missing-hint');

      // --- A. Render Shaded Letter & Dotted Lines on Guide Canvas ---
      gctx.save();
      gctx.font = font;
      gctx.textAlign = 'center';
      gctx.textBaseline = 'middle';

      // 1. Shaded letter body ("palabras sombreadas")
      // Warm, gentle slate-blue tint matching preschool tracing workbooks
      gctx.fillStyle = 'rgba(148, 163, 184, 0.28)';
      gctx.strokeStyle = isMissing ? 'rgba(239, 68, 68, 0.45)' : 'rgba(148, 163, 184, 0.38)';
      gctx.lineWidth = isMissing ? 18 : 14;
      gctx.lineJoin = 'round';
      gctx.lineCap = 'round';
      gctx.strokeText(ch, cx, cy);
      gctx.fillText(ch, cx, cy);

      // Subtle letter border outline
      gctx.strokeStyle = isMissing ? '#ef4444' : '#94a3b8';
      gctx.lineWidth = isMissing ? 3 : 1.5;
      gctx.strokeText(ch, cx, cy);

      // 2. Dashed / dotted guideline ("dentro de las letras marca líneas puntuadas")
      // Contrasting dark slate dashed guidelines inside the letter shape
      gctx.strokeStyle = isMissing ? '#dc2626' : '#475569';
      gctx.lineWidth = 3.5;
      gctx.setLineDash([8, 8]);
      gctx.lineCap = 'round';
      gctx.lineJoin = 'round';
      gctx.strokeText(ch, cx, cy);
      gctx.restore();

      // --- B. Render Exact Writing Zone Mask on Offscreen Canvas ---
      maskCtx.save();
      maskCtx.font = font;
      maskCtx.textAlign = 'center';
      maskCtx.textBaseline = 'middle';
      maskCtx.fillStyle = '#ffffff';
      maskCtx.strokeStyle = '#ffffff';
      // Preschool writing tolerance: covers shaded letter body with comfortable ~24px margin
      maskCtx.lineWidth = 26;
      maskCtx.lineJoin = 'round';
      maskCtx.lineCap = 'round';
      maskCtx.strokeText(ch, cx, cy);
      maskCtx.fillText(ch, cx, cy);
      maskCtx.restore();
    });

    maskCtx.restore();

    // Cache typed pixel array for microsecond boundary collision checks
    try {
      maskData = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height).data;
    } catch (e) {
      maskData = null;
    }
  }

  // --- Fast Microsecond Boundary Check ---
  function isInsideAllowedZone(x, y) {
    if (!maskData) return true; // graceful fallback if mask isn't ready
    const dpr = window.devicePixelRatio || 1;
    const px = Math.round(x * dpr);
    const py = Math.round(y * dpr);
    if (px < 0 || px >= maskCanvas.width || py < 0 || py >= maskCanvas.height) return false;
    const idx = (py * maskCanvas.width + px) * 4;
    return maskData[idx + 3] > 18; // alpha channel check
  }

  // Hardware-accelerated compositing to clip any stray ink outside the letters
  function applyMaskClipping() {
    if (!maskCanvas || currentTool === 'eraser') return;
    const rect = canvas.getBoundingClientRect();
    ctx.save();
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(maskCanvas, 0, 0, rect.width, rect.height);
    ctx.restore();
    setupCanvasContext();
  }

  // --- Drawing Interaction with Boundary Blocking ---
  let isDrawing = false;
  let points = [];
  let strokeCount = 0;

  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function startDrawing(e) {
    e.preventDefault();
    const pt = getCanvasCoords(e);

    // Strict Boundary Check: Block writing outside shaded words/letters
    if (currentTool !== 'eraser' && !isInsideAllowedZone(pt.x, pt.y)) {
      isDrawing = false;
      return;
    }

    isDrawing = true;
    points = [pt];
    setupCanvasContext();
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
    applyMaskClipping();
    strokeCount++;
    clearMissingLetterHints();
  }

  function drawMove(e) {
    e.preventDefault();
    const pt = getCanvasCoords(e);
    const inside = isInsideAllowedZone(pt.x, pt.y);

    if (!isDrawing) {
      // If user starts touch outside but drags into the shaded letter:
      if (inside && (e.buttons > 0 || (e.touches && e.touches.length > 0))) {
        isDrawing = true;
        points = [pt];
        setupCanvasContext();
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
        applyMaskClipping();
        strokeCount++;
      }
      return;
    }

    // If writing moved outside the shaded letter: clip immediately and pause stroke
    if (currentTool !== 'eraser' && !inside) {
      if (points.length > 0) {
        points.push(pt);
        renderCurrentStroke();
        applyMaskClipping();
      }
      points = [];
      return;
    }

    points.push(pt);
    renderCurrentStroke();
    applyMaskClipping();
  }

  function renderCurrentStroke() {
    if (points.length < 2) return;
    if (points.length === 2) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      ctx.lineTo(points[1].x, points[1].y);
      ctx.stroke();
      return;
    }

    // Midpoint quadratic interpolation for silky smooth 60fps curves
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 2; i++) {
      const c = (points[i].x + points[i + 1].x) / 2;
      const d = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
    }
    const last = points.length - 1;
    ctx.quadraticCurveTo(points[last - 1].x, points[last - 1].y, points[last].x, points[last].y);
    ctx.stroke();
  }

  function stopDrawing(e) {
    if (!isDrawing) return;
    try { e.preventDefault(); } catch (err) {}
    isDrawing = false;
    points = [];
    applyMaskClipping();
  }

  canvas.addEventListener('pointerdown', startDrawing);
  canvas.addEventListener('pointermove', drawMove);
  canvas.addEventListener('pointerup', stopDrawing);
  canvas.addEventListener('pointercancel', stopDrawing);
  canvas.addEventListener('pointerleave', stopDrawing);

  // --- Clear missing letter pulsing hints ---
  function clearMissingLetterHints() {
    const chars = guideText.querySelectorAll('.letter-char');
    let changed = false;
    chars.forEach(c => {
      if (c.classList.contains('missing-hint')) {
        c.classList.remove('missing-hint');
        changed = true;
      }
    });
    if (changed) renderGuideAndMask();
  }

  // --- Word Loading and Display ---
  function loadCurrentWord() {
    const list = WORD_BANKS[currentLevel];
    if (wordIndex >= list.length) wordIndex = 0;
    if (wordIndex < 0) wordIndex = list.length - 1;

    const item = list[wordIndex];
    hasFailedAttempt = false;

    // Display Word
    const displayWord = currentMode === 'cursive' ? item.word.toLowerCase() : item.word;
    targetWordText.textContent = displayWord;
    targetWordText.className = currentMode === 'cursive' ? 'target-word cursive-mode' : 'target-word';

    // Render guide text as individual letter spans for precise positional validation
    guideText.className = currentMode === 'cursive' ? 'guide-text cursive-guide' : 'guide-text script-guide';
    guideText.innerHTML = displayWord.split('').map((ch, idx) => 
      `<span class="letter-char" data-idx="${idx}" data-char="${ch}">${ch}</span>`
    ).join('');

    currentEmoji.innerHTML = item.emoji;
    wordSubHint.textContent = `Write '${item.word}' with your finger or stylus!`;

    // Keep pronunciation available; use browser speech synthesis when no recording exists.
    btnSpeakWord.style.opacity = '1';
    btnSpeakWord.style.pointerEvents = 'auto';
    btnSpeakWord.title = item.audio ? 'Hear Word Audio' : 'Hear word pronunciation';

    // Clear Canvas for new word
    clearDrawingCanvas();
    updateGuideVisibility();
    updateFeedbackMessage('✏️ Write the word on the lines below!', 'normal');
    renderWordRibbon();

    // Render shaded letters and dotted guidelines after DOM layout updates
    requestAnimationFrame(() => {
      renderGuideAndMask();
    });

    // Auto-pronounce word
    setTimeout(() => {
      playCurrentWordAudio();
    }, 200);
  }

  function clearDrawingCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, rect.width * dpr, rect.height * dpr);
    strokeCount = 0;
    clearMissingLetterHints();
  }

  function updateGuideVisibility() {
    if (guideVisible) {
      guideCanvas.classList.remove('hidden');
      btnToggleGuide.classList.add('active');
    } else {
      guideCanvas.classList.add('hidden');
      btnToggleGuide.classList.remove('active');
    }
  }

  function updateFeedbackMessage(text, type = 'normal') {
    feedbackText.textContent = text;
    feedbackBanner.className = `feedback-banner ${type}`;
  }

  // --- Quick Word Ribbon ---
  function renderWordRibbon() {
    wordRibbon.innerHTML = '';
    const list = WORD_BANKS[currentLevel];
    list.forEach((item, idx) => {
      const chip = document.createElement('button');
      chip.className = `ribbon-chip ${idx === wordIndex ? 'active' : ''}`;
      chip.innerHTML = `${item.emoji} <span>${item.word}</span>`;
      chip.addEventListener('click', () => {
        wordIndex = idx;
        loadCurrentWord();
      });
      wordRibbon.appendChild(chip);
    });
  }

  // --- Alphabet Waypoint Models for Preschool Handwriting Recognition ---
  const LETTER_MODELS = {
    'A': {
      pts: [[0.22, 0.88], [0.36, 0.52], [0.50, 0.16], [0.64, 0.52], [0.78, 0.88], [0.34, 0.58], [0.66, 0.58]],
      minHits: 4
    },
    'B': {
      pts: [[0.24, 0.14], [0.24, 0.50], [0.24, 0.86], [0.52, 0.14], [0.74, 0.30], [0.50, 0.50], [0.76, 0.70], [0.52, 0.86]],
      minHits: 4
    },
    'C': {
      pts: [[0.82, 0.22], [0.55, 0.14], [0.24, 0.26], [0.18, 0.50], [0.24, 0.74], [0.55, 0.86], [0.82, 0.78]],
      minHits: 4
    },
    'D': {
      pts: [[0.24, 0.14], [0.24, 0.50], [0.24, 0.86], [0.54, 0.14], [0.80, 0.50], [0.54, 0.86]],
      minHits: 4
    },
    'E': {
      pts: [[0.24, 0.14], [0.24, 0.50], [0.24, 0.86], [0.76, 0.14], [0.64, 0.50], [0.76, 0.86]],
      minHits: 4
    },
    'F': {
      pts: [[0.24, 0.14], [0.24, 0.50], [0.24, 0.86], [0.76, 0.14], [0.64, 0.50]],
      minHits: 3
    },
    'G': {
      pts: [[0.82, 0.22], [0.55, 0.14], [0.24, 0.26], [0.18, 0.50], [0.24, 0.74], [0.55, 0.86], [0.82, 0.78], [0.82, 0.54], [0.55, 0.54]],
      minHits: 4
    },
    'H': {
      pts: [[0.22, 0.14], [0.22, 0.50], [0.22, 0.86], [0.78, 0.14], [0.78, 0.50], [0.78, 0.86], [0.40, 0.50], [0.60, 0.50]],
      minHits: 4
    },
    'I': {
      pts: [[0.50, 0.16], [0.50, 0.50], [0.50, 0.86], [0.30, 0.16], [0.70, 0.16], [0.30, 0.86], [0.70, 0.86]],
      minHits: 3
    },
    'J': {
      pts: [[0.74, 0.16], [0.74, 0.54], [0.64, 0.82], [0.38, 0.86], [0.22, 0.68]],
      minHits: 3
    },
    'K': {
      pts: [[0.24, 0.14], [0.24, 0.50], [0.24, 0.86], [0.76, 0.18], [0.46, 0.50], [0.76, 0.84]],
      minHits: 4
    },
    'L': {
      pts: [[0.24, 0.14], [0.24, 0.50], [0.24, 0.86], [0.52, 0.86], [0.80, 0.86]],
      minHits: 3
    },
    'M': {
      pts: [[0.18, 0.86], [0.18, 0.16], [0.50, 0.60], [0.82, 0.16], [0.82, 0.86]],
      minHits: 4
    },
    'N': {
      pts: [[0.20, 0.86], [0.20, 0.16], [0.50, 0.50], [0.80, 0.86], [0.80, 0.16]],
      minHits: 4
    },
    'O': {
      pts: [[0.50, 0.14], [0.24, 0.30], [0.18, 0.50], [0.24, 0.72], [0.50, 0.86], [0.76, 0.72], [0.82, 0.50], [0.76, 0.30]],
      minHits: 4
    },
    'P': {
      pts: [[0.24, 0.14], [0.24, 0.50], [0.24, 0.86], [0.54, 0.14], [0.78, 0.30], [0.54, 0.50]],
      minHits: 4
    },
    'Q': {
      pts: [[0.50, 0.14], [0.22, 0.50], [0.50, 0.86], [0.78, 0.50], [0.65, 0.72], [0.85, 0.90]],
      minHits: 4
    },
    'R': {
      pts: [[0.24, 0.14], [0.24, 0.50], [0.24, 0.86], [0.54, 0.14], [0.78, 0.30], [0.54, 0.50], [0.78, 0.86]],
      minHits: 4
    },
    'S': {
      pts: [[0.78, 0.22], [0.50, 0.14], [0.24, 0.28], [0.50, 0.50], [0.76, 0.72], [0.50, 0.86], [0.22, 0.78]],
      minHits: 4
    },
    'T': {
      pts: [[0.15, 0.16], [0.50, 0.16], [0.85, 0.16], [0.50, 0.40], [0.50, 0.65], [0.50, 0.88]],
      minHits: 4
    },
    'U': {
      pts: [[0.22, 0.16], [0.22, 0.60], [0.35, 0.84], [0.50, 0.88], [0.65, 0.84], [0.78, 0.60], [0.78, 0.16]],
      minHits: 4
    },
    'V': {
      pts: [[0.20, 0.16], [0.35, 0.55], [0.50, 0.88], [0.65, 0.55], [0.80, 0.16]],
      minHits: 3
    },
    'W': {
      pts: [[0.16, 0.16], [0.28, 0.86], [0.50, 0.45], [0.72, 0.86], [0.84, 0.16]],
      minHits: 4
    },
    'X': {
      pts: [[0.22, 0.16], [0.50, 0.50], [0.78, 0.86], [0.78, 0.16], [0.22, 0.86]],
      minHits: 4
    },
    'Y': {
      pts: [[0.22, 0.16], [0.50, 0.50], [0.78, 0.16], [0.50, 0.70], [0.50, 0.88]],
      minHits: 3
    },
    'Z': {
      pts: [[0.22, 0.16], [0.78, 0.16], [0.50, 0.50], [0.22, 0.86], [0.78, 0.86]],
      minHits: 4
    }
  };

  // --- Lowercase Cursive Waypoint Models (Calibrated for Caveat / Connected Script) ---
  const CURSIVE_MODELS = {
    'a': { pts: [[0.70, 0.35], [0.40, 0.35], [0.25, 0.55], [0.45, 0.78], [0.75, 0.78], [0.75, 0.45], [0.75, 0.82]], minHits: 4 },
    'b': { pts: [[0.35, 0.18], [0.35, 0.55], [0.35, 0.82], [0.65, 0.55], [0.75, 0.70], [0.55, 0.82]], minHits: 4 },
    'c': { pts: [[0.75, 0.35], [0.45, 0.32], [0.25, 0.52], [0.35, 0.76], [0.75, 0.78]], minHits: 3 },
    'd': { pts: [[0.70, 0.18], [0.70, 0.50], [0.70, 0.82], [0.45, 0.40], [0.25, 0.60], [0.45, 0.80]], minHits: 4 },
    'e': { pts: [[0.30, 0.55], [0.70, 0.45], [0.45, 0.35], [0.25, 0.55], [0.55, 0.78]], minHits: 3 },
    'f': { pts: [[0.60, 0.18], [0.45, 0.45], [0.40, 0.85], [0.25, 0.45], [0.65, 0.45]], minHits: 3 },
    'g': { pts: [[0.70, 0.35], [0.40, 0.35], [0.25, 0.55], [0.65, 0.75], [0.70, 0.40], [0.70, 0.88], [0.45, 0.98]], minHits: 4 },
    'h': { pts: [[0.30, 0.18], [0.30, 0.55], [0.30, 0.82], [0.55, 0.42], [0.70, 0.60], [0.70, 0.82]], minHits: 4 },
    'i': { pts: [[0.50, 0.25], [0.50, 0.45], [0.50, 0.78], [0.65, 0.78]], minHits: 3 },
    'j': { pts: [[0.60, 0.25], [0.60, 0.55], [0.60, 0.88], [0.35, 0.98]], minHits: 3 },
    'k': { pts: [[0.30, 0.18], [0.30, 0.55], [0.30, 0.82], [0.65, 0.45], [0.45, 0.60], [0.70, 0.82]], minHits: 4 },
    'l': { pts: [[0.45, 0.18], [0.45, 0.55], [0.45, 0.80], [0.65, 0.80]], minHits: 3 },
    'm': { pts: [[0.20, 0.45], [0.20, 0.78], [0.45, 0.42], [0.45, 0.78], [0.75, 0.42], [0.75, 0.78]], minHits: 4 },
    'n': { pts: [[0.25, 0.45], [0.25, 0.78], [0.55, 0.42], [0.75, 0.60], [0.75, 0.78]], minHits: 3 },
    'o': { pts: [[0.50, 0.35], [0.25, 0.55], [0.50, 0.78], [0.75, 0.55]], minHits: 3 },
    'p': { pts: [[0.30, 0.40], [0.30, 0.88], [0.55, 0.40], [0.75, 0.55], [0.55, 0.72]], minHits: 3 },
    'q': { pts: [[0.70, 0.35], [0.40, 0.35], [0.25, 0.55], [0.65, 0.75], [0.70, 0.40], [0.70, 0.88], [0.85, 0.95]], minHits: 4 },
    'r': { pts: [[0.30, 0.45], [0.30, 0.78], [0.55, 0.38], [0.75, 0.48]], minHits: 3 },
    's': { pts: [[0.45, 0.38], [0.65, 0.50], [0.35, 0.65], [0.60, 0.78]], minHits: 3 },
    't': { pts: [[0.50, 0.20], [0.50, 0.50], [0.50, 0.80], [0.70, 0.80], [0.25, 0.38], [0.75, 0.38]], minHits: 4 },
    'u': { pts: [[0.25, 0.42], [0.25, 0.75], [0.50, 0.80], [0.75, 0.50], [0.75, 0.80]], minHits: 3 },
    'v': { pts: [[0.25, 0.42], [0.50, 0.80], [0.75, 0.42]], minHits: 2 },
    'w': { pts: [[0.20, 0.42], [0.35, 0.80], [0.50, 0.55], [0.65, 0.80], [0.80, 0.42]], minHits: 3 },
    'x': { pts: [[0.25, 0.42], [0.50, 0.60], [0.75, 0.78], [0.75, 0.42], [0.25, 0.78]], minHits: 3 },
    'y': { pts: [[0.25, 0.42], [0.45, 0.75], [0.70, 0.42], [0.70, 0.78], [0.50, 0.95]], minHits: 3 },
    'z': { pts: [[0.30, 0.42], [0.70, 0.42], [0.40, 0.65], [0.65, 0.80]], minHits: 3 }
  };

  // --- Multi-Criteria Handwriting Validation Algorithm (Waypoint Shape Conformity) ---
  function validateHandwriting() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width;
    const h = canvas.height;

    // 1. Must have drawn at least one stroke
    if (strokeCount < 1) {
      updateFeedbackMessage('⚠️ Write the word before checking! ✏️', 'error');
      playOopsAudio();
      return;
    }

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    // Total drawn ink count
    let totalDrawnPixels = 0;
    for (let i = 3; i < data.length; i += 16) {
      if (data[i] > 40) totalDrawnPixels++;
    }

    const minInkRequired = 30 * dpr;
    if (totalDrawnPixels < minInkRequired) {
      updateFeedbackMessage('✏️ Keep writing! The word needs more strokes.', 'error');
      triggerNeedsImprovement(null);
      return;
    }

    // 2. Measure each letter span & evaluate waypoints
    const list = WORD_BANKS[currentLevel];
    const currentWord = list[wordIndex].word;
    const letterSpans = guideText.querySelectorAll('.letter-char');
    const numLetters = letterSpans.length;

    let validLetterCount = 0;
    let firstMissingChar = null;
    let firstMissingSpan = null;

    letterSpans.forEach((span, idx) => {
      const spanRect = span.getBoundingClientRect();
      const charRaw = (span.dataset.char || span.textContent.trim());
      const charStr = charRaw.toUpperCase();
      let model;
      if (currentMode === 'cursive' && CURSIVE_MODELS[charRaw.toLowerCase()]) {
        model = CURSIVE_MODELS[charRaw.toLowerCase()];
      } else {
        model = LETTER_MODELS[charStr] || LETTER_MODELS['C'];
      }

      const boxX = spanRect.left - rect.left;
      const boxY = spanRect.top - rect.top;
      const boxW = spanRect.width;
      const boxH = spanRect.height;

      // Waypoint hit check:
      // Search radius R = 20 CSS pixels (scaled by dpr for retina)
      const R = Math.round(20 * dpr);
      let hitCount = 0;

      model.pts.forEach(([nx, ny]) => {
        const tx = Math.round((boxX + nx * boxW) * dpr);
        const ty = Math.round((boxY + ny * boxH) * dpr);
        let found = false;

        for (let dy = -R; dy <= R && !found; dy += 3) {
          for (let dx = -R; dx <= R && !found; dx += 3) {
            if (dx * dx + dy * dy <= R * R) {
              const px = tx + dx, py = ty + dy;
              if (px >= 0 && px < w && py >= 0 && py < h) {
                if (data[(py * w + px) * 4 + 3] > 40) {
                  found = true;
                }
              }
            }
          }
        }
        if (found) hitCount++;
      });

      // Letter ink density & stroke presence:
      // Prevents solid block scribbles while ensuring child drew actual strokes
      let letterInkPixels = 0;
      let totalLetterSamples = 0;
      const pad = 10;
      const startX = Math.max(0, Math.floor(boxX - pad));
      const endX = Math.min(rect.width, Math.ceil(boxX + boxW + pad));
      const startY = Math.max(0, Math.floor(boxY - pad));
      const endY = Math.min(rect.height, Math.ceil(boxY + boxH + pad));

      for (let y = startY; y < endY; y += 4) {
        for (let x = startX; x < endX; x += 4) {
          totalLetterSamples++;
          const idx = (Math.round(y * dpr) * w + Math.round(x * dpr)) * 4;
          if (data[idx + 3] > 40) {
            letterInkPixels++;
          }
        }
      }

      const letterDensity = totalLetterSamples > 0 ? (letterInkPixels / totalLetterSamples) : 0;
      const minInkNeeded = 18; // At least ~18 sampled points (prevents empty taps)
      const minHits = model.minHits || Math.max(3, Math.floor(model.pts.length * 0.55));
      const isCharValid = (hitCount >= minHits) && (letterDensity < 0.58) && (letterInkPixels >= minInkNeeded);

      if (isCharValid) {
        validLetterCount++;
      } else if (!firstMissingChar) {
        firstMissingChar = charStr;
        firstMissingSpan = span;
      }
    });

    // 3. Out-Of-Bounds Check:
    // Determine whether user drew heavily outside the entire word area
    const firstSpanRect = letterSpans[0].getBoundingClientRect();
    const lastSpanRect = letterSpans[letterSpans.length - 1].getBoundingClientRect();
    const totalWordLeft = Math.max(0, (firstSpanRect.left - rect.left) * dpr - 50 * dpr);
    const totalWordRight = Math.min(w, (lastSpanRect.right - rect.left) * dpr + 50 * dpr);
    const totalWordTop = Math.max(0, (firstSpanRect.top - rect.top) * dpr - 60 * dpr);
    const totalWordBottom = Math.min(h, (firstSpanRect.bottom - rect.top) * dpr + 60 * dpr);

    let outOfBoundsInk = 0;
    let totalSampledInk = 0;
    for (let y = 0; y < h; y += 4) {
      for (let x = 0; x < w; x += 4) {
        const idx = (y * w + x) * 4;
        if (data[idx + 3] > 40) {
          totalSampledInk++;
          if (x < totalWordLeft || x > totalWordRight || y < totalWordTop || y > totalWordBottom) {
            outOfBoundsInk++;
          }
        }
      }
    }

    const outOfBoundsRatio = totalSampledInk > 0 ? (outOfBoundsInk / totalSampledInk) : 0;
    if (outOfBoundsRatio > 0.45) {
      updateFeedbackMessage('💡 Try to write inside the lines or follow the dashed path!', 'error');
      triggerNeedsImprovement(firstMissingSpan);
      return;
    }

    // 4. Overall Word Validation:
    // For 3-letter words: all 3 letters must be valid (validLetterCount === 3).
    // For 4-letter words: at least 3 letters must be valid (validLetterCount >= 3).
    // For 5-letter words: at least 4 letters must be valid (validLetterCount >= 4).
    const requiredLetters = numLetters <= 3 ? numLetters : Math.max(3, numLetters - 1);
    const isWordComplete = validLetterCount >= requiredLetters;

    if (isWordComplete) {
      clearMissingLetterHints();
      triggerSuccess();
    } else {
      if (firstMissingChar) {
        updateFeedbackMessage(`Almost! Write the letter '${firstMissingChar.toUpperCase()}' along the path! ✏️`, 'error');
      } else {
        updateFeedbackMessage('Follow the dashed guide lines to finish the word!', 'error');
      }
      triggerNeedsImprovement(firstMissingSpan);
    }
  }

  function triggerSuccess() {
    starsEarned++;
    starsCount.textContent = starsEarned;
    updateFeedbackMessage('🎉 EXCELLENT JOB! You wrote it! ⭐', 'success');
    
    playRandomCheer();
    launchCelebrationConfetti();

    // Advance automatically to the next word after 1.8 seconds!
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % WORD_BANKS[currentLevel].length;
      loadCurrentWord();
    }, 1800);
  }

  function triggerNeedsImprovement(missingSpan = null) {
    hasFailedAttempt = true;
    guideVisible = true;
    updateGuideVisibility();

    // Highlight the missing letter to assist the child
    clearMissingLetterHints();
    if (missingSpan) {
      missingSpan.classList.add('missing-hint');
    }
    renderGuideAndMask();

    playOopsAudio();
  }

  // --- Confetti Animation ---
  const confettiCanvas = document.getElementById('confettiCanvas');
  const confCtx = confettiCanvas.getContext('2d');
  let confettiParticles = [];
  let confettiAnimId = null;

  function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeConfettiCanvas);
  resizeConfettiCanvas();

  function launchCelebrationConfetti() {
    cancelAnimationFrame(confettiAnimId);
    confettiParticles = [];
    const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    
    for (let i = 0; i < 90; i++) {
      confettiParticles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 14 - 4,
        size: 7 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    animateConfetti();
  }

  function animateConfetti() {
    confCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = false;

    confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotSpeed;
      p.alpha -= 0.012;

      if (p.alpha > 0) {
        alive = true;
        confCtx.save();
        confCtx.globalAlpha = p.alpha;
        confCtx.translate(p.x, p.y);
        confCtx.rotate((p.rotation * Math.PI) / 180);
        confCtx.fillStyle = p.color;
        confCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        confCtx.restore();
      }
    });

    if (alive) {
      confettiAnimId = requestAnimationFrame(animateConfetti);
    } else {
      confCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  // --- UI Event Listeners ---
  btnPrevWord.addEventListener('click', () => {
    wordIndex--;
    loadCurrentWord();
  });

  btnNextWord.addEventListener('click', () => {
    wordIndex++;
    loadCurrentWord();
  });

  btnSpeakWord.addEventListener('click', () => {
    playCurrentWordAudio();
  });

  btnCheckWriting.addEventListener('click', () => {
    validateHandwriting();
  });

  btnClearCanvas.addEventListener('click', () => {
    clearDrawingCanvas();
    updateFeedbackMessage('🧹 Canvas cleared! Ready to write.', 'normal');
  });

  btnToggleGuide.addEventListener('click', () => {
    guideVisible = !guideVisible;
    updateGuideVisibility();
  });

  // Mode: Script vs Cursive
  btnModeScript.addEventListener('click', () => {
    currentMode = 'script';
    btnModeScript.classList.add('active');
    btnModeCursive.classList.remove('active');
    loadCurrentWord();
  });

  btnModeCursive.addEventListener('click', () => {
    currentMode = 'cursive';
    btnModeCursive.classList.add('active');
    btnModeScript.classList.remove('active');
    loadCurrentWord();
  });

  // Level Tabs
  lvlTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      lvlTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentLevel = parseInt(tab.dataset.level, 10);
      wordIndex = 0;
      loadCurrentWord();
    });
  });

  // Tools: Pen vs Eraser
  btnToolPen.addEventListener('click', () => {
    currentTool = 'pen';
    btnToolPen.classList.add('active');
    btnToolEraser.classList.remove('active');
    setupCanvasContext();
  });

  btnToolEraser.addEventListener('click', () => {
    currentTool = 'eraser';
    btnToolEraser.classList.add('active');
    btnToolPen.classList.remove('active');
    setupCanvasContext();
  });

  // Color Swatches
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      strokeColor = dot.dataset.color;
      currentTool = 'pen';
      btnToolPen.classList.add('active');
      btnToolEraser.classList.remove('active');
      setupCanvasContext();
    });
  });

  // Sound Toggle
  btnSoundToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    soundIcon.textContent = isMuted ? '🔇' : '🔊';
  });

  // Fullscreen
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // --- Initial Setup ---
  const initApp = () => {
    resizeCanvas();
    loadCurrentWord();
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(initApp);
  } else {
    setTimeout(initApp, 150);
  }

})();
