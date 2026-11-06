/**
 * Bilikids Teens Academy - CEFR Level-Based Curriculum Data
 * Levels: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate)
 * Consistent Exercise Types across all 4 levels:
 * 1. Reading & Textual Comprehension
 * 2. Use of English & Grammar Cloze
 * 3. Vocabulary, Phrasal Verbs & Collocation Matrix
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

      // 2. Grammar Cloze
      grammar: {
        id: "a1_grammar",
        type: "grammar",
        title: "Use of English: Daily Routine & Basic Syntax",
        badge: "Grammar & Sentence Flow • A1",
        instruction: "Choose the correct word to complete each sentence with accurate A1 grammar.",
        items: [
          {
            sentence: "Sofia _____ to music on her headphones every morning on the bus.",
            options: ["listen", "listens", "listening", "is listen"],
            correct: 1,
            explanation: "Third-person singular in Present Simple requires adding '-s' ('Sofia listens')."
          },
          {
            sentence: "My brother and I _____ like waking up early on Saturdays.",
            options: ["doesn't", "aren't", "don't", "no"],
            correct: 2,
            explanation: "Plural subject ('My brother and I' = we) takes 'don't' in Present Simple negation."
          },
          {
            sentence: "We usually have our English class _____ 9:00 AM on Tuesdays.",
            options: ["in", "on", "at", "to"],
            correct: 2,
            explanation: "We use the preposition 'at' for specific clock times ('at 9:00 AM')."
          },
          {
            sentence: "Can you help _____ with this difficult math exercise?",
            options: ["me", "I", "my", "mine"],
            correct: 0,
            explanation: "'Me' is the correct object pronoun following the transitive verb 'help'."
          }
        ]
      },

      // 3. Vocabulary Matrix
      vocab: {
        id: "a1_vocab",
        type: "vocab",
        title: "Vocabulary Matrix: School & Everyday Life",
        badge: "Lexical Pairs • A1",
        instruction: "Select the most accurate word to match the definition or context.",
        items: [
          {
            sentence: "A room in a school where students can borrow and read books silently is called a _____.",
            options: ["cafeteria", "gymnasium", "library", "corridor"],
            correct: 2,
            explanation: "A 'library' is the dedicated room for reading and borrowing books."
          },
          {
            sentence: "When students receive a short rest between morning classes, it is known as _____.",
            options: ["recess", "homework", "exam", "grade"],
            correct: 0,
            explanation: "'Recess' or 'break' is the rest period between school lessons."
          },
          {
            sentence: "Diego loves painting and drawing; his favorite school subject is definitely _____.",
            options: ["Biology", "Art", "Geography", "History"],
            correct: 1,
            explanation: "'Art' is the academic subject involving painting, drawing, and sculpture."
          },
          {
            sentence: "Before going to sleep, I always _____ off the light in my bedroom.",
            options: ["turn", "make", "give", "take"],
            correct: 0,
            explanation: "'Turn off' is the basic phrasal verb meaning to deactivate an electrical light."
          }
        ]
      },

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
    name: "Elementary Teen Fluency",
    badge: "CEFR A2 • Ages 12–13",
    themeColor: "#0284c7",
    accentBg: "#f0f9ff",
    desc: "Build descriptive paragraphs, master past narratives, comparative structures, and real-life conversational exchanges.",
    exercises: {
      // 1. Reading (21 Passages Available)
      reading: getLevelReading('a2', "Critical Reading A2 (21 Passages)", "CEFR A2 • 21 Passages Available"),

      // 2. Grammar Cloze
      grammar: {
        id: "a2_grammar",
        type: "grammar",
        title: "Use of English: Past Narratives & Comparatives",
        badge: "Grammar & Connectors • A2",
        instruction: "Choose the grammatically correct option to complete the sentences.",
        items: [
          {
            sentence: "While we _____ for the school bus yesterday, it suddenly started to rain heavily.",
            options: ["waited", "were waiting", "are waiting", "wait"],
            correct: 1,
            explanation: "We use the Past Continuous ('were waiting') for an ongoing background action interrupted by Past Simple ('started')."
          },
          {
            sentence: "Traveling by train is usually much _____ than taking an expensive domestic flight.",
            options: ["more cheaper", "cheapest", "cheaper", "as cheap"],
            correct: 2,
            explanation: "For short one-syllable adjectives like 'cheap', the comparative is 'cheaper' (never 'more cheaper')."
          },
          {
            sentence: "Valeria loves coding, _____ she decided to enroll in an advanced web development course.",
            options: ["although", "so", "because", "but"],
            correct: 1,
            explanation: "'So' expresses consequence or result: she loves coding, SO she enrolled in the course."
          },
          {
            sentence: "Look at those dark storm clouds! It _____ rain at any moment.",
            options: ["is going to", "will to", "going", "must to"],
            correct: 0,
            explanation: "'Is going to' is used when present visible evidence indicates a future event."
          }
        ]
      },

      // 3. Vocabulary Matrix
      vocab: {
        id: "a2_vocab",
        type: "vocab",
        title: "Vocabulary & Phrasal Verbs: Social & Travel",
        badge: "Phrasal Verbs & Collocations • A2",
        instruction: "Identify the correct phrasal verb or collocation for each sentence.",
        items: [
          {
            sentence: "After school, Camila and her friends love to _____ at the central skate park.",
            options: ["hang out", "give up", "look after", "turn into"],
            correct: 0,
            explanation: "'Hang out' means to spend leisure time relaxing with friends."
          },
          {
            sentence: "Never _____ up on your dreams, even when learning something new seems difficult at first.",
            options: ["take", "give", "make", "put"],
            correct: 1,
            explanation: "'Give up' is the standard phrasal verb meaning to quit or stop trying."
          },
          {
            sentence: "Before submitting your science essay, make sure you _____ a final check for spelling errors.",
            options: ["do", "make", "give", "take"],
            correct: 0,
            explanation: "The standard English collocation is to 'do a check' or 'do homework'."
          },
          {
            sentence: "My grandparents always _____ care of our puppy when our family travels during vacation.",
            options: ["make", "take", "hold", "keep"],
            correct: 1,
            explanation: "The fixed collocation is 'take care of' (to look after someone or something)."
          }
        ]
      },

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

      // 2. Grammar Cloze
      grammar: {
        id: "b1_grammar",
        type: "grammar",
        title: "Use of English: Conditionals & Modals of Deduction",
        badge: "B1 Intermediate Syntax • B1",
        instruction: "Choose the grammatical option that best completes the complex sentence.",
        items: [
          {
            sentence: "If our school _____ solar panels on the roof, we would reduce our carbon emissions by 40%.",
            options: ["installs", "installed", "had installed", "will install"],
            correct: 1,
            explanation: "Second Conditional for hypothetical present/future situations: 'If + Past Simple, would + base verb'."
          },
          {
            sentence: "Gabriel has been studying for five straight hours; he _____ be completely exhausted.",
            options: ["must", "can", "should to", "ought"],
            correct: 0,
            explanation: "'Must' expresses strong logical deduction based on clear evidence."
          },
          {
            sentence: "The researcher _____ discovered the antibiotic was awarded the international prize.",
            options: ["which", "whose", "who", "whom"],
            correct: 2,
            explanation: "'Who' is the subject relative pronoun referring to people ('The researcher who discovered...')."
          },
          {
            sentence: "We haven't received the official laboratory results _____, but we expect them this afternoon.",
            options: ["already", "yet", "still", "since"],
            correct: 1,
            explanation: "'Yet' is placed at the end of negative present perfect sentences to indicate an expected action."
          }
        ]
      },

      // 3. Vocabulary Matrix
      vocab: {
        id: "b1_vocab",
        type: "vocab",
        title: "Academic Collocations & Connective Discourse",
        badge: "Discourse Connectors • B1",
        instruction: "Select the most cohesive academic connector or collocation.",
        items: [
          {
            sentence: "Renewable energy costs have dropped; _____, fossil fuel consumption remains high in several nations.",
            options: ["furthermore", "nonetheless", "therefore", "similarly"],
            correct: 1,
            explanation: "'Nonetheless' introduces a concession or contrast contrasting declining costs with continued consumption."
          },
          {
            sentence: "Before making a final investment, the committee decided to _____ in-depth research on market trends.",
            options: ["conduct", "make", "create", "practice"],
            correct: 0,
            explanation: "The formal academic collocation is to 'conduct research' or 'carry out research'."
          },
          {
            sentence: "The coach advised Lucas not to take _____ more commitments than he could realistically handle.",
            options: ["on", "over", "up", "in"],
            correct: 0,
            explanation: "To 'take on' commitments or responsibilities means to accept or undertake them."
          },
          {
            sentence: "Her presentation was so convincing that it made a lasting _____ on every member of the jury.",
            options: ["impact", "result", "mark", "cause"],
            correct: 0,
            explanation: "The collocation is 'make an impact on' or 'leave a lasting impression on'."
          }
        ]
      },

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

      // 2. Grammar Cloze
      grammar: {
        id: "b2_grammar",
        type: "grammar",
        title: "Use of English: Inversion, Passive & Mixed Clauses",
        badge: "Cambridge B2 Use of English • B2",
        instruction: "Select the option that adheres to advanced Cambridge B2 syntactic rules.",
        items: [
          {
            sentence: "Rarely _____ such exceptional dedication displayed by high school researchers.",
            options: ["we have witnessed", "have we witnessed", "we witnessed", "having we witnessed"],
            correct: 1,
            explanation: "Negative adverbial inversion: When 'Rarely', 'Seldom', or 'Never' begins a clause, auxiliary precedes subject ('Rarely have we witnessed')."
          },
          {
            sentence: "Had the environmental committee acted sooner, the mangrove ecosystem _____ permanently damaged.",
            options: ["would not have been", "will not be", "is not been", "would not be being"],
            correct: 0,
            explanation: "Inverted Third Conditional: 'Had + subject + past participle, would have been + past participle'."
          },
          {
            sentence: "The university is widely reported _____ a groundbreaking breakthrough in clean fusion energy.",
            options: ["having achieved", "to have achieved", "to achieve", "that it achieves"],
            correct: 1,
            explanation: "Passive reporting structure with perfect infinitive: 'is reported to have achieved' denotes a prior completed accomplishment."
          },
          {
            sentence: "Julian apologized profusely for _____ the confidential team document by mistake.",
            options: ["having deleted", "to delete", "deleted", "have deleted"],
            correct: 0,
            explanation: "Prepositions ('for') require a gerund ('having deleted' or 'deleting'). 'Having deleted' correctly emphasizes completed aspect."
          }
        ]
      },

      // 3. Vocabulary Matrix
      vocab: {
        id: "b2_vocab",
        type: "vocab",
        title: "Lexical Precision: Word Formation & Nuanced Idioms",
        badge: "Advanced Lexical Power • B2",
        instruction: "Complete each sentence with the most precise B2 word or derivative.",
        items: [
          {
            sentence: "The board members refused to _____ with unreasonable demands during the negotiations.",
            options: ["put up", "come down", "stand out", "take over"],
            correct: 0,
            explanation: "'Put up with' means to tolerate or endure an unpleasant circumstance."
          },
          {
            sentence: "Her unexpected research discovery caused a fundamental _____ in contemporary climate modeling.",
            options: ["paradigm shift", "routine switch", "simple change", "casual move"],
            correct: 0,
            explanation: "'Paradigm shift' is the high-level academic collocation describing a fundamental conceptual transformation."
          },
          {
            sentence: "The candidate's extensive international experience gave her a distinctive competitive _____ over rivals.",
            options: ["edge", "border", "fringe", "limit"],
            correct: 0,
            explanation: "'Competitive edge' is the established idiom denoting an advantageous superiority."
          },
          {
            sentence: "Despite rigorous scrutiny, the experimental data proved remarkably _____ across independent trials.",
            options: ["consistent", "consisting", "consistency", "consistently"],
            correct: 0,
            explanation: "The predicate adjective 'consistent' correctly follows the linking verb 'proved remarkably'."
          }
        ]
      },

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

