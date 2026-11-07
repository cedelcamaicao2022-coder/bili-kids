/**
 * ==========================================================================
 * BILIKIDS MILLIONAIRE - INTERACTIVE GAME ENGINE
 * Supports Kids Edition & Teens Edition with Anti-Repetition Question Pools
 * ==========================================================================
 */

(function () {
  'use strict';

  // PRIZE TIERS DEFINITION
  const PRIZE_TIERS = [
    { level: 1, amount: "$1,000", raw: 1000, isSafeHaven: false },
    { level: 2, amount: "$2,000", raw: 2000, isSafeHaven: false },
    { level: 3, amount: "$5,000", raw: 5000, isSafeHaven: false },
    { level: 4, amount: "$10,000", raw: 10000, isSafeHaven: true },  // Safe Haven 1
    { level: 5, amount: "$25,000", raw: 25000, isSafeHaven: false },
    { level: 6, amount: "$50,000", raw: 50000, isSafeHaven: false },
    { level: 7, amount: "$100,000", raw: 100000, isSafeHaven: true }, // Safe Haven 2
    { level: 8, amount: "$250,000", raw: 250000, isSafeHaven: false },
    { level: 9, amount: "$500,000", raw: 500000, isSafeHaven: false },
    { level: 10, amount: "$1,000,000", raw: 1000000, isSafeHaven: true, isGrand: true }
  ];

  // GAME STATE
  let category = 'kids'; // 'kids' or 'teens'
  let currentLevelIndex = 0; // 0 to 9 (corresponding to level 1 to 10)
  let currentQuestions = []; // 10 questions for this active round
  let currentQuestion = null;
  let isLocked = false;
  let audioMuted = false;

  // LIFELINES STATE
  let lifelines = {
    fiftyFifty: true,
    askBili: true,
    switchQuestion: true
  };

  // WEB AUDIO SYNTHESIZER
  let audioCtx = null;

  function initAudio() {
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

  function playTone(freq, duration, type = 'sine', gainVal = 0.2) {
    if (audioMuted) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  function playLockSound() {
    playTone(280, 0.25, 'triangle', 0.25);
    setTimeout(() => playTone(350, 0.35, 'sine', 0.2), 80);
  }

  function playCorrectSound() {
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => playTone(freq, 0.4, 'triangle', 0.25), idx * 110);
    });
  }

  function playWrongSound() {
    playTone(220, 0.4, 'sawtooth', 0.3);
    setTimeout(() => playTone(165, 0.6, 'sawtooth', 0.35), 200);
    setTimeout(() => playTone(110, 0.8, 'sawtooth', 0.4), 450);
  }

  function playLifelineSound() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => playTone(freq, 0.25, 'sine', 0.2), idx * 70);
    });
  }

  function playGrandFanfare() {
    const chords = [
      [523.25, 659.25, 783.99],
      [587.33, 739.99, 880],
      [659.25, 830.61, 987.77],
      [1046.50, 1318.51, 1567.98]
    ];
    chords.forEach((chord, step) => {
      setTimeout(() => {
        chord.forEach(f => playTone(f, 0.6, 'triangle', 0.2));
      }, step * 250);
    });
  }

  // ANTI-REPETITION POOL SELECTION
  function getSeenQuestionIds(cat) {
    const key = `bili_millionaire_seen_${cat}`;
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveSeenQuestionId(cat, id) {
    const key = `bili_millionaire_seen_${cat}`;
    try {
      const seen = getSeenQuestionIds(cat);
      if (!seen.includes(id)) {
        seen.push(id);
        localStorage.setItem(key, JSON.stringify(seen));
      }
    } catch (e) {
      console.warn("Storage error", e);
    }
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function generateRoundQuestions(cat) {
    const dataBank = cat === 'teens' ? window.MILLIONAIRE_TEENS_DATA : window.MILLIONAIRE_KIDS_DATA;
    if (!dataBank) {
      console.error("Data bank not found for category:", cat);
      return [];
    }

    let seen = getSeenQuestionIds(cat);
    const round = [];

    for (let lvl = 1; lvl <= 10; lvl++) {
      const pool = dataBank[`level_${lvl}`] || [];
      if (pool.length === 0) continue;

      // Filter pool by unseen
      let available = pool.filter(q => !seen.includes(q.id));

      // If all questions at this level have already been seen, reset seen for this level
      if (available.length === 0) {
        available = pool;
        // Clean seen for this level's items
        const poolIds = pool.map(p => p.id);
        seen = seen.filter(id => !poolIds.includes(id));
        try {
          localStorage.setItem(`bili_millionaire_seen_${cat}`, JSON.stringify(seen));
        } catch (e) {}
      }

      // Pick one randomly
      const selected = available[Math.floor(Math.random() * available.length)];
      saveSeenQuestionId(cat, selected.id);

      // Create a cloned instance with shuffled options
      const shuffledOptions = shuffleArray(selected.options);
      round.push({
        ...selected,
        level: lvl,
        options: shuffledOptions
      });
    }

    return round;
  }

  // DOM ELEMENTS
  const els = {
    categoryBadge: document.getElementById('categoryBadge'),
    returnCategoryBtn: document.getElementById('returnCategoryBtn'),
    tierPill: document.getElementById('questionTierPill'),
    questionText: document.getElementById('questionText'),
    optionsGrid: document.getElementById('optionsGrid'),
    prizeLadder: document.getElementById('prizeLadderList'),
    btn5050: document.getElementById('lifeline5050'),
    btnAskBili: document.getElementById('lifelineAskBili'),
    btnSwitch: document.getElementById('lifelineSwitch'),
    audioToggle: document.getElementById('audioToggleBtn'),
    // Modals
    biliModal: document.getElementById('biliModalOverlay'),
    biliModalHint: document.getElementById('biliModalHint'),
    biliModalClose: document.getElementById('biliModalCloseBtn'),
    victoryModal: document.getElementById('victoryModalOverlay'),
    victoryRestartBtn: document.getElementById('victoryRestartBtn'),
    gameOverModal: document.getElementById('gameOverModalOverlay'),
    gameOverTitle: document.getElementById('gameOverTitle'),
    gameOverMsg: document.getElementById('gameOverMsg'),
    gameOverRestartBtn: document.getElementById('gameOverRestartBtn'),
    confettiCanvas: document.getElementById('confettiCanvas')
  };

  // INITIALIZATION
  function initGame() {
    const params = new URLSearchParams(window.location.search);
    category = params.get('cat') === 'teens' ? 'teens' : 'kids';

    // Update Category UI
    if (els.categoryBadge) {
      els.categoryBadge.textContent = category === 'teens' ? 'TEENS CHALLENGE • A1–B2' : 'KIDS EDITION • $1,000,000';
    }
    if (els.returnCategoryBtn) {
      els.returnCategoryBtn.href = category === 'teens' ? 'teens.html' : 'kids.html';
      els.returnCategoryBtn.innerHTML = category === 'teens' ? '← Volver a Teens' : '← Volver a Kids';
    }

    // Reset Lifelines
    lifelines = { fiftyFifty: true, askBili: true, switchQuestion: true };
    updateLifelineUI();

    // Generate round questions
    currentQuestions = generateRoundQuestions(category);
    currentLevelIndex = 0;

    renderLadder();
    renderCurrentQuestion();
    setupEventListeners();
  }

  // RENDER PRIZE LADDER
  function renderLadder() {
    if (!els.prizeLadder) return;
    els.prizeLadder.innerHTML = '';

    // Render from Level 10 down to Level 1 (top down)
    for (let i = PRIZE_TIERS.length - 1; i >= 0; i--) {
      const tier = PRIZE_TIERS[i];
      const stepEl = document.createElement('div');
      stepEl.className = 'ladder-step';
      if (tier.isSafeHaven) stepEl.classList.add('safe-haven');
      if (tier.isGrand) stepEl.classList.add('grand-prize');

      if (i === currentLevelIndex) {
        stepEl.classList.add('active');
      } else if (i < currentLevelIndex) {
        stepEl.classList.add('completed');
      }

      stepEl.innerHTML = `
        <span class="step-number">${tier.level}</span>
        <span class="step-amount">${tier.amount}</span>
      `;
      els.prizeLadder.appendChild(stepEl);
    }
  }

  // RENDER CURRENT QUESTION
  function renderCurrentQuestion() {
    isLocked = false;
    currentQuestion = currentQuestions[currentLevelIndex];
    if (!currentQuestion) return;

    const currentTier = PRIZE_TIERS[currentLevelIndex];

    // Update Header Pill
    let tierText = `LEVEL ${currentTier.level} OF 10 • ${currentTier.amount}`;
    if (currentTier.isGrand) tierText += ' • GRAND FINALE 🏆';
    else if (currentTier.isSafeHaven) tierText += ' • SAFE HAVEN 🛡️';
    if (els.tierPill) els.tierPill.textContent = tierText;

    // Update Question
    if (els.questionText) {
      els.questionText.textContent = currentQuestion.question;
    }

    // Update Options Grid
    if (els.optionsGrid) {
      els.optionsGrid.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      // Defensive guard: Ensure options are strictly strings and capped at exactly 4 (A, B, C, D)
      const safeOptions = (currentQuestion.options || [])
        .filter(opt => typeof opt === 'string')
        .slice(0, 4);

      safeOptions.forEach((optText, idx) => {
        const letter = letters[idx] || 'A';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-hex-btn';
        btn.dataset.option = optText;
        btn.dataset.letter = letter;

        btn.innerHTML = `
          <span class="option-letter">${letter}:</span>
          <span class="option-text-content">${optText}</span>
        `;

        btn.addEventListener('click', () => handleOptionSelect(btn, optText));
        els.optionsGrid.appendChild(btn);
      });
    }

    renderLadder();
  }

  // OPTION SELECT HANDLER WITH DRAMATIC SUSPENSE
  function handleOptionSelect(btn, selectedText) {
    if (isLocked) return;
    isLocked = true;
    initAudio();

    // Lock option visually and play sound
    btn.classList.add('locked');
    playLockSound();

    // Disable all options while evaluating
    const allBtns = els.optionsGrid.querySelectorAll('.option-hex-btn');
    allBtns.forEach(b => b.disabled = true);

    // Suspense delay (1.4 seconds like real TV show)
    setTimeout(() => {
      btn.classList.remove('locked');
      const isCorrect = selectedText === currentQuestion.correct;

      if (isCorrect) {
        btn.classList.add('correct');
        playCorrectSound();

        setTimeout(() => {
          advanceToNextLevel();
        }, 1600);
      } else {
        btn.classList.add('wrong');
        playWrongSound();

        // Reveal the correct option in green
        allBtns.forEach(b => {
          if (b.dataset.option === currentQuestion.correct) {
            b.classList.add('correct');
          }
        });

        setTimeout(() => {
          handleGameOver();
        }, 2000);
      }
    }, 1400);
  }

  // ADVANCE OR WIN
  function advanceToNextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex >= PRIZE_TIERS.length) {
      handleGrandVictory();
    } else {
      renderCurrentQuestion();
    }
  }

  // SAFE HAVEN CALCULATION & GAME OVER
  function getGuaranteedPrize() {
    let prize = "$0";
    for (let i = currentLevelIndex - 1; i >= 0; i--) {
      if (PRIZE_TIERS[i].isSafeHaven) {
        return PRIZE_TIERS[i].amount;
      }
    }
    return prize;
  }

  function handleGameOver() {
    const guaranteed = getGuaranteedPrize();
    if (els.gameOverTitle) els.gameOverTitle.textContent = "GAME OVER";
    if (els.gameOverMsg) {
      els.gameOverMsg.innerHTML = `
        You played an impressive game!<br>
        You walk away with guaranteed safe haven earnings:
        <div style="font-size: 2.2rem; font-weight: 900; color: #fbbf24; margin: 16px 0; font-family: monospace;">
          ${guaranteed}
        </div>
      `;
    }
    if (els.gameOverModal) {
      els.gameOverModal.classList.add('open');
    }
  }

  function handleGrandVictory() {
    playGrandFanfare();
    launchConfetti();
    if (els.victoryModal) {
      els.victoryModal.classList.add('open');
    }
  }

  // LIFELINES IMPLEMENTATION
  function updateLifelineUI() {
    if (els.btn5050) {
      els.btn5050.disabled = !lifelines.fiftyFifty;
      if (!lifelines.fiftyFifty) els.btn5050.classList.add('used');
      else els.btn5050.classList.remove('used');
    }
    if (els.btnAskBili) {
      els.btnAskBili.disabled = !lifelines.askBili;
      if (!lifelines.askBili) els.btnAskBili.classList.add('used');
      else els.btnAskBili.classList.remove('used');
    }
    if (els.btnSwitch) {
      els.btnSwitch.disabled = !lifelines.switchQuestion;
      if (!lifelines.switchQuestion) els.btnSwitch.classList.add('used');
      else els.btnSwitch.classList.remove('used');
    }
  }

  function useFiftyFifty() {
    if (!lifelines.fiftyFifty || isLocked || !currentQuestion) return;
    lifelines.fiftyFifty = false;
    updateLifelineUI();
    playLifelineSound();

    const correctText = currentQuestion.correct;
    const optionBtns = Array.from(els.optionsGrid.querySelectorAll('.option-hex-btn'));
    const wrongBtns = optionBtns.filter(b => b.dataset.option !== correctText);

    // Pick 2 random wrong options to eliminate
    const shuffledWrong = shuffleArray(wrongBtns);
    const toEliminate = shuffledWrong.slice(0, 2);

    toEliminate.forEach(btn => {
      btn.classList.add('eliminated');
      btn.disabled = true;
    });
  }

  function useAskBili() {
    if (!lifelines.askBili || isLocked || !currentQuestion) return;
    lifelines.askBili = false;
    updateLifelineUI();
    playLifelineSound();

    const hint = currentQuestion.hint || "Read the question very carefully and eliminate the options that sound least natural!";
    if (els.biliModalHint) {
      els.biliModalHint.textContent = `"${hint}"`;
    }
    if (els.biliModal) {
      els.biliModal.classList.add('open');
    }
  }

  function useSwitchQuestion() {
    if (!lifelines.switchQuestion || isLocked || !currentQuestion) return;
    lifelines.switchQuestion = false;
    updateLifelineUI();
    playLifelineSound();

    const dataBank = category === 'teens' ? window.MILLIONAIRE_TEENS_DATA : window.MILLIONAIRE_KIDS_DATA;
    const pool = dataBank[`level_${currentQuestion.level}`] || [];

    // Find a question in this level pool that is not the current one
    const alternates = pool.filter(q => q.id !== currentQuestion.id);
    if (alternates.length > 0) {
      const newQ = alternates[Math.floor(Math.random() * alternates.length)];
      currentQuestion = {
        ...newQ,
        level: currentQuestion.level,
        options: shuffleArray(newQ.options)
      };
      currentQuestions[currentLevelIndex] = currentQuestion;
      renderCurrentQuestion();
    }
  }

  // CONFETTI ANIMATION
  function launchConfetti() {
    if (!els.confettiCanvas) return;
    const canvas = els.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#f59e0b', '#fbbf24', '#38bdf8', '#34d399', '#f43f5e', '#a855f7', '#ffffff'];

    for (let i = 0; i < 180; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        w: Math.random() * 10 + 6,
        h: Math.random() * 14 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        velY: Math.random() * 3 + 2,
        velX: (Math.random() - 0.5) * 2,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 6
      });
    }

    let frame = 0;
    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.velY;
        p.x += p.velX;
        p.rot += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });

      frame++;
      if (frame < 400) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(renderConfetti);
  }

  // EVENT LISTENERS
  function setupEventListeners() {
    if (els.btn5050) els.btn5050.addEventListener('click', useFiftyFifty);
    if (els.btnAskBili) els.btnAskBili.addEventListener('click', useAskBili);
    if (els.btnSwitch) els.btnSwitch.addEventListener('click', useSwitchQuestion);

    if (els.audioToggle) {
      els.audioToggle.addEventListener('click', () => {
        audioMuted = !audioMuted;
        els.audioToggle.textContent = audioMuted ? '🔇' : '🔊';
        els.audioToggle.title = audioMuted ? 'Audio Silenciado' : 'Audio Activado';
      });
    }

    if (els.biliModalClose) {
      els.biliModalClose.addEventListener('click', () => {
        if (els.biliModal) els.biliModal.classList.remove('open');
      });
    }

    // Restart Handlers
    function restartGame() {
      if (els.victoryModal) els.victoryModal.classList.remove('open');
      if (els.gameOverModal) els.gameOverModal.classList.remove('open');
      initGame();
    }

    if (els.victoryRestartBtn) els.victoryRestartBtn.addEventListener('click', restartGame);
    if (els.gameOverRestartBtn) els.gameOverRestartBtn.addEventListener('click', restartGame);

    window.addEventListener('resize', () => {
      if (els.confettiCanvas) {
        els.confettiCanvas.width = window.innerWidth;
        els.confettiCanvas.height = window.innerHeight;
      }
    });
  }

  // Bootstrap when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGame);
  } else {
    initGame();
  }
})();
