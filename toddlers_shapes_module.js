/**
 * Bilikids Adventure - Toddlers Unit 1: Shapes Studio Module
 * 8 Shapes: Circle, Square, Triangle, Rectangle, Oval, Star, Heart, Diamond
 * Activities:
 * 1. Meet the Shapes (Interactive cards, EN/ES, auto audio + repeat)
 * 2. Shape Match (Match shapes to silhouettes with immediate feedback)
 * 3. Find the Shape (Everyday scene interactive clickable objects)
 * 4. Build with Shapes (Real Pointer Drag & Drop to build House, Robot, Boat)
 * 5. Final Evaluation: 4 independent skills (Listening, Speaking, Reading, Writing)
 */
(function () {
  const SHAPES_DATA = [
    {
      key: 'circle', en: 'Circle', es: 'Círculo', color: '#ef4444', stroke: '#991b1b',
      svg: (fill, stroke, cls = '') => `<svg viewBox="0 0 100 100" class="${cls}"><circle cx="50" cy="50" r="38" fill="${fill}" stroke="${stroke}" stroke-width="4"/></svg>`
    },
    {
      key: 'square', en: 'Square', es: 'Cuadrado', color: '#3b82f6', stroke: '#1d4ed8',
      svg: (fill, stroke, cls = '') => `<svg viewBox="0 0 100 100" class="${cls}"><rect x="16" y="16" width="68" height="68" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="4"/></svg>`
    },
    {
      key: 'triangle', en: 'Triangle', es: 'Triángulo', color: '#eab308', stroke: '#a16207',
      svg: (fill, stroke, cls = '') => `<svg viewBox="0 0 100 100" class="${cls}"><polygon points="50,12 88,84 12,84" stroke-linejoin="round" fill="${fill}" stroke="${stroke}" stroke-width="4"/></svg>`
    },
    {
      key: 'rectangle', en: 'Rectangle', es: 'Rectángulo', color: '#22c55e', stroke: '#15803d',
      svg: (fill, stroke, cls = '') => `<svg viewBox="0 0 100 100" class="${cls}"><rect x="10" y="26" width="80" height="48" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="4"/></svg>`
    },
    {
      key: 'oval', en: 'Oval', es: 'Óvalo', color: '#f97316', stroke: '#c2410c',
      svg: (fill, stroke, cls = '') => `<svg viewBox="0 0 100 100" class="${cls}"><ellipse cx="50" cy="50" rx="40" ry="26" fill="${fill}" stroke="${stroke}" stroke-width="4"/></svg>`
    },
    {
      key: 'star', en: 'Star', es: 'Estrella', color: '#a855f7', stroke: '#6b21a8',
      svg: (fill, stroke, cls = '') => `<svg viewBox="0 0 100 100" class="${cls}"><polygon points="50,10 61,36 89,38 67,56 74,84 50,69 26,84 33,56 11,38 39,36" stroke-linejoin="round" fill="${fill}" stroke="${stroke}" stroke-width="4"/></svg>`
    },
    {
      key: 'heart', en: 'Heart', es: 'Corazón', color: '#ec4899', stroke: '#be185d',
      svg: (fill, stroke, cls = '') => `<svg viewBox="0 0 100 100" class="${cls}"><path d="M50 84 C20 62 10 44 14 28 C18 14 36 14 50 28 C64 14 82 14 86 28 C90 44 80 62 50 84 Z" fill="${fill}" stroke="${stroke}" stroke-width="4"/></svg>`
    },
    {
      key: 'diamond', en: 'Diamond', es: 'Rombo', color: '#06b6d4', stroke: '#0e7490',
      svg: (fill, stroke, cls = '') => `<svg viewBox="0 0 100 100" class="${cls}"><polygon points="50,10 86,50 50,90 14,50" stroke-linejoin="round" fill="${fill}" stroke="${stroke}" stroke-width="4"/></svg>`
    }
  ];

  // Tren Geométrico — partes del tren, cada una es una figura
  // painted[key] = true cuando el niño la encontró correctamente
  const TRAIN_PARTS = [
    { key: 'circle',    label: 'Find the CIRCLE!',    audio: 'Find a circle',    hint: 'wheels / porthole' },
    { key: 'rectangle', label: 'Find the RECTANGLE!', audio: 'Find a rectangle', hint: 'wagon body' },
    { key: 'square',    label: 'Find the SQUARE!',    audio: 'Find a square',    hint: 'cargo box' },
    { key: 'triangle',  label: 'Find the TRIANGLE!',  audio: 'Find a triangle',  hint: 'smokestack cap' },
    { key: 'oval',      label: 'Find the OVAL!',      audio: 'Find an oval',     hint: 'steam puff' },
    { key: 'star',      label: 'Find the STAR!',      audio: 'Find a star',      hint: 'train star badge' },
    { key: 'heart',     label: 'Find the HEART!',     audio: 'Find a heart',     hint: 'heart decoration' },
    { key: 'diamond',   label: 'Find the DIAMOND!',   audio: 'Find a diamond',   hint: 'diamond window' }
  ];
  let trainPainted = {}; // key → true when found
  let trainPromptIdx = 0; // current shape index to find

  const BUILD_BLUEPRINTS = [
    {
      id: 'house',
      title: 'A House 🏠',
      instruction: 'Drag and drop the shapes to build a House!',
      slots: [
        { slotId: 'roof', shapeKey: 'triangle', x: 85, y: 20, w: 150, h: 90, label: 'Roof (Triangle)' },
        { slotId: 'walls', shapeKey: 'square', x: 100, y: 110, w: 120, h: 110, label: 'Walls (Square)' },
        { slotId: 'door', shapeKey: 'rectangle', x: 138, y: 155, w: 44, h: 65, label: 'Door (Rectangle)', rotate90: true },
        { slotId: 'window', shapeKey: 'circle', x: 140, y: 62, w: 40, h: 40, label: 'Window (Circle)' }
      ]
    },
    {
      id: 'robot',
      title: 'A Robot 🤖',
      instruction: 'Drag and drop the shapes to build a Robot!',
      slots: [
        { slotId: 'head', shapeKey: 'square', x: 120, y: 25, w: 80, h: 75, label: 'Head (Square)' },
        { slotId: 'body', shapeKey: 'rectangle', x: 100, y: 106, w: 120, h: 95, label: 'Body (Rectangle)' },
        { slotId: 'badge', shapeKey: 'diamond', x: 140, y: 132, w: 40, h: 44, label: 'Badge (Diamond)' },
        { slotId: 'eye', shapeKey: 'circle', x: 142, y: 45, w: 36, h: 36, label: 'Visor (Circle)' }
      ]
    },
    {
      id: 'boat',
      title: 'A Boat ⛵',
      instruction: 'Drag and drop the shapes to build a Boat!',
      slots: [
        { slotId: 'sail', shapeKey: 'triangle', x: 110, y: 35, w: 110, h: 110, label: 'Sail (Triangle)' },
        { slotId: 'hull', shapeKey: 'rectangle', x: 65, y: 150, w: 190, h: 60, label: 'Hull (Rectangle)' },
        { slotId: 'porthole', shapeKey: 'circle', x: 142, y: 162, w: 36, h: 36, label: 'Porthole (Circle)' },
        { slotId: 'flag', shapeKey: 'star', x: 144, y: 8, w: 34, h: 34, label: 'Flag (Star)' }
      ]
    }
  ];

  let activeSubTab = 'meet';
  let selectedShapeKey = 'circle';

  let matchIndex = 0;
  let matchScore = 0;
  let matchPool = [...SHAPES_DATA].sort(() => Math.random() - 0.5);

  // legacy (not used anymore, kept for safety)
  let findScore = 0;

  let buildIndex = 0;

  let activeEvalSkill = 'listening';
  const evalState = {
    listening: { index: 0, score: 0, items: [] },
    speaking: { index: 0, score: 0, items: [] },
    reading: { index: 0, score: 0, items: [] },
    writing: { index: 0, score: 0, items: [] }
  };

  function resetEvalSkill(skill) {
    const shuffled = [...SHAPES_DATA].sort(() => Math.random() - 0.5).slice(0, 5);
    evalState[skill] = { index: 0, score: 0, items: shuffled };
  }
  Object.keys(evalState).forEach(resetEvalSkill);

  window.renderToddlersShapesStudio = function (container, engine) {
    const isTrainDone = Object.keys(trainPainted).length >= TRAIN_PARTS.length;
    const subTabs = [
      { id: 'meet', label: '1. 🔷 Meet the Shapes' },
      { id: 'match', label: '2. 🧩 Shape Match' },
      { id: 'find', label: `3. 🚂 Tren Geométrico ${isTrainDone ? '✓' : ''}` },
      { id: 'build', label: `4. 🏗️ Build with Shapes ${isTrainDone ? '⭐' : ''}` },
      { id: 'eval', label: '5. 🏆 Final Evaluation (4 Skills)' }
    ];

    container.innerHTML = `
      <div class="shapes-studio-wrap">
        <div style="margin-bottom: 1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <h2 style="margin:0; font-size:1.45rem; color:#78350f;">🔷 Unit 1 • Shapes Adventure</h2>
            <p style="margin:4px 0 0; color:#6b7280; font-size:0.95rem;">Learn 8 geometric shapes, match silhouettes, paint the geometric train, build objects, and complete the 4-skills evaluation.</p>
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

        <div id="shapesStudioBody"></div>
      </div>
    `;

    container.querySelectorAll('.colors-subtab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeSubTab = btn.dataset.subtab;
        window.renderToddlersShapesStudio(container, engine);
      });
    });

    const body = container.querySelector('#shapesStudioBody');
    if (activeSubTab === 'meet') renderMeetShapes(body, engine);
    else if (activeSubTab === 'match') renderShapeMatch(body, engine);
    else if (activeSubTab === 'find') renderFindShape(body, engine);
    else if (activeSubTab === 'build') renderBuildShapes(body, engine);
    else if (activeSubTab === 'eval') renderFinalEvaluation(body, engine);
  };

  /* --------------------------------------------------------------------------
     ACTIVITY 1 – MEET THE SHAPES
     -------------------------------------------------------------------------- */
  function renderMeetShapes(body, engine) {
    const activeShape = SHAPES_DATA.find(s => s.key === selectedShapeKey) || SHAPES_DATA[0];

    body.innerHTML = `
      <div class="shape-focus-panel" style="border-color:${activeShape.color};">
        <div class="shape-focus-svg">${activeShape.svg(activeShape.color, activeShape.stroke, 'shape-svg-lg')}</div>
        <div class="shape-focus-info">
          <h3 style="margin:0; font-size:1.85rem; color:${activeShape.color};">${activeShape.en}</h3>
          <div style="font-size:1.1rem; font-weight:800; color:#64748b; margin:4px 0 12px;">Español: ${activeShape.es}</div>
          <button type="button" class="toddler-quiz-launch-btn" id="btnRepeatShapeAudio" style="padding:10px 20px; font-size:0.95rem;">
            🔊 Repeat "${activeShape.en}"
          </button>
        </div>
      </div>

      <div class="shapes-meet-grid">
        ${SHAPES_DATA.map(s => `
          <button type="button" class="shape-meet-card ${s.key === selectedShapeKey ? 'selected' : ''}" style="border-color:${s.key === selectedShapeKey ? s.color : '#e2e8f0'};" data-key="${s.key}">
            <div class="shape-meet-svg">${s.svg(s.color, s.stroke, 'shape-svg-sm')}</div>
            <div class="shape-meet-en">${s.en}</div>
            <div class="shape-meet-es">${s.es}</div>
          </button>
        `).join('')}
      </div>
    `;

    body.querySelector('#btnRepeatShapeAudio').addEventListener('click', () => {
      engine.playAudio(activeShape.en);
    });

    body.querySelectorAll('.shape-meet-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedShapeKey = card.dataset.key;
        const chosen = SHAPES_DATA.find(s => s.key === selectedShapeKey);
        renderMeetShapes(body, engine);
        if (chosen) engine.playAudio(chosen.en);
      });
    });
  }

  /* --------------------------------------------------------------------------
     ACTIVITY 2 – SHAPE MATCH (SHAPES TO SILHOUETTES)
     -------------------------------------------------------------------------- */
  function renderShapeMatch(body, engine) {
    if (matchIndex >= matchPool.length) {
      body.innerHTML = `
        <div class="colors-panel-card" style="text-align:center;">
          <div style="font-size:3rem;">🧩</div>
          <h3 style="color:#166534;">¡Completaste Shape Match!</h3>
          <p style="font-weight:800; color:#334155;">Aciertos: ${matchScore} de ${matchPool.length}</p>
          <button type="button" class="toddler-quiz-launch-btn" id="btnRetryShapeMatch">🔄 Jugar de nuevo</button>
        </div>
      `;
      body.querySelector('#btnRetryShapeMatch').addEventListener('click', () => {
        matchIndex = 0;
        matchScore = 0;
        matchPool = [...SHAPES_DATA].sort(() => Math.random() - 0.5);
        renderShapeMatch(body, engine);
      });
      return;
    }

    const target = matchPool[matchIndex];
    const distractors = SHAPES_DATA.filter(s => s.key !== target.key).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [target, ...distractors].sort(() => Math.random() - 0.5);

    body.innerHTML = `
      <div class="colors-panel-card">
        <div class="mini-quiz-meta">
          <span>Figura ${matchIndex + 1} de ${matchPool.length}</span>
          <span>⭐ ${matchScore}</span>
        </div>
        <div style="text-align:center; margin:8px 0 14px;">
          <div class="shape-match-target-box">${target.svg(target.color, target.stroke, 'shape-svg-md')}</div>
          <h3 style="margin:8px 0 4px; font-size:1.3rem; color:#0f172a;">${target.en}</h3>
          <p style="margin:0; color:#64748b; font-weight:700;">Toca la silueta oscura que coincide con esta figura:</p>
        </div>
        <div class="shape-silhouettes-grid">
          ${options.map(opt => `
            <button type="button" class="shape-silhouette-btn" data-key="${opt.key}" aria-label="Silhouette ${opt.en}">
              ${opt.svg('#334155', '#0f172a', 'shape-svg-sm')}
            </button>
          `).join('')}
        </div>
        <p class="mini-quiz-feedback" id="shapeMatchFeedback"></p>
      </div>
    `;

    const fb = body.querySelector('#shapeMatchFeedback');
    const btns = body.querySelectorAll('.shape-silhouette-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.key === target.key) {
          matchScore++;
          engine.addStars(10);
          btn.classList.add('correct');
          btn.innerHTML = target.svg(target.color, target.stroke, 'shape-svg-sm');
          btns.forEach(b => { b.disabled = true; });
          fb.style.color = '#166534';
          fb.textContent = `✅ ¡Correcto! ${target.en}`;
          engine.playAudio(target.en);
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'toddler-quiz-launch-btn';
          next.style.cssText = 'display:block; margin:10px auto 0; padding:10px 22px;';
          next.textContent = matchIndex + 1 === matchPool.length ? '🏆 Ver Resultado' : 'Siguiente ➔';
          next.addEventListener('click', () => {
            matchIndex++;
            renderShapeMatch(body, engine);
          });
          fb.after(next);
        } else {
          btn.classList.add('wrong');
          btn.disabled = true;
          fb.style.color = '#b91c1c';
          fb.textContent = `❌ Esa silueta no es ${target.en}. Intenta otra.`;
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     ACTIVITY 3 – FIND THE SHAPE: TREN GEOMÉTRICO
     SVG train where each part represents one of the 8 shapes.
     Parts start as outline/grey. When child selects the correct shape from
     the bottom picker, that train part is painted with its shape's color.
     When all 8 parts are painted the "Build" tab is unlocked.
     -------------------------------------------------------------------------- */
  function buildTrainSVG(painted) {
    const palette = {
      circle:    { fill: '#ef4444', stroke: '#991b1b' },
      square:    { fill: '#3b82f6', stroke: '#1d4ed8' },
      triangle:  { fill: '#eab308', stroke: '#a16207' },
      rectangle: { fill: '#22c55e', stroke: '#15803d' },
      oval:      { fill: '#f97316', stroke: '#c2410c' },
      star:      { fill: '#a855f7', stroke: '#6b21a8' },
      heart:     { fill: '#ec4899', stroke: '#be185d' },
      diamond:   { fill: '#06b6d4', stroke: '#0e7490' }
    };
    const col = (k) => painted[k] ? palette[k] : { fill: '#ffffff', stroke: '#1e293b' };

    const cCir = col('circle');
    const cSq = col('square');
    const cTri = col('triangle');
    const cRec = col('rectangle');
    const cOv = col('oval');
    const cSt = col('star');
    const cHt = col('heart');
    const cDia = col('diamond');
    const outline = '#1e293b';
    const sw = '4.5';

    let ties = '';
    for (let x = 15; x < 910; x += 48) {
      ties += `<rect x="${x}" y="260" width="14" height="22" rx="2"/>`;
    }

    return `
    <svg viewBox="0 0 920 330" class="find-scene-svg" id="trainSVG" style="max-width:100%; display:block; margin:0 auto; background:#f0f9ff; border-radius:18px;" aria-label="Tren Geométrico">
      <!-- Sky & Soft Hills -->
      <rect width="920" height="330" fill="#f0f9ff"/>
      <path d="M 0 240 Q 460 215 920 240 L 920 330 L 0 330 Z" fill="#dcfce7"/>

      <!-- Wooden Ties -->
      <g fill="#78350f" opacity="0.65">
        ${ties}
      </g>
      <!-- Steel Rails -->
      <rect x="0" y="258" width="920" height="6" fill="#64748b" rx="2"/>
      <rect x="0" y="274" width="920" height="5" fill="#475569" rx="2"/>

      <!-- Couplers -->
      <rect x="255" y="226" width="40" height="10" rx="3" fill="#334155" stroke="${outline}" stroke-width="2"/>
      <rect x="535" y="226" width="40" height="10" rx="3" fill="#334155" stroke="${outline}" stroke-width="2"/>

      <!-- Wagon 1 Flatbed Base (Neutral Chassis) -->
      <rect x="30" y="215" width="230" height="28" rx="6" fill="#cbd5e1" stroke="${outline}" stroke-width="${sw}"/>
      <line x1="35" y1="229" x2="255" y2="229" stroke="#94a3b8" stroke-width="2"/>

      <!-- 1. ZONE: OVAL (Boat Hull) -->
      <g class="train-zone ${painted.oval ? 'is-painted' : 'is-unpainted'}" data-shape="oval" id="train-zone-oval" title="Oval (Boat Hull)">
        <path d="M 48 165 C 65 215 225 215 242 165 Z" fill="${cOv.fill}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
        <path d="M 44 165 L 246 165" stroke="${outline}" stroke-width="3" stroke-linecap="round"/>
      </g>

      <!-- Mast -->
      <line x1="145" y1="165" x2="145" y2="45" stroke="${outline}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="145" cy="42" r="5" fill="#ffffff" stroke="${outline}" stroke-width="3"/>

      <!-- 2. ZONE: TRIANGLE (Sailboat Sails) -->
      <g class="train-zone ${painted.triangle ? 'is-painted' : 'is-unpainted'}" data-shape="triangle" id="train-zone-triangle" title="Triangle (Sails)">
        <polygon points="153,55 225,160 153,160" fill="${cTri.fill}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
        <polygon points="137,70 70,160 137,160" fill="${cTri.fill}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
      </g>

      <!-- 3. ZONE: STAR (Mast Star Flag) -->
      <g class="train-zone ${painted.star ? 'is-painted' : 'is-unpainted'}" data-shape="star" id="train-zone-star" title="Star (Flag)">
        <polygon points="145,18 150,30 163,31 153,40 156,52 145,45 134,52 137,40 127,31 140,30" fill="${cSt.fill}" stroke="${outline}" stroke-width="2.5" stroke-linejoin="round"/>
      </g>

      <!-- Wagon 2 Flatbed Base -->
      <rect x="290" y="215" width="250" height="28" rx="6" fill="#cbd5e1" stroke="${outline}" stroke-width="${sw}"/>

      <!-- 4. ZONE: SQUARE (Cargo Cube on Wagon 2) -->
      <g class="train-zone ${painted.square ? 'is-painted' : 'is-unpainted'}" data-shape="square" id="train-zone-square" title="Square (Cargo Cube)">
        <rect x="305" y="115" width="100" height="100" rx="8" fill="${cSq.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <rect x="317" y="127" width="76" height="76" rx="4" fill="none" stroke="${cSq.stroke}" stroke-width="2" stroke-dasharray="6,4" opacity="0.7"/>
        <line x1="305" y1="115" x2="405" y2="215" stroke="${cSq.stroke}" stroke-width="2" opacity="0.35"/>
        <line x1="405" y1="115" x2="305" y2="215" stroke="${cSq.stroke}" stroke-width="2" opacity="0.35"/>
      </g>

      <!-- 5. ZONE: RECTANGLE (Passenger Coach Body & Boiler) -->
      <g class="train-zone ${painted.rectangle ? 'is-painted' : 'is-unpainted'}" data-shape="rectangle" id="train-zone-rectangle" title="Rectangle (Coach & Boiler)">
        <rect x="415" y="130" width="120" height="85" rx="8" fill="${cRec.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <rect x="410" y="120" width="130" height="14" rx="6" fill="#64748b" stroke="${outline}" stroke-width="3"/>
        <!-- Boiler -->
        <rect x="685" y="145" width="155" height="70" rx="8" fill="${cRec.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <line x1="735" y1="145" x2="735" y2="215" stroke="${cRec.stroke}" stroke-width="2" opacity="0.5"/>
        <line x1="785" y1="145" x2="785" y2="215" stroke="${cRec.stroke}" stroke-width="2" opacity="0.5"/>
      </g>

      <!-- 6. ZONE: HEART (Heart Emblem on Coach) -->
      <g class="train-zone ${painted.heart ? 'is-painted' : 'is-unpainted'}" data-shape="heart" id="train-zone-heart" title="Heart (Emblem)">
        <path d="M 475 186 C 450 162 435 142 443 125 C 450 110 468 110 475 124 C 482 110 500 110 507 125 C 515 142 500 162 475 186 Z" fill="${cHt.fill}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
      </g>

      <!-- Locomotive Cab Body (Grey neutral) -->
      <rect x="570" y="110" width="115" height="105" rx="8" fill="#cbd5e1" stroke="${outline}" stroke-width="${sw}"/>
      <rect x="560" y="98" width="135" height="15" rx="6" fill="#64748b" stroke="${outline}" stroke-width="3"/>

      <!-- 7. ZONE: DIAMOND (Diamond Window on Locomotive Cab) -->
      <g class="train-zone ${painted.diamond ? 'is-painted' : 'is-unpainted'}" data-shape="diamond" id="train-zone-diamond" title="Diamond (Window)">
        <polygon points="627,130 655,160 627,190 599,160" fill="${cDia.fill}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
        <line x1="627" y1="130" x2="627" y2="190" stroke="${outline}" stroke-width="2"/>
        <line x1="599" y1="160" x2="655" y2="160" stroke="${outline}" stroke-width="2"/>
      </g>

      <!-- Locomotive Details (Nose, Smokestack, Cowcatcher) -->
      <polygon points="840,145 875,178 875,215 840,215" fill="#94a3b8" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
      <rect x="738" y="102" width="24" height="43" rx="3" fill="#64748b" stroke="${outline}" stroke-width="3"/>
      <polygon points="726,102 774,102 750,78" fill="#64748b" stroke="${outline}" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="875,255 915,255 875,215" fill="#64748b" stroke="${outline}" stroke-width="3" stroke-linejoin="round"/>
      <rect x="865" y="160" width="14" height="22" rx="3" fill="#fbbf24" stroke="${outline}" stroke-width="2"/>

      <!-- 8. ZONE: CIRCLE (All Train Wheels) -->
      <g class="train-zone ${painted.circle ? 'is-painted' : 'is-unpainted'}" data-shape="circle" id="train-zone-circle" title="Circle (Wheels)">
        <!-- Wagon 1 Wheels -->
        <circle cx="75" cy="254" r="22" fill="${cCir.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="75" cy="254" r="8" fill="#ffffff" stroke="${outline}" stroke-width="3"/>
        <circle cx="215" cy="254" r="22" fill="${cCir.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="215" cy="254" r="8" fill="#ffffff" stroke="${outline}" stroke-width="3"/>
        <!-- Wagon 2 Wheels -->
        <circle cx="345" cy="254" r="22" fill="${cCir.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="345" cy="254" r="8" fill="#ffffff" stroke="${outline}" stroke-width="3"/>
        <circle cx="485" cy="254" r="22" fill="${cCir.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="485" cy="254" r="8" fill="#ffffff" stroke="${outline}" stroke-width="3"/>
        <!-- Locomotive Wheels × 3 -->
        <circle cx="620" cy="250" r="26" fill="${cCir.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="620" cy="250" r="10" fill="#ffffff" stroke="${outline}" stroke-width="3.5"/>
        <circle cx="710" cy="250" r="26" fill="${cCir.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="710" cy="250" r="10" fill="#ffffff" stroke="${outline}" stroke-width="3.5"/>
        <circle cx="800" cy="250" r="26" fill="${cCir.fill}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="800" cy="250" r="10" fill="#ffffff" stroke="${outline}" stroke-width="3.5"/>
        <!-- Driver Rod -->
        <rect x="615" y="246" width="190" height="8" rx="4" fill="#64748b" stroke="${outline}" stroke-width="2"/>
      </g>
    </svg>`;
  }

  function renderFindShape(body, engine) {
    const totalPainted = Object.keys(trainPainted).length;

    // Check if all 8 shapes are completed
    if (totalPainted >= TRAIN_PARTS.length) {
      body.innerHTML = `
        <div class="colors-panel-card" style="text-align:center;">
          <div style="font-size:3.5rem; animation:trainWhistle 1s ease infinite alternate;">🚂🎉</div>
          <h3 style="color:#166534; font-size:1.6rem; margin:6px 0 2px;">¡El tren geométrico está completo!</h3>
          <p style="font-weight:800; color:#334155; margin:0 0 14px;">¡Ubicaste y pintaste las 8 figuras geométricas en el tren!</p>
          <div class="find-scene-box" style="padding:4px 0 8px; margin-bottom:16px;">
            ${buildTrainSVG(trainPainted)}
          </div>
          <div style="display:flex; gap:14px; justify-content:center; align-items:center; flex-wrap:wrap; margin-top:14px;">
            <button type="button" class="toddler-quiz-launch-btn" id="btnTrainRetry" style="background:#64748b;">
              🔄 Jugar de nuevo
            </button>
            <button type="button" class="toddler-quiz-launch-btn train-advance-btn" id="btnTrainNextActivity" style="background:linear-gradient(135deg,#059669,#047857); font-size:1.1rem; padding:14px 28px; box-shadow:0 8px 24px rgba(5,150,105,0.4);">
              4. 🏗️ Build with Shapes ➔
            </button>
          </div>
        </div>
      `;

      body.querySelector('#btnTrainRetry').addEventListener('click', () => {
        trainPainted = {};
        trainPromptIdx = 0;
        renderFindShape(body, engine);
      });

      body.querySelector('#btnTrainNextActivity').addEventListener('click', () => {
        activeSubTab = 'build';
        const wrap = body.closest('.shapes-studio-wrap');
        const outer = wrap ? wrap.parentElement : body.parentElement;
        window.renderToddlersShapesStudio(outer, engine);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    // Current target prompt
    let current = TRAIN_PARTS[trainPromptIdx] || TRAIN_PARTS[0];
    if (trainPainted[current.key]) {
      const remaining = TRAIN_PARTS.findIndex(p => !trainPainted[p.key]);
      if (remaining !== -1) {
        trainPromptIdx = remaining;
        current = TRAIN_PARTS[trainPromptIdx];
      }
    }

    body.innerHTML = `
      <div class="colors-panel-card" id="trainActivityCard">
        <div class="mini-quiz-meta">
          <span id="trainMetaCount">🎨 ${totalPainted} / ${TRAIN_PARTS.length} figuras ubicadas</span>
          <span id="trainMetaStars">⭐ ${totalPainted * 10}</span>
        </div>

        <!-- Bili instruction banner -->
        <div class="bili-find-banner" style="margin-bottom:12px;">
          <img src="assets/mascot/bili_pixel_idle.png" alt="Bili" class="bili-find-avatar">
          <div style="flex:1;">
            <div style="font-weight:900; color:#78350f; font-size:1.2rem;" id="trainPromptLabel">
              🚂 "${current.label}"
            </div>
            <div style="font-size:0.92rem; color:#64748b; margin-top:3px;" id="trainPromptHint">
              👆 <strong>Toca la figura dentro del tren</strong> para pintarla (Pista: <em>${current.hint}</em>)
            </div>
            <button type="button" class="toddler-nav-pill active" id="btnHearTrainShape"
              style="margin-top:8px; padding:6px 16px; font-size:0.88rem;">
              🔊 Escuchar Instrucción
            </button>
          </div>
        </div>

        <!-- TRAIN SVG BOARD (Child touches shapes directly here!) -->
        <div class="find-scene-box" id="trainSvgContainer" style="padding:4px 0 8px;">
          ${buildTrainSVG(trainPainted)}
        </div>

        <p class="mini-quiz-feedback" id="trainFeedback" style="min-height:1.6em; margin:10px 0 6px; font-size:1rem;"></p>

        <!-- Checklist of shapes (Visual progress, clicking only plays pronunciation audio) -->
        <div style="margin:8px 0 6px; text-align:center; font-weight:800; color:#475569; font-size:0.9rem;">
          📋 Figuras por ubicar en el tren:
        </div>
        <div class="train-shapes-checklist" id="trainChecklist">
          ${TRAIN_PARTS.map(p => {
            const shapeObj = SHAPES_DATA.find(s => s.key === p.key);
            const done = !!trainPainted[p.key];
            const isTarget = (!done && current.key === p.key);
            return `
              <div class="train-check-card ${done ? 'done' : ''} ${isTarget ? 'target' : ''}" data-key="${p.key}" title="Toca para escuchar: ${shapeObj.en}">
                <div class="train-check-svg">
                  ${shapeObj.svg(done ? shapeObj.color : (isTarget ? shapeObj.color : '#cbd5e1'), done ? shapeObj.stroke : (isTarget ? shapeObj.stroke : '#94a3b8'), 'shape-svg-xs')}
                </div>
                <div class="train-check-text">
                  <span class="train-check-name" style="color:${done ? shapeObj.color : (isTarget ? '#b45309' : '#64748b')};">${shapeObj.en}</span>
                  <span class="train-check-status">${done ? '✅ Pintado' : (isTarget ? '🎯 ¡Búscalo!' : '⏳ Por ubicar')}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Play prompt audio
    engine.playAudio(current.audio);
    body.querySelector('#btnHearTrainShape').addEventListener('click', () => {
      engine.playAudio(current.audio);
    });

    // Clicking checklist cards plays audio sample
    body.querySelectorAll('.train-check-card').forEach(card => {
      card.addEventListener('click', () => {
        const k = card.dataset.key;
        const sh = SHAPES_DATA.find(s => s.key === k);
        if (sh) engine.playAudio(sh.en);
      });
    });

    const fb = body.querySelector('#trainFeedback');
    let locked = false;

    // Handle touch on train shape zone
    const handleTrainZoneClick = (tappedShapeKey, zoneEl) => {
      if (locked) return;
      const targetKey = TRAIN_PARTS[trainPromptIdx].key;
      const tappedShape = SHAPES_DATA.find(s => s.key === tappedShapeKey);

      // If already painted:
      if (trainPainted[tappedShapeKey]) {
        fb.style.color = '#3b82f6';
        fb.textContent = `ℹ️ El ${tappedShape.en} ya fue pintado. ¡Ahora busca: ${TRAIN_PARTS[trainPromptIdx].label}!`;
        engine.playAudio(tappedShape.en);
        return;
      }

      if (tappedShapeKey === targetKey) {
        // ✅ CORRECT! Child tapped the requested shape inside the train drawing!
        locked = true;
        trainPainted[tappedShapeKey] = true;
        engine.addStars(10);
        engine.playAudio(tappedShape.en);

        // Repaint train SVG to apply color to the zone
        const container = body.querySelector('#trainSvgContainer');
        if (container) {
          container.innerHTML = buildTrainSVG(trainPainted);
          attachTrainZoneListeners();

          // Trigger pop animation on the newly painted zone
          const newlyPaintedZone = container.querySelector(`[data-shape="${tappedShapeKey}"]`);
          if (newlyPaintedZone) {
            newlyPaintedZone.classList.add('train-zone-popping');
          }
        }

        // Update meta counters
        const newCount = Object.keys(trainPainted).length;
        const countEl = body.querySelector('#trainMetaCount');
        if (countEl) countEl.textContent = `🎨 ${newCount} / ${TRAIN_PARTS.length} figuras ubicadas`;
        const starEl = body.querySelector('#trainMetaStars');
        if (starEl) starEl.textContent = `⭐ ${newCount * 10}`;

        // Feedback
        fb.style.color = '#166534';
        fb.textContent = `✅ ¡Correcto! Ubicaste y pintaste: ${tappedShape.en} (${tappedShape.es})`;

        // Update checklist
        const checkCard = body.querySelector(`.train-check-card[data-key="${tappedShapeKey}"]`);
        if (checkCard) {
          checkCard.className = 'train-check-card done';
          checkCard.querySelector('.train-check-name').style.color = tappedShape.color;
          checkCard.querySelector('.train-check-status').textContent = '✅ Pintado';
          checkCard.querySelector('.train-check-svg').innerHTML = tappedShape.svg(tappedShape.color, tappedShape.stroke, 'shape-svg-xs');
        }

        // Check completion
        if (newCount >= TRAIN_PARTS.length) {
          setTimeout(() => {
            renderFindShape(body, engine);
            const wrap = body.closest('.shapes-studio-wrap');
            if (wrap) {
              const outer = wrap.parentElement;
              window.renderToddlersShapesStudio(outer, engine);
            }
          }, 1100);
          return;
        }

        // Advance to next unpainted shape
        trainPromptIdx++;
        while (trainPromptIdx < TRAIN_PARTS.length && trainPainted[TRAIN_PARTS[trainPromptIdx].key]) {
          trainPromptIdx++;
        }
        if (trainPromptIdx >= TRAIN_PARTS.length) {
          trainPromptIdx = TRAIN_PARTS.findIndex(p => !trainPainted[p.key]);
        }
        const nextPart = TRAIN_PARTS[trainPromptIdx];

        setTimeout(() => {
          locked = false;
          fb.textContent = '';
          const lbl = body.querySelector('#trainPromptLabel');
          if (lbl) lbl.textContent = `🚂 "${nextPart.label}"`;
          const hintEl = body.querySelector('#trainPromptHint');
          if (hintEl) hintEl.innerHTML = `👆 <strong>Toca la figura dentro del tren</strong> para pintarla (Pista: <em>${nextPart.hint}</em>)`;

          // Highlight target in checklist
          body.querySelectorAll('.train-check-card').forEach(c => {
            if (!trainPainted[c.dataset.key]) {
              if (c.dataset.key === nextPart.key) {
                c.className = 'train-check-card target';
                c.querySelector('.train-check-status').textContent = '🎯 ¡Búscalo!';
              } else {
                c.className = 'train-check-card';
                c.querySelector('.train-check-status').textContent = '⏳ Por ubicar';
              }
            }
          });

          engine.playAudio(nextPart.audio);
          const hearBtn = body.querySelector('#btnHearTrainShape');
          if (hearBtn) hearBtn.onclick = () => engine.playAudio(nextPart.audio);
        }, 950);

      } else {
        // ❌ WRONG ZONE PRESSED
        if (zoneEl) {
          zoneEl.classList.add('train-zone-shake');
          setTimeout(() => zoneEl.classList.remove('train-zone-shake'), 600);
        }
        fb.style.color = '#b91c1c';
        fb.textContent = `❌ Esa figura es un ${tappedShape.en} (${tappedShape.es}). ¡Busca: ${TRAIN_PARTS[trainPromptIdx].label}!`;
        engine.playAudio(tappedShape.en);
      }
    };

    function attachTrainZoneListeners() {
      const container = body.querySelector('#trainSvgContainer');
      if (!container) return;
      container.querySelectorAll('.train-zone').forEach(zone => {
        zone.addEventListener('click', (e) => {
          e.stopPropagation();
          const sh = zone.dataset.shape;
          if (sh) handleTrainZoneClick(sh, zone);
        });
      });
    }
    attachTrainZoneListeners();
  }

  /* --------------------------------------------------------------------------
     ACTIVITY 4 – BUILD WITH SHAPES (REAL POINTER DRAG & DROP)
     -------------------------------------------------------------------------- */
  function renderBuildShapes(body, engine) {
    const bp = BUILD_BLUEPRINTS[buildIndex % BUILD_BLUEPRINTS.length];
    const placedSlots = new Set();

    body.innerHTML = `
      <div class="colors-panel-card">
        <div class="mini-quiz-meta">
          <span>Construcción ${buildIndex + 1} de ${BUILD_BLUEPRINTS.length}: ${bp.title}</span>
          <span id="buildProgressLabel">0 / ${bp.slots.length} piezas</span>
        </div>

        <div class="quiz-mode-tabs" style="margin-bottom:10px;">
          ${BUILD_BLUEPRINTS.map((b, idx) => `
            <button type="button" class="quiz-mode-tab ${idx === buildIndex ? 'active' : ''}" data-bp="${idx}">${b.title}</button>
          `).join('')}
        </div>

        <p style="text-align:center; font-weight:800; color:#334155; margin:0 0 12px;">
          ${bp.instruction} (Arrastra cada figura a su silueta)
        </p>

        <div class="build-arena-grid">
          <div class="build-blueprint-stage" id="buildStage">
            ${bp.slots.map(sl => {
              const sh = SHAPES_DATA.find(s => s.key === sl.shapeKey);
              return `
                <div class="build-slot-zone" data-slot="${sl.slotId}" data-shape="${sl.shapeKey}"
                  style="left:${sl.x}px; top:${sl.y}px; width:${sl.w}px; height:${sl.h}px;">
                  ${sh.svg('#e2e8f0', '#94a3b8', 'build-slot-svg')}
                </div>
              `;
            }).join('')}
          </div>

          <div class="build-tray-col" id="buildTray">
            <div style="font-size:0.85rem; font-weight:800; color:#64748b; margin-bottom:6px; text-align:center;">
              Piezas disponibles:
            </div>
            <div class="build-pieces-list">
              ${bp.slots.map(sl => {
                const sh = SHAPES_DATA.find(s => s.key === sl.shapeKey);
                return `
                  <div class="build-drag-piece" data-slot="${sl.slotId}" data-shape="${sl.shapeKey}" title="${sl.label}">
                    <div class="build-piece-svg-wrap">${sh.svg(sh.color, sh.stroke, 'shape-svg-sm')}</div>
                    <span class="build-piece-label">${sh.en}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <p class="mini-quiz-feedback" id="buildFeedback"></p>
      </div>
    `;

    body.querySelectorAll('.quiz-mode-tab[data-bp]').forEach(btn => {
      btn.addEventListener('click', () => {
        buildIndex = Number(btn.dataset.bp);
        renderBuildShapes(body, engine);
      });
    });

    const fb = body.querySelector('#buildFeedback');
    const progLabel = body.querySelector('#buildProgressLabel');
    const stageEl = body.querySelector('#buildStage');

    const placeSlot = (slotEl, pieceEl, shapeObj) => {
      const slotId = slotEl.dataset.slot;
      if (placedSlots.has(slotId)) return;
      placedSlots.add(slotId);

      slotEl.classList.add('snapped');
      slotEl.innerHTML = shapeObj.svg(shapeObj.color, shapeObj.stroke, 'build-slot-svg');
      pieceEl.classList.add('used');
      pieceEl.style.pointerEvents = 'none';

      progLabel.textContent = `${placedSlots.size} / ${bp.slots.length} piezas`;
      engine.playAudio(shapeObj.en);

      if (placedSlots.size === bp.slots.length) {
        engine.addStars(20);
        fb.style.color = '#166534';
        fb.textContent = `🎉 ¡Construcción completada: ${bp.title}!`;
        if (buildIndex + 1 < BUILD_BLUEPRINTS.length) {
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'toddler-quiz-launch-btn';
          next.style.cssText = 'display:block; margin:8px auto 0; padding:10px 22px;';
          next.textContent = 'Siguiente Objeto ➔';
          next.addEventListener('click', () => {
            buildIndex++;
            renderBuildShapes(body, engine);
          });
          fb.after(next);
        }
      } else {
        fb.style.color = '#166534';
        fb.textContent = `✅ ¡Encajó! ${shapeObj.en}`;
      }
    };

    // Real Pointer Events Drag & Drop (Mouse + Touch + Stylus)
    body.querySelectorAll('.build-drag-piece').forEach(piece => {
      piece.addEventListener('pointerdown', (e) => {
        if (piece.classList.contains('used')) return;
        e.preventDefault();

        const shapeKey = piece.dataset.shape;
        const shapeObj = SHAPES_DATA.find(s => s.key === shapeKey);
        const rect = piece.getBoundingClientRect();

        const ghost = piece.cloneNode(true);
        ghost.className = 'build-drag-ghost';
        ghost.style.left = `${e.clientX - rect.width / 2}px`;
        ghost.style.top = `${e.clientY - rect.height / 2}px`;
        document.body.appendChild(ghost);

        piece.style.opacity = '0.35';

        const onMove = (ev) => {
          ghost.style.left = `${ev.clientX - rect.width / 2}px`;
          ghost.style.top = `${ev.clientY - rect.height / 2}px`;
        };

        const onUp = (ev) => {
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
          document.removeEventListener('pointercancel', onUp);
          ghost.remove();
          piece.style.opacity = '';

          // Check hit against unplaced slots
          const slots = Array.from(stageEl.querySelectorAll('.build-slot-zone:not(.snapped)'));
          let matchedSlot = null;
          for (const sl of slots) {
            const sr = sl.getBoundingClientRect();
            const pad = 26;
            if (
              ev.clientX >= sr.left - pad && ev.clientX <= sr.right + pad &&
              ev.clientY >= sr.top - pad && ev.clientY <= sr.bottom + pad
            ) {
              if (sl.dataset.shape === shapeKey) {
                matchedSlot = sl;
                break;
              }
            }
          }

          if (matchedSlot) {
            placeSlot(matchedSlot, piece, shapeObj);
          } else {
            fb.style.color = '#b45309';
            fb.textContent = `💡 Arrastra "${shapeObj.en}" hasta la silueta con forma de ${shapeObj.en}.`;
          }
        };

        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
        document.addEventListener('pointercancel', onUp);
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
        <div id="evalShapeSkillBody"></div>
      </div>
    `;

    body.querySelectorAll('.quiz-mode-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeEvalSkill = btn.dataset.skill;
        renderFinalEvaluation(body, engine);
      });
    });

    const skillBody = body.querySelector('#evalShapeSkillBody');
    const st = evalState[activeEvalSkill];

    if (st.index >= st.items.length) {
      skillBody.innerHTML = `
        <div style="text-align:center; padding:16px;">
          <div style="font-size:2.8rem;">🏅</div>
          <h3 style="color:#166534; margin:6px 0;">Evaluación de ${activeEvalSkill.toUpperCase()} completada</h3>
          <p style="font-weight:800; color:#334155;">Resultado: ${st.score} de ${st.items.length}</p>
          <button type="button" class="toddler-quiz-launch-btn" id="btnResetShapeEval">🔄 Reintentar ${activeEvalSkill}</button>
        </div>
      `;
      skillBody.querySelector('#btnResetShapeEval').addEventListener('click', () => {
        resetEvalSkill(activeEvalSkill);
        renderFinalEvaluation(body, engine);
      });
      return;
    }

    const target = st.items[st.index];

    if (activeEvalSkill === 'listening') {
      const distractors = SHAPES_DATA.filter(s => s.key !== target.key).sort(() => Math.random() - 0.5).slice(0, 2);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      skillBody.innerHTML = `
        <div class="mini-quiz-meta"><span>Listening ${st.index + 1} de ${st.items.length}</span><span>⭐ ${st.score}</span></div>
        <div style="text-align:center; margin:10px 0 14px;">
          <button type="button" class="toddler-quiz-launch-btn" id="btnShapeEvalListen">🔊 Escuchar Figura</button>
          <p style="margin:8px 0 0; font-weight:800; color:#334155;">Escucha el nombre de la figura y selecciónala:</p>
        </div>
        <div class="quiz-img-options-grid">
          ${options.map(opt => `
            <button type="button" class="quiz-img-choice-btn" data-key="${opt.key}" aria-label="${opt.en}">
              ${opt.svg(opt.color, opt.stroke, 'shape-svg-sm')}
            </button>
          `).join('')}
        </div>
        <p class="mini-quiz-feedback" id="evalShapeFeedback"></p>
      `;
      engine.playAudio(target.en);
      skillBody.querySelector('#btnShapeEvalListen').addEventListener('click', () => engine.playAudio(target.en));
      const fb = skillBody.querySelector('#evalShapeFeedback');
      const btns = skillBody.querySelectorAll('.quiz-img-choice-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.key === target.key) {
            st.score++;
            engine.addStars(10);
            btn.classList.add('correct');
            btns.forEach(b => { b.disabled = true; });
            fb.style.color = '#166534';
            fb.textContent = `✅ ¡Correcto! ${target.en}`;
            appendShapeEvalNext(fb, st, body, engine);
          } else {
            btn.classList.add('wrong');
            btn.disabled = true;
            fb.style.color = '#b91c1c';
            fb.textContent = '❌ Escucha de nuevo e intenta otra figura.';
          }
        });
      });
    } else if (activeEvalSkill === 'speaking') {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      skillBody.innerHTML = `
        <div class="mini-quiz-meta"><span>Speaking ${st.index + 1} de ${st.items.length}</span><span>⭐ ${st.score}</span></div>
        <div style="text-align:center;">
          <div class="mini-quiz-visual-box">${target.svg(target.color, target.stroke, 'shape-svg-md')}</div>
          <p style="font-weight:800; color:#334155; margin:6px 0 12px;">Pronuncia el nombre de esta figura en inglés:</p>
          <button type="button" class="speaking-mic-btn" id="btnShapeEvalMic" style="margin:6px 0;" aria-label="Hablar">🎤</button>
          <p class="mini-quiz-feedback" id="evalShapeFeedback"></p>
        </div>
      `;
      const micBtn = skillBody.querySelector('#btnShapeEvalMic');
      const fb = skillBody.querySelector('#evalShapeFeedback');
      micBtn.addEventListener('click', () => {
        if (!SpeechRec) {
          fb.style.color = '#b45309';
          fb.textContent = '⚠️ Reconocimiento de voz no disponible. No se pudo evaluar la respuesta.';
          return;
        }
        try {
          const rec = new SpeechRec();
          rec.lang = 'en-US';
          rec.interimResults = false;
          rec.maxAlternatives = 3;
          micBtn.classList.add('recording');
          fb.style.color = '#334155';
          fb.textContent = '🎙️ Escuchando... di el nombre de la figura en inglés.';

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
              fb.textContent = `✅ ¡Correcto! Dijiste "${target.en}".`;
              engine.playAudio(target.en);
              appendShapeEvalNext(fb, st, body, engine);
            } else {
              fb.style.color = '#b91c1c';
              fb.textContent = `❌ Se escuchó "${transcripts[0] || ''}". Intenta decir "${target.en}".`;
            }
          };
          rec.onerror = (err) => {
            handled = true;
            micBtn.classList.remove('recording');
            fb.style.color = '#b45309';
            fb.textContent = `⚠️ No se pudo evaluar (${err.error || 'sin micrófono'}). Toca para reintentar.`;
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
          fb.textContent = '⚠️ No se pudo iniciar el micrófono. No se pudo evaluar.';
        }
      });
    } else if (activeEvalSkill === 'reading') {
      const distractors = SHAPES_DATA.filter(s => s.key !== target.key).sort(() => Math.random() - 0.5).slice(0, 2);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      skillBody.innerHTML = `
        <div class="mini-quiz-meta"><span>Reading ${st.index + 1} de ${st.items.length}</span><span>⭐ ${st.score}</span></div>
        <div style="text-align:center; margin:10px 0 14px;">
          <div class="eval-reading-word-pill">${target.en.toUpperCase()}</div>
          <p style="margin:8px 0 0; font-weight:800; color:#334155;">Lee la palabra y selecciona la figura correcta:</p>
        </div>
        <div class="quiz-img-options-grid">
          ${options.map(opt => `
            <button type="button" class="quiz-img-choice-btn" data-key="${opt.key}" aria-label="${opt.en}">
              ${opt.svg(opt.color, opt.stroke, 'shape-svg-sm')}
            </button>
          `).join('')}
        </div>
        <p class="mini-quiz-feedback" id="evalShapeFeedback"></p>
      `;
      const fb = skillBody.querySelector('#evalShapeFeedback');
      const btns = skillBody.querySelectorAll('.quiz-img-choice-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.key === target.key) {
            st.score++;
            engine.addStars(10);
            btn.classList.add('correct');
            btns.forEach(b => { b.disabled = true; });
            fb.style.color = '#166534';
            fb.textContent = `✅ ¡Correcto! ${target.en}`;
            engine.playAudio(target.en);
            appendShapeEvalNext(fb, st, body, engine);
          } else {
            btn.classList.add('wrong');
            btn.disabled = true;
            fb.style.color = '#b91c1c';
            fb.textContent = `❌ Lee "${target.en.toUpperCase()}" e intenta otra figura.`;
          }
        });
      });
    } else if (activeEvalSkill === 'writing') {
      skillBody.innerHTML = `
        <div class="mini-quiz-meta"><span>Writing ${st.index + 1} de ${st.items.length}</span><span>⭐ ${st.score}</span></div>
        <div style="text-align:center;">
          <div class="mini-quiz-visual-box">${target.svg(target.color, target.stroke, 'shape-svg-md')}</div>
          <p style="font-weight:800; color:#334155; margin:6px 0 10px;">Escribe el nombre de esta figura en inglés:</p>
          <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap;">
            <input type="text" id="evalShapeWriteInput" class="eval-write-input" placeholder="Escribe en inglés..." autocomplete="off">
            <button type="button" class="toddler-quiz-launch-btn" id="btnShapeWriteCheck" style="padding:10px 20px;">Comprobar</button>
          </div>
          <p class="mini-quiz-feedback" id="evalShapeFeedback"></p>
        </div>
      `;
      const input = skillBody.querySelector('#evalShapeWriteInput');
      const checkBtn = skillBody.querySelector('#btnShapeWriteCheck');
      const fb = skillBody.querySelector('#evalShapeFeedback');
      const checkSpelling = () => {
        const val = (input.value || '').trim().toLowerCase();
        if (!val) {
          fb.style.color = '#b45309';
          fb.textContent = '✏️ Escribe el nombre de la figura primero.';
          return;
        }
        if (val === target.key) {
          st.score++;
          engine.addStars(15);
          input.disabled = true;
          checkBtn.disabled = true;
          fb.style.color = '#166534';
          fb.textContent = `✅ ¡Ortografía correcta! "${target.en}"`;
          engine.playAudio(target.en);
          appendShapeEvalNext(fb, st, body, engine);
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

  function appendShapeEvalNext(fbEl, st, body, engine) {
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
