/**
 * BILIKIDS COLORING STUDIO - BABIES (3-5 YEARS)
 * Interactive Engine with Flood-Fill, Multi-Tools, Sound & Color Voice
 * Strict Figure Boundary Masking (Exterior background cannot be painted)
 */

// ============================================================================
// SOUND EFFECTS & AUDIO SYNTHESIZER
// ============================================================================
class AudioController {
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

  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(840, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch(e) {}
  }

  playSplash() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch(e) {}
  }

  playMagic() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.18);
      });
    } catch(e) {}
  }

  playFanfare() {
    if (!this.soundEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const notes = [
        { f: 523.25, d: 0.12, delay: 0 },
        { f: 659.25, d: 0.12, delay: 0.12 },
        { f: 783.99, d: 0.15, delay: 0.24 },
        { f: 1046.50, d: 0.40, delay: 0.40 }
      ];
      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = n.f;
        gain.gain.setValueAtTime(0.25, now + n.delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + n.delay + n.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + n.delay);
        osc.stop(now + n.delay + n.d);
      });
    } catch(e) {}
  }

  speakColor(colorName) {
    if (!this.soundEnabled) return;
    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(colorName, 'kid');
      return;
    }
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(colorName);
      utt.lang = 'en-US';
      utt.rate = 0.90;
      utt.pitch = 1.25;
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google')))
                   || voices.find(v => v.lang.startsWith('en'));
      if (enVoice) utt.voice = enVoice;
      window.speechSynthesis.speak(utt);
    } catch (e) {
      console.warn('Speech error:', e);
    }
  }

  speakInstruction(text) {
    if (!this.soundEnabled) return;
    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(text, 'kid');
      return;
    }
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1.15;
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(item => item.lang.startsWith('en') && /Natural|Samantha|Google/i.test(item.name))
        || voices.find(item => item.lang.startsWith('en'));
      if (voice) utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.warn('Instruction speech error:', error);
    }
  }
}

const audioCtrl = new AudioController();

// ============================================================================
// COLOR PALETTE SPECIFICATION (15 VIBRANT CHILD-SAFE SWATCHES)
// ============================================================================
const COLOR_PALETTE = [
  { name: 'Red', hex: '#ef4444' },
  { name: 'Green', hex: '#22c55e' },
  { name: 'Yellow', hex: '#facc15' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Orange', hex: '#f97316' },
  { name: 'Purple', hex: '#a855f7' },
  { name: 'Sky Blue', hex: '#06b6d4' },
  { name: 'Pink', hex: '#ec4899' },
  { name: 'Lime', hex: '#84cc16' },
  { name: 'Peach', hex: '#fbcfe8' },
  { name: 'Brown', hex: '#854d0e' },
  { name: 'Tan', hex: '#fed7aa' },
  { name: 'Grey', hex: '#94a3b8' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Black', hex: '#0f172a' }
];

// ============================================================================
// COLORING PAGES CATALOG (14 USER DRAWINGS + FREESTYLE CANVAS)
// ============================================================================
const COLORING_PAGES = [
  {
    id: 'bluey',
    name: 'Bluey',
    nameEs: 'Bluey',
    icon: '🐕',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_bluey_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_bluey_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_bluey_thumb.png'
  },
  {
    id: 'mario',
    name: 'Super Mario',
    nameEs: 'Super Mario',
    icon: '🍄',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_mario_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_mario_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_mario_thumb.png'
  },
  {
    id: 'peppa',
    name: 'Peppa Pig',
    nameEs: 'Peppa Pig',
    icon: '🐷',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_peppa_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_peppa_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_peppa_thumb.png'
  },
  {
    id: 'dino',
    name: 'Little Pony',
    nameEs: 'Poni Pequeño',
    icon: '🐴',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_dino_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_dino_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_dino_thumb.png'
  },
  {
    id: 'puppy',
    name: 'Happy Puppy',
    nameEs: 'Perrito Feliz',
    icon: '🐶',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_puppy_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_puppy_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_puppy_thumb.png'
  },
  {
    id: 'caticorn',
    name: 'Magic Kitty',
    nameEs: 'Gato Unicornio',
    icon: '🐱',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_caticorn_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_caticorn_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_caticorn_thumb.png'
  },
  {
    id: 'cow',
    name: 'Farm Cow',
    nameEs: 'Vaquita',
    icon: '🐮',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_cow_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_cow_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_cow_thumb.png'
  },
  {
    id: 'giraffe',
    name: 'Giraffe',
    nameEs: 'Jirafa',
    icon: '🦒',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_giraffe_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_giraffe_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_giraffe_thumb.png'
  },
  {
    id: 'boat',
    name: 'Sunny Boat',
    nameEs: 'Barco Velero',
    icon: '⛵',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_boat_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_boat_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_boat_thumb.png'
  },
  {
    id: 'duck',
    name: 'Little Duck',
    nameEs: 'Patito',
    icon: '🦆',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_duck_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_duck_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_duck_thumb.png'
  },
  {
    id: 'turtle',
    name: 'Little Turtle',
    nameEs: 'Tortuguita',
    icon: '🐢',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_turtle_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_turtle_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_turtle_thumb.png'
  },
  {
    id: 'unicorn',
    name: 'Baby Unicorn',
    nameEs: 'Unicornio',
    icon: '🦄',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_unicorn_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_unicorn_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_unicorn_thumb.png'
  },
  {
    id: 'puppy2',
    name: 'Playful Pup',
    nameEs: 'Cachorrito',
    icon: '🐕',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_puppy2_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_puppy2_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_puppy2_thumb.png'
  },
  {
    id: 'friends',
    name: 'Cute Friends',
    nameEs: 'Amiguitos',
    icon: '🧸',
    type: 'page',
    outline: 'assets/coloring_pages/user_pages/page_friends_outline.png',
    mask: 'assets/coloring_pages/user_pages/page_friends_mask.png',
    thumb: 'assets/coloring_pages/user_pages/page_friends_thumb.png'
  },
  {
    id: 'freestyle',
    name: 'Free Draw',
    nameEs: 'Lienzo Libre',
    icon: '✨',
    type: 'blank',
    outline: null,
    mask: null,
    thumb: null
  }
];

// ============================================================================
// MAIN COLORING STUDIO CONTROLLER
// ============================================================================
class ColoringStudio {
  constructor() {
    this.paintCanvas = document.getElementById('paintCanvas');
    this.outlineCanvas = document.getElementById('outlineCanvas');
    this.paintCtx = this.paintCanvas.getContext('2d', { willReadFrequently: true });
    this.outlineCtx = this.outlineCanvas.getContext('2d', { willReadFrequently: true });

    this.currentTool = 'bucket'; // 'bucket', 'crayon', 'marker', 'magic', 'stamp', 'eraser'
    this.currentColor = COLOR_PALETTE[0].hex; // Default Red
    this.currentPageIndex = 0;
    this.paintQuestColor = COLOR_PALETTE.find(color => color.name === 'Blue');
    this.paintQuestColorSelected = false;
    this.paintQuestAttempted = false;
    this.paintQuestCompleted = false;

    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;

    this.history = [];
    this.historyIndex = -1;
    this.maxHistory = 15;

    // Loaded image and mask references
    this.loadedOutlineImg = null;
    this.loadedMaskImg = null;
    this.drawBounds = null; // { x, y, w, h }
    this.insideMask = null; // Uint8Array of 1 (inside) and 0 (outside)
    this.outsideMaskCanvas = null; // Pre-rendered canvas with white background outside figure

    this.init();
  }

  init() {
    this.setupResize();
    this.renderColorSwatches();
    this.renderGalleryDrawer();
    this.setupEvents();
    this.selectColor(COLOR_PALETTE[0].hex, COLOR_PALETTE[0].name, false);
    this.setTool('bucket');
    this.loadPage(0);
    const repeat = document.getElementById('colorQuestRepeat');
    if (repeat) repeat.addEventListener('click', () => this.speakPaintQuest());
    this.speakPaintQuest();
  }

  speakPaintQuest() {
    const color = this.paintQuestColor.name;
    audioCtrl.speakInstruction(`Choose ${color}. Color your picture.`);
  }

  updatePaintQuest(message) {
    const feedback = document.getElementById('colorQuestFeedback');
    if (feedback) feedback.textContent = message;
  }

  setupResize() {
    const resize = () => {
      const workspace = document.querySelector('.canvas-workspace');
      if (!workspace) return;
      const rect = workspace.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Actual display dimensions
      this.width = rect.width;
      this.height = rect.height;

      // Internal bitmap resolution
      this.paintCanvas.width = Math.round(this.width * dpr);
      this.paintCanvas.height = Math.round(this.height * dpr);
      this.outlineCanvas.width = Math.round(this.width * dpr);
      this.outlineCanvas.height = Math.round(this.height * dpr);

      this.paintCanvas.style.width = `${this.width}px`;
      this.paintCanvas.style.height = `${this.height}px`;
      this.outlineCanvas.style.width = `${this.width}px`;
      this.outlineCanvas.style.height = `${this.height}px`;

      this.paintCtx.setTransform(1, 0, 0, 1, 0, 0);
      this.paintCtx.scale(dpr, dpr);
      this.outlineCtx.setTransform(1, 0, 0, 1, 0, 0);
      this.outlineCtx.scale(dpr, dpr);

      // Re-fill white background on base layer
      this.paintCtx.fillStyle = '#ffffff';
      this.paintCtx.fillRect(0, 0, this.width, this.height);

      if (this.loadedOutlineImg && this.loadedMaskImg) {
        this.renderOutlineAndMask();
      }
    };

    window.addEventListener('resize', resize);
    resize();
  }

  renderColorSwatches() {
    const container = document.getElementById('colorsColumn');
    if (!container) return;
    container.innerHTML = '';

    COLOR_PALETTE.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'color-swatch-btn';
      btn.style.backgroundColor = c.hex;
      btn.title = c.name;
      btn.dataset.color = c.hex;
      btn.dataset.name = c.name;

      if (c.hex.toLowerCase() === '#ffffff') {
        btn.style.borderColor = '#cbd5e1';
      }

      btn.addEventListener('click', () => {
        this.selectColor(c.hex, c.name);
      });

      container.appendChild(btn);
    });
  }

  selectColor(hex, name, isUserSelection = true) {
    this.currentColor = hex;
    document.querySelectorAll('.color-swatch-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.color.toLowerCase() === hex.toLowerCase());
    });

    audioCtrl.playPop();
    audioCtrl.speakColor(name);
    this.showToast(name, hex);
    if (!this.paintQuestCompleted && isUserSelection) {
      this.paintQuestColorSelected = hex.toLowerCase() === this.paintQuestColor.hex.toLowerCase();
      this.paintQuestAttempted = true;
      this.updatePaintQuest(this.paintQuestColorSelected
        ? `Good! Now use ${this.paintQuestColor.name} to paint inside the picture.`
        : `Listen again: choose ${this.paintQuestColor.name}.`);
    }
  }

  showToast(name, hex) {
    const toast = document.getElementById('colorToast');
    const toastDot = document.getElementById('toastColorDot');
    const toastName = document.getElementById('toastColorName');
    if (!toast || !toastDot || !toastName) return;

    toastDot.style.backgroundColor = hex;
    toastName.textContent = name;
    toast.classList.add('show');

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 1500);
  }

  setTool(toolName) {
    this.currentTool = toolName;
    document.querySelectorAll('.tool-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.tool === toolName);
    });
    audioCtrl.playPop();
  }

  renderGalleryDrawer() {
    const container = document.getElementById('galleryScroll');
    if (!container) return;
    container.innerHTML = '';

    COLORING_PAGES.forEach((page, idx) => {
      const card = document.createElement('div');
      card.className = `gallery-card ${idx === this.currentPageIndex ? 'active' : ''}`;
      card.dataset.index = idx;

      card.innerHTML = `
        <div class="gallery-thumb-box">
          ${page.thumb ? `<img src="${page.thumb}" alt="${page.name}" class="gallery-thumb-img">` : `<span style="font-size:2rem;">🎨</span>`}
        </div>
        <span class="gallery-card-label">${page.name}</span>
      `;

      card.addEventListener('click', () => {
        this.loadPage(idx);
      });

      container.appendChild(card);
    });
  }

  loadPage(index) {
    this.currentPageIndex = index;
    const page = COLORING_PAGES[index];

    document.querySelectorAll('.gallery-card').forEach((c, idx) => {
      c.classList.toggle('active', idx === index);
    });

    // Reset base canvas with pure white
    this.paintCtx.fillStyle = '#ffffff';
    this.paintCtx.fillRect(0, 0, this.width, this.height);
    this.outlineCtx.clearRect(0, 0, this.width, this.height);

    this.history = [];
    this.historyIndex = -1;

    if (page.type === 'blank') {
      this.loadedOutlineImg = null;
      this.loadedMaskImg = null;
      this.insideMask = null;
      this.outsideMaskCanvas = null;
      this.saveState();
      return;
    }

    // Load outline and mask concurrently
    let loadedCount = 0;
    const outlineImg = new Image();
    const maskImg = new Image();

    const onAssetLoaded = () => {
      loadedCount++;
      if (loadedCount === 2) {
        this.loadedOutlineImg = outlineImg;
        this.loadedMaskImg = maskImg;
        this.renderOutlineAndMask();
        this.saveState();
      }
    };

    outlineImg.onload = onAssetLoaded;
    maskImg.onload = onAssetLoaded;

    outlineImg.src = page.outline;
    maskImg.src = page.mask;
  }

  renderOutlineAndMask() {
    if (!this.loadedOutlineImg || !this.loadedMaskImg) return;
    const outlineImg = this.loadedOutlineImg;
    const maskImg = this.loadedMaskImg;

    this.outlineCtx.clearRect(0, 0, this.width, this.height);

    // Compute fitted drawing rectangle maintaining aspect ratio
    const padding = 20;
    const maxW = this.width - padding * 2;
    const maxH = this.height - padding * 2;
    const scale = Math.min(maxW / outlineImg.width, maxH / outlineImg.height);
    const drawW = outlineImg.width * scale;
    const drawH = outlineImg.height * scale;
    const drawX = (this.width - drawW) / 2;
    const drawY = (this.height - drawH) / 2;

    this.drawBounds = { x: drawX, y: drawY, w: drawW, h: drawH };

    // 1. Render crisp lineart onto outlineCanvas
    this.outlineCtx.drawImage(outlineImg, drawX, drawY, drawW, drawH);

    // 2. Build 1-bit inside mask at exact canvas pixel buffer resolution
    const dpr = window.devicePixelRatio || 1;
    const canvasW = Math.round(this.width * dpr);
    const canvasH = Math.round(this.height * dpr);

    const tempMaskCanvas = document.createElement('canvas');
    tempMaskCanvas.width = canvasW;
    tempMaskCanvas.height = canvasH;
    const tempCtx = tempMaskCanvas.getContext('2d', { willReadFrequently: true });
    tempCtx.scale(dpr, dpr);
    tempCtx.drawImage(maskImg, drawX, drawY, drawW, drawH);

    const maskData = tempCtx.getImageData(0, 0, canvasW, canvasH);
    const mBytes = maskData.data;
    this.insideMask = new Uint8Array(canvasW * canvasH);

    for (let i = 0, p = 0; i < mBytes.length; i += 4, p++) {
      // In mask image, interior is white (>120), exterior background is black (0)
      if (mBytes[i] > 120) {
        this.insideMask[p] = 1;
      }
    }

    // 3. Pre-render outsideMaskCanvas (White outside, transparent inside)
    // Any time child draws, drawing this over paintCtx wipes out any marks outside the character
    this.outsideMaskCanvas = document.createElement('canvas');
    this.outsideMaskCanvas.width = canvasW;
    this.outsideMaskCanvas.height = canvasH;
    const outCtx = this.outsideMaskCanvas.getContext('2d');
    const outImgData = outCtx.createImageData(canvasW, canvasH);
    const out32 = new Uint32Array(outImgData.data.buffer);

    // ABGR 0xFFFFFFFF = pure solid white
    const SOLID_WHITE = 0xFFFFFFFF;
    for (let p = 0; p < canvasW * canvasH; p++) {
      if (this.insideMask[p] === 0) {
        out32[p] = SOLID_WHITE;
      } else {
        out32[p] = 0; // Transparent inside figure
      }
    }
    outCtx.putImageData(outImgData, 0, 0);

    // Clean initial canvas with outside mask
    this.applyOutsideMask();
  }

  applyOutsideMask() {
    if (!this.outsideMaskCanvas || COLORING_PAGES[this.currentPageIndex].type === 'blank') return;
    this.paintCtx.save();
    this.paintCtx.setTransform(1, 0, 0, 1, 0, 0);
    this.paintCtx.drawImage(this.outsideMaskCanvas, 0, 0);
    this.paintCtx.restore();
  }

  setupEvents() {
    const canvas = this.paintCanvas;

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    // Pointer Down
    const handleStart = (e) => {
      e.preventDefault();
      const pos = getPos(e);
      this.isDrawing = true;
      this.lastX = pos.x;
      this.lastY = pos.y;

      if (this.currentTool === 'bucket') {
        if (this.floodFill(Math.round(pos.x), Math.round(pos.y), this.currentColor)) this.checkPaintQuestCompletion(pos.x, pos.y);
      } else if (this.currentTool === 'stamp') {
        this.drawStamp(pos.x, pos.y);
        this.saveState();
      } else {
        this.drawStroke(pos.x, pos.y, true);
        this.checkPaintQuestCompletion(pos.x, pos.y);
      }
    };

    // Pointer Move
    const handleMove = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);
      if (this.currentTool !== 'bucket' && this.currentTool !== 'stamp') {
        this.drawStroke(pos.x, pos.y, false);
      }
      this.lastX = pos.x;
      this.lastY = pos.y;
    };

    // Pointer End
    const handleEnd = (e) => {
      if (!this.isDrawing) return;
      this.isDrawing = false;
      if (this.currentTool !== 'bucket' && this.currentTool !== 'stamp') {
        this.applyOutsideMask();
        this.saveState();
      }
    };

    canvas.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    canvas.addEventListener('touchstart', handleStart, { passive: false });
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd, { passive: false });

    // Actions
    document.querySelectorAll('.tool-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tool = btn.dataset.tool;
        if (tool === 'undo') {
          this.undo();
        } else if (tool === 'redo') {
          this.redo();
        } else if (tool === 'reset') {
          this.resetCanvas();
        } else {
          this.setTool(tool);
        }
      });
    });

    // Clear Button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.resetCanvas());
    }

    // Save Button
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => this.exportAndDownload());
    }

    // Celebrate Button
    const celebrateBtn = document.getElementById('celebrateBtn');
    if (celebrateBtn) {
      celebrateBtn.addEventListener('click', () => this.celebrateMasterpiece());
    }
  }

  checkPaintQuestCompletion(x, y) {
    if (this.paintQuestCompleted || !this.paintQuestColorSelected || this.currentColor.toLowerCase() !== this.paintQuestColor.hex.toLowerCase()) return;
    const dpr = window.devicePixelRatio || 1;
    const px = Math.round(x * dpr);
    const py = Math.round(y * dpr);
    const canvasW = Math.round(this.width * dpr);
    const index = py * canvasW + px;
    if (this.insideMask && !this.insideMask[index]) return;
    if (this.currentTool === 'eraser') return;
    this.paintQuestCompleted = true;
    this.updatePaintQuest(`You chose ${this.paintQuestColor.name} and colored the picture. Great listening!`);
    audioCtrl.speakInstruction(`Great job! You chose ${this.paintQuestColor.name} and colored the picture.`);
  }

  drawStroke(x, y, isStart) {
    const ctx = this.paintCtx;
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (this.currentTool === 'eraser') {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 36;
    } else if (this.currentTool === 'marker') {
      ctx.strokeStyle = this.currentColor;
      ctx.lineWidth = 20;
    } else if (this.currentTool === 'crayon') {
      ctx.strokeStyle = this.currentColor;
      ctx.lineWidth = 14;
      ctx.globalAlpha = 0.85;
    } else if (this.currentTool === 'magic') {
      ctx.strokeStyle = this.currentColor;
      ctx.lineWidth = 16;
      ctx.shadowColor = this.currentColor;
      ctx.shadowBlur = 12;
      this.spawnSparkle(x, y);
      audioCtrl.playMagic();
    }

    if (isStart) {
      ctx.moveTo(x - 0.5, y);
      ctx.lineTo(x + 0.5, y);
    } else {
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(x, y);
    }

    ctx.stroke();

    // Reset shadow & alpha
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1.0;

    // Constrain stroke strictly inside figure silhouette
    this.applyOutsideMask();
  }

  drawStamp(x, y) {
    // Only place stamp if coordinate is inside the figure
    const dpr = window.devicePixelRatio || 1;
    const px = Math.round(x * dpr);
    const py = Math.round(y * dpr);
    const canvasW = Math.round(this.width * dpr);
    const idx = py * canvasW + px;

    if (this.insideMask && !this.insideMask[idx]) {
      // Outside figure, ignore stamp
      audioCtrl.playPop();
      return;
    }

    const ctx = this.paintCtx;
    const stamps = ['⭐', '❤️', '🌟', '🌸', '✨', '🎈'];
    const stamp = stamps[Math.floor(Math.random() * stamps.length)];
    ctx.font = '38px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(stamp, x, y);
    this.applyOutsideMask();
    audioCtrl.playPop();
  }

  spawnSparkle(x, y) {
    const ctx = this.paintCtx;
    for (let i = 0; i < 2; i++) {
      const offsetX = (Math.random() - 0.5) * 25;
      const offsetY = (Math.random() - 0.5) * 25;
      ctx.fillStyle = this.currentColor;
      ctx.beginPath();
      ctx.arc(x + offsetX, y + offsetY, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ============================================================================
  // STRICT BOUNDARY-ENFORCED FLOOD FILL (4-WAY BFS)
  // Background outside the figure CANNOT be filled.
  // ============================================================================
  floodFill(startX, startY, fillHex) {
    const dpr = window.devicePixelRatio || 1;
    const pixelX = Math.round(startX * dpr);
    const pixelY = Math.round(startY * dpr);

    const canvasW = Math.round(this.width * dpr);
    const canvasH = Math.round(this.height * dpr);

    if (pixelX < 0 || pixelX >= canvasW || pixelY < 0 || pixelY >= canvasH) return false;

    const startIndex = pixelY * canvasW + pixelX;

    // 1. STRICT ENFORCEMENT: Never allow flood-fill on background outside character!
    if (this.insideMask && !this.insideMask[startIndex]) {
      audioCtrl.playPop();
      return false;
    }

    // Get Outline Image data to detect dark boundaries
    const outlineData = this.outlineCtx.getImageData(0, 0, canvasW, canvasH);
    const outline32 = new Uint32Array(outlineData.data.buffer);

    // Get Paint Layer data
    const paintData = this.paintCtx.getImageData(0, 0, canvasW, canvasH);
    const paint32 = new Uint32Array(paintData.data.buffer);

    // Target and fill colors
    const targetColor = paint32[startIndex];
    const fillR = parseInt(fillHex.slice(1, 3), 16);
    const fillG = parseInt(fillHex.slice(3, 5), 16);
    const fillB = parseInt(fillHex.slice(5, 7), 16);
    const fillColor = (255 << 24) | (fillB << 16) | (fillG << 8) | fillR;

    if (targetColor === fillColor) return false;

    // Check if clicked directly on an outline
    const targetAlpha = (outline32[startIndex] >> 24) & 0xFF;
    const targetLum = (outline32[startIndex] & 0xFF) + ((outline32[startIndex] >> 8) & 0xFF) + ((outline32[startIndex] >> 16) & 0xFF);
    if (targetAlpha > 140 && targetLum < 190) {
      return false;
    }

    const matchTarget = (idx) => {
      // Must be strictly inside figure mask
      if (this.insideMask && !this.insideMask[idx]) return false;

      // Must not hit black outline
      const oAlpha = (outline32[idx] >> 24) & 0xFF;
      const oLum = (outline32[idx] & 0xFF) + ((outline32[idx] >> 8) & 0xFF) + ((outline32[idx] >> 16) & 0xFF);
      if (oAlpha > 130 && oLum < 190) return false;

      // Color distance to target
      const c = paint32[idx];
      const r1 = c & 0xFF, g1 = (c >> 8) & 0xFF, b1 = (c >> 16) & 0xFF;
      const r2 = targetColor & 0xFF, g2 = (targetColor >> 8) & 0xFF, b2 = (targetColor >> 16) & 0xFF;
      const diff = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2);
      return diff < 45;
    };

    // Queue BFS flood fill
    const queue = [pixelX, pixelY];
    const visited = new Uint8Array(canvasW * canvasH);
    visited[startIndex] = 1;

    while (queue.length > 0) {
      const cy = queue.pop();
      const cx = queue.pop();
      const idx = cy * canvasW + cx;
      paint32[idx] = fillColor;

      const neighbors = [
        cx + 1, cy,
        cx - 1, cy,
        cx, cy + 1,
        cx, cy - 1
      ];

      for (let i = 0; i < neighbors.length; i += 2) {
        const nx = neighbors[i];
        const ny = neighbors[i + 1];

        if (nx >= 0 && nx < canvasW && ny >= 0 && ny < canvasH) {
          const nIdx = ny * canvasW + nx;
          if (!visited[nIdx] && matchTarget(nIdx)) {
            visited[nIdx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }

    this.paintCtx.putImageData(paintData, 0, 0);
    this.applyOutsideMask();
    this.saveState();
    audioCtrl.playSplash();
    return true;
  }

  // ============================================================================
  // UNDO / REDO / STATE HISTORY
  // ============================================================================
  saveState() {
    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(this.width * dpr);
    const h = Math.round(this.height * dpr);

    const snapshot = this.paintCtx.getImageData(0, 0, w, h);

    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }

    this.history.push(snapshot);
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    } else {
      this.historyIndex++;
    }
  }

  undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const snapshot = this.history[this.historyIndex];
      this.paintCtx.putImageData(snapshot, 0, 0);
      audioCtrl.playPop();
    }
  }

  redo() {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      const snapshot = this.history[this.historyIndex];
      this.paintCtx.putImageData(snapshot, 0, 0);
      audioCtrl.playPop();
    }
  }

  resetCanvas() {
    this.paintCtx.fillStyle = '#ffffff';
    this.paintCtx.fillRect(0, 0, this.width, this.height);
    this.applyOutsideMask();
    this.saveState();
    audioCtrl.playPop();
  }

  // ============================================================================
  // EXPORT & DOWNLOAD (PNG)
  // ============================================================================
  exportAndDownload() {
    audioCtrl.playMagic();
    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(this.width * dpr);
    const h = Math.round(this.height * dpr);

    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = w;
    exportCanvas.height = h;
    const exportCtx = exportCanvas.getContext('2d');

    // 1. Draw white background
    exportCtx.fillStyle = '#ffffff';
    exportCtx.fillRect(0, 0, w, h);

    // 2. Draw painted colors
    exportCtx.drawImage(this.paintCanvas, 0, 0);

    // 3. Composite black line art
    exportCtx.drawImage(this.outlineCanvas, 0, 0);

    const link = document.createElement('a');
    const pageName = COLORING_PAGES[this.currentPageIndex].name.replace(/\s+/g, '_');
    link.download = `Bilikids_${pageName}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();
  }

  // ============================================================================
  // CELEBRATION & CONFETTI
  // ============================================================================
  celebrateMasterpiece() {
    audioCtrl.playFanfare();
    const overlay = document.getElementById('celebrationModal');
    if (overlay) overlay.style.display = 'flex';

    this.launchConfetti();
  }

  launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#ef4444', '#facc15', '#22c55e', '#3b82f6', '#ec4899', '#a855f7'];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 22,
        size: Math.random() * 9 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 15
      });
    }

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.45;
        p.rotation += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (frame < 120) {
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
  window.BilikidsStudio = new ColoringStudio();
});

function closeCelebration() {
  const overlay = document.getElementById('celebrationModal');
  if (overlay) overlay.style.display = 'none';
}
