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

  // Tren Geométrico — 25 piezas independientes organizadas por figura geométrica.
  // Cada pieza se pinta de forma individual cuando el niño la toca.
  const TRAIN_PIECES = [
    // --- VAGÓN 1 (Plataforma con Barco de Vela) ---
    { id: 'chassis_w1',   shape: 'rectangle', name: 'Wagon 1 Base', hint: 'Plataforma del vagón 1' },
    { id: 'boat_hull',    shape: 'oval',      name: 'Boat Hull',    hint: 'Casco ovalado del barco' },
    { id: 'porthole_l',   shape: 'circle',    name: 'Porthole Left',hint: 'Ojo de buey izquierdo' },
    { id: 'porthole_r',   shape: 'circle',    name: 'Porthole Right',hint: 'Ojo de buey derecho' },
    { id: 'sail_main',    shape: 'triangle',  name: 'Main Sail',    hint: 'Vela mayor del barco' },
    { id: 'sail_jib',     shape: 'triangle',  name: 'Front Sail',   hint: 'Vela frontal del barco' },
    { id: 'mast_flag',    shape: 'star',      name: 'Mast Star Flag',hint: 'Estrella en el mástil' },
    { id: 'wheel_w1_l',   shape: 'circle',    name: 'Wheel 1 Left', hint: 'Rueda izquierda del vagón 1' },
    { id: 'wheel_w1_r',   shape: 'circle',    name: 'Wheel 1 Right',hint: 'Rueda derecha del vagón 1' },

    // --- VAGÓN 2 (Plataforma con Caja de Carga y Vagón con Corazón) ---
    { id: 'chassis_w2',   shape: 'rectangle', name: 'Wagon 2 Base', hint: 'Plataforma del vagón 2' },
    { id: 'cargo_box',    shape: 'square',    name: 'Cargo Cube',   hint: 'Caja cúbica de carga' },
    { id: 'coach_body',   shape: 'rectangle', name: 'Coach Body',   hint: 'Cuerpo del vagón de pasajeros' },
    { id: 'heart_emblem', shape: 'heart',     name: 'Heart Emblem', hint: 'Emblema de corazón' },
    { id: 'wheel_w2_l',   shape: 'circle',    name: 'Wheel 2 Left', hint: 'Rueda izquierda del vagón 2' },
    { id: 'wheel_w2_r',   shape: 'circle',    name: 'Wheel 2 Right',hint: 'Rueda derecha del vagón 2' },

    // --- LOCOMOTORA (Máquina de Vapor) ---
    { id: 'cab_box',        shape: 'square',    name: 'Engine Cab',     hint: 'Cabina del maquinista' },
    { id: 'diamond_window', shape: 'diamond',   name: 'Diamond Window', hint: 'Ventana en forma de rombo' },
    { id: 'boiler_body',    shape: 'rectangle', name: 'Engine Boiler',  hint: 'Caldera de la máquina' },
    { id: 'funnel_cap',     shape: 'triangle',  name: 'Smokestack Cap', hint: 'Embudo de la chimenea' },
    { id: 'steam_puff',     shape: 'oval',      name: 'Steam Cloud',    hint: 'Nube de vapor' },
    { id: 'cowcatcher',     shape: 'triangle',  name: 'Cowcatcher',     hint: 'Defensa delantera triangular' },
    { id: 'star_badge',     shape: 'star',      name: 'Star Badge',     hint: 'Insignia de estrella frontal' },
    { id: 'wheel_eng_1',    shape: 'circle',    name: 'Engine Wheel 1', hint: 'Rueda delantera de la máquina' },
    { id: 'wheel_eng_2',    shape: 'circle',    name: 'Engine Wheel 2', hint: 'Rueda central de la máquina' },
    { id: 'wheel_eng_3',    shape: 'circle',    name: 'Engine Wheel 3', hint: 'Rueda trasera de la máquina' }
  ];
  let trainPaintedPieces = {}; // { [pieceId]: true }
  let trainTargetShapeKey = 'circle';

  function countDiscoveredShapes() {
    return SHAPES_DATA.filter(s => TRAIN_PIECES.some(p => p.shape === s.key && trainPaintedPieces[p.id])).length;
  }

  const BUILD_BLUEPRINTS = [
    {
      id: 'house',
      title: 'A House 🏠',
      instruction: 'Drag and drop the shapes to build a House!',
      bgSvg: `
        <svg viewBox="0 0 320 240" style="position:absolute; left:0; top:0; width:320px; height:240px; pointer-events:none; z-index:1;">
          <rect width="320" height="240" fill="#f8fafc"/>
          <!-- Ground and grass -->
          <path d="M 0 205 Q 160 200 320 205 L 320 240 L 0 240 Z" fill="#dcfce7"/>
          <line x1="0" y1="205" x2="320" y2="205" stroke="#86efac" stroke-width="3"/>
          <path d="M 35 205 L 38 195 L 41 205 M 43 205 L 46 193 L 49 205" stroke="#16a34a" stroke-width="2" fill="none"/>
          <path d="M 275 205 L 278 195 L 281 205 M 283 205 L 286 193 L 289 205" stroke="#16a34a" stroke-width="2" fill="none"/>
          <!-- Chimney -->
          <rect x="182" y="30" width="22" height="48" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
          <rect x="178" y="26" width="30" height="6" rx="2" fill="#94a3b8"/>
          <!-- Smoke puffs -->
          <circle cx="193" cy="18" r="6" fill="#e2e8f0" opacity="0.8"/>
          <circle cx="202" cy="8" r="8" fill="#e2e8f0" opacity="0.7"/>
          <!-- Sun -->
          <circle cx="38" cy="38" r="18" fill="#fef08a" stroke="#facc15" stroke-width="2"/>
          <line x1="38" y1="14" x2="38" y2="8" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
          <line x1="38" y1="62" x2="38" y2="68" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
          <line x1="14" y1="38" x2="8" y2="38" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
          <line x1="62" y1="38" x2="68" y2="38" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
          <!-- Window cross guide -->
          <line x1="187" y1="125" x2="187" y2="163" stroke="#94a3b8" stroke-width="2" stroke-dasharray="2,2"/>
          <line x1="168" y1="144" x2="206" y2="144" stroke="#94a3b8" stroke-width="2" stroke-dasharray="2,2"/>
          <!-- Doorknob -->
          <circle cx="147" cy="180" r="3" fill="#f59e0b" stroke="#78350f" stroke-width="1.5"/>
        </svg>
      `,
      slots: [
        {
          slotId: 'roof', shapeKey: 'triangle', x: 90, y: 20, w: 140, h: 75, zIndex: 3, label: 'Roof (Triangle)',
          renderSvg: (fill, stroke, sw = 3.5, dashed = false) => `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <polygon points="50,0 100,100 0,100" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round" ${dashed ? 'stroke-dasharray="5,4"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'walls', shapeKey: 'square', x: 105, y: 95, w: 110, h: 110, zIndex: 2, label: 'Walls (Square)',
          renderSvg: (fill, stroke, sw = 3.5, dashed = false) => `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <rect x="2" y="2" width="96" height="96" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="5,4"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'door', shapeKey: 'rectangle', x: 120, y: 150, w: 34, h: 55, zIndex: 4, label: 'Door (Rectangle)',
          renderSvg: (fill, stroke, sw = 3, dashed = false) => `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <rect x="2" y="2" width="96" height="96" rx="5" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'window', shapeKey: 'circle', x: 168, y: 125, w: 38, h: 38, zIndex: 4, label: 'Window (Circle)',
          renderSvg: (fill, stroke, sw = 3, dashed = false) => `
            <svg viewBox="0 0 100 100" style="width:100%; height:100%; display:block;">
              <circle cx="50" cy="50" r="46" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>
            </svg>
          `
        }
      ]
    },
    {
      id: 'robot',
      title: 'A Robot 🤖',
      instruction: 'Drag and drop the shapes to build a Robot!',
      bgSvg: `
        <svg viewBox="0 0 320 240" style="position:absolute; left:0; top:0; width:320px; height:240px; pointer-events:none; z-index:1;">
          <rect width="320" height="240" fill="#f8fafc"/>
          <!-- Grid dots -->
          <pattern id="robotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#cbd5e1"/>
          </pattern>
          <rect width="320" height="240" fill="url(#robotGrid)" opacity="0.6"/>
          <!-- Antenna -->
          <line x1="160" y1="35" x2="160" y2="14" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
          <circle cx="160" cy="10" r="7" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
          <path d="M 148 10 A 14 14 0 0 1 172 10" stroke="#f59e0b" stroke-width="2" fill="none"/>
          <!-- Ears -->
          <rect x="115" y="55" width="10" height="20" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          <rect x="195" y="55" width="10" height="20" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          <!-- Neck -->
          <rect x="148" y="102" width="24" height="6" rx="2" fill="#64748b"/>
          <!-- Left Arm -->
          <path d="M 105 125 L 75 140 L 75 165" stroke="#64748b" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="75" cy="165" r="6" fill="#fbbf24" stroke="#78350f" stroke-width="2"/>
          <path d="M 68 170 C 68 180 82 180 82 170" stroke="#64748b" stroke-width="3" fill="none"/>
          <!-- Right Arm -->
          <path d="M 215 125 L 245 140 L 245 165" stroke="#64748b" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="245" cy="165" r="6" fill="#fbbf24" stroke="#78350f" stroke-width="2"/>
          <path d="M 238 170 C 238 180 252 180 252 170" stroke="#64748b" stroke-width="3" fill="none"/>
          <!-- Legs -->
          <rect x="125" y="185" width="20" height="28" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          <rect x="115" y="210" width="34" height="12" rx="4" fill="#64748b" stroke="#334155" stroke-width="2"/>
          <rect x="175" y="185" width="20" height="28" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          <rect x="171" y="210" width="34" height="12" rx="4" fill="#64748b" stroke="#334155" stroke-width="2"/>
          <!-- Robot smile -->
          <path d="M 152 90 Q 160 97 168 90" stroke="#64748b" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
      `,
      slots: [
        {
          slotId: 'head', shapeKey: 'square', x: 125, y: 35, w: 70, h: 70, zIndex: 2, label: 'Head (Square)',
          renderSvg: (fill, stroke, sw = 3.5, dashed = false) => `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <rect x="2" y="2" width="96" height="96" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="5,4"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'eye', shapeKey: 'circle', x: 143, y: 50, w: 34, h: 34, zIndex: 3, label: 'Visor (Circle)',
          renderSvg: (fill, stroke, sw = 3, dashed = false) => `
            <svg viewBox="0 0 100 100" style="width:100%; height:100%; display:block;">
              <circle cx="50" cy="50" r="46" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'body', shapeKey: 'rectangle', x: 105, y: 108, w: 110, h: 78, zIndex: 2, label: 'Body (Rectangle)',
          renderSvg: (fill, stroke, sw = 3.5, dashed = false) => `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <rect x="2" y="2" width="96" height="96" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="5,4"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'badge', shapeKey: 'diamond', x: 140, y: 127, w: 40, h: 40, zIndex: 3, label: 'Power Core (Diamond)',
          renderSvg: (fill, stroke, sw = 3, dashed = false) => `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <polygon points="50,2 98,50 50,98 2,50" stroke-linejoin="round" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>
            </svg>
          `
        }
      ]
    },
    {
      id: 'boat',
      title: 'A Boat ⛵',
      instruction: 'Drag and drop the shapes to build a Boat!',
      bgSvg: `
        <svg viewBox="0 0 320 240" style="position:absolute; left:0; top:0; width:320px; height:240px; pointer-events:none; z-index:1;">
          <rect width="320" height="240" fill="#f0f9ff"/>
          <!-- Seagulls -->
          <path d="M 40 45 Q 46 38 52 45 Q 58 38 64 45" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M 250 35 Q 256 28 262 35 Q 268 28 274 35" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linecap="round"/>
          <!-- Ocean Waves -->
          <path d="M 0 195 C 40 190 80 200 120 195 C 160 190 200 200 240 195 C 280 190 320 200 320 195 L 320 240 L 0 240 Z" fill="#bae6fd"/>
          <path d="M 0 210 C 50 205 100 215 150 210 C 200 205 250 215 320 210 L 320 240 L 0 240 Z" fill="#7dd3fc"/>
          <!-- Mast Pole -->
          <line x1="160" y1="42" x2="160" y2="165" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
          <circle cx="160" cy="40" r="4" fill="#f59e0b"/>
          <!-- Bow and Stern -->
          <polygon points="235,165 272,165 235,203" fill="#cbd5e1" stroke="#64748b" stroke-width="2.5" stroke-linejoin="round"/>
          <polygon points="85,165 55,165 85,203" fill="#cbd5e1" stroke="#64748b" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>
      `,
      slots: [
        {
          slotId: 'flag', shapeKey: 'star', x: 144, y: 15, w: 32, h: 32, zIndex: 3, label: 'Flag (Star)',
          renderSvg: (fill, stroke, sw = 2.5, dashed = false) => `
            <svg viewBox="0 0 100 100" style="width:100%; height:100%; display:block;">
              <polygon points="50,5 62,36 95,38 68,58 77,90 50,72 23,90 32,58 5,38 38,36" stroke-linejoin="round" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'sail', shapeKey: 'triangle', x: 105, y: 55, w: 100, h: 110, zIndex: 2, label: 'Sail (Triangle)',
          renderSvg: (fill, stroke, sw = 3.5, dashed = false) => `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <polygon points="55,0 100,100 0,100" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round" ${dashed ? 'stroke-dasharray="5,4"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'hull', shapeKey: 'rectangle', x: 85, y: 165, w: 150, h: 38, zIndex: 2, label: 'Hull (Rectangle)',
          renderSvg: (fill, stroke, sw = 3.5, dashed = false) => `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <rect x="2" y="2" width="96" height="96" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="5,4"' : ''}/>
            </svg>
          `
        },
        {
          slotId: 'porthole', shapeKey: 'circle', x: 148, y: 172, w: 24, h: 24, zIndex: 3, label: 'Porthole (Circle)',
          renderSvg: (fill, stroke, sw = 2.5, dashed = false) => `
            <svg viewBox="0 0 100 100" style="width:100%; height:100%; display:block;">
              <circle cx="50" cy="50" r="46" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dashed ? 'stroke-dasharray="3,2"' : ''}/>
            </svg>
          `
        }
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
    const isTrainDone = countDiscoveredShapes() >= 8;
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
     Dibujo del tren geométrico basado en "tren geometrico.png".
     Cada una de las 25 piezas es independiente (ruedas, velas, vagones, cabina, etc.)
     Al tocar CADA pieza individual, se pinta ÚNICAMENTE esa pieza en su color
     y reproduce su sonido de pronunciación en inglés (Leo/Bili ElevenLabs).
     Cuando el niño ubica las 8 formas geométricas, se habilita la actividad 4 ("Build").
     -------------------------------------------------------------------------- */
  function buildTrainSVG(paintedPieces = {}) {
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

    const isP = (id) => !!paintedPieces[id];
    const pCol = (id, shapeKey) => isP(id) ? palette[shapeKey].fill : '#ffffff';
    const outline = '#1e293b';
    const sw = '4.5';

    let ties = '';
    for (let x = 15; x < 910; x += 48) {
      ties += `<rect x="${x}" y="260" width="14" height="22" rx="2"/>`;
    }

    return `
    <svg viewBox="0 0 920 330" class="find-scene-svg" id="trainSVG" style="max-width:100%; display:block; margin:0 auto; background:#f0f9ff; border-radius:18px;" aria-label="Tren Geométrico">
      <!-- Sky & Soft Hill -->
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

      <!-- ==========================================
           WAGON 1 (SAILBOAT FLATBED)
           ========================================== -->
      <!-- 1. PIECE: chassis_w1 (Rectangle) -->
      <g class="train-piece ${isP('chassis_w1') ? 'is-painted' : 'is-unpainted'}" data-piece="chassis_w1" data-shape="rectangle" style="cursor:pointer;" title="Rectangle - Wagon 1 Base">
        <rect x="30" y="215" width="230" height="28" rx="6" fill="${pCol('chassis_w1', 'rectangle')}" stroke="${outline}" stroke-width="${sw}"/>
        <line x1="35" y1="229" x2="255" y2="229" stroke="#64748b" stroke-width="2" opacity="0.6"/>
      </g>

      <!-- 2. PIECE: boat_hull (Oval) -->
      <g class="train-piece ${isP('boat_hull') ? 'is-painted' : 'is-unpainted'}" data-piece="boat_hull" data-shape="oval" style="cursor:pointer;" title="Oval - Boat Hull">
        <path d="M 48 165 C 65 215 225 215 242 165 Z" fill="${pCol('boat_hull', 'oval')}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
        <path d="M 44 165 L 246 165" stroke="${outline}" stroke-width="3" stroke-linecap="round"/>
      </g>

      <!-- 3. PIECE: porthole_l (Circle) -->
      <g class="train-piece ${isP('porthole_l') ? 'is-painted' : 'is-unpainted'}" data-piece="porthole_l" data-shape="circle" style="cursor:pointer;" title="Circle - Porthole Left">
        <circle cx="105" cy="185" r="13" fill="${pCol('porthole_l', 'circle')}" stroke="${outline}" stroke-width="3.5"/>
        <circle cx="105" cy="185" r="5" fill="#ffffff" stroke="${outline}" stroke-width="2"/>
      </g>

      <!-- 4. PIECE: porthole_r (Circle) -->
      <g class="train-piece ${isP('porthole_r') ? 'is-painted' : 'is-unpainted'}" data-piece="porthole_r" data-shape="circle" style="cursor:pointer;" title="Circle - Porthole Right">
        <circle cx="185" cy="185" r="13" fill="${pCol('porthole_r', 'circle')}" stroke="${outline}" stroke-width="3.5"/>
        <circle cx="185" cy="185" r="5" fill="#ffffff" stroke="${outline}" stroke-width="2"/>
      </g>

      <!-- Sailboat Mast -->
      <line x1="145" y1="165" x2="145" y2="45" stroke="${outline}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="145" cy="42" r="5" fill="#ffffff" stroke="${outline}" stroke-width="3"/>

      <!-- 5. PIECE: sail_main (Triangle) -->
      <g class="train-piece ${isP('sail_main') ? 'is-painted' : 'is-unpainted'}" data-piece="sail_main" data-shape="triangle" style="cursor:pointer;" title="Triangle - Main Sail">
        <polygon points="153,55 225,160 153,160" fill="${pCol('sail_main', 'triangle')}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
      </g>

      <!-- 6. PIECE: sail_jib (Triangle) -->
      <g class="train-piece ${isP('sail_jib') ? 'is-painted' : 'is-unpainted'}" data-piece="sail_jib" data-shape="triangle" style="cursor:pointer;" title="Triangle - Front Sail">
        <polygon points="137,70 70,160 137,160" fill="${pCol('sail_jib', 'triangle')}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
      </g>

      <!-- 7. PIECE: mast_flag (Star) -->
      <g class="train-piece ${isP('mast_flag') ? 'is-painted' : 'is-unpainted'}" data-piece="mast_flag" data-shape="star" style="cursor:pointer;" title="Star - Mast Flag">
        <polygon points="145,18 150,30 163,31 153,40 156,52 145,45 134,52 137,40 127,31 140,30" fill="${pCol('mast_flag', 'star')}" stroke="${outline}" stroke-width="2.5" stroke-linejoin="round"/>
      </g>

      <!-- 8. PIECE: wheel_w1_l (Circle) -->
      <g class="train-piece ${isP('wheel_w1_l') ? 'is-painted' : 'is-unpainted'}" data-piece="wheel_w1_l" data-shape="circle" style="cursor:pointer;" title="Circle - Wheel 1 Left">
        <circle cx="75" cy="254" r="22" fill="${pCol('wheel_w1_l', 'circle')}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="75" cy="254" r="8" fill="#ffffff" stroke="${outline}" stroke-width="3"/>
      </g>

      <!-- 9. PIECE: wheel_w1_r (Circle) -->
      <g class="train-piece ${isP('wheel_w1_r') ? 'is-painted' : 'is-unpainted'}" data-piece="wheel_w1_r" data-shape="circle" style="cursor:pointer;" title="Circle - Wheel 1 Right">
        <circle cx="215" cy="254" r="22" fill="${pCol('wheel_w1_r', 'circle')}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="215" cy="254" r="8" fill="#ffffff" stroke="${outline}" stroke-width="3"/>
      </g>

      <!-- ==========================================
           WAGON 2 (CARGO & COACH)
           ========================================== -->
      <!-- 10. PIECE: chassis_w2 (Rectangle) -->
      <g class="train-piece ${isP('chassis_w2') ? 'is-painted' : 'is-unpainted'}" data-piece="chassis_w2" data-shape="rectangle" style="cursor:pointer;" title="Rectangle - Wagon 2 Base">
        <rect x="290" y="215" width="250" height="28" rx="6" fill="${pCol('chassis_w2', 'rectangle')}" stroke="${outline}" stroke-width="${sw}"/>
        <line x1="295" y1="229" x2="535" y2="229" stroke="#64748b" stroke-width="2" opacity="0.6"/>
      </g>

      <!-- 11. PIECE: cargo_box (Square) -->
      <g class="train-piece ${isP('cargo_box') ? 'is-painted' : 'is-unpainted'}" data-piece="cargo_box" data-shape="square" style="cursor:pointer;" title="Square - Cargo Cube">
        <rect x="305" y="115" width="100" height="100" rx="8" fill="${pCol('cargo_box', 'square')}" stroke="${outline}" stroke-width="${sw}"/>
        <rect x="317" y="127" width="76" height="76" rx="4" fill="none" stroke="${isP('cargo_box') ? '#1d4ed8' : '#94a3b8'}" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>
        <line x1="305" y1="115" x2="405" y2="215" stroke="${isP('cargo_box') ? '#1d4ed8' : '#cbd5e1'}" stroke-width="2" opacity="0.4"/>
        <line x1="405" y1="115" x2="305" y2="215" stroke="${isP('cargo_box') ? '#1d4ed8' : '#cbd5e1'}" stroke-width="2" opacity="0.4"/>
      </g>

      <!-- 12. PIECE: coach_body (Rectangle) -->
      <g class="train-piece ${isP('coach_body') ? 'is-painted' : 'is-unpainted'}" data-piece="coach_body" data-shape="rectangle" style="cursor:pointer;" title="Rectangle - Coach Body">
        <rect x="415" y="130" width="120" height="85" rx="8" fill="${pCol('coach_body', 'rectangle')}" stroke="${outline}" stroke-width="${sw}"/>
        <rect x="410" y="120" width="130" height="14" rx="6" fill="#64748b" stroke="${outline}" stroke-width="3"/>
      </g>

      <!-- 13. PIECE: heart_emblem (Heart) -->
      <g class="train-piece ${isP('heart_emblem') ? 'is-painted' : 'is-unpainted'}" data-piece="heart_emblem" data-shape="heart" style="cursor:pointer;" title="Heart - Coach Emblem">
        <path d="M 475 186 C 450 162 435 142 443 125 C 450 110 468 110 475 124 C 482 110 500 110 507 125 C 515 142 500 162 475 186 Z" fill="${pCol('heart_emblem', 'heart')}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
      </g>

      <!-- 14. PIECE: wheel_w2_l (Circle) -->
      <g class="train-piece ${isP('wheel_w2_l') ? 'is-painted' : 'is-unpainted'}" data-piece="wheel_w2_l" data-shape="circle" style="cursor:pointer;" title="Circle - Wheel 2 Left">
        <circle cx="345" cy="254" r="22" fill="${pCol('wheel_w2_l', 'circle')}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="345" cy="254" r="8" fill="#ffffff" stroke="${outline}" stroke-width="3"/>
      </g>

      <!-- 15. PIECE: wheel_w2_r (Circle) -->
      <g class="train-piece ${isP('wheel_w2_r') ? 'is-painted' : 'is-unpainted'}" data-piece="wheel_w2_r" data-shape="circle" style="cursor:pointer;" title="Circle - Wheel 2 Right">
        <circle cx="485" cy="254" r="22" fill="${pCol('wheel_w2_r', 'circle')}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="485" cy="254" r="8" fill="#ffffff" stroke="${outline}" stroke-width="3"/>
      </g>

      <!-- ==========================================
           LOCOMOTIVE (ENGINE)
           ========================================== -->
      <!-- 16. PIECE: cab_box (Square) -->
      <g class="train-piece ${isP('cab_box') ? 'is-painted' : 'is-unpainted'}" data-piece="cab_box" data-shape="square" style="cursor:pointer;" title="Square - Engine Cab">
        <rect x="570" y="110" width="115" height="105" rx="8" fill="${pCol('cab_box', 'square')}" stroke="${outline}" stroke-width="${sw}"/>
        <rect x="560" y="98" width="135" height="15" rx="6" fill="#64748b" stroke="${outline}" stroke-width="3"/>
      </g>

      <!-- 17. PIECE: diamond_window (Diamond) -->
      <g class="train-piece ${isP('diamond_window') ? 'is-painted' : 'is-unpainted'}" data-piece="diamond_window" data-shape="diamond" style="cursor:pointer;" title="Diamond - Cab Window">
        <polygon points="627,130 655,160 627,190 599,160" fill="${pCol('diamond_window', 'diamond')}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
        <line x1="627" y1="130" x2="627" y2="190" stroke="${outline}" stroke-width="2"/>
        <line x1="599" y1="160" x2="655" y2="160" stroke="${outline}" stroke-width="2"/>
      </g>

      <!-- 18. PIECE: boiler_body (Rectangle) -->
      <g class="train-piece ${isP('boiler_body') ? 'is-painted' : 'is-unpainted'}" data-piece="boiler_body" data-shape="rectangle" style="cursor:pointer;" title="Rectangle - Engine Boiler">
        <rect x="685" y="145" width="155" height="70" rx="8" fill="${pCol('boiler_body', 'rectangle')}" stroke="${outline}" stroke-width="${sw}"/>
        <line x1="735" y1="145" x2="735" y2="215" stroke="${isP('boiler_body') ? '#15803d' : '#94a3b8'}" stroke-width="2" opacity="0.5"/>
        <line x1="785" y1="145" x2="785" y2="215" stroke="${isP('boiler_body') ? '#15803d' : '#94a3b8'}" stroke-width="2" opacity="0.5"/>
      </g>

      <!-- Decorative Nose Slope -->
      <polygon points="840,145 875,178 875,215 840,215" fill="#cbd5e1" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>

      <!-- Smokestack Pipe -->
      <rect x="738" y="102" width="24" height="43" rx="3" fill="#64748b" stroke="${outline}" stroke-width="3"/>

      <!-- 19. PIECE: funnel_cap (Triangle) -->
      <g class="train-piece ${isP('funnel_cap') ? 'is-painted' : 'is-unpainted'}" data-piece="funnel_cap" data-shape="triangle" style="cursor:pointer;" title="Triangle - Smokestack Funnel">
        <polygon points="726,102 774,102 750,78" fill="${pCol('funnel_cap', 'triangle')}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
      </g>

      <!-- 20. PIECE: steam_puff (Oval) -->
      <g class="train-piece ${isP('steam_puff') ? 'is-painted' : 'is-unpainted'}" data-piece="steam_puff" data-shape="oval" style="cursor:pointer;" title="Oval - Steam Cloud">
        <ellipse cx="750" cy="52" rx="26" ry="16" fill="${pCol('steam_puff', 'oval')}" stroke="${outline}" stroke-width="3"/>
        <ellipse cx="722" cy="38" rx="19" ry="13" fill="${pCol('steam_puff', 'oval')}" stroke="${outline}" stroke-width="3"/>
        <ellipse cx="778" cy="34" rx="17" ry="11" fill="${pCol('steam_puff', 'oval')}" stroke="${outline}" stroke-width="2.5"/>
      </g>

      <!-- 21. PIECE: cowcatcher (Triangle) -->
      <g class="train-piece ${isP('cowcatcher') ? 'is-painted' : 'is-unpainted'}" data-piece="cowcatcher" data-shape="triangle" style="cursor:pointer;" title="Triangle - Locomotive Cowcatcher">
        <polygon points="875,255 915,255 875,215" fill="${pCol('cowcatcher', 'triangle')}" stroke="${outline}" stroke-width="${sw}" stroke-linejoin="round"/>
      </g>

      <!-- 22. PIECE: star_badge (Star) -->
      <g class="train-piece ${isP('star_badge') ? 'is-painted' : 'is-unpainted'}" data-piece="star_badge" data-shape="star" style="cursor:pointer;" title="Star - Engine Star Badge">
        <rect x="865" y="160" width="14" height="22" rx="3" fill="#fbbf24" stroke="${outline}" stroke-width="2"/>
        <polygon points="872,138 877,150 890,151 880,160 883,172 872,165 861,172 864,160 854,151 867,150" fill="${pCol('star_badge', 'star')}" stroke="${outline}" stroke-width="2.5" stroke-linejoin="round"/>
      </g>

      <!-- Locomotive Wheels (Individually Painted Circles!) -->
      <!-- 23. PIECE: wheel_eng_1 (Circle) -->
      <g class="train-piece ${isP('wheel_eng_1') ? 'is-painted' : 'is-unpainted'}" data-piece="wheel_eng_1" data-shape="circle" style="cursor:pointer;" title="Circle - Engine Wheel 1">
        <circle cx="620" cy="250" r="26" fill="${pCol('wheel_eng_1', 'circle')}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="620" cy="250" r="10" fill="#ffffff" stroke="${outline}" stroke-width="3.5"/>
      </g>

      <!-- 24. PIECE: wheel_eng_2 (Circle) -->
      <g class="train-piece ${isP('wheel_eng_2') ? 'is-painted' : 'is-unpainted'}" data-piece="wheel_eng_2" data-shape="circle" style="cursor:pointer;" title="Circle - Engine Wheel 2">
        <circle cx="710" cy="250" r="26" fill="${pCol('wheel_eng_2', 'circle')}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="710" cy="250" r="10" fill="#ffffff" stroke="${outline}" stroke-width="3.5"/>
      </g>

      <!-- 25. PIECE: wheel_eng_3 (Circle) -->
      <g class="train-piece ${isP('wheel_eng_3') ? 'is-painted' : 'is-unpainted'}" data-piece="wheel_eng_3" data-shape="circle" style="cursor:pointer;" title="Circle - Engine Wheel 3">
        <circle cx="800" cy="250" r="26" fill="${pCol('wheel_eng_3', 'circle')}" stroke="${outline}" stroke-width="${sw}"/>
        <circle cx="800" cy="250" r="10" fill="#ffffff" stroke="${outline}" stroke-width="3.5"/>
      </g>

      <!-- Driver Rod (over wheels) -->
      <rect x="615" y="246" width="190" height="8" rx="4" fill="#64748b" stroke="${outline}" stroke-width="2"/>
      <circle cx="620" cy="250" r="4" fill="#ffffff"/>
      <circle cx="710" cy="250" r="4" fill="#ffffff"/>
      <circle cx="800" cy="250" r="4" fill="#ffffff"/>
    </svg>`;
  }

  function renderFindShape(body, engine) {
    const totalPainted = Object.keys(trainPaintedPieces).length;
    const discoveredCount = countDiscoveredShapes();

    // Check if 100% of pieces are completed
    if (totalPainted >= TRAIN_PIECES.length) {
      body.innerHTML = `
        <div class="colors-panel-card" style="text-align:center;">
          <div style="font-size:3.5rem; animation:trainWhistle 1s ease infinite alternate;">🚂🎉</div>
          <h3 style="color:#166534; font-size:1.6rem; margin:6px 0 2px;">¡El tren geométrico está 100% completo!</h3>
          <p style="font-weight:800; color:#334155; margin:0 0 14px;">¡Pintaste cada una de las 25 piezas y ubicaste las 8 figuras geométricas en el tren!</p>
          <div class="find-scene-box" style="padding:4px 0 8px; margin-bottom:16px;">
            ${buildTrainSVG(trainPaintedPieces)}
          </div>
          <div style="display:flex; gap:14px; justify-content:center; align-items:center; flex-wrap:wrap; margin-top:14px;">
            <button type="button" class="toddler-quiz-launch-btn" id="btnTrainRetry" style="background:#64748b;">
              🔄 Pintar de nuevo
            </button>
            <button type="button" class="toddler-quiz-launch-btn train-advance-btn" id="btnTrainNextActivity" style="background:linear-gradient(135deg,#059669,#047857); font-size:1.1rem; padding:14px 28px; box-shadow:0 8px 24px rgba(5,150,105,0.4);">
              4. 🏗️ Build with Shapes ➔
            </button>
          </div>
        </div>
      `;

      body.querySelector('#btnTrainRetry')?.addEventListener('click', () => {
        trainPaintedPieces = {};
        trainTargetShapeKey = 'circle';
        renderFindShape(body, engine);
      });

      body.querySelector('#btnTrainNextActivity')?.addEventListener('click', () => {
        activeSubTab = 'build';
        const wrap = body.closest('.shapes-studio-wrap');
        const outer = wrap ? wrap.parentElement : body.parentElement;
        window.renderToddlersShapesStudio(outer, engine);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    // Determine target prompt shape
    let currentTarget = SHAPES_DATA.find(s => s.key === trainTargetShapeKey);
    if (!currentTarget) {
      currentTarget = SHAPES_DATA.find(s => !TRAIN_PIECES.some(p => p.shape === s.key && trainPaintedPieces[p.id])) || SHAPES_DATA[0];
      trainTargetShapeKey = currentTarget.key;
    }

    const isAllShapesDiscovered = discoveredCount >= 8;

    body.innerHTML = `
      <div class="colors-panel-card" id="trainActivityCard">
        <div class="mini-quiz-meta">
          <span id="trainMetaCount">🎨 ${totalPainted} / ${TRAIN_PIECES.length} piezas pintadas</span>
          <span id="trainMetaShapes" style="color:#0284c7; font-weight:800;">🔷 ${discoveredCount} / 8 figuras</span>
          <span id="trainMetaStars">⭐ ${totalPainted * 5}</span>
        </div>

        <!-- Bili instruction banner -->
        <div class="bili-find-banner" style="margin-bottom:12px;">
          <img src="assets/mascot/bili_pixel_idle.png" alt="Bili" class="bili-find-avatar">
          <div style="flex:1;">
            <div style="font-weight:900; color:#78350f; font-size:1.2rem;" id="trainPromptLabel">
              🚂 Busca un: "${currentTarget.en} (${currentTarget.es})"
            </div>
            <div style="font-size:0.92rem; color:#64748b; margin-top:3px;" id="trainPromptHint">
              👆 <strong>Toca cualquier figura dentro del tren</strong> para pintarla de forma independiente y escuchar su pronunciación en inglés.
            </div>
            <button type="button" class="toddler-nav-pill active" id="btnHearTrainShape"
              style="margin-top:8px; padding:6px 16px; font-size:0.88rem;">
              🔊 Escuchar "${currentTarget.en}"
            </button>
          </div>
        </div>

        <!-- TRAIN SVG BOARD (Child touches each shape piece directly here!) -->
        <div class="find-scene-box" id="trainSvgContainer" style="padding:4px 0 8px;">
          ${buildTrainSVG(trainPaintedPieces)}
        </div>

        <p class="mini-quiz-feedback" id="trainFeedback" style="min-height:1.6em; margin:10px 0 6px; font-size:1rem; font-weight:800;"></p>

        <!-- Unlock banner when all 8 shapes are discovered -->
        ${isAllShapesDiscovered ? `
          <div class="train-unlock-banner" id="trainUnlockBanner" style="background:linear-gradient(135deg,#ecfdf5,#d1fae5); border:2px solid #10b981; border-radius:14px; padding:12px 18px; margin:10px 0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; animation:trainZonePop 0.6s ease;">
            <div>
              <div style="font-weight:900; color:#065f46; font-size:1.15rem;">🎉 ¡Ubicaste las 8 figuras geométricas en el tren!</div>
              <div style="font-size:0.9rem; color:#047857;">¡Excelente trabajo! Ya puedes pasar a la siguiente actividad o terminar de pintar las ${TRAIN_PIECES.length - totalPainted} piezas restantes.</div>
            </div>
            <button type="button" class="toddler-quiz-launch-btn train-advance-btn" id="btnTrainNextActivity" style="background:linear-gradient(135deg,#059669,#047857); font-size:1.05rem; padding:12px 24px; box-shadow:0 6px 18px rgba(5,150,105,0.35);">
              4. 🏗️ Build with Shapes ➔
            </button>
          </div>
        ` : ''}

        <!-- Checklist of shapes (Real-time progress for all 8 shapes) -->
        <div style="margin:8px 0 6px; text-align:center; font-weight:800; color:#475569; font-size:0.9rem;">
          📋 Figuras geométricas en el tren (${discoveredCount}/8 ubicadas):
        </div>
        <div class="train-shapes-checklist" id="trainChecklist">
          ${SHAPES_DATA.map(s => {
            const totalForThis = TRAIN_PIECES.filter(p => p.shape === s.key).length;
            const paintedForThis = TRAIN_PIECES.filter(p => p.shape === s.key && trainPaintedPieces[p.id]).length;
            const isDone = paintedForThis > 0;
            const isAll = paintedForThis === totalForThis;
            const isTarget = (!isDone && s.key === currentTarget.key);
            return `
              <div class="train-check-card ${isDone ? 'done' : ''} ${isTarget ? 'target' : ''}" data-key="${s.key}" title="Toca para escuchar: ${s.en}">
                <div class="train-check-svg">
                  ${s.svg(isDone ? s.color : '#cbd5e1', isDone ? s.stroke : '#94a3b8', 'shape-svg-xs')}
                </div>
                <div class="train-check-text">
                  <span class="train-check-name" style="color:${isDone ? s.color : (isTarget ? '#b45309' : '#64748b')};">${s.en}</span>
                  <span class="train-check-status">${isAll ? `🌟 ${paintedForThis}/${totalForThis}` : (isDone ? `✅ ${paintedForThis}/${totalForThis}` : `⏳ 0/${totalForThis}`)}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Audio on load & hear button
    engine.playAudio(currentTarget.en);
    body.querySelector('#btnHearTrainShape')?.addEventListener('click', () => {
      engine.playAudio(currentTarget.en);
    });

    // Advance button wiring if present
    const wireAdvanceBtn = () => {
      body.querySelector('#btnTrainNextActivity')?.addEventListener('click', () => {
        activeSubTab = 'build';
        const wrap = body.closest('.shapes-studio-wrap');
        const outer = wrap ? wrap.parentElement : body.parentElement;
        window.renderToddlersShapesStudio(outer, engine);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    };
    wireAdvanceBtn();

    // Clicking checklist cards updates target and plays audio
    body.querySelectorAll('.train-check-card').forEach(card => {
      card.addEventListener('click', () => {
        const k = card.dataset.key;
        const sh = SHAPES_DATA.find(s => s.key === k);
        if (sh) {
          trainTargetShapeKey = k;
          engine.playAudio(sh.en);
          const lbl = body.querySelector('#trainPromptLabel');
          if (lbl) lbl.textContent = `🚂 Busca un: "${sh.en} (${sh.es})"`;
          const hearBtn = body.querySelector('#btnHearTrainShape');
          if (hearBtn) {
            hearBtn.textContent = `🔊 Escuchar "${sh.en}"`;
            hearBtn.onclick = () => engine.playAudio(sh.en);
          }
          // Highlight card
          body.querySelectorAll('.train-check-card').forEach(c => {
            if (!TRAIN_PIECES.some(p => p.shape === c.dataset.key && trainPaintedPieces[p.id])) {
              if (c.dataset.key === k) {
                c.className = 'train-check-card target';
              } else {
                c.className = 'train-check-card';
              }
            }
          });
        }
      });
    });

    const fb = body.querySelector('#trainFeedback');

    // Handle touch on individual train piece
    const handlePieceClick = (pieceId, pieceEl) => {
      const piece = TRAIN_PIECES.find(p => p.id === pieceId);
      if (!piece) return;
      const shapeObj = SHAPES_DATA.find(s => s.key === piece.shape);
      if (!shapeObj) return;

      const wasPainted = !!trainPaintedPieces[pieceId];

      if (wasPainted) {
        // Already painted piece tapped: replay pronunciation and pop animation
        engine.playAudio(shapeObj.en);
        pieceEl.classList.remove('train-piece-popping');
        void pieceEl.offsetWidth; // retrigger reflow
        pieceEl.classList.add('train-piece-popping');
        if (fb) {
          fb.style.color = '#0284c7';
          fb.innerHTML = `🔊 <strong>${shapeObj.en}</strong> (${shapeObj.es}) — ¡Esta pieza ya está pintada!`;
        }
        return;
      }

      // ✅ Paint THIS specific piece independently!
      trainPaintedPieces[pieceId] = true;
      engine.addStars(5);
      engine.playAudio(shapeObj.en);

      // Repaint train SVG to apply color ONLY to this piece
      const container = body.querySelector('#trainSvgContainer');
      if (container) {
        container.innerHTML = buildTrainSVG(trainPaintedPieces);
        attachTrainPieceListeners();

        // Trigger pop animation on the newly painted piece
        const newlyPainted = container.querySelector(`[data-piece="${pieceId}"]`);
        if (newlyPainted) {
          newlyPainted.classList.add('train-piece-popping');
        }
      }

      const newPaintedCount = Object.keys(trainPaintedPieces).length;
      const newDiscoveredCount = countDiscoveredShapes();
      const totalForThisShape = TRAIN_PIECES.filter(p => p.shape === shapeObj.key).length;
      const paintedForThisShape = TRAIN_PIECES.filter(p => p.shape === shapeObj.key && trainPaintedPieces[p.id]).length;

      // Update meta counters
      const countEl = body.querySelector('#trainMetaCount');
      if (countEl) countEl.textContent = `🎨 ${newPaintedCount} / ${TRAIN_PIECES.length} piezas pintadas`;
      const shapeCountEl = body.querySelector('#trainMetaShapes');
      if (shapeCountEl) shapeCountEl.textContent = `🔷 ${newDiscoveredCount} / 8 figuras`;
      const starEl = body.querySelector('#trainMetaStars');
      if (starEl) starEl.textContent = `⭐ ${newPaintedCount * 5}`;

      // Feedback message
      if (fb) {
        fb.style.color = '#166534';
        fb.innerHTML = `✅ ¡<strong>${shapeObj.en}</strong>! (${shapeObj.es}) 🎨 Pintaste: ${piece.name} (${paintedForThisShape}/${totalForThisShape})`;
      }

      // Update target prompt to next undiscovered shape if available
      const nextUndiscovered = SHAPES_DATA.find(s => !TRAIN_PIECES.some(p => p.shape === s.key && trainPaintedPieces[p.id]));
      if (nextUndiscovered) {
        trainTargetShapeKey = nextUndiscovered.key;
        const lbl = body.querySelector('#trainPromptLabel');
        if (lbl) lbl.textContent = `🚂 Busca un: "${nextUndiscovered.en} (${nextUndiscovered.es})"`;
        const hearBtn = body.querySelector('#btnHearTrainShape');
        if (hearBtn) {
          hearBtn.textContent = `🔊 Escuchar "${nextUndiscovered.en}"`;
          hearBtn.onclick = () => engine.playAudio(nextUndiscovered.en);
        }
      }

      // Update checklist card for this shape
      const checkCard = body.querySelector(`.train-check-card[data-key="${shapeObj.key}"]`);
      if (checkCard) {
        const isDone = paintedForThisShape > 0;
        const isAll = paintedForThisShape === totalForThisShape;
        checkCard.className = `train-check-card ${isDone ? 'done' : ''}`;
        const nameEl = checkCard.querySelector('.train-check-name');
        if (nameEl) nameEl.style.color = shapeObj.color;
        const statusEl = checkCard.querySelector('.train-check-status');
        if (statusEl) statusEl.textContent = isAll ? `🌟 ${paintedForThisShape}/${totalForThisShape}` : `✅ ${paintedForThisShape}/${totalForThisShape}`;
        const svgEl = checkCard.querySelector('.train-check-svg');
        if (svgEl) svgEl.innerHTML = shapeObj.svg(shapeObj.color, shapeObj.stroke, 'shape-svg-xs');
      }

      // If all 8 shapes are now discovered, unlock next activity banner!
      if (newDiscoveredCount >= 8 && !body.querySelector('#trainUnlockBanner')) {
        const unlockDiv = document.createElement('div');
        unlockDiv.id = 'trainUnlockBanner';
        unlockDiv.className = 'train-unlock-banner';
        unlockDiv.style.cssText = 'background:linear-gradient(135deg,#ecfdf5,#d1fae5); border:2px solid #10b981; border-radius:14px; padding:12px 18px; margin:10px 0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; animation:trainZonePop 0.6s ease;';
        unlockDiv.innerHTML = `
          <div>
            <div style="font-weight:900; color:#065f46; font-size:1.15rem;">🎉 ¡Ubicaste las 8 figuras geométricas en el tren!</div>
            <div style="font-size:0.9rem; color:#047857;">¡Excelente trabajo! Ya puedes pasar a la siguiente actividad o terminar de pintar las ${TRAIN_PIECES.length - newPaintedCount} piezas restantes.</div>
          </div>
          <button type="button" class="toddler-quiz-launch-btn train-advance-btn" id="btnTrainNextActivity" style="background:linear-gradient(135deg,#059669,#047857); font-size:1.05rem; padding:12px 24px; box-shadow:0 6px 18px rgba(5,150,105,0.35);">
            4. 🏗️ Build with Shapes ➔
          </button>
        `;
        const checklist = body.querySelector('#trainChecklist');
        if (checklist && checklist.parentElement) {
          checklist.parentElement.insertBefore(unlockDiv, checklist);
        }
        wireAdvanceBtn();
      }

      // Check 100% completion (all 25 pieces)
      if (newPaintedCount >= TRAIN_PIECES.length) {
        setTimeout(() => {
          renderFindShape(body, engine);
          const wrap = body.closest('.shapes-studio-wrap');
          if (wrap) {
            const outer = wrap.parentElement;
            window.renderToddlersShapesStudio(outer, engine);
          }
        }, 1100);
      }
    };

    function attachTrainPieceListeners() {
      const container = body.querySelector('#trainSvgContainer');
      if (!container) return;
      container.querySelectorAll('.train-piece').forEach(pieceEl => {
        pieceEl.addEventListener('click', (e) => {
          e.stopPropagation();
          const pId = pieceEl.dataset.piece;
          if (pId) handlePieceClick(pId, pieceEl);
        });
      });
    }
    attachTrainPieceListeners();
  }

  /* --------------------------------------------------------------------------
     ACTIVITY 4 – BUILD WITH SHAPES (REAL POINTER DRAG & DROP + TAP TO PLACE)
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
          ${bp.instruction} (Arrastra cada figura a su silueta o tócala)
        </p>

        <div class="build-arena-grid">
          <div class="build-blueprint-stage" id="buildStage">
            ${bp.bgSvg || ''}
            ${bp.slots.map(sl => {
              const sh = SHAPES_DATA.find(s => s.key === sl.shapeKey);
              const svgHtml = sl.renderSvg
                ? sl.renderSvg('#ffffff', '#94a3b8', 3, true)
                : sh.svg('#e2e8f0', '#94a3b8', 'build-slot-svg');
              return `
                <div class="build-slot-zone" data-slot="${sl.slotId}" data-shape="${sl.shapeKey}"
                  style="left:${sl.x}px; top:${sl.y}px; width:${sl.w}px; height:${sl.h}px; z-index:${sl.zIndex || 2};">
                  ${svgHtml}
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

      const slDef = bp.slots.find(s => s.slotId === slotId);

      slotEl.classList.add('snapped');
      slotEl.innerHTML = (slDef && slDef.renderSvg)
        ? slDef.renderSvg(shapeObj.color, shapeObj.stroke, 3.5, false)
        : shapeObj.svg(shapeObj.color, shapeObj.stroke, 'build-slot-svg');
      pieceEl.classList.add('used');
      pieceEl.style.pointerEvents = 'none';

      progLabel.textContent = `${placedSlots.size} / ${bp.slots.length} piezas`;
      engine.playAudio(shapeObj.en);

      if (placedSlots.size === bp.slots.length) {
        engine.addStars(20);
        fb.style.color = '#166534';
        fb.innerHTML = `🎉 ¡Construcción completada: <strong>${bp.title}</strong>!`;
        if (buildIndex + 1 < BUILD_BLUEPRINTS.length) {
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'toddler-quiz-launch-btn';
          next.style.cssText = 'display:block; margin:10px auto 0; padding:10px 24px; font-size:1.05rem; background:linear-gradient(135deg,#059669,#047857); box-shadow:0 6px 18px rgba(5,150,105,0.35);';
          next.textContent = 'Siguiente Objeto ➔';
          next.addEventListener('click', () => {
            buildIndex++;
            renderBuildShapes(body, engine);
          });
          fb.after(next);
        } else {
          const allDone = document.createElement('div');
          allDone.style.cssText = 'margin-top:12px; padding:12px; background:#ecfdf5; border:2px solid #10b981; border-radius:14px; text-align:center;';
          allDone.innerHTML = `
            <div style="font-size:1.8rem;">🏆🌟</div>
            <div style="font-weight:900; color:#065f46; font-size:1.15rem; margin-top:4px;">¡Completaste las 3 construcciones!</div>
            <p style="color:#047857; font-size:0.95rem; margin:4px 0 10px;">¡Construiste la Casa, el Robot y el Barco con figuras geométricas!</p>
            <button type="button" class="toddler-quiz-launch-btn" id="btnGoToEval" style="background:#2563eb; font-size:1rem; padding:10px 22px;">
              5. 🏆 Ir a la Evaluación Final ➔
            </button>
          `;
          fb.after(allDone);
          allDone.querySelector('#btnGoToEval')?.addEventListener('click', () => {
            activeSubTab = 'eval';
            const wrap = body.closest('.shapes-studio-wrap');
            const outer = wrap ? wrap.parentElement : body.parentElement;
            window.renderToddlersShapesStudio(outer, engine);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        }
      } else {
        fb.style.color = '#166534';
        fb.innerHTML = `✅ ¡Encajó! <strong>${shapeObj.en}</strong> (${shapeObj.es})`;
      }
    };

    // Real Pointer Events Drag & Drop + Tap to Place
    body.querySelectorAll('.build-drag-piece').forEach(piece => {
      let startX = 0;
      let startY = 0;
      let dragged = false;

      piece.addEventListener('pointerdown', (e) => {
        if (piece.classList.contains('used')) return;
        e.preventDefault();

        startX = e.clientX;
        startY = e.clientY;
        dragged = false;

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
          const dist = Math.hypot(ev.clientX - startX, ev.clientY - startY);
          if (dist > 6) dragged = true;
          ghost.style.left = `${ev.clientX - rect.width / 2}px`;
          ghost.style.top = `${ev.clientY - rect.height / 2}px`;
        };

        const onUp = (ev) => {
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
          document.removeEventListener('pointercancel', onUp);
          ghost.remove();
          piece.style.opacity = '';

          // If child simply tapped the piece (no significant drag):
          if (!dragged) {
            const matchedSlot = stageEl.querySelector(`.build-slot-zone[data-shape="${shapeKey}"]:not(.snapped)`);
            if (matchedSlot) {
              placeSlot(matchedSlot, piece, shapeObj);
              return;
            }
          }

          // If dragged: Check hit against unplaced slots (sorted by z-index descending so inner slots win)
          const slots = Array.from(stageEl.querySelectorAll('.build-slot-zone:not(.snapped)'))
            .sort((a, b) => (Number(b.style.zIndex) || 0) - (Number(a.style.zIndex) || 0));

          let matchedSlot = null;
          for (const sl of slots) {
            const sr = sl.getBoundingClientRect();
            const pad = 24;
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
