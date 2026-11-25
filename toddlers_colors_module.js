/**
 * Bilikids Adventure - Toddlers Unit 1: Colors Studio Module
 * Activities:
 * 1. Meet the Colors (10 real images + EN/ES + Audio)
 * 2. Color Match (Objects -> Colors with visual & audio feedback)
 * 3. Paint (Real interactive SVG region coloring by English instruction)
 * 4. Find the Color (Interactive illustrated scene guided by Bili audio)
 * 5. Final Evaluation: 4 independent skills (Listening, Speaking, Reading, Writing)
 */
(function () {
  const COLORS_DATA = [
    { key: 'red', en: 'Red', es: 'Rojo', hex: '#ef4444', image: 'assets/toddlers_units/colors/red.jpeg' },
    { key: 'blue', en: 'Blue', es: 'Azul', hex: '#3b82f6', image: 'assets/toddlers_units/colors/blue.jpeg' },
    { key: 'yellow', en: 'Yellow', es: 'Amarillo', hex: '#eab308', image: 'assets/toddlers_units/colors/yellow.jpeg' },
    { key: 'green', en: 'Green', es: 'Verde', hex: '#22c55e', image: 'assets/toddlers_units/colors/green.jpeg' },
    { key: 'orange', en: 'Orange', es: 'Naranja', hex: '#f97316', image: 'assets/toddlers_units/colors/orange.jpeg' },
    { key: 'purple', en: 'Purple', es: 'Morado', hex: '#a855f7', image: 'assets/toddlers_units/colors/purple.jpeg' },
    { key: 'pink', en: 'Pink', es: 'Rosado', hex: '#ec4899', image: 'assets/toddlers_units/colors/pink.jpeg' },
    { key: 'brown', en: 'Brown', es: 'Marrón', hex: '#92400e', image: 'assets/toddlers_units/colors/brown.jpeg' },
    { key: 'black', en: 'Black', es: 'Negro', hex: '#1e293b', image: 'assets/toddlers_units/colors/black.jpeg' },
    { key: 'white', en: 'White', es: 'Blanco', hex: '#f8fafc', image: 'assets/toddlers_units/colors/white.jpeg' }
  ];

  const MATCH_ITEMS = [
    {
      name: 'Apple', colorKey: 'red',
      svg: `<svg viewBox="0 0 100 100" width="92" height="92"><path d="M50 28 C30 22 18 38 22 60 C26 82 40 90 50 86 C60 90 74 82 78 60 C82 38 70 22 50 28 Z" fill="#ef4444" stroke="#991b1b" stroke-width="3"/><path d="M50 28 Q52 14 60 12" fill="none" stroke="#78350f" stroke-width="4" stroke-linecap="round"/><path d="M52 22 Q68 12 72 24 Q60 28 52 22 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/></svg>`
    },
    {
      name: 'Ball', colorKey: 'blue',
      svg: `<svg viewBox="0 0 100 100" width="92" height="92"><circle cx="50" cy="50" r="36" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/><path d="M22 30 Q50 50 22 70" fill="none" stroke="#dbeafe" stroke-width="4"/><path d="M78 30 Q50 50 78 70" fill="none" stroke="#dbeafe" stroke-width="4"/><circle cx="38" cy="36" r="6" fill="#ffffff" opacity="0.45"/></svg>`
    },
    {
      name: 'Sun', colorKey: 'yellow',
      svg: `<svg viewBox="0 0 100 100" width="92" height="92"><g stroke="#eab308" stroke-width="5" stroke-linecap="round"><line x1="50" y1="8" x2="50" y2="20"/><line x1="50" y1="80" x2="50" y2="92"/><line x1="8" y1="50" x2="20" y2="50"/><line x1="80" y1="50" x2="92" y2="50"/><line x1="20" y1="20" x2="29" y2="29"/><line x1="71" y1="71" x2="80" y2="80"/><line x1="80" y1="20" x2="71" y2="29"/><line x1="29" y1="71" x2="20" y2="80"/></g><circle cx="50" cy="50" r="24" fill="#facc15" stroke="#ca8a04" stroke-width="3"/></svg>`
    },
    {
      name: 'Leaf', colorKey: 'green',
      svg: `<svg viewBox="0 0 100 100" width="92" height="92"><path d="M22 78 C20 40 45 18 82 18 C82 55 60 80 22 78 Z" fill="#22c55e" stroke="#15803d" stroke-width="3"/><path d="M16 84 L68 32" stroke="#14532d" stroke-width="3.5" stroke-linecap="round"/><path d="M40 60 L56 58 M52 48 L66 46" stroke="#14532d" stroke-width="2.5" stroke-linecap="round"/></svg>`
    },
    {
      name: 'Grapes', colorKey: 'purple',
      svg: `<svg viewBox="0 0 100 100" width="92" height="92"><path d="M50 14 L50 28" stroke="#78350f" stroke-width="4" stroke-linecap="round"/><path d="M52 20 Q68 12 72 24 Q60 28 52 20 Z" fill="#22c55e"/><circle cx="38" cy="38" r="11" fill="#a855f7" stroke="#6b21a8" stroke-width="2.5"/><circle cx="62" cy="38" r="11" fill="#a855f7" stroke="#6b21a8" stroke-width="2.5"/><circle cx="50" cy="40" r="11" fill="#a855f7" stroke="#6b21a8" stroke-width="2.5"/><circle cx="43" cy="57" r="11" fill="#a855f7" stroke="#6b21a8" stroke-width="2.5"/><circle cx="57" cy="57" r="11" fill="#a855f7" stroke="#6b21a8" stroke-width="2.5"/><circle cx="50" cy="74" r="11" fill="#a855f7" stroke="#6b21a8" stroke-width="2.5"/></svg>`
    },
    {
      name: 'Carrot', colorKey: 'orange',
      svg: `<svg viewBox="0 0 100 100" width="92" height="92"><path d="M44 26 Q38 10 48 16 Q54 6 58 18 Q68 12 60 28 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/><path d="M36 30 Q50 24 64 30 L52 88 Q50 92 48 88 Z" fill="#f97316" stroke="#c2410c" stroke-width="3"/></svg>`
    }
  ];

  const PAINT_TASKS = [
    {
      id: 'apple',
      instruction: 'Paint the apple red',
      targetColor: 'red',
      targetParts: ['apple_body'],
      svg: `
        <svg viewBox="0 0 220 200" width="240" height="215" class="paint-canvas-svg">
          <path data-part="apple_stem" d="M110 52 Q114 25 130 22" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
          <path data-part="apple_leaf" class="paintable-zone" d="M115 44 Q146 22 158 46 Q134 58 115 44 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <path data-part="apple_body" class="paintable-zone" d="M110 56 C70 42 42 74 50 122 C58 168 88 182 110 172 C132 182 162 168 170 122 C178 74 150 42 110 56 Z" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
        </svg>
      `
    },
    {
      id: 'ball',
      instruction: 'Paint the ball blue',
      targetColor: 'blue',
      targetParts: ['ball_left', 'ball_center', 'ball_right'],
      svg: `
        <svg viewBox="0 0 220 200" width="240" height="215" class="paint-canvas-svg">
          <path data-part="ball_left" class="paintable-zone" d="M110 30 A70 70 0 0 0 40 100 A70 70 0 0 0 110 170 C84 140 84 60 110 30 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <path data-part="ball_center" class="paintable-zone" d="M110 30 C84 60 84 140 110 170 C136 140 136 60 110 30 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <path data-part="ball_right" class="paintable-zone" d="M110 30 C136 60 136 140 110 170 A70 70 0 0 0 180 100 A70 70 0 0 0 110 30 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
        </svg>
      `
    },
    {
      id: 'sun',
      instruction: 'Paint the sun yellow',
      targetColor: 'yellow',
      targetParts: ['sun_core'],
      svg: `
        <svg viewBox="0 0 220 200" width="240" height="215" class="paint-canvas-svg">
          <polygon data-part="ray1" class="paintable-zone" points="110,10 100,34 120,34" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <polygon data-part="ray2" class="paintable-zone" points="110,190 100,166 120,166" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <polygon data-part="ray3" class="paintable-zone" points="20,100 44,90 44,110" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <polygon data-part="ray4" class="paintable-zone" points="200,100 176,90 176,110" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <polygon data-part="ray5" class="paintable-zone" points="44,34 68,44 54,58" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <polygon data-part="ray6" class="paintable-zone" points="176,34 152,44 166,58" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <polygon data-part="ray7" class="paintable-zone" points="44,166 68,156 54,142" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <polygon data-part="ray8" class="paintable-zone" points="176,166 152,156 166,142" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <circle data-part="sun_core" class="paintable-zone" cx="110" cy="100" r="48" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
        </svg>
      `
    },
    {
      id: 'leaf',
      instruction: 'Paint the leaf green',
      targetColor: 'green',
      targetParts: ['leaf_top', 'leaf_bottom'],
      svg: `
        <svg viewBox="0 0 220 200" width="240" height="215" class="paint-canvas-svg">
          <path data-part="leaf_top" class="paintable-zone" d="M44 150 C42 75 95 34 176 34 L44 150 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <path data-part="leaf_bottom" class="paintable-zone" d="M176 34 C176 112 124 154 44 150 L176 34 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <line x1="30" y1="164" x2="152" y2="56" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: 'grapes',
      instruction: 'Paint the grapes purple',
      targetColor: 'purple',
      targetParts: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
      svg: `
        <svg viewBox="0 0 220 200" width="240" height="215" class="paint-canvas-svg">
          <path d="M110 22 L110 48" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
          <path data-part="g_leaf" class="paintable-zone" d="M112 34 Q142 18 152 38 Q130 48 112 34 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <circle data-part="g1" class="paintable-zone" cx="84" cy="68" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <circle data-part="g2" class="paintable-zone" cx="136" cy="68" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <circle data-part="g3" class="paintable-zone" cx="110" cy="74" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <circle data-part="g4" class="paintable-zone" cx="95" cy="108" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <circle data-part="g5" class="paintable-zone" cx="125" cy="108" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <circle data-part="g6" class="paintable-zone" cx="110" cy="144" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
        </svg>
      `
    }
  ];

  const FIND_PROMPTS = [
    { colorKey: 'red', audio: 'Find something red', label: 'Find something RED!' },
    { colorKey: 'blue', audio: 'Find something blue', label: 'Find something BLUE!' },
    { colorKey: 'green', audio: 'Find something green', label: 'Find something GREEN!' },
    { colorKey: 'yellow', audio: 'Find something yellow', label: 'Find something YELLOW!' },
    { colorKey: 'purple', audio: 'Find something purple', label: 'Find something PURPLE!' },
    { colorKey: 'orange', audio: 'Find something orange', label: 'Find something ORANGE!' }
  ];

  let activeSubTab = 'meet';
  let matchIndex = 0;
  let matchScore = 0;
  let paintIndex = 0;
  let selectedBrushKey = 'red';
  let findIndex = 0;
  let findScore = 0;

  let activeEvalSkill = 'listening';
  const evalState = {
    listening: { index: 0, score: 0, items: [] },
    speaking: { index: 0, score: 0, items: [] },
    reading: { index: 0, score: 0, items: [] },
    writing: { index: 0, score: 0, items: [] }
  };

  function resetEvalSkill(skill) {
    const shuffled = [...COLORS_DATA].sort(() => Math.random() - 0.5).slice(0, 5);
    evalState[skill] = { index: 0, score: 0, items: shuffled };
  }

  Object.keys(evalState).forEach(resetEvalSkill);

  window.renderToddlersColorsStudio = function (container, engine) {
    const subTabs = [
      { id: 'meet', label: '1. 🎨 Meet the Colors' },
      { id: 'match', label: '2. 🧩 Color Match' },
      { id: 'paint', label: '3. 🖌️ Paint' },
      { id: 'find', label: '4. 🔍 Find the Color' },
      { id: 'eval', label: '5. 🏆 Final Evaluation (4 Skills)' }
    ];

    let html = `
      <div class="colors-studio-wrap">
        <div style="margin-bottom: 1rem;">
          <h2 style="margin:0; font-size:1.45rem; color:#78350f;">🎨 Unit 1 • Colors Adventure</h2>
          <p style="margin:4px 0 0; color:#6b7280; font-size:0.95rem;">Learn the 10 colors, match objects, paint real drawings, find colors in the scene, and complete the 4-skills evaluation.</p>
        </div>

        <div class="colors-subtabs-bar">
          ${subTabs.map(t => `
            <button type="button" class="colors-subtab-btn ${activeSubTab === t.id ? 'active' : ''}" data-subtab="${t.id}">
              ${t.label}
            </button>
          `).join('')}
        </div>

        <div id="colorsStudioBody"></div>
      </div>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.colors-subtab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeSubTab = btn.dataset.subtab;
        window.renderToddlersColorsStudio(container, engine);
      });
    });

    const body = container.querySelector('#colorsStudioBody');
    if (activeSubTab === 'meet') renderMeetColors(body, engine);
    else if (activeSubTab === 'match') renderColorMatch(body, engine);
    else if (activeSubTab === 'paint') renderPaintActivity(body, engine);
    else if (activeSubTab === 'find') renderFindColor(body, engine);
    else if (activeSubTab === 'eval') renderFinalEvaluation(body, engine);
  };

  /* --------------------------------------------------------------------------
     ACTIVIDAD 1 – MEET THE COLORS
     -------------------------------------------------------------------------- */
  function renderMeetColors(body, engine) {
    body.innerHTML = `
      <div class="colors-meet-grid">
        ${COLORS_DATA.map(c => `
          <div class="color-meet-card" style="border-color: ${c.key === 'white' ? '#cbd5e1' : c.hex};" data-color="${c.en}">
            <div class="color-meet-img-wrap">
              <img src="${c.image}" alt="${c.en}" class="color-meet-img">
            </div>
            <h3 class="color-meet-en" style="color:${c.key === 'white' ? '#334155' : c.hex};">${c.en}</h3>
            <div class="color-meet-es">${c.es}</div>
            <button type="button" class="explore-audio-btn color-meet-audio-btn" data-audio="${c.en}">
              🔊 Listen "${c.en}"
            </button>
          </div>
        `).join('')}
      </div>
    `;

    body.querySelectorAll('.color-meet-card').forEach(card => {
      card.addEventListener('click', () => {
        engine.playAudio(card.dataset.color);
      });
    });
    body.querySelectorAll('.color-meet-audio-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        engine.playAudio(btn.dataset.audio);
      });
    });
  }

  /* --------------------------------------------------------------------------
     ACTIVIDAD 2 – COLOR MATCH
     -------------------------------------------------------------------------- */
  function renderColorMatch(body, engine) {
    if (matchIndex >= MATCH_ITEMS.length) {
      body.innerHTML = `
        <div class="colors-panel-card" style="text-align:center;">
          <div style="font-size:3rem;">🎉</div>
          <h3 style="color:#166534;">¡Excelente! Completaste Color Match</h3>
          <p style="font-weight:800; color:#334155;">Aciertos: ${matchScore} de ${MATCH_ITEMS.length}</p>
          <button type="button" class="toddler-quiz-launch-btn" id="btnRetryMatch">🔄 Jugar otra vez</button>
        </div>
      `;
      body.querySelector('#btnRetryMatch').addEventListener('click', () => {
        matchIndex = 0;
        matchScore = 0;
        renderColorMatch(body, engine);
      });
      return;
    }

    const current = MATCH_ITEMS[matchIndex];
    const targetColor = COLORS_DATA.find(c => c.key === current.colorKey);
    const distractors = COLORS_DATA.filter(c => c.key !== current.colorKey).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [targetColor, ...distractors].sort(() => Math.random() - 0.5);

    body.innerHTML = `
      <div class="colors-panel-card">
        <div class="mini-quiz-meta">
          <span>Objeto ${matchIndex + 1} de ${MATCH_ITEMS.length}</span>
          <span>⭐ ${matchScore}</span>
        </div>
        <div style="text-align:center; margin:8px 0 14px;">
          <div class="color-match-obj-box">${current.svg}</div>
          <h3 style="margin:8px 0 4px; font-size:1.35rem; color:#0f172a;">${current.name}</h3>
          <p style="margin:0; color:#64748b; font-weight:700;">Relaciona este objeto con su color en inglés:</p>
        </div>
        <div class="color-match-options-grid">
          ${options.map(opt => `
            <button type="button" class="color-match-opt-btn" data-key="${opt.key}" data-en="${opt.en}">
              <img src="${opt.image}" alt="${opt.en}" class="color-match-opt-img">
              <span>${opt.en}</span>
            </button>
          `).join('')}
        </div>
        <p class="mini-quiz-feedback" id="colorMatchFeedback"></p>
      </div>
    `;

    const btns = body.querySelectorAll('.color-match-opt-btn');
    const fb = body.querySelector('#colorMatchFeedback');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.key === current.colorKey) {
          matchScore++;
          engine.addStars(10);
          btn.classList.add('correct');
          btns.forEach(b => { b.disabled = true; });
          fb.style.color = '#166534';
          fb.textContent = `✅ ${current.name} → ${targetColor.en}!`;
          engine.playCheerSound();
          setTimeout(() => engine.playAudio(targetColor.en), 250);
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'toddler-quiz-launch-btn';
          next.style.cssText = 'display:block; margin:10px auto 0; padding:10px 22px;';
          next.textContent = matchIndex + 1 === MATCH_ITEMS.length ? '🏆 Ver Resultado' : 'Siguiente ➔';
          next.addEventListener('click', () => {
            matchIndex++;
            renderColorMatch(body, engine);
          });
          fb.after(next);
        } else {
          btn.classList.add('wrong');
          btn.disabled = true;
          fb.style.color = '#b91c1c';
          fb.textContent = `❌ Intenta otro color para ${current.name}.`;
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     ACTIVIDAD 3 – PAINT (INTERACCIÓN REAL DE COLOREADO)
     -------------------------------------------------------------------------- */
  function renderPaintActivity(body, engine) {
    if (paintIndex >= PAINT_TASKS.length) {
      body.innerHTML = `
        <div class="colors-panel-card" style="text-align:center;">
          <div style="font-size:3rem;">🎨</div>
          <h3 style="color:#166534;">¡Eres un gran artista! Pintaste todos los dibujos.</h3>
          <button type="button" class="toddler-quiz-launch-btn" id="btnRetryPaint">🔄 Pintar de nuevo</button>
        </div>
      `;
      body.querySelector('#btnRetryPaint').addEventListener('click', () => {
        paintIndex = 0;
        renderPaintActivity(body, engine);
      });
      return;
    }

    const task = PAINT_TASKS[paintIndex];
    const paletteColors = COLORS_DATA.slice(0, 7);
    let completed = false;
    const paintedState = {};

    body.innerHTML = `
      <div class="colors-panel-card">
        <div class="mini-quiz-meta">
          <span>Dibujo ${paintIndex + 1} de ${PAINT_TASKS.length}</span>
          <span>🖌️ Coloreado Real</span>
        </div>

        <div style="text-align:center; margin-bottom:10px;">
          <h3 style="margin:0 0 8px; font-size:1.3rem; color:#78350f;">"${task.instruction}."</h3>
          <button type="button" class="toddler-nav-pill active" id="btnHearPaintPrompt">
            🔊 Escuchar Instrucción
          </button>
        </div>

        <div class="paint-workspace-box">
          <div class="paint-svg-stage" id="paintSvgStage">
            ${task.svg}
          </div>

          <div class="paint-palette-col">
            <div style="font-size:0.82rem; font-weight:800; color:#64748b; margin-bottom:6px;">
              1. Elige un color:
            </div>
            <div class="paint-palette-grid">
              ${paletteColors.map(c => `
                <button type="button" class="paint-swatch-btn ${selectedBrushKey === c.key ? 'active' : ''}" data-key="${c.key}" data-hex="${c.hex}" title="${c.en}" style="background:${c.hex};">
                  <span>${c.en}</span>
                </button>
              `).join('')}
            </div>
            <div style="font-size:0.82rem; font-weight:800; color:#64748b; margin-top:10px;">
              2. Toca el dibujo para pintarlo.
            </div>
          </div>
        </div>

        <p class="mini-quiz-feedback" id="paintFeedback"></p>
      </div>
    `;

    engine.playAudio(task.instruction);
    body.querySelector('#btnHearPaintPrompt').addEventListener('click', () => {
      engine.playAudio(task.instruction);
    });

    const swatchBtns = body.querySelectorAll('.paint-swatch-btn');
    swatchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        selectedBrushKey = btn.dataset.key;
        swatchBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        engine.playAudio(btn.title);
      });
    });

    const fb = body.querySelector('#paintFeedback');
    const zones = body.querySelectorAll('.paintable-zone');
    zones.forEach(zone => {
      zone.addEventListener('click', () => {
        if (completed) return;
        const brushColor = COLORS_DATA.find(c => c.key === selectedBrushKey) || COLORS_DATA[0];
        zone.setAttribute('fill', brushColor.hex);
        const partId = zone.dataset.part;
        paintedState[partId] = brushColor.key;

        const allTargetsCorrect = task.targetParts.every(tp => paintedState[tp] === task.targetColor);
        if (allTargetsCorrect) {
          completed = true;
          engine.addStars(15);
          engine.playCheerSound();
          fb.style.color = '#166534';
          fb.textContent = `🎉 ¡Excelente! ${task.instruction}!`;
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'toddler-quiz-launch-btn';
          next.style.cssText = 'display:block; margin:8px auto 0; padding:10px 22px;';
          next.textContent = paintIndex + 1 === PAINT_TASKS.length ? '🏆 Finalizar Pintura' : 'Siguiente Dibujo ➔';
          next.addEventListener('click', () => {
            paintIndex++;
            renderPaintActivity(body, engine);
          });
          fb.after(next);
        } else if (task.targetParts.includes(partId) && brushColor.key !== task.targetColor) {
          fb.style.color = '#b45309';
          fb.textContent = `🎨 Pintaste con ${brushColor.en}. Ahora intenta: "${task.instruction}".`;
        } else {
          fb.style.color = '#334155';
          fb.textContent = `🖌️ ¡Bien! Sigue pintando las áreas principales con ${task.targetColor.toUpperCase()}.`;
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     ACTIVIDAD 4 – FIND THE COLOR (ESCENA ILUSTRADA INTERACTIVA)
     -------------------------------------------------------------------------- */
  function renderFindColor(body, engine) {
    if (findIndex >= FIND_PROMPTS.length) {
      body.innerHTML = `
        <div class="colors-panel-card" style="text-align:center;">
          <div style="font-size:3rem;">🌟</div>
          <h3 style="color:#166534;">¡Encontraste todos los colores con Bili!</h3>
          <p style="font-weight:800;">Puntuación: ${findScore} de ${FIND_PROMPTS.length}</p>
          <button type="button" class="toddler-quiz-launch-btn" id="btnRetryFind">🔄 Jugar de nuevo</button>
        </div>
      `;
      body.querySelector('#btnRetryFind').addEventListener('click', () => {
        findIndex = 0;
        findScore = 0;
        renderFindColor(body, engine);
      });
      return;
    }

    const prompt = FIND_PROMPTS[findIndex];
    let solved = false;

    body.innerHTML = `
      <div class="colors-panel-card">
        <div class="mini-quiz-meta">
          <span>Búsqueda ${findIndex + 1} de ${FIND_PROMPTS.length}</span>
          <span>⭐ ${findScore}</span>
        </div>

        <div class="bili-find-banner">
          <img src="assets/mascot/bili_pixel_idle.png" alt="Bili" class="bili-find-avatar">
          <div style="flex:1;">
            <div style="font-weight:900; color:#78350f; font-size:1.15rem;">Bili dice: "${prompt.label}"</div>
            <button type="button" class="toddler-nav-pill active" id="btnBiliFindAudio" style="margin-top:6px; padding:6px 14px; font-size:0.88rem;">
              🔊 Escuchar a Bili
            </button>
          </div>
        </div>

        <div class="find-scene-box">
          <svg viewBox="0 0 600 280" class="find-scene-svg" aria-label="Colorful park scene">
            <!-- Sky & Grass -->
            <rect x="0" y="0" width="600" height="190" fill="#e0f2fe" rx="16"/>
            <rect x="0" y="185" width="600" height="95" fill="#bbf7d0"/>

            <!-- Yellow Sun -->
            <g class="scene-clickable" data-color="yellow" data-name="Yellow Sun">
              <circle cx="85" cy="60" r="34" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
              <g stroke="#eab308" stroke-width="4" stroke-linecap="round">
                <line x1="85" y1="14" x2="85" y2="22"/><line x1="85" y1="98" x2="85" y2="106"/>
                <line x1="39" y1="60" x2="47" y2="60"/><line x1="123" y1="60" x2="131" y2="60"/>
              </g>
            </g>

            <!-- White Cloud -->
            <g class="scene-clickable" data-color="white" data-name="White Cloud">
              <ellipse cx="260" cy="58" rx="44" ry="22" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
              <circle cx="240" cy="48" r="20" fill="#ffffff"/>
              <circle cx="275" cy="46" r="22" fill="#ffffff"/>
            </g>

            <!-- Green Tree -->
            <g class="scene-clickable" data-color="green" data-name="Green Tree">
              <rect x="470" y="130" width="24" height="65" fill="#92400e"/>
              <circle cx="482" cy="100" r="46" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
              <circle cx="452" cy="118" r="30" fill="#22c55e"/>
              <circle cx="512" cy="118" r="30" fill="#22c55e"/>
            </g>

            <!-- Red Apple on Picnic Blanket -->
            <g class="scene-clickable" data-color="red" data-name="Red Apple">
              <path d="M120 185 C100 180 90 198 94 218 C98 238 110 245 120 241 C130 245 142 238 146 218 C150 198 140 180 120 185 Z" fill="#ef4444" stroke="#991b1b" stroke-width="2.5"/>
              <path d="M120 185 L125 174" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
            </g>

            <!-- Blue Ball -->
            <g class="scene-clickable" data-color="blue" data-name="Blue Ball">
              <circle cx="235" cy="218" r="30" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5"/>
              <path d="M214 200 Q235 218 214 236" fill="none" stroke="#dbeafe" stroke-width="3"/>
              <path d="M256 200 Q235 218 256 236" fill="none" stroke="#dbeafe" stroke-width="3"/>
            </g>

            <!-- Purple Balloon -->
            <g class="scene-clickable" data-color="purple" data-name="Purple Balloon">
              <ellipse cx="365" cy="110" rx="26" ry="32" fill="#a855f7" stroke="#6b21a8" stroke-width="2.5"/>
              <line x1="365" y1="142" x2="365" y2="200" stroke="#64748b" stroke-width="2"/>
            </g>

            <!-- Orange Carrot -->
            <g class="scene-clickable" data-color="orange" data-name="Orange Carrot">
              <path d="M350 205 L380 205 L365 256 Z" fill="#f97316" stroke="#c2410c" stroke-width="2.5"/>
              <path d="M358 205 Q365 190 372 205" fill="#22c55e"/>
            </g>

            <!-- Pink Flower -->
            <g class="scene-clickable" data-color="pink" data-name="Pink Flower">
              <line x1="510" y1="210" x2="510" y2="255" stroke="#15803d" stroke-width="4"/>
              <circle cx="496" cy="204" r="10" fill="#ec4899"/>
              <circle cx="524" cy="204" r="10" fill="#ec4899"/>
              <circle cx="510" cy="190" r="10" fill="#ec4899"/>
              <circle cx="510" cy="218" r="10" fill="#ec4899"/>
              <circle cx="510" cy="204" r="9" fill="#facc15"/>
            </g>
          </svg>
        </div>

        <p class="mini-quiz-feedback" id="findColorFeedback"></p>
      </div>
    `;

    engine.playAudio(prompt.audio);
    body.querySelector('#btnBiliFindAudio').addEventListener('click', () => {
      engine.playAudio(prompt.audio);
    });

    const fb = body.querySelector('#findColorFeedback');
    body.querySelectorAll('.scene-clickable').forEach(obj => {
      obj.addEventListener('click', () => {
        if (solved) return;
        if (obj.dataset.color === prompt.colorKey) {
          solved = true;
          findScore++;
          engine.addStars(10);
          obj.classList.add('found-pulse');
          engine.playCheerSound();
          fb.style.color = '#166534';
          fb.textContent = `🎉 ¡Correcto! Encontraste: ${obj.dataset.name}!`;
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'toddler-quiz-launch-btn';
          next.style.cssText = 'display:block; margin:8px auto 0; padding:10px 22px;';
          next.textContent = findIndex + 1 === FIND_PROMPTS.length ? '🏆 Finalizar Búsqueda' : 'Siguiente Búsqueda ➔';
          next.addEventListener('click', () => {
            findIndex++;
            renderFindColor(body, engine);
          });
          fb.after(next);
        } else {
          fb.style.color = '#b91c1c';
          fb.textContent = `❌ Eso es "${obj.dataset.name}". ¡Busca algo de color ${prompt.colorKey.toUpperCase()}!`;
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     FINAL EVALUATION – FOUR INDEPENDENT SKILLS
     -------------------------------------------------------------------------- */
  function renderFinalEvaluation(body, engine) {
    const skills = [
      { id: 'listening', label: '🎧 Listening' },
      { id: 'speaking', label: '🗣️ Speaking' },
      { id: 'reading', label: '📖 Reading' },
      { id: 'writing', label: '✍️ Writing' }
    ];

    body.innerHTML = `
      <div class="colors-panel-card">
        <div class="quiz-mode-tabs" style="margin-bottom:14px;">
          ${skills.map(s => {
            const st = evalState[s.id];
            const doneBadge = st.index >= st.items.length ? ` ✓ (${st.score}/${st.items.length})` : '';
            return `<button type="button" class="quiz-mode-tab ${activeEvalSkill === s.id ? 'active' : ''}" data-skill="${s.id}">${s.label}${doneBadge}</button>`;
          }).join('')}
        </div>
        <div id="evalSkillBody"></div>
      </div>
    `;

    body.querySelectorAll('.quiz-mode-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeEvalSkill = btn.dataset.skill;
        renderFinalEvaluation(body, engine);
      });
    });

    const skillBody = body.querySelector('#evalSkillBody');
    const st = evalState[activeEvalSkill];

    if (st.index >= st.items.length) {
      skillBody.innerHTML = `
        <div style="text-align:center; padding:16px;">
          <div style="font-size:2.8rem;">🏅</div>
          <h3 style="color:#166534; margin:6px 0;">Evaluación de ${activeEvalSkill.toUpperCase()} completada</h3>
          <p style="font-weight:800; color:#334155;">Resultado: ${st.score} de ${st.items.length}</p>
          <button type="button" class="toddler-quiz-launch-btn" id="btnResetEvalSkill">🔄 Reintentar ${activeEvalSkill}</button>
        </div>
      `;
      skillBody.querySelector('#btnResetEvalSkill').addEventListener('click', () => {
        resetEvalSkill(activeEvalSkill);
        renderFinalEvaluation(body, engine);
      });
      return;
    }

    const target = st.items[st.index];

    if (activeEvalSkill === 'listening') {
      const distractors = COLORS_DATA.filter(c => c.key !== target.key).sort(() => Math.random() - 0.5).slice(0, 2);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      skillBody.innerHTML = `
        <div class="mini-quiz-meta"><span>Listening ${st.index + 1} de ${st.items.length}</span><span>⭐ ${st.score}</span></div>
        <div style="text-align:center; margin:10px 0 14px;">
          <button type="button" class="toddler-quiz-launch-btn" id="btnEvalListenPlay">🔊 Escuchar Color</button>
          <p style="margin:8px 0 0; font-weight:800; color:#334155;">Escucha el nombre del color y selecciona la imagen correcta:</p>
        </div>
        <div class="quiz-img-options-grid">
          ${options.map(opt => `
            <button type="button" class="quiz-img-choice-btn" data-key="${opt.key}">
              <img src="${opt.image}" alt="${opt.en}">
            </button>
          `).join('')}
        </div>
        <p class="mini-quiz-feedback" id="evalFeedback"></p>
      `;
      engine.playAudio(target.en);
      skillBody.querySelector('#btnEvalListenPlay').addEventListener('click', () => engine.playAudio(target.en));
      const fb = skillBody.querySelector('#evalFeedback');
      const btns = skillBody.querySelectorAll('.quiz-img-choice-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.key === target.key) {
            st.score++;
            engine.addStars(10);
            btn.classList.add('correct');
            btns.forEach(b => { b.disabled = true; });
            fb.style.color = '#166534';
            fb.textContent = `✅ ¡Correcto! Es ${target.en}.`;
            engine.playCheerSound();
            appendEvalNext(fb, st, body, engine);
          } else {
            btn.classList.add('wrong');
            btn.disabled = true;
            fb.style.color = '#b91c1c';
            fb.textContent = '❌ Escucha de nuevo e intenta otra imagen.';
          }
        });
      });
    } else if (activeEvalSkill === 'speaking') {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      skillBody.innerHTML = `
        <div class="mini-quiz-meta"><span>Speaking ${st.index + 1} de ${st.items.length}</span><span>⭐ ${st.score}</span></div>
        <div style="text-align:center;">
          <div class="mini-quiz-visual-box"><img src="${target.image}" alt="Color to speak" class="mini-quiz-visual-img"></div>
          <p style="font-weight:800; color:#334155; margin:6px 0 12px;">Di el nombre de este color en inglés:</p>
          <button type="button" class="speaking-mic-btn" id="btnEvalSpeakMic" style="margin:6px 0;" aria-label="Hablar">🎤</button>
          <p class="mini-quiz-feedback" id="evalFeedback"></p>
        </div>
      `;
      const micBtn = skillBody.querySelector('#btnEvalSpeakMic');
      const fb = skillBody.querySelector('#evalFeedback');

      micBtn.addEventListener('click', () => {
        if (!SpeechRec) {
          fb.style.color = '#b45309';
          fb.textContent = '⚠️ Tu navegador no soporta reconocimiento de voz. No se pudo evaluar la respuesta.';
          return;
        }
        try {
          const rec = new SpeechRec();
          rec.lang = 'en-US';
          rec.interimResults = false;
          rec.maxAlternatives = 3;
          micBtn.classList.add('recording');
          fb.style.color = '#334155';
          fb.textContent = '🎙️ Escuchando... di el color en inglés.';

          let handled = false;
          rec.onresult = (event) => {
            handled = true;
            micBtn.classList.remove('recording');
            const transcripts = [];
            for (let i = 0; i < event.results[0].length; i++) {
              transcripts.push(event.results[0][i].transcript.toLowerCase().trim());
            }
            const matched = transcripts.some(t => t.includes(target.key));
            if (matched) {
              st.score++;
              engine.addStars(15);
              micBtn.disabled = true;
              fb.style.color = '#166534';
              fb.textContent = `✅ ¡Muy bien! Dijiste "${target.en}".`;
              engine.playCheerSound();
              appendEvalNext(fb, st, body, engine);
            } else {
              fb.style.color = '#b91c1c';
              fb.textContent = `❌ Se escuchó "${transcripts[0] || ''}". Intenta decir "${target.en}".`;
            }
          };

          rec.onerror = (err) => {
            handled = true;
            micBtn.classList.remove('recording');
            fb.style.color = '#b45309';
            fb.textContent = `⚠️ No se pudo evaluar el audio (${err.error || 'sin micrófono'}). Toca el micrófono para reintentar.`;
          };

          rec.onend = () => {
            micBtn.classList.remove('recording');
            if (!handled) {
              fb.style.color = '#b45309';
              fb.textContent = '⚠️ No se detectó voz. No se pudo evaluar; intenta de nuevo.';
            }
          };

          rec.start();
        } catch (e) {
          micBtn.classList.remove('recording');
          fb.style.color = '#b45309';
          fb.textContent = '⚠️ No se pudo iniciar el micrófono. No se pudo evaluar la respuesta.';
        }
      });
    } else if (activeEvalSkill === 'reading') {
      const distractors = COLORS_DATA.filter(c => c.key !== target.key).sort(() => Math.random() - 0.5).slice(0, 2);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      skillBody.innerHTML = `
        <div class="mini-quiz-meta"><span>Reading ${st.index + 1} de ${st.items.length}</span><span>⭐ ${st.score}</span></div>
        <div style="text-align:center; margin:10px 0 14px;">
          <div class="eval-reading-word-pill">${target.en.toUpperCase()}</div>
          <p style="margin:8px 0 0; font-weight:800; color:#334155;">Lee la palabra y selecciona el color correspondiente:</p>
        </div>
        <div class="quiz-img-options-grid">
          ${options.map(opt => `
            <button type="button" class="quiz-img-choice-btn" data-key="${opt.key}">
              <img src="${opt.image}" alt="${opt.en}">
            </button>
          `).join('')}
        </div>
        <p class="mini-quiz-feedback" id="evalFeedback"></p>
      `;
      const fb = skillBody.querySelector('#evalFeedback');
      const btns = skillBody.querySelectorAll('.quiz-img-choice-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.key === target.key) {
            st.score++;
            engine.addStars(10);
            btn.classList.add('correct');
            btns.forEach(b => { b.disabled = true; });
            fb.style.color = '#166534';
            fb.textContent = `✅ ¡Correcto! ${target.en}.`;
            engine.playAudio(target.en);
            appendEvalNext(fb, st, body, engine);
          } else {
            btn.classList.add('wrong');
            btn.disabled = true;
            fb.style.color = '#b91c1c';
            fb.textContent = `❌ Lee la palabra "${target.en.toUpperCase()}" e intenta de nuevo.`;
          }
        });
      });
    } else if (activeEvalSkill === 'writing') {
      skillBody.innerHTML = `
        <div class="mini-quiz-meta"><span>Writing ${st.index + 1} de ${st.items.length}</span><span>⭐ ${st.score}</span></div>
        <div style="text-align:center;">
          <div class="mini-quiz-visual-box"><img src="${target.image}" alt="Write this color" class="mini-quiz-visual-img"></div>
          <p style="font-weight:800; color:#334155; margin:6px 0 10px;">Escribe el nombre de este color en inglés (ortografía exacta):</p>
          <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap;">
            <input type="text" id="evalWriteInput" class="eval-write-input" placeholder="Escribe en inglés..." autocomplete="off">
            <button type="button" class="toddler-quiz-launch-btn" id="btnEvalWriteCheck" style="padding:10px 20px;">Comprobar</button>
          </div>
          <p class="mini-quiz-feedback" id="evalFeedback"></p>
        </div>
      `;
      const input = skillBody.querySelector('#evalWriteInput');
      const checkBtn = skillBody.querySelector('#btnEvalWriteCheck');
      const fb = skillBody.querySelector('#evalFeedback');
      const checkSpelling = () => {
        const val = (input.value || '').trim().toLowerCase();
        if (!val) {
          fb.style.color = '#b45309';
          fb.textContent = '✏️ Escribe el nombre del color primero.';
          return;
        }
        if (val === target.key) {
          st.score++;
          engine.addStars(15);
          input.disabled = true;
          checkBtn.disabled = true;
          fb.style.color = '#166534';
          fb.textContent = `🎉 ¡Ortografía perfecta! "${target.en}"`;
          engine.playCheerSound();
          appendEvalNext(fb, st, body, engine);
        } else {
          fb.style.color = '#b91c1c';
          fb.textContent = `❌ Ortografía incorrecta ("${val}"). Revisa las letras e intenta otra vez.`;
        }
      };
      checkBtn.addEventListener('click', checkSpelling);
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') checkSpelling();
      });
    }
  }

  function appendEvalNext(fbEl, st, body, engine) {
    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'toddler-quiz-launch-btn';
    next.style.cssText = 'display:block; margin:10px auto 0; padding:9px 20px; font-size:0.92rem;';
    next.textContent = st.index + 1 === st.items.length ? '🏆 Ver Resultado' : 'Siguiente ➔';
    next.addEventListener('click', () => {
      st.index++;
      renderFinalEvaluation(body, engine);
    });
    fbEl.after(next);
  }
})();
