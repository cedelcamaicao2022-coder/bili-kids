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
    const subTabs = [
      { id: 'meet', label: '1. 🔷 Meet the Shapes' },
      { id: 'match', label: '2. 🧩 Shape Match' },
      { id: 'find', label: '3. 🔍 Find the Shape' },
      { id: 'build', label: '4. 🏗️ Build with Shapes' },
      { id: 'eval', label: '5. 🏆 Final Evaluation (4 Skills)' }
    ];

    container.innerHTML = `
      <div class="shapes-studio-wrap">
        <div style="margin-bottom: 1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <h2 style="margin:0; font-size:1.45rem; color:#78350f;">🔷 Unit 1 • Shapes Adventure</h2>
            <p style="margin:4px 0 0; color:#6b7280; font-size:0.95rem;">Learn 8 geometric shapes, match silhouettes, find shapes in everyday scenes, build objects, and complete the 4-skills evaluation.</p>
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
    // Colors per shape (matches SHAPES_DATA)
    const C = {
      circle:    { fill: painted.circle    ? '#ef4444' : '#e2e8f0', stroke: painted.circle    ? '#991b1b' : '#94a3b8' },
      square:    { fill: painted.square    ? '#3b82f6' : '#e2e8f0', stroke: painted.square    ? '#1d4ed8' : '#94a3b8' },
      triangle:  { fill: painted.triangle  ? '#eab308' : '#e2e8f0', stroke: painted.triangle  ? '#a16207' : '#94a3b8' },
      rectangle: { fill: painted.rectangle ? '#22c55e' : '#e2e8f0', stroke: painted.rectangle ? '#15803d' : '#94a3b8' },
      oval:      { fill: painted.oval      ? '#f97316' : '#e2e8f0', stroke: painted.oval      ? '#c2410c' : '#94a3b8' },
      star:      { fill: painted.star      ? '#a855f7' : '#e2e8f0', stroke: painted.star      ? '#6b21a8' : '#94a3b8' },
      heart:     { fill: painted.heart     ? '#ec4899' : '#e2e8f0', stroke: painted.heart     ? '#be185d' : '#94a3b8' },
      diamond:   { fill: painted.diamond   ? '#06b6d4' : '#e2e8f0', stroke: painted.diamond   ? '#0e7490' : '#94a3b8' }
    };
    const trackFill = '#94a3b8';
    const bodyStroke = '#334155';

    return `
    <svg viewBox="0 0 760 290" class="find-scene-svg" id="trainSVG" style="max-width:100%; display:block; margin:0 auto;" aria-label="Geometric Train">
      <!-- SKY background -->
      <rect width="760" height="210" fill="#e0f2fe"/>
      <!-- GROUND -->
      <rect y="210" width="760" height="80" fill="#bbf7d0"/>
      <!-- TRACK -->
      <rect x="0" y="232" width="760" height="12" fill="${trackFill}" rx="4"/>
      <rect x="0" y="246" width="760" height="10" fill="#64748b" rx="3"/>
      ${[0,60,120,180,240,300,360,420,480,540,600,660,720].map(x => `<rect x="${x}" y="232" width="10" height="24" fill="#475569" rx="2"/>`).join('')}

      <!-- ═══════════════════════════════════════════
           LOCOMOTIVE (ENGINE) — right side, x=530+
           Uses: circle (wheels), oval (steam puff), triangle (smokestack cap)
           ═════════════════════════════════════════= -->
      <!-- Engine cabin body (rectangle shape part) -->
      <g class="train-part" data-shape="rectangle" id="part-rectangle">
        <rect x="560" y="150" width="130" height="80" rx="10" fill="${C.rectangle.fill}" stroke="${C.rectangle.stroke}" stroke-width="4"/>
      </g>
      <!-- Engine front slope (trapezoid, decorative) -->
      <polygon points="690,150 730,170 730,230 690,230" fill="#cbd5e1" stroke="${bodyStroke}" stroke-width="3"/>
      <!-- Smokestack -->
      <rect x="590" y="118" width="22" height="34" rx="4" fill="#94a3b8" stroke="${bodyStroke}" stroke-width="3"/>
      <!-- Smokestack cap (TRIANGLE) -->
      <g class="train-part" data-shape="triangle" id="part-triangle">
        <polygon points="582,122 614,122 598,108" fill="${C.triangle.fill}" stroke="${C.triangle.stroke}" stroke-width="3.5" stroke-linejoin="round"/>
      </g>
      <!-- Steam puff (OVAL) -->
      <g class="train-part" data-shape="oval" id="part-oval">
        <ellipse cx="601" cy="96" rx="26" ry="16" fill="${C.oval.fill}" stroke="${C.oval.stroke}" stroke-width="3"/>
        <ellipse cx="572" cy="88" rx="18" ry="12" fill="${C.oval.fill}" stroke="${C.oval.stroke}" stroke-width="2.5"/>
        <ellipse cx="626" cy="84" rx="16" ry="10" fill="${C.oval.fill}" stroke="${C.oval.stroke}" stroke-width="2.5"/>
      </g>
      <!-- Diamond window on engine (DIAMOND) -->
      <g class="train-part" data-shape="diamond" id="part-diamond">
        <polygon points="635,175 655,195 635,215 615,195" fill="${C.diamond.fill}" stroke="${C.diamond.stroke}" stroke-width="3.5" stroke-linejoin="round"/>
      </g>
      <!-- Star badge on engine (STAR) -->
      <g class="train-part" data-shape="star" id="part-star">
        <polygon points="705,185 711,201 728,202 715,213 719,230 705,221 691,230 695,213 682,202 699,201" fill="${C.star.fill}" stroke="${C.star.stroke}" stroke-width="2.5" stroke-linejoin="round"/>
      </g>
      <!-- Engine wheels (CIRCLE) × 3 -->
      <g class="train-part" data-shape="circle" id="part-circle">
        <circle cx="590" cy="236" r="20" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
        <circle cx="590" cy="236" r="8" fill="${C.circle.stroke}" opacity="0.4"/>
        <circle cx="645" cy="236" r="20" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
        <circle cx="645" cy="236" r="8" fill="${C.circle.stroke}" opacity="0.4"/>
        <circle cx="700" cy="236" r="18" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
        <circle cx="700" cy="236" r="7" fill="${C.circle.stroke}" opacity="0.4"/>
      </g>

      <!-- ═══════════════════════════════════════════
           WAGON 1 — cargo wagon with square box, x=380–530
           Uses: square (cargo box), circle (wheels)
           ═════════════════════════════════════════= -->
      <!-- Wagon frame -->
      <rect x="380" y="180" width="150" height="52" rx="8" fill="#cbd5e1" stroke="${bodyStroke}" stroke-width="3"/>
      <!-- Cargo box (SQUARE) -->
      <g class="train-part" data-shape-extra="square" id="part-square-cargo">
        <rect x="406" y="135" width="98" height="47" rx="6" fill="${C.square.fill}" stroke="${C.square.stroke}" stroke-width="4"/>
        <!-- dotted line detail inside box -->
        <line x1="420" y1="158" x2="490" y2="158" stroke="${C.square.stroke}" stroke-width="2" stroke-dasharray="6,4" opacity="0.5"/>
      </g>
      <!-- Wagon wheels (share circle) -->
      <circle cx="415" cy="238" r="18" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
      <circle cx="415" cy="238" r="7" fill="${C.circle.stroke}" opacity="0.4"/>
      <circle cx="495" cy="238" r="18" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
      <circle cx="495" cy="238" r="7" fill="${C.circle.stroke}" opacity="0.4"/>
      <!-- Coupler -->
      <rect x="528" y="204" width="34" height="10" rx="3" fill="#64748b"/>

      <!-- ═══════════════════════════════════════════
           WAGON 2 — passenger wagon with heart decoration, x=200–370
           Uses: heart (decoration), circle (wheels), rectangle (windows)
           ═════════════════════════════════════════= -->
      <!-- Wagon body -->
      <rect x="200" y="165" width="175" height="67" rx="10" fill="#fde68a" stroke="${bodyStroke}" stroke-width="3"/>
      <!-- Windows (rectangle shape parts) are shown as coloured rectangles -->
      <rect x="218" y="178" width="38" height="30" rx="5" fill="${C.rectangle.fill}" stroke="${C.rectangle.stroke}" stroke-width="3"/>
      <rect x="265" y="178" width="38" height="30" rx="5" fill="${C.rectangle.fill}" stroke="${C.rectangle.stroke}" stroke-width="3"/>
      <rect x="312" y="178" width="38" height="30" rx="5" fill="${C.rectangle.fill}" stroke="${C.rectangle.stroke}" stroke-width="3"/>
      <!-- Heart decoration (HEART) -->
      <g class="train-part" data-shape-extra="heart" id="part-heart-deco">
        <path d="M285 155 C270 140 258 128 263 116 C267 106 280 106 285 118 C290 106 303 106 307 116 C312 128 300 140 285 155 Z" fill="${C.heart.fill}" stroke="${C.heart.stroke}" stroke-width="3"/>
      </g>
      <!-- Wagon wheels -->
      <circle cx="235" cy="238" r="18" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
      <circle cx="235" cy="238" r="7" fill="${C.circle.stroke}" opacity="0.4"/>
      <circle cx="340" cy="238" r="18" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
      <circle cx="340" cy="238" r="7" fill="${C.circle.stroke}" opacity="0.4"/>
      <!-- Coupler -->
      <rect x="372" y="198" width="10" height="10" rx="2" fill="#64748b"/>

      <!-- ═══════════════════════════════════════════
           TENDER / CABOOSE — leftmost, x=30–195
           Uses: circle (wheels), square window
           ═════════════════════════════════════════= -->
      <rect x="30" y="175" width="165" height="57" rx="10" fill="#bbf7d0" stroke="${bodyStroke}" stroke-width="3"/>
      <rect x="50" y="188" width="40" height="30" rx="5" fill="${C.square.fill}" stroke="${C.square.stroke}" stroke-width="3"/>
      <rect x="100" y="188" width="40" height="30" rx="5" fill="${C.square.fill}" stroke="${C.square.stroke}" stroke-width="3"/>
      <!-- Caboose wheels -->
      <circle cx="65" cy="238" r="18" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
      <circle cx="65" cy="238" r="7" fill="${C.circle.stroke}" opacity="0.4"/>
      <circle cx="165" cy="238" r="18" fill="${C.circle.fill}" stroke="${C.circle.stroke}" stroke-width="4"/>
      <circle cx="165" cy="238" r="7" fill="${C.circle.stroke}" opacity="0.4"/>
      <!-- Coupler -->
      <rect x="193" y="200" width="10" height="10" rx="2" fill="#64748b"/>

      <!-- Part labels (shown when painted) -->
      ${painted.triangle  ? '<text x="597" y="104" text-anchor="middle" font-size="10" fill="#a16207" font-weight="800">Triangle</text>' : ''}
      ${painted.oval      ? '<text x="601" y="68" text-anchor="middle" font-size="10" fill="#c2410c" font-weight="800">Oval</text>' : ''}
      ${painted.rectangle ? '<text x="625" y="195" text-anchor="middle" font-size="10" fill="#15803d" font-weight="800">Rectangle</text>' : ''}
      ${painted.diamond   ? '<text x="635" y="198" text-anchor="middle" font-size="9" fill="#0e7490" font-weight="800">Diamond</text>' : ''}
      ${painted.star      ? '<text x="705" y="246" text-anchor="middle" font-size="9" fill="#6b21a8" font-weight="800">Star</text>' : ''}
      ${painted.circle    ? '<text x="645" y="263" text-anchor="middle" font-size="10" fill="#991b1b" font-weight="800">Circle</text>' : ''}
      ${painted.square    ? '<text x="455" y="130" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="800">Square</text>' : ''}
      ${painted.heart     ? '<text x="285" y="107" text-anchor="middle" font-size="10" fill="#be185d" font-weight="800">Heart</text>' : ''}
    </svg>`;
  }

  function renderFindShape(body, engine) {
    // Reset if re-entering this subtab fresh (allow retry)
    if (trainPromptIdx >= TRAIN_PARTS.length && Object.keys(trainPainted).length === TRAIN_PARTS.length) {
      // show completion screen
      const doneEl = document.createElement('div');
      doneEl.className = 'colors-panel-card';
      doneEl.style.textAlign = 'center';
      doneEl.innerHTML = `
        <div style="font-size:3.5rem;">🚂🎉</div>
        <h3 style="color:#166534; font-size:1.5rem;">¡El tren geométrico está completo!</h3>
        <p style="font-weight:800; color:#334155;">¡Encontraste y pintaste las 8 figuras!</p>
        ${buildTrainSVG(trainPainted)}
        <div style="display:flex; gap:12px; justify-content:center; margin-top:16px; flex-wrap:wrap;">
          <button type="button" class="toddler-quiz-launch-btn" id="btnTrainRetry">🔄 Jugar de nuevo</button>
          <button type="button" class="toddler-quiz-launch-btn" id="btnTrainNext" style="background:linear-gradient(135deg,#059669,#047857);">
            4. 🏗️ Build with Shapes ➔
          </button>
        </div>
      `;
      body.innerHTML = '';
      body.appendChild(doneEl);
      body.querySelector('#btnTrainRetry').addEventListener('click', () => {
        trainPainted = {};
        trainPromptIdx = 0;
        renderFindShape(body, engine);
      });
      body.querySelector('#btnTrainNext').addEventListener('click', () => {
        activeSubTab = 'build';
        const wrap = body.closest('.shapes-studio-wrap');
        const outer = wrap ? wrap.parentElement : body.parentElement;
        window.renderToddlersShapesStudio(outer, engine);
      });
      return;
    }

    const current = TRAIN_PARTS[trainPromptIdx] || TRAIN_PARTS[0];
    const totalPainted = Object.keys(trainPainted).length;

    body.innerHTML = `
      <div class="colors-panel-card" id="trainActivityCard">
        <div class="mini-quiz-meta">
          <span>🎨 ${totalPainted} / ${TRAIN_PARTS.length} pintadas</span>
          <span>⭐ ${totalPainted * 10}</span>
        </div>

        <!-- Bili instruction banner -->
        <div class="bili-find-banner" style="margin-bottom:12px;">
          <img src="assets/mascot/bili_pixel_idle.png" alt="Bili" class="bili-find-avatar">
          <div style="flex:1;">
            <div style="font-weight:900; color:#78350f; font-size:1.1rem;" id="trainPromptLabel">
              🚂 "${current.label}"
            </div>
            <div style="font-size:0.85rem; color:#64748b; margin-top:3px;">
              Hint: look for the <em>${current.hint}</em>
            </div>
            <button type="button" class="toddler-nav-pill active" id="btnHearTrainShape"
              style="margin-top:6px; padding:5px 13px; font-size:0.85rem;">
              🔊 Listen
            </button>
          </div>
        </div>

        <!-- TRAIN SVG -->
        <div class="find-scene-box" style="padding:4px 0 8px;">
          ${buildTrainSVG(trainPainted)}
        </div>

        <!-- SHAPE PICKER — 8 buttons, already found ones are greyed -->
        <div style="margin:12px 0 6px; text-align:center; font-weight:800; color:#334155; font-size:0.95rem;">
          Toca la figura que se pide:
        </div>
        <div class="train-shape-picker" id="trainPicker">
          ${TRAIN_PARTS.map(p => {
            const shapeObj = SHAPES_DATA.find(s => s.key === p.key);
            const done = !!trainPainted[p.key];
            return `
              <button type="button"
                class="train-pick-btn ${done ? 'train-pick-done' : ''}"
                data-key="${p.key}"
                ${done ? 'disabled' : ''}
                aria-label="${shapeObj.en}"
                title="${shapeObj.en}">
                <div class="train-pick-svg">${shapeObj.svg(done ? shapeObj.color : '#cbd5e1', done ? shapeObj.stroke : '#94a3b8', 'shape-svg-sm')}</div>
                <div class="train-pick-label" style="color:${done ? shapeObj.color : '#94a3b8'};">${shapeObj.en}</div>
                ${done ? '<div class="train-pick-check">✅</div>' : ''}
              </button>
            `;
          }).join('')}
        </div>

        <p class="mini-quiz-feedback" id="trainFeedback"></p>
      </div>
    `;

    // Play audio on load
    engine.playAudio(current.audio);
    body.querySelector('#btnHearTrainShape').addEventListener('click', () => {
      engine.playAudio(current.audio);
    });

    const fb = body.querySelector('#trainFeedback');

    body.querySelectorAll('.train-pick-btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosenKey = btn.dataset.key;
        if (chosenKey === current.key) {
          // ✅ Correct!
          trainPainted[chosenKey] = true;
          engine.addStars(10);
          engine.playAudio(SHAPES_DATA.find(s => s.key === chosenKey).en);

          // Repaint train inline with animation class
          const trainBox = body.querySelector('.find-scene-box');
          trainBox.innerHTML = buildTrainSVG(trainPainted);
          const partEl = body.querySelector(`#part-${chosenKey}, [id^="part-${chosenKey}"]`);
          if (partEl) {
            partEl.classList.add('train-part-popping');
          }

          // Disable picker, show feedback
          body.querySelectorAll('.train-pick-btn').forEach(b => b.disabled = true);
          fb.style.color = '#166534';
          fb.textContent = `✅ ¡Correcto! That part is the ${SHAPES_DATA.find(s => s.key === chosenKey).en}!`;

          trainPromptIdx++;
          const nextPart = TRAIN_PARTS[trainPromptIdx];

          setTimeout(() => {
            if (!nextPart || trainPromptIdx >= TRAIN_PARTS.length) {
              renderFindShape(body, engine);
            } else {
              // Update prompt label instead of full re-render (keeps painted train visible)
              const lbl = body.querySelector('#trainPromptLabel');
              if (lbl) lbl.textContent = `🚂 "${nextPart.label}"`;
              body.querySelectorAll('.train-pick-btn').forEach(b => {
                if (!trainPainted[b.dataset.key]) b.disabled = false;
              });
              fb.textContent = '';
              engine.playAudio(nextPart.audio);
              body.querySelector('#btnHearTrainShape').onclick = () => engine.playAudio(nextPart.audio);

              // Update picker icons for newly done shape
              const doneBtn = body.querySelector(`.train-pick-btn[data-key="${chosenKey}"]`);
              if (doneBtn) {
                doneBtn.classList.add('train-pick-done');
                doneBtn.disabled = true;
                const shapeObj = SHAPES_DATA.find(s => s.key === chosenKey);
                doneBtn.innerHTML = `
                  <div class="train-pick-svg">${shapeObj.svg(shapeObj.color, shapeObj.stroke, 'shape-svg-sm')}</div>
                  <div class="train-pick-label" style="color:${shapeObj.color};">${shapeObj.en}</div>
                  <div class="train-pick-check">✅</div>
                `;
              }
            }
          }, 900);

        } else {
          // ❌ Wrong
          btn.classList.add('train-pick-wrong');
          setTimeout(() => btn.classList.remove('train-pick-wrong'), 600);
          fb.style.color = '#b91c1c';
          const shapeObj = SHAPES_DATA.find(s => s.key === chosenKey);
          fb.textContent = `❌ That's a ${shapeObj.en}. ${current.label}`;
        }
      });
    });
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
