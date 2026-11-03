/**
 * Bilikids Kids Club - Unit 12: Fabulous Food Engine
 * Cambridge A2 English: Food, Recipes, Restaurant Roleplay, & Healthy Nutrition.
 */

class KidsUnit12Engine {
  constructor() {
    this.stars = 250;
    this.soundEnabled = true;
    this.audioCtx = null;
  }

  init() {
    this.setupAudio();
    this.updateStars();
    this.setupPizzaKitchen();
    this.setupSupermarketSorter();
    this.setupRestaurantDialogue();
    this.setupFoodCriticStudio();
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

  // 1. PIZZA CHEF KITCHEN
  setupPizzaKitchen() {
    const ingredients = [
      { name: "Mozzarella Cheese", icon: "🧀", role: "dairy" },
      { name: "Ripe Red Tomatoes", icon: "🍅", role: "produce" },
      { name: "Fresh Mushrooms", icon: "🍄", role: "produce" },
      { name: "Green Olives", icon: "🫒", role: "topping" },
      { name: "Crispy Pepperoni", icon: "🍕", role: "meat" },
      { name: "Sweet Pineapple", icon: "🍍", role: "fruit" }
    ];

    const prepGrid = document.getElementById('pizzaIngredientsGrid');
    if (!prepGrid) return;

    prepGrid.innerHTML = ingredients.map(ing => `
      <button class="kids-tile-btn pizza-ingredient-btn" data-name="${ing.name}">
        <span class="kids-tile-icon">${ing.icon}</span>
        <span class="kids-tile-name">${ing.name}</span>
        <span class="kids-tile-sub">Tap to add to pizza</span>
      </button>
    `).join('');

    const pizzaPlate = document.getElementById('pizzaPlateVisual');
    const orderPrompt = document.getElementById('chefOrderPrompt');
    if (orderPrompt) {
      orderPrompt.textContent = "Chef Barnaby's Order: Please prepare a pizza with Mozzarella Cheese, Tomatoes, and Mushrooms!";
    }

    let selectedIngredients = [];
    let recipeRewarded = false;
    prepGrid.querySelectorAll('.pizza-ingredient-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        btn.classList.toggle('correct');
        if (selectedIngredients.includes(name)) {
          selectedIngredients = selectedIngredients.filter(x => x !== name);
        } else {
          selectedIngredients.push(name);
          this.speak(`Added ${name}!`);
          this.playSuccess();
        }

        if (pizzaPlate) {
          pizzaPlate.textContent = selectedIngredients.length > 0 
            ? `Pizza Baking: ${selectedIngredients.join(' • ')}`
            : "Empty Pizza Crust ready for toppings!";
        }

        if (!recipeRewarded && selectedIngredients.includes("Mozzarella Cheese") && selectedIngredients.includes("Ripe Red Tomatoes") && selectedIngredients.includes("Fresh Mushrooms")) {
          recipeRewarded = true;
          this.speak("Delicious! Your custom pizza is baked to perfection!");
          this.addStars(40);
        }
      });
    });
  }

  // 2. SUPERMARKET BASKET SORTER
  setupSupermarketSorter() {
    const items = [
      { name: "Fresh Milk", cat: "dairy", icon: "🥛" },
      { name: "Crisp Green Apples", cat: "produce", icon: "🍏" },
      { name: "Warm Baguette Bread", cat: "bakery", icon: "🥖" },
      { name: "Greek Yogurt", cat: "dairy", icon: "🍶" },
      { name: "Fresh Carrots", cat: "produce", icon: "🥕" },
      { name: "Chocolate Croissant", cat: "bakery", icon: "🥐" }
    ];

    let currentItemIdx = 0;
    const render = () => {
      if (currentItemIdx >= items.length) currentItemIdx = 0;
      const it = items[currentItemIdx];
      const targetEl = document.getElementById('supermarketItemDisplay');
      const fb = document.getElementById('supermarketFeedback');
      if (targetEl) targetEl.innerHTML = `<span style="font-size:3rem;">${it.icon}</span><br><strong>${it.name}</strong>`;
      if (fb) fb.style.display = 'none';
    };

    render();

    const handleSort = (chosenCat) => {
      const it = items[currentItemIdx];
      const fb = document.getElementById('supermarketFeedback');
      if (chosenCat === it.cat) {
        this.playSuccess();
        this.addStars(20);
        this.speak(`Correct! ${it.name} belongs to the ${chosenCat} section.`);
        if (fb) {
          fb.className = 'kids-toast-feedback good';
          fb.textContent = `⭐ Correct section! (+20 ⭐)`;
          fb.style.display = 'block';
        }
        setTimeout(() => {
          currentItemIdx++;
          render();
        }, 1200);
      } else {
        this.playError();
        if (fb) {
          fb.className = 'kids-toast-feedback bad';
          fb.textContent = `Try another section in the supermarket!`;
          fb.style.display = 'block';
        }
      }
    };

    const bDairy = document.getElementById('btnSortDairy');
    const bProduce = document.getElementById('btnSortProduce');
    const bBakery = document.getElementById('btnSortBakery');
    if (bDairy) bDairy.addEventListener('click', () => handleSort('dairy'));
    if (bProduce) bProduce.addEventListener('click', () => handleSort('produce'));
    if (bBakery) bBakery.addEventListener('click', () => handleSort('bakery'));
  }

  // 3. RESTAURANT ORDER DIALOGUE
  setupRestaurantDialogue() {
    const dialogAudioBtn = document.getElementById('btnHearWaiterAudio');
    if (dialogAudioBtn) {
      dialogAudioBtn.addEventListener('click', () => {
        this.speak("Good afternoon! Welcome to Bilikids Bistro. Are you ready to order, or would you like to hear today's lunch specials?");
      });
    }

    const customerPhrases = [
      "Could we please start with two bowls of hot vegetable soup?",
      "For my main course, I would love the grilled salmon with roasted potatoes.",
      "And could we please have a large jug of fresh lemonade for the table?"
    ];
    const orderPrompts = [
      "Ask politely for two bowls of hot vegetable soup.",
      "Order grilled salmon with roasted potatoes as your main course.",
      "Ask politely for a large jug of fresh lemonade to share."
    ];

    const container = document.getElementById('restaurantResponsesGrid');
    if (!container) return;

    container.innerHTML = customerPhrases.map((ph, index) => `
      <div class="kids-tile-btn" data-phrase="${ph}" style="flex-direction:row; text-align:left; justify-content:flex-start;">
        <span style="font-size:1.6rem;">🍽️</span>
        <div>
          <strong style="font-size:1.02rem; color:#0f172a; display:block;">${orderPrompts[index]}</strong>
          <span style="font-size:0.8rem; color:#b45309;">Use a polite request. Listen to the model only if you need help.</span><br>
          <button type="button" class="kids-audio-play-btn restaurant-model-btn">🔊 Hear a model</button>
          <button type="button" class="kids-audio-play-btn restaurant-record-btn">🎙️ Record my order</button>
          <div class="restaurant-speaking-feedback" role="status" aria-live="polite" style="margin-top:8px;"></div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.kids-tile-btn').forEach(card => {
      const phrase = card.dataset.phrase;
      const modelBtn = card.querySelector('.restaurant-model-btn');
      const recordBtn = card.querySelector('.restaurant-record-btn');
      const feedback = card.querySelector('.restaurant-speaking-feedback');
      modelBtn.addEventListener('click', () => this.speak(phrase));
      recordBtn.addEventListener('click', () => this.recognizeRestaurantOrder(phrase, feedback, recordBtn, card));
    });
  }

  recognizeRestaurantOrder(expected, feedback, recordBtn, card) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      feedback.textContent = 'Not evaluated: this browser cannot check speech. Listen to the model and practise aloud with an adult.';
      recordBtn.disabled = true;
      return;
    }
    recordBtn.disabled = true;
    feedback.textContent = 'Listening… Place your order now.';
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;
      const words = value => value.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(Boolean);
      const targetWords = words(expected);
      const heard = new Set(words(transcript));
      const matches = targetWords.filter(word => heard.has(word)).length;
      const passed = matches >= Math.min(3, targetWords.length) && matches / targetWords.length >= 0.6;
      if (passed) {
        feedback.textContent = `Order recognized: “${transcript}”. This checks recognized words, not pronunciation quality.`;
        if (card.dataset.scored !== 'true') {
          card.dataset.scored = 'true';
          card.classList.add('correct');
          this.addStars(30);
          this.playSuccess();
        }
      } else {
        feedback.textContent = `Not evaluated as a complete order: “${transcript}”. Listen to the model and try again.`;
        recordBtn.disabled = false;
      }
    };
    recognition.onerror = () => {
      feedback.textContent = 'Not evaluated. The browser could not recognize the response; listen to the model and try again.';
      recordBtn.disabled = false;
    };
    recognition.onend = () => { if (feedback.textContent.startsWith('Listening')) recordBtn.disabled = false; };
    try { recognition.start(); } catch (error) {
      feedback.textContent = 'Not evaluated. The microphone could not start; listen to the model and practise with an adult.';
      recordBtn.disabled = false;
    }
  }

  // 4. FOOD CRITIC STUDIO
  setupFoodCriticStudio() {
    const adjectives = [
      { word: "DELICIOUS", desc: "Having an exceptionally pleasant taste.", icon: "😋" },
      { word: "CRUNCHY", desc: "Making a sharp, crisp sound when bitten.", icon: "🥨" },
      { word: "SPICY", desc: "Flavored with piquant peppers or herbs.", icon: "🌶️" },
      { word: "NUTRITIOUS", desc: "Providing essential vitamins and energy for healthy growth.", icon: "🥗" }
    ];

    const container = document.getElementById('foodCriticCardsGrid');
    if (!container) return;

    container.innerHTML = adjectives.map(adj => `
      <div class="kids-tile-btn" data-word="${adj.word}">
        <span class="kids-tile-icon">${adj.icon}</span>
        <strong style="font-size:1.2rem; color:#b45309;">${adj.word}</strong>
        <p style="font-size:0.85rem; color:#475569; margin:4px 0 0;">${adj.desc}</p>
        <button class="kids-audio-play-btn" data-text="${adj.word}. ${adj.desc}">
          🔊 Pronounce
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.kids-audio-play-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.speak(btn.dataset.text);
        this.playSuccess();
        this.addStars(20);
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
