// BiliKids Junior Science Lab Engine - Multi-Experiment & Multi-Level Edition
(() => {
  'use strict';

  // --- Sound FX Controller via Web Audio API & Audio Elements ---
  class SoundController {
    constructor() {
      this.ctx = null;
      this.muted = false;
      this.audioElements = {};
      this.speechFiles = {
        red: 'assets/audio/red.mp3',
        yellow: 'assets/audio/yellow.mp3',
        blue: 'assets/audio/blue.mp3',
        orange: 'assets/audio/orange.mp3',
        green: 'assets/audio/green.mp3',
        purple: 'assets/audio/purple.mp3',
        pink: 'assets/audio/pink.mp3',
        cheer_awesome: 'assets/audio/cheer_awesome.mp3',
        cheer_great: 'assets/audio/cheer_great_job.mp3',
        cheer_did_it: 'assets/audio/cheer_you_did_it.mp3'
      };
      this.initAudioContext();
    }

    initAudioContext() {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx && !this.ctx) {
        this.ctx = new AudioCtx();
      }
    }

    resume() {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playWord(wordKey) {
      if (this.muted) return;
      const path = this.speechFiles[wordKey];
      if (!path) return;
      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
      try {
        if (!this.audioElements[wordKey]) {
          this.audioElements[wordKey] = new Audio(path);
        }
        const audio = this.audioElements[wordKey];
        audio.currentTime = 0;
        audio.play().catch(e => console.log('Audio autoplay prevented:', e));
      } catch (err) {
        console.warn('Word audio error:', err);
      }
    }

    playRandomCheer() {
      const cheers = ['cheer_awesome', 'cheer_great', 'cheer_did_it'];
      const choice = cheers[Math.floor(Math.random() * cheers.length)];
      this.playWord(choice);
    }

    playPop() {
      if (this.muted) return;
      this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    }

    playPour() {
      if (this.muted) return;
      this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      for (let i = 0; i < 4; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        const startFreq = 400 + Math.random() * 300;
        osc.frequency.setValueAtTime(startFreq, now + i * 0.07);
        osc.frequency.exponentialRampToValueAtTime(startFreq + 150, now + (i + 1) * 0.07);
        gain.gain.setValueAtTime(0.15, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.01, now + (i + 1) * 0.07);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + (i + 1) * 0.07);
      }
    }

    playElectricClick(on = true) {
      if (this.muted) return;
      this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(on ? 520 : 320, now);
      osc.frequency.exponentialRampToValueAtTime(on ? 780 : 180, now + 0.1);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    }

    playMagicChime() {
      if (this.muted) return;
      this.resume();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.25, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.45);
      });
    }

    playWaterSplash() {
      if (this.muted) return;
      this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.15);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    }

    playMagnetClick() {
      if (this.muted) return;
      this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    }

    playFizz() {
      if (this.muted) return;
      this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Synthesize rushing bubbling foam
      const bufferSize = this.ctx.sampleRate * 1.5;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1000, now);
      filter.frequency.exponentialRampToValueAtTime(2500, now + 1.2);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.5);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    }
  }

  const sound = new SoundController();
  document.addEventListener('pointerdown', () => sound.resume(), { once: true });

  // --- Global Stars Counter ---
  let globalStars = 0;
  const globalStarsCountEl = document.getElementById('globalStarsCount');

  function awardStars(count = 1) {
    globalStars += count;
    if (globalStarsCountEl) {
      globalStarsCountEl.textContent = globalStars;
      globalStarsCountEl.style.transform = 'scale(1.4)';
      setTimeout(() => {
        globalStarsCountEl.style.transform = 'scale(1)';
      }, 300);
    }
  }

  // --- Sound & Fullscreen Controls ---
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');
  if (btnSoundToggle) {
    btnSoundToggle.addEventListener('click', () => {
      sound.muted = !sound.muted;
      soundIcon.textContent = sound.muted ? '🔇' : '🔊';
    });
  }

  const btnFullscreen = document.getElementById('btnFullscreen');
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  // --- Experiment Tab Switching (6 Tabs) ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const experimentPanels = document.querySelectorAll('.experiment-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetExp = btn.dataset.exp;
      tabBtns.forEach(b => b.classList.remove('active'));
      experimentPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanelId = `exp${targetExp.charAt(0).toUpperCase() + targetExp.slice(1)}`;
      const panel = document.getElementById(targetPanelId);
      if (panel) {
        panel.classList.add('active');
        sound.playPop();
      }
    });
  });

  // Handle URL parameter and hash navigation (e.g. ?exp=plant, ?exp=density, #magnet, #volcano)
  function checkUrlNavigation() {
    const params = new URLSearchParams(window.location.search);
    const expParam = params.get('exp');
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const target = (expParam || hash || '').toLowerCase();
    if (target) {
      const matchBtn = Array.from(tabBtns).find(b => b.dataset.exp === target);
      if (matchBtn) matchBtn.click();
    }
  }
  window.addEventListener('hashchange', checkUrlNavigation);
  checkUrlNavigation();

  // =========================================================================
  // EXPERIMENT 1: COLOR ALCHEMY ENGINE (15+ RECIPES & 4 LEVELS)
  // =========================================================================
  const beakerLiquid = document.getElementById('beakerLiquid');
  const beakerBubbles = document.getElementById('beakerBubbles');
  const beakerGlow = document.getElementById('beakerGlow');
  const formulaBanner = document.getElementById('formulaBanner');
  const formulaText = formulaBanner.querySelector('.formula-text');
  const btnClearBeaker = document.getElementById('btnClearBeaker');
  const btnSparkleBeaker = document.getElementById('btnSparkleBeaker');
  const potionCountEl = document.getElementById('potionCount');

  const colorMissionCard = document.getElementById('colorMissionCard');
  const colorTargetDesc = document.getElementById('colorTargetDesc');
  const colorTargetDot = document.getElementById('colorTargetDot');

  let colorLevel = 1;
  let colorLevelRound = 0;
  let mixedColors = [];
  const discoveredPotions = new Set();

  // Color Level Missions
  const COLOR_MISSIONS = {
    1: [
      { target: 'orange', name: 'ORANGE 🍊', color: '#ea580c', req: ['red', 'yellow'], hint: 'Mix Red 🔴 + Yellow 🟡' },
      { target: 'green', name: 'GREEN 🍃', color: '#16a34a', req: ['blue', 'yellow'], hint: 'Mix Blue 🔵 + Yellow 🟡' },
      { target: 'purple', name: 'PURPLE 🍇', color: '#7c3aed', req: ['red', 'blue'], hint: 'Mix Red 🔴 + Blue 🔵' }
    ],
    2: [
      { target: 'pink', name: 'PINK 🌸', color: '#ec4899', req: ['red', 'white'], hint: 'Mix Red 🔴 + Magic White ⚪' },
      { target: 'skyblue', name: 'SKY BLUE 🩵', color: '#0284c7', req: ['blue', 'white'], hint: 'Mix Blue 🔵 + Magic White ⚪' },
      { target: 'lavender', name: 'LAVENDER 🪻', color: '#c084fc', req: ['purple', 'white'], hint: 'Mix Purple 🟣 + Magic White ⚪' },
      { target: 'mint', name: 'MINT GREEN 🍦', color: '#4ade80', req: ['green', 'white'], hint: 'Mix Green 🟢 + Magic White ⚪' }
    ],
    3: [
      { target: 'brown', name: 'CHOCOLATE BROWN 🍫', color: '#78350f', req: ['orange', 'black'], hint: 'Mix Orange 🟠 + Deep Black ⚫' },
      { target: 'navy', name: 'MIDNIGHT NAVY 🌌', color: '#1e3a8a', req: ['blue', 'black'], hint: 'Mix Blue 🔵 + Deep Black ⚫' },
      { target: 'gray', name: 'SILVER GRAY 🌪️', color: '#64748b', req: ['black', 'white'], hint: 'Mix Black ⚫ + Magic White ⚪' },
      { target: 'olive', name: 'OLIVE GREEN 🫒', color: '#65a30d', req: ['yellow', 'black'], hint: 'Mix Yellow 🟡 + Deep Black ⚫' }
    ],
    4: [
      { target: 'rainbow', name: 'RAINBOW ELIXIR 🌈', color: '#ec4899', req: ['red', 'yellow', 'blue'], hint: 'Mix 3 or more colors for the Rainbow Elixir!' }
    ]
  };

  function updateColorMission() {
    const stage1 = document.getElementById('colorStageLvl1');
    const stage2 = document.getElementById('colorStagePainting');
    const stage3 = document.getElementById('colorStagePrism');
    const stage4 = document.getElementById('colorStageBubbles');

    if (stage1) stage1.style.display = (colorLevel === 1) ? 'block' : 'none';
    if (stage2) stage2.style.display = (colorLevel === 2) ? 'block' : 'none';
    if (stage3) stage3.style.display = (colorLevel === 3) ? 'block' : 'none';
    if (stage4) stage4.style.display = (colorLevel === 4) ? 'block' : 'none';

    if (colorLevel === 1) {
      const list = COLOR_MISSIONS[1];
      if (colorLevelRound >= list.length) colorLevelRound = 0;
      const mission = list[colorLevelRound];
      if (colorMissionCard) {
        colorMissionCard.style.display = 'flex';
        colorTargetDesc.innerHTML = `Mix colors to make <strong>${mission.name}</strong>! (${mission.hint})`;
        colorTargetDot.style.background = mission.color;
      }
    }
  }

  // Setup Level Chips for Color Alchemy
  const colorsLevelTabs = document.getElementById('colorsLevelTabs');
  if (colorsLevelTabs) {
    colorsLevelTabs.querySelectorAll('.lvl-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        colorsLevelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        colorLevel = parseInt(chip.dataset.level, 10);
        colorLevelRound = 0;
        emptyColorBeaker();
        updateColorMission();
        if (window.colorMagicSuiteEngine) {
          window.colorMagicSuiteEngine.switchStage(colorLevel);
        }
        sound.playPop();
      });
    });

    // Check URL parameters for direct level linking
    const urlParams = new URLSearchParams(window.location.search);
    const initialLvl = parseInt(urlParams.get('level'), 10);
    if (initialLvl >= 1 && initialLvl <= 4) {
      colorLevel = initialLvl;
      const targetChip = colorsLevelTabs.querySelector(`.lvl-chip[data-level="${initialLvl}"]`);
      if (targetChip) {
        colorsLevelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        targetChip.classList.add('active');
      }
      updateColorMission();
    }
  }

  function spawnBeakerBubbles() {
    beakerBubbles.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      const b = document.createElement('div');
      b.className = 'liquid-bubble';
      const size = 6 + Math.random() * 14;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${10 + Math.random() * 75}%`;
      b.style.animationDelay = `${Math.random() * 1.5}s`;
      beakerBubbles.appendChild(b);
    }
  }

  function unlockPotionBadge(badgeId) {
    const badge = document.getElementById(badgeId);
    if (badge && !badge.classList.contains('unlocked')) {
      badge.classList.add('unlocked');
      badge.querySelector('.disc-circle').textContent = '✓';
      discoveredPotions.add(badgeId);
      if (potionCountEl) {
        potionCountEl.textContent = `${discoveredPotions.size} / 12 Unlocked`;
      }
      awardStars(1);
    }
  }

  function emptyColorBeaker() {
    mixedColors = [];
    beakerLiquid.style.height = '0%';
    beakerLiquid.style.background = 'transparent';
    beakerBubbles.innerHTML = '';
    beakerGlow.classList.remove('active');
    formulaBanner.classList.remove('success');
    formulaText.textContent = 'Tap colors on the left to pour into the magic beaker!';
  }

  function pourFlask(color) {
    if (mixedColors.length >= 3) {
      emptyColorBeaker();
    }
    mixedColors.push(color);
    sound.playPour();
    evalColorMix();
  }

  function evalColorMix() {
    if (mixedColors.length === 0) {
      emptyColorBeaker();
      return;
    }

    if (mixedColors.length === 1) {
      const c = mixedColors[0];
      beakerLiquid.style.height = '42%';
      beakerGlow.classList.remove('active');
      formulaBanner.classList.remove('success');

      const colorMap = {
        red: { bg: 'linear-gradient(180deg, #f87171, #dc2626)', text: '1st color: Red 🔴. Add another color!' },
        yellow: { bg: 'linear-gradient(180deg, #fde047, #ca8a04)', text: '1st color: Yellow 🟡. Add another color!' },
        blue: { bg: 'linear-gradient(180deg, #60a5fa, #1d4ed8)', text: '1st color: Blue 🔵. Add another color!' },
        white: { bg: 'linear-gradient(180deg, #f8fafc, #cbd5e1)', text: '1st color: Magic White ⚪. Add another color!' },
        black: { bg: 'linear-gradient(180deg, #475569, #0f172a)', text: '1st color: Deep Black ⚫. Add another color!' },
        green: { bg: 'linear-gradient(180deg, #4ade80, #16a34a)', text: '1st color: Green 🟢. Add another color!' },
        purple: { bg: 'linear-gradient(180deg, #c084fc, #7e22ce)', text: '1st color: Purple 🟣. Add another color!' },
        orange: { bg: 'linear-gradient(180deg, #fb923c, #ea580c)', text: '1st color: Orange 🟠. Add another color!' }
      };

      const info = colorMap[c] || colorMap.red;
      beakerLiquid.style.background = info.bg;
      formulaText.textContent = info.text;
      spawnBeakerBubbles();
      return;
    }

    // 2 or 3 colors
    beakerLiquid.style.height = '85%';
    beakerGlow.classList.add('active');
    formulaBanner.classList.add('success');
    spawnBeakerBubbles();

    const set = new Set(mixedColors);
    let outcome = null;

    // Check recipes
    if (set.has('red') && set.has('yellow')) {
      outcome = { name: 'ORANGE! 🍊', bg: 'linear-gradient(180deg, #fb923c, #ea580c)', badge: 'badgeOrange', word: 'orange', key: 'orange' };
    } else if (set.has('blue') && set.has('yellow')) {
      outcome = { name: 'GREEN! 🍃', bg: 'linear-gradient(180deg, #4ade80, #16a34a)', badge: 'badgeGreen', word: 'green', key: 'green' };
    } else if (set.has('red') && set.has('blue')) {
      outcome = { name: 'PURPLE! 🍇', bg: 'linear-gradient(180deg, #a78bfa, #7c3aed)', badge: 'badgePurple', word: 'purple', key: 'purple' };
    } else if (set.has('red') && set.has('white')) {
      outcome = { name: 'PINK! 🌸', bg: 'linear-gradient(180deg, #f472b6, #db2777)', badge: 'badgePink', word: 'pink', key: 'pink' };
    } else if (set.has('blue') && set.has('white')) {
      outcome = { name: 'SKY BLUE! 🩵', bg: 'linear-gradient(180deg, #7dd3fc, #0284c7)', badge: 'badgeSkyBlue', word: 'blue', key: 'skyblue' };
    } else if (set.has('purple') && set.has('white')) {
      outcome = { name: 'LAVENDER! 🪻', bg: 'linear-gradient(180deg, #d8b4fe, #9333ea)', badge: 'badgeLavender', word: 'purple', key: 'lavender' };
    } else if (set.has('green') && set.has('white')) {
      outcome = { name: 'MINT GREEN! 🍦', bg: 'linear-gradient(180deg, #86efac, #15803d)', badge: 'badgeMint', word: 'green', key: 'mint' };
    } else if ((set.has('orange') && set.has('black')) || (set.has('red') && set.has('green'))) {
      outcome = { name: 'CHOCOLATE BROWN! 🍫', bg: 'linear-gradient(180deg, #b45309, #78350f)', badge: 'badgeBrown', word: null, key: 'brown' };
    } else if (set.has('blue') && set.has('black')) {
      outcome = { name: 'MIDNIGHT NAVY! 🌌', bg: 'linear-gradient(180deg, #1e3a8a, #0f172a)', badge: 'badgeNavy', word: 'blue', key: 'navy' };
    } else if (set.has('black') && set.has('white')) {
      outcome = { name: 'SILVER GRAY! 🌪️', bg: 'linear-gradient(180deg, #94a3b8, #475569)', badge: 'badgeGray', word: null, key: 'gray' };
    } else if (set.has('yellow') && set.has('black')) {
      outcome = { name: 'OLIVE GREEN! 🫒', bg: 'linear-gradient(180deg, #a3e635, #4d7c0f)', badge: 'badgeOlive', word: 'green', key: 'olive' };
    } else if (mixedColors.length >= 3 || (set.has('red') && set.has('yellow') && set.has('blue'))) {
      outcome = { name: 'RAINBOW ELIXIR! 🌈', bg: 'linear-gradient(135deg, #f43f5e, #f59e0b, #10b981, #3b82f6)', badge: 'badgeRainbow', word: null, key: 'rainbow' };
    } else {
      outcome = { name: `${mixedColors[0].toUpperCase()} + ${mixedColors[1].toUpperCase()}! ✨`, bg: 'linear-gradient(180deg, #cbd5e1, #64748b)', badge: null, word: null, key: 'other' };
    }

    beakerLiquid.style.background = outcome.bg;
    formulaText.textContent = `🎉 CREATED ${outcome.name}!`;

    if (outcome.badge) {
      unlockPotionBadge(outcome.badge);
    }

    if (outcome.word) {
      sound.playWord(outcome.word);
    } else {
      sound.playMagicChime();
    }

    // Check Mission completion
    const currentList = COLOR_MISSIONS[colorLevel] || COLOR_MISSIONS[1];
    const currentMission = currentList[colorLevelRound];
    if (currentMission && currentMission.target === outcome.key) {
      sound.playRandomCheer();
      awardStars(2);
      setTimeout(() => {
        colorLevelRound++;
        emptyColorBeaker();
        updateColorMission();
      }, 1800);
    }
  }

  // Setup Flask Buttons
  document.querySelectorAll('.flask-card').forEach(card => {
    card.addEventListener('click', () => {
      const color = card.dataset.color;
      pourFlask(color);
    });
  });

  if (btnClearBeaker) btnClearBeaker.addEventListener('click', () => {
    emptyColorBeaker();
    sound.playPop();
  });

  if (btnSparkleBeaker) btnSparkleBeaker.addEventListener('click', () => {
    sound.playMagicChime();
    beakerGlow.classList.add('active');
    setTimeout(() => {
      if (mixedColors.length < 2) beakerGlow.classList.remove('active');
    }, 1200);
  });

  updateColorMission();

  // =========================================================================
  // EXPERIMENT 2: ELECTRIC CIRCUIT (4 PROGRESSIVE LEVELS)
  // =========================================================================
  let circuitLevel = 1;
  const circuitBoard = document.getElementById('circuitBoard');
  const circuitStatusLight = document.querySelector('#circuitStatusIndicator .status-light');
  const circuitStatusText = document.getElementById('circuitStatusText');
  const circuitMasterToggle = document.getElementById('circuitMasterToggle');
  const toggleLabel = document.getElementById('toggleLabel');
  const switchToggleContainer = document.getElementById('switchToggleContainer');
  const circuitTargetDesc = document.getElementById('circuitTargetDesc');

  const slotSwitch = document.getElementById('slotSwitch');
  const slotBattery = document.getElementById('slotBattery');
  const slotOutput = document.getElementById('slotOutput');
  const slotWire = document.getElementById('slotWire');
  const slotSecondaryOutput = document.getElementById('slotSecondaryOutput');
  const parallelTrack = document.getElementById('parallelTrack');

  const placedSwitch = document.getElementById('placedSwitch');
  const placedBattery = document.getElementById('placedBattery');
  const placedOutput = document.getElementById('placedOutput');
  const placedWire = document.getElementById('placedWire');
  const placedSecondaryOutput = document.getElementById('placedSecondaryOutput');

  let circuitPlaced = {
    battery: false,
    wire: false,
    switch: false,
    output: null,
    secondaryOutput: null
  };

  const CIRCUIT_LEVEL_INFO = {
    1: { name: 'Simple Glow 💡', mission: 'Place the 9V Battery, Copper Wire, and Light Bulb to complete the circuit!' },
    2: { name: 'Switch Power 🎚️', mission: 'Add a Switch to turn the Light Bulb ON and OFF at will!' },
    3: { name: 'Motor Fan 🌀', mission: 'Power the Propeller Fan to create a cool breeze!' },
    4: { name: 'Dual System ⚡', mission: 'Close the parallel loop to power BOTH the Bulb and the Fan simultaneously!' }
  };

  function updateCircuitLevelUI() {
    clearCircuitBoard();
    const info = CIRCUIT_LEVEL_INFO[circuitLevel];
    if (circuitTargetDesc) circuitTargetDesc.textContent = info.mission;

    if (circuitLevel === 1) {
      slotSwitch.style.display = 'flex';
      slotSwitch.querySelector('.slot-hint').textContent = 'Place Top Wire';
      slotSwitch.dataset.slot = 'wire';
      slotSecondaryOutput.style.display = 'none';
      parallelTrack.style.display = 'none';
      switchToggleContainer.style.display = 'none';
    } else if (circuitLevel === 2) {
      slotSwitch.style.display = 'flex';
      slotSwitch.querySelector('.slot-hint').textContent = 'Place Switch';
      slotSwitch.dataset.slot = 'switch';
      slotSecondaryOutput.style.display = 'none';
      parallelTrack.style.display = 'none';
    } else if (circuitLevel === 3) {
      slotSwitch.style.display = 'flex';
      slotSwitch.querySelector('.slot-hint').textContent = 'Place Switch';
      slotSwitch.dataset.slot = 'switch';
      slotSecondaryOutput.style.display = 'none';
      parallelTrack.style.display = 'none';
    } else if (circuitLevel === 4) {
      slotSwitch.style.display = 'flex';
      slotSwitch.querySelector('.slot-hint').textContent = 'Place Switch';
      slotSwitch.dataset.slot = 'switch';
      slotSecondaryOutput.style.display = 'flex';
      parallelTrack.style.display = 'block';
    }
  }

  const circuitLevelTabs = document.getElementById('circuitLevelTabs');
  if (circuitLevelTabs) {
    circuitLevelTabs.querySelectorAll('.lvl-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        circuitLevelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        circuitLevel = parseInt(chip.dataset.level, 10);
        updateCircuitLevelUI();
        sound.playPop();
      });
    });
  }

  function clearCircuitBoard() {
    circuitPlaced = { battery: false, wire: false, switch: false, output: null, secondaryOutput: null };
    placedBattery.textContent = '';
    placedWire.textContent = '';
    placedSwitch.textContent = '';
    placedOutput.textContent = '';
    placedOutput.removeAttribute('data-comp');
    if (placedSecondaryOutput) {
      placedSecondaryOutput.textContent = '';
      placedSecondaryOutput.removeAttribute('data-comp');
    }
    document.querySelectorAll('.circuit-slot').forEach(s => s.classList.remove('filled'));
    document.querySelectorAll('.circuit-item').forEach(i => i.classList.remove('placed'));
    setCircuitActive(false);
  }

  function setCircuitActive(active) {
    if (active) {
      circuitBoard.classList.add('active');
      circuitStatusLight.className = 'status-light green';
      circuitStatusText.textContent = 'Circuit Complete! Current Flowing ⚡';
      sound.playElectricClick(true);
    } else {
      circuitBoard.classList.remove('active');
      circuitStatusLight.className = 'status-light red';
      circuitStatusText.textContent = 'Incomplete Circuit';
    }
  }

  function evalCircuitState() {
    let complete = false;

    if (circuitLevel === 1) {
      // Battery + Wire + Bulb + Top Wire
      if (circuitPlaced.battery && circuitPlaced.wire && circuitPlaced.output) {
        complete = true;
      }
    } else if (circuitLevel === 2) {
      // Battery + Wire + Switch + Bulb
      if (circuitPlaced.battery && circuitPlaced.wire && circuitPlaced.switch && circuitPlaced.output === 'bulb') {
        switchToggleContainer.style.display = 'flex';
        complete = circuitMasterToggle.checked;
      } else {
        switchToggleContainer.style.display = 'none';
      }
    } else if (circuitLevel === 3) {
      // Battery + Wire + Switch + Fan
      if (circuitPlaced.battery && circuitPlaced.wire && circuitPlaced.switch && circuitPlaced.output === 'fan') {
        switchToggleContainer.style.display = 'flex';
        complete = circuitMasterToggle.checked;
      } else {
        switchToggleContainer.style.display = 'none';
      }
    } else if (circuitLevel === 4) {
      // Dual circuit: Battery + Switch + Wire + Bulb + Fan
      if (circuitPlaced.battery && circuitPlaced.wire && circuitPlaced.switch && circuitPlaced.output && circuitPlaced.secondaryOutput) {
        switchToggleContainer.style.display = 'flex';
        complete = circuitMasterToggle.checked;
      }
    }

    setCircuitActive(complete);
    if (complete) {
      awardStars(1);
    }
  }

  if (circuitMasterToggle) {
    circuitMasterToggle.addEventListener('change', () => {
      toggleLabel.textContent = circuitMasterToggle.checked ? 'Switch is ON ⚡' : 'Switch is OFF';
      sound.playElectricClick(circuitMasterToggle.checked);
      evalCircuitState();
    });
  }

  // Auto-connect helper
  const btnAutoConnectCircuit = document.getElementById('btnAutoConnectCircuit');
  if (btnAutoConnectCircuit) {
    btnAutoConnectCircuit.addEventListener('click', () => {
      sound.playPop();
      placedBattery.textContent = '🔋';
      slotBattery.classList.add('filled');
      circuitPlaced.battery = true;

      placedWire.textContent = '〰️';
      slotWire.classList.add('filled');
      circuitPlaced.wire = true;

      if (circuitLevel === 1) {
        placedSwitch.textContent = '〰️';
        slotSwitch.classList.add('filled');
        placedOutput.textContent = '💡';
        placedOutput.setAttribute('data-comp', 'bulb');
        slotOutput.classList.add('filled');
        circuitPlaced.output = 'bulb';
      } else if (circuitLevel === 2) {
        placedSwitch.textContent = '🎚️';
        slotSwitch.classList.add('filled');
        circuitPlaced.switch = true;
        placedOutput.textContent = '💡';
        placedOutput.setAttribute('data-comp', 'bulb');
        slotOutput.classList.add('filled');
        circuitPlaced.output = 'bulb';
        circuitMasterToggle.checked = true;
        toggleLabel.textContent = 'Switch is ON ⚡';
      } else if (circuitLevel === 3) {
        placedSwitch.textContent = '🎚️';
        slotSwitch.classList.add('filled');
        circuitPlaced.switch = true;
        placedOutput.textContent = '🌀';
        placedOutput.setAttribute('data-comp', 'fan');
        slotOutput.classList.add('filled');
        circuitPlaced.output = 'fan';
        circuitMasterToggle.checked = true;
        toggleLabel.textContent = 'Switch is ON ⚡';
      } else if (circuitLevel === 4) {
        placedSwitch.textContent = '🎚️';
        slotSwitch.classList.add('filled');
        circuitPlaced.switch = true;
        placedOutput.textContent = '💡';
        placedOutput.setAttribute('data-comp', 'bulb');
        slotOutput.classList.add('filled');
        circuitPlaced.output = 'bulb';

        placedSecondaryOutput.textContent = '🌀';
        placedSecondaryOutput.setAttribute('data-comp', 'fan');
        slotSecondaryOutput.classList.add('filled');
        circuitPlaced.secondaryOutput = 'fan';

        circuitMasterToggle.checked = true;
        toggleLabel.textContent = 'Switch is ON ⚡';
      }

      document.querySelectorAll('.circuit-item').forEach(i => i.classList.add('placed'));
      evalCircuitState();
    });
  }

  const btnResetCircuit = document.getElementById('btnResetCircuit');
  if (btnResetCircuit) {
    btnResetCircuit.addEventListener('click', () => {
      clearCircuitBoard();
      sound.playPop();
    });
  }

  updateCircuitLevelUI();

  // =========================================================================
  // EXPERIMENT 3: MAGIC BOTANICAL GARDEN (4 BOTANICAL SPECIES)
  // =========================================================================
  let plantLevel = 1;
  let plantGrowthStep = 0; // 0: None, 1: Soil, 2: Seed, 3: Water, 4: Sun/Bloom
  const potSoil = document.getElementById('potSoil');
  const plantSprout = document.getElementById('plantSprout');
  const plantFlower = document.getElementById('plantFlower');
  const bloomHead = document.getElementById('bloomHead');
  const skySun = document.getElementById('skySun');
  const wateringCan = document.getElementById('wateringCan');
  const butterflies = document.getElementById('butterflies');
  const plantBubble = document.getElementById('plantBubble');
  const plantTargetDesc = document.getElementById('plantTargetDesc');
  const harvestContainer = document.getElementById('harvestContainer');

  const toolSoil = document.getElementById('toolSoil');
  const toolSeed = document.getElementById('toolSeed');
  const toolWater = document.getElementById('toolWater');
  const toolSun = document.getElementById('toolSun');

  const statusSoil = document.getElementById('statusSoil');
  const statusSeed = document.getElementById('statusSeed');
  const statusWater = document.getElementById('statusWater');
  const statusSun = document.getElementById('statusSun');

  const SPECIES_CONFIG = {
    1: { id: 'sunflower', name: 'Giant Sunflower', seedIcon: '🌰', seedName: 'Sunflower Seed', bloom: '🌻', desc: 'Grow a towering sunflower with bees!' },
    2: { id: 'strawberry', name: 'Sweet Strawberry', seedIcon: '🌱', seedName: 'Berry Seeds', bloom: '🍓', desc: 'Grow strawberries and tap to harvest them!' },
    3: { id: 'rose', name: 'Royal Red Rose', seedIcon: '🌰', seedName: 'Rose Cutting', bloom: '🌹', desc: 'Bloom a velvety red rose with butterflies!' },
    4: { id: 'tree', name: 'Enchanted Tree', seedIcon: '✨', seedName: 'Star Acorn', bloom: '🌳', desc: 'Grow an enchanted luminescent tree!' }
  };

  function updatePlantLevel() {
    resetPlantGarden();
    const config = SPECIES_CONFIG[plantLevel] || SPECIES_CONFIG[1];
    if (plantTargetDesc) plantTargetDesc.textContent = config.desc;
    document.getElementById('seedIcon').textContent = config.seedIcon;
    document.getElementById('seedLabel').textContent = `2. Plant ${config.seedName}`;
    bloomHead.textContent = config.bloom;

    // Update species buttons active state
    document.querySelectorAll('.flower-pick').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.species === config.id);
    });
  }

  const plantLevelTabs = document.getElementById('plantLevelTabs');
  if (plantLevelTabs) {
    plantLevelTabs.querySelectorAll('.lvl-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        plantLevelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        plantLevel = parseInt(chip.dataset.level, 10);
        updatePlantLevel();
        sound.playPop();
      });
    });
  }

  // Species buttons in side panel
  document.querySelectorAll('.flower-pick').forEach(btn => {
    btn.addEventListener('click', () => {
      const species = btn.dataset.species;
      const lvlMap = { sunflower: 1, strawberry: 2, rose: 3, tree: 4 };
      plantLevel = lvlMap[species] || 1;
      if (plantLevelTabs) {
        plantLevelTabs.querySelectorAll('.lvl-chip').forEach(c => {
          c.classList.toggle('active', parseInt(c.dataset.level, 10) === plantLevel);
        });
      }
      updatePlantLevel();
      sound.playPop();
    });
  });

  function resetPlantGarden() {
    plantGrowthStep = 0;
    potSoil.classList.remove('filled');
    plantSprout.style.height = '0px';
    plantSprout.style.opacity = '0';
    plantSprout.style.transform = 'scaleY(0)';
    plantFlower.style.opacity = '0';
    plantFlower.style.transform = 'scale(0.2)';
    skySun.classList.remove('active');
    wateringCan.classList.remove('pouring');
    butterflies.classList.remove('active');
    harvestContainer.innerHTML = '';

    toolSoil.disabled = false;
    toolSeed.disabled = true;
    toolWater.disabled = true;
    toolSun.disabled = true;

    statusSoil.textContent = 'Ready';
    statusSeed.textContent = 'Wait';
    statusWater.textContent = 'Wait';
    statusSun.textContent = 'Wait';

    plantBubble.querySelector('span').textContent = "Tap '1. Add Rich Soil' to begin planting!";
  }

  if (toolSoil) toolSoil.addEventListener('click', () => {
    plantGrowthStep = 1;
    potSoil.classList.add('filled');
    sound.playPop();
    toolSoil.disabled = true;
    statusSoil.textContent = 'Done ✓';
    toolSeed.disabled = false;
    statusSeed.textContent = 'Ready';
    plantBubble.querySelector('span').textContent = 'Rich soil added! Now plant the seed!';
  });

  if (toolSeed) toolSeed.addEventListener('click', () => {
    plantGrowthStep = 2;
    sound.playPop();
    toolSeed.disabled = true;
    statusSeed.textContent = 'Done ✓';
    toolWater.disabled = false;
    statusWater.textContent = 'Ready';
    plantBubble.querySelector('span').textContent = 'Seed tucked in! Give it refreshing water!';
  });

  if (toolWater) toolWater.addEventListener('click', () => {
    plantGrowthStep = 3;
    wateringCan.classList.add('pouring');
    sound.playPour();
    plantSprout.style.height = '75px';
    plantSprout.style.opacity = '1';
    plantSprout.style.transform = 'scaleY(1)';

    setTimeout(() => {
      wateringCan.classList.remove('pouring');
      toolWater.disabled = true;
      statusWater.textContent = 'Done ✓';
      toolSun.disabled = false;
      statusSun.textContent = 'Ready';
      plantBubble.querySelector('span').textContent = 'Tiny green sprout emerged! Warm sunlight will make it bloom!';
    }, 1200);
  });

  if (toolSun) toolSun.addEventListener('click', () => {
    plantGrowthStep = 4;
    skySun.classList.add('active');
    sound.playMagicChime();
    sound.playRandomCheer();

    setTimeout(() => {
      plantFlower.style.opacity = '1';
      plantFlower.style.transform = 'scale(1)';
      butterflies.classList.add('active');
      toolSun.disabled = true;
      statusSun.textContent = 'Done ✓';

      const config = SPECIES_CONFIG[plantLevel];
      plantBubble.querySelector('span').textContent = `Hooray! The ${config.name} bloomed gorgeously! ⭐`;
      awardStars(2);

      // Level 2 Strawberries: spawn pickable berries!
      if (plantLevel === 2) {
        harvestContainer.innerHTML = `
          <span class="harvest-item">🍓</span>
          <span class="harvest-item">🍓</span>
          <span class="harvest-item">🍓</span>
        `;
        harvestContainer.querySelectorAll('.harvest-item').forEach(b => {
          b.addEventListener('click', () => {
            sound.playPop();
            b.style.transform = 'scale(0)';
            setTimeout(() => b.remove(), 200);
            awardStars(1);
          });
        });
      }
    }, 600);
  });

  const btnResetPlant = document.getElementById('btnResetPlant');
  if (btnResetPlant) {
    btnResetPlant.addEventListener('click', () => {
      resetPlantGarden();
      sound.playPop();
    });
  }

  updatePlantLevel();

  // =========================================================================
  // EXPERIMENT 4: SINK OR FLOAT (4 LEVELS + PREDICTION CHALLENGE)
  // =========================================================================
  let densityLevel = 1;
  let floatCount = 0;
  let sinkCount = 0;
  const countFloatEl = document.getElementById('countFloat');
  const countSinkEl = document.getElementById('countSink');
  const listFloat = document.getElementById('listFloat');
  const listSink = document.getElementById('listSink');
  const droppedItemsLayer = document.getElementById('droppedItemsLayer');
  const densityResult = document.getElementById('densityResult');
  const resultTitle = densityResult.querySelector('.result-title');
  const densityTargetDesc = document.getElementById('densityTargetDesc');
  const densityItemsGrid = document.getElementById('densityItemsGrid');
  const predictionVotePanel = document.getElementById('predictionVotePanel');
  const predItemEmoji = document.getElementById('predItemEmoji');
  const predItemName = document.getElementById('predItemName');
  const btnVoteFloat = document.getElementById('btnVoteFloat');
  const btnVoteSink = document.getElementById('btnVoteSink');

  const DENSITY_LEVEL_ITEMS = {
    1: [ // Nature Items
      { name: 'Feather', emoji: '🪶', density: 'float' },
      { name: 'Wood Log', emoji: '🪵', density: 'float' },
      { name: 'Heavy Rock', emoji: '🪨', density: 'sink' },
      { name: 'Leaf', emoji: '🍃', density: 'float' }
    ],
    2: [ // Toy Box
      { name: 'Rubber Duck', emoji: '🦆', density: 'float' },
      { name: 'Metal Key', emoji: '🗝️', density: 'sink' },
      { name: 'Beach Ball', emoji: '⚽', density: 'float' },
      { name: 'Iron Anchor', emoji: '⚓', density: 'sink' }
    ],
    3: [ // Kitchen & Food
      { name: 'Fresh Apple', emoji: '🍎', density: 'float' },
      { name: 'Metal Spoon', emoji: '🥄', density: 'sink' },
      { name: 'Gold Coin', emoji: '🪙', density: 'sink' },
      { name: 'Cleaning Sponge', emoji: '🧽', density: 'float' }
    ],
    4: [ // Hypothesis Challenge
      { name: 'Gold Coin', emoji: '🪙', density: 'sink' },
      { name: 'Rubber Duck', emoji: '🦆', density: 'float' },
      { name: 'Heavy Rock', emoji: '🪨', density: 'sink' },
      { name: 'Wood Log', emoji: '🪵', density: 'float' }
    ]
  };

  let currentPredIndex = 0;

  function updateDensityLevelUI() {
    clearAquariumTank();
    const items = DENSITY_LEVEL_ITEMS[densityLevel] || DENSITY_LEVEL_ITEMS[1];
    densityItemsGrid.innerHTML = '';

    if (densityLevel === 4) {
      // Prediction mode
      predictionVotePanel.style.display = 'block';
      densityTargetDesc.textContent = 'Make a scientific hypothesis! Vote whether the object will Sink or Float!';
      loadNextPredictionItem();
    } else {
      predictionVotePanel.style.display = 'none';
      densityTargetDesc.textContent = `Tap objects to test their density in the water tank! (Level ${densityLevel})`;
      items.forEach(it => {
        const card = document.createElement('div');
        card.className = 'drop-item';
        card.dataset.density = it.density;
        card.dataset.name = it.name;
        card.dataset.emoji = it.emoji;
        card.innerHTML = `
          <span class="item-icon">${it.emoji}</span>
          <span class="item-name">${it.name}</span>
        `;
        card.addEventListener('click', () => dropItemIntoTank(card, it));
        densityItemsGrid.appendChild(card);
      });
    }
  }

  function loadNextPredictionItem() {
    const items = DENSITY_LEVEL_ITEMS[4];
    if (currentPredIndex >= items.length) currentPredIndex = 0;
    const it = items[currentPredIndex];
    predItemEmoji.textContent = it.emoji;
    predItemName.textContent = it.name;
  }

  function handlePredictionVote(userVote) {
    const items = DENSITY_LEVEL_ITEMS[4];
    const currentItem = items[currentPredIndex];
    const isCorrect = userVote === currentItem.density;

    sound.playPop();
    dropItemIntoTank(null, currentItem);

    if (isCorrect) {
      sound.playRandomCheer();
      resultTitle.textContent = `🎯 Spot on! ${currentItem.name} is ${currentItem.density === 'float' ? 'LIGHT and FLOATS!' : 'HEAVY and SINKS!'}`;
      awardStars(2);
    } else {
      resultTitle.textContent = `💡 Science Discovery! ${currentItem.name} actually ${currentItem.density === 'float' ? 'FLOATS!' : 'SINKS!'}`;
    }

    currentPredIndex++;
    setTimeout(() => {
      loadNextPredictionItem();
    }, 2000);
  }

  if (btnVoteFloat) btnVoteFloat.addEventListener('click', () => handlePredictionVote('float'));
  if (btnVoteSink) btnVoteSink.addEventListener('click', () => handlePredictionVote('sink'));

  function dropItemIntoTank(cardEl, itemData) {
    if (cardEl && cardEl.classList.contains('dropped')) return;
    if (cardEl) cardEl.classList.add('dropped');

    sound.playWaterSplash();

    const floater = document.createElement('div');
    floater.className = `tank-floating-item ${itemData.density === 'float' ? 'is-float' : 'is-sink'}`;
    floater.textContent = itemData.emoji;
    floater.style.left = `${15 + Math.random() * 65}%`;
    droppedItemsLayer.appendChild(floater);

    if (itemData.density === 'float') {
      floatCount++;
      countFloatEl.textContent = `${floatCount} items`;
      const pill = document.createElement('span');
      pill.className = 'mini-item-pill';
      pill.textContent = itemData.emoji;
      listFloat.appendChild(pill);
      resultTitle.textContent = `🪶 ${itemData.name} FLOATS! It is lighter than water!`;
    } else {
      sinkCount++;
      countSinkEl.textContent = `${sinkCount} items`;
      const pill = document.createElement('span');
      pill.className = 'mini-item-pill';
      pill.textContent = itemData.emoji;
      listSink.appendChild(pill);
      resultTitle.textContent = `⚓ ${itemData.name} SINKS! It is heavier than water!`;
    }

    densityResult.classList.add('success');
    awardStars(1);
  }

  function clearAquariumTank() {
    floatCount = 0;
    sinkCount = 0;
    countFloatEl.textContent = '0 items';
    countSinkEl.textContent = '0 items';
    listFloat.innerHTML = '';
    listSink.innerHTML = '';
    droppedItemsLayer.innerHTML = '';
    document.querySelectorAll('.drop-item').forEach(c => c.classList.remove('dropped'));
    resultTitle.textContent = 'Tap any object on the shelf to test its density!';
    densityResult.classList.remove('success');
  }

  const btnClearTank = document.getElementById('btnClearTank');
  if (btnClearTank) {
    btnClearTank.addEventListener('click', () => {
      clearAquariumTank();
      sound.playPop();
    });
  }

  const densityLevelTabs = document.getElementById('densityLevelTabs');
  if (densityLevelTabs) {
    densityLevelTabs.querySelectorAll('.lvl-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        densityLevelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        densityLevel = parseInt(chip.dataset.level, 10);
        updateDensityLevelUI();
        sound.playPop();
      });
    });
  }

  updateDensityLevelUI();

  // =========================================================================
  // EXPERIMENT 5: MAGNETIC FORCES LABORATORY (NEW EXPERIMENT!)
  // =========================================================================
  let magnetLevel = 1;
  let magneticCount = 0;
  let nonMagneticCount = 0;
  const countMagneticEl = document.getElementById('countMagnetic');
  const countNonMagneticEl = document.getElementById('countNonMagnetic');
  const listMagnetic = document.getElementById('listMagnetic');
  const listNonMagnetic = document.getElementById('listNonMagnetic');
  const specimensGrid = document.getElementById('specimensGrid');
  const horseshoeMagnet = document.getElementById('horseshoeMagnet');
  const stuckItemsHolder = document.getElementById('stuckItemsHolder');
  const magnetHintBanner = document.getElementById('magnetHintBanner');
  const magnetTargetDesc = document.getElementById('magnetTargetDesc');

  const SPECIMENS_DATA = [
    { name: 'Iron Nail', emoji: '🔩', isMagnetic: true },
    { name: 'Paperclip', emoji: '📎', isMagnetic: true },
    { name: 'Steel Spoon', emoji: '🥄', isMagnetic: true },
    { name: 'Steel Key', emoji: '🗝️', isMagnetic: true },
    { name: 'Pencil', emoji: '✏️', isMagnetic: false },
    { name: 'Rubber Duck', emoji: '🦆', isMagnetic: false },
    { name: 'Lego Brick', emoji: '🧱', isMagnetic: false },
    { name: 'Cotton Sock', emoji: '🧦', isMagnetic: false }
  ];

  function updateMagnetLevel() {
    resetMagnetLab();
    if (magnetLevel === 1) {
      magnetTargetDesc.textContent = 'Tap specimens to test if the giant magnet attracts them!';
    } else if (magnetLevel === 2) {
      magnetTargetDesc.textContent = 'Opposite poles attract (N + S), matching poles repel (N + N)!';
    } else {
      magnetTargetDesc.textContent = 'Iron Treasure Hunt! Gather all 4 metallic items onto the magnet!';
    }
  }

  function renderSpecimens() {
    specimensGrid.innerHTML = '';
    SPECIMENS_DATA.forEach(sp => {
      const card = document.createElement('div');
      card.className = 'specimen-card';
      card.dataset.magnetic = sp.isMagnetic;
      card.innerHTML = `
        <span class="specimen-icon">${sp.emoji}</span>
        <span class="specimen-name">${sp.name}</span>
      `;
      card.addEventListener('click', () => interactWithMagnet(card, sp));
      specimensGrid.appendChild(card);
    });
  }

  function interactWithMagnet(cardEl, sp) {
    if (cardEl.classList.contains('collected')) return;
    cardEl.classList.add('collected');

    if (sp.isMagnetic) {
      sound.playMagnetClick();
      magneticCount++;
      countMagneticEl.textContent = `${magneticCount} items`;

      // Animate specimen onto magnet
      const stuck = document.createElement('div');
      stuck.className = 'stuck-specimen';
      stuck.textContent = sp.emoji;
      stuck.style.left = `${20 + Math.random() * 55}%`;
      stuck.style.top = `${15 + Math.random() * 55}%`;
      stuckItemsHolder.appendChild(stuck);

      const pill = document.createElement('span');
      pill.className = 'mini-item-pill';
      pill.textContent = sp.emoji;
      listMagnetic.appendChild(pill);

      magnetHintBanner.querySelector('span').textContent = `⚡ SNAP! ${sp.name} is MAGNETIC and sticks firmly!`;
      awardStars(1);
    } else {
      sound.playPop();
      nonMagneticCount++;
      countNonMagneticEl.textContent = `${nonMagneticCount} items`;

      const pill = document.createElement('span');
      pill.className = 'mini-item-pill';
      pill.textContent = sp.emoji;
      listNonMagnetic.appendChild(pill);

      magnetHintBanner.querySelector('span').textContent = `🚫 ${sp.name} is NON-MAGNETIC! The magnet ignores it.`;
    }
  }

  function resetMagnetLab() {
    magneticCount = 0;
    nonMagneticCount = 0;
    countMagneticEl.textContent = '0 items';
    countNonMagneticEl.textContent = '0 items';
    listMagnetic.innerHTML = '';
    listNonMagnetic.innerHTML = '';
    stuckItemsHolder.innerHTML = '';
    document.querySelectorAll('.specimen-card').forEach(c => c.classList.remove('collected'));
    magnetHintBanner.querySelector('span').textContent = 'Tap or drag specimens towards the magnet to test them!';
    renderSpecimens();
  }

  const btnResetMagnetLab = document.getElementById('btnResetMagnetLab');
  if (btnResetMagnetLab) {
    btnResetMagnetLab.addEventListener('click', () => {
      resetMagnetLab();
      sound.playPop();
    });
  }

  const magnetLevelTabs = document.getElementById('magnetLevelTabs');
  if (magnetLevelTabs) {
    magnetLevelTabs.querySelectorAll('.lvl-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        magnetLevelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        magnetLevel = parseInt(chip.dataset.level, 10);
        updateMagnetLevel();
        sound.playPop();
      });
    });
  }

  updateMagnetLevel();

  // =========================================================================
  // EXPERIMENT 6: FOAMING VOLCANO ERUPTION (NEW EXPERIMENT!)
  // =========================================================================
  let volcanoLevel = 1;
  let volcanoLavaStyle = 'red';
  let volcanoStep = 0;

  const volcanoStage = document.getElementById('volcanoStage');
  const mountainBody = document.getElementById('mountainBody');
  const craterLake = document.getElementById('craterLake');
  const eruptingFoam = document.getElementById('eruptingFoam');
  const volcanoSmoke = document.getElementById('volcanoSmoke');
  const volcanoBubble = document.getElementById('volcanoBubble');
  const volcanoTargetDesc = document.getElementById('volcanoTargetDesc');

  const btnIngSoda = document.getElementById('btnIngSoda');
  const btnIngSoap = document.getElementById('btnIngSoap');
  const btnIngDye = document.getElementById('btnIngDye');
  const btnIngVinegar = document.getElementById('btnIngVinegar');

  const statusSoda = document.getElementById('statusSoda');
  const statusSoap = document.getElementById('statusSoap');
  const statusDye = document.getElementById('statusDye');
  const statusVinegar = document.getElementById('statusVinegar');

  const VOLCANO_STYLES = {
    red: { name: 'Fire Red Lava', lakeColor: '#ea580c', foamGradient: 'radial-gradient(circle, #fca5a5 0%, #ef4444 70%, #dc2626 100%)', dyeIcon: '🔴' },
    green: { name: 'Neon Toxic Slime', lakeColor: '#16a34a', foamGradient: 'radial-gradient(circle, #86efac 0%, #22c55e 70%, #15803d 100%)', dyeIcon: '🟢' },
    purple: { name: 'Cosmic Starlight', lakeColor: '#7e22ce', foamGradient: 'radial-gradient(circle, #d8b4fe 0%, #a855f7 70%, #6b21a8 100%)', dyeIcon: '🟣' },
    rainbow: { name: 'Rainbow Swirl', lakeColor: '#ec4899', foamGradient: 'radial-gradient(circle, #f43f5e, #f59e0b, #10b981, #3b82f6)', dyeIcon: '🌈' }
  };

  function updateVolcanoLevel() {
    resetVolcano();
    if (volcanoLevel === 1) {
      volcanoLavaStyle = 'red';
      volcanoTargetDesc.textContent = 'Add Baking Soda, Red Dye, and pour Vinegar to erupt fiery Red Lava!';
    } else if (volcanoLevel === 2) {
      volcanoLavaStyle = 'green';
      volcanoTargetDesc.textContent = 'Add Bubble Soap + Neon Green Dye for giant glowing Slime foam!';
    } else {
      volcanoLavaStyle = 'purple';
      volcanoTargetDesc.textContent = 'Galaxy Eruption! Mix Purple Cosmic Dye with fizzing foam!';
    }

    document.querySelectorAll('.lava-style-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lava === volcanoLavaStyle);
    });
  }

  const volcanoLevelTabs = document.getElementById('volcanoLevelTabs');
  if (volcanoLevelTabs) {
    volcanoLevelTabs.querySelectorAll('.lvl-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        volcanoLevelTabs.querySelectorAll('.lvl-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        volcanoLevel = parseInt(chip.dataset.level, 10);
        updateVolcanoLevel();
        sound.playPop();
      });
    });
  }

  // Lava style buttons
  document.querySelectorAll('.lava-style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lava-style-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      volcanoLavaStyle = btn.dataset.lava;
      resetVolcano();
      sound.playPop();
    });
  });

  function resetVolcano() {
    volcanoStep = 0;
    volcanoStage.classList.remove('rumbling');
    mountainBody.classList.remove('erupting');
    eruptingFoam.classList.remove('active');
    eruptingFoam.style.height = '0px';
    volcanoSmoke.classList.remove('active');

    const style = VOLCANO_STYLES[volcanoLavaStyle] || VOLCANO_STYLES.red;
    craterLake.style.background = '#78350f';
    document.getElementById('dyeIcon').textContent = style.dyeIcon;

    btnIngSoda.disabled = false;
    btnIngSoap.disabled = false;
    btnIngDye.disabled = true;
    btnIngVinegar.disabled = true;

    statusSoda.textContent = 'Ready';
    statusSoap.textContent = 'Optional';
    statusDye.textContent = 'Wait';
    statusVinegar.textContent = 'Wait';

    volcanoBubble.querySelector('span').textContent = "Tap '1. Baking Soda' to fill the crater!";
  }

  if (btnIngSoda) btnIngSoda.addEventListener('click', () => {
    volcanoStep = 1;
    sound.playPop();
    craterLake.style.background = '#f8fafc';
    btnIngSoda.disabled = true;
    statusSoda.textContent = 'Done ✓';
    btnIngDye.disabled = false;
    statusDye.textContent = 'Ready';
    volcanoBubble.querySelector('span').textContent = 'Base powder placed! Now add the color dye!';
  });

  if (btnIngSoap) btnIngSoap.addEventListener('click', () => {
    sound.playPop();
    btnIngSoap.disabled = true;
    statusSoap.textContent = 'Added ✓';
    volcanoBubble.querySelector('span').textContent = 'Bubble soap added! This will make MEGA foam!';
  });

  if (btnIngDye) btnIngDye.addEventListener('click', () => {
    volcanoStep = 2;
    sound.playPour();
    const style = VOLCANO_STYLES[volcanoLavaStyle] || VOLCANO_STYLES.red;
    craterLake.style.background = style.lakeColor;
    btnIngDye.disabled = true;
    statusDye.textContent = 'Done ✓';
    btnIngVinegar.disabled = false;
    statusVinegar.textContent = 'Ready!';
    volcanoBubble.querySelector('span').textContent = 'Color loaded! Now pour the Fizzy Vinegar to erupt!';
  });

  if (btnIngVinegar) btnIngVinegar.addEventListener('click', () => {
    volcanoStep = 3;
    btnIngVinegar.disabled = true;
    statusVinegar.textContent = 'Done ✓';

    const style = VOLCANO_STYLES[volcanoLavaStyle] || VOLCANO_STYLES.red;
    eruptingFoam.style.background = style.foamGradient;

    // Trigger Eruption Sequence!
    sound.playFizz();
    volcanoStage.classList.add('rumbling');
    volcanoSmoke.classList.add('active');

    setTimeout(() => {
      mountainBody.classList.add('erupting');
      eruptingFoam.classList.add('active');
      eruptingFoam.style.height = '200px';
      sound.playMagicChime();
      sound.playRandomCheer();
      volcanoBubble.querySelector('span').textContent = `💥 KA-BOOM! The ${style.name} is ERUPTING with fizzing foam! ⭐`;
      awardStars(3);
    }, 600);
  });

  const btnResetVolcano = document.getElementById('btnResetVolcano');
  if (btnResetVolcano) {
    btnResetVolcano.addEventListener('click', () => {
      resetVolcano();
      sound.playPop();
    });
  }

  updateVolcanoLevel();

})();
