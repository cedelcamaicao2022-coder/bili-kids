/**
 * BILIKIDS KIDS CLUB - UNIT 1 ENGINE
 * Age: 7-10 years (Cambridge Starters / Movers A1)
 */

// ============================================================================
// AUDIO SFX SYNTHESIZER (Web Audio API - Zero External Dependencies)
// ============================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(420, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(840, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playSuccess() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
    });
  }

  playError() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(160, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  playFanfare() {
    this.init();
    const chord = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    chord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.09);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.09 + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.09);
      osc.stop(this.ctx.currentTime + idx * 0.09 + 0.5);
    });
  }
}

const sfx = new SoundEffects();

// ============================================================================
// NATIVE SPEECH SYNTHESIS ENGINE (Natural English pronunciation con Fallback Seguro)
// ============================================================================
function speakEnglish(text, voiceType = 'kid', callback) {
  if (typeof playStudioOrSynthAudio === "function") {
    return playStudioOrSynthAudio(arguments[0], arguments[1], arguments[2]);
  }
  let called = false;
  const finish = () => {
    if (!called) {
      called = true;
      if (callback) callback();
    }
  };

  if (!('speechSynthesis' in window)) {
    finish();
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.88;
    utterance.pitch = voiceType === 'maya' ? 1.25 : voiceType === 'clerk' ? 0.95 : voiceType === 'alex' ? 1.15 : 1.05;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Karen'))) 
                      || voices.find(v => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    // Temporizador de seguridad: si el navegador no dispara onend, avanzamos de todos modos
    const safeTimer = setTimeout(finish, Math.max(1400, text.length * 75));

    utterance.onend = () => {
      clearTimeout(safeTimer);
      finish();
    };

    utterance.onerror = () => {
      clearTimeout(safeTimer);
      finish();
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn("TTS Error:", err);
    finish();
  }
}

// Load voices proactively
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// ============================================================================
// APP STATE & STARS
// ============================================================================
const AppState = {
  stars: parseInt(localStorage.getItem('bilikids_stars') || '120', 10),
  addStars(amount) {
    this.stars += amount;
    localStorage.setItem('bilikids_stars', this.stars);
    const starEl = document.getElementById('unitStarsCount');
    if (starEl) starEl.textContent = `${this.stars} pts`;
  }
};

// ============================================================================
// TABS NAVIGATION
// ============================================================================
function switchTab(tabKey, btn) {
  sfx.playPop();
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.activity-view').forEach(v => v.classList.remove('active-view'));

  if (btn) btn.classList.add('active');
  const targetView = document.getElementById(`view-${tabKey}`);
  if (targetView) targetView.classList.add('active-view');
}

// ============================================================================
// ACTIVIDAD 1: DIÁLOGOS DE LA VIDA REAL (6 ESCENARIOS EXTENSOS)
// ============================================================================
const RealWorldScenarios = {
  // 1. PRIMER DÍA EN LA ESCUELA (10 intercambios)
  school: {
    title: "First Day at School",
    badge: "School • A1",
    subtitle: "Conociendo a tus compañeros y ubicando tu salón de clases.",
    steps: [
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Hello! Good morning. Welcome to Bilikids School!",
        es: "¡Hola! Buenos días. ¡Bienvenido a la Escuela Bilikids!",
        question: "How should Maya reply politely?",
        choices: [
          { text: "Good morning! My name is Maya.", es: "¡Buenos días! Mi nombre es Maya.", correct: true },
          { text: "Good night, I am sleeping.", es: "Buenas noches, estoy durmiendo.", correct: false },
          { text: "I want an ice cream.", es: "Quiero un helado.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Nice to meet you, Maya! Are you a new student here?",
        es: "¡Mucho gusto, Maya! ¿Eres una nueva estudiante aquí?",
        question: "Maya confirms she is a new student. What does she say?",
        choices: [
          { text: "Yes, I am! Today is my first day.", es: "¡Sí, lo soy! Hoy es mi primer día.", correct: true },
          { text: "No, I am the teacher.", es: "No, yo soy la profesora.", correct: false },
          { text: "My pencil is red.", es: "Mi lápiz es rojo.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "I am ten years old. How old are you, Maya?",
        es: "Yo tengo diez años. ¿Cuántos años tienes tú, Maya?",
        question: "Maya is 9 years old. What does she say?",
        choices: [
          { text: "I have nine years.", es: "Tengo nueve años (error común en inglés)", correct: false },
          { text: "I am nine years old.", es: "Tengo nueve años (usando el verbo be)", correct: true },
          { text: "Nine o'clock in the morning.", es: "Las nueve en punto de la mañana.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Which grade are you in? Are we in fourth grade?",
        es: "¿En qué grado estás? ¿Estamos en cuarto grado?",
        question: "How does Maya reply that they are in the same grade?",
        choices: [
          { text: "Yes, we are in fourth grade together!", es: "¡Sí, estamos en cuarto grado juntos!", correct: true },
          { text: "No, we are at the beach.", es: "No, estamos en la playa.", correct: false },
          { text: "I like bananas.", es: "Me gustan los plátanos.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "The bell is ringing! Where is our classroom?",
        es: "¡Está sonando el timbre! ¿Dónde está nuestro salón?",
        question: "Maya points to classroom number 5. What does she say?",
        choices: [
          { text: "It is room number five, next to the library.", es: "Es el salón número cinco, al lado de la biblioteca.", correct: true },
          { text: "The airplane is flying high.", es: "El avión está volando alto.", correct: false },
          { text: "My shoes are black.", es: "Mis zapatos son negros.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Great! Let's walk to class. We are a great team!",
        es: "¡Genial! Vamos al salón. ¡Somos un gran equipo!",
        question: "How does Maya celebrate excitedly?",
        choices: [
          { text: "Yes, let's go! I am ready to learn.", es: "¡Sí, vamos! Estoy lista para aprender.", correct: true },
          { text: "I am tired, goodbye.", es: "Estoy cansada, adiós.", correct: false },
          { text: "Zero, one, two, three.", es: "Cero, uno, dos, tres.", correct: false }
        ]
      }
    ]
  },

  // 2. DE COMPRAS EN EL CENTRO COMERCIAL (10 intercambios)
  shopping: {
    title: "Shopping at the Mall",
    badge: "Shopping • A2",
    subtitle: "Comprando ropa, preguntando precios y eligiendo tallas.",
    steps: [
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Hello! Welcome to Fashion Kids. Can I help you?",
        es: "¡Hola! Bienvenidos a Fashion Kids. ¿Puedo ayudarles?",
        question: "Maya is looking for a blue T-shirt. What does she say?",
        choices: [
          { text: "Yes, please. I am looking for a blue T-shirt.", es: "Sí, por favor. Estoy buscando una camiseta azul.", correct: true },
          { text: "No, I am eating a burger.", es: "No, estoy comiendo una hamburguesa.", correct: false },
          { text: "My dog is sleeping.", es: "Mi perro está durmiendo.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Sure! What size do you need? Small or medium?",
        es: "¡Por supuesto! ¿Qué talla necesitas? ¿Pequeña o mediana?",
        question: "Maya needs a medium size. What does she say?",
        choices: [
          { text: "I need size medium, please.", es: "Necesito talla mediana, por favor.", correct: true },
          { text: "I need a football ball.", es: "Necesito un balón de fútbol.", correct: false },
          { text: "Today is Monday.", es: "Hoy es lunes.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Here is a nice blue T-shirt. Would you like to try it on?",
        es: "Aquí tienes una linda camiseta azul. ¿Te gustaría probártela?",
        question: "Maya asks where the fitting room is. What does she say?",
        choices: [
          { text: "Yes, thank you! Where is the fitting room?", es: "¡Sí, gracias! ¿Dónde está el probador?", correct: true },
          { text: "Where is the swimming pool?", es: "¿Dónde está la piscina?", correct: false },
          { text: "I don't like homework.", es: "No me gustan las tareas.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "It looks very cool on you, Maya! How much is it?",
        es: "¡Te queda genial, Maya! ¿Cuánto cuesta?",
        question: "Maya sees the 15-dollar price tag. What does she say?",
        choices: [
          { text: "It is fifteen dollars. That is a great price!", es: "Cuesta quince dólares. ¡Es un buen precio!", correct: true },
          { text: "It is fifteen kilometers.", es: "Son quince kilómetros.", correct: false },
          { text: "My sister is fifteen years old.", es: "Mi hermana tiene quince años.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Are you paying with cash or credit card?",
        es: "¿Pagas en efectivo o con tarjeta de crédito?",
        question: "Maya has cash. What does she reply?",
        choices: [
          { text: "I am paying with cash. Here is twenty dollars.", es: "Pago en efectivo. Aquí tiene veinte dólares.", correct: true },
          { text: "I am paying with an apple.", es: "Pago con una manzana.", correct: false },
          { text: "My cat is happy.", es: "Mi gato está feliz.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Store Clerk', avatar: '👔',
        text: "Here is your five dollars change and the receipt. Have a great day!",
        es: "Aquí está su cambio de cinco dólares y el recibo. ¡Que tenga un buen día!",
        question: "How does Maya say goodbye politely?",
        choices: [
          { text: "Thank you very much! Have a nice day, goodbye!", es: "¡Muchas gracias! ¡Tenga un buen día, adiós!", correct: true },
          { text: "No problem, I don't care.", es: "Sin problema, no me importa.", correct: false },
          { text: "It is raining outside.", es: "Está lloviendo afuera.", correct: false }
        ]
      }
    ]
  },

  // 3. EN EL CINE CON AMIGOS (10 intercambios)
  cinema: {
    title: "At the Movie Theater",
    badge: "Cinema • A1-A2",
    subtitle: "Comprando entradas de cine, palomitas y buscando asientos.",
    steps: [
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "We are at the cinema! Which movie do you want to see?",
        es: "¡Estamos en el cine! ¿Qué película quieres ver?",
        question: "Maya wants to watch the space movie. What does she reply?",
        choices: [
          { text: "I want to see the new Space Adventure movie!", es: "¡Quiero ver la nueva película de Aventuras Espaciales!", correct: true },
          { text: "I want to cook dinner.", es: "Quiero cocinar la cena.", correct: false },
          { text: "My bike is broken.", es: "Mi bicicleta está rota.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Ticket Clerk', avatar: '🎟️',
        text: "Hello! Welcome to CineStar. How many tickets do you need?",
        es: "¡Hola! Bienvenidos a CineStar. ¿Cuántos boletos necesitan?",
        question: "They need 2 tickets for kids. What should Alex ask for?",
        choices: [
          { text: "Two tickets for kids, please. Space Adventure at 4 PM.", es: "Dos boletos para niños, por favor. Aventura Espacial a las 4 PM.", correct: true },
          { text: "Ten adult tickets for tomorrow.", es: "Diez boletos de adulto para mañana.", correct: false },
          { text: "I don't like movies.", es: "No me gustan las películas.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Ticket Clerk', avatar: '🎟️',
        text: "That is twelve dollars in total. Here are your tickets for row D.",
        es: "Son doce dólares en total. Aquí tienen sus boletos para la fila D.",
        question: "What does Maya say to thank him?",
        choices: [
          { text: "Thank you! Row D is perfect.", es: "¡Gracias! La fila D es perfecta.", correct: true },
          { text: "Good night teacher.", es: "Buenas noches profesora.", correct: false },
          { text: "My dog can run fast.", es: "Mi perro puede correr rápido.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Now let's go to the candy bar. Do you want popcorn or nachos?",
        es: "Ahora vamos a la dulcería. ¿Quieres palomitas o nachos?",
        question: "Maya prefers cheese popcorn. What does she say?",
        choices: [
          { text: "I would like a large popcorn with cheese, please!", es: "¡Me gustaría palomitas grandes con queso, por favor!", correct: true },
          { text: "I don't eat breakfast.", es: "No desayuno.", correct: false },
          { text: "My favorite color is green.", es: "Mi color favorito es el verde.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "And what would you like to drink? Juice or water?",
        es: "¿Y qué te gustaría tomar? ¿Jugo o agua?",
        question: "Maya asks for fresh apple juice. What does she say?",
        choices: [
          { text: "An apple juice for me, please.", es: "Un jugo de manzana para mí, por favor.", correct: true },
          { text: "I drink hot soup.", es: "Tomo sopa caliente.", correct: false },
          { text: "Water is running in the river.", es: "El agua corre en el río.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "The movie is starting now! Seats D4 and D5 are here.",
        es: "¡La película está empezando! Los asientos D4 y D5 están aquí.",
        question: "How does Maya express that she is excited for the movie?",
        choices: [
          { text: "Awesome! Let's silence our phones and enjoy the movie!", es: "¡Genial! ¡Silenciemos los teléfonos y disfrutemos la película!", correct: true },
          { text: "I want to go home right now.", es: "Quiero ir a casa ahora mismo.", correct: false },
          { text: "Zero plus two equals two.", es: "Cero más dos es igual a dos.", correct: false }
        ]
      }
    ]
  },

  // 4. EN EL AEROPUERTO & VIAJE (10 intercambios)
  airport: {
    title: "At the Airport & Travel",
    badge: "Travel • A2",
    subtitle: "Check-in, pasaportes, equipaje y abordando el avión.",
    steps: [
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Good morning! Welcome to SkyAir. Where are you flying today?",
        es: "¡Buenos días! Bienvenidos a SkyAir. ¿A dónde vuelan hoy?",
        question: "Alex and Maya are flying to London. What should they reply?",
        choices: [
          { text: "Good morning! We are flying to London today.", es: "¡Buenos días! Volamos a Londres hoy.", correct: true },
          { text: "We are walking to the supermarket.", es: "Estamos caminando al supermercado.", correct: false },
          { text: "My name is not London.", es: "Mi nombre no es Londres.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Wonderful! May I please see your passports and tickets?",
        es: "¡Maravilloso! ¿Puedo ver sus pasaportes y boletos por favor?",
        question: "Maya hands over the documents politely. What does she say?",
        choices: [
          { text: "Here they are, officer. Two passports.", es: "Aquí los tiene, oficial. Dos pasaportes.", correct: true },
          { text: "I lost my shoes in the park.", es: "Perdí mis zapatos en el parque.", correct: false },
          { text: "Tomorrow is Sunday.", es: "Mañana es domingo.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Thank you. Do you have any luggage to check in?",
        es: "Gracias. ¿Tienen algún equipaje para registrar?",
        question: "Alex has a suitcase and a backpack. What does he reply?",
        choices: [
          { text: "Yes, we have one big suitcase and one backpack.", es: "Sí, tenemos una maleta grande y una mochila.", correct: true },
          { text: "We have five elephants.", es: "Tenemos cinco elefantes.", correct: false },
          { text: "No, I am wearing a hat.", es: "No, estoy usando un sombrero.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Please put your suitcase on the scale. It weighs 18 kilos. Perfect!",
        es: "Por favor pongan su maleta en la báscula. Pesa 18 kilos. ¡Perfecto!",
        question: "Maya asks for the boarding gate. What does she say?",
        choices: [
          { text: "Thank you! Which gate is our flight departing from?", es: "¡Gracias! ¿De qué puerta sale nuestro vuelo?", correct: true },
          { text: "Where is my bedroom?", es: "¿Dónde está mi habitación?", correct: false },
          { text: "The sky is blue today.", es: "El cielo está azul hoy.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Airline Agent', avatar: '🛫',
        text: "Your flight is boarding at Gate 14 at 10:30 AM. Here are your boarding passes.",
        es: "Su vuelo aborda en la Puerta 14 a las 10:30 AM. Aquí tienen sus pases de abordar.",
        question: "How does Alex say thank you?",
        choices: [
          { text: "Thank you very much for your help! Have a great day.", es: "¡Muchas gracias por su ayuda! Que tenga un gran día.", correct: true },
          { text: "I don't want to fly anymore.", es: "Ya no quiero volar.", correct: false },
          { text: "Eight plus eight is sixteen.", es: "Ocho más ocho es dieciséis.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Gate 14 is right over there. Are you excited for London, Maya?",
        es: "La Puerta 14 está justo allá. ¿Estás emocionada por Londres, Maya?",
        question: "What does Maya reply happily about the trip?",
        choices: [
          { text: "Yes, I am super excited! London is an amazing city.", es: "¡Sí, estoy súper emocionada! Londres es una ciudad increíble.", correct: true },
          { text: "No, I forgot my homework at school.", es: "No, olvidé mi tarea en la escuela.", correct: false },
          { text: "I need to buy a bicycle.", es: "Necesito comprar una bicicleta.", correct: false }
        ]
      }
    ]
  },

  // 5. EN LA PIZZERÍA / RESTAURANTE (10 intercambios)
  pizza: {
    title: "At the Pizzeria",
    badge: "Food • A1-A2",
    subtitle: "Pidiendo comida, bebidas e interactuando con el mesero.",
    steps: [
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Good afternoon! Welcome to Bella Pizza. Table for two?",
        es: "¡Buenas tardes! Bienvenidos a Bella Pizza. ¿Mesa para dos?",
        question: "How does Maya reply confirming the table?",
        choices: [
          { text: "Yes, please! Table for two near the window.", es: "¡Sí, por favor! Mesa para dos cerca de la ventana.", correct: true },
          { text: "No, I am playing soccer.", es: "No, estoy jugando fútbol.", correct: false },
          { text: "Ten, twenty, thirty.", es: "Diez, veinte, treinta.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Right this way. Here is the menu. What would you like to drink first?",
        es: "Por aquí. Aquí está el menú. ¿Qué les gustaría tomar primero?",
        question: "Alex orders cold lemonade for both. What does he say?",
        choices: [
          { text: "We would like two cold lemonades, please.", es: "Nos gustaría dos limonadas frías, por favor.", correct: true },
          { text: "We want two hot coffees.", es: "Queremos dos cafés calientes.", correct: false },
          { text: "I have five blue pencils.", es: "Tengo cinco lápices azules.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Two lemonades, perfect. And what pizza would you like today?",
        es: "Dos limonadas, perfecto. ¿Y qué pizza les gustaría hoy?",
        question: "Maya wants to order cheese and mushroom pizza. What does she say?",
        choices: [
          { text: "Can we have a medium cheese and mushroom pizza, please?", es: "¿Nos puede dar una pizza mediana de queso y champiñones, por favor?", correct: true },
          { text: "I want an ice cream sandwich.", es: "Quiero un sándwich de helado.", correct: false },
          { text: "The moon is round.", es: "La luna es redonda.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Excellent choice! That is our specialty. Would you like extra cheese?",
        es: "¡Excelente elección! Es nuestra especialidad. ¿Desean queso extra?",
        question: "How does Alex say yes, please?",
        choices: [
          { text: "Yes, extra cheese sounds delicious! Thank you.", es: "¡Sí, queso extra suena delicioso! Gracias.", correct: true },
          { text: "No, I don't like food.", es: "No, no me gusta la comida.", correct: false },
          { text: "My shoe is under the table.", es: "Mi zapato está debajo de la mesa.", correct: false }
        ]
      },
      {
        speaker: 'clerk', name: 'Waiter', avatar: '👨‍🍳',
        text: "Here is your hot pizza and drinks! Enjoy your meal.",
        es: "¡Aquí tienen su pizza caliente y bebidas! Buen provecho.",
        question: "What do Alex and Maya say to the waiter?",
        choices: [
          { text: "Thank you so much! It smells wonderful.", es: "¡Muchas gracias! Huele maravilloso.", correct: true },
          { text: "Where is my pencil case?", es: "¿Dónde está mi cartuchera?", correct: false },
          { text: "Goodbye yesterday.", es: "Adiós ayer.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "That was the most delicious pizza ever! Let's ask for the bill.",
        es: "¡Fue la pizza más rica del mundo! Pidamos la cuenta.",
        question: "Maya asks the waiter for the bill. What does she say?",
        choices: [
          { text: "Excuse me, could we have the bill, please?", es: "Disculpe, ¿nos podría traer la cuenta, por favor?", correct: true },
          { text: "Excuse me, where is the cinema?", es: "Disculpe, ¿dónde está el cine?", correct: false },
          { text: "I have twelve years old.", es: "Tengo doce años (incorrecto).", correct: false }
        ]
      }
    ]
  },

  // 6. GUSTOS, HOBBIES Y AMIGOS (10 intercambios)
  hobbies: {
    title: "Hobbies & Free Time",
    badge: "Hobbies • A1-A2",
    subtitle: "Hablando de lo que te gusta hacer, deportes, música y juegos.",
    steps: [
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Hey Maya! What do you like to do in your free time?",
        es: "¡Hola Maya! ¿Qué te gusta hacer en tu tiempo libre?",
        question: "Maya says she loves drawing and riding her bicycle. What does she reply?",
        choices: [
          { text: "I love drawing pictures and riding my bicycle!", es: "¡Me encanta dibujar dibujos y andar en mi bicicleta!", correct: true },
          { text: "I love sleeping at school.", es: "Me encanta dormir en la escuela.", correct: false },
          { text: "Two plus three is five.", es: "Dos más tres son cinco.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "That's awesome! Do you play any sports on the weekends?",
        es: "¡Eso es genial! ¿Practicas algún deporte los fines de semana?",
        question: "Maya plays football on Saturday mornings. What does she say?",
        choices: [
          { text: "Yes, I play soccer every Saturday morning with my friends.", es: "Sí, juego al fútbol todos los sábados por la mañana con mis amigos.", correct: true },
          { text: "I play video games 24 hours a day.", es: "Juego videojuegos 24 horas al día.", correct: false },
          { text: "My winter jacket is red.", es: "Mi chaqueta de invierno es roja.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "I play basketball! And do you play any musical instrument?",
        es: "¡Yo juego al básquetbol! ¿Y tocas algún instrumento musical?",
        question: "Maya plays the piano. What does she reply?",
        choices: [
          { text: "Yes, I practice the piano three days a week.", es: "Sí, practico el piano tres días a la semana.", correct: true },
          { text: "I have a big piano in my pocket.", es: "Tengo un gran piano en mi bolsillo.", correct: false },
          { text: "The guitar is drinking water.", es: "La guitarra está tomando agua.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "That is so cool. What kind of music is your favorite?",
        es: "Eso es genial. ¿Qué tipo de música es tu favorita?",
        question: "Maya says she likes pop music and cheerful songs. What does she say?",
        choices: [
          { text: "I really like pop music and energetic songs!", es: "¡Me gusta mucho la música pop y las canciones alegres!", correct: true },
          { text: "I don't like listening to sounds.", es: "No me gusta escuchar sonidos.", correct: false },
          { text: "My brother is seven years old.", es: "Mi hermano tiene siete años.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Do you want to play a video game together this afternoon?",
        es: "¿Quieres jugar a un videojuego juntos esta tarde?",
        question: "How does Maya reply accepting the invitation?",
        choices: [
          { text: "Yes, I'd love to! We can play the new adventure quest.", es: "¡Sí, me encantaría! Podemos jugar la nueva aventura.", correct: true },
          { text: "No, tomorrow was yesterday.", es: "No, mañana fue ayer.", correct: false },
          { text: "I lost my shoes again.", es: "Perdí mis zapatos otra vez.", correct: false }
        ]
      },
      {
        speaker: 'alex', name: 'Alex', avatar: '👦',
        text: "Great! Let's meet at 4 o'clock at my house. See you later!",
        es: "¡Genial! Nos vemos a las 4 en punto en mi casa. ¡Hasta luego!",
        question: "How does Maya say goodbye confirming the time?",
        choices: [
          { text: "Perfect! See you at 4 PM. Have a great day, Alex!", es: "¡Perfecto! Nos vemos a las 4 PM. ¡Que tengas un buen día, Alex!", correct: true },
          { text: "Goodbye, I am sleeping now.", es: "Adiós, estoy durmiendo ahora.", correct: false },
          { text: "Ten minus five is five.", es: "Diez menos cinco son cinco.", correct: false }
        ]
      }
    ]
  }
};

let currentScenarioKey = 'school';
let currentStoryStep = 0;

function switchScenario(scenarioKey, btnEl) {
  sfx.playPop();
  currentScenarioKey = scenarioKey;
  currentStoryStep = 0;

  document.querySelectorAll('.scenario-chip-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const sc = RealWorldScenarios[scenarioKey];
  document.getElementById('storySceneHeading').textContent = sc.title;
  document.getElementById('storySceneSubtitle').textContent = sc.subtitle;
  document.getElementById('storyLevelBadge').textContent = sc.badge;

  const chatFlow = document.getElementById('storyChatFlow');
  if (chatFlow) chatFlow.innerHTML = '';

  renderStoryCurrentStep();
}

function initInteractiveStory() {
  currentScenarioKey = 'school';
  currentStoryStep = 0;
  
  const chatFlow = document.getElementById('storyChatFlow');
  if (chatFlow) chatFlow.innerHTML = '';
  
  renderStoryCurrentStep();
}

function renderStoryCurrentStep() {
  const sc = RealWorldScenarios[currentScenarioKey];
  const step = sc.steps[currentStoryStep];
  const totalSteps = sc.steps.length;

  const progressBar = document.getElementById('storyProgressBar');
  const stepLabel = document.getElementById('storyStepLabel');
  const decisionContainer = document.getElementById('storyDecisionContainer');

  if (stepLabel) stepLabel.textContent = `Dialogue Turn ${currentStoryStep + 1} of ${totalSteps}`;
  if (progressBar) progressBar.style.width = `${((currentStoryStep + 1) / totalSteps) * 100}%`;

  // Añadir la frase del interlocutor (Alex, Mesero, Agente, etc.)
  appendStoryChatMessage(step.speaker, step.name, step.avatar, step.text, step.es);

  // Reproducir audio automáticamente
  speakEnglish(step.text, step.speaker);

  // Barajar las opciones aleatoriamente para que la respuesta correcta NUNCA esté en una posición fija
  const shuffledChoices = [...step.choices].sort(() => Math.random() - 0.5);

  // Renderizar la pregunta y las 3 opciones interactivas aleatorizadas
  if (decisionContainer) {
    decisionContainer.innerHTML = `
      <div class="story-prompt-card">
        <span class="prompt-badge">🤔 Your turn • Choose the best reply</span>
        <h3 class="prompt-question">${step.question}</h3>
        <div class="prompt-options-list">
          ${shuffledChoices.map((choice) => `
            <button class="prompt-option-btn" onclick="selectShuffledChoice(${choice.correct}, this, '${choice.text.replace(/'/g, "\\'")}', '${choice.es.replace(/'/g, "\\'")}')">
              <div>
                <div>${choice.text}</div>
                
              </div>
              <span style="font-size:1.1rem; opacity:0.6;">👉</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function appendStoryChatMessage(charKey, charName, charAvatar, textEn, textEs) {
  const chatFlow = document.getElementById('storyChatFlow');
  if (!chatFlow) return;

  const msgId = `msg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const isMaya = charKey === 'maya';
  const isClerk = charKey === 'clerk';

  const row = document.createElement('div');
  row.className = `chat-bubble-row ${isMaya ? 'from-maya' : isClerk ? 'from-clerk' : 'from-alex'}`;
  row.id = msgId;

  row.innerHTML = `
    <div class="character-avatar-bubble ${isMaya ? 'maya' : isClerk ? 'clerk' : ''}" id="avatar-${msgId}">
      ${charAvatar}
    </div>
    <div class="chat-message-bubble">
      <div class="chat-sender-name">
        <span>${charName}</span>
        <button class="chat-listen-btn" onclick="replayChatAudio('${textEn.replace(/'/g, "\\'")}', '${charKey}', 'avatar-${msgId}')">
          🔊 Listen
        </button>
      </div>
      <div class="chat-text-en">"${textEn}"</div>
      
    </div>
  `;

  chatFlow.appendChild(row);
  chatFlow.scrollTop = chatFlow.scrollHeight;
}

function replayChatAudio(text, charKey, avatarId) {
  sfx.playPop();
  const avatar = document.getElementById(avatarId);
  if (avatar) avatar.classList.add('talking');
  speakEnglish(text, charKey, () => {
    if (avatar) avatar.classList.remove('talking');
  });
}

function selectShuffledChoice(isCorrect, btnEl, textEn, textEs) {
  if (isCorrect) {
    sfx.playSuccess();
    btnEl.classList.add('correct-choice');

    // Deshabilitar todos los botones para evitar doble clic
    document.querySelectorAll('.prompt-option-btn').forEach(b => b.style.pointerEvents = 'none');

    // Maya dice su respuesta en el chat
    setTimeout(() => {
      appendStoryChatMessage('maya', 'Maya', '👧', textEn, textEs);
      
      // Reproducir con callback seguro que NUNCA se queda trabado
      speakEnglish(textEn, 'maya', () => {
        advanceStoryStep();
      });
      AppState.addStars(10);
    }, 300);

  } else {
    sfx.playError();
    btnEl.classList.add('wrong-choice');
    setTimeout(() => btnEl.classList.remove('wrong-choice'), 600);
  }
}

function advanceStoryStep() {
  const sc = RealWorldScenarios[currentScenarioKey];
  if (currentStoryStep < sc.steps.length - 1) {
    currentStoryStep++;
    setTimeout(() => {
      renderStoryCurrentStep();
    }, 400);
  } else {
    finishStoryCelebration();
  }
}

function finishStoryCelebration() {
  sfx.playFanfare();
  AppState.addStars(25);

  const decisionContainer = document.getElementById('storyDecisionContainer');
  const progressBar = document.getElementById('storyProgressBar');
  if (progressBar) progressBar.style.width = '100%';

  const sc = RealWorldScenarios[currentScenarioKey];
  const scenarioKeys = ['school', 'shopping', 'cinema', 'airport', 'pizza', 'hobbies'];
  const currentIndex = scenarioKeys.indexOf(currentScenarioKey);
  const isLast = currentIndex === scenarioKeys.length - 1;
  const nextIndex = isLast ? 0 : currentIndex + 1;
  const nextKey = scenarioKeys[nextIndex];
  const nextSc = RealWorldScenarios[nextKey];

  const scenarioIcons = {
    school: '🏫',
    shopping: '🛍️',
    cinema: '🎬',
    airport: '✈️',
    pizza: '🍕',
    hobbies: '🎮'
  };

  if (decisionContainer) {
    decisionContainer.innerHTML = `
      <div class="story-completed-box">
        <div class="story-complete-icon">🌟</div>
        <h3 class="story-complete-title">¡Diálogo "${sc.title}" Completado!</h3>
        <p class="story-complete-desc">
          ¡Increíble fluidez! Has completado todos los turnos de conversación de este escenario con éxito.
        </p>
        <div style="display:inline-flex; align-items:center; gap:8px; background:#fef3c7; color:#92400e; font-weight:700; padding:8px 18px; border-radius:999px; margin-bottom:18px;">
          <span>⭐</span>
          <span>+35 Estrellas Ganadas</span>
        </div>
        <div class="story-actions-row">
          <button class="btn-builder btn-builder-reset" onclick="initInteractiveStory()">
            <span>🔄</span>
            <span>Repetir este Escenario</span>
          </button>
          <button class="btn-builder btn-builder-check" onclick="switchScenario('${nextKey}', document.querySelectorAll('.scenario-chip-btn')[${nextIndex}])">
            <span>${scenarioIcons[nextKey] || '➔'}</span>
            <span>${isLast ? 'Reiniciar Ciclo: Escuela ➔' : `Siguiente: ${nextSc.title} ➔`}</span>
          </button>
        </div>
      </div>
    `;
  }
}

// ============================================================================
// ACTIVITY 2: WORD EXPLORER (Flashcards & Quiz)
// ============================================================================
const vocabularyData = [
  // Saludos & Expresiones
  { cat: 'greetings', en: 'Hello', es: 'Hola', ipa: '/həˈloʊ/', icon: '👋' },
  { cat: 'greetings', en: 'Good morning', es: 'Buenos días', ipa: '/ɡʊd ˈmɔːrnɪŋ/', icon: '🌅' },
  { cat: 'greetings', en: 'Nice to meet you', es: 'Mucho gusto', ipa: '/naɪs tuː miːt juː/', icon: '🤝' },
  { cat: 'greetings', en: 'Goodbye', es: 'Adiós', ipa: '/ɡʊdˈbaɪ/', icon: '👋' },
  { cat: 'greetings', en: 'See you later', es: 'Hasta luego', ipa: '/siː juː ˈleɪtər/', icon: '⏱️' },
  
  // Datos Personales
  { cat: 'personal', en: 'First name', es: 'Primer nombre', ipa: '/fɜːrst neɪm/', icon: '🏷️' },
  { cat: 'personal', en: 'Last name', es: 'Apellido', ipa: '/læst neɪm/', icon: '📇' },
  { cat: 'personal', en: 'Student', es: 'Estudiante', ipa: '/ˈstjuːdənt/', icon: '🎒' },
  { cat: 'personal', en: 'Teacher', es: 'Profesor(a)', ipa: '/ˈtiːtʃər/', icon: '👩‍🏫' },
  { cat: 'personal', en: 'Friend', es: 'Amigo(a)', ipa: '/frend/', icon: '⭐' },

  // Números 0-10
  { cat: 'numbers', en: 'Zero', es: 'Cero (0)', ipa: '/ˈzɪəroʊ/', icon: '0️⃣' },
  { cat: 'numbers', en: 'One', es: 'Uno (1)', ipa: '/wʌn/', icon: '1️⃣' },
  { cat: 'numbers', en: 'Two', es: 'Dos (2)', ipa: '/tuː/', icon: '2️⃣' },
  { cat: 'numbers', en: 'Three', es: 'Tres (3)', ipa: '/θriː/', icon: '3️⃣' },
  { cat: 'numbers', en: 'Four', es: 'Cuatro (4)', ipa: '/fɔːr/', icon: '4️⃣' },
  { cat: 'numbers', en: 'Five', es: 'Cinco (5)', ipa: '/faɪv/', icon: '5️⃣' },
  { cat: 'numbers', en: 'Six', es: 'Seis (6)', ipa: '/sɪks/', icon: '6️⃣' },
  { cat: 'numbers', en: 'Seven', es: 'Siete (7)', ipa: '/ˈsev.ən/', icon: '7️⃣' },
  { cat: 'numbers', en: 'Eight', es: 'Ocho (8)', ipa: '/eɪt/', icon: '8️⃣' },
  { cat: 'numbers', en: 'Nine', es: 'Nueve (9)', ipa: '/naɪn/', icon: '9️⃣' },
  { cat: 'numbers', en: 'Ten', es: 'Diez (10)', ipa: '/ten/', icon: '🔟' }
];

function renderWordCards(filterCat = 'all') {
  const container = document.getElementById('wordsGridContainer');
  if (!container) return;

  const filtered = filterCat === 'all' 
    ? vocabularyData 
    : vocabularyData.filter(item => item.cat === filterCat);

  container.innerHTML = filtered.map(item => `
    <div class="word-card" onclick="speakWordCard('${item.en}', this)">
      <div class="word-icon">${item.icon}</div>
      <div class="word-english">${item.en}</div>
      <div class="word-ipa">${item.ipa}</div>
      <div class="word-spanish">${item.es}</div>
      <span class="word-audio-btn">🔊 Listen</span>
    </div>
  `).join('');
  renderWordRecallQuiz(filtered);
}

function renderWordRecallQuiz(items) {
  const container = document.getElementById('wordsGridContainer');
  if (!container) return;
  container.hidden = false;
  let quiz = document.getElementById('wordRecallQuiz');
  if (!quiz) {
    quiz = document.createElement('section');
    quiz.id = 'wordRecallQuiz';
    quiz.style.cssText = 'margin:0 0 20px;padding:18px;border:2px solid #c7d2fe;border-radius:16px;background:#eef2ff;';
    container.before(quiz);
  }
  quiz.innerHTML = `<h3 style="margin:0 0 6px;color:#312e81;">🧠 Quick word recall</h3><p>Review the cards, then hide them and test what you remember.</p><button type="button" class="category-chip recall-start">Start recall check</button>`;
  const questions = [...items].sort(() => Math.random() - 0.5).slice(0, Math.min(5, items.length));
  let index = 0;
  let score = 0;
  const render = () => {
    if (index >= questions.length) {
      quiz.innerHTML = `<h3>🧠 Vocabulary recall complete</h3><p role="status">You recalled ${score} of ${questions.length} words.</p><button type="button" class="category-chip recall-review">Review word cards</button>`;
      quiz.querySelector('.recall-review').addEventListener('click', () => { container.hidden = false; index = 0; score = 0; renderWordRecallQuiz(items); });
      return;
    }
    const target = questions[index];
    const options = [target, ...items.filter(item => item !== target).sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
    quiz.innerHTML = `<h3 style="margin:0 0 6px;color:#312e81;">🧠 Quick word recall</h3><p style="margin:0 0 12px;">What is the English word for <strong>“${target.es}”</strong>? Question ${index + 1} of ${questions.length}.</p><div class="recall-options" style="display:flex;flex-wrap:wrap;gap:8px;"></div><p class="recall-feedback" role="status" aria-live="polite"></p><p>Correct: ${score}/${questions.length}</p>`;
    const optionsEl = quiz.querySelector('.recall-options');
    options.forEach(option => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'category-chip';
      button.textContent = `${option.icon} ${option.en}`;
      button.addEventListener('click', () => {
        const feedback = quiz.querySelector('.recall-feedback');
        if (option === target) {
          score++;
          feedback.textContent = `Correct: ${target.en}. Listen and repeat the word.`;
          speakWordCard(target.en);
          optionsEl.querySelectorAll('button').forEach(choice => { choice.disabled = true; });
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'category-chip';
          next.textContent = index + 1 === questions.length ? 'Finish check' : 'Next word';
          next.addEventListener('click', () => { index++; render(); });
          optionsEl.after(next);
        } else feedback.textContent = 'Not that one. Think of the word before choosing again.';
      });
      optionsEl.appendChild(button);
    });
  };
  quiz.querySelector('.recall-start').addEventListener('click', () => { container.hidden = true; render(); });
}

function filterWordCards(category, chipEl) {
  sfx.playPop();
  document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
  chipEl.classList.add('active');
  renderWordCards(category);
}

function speakWordCard(text, cardEl) {
  sfx.playPop();
  speakEnglish(text, 'kid');
}

// ============================================================================
// ACTIVITY 3: SENTENCE BUILDER (Grammar Lab - 25 Retos Curriculares)
// ============================================================================
const sentenceChallenges = [
  // 1-5: Saludos e Identidad básica con Verbo Be
  {
    es: "Hola, yo soy Maya.",
    target: ["Hello,", "I", "am", "Maya."],
    pool: ["Hello,", "Maya.", "am", "is", "I", "are"],
    tip: "Usa el pronombre 'I' con el verbo 'am'."
  },
  {
    es: "¿Cuál es tu nombre?",
    target: ["What", "is", "your", "name?"],
    pool: ["name?", "What", "your", "are", "is", "my"],
    tip: "Estructura de pregunta: Wh-word + Verb be + Sujeto."
  },
  {
    es: "Nosotros somos estudiantes.",
    target: ["We", "are", "students."],
    pool: ["We", "is", "am", "are", "students.", "teachers."],
    tip: "Con el pronombre plural 'We' usamos 'are'."
  },
  {
    es: "¿Tienes diez años?",
    target: ["Are", "you", "ten", "years", "old?"],
    pool: ["Are", "you", "is", "ten", "years", "old?", "nine"],
    tip: "En preguntas con 'You', el verbo 'Are' va al inicio."
  },
  {
    es: "¡Mucho gusto, Alex!",
    target: ["Nice", "to", "meet", "you,", "Alex!"],
    pool: ["Nice", "you,", "meet", "to", "Alex!", "Good"],
    tip: "Expresión común para saludar a alguien por primera vez."
  },

  // 6-10: Nombres, edades y saludos cotidianos
  {
    es: "Mi nombre es David.",
    target: ["My", "name", "is", "David."],
    pool: ["My", "name", "is", "David.", "are", "am"],
    tip: "Para 'My name' (tercera persona singular) usamos 'is'."
  },
  {
    es: "Tengo nueve años.",
    target: ["I", "am", "nine", "years", "old."],
    pool: ["I", "am", "nine", "years", "old.", "have", "is"],
    tip: "En inglés la edad se dice con 'am' (verbo be), no con 'have'."
  },
  {
    es: "¡Buenos días, profesora!",
    target: ["Good", "morning,", "teacher!"],
    pool: ["Good", "morning,", "teacher!", "night,", "afternoon,"],
    tip: "'Good morning' se usa por las mañanas."
  },
  {
    es: "¿Cómo estás hoy?",
    target: ["How", "are", "you", "today?"],
    pool: ["How", "are", "you", "today?", "is", "am"],
    tip: "Pregunta típica de saludo: How + are + you + today?"
  },
  {
    es: "Estoy muy bien, gracias.",
    target: ["I", "am", "very", "good,", "thank", "you."],
    pool: ["I", "am", "very", "good,", "thank", "you.", "are", "bad,"],
    tip: "Respuesta positiva cordial a 'How are you?'."
  },

  // 11-15: Preguntas Sí/No, respuestas cortas y datos personales
  {
    es: "¿Eres un estudiante nuevo?",
    target: ["Are", "you", "a", "new", "student?"],
    pool: ["Are", "you", "a", "new", "student?", "is", "an"],
    tip: "En preguntas de Sí/No el verbo 'Are' va primero."
  },
  {
    es: "Sí, yo soy.",
    target: ["Yes,", "I", "am."],
    pool: ["Yes,", "I", "am.", "are.", "is."],
    tip: "Respuesta corta afirmativa formal."
  },
  {
    es: "No, no lo soy.",
    target: ["No,", "I", "am", "not."],
    pool: ["No,", "I", "am", "not.", "are", "is"],
    tip: "Para negar en presente usamos 'am not'."
  },
  {
    es: "¿Cuál es tu primer nombre?",
    target: ["What", "is", "your", "first", "name?"],
    pool: ["What", "is", "your", "first", "name?", "are", "last"],
    tip: "'First name' se refiere al nombre de pila."
  },
  {
    es: "Mi apellido es Gómez.",
    target: ["My", "last", "name", "is", "Gomez."],
    pool: ["My", "last", "name", "is", "Gomez.", "are", "first"],
    tip: "'Last name' es el apellido familiar."
  },

  // 16-20: Amigos, números de contacto y despedidas
  {
    es: "Nosotros somos buenos amigos.",
    target: ["We", "are", "good", "friends."],
    pool: ["We", "are", "good", "friends.", "is", "am"],
    tip: "Sujeto plural 'We' siempre se combina con 'are'."
  },
  {
    es: "¿Cuál es tu número de teléfono?",
    target: ["What", "is", "your", "phone", "number?"],
    pool: ["What", "is", "your", "phone", "number?", "are", "my"],
    tip: "Pregunta informativa para pedir contacto."
  },
  {
    es: "Es cinco, cuatro, tres, dos, uno.",
    target: ["It", "is", "five,", "four,", "three,", "two,", "one."],
    pool: ["It", "is", "five,", "four,", "three,", "two,", "one.", "are"],
    tip: "En números de teléfono decimos dígito por dígito con 'It is'."
  },
  {
    es: "¡Hasta luego, amigo!",
    target: ["See", "you", "later,", "friend!"],
    pool: ["See", "you", "later,", "friend!", "Good", "tomorrow,"],
    tip: "Despedida informal para ver a alguien después."
  },
  {
    es: "¡Adiós, que tengas un buen día!",
    target: ["Goodbye,", "have", "a", "nice", "day!"],
    pool: ["Goodbye,", "have", "a", "nice", "day!", "night!", "week!"],
    tip: "Despedida amigable y respetuosa."
  },

  // 21-25: Clase escolar, edades y bienvenida
  {
    es: "Tú estás en mi clase de inglés.",
    target: ["You", "are", "in", "my", "English", "class."],
    pool: ["You", "are", "in", "my", "English", "class.", "is", "am"],
    tip: "'You' siempre se conjuga con 'are'."
  },
  {
    es: "¿Estamos listos para la escuela?",
    target: ["Are", "we", "ready", "for", "school?"],
    pool: ["Are", "we", "ready", "for", "school?", "is", "am"],
    tip: "Pregunta en plural con 'we': 'Are we...?'"
  },
  {
    es: "¡Sí, nosotros estamos listos!",
    target: ["Yes,", "we", "are", "ready!"],
    pool: ["Yes,", "we", "are", "ready!", "is", "am"],
    tip: "'We are' expresa la primera persona plural."
  },
  {
    es: "Tengo ocho años.",
    target: ["I", "am", "eight", "years", "old."],
    pool: ["I", "am", "eight", "years", "old.", "seven", "is"],
    tip: "Recuerda: 'I am' + número + 'years old'."
  },
  {
    es: "¡Bienvenido a nuestra escuela!",
    target: ["Welcome", "to", "our", "school!"],
    pool: ["Welcome", "to", "our", "school!", "in", "at"],
    tip: "Expresión de bienvenida: 'Welcome to...'."
  }
];

let currentChallengeIndex = 0;
let userPlacedWords = [];

function loadSentenceChallenge(index) {
  currentChallengeIndex = index;
  userPlacedWords = [];

  const challenge = sentenceChallenges[index];
  document.getElementById('challengeNum').textContent = `Reto ${index + 1} de ${sentenceChallenges.length}`;
  document.getElementById('promptTranslation').textContent = `"${challenge.es}"`;
  document.getElementById('grammarTip').textContent = `💡 Pista gramatical: ${challenge.tip}`;

  const dropzone = document.getElementById('sentenceDropzone');
  dropzone.className = 'dropzone-target';
  dropzone.innerHTML = '<span style="color:#94a3b8; font-size:0.9rem;">Toca las palabras abajo para colocarlas aquí en orden...</span>';

  // Barajar banco de palabras
  const shuffled = [...challenge.pool].sort(() => Math.random() - 0.5);
  const poolContainer = document.getElementById('wordBankContainer');
  poolContainer.innerHTML = shuffled.map((word, wIdx) => `
    <button class="word-tile" id="tile-${wIdx}" onclick="selectWordTile('${word}', 'tile-${wIdx}')">${word}</button>
  `).join('');

  document.getElementById('btnCheckSentence').style.display = 'inline-flex';
  document.getElementById('btnNextSentence').style.display = 'none';
}

function selectWordTile(word, tileId) {
  sfx.playPop();
  const tile = document.getElementById(tileId);
  if (!tile || tile.classList.contains('placed')) return;

  tile.classList.add('placed');
  userPlacedWords.push({ word, tileId });

  renderDropzone();
}

function removePlacedWord(placedIndex) {
  sfx.playPop();
  const removed = userPlacedWords.splice(placedIndex, 1)[0];
  const originalTile = document.getElementById(removed.tileId);
  if (originalTile) {
    originalTile.classList.remove('placed');
  }

  renderDropzone();
}

function renderDropzone() {
  const dropzone = document.getElementById('sentenceDropzone');
  dropzone.className = 'dropzone-target';

  if (userPlacedWords.length === 0) {
    dropzone.innerHTML = '<span style="color:#94a3b8; font-size:0.9rem;">Toca las palabras abajo para colocarlas aquí en orden...</span>';
    return;
  }

  dropzone.innerHTML = userPlacedWords.map((item, idx) => `
    <button class="word-tile" style="background:#ede9fe; border-color:#8b5cf6; border-bottom-color:#6d28d9; color:#4c1d95;" onclick="removePlacedWord(${idx})">
      ${item.word} ✕
    </button>
  `).join('');
}

function resetCurrentSentence() {
  sfx.playPop();
  loadSentenceChallenge(currentChallengeIndex);
}

function checkSentence() {
  const challenge = sentenceChallenges[currentChallengeIndex];
  const userSentence = userPlacedWords.map(w => w.word).join(' ');
  const targetSentence = challenge.target.join(' ');

  const dropzone = document.getElementById('sentenceDropzone');

  if (userSentence === targetSentence) {
    sfx.playSuccess();
    dropzone.className = 'dropzone-target correct';
    speakEnglish(targetSentence, 'alex');
    AppState.addStars(15);

    document.getElementById('btnCheckSentence').style.display = 'none';
    const nextBtn = document.getElementById('btnNextSentence');
    nextBtn.style.display = 'inline-flex';

    if (currentChallengeIndex === sentenceChallenges.length - 1) {
      nextBtn.textContent = '¡Completado! Repetir reto 🔄';
    } else {
      nextBtn.textContent = 'Siguiente Reto ➔';
    }
  } else {
    sfx.playError();
    dropzone.className = 'dropzone-target error';
  }
}

function nextSentenceChallenge() {
  sfx.playPop();
  if (currentChallengeIndex < sentenceChallenges.length - 1) {
    loadSentenceChallenge(currentChallengeIndex + 1);
  } else {
    sfx.playFanfare();
    loadSentenceChallenge(0);
  }
}

// ============================================================================
// ACTIVITY 4: SPEAKING QUEST (Speech Recognition & Evaluation)
// ============================================================================
const speakingPrompts = [
  { phrase: "Hello! My name is Alex.", es: "¡Hola! Mi nombre es Alex." },
  { phrase: "I am nine years old.", es: "Tengo nueve años." },
  { phrase: "Nice to meet you!", es: "¡Mucho gusto en conocerte!" },
  { phrase: "We are students.", es: "Nosotros somos estudiantes." }
];

let currentSpeakingIndex = 0;
let isRecording = false;
let recognitionInstance = null;

function loadSpeakingPrompt(index) {
  currentSpeakingIndex = index;
  const item = speakingPrompts[index];
  document.getElementById('micRecordBtn').disabled = false;
  document.getElementById('speakingTarget').textContent = item.phrase;
  document.getElementById('speakingHint').textContent = item.es;
  document.getElementById('speakingFeedback').innerHTML = '';
}

function listenSpeakingSample() {
  sfx.playPop();
  const phrase = speakingPrompts[currentSpeakingIndex].phrase;
  speakEnglish(phrase, 'maya');
}

function toggleVoiceRecord() {
  const btn = document.getElementById('micRecordBtn');
  const feedback = document.getElementById('speakingFeedback');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    sfx.playPop();
    feedback.innerHTML = `
      <div class="speech-result-text">🎙️ Este navegador no puede verificar lo que dices.</div>
      <span class="speech-score-badge" style="background:#fef3c7; color:#92400e;">
        Práctica sin puntuación. Escucha el modelo y repite con un adulto.
      </span>
    `;
    btn.disabled = true;
    return;
  }

  if (isRecording) {
    if (recognitionInstance) recognitionInstance.stop();
    return;
  }

  // Iniciar reconocimiento
  try {
    recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'en-US';
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onstart = () => {
      isRecording = true;
      btn.classList.add('recording');
      feedback.innerHTML = `<span style="color:#6366f1; font-weight:600;">Te estoy escuchando... ¡Habla ahora! 🎧</span>`;
    };

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const target = speakingPrompts[currentSpeakingIndex].phrase;

      // Evaluar similitud
      const cleanTranscript = transcript.toLowerCase().replace(/[^a-z0-9 ]/g, '');
      const cleanTarget = target.toLowerCase().replace(/[^a-z0-9 ]/g, '');

      const targetWords = cleanTarget.split(/\s+/).filter(Boolean);
      const heardWords = new Set(cleanTranscript.split(/\s+/).filter(Boolean));
      const matchedWords = targetWords.filter(word => heardWords.has(word)).length;
      const isMatch = cleanTranscript.length > 0 && matchedWords >= Math.min(2, targetWords.length) && matchedWords / targetWords.length >= 0.6;

      if (isMatch) {
        sfx.playSuccess();
        feedback.innerHTML = `
          <div class="speech-result-text">Dijiste: "<strong>${transcript}</strong>"</div>
          <span class="speech-score-badge" style="background:#dcfce7; color:#15803d;">
            🌟 Frase reconocida (+15 pts). Esto no mide la calidad de pronunciación.
          </span>
        `;
        AppState.addStars(15);
      } else {
        sfx.playPop();
        feedback.innerHTML = `
          <div class="speech-result-text">Dijiste: "${transcript}"</div>
          <span class="speech-score-badge" style="background:#fef3c7; color:#92400e;">
            👍 No se reconoció la frase. Escucha el modelo e intenta de nuevo; sin puntos.
          </span>
        `;
      }
    };

    recognitionInstance.onerror = (err) => {
      console.warn("Speech recognition error:", err);
      feedback.innerHTML = `<span style="color:#64748b; font-size:0.85rem;">No logramos escuchar claramente. Presiona el micrófono e intenta otra vez.</span>`;
    };

    recognitionInstance.onend = () => {
      isRecording = false;
      btn.classList.remove('recording');
    };

    recognitionInstance.start();

  } catch (e) {
    console.error(e);
    btn.classList.remove('recording');
  }
}

function nextSpeakingPrompt() {
  sfx.playPop();
  currentSpeakingIndex = (currentSpeakingIndex + 1) % speakingPrompts.length;
  loadSpeakingPrompt(currentSpeakingIndex);
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar estrellas
  const starEl = document.getElementById('unitStarsCount');
  if (starEl) starEl.textContent = `${AppState.stars} pts`;

  // Inicializar Diálogo Interactivo (Opción 2 - Duolingo Stories)
  initInteractiveStory();

  // Renderizar vocabulario
  renderWordCards('all');

  // Cargar primer reto gramatical
  loadSentenceChallenge(0);

  // Cargar primera frase de speaking
  loadSpeakingPrompt(0);
});
