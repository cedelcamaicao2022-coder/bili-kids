/**
 * Bilikids Unified Audio Player
 * Plays natural studio MP3 recordings (ElevenLabs) at their native recorded pace (1.0x)
 * with authentic tone. All synthetic browser voices (SpeechSynthesis) are completely disabled.
 */
function normalizeAudioKey(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
}

let currentBilikidsAudio = null;

// Permanently silence robotic browser speech synthesis
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak = function() {
      // Neutralized: browser robotic synthesizer is disabled
    };
  } catch (e) {}
}

function playStudioOrSynthAudio(text, voiceType = 'kid', onComplete = null) {
  let finished = false;
  const finish = () => {
    if (!finished) {
      finished = true;
      if (onComplete) onComplete();
    }
  };

  if (!text || typeof text !== 'string') {
    finish();
    return;
  }

  // Ensure any browser speech synthesis remains silenced
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }

  // 1. Check Studio Audio Manifests (Kids, Toddlers, Interactive Games)
  const key = normalizeAudioKey(text);
  const manifest = Object.assign(
    {},
    window.ToddlersAudioManifest || {},
    window.BilikidsAudioManifest || {},
    window.KIDS_AUDIO_MANIFEST || {},
    window.InteractiveGamesAudioManifest || {}
  );
  let audioSrc = manifest[key];
  if (!audioSrc) {
    const noSpaces = key.replace(/\s+/g, '');
    audioSrc = manifest[noSpaces];
  }
  if (!audioSrc) {
    const stripped = key.replace(/^(fossil uncovered the|correct a person from|correct that is in the|correct)\s*/i, '');
    audioSrc = manifest[stripped] || manifest[stripped.replace(/\s+/g, '')];
  }

  if (audioSrc) {
    try {
      if (currentBilikidsAudio) {
        currentBilikidsAudio.pause();
        currentBilikidsAudio.currentTime = 0;
        currentBilikidsAudio = null;
      }
      const audio = new Audio(audioSrc);
      currentBilikidsAudio = audio;

      // Reproducir voces naturales de estudio a su ritmo y tono original (1.0x exacto)
      audio.preservesPitch = true;
      audio.mozPreservesPitch = true;
      audio.webkitPreservesPitch = true;
      audio.playbackRate = 1.0;

      const safeDuration = Math.max(2000, text.length * 120);
      const safeTimer = setTimeout(finish, safeDuration);

      audio.onended = () => {
        clearTimeout(safeTimer);
        currentBilikidsAudio = null;
        finish();
      };
      audio.onerror = () => {
        clearTimeout(safeTimer);
        currentBilikidsAudio = null;
        console.warn("[KidsAudio] Audio could not be loaded:", audioSrc);
        finish();
      };
      audio.play().catch(err => {
        console.warn("[KidsAudio] Audio play interrupted:", err);
      });
      return;
    } catch (e) {
      console.warn("Audio exception:", e);
    }
  }

  // 2. Synthesizer permanently disabled: only natural voices are used
  console.warn("[KidsAudio] Natural studio audio not found for key:", key);
  finish();
}

function fallbackSpeechSynthesis(text, voiceType, callback) {
  // Robotic synthesizer is completely disabled per user instruction
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
  if (callback) callback();
}

// Explicitly attach to window
if (typeof window !== 'undefined') {
  window.playStudioOrSynthAudio = playStudioOrSynthAudio;
  window.fallbackSpeechSynthesis = fallbackSpeechSynthesis;
  window.normalizeAudioKey = normalizeAudioKey;
}

// Auto-load studio audio manifest if not already included on the page
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!window.BilikidsAudioManifest && !window.KIDS_AUDIO_MANIFEST) {
    const s = document.createElement('script');
    s.src = 'assets/kids_audio/kids_audio_manifest.js?v=20261118_bili';
    document.head.appendChild(s);
  }
}
