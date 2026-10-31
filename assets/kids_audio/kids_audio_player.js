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
      if (currentBilikidsAudio) {
        currentBilikidsAudio.pause();
        currentBilikidsAudio.currentTime = 0;
      }
      const audio = new Audio(audioSrc);
      currentBilikidsAudio = audio;

      // Preservar tono exacto y reducir velocidad a un ritmo pausado y natural para niños
      audio.preservesPitch = true;
      audio.mozPreservesPitch = true;
      audio.webkitPreservesPitch = true;
      audio.playbackRate = 0.88; // Ritmo pausado, claro y natural

      const safeDuration = Math.max(2000, (text.length * 120) / audio.playbackRate);
      const safeTimer = setTimeout(finish, safeDuration);

      audio.onended = () => {
        clearTimeout(safeTimer);
        finish();
      };
      audio.onerror = () => {
        clearTimeout(safeTimer);
        fallbackSpeechSynthesis(text, voiceType, finish);
      };
      audio.play().catch(err => {
        clearTimeout(safeTimer);
        fallbackSpeechSynthesis(text, voiceType, finish);
      });
      return;
    } catch (e) {
      console.warn("Audio exception:", e);
    }
  }

  // 2. Fallback to Web Speech API
  fallbackSpeechSynthesis(text, voiceType, finish);
}

function fallbackSpeechSynthesis(text, voiceType, callback) {
  if (!('speechSynthesis' in window)) {
    if (callback) callback();
    return;
  }
  try {
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
