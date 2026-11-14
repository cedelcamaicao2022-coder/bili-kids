/**
 * ============================================================================
 * THE GREAT TREASURE MAP ENGINE • TODDLERS ADVENTURE
 * ============================================================================
 * Handles the interactive treasure roadmap for 15 Curricular Units + Golden Chest.
 * - Dynamic hotspot mapping with pixel-perfect percentage coordinates
 * - Progress tracking integration with bilikids_toddlers_progress_v2
 * - Interactive Bili explorer mascot pin
 * - English audio pronunciation on hover/click with Web Speech API & Sound FX
 * - Celebratory Golden Chest Modal with confetti & stats
 * - Seamless View Switcher (Modo Mapa vs Modo Cuadrícula)
 */

(function () {
  'use strict';

  // 15 Curricular Stations + 1 Golden Treasure Chest
  const MAP_STATIONS = [
    {
      id: 1,
      num: "01",
      title: "School Objects",
      sub: "Objetos del salón",
      badge: "1",
      left: "10.37%",
      top: "14.16%",
      width: "21.44%",
      height: "14.16%",
      pinX: 21.09,
      pinY: 14.16,
      icon: "🎒",
      accent: "#F8B84E"
    },
    {
      id: 2,
      num: "02",
      title: "Me",
      sub: "Mi cuerpo y quién soy",
      badge: "2",
      left: "32.50%",
      top: "14.16%",
      width: "15.21%",
      height: "14.16%",
      pinX: 40.10,
      pinY: 14.16,
      icon: "👦",
      accent: "#EF9D82"
    },
    {
      id: 3,
      num: "03",
      title: "Home & Family",
      sub: "Mi casa y mi familia",
      badge: "3",
      left: "49.79%",
      top: "13.67%",
      width: "22.13%",
      height: "14.65%",
      pinX: 60.85,
      pinY: 13.67,
      icon: "🏡",
      accent: "#75C59E"
    },
    {
      id: 4,
      num: "04",
      title: "My Body",
      sub: "Partes del cuerpo",
      badge: "4",
      left: "76.07%",
      top: "14.16%",
      width: "17.98%",
      height: "14.16%",
      pinX: 85.06,
      pinY: 14.16,
      icon: "✋",
      accent: "#85B6EE"
    },
    {
      id: 5,
      num: "05",
      title: "Sunny & Cloudy",
      sub: "El clima y el cielo",
      badge: "5",
      left: "70.54%",
      top: "30.76%",
      width: "23.51%",
      height: "13.67%",
      pinX: 82.29,
      pinY: 30.76,
      icon: "☀️",
      accent: "#F6C94F"
    },
    {
      id: 6,
      num: "06",
      title: "Farm Animals",
      sub: "Animales de la granja",
      badge: "6",
      left: "6.22%",
      top: "27.83%",
      width: "26.97%",
      height: "16.60%",
      pinX: 19.70,
      pinY: 27.83,
      icon: "🐮",
      accent: "#8CCB85"
    },
    {
      id: 7,
      num: "07",
      title: "At the Supermarket",
      sub: "Compras y alimentos",
      badge: "7",
      left: "41.49%",
      top: "29.79%",
      width: "24.90%",
      height: "14.65%",
      pinX: 53.94,
      pinY: 29.79,
      icon: "🍎",
      accent: "#EF9F8F"
    },
    {
      id: 8,
      num: "08",
      title: "Daily Activities",
      sub: "Rutinas de cada día",
      badge: "8",
      left: "7.61%",
      top: "44.43%",
      width: "23.51%",
      height: "14.16%",
      pinX: 19.36,
      pinY: 44.43,
      icon: "⏰",
      accent: "#9B91E9"
    },
    {
      id: 9,
      num: "09",
      title: "The Park",
      sub: "Juegos al aire libre",
      badge: "9",
      left: "34.58%",
      top: "44.43%",
      width: "25.59%",
      height: "14.16%",
      pinX: 47.37,
      pinY: 44.43,
      icon: "🌳",
      accent: "#7BC5A3"
    },
    {
      id: 10,
      num: "10",
      title: "Around Town",
      sub: "Lugares de la ciudad",
      badge: "10",
      left: "66.39%",
      top: "44.43%",
      width: "26.97%",
      height: "14.16%",
      pinX: 79.88,
      pinY: 44.43,
      icon: "🏙️",
      accent: "#84B5E9"
    },
    {
      id: 11,
      num: "11",
      title: "My Backyard",
      sub: "Plantas y jardín",
      badge: "11",
      left: "8.30%",
      top: "59.08%",
      width: "24.20%",
      height: "14.16%",
      pinX: 20.40,
      pinY: 59.08,
      icon: "🌻",
      accent: "#8FCB79"
    },
    {
      id: 12,
      num: "12",
      title: "Vehicles",
      sub: "Vehículos y transporte",
      badge: "12",
      left: "35.27%",
      top: "59.08%",
      width: "24.90%",
      height: "14.16%",
      pinX: 47.72,
      pinY: 59.08,
      icon: "🚗",
      accent: "#F1A06E"
    },
    {
      id: 13,
      num: "13",
      title: "The Ocean",
      sub: "Animales del océano",
      badge: "13",
      left: "62.93%",
      top: "59.08%",
      width: "31.12%",
      height: "14.16%",
      pinX: 78.49,
      pinY: 59.08,
      icon: "🐬",
      accent: "#70C3D9"
    },
    {
      id: 14,
      num: "14",
      title: "My Toy Box",
      sub: "Juguetes favoritos",
      badge: "14",
      left: "9.68%",
      top: "73.73%",
      width: "24.20%",
      height: "14.65%",
      pinX: 21.78,
      pinY: 73.73,
      icon: "🧸",
      accent: "#E89AB7"
    },
    {
      id: 15,
      num: "15",
      title: "Being Helpful",
      sub: "Ayudar a los demás",
      badge: "15",
      left: "36.65%",
      top: "73.73%",
      width: "22.13%",
      height: "14.65%",
      pinX: 47.71,
      pinY: 73.73,
      icon: "🤝",
      accent: "#F2BC54"
    },
    {
      id: "treasure",
      num: "★",
      title: "The Great Treasure!",
      sub: "¡Cofre Dorado del Tesoro!",
      badge: "★",
      left: "63.62%",
      top: "74.71%",
      width: "29.05%",
      height: "18.07%",
      pinX: 78.15,
      pinY: 74.71,
      icon: "🏆",
      isTreasure: true,
      accent: "#eab308"
    }
  ];

  class ToddlersTreasureMap {
    constructor() {
      this.storageKey = 'bilikids_toddlers_progress_v2';
      this.viewKey = 'bilikids_toddlers_view_mode';
      this.userProgress = this.loadProgress();
      this.activeStationId = 1;
      this.audioCtx = null;

      this.init();
    }

    loadProgress() {
      try {
        const raw = localStorage.getItem(this.storageKey);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.warn('Could not parse toddlers progress:', e);
      }
      return { totalStars: 100, units: {} };
    }

    getUnitProgress(unitId) {
      if (!this.userProgress || !this.userProgress.units) return null;
      return this.userProgress.units[unitId] || null;
    }

    isUnitCompleted(unitId) {
      const u = this.getUnitProgress(unitId);
      if (!u) return false;
      // If completed flag is set or high score
      if (u.completed) return true;
      // Or check if at least several activities have progress
      let total = 0;
      ['listening', 'reading', 'writing', 'speaking'].forEach(skill => {
        if (Array.isArray(u[skill])) {
          total += u[skill].filter(s => s > 0).length;
        }
      });
      return total >= 12; // Half or more completed counts as advanced/completed
    }

    determineCurrentStation() {
      // Find the first unit not yet completed (or default to 1)
      for (let i = 1; i <= 15; i++) {
        if (!this.isUnitCompleted(i)) {
          return i;
        }
      }
      return 'treasure'; // All units complete! Mascot stands on treasure chest!
    }

    playTone(freq = 440, type = 'sine', duration = 0.12) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        if (!this.audioCtx) this.audioCtx = new AudioContext();
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
      } catch (e) {}
    }

    speak(text) {
      try {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(text);
          utter.lang = 'en-US';
          utter.rate = 0.92;
          utter.pitch = 1.15;
          window.speechSynthesis.speak(utter);
        }
      } catch (e) {}
    }

    init() {
      this.activeStationId = this.determineCurrentStation();
      this.renderHotspots();
      // Eliminated the small pin on units per user request, keeping only the main bottom Bili
      const existingPin = document.getElementById('mapBiliExplorerPin');
      if (existingPin) existingPin.remove();
      this.setupTreasureModal();
      this.setupViewSwitcher();
      this.updateHeaderStats();
    }

    renderHotspots() {
      const layer = document.getElementById('mapHotspotsLayer');
      if (!layer) return;
      layer.innerHTML = '';

      MAP_STATIONS.forEach(station => {
        const isTreasure = !!station.isTreasure;
        const btn = document.createElement(isTreasure ? 'button' : 'a');
        btn.className = `station-hotspot-btn ${isTreasure ? 'station-hotspot-treasure' : ''}`;
        btn.id = `hotspotStation_${station.id}`;
        btn.dataset.stationId = station.id;

        btn.style.left = station.left;
        btn.style.top = station.top;
        btn.style.width = station.width;
        btn.style.height = station.height;

        if (!isTreasure) {
          btn.href = `toddlers_units.html?unit=${station.id}`;
          btn.setAttribute('aria-label', `Unidad ${station.num}: ${station.title} - ${station.sub}`);
        } else {
          btn.type = 'button';
          btn.setAttribute('aria-label', 'Cofre Dorado del Gran Tesoro');
        }

        const isComplete = !isTreasure && this.isUnitCompleted(station.id);
        const isActive = this.activeStationId === station.id;

        // Tooltip (pure visual CSS hover / focus, no robotic voice or audio on pointer hover)
        const tooltip = document.createElement('div');
        tooltip.className = 'station-map-tooltip';
        tooltip.innerHTML = `
          <div class="tooltip-station-tag">${isTreasure ? 'META FINAL 🏆' : `ESTACIÓN ${station.num}`}</div>
          <div class="tooltip-station-title">${station.icon} ${station.title}</div>
          <div class="tooltip-station-sub">${station.sub}</div>
          <div class="tooltip-station-action">${isTreasure ? '¡Toca para abrir! ✨' : (isComplete ? '¡Completada! Revisar ➔' : (isActive ? '¡Tu Misión Actual! ➔' : 'Explorar Estación ➔'))}</div>
        `;
        btn.appendChild(tooltip);

        // Click handler
        btn.addEventListener('click', (e) => {
          if (isTreasure) {
            e.preventDefault();
            this.openTreasureModal();
          } else {
            this.playTone(740, 'triangle', 0.15);
          }
        });

        layer.appendChild(btn);
      });
    }

    setupExplorerPin() {
      const board = document.querySelector('.treasure-map-board');
      if (!board) return;

      let pin = document.getElementById('mapBiliExplorerPin');
      if (!pin) {
        pin = document.createElement('div');
        pin.id = 'mapBiliExplorerPin';
        pin.className = 'map-bili-explorer-pin';
        pin.innerHTML = `
          <div class="map-bili-label">Bili Aquí 🐻</div>
          <img src="assets/mascot/bili_idle.png" alt="Bili Explorador" class="map-bili-avatar-img">
          <div class="map-pin-pulse-ring"></div>
        `;
        board.appendChild(pin);
      }

      // Position at active station
      const st = MAP_STATIONS.find(s => s.id === this.activeStationId) || MAP_STATIONS[0];
      this.moveExplorerPin(st.pinX, st.pinY);
    }

    moveExplorerPin(xPct, yPct) {
      const pin = document.getElementById('mapBiliExplorerPin');
      if (!pin) return;
      pin.style.left = `${xPct}%`;
      pin.style.top = `${yPct}%`;
    }

    updateHeaderStats() {
      const starsBadge = document.getElementById('mapTotalStarsBadge');
      const unitsBadge = document.getElementById('mapCompletedUnitsBadge');

      let completedCount = 0;
      for (let i = 1; i <= 15; i++) {
        if (this.isUnitCompleted(i)) completedCount++;
      }

      if (unitsBadge) {
        unitsBadge.textContent = `${completedCount} / 15 Unidades`;
      }
      if (starsBadge) {
        const total = (this.userProgress && this.userProgress.totalStars) ? this.userProgress.totalStars : 120;
        starsBadge.textContent = `⭐ ${total}`;
      }
    }

    setupTreasureModal() {
      // Create modal if not in DOM
      let modal = document.getElementById('treasureModalBackdrop');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'treasureModalBackdrop';
        modal.className = 'treasure-modal-backdrop';
        modal.innerHTML = `
          <div class="treasure-modal-card" role="dialog" aria-modal="true" aria-labelledby="treasureModalTitle">
            <button class="treasure-modal-close-btn" id="btnTreasureModalClose" aria-label="Cerrar modal">&times;</button>
            <div class="treasure-modal-icon">🏆</div>
            <h2 class="treasure-modal-title" id="treasureModalTitle">¡El Gran Tesoro de Toddlers!</h2>
            <p class="treasure-modal-desc">
              ¡Has recorrido todo el mapa de aventuras explorando las 15 unidades curriculares de inglés con Bili!
            </p>
            <div class="treasure-stats-box">
              <div class="treasure-stat-item">
                <strong id="modalStatCompletedUnits">0 / 15</strong>
                <span>Estaciones</span>
              </div>
              <div class="treasure-stat-item">
                <strong id="modalStatStars">120 ⭐</strong>
                <span>Estrellas</span>
              </div>
              <div class="treasure-stat-item">
                <strong id="modalStatRank">Explorador</strong>
                <span>Nivel</span>
              </div>
            </div>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
              <a href="toddlers_units.html?unit=15" class="treasure-modal-btn">
                <span>🎒 Continuar Aventura</span>
              </a>
              <button type="button" class="treasure-modal-btn" id="btnModalKeepExploring" style="background: #ffffff; color: #92400e; border: 2px solid #fde68a;">
                <span>🗺️ Seguir en el Mapa</span>
              </button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = document.getElementById('btnTreasureModalClose');
        const keepBtn = document.getElementById('btnModalKeepExploring');
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeTreasureModal());
        if (keepBtn) keepBtn.addEventListener('click', () => this.closeTreasureModal());

        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeTreasureModal();
        });
      }
    }

    openTreasureModal() {
      const modal = document.getElementById('treasureModalBackdrop');
      if (!modal) return;

      let completedCount = 0;
      for (let i = 1; i <= 15; i++) {
        if (this.isUnitCompleted(i)) completedCount++;
      }

      const totalStars = (this.userProgress && this.userProgress.totalStars) ? this.userProgress.totalStars : 120;
      const rank = completedCount >= 15 ? '¡Capitán Maestro! 👑' : (completedCount >= 8 ? 'Aventurero Experto 🌟' : 'Pequeño Explorador 🧭');

      const uEl = document.getElementById('modalStatCompletedUnits');
      const sEl = document.getElementById('modalStatStars');
      const rEl = document.getElementById('modalStatRank');

      if (uEl) uEl.textContent = `${completedCount} / 15`;
      if (sEl) sEl.textContent = `${totalStars} ⭐`;
      if (rEl) rEl.textContent = rank;

      modal.classList.add('active');

      // Play fanfare tone
      this.playTone(523, 'triangle', 0.2);
      setTimeout(() => this.playTone(659, 'triangle', 0.2), 150);
      setTimeout(() => this.playTone(784, 'triangle', 0.2), 300);
      setTimeout(() => this.playTone(1046, 'triangle', 0.4), 450);

      // Cheer speech
      this.speak("Congratulations! You found the Great Treasure!");
    }

    closeTreasureModal() {
      const modal = document.getElementById('treasureModalBackdrop');
      if (modal) modal.classList.remove('active');
    }

    setupViewSwitcher() {
      const btnMap = document.getElementById('btnViewMap');
      const btnGrid = document.getElementById('btnViewGrid');
      const mapView = document.getElementById('treasureMapView');
      const gridView = document.getElementById('toddlerCourseGrid');

      if (!btnMap || !btnGrid || !mapView || !gridView) return;

      const setMode = (mode) => {
        if (mode === 'grid') {
          btnGrid.classList.add('active');
          btnMap.classList.remove('active');
          mapView.style.display = 'none';
          gridView.style.display = 'grid';
        } else {
          btnMap.classList.add('active');
          btnGrid.classList.remove('active');
          mapView.style.display = 'block';
          gridView.style.display = 'none';
        }
        try {
          localStorage.setItem(this.viewKey, mode);
        } catch (e) {}
      };

      btnMap.addEventListener('click', () => {
        this.playTone(480, 'sine', 0.08);
        setMode('map');
      });

      btnGrid.addEventListener('click', () => {
        this.playTone(440, 'sine', 0.08);
        setMode('grid');
      });

      // Default: map mode
      const savedMode = localStorage.getItem(this.viewKey) || 'map';
      setMode(savedMode);
    }
  }

  // Auto-boot on DOMContentLoaded or immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.toddlersTreasureMap = new ToddlersTreasureMap();
    });
  } else {
    window.toddlersTreasureMap = new ToddlersTreasureMap();
  }
})();
