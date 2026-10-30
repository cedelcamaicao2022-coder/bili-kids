/**
 * BILIKIDS HOME ENGINE
 * Handles interactive navigation, Web Audio sound effects,
 * modal dialogs, and smooth transitions.
 */

// Web Audio Sound Synthesizer (Zero external dependencies)
class BiliSound {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playSparkle() {
    try {
      this.init();
      if (!this.ctx) return;
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = f;
        const start = this.ctx.currentTime + idx * 0.05;
        gain.gain.setValueAtTime(0.08, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.18);
      });
    } catch (e) {}
  }
}

const biliSound = new BiliSound();

// Initialize UI interactions on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Sound on interactive elements
  document.querySelectorAll('.age-card, .resource-card, .continue-card, .hero-cta-btn, .nav-item').forEach(el => {
    el.addEventListener('mouseenter', () => biliSound.playPop());
  });

  // Modal handlers
  const modalOverlay = document.getElementById('biliModalOverlay');
  const modalTitle = document.getElementById('biliModalTitle');
  const modalContent = document.getElementById('biliModalContent');
  const modalCloseBtn = document.getElementById('biliModalClose');

  function openModal(title, html) {
    if (!modalOverlay) return;
    biliSound.playSparkle();
    modalTitle.textContent = title;
    modalContent.innerHTML = html;
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Videos Click
  const resVideos = document.getElementById('resVideos');
  if (resVideos) {
    resVideos.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('🎬 Bilikids Videos', `
        <div style="text-align: center; display: flex; flex-direction: column; gap: 1rem;">
          <div style="background: #0f172a; border-radius: 16px; padding: 2rem; border: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🐻📺</div>
            <h3 style="color: #fff; font-size: 1.3rem; margin-bottom: 0.5rem;">Barnaby's Adventure Show</h3>
            <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.5rem;">Aprende pronunciación y nuevo vocabulario con Barnaby y sus amigos en capítulos animados.</p>
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <button onclick="window.location.href='kids_unit8.html'" style="background: #06b6d4; color: #fff; border:none; padding: 0.7rem 1.4rem; border-radius: 20px; font-weight: 700; cursor: pointer;">Episodio 1: At The Mall</button>
              <button onclick="window.location.href='house.html'" style="background: #3b82f6; color: #fff; border:none; padding: 0.7rem 1.4rem; border-radius: 20px; font-weight: 700; cursor: pointer;">Episodio 2: In The House</button>
            </div>
          </div>
        </div>
      `);
    });
  }

  // Canciones Click
  const resCanciones = document.getElementById('resCanciones');
  if (resCanciones) {
    resCanciones.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('🎵 Bilikids Canciones en Inglés', `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <p style="color: #cbd5e1;">Escucha y canta las canciones interactivas para practicar tu inglés:</p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 0.85rem 1.25rem; border-radius: 12px;">
              <div>
                <strong style="color: #facc15;">1. The Color Song</strong>
                <div style="font-size: 0.82rem; color: #94a3b8;">Red, blue, yellow, green!</div>
              </div>
              <button onclick="window.location.href='colors_book.html'" style="background: #f59e0b; color: #fff; border:none; padding: 0.45rem 1rem; border-radius: 15px; font-weight:700; cursor:pointer;">▶ Escuchar</button>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 0.85rem 1.25rem; border-radius: 12px;">
              <div>
                <strong style="color: #38bdf8;">2. Old MacDonald's Farm</strong>
                <div style="font-size: 0.82rem; color: #94a3b8;">Animals & nature sounds</div>
              </div>
              <button onclick="window.location.href='farm.html'" style="background: #0284c7; color: #fff; border:none; padding: 0.45rem 1rem; border-radius: 15px; font-weight:700; cursor:pointer;">▶ Escuchar</button>
            </div>
          </div>
        </div>
      `);
    });
  }

  // Karaoke Click
  const resKaraoke = document.getElementById('resKaraoke');
  if (resKaraoke) {
    resKaraoke.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('🎤 Karaoke Sing Together!', `
        <div style="text-align: center; padding: 1rem 0;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌟🎙️✨</div>
          <h3 style="color: #a855f7; font-size: 1.35rem; margin-bottom: 0.5rem;">¡Estudio de Karaoke Bilikids!</h3>
          <p style="color: #cbd5e1; margin-bottom: 1.5rem;">Canta con la letra en pantalla y recibe estrellas por tu pronunciación en inglés.</p>
          <button onclick="window.location.href='kids_unit3.html'" style="background: linear-gradient(90deg, #a855f7, #ec4899); color: #fff; border:none; padding: 0.75rem 2rem; border-radius: 25px; font-weight: 700; font-size: 1rem; cursor:pointer; box-shadow: 0 4px 15px rgba(168,85,247,0.4);">Entrar al Estudio de Canto</button>
        </div>
      `);
    });
  }

  // Search Button
  const btnSearch = document.getElementById('btnSearch');
  if (btnSearch) {
    btnSearch.addEventListener('click', () => {
      openModal('🔍 Buscar en Bilikids', `
        <div>
          <input type="text" placeholder="Escribe un tema (ej: animales, números, colores, shopping)..." 
                 style="width: 100%; padding: 0.85rem 1.25rem; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-size: 1rem; outline: none; margin-bottom: 1rem;" 
                 autofocus />
          <div style="font-size: 0.85rem; color: #94a3b8;">
            Sugerencias populares: 
            <span style="color: #38bdf8; cursor: pointer; text-decoration: underline; margin-right: 8px;" onclick="window.location.href='kids_unit8.html'">Shopping Mall</span>
            <span style="color: #38bdf8; cursor: pointer; text-decoration: underline; margin-right: 8px;" onclick="window.location.href='kids_unit7.html'">Frog Pond</span>
            <span style="color: #38bdf8; cursor: pointer; text-decoration: underline;" onclick="window.location.href='farm.html'">Farm Animals</span>
          </div>
        </div>
      `);
    });
  }

  // Notification Button
  const btnNotifications = document.getElementById('btnNotifications');
  if (btnNotifications) {
    btnNotifications.addEventListener('click', () => {
      openModal('🔔 Notificaciones', `
        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div style="background: rgba(255,255,255,0.05); padding: 0.85rem; border-radius: 12px; border-left: 4px solid #22c55e;">
            <strong style="color: #fff;">🎉 ¡Nuevo juego desbloqueado!</strong>
            <p style="color: #94a3b8; font-size: 0.88rem; margin-top: 0.25rem;">El videojuego 2D "Shopping Mall Obby Run" de la Unidad 8 ya está disponible.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 0.85rem; border-radius: 12px; border-left: 4px solid #f59e0b;">
            <strong style="color: #fff;">⭐ Racha de aprendizaje</strong>
            <p style="color: #94a3b8; font-size: 0.88rem; margin-top: 0.25rem;">¡Llevas 5 días practicando seguido, Matías! Sigue así.</p>
          </div>
        </div>
      `);
    });
  }

  // Profile Drawer
  const userProfile = document.getElementById('userProfile');
  if (userProfile) {
    userProfile.addEventListener('click', () => {
      openModal('👤 Perfil de Estudiante', `
        <div style="text-align: center;">
          <img src="assets/home/avatar_matias_2x.png" style="width: 72px; height: 72px; border-radius: 50%; border: 3px solid #38bdf8; margin-bottom: 0.75rem;" />
          <h3 style="color: #fff; font-size: 1.3rem;">Matías González</h3>
          <p style="color: #38bdf8; font-weight: 600; font-size: 0.9rem; margin-bottom: 1.25rem;">Nivel: Kids (Cambridge A1 Movers)</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; text-align: left; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.05); padding: 0.75rem; border-radius: 12px;">
              <span style="color: #94a3b8; font-size: 0.8rem;">Estrellas ganadas</span>
              <div style="color: #facc15; font-size: 1.25rem; font-weight: 700;">★ 340</div>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 0.75rem; border-radius: 12px;">
              <span style="color: #94a3b8; font-size: 0.8rem;">Unidades completas</span>
              <div style="color: #22c55e; font-size: 1.25rem; font-weight: 700;">8 / 12</div>
            </div>
          </div>
          <button onclick="window.location.href='kids.html'" style="width: 100%; background: #0284c7; color: #fff; border:none; padding: 0.8rem; border-radius: 14px; font-weight:700; cursor:pointer;">Continuar Mi Aventura Kids</button>
        </div>
      `);
    });
  }
});
