/**
 * Bilikids Teens Academy - Use of English (Grammar) & Vocabulary Matrix Master Database
 * Comprehensive CEFR Practice Items (20 Items per Category per Level = 160 Total Drills)
 * Levels: A1, A2, B1, B2
 * Each item includes:
 * - Clear contextual prompt with blank or question
 * - 4 distinct options (A, B, C, D)
 * - Validated correct answer index (0-3)
 * - In-depth pedagogical explanation of syntactic rules and lexical context
 */

const TEENS_GRAMMAR_DATA = {
  "a1": [
    {
      "sentence": "Sofia _____ to music on her headphones every morning on the bus.",
      "options": [
        "listen",
        "listens",
        "listening",
        "is listen"
      ],
      "correct": 1,
      "explanation": "Third-person singular in Present Simple (he/she/it) requires the suffix '-s' ('Sofia listens')."
    },
    {
      "sentence": "My brother and I _____ like waking up early on Saturdays.",
      "options": [
        "doesn't",
        "aren't",
        "don't",
        "no"
      ],
      "correct": 2,
      "explanation": "Plural subject ('My brother and I' = we) uses 'don't' for negative Present Simple statements."
    },
    {
      "sentence": "We usually have our English class _____ 9:00 AM on Tuesdays.",
      "options": [
        "in",
        "on",
        "at",
        "to"
      ],
      "correct": 2,
      "explanation": "We use the preposition 'at' for precise clock times ('at 9:00 AM')."
    },
    {
      "sentence": "Can you help _____ with this difficult math exercise?",
      "options": [
        "me",
        "I",
        "my",
        "mine"
      ],
      "correct": 0,
      "explanation": "'Me' is the objective pronoun required after the transitive verb 'help'."
    },
    {
      "sentence": "Mateo is in the science lab right now. He _____ on a chemistry project.",
      "options": [
        "works",
        "is working",
        "worked",
        "work"
      ],
      "correct": 1,
      "explanation": "'Right now' indicates an action in progress at the present moment, requiring Present Continuous ('is working')."
    },
    {
      "sentence": "_____ is your favorite subject, English or Science?",
      "options": [
        "Who",
        "Which",
        "Where",
        "When"
      ],
      "correct": 1,
      "explanation": "'Which' is used to ask for a choice between a limited set of alternatives."
    },
    {
      "sentence": "Lucas and David are brothers, but _____ hobbies are completely different.",
      "options": [
        "they",
        "them",
        "their",
        "theirs"
      ],
      "correct": 2,
      "explanation": "'Their' is the possessive adjective used before the plural noun 'hobbies'."
    },
    {
      "sentence": "There _____ twenty-five students in our classroom today.",
      "options": [
        "is",
        "are",
        "have",
        "be"
      ],
      "correct": 1,
      "explanation": "With plural countable nouns ('twenty-five students'), we use 'there are'."
    },
    {
      "sentence": "Valentina _____ swim very fast; she won the school swimming tournament last month.",
      "options": [
        "can",
        "cans",
        "is can",
        "must to"
      ],
      "correct": 0,
      "explanation": "The modal auxiliary 'can' expresses ability and never takes an '-s' suffix."
    },
    {
      "sentence": "Look at _____ birds high up in that tall oak tree!",
      "options": [
        "this",
        "that",
        "these",
        "those"
      ],
      "correct": 3,
      "explanation": "'Those' is the demonstrative pronoun for plural objects located far from the speaker."
    },
    {
      "sentence": "How _____ water do you drink during soccer training?",
      "options": [
        "many",
        "much",
        "any",
        "few"
      ],
      "correct": 1,
      "explanation": "'Much' is used with uncountable nouns like 'water' in questions."
    },
    {
      "sentence": "Our teacher always arrives at school _____ 7:30 in the morning.",
      "options": [
        "on",
        "at",
        "in",
        "by"
      ],
      "correct": 1,
      "explanation": "We use 'at' for specific times of the day ('at 7:30')."
    },
    {
      "sentence": "Daniel doesn't have _____ pencils in his pencil case.",
      "options": [
        "some",
        "any",
        "no",
        "much"
      ],
      "correct": 1,
      "explanation": "'Any' is standard in negative sentences with countable plural nouns ('doesn't have any pencils')."
    },
    {
      "sentence": "Where _____ your parents work on weekdays?",
      "options": [
        "does",
        "are",
        "do",
        "is"
      ],
      "correct": 2,
      "explanation": "The plural subject 'your parents' (they) requires the auxiliary 'do' in Present Simple questions."
    },
    {
      "sentence": "Please _____ quiet in the school library; other students are studying.",
      "options": [
        "be",
        "are",
        "you be",
        "being"
      ],
      "correct": 0,
      "explanation": "Imperative sentences directed to someone begin with the base form of the verb ('Be quiet')."
    },
    {
      "sentence": "Camila usually eats lunch _____ noon with her classmates.",
      "options": [
        "at",
        "in",
        "on",
        "from"
      ],
      "correct": 0,
      "explanation": "The fixed temporal expression is 'at noon' or 'at midday'."
    },
    {
      "sentence": "These sneakers belong to Diego. They are _____.",
      "options": [
        "him",
        "he",
        "his",
        "himself"
      ],
      "correct": 2,
      "explanation": "'His' serves as both possessive adjective and possessive pronoun ('They are his')."
    },
    {
      "sentence": "Why _____ you late for English class yesterday morning?",
      "options": [
        "was",
        "were",
        "are",
        "did"
      ],
      "correct": 1,
      "explanation": "The past simple of the verb 'to be' with the subject 'you' is 'were'."
    },
    {
      "sentence": "Sarah loves animals, so she _____ a dog and two cats at home.",
      "options": [
        "have",
        "has",
        "is having",
        "having"
      ],
      "correct": 1,
      "explanation": "Third-person singular 'she' takes 'has' to denote possession in Present Simple."
    },
    {
      "sentence": "Listen! The school choir _____ a beautiful song in the auditorium.",
      "options": [
        "sings",
        "is singing",
        "sing",
        "sang"
      ],
      "correct": 1,
      "explanation": "'Listen!' draws attention to an immediate action happening right now (Present Continuous: 'is singing')."
    }
  ],
  "a2": [
    {
      "sentence": "While we _____ for the school bus yesterday, it suddenly started to rain heavily.",
      "options": [
        "waited",
        "were waiting",
        "are waiting",
        "wait"
      ],
      "correct": 1,
      "explanation": "Past Continuous ('were waiting') describes an ongoing background action interrupted by a sudden Past Simple event ('started')."
    },
    {
      "sentence": "Traveling by train is usually much _____ than taking an expensive domestic flight.",
      "options": [
        "more cheaper",
        "cheapest",
        "cheaper",
        "as cheap"
      ],
      "correct": 2,
      "explanation": "For one-syllable adjectives like 'cheap', the comparative is formed with '-er' ('cheaper')."
    },
    {
      "sentence": "Valeria loves coding, _____ she decided to enroll in an advanced web development course.",
      "options": [
        "although",
        "so",
        "because",
        "but"
      ],
      "correct": 1,
      "explanation": "'So' expresses a logical consequence or result: she loved coding, so she enrolled."
    },
    {
      "sentence": "Look at those dark storm clouds! It _____ rain at any moment.",
      "options": [
        "is going to",
        "will to",
        "going",
        "must to"
      ],
      "correct": 0,
      "explanation": "'Be going to' is used when present visible evidence indicates an impending future event."
    },
    {
      "sentence": "We _____ to Cartagena three times, and every visit has been memorable.",
      "options": [
        "have been",
        "were",
        "went",
        "are being"
      ],
      "correct": 0,
      "explanation": "Present Perfect ('have been') expresses life experiences occurring at unspecified times before now."
    },
    {
      "sentence": "If it rains tomorrow morning, we _____ our soccer match indoors.",
      "options": [
        "play",
        "will play",
        "played",
        "would play"
      ],
      "correct": 1,
      "explanation": "First Conditional: 'If + Present Simple, will + base verb' for real future possibilities."
    },
    {
      "sentence": "You _____ wear a helmet when riding an electric scooter; it is required by school safety rules.",
      "options": [
        "might",
        "must",
        "could",
        "would"
      ],
      "correct": 1,
      "explanation": "'Must' expresses strong obligation and compliance with official rules."
    },
    {
      "sentence": "Carlos didn't go to the cinema last night because he _____ finish his science assignment.",
      "options": [
        "had to",
        "must",
        "has to",
        "should to"
      ],
      "correct": 0,
      "explanation": "'Had to' is the past form of 'must' and 'have to' for past obligations."
    },
    {
      "sentence": "This is the _____ documentary about marine biodiversity I have ever watched.",
      "options": [
        "more fascinating",
        "most fascinating",
        "fascinatingest",
        "fascinating"
      ],
      "correct": 1,
      "explanation": "Superlative of long adjectives is formed with 'the most' ('the most fascinating')."
    },
    {
      "sentence": "She was tired _____ she stayed up late finishing her history presentation.",
      "options": [
        "so",
        "because",
        "although",
        "unless"
      ],
      "correct": 1,
      "explanation": "'Because' introduces the cause or reason for being tired."
    },
    {
      "sentence": "My parents bought a new laptop _____ was lightweight and had a long battery life.",
      "options": [
        "who",
        "whose",
        "which",
        "where"
      ],
      "correct": 2,
      "explanation": "'Which' (or 'that') is the defining relative pronoun used for non-human objects and things."
    },
    {
      "sentence": "Neither Samuel _____ his brother knew the correct answer to the riddle.",
      "options": [
        "or",
        "nor",
        "and",
        "but"
      ],
      "correct": 1,
      "explanation": "'Neither' pairs correlatively with 'nor' ('Neither Samuel nor his brother')."
    },
    {
      "sentence": "When I arrived home from school, my mother _____ already prepared lunch.",
      "options": [
        "has",
        "had",
        "is",
        "was"
      ],
      "correct": 1,
      "explanation": "Past Perfect ('had prepared') indicates an action completed prior to another past moment ('arrived')."
    },
    {
      "sentence": "How _____ did this mechanical keyboard cost at the electronics store?",
      "options": [
        "many",
        "much",
        "often",
        "long"
      ],
      "correct": 1,
      "explanation": "We use 'How much' when inquiring about monetary cost or price."
    },
    {
      "sentence": "You haven't seen my wireless headphones anywhere, _____ you?",
      "options": [
        "have",
        "haven't",
        "did",
        "do"
      ],
      "correct": 0,
      "explanation": "A negative statement ('haven't seen') takes an affirmative tag question ('have you?')."
    },
    {
      "sentence": "Santiago enjoys _____ science fiction novels during his free time.",
      "options": [
        "read",
        "to read",
        "reading",
        "reads"
      ],
      "correct": 2,
      "explanation": "The verb 'enjoy' is followed by a gerund ('-ing' form: 'enjoy reading')."
    },
    {
      "sentence": "We arrived at the theater _____ late that we missed the beginning of the movie.",
      "options": [
        "such",
        "so",
        "too",
        "very"
      ],
      "correct": 1,
      "explanation": "'So + adverb + that' ('so late that') expresses result or consequence."
    },
    {
      "sentence": "I used to _____ basketball every afternoon when I was in primary school.",
      "options": [
        "play",
        "played",
        "playing",
        "plays"
      ],
      "correct": 0,
      "explanation": "'Used to' is followed by the bare base infinitive ('used to play') to describe past habits."
    },
    {
      "sentence": "The museum was very quiet; there were _____ any visitors in the galleries.",
      "options": [
        "hard",
        "hardly",
        "almost",
        "nearly"
      ],
      "correct": 1,
      "explanation": "'Hardly any' is a standard quantifier phrase meaning 'almost no' visitors."
    },
    {
      "sentence": "Could you tell me where the nearest pharmacy _____, please?",
      "options": [
        "is",
        "is it",
        "it is",
        "be"
      ],
      "correct": 0,
      "explanation": "In indirect questions introduced by polite openings ('Could you tell me...'), standard subject-verb order is used."
    }
  ],
  "b1": [
    {
      "sentence": "If our school _____ solar panels on the roof, we would reduce our carbon emissions by 40%.",
      "options": [
        "installs",
        "installed",
        "had installed",
        "will install"
      ],
      "correct": 1,
      "explanation": "Second Conditional for hypothetical present/future scenarios: 'If + Past Simple, would + base verb'."
    },
    {
      "sentence": "Gabriel has been studying for five straight hours; he _____ be completely exhausted.",
      "options": [
        "must",
        "can",
        "should to",
        "ought"
      ],
      "correct": 0,
      "explanation": "'Must' conveys strong deductive certainty based on logical evidence."
    },
    {
      "sentence": "The researcher _____ discovered the antibiotic was awarded the international prize.",
      "options": [
        "which",
        "whose",
        "who",
        "whom"
      ],
      "correct": 2,
      "explanation": "'Who' is the subject relative pronoun referring to persons ('The researcher who discovered...')."
    },
    {
      "sentence": "We haven't received the official laboratory results _____, but we expect them this afternoon.",
      "options": [
        "already",
        "yet",
        "still",
        "since"
      ],
      "correct": 1,
      "explanation": "'Yet' is placed at the end of negative Present Perfect sentences to express anticipated actions."
    },
    {
      "sentence": "By the time the firefighter arrived, the neighborhood residents _____ already extinguished the blaze.",
      "options": [
        "have",
        "had",
        "were",
        "would"
      ],
      "correct": 1,
      "explanation": "Past Perfect ('had extinguished') designates an action completed prior to a specific past reference point ('arrived')."
    },
    {
      "sentence": "The historical novel was written _____ a celebrated Colombian journalist in 1982.",
      "options": [
        "by",
        "with",
        "from",
        "for"
      ],
      "correct": 0,
      "explanation": "In passive constructions, the agent performing the action is introduced by the preposition 'by'."
    },
    {
      "sentence": "Although the team had little preparation, they managed _____ the championship game.",
      "options": [
        "winning",
        "to win",
        "win",
        "won"
      ],
      "correct": 1,
      "explanation": "The verb 'manage' requires a full infinitive with 'to' ('managed to win')."
    },
    {
      "sentence": "I wish our municipal government _____ more dedicated bike lanes in the city center.",
      "options": [
        "builds",
        "would build",
        "will build",
        "is building"
      ],
      "correct": 1,
      "explanation": "'Wish + would + base verb' expresses desire for a change in another entity's behavior or policies."
    },
    {
      "sentence": "Unless students _____ the online confirmation form, their enrollment will not be processed.",
      "options": [
        "complete",
        "will complete",
        "don't complete",
        "completed"
      ],
      "correct": 0,
      "explanation": "'Unless' means 'if not' and takes an affirmative Present Simple verb in conditional clauses."
    },
    {
      "sentence": "Neither the headmaster nor the academic coordinators _____ present at the opening ceremony.",
      "options": [
        "was",
        "were",
        "is",
        "be"
      ],
      "correct": 1,
      "explanation": "When subjects are joined by 'neither... nor', the verb agrees with the closer plural subject ('coordinators were')."
    },
    {
      "sentence": "If Lucia had reviewed her laboratory notes thoroughly, she _____ the chemistry practical test.",
      "options": [
        "would pass",
        "would have passed",
        "passed",
        "will have passed"
      ],
      "correct": 1,
      "explanation": "Third Conditional for unreal past outcomes: 'If + Past Perfect, would have + past participle'."
    },
    {
      "sentence": "The students are looking forward to _____ their scientific experiments at the regional science fair.",
      "options": [
        "present",
        "presenting",
        "presented",
        "presentation"
      ],
      "correct": 1,
      "explanation": "The phrasal preposition 'look forward to' is followed by a gerund ('-ing' form: 'presenting')."
    },
    {
      "sentence": "That abandoned warehouse _____ into a community youth center next autumn.",
      "options": [
        "will transform",
        "will be transformed",
        "is transforming",
        "transformed"
      ],
      "correct": 1,
      "explanation": "Future passive ('will be transformed') is required because the warehouse is the recipient of the action."
    },
    {
      "sentence": "He asked me how long I _____ English before relocating to the United Kingdom.",
      "options": [
        "had been studying",
        "have studied",
        "study",
        "am studying"
      ],
      "correct": 0,
      "explanation": "Past Perfect Continuous ('had been studying') indicates duration leading up to a past event in indirect speech."
    },
    {
      "sentence": "You had better _____ your digital devices before entering the standardized examination hall.",
      "options": [
        "turn off",
        "turning off",
        "to turn off",
        "turned off"
      ],
      "correct": 0,
      "explanation": "'Had better' is an idiomatic modal structure followed by the bare base infinitive ('had better turn off')."
    },
    {
      "sentence": "The teacher told us _____ make any noise while other students were completing the test.",
      "options": [
        "to not",
        "not to",
        "don't",
        "no"
      ],
      "correct": 1,
      "explanation": "Negative reported commands utilize 'not to + base verb' ('told us not to make')."
    },
    {
      "sentence": "There is _____ little potable water left in the reservoir that emergency rationing was ordered.",
      "options": [
        "such",
        "so",
        "too",
        "very"
      ],
      "correct": 1,
      "explanation": "'So + little + noun + that' ('so little water that') denotes degree causing a specific consequence."
    },
    {
      "sentence": "Despite _____ heavily during the outdoor excursion, the students maintained high morale.",
      "options": [
        "it rained",
        "raining",
        "rained",
        "rain"
      ],
      "correct": 1,
      "explanation": "The preposition 'despite' must be followed by a gerund ('raining') or a noun phrase."
    },
    {
      "sentence": "The city council suggested that the recreational park _____ renovated before the summer festival.",
      "options": [
        "be",
        "is",
        "was",
        "being"
      ],
      "correct": 0,
      "explanation": "Present subjunctive using base form 'be' follows verbs of formal recommendation ('suggested that... be renovated')."
    },
    {
      "sentence": "Hardly had the scientific lecture started _____ the electrical power in the auditorium failed.",
      "options": [
        "than",
        "when",
        "that",
        "so"
      ],
      "correct": 1,
      "explanation": "The correlative structure 'Hardly + inversion... when' expresses two closely sequential past events."
    }
  ],
  "b2": [
    {
      "sentence": "Rarely _____ such exceptional dedication displayed by high school researchers.",
      "options": [
        "we have witnessed",
        "have we witnessed",
        "we witnessed",
        "having we witnessed"
      ],
      "correct": 1,
      "explanation": "Negative adverbial inversion: When 'Rarely', 'Seldom', or 'Never' opens a clause, the auxiliary precedes the subject ('Rarely have we witnessed')."
    },
    {
      "sentence": "Had the environmental committee acted sooner, the mangrove ecosystem _____ permanently damaged.",
      "options": [
        "would not have been",
        "will not be",
        "is not been",
        "would not be being"
      ],
      "correct": 0,
      "explanation": "Inverted Third Conditional: 'Had + subject + past participle, would have been + past participle'."
    },
    {
      "sentence": "The university is widely reported _____ a groundbreaking breakthrough in clean fusion energy.",
      "options": [
        "having achieved",
        "to have achieved",
        "to achieve",
        "that it achieves"
      ],
      "correct": 1,
      "explanation": "Passive reporting construction with perfect infinitive: 'is reported to have achieved' denotes prior completion."
    },
    {
      "sentence": "Julian apologized profusely for _____ the confidential team document by mistake.",
      "options": [
        "having deleted",
        "to delete",
        "deleted",
        "have deleted"
      ],
      "correct": 0,
      "explanation": "Prepositions ('for') require a gerund ('having deleted' or 'deleting'). The perfect gerund emphasizes prior completed action."
    },
    {
      "sentence": "Under no circumstances _____ confidential patient records be disclosed without explicit consent.",
      "options": [
        "should",
        "they should",
        "should they",
        "that should"
      ],
      "correct": 0,
      "explanation": "Negative inversion: 'Under no circumstances should [subject]...' places modal auxiliary before subject."
    },
    {
      "sentence": "It was only after re-analyzing the statistical outliers _____ the astrophysicists detected the pulsar.",
      "options": [
        "that",
        "when",
        "which",
        "then"
      ],
      "correct": 0,
      "explanation": "Cleft sentence structure: 'It is/was [focus element] that [clause]' ('It was only after... that the astrophysicists...')."
    },
    {
      "sentence": "If Sofia had accepted the scholarship offer, she _____ at Cambridge University today.",
      "options": [
        "would be studying",
        "would have studied",
        "had studied",
        "studied"
      ],
      "correct": 0,
      "explanation": "Mixed Conditional (past condition, present consequence): 'If + Past Perfect, would be + -ing' (today)."
    },
    {
      "sentence": "The lead investigator suggested that the anomalous experimental data _____ re-evaluated by external auditors.",
      "options": [
        "be",
        "is",
        "was",
        "will be"
      ],
      "correct": 0,
      "explanation": "Mandative subjunctive: Verbs of suggestion/demand ('suggested that') govern the bare base form ('be re-evaluated')."
    },
    {
      "sentence": "Not until the late nineteenth century _____ the fundamental principles of genetics recognized.",
      "options": [
        "were",
        "did",
        "was",
        "have been"
      ],
      "correct": 0,
      "explanation": "Inversion following 'Not until': Auxiliary verb 'were' precedes plural subject 'the fundamental principles'."
    },
    {
      "sentence": "The architectural framework is so structurally innovative that it borders _____ engineering genius.",
      "options": [
        "on",
        "in",
        "to",
        "at"
      ],
      "correct": 0,
      "explanation": "The prepositional verb collocation is 'border on' (meaning to come very close to a specific state)."
    },
    {
      "sentence": "So intense _____ the seismic tremors that skyscrapers swayed visibly for several minutes.",
      "options": [
        "were",
        "was",
        "did",
        "had"
      ],
      "correct": 0,
      "explanation": "Inversion after 'So + adjective': 'So intense were the tremors that...' places plural auxiliary before plural subject."
    },
    {
      "sentence": "No sooner had the scientific announcement concluded _____ international journalists began raising questions.",
      "options": [
        "than",
        "when",
        "then",
        "that"
      ],
      "correct": 0,
      "explanation": "The correlative inversion formula is 'No sooner had... than...' (distinct from 'Hardly had... when')."
    },
    {
      "sentence": "The minister denied _____ influenced by corporate lobbyists prior to voting on the bill.",
      "options": [
        "having been",
        "to have been",
        "to be",
        "had been"
      ],
      "correct": 0,
      "explanation": "The verb 'deny' governs a gerund; passive perfect gerund 'having been influenced' denotes prior passive occurrence."
    },
    {
      "sentence": "_____ the flight be canceled due to volcanic ash, all passengers will receive full refunds.",
      "options": [
        "Should",
        "Had",
        "Were",
        "If should"
      ],
      "correct": 0,
      "explanation": "Inverted First Conditional for formal contingency: 'Should + subject + bare infinitive'."
    },
    {
      "sentence": "Elena would rather you _____ not discuss the confidential contractual terms in public spaces.",
      "options": [
        "did",
        "do",
        "would",
        "had"
      ],
      "correct": 0,
      "explanation": "'Would rather + subject + Past Simple' expresses preference regarding another person's present/future actions."
    },
    {
      "sentence": "The manuscript, the authenticity of _____ had been debated for decades, was verified through radiocarbon dating.",
      "options": [
        "which",
        "whom",
        "whose",
        "what"
      ],
      "correct": 0,
      "explanation": "Formal non-defining relative clause with prepositional phrase: 'the authenticity of which'."
    },
    {
      "sentence": "Much _____ the critics praised the cinematography, the storyline lacked emotional depth.",
      "options": [
        "as",
        "though",
        "like",
        "while"
      ],
      "correct": 0,
      "explanation": "'Much as' is a formal concession clause meaning 'Although/Even though [subject] did something a great deal'."
    },
    {
      "sentence": "The CEO is believed _____ the merger negotiations personally before the quarterly report.",
      "options": [
        "to have finalized",
        "having finalized",
        "finalizing",
        "to finalize"
      ],
      "correct": 0,
      "explanation": "Passive reporting structure with perfect infinitive: 'is believed to have finalized' denotes past action."
    },
    {
      "sentence": "Were the monetary authorities _____ interest rates again, consumer borrowing would decline precipitously.",
      "options": [
        "to raise",
        "raise",
        "raised",
        "raising"
      ],
      "correct": 0,
      "explanation": "Inverted Second Conditional: 'Were + subject + to-infinitive, would + base verb'."
    },
    {
      "sentence": "Little _____ the cybersecurity analysts realize that the malware had already infiltrated the mainframe.",
      "options": [
        "did",
        "were",
        "had",
        "do"
      ],
      "correct": 0,
      "explanation": "Negative adverbial inversion with 'Little': 'Little did [subject] realize' (Past Simple auxiliary 'did')."
    }
  ]
};

const TEENS_VOCAB_DATA = {
  "a1": [
    {
      "sentence": "A room in a school where students can borrow and read books silently is called a _____.",
      "options": [
        "cafeteria",
        "gymnasium",
        "library",
        "corridor"
      ],
      "correct": 2,
      "explanation": "A 'library' is the dedicated educational facility for borrowing and reading books."
    },
    {
      "sentence": "When students receive a short rest between morning classes, it is known as _____.",
      "options": [
        "recess",
        "homework",
        "exam",
        "grade"
      ],
      "correct": 0,
      "explanation": "'Recess' or 'break' is the scheduled rest period between school lessons."
    },
    {
      "sentence": "Diego loves painting and drawing; his favorite school subject is definitely _____.",
      "options": [
        "Biology",
        "Art",
        "Geography",
        "History"
      ],
      "correct": 1,
      "explanation": "'Art' is the academic subject centered on painting, sketching, and sculpture."
    },
    {
      "sentence": "Before going to sleep, I always _____ off the light in my bedroom.",
      "options": [
        "turn",
        "make",
        "give",
        "take"
      ],
      "correct": 0,
      "explanation": "'Turn off' is the basic phrasal verb meaning to deactivate an electric light or appliance."
    },
    {
      "sentence": "Every morning, I set my alarm clock because I need to _____ up at 6:00 AM.",
      "options": [
        "wake",
        "stand",
        "look",
        "run"
      ],
      "correct": 0,
      "explanation": "'Wake up' means to stop sleeping and become conscious in the morning."
    },
    {
      "sentence": "Students carry their notebooks, pencil cases, and water bottles inside a _____.",
      "options": [
        "backpack",
        "wardrobe",
        "drawer",
        "pocket"
      ],
      "correct": 0,
      "explanation": "A 'backpack' (or rucksack) is a bag carried on the back for carrying school supplies."
    },
    {
      "sentence": "The large room where students eat their lunch at school is the _____.",
      "options": [
        "laboratory",
        "cafeteria",
        "auditorium",
        "stadium"
      ],
      "correct": 1,
      "explanation": "The 'cafeteria' is the school dining hall where meals are served and eaten."
    },
    {
      "sentence": "On cold winter mornings, remember to _____ on a warm jacket before going outside.",
      "options": [
        "put",
        "take",
        "bring",
        "set"
      ],
      "correct": 0,
      "explanation": "'Put on' is the phrasal verb for dressing yourself in an item of clothing."
    },
    {
      "sentence": "If you don't know the meaning of an English word, look it up in a _____.",
      "options": [
        "calendar",
        "dictionary",
        "newspaper",
        "timetable"
      ],
      "correct": 1,
      "explanation": "A 'dictionary' provides alphabetical definitions, pronunciations, and translations of words."
    },
    {
      "sentence": "My uncle is a _____ doctor; he works in the hospital taking care of sick children.",
      "options": [
        "pediatrician",
        "mechanic",
        "carpenter",
        "pilot"
      ],
      "correct": 0,
      "explanation": "A 'pediatrician' is a medical doctor who specializes in children's healthcare."
    },
    {
      "sentence": "Basketball, volleyball, and tennis are all popular team _____ played at school.",
      "options": [
        "meals",
        "sports",
        "instruments",
        "languages"
      ],
      "correct": 1,
      "explanation": "'Sports' refers to athletic physical activities and competitive games."
    },
    {
      "sentence": "Sofia plays the acoustic _____ in the school music band.",
      "options": [
        "guitar",
        "canvas",
        "paintbrush",
        "calculator"
      ],
      "correct": 0,
      "explanation": "A 'guitar' is a stringed musical instrument commonly played with fingers or a pick."
    },
    {
      "sentence": "The first meal of the day eaten in the morning is called _____.",
      "options": [
        "dinner",
        "lunch",
        "breakfast",
        "snack"
      ],
      "correct": 2,
      "explanation": "'Breakfast' is the meal consumed upon waking to break the overnight fasting period."
    },
    {
      "sentence": "To keep our classroom neat, throw your snack wrappers in the waste _____.",
      "options": [
        "basket",
        "shelf",
        "closet",
        "locker"
      ],
      "correct": 0,
      "explanation": "A 'waste basket' (or rubbish bin) is the designated container for trash."
    },
    {
      "sentence": "Saturday and Sunday together are commonly referred to as the _____.",
      "options": [
        "weekday",
        "fortnight",
        "weekend",
        "semester"
      ],
      "correct": 2,
      "explanation": "The 'weekend' comprises Saturday and Sunday when schools and offices are normally closed."
    },
    {
      "sentence": "When you arrive at an airport or hotel, you must first _____ in at the counter.",
      "options": [
        "check",
        "sign",
        "log",
        "step"
      ],
      "correct": 0,
      "explanation": "'Check in' is the standard phrasal verb for registering your arrival."
    },
    {
      "sentence": "The person who teaches and guides students in a classroom is a _____.",
      "options": [
        "student",
        "teacher",
        "dentist",
        "driver"
      ],
      "correct": 1,
      "explanation": "A 'teacher' is an educational professional who instructs learners."
    },
    {
      "sentence": "You use a sharpener when the tip of your wooden _____ breaks during writing.",
      "options": [
        "eraser",
        "ruler",
        "pencil",
        "scissors"
      ],
      "correct": 2,
      "explanation": "A 'pencil' is a graphite writing tool that requires periodic sharpening."
    },
    {
      "sentence": "If you are feeling ill, you should visit the school _____ in the health office.",
      "options": [
        "nurse",
        "cook",
        "guard",
        "librarian"
      ],
      "correct": 0,
      "explanation": "The school 'nurse' provides basic first aid and medical care to students."
    },
    {
      "sentence": "When your class finishes at 3:00 PM, you pack your bag and go _____.",
      "options": [
        "home",
        "office",
        "store",
        "clinic"
      ],
      "correct": 0,
      "explanation": "To 'go home' means returning to one's residence after daily activities."
    }
  ],
  "a2": [
    {
      "sentence": "After school, Camila and her friends love to _____ at the central skate park.",
      "options": [
        "hang out",
        "give up",
        "look after",
        "turn into"
      ],
      "correct": 0,
      "explanation": "'Hang out' means to spend leisure time socializing and relaxing informally."
    },
    {
      "sentence": "Never _____ up on your dreams, even when learning something new seems challenging.",
      "options": [
        "take",
        "give",
        "make",
        "put"
      ],
      "correct": 1,
      "explanation": "'Give up' is the standard phrasal verb meaning to quit or stop trying."
    },
    {
      "sentence": "Before submitting your science essay, make sure you _____ a final check for spelling errors.",
      "options": [
        "do",
        "make",
        "give",
        "take"
      ],
      "correct": 0,
      "explanation": "The established English collocation is to 'do a check' or 'do an inspection'."
    },
    {
      "sentence": "My grandparents always _____ care of our puppy when our family travels during vacation.",
      "options": [
        "make",
        "take",
        "hold",
        "keep"
      ],
      "correct": 1,
      "explanation": "The fixed collocation is 'take care of' (meaning to care for or watch over)."
    },
    {
      "sentence": "Many volunteers joined the campaign to clean up plastic waste and _____ the local environment.",
      "options": [
        "protect",
        "pollute",
        "destroy",
        "waste"
      ],
      "correct": 0,
      "explanation": "'Protect' means to shield something from harm, damage, or degradation."
    },
    {
      "sentence": "I couldn't hear the teacher clearly, so I asked her to speak _____.",
      "options": [
        "softly",
        "loudly",
        "quietly",
        "hardly"
      ],
      "correct": 1,
      "explanation": "'Loudly' is the adverb indicating sufficient volume for auditory clarity."
    },
    {
      "sentence": "Before boarding the airplane, passengers must show their _____ pass at the gate.",
      "options": [
        "boarding",
        "departure",
        "ticket",
        "driving"
      ],
      "correct": 0,
      "explanation": "A 'boarding pass' is the official document granting permission to board an aircraft."
    },
    {
      "sentence": "The young inventor developed an innovative gadget that runs on solar _____.",
      "options": [
        "power",
        "smoke",
        "weight",
        "dust"
      ],
      "correct": 0,
      "explanation": "'Solar power' (or solar energy) denotes electricity generated by sunlight."
    },
    {
      "sentence": "Julian decided to _____ up jogging to improve his physical fitness before the marathon.",
      "options": [
        "take",
        "get",
        "bring",
        "set"
      ],
      "correct": 0,
      "explanation": "'Take up' a hobby or sport means to begin practicing it regularly."
    },
    {
      "sentence": "Can you please _____ down the volume of the speakers? I am studying for an exam.",
      "options": [
        "turn",
        "put",
        "make",
        "pull"
      ],
      "correct": 0,
      "explanation": "'Turn down' means to reduce the auditory volume or output of an appliance."
    },
    {
      "sentence": "The doctor wrote a medical _____ for antibiotics to treat the throat infection.",
      "options": [
        "prescription",
        "receipt",
        "recipe",
        "bill"
      ],
      "correct": 0,
      "explanation": "A 'prescription' is an authorized doctor's written instruction for medication."
    },
    {
      "sentence": "To prevent tooth decay, dentists recommend brushing your teeth at _____ twice a day.",
      "options": [
        "most",
        "least",
        "last",
        "first"
      ],
      "correct": 1,
      "explanation": "'At least' indicates the minimum recommended frequency."
    },
    {
      "sentence": "The documentary provided valuable _____ into the endangered species living in the Amazon basin.",
      "options": [
        "insights",
        "noises",
        "rumors",
        "accidents"
      ],
      "correct": 0,
      "explanation": "'Insights' refers to accurate and deep understanding of a complex issue."
    },
    {
      "sentence": "I am really looking _____ to our school field trip to the astronomy observatory next Friday.",
      "options": [
        "after",
        "forward",
        "back",
        "up"
      ],
      "correct": 1,
      "explanation": "The idiom 'look forward to' expresses eager anticipation of a future event."
    },
    {
      "sentence": "Felipe was proud because he _____ a remarkable achievement in the national robotics contest.",
      "options": [
        "reached",
        "accomplished",
        "arrived",
        "managed"
      ],
      "correct": 1,
      "explanation": "To 'accomplish an achievement' or 'reach a milestone' signifies achieving success."
    },
    {
      "sentence": "Be careful when walking on the icy pavement, or you might slip and _____ over.",
      "options": [
        "fall",
        "turn",
        "run",
        "climb"
      ],
      "correct": 0,
      "explanation": "'Fall over' is the phrasal verb meaning to lose balance and collapse to the ground."
    },
    {
      "sentence": "The museum charges an admission _____ of five dollars for secondary school students.",
      "options": [
        "fee",
        "fare",
        "tip",
        "fine"
      ],
      "correct": 0,
      "explanation": "A 'fee' is a payment made for entry, professional service, or membership."
    },
    {
      "sentence": "The teacher asked the class to work in pairs and _____ each other's drafts.",
      "options": [
        "review",
        "ignore",
        "erase",
        "tear"
      ],
      "correct": 0,
      "explanation": "'Review' means to examine and evaluate someone's work critically and constructively."
    },
    {
      "sentence": "Remember to _____ your trash into recyclable paper, plastic, and organic matter.",
      "options": [
        "separate",
        "gather",
        "burn",
        "mix"
      ],
      "correct": 0,
      "explanation": "'Separate' means dividing waste materials into distinct sorting categories."
    },
    {
      "sentence": "Sofia couldn't find her apartment keys because she had left them _____ on the kitchen counter.",
      "options": [
        "behind",
        "away",
        "out",
        "over"
      ],
      "correct": 0,
      "explanation": "'Leave behind' means inadvertently failing to take something along when departing."
    }
  ],
  "b1": [
    {
      "sentence": "Renewable energy costs have dropped; _____, fossil fuel consumption remains high in several nations.",
      "options": [
        "furthermore",
        "nonetheless",
        "therefore",
        "similarly"
      ],
      "correct": 1,
      "explanation": "'Nonetheless' introduces a concession or contrast contrasting declining costs with ongoing consumption."
    },
    {
      "sentence": "Before making a final investment, the committee decided to _____ in-depth research on market trends.",
      "options": [
        "conduct",
        "make",
        "create",
        "practice"
      ],
      "correct": 0,
      "explanation": "The formal academic collocation is to 'conduct research' or 'carry out research'."
    },
    {
      "sentence": "The coach advised Lucas not to take _____ more commitments than he could realistically handle.",
      "options": [
        "on",
        "over",
        "up",
        "in"
      ],
      "correct": 0,
      "explanation": "To 'take on' responsibilities or commitments means to undertake or accept them."
    },
    {
      "sentence": "Her presentation was so convincing that it made a lasting _____ on every member of the jury.",
      "options": [
        "impact",
        "result",
        "mark",
        "cause"
      ],
      "correct": 0,
      "explanation": "The fixed collocation is 'make an impact on' or 'leave a lasting impression on'."
    },
    {
      "sentence": "Deforestation in tropical zones poses a catastrophic _____ to planetary biodiversity.",
      "options": [
        "threat",
        "safety",
        "defense",
        "shelter"
      ],
      "correct": 0,
      "explanation": "A 'threat' denotes an imminent peril or danger to ecological sustainability."
    },
    {
      "sentence": "The scientific panel gathered to _____ the potential ethical consequences of genetic sequencing.",
      "options": [
        "debate",
        "confuse",
        "neglect",
        "dismiss"
      ],
      "correct": 0,
      "explanation": "'Debate' means to formally discuss opposing viewpoints regarding a significant issue."
    },
    {
      "sentence": "Urban designers implemented modern water management systems to mitigate the risk of _____.",
      "options": [
        "flooding",
        "drought",
        "breeze",
        "earthquakes"
      ],
      "correct": 0,
      "explanation": "'Flooding' is the inundation of dry land by water overflow, controlled by drainage infrastructure."
    },
    {
      "sentence": "The youth organization launched a public campaign to _____ awareness about adolescent mental health.",
      "options": [
        "raise",
        "rise",
        "grow",
        "elevate"
      ],
      "correct": 0,
      "explanation": "The standard English collocation is to 'raise awareness' (meaning to increase public consciousness)."
    },
    {
      "sentence": "Regular physical exercise is fundamentally _____ for maintaining cardiovascular vitality.",
      "options": [
        "beneficial",
        "hazardous",
        "detrimental",
        "negligible"
      ],
      "correct": 0,
      "explanation": "'Beneficial' describes something that confers positive health advantages and well-being."
    },
    {
      "sentence": "Due to unforeseen budget cuts, the administrative board was compelled to call _____ the conference.",
      "options": [
        "off",
        "out",
        "up",
        "in"
      ],
      "correct": 0,
      "explanation": "'Call off' is the idiomatic phrasal verb meaning to cancel a planned event."
    },
    {
      "sentence": "Students must develop strong digital literacy to distinguish factual reporting from _____ news.",
      "options": [
        "fake",
        "solid",
        "accurate",
        "neutral"
      ],
      "correct": 0,
      "explanation": "'Fake news' is deceptive or fabricated journalism disseminated without factual basis."
    },
    {
      "sentence": "The government granted monetary subsidies to stimulate the _____ of green technology startups.",
      "options": [
        "growth",
        "decline",
        "collapse",
        "stagnation"
      ],
      "correct": 0,
      "explanation": "'Growth' denotes positive economic development, expansion, and prosperity."
    },
    {
      "sentence": "When analyzing historical documents, historians must account for potential subjective _____.",
      "options": [
        "bias",
        "purity",
        "equality",
        "fairness"
      ],
      "correct": 0,
      "explanation": "'Bias' represents disproportionate weight or personal prejudice in favor of or against an idea."
    },
    {
      "sentence": "Engineers worked tirelessly to _____ a viable prototype before the venture capital deadline.",
      "options": [
        "develop",
        "destroy",
        "postpone",
        "abandon"
      ],
      "correct": 0,
      "explanation": "To 'develop a prototype' denotes designing and constructing a working experimental model."
    },
    {
      "sentence": "The university scholarship committee places immense _____ on academic integrity and leadership.",
      "options": [
        "emphasis",
        "hesitation",
        "doubt",
        "disdain"
      ],
      "correct": 0,
      "explanation": "To 'place emphasis on' something means giving it notable importance, prominence, or weight."
    },
    {
      "sentence": "Excessive reliance on disposable plastics has created an alarming _____ of waste in our oceans.",
      "options": [
        "accumulation",
        "shortage",
        "scarcity",
        "depletion"
      ],
      "correct": 0,
      "explanation": "'Accumulation' refers to the gradual buildup or aggregation of materials over time."
    },
    {
      "sentence": "The municipal council adopted stringent measures to _____ traffic congestion during peak hours.",
      "options": [
        "alleviate",
        "intensify",
        "provoke",
        "worsen"
      ],
      "correct": 0,
      "explanation": "'Alleviate' means making pain, hardship, or congestion less severe or more manageable."
    },
    {
      "sentence": "Her breakthrough thesis served as a major _____ for future neurological discoveries.",
      "options": [
        "catalyst",
        "obstacle",
        "barrier",
        "deterrent"
      ],
      "correct": 0,
      "explanation": "A 'catalyst' is an event, person, or publication that precipitates significant progressive change."
    },
    {
      "sentence": "Both political parties were willing to make mutual concessions to reach a pragmatic _____.",
      "options": [
        "compromise",
        "dispute",
        "standoff",
        "conflict"
      ],
      "correct": 0,
      "explanation": "A 'compromise' is an agreement reached where each party concedes certain demands."
    },
    {
      "sentence": "Students who complete the intensive coding bootcamp gain valuable _____ experience in software engineering.",
      "options": [
        "hands-on",
        "hands-off",
        "passive",
        "unrelated"
      ],
      "correct": 0,
      "explanation": "'Hands-on' describes practical, direct active experience rather than theoretical study."
    }
  ],
  "b2": [
    {
      "sentence": "The board members refused to _____ with unreasonable demands during the negotiations.",
      "options": [
        "put up",
        "come down",
        "stand out",
        "take over"
      ],
      "correct": 0,
      "explanation": "'Put up with' is the three-part phrasal verb meaning to endure or tolerate unpleasant conditions."
    },
    {
      "sentence": "Her unexpected research discovery caused a fundamental _____ in contemporary climate modeling.",
      "options": [
        "paradigm shift",
        "routine switch",
        "simple change",
        "casual move"
      ],
      "correct": 0,
      "explanation": "'Paradigm shift' is the established academic collocation denoting a profound conceptual transformation."
    },
    {
      "sentence": "The candidate's extensive international experience gave her a distinctive competitive _____ over rivals.",
      "options": [
        "edge",
        "border",
        "fringe",
        "limit"
      ],
      "correct": 0,
      "explanation": "'Competitive edge' is the idiomatic phrase designating an advantageous superiority."
    },
    {
      "sentence": "Despite rigorous scrutiny, the experimental data proved remarkably _____ across independent trials.",
      "options": [
        "consistent",
        "consisting",
        "consistency",
        "consistently"
      ],
      "correct": 0,
      "explanation": "The predicate adjective 'consistent' correctly follows the linking verb 'proved remarkably'."
    },
    {
      "sentence": "The defense attorney argued that the circumstantial evidence was purely _____ and inadmissible.",
      "options": [
        "conjectural",
        "tangible",
        "concrete",
        "irrefutable"
      ],
      "correct": 0,
      "explanation": "'Conjectural' describes conclusions formed on inconclusive supposition rather than solid evidence."
    },
    {
      "sentence": "The university committee reached a _____ decision after reviewing all candidate portfolios.",
      "options": [
        "unanimous",
        "discordant",
        "fractional",
        "divided"
      ],
      "correct": 0,
      "explanation": "A 'unanimous' decision is one where all members are in full, undivided agreement."
    },
    {
      "sentence": "Technological advancements have rendered previous mechanical assembly methods completely _____.",
      "options": [
        "obsolete",
        "current",
        "contemporary",
        "novel"
      ],
      "correct": 0,
      "explanation": "'Obsolete' denotes something no longer practiced or used due to newer, superior alternatives."
    },
    {
      "sentence": "Ethicists argue that human cloning raises _____ questions that transcend technological feasibility.",
      "options": [
        "profound",
        "shallow",
        "trivial",
        "fleeting"
      ],
      "correct": 0,
      "explanation": "'Profound' characterizes thoughts, questions, or insights exhibiting great intellectual depth."
    },
    {
      "sentence": "The scientist's pioneering treatise received _____ praise from researchers across the globe.",
      "options": [
        "widespread",
        "narrow",
        "confined",
        "restricted"
      ],
      "correct": 0,
      "explanation": "'Widespread' indicates extensive, ubiquitous recognition distributed over a large area."
    },
    {
      "sentence": "The novel's evocative prose captures the _____ nuances of human melancholy and resilience.",
      "options": [
        "subtle",
        "blunt",
        "crude",
        "coarse"
      ],
      "correct": 0,
      "explanation": "'Subtle' describes fine, delicate distinctions or nuances requiring acute perception to discern."
    },
    {
      "sentence": "When funding was abruptly withdrawn, the ambitious aerospace venture fell _____ completely.",
      "options": [
        "through",
        "apart",
        "over",
        "out"
      ],
      "correct": 0,
      "explanation": "'Fall through' is the phrasal verb meaning that a planned arrangement or enterprise fails to happen."
    },
    {
      "sentence": "The new regulatory framework aims to bridge the economic _____ between metropolitan and rural sectors.",
      "options": [
        "disparity",
        "similarity",
        "homogeneity",
        "conformity"
      ],
      "correct": 0,
      "explanation": "'Disparity' denotes a noticeable, often inequitable difference or imbalance between groups."
    },
    {
      "sentence": "Historians have long sought to _____ light on the enigmatic collapse of the ancient settlement.",
      "options": [
        "shed",
        "throw",
        "cast",
        "pour"
      ],
      "correct": 0,
      "explanation": "The established English idiom is to 'shed light on' something (clarifying or revealing truth)."
    },
    {
      "sentence": "The author made a thinly veiled _____ to contemporary political leaders in her satirical allegoric novel.",
      "options": [
        "allusion",
        "illusion",
        "delusion",
        "collision"
      ],
      "correct": 0,
      "explanation": "An 'allusion' is an indirect, implicit reference to a person, event, or literary work."
    },
    {
      "sentence": "Medical researchers warned that the pathogen could become increasingly _____ to standard antibiotics.",
      "options": [
        "resistant",
        "compliant",
        "susceptible",
        "vulnerable"
      ],
      "correct": 0,
      "explanation": "'Resistant' describes organisms or bacteria capable of withstanding the inhibitory effects of medication."
    },
    {
      "sentence": "Her eloquent defense of civil liberties struck a responsive _____ with young voters nationwide.",
      "options": [
        "chord",
        "string",
        "bell",
        "note"
      ],
      "correct": 0,
      "explanation": "The idiom 'strike a chord with' means causing someone to feel sympathy, enthusiasm, or agreement."
    },
    {
      "sentence": "The diplomatic summit resulted in an agreement that proved _____ to both participating nations.",
      "options": [
        "advantageous",
        "harmful",
        "perilous",
        "ruinous"
      ],
      "correct": 0,
      "explanation": "'Advantageous' denotes a condition or outcome favorable to success and mutual gain."
    },
    {
      "sentence": "The experimental drug was withdrawn after clinical trials showed _____ adverse side effects.",
      "options": [
        "unprecedented",
        "conventional",
        "predictable",
        "customary"
      ],
      "correct": 0,
      "explanation": "'Unprecedented' means never having happened or existed before in documented history."
    },
    {
      "sentence": "The activist refused to compromise her principles, remaining _____ in her pursuit of justice.",
      "options": [
        "resolute",
        "wavering",
        "indecisive",
        "hesitant"
      ],
      "correct": 0,
      "explanation": "'Resolute' denotes admirably purposeful, determined, and unwavering commitment."
    },
    {
      "sentence": "The committee concluded that the preliminary findings, while promising, were ultimately _____.",
      "options": [
        "inconclusive",
        "definitive",
        "decisive",
        "absolute"
      ],
      "correct": 0,
      "explanation": "'Inconclusive' signifies evidence or results that do not lead to a firm, definitive conclusion."
    }
  ]
};

if (typeof window !== "undefined") {
  window.TEENS_GRAMMAR_DATA = TEENS_GRAMMAR_DATA;
  window.TEENS_VOCAB_DATA = TEENS_VOCAB_DATA;
}
if (typeof globalThis !== "undefined") {
  globalThis.TEENS_GRAMMAR_DATA = TEENS_GRAMMAR_DATA;
  globalThis.TEENS_VOCAB_DATA = TEENS_VOCAB_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TEENS_GRAMMAR_DATA, TEENS_VOCAB_DATA };
}
