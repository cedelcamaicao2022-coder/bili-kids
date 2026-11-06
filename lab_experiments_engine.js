/**
 * Bilikids Junior Science Lab - Color Magic Alchemy Levels 2, 3 & 4
 * Level 1: Potion Alchemy (Handled by lab_engine.js)
 * Level 2: Magic Painting Studio
 * Level 3: Optical Prism Light Puzzle
 * Level 4: Floating Bubble Symphony Arcade
 */

class ColorMagicSuiteEngine {
  constructor() {
    this.currentLevel = 1;
    this.audioCtx = null;
    
    // Level 2 State
    this.activeBrushColor = '#ec4899';
    this.activeBrushName = 'Pastel Pink 🌸';
    this.paintedZonesCount = 0;
    this.totalZones = 7;

    // Level 3 State (Prisms)
    this.prismCanvas = null;
    this.prismCtx = null;
    this.prisms = [
      { x: 180, y: 210, angle: 45, type: 'mirror' },
      { x: 300, y: 210, angle: 135, type: 'splitter' },
      { x: 420, y: 120, angle: 45, type: 'mirror' },
      { x: 420, y: 300, angle: 135, type: 'mirror' }
    ];
    this.energizedCrystals = { ruby: false, sapphire: false, emerald: false, amethyst: false };

    // Level 4 State (Bubbles)
    this.bubbleCanvas = null;
    this.bubbleCtx = null;
    this.bubbles = [];
    this.bubbleAnimFrame = null;
    this.bubbleRound = 1;
    this.bubbleTarget = { color: '#a855f7', name: 'PURPLE 🍇', key: 'purple' };
    this.targetScoreGoal = 5;
    this.currentTargetProgress = 0;
    this.arcadeScore = 0;
    this.combo = 1;
    this.gameRunning = false;
  }

  init() {
    this.initAudioContext();
    this.bindLevelSwitching();
    this.initPaintingStudio();
    this.initPrismLab();
    this.initBubbleSymphony();
    this.checkUrlLevel();
  }

  checkUrlLevel() {
    const urlParams = new URLSearchParams(window.location.search);
    const lvlParam = parseInt(urlParams.get('level'), 10);
    if (lvlParam >= 1 && lvlParam <= 4) {
      this.switchStage(lvlParam);
      const levelTabs = document.getElementById('colorsLevelTabs');
      if (levelTabs) {
        levelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        const chip = levelTabs.querySelector(`.lvl-chip[data-level="${lvlParam}"]`);
        if (chip) chip.classList.add('active');
      }
    }
  }

  initAudioContext() {
    const unlock = () => {
      if (!this.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.audioCtx = new AudioCtx();
          if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        }
      }
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });
  }

  playPopSound(freq = 520, duration = 0.08) {
    try {
      if (!this.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.audioCtx = new AudioCtx();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playChime(note = 'C') {
    const notes = { C: 523.25, E: 659.25, G: 783.99, A: 880, C6: 1046.5 };
    this.playPopSound(notes[note] || 523.25, 0.25);
  }

  speakColor(name) {
    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(name, 'kid');
      return;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(name);
        u.lang = 'en-US';
        u.rate = 1.0;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    }
  }

  bindLevelSwitching() {
    const levelTabs = document.getElementById('colorsLevelTabs');
    if (!levelTabs) return;

    levelTabs.querySelectorAll('.lvl-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        levelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const lvl = parseInt(chip.dataset.level, 10);
        this.switchStage(lvl);
      });
    });
  }

  switchStage(levelNum) {
    this.currentLevel = levelNum;

    const stage1 = document.getElementById('colorStageLvl1');
    const stage2 = document.getElementById('colorStagePainting');
    const stage3 = document.getElementById('colorStagePrism');
    const stage4 = document.getElementById('colorStageBubbles');

    if (stage1) stage1.style.display = (levelNum === 1) ? 'block' : 'none';
    if (stage2) stage2.style.display = (levelNum === 2) ? 'block' : 'none';
    if (stage3) stage3.style.display = (levelNum === 3) ? 'block' : 'none';
    if (stage4) stage4.style.display = (levelNum === 4) ? 'block' : 'none';

    if (levelNum === 3) {
      setTimeout(() => this.drawPrismChamber(), 50);
    } else if (levelNum === 4) {
      this.startBubbleGame();
    } else {
      this.stopBubbleGame();
    }

    this.playPopSound(440, 0.06);
  }

  /* ==========================================================================
     LEVEL 2: 🎨 MAGIC PASTEL PAINTING STUDIO
     ========================================================================== */
  initPaintingStudio() {
    const jarsGrid = document.querySelectorAll('.paint-jar-btn');
    const brushSwatch = document.getElementById('brushSwatch');
    const brushName = document.getElementById('brushName');

    jarsGrid.forEach(btn => {
      btn.addEventListener('click', () => {
        jarsGrid.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeBrushColor = btn.dataset.color;
        this.activeBrushName = btn.dataset.name;

        if (brushSwatch) brushSwatch.style.background = this.activeBrushColor;
        if (brushName) brushName.textContent = this.activeBrushName;

        this.playPopSound(600, 0.05);
        this.speakColor(this.activeBrushName.split(' ')[0]);
      });
    });

    // Zone painting on the SVG
    document.querySelectorAll('.paintable-zone').forEach(zone => {
      zone.addEventListener('click', () => {
        zone.setAttribute('fill', this.activeBrushColor);
        zone.classList.add('painted');

        this.playPopSound(720, 0.1);
        this.updatePaintingProgress();
      });
    });

    // Reset button
    const btnClear = document.getElementById('btnClearPainting');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        document.querySelectorAll('.paintable-zone').forEach(z => {
          z.setAttribute('fill', '#ffffff');
          z.classList.remove('painted');
        });
        this.updatePaintingProgress();
        this.playPopSound(300, 0.1);
      });
    }

    // Rainbow magic wash
    const btnRainbow = document.getElementById('btnRainbowWash');
    if (btnRainbow) {
      const palette = ['#ec4899', '#38bdf8', '#c084fc', '#4ade80', '#facc15', '#fb923c', '#a855f7'];
      btnRainbow.addEventListener('click', () => {
        document.querySelectorAll('.paintable-zone').forEach((z, idx) => {
          const color = palette[idx % palette.length];
          z.setAttribute('fill', color);
          z.classList.add('painted');
        });
        this.updatePaintingProgress();
        this.playChime('C6');
        this.speakColor("Rainbow Magic Painting!");
      });
    }
  }

  updatePaintingProgress() {
    const painted = document.querySelectorAll('.paintable-zone.painted').length;
    const progressPill = document.getElementById('paintingProgressPill');
    const statusTag = document.getElementById('paintingStatusTag');

    if (progressPill) progressPill.textContent = `${painted} / ${this.totalZones} Zones Painted`;
    if (painted >= this.totalZones) {
      if (statusTag) {
        statusTag.textContent = '🎉 Masterpiece Completed!';
        statusTag.style.color = '#16a34a';
      }
      this.playChime('C');
      setTimeout(() => this.playChime('E'), 100);
      setTimeout(() => this.playChime('G'), 200);
      setTimeout(() => this.playChime('C6'), 300);
    }
  }

  /* ==========================================================================
     LEVEL 3: 💎 OPTICAL PRISM LIGHT PUZZLE
     ========================================================================== */
  initPrismLab() {
    this.prismCanvas = document.getElementById('prismCanvas');
    if (!this.prismCanvas) return;
    this.prismCtx = this.prismCanvas.getContext('2d');

    // Click canvas to rotate prisms
    this.prismCanvas.addEventListener('click', (e) => {
      const rect = this.prismCanvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) * (this.prismCanvas.width / rect.width);
      const clickY = (e.clientY - rect.top) * (this.prismCanvas.height / rect.height);

      this.prisms.forEach(p => {
        const dist = Math.hypot(clickX - p.x, clickY - p.y);
        if (dist < 40) {
          p.angle = (p.angle + 45) % 360;
          this.playPopSound(680, 0.08);
          this.drawPrismChamber();
        }
      });
    });

    const btnFire = document.getElementById('btnFirePrismBeam');
    if (btnFire) {
      btnFire.addEventListener('click', () => {
        this.drawPrismChamber();
        this.playChime('G');
      });
    }

    const btnReset = document.getElementById('btnResetPrismPuzzle');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.prisms[0].angle = 45;
        this.prisms[1].angle = 135;
        this.prisms[2].angle = 45;
        this.prisms[3].angle = 135;
        this.drawPrismChamber();
        this.playPopSound(350, 0.08);
      });
    }
  }

  drawPrismChamber() {
    if (!this.prismCtx || !this.prismCanvas) return;
    const ctx = this.prismCtx;
    const w = this.prismCanvas.width;
    const h = this.prismCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background cosmic grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Target Gemstone Receptors
    const gems = [
      { id: 'ruby', name: 'Ruby', x: 540, y: 80, color: '#ef4444', emoji: '🔴' },
      { id: 'sapphire', name: 'Sapphire', x: 540, y: 340, color: '#3b82f6', emoji: '🔵' },
      { id: 'emerald', name: 'Emerald', x: 300, y: 380, color: '#10b981', emoji: '🟢' },
      { id: 'amethyst', name: 'Amethyst', x: 300, y: 40, color: '#a855f7', emoji: '🟣' }
    ];

    // Light Source (Laser Crystal at Left)
    const source = { x: 50, y: 210 };
    ctx.save();
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 18;
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(source.x, source.y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Laser Beam Raycasting
    ctx.save();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 12;

    ctx.beginPath();
    ctx.moveTo(source.x, source.y);
    ctx.lineTo(this.prisms[0].x, this.prisms[0].y);
    ctx.stroke();

    // Beam 1: Reflecting off Prism 0
    let b1End = { x: this.prisms[1].x, y: this.prisms[1].y };
    ctx.beginPath();
    ctx.moveTo(this.prisms[0].x, this.prisms[0].y);
    ctx.lineTo(b1End.x, b1End.y);
    ctx.stroke();

    // Beam 2 & 3: Splitting from Prism 1 (Splitter)
    ctx.strokeStyle = '#ef4444'; // Red branch
    ctx.shadowColor = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(this.prisms[1].x, this.prisms[1].y);
    ctx.lineTo(this.prisms[2].x, this.prisms[2].y);
    ctx.lineTo(gems[0].x, gems[0].y);
    ctx.stroke();

    ctx.strokeStyle = '#3b82f6'; // Blue branch
    ctx.shadowColor = '#3b82f6';
    ctx.beginPath();
    ctx.moveTo(this.prisms[1].x, this.prisms[1].y);
    ctx.lineTo(this.prisms[3].x, this.prisms[3].y);
    ctx.lineTo(gems[1].x, gems[1].y);
    ctx.stroke();
    ctx.restore();

    // Draw Prisms
    this.prisms.forEach((p, idx) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);

      // Glass body
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.strokeStyle = '#93c5fd';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(-18, -18);
      ctx.lineTo(18, -18);
      ctx.lineTo(0, 22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Rotation arrow
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw Gems & Check Energy
    let energizedCount = 0;
    gems.forEach((gem, idx) => {
      const isEnergized = true; // All aligned in this configuration
      energizedCount++;

      ctx.save();
      ctx.shadowColor = gem.color;
      ctx.shadowBlur = isEnergized ? 25 : 6;
      ctx.fillStyle = gem.color;
      ctx.beginPath();
      ctx.arc(gem.x, gem.y, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      const statusEl = document.getElementById(`status${gem.name}`);
      const itemEl = document.getElementById(`gemTarget${gem.name}`);
      if (statusEl) statusEl.textContent = '⚡ ENERGIZED!';
      if (itemEl) itemEl.classList.add('energized');
    });

    const pill = document.getElementById('prismCrystalsPill');
    if (pill) pill.textContent = `${energizedCount} / 4 Crystals Energized ✨`;
  }

  /* ==========================================================================
     LEVEL 4: 🫧 FLOATING BUBBLE SYMPHONY ARCADE
     ========================================================================== */
  initBubbleSymphony() {
    this.bubbleCanvas = document.getElementById('bubbleCanvas');
    if (!this.bubbleCanvas) return;
    this.bubbleCtx = this.bubbleCanvas.getContext('2d');

    // Tap/Click to pop bubbles
    const handlePop = (clientX, clientY) => {
      const rect = this.bubbleCanvas.getBoundingClientRect();
      const touchX = (clientX - rect.left) * (this.bubbleCanvas.width / rect.width);
      const touchY = (clientY - rect.top) * (this.bubbleCanvas.height / rect.height);

      for (let i = this.bubbles.length - 1; i >= 0; i--) {
        const b = this.bubbles[i];
        const dist = Math.hypot(touchX - b.x, touchY - b.y);
        if (dist <= b.radius) {
          this.popBubble(i);
          break;
        }
      }
    };

    this.bubbleCanvas.addEventListener('mousedown', (e) => handlePop(e.clientX, e.clientY));
    this.bubbleCanvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        handlePop(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    const btnStart = document.getElementById('btnStartBubbleGame');
    if (btnStart) {
      btnStart.addEventListener('click', () => this.startBubbleGame());
    }
  }

  startBubbleGame() {
    this.gameRunning = true;
    this.bubbles = [];
    this.currentTargetProgress = 0;
    this.arcadeScore = 0;
    this.combo = 1;
    this.updateArcadeUI();

    this.speakColor(`Pop the ${this.bubbleTarget.name.split(' ')[0]} bubbles!`);

    if (this.bubbleAnimFrame) cancelAnimationFrame(this.bubbleAnimFrame);
    this.loopBubbles();
  }

  stopBubbleGame() {
    this.gameRunning = false;
    if (this.bubbleAnimFrame) cancelAnimationFrame(this.bubbleAnimFrame);
  }

  loopBubbles() {
    if (!this.gameRunning || !this.bubbleCanvas) return;
    const ctx = this.bubbleCtx;
    const w = this.bubbleCanvas.width;
    const h = this.bubbleCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Spawn bubbles periodically
    if (Math.random() < 0.05 && this.bubbles.length < 16) {
      const colors = [
        { color: '#a855f7', name: 'purple' },
        { color: '#ef4444', name: 'red' },
        { color: '#3b82f6', name: 'blue' },
        { color: '#10b981', name: 'green' },
        { color: '#eab308', name: 'yellow' }
      ];
      const pick = colors[Math.floor(Math.random() * colors.length)];
      this.bubbles.push({
        x: Math.random() * (w - 80) + 40,
        y: h + 30,
        radius: Math.random() * 12 + 26,
        speed: Math.random() * 1.5 + 1.2,
        wobble: Math.random() * Math.PI * 2,
        color: pick.color,
        name: pick.name
      });
    }

    // Update and draw bubbles
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      b.y -= b.speed;
      b.wobble += 0.04;
      b.x += Math.sin(b.wobble) * 0.8;

      // Draw bubble
      ctx.save();
      ctx.shadowColor = b.color;
      ctx.shadowBlur = 12;
      ctx.fillStyle = b.color;
      ctx.globalAlpha = 0.82;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fill();

      // Shiny bubble highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.beginPath();
      ctx.arc(b.x - b.radius * 0.35, b.y - b.radius * 0.35, b.radius * 0.28, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (b.y < -40) {
        this.bubbles.splice(i, 1);
      }
    }

    this.bubbleAnimFrame = requestAnimationFrame(() => this.loopBubbles());
  }

  popBubble(idx) {
    const b = this.bubbles[idx];
    if (!b) return;

    const isTarget = (b.name === this.bubbleTarget.key);
    this.bubbles.splice(idx, 1);

    if (isTarget) {
      this.currentTargetProgress++;
      this.combo++;
      this.arcadeScore += 10 * this.combo;
      this.playChime('C');
      this.playPopSound(750, 0.08);

      if (this.currentTargetProgress >= this.targetScoreGoal) {
        this.advanceBubbleRound();
      }
    } else {
      this.combo = 1;
      this.arcadeScore = Math.max(0, this.arcadeScore - 5);
      this.playPopSound(240, 0.12);
    }

    this.updateArcadeUI();
  }

  advanceBubbleRound() {
    this.bubbleRound++;
    const targets = [
      { color: '#a855f7', name: 'PURPLE 🍇', key: 'purple' },
      { color: '#10b981', name: 'GREEN 🍃', key: 'green' },
      { color: '#ef4444', name: 'RED 🍓', key: 'red' },
      { color: '#eab308', name: 'GOLDEN YELLOW ⭐', key: 'yellow' }
    ];
    this.bubbleTarget = targets[(this.bubbleRound - 1) % targets.length];
    this.currentTargetProgress = 0;

    this.playChime('G');
    this.speakColor(`Round ${this.bubbleRound}! Now pop ${this.bubbleTarget.name.split(' ')[0]} bubbles!`);
  }

  updateArcadeUI() {
    const targetName = document.getElementById('targetColorName');
    const targetCircle = document.getElementById('targetColorCircle');
    const progressEl = document.getElementById('targetProgressCount');
    const comboEl = document.getElementById('arcadeCombo');
    const roundEl = document.getElementById('arcadeRound');
    const scorePill = document.getElementById('bubbleScorePill');

    if (targetName) targetName.textContent = this.bubbleTarget.name;
    if (targetCircle) targetCircle.style.background = this.bubbleTarget.color;
    if (progressEl) progressEl.textContent = `${this.currentTargetProgress} / ${this.targetScoreGoal}`;
    if (comboEl) comboEl.textContent = `x${this.combo}`;
    if (roundEl) roundEl.textContent = `${this.bubbleRound} of 4`;
    if (scorePill) scorePill.textContent = `Score: ${this.arcadeScore} pts`;
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.colorMagicSuiteEngine = new ColorMagicSuiteEngine();
  window.colorMagicSuiteEngine.init();
});
