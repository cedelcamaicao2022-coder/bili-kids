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

})();
