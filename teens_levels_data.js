/**
 * Bilikids Teens Academy - CEFR Level-Based Curriculum Data
 * Levels: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate)
 * Consistent Exercise Types across all 4 levels:
 * 1. Reading & Textual Comprehension (21 Passages per Level)
 * 2. Use of English & Grammar Cloze (20 Drills per Level)
 * 3. Vocabulary, Phrasal Verbs & Collocation Matrix (20 Drills per Level)
 * 4. 60-Second Timed Writing Challenge
 */

function getLevelReading(levelKey, defaultTitle, defaultBadge) {
  const passages = (typeof TEENS_CRITICAL_READINGS !== 'undefined' && TEENS_CRITICAL_READINGS[levelKey])
    ? TEENS_CRITICAL_READINGS[levelKey]
    : [];
  const first = passages[0] || {};
  return {
    id: `${levelKey}_reading`,
    type: "reading",
    title: defaultTitle,
    badge: defaultBadge,
    passages: passages,
    instruction: first.instruction || "Read the passage and answer the 4 questions.",
    passage: first.passage || "",
    questions: first.questions || []
  };
}

function getLevelGrammar(levelKey, defaultTitle, defaultBadge, defaultInstruction) {
  const tests = (typeof TEENS_GRAMMAR_TESTS !== 'undefined' && TEENS_GRAMMAR_TESTS[levelKey])
    ? TEENS_GRAMMAR_TESTS[levelKey]
    : [];
  const first = tests[0] || {};
  return {
    id: `${levelKey}_grammar`,
    type: "grammar",
    title: defaultTitle,
    badge: defaultBadge,
    tests: tests,
    instruction: first.instruction || defaultInstruction || "Choose the grammatically correct option.",
    questions: first.questions || [],
    items: first.questions || []
  };
}

function getLevelVocab(levelKey, defaultTitle, defaultBadge, defaultInstruction) {
  const tests = (typeof TEENS_VOCAB_TESTS !== 'undefined' && TEENS_VOCAB_TESTS[levelKey])
    ? TEENS_VOCAB_TESTS[levelKey]
    : [];
  const first = tests[0] || {};
  return {
    id: `${levelKey}_vocab`,
    type: "vocab",
    title: defaultTitle,
    badge: defaultBadge,
    tests: tests,
    instruction: first.instruction || defaultInstruction || "Select the most accurate word for each context.",
    questions: first.questions || [],
    items: first.questions || []
  };
}

const TEENS_LEVELS_DATA = {
  a1: {
    level: "A1",
    name: "Beginner Teen Foundations",
    badge: "CEFR A1 • Ages 11–12",
    themeColor: "#10b981",
    accentBg: "#ecfdf5",
    desc: "Master essential English structures, everyday vocabulary, and simple sentences for confident daily communication.",
    exercises: {
      // 1. Reading (21 Passages Available)
      reading: getLevelReading('a1', "Critical Reading A1 (21 Passages)", "CEFR A1 • 21 Passages Available"),

      // 2. Grammar Cloze (20 Tests Available)
      grammar: getLevelGrammar(
        'a1',
        "Use of English A1 (20 Tests)",
        "CEFR A1 • 20 Tests Available",
        "Select the correct option to complete each sentence with accurate A1 grammar."
      ),

      // 3. Vocabulary Matrix (20 Tests Available)
      vocab: getLevelVocab(
        'a1',
        "Vocabulary Matrix A1 (20 Tests)",
        "CEFR A1 • 20 Tests Available",
        "Select the most accurate word to match the definition or context."
      ),

      // 4. Timed Writing
      writing: {
        id: "a1_writing",
        type: "writing",
        title: "60-Second Sprint: Introduce Your Typical Day",
        badge: "Timed Fluency • A1",
        instruction: "You have 60 seconds. Write at least 25 words describing what you do on a normal school day.",
        prompt: "Write about: What time you wake up, what you eat for breakfast, and what your favorite class at school is.",
        minWords: 25,
        targetVocabulary: ["wake up", "breakfast", "school", "because", "like"],
        sampleModel: "I usually wake up at 6:30 AM. For breakfast, I eat cereal and drink orange juice. My favorite class is Art because we draw pictures and listen to cheerful music with my best friends."
      }
    }
  },

  a2: {
    level: "A2",
    name: "Elementary Everyday Fluency",
    badge: "CEFR A2 • Ages 12–14",
    themeColor: "#0284c7",
    accentBg: "#f0f9ff",
    desc: "Build descriptive paragraphs, master past narratives, comparative structures, and real-life conversational exchanges.",
    exercises: {
      // 1. Reading (21 Passages Available)
      reading: getLevelReading('a2', "Critical Reading A2 (21 Passages)", "CEFR A2 • 21 Passages Available"),

      // 2. Grammar Cloze (20 Tests Available)
      grammar: getLevelGrammar(
        'a2',
        "Use of English A2 (20 Tests)",
        "CEFR A2 • 20 Tests Available",
        "Choose the grammatically correct option to complete the sentences."
      ),

      // 3. Vocabulary Matrix (20 Tests Available)
      vocab: getLevelVocab(
        'a2',
        "Vocabulary Matrix A2 (20 Tests)",
        "CEFR A2 • 20 Tests Available",
        "Identify the correct phrasal verb or collocation for each sentence."
      ),

      // 4. Timed Writing
      writing: {
        id: "a2_writing",
        type: "writing",
        title: "60-Second Sprint: A Memorable Weekend Event",
        badge: "Narrative Sprint • A2",
        instruction: "You have 60 seconds. Write at least 35 words describing a memorable trip or weekend activity.",
        prompt: "Describe: Where did you go, who did you go with, and what was the most exciting thing you did?",
        minWords: 35,
        targetVocabulary: ["went", "because", "exciting", "with my", "enjoyed"],
        sampleModel: "Last weekend I went to the national park with my cousins. The weather was sunny and warm. We hiked up a scenic mountain trail and had a picnic near a waterfall. I really enjoyed taking pictures because the view was incredible."
      }
    }
  },

  b1: {
    level: "B1",
    name: "Intermediate Academic & Saber 9°",
    badge: "CEFR B1 • Ages 13–15",
    themeColor: "#6366f1",
    accentBg: "#eef2ff",
    desc: "Conquer official Colombian Saber 9° passages, modal deductions, conditional clauses, and cohesive academic arguments.",
    exercises: {
      // 1. Reading (21 Passages Available)
      reading: getLevelReading('b1', "Critical Reading B1 • Saber 9° (21 Passages)", "ICFES Saber 9° • 21 Passages Available"),

      // 2. Grammar Cloze (20 Tests Available)
      grammar: getLevelGrammar(
        'b1',
        "Use of English B1 • Saber 9° (20 Tests)",
        "ICFES Saber 9° • 20 Tests Available",
        "Choose the grammatical option that best completes the complex sentence."
      ),

      // 3. Vocabulary Matrix (20 Tests Available)
      vocab: getLevelVocab(
        'b1',
        "Academic Vocabulary B1 (20 Tests)",
        "ICFES Saber 9° • 20 Tests Available",
        "Select the most cohesive academic connector or collocation."
      ),

      // 4. Timed Writing
      writing: {
        id: "b1_writing",
        type: "writing",
        title: "60-Second Sprint: Persuasive Argumentation",
        badge: "Timed Debate • B1",
        instruction: "You have 60 seconds. Formulate a persuasive paragraph of at least 50 words on the prompt.",
        prompt: "Prompt: Should secondary schools replace printed textbooks with digital tablets completely? State your stance clearly.",
        minWords: 50,
        targetVocabulary: ["in my opinion", "furthermore", "however", "consequently", "benefits"],
        sampleModel: "In my opinion, replacing printed textbooks with digital tablets offers undeniable educational benefits. Tablets provide updated interactive resources and reduce heavy backpacks. Furthermore, digital notes can be organized efficiently. However, schools must ensure equitable device access for all students. Consequently, a blended learning approach remains the most effective policy."
      }
    }
  },

  b2: {
    level: "B2",
    name: "Advanced Saber 11° & Cambridge FCE",
    badge: "CEFR B2 • Ages 14–16",
    themeColor: "#8b5cf6",
    accentBg: "#faf5ff",
    desc: "Rigorous preparation for Colombian Saber 11° (ICFES) and Cambridge B2 First: lexical precision, syntactic inversion, and critical discourse.",
    exercises: {
      // 1. Reading (21 Passages Available)
      reading: getLevelReading('b2', "Critical Reading B2 • Saber 11° (21 Passages)", "Cambridge B2 / Saber 11° • 21 Passages Available"),

      // 2. Grammar Cloze (20 Tests Available)
      grammar: getLevelGrammar(
        'b2',
        "Cambridge B2 First • Use of English (20 Tests)",
        "Cambridge FCE / Saber 11° • 20 Tests Available",
        "Select the option that adheres to advanced Cambridge B2 syntactic rules."
      ),

      // 3. Vocabulary Matrix (20 Tests Available)
      vocab: getLevelVocab(
        'b2',
        "Advanced Vocabulary & Collocations B2 (20 Tests)",
        "Cambridge FCE / Saber 11° • 20 Tests Available",
        "Complete each sentence with the most precise B2 word or derivative."
      ),

      // 4. Timed Writing
      writing: {
        id: "b2_writing",
        type: "writing",
        title: "60-Second Sprint: Argumentative Thesis & Synthesis",
        badge: "Academic Synthesis • B2",
        instruction: "You have 60 seconds. Formulate a structured thesis and synthesis of at least 70 words.",
        prompt: "Prompt: Can generative AI tools enhance critical thinking in teenagers, or do they undermine intellectual independence? Synthesize both perspectives.",
        minWords: 70,
        targetVocabulary: ["while proponents argue", "on the other hand", "consequently", "paradoxically", "fundamental"],
        sampleModel: "While proponents argue that generative AI tools accelerate academic inquiry by personalizing complex conceptual explanations, skeptics contend that cognitive dependency undermines intellectual independence. Paradoxically, the solution lies not in prohibition, but in pedagogical restructuring. Consequently, secondary educators must emphasize evaluating algorithmic veracity rather than mere factual recall. Developing disciplined critical analysis remains the fundamental prerequisite for ethical technological mastery in contemporary society."
      }
    }
  }
};

if (typeof window !== "undefined") {
  window.TEENS_LEVELS_DATA = TEENS_LEVELS_DATA;
}
if (typeof globalThis !== "undefined") {
  globalThis.TEENS_LEVELS_DATA = TEENS_LEVELS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TEENS_LEVELS_DATA };
}
