/**
 * ===================================================================
 * LUNA'S HOUSE ADVENTURE - GAME ENGINE (VERSION 3.0 - DEDICATED AUDIO & SVG)
 * Places of the House in English for Children Ages 3 to 5
 * Bilikids Preschool Series | Character: Luna the Bunny Explorer
 * ===================================================================
 */

(function () {
  'use strict';

  // --- CLEAN STANDALONE SVG ICONS (NO MULTIPLE ELEMENTS, NO MISMATCHES) ---
  const SVG_ICONS = {
    // Pure standalone fork (NO knife, NO plate)
    FORK: `<svg viewBox="0 0 64 64" class="svg-item-icon" width="68" height="68" fill="none" stroke="#2c3e50" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 8 v14 c0 6.6 5.4 12 12 12 s12 -5.4 12 -12 V8" fill="#e8edf2" stroke="#34495e" stroke-width="3.5"/>
      <line x1="28" y1="8" x2="28" y2="24" stroke="#34495e" stroke-width="3"/>
      <line x1="36" y1="8" x2="36" y2="24" stroke="#34495e" stroke-width="3"/>
      <path d="M32 34 v24" stroke="#7f8c8d" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
    // Pure standalone table (Actual dining table, NOT a chair)
    TABLE: `<svg viewBox="0 0 64 64" class="svg-item-icon" width="74" height="74" fill="none">
      <rect x="4" y="22" width="56" height="10" rx="3" fill="#e67e22" stroke="#d35400" stroke-width="3"/>
      <rect x="10" y="32" width="44" height="4" fill="#d35400"/>
      <line x1="12" y1="36" x2="8" y2="58" stroke="#d35400" stroke-width="5" stroke-linecap="round"/>
      <line x1="52" y1="36" x2="56" y2="58" stroke="#d35400" stroke-width="5" stroke-linecap="round"/>
      <line x1="24" y1="36" x2="22" y2="54" stroke="#b95d00" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="36" x2="42" y2="54" stroke="#b95d00" stroke-width="4" stroke-linecap="round"/>
    </svg>`
  };

  function getItemVisualHtml(item) {
    if (!item) return '';
    if (item.name === 'FORK' || item.id === 'fork') return SVG_ICONS.FORK;
    if (item.name === 'TABLE' || item.id === 'table') return SVG_ICONS.TABLE;
    return item.icon || '';
  }

  // --- HOUSE VOCABULARY & ROOM DATA ---
  const HOUSE_ITEMS = {
    // Rooms
    LIVING_ROOM: { id: 'living_room', name: 'LIVING ROOM', icon: '🛋️', audioKey: 'living_room' },
    KITCHEN: { id: 'kitchen', name: 'KITCHEN', icon: '🍳', audioKey: 'kitchen' },
    BEDROOM: { id: 'bedroom', name: 'BEDROOM', icon: '🛏️', audioKey: 'bedroom' },
    BATHROOM: { id: 'bathroom', name: 'BATHROOM', icon: '🛁', audioKey: 'bathroom' },
    DINING_ROOM: { id: 'dining_room', name: 'DINING ROOM', icon: SVG_ICONS.TABLE, audioKey: 'dining_room' },
    GARDEN: { id: 'garden', name: 'GARDEN', icon: '🌸', audioKey: 'flower' },
    LAUNDRY: { id: 'laundry', name: 'LAUNDRY ROOM', icon: '🧺', audioKey: 'inst_laundry' },
    GARAGE: { id: 'garage', name: 'GARAGE', icon: '🚗', audioKey: 'garage' },
    ATTIC: { id: 'attic', name: 'ATTIC', icon: '📦', audioKey: 'teddy' },
    BALCONY: { id: 'balcony', name: 'BALCONY', icon: '🪴', audioKey: 'window' },

    // Furniture & Objects
    SOFA: { id: 'sofa', name: 'SOFA', icon: '🛋️', audioKey: 'sofa', actKey: 'act_sofa' },
    TV: { id: 'tv', name: 'TV', icon: '📺', audioKey: 'television', actKey: 'act_tv' },
    LAMP: { id: 'lamp', name: 'LAMP', icon: '💡', audioKey: 'lamp', actKey: 'act_lamp' },
    TABLE: { id: 'table', name: 'TABLE', icon: SVG_ICONS.TABLE, audioKey: 'table', actKey: 'act_table' },

    MILK: { id: 'milk', name: 'MILK', icon: '🥛', audioKey: 'milk', actKey: 'act_milk' },
    JUICE: { id: 'juice', name: 'JUICE', icon: '🧃', audioKey: 'juice', actKey: 'act_juice' },
    CHEESE: { id: 'cheese', name: 'CHEESE', icon: '🧀', audioKey: 'cheese', actKey: 'act_cheese' },
    APPLE: { id: 'apple', name: 'APPLE', icon: '🍎', audioKey: 'apple', actKey: 'act_apple' },

    BED: { id: 'bed', name: 'BED', icon: '🛏️', audioKey: 'bed', actKey: 'act_bed' },
    WINDOW: { id: 'window', name: 'WINDOW', icon: '🪟', audioKey: 'window', actKey: 'act_window' },
    CLOCK: { id: 'clock', name: 'CLOCK', icon: '⏰', audioKey: 'clock', actKey: 'act_clock' },
    DOOR: { id: 'door', name: 'DOOR', icon: '🚪', audioKey: 'door', actKey: 'act_blue_door' },

    SOAP: { id: 'soap', name: 'SOAP', icon: '🧼', audioKey: 'soap', actKey: 'act_soap' },
    BATHTUB: { id: 'bathtub', name: 'BATHTUB', icon: '🛁', audioKey: 'bathtub', actKey: 'act_bathtub' },
    TOOTHBRUSH: { id: 'toothbrush', name: 'TOOTHBRUSH', icon: '🪥', audioKey: 'toothbrush', actKey: 'act_toothbrush' },
    SHAMPOO: { id: 'shampoo', name: 'SHAMPOO', icon: '🧴', audioKey: 'shampoo', actKey: 'act_shampoo' },

    FORK: { id: 'fork', name: 'FORK', icon: SVG_ICONS.FORK, audioKey: 'fork', actKey: 'act_fork' },
    SPOON: { id: 'spoon', name: 'SPOON', icon: '🥄', audioKey: 'spoon', actKey: 'act_spoon' },
    CUP: { id: 'cup', name: 'CUP', icon: '🥤', audioKey: 'cup', actKey: 'act_cup' },
    PLATE: { id: 'plate', name: 'PLATE', icon: '🍽️', audioKey: 'plate', actKey: 'act_table' },

    FLOWER: { id: 'flower', name: 'FLOWER', icon: '🌸', audioKey: 'flower', actKey: 'act_flower' },
    TREE: { id: 'tree', name: 'TREE', icon: '🌳', audioKey: 'tree', actKey: 'act_tree' },
    BUTTERFLY: { id: 'butterfly', name: 'BUTTERFLY', icon: '🦋', audioKey: 'butterfly', actKey: 'act_butterfly' },
    SUN: { id: 'sun', name: 'SUN', icon: '☀️', audioKey: 'sun', actKey: 'act_tree' },

    SHIRT: { id: 'shirt', name: 'SHIRT', icon: '👕', audioKey: 'shirt', actKey: 'act_shirt' },
    SOCKS: { id: 'socks', name: 'SOCKS', icon: '🧦', audioKey: 'socks', actKey: 'act_socks' },
    PANTS: { id: 'pants', name: 'PANTS', icon: '👖', audioKey: 'pants', actKey: 'act_pants' },

    CAR: { id: 'car', name: 'CAR', icon: '🚗', audioKey: 'car', actKey: 'act_car' },
    BICYCLE: { id: 'bicycle', name: 'BICYCLE', icon: '🚲', audioKey: 'bicycle', actKey: 'act_bicycle' },
    HELMET: { id: 'helmet', name: 'HELMET', icon: '🪖', audioKey: 'helmet', actKey: 'act_helmet' },

    TEDDY_BEAR: { id: 'teddy', name: 'TEDDY BEAR', icon: '🧸', audioKey: 'teddy', actKey: 'act_teddy' },
    GUITAR: { id: 'guitar', name: 'GUITAR', icon: '🎸', audioKey: 'guitar', actKey: 'act_guitar' },
    BOOK: { id: 'book', name: 'BOOK', icon: '📖', audioKey: 'book', actKey: 'act_book' },

    PLANT: { id: 'plant', name: 'PLANT', icon: '🪴', audioKey: 'plant', actKey: 'act_plant' },
    BIRD: { id: 'bird', name: 'BIRD', icon: '🐦', audioKey: 'bird', actKey: 'act_bird' }
  };

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.muted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.muted = !this.muted;
      return this.muted;
    }

    playChime() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.2, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.35);
      });
    }

    playBoing() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.28);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    }

    playDoorOpen() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.linearRampToValueAtTime(160, now + 0.25);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    }

    playDoorbell() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(784, now);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.5);

      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(659.25, now + 0.25);
      gain2.gain.setValueAtTime(0.35, now + 0.25);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.25);
      osc2.stop(now + 0.85);
    }

    playKnock() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [0, 0.12].forEach(delay => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now + delay);
        gain.gain.setValueAtTime(0.3, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.08);
      });
    }

    playBubblePop() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    }

    playSwitchClick() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(250, now + 0.04);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    }

    playBlenderWhirl() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(450, now + 0.3);
      osc.frequency.linearRampToValueAtTime(200, now + 0.8);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.85);
    }

    playCarHonk() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [0, 0.14].forEach(delay => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(420, now + delay);
        gain.gain.setValueAtTime(0.3, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.1);
      });
    }

    playWaterTap() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.linearRampToValueAtTime(900, now + 0.4);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    }

    playVictory() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const fanfare = [
        { f: 523.25, d: 0.12 },
        { f: 659.25, d: 0.12 },
        { f: 783.99, d: 0.12 },
        { f: 1046.5, d: 0.35 }
      ];
      let offset = 0;
      fanfare.forEach(item => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.f, now + offset);
        gain.gain.setValueAtTime(0.3, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + item.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + offset);
        osc.stop(now + offset + item.d);
        offset += item.d + 0.04;
      });
    }
  }

  // --- LUNA VOICE MANAGER (DEDICATED ELEVENLABS AUDIO SUITE) ---
  class LunaVoiceManager {
    constructor() {
      this.currentAudio = null;
      const v = Date.now();

      this.clips = {
        // Greetings & Mascots
        luna_welcome: `assets/luna/audio/luna_welcome.mp3?v=${v}`,
        luna_hello: `assets/luna/audio/luna_hello.mp3?v=${v}`,

        // Cheers & Rewards
        cheer_great_job: `assets/luna/audio/cheer_great_job.mp3?v=${v}`,
        cheer_awesome: `assets/luna/audio/cheer_awesome.mp3?v=${v}`,
        cheer_super: `assets/luna/audio/cheer_super.mp3?v=${v}`,
        cheer_you_did_it: `assets/luna/audio/cheer_you_did_it.mp3?v=${v}`,
        oops_try_again: `assets/luna/audio/oops_try_again.mp3?v=${v}`,
        level_complete: `assets/luna/audio/level_complete.mp3?v=${v}`,
        diploma_congrats: `assets/luna/audio/diploma_congrats.mp3?v=${v}`,

        // Stage 1 Room Introductions
        inst_living_room: `assets/luna/audio/inst_living_room.mp3?v=${v}`,
        inst_fridge: `assets/luna/audio/inst_fridge.mp3?v=${v}`,
        inst_bedroom: `assets/luna/audio/inst_bedroom.mp3?v=${v}`,
        inst_bath_bubbles: `assets/luna/audio/inst_bath_bubbles.mp3?v=${v}`,
        inst_dining_table: `assets/luna/audio/inst_dining_table.mp3?v=${v}`,
        inst_garden: `assets/luna/audio/inst_garden.mp3?v=${v}`,
        inst_laundry: `assets/luna/audio/inst_laundry.mp3?v=${v}`,
        inst_garage: `assets/luna/audio/inst_garage.mp3?v=${v}`,
        inst_attic: `assets/luna/audio/inst_attic.mp3?v=${v}`,
        inst_balcony: `assets/luna/audio/inst_balcony.mp3?v=${v}`,

        // Vocabulary Items (Real audio clips)
        sofa: `assets/luna/audio/sofa.mp3?v=${v}`,
        lamp: `assets/luna/audio/lamp.mp3?v=${v}`,
        television: `assets/luna/audio/television.mp3?v=${v}`,
        tv: `assets/luna/audio/television.mp3?v=${v}`,
        table: `assets/luna/audio/table.mp3?v=${v}`,
        bed: `assets/luna/audio/bed.mp3?v=${v}`,
        window: `assets/luna/audio/window.mp3?v=${v}`,
        clock: `assets/luna/audio/clock.mp3?v=${v}`,
        soap: `assets/luna/audio/soap.mp3?v=${v}`,
        bathtub: `assets/luna/audio/bathtub.mp3?v=${v}`,
        toothbrush: `assets/luna/audio/toothbrush.mp3?v=${v}`,
        shampoo: `assets/luna/audio/shampoo.mp3?v=${v}`,
        toothpaste: `assets/luna/audio/toothpaste.mp3?v=${v}`,
        water_cup: `assets/luna/audio/water_cup.mp3?v=${v}`,
        fork: `assets/luna/audio/fork.mp3?v=${v}`,
        spoon: `assets/luna/audio/spoon.mp3?v=${v}`,
        cup: `assets/luna/audio/cup.mp3?v=${v}`,
        plate: `assets/luna/audio/plate.mp3?v=${v}`,
        milk: `assets/luna/audio/milk.mp3?v=${v}`,
        juice: `assets/luna/audio/juice.mp3?v=${v}`,
        cheese: `assets/luna/audio/cheese.mp3?v=${v}`,
        apple: `assets/luna/audio/apple.mp3?v=${v}`,
        flower: `assets/luna/audio/flower.mp3?v=${v}`,
        tree: `assets/luna/audio/tree.mp3?v=${v}`,
        butterfly: `assets/luna/audio/butterfly.mp3?v=${v}`,
        sun: null,
        shirt: `assets/luna/audio/shirt.mp3?v=${v}`,
        socks: `assets/luna/audio/socks.mp3?v=${v}`,
        pants: `assets/luna/audio/pants.mp3?v=${v}`,
        car: `assets/luna/audio/car.mp3?v=${v}`,
        bicycle: `assets/luna/audio/bicycle.mp3?v=${v}`,
        helmet: `assets/luna/audio/helmet.mp3?v=${v}`,
        teddy: `assets/luna/audio/teddy.mp3?v=${v}`,
        teddy_bear: `assets/luna/audio/teddy.mp3?v=${v}`,
        guitar: `assets/luna/audio/guitar.mp3?v=${v}`,
        book: `assets/luna/audio/book.mp3?v=${v}`,
        plant: `assets/luna/audio/plant.mp3?v=${v}`,
        bird: `assets/luna/audio/bird.mp3?v=${v}`,
        ball: `assets/luna/audio/ball.mp3?v=${v}`,
        robot: `assets/luna/audio/robot.mp3?v=${v}`,
        train: `assets/luna/audio/train.mp3?v=${v}`,
        strawberry: `assets/luna/audio/strawberry.mp3?v=${v}`,
        banana: `assets/luna/audio/banana.mp3?v=${v}`,
        orange: `assets/luna/audio/orange.mp3?v=${v}`,
        party_cake: `assets/luna/audio/party_cake.mp3?v=${v}`,
        balloons: `assets/luna/audio/balloons.mp3?v=${v}`,
        music_box: `assets/luna/audio/music_box.mp3?v=${v}`,
        blue_door: `assets/luna/audio/blue_door.mp3?v=${v}`,
        red_door: `assets/luna/audio/red_door.mp3?v=${v}`,
        yellow_door: `assets/luna/audio/yellow_door.mp3?v=${v}`,
        doorbell: `assets/luna/audio/doorbell.mp3?v=${v}`,
        water_tap: `assets/luna/audio/water_tap.mp3?v=${v}`,
        knocking: `assets/luna/audio/knocking.mp3?v=${v}`,
        red_flower: `assets/luna/audio/red_flower.mp3?v=${v}`,
        yellow_flower: `assets/luna/audio/yellow_flower.mp3?v=${v}`,
        purple_flower: `assets/luna/audio/purple_flower.mp3?v=${v}`,
        bedroom: `assets/luna/audio/bedroom.mp3?v=${v}`,
        living_room: `assets/luna/audio/living_room.mp3?v=${v}`,
        kitchen: `assets/luna/audio/kitchen.mp3?v=${v}`,
        bathroom: `assets/luna/audio/bathroom.mp3?v=${v}`,
        garage: `assets/luna/audio/garage.mp3?v=${v}`,
        dining_room: `assets/luna/audio/dining_room.mp3?v=${v}`,

        // Action Prompts (Explicit directions of what the child must do)
        act_sofa: `assets/luna/audio/act_sofa.mp3?v=${v}`,
        act_tv: `assets/luna/audio/act_tv.mp3?v=${v}`,
        act_lamp: `assets/luna/audio/act_lamp.mp3?v=${v}`,
        act_table: `assets/luna/audio/act_table.mp3?v=${v}`,
        act_milk: `assets/luna/audio/act_milk.mp3?v=${v}`,
        act_juice: `assets/luna/audio/act_juice.mp3?v=${v}`,
        act_cheese: `assets/luna/audio/act_cheese.mp3?v=${v}`,
        act_apple: `assets/luna/audio/act_apple.mp3?v=${v}`,
        act_bed: `assets/luna/audio/act_bed.mp3?v=${v}`,
        act_window: `assets/luna/audio/act_window.mp3?v=${v}`,
        act_clock: `assets/luna/audio/act_clock.mp3?v=${v}`,
        act_soap: `assets/luna/audio/act_soap.mp3?v=${v}`,
        act_bathtub: `assets/luna/audio/act_bathtub.mp3?v=${v}`,
        act_toothbrush: `assets/luna/audio/act_toothbrush.mp3?v=${v}`,
        act_shampoo: `assets/luna/audio/act_shampoo.mp3?v=${v}`,
        act_fork: `assets/luna/audio/act_fork.mp3?v=${v}`,
        act_spoon: `assets/luna/audio/act_spoon.mp3?v=${v}`,
        act_cup: `assets/luna/audio/act_cup.mp3?v=${v}`,
        act_flower: `assets/luna/audio/act_flower.mp3?v=${v}`,
        act_tree: `assets/luna/audio/act_tree.mp3?v=${v}`,
        act_butterfly: `assets/luna/audio/act_butterfly.mp3?v=${v}`,
        act_shirt: `assets/luna/audio/act_shirt.mp3?v=${v}`,
        act_socks: `assets/luna/audio/act_socks.mp3?v=${v}`,
        act_pants: `assets/luna/audio/act_pants.mp3?v=${v}`,
        act_car: `assets/luna/audio/act_car.mp3?v=${v}`,
        act_bicycle: `assets/luna/audio/act_bicycle.mp3?v=${v}`,
        act_helmet: `assets/luna/audio/act_helmet.mp3?v=${v}`,
        act_teddy: `assets/luna/audio/act_teddy.mp3?v=${v}`,
        act_guitar: `assets/luna/audio/act_guitar.mp3?v=${v}`,
        act_book: `assets/luna/audio/act_book.mp3?v=${v}`,
        act_plant: `assets/luna/audio/act_plant.mp3?v=${v}`,
        act_bird: `assets/luna/audio/act_bird.mp3?v=${v}`,
        act_belong_bed: `assets/luna/audio/act_belong_bed.mp3?v=${v}`,
        act_belong_sofa: `assets/luna/audio/act_belong_sofa.mp3?v=${v}`,
        act_belong_car: `assets/luna/audio/act_belong_car.mp3?v=${v}`,
        act_light_on: `assets/luna/audio/act_light_on.mp3?v=${v}`,
        act_light_off: `assets/luna/audio/act_light_off.mp3?v=${v}`,
        act_ball: `assets/luna/audio/act_ball.mp3?v=${v}`,
        act_robot: `assets/luna/audio/act_robot.m4a?v=${v}`,
        act_train: `assets/luna/audio/act_train.m4a?v=${v}`,
        act_blue_door: `assets/luna/audio/act_blue_door.m4a?v=${v}`,
        act_red_door: `assets/luna/audio/act_red_door.m4a?v=${v}`,
        act_yellow_door: `assets/luna/audio/act_yellow_door.m4a?v=${v}`,
        act_strawberry: `assets/luna/audio/act_strawberry.mp3?v=${v}`,
        act_banana: `assets/luna/audio/act_banana.mp3?v=${v}`,
        act_orange: `assets/luna/audio/act_orange.mp3?v=${v}`,
        act_sound_detective: `assets/luna/audio/act_sound_detective.mp3?v=${v}`,
        act_shadow_safari: `assets/luna/audio/act_shadow_safari.mp3?v=${v}`,
        act_brush_toothbrush: `assets/luna/audio/act_brush_toothbrush.mp3?v=${v}`,
        act_brush_toothpaste: `assets/luna/audio/act_brush_toothpaste.mp3?v=${v}`,
        act_brush_water_cup: `assets/luna/audio/act_brush_water_cup.mp3?v=${v}`,
        act_water_red_flower: `assets/luna/audio/act_water_red_flower.mp3?v=${v}`,
        act_water_yellow_flower: `assets/luna/audio/act_water_yellow_flower.mp3?v=${v}`,
        act_water_purple_flower: `assets/luna/audio/act_water_purple_flower.mp3?v=${v}`,
        act_party_cake: `assets/luna/audio/act_party_cake.mp3?v=${v}`,
        act_party_balloons: `assets/luna/audio/act_party_balloons.mp3?v=${v}`,
        act_party_music_box: `assets/luna/audio/act_party_music_box.mp3?v=${v}`
      };
    }

    playClip(clipKey, onEnd) {
      if (!clipKey) {
        if (onEnd) onEnd();
        return false;
      }

      if (this.currentAudio) {
        try {
          this.currentAudio.pause();
          this.currentAudio.currentTime = 0;
        } catch (e) {}
        this.currentAudio = null;
      }

      const key = String(clipKey).toLowerCase().replace(/[^a-z0-9_]/g, '');
      const src = this.clips[key] || `assets/luna/audio/${key}.mp3`;
      const audio = new Audio(src);
      this.currentAudio = audio;

      let finished = false;
      const done = () => {
        if (!finished) {
          finished = true;
          if (this.currentAudio === audio) this.currentAudio = null;
          if (onEnd) onEnd();
        }
      };

      audio.onended = done;
      audio.onerror = () => {
        done();
      };

      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch(err => {
          console.warn('Audio play notice:', err);
          done();
        });
      }
      return true;
    }

    playCheer(onEnd) {
      const cheers = ['cheer_great_job', 'cheer_awesome', 'cheer_super', 'cheer_you_did_it'];
      const chosen = cheers[Math.floor(Math.random() * cheers.length)];
      return this.playClip(chosen, onEnd);
    }

    speakLunaGreeting() {
      this.playClip('luna_welcome');
    }
  }

  // --- CONFETTI PARTICLE SYSTEM ---
  class ConfettiEngine {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.animationFrame = null;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    burst(count = 70) {
      const colors = ['#9b59b6', '#ff6b81', '#f1c40f', '#2ecc71', '#3498db', '#e67e22'];
      const cx = this.canvas.width / 2;
      const cy = this.canvas.height / 2;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 9 + 4;
        this.particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          size: Math.random() * 12 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 10,
          opacity: 1,
          gravity: 0.25
        });
      }

      if (!this.animationFrame) this.update();
    }

    update() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vRot;
        p.opacity -= 0.012;

        if (p.opacity <= 0 || p.y > this.canvas.height) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0, p.opacity);
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        this.animationFrame = requestAnimationFrame(() => this.update());
      } else {
        this.animationFrame = null;
      }
    }
  }

  // --- MAIN CONTROLLER: LUNA HOUSE GAME ---
  class LunaHouseGame {
    constructor() {
      this.sound = new SoundManager();
      this.voice = new LunaVoiceManager();
      this.confetti = new ConfettiEngine(document.getElementById('confettiCanvas'));

      this.currentLevel = 1;
      this.currentRound = 1;
      this.maxRounds = 3;
      this.targetItem = null;
      this.currentActionPromptKey = null;
      this.lightTurnedOn = false;
      this.currentSoundFunc = null;

      this.progress = this.loadProgress();

      this.dom = {
        screens: {
          home: document.getElementById('screenHome'),
          play: document.getElementById('screenLevelPlay'),
          celebration: document.getElementById('screenCelebration')
        },
        btnHome: document.getElementById('btnHome'),
        btnSoundToggle: document.getElementById('btnSoundToggle'),
        soundIcon: document.getElementById('soundIcon'),
        btnFullscreen: document.getElementById('btnFullscreen'),
        totalStarsCount: document.getElementById('totalStarsCount'),
        levelBadgeText: document.getElementById('levelBadgeText'),
        btnStartGame: document.getElementById('btnStartGame'),
        btnRepeatWelcome: document.getElementById('btnRepeatWelcome'),
        lunaHeroImg: document.getElementById('lunaHeroImg'),

        // Play Screen
        lunaPlayCompanion: document.getElementById('lunaPlayCompanion'),
        playIntroText: document.getElementById('playIntroText'),
        promptMainWord: document.getElementById('promptMainWord'),
        promptSpanishHint: document.getElementById('promptSpanishHint'),
        btnSpeakPrompt: document.getElementById('btnSpeakPrompt'),
        playProgressFill: document.getElementById('playProgressFill'),
        playRoundCounter: document.getElementById('playRoundCounter'),
        playArenaContent: document.getElementById('playArenaContent'),

        // Celebration
        successOverlay: document.getElementById('roundSuccessOverlay'),
        successTitle: document.getElementById('successTitle'),
        successMessage: document.getElementById('successMessage')
      };

      this.initEvents();
      this.updateStarUI();

      const urlParams = new URLSearchParams(window.location.search);
      const lvlParam = parseInt(urlParams.get('level'), 10);
      if (lvlParam >= 1 && lvlParam <= 20) {
        this.goToLevel(lvlParam);
      } else {
        this.showScreen('home');
      }
    }

    loadProgress() {
      try {
        const data = localStorage.getItem('luna_house_adventure_prog');
        if (data) return JSON.parse(data);
      } catch (e) {}
      return {
        unlockedLevels: [1],
        levelStars: {},
        totalStars: 0,
        stage2Unlocked: false
      };
    }

    saveProgress() {
      try {
        localStorage.setItem('luna_house_adventure_prog', JSON.stringify(this.progress));
      } catch (e) {}
    }

    initEvents() {
      const unlockAudio = () => {
        this.sound.init();
      };
      window.addEventListener('pointerdown', unlockAudio, { once: true });
      window.addEventListener('keydown', unlockAudio, { once: true });

      this.dom.btnStartGame?.addEventListener('click', () => {
        this.sound.init();
        this.goToLevel(this.getHighestUnlockedLevel());
      });

      const replayWelcome = () => {
        this.sound.init();
        this.sound.playChime();
        this.voice.speakLunaGreeting();
      };
      this.dom.btnRepeatWelcome?.addEventListener('click', replayWelcome);
      this.dom.lunaHeroImg?.addEventListener('click', replayWelcome);

      this.dom.lunaPlayCompanion?.addEventListener('click', () => {
        this.sound.playChime();
        this.speakCurrentPrompt();
      });

      this.dom.btnSpeakPrompt?.addEventListener('click', () => {
        this.speakCurrentPrompt();
      });

      this.dom.btnHome.addEventListener('click', () => {
        this.showScreen('home');
      });

      this.dom.btnSoundToggle.addEventListener('click', () => {
        const isMuted = this.sound.toggleMute();
        this.dom.soundIcon.textContent = isMuted ? '🔇' : '🔊';
      });

      this.dom.btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });

      // Stage Tabs Switching
      const btnStage1Tab = document.getElementById('btnStage1Tab');
      const btnStage2Tab = document.getElementById('btnStage2Tab');
      const stage1Grid = document.getElementById('stage1Grid');
      const stage2Grid = document.getElementById('stage2Grid');

      if (btnStage1Tab && btnStage2Tab && stage1Grid && stage2Grid) {
        btnStage1Tab.addEventListener('click', () => {
          btnStage1Tab.classList.add('active');
          btnStage2Tab.classList.remove('active');
          stage1Grid.style.display = 'block';
          stage2Grid.style.display = 'none';
        });

        btnStage2Tab.addEventListener('click', () => {
          const isUnlocked = this.progress.stage2Unlocked || this.progress.unlockedLevels.includes(11);
          if (isUnlocked) {
            btnStage2Tab.classList.add('active');
            btnStage1Tab.classList.remove('active');
            stage2Grid.style.display = 'block';
            stage1Grid.style.display = 'none';
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
            btnStage2Tab.style.transform = 'translateX(8px)';
            setTimeout(() => { btnStage2Tab.style.transform = ''; }, 200);
          }
        });
      }

      // Level Cards Click
      document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
          const lvl = parseInt(card.dataset.level, 10);
          if (this.progress.unlockedLevels.includes(lvl)) {
            this.sound.init();
            this.goToLevel(lvl);
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });
      });

      // Celebration Buttons
      document.getElementById('btnPrintDiploma')?.addEventListener('click', () => window.print());
      document.getElementById('btnPlayAgain')?.addEventListener('click', () => this.showScreen('home'));
      document.getElementById('btnContinueStage2')?.addEventListener('click', () => {
        document.getElementById('btnContinueStage2').style.display = 'none';
        this.goToLevel(11);
      });
    }

    getHighestUnlockedLevel() {
      return Math.max(...this.progress.unlockedLevels);
    }

    updateStarUI() {
      let sum = 0;
      for (let lvl = 1; lvl <= 20; lvl++) {
        const stars = this.progress.levelStars[lvl] || 0;
        sum += stars;
        const cardStarEl = document.getElementById(`cardStars${lvl}`);
        if (cardStarEl) {
          cardStarEl.textContent = '★'.repeat(stars) + '☆'.repeat(3 - stars);
        }
        const cardEl = document.querySelector(`.level-card[data-level="${lvl}"]`);
        if (cardEl) {
          if (this.progress.unlockedLevels.includes(lvl)) {
            cardEl.classList.add('unlocked');
            cardEl.classList.remove('locked');
          } else {
            cardEl.classList.add('locked');
            cardEl.classList.remove('unlocked');
          }
        }
      }

      // Stage 2 Lock Badge
      const btnStage2Tab = document.getElementById('btnStage2Tab');
      const stage2LockBadge = document.getElementById('stage2LockBadge');
      const isStage2Unlocked = this.progress.stage2Unlocked || this.progress.unlockedLevels.includes(11);

      if (btnStage2Tab && stage2LockBadge) {
        if (isStage2Unlocked) {
          btnStage2Tab.classList.remove('locked');
          stage2LockBadge.textContent = '⭐ Unlocked!';
          stage2LockBadge.className = 'tab-badge unlocked';
        } else {
          btnStage2Tab.classList.add('locked');
          stage2LockBadge.textContent = '🔒 Complete Stage 1';
          stage2LockBadge.className = 'tab-badge locked-badge';
        }
      }

      this.progress.totalStars = sum;
      this.dom.totalStarsCount.textContent = sum;
      this.saveProgress();
    }

    showScreen(screenName) {
      Object.values(this.dom.screens).forEach(scr => scr.classList.remove('active'));
      const activeScr = this.dom.screens[screenName];
      if (activeScr) activeScr.classList.add('active');

      if (screenName === 'home') {
        this.dom.levelBadgeText.textContent = 'House';
        this.updateStarUI();
      } else if (screenName === 'play') {
        this.dom.levelBadgeText.textContent = `Level ${this.currentLevel}`;
      } else if (screenName === 'celebration') {
        this.dom.levelBadgeText.textContent = 'Diploma!';
      }
    }

    goToLevel(levelNum) {
      this.currentLevel = levelNum;
      this.currentRound = 1;
      this.showScreen('play');
      this.loadLevel(levelNum);
    }

    speakCurrentPrompt() {
      if (this.currentLevel === 16) {
        this.voice.playClip('act_sound_detective', () => {
          setTimeout(() => {
            if (this.currentSoundFunc) this.currentSoundFunc();
          }, 300);
        });
        return;
      }

      if (this.currentActionPromptKey) {
        this.voice.playClip(this.currentActionPromptKey);
      } else if (this.targetItem && this.targetItem.audioKey) {
        this.voice.playClip(this.targetItem.audioKey);
      }
    }

    showRoundSuccess(item, callback) {
      const itemName = typeof item === 'string' ? item : (item.name || '');
      const audioKey = (typeof item === 'object' && item.audioKey) ? item.audioKey : itemName.toLowerCase().replace(/[^a-z0-9_]/g, '');

      this.sound.playChime();
      this.confetti.burst(55);

      const cheers = ['Great Job!', 'Awesome!', 'Super!', 'You Did It!'];
      const randomCheer = cheers[Math.floor(Math.random() * cheers.length)];

      this.dom.successTitle.textContent = randomCheer;
      this.dom.successMessage.innerHTML = `You found the <strong>${itemName}</strong>!`;
      this.dom.successOverlay.classList.remove('hidden');

      // Pronounce the item name, then play a cheerful high five!
      this.voice.playClip(audioKey, () => {
        this.voice.playCheer();
      });

      setTimeout(() => {
        this.dom.successOverlay.classList.add('hidden');
        if (callback) callback();
      }, 1800);
    }

    completeLevel(levelNum) {
      this.sound.playVictory();
      this.confetti.burst(120);

      this.progress.levelStars[levelNum] = 3;
      if (levelNum < 20 && !this.progress.unlockedLevels.includes(levelNum + 1)) {
        this.progress.unlockedLevels.push(levelNum + 1);
      }

      if (levelNum === 10) {
        this.progress.stage2Unlocked = true;
        this.updateStarUI();
        setTimeout(() => {
          this.showScreen('celebration');
          const btnCont = document.getElementById('btnContinueStage2');
          if (btnCont) btnCont.style.display = 'inline-flex';
          this.confetti.burst(160);
          this.voice.playClip('diploma_congrats');
        }, 1200);
      } else if (levelNum === 20) {
        this.updateStarUI();
        setTimeout(() => {
          this.showScreen('celebration');
          const btnCont = document.getElementById('btnContinueStage2');
          if (btnCont) btnCont.style.display = 'none';
          this.confetti.burst(200);
          this.voice.playClip('diploma_congrats');
        }, 1200);
      } else {
        this.voice.playClip('level_complete');
        this.updateStarUI();
        setTimeout(() => this.goToLevel(levelNum + 1), 2000);
      }
    }

    updateRoundProgress() {
      this.dom.playProgressFill.style.width = `${((this.currentRound - 1) / this.maxRounds) * 100}%`;
      this.dom.playRoundCounter.textContent = `Round ${this.currentRound} of ${this.maxRounds}`;
    }

    // ===================================================
    // DYNAMIC LEVEL LOADER ROUTER (20 UNIQUE MINI-GAMES)
    // ===================================================
    loadLevel(lvl) {
      this.sound.init();
      this.maxRounds = 3;
      this.updateRoundProgress();

      if (lvl === 1) this.playLevel1();
      else if (lvl === 2) this.playLevel2();
      else if (lvl === 3) this.playLevel3();
      else if (lvl === 4) this.playLevel4();
      else if (lvl === 5) this.playLevel5();
      else if (lvl === 6) this.playLevel6();
      else if (lvl === 7) this.playLevel7();
      else if (lvl === 8) this.playLevel8();
      else if (lvl === 9) this.playLevel9();
      else if (lvl === 10) this.playLevel10();
      else if (lvl === 11) this.playLevel11();
      else if (lvl === 12) this.playLevel12();
      else if (lvl === 13) this.playLevel13();
      else if (lvl === 14) this.playLevel14();
      else if (lvl === 15) this.playLevel15();
      else if (lvl === 16) this.playLevel16();
      else if (lvl === 17) this.playLevel17();
      else if (lvl === 18) this.playLevel18();
      else if (lvl === 19) this.playLevel19();
      else if (lvl === 20) this.playLevel20();
    }

    // ---------------------------------------------------
    // LEVEL 1: LIVING ROOM (Sofa, TV, Lamp, Table)
    // ---------------------------------------------------
    playLevel1() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.SOFA, HOUSE_ITEMS.TV, HOUSE_ITEMS.LAMP, HOUSE_ITEMS.TABLE];
      pool.sort(() => Math.random() - 0.5);
      const activeChoices = pool.slice(0, 3);
      this.targetItem = activeChoices[Math.floor(Math.random() * activeChoices.length)];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Find: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      activeChoices.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(item)}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item === this.targetItem) {
            btn.style.transform = 'scale(1.2) rotate(6deg)';
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel1();
              } else {
                this.completeLevel(1);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
            btn.style.transform = 'scale(0.9) rotate(-6deg)';
            setTimeout(() => btn.style.transform = '', 250);
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ---------------------------------------------------
    // LEVEL 2: KITCHEN (Interactive Refrigerator)
    // ---------------------------------------------------
    playLevel2() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.MILK, HOUSE_ITEMS.JUICE, HOUSE_ITEMS.CHEESE, HOUSE_ITEMS.APPLE];
      pool.sort(() => Math.random() - 0.5);
      this.targetItem = pool[0];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Find in Fridge: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const fridge = document.createElement('div');
      fridge.className = 'fridge-interactive-unit';

      const door = document.createElement('div');
      door.className = 'fridge-door';
      door.innerHTML = '<div class="fridge-handle"></div><span style="font-size:3rem; margin-right:15px;">🧊</span>';

      const interior = document.createElement('div');
      interior.className = 'fridge-interior';

      pool.forEach(food => {
        const itemEl = document.createElement('div');
        itemEl.className = 'fridge-food-item';
        itemEl.textContent = food.icon;
        itemEl.title = food.name;

        itemEl.addEventListener('click', () => {
          if (!door.classList.contains('open')) return;
          if (food === this.targetItem) {
            itemEl.style.transform = 'scale(1.6)';
            this.showRoundSuccess(food, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel2();
              } else {
                this.completeLevel(2);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        interior.appendChild(itemEl);
      });

      door.addEventListener('click', () => {
        if (!door.classList.contains('open')) {
          door.classList.add('open');
          this.sound.playDoorOpen();
        }
      });

      fridge.appendChild(interior);
      fridge.appendChild(door);
      arena.appendChild(fridge);
    }

    // ---------------------------------------------------
    // LEVEL 3: BEDROOM (Bed, Lamp, Window, Clock)
    // ---------------------------------------------------
    playLevel3() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.BED, HOUSE_ITEMS.LAMP, HOUSE_ITEMS.WINDOW, HOUSE_ITEMS.CLOCK];
      pool.sort(() => Math.random() - 0.5);
      const activeChoices = pool.slice(0, 3);
      this.targetItem = activeChoices[Math.floor(Math.random() * activeChoices.length)];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Bedtime: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      activeChoices.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(item)}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item === this.targetItem) {
            btn.style.transform = 'scale(1.18)';
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel3();
              } else {
                this.completeLevel(3);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ---------------------------------------------------
    // LEVEL 4: BATHROOM (Pop Bubbles: Soap, Bathtub, Toothbrush, Shampoo)
    // ---------------------------------------------------
    playLevel4() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.SOAP, HOUSE_ITEMS.BATHTUB, HOUSE_ITEMS.TOOTHBRUSH, HOUSE_ITEMS.SHAMPOO];
      pool.sort(() => Math.random() - 0.5);
      this.targetItem = pool[0];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Pop Bubble: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const bath = document.createElement('div');
      bath.className = 'bath-bubbles-arena';

      const positions = [
        { l: 15, t: 25 },
        { l: 65, t: 20 },
        { l: 25, t: 60 },
        { l: 70, t: 58 }
      ];

      pool.forEach((item, idx) => {
        const bubble = document.createElement('div');
        bubble.className = 'bath-bubble-item';
        bubble.style.left = `${positions[idx].l}%`;
        bubble.style.top = `${positions[idx].t}%`;
        bubble.style.animationDelay = `${idx * 0.4}s`;
        bubble.innerHTML = `
          <span style="font-size:2.8rem;">${getItemVisualHtml(item)}</span>
          <span style="font-size:0.75rem; font-weight:800; color:#2c3e50;">${item.name}</span>
        `;

        bubble.addEventListener('click', () => {
          if (item === this.targetItem) {
            this.sound.playBubblePop();
            bubble.classList.add('popping');
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel4();
              } else {
                this.completeLevel(4);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        bath.appendChild(bubble);
      });

      arena.appendChild(bath);
    }

    // ---------------------------------------------------
    // LEVEL 5: DINING ROOM (Set the Table: Fork, Spoon, Cup, Table)
    // ---------------------------------------------------
    playLevel5() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const sequence = [HOUSE_ITEMS.FORK, HOUSE_ITEMS.SPOON, HOUSE_ITEMS.TABLE];
      this.targetItem = sequence[(this.currentRound - 1) % sequence.length];
      const otherItems = [HOUSE_ITEMS.FORK, HOUSE_ITEMS.TABLE, HOUSE_ITEMS.CUP, HOUSE_ITEMS.SPOON].filter(i => i.id !== this.targetItem.id);
      otherItems.sort(() => Math.random() - 0.5);
      const active = [this.targetItem, otherItems[0], otherItems[1]];
      active.sort(() => Math.random() - 0.5);
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Set Table: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      active.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(item)}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item === this.targetItem) {
            btn.style.transform = 'scale(1.2)';
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel5();
              } else {
                this.completeLevel(5);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ---------------------------------------------------
    // LEVEL 6: GARDEN & PATIO (Flower, Tree, Butterfly)
    // ---------------------------------------------------
    playLevel6() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.FLOWER, HOUSE_ITEMS.TREE, HOUSE_ITEMS.BUTTERFLY];
      this.targetItem = pool[(this.currentRound - 1) % pool.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Garden: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      pool.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(item)}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item === this.targetItem) {
            this.sound.playWaterTap();
            btn.style.transform = 'scale(1.25) rotate(10deg)';
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel6();
              } else {
                this.completeLevel(6);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ---------------------------------------------------
    // LEVEL 7: LAUNDRY ROOM (Wash: Shirt, Socks, Pants)
    // ---------------------------------------------------
    playLevel7() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.SHIRT, HOUSE_ITEMS.SOCKS, HOUSE_ITEMS.PANTS];
      this.targetItem = pool[(this.currentRound - 1) % pool.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Wash: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      pool.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(item)}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item === this.targetItem) {
            this.sound.playBubblePop();
            btn.style.transform = 'scale(0)';
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel7();
              } else {
                this.completeLevel(7);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ---------------------------------------------------
    // LEVEL 8: GARAGE (Car, Bicycle, Helmet)
    // ---------------------------------------------------
    playLevel8() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.CAR, HOUSE_ITEMS.BICYCLE, HOUSE_ITEMS.HELMET];
      this.targetItem = pool[(this.currentRound - 1) % pool.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Garage: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      pool.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(item)}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item === this.targetItem) {
            this.sound.playCarHonk();
            btn.style.transform = 'scale(1.2) translateY(-10px)';
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel8();
              } else {
                this.completeLevel(8);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ---------------------------------------------------
    // LEVEL 9: ATTIC (Teddy Bear, Guitar, Book)
    // ---------------------------------------------------
    playLevel9() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.TEDDY_BEAR, HOUSE_ITEMS.GUITAR, HOUSE_ITEMS.BOOK];
      this.targetItem = pool[(this.currentRound - 1) % pool.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Attic Treasure: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      pool.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(item)}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item === this.targetItem) {
            this.sound.playDoorOpen();
            btn.style.transform = 'scale(1.2)';
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel9();
              } else {
                this.completeLevel(9);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ---------------------------------------------------
    // LEVEL 10: BALCONY (Plant, Bird, Window)
    // ---------------------------------------------------
    playLevel10() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pool = [HOUSE_ITEMS.PLANT, HOUSE_ITEMS.BIRD, HOUSE_ITEMS.WINDOW];
      this.targetItem = pool[(this.currentRound - 1) % pool.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Balcony: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${getItemVisualHtml(this.targetItem)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      pool.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(item)}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item === this.targetItem) {
            btn.style.transform = 'scale(1.25) rotate(5deg)';
            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel10();
              } else {
                this.completeLevel(10);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ===================================================
    // STAGE 2: LEVEL 11 (WHERE DOES IT BELONG? ROOM SORTING)
    // ===================================================
    playLevel11() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const quests = [
        { item: HOUSE_ITEMS.BED, room: HOUSE_ITEMS.BEDROOM, act: 'act_belong_bed', dist: [HOUSE_ITEMS.KITCHEN, HOUSE_ITEMS.BATHROOM] },
        { item: HOUSE_ITEMS.SOFA, room: HOUSE_ITEMS.LIVING_ROOM, act: 'act_belong_sofa', dist: [HOUSE_ITEMS.BEDROOM, HOUSE_ITEMS.GARAGE] },
        { item: HOUSE_ITEMS.CAR, room: HOUSE_ITEMS.GARAGE, act: 'act_belong_car', dist: [HOUSE_ITEMS.KITCHEN, HOUSE_ITEMS.DINING_ROOM] }
      ];

      const quest = quests[(this.currentRound - 1) % quests.length];
      this.targetItem = quest.room;
      this.currentActionPromptKey = quest.act;

      this.dom.playIntroText.textContent = `Where does the ${quest.item.name} belong? `;
      this.dom.promptMainWord.innerHTML = `${quest.item.name} <span class="prompt-icon-slot">${getItemVisualHtml(quest.item)}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const row = document.createElement('div');
      row.className = 'furniture-shelf-row';

      const choices = [quest.room, ...quest.dist];
      choices.sort(() => Math.random() - 0.5);

      choices.forEach(room => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${getItemVisualHtml(room)}</span>
          <span class="fc-name">${room.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (room === quest.room) {
            btn.style.transform = 'scale(1.2)';
            this.showRoundSuccess(room, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel11();
              } else {
                this.completeLevel(11);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        row.appendChild(btn);
      });

      arena.appendChild(row);
    }

    // ===================================================
    // STAGE 2: LEVEL 12 (LIGHT SWITCH ON & OFF)
    // ===================================================
    playLevel12() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const actions = [
        { isTurnOn: true, word: 'LIGHT ON 💡', act: 'act_light_on' },
        { isTurnOn: false, word: 'LIGHT OFF 🌙', act: 'act_light_off' },
        { isTurnOn: true, word: 'LIGHT ON 💡', act: 'act_light_on' }
      ];

      const step = actions[(this.currentRound - 1) % actions.length];
      this.lightTurnedOn = !step.isTurnOn;
      this.currentActionPromptKey = step.act;

      this.dom.playIntroText.textContent = 'Action: ';
      this.dom.promptMainWord.innerHTML = step.word;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const plate = document.createElement('div');
      plate.className = step.isTurnOn ? 'light-switch-plate turned-off' : 'light-switch-plate turned-on';
      plate.innerHTML = '<div class="switch-toggle-rocker"></div>';

      plate.addEventListener('click', () => {
        this.sound.playSwitchClick();
        plate.className = step.isTurnOn ? 'light-switch-plate turned-on' : 'light-switch-plate turned-off';
        this.showRoundSuccess(step.isTurnOn ? 'LIGHT ON' : 'LIGHT OFF', () => {
          if (this.currentRound < this.maxRounds) {
            this.currentRound++;
            this.updateRoundProgress();
            this.playLevel12();
          } else {
            this.completeLevel(12);
          }
        });
      });

      arena.appendChild(plate);
    }

    // ===================================================
    // STAGE 2: LEVEL 13 (TIDY UP TOYS)
    // ===================================================
    playLevel13() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const toys = [
        { id: 'ball', name: 'BALL', icon: '⚽', audioKey: 'ball', actKey: 'act_ball' },
        { id: 'robot', name: 'ROBOT', icon: '🤖', audioKey: 'robot', actKey: 'act_robot' },
        { id: 'train', name: 'TRAIN', icon: '🚂', audioKey: 'train', actKey: 'act_train' }
      ];

      this.targetItem = toys[(this.currentRound - 1) % toys.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Tidy Up: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${this.targetItem.icon}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      toys.forEach(toy => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${toy.icon}</span>
          <span class="fc-name">${toy.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (toy.name === this.targetItem.name) {
            btn.style.transform = 'scale(0)';
            this.showRoundSuccess(toy, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel13();
              } else {
                this.completeLevel(13);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ===================================================
    // STAGE 2: LEVEL 14 (KNOCK KNOCK AT THE DOOR)
    // ===================================================
    playLevel14() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const doors = [
        { id: 'blue_door', name: 'BLUE DOOR', color: '#3498db', friend: 'Mom Bunny 🐰', audioKey: 'blue_door', actKey: 'act_blue_door' },
        { id: 'red_door', name: 'RED DOOR', color: '#e74c3c', friend: 'Dad Bunny 🐰', audioKey: 'red_door', actKey: 'act_red_door' },
        { id: 'yellow_door', name: 'YELLOW DOOR', color: '#f1c40f', friend: 'Puppy 🐶', audioKey: 'yellow_door', actKey: 'act_yellow_door' }
      ];

      this.targetItem = doors[(this.currentRound - 1) % doors.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Knock on: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} 🚪`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      doors.forEach(d => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.style.borderColor = d.color;
        btn.innerHTML = `
          <span class="fc-icon">🚪</span>
          <span class="fc-name">${d.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (d.name === this.targetItem.name) {
            this.sound.playKnock();
            setTimeout(() => {
              this.sound.playDoorOpen();
              btn.innerHTML = `
                <span class="fc-icon">✨</span>
                <span class="fc-name">${d.friend}</span>
              `;
            }, 300);

            setTimeout(() => {
              this.showRoundSuccess(d, () => {
                if (this.currentRound < this.maxRounds) {
                  this.currentRound++;
                  this.updateRoundProgress();
                  this.playLevel14();
                } else {
                  this.completeLevel(14);
                }
              });
            }, 1000);
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ===================================================
    // STAGE 2: LEVEL 15 (FRUIT SMOOTHIE BLENDER)
    // ===================================================
    playLevel15() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const fruits = [
        { id: 'strawberry', name: 'STRAWBERRY', icon: '🍓', audioKey: 'strawberry', actKey: 'act_strawberry' },
        { id: 'banana', name: 'BANANA', icon: '🍌', audioKey: 'banana', actKey: 'act_banana' },
        { id: 'orange', name: 'ORANGE', icon: '🍊', audioKey: 'orange', actKey: 'act_orange' }
      ];

      this.targetItem = fruits[(this.currentRound - 1) % fruits.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Add to Blender: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${this.targetItem.icon}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const blenderWrap = document.createElement('div');
      blenderWrap.className = 'blender-appliance';
      blenderWrap.innerHTML = `
        <div class="blender-jug" id="activeJug">
          <span style="font-size:3.5rem;">🥤</span>
        </div>
        <div class="blender-base">
          <span style="font-size:1.8rem; color:#fff;">⚙️ BLEND</span>
        </div>
      `;

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      fruits.forEach(f => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${f.icon}</span>
          <span class="fc-name">${f.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (f.name === this.targetItem.name) {
            btn.style.transform = 'scale(0)';
            const jug = document.getElementById('activeJug');
            if (jug) {
              jug.classList.add('blending');
              this.sound.playBlenderWhirl();
            }

            setTimeout(() => {
              this.showRoundSuccess(f, () => {
                if (this.currentRound < this.maxRounds) {
                  this.currentRound++;
                  this.updateRoundProgress();
                  this.playLevel15();
                } else {
                  this.completeLevel(15);
                }
              });
            }, 1200);
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(blenderWrap);
      arena.appendChild(shelf);
    }

    // ===================================================
    // STAGE 2: LEVEL 16 (HOUSEHOLD SOUND DETECTIVE)
    // ===================================================
    playLevel16() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const sounds = [
        { id: 'doorbell', name: 'DOORBELL', icon: '🔔', audioKey: 'doorbell', play: () => this.sound.playDoorbell() },
        { id: 'water_tap', name: 'WATER TAP', icon: '🚰', audioKey: 'water_tap', play: () => this.sound.playWaterTap() },
        { id: 'knocking', name: 'KNOCKING', icon: '✊', audioKey: 'knocking', play: () => this.sound.playKnock() }
      ];

      const current = sounds[(this.currentRound - 1) % sounds.length];
      this.targetItem = current;
      this.currentSoundFunc = current.play;
      this.currentActionPromptKey = 'act_sound_detective';

      this.dom.playIntroText.textContent = 'Listen closely: ';
      this.dom.promptMainWord.textContent = '❓ WHAT MAKES THIS SOUND?';
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      sounds.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${s.icon}</span>
          <span class="fc-name">${s.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (s.name === current.name) {
            this.dom.promptMainWord.textContent = `${s.name} ${s.icon}`;
            this.showRoundSuccess(s, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel16();
              } else {
                this.completeLevel(16);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ===================================================
    // STAGE 2: LEVEL 17 (SHADOW SAFARI AT HOME)
    // ===================================================
    playLevel17() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const items = [
        { id: 'lamp', name: 'LAMP', icon: '💡', audioKey: 'lamp' },
        { id: 'sofa', name: 'SOFA', icon: '🛋️', audioKey: 'sofa' },
        { id: 'bathtub', name: 'BATHTUB', icon: '🛁', audioKey: 'bathtub' }
      ];

      this.targetItem = items[(this.currentRound - 1) % items.length];
      this.currentActionPromptKey = 'act_shadow_safari';

      this.dom.playIntroText.textContent = 'Mystery Shadow: ';
      this.dom.promptMainWord.textContent = '❓ GUESS THE SHADOW';
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shadowBox = document.createElement('div');
      shadowBox.style.fontSize = '6.5rem';
      shadowBox.style.filter = 'brightness(0)';
      shadowBox.style.margin = '20px auto';
      shadowBox.textContent = this.targetItem.icon;

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      items.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${item.icon}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item.name === this.targetItem.name) {
            shadowBox.style.filter = 'none';
            this.dom.promptMainWord.textContent = `${item.name} ${item.icon}`;

            setTimeout(() => {
              this.showRoundSuccess(item, () => {
                if (this.currentRound < this.maxRounds) {
                  this.currentRound++;
                  this.updateRoundProgress();
                  this.playLevel17();
                } else {
                  this.completeLevel(17);
                }
              });
            }, 800);
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shadowBox);
      arena.appendChild(shelf);
    }

    // ===================================================
    // STAGE 2: LEVEL 18 (BRUSH YOUR TEETH ROUTINE)
    // ===================================================
    playLevel18() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const steps = [
        { id: 'toothbrush', name: 'TOOTHBRUSH', icon: '🪥', audioKey: 'toothbrush', actKey: 'act_brush_toothbrush' },
        { id: 'toothpaste', name: 'TOOTHPASTE', icon: '🧴', audioKey: 'toothpaste', actKey: 'act_brush_toothpaste' },
        { id: 'water_cup', name: 'WATER CUP', icon: '🥤', audioKey: 'water_cup', actKey: 'act_brush_water_cup' }
      ];

      this.targetItem = steps[(this.currentRound - 1) % steps.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Bathroom Routine: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${this.targetItem.icon}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      steps.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${s.icon}</span>
          <span class="fc-name">${s.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (s.name === this.targetItem.name) {
            btn.style.transform = 'scale(1.2)';
            this.showRoundSuccess(s, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel18();
              } else {
                this.completeLevel(18);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ===================================================
    // STAGE 2: LEVEL 19 (FLOWER POTS BLOOM)
    // ===================================================
    playLevel19() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const pots = [
        { id: 'red_flower', name: 'RED FLOWER', icon: '🌺', color: '#e74c3c', audioKey: 'red_flower', actKey: 'act_water_red_flower' },
        { id: 'yellow_flower', name: 'YELLOW FLOWER', icon: '🌻', color: '#f1c40f', audioKey: 'yellow_flower', actKey: 'act_water_yellow_flower' },
        { id: 'purple_flower', name: 'PURPLE FLOWER', icon: '🪻', color: '#9b59b6', audioKey: 'purple_flower', actKey: 'act_water_purple_flower' }
      ];

      this.targetItem = pots[(this.currentRound - 1) % pots.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Water the: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${this.targetItem.icon}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      pots.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.style.borderColor = p.color;
        btn.innerHTML = `
          <span class="fc-icon">🪴</span>
          <span class="fc-name">${p.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (p.name === this.targetItem.name) {
            this.sound.playWaterTap();
            btn.innerHTML = `
              <span class="fc-icon">${p.icon}</span>
              <span class="fc-name">Blooming!</span>
            `;
            btn.style.transform = 'scale(1.25)';

            setTimeout(() => {
              this.showRoundSuccess(p, () => {
                if (this.currentRound < this.maxRounds) {
                  this.currentRound++;
                  this.updateRoundProgress();
                  this.playLevel19();
                } else {
                  this.completeLevel(19);
                }
              });
            }, 800);
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }

    // ===================================================
    // STAGE 2: LEVEL 20 (LUNA'S GRAND HOUSE PARTY)
    // ===================================================
    playLevel20() {
      const arena = this.dom.playArenaContent;
      arena.innerHTML = '';

      const partyItems = [
        { id: 'party_cake', name: 'PARTY CAKE', icon: '🎂', audioKey: 'party_cake', actKey: 'act_party_cake' },
        { id: 'balloons', name: 'BALLOONS', icon: '🎈', audioKey: 'balloons', actKey: 'act_party_balloons' },
        { id: 'music_box', name: 'MUSIC BOX', icon: '🎶', audioKey: 'music_box', actKey: 'act_party_music_box' }
      ];

      this.targetItem = partyItems[(this.currentRound - 1) % partyItems.length];
      this.currentActionPromptKey = this.targetItem.actKey;

      this.dom.playIntroText.textContent = 'Party Time: ';
      this.dom.promptMainWord.innerHTML = `${this.targetItem.name} <span class="prompt-icon-slot">${this.targetItem.icon}</span>`;
      if (this.dom.promptSpanishHint) this.dom.promptSpanishHint.textContent = '';

      this.speakCurrentPrompt();

      const shelf = document.createElement('div');
      shelf.className = 'furniture-shelf-row';

      partyItems.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'furniture-card-btn';
        btn.innerHTML = `
          <span class="fc-icon">${item.icon}</span>
          <span class="fc-name">${item.name}</span>
        `;

        btn.addEventListener('click', () => {
          if (item.name === this.targetItem.name) {
            this.sound.playVictory();
            this.confetti.burst(80);
            btn.style.transform = 'scale(1.25) rotate(8deg)';

            this.showRoundSuccess(item, () => {
              if (this.currentRound < this.maxRounds) {
                this.currentRound++;
                this.updateRoundProgress();
                this.playLevel20();
              } else {
                this.completeLevel(20);
              }
            });
          } else {
            this.sound.playBoing();
            this.voice.playClip('oops_try_again');
          }
        });

        shelf.appendChild(btn);
      });

      arena.appendChild(shelf);
    }
  }

  // --- INITIALIZE GAME ON DOM READY ---
  window.addEventListener('DOMContentLoaded', () => {
    window.lunaHouseGameInstance = new LunaHouseGame();
  });
})();
