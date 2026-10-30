/**
 * ===================================================================
 * LEO'S FARM ADVENTURE - FARM ANIMALS IN ENGLISH ENGINE
 * Designed for Children Ages 3 to 5 | Bilikids Edition
 * Character: Leo the Lion Cub Explorer
 * ===================================================================
 */

(function () {
  'use strict';

  // --- FARM ANIMALS DATA MODEL ---
  const ANIMALS = {
    COW: {
      name: 'COW',
      spanish: 'Vaca',
      icon: '🐮',
      soundText: '"Moo! Moo!"',
      soundFreq: 110,
      food: { name: 'Grass', spanish: 'Pasto', icon: '🌾' },
      baby: { name: 'CALF', spanish: 'Ternero', icon: '🍼🐮' }
    },
    PIG: {
      name: 'PIG',
      spanish: 'Cerdo',
      icon: '🐷',
      soundText: '"Oink! Oink!"',
      soundFreq: 220,
      food: { name: 'Apple', spanish: 'Manzana', icon: '🍎' },
      baby: { name: 'PIGLET', spanish: 'Lechón', icon: '🎀🐖' }
    },
    SHEEP: {
      name: 'SHEEP',
      spanish: 'Oveja',
      icon: '🐑',
      soundText: '"Baa! Baa!"',
      soundFreq: 330,
      food: { name: 'Clover', spanish: 'Trébol', icon: '☘️' },
      baby: { name: 'LAMB', spanish: 'Corderito', icon: '🤍🐑' }
    },
    HORSE: {
      name: 'HORSE',
      spanish: 'Caballo',
      icon: '🐴',
      soundText: '"Neigh! Neigh!"',
      soundFreq: 440,
      food: { name: 'Hay', spanish: 'Heno', icon: '🌾' },
      baby: { name: 'FOAL', spanish: 'Potrillo', icon: '🐎' }
    },
    DUCK: {
      name: 'DUCK',
      spanish: 'Pato',
      icon: '🦆',
      soundText: '"Quack! Quack!"',
      soundFreq: 380,
      food: { name: 'Bread', spanish: 'Pan', icon: '🍞' },
      baby: { name: 'DUCKLING', spanish: 'Patito', icon: '🐥' }
    },
    HEN: {
      name: 'HEN',
      spanish: 'Gallina',
      icon: '🐔',
      soundText: '"Cluck! Cluck!"',
      soundFreq: 480,
      food: { name: 'Corn', spanish: 'Maíz', icon: '🌽' },
      baby: { name: 'CHICK', spanish: 'Pollito', icon: '🐣' }
    },
    ROOSTER: {
      name: 'ROOSTER',
      spanish: 'Gallo',
      icon: '🐓',
      soundText: '"Cock-a-doodle-doo!"',
      soundFreq: 520,
      food: { name: 'Seeds', spanish: 'Semillas', icon: '🌾' },
      baby: { name: 'CHICK', spanish: 'Pollito', icon: '🐣' }
    },
    RABBIT: {
      name: 'RABBIT',
      spanish: 'Conejo',
      icon: '🐰',
      soundText: '"Hop! Hop!"',
      soundFreq: 600,
      food: { name: 'Carrot', spanish: 'Zanahoria', icon: '🥕' },
      baby: { name: 'BUNNY', spanish: 'Conejito', icon: '🐇' }
    },
    DOG: {
      name: 'DOG',
      spanish: 'Perro',
      icon: '🐶',
      soundText: '"Woof! Woof!"',
      soundFreq: 280,
      food: { name: 'Bone', spanish: 'Hueso', icon: '🦴' },
      baby: { name: 'PUPPY', spanish: 'Cachorrito', icon: '🐾🐶' }
    },
    CAT: {
      name: 'CAT',
      spanish: 'Gato',
      icon: '🐱',
      soundText: '"Meow! Meow!"',
      soundFreq: 540,
      food: { name: 'Fish', spanish: 'Pescado', icon: '🐟' },
      baby: { name: 'KITTEN', spanish: 'Gatito', icon: '🐾🐱' }
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

    playAnimalOno(freq = 220) {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.7, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.29);
    }

    playChime() {
      if (this.muted) return;
      this.init();
      const notes = [587.33, 739.99, 880, 1174.66]; // D5, F#5, A5, D6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.07;

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
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(360, this.ctx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.26);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.27);
    }

    playPop() {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    }

    playVictory() {
      if (this.muted) return;
      this.init();
      const fanfare = [
        { f: 587.33, d: 0.12 },
        { f: 739.99, d: 0.12 },
        { f: 880.00, d: 0.12 },
        { f: 1174.66, d: 0.4 }
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

    playDoorOpen() {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(540, this.ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.23);
    }

    playCrunch() {
      if (this.muted) return;
      this.init();
      // Yummy munch/crunch sound
      [420, 360, 280].forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + i * 0.06;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, t);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.09);
      });
    }

    playDanceBeat() {
      if (this.muted) return;
      this.init();
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5 upbeat
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.09;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.17);
      });
    }

    playInstrument(type) {
      if (this.muted) return;
      this.init();
      if (type === 'trumpet') {
        [587.33, 739.99, 880].forEach((f, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const t = this.ctx.currentTime + i * 0.1;
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(f, t);
          gain.gain.setValueAtTime(0.35, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.16);
        });
      } else if (type === 'drum') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.6, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.23);
      } else {
        // Bell chime
        [880, 1318.51].forEach((f, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const t = this.ctx.currentTime + i * 0.08;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, t);
          gain.gain.setValueAtTime(0.4, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.31);
        });
      }
    }

    playTractorHorn() {
      if (this.muted) return;
      this.init();
      [330, 392].forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.45, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.36);
      });
    }

    toggleMute() {
      this.muted = !this.muted;
      return this.muted;
    }
  }

  // --- LEO VOICE & MP3 MANAGER ---
  class LeoVoiceManager {
    constructor() {
      this.synth = window.speechSynthesis || null;
      this.voice = null;
      this.currentAudio = null;

      // MP3 Clips from ElevenLabs (Finn / Leo)
      const v = 'v=1.0';
      this.clips = {
        // Animals
        cow: `assets/leo/audio/cow.mp3?${v}`,
        pig: `assets/leo/audio/pig.mp3?${v}`,
        sheep: `assets/leo/audio/sheep.mp3?${v}`,
        horse: `assets/leo/audio/horse.mp3?${v}`,
        duck: `assets/leo/audio/duck.mp3?${v}`,
        hen: `assets/leo/audio/hen.mp3?${v}`,
        rooster: `assets/leo/audio/rooster.mp3?${v}`,
        rabbit: `assets/leo/audio/rabbit.mp3?${v}`,
        dog: `assets/leo/audio/dog.mp3?${v}`,
        cat: `assets/leo/audio/cat.mp3?${v}`,

        // Babies
        calf: `assets/leo/audio/calf.mp3?${v}`,
        chick: `assets/leo/audio/chick.mp3?${v}`,
        piglet: `assets/leo/audio/piglet.mp3?${v}`,
        lamb: `assets/leo/audio/lamb.mp3?${v}`,

        // Greetings & Leo Mascot
        leo_welcome: `assets/leo/audio/leo_welcome.mp3?${v}`,
        leo_hello: `assets/leo/audio/leo_hello.mp3?${v}`,

        // Cheers & Rewards
        cheer_awesome: `assets/leo/audio/cheer_awesome.mp3?${v}`,
        cheer_great_job: `assets/leo/audio/cheer_great_job.mp3?${v}`,
        cheer_super: `assets/leo/audio/cheer_super.mp3?${v}`,
        cheer_you_did_it: `assets/leo/audio/cheer_you_did_it.mp3?${v}`,
        oops_try_again: `assets/leo/audio/oops_try_again.mp3?${v}`,
        level_complete: `assets/leo/audio/level_complete.mp3?${v}`,
        diploma_congrats: `assets/leo/audio/diploma_congrats.mp3?${v}`,

        // Level Instructions & Actions
        inst_find_cow: `assets/leo/audio/inst_find_cow.mp3?${v}`,
        inst_find_pig: `assets/leo/audio/inst_find_pig.mp3?${v}`,
        inst_find_sheep: `assets/leo/audio/inst_find_sheep.mp3?${v}`,
        inst_find_horse: `assets/leo/audio/inst_find_horse.mp3?${v}`,
        inst_find_duck: `assets/leo/audio/inst_find_duck.mp3?${v}`,
        inst_feed_animals: `assets/leo/audio/inst_feed_animals.mp3?${v}`,
        inst_sound_detective: `assets/leo/audio/inst_sound_detective.mp3?${v}`,
        inst_catch_ducks: `assets/leo/audio/inst_catch_ducks.mp3?${v}`,
        two_left: `assets/leo/audio/two_left.mp3?${v}`,
        one_left: `assets/leo/audio/one_left.mp3?${v}`,
        inst_pop_balloon: `assets/leo/audio/inst_pop_balloon.mp3?${v}`,
        inst_shadow_safari: `assets/leo/audio/inst_shadow_safari.mp3?${v}`,
        inst_animal_families: `assets/leo/audio/inst_animal_families.mp3?${v}`,
        inst_farm_harvest: `assets/leo/audio/inst_farm_harvest.mp3?${v}`,
        inst_grand_parade: `assets/leo/audio/inst_grand_parade.mp3?${v}`
      };

      this.initVoices();
      if (this.synth && this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }

    initVoices() {
      if (!this.synth) return;
      const voices = this.synth.getVoices();
      const preferred = ['Daniel', 'Alex', 'Samantha', 'Google US English'];
      for (const pref of preferred) {
        const found = voices.find(v => v.name.includes(pref) && v.lang.startsWith('en'));
        if (found) {
          this.voice = found;
          break;
        }
      }
    }

    playClip(clipKey, onEnd) {
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio = null;
      }

      const clipUrl = this.clips[clipKey];
      if (!clipUrl) {
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
        // If file not generated yet, fallback to speech synthesis
        this.speakFallback(clipKey, onEnd);
      });
      return true;
    }

    speakAnimal(animalKey, onEnd) {
      const key = String(animalKey).toLowerCase().trim();
      const clipKey = `inst_find_${key}`;
      if (this.clips[clipKey]) {
        return this.playClip(clipKey, onEnd);
      }
      return this.playClip(key, onEnd) || this.speak(`Find the ${animalKey}!`, onEnd);
    }

    speakFallback(clipKey, onEnd) {
      const fallbackTexts = {
        cow: 'Cow! Moo!',
        pig: 'Pig! Oink!',
        sheep: 'Sheep! Baa!',
        horse: 'Horse! Neigh!',
        duck: 'Duck! Quack!',
        hen: 'Hen! Cluck!',
        rooster: 'Rooster!',
        rabbit: 'Rabbit! Hop hop!',
        dog: 'Dog! Woof!',
        cat: 'Cat! Meow!',
        leo_welcome: "Roar! Hi friends! I'm Leo the Explorer! Let's visit the farm!",
        leo_hello: "Hello! I'm Leo! Let's explore farm animals!",
        cheer_great_job: 'Great job!',
        cheer_awesome: 'Awesome!',
        cheer_super: 'Super!',
        cheer_you_did_it: 'You did it!',
        oops_try_again: 'Oops! Try again, explorer!',
        level_complete: 'Level complete! You are doing amazing!',
        diploma_congrats: 'Congratulations! You are a Super Farm Explorer with Leo!'
      };
      const text = fallbackTexts[clipKey] || clipKey;
      this.speak(text, onEnd);
    }

    speak(text, onEnd) {
      if (!this.synth) {
        if (onEnd) onEnd();
        return;
      }
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.voice) utterance.voice = this.voice;
      utterance.lang = 'en-US';
      utterance.rate = 0.88;
      utterance.pitch = 1.15;

      if (onEnd) utterance.onend = onEnd;
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
      const colors = ['#f39c12', '#2ecc71', '#f1c40f', '#e67e22', '#00cec9', '#e74c3c'];
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

      if (!this.animationFrame) this.update();
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

  // --- MAIN LEO FARM GAME CONTROLLER ---
  class LeoFarmGame {
    constructor() {
      this.sound = new SoundManager();
      this.voice = new LeoVoiceManager();
      this.confetti = new ConfettiEngine(document.getElementById('confettiCanvas'));

      this.currentLevel = 1;
      this.currentRound = 0;
      this.maxRounds = 4;
      this.targetAnimal = null;
      this.ducksRemaining = 0;
      this.barnDanceCount = 0;

      this.progress = this.loadProgress();

      this.dom = {
        totalStarsCount: document.getElementById('totalStarsCount'),
        levelBadgeText: document.getElementById('levelBadgeText'),
        soundIcon: document.getElementById('soundIcon'),
        btnHome: document.getElementById('btnHome'),
        btnSoundToggle: document.getElementById('btnSoundToggle'),
        btnFullscreen: document.getElementById('btnFullscreen'),
        btnStartGame: document.getElementById('btnStartGame'),
        btnRepeatWelcome: document.getElementById('btnRepeatWelcome'),
        leoHeroImg: document.getElementById('leoHeroImg'),
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
        successAnimal: document.getElementById('successAnimal')
      };

      this.initEvents();
      this.updateStarUI();

      if (window.location.hash) {
        const m = window.location.hash.match(/level(\d+)/i);
        if (m) {
          const lvl = parseInt(m[1], 10);
          if (lvl >= 1 && lvl <= 10) {
            setTimeout(() => this.goToLevel(lvl), 50);
          }
        }
      }
    }

    loadProgress() {
      try {
        const saved = localStorage.getItem('leo_farm_adventure_prog');
        if (saved) return JSON.parse(saved);
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
        localStorage.setItem('leo_farm_adventure_prog', JSON.stringify(this.progress));
      } catch (e) {}
    }

    initEvents() {
      this.dom.btnStartGame?.addEventListener('click', () => {
        this.sound.init();
        this.goToLevel(this.getHighestUnlockedLevel());
      });

      const replayLeoWelcome = () => {
        this.sound.init();
        const played = this.voice.playClip('leo_welcome');
        if (!played) {
          this.voice.speak("Roar! Hi friends! I'm Leo! Let's explore the farm!");
        }
      };

      this.dom.btnRepeatWelcome?.addEventListener('click', replayLeoWelcome);
      this.dom.leoHeroImg?.addEventListener('click', replayLeoWelcome);

      this.dom.btnHome.addEventListener('click', () => {
        this.showScreen('home');
      });

      this.dom.btnSoundToggle.addEventListener('click', () => {
        const isMuted = this.sound.toggleMute();
        this.dom.soundIcon.textContent = isMuted ? '🔇' : '🔊';
      });

      this.dom.btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });

      // Stage Tabs Switching
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

      // Level Cards Click
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

      // Mascot Click
      document.querySelectorAll('.leo-companion-img, .leo-fullbody-hero-img').forEach(leoImg => {
        leoImg.addEventListener('click', () => {
          this.sound.playChime();
          leoImg.style.transform = 'scale(1.2) translateY(-10px)';
          setTimeout(() => { leoImg.style.transform = ''; }, 300);
          if (this.currentLevel && this.dom.screens[`level${this.currentLevel}`]?.classList.contains('active')) {
            this.speakLevelPrompt(this.currentLevel);
          } else {
            this.voice.playClip('leo_hello');
          }
        });
      });

      // Repeat Buttons for each level
      for (let i = 1; i <= 10; i++) {
        document.getElementById(`btnSpeakPromptL${i}`)?.addEventListener('click', () => this.speakLevelPrompt(i));
      }

      // Celebration Buttons
      document.getElementById('btnPrintDiploma')?.addEventListener('click', () => window.print());
      document.getElementById('btnPlayAgain')?.addEventListener('click', () => this.showScreen('home'));
      document.getElementById('btnContinueStage2')?.addEventListener('click', () => {
        const btnCont = document.getElementById('btnContinueStage2');
        if (btnCont) btnCont.style.display = 'none';
        this.goToLevel(6);
      });
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

      // Stage 2 Lock Badge
      const btnStage2Tab = document.getElementById('btnStage2Tab');
      const stage2LockBadge = document.getElementById('stage2LockBadge');
      const isStage2Unlocked = this.progress.stage2Unlocked || this.progress.unlockedLevels.includes(6);

      if (btnStage2Tab && stage2LockBadge) {
        if (isStage2Unlocked) {
          btnStage2Tab.classList.remove('locked');
          stage2LockBadge.textContent = '⭐ ¡Desbloqueado!';
          stage2LockBadge.style.background = '#e8f8f5';
          stage2LockBadge.style.color = '#117a65';
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
      if (activeScr) activeScr.classList.add('active');

      if (screenName === 'home') {
        this.dom.levelBadgeText.textContent = 'Granja';
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
      if (!this.targetAnimal && lvl !== 9) return;
      if (lvl === 2) {
        this.voice.playClip('inst_feed_animals');
      } else if (lvl === 3) {
        // Play sound clue without spoiling the name!
        this.sound.playAnimalOno(this.targetAnimal.soundFreq);
      } else if (lvl === 4) {
        this.voice.playClip('inst_catch_ducks');
      } else if (lvl === 6) {
        // Sound clue without giving away the name!
        this.sound.playAnimalOno(this.targetAnimal.soundFreq);
      } else if (lvl === 7) {
        this.voice.playClip('inst_animal_families');
      } else if (lvl === 8) {
        this.voice.playClip('inst_pop_balloon', () => {
          setTimeout(() => this.voice.speakAnimal(this.targetAnimal.name), 200);
        });
      } else if (lvl === 9) {
        this.voice.playClip('inst_farm_harvest');
      } else {
        this.voice.speakAnimal(this.targetAnimal.name);
      }
    }

    showRoundSuccess(animalName, callback) {
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
      this.dom.successMessage.innerHTML = `¡You found the <strong>${animalName}</strong>!`;
      this.dom.successAnimal.textContent = animalName;
      this.dom.successOverlay.classList.remove('hidden');

      this.voice.playClip(randomCheer.clip, () => {
        setTimeout(() => this.voice.speakAnimal(animalName), 150);
      });

      setTimeout(() => {
        this.dom.successOverlay.classList.add('hidden');
        if (callback) callback();
      }, 2000);
    }

    completeLevel(levelNum) {
      this.sound.playVictory();
      this.confetti.burst(120);

      this.progress.levelStars[levelNum] = 3;
      if (levelNum < 10 && !this.progress.unlockedLevels.includes(levelNum + 1)) {
        this.progress.unlockedLevels.push(levelNum + 1);
      }

      if (levelNum === 5) {
        this.progress.stage2Unlocked = true;
        this.updateStarUI();
        setTimeout(() => {
          this.showScreen('celebration');
          const btnCont = document.getElementById('btnContinueStage2');
          if (btnCont) btnCont.style.display = 'inline-flex';
          this.confetti.burst(150);
          this.voice.playClip('diploma_congrats');
        }, 1200);
      } else if (levelNum === 10) {
        this.updateStarUI();
        setTimeout(() => {
          this.showScreen('celebration');
          const btnCont = document.getElementById('btnContinueStage2');
          if (btnCont) btnCont.style.display = 'none';
          this.confetti.burst(200);
          this.voice.playClip('diploma_congrats');
        }, 1200);
      } else {
        this.voice.playClip('level_complete');
        this.updateStarUI();
        setTimeout(() => this.goToLevel(levelNum + 1), 2200);
      }
    }

    // ===================================================
    // LEVEL 1: BARN PEEK-A-BOO
    // ===================================================
    startLevel1() {
      this.maxRounds = 4;
      this.playRoundLevel1();
    }

    playRoundLevel1() {
      const arena = document.getElementById('barnPeekArena');
      arena.innerHTML = '';

      const pool = [ANIMALS.COW, ANIMALS.PIG, ANIMALS.SHEEP, ANIMALS.HORSE];
      this.targetAnimal = pool[Math.floor(Math.random() * pool.length)];

      document.getElementById('promptAnimalL1').textContent = this.targetAnimal.name;
      document.getElementById('spanishHintL1').textContent = `(${this.targetAnimal.spanish})`;

      document.getElementById('progressFillL1').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL1').textContent = `Ronda ${this.currentRound} de ${this.maxRounds}`;

      this.voice.speakAnimal(this.targetAnimal.name);

      const choices = [this.targetAnimal];
      const remaining = pool.filter(a => a !== this.targetAnimal);
      while (choices.length < 3 && remaining.length > 0) {
        choices.push(remaining.splice(Math.floor(Math.random() * remaining.length), 1)[0]);
      }
      choices.sort(() => Math.random() - 0.5);

      choices.forEach(animal => {
        const door = document.createElement('div');
        door.className = 'barn-door-card';
        door.innerHTML = `
          <div class="barn-door-interior">
            <div class="barn-peek-animal-icon">${animal.icon}</div>
            <div class="barn-door-label">${animal.name}</div>
          </div>
          <div class="barn-door-leaf">
            <div class="barn-door-wood-beams"></div>
            <span style="font-size:2.8rem; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));">❓</span>
            <div class="barn-door-knob"></div>
          </div>
        `;

        door.addEventListener('click', () => {
          if (door.classList.contains('open')) return;
          door.classList.add('open');
          this.sound.playDoorOpen();

          if (animal === this.targetAnimal) {
            this.sound.playAnimalOno(animal.soundFreq);
            this.showRoundSuccess(animal.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel1();
              } else {
                this.completeLevel(1);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
            setTimeout(() => {
              door.classList.remove('open');
            }, 900);
          }
        });

        arena.appendChild(door);
      });
    }

    // ===================================================
    // LEVEL 2: FEED THE ANIMALS
    // ===================================================
    startLevel2() {
      this.maxRounds = 4;
      this.playRoundLevel2();
    }

    playRoundLevel2() {
      const container = document.getElementById('feedingAnimalContainer');
      const trough = document.getElementById('foodTroughRow');
      container.innerHTML = '';
      trough.innerHTML = '';

      const pool = [ANIMALS.RABBIT, ANIMALS.HORSE, ANIMALS.DOG, ANIMALS.PIG, ANIMALS.HEN];
      this.targetAnimal = pool[Math.floor(Math.random() * pool.length)];

      // Show food name and icon in prompt to match the clickable food targets!
      document.getElementById('promptAnimalL2').textContent = `${this.targetAnimal.food.name} ${this.targetAnimal.food.icon}`;
      document.getElementById('spanishHintL2').textContent = `(${this.targetAnimal.food.spanish} para ${this.targetAnimal.spanish})`;

      document.getElementById('progressFillL2').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL2').textContent = `Ronda ${this.currentRound} de ${this.maxRounds}`;

      this.voice.playClip('inst_feed_animals');

      container.innerHTML = `
        <div class="feeding-animal-avatar" id="activeHungryAvatar">${this.targetAnimal.icon}</div>
        <div class="feeding-animal-name">I'm hungry! Give me <strong>${this.targetAnimal.food.name}</strong> ${this.targetAnimal.food.icon}</div>
      `;

      const avatarEl = document.getElementById('activeHungryAvatar');
      if (avatarEl) {
        avatarEl.style.cursor = 'pointer';
        avatarEl.title = '¡Tócame!';
        avatarEl.addEventListener('click', () => {
          this.sound.playAnimalOno(this.targetAnimal.soundFreq);
          avatarEl.style.transform = 'scale(1.2) rotate(-8deg)';
          setTimeout(() => { avatarEl.style.transform = ''; }, 300);
        });
      }

      const choices = [this.targetAnimal.food];
      const others = pool.filter(a => a !== this.targetAnimal).map(a => a.food);
      while (choices.length < 3 && others.length > 0) {
        choices.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
      }
      choices.sort(() => Math.random() - 0.5);

      choices.forEach(food => {
        const btn = document.createElement('button');
        btn.className = 'food-card-btn';
        btn.innerHTML = `<span>${food.icon}</span>`;

        btn.addEventListener('click', () => {
          if (food.name === this.targetAnimal.food.name) {
            this.sound.playCrunch();
            this.sound.playAnimalOno(this.targetAnimal.soundFreq);
            btn.style.transform = 'scale(0)';

            if (avatarEl) {
              avatarEl.classList.add('chewing');
              const heart = document.createElement('div');
              heart.className = 'eating-heart';
              heart.textContent = '❤️';
              container.appendChild(heart);
              setTimeout(() => heart.remove(), 1200);
            }

            this.showRoundSuccess(this.targetAnimal.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel2();
              } else {
                this.completeLevel(2);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        trough.appendChild(btn);
      });
    }

    // ===================================================
    // LEVEL 3: SOUND DETECTIVE
    // ===================================================
    startLevel3() {
      this.maxRounds = 4;
      this.playRoundLevel3();
    }

    playRoundLevel3() {
      const choicesContainer = document.getElementById('soundAnimalChoices');
      choicesContainer.innerHTML = '';

      const pool = [ANIMALS.SHEEP, ANIMALS.COW, ANIMALS.DUCK, ANIMALS.DOG, ANIMALS.CAT];
      pool.sort(() => Math.random() - 0.5);
      const activeLineup = pool.slice(0, 3);
      this.targetAnimal = activeLineup[Math.floor(Math.random() * activeLineup.length)];

      // Mystery clue without auto-spoiling the name!
      document.getElementById('promptAnimalL3').textContent = '❓ ANIMAL';
      document.getElementById('spanishHintL3').textContent = '(¡Escucha el sonido!)';
      document.getElementById('soundOnomatopoeiaText').textContent = '🎶 ???';

      document.getElementById('progressFillL3').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL3').textContent = `Ronda ${this.currentRound} de ${this.maxRounds}`;

      // Play mystery animal sound
      this.sound.playAnimalOno(this.targetAnimal.soundFreq);

      document.getElementById('btnPlaySoundDetective').onclick = () => {
        this.sound.playAnimalOno(this.targetAnimal.soundFreq);
      };

      activeLineup.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'sound-animal-card';
        card.innerHTML = `
          <div>${animal.icon}</div>
          <div class="sound-animal-label">${animal.name}</div>
        `;

        card.addEventListener('click', () => {
          if (animal === this.targetAnimal) {
            // Reveal name upon correct match!
            document.getElementById('promptAnimalL3').textContent = animal.name;
            document.getElementById('spanishHintL3').textContent = `(${animal.spanish})`;
            document.getElementById('soundOnomatopoeiaText').textContent = animal.soundText;

            this.sound.playAnimalOno(animal.soundFreq);
            this.voice.speakAnimal(animal.name);

            this.showRoundSuccess(animal.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel3();
              } else {
                this.completeLevel(3);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        choicesContainer.appendChild(card);
      });
    }

    // ===================================================
    // LEVEL 4: DUCK POND (Dynamic 2-Stage Splash & Rescue)
    // ===================================================
    startLevel4() {
      this.maxRounds = 2;
      this.playRoundLevel4();
    }

    playRoundLevel4() {
      const pond = document.getElementById('duckPondArena');
      if (!pond) return;
      pond.innerHTML = '';

      // Floating lily pads & gentle water plants
      const lilyPads = [
        { l: 15, t: 28, emoji: '🪷' },
        { l: 72, t: 22, emoji: '🌿' },
        { l: 78, t: 65, emoji: '🪷' },
        { l: 22, t: 72, emoji: '🌿' }
      ];
      lilyPads.forEach(pad => {
        const el = document.createElement('div');
        el.className = 'pond-lily-pad';
        el.textContent = pad.emoji;
        el.style.left = `${pad.l}%`;
        el.style.top = `${pad.t}%`;
        pond.appendChild(el);
      });

      this.targetAnimal = ANIMALS.DUCK;
      const progressFill = document.getElementById('progressFillL4');
      if (progressFill) progressFill.style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      const roundCounter = document.getElementById('roundCounterL4');
      if (roundCounter) roundCounter.textContent = `Ronda ${this.currentRound} de ${this.maxRounds}`;

      if (this.currentRound === 1) {
        // ROUND 1: Splash & Count 2 Swimming Ducks
        this.ducksRemaining = 2;
        const countEl = document.getElementById('ducksRemainingCount');
        if (countEl) countEl.textContent = this.ducksRemaining;
        const wordEl = document.getElementById('pondPromptWord');
        if (wordEl) wordEl.textContent = 'DUCKS';
        const hintEl = document.getElementById('spanishHintL4');
        if (hintEl) hintEl.textContent = '(Patos en el agua)';

        this.voice.playClip('inst_catch_ducks');

        for (let i = 0; i < 4; i++) {
          const duck = document.createElement('div');
          duck.className = 'pond-duck-item';
          duck.textContent = '🦆';
          duck.style.left = `${12 + (i % 2) * 44 + (Math.random() * 10 - 5)}%`;
          duck.style.top = `${20 + Math.floor(i / 2) * 38 + (Math.random() * 10 - 5)}%`;
          duck.style.animationDelay = `${(i * 0.4).toFixed(1)}s`;

          duck.addEventListener('click', () => {
            this.sound.playAnimalOno(ANIMALS.DUCK.soundFreq);
            duck.style.transform = 'scale(1.6) rotate(15deg)';
            duck.style.opacity = '0';
            setTimeout(() => duck.remove(), 260);

            this.ducksRemaining--;
            const cEl = document.getElementById('ducksRemainingCount');
            if (cEl) cEl.textContent = Math.max(0, this.ducksRemaining);

            if (this.ducksRemaining === 1) {
              this.voice.playClip('one_left');
            } else if (this.ducksRemaining <= 0) {
              this.showRoundSuccess('DUCK', () => {
                this.currentRound = 2;
                this.playRoundLevel4();
              });
            }
          });

          pond.appendChild(duck);
        }
      } else {
        // ROUND 2: Mama Duck & 3 Baby Ducklings!
        this.ducksRemaining = 3;
        const countEl = document.getElementById('ducksRemainingCount');
        if (countEl) countEl.textContent = this.ducksRemaining;
        const wordEl = document.getElementById('pondPromptWord');
        if (wordEl) wordEl.textContent = 'BABY DUCKS';
        const hintEl = document.getElementById('spanishHintL4');
        if (hintEl) hintEl.textContent = '(Patitos bebé)';

        this.voice.playClip('inst_catch_ducks');

        // Center Mama Duck
        const mama = document.createElement('div');
        mama.className = 'pond-duck-item';
        mama.style.fontSize = '4.8rem';
        mama.style.left = '42%';
        mama.style.top = '36%';
        mama.textContent = '🦆';
        mama.style.pointerEvents = 'none';
        mama.title = 'Mama Duck';
        pond.appendChild(mama);

        // 5 Swimming Baby Ducklings
        const positions = [
          { l: 10, t: 15 },
          { l: 75, t: 18 },
          { l: 15, t: 65 },
          { l: 70, t: 68 },
          { l: 45, t: 10 }
        ];

        positions.forEach((pos, idx) => {
          const baby = document.createElement('div');
          baby.className = 'pond-duck-item';
          baby.style.fontSize = '3.2rem';
          baby.textContent = '🐥';
          baby.style.left = `${pos.l}%`;
          baby.style.top = `${pos.t}%`;
          baby.style.animationDelay = `${(idx * 0.35).toFixed(1)}s`;

          baby.addEventListener('click', () => {
            this.sound.playAnimalOno(650); // high chirp
            baby.style.transition = 'all 0.4s ease';
            baby.style.left = '45%';
            baby.style.top = '40%';
            baby.style.transform = 'scale(0.5)';
            baby.style.opacity = '0';
            setTimeout(() => baby.remove(), 350);

            this.ducksRemaining--;
            const cEl = document.getElementById('ducksRemainingCount');
            if (cEl) cEl.textContent = Math.max(0, this.ducksRemaining);

            if (this.ducksRemaining <= 0) {
              mama.style.transform = 'scale(1.3) rotate(8deg)';
              this.showRoundSuccess('DUCK', () => {
                this.completeLevel(4);
              });
            }
          });

          pond.appendChild(baby);
        });
      }
    }

    // ===================================================
    // LEVEL 5: BARNYARD DANCE
    // ===================================================
    startLevel5() {
      this.barnDanceCount = 0;
      this.maxRounds = 4;
      this.playRoundLevel5();
    }

    playRoundLevel5() {
      const grid = document.getElementById('hayBalesGrid');
      grid.innerHTML = '';

      const pool = [ANIMALS.PIG, ANIMALS.COW, ANIMALS.HORSE, ANIMALS.SHEEP];
      pool.sort(() => Math.random() - 0.5);
      this.targetAnimal = pool[Math.floor(Math.random() * pool.length)];

      document.getElementById('promptAnimalL5').textContent = this.targetAnimal.name;
      document.getElementById('barnDanceCounter').textContent = `${this.barnDanceCount} / ${this.maxRounds}`;

      this.voice.speakAnimal(this.targetAnimal.name);

      pool.forEach(animal => {
        const tile = document.createElement('div');
        tile.className = 'hay-bale-tile';
        tile.textContent = animal.icon;

        tile.addEventListener('click', () => {
          if (animal === this.targetAnimal) {
            tile.classList.add('dancing');
            this.sound.playDanceBeat();
            this.sound.playAnimalOno(animal.soundFreq);
            this.barnDanceCount++;
            document.getElementById('barnDanceCounter').textContent = `${this.barnDanceCount} / ${this.maxRounds}`;

            if (this.barnDanceCount < this.maxRounds) {
              setTimeout(() => this.playRoundLevel5(), 1000);
            } else {
              // Round 4 finale: all 4 animals dance together!
              document.querySelectorAll('.hay-bale-tile').forEach(t => t.classList.add('dancing'));
              this.sound.playDanceBeat();
              this.sound.playVictory();
              this.confetti.burst(120);
              setTimeout(() => {
                this.completeLevel(5);
              }, 1800);
            }
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        grid.appendChild(tile);
      });
    }

    // ===================================================
    // STAGE 2: LEVEL 6 (SHADOW SAFARI - Genuine Mystery Silhouette)
    // ===================================================
    startLevel6() {
      this.maxRounds = 3;
      this.playRoundLevel6();
    }

    playRoundLevel6() {
      const candidates = document.getElementById('shadowAnimalCandidates');
      const figure = document.getElementById('mysteryShadowFigure');
      candidates.innerHTML = '';

      // Distinct, highly identifiable silhouettes
      const shadowPools = [
        { target: ANIMALS.HORSE, distractors: [ANIMALS.COW, ANIMALS.HEN] },
        { target: ANIMALS.ROOSTER, distractors: [ANIMALS.RABBIT, ANIMALS.SHEEP] },
        { target: ANIMALS.RABBIT, distractors: [ANIMALS.PIG, ANIMALS.HORSE] }
      ];

      const roundConfig = shadowPools[(this.currentRound - 1) % shadowPools.length];
      this.targetAnimal = roundConfig.target;

      // Reset figure to clean black silhouette without persistent inline filter
      figure.className = 'shadow-figure is-shadow';
      figure.style.filter = '';
      figure.textContent = this.targetAnimal.icon;

      // DO NOT spoil the animal name in the prompt!
      const promptEl = document.getElementById('promptAnimalL6');
      promptEl.textContent = '❓ MYSTERY ANIMAL';
      promptEl.className = 'animal-prompt-word shadow-q-badge';
      document.getElementById('spanishHintL6').textContent = '(¡Adivina la silueta misteriosa!)';

      document.getElementById('progressFillL6').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL6').textContent = `Silueta ${this.currentRound} de ${this.maxRounds}`;

      // Play mystery chime and target sound clue
      this.sound.playChime();
      setTimeout(() => {
        this.sound.playAnimalOno(this.targetAnimal.soundFreq);
      }, 300);

      // Candidate animal cards
      const choices = [roundConfig.target, ...roundConfig.distractors];
      choices.sort(() => Math.random() - 0.5);

      choices.forEach(animal => {
        const btn = document.createElement('button');
        btn.className = 'shadow-animal-btn';
        btn.innerHTML = `
          <span class="sa-icon">${animal.icon}</span>
          <span class="sa-name">${animal.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (animal === this.targetAnimal) {
            // Magical reveal!
            figure.className = 'shadow-figure revealed';
            promptEl.textContent = this.targetAnimal.name;
            promptEl.className = 'animal-prompt-word';
            document.getElementById('spanishHintL6').textContent = `(¡Es el ${this.targetAnimal.spanish}!)`;

            this.sound.playAnimalOno(animal.soundFreq);
            this.voice.speakAnimal(animal.name);

            // Allow 900ms reveal delay so the child sees the full color animal
            setTimeout(() => {
              this.showRoundSuccess(animal.name, () => {
                if (this.currentRound < this.maxRounds) {
                  this.currentRound++;
                  this.playRoundLevel6();
                } else {
                  this.completeLevel(6);
                }
              });
            }, 900);
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        candidates.appendChild(btn);
      });
    }

    // ===================================================
    // STAGE 2: LEVEL 7 (MAMA & BABY FAMILIES)
    // ===================================================
    startLevel7() {
      this.maxRounds = 3;
      this.playRoundLevel7();
    }

    playRoundLevel7() {
      const mamaCard = document.getElementById('mamaAnimalCard');
      const babiesRow = document.getElementById('babyAnimalsRow');
      mamaCard.innerHTML = '';
      babiesRow.innerHTML = '';

      const families = [
        { mama: ANIMALS.HEN, dist: [ANIMALS.COW, ANIMALS.PIG] },
        { mama: ANIMALS.COW, dist: [ANIMALS.SHEEP, ANIMALS.HORSE] },
        { mama: ANIMALS.PIG, dist: [ANIMALS.RABBIT, ANIMALS.DOG] }
      ];

      const roundData = families[(this.currentRound - 1) % families.length];
      this.targetAnimal = roundData.mama;

      mamaCard.innerHTML = `
        <div class="mama-icon-huge">${this.targetAnimal.icon}</div>
        <div class="mama-nest-badge">
          <span class="mama-title-word">Mama ${this.targetAnimal.name}</span>
          <span class="mama-subtitle-hint">(${this.targetAnimal.spanish})</span>
        </div>
      `;

      const mamaPromptEl = document.getElementById('promptAnimalL7');
      if (mamaPromptEl) mamaPromptEl.textContent = `${this.targetAnimal.name} ${this.targetAnimal.icon}`;
      const babyPromptEl = document.getElementById('promptBabyL7');
      if (babyPromptEl) babyPromptEl.textContent = this.targetAnimal.baby.name;
      const hintL7El = document.getElementById('spanishHintL7');
      if (hintL7El) hintL7El.textContent = `(Encuentra a su bebé ${this.targetAnimal.baby.spanish})`;

      document.getElementById('progressFillL7').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL7').textContent = `Familia ${this.currentRound} de ${this.maxRounds}`;

      this.voice.playClip('inst_animal_families');

      const babyChoices = [this.targetAnimal, ...roundData.dist];
      babyChoices.sort(() => Math.random() - 0.5);

      babyChoices.forEach(animal => {
        const btn = document.createElement('button');
        btn.className = 'baby-nest-card';
        btn.innerHTML = `
          <span class="baby-icon-big">${animal.baby.icon}</span>
          <span class="baby-card-title">${animal.baby.name}</span>
          <span class="baby-card-parent">${animal.baby.spanish}</span>
        `;

        btn.addEventListener('click', () => {
          if (animal === this.targetAnimal) {
            this.sound.playAnimalOno(animal.soundFreq);
            btn.style.transform = 'scale(0)';
            mamaCard.innerHTML = `
              <div class="mama-icon-huge">${animal.icon} ❤️ ${animal.baby.icon}</div>
              <div class="mama-nest-badge">
                <span class="mama-title-word">¡Familia Feliz!</span>
                <span class="mama-subtitle-hint">Mama & ${animal.baby.name}</span>
              </div>
            `;

            setTimeout(() => {
              this.showRoundSuccess(animal.baby.name, () => {
                if (this.currentRound < this.maxRounds) {
                  this.currentRound++;
                  this.playRoundLevel7();
                } else {
                  this.completeLevel(7);
                }
              });
            }, 800);
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        babiesRow.appendChild(btn);
      });
    }

    // ===================================================
    // STAGE 2: LEVEL 8 (ANIMAL BALLOON POP)
    // ===================================================
    startLevel8() {
      this.maxRounds = 3;
      this.playRoundLevel8();
    }

    playRoundLevel8() {
      const container = document.getElementById('balloonsContainer');
      container.innerHTML = '';

      const allPool = [ANIMALS.PIG, ANIMALS.COW, ANIMALS.HORSE, ANIMALS.SHEEP, ANIMALS.DUCK, ANIMALS.HEN, ANIMALS.RABBIT, ANIMALS.DOG, ANIMALS.CAT];
      allPool.sort(() => Math.random() - 0.5);
      this.targetAnimal = allPool[0];
      const distractors = [allPool[1], allPool[2]];

      document.getElementById('promptAnimalL8').textContent = `${this.targetAnimal.name} ${this.targetAnimal.icon}`;
      document.getElementById('spanishHintL8').textContent = `(Revienta el globo de ${this.targetAnimal.spanish})`;

      document.getElementById('progressFillL8').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL8').textContent = `Globo ${this.currentRound} de ${this.maxRounds}`;

      this.voice.playClip('inst_pop_balloon', () => {
        setTimeout(() => this.voice.speakAnimal(this.targetAnimal.name), 200);
      });

      const colors = ['red', 'blue', 'yellow', 'green', 'purple'];
      const choices = [this.targetAnimal, ...distractors];
      choices.sort(() => Math.random() - 0.5);

      choices.forEach((animal, idx) => {
        const item = document.createElement('div');
        item.className = 'animal-balloon-item';

        const colorClass = colors[idx % colors.length];
        item.innerHTML = `
          <div class="balloon-bubble ${colorClass}">
            <div class="balloon-animal-icon">${animal.icon}</div>
            <div class="balloon-animal-name">${animal.name}</div>
          </div>
          <div class="balloon-knot ${colorClass}"></div>
          <div class="balloon-string"></div>
        `;

        item.addEventListener('click', () => {
          if (animal === this.targetAnimal) {
            this.sound.playPop();
            this.sound.playAnimalOno(animal.soundFreq);
            this.confetti.burst(60);

            const bubble = item.querySelector('.balloon-bubble');
            bubble.classList.add('popping');
            item.style.pointerEvents = 'none';

            setTimeout(() => {
              item.style.transform = 'scale(0)';
              item.style.opacity = '0';
            }, 220);

            this.showRoundSuccess(animal.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel8();
              } else {
                this.completeLevel(8);
              }
            });
          } else {
            this.sound.playBoing();
            item.style.transform = 'scale(1.15) rotate(12deg)';
            setTimeout(() => { item.style.transform = ''; }, 300);
            this.voice.playClip('oops_try_again');
          }
        });

        container.appendChild(item);
      });
    }

    // ===================================================
    // STAGE 2: LEVEL 9 (FARM HARVEST - Connect Animals to Produce)
    // ===================================================
    startLevel9() {
      this.maxRounds = 4;
      this.playRoundLevel9();
    }

    playRoundLevel9() {
      const candidatesRow = document.getElementById('harvestAnimalCandidates');
      candidatesRow.innerHTML = '';

      const harvestItems = [
        {
          name: 'MILK',
          icon: '🥛',
          label: 'FRESH MILK',
          spanish: 'leche',
          animal: ANIMALS.COW,
          distractors: [ANIMALS.PIG, ANIMALS.HEN]
        },
        {
          name: 'WOOL',
          icon: '🧶',
          label: 'WARM WOOL',
          spanish: 'lana',
          animal: ANIMALS.SHEEP,
          distractors: [ANIMALS.HORSE, ANIMALS.DOG]
        },
        {
          name: 'EGGS',
          icon: '🥚',
          label: 'FARM EGGS',
          spanish: 'huevos',
          animal: ANIMALS.HEN,
          distractors: [ANIMALS.RABBIT, ANIMALS.PIG]
        },
        {
          name: 'CHEESE',
          icon: '🧀',
          label: 'FRESH CHEESE',
          spanish: 'queso',
          animal: ANIMALS.COW,
          distractors: [ANIMALS.DUCK, ANIMALS.HORSE]
        }
      ];

      const currentItem = harvestItems[(this.currentRound - 1) % harvestItems.length];
      this.currentHarvestItem = currentItem;
      this.targetAnimal = currentItem.animal;

      // Update Showcase Item
      document.getElementById('showcaseProductIcon').textContent = currentItem.icon;
      document.getElementById('showcaseProductLabel').textContent = currentItem.label;

      document.getElementById('promptHarvestProduct').textContent = `${currentItem.name} ${currentItem.icon}`;
      const promptAnimalL9 = document.getElementById('promptAnimalL9');
      if (promptAnimalL9) {
        promptAnimalL9.textContent = currentItem.animal.name;
        promptAnimalL9.style.display = 'none'; // Don't spoil!
      }
      document.getElementById('spanishHintL9').textContent = `(¿Quién nos da ${currentItem.spanish}?)`;

      document.getElementById('progressFillL9').style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      document.getElementById('roundCounterL9').textContent = `Cosecha ${this.currentRound} de ${this.maxRounds}`;

      this.voice.playClip('inst_farm_harvest');

      const choices = [currentItem.animal, ...currentItem.distractors];
      choices.sort(() => Math.random() - 0.5);

      choices.forEach(animal => {
        const btn = document.createElement('button');
        btn.className = 'harvest-animal-card';
        btn.innerHTML = `
          <span class="ha-icon">${animal.icon}</span>
          <span class="ha-name">${animal.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (animal === this.targetAnimal) {
            this.sound.playChime();
            this.sound.playAnimalOno(animal.soundFreq);
            btn.style.transform = 'scale(1.2)';

            if (promptAnimalL9) {
              promptAnimalL9.style.display = 'inline-block';
            }

            this.showRoundSuccess(animal.name, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.playRoundLevel9();
              } else {
                this.completeLevel(9);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        candidatesRow.appendChild(btn);
      });
    }

    // ===================================================
    // STAGE 2: LEVEL 10 (GRAND FARM PARADE - Musical Tractor Band)
    // ===================================================
    startLevel10() {
      this.paradeCount = 0;
      this.maxRounds = 3;

      const paradeStage = document.getElementById('paradeStageL10') || document.querySelector('.parade-stage');
      if (paradeStage) paradeStage.classList.remove('driving');

      // Reset wagon carts
      for (let i = 1; i <= 3; i++) {
        const cart = document.getElementById(`wagonCart${i}`);
        if (cart) {
          cart.classList.remove('filled');
          const occupant = document.getElementById(`wagonOccupant${i}`);
          if (occupant) occupant.textContent = '❓';
        }
      }

      this.playRoundLevel10();
    }

    playRoundLevel10() {
      const grid = document.getElementById('paradeLineupGrid');
      grid.innerHTML = '';

      const paradeSteps = [
        {
          seatIdx: 1,
          role: 'Trumpet Leader 🎺',
          instrument: 'trumpet',
          target: ANIMALS.ROOSTER,
          dist: [ANIMALS.PIG, ANIMALS.DOG]
        },
        {
          seatIdx: 2,
          role: 'Drum Master 🥁',
          instrument: 'drum',
          target: ANIMALS.HORSE,
          dist: [ANIMALS.CAT, ANIMALS.RABBIT]
        },
        {
          seatIdx: 3,
          role: 'Cowbell Star 🔔',
          instrument: 'bell',
          target: ANIMALS.COW,
          dist: [ANIMALS.SHEEP, ANIMALS.HEN]
        }
      ];

      const currentStep = paradeSteps[this.paradeCount];
      this.targetAnimal = currentStep.target;

      document.getElementById('promptAnimalL10').textContent = `${this.targetAnimal.name} ${this.targetAnimal.icon}`;
      document.getElementById('paradeCounter').textContent = `${this.paradeCount} / ${this.maxRounds}`;

      this.voice.speakAnimal(this.targetAnimal.name);

      const choices = [currentStep.target, ...currentStep.dist];
      choices.sort(() => Math.random() - 0.5);

      choices.forEach(animal => {
        const btn = document.createElement('button');
        btn.className = 'parade-animal-btn';
        btn.innerHTML = `
          <span class="pa-icon">${animal.icon}</span>
          <span class="pa-name">${animal.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (animal === this.targetAnimal) {
            this.sound.playInstrument(currentStep.instrument);
            this.sound.playAnimalOno(animal.soundFreq);

            // Fill wagon cart
            const cart = document.getElementById(`wagonCart${currentStep.seatIdx}`);
            const occupant = document.getElementById(`wagonOccupant${currentStep.seatIdx}`);
            if (cart) cart.classList.add('filled');
            if (occupant) occupant.textContent = animal.icon;

            btn.style.transform = 'scale(0)';
            this.confetti.burst(40);
            this.paradeCount++;
            document.getElementById('paradeCounter').textContent = `${this.paradeCount} / ${this.maxRounds}`;

            if (this.paradeCount < this.maxRounds) {
              setTimeout(() => this.playRoundLevel10(), 900);
            } else {
              // Grand Parade Rolling Victory!
              const paradeStage = document.getElementById('paradeStageL10') || document.querySelector('.parade-stage');
              if (paradeStage) paradeStage.classList.add('driving');

              this.sound.playTractorHorn();
              this.sound.playVictory();
              this.confetti.burst(180);

              setTimeout(() => {
                this.completeLevel(10);
              }, 2500);
            }
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        grid.appendChild(btn);
      });
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    window.leoFarmGameInstance = new LeoFarmGame();
  });
})();
