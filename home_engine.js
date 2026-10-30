/**
 * BILIKIDS HOME ENGINE
 * Handles interactive Web Audio sound effects,
 * quick search modal, notifications, and profile drawer.
 * (Direct link navigation is preserved on all category & resource cards!)
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

  // Search Button
  const btnSearch = document.getElementById('btnSearch');
  if (btnSearch) {
    btnSearch.addEventListener('click', () => {
      openModal('🔍 Buscar en Bilikids', `
        <div>
          <input type="text" placeholder="Escribe un tema (ej: animales, compras, granja, juegos)..." 
                 style="width: 100%; padding: 0.85rem 1.25rem; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-size: 1rem; outline: none; margin-bottom: 1rem;" 
                 autofocus />
          <div style="font-size: 0.85rem; color: #94a3b8;">
            Accesos directos rápidos: 
            <span style="color: #38bdf8; cursor: pointer; text-decoration: underline; margin-right: 8px;" onclick="window.location.href='juegos.html'">Zona de Juegos 2D</span>
            <span style="color: #38bdf8; cursor: pointer; text-decoration: underline; margin-right: 8px;" onclick="window.location.href='kids_unit8.html'">Shopping Mall Obby</span>
            <span style="color: #38bdf8; cursor: pointer; text-decoration: underline; margin-right: 8px;" onclick="window.location.href='stories.html'">Cuentos 3D</span>
            <span style="color: #38bdf8; cursor: pointer; text-decoration: underline;" onclick="window.location.href='farm.html'">Granja de Leo</span>
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
