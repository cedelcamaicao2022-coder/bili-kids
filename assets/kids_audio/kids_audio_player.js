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

      // Juvenile formant tuning for child roles vs adult roles
      const v = (voiceType || '').toLowerCase();
      const isAdultRole = v === 'teacher' || v === 'clerk' || v === 'officer' || v === 'judge' || v === 'agent' || v === 'waiter' || v === 'librarian' || v === 'cashier' || v === 'host';

      if (!isAdultRole) {
        // Child roles (Alex, Maya, Kid, Boy, Girl, Student, Vlogger):
        // Disable pitch preservation to shift formants up into an energetic, bright youthful timbre
        audio.preservesPitch = false;
        audio.mozPreservesPitch = false;
        audio.webkitPreservesPitch = false;
        if (v === 'maya' || v === 'girl') {
          audio.playbackRate = 1.25; // Youthful bright girl voice
        } else {
          audio.playbackRate = 1.20; // Youthful bright boy / kid voice
        }
      } else {
        // Adult roles (Teacher, Clerk, Officer, etc.):
        // Maintain natural adult studio pitch and steady pace
        audio.preservesPitch = true;
        audio.mozPreservesPitch = true;
        audio.webkitPreservesPitch = true;
        audio.playbackRate = 1.0;
      }

      const rate = audio.playbackRate || 1.0;
      const safeDuration = Math.max(1800, (text.length * 100) / rate);
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
    const v = (voiceType || '').toLowerCase();
    const isAdultRole = v === 'teacher' || v === 'clerk' || v === 'officer' || v === 'judge' || v === 'agent' || v === 'waiter' || v === 'librarian' || v === 'cashier' || v === 'host';

    if (isAdultRole) {
      utterance.rate = 0.88;
      utterance.pitch = 1.0;
    } else if (v === 'maya' || v === 'girl') {
      utterance.rate = 0.95;
      utterance.pitch = 1.35; // Bright youthful girl pitch
    } else {
      utterance.rate = 0.95;
      utterance.pitch = 1.25; // Energetic youthful boy / kid pitch
    }

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

// Explicitly attach to window
if (typeof window !== 'undefined') {
  window.playStudioOrSynthAudio = playStudioOrSynthAudio;
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
