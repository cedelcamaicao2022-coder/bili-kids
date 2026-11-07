/**
 * Bilikids Teens Academy - Use of English (Grammar) & Vocabulary Tests Master Database
 * Comprehensive CEFR Practice Tests (20 Independent Tests per Track per Level = 160 Tests Total)
 * Levels: A1, A2, B1, B2
 * Each test includes:
 * - Dedicated thematic title & CEFR competency badge
 * - Targeted pedagogical instruction
 * - 4 interactive multiple-choice questions (A, B, C, D)
 * - Validated correct keys and detailed syntactic/lexical rationales
 */

const TEENS_GRAMMAR_TESTS = {
  "a1": [
    {
      "id": "a1_g1",
      "number": 1,
      "title": "Grammar Test 1: Present Simple Affirmative & 3rd Person '-s'",
      "badge": "Syntax \u2022 A1",
      "instruction": "Select the correct Present Simple verb form for each sentence.",
      "questions": [
        {
          "q": "1. Sofia _____ to pop music on her headphones every morning.",
          "options": [
            "listen",
            "listens",
            "listening",
            "is listen"
          ],
          "correct": 1,
          "explanation": "Subject 'Sofia' (she) takes the 3rd person singular '-s' in Present Simple ('listens')."
        },
        {
          "q": "2. My parents _____ in a large modern hospital in the city center.",
          "options": [
            "works",
            "work",
            "are work",
            "working"
          ],
          "correct": 1,
          "explanation": "Plural subject 'My parents' (they) takes the base verb form 'work'."
        },
        {
          "q": "3. The school bus usually _____ at our corner at exactly 7:15 AM.",
          "options": [
            "arrive",
            "arrives",
            "arriving",
            "is arrive"
          ],
          "correct": 1,
          "explanation": "Singular subject 'The school bus' (it) takes '-s' ('arrives')."
        },
        {
          "q": "4. Carlos _____ his homework immediately after lunch every afternoon.",
          "options": [
            "do",
            "does",
            "doing",
            "is do"
          ],
          "correct": 1,
          "explanation": "With 3rd person singular, 'do' becomes 'does'."
        }
      ]
    },
    {
      "id": "a1_g2",
      "number": 2,
      "title": "Grammar Test 2: Present Simple Negatives (Don't / Doesn't)",
      "badge": "Syntax \u2022 A1",
      "instruction": "Choose the correct negative auxiliary to complete each sentence.",
      "questions": [
        {
          "q": "1. My brother and I _____ like waking up early on Saturdays.",
          "options": [
            "doesn't",
            "aren't",
            "don't",
            "no"
          ],
          "correct": 2,
          "explanation": "Plural subject ('My brother and I' = we) uses 'don't' for Present Simple negation."
        },
        {
          "q": "2. Valentina _____ eat meat because she is a vegetarian.",
          "options": [
            "don't",
            "doesn't",
            "isn't",
            "not"
          ],
          "correct": 1,
          "explanation": "Third-person singular 'Valentina' (she) uses 'doesn't' followed by base verb."
        },
        {
          "q": "3. They _____ have English class on Friday afternoons.",
          "options": [
            "don't",
            "doesn't",
            "aren't",
            "haven't"
          ],
          "correct": 0,
          "explanation": "'They' takes the negative auxiliary 'don't'."
        },
        {
          "q": "4. Lucas _____ play video games on school nights.",
          "options": [
            "not",
            "doesn't",
            "don't",
            "isn't"
          ],
          "correct": 1,
          "explanation": "'Lucas' (he) takes 'doesn't'."
        }
      ]
    },
    {
      "id": "a1_g3",
      "number": 3,
      "title": "Grammar Test 3: Questions with 'Do' & 'Does'",
      "badge": "Questions \u2022 A1",
      "instruction": "Select the correct auxiliary verb to form accurate questions.",
      "questions": [
        {
          "q": "1. _____ you walk to school or take the yellow bus?",
          "options": [
            "Does",
            "Are",
            "Do",
            "Is"
          ],
          "correct": 2,
          "explanation": "'Do' is used with subject pronoun 'you' in Present Simple questions."
        },
        {
          "q": "2. Where _____ your science teacher live?",
          "options": [
            "do",
            "does",
            "is",
            "are"
          ],
          "correct": 1,
          "explanation": "Singular subject 'your science teacher' (he/she) requires 'does'."
        },
        {
          "q": "3. _____ Diego play soccer on the school varsity team?",
          "options": [
            "Does",
            "Do",
            "Is",
            "Has"
          ],
          "correct": 0,
          "explanation": "Third-person singular subject 'Diego' takes 'Does'."
        },
        {
          "q": "4. What time _____ your parents return home from work?",
          "options": [
            "does",
            "are",
            "do",
            "is"
          ],
          "correct": 2,
          "explanation": "Plural subject 'your parents' (they) takes 'do'."
        }
      ]
    },
    {
      "id": "a1_g4",
      "number": 4,
      "title": "Grammar Test 4: Prepositions of Time (At, On, In)",
      "badge": "Prepositions \u2022 A1",
      "instruction": "Choose the appropriate time preposition.",
      "questions": [
        {
          "q": "1. We usually have our math test _____ 9:00 AM.",
          "options": [
            "in",
            "on",
            "at",
            "to"
          ],
          "correct": 2,
          "explanation": "Use 'at' for precise clock times ('at 9:00 AM')."
        },
        {
          "q": "2. The school robotics tournament takes place _____ Saturday morning.",
          "options": [
            "at",
            "on",
            "in",
            "by"
          ],
          "correct": 1,
          "explanation": "Use 'on' for specific days of the week and dates ('on Saturday')."
        },
        {
          "q": "3. The new academic semester begins _____ February.",
          "options": [
            "in",
            "on",
            "at",
            "from"
          ],
          "correct": 0,
          "explanation": "Use 'in' for months and years ('in February')."
        },
        {
          "q": "4. Students normally have their lunch break _____ noon.",
          "options": [
            "at",
            "in",
            "on",
            "by"
          ],
          "correct": 0,
          "explanation": "The fixed expression is 'at noon' or 'at night'."
        }
      ]
    },
    {
      "id": "a1_g5",
      "number": 5,
      "title": "Grammar Test 5: Subject vs Object Pronouns",
      "badge": "Pronouns \u2022 A1",
      "instruction": "Select the correct pronoun depending on subject or object position.",
      "questions": [
        {
          "q": "1. Can you help _____ with this difficult math exercise?",
          "options": [
            "me",
            "I",
            "my",
            "mine"
          ],
          "correct": 0,
          "explanation": "'Me' is the objective pronoun following the transitive verb 'help'."
        },
        {
          "q": "2. Mateo and Sarah are my best friends; I see _____ every day at school.",
          "options": [
            "they",
            "their",
            "them",
            "theirs"
          ],
          "correct": 2,
          "explanation": "'Them' is the plural object pronoun referring to Mateo and Sarah."
        },
        {
          "q": "3. _____ is the captain of our school basketball team.",
          "options": [
            "Him",
            "He",
            "His",
            "He's"
          ],
          "correct": 1,
          "explanation": "'He' is the subjective pronoun serving as the subject of the sentence."
        },
        {
          "q": "4. Our English teacher gave _____ a very interesting book to read.",
          "options": [
            "we",
            "our",
            "us",
            "ours"
          ],
          "correct": 2,
          "explanation": "'Us' is the object pronoun following the verb 'gave'."
        }
      ]
    },
    {
      "id": "a1_g6",
      "number": 6,
      "title": "Grammar Test 6: Possessive Adjectives & Pronouns",
      "badge": "Possessives \u2022 A1",
      "instruction": "Choose the correct possessive form.",
      "questions": [
        {
          "q": "1. Lucas and David are brothers, but _____ hobbies are completely different.",
          "options": [
            "they",
            "them",
            "their",
            "theirs"
          ],
          "correct": 2,
          "explanation": "'Their' is the possessive adjective modifying the plural noun 'hobbies'."
        },
        {
          "q": "2. These blue sneakers belong to Diego. They are _____.",
          "options": [
            "him",
            "he",
            "his",
            "himself"
          ],
          "correct": 2,
          "explanation": "'His' functions as a possessive pronoun standing alone ('They are his')."
        },
        {
          "q": "3. Camila forgot _____ science notebook in the school library.",
          "options": [
            "she",
            "her",
            "hers",
            "herself"
          ],
          "correct": 1,
          "explanation": "'Her' is the possessive adjective for a female singular subject."
        },
        {
          "q": "4. This is my locker, and that one over there is _____.",
          "options": [
            "you",
            "your",
            "yours",
            "yourself"
          ],
          "correct": 2,
          "explanation": "'Yours' is the independent possessive pronoun replacing 'your locker'."
        }
      ]
    },
    {
      "id": "a1_g7",
      "number": 7,
      "title": "Grammar Test 7: Existence with 'There is' & 'There are'",
      "badge": "Syntax \u2022 A1",
      "instruction": "Select 'there is' or 'there are' based on noun number.",
      "questions": [
        {
          "q": "1. There _____ twenty-five students in our classroom today.",
          "options": [
            "is",
            "are",
            "have",
            "be"
          ],
          "correct": 1,
          "explanation": "'There are' is used with plural countable nouns ('twenty-five students')."
        },
        {
          "q": "2. _____ a microscope on the science laboratory table.",
          "options": [
            "There is",
            "There are",
            "It have",
            "They are"
          ],
          "correct": 0,
          "explanation": "'There is' is used with singular countable nouns ('a microscope')."
        },
        {
          "q": "3. Are there _____ apples left in the fruit basket?",
          "options": [
            "some",
            "any",
            "a",
            "much"
          ],
          "correct": 1,
          "explanation": "'Any' is standard in plural questions of existence ('Are there any apples?')."
        },
        {
          "q": "4. There _____ any milk left in the refrigerator.",
          "options": [
            "isn't",
            "aren't",
            "haven't",
            "not"
          ],
          "correct": 0,
          "explanation": "'Milk' is uncountable, so it requires singular negative 'isn't'."
        }
      ]
    },
    {
      "id": "a1_g8",
      "number": 8,
      "title": "Grammar Test 8: Quantifiers 'Much' vs 'Many'",
      "badge": "Quantifiers \u2022 A1",
      "instruction": "Choose 'much' or 'many' according to noun countability.",
      "questions": [
        {
          "q": "1. How _____ water do you drink during soccer training?",
          "options": [
            "many",
            "much",
            "any",
            "few"
          ],
          "correct": 1,
          "explanation": "'Much' is used with uncountable nouns like 'water'."
        },
        {
          "q": "2. How _____ books did you borrow from the school library?",
          "options": [
            "much",
            "many",
            "little",
            "any"
          ],
          "correct": 1,
          "explanation": "'Many' is used with plural countable nouns like 'books'."
        },
        {
          "q": "3. We don't have _____ time before the final bell rings.",
          "options": [
            "many",
            "much",
            "some",
            "a"
          ],
          "correct": 1,
          "explanation": "'Time' in this context is uncountable, requiring 'much'."
        },
        {
          "q": "4. There aren't _____ computers available in the lab today.",
          "options": [
            "much",
            "many",
            "little",
            "no"
          ],
          "correct": 1,
          "explanation": "'Computers' is countable plural, taking 'many'."
        }
      ]
    },
    {
      "id": "a1_g9",
      "number": 9,
      "title": "Grammar Test 9: Determiners 'Some' vs 'Any'",
      "badge": "Determiners \u2022 A1",
      "instruction": "Select 'some' or 'any' for affirmative, negative, or interrogative sentences.",
      "questions": [
        {
          "q": "1. Daniel doesn't have _____ pencils in his pencil case.",
          "options": [
            "some",
            "any",
            "no",
            "much"
          ],
          "correct": 1,
          "explanation": "'Any' is used in negative sentences with countable plural nouns."
        },
        {
          "q": "2. Would you like _____ fresh orange juice with breakfast?",
          "options": [
            "any",
            "some",
            "little",
            "few"
          ],
          "correct": 1,
          "explanation": "'Some' is used in polite offers and requests where a 'yes' is anticipated."
        },
        {
          "q": "3. I bought _____ colorful posters to decorate my bedroom wall.",
          "options": [
            "any",
            "some",
            "much",
            "no"
          ],
          "correct": 1,
          "explanation": "'Some' is used in affirmative plural statements."
        },
        {
          "q": "4. Do you have _____ questions about tomorrow's homework?",
          "options": [
            "some",
            "any",
            "much",
            "little"
          ],
          "correct": 1,
          "explanation": "'Any' is the standard determiner in general questions."
        }
      ]
    },
    {
      "id": "a1_g10",
      "number": 10,
      "title": "Grammar Test 10: Demonstratives (This, That, These, Those)",
      "badge": "Demonstratives \u2022 A1",
      "instruction": "Select the correct demonstrative based on distance and number.",
      "questions": [
        {
          "q": "1. Look at _____ birds high up in that tall oak tree!",
          "options": [
            "this",
            "that",
            "these",
            "those"
          ],
          "correct": 3,
          "explanation": "'Those' refers to plural items located far from the speaker."
        },
        {
          "q": "2. _____ notebook in my hand right now contains all my science notes.",
          "options": [
            "This",
            "That",
            "These",
            "Those"
          ],
          "correct": 0,
          "explanation": "'This' refers to a singular item close to or held by the speaker."
        },
        {
          "q": "3. Are _____ your keys on the teacher's desk over there?",
          "options": [
            "this",
            "that",
            "these",
            "those"
          ],
          "correct": 3,
          "explanation": "Plural items located away from the speaker require 'those'."
        },
        {
          "q": "4. _____ shoes I am wearing are very comfortable for running.",
          "options": [
            "This",
            "That",
            "These",
            "Those"
          ],
          "correct": 2,
          "explanation": "'These' refers to plural items close to the speaker."
        }
      ]
    },
    {
      "id": "a1_g11",
      "number": 11,
      "title": "Grammar Test 11: Ability with 'Can' & 'Can't'",
      "badge": "Modals \u2022 A1",
      "instruction": "Choose the correct form of the modal 'can'.",
      "questions": [
        {
          "q": "1. Valentina _____ swim very fast; she won the gold medal.",
          "options": [
            "can",
            "cans",
            "is can",
            "can to"
          ],
          "correct": 0,
          "explanation": "Modals like 'can' never take '-s' or 'to' before the base verb."
        },
        {
          "q": "2. I'm sorry, but I _____ hear you because the music is too loud.",
          "options": [
            "can",
            "can't",
            "not can",
            "am not"
          ],
          "correct": 1,
          "explanation": "'Can't' (cannot) expresses inability in the present."
        },
        {
          "q": "3. _____ you speak French or German?",
          "options": [
            "Can",
            "Do can",
            "Are",
            "Have"
          ],
          "correct": 0,
          "explanation": "Invert modal 'Can' and subject 'you' to ask about ability."
        },
        {
          "q": "4. Birds can fly high, but penguins _____.",
          "options": [
            "can",
            "cans",
            "can't",
            "don't can"
          ],
          "correct": 2,
          "explanation": "'Can't' correctly indicates the contrast in ability."
        }
      ]
    },
    {
      "id": "a1_g12",
      "number": 12,
      "title": "Grammar Test 12: Present Continuous Actions",
      "badge": "Continuous \u2022 A1",
      "instruction": "Select the correct 'be + -ing' form for actions in progress.",
      "questions": [
        {
          "q": "1. Mateo is in the science lab right now. He _____ on a project.",
          "options": [
            "works",
            "is working",
            "worked",
            "work"
          ],
          "correct": 1,
          "explanation": "'Right now' indicates an action in progress, requiring 'is working'."
        },
        {
          "q": "2. Listen! The school choir _____ a beautiful song.",
          "options": [
            "sings",
            "is singing",
            "sing",
            "sang"
          ],
          "correct": 1,
          "explanation": "'Listen!' directs attention to an immediate ongoing event ('is singing')."
        },
        {
          "q": "3. The students _____ for their final exams in the library right now.",
          "options": [
            "are studying",
            "study",
            "studies",
            "is studying"
          ],
          "correct": 0,
          "explanation": "Plural subject 'The students' takes 'are studying'."
        },
        {
          "q": "4. Why _____ you wearing a heavy coat on this hot sunny day?",
          "options": [
            "is",
            "do",
            "are",
            "have"
          ],
          "correct": 2,
          "explanation": "'Are you wearing' is the correct Present Continuous question form."
        }
      ]
    },
    {
      "id": "a1_g13",
      "number": 13,
      "title": "Grammar Test 13: Present Simple vs Present Continuous",
      "badge": "Tense Choice \u2022 A1",
      "instruction": "Distinguish between habitual routines and actions in progress.",
      "questions": [
        {
          "q": "1. I usually _____ jeans, but today I am wearing formal uniform trousers.",
          "options": [
            "wear",
            "am wearing",
            "wears",
            "wearing"
          ],
          "correct": 0,
          "explanation": "'Usually' indicates a general habit requiring Present Simple ('wear')."
        },
        {
          "q": "2. Look outside! It _____ heavily right now.",
          "options": [
            "snows",
            "is snowing",
            "snowed",
            "snow"
          ],
          "correct": 1,
          "explanation": "'Right now' calls for Present Continuous ('is snowing')."
        },
        {
          "q": "3. Water _____ at 100 degrees Celsius.",
          "options": [
            "boils",
            "is boiling",
            "boil",
            "boiled"
          ],
          "correct": 0,
          "explanation": "Scientific facts and universal truths always use Present Simple ('boils')."
        },
        {
          "q": "4. Diego usually rides his bike, but today he _____ the bus.",
          "options": [
            "takes",
            "is taking",
            "take",
            "took"
          ],
          "correct": 1,
          "explanation": "'Today' signals a temporary departure from routine, taking Present Continuous."
        }
      ]
    },
    {
      "id": "a1_g14",
      "number": 14,
      "title": "Grammar Test 14: Prepositions of Place",
      "badge": "Prepositions \u2022 A1",
      "instruction": "Choose the correct spatial preposition.",
      "questions": [
        {
          "q": "1. The teacher's desk is located _____ the front of the classroom.",
          "options": [
            "at",
            "on",
            "in",
            "by"
          ],
          "correct": 0,
          "explanation": "The fixed spatial phrase is 'at the front of' or 'at the back of'."
        },
        {
          "q": "2. There is a colorful poster _____ the classroom wall.",
          "options": [
            "on",
            "in",
            "at",
            "under"
          ],
          "correct": 0,
          "explanation": "Use 'on' for surfaces like walls, ceilings, and tables ('on the wall')."
        },
        {
          "q": "3. The cat is sleeping peacefully _____ the kitchen table.",
          "options": [
            "under",
            "between",
            "among",
            "through"
          ],
          "correct": 0,
          "explanation": "'Under' indicates a position directly below something."
        },
        {
          "q": "4. Our school is situated _____ the library and the municipal sports center.",
          "options": [
            "among",
            "between",
            "next",
            "behind"
          ],
          "correct": 1,
          "explanation": "'Between' is used when pinpointing a location in the middle of two distinct points."
        }
      ]
    },
    {
      "id": "a1_g15",
      "number": 15,
      "title": "Grammar Test 15: Imperatives & Direct Commands",
      "badge": "Imperatives \u2022 A1",
      "instruction": "Select the correct base verb form for affirmative or negative commands.",
      "questions": [
        {
          "q": "1. Please _____ quiet in the school library; people are studying.",
          "options": [
            "be",
            "are",
            "being",
            "you be"
          ],
          "correct": 0,
          "explanation": "Imperative sentences start with the base form of the verb ('Be quiet')."
        },
        {
          "q": "2. _____ run in the school corridors; it is dangerous.",
          "options": [
            "No",
            "Don't",
            "Not",
            "Doesn't"
          ],
          "correct": 1,
          "explanation": "Negative imperatives start with 'Don't + base verb' ('Don't run')."
        },
        {
          "q": "3. _____ your textbooks to page 45, please.",
          "options": [
            "Opens",
            "Opening",
            "Open",
            "You open"
          ],
          "correct": 2,
          "explanation": "Use base form 'Open' for direct instructional imperatives."
        },
        {
          "q": "4. _____ forget to submit your lab reports before 3:00 PM.",
          "options": [
            "Don't",
            "Not",
            "No",
            "Aren't"
          ],
          "correct": 0,
          "explanation": "Negative command 'Don't forget'."
        }
      ]
    },
    {
      "id": "a1_g16",
      "number": 16,
      "title": "Grammar Test 16: Past Simple of 'To Be' (Was / Were)",
      "badge": "Past Be \u2022 A1",
      "instruction": "Select 'was' or 'were' according to subject agreement.",
      "questions": [
        {
          "q": "1. Why _____ you late for English class yesterday morning?",
          "options": [
            "was",
            "were",
            "are",
            "did"
          ],
          "correct": 1,
          "explanation": "The past simple of 'be' with pronoun 'you' is 'were'."
        },
        {
          "q": "2. Diego _____ absent from school yesterday because he had a fever.",
          "options": [
            "was",
            "were",
            "is",
            "did"
          ],
          "correct": 0,
          "explanation": "Singular subject 'Diego' (he) takes 'was'."
        },
        {
          "q": "3. The science questions on the test _____ surprisingly easy.",
          "options": [
            "was",
            "were",
            "are",
            "been"
          ],
          "correct": 1,
          "explanation": "Plural subject 'The science questions' takes 'were'."
        },
        {
          "q": "4. We _____ at the municipal stadium last Saturday cheering for our team.",
          "options": [
            "was",
            "were",
            "been",
            "are"
          ],
          "correct": 1,
          "explanation": "Subject 'We' takes 'were'."
        }
      ]
    },
    {
      "id": "a1_g17",
      "number": 17,
      "title": "Grammar Test 17: Position of Adverbs of Frequency",
      "badge": "Word Order \u2022 A1",
      "instruction": "Choose the option with the correct placement of frequency adverbs.",
      "questions": [
        {
          "q": "1. Camila _____ early for her morning classes.",
          "options": [
            "is always",
            "always is",
            "always be",
            "be always"
          ],
          "correct": 0,
          "explanation": "Adverbs of frequency follow the verb 'to be' ('is always early')."
        },
        {
          "q": "2. Lucas _____ cereal for breakfast before heading to school.",
          "options": [
            "eats usually",
            "usually eats",
            "usually eat",
            "is usually eat"
          ],
          "correct": 1,
          "explanation": "Adverbs of frequency precede main action verbs ('usually eats')."
        },
        {
          "q": "3. They _____ late for sports practice on weekends.",
          "options": [
            "are never",
            "never are",
            "never be",
            "be never"
          ],
          "correct": 0,
          "explanation": "Frequency adverb follows 'are': 'are never late'."
        },
        {
          "q": "4. I _____ do my homework right after dinner.",
          "options": [
            "often",
            "am often",
            "often am",
            "often do be"
          ],
          "correct": 0,
          "explanation": "Frequency adverb 'often' precedes main verb 'do'."
        }
      ]
    },
    {
      "id": "a1_g18",
      "number": 18,
      "title": "Grammar Test 18: Question Words (Wh- Words)",
      "badge": "Questions \u2022 A1",
      "instruction": "Select the correct interrogative word.",
      "questions": [
        {
          "q": "1. _____ is your favorite school subject, Art or Music?",
          "options": [
            "Which",
            "Who",
            "Where",
            "When"
          ],
          "correct": 0,
          "explanation": "'Which' is used when choosing from a limited set of alternatives."
        },
        {
          "q": "2. _____ left their red umbrella in the hallway?",
          "options": [
            "Who",
            "Whose",
            "Which",
            "What"
          ],
          "correct": 0,
          "explanation": "'Who' inquires about the person performing the action."
        },
        {
          "q": "3. _____ do you practice basketball, on Mondays or Tuesdays?",
          "options": [
            "When",
            "Where",
            "Why",
            "Who"
          ],
          "correct": 0,
          "explanation": "'When' asks about time or day."
        },
        {
          "q": "4. _____ is the principal's office located in the school building?",
          "options": [
            "Where",
            "When",
            "Which",
            "Why"
          ],
          "correct": 0,
          "explanation": "'Where' inquires about physical location."
        }
      ]
    },
    {
      "id": "a1_g19",
      "number": 19,
      "title": "Grammar Test 19: Basic Conjunctions (And, But, Because, So)",
      "badge": "Connectors \u2022 A1",
      "instruction": "Choose the conjunction that correctly links both ideas.",
      "questions": [
        {
          "q": "1. Mateo studied hard for the test, _____ he earned the highest grade in the class.",
          "options": [
            "so",
            "because",
            "but",
            "or"
          ],
          "correct": 0,
          "explanation": "'So' expresses consequence or result: he studied, so he earned a high grade."
        },
        {
          "q": "2. I love swimming, _____ I don't enjoy running in cold weather.",
          "options": [
            "and",
            "but",
            "so",
            "because"
          ],
          "correct": 1,
          "explanation": "'But' introduces a contrast between two ideas."
        },
        {
          "q": "3. Sarah stayed home yesterday _____ she had a severe headache.",
          "options": [
            "because",
            "so",
            "but",
            "and"
          ],
          "correct": 0,
          "explanation": "'Because' introduces the cause or reason."
        },
        {
          "q": "4. We packed our notebooks, textbooks, _____ pencil cases.",
          "options": [
            "and",
            "so",
            "because",
            "but"
          ],
          "correct": 0,
          "explanation": "'And' joins parallel items in a list."
        }
      ]
    },
    {
      "id": "a1_g20",
      "number": 20,
      "title": "Grammar Test 20: Regular & Irregular Plural Nouns",
      "badge": "Nouns \u2022 A1",
      "instruction": "Select the correct plural form of each noun.",
      "questions": [
        {
          "q": "1. Several _____ were playing soccer on the school field.",
          "options": [
            "children",
            "childs",
            "childrens",
            "child"
          ],
          "correct": 0,
          "explanation": "The irregular plural of 'child' is 'children'."
        },
        {
          "q": "2. Remember to brush your _____ before going to bed.",
          "options": [
            "tooths",
            "teeth",
            "teeths",
            "toothend"
          ],
          "correct": 1,
          "explanation": "The irregular plural of 'tooth' is 'teeth'."
        },
        {
          "q": "3. The chef used three sharp _____ to slice the fresh vegetables.",
          "options": [
            "knifes",
            "knives",
            "knifess",
            "knife"
          ],
          "correct": 1,
          "explanation": "Nouns ending in '-fe' like 'knife' form plurals with '-ves' ('knives')."
        },
        {
          "q": "4. A group of _____ gathered to watch the robotics demonstration.",
          "options": [
            "peoples",
            "people",
            "personses",
            "person"
          ],
          "correct": 1,
          "explanation": "The standard plural of 'person' is 'people'."
        }
      ]
    }
  ],
  "a2": [
    {
      "id": "a2_g1",
      "number": 1,
      "title": "Grammar Test 1: Past Simple Regular Verbs (-ed)",
      "badge": "Past \u2022 A2",
      "instruction": "Select the correct regular past simple form.",
      "questions": [
        {
          "q": "1. Last Friday, our class _____ the regional technology museum.",
          "options": [
            "visited",
            "visit",
            "visiting",
            "were visit"
          ],
          "correct": 0,
          "explanation": "'Visit' forms its past simple regularly by adding '-ed' ('visited')."
        },
        {
          "q": "2. Mateo _____ soccer with his neighborhood friends for two hours yesterday.",
          "options": [
            "play",
            "played",
            "playing",
            "plays"
          ],
          "correct": 1,
          "explanation": "Regular past simple of 'play' is 'played'."
        },
        {
          "q": "3. The students _____ their science experiment before the bell rang.",
          "options": [
            "completed",
            "complete",
            "completing",
            "did complete"
          ],
          "correct": 0,
          "explanation": "'Complete' ends in 'e', so it takes '-d' ('completed')."
        },
        {
          "q": "4. We _____ for our turn patiently in the examination lobby.",
          "options": [
            "waited",
            "wait",
            "waiting",
            "were wait"
          ],
          "correct": 0,
          "explanation": "Regular past of 'wait' is 'waited'."
        }
      ]
    },
    {
      "id": "a2_g2",
      "number": 2,
      "title": "Grammar Test 2: Past Simple Irregular Verbs",
      "badge": "Irregulars \u2022 A2",
      "instruction": "Choose the correct irregular past verb.",
      "questions": [
        {
          "q": "1. Sofia _____ a brilliant essay about marine ecosystems last night.",
          "options": [
            "wrote",
            "writed",
            "written",
            "write"
          ],
          "correct": 0,
          "explanation": "The past simple of 'write' is irregular: 'wrote'."
        },
        {
          "q": "2. We _____ the total solar eclipse from the school observatory.",
          "options": [
            "saw",
            "seed",
            "seen",
            "seeing"
          ],
          "correct": 0,
          "explanation": "The past simple of 'see' is 'saw'."
        },
        {
          "q": "3. Diego _____ his new bicycle to school on Monday morning.",
          "options": [
            "rode",
            "ride",
            "ridden",
            "rided"
          ],
          "correct": 0,
          "explanation": "The past simple of 'ride' is 'rode'."
        },
        {
          "q": "4. They _____ delicious sandwiches and juice for the school picnic.",
          "options": [
            "brought",
            "bringed",
            "brang",
            "bringing"
          ],
          "correct": 0,
          "explanation": "The irregular past simple of 'bring' is 'brought'."
        }
      ]
    },
    {
      "id": "a2_g3",
      "number": 3,
      "title": "Grammar Test 3: Past Questions & Negatives with 'Did'",
      "badge": "Syntax \u2022 A2",
      "instruction": "Select the correct form using auxiliary 'did' / 'didn't'.",
      "questions": [
        {
          "q": "1. Carlos didn't _____ to the cinema yesterday because he had homework.",
          "options": [
            "go",
            "went",
            "gone",
            "going"
          ],
          "correct": 0,
          "explanation": "After auxiliary 'didn't', the main verb remains in bare base form ('didn't go')."
        },
        {
          "q": "2. _____ you watch the national soccer tournament final last Sunday?",
          "options": [
            "Did",
            "Do",
            "Were",
            "Have"
          ],
          "correct": 0,
          "explanation": "'Did' is the past auxiliary used to form past simple questions."
        },
        {
          "q": "3. What time did your parents _____ home last night?",
          "options": [
            "arrive",
            "arrived",
            "arriving",
            "arrives"
          ],
          "correct": 0,
          "explanation": "After question auxiliary 'did', use base form 'arrive'."
        },
        {
          "q": "4. We _____ see any dolphins during our boat excursion.",
          "options": [
            "didn't",
            "weren't",
            "don't",
            "no"
          ],
          "correct": 0,
          "explanation": "'Didn't' is the past simple negative auxiliary for main action verbs."
        }
      ]
    },
    {
      "id": "a2_g4",
      "number": 4,
      "title": "Grammar Test 4: Past Continuous (Was / Were + -ing)",
      "badge": "Continuous \u2022 A2",
      "instruction": "Choose the correct past continuous form.",
      "questions": [
        {
          "q": "1. At 8:00 PM yesterday, I _____ my science homework.",
          "options": [
            "was doing",
            "were doing",
            "am doing",
            "did do"
          ],
          "correct": 0,
          "explanation": "First-person singular 'I' takes 'was doing' for an action in progress in the past."
        },
        {
          "q": "2. Lucas and Sarah _____ basketball in the court when the rain started.",
          "options": [
            "were playing",
            "was playing",
            "are playing",
            "played"
          ],
          "correct": 0,
          "explanation": "Plural subject 'Lucas and Sarah' takes 'were playing'."
        },
        {
          "q": "3. What _____ you doing when the fire alarm sounded?",
          "options": [
            "were",
            "was",
            "did",
            "are"
          ],
          "correct": 0,
          "explanation": "'Were you doing' is the correct past continuous question form."
        },
        {
          "q": "4. The teacher _____ the grammar rule on the whiteboard when the lights flickered.",
          "options": [
            "was writing",
            "were writing",
            "wrote",
            "is writing"
          ],
          "correct": 0,
          "explanation": "Singular subject 'The teacher' takes 'was writing'."
        }
      ]
    },
    {
      "id": "a2_g5",
      "number": 5,
      "title": "Grammar Test 5: Past Simple vs Continuous with 'When' & 'While'",
      "badge": "Narratives \u2022 A2",
      "instruction": "Select the correct tense combination for interrupted past actions.",
      "questions": [
        {
          "q": "1. While we _____ for the school bus, it suddenly started to pour rain.",
          "options": [
            "were waiting",
            "waited",
            "are waiting",
            "wait"
          ],
          "correct": 0,
          "explanation": "'While' introduces the ongoing background action (Past Continuous: 'were waiting')."
        },
        {
          "q": "2. Diego dropped his smartphone while he _____ up the stairs.",
          "options": [
            "was running",
            "ran",
            "runs",
            "is running"
          ],
          "correct": 0,
          "explanation": "The background action in progress takes Past Continuous ('was running')."
        },
        {
          "q": "3. The phone rang while we _____ dinner together as a family.",
          "options": [
            "were having",
            "had",
            "have",
            "are having"
          ],
          "correct": 0,
          "explanation": "'Were having' describes the continuous activity interrupted by the call."
        },
        {
          "q": "4. I was reading a book when my best friend _____ on the front door.",
          "options": [
            "knocked",
            "was knocking",
            "knocks",
            "is knocking"
          ],
          "correct": 0,
          "explanation": "A sudden past action interrupting an ongoing event takes Past Simple ('knocked')."
        }
      ]
    },
    {
      "id": "a2_g6",
      "number": 6,
      "title": "Grammar Test 6: Comparative Adjectives (-er / more)",
      "badge": "Comparatives \u2022 A2",
      "instruction": "Select the correct comparative structure.",
      "questions": [
        {
          "q": "1. Traveling by train is usually much _____ than taking an expensive domestic flight.",
          "options": [
            "cheaper",
            "more cheap",
            "cheapest",
            "as cheap"
          ],
          "correct": 0,
          "explanation": "One-syllable adjectives form comparatives with '-er' ('cheaper')."
        },
        {
          "q": "2. High-speed fiber internet is significantly _____ than old dial-up connections.",
          "options": [
            "faster",
            "more fast",
            "fastest",
            "as fast"
          ],
          "correct": 0,
          "explanation": "Short adjective 'fast' becomes 'faster'."
        },
        {
          "q": "3. Quantum physics is much _____ than basic school arithmetic.",
          "options": [
            "more complicated",
            "complicateder",
            "most complicated",
            "as complicated"
          ],
          "correct": 0,
          "explanation": "Multi-syllable adjectives take 'more' in comparatives ('more complicated')."
        },
        {
          "q": "4. My new laptop battery lasts longer; it is much _____ than my old one.",
          "options": [
            "better",
            "gooder",
            "more good",
            "best"
          ],
          "correct": 0,
          "explanation": "The irregular comparative of 'good' is 'better'."
        }
      ]
    },
    {
      "id": "a2_g7",
      "number": 7,
      "title": "Grammar Test 7: Superlative Adjectives (-est / most)",
      "badge": "Superlatives \u2022 A2",
      "instruction": "Select the correct superlative form.",
      "questions": [
        {
          "q": "1. This is the _____ documentary about marine biodiversity I have ever seen.",
          "options": [
            "most fascinating",
            "more fascinating",
            "fascinatingest",
            "fascinating"
          ],
          "correct": 0,
          "explanation": "Superlative of long adjectives is formed with 'the most' ('the most fascinating')."
        },
        {
          "q": "2. Mount Everest is the _____ mountain peak above sea level on our planet.",
          "options": [
            "highest",
            "most high",
            "higher",
            "high"
          ],
          "correct": 0,
          "explanation": "Short adjective 'high' takes '-est' ('the highest')."
        },
        {
          "q": "3. That was the _____ score our school soccer team has recorded this season.",
          "options": [
            "worst",
            "baddest",
            "more bad",
            "worse"
          ],
          "correct": 0,
          "explanation": "The irregular superlative of 'bad' is 'worst'."
        },
        {
          "q": "4. Sofia is the _____ student in our advanced robotics coding club.",
          "options": [
            "youngest",
            "most young",
            "younger",
            "more young"
          ],
          "correct": 0,
          "explanation": "Single-syllable 'young' takes '-est' ('youngest')."
        }
      ]
    },
    {
      "id": "a2_g8",
      "number": 8,
      "title": "Grammar Test 8: Comparisons of Equality with 'As... As'",
      "badge": "Equality \u2022 A2",
      "instruction": "Choose the correct construction for equal comparison.",
      "questions": [
        {
          "q": "1. Lucas is not as tall _____ his older brother Gabriel.",
          "options": [
            "as",
            "than",
            "so",
            "like"
          ],
          "correct": 0,
          "explanation": "The standard comparative formula for equality/inequality is 'as + adj + as'."
        },
        {
          "q": "2. Riding a bicycle in the park is just as enjoyable _____ skateboarding.",
          "options": [
            "as",
            "than",
            "to",
            "that"
          ],
          "correct": 0,
          "explanation": "'Just as enjoyable as' compares two equal experiences."
        },
        {
          "q": "3. Today's temperature is not as cold as it _____ yesterday morning.",
          "options": [
            "was",
            "were",
            "is",
            "did"
          ],
          "correct": 0,
          "explanation": "Singular subject 'it' in the past takes 'was'."
        },
        {
          "q": "4. This chemistry quiz was as difficult _____ the mid-term exam.",
          "options": [
            "as",
            "than",
            "like",
            "of"
          ],
          "correct": 0,
          "explanation": "Complete the correlative pair with 'as'."
        }
      ]
    },
    {
      "id": "a2_g9",
      "number": 9,
      "title": "Grammar Test 9: Future Plans with 'Be Going to'",
      "badge": "Future \u2022 A2",
      "instruction": "Select the correct form of 'be going to' for planned actions.",
      "questions": [
        {
          "q": "1. Look at those dark thunderclouds! It _____ rain at any minute.",
          "options": [
            "is going to",
            "will to",
            "going to",
            "is to go"
          ],
          "correct": 0,
          "explanation": "'Be going to' is used when present visible evidence indicates an impending event."
        },
        {
          "q": "2. Camila _____ study computer engineering at the national university next year.",
          "options": [
            "is going to",
            "are going to",
            "goes to",
            "will to"
          ],
          "correct": 0,
          "explanation": "Singular subject 'Camila' takes 'is going to study'."
        },
        {
          "q": "3. We _____ visit our grandparents in the countryside this coming weekend.",
          "options": [
            "are going to",
            "is going to",
            "will to",
            "going"
          ],
          "correct": 0,
          "explanation": "Plural subject 'We' takes 'are going to'."
        },
        {
          "q": "4. What _____ you going to do after school today?",
          "options": [
            "are",
            "do",
            "will",
            "is"
          ],
          "correct": 0,
          "explanation": "The question form is 'Are you going to do'."
        }
      ]
    },
    {
      "id": "a2_g10",
      "number": 10,
      "title": "Grammar Test 10: Future with 'Will' & 'Won't'",
      "badge": "Future \u2022 A2",
      "instruction": "Choose 'will' or 'won't' for predictions, offers, and decisions.",
      "questions": [
        {
          "q": "1. Don't worry about the presentation; I promise I _____ help you practice.",
          "options": [
            "will",
            "am",
            "going",
            "must"
          ],
          "correct": 0,
          "explanation": "Promises and spontaneous offers use modal 'will'."
        },
        {
          "q": "2. In fifty years, electric vehicles _____ completely replace gasoline cars.",
          "options": [
            "will",
            "are",
            "have",
            "must to"
          ],
          "correct": 0,
          "explanation": "General future predictions based on opinion use 'will'."
        },
        {
          "q": "3. I'm feeling quite exhausted; I think I _____ go to bed early tonight.",
          "options": [
            "will",
            "am going",
            "must to",
            "can"
          ],
          "correct": 0,
          "explanation": "Spontaneous decisions made at the moment of speech take 'will'."
        },
        {
          "q": "4. We _____ arrive late if we catch the express train right now.",
          "options": [
            "won't",
            "will not to",
            "aren't",
            "don't will"
          ],
          "correct": 0,
          "explanation": "'Won't' (will not) expresses negative future certainty."
        }
      ]
    },
    {
      "id": "a2_g11",
      "number": 11,
      "title": "Grammar Test 11: First Conditional (Real Possibilities)",
      "badge": "Conditionals \u2022 A2",
      "instruction": "Select the correct combination: If + Present Simple, will + base verb.",
      "questions": [
        {
          "q": "1. If it rains tomorrow morning, we _____ our soccer match indoors.",
          "options": [
            "will play",
            "play",
            "would play",
            "played"
          ],
          "correct": 0,
          "explanation": "First conditional result clause takes 'will + base verb' ('will play')."
        },
        {
          "q": "2. If you _____ your homework now, you will have free time tonight.",
          "options": [
            "finish",
            "will finish",
            "finished",
            "finishing"
          ],
          "correct": 0,
          "explanation": "The 'if' conditional clause uses Present Simple ('finish')."
        },
        {
          "q": "3. The teacher will be very proud if our team _____ the science fair.",
          "options": [
            "wins",
            "will win",
            "won",
            "is winning"
          ],
          "correct": 0,
          "explanation": "Subject 'our team' (it) takes 3rd person singular Present Simple 'wins'."
        },
        {
          "q": "4. If Diego doesn't hurry, he _____ miss the school bus.",
          "options": [
            "will",
            "would",
            "is",
            "must to"
          ],
          "correct": 0,
          "explanation": "The result of the condition uses 'will'."
        }
      ]
    },
    {
      "id": "a2_g12",
      "number": 12,
      "title": "Grammar Test 12: Modals of Obligation (Must / Have to)",
      "badge": "Modals \u2022 A2",
      "instruction": "Choose the correct modal denoting obligation or necessity.",
      "questions": [
        {
          "q": "1. You _____ wear a safety helmet when riding an electric scooter.",
          "options": [
            "must",
            "can",
            "may",
            "might"
          ],
          "correct": 0,
          "explanation": "'Must' expresses official safety rules and strong obligation."
        },
        {
          "q": "2. Students _____ to wear formal school uniforms on assembly days.",
          "options": [
            "have",
            "must",
            "should",
            "ought"
          ],
          "correct": 0,
          "explanation": "The semi-modal structure is 'have to wear'."
        },
        {
          "q": "3. Carlos didn't go out last night because he _____ finish a major paper.",
          "options": [
            "had to",
            "must",
            "has to",
            "should to"
          ],
          "correct": 0,
          "explanation": "'Had to' is the past obligation form of both 'must' and 'have to'."
        },
        {
          "q": "4. Tomorrow is Sunday, so I _____ wake up early.",
          "options": [
            "don't have to",
            "mustn't",
            "haven't to",
            "not have to"
          ],
          "correct": 0,
          "explanation": "'Don't have to' expresses absence of obligation (it is not necessary)."
        }
      ]
    },
    {
      "id": "a2_g13",
      "number": 13,
      "title": "Grammar Test 13: Modals of Advice (Should / Shouldn't)",
      "badge": "Advice \u2022 A2",
      "instruction": "Select 'should' or 'shouldn't' to give helpful advice.",
      "questions": [
        {
          "q": "1. You look exhausted; you _____ sleep at least eight hours tonight.",
          "options": [
            "should",
            "should to",
            "must to",
            "ought"
          ],
          "correct": 0,
          "explanation": "'Should + base verb' offers constructive advice."
        },
        {
          "q": "2. Teenagers _____ spend excessive hours scrolling social media before bedtime.",
          "options": [
            "shouldn't",
            "don't should",
            "mustn't to",
            "ought not"
          ],
          "correct": 0,
          "explanation": "'Shouldn't' advises against unhelpful or unhealthy actions."
        },
        {
          "q": "3. If you have a severe toothache, you _____ visit a dentist promptly.",
          "options": [
            "should",
            "might to",
            "can to",
            "shall to"
          ],
          "correct": 0,
          "explanation": "'Should' provides the appropriate medical recommendation."
        },
        {
          "q": "4. Which book _____ I read first for my literature assignment?",
          "options": [
            "should",
            "must to",
            "have",
            "am"
          ],
          "correct": 0,
          "explanation": "'Should I read' is the standard polite inquiry asking for guidance."
        }
      ]
    },
    {
      "id": "a2_g14",
      "number": 14,
      "title": "Grammar Test 14: Present Perfect (Ever & Never)",
      "badge": "Experiences \u2022 A2",
      "instruction": "Select the correct Present Perfect form for past experiences.",
      "questions": [
        {
          "q": "1. Have you _____ traveled abroad on an international flight?",
          "options": [
            "ever",
            "never",
            "yet",
            "already"
          ],
          "correct": 0,
          "explanation": "'Ever' is used in questions asking if an event has occurred in one's life."
        },
        {
          "q": "2. Mateo has _____ tasted sushi before; today will be his first time.",
          "options": [
            "never",
            "ever",
            "yet",
            "already"
          ],
          "correct": 0,
          "explanation": "'Never' indicates zero occurrences in life experience."
        },
        {
          "q": "3. We _____ to Cartagena three times, and each trip was memorable.",
          "options": [
            "have been",
            "were",
            "are been",
            "went"
          ],
          "correct": 0,
          "explanation": "'Have been' expresses indefinite past visits up to the present."
        },
        {
          "q": "4. Sarah has already _____ her final history project presentation.",
          "options": [
            "completed",
            "complete",
            "completing",
            "completes"
          ],
          "correct": 0,
          "explanation": "Present Perfect uses 'has + past participle' ('completed')."
        }
      ]
    },
    {
      "id": "a2_g15",
      "number": 15,
      "title": "Grammar Test 15: Present Perfect vs Past Simple",
      "badge": "Tense Choice \u2022 A2",
      "instruction": "Distinguish between specified past time and indefinite experiences.",
      "questions": [
        {
          "q": "1. I _____ a famous astronaut when I visited NASA three years ago.",
          "options": [
            "met",
            "have met",
            "meet",
            "was meeting"
          ],
          "correct": 0,
          "explanation": "A specific past time marker ('three years ago') requires Past Simple ('met')."
        },
        {
          "q": "2. Sofia _____ in this neighborhood since she was five years old.",
          "options": [
            "has lived",
            "lived",
            "lives",
            "is living"
          ],
          "correct": 0,
          "explanation": "'Since' with ongoing duration up to now requires Present Perfect ('has lived')."
        },
        {
          "q": "3. Last weekend, our family _____ camping in the mountains.",
          "options": [
            "went",
            "have gone",
            "has been",
            "go"
          ],
          "correct": 0,
          "explanation": "Definite past time 'last weekend' takes Past Simple 'went'."
        },
        {
          "q": "4. Look! Lucas _____ his first robot in the science workshop.",
          "options": [
            "has built",
            "built",
            "builds",
            "was built"
          ],
          "correct": 0,
          "explanation": "Recent completed action with present visual impact takes Present Perfect."
        }
      ]
    },
    {
      "id": "a2_g16",
      "number": 16,
      "title": "Grammar Test 16: Defining Relative Pronouns",
      "badge": "Relative Clauses \u2022 A2",
      "instruction": "Choose 'who', 'which', 'that', or 'where' based on the antecedent.",
      "questions": [
        {
          "q": "1. The teacher _____ coaches our debate team is very encouraging.",
          "options": [
            "who",
            "which",
            "where",
            "whose"
          ],
          "correct": 0,
          "explanation": "'Who' refers to human subjects ('The teacher who coaches...')."
        },
        {
          "q": "2. My father bought a new tablet _____ has an extraordinary battery life.",
          "options": [
            "which",
            "who",
            "where",
            "whose"
          ],
          "correct": 0,
          "explanation": "'Which' (or 'that') refers to non-human objects and gadgets."
        },
        {
          "q": "3. That is the municipal library _____ we study for our final exams.",
          "options": [
            "where",
            "which",
            "who",
            "that"
          ],
          "correct": 0,
          "explanation": "'Where' refers to the geographical place of an activity."
        },
        {
          "q": "4. I met a girl _____ brother is a professional soccer goalkeeper.",
          "options": [
            "whose",
            "who",
            "which",
            "where"
          ],
          "correct": 0,
          "explanation": "'Whose' is the relative possessive pronoun."
        }
      ]
    },
    {
      "id": "a2_g17",
      "number": 17,
      "title": "Grammar Test 17: Gerunds after Verbs of Preference",
      "badge": "Gerunds \u2022 A2",
      "instruction": "Select the correct gerund (-ing) or infinitive complement.",
      "questions": [
        {
          "q": "1. Santiago really enjoys _____ science fiction novels during vacation.",
          "options": [
            "reading",
            "to read",
            "read",
            "reads"
          ],
          "correct": 0,
          "explanation": "The verb 'enjoy' takes a gerund complement ('enjoys reading')."
        },
        {
          "q": "2. Camila doesn't mind _____ her younger brother with his math homework.",
          "options": [
            "helping",
            "to help",
            "help",
            "helped"
          ],
          "correct": 0,
          "explanation": "The expression 'not mind' is followed by a gerund ('not mind helping')."
        },
        {
          "q": "3. Many teenagers hate _____ up early on cold winter mornings.",
          "options": [
            "waking",
            "wake",
            "woke",
            "woken"
          ],
          "correct": 0,
          "explanation": "'Hate' takes a gerund to express ongoing emotional aversion."
        },
        {
          "q": "4. He avoids _____ sugary soda drinks before athletic training.",
          "options": [
            "drinking",
            "to drink",
            "drink",
            "drank"
          ],
          "correct": 0,
          "explanation": "'Avoid' is followed exclusively by a gerund ('avoids drinking')."
        }
      ]
    },
    {
      "id": "a2_g18",
      "number": 18,
      "title": "Grammar Test 18: Infinitives of Purpose ('to + verb')",
      "badge": "Purpose \u2022 A2",
      "instruction": "Choose 'to + base verb' to express the reason for an action.",
      "questions": [
        {
          "q": "1. Mateo went to the public library _____ study for his biology test.",
          "options": [
            "to",
            "for",
            "because",
            "so"
          ],
          "correct": 0,
          "explanation": "An infinitive of purpose uses 'to + base verb' ('to study')."
        },
        {
          "q": "2. I opened the window _____ let some fresh morning air into the room.",
          "options": [
            "to",
            "for to",
            "for",
            "in"
          ],
          "correct": 0,
          "explanation": "'To let' indicates purpose/intention."
        },
        {
          "q": "3. Sofia bought specialized running shoes _____ participate in the marathon.",
          "options": [
            "to",
            "for",
            "so",
            "because"
          ],
          "correct": 0,
          "explanation": "Use 'to participate' to state the objective."
        },
        {
          "q": "4. We logged into the platform _____ check our semester grades.",
          "options": [
            "to",
            "for",
            "with",
            "in order"
          ],
          "correct": 0,
          "explanation": "'To check' correctly states the purpose of logging in."
        }
      ]
    },
    {
      "id": "a2_g19",
      "number": 19,
      "title": "Grammar Test 19: Past Habits with 'Used to'",
      "badge": "Habits \u2022 A2",
      "instruction": "Select the correct form of 'used to' for discontinued past states/habits.",
      "questions": [
        {
          "q": "1. I _____ play basketball every afternoon when I was in primary school.",
          "options": [
            "used to",
            "use to",
            "was used to",
            "used"
          ],
          "correct": 0,
          "explanation": "'Used to + base verb' expresses past habitual activities no longer done."
        },
        {
          "q": "2. Did you _____ live in Barranquilla before moving to the capital?",
          "options": [
            "use to",
            "used to",
            "used",
            "using to"
          ],
          "correct": 0,
          "explanation": "In past questions with 'Did', use bare base form 'use to' ('Did you use to live?')."
        },
        {
          "q": "3. Lucas didn't _____ like broccoli, but now he loves fresh vegetables.",
          "options": [
            "use to",
            "used to",
            "used",
            "using"
          ],
          "correct": 0,
          "explanation": "Negative past questions/statements with 'didn't' take 'use to'."
        },
        {
          "q": "4. There _____ be an ancient cinema on this corner fifty years ago.",
          "options": [
            "used to",
            "use to",
            "was used to",
            "used"
          ],
          "correct": 0,
          "explanation": "'There used to be' denotes a discontinued past existence."
        }
      ]
    },
    {
      "id": "a2_g20",
      "number": 20,
      "title": "Grammar Test 20: Basic Question Tags",
      "badge": "Tags \u2022 A2",
      "instruction": "Select the matching question tag to confirm information.",
      "questions": [
        {
          "q": "1. You haven't seen my wireless headphones anywhere, _____ you?",
          "options": [
            "have",
            "haven't",
            "did",
            "do"
          ],
          "correct": 0,
          "explanation": "A negative statement ('haven't seen') takes an affirmative tag ('have you?')."
        },
        {
          "q": "2. Sofia plays the violin exceptionally well, _____ she?",
          "options": [
            "doesn't",
            "isn't",
            "does",
            "don't"
          ],
          "correct": 0,
          "explanation": "Affirmative Present Simple with 'she' takes negative tag 'doesn't she?'."
        },
        {
          "q": "3. The math exam wasn't particularly difficult, _____ it?",
          "options": [
            "was",
            "wasn't",
            "is",
            "did"
          ],
          "correct": 0,
          "explanation": "Negative past statement ('wasn't') takes affirmative tag 'was it?'."
        },
        {
          "q": "4. They will arrive before the ceremony begins, _____ they?",
          "options": [
            "won't",
            "will",
            "aren't",
            "don't"
          ],
          "correct": 0,
          "explanation": "Affirmative 'will' takes negative tag 'won't they?'."
        }
      ]
    }
  ],
  "b1": [
    {
      "id": "b1_g1",
      "number": 1,
      "title": "Grammar Test 1: Second Conditional (Hypothetical Present/Future)",
      "badge": "Conditionals \u2022 B1",
      "instruction": "Select the correct Second Conditional verb forms (If + Past Simple, would + base verb).",
      "questions": [
        {
          "q": "1. If our school _____ solar panels on the roof, we would reduce carbon emissions by 40%.",
          "options": [
            "installed",
            "installs",
            "had installed",
            "will install"
          ],
          "correct": 0,
          "explanation": "Second Conditional condition clause requires Past Simple ('installed')."
        },
        {
          "q": "2. If I had more leisure time, I _____ learn to program mobile applications.",
          "options": [
            "would",
            "will",
            "can",
            "shall"
          ],
          "correct": 0,
          "explanation": "Hypothetical result clause requires modal 'would + base verb'."
        },
        {
          "q": "3. What would you do if you _____ a wallet containing cash in the corridor?",
          "options": [
            "found",
            "find",
            "have found",
            "had found"
          ],
          "correct": 0,
          "explanation": "The 'if' clause in Second Conditional takes Past Simple ('found')."
        },
        {
          "q": "4. If Diego _____ taller, he would definitely play center on the basketball varsity team.",
          "options": [
            "were",
            "was to be",
            "is",
            "would be"
          ],
          "correct": 0,
          "explanation": "Formal subjunctive 'were' is standard in hypothetical conditional clauses ('If Diego were')."
        }
      ]
    },
    {
      "id": "b1_g2",
      "number": 2,
      "title": "Grammar Test 2: Third Conditional (Unreal Past Outcomes)",
      "badge": "Conditionals \u2022 B1",
      "instruction": "Choose the correct Third Conditional combination (If + Past Perfect, would have + past participle).",
      "questions": [
        {
          "q": "1. If Lucia had reviewed her laboratory notes thoroughly, she _____ the chemistry practical test.",
          "options": [
            "would have passed",
            "would pass",
            "passed",
            "will have passed"
          ],
          "correct": 0,
          "explanation": "Third Conditional result clause: 'would have passed'."
        },
        {
          "q": "2. We wouldn't have missed the flight if the airport taxi _____ on schedule.",
          "options": [
            "had arrived",
            "arrived",
            "would arrive",
            "has arrived"
          ],
          "correct": 0,
          "explanation": "Third Conditional condition clause: 'had arrived'."
        },
        {
          "q": "3. If the engineers _____ the structural defect earlier, the bridge wouldn't have collapsed.",
          "options": [
            "had detected",
            "detected",
            "would detect",
            "have detected"
          ],
          "correct": 0,
          "explanation": "Past Perfect 'had detected' sets up the counterfactual past condition."
        },
        {
          "q": "4. What would you have done if you _____ accepted into that prestigious summer academy?",
          "options": [
            "had been",
            "were",
            "would have been",
            "have been"
          ],
          "correct": 0,
          "explanation": "Passive past perfect condition: 'had been accepted'."
        }
      ]
    },
    {
      "id": "b1_g3",
      "number": 3,
      "title": "Grammar Test 3: Present Perfect with Time Markers",
      "badge": "Perfect Tenses \u2022 B1",
      "instruction": "Select the correct time adverbial for Present Perfect clauses.",
      "questions": [
        {
          "q": "1. We haven't received the official laboratory results _____, but we expect them shortly.",
          "options": [
            "yet",
            "already",
            "still",
            "since"
          ],
          "correct": 0,
          "explanation": "'Yet' sits at the end of negative sentences expecting future completion."
        },
        {
          "q": "2. Mateo has been a dedicated member of the robotics club _____ three consecutive years.",
          "options": [
            "for",
            "since",
            "during",
            "from"
          ],
          "correct": 0,
          "explanation": "'For' introduces a duration of time ('for three consecutive years')."
        },
        {
          "q": "3. Sarah has lived in this coastal city _____ 2018.",
          "options": [
            "since",
            "for",
            "from",
            "in"
          ],
          "correct": 0,
          "explanation": "'Since' specifies the exact starting point of an ongoing state."
        },
        {
          "q": "4. The students have _____ completed the final draft of their group project.",
          "options": [
            "already",
            "yet",
            "still",
            "ever"
          ],
          "correct": 0,
          "explanation": "'Already' denotes completion earlier than expected."
        }
      ]
    },
    {
      "id": "b1_g4",
      "number": 4,
      "title": "Grammar Test 4: Present Perfect Continuous (Have been + -ing)",
      "badge": "Aspect \u2022 B1",
      "instruction": "Choose the correct form emphasizing ongoing activity and duration.",
      "questions": [
        {
          "q": "1. Gabriel has _____ for five straight hours; his eyes are visibly strained.",
          "options": [
            "been studying",
            "studied",
            "being studied",
            "study"
          ],
          "correct": 0,
          "explanation": "'Has been studying' highlights the uninterrupted duration up to the present."
        },
        {
          "q": "2. How long _____ you been practicing the classical cello?",
          "options": [
            "have",
            "did",
            "are",
            "had"
          ],
          "correct": 0,
          "explanation": "'Have you been practicing' is the standard Present Perfect Continuous question."
        },
        {
          "q": "3. The environmental committee _____ working on the plastic reduction proposal all morning.",
          "options": [
            "has been",
            "have been",
            "was",
            "is been"
          ],
          "correct": 0,
          "explanation": "Singular collective noun 'committee' takes 'has been working'."
        },
        {
          "q": "4. It _____ raining relentlessly since dawn, causing localized street puddles.",
          "options": [
            "has been",
            "was",
            "is",
            "had"
          ],
          "correct": 0,
          "explanation": "'Has been raining' denotes continuous precipitation up to now."
        }
      ]
    },
    {
      "id": "b1_g5",
      "number": 5,
      "title": "Grammar Test 5: Past Perfect Simple (Had + Past Participle)",
      "badge": "Narratives \u2022 B1",
      "instruction": "Select the verb form indicating actions completed before another past event.",
      "questions": [
        {
          "q": "1. By the time the firefighter arrived, the neighbors _____ the blaze.",
          "options": [
            "had extinguished",
            "extinguished",
            "have extinguished",
            "were extinguished"
          ],
          "correct": 0,
          "explanation": "Past Perfect 'had extinguished' precedes the past reference point 'arrived'."
        },
        {
          "q": "2. Sarah realized she _____ her scientific calculator in the computer lab.",
          "options": [
            "had left",
            "left",
            "has left",
            "was leaving"
          ],
          "correct": 0,
          "explanation": "The action of leaving the calculator occurred before she realized it."
        },
        {
          "q": "3. The train _____ already departed before we reached the central station.",
          "options": [
            "had",
            "has",
            "was",
            "did"
          ],
          "correct": 0,
          "explanation": "'Had already departed' designates prior departure."
        },
        {
          "q": "4. Carlos couldn't enter his apartment because he _____ his keys at school.",
          "options": [
            "had forgotten",
            "forgot",
            "has forgotten",
            "was forgetting"
          ],
          "correct": 0,
          "explanation": "Prior past oversight: 'had forgotten'."
        }
      ]
    },
    {
      "id": "b1_g6",
      "number": 6,
      "title": "Grammar Test 6: Modals of Deduction in Present",
      "badge": "Modals \u2022 B1",
      "instruction": "Select the modal indicating logical certainty, possibility, or impossibility.",
      "questions": [
        {
          "q": "1. Gabriel has studied for six straight hours; he _____ be completely exhausted.",
          "options": [
            "must",
            "can",
            "should to",
            "ought"
          ],
          "correct": 0,
          "explanation": "'Must' conveys strong logical certainty based on obvious evidence."
        },
        {
          "q": "2. That _____ be Carlos's backpack; his is fluorescent green, while this one is dark blue.",
          "options": [
            "can't",
            "must",
            "might",
            "shouldn't"
          ],
          "correct": 0,
          "explanation": "'Can't' expresses logical impossibility based on visual contradiction."
        },
        {
          "q": "3. The teacher isn't in her office; she _____ be attending a meeting in Room 12.",
          "options": [
            "might",
            "must to",
            "can't",
            "ought"
          ],
          "correct": 0,
          "explanation": "'Might' expresses tentative possibility."
        },
        {
          "q": "4. Look at all those trophies in the hallway! Their soccer team _____ be very skilled.",
          "options": [
            "must",
            "can",
            "might not",
            "should to"
          ],
          "correct": 0,
          "explanation": "'Must' denotes positive logical deduction."
        }
      ]
    },
    {
      "id": "b1_g7",
      "number": 7,
      "title": "Grammar Test 7: Modals of Past Speculation & Deduction",
      "badge": "Modals \u2022 B1",
      "instruction": "Select the modal perfect construction for past logical conclusions.",
      "questions": [
        {
          "q": "1. The street is soaking wet; it _____ rained heavily during the night.",
          "options": [
            "must have",
            "can have",
            "should have",
            "must to have"
          ],
          "correct": 0,
          "explanation": "'Must have + past participle' expresses strong logical deduction about a past event."
        },
        {
          "q": "2. Sofia wasn't in class yesterday; she _____ been ill with the flu.",
          "options": [
            "might have",
            "can have",
            "must to have",
            "ought have"
          ],
          "correct": 0,
          "explanation": "'Might have been' expresses plausible past possibility."
        },
        {
          "q": "3. Diego _____ forgotten our appointment; he wrote it down in his calendar.",
          "options": [
            "can't have",
            "must have",
            "should have",
            "might not to"
          ],
          "correct": 0,
          "explanation": "'Can't have forgotten' asserts past impossibility."
        },
        {
          "q": "4. You _____ told me you were visiting town; I would have prepared dinner!",
          "options": [
            "should have",
            "must have",
            "can't have",
            "could to have"
          ],
          "correct": 0,
          "explanation": "'Should have told' expresses a past advisability that was unfulfilled."
        }
      ]
    },
    {
      "id": "b1_g8",
      "number": 8,
      "title": "Grammar Test 8: Passive Voice (Present & Past Simple)",
      "badge": "Passive \u2022 B1",
      "instruction": "Select the passive construction (be + past participle).",
      "questions": [
        {
          "q": "1. The famous Colombian novel 'One Hundred Years of Solitude' _____ in 1967.",
          "options": [
            "was published",
            "published",
            "is published",
            "were published"
          ],
          "correct": 0,
          "explanation": "Singular past passive: 'was published'."
        },
        {
          "q": "2. Millions of plastic bottles _____ globally every single hour.",
          "options": [
            "are discarded",
            "discard",
            "were discarded",
            "is discarded"
          ],
          "correct": 0,
          "explanation": "Present passive with plural subject: 'are discarded'."
        },
        {
          "q": "3. The ancient temple ruins _____ by archaeological researchers last autumn.",
          "options": [
            "were discovered",
            "discovered",
            "was discovered",
            "have discovered"
          ],
          "correct": 0,
          "explanation": "Plural subject 'The ruins' takes 'were discovered'."
        },
        {
          "q": "4. All laboratory instruments _____ sterilized before each experiment.",
          "options": [
            "are",
            "is",
            "have",
            "been"
          ],
          "correct": 0,
          "explanation": "Plural present passive auxiliary 'are sterilized'."
        }
      ]
    },
    {
      "id": "b1_g9",
      "number": 9,
      "title": "Grammar Test 9: Passive Voice with Modals & Future",
      "badge": "Passive \u2022 B1",
      "instruction": "Select the modal/future passive construction (modal + be + past participle).",
      "questions": [
        {
          "q": "1. That abandoned urban warehouse _____ into a youth arts center next year.",
          "options": [
            "will be transformed",
            "will transform",
            "is transformed",
            "transformed"
          ],
          "correct": 0,
          "explanation": "Future passive: 'will be transformed'."
        },
        {
          "q": "2. All mobile devices _____ during the standardized college entrance exam.",
          "options": [
            "must be turned off",
            "must turn off",
            "must to be turned off",
            "should turn off"
          ],
          "correct": 0,
          "explanation": "Modal passive rule: 'must be turned off'."
        },
        {
          "q": "3. The environmental damage can _____ if governments act decisively now.",
          "options": [
            "be mitigated",
            "mitigate",
            "being mitigated",
            "to be mitigate"
          ],
          "correct": 0,
          "explanation": "Modal passive: 'can be mitigated'."
        },
        {
          "q": "4. Applications for the academic scholarship must _____ by May 15.",
          "options": [
            "be submitted",
            "submit",
            "submitting",
            "to submit"
          ],
          "correct": 0,
          "explanation": "Modal passive: 'must be submitted'."
        }
      ]
    },
    {
      "id": "b1_g10",
      "number": 10,
      "title": "Grammar Test 10: Defining vs Non-Defining Relative Clauses",
      "badge": "Relative Clauses \u2022 B1",
      "instruction": "Select the correct relative pronoun, noting punctuation rules.",
      "questions": [
        {
          "q": "1. Dr. Angela Gomez, _____ discovered the enzyme, gave an inspiring keynote address.",
          "options": [
            "who",
            "which",
            "that",
            "whose"
          ],
          "correct": 0,
          "explanation": "In non-defining relative clauses set off by commas, use 'who' for people (never 'that')."
        },
        {
          "q": "2. The solar vehicle _____ our school robotics team built won first place.",
          "options": [
            "which",
            "who",
            "whom",
            "where"
          ],
          "correct": 0,
          "explanation": "'Which' (or 'that') defines the non-human object 'vehicle'."
        },
        {
          "q": "3. Alexander Fleming, _____ discovery revolutionized medicine, was awarded the Nobel Prize.",
          "options": [
            "whose",
            "who",
            "which",
            "whom"
          ],
          "correct": 0,
          "explanation": "'Whose' indicates possession ('whose discovery')."
        },
        {
          "q": "4. The science campus, _____ was inaugurated in 2020, houses cutting-edge laboratories.",
          "options": [
            "which",
            "that",
            "where",
            "what"
          ],
          "correct": 0,
          "explanation": "Non-defining relative clause modifying a building takes 'which'."
        }
      ]
    },
    {
      "id": "b1_g11",
      "number": 11,
      "title": "Grammar Test 11: Reported Speech (Tense Backshift)",
      "badge": "Reported Speech \u2022 B1",
      "instruction": "Select the correct indirect reported verb form.",
      "questions": [
        {
          "q": "1. 'I am studying for my biology finals,' Sofia said. -> Sofia said that she _____ for her finals.",
          "options": [
            "was studying",
            "is studying",
            "had studied",
            "studied"
          ],
          "correct": 0,
          "explanation": "Present continuous ('am studying') shifts back to past continuous ('was studying')."
        },
        {
          "q": "2. 'We completed the laboratory research,' the team said. -> They explained that they _____ the research.",
          "options": [
            "had completed",
            "completed",
            "have completed",
            "would complete"
          ],
          "correct": 0,
          "explanation": "Past simple ('completed') shifts back to past perfect ('had completed')."
        },
        {
          "q": "3. 'I will send the email tonight,' Lucas promised. -> Lucas promised that he _____ the email that night.",
          "options": [
            "would send",
            "will send",
            "sent",
            "had sent"
          ],
          "correct": 0,
          "explanation": "Modal 'will' shifts back to 'would'."
        },
        {
          "q": "4. 'I can solve this calculus problem,' Diego remarked. -> Diego claimed that he _____ the problem.",
          "options": [
            "could solve",
            "can solve",
            "would solve",
            "solved"
          ],
          "correct": 0,
          "explanation": "'Can' shifts back to 'could'."
        }
      ]
    },
    {
      "id": "b1_g12",
      "number": 12,
      "title": "Grammar Test 12: Reported Inquiries & Commands",
      "badge": "Reported Speech \u2022 B1",
      "instruction": "Choose the correct reported question or command syntax.",
      "questions": [
        {
          "q": "1. The teacher told the students _____ make any noise during the examination.",
          "options": [
            "not to",
            "to not",
            "don't",
            "no"
          ],
          "correct": 0,
          "explanation": "Negative reported command: 'told [someone] not to + base verb'."
        },
        {
          "q": "2. She asked me where I _____ during the summer vacation.",
          "options": [
            "had traveled",
            "have traveled",
            "did travel",
            "travel"
          ],
          "correct": 0,
          "explanation": "Reported question uses statement word order and past backshift ('where I had traveled')."
        },
        {
          "q": "3. The supervisor told us _____ our identification badges at all times.",
          "options": [
            "to wear",
            "wear",
            "wearing",
            "that wear"
          ],
          "correct": 0,
          "explanation": "Affirmative command: 'told us to wear'."
        },
        {
          "q": "4. He asked me _____ I wanted to join the academic decathlon team.",
          "options": [
            "if",
            "that",
            "what",
            "which"
          ],
          "correct": 0,
          "explanation": "Yes/no reported questions are introduced by 'if' or 'whether'."
        }
      ]
    },
    {
      "id": "b1_g13",
      "number": 13,
      "title": "Grammar Test 13: Gerunds vs Infinitives with Meaning Shift",
      "badge": "Verb Patterns \u2022 B1",
      "instruction": "Select the correct form according to intended meaning (stop, remember, forget).",
      "questions": [
        {
          "q": "1. Please remember _____ off the projector when the presentation concludes.",
          "options": [
            "to turn",
            "turning",
            "turn",
            "turned"
          ],
          "correct": 0,
          "explanation": "'Remember to do' refers to not forgetting an obligation or future action."
        },
        {
          "q": "2. I clearly remember _____ this documentary when I was in primary school.",
          "options": [
            "watching",
            "to watch",
            "watch",
            "watched"
          ],
          "correct": 0,
          "explanation": "'Remember doing' recalls a past memory."
        },
        {
          "q": "3. On our hiking expedition, we stopped _____ some drinking water from a mountain stream.",
          "options": [
            "to drink",
            "drinking",
            "drink",
            "drank"
          ],
          "correct": 0,
          "explanation": "'Stop to do' means interrupting an activity in order to do another."
        },
        {
          "q": "4. Doctors urged the patient to stop _____ sugary energy drinks.",
          "options": [
            "drinking",
            "to drink",
            "drink",
            "drank"
          ],
          "correct": 0,
          "explanation": "'Stop doing' means quitting a habit permanently."
        }
      ]
    },
    {
      "id": "b1_g14",
      "number": 14,
      "title": "Grammar Test 14: Connectors of Contrast & Concession",
      "badge": "Connectors \u2022 B1",
      "instruction": "Select the correct contrast connector matching sentence grammar.",
      "questions": [
        {
          "q": "1. _____ the team had limited preparation time, they triumphed in the championship match.",
          "options": [
            "Although",
            "Despite",
            "In spite of",
            "However"
          ],
          "correct": 0,
          "explanation": "'Although' is a conjunction followed by a subject + verb clause."
        },
        {
          "q": "2. _____ raining heavily during the field excursion, the students maintained great enthusiasm.",
          "options": [
            "Despite",
            "Although",
            "Even though",
            "However"
          ],
          "correct": 0,
          "explanation": "'Despite' is a preposition followed by a gerund ('raining') or noun."
        },
        {
          "q": "3. Renewable tech costs fell. _____, fossil fuel dependency remains stubborn.",
          "options": [
            "However",
            "Although",
            "Despite",
            "Because"
          ],
          "correct": 0,
          "explanation": "'However' is an adverbial transition linking two independent clauses."
        },
        {
          "q": "4. In spite of _____ injured, the striker scored the decisive winning penalty.",
          "options": [
            "being",
            "be",
            "was",
            "to be"
          ],
          "correct": 0,
          "explanation": "'In spite of' is followed by a gerund ('being')."
        }
      ]
    },
    {
      "id": "b1_g15",
      "number": 15,
      "title": "Grammar Test 15: Connectors of Cause, Purpose & Result",
      "badge": "Connectors \u2022 B1",
      "instruction": "Select the connector correctly expressing cause, result, or purpose.",
      "questions": [
        {
          "q": "1. The outdoor concert was postponed due _____ severe meteorological warnings.",
          "options": [
            "to",
            "of",
            "for",
            "with"
          ],
          "correct": 0,
          "explanation": "'Due to' is followed by a noun phrase indicating cause."
        },
        {
          "q": "2. Scientists recorded all anomalies so _____ they could analyze them later.",
          "options": [
            "that",
            "as",
            "to",
            "for"
          ],
          "correct": 0,
          "explanation": "'So that' introduces a purpose clause with subject + modal."
        },
        {
          "q": "3. The research budget was slashed; _____, the expedition had to be downscaled.",
          "options": [
            "therefore",
            "because",
            "since",
            "due to"
          ],
          "correct": 0,
          "explanation": "'Therefore' introduces a logical conclusion or result."
        },
        {
          "q": "4. He left early in order _____ catch the express commuter train.",
          "options": [
            "to",
            "that",
            "for",
            "so"
          ],
          "correct": 0,
          "explanation": "'In order to + base verb' expresses purpose."
        }
      ]
    },
    {
      "id": "b1_g16",
      "number": 16,
      "title": "Grammar Test 16: Conditional Conjunctions (Unless, As long as)",
      "badge": "Conditionals \u2022 B1",
      "instruction": "Choose the conjunction establishing the conditional contingency.",
      "questions": [
        {
          "q": "1. Unless students _____ the confirmation form, their enrollment will not be processed.",
          "options": [
            "complete",
            "will complete",
            "don't complete",
            "completed"
          ],
          "correct": 0,
          "explanation": "'Unless' means 'if not' and takes an affirmative Present Simple verb."
        },
        {
          "q": "2. You may borrow the science lab equipment as long as you _____ it clean.",
          "options": [
            "keep",
            "will keep",
            "kept",
            "keeping"
          ],
          "correct": 0,
          "explanation": "'As long as' functions as a conditional connector taking Present Simple."
        },
        {
          "q": "3. The experiment will succeed provided _____ the temperature remains strictly constant.",
          "options": [
            "that",
            "what",
            "which",
            "where"
          ],
          "correct": 0,
          "explanation": "'Provided that' introduces an essential condition."
        },
        {
          "q": "4. We cannot board the aircraft _____ our flight number is officially called.",
          "options": [
            "until",
            "unless if",
            "as long",
            "supposing"
          ],
          "correct": 0,
          "explanation": "'Until' denotes up to the point in time."
        }
      ]
    },
    {
      "id": "b1_g17",
      "number": 17,
      "title": "Grammar Test 17: Wishes & Regrets with 'Wish' & 'If only'",
      "badge": "Subjunctive \u2022 B1",
      "instruction": "Select the correct past form for unreal present wishes or past regrets.",
      "questions": [
        {
          "q": "1. I wish our municipal government _____ more protected bike paths in the city.",
          "options": [
            "would build",
            "builds",
            "will build",
            "is building"
          ],
          "correct": 0,
          "explanation": "'Wish + would + base verb' expresses a desire for another entity to change their policy."
        },
        {
          "q": "2. Sofia wishes she _____ more time to devote to watercolor painting.",
          "options": [
            "had",
            "has",
            "would have",
            "is having"
          ],
          "correct": 0,
          "explanation": "Present wish uses Past Simple ('had')."
        },
        {
          "q": "3. If only we _____ earlier, we wouldn't have missed the guest speaker's introduction.",
          "options": [
            "had arrived",
            "arrived",
            "would arrive",
            "have arrived"
          ],
          "correct": 0,
          "explanation": "Past regret uses Past Perfect ('had arrived')."
        },
        {
          "q": "4. I wish I _____ play the piano as beautifully as my sister.",
          "options": [
            "could",
            "can",
            "will",
            "would to"
          ],
          "correct": 0,
          "explanation": "'Could' expresses wished-for present ability."
        }
      ]
    },
    {
      "id": "b1_g18",
      "number": 18,
      "title": "Grammar Test 18: Used to vs Be used to vs Get used to",
      "badge": "Habits \u2022 B1",
      "instruction": "Differentiate past habits from familiarity and acclimatization.",
      "questions": [
        {
          "q": "1. Coming from a tropical climate, it took Mateo months to get used to _____ in cold weather.",
          "options": [
            "living",
            "live",
            "lived",
            "life"
          ],
          "correct": 0,
          "explanation": "'Get used to' (acclimatize) is followed by a gerund ('living') or noun."
        },
        {
          "q": "2. Diego _____ walk to school every morning when he was ten years old.",
          "options": [
            "used to",
            "was used to",
            "got used to",
            "use to"
          ],
          "correct": 0,
          "explanation": "'Used to + base verb' denotes a discontinued past habit."
        },
        {
          "q": "3. She is a night-shift nurse, so she is well used to _____ awake during nocturnal hours.",
          "options": [
            "staying",
            "stay",
            "stayed",
            "to stay"
          ],
          "correct": 0,
          "explanation": "'Be used to' (be accustomed to) takes a gerund ('staying')."
        },
        {
          "q": "4. Did you _____ to that high altitude when visiting Bogota?",
          "options": [
            "get used",
            "used to",
            "use",
            "used"
          ],
          "correct": 0,
          "explanation": "Question form 'Did you get used to'."
        }
      ]
    },
    {
      "id": "b1_g19",
      "number": 19,
      "title": "Grammar Test 19: Question Tags with Modals & Imperatives",
      "badge": "Tags \u2022 B1",
      "instruction": "Select the correct tag question confirming the statement.",
      "questions": [
        {
          "q": "1. Let's review the mock exam answers together, _____ we?",
          "options": [
            "shall",
            "will",
            "do",
            "don't"
          ],
          "correct": 0,
          "explanation": "Suggestions opening with 'Let's' take the tag 'shall we?'."
        },
        {
          "q": "2. Nobody called while I was at the laboratory, _____ they?",
          "options": [
            "did",
            "didn't",
            "were",
            "do"
          ],
          "correct": 0,
          "explanation": "Negative pronouns like 'Nobody' take an affirmative auxiliary and plural pronoun 'did they?'."
        },
        {
          "q": "3. Pass me that beaker, _____ you?",
          "options": [
            "will",
            "do",
            "shall",
            "are"
          ],
          "correct": 0,
          "explanation": "Imperative commands take tag 'will you?' for polite compliance."
        },
        {
          "q": "4. You'd better hurry to catch the bus, _____ you?",
          "options": [
            "hadn't",
            "wouldn't",
            "didn't",
            "shouldn't"
          ],
          "correct": 0,
          "explanation": "'You'd better' contracts 'had better', requiring tag 'hadn't you?'."
        }
      ]
    },
    {
      "id": "b1_g20",
      "number": 20,
      "title": "Grammar Test 20: Correlative Structures (Neither... nor, Hardly... when)",
      "badge": "Correlatives \u2022 B1",
      "instruction": "Select the correct correlative partner or subject-verb agreement.",
      "questions": [
        {
          "q": "1. Neither the headmaster nor the academic coordinators _____ present at the symposium.",
          "options": [
            "were",
            "was",
            "is",
            "be"
          ],
          "correct": 0,
          "explanation": "In 'neither... nor', the verb agrees with the closer plural subject ('coordinators were')."
        },
        {
          "q": "2. Hardly had the scientific lecture started _____ the power in the hall failed.",
          "options": [
            "when",
            "than",
            "that",
            "so"
          ],
          "correct": 0,
          "explanation": "'Hardly had... when' is the established correlative formula."
        },
        {
          "q": "3. Not only was the essay eloquently written, but it _____ contained rigorous empirical data.",
          "options": [
            "also",
            "too",
            "either",
            "as well"
          ],
          "correct": 0,
          "explanation": "Correlative pair: 'Not only... but [also]'."
        },
        {
          "q": "4. Either Sofia _____ Camila will lead the student delegation at the youth conference.",
          "options": [
            "or",
            "nor",
            "and",
            "but"
          ],
          "correct": 0,
          "explanation": "'Either' pairs correlatively with 'or'."
        }
      ]
    }
  ],
  "b2": [
    {
      "id": "b2_g1",
      "number": 1,
      "title": "Grammar Test 1: Negative Adverbial Inversion (Rarely, Seldom)",
      "badge": "Inversion \u2022 B2",
      "instruction": "Select the correct inverted auxiliary + subject structure.",
      "questions": [
        {
          "q": "1. Rarely _____ such exceptional dedication displayed by high school researchers.",
          "options": [
            "have we witnessed",
            "we have witnessed",
            "we witnessed",
            "having we witnessed"
          ],
          "correct": 0,
          "explanation": "Negative inversion: When 'Rarely' opens a clause, the auxiliary precedes the subject ('Rarely have we witnessed')."
        },
        {
          "q": "2. Seldom _____ a scientific theory undergone such meticulous empirical verification.",
          "options": [
            "has",
            "is",
            "was",
            "did have"
          ],
          "correct": 0,
          "explanation": "'Seldom has [subject] undergone' places auxiliary 'has' before subject."
        },
        {
          "q": "3. Never before _____ astronomers observed a black hole collision of this magnitude.",
          "options": [
            "had",
            "did",
            "were",
            "would"
          ],
          "correct": 0,
          "explanation": "'Never before had astronomers observed' requires past perfect auxiliary."
        },
        {
          "q": "4. Little _____ the software engineers suspect that the encryption protocol had been bypassed.",
          "options": [
            "did",
            "were",
            "had",
            "would"
          ],
          "correct": 0,
          "explanation": "'Little did [subject] suspect' uses past simple auxiliary 'did'."
        }
      ]
    },
    {
      "id": "b2_g2",
      "number": 2,
      "title": "Grammar Test 2: Inverted Conditionals (Had, Were, Should)",
      "badge": "Inversion \u2022 B2",
      "instruction": "Choose the formal inverted conditional construction omitting 'if'.",
      "questions": [
        {
          "q": "1. Had the environmental committee acted sooner, the mangrove habitat _____ permanently damaged.",
          "options": [
            "would not have been",
            "will not be",
            "is not been",
            "would not be being"
          ],
          "correct": 0,
          "explanation": "Inverted 3rd Conditional: 'Had + subject + past participle, would have been + past participle'."
        },
        {
          "q": "2. _____ the monetary authorities raise interest rates again, consumer borrowing would decline.",
          "options": [
            "Were",
            "Had",
            "Should",
            "If were"
          ],
          "correct": 0,
          "explanation": "Inverted 2nd Conditional: 'Were + subject + to-infinitive (or Were the authorities to raise)'."
        },
        {
          "q": "3. _____ any flight cancellations occur due to volcanic ash, passengers will receive full refunds.",
          "options": [
            "Should",
            "Had",
            "Were",
            "If should"
          ],
          "correct": 0,
          "explanation": "Inverted 1st Conditional for formal contingency: 'Should + subject + base verb'."
        },
        {
          "q": "4. Had we known the symposium was rescheduled, we _____ our flight reservations.",
          "options": [
            "would have adjusted",
            "adjusted",
            "will adjust",
            "would adjust"
          ],
          "correct": 0,
          "explanation": "Counterfactual past outcome: 'would have adjusted'."
        }
      ]
    },
    {
      "id": "b2_g3",
      "number": 3,
      "title": "Grammar Test 3: Mixed Conditionals",
      "badge": "Conditionals \u2022 B2",
      "instruction": "Select the verb combinations linking past conditions to present results.",
      "questions": [
        {
          "q": "1. If Sofia had accepted the prestigious scholarship last year, she _____ at Oxford University today.",
          "options": [
            "would be studying",
            "would have studied",
            "had studied",
            "studied"
          ],
          "correct": 0,
          "explanation": "Mixed conditional: Past unreal condition ('had accepted') with present result ('would be studying today')."
        },
        {
          "q": "2. If I were more organized with my deadlines, I _____ the conference submission last week.",
          "options": [
            "would not have missed",
            "would not miss",
            "will not miss",
            "did not miss"
          ],
          "correct": 0,
          "explanation": "Present general trait ('If I were') with past specific consequence ('would not have missed')."
        },
        {
          "q": "3. If they hadn't invested in cybersecurity protocols, their servers _____ vulnerable right now.",
          "options": [
            "would be",
            "would have been",
            "had been",
            "will be"
          ],
          "correct": 0,
          "explanation": "Past action produces present vulnerability: 'would be vulnerable right now'."
        },
        {
          "q": "4. If Lucas _____ fluent in Mandarin, he would have translated the diplomatic dossier yesterday.",
          "options": [
            "were",
            "had been",
            "is",
            "would be"
          ],
          "correct": 0,
          "explanation": "Permanent state ('If Lucas were') producing past consequence."
        }
      ]
    },
    {
      "id": "b2_g4",
      "number": 4,
      "title": "Grammar Test 4: Passive Reporting with Infinitives",
      "badge": "Passive \u2022 B2",
      "instruction": "Select the reporting structure with simple or perfect infinitive.",
      "questions": [
        {
          "q": "1. The research laboratory is widely reported _____ a major breakthrough in nuclear fusion.",
          "options": [
            "to have achieved",
            "having achieved",
            "to achieve",
            "that it achieves"
          ],
          "correct": 0,
          "explanation": "Passive reporting with perfect infinitive: 'is reported to have achieved' denotes a prior completed feat."
        },
        {
          "q": "2. The ancient manuscript is believed _____ by Renaissance scholars in Florence.",
          "options": [
            "to have been written",
            "having been written",
            "to be writing",
            "written"
          ],
          "correct": 0,
          "explanation": "Passive perfect infinitive: 'is believed to have been written'."
        },
        {
          "q": "3. The missing artifact is thought _____ hidden in an underground vault for centuries.",
          "options": [
            "to have remained",
            "remaining",
            "remained",
            "to remain"
          ],
          "correct": 0,
          "explanation": "Historical prior state: 'is thought to have remained'."
        },
        {
          "q": "4. He is considered by critics _____ the most visionary film director of his generation.",
          "options": [
            "to be",
            "being",
            "been",
            "that he is"
          ],
          "correct": 0,
          "explanation": "Present state evaluation: 'is considered to be'."
        }
      ]
    },
    {
      "id": "b2_g5",
      "number": 5,
      "title": "Grammar Test 5: Cleft Sentences for Discursive Emphasis",
      "badge": "Clefts \u2022 B2",
      "instruction": "Choose the introductory cleft element for stylistic focus.",
      "questions": [
        {
          "q": "1. It was only after re-analyzing the outliers _____ the astrophysicists detected the pulsar.",
          "options": [
            "that",
            "when",
            "which",
            "then"
          ],
          "correct": 0,
          "explanation": "Cleft formula: 'It was [time clause] that [main clause]'."
        },
        {
          "q": "2. _____ impressed the committee most was her mastery of quantum computational models.",
          "options": [
            "What",
            "Which",
            "That",
            "It"
          ],
          "correct": 0,
          "explanation": "Wh-cleft: 'What impressed the committee was...'"
        },
        {
          "q": "3. All the team needed _____ a forty-eight-hour extension to debug the code.",
          "options": [
            "was",
            "were",
            "is",
            "had been"
          ],
          "correct": 0,
          "explanation": "Cleft with 'All': 'All [subject] needed was [singular complement]'."
        },
        {
          "q": "4. It is the relentless pursuit of truth _____ defines genuine scientific inquiry.",
          "options": [
            "that",
            "which",
            "what",
            "who"
          ],
          "correct": 0,
          "explanation": "'It is [noun] that [verb]' focuses on the subject."
        }
      ]
    },
    {
      "id": "b2_g6",
      "number": 6,
      "title": "Grammar Test 6: Participle Clauses (-ing & -ed)",
      "badge": "Participles \u2022 B2",
      "instruction": "Select the correct participial phrase to combine clauses economically.",
      "questions": [
        {
          "q": "1. _____ all the statistical calculations, the team submitted their findings to Nature.",
          "options": [
            "Having completed",
            "Completing",
            "Completed",
            "Have completed"
          ],
          "correct": 0,
          "explanation": "Perfect participle 'Having completed' highlights action completed prior to the main clause."
        },
        {
          "q": "2. _____ by severe turbulence, the aircraft made an emergency landing.",
          "options": [
            "Battered",
            "Battering",
            "Having battered",
            "Batter"
          ],
          "correct": 0,
          "explanation": "Past participle 'Battered' expresses passive state/cause."
        },
        {
          "q": "3. Not _____ the complex mathematical proof, Lucas consulted his professor after class.",
          "options": [
            "understanding",
            "understood",
            "having understand",
            "understand"
          ],
          "correct": 0,
          "explanation": "Negative present participle: 'Not understanding'."
        },
        {
          "q": "4. The volcanic eruption sent ash plumes into the stratosphere, _____ global flights for days.",
          "options": [
            "disrupting",
            "disrupted",
            "having disrupted",
            "disrupt"
          ],
          "correct": 0,
          "explanation": "Present participle 'disrupting' expresses the consequence or result."
        }
      ]
    },
    {
      "id": "b2_g7",
      "number": 7,
      "title": "Grammar Test 7: Modal Perfect Nuances",
      "badge": "Modals \u2022 B2",
      "instruction": "Differentiate between unnecessary actions performed vs avoided.",
      "questions": [
        {
          "q": "1. You _____ printed all forty color brochures; the digital slides were already on the screen!",
          "options": [
            "needn't have",
            "didn't need to",
            "shouldn't have to",
            "mustn't have"
          ],
          "correct": 0,
          "explanation": "'Needn't have done' means the action was performed needlessly."
        },
        {
          "q": "2. The museum offered free admission today, so we _____ pay any entry fees.",
          "options": [
            "didn't need to",
            "needn't have",
            "mustn't",
            "couldn't have"
          ],
          "correct": 0,
          "explanation": "'Didn't need to pay' means obligation did not exist and money was not spent."
        },
        {
          "q": "3. Julian apologized profusely for _____ confidential team files by mistake.",
          "options": [
            "having deleted",
            "to delete",
            "deleted",
            "have deleted"
          ],
          "correct": 0,
          "explanation": "Prepositions take perfect gerund 'having deleted' to denote past completion."
        },
        {
          "q": "4. You _____ spoken to the academic dean in such an abrasive tone.",
          "options": [
            "shouldn't have",
            "needn't have",
            "can't have",
            "wouldn't"
          ],
          "correct": 0,
          "explanation": "'Shouldn't have spoken' criticizes a past action."
        }
      ]
    },
    {
      "id": "b2_g8",
      "number": 8,
      "title": "Grammar Test 8: The Mandative Subjunctive",
      "badge": "Subjunctive \u2022 B2",
      "instruction": "Select the uninflected base verb required after verbs of recommendation/demand.",
      "questions": [
        {
          "q": "1. The lead investigator suggested that the anomalous experimental data _____ re-evaluated.",
          "options": [
            "be",
            "is",
            "was",
            "will be"
          ],
          "correct": 0,
          "explanation": "Mandative subjunctive uses the bare base form 'be' regardless of subject number."
        },
        {
          "q": "2. The international treaty requires that every participating nation _____ carbon emissions.",
          "options": [
            "reduce",
            "reduces",
            "reduced",
            "will reduce"
          ],
          "correct": 0,
          "explanation": "Subjunctive after 'requires that': base form 'reduce'."
        },
        {
          "q": "3. It is imperative that the surgical patient _____ informed of all potential complications.",
          "options": [
            "be",
            "is",
            "should to be",
            "was"
          ],
          "correct": 0,
          "explanation": "Subjunctive after 'It is imperative that': 'be informed'."
        },
        {
          "q": "4. The committee insisted that the candidate _____ present in person for the defense.",
          "options": [
            "be",
            "was",
            "is",
            "were"
          ],
          "correct": 0,
          "explanation": "Subjunctive after 'insisted that': 'be present'."
        }
      ]
    },
    {
      "id": "b2_g9",
      "number": 9,
      "title": "Grammar Test 9: Correlative Inversions (No sooner... than)",
      "badge": "Inversion \u2022 B2",
      "instruction": "Select the correlative inverted sequence.",
      "questions": [
        {
          "q": "1. No sooner had the scientific announcement concluded _____ journalists began raising questions.",
          "options": [
            "than",
            "when",
            "that",
            "then"
          ],
          "correct": 0,
          "explanation": "'No sooner had [inversion]... than...' is the strict correlative pair."
        },
        {
          "q": "2. Not only _____ first prize in the national debate, but she also secured a full scholarship.",
          "options": [
            "did she win",
            "she won",
            "won she",
            "she did win"
          ],
          "correct": 0,
          "explanation": "Inversion following 'Not only': auxiliary 'did' precedes subject 'she'."
        },
        {
          "q": "3. Barely had the spacecraft exited the atmosphere _____ telemetry signals stabilized.",
          "options": [
            "when",
            "than",
            "then",
            "that"
          ],
          "correct": 0,
          "explanation": "'Barely had... when' pairs with 'when'."
        },
        {
          "q": "4. Scarcely _____ the laboratory doors unlocked when the researchers rushed inside.",
          "options": [
            "had",
            "did",
            "were",
            "was"
          ],
          "correct": 0,
          "explanation": "'Scarcely had the doors unlocked' requires past perfect auxiliary."
        }
      ]
    },
    {
      "id": "b2_g10",
      "number": 10,
      "title": "Grammar Test 10: Inversion after 'So' & 'Such'",
      "badge": "Inversion \u2022 B2",
      "instruction": "Select the inverted auxiliary verb following emphatic 'so' or 'such'.",
      "questions": [
        {
          "q": "1. So intense _____ the seismic tremors that skyscrapers swayed visibly for several minutes.",
          "options": [
            "were",
            "was",
            "did",
            "had"
          ],
          "correct": 0,
          "explanation": "'So intense were the tremors that...': plural auxiliary 'were' precedes plural subject 'tremors'."
        },
        {
          "q": "2. Such _____ the public outcry that the corporate board rescinded the decision.",
          "options": [
            "was",
            "were",
            "did",
            "is"
          ],
          "correct": 0,
          "explanation": "Singular subject 'outcry' takes 'was' ('Such was the public outcry')."
        },
        {
          "q": "3. So profound _____ her theoretical insights that peer reviewers praised the manuscript unanimously.",
          "options": [
            "were",
            "was",
            "did",
            "had"
          ],
          "correct": 0,
          "explanation": "Plural subject 'insights' takes 'were'."
        },
        {
          "q": "4. Such _____ the intensity of the storm that power grids failed across five districts.",
          "options": [
            "was",
            "were",
            "had",
            "did"
          ],
          "correct": 0,
          "explanation": "Singular noun 'intensity' takes 'was'."
        }
      ]
    },
    {
      "id": "b2_g11",
      "number": 11,
      "title": "Grammar Test 11: Syntax of 'Would rather' & 'It's high time'",
      "badge": "Preferences \u2022 B2",
      "instruction": "Select the subjunctive or past tense form required after these expressions.",
      "questions": [
        {
          "q": "1. Elena would rather you _____ not discuss the confidential terms in public.",
          "options": [
            "did",
            "do",
            "would",
            "had"
          ],
          "correct": 0,
          "explanation": "'Would rather + subject + Past Simple' ('did not discuss') expresses preference for another's actions."
        },
        {
          "q": "2. It is high time our municipal leaders _____ decisive action against industrial air pollution.",
          "options": [
            "took",
            "take",
            "must take",
            "have taken"
          ],
          "correct": 0,
          "explanation": "'It is high time + subject + Past Simple' ('took action') indicates overdue action."
        },
        {
          "q": "3. I'd rather _____ by high-speed train than endure a stressful flight.",
          "options": [
            "travel",
            "to travel",
            "traveling",
            "traveled"
          ],
          "correct": 0,
          "explanation": "'Would rather + bare infinitive' when subject is the same person ('I'd rather travel')."
        },
        {
          "q": "4. It's about time you _____ learning for your final university entrance exams.",
          "options": [
            "started",
            "start",
            "starting",
            "must start"
          ],
          "correct": 0,
          "explanation": "'It's about time + subject + Past Simple' ('started')."
        }
      ]
    },
    {
      "id": "b2_g12",
      "number": 12,
      "title": "Grammar Test 12: Prepositional Relative Clauses",
      "badge": "Relatives \u2022 B2",
      "instruction": "Select the formal relative construction incorporating a preposition.",
      "questions": [
        {
          "q": "1. The ancient papyrus, the authenticity _____ had been doubted for centuries, was verified.",
          "options": [
            "of which",
            "of whom",
            "whose",
            "of that"
          ],
          "correct": 0,
          "explanation": "Formal non-defining phrase modifying non-human 'papyrus': 'the authenticity of which'."
        },
        {
          "q": "2. Professor Alvarez, _____ whom the breakthrough research was spearheaded, received the medal.",
          "options": [
            "by",
            "for",
            "with",
            "at"
          ],
          "correct": 0,
          "explanation": "Passive agent with human relative pronoun: 'by whom the research was spearheaded'."
        },
        {
          "q": "3. They surveyed forty archaeological sites, several _____ which yielded prehistoric fossils.",
          "options": [
            "of",
            "from",
            "in",
            "by"
          ],
          "correct": 0,
          "explanation": "Partitive quantifier: 'several of which'."
        },
        {
          "q": "4. The conference venue, in _____ the climate accords were signed, is a UNESCO landmark.",
          "options": [
            "which",
            "where",
            "that",
            "whom"
          ],
          "correct": 0,
          "explanation": "Formal preposition + which: 'in which the accords were signed'."
        }
      ]
    },
    {
      "id": "b2_g13",
      "number": 13,
      "title": "Grammar Test 13: Concession Clauses (Much as, However + adj)",
      "badge": "Concession \u2022 B2",
      "instruction": "Select the formal concession formula.",
      "questions": [
        {
          "q": "1. Much _____ the critics praised the cinematography, the storyline lacked emotional depth.",
          "options": [
            "as",
            "though",
            "like",
            "while"
          ],
          "correct": 0,
          "explanation": "'Much as' is a formal concession phrase meaning 'Although [subject] did something greatly'."
        },
        {
          "q": "2. _____ hard the engineering team worked, they could not meet the unrealistic launch deadline.",
          "options": [
            "However",
            "Whatever",
            "Although",
            "Despite"
          ],
          "correct": 0,
          "explanation": "'However + adverb/adjective + subject + verb' ('However hard they worked')."
        },
        {
          "q": "3. Difficult _____ the physics exam was, Sofia achieved a nearly perfect score.",
          "options": [
            "though",
            "although",
            "despite",
            "however"
          ],
          "correct": 0,
          "explanation": "'Adjective + though/as + subject + verb' ('Difficult though the exam was')."
        },
        {
          "q": "4. Rich _____ the natural resource deposits are, equitable distribution remains a challenge.",
          "options": [
            "as",
            "like",
            "for",
            "so"
          ],
          "correct": 0,
          "explanation": "'Adjective + as + subject + verb' ('Rich as the deposits are')."
        }
      ]
    },
    {
      "id": "b2_g14",
      "number": 14,
      "title": "Grammar Test 14: Advanced Verb Complementation",
      "badge": "Verb Patterns \u2022 B2",
      "instruction": "Select the verb complementation adhering to B2 grammatical rules.",
      "questions": [
        {
          "q": "1. The corporate minister denied _____ influenced by lobbyists prior to voting.",
          "options": [
            "having been",
            "to have been",
            "to be",
            "had been"
          ],
          "correct": 0,
          "explanation": "Verb 'deny' takes a gerund; passive perfect gerund 'having been influenced' denotes prior passive event."
        },
        {
          "q": "2. We deeply regret _____ you that your research grant application was unsuccessful.",
          "options": [
            "to inform",
            "informing",
            "inform",
            "having informed"
          ],
          "correct": 0,
          "explanation": "'Regret to inform' is the formal announcement idiom for bad news."
        },
        {
          "q": "3. The project proposal involves _____ all legacy databases with encrypted cloud architecture.",
          "options": [
            "replacing",
            "to replace",
            "replace",
            "replaced"
          ],
          "correct": 0,
          "explanation": "Verb 'involve' is followed by a gerund ('involves replacing')."
        },
        {
          "q": "4. I cannot help _____ skeptical of commercial promises offering instant language fluency.",
          "options": [
            "feeling",
            "to feel",
            "feel",
            "having felt"
          ],
          "correct": 0,
          "explanation": "Idiom 'cannot help + gerund' ('cannot help feeling')."
        }
      ]
    },
    {
      "id": "b2_g15",
      "number": 15,
      "title": "Grammar Test 15: Proportional Double Comparatives",
      "badge": "Comparatives \u2022 B2",
      "instruction": "Select the correlative comparative phrase denoting parallel increase.",
      "questions": [
        {
          "q": "1. The more rigorously you analyze the historical evidence, _____ conclusions you will draw.",
          "options": [
            "the more accurate",
            "more accurate",
            "the most accurate",
            "accurater"
          ],
          "correct": 0,
          "explanation": "Double comparative: 'The + comparative... the + comparative' ('the more accurate')."
        },
        {
          "q": "2. The longer the government postponed action, _____ the economic crisis became.",
          "options": [
            "the more acute",
            "more acute",
            "acuter",
            "the most acute"
          ],
          "correct": 0,
          "explanation": "Correlative: 'the more acute'."
        },
        {
          "q": "3. The higher up into the Andes mountains you hike, _____ oxygen is available.",
          "options": [
            "the less",
            "less",
            "the least",
            "lesser"
          ],
          "correct": 0,
          "explanation": "'The less oxygen is available'."
        },
        {
          "q": "4. The sooner we identify the algorithmic defect, _____ it will be to deploy a security patch.",
          "options": [
            "the easier",
            "easier",
            "the easiest",
            "more easy"
          ],
          "correct": 0,
          "explanation": "'The easier it will be'."
        }
      ]
    },
    {
      "id": "b2_g16",
      "number": 16,
      "title": "Grammar Test 16: Impersonal Passive & Distancing",
      "badge": "Passive \u2022 B2",
      "instruction": "Choose the formal distancing or impersonal passive construction.",
      "questions": [
        {
          "q": "1. It is widely _____ that autonomous vehicles will dominate transportation within two decades.",
          "options": [
            "believed",
            "believing",
            "to believe",
            "believe"
          ],
          "correct": 0,
          "explanation": "Impersonal passive: 'It is widely believed that...'."
        },
        {
          "q": "2. There are _____ to be over five thousand endangered plant species in the rainforest.",
          "options": [
            "said",
            "saying",
            "say",
            "been said"
          ],
          "correct": 0,
          "explanation": "Existential passive: 'There are said to be...'."
        },
        {
          "q": "3. It has been _____ that the asteroid's trajectory poses no threat to satellite constellations.",
          "options": [
            "confirmed",
            "confirming",
            "confirm",
            "to confirm"
          ],
          "correct": 0,
          "explanation": "Present perfect impersonal passive: 'It has been confirmed that'."
        },
        {
          "q": "4. The treaty is understood _____ signed in the capital city next month.",
          "options": [
            "to be being",
            "to be",
            "being",
            "that is"
          ],
          "correct": 1,
          "explanation": "Future passive reporting: 'is understood to be signed'."
        }
      ]
    },
    {
      "id": "b2_g17",
      "number": 17,
      "title": "Grammar Test 17: Cohesive Ellipsis & Substitution",
      "badge": "Cohesion \u2022 B2",
      "instruction": "Select the correct substitution pro-form avoiding repetition.",
      "questions": [
        {
          "q": "1. 'Will the new high-speed rail line open next year?' \u2014 'I certainly hope _____.'",
          "options": [
            "so",
            "it",
            "that",
            "this"
          ],
          "correct": 0,
          "explanation": "Pro-form 'so' replaces the affirmative clause: 'I hope so'."
        },
        {
          "q": "2. None of the senior researchers attended the conference, and _____ did the graduate assistants.",
          "options": [
            "neither",
            "either",
            "so",
            "nor not"
          ],
          "correct": 0,
          "explanation": "'Neither did the assistants' expresses negative agreement."
        },
        {
          "q": "3. If you haven't reviewed the laboratory protocols yet, please do _____ immediately.",
          "options": [
            "so",
            "that",
            "it",
            "such"
          ],
          "correct": 0,
          "explanation": "'Do so' is the formal verb-phrase substitute."
        },
        {
          "q": "4. 'Did the experiment fail?' \u2014 'I'm afraid _____.'",
          "options": [
            "not",
            "so",
            "that",
            "it"
          ],
          "correct": 1,
          "explanation": "'I'm afraid so' confirms the negative truth politely."
        }
      ]
    },
    {
      "id": "b2_g18",
      "number": 18,
      "title": "Grammar Test 18: Fronting for Rhetorical Focus",
      "badge": "Fronting \u2022 B2",
      "instruction": "Select the grammatically accurate fronted sentence.",
      "questions": [
        {
          "q": "1. Down the steep mountain ravine _____ the roaring torrent of glacial meltwater.",
          "options": [
            "rushed",
            "did rush",
            "was rushed",
            "rushing"
          ],
          "correct": 0,
          "explanation": "Locative adverbial fronting causes full subject-verb inversion: 'Down the ravine rushed the torrent'."
        },
        {
          "q": "2. On the summit of the ancient hill _____ the remnants of a Celtic fortification.",
          "options": [
            "stood",
            "did stand",
            "standing",
            "were stood"
          ],
          "correct": 0,
          "explanation": "Prepositional fronting with intransitive verb: 'On the hill stood the remnants'."
        },
        {
          "q": "3. Out of the dark laboratory shadows _____ the elusive feline mascot.",
          "options": [
            "stepped",
            "did step",
            "was stepped",
            "stepping"
          ],
          "correct": 0,
          "explanation": "Directional fronting: 'Out stepped the mascot'."
        },
        {
          "q": "4. Next to the main podium _____ the three distinguished visiting laureates.",
          "options": [
            "sat",
            "did sit",
            "were sat",
            "sitting"
          ],
          "correct": 0,
          "explanation": "Locative fronting: 'Next to the podium sat the laureates'."
        }
      ]
    },
    {
      "id": "b2_g19",
      "number": 19,
      "title": "Grammar Test 19: Advanced Evaluative Reporting Verbs",
      "badge": "Reporting \u2022 B2",
      "instruction": "Select the reporting verb that incorporates grammatical complementation.",
      "questions": [
        {
          "q": "1. The climate scientist _____ against underestimating the speed of polar ice sheet melting.",
          "options": [
            "warned",
            "threatened",
            "denied",
            "claimed"
          ],
          "correct": 0,
          "explanation": "'Warn against + gerund' ('warned against underestimating')."
        },
        {
          "q": "2. The defense attorney _____ that the client had been in another city on that date.",
          "options": [
            "maintained",
            "accused",
            "urged",
            "refused"
          ],
          "correct": 0,
          "explanation": "'Maintained that + clause' denotes persistent assertion."
        },
        {
          "q": "3. The university ethics board _____ the researchers of falsifying clinical data.",
          "options": [
            "accused",
            "blamed",
            "criticized",
            "denounced"
          ],
          "correct": 0,
          "explanation": "'Accuse [someone] of + gerund' ('accused the researchers of falsifying')."
        },
        {
          "q": "4. The headmaster _____ on inspecting the science labs in person before granting approval.",
          "options": [
            "insisted",
            "demanded",
            "urged",
            "persuaded"
          ],
          "correct": 0,
          "explanation": "'Insist on + gerund' ('insisted on inspecting')."
        }
      ]
    },
    {
      "id": "b2_g20",
      "number": 20,
      "title": "Grammar Test 20: Advanced Dependent Prepositions",
      "badge": "Prepositions \u2022 B2",
      "instruction": "Choose the dependent preposition required by the preceding verb/adjective.",
      "questions": [
        {
          "q": "1. The architectural framework is so avant-garde that it borders _____ engineering genius.",
          "options": [
            "on",
            "in",
            "to",
            "at"
          ],
          "correct": 0,
          "explanation": "The prepositional verb collocation is 'border on' (approach very closely)."
        },
        {
          "q": "2. High stress levels are frequently conducive _____ cognitive impairment and insomnia.",
          "options": [
            "to",
            "for",
            "with",
            "at"
          ],
          "correct": 0,
          "explanation": "'Conducive to' means making a certain situation or outcome likely."
        },
        {
          "q": "3. The committee's recommendations are contingent _____ securing international funding.",
          "options": [
            "upon",
            "for",
            "at",
            "with"
          ],
          "correct": 0,
          "explanation": "'Contingent upon/on' means dependent on a condition."
        },
        {
          "q": "4. He was completely oblivious _____ the political controversy brewing around his appointment.",
          "options": [
            "to",
            "with",
            "at",
            "for"
          ],
          "correct": 0,
          "explanation": "'Oblivious to' means unaware of or unconcerned about surroundings."
        }
      ]
    }
  ]
};

const TEENS_VOCAB_TESTS = {
  "a1": [
    {
      "id": "a1_v1",
      "number": 1,
      "title": "Vocab Test 1: School Facilities & Learning Spaces",
      "badge": "School \u2022 A1",
      "instruction": "Identify the correct school room or area.",
      "questions": [
        {
          "q": "1. A quiet room where students borrow and read books is a _____.",
          "options": [
            "cafeteria",
            "gymnasium",
            "library",
            "corridor"
          ],
          "correct": 2,
          "explanation": "A 'library' is the dedicated space for books and quiet study."
        },
        {
          "q": "2. Students conduct chemistry and biology experiments in the science _____.",
          "options": [
            "laboratory",
            "canteen",
            "stadium",
            "dormitory"
          ],
          "correct": 0,
          "explanation": "A 'laboratory' (lab) is equipped for scientific experiments."
        },
        {
          "q": "3. The large room where students gather for school assemblies is the _____.",
          "options": [
            "auditorium",
            "cafeteria",
            "locker",
            "courtyard"
          ],
          "correct": 0,
          "explanation": "An 'auditorium' hosts school-wide assemblies and performances."
        },
        {
          "q": "4. Students eat their midday lunch together in the school _____.",
          "options": [
            "library",
            "cafeteria",
            "office",
            "gymnasium"
          ],
          "correct": 1,
          "explanation": "The 'cafeteria' is the dining hall for school meals."
        }
      ]
    },
    {
      "id": "a1_v2",
      "number": 2,
      "title": "Vocab Test 2: Classroom Objects & Supplies",
      "badge": "Objects \u2022 A1",
      "instruction": "Select the correct study tool or object.",
      "questions": [
        {
          "q": "1. Students carry their books and supplies inside a sturdy _____.",
          "options": [
            "backpack",
            "drawer",
            "wallet",
            "pocket"
          ],
          "correct": 0,
          "explanation": "A 'backpack' is used to carry books on the back."
        },
        {
          "q": "2. When your pencil tip breaks, you sharpen it using a _____.",
          "options": [
            "stapler",
            "sharpener",
            "ruler",
            "compass"
          ],
          "correct": 1,
          "explanation": "A 'sharpener' restores a sharp writing tip to pencils."
        },
        {
          "q": "3. To erase a mistake written in pencil, you use an _____.",
          "options": [
            "eraser",
            "ink",
            "highlighter",
            "scissor"
          ],
          "correct": 0,
          "explanation": "An 'eraser' removes pencil graphite marks from paper."
        },
        {
          "q": "4. You use a plastic _____ to draw straight lines and measure centimeters.",
          "options": [
            "ruler",
            "brush",
            "notebook",
            "folder"
          ],
          "correct": 0,
          "explanation": "A 'ruler' measures lengths and aids in drawing straight lines."
        }
      ]
    },
    {
      "id": "a1_v3",
      "number": 3,
      "title": "Vocab Test 3: Academic Subjects & Disciplines",
      "badge": "Subjects \u2022 A1",
      "instruction": "Choose the academic subject described.",
      "questions": [
        {
          "q": "1. The subject where you learn about past events and ancient civilizations is _____.",
          "options": [
            "History",
            "Biology",
            "Geometry",
            "Music"
          ],
          "correct": 0,
          "explanation": "'History' studies past human events and civilizations."
        },
        {
          "q": "2. In _____, students paint, sketch, and create sculptures.",
          "options": [
            "Art",
            "Physics",
            "Geography",
            "Chemistry"
          ],
          "correct": 0,
          "explanation": "'Art' covers visual creative arts like drawing and painting."
        },
        {
          "q": "3. The subject where you study continents, oceans, and world capitals is _____.",
          "options": [
            "Geography",
            "History",
            "Math",
            "Drama"
          ],
          "correct": 0,
          "explanation": "'Geography' explores Earth's physical features and nations."
        },
        {
          "q": "4. In _____, students learn numbers, algebra, and geometry equations.",
          "options": [
            "Mathematics",
            "Literature",
            "Philosophy",
            "Art"
          ],
          "correct": 0,
          "explanation": "'Mathematics' deals with numbers, shapes, and calculations."
        }
      ]
    },
    {
      "id": "a1_v4",
      "number": 4,
      "title": "Vocab Test 4: Daily Routine Phrasal Verbs",
      "badge": "Routines \u2022 A1",
      "instruction": "Identify the phrasal verb that matches each daily routine.",
      "questions": [
        {
          "q": "1. I set my alarm clock for 6:00 AM because I need to _____ up early.",
          "options": [
            "wake",
            "turn",
            "stand",
            "look"
          ],
          "correct": 0,
          "explanation": "'Wake up' means to stop sleeping in the morning."
        },
        {
          "q": "2. After waking up, I _____ up out of bed and stretch my arms.",
          "options": [
            "get",
            "bring",
            "fall",
            "go"
          ],
          "correct": 0,
          "explanation": "'Get up' means to rise physically from bed."
        },
        {
          "q": "3. Before leaving the house on chilly days, remember to _____ on a jacket.",
          "options": [
            "put",
            "take",
            "bring",
            "set"
          ],
          "correct": 0,
          "explanation": "'Put on' means to dress yourself in a garment."
        },
        {
          "q": "4. Don't forget to _____ off your bedroom light before falling asleep.",
          "options": [
            "turn",
            "do",
            "make",
            "give"
          ],
          "correct": 0,
          "explanation": "'Turn off' deactivates an electrical lamp or device."
        }
      ]
    },
    {
      "id": "a1_v5",
      "number": 5,
      "title": "Vocab Test 5: Family Members & Relationships",
      "badge": "Family \u2022 A1",
      "instruction": "Select the correct kinship term.",
      "questions": [
        {
          "q": "1. Your father's or mother's sister is your _____.",
          "options": [
            "aunt",
            "niece",
            "cousin",
            "daughter"
          ],
          "correct": 0,
          "explanation": "An 'aunt' is your parent's sister."
        },
        {
          "q": "2. Your aunt's or uncle's child is your _____.",
          "options": [
            "cousin",
            "nephew",
            "brother",
            "grandson"
          ],
          "correct": 0,
          "explanation": "Your aunt or uncle's child is your 'cousin'."
        },
        {
          "q": "3. Your mother's father is your _____.",
          "options": [
            "grandfather",
            "uncle",
            "brother",
            "nephew"
          ],
          "correct": 0,
          "explanation": "A 'grandfather' is the father of one of your parents."
        },
        {
          "q": "4. Your brother's daughter is your _____.",
          "options": [
            "niece",
            "nephew",
            "aunt",
            "cousin"
          ],
          "correct": 0,
          "explanation": "A 'niece' is the daughter of your sibling."
        }
      ]
    },
    {
      "id": "a1_v6",
      "number": 6,
      "title": "Vocab Test 6: Free Time & Leisure Activities",
      "badge": "Hobbies \u2022 A1",
      "instruction": "Identify the leisure activity described.",
      "questions": [
        {
          "q": "1. Sofia loves gliding on four-wheeled boards; her favorite hobby is _____.",
          "options": [
            "skateboarding",
            "hiking",
            "gardening",
            "knitting"
          ],
          "correct": 0,
          "explanation": "'Skateboarding' involves riding a board with wheels."
        },
        {
          "q": "2. Mateo plays the acoustic _____ in the school music band.",
          "options": [
            "guitar",
            "canvas",
            "paintbrush",
            "microscope"
          ],
          "correct": 0,
          "explanation": "A 'guitar' is a popular stringed musical instrument."
        },
        {
          "q": "3. During the weekend, my sister loves reading comic _____.",
          "options": [
            "books",
            "plates",
            "cups",
            "tools"
          ],
          "correct": 0,
          "explanation": "'Comic books' feature visual graphic stories."
        },
        {
          "q": "4. Many teenagers enjoy playing online video _____ with their friends.",
          "options": [
            "games",
            "matches",
            "boards",
            "cards"
          ],
          "correct": 0,
          "explanation": "'Video games' are interactive digital games."
        }
      ]
    },
    {
      "id": "a1_v7",
      "number": 7,
      "title": "Vocab Test 7: Sports & Athletic Equipment",
      "badge": "Sports \u2022 A1",
      "instruction": "Select the correct sport or equipment term.",
      "questions": [
        {
          "q": "1. A sport played with an orange ball and a high metal hoop with a net is _____.",
          "options": [
            "basketball",
            "volleyball",
            "baseball",
            "tennis"
          ],
          "correct": 0,
          "explanation": "'Basketball' is played by shooting a ball into a hoop."
        },
        {
          "q": "2. When riding a bicycle or skateboard, always wear a _____ to protect your head.",
          "options": [
            "helmet",
            "glove",
            "scarf",
            "belt"
          ],
          "correct": 0,
          "explanation": "A 'helmet' protects the head from impact during sports."
        },
        {
          "q": "3. Swimming athletes wear protective _____ over their eyes underwater.",
          "options": [
            "goggles",
            "sunglasses",
            "binoculars",
            "mirrors"
          ],
          "correct": 0,
          "explanation": "'Goggles' keep chlorinated or salt water out of swimmers' eyes."
        },
        {
          "q": "4. Tennis players hit the green ball across the net using a _____.",
          "options": [
            "racket",
            "bat",
            "stick",
            "club"
          ],
          "correct": 0,
          "explanation": "A tennis 'racket' is strung for hitting the ball."
        }
      ]
    },
    {
      "id": "a1_v8",
      "number": 8,
      "title": "Vocab Test 8: Food & Mealtime Vocabulary",
      "badge": "Food \u2022 A1",
      "instruction": "Choose the correct culinary or meal term.",
      "questions": [
        {
          "q": "1. The morning meal eaten after waking up is called _____.",
          "options": [
            "breakfast",
            "lunch",
            "dinner",
            "supper"
          ],
          "correct": 0,
          "explanation": "'Breakfast' is the first meal of the day."
        },
        {
          "q": "2. Crispy green lettuce, red tomatoes, and cucumbers mixed together make a healthy _____.",
          "options": [
            "salad",
            "dessert",
            "soup",
            "smoothie"
          ],
          "correct": 0,
          "explanation": "A 'salad' consists of mixed raw or cooked vegetables."
        },
        {
          "q": "3. Oranges, bananas, strawberries, and apples are all kinds of fresh _____.",
          "options": [
            "fruit",
            "meat",
            "grains",
            "pastas"
          ],
          "correct": 0,
          "explanation": "'Fruit' refers to sweet fleshy plant produce containing seeds."
        },
        {
          "q": "4. At the end of a special meal, people often eat a sweet _____ like cake.",
          "options": [
            "dessert",
            "starter",
            "appetizer",
            "beverage"
          ],
          "correct": 0,
          "explanation": "A 'dessert' is the sweet final course of a meal."
        }
      ]
    },
    {
      "id": "a1_v9",
      "number": 9,
      "title": "Vocab Test 9: Days, Months & Seasons",
      "badge": "Time \u2022 A1",
      "instruction": "Select the correct calendar word.",
      "questions": [
        {
          "q": "1. Saturday and Sunday are collectively known as the _____.",
          "options": [
            "weekend",
            "weekday",
            "fortnight",
            "semester"
          ],
          "correct": 0,
          "explanation": "The 'weekend' consists of Saturday and Sunday."
        },
        {
          "q": "2. The warmest season of the year with sunny days and school vacation is _____.",
          "options": [
            "summer",
            "winter",
            "autumn",
            "spring"
          ],
          "correct": 0,
          "explanation": "'Summer' is the warmest season."
        },
        {
          "q": "3. The season when tree leaves turn orange and brown and fall to the ground is _____.",
          "options": [
            "autumn",
            "spring",
            "summer",
            "monsoon"
          ],
          "correct": 0,
          "explanation": "'Autumn' (fall) is characterized by falling leaves."
        },
        {
          "q": "4. The twelfth and final month of the calendar year is _____.",
          "options": [
            "December",
            "November",
            "January",
            "October"
          ],
          "correct": 0,
          "explanation": "'December' is the 12th month of the year."
        }
      ]
    },
    {
      "id": "a1_v10",
      "number": 10,
      "title": "Vocab Test 10: Clothing & Footwear",
      "badge": "Clothing \u2022 A1",
      "instruction": "Identify the item of clothing described.",
      "questions": [
        {
          "q": "1. Soft athletic shoes designed for running and sports are called _____.",
          "options": [
            "sneakers",
            "slippers",
            "sandals",
            "high heels"
          ],
          "correct": 0,
          "explanation": "'Sneakers' (trainers) are athletic shoes for sports and casual wear."
        },
        {
          "q": "2. On rainy days, wear a waterproof _____ to keep yourself dry.",
          "options": [
            "raincoat",
            "scarf",
            "t-shirt",
            "shorts"
          ],
          "correct": 0,
          "explanation": "A 'raincoat' is waterproof apparel designed for rainy weather."
        },
        {
          "q": "3. In winter, people wear woolen _____ on their hands to stay warm.",
          "options": [
            "gloves",
            "socks",
            "belts",
            "caps"
          ],
          "correct": 0,
          "explanation": "'Gloves' cover the hands and fingers against cold."
        },
        {
          "q": "4. Trousers made of durable blue denim fabric are known as _____.",
          "options": [
            "jeans",
            "skirts",
            "dresses",
            "jackets"
          ],
          "correct": 0,
          "explanation": "'Jeans' are durable denim trousers."
        }
      ]
    },
    {
      "id": "a1_v11",
      "number": 11,
      "title": "Vocab Test 11: Parts of the Human Body",
      "badge": "Anatomy \u2022 A1",
      "instruction": "Select the correct anatomical part.",
      "questions": [
        {
          "q": "1. You use your _____ to hear sounds, voices, and music.",
          "options": [
            "ears",
            "eyes",
            "knees",
            "elbows"
          ],
          "correct": 0,
          "explanation": "'Ears' are the auditory sensory organs."
        },
        {
          "q": "2. The joint in the middle of your arm that bends is your _____.",
          "options": [
            "elbow",
            "ankle",
            "knee",
            "shoulder"
          ],
          "correct": 0,
          "explanation": "The 'elbow' is the arm joint that bends."
        },
        {
          "q": "3. The joint that connects your foot to your lower leg is your _____.",
          "options": [
            "ankle",
            "wrist",
            "waist",
            "neck"
          ],
          "correct": 0,
          "explanation": "The 'ankle' connects the foot and leg."
        },
        {
          "q": "4. You have five _____ on each hand for gripping objects.",
          "options": [
            "fingers",
            "toes",
            "thumbs",
            "nails"
          ],
          "correct": 0,
          "explanation": "Hands have 'fingers' for gripping and tactile sensing."
        }
      ]
    },
    {
      "id": "a1_v12",
      "number": 12,
      "title": "Vocab Test 12: House Rooms & Furniture",
      "badge": "House \u2022 A1",
      "instruction": "Identify the household room or piece of furniture.",
      "questions": [
        {
          "q": "1. The room where family members cook meals and wash dishes is the _____.",
          "options": [
            "kitchen",
            "bathroom",
            "bedroom",
            "attic"
          ],
          "correct": 0,
          "explanation": "The 'kitchen' is where meals are prepared."
        },
        {
          "q": "2. You sleep at night on a comfortable mattress supported by a _____.",
          "options": [
            "bed",
            "desk",
            "bookshelf",
            "wardrobe"
          ],
          "correct": 0,
          "explanation": "A 'bed' is the furniture item used for sleeping."
        },
        {
          "q": "3. A tall wooden piece of furniture used for storing hanging clothes is a _____.",
          "options": [
            "wardrobe",
            "sofa",
            "counter",
            "nightstand"
          ],
          "correct": 0,
          "explanation": "A 'wardrobe' (closet) stores garments and hanging clothes."
        },
        {
          "q": "4. A large comfortable upholstered seat for two or three people is a _____.",
          "options": [
            "sofa",
            "stool",
            "bench",
            "chair"
          ],
          "correct": 0,
          "explanation": "A 'sofa' (couch) seats multiple people comfortably."
        }
      ]
    },
    {
      "id": "a1_v13",
      "number": 13,
      "title": "Vocab Test 13: City Places & Public Buildings",
      "badge": "City \u2022 A1",
      "instruction": "Choose the city building or facility described.",
      "questions": [
        {
          "q": "1. A shop where you buy prescribed medicines and first-aid supplies is a _____.",
          "options": [
            "pharmacy",
            "bakery",
            "stationery",
            "butcher"
          ],
          "correct": 0,
          "explanation": "A 'pharmacy' (chemist/drugstore) dispenses medical goods."
        },
        {
          "q": "2. An open green municipal area with trees, flowers, and benches is a public _____.",
          "options": [
            "park",
            "airport",
            "supermarket",
            "parking lot"
          ],
          "correct": 0,
          "explanation": "A 'park' is a public green outdoor recreation space."
        },
        {
          "q": "3. The building where you mail parcels and buy postage stamps is the _____.",
          "options": [
            "post office",
            "bank",
            "police station",
            "museum"
          ],
          "correct": 0,
          "explanation": "A 'post office' handles postal letters and parcels."
        },
        {
          "q": "4. Where do people go to watch new movies projected on a huge screen?",
          "options": [
            "cinema",
            "zoo",
            "stadium",
            "circus"
          ],
          "correct": 0,
          "explanation": "A 'cinema' (movie theater) screens motion pictures."
        }
      ]
    },
    {
      "id": "a1_v14",
      "number": 14,
      "title": "Vocab Test 14: Animals & Pets",
      "badge": "Animals \u2022 A1",
      "instruction": "Select the correct animal term.",
      "questions": [
        {
          "q": "1. A loyal domesticated canine pet that barks and wags its tail is a _____.",
          "options": [
            "dog",
            "cat",
            "rabbit",
            "hamster"
          ],
          "correct": 0,
          "explanation": "A 'dog' is a domesticated canine companion."
        },
        {
          "q": "2. The tallest mammal on Earth with a remarkably long spotted neck is the _____.",
          "options": [
            "giraffe",
            "elephant",
            "zebra",
            "hippo"
          ],
          "correct": 0,
          "explanation": "The 'giraffe' is known for its long neck and legs."
        },
        {
          "q": "3. An ocean mammal known for its playful intelligence and clicks is the _____.",
          "options": [
            "dolphin",
            "shark",
            "octopus",
            "jellyfish"
          ],
          "correct": 0,
          "explanation": "A 'dolphin' is an intelligent aquatic mammal."
        },
        {
          "q": "4. A large African mammal with a trunk used for drinking and grasping is the _____.",
          "options": [
            "elephant",
            "rhino",
            "camel",
            "lion"
          ],
          "correct": 0,
          "explanation": "An 'elephant' has a flexible trunk and tusks."
        }
      ]
    },
    {
      "id": "a1_v15",
      "number": 15,
      "title": "Vocab Test 15: Transportation & Vehicles",
      "badge": "Transport \u2022 A1",
      "instruction": "Identify the vehicle or mode of travel.",
      "questions": [
        {
          "q": "1. A two-wheeled vehicle powered by pedaling with your legs is a _____.",
          "options": [
            "bicycle",
            "motorcycle",
            "scooter",
            "skateboard"
          ],
          "correct": 0,
          "explanation": "A 'bicycle' (bike) is human-powered via pedals."
        },
        {
          "q": "2. A large winged aircraft that carries hundreds of passengers through the air is an _____.",
          "options": [
            "airplane",
            "helicopter",
            "submarine",
            "train"
          ],
          "correct": 0,
          "explanation": "An 'airplane' (aeroplane) flies passengers long distances."
        },
        {
          "q": "3. An underground railway system operating in major global cities is the _____.",
          "options": [
            "subway",
            "ferry",
            "tram",
            "cable car"
          ],
          "correct": 0,
          "explanation": "The 'subway' (metro/underground) runs trains beneath city streets."
        },
        {
          "q": "4. A large water vessel that carries people and vehicles across rivers or bays is a _____.",
          "options": [
            "ferry",
            "canoe",
            "yacht",
            "speedboat"
          ],
          "correct": 0,
          "explanation": "A 'ferry' transports commuters and cars across bodies of water."
        }
      ]
    },
    {
      "id": "a1_v16",
      "number": 16,
      "title": "Vocab Test 16: Common Adjectives & Opposites",
      "badge": "Adjectives \u2022 A1",
      "instruction": "Select the correct adjective opposite or descriptor.",
      "questions": [
        {
          "q": "1. What is the opposite of the adjective 'difficult'?",
          "options": [
            "easy",
            "hard",
            "heavy",
            "dark"
          ],
          "correct": 0,
          "explanation": "'Easy' is the direct antonym of 'difficult'."
        },
        {
          "q": "2. What is the opposite of the adjective 'noisy'?",
          "options": [
            "quiet",
            "loud",
            "crowded",
            "busy"
          ],
          "correct": 0,
          "explanation": "'Quiet' is the antonym of 'noisy'."
        },
        {
          "q": "3. When an exam requires no effort because you prepared well, it feels _____.",
          "options": [
            "simple",
            "impossible",
            "painful",
            "dull"
          ],
          "correct": 0,
          "explanation": "'Simple' means uncomplicated and easy to understand."
        },
        {
          "q": "4. What is the opposite of the adjective 'safe'?",
          "options": [
            "dangerous",
            "secure",
            "clean",
            "careful"
          ],
          "correct": 0,
          "explanation": "'Dangerous' represents hazard or peril, the opposite of 'safe'."
        }
      ]
    },
    {
      "id": "a1_v17",
      "number": 17,
      "title": "Vocab Test 17: Jobs & Occupations",
      "badge": "Jobs \u2022 A1",
      "instruction": "Select the occupation described.",
      "questions": [
        {
          "q": "1. A professional who flies airplanes for commercial airlines is a _____.",
          "options": [
            "pilot",
            "driver",
            "sailor",
            "mechanic"
          ],
          "correct": 0,
          "explanation": "A 'pilot' is licensed to fly aircraft."
        },
        {
          "q": "2. A person whose job is preparing and cooking food in a restaurant is a _____.",
          "options": [
            "chef",
            "waiter",
            "cashier",
            "manager"
          ],
          "correct": 0,
          "explanation": "A 'chef' or cook prepares culinary dishes."
        },
        {
          "q": "3. A doctor who specializes in caring for sick children is a _____.",
          "options": [
            "pediatrician",
            "dentist",
            "optician",
            "surgeon"
          ],
          "correct": 0,
          "explanation": "A 'pediatrician' treats childhood illnesses."
        },
        {
          "q": "4. A professional who designs buildings, bridges, and houses is an _____.",
          "options": [
            "architect",
            "electrician",
            "plumber",
            "author"
          ],
          "correct": 0,
          "explanation": "An 'architect' designs architectural plans for structures."
        }
      ]
    },
    {
      "id": "a1_v18",
      "number": 18,
      "title": "Vocab Test 18: Everyday Action Verbs",
      "badge": "Verbs \u2022 A1",
      "instruction": "Choose the most appropriate action verb.",
      "questions": [
        {
          "q": "1. When you need to find an unfamiliar word's meaning, you look it _____ in a dictionary.",
          "options": [
            "up",
            "down",
            "out",
            "after"
          ],
          "correct": 0,
          "explanation": "'Look up' information means searching for it in a reference book."
        },
        {
          "q": "2. Before crossing the avenue, always _____ both ways for oncoming traffic.",
          "options": [
            "look",
            "see",
            "hear",
            "listen"
          ],
          "correct": 0,
          "explanation": "'Look both ways' is the standard precautionary action before crossing."
        },
        {
          "q": "3. Remember to _____ your hands with warm water and soap before meals.",
          "options": [
            "wash",
            "wipe",
            "brush",
            "rub"
          ],
          "correct": 0,
          "explanation": "'Wash hands' removes dirt and bacteria before dining."
        },
        {
          "q": "4. Students must _____ attention when the instructor explains complex concepts.",
          "options": [
            "pay",
            "make",
            "give",
            "take"
          ],
          "correct": 0,
          "explanation": "The established collocation is 'pay attention'."
        }
      ]
    },
    {
      "id": "a1_v19",
      "number": 19,
      "title": "Vocab Test 19: Weather & Climate Conditions",
      "badge": "Weather \u2022 A1",
      "instruction": "Identify the weather condition described.",
      "questions": [
        {
          "q": "1. When water droplets condense near the ground making it difficult to see ahead, it is _____.",
          "options": [
            "foggy",
            "sunny",
            "stormy",
            "windy"
          ],
          "correct": 0,
          "explanation": "'Foggy' describes thick mist reducing ground visibility."
        },
        {
          "q": "2. During a thunderstorm, a sudden bright flash of electrical discharge is called _____.",
          "options": [
            "lightning",
            "thunder",
            "hail",
            "breeze"
          ],
          "correct": 0,
          "explanation": "'Lightning' is the visible electrical flash during a storm."
        },
        {
          "q": "3. When skies are clear with no clouds and bright sunshine, the weather is _____.",
          "options": [
            "sunny",
            "cloudy",
            "overcast",
            "rainy"
          ],
          "correct": 0,
          "explanation": "'Sunny' denotes bright sunlight with minimal cloud cover."
        },
        {
          "q": "4. A gentle, refreshing current of cool air is called a _____.",
          "options": [
            "breeze",
            "tornado",
            "hurricane",
            "blizzard"
          ],
          "correct": 0,
          "explanation": "A 'breeze' is a light, pleasant wind."
        }
      ]
    },
    {
      "id": "a1_v20",
      "number": 20,
      "title": "Vocab Test 20: Shopping, Money & Prices",
      "badge": "Shopping \u2022 A1",
      "instruction": "Select the correct commercial or shopping term.",
      "questions": [
        {
          "q": "1. The paper document given to you confirming your store payment is a _____.",
          "options": [
            "receipt",
            "recipe",
            "prescription",
            "billboard"
          ],
          "correct": 0,
          "explanation": "A 'receipt' is the written proof of a monetary purchase."
        },
        {
          "q": "2. When goods in a store are sold at reduced prices, the store is having a _____.",
          "options": [
            "sale",
            "rent",
            "debt",
            "loan"
          ],
          "correct": 0,
          "explanation": "A 'sale' offers merchandise at discounted prices."
        },
        {
          "q": "3. The total amount of money required to purchase an item is its _____.",
          "options": [
            "price",
            "size",
            "brand",
            "weight"
          ],
          "correct": 0,
          "explanation": "The 'price' is the monetary cost of an item."
        },
        {
          "q": "4. The person at the store exit counter who takes payment for goods is the _____.",
          "options": [
            "cashier",
            "manager",
            "guard",
            "cleaner"
          ],
          "correct": 0,
          "explanation": "A 'cashier' operates the cash register and takes payments."
        }
      ]
    }
  ],
  "a2": [
    {
      "id": "a2_v1",
      "number": 1,
      "title": "Vocab Test 1: Travel & Airport Procedures",
      "badge": "Travel \u2022 A2",
      "instruction": "Select the correct aviation or travel term.",
      "questions": [
        {
          "q": "1. Before boarding the airplane, travelers must show their _____ pass at the departure gate.",
          "options": [
            "boarding",
            "departure",
            "ticket",
            "driving"
          ],
          "correct": 0,
          "explanation": "A 'boarding pass' grants official entry onto an aircraft."
        },
        {
          "q": "2. When arriving at a hotel, you must first _____ in at the reception desk.",
          "options": [
            "check",
            "sign",
            "log",
            "step"
          ],
          "correct": 0,
          "explanation": "'Check in' registers your arrival at accommodations."
        },
        {
          "q": "3. The area in an airport where passengers reclaim their suitcases after a flight is baggage _____.",
          "options": [
            "claim",
            "storage",
            "office",
            "desk"
          ],
          "correct": 0,
          "explanation": "The 'baggage claim' is the luggage carousel area."
        },
        {
          "q": "4. A planned vacation journey organized with an itinerary is known as a _____.",
          "options": [
            "trip",
            "stay",
            "flight",
            "commute"
          ],
          "correct": 0,
          "explanation": "A 'trip' is an expedition or journey to a destination."
        }
      ]
    },
    {
      "id": "a2_v2",
      "number": 2,
      "title": "Vocab Test 2: Public Transit & Commuting",
      "badge": "Transit \u2022 A2",
      "instruction": "Choose the correct commuter transportation term.",
      "questions": [
        {
          "q": "1. The monetary price charged for a bus or train ticket is the _____.",
          "options": [
            "fare",
            "fee",
            "tax",
            "tip"
          ],
          "correct": 0,
          "explanation": "A transit 'fare' is the cost of passenger travel."
        },
        {
          "q": "2. Passengers wait for their scheduled train on the concrete _____.",
          "options": [
            "platform",
            "terminal",
            "runway",
            "pier"
          ],
          "correct": 0,
          "explanation": "A 'platform' is the boarding area alongside train tracks."
        },
        {
          "q": "3. When a bus arrives behind its scheduled timetable, it is _____.",
          "options": [
            "delayed",
            "canceled",
            "advanced",
            "missed"
          ],
          "correct": 0,
          "explanation": "'Delayed' means running late or postponed."
        },
        {
          "q": "4. A daily journey traveled regularly between one's home and school or work is a _____.",
          "options": [
            "commute",
            "voyage",
            "safari",
            "flight"
          ],
          "correct": 0,
          "explanation": "A 'commute' is regular daily transit."
        }
      ]
    },
    {
      "id": "a2_v3",
      "number": 3,
      "title": "Vocab Test 3: Environment & Green Actions",
      "badge": "Ecology \u2022 A2",
      "instruction": "Identify the environmental or conservation term.",
      "questions": [
        {
          "q": "1. Volunteers joined the civic campaign to clean up litter and _____ the local wetlands.",
          "options": [
            "protect",
            "pollute",
            "harm",
            "waste"
          ],
          "correct": 0,
          "explanation": "'Protect' means defending nature from damage and degradation."
        },
        {
          "q": "2. Remember to _____ your household waste into paper, plastic, and organic bins.",
          "options": [
            "separate",
            "mix",
            "burn",
            "gather"
          ],
          "correct": 0,
          "explanation": "'Separate' waste means dividing it into sorting categories for recycling."
        },
        {
          "q": "3. The innovative solar panel system generates clean, renewable _____ from sunlight.",
          "options": [
            "energy",
            "smoke",
            "fumes",
            "exhaust"
          ],
          "correct": 0,
          "explanation": "'Energy' or power is produced by solar panels."
        },
        {
          "q": "4. Disposable plastic bags cause severe environmental _____ in marine habitats.",
          "options": [
            "pollution",
            "nutrition",
            "evolution",
            "fertilizer"
          ],
          "correct": 0,
          "explanation": "'Pollution' is the harmful contamination of natural environments."
        }
      ]
    },
    {
      "id": "a2_v4",
      "number": 4,
      "title": "Vocab Test 4: Digital Devices & Hardware",
      "badge": "Tech \u2022 A2",
      "instruction": "Select the correct electronic device or computing term.",
      "questions": [
        {
          "q": "1. A small portable computer with a screen and keyboard that folds shut is a _____.",
          "options": [
            "laptop",
            "desktop",
            "server",
            "mainframe"
          ],
          "correct": 0,
          "explanation": "A 'laptop' is a battery-powered portable personal computer."
        },
        {
          "q": "2. When your mobile phone battery reaches 5%, plug in the _____ immediately.",
          "options": [
            "charger",
            "speaker",
            "sensor",
            "scanner"
          ],
          "correct": 0,
          "explanation": "A 'charger' replenishes electrical energy in rechargeable batteries."
        },
        {
          "q": "3. You listen to music privately without disturbing classmates using wireless _____.",
          "options": [
            "headphones",
            "microphones",
            "webcams",
            "printers"
          ],
          "correct": 0,
          "explanation": "'Headphones' allow private personal audio listening."
        },
        {
          "q": "4. A flat handheld touchscreen computing device larger than a phone is a _____.",
          "options": [
            "tablet",
            "mouse",
            "monitor",
            "projector"
          ],
          "correct": 0,
          "explanation": "A 'tablet' is a handheld touchscreen mobile device."
        }
      ]
    },
    {
      "id": "a2_v5",
      "number": 5,
      "title": "Vocab Test 5: Internet, Apps & Social Media",
      "badge": "Digital \u2022 A2",
      "instruction": "Identify the internet or software application term.",
      "questions": [
        {
          "q": "1. To save a copy of a file from the internet onto your local computer, you _____ it.",
          "options": [
            "download",
            "upload",
            "delete",
            "format"
          ],
          "correct": 0,
          "explanation": "To 'download' means transferring data from the web onto a device."
        },
        {
          "q": "2. When you share photos from your phone to an online platform, you _____ them.",
          "options": [
            "upload",
            "download",
            "erase",
            "browse"
          ],
          "correct": 0,
          "explanation": "To 'upload' transfers files from a personal device to a server."
        },
        {
          "q": "3. To prevent cyber thieves from accessing your accounts, create a strong _____.",
          "options": [
            "password",
            "username",
            "avatar",
            "hashtag"
          ],
          "correct": 0,
          "explanation": "A secure 'password' protects digital accounts from unauthorized access."
        },
        {
          "q": "4. Software programs designed specifically for smartphones and tablets are called _____.",
          "options": [
            "apps",
            "cables",
            "routers",
            "chips"
          ],
          "correct": 0,
          "explanation": "'Apps' (applications) are programs run on mobile operating systems."
        }
      ]
    },
    {
      "id": "a2_v6",
      "number": 6,
      "title": "Vocab Test 6: Health, Symptoms & Medical Care",
      "badge": "Health \u2022 A2",
      "instruction": "Select the correct medical or symptom term.",
      "questions": [
        {
          "q": "1. A medical doctor writes a _____ authorizing the pharmacist to dispense medication.",
          "options": [
            "prescription",
            "receipt",
            "recipe",
            "brochure"
          ],
          "correct": 0,
          "explanation": "A 'prescription' is an official physician's order for medicine."
        },
        {
          "q": "2. An elevation of body temperature above normal indicating an infection is a _____.",
          "options": [
            "fever",
            "bruise",
            "bandage",
            "scar"
          ],
          "correct": 0,
          "explanation": "A 'fever' is an abnormally high internal body temperature."
        },
        {
          "q": "3. A painful sensation experienced in your stomach or abdomen is a _____.",
          "options": [
            "stomachache",
            "headache",
            "sore throat",
            "cough"
          ],
          "correct": 0,
          "explanation": "A 'stomachache' is localized abdominal pain."
        },
        {
          "q": "4. To prevent cavities, dentists recommend brushing your teeth at _____ twice daily.",
          "options": [
            "least",
            "most",
            "last",
            "first"
          ],
          "correct": 0,
          "explanation": "'At least' indicates the minimum recommended dental hygiene frequency."
        }
      ]
    },
    {
      "id": "a2_v7",
      "number": 7,
      "title": "Vocab Test 7: Stores & Retail Shopping",
      "badge": "Commerce \u2022 A2",
      "instruction": "Choose the retail or shopping term described.",
      "questions": [
        {
          "q": "1. A large self-service store divided into departments selling food and home goods is a _____.",
          "options": [
            "supermarket",
            "boutique",
            "bakery",
            "newsagent"
          ],
          "correct": 0,
          "explanation": "A 'supermarket' sells food and groceries across multiple aisles."
        },
        {
          "q": "2. If a purchased clothing item is the wrong size, you can return it for an _____.",
          "options": [
            "exchange",
            "exam",
            "invoice",
            "entrance"
          ],
          "correct": 0,
          "explanation": "An 'exchange' trades a returned item for a correct size or model."
        },
        {
          "q": "3. The room in a clothing store where you try on clothes before buying is the _____ room.",
          "options": [
            "fitting",
            "waiting",
            "living",
            "dining"
          ],
          "correct": 0,
          "explanation": "A 'fitting room' (dressing cubicle) allows customers to try garments."
        },
        {
          "q": "4. An item being sold for a price substantially lower than usual is a true _____.",
          "options": [
            "bargain",
            "burden",
            "penalty",
            "debt"
          ],
          "correct": 0,
          "explanation": "A 'bargain' is an advantageous purchase bought at a discount."
        }
      ]
    },
    {
      "id": "a2_v8",
      "number": 8,
      "title": "Vocab Test 8: Outdoor Adventures & Camping",
      "badge": "Adventure \u2022 A2",
      "instruction": "Select the outdoor recreation or camping term.",
      "questions": [
        {
          "q": "1. Campers sleep inside a portable fabric shelter supported by poles called a _____.",
          "options": [
            "tent",
            "cabin",
            "cottage",
            "shed"
          ],
          "correct": 0,
          "explanation": "A 'tent' is a collapsible fabric shelter used for camping."
        },
        {
          "q": "2. An insulated fabric bag zipped up around the body for warmth while camping is a _____.",
          "options": [
            "sleeping bag",
            "backpack",
            "blanket",
            "hammock"
          ],
          "correct": 0,
          "explanation": "A 'sleeping bag' keeps campers warm outdoors."
        },
        {
          "q": "3. A handheld battery-powered electric light used when walking at night is a _____.",
          "options": [
            "flashlight",
            "candle",
            "lamp",
            "match"
          ],
          "correct": 0,
          "explanation": "A 'flashlight' (torch) provides portable illumination outdoors."
        },
        {
          "q": "4. A magnetic navigational instrument indicating magnetic north is a _____.",
          "options": [
            "compass",
            "thermometer",
            "speedometer",
            "barometer"
          ],
          "correct": 0,
          "explanation": "A 'compass' uses a magnetized needle pointing north for orientation."
        }
      ]
    },
    {
      "id": "a2_v9",
      "number": 9,
      "title": "Vocab Test 9: Cinema, Film & TV Genres",
      "badge": "Media \u2022 A2",
      "instruction": "Identify the entertainment or film category.",
      "questions": [
        {
          "q": "1. A film that presents factual real-life events or educational topics is a _____.",
          "options": [
            "documentary",
            "comedy",
            "thriller",
            "animation"
          ],
          "correct": 0,
          "explanation": "A 'documentary' provides non-fictional educational analysis."
        },
        {
          "q": "2. A motion picture intended to entertain by making the audience laugh is a _____.",
          "options": [
            "comedy",
            "drama",
            "tragedy",
            "horror"
          ],
          "correct": 0,
          "explanation": "A 'comedy' focuses on humor, wit, and laughter."
        },
        {
          "q": "3. A movie filled with car chases, daring rescues, and physical stunts is an _____ film.",
          "options": [
            "action",
            "romance",
            "historical",
            "musical"
          ],
          "correct": 0,
          "explanation": "An 'action' movie emphasizes high-energy kinetic excitement."
        },
        {
          "q": "4. The text script and dialogue written for actors in a theatrical production is the _____.",
          "options": [
            "script",
            "ticket",
            "subtitle",
            "soundtrack"
          ],
          "correct": 0,
          "explanation": "A 'script' contains the dialogue and instructions for performers."
        }
      ]
    },
    {
      "id": "a2_v10",
      "number": 10,
      "title": "Vocab Test 10: Personality & Character Traits",
      "badge": "Character \u2022 A2",
      "instruction": "Choose the adjective describing human personality.",
      "questions": [
        {
          "q": "1. A person who freely shares their belongings and treats others with care is _____.",
          "options": [
            "generous",
            "selfish",
            "lazy",
            "stubborn"
          ],
          "correct": 0,
          "explanation": "'Generous' describes willingness to give help or resources freely."
        },
        {
          "q": "2. Someone who does not speak proudly about their achievements is remarkably _____.",
          "options": [
            "modest",
            "arrogant",
            "boastful",
            "greedy"
          ],
          "correct": 0,
          "explanation": "'Modest' (humble) denotes freedom from vanity or pretension."
        },
        {
          "q": "3. A student who consistently arrives on time and completes promises is highly _____.",
          "options": [
            "reliable",
            "careless",
            "clumsy",
            "forgetful"
          ],
          "correct": 0,
          "explanation": "'Reliable' (dependable) means trustworthy and consistently responsible."
        },
        {
          "q": "4. A person who enjoys meeting new people and conversing comfortably is _____.",
          "options": [
            "outgoing",
            "shy",
            "timid",
            "nervous"
          ],
          "correct": 0,
          "explanation": "'Outgoing' (extroverted) characterizes socially confident people."
        }
      ]
    },
    {
      "id": "a2_v11",
      "number": 11,
      "title": "Vocab Test 11: Food Preparation & Culinary Verbs",
      "badge": "Cooking \u2022 A2",
      "instruction": "Identify the correct cooking action verb.",
      "questions": [
        {
          "q": "1. To heat liquid until bubbles vigorously rise and turn to steam is to _____ it.",
          "options": [
            "boil",
            "fry",
            "bake",
            "chop"
          ],
          "correct": 0,
          "explanation": "To 'boil' means heating water or liquid to its boiling point."
        },
        {
          "q": "2. To cut food into small uniform cubes or pieces with a sharp knife is to _____ it.",
          "options": [
            "chop",
            "stir",
            "pour",
            "spread"
          ],
          "correct": 0,
          "explanation": "To 'chop' or dice food means dividing it into smaller pieces."
        },
        {
          "q": "3. To cook bread, cakes, or cookies inside a hot enclosed oven is to _____.",
          "options": [
            "bake",
            "grill",
            "steam",
            "freeze"
          ],
          "correct": 0,
          "explanation": "To 'bake' involves dry convection heat cooking in an oven."
        },
        {
          "q": "4. To blend or combine liquid ingredients together in a circular motion is to _____.",
          "options": [
            "stir",
            "peel",
            "grate",
            "season"
          ],
          "correct": 0,
          "explanation": "To 'stir' means moving a spoon in a circular motion to mix liquids."
        }
      ]
    },
    {
      "id": "a2_v12",
      "number": 12,
      "title": "Vocab Test 12: Geography & Landscapes",
      "badge": "Nature \u2022 A2",
      "instruction": "Select the correct geographical or landscape feature.",
      "questions": [
        {
          "q": "1. A piece of land entirely surrounded on all sides by water is an _____.",
          "options": [
            "island",
            "peninsula",
            "canyon",
            "desert"
          ],
          "correct": 0,
          "explanation": "An 'island' is land completely encircled by water."
        },
        {
          "q": "2. A vast, arid geographical biome characterized by sand dunes and minimal rain is a _____.",
          "options": [
            "desert",
            "swamp",
            "glacier",
            "jungle"
          ],
          "correct": 0,
          "explanation": "A 'desert' is an arid, dry terrestrial region."
        },
        {
          "q": "3. A cascade of water descending from a high cliff into a pool below is a _____.",
          "options": [
            "waterfall",
            "volcano",
            "valley",
            "plateau"
          ],
          "correct": 0,
          "explanation": "A 'waterfall' is a steep descent of water over a rocky ledge."
        },
        {
          "q": "4. A low geographical area between two mountain ranges or ridges is a _____.",
          "options": [
            "valley",
            "summit",
            "crater",
            "fjord"
          ],
          "correct": 0,
          "explanation": "A 'valley' is the depression between hills or mountains."
        }
      ]
    },
    {
      "id": "a2_v13",
      "number": 13,
      "title": "Vocab Test 13: Phrasal Verbs of Social Life",
      "badge": "Social \u2022 A2",
      "instruction": "Choose the phrasal verb that best completes each social statement.",
      "questions": [
        {
          "q": "1. On Friday afternoons, adolescents love to _____ out at the municipal park.",
          "options": [
            "hang",
            "give",
            "look",
            "stand"
          ],
          "correct": 0,
          "explanation": "'Hang out' means spending casual leisure time socializing with friends."
        },
        {
          "q": "2. Mateo gets _____ well with all his classmates and group teammates.",
          "options": [
            "along",
            "away",
            "over",
            "off"
          ],
          "correct": 0,
          "explanation": "'Get along with' means enjoying a friendly, harmonious relationship."
        },
        {
          "q": "3. Never _____ up on your artistic passions when learning takes patience.",
          "options": [
            "give",
            "take",
            "bring",
            "put"
          ],
          "correct": 0,
          "explanation": "'Give up' means to surrender or abandon an endeavor."
        },
        {
          "q": "4. We decided to meet _____ at the coffee shop entrance at 4:30 PM.",
          "options": [
            "up",
            "in",
            "down",
            "over"
          ],
          "correct": 0,
          "explanation": "'Meet up' means assembling together in a planned location."
        }
      ]
    },
    {
      "id": "a2_v14",
      "number": 14,
      "title": "Vocab Test 14: Collocations with 'Do' & 'Make'",
      "badge": "Collocations \u2022 A2",
      "instruction": "Select whether 'do' or 'make' forms the standard English collocation.",
      "questions": [
        {
          "q": "1. Before handing in your essay, be sure to _____ a thorough check for typos.",
          "options": [
            "do",
            "make",
            "take",
            "have"
          ],
          "correct": 0,
          "explanation": "The established collocation is to 'do a check' or 'do an inspection'."
        },
        {
          "q": "2. Students must _____ a conscious decision about their high school electives.",
          "options": [
            "make",
            "do",
            "give",
            "bring"
          ],
          "correct": 0,
          "explanation": "The correct collocation is to 'make a decision'."
        },
        {
          "q": "3. Can you please _____ me a quick favor and hold this laptop for a moment?",
          "options": [
            "do",
            "make",
            "give",
            "put"
          ],
          "correct": 0,
          "explanation": "The set phrase is to 'do someone a favor'."
        },
        {
          "q": "4. Don't worry if you _____ a small spelling mistake; correct it with an eraser.",
          "options": [
            "make",
            "do",
            "take",
            "have"
          ],
          "correct": 0,
          "explanation": "The correct phrase is to 'make a mistake'."
        }
      ]
    },
    {
      "id": "a2_v15",
      "number": 15,
      "title": "Vocab Test 15: Idiomatic Collocations with 'Take'",
      "badge": "Collocations \u2022 A2",
      "instruction": "Select the correct expression featuring the verb 'take'.",
      "questions": [
        {
          "q": "1. My neighbors always _____ care of our puppy when our family goes on vacation.",
          "options": [
            "take",
            "make",
            "hold",
            "keep"
          ],
          "correct": 0,
          "explanation": "'Take care of' means to look after or protect someone/something."
        },
        {
          "q": "2. Learning a foreign language fluently will certainly _____ time and practice.",
          "options": [
            "take",
            "give",
            "make",
            "do"
          ],
          "correct": 0,
          "explanation": "'Take time' indicates requiring duration and ongoing commitment."
        },
        {
          "q": "3. Diego decided to _____ part in the national youth robotics contest.",
          "options": [
            "take",
            "make",
            "have",
            "do"
          ],
          "correct": 0,
          "explanation": "'Take part in' is the standard idiom meaning to participate."
        },
        {
          "q": "4. When you feel anxious before an exam, _____ a deep breath to calm down.",
          "options": [
            "take",
            "make",
            "do",
            "hold"
          ],
          "correct": 0,
          "explanation": "The standard expression is 'take a deep breath'."
        }
      ]
    },
    {
      "id": "a2_v16",
      "number": 16,
      "title": "Vocab Test 16: Compound Nouns",
      "badge": "Compounds \u2022 A2",
      "instruction": "Identify the compound noun matching the definition.",
      "questions": [
        {
          "q": "1. A marked designated pedestrian path across a busy street is a cross_____.",
          "options": [
            "walk",
            "way",
            "road",
            "line"
          ],
          "correct": 0,
          "explanation": "A 'crosswalk' (zebra crossing) is a pedestrian lane on a roadway."
        },
        {
          "q": "2. The colored skin cosmetic used to moisturize and color lips is lip_____.",
          "options": [
            "stick",
            "brush",
            "gloss",
            "paint"
          ],
          "correct": 0,
          "explanation": "'Lipstick' is cosmetic coloration applied to the lips."
        },
        {
          "q": "3. The light produced by the moon reflecting sunlight at night is moon_____.",
          "options": [
            "light",
            "shine",
            "glow",
            "beam"
          ],
          "correct": 0,
          "explanation": "'Moonlight' is the nocturnal illumination from the moon."
        },
        {
          "q": "4. Dark tinted spectacles worn on sunny afternoons to shield eyes are sun_____.",
          "options": [
            "glasses",
            "lenses",
            "visors",
            "shades"
          ],
          "correct": 0,
          "explanation": "'Sunglasses' protect ocular vision from solar glare."
        }
      ]
    },
    {
      "id": "a2_v17",
      "number": 17,
      "title": "Vocab Test 17: Extreme Adjectives",
      "badge": "Adjectives \u2022 A2",
      "instruction": "Select the extreme adjective meaning 'very + base adjective'.",
      "questions": [
        {
          "q": "1. After running the ten-kilometer cross-country race, the athletes were completely _____.",
          "options": [
            "exhausted",
            "tired",
            "sleepy",
            "slow"
          ],
          "correct": 0,
          "explanation": "'Exhausted' is the extreme adjective meaning utterly worn out."
        },
        {
          "q": "2. The winter temperature outside was below zero; the river water was _____ cold.",
          "options": [
            "freezing",
            "chilly",
            "cool",
            "mild"
          ],
          "correct": 0,
          "explanation": "'Freezing' denotes extreme, ice-forming cold."
        },
        {
          "q": "3. The multi-course dinner prepared by the chef was absolutely _____.",
          "options": [
            "delicious",
            "nice",
            "fine",
            "edible"
          ],
          "correct": 0,
          "explanation": "'Delicious' means having exceptionally pleasant taste."
        },
        {
          "q": "4. The microscopic nano-robot was so _____ that it could pass through capillaries.",
          "options": [
            "tiny",
            "small",
            "little",
            "short"
          ],
          "correct": 0,
          "explanation": "'Tiny' denotes extremely small, minute scale."
        }
      ]
    },
    {
      "id": "a2_v18",
      "number": 18,
      "title": "Vocab Test 18: Workplace, Careers & Office Tasks",
      "badge": "Work \u2022 A2",
      "instruction": "Select the career or workplace term.",
      "questions": [
        {
          "q": "1. A formal meeting where an applicant answers questions to secure employment is an _____.",
          "options": [
            "interview",
            "assembly",
            "inquiry",
            "audition"
          ],
          "correct": 0,
          "explanation": "A job 'interview' evaluates a candidate's qualifications."
        },
        {
          "q": "2. An organized scheduled conference of company colleagues to discuss projects is a _____.",
          "options": [
            "meeting",
            "party",
            "recess",
            "break"
          ],
          "correct": 0,
          "explanation": "A business 'meeting' is an assembly of colleagues to discuss work."
        },
        {
          "q": "3. The formal document summarizing an applicant's education and work history is a _____.",
          "options": [
            "resume",
            "passport",
            "diploma",
            "license"
          ],
          "correct": 0,
          "explanation": "A 'resume' (or CV) outlines career credentials."
        },
        {
          "q": "4. The person who oversees and directs employees in an organization is a _____.",
          "options": [
            "manager",
            "trainee",
            "client",
            "visitor"
          ],
          "correct": 0,
          "explanation": "A 'manager' directs operations and supervises personnel."
        }
      ]
    },
    {
      "id": "a2_v19",
      "number": 19,
      "title": "Vocab Test 19: Emergency Situations & First Aid",
      "badge": "Safety \u2022 A2",
      "instruction": "Identify the emergency or safety procedure term.",
      "questions": [
        {
          "q": "1. A motorized emergency medical vehicle that rushes injured patients to a hospital is an _____.",
          "options": [
            "ambulance",
            "helicopter",
            "engine",
            "patrol"
          ],
          "correct": 0,
          "explanation": "An 'ambulance' transports acute medical patients urgently."
        },
        {
          "q": "2. An adhesive cloth strip used to cover and protect a minor paper cut on a finger is a _____.",
          "options": [
            "bandage",
            "cast",
            "sling",
            "crutch"
          ],
          "correct": 0,
          "explanation": "A 'bandage' (plaster) protects small cutaneous wounds."
        },
        {
          "q": "3. The red canister equipped to spray chemicals and smother small flames is a fire _____.",
          "options": [
            "extinguisher",
            "hydrant",
            "blanket",
            "alarm"
          ],
          "correct": 0,
          "explanation": "A 'fire extinguisher' expels extinguishing agents to put out fires."
        },
        {
          "q": "4. A loud auditory siren warning residents to evacuate a building immediately is an _____.",
          "options": [
            "alarm",
            "echo",
            "chime",
            "intercom"
          ],
          "correct": 0,
          "explanation": "An 'alarm' emits sensory signals to warn of imminent danger."
        }
      ]
    },
    {
      "id": "a2_v20",
      "number": 20,
      "title": "Vocab Test 20: Feelings & Emotional Reactions",
      "badge": "Emotions \u2022 A2",
      "instruction": "Select the adjective describing the emotional reaction.",
      "questions": [
        {
          "q": "1. Sarah felt extremely _____ when her name was announced as the science fair winner.",
          "options": [
            "thrilled",
            "bored",
            "depressed",
            "irritated"
          ],
          "correct": 0,
          "explanation": "'Thrilled' denotes intense excitement, joy, and pleasure."
        },
        {
          "q": "2. Lucas was feeling _____ before his solo violin concert, but he performed flawlessly.",
          "options": [
            "nervous",
            "calm",
            "confident",
            "relaxed"
          ],
          "correct": 0,
          "explanation": "'Nervous' describes apprehension or anxiety before a public event."
        },
        {
          "q": "3. The audience was deeply _____ by the inspiring speech about wildlife conservation.",
          "options": [
            "moved",
            "annoyed",
            "confused",
            "offended"
          ],
          "correct": 0,
          "explanation": "'Moved' means experiencing genuine empathy and emotional resonance."
        },
        {
          "q": "4. When the unexpected surprise party began, Carlos was completely _____.",
          "options": [
            "astonished",
            "indifferent",
            "apathetic",
            "gloomy"
          ],
          "correct": 0,
          "explanation": "'Astonished' denotes profound surprise and wonder."
        }
      ]
    }
  ],
  "b1": [
    {
      "id": "b1_v1",
      "number": 1,
      "title": "Vocab Test 1: Academic Collocations: Research & Inquiry",
      "badge": "Academic \u2022 B1",
      "instruction": "Select the formal academic collocation.",
      "questions": [
        {
          "q": "1. Before investing capital, the committee decided to _____ in-depth research on market trends.",
          "options": [
            "conduct",
            "make",
            "create",
            "practice"
          ],
          "correct": 0,
          "explanation": "The academic collocation is to 'conduct research' or 'carry out research'."
        },
        {
          "q": "2. The graduate student sought to _____ a hypothesis regarding plant photosynthesis.",
          "options": [
            "formulate",
            "build",
            "invent",
            "assemble"
          ],
          "correct": 0,
          "explanation": "Scientists 'formulate a hypothesis'."
        },
        {
          "q": "3. The primary objective of the survey is to _____ empirical data from respondents.",
          "options": [
            "collect",
            "catch",
            "pick",
            "seize"
          ],
          "correct": 0,
          "explanation": "Researchers 'collect data' or 'gather data'."
        },
        {
          "q": "4. Based on the experimental results, the scientists were able to _____ a logical conclusion.",
          "options": [
            "draw",
            "pull",
            "drag",
            "paint"
          ],
          "correct": 0,
          "explanation": "The established collocation is to 'draw a conclusion'."
        }
      ]
    },
    {
      "id": "b1_v2",
      "number": 2,
      "title": "Vocab Test 2: Environmental Sustainability & Ecology",
      "badge": "Ecology \u2022 B1",
      "instruction": "Choose the correct ecological or sustainability term.",
      "questions": [
        {
          "q": "1. Tropical deforestation poses an existential _____ to global biodiversity.",
          "options": [
            "threat",
            "safety",
            "defense",
            "shelter"
          ],
          "correct": 0,
          "explanation": "A 'threat' denotes imminent danger to species survival."
        },
        {
          "q": "2. The municipal government implemented strict regulations to reduce its carbon _____.",
          "options": [
            "footprint",
            "fingerprint",
            "shadow",
            "outline"
          ],
          "correct": 0,
          "explanation": "'Carbon footprint' measures greenhouse gases emitted by human activities."
        },
        {
          "q": "3. Solar, wind, and geothermal power are leading sources of _____ energy.",
          "options": [
            "renewable",
            "exhaustible",
            "toxic",
            "finite"
          ],
          "correct": 0,
          "explanation": "'Renewable' energy comes from replenishable natural sources."
        },
        {
          "q": "4. Industrial chemical waste must not be dumped into wetlands to prevent habitat _____.",
          "options": [
            "destruction",
            "renovation",
            "construction",
            "cultivation"
          ],
          "correct": 0,
          "explanation": "Habitat 'destruction' causes species loss and ecosystem collapse."
        }
      ]
    },
    {
      "id": "b1_v3",
      "number": 3,
      "title": "Vocab Test 3: Technology Innovation & AI",
      "badge": "Technology \u2022 B1",
      "instruction": "Select the technology or digital transformation term.",
      "questions": [
        {
          "q": "1. Machine learning algorithms analyze vast datasets to identify recurring _____.",
          "options": [
            "patterns",
            "borders",
            "fences",
            "shades"
          ],
          "correct": 0,
          "explanation": "'Patterns' are discernible regularities in data arrays."
        },
        {
          "q": "2. Cloud computing allows students to access their digital files from any compatible _____.",
          "options": [
            "device",
            "engine",
            "instrument",
            "machinery"
          ],
          "correct": 0,
          "explanation": "A 'device' is an electronic gadget or computer."
        },
        {
          "q": "3. Automated software bots can perform repetitive data processing tasks with high _____.",
          "options": [
            "efficiency",
            "hesitation",
            "reluctance",
            "fragility"
          ],
          "correct": 0,
          "explanation": "'Efficiency' denotes accomplishing tasks with minimal wasted energy."
        },
        {
          "q": "4. Many computer scientists warn about algorithmic _____ in credit scoring software.",
          "options": [
            "bias",
            "purity",
            "equality",
            "fairness"
          ],
          "correct": 0,
          "explanation": "'Bias' represents systematic prejudice or unfairness in algorithmic output."
        }
      ]
    },
    {
      "id": "b1_v4",
      "number": 4,
      "title": "Vocab Test 4: Global Economy, Trade & Consumerism",
      "badge": "Economy \u2022 B1",
      "instruction": "Identify the economic or commercial concept.",
      "questions": [
        {
          "q": "1. The government introduced tax incentives to stimulate the _____ of green startups.",
          "options": [
            "growth",
            "collapse",
            "decline",
            "stagnation"
          ],
          "correct": 0,
          "explanation": "Economic 'growth' denotes expansion and positive output."
        },
        {
          "q": "2. When market demand exceeds available supply, the price of goods typically _____.",
          "options": [
            "rises",
            "raises",
            "drops",
            "plummets"
          ],
          "correct": 0,
          "explanation": "Intransitive verb 'rises' describes upward price movement."
        },
        {
          "q": "3. Goods brought into a country from international producers are classified as _____.",
          "options": [
            "imports",
            "exports",
            "tariffs",
            "subsidies"
          ],
          "correct": 0,
          "explanation": "'Imports' are foreign commodities brought into a domestic market."
        },
        {
          "q": "4. A prolonged economic downturn characterized by declining employment is a _____.",
          "options": [
            "recession",
            "boom",
            "surplus",
            "inflation"
          ],
          "correct": 0,
          "explanation": "A 'recession' is a significant temporary economic contraction."
        }
      ]
    },
    {
      "id": "b1_v5",
      "number": 5,
      "title": "Vocab Test 5: Media Literacy & Information Integrity",
      "badge": "Media \u2022 B1",
      "instruction": "Select the media literacy or journalism term.",
      "questions": [
        {
          "q": "1. Digital literacy enables readers to distinguish factual reporting from _____ news.",
          "options": [
            "fake",
            "solid",
            "authentic",
            "verified"
          ],
          "correct": 0,
          "explanation": "'Fake news' designates deliberately fabricated misinformation."
        },
        {
          "q": "2. Investigative reporters must always corroborate statements with multiple reliable _____.",
          "options": [
            "sources",
            "rumors",
            "gossips",
            "guesses"
          ],
          "correct": 0,
          "explanation": "'Sources' are originators or witnesses of factual evidence."
        },
        {
          "q": "3. A sensationalized headline crafted to entice users to click a link is known as click_____.",
          "options": [
            "bait",
            "trap",
            "hook",
            "snare"
          ],
          "correct": 0,
          "explanation": "'Clickbait' entices web traffic through exaggerated headlines."
        },
        {
          "q": "4. Journalistic ethics require reporters to maintain an objective and impartial _____.",
          "options": [
            "perspective",
            "favoritism",
            "prejudice",
            "bias"
          ],
          "correct": 0,
          "explanation": "An impartial 'perspective' ensures balanced, fair journalism."
        }
      ]
    },
    {
      "id": "b1_v6",
      "number": 6,
      "title": "Vocab Test 6: Psychology & Mental Health",
      "badge": "Psychology \u2022 B1",
      "instruction": "Choose the psychological or emotional health term.",
      "questions": [
        {
          "q": "1. The youth organization launched a campaign to _____ awareness regarding anxiety.",
          "options": [
            "raise",
            "rise",
            "grow",
            "lift"
          ],
          "correct": 0,
          "explanation": "The established collocation is to 'raise awareness'."
        },
        {
          "q": "2. The psychological capacity to recover quickly from adversity and stress is called _____.",
          "options": [
            "resilience",
            "fatigue",
            "lethargy",
            "inertia"
          ],
          "correct": 0,
          "explanation": "'Resilience' denotes mental elasticity and positive recovery."
        },
        {
          "q": "3. Chronic psychological tension caused by academic overload can lead to academic _____.",
          "options": [
            "burnout",
            "turnout",
            "breakdown",
            "fallout"
          ],
          "correct": 0,
          "explanation": "'Burnout' is state of emotional exhaustion from prolonged stress."
        },
        {
          "q": "4. Positive peer encouragement can reinforce a student's self-_____.",
          "options": [
            "esteem",
            "doubt",
            "fear",
            "blame"
          ],
          "correct": 0,
          "explanation": "'Self-esteem' denotes healthy confidence in one's worth and abilities."
        }
      ]
    },
    {
      "id": "b1_v7",
      "number": 7,
      "title": "Vocab Test 7: Higher Education & Scholarships",
      "badge": "Education \u2022 B1",
      "instruction": "Select the academic institution or scholarship term.",
      "questions": [
        {
          "q": "1. Financial aid awarded to a student based on academic excellence is a _____.",
          "options": [
            "scholarship",
            "fine",
            "mortgage",
            "tax"
          ],
          "correct": 0,
          "explanation": "A 'scholarship' funds education based on merit or need."
        },
        {
          "q": "2. The subjects and academic content taught in an educational program constitute the _____.",
          "options": [
            "curriculum",
            "campus",
            "hallway",
            "cafeteria"
          ],
          "correct": 0,
          "explanation": "The 'curriculum' is the structured course of academic study."
        },
        {
          "q": "3. After completing undergraduate studies, students receive a bachelor's _____.",
          "options": [
            "degree",
            "permit",
            "license",
            "voucher"
          ],
          "correct": 0,
          "explanation": "A university 'degree' certifies graduation."
        },
        {
          "q": "4. A formal research essay written as a requirement for graduation is a _____.",
          "options": [
            "thesis",
            "novel",
            "pamphlet",
            "circular"
          ],
          "correct": 0,
          "explanation": "An academic 'thesis' (or dissertation) presents original research."
        }
      ]
    },
    {
      "id": "b1_v8",
      "number": 8,
      "title": "Vocab Test 8: Citizenship, Laws & Civil Society",
      "badge": "Civics \u2022 B1",
      "instruction": "Identify the civic duty or legal governance concept.",
      "questions": [
        {
          "q": "1. In democratic societies, citizens exercise their fundamental right to _____ in elections.",
          "options": [
            "vote",
            "sue",
            "protest",
            "strike"
          ],
          "correct": 0,
          "explanation": "To 'vote' is the core democratic franchise."
        },
        {
          "q": "2. Laws enacted by parliamentary bodies are officially referred to as _____.",
          "options": [
            "legislation",
            "customs",
            "myths",
            "traditions"
          ],
          "correct": 0,
          "explanation": "'Legislation' encompasses statutory laws enacted by a legislature."
        },
        {
          "q": "3. Citizens who voluntarily donate unpaid hours to help local communities are _____.",
          "options": [
            "volunteers",
            "employees",
            "contractors",
            "officials"
          ],
          "correct": 0,
          "explanation": "'Volunteers' offer service without financial compensation."
        },
        {
          "q": "4. Maintaining social harmony requires strict respect for the rule of _____.",
          "options": [
            "law",
            "force",
            "power",
            "wealth"
          ],
          "correct": 0,
          "explanation": "The 'rule of law' ensures legal equality and constitutional order."
        }
      ]
    },
    {
      "id": "b1_v9",
      "number": 9,
      "title": "Vocab Test 9: Culture, Heritage & Diversity",
      "badge": "Culture \u2022 B1",
      "instruction": "Select the cultural or anthropological term.",
      "questions": [
        {
          "q": "1. Ancient monuments and indigenous traditions constitute a nation's cultural _____.",
          "options": [
            "heritage",
            "pollution",
            "debt",
            "liability"
          ],
          "correct": 0,
          "explanation": "Cultural 'heritage' encompasses traditions and historical monuments."
        },
        {
          "q": "2. The coexistence of diverse cultural perspectives within one society is multicultural _____.",
          "options": [
            "diversity",
            "uniformity",
            "isolation",
            "conformity"
          ],
          "correct": 0,
          "explanation": "'Diversity' represents variety and multiple unique perspectives."
        },
        {
          "q": "3. Traditional customs handed down across generations are called _____.",
          "options": [
            "traditions",
            "novelties",
            "fads",
            "trends"
          ],
          "correct": 0,
          "explanation": "'Traditions' are transgenerational customs and rituals."
        },
        {
          "q": "4. The process by which languages and cultures interact worldwide is global _____.",
          "options": [
            "integration",
            "stagnation",
            "quarantine",
            "division"
          ],
          "correct": 0,
          "explanation": "Global 'integration' links diverse societies worldwide."
        }
      ]
    },
    {
      "id": "b1_v10",
      "number": 10,
      "title": "Vocab Test 10: Phrasal Verbs of Work & Enterprise",
      "badge": "Phrasals \u2022 B1",
      "instruction": "Choose the formal or workplace phrasal verb.",
      "questions": [
        {
          "q": "1. The research foundation decided to _____ out an extensive environmental survey.",
          "options": [
            "carry",
            "bring",
            "turn",
            "make"
          ],
          "correct": 0,
          "explanation": "'Carry out' means to conduct or execute an investigation/task."
        },
        {
          "q": "2. Two innovative entrepreneurs decided to _____ up a software design firm.",
          "options": [
            "set",
            "make",
            "get",
            "do"
          ],
          "correct": 0,
          "explanation": "'Set up' means to establish or found an enterprise or system."
        },
        {
          "q": "3. Due to extreme torrential rain, the committee was forced to _____ off the outdoor festival.",
          "options": [
            "call",
            "put",
            "take",
            "give"
          ],
          "correct": 0,
          "explanation": "'Call off' means to cancel a scheduled event."
        },
        {
          "q": "4. It took engineers three weeks to _____ out what caused the turbine glitch.",
          "options": [
            "figure",
            "look",
            "run",
            "fall"
          ],
          "correct": 0,
          "explanation": "'Figure out' means discovering or solving a complicated problem."
        }
      ]
    },
    {
      "id": "b1_v11",
      "number": 11,
      "title": "Vocab Test 11: Academic Discourse Markers",
      "badge": "Transitions \u2022 B1",
      "instruction": "Select the transitional connector that conveys the correct semantic logic.",
      "questions": [
        {
          "q": "1. Electric cars emit zero direct pollutants; _____, battery manufacturing carries an environmental cost.",
          "options": [
            "nonetheless",
            "furthermore",
            "similarly",
            "therefore"
          ],
          "correct": 0,
          "explanation": "'Nonetheless' introduces a concession or contrasting consideration."
        },
        {
          "q": "2. Digital tablets reduce heavy backpacks; _____, they provide instant interactive quizzes.",
          "options": [
            "furthermore",
            "on the contrary",
            "otherwise",
            "nevertheless"
          ],
          "correct": 0,
          "explanation": "'Furthermore' adds supporting evidence in agreement."
        },
        {
          "q": "3. The satellite missed its trajectory window; _____, communication was temporarily lost.",
          "options": [
            "consequently",
            "whereas",
            "although",
            "despite"
          ],
          "correct": 0,
          "explanation": "'Consequently' denotes direct causal consequence."
        },
        {
          "q": "4. The north was affected by drought, _____ the southern provinces experienced heavy rainfall.",
          "options": [
            "whereas",
            "furthermore",
            "therefore",
            "moreover"
          ],
          "correct": 0,
          "explanation": "'Whereas' contrasts two simultaneous facts."
        }
      ]
    },
    {
      "id": "b1_v12",
      "number": 12,
      "title": "Vocab Test 12: Word Formation: Noun Suffixes",
      "badge": "Morphology \u2022 B1",
      "instruction": "Identify the correct nominal suffix (-tion, -ment, -ness, -ity).",
      "questions": [
        {
          "q": "1. Winning the national robotics contest was an extraordinary achieve_____ for the team.",
          "options": [
            "ment",
            "tion",
            "ness",
            "ity"
          ],
          "correct": 0,
          "explanation": "Root 'achieve' forms the noun 'achievement'."
        },
        {
          "q": "2. Scientific observa_____ confirmed the orbital period of the distant exoplanet.",
          "options": [
            "tion",
            "ment",
            "ness",
            "ity"
          ],
          "correct": 0,
          "explanation": "'Observe' forms 'observation'."
        },
        {
          "q": "3. Regular exercise contributes immensely to emotional calm_____ and vitality.",
          "options": [
            "ness",
            "ment",
            "tion",
            "ity"
          ],
          "correct": 0,
          "explanation": "Adjective 'calm' forms noun 'calmness'."
        },
        {
          "q": "4. Solar photovoltaic cells convert solar energy with remarkable capac_____.",
          "options": [
            "ity",
            "ness",
            "ment",
            "tion"
          ],
          "correct": 0,
          "explanation": "Root forms 'capacity'."
        }
      ]
    },
    {
      "id": "b1_v13",
      "number": 13,
      "title": "Vocab Test 13: Word Formation: Adjective Suffixes",
      "badge": "Morphology \u2022 B1",
      "instruction": "Choose the correct adjectival derivative (-able, -ive, -ous, -al).",
      "questions": [
        {
          "q": "1. Regular cardio exercise is highly benefit_____ for long-term cardiovascular health.",
          "options": [
            "ial",
            "able",
            "ive",
            "ous"
          ],
          "correct": 0,
          "explanation": "'Benefit' forms adjective 'beneficial'."
        },
        {
          "q": "2. Glass containers are completely recycl_____ and can be melted down repeatedly.",
          "options": [
            "able",
            "ive",
            "al",
            "ous"
          ],
          "correct": 0,
          "explanation": "'Recycle' forms 'recyclable'."
        },
        {
          "q": "3. The young scientist presented an innovat_____ method for filtering industrial water.",
          "options": [
            "ive",
            "able",
            "ous",
            "al"
          ],
          "correct": 0,
          "explanation": "'Innovate' forms adjective 'innovative'."
        },
        {
          "q": "4. Walking along mountain precipices during icy weather is extremely hazard_____.",
          "options": [
            "ous",
            "able",
            "ive",
            "al"
          ],
          "correct": 0,
          "explanation": "Noun 'hazard' forms adjective 'hazardous'."
        }
      ]
    },
    {
      "id": "b1_v14",
      "number": 14,
      "title": "Vocab Test 14: High-Frequency Academic Collocations",
      "badge": "Collocations \u2022 B1",
      "instruction": "Select the verb forming the authentic English collocation.",
      "questions": [
        {
          "q": "1. Her persuasive presentation _____ a lasting impression on the international jury.",
          "options": [
            "made",
            "did",
            "took",
            "had"
          ],
          "correct": 0,
          "explanation": "The established collocation is 'make an impression'."
        },
        {
          "q": "2. Students should _____ advantage of university online library archives.",
          "options": [
            "take",
            "make",
            "do",
            "hold"
          ],
          "correct": 0,
          "explanation": "The collocation is 'take advantage of' (utilize an opportunity)."
        },
        {
          "q": "3. Before writing the essay, the teacher asked us to _____ a brainstorm session.",
          "options": [
            "have",
            "make",
            "do",
            "create"
          ],
          "correct": 0,
          "explanation": "To 'have a brainstorm session' or 'have a discussion'."
        },
        {
          "q": "4. The new solar installation will _____ a real difference to the school's electricity bills.",
          "options": [
            "make",
            "do",
            "give",
            "take"
          ],
          "correct": 0,
          "explanation": "The phrase is 'make a difference'."
        }
      ]
    },
    {
      "id": "b1_v15",
      "number": 15,
      "title": "Vocab Test 15: Laboratory Science Terminology",
      "badge": "Science \u2022 B1",
      "instruction": "Identify the scientific equipment or procedural term.",
      "questions": [
        {
          "q": "1. An optical instrument used to magnify microscopic cellular organisms is a _____.",
          "options": [
            "microscope",
            "telescope",
            "periscope",
            "stethoscope"
          ],
          "correct": 0,
          "explanation": "A 'microscope' magnifies cellular and microscopic objects."
        },
        {
          "q": "2. A cylindrical glass container with a flat bottom used in chemistry laboratories is a _____.",
          "options": [
            "beaker",
            "saucer",
            "towel",
            "funnel"
          ],
          "correct": 0,
          "explanation": "A 'beaker' is a standard graduated glass vessel in chemistry."
        },
        {
          "q": "3. The proposed explanation made on the basis of limited evidence as a starting point is a _____.",
          "options": [
            "hypothesis",
            "fact",
            "law",
            "proof"
          ],
          "correct": 0,
          "explanation": "A 'hypothesis' is a testable scientific proposition."
        },
        {
          "q": "4. In a controlled scientific experiment, the factor deliberately altered by researchers is the _____.",
          "options": [
            "variable",
            "constant",
            "fixture",
            "baseline"
          ],
          "correct": 0,
          "explanation": "The 'variable' is the condition altered to test effects."
        }
      ]
    },
    {
      "id": "b1_v16",
      "number": 16,
      "title": "Vocab Test 16: Rhetoric, Debate & Public Speaking",
      "badge": "Rhetoric \u2022 B1",
      "instruction": "Choose the term used in argumentation and debating.",
      "questions": [
        {
          "q": "1. In an argumentative debate, an opposing argument offered to challenge a thesis is a _____.",
          "options": [
            "counterargument",
            "consensus",
            "agreement",
            "metaphor"
          ],
          "correct": 0,
          "explanation": "A 'counterargument' responds to and refutes an opposing stance."
        },
        {
          "q": "2. When debaters reach a shared unified position after prolonged discussion, they achieve _____.",
          "options": [
            "consensus",
            "discord",
            "clash",
            "stalemate"
          ],
          "correct": 0,
          "explanation": "'Consensus' denotes general agreement across all participants."
        },
        {
          "q": "3. Concrete factual data and historical examples provided to substantiate an argument are _____.",
          "options": [
            "evidence",
            "rumors",
            "theories",
            "doubts"
          ],
          "correct": 0,
          "explanation": "'Evidence' supports argumentative validity."
        },
        {
          "q": "4. The clear central proposition defended in an academic essay or speech is the _____.",
          "options": [
            "thesis",
            "anecdote",
            "prologue",
            "cliche"
          ],
          "correct": 0,
          "explanation": "The 'thesis' is the central claim of an argumentative work."
        }
      ]
    },
    {
      "id": "b1_v17",
      "number": 17,
      "title": "Vocab Test 17: Urban Infrastructure & City Design",
      "badge": "Urbanism \u2022 B1",
      "instruction": "Select the urban design or public works term.",
      "questions": [
        {
          "q": "1. Modern urban architects installed advanced drainage systems to mitigate the peril of _____.",
          "options": [
            "flooding",
            "drought",
            "breeze",
            "earthquakes"
          ],
          "correct": 0,
          "explanation": "Effective stormwater drainage prevents urban 'flooding'."
        },
        {
          "q": "2. The basic underlying physical systems of a city like roads, power, and water are _____.",
          "options": [
            "infrastructure",
            "furniture",
            "appliances",
            "antiques"
          ],
          "correct": 0,
          "explanation": "'Infrastructure' constitutes the fundamental physical frameworks of a society."
        },
        {
          "q": "3. Residential zones situated on the outer periphery of a major metropolitan city are the _____.",
          "options": [
            "suburbs",
            "capitals",
            "centers",
            "downtowns"
          ],
          "correct": 0,
          "explanation": "'Suburbs' are residential outskirts surrounding a metropolis."
        },
        {
          "q": "4. Converting a dilapidated historic neighborhood into an attractive arts district is urban _____.",
          "options": [
            "renewal",
            "decay",
            "abandonment",
            "collapse"
          ],
          "correct": 0,
          "explanation": "'Urban renewal' revitalizes aging municipal sectors."
        }
      ]
    },
    {
      "id": "b1_v18",
      "number": 18,
      "title": "Vocab Test 18: Public Health & Medical Sciences",
      "badge": "Health \u2022 B1",
      "instruction": "Identify the public health or biomedical term.",
      "questions": [
        {
          "q": "1. A biological preparation that provides acquired active immunity to an infectious pathogen is a _____.",
          "options": [
            "vaccine",
            "toxin",
            "microbe",
            "parasite"
          ],
          "correct": 0,
          "explanation": "A 'vaccine' stimulates immune defense against disease."
        },
        {
          "q": "2. Microscopic single-celled organisms that can be either beneficial or pathogenic are _____.",
          "options": [
            "bacteria",
            "vitamins",
            "enzymes",
            "hormones"
          ],
          "correct": 0,
          "explanation": "'Bacteria' are single-celled microorganisms."
        },
        {
          "q": "3. The widespread occurrence of an infectious disease in a community at a specific time is an _____.",
          "options": [
            "epidemic",
            "antidote",
            "injection",
            "allotment"
          ],
          "correct": 0,
          "explanation": "An 'epidemic' is a rapid regional outbreak of infectious illness."
        },
        {
          "q": "4. Substances used to destroy or inhibit the growth of harmful bacteria in the body are _____.",
          "options": [
            "antibiotics",
            "sedatives",
            "narcotics",
            "placebos"
          ],
          "correct": 0,
          "explanation": "'Antibiotics' target and kill bacterial pathogens."
        }
      ]
    },
    {
      "id": "b1_v19",
      "number": 19,
      "title": "Vocab Test 19: Modal Adverbs of Probability & Certainty",
      "badge": "Nuance \u2022 B1",
      "instruction": "Choose the adverb expressing the accurate degree of certainty.",
      "questions": [
        {
          "q": "1. Given the robust weather forecast, it will _____ remain sunny throughout the afternoon.",
          "options": [
            "undoubtedly",
            "impossibly",
            "unlikely",
            "hardly"
          ],
          "correct": 0,
          "explanation": "'Undoubtedly' conveys absolute conviction and certainty."
        },
        {
          "q": "2. The robotic probe will _____ encounter water ice deposits on the Martian south pole.",
          "options": [
            "likely",
            "scarcely",
            "doubtfully",
            "rarely"
          ],
          "correct": 0,
          "explanation": "'Likely' expresses high probability."
        },
        {
          "q": "3. The experimental solar battery is _____ more efficient than previous lithium prototypes.",
          "options": [
            "arguably",
            "scarcely",
            "barely",
            "reluctantly"
          ],
          "correct": 0,
          "explanation": "'Arguably' indicates that plausible evidence supports the claim."
        },
        {
          "q": "4. Despite the high cost, the municipal investment will _____ pay dividends in clean energy.",
          "options": [
            "inevitably",
            "tentatively",
            "skeptically",
            "hesitantly"
          ],
          "correct": 0,
          "explanation": "'Inevitably' characterizes an outcome that is bound to happen."
        }
      ]
    },
    {
      "id": "b1_v20",
      "number": 20,
      "title": "Vocab Test 20: Idioms for Academic & Personal Growth",
      "badge": "Idioms \u2022 B1",
      "instruction": "Select the idiom matching the figurative definition.",
      "questions": [
        {
          "q": "1. When you study late into the night before a major examination, you 'burn the midnight _____.'",
          "options": [
            "oil",
            "candle",
            "lamp",
            "fuel"
          ],
          "correct": 0,
          "explanation": "The traditional idiom is to 'burn the midnight oil' (work late into the night)."
        },
        {
          "q": "2. When someone grasps a complex scientific concept effortlessly, they 'catch _____ quickly.'",
          "options": [
            "on",
            "up",
            "out",
            "in"
          ],
          "correct": 0,
          "explanation": "To 'catch on' means to understand or comprehend something."
        },
        {
          "q": "3. Don't worry about minor mistakes; learn from them and 'keep your _____ up.'",
          "options": [
            "chin",
            "nose",
            "ear",
            "neck"
          ],
          "correct": 0,
          "explanation": "'Keep your chin up' encourages optimism during difficulty."
        },
        {
          "q": "4. Achieving a 100% score on the physics test 'passed with flying _____.'",
          "options": [
            "colors",
            "flags",
            "ribbons",
            "wings"
          ],
          "correct": 0,
          "explanation": "To pass 'with flying colors' means succeeding triumphantly."
        }
      ]
    }
  ],
  "b2": [
    {
      "id": "b2_v1",
      "number": 1,
      "title": "Vocab Test 1: Three-Part Phrasal Verbs",
      "badge": "Phrasals \u2022 B2",
      "instruction": "Select the three-part phrasal verb matching the definition.",
      "questions": [
        {
          "q": "1. The union representatives refused to _____ with unfair wage reductions.",
          "options": [
            "put up",
            "come down",
            "stand out",
            "take over"
          ],
          "correct": 0,
          "explanation": "'Put up with' means to tolerate or endure an unpleasant situation."
        },
        {
          "q": "2. When the unexpected hardware crisis struck, the team had to fall _____ on backup generators.",
          "options": [
            "back",
            "out",
            "away",
            "through"
          ],
          "correct": 0,
          "explanation": "'Fall back on' means resorting to an emergency alternative."
        },
        {
          "q": "3. Ethical leaders never look _____ on individuals with less formal education.",
          "options": [
            "down",
            "up",
            "away",
            "over"
          ],
          "correct": 0,
          "explanation": "'Look down on' means to regard with contempt or superiority."
        },
        {
          "q": "4. We unexpectedly came _____ against bureaucratic hurdles when applying for the patent.",
          "options": [
            "up",
            "down",
            "out",
            "off"
          ],
          "correct": 0,
          "explanation": "'Come up against' means encountering unexpected resistance or obstacles."
        }
      ]
    },
    {
      "id": "b2_v2",
      "number": 2,
      "title": "Vocab Test 2: Academic Collocations of Impact",
      "badge": "Collocations \u2022 B2",
      "instruction": "Identify the high-level academic collocation.",
      "questions": [
        {
          "q": "1. Her revolutionary thesis precipitated a fundamental _____ in cognitive linguistics.",
          "options": [
            "paradigm shift",
            "routine switch",
            "simple change",
            "casual move"
          ],
          "correct": 0,
          "explanation": "'Paradigm shift' denotes a profound conceptual transformation in a field."
        },
        {
          "q": "2. Fluent bilingualism gave the candidate a decisive competitive _____ during corporate recruiting.",
          "options": [
            "edge",
            "border",
            "fringe",
            "limit"
          ],
          "correct": 0,
          "explanation": "'Competitive edge' is an advantageous superiority over rivals."
        },
        {
          "q": "3. The empirical evidence provides compelling _____ for the climate modeling hypothesis.",
          "options": [
            "grounds",
            "floors",
            "soils",
            "roots"
          ],
          "correct": 0,
          "explanation": "'Compelling grounds' signifies strong, persuasive justification."
        },
        {
          "q": "4. Economists warned that excessive debt could lead to a vicious _____ of austerity.",
          "options": [
            "circle",
            "triangle",
            "loop",
            "square"
          ],
          "correct": 0,
          "explanation": "'Vicious circle' (or cycle) denotes self-perpetuating harm."
        }
      ]
    },
    {
      "id": "b2_v3",
      "number": 3,
      "title": "Vocab Test 3: Collocations of Precision & Rigor",
      "badge": "Precision \u2022 B2",
      "instruction": "Select the adjective forming the rigorous academic collocation.",
      "questions": [
        {
          "q": "1. Despite rigorous scrutiny, the experimental data proved remarkably _____ across trials.",
          "options": [
            "consistent",
            "consisting",
            "consistency",
            "consistently"
          ],
          "correct": 0,
          "explanation": "Predicate adjective 'consistent' denotes stability and reproducible agreement."
        },
        {
          "q": "2. After six hours of deliberation, the faculty committee reached a _____ decision.",
          "options": [
            "unanimous",
            "discordant",
            "fractional",
            "divided"
          ],
          "correct": 0,
          "explanation": "A 'unanimous' decision is approved with total, undivided consensus."
        },
        {
          "q": "3. Theoretical claims are meaningless without verifiable _____ evidence from laboratory testing.",
          "options": [
            "empirical",
            "fictional",
            "imaginary",
            "casual"
          ],
          "correct": 0,
          "explanation": "'Empirical' evidence is acquired through observation and scientific experiment."
        },
        {
          "q": "4. The defense lawyer demonstrated that the allegations were based on _____ speculation.",
          "options": [
            "unfounded",
            "proven",
            "documented",
            "certified"
          ],
          "correct": 0,
          "explanation": "'Unfounded' means lacking any factual or legal basis."
        }
      ]
    },
    {
      "id": "b2_v4",
      "number": 4,
      "title": "Vocab Test 4: Register & Nuance in Academic Discourse",
      "badge": "Register \u2022 B2",
      "instruction": "Select the adjective capturing delicate distinctions.",
      "questions": [
        {
          "q": "1. The defense attorney argued that the circumstantial evidence was purely _____ and inadmissible.",
          "options": [
            "conjectural",
            "tangible",
            "concrete",
            "irrefutable"
          ],
          "correct": 0,
          "explanation": "'Conjectural' characterizes conclusions based on guesswork rather than facts."
        },
        {
          "q": "2. The novel's evocative prose captures the _____ nuances of grief and hope.",
          "options": [
            "subtle",
            "blunt",
            "crude",
            "coarse"
          ],
          "correct": 0,
          "explanation": "'Subtle' denotes fine, delicate distinctions requiring sharp discernment."
        },
        {
          "q": "3. The experimental findings, while promising, remained fundamentally _____.",
          "options": [
            "inconclusive",
            "definitive",
            "decisive",
            "absolute"
          ],
          "correct": 0,
          "explanation": "'Inconclusive' results do not lead to a firm, unassailable verdict."
        },
        {
          "q": "4. Advances in quantum computing have made previous cryptographic schemes completely _____.",
          "options": [
            "obsolete",
            "contemporary",
            "novel",
            "vital"
          ],
          "correct": 0,
          "explanation": "'Obsolete' denotes something no longer viable due to technological progression."
        }
      ]
    },
    {
      "id": "b2_v5",
      "number": 5,
      "title": "Vocab Test 5: High-Level Academic & Discursive Idioms",
      "badge": "Idioms \u2022 B2",
      "instruction": "Identify the idiom used in formal argument and critique.",
      "questions": [
        {
          "q": "1. Historians have long sought to _____ light on the enigmatic collapse of the Bronze Age citadel.",
          "options": [
            "shed",
            "throw",
            "cast",
            "pour"
          ],
          "correct": 0,
          "explanation": "'Shed light on' means clarifying or revealing hidden truths."
        },
        {
          "q": "2. Her passionate defense of digital privacy rights struck a responsive _____ with young voters.",
          "options": [
            "chord",
            "string",
            "bell",
            "note"
          ],
          "correct": 0,
          "explanation": "'Strike a chord with' means provoking deep resonance, sympathy, or enthusiasm."
        },
        {
          "q": "3. The research expedition ran into financial trouble when their primary grant fell _____.",
          "options": [
            "through",
            "apart",
            "over",
            "out"
          ],
          "correct": 0,
          "explanation": "'Fall through' means a planned arrangement fails to materialize."
        },
        {
          "q": "4. We must take into _____ the socioeconomic background of survey respondents.",
          "options": [
            "account",
            "mind",
            "memory",
            "sight"
          ],
          "correct": 0,
          "explanation": "'Take into account' (or consider) is standard analytical phrasing."
        }
      ]
    },
    {
      "id": "b2_v6",
      "number": 6,
      "title": "Vocab Test 6: Derivational Morphology: Negative Prefixes",
      "badge": "Morphology \u2022 B2",
      "instruction": "Select the correct negative prefix (un-, in-, im-, ir-, dis-).",
      "questions": [
        {
          "q": "1. The experimental trial yielded _____precedented results, defying all conventional models.",
          "options": [
            "un",
            "in",
            "dis",
            "im"
          ],
          "correct": 0,
          "explanation": "Root forms 'unprecedented' (never previously experienced)."
        },
        {
          "q": "2. The archaeological artifact was _____replaceable, holding immense historical value.",
          "options": [
            "ir",
            "un",
            "in",
            "dis"
          ],
          "correct": 0,
          "explanation": "'Irreplaceable' takes prefix 'ir-' before root 'replaceable'."
        },
        {
          "q": "3. Her analytical conclusions were _____controvertible, corroborated by six independent laboratories.",
          "options": [
            "in",
            "un",
            "dis",
            "im"
          ],
          "correct": 0,
          "explanation": "'Incontrovertible' means impossible to dispute or question."
        },
        {
          "q": "4. The computational model produced highly _____plausible predictions when tested at extremes.",
          "options": [
            "im",
            "un",
            "in",
            "dis"
          ],
          "correct": 0,
          "explanation": "'Plausible' takes prefix 'im-' -> 'implausible'."
        }
      ]
    },
    {
      "id": "b2_v7",
      "number": 7,
      "title": "Vocab Test 7: Suffixes of Nuance & Register",
      "badge": "Suffixes \u2022 B2",
      "instruction": "Choose the suffix completing the compound modifier.",
      "questions": [
        {
          "q": "1. The aerospace engineers designed a heat-_____ ceramic tile for the re-entry capsule.",
          "options": [
            "proof",
            "less",
            "wise",
            "esque"
          ],
          "correct": 0,
          "explanation": "Suffix '-proof' denotes resistance to damage ('heat-proof', 'waterproof')."
        },
        {
          "q": "2. Revenue-_____, the technological company exceeded all fourth-quarter fiscal projections.",
          "options": [
            "wise",
            "less",
            "like",
            "ward"
          ],
          "correct": 0,
          "explanation": "Suffix '-wise' indicates 'with respect to' ('revenue-wise')."
        },
        {
          "q": "3. The candidate gave an articulate, flaw_____ presentation during the doctoral defense.",
          "options": [
            "less",
            "proof",
            "wise",
            "ful"
          ],
          "correct": 0,
          "explanation": "Root 'flaw' + '-less' = 'flawless' (impeccable)."
        },
        {
          "q": "4. The film was criticized for its tire_____ reliance on predictable cinematic clich\u00e9s.",
          "options": [
            "less",
            "some",
            "able",
            "ful"
          ],
          "correct": 0,
          "explanation": "'Tireless' denotes persistent, unremitting effort or repetition."
        }
      ]
    },
    {
      "id": "b2_v8",
      "number": 8,
      "title": "Vocab Test 8: Legal & Institutional Register",
      "badge": "Legal \u2022 B2",
      "instruction": "Identify the formal legal or governance term.",
      "questions": [
        {
          "q": "1. The high court issued a binding _____ ordering the immediate preservation of the wetland.",
          "options": [
            "injunction",
            "sentence",
            "indictment",
            "warrant"
          ],
          "correct": 0,
          "explanation": "A judicial 'injunction' compels or restrains specific institutional actions."
        },
        {
          "q": "2. The regulatory agency conducted an exhaustive _____ of the corporation's accounting books.",
          "options": [
            "audit",
            "trial",
            "probe",
            "hearing"
          ],
          "correct": 0,
          "explanation": "A financial 'audit' is an official systemic inspection of accounts."
        },
        {
          "q": "3. The parliamentary committee debated whether to ratify the bilateral trade _____.",
          "options": [
            "treaty",
            "contract",
            "deed",
            "charter"
          ],
          "correct": 0,
          "explanation": "A formal international accord between states is a 'treaty'."
        },
        {
          "q": "4. The constitutional court ruled that the censorship law was ultra _____ (beyond legal power).",
          "options": [
            "vires",
            "facto",
            "loco",
            "tempore"
          ],
          "correct": 0,
          "explanation": "Legal Latin phrase 'ultra vires' designates exceeding statutory authority."
        }
      ]
    },
    {
      "id": "b2_v9",
      "number": 9,
      "title": "Vocab Test 9: Bioethics & Genetic Biotechnology",
      "badge": "Bioethics \u2022 B2",
      "instruction": "Select the bioethical or biotechnology term.",
      "questions": [
        {
          "q": "1. Ethicists argue that germline gene editing raises _____ questions regarding human identity.",
          "options": [
            "profound",
            "shallow",
            "trivial",
            "fleeting"
          ],
          "correct": 0,
          "explanation": "'Profound' characterizes fundamental issues of great philosophical depth."
        },
        {
          "q": "2. CRISPR technology enables the precise _____ of targeted genomic DNA sequences.",
          "options": [
            "alteration",
            "distortion",
            "deterioration",
            "dissolution"
          ],
          "correct": 0,
          "explanation": "'Alteration' denotes intentional genetic modification."
        },
        {
          "q": "3. Clinical trials must guarantee informed _____ from all human participants.",
          "options": [
            "consent",
            "agreement",
            "concurrence",
            "permission"
          ],
          "correct": 0,
          "explanation": "'Informed consent' is the ethical requirement for voluntary participation."
        },
        {
          "q": "4. Agricultural scientists introduced genetically _____ crops to withstand desert droughts.",
          "options": [
            "modified",
            "twisted",
            "mutated",
            "distorted"
          ],
          "correct": 0,
          "explanation": "'Genetically modified' (GM) describes scientifically engineered organisms."
        }
      ]
    },
    {
      "id": "b2_v10",
      "number": 10,
      "title": "Vocab Test 10: Tech Ethics & Algorithmic Systems",
      "badge": "Tech Ethics \u2022 B2",
      "instruction": "Choose the cybersecurity or artificial intelligence ethical term.",
      "questions": [
        {
          "q": "1. Predictive policing algorithms can perpetuate systemic racial _____ if training data is biased.",
          "options": [
            "disparities",
            "similarities",
            "harmonies",
            "unities"
          ],
          "correct": 0,
          "explanation": "'Disparities' designates noticeable, unjust systemic inequalities."
        },
        {
          "q": "2. To safeguard national infrastructure from cyber attacks, agencies must install resilient fire_____.",
          "options": [
            "walls",
            "doors",
            "gates",
            "fences"
          ],
          "correct": 0,
          "explanation": "A network 'firewall' prevents unauthorized remote cyber intrusion."
        },
        {
          "q": "3. The automated facial recognition system had a troubling _____ of false positives on minority faces.",
          "options": [
            "rate",
            "pace",
            "stride",
            "cadence"
          ],
          "correct": 0,
          "explanation": "An 'error rate' or 'rate of false positives' measures computational inaccuracies."
        },
        {
          "q": "4. Open-source developers argue that algorithmic _____ is essential for public accountability.",
          "options": [
            "transparency",
            "opacity",
            "secrecy",
            "obscurity"
          ],
          "correct": 0,
          "explanation": "Algorithmic 'transparency' allows external scrutiny of code and logic."
        }
      ]
    },
    {
      "id": "b2_v11",
      "number": 11,
      "title": "Vocab Test 11: Literary Devices & Rhetorical Analysis",
      "badge": "Literature \u2022 B2",
      "instruction": "Identify the literary or rhetorical device described.",
      "questions": [
        {
          "q": "1. An implicit, indirect reference to a historical event, figure, or classic text is an _____.",
          "options": [
            "allusion",
            "illusion",
            "delusion",
            "collision"
          ],
          "correct": 0,
          "explanation": "An 'allusion' is an indirect figurative reference."
        },
        {
          "q": "2. George Orwell's 'Animal Farm' is a political _____ representing the totalitarian Soviet era.",
          "options": [
            "allegory",
            "biography",
            "memoir",
            "sonnet"
          ],
          "correct": 0,
          "explanation": "An 'allegory' uses symbolic narrative to represent broader political themes."
        },
        {
          "q": "3. The humorous use of words that imply the direct opposite of their literal meaning is _____.",
          "options": [
            "irony",
            "hyperbole",
            "onomatopoeia",
            "rhyme"
          ],
          "correct": 0,
          "explanation": "'Irony' contrasts surface literal statements with underlying realities."
        },
        {
          "q": "4. An explicit rhetorical comparison linking two dissimilar entities using 'like' or 'as' is a _____.",
          "options": [
            "simile",
            "metaphor",
            "personification",
            "hyperbole"
          ],
          "correct": 0,
          "explanation": "A 'simile' explicitly uses 'like' or 'as' for comparison."
        }
      ]
    },
    {
      "id": "b2_v12",
      "number": 12,
      "title": "Vocab Test 12: Macroeconomics & Fiscal Frameworks",
      "badge": "Economics \u2022 B2",
      "instruction": "Select the formal macroeconomic term.",
      "questions": [
        {
          "q": "1. The central bank raised interest rates to curtail spiraling double-digit _____.",
          "options": [
            "inflation",
            "deflation",
            "stagnation",
            "subsidy"
          ],
          "correct": 0,
          "explanation": "'Inflation' is the ongoing rise in general price levels and loss of purchasing power."
        },
        {
          "q": "2. When governmental tax expenditures exceed overall state revenues, the budget faces a _____.",
          "options": [
            "deficit",
            "surplus",
            "windfall",
            "dividend"
          ],
          "correct": 0,
          "explanation": "A budget 'deficit' occurs when expenditures exceed public revenues."
        },
        {
          "q": "3. The financial minister introduced strict fiscal _____ to balance the national budget.",
          "options": [
            "austerity",
            "indulgence",
            "lavishness",
            "luxury"
          ],
          "correct": 0,
          "explanation": "'Austerity' encompasses governmental spending cuts and fiscal rigor."
        },
        {
          "q": "4. Rapid currency depreciation diminishes a household's purchasing _____ over time.",
          "options": [
            "power",
            "weight",
            "strength",
            "vigor"
          ],
          "correct": 0,
          "explanation": "Purchasing 'power' is the real quantity of goods bought per monetary unit."
        }
      ]
    },
    {
      "id": "b2_v13",
      "number": 13,
      "title": "Vocab Test 13: Cognitive Biases & Social Psychology",
      "badge": "Psychology \u2022 B2",
      "instruction": "Identify the cognitive bias or psychological phenomenon.",
      "questions": [
        {
          "q": "1. The human tendency to favor information that confirms prior existing beliefs is confirmation _____.",
          "options": [
            "bias",
            "illusion",
            "mirage",
            "delusion"
          ],
          "correct": 0,
          "explanation": "'Confirmation bias' selects data confirming pre-existing convictions."
        },
        {
          "q": "2. The mental discomfort experienced when simultaneously holding contradictory beliefs is cognitive _____.",
          "options": [
            "dissonance",
            "harmony",
            "consensus",
            "apathy"
          ],
          "correct": 0,
          "explanation": "'Cognitive dissonance' is psychological tension between conflicting thoughts."
        },
        {
          "q": "3. The inclination for members of a tight group to conform and stifle dissent is group_____.",
          "options": [
            "think",
            "mind",
            "pulse",
            "drive"
          ],
          "correct": 0,
          "explanation": "'Groupthink' prioritizes uncritical consensus over rational evaluation."
        },
        {
          "q": "4. Relying excessively on the initial piece of information encountered during negotiation is _____ bias.",
          "options": [
            "anchoring",
            "docking",
            "mooring",
            "tethering"
          ],
          "correct": 0,
          "explanation": "'Anchoring' fixes judgment onto the first initial reference figure."
        }
      ]
    },
    {
      "id": "b2_v14",
      "number": 14,
      "title": "Vocab Test 14: International Relations & Diplomacy",
      "badge": "Diplomacy \u2022 B2",
      "instruction": "Select the diplomatic or international relations term.",
      "questions": [
        {
          "q": "1. The bilateral diplomatic accord brought an end to decades of regional _____.",
          "options": [
            "hostility",
            "hospitality",
            "solidarity",
            "neutrality"
          ],
          "correct": 0,
          "explanation": "'Hostility' denotes ongoing aggressive geopolitical antagonism."
        },
        {
          "q": "2. Heads of state assembled for a multilateral climate _____ in Geneva.",
          "options": [
            "summit",
            "rally",
            "parade",
            "carnival"
          ],
          "correct": 0,
          "explanation": "A diplomatic 'summit' is a high-level conference of national leaders."
        },
        {
          "q": "3. Economic _____ were imposed to penalize maritime violations of territorial sovereignty.",
          "options": [
            "sanctions",
            "rewards",
            "subsidies",
            "bonuses"
          ],
          "correct": 0,
          "explanation": "International 'sanctions' are commercial penalties imposed on nations."
        },
        {
          "q": "4. The ambassador enjoyed diplomatic _____ protecting her from domestic legal prosecution.",
          "options": [
            "immunity",
            "exemption",
            "liberty",
            "sanctuary"
          ],
          "correct": 0,
          "explanation": "Diplomatic 'immunity' shields foreign envoys from host nation jurisdiction."
        }
      ]
    },
    {
      "id": "b2_v15",
      "number": 15,
      "title": "Vocab Test 15: Atmospheric & Sensory Descriptors",
      "badge": "Description \u2022 B2",
      "instruction": "Choose the sophisticated descriptive adjective.",
      "questions": [
        {
          "q": "1. The ancient cathedral nave possessed an _____ silence that inspired reverent awe.",
          "options": [
            "eerie",
            "inane",
            "insolent",
            "inert"
          ],
          "correct": 0,
          "explanation": "'Eerie' denotes a strange, mysterious, and mildly unsettling atmosphere."
        },
        {
          "q": "2. The mountain vista at sunset revealed a _____ panorama stretching across three valleys.",
          "options": [
            "breathtaking",
            "breathless",
            "gasping",
            "panting"
          ],
          "correct": 0,
          "explanation": "'Breathtaking' characterizes visual splendor inspiring astonished admiration."
        },
        {
          "q": "3. The abandoned steel foundry was enveloped in _____ shadows and industrial decay.",
          "options": [
            "somber",
            "festive",
            "luminous",
            "buoyant"
          ],
          "correct": 0,
          "explanation": "'Somber' (sombre) evokes dark, gloomy, and solemn atmospheric weight."
        },
        {
          "q": "4. The scent of wild lavender was so _____ that it permeated the entire terrace.",
          "options": [
            "potent",
            "feeble",
            "dilute",
            "negligible"
          ],
          "correct": 0,
          "explanation": "'Potent' denotes exceptionally strong, influential sensory impact."
        }
      ]
    },
    {
      "id": "b2_v16",
      "number": 16,
      "title": "Vocab Test 16: Phrasal Verbs of Investigation",
      "badge": "Phrasals \u2022 B2",
      "instruction": "Select the investigative phrasal verb matching context.",
      "questions": [
        {
          "q": "1. Internal auditors were assigned to look _____ allegations of embezzlement.",
          "options": [
            "into",
            "onto",
            "out",
            "away"
          ],
          "correct": 0,
          "explanation": "'Look into' means to formally examine, investigate, or inspect."
        },
        {
          "q": "2. Forensic scientists managed to piece _____ the suspect's digital footprints.",
          "options": [
            "together",
            "over",
            "along",
            "through"
          ],
          "correct": 0,
          "explanation": "'Piece together' means assembling fragments of evidence to deduce truth."
        },
        {
          "q": "3. The investigator refused to be put _____ by bureaucratic stalling tactics.",
          "options": [
            "off",
            "away",
            "over",
            "down"
          ],
          "correct": 0,
          "explanation": "'Put off' means discouraged or deterred by obstacles."
        },
        {
          "q": "4. Inquiries eventually brought to _____ fraudulent transactions disguised as consulting fees.",
          "options": [
            "light",
            "sight",
            "view",
            "vision"
          ],
          "correct": 0,
          "explanation": "The idiom is to 'bring to light' (uncover or reveal)."
        }
      ]
    },
    {
      "id": "b2_v17",
      "number": 17,
      "title": "Vocab Test 17: Nuances of Certainty & Ambivalence",
      "badge": "Nuance \u2022 B2",
      "instruction": "Select the adjective reflecting nuanced certainty or doubt.",
      "questions": [
        {
          "q": "1. The activist remained _____ in her pursuit of civil liberties despite harsh intimidation.",
          "options": [
            "resolute",
            "wavering",
            "indecisive",
            "hesitant"
          ],
          "correct": 0,
          "explanation": "'Resolute' characterizes unshakeable, purposeful determination."
        },
        {
          "q": "2. Board members felt deeply _____ regarding the proposed merger, noting both risks and rewards.",
          "options": [
            "ambivalent",
            "indifferent",
            "unanimous",
            "reckless"
          ],
          "correct": 0,
          "explanation": "'Ambivalent' means possessing mixed or contradictory emotions simultaneously."
        },
        {
          "q": "3. Without urgent levee maintenance, structural failure during hurricanes is virtually _____.",
          "options": [
            "inevitable",
            "preventable",
            "avoidable",
            "unlikely"
          ],
          "correct": 0,
          "explanation": "'Inevitable' designates an outcome destined to happen unavoidably."
        },
        {
          "q": "4. Her theoretical argument is open to severe academic _____ regarding methodology.",
          "options": [
            "scrutiny",
            "praise",
            "homage",
            "acclaim"
          ],
          "correct": 0,
          "explanation": "'Scrutiny' denotes critical, meticulous examination."
        }
      ]
    },
    {
      "id": "b2_v18",
      "number": 18,
      "title": "Vocab Test 18: Corroboration, Refutation & Counterclaims",
      "badge": "Debate \u2022 B2",
      "instruction": "Choose the formal verb used to validate or contest claims.",
      "questions": [
        {
          "q": "1. Satellite radar imagery helped _____ the oceanographers' computational tsunami model.",
          "options": [
            "corroborate",
            "refute",
            "negate",
            "dismantle"
          ],
          "correct": 0,
          "explanation": "'Corroborate' means to confirm or support with fresh evidence."
        },
        {
          "q": "2. The doctoral candidate successfully _____ all criticisms raised by the examining jury.",
          "options": [
            "refuted",
            "embraced",
            "surrendered",
            "endorsed"
          ],
          "correct": 0,
          "explanation": "'Refute' means disproving a statement or argument through logic and evidence."
        },
        {
          "q": "3. Historical records thoroughly _____ the prevailing myth that the fortress was impregnable.",
          "options": [
            "debunk",
            "verify",
            "uphold",
            "consecrate"
          ],
          "correct": 0,
          "explanation": "To 'debunk' means exposing the falseness of a myth or misconception."
        },
        {
          "q": "4. The author's thesis rests on a fundamental _____ that technology always enhances well-being.",
          "options": [
            "premise",
            "refusal",
            "denial",
            "verdict"
          ],
          "correct": 0,
          "explanation": "A 'premise' is a foundational underlying proposition."
        }
      ]
    },
    {
      "id": "b2_v19",
      "number": 19,
      "title": "Vocab Test 19: Risk Assessment & Mitigation",
      "badge": "Risk \u2022 B2",
      "instruction": "Select the risk management or hazard mitigation term.",
      "questions": [
        {
          "q": "1. Engineers reinforced the foundation pilings to _____ the risk of earthquake liquefaction.",
          "options": [
            "mitigate",
            "exacerbate",
            "intensify",
            "provoke"
          ],
          "correct": 0,
          "explanation": "'Mitigate' means making severity or seriousness less acute."
        },
        {
          "q": "2. Failure to conduct safety maintenance could _____ the lives of laboratory technicians.",
          "options": [
            "jeopardize",
            "protect",
            "shelter",
            "safeguard"
          ],
          "correct": 0,
          "explanation": "'Jeopardize' means putting someone or something into peril."
        },
        {
          "q": "3. The precautionary _____ dictates halting genetic deployment until toxicity tests conclude.",
          "options": [
            "principle",
            "principal",
            "custom",
            "superstition"
          ],
          "correct": 0,
          "explanation": "The 'precautionary principle' mandates preventative caution in scientific risk."
        },
        {
          "q": "4. The economic sanctions were intended to act as a powerful military _____.",
          "options": [
            "deterrent",
            "catalyst",
            "incentive",
            "invitation"
          ],
          "correct": 0,
          "explanation": "A 'deterrent' discourages an action through anticipation of adverse consequences."
        }
      ]
    },
    {
      "id": "b2_v20",
      "number": 20,
      "title": "Vocab Test 20: Master Synthesis: Lexical & Pragmatic Precision",
      "badge": "Cambridge B2 Master",
      "instruction": "Select the word achieving optimal lexical accuracy in Cambridge FCE Use of English.",
      "questions": [
        {
          "q": "1. The minister's abrupt resignation was widely viewed as _____ to an admission of culpability.",
          "options": [
            "tantamount",
            "equitable",
            "comparable",
            "homologous"
          ],
          "correct": 0,
          "explanation": "'Tantamount to' means virtually equivalent to in seriousness or effect."
        },
        {
          "q": "2. Deep down, the scientist knew her controversial theory would _____ criticism.",
          "options": [
            "attract",
            "invite",
            "bring",
            "pull"
          ],
          "correct": 0,
          "explanation": "The standard collocations are to 'attract criticism' or 'draw criticism'."
        },
        {
          "q": "3. The new environmental protocol will come into _____ on the first of January.",
          "options": [
            "force",
            "power",
            "rule",
            "impact"
          ],
          "correct": 0,
          "explanation": "The legal idiom is to 'come into force' (become operative)."
        },
        {
          "q": "4. He succeeded in his university exams against all _____ through sheer determination.",
          "options": [
            "odds",
            "chances",
            "bets",
            "factors"
          ],
          "correct": 0,
          "explanation": "'Against all odds' is the established idiom denoting success despite severe adversity."
        }
      ]
    }
  ]
};

// Compatibility aliases
const TEENS_GRAMMAR_DATA = TEENS_GRAMMAR_TESTS;
const TEENS_VOCAB_DATA = TEENS_VOCAB_TESTS;

if (typeof window !== "undefined") {
  window.TEENS_GRAMMAR_TESTS = TEENS_GRAMMAR_TESTS;
  window.TEENS_VOCAB_TESTS = TEENS_VOCAB_TESTS;
  window.TEENS_GRAMMAR_DATA = TEENS_GRAMMAR_DATA;
  window.TEENS_VOCAB_DATA = TEENS_VOCAB_DATA;
}
if (typeof globalThis !== "undefined") {
  globalThis.TEENS_GRAMMAR_TESTS = TEENS_GRAMMAR_TESTS;
  globalThis.TEENS_VOCAB_TESTS = TEENS_VOCAB_TESTS;
  globalThis.TEENS_GRAMMAR_DATA = TEENS_GRAMMAR_DATA;
  globalThis.TEENS_VOCAB_DATA = TEENS_VOCAB_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TEENS_GRAMMAR_TESTS, TEENS_VOCAB_TESTS, TEENS_GRAMMAR_DATA, TEENS_VOCAB_DATA };
}
