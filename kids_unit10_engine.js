/**
 * Bilikids Kids Club - Unit 10: Busy Lives Engine
 * Cambridge A2 English: Past & Present Routines, Chores, Hobbies, & Schedules.
 */

class KidsUnit10Engine {
  constructor() {
    this.stars = 180;
    this.soundEnabled = true;
    this.audioCtx = null;
  }

  init() {
    this.setupAudio();
    this.updateStars();
    this.setupTimelineSequencer();
    this.setupChoreBuster();
    this.setupPastPresentSorter();
    this.setupVloggerStudio();
  }

  setupAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    } catch (e) {}
  }

  playTone(freq, duration, type = "sine") {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === "suspended") this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playSuccess() {
    [523.25, 659.25, 783.99].forEach((f, i) => setTimeout(() => this.playTone(f, 0.12, 'triangle'), i * 70));
  }

  playError() {
    this.playTone(220, 0.2, 'sawtooth');
  }

  speak(text) {
    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(text, 'kid');
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
    }
  }

  addStars(pts) {
    this.stars += pts;
    this.updateStars();
  }

  updateStars() {
    const el = document.getElementById('unitStarsCount');
    if (el) el.textContent = `${this.stars} pts`;
  }

  // 1. TIMELINE SEQUENCER
  setupTimelineSequencer() {
    const routineSteps = [
      { id: "s1", time: "7:00 AM", text: "Woke up and made my bed", icon: "⏰" },
      { id: "s2", time: "7:30 AM", text: "Brushed teeth and ate warm pancakes", icon: "🥞" },
      { id: "s3", time: "8:15 AM", text: "Rode my bicycle to school with friends", icon: "🚲" },
      { id: "s4", time: "3:30 PM", text: "Played soccer and scored two goals", icon: "⚽" },
      { id: "s5", time: "5:00 PM", text: "Finished science project homework", icon: "🔬" }
    ];

    let currentOrder = [...routineSteps].sort(() => Math.random() - 0.5);

    const render = () => {
      const container = document.getElementById('timelineRoutineList');
      if (!container) return;

      container.innerHTML = currentOrder.map((step, idx) => `
        <div class="kids-tile-btn" style="flex-direction: row; justify-content: space-between; text-align: left;" data-idx="${idx}">
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:2rem;">${step.icon}</span>
            <div>
              <strong style="color:#0369a1; font-size:1.05rem;">${step.time}</strong>
              <div style="font-size:0.95rem; color:#1e293b; font-weight:600;">${step.text}</div>
            </div>
          </div>
          <div style="display:flex; gap:6px;">
            <button class="step-arrow up" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''} style="padding:4px 10px; border-radius:6px; cursor:pointer;">▲</button>
            <button class="step-arrow down" data-idx="${idx}" ${idx === currentOrder.length - 1 ? 'disabled' : ''} style="padding:4px 10px; border-radius:6px; cursor:pointer;">▼</button>
          </div>
        </div>
      `).join('');

      container.querySelectorAll('.step-arrow.up').forEach(btn => {
        btn.addEventListener('click', () => {
          const i = parseInt(btn.dataset.idx, 10);
          if (i > 0) {
            const t = currentOrder[i];
            currentOrder[i] = currentOrder[i - 1];
            currentOrder[i - 1] = t;
            render();
          }
        });
      });

      container.querySelectorAll('.step-arrow.down').forEach(btn => {
        btn.addEventListener('click', () => {
          const i = parseInt(btn.dataset.idx, 10);
          if (i < currentOrder.length - 1) {
            const t = currentOrder[i];
            currentOrder[i] = currentOrder[i + 1];
            currentOrder[i + 1] = t;
            render();
          }
        });
      });
    };

    render();

    const checkBtn = document.getElementById('btnVerifyTimeline');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const isRight = currentOrder.every((step, i) => step.id === routineSteps[i].id);
        const fb = document.getElementById('timelineFeedback');
        if (fb) fb.style.display = 'block';

        if (isRight) {
          this.playSuccess();
          this.addStars(50);
          this.speak("Awesome job! You organized Barnaby's busy day in perfect order!");
          if (fb) {
            fb.className = 'kids-toast-feedback good';
            fb.textContent = "🎉 Perfect chronological order! (+50 ⭐)";
          }
        } else {
          this.playError();
          if (fb) {
            fb.className = 'kids-toast-feedback bad';
            fb.textContent = "Check the times from 7:00 AM to 5:00 PM and try again!";
          }
        }
      });
    }
  }

  // 2. CHORE BUSTER ARCADE
  setupChoreBuster() {
    const chores = [
      { text: "Vacuum the rug", icon: "🧹", action: "cleaning" },
      { text: "Wash the dishes", icon: "🍽️", action: "kitchen" },
      { text: "Take out the trash", icon: "🗑️", action: "recycle" },
      { text: "Water the plants", icon: "🌱", action: "garden" },
      { text: "Walk the puppy", icon: "🐕", action: "pets" },
      { text: "Fold the laundry", icon: "👕", action: "clothes" }
    ];

    const grid = document.getElementById('choreBusterGrid');
    if (!grid) return;

    grid.innerHTML = chores.map((c, i) => `
      <button class="kids-tile-btn chore-card" data-idx="${i}">
        <span class="kids-tile-icon">${c.icon}</span>
        <span class="kids-tile-name">${c.text}</span>
        <span class="kids-tile-sub">Tap to complete!</span>
      </button>
    `).join('');

    let completed = 0;
    grid.querySelectorAll('.chore-card').forEach(card => {
      card.addEventListener('click', () => {
        if (!card.classList.contains('correct')) {
          card.classList.add('correct');
          completed++;
          const idx = parseInt(card.dataset.idx, 10);
          this.speak(`I helped to ${chores[idx].text}!`);
          this.playSuccess();
          this.addStars(15);

          const status = document.getElementById('choreBusterStatus');
          if (status) status.textContent = `Completed: ${completed} / ${chores.length} Chores!`;

          if (completed === chores.length) {
            this.speak("All chores finished! Your house is sparkling clean!");
          }
        }
      });
    });
  }

  // 3. PAST VS PRESENT SORTER
  setupPastPresentSorter() {
    const cards = [
      { text: "Yesterday, I washed my jacket", tense: "past" },
      { text: "Every morning, I drink milk", tense: "present" },
      { text: "Last night, Diego visited his grandma", tense: "past" },
      { text: "Sofia always rides her bike on Saturdays", tense: "present" },
      { text: "Two hours ago, they baked delicious cookies", tense: "past" }
    ];

    let currentIdx = 0;
    const showCard = () => {
      if (currentIdx >= cards.length) {
        currentIdx = 0;
      }
      const item = cards[currentIdx];
      const textEl = document.getElementById('sorterSentenceDisplay');
      const fb = document.getElementById('sorterFeedback');
      if (textEl) textEl.textContent = `"${item.text}"`;
      if (fb) fb.style.display = 'none';
    };

    showCard();

    const handleChoice = (chosenTense) => {
      const item = cards[currentIdx];
      const fb = document.getElementById('sorterFeedback');
      if (chosenTense === item.tense) {
        this.playSuccess();
        this.addStars(20);
        this.speak(`Correct! That is in the ${item.tense} tense!`);
        if (fb) {
          fb.className = 'kids-toast-feedback good';
          fb.textContent = `⭐ Correct! (${item.tense.toUpperCase()}) (+20 ⭐)`;
          fb.style.display = 'block';
        }
        setTimeout(() => {
          currentIdx++;
          showCard();
        }, 1200);
      } else {
        this.playError();
        if (fb) {
          fb.className = 'kids-toast-feedback bad';
          fb.textContent = `Notice the time expression in the sentence and try again!`;
          fb.style.display = 'block';
        }
      }
    };

    const btnPast = document.getElementById('btnChoosePast');
    const btnPres = document.getElementById('btnChoosePresent');
    if (btnPast) btnPast.addEventListener('click', () => handleChoice('past'));
    if (btnPres) btnPres.addEventListener('click', () => handleChoice('present'));
  }

  // 4. VLOGGER STUDIO
  setupVloggerStudio() {
    const phrases = [
      "Yesterday was such a busy day! I cleaned my room and finished my math project.",
      "After school, my brother and I practiced soccer in the park until 6:00 PM.",
      "Now I am relaxing and watching my favorite animated movie with my family!"
    ];

    const container = document.getElementById('vloggerPhrasesList');
    if (!container) return;

    container.innerHTML = phrases.map((ph, i) => `
      <button class="kids-tile-btn" data-phrase="${ph}" style="text-align:left; flex-direction:row; justify-content:flex-start;">
        <span style="font-size:1.6rem;">🎙️</span>
        <div>
          <strong style="font-size:1.02rem; color:#0f172a; display:block;">"${ph}"</strong>
          <span style="font-size:0.8rem; color:#0369a1;">Tap to rehearse spoken English (+25 ⭐)</span>
        </div>
      </button>
    `).join('');

    container.querySelectorAll('.kids-tile-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.phrase;
        this.speak(text);
        this.playSuccess();
        this.addStars(25);
        btn.classList.add('correct');
      });
    });
  }
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.activity-view').forEach(v => v.classList.remove('active-view'));

  btn.classList.add('active');
  const view = document.getElementById(`view-${tabId}`);
  if (view) view.classList.add('active-view');
}
