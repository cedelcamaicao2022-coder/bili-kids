/**
 * Bilikids Unified Audio Player
 * Plays natural studio MP3 recordings (ElevenLabs) at their native recorded pace (1.0x)
 * with authentic tone. All synthetic browser voices (SpeechSynthesis) are completely disabled.
 */
const BILIKIDS_AUDIO_VERSION = '20261120_keywords_v1';

function normalizeAudioKey(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
}

let currentBilikidsAudio = null;
let userHasInteractedWithDoc = false;
let pendingAutoplayAudio = null;

// User gesture detection to unlock audio playback across the entire session
function registerFirstUserGesture() {
  if (userHasInteractedWithDoc) return;
  userHasInteractedWithDoc = true;
  
  // Resume any suspended AudioContext if present
  if (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (window.__biliSharedAudioCtx && window.__biliSharedAudioCtx.state === 'suspended') {
        window.__biliSharedAudioCtx.resume();
      }
    } catch (e) {}
  }

  // If there was a pending audio blocked by initial autoplay policy, play it now
  if (pendingAutoplayAudio) {
    const pending = pendingAutoplayAudio;
    pendingAutoplayAudio = null;
    playStudioOrSynthAudio(pending.text, pending.voiceType, pending.onComplete);
  }
}

if (typeof window !== 'undefined') {
  ['click', 'touchstart', 'touchend', 'keydown'].forEach(evt => {
    window.addEventListener(evt, registerFirstUserGesture, { once: false, passive: true });
  });
}

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

      // Cache-busting URL to ensure fresh audio files (Leo Kid & Jessica) are always loaded
      const finalSrc = audioSrc.includes('?v=')
        ? audioSrc
        : `${audioSrc}${audioSrc.includes('?') ? '&' : '?'}v=${BILIKIDS_AUDIO_VERSION}`;

      const audio = new Audio(finalSrc);
      currentBilikidsAudio = audio;

      // Reproducir voces naturales de estudio a su ritmo y tono original (1.0x exacto)
      audio.preservesPitch = true;
      audio.mozPreservesPitch = true;
      audio.webkitPreservesPitch = true;
      audio.playbackRate = 1.0;

      const safeDuration = Math.max(2500, text.length * 130);
      const safeTimer = setTimeout(finish, safeDuration);

      audio.onended = () => {
        clearTimeout(safeTimer);
        currentBilikidsAudio = null;
        finish();
      };
      audio.onerror = () => {
        clearTimeout(safeTimer);
        currentBilikidsAudio = null;
        console.warn("[KidsAudio] Audio could not be loaded:", finalSrc);
        finish();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Playback started successfully
          userHasInteractedWithDoc = true;
          pendingAutoplayAudio = null;
        }).catch(err => {
          console.warn("[KidsAudio] Audio play interrupted:", err);
          if (err && err.name === 'NotAllowedError') {
            // Autoplay blocked: remember audio and notify page to show tap-to-listen indicator
            pendingAutoplayAudio = { text, voiceType, onComplete };
            if (typeof window.__onAutoplayBlocked === 'function') {
              window.__onAutoplayBlocked(text, voiceType, onComplete);
            }
          }
        });
      }
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

function stopBilikidsAudio() {
  pendingAutoplayAudio = null;
  if (currentBilikidsAudio) {
    try {
      currentBilikidsAudio.pause();
      currentBilikidsAudio.currentTime = 0;
    } catch (e) {}
    currentBilikidsAudio = null;
  }
}

// Explicitly attach to window
if (typeof window !== 'undefined') {
  window.playStudioOrSynthAudio = playStudioOrSynthAudio;
  window.stopBilikidsAudio = stopBilikidsAudio;
  window.fallbackSpeechSynthesis = fallbackSpeechSynthesis;
  window.normalizeAudioKey = normalizeAudioKey;
  window.BILIKIDS_AUDIO_VERSION = BILIKIDS_AUDIO_VERSION;
}

// Auto-load studio audio manifest if not already included on the page
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!window.BilikidsAudioManifest && !window.KIDS_AUDIO_MANIFEST) {
    const s = document.createElement('script');
    s.src = `assets/kids_audio/kids_audio_manifest.js?v=${BILIKIDS_AUDIO_VERSION}`;
    document.head.appendChild(s);
  }
}
