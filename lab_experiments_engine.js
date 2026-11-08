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

    // Level 3 State (Color Sorting Baskets - Preschool Classification)
    this.currentSortingRound = 1;
    this.selectedSortingItem = null;
    this.remainingItems = [];
    this.droppedBasketsCount = {};
    this.sortingRounds = [
      {
        round: 1,
        title: 'Round 1: Primary Colors 🔴🟡🔵',
        hint: 'Put Red, Yellow, and Blue items into their matching baskets!',
        audioHint: 'assets/lab/audio/sort_hint_r1.mp3',
        baskets: [
          { color: 'red', name: 'Red Basket', emoji: '🧺', hex: '#ef4444', class: 'basket-red' },
          { color: 'yellow', name: 'Yellow Basket', emoji: '🧺', hex: '#eab308', class: 'basket-yellow' },
          { color: 'blue', name: 'Blue Basket', emoji: '🧺', hex: '#3b82f6', class: 'basket-blue' }
        ],
        items: [
          { id: 'i1', name: 'Red Apple', emoji: '🍎', color: 'red', audio: 'assets/lab/audio/item_red_apple.mp3' },
          { id: 'i2', name: 'Red Strawberry', emoji: '🍓', color: 'red', audio: 'assets/lab/audio/item_red_strawberry.mp3' },
          { id: 'i3', name: 'Yellow Banana', emoji: '🍌', color: 'yellow', audio: 'assets/lab/audio/item_yellow_banana.mp3' },
          { id: 'i4', name: 'Yellow Sun', emoji: '☀️', color: 'yellow', audio: 'assets/lab/audio/item_yellow_sun.mp3' },
          { id: 'i5', name: 'Blue Car', emoji: '🚙', color: 'blue', audio: 'assets/lab/audio/item_blue_car.mp3' },
          { id: 'i6', name: 'Blue Dolphin', emoji: '🐬', color: 'blue', audio: 'assets/lab/audio/item_blue_dolphin.mp3' }
        ]
      },
      {
        round: 2,
        title: 'Round 2: Secondary Colors 🟢🟠🟣',
        hint: 'Put Green, Orange, and Purple items into their matching baskets!',
        audioHint: 'assets/lab/audio/sort_hint_r2.mp3',
        baskets: [
          { color: 'green', name: 'Green Basket', emoji: '🧺', hex: '#10b981', class: 'basket-green' },
          { color: 'orange', name: 'Orange Basket', emoji: '🧺', hex: '#f97316', class: 'basket-orange' },
          { color: 'purple', name: 'Purple Basket', emoji: '🧺', hex: '#a855f7', class: 'basket-purple' }
        ],
        items: [
          { id: 'i7', name: 'Green Frog', emoji: '🐸', color: 'green', audio: 'assets/lab/audio/item_green_frog.mp3' },
          { id: 'i8', name: 'Green Leaf', emoji: '🍃', color: 'green', audio: 'assets/lab/audio/item_green_leaf.mp3' },
          { id: 'i9', name: 'Orange Carrot', emoji: '🥕', color: 'orange', audio: 'assets/lab/audio/item_orange_carrot.mp3' },
          { id: 'i10', name: 'Orange', emoji: '🍊', color: 'orange', audio: 'assets/lab/audio/item_orange_orange.mp3' },
          { id: 'i11', name: 'Purple Grapes', emoji: '🍇', color: 'purple', audio: 'assets/lab/audio/item_purple_grapes.mp3' },
          { id: 'i12', name: 'Purple Eggplant', emoji: '🍆', color: 'purple', audio: 'assets/lab/audio/item_purple_eggplant.mp3' }
        ]
      },
      {
        round: 3,
        title: 'Round 3: Grand Rainbow Challenge 🌈',
        hint: 'Four colors! Red, Yellow, Blue and Green!',
        audioHint: 'assets/lab/audio/sort_hint_r3.mp3',
        baskets: [
          { color: 'red', name: 'Red Basket', emoji: '🧺', hex: '#ef4444', class: 'basket-red' },
          { color: 'yellow', name: 'Yellow Basket', emoji: '🧺', hex: '#eab308', class: 'basket-yellow' },
          { color: 'blue', name: 'Blue Basket', emoji: '🧺', hex: '#3b82f6', class: 'basket-blue' },
          { color: 'green', name: 'Green Basket', emoji: '🧺', hex: '#10b981', class: 'basket-green' }
        ],
        items: [
          { id: 'i13', name: 'Red Heart', emoji: '❤️', color: 'red', audio: 'assets/lab/audio/item_red_heart.mp3' },
          { id: 'i14', name: 'Red Balloon', emoji: '🎈', color: 'red', audio: 'assets/lab/audio/item_red_balloon.mp3' },
          { id: 'i15', name: 'Yellow Star', emoji: '⭐', color: 'yellow', audio: 'assets/lab/audio/item_yellow_star.mp3' },
          { id: 'i16', name: 'Yellow Lemon', emoji: '🍋', color: 'yellow', audio: 'assets/lab/audio/item_yellow_lemon.mp3' },
          { id: 'i17', name: 'Blue Whale', emoji: '🐳', color: 'blue', audio: 'assets/lab/audio/item_blue_whale.mp3' },
          { id: 'i18', name: 'Blue Bird', emoji: '🐦', color: 'blue', audio: 'assets/lab/audio/item_blue_bird.mp3' },
          { id: 'i19', name: 'Green Tree', emoji: '🌳', color: 'green', audio: 'assets/lab/audio/item_green_tree.mp3' },
          { id: 'i20', name: 'Green Caterpillar', emoji: '🐛', color: 'green', audio: 'assets/lab/audio/item_green_caterpillar.mp3' }
        ]
      }
    ];

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
    this.initColorSortingGame();
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
      this.renderSortingRound(this.currentSortingRound);
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
     LEVEL 3: 🧺 COLOR SORTING BASKETS (PRESCHOOL CLASSIFICATION SYSTEM)
     ========================================================================== */
  initColorSortingGame() {
    // Round selector buttons
    [1, 2, 3].forEach(r => {
      const btn = document.getElementById(`btnRound${r}`);
      if (btn) {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.sorting-round-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentSortingRound = r;
          this.renderSortingRound(r);
          this.playPopSound(500, 0.06);
        });
      }
    });

    // Voice instruction button
    const btnVoice = document.getElementById('btnVoiceInstruction');
    if (btnVoice) {
      btnVoice.addEventListener('click', () => {
        const roundData = this.sortingRounds[this.currentSortingRound - 1];
        this.playStudioAudio(roundData.audioHint, `Level 3. ${roundData.hint}. Drag or tap each object to its matching basket.`);
        this.playChime('C');
      });
    }

    // Restart button
    const btnRestart = document.getElementById('btnRestartRound');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        this.renderSortingRound(this.currentSortingRound);
        this.playPopSound(380, 0.08);
      });
    }

    // Next round action button
    const btnNextRound = document.getElementById('btnNextRoundAction');
    if (btnNextRound) {
      btnNextRound.addEventListener('click', () => {
        const nextRound = this.currentSortingRound < 3 ? this.currentSortingRound + 1 : 1;
        this.currentSortingRound = nextRound;
        const targetBtn = document.getElementById(`btnRound${nextRound}`);
        if (targetBtn) {
          document.querySelectorAll('.sorting-round-btn').forEach(b => b.classList.remove('active'));
          targetBtn.classList.add('active');
        }
        this.renderSortingRound(nextRound);
        this.playChime('G');
      });
    }
  }

  renderSortingRound(roundNum) {
    const roundData = this.sortingRounds[roundNum - 1] || this.sortingRounds[0];
    const basketsGrid = document.getElementById('sortingBasketsGrid');
    const itemsContainer = document.getElementById('sortingItemsContainer');
    const winBanner = document.getElementById('sortingWinBanner');
    const countEl = document.getElementById('itemsRemainingCount');
    const titleEl = document.getElementById('sortingMissionTitle');
    const hintEl = document.getElementById('sortingMissionHint');

    if (!basketsGrid || !itemsContainer) return;

    if (winBanner) winBanner.classList.remove('active');
    if (titleEl) titleEl.textContent = `${roundData.title}`;
    if (hintEl) hintEl.textContent = `${roundData.hint}`;

    this.selectedSortingItem = null;
    this.remainingItems = [...roundData.items];
    this.droppedBasketsCount = {};
    roundData.baskets.forEach(b => { this.droppedBasketsCount[b.color] = []; });

    if (countEl) countEl.textContent = this.remainingItems.length;

    // 1. Render Baskets
    basketsGrid.innerHTML = '';
    roundData.baskets.forEach(b => {
      const card = document.createElement('div');
      card.className = `color-basket-card ${b.class}`;
      card.dataset.color = b.color;
      card.innerHTML = `
        <div class="basket-icon-wrap">${b.emoji}</div>
        <h3 class="basket-title" style="color: ${b.hex};">${b.name}</h3>
        <div class="basket-counter-badge" id="basketBadge_${b.color}">0 items</div>
        <div class="basket-dropped-preview" id="basketDropped_${b.color}"></div>
      `;

      // Drag and drop listeners on basket
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
        const itemId = e.dataTransfer.getData('text/plain');
        const itemObj = this.remainingItems.find(it => it.id === itemId);
        if (itemObj) {
          this.handleItemDroppedOnBasket(itemObj, b.color, card);
        }
      });

      // Tap-to-drop listener on basket
      card.addEventListener('click', () => {
        if (this.selectedSortingItem) {
          this.handleItemDroppedOnBasket(this.selectedSortingItem, b.color, card);
        } else {
          // If no item selected, pronounce basket color
          this.speakColor(`${b.name}`);
          this.playPopSound(480, 0.05);
        }
      });

      basketsGrid.appendChild(card);
    });

    // 2. Render Items
    this.renderRemainingItems();

    // Friendly initial speech cue using ElevenLabs Studio Audio
    setTimeout(() => {
      this.playStudioAudio(roundData.audioHint, `Round ${roundNum}. ${roundData.hint}`);
    }, 300);
  }

  playStudioAudio(audioSrc, fallbackText) {
    if (audioSrc) {
      try {
        const audio = new Audio(audioSrc);
        audio.volume = 1.0;
        audio.play().catch(() => {
          if (fallbackText) this.speakColor(fallbackText);
        });
        return;
      } catch (e) {}
    }
    if (fallbackText) this.speakColor(fallbackText);
  }

  renderRemainingItems() {
    const itemsContainer = document.getElementById('sortingItemsContainer');
    const countEl = document.getElementById('itemsRemainingCount');
    if (!itemsContainer) return;

    itemsContainer.innerHTML = '';
    if (countEl) countEl.textContent = this.remainingItems.length;

    this.remainingItems.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.className = 'sortable-item-card';
      itemCard.id = `itemCard_${item.id}`;
      itemCard.draggable = true;

      itemCard.innerHTML = `
        <div class="sortable-item-emoji">${item.emoji}</div>
        <div class="sortable-item-name">${item.name}</div>
        <button class="sortable-item-audio-btn" title="Listen" aria-label="Listen">🔊</button>
      `;

      // Audio button
      const audioBtn = itemCard.querySelector('.sortable-item-audio-btn');
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.playStudioAudio(item.audio, `${item.name}`);
        this.playPopSound(540, 0.05);
      });

      // HTML5 Drag Events
      itemCard.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
        itemCard.classList.add('dragging');
        this.playStudioAudio(item.audio, item.color);
      });
      itemCard.addEventListener('dragend', () => {
        itemCard.classList.remove('dragging');
      });

      // Tap to Select / Deselect
      itemCard.addEventListener('click', () => {
        if (this.selectedSortingItem && this.selectedSortingItem.id === item.id) {
          // Deselect
          this.selectedSortingItem = null;
          itemCard.classList.remove('selected-for-drop');
        } else {
          // Select this item
          document.querySelectorAll('.sortable-item-card').forEach(c => c.classList.remove('selected-for-drop'));
          this.selectedSortingItem = item;
          itemCard.classList.add('selected-for-drop');
          this.playStudioAudio(item.audio, `${item.name}! Touch the matching basket!`);
          this.playPopSound(620, 0.06);

          // Highlight matching baskets subtly
          document.querySelectorAll('.color-basket-card').forEach(b => {
            b.classList.remove('highlight-target');
          });
        }
      });

      itemsContainer.appendChild(itemCard);
    });
  }

  handleItemDroppedOnBasket(item, basketColor, basketEl) {
    if (item.color === basketColor) {
      // SUCCESS!
      this.playPopSound(800, 0.1);
      setTimeout(() => this.playChime('G'), 80);
      this.speakColor(`${item.name} in ${basketColor}! Awesome!`);

      // Add to dropped preview
      if (!this.droppedBasketsCount[basketColor]) this.droppedBasketsCount[basketColor] = [];
      this.droppedBasketsCount[basketColor].push(item);

      const previewEl = document.getElementById(`basketDropped_${basketColor}`);
      if (previewEl) {
        const mini = document.createElement('span');
        mini.className = 'basket-mini-tag';
        mini.textContent = item.emoji;
        mini.title = item.name;
        previewEl.appendChild(mini);
      }

      const badgeEl = document.getElementById(`basketBadge_${basketColor}`);
      if (badgeEl) {
        const total = this.droppedBasketsCount[basketColor].length;
        badgeEl.textContent = `${total} item${total > 1 ? 's' : ''}`;
      }

      // Remove from remaining items list
      this.remainingItems = this.remainingItems.filter(it => it.id !== item.id);
      this.selectedSortingItem = null;
      this.renderRemainingItems();

      // Check for round win!
      if (this.remainingItems.length === 0) {
        this.triggerRoundWin();
      }
    } else {
      // ERROR (Try Again)
      basketEl.classList.remove('shake-error');
      void basketEl.offsetWidth; // trigger reflow
      basketEl.classList.add('shake-error');
      setTimeout(() => basketEl.classList.remove('shake-error'), 500);

      this.playPopSound(220, 0.18);
      this.speakColor(`Oops! ${item.name} is ${item.color}, not ${basketColor}. Try again!`);

      // Deselect
      this.selectedSortingItem = null;
      document.querySelectorAll('.sortable-item-card').forEach(c => c.classList.remove('selected-for-drop'));
    }
  }

  triggerRoundWin() {
    const winBanner = document.getElementById('sortingWinBanner');
    if (winBanner) {
      winBanner.classList.add('active');
    }

    // Star award
    const starsCount = document.getElementById('globalStarsCount');
    if (starsCount) {
      const current = parseInt(starsCount.textContent, 10) || 0;
      starsCount.textContent = current + 3;
    }

    // Melodic celebration fanfare
    this.playChime('C');
    setTimeout(() => this.playChime('E'), 100);
    setTimeout(() => this.playChime('G'), 200);
    setTimeout(() => this.playChime('C6'), 300);

    setTimeout(() => {
      this.speakColor("Congratulations! You sorted all the colors! You did it!");
    }, 400);
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
