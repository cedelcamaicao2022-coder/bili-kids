/**
 * BILI KIDS - 3D ANIMATED STORYBOOKS ENGINE
 * Realistic Page Turning Physics, ElevenLabs Audio Storytelling & 3D Visual Dioramas
 */

(() => {
  'use strict';

  // --- SOUND SYNTHESIZER FOR REALISTIC PAGE TURNS & AMBIENCE ---
  class StorySoundEngine {
    constructor() {
      this.ctx = null;
      this.muted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.muted = !this.muted;
      return this.muted;
    }

    // Realistic Paper Swish/Flutter Sound with tactile dual-stage response
    playPageTurn() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // White noise buffer for paper friction
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.42);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.45;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      // Bandpass filter to sculpt the soft paper rustle
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600, now);
      filter.frequency.exponentialRampToValueAtTime(380, now + 0.35);
      filter.Q.setValueAtTime(3.2, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.32, now + 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.40);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.41);
    }

    playChime() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.18, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.62);
      });
    }

    playCelebrationFanfare() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.2, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.9);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.95);
      });
    }
  }


  // --- SCENE LIVING ANIMATIONS DEFINITION (MATCHING EACH EXACT PAGE) ---
  const PAGE_SCENE_ELEMENTS = {
    // BILI
    bili_p1: { prop: '🌈', class: 'sparkle-pulse', pos: { top: '15%', right: '15%' }, hue: 200, label: 'Rainbow Forest' },
    bili_p2: { prop: '✨', class: 'prop-float', pos: { top: '25%', right: '20%' }, hue: 60, label: 'Colorless Flowers' },
    bili_p3: { prop: '🖌️', class: 'sparkle-pulse', pos: { top: '20%', right: '18%' }, hue: 350, label: 'Golden Brush' },
    bili_p4: { prop: '🦋', class: 'prop-float', pos: { top: '18%', right: '22%' }, hue: 50, label: 'Golden Butterflies' },
    bili_p5: { prop: '🐸', class: 'prop-bounce', pos: { bottom: '25%', right: '18%' }, hue: 130, label: 'Emerald Frogs' },
    bili_p6: { prop: '🌊', class: 'prop-wave', pos: { bottom: '20%', right: '25%' }, hue: 210, label: 'Crystal River' },
    bili_p7: { prop: '☁️', class: 'prop-float', pos: { top: '20%', right: '20%' }, hue: 320, label: 'Blushing Cloud' },
    bili_p8: { prop: '✨', class: 'sparkle-pulse', pos: { top: '15%', right: '30%' }, hue: 45, label: 'Glitter Rain' },
    bili_p9: { prop: '🌈', class: 'sparkle-pulse', pos: { top: '12%', right: '15%' }, hue: 300, label: 'Giant Rainbow' },
    bili_p10: { prop: '⭐', class: 'sparkle-pulse', pos: { top: '15%', right: '15%' }, hue: 230, label: 'Sweet Dreams' },

    // LEO
    leo_p1: { prop: '☀️', class: 'sparkle-pulse', pos: { top: '12%', right: '15%' }, hue: 45, label: 'Morning Sun' },
    leo_p2: { prop: '🌾', class: 'prop-float', pos: { top: '25%', right: '15%' }, hue: 35, label: 'Farmer Hat' },
    leo_p3: { prop: '🍀', class: 'prop-float', pos: { bottom: '30%', right: '20%' }, hue: 110, label: 'Bella the Cow' },
    leo_p4: { prop: '🍎', class: 'sparkle-pulse', pos: { top: '22%', right: '25%' }, hue: 0, label: 'Sweet Apples' },
    leo_p5: { prop: '🦆', class: 'prop-bounce', pos: { bottom: '24%', right: '22%' }, hue: 50, label: 'Five Ducklings' },
    leo_p6: { prop: '💫', class: 'sparkle-pulse', pos: { bottom: '28%', right: '20%' }, hue: 200, label: 'Skipping Stones' },
    leo_p7: { prop: '🐑', class: 'prop-float', pos: { top: '26%', right: '20%' }, hue: 30, label: 'Woolly the Lamb' },
    leo_p8: { prop: '🌻', class: 'sparkle-pulse', pos: { top: '18%', right: '18%' }, hue: 48, label: 'Golden Bell' },
    leo_p9: { prop: '🔔', class: 'sparkle-pulse', pos: { top: '16%', right: '15%' }, hue: 30, label: 'Farm Bell' },
    leo_p10: { prop: '🌙', class: 'prop-float', pos: { top: '14%', right: '16%' }, hue: 220, label: 'Starry Barn' },

    // LUNA
    luna_p1: { prop: '🎒', class: 'prop-float', pos: { top: '25%', right: '18%' }, hue: 280, label: 'Quest Backpack' },
    luna_p2: { prop: '🗺️', class: 'sparkle-pulse', pos: { bottom: '25%', right: '22%' }, hue: 40, label: 'Secret Map' },
    luna_p3: { prop: '🗝️', class: 'sparkle-pulse', pos: { top: '20%', right: '20%' }, hue: 200, label: 'Silver Key' },
    luna_p4: { prop: '🍪', class: 'prop-float', pos: { top: '24%', right: '22%' }, hue: 30, label: 'Warm Cookies' },
    luna_p5: { prop: '🫧', class: 'prop-float', pos: { top: '18%', right: '24%' }, hue: 290, label: 'Bubble Trail' },
    luna_p6: { prop: '🛁', class: 'prop-bounce', pos: { bottom: '26%', right: '20%' }, hue: 190, label: 'Rubber Duck' },
    luna_p7: { prop: '🪜', class: 'prop-float', pos: { top: '22%', right: '18%' }, hue: 35, label: 'Attic Stairs' },
    luna_p8: { prop: '✨', class: 'sparkle-pulse', pos: { top: '20%', right: '22%' }, hue: 50, label: 'Antique Chest' },
    luna_p9: { prop: '⭐', class: 'sparkle-pulse', pos: { top: '18%', right: '20%' }, hue: 55, label: 'Star Lantern' },
    luna_p10: { prop: '🧸', class: 'prop-float', pos: { top: '22%', right: '18%' }, hue: 260, label: 'Teddy Bear' },

    // FRIENDS
    friends_p1: { prop: '🌟', class: 'sparkle-pulse', pos: { top: '15%', right: '20%' }, hue: 50, label: 'Great Valley' },
    friends_p2: { prop: '💖', class: 'sparkle-pulse', pos: { top: '18%', right: '22%' }, hue: 340, label: 'Trio Hug' },
    friends_p3: { prop: '💎', class: 'prop-float', pos: { top: '18%', right: '20%' }, hue: 210, label: 'Crystal Tree' },
    friends_p4: { prop: '📜', class: 'prop-float', pos: { top: '22%', right: '22%' }, hue: 45, label: 'Three Gifts' },
    friends_p5: { prop: '🌈', class: 'sparkle-pulse', pos: { bottom: '25%', right: '22%' }, hue: 150, label: 'Rainbow Roots' },
    friends_p6: { prop: '🎵', class: 'prop-float', pos: { top: '20%', right: '20%' }, hue: 40, label: 'Kindness Song' },
    friends_p7: { prop: '⭐', class: 'sparkle-pulse', pos: { top: '14%', right: '25%' }, hue: 55, label: 'Star on Top' },
    friends_p8: { prop: '✨', class: 'sparkle-pulse', pos: { top: '12%', right: '18%' }, hue: 280, label: 'Starlight Burst' },
    friends_p9: { prop: '🎉', class: 'prop-bounce', pos: { top: '16%', right: '20%' }, hue: 330, label: 'Animal Dance' },
    friends_p10: { prop: '💫', class: 'sparkle-pulse', pos: { top: '15%', right: '20%' }, hue: 180, label: 'Best Friends' }
  };

  // --- STORY DEFINITIONS (4 STORIES * 10 PAGES EACH) ---
  const STORIES = {
    bili: {
      id: 'bili',
      title: 'Bili & the Rainbow Forest',
      subtitle: 'El Bosque de los Colores',
      mascot: 'assets/bili.png',
      badge: 'Libro 1',
      pages: [
        {
          num: 1,
          audioId: 'bili_p1',
          image: 'assets/stories/images/bili_p1.jpg',
          textEn: "Once upon a time, deep in the Rainbow Forest, lived Bili, a fluffy blue monster.",
          textEs: "Había una vez, en lo profundo del Bosque Arcoíris, un monstruito suave y azul llamado Bili.",
          words: [{ en: 'Forest', es: 'Bosque' }, { en: 'Blue', es: 'Azul' }, { en: 'Monster', es: 'Monstruito' }]
        },
        {
          num: 2,
          audioId: 'bili_p2',
          image: 'assets/stories/images/bili_p2.jpg',
          textEn: "One sunny morning, Bili woke up. Oh no, the forest flowers had lost their colors!",
          textEs: "Una mañana soleada, Bili despertó. ¡Oh no, las flores del bosque habían perdido sus colores!",
          words: [{ en: 'Morning', es: 'Mañana' }, { en: 'Flowers', es: 'Flores' }, { en: 'Colors', es: 'Colores' }]
        },
        {
          num: 3,
          audioId: 'bili_p3',
          image: 'assets/stories/images/bili_p3.jpg',
          textEn: "Bili took his golden paintbrush and tapped red paint. Swish! Red roses bloomed!",
          textEs: "Bili tomó su pincel dorado y tocó pintura roja. ¡Suish! ¡Rosas rojas florecieron!",
          words: [{ en: 'Paintbrush', es: 'Pincel' }, { en: 'Red', es: 'Rojo' }, { en: 'Roses', es: 'Rosas' }]
        },
        {
          num: 4,
          audioId: 'bili_p4',
          image: 'assets/stories/images/bili_p4.jpg',
          textEn: "Next came the butterflies. Bili gave them bright yellow wings that shone like sunshine.",
          textEs: "Luego llegaron las mariposas. Bili les dio alitas amarillas brillantes que brillaban como el sol.",
          words: [{ en: 'Butterflies', es: 'Mariposas' }, { en: 'Yellow', es: 'Amarillo' }, { en: 'Sunshine', es: 'Sol' }]
        },
        {
          num: 5,
          audioId: 'bili_p5',
          image: 'assets/stories/images/bili_p5.jpg',
          textEn: "Little frogs hopped by. Bili giggled and painted them fresh, sparkling green!",
          textEs: "Ranitas saltaron cerca. ¡Bili rio contento y las pintó de un verde fresco y brillante!",
          words: [{ en: 'Frogs', es: 'Ranitas' }, { en: 'Green', es: 'Verde' }, { en: 'Hop', es: 'Saltar' }]
        },
        {
          num: 6,
          audioId: 'bili_p6',
          image: 'assets/stories/images/bili_p6.jpg',
          textEn: "With a splash of blue, the crystal river danced with happy little waves.",
          textEs: "Con un toque de azul, el río de cristal danzó con alegres onditas.",
          words: [{ en: 'River', es: 'Río' }, { en: 'Waves', es: 'Olas' }, { en: 'Crystal', es: 'Cristal' }]
        },
        {
          num: 7,
          audioId: 'bili_p7',
          image: 'assets/stories/images/bili_p7.jpg',
          textEn: "A puffy cloud floated down. Bili swirled purple and pink on its soft cheeks.",
          textEs: "Una nube esponjosa bajó del cielo. Bili pintó suaves tonos violeta y rosa en sus mejillas.",
          words: [{ en: 'Cloud', es: 'Nube' }, { en: 'Purple', es: 'Violeta' }, { en: 'Pink', es: 'Rosa' }]
        },
        {
          num: 8,
          audioId: 'bili_p8',
          image: 'assets/stories/images/bili_p8.jpg',
          textEn: "The cloud rained glitter drops of joy all over the happy forest animals.",
          textEs: "La nube llovió gotitas de purpurina y alegría sobre todos los animalitos del bosque.",
          words: [{ en: 'Rain', es: 'Lluvia' }, { en: 'Glitter', es: 'Brillo' }, { en: 'Animals', es: 'Animales' }]
        },
        {
          num: 9,
          audioId: 'bili_p9',
          image: 'assets/stories/images/bili_p9.jpg',
          textEn: "Look! A magnificent giant rainbow arched across the entire bright blue sky!",
          textEs: "¡Mira! ¡Un arcoíris gigante y magnífico cruzó todo el brillante cielo azul!",
          words: [{ en: 'Rainbow', es: 'Arcoíris' }, { en: 'Sky', es: 'Cielo' }, { en: 'Giant', es: 'Gigante' }]
        },
        {
          num: 10,
          audioId: 'bili_p10',
          image: 'assets/stories/images/bili_p10.jpg',
          textEn: "Every color is special, just like you, smiled Bili. Sweet dreams, little explorer!",
          textEs: "Cada color es especial, igual que tú, sonrió Bili. ¡Dulces sueños, pequeño explorador!",
          words: [{ en: 'Special', es: 'Especial' }, { en: 'Dreams', es: 'Sueños' }, { en: 'Friends', es: 'Amigos' }]
        }
      ]
    },

    leo: {
      id: 'leo',
      title: "Leo's Sunshine Farm",
      subtitle: 'La Granja Soleada de Leo',
      mascot: 'assets/leo/leo_transparent.png',
      badge: 'Libro 2',
      pages: [
        {
          num: 1,
          audioId: 'leo_p1',
          image: 'assets/stories/images/leo_p1.jpg',
          textEn: "Cock-a-doodle-doo! The morning sun rose, and Little Leo the lion stretched his paws.",
          textEs: "¡Kikirikí! El sol de la mañana salió y el pequeño león Leo estiró sus patitas.",
          words: [{ en: 'Lion', es: 'León' }, { en: 'Morning', es: 'Mañana' }, { en: 'Sun', es: 'Sol' }]
        },
        {
          num: 2,
          audioId: 'leo_p2',
          image: 'assets/stories/images/leo_p2.jpg',
          textEn: "Leo put on his tiny farmer hat. Today was his big day on the Sunshine Farm!",
          textEs: "Leo se puso su sombrerito de granjero. ¡Hoy era su gran día en la Granja Soleada!",
          words: [{ en: 'Hat', es: 'Sombrero' }, { en: 'Farmer', es: 'Granjero' }, { en: 'Farm', es: 'Granja' }]
        },
        {
          num: 3,
          audioId: 'leo_p3',
          image: 'assets/stories/images/leo_p3.jpg',
          textEn: "First, Leo visited Bella the cow in the green meadow. Moo, good morning Leo!",
          textEs: "Primero, Leo visitó a la vaca Bella en el prado verde. ¡Muuu, buenos días Leo!",
          words: [{ en: 'Cow', es: 'Vaca' }, { en: 'Meadow', es: 'Prado' }, { en: 'Green', es: 'Verde' }]
        },
        {
          num: 4,
          audioId: 'leo_p4',
          image: 'assets/stories/images/leo_p4.jpg',
          textEn: "Leo shared a basket of sweet red apples. Crunch, crunch! Bella wagged her tail.",
          textEs: "Leo compartió una canasta de manzanas rojas. ¡Crunch, crunch! Bella movió la colita.",
          words: [{ en: 'Apples', es: 'Manzanas' }, { en: 'Basket', es: 'Canasta' }, { en: 'Tail', es: 'Cola' }]
        },
        {
          num: 5,
          audioId: 'leo_p5',
          image: 'assets/stories/images/leo_p5.jpg',
          textEn: "By the blue pond, five yellow ducklings splashed. Quack, quack! Swim with us, Leo!",
          textEs: "Junto a la laguna azul, cinco patitos amarillos chapoteaban. ¡Cuac, cuac! ¡Nada con nosotros, Leo!",
          words: [{ en: 'Ducklings', es: 'Patitos' }, { en: 'Pond', es: 'Laguna' }, { en: 'Swim', es: 'Nadar' }]
        },
        {
          num: 6,
          audioId: 'leo_p6',
          image: 'assets/stories/images/leo_p6.jpg',
          textEn: "Leo skipped shiny stones across the water. The ducklings cheered with happy splashes.",
          textEs: "Leo lanzó piedritas por el agua. Los patitos celebraron con alegres chapoteos.",
          words: [{ en: 'Stones', es: 'Piedras' }, { en: 'Water', es: 'Agua' }, { en: 'Splash', es: 'Chapotear' }]
        },
        {
          num: 7,
          audioId: 'leo_p7',
          image: 'assets/stories/images/leo_p7.jpg',
          textEn: "In the pen, baby lamb Woolly looked sad. Oh dear, where is my golden bell?",
          textEs: "En el corral, el corderito Lanitas estaba triste. ¡Ay, dónde estará mi campanita dorada!",
          words: [{ en: 'Lamb', es: 'Corderito' }, { en: 'Bell', es: 'Campana' }, { en: 'Gold', es: 'Dorado' }]
        },
        {
          num: 8,
          audioId: 'leo_p8',
          image: 'assets/stories/images/leo_p8.jpg',
          textEn: "Leo spotted the bell hiding in a sunflower! Ting-a-ling! Woolly jumped with delight.",
          textEs: "¡Leo vio la campana escondida en un girasol! ¡Ring-ring! Lanitas saltó de felicidad.",
          words: [{ en: 'Sunflower', es: 'Girasol' }, { en: 'Jump', es: 'Saltar' }, { en: 'Happy', es: 'Feliz' }]
        },
        {
          num: 9,
          audioId: 'leo_p9',
          image: 'assets/stories/images/leo_p9.jpg',
          textEn: "The evening farm bell chimed. All the farm animals thanked kind Little Leo.",
          textEs: "La campana de la tarde sonó. Todos los animales agradecieron al bondadoso pequeño Leo.",
          words: [{ en: 'Evening', es: 'Tarde' }, { en: 'Kind', es: 'Bondadoso' }, { en: 'Thank you', es: 'Gracias' }]
        },
        {
          num: 10,
          audioId: 'leo_p10',
          image: 'assets/stories/images/leo_p10.jpg',
          textEn: "Leo rested on soft golden hay under the stars. Being kind is the best adventure of all.",
          textEs: "Leo descansó sobre el heno suave bajo las estrellas. Ser bondadoso es la mejor aventura.",
          words: [{ en: 'Hay', es: 'Heno' }, { en: 'Stars', es: 'Estrellas' }, { en: 'Adventure', es: 'Aventura' }]
        }
      ]
    },

    luna: {
      id: 'luna',
      title: "Luna's Cozy House Quest",
      subtitle: 'La Aventura Casera de Luna',
      mascot: 'assets/luna/luna_transparent.png',
      badge: 'Libro 3',
      pages: [
        {
          num: 1,
          audioId: 'luna_p1',
          image: 'assets/stories/images/luna_p1.jpg',
          textEn: "Hop, hop, hop! Luna the bunny explorer packed her little backpack for a secret quest.",
          textEs: "¡Salto, salto! Luna la conejita exploradora preparó su mochila para una misión secreta.",
          words: [{ en: 'Bunny', es: 'Conejita' }, { en: 'Backpack', es: 'Mochila' }, { en: 'Quest', es: 'Misión' }]
        },
        {
          num: 2,
          audioId: 'luna_p2',
          image: 'assets/stories/images/luna_p2.jpg',
          textEn: "Luna unfolded her map. Clue number one was hidden in the cozy living room!",
          textEs: "Luna abrió su mapa. ¡La pista número uno estaba escondida en la sala acogedora!",
          words: [{ en: 'Map', es: 'Mapa' }, { en: 'Living Room', es: 'Sala' }, { en: 'Clue', es: 'Pista' }]
        },
        {
          num: 3,
          audioId: 'luna_p3',
          image: 'assets/stories/images/luna_p3.jpg',
          textEn: "Cuckoo! The smiling wall clock popped out with a shiny silver key in its beak.",
          textEs: "¡Cucú! El reloj sonriente de la pared salió con una brillante llave plateada en el pico.",
          words: [{ en: 'Clock', es: 'Reloj' }, { en: 'Key', es: 'Llave' }, { en: 'Silver', es: 'Plateada' }]
        },
        {
          num: 4,
          audioId: 'luna_p4',
          image: 'assets/stories/images/luna_p4.jpg',
          textEn: "Next stop, the kitchen! It smelled of sweet warm cookies and fresh milk.",
          textEs: "¡Siguiente parada, la cocina! Olía a deliciosas galletitas tibias y leche fresca.",
          words: [{ en: 'Kitchen', es: 'Cocina' }, { en: 'Cookies', es: 'Galletas' }, { en: 'Milk', es: 'Leche' }]
        },
        {
          num: 5,
          audioId: 'luna_p5',
          image: 'assets/stories/images/luna_p5.jpg',
          textEn: "Behind the fruit bowl, Luna found a message: Follow the bubbly trail to the bathroom!",
          textEs: "Detrás del frutero, Luna halló un mensaje: ¡Sigue las burbujas hacia el baño!",
          words: [{ en: 'Fruit', es: 'Fruta' }, { en: 'Bubbles', es: 'Burbujas' }, { en: 'Bathroom', es: 'Baño' }]
        },
        {
          num: 6,
          audioId: 'luna_p6',
          image: 'assets/stories/images/luna_p6.jpg',
          textEn: "In the warm bath, a rubber duck floated happily and pointed up toward the stairs.",
          textEs: "En la tina tibia, un patito de goma flotaba feliz y señaló hacia la escalera.",
          words: [{ en: 'Bathtub', es: 'Bañera' }, { en: 'Duck', es: 'Patito' }, { en: 'Stairs', es: 'Escaleras' }]
        },
        {
          num: 7,
          audioId: 'luna_p7',
          image: 'assets/stories/images/luna_p7.jpg',
          textEn: "Creak, creak! Luna climbed all the way up to the quiet, mysterious attic.",
          textEs: "¡Cri, crac! Luna subió todos los escalones hasta el silencioso y misterioso ático.",
          words: [{ en: 'Attic', es: 'Ático' }, { en: 'Quiet', es: 'Silencioso' }, { en: 'Climb', es: 'Subir' }]
        },
        {
          num: 8,
          audioId: 'luna_p8',
          image: 'assets/stories/images/luna_p8.jpg',
          textEn: "An antique wooden chest waited in the center. Luna used her silver key. Click!",
          textEs: "Un antiguo cofre de madera esperaba en el centro. Luna usó su llave plateada. ¡Clic!",
          words: [{ en: 'Chest', es: 'Cofre' }, { en: 'Wood', es: 'Madera' }, { en: 'Open', es: 'Abrir' }]
        },
        {
          num: 9,
          audioId: 'luna_p9',
          image: 'assets/stories/images/luna_p9.jpg',
          textEn: "Inside was a glowing star lantern and a magical book of bedtime stories!",
          textEs: "¡Adentro había una linterna de estrellas brillante y un libro mágico de cuentos!",
          words: [{ en: 'Star', es: 'Estrella' }, { en: 'Lantern', es: 'Linterna' }, { en: 'Book', es: 'Libro' }]
        },
        {
          num: 10,
          audioId: 'luna_p10',
          image: 'assets/stories/images/luna_p10.jpg',
          textEn: "Luna hugged her teddy bear. Every home is magical with the ones you love. Good night!",
          textEs: "Luna abrazó a su osito. Cada hogar es mágico junto a quienes amas. ¡Buenas noches!",
          words: [{ en: 'Home', es: 'Hogar' }, { en: 'Teddy', es: 'Osito' }, { en: 'Love', es: 'Amor' }]
        }
      ]
    },

    friends: {
      id: 'friends',
      title: 'The Three Best Friends',
      subtitle: 'El Árbol de las Estrellas',
      mascot: 'assets/bilikids_logo.png',
      badge: 'Gran Final',
      pages: [
        {
          num: 1,
          audioId: 'friends_p1',
          image: 'assets/stories/images/friends_p1.jpg',
          textEn: "At the edge of the valley, the magical trails of the forest, farm, and house met.",
          textEs: "En el borde del valle, los senderos mágicos del bosque, la granja y la casa se unieron.",
          words: [{ en: 'Valley', es: 'Valle' }, { en: 'Trails', es: 'Senderos' }, { en: 'Magic', es: 'Magia' }]
        },
        {
          num: 2,
          audioId: 'friends_p2',
          image: 'assets/stories/images/friends_p2.jpg',
          textEn: "Here came Bili, Little Leo, and Luna! They cheered and hugged with huge smiles.",
          textEs: "¡Aquí llegaron Bili, el pequeño Leo y Luna! Se abrazaron con enormes sonrisas.",
          words: [{ en: 'Hug', es: 'Abrazo' }, { en: 'Smiles', es: 'Sonrisas' }, { en: 'Together', es: 'Juntos' }]
        },
        {
          num: 3,
          audioId: 'friends_p3',
          image: 'assets/stories/images/friends_p3.jpg',
          textEn: "Tonight was the Starlight Festival, but the great crystal tree was dark and silent.",
          textEs: "Esta noche era el Festival de las Estrellas, pero el gran árbol de cristal estaba apagado.",
          words: [{ en: 'Festival', es: 'Festival' }, { en: 'Tree', es: 'Árbol' }, { en: 'Dark', es: 'Oscuro' }]
        },
        {
          num: 4,
          audioId: 'friends_p4',
          image: 'assets/stories/images/friends_p4.jpg',
          textEn: "Luna checked her map. The tree needs three gifts: Color, Kindness, and Curiosity!",
          textEs: "Luna revisó su mapa. ¡El árbol necesita tres regalos: Color, Bondad y Curiosidad!",
          words: [{ en: 'Gifts', es: 'Regalos' }, { en: 'Kindness', es: 'Bondad' }, { en: 'Curiosity', es: 'Curiosidad' }]
        },
        {
          num: 5,
          audioId: 'friends_p5',
          image: 'assets/stories/images/friends_p5.jpg',
          textEn: "Bili touched the roots with his brush. Shimmering rainbow lights began to glow!",
          textEs: "Bili tocó las raíces con su pincel. ¡Luces brillantes de arcoíris comenzaron a brillar!",
          words: [{ en: 'Roots', es: 'Raíces' }, { en: 'Rainbow', es: 'Arcoíris' }, { en: 'Glow', es: 'Brillar' }]
        },
        {
          num: 6,
          audioId: 'friends_p6',
          image: 'assets/stories/images/friends_p6.jpg',
          textEn: "Leo shared his sweet harvest apples and sang a warm song of pure kindness.",
          textEs: "Leo compartió sus dulces manzanas y cantó una alegre melodía de pura bondad.",
          words: [{ en: 'Apples', es: 'Manzanas' }, { en: 'Song', es: 'Canción' }, { en: 'Warm', es: 'Cálido' }]
        },
        {
          num: 7,
          audioId: 'friends_p7',
          image: 'assets/stories/images/friends_p7.jpg',
          textEn: "Luna climbed high and placed her glowing star lantern right on the top branch!",
          textEs: "¡Luna subió alto y colocó su linterna de estrella en la rama más alta!",
          words: [{ en: 'Climb', es: 'Subir' }, { en: 'Branch', es: 'Rama' }, { en: 'Top', es: 'Cima' }]
        },
        {
          num: 8,
          audioId: 'friends_p8',
          image: 'assets/stories/images/friends_p8.jpg',
          textEn: "Whoosh! A wave of dazzling starlight burst across the entire enchanted night sky!",
          textEs: "¡Fsssh! ¡Una ola de luz estelar deslumbrante brilló por todo el cielo nocturno!",
          words: [{ en: 'Starlight', es: 'Luz estelar' }, { en: 'Night', es: 'Noche' }, { en: 'Burst', es: 'Destello' }]
        },
        {
          num: 9,
          audioId: 'friends_p9',
          image: 'assets/stories/images/friends_p9.jpg',
          textEn: "Bili, Leo, and Luna danced hand in paw. All their animal friends joined the celebration.",
          textEs: "Bili, Leo y Luna bailaron de la mano. Todos sus amigos animales se unieron a la fiesta.",
          words: [{ en: 'Dance', es: 'Bailar' }, { en: 'Celebrate', es: 'Festejar' }, { en: 'Party', es: 'Fiesta' }]
        },
        {
          num: 10,
          audioId: 'friends_p10',
          image: 'assets/stories/images/friends_p10.jpg',
          textEn: "Together, we can light up the whole world, they cheered. Friendship is the greatest magic!",
          textEs: "¡Juntos podemos iluminar el mundo entero!, celebraron. ¡La amistad es la mayor magia!",
          words: [{ en: 'World', es: 'Mundo' }, { en: 'Friendship', es: 'Amistad' }, { en: 'Magic', es: 'Magia' }]
        }
      ]
    },

    tito: {
      "id": "tito",
      "is2dBook": true,
      "title": "Tito the Fox",
      "subtitle": "The Little Fox Who Explored the Forest",
      "mascot": "assets/stories/books2d/tito/cover.jpg",
      "badge": "2D Book • 8 Pág",
      "pages": [
        {
          "num": 1,
          "image": "assets/stories/books2d/tito/p1.jpg",
          "textEn": "Deep in a beautiful forest, there lived a little fox named Tito. He had a cozy home with his mommy and daddy.\n\nTito loved playing outside, exploring the forest, and discovering new things every day.",
          "textEs": "En lo profundo de un hermoso bosque, vivía un pequeño zorro llamado Tito. Tenía un hogar acogedor con su mamá y su papá.\n\nA Tito le encantaba jugar afuera, explorar el bosque y descubrir cosas nuevas cada día.",
          "words": [
            { "en": "Forest", "es": "Bosque" },
            { "en": "Fox", "es": "Zorro" },
            { "en": "Cozy", "es": "Acogedor" }
          ]
        },
        {
          "num": 2,
          "image": "assets/stories/books2d/tito/p2.jpg",
          "textEn": "One sunny morning, Tito saw a beautiful blue butterfly.\n\n\"Oh, how pretty!\" he said.\n\nHe began chasing it, jumping over flowers and following its colorful wings. He was having so much fun that he didn't notice how far he had gone.",
          "textEs": "Una mañana soleada, Tito vio una hermosa mariposa azul.\n\n\"¡Oh, qué linda!\", dijo.\n\nComenzó a perseguirla, saltando sobre las flores y siguiendo sus alas coloridas. Se estaba divirtiendo tanto que no se dio cuenta de lo lejos que había ido.",
          "words": [
            { "en": "Butterfly", "es": "Mariposa" },
            { "en": "Flowers", "es": "Flores" },
            { "en": "Far", "es": "Lejos" }
          ]
        },
        {
          "num": 3,
          "image": "assets/stories/books2d/tito/p3.jpg",
          "textEn": "Suddenly, the butterfly disappeared.\n\nTito looked around, but everything seemed different. The trees were taller, the forest was darker, and he couldn't find the way back home.\n\n\"Oh, no! Where am I?\" whispered Tito.\n\nHe was lost!",
          "textEs": "De repente, la mariposa desapareció.\n\nTito miró a su alrededor, pero todo parecía diferente. Los árboles eran más altos, el bosque era más oscuro y no podía encontrar el camino de regreso a casa.\n\n\"¡Oh, no! ¿Dónde estoy?\", susurró Tito.\n\n¡Estaba perdido!",
          "words": [
            { "en": "Lost", "es": "Perdido" },
            { "en": "Darker", "es": "Más oscuro" },
            { "en": "Trees", "es": "Árboles" }
          ]
        },
        {
          "num": 4,
          "image": "assets/stories/books2d/tito/p4.jpg",
          "textEn": "Tito felt scared and lonely. He missed his mommy and daddy. He wanted to be safe in his little home.\n\nA tear rolled down his furry cheek.\n\n\"Mommy! Daddy! I want to go home!\" he cried.",
          "textEs": "Tito se sintió asustado y solito. Extrañaba a su mamá y a su papá. Quería estar a salvo en su pequeña casita.\n\nUna lágrima rodó por su mejilla peluda.\n\n\"¡Mami! ¡Papi! ¡Quiero ir a casa!\", lloró.",
          "words": [
            { "en": "Scared", "es": "Asustado" },
            { "en": "Lonely", "es": "Solitario" },
            { "en": "Safe", "es": "A salvo" }
          ]
        },
        {
          "num": 5,
          "image": "assets/stories/books2d/tito/p5.jpg",
          "textEn": "Two little birds heard Tito crying. They flew down and sat on a branch near him.\n\n\"Why are you crying, little fox?\" they asked kindly.\n\n\"I'm lost. I can't find my way home,\" Tito answered.\n\n\"Don't worry, Tito. You are not alone. We will help you!\" said the little birds.",
          "textEs": "Dos pajaritos escucharon a Tito llorar. Volaron hacia abajo y se posaron en una rama cerca de él.\n\n\"¿Por qué lloras, pequeño zorro?\", preguntaron amablemente.\n\n\"Estoy perdido. No puedo encontrar el camino a casa\", respondió Tito.\n\n\"No te preocupes, Tito. No estás solo. ¡Te ayudaremos!\", dijeron los pajaritos.",
          "words": [
            { "en": "Birds", "es": "Pájaros" },
            { "en": "Branch", "es": "Rama" },
            { "en": "Help", "es": "Ayudar" }
          ]
        },
        {
          "num": 6,
          "image": "assets/stories/books2d/tito/p6.jpg",
          "textEn": "The little birds knew the forest very well.\n\n\"Follow us, Tito! We know the way,\" they chirped.\n\nTito stood up and followed his new friends. They flew from tree to tree, guiding him along the forest path.\n\nLittle by little, the sunlight became brighter.",
          "textEs": "Los pajaritos conocían el bosque muy bien.\n\n\"¡Síguenos, Tito! Conocemos el camino\", trinaron.\n\nTito se puso de pie y siguió a sus nuevos amigos. Volaron de árbol en árbol, guiándolo por el sendero del bosque.\n\nPoco a poco, la luz del sol se volvió más brillante.",
          "words": [
            { "en": "Follow", "es": "Seguir" },
            { "en": "Path", "es": "Sendero" },
            { "en": "Sunlight", "es": "Luz solar" }
          ]
        },
        {
          "num": 7,
          "image": "assets/stories/books2d/tito/p7.jpg",
          "textEn": "At last, Tito saw his little home!\n\n\"Mommy! Daddy!\" he shouted happily.\n\nHis parents ran to hug him tightly.\n\n\"Oh, Tito! We were so worried about you!\" said his mommy.\n\n\"Thank you for coming home, little one,\" whispered his daddy.\n\nTito felt safe and loved again.",
          "textEs": "¡Por fin, Tito vio su pequeña casita!\n\n\"¡Mami! ¡Papi!\", gritó felizmente.\n\nSus padres corrieron a abrazarlo fuertemente.\n\n\"¡Oh, Tito! ¡Estábamos tan preocupados por ti!\", dijo su mamá.\n\n\"Gracias por volver a casa, pequeñito\", susurró su papá.\n\nTito se sintió seguro y amado otra vez.",
          "words": [
            { "en": "Home", "es": "Hogar" },
            { "en": "Hug", "es": "Abrazo" },
            { "en": "Loved", "es": "Amado" }
          ]
        },
        {
          "num": 8,
          "image": "assets/stories/books2d/tito/p8.jpg",
          "textEn": "Before saying goodbye, Tito thanked his little bird friends.\n\n\"Thank you for helping me! You are wonderful friends!\" he said.\n\nThen Tito made a promise to his mommy and daddy.\n\n\"I will never wander too far again. I will always stay close and listen to you.\"\n\nHis parents smiled, and Tito waved goodbye to his friends.\n\nFrom that day on, Tito remembered that being curious was wonderful, but staying safe was even more important.",
          "textEs": "Antes de despedirse, Tito agradeció a sus amigos los pajaritos.\n\n\"¡Gracias por ayudarme! ¡Son unos amigos maravillosos!\", dijo.\n\nLuego Tito les hizo una promesa a su mamá y a su papá.\n\n\"Nunca más me alejaré demasiado. Siempre estaré cerca y los escucharé\".\n\nSus padres sonrieron y Tito se despidió con la mano de sus amigos.\n\nA partir de ese día, Tito recordó que ser curioso era maravilloso, pero mantenerse a salvo era aún más importante.",
          "words": [
            { "en": "Promise", "es": "Promesa" },
            { "en": "Listen", "es": "Escuchar" },
            { "en": "Safe", "es": "Seguro" }
          ]
        }
      ]
    }
  };

  // Merge external 2D books if loaded
  if (typeof window !== 'undefined' && window.BOOKS_2D) {
    Object.assign(STORIES, window.BOOKS_2D);
  }

  // --- AMBIENT PARTICLES ENGINE FOR 3D PIXAR PAGES ---
  class AmbientParticles {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.animId = null;
      this.theme = 'forest';
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = this.canvas.offsetWidth || 450;
      this.canvas.height = this.canvas.offsetHeight || 550;
    }

    setTheme(theme) {
      this.theme = theme;
      this.particles = [];
      const count = 35;
      for (let i = 0; i < count; i++) {
        this.particles.push(this.createParticle());
      }
    }

    createParticle() {
      const w = this.canvas.width || 450;
      const h = this.canvas.height || 550;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 3 + 1.5,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -Math.random() * 0.9 - 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        hue: this.getHueForTheme(),
        pulse: Math.random() * Math.PI
      };
    }

    getHueForTheme() {
      if (this.theme === 'bili') return Math.random() * 60 + 190; // Sky blue to turquoise
      if (this.theme === 'leo') return Math.random() * 45 + 35;   // Golden sunshine
      if (this.theme === 'luna') return Math.random() * 50 + 260; // Violet to pink
      return Math.random() * 360;                                // Full rainbow starlight
    }

    start() {
      if (this.animId) cancelAnimationFrame(this.animId);
      const loop = () => {
        this.update();
        this.render();
        this.animId = requestAnimationFrame(loop);
      };
      this.animId = requestAnimationFrame(loop);
    }

    stop() {
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
    }

    update() {
      const w = this.canvas.width || 450;
      const h = this.canvas.height || 550;
      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.04;
        p.currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        if (p.y < -10) p.y = h + 10;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
      });
    }

    render() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach(p => {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.currentAlpha})`;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.8)`;
        this.ctx.fill();
        this.ctx.restore();
      });
    }
  }

  // --- CONFETTI ENGINE ---
  class ConfettiEngine {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.pieces = [];
      this.animId = null;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    burst(count = 90) {
      this.resize();
      const colors = ['#f1c40f', '#e67e22', '#2ecc71', '#3498db', '#9b59b6', '#e74c3c'];
      for (let i = 0; i < count; i++) {
        this.pieces.push({
          x: this.canvas.width / 2,
          y: this.canvas.height / 2,
          w: Math.random() * 12 + 6,
          h: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.7) * 22,
          rot: Math.random() * 360,
          vrot: (Math.random() - 0.5) * 12,
          alpha: 1
        });
      }
      if (!this.animId) this.animate();
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5; // gravity
        p.rot += p.vrot;
        p.alpha -= 0.008;

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rot * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0, p.alpha);
        this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        this.ctx.restore();
      });

      this.pieces = this.pieces.filter(p => p.alpha > 0);
      if (this.pieces.length > 0) {
        this.animId = requestAnimationFrame(() => this.animate());
      } else {
        this.animId = null;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  // --- MAIN STORYBOOK CONTROLLER ---
  class StorybookApp {
    constructor() {
      this.sound = new StorySoundEngine();
      this.confetti = new ConfettiEngine(document.getElementById('confettiCanvas'));
      this.particles = new AmbientParticles(document.getElementById('ambientCanvas'));

      this.currentStoryKey = 'bili';
      this.currentPageIndex = 0; // 0..9 (10 pages)
      this.currentAudio = null;
      this.isPlayingNarration = false;
      this.autoTurnEnabled = true;
      this.autoTurnTimer = null;
      this.currentLanguage = 'both'; // 'both', 'en', 'es'

      this.dom = {
        screenShelf: document.getElementById('screenShelf'),
        screenReader: document.getElementById('screenReader'),
        screenCelebration: document.getElementById('screenCelebration'),

        readerStoryBadge: document.getElementById('readerStoryBadge'),
        readerStoryTitle: document.getElementById('readerStoryTitle'),
        sceneBackdropBlur: document.getElementById('sceneBackdropBlur'),
        sceneImage: document.getElementById('sceneImage'),
        sceneActionLayer: document.getElementById('sceneActionLayer'),
        storyTextEn: document.getElementById('storyTextEn'),
        storyTextEs: document.getElementById('storyTextEs'),
        spanishCard: document.getElementById('spanishCard'),
        keyWordsArea: document.getElementById('keyWordsArea'),
        leftPageNum: document.getElementById('leftPageNum'),
        rightPageNum: document.getElementById('rightPageNum'),

        btnBackToShelf: document.getElementById('btnBackToShelf'),
        btnPlayNarration: document.getElementById('btnPlayNarration'),
        voicePlayIcon: document.getElementById('voicePlayIcon'),
        voicePlayText: document.getElementById('voicePlayText'),
        btnAutoTurn: document.getElementById('btnAutoTurn'),
        btnRepeatPageAudio: document.getElementById('btnRepeatPageAudio'),
        btnToggleSpanish2d: document.getElementById('btnToggleSpanish2d'),

        btnPrevPage: document.getElementById('btnPrevPage'),
        btnNextPage: document.getElementById('btnNextPage'),
        pageDotsContainer: document.getElementById('pageDotsContainer'),
        turningLeaf: document.getElementById('turningLeaf'),

        diplomaBookName: document.getElementById('diplomaBookName'),
        diplomaMascotImg: document.getElementById('diplomaMascotImg'),
        btnDiplomaReplay: document.getElementById('btnDiplomaReplay'),
        btnDiplomaShelf: document.getElementById('btnDiplomaShelf'),

        btnSoundToggle: document.getElementById('btnSoundToggle'),
        soundIcon: document.getElementById('soundIcon'),
        btnLangToggle: document.getElementById('btnLangToggle'),
        langFlag: document.getElementById('langFlag'),
        btnFullscreen: document.getElementById('btnFullscreen')
      };

      this.initEvents();
      this.buildDots();

      // Check URL parameters for direct story opening or shelf filtering
      const urlParams = new URLSearchParams(window.location.search);
      const filterParam = urlParams.get('filter');
      if (filterParam) {
        const targetTab = document.querySelector(`.filter-tab[data-filter="${filterParam}"]`);
        if (targetTab) targetTab.click();
      }

      const storyParam = urlParams.get('story') || window.location.hash.replace('#', '');
      if (storyParam && STORIES[storyParam]) {
        const pageParam = parseInt(urlParams.get('page') || '1', 10) - 1;
        this.openStory(storyParam);
        if (pageParam > 0 && pageParam < 10) {
          this.currentPageIndex = pageParam;
          this.renderCurrentPage();
        }
      }
    }

    initEvents() {
      // Audio unlock on first touch
      const unlockAudio = () => {
        this.sound.init();
      };
      window.addEventListener('pointerdown', unlockAudio, { once: true });
      window.addEventListener('keydown', unlockAudio, { once: true });

      // Category Filter Tabs
      const filterTabs = document.querySelectorAll('.filter-tab');
      const tierVideo = document.getElementById('tierVideoBooks');
      const tierClassic = document.getElementById('tierClassicBooks');
      const tier2d = document.getElementById('tier2dBooks');

      filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          this.sound.init();
          this.sound.playPageTurn();
          const filter = tab.dataset.filter;

          filterTabs.forEach(t => t.classList.toggle('active', t === tab));

          if (filter === 'all') {
            if (tierVideo) tierVideo.classList.remove('tier-hidden');
            if (tierClassic) tierClassic.classList.remove('tier-hidden');
            if (tier2d) tier2d.classList.remove('tier-hidden');
          } else if (filter === 'video') {
            if (tierVideo) tierVideo.classList.remove('tier-hidden');
            if (tierClassic) tierClassic.classList.add('tier-hidden');
            if (tier2d) tier2d.classList.add('tier-hidden');
          } else if (filter === 'classic') {
            if (tierVideo) tierVideo.classList.add('tier-hidden');
            if (tierClassic) tierClassic.classList.remove('tier-hidden');
            if (tier2d) tier2d.classList.add('tier-hidden');
          } else if (filter === '2d') {
            if (tierVideo) tierVideo.classList.add('tier-hidden');
            if (tierClassic) tierClassic.classList.add('tier-hidden');
            if (tier2d) tier2d.classList.remove('tier-hidden');
          }
        });
      });

      // Bookshelf Card Clicks
      document.querySelectorAll('.book-card-item').forEach(card => {
        const storyKey = card.dataset.story;
        card.addEventListener('click', () => {
          this.sound.init();
          this.sound.playPageTurn();
          this.openStory(storyKey);
        });
      });

      // Reader Controls
      this.dom.btnBackToShelf.addEventListener('click', () => {
        this.stopAudio();
        this.showScreen('shelf');
      });

      this.dom.btnPlayNarration.addEventListener('click', () => {
        this.toggleNarration();
      });

      this.dom.btnAutoTurn.addEventListener('click', () => {
        this.autoTurnEnabled = !this.autoTurnEnabled;
        this.dom.btnAutoTurn.classList.toggle('active', this.autoTurnEnabled);
      });

      this.dom.btnRepeatPageAudio.addEventListener('click', () => {
        this.playPageAudio();
      });

      if (this.dom.btnToggleSpanish2d) {
        this.dom.btnToggleSpanish2d.addEventListener('click', () => {
          const isCurrentlyHidden = this.dom.spanishCard.style.display === 'none';
          this.dom.spanishCard.style.display = isCurrentlyHidden ? 'block' : 'none';
          this.dom.btnToggleSpanish2d.classList.toggle('active', isCurrentlyHidden);
          this.dom.btnToggleSpanish2d.innerHTML = isCurrentlyHidden 
            ? '<span>✓ Ocultar Español</span>' 
            : '<span>🇪🇸 Ver en Español</span>';
        });
      }

      this.dom.btnPrevPage.addEventListener('click', () => {
        this.turnPage('prev');
      });

      this.dom.btnNextPage.addEventListener('click', () => {
        this.turnPage('next');
      });

      // Direct tactile page tapping (Right page = Next, Left page = Prev)
      if (this.dom.rightPage) {
        this.dom.rightPage.addEventListener('click', (e) => {
          if (e.target.closest('.interactive-word-badge') || e.target.closest('button') || e.target.closest('a')) return;
          this.turnPage('next');
        });
      }
      if (this.dom.leftPage) {
        this.dom.leftPage.addEventListener('click', (e) => {
          if (e.target.closest('button') || e.target.closest('a')) return;
          this.turnPage('prev');
        });
      }

      // Keyboard arrow navigation
      window.addEventListener('keydown', (e) => {
        if (this.dom.screenReader.classList.contains('active')) {
          if (e.key === 'ArrowRight' || e.key === 'PageDown') this.turnPage('next');
          if (e.key === 'ArrowLeft' || e.key === 'PageUp') this.turnPage('prev');
          if (e.key === ' ' || e.key === 'Enter') this.toggleNarration();
        }
      });

      // Celebration Buttons
      this.dom.btnDiplomaReplay.addEventListener('click', () => {
        this.openStory(this.currentStoryKey);
      });
      this.dom.btnDiplomaShelf.addEventListener('click', () => {
        this.showScreen('shelf');
      });

      // Utilities
      this.dom.btnSoundToggle.addEventListener('click', () => {
        const muted = this.sound.toggleMute();
        this.dom.soundIcon.textContent = muted ? '🔇' : '🔊';
        if (muted && this.currentAudio) this.currentAudio.pause();
      });

      this.dom.btnLangToggle.addEventListener('click', () => {
        if (this.currentLanguage === 'both') {
          this.currentLanguage = 'en';
          this.dom.langFlag.textContent = '🇺🇸';
          this.dom.spanishCard.style.display = 'none';
        } else if (this.currentLanguage === 'en') {
          this.currentLanguage = 'es';
          this.dom.langFlag.textContent = '🇪🇸';
          this.dom.spanishCard.style.display = 'block';
        } else {
          this.currentLanguage = 'both';
          this.dom.langFlag.textContent = '🌐';
          this.dom.spanishCard.style.display = 'block';
        }
      });

      this.dom.btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    showScreen(name) {
      this.dom.screenShelf.classList.toggle('active', name === 'shelf');
      this.dom.screenShelf.classList.toggle('hidden', name !== 'shelf');
      this.dom.screenReader.classList.toggle('active', name === 'reader');
      this.dom.screenReader.classList.toggle('hidden', name !== 'reader');
      this.dom.screenCelebration.classList.toggle('active', name === 'celebration');
      this.dom.screenCelebration.classList.toggle('hidden', name !== 'celebration');

      if (name === 'reader') {
        document.body.classList.add('reader-open');
        const siteNav = document.querySelector('.subpage-navbar');
        if (siteNav) siteNav.style.display = 'none';
        this.particles.start();
      } else {
        document.body.classList.remove('reader-open');
        const siteNav = document.querySelector('.subpage-navbar');
        if (siteNav) siteNav.style.display = '';
        this.particles.stop();
      }
    }

    openStory(storyKey) {
      this.currentStoryKey = storyKey;
      this.currentPageIndex = 0;
      const story = STORIES[storyKey];
      if (!story) return;

      this.dom.readerStoryBadge.textContent = story.badge;
      this.dom.readerStoryTitle.textContent = story.title;
      this.particles.setTheme(storyKey);

      const bookStage = document.querySelector('.book-stage');
      if (story.is2dBook) {
        if (bookStage) bookStage.classList.add('book-mode-2d');
        // 2D Books are silent picture read-along books: remove narration controls
        if (this.dom.btnPlayNarration) this.dom.btnPlayNarration.style.display = 'none';
        if (this.dom.btnAutoTurn) this.dom.btnAutoTurn.style.display = 'none';
        if (this.dom.btnRepeatPageAudio) this.dom.btnRepeatPageAudio.style.display = 'none';
        if (this.dom.btnToggleSpanish2d) {
          this.dom.btnToggleSpanish2d.style.display = 'inline-flex';
          this.dom.btnToggleSpanish2d.classList.remove('active');
          this.dom.btnToggleSpanish2d.innerHTML = '<span>🇪🇸 Ver en Español</span>';
        }
        if (this.dom.spanishCard) this.dom.spanishCard.style.display = 'none';
      } else {
        if (bookStage) bookStage.classList.remove('book-mode-2d');
        if (this.dom.btnPlayNarration) this.dom.btnPlayNarration.style.display = '';
        if (this.dom.btnAutoTurn) this.dom.btnAutoTurn.style.display = '';
        if (this.dom.btnRepeatPageAudio) this.dom.btnRepeatPageAudio.style.display = '';
        if (this.dom.btnToggleSpanish2d) this.dom.btnToggleSpanish2d.style.display = 'none';
        if (this.dom.spanishCard) this.dom.spanishCard.style.display = '';
      }

      this.buildDots();
      this.showScreen('reader');
      this.renderCurrentPage();

      // Automatically start narration on opening if auto-turn is on, or user requests it
      if (this.autoTurnEnabled) {
        setTimeout(() => {
          this.playPageAudio();
        }, 500);
      }
    }

    buildDots() {
      this.dom.pageDotsContainer.innerHTML = '';
      const story = STORIES[this.currentStoryKey];
      const pageCount = (story && story.pages) ? story.pages.length : 10;
      for (let i = 0; i < pageCount; i++) {
        const dot = document.createElement('div');
        dot.className = `dot-indicator ${i === this.currentPageIndex ? 'active' : ''}`;
        dot.title = `Ir a página ${i + 1}`;
        dot.addEventListener('click', () => {
          if (i !== this.currentPageIndex) {
            this.goToPage(i);
          }
        });
        this.dom.pageDotsContainer.appendChild(dot);
      }
    }

    updateDots() {
      const dots = this.dom.pageDotsContainer.querySelectorAll('.dot-indicator');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === this.currentPageIndex);
      });
    }

    renderCurrentPage() {
      const story = STORIES[this.currentStoryKey];
      const page = story.pages[this.currentPageIndex];
      if (!page) return;

      // Update Texts
      this.dom.storyTextEn.textContent = page.textEn;
      this.dom.storyTextEs.textContent = page.textEs;
      this.dom.leftPageNum.textContent = `Pág. ${page.num}`;
      this.dom.rightPageNum.textContent = `Pág. ${page.num} de ${story.pages.length}`;

      if (story.is2dBook && this.dom.spanishCard) {
        const isSpanishActive = this.dom.btnToggleSpanish2d && this.dom.btnToggleSpanish2d.classList.contains('active');
        this.dom.spanishCard.style.display = isSpanishActive ? 'block' : 'none';
      }

      // Phonetic Pronunciation Guide (for 2D Books)
      const phoneticCard = document.getElementById('phoneticCard');
      const textPhonetic = document.getElementById('storyTextPhonetic');
      if (page.phonetic) {
        if (textPhonetic) textPhonetic.textContent = page.phonetic;
        if (phoneticCard) phoneticCard.style.display = '';
      } else {
        if (phoneticCard) phoneticCard.style.display = 'none';
      }

      // Update Image with fallback to character avatar & atmospheric backdrop blur
      this.dom.sceneImage.src = page.image;
      if (this.dom.sceneBackdropBlur) {
        this.dom.sceneBackdropBlur.style.backgroundImage = `url("${page.image}")`;
      }
      this.dom.sceneImage.onerror = () => {
        this.dom.sceneImage.src = story.mascot;
        if (this.dom.sceneBackdropBlur) {
          this.dom.sceneBackdropBlur.style.backgroundImage = `url("${story.mascot}")`;
        }
      };

      // Key Words
      this.dom.keyWordsArea.innerHTML = '';
      if (page.words && page.words.length > 0) {
        page.words.forEach(w => {
          const pill = document.createElement('span');
          pill.className = 'vocab-pill';
          pill.innerHTML = `<strong>${w.en}</strong> <span class="trans">(${w.es})</span>`;
          pill.addEventListener('click', () => {
            this.sound.playChime();
          });
          this.dom.keyWordsArea.appendChild(pill);
        });
      }

      // Update Living Scene Action Layer (Pixar living animations)
      if (this.dom.sceneActionLayer) {
        const pageAnim = page.audioId ? PAGE_SCENE_ELEMENTS[page.audioId] : null;
        this.dom.sceneActionLayer.innerHTML = '';
        if (pageAnim) {
          const propEl = document.createElement('div');
          propEl.className = `diorama-prop ${pageAnim.class}`;
          propEl.textContent = pageAnim.prop;
          propEl.style.fontSize = '3.2rem';
          if (pageAnim.pos.top) propEl.style.top = pageAnim.pos.top;
          if (pageAnim.pos.bottom) propEl.style.bottom = pageAnim.pos.bottom;
          if (pageAnim.pos.right) propEl.style.right = pageAnim.pos.right;
          if (pageAnim.pos.left) propEl.style.left = pageAnim.pos.left;
          propEl.title = pageAnim.label;
          this.dom.sceneActionLayer.appendChild(propEl);

          // Subtle ambient glow element matching the scene
          const glowEl = document.createElement('div');
          glowEl.className = 'scene-dynamic-glow';
          glowEl.style.position = 'absolute';
          glowEl.style.inset = '0';
          glowEl.style.pointerEvents = 'none';
          glowEl.style.background = `radial-gradient(circle at 65% 35%, hsla(${pageAnim.hue}, 90%, 65%, 0.18), transparent 60%)`;
          this.dom.sceneActionLayer.appendChild(glowEl);
        }
      }

      // Navigation state
      const lastIndex = story.pages.length - 1;
      this.dom.btnPrevPage.disabled = this.currentPageIndex === 0;
      this.dom.btnNextPage.innerHTML = (this.currentPageIndex === lastIndex) 
        ? `<span class="turn-label">¡Finalizar!</span> <span class="arrow-icon">🌟</span>` 
        : `<span class="turn-label">Siguiente</span> <span class="arrow-icon">⮞</span>`;

      this.updateDots();
    }

    turnPage(direction) {
      if (this.autoTurnTimer) {
        clearTimeout(this.autoTurnTimer);
        this.autoTurnTimer = null;
      }
      this.stopAudio();
      const story = STORIES[this.currentStoryKey];
      const lastIndex = story.pages.length - 1;

      if (direction === 'next') {
        if (this.currentPageIndex >= lastIndex) {
          this.finishStory();
          return;
        }
        this.sound.playPageTurn();
        this.animatePageFlip('forward', () => {
          this.currentPageIndex++;
          this.renderCurrentPage();
          if (this.autoTurnEnabled) {
            setTimeout(() => this.playPageAudio(), 300);
          }
        });
      } else if (direction === 'prev') {
        if (this.currentPageIndex <= 0) return;
        this.sound.playPageTurn();
        this.animatePageFlip('backward', () => {
          this.currentPageIndex--;
          this.renderCurrentPage();
          if (this.autoTurnEnabled) {
            setTimeout(() => this.playPageAudio(), 300);
          }
        });
      }
    }

    goToPage(index) {
      this.stopAudio();
      const story = STORIES[this.currentStoryKey];
      this.sound.playPageTurn();
      this.animatePageFlip(index > this.currentPageIndex ? 'forward' : 'backward', () => {
        this.currentPageIndex = index;
        this.renderCurrentPage();
        if (this.autoTurnEnabled) {
          setTimeout(() => this.playPageAudio(), 300);
        }
      });
    }

    animatePageFlip(dir, callback) {
      const leaf = this.dom.turningLeaf;
      const leafFront = document.getElementById('leafFront');
      const leafBack = document.getElementById('leafBack');
      const story = STORIES[this.currentStoryKey];
      if (!leaf || !story || !story.pages) {
        callback();
        return;
      }

      const currentIndex = this.currentPageIndex;
      const targetIndex = dir === 'forward' ? currentIndex + 1 : currentIndex - 1;

      // Populate leaf contents for a photorealistic 3D paper turnover
      if (dir === 'forward') {
        // Front of the leaf is the CURRENT right page (text) lifting up
        if (leafFront && this.dom.rightPage) {
          leafFront.innerHTML = this.dom.rightPage.innerHTML;
        }
        // Back of the leaf is the NEXT left page (illustration) landing down
        if (leafBack && story.pages[targetIndex]) {
          const nextPage = story.pages[targetIndex];
          leafBack.innerHTML = `
            <div class="page-inner page-art-layout">
              <div class="illustration-frame">
                <div class="scene-backdrop-blur" style="background-image: url('${nextPage.image}');"></div>
                <img class="scene-illustration pixar-scene-art" src="${nextPage.image}" alt="Page illustration" onerror="this.src='${story.mascot}'">
              </div>
              <span class="page-number page-left-num">Pág. ${nextPage.num}</span>
            </div>
            <div class="leaf-shadow-overlay"></div>
          `;
        }
      } else {
        // Backward flip:
        // Back of the leaf is the CURRENT left page (illustration) lifting up
        if (leafBack && this.dom.leftPage) {
          leafBack.innerHTML = this.dom.leftPage.innerHTML;
        }
        // Front of the leaf is the PREVIOUS right page (text) landing down
        if (leafFront && story.pages[targetIndex]) {
          const prevPage = story.pages[targetIndex];
          leafFront.innerHTML = `
            <div class="page-inner page-text-layout">
              <div class="story-header-ornament">
                <span class="ornament-leaf">🍃</span>
                <span class="ornament-divider">✦ ✦ ✦</span>
                <span class="ornament-leaf">🍃</span>
              </div>
              <div class="story-typography-content">
                <p class="story-text-primary en-text">${prevPage.textEn}</p>
                <p class="story-text-secondary es-text">${prevPage.textEs}</p>
              </div>
              <span class="page-number page-right-num">Pág. ${prevPage.num} de ${story.pages.length}</span>
            </div>
            <div class="leaf-shadow-overlay"></div>
          `;
        }
      }

      const animClass = dir === 'forward' ? 'flipping-forward' : 'flipping-backward';
      leaf.classList.remove('flipping-forward', 'flipping-backward');
      void leaf.offsetWidth; // trigger reflow
      leaf.classList.add(animClass);

      // Midway through flip (at 360ms, perpendicular 90deg), swap underlying pages seamlessly
      setTimeout(() => {
        callback();
      }, 360);

      // Animation complete (at 720ms)
      setTimeout(() => {
        leaf.classList.remove(animClass);
        if (leafFront) leafFront.innerHTML = '<div class="leaf-shadow-overlay"></div>';
        if (leafBack) leafBack.innerHTML = '<div class="leaf-shadow-overlay"></div>';
      }, 730);
    }

    playPageAudio() {
      this.stopAudio();
      const story = STORIES[this.currentStoryKey];
      if (!story) return;

      // 2D Books are silent picture books per user request (no audio)
      if (story.is2dBook) {
        return;
      }

      const page = story.pages[this.currentPageIndex];
      if (!page) return;

      const audioSrc = `assets/stories/audio/${page.audioId}.mp3`;
      const textToRead = page.textEn;

      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      const audio = new Audio(audioSrc);
      this.currentAudio = audio;
      audio.preservesPitch = true;
      audio.playbackRate = 1.0;

      this.isPlayingNarration = true;
      if (this.dom.btnPlayNarration) this.dom.btnPlayNarration.classList.add('speaking');
      if (this.dom.voicePlayIcon) this.dom.voicePlayIcon.textContent = '⏸️';
      if (this.dom.voicePlayText) this.dom.voicePlayText.textContent = 'Pausar';
      if (this.dom.storyTextEn) this.dom.storyTextEn.classList.add('reading-active');

      audio.onended = () => {
        this.isPlayingNarration = false;
        if (this.dom.btnPlayNarration) this.dom.btnPlayNarration.classList.remove('speaking');
        if (this.dom.voicePlayIcon) this.dom.voicePlayIcon.textContent = '▶️';
        if (this.dom.voicePlayText) this.dom.voicePlayText.textContent = 'Narrar';
        if (this.dom.storyTextEn) this.dom.storyTextEn.classList.remove('reading-active');

        // Auto-turn to next page if enabled
        if (this.autoTurnEnabled) {
          this.autoTurnTimer = setTimeout(() => {
            this.turnPage('next');
          }, 1400);
        }
      };

      audio.onerror = () => {
        console.warn('Audio file missing or failed to load:', audioSrc, 'using fallback');
        this.speakFallback(textToRead, () => {
          if (audio.onended) audio.onended();
        });
      };

      audio.play().catch(err => {
        // Do NOT trigger speakFallback here: transient browser promise rejections
        // cause the robotic voice to play simultaneously over the loading MP3!
        console.warn('Audio play request interrupted or queued:', err);
      });
    }

    speakFallback(text, onEnd) {
      if (!window.speechSynthesis) {
        if (onEnd) onEnd();
        return;
      }
      // Never speak robotic voice if an audio element is actively playing
      if (this.currentAudio && !this.currentAudio.paused && !this.currentAudio.ended) {
        if (onEnd) onEnd();
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.82; // Calm, paused storyteller rate
      utterance.pitch = 1.15;
      utterance.onend = () => {
        if (onEnd) onEnd();
      };
      window.speechSynthesis.speak(utterance);
    }

    stopAudio() {
      if (this.currentAudio) {
        try {
          this.currentAudio.pause();
          this.currentAudio.currentTime = 0;
        } catch (e) {}
        this.currentAudio = null;
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      this.isPlayingNarration = false;
      this.dom.btnPlayNarration.classList.remove('speaking');
      this.dom.voicePlayIcon.textContent = '▶️';
      this.dom.voicePlayText.textContent = 'Narrar';
      this.dom.storyTextEn.classList.remove('reading-active');
    }

    toggleNarration() {
      if (this.isPlayingNarration) {
        this.stopAudio();
      } else {
        this.playPageAudio();
      }
    }

    finishStory() {
      this.stopAudio();

      const story = STORIES[this.currentStoryKey];
      this.dom.diplomaBookName.textContent = story.title;
      this.dom.diplomaMascotImg.src = story.mascot;
      const diplomaMsg = document.querySelector('.diploma-msg');
      if (diplomaMsg) {
        diplomaMsg.innerHTML = story.is2dBook
          ? `¡Has leído todas las páginas de <strong>${story.title}</strong> con éxito! Excelente trabajo lector.`
          : `Has leído todas las páginas de <strong>${story.title}</strong> con la narración de ElevenLabs.`;
      }

      const check = document.getElementById('storyComprehensionCheck');
      const diploma = document.querySelector('.celebration-diploma-card');
      const wordPool = story.pages.flatMap(page => page.words || []).filter(word => word.en && word.es);
      const uniqueWords = [...new Map(wordPool.map(word => [word.en.toLowerCase(), word])).values()];
      if (check && uniqueWords.length >= 3) {
        diploma.style.display = 'none';
        check.style.display = 'block';
        check.innerHTML = `<h2 style="color:#5b21b6;">🧠 One last story question</h2><p style="color:#475569;">Choose the English word you remember from <strong>${story.title}</strong>.</p><div id="storyRecallPrompt"></div><p id="storyRecallFeedback" style="min-height:24px;color:#475569;" aria-live="polite"></p>`;
        const target = uniqueWords[Math.floor(Math.random() * uniqueWords.length)];
        const distractors = uniqueWords.filter(word => word.en !== target.en).sort(() => Math.random() - 0.5).slice(0, 2);
        const options = [target, ...distractors].sort(() => Math.random() - 0.5);
        const prompt = check.querySelector('#storyRecallPrompt');
        prompt.innerHTML = `<p>Which English word means <strong>“${target.es}”</strong>?</p><div class="story-recall-options" style="display:flex;justify-content:center;flex-wrap:wrap;gap:10px;"></div>`;
        const optionBox = prompt.querySelector('.story-recall-options');
        options.forEach(option => {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'btn-primary-fun';
          button.textContent = option.en;
          button.addEventListener('click', () => {
            const feedback = check.querySelector('#storyRecallFeedback');
            if (option === target) {
              feedback.textContent = `Correct! You remembered “${target.en}”.`;
              optionBox.querySelectorAll('button').forEach(choice => { choice.disabled = true; });
              const continueBtn = document.createElement('button');
              continueBtn.type = 'button';
              continueBtn.className = 'btn-secondary-fun';
              continueBtn.textContent = 'See my story award';
              continueBtn.addEventListener('click', () => {
                check.style.display = 'none';
                diploma.style.display = '';
                this.sound.playCelebrationFanfare();
                this.confetti.burst(150);
                this.saveStoryCompletion();
              });
              check.appendChild(continueBtn);
            } else {
              feedback.textContent = 'Not this word. Think of one you saw or heard in the story.';
            }
          });
          optionBox.appendChild(button);
        });
        this.showScreen('celebration');
        return;
      }

      this.sound.playCelebrationFanfare();
      this.confetti.burst(150);
      if (diploma) diploma.style.display = '';
      this.saveStoryCompletion();
      this.showScreen('celebration');
    }

    saveStoryCompletion() {
      try {
        const prog = JSON.parse(localStorage.getItem('bili_stories_progress') || '{}');
        prog[this.currentStoryKey] = true;
        localStorage.setItem('bili_stories_progress', JSON.stringify(prog));
      } catch (e) {}
    }
  }

  // --- INITIALIZE ON DOM READY ---
  window.addEventListener('DOMContentLoaded', () => {
    window.storybookAppInstance = new StorybookApp();
  });

})();
