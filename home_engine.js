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

  // =========================================================================
  // STUDENT PROFILE (NAME & PHOTO CUSTOMIZATION)
  // =========================================================================
  const DEFAULT_STUDENT_NAME = 'Matías';
  const DEFAULT_STUDENT_AVATAR = 'assets/home/avatar_matias_2x.png';

  function getStudentProfile() {
    return {
      name: localStorage.getItem('bilikids_student_name') || DEFAULT_STUDENT_NAME,
      avatar: localStorage.getItem('bilikids_student_avatar') || DEFAULT_STUDENT_AVATAR
    };
  }

  function applyStudentProfile(profile) {
    const headerName = document.getElementById('headerStudentName');
    const headerAvatar = document.getElementById('headerAvatarImg');
    const heroName = document.getElementById('heroChildName');
    const heroSr = document.getElementById('heroSrHeading');

    if (headerName) headerName.textContent = profile.name;
    if (headerAvatar) {
      headerAvatar.src = profile.avatar;
      headerAvatar.alt = 'Foto de ' + profile.name;
    }
    if (heroName) heroName.textContent = profile.name;
    if (heroSr) heroSr.textContent = '¡Hola, ' + profile.name + '!';
  }

  // Apply on page load
  const initialProfile = getStudentProfile();
  applyStudentProfile(initialProfile);

  // Profile Drawer & Editor
  const userProfile = document.getElementById('userProfile');
  if (userProfile) {
    userProfile.addEventListener('click', () => {
      const activeProfile = getStudentProfile();
      let tempAvatar = activeProfile.avatar;

      openModal('🎒 Perfil del Niño / Estudiante', `
        <div class="profile-modal-wrap">
          <div class="profile-avatar-section">
            <img src="${tempAvatar}" id="previewAvatarModal" class="profile-main-avatar" alt="Avatar" />
            <label for="uploadPhotoInput" class="profile-avatar-upload-btn" title="Subir foto desde tu dispositivo">
              📷
            </label>
            <input type="file" id="uploadPhotoInput" accept="image/*" style="display: none;" />
          </div>

          <div>
            <label for="uploadPhotoInput" class="profile-btn-upload-label">
              <span>📸 Subir foto de mi hijo/a</span>
            </label>
          </div>

          <div class="profile-field-group" style="margin-top: 1.25rem;">
            <label class="profile-field-label" for="inputStudentName">Nombre del niño o niña:</label>
            <input type="text" id="inputStudentName" class="profile-name-input" 
                   value="${activeProfile.name}" placeholder="Ej: Sofía, Valentina, Matías..." maxlength="25" />
          </div>

          <div class="profile-presets-title">O elige un personaje de Bilikids:</div>
          <div class="profile-presets-grid" id="presetAvatarsGrid">
            <img src="assets/home/avatar_matias_2x.png" class="profile-preset-item ${tempAvatar.includes('avatar_matias') ? 'active' : ''}" data-src="assets/home/avatar_matias_2x.png" title="Matías" />
            <img src="assets/home/char_babies_2x.png" class="profile-preset-item ${tempAvatar.includes('char_babies') ? 'active' : ''}" data-src="assets/home/char_babies_2x.png" title="Babies" />
            <img src="assets/home/char_toddlers_2x.png" class="profile-preset-item ${tempAvatar.includes('char_toddlers') ? 'active' : ''}" data-src="assets/home/char_toddlers_2x.png" title="Toddlers" />
            <img src="assets/home/char_kids_2x.png" class="profile-preset-item ${tempAvatar.includes('char_kids') ? 'active' : ''}" data-src="assets/home/char_kids_2x.png" title="Kids" />
            <img src="assets/home/char_teens_2x.png" class="profile-preset-item ${tempAvatar.includes('char_teens') ? 'active' : ''}" data-src="assets/home/char_teens_2x.png" title="Teens" />
          </div>

          <div class="profile-actions-row">
            <button id="btnSaveProfile" class="profile-btn-save">
              <span>💾 Guardar Cambios</span>
            </button>
          </div>
        </div>
      `);

      // Bind modal interactivity
      const previewImg = document.getElementById('previewAvatarModal');
      const fileInput = document.getElementById('uploadPhotoInput');
      const nameInput = document.getElementById('inputStudentName');
      const saveBtn = document.getElementById('btnSaveProfile');
      const presetItems = document.querySelectorAll('.profile-preset-item');

      // Preset click
      presetItems.forEach(item => {
        item.addEventListener('click', () => {
          presetItems.forEach(p => p.classList.remove('active'));
          item.classList.add('active');
          tempAvatar = item.getAttribute('data-src');
          if (previewImg) previewImg.src = tempAvatar;
          biliSound.playPop();
        });
      });

      // Photo upload with lightweight canvas compression (square crop)
      if (fileInput) {
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              canvas.width = 200;
              canvas.height = 200;

              const minDim = Math.min(img.width, img.height);
              const sx = (img.width - minDim) / 2;
              const sy = (img.height - minDim) / 2;

              ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, 200, 200);
              tempAvatar = canvas.toDataURL('image/jpeg', 0.85);
              if (previewImg) previewImg.src = tempAvatar;
              presetItems.forEach(p => p.classList.remove('active'));
              biliSound.playSparkle();
            };
            img.src = event.target.result;
          };
          reader.readAsDataURL(file);
        });
      }

      // Save profile
      if (saveBtn) {
        saveBtn.addEventListener('click', () => {
          const newName = (nameInput && nameInput.value.trim()) || DEFAULT_STUDENT_NAME;
          localStorage.setItem('bilikids_student_name', newName);
          localStorage.setItem('bilikids_student_avatar', tempAvatar);

          applyStudentProfile({ name: newName, avatar: tempAvatar });
          biliSound.playSparkle();
          closeModal();
        });
      }
    });

    // Support direct hash URL #perfil or #profile
    if (window.location.hash === '#perfil' || window.location.hash === '#profile') {
      setTimeout(() => { userProfile.click(); }, 350);
    }
  }

  const heroGreetingBadge = document.getElementById('heroGreetingBadge');
  if (heroGreetingBadge && userProfile) {
    heroGreetingBadge.addEventListener('click', () => {
      userProfile.click();
    });
  }
});
