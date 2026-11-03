/**
 * Bilikids Adventure - Retro Pixel Art Mascot Companion (Bili The Bear)
 * Authentic 16-bit retro style with frame-by-frame walk cycle, small footprint,
 * and rich natural interactions:
 * - Smooth 60fps GPU-accelerated walk with landing hop
 * - Cursor tracking (looks towards mouse/touch)
 * - Paw greeting (wave) on hover
 * - Yawn & stretch transition before nap
 * - Rhythmic head-bop dance when audio/music plays or on songs pages
 * - Backflip aerial trick on double-click
 * - Curiosity peek upon scrolling
 * - Floating micro-emotes (💖, 💡, 🎵, ⭐, 🥱)
 */
class BilikidsMascotCompanion {
  constructor(options = {}) {
    this.options = Object.assign({
      characterName: 'Bili',
      autoWalk: true,
      sleepTimeoutMs: 30000
    }, options);

    this.state = 'idle'; // 'idle' | 'walking' | 'celebrate' | 'sleeping' | 'wiggle' | 'wave' | 'dance' | 'yawning' | 'backflip' | 'peek' | 'hop'
    this.speechTimeout = null;
    this.idleTimer = null;
    this.walkEndTimer = null;
    this.emoteInterval = null;
    this.scrollTimeout = null;
    this.isMinimized = false;
    this.wrapper = null;
    this.mascotBody = null;
    this.spriteWrapper = null;
    this.pixelSprite = null;
    this.speechBubble = null;
    this.speechText = null;
    this.currentDirection = 1; // 1 = facing left (toward screen content), -1 = facing right
    this.isMusicPage = false;
    this.lastClickTime = 0;

    this.encouragingPhrases = [
      "¡Casi lo tienes peque! ¡Inténtalo de nuevo! ✨",
      "¡No te preocupes, tú puedes! 💪",
      "¡Ánimo! Dale otra oportunidad 🌟",
      "¡Vamos juntos! You can do it! 🚀"
    ];

    this.celebratePhrases = [
      "¡Lo hiciste genial, peque! ⭐",
      "¡Eso es! ¡Awesome! 🎉",
      "¡Qué inteligente eres! 🏆",
      "¡Excelente trabajo! ¡Superstar! 🌟",
      "¡Eres un campeón! 🚀"
    ];

    this.greetings = [
      "¡Hola peque! 🐻🎒",
      "¿Qué quieres aprender hoy? ✨",
      "¡Me gustó verte de nuevo! 💖",
      "¡Mi nombre es Bili! 🌟",
      "¡Vamos a aprender jugando! 🎮⭐",
      "¡Toca cualquier palabra para escuchar su pronunciación! 🔊",
      "¡Dame esos cinco! ¡High five! 🖐️"
    ];

    this.init();
  }

  init() {
    if (document.getElementById('bilikids-mascot-wrapper')) return;

    // Preload sprite textures into GPU memory to prevent any initial flicker
    ['assets/mascot/bili_norm_idle.png', 'assets/mascot/bili_pixel_walk_strip.png', 'assets/mascot/bili_norm_celebrate.png'].forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Detect music / audio friendly pages
    const path = (window.location.pathname || '').toLowerCase();
    this.isMusicPage = path.includes('song') || path.includes('karaoke') || path.includes('music');

    // Load user preferences from localStorage
    try {
      this.isMinimized = localStorage.getItem('bilikids_mascot_minimized') === 'true';
    } catch (e) {}

    this.createDom();
    this.setupEventListeners();
    this.resetIdleTimer();
    this.startPatrolLoop();
    this.startEmoteLoop();

    if (this.isMinimized) {
      this.wrapper.classList.add('minimized');
      this.minBtn.textContent = '⬆';
    }

    // Contextual welcome message depending on current section/page
    let welcomeMsg = "¡Hola peque! ¿Qué quieres aprender hoy? 🎒";

    if (path.includes('stories') || path.includes('book')) {
      welcomeMsg = "¡Me gustó verte de nuevo! Vamos a leer un lindo cuento 📖";
    } else if (path.includes('juegos') || path.includes('puzzle')) {
      welcomeMsg = "¡Hora de jugar peque! Vamos a ganar estrellas 🎮⭐";
    } else if (path.includes('farm') || path.includes('safari')) {
      welcomeMsg = "¡Mira cuántos animalitos lindos, peque! 🦁🐮";
    } else if (path.includes('songs') || path.includes('karaoke')) {
      welcomeMsg = "¡A cantar canciones en inglés peque! 🎵✨";
    } else if (path.includes('babies')) {
      welcomeMsg = "¡Hola pequeñito! Bienvenido a explorar 👶🎈";
    } else if (path.includes('kids')) {
      welcomeMsg = "¡Hola peque! Mi nombre es Bili, ¿listo para aprender? 🎒🚀";
    } else if (path.includes('teens')) {
      welcomeMsg = "¡Hola! Me gustó verte de nuevo, ¡vamos a subir de nivel! 🚀";
    } else if (path.includes('toddlers')) {
      welcomeMsg = "¡Hola peque! Mi nombre es Bili, ¡vamos a explorar! 🎒✨";
    } else if (path.includes('index') || path.endsWith('/') || path.endsWith('.html')) {
      welcomeMsg = "¡Hola peque! ¿Qué quieres aprender hoy? 🌟";
    }

    setTimeout(() => {
      if (!this.isMinimized) {
        this.speak(welcomeMsg, 3000);
        this.spawnEmote('💖');
      }
    }, 1000);
  }

  createDom() {
    const wrapper = document.createElement('div');
    wrapper.id = 'bilikids-mascot-wrapper';

    wrapper.innerHTML = `
      <div class="bilikids-mascot-bubble" id="biliMascotSpeech">
        <span id="biliSpeechText">Hello!</span>
      </div>

      <div class="bilikids-mascot-body-box idle" id="biliMascotBody" title="¡Haz clic o doble clic en Bili!">
        <div class="bilikids-mascot-zzz" id="biliZzz">Zzz</div>
        <div class="bilikids-pixel-sprite-wrapper" id="biliSpriteWrapper">
          <div class="bilikids-pixel-sprite" id="biliPixelSprite"></div>
        </div>
      </div>

      <div class="bilikids-mascot-controls">
        <button type="button" class="bilikids-mascot-pill-btn" id="biliMinBtn" title="Minimizar / Restaurar">_</button>
      </div>
    `;

    document.body.appendChild(wrapper);

    this.wrapper = wrapper;
    this.mascotBody = document.getElementById('biliMascotBody');
    this.spriteWrapper = document.getElementById('biliSpriteWrapper');
    this.pixelSprite = document.getElementById('biliPixelSprite');
    this.speechBubble = document.getElementById('biliMascotSpeech');
    this.speechText = document.getElementById('biliSpeechText');
    this.minBtn = document.getElementById('biliMinBtn');
  }

  setupEventListeners() {
    // Single Click & Double Click handler
    this.mascotBody.addEventListener('click', (e) => {
      e.stopPropagation();
      const now = Date.now();
      if (now - this.lastClickTime < 340) {
        // Double click: perform joyful backflip
        this.backflip();
        this.lastClickTime = 0;
      } else {
        this.lastClickTime = now;
        setTimeout(() => {
          if (this.lastClickTime === now) {
            this.handleMascotClick();
          }
        }, 340);
      }
    });

    // Hover (MouseEnter): Cheerful paw wave greeting
    this.mascotBody.addEventListener('mouseenter', () => {
      if (this.state === 'idle') {
        this.setState('wave');
        this.spawnEmote('👋');
      }
    });

    this.mascotBody.addEventListener('mouseleave', () => {
      if (this.state === 'wave') {
        this.setState('idle');
      }
    });

    // Minimize / Restore button
    this.minBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMinimize();
    });

    // Cursor tracking: Look towards the user's cursor / touch
    window.addEventListener('mousemove', (e) => {
      this.onUserActivity();
      this.trackCursor(e.clientX);
    }, { passive: true });

    // Scroll listener: Curiosity peek
    window.addEventListener('scroll', () => {
      this.onUserActivity();
      this.onScrollPeek();
    }, { passive: true });

    // Audio listener: Dance along when music or sounds play in the app
    document.addEventListener('play', (e) => {
      if (this.state === 'idle' || this.state === 'wave') {
        this.dance(2400);
      }
    }, true);

    const activityEvents = ['mousedown', 'keydown', 'touchstart'];
    activityEvents.forEach(evt => {
      window.addEventListener(evt, () => this.onUserActivity(), { passive: true });
    });
  }

  trackCursor(cursorX) {
    if (this.state === 'walking' || this.state === 'sleeping' || this.state === 'backflip' || this.isMinimized) {
      return;
    }

    if (!this.mascotBody) return;
    const rect = this.mascotBody.getBoundingClientRect();
    const biliCenterX = rect.left + rect.width / 2;

    // Small dead-zone of 20px around Bili's center to avoid fidgeting
    if (cursorX < biliCenterX - 20) {
      this.setDirection(1); // Look left (toward screen content)
    } else if (cursorX > biliCenterX + 20) {
      this.setDirection(-1); // Look right (toward margin)
    }
  }

  onScrollPeek() {
    if (this.state !== 'idle' || this.isMinimized) return;

    clearTimeout(this.scrollTimeout);
    this.setState('peek');
    this.scrollTimeout = setTimeout(() => {
      if (this.state === 'peek') {
        this.setState('idle');
      }
    }, 700);
  }

  onUserActivity() {
    if (this.state === 'sleeping') {
      this.wake();
    }
    this.resetIdleTimer();
  }

  resetIdleTimer() {
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.yawnAndSleep();
    }, this.options.sleepTimeoutMs);
  }

  yawnAndSleep() {
    if (this.state === 'celebrate' || this.state === 'backflip' || this.isMinimized) return;
    this.stopWalkImmediate();
    this.setState('yawning');
    this.spawnEmote('🥱');

    setTimeout(() => {
      if (this.state === 'yawning') {
        this.sleep();
      }
    }, 1800);
  }

  sleep() {
    if (this.state === 'celebrate' || this.state === 'backflip' || this.isMinimized) return;
    this.stopWalkImmediate();
    this.setState('sleeping');
  }

  wake() {
    if (this.state === 'sleeping' || this.state === 'yawning') {
      this.setState('hop');
      this.speak("¡Ya desperté! ¡A jugar! ☀️", 2200);
      this.spawnEmote('☀️');
      setTimeout(() => {
        if (this.state === 'hop') this.setState('idle');
      }, 400);
    }
    this.resetIdleTimer();
  }

  handleMascotClick() {
    this.stopWalkImmediate();
    this.wake();
    this.setState('wiggle');

    const randPhrase = this.greetings[Math.floor(Math.random() * this.greetings.length)];
    this.speak(randPhrase, 3000);
    this.spawnEmote('💖');

    setTimeout(() => {
      if (this.state === 'wiggle') this.setState('idle');
    }, 600);
  }

  backflip() {
    this.stopWalkImmediate();
    this.wake();
    this.setState('backflip');

    const cheers = [
      "¡Yee-haw! 🤸⭐",
      "¡Yupiii! ¡Voltereta ninja! 🎪✨",
      "¡Ta-dá! ¡Mira este truco! 🌟",
      "¡Superstar! 🚀"
    ];
    const cheer = cheers[Math.floor(Math.random() * cheers.length)];
    this.speak(cheer, 2500);
    this.spawnStarParticles();

    setTimeout(() => {
      if (this.state === 'backflip') {
        this.setState('hop');
        setTimeout(() => {
          if (this.state === 'hop') this.setState('idle');
        }, 350);
      }
    }, 750);
  }

  dance(duration = 2200) {
    if (this.state === 'sleeping' || this.state === 'walking' || this.state === 'backflip' || this.isMinimized) {
      return;
    }
    this.setState('dance');
    this.spawnEmote('🎵');

    setTimeout(() => {
      if (this.state === 'dance') {
        this.spawnEmote('🎶');
      }
    }, 900);

    setTimeout(() => {
      if (this.state === 'dance') {
        this.setState('idle');
      }
    }, duration);
  }

  setDirection(dir) {
    this.currentDirection = dir;
    if (this.spriteWrapper) {
      this.spriteWrapper.style.transform = dir === 1 ? 'scaleX(1)' : 'scaleX(-1)';
    }
  }

  setState(newState) {
    if (this.state === newState) return;
    this.state = newState;
    this.mascotBody.className = `bilikids-mascot-body-box ${newState}`;
  }

  speak(text, duration = 3000) {
    if (!this.speechBubble || !this.speechText) return;

    clearTimeout(this.speechTimeout);
    this.speechText.textContent = text;
    this.speechBubble.classList.add('visible');

    this.speechTimeout = setTimeout(() => {
      this.speechBubble.classList.remove('visible');
    }, duration);
  }

  spawnEmote(emoji = '💖') {
    if (!this.mascotBody || this.isMinimized) return;

    const emote = document.createElement('div');
    emote.className = 'bilikids-mascot-emote';
    emote.textContent = emoji;

    this.mascotBody.appendChild(emote);

    setTimeout(() => {
      if (emote.parentNode) emote.parentNode.removeChild(emote);
    }, 1400);
  }

  startEmoteLoop() {
    clearInterval(this.emoteInterval);
    const trigger = () => {
      if (this.state === 'idle' && !this.isMinimized && Math.random() < 0.6) {
        const pool = this.isMusicPage ? ['🎵', '🎶', '💖', '⭐'] : ['💖', '💡', '⭐', '🎈', '✨'];
        const em = pool[Math.floor(Math.random() * pool.length)];
        this.spawnEmote(em);
      }
      // Re-schedule with random gap between 16s and 28s
      const nextDelay = 16000 + Math.random() * 12000;
      this.emoteInterval = setTimeout(trigger, nextDelay);
    };

    this.emoteInterval = setTimeout(trigger, 12000);
  }

  celebrate(customMessage = null) {
    this.stopWalkImmediate();
    this.wake();
    this.setState('celebrate');

    const randPhrase = this.celebratePhrases[Math.floor(Math.random() * this.celebratePhrases.length)];
    const msg = customMessage || randPhrase;

    this.speak(msg, 3200);
    this.spawnStarParticles();

    setTimeout(() => {
      if (this.state === 'celebrate') {
        this.setState('idle');
      }
    }, 1800);
  }

  encourage(customMessage = null) {
    this.stopWalkImmediate();
    this.wake();
    this.setState('wiggle');

    const randPhrase = this.encouragingPhrases[Math.floor(Math.random() * this.encouragingPhrases.length)];
    const msg = customMessage || randPhrase;

    this.speak(msg, 2800);
    this.spawnEmote('💪');

    setTimeout(() => {
      if (this.state === 'wiggle') {
        this.setState('idle');
      }
    }, 800);
  }

  spawnStarParticles() {
    const stars = ['⭐', '✨', '🌟', '🎉'];
    const count = 6;

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'bilikids-mascot-star';
      star.textContent = stars[Math.floor(Math.random() * stars.length)];
      
      const angle = (Math.PI * 2 / count) * i;
      const dist = 32 + Math.random() * 26;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - 25;

      star.style.setProperty('--tx', `${tx}px`);
      star.style.setProperty('--ty', `${ty}px`);
      star.style.left = '24px';
      star.style.top = '36px';

      this.mascotBody.appendChild(star);

      setTimeout(() => {
        if (star.parentNode) star.parentNode.removeChild(star);
      }, 1000);
    }
  }

  startPatrolLoop() {
    if (!this.options.autoWalk) return;

    const runPatrol = () => {
      if (this.state === 'sleeping' || this.state === 'celebrate' || this.state === 'backflip' || this.isMinimized) {
        setTimeout(runPatrol, 5000);
        return;
      }

      const roll = Math.random();
      // On music pages, occasionally dance instead of walking
      if (this.isMusicPage && roll < 0.35 && (this.state === 'idle' || this.state === 'wave')) {
        this.dance(2500);
        setTimeout(runPatrol, 6000 + Math.random() * 4000);
        return;
      }

      if (roll < 0.48 && (this.state === 'idle' || this.state === 'wave' || this.state === 'peek')) {
        this.performShortWalk(() => {
          const nextWait = 5000 + Math.random() * 6000;
          setTimeout(runPatrol, nextWait);
        });
      } else {
        const nextWait = 4000 + Math.random() * 5000;
        setTimeout(runPatrol, nextWait);
      }
    };

    setTimeout(runPatrol, 3000);
  }

  stopWalkImmediate() {
    clearTimeout(this.walkEndTimer);
    if (this.wrapper) {
      // Freeze wrapper at current visual computed position
      const computedRight = parseFloat(window.getComputedStyle(this.wrapper).right) || 28;
      this.wrapper.style.transition = 'none';
      this.wrapper.style.right = `${Math.round(computedRight)}px`;
    }
  }

  performShortWalk(onDone) {
    if (this.state === 'sleeping' || this.state === 'celebrate' || this.state === 'backflip' || this.isMinimized) {
      if (onDone) onDone();
      return;
    }

    const currentRight = parseFloat(window.getComputedStyle(this.wrapper).right) || 28;
    const maxRight = Math.min(window.innerWidth - 120, 240);
    const minRight = 20;

    // Pick a natural walking distance: 45px to 80px
    const distance = 45 + Math.floor(Math.random() * 35);

    let chosenDir = 1; // 1 = walk towards center (increase right), -1 = walk towards screen edge (decrease right)
    if (currentRight > 160) {
      chosenDir = -1;
    } else if (currentRight < 45) {
      chosenDir = 1;
    } else {
      chosenDir = Math.random() > 0.5 ? 1 : -1;
    }

    let targetPos = currentRight + (chosenDir * distance);
    targetPos = Math.max(minRight, Math.min(maxRight, targetPos));
    const actualDist = Math.abs(targetPos - currentRight);

    if (actualDist < 15) {
      if (onDone) onDone();
      return;
    }

    // Set orientation cleanly
    this.setDirection(chosenDir);

    // Natural bear walking speed: ~32 pixels per second
    const duration = actualDist / 32;

    this.setState('walking');

    // Smooth GPU-accelerated CSS transition
    this.wrapper.style.transition = `right ${duration.toFixed(2)}s linear`;
    this.wrapper.style.right = `${Math.round(targetPos)}px`;

    clearTimeout(this.walkEndTimer);
    this.walkEndTimer = setTimeout(() => {
      this.wrapper.style.transition = '';
      if (this.state === 'walking') {
        // Landing hop upon completing walk
        this.setState('hop');
        setTimeout(() => {
          if (this.state === 'hop') this.setState('idle');
          if (onDone) onDone();
        }, 350);
      } else {
        if (onDone) onDone();
      }
    }, Math.round(duration * 1000));
  }

  toggleMinimize() {
    this.stopWalkImmediate();
    this.isMinimized = !this.isMinimized;
    try { localStorage.setItem('bilikids_mascot_minimized', String(this.isMinimized)); } catch (e) {}
    if (this.isMinimized) {
      this.wrapper.classList.add('minimized');
      this.minBtn.textContent = '⬆';
    } else {
      this.wrapper.classList.remove('minimized');
      this.minBtn.textContent = '_';
      this.wake();
    }
  }
}

// Global auto-instantiation
document.addEventListener('DOMContentLoaded', () => {
  window.BilikidsMascot = new BilikidsMascotCompanion();
});
