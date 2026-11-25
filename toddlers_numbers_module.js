/**
 * Bilikids Adventure - Toddlers Unit 1: Numbers 1-5 Studio Module
 * Activities:
 * 1. Meet Numbers 1-5 (Interactive cards with HD images + unified Leo/Bili audio)
 * 2. Count & Match (Proportional HD image groups -> matching number)
 * 3. Trace Numbers 1-5 (Real HTML5 Canvas finger/stylus/mouse tracing)
 * 4. Falling Numbers Game (Gentle falling bubbles for 1, 2, 3, 4, 5)
 */
(function () {
  const NUMBERS_DATA = [
    { num: 1, en: 'One', es: 'Uno', color: '#ef4444', img: 'assets/toddlers_units/school_objects/backpack.jpeg', label: 'Backpack' },
    { num: 2, en: 'Two', es: 'Dos', color: '#3b82f6', img: 'assets/toddlers_units/school_objects/book.jpeg', label: 'Books' },
    { num: 3, en: 'Three', es: 'Tres', color: '#eab308', img: 'assets/toddlers_units/school_objects/crayons.jpeg', label: 'Crayons' },
    { num: 4, en: 'Four', es: 'Cuatro', color: '#22c55e', img: 'assets/toddlers_units/school_objects/eraser.jpeg', label: 'Erasers' },
    { num: 5, en: 'Five', es: 'Cinco', color: '#a855f7', img: 'assets/toddlers_units/school_objects/ruler.jpeg', label: 'Rulers' }
  ];

  const COUNT_CHALLENGES = [
    { num: 3, img: 'assets/toddlers_units/school_objects/book.jpeg', name: 'Books' },
    { num: 1, img: 'assets/toddlers_units/school_objects/lunch_box.jpeg', name: 'Lunch box' },
    { num: 4, img: 'assets/toddlers_units/school_objects/scissors.jpeg', name: 'Scissors' },
    { num: 2, img: 'assets/toddlers_units/school_objects/water_bottle.jpeg', name: 'Water bottles' },
    { num: 5, img: 'assets/toddlers_units/school_objects/calculator.jpeg', name: 'Calculators' }
  ];

  let activeSubTab = 'meet';
  let matchIndex = 0;
  let matchScore = 0;
  let traceNum = 1;
  let traceColor = '#3b82f6';
  let fallingRafId = null;

  function stopFallingGameLoop() {
    if (fallingRafId) {
      cancelAnimationFrame(fallingRafId);
      fallingRafId = null;
    }
  }

  function renderProportionalImages(count, imgSrc, altText, imgClass = 'num-hd-item-img') {
    const items = Array.from({ length: count }, (_, i) =>
      `<img src="${imgSrc}" alt="${altText} ${i + 1}" class="${imgClass}">`
    ).join('');
    return `<div class="num-items-cluster cluster-count-${count}">${items}</div>`;
  }

  window.renderToddlersNumbersStudio = function (container, engine) {
    stopFallingGameLoop();

    const subTabs = [
      { id: 'meet', label: '1. 🔢 Números 1–5' },
      { id: 'match', label: '2. 🧩 Cantidad y Número' },
      { id: 'trace', label: '3. ✍️ Trazar Números' },
      { id: 'falling', label: '4. 🌟 Atrapa los Números' }
    ];

    container.innerHTML = `
      <div class="numbers-studio-wrap">
        <div style="margin-bottom: 1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <h2 style="margin:0; font-size:1.45rem; color:#78350f;">🔢 Unit 1 • Numbers 1 to 5</h2>
            <p style="margin:4px 0 0; color:#6b7280; font-size:0.95rem;">Escucha los números del 1 al 5, relaciona cantidades, traza con el dedo o lápiz y atrapa los números que caen.</p>
          </div>
          <a href="toddlers.html" class="toddler-nav-pill" style="text-decoration:none; font-size:0.88rem;">
            📚 Regresar a la Biblioteca
          </a>
        </div>

        <div class="colors-subtabs-bar">
          ${subTabs.map(t => `
            <button type="button" class="colors-subtab-btn ${activeSubTab === t.id ? 'active' : ''}" data-subtab="${t.id}">
              ${t.label}
            </button>
          `).join('')}
        </div>

        <div id="numbersStudioBody"></div>
      </div>
    `;

    container.querySelectorAll('.colors-subtab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeSubTab = btn.dataset.subtab;
        window.renderToddlersNumbersStudio(container, engine);
      });
    });

    const body = container.querySelector('#numbersStudioBody');
    if (activeSubTab === 'meet') renderMeetNumbers(body, engine);
    else if (activeSubTab === 'match') renderCountMatch(body, engine);
    else if (activeSubTab === 'trace') renderTraceNumber(body, engine);
    else if (activeSubTab === 'falling') renderFallingNumbersGame(body, engine);
  };

  /* --------------------------------------------------------------------------
     ACTIVIDAD 1 – TARJETAS INTERACTIVAS DE NÚMEROS (1 AL 5)
     -------------------------------------------------------------------------- */
  function renderMeetNumbers(body, engine) {
    body.innerHTML = `
      <div class="numbers-meet-grid">
        ${NUMBERS_DATA.map(n => `
          <div class="number-meet-card" style="border-color:${n.color};" data-en="${n.en}">
            <div class="number-big-badge" style="background:${n.color};">${n.num}</div>
            <h3 class="number-en-title" style="color:${n.color};">${n.en}</h3>
            <div class="number-es-sub">${n.es}</div>
            <div class="number-card-visual-box">
              ${renderProportionalImages(n.num, n.img, n.label, 'num-card-mini-img')}
            </div>
            <button type="button" class="explore-audio-btn number-audio-btn" data-en="${n.en}">
              🔊 Listen "${n.en}"
            </button>
          </div>
        `).join('')}
      </div>
    `;

    body.querySelectorAll('.number-meet-card').forEach(card => {
      card.addEventListener('click', () => {
        engine.playAudio(card.dataset.en);
      });
    });
    body.querySelectorAll('.number-audio-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        engine.playAudio(btn.dataset.en);
      });
    });
  }

  /* --------------------------------------------------------------------------
     ACTIVIDAD 2 – RELACIONAR CANTIDAD CON EL NÚMERO (IMÁGENES PROPORCIONALES)
     -------------------------------------------------------------------------- */
  function renderCountMatch(body, engine) {
    if (matchIndex >= COUNT_CHALLENGES.length) {
      body.innerHTML = `
        <div class="colors-panel-card" style="text-align:center;">
          <div style="font-size:3rem;">🧩</div>
          <h3 style="color:#166534;">¡Excelente conteo del 1 al 5!</h3>
          <p style="font-weight:800; color:#334155;">Aciertos: ${matchScore} de ${COUNT_CHALLENGES.length}</p>
          <button type="button" class="toddler-quiz-launch-btn" id="btnRetryNumMatch">🔄 Contar de nuevo</button>
        </div>
      `;
      body.querySelector('#btnRetryNumMatch').addEventListener('click', () => {
        matchIndex = 0;
        matchScore = 0;
        renderCountMatch(body, engine);
      });
      return;
    }

    const ch = COUNT_CHALLENGES[matchIndex];
    const targetObj = NUMBERS_DATA.find(n => n.num === ch.num);

    body.innerHTML = `
      <div class="colors-panel-card">
        <div class="mini-quiz-meta">
          <span>Conteo ${matchIndex + 1} de ${COUNT_CHALLENGES.length}</span>
          <span>⭐ ${matchScore}</span>
        </div>

        <p style="text-align:center; font-weight:800; color:#334155; margin:0 0 10px; font-size:1.05rem;">
          Cuenta los objetos y toca el número correcto:
        </p>

        <div class="num-match-stage">
          ${renderProportionalImages(ch.num, ch.img, ch.name, 'num-hd-item-img')}
        </div>

        <div class="num-choice-row">
          ${NUMBERS_DATA.map(n => `
            <button type="button" class="num-choice-pill" data-num="${n.num}" style="--num-col:${n.color};">
              <span class="num-pill-digit">${n.num}</span>
              <span class="num-pill-word">${n.en}</span>
            </button>
          `).join('')}
        </div>

        <p class="mini-quiz-feedback" id="numMatchFeedback"></p>
      </div>
    `;

    const fb = body.querySelector('#numMatchFeedback');
    const btns = body.querySelectorAll('.num-choice-pill');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const picked = Number(btn.dataset.num);
        if (picked === ch.num) {
          matchScore++;
          engine.addStars(10);
          btn.classList.add('correct');
          btns.forEach(b => { b.disabled = true; });
          fb.style.color = '#166534';
          fb.textContent = `✅ ¡Correcto! ${ch.num} (${targetObj.en})`;
          engine.playAudio(targetObj.en);
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'toddler-quiz-launch-btn';
          next.style.cssText = 'display:block; margin:10px auto 0; padding:10px 22px;';
          next.textContent = matchIndex + 1 === COUNT_CHALLENGES.length ? '🏆 Ver Resultado' : 'Siguiente ➔';
          next.addEventListener('click', () => {
            matchIndex++;
            renderCountMatch(body, engine);
          });
          fb.after(next);
        } else {
          btn.classList.add('wrong');
          btn.disabled = true;
          fb.style.color = '#b91c1c';
          fb.textContent = '❌ Cuenta las imágenes otra vez e intenta otro número.';
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     ACTIVIDAD 3 – ESCRIBIR / REPASAR EL NÚMERO CON LÁPIZ O DEDO (CANVAS REAL)
     -------------------------------------------------------------------------- */
  function renderTraceNumber(body, engine) {
    const nObj = NUMBERS_DATA.find(n => n.num === traceNum) || NUMBERS_DATA[0];
    const brushColors = ['#3b82f6', '#ef4444', '#22c55e', '#a855f7', '#f97316'];

    body.innerHTML = `
      <div class="colors-panel-card">
        <div class="quiz-mode-tabs" style="margin-bottom:10px;">
          ${NUMBERS_DATA.map(n => `
            <button type="button" class="quiz-mode-tab ${n.num === traceNum ? 'active' : ''}" data-tracenum="${n.num}">
              ${n.num} • ${n.en}
            </button>
          `).join('')}
        </div>

        <div style="text-align:center; margin-bottom:10px;">
          <h3 style="margin:0 0 4px; color:#78350f; font-size:1.25rem;">
            Repasa el número <span style="color:${nObj.color};">${nObj.num} (${nObj.en})</span> con tu dedo o lápiz
          </h3>
          <button type="button" class="toddler-nav-pill" id="btnTraceAudio" style="padding:5px 14px; font-size:0.86rem;">
            🔊 Escuchar "${nObj.en}"
          </button>
        </div>

        <div class="trace-workspace-wrap">
          <canvas id="numberTraceCanvas" width="320" height="320" class="number-trace-canvas"></canvas>

          <div class="trace-tools-bar">
            <div class="trace-colors-row">
              ${brushColors.map(col => `
                <button type="button" class="trace-color-dot ${traceColor === col ? 'active' : ''}" data-col="${col}" style="background:${col};" aria-label="Color"></button>
              `).join('')}
            </div>
            <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
              <button type="button" class="toddler-nav-pill" id="btnClearTrace">🧽 Borrar</button>
              <button type="button" class="toddler-quiz-launch-btn" id="btnDoneTrace" style="padding:9px 20px; font-size:0.95rem;">✅ ¡Listo!</button>
            </div>
          </div>
        </div>

        <p class="mini-quiz-feedback" id="traceFeedback"></p>
      </div>
    `;

    body.querySelectorAll('.quiz-mode-tab[data-tracenum]').forEach(btn => {
      btn.addEventListener('click', () => {
        traceNum = Number(btn.dataset.tracenum);
        renderTraceNumber(body, engine);
        const sel = NUMBERS_DATA.find(x => x.num === traceNum);
        if (sel) engine.playAudio(sel.en);
      });
    });

    body.querySelector('#btnTraceAudio').addEventListener('click', () => {
      engine.playAudio(nObj.en);
    });

    const canvas = body.querySelector('#numberTraceCanvas');
    const ctx = canvas.getContext('2d');
    let strokePixels = 0;
    let drawing = false;
    let lastPos = null;

    const drawGuide = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle ruled lines
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(20, 160);
      ctx.lineTo(300, 160);
      ctx.stroke();
      ctx.setLineDash([]);

      // Big dotted guide number
      ctx.save();
      ctx.font = '900 220px Outfit, Plus Jakarta Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#f1f5f9';
      ctx.fillText(String(nObj.num), 160, 170);

      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3.5;
      ctx.setLineDash([10, 8]);
      ctx.strokeText(String(nObj.num), 160, 170);
      ctx.restore();
    };

    drawGuide();

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
      };
    };

    canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      canvas.setPointerCapture(e.pointerId);
      drawing = true;
      lastPos = getPos(e);
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!drawing || !lastPos) return;
      const pos = getPos(e);
      ctx.strokeStyle = traceColor;
      ctx.lineWidth = 16;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(lastPos.x, lastPos.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      strokePixels += Math.hypot(pos.x - lastPos.x, pos.y - lastPos.y);
      lastPos = pos;
    });

    const endDraw = () => {
      drawing = false;
      lastPos = null;
    };
    canvas.addEventListener('pointerup', endDraw);
    canvas.addEventListener('pointercancel', endDraw);

    body.querySelectorAll('.trace-color-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        traceColor = dot.dataset.col;
        body.querySelectorAll('.trace-color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });

    const fb = body.querySelector('#traceFeedback');
    body.querySelector('#btnClearTrace').addEventListener('click', () => {
      strokePixels = 0;
      fb.textContent = '';
      drawGuide();
    });

    body.querySelector('#btnDoneTrace').addEventListener('click', () => {
      if (strokePixels < 45) {
        fb.style.color = '#b45309';
        fb.textContent = `✏️ Repasa primero el número ${nObj.num} sobre la guía punteada.`;
        return;
      }
      engine.addStars(15);
      engine.playAudio(nObj.en);
      fb.style.color = '#166534';
      fb.textContent = `✅ ¡Muy bien! Trazaste el número ${nObj.num} (${nObj.en})`;

      if (traceNum < 5) {
        setTimeout(() => {
          traceNum++;
          renderTraceNumber(body, engine);
        }, 900);
      }
    });
  }

  /* --------------------------------------------------------------------------
     ACTIVIDAD 4 – JUEGO: ATRAPA LOS NÚMEROS QUE CAEN SUAVEMENTE (1 AL 5)
     -------------------------------------------------------------------------- */
  let fallingLevel = 1;

  function renderFallingNumbersGame(body, engine) {
    stopFallingGameLoop();

    const LEVEL_CONFIGS = {
      1: { level: 1, title: 'Nivel 1 • Suave', minVy: 1.05, maxVy: 1.65, spawnFrames: 54, maxBubbles: 6, goalPerNum: 3, maxLives: 4 },
      2: { level: 2, title: 'Nivel 2 • Rápido', minVy: 1.75, maxVy: 2.35, spawnFrames: 40, maxBubbles: 7, goalPerNum: 3, maxLives: 3 },
      3: { level: 3, title: 'Nivel 3 • Súper Rápido', minVy: 2.55, maxVy: 3.25, spawnFrames: 30, maxBubbles: 8, goalPerNum: 3, maxLives: 3 }
    };

    const cfg = LEVEL_CONFIGS[fallingLevel] || LEVEL_CONFIGS[1];
    let currentTarget = 1;
    const caughtMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let livesLeft = cfg.maxLives;
    let gameOver = false;

    const bubbles = [];
    const sparkles = [];
    let spawnTimer = 0;

    body.innerHTML = `
      <div class="colors-panel-card" style="max-width: 820px;">
        <div class="quiz-mode-tabs" style="margin-bottom:10px;">
          ${[1, 2, 3].map(lvl => `
            <button type="button" class="quiz-mode-tab ${fallingLevel === lvl ? 'active' : ''}" data-falllvl="${lvl}">
              ${LEVEL_CONFIGS[lvl].title}
            </button>
          `).join('')}
        </div>

        <div class="falling-hud-bar">
          <div class="falling-target-pill" id="fallingTargetBadge">
            🎯 Atrapa los: <strong id="fallingTargetNum" style="font-size:1.3rem; margin-left:4px;">1 (One)</strong>
          </div>
          <div class="falling-lives-pill" id="fallingLivesText">
            ${'❤️'.repeat(livesLeft)} (${livesLeft} vidas)
          </div>
          <button type="button" class="toddler-nav-pill active" id="btnFallingHear" style="padding:6px 14px; font-size:0.85rem;">
            🔊 Escuchar
          </button>
        </div>

        <div class="falling-game-layout">
          <div class="falling-canvas-wrap">
            <canvas id="fallingNumbersCanvas" width="520" height="360" class="falling-numbers-canvas"></canvas>
          </div>

          <aside class="falling-side-panel" aria-label="Metas del nivel">
            <h4 class="falling-side-title">📋 Por Atrapar (${cfg.title})</h4>
            <div class="falling-goals-list" id="fallingGoalsList"></div>
            <div class="falling-side-note">
              Si dejas caer ${cfg.maxLives} números objetivo sin atraparlos, pierdes el nivel.
            </div>
          </aside>
        </div>

        <p class="mini-quiz-feedback" id="fallingFeedback"></p>
        <div id="fallingActionRow" style="text-align:center;"></div>
      </div>
    `;

    body.querySelectorAll('.quiz-mode-tab[data-falllvl]').forEach(btn => {
      btn.addEventListener('click', () => {
        fallingLevel = Number(btn.dataset.falllvl);
        renderFallingNumbersGame(body, engine);
      });
    });

    const canvas = body.querySelector('#fallingNumbersCanvas');
    const ctx = canvas.getContext('2d');
    const targetEl = body.querySelector('#fallingTargetNum');
    const livesEl = body.querySelector('#fallingLivesText');
    const goalsListEl = body.querySelector('#fallingGoalsList');
    const fbEl = body.querySelector('#fallingFeedback');
    const actionRow = body.querySelector('#fallingActionRow');

    const updateSidePanel = () => {
      livesEl.textContent = livesLeft > 0
        ? `${'❤️'.repeat(livesLeft)} (${livesLeft} ${livesLeft === 1 ? 'vida' : 'vidas'})`
        : '💔 0 vidas';

      goalsListEl.innerHTML = NUMBERS_DATA.map(n => {
        const count = caughtMap[n.num] || 0;
        const done = count >= cfg.goalPerNum;
        const isCurrent = !gameOver && n.num === currentTarget;
        return `
          <div class="falling-goal-row ${isCurrent ? 'active' : ''} ${done ? 'done' : ''}" style="--goal-col:${n.color};">
            <span class="falling-goal-num" style="background:${n.color};">${n.num}</span>
            <span class="falling-goal-word">${n.en}</span>
            <span class="falling-goal-count">${done ? '✅' : `${count}/${cfg.goalPerNum}`}</span>
          </div>
        `;
      }).join('');
    };

    const announceTarget = () => {
      const nObj = NUMBERS_DATA.find(n => n.num === currentTarget);
      targetEl.textContent = `${nObj.num} (${nObj.en})`;
      updateSidePanel();
      engine.playAudio(`Find number ${nObj.en.toLowerCase()}`);
    };

    body.querySelector('#btnFallingHear').addEventListener('click', () => {
      const nObj = NUMBERS_DATA.find(n => n.num === currentTarget);
      engine.playAudio(`Find number ${nObj.en.toLowerCase()}`);
    });

    const spawnBubble = () => {
      const isTarget = Math.random() < 0.48;
      const numVal = isTarget ? currentTarget : (1 + Math.floor(Math.random() * 5));
      const nObj = NUMBERS_DATA.find(n => n.num === numVal);
      const r = 32;
      bubbles.push({
        num: numVal,
        color: nObj.color,
        x: r + 14 + Math.random() * (canvas.width - (r + 14) * 2),
        y: -r,
        r,
        vy: cfg.minVy + Math.random() * (cfg.maxVy - cfg.minVy),
        wobblePhase: Math.random() * Math.PI * 2
      });
    };

    const endLevel = (won) => {
      gameOver = true;
      stopFallingGameLoop();
      updateSidePanel();
      actionRow.innerHTML = '';

      if (won) {
        engine.addStars(25);
        fbEl.style.color = '#166534';
        if (fallingLevel < 3) {
          fbEl.textContent = `🏆 ¡Completaste el Nivel ${fallingLevel}! ¡Prepárate para el Nivel ${fallingLevel + 1}!`;
          const nextBtn = document.createElement('button');
          nextBtn.type = 'button';
          nextBtn.className = 'toddler-quiz-launch-btn';
          nextBtn.style.cssText = 'padding:10px 22px;';
          nextBtn.textContent = `🚀 Pasar al Nivel ${fallingLevel + 1}`;
          nextBtn.addEventListener('click', () => {
            fallingLevel++;
            renderFallingNumbersGame(body, engine);
          });
          actionRow.appendChild(nextBtn);
        } else {
          fbEl.textContent = '🏆 ¡Campeón Total! Superaste los 3 niveles de Atrapa los Números.';
          const replayBtn = document.createElement('button');
          replayBtn.type = 'button';
          replayBtn.className = 'toddler-quiz-launch-btn';
          replayBtn.style.cssText = 'padding:10px 22px;';
          replayBtn.textContent = '🔄 Jugar desde Nivel 1';
          replayBtn.addEventListener('click', () => {
            fallingLevel = 1;
            renderFallingNumbersGame(body, engine);
          });
          actionRow.appendChild(replayBtn);
        }
      } else {
        fbEl.style.color = '#b91c1c';
        fbEl.textContent = `😢 ¡Perdiste el Nivel ${fallingLevel}! Se escaparon demasiados números ${currentTarget}.`;
        const retryBtn = document.createElement('button');
        retryBtn.type = 'button';
        retryBtn.className = 'toddler-quiz-launch-btn';
        retryBtn.style.cssText = 'padding:10px 22px;';
        retryBtn.textContent = `🔄 Reintentar Nivel ${fallingLevel}`;
        retryBtn.addEventListener('click', () => renderFallingNumbersGame(body, engine));
        actionRow.appendChild(retryBtn);
      }
    };

    spawnBubble();
    setTimeout(() => { if (!gameOver) spawnBubble(); }, 350);
    announceTarget();

    const handleCanvasTap = (e) => {
      if (gameOver) return;
      const rect = canvas.getBoundingClientRect();
      const tx = (e.clientX - rect.left) * (canvas.width / rect.width);
      const ty = (e.clientY - rect.top) * (canvas.height / rect.height);

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        const dist = Math.hypot(tx - b.x, ty - b.y);
        if (dist <= b.r + 12) {
          if (b.num === currentTarget) {
            bubbles.splice(i, 1);
            caughtMap[currentTarget]++;
            engine.addStars(10);

            for (let s = 0; s < 10; s++) {
              const ang = (Math.PI * 2 * s) / 10;
              sparkles.push({
                x: b.x, y: b.y,
                vx: Math.cos(ang) * 3.2,
                vy: Math.sin(ang) * 3.2,
                color: b.color,
                life: 24
              });
            }

            const nObj = NUMBERS_DATA.find(n => n.num === currentTarget);
            engine.playAudio(nObj.en);
            updateSidePanel();
            fbEl.style.color = '#166534';
            fbEl.textContent = `✅ ¡Bien! Atrapaste el ${currentTarget} (${nObj.en})`;

            if (caughtMap[currentTarget] >= cfg.goalPerNum) {
              if (currentTarget < 5) {
                currentTarget++;
                setTimeout(() => { if (!gameOver) announceTarget(); }, 600);
              } else {
                endLevel(true);
              }
            }
          } else {
            b.vy = -1.2;
            fbEl.style.color = '#b45309';
            fbEl.textContent = `Ese es el ${b.num}. ¡Atrapa el número ${currentTarget}!`;
          }
          break;
        }
      }
    };

    canvas.addEventListener('pointerdown', handleCanvasTap);

    const loop = () => {
      if (!document.body.contains(canvas)) {
        stopFallingGameLoop();
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bg.addColorStop(0, '#eff6ff');
      bg.addColorStop(1, '#fefce8');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!gameOver) {
        spawnTimer++;
        if (spawnTimer >= cfg.spawnFrames) {
          spawnTimer = 0;
          if (bubbles.length < cfg.maxBubbles) spawnBubble();
        }
      }

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y += b.vy;
        if (b.vy < cfg.minVy) b.vy += 0.08;
        b.wobblePhase += 0.04;
        const drawX = b.x + Math.sin(b.wobblePhase) * 6;

        ctx.save();
        ctx.beginPath();
        ctx.arc(drawX, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(drawX - 10, b.y - 10, 7, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 28px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(b.num), drawX, b.y + 2);
        ctx.restore();

        if (b.y - b.r > canvas.height + 10) {
          bubbles.splice(i, 1);
          if (!gameOver && b.num === currentTarget) {
            livesLeft--;
            updateSidePanel();
            if (livesLeft <= 0) {
              endLevel(false);
              return;
            } else {
              fbEl.style.color = '#b91c1c';
              fbEl.textContent = `⚠️ ¡Se escapó un ${currentTarget}! Te quedan ${livesLeft} ${livesLeft === 1 ? 'vida' : 'vidas'}.`;
            }
          }
        }
      }

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const sp = sparkles[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.life--;
        ctx.fillStyle = sp.color;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, 4, 0, Math.PI * 2);
        ctx.fill();
        if (sp.life <= 0) sparkles.splice(i, 1);
      }

      if (!gameOver) {
        fallingRafId = requestAnimationFrame(loop);
      }
    };

    fallingRafId = requestAnimationFrame(loop);
  }
})();
