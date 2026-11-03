/**
 * Bilikids Kids Club - Unit 11: Looking Back Engine
 * Cambridge A2 English: History, Dinosaurs, Ancient Inventions, & Past Narrative.
 */

class KidsUnit11Engine {
  constructor() {
    this.stars = 210;
    this.soundEnabled = true;
    this.audioCtx = null;
  }

  init() {
    this.setupAudio();
    this.updateStars();
    this.setupFossilDig();
    this.setupInventionMatcher();
    this.setupStoryWeaver();
    this.setupMuseumTour();
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

  // 1. FOSSIL DIG SITE
  setupFossilDig() {
    const fossils = [
      { name: "Tyrannosaurus Rex", icon: "🦖", period: "Late Cretaceous", fact: "The T-Rex had teeth as large as bananas and powerful jaws!" },
      { name: "Triceratops", icon: "🦕", period: "Herbivore Giant", fact: "It had three sharp horns on its head to defend against predators." },
      { name: "Pterodactyl", icon: "🦅", period: "Flying Reptile", fact: "It was not a dinosaur, but a flying reptile with leathery wings." },
      { name: "Woolly Mammoth", icon: "🦣", period: "Ice Age", fact: "Mammoths roamed frozen tundras with thick fur and curved tusks." }
    ];

    const grid = document.getElementById('fossilDigGrid');
    if (!grid) return;

    grid.innerHTML = fossils.map((f, i) => `
      <button type="button" class="kids-tile-btn fossil-tile" data-idx="${i}" aria-label="Uncover ${f.name} fossil">
        <span class="kids-tile-icon">${f.icon}</span>
        <span class="kids-tile-name">${f.name}</span>
        <span class="kids-tile-sub">${f.period}</span>
        <span class="fossil-tile-hint" style="font-size:0.75rem; color:#64748b; margin-top:4px;">Tap to uncover fossil!</span>
      </button>
    `).join('');

    grid.querySelectorAll('.fossil-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        if (tile.disabled) return;
        const i = parseInt(tile.dataset.idx, 10);
        const f = fossils[i];
        tile.disabled = true;
        tile.classList.add('correct');
        tile.querySelector('.fossil-tile-hint').textContent = 'Fossil uncovered!';
        this.playSuccess();
        this.addStars(20);
        this.speak(`Fossil uncovered! The ${f.name}! ${f.fact}`);
      });
    });
  }

  // 2. ANCIENT INVENTIONS MATCHER
  setupInventionMatcher() {
    const inventions = [
      { item: "The Mechanical Clock", date: "14th Century Europe", icon: "🕰️", desc: "Allowed towns to measure hours with gears and bells." },
      { item: "Paper & Printing", date: "Ancient China", icon: "📜", desc: "Revolutionized human knowledge, storytelling and books." },
      { item: "The Magnetic Compass", date: "Han Dynasty", icon: "🧭", desc: "Helped courageous explorers sail across vast oceans without getting lost." },
      { item: "The Telescope", date: "1608 Netherlands", icon: "🔭", desc: "Galileo looked through it and discovered the moons of Jupiter!" }
    ];

    const container = document.getElementById('inventionsGrid');
    if (!container) return;

    container.innerHTML = inventions.map((inv, i) => `
      <div class="kids-tile-btn" data-idx="${i}">
        <span class="kids-tile-icon">${inv.icon}</span>
        <strong style="font-size:1.15rem; color:#0f172a;">${inv.item}</strong>
        <span class="kids-tile-sub" style="color:#7c3aed; font-weight:700;">${inv.date}</span>
        <p style="font-size:0.85rem; color:#334155; margin:6px 0 0;">${inv.desc}</p>
        <button class="kids-audio-play-btn" data-text="${inv.item} was invented in ${inv.date}. ${inv.desc}">
          🔊 Hear Discovery Story
        </button>
      </div>
    `).join('');

    const recall = document.createElement('section');
    recall.id = 'inventionRecallCheck';
    recall.style.cssText = 'grid-column:1/-1;margin-top:18px;padding:18px;border:2px solid #c4b5fd;border-radius:16px;background:#f5f3ff;';
    recall.setAttribute('aria-labelledby', 'inventionRecallTitle');
    recall.innerHTML = `<h3 id="inventionRecallTitle" style="margin:0 0 6px;color:#5b21b6;">🧠 Invention recall</h3><p>Review the invention cards, then hide them and match each clue from memory.</p><button type="button" class="kids-audio-play-btn" data-action="start">Start 4-question recall check</button><div class="invention-recall-question" role="status" aria-live="polite"></div>`;
    container.after(recall);
    const recallBox = recall.querySelector('.invention-recall-question');
    recall.querySelector('[data-action="start"]').addEventListener('click', () => {
      container.hidden = true;
      let index = 0;
      let score = 0;
      const renderQuestion = () => {
        if (index >= inventions.length) {
          recallBox.innerHTML = `<p style="font-weight:700;color:#5b21b6;">Recall complete: ${score}/${inventions.length} correct. Review the cards and try the check again later.</p><button type="button" class="kids-audio-play-btn" data-action="review">Review invention cards</button>`;
          recallBox.querySelector('[data-action="review"]').addEventListener('click', () => { container.hidden = false; recallBox.innerHTML = ''; });
          return;
        }
        const target = inventions[index];
        const options = [target, ...inventions.filter(item => item !== target).sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
        recallBox.innerHTML = `<p><strong>Clue ${index + 1} of ${inventions.length}:</strong> ${target.desc}</p><div class="invention-recall-options" style="display:flex;flex-wrap:wrap;gap:8px;"></div><p class="invention-recall-feedback"></p>`;
        const optionsBox = recallBox.querySelector('.invention-recall-options');
        options.forEach(option => {
          const choice = document.createElement('button');
          choice.type = 'button';
          choice.className = 'kids-tile-btn';
          choice.textContent = `${option.icon} ${option.item}`;
          choice.addEventListener('click', () => {
            const feedback = recallBox.querySelector('.invention-recall-feedback');
            if (option === target) {
              score++;
              feedback.textContent = `Correct: ${target.item}. Listen to its discovery story.`;
              this.speak(`${target.item} was invented in ${target.date}. ${target.desc}`);
              optionsBox.querySelectorAll('button').forEach(button => { button.disabled = true; });
              const next = document.createElement('button');
              next.type = 'button';
              next.className = 'kids-audio-play-btn';
              next.textContent = index + 1 === inventions.length ? 'Finish recall check' : 'Next clue';
              next.addEventListener('click', () => { index++; renderQuestion(); });
              optionsBox.after(next);
            } else feedback.textContent = 'Not that invention. Think of the clue and try another choice.';
          });
          optionsBox.appendChild(choice);
        });
      };
      renderQuestion();
    });

    container.querySelectorAll('.kids-audio-play-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.speak(btn.dataset.text);
      });
    });
  }

  // 3. PAST TENSE STORY WEAVER
  setupStoryWeaver() {
    const storyGaps = [
      { text: "Long ago, Barnaby the Bear _____ into an ancient Egyptian pyramid.", verb: "walked", options: ["walked", "walking", "walks"] },
      { text: "Inside the stone chamber, he _____ a golden glowing torch.", verb: "found", options: ["found", "finded", "find"] },
      { text: "Suddenly, a friendly mummy _____ hello with a smile!", verb: "said", options: ["said", "sayed", "says"] }
    ];

    let current = 0;
    const render = () => {
      if (current >= storyGaps.length) {
        current = 0;
      }
      const item = storyGaps[current];
      const promptEl = document.getElementById('storyWeaverPrompt');
      const optionsEl = document.getElementById('storyWeaverOptions');
      const fb = document.getElementById('storyWeaverFeedback');

      if (promptEl) promptEl.textContent = item.text.replace("_____", "______");
      if (fb) fb.style.display = 'none';

      if (optionsEl) {
        optionsEl.innerHTML = item.options.map(opt => `
          <button class="kids-tile-btn" data-val="${opt}">
            <span class="kids-tile-name">${opt}</span>
          </button>
        `).join('');

        optionsEl.querySelectorAll('.kids-tile-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const isRight = btn.dataset.val === item.verb;
            if (isRight) {
              btn.classList.add('correct');
              this.playSuccess();
              this.addStars(25);
              const fullSentence = item.text.replace("_____", item.verb);
              this.speak(fullSentence);
              if (fb) {
                fb.className = 'kids-toast-feedback good';
                fb.textContent = `⭐ Correct! "${item.verb}" is the past simple!`;
                fb.style.display = 'block';
              }
              setTimeout(() => {
                current++;
                render();
              }, 1400);
            } else {
              btn.classList.add('incorrect');
              this.playError();
              if (fb) {
                fb.className = 'kids-toast-feedback bad';
                fb.textContent = `Remember to use the past simple form!`;
                fb.style.display = 'block';
              }
            }
          });
        });
      }
    };

    render();
  }

  // 4. MUSEUM TOUR SPEAKING
  setupMuseumTour() {
    const tourOptions = [
      "Welcome travelers to the Ancient History Museum! Follow me to see the Egyptian Golden Mask.",
      "Look at this giant fossil of a Triceratops! It lived millions of years ago on Earth.",
      "Thousands of years ago, ancient civilizations built monumental pyramids and magnificent temples."
    ];

    const container = document.getElementById('museumPhrasesContainer');
    if (!container) return;

    container.innerHTML = tourOptions.map(t => `
      <button class="kids-tile-btn" data-speech="${t}" style="flex-direction:row; text-align:left; justify-content:flex-start;">
        <span style="font-size:1.6rem;">🏛️</span>
        <div>
          <strong style="font-size:1.02rem; color:#0f172a; display:block;">"${t}"</strong>
          <span style="font-size:0.8rem; color:#7c3aed;">Tap to rehearse spoken narration (+30 ⭐)</span>
        </div>
      </button>
    `).join('');

    container.querySelectorAll('.kids-tile-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.speech;
        this.speak(text);
        this.playSuccess();
        this.addStars(30);
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
