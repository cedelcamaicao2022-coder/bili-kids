/**
 * Bilikids Teens Academy - Interactive Language Lab
 * 12 Immersive English B1-B2 Activities:
 * 1. Debate & Argument Builder
 * 2. Phrasal Verb Particle Matcher
 * 3. Academic Collocation Matrix
 * 4. Register & Tone Shifter (Formal vs Informal)
 * 5. Grammar Auction & Error Hunter
 * 6. Sentence Inversion Builder
 * 7. Idiom Detective & Metaphor Decoder
 * 8. Summary & Signpost Connector Flow
 * 9. Speed Synonyms & Lexicon Duel (60s)
 * 10. Connected Speech & Dictation Lab
 * 11. Mixed Conditionals Dilemma Solver
 * 12. Passive Reporting & Academic Hedging
 */

const TEENS_ACTIVITIES_DATA = [
  // 1. Debate & Argument Builder
  {
    id: 1,
    title: "Debate & Argument Builder",
    badge: "Discourse Logic • B2",
    instruction: "Reconstruct a cohesive argumentative paragraph. Arrange the 4 discourse components into the most persuasive logical order: 1. Thesis Claim ➔ 2. Concrete Evidence ➔ 3. Counter-Argument ➔ 4. Conclusive Synthesis.",
    components: [
      { id: "c1", text: "Proponents argue that transitioning to a four-day workweek significantly enhances employee well-being and productivity.", role: "1. Main Claim / Thesis" },
      { id: "c2", text: "For instance, recent corporate trials in the UK demonstrated a 35% decline in employee burnout alongside stable revenues.", role: "2. Empirical Evidence" },
      { id: "c3", text: "Granted, skeptics maintain that customer-facing industries may struggle to coordinate operational schedules without increasing payroll costs.", role: "3. Counter-Argument Rebuttal" },
      { id: "c4", text: "Consequently, while implementation strategies must adapt by sector, the broader paradigm shift toward workplace flexibility remains inevitable.", role: "4. Conclusive Synthesis" }
    ],
    correctOrder: ["c1", "c2", "c3", "c4"],
    explanation: "Standard academic discourse structure begins with a clear thesis, substantiates with empirical data, concedes/refutes the opposing view, and culminates in a forward-looking conclusion."
  },

  // 2. Phrasal Verb Particle Matcher
  {
    id: 2,
    title: "Phrasal Verb Particle Duel",
    badge: "Lexical Precision • B2",
    instruction: "Select the correct prepositional particle for each sentence to complete the idiomatic phrasal verb.",
    items: [
      { sentence: "The concert was called _____ at the eleventh hour due to torrential rain.", particle: "off", options: ["off", "out", "down", "away"], explanation: "'Call off' means to cancel an event." },
      { sentence: "While renovating the attic, Liam came _____ a bundle of century-old letters.", particle: "across", options: ["across", "into", "over", "by"], explanation: "'Come across' means to discover by chance." },
      { sentence: "The research committee spent months trying to figure _____ the root cause of the anomaly.", particle: "out", options: ["out", "up", "through", "on"], explanation: "'Figure out' means to solve or understand a complex problem." },
      { sentence: "I genuinely respect teachers who refuse to put _____ with disrespectful behavior.", particle: "up with", options: ["up with", "down on", "off with", "in for"], explanation: "'Put up with' means to tolerate an unpleasant situation." },
      { sentence: "After intense negotiations, the sponsor suddenly backed _____ of the international agreement.", particle: "out", options: ["out", "down", "off", "away"], explanation: "'Back out of' means to withdraw from a prior commitment." }
    ]
  },

  // 3. Academic Collocation Matrix
  {
    id: 3,
    title: "Academic Collocation Matrix",
    badge: "Lexical Chunks • B2",
    instruction: "Select the verb or modifier that forms a natural, native-like academic collocation.",
    items: [
      { prompt: "The United Nations delegates finally managed to _____ a consensus on climate funding.", correct: "reach", options: ["reach", "make", "do", "gain"], explanation: "We say 'reach a consensus' or 'arrive at a consensus'." },
      { prompt: "Chronic sleep deprivation can _____ a heavy toll on cognitive performance.", correct: "take", options: ["take", "give", "bring", "make"], explanation: "Idiomatic collocation: 'take a toll on' something." },
      { prompt: "The latest archaeological discovery has _____ fresh light on ancient migration patterns.", correct: "shed", options: ["shed", "thrown", "cast", "drawn"], explanation: "Fixed idiom: 'shed light on' (or 'cast light on'). 'Shed' is the most academic." },
      { prompt: "Invasive predator species _____ a grave threat to local marine biodiversity.", correct: "pose", options: ["pose", "set", "make", "render"], explanation: "Collocation: 'pose a threat / danger to'." },
      { prompt: "Sociologists are actively _____ research into social media usage among adolescents.", correct: "conducting", options: ["conducting", "making", "practicing", "operating"], explanation: "We 'conduct research' or 'carry out research', never 'make research'." }
    ]
  },

  // 4. Register & Tone Shifter (Formal vs Informal)
  {
    id: 4,
    title: "Register & Tone Shifter",
    badge: "Stylistic Competence • B2",
    instruction: "Transform casual, informal everyday speech into formal, academic or professional English.",
    items: [
      {
        informal: "Hey, gotta let u know I can't come to class cuz I'm super sick.",
        options: [
          "I regret to inform you that I will be unable to attend today's session due to illness.",
          "I'm telling you right now that my health is bad so see you whenever.",
          "Sorry mate, feeling terrible today and won't make it."
        ],
        correct: 0,
        explanation: "Uses polite formula 'I regret to inform you' and formal nominalization."
      },
      {
        informal: "That business idea is totally crazy and it's definitely gonna flop.",
        options: [
          "The proposed commercial strategy appears unfeasible under existing market constraints.",
          "That idea is super nuts and nobody will ever buy anything from it.",
          "It's a really bad plan that will lose tons of cash."
        ],
        correct: 0,
        explanation: "Replaces hyperbole ('crazy', 'flop') with objective academic evaluation ('unfeasible', 'market constraints')."
      },
      {
        informal: "Can you send me the doc ASAP? Thanks a lot.",
        options: [
          "I would be extremely grateful if you could forward the relevant document at your earliest convenience.",
          "Gimme the document right now, thank you so much.",
          "Send the paper immediately please."
        ],
        correct: 0,
        explanation: "'At your earliest convenience' is the standard polite business equivalent of 'ASAP'."
      }
    ]
  },

  // 5. Grammar Auction & Error Hunter
  {
    id: 5,
    title: "Grammar Auction & Error Hunter",
    badge: "Syntax Accuracy • B2",
    instruction: "Carefully inspect each sentence. Identify whether it is grammatically correct or contains a subtle B2 syntax error.",
    items: [
      {
        sentence: "Despite of the heavy snowstorm, the high-speed train arrived punctually.",
        hasError: true,
        correction: "Despite the heavy snowstorm... ('Despite' takes no preposition; 'in spite of' requires 'of').",
        explanation: "A classic error: 'despite' is never followed by 'of'."
      },
      {
        sentence: "Hardly had we entered the lecture auditorium when the presentation commenced.",
        hasError: false,
        correction: "Correct! Negative adverbial inversion 'Hardly had + subject + past participle + when...'",
        explanation: "Exemplary B2 inverted structure."
      },
      {
        sentence: "If she would have studied harder last semester, she would have passed the exam.",
        hasError: true,
        correction: "If she had studied harder... (Never use 'would have' in the if-clause of a 3rd conditional).",
        explanation: "Third conditional condition requires past perfect in the if-clause."
      },
      {
        sentence: "The university offered valuable advices regarding international scholarship applications.",
        hasError: true,
        correction: "The university offered valuable advice... ('Advice' is strictly uncountable).",
        explanation: "'Advice' is an uncountable noun in English; use 'pieces of advice' for plurals."
      }
    ]
  },

  // 6. Sentence Inversion Builder
  {
    id: 6,
    title: "Emphatic Inversion Builder",
    badge: "Advanced Syntax • B2",
    instruction: "Build dramatic emphatic inverted sentences by selecting the correct inverted sequence.",
    items: [
      {
        prompt: "Create an inversion starting with 'Not only...'",
        normal: "She passed the bar examination with honors and she also won the national moot court tournament.",
        options: [
          "Not only did she pass the bar examination with honors, but she also won the tournament.",
          "Not only she passed the bar examination, but also she won the tournament.",
          "Not only was she passing the bar examination, and she also won the tournament."
        ],
        correct: 0,
        explanation: "'Not only' at the start triggers auxiliary inversion: 'did she pass'."
      },
      {
        prompt: "Create an inversion starting with 'Under no circumstances...'",
        normal: "Students must not leave the examination hall before the bell rings.",
        options: [
          "Under no circumstances should students leave the examination hall before the bell rings.",
          "Under no circumstances students must leave the examination hall.",
          "Under no circumstances students are allowed to leave."
        ],
        correct: 0,
        explanation: "Negative fronting requires modal inversion: 'Under no circumstances should students leave'."
      },
      {
        prompt: "Create an inversion starting with 'Seldom...'",
        normal: "We have rarely witnessed such breathtaking technological breakthroughs in one decade.",
        options: [
          "Seldom have we witnessed such breathtaking technological breakthroughs in one decade.",
          "Seldom we have witnessed such breakthroughs in one decade.",
          "Seldom did we witnessed such breakthroughs in one decade."
        ],
        correct: 0,
        explanation: "Frequency inversion: 'Seldom have we witnessed'."
      }
    ]
  },

  // 7. Idiom Detective & Metaphor Decoder
  {
    id: 7,
    title: "Idiom Detective & Metaphors",
    badge: "Idiomatic Mastery • B2",
    instruction: "Match each real-world dilemma with the most fitting English idiom.",
    items: [
      {
        scenario: "Carlos had been procrastinating his dental surgery for six months, but knowing the infection could worsen, he finally gathered his courage and scheduled the appointment.",
        options: ["Bite the bullet", "Burn the midnight oil", "Bark up the wrong tree", "Cry over spilled milk"],
        correct: 0,
        explanation: "'To bite the bullet' means to face a difficult or painful situation with resolute bravery."
      },
      {
        scenario: "Losing that entry-level retail job seemed devastating at first, but it pushed Elena to complete her web design degree, leading to her dream career.",
        options: ["A blessing in disguise", "Throwing in the towel", "The tip of the iceberg", "Beating around the bush"],
        correct: 0,
        explanation: "'A blessing in disguise' describes an apparent misfortune that yields advantageous consequences later."
      },
      {
        scenario: "With the international debate championship only forty-eight hours away, the entire team stayed awake until 4:00 AM refining their rebuttals.",
        options: ["Burn the midnight oil", "Let the cat out of the bag", "Cut corners", "Hit the nail on the head"],
        correct: 0,
        explanation: "'To burn the midnight oil' means to work or study late into the night."
      }
    ]
  },

  // 8. Summary & Signpost Connector Flow
  {
    id: 8,
    title: "Signpost Connector Flow",
    badge: "Text Cohesion • B2",
    instruction: "Select the appropriate logical transition word to maintain coherent argumentative flow across paragraphs.",
    items: [
      {
        context: "Renewable energy adoption has expanded exponentially across European nations. _____, developing economies continue to rely heavily on fossil fuels due to infrastructure financing deficits.",
        correct: "In stark contrast",
        options: ["In stark contrast", "Furthermore", "Likewise", "As a result"],
        explanation: "'In stark contrast' introduces a sharp, antithetical comparison between two geographic regions."
      },
      {
        context: "The city council implemented dedicated bicycle superhighways downtown. _____, carbon emissions from daily rush-hour commuting dropped by 18% within six months.",
        correct: "Consequently",
        options: ["Consequently", "Nevertheless", "Whereas", "On the contrary"],
        explanation: "'Consequently' denotes a direct cause-and-effect relationship."
      },
      {
        context: "The experimental pharmaceutical drug produced promising lab results. _____, clinical trials revealed unanticipated side effects in elderly demographics.",
        correct: "However",
        options: ["However", "In addition", "Therefore", "Similarly"],
        explanation: "'However' introduces a crucial limitation or reservation to previous positive data."
      }
    ]
  },

  // 9. Speed Synonyms & Lexicon Duel (60s)
  {
    id: 9,
    title: "Speed Synonyms Duel",
    badge: "Vocabulary Mastery • B2/C1",
    instruction: "Match each advanced academic adjective with its most accurate definition or synonym.",
    items: [
      { word: "UBIQUITOUS", options: ["Present or found everywhere", "Extremely dangerous", "Mysterious and ancient", "Temporary"], correct: 0, explanation: "'Ubiquitous' means omnipresent (e.g. smartphones are now ubiquitous)." },
      { word: "DETRIMENTAL", options: ["Tending to cause harm or damage", "Beneficial to health", "Extremely expensive", "Easy to understand"], correct: 0, explanation: "'Detrimental' means damaging or harmful." },
      { word: "RESILIENT", options: ["Able to recover quickly from difficulties", "Fragile and easily shattered", "Hesitant to make decisions", "Rigid and unyielding"], correct: 0, explanation: "'Resilient' denotes mental or physical toughness and recovery." },
      { word: "OBSOLETE", options: ["No longer produced or used; out of date", "Highly fashionable", "Extremely powerful", "Essential for life"], correct: 0, explanation: "'Obsolete' means outdated (e.g. floppy disks are obsolete)." },
      { word: "PLAUSIBLE", options: ["Seeming reasonable, probable or believable", "Totally impossible", "Completely imaginary", "Shocking and terrifying"], correct: 0, explanation: "'Plausible' means credible and convincing." }
    ]
  },

  // 10. Connected Speech & Dictation Lab
  {
    id: 10,
    title: "Connected Speech & Phonetics Lab",
    badge: "Listening & Pronunciation • B2",
    instruction: "Identify what native speakers actually say when words blend together in natural connected speech (elision, linking, weak forms).",
    items: [
      {
        audioPhrase: "You should've told me earlier!",
        transcriptionOptions: [
          "You should have told me earlier (reduced to /ʃʊdəv/)",
          "You should of told me earlier (grammatically invalid)",
          "You should told me earlier"
        ],
        correct: 0,
        explanation: "'Should have' contracts to 'should've' (pronounced /ʃʊdəv/), frequently misspelled by non-natives as 'should of'."
      },
      {
        audioPhrase: "What are you going to do about it?",
        transcriptionOptions: [
          "Whatcha gonna do about it? (assimilation /wətʃə ɡənə/)",
          "What you go to do about it?",
          "What will you gonna do about it?"
        ],
        correct: 0,
        explanation: "In fast conversational English, 'What are you going to' assimilates to /wətʃə ɡənə/."
      },
      {
        audioPhrase: "I might as well finish the report now.",
        transcriptionOptions: [
          "I might as well finish the report now (meaning: no reason not to)",
          "I must as well finish the report now",
          "I maybe as well finish the report now"
        ],
        correct: 0,
        explanation: "'Might as well' is a modal idiom indicating that doing something is the most sensible course."
      }
    ]
  },

  // 11. Mixed Conditionals Dilemma Solver
  {
    id: 11,
    title: "Mixed Conditionals Solver",
    badge: "Hypothetical Syntax • B2",
    instruction: "Select the correct mixed conditional structure connecting a past event with a present outcome (Past ➔ Present).",
    items: [
      {
        context: "Situation: Sofia forgot to set her alarm last night (past). As a direct result, she is running late for her university exam right now (present).",
        options: [
          "If Sofia had set her alarm last night, she wouldn't be running late right now.",
          "If Sofia set her alarm last night, she wouldn't have run late right now.",
          "If Sofia would have set her alarm, she wouldn't be running late."
        ],
        correct: 0,
        explanation: "Mixed conditional type 3-2: 'If + past perfect (had set), would + base verb (wouldn't be) + right now'."
      },
      {
        context: "Situation: Julian didn't accept the overseas scholarship three years ago (past). Now he is not working as an international engineer (present).",
        options: [
          "If Julian had accepted the scholarship, he would be working as an international engineer today.",
          "If Julian accepted the scholarship, he would have worked today.",
          "If Julian had accepted the scholarship, he would work yesterday."
        ],
        correct: 0,
        explanation: "Hypothetical past condition ('had accepted') yielding a present state ('would be working today')."
      }
    ]
  },

  // 12. Passive Reporting & Academic Hedging
  {
    id: 12,
    title: "Passive Reporting & Hedging",
    badge: "Academic Writing • B2",
    instruction: "Transform active claims into objective academic passive reporting structures (Hedging).",
    items: [
      {
        activeClaim: "Historians believe that ancient Romans constructed this aqueduct in the second century.",
        options: [
          "This aqueduct is believed to have been constructed in the second century.",
          "This aqueduct is believing to be constructed in the second century.",
          "It is believe that Romans had constructed this aqueduct."
        ],
        correct: 0,
        explanation: "Subject passive reporting: 'Subject + is believed + to have been + past participle'."
      },
      {
        activeClaim: "Biologists claim that deep-sea corals withstand immense hydrostatic pressures.",
        options: [
          "Deep-sea corals are claimed to withstand immense hydrostatic pressures.",
          "Deep-sea corals claim to have withstood immense pressures.",
          "It claims that corals are withstanding pressures."
        ],
        correct: 0,
        explanation: "Passive with present infinitive: 'are claimed to withstand'."
      }
    ]
  }
];

class TeensInteractiveLab {
  constructor() {
    this.activities = TEENS_ACTIVITIES_DATA;
    this.currentActivityIndex = 0;
    this.scores = {};
    this.audioCtx = null;
    this.soundEnabled = true;
  }

  init() {
    this.setupAudio();
    this.renderActivityPills();
    this.loadActivity(0);
  }

  setupAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    } catch (e) {
      console.warn("Audio Context not available", e);
    }
  }

  playTone(freq, duration, type = "sine") {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === "suspended") this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playSuccess() {
    [523.25, 659.25, 783.99].forEach((f, i) => setTimeout(() => this.playTone(f, 0.12, 'triangle'), i * 80));
  }

  playError() {
    this.playTone(220, 0.18, 'sawtooth');
  }

  renderActivityPills() {
    const container = document.getElementById('activityPillsContainer');
    if (!container) return;

    container.innerHTML = this.activities.map((act, i) => `
      <button class="lab-pill-btn ${i === this.currentActivityIndex ? 'active' : ''}" data-index="${i}">
        <span class="pill-act-num">#${act.id}</span>
        <span class="pill-act-title">${act.title}</span>
      </button>
    `).join('');

    container.querySelectorAll('.lab-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        this.loadActivity(idx);
      });
    });
  }

  loadActivity(index) {
    this.currentActivityIndex = index;
    const act = this.activities[index];

    // Update pill highlight
    const pills = document.querySelectorAll('.lab-pill-btn');
    pills.forEach((p, i) => p.classList.toggle('active', i === index));

    // Update header
    document.getElementById('labActivityTitle').textContent = act.title;
    document.getElementById('labActivityBadge').textContent = act.badge;
    document.getElementById('labActivityInstructions').textContent = act.instruction;

    const body = document.getElementById('labExerciseWorkspace');
    if (!body) return;

    if (act.id === 1) {
      this.renderDebateBuilder(body, act);
    } else {
      this.renderMultipleChoiceExercise(body, act);
    }
  }

  // 1. DEBATE BUILDER (Drag / Step Arranger)
  renderDebateBuilder(container, act) {
    let currentOrder = [...act.components].sort(() => Math.random() - 0.5);

    const renderList = () => {
      const cardsHtml = currentOrder.map((c, i) => `
        <div class="debate-block-card" data-cid="${c.id}">
          <div class="debate-card-header">
            <span class="step-badge">Position ${i + 1}</span>
            <div class="step-buttons">
              <button class="btn-step-move up" data-idx="${i}" ${i === 0 ? 'disabled' : ''}>▲</button>
              <button class="btn-step-move down" data-idx="${i}" ${i === currentOrder.length - 1 ? 'disabled' : ''}>▼</button>
            </div>
          </div>
          <p class="debate-card-text">${c.text}</p>
        </div>
      `).join('');

      container.innerHTML = `
        <div class="debate-builder-workspace">
          <p style="color: #64748b; font-size: 0.92rem; margin-bottom: 1rem;">
            Use the ▲ and ▼ arrows to position the discourse blocks into standard logical order.
          </p>
          <div class="debate-cards-list">
            ${cardsHtml}
          </div>

          <div style="margin-top: 1.5rem; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <button id="btnCheckDebate" class="lab-primary-btn">
              ✓ Verify Argument Structure
            </button>
            <div id="debateFeedbackBox" class="lab-feedback-box" style="display:none;"></div>
          </div>
        </div>
      `;

      // Movement handlers
      container.querySelectorAll('.btn-step-move.up').forEach(b => {
        b.addEventListener('click', () => {
          const idx = parseInt(b.dataset.idx, 10);
          if (idx > 0) {
            const temp = currentOrder[idx];
            currentOrder[idx] = currentOrder[idx - 1];
            currentOrder[idx - 1] = temp;
            renderList();
          }
        });
      });

      container.querySelectorAll('.btn-step-move.down').forEach(b => {
        b.addEventListener('click', () => {
          const idx = parseInt(b.dataset.idx, 10);
          if (idx < currentOrder.length - 1) {
            const temp = currentOrder[idx];
            currentOrder[idx] = currentOrder[idx + 1];
            currentOrder[idx + 1] = temp;
            renderList();
          }
        });
      });

      document.getElementById('btnCheckDebate').addEventListener('click', () => {
        const orderIds = currentOrder.map(c => c.id);
        const isRight = JSON.stringify(orderIds) === JSON.stringify(act.correctOrder);
        const fbBox = document.getElementById('debateFeedbackBox');
        fbBox.style.display = 'block';

        if (isRight) {
          this.playSuccess();
          fbBox.className = 'lab-feedback-box good';
          fbBox.innerHTML = `<strong>🎉 Outstanding Logic!</strong> ${act.explanation}`;
        } else {
          this.playError();
          fbBox.className = 'lab-feedback-box bad';
          fbBox.innerHTML = `<strong>Keep Trying:</strong> The discourse flow is not optimal yet. Remember: Main Thesis ➔ Concrete Evidence ➔ Counter-Argument ➔ Conclusive Synthesis.`;
        }
      });
    };

    renderList();
  }

  // GENERAL MULTI-ITEM EXERCISE
  renderMultipleChoiceExercise(container, act) {
    const items = act.items;
    let selectedAnswers = {};

    const itemsHtml = items.map((item, idx) => {
      let promptText = item.prompt || item.sentence || item.informal || item.activeClaim || item.context || item.word || item.scenario;
      let promptPrefix = "";
      if (item.audioPhrase) {
        promptText = `🔊 Audio Phrase: "${item.audioPhrase}"`;
      }
      if (item.word) {
        promptPrefix = `<span style="font-size: 1.25rem; font-weight: 800; color: #4338ca; letter-spacing: 0.05em;">${item.word}</span>`;
        promptText = "";
      }

      let options = item.options;
      if (item.hasError !== undefined) {
        options = ["Grammatically Correct", "Contains a Syntax Error"];
      }

      const optionsHtml = options.map((opt, optIdx) => `
        <button type="button" class="lab-item-option-btn" data-item="${idx}" data-opt="${optIdx}">
          <span class="lab-opt-bullet">${['A', 'B', 'C', 'D'][optIdx]}</span>
          <span class="lab-opt-text">${opt}</span>
        </button>
      `).join('');

      return `
        <div class="lab-exercise-card-item" id="item-card-${idx}">
          <div class="lab-item-header">
            <span class="lab-item-num">Challenge ${idx + 1}</span>
          </div>
          ${promptPrefix}
          ${promptText ? `<p class="lab-item-prompt">${promptText}</p>` : ''}
          <div class="lab-item-options-grid">
            ${optionsHtml}
          </div>
          <div class="lab-item-expl" id="expl-${idx}" style="display:none;"></div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="lab-items-stack">
        ${itemsHtml}
        <div style="margin-top: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <button id="btnCheckAllItems" class="lab-primary-btn">
            ✓ Check All Answers
          </button>
          <div id="exerciseSummaryScore" class="lab-summary-score" style="display:none;"></div>
        </div>
      </div>
    `;

    // Option selection
    container.querySelectorAll('.lab-item-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemIdx = parseInt(btn.dataset.item, 10);
        const optIdx = parseInt(btn.dataset.opt, 10);
        selectedAnswers[itemIdx] = optIdx;

        const card = document.getElementById(`item-card-${itemIdx}`);
        card.querySelectorAll('.lab-item-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.playTone(550, 0.06, 'sine');
      });
    });

    document.getElementById('btnCheckAllItems').addEventListener('click', () => {
      let correct = 0;
      items.forEach((item, idx) => {
        const userChoice = selectedAnswers[idx];
        const card = document.getElementById(`item-card-${idx}`);
        const explEl = document.getElementById(`expl-${idx}`);
        let isCorrect = false;

        if (item.hasError !== undefined) {
          // 0: Correct, 1: Has error
          const userSaysHasError = userChoice === 1;
          isCorrect = userSaysHasError === item.hasError;
        } else if (item.correct !== undefined) {
          if (typeof item.correct === 'number') {
            isCorrect = userChoice === item.correct;
          } else if (typeof item.correct === 'string') {
            isCorrect = item.options[userChoice] === item.correct;
          }
        } else if (item.particle) {
          isCorrect = item.options[userChoice] === item.particle;
        }

        if (isCorrect) {
          correct++;
          card.classList.add('correct');
          card.classList.remove('incorrect');
        } else {
          card.classList.add('incorrect');
          card.classList.remove('correct');
        }

        explEl.style.display = 'block';
        explEl.innerHTML = `
          <div class="expl-banner ${isCorrect ? 'good' : 'bad'}">
            <strong>${isCorrect ? '✓ Correct!' : '✗ Review:'}</strong> 
            ${item.correction ? `<p style="margin:2px 0 4px; font-weight:600;">${item.correction}</p>` : ''}
            <p style="margin:0; color:#334155;">${item.explanation}</p>
          </div>
        `;
      });

      const scoreEl = document.getElementById('exerciseSummaryScore');
      scoreEl.style.display = 'inline-block';
      scoreEl.innerHTML = `Score: <strong>${correct} / ${items.length}</strong> (${Math.round((correct/items.length)*100)}%)`;

      if (correct === items.length) this.playSuccess();
      else this.playError();
    });
  }
}
