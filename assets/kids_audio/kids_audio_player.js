/**
 * Bilikids Unified Audio Player
 * Automatically routes speech requests to ElevenLabs studio MP3s when available,
 * dynamically tuning pitch and cadence for child roles vs. adult roles,
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

      const v = (voiceType || '').toLowerCase();
      // Adults in scenarios (Teacher, Clerk, Officer, Waiter, Judge, Librarian, Agent)
      // Children (Alex, Maya, Kid, Student, Vlogger, Friend)
      const isAdultRole = v === 'teacher' || v === 'clerk' || v === 'officer' || v === 'judge' || v === 'agent' || v === 'waiter' || v === 'librarian' || v === 'cashier' || v === 'host';

      if (!isAdultRole) {
        // Child roles: Disable pitch preservation to shift pitch & formants up into natural child range
        audio.preservesPitch = false;
        audio.mozPreservesPitch = false;
        audio.webkitPreservesPitch = false;

        if (v === 'maya' || v === 'girl') {
          audio.playbackRate = 1.28; // Sweet, bright 8-9 year old girl voice
        } else {
          audio.playbackRate = 1.22; // Energetic 8-10 year old boy voice (Alex / Leo / Students)
        }
      } else {
        // Adult roles: Natural adult studio voice
        audio.preservesPitch = true;
        audio.playbackRate = 1.0;
      }

      const rate = audio.playbackRate || 1.0;
      const safeDuration = Math.max(1400, (text.length * 90) / rate);
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

    const v = (voiceType || '').toLowerCase();
    const isAdultRole = v === 'teacher' || v === 'clerk' || v === 'officer' || v === 'judge' || v === 'agent' || v === 'waiter' || v === 'librarian';

    if (isAdultRole) {
      utterance.rate = 0.88;
      utterance.pitch = 1.0;
    } else if (v === 'maya' || v === 'girl') {
      utterance.rate = 0.95;
      utterance.pitch = 1.35; // Child girl pitch
    } else {
      utterance.rate = 0.95;
      utterance.pitch = 1.25; // Child boy pitch
    }

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Karen'))) 
                      || voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) utterance.voice = englishVoice;

    const safeTimer = setTimeout(() => {
      if (callback) callback();
    }, Math.max(1400, text.length * 75));

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
