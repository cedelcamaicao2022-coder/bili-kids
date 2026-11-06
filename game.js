/**
 * ===================================================================
 * BILI'S COLOR ADVENTURE - INTERACTIVE PRESCHOOL LEARNING ENGINE
 * Designed for Children Ages 3 to 5
 * ===================================================================
 */

(function () {
  'use strict';

  // --- COLOR DEFINITIONS ---
  const COLORS = {
    RED: {
      name: 'RED',
      spanish: 'Rojo',
      hex: '#ff4757',
      textHex: '#ffffff',
      balloonColor: '#ff4757',
      items: [
        { name: 'Apple', icon: '🍎' },
        { name: 'Strawberry', icon: '🍓' },
        { name: 'Fire Truck', icon: '🚒' },
        { name: 'Heart', icon: '❤️' }
      ]
    },
    BLUE: {
      name: 'BLUE',
      spanish: 'Azul',
      hex: '#2e86de',
      textHex: '#ffffff',
      balloonColor: '#2e86de',
      items: [
        { name: 'Car', icon: '🚙' },
        { name: 'Dolphin', icon: '🐬' },
        { name: 'Blue Whale', icon: '🐳' },
        { name: 'Blue Butterfly', icon: '🦋' }
      ]
    },
    YELLOW: {
      name: 'YELLOW',
      spanish: 'Amarillo',
      hex: '#ffa502',
      textHex: '#2f3542',
      balloonColor: '#ffa502',
      items: [
        { name: 'Sun', icon: '☀️' },
        { name: 'Banana', icon: '🍌' },
        { name: 'Star', icon: '⭐' },
        { name: 'Duck', icon: '🦆' }
      ]
    },
    GREEN: {
      name: 'GREEN',
      spanish: 'Verde',
      hex: '#2ed573',
      textHex: '#ffffff',
      balloonColor: '#2ed573',
      items: [
        { name: 'Frog', icon: '🐸' },
        { name: 'Tree', icon: '🌲' },
        { name: 'Dinosaur', icon: '🦖' },
        { name: 'Green Apple', icon: '🍏' }
      ]
    },
    ORANGE: {
      name: 'ORANGE',
      spanish: 'Naranja',
      hex: '#ff7f50',
      textHex: '#ffffff',
      balloonColor: '#ff7f50',
      items: [
        { name: 'Orange', icon: '🍊' },
        { name: 'Carrot', icon: '🥕' },
        { name: 'Tiger', icon: '🐯' },
        { name: 'Basketball', icon: '🏀' }
      ]
    },
    PURPLE: {
      name: 'PURPLE',
      spanish: 'Morado',
      hex: '#9b59b6',
      textHex: '#ffffff',
      balloonColor: '#9b59b6',
      items: [
        { name: 'Grapes', icon: '🍇' },
        { name: 'Eggplant', icon: '🍆' },
        { name: 'Crystal', icon: '🔮' },
        { name: 'Butterfly', icon: '🟣' }
      ]
    },
    PINK: {
      name: 'PINK',
      spanish: 'Rosa',
      hex: '#ff6b81',
      textHex: '#ffffff',
      balloonColor: '#ff6b81',
      items: [
        { name: 'Donut', icon: '🍩' },
        { name: 'Flower', icon: '🌸' },
        { name: 'Flamingo', icon: '🦩' },
        { name: 'Bow', icon: '🎀' }
      ]
    },
    BROWN: {
      name: 'BROWN',
      spanish: 'Café',
      hex: '#8d5b4c',
      textHex: '#ffffff',
      balloonColor: '#8d5b4c',
      items: [
        { name: 'Teddy Bear', icon: '🧸' },
        { name: 'Cookie', icon: '🍪' },
        { name: 'Monkey', icon: '🐵' },
        { name: 'Acorn', icon: '🌰' }
      ]
    }
  };

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.muted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playPop() {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.13);
    }

    playChime() {
      if (this.muted) return;
      this.init();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.08;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.4, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.36);
      });
    }

    playBoing() {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.09);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.26);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.27);
    }

    playVictory() {
      if (this.muted) return;
      this.init();
      const fanfare = [
        { f: 523.25, d: 0.12 }, // C5
        { f: 659.25, d: 0.12 }, // E5
        { f: 783.99, d: 0.12 }, // G5
        { f: 1046.50, d: 0.35 } // C6
      ];
      let t = this.ctx.currentTime;
      fanfare.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, t);
        gain.gain.setValueAtTime(0.5, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + note.d + 0.05);
        t += note.d + 0.04;
      });
    }

    toggleMute() {
      this.muted = !this.muted;
      return this.muted;
    }
  }

  // --- HYBRID VOICE & AUDIO MANAGER ---
  class VoiceManager {
    constructor() {
      this.synth = window.speechSynthesis || null;
      this.voice = null;
      this.availableVoices = [];
      this.rate = 0.88;
      this.pitch = 1.05; // Natural human pitch
      this.audioMode = 'hybrid'; // 'hybrid' | 'audio_only' | 'speech_only'
      this.currentAudio = null;

      // Real Studio Audio Clips (ElevenLabs MP3s with cache-busting)
      const v = 'v=4.0';
      this.clips = {
        // Individual Colors
        red: `assets/audio/red.mp3?${v}`,
        blue: `assets/audio/blue.mp3?${v}`,
        yellow: `assets/audio/yellow.mp3?${v}`,
        green: `assets/audio/green.mp3?${v}`,
        orange: `assets/audio/orange.mp3?${v}`,
        purple: `assets/audio/purple.mp3?${v}`,
        pink: `assets/audio/pink.mp3?${v}`,
        brown: `assets/audio/brown.mp3?${v}`,

        // Greetings & Mascot
        welcome: `assets/audio/welcome.mp3?${v}`,
        bili_hello: `assets/audio/bili_hello.mp3?${v}`,

        // Cheers & Feedback
        cheer_great_job: `assets/audio/cheer_great_job.mp3?${v}`,
        cheer_awesome: `assets/audio/cheer_awesome.mp3?${v}`,
        cheer_super: `assets/audio/cheer_super.mp3?${v}`,
        cheer_you_did_it: `assets/audio/cheer_you_did_it.mp3?${v}`,
        oops_try_again: `assets/audio/oops_try_again.mp3?${v}`,
        diploma_congrats: `assets/audio/diploma_congrats.mp3?${v}`,
        level_complete: `assets/audio/level_complete.mp3?${v}`,

        // Level 1: Balloon Pop Instructions
        inst_l1_red: `assets/audio/inst_l1_red.mp3?${v}`,
        inst_l1_blue: `assets/audio/inst_l1_blue.mp3?${v}`,
        inst_l1_yellow: `assets/audio/inst_l1_yellow.mp3?${v}`,
        inst_l1_green: `assets/audio/inst_l1_green.mp3?${v}`,

        // Level 2: Backpack Instructions
        inst_l2_orange: `assets/audio/inst_l2_orange.mp3?${v}`,
        inst_l2_purple: `assets/audio/inst_l2_purple.mp3?${v}`,
        inst_l2_pink: `assets/audio/inst_l2_pink.mp3?${v}`,
        inst_l2_green: `assets/audio/inst_l2_green.mp3?${v}`,
        inst_l2_yellow: `assets/audio/inst_l2_yellow.mp3?${v}`,
        inst_l2_red: `assets/audio/inst_l2_red.mp3?${v}`,

        // Level 3: Magic Paint Instructions
        paint_sun_yellow: `assets/audio/paint_sun_yellow.mp3?${v}`,
        paint_strawberry_red: `assets/audio/paint_strawberry_red.mp3?${v}`,
        paint_frog_green: `assets/audio/paint_frog_green.mp3?${v}`,
        paint_dolphin_blue: `assets/audio/paint_dolphin_blue.mp3?${v}`,
        paint_carrot_orange: `assets/audio/paint_carrot_orange.mp3?${v}`,
        paint_grapes_purple: `assets/audio/paint_grapes_purple.mp3?${v}`,
        paint_donut_pink: `assets/audio/paint_donut_pink.mp3?${v}`,
        paint_bear_brown: `assets/audio/paint_bear_brown.mp3?${v}`,

        // Level 4: Bubble Instructions & Countdowns
        catch_red_bubbles: `assets/audio/catch_red_bubbles.mp3?${v}`,
        catch_blue_bubbles: `assets/audio/catch_blue_bubbles.mp3?${v}`,
        catch_yellow_bubbles: `assets/audio/catch_yellow_bubbles.mp3?${v}`,
        catch_green_bubbles: `assets/audio/catch_green_bubbles.mp3?${v}`,
        catch_purple_bubbles: `assets/audio/catch_purple_bubbles.mp3?${v}`,
        catch_orange_bubbles: `assets/audio/catch_orange_bubbles.mp3?${v}`,
        two_left: `assets/audio/two_left.mp3?${v}`,
        one_left: `assets/audio/one_left.mp3?${v}`,

        // Level 5: Dance Disco Instructions
        dance_on_red: `assets/audio/dance_on_red.mp3?${v}`,
        dance_on_blue: `assets/audio/dance_on_blue.mp3?${v}`,
        dance_on_yellow: `assets/audio/dance_on_yellow.mp3?${v}`,
        dance_on_green: `assets/audio/dance_on_green.mp3?${v}`,
        dance_on_orange: `assets/audio/dance_on_orange.mp3?${v}`,
        dance_on_purple: `assets/audio/dance_on_purple.mp3?${v}`
      };

      this.initVoices();
      if (this.synth && this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }

    initVoices() {
      if (!this.synth) return;
      const allVoices = this.synth.getVoices();
      if (!allVoices || allVoices.length === 0) return;

      // Filter only English voices and discard novelty/robotic sound-effect voices
      const noisyNames = ['bad news', 'bahh', 'bells', 'boing', 'bubbles', 'cellos', 'wobble', 'zarvox', 'whisper', 'organ', 'albert', 'fred', 'trinoids', 'jester'];
      
      const englishVoices = allVoices.filter(v => {
        if (!v.lang.startsWith('en')) return false;
        const lowerName = v.name.toLowerCase();
        return !noisyNames.some(noise => lowerName.includes(noise));
      });

      // Sort by highest natural quality: Neural / Natural / Premium / Google / Samantha
      const qualityRank = (name) => {
        const lower = name.toLowerCase();
        if (lower.includes('natural') || lower.includes('neural') || lower.includes('online')) return 5;
        if (lower.includes('premium') || lower.includes('enhanced')) return 4;
        if (lower.includes('google')) return 3;
        if (lower.includes('samantha') || lower.includes('ava') || lower.includes('victoria') || lower.includes('karen') || lower.includes('serena') || lower.includes('daniel')) return 2;
        return 1;
      };

      englishVoices.sort((a, b) => qualityRank(b.name) - qualityRank(a.name));
      this.availableVoices = englishVoices;

      if (!this.voice && englishVoices.length > 0) {
        this.voice = englishVoices[0];
      }

      this.populateVoiceSelectUI();
    }

    populateVoiceSelectUI() {
      const select = document.getElementById('selectVoice');
      if (!select || this.availableVoices.length === 0) return;

      const currentSelectedName = this.voice ? this.voice.name : '';
      select.innerHTML = '';

      this.availableVoices.forEach((v) => {
        const opt = document.createElement('option');
        opt.value = v.name;
        opt.textContent = `${v.name} (${v.lang})`;
        if (v.name === currentSelectedName) opt.selected = true;
        select.appendChild(opt);
      });
    }

    setVoiceByName(name) {
      const found = this.availableVoices.find(v => v.name === name);
      if (found) {
        this.voice = found;
      }
    }

    playClip(clipKey, onEnd) {
      // Cancel any ongoing robotic speech immediately so it never overlaps with real studio audio
      if (this.synth) {
        try { this.synth.cancel(); } catch (e) {}
      }
      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }

      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio = null;
      }

      const clipUrl = this.clips[clipKey];
      if (!clipUrl || this.audioMode === 'speech_only') {
        if (onEnd) onEnd();
        return false;
      }

      const audio = new Audio(clipUrl);
      this.currentAudio = audio;
      if (onEnd) {
        audio.onended = () => {
          this.currentAudio = null;
          onEnd();
        };
      }
      audio.play().catch(() => {
        // Fallback to speech if audio play fails
        if (onEnd) onEnd();
      });
      return true;
    }

    speakColor(colorKey, onEnd) {
      const key = String(colorKey).toLowerCase().trim();
      if ((this.audioMode === 'hybrid' || this.audioMode === 'audio_only') && this.clips[key]) {
        return this.playClip(key, onEnd);
      }
      this.speak(colorKey, onEnd);
    }

    speak(text, onEnd) {
      // Do not speak with robotic synth if a studio MP3 clip is actively playing
      if (this.currentAudio && !this.currentAudio.paused && !this.currentAudio.ended) {
        if (onEnd) onEnd();
        return;
      }

      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio = null;
      }

      if (!this.synth) {
        if (onEnd) onEnd();
        return;
      }

      this.synth.cancel(); // Stop pending utterance
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.voice) {
        utterance.voice = this.voice;
      }
      utterance.lang = 'en-US';
      utterance.rate = this.rate;
      utterance.pitch = this.pitch;
      utterance.volume = 1;

      if (onEnd) {
        utterance.onend = onEnd;
      }
      this.synth.speak(utterance);
    }
  }

  // --- CONFETTI PARTICLE SYSTEM ---
  class ConfettiEngine {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.animationFrame = null;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    burst(count = 70) {
      const colors = ['#ff4757', '#2e86de', '#ffa502', '#2ed573', '#9b59b6', '#ff6b81', '#ffd32a'];
      const cx = this.canvas.width / 2;
      const cy = this.canvas.height / 2;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 9 + 4;
        this.particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          size: Math.random() * 12 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 10,
          opacity: 1,
          gravity: 0.25
        });
      }

      if (!this.animationFrame) {
        this.update();
      }
    }

    update() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vRot;
        p.opacity -= 0.012;

        if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0, p.opacity);
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        this.animationFrame = requestAnimationFrame(() => this.update());
      } else {
        this.animationFrame = null;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  // --- MAIN GAME CONTROLLER ---
  class BiliGame {
    constructor() {
      this.sound = new SoundManager();
      this.voice = new VoiceManager();
      this.confetti = new ConfettiEngine(document.getElementById('confettiCanvas'));

      this.currentLevel = 1;
      this.currentRound = 0;
      this.maxRounds = 5;
      this.targetColor = null;
      this.targetObject = null;
      this.bubblesToCatch = 0;
      this.discoRoundsWon = 0;

      // Persistence
      this.progress = this.loadProgress();

      // Cache DOM Elements
      this.dom = {
        totalStarsCount: document.getElementById('totalStarsCount'),
        levelBadgeText: document.getElementById('levelBadgeText'),
        soundIcon: document.getElementById('soundIcon'),
        btnHome: document.getElementById('btnHome'),
        btnSoundToggle: document.getElementById('btnSoundToggle'),
        btnFullscreen: document.getElementById('btnFullscreen'),
        btnStartGame: document.getElementById('btnStartGame'),
        btnRepeatWelcome: document.getElementById('btnRepeatWelcome'),
        screens: {
          home: document.getElementById('screenHome'),
          level1: document.getElementById('screenLevel1'),
          level2: document.getElementById('screenLevel2'),
          level3: document.getElementById('screenLevel3'),
          level4: document.getElementById('screenLevel4'),
          level5: document.getElementById('screenLevel5'),
          level6: document.getElementById('screenLevel6'),
          level7: document.getElementById('screenLevel7'),
          level8: document.getElementById('screenLevel8'),
          level9: document.getElementById('screenLevel9'),
          level10: document.getElementById('screenLevel10'),
          celebration: document.getElementById('screenCelebration')
        },
        successOverlay: document.getElementById('roundSuccessOverlay'),
        successTitle: document.getElementById('successTitle'),
        successMessage: document.getElementById('successMessage'),
        successColor: document.getElementById('successColor')
      };

      this.initEvents();
      this.updateStarUI();
    }

    loadProgress() {
      try {
        const saved = localStorage.getItem('bili_color_adventure_prog');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (!parsed.levelStars[6]) {
            for (let i = 6; i <= 10; i++) parsed.levelStars[i] = 0;
          }
          if (parsed.stage2Unlocked === undefined) {
            parsed.stage2Unlocked = parsed.unlockedLevels.includes(6) || parsed.levelStars[5] >= 1;
          }
          return parsed;
        }
      } catch (e) {}
      return {
        unlockedLevels: [1],
        levelStars: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
        totalStars: 0,
        stage2Unlocked: false
      };
    }

    saveProgress() {
      try {
        localStorage.setItem('bili_color_adventure_prog', JSON.stringify(this.progress));
      } catch (e) {}
    }

    initEvents() {
      // Home Screen Buttons
      this.dom.btnStartGame.addEventListener('click', () => {
        this.sound.init();
        this.goToLevel(this.getHighestUnlockedLevel());
      });

      this.dom.btnRepeatWelcome.addEventListener('click', () => {
        const played = this.voice.playClip('welcome');
        if (!played) {
          this.voice.speak("Hi friends! I'm Bili! Let's explore colors together!");
        }
      });

      // Settings Modal controls
      const btnSettings = document.getElementById('btnSettings');
      const settingsModal = document.getElementById('settingsModal');
      const btnCloseSettings = document.getElementById('btnCloseSettings');
      const selectVoice = document.getElementById('selectVoice');
      const selectAudioMode = document.getElementById('selectAudioMode');
      const rangeSpeed = document.getElementById('rangeSpeed');
      const speedValueLabel = document.getElementById('speedValueLabel');
      const btnTestVoice = document.getElementById('btnTestVoice');

      if (btnSettings && settingsModal) {
        btnSettings.addEventListener('click', () => {
          this.voice.populateVoiceSelectUI();
          settingsModal.classList.remove('hidden');
        });

        btnCloseSettings.addEventListener('click', () => {
          settingsModal.classList.add('hidden');
        });

        selectVoice.addEventListener('change', (e) => {
          this.voice.setVoiceByName(e.target.value);
        });

        selectAudioMode.addEventListener('change', (e) => {
          this.voice.audioMode = e.target.value;
        });

        rangeSpeed.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          this.voice.rate = val;
          speedValueLabel.textContent = `${val.toFixed(2)}x ${val < 0.85 ? '(Muy pausado)' : val <= 0.95 ? '(Pausado ideal)' : '(Rápido)'}`;
        });

        btnTestVoice.addEventListener('click', () => {
          if (this.voice.audioMode === 'speech_only') {
            this.voice.speak("Red! Great job, little explorer!");
          } else {
            this.voice.playClip('cheer_great_job', () => {
              this.voice.speakColor('red');
            });
          }
        });
      }

      this.dom.btnHome.addEventListener('click', () => {
        this.sound.playWhoosh?.();
        this.showScreen('home');
      });

      // Sound Toggle
      this.dom.btnSoundToggle.addEventListener('click', () => {
        const isMuted = this.sound.toggleMute();
        this.dom.soundIcon.textContent = isMuted ? '🔇' : '🔊';
      });

      // Fullscreen Toggle
      this.dom.btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });

      // Level Cards in Map
      document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
          const lvl = parseInt(card.dataset.level, 10);
          if (this.progress.unlockedLevels.includes(lvl)) {
            this.goToLevel(lvl);
          } else {
            this.sound.playBoing();
          }
        });
      });

      // Tapping Bili anywhere triggers a cheerful hop and speaks
      document.querySelectorAll('.bili-companion-fullbody-img, .bili-fullbody-hero-img').forEach(biliImg => {
        biliImg.addEventListener('click', () => {
          this.sound.playChime();
          biliImg.style.transform = 'scale(1.2) translateY(-10px)';
          setTimeout(() => { biliImg.style.transform = ''; }, 300);
          if (this.currentLevel && this.dom.screens[`level${this.currentLevel}`]?.classList.contains('active')) {
            this.speakLevelPrompt(this.currentLevel);
          } else {
            const played = this.voice.playClip('bili_hello');
            if (!played) {
              this.voice.speak("Hello! I'm Bili! Let's learn colors!");
            }
          }
        });
      });

      // Repeat Voice Buttons for each level
      document.getElementById('btnSpeakPromptL1').addEventListener('click', () => this.speakLevelPrompt(1));
      document.getElementById('btnSpeakPromptL2').addEventListener('click', () => this.speakLevelPrompt(2));
      document.getElementById('btnSpeakPromptL3').addEventListener('click', () => this.speakLevelPrompt(3));
      document.getElementById('btnSpeakPromptL4').addEventListener('click', () => this.speakLevelPrompt(4));
      document.getElementById('btnSpeakPromptL5').addEventListener('click', () => this.speakLevelPrompt(5));
      document.getElementById('btnSpeakPromptL6')?.addEventListener('click', () => this.speakLevelPrompt(6));
      document.getElementById('btnSpeakPromptL7')?.addEventListener('click', () => this.speakLevelPrompt(7));
      document.getElementById('btnSpeakPromptL8')?.addEventListener('click', () => this.speakLevelPrompt(8));
      document.getElementById('btnSpeakPromptL9')?.addEventListener('click', () => this.speakLevelPrompt(9));
      document.getElementById('btnSpeakPromptL10')?.addEventListener('click', () => this.speakLevelPrompt(10));

      // Stage Tab Switching
      const btnStage1Tab = document.getElementById('btnStage1Tab');
      const btnStage2Tab = document.getElementById('btnStage2Tab');
      const stage1Grid = document.getElementById('stage1Grid');
      const stage2Grid = document.getElementById('stage2Grid');

      if (btnStage1Tab && btnStage2Tab && stage1Grid && stage2Grid) {
        btnStage1Tab.addEventListener('click', () => {
          btnStage1Tab.classList.add('active');
          btnStage2Tab.classList.remove('active');
          stage1Grid.style.display = 'grid';
          stage2Grid.style.display = 'none';
        });

        btnStage2Tab.addEventListener('click', () => {
          const isUnlocked = this.progress.stage2Unlocked || this.progress.unlockedLevels.includes(6);
          if (isUnlocked) {
            btnStage2Tab.classList.add('active');
            btnStage1Tab.classList.remove('active');
            stage2Grid.style.display = 'grid';
            stage1Grid.style.display = 'none';
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
            btnStage2Tab.style.transform = 'translateX(8px)';
            setTimeout(() => { btnStage2Tab.style.transform = ''; }, 200);
          }
        });
      }

      // Celebration Screen Buttons
      document.getElementById('btnPrintDiploma').addEventListener('click', () => window.print());
      document.getElementById('btnPlayAgain').addEventListener('click', () => {
        this.showScreen('home');
      });

      // Drag & drop handlers for Level 2
      this.initBackpackDropZone();
    }

    getHighestUnlockedLevel() {
      return Math.max(...this.progress.unlockedLevels);
    }

    updateStarUI() {
      let sum = 0;
      for (let lvl = 1; lvl <= 10; lvl++) {
        const stars = this.progress.levelStars[lvl] || 0;
        sum += stars;
        const cardStarEl = document.getElementById(`cardStars${lvl}`);
        if (cardStarEl) {
          cardStarEl.textContent = '★'.repeat(stars) + '☆'.repeat(3 - stars);
        }
        const cardEl = document.querySelector(`.level-card[data-level="${lvl}"]`);
        if (cardEl) {
          if (this.progress.unlockedLevels.includes(lvl)) {
            cardEl.classList.add('unlocked');
          } else {
            cardEl.classList.remove('unlocked');
          }
        }
      }

      // Update Stage 2 Tab Lock Status
      const btnStage2Tab = document.getElementById('btnStage2Tab');
      const stage2LockBadge = document.getElementById('stage2LockBadge');
      const isStage2Unlocked = this.progress.stage2Unlocked || this.progress.unlockedLevels.includes(6);

      if (btnStage2Tab && stage2LockBadge) {
        if (isStage2Unlocked) {
          btnStage2Tab.classList.remove('locked');
          stage2LockBadge.textContent = '⭐ ¡Desbloqueado!';
          stage2LockBadge.style.background = '#e8f5e9';
          stage2LockBadge.style.color = '#2e7d32';
        } else {
          btnStage2Tab.classList.add('locked');
          stage2LockBadge.textContent = '🔒 Supera la Etapa 1';
          stage2LockBadge.style.background = '#ffeaa7';
          stage2LockBadge.style.color = '#d35400';
        }
      }

      this.progress.totalStars = sum;
      this.dom.totalStarsCount.textContent = sum;
      this.saveProgress();
    }

    showScreen(screenName) {
      Object.values(this.dom.screens).forEach(scr => scr.classList.remove('active'));
      const activeScr = this.dom.screens[screenName];
      if (activeScr) {
        activeScr.classList.add('active');
      }

      if (screenName === 'home') {
        this.dom.levelBadgeText.textContent = 'Menu';
        this.updateStarUI();
      } else if (screenName.startsWith('level')) {
        this.dom.levelBadgeText.textContent = `Nivel ${this.currentLevel}`;
      } else if (screenName === 'celebration') {
        this.dom.levelBadgeText.textContent = `¡Graduado!`;
      }
    }

    goToLevel(levelNum) {
      this.currentLevel = levelNum;
      this.currentRound = 1;
      this.showScreen(`level${levelNum}`);

      if (levelNum === 1) this.startLevel1();
      else if (levelNum === 2) this.startLevel2();
      else if (levelNum === 3) this.startLevel3();
      else if (levelNum === 4) this.startLevel4();
      else if (levelNum === 5) this.startLevel5();
      else if (levelNum === 6) this.startLevel6();
      else if (levelNum === 7) this.startLevel7();
      else if (levelNum === 8) this.startLevel8();
      else if (levelNum === 9) this.startLevel9();
      else if (levelNum === 10) this.startLevel10();
    }

    speakLevelPrompt(lvl) {
      if (!this.targetColor) return;
      const colorKey = this.targetColor.name.toLowerCase();

      if (lvl === 1) {
        const key = `inst_l1_${colorKey}`;
        this.voice.playClip(key) || this.voice.speakColor(this.targetColor.name);
      } else if (lvl === 2) {
        const key = `inst_l2_${colorKey}`;
        this.voice.playClip(key) || this.voice.speakColor(this.targetColor.name);
      } else if (lvl === 3) {
        const key = this.targetObject?.audioKey;
        if (key && this.voice.clips[key]) {
          this.voice.playClip(key) || this.voice.speakColor(this.targetColor.name);
        } else {
          this.voice.speakColor(this.targetColor.name);
        }
      } else if (lvl === 4) {
        const key = `catch_${colorKey}_bubbles`;
        this.voice.playClip(key) || this.voice.speakColor(this.targetColor.name);
      } else if (lvl === 5) {
        const key = `dance_on_${colorKey}`;
        this.voice.playClip(key) || this.voice.speakColor(this.targetColor.name);
      } else if (lvl >= 6 && lvl <= 10) {
        this.voice.speakColor(this.targetColor.name);
      }
    }

    showRoundSuccess(colorName, callback) {
      this.sound.playChime();
      this.confetti.burst(50);

      const cheers = [
        { title: 'Great Job!', clip: 'cheer_great_job' },
        { title: 'Awesome!', clip: 'cheer_awesome' },
        { title: 'Super!', clip: 'cheer_super' },
        { title: 'You Did It!', clip: 'cheer_you_did_it' }
      ];
      const randomCheer = cheers[Math.floor(Math.random() * cheers.length)];

      this.dom.successTitle.textContent = randomCheer.title;
      this.dom.successMessage.innerHTML = `¡You found <strong>${colorName}</strong>!`;
      this.dom.successColor.textContent = colorName;
      this.dom.successOverlay.classList.remove('hidden');

      // Play studio cheer clip, then pronounce the color
      const cheerPlayed = this.voice.playClip(randomCheer.clip, () => {
        setTimeout(() => {
          this.voice.speakColor(colorName);
        }, 150);
      });

      if (!cheerPlayed) {
        this.voice.speak(`${randomCheer.title}! ${colorName}!`);
      }

      setTimeout(() => {
        this.dom.successOverlay.classList.add('hidden');
        if (callback) callback();
      }, 2000);
    }

    completeLevel(levelNum) {
      this.sound.playVictory();
      this.confetti.burst(120);

      // Award 3 stars for completing the level
      this.progress.levelStars[levelNum] = 3;
      if (levelNum < 10 && !this.progress.unlockedLevels.includes(levelNum + 1)) {
        this.progress.unlockedLevels.push(levelNum + 1);
      }

      if (levelNum === 5) {
        // Stage 1 completed! Unlock Stage 2!
        this.progress.stage2Unlocked = true;
        this.updateStarUI();
        setTimeout(() => {
          this.showScreen('celebration');
          this.confetti.burst(150);
          const played = this.voice.playClip('diploma_congrats');
          if (!played) {
            this.voice.speak("Congratulations! You are a Super Color Champion with Bili!");
          }
        }, 1200);
      } else if (levelNum === 10) {
        // Stage 2 completed! Galaxy Master!
        this.updateStarUI();
        setTimeout(() => {
          this.showScreen('celebration');
          this.confetti.burst(200);
          const played = this.voice.playClip('diploma_congrats');
          if (!played) {
            this.voice.speak("Congratulations! You are a Super Color Champion with Bili!");
          }
        }, 1200);
      } else {
        // Play level complete celebration clip!
        this.voice.playClip('level_complete');
        this.updateStarUI();
        setTimeout(() => {
          this.goToLevel(levelNum + 1);
        }, 2200);
      }
    }

    // ===================================================
    // LEVEL 1: BALLOON POP (Primary Colors)
    // ===================================================
    startLevel1() {
      this.maxRounds = 5;
      this.playRoundLevel1();
    }

    playRoundLevel1() {
      const arena = document.getElementById('balloonsArena');
      arena.innerHTML = '';

      // Primary & easy colors for Level 1
      const pool = [COLORS.RED, COLORS.BLUE, COLORS.YELLOW, COLORS.GREEN];
      this.targetColor = pool[Math.floor(Math.random() * pool.length)];

      // Pick 4 options including target
      const choices = [this.targetColor];
      const remaining = pool.filter(c => c !== this.targetColor);
      while (choices.length < 4 && remaining.length > 0) {
        const idx = Math.floor(Math.random() * remaining.length);
        choices.push(remaining.splice(idx, 1)[0]);
      }
      choices.sort(() => Math.random() - 0.5);

      // Update UI labels
      const promptEl = document.getElementById('promptColorL1');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;
      document.getElementById('spanishHintL1').textContent = `(${this.targetColor.spanish})`;

      // Progress bar
      document.getElementById('progressFillL1').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL1').textContent = `Ronda ${this.currentRound} de ${this.maxRounds}`;

      // Voice prompt using ElevenLabs child voice
      const instKey = `inst_l1_${this.targetColor.name.toLowerCase()}`;
      this.voice.playClip(instKey) || this.voice.speakColor(this.targetColor.name);

      // Render balloons
      choices.forEach(color => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon-item';
        balloon.style.backgroundColor = color.balloonColor;
        balloon.style.color = color.balloonColor;

        const shine = document.createElement('div');
        shine.className = 'balloon-shine';

        const label = document.createElement('div');
        label.className = 'balloon-color-label';
        label.textContent = color.name;

        const string = document.createElement('div');
        string.className = 'balloon-string';

        balloon.appendChild(shine);
        balloon.appendChild(label);
        balloon.appendChild(string);

        balloon.addEventListener('click', () => {
          if (color === this.targetColor) {
            this.sound.playPop();
            balloon.classList.add('popping');
            this.showRoundSuccess(this.targetColor.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel1();
              } else {
                this.completeLevel(1);
              }
            });
          } else {
            this.sound.playBoing();
            balloon.style.transform = 'scale(0.85)';
            setTimeout(() => { balloon.style.transform = ''; }, 200);
            this.voice.playClip('oops_try_again') || this.voice.speak(`Oops! That's ${color.name}. Find ${this.targetColor.name}!`);
          }
        });

        arena.appendChild(balloon);
      });
    }

    // ===================================================
    // LEVEL 2: BILI'S BACKPACK (Sorting & Packing)
    // ===================================================
    startLevel2() {
      this.maxRounds = 5;
      this.playRoundLevel2();
    }

    playRoundLevel2() {
      const container = document.getElementById('backpackItemsContainer');
      container.innerHTML = '';

      // Wider pool including Orange & Purple
      const pool = [COLORS.ORANGE, COLORS.PURPLE, COLORS.PINK, COLORS.GREEN, COLORS.YELLOW, COLORS.RED];
      this.targetColor = pool[Math.floor(Math.random() * pool.length)];

      const promptEl = document.getElementById('promptColorL2');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;
      document.getElementById('spanishHintL2').textContent = `(${this.targetColor.spanish})`;
      document.getElementById('backpackTargetColorName').textContent = this.targetColor.name;

      document.getElementById('progressFillL2').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL2').textContent = `Ronda ${this.currentRound} de ${this.maxRounds}`;

      // Voice prompt using ElevenLabs child voice
      const instKey = `inst_l2_${this.targetColor.name.toLowerCase()}`;
      this.voice.playClip(instKey) || this.voice.speakColor(this.targetColor.name);

      // 4 toys: 1 matching, 3 distractors
      const candidateColors = [this.targetColor];
      const remaining = pool.filter(c => c !== this.targetColor);
      while (candidateColors.length < 4 && remaining.length > 0) {
        const idx = Math.floor(Math.random() * remaining.length);
        candidateColors.push(remaining.splice(idx, 1)[0]);
      }
      candidateColors.sort(() => Math.random() - 0.5);

      candidateColors.forEach(color => {
        const itemObj = color.items[Math.floor(Math.random() * color.items.length)];
        const card = document.createElement('div');
        card.className = 'toy-card';
        card.draggable = true;
        card.dataset.colorName = color.name;

        card.innerHTML = `
          <div class="toy-icon">${itemObj.icon}</div>
          <span class="toy-color-badge" style="background-color: ${color.hex}; color: ${color.textHex}">${color.name}</span>
        `;

        // Support both Drag and Touch/Click
        card.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', color.name);
        });

        // Direct tap support for toddlers on tablet or mouse
        card.addEventListener('click', () => {
          this.handleBackpackSubmit(color.name, card);
        });

        container.appendChild(card);
      });
    }

    initBackpackDropZone() {
      const dropZone = document.getElementById('backpackDropZone');
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.querySelector('.backpack-visual').classList.add('drag-over');
      });

      dropZone.addEventListener('dragleave', () => {
        dropZone.querySelector('.backpack-visual').classList.remove('drag-over');
      });

      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.querySelector('.backpack-visual').classList.remove('drag-over');
        const colorName = e.dataTransfer.getData('text/plain');
        this.handleBackpackSubmit(colorName);
      });
    }

    handleBackpackSubmit(chosenColorName, cardElement) {
      if (chosenColorName === this.targetColor.name) {
        if (cardElement) {
          cardElement.style.transform = 'scale(0) translateY(100px)';
          cardElement.style.opacity = '0';
        }
        this.showRoundSuccess(this.targetColor.name, () => {
          if (this.currentRound < this.maxRounds) {
            this.currentRound++;
            this.playRoundLevel2();
          } else {
            this.completeLevel(2);
          }
        });
      } else {
        this.sound.playBoing();
        this.voice.playClip('oops_try_again') || this.voice.speak(`That is ${chosenColorName}. Let's find ${this.targetColor.name}!`);
      }
    }

    // ===================================================
    // LEVEL 3: MAGIC PAINT (Object Association)
    // ===================================================
    startLevel3() {
      this.maxRounds = 5;
      this.playRoundLevel3();
    }

    playRoundLevel3() {
      const paintPresets = [
        { object: 'Sun', icon: '☀️', color: COLORS.YELLOW, audioKey: 'paint_sun_yellow' },
        { object: 'Strawberry', icon: '🍓', color: COLORS.RED, audioKey: 'paint_strawberry_red' },
        { object: 'Frog', icon: '🐸', color: COLORS.GREEN, audioKey: 'paint_frog_green' },
        { object: 'Dolphin', icon: '🐬', color: COLORS.BLUE, audioKey: 'paint_dolphin_blue' },
        { object: 'Carrot', icon: '🥕', color: COLORS.ORANGE, audioKey: 'paint_carrot_orange' },
        { object: 'Grapes', icon: '🍇', color: COLORS.PURPLE, audioKey: 'paint_grapes_purple' },
        { object: 'Donut', icon: '🍩', color: COLORS.PINK, audioKey: 'paint_donut_pink' },
        { object: 'Teddy Bear', icon: '🧸', color: COLORS.BROWN, audioKey: 'paint_bear_brown' }
      ];

      const currentPreset = paintPresets[Math.floor(Math.random() * paintPresets.length)];
      this.targetObject = currentPreset;
      this.targetColor = currentPreset.color;

      document.getElementById('canvasTargetObjectName').textContent = currentPreset.object;
      const promptEl = document.getElementById('promptColorL3');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;
      document.getElementById('spanishHintL3').textContent = `(${this.targetColor.spanish})`;

      document.getElementById('progressFillL3').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL3').textContent = `Ronda ${this.currentRound} de ${this.maxRounds}`;

      const drawingDisplay = document.getElementById('drawingDisplay');
      drawingDisplay.textContent = currentPreset.icon;
      drawingDisplay.classList.remove('painted');

      // Voice prompt using ElevenLabs child voice
      const instKey = currentPreset.audioKey;
      this.voice.playClip(instKey) || this.voice.speakColor(this.targetColor.name);

      // Paint buckets (4 colors)
      const allColors = Object.values(COLORS);
      const choices = [this.targetColor];
      const remaining = allColors.filter(c => c !== this.targetColor);
      while (choices.length < 4 && remaining.length > 0) {
        const idx = Math.floor(Math.random() * remaining.length);
        choices.push(remaining.splice(idx, 1)[0]);
      }
      choices.sort(() => Math.random() - 0.5);

      const bucketsRow = document.getElementById('paintBucketsRow');
      bucketsRow.innerHTML = '';

      choices.forEach(c => {
        const splatBtn = document.createElement('button');
        splatBtn.className = 'paint-splat-btn';
        splatBtn.style.backgroundColor = c.hex;
        splatBtn.innerHTML = `
          <span class="splat-icon">🎨</span>
          <span class="splat-name">${c.name}</span>
        `;

        splatBtn.addEventListener('click', () => {
          if (c === this.targetColor) {
            drawingDisplay.classList.add('painted');
            this.showRoundSuccess(this.targetColor.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel3();
              } else {
                this.completeLevel(3);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again') || this.voice.speak(`No, that is ${c.name}. Tap ${this.targetColor.name}!`);
          }
        });

        bucketsRow.appendChild(splatBtn);
      });
    }

    // ===================================================
    // LEVEL 4: BUBBLE STARS (Gentle Action & Reflexes)
    // ===================================================
    startLevel4() {
      this.maxRounds = 4;
      this.playRoundLevel4();
    }

    playRoundLevel4() {
      const pond = document.getElementById('bubblesPond');
      pond.innerHTML = '';

      const pool = Object.values(COLORS);
      this.targetColor = pool[Math.floor(Math.random() * pool.length)];
      this.bubblesToCatch = 3;

      const promptEl = document.getElementById('promptColorL4');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;
      document.getElementById('spanishHintL4').textContent = `(${this.targetColor.spanish})`;
      document.getElementById('bubblesRemainingCount').textContent = this.bubblesToCatch;

      document.getElementById('progressFillL4').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL4').textContent = `Ronda ${this.currentRound} de ${this.maxRounds}`;

      // Voice prompt using ElevenLabs child voice
      const instKey = `catch_${this.targetColor.name.toLowerCase()}_bubbles`;
      this.voice.playClip(instKey) || this.voice.speakColor(this.targetColor.name);

      // Spawn 8 bubbles: 3 target, 5 other colors
      const bubbleColors = [this.targetColor, this.targetColor, this.targetColor];
      const others = pool.filter(c => c !== this.targetColor);
      for (let i = 0; i < 5; i++) {
        bubbleColors.push(others[Math.floor(Math.random() * others.length)]);
      }
      bubbleColors.sort(() => Math.random() - 0.5);

      bubbleColors.forEach((color, idx) => {
        const bubble = document.createElement('div');
        bubble.className = 'game-bubble';
        bubble.style.backgroundColor = color.hex;
        bubble.style.color = color.textHex;
        bubble.innerHTML = `<span>⭐</span>`;

        // Scatter nicely
        const left = 8 + (idx % 4) * 22 + (Math.random() * 8 - 4);
        const top = 12 + Math.floor(idx / 4) * 44 + (Math.random() * 8 - 4);
        bubble.style.left = `${Math.min(85, Math.max(5, left))}%`;
        bubble.style.top = `${Math.min(75, Math.max(5, top))}%`;
        bubble.style.animationDelay = `${(idx * 0.4).toFixed(1)}s`;

        bubble.addEventListener('click', () => {
          if (color === this.targetColor) {
            this.sound.playPop();
            bubble.style.transform = 'scale(1.4)';
            bubble.style.opacity = '0';
            setTimeout(() => bubble.remove(), 200);

            this.bubblesToCatch--;
            document.getElementById('bubblesRemainingCount').textContent = this.bubblesToCatch;

            if (this.bubblesToCatch > 0) {
              if (this.bubblesToCatch === 2) {
                this.voice.playClip('two_left');
              } else if (this.bubblesToCatch === 1) {
                this.voice.playClip('one_left');
              } else {
                this.voice.speak(`${this.bubblesToCatch} left!`);
              }
            } else {
              this.showRoundSuccess(this.targetColor.name, () => {
                if (this.currentRound < this.maxRounds) {
                  this.currentRound++;
                  this.playRoundLevel4();
                } else {
                  this.completeLevel(4);
                }
              });
            }
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again') || this.voice.speak(`That bubble is ${color.name}! Pop ${this.targetColor.name}!`);
          }
        });

        pond.appendChild(bubble);
      });
    }

    // ===================================================
    // LEVEL 5: COLOR DISCO & TROPHY
    // ===================================================
    startLevel5() {
      this.discoRoundsWon = 0;
      this.maxRounds = 4;
      this.playRoundLevel5();
    }

    playRoundLevel5() {
      const grid = document.getElementById('discoTilesGrid');
      grid.innerHTML = '';

      const pool = [COLORS.ORANGE, COLORS.PURPLE, COLORS.YELLOW, COLORS.BLUE, COLORS.GREEN, COLORS.RED];
      pool.sort(() => Math.random() - 0.5);
      const activeColors = pool.slice(0, 4);

      this.targetColor = activeColors[Math.floor(Math.random() * activeColors.length)];

      const promptEl = document.getElementById('promptColorL5');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;

      document.getElementById('discoRoundsCounter').textContent = `${this.discoRoundsWon} / ${this.maxRounds}`;

      // Voice prompt using ElevenLabs child voice
      const instKey = `dance_on_${this.targetColor.name.toLowerCase()}`;
      this.voice.playClip(instKey) || this.voice.speakColor(this.targetColor.name);

      activeColors.forEach(color => {
        const tile = document.createElement('div');
        tile.className = 'disco-tile';
        tile.style.backgroundColor = color.hex;
        tile.textContent = color.name;

        tile.addEventListener('click', () => {
          if (color === this.targetColor) {
            tile.classList.add('flash');
            this.sound.playChime();
            this.discoRoundsWon++;
            document.getElementById('discoRoundsCounter').textContent = `${this.discoRoundsWon} / ${this.maxRounds}`;

            if (this.discoRoundsWon < this.maxRounds) {
              setTimeout(() => this.playRoundLevel5(), 800);
            } else {
              this.completeLevel(5);
            }
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again') || this.voice.speak(`That's ${color.name}. Find ${this.targetColor.name}!`);
          }
        });

        grid.appendChild(tile);
      });
    }

    // ===================================================
    // LEVEL 6: BILI'S COLOR TRAIN
    // ===================================================
    startLevel6() {
      this.maxRounds = 4;
      this.playRoundLevel6();
    }

    playRoundLevel6() {
      const platform = document.getElementById('trainCratesPlatform');
      const wagon = document.getElementById('trainWagonWaiting');
      platform.innerHTML = '';
      wagon.className = 'wagon-waiting';
      wagon.innerHTML = '<span class="wagon-placeholder">📦 ¡Carga aquí!</span>';

      const pool = [COLORS.BLUE, COLORS.RED, COLORS.YELLOW, COLORS.GREEN, COLORS.ORANGE, COLORS.PURPLE];
      this.targetColor = pool[Math.floor(Math.random() * pool.length)];

      const promptEl = document.getElementById('promptColorL6');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;
      document.getElementById('spanishHintL6').textContent = `(${this.targetColor.spanish})`;

      document.getElementById('progressFillL6').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL6').textContent = `Vagón ${this.currentRound} de ${this.maxRounds}`;

      this.voice.speakColor(this.targetColor.name);

      const choices = [this.targetColor];
      const others = pool.filter(c => c !== this.targetColor);
      while (choices.length < 3 && others.length > 0) {
        choices.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
      }
      choices.sort(() => Math.random() - 0.5);

      choices.forEach(color => {
        const crate = document.createElement('div');
        crate.className = 'train-crate';
        crate.style.backgroundColor = color.hex;
        crate.innerHTML = `<span>🎁</span><span class="crate-label">${color.name}</span>`;

        crate.addEventListener('click', () => {
          if (color === this.targetColor) {
            wagon.className = 'wagon-waiting loaded';
            wagon.style.backgroundColor = color.hex;
            wagon.innerHTML = `<span style="font-size:2.5rem;">🎁</span>`;
            crate.style.transform = 'scale(0)';
            this.sound.playChime();

            this.showRoundSuccess(this.targetColor.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel6();
              } else {
                this.completeLevel(6);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        platform.appendChild(crate);
      });
    }

    // ===================================================
    // LEVEL 7: FLASHLIGHT SAFARI
    // ===================================================
    startLevel7() {
      this.maxRounds = 4;
      this.initSafariFlashlight();
      this.playRoundLevel7();
    }

    initSafariFlashlight() {
      const arena = document.getElementById('safariArena');
      const beam = document.getElementById('safariBeam');
      if (!arena || !beam) return;

      const moveBeam = (x, y) => {
        const rect = arena.getBoundingClientRect();
        const relX = x - rect.left;
        const relY = y - rect.top;
        beam.style.display = 'block';
        beam.style.left = `${relX}px`;
        beam.style.top = `${relY}px`;

        // Reveal animals near flashlight center
        document.querySelectorAll('.safari-animal-card').forEach(card => {
          const cRect = card.getBoundingClientRect();
          const cardX = cRect.left + cRect.width / 2 - rect.left;
          const cardY = cRect.top + cRect.height / 2 - rect.top;
          const dist = Math.hypot(cardX - relX, cardY - relY);
          if (dist < 100) {
            card.classList.add('revealed');
          } else {
            card.classList.remove('revealed');
          }
        });
      };

      arena.onmousemove = (e) => moveBeam(e.clientX, e.clientY);
      arena.ontouchmove = (e) => {
        if (e.touches && e.touches.length > 0) moveBeam(e.touches[0].clientX, e.touches[0].clientY);
      };
    }

    playRoundLevel7() {
      const container = document.getElementById('safariAnimalsContainer');
      container.innerHTML = '';

      const safariAnimals = [
        { icon: '🦁', color: COLORS.YELLOW },
        { icon: '🐸', color: COLORS.GREEN },
        { icon: '🐬', color: COLORS.BLUE },
        { icon: '🦩', color: COLORS.PINK },
        { icon: '🦊', color: COLORS.ORANGE },
        { icon: '🔮', color: COLORS.PURPLE },
        { icon: '🐻', color: COLORS.BROWN },
        { icon: '🍎', color: COLORS.RED }
      ];

      safariAnimals.sort(() => Math.random() - 0.5);
      const activeChoices = safariAnimals.slice(0, 4);
      const targetObj = activeChoices[Math.floor(Math.random() * activeChoices.length)];
      this.targetColor = targetObj.color;

      const promptEl = document.getElementById('promptColorL7');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;
      document.getElementById('spanishHintL7').textContent = `(${this.targetColor.spanish})`;

      document.getElementById('progressFillL7').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL7').textContent = `Animal ${this.currentRound} de ${this.maxRounds}`;

      this.voice.speakColor(this.targetColor.name);

      activeChoices.forEach((animal, idx) => {
        const card = document.createElement('div');
        card.className = 'safari-animal-card';
        card.textContent = animal.icon;
        card.style.backgroundColor = animal.color.hex;

        const left = 15 + (idx % 2) * 45 + (Math.random() * 10 - 5);
        const top = 15 + Math.floor(idx / 2) * 45 + (Math.random() * 10 - 5);
        card.style.left = `${Math.min(75, Math.max(10, left))}%`;
        card.style.top = `${Math.min(70, Math.max(10, top))}%`;

        card.addEventListener('click', () => {
          if (animal.color === this.targetColor) {
            card.classList.add('revealed');
            this.sound.playChime();
            this.showRoundSuccess(this.targetColor.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel7();
              } else {
                this.completeLevel(7);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        container.appendChild(card);
      });
    }

    // ===================================================
    // LEVEL 8: ICE CREAM TOWER
    // ===================================================
    startLevel8() {
      this.maxRounds = 4;
      this.playRoundLevel8();
    }

    playRoundLevel8() {
      const stack = document.getElementById('icecreamStack');
      const flavors = document.getElementById('icecreamFlavors');
      stack.innerHTML = '<div class="icecream-cone">🍦</div>';
      flavors.innerHTML = '';

      const pool = [COLORS.PINK, COLORS.BROWN, COLORS.YELLOW, COLORS.GREEN, COLORS.BLUE, COLORS.ORANGE];
      pool.sort(() => Math.random() - 0.5);

      this.iceCreamTargetColors = pool.slice(0, 3);
      this.iceCreamCurrentStep = 0;
      this.promptNextIceCreamScoop();

      document.getElementById('progressFillL8').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL8').textContent = `Helado ${this.currentRound} de ${this.maxRounds}`;

      pool.forEach(color => {
        const scoopBtn = document.createElement('button');
        scoopBtn.className = 'flavor-scoop-btn';
        scoopBtn.style.backgroundColor = color.hex;
        scoopBtn.innerHTML = `<span>🍨</span>`;

        scoopBtn.addEventListener('click', () => {
          const currentTarget = this.iceCreamTargetColors[this.iceCreamCurrentStep];
          if (color === currentTarget) {
            this.sound.playChime();
            const stackedScoop = document.createElement('div');
            stackedScoop.className = 'icecream-scoop-stacked';
            stackedScoop.style.backgroundColor = color.hex;
            stack.appendChild(stackedScoop);

            this.iceCreamCurrentStep++;
            if (this.iceCreamCurrentStep === 1) {
              this.voice.playClip('two_left');
              setTimeout(() => this.promptNextIceCreamScoop(), 1200);
            } else if (this.iceCreamCurrentStep === 2) {
              this.voice.playClip('one_left');
              setTimeout(() => this.promptNextIceCreamScoop(), 1200);
            } else {
              this.showRoundSuccess(currentTarget.name, () => {
                if (this.currentRound < this.maxRounds) {
                  this.currentRound++;
                  this.playRoundLevel8();
                } else {
                  this.completeLevel(8);
                }
              });
            }
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        flavors.appendChild(scoopBtn);
      });
    }

    promptNextIceCreamScoop() {
      const target = this.iceCreamTargetColors[this.iceCreamCurrentStep];
      if (!target) return;
      this.targetColor = target;

      const promptEl = document.getElementById('promptColorL8');
      promptEl.textContent = target.name;
      promptEl.style.backgroundColor = target.hex;
      promptEl.style.color = target.textHex;
      document.getElementById('spanishHintL8').textContent = `(${target.spanish})`;

      this.voice.speakColor(target.name);
    }

    // ===================================================
    // LEVEL 9: RAINBOW BRIDGE
    // ===================================================
    startLevel9() {
      this.bridgeColors = [COLORS.RED, COLORS.ORANGE, COLORS.YELLOW, COLORS.GREEN, COLORS.BLUE, COLORS.PURPLE];
      this.bridgeStep = 0;
      this.setupRainbowBridge();
    }

    setupRainbowBridge() {
      const arch = document.getElementById('bridgeArch');
      arch.innerHTML = '';
      this.bridgeColors.forEach((c, idx) => {
        const slot = document.createElement('div');
        slot.className = 'bridge-stone-slot';
        slot.id = `bridgeSlot${idx}`;
        slot.textContent = '☁️';
        arch.appendChild(slot);
      });

      this.playBridgeStep();
    }

    playBridgeStep() {
      const picker = document.getElementById('rainbowStonesPicker');
      picker.innerHTML = '';

      this.targetColor = this.bridgeColors[this.bridgeStep];

      const promptEl = document.getElementById('promptColorL9');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;
      document.getElementById('spanishHintL9').textContent = `(${this.targetColor.spanish})`;

      document.getElementById('progressFillL9').style.width = `${(this.bridgeStep / this.bridgeColors.length) * 100}%`;
      document.getElementById('roundCounterL9').textContent = `Paso ${this.bridgeStep + 1} de ${this.bridgeColors.length}`;

      this.voice.speakColor(this.targetColor.name);

      const choices = [this.targetColor];
      const others = this.bridgeColors.filter(c => c !== this.targetColor);
      while (choices.length < 3 && others.length > 0) {
        choices.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
      }
      choices.sort(() => Math.random() - 0.5);

      choices.forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'rainbow-stone-btn';
        btn.style.backgroundColor = color.hex;
        btn.textContent = '⭐';

        btn.addEventListener('click', () => {
          if (color === this.targetColor) {
            this.sound.playChime();
            const slot = document.getElementById(`bridgeSlot${this.bridgeStep}`);
            if (slot) {
              slot.className = 'bridge-stone-slot placed';
              slot.style.backgroundColor = color.hex;
              slot.textContent = '🌈';
            }

            const walker = document.getElementById('bridgeWalkerBili');
            if (walker) {
              walker.style.left = `${30 + this.bridgeStep * 65}px`;
            }

            this.bridgeStep++;
            if (this.bridgeStep < this.bridgeColors.length) {
              setTimeout(() => this.playBridgeStep(), 800);
            } else {
              this.confetti.burst(100);
              this.showRoundSuccess(this.targetColor.name, () => {
                this.completeLevel(9);
              });
            }
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        picker.appendChild(btn);
      });
    }

    // ===================================================
    // LEVEL 10: GALAXY ROCKET & GALAXY CUP
    // ===================================================
    startLevel10() {
      this.galaxyPlanetsVisited = 0;
      this.maxRounds = 4;
      const traveler = document.getElementById('rocketTraveler');
      traveler?.classList.remove('blastoff');
      this.playRoundLevel10();
    }

    playRoundLevel10() {
      const planetsRow = document.getElementById('galaxyPlanetsRow');
      planetsRow.innerHTML = '';

      const planetsPool = [
        { name: 'RED', icon: '🪐', color: COLORS.RED },
        { name: 'BLUE', icon: '🌍', color: COLORS.BLUE },
        { name: 'YELLOW', icon: '🌕', color: COLORS.YELLOW },
        { name: 'GREEN', icon: '👽', color: COLORS.GREEN },
        { name: 'PURPLE', icon: '🌌', color: COLORS.PURPLE },
        { name: 'ORANGE', icon: '☄️', color: COLORS.ORANGE }
      ];

      planetsPool.sort(() => Math.random() - 0.5);
      const activePlanets = planetsPool.slice(0, 4);
      const targetPlanet = activePlanets[Math.floor(Math.random() * activePlanets.length)];
      this.targetColor = targetPlanet.color;

      const promptEl = document.getElementById('promptColorL10');
      promptEl.textContent = this.targetColor.name;
      promptEl.style.backgroundColor = this.targetColor.hex;
      promptEl.style.color = this.targetColor.textHex;
      document.getElementById('spanishHintL10').textContent = `(${this.targetColor.spanish})`;

      document.getElementById('progressFillL10').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL10').textContent = `Planeta ${this.currentRound} de ${this.maxRounds}`;

      this.voice.speakColor(this.targetColor.name);

      activePlanets.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'galaxy-planet-btn';
        btn.style.backgroundColor = p.color.hex;
        btn.innerHTML = `<span>${p.icon}</span>`;

        btn.addEventListener('click', () => {
          if (p.color === this.targetColor) {
            btn.style.transform = 'scale(1.4)';
            this.sound.playChime();
            this.galaxyPlanetsVisited++;

            if (this.currentRound < this.maxRounds) {
              this.showRoundSuccess(this.targetColor.name, () => {
                this.currentRound++;
                this.playRoundLevel10();
              });
            } else {
              const traveler = document.getElementById('rocketTraveler');
              traveler?.classList.add('blastoff');
              this.sound.playVictory();
              this.confetti.burst(150);

              setTimeout(() => {
                this.completeLevel(10);
              }, 1600);
            }
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        planetsRow.appendChild(btn);
      });
    }
  }

  // Launch on DOM ready
  window.addEventListener('DOMContentLoaded', () => {
    window.biliGameInstance = new BiliGame();
  });
})();
