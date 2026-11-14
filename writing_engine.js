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
    if (item.audio) {
      playAudioFile(item.audio);
    } else {
      speakWordTTS(item.word);
    }
  }

  function speakWordTTS(word) {
    if (isMuted || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('TTS error:', e);
    }
  }

  function playRandomCheer() {
    const cheer = CHEER_AUDIOS[Math.floor(Math.random() * CHEER_AUDIOS.length)];
    playAudioFile(cheer);
  }

  function playOopsAudio() {
    playAudioFile(OOPS_AUDIO);
  }

  // --- Dynamic Canvas Resolution Calibration ---
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
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Resize guide canvas (shaded letters + dashed lines)
    guideCanvas.width = rect.width * dpr;
    guideCanvas.height = rect.height * dpr;
    guideCanvas.style.width = rect.width + 'px';
    guideCanvas.style.height = rect.height + 'px';
    gctx.setTransform(dpr, 0, 0, dpr, 0, 0);

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

  // --- Complete Alphabet Stroke Definitions for Inner Centerline Guidelines ---
  const LETTER_STROKES = {
    'A': [[[0.50, 0.12], [0.22, 0.88]], [[0.50, 0.12], [0.78, 0.88]], [[0.32, 0.60], [0.68, 0.60]]],
    'B': [[[0.26, 0.14], [0.26, 0.86]], [[0.26, 0.14], [0.55, 0.14], [0.74, 0.26], [0.74, 0.46], [0.52, 0.50], [0.26, 0.50]], [[0.26, 0.50], [0.58, 0.50], [0.76, 0.60], [0.76, 0.74], [0.58, 0.86], [0.26, 0.86]]],
    'C': [[[0.78, 0.22], [0.50, 0.12], [0.22, 0.26], [0.18, 0.50], [0.22, 0.74], [0.50, 0.88], [0.78, 0.78]]],
    'D': [[[0.26, 0.14], [0.26, 0.86]], [[0.26, 0.14], [0.54, 0.14], [0.78, 0.32], [0.78, 0.68], [0.54, 0.86], [0.26, 0.86]]],
    'E': [[[0.26, 0.14], [0.26, 0.86]], [[0.26, 0.14], [0.74, 0.14]], [[0.26, 0.50], [0.66, 0.50]], [[0.26, 0.86], [0.74, 0.86]]],
    'F': [[[0.26, 0.14], [0.26, 0.86]], [[0.26, 0.14], [0.74, 0.14]], [[0.26, 0.50], [0.64, 0.50]]],
    'G': [[[0.78, 0.22], [0.50, 0.12], [0.22, 0.26], [0.18, 0.50], [0.22, 0.74], [0.50, 0.88], [0.78, 0.78], [0.78, 0.52], [0.52, 0.52]]],
    'H': [[[0.24, 0.14], [0.24, 0.86]], [[0.76, 0.14], [0.76, 0.86]], [[0.24, 0.50], [0.76, 0.50]]],
    'I': [[[0.50, 0.14], [0.50, 0.86]], [[0.30, 0.14], [0.70, 0.14]], [[0.30, 0.86], [0.70, 0.86]]],
    'J': [[[0.72, 0.14], [0.72, 0.68], [0.62, 0.84], [0.44, 0.86], [0.26, 0.72]]],
    'K': [[[0.26, 0.14], [0.26, 0.86]], [[0.74, 0.14], [0.28, 0.52]], [[0.40, 0.46], [0.74, 0.86]]],
    'L': [[[0.26, 0.14], [0.26, 0.86]], [[0.26, 0.86], [0.76, 0.86]]],
    'M': [[[0.20, 0.86], [0.20, 0.14]], [[0.20, 0.14], [0.50, 0.62]], [[0.50, 0.62], [0.80, 0.14]], [[0.80, 0.14], [0.80, 0.86]]],
    'N': [[[0.22, 0.86], [0.22, 0.14]], [[0.22, 0.14], [0.78, 0.86]], [[0.78, 0.86], [0.78, 0.14]]],
    'O': [[[0.50, 0.12], [0.26, 0.26], [0.18, 0.50], [0.26, 0.74], [0.50, 0.88], [0.74, 0.74], [0.82, 0.50], [0.74, 0.26], [0.50, 0.12]]],
    'P': [[[0.26, 0.14], [0.26, 0.86]], [[0.26, 0.14], [0.55, 0.14], [0.76, 0.26], [0.76, 0.46], [0.55, 0.52], [0.26, 0.52]]],
    'Q': [[[0.50, 0.12], [0.26, 0.26], [0.18, 0.50], [0.26, 0.74], [0.50, 0.88], [0.74, 0.74], [0.82, 0.50], [0.74, 0.26], [0.50, 0.12]], [[0.60, 0.68], [0.84, 0.88]]],
    'R': [[[0.26, 0.14], [0.26, 0.86]], [[0.26, 0.14], [0.55, 0.14], [0.76, 0.26], [0.76, 0.46], [0.55, 0.52], [0.26, 0.52]], [[0.52, 0.52], [0.76, 0.86]]],
    'S': [[[0.74, 0.24], [0.52, 0.14], [0.28, 0.24], [0.26, 0.38], [0.46, 0.48], [0.68, 0.54], [0.74, 0.68], [0.66, 0.80], [0.48, 0.86], [0.26, 0.78]]],
    'T': [[[0.16, 0.14], [0.84, 0.14]], [[0.50, 0.14], [0.50, 0.86]]],
    'U': [[[0.24, 0.14], [0.24, 0.66], [0.34, 0.84], [0.50, 0.86], [0.66, 0.84], [0.76, 0.66], [0.76, 0.14]]],
    'V': [[[0.22, 0.14], [0.50, 0.86]], [[0.50, 0.86], [0.78, 0.14]]],
    'W': [[[0.16, 0.14], [0.28, 0.86]], [[0.28, 0.86], [0.50, 0.44]], [[0.50, 0.44], [0.72, 0.86]], [[0.72, 0.86], [0.84, 0.14]]],
    'X': [[[0.22, 0.14], [0.78, 0.86]], [[0.78, 0.14], [0.22, 0.86]]],
    'Y': [[[0.22, 0.14], [0.50, 0.50]], [[0.78, 0.14], [0.50, 0.50]], [[0.50, 0.50], [0.50, 0.86]]],
    'Z': [[[0.24, 0.14], [0.76, 0.14], [0.24, 0.86], [0.76, 0.86]]]
  };

  const CURSIVE_STROKES = {
    'a': [[[0.70, 0.38], [0.45, 0.38], [0.28, 0.55], [0.45, 0.78], [0.72, 0.78]], [[0.72, 0.38], [0.72, 0.82]]],
    'b': [[[0.32, 0.14], [0.32, 0.82]], [[0.32, 0.55], [0.55, 0.55], [0.72, 0.68], [0.55, 0.82], [0.32, 0.82]]],
    'c': [[[0.75, 0.35], [0.45, 0.32], [0.28, 0.52], [0.38, 0.76], [0.75, 0.76]]],
    'd': [[[0.68, 0.14], [0.68, 0.82]], [[0.68, 0.45], [0.45, 0.42], [0.26, 0.60], [0.45, 0.82], [0.68, 0.82]]],
    'e': [[[0.28, 0.58], [0.72, 0.46], [0.50, 0.35], [0.28, 0.55], [0.52, 0.78], [0.72, 0.74]]],
    'f': [[[0.62, 0.14], [0.44, 0.40], [0.40, 0.86]], [[0.25, 0.46], [0.65, 0.46]]],
    'g': [[[0.68, 0.36], [0.42, 0.36], [0.26, 0.55], [0.45, 0.75], [0.68, 0.75]], [[0.68, 0.36], [0.68, 0.92], [0.42, 0.98]]],
    'h': [[[0.30, 0.14], [0.30, 0.82]], [[0.30, 0.50], [0.54, 0.42], [0.72, 0.58], [0.72, 0.82]]],
    'i': [[[0.50, 0.36], [0.50, 0.78], [0.68, 0.78]], [[0.50, 0.18], [0.50, 0.22]]],
    'j': [[[0.58, 0.36], [0.58, 0.90], [0.36, 0.98]], [[0.58, 0.18], [0.58, 0.22]]],
    'k': [[[0.30, 0.14], [0.30, 0.82]], [[0.68, 0.42], [0.32, 0.60]], [[0.44, 0.56], [0.70, 0.82]]],
    'l': [[[0.46, 0.14], [0.46, 0.78], [0.66, 0.80]]],
    'm': [[[0.20, 0.45], [0.20, 0.80]], [[0.20, 0.52], [0.46, 0.42], [0.46, 0.80]], [[0.46, 0.52], [0.74, 0.42], [0.74, 0.80]]],
    'n': [[[0.26, 0.45], [0.26, 0.80]], [[0.26, 0.52], [0.55, 0.42], [0.74, 0.58], [0.74, 0.80]]],
    'o': [[[0.50, 0.36], [0.26, 0.55], [0.50, 0.78], [0.74, 0.55], [0.50, 0.36]]],
    'p': [[[0.30, 0.36], [0.30, 0.92]], [[0.30, 0.42], [0.54, 0.38], [0.74, 0.55], [0.54, 0.72], [0.30, 0.72]]],
    'q': [[[0.68, 0.36], [0.42, 0.36], [0.26, 0.55], [0.45, 0.75], [0.68, 0.75]], [[0.68, 0.36], [0.68, 0.92], [0.82, 0.90]]],
    'r': [[[0.28, 0.44], [0.28, 0.80]], [[0.28, 0.50], [0.52, 0.38], [0.72, 0.46]]],
    's': [[[0.46, 0.38], [0.68, 0.48], [0.34, 0.64], [0.62, 0.78]]],
    't': [[[0.50, 0.18], [0.50, 0.80], [0.68, 0.80]], [[0.28, 0.40], [0.72, 0.40]]],
    'u': [[[0.26, 0.42], [0.26, 0.74], [0.48, 0.80], [0.70, 0.74]], [[0.70, 0.42], [0.70, 0.80]]],
    'v': [[[0.24, 0.42], [0.48, 0.80]], [[0.48, 0.80], [0.74, 0.42]]],
    'w': [[[0.18, 0.42], [0.32, 0.80]], [[0.32, 0.80], [0.50, 0.56]], [[0.50, 0.56], [0.66, 0.80]], [[0.66, 0.80], [0.80, 0.42]]],
    'x': [[[0.26, 0.42], [0.74, 0.80]], [[0.74, 0.42], [0.26, 0.80]]],
    'y': [[[0.26, 0.42], [0.46, 0.75]], [[0.68, 0.42], [0.68, 0.86], [0.46, 0.96]]],
    'z': [[[0.30, 0.42], [0.70, 0.42], [0.38, 0.66], [0.68, 0.80]]]
  };

  function getLetterStrokes(ch, mode) {
    if (mode === 'cursive') {
      const lower = ch.toLowerCase();
      if (CURSIVE_STROKES[lower]) return CURSIVE_STROKES[lower];
    }
    const upper = ch.toUpperCase();
    return LETTER_STROKES[upper] || null;
  }

  // --- Render Shaded Letters & Dotted Tracing Guidelines ---
  function renderGuideAndMask() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    if (rect.width === 0 || rect.height === 0) return;

    gctx.clearRect(0, 0, rect.width, rect.height);

    const spans = guideText.querySelectorAll('.letter-char');
    if (!spans || spans.length === 0) return;

    // Use computed font from guideText so sizes/styles automatically sync
    const computedStyle = window.getComputedStyle(guideText);
    const font = computedStyle.font || '900 9.5rem "Fredoka One", cursive';

    spans.forEach(span => {
      const sr = span.getBoundingClientRect();
      const ch = span.textContent.trim();
      const cx = sr.left - rect.left + sr.width / 2;
      const cy = sr.top - rect.top + sr.height / 2;
      const isMissing = span.classList.contains('missing-hint');

      // --- A. Render Shaded Letter Body on Guide Canvas ---
      gctx.save();
      gctx.font = font;
      gctx.textAlign = 'center';
      gctx.textBaseline = 'middle';

      // 1. Shaded letter body ("palabras sombreadas")
      gctx.fillStyle = isMissing ? 'rgba(254, 202, 202, 0.75)' : 'rgba(226, 232, 240, 0.70)';
      gctx.strokeStyle = isMissing ? '#f87171' : 'rgba(148, 163, 184, 0.40)';
      gctx.lineWidth = isMissing ? 2.5 : 1.5;
      gctx.lineJoin = 'round';
      gctx.lineCap = 'round';
      gctx.fillText(ch, cx, cy);
      gctx.strokeText(ch, cx, cy);

      // Measure exact glyph bounding box for perfect centerline stroke placement
      const m = gctx.measureText(ch);
      const glyphLeft = (m.actualBoundingBoxLeft !== undefined)
        ? (cx - m.actualBoundingBoxLeft)
        : (sr.left - rect.left);
      const glyphTop = (m.actualBoundingBoxAscent !== undefined)
        ? (cy - m.actualBoundingBoxAscent)
        : (sr.top - rect.top);
      const glyphW = (m.actualBoundingBoxLeft !== undefined && m.actualBoundingBoxRight !== undefined)
        ? (m.actualBoundingBoxLeft + m.actualBoundingBoxRight)
        : sr.width;
      const glyphH = (m.actualBoundingBoxAscent !== undefined && m.actualBoundingBoxDescent !== undefined)
        ? (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent)
        : sr.height;

      // 2. Dashed centerline guidelines INSIDE the letter shape (Visual Tracing Guide)
      const strokes = getLetterStrokes(ch, currentMode);
      if (strokes && strokes.length > 0) {
        gctx.strokeStyle = isMissing ? '#dc2626' : '#334155';
        gctx.lineWidth = 4;
        gctx.setLineDash([7, 7]);
        gctx.lineCap = 'round';
        gctx.lineJoin = 'round';

        strokes.forEach(stroke => {
          if (!stroke || stroke.length < 2) return;
          gctx.beginPath();
          stroke.forEach((pt, pIdx) => {
            const px = glyphLeft + pt[0] * glyphW;
            const py = glyphTop + pt[1] * glyphH;
            if (pIdx === 0) gctx.moveTo(px, py);
            else gctx.lineTo(px, py);
          });
          gctx.stroke();

          // Green starting dot to indicate where to start tracing
          const startPt = stroke[0];
          const spx = glyphLeft + startPt[0] * glyphW;
          const spy = glyphTop + startPt[1] * glyphH;
          gctx.save();
          gctx.setLineDash([]);
          gctx.fillStyle = isMissing ? '#ef4444' : '#10b981';
          gctx.beginPath();
          gctx.arc(spx, spy, 4, 0, Math.PI * 2);
          gctx.fill();
          gctx.restore();
        });
      }

      gctx.restore();
    });
  }

  // --- Ultra-Fast, Zero-Latency Instant Drawing Engine ---
  let isDrawing = false;
  let strokeCount = 0;
  let lastX = 0;
  let lastY = 0;
  let lastMidX = 0;
  let lastMidY = 0;
  let activePointerId = null;

  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    let clientX = e.clientX;
    let clientY = e.clientY;
    if (clientX === undefined && e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }
    return {
      x: (clientX !== undefined ? clientX : 0) - rect.left,
      y: (clientY !== undefined ? clientY : 0) - rect.top
    };
  }

  function startDrawing(e) {
    e.preventDefault();
    isDrawing = true;
    activePointerId = (e.pointerId !== undefined) ? e.pointerId : null;
    if (activePointerId !== null && canvas.setPointerCapture) {
      try { canvas.setPointerCapture(activePointerId); } catch (err) {}
    }

    const pt = getCanvasCoords(e);
    lastX = pt.x;
    lastY = pt.y;
    lastMidX = pt.x;
    lastMidY = pt.y;

    setupCanvasContext();
    // Instant initial dot feedback with zero lag
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = (currentTool === 'eraser') ? 'rgba(0,0,0,1)' : strokeColor;
    ctx.fill();

    strokeCount++;
    clearMissingLetterHints();
  }

  function drawMove(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pt = getCanvasCoords(e);

    // Incremental O(1) midpoint quadratic curve for instantaneous 120fps response
    const midX = (lastX + pt.x) / 2;
    const midY = (lastY + pt.y) / 2;

    ctx.beginPath();
    ctx.moveTo(lastMidX, lastMidY);
    ctx.quadraticCurveTo(lastX, lastY, midX, midY);
    ctx.stroke();

    lastX = pt.x;
    lastY = pt.y;
    lastMidX = midX;
    lastMidY = midY;
  }

  function stopDrawing(e) {
    if (!isDrawing) return;
    try { e.preventDefault(); } catch (err) {}

    if (activePointerId !== null && canvas.releasePointerCapture) {
      try { canvas.releasePointerCapture(activePointerId); } catch (err) {}
    }
    activePointerId = null;

    if (lastMidX !== lastX || lastMidY !== lastY) {
      ctx.beginPath();
      ctx.moveTo(lastMidX, lastMidY);
      ctx.lineTo(lastX, lastY);
      ctx.stroke();
    }

    isDrawing = false;
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
    updateFeedbackMessage('✏️ ¡Traza la palabra sobre las letras sombreadas!', 'normal');
    renderWordRibbon();

    // Render shaded letters, dotted guidelines and boundary mask
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

  // --- Stroke Checkpoint Sampling & Spatial Validation Helpers ---
  function sampleStrokeCheckpoints(strokes, glyphLeft, glyphTop, glyphW, glyphH, step = 10) {
    const strokeGroups = [];
    strokes.forEach(stroke => {
      const pts = [];
      for (let i = 0; i < stroke.length - 1; i++) {
        const x1 = glyphLeft + stroke[i][0] * glyphW;
        const y1 = glyphTop + stroke[i][1] * glyphH;
        const x2 = glyphLeft + stroke[i + 1][0] * glyphW;
        const y2 = glyphTop + stroke[i + 1][1] * glyphH;
        const dist = Math.hypot(x2 - x1, y2 - y1);
        const steps = Math.max(2, Math.floor(dist / step));
        for (let s = 0; s < steps; s++) {
          const t = s / steps;
          pts.push({ x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t });
        }
      }
      pts.push({
        x: glyphLeft + stroke[stroke.length - 1][0] * glyphW,
        y: glyphTop + stroke[stroke.length - 1][1] * glyphH
      });
      strokeGroups.push(pts);
    });
    return strokeGroups;
  }

  function hasInkNear(data, w, h, sx, sy, dpr, radiusCss) {
    const cx = Math.round(sx * dpr);
    const cy = Math.round(sy * dpr);
    const r = Math.round(radiusCss * dpr);
    const r2 = r * r;

    const minX = Math.max(0, cx - r);
    const maxX = Math.min(w - 1, cx + r);
    const minY = Math.max(0, cy - r);
    const maxY = Math.min(h - 1, cy + r);

    for (let y = minY; y <= maxY; y += 3) {
      const dy = y - cy;
      const dy2 = dy * dy;
      for (let x = minX; x <= maxX; x += 3) {
        const dx = x - cx;
        if (dx * dx + dy2 <= r2) {
          const idx = (y * w + x) * 4;
          if (data[idx + 3] > 35) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function getLetterInkStats(data, w, h, boxX, boxY, boxW, boxH, dpr) {
    const pad = 12;
    const startX = Math.max(0, Math.floor((boxX - pad) * dpr));
    const endX = Math.min(w, Math.ceil((boxX + boxW + pad) * dpr));
    const startY = Math.max(0, Math.floor((boxY - pad) * dpr));
    const endY = Math.min(h, Math.ceil((boxY + boxH + pad) * dpr));

    let inkCount = 0;
    let minX = endX, maxX = startX, minY = endY, maxY = startY;

    for (let y = startY; y < endY; y += 3) {
      for (let x = startX; x < endX; x += 3) {
        const idx = (y * w + x) * 4;
        if (data[idx + 3] > 35) {
          inkCount++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    const spanW = (inkCount > 0 && boxW > 0) ? (maxX - minX) / (boxW * dpr) : 0;
    const spanH = (inkCount > 0 && boxH > 0) ? (maxY - minY) / (boxH * dpr) : 0;

    return { inkCount, spanW, spanH };
  }

  // --- Friendly Preschool Handwriting Validation Algorithm ---
  // The dashed line is a visual guide, not a rigid force majeure.
  // We verify that the child traced inside each letter of the shaded word,
  // without skipping letters or doing flat horizontal swipes.
  function validateHandwriting() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width;
    const h = canvas.height;

    // 1. Must have drawn at least one stroke
    if (strokeCount < 1) {
      updateFeedbackMessage('✏️ ¡Escribe la palabra con tu dedo o lápiz antes de comprobar!', 'error');
      playOopsAudio();
      return;
    }

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    // Total drawn ink count
    let totalDrawnPixels = 0;
    for (let i = 3; i < data.length; i += 16) {
      if (data[i] > 35) totalDrawnPixels++;
    }

    if (totalDrawnPixels < 1) {
      updateFeedbackMessage('✏️ ¡Escribe la palabra con tu dedo o lápiz antes de comprobar!', 'error');
      playOopsAudio();
      return;
    }

    // 2. Measure each letter span & evaluate natural child tracing
    const letterSpans = guideText.querySelectorAll('.letter-char');
    const numLetters = letterSpans.length;
    if (numLetters === 0) {
      updateFeedbackMessage('✏️ ¡Escribe la palabra con tu dedo o lápiz antes de comprobar!', 'error');
      playOopsAudio();
      return;
    }

    const computedStyle = window.getComputedStyle(guideText);
    const font = computedStyle.font || '900 9.5rem "Fredoka One", cursive';

    let validLetterCount = 0;
    let firstMissingChar = null;
    let firstMissingSpan = null;

    letterSpans.forEach((span, idx) => {
      const sr = span.getBoundingClientRect();
      const ch = span.textContent.trim();
      const cx = sr.left - rect.left + sr.width / 2;
      const cy = sr.top - rect.top + sr.height / 2;

      ctx.save();
      ctx.font = font;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const m = ctx.measureText(ch);
      ctx.restore();

      const glyphLeft = (m.actualBoundingBoxLeft !== undefined)
        ? (cx - m.actualBoundingBoxLeft)
        : (sr.left - rect.left);
      const glyphTop = (m.actualBoundingBoxAscent !== undefined)
        ? (cy - m.actualBoundingBoxAscent)
        : (sr.top - rect.top);
      const glyphW = (m.actualBoundingBoxLeft !== undefined && m.actualBoundingBoxRight !== undefined)
        ? (m.actualBoundingBoxLeft + m.actualBoundingBoxRight)
        : sr.width;
      const glyphH = (m.actualBoundingBoxAscent !== undefined && m.actualBoundingBoxDescent !== undefined)
        ? (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent)
        : sr.height;

      // Ink density and spatial distribution inside this letter zone
      const stats = getLetterInkStats(data, w, h, glyphLeft, glyphTop, glyphW, glyphH, dpr);

      // Preschool-friendly letter formation validation:
      // Rejects single dots, taps or flat line swipes,
      // while welcoming real, natural (slightly wobbly) child handwriting.
      const isNarrow = ['I', '1', 'L', 'i', 'l', 'j', 't'].includes(ch);
      const minInkNeeded = 25 * dpr;
      const hasEnoughInk = stats.inkCount >= minInkNeeded;
      const hasVerticalPresence = stats.spanH >= 0.28;
      const hasHorizontalPresence = isNarrow ? true : (stats.spanW >= 0.20);

      const strokes = getLetterStrokes(ch, currentMode);
      let overallCov = 1.0;
      if (strokes && strokes.length > 0) {
        const strokeGroups = sampleStrokeCheckpoints(strokes, glyphLeft, glyphTop, glyphW, glyphH, 10);
        const radiusCss = 26; // generous proximity for preschool motor skills
        let totalPts = 0;
        let totalHits = 0;
        strokeGroups.forEach(sPts => {
          sPts.forEach(pt => {
            if (hasInkNear(data, w, h, pt.x, pt.y, dpr, radiusCss)) {
              totalHits++;
            }
          });
          totalPts += sPts.length;
        });
        overallCov = totalPts > 0 ? (totalHits / totalPts) : 0;
      }

      const isCharValid = hasEnoughInk && hasVerticalPresence && hasHorizontalPresence && (overallCov >= 0.30);

      if (isCharValid) {
        validLetterCount++;
      } else if (!firstMissingChar) {
        firstMissingChar = ch;
        firstMissingSpan = span;
      }
    });

    // 3. Overall Word Validation: ALL letters of the word must have been traced!
    const isWordComplete = (validLetterCount === numLetters);

    if (isWordComplete) {
      clearMissingLetterHints();
      triggerSuccess();
    } else {
      if (firstMissingChar) {
        updateFeedbackMessage(`✏️ ¡Casi listo! Traza la letra '${firstMissingChar.toUpperCase()}' para completar la palabra.`, 'error');
      } else {
        updateFeedbackMessage('✏️ Escribe todas las letras de la palabra para completarla.', 'error');
      }
      triggerNeedsImprovement(firstMissingSpan);
    }
  }

  function triggerSuccess() {
    starsEarned++;
    starsCount.textContent = starsEarned;
    updateFeedbackMessage('🎉 ¡EXCELENTE! ¡Escribiste la palabra genial! ⭐', 'success');
    
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
    updateFeedbackMessage('🧹 ¡Pizarra limpia! Listo para escribir.', 'normal');
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

  initApp();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      resizeCanvas();
      renderGuideAndMask();
    });
  }

})();
