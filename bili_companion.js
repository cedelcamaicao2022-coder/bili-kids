(() => {
  'use strict';

  const $ = id => document.getElementById(id);
  const ui = {
    line: $('biliLine'), stage: $('biliStage'), mood: $('biliMood'),
    start: $('startButton'), mic: $('micButton'), replay: $('replayButton'), next: $('nextButton'),
    hint: $('replyHint'), feedback: $('feedback'), progress: $('progressFill'), track: document.querySelector('.progress-track'),
    dots: [...document.querySelectorAll('#roundDots span')]
  };
  const rounds = [
    { prompt: 'Repeat after me: rojo, red.', answers: ['red', 'rojo red', 'red rojo'], color: 'red', spanish: 'rojo' },
    { prompt: 'Repeat after me: verde, green.', answers: ['green', 'verde green', 'green verde'], color: 'green', spanish: 'verde' },
    { prompt: 'Repeat after me: azul, blue.', answers: ['blue', 'azul blue', 'blue azul'], color: 'blue', spanish: 'azul' }
  ];

  let roundIndex = -1;
  let mediaRecorder = null;
  let mediaStream = null;
  let captureTimer = 0;
  let audioChunks = [];
  let recognitionPending = false;
  let speaking = false;
  let awaitingTopicChoice = false;
  let lastPrompt = '';
  let pageClosing = false;
  const testMode = new URLSearchParams(location.search).has('testMode');

  function setState(state, label) {
    ui.stage.dataset.state = state;
    ui.mood.textContent = label;
  }

  function normalize(value) {
    return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, "'").replace(/[^a-z\s']/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function setProgress(completed) {
    ui.progress.style.width = `${(completed / rounds.length) * 100}%`;
    ui.track.setAttribute('aria-valuenow', String(completed));
    ui.dots.forEach((dot, index) => {
      dot.classList.toggle('done', index < completed);
      dot.classList.toggle('current', index === roundIndex && index >= completed);
    });
    $('roundDots').setAttribute('aria-label', `Question ${Math.max(0, roundIndex + 1)} of ${rounds.length}`);
  }

  function say(text, state = 'talking', mood = 'Bili is speaking') {
    lastPrompt = text;
    ui.line.textContent = text;
    if (testMode) {
      setState(state, mood);
      return Promise.resolve(false);
    }
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      setState('idle', 'Read Bili’s words together');
      return Promise.resolve(false);
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = state === 'welcome' ? 'es-CO' : 'en-US';
    utterance.rate = .86;
    utterance.pitch = 1.12;
    const voicePrefix = state === 'welcome' ? 'es' : 'en';
    const voice = speechSynthesis.getVoices().find(item => item.lang.toLowerCase().startsWith(`${voicePrefix}-`))
      || speechSynthesis.getVoices().find(item => item.lang.toLowerCase().startsWith(voicePrefix));
    if (voice) utterance.voice = voice;
    ui.replay.disabled = false;
    speaking = true;
    setState(state, mood);
    return new Promise(resolve => {
      let settled = false;
      const settle = () => {
        if (settled) return;
        settled = true;
        speaking = false;
        resolve(true);
      };
      utterance.onend = settle;
      utterance.onerror = settle;
      speechSynthesis.speak(utterance);
      window.setTimeout(settle, Math.min(8000, Math.max(1800, text.length * 75)));
    });
  }

  async function askCurrentRound() {
    const round = rounds[roundIndex];
    ui.feedback.textContent = '';
    ui.feedback.classList.remove('error');
    ui.next.hidden = true;
    ui.mic.hidden = false;
    ui.mic.disabled = false;
    ui.mic.classList.remove('listening');
    ui.mic.innerHTML = '<span aria-hidden="true">🎙️</span> Your turn — say it!';
    ui.hint.textContent = `Question ${roundIndex + 1}: listen, then answer with one color.`;
    setProgress(roundIndex);
    await say(round.prompt, 'talking', 'Bili is speaking');
    if (roundIndex < rounds.length) {
      ui.mic.focus({ preventScroll: true });
      beginListening();
    }
  }

  function beginWelcome() {
    if (testMode || pageClosing) return;
    awaitingTopicChoice = true;
    say('Hola, peque. ¿Quieres aprender los colores?', 'welcome', 'Bili is greeting you').then(beginListening);
  }

  async function startGame() {
    if (speaking || recognitionPending) return;
    roundIndex = 0;
    ui.start.hidden = true;
    await askCurrentRound();
  }

  function feedbackNoEvaluation(message) {
    recognitionPending = false;
    ui.mic.disabled = false;
    ui.mic.classList.remove('listening');
    ui.mic.innerHTML = '<span aria-hidden="true">🎙️</span> Try again';
    ui.feedback.textContent = message;
    ui.feedback.classList.add('error');
    ui.hint.textContent = 'No score was recorded. You can practise with an adult or try the microphone again.';
    setState('idle', 'Bili can’t check that answer yet');
  }

  function handleTranscript(rawTranscript) {
    if (!recognitionPending || (roundIndex < 0 && !awaitingTopicChoice)) return;
    recognitionPending = false;
    ui.mic.disabled = false;
    ui.mic.classList.remove('listening');
    ui.mic.innerHTML = '<span aria-hidden="true">🎙️</span> Try again';
    const heard = normalize(rawTranscript);
    if (awaitingTopicChoice) {
      if (['si', 'yes', 'yes please', 'quiero', 'si quiero'].includes(heard)) {
        awaitingTopicChoice = false;
        roundIndex = 0;
        askCurrentRound();
      } else if (['no', 'no thanks', 'not now', 'ahora no'].includes(heard)) {
        awaitingTopicChoice = false;
        say('Está bien, peque. Aquí estaré cuando quieras aprender.', 'welcome', 'Bili will be here when you are ready');
      } else {
        say('Hola, peque. ¿Quieres aprender los colores? Puedes decir sí o no.', 'welcome', 'Bili is asking you a question').then(beginListening);
      }
      return;
    }
    const round = rounds[roundIndex];
    const correct = round.answers.some(answer => normalize(answer) === heard);
    if (correct) {
      ui.feedback.classList.remove('error');
      ui.feedback.textContent = `I heard “${rawTranscript}.” Great job!`;
      ui.hint.textContent = `Yes! The answer is ${round.color}.`;
      setProgress(roundIndex + 1);
      setState('celebrate', 'Bili is celebrating your answer');
      const praise = roundIndex === rounds.length - 1
        ? '¡Muy bien! You learned red, green, and blue!'
        : `¡Muy bien! ${round.spanish} is ${round.color}!`;
      const praiseDone = say(praise, 'celebrate', 'Bili is celebrating your answer');
      ui.mic.hidden = true;
      if (roundIndex === rounds.length - 1) {
        ui.next.textContent = 'Play again ↻';
        ui.next.hidden = false;
        ui.next.dataset.action = 'restart';
        ui.hint.textContent = 'You found all three colors. Bili is proud of you!';
      } else {
        ui.next.textContent = 'Next question →';
        ui.next.hidden = false;
        ui.next.dataset.action = 'next';
      }
      if (!testMode && roundIndex < rounds.length - 1) praiseDone.then(() => window.setTimeout(nextRound, 350));
      return;
    }
    ui.feedback.textContent = `I heard “${rawTranscript}.” Let’s try that color again.`;
    ui.feedback.classList.add('error');
    ui.hint.textContent = 'Listen once more. You can do it!';
    setState('retry', 'Bili is giving you another try');
    say(`Good try! Listen again: ${round.prompt}`, 'talking', 'Bili is helping you try again').then(beginListening);
  }

  async function beginListening() {
    if (testMode) return;
    if (speaking || recognitionPending || (!awaitingTopicChoice && (roundIndex < 0 || roundIndex >= rounds.length))) return;
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      feedbackNoEvaluation('This browser cannot record a short answer. No points were awarded.');
      return;
    }
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        video: false
      });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/ogg;codecs=opus') ? 'audio/ogg;codecs=opus' : '';
      mediaRecorder = mimeType ? new MediaRecorder(mediaStream, { mimeType }) : new MediaRecorder(mediaStream);
      audioChunks = [];
      recognitionPending = true;
      ui.feedback.textContent = '';
      ui.feedback.classList.remove('error');
      ui.mic.disabled = false;
      ui.mic.classList.add('listening');
      ui.mic.innerHTML = '<span aria-hidden="true">⏹️</span> Stop listening';
      ui.hint.textContent = 'Bili is listening. Say just the color in English; it will stop after a few seconds.';
      setState('listening', 'Bili is listening to you');
      mediaRecorder.ondataavailable = event => { if (event.data.size) audioChunks.push(event.data); };
      mediaRecorder.onerror = () => {
        stopTracks();
        feedbackNoEvaluation('I couldn’t record that answer. No points were awarded.');
      };
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
        audioChunks = [];
        stopTracks();
        if (!pageClosing) transcribeAudio(blob);
      };
      mediaRecorder.start();
      captureTimer = window.setTimeout(stopListening, 4200);
    } catch (error) {
      console.warn('Microphone capture unavailable:', error.name || error.message);
      stopTracks();
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        feedbackNoEvaluation('Microphone access is off. Ask an adult to allow it, or practise with an adult.');
      } else {
        feedbackNoEvaluation('I couldn’t start the microphone. No points were awarded.');
      }
    }
  }

  function stopTracks() {
    if (captureTimer) window.clearTimeout(captureTimer);
    captureTimer = 0;
    if (mediaStream) mediaStream.getTracks().forEach(track => track.stop());
    mediaStream = null;
  }

  function stopListening() {
    if (captureTimer) window.clearTimeout(captureTimer);
    captureTimer = 0;
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      ui.mic.disabled = true;
      ui.mic.classList.remove('listening');
      ui.mic.innerHTML = '<span aria-hidden="true">⏳</span> Checking your answer…';
      ui.hint.textContent = 'Sending this short recording securely to Deepgram for transcription…';
      mediaRecorder.stop();
    }
  }

  async function transcribeAudio(blob) {
    if (!blob.size) {
      feedbackNoEvaluation('I didn’t hear a word. Nothing was scored. Try saying the color again.');
      return;
    }
    if (blob.size > 6 * 1024 * 1024) {
      feedbackNoEvaluation('That recording was too long to check. No points were awarded. Try a short answer.');
      return;
    }
    try {
      const base = `${location.protocol}//${location.hostname}:8081`;
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 18000);
      let response;
      try {
        response = await fetch(`${base}/api/transcribe`, {
          method: 'POST',
          headers: { 'Content-Type': blob.type.split(';')[0] || 'audio/webm' },
          body: blob,
          signal: controller.signal
        });
      } finally {
        window.clearTimeout(timeout);
      }
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || `Recognition unavailable (${response.status}).`);
      const transcript = typeof result.transcript === 'string' ? result.transcript.trim() : '';
      if (!transcript) {
        feedbackNoEvaluation('I didn’t hear a clear word. Nothing was scored. Try once more.');
        say(awaitingTopicChoice
          ? 'No te escuché bien. ¿Quieres aprender los colores? Puedes decir sí o no.'
          : `I didn't hear the color clearly. ${rounds[roundIndex]?.prompt || 'Try again.'}`,
        awaitingTopicChoice ? 'welcome' : 'talking', 'Bili is asking you to try again').then(beginListening);
        return;
      }
      handleTranscript(transcript);
    } catch (error) {
      console.warn('Deepgram transcription unavailable:', error.message);
      feedbackNoEvaluation(error.name === 'AbortError'
        ? 'The answer took too long to check. No points were awarded. Try again.'
        : 'I couldn’t check that answer with Deepgram. No points were awarded; please try again.');
    }
  }

  function nextRound() {
    if (speaking || recognitionPending) return;
    if (ui.next.dataset.action === 'restart') {
      roundIndex = 0;
      setProgress(0);
      ui.next.hidden = true;
      ui.next.dataset.action = '';
      askCurrentRound();
      return;
    }
    roundIndex += 1;
    askCurrentRound();
  }

  ui.start.addEventListener('click', startGame);
  ui.mic.addEventListener('click', () => {
    if (mediaRecorder?.state === 'recording') stopListening();
    else beginListening();
  });
  ui.next.addEventListener('click', nextRound);
  ui.replay.addEventListener('click', () => { if (!speaking && lastPrompt) say(lastPrompt, 'talking', 'Bili is speaking again'); });
  ui.stage.addEventListener('click', () => {
    if (!speaking && !recognitionPending) {
      if (awaitingTopicChoice || roundIndex < 0) beginWelcome();
      else askCurrentRound();
    }
  });

  // Deterministic local-only harness for validating answer and retry paths without recording audio.
  if (testMode) {
    window.__BILI_TEST__ = {
      answer: handleTranscript,
      noEvaluation: () => feedbackNoEvaluation('Test: not evaluated'),
      state: () => ({ roundIndex, progress: ui.track.getAttribute('aria-valuenow'), score: ui.feedback.textContent })
    };
    const panel = document.createElement('div');
    panel.className = 'qa-panel';
    panel.innerHTML = '<strong>Local QA (no microphone)</strong><button type="button">Run answer and scoring checks</button><span role="status">Not run</span>';
    ui.chat = document.querySelector('.chat-column');
    ui.chat.append(panel);
    panel.querySelector('button').addEventListener('click', async () => {
      const output = panel.querySelector('[role="status"]');
      const checks = [];
      roundIndex = 0;
      recognitionPending = true;
      handleTranscript('red');
      checks.push(['Accepted exact color answer', ui.track.getAttribute('aria-valuenow') === '1']);
      await Promise.resolve(nextRound());
      await new Promise(resolve => setTimeout(resolve, 0));
      recognitionPending = true;
      handleTranscript('yellow');
      checks.push(['Wrong answer does not advance score', ui.track.getAttribute('aria-valuenow') === '1' && ui.next.hidden]);
      feedbackNoEvaluation('Test: not evaluated');
      checks.push(['Not evaluated does not advance score', ui.track.getAttribute('aria-valuenow') === '1']);
      roundIndex = 1;
      recognitionPending = true;
      handleTranscript('green');
      checks.push(['Correct retry/next answer advances', ui.track.getAttribute('aria-valuenow') === '2']);
      await Promise.resolve(nextRound());
      await new Promise(resolve => setTimeout(resolve, 0));
      recognitionPending = true;
      handleTranscript('blue');
      checks.push(['Three rounds can finish', ui.track.getAttribute('aria-valuenow') === '3' && !ui.next.hidden]);
      output.textContent = checks.map(([label, passed]) => `${passed ? '✓' : '✗'} ${label}`).join(' · ');
      output.classList.toggle('qa-failed', checks.some(([, passed]) => !passed));
    });
    window.setTimeout(() => panel.querySelector('button').click(), 0);
  }

  if ('speechSynthesis' in window) speechSynthesis.getVoices();
  setState('idle', 'Bili is ready to play');
  if (!testMode) window.setTimeout(beginWelcome, 500);
  window.addEventListener('pagehide', () => {
    pageClosing = true;
    if (mediaRecorder?.state === 'recording') mediaRecorder.stop();
    stopTracks();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }, { once: true });
})();
