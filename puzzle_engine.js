/**
 * BILIKIDS JIGSAW PUZZLE ADVENTURE ENGINE
 * Multi-difficulty (Babies 2x2, Toddlers 3x3, Kids 4x4)
 * Authentic Jigsaw Shapes, Sound Synthesis & Star Rewards System
 */

// ============================================================================
// AUDIO SYNTHESIZER & SOUND CONTROLLER (Web Audio API + Speech)
// ============================================================================
class PuzzleAudio {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  playGrab() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.08);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch(e) {}
  }

  playSnap() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      // 1. Crisp metallic click
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(1300, now + 0.12);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);

      // 2. High chime bell
      const bell = this.ctx.createOscillator();
      const bellGain = this.ctx.createGain();
      bell.type = 'sine';
      bell.frequency.setValueAtTime(1046.50, now + 0.03); // C6
      bellGain.gain.setValueAtTime(0.25, now + 0.03);
      bellGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      bell.connect(bellGain);
      bellGain.connect(this.ctx.destination);
      bell.start(now + 0.03);
      bell.stop(now + 0.25);
    } catch(e) {}
  }

  playWrong() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.18);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch(e) {}
  }

  playHint() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.2);
      });
    } catch(e) {}
  }

  playFanfare() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const melody = [
        { f: 523.25, t: 0, d: 0.14 },    // C5
        { f: 659.25, t: 0.14, d: 0.14 }, // E5
        { f: 783.99, t: 0.28, d: 0.18 }, // G5
        { f: 1046.50, t: 0.46, d: 0.50 } // C6
      ];
      melody.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = n.f;
        gain.gain.setValueAtTime(0.3, now + n.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + n.t);
        osc.stop(now + n.t + n.d);
      });
    } catch(e) {}
  }

  speak(text) {
    if (!this.soundEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'en-US';
      utt.rate = 0.92;
      utt.pitch = 1.25;
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google')))
                   || voices.find(v => v.lang.startsWith('en'));
      if (enVoice) utt.voice = enVoice;
      window.speechSynthesis.speak(utt);
    } catch(e) {}
  }
}

const audio = new PuzzleAudio();

// ============================================================================
// PUZZLE CATALOG SPECIFICATION (13 HIGH-QUALITY ILLUSTRATIONS)
// Includes the 3 featured puzzles from the category cards!
// ============================================================================
const PUZZLE_CATALOG = [
  {
    id: 'cute_bear',
    title: 'Cute Teddy Bear',
    emoji: '🧸',
    image: 'assets/puzzles/cute_bear.jpg',
    thumb: 'assets/puzzles/cute_bear_thumb.jpg'
  },
  {
    id: 'cute_elephant',
    title: 'Baby Elephant',
    emoji: '🐘',
    image: 'assets/puzzles/cute_elephant.jpg',
    thumb: 'assets/puzzles/cute_elephant_thumb.jpg'
  },
  {
    id: 'volcano_landscape',
    title: 'Mountain Adventure',
    emoji: '🌋',
    image: 'assets/puzzles/volcano_landscape.jpg',
    thumb: 'assets/puzzles/volcano_landscape_thumb.jpg'
  },
  {
    id: 'bili_magic',
    title: "Bili's Magic Kingdom",
    emoji: '🏰',
    image: 'assets/puzzles/bili_magic.jpg',
    thumb: 'assets/puzzles/bili_magic_thumb.jpg'
  },
  {
    id: 'safari_party',
    title: 'Safari Celebration',
    emoji: '🦒',
    image: 'assets/puzzles/safari_party.jpg',
    thumb: 'assets/puzzles/safari_party_thumb.jpg'
  },
  {
    id: 'rainbow_world',
    title: 'Rainbow Wonderland',
    emoji: '🌈',
    image: 'assets/puzzles/rainbow_world.jpg',
    thumb: 'assets/puzzles/rainbow_world_thumb.jpg'
  },
  {
    id: 'leo_farm',
    title: 'Leo the Lion Cub',
    emoji: '🦁',
    image: 'assets/puzzles/leo_farm.jpg',
    thumb: 'assets/puzzles/leo_farm_thumb.jpg'
  },
  {
    id: 'luna_home',
    title: "Luna's Cozy House",
    emoji: '🐱',
    image: 'assets/puzzles/luna_home.jpg',
    thumb: 'assets/puzzles/luna_home_thumb.jpg'
  },
  {
    id: 'friends_picnic',
    title: 'Friends Sunny Picnic',
    emoji: '🧺',
    image: 'assets/puzzles/friends_picnic.jpg',
    thumb: 'assets/puzzles/friends_picnic_thumb.jpg'
  },
  {
    id: 'ocean_blue',
    title: 'Blue Ocean Friends',
    emoji: '🐬',
    image: 'assets/puzzles/ocean_blue.jpg',
    thumb: 'assets/puzzles/ocean_blue_thumb.jpg'
  },
  {
    id: 'tall_giraffe',
    title: 'Gentle Giraffe',
    emoji: '🌿',
    image: 'assets/puzzles/tall_giraffe.jpg',
    thumb: 'assets/puzzles/tall_giraffe_thumb.jpg'
  },
  {
    id: 'barnaby_bear',
    title: "Barnaby's Forest",
    emoji: '🧸',
    image: 'assets/puzzles/barnaby_bear.jpg',
    thumb: 'assets/puzzles/barnaby_bear_thumb.jpg'
  },
  {
    id: 'bunny_pip',
    title: 'Little Bunny Pip',
    emoji: '🐰',
    image: 'assets/puzzles/bunny_pip.jpg',
    thumb: 'assets/puzzles/bunny_pip_thumb.jpg'
  }
];

// Difficulty Configurations
const DIFFICULTY_CONFIG = {
  babies: {
    name: 'Babies',
    rows: 2,
    cols: 2,
    totalPieces: 4,
    points: 100,
    subtitle: 'Babies • 2x2 Easy (4 Pieces)',
    defaultGhost: true,
    snapRadius: 60,
    praise: 'Awesome! You solved the puzzle! You earned 100 stars!'
  },
  toddlers: {
    name: 'Toddlers',
    rows: 3,
    cols: 3,
    totalPieces: 9,
    points: 250,
    subtitle: 'Toddlers • 3x3 Medium (9 Pieces)',
    defaultGhost: false,
    snapRadius: 45,
    praise: 'Fantastic job! Puzzle completed! You earned 250 stars!'
  },
  kids: {
    name: 'Kids',
    rows: 4,
    cols: 4,
    totalPieces: 16,
    points: 500,
    subtitle: 'Kids • 4x4 Hard (16 Pieces)',
    defaultGhost: false,
    snapRadius: 36,
    praise: 'Brilliant! Master puzzler! You earned 500 stars!'
  }
};

// ============================================================================
// MAIN JIGSAW PUZZLE CONTROLLER
// ============================================================================
class JigsawGame {
  constructor() {
    this.currentMode = 'babies';
    this.currentPuzzleIdx = 0;
    this.loadedImage = null;

    this.boardSize = 480; // Default board size in CSS pixels
    this.pieces = [];     // Array of piece objects
    this.placedCount = 0;
    this.selectedPiece = null; // For tap-to-place on touch/mouse

    this.timer = null;
    this.secondsElapsed = 0;
    this.moves = 0;
    this.isGhostVisible = true;
    this.isWon = false;

    // Drag tracking
    this.activeDragPiece = null;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;

    this.init();
  }

  init() {
    this.parseURLParams();
    this.setupStarsCounter();
    this.renderGallery();
    this.setupEventListeners();
    this.setMode(this.currentMode, false);
  }

  parseURLParams() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode && DIFFICULTY_CONFIG[mode.toLowerCase()]) {
      this.currentMode = mode.toLowerCase();
    }

    // Configure matching featured puzzle index per mode
    if (this.currentMode === 'babies') {
      this.currentPuzzleIdx = 0; // Cute Teddy Bear
    } else if (this.currentMode === 'toddlers') {
      this.currentPuzzleIdx = 1; // Baby Elephant
    } else if (this.currentMode === 'kids') {
      this.currentPuzzleIdx = 2; // Mountain Adventure
    }

    // Configure Back button destination
    const backBtn = document.getElementById('backBtn');
    const backLabel = document.getElementById('backBtnLabel');
    if (this.currentMode === 'babies') {
      backBtn.href = 'babies.html';
      backLabel.textContent = 'Babies';
    } else if (this.currentMode === 'toddlers') {
      backBtn.href = 'toddlers.html';
      backLabel.textContent = 'Toddlers';
    } else if (this.currentMode === 'kids') {
      backBtn.href = 'kids.html';
      backLabel.textContent = 'Kids';
    } else {
      backBtn.href = 'index.html';
      backLabel.textContent = 'Home';
    }
  }

  setupStarsCounter() {
    const stars = parseInt(localStorage.getItem('bilikids_stars') || '120', 10);
    const el = document.getElementById('starsCount');
    if (el) el.textContent = stars;
  }

  addStars(amount) {
    const current = parseInt(localStorage.getItem('bilikids_stars') || '120', 10);
    const updated = current + amount;
    localStorage.setItem('bilikids_stars', updated.toString());

    // Animate counter roll
    const el = document.getElementById('starsCount');
    if (!el) return;
    let step = current;
    const increment = Math.ceil(amount / 20);
    const timer = setInterval(() => {
      step += increment;
      if (step >= updated) {
        step = updated;
        clearInterval(timer);
      }
      el.textContent = step;
    }, 40);
  }

  setMode(mode, restart = true) {
    this.currentMode = mode;
    const cfg = DIFFICULTY_CONFIG[mode];

    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    document.getElementById('modeSubtitle').textContent = cfg.subtitle;
    this.isGhostVisible = cfg.defaultGhost;
    this.updateGhostVisibility();

    if (restart) {
      audio.playGrab();
    }
    this.loadPuzzle(this.currentPuzzleIdx);
  }

  renderGallery() {
    const container = document.getElementById('galleryCarousel');
    if (!container) return;
    container.innerHTML = '';

    PUZZLE_CATALOG.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = `gallery-card ${idx === this.currentPuzzleIdx ? 'active' : ''}`;
      card.dataset.index = idx;

      card.innerHTML = `
        <div class="gallery-thumb-box">
          <img src="${p.thumb}" alt="${p.title}" class="gallery-thumb-img">
        </div>
        <span class="gallery-card-label">${p.title}</span>
      `;

      card.addEventListener('click', () => {
        this.selectPuzzle(idx);
      });

      container.appendChild(card);
    });
  }

  selectPuzzle(idx) {
    this.currentPuzzleIdx = idx;
    document.querySelectorAll('.gallery-card').forEach((c, i) => {
      c.classList.toggle('active', i === idx);
    });
    audio.playGrab();
    this.loadPuzzle(idx);
  }

  loadPuzzle(idx) {
    this.stopTimer();
    this.secondsElapsed = 0;
    this.moves = 0;
    this.placedCount = 0;
    this.selectedPiece = null;
    this.isWon = false;
    this.updateStatsDisplay();

    const puzzle = PUZZLE_CATALOG[idx];
    document.getElementById('puzzleIcon').textContent = puzzle.emoji;
    document.getElementById('puzzleTitle').textContent = puzzle.title;

    // Load image
    const img = new Image();
    img.onload = () => {
      this.loadedImage = img;
      document.getElementById('ghostImage').src = puzzle.image;
      this.generatePuzzlePieces();
      this.startTimer();
    };
    img.src = puzzle.image;
  }

  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => {
      this.secondsElapsed++;
      this.updateStatsDisplay();
    }, 1000);
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  updateStatsDisplay() {
    const mins = Math.floor(this.secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (this.secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${mins}:${secs}`;
    document.getElementById('movesDisplay').textContent = `Moves: ${this.moves}`;

    const cfg = DIFFICULTY_CONFIG[this.currentMode];
    document.getElementById('progressDisplay').textContent = `${this.placedCount} / ${cfg.totalPieces} placed`;
  }

  updateGhostVisibility() {
    const ghost = document.getElementById('ghostImage');
    const hintBtn = document.getElementById('hintBtn');
    if (!ghost) return;

    if (this.isGhostVisible) {
      ghost.classList.add('show-hint');
      ghost.classList.remove('hide-hint');
      if (hintBtn) hintBtn.classList.add('active');
    } else {
      ghost.classList.remove('show-hint');
      ghost.classList.add('hide-hint');
      if (hintBtn) hintBtn.classList.remove('active');
    }
  }

  // ============================================================================
  // JIGSAW PIECE SLICING & CANVAS GENERATION
  // ============================================================================
  generatePuzzlePieces() {
    const board = document.getElementById('puzzleBoard');
    const gridOverlay = document.getElementById('gridOverlay');
    const tray = document.getElementById('piecesTray');

    // Remove existing placed pieces from board
    board.querySelectorAll('.placed-piece').forEach(p => p.remove());
    gridOverlay.innerHTML = '';
    tray.innerHTML = '';

    const rect = board.getBoundingClientRect();
    this.boardSize = rect.width || 480;

    const cfg = DIFFICULTY_CONFIG[this.currentMode];
    const rows = cfg.rows;
    const cols = cfg.cols;
    const pieceW = this.boardSize / cols;
    const pieceH = this.boardSize / rows;

    // Grid Overlay Setup
    gridOverlay.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridOverlay.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const slot = document.createElement('div');
        slot.className = 'slot-cell';
        slot.dataset.row = r;
        slot.dataset.col = c;
        slot.dataset.slotId = `${r}_${c}`;

        // Tap-to-place slot click listener
        slot.addEventListener('click', () => {
          this.handleSlotClick(r, c);
        });

        gridOverlay.appendChild(slot);
      }
    }

    // Generate interlocking tab directions
    // Internal horizontal borders (between row r and r+1): +1 or -1
    const hTabs = [];
    for (let r = 0; r < rows - 1; r++) {
      hTabs[r] = [];
      for (let c = 0; c < cols; c++) {
        hTabs[r][c] = Math.random() < 0.5 ? 1 : -1;
      }
    }

    // Internal vertical borders (between col c and c+1): +1 or -1
    const vTabs = [];
    for (let r = 0; r < rows; r++) {
      vTabs[r] = [];
      for (let c = 0; c < cols - 1; c++) {
        vTabs[r][c] = Math.random() < 0.5 ? 1 : -1;
      }
    }

    this.pieces = [];
    const tabRatio = 0.22; // Knob size relative to piece size
    const tabSizeX = pieceW * tabRatio;
    const tabSizeY = pieceH * tabRatio;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const edges = {
          top: r === 0 ? 0 : -hTabs[r - 1][c],
          right: c === cols - 1 ? 0 : vTabs[r][c],
          bottom: r === rows - 1 ? 0 : hTabs[r][c],
          left: c === 0 ? 0 : -vTabs[r][c - 1]
        };

        const pieceCanvas = this.createPieceCanvas(r, c, pieceW, pieceH, edges, tabSizeX, tabSizeY);
        pieceCanvas.dataset.row = r;
        pieceCanvas.dataset.col = c;
        pieceCanvas.dataset.id = `${r}_${c}`;

        const pieceObj = {
          id: `${r}_${c}`,
          row: r,
          col: c,
          canvas: pieceCanvas,
          isPlaced: false,
          edges,
          w: pieceW,
          h: pieceH,
          tabX: tabSizeX,
          tabY: tabSizeY
        };

        this.attachPieceInteractions(pieceCanvas, pieceObj);
        this.pieces.push(pieceObj);
      }
    }

    // Shuffle pieces in the tray
    const shuffled = [...this.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach(p => tray.appendChild(p.canvas));
  }

  createPieceCanvas(r, c, w, h, edges, tx, ty) {
    const canvas = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1;

    // Total canvas width and height including margins for tabs
    const padX = tx * 1.5;
    const padY = ty * 1.5;
    const totalW = w + padX * 2;
    const totalH = h + padY * 2;

    canvas.width = Math.round(totalW * dpr);
    canvas.height = Math.round(totalH * dpr);
    canvas.style.width = `${totalW}px`;
    canvas.style.height = `${totalH}px`;
    canvas.className = 'jigsaw-piece-canvas';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Build Jigsaw Edge Path
    ctx.save();
    ctx.beginPath();

    // Start top-left corner
    const x0 = padX;
    const y0 = padY;
    ctx.moveTo(x0, y0);

    // 1. Top Edge (to right)
    this.drawJigsawEdge(ctx, x0, y0, x0 + w, y0, edges.top, ty, true);

    // 2. Right Edge (to bottom)
    this.drawJigsawEdge(ctx, x0 + w, y0, x0 + w, y0 + h, edges.right, tx, false);

    // 3. Bottom Edge (to left)
    this.drawJigsawEdge(ctx, x0 + w, y0 + h, x0, y0 + h, edges.bottom, ty, true);

    // 4. Left Edge (to top)
    this.drawJigsawEdge(ctx, x0, y0 + h, x0, y0, edges.left, tx, false);

    ctx.closePath();

    // Clip to piece shape
    ctx.clip();

    // Draw portion of source image
    // Map board coordinate (c*w, r*h) to canvas coordinate (x0, y0)
    const imgX = (c * w) - x0;
    const imgY = (r * h) - y0;
    ctx.drawImage(this.loadedImage, -imgX, -imgY, this.boardSize, this.boardSize);

    // Stroke 3D bevel / shine outline
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.strokeStyle = 'rgba(15, 23, 42, 0.25)';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    ctx.restore();

    return canvas;
  }

  drawJigsawEdge(ctx, x1, y1, x2, y2, tabDir, tabDepth, isHorizontal) {
    if (tabDir === 0) {
      // Flat outer border
      ctx.lineTo(x2, y2);
      return;
    }

    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);

    // Normalized direction vectors
    const ux = dx / len;
    const uy = dy / len;

    // Normal vector perpendicular to edge (pointing outward if tabDir > 0)
    const nx = -uy * tabDir;
    const ny = ux * tabDir;

    // Classic omega puzzle knob bezier points
    const p1x = x1 + ux * (len * 0.35);
    const p1y = y1 + uy * (len * 0.35);

    const k1x = x1 + ux * (len * 0.38) + nx * (tabDepth * 0.2);
    const k1y = y1 + uy * (len * 0.38) + ny * (tabDepth * 0.2);

    const headLeftX = x1 + ux * (len * 0.32) + nx * (tabDepth * 1.0);
    const headLeftY = y1 + uy * (len * 0.32) + ny * (tabDepth * 1.0);

    const headTopX = x1 + ux * (len * 0.5) + nx * (tabDepth * 1.15);
    const headTopY = y1 + uy * (len * 0.5) + ny * (tabDepth * 1.15);

    const headRightX = x1 + ux * (len * 0.68) + nx * (tabDepth * 1.0);
    const headRightY = y1 + uy * (len * 0.68) + ny * (tabDepth * 1.0);

    const k2x = x1 + ux * (len * 0.62) + nx * (tabDepth * 0.2);
    const k2y = y1 + uy * (len * 0.62) + ny * (tabDepth * 0.2);

    const p2x = x1 + ux * (len * 0.65);
    const p2y = y1 + uy * (len * 0.65);

    // 1. Line to base of knob
    ctx.lineTo(p1x, p1y);
    // 2. Curve into knob head
    ctx.bezierCurveTo(k1x, k1y, headLeftX, headLeftY, headTopX, headTopY);
    // 3. Curve out of knob head
    ctx.bezierCurveTo(headRightX, headRightY, k2x, k2y, p2x, p2y);
    // 4. Line to end
    ctx.lineTo(x2, y2);
  }

  // ============================================================================
  // INTERACTION: DRAG & DROP + TAP TO PLACE
  // ============================================================================
  attachPieceInteractions(canvas, pieceObj) {
    const handleStart = (e) => {
      if (pieceObj.isPlaced) return;
      e.preventDefault();

      audio.playGrab();
      const pointer = e.touches ? e.touches[0] : e;
      const rect = canvas.getBoundingClientRect();

      this.activeDragPiece = pieceObj;
      this.dragOffsetX = pointer.clientX - rect.left;
      this.dragOffsetY = pointer.clientY - rect.top;

      // Select piece for tap-to-place
      this.selectPieceForTap(pieceObj);

      // Start drag ghost
      const ghost = document.getElementById('dragGhost');
      ghost.innerHTML = '';
      const clone = canvas.cloneNode(true);
      clone.style.width = canvas.style.width;
      clone.style.height = canvas.style.height;
      ghost.appendChild(clone);
      ghost.style.display = 'block';
      ghost.style.left = `${pointer.clientX}px`;
      ghost.style.top = `${pointer.clientY}px`;

      canvas.style.opacity = '0.35';
    };

    canvas.addEventListener('mousedown', handleStart);
    canvas.addEventListener('touchstart', handleStart, { passive: false });
  }

  selectPieceForTap(pieceObj) {
    if (this.selectedPiece === pieceObj) {
      // Toggle off
      this.selectedPiece = null;
      document.querySelectorAll('.jigsaw-piece-canvas').forEach(c => c.classList.remove('selected'));
      document.querySelectorAll('.slot-cell').forEach(s => s.classList.remove('target-hint'));
      return;
    }

    this.selectedPiece = pieceObj;
    document.querySelectorAll('.jigsaw-piece-canvas').forEach(c => {
      c.classList.toggle('selected', c === pieceObj.canvas);
    });

    // In Babies mode, gently highlight target slot
    if (this.currentMode === 'babies') {
      document.querySelectorAll('.slot-cell').forEach(s => {
        s.classList.toggle('target-hint', s.dataset.slotId === pieceObj.id);
      });
    }
  }

  handleSlotClick(r, c) {
    if (!this.selectedPiece || this.selectedPiece.isPlaced) return;

    this.moves++;
    this.updateStatsDisplay();

    // Check if selected piece matches this slot
    if (this.selectedPiece.row === r && this.selectedPiece.col === c) {
      this.snapPieceIntoPlace(this.selectedPiece);
      this.selectedPiece = null;
      document.querySelectorAll('.slot-cell').forEach(s => s.classList.remove('target-hint'));
    } else {
      audio.playWrong();
    }
  }

  setupEventListeners() {
    const ghost = document.getElementById('dragGhost');

    const handlePointerMove = (e) => {
      if (!this.activeDragPiece) return;
      e.preventDefault();
      const pointer = e.touches ? e.touches[0] : e;
      ghost.style.left = `${pointer.clientX}px`;
      ghost.style.top = `${pointer.clientY}px`;

      // Check slot hover
      const board = document.getElementById('puzzleBoard');
      const bRect = board.getBoundingClientRect();
      const insideBoard = (
        pointer.clientX >= bRect.left &&
        pointer.clientX <= bRect.right &&
        pointer.clientY >= bRect.top &&
        pointer.clientY <= bRect.bottom
      );

      document.querySelectorAll('.slot-cell').forEach(s => s.classList.remove('drag-over'));
      if (insideBoard) {
        const cfg = DIFFICULTY_CONFIG[this.currentMode];
        const cellW = bRect.width / cfg.cols;
        const cellH = bRect.height / cfg.rows;
        const c = Math.floor((pointer.clientX - bRect.left) / cellW);
        const r = Math.floor((pointer.clientY - bRect.top) / cellH);
        const slotEl = document.querySelector(`.slot-cell[data-slot-id="${r}_${c}"]`);
        if (slotEl) slotEl.classList.add('drag-over');
      }
    };

    const handlePointerEnd = (e) => {
      if (!this.activeDragPiece) return;
      const piece = this.activeDragPiece;
      this.activeDragPiece = null;
      ghost.style.display = 'none';
      piece.canvas.style.opacity = '1';
      document.querySelectorAll('.slot-cell').forEach(s => s.classList.remove('drag-over'));

      const pointer = e.changedTouches ? e.changedTouches[0] : e;
      const board = document.getElementById('puzzleBoard');
      const bRect = board.getBoundingClientRect();

      this.moves++;
      this.updateStatsDisplay();

      // Check distance to target slot center
      const cfg = DIFFICULTY_CONFIG[this.currentMode];
      const cellW = bRect.width / cfg.cols;
      const cellH = bRect.height / cfg.rows;

      const targetCenterX = bRect.left + (piece.col + 0.5) * cellW;
      const targetCenterY = bRect.top + (piece.row + 0.5) * cellH;

      const dist = Math.hypot(pointer.clientX - targetCenterX, pointer.clientY - targetCenterY);

      if (dist < cfg.snapRadius) {
        // Correct slot! Snap in place!
        this.snapPieceIntoPlace(piece);
        this.selectedPiece = null;
      } else {
        // Wrong position or dropped in tray
        audio.playWrong();
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerEnd);
    window.addEventListener('touchmove', handlePointerMove, { passive: false });
    window.addEventListener('touchend', handlePointerEnd, { passive: false });

    // Header buttons
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        this.setMode(mode, true);
      });
    });

    document.getElementById('soundBtn').addEventListener('click', () => {
      const on = audio.toggleSound();
      document.getElementById('soundIcon').textContent = on ? '🔊' : '🔇';
    });

    document.getElementById('restartBtn').addEventListener('click', () => {
      audio.playGrab();
      this.loadPuzzle(this.currentPuzzleIdx);
    });

    document.getElementById('hintBtn').addEventListener('click', () => {
      audio.playHint();
      this.isGhostVisible = !this.isGhostVisible;
      this.updateGhostVisibility();
    });

    // Victory modal buttons
    document.getElementById('replayBtn').addEventListener('click', () => {
      document.getElementById('victoryModal').style.display = 'none';
      audio.playGrab();
      this.loadPuzzle(this.currentPuzzleIdx);
    });

    document.getElementById('nextPuzzleBtn').addEventListener('click', () => {
      document.getElementById('victoryModal').style.display = 'none';
      const nextIdx = (this.currentPuzzleIdx + 1) % PUZZLE_CATALOG.length;
      this.selectPuzzle(nextIdx);
    });
  }

  snapPieceIntoPlace(piece) {
    if (piece.isPlaced) return;
    piece.isPlaced = true;
    this.placedCount++;
    this.updateStatsDisplay();

    audio.playSnap();

    // Place canvas accurately on board
    const board = document.getElementById('puzzleBoard');
    const bRect = board.getBoundingClientRect();
    const cfg = DIFFICULTY_CONFIG[this.currentMode];
    const cellW = bRect.width / cfg.cols;
    const cellH = bRect.height / cfg.rows;

    const padX = piece.tabX * 1.5;
    const padY = piece.tabY * 1.5;

    const placedCanvas = piece.canvas;
    placedCanvas.classList.remove('selected');
    placedCanvas.classList.add('placed-piece');
    placedCanvas.style.position = 'absolute';
    placedCanvas.style.left = `${piece.col * cellW - padX}px`;
    placedCanvas.style.top = `${piece.row * cellH - padY}px`;
    placedCanvas.style.pointerEvents = 'none';

    board.appendChild(placedCanvas);

    // Check Victory
    if (this.placedCount === cfg.totalPieces) {
      this.handleVictory();
    }
  }

  // ============================================================================
  // VICTORY CELEBRATION & STAR REWARDS
  // ============================================================================
  handleVictory() {
    this.isWon = true;
    this.stopTimer();

    const cfg = DIFFICULTY_CONFIG[this.currentMode];
    this.addStars(cfg.points);

    audio.playFanfare();
    setTimeout(() => {
      audio.speak(cfg.praise);
    }, 450);

    this.launchConfetti();

    // Populate modal
    const mins = Math.floor(this.secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (this.secondsElapsed % 60).toString().padStart(2, '0');

    document.getElementById('vTime').textContent = `${mins}:${secs}`;
    document.getElementById('vMoves').textContent = this.moves.toString();
    document.getElementById('vPoints').textContent = `+${cfg.points} ⭐`;

    const modal = document.getElementById('victoryModal');
    modal.style.display = 'flex';
  }

  launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'];

    for (let i = 0; i < 110; i++) {
      pieces.push({
        x: canvas.width / 2,
        y: canvas.height * 0.45,
        vx: (Math.random() - 0.5) * 22,
        vy: (Math.random() - 0.75) * 24,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 16
      });
    }

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.48; // Gravity
        p.rotation += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (frame < 140) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    requestAnimationFrame(render);
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.BilikidsPuzzle = new JigsawGame();
});
