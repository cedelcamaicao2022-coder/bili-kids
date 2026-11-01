/**
 * Bilikids Toddlers Interactive Academy Engine
 * Age-appropriate pedagogy (6-8 years old):
 * Intermediate between sensory Babies and Cambridge Kids.
 * Interactive auditory matching, memory pairs, sequencing, and phonics word builders.
 */

const TODDLERS_UNITS = [
  {
    id: 1,
    title: "Happy Farm Animals",
    icon: "🐮",
    tag: "Unit 1 • Animals & Sounds",
    desc: "Meet friendly farm animals, listen to their sounds in English, and match each animal with its name!",
    items: [
      { name: "Cow", sound: "Moo moo!", icon: "🐮", fact: "Cows give us fresh healthy milk.", audioWord: "cow" },
      { name: "Sheep", sound: "Baa baa!", icon: "🐑", fact: "Sheep have soft, warm wool.", audioWord: "sheep" },
      { name: "Pig", sound: "Oink oink!", icon: "🐷", fact: "Pigs love to roll in the mud to stay cool.", audioWord: "pig" },
      { name: "Horse", sound: "Neigh neigh!", icon: "🐴", fact: "Horses run very fast across green fields.", audioWord: "horse" },
      { name: "Duck", sound: "Quack quack!", icon: "🦆", fact: "Ducks love swimming in the farm pond.", audioWord: "duck" },
      { name: "Rooster", sound: "Cock-a-doodle-doo!", icon: "🐓", fact: "Roosters wake up the farm at sunrise.", audioWord: "rooster" }
    ],
    quiz: [
      { question: "Listen: Who says 'Moo moo'?", answer: "Cow", icon: "🐮" },
      { question: "Listen: Who says 'Quack quack'?", answer: "Duck", icon: "🦆" },
      { question: "Listen: Who gives us warm wool?", answer: "Sheep", icon: "🐑" }
    ]
  },
  {
    id: 2,
    title: "My Magical House",
    icon: "🏠",
    tag: "Unit 2 • House & Rooms",
    desc: "Explore the rooms of Luna's house: Kitchen, Living Room, Bedroom, and Bathroom!",
    items: [
      { name: "Kitchen", icon: "🍳", fact: "Where we prepare delicious meals and wash dishes.", audioWord: "kitchen" },
      { name: "Bedroom", icon: "🛏️", fact: "Where we sleep with our favorite teddy bear.", audioWord: "bedroom" },
      { name: "Living Room", icon: "🛋️", fact: "Where we watch movies and relax on the sofa.", audioWord: "living room" },
      { name: "Bathroom", icon: "🛁", fact: "Where we brush our teeth and wash our hands with soap.", audioWord: "bathroom" },
      { name: "Fridge", icon: "🧊", fact: "Keeps milk, cheese, and fruits nice and cold.", audioWord: "fridge" },
      { name: "Lamp", icon: "💡", fact: "Gives us bright light to read bedtime stories.", audioWord: "lamp" }
    ],
    quiz: [
      { question: "Where do you brush your teeth and wash hands?", answer: "Bathroom", icon: "🛁" },
      { question: "Where do you cook soup and keep the fridge?", answer: "Kitchen", icon: "🍳" }
    ]
  },
  {
    id: 3,
    title: "Colors & Rainbow Splash",
    icon: "🎨",
    tag: "Unit 3 • Colors & Magic",
    desc: "Discover rainbow colors, mix primary colors to create new shades, and pop color balloons!",
    items: [
      { name: "Red", icon: "🔴", fact: "Like ripe apples and juicy strawberries!", audioWord: "red" },
      { name: "Blue", icon: "🔵", fact: "Like the ocean waves and the clear sky!", audioWord: "blue" },
      { name: "Yellow", icon: "🟡", fact: "Like the warm sun and sweet bananas!", audioWord: "yellow" },
      { name: "Green", icon: "🟢", fact: "Blue + Yellow makes Green, like tree leaves!", audioWord: "green" },
      { name: "Orange", icon: "🟠", fact: "Red + Yellow makes Orange, like pumpkins!", audioWord: "orange" },
      { name: "Purple", icon: "🟣", fact: "Red + Blue makes Purple, like sweet grapes!", audioWord: "purple" }
    ],
    quiz: [
      { question: "What color do you get when you mix Red and Yellow?", answer: "Orange", icon: "🟠" },
      { question: "What color do you get when you mix Blue and Yellow?", answer: "Green", icon: "🟢" }
    ]
  },
  {
    id: 4,
    title: "Numbers & 123 Counting",
    icon: "🔢",
    tag: "Unit 4 • Numbers 1 to 20",
    desc: "Count playful stars, apples, and musical beats from 1 all the way to 20!",
    items: [
      { name: "One (1)", icon: "⭐", fact: "One bright star in the evening sky.", audioWord: "one" },
      { name: "Two (2)", icon: "⭐⭐", fact: "Two friendly eyes to see the world.", audioWord: "two" },
      { name: "Three (3)", icon: "⭐⭐⭐", fact: "Three sides on a triangle.", audioWord: "three" },
      { name: "Four (4)", icon: "⭐⭐⭐⭐", fact: "Four paws on a friendly puppy.", audioWord: "four" },
      { name: "Five (5)", icon: "⭐⭐⭐⭐⭐", fact: "Five fingers on each hand!", audioWord: "five" },
      { name: "Ten (10)", icon: "🔟", fact: "Ten toes to wiggle and run!", audioWord: "ten" }
    ],
    quiz: [
      { question: "How many fingers are on one hand?", answer: "Five (5)", icon: "🖐️" },
      { question: "How many sides does a triangle have?", answer: "Three (3)", icon: "🔺" }
    ]
  },
  {
    id: 5,
    title: "Daily Routines & Superpowers",
    icon: "⏰",
    tag: "Unit 5 • Healthy Habits",
    desc: "Master your daily superpowers: Wash hands, brush teeth, dress up, and get ready for school!",
    items: [
      { name: "Wash Hands", icon: "🧼", fact: "Use soap and warm water for 20 seconds to wash away germs!", audioWord: "wash hands" },
      { name: "Brush Teeth", icon: "🪥", fact: "Brush your teeth in circles after breakfast and before bed.", audioWord: "brush teeth" },
      { name: "Put on Clothes", icon: "👕", fact: "Put on your shirt, pants, and socks all by yourself!", audioWord: "put on clothes" },
      { name: "Eat Breakfast", icon: "🥣", fact: "A healthy bowl of cereal, fruit, and milk gives you super energy.", audioWord: "eat breakfast" },
      { name: "Make Bed", icon: "🛏️", fact: "Straighten your pillow and pull up the blanket.", audioWord: "make bed" },
      { name: "Go to School", icon: "🎒", fact: "Pack your backpack and say 'Good morning teacher!'", audioWord: "go to school" }
    ],
    quiz: [
      { question: "What do you use to clean your hands with warm water?", answer: "Soap", icon: "🧼" },
      { question: "What do you use to brush your teeth in circles?", answer: "Toothbrush", icon: "🪥" }
    ]
  },
  {
    id: 6,
    title: "My Family & Big Feelings",
    icon: "👨‍👩‍👧",
    tag: "Unit 6 • Family & Feelings",
    desc: "Celebrate your family members and learn how to name emotions like happy, calm, and proud!",
    items: [
      { name: "Mom & Dad", icon: "👨‍👩‍👦", fact: "Give warm hugs and care for us every day.", audioWord: "mom and dad" },
      { name: "Brother & Sister", icon: "👧👦", fact: "Play games, share toys, and tell funny jokes.", audioWord: "brother and sister" },
      { name: "Happy", icon: "😊", fact: "Smiling from ear to ear when something wonderful happens!", audioWord: "happy" },
      { name: "Calm", icon: "😌", fact: "Taking deep breaths and feeling peaceful inside.", audioWord: "calm" },
      { name: "Curious", icon: "🧐", fact: "Asking questions and wanting to discover new secrets!", audioWord: "curious" },
      { name: "Excited", icon: "🤩", fact: "Jumping for joy when we go on a big adventure!", audioWord: "excited" }
    ],
    quiz: [
      { question: "How do you feel when you smile and jump for joy?", answer: "Happy", icon: "😊" },
      { question: "How do you feel when you take deep slow breaths?", answer: "Calm", icon: "😌" }
    ]
  }
];

class ToddlersUnitsEngine {
  constructor() {
    this.units = TODDLERS_UNITS;
    this.currentUnitIndex = 0;
    this.stars = 100;
    this.audioCtx = null;
    this.soundEnabled = true;
  }

  init() {
    this.setupAudio();
    this.renderNavPills();
    this.loadUnit(0);
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
      gain.gain.setValueAtTime(0.09, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playSuccess() {
    [440, 554.37, 659.25, 880].forEach((f, i) => setTimeout(() => this.playTone(f, 0.12, 'triangle'), i * 70));
  }

  playError() {
    this.playTone(200, 0.2, 'sawtooth');
  }

  speak(text) {
    if (typeof playStudioOrSynthAudio === 'function') {
      playStudioOrSynthAudio(text, 'kid');
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.88;
      window.speechSynthesis.speak(u);
    }
  }

  addStars(pts) {
    this.stars += pts;
    const el = document.getElementById('toddlerScoreDisplay');
    if (el) el.textContent = `${this.stars} ⭐`;
  }

  renderNavPills() {
    const nav = document.getElementById('toddlerUnitsNav');
    if (!nav) return;

    nav.innerHTML = this.units.map((u, i) => `
      <button class="toddler-nav-pill ${i === this.currentUnitIndex ? 'active' : ''}" data-idx="${i}">
        <span>${u.icon}</span>
        <span>Unit ${u.id}: ${u.title}</span>
      </button>
    `).join('');

    nav.querySelectorAll('.toddler-nav-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        this.loadUnit(idx);
      });
    });
  }

  loadUnit(index) {
    this.currentUnitIndex = index;
    const unit = this.units[index];

    // Highlight pill
    const pills = document.querySelectorAll('.toddler-nav-pill');
    pills.forEach((p, i) => p.classList.toggle('active', i === index));

    // Header info
    document.getElementById('toddlerUnitTag').textContent = unit.tag;
    document.getElementById('toddlerUnitTitle').textContent = `${unit.icon} ${unit.title}`;
    document.getElementById('toddlerUnitDesc').textContent = unit.desc;

    // Render interactive cards
    const workspace = document.getElementById('toddlerWorkspace');
    if (!workspace) return;

    const cardsHtml = unit.items.map(item => `
      <div class="toddler-tile-card" data-name="${item.name}">
        <span class="toddler-tile-icon">${item.icon}</span>
        <span class="toddler-tile-name">${item.name}</span>
        <span class="toddler-tile-sub">${item.fact}</span>
        <button class="toddler-btn-listen" style="padding:6px 14px; font-size:0.85rem;" data-say="${item.name}. ${item.fact}">
          🔊 Listen & Speak
        </button>
      </div>
    `).join('');

    // Quiz Box
    const quizItem = unit.quiz[0];
    const quizOptions = [quizItem.answer, ...unit.items.filter(x => x.name !== quizItem.answer).slice(0, 2).map(x => x.name)].sort(() => Math.random() - 0.5);

    workspace.innerHTML = `
      <!-- Sound Explorer Mission Banner -->
      <div class="toddler-prompt-banner">
        <div>
          <span style="font-size:0.8rem; font-weight:800; color:#3b82f6; text-transform:uppercase;">Explorer Challenge</span>
          <div class="toddler-prompt-text">${quizItem.question}</div>
        </div>
        <div style="display:flex; gap:8px;">
          ${quizOptions.map(opt => `
            <button class="toddler-nav-pill quiz-answer-btn" data-val="${opt}" style="background:#ffffff; font-size:0.9rem;">
              ${opt}
            </button>
          `).join('')}
        </div>
      </div>
      <div id="toddlerQuizFeedback" style="display:none; margin-bottom:1rem; padding:10px 16px; border-radius:14px; font-weight:700;"></div>

      <!-- Main Items Grid -->
      <div class="toddler-tiles-grid">
        ${cardsHtml}
      </div>
    `;

    // Listen buttons
    workspace.querySelectorAll('.toddler-btn-listen').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        this.speak(b.dataset.say);
        this.playSuccess();
        this.addStars(10);
      });
    });

    // Card tap
    workspace.querySelectorAll('.toddler-tile-card').forEach(c => {
      c.addEventListener('click', () => {
        const name = c.dataset.name;
        this.speak(name);
        this.playSuccess();
        this.addStars(5);
        c.classList.add('correct');
        setTimeout(() => c.classList.remove('correct'), 800);
      });
    });

    // Quiz options click
    workspace.querySelectorAll('.quiz-answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isRight = btn.dataset.val === quizItem.answer;
        const fb = document.getElementById('toddlerQuizFeedback');
        fb.style.display = 'block';

        if (isRight) {
          btn.style.background = '#dcfce7';
          btn.style.borderColor = '#22c55e';
          this.playSuccess();
          this.addStars(25);
          this.speak(`Hooray! That is correct! ${quizItem.answer}!`);
          fb.style.background = '#dcfce7';
          fb.style.color = '#15803d';
          fb.textContent = `🎉 Hooray! ${quizItem.answer} is right! (+25 ⭐)`;
        } else {
          btn.style.background = '#fee2e2';
          btn.style.borderColor = '#ef4444';
          this.playError();
          fb.style.background = '#fee2e2';
          fb.style.color = '#991b1b';
          fb.textContent = `Listen carefully and try again!`;
        }
      });
    });
  }
}
