/**
 * BILI KIDS - AFRICAN SAFARI ADVENTURE
 * Interactive Video Storybook Engine
 * Features: Native Video Audio Only, Tap-Anywhere Video Replay, Realistic Page Turns & Preschool Interactivity
 */

(() => {
  'use strict';

  // --- STORY PAGES CONFIGURATION ---
  const SAFARI_PAGES = [
    {
      page: 1,
      title: "The Curious Meerkat",
      animal: "MEERKAT",
      icon: "🐾",
      video: "assets/stories/safari_videos/safari_p1_meerkat.mp4",
      poster: "assets/stories/safari_videos/safari_p1_meerkat.png",
      wordAudio: "assets/stories/safari_audio/word_meerkat.m4a",
      htmlText: `
        <p>Welcome to Africa! Our three little explorer friends unpack their map under the big baobab tree.</p>
        <p>Look! A tiny <span class="highlight-word">MEERKAT</span> pops up from the warm sand. <em>"Hello, little Meerkat!"</em></p>
        <p>The cute meerkat stands tall on his little paws and smiles happily.</p>
      `,
      prompt: "Can you stand tall and look around like a curious Meerkat?"
    },
    {
      page: 2,
      title: "The Gentle Baby Giraffe",
      animal: "GIRAFFE",
      icon: "🦒",
      video: "assets/stories/safari_videos/safari_p2_giraffe.mp4",
      poster: "assets/stories/safari_videos/safari_p2_giraffe.png",
      wordAudio: "assets/stories/safari_audio/word_giraffe.m4a",
      htmlText: `
        <p>Look up high in the acacia tree! A gentle baby <span class="highlight-word">GIRAFFE</span> has the longest neck in the savanna.</p>
        <p>Crunch, crunch, crunch! She nibbles the sweetest green leaves.</p>
        <p><em>"Hello, sweet Giraffe!"</em> She wiggles her soft ears and gives our friends a loving look.</p>
      `,
      prompt: "Can you stretch your neck high to the sky like a Giraffe?"
    },
    {
      page: 3,
      title: "The Dancing Ostrich",
      animal: "OSTRICH",
      icon: "🦩",
      video: "assets/stories/safari_videos/safari_p3_ostrich.mp4",
      poster: "assets/stories/safari_videos/safari_p3_ostrich.png",
      wordAudio: "assets/stories/safari_audio/word_ostrich.m4a",
      htmlText: `
        <p>Step, twirl, and flap! Out on the sunny savanna, a happy <span class="highlight-word">OSTRICH</span> is dancing.</p>
        <p>She spreads her fluffy black and white feathers and hops with joy.</p>
        <p><em>"Can you flap your wings like an Ostrich?"</em> Flap, flap, flap! What a wonderful dance!</p>
      `,
      prompt: "Flap your wings and hop on one foot like a happy Ostrich!"
    },
    {
      page: 4,
      title: "The Cheerful Zebra",
      animal: "ZEBRA",
      icon: "🦓",
      video: "assets/stories/safari_videos/safari_p4_zebra.mp4",
      poster: "assets/stories/safari_videos/safari_p4_zebra.png",
      wordAudio: "assets/stories/safari_audio/word_zebra.m4a",
      htmlText: `
        <p>Clip, clop, clip, clop! Who has beautiful black and white stripes?</p>
        <p>It is our friendly <span class="highlight-word">ZEBRA</span>! Our explorer friends clap and cheer.</p>
        <p><em>"Yay, Zebra!"</em> The little zebra trots across the meadow with a happy swish of his tail.</p>
      `,
      prompt: "Can you clap your hands and cheer: 'Yay, Zebra!'?"
    },
    {
      page: 5,
      title: "The Speedy Cheetah",
      animal: "CHEETAH",
      icon: "🐆",
      video: "assets/stories/safari_videos/safari_p5_cheetah.mp4",
      poster: "assets/stories/safari_videos/safari_p5_cheetah.png",
      wordAudio: "assets/stories/safari_audio/word_cheetah.m4a",
      htmlText: `
        <p>Zoom! Whoosh! A cute baby <span class="highlight-word">CHEETAH</span> dashes like the wind!</p>
        <p>She has lovely golden spots and a cheerful wink.</p>
        <p><em>"Ready, set, go!"</em> The playful little cheetah loves to race under the warm African sunshine.</p>
      `,
      prompt: "Can you give a cute wink and run on the spot like a speedy Cheetah?"
    },
    {
      page: 6,
      title: "The Friendly Snake",
      animal: "SNAKE",
      icon: "🐍",
      video: "assets/stories/safari_videos/safari_p6_snake.mp4",
      poster: "assets/stories/safari_videos/safari_p6_snake.png",
      wordAudio: "assets/stories/safari_audio/word_snake.m4a",
      htmlText: `
        <p>Look into the leafy tree branch! A friendly green <span class="highlight-word">SNAKE</span> is curled up nice and cozy.</p>
        <p>Ssss... he gives our friends a bright, happy smile.</p>
        <p><em>"Hello, green Snake!"</em> He waves his shiny tail in the gentle savanna breeze.</p>
      `,
      prompt: "Can you make a gentle sound: 'Ssssss' and smile like the friendly Snake?"
    },
    {
      page: 7,
      title: "The Jolly Baby Hippo",
      animal: "HIPPO",
      icon: "🦛",
      video: "assets/stories/safari_videos/safari_p7_hippo.mp4",
      poster: "assets/stories/safari_videos/safari_p7_hippo.png",
      wordAudio: "assets/stories/safari_audio/word_hippo.m4a",
      htmlText: `
        <p>Splash! Near the cool blue waterhole, a jolly baby <span class="highlight-word">HIPPO</span> is having so much fun.</p>
        <p>He sits in the warm grass and waves his little paw.</p>
        <p><em>"Hello, cheerful Hippo!"</em> What a big, sweet smile for our explorer friends!</p>
      `,
      prompt: "Can you wave both of your hands to say 'Hello, Hippo!'?"
    },
    {
      page: 8,
      title: "African Safari Celebration!",
      animal: "SAFARI FRIENDS",
      icon: "🌟",
      video: "assets/stories/safari_videos/safari_p8_celebration.mp4",
      poster: "assets/stories/safari_videos/safari_p8_celebration.png",
      wordAudio: "assets/stories/safari_audio/word_safari.m4a",
      htmlText: `
        <p>Hooray! What a magical adventure in Africa!</p>
        <p>All our animal friends gather together to celebrate friendship, love, and wonder.</p>
        <p><em>"African Safari Adventure!"</em> Together, Leo, Luna, Bili, and all the animals sing and dance under the golden sun!</p>
      `,
      prompt: "Hooray! Raise your arms and dance with all the animal friends!"
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

  // --- SAFARI STORY CONTROLLER ---
  class SafariStoryBook {
    constructor() {
      this.currentPage = 0;
      this.totalPages = SAFARI_PAGES.length;
      this.sfx = new SoundFX();
      this.videoMuted = false;

      // DOM Elements
      this.dom = {
        frame: document.getElementById('storybookFrame'),
        contentGrid: document.getElementById('tapReplayArea'),
        video: document.getElementById('safariVideo'),
        videoSource: document.getElementById('videoSource'),
        replayBadge: document.getElementById('replayBadge'),
        replayVideoBtn: document.getElementById('replayVideoBtn'),
        repeatPageBtn: document.getElementById('repeatPageBtn'),
        videoProgress: document.getElementById('videoProgress'),
        videoSoundBtn: document.getElementById('videoSoundBtn'),
        videoSoundIcon: document.getElementById('videoSoundIcon'),
        
        storyPageTitle: document.getElementById('storyPageTitle'),
        pageCounter: document.getElementById('pageCounter'),
        animalVocabPill: document.getElementById('animalVocabPill'),
        animalIcon: document.getElementById('animalIcon'),
        animalName: document.getElementById('animalName'),
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

    // Build interactive animal dots at the bottom
    buildPageDots() {
      this.dom.pageDotsTrack.innerHTML = '';
      SAFARI_PAGES.forEach((pg, index) => {
        const dot = document.createElement('button');
        dot.className = `dot-btn ${index === 0 ? 'active' : ''}`;
        dot.title = `Page ${pg.page}: ${pg.animal}`;
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
            e.target.closest('.animal-vocab-pill') || 
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
      this.dom.animalVocabPill.addEventListener('click', (e) => {
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
        // If paused, resume
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
          // If browser restricts unmuted autoplay, mute once then unmute on user touch
          this.dom.video.muted = true;
          this.dom.video.play().then(() => {
            if (!this.videoMuted) this.dom.video.muted = false;
          }).catch(() => {});
        });
      }
    }

    // Play animal name pronunciation audio
    playWordAudio() {
      const pageData = SAFARI_PAGES[this.currentPage];
      if (!pageData.wordAudio || !this.sfx.soundEnabled) return;

      this.dom.wordAudio.src = pageData.wordAudio;
      this.dom.wordAudio.currentTime = 0;
      this.dom.wordAudio.play().catch(() => {});

      // Fun bounce animation on the pill
      this.dom.animalVocabPill.style.transform = 'scale(1.15) rotate(3deg)';
      setTimeout(() => {
        this.dom.animalVocabPill.style.transform = '';
      }, 300);
    }

    // Render a given page index
    renderPage(index, animate = true) {
      if (index < 0 || index >= this.totalPages) return;
      this.currentPage = index;
      const data = SAFARI_PAGES[index];

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
          // Fallback if browser policy requires first direct click:
          this.dom.video.muted = true;
          this.dom.video.play().catch(() => {});
        });
      }

      // Update Story Text & Animal Pill
      this.dom.animalIcon.textContent = data.icon;
      this.dom.animalName.textContent = data.animal;
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
    window.safariBookApp = new SafariStoryBook();
  });
})();
