/**
 * Bilikids Teens Academy - Pruebas Saber 9° a 11° (Inglés B1 - B2)
 * Banco Oficial de 10 Pruebas Completas (3 Lecturas por Prueba = 30 Lecturas Críticas)
 * Basado en los estándares de evaluación de competencias del ICFES y el Ministerio de Educación Nacional de Colombia.
 */

const TEENS_SABER_TESTS = [
  {
    id: 1,
    title: "Test 1: Technology, Global Consumption & Cognitive Science",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T1-R1",
        title: "Artificial Intelligence in Education: Augmenting Human Potential",
        topic: "Educational Technology & Ethics",
        text: `Artificial intelligence (AI) is rapidly altering the educational landscape, transitioning from experimental laboratories into mainstream secondary schools. Rather than replacing teachers, sophisticated adaptive learning platforms serve as cognitive assistants. These systems analyze individual student responses in real time, pinpointing specific misconceptions in mathematics, science, and grammar with surgical precision.\n\nHowever, pedagogical experts urge caution regarding over-reliance on automated tutoring. When learning algorithms present content that matches a student's exact comfort zone, pupils risk losing opportunities to develop resilience through productive struggle. Furthermore, algorithms trained on non-representative datasets may perpetuate demographic biases or systematically overlook divergent thinking.\n\nUltimately, the most progressive educational frameworks treat AI as a pedagogical partner. Educators are freed from repetitive administrative grading to focus on socio-emotional coaching, ethical deliberation, and collaborative problem-solving—skills that artificial networks cannot emulate. The paramount challenge for modern schools is not resisting automation, but cultivating the uniquely human traits that give it purpose.`,
        questions: [
          {
            id: "Q1-1",
            question: "According to the first paragraph, what is the primary role of adaptive AI platforms in modern schools?",
            options: [
              { key: "A", text: "To substitute human educators in laboratory and grammar settings." },
              { key: "B", text: "To support teachers by identifying students' specific misunderstandings immediately." },
              { key: "C", text: "To eliminate the need for secondary school curriculum examinations." },
              { key: "D", text: "To restrict student access to experimental learning tools." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "The text states that rather than replacing teachers, adaptive learning platforms act as cognitive assistants that analyze responses in real time and pinpoint specific misconceptions with precision. Option A contradicts the text, C is never mentioned, and D is the opposite."
          },
          {
            id: "Q1-2",
            question: "What potential danger does the author associate with algorithms tailored strictly to a student's comfort zone?",
            options: [
              { key: "A", text: "Students might lose the capacity to build resilience through challenging tasks." },
              { key: "B", text: "Secondary schools will be forced to shut down administrative departments." },
              { key: "C", text: "Teachers will become unable to grade homework assignments manually." },
              { key: "D", text: "Students will reject technology altogether in favor of traditional textbooks." }
            ],
            correct: "A",
            competence: "Inferential Comprehension",
            explanation: "In paragraph 2, the author warns that when content matches a student's exact comfort zone, pupils 'risk losing opportunities to develop resilience through productive struggle.' Options B, C, and D are fabricated distractions."
          },
          {
            id: "Q1-3",
            question: "What does the word 'emulate' mean in the final paragraph?",
            options: [
              { key: "A", text: "Imitate or reproduce successfully." },
              { key: "B", text: "Dismiss as irrelevant." },
              { key: "C", text: "Accelerate through computation." },
              { key: "D", text: "Regulate through legal penalties." }
            ],
            correct: "A",
            competence: "Lexical in Context",
            explanation: "In context ('skills that artificial networks cannot emulate'), 'emulate' means to imitate, copy, or replicate human socio-emotional coaching and ethical deliberation. Option B, C, and D do not fit the meaning."
          },
          {
            id: "Q1-4",
            question: "What is the author's primary intention in this passage?",
            options: [
              { key: "A", text: "To discourage schools from purchasing computer software." },
              { key: "B", text: "To advocate for a balanced, complementary integration of AI alongside human mentorship." },
              { key: "C", text: "To argue that machine algorithms will render human teachers obsolete by 2030." },
              { key: "D", text: "To explain the technical mathematical architecture of neural networks." }
            ],
            correct: "B",
            competence: "Author's Purpose",
            explanation: "The author concludes that 'the most progressive educational frameworks treat AI as a pedagogical partner', freeing teachers for human coaching while leveraging technology. This is a balanced, complementary view (Option B)."
          }
        ]
      },
      {
        id: "T1-R2",
        title: "The Invisible Price of Fast Fashion",
        topic: "Environmental Sustainability & Consumer Ethics",
        text: `The contemporary apparel industry produces over 100 billion garments annually, driven by a business model founded on accelerated turnaround and artificial obsolescence. Known colloquially as 'fast fashion', this paradigm transforms clothing from enduring utility into disposable single-use items. Retailers introduce fifty-two micro-seasons per calendar year, psychological stimuli specifically calculated to ignite an unending cycle of consumer urgency.\n\nBeneath glossy storefronts lies an immense ecological deficit. The textile supply chain accounts for nearly ten percent of global carbon emissions—surpassing maritime shipping and international aviation combined. Synthetic fabrics like polyester shed hundreds of thousands of microplastic fibers per domestic wash cycle, which inevitably bypass wastewater treatment plants and infiltrate marine food webs.\n\nFurthermore, true circularity remains largely aspirational. Less than one percent of discarded clothing is recycled into virgin-grade garments due to the chemical complexity of blended fibers. Meaningful reform demands both legislative accountability—such as extended producer responsibility laws—and a cultural paradigm shift toward mindful acquisition, garment mending, and timeless durability.`,
        questions: [
          {
            id: "Q1-5",
            question: "Why do fast-fashion retailers introduce 52 micro-seasons a year?",
            options: [
              { key: "A", text: "To comply with international environmental treaties." },
              { key: "B", text: "To trigger psychological urgency and stimulate constant buying." },
              { key: "C", text: "To ensure that synthetic fibers degrade rapidly in local landfills." },
              { key: "D", text: "To lower the carbon emissions generated by air cargo transports." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 explicitly notes that retailers launch 52 micro-seasons as 'psychological stimuli specifically calculated to ignite an unending cycle of consumer urgency' (Option B)."
          },
          {
            id: "Q1-6",
            question: "According to the passage, why is recycling clothes into new garments so uncommon?",
            options: [
              { key: "A", text: "Wastewater treatment plants refuse to collect synthetic apparel." },
              { key: "B", text: "Consumers prefer to wear damaged garments indefinitely." },
              { key: "C", text: "Blended fabrics present chemical complexities that hinder recycling." },
              { key: "D", text: "International shipping laws prohibit transporting old textiles." }
            ],
            correct: "C",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 3 explains that 'less than one percent of discarded clothing is recycled into virgin-grade garments due to the chemical complexity of blended fibers.' This directly confirms Option C."
          },
          {
            id: "Q1-7",
            question: "Which of the following would the author most likely support to combat fast-fashion waste?",
            options: [
              { key: "A", text: "Expanding maritime shipping routes for synthetic garments." },
              { key: "B", text: "Passing laws that hold garment producers legally accountable for their products' lifecycle." },
              { key: "C", text: "Promoting weekly shopping sprees through discount coupons." },
              { key: "D", text: "Banning wastewater treatment plants in major metropolitan areas." }
            ],
            correct: "B",
            competence: "Inferential & Authorial Tone",
            explanation: "The author explicitly calls for 'legislative accountability—such as extended producer responsibility laws' and mindful consumer habits. Option B directly reflects this recommendation."
          }
        ]
      },
      {
        id: "T1-R3",
        title: "The Bilingual Brain: Neuroplasticity and Cognitive Flexibility",
        topic: "Cognitive Neuroscience & Linguistics",
        text: `For decades, mid-twentieth-century educators harbored misconceptions that raising children bilingually caused cognitive developmental delays or intellectual confusion. Contemporary neuroimaging techniques have demolished this archaic myth. Research demonstrates that juggling two or more linguistic codes strengthens the brain's executive control center located within the prefrontal cortex.\n\nWhenever a bilingual person speaks, both grammatical systems remain simultaneously active beneath conscious awareness. Selecting the intended language while suppressing interference from the competing language functions as a continuous mental workout. Consequently, bilingual individuals consistently outperform monolingual peers in task-switching assessments, abstract problem-solving, and filtering out environmental distractions.\n\nPerhaps the most striking finding involves cognitive reserve. Clinical neurologists have documented that lifelong bilingualism delays the symptomatic manifestation of degenerative conditions like Alzheimer's disease by four to five years. While language mastery does not prevent underlying cellular decay, it constructs alternative neuro-synaptic pathways that allow the brain to compensate effectively.`,
        questions: [
          {
            id: "Q1-8",
            question: "What was the historical misconception regarding bilingual upbringing mentioned in paragraph 1?",
            options: [
              { key: "A", text: "That it caused intellectual delays and linguistic confusion in children." },
              { key: "B", text: "That it enhanced mathematical problem-solving excessively." },
              { key: "C", text: "That it strengthened the prefrontal cortex prematurely." },
              { key: "D", text: "That it prevented teenagers from developing social empathy." }
            ],
            correct: "A",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 states that twentieth-century educators believed 'raising children bilingually caused cognitive developmental delays or intellectual confusion.' (Option A)."
          },
          {
            id: "Q1-9",
            question: "Why does bilingualism function as an ongoing mental workout?",
            options: [
              { key: "A", text: "Speakers must memorize thousands of grammatical rules every morning." },
              { key: "B", text: "Both languages are constantly active, requiring continuous inhibition of the unused code." },
              { key: "C", text: "The physical vocal cords require double the oxygen during conversation." },
              { key: "D", text: "Monolingual environments create unnecessary anxiety for multi-language speakers." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 explains that both linguistic systems are simultaneously active, and 'selecting the intended language while suppressing interference from the competing language functions as a continuous mental workout.' (Option B)."
          },
          {
            id: "Q1-10",
            question: "What is the effect of bilingualism on Alzheimer's disease according to neurologists?",
            options: [
              { key: "A", text: "It eradicates the underlying cellular pathology entirely." },
              { key: "B", text: "It delays the observable symptoms by building alternative cognitive pathways." },
              { key: "C", text: "It accelerates memory deterioration in elderly individuals." },
              { key: "D", text: "It limits the brain's capacity to regenerate neuron synapses." }
            ],
            correct: "B",
            competence: "Inferential Synthesis",
            explanation: "Paragraph 3 states that bilingualism delays symptomatic manifestation by 4-5 years by constructing 'alternative neuro-synaptic pathways that allow the brain to compensate effectively' without stopping cellular decay itself. Option B is precise."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Test 2: Renewable Energy, Adolescent Well-Being & Deep Ocean Frontiers",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T2-R1",
        title: "Renewable Energy Transition in Latin America",
        topic: "Clean Technology & Sustainable Development",
        text: `Latin America possesses one of the cleanest electrical grids in the developing world, traditionally anchored by abundant hydroelectric reservoirs in Colombia, Brazil, and Costa Rica. However, recurring climatic anomalies such as El Niño phenomena have exposed the vulnerability of over-depending on water reserves. Prolonged droughts trigger severe power deficits and spike electricity tariffs for vulnerable populations.\n\nTo mitigate these ecological risks, the region is actively diversifying into solar photovoltaic and wind infrastructure. Chile's Atacama Desert receives some of the highest solar irradiance levels on the planet, while northern Colombia's La Guajira peninsula features world-class wind corridors with persistent velocities throughout the year.\n\nNevertheless, integrating non-conventional renewables introduces logistical bottlenecks. Modern transmission lines must span thousands of kilometers from remote geographic deserts to metropolitan industrial centers. Furthermore, governments must conduct genuine prior consultations with indigenous communities inhabiting resource-rich corridors, ensuring that economic modernization respects cultural self-determination and territorial sovereignty.`,
        questions: [
          {
            id: "Q2-1",
            question: "What vulnerability in Latin America's energy model is highlighted in paragraph 1?",
            options: [
              { key: "A", text: "A complete lack of electrical transmission grids across the continent." },
              { key: "B", text: "Over-reliance on hydroelectricity during periods of severe drought." },
              { key: "C", text: "An inability to afford solar panel imports from abroad." },
              { key: "D", text: "Excessive consumption of fossil fuels by rural communities." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 notes that climatic anomalies like El Niño have 'exposed the vulnerability of over-depending on water reserves', causing deficits during prolonged droughts (Option B)."
          },
          {
            id: "Q2-2",
            question: "Why are the Atacama Desert and La Guajira peninsula strategically significant?",
            options: [
              { key: "A", text: "They house the largest hydroelectric dams in South America." },
              { key: "B", text: "They boast exceptional solar irradiance and consistent wind corridors." },
              { key: "C", text: "They are the most densely populated urban centers in the region." },
              { key: "D", text: "They prevent climatic phenomena like El Niño from developing." }
            ],
            correct: "B",
            competence: "Literal & Contextual",
            explanation: "Paragraph 2 states that Atacama receives some of the highest solar irradiance on Earth, and La Guajira has world-class wind corridors with persistent velocities (Option B)."
          },
          {
            id: "Q2-3",
            question: "What non-technical challenge must governments address when building clean energy corridors?",
            options: [
              { key: "A", text: "Guaranteeing genuine prior consultation and territorial respect for indigenous communities." },
              { key: "B", text: "Eliminating all solar installations to protect desert wildlife." },
              { key: "C", text: "Raising electricity tariffs to cover urban administrative budgets." },
              { key: "D", text: "Replacing all transmission cables with underground telephone wires." }
            ],
            correct: "A",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 3 explicitly specifies that governments must 'conduct genuine prior consultations with indigenous communities inhabiting resource-rich corridors, ensuring that economic modernization respects cultural self-determination' (Option A)."
          }
        ]
      },
      {
        id: "T2-R2",
        title: "Social Media and Adolescent Mental Health",
        topic: "Psychology & Digital Culture",
        text: `The pervasive integration of algorithmic social media platforms into the lives of teenagers has sparked intense global debate among psychologists and educators. Proponents argue that digital networks foster supportive peer groups for marginalized youth, stimulate creative expression, and democratize access to informational resources. For many adolescents, online communities offer vital spaces of belonging.\n\nConversely, longitudinal empirical studies correlate elevated screen exposure with heightened rates of anxiety, depressive symptoms, and sleep disruption. The mechanism behind this distress is rarely the technology itself, but rather the psychological phenomenon of continuous upward social comparison. When teenagers consume heavily curated highlight reels of peers' idealized lifestyles, appearances, and social achievements, they frequently internalize unrealistic standards of self-worth.\n\nFurthermore, notifications and intermittent reward architectures hijack juvenile dopamine pathways, systematically fracturing attention spans during academic study. Constructive resolution does not lie in draconian bans that isolate adolescents from digital literacy, but in fostering critical digital mindfulness, transparent platform design, and intentional boundaries that prioritize restorative real-world relationships.`,
        questions: [
          {
            id: "Q2-4",
            question: "According to paragraph 2, what psychological factor primarily drives emotional distress on social media?",
            options: [
              { key: "A", text: "The physical weight of mobile smartphones." },
              { key: "B", text: "Continuous upward social comparison with curated, idealized portrayals." },
              { key: "C", text: "The high monetary cost of internet broadband connections." },
              { key: "D", text: "The total absence of peer communities online." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 2 explains that the core mechanism is 'continuous upward social comparison' where teens consume heavily curated highlight reels and internalize unrealistic standards (Option B)."
          },
          {
            id: "Q2-5",
            question: "How do intermittent notification systems impact adolescent studying?",
            options: [
              { key: "A", text: "They improve long-term memory consolidation during sleep." },
              { key: "B", text: "They disrupt dopamine pathways and fracture attention spans." },
              { key: "C", text: "They eliminate the necessity for critical digital mindfulness." },
              { key: "D", text: "They encourage teens to abandon social media permanently." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 3 points out that notifications and intermittent reward structures 'hijack juvenile dopamine pathways, systematically fracturing attention spans during academic study' (Option B)."
          },
          {
            id: "Q2-6",
            question: "What solution does the author advocate for in the concluding paragraph?",
            options: [
              { key: "A", text: "Imposing total bans that prohibit teenagers from touching electronic devices." },
              { key: "B", text: "Fostering critical digital mindfulness and intentional offline boundaries." },
              { key: "C", text: "Allowing social media corporations to operate without any ethical oversight." },
              { key: "D", text: "Replacing all real-world friendships with automated chatbots." }
            ],
            correct: "B",
            competence: "Author's Purpose & Synthesis",
            explanation: "The author explicitly rejects draconian bans and instead advocates 'fostering critical digital mindfulness, transparent platform design, and intentional boundaries that prioritize restorative real-world relationships' (Option B)."
          }
        ]
      },
      {
        id: "T2-R3",
        title: "The Deep Ocean: Earth's Final Frontier",
        topic: "Marine Biology & Global Conservation",
        text: `While humanity spends billions mapping celestial topography on Mars and the Moon, the abyssal depths of our own planet remain remarkably unexplored. Over eighty percent of the global ocean volume has never been charted with high-resolution bathymetric sensors. In the aphotic zone—where sunlight is utterly absent and atmospheric pressures exceed one thousand times that of sea level—life thrives in staggering adaptations.\n\nNear hydrothermal vents along volcanic tectonic ridges, chemosynthetic ecosystems flourish entirely independent of photosynthesis. Specialized bacteria convert toxic hydrogen sulfide gushing from the Earth's mantle into usable biological energy, nurturing giant tube worms, blind shrimp, and translucent octopuses. These extreme organisms produce biochemical enzymes with revolutionary potential for biotechnology and pharmaceuticals.\n\nHowever, this fragile twilight biome faces unprecedented industrial threats. Deep-sea mining conglomerates are eyeing vast abyssal plains rich in polymetallic nodules containing cobalt, nickel, and copper for battery manufacturing. Oceanographers warn that stripping the seabed could cause irreversible habitat destruction, trigger toxic sediment plumes across ocean currents, and extinguish unique species before science can even catalog them.`,
        questions: [
          {
            id: "Q2-7",
            question: "What provides the foundational energy for ecosystems near hydrothermal vents?",
            options: [
              { key: "A", text: "Sunlight filtering through the upper aphotic layer." },
              { key: "B", text: "Chemosynthetic bacteria converting toxic hydrogen sulfide into organic energy." },
              { key: "C", text: "Polymetallic nodules resting on the seabed sediment." },
              { key: "D", text: "Tectonic earthquakes that fracture volcanic ridges." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 2 notes that 'chemosynthetic ecosystems flourish entirely independent of photosynthesis' where specialized bacteria convert toxic hydrogen sulfide into usable biological energy (Option B)."
          },
          {
            id: "Q2-8",
            question: "Why are mining companies interested in the deep abyssal plains?",
            options: [
              { key: "A", text: "To search for uncharted hydrothermal vents for thermal power." },
              { key: "B", text: "To extract polymetallic nodules rich in battery metals like cobalt and nickel." },
              { key: "C", text: "To capture blind shrimp for commercial seafood markets." },
              { key: "D", text: "To dispose of industrial wastewater far from coastal cities." }
            ],
            correct: "B",
            competence: "Literal & Contextual",
            explanation: "Paragraph 3 explicitly states that conglomerates seek 'polymetallic nodules containing cobalt, nickel, and copper for battery manufacturing' (Option B)."
          },
          {
            id: "Q2-9",
            question: "What is the tone of the author regarding deep-sea mining in paragraph 3?",
            options: [
              { key: "A", text: "Enthusiastic and celebratory of industrial progress." },
              { key: "B", text: "Cautious and deeply concerned about ecological repercussions." },
              { key: "C", text: "Apathetic and indifferent toward marine conservation." },
              { key: "D", text: "Dismissive of oceanographers' scientific warnings." }
            ],
            correct: "B",
            competence: "Author's Tone",
            explanation: "The author warns of 'unprecedented industrial threats', 'irreversible habitat destruction', and extinguishing species, which shows a cautious and deeply concerned tone (Option B)."
          },
          {
            id: "Q2-10",
            question: "What does the word 'aphotic' mean in paragraph 1?",
            options: [
              { key: "A", text: "Exposed to extreme sunshine." },
              { key: "B", text: "Devoid or deprived of natural light." },
              { key: "C", text: "Filled with photosynthetic plants." },
              { key: "D", text: "Characterized by low atmospheric pressure." }
            ],
            correct: "B",
            competence: "Lexical in Context",
            explanation: "The text immediately defines the aphotic zone as 'where sunlight is utterly absent', showing that 'aphotic' refers to the absence of light (Option B)."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Test 3: Space Exploration Ethics, Global Food Systems & Sleep Science",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T3-R1",
        title: "Interplanetary Colonization: Ambition vs Responsibility",
        topic: "Space Ethics & Future Technology",
        text: `The prospect of establishing permanent human settlements on Mars has evolved from vintage science fiction into capitalized aerospace corporate agendas. Visionaries contend that becoming an interplanetary species is an existential imperative—a celestial insurance policy guarding humanity against planetary catastrophes such as asteroid impacts or thermonuclear conflict.\n\nYet prominent ethicists and planetary scientists question the moral hierarchy implicit in this vision. Pouring trillions of dollars into terraforming inhospitable martian deserts while Earth's biosphere suffers catastrophic ecological degradation reflects an escapist mentality. Critics contend that the immense intellectual and financial capital dedicated to extraterrestrial life support could more effectively develop closed-loop carbon sequestration, oceanic desalination, and regenerative agriculture here on Earth.\n\nFurthermore, interplanetary colonization poses profound governance dilemmas. Without robust international accords, extraterrestrial settlements risk becoming privatized company outposts governed by corporate sovereignty rather than democratic consensus. Before claiming new worlds, humanity must demonstrate that it can ethically steward its own origin planet.`,
        questions: [
          {
            id: "Q3-1",
            question: "What is the primary argument used by proponents of Mars colonization in paragraph 1?",
            options: [
              { key: "A", text: "To secure valuable mineral rights for aerospace corporations." },
              { key: "B", text: "To serve as an existential insurance policy against catastrophic planetary threats." },
              { key: "C", text: "To prove that science fiction novels were scientifically accurate." },
              { key: "D", text: "To relocate Earth's entire population to Mars by the end of the century." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 states that becoming an interplanetary species is viewed as 'an existential imperative—a celestial insurance policy guarding humanity against planetary catastrophes' (Option B)."
          },
          {
            id: "Q3-2",
            question: "According to critics in paragraph 2, where would intellectual and financial resources be better allocated?",
            options: [
              { key: "A", text: "To developing planetary weapons for orbital defense." },
              { key: "B", text: "To ecological solutions on Earth such as carbon capture and regenerative agriculture." },
              { key: "C", text: "To terraforming other planets like Venus and Jupiter." },
              { key: "D", text: "To privatizing municipal water utilities worldwide." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 explains that capital dedicated to Mars could 'more effectively develop closed-loop carbon sequestration, oceanic desalination, and regenerative agriculture here on Earth' (Option B)."
          },
          {
            id: "Q3-3",
            question: "What political danger does the author warn about regarding unregulated space settlements?",
            options: [
              { key: "A", text: "They could devolve into privatized company colonies lacking democratic consensus." },
              { key: "B", text: "They will deplete Earth's atmospheric oxygen supply." },
              { key: "C", text: "They will refuse to trade rare minerals with developing nations." },
              { key: "D", text: "They will trigger immediate warfare among sovereign global superpowers." }
            ],
            correct: "A",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 3 warns that without international accords, settlements risk becoming 'privatized company outposts governed by corporate sovereignty rather than democratic consensus' (Option A)."
          }
        ]
      },
      {
        id: "T3-R2",
        title: "Food Waste: The Absurdity of Modern Overproduction",
        topic: "Global Ecology & Resource Distribution",
        text: `Roughly one-third of all food produced globally for human consumption—approximately 1.3 billion metric tons annually—is lost or wasted across the supply chain. This staggering inefficiency represents not merely an ethical failure in a world where over eight hundred million individuals endure chronic malnutrition, but also an ecological catastrophe. If food waste were an independent nation, it would rank as the third-largest greenhouse gas emitter on Earth, behind only China and the United States.\n\nIn developing regions, food loss predominantly occurs in the upstream agrarian phase due to deficient refrigeration infrastructure, inadequate storage silos, and unpaved transportation corridors that allow perishable crops to rot before reaching urban markets. Conversely, in affluent industrialized societies, waste occurs downstream at retail and household levels. Major supermarkets routinely reject cosmetically imperfect produce, while consumers discard edible food due to confusing expiration labels.\n\nCombatting this systemic loss requires coordinated interventions: investing in cold-chain logistics across rural agricultural hubs, clarifying standardized 'best before' versus 'use by' consumer guidelines, and incentivizing supermarket donations to food recovery networks. Reducing food waste is quite possibly the single most cost-effective lever to curb carbon emissions while bolstering global food security.`,
        questions: [
          {
            id: "Q3-4",
            question: "How does global food waste compare to countries in greenhouse gas emissions?",
            options: [
              { key: "A", text: "It emits less carbon than any single European nation." },
              { key: "B", text: "It would rank as the third-largest greenhouse gas emitter globally." },
              { key: "C", text: "It surpasses the combined emissions of China and the United States." },
              { key: "D", text: "It produces zero atmospheric greenhouse gases." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 clearly states: 'If food waste were an independent nation, it would rank as the third-largest greenhouse gas emitter on Earth, behind only China and the United States.' (Option B)."
          },
          {
            id: "Q3-5",
            question: "How does the primary cause of food loss in developing countries differ from that in wealthy nations?",
            options: [
              { key: "A", text: "Developing nations discard food because of supermarket cosmetic standards." },
              { key: "B", text: "Developing nations lose food upstream due to poor refrigeration and transit; wealthy nations waste it downstream." },
              { key: "C", text: "Wealthy nations suffer from lack of agricultural harvesting machinery." },
              { key: "D", text: "Both regions waste food exclusively inside family home kitchens." }
            ],
            correct: "B",
            competence: "Inferential Comparison",
            explanation: "Paragraph 2 contrasts upstream loss in developing countries (lack of refrigeration, storage, and roads) with downstream waste in affluent countries (cosmetic rejection and consumer disposal) (Option B)."
          },
          {
            id: "Q3-6",
            question: "What does the author suggest regarding 'best before' and 'use by' dates?",
            options: [
              { key: "A", text: "Abolishing food labels completely across all food products." },
              { key: "B", text: "Standardizing and clarifying date guidelines to reduce unnecessary consumer waste." },
              { key: "C", text: "Requiring supermarkets to discard food three weeks before expiration." },
              { key: "D", text: "Printing labels only in international scientific units." }
            ],
            correct: "B",
            competence: "Inferential Synthesis",
            explanation: "Paragraph 3 recommends 'clarifying standardized \"best before\" versus \"use by\" consumer guidelines' so consumers do not discard edible food prematurely (Option B)."
          }
        ]
      },
      {
        id: "T3-R3",
        title: "The Neurobiology of Adolescent Sleep",
        topic: "Biology, Health & School Policy",
        text: `Throughout puberty, adolescents undergo a fundamental neurobiological transformation in their circadian rhythms. Unlike adults or prepubescent children, teenagers experience a natural two-hour delay in the nocturnal secretion of melatonin, the neurochemical hormone that initiates sleepiness. Consequently, expecting a sixteen-year-old to naturally fall asleep at nine in the evening is biologically discordant with their brain chemistry.\n\nSimultaneously, secondary school schedules across the world continue to enforce early start times, frequently requiring pupils to commute by six in the morning. This structural incompatibility produces widespread chronic sleep deprivation. Pediatric sleep researchers have proved that adolescent brains operating on fewer than eight hours of sleep suffer impaired synaptic plasticity, diminished prefrontal inhibition, and heightened emotional volatility.\n\nSchool districts that have implemented later start times—shifting opening bells to eight-thirty or nine in the morning—report striking empirical dividends. Student academic grade averages improve significantly, tardiness drops, and vehicular accidents involving teenage drivers decrease markedly. Realigning institutional schooling with human evolutionary biology is not coddling students; it is an evidence-based pedagogical necessity.`,
        questions: [
          {
            id: "Q3-7",
            question: "Why do adolescents naturally struggle to fall asleep early?",
            options: [
              { key: "A", text: "Their prefrontal cortex completely stops functioning after dark." },
              { key: "B", text: "They experience an evolutionary two-hour delay in melatonin secretion." },
              { key: "C", text: "They refuse to engage in physical exercise during the daytime." },
              { key: "D", text: "Their bodies produce excessive amounts of adrenaline at sunset." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 notes that teenagers 'experience a natural two-hour delay in the nocturnal secretion of melatonin', which makes falling asleep early biologically discordant (Option B)."
          },
          {
            id: "Q3-8",
            question: "What cognitive consequences result from chronic adolescent sleep deprivation?",
            options: [
              { key: "A", text: "Accelerated synaptic development and heightened mathematical precision." },
              { key: "B", text: "Impaired synaptic plasticity, weakened impulse control, and emotional volatility." },
              { key: "C", text: "Permanent immunity against seasonal influenza and viral infections." },
              { key: "D", text: "Immediate recovery of circadian clock synchronization." }
            ],
            correct: "B",
            competence: "Literal & Contextual",
            explanation: "Paragraph 2 details that sleep-deprived brains suffer 'impaired synaptic plasticity, diminished prefrontal inhibition, and heightened emotional volatility' (Option B)."
          },
          {
            id: "Q3-9",
            question: "What occurred in schools that adjusted their start times to 8:30 or 9:00 AM?",
            options: [
              { key: "A", text: "Student academic grades improved and traffic accidents involving teens decreased." },
              { key: "B", text: "Teacher absenteeism escalated dramatically throughout the term." },
              { key: "C", text: "Students demanded the restoration of dawn schedules." },
              { key: "D", text: "Athletic performance deteriorated across all sports teams." }
            ],
            correct: "A",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 3 notes 'striking empirical dividends: student academic grade averages improve significantly, tardiness drops, and vehicular accidents involving teenage drivers decrease markedly' (Option A)."
          },
          {
            id: "Q3-10",
            question: "What is the author's overall stance toward adjusting school start times?",
            options: [
              { key: "A", text: "It is an unnecessary indulgence that promotes student laziness." },
              { key: "B", text: "It is a scientifically justified reform grounded in human biology." },
              { key: "C", text: "It should only be applied to kindergarten and elementary education." },
              { key: "D", text: "It is technically impossible due to municipal public transit constraints." }
            ],
            correct: "B",
            competence: "Author's Stance & Tone",
            explanation: "The author concludes that realigning schedules with biology 'is not coddling students; it is an evidence-based pedagogical necessity' (Option B)."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Test 4: Vertical Farming, Digital Nomadism & The Neuroscience of Music",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T4-R1",
        title: "Vertical Farming: Reimagining Agriculture in Dense Megacities",
        topic: "Urban Planning & Agronomy",
        text: `As global demographic trends predict that over two-thirds of humanity will reside in urban metropolises by 2050, traditional agrarian supply chains face profound geographical strain. Transporting fresh greens thousands of kilometers burns heavy fossil fuels and depletes shelf life. In response, architectural innovators and agronomists have pioneered vertical farming: cultivating crops in vertically stacked layers within climate-controlled indoor environments.\n\nThese high-tech facilities deploy hydroponic or aeroponic irrigation systems that use up to ninety-five percent less freshwater than conventional outdoor fields. By replacing natural sunlight with targeted LED spectrums tailored to photosynthesis, vertical farms produce continuous harvest yields year-round, completely shielded from droughts, hailstorms, and invasive agricultural pests without relying on chemical pesticides.\n\nNonetheless, vertical agriculture is not a panacea for global hunger. The intense electrical energy required to power thousands of high-intensity LED fixtures and maintain climate cooling can generate substantial carbon footprints if connected to fossil-fuel grids. Furthermore, while leafy greens and culinary herbs thrive under artificial lighting, calorie-dense staple crops like wheat, rice, and maize remain uneconomical to produce vertically at scale.`,
        questions: [
          {
            id: "Q4-1",
            question: "How do vertical farms reduce water consumption compared to traditional fields?",
            options: [
              { key: "A", text: "By harvesting rainwater exclusively from skyscraper rooftops." },
              { key: "B", text: "By using hydroponic and aeroponic systems that consume up to 95% less water." },
              { key: "C", text: "By replacing water with synthetic liquid chemical fertilizers." },
              { key: "D", text: "By growing only drought-resistant desert cacti." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 2 states that vertical farming facilities deploy hydroponic or aeroponic systems that use 'up to ninety-five percent less freshwater than conventional outdoor fields' (Option B)."
          },
          {
            id: "Q4-2",
            question: "What is a major limitation of vertical farming discussed in paragraph 3?",
            options: [
              { key: "A", text: "It cannot operate inside urban architectural structures." },
              { key: "B", text: "It requires significant electrical energy and is uneconomical for staple grains like wheat and rice." },
              { key: "C", text: "It produces fruits that are biologically poisonous to humans." },
              { key: "D", text: "It relies on higher pesticide quantities than conventional outdoor fields." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 3 explains that vertical farming demands intense electricity and staple crops like wheat, rice, and maize 'remain uneconomical to produce vertically at scale' (Option B)."
          },
          {
            id: "Q4-3",
            question: "What does the word 'panacea' mean in paragraph 3?",
            options: [
              { key: "A", text: "A universal cure or complete solution." },
              { key: "B", text: "A temporary legal restriction." },
              { key: "C", text: "A traditional cooking ingredient." },
              { key: "D", text: "A harmful bacterial infection." }
            ],
            correct: "A",
            competence: "Lexical in Context",
            explanation: "In 'vertical agriculture is not a panacea for global hunger', panacea means a universal remedy or complete solution to all problems (Option A)."
          }
        ]
      },
      {
        id: "T4-R2",
        title: "Digital Nomadism and the Reimagining of Work",
        topic: "Sociology & Contemporary Labor",
        text: `The post-pandemic expansion of decentralized telecommunications has catalyzed the phenomenon of digital nomadism: knowledge professionals who leverage remote work capabilities to travel globally, unbounded by physical corporate offices. Armed with laptops and cloud connectivity, programmers, copywriters, and digital consultants establish temporary residencies in coastal towns and cultural capitals from Medellín to Lisbon.\n\nFor host communities, influxes of foreign teleworkers generate immediate economic stimulus for hospitality, gastronomy, and coworking ecosystems. However, unchecked nomadism creates acute socioeconomic tensions. The rapid conversion of residential apartments into short-term vacation rentals inflates local housing prices, often displacing long-term native residents who earn wages denominated in local currency rather than foreign exchange.\n\nForward-thinking municipalities are responding with nuanced regulatory frameworks. Rather than passive observation, cities like Valencia and Taipei are implementing digital nomad visas tied to progressive taxation, mandatory local health insurance contributions, and knowledge-transfer initiatives where visiting tech experts mentor municipal entrepreneurs. Sustainable remote work must enrich host societies rather than exploit cost-of-living disparities.`,
        questions: [
          {
            id: "Q4-4",
            question: "What socioeconomic challenge often arises from rapid digital nomad influxes?",
            options: [
              { key: "A", text: "A sudden collapse in international airline travel." },
              { key: "B", text: "Housing inflation and displacement of native residents due to short-term rentals." },
              { key: "C", text: "A total shutdown of metropolitan internet connectivity." },
              { key: "D", text: "A decline in the popularity of local restaurants and cafes." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 2 notes that conversion of housing into short-term rentals 'inflates local housing prices, often displacing long-term native residents' (Option B)."
          },
          {
            id: "Q4-5",
            question: "How are progressive cities like Valencia and Taipei managing digital nomads constructively?",
            options: [
              { key: "A", text: "By deporting all remote workers immediately upon arrival." },
              { key: "B", text: "By offering nomad visas tied to taxation, insurance, and mentorship initiatives." },
              { key: "C", text: "By subsidizing private luxury beach resorts exclusively for travelers." },
              { key: "D", text: "By banning local entrepreneurs from learning computer programming." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 3 explains that cities implement 'digital nomad visas tied to progressive taxation, mandatory local health insurance contributions, and knowledge-transfer initiatives' (Option B)."
          },
          {
            id: "Q4-6",
            question: "What is the author's primary thesis regarding digital nomadism?",
            options: [
              { key: "A", text: "Remote workers should be entirely unregulated to maximize personal freedom." },
              { key: "B", text: "Sustainable remote work requires mutual benefit and responsible regulation for host communities." },
              { key: "C", text: "Physical corporate offices must become mandatory for all workers again." },
              { key: "D", text: "Foreign currency exchanges should be outlawed across developing nations." }
            ],
            correct: "B",
            competence: "Main Idea / Thesis",
            explanation: "The author concludes that 'sustainable remote work must enrich host societies rather than exploit cost-of-living disparities', advocating mutual benefit and balanced regulation (Option B)."
          }
        ]
      },
      {
        id: "T4-R3",
        title: "Music and the Mind: How Sound Waves Heal the Brain",
        topic: "Neurobiology & Music Therapy",
        text: `Unlike almost any other stimulus, musical processing recruits virtually every known region of the human brain simultaneously. When we listen to or perform a musical piece, our neural networks ignite: auditory cortices decode pitch and timbre, motor areas synchronize rhythm, the amygdala modulates emotional intensity, and the hippocampus retrieves biographical memories tied to melodies.\n\nIn clinical neurology, music therapy is demonstrating remarkable therapeutic efficacy. Stroke patients who have suffered severe expressive aphasia—the inability to produce spoken words—can frequently sing full lyrical sentences with fluent diction. Because singing engages melodic circuits in the right hemisphere of the brain, patients can bypass damage to Broca's area in the left hemisphere through melodic intonation therapy.\n\nMoreover, rhythmic auditory stimulation acts as an external biological pacemaker for patients with Parkinson's disease. Hearing a steady, predictable acoustic beat allows individuals with motor impairments to recalibrate their stride length and walking cadence, overcoming debilitating neurological freezing. Music is not merely an aesthetic luxury; it is a profound biological catalyst for neuroplastic rehabilitation.`,
        questions: [
          {
            id: "Q4-7",
            question: "Why can some stroke patients who cannot speak still sing full sentences?",
            options: [
              { key: "A", text: "Singing uses the right hemisphere's musical circuits to bypass damaged left-hemisphere speech centers." },
              { key: "B", text: "Singing requires no neurological processing inside the human brain." },
              { key: "C", text: "Stroke patients develop brand new vocal cords during therapy." },
              { key: "D", text: "Listening to music eliminates all physical muscle damage permanently." }
            ],
            correct: "A",
            competence: "Literal Comprehension",
            explanation: "Paragraph 2 notes that singing engages melodic circuits in the right hemisphere, allowing patients to 'bypass damage to Broca's area in the left hemisphere through melodic intonation therapy' (Option A)."
          },
          {
            id: "Q4-8",
            question: "How does rhythmic stimulation assist patients with Parkinson's disease?",
            options: [
              { key: "A", text: "It eliminates their need for dietary nutrition." },
              { key: "B", text: "It acts as a pacemaker to help regulate stride length and walking cadence." },
              { key: "C", text: "It numbs their sensory nervous system completely." },
              { key: "D", text: "It replaces damaged motor neurons with synthetic implants." }
            ],
            correct: "B",
            competence: "Literal & Contextual",
            explanation: "Paragraph 3 explains that rhythmic stimulation 'acts as an external biological pacemaker', allowing patients to 'recalibrate their stride length and walking cadence' (Option B)."
          },
          {
            id: "Q4-9",
            question: "What central conclusion does the author reach in the final sentence?",
            options: [
              { key: "A", text: "Music is primarily an expensive commercial industry with limited medical value." },
              { key: "B", text: "Music is a powerful biological tool that drives neuroplastic rehabilitation." },
              { key: "C", text: "Only professional classical musicians benefit from musical therapy." },
              { key: "D", text: "Traditional medicine should abandon pharmaceutical treatments entirely." }
            ],
            correct: "B",
            competence: "Synthesis & Author's Stance",
            explanation: "The author concludes: 'Music is not merely an aesthetic luxury; it is a profound biological catalyst for neuroplastic rehabilitation' (Option B)."
          },
          {
            id: "Q4-10",
            question: "What does the word 'cadence' mean in paragraph 3?",
            options: [
              { key: "A", text: "Rhythmic tempo or pace of movement." },
              { key: "B", text: "Severe medical fever." },
              { key: "C", text: "Chemical composition of bone." },
              { key: "D", text: "Loss of consciousness." }
            ],
            correct: "A",
            competence: "Lexical in Context",
            explanation: "In 'recalibrate their stride length and walking cadence', cadence refers to the rhythmic flow, beat, or pace of walking steps (Option A)."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Test 5: Amazonian Biodiversity, Screen-Time Habits & The Olympic Spirit",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T5-R1",
        title: "The Amazon Rain Forest: Tipping Point and Indigenous Stewardship",
        topic: "Environmental Conservation & Indigenous Knowledge",
        text: `The Amazon basin encompasses roughly forty percent of South America, housing approximately ten percent of the planet's recognized biodiversity and acting as a critical terrestrial carbon sink. Ecologists have discovered that the dense canopy generates 'flying rivers'—vast atmospheric currents of water vapor produced by tree transpiration that irrigate agricultural heartlands thousands of kilometers away across Brazil, Paraguay, and Argentina.\n\nAlarmingly, climatologists estimate that the biome is perilously close to an ecological tipping point. If deforestation crosses twenty to twenty-five percent, the hydrological cycle will collapse, initiating an irreversible dieback that transforms lush rainforest into dry, degraded savannah. This transition would release hundreds of billions of tons of carbon into the atmosphere, accelerating catastrophic climate change.\n\nSatellite monitoring consistently reveals that deforestation rates are drastically lower inside officially recognized indigenous territories compared to national parks or unprotected lands. For millennia, indigenous peoples have practiced agroforestry systems that enhance ecological resilience while harvesting sustenance. Empowering indigenous land tenure and incorporating traditional ecological knowledge into sovereign conservation policy is the most effective safeguard against regional collapse.`,
        questions: [
          {
            id: "Q5-1",
            question: "What are the 'flying rivers' mentioned in paragraph 1?",
            options: [
              { key: "A", text: "Artificial irrigation canals constructed across the Andes." },
              { key: "B", text: "Atmospheric currents of water vapor generated by rainforest tree transpiration." },
              { key: "C", text: "Seasonal floodplains that submerge riverside villages." },
              { key: "D", text: "Underground aquifers tapped for metropolitan drinking water." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 defines 'flying rivers' as 'vast atmospheric currents of water vapor produced by tree transpiration that irrigate agricultural heartlands' (Option B)."
          },
          {
            id: "Q5-2",
            question: "What is the forecasted consequence if Amazonian deforestation reaches 20 to 25 percent?",
            options: [
              { key: "A", text: "The rainforest will spontaneously expand into neighboring deserts." },
              { key: "B", text: "The hydrological cycle will collapse, converting rainforest into degraded savannah." },
              { key: "C", text: "Atmospheric carbon levels will decrease automatically." },
              { key: "D", text: "Indigenous communities will be forced to abandon agriculture." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 states that crossing 20-25% deforestation will cause the hydrological cycle to collapse, 'initiating an irreversible dieback that transforms lush rainforest into dry, degraded savannah' (Option B)."
          },
          {
            id: "Q5-3",
            question: "What does satellite data demonstrate regarding indigenous territories?",
            options: [
              { key: "A", text: "They exhibit much lower deforestation rates than unprotected lands." },
              { key: "B", text: "They contain no recognized biodiversity." },
              { key: "C", text: "They consume more water than modern industrial farms." },
              { key: "D", text: "They are unable to protect trees from illegal logging." }
            ],
            correct: "A",
            competence: "Literal & Contextual",
            explanation: "Paragraph 3 notes that satellite monitoring consistently reveals 'deforestation rates are drastically lower inside officially recognized indigenous territories' (Option A)."
          }
        ]
      },
      {
        id: "T5-R2",
        title: "Sedentary Screen Time vs Outdoor Play in Youth",
        topic: "Physical Health & Developmental Psychology",
        text: `Over the past three decades, childhood and adolescence have experienced an unprecedented migration indoors. The ubiquity of video gaming consoles, smartphones, and algorithmic video feeds has displaced outdoor unstructured play. Recent global health surveys indicate that fewer than twenty percent of adolescents achieve the recommended sixty minutes of daily moderate-to-vigorous physical activity.\n\nThis sedentary shift manifests in tangible physical consequences, including surging rates of pediatric obesity, type 2 diabetes, and early-onset myopia. However, the psychological deficits are equally alarming. Outdoor play in natural settings provides essential sensory stimuli that foster risk assessment, resilience, and executive problem-solving. When children navigate physical environments—climbing trees, balancing across logs, negotiating spontaneous games—they calibrate their nervous systems against anxiety.\n\nPediatricians and public health advocates emphasize that solutions do not require turning back the technological clock. Instead, educational institutions must design green schoolyards, protect daily physical education recesses, and encourage active commuting such as biking and walking. Outdoor activity is not an extracurricular privilege; it is an indispensable biological foundation for cognitive and emotional development.`,
        questions: [
          {
            id: "Q5-4",
            question: "What percentage of adolescents currently meet daily physical activity guidelines according to surveys?",
            options: [
              { key: "A", text: "Over eighty percent." },
              { key: "B", text: "Fewer than twenty percent." },
              { key: "C", text: "Exactly fifty percent." },
              { key: "D", text: "Almost one hundred percent." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 explicitly notes that 'fewer than twenty percent of adolescents achieve the recommended sixty minutes of daily moderate-to-vigorous physical activity' (Option B)."
          },
          {
            id: "Q5-5",
            question: "What psychological benefit does the author attribute to outdoor play in natural environments?",
            options: [
              { key: "A", text: "It eliminates the need for intellectual academic studies." },
              { key: "B", text: "It stimulates sensory calibration, risk assessment, and anxiety resilience." },
              { key: "C", text: "It trains children to become professional competitive video gamers." },
              { key: "D", text: "It guarantees that adolescents never make physical mistakes." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 states that outdoor natural play provides sensory stimuli that 'foster risk assessment, resilience, and executive problem-solving', calibrating the nervous system against anxiety (Option B)."
          },
          {
            id: "Q5-6",
            question: "What practical measures do health advocates recommend for schools?",
            options: [
              { key: "A", text: "Eliminating outdoor physical education to increase computer screen time." },
              { key: "B", text: "Creating green schoolyards and protecting daily physical activity recesses." },
              { key: "C", text: "Replacing walking commutes with motorized buses exclusively." },
              { key: "D", text: "Banning sports that involve any degree of physical movement." }
            ],
            correct: "B",
            competence: "Literal & Synthesis",
            explanation: "Paragraph 3 recommends that institutions 'design green schoolyards, protect daily physical education recesses, and encourage active commuting' (Option B)."
          }
        ]
      },
      {
        id: "T5-R3",
        title: "The Evolution of the Olympic Ideal",
        topic: "History, Ethics & Global Sports",
        text: `When Pierre de Coubertin revived the modern Olympic Games in 1896, his foundational philosophy—known as Olympism—sought to place sport at the service of harmonious human development and peaceful international brotherhood. The Games were conceived as an amateur arena where athletic excellence transcended geopolitical rivalries and commercial interests.\n\nOver the ensuing century, however, the Olympics grew into a multibillion-dollar commercial spectacle inextricably entangled with geopolitical power struggles. The Cold War era saw boycotts and state-sponsored doping regimens designed to validate competing political ideologies through medal tables. In contemporary times, host cities face exorbitant debt after constructing colossal 'white elephant' stadiums that fall into disrepair after the closing ceremony.\n\nYet, beneath the hyper-commercialization, the genuine Olympic spirit periodically resurfaces. Moments of spontaneous sportsmanship, such as rivals helping fallen competitors across finish lines or the creation of the Refugee Olympic Team, demonstrate that sport retains a singular power to bridge ideological chasms. The enduring challenge for the Olympic movement is reclaiming its ethical soul from commercial excess.`,
        questions: [
          {
            id: "Q5-7",
            question: "What was Coubertin's original vision for the modern Olympic Games?",
            options: [
              { key: "A", text: "To generate billions of dollars in commercial television broadcasting rights." },
              { key: "B", text: "To promote harmonious human development and international peace through amateur sports." },
              { key: "C", text: "To demonstrate the military superiority of European empires." },
              { key: "D", text: "To construct permanent concrete stadiums in every sovereign capital." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 notes that Coubertin sought 'to place sport at the service of harmonious human development and peaceful international brotherhood' (Option B)."
          },
          {
            id: "Q5-8",
            question: "What does the phrase 'white elephant' stadiums refer to in paragraph 2?",
            options: [
              { key: "A", text: "Arenas decorated with traditional wildlife sculptures." },
              { key: "B", text: "Costly venues that become useless and expensive burdens after the Games." },
              { key: "C", text: "Temporary stadiums built entirely out of sustainable bamboo." },
              { key: "D", text: "Underground training complexes used during the winter season." }
            ],
            correct: "B",
            competence: "Lexical in Context",
            explanation: "In English, a 'white elephant' is an expensive possession that is burdensome to maintain and has no practical use, matching Option B."
          },
          {
            id: "Q5-9",
            question: "Which example does the author cite to show that the Olympic spirit still exists?",
            options: [
              { key: "A", text: "Corporate sponsorship contracts signed by athletic apparel brands." },
              { key: "B", text: "The establishment of the Refugee Olympic Team and acts of sportsmanship between rivals." },
              { key: "C", text: "Geopolitical boycotts organized during international conflicts." },
              { key: "D", text: "The accumulation of gold medals by dominant military superpowers." }
            ],
            correct: "B",
            competence: "Literal & Contextual",
            explanation: "Paragraph 3 highlights 'moments of spontaneous sportsmanship, such as rivals helping fallen competitors across finish lines or the creation of the Refugee Olympic Team' (Option B)."
          },
          {
            id: "Q5-10",
            question: "What is the author's primary conclusion in the final paragraph?",
            options: [
              { key: "A", text: "The Olympic Games should be abolished immediately." },
              { key: "B", text: "The movement must reclaim its foundational ethical values from commercial distortion." },
              { key: "C", text: "Only professional athletes with private sponsors should compete." },
              { key: "D", text: "Medal tables should be replaced with monetary prizes for host cities." }
            ],
            correct: "B",
            competence: "Main Idea / Conclusion",
            explanation: "The author concludes: 'The enduring challenge for the Olympic movement is reclaiming its ethical soul from commercial excess' (Option B)."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Test 6: Oceanic Microplastics, Habit Formation & Virtual Reality Medicine",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T6-R1",
        title: "The Pervasive Crisis of Marine Microplastics",
        topic: "Marine Ecology & Pollution",
        text: `Microplastics—synthetic polymer fragments measuring less than five millimeters in diameter—have contaminated every aquatic realm on Earth, from the Mariana Trench to polar sea ice. These particles originate from two primary pathways: primary microplastics manufactured intentionally for cosmetics and industrial abrasives, and secondary microplastics formed through the mechanical weathering, solar radiation, and biodegradation of discarded plastic debris.\n\nBecause plastics are chemically persistent and hydrophobic, they act like chemical sponges in marine environments, absorbing toxic organic pollutants like DDT and polychlorinated biphenyls (PCBs). Filter-feeding marine fauna, including zooplankton, mussels, and juvenile fish, ingest these toxic particles, mistaking them for food. As a result, synthetic polymers and bioaccumulative toxins ascend the trophic web, eventually appearing on consumer dinner plates.\n\nTechnological filtration and coastal cleanup operations are admirable but fundamentally insufficient if upstream plastic manufacturing continues to accelerate. Truly effective intervention mandates international treaties limiting virgin plastic production, phasing out non-recyclable polymers, and transition to biodegradable algal and cellulose alternatives.`,
        questions: [
          {
            id: "Q6-1",
            question: "What differentiates primary microplastics from secondary microplastics?",
            options: [
              { key: "A", text: "Primary are intentionally manufactured; secondary originate from degraded plastic debris." },
              { key: "B", text: "Primary are completely biodegradable; secondary never decompose." },
              { key: "C", text: "Primary are found only in the Arctic; secondary exist only in tropical waters." },
              { key: "D", text: "Primary are safe for fish to consume; secondary are lethal." }
            ],
            correct: "A",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 distinguishes primary (intentionally manufactured for cosmetics/abrasives) from secondary (formed through mechanical weathering and breakdown of debris) (Option A)."
          },
          {
            id: "Q6-2",
            question: "Why are microplastics especially dangerous to marine organisms that ingest them?",
            options: [
              { key: "A", text: "They emit radiation that destroys submarine geological trenches." },
              { key: "B", text: "They act as sponges that absorb and concentrate toxic chemical pollutants." },
              { key: "C", text: "They instantly dissolve the stomach walls of marine mammals." },
              { key: "D", text: "They prevent ocean currents from circulating water." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 notes that because microplastics are hydrophobic, 'they act like chemical sponges in marine environments, absorbing toxic organic pollutants' which bioaccumulate up the food web (Option B)."
          },
          {
            id: "Q6-3",
            question: "What upstream solution does the author emphasize as essential?",
            options: [
              { key: "A", text: "Relying exclusively on volunteers to collect trash on local beaches." },
              { key: "B", text: "Binding international treaties that restrict virgin plastic production." },
              { key: "C", text: "Dumping plastic debris into deep subterranean tectonic trenches." },
              { key: "D", text: "Banning all commercial seafood consumption worldwide." }
            ],
            correct: "B",
            competence: "Inferential Synthesis",
            explanation: "Paragraph 3 argues that cleanup is insufficient and 'truly effective intervention mandates international treaties limiting virgin plastic production' and developing biodegradable alternatives (Option B)."
          }
        ]
      },
      {
        id: "T6-R2",
        title: "Atomic Habits: The Architecture of Behavioral Change",
        topic: "Behavioral Psychology & Personal Growth",
        text: `Human behavior is fundamentally governed by subconscious automated routines known as habits. Behavioral psychologists have mapped the universal neural architecture of habits into a four-stage feedback loop: cue, craving, response, and reward. When a cue triggers a craving, our nervous system executes a behavioral response to obtain a dopamine reward, which in turn encodes the neural loop for automatic execution in future scenarios.\n\nMany adolescents mistakenly believe that academic transformation requires radical bursts of heroic willpower or sudden massive overhauls. In reality, sustained improvement is the product of compounding atomic habits: small, marginal enhancements of one percent executed consistently over time. A student who reads for fifteen focused minutes daily completes dozens of books annually, compounding vocabulary and analytical comprehension exponentially.\n\nTo engineer beneficial habits, behavioral scientists recommend environmental design over sheer willpower. Making positive cues visible—such as placing a study notebook open on a cleared desk—while making distractions invisible—such as charging mobile phones in another room—reduces friction for productive actions. We do not rise to the level of our grand aspirations; we fall to the level of our daily systems.`,
        questions: [
          {
            id: "Q6-4",
            question: "What are the four components of the habit feedback loop outlined in paragraph 1?",
            options: [
              { key: "A", text: "Memory, emotion, intellect, and physical strength." },
              { key: "B", text: "Cue, craving, response, and reward." },
              { key: "C", text: "Willpower, effort, exhaustion, and failure." },
              { key: "D", text: "Observation, imitation, penalty, and correction." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 explicitly lists: 'a four-stage feedback loop: cue, craving, response, and reward' (Option B)."
          },
          {
            id: "Q6-5",
            question: "According to the author, why are 'atomic habits' more effective than sudden massive efforts?",
            options: [
              { key: "A", text: "They eliminate the necessity for sleep and physical nutrition." },
              { key: "B", text: "Small one-percent daily enhancements compound exponentially over time." },
              { key: "C", text: "They guarantee immediate success without any practice." },
              { key: "D", text: "They can only be implemented by adult professionals." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 explains that sustained progress results from 'compounding atomic habits: small, marginal enhancements of one percent executed consistently over time' (Option B)."
          },
          {
            id: "Q6-6",
            question: "What practical strategy does the author suggest to avoid smartphone distractions while studying?",
            options: [
              { key: "A", text: "Placing the device in another room to increase friction and make cues invisible." },
              { key: "B", text: "Holding the phone in one hand while reading with the other." },
              { key: "C", text: "Deleting all software applications permanently from the device." },
              { key: "D", text: "Studying exclusively in late-night hours without lighting." }
            ],
            correct: "A",
            competence: "Literal & Application",
            explanation: "Paragraph 3 recommends environmental design, specifically 'making distractions invisible—such as charging mobile phones in another room' (Option A)."
          }
        ]
      },
      {
        id: "T6-R3",
        title: "Virtual Reality in Modern Surgical Training",
        topic: "Biomedical Technology & Medical Education",
        text: `For over a century, surgical training followed the traditional residency adage: 'see one, do one, teach one.' While this apprentice framework produced generations of skilled practitioners, learning complex procedures on living patients inevitably carried inherent procedural risks. Today, high-fidelity immersive virtual reality (VR) simulations are revolutionizing surgical education by providing hyper-realistic digital operating theaters.\n\nEquipped with VR headsets and haptic sensory controllers that mimic the tactile resistance of biological tissue, surgical trainees can rehearse intricate laparoscopic and orthopedic procedures countless times. They can rotate three-dimensional models of a patient's exact anatomical scans, experimenting with different surgical trajectories without placing a single human life in jeopardy.\n\nEmpirical validation demonstrates that surgeons trained with VR simulations perform technical tasks up to thirty percent faster and make six times fewer procedural errors than peers trained exclusively through traditional observation. As haptic feedback algorithms and artificial intelligence surgical tutors continue to mature, immersive virtual simulation will become not an optional enrichment, but a mandatory prerequisite for surgical board certification.`,
        questions: [
          {
            id: "Q6-7",
            question: "What was the traditional training adage mentioned in paragraph 1?",
            options: [
              { key: "A", text: "'See one, do one, teach one.'" },
              { key: "B", text: "'Observe, memorize, pass the exam.'" },
              { key: "C", text: "'Simulate twice, operate never.'" },
              { key: "D", text: "'Read textbooks, avoid hospitals.'" }
            ],
            correct: "A",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 states: 'surgical training followed the traditional residency adage: \"see one, do one, teach one\"' (Option A)."
          },
          {
            id: "Q6-8",
            question: "What function do haptic sensory controllers serve in VR surgical simulations?",
            options: [
              { key: "A", text: "They play relaxing background music to reduce surgeon anxiety." },
              { key: "B", text: "They simulate the physical tactile resistance of living biological tissue." },
              { key: "C", text: "They record audio transcriptions of patient medical histories." },
              { key: "D", text: "They replace the surgeon's hands during real robotic surgeries." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 2 explains that haptic controllers 'mimic the tactile resistance of biological tissue', providing realistic physical feedback (Option B)."
          },
          {
            id: "Q6-9",
            question: "What performance difference did empirical studies find in VR-trained surgeons?",
            options: [
              { key: "A", text: "They performed 30% faster and made six times fewer procedural errors." },
              { key: "B", text: "They took twice as long to complete simple incisions." },
              { key: "C", text: "They showed no measurable difference compared to non-trained peers." },
              { key: "D", text: "They forgot basic anatomical terminology." }
            ],
            correct: "A",
            competence: "Literal Comprehension",
            explanation: "Paragraph 3 notes that surgeons trained with VR 'perform technical tasks up to thirty percent faster and make six times fewer procedural errors' (Option A)."
          },
          {
            id: "Q6-10",
            question: "What does the author predict about the future role of VR in medical education?",
            options: [
              { key: "A", text: "It will be abandoned due to high equipment costs." },
              { key: "B", text: "It will become a mandatory requirement for surgical certification." },
              { key: "C", text: "It will replace human doctors with fully autonomous robots." },
              { key: "D", text: "It will be restricted to veterinary clinics." }
            ],
            correct: "B",
            competence: "Inferential Prediction",
            explanation: "The author concludes that VR simulation will become 'not an optional enrichment, but a mandatory prerequisite for surgical board certification' (Option B)."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Test 7: The Electric Vehicle Transition, Literature in the Digital Era & Emotional Intelligence",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T7-R1",
        title: "The Electric Vehicle Revolution: Promises and Bottlenecks",
        topic: "Clean Transportation & Sustainable Engineering",
        text: `The transition from internal combustion engines to electric mobility represents one of the swiftest technological shifts in industrial history. Spurred by international decarbonization treaties and falling battery manufacturing costs, global automakers are investing hundreds of billions of dollars into electrification. In metropolitan corridors, electric vehicles (EVs) deliver immediate local dividends: zero tailpipe exhaust emissions, cleaner urban air, and significantly reduced acoustic noise pollution.\n\nHowever, a comprehensive lifecycle analysis reveals that electric transport is only as clean as the power grid supplying its charging infrastructure. If an electric car is recharged with electricity generated by coal or crude oil thermal plants, its net emissions reductions are drastically diminished. Furthermore, the mining of critical battery minerals—such as lithium in South American salt flats and cobalt in Central Africa—often raises severe environmental and human rights concerns.\n\nAddressing these systemic bottlenecks requires a multi-pronged approach. Grid operators must accelerate the integration of wind and solar sources into national distribution systems. Simultaneously, the automotive sector must invest in standardized battery recycling to create closed-loop mineral supply chains, preventing battery packs from ending up in hazardous landfills.`,
        questions: [
          {
            id: "Q7-1",
            question: "What immediate urban benefit do electric vehicles provide according to paragraph 1?",
            options: [
              { key: "A", text: "Complete elimination of traffic congestion in metropolitan centers." },
              { key: "B", text: "Zero tailpipe exhaust emissions and lower acoustic noise pollution." },
              { key: "C", text: "Unlimited free recharging for all vehicle owners." },
              { key: "D", text: "Instant reduction in vehicle manufacturing costs." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 explicitly identifies immediate benefits as 'zero tailpipe exhaust emissions, cleaner urban air, and significantly reduced acoustic noise pollution' (Option B)."
          },
          {
            id: "Q7-2",
            question: "Why does the author state that EVs are 'only as clean as the power grid'?",
            options: [
              { key: "A", text: "Because dirty power grids make vehicle batteries physically rust." },
              { key: "B", text: "Recharging from fossil-fuel plants significantly diminishes net emission reductions." },
              { key: "C", text: "Electric motors cannot operate on alternating electrical currents." },
              { key: "D", text: "Drivers refuse to charge their vehicles at solar-powered stations." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 explains that if an EV is recharged using electricity generated from coal or crude oil, 'its net emissions reductions are drastically diminished' (Option B)."
          },
          {
            id: "Q7-3",
            question: "What recommendation does the author make regarding mineral supply chains in paragraph 3?",
            options: [
              { key: "A", text: "Banning all electric vehicles until 2050." },
              { key: "B", text: "Investing in standardized battery recycling to create closed-loop systems." },
              { key: "C", text: "Discarding old battery packs into ocean waters." },
              { key: "D", text: "Replacing all mineral batteries with diesel fuel generators." }
            ],
            correct: "B",
            competence: "Literal & Synthesis",
            explanation: "Paragraph 3 calls on the automotive sector to 'invest in standardized battery recycling to create closed-loop mineral supply chains' (Option B)."
          }
        ]
      },
      {
        id: "T7-R2",
        title: "Reading in the Digital Age: Are Physical Books Truly Endangered?",
        topic: "Literature, Media Studies & Cognitive Reading",
        text: `When electronic book readers and digital tablets first emerged in the early 2000s, techno-utopian analysts confidently heralded the imminent demise of the printed codex. They argued that physical paper was bulky, environmentally unsustainable, and technologically obsolete compared to lightweight digital files capable of storing entire libraries. Yet two decades later, print book sales have not merely survived; in many demographic sectors, they have experienced a notable resurgence.\n\nCognitive neuroscientists studying reading mechanics point out that physical books offer tactile and spatial memory cues that screens fail to reproduce. Readers unconsciously map textual passages based on page topography—the physical thickness of pages turned on the left versus pages remaining on the right, the tactile grain of paper, and the visual absence of notification pop-ups. This cognitive anchoring fosters deeper immersive reading and superior retention of complex narrative structures.\n\nDigital reading undeniably excels for immediate reference, academic searchability, and portable convenience. However, physical books provide a restorative refuge from screen fatigue and chronic algorithmic stimulation. Rather than one medium annihilating the other, modern readers are settling into a peaceful coexistence, choosing digital formats for rapid utility and print books for meditative immersion.`,
        questions: [
          {
            id: "Q7-4",
            question: "What did technology analysts predict when e-readers emerged in the early 2000s?",
            options: [
              { key: "A", text: "That print book sales would double within three years." },
              { key: "B", text: "The imminent disappearance and obsolescence of the printed book." },
              { key: "C", text: "That digital screens would cause universal eye blindness." },
              { key: "D", text: "That public libraries would ban electronic tablets." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 notes that analysts 'confidently heralded the imminent demise of the printed codex' (Option B)."
          },
          {
            id: "Q7-5",
            question: "Why do physical books facilitate deeper reading comprehension and memory retention?",
            options: [
              { key: "A", text: "They contain brighter illuminated displays than digital screens." },
              { key: "B", text: "They offer tactile and spatial memory cues like page topography without distractions." },
              { key: "C", text: "They require internet connections to turn from page to page." },
              { key: "D", text: "They are written in more archaic and complex vocabulary." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 explains that physical books provide tactile and spatial memory cues (page topography, tactile grain, absence of notifications) that anchor memory (Option B)."
          },
          {
            id: "Q7-6",
            question: "What is the author's ultimate conclusion regarding print versus digital books?",
            options: [
              { key: "A", text: "Digital books will completely replace paper books by 2030." },
              { key: "B", text: "Both mediums coexist peacefully, serving different reading purposes." },
              { key: "C", text: "Schools should ban digital reading devices from all libraries." },
              { key: "D", text: "Print publishers will go bankrupt due to rising paper costs." }
            ],
            correct: "B",
            competence: "Author's Conclusion",
            explanation: "The author concludes that 'modern readers are settling into a peaceful coexistence, choosing digital formats for rapid utility and print books for meditative immersion' (Option B)."
          }
        ]
      },
      {
        id: "T7-R3",
        title: "Emotional Intelligence: The Decisive Skill for the Future of Work",
        topic: "Leadership, Psychology & Career Readiness",
        text: `In an era where generative artificial intelligence, robotic automation, and computational algorithms are mastering analytical calculation, human career value is undergoing a profound paradigm recalibration. For generations, traditional education prioritized technical proficiency and raw cognitive intelligence (IQ) as the sole determinants of professional success. In the modern workplace, however, emotional intelligence (EQ)—the capacity to recognize, understand, and constructively manage emotions in oneself and others—has emerged as the premier competitive differentiator.\n\nPsychologist Daniel Goleman synthesized emotional intelligence into five core pillars: self-awareness, self-regulation, internal motivation, empathy, and social interpersonal skill. While a software engineer or financial analyst can rely on algorithms to compile statistical models, algorithms cannot navigate complex team negotiations, resolve interdepartmental friction, or inspire disengaged colleagues during organizational crises.\n\nFurthermore, research indicates that high-EQ leaders cultivate psychological safety within their teams, fostering environments where calculated creative risk-taking is embraced rather than penalized. Schools and universities that neglect socio-emotional training in favor of rote technical memorization do their students a profound disservice. In a digitized global economy, human empathy is not a 'soft' indulgence; it is the ultimate foundational hard skill.`,
        questions: [
          {
            id: "Q7-7",
            question: "According to paragraph 1, why is emotional intelligence (EQ) becoming more valuable today?",
            options: [
              { key: "A", text: "Because automation and AI are handling routine analytical calculations." },
              { key: "B", text: "Because IQ has been proven to have zero relationship with academic performance." },
              { key: "C", text: "Because corporations no longer require software engineering or math." },
              { key: "D", text: "Because universities have stopped teaching technical subjects entirely." }
            ],
            correct: "A",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 explains that as AI and algorithms master analytical calculation, EQ has emerged as the premier competitive differentiator (Option A)."
          },
          {
            id: "Q7-8",
            question: "What do high-EQ leaders create within their organizations according to paragraph 3?",
            options: [
              { key: "A", text: "Automated surveillance systems to penalize student mistakes." },
              { key: "B", text: "Psychological safety where creative risk-taking is embraced." },
              { key: "C", text: "Strict hierarchies that prohibit informal interpersonal discussion." },
              { key: "D", text: "Independent software companies with no human employees." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 3 states that high-EQ leaders 'cultivate psychological safety within their teams, fostering environments where calculated creative risk-taking is embraced' (Option B)."
          },
          {
            id: "Q7-9",
            question: "What does the author mean by stating that empathy is 'the ultimate foundational hard skill'?",
            options: [
              { key: "A", text: "Empathy is extremely difficult to learn and should be avoided." },
              { key: "B", text: "Empathy is a vital, indispensable capability for modern professional success." },
              { key: "C", text: "Empathy requires heavy physical endurance training." },
              { key: "D", text: "Empathy is only useful for healthcare and nursing professions." }
            ],
            correct: "B",
            competence: "Author's Tone & Metaphor",
            explanation: "The author uses this contrast to show that empathy, often dismissed as an optional 'soft' skill, is actually critical and foundational in a mechanized economy (Option B)."
          },
          {
            id: "Q7-10",
            question: "Which of the following is NOT one of Daniel Goleman's five pillars of EQ mentioned in the text?",
            options: [
              { key: "A", text: "Self-awareness and empathy." },
              { key: "B", text: "Raw algorithmic computation speed." },
              { key: "C", text: "Self-regulation and internal motivation." },
              { key: "D", text: "Social interpersonal skill." }
            ],
            correct: "B",
            competence: "Detail Verification",
            explanation: "Paragraph 2 lists self-awareness, self-regulation, internal motivation, empathy, and social skill. Algorithmic computation speed is associated with machines, not Goleman's EQ pillars (Option B)."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Test 8: Cybersecurity in the IoT Era, Behavioral Decision-Making & Youth Environmental Activism",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T8-R1",
        title: "The Internet of Things: Ubiquitous Convenience or Security Nightmare?",
        topic: "Cybersecurity & Network Ethics",
        text: `The proliferation of the Internet of Things (IoT)—smart thermostats, voice-activated domestic assistants, connected refrigerators, and wearable biometric trackers—has woven digital intelligence into the fabric of everyday physical existence. Proponents celebrate the unprecedented convenience: smart appliances optimize household electricity consumption, while wearable sensors continuously monitor cardiovascular vital signs, alerting physicians to medical anomalies before acute episodes manifest.\n\nYet this hyper-connected ecosystem introduces perilous vulnerabilities. Unlike corporate enterprise servers defended by dedicated cybersecurity engineers, consumer IoT devices are routinely manufactured with minimal hardware encryption, hard-coded default administrative passwords, and infrequent firmware security patches. Consequently, millions of compromised smart home gadgets can be harvested into vast malicious 'botnets' capable of orchestrating crippling distributed denial-of-service (DDoS) attacks against essential national infrastructure.\n\nFurthermore, the sheer volume of telemetry data collected by smart devices erodes personal privacy. Continuous audio recording, geolocation tracking, and biometric logging generate intimate behavioral profiles that are routinely monetized by commercial data brokers. Securing the IoT frontier demands mandatory baseline hardware security standards, user-friendly data privacy transparency, and consumer awareness that convenience should never compromise basic digital safety.`,
        questions: [
          {
            id: "Q8-1",
            question: "What is a primary benefit of IoT devices described in paragraph 1?",
            options: [
              { key: "A", text: "They eliminate the necessity for domestic electrical wiring." },
              { key: "B", text: "They optimize energy use and monitor vital health signs in real time." },
              { key: "C", text: "They prevent computer software developers from losing their jobs." },
              { key: "D", text: "They provide free international broadband to rural schools." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 notes that smart appliances 'optimize household electricity consumption, while wearable sensors continuously monitor cardiovascular vital signs' (Option B)."
          },
          {
            id: "Q8-2",
            question: "Why are consumer IoT devices particularly vulnerable to hackers?",
            options: [
              { key: "A", text: "They operate on military-grade encryption protocols." },
              { key: "B", text: "They are often built with minimal encryption, default passwords, and rare security patches." },
              { key: "C", text: "They require users to manually type complex passwords every hour." },
              { key: "D", text: "They cannot connect to home Wi-Fi networks." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 2 explains that consumer IoT gadgets 'are routinely manufactured with minimal hardware encryption, hard-coded default administrative passwords, and infrequent firmware security patches' (Option B)."
          },
          {
            id: "Q8-3",
            question: "What does the author suggest to protect privacy in the IoT era in paragraph 3?",
            options: [
              { key: "A", text: "Banning all smart devices and returning to mechanical telegraphs." },
              { key: "B", text: "Mandatory hardware security standards and clear user data transparency." },
              { key: "C", text: "Allowing data brokers to sell personal biometric data without restrictions." },
              { key: "D", text: "Permitting hackers to audit government enterprise servers freely." }
            ],
            correct: "B",
            competence: "Inferential Synthesis",
            explanation: "Paragraph 3 calls for 'mandatory baseline hardware security standards, user-friendly data privacy transparency, and consumer awareness' (Option B)."
          }
        ]
      },
      {
        id: "T8-R2",
        title: "The Architecture of Human Decision-Making: Fast and Slow Thinking",
        topic: "Cognitive Psychology & Behavioral Economics",
        text: `Nobel laureate Daniel Kahneman revolutionized contemporary psychology by demonstrating that human judgment is governed by the interaction of two distinct cognitive modes: System 1 and System 2. System 1 operates automatically, intuitively, and rapidly, requiring little to no voluntary effort. It allows us to dodge an incoming projectile, read facial emotional expressions instantly, or calculate simple equations like two plus two without deliberate contemplation.\n\nIn contrast, System 2 allocates attention to effortful mental operations, including complex statistical calculations, critical reading, and deliberate self-control. While System 2 perceives itself as the conscious decision-maker, it is computationally lazy and energy-intensive. Consequently, the brain routinely delegates complex judgments to System 1 heuristics—mental shortcuts that are efficient, yet susceptible to predictable cognitive biases such as confirmation bias and loss aversion.\n\nRecognizing this cognitive architecture is vital for adolescents navigating an information-saturated world. Digital algorithms and targeted advertising are explicitly designed to trigger impulsive System 1 reactions. Becoming an effective critical thinker requires learning when to deliberately hit the mental pause button, disengage immediate emotional impulses, and summon System 2 to scrutinize evidence and evaluate logical validity.`,
        questions: [
          {
            id: "Q8-4",
            question: "What characterizes System 1 thinking according to paragraph 1?",
            options: [
              { key: "A", text: "It is slow, methodical, and requires intensive conscious calculation." },
              { key: "B", text: "It operates automatically, intuitively, and quickly with minimal conscious effort." },
              { key: "C", text: "It is active only during deep sleep and dreaming states." },
              { key: "D", text: "It is used exclusively by mathematicians and logicians." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 explains that System 1 'operates automatically, intuitively, and rapidly, requiring little to no voluntary effort' (Option B)."
          },
          {
            id: "Q8-5",
            question: "Why does the human brain frequently rely on System 1 shortcuts even for complex issues?",
            options: [
              { key: "A", text: "Because System 2 is completely incapable of performing logical analysis." },
              { key: "B", text: "Because System 2 is effortful and computationally energy-intensive." },
              { key: "C", text: "Because System 1 never makes mistakes or demonstrates biases." },
              { key: "D", text: "Because human evolution has eliminated System 2 in adolescents." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 notes that while System 2 handles complex operations, 'it is computationally lazy and energy-intensive', so the brain delegates to System 1 heuristics (Option B)."
          },
          {
            id: "Q8-6",
            question: "How can adolescents become better critical thinkers in the digital era?",
            options: [
              { key: "A", text: "By trusting their immediate emotional System 1 impulses without questioning." },
              { key: "B", text: "By deliberately pausing and activating System 2 to analyze evidence critically." },
              { key: "C", text: "By clicking on targeted advertising as quickly as possible." },
              { key: "D", text: "By refusing to read complex texts or calculate numbers." }
            ],
            correct: "B",
            competence: "Inferential & Application",
            explanation: "Paragraph 3 advises learning 'when to deliberately hit the mental pause button, disengage immediate emotional impulses, and summon System 2 to scrutinize evidence' (Option B)."
          }
        ]
      },
      {
        id: "T8-R3",
        title: "Youth Environmental Activism: Redefining Global Diplomacy",
        topic: "Civics, Global Governance & Youth Leadership",
        text: `In 2018, when a solitary teenager initiated a school strike for climate outside the Swedish parliament, few political pundits anticipated that this quiet protest would ignite a worldwide youth movement comprising millions of students across every continent. Frustrated by decades of diplomatic paralysis, ceremonial declarations, and unfulfilled carbon reduction pledges by adult leaders, young activists have transformed climate action from an abstract scientific discourse into an urgent moral imperative.\n\nYouth movements have utilized sophisticated communication strategies, combining social media amplification with legal challenges in constitutional courts. In landmark lawsuits from Colombia to Germany, adolescent plaintiffs have successfully argued that governmental failure to curb greenhouse gas emissions infringes upon their constitutional rights to life, health, and a habitable biosphere for future generations.\n\nCritics occasionally dismiss youth activism as idealistic or economically naive, pointing out the complex logistical realities of modern energy infrastructure. Yet the primary achievement of the youth climate movement has never been providing technical engineering blueprints; it has been shifting the global baseline of what is politically acceptable. By refusing to accept environmental destruction as inevitable, young leaders have forced corporate boardrooms and legislative assemblies to treat planetary survival as a non-negotiable priority.`,
        questions: [
          {
            id: "Q8-7",
            question: "What frustration initially sparked the global youth climate movement in paragraph 1?",
            options: [
              { key: "A", text: "The excessive difficulty of high school biology examinations." },
              { key: "B", text: "Decades of political inaction, empty promises, and unfulfilled emissions pledges." },
              { key: "C", text: "A complete global ban on student internet access." },
              { key: "D", text: "The high price of commercial public transit tickets in Europe." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 states students were 'frustrated by decades of diplomatic paralysis, ceremonial declarations, and unfulfilled carbon reduction pledges by adult leaders' (Option B)."
          },
          {
            id: "Q8-8",
            question: "What legal argument have youth plaintiffs used in constitutional courts?",
            options: [
              { key: "A", text: "That governments must pay every student a monthly climate subsidy." },
              { key: "B", text: "That governmental climate inaction violates their constitutional rights to life and a habitable future." },
              { key: "C", text: "That adults should no longer be permitted to vote in national elections." },
              { key: "D", text: "That all industrial energy production should be banned immediately." }
            ],
            correct: "B",
            competence: "Literal & Contextual",
            explanation: "Paragraph 2 notes plaintiffs argued that failure to curb emissions 'infringes upon their constitutional rights to life, health, and a habitable biosphere for future generations' (Option B)."
          },
          {
            id: "Q8-9",
            question: "What does the author identify as the primary achievement of youth climate activism in paragraph 3?",
            options: [
              { key: "A", text: "Inventing new photovoltaic solar battery technology." },
              { key: "B", text: "Shifting the political baseline and making climate action an unavoidable moral priority." },
              { key: "C", text: "Closing down all corporate commercial boardrooms worldwide." },
              { key: "D", text: "Proving that economic infrastructure does not require energy." }
            ],
            correct: "B",
            competence: "Main Idea / Interpretation",
            explanation: "Paragraph 3 concludes that their primary achievement has been 'shifting the global baseline of what is politically acceptable' and forcing leaders to treat planetary survival as non-negotiable (Option B)."
          },
          {
            id: "Q8-10",
            question: "What is the author's tone toward youth climate activists?",
            options: [
              { key: "A", text: "Patronizing and cynical." },
              { key: "B", text: "Respectful, supportive, and appreciative of their impact." },
              { key: "C", text: "Indifferent and bored." },
              { key: "D", text: "Aggressive and condemning." }
            ],
            correct: "B",
            competence: "Author's Tone",
            explanation: "The author praises the movement for transforming climate action into an urgent moral imperative and shifting global politics, indicating a respectful and supportive tone (Option B)."
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Test 9: Ocean Acidification, The Gig Economy & Smart City Architecture",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T9-R1",
        title: "Ocean Acidification: The Silent Threat Beneath the Waves",
        topic: "Marine Chemistry & Climate Impact",
        text: `While public climate attention frequently concentrates on atmospheric warming and terrestrial wildfires, a profound and insidious chemical transformation is unfolding beneath the ocean's surface. The world's oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. When carbon dioxide dissolves into seawater, it undergoes chemical reactions that produce carbonic acid, gradually lowering the ocean's pH—a phenomenon known as ocean acidification.\n\nSince the beginning of the Industrial Revolution, surface ocean acidity has surged by thirty percent, representing a chemical rate of change unprecedented in the past fifty million years. The consequence for calcifying marine organisms is catastrophic. Corals, clams, oysters, and tiny pteropods—planktonic marine snails foundational to polar marine food webs—rely on carbonate ions to build and maintain their calcium carbonate shells. In acidified seawater, these vital building blocks become scarce, and existing shells can literally begin to dissolve.\n\nBecause coral reefs provide coastal storm protection, sustain tourism economies, and foster twenty-five percent of all marine species, their degradation threatens global food security and coastal livelihoods. Halting acidification cannot be accomplished through localized marine reserves; it demands the swift and definitive decarbonization of global energy systems.`,
        questions: [
          {
            id: "Q9-1",
            question: "How do the world's oceans contribute to carbon absorption according to paragraph 1?",
            options: [
              { key: "A", text: "They absorb about thirty percent of human-produced carbon dioxide emissions." },
              { key: "B", text: "They convert all carbon dioxide into harmless volcanic gases." },
              { key: "C", text: "They reflect one hundred percent of atmospheric carbon into space." },
              { key: "D", text: "They absorb carbon only near polar ice caps." }
            ],
            correct: "A",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 notes that 'the world's oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions' (Option A)."
          },
          {
            id: "Q9-2",
            question: "Why does ocean acidification threaten calcifying organisms like corals and oysters?",
            options: [
              { key: "A", text: "It causes water temperatures to freeze their sensory organs." },
              { key: "B", text: "It depletes carbonate ions needed for shells and can dissolve calcium structures." },
              { key: "C", text: "It blocks sunlight from reaching the ocean floor entirely." },
              { key: "D", text: "It increases salt concentration to toxic levels." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 explains that organisms rely on carbonate ions to build shells; acidification makes these blocks scarce and causes existing shells to dissolve (Option B)."
          },
          {
            id: "Q9-3",
            question: "What does the author conclude is necessary to stop ocean acidification?",
            options: [
              { key: "A", text: "Pouring alkaline chemical neutralizers directly into the Pacific Ocean." },
              { key: "B", text: "The swift and decisive decarbonization of global energy systems." },
              { key: "C", text: "Relying solely on local marine protected reserves." },
              { key: "D", text: "Banning all commercial marine shipping and navigation." }
            ],
            correct: "B",
            competence: "Author's Conclusion",
            explanation: "The author concludes: 'Halting acidification cannot be accomplished through localized marine reserves; it demands the swift and definitive decarbonization of global energy systems' (Option B)."
          }
        ]
      },
      {
        id: "T9-R2",
        title: "The Gig Economy: Autonomy or Precarious Labor?",
        topic: "Economics, Labor Rights & Digital Platforms",
        text: `The explosion of algorithmic labor platforms—delivering ridesharing, courier services, and on-demand freelance micro-tasks via smartphone apps—has created what economists designate the 'gig economy'. Digital platforms market this model as the ultimate empowerment of worker autonomy: individuals supposedly become their own micro-entrepreneurs, setting personalized schedules, choosing gigs freely, and achieving flexible work-life integration.\n\nYet labor sociologists reveal that beneath the glossy rhetoric of autonomy lies profound economic precarity. Platform algorithms classify workers as 'independent contractors' rather than formal employees, strategically exempting companies from providing healthcare coverage, paid sick leave, retirement contributions, or minimum wage guarantees. Furthermore, workers are subjected to algorithmic management: opaque rating systems, sudden deactivations without human review, and fluctuating surge-pricing pay rates.\n\nLegal and legislative battles across Europe and the Americas are challenging this dynamic. High courts in Britain and Spain have mandated that gig couriers and drivers be classified as workers with legal entitlements to statutory benefits. The core dilemma of modern labor is preserving the schedule flexibility afforded by digital algorithms while instituting the robust social safety nets won through a century of labor advocacy.`,
        questions: [
          {
            id: "Q9-4",
            question: "How do gig platform companies typically advertise their work model?",
            options: [
              { key: "A", text: "As traditional lifetime corporate employment with generous pensions." },
              { key: "B", text: "As the ultimate empowerment of autonomy where workers set their own schedules." },
              { key: "C", text: "As volunteer community service without monetary compensation." },
              { key: "D", text: "As mandatory government labor for high school graduates." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 notes platforms market the model as 'the ultimate empowerment of worker autonomy: individuals supposedly become their own micro-entrepreneurs, setting personalized schedules' (Option B)."
          },
          {
            id: "Q9-5",
            question: "What financial advantage do platform companies gain by classifying workers as 'independent contractors'?",
            options: [
              { key: "A", text: "They receive government tax subsidies for each delivery vehicle." },
              { key: "B", text: "They are legally exempted from providing healthcare, paid leave, and retirement contributions." },
              { key: "C", text: "They can eliminate all smartphone software development costs." },
              { key: "D", text: "They avoid paying for internet broadband connections in company headquarters." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 states classifying workers as independent contractors strategically exempts companies from 'providing healthcare coverage, paid sick leave, retirement contributions, or minimum wage guarantees' (Option B)."
          },
          {
            id: "Q9-6",
            question: "What does the author identify as the central dilemma of modern gig labor?",
            options: [
              { key: "A", text: "Banning smartphone applications permanently across all industries." },
              { key: "B", text: "Balancing digital scheduling flexibility with essential social and labor safety nets." },
              { key: "C", text: "Forcing all platform companies to convert into state-run monopolies." },
              { key: "D", text: "Eliminating minimum wage laws in all developing countries." }
            ],
            correct: "B",
            competence: "Main Idea / Synthesis",
            explanation: "The author concludes that the dilemma is 'preserving the schedule flexibility afforded by digital algorithms while instituting the robust social safety nets won through a century of labor advocacy' (Option B)."
          }
        ]
      },
      {
        id: "T9-R3",
        title: "Smart Cities: Urban Data, Sensors, and the Human Experience",
        topic: "Urban Architecture & Digital Governance",
        text: `As urban populations swell, municipal administrations are deploying the 'smart city' paradigm: embedding thousands of digital sensors across urban infrastructure to optimize resource flows. In modern smart metropolises from Singapore to Copenhagen, smart traffic grids adapt traffic light timings in real time to mitigate vehicle congestion, automated waste bins signal municipal trucks only when full, and smart streetlamps dim during vacant hours to conserve megawatts of electricity.\n\nYet architectural theorists and urban sociologists caution against technocratic over-optimization. A city is not an industrial factory or a computer motherboard; it is an organic, unpredictable tapestry of human culture, spontaneous social encounters, and community gatherings. When urban planning is dictated purely by algorithmic efficiency, cities risk losing the very friction and spontaneity that stimulate artistic innovation and civic cohesion.\n\nMoreover, the omnipresence of municipal surveillance—facial recognition cameras, automated license plate scanners, and cellular mobility heatmaps—raises critical questions regarding civil liberties. A genuinely smart city is not one that deploys the most microchips, but one that utilizes technology transparently to enhance social equity, air quality, public transit access, and democratic community participation.`,
        questions: [
          {
            id: "Q9-7",
            question: "How do smart traffic lights optimize urban traffic in paragraph 1?",
            options: [
              { key: "A", text: "By automatically fining every passing vehicle." },
              { key: "B", text: "By adapting traffic light timings dynamically in real time to reduce congestion." },
              { key: "C", text: "By shutting down roads to eliminate private cars completely." },
              { key: "D", text: "By displaying commercial advertisements to waiting pedestrians." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 states: 'smart traffic grids adapt traffic light timings in real time to mitigate vehicle congestion' (Option B)."
          },
          {
            id: "Q9-8",
            question: "Why do urban sociologists warn against treating cities purely as algorithmic systems?",
            options: [
              { key: "A", text: "Because computers cannot process electricity in tropical weather." },
              { key: "B", text: "Because cities are organic human communities requiring spontaneous social encounters and cultural friction." },
              { key: "C", text: "Because sensors make public transit too inexpensive for municipal budgets." },
              { key: "D", text: "Because traffic signals are incapable of running software programs." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 notes that a city is an 'organic, unpredictable tapestry of human culture, spontaneous social encounters, and community gatherings' which over-optimization threatens to destroy (Option B)."
          },
          {
            id: "Q9-9",
            question: "What civil liberties concern is highlighted in paragraph 3?",
            options: [
              { key: "A", text: "The excessive speed of underground subway trains." },
              { key: "B", text: "Ubiquitous surveillance through facial recognition and mobility tracking." },
              { key: "C", text: "The replacement of concrete sidewalks with permeable asphalt." },
              { key: "D", text: "The loss of electricity during night streetlamp dimming." }
            ],
            correct: "B",
            competence: "Literal & Contextual",
            explanation: "Paragraph 3 explicitly points to 'the omnipresence of municipal surveillance—facial recognition cameras, automated license plate scanners, and cellular mobility heatmaps' (Option B)."
          },
          {
            id: "Q9-10",
            question: "What constitutes a 'genuinely smart city' according to the author's final conclusion?",
            options: [
              { key: "A", text: "A metropolis that installs the highest number of electronic microchips." },
              { key: "B", text: "A city that uses technology transparently to enhance social equity and democratic participation." },
              { key: "C", text: "A city governed exclusively by artificial intelligence algorithms without human mayors." },
              { key: "D", text: "An urban center that bans all vehicular transit within fifty miles." }
            ],
            correct: "B",
            competence: "Main Idea / Conclusion",
            explanation: "The author concludes: 'A genuinely smart city is not one that deploys the most microchips, but one that utilizes technology transparently to enhance social equity, air quality, public transit access, and democratic community participation' (Option B)."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Test 10: Mindfulness Neuroscience, Ecotourism Ethics & The Evolution of Digital Slang",
    level: "Saber 11 • B1/B2",
    recommendedMinutes: 20,
    readings: [
      {
        id: "T10-R1",
        title: "The Neurobiology of Mindfulness and Stress Resilience",
        topic: "Cognitive Neuroscience & Mental Health",
        text: `In recent decades, mindfulness meditation—historically rooted in ancient contemplative traditions—has transitioned from spiritual cloisters into rigorous neuroscientific laboratories. Utilizing functional magnetic resonance imaging (fMRI) and electroencephalography (EEG), clinical researchers can directly observe structural and functional alterations in the brains of individuals who practice intentional mindfulness meditation for as few as eight consecutive weeks.\n\nNeuroimaging reveals two primary anatomical shifts. First, the amygdala—the brain's primitive threat-detection center responsible for initiating the 'fight-or-flight' stress cascade—exhibits reduced physical gray-matter volume and diminished reactivity. Second, neural connectivity strengthens within the prefrontal cortex and anterior cingulate cortex, brain regions governing focused attention, cognitive reappraisal, and conscious emotional regulation.\n\nThese neuroplastic modifications carry profound implications for modern teenagers facing academic anxiety and social pressures. Mindfulness is not mystical escapism or passive contemplation; it is deliberate, evidence-based strength training for the human brain. By practicing mindful breathing and detached observation of emotional stimuli, students can intercept acute stress responses before they manifest as chronic debilitating panic.`,
        questions: [
          {
            id: "Q10-1",
            question: "How long does it take for neuroscientists to observe structural brain changes from mindfulness?",
            options: [
              { key: "A", text: "At least twenty years of uninterrupted monastic practice." },
              { key: "B", text: "As few as eight consecutive weeks of regular practice." },
              { key: "C", text: "A single five-minute meditation session." },
              { key: "D", text: "Brain changes can never be observed through modern neuroimaging." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 explicitly states that researchers observe alterations 'in the brains of individuals who practice intentional mindfulness meditation for as few as eight consecutive weeks' (Option B)."
          },
          {
            id: "Q10-2",
            question: "What happens to the amygdala during regular mindfulness practice?",
            options: [
              { key: "A", text: "It doubles in size and triggers severe panic responses continuously." },
              { key: "B", text: "It exhibits reduced gray-matter volume and diminished stress reactivity." },
              { key: "C", text: "It completely detaches from the prefrontal cortex." },
              { key: "D", text: "It stops receiving oxygen during conscious meditation." }
            ],
            correct: "B",
            competence: "Literal & Contextual",
            explanation: "Paragraph 2 notes that 'the amygdala... exhibits reduced physical gray-matter volume and diminished reactivity' (Option B)."
          },
          {
            id: "Q10-3",
            question: "What metaphor does the author use to describe mindfulness in paragraph 3?",
            options: [
              { key: "A", text: "A financial investment in corporate stock markets." },
              { key: "B", text: "Deliberate, evidence-based strength training for the brain." },
              { key: "C", text: "An optical illusion that deceives human vision." },
              { key: "D", text: "A chemical antibiotic that cures bacterial diseases." }
            ],
            correct: "B",
            competence: "Literary Metaphor & Tone",
            explanation: "The author explicitly describes mindfulness as 'deliberate, evidence-based strength training for the human brain' (Option B)."
          }
        ]
      },
      {
        id: "T10-R2",
        title: "Ecotourism: Conservation Catalyst or Ecological Mirage?",
        topic: "Environmental Economics & Tourism Studies",
        text: `Ecotourism is frequently championed as the ultimate symbiotic economic model: generating revenue for biodiversity conservation and local community development by guiding conscious travelers through pristine natural ecosystems. Proponents maintain that when indigenous or rural communities can earn sustainable livelihoods as rainforest guides, boat operators, and lodge hosts, live trees and intact wildlife become exponentially more valuable than logging timber or poaching endangered fauna.\n\nYet unmanaged ecotourism frequently engenders paradoxical ecological degradation. The construction of luxury eco-resorts inside fragile wilderness buffers often fragments delicate animal migration corridors, contaminates pristine mountain watersheds with greywater runoff, and introduces non-native invasive plant species via hiking footwear. Furthermore, heavy visitor foot traffic and noise pollution can alter feeding and mating behaviors among sensitive wildlife species.\n\nTo fulfill its ethical promise, ecotourism must adhere to rigorous conservation standards. Authentic ecotourism operations must enforce strict carrying-capacity caps, allocate a verified percentage of gross revenues directly into local biodiversity trusts, and ensure that indigenous leadership maintains genuine executive governance over territorial tourism permits. Without these safeguards, 'ecotourism' degenerates into greenwashed consumer entertainment.`,
        questions: [
          {
            id: "Q10-4",
            question: "What is the primary economic argument in favor of ecotourism in paragraph 1?",
            options: [
              { key: "A", text: "It generates tax revenues by selling wild animal skins to foreign collectors." },
              { key: "B", text: "It makes live ecosystems more valuable to local communities than logging or poaching." },
              { key: "C", text: "It replaces all local agriculture with industrial golf courses." },
              { key: "D", text: "It eliminates the need for national park ranger salaries." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 explains that when locals earn livelihoods as guides and hosts, 'live trees and intact wildlife become exponentially more valuable than logging timber or poaching' (Option B)."
          },
          {
            id: "Q10-5",
            question: "How can unmanaged ecotourism inadvertently harm natural environments?",
            options: [
              { key: "A", text: "By causing wild animals to reproduce too rapidly." },
              { key: "B", text: "By fragmenting migration corridors, polluting watersheds, and altering animal behavior." },
              { key: "C", text: "By reducing the oxygen output of rainforest canopies." },
              { key: "D", text: "By making hiking trails too slippery for national park vehicles." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 details that resorts 'fragment delicate animal migration corridors, contaminate pristine mountain watersheds... and alter feeding and mating behaviors' (Option B)."
          },
          {
            id: "Q10-6",
            question: "What requirement must authentic ecotourism fulfill according to paragraph 3?",
            options: [
              { key: "A", text: "Allowing unlimited tourists into wildlife reserves without restrictions." },
              { key: "B", text: "Enforcing carrying-capacity limits and ensuring local indigenous governance." },
              { key: "C", text: "Paving concrete superhighways through national parks for tourist buses." },
              { key: "D", text: "Converting all wildlife habitats into enclosed zoological theme parks." }
            ],
            correct: "B",
            competence: "Main Idea / Synthesis",
            explanation: "Paragraph 3 specifies that authentic operations must 'enforce strict carrying-capacity caps... and ensure that indigenous leadership maintains genuine executive governance' (Option B)."
          }
        ]
      },
      {
        id: "T10-R3",
        title: "The Rapid Evolution of Language in the Internet Age",
        topic: "Linguistics, Sociolinguistics & Digital Culture",
        text: `Throughout human history, languages have perpetually evolved, but digital telecommunications networks have compressed morphological change into unprecedented timeframes. In the pre-internet era, regional slang and linguistic idioms evolved across generations, mediated by geography and formal literary publishing. Today, viral social media memes, text acronyms, and phonetic shortcuts circulate globally across billions of mobile screens in a matter of hours.\n\nTraditional prescriptive grammarians routinely lament digital communications, characterizing internet slang and informal texting shorthand as the degradation of syntactic rigor and literary eloquence. However, descriptive sociolinguists counter that digital communication does not signify intellectual decline, but rather the emergence of a sophisticated new linguistic register: 'textspeak' as a dynamic blend of oral immediacy and written durability.\n\nContemporary adolescents demonstrate remarkable code-switching agility. They seamlessly navigate between formal, structured prose in academic essays and concise, emoji-punctuated colloquialisms in peer messaging channels. Far from destroying language, the internet has democratized creative wordplay, generating expressive nuances that allow humans to convey subtle emotional tones across digital space with remarkable speed and wit.`,
        questions: [
          {
            id: "Q10-7",
            question: "How did language evolution in the pre-internet era differ from today according to paragraph 1?",
            options: [
              { key: "A", text: "It was faster because people wrote more handwritten letters." },
              { key: "B", text: "It evolved slowly across generations mediated by geography and formal publishing." },
              { key: "C", text: "It was identical in speed to contemporary viral social media memes." },
              { key: "D", text: "Ancient languages never altered their vocabulary or grammar." }
            ],
            correct: "B",
            competence: "Literal Comprehension",
            explanation: "Paragraph 1 contrasts the past, where slang 'evolved across generations, mediated by geography and formal literary publishing', with today's rapid digital circulation (Option B)."
          },
          {
            id: "Q10-8",
            question: "How do descriptive sociolinguists view digital texting and internet slang in paragraph 2?",
            options: [
              { key: "A", text: "As proof that adolescents are losing the ability to read words." },
              { key: "B", text: "As the emergence of a sophisticated new linguistic register blending speech and writing." },
              { key: "C", text: "As a dangerous criminal code designed to bypass school monitoring." },
              { key: "D", text: "As a temporary trend that will disappear within a single year." }
            ],
            correct: "B",
            competence: "Inferential Comprehension",
            explanation: "Paragraph 2 states sociolinguists see it as 'the emergence of a sophisticated new linguistic register: \"textspeak\" as a dynamic blend of oral immediacy and written durability' (Option B)."
          },
          {
            id: "Q10-9",
            question: "What skill does the author highlight among modern teenagers in paragraph 3?",
            options: [
              { key: "A", text: "Code-switching agility: moving seamlessly between formal academic prose and informal texting." },
              { key: "B", text: "Refusing to write academic essays in favor of text messages." },
              { key: "C", text: "Speaking only in emojis during classroom oral presentations." },
              { key: "D", text: "Inability to understand vocabulary outside of social media." }
            ],
            correct: "A",
            competence: "Literal & Contextual",
            explanation: "Paragraph 3 celebrates teenagers' 'code-switching agility', seamlessly navigating formal prose in essays and colloquial shorthand in messaging (Option A)."
          },
          {
            id: "Q10-10",
            question: "What is the author's overall perspective on the impact of the internet on language?",
            options: [
              { key: "A", text: "The internet is irrevocably ruining human grammar and eloquence." },
              { key: "B", text: "The internet has democratized creative expression and expanded human linguistic nuances." },
              { key: "C", text: "Only professional linguistic professors should be permitted to post online." },
              { key: "D", text: "Informal texting should be banned by national educational authorities." }
            ],
            correct: "B",
            competence: "Author's Stance & Thesis",
            explanation: "The author concludes: 'Far from destroying language, the internet has democratized creative wordplay, generating expressive nuances that allow humans to convey subtle emotional tones' (Option B)."
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TEENS_SABER_TESTS };
}
