/**
 * BILI KIDS - THE RAINBOW OF COLORS
 * Interactive Video Storybook Engine
 * Features: Native Video Audio Only, Tap-Anywhere Video Replay, Realistic Page Turns & Preschool Interactivity
 */

(() => {
  'use strict';

  // --- STORY PAGES CONFIGURATION ---
  const COLORS_PAGES = [
    {
      page: 1,
      title: "Sweet Red Apples & Strawberries",
      color: "RED",
      themeClass: "theme-red",
      icon: "🍎",
      video: "assets/stories/colors_videos/colors_p1_red.mp4",
      poster: "assets/stories/colors_videos/colors_p1_red.png",
      wordAudio: "assets/stories/colors_audio/word_red.m4a",
      htmlText: `
        <p>Look at the sunny green meadow! Little Teddy Bear is wearing his favorite blue overalls.</p>
        <p>In his warm paws, he holds a shiny <span class="highlight-word">RED</span> apple. Right next to him sits a juicy sweet strawberry!</p>
        <p><em>"Red is sweet, red is bright, red is tasty day and night!"</em></p>
      `,
      prompt: "Can you touch something red around you or pretend to crunch a sweet red apple?"
    },
    {
      page: 2,
      title: "Bright Yellow Bananas & Sunshine",
      color: "YELLOW",
      themeClass: "theme-yellow",
      icon: "🍌",
      video: "assets/stories/colors_videos/colors_p2_yellow.mp4",
      poster: "assets/stories/colors_videos/colors_p2_yellow.png",
      wordAudio: "assets/stories/colors_audio/word_yellow.m4a",
      htmlText: `
        <p>Hop, hop, hop! A fluffy white bunny is hopping over the rolling green hills.</p>
        <p>Look at her silly trick! She balances a bright <span class="highlight-word">YELLOW</span> banana right on her cute pink nose!</p>
        <p>High above, a smiling yellow sun beams with cheerful musical notes. <em>"Hello, warm sunny yellow!"</em></p>
      `,
      prompt: "Can you hop like a bunny and point up to the bright yellow sun?"
    },
    {
      page: 3,
      title: "Cool Blue Water & Cloud Skies",
      color: "BLUE",
      themeClass: "theme-blue",
      icon: "🐦",
      video: "assets/stories/colors_videos/colors_p3_blue.mp4",
      poster: "assets/stories/colors_videos/colors_p3_blue.png",
      wordAudio: "assets/stories/colors_audio/word_blue.m4a",
      htmlText: `
        <p>Whoosh! Through the sunny playground skies flies a cheerful little <span class="highlight-word">BLUE</span> bird!</p>
        <p>He swoops happily down toward the cool blue splash pool. Look at the water jets dancing in the breeze!</p>
        <p>A yellow rubber duck floats gently as puffy white clouds spell out the word: <em>"BLUE!"</em></p>
      `,
      prompt: "Flap your arms like little wings and make a splash sound: 'Splash, splash!'"
    },
    {
      page: 4,
      title: "Fresh Green Leaves & Peek-a-Boo",
      color: "GREEN",
      themeClass: "theme-green",
      icon: "🐸",
      video: "assets/stories/colors_videos/colors_p4_green.mp4",
      poster: "assets/stories/colors_videos/colors_p4_green.png",
      wordAudio: "assets/stories/colors_audio/word_green.m4a",
      htmlText: `
        <p>Peek-a-boo! Under a giant <span class="highlight-word">GREEN</span> leaf, a playful orange kitten hides with wide, curious eyes.</p>
        <p>Sitting proudly on top of the leaf is a friendly little green frog! Ribbit, ribbit!</p>
        <p>Tiny spotted ladybugs crawl gently across the soft grass. <em>"Green is fresh and full of life!"</em></p>
      `,
      prompt: "Cover your eyes and play peek-a-boo! Can you say 'Ribbit!' like the little green frog?"
    },
    {
      page: 5,
      title: "Juicy Oranges & Dancing Bear",
      color: "ORANGE",
      themeClass: "theme-orange",
      icon: "🍊",
      video: "assets/stories/colors_videos/colors_p5_orange.mp4",
      poster: "assets/stories/colors_videos/colors_p5_orange.png",
      wordAudio: "assets/stories/colors_audio/word_orange.m4a",
      htmlText: `
        <p>Music is in the air! Teddy Bear is dancing with a big, happy grin across the flower meadow.</p>
        <p>Beside him rest a big round <span class="highlight-word">ORANGE</span> and a crunchy sweet orange carrot fresh from the garden.</p>
        <p>Colorful musical notes float into the bright blue sky. <em>"Let's tap our feet to the orange beat!"</em></p>
      `,
      prompt: "Can you stand up and do a silly wiggle dance like Teddy Bear?"
    },
    {
      page: 6,
      title: "Magical Purple Grapes & Butterfly",
      color: "PURPLE",
      themeClass: "theme-purple",
      icon: "🍇",
      video: "assets/stories/colors_videos/colors_p6_purple.mp4",
      poster: "assets/stories/colors_videos/colors_p6_purple.png",
      wordAudio: "assets/stories/colors_audio/word_purple.m4a",
      htmlText: `
        <p>Flitter, flutter, glow! A magical <span class="highlight-word">PURPLE</span> butterfly dances on gentle sparkling wings.</p>
        <p>She glides over a sweet bunch of plump purple grapes growing on the leafy vine.</p>
        <p>Fragrant purple lavender blossoms fill the meadow with wonderful sweet scents and sparkling melody!</p>
      `,
      prompt: "Can you flutter your fingers like a gentle butterfly dancing over sweet grapes?"
    },
    {
      page: 7,
      title: "Gentle Pink Petals & Best Friends",
      color: "PINK",
      themeClass: "theme-pink",
      icon: "🌸",
      video: "assets/stories/colors_videos/colors_p7_pink.mp4",
      poster: "assets/stories/colors_videos/colors_p7_pink.png",
      wordAudio: "assets/stories/colors_audio/word_pink.m4a",
      htmlText: `
        <p>Gather round, best friends! Teddy Bear, Blue Bird, Bunny, and Kitten meet in the fairy forest.</p>
        <p>Together they gaze at a magnificent <span class="highlight-word">PINK</span> daisy that sparkles with golden dust.</p>
        <p><em>"Pink is soft, pink is kind, pink brings friends of every kind!"</em> All four friends smile with pure joy.</p>
      `,
      prompt: "Give yourself a warm, cozy hug just like our four animal friends sharing love!"
    },
    {
      page: 8,
      title: "The Rainbow of Colors Party!",
      color: "RAINBOW",
      themeClass: "theme-rainbow",
      icon: "🌈",
      video: "assets/stories/colors_videos/colors_p8_rainbow.mp4",
      poster: "assets/stories/colors_videos/colors_p8_rainbow.png",
      wordAudio: "assets/stories/colors_audio/word_rainbow.m4a",
      htmlText: `
        <p>Welcome to the grand Color Party! Fireworks sparkle and confetti showers down from the stage!</p>
        <p>Under a giant rainbow balloon arch, Teddy Bear, Bunny, Blue Bird, and Kitten dance together!</p>
        <p>Neon signs glow bright: <span class="highlight-word">RED</span>, <span class="highlight-word">BLUE</span>, <span class="highlight-word">YELLOW</span>, <span class="highlight-word">GREEN</span>, and <span class="highlight-word">PINK</span>!</p>
        <p><em>"Hooray for all the colors in our wonderful world!"</em></p>
      `,
      prompt: "Clap your hands and shout: 'Hooray for Colors!' Dance like a star!"
    }
  ];

  // --- AUDIO SYNTHESIS & SFX HELPER ---
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.soundEnabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    // Realistic paper rustle sound for turning pages
    playPageTurn() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.3;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.45;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(350, now + 0.28);
      filter.Q.value = 1.8;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.3);
    }

    // Cheerful chime sound on interaction
    playChime() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    }
  }

  // --- COLORS STORY CONTROLLER ---
  class ColorsStoryBook {
    constructor() {
      this.currentPage = 0;
      this.totalPages = COLORS_PAGES.length;
      this.sfx = new SoundFX();
      this.videoMuted = false;

      // DOM Elements
      this.dom = {
        frame: document.getElementById('storybookFrame'),
        contentGrid: document.getElementById('tapReplayArea'),
        video: document.getElementById('colorsVideo'),
        videoSource: document.getElementById('videoSource'),
        replayBadge: document.getElementById('replayBadge'),
        replayVideoBtn: document.getElementById('replayVideoBtn'),
        repeatPageBtn: document.getElementById('repeatPageBtn'),
        videoProgress: document.getElementById('videoProgress'),
        videoSoundBtn: document.getElementById('videoSoundBtn'),
        videoSoundIcon: document.getElementById('videoSoundIcon'),
        
        storyPageTitle: document.getElementById('storyPageTitle'),
        pageCounter: document.getElementById('pageCounter'),
        colorVocabPill: document.getElementById('colorVocabPill'),
        colorIcon: document.getElementById('colorIcon'),
        colorName: document.getElementById('colorName'),
        storyText: document.getElementById('storyText'),
        toddlerPrompt: document.getElementById('toddlerPrompt'),

        prevPageBtn: document.getElementById('prevPageBtn'),
        nextPageBtn: document.getElementById('nextPageBtn'),
        pageDotsTrack: document.getElementById('pageDotsTrack'),

        toggleSoundBtn: document.getElementById('toggleSoundBtn'),
        fullscreenBtn: document.getElementById('fullscreenBtn'),

        celebrationModal: document.getElementById('celebrationModal'),
        readAgainBtn: document.getElementById('readAgainBtn'),

        wordAudio: document.getElementById('wordAudio')
      };

      this.init();
    }

    init() {
      this.buildPageDots();
      this.bindEvents();
      this.renderPage(0, false);
    }

    // Build interactive color dots at the bottom
    buildPageDots() {
      this.dom.pageDotsTrack.innerHTML = '';
      COLORS_PAGES.forEach((pg, index) => {
        const dot = document.createElement('button');
        dot.className = `dot-btn ${index === 0 ? 'active' : ''}`;
        dot.title = `Page ${pg.page}: ${pg.color}`;
        dot.innerHTML = `
          <span>${pg.icon}</span>
          <span class="dot-num">${pg.page}</span>
        `;
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          this.goToPage(index);
        });
        this.dom.pageDotsTrack.appendChild(dot);
      });
    }

    // Update active state of dots
    updateDots() {
      const dots = this.dom.pageDotsTrack.querySelectorAll('.dot-btn');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === this.currentPage);
      });
    }

    bindEvents() {
      // 1. TAP ANYWHERE ON THE PAGE / CONTENT GRID TO REPLAY VIDEO
      this.dom.contentGrid.addEventListener('click', (e) => {
        // If clicking navigation buttons or interactive pills directly, let them handle it
        if (e.target.closest('.nav-turn-btn') || 
            e.target.closest('.dot-btn') || 
            e.target.closest('.color-vocab-pill') || 
            e.target.closest('.video-sound-toggle')) {
          return;
        }
        this.replayCurrentVideo();
      });

      // Dedicated replay buttons
      if (this.dom.replayVideoBtn) {
        this.dom.replayVideoBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.replayCurrentVideo();
        });
      }

      if (this.dom.repeatPageBtn) {
        this.dom.repeatPageBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.replayCurrentVideo();
        });
      }

      // Video progress bar
      this.dom.video.addEventListener('timeupdate', () => {
        if (this.dom.video.duration) {
          const pct = (this.dom.video.currentTime / this.dom.video.duration) * 100;
          this.dom.videoProgress.style.width = `${pct}%`;
        }
      });

      // Video ended event
      this.dom.video.addEventListener('ended', () => {
        this.dom.videoProgress.style.width = '100%';
        // If on the final page, open the celebration modal!
        if (this.currentPage === this.totalPages - 1) {
          setTimeout(() => {
            this.showCelebrationModal();
          }, 600);
        }
      });

      // Video sound toggle
      this.dom.videoSoundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleVideoSound();
      });

      // Word pronunciation pill
      this.dom.colorVocabPill.addEventListener('click', (e) => {
        e.stopPropagation();
        this.playWordAudio();
      });

      // Navigation arrows
      this.dom.prevPageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prevPage();
      });

      this.dom.nextPageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextPage();
      });

      // Header Sound button
      this.dom.toggleSoundBtn.addEventListener('click', () => {
        this.toggleVideoSound();
      });

      // Fullscreen button
      this.dom.fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });

      // Celebration modal buttons
      this.dom.readAgainBtn.addEventListener('click', () => {
        this.dom.celebrationModal.classList.remove('open');
        this.goToPage(0);
      });

      // Keyboard support
      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          this.nextPage();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          this.prevPage();
        } else if (e.key === ' ' || e.key === 'r') {
          e.preventDefault();
          this.replayCurrentVideo();
        }
      });

      // Touch swipe gestures
      let touchStartX = 0;
      let touchStartY = 0;
      this.dom.contentGrid.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      this.dom.contentGrid.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const dx = touchEndX - touchStartX;
        const dy = touchEndY - touchStartY;

        if (Math.abs(dx) > 60 && Math.abs(dy) < 50) {
          if (dx < 0) this.nextPage();
          else this.prevPage();
        }
      }, { passive: true });
    }

    // Toggle video audio sound state
    toggleVideoSound() {
      this.videoMuted = !this.videoMuted;
      this.sfx.soundEnabled = !this.videoMuted;
      this.dom.video.muted = this.videoMuted;
      this.dom.videoSoundIcon.textContent = this.videoMuted ? '🔇' : '🔊';

      const label = this.dom.toggleSoundBtn.querySelector('.btn-label');
      const icon = this.dom.toggleSoundBtn.querySelector('.btn-icon');
      if (!this.videoMuted) {
        label.textContent = 'Sound ON';
        icon.textContent = '🔊';
        if (this.dom.video.paused) {
          this.dom.video.play().catch(() => {});
        }
      } else {
        label.textContent = 'Sound OFF';
        icon.textContent = '🔇';
      }
    }

    // Replay the current page video smoothly from 0:00 with its native sound
    replayCurrentVideo() {
      // Animate replay badge feedback
      this.dom.replayBadge.style.transform = 'scale(1.2) rotate(-6deg)';
      setTimeout(() => {
        this.dom.replayBadge.style.transform = '';
      }, 300);

      this.dom.video.currentTime = 0;
      this.dom.video.muted = this.videoMuted;
      
      const playPromise = this.dom.video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          this.dom.video.muted = true;
          this.dom.video.play().then(() => {
            if (!this.videoMuted) this.dom.video.muted = false;
          }).catch(() => {});
        });
      }
    }

    // Play color name pronunciation audio
    playWordAudio() {
      const pageData = COLORS_PAGES[this.currentPage];
      if (!pageData.wordAudio || !this.sfx.soundEnabled) return;

      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }

      this.dom.wordAudio.src = pageData.wordAudio;
      this.dom.wordAudio.currentTime = 0;
      this.dom.wordAudio.play().catch(() => {});

      // Fun bounce animation on the pill
      this.dom.colorVocabPill.style.transform = 'scale(1.15) rotate(3deg)';
      setTimeout(() => {
        this.dom.colorVocabPill.style.transform = '';
      }, 300);
    }

    // Render a given page index
    renderPage(index, animate = true) {
      if (index < 0 || index >= this.totalPages) return;
      this.currentPage = index;
      const data = COLORS_PAGES[index];

      // Audio & Page Flip sound
      if (animate) {
        this.sfx.playPageTurn();
        this.dom.contentGrid.classList.remove('page-turning');
        void this.dom.contentGrid.offsetWidth; // Trigger reflow
        this.dom.contentGrid.classList.add('page-turning');
      }

      // Stop previous word audio if any
      if (this.dom.wordAudio) this.dom.wordAudio.pause();

      // Update Header & Badge
      this.dom.storyPageTitle.textContent = data.title;
      this.dom.pageCounter.textContent = `Page ${data.page} of ${this.totalPages}`;

      // Update Theme Class on Book Frame
      this.dom.frame.className = `storybook-frame ${data.themeClass}`;

      // Update Video Source & Poster
      this.dom.video.pause();
      this.dom.video.poster = data.poster;
      this.dom.videoSource.src = data.video;
      this.dom.video.load();
      this.dom.videoProgress.style.width = '0%';

      // Start playing video with its own native audio
      this.dom.video.muted = this.videoMuted;
      const playPromise = this.dom.video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          this.dom.video.muted = true;
          this.dom.video.play().catch(() => {});
        });
      }

      // Update Story Text & Color Pill
      this.dom.colorIcon.textContent = data.icon;
      this.dom.colorName.textContent = data.color;
      this.dom.storyText.innerHTML = data.htmlText;
      this.dom.toddlerPrompt.textContent = data.prompt;

      // Update Navigation Buttons state
      this.dom.prevPageBtn.disabled = (index === 0);
      if (index === this.totalPages - 1) {
        this.dom.nextPageBtn.querySelector('.text').textContent = 'Finish 🌟';
      } else {
        this.dom.nextPageBtn.querySelector('.text').textContent = 'Next';
      }

      // Update Page Dots
      this.updateDots();
    }

    prevPage() {
      if (this.currentPage > 0) {
        this.renderPage(this.currentPage - 1, true);
      }
    }

    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.renderPage(this.currentPage + 1, true);
      } else {
        this.showCelebrationModal();
      }
    }

    goToPage(index) {
      if (index !== this.currentPage) {
        this.renderPage(index, true);
      }
    }

    showCelebrationModal() {
      this.dom.celebrationModal.classList.add('open');
      this.sfx.playChime();
    }
  }

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    window.colorsBookApp = new ColorsStoryBook();
  });
})();
