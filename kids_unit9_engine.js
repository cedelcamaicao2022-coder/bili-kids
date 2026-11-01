/**
 * Bilikids Kids Club - Unit 9: A Wide World Engine
 * Cambridge A2 English: Geography, Continents, Countries, Nationalities, & Landforms.
 */

class KidsUnit9Engine {
  constructor() {
    this.stars = 140;
    this.soundEnabled = true;
    this.audioCtx = null;
  }

  init() {
    this.setupAudio();
    this.updateStars();
    this.setupPassportGame();
    this.setupFlagMatch();
    this.setupGeographyQuiz();
    this.setupAirportSpeaking();
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

  // 1. PASSPORT WORLD EXPLORER
  setupPassportGame() {
    const countries = [
      { id: "jp", name: "Japan", capital: "Tokyo", flag: "🇯🇵", greeting: "Konnichiwa! I am from Japan, in Asia.", landform: "Mount Fuji volcano" },
      { id: "co", name: "Colombia", capital: "Bogota", flag: "🇨🇴", greeting: "Hola! Colombia is famous for coffee and biodiversity.", landform: "Andes Mountains & Amazon Rainforest" },
      { id: "it", name: "Italy", capital: "Rome", flag: "🇮🇹", greeting: "Ciao! Italy has historic cities and pizza.", landform: "Mediterranean coast and Mount Vesuvius" },
      { id: "ca", name: "Canada", capital: "Ottawa", flag: "🇨🇦", greeting: "Hello! Canada is in North America with vast lakes.", landform: "Niagara Falls and Rocky Mountains" },
      { id: "eg", name: "Egypt", capital: "Cairo", flag: "🇪🇬", greeting: "Marhaban! Egypt is in Africa with the Nile River.", landform: "The Sahara Desert and Pyramids" },
      { id: "au", name: "Australia", capital: "Canberra", flag: "🇦🇺", greeting: "G'day! Australia is surrounded by coral reefs.", landform: "Great Barrier Reef and Outback" }
    ];

    const grid = document.getElementById('passportCountriesGrid');
    if (!grid) return;

    grid.innerHTML = countries.map(c => `
      <div class="kids-tile-btn" data-cid="${c.id}">
        <span class="kids-tile-icon">${c.flag}</span>
        <span class="kids-tile-name">${c.name}</span>
        <span class="kids-tile-sub">Capital: ${c.capital}</span>
        <span style="font-size:0.75rem; color:#0284c7; font-weight:600;">${c.landform}</span>
        <button type="button" class="kids-audio-play-btn" data-audio="${c.name}, capital ${c.capital}. ${c.greeting}">
          🔊 Listen
        </button>
      </div>
    `).join('');

    grid.querySelectorAll('.kids-audio-play-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.speak(btn.dataset.audio);
      });
    });

    grid.querySelectorAll('.kids-tile-btn').forEach(tile => {
      tile.addEventListener('click', () => {
        const c = countries.find(x => x.id === tile.dataset.cid);
        if (c) {
          this.speak(`Welcome to ${c.name}! Capital is ${c.capital}. ${c.greeting}`);
          this.playSuccess();
          this.addStars(10);
        }
      });
    });
  }

  // 2. FLAG & NATIONALITY MATCH
  setupFlagMatch() {
    const pairs = [
      { country: "Mexico", nationality: "Mexican", flag: "🇲🇽" },
      { country: "France", nationality: "French", flag: "🇫🇷" },
      { country: "Brazil", nationality: "Brazilian", flag: "🇧🇷" },
      { country: "Germany", nationality: "German", flag: "🇩🇪" }
    ];

    let currentIdx = 0;
    const renderQuestion = () => {
      const p = pairs[currentIdx];
      const clue = document.getElementById('flagMatchClue');
      const container = document.getElementById('flagMatchOptions');
      const feedback = document.getElementById('flagMatchFeedback');

      if (clue) clue.textContent = `${p.flag} Someone from ${p.country} is...`;
      if (feedback) feedback.style.display = 'none';

      const options = [p.nationality, ...pairs.filter(x => x.nationality !== p.nationality).map(x => x.nationality)].sort(() => Math.random() - 0.5);

      if (container) {
        container.innerHTML = options.map(opt => `
          <button class="kids-tile-btn" data-val="${opt}">
            <span class="kids-tile-name">${opt}</span>
          </button>
        `).join('');

        container.querySelectorAll('.kids-tile-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const isRight = btn.dataset.val === p.nationality;
            if (isRight) {
              btn.classList.add('correct');
              this.playSuccess();
              this.speak(`Correct! A person from ${p.country} is ${p.nationality}!`);
              this.addStars(20);
              if (feedback) {
                feedback.className = 'kids-toast-feedback good';
                feedback.textContent = `🎉 Great job! ${p.country} ➔ ${p.nationality}.`;
              }
              setTimeout(() => {
                currentIdx = (currentIdx + 1) % pairs.length;
                renderQuestion();
              }, 1200);
            } else {
              btn.classList.add('incorrect');
              this.playError();
              if (feedback) {
                feedback.className = 'kids-toast-feedback bad';
                feedback.textContent = `Try again! Remember someone from ${p.country} is ${p.nationality}.`;
              }
            }
          });
        });
      }
    };

    renderQuestion();
  }

  // 3. GEOGRAPHY QUIZ
  setupGeographyQuiz() {
    const questions = [
      { q: "Which is the biggest ocean on planet Earth?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], correct: 0 },
      { q: "On which continent is the Amazon Rainforest located?", options: ["South America", "Europe", "Africa", "Australia"], correct: 0 },
      { q: "Which desert is the largest hot desert in the world?", options: ["Sahara Desert", "Gobi Desert", "Atacama Desert", "Kalahari Desert"], correct: 0 }
    ];

    let qIdx = 0;
    const showQ = () => {
      const q = questions[qIdx];
      const stem = document.getElementById('geoQuestionStem');
      const grid = document.getElementById('geoQuestionOptions');
      const fb = document.getElementById('geoQuestionFeedback');

      if (stem) stem.textContent = `${qIdx + 1}. ${q.q}`;
      if (fb) fb.style.display = 'none';

      if (grid) {
        grid.innerHTML = q.options.map((opt, i) => `
          <button class="kids-tile-btn" data-idx="${i}">
            <span class="kids-tile-name">${opt}</span>
          </button>
        `).join('');

        grid.querySelectorAll('.kids-tile-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const chosen = parseInt(btn.dataset.idx, 10);
            if (chosen === q.correct) {
              btn.classList.add('correct');
              this.playSuccess();
              this.addStars(25);
              if (fb) {
                fb.className = 'kids-toast-feedback good';
                fb.textContent = `⭐ Fantastic answer! ${q.options[q.correct]} is right!`;
              }
              setTimeout(() => {
                qIdx = (qIdx + 1) % questions.length;
                showQ();
              }, 1300);
            } else {
              btn.classList.add('incorrect');
              this.playError();
              if (fb) {
                fb.className = 'kids-toast-feedback bad';
                fb.textContent = `Not quite! Check your world map and try again.`;
              }
            }
          });
        });
      }
    };

    showQ();
  }

  // 4. AIRPORT SPEAKING QUEST
  setupAirportSpeaking() {
    const dialogBtn = document.getElementById('btnPlayOfficerAudio');
    if (dialogBtn) {
      dialogBtn.addEventListener('click', () => {
        this.speak("Good morning! Welcome to SkyAir. Where are you flying from today, and what is your nationality?");
      });
    }

    const speakResponses = document.querySelectorAll('.airport-speak-option');
    speakResponses.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.phrase;
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
