/**
 * Bilikids Global Mobile Audio Unlock Engine
 * Solves iOS Safari Silent Switch Muting & Autoplay Policy Blocks
 * Primes WebAudio and HTML5 Audio on the first user touch gesture.
 */

(function() {
  function unlockMobileAudio() {
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        if (!window.__bilikidsAudioCtx) {
          window.__bilikidsAudioCtx = new AudioCtxClass();
        }
        if (window.__bilikidsAudioCtx.state === 'suspended') {
          window.__bilikidsAudioCtx.resume();
        }
        // Prime buffer
        const buffer = window.__bilikidsAudioCtx.createBuffer(1, 1, 22050);
        const source = window.__bilikidsAudioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(window.__bilikidsAudioCtx.destination);
        source.start(0);
      }
    } catch (e) {}

    window.removeEventListener('touchstart', unlockMobileAudio, true);
    window.removeEventListener('touchend', unlockMobileAudio, true);
    window.removeEventListener('pointerdown', unlockMobileAudio, true);
  }

  window.addEventListener('touchstart', unlockMobileAudio, { capture: true, once: true });
  window.addEventListener('touchend', unlockMobileAudio, { capture: true, once: true });
  window.addEventListener('pointerdown', unlockMobileAudio, { capture: true, once: true });
})();
