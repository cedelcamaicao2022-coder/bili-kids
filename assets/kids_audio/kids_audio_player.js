/**
 * Bilikids Unified Audio Player
 * Automatically routes speech requests to ElevenLabs studio MP3s when available,
 * playing audio at a natural, calm pedagogical pace (0.88x with pitch preservation),
 * with seamless zero-latency fallback to Web Speech API.
 */
function normalizeAudioKey(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
}

let currentBilikidsAudio = null;

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

  // 1. Check ElevenLabs Studio Audio Manifest
  const key = normalizeAudioKey(text);
  const manifest = window.BilikidsAudioManifest || {};
  const audioSrc = manifest[key];

  if (audioSrc) {
    try {
      // Cancel any ongoing speech synthesis immediately so it never overlaps with real studio audio
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      if (currentBilikidsAudio) {
        currentBilikidsAudio.pause();
        currentBilikidsAudio.currentTime = 0;
        currentBilikidsAudio = null;
      }
      const audio = new Audio(audioSrc);
      currentBilikidsAudio = audio;

      // Preservar tono exacto y reproducir a ritmo natural y claro para niños
      audio.preservesPitch = true;
      audio.mozPreservesPitch = true;
      audio.webkitPreservesPitch = true;
      audio.playbackRate = 0.96; // Ritmo claro, natural y perfectamente modulado

      const safeDuration = Math.max(2000, (text.length * 120) / audio.playbackRate);
      const safeTimer = setTimeout(finish, safeDuration);

      audio.onended = () => {
        clearTimeout(safeTimer);
        currentBilikidsAudio = null;
        finish();
      };
      audio.onerror = () => {
        clearTimeout(safeTimer);
        currentBilikidsAudio = null;
        // Only fallback if the audio file genuinely failed to load (e.g. 404)
        fallbackSpeechSynthesis(text, voiceType, finish);
      };
      audio.play().catch(err => {
        // Do NOT blindly trigger speech synthesis on transient play() aborts/delays,
        // as doing so causes simultaneous overlapping robotic voice with the MP3.
        console.warn("[KidsAudio] Audio play interrupted or delayed:", err);
      });
      return;
    } catch (e) {
      console.warn("Audio exception:", e);
    }
  }

  // 2. Fallback to Web Speech API only when no audioSrc exists in manifest
  fallbackSpeechSynthesis(text, voiceType, finish);
}

function fallbackSpeechSynthesis(text, voiceType, callback) {
  if (!('speechSynthesis' in window)) {
    if (callback) callback();
    return;
  }
  try {
    // If studio audio is currently playing, do not speak over it!
    if (currentBilikidsAudio && !currentBilikidsAudio.paused && !currentBilikidsAudio.ended) {
      if (callback) callback();
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.82; // Ritmo pausado y natural
    utterance.pitch = (voiceType === 'maya' || voiceType === 'girl') ? 1.20 : 1.05;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Karen'))) 
                      || voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) utterance.voice = englishVoice;

    const safeTimer = setTimeout(() => {
      if (callback) callback();
    }, Math.max(1600, text.length * 90));

    utterance.onend = () => {
      clearTimeout(safeTimer);
      if (callback) callback();
    };
    utterance.onerror = () => {
      clearTimeout(safeTimer);
      if (callback) callback();
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    if (callback) callback();
  }
}
