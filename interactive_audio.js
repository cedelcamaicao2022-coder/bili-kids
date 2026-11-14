/**
 * Bilikids Adventure - Interactive Games Audio & Celebration Engine
 * Provides synthesized sounds (Web Audio API), English speech synthesis, and confetti.
 */
(function(window) {
  let audioCtx = null;
  let isMuted = localStorage.getItem('bilikids_sound_muted') === 'true';

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Unlock audio on first user touch / click
  ['click', 'touchstart', 'keydown'].forEach(evt => {
    window.addEventListener(evt, () => initAudioContext(), { once: true, passive: true });
  });

  const SoundEngine = {
    isMuted: () => isMuted,
    toggleMute: () => {
      isMuted = !isMuted;
      localStorage.setItem('bilikids_sound_muted', isMuted);
      return isMuted;
    },

    playChime: function(type) {
      if (isMuted) return;
      initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;

      if (type === 'pop') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'flip') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(480, now + 0.06);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'match') {
        // Sparkling harmonic chord (C5 - E5 - G5 - C6)
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.06);
          gain.gain.setValueAtTime(0.18, now + i * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.35);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + i * 0.06);
          osc.stop(now + i * 0.06 + 0.35);
        });
      } else if (type === 'wrong') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.16);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.16);
      } else if (type === 'fanfare') {
        // Joyful level celebration fanfare
        [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          const t = now + idx * 0.1;
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.25, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(t);
          osc.stop(t + 0.45);
        });
      } else if (type === 'star') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1760, now + 0.18);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    },

    _currentAudio: null,

    normKey: function(s) {
      if (!s) return '';
      return s.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
    },

    speakEnglish: function(text, rate = 0.88) {
      if (isMuted || !text) return;

      const key = this.normKey(text);
      const manifest = window.InteractiveGamesAudioManifest || {};
      const clipSrc = manifest[key];

      if (clipSrc) {
        try {
          if (this._currentAudio) {
            this._currentAudio.pause();
            this._currentAudio.currentTime = 0;
          }
          if ('speechSynthesis' in window) {
            try { window.speechSynthesis.cancel(); } catch (e) {}
          }
          const audio = new Audio(clipSrc);
          audio.volume = 1.0;
          this._currentAudio = audio;
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise.catch(err => {
              console.warn('[BilikidsAudio] Studio audio play blocked, falling back to speech synthesis:', err);
              this._fallbackSpeech(text, rate);
            });
          }
          return;
        } catch (e) {
          console.warn('[BilikidsAudio] Error playing studio clip, falling back:', e);
        }
      }

      this._fallbackSpeech(text, rate);
    },

    _fallbackSpeech: function(text, rate = 0.88) {
      if (isMuted || !('speechSynthesis' in window)) return;
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.rate = rate;
        utter.pitch = 1.1; // cheerful child-friendly tone
        window.speechSynthesis.speak(utter);
      } catch (e) {
        console.warn('Speech error:', e);
      }
    },

    triggerConfetti: function(canvasId = 'confettiCanvas') {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

      for (let i = 0; i < 90; i++) {
        particles.push({
          x: canvas.width * 0.5,
          y: canvas.height * 0.4,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 0.8) * 18,
          size: Math.random() * 8 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          vrot: (Math.random() - 0.5) * 10,
          opacity: 1
        });
      }

      let animId;
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = 0;
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.45; // gravity
          p.rotation += p.vrot;
          p.opacity -= 0.012;

          if (p.opacity > 0) {
            active++;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
          }
        });

        if (active > 0) {
          animId = requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          cancelAnimationFrame(animId);
        }
      }
      animate();
    }
  };

  window.BilikidsAudio = SoundEngine;

  // Auto-load studio audio manifest if not already included
  if (!window.InteractiveGamesAudioManifest && typeof document !== 'undefined') {
    const s = document.createElement('script');
    s.src = 'assets/games_interactive/interactive_audio_manifest.js?v=20261114';
    document.head.appendChild(s);
  }
})(window);
