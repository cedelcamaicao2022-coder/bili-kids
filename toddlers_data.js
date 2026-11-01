/**
 * Bilikids Adventure - Toddlers 01 Comprehensive Curriculum Master Data Integrator
 * Combines Unit 1 to 15 (Part 1: 1-5, Part 2: 6-10, Part 3: 11-15)
 * Total: 15 Units, 360 Activities (24 per unit), 1,800 Exercises (5 per activity),
 * 180 Main Game Levels (12 per unit), 150 Final Challenge Steps (10 per unit).
 */

(function (window) {
  'use strict';

  // Ensure individual parts are loaded
  const part1 = (typeof window.TODDLERS_UNITS_PART1 !== 'undefined') ? window.TODDLERS_UNITS_PART1 : [];
  const part2 = (typeof window.TODDLERS_UNITS_PART2 !== 'undefined') ? window.TODDLERS_UNITS_PART2 : [];
  const part3 = (typeof window.TODDLERS_UNITS_PART3 !== 'undefined') ? window.TODDLERS_UNITS_PART3 : [];

  const allUnits = [...part1, ...part2, ...part3];

  window.TODDLERS_ALL_UNITS = allUnits;

  window.ToddlersCurriculum = {
    getAllUnits: function () {
      return window.TODDLERS_ALL_UNITS;
    },

    getUnitById: function (id) {
      const numId = parseInt(id, 10);
      return window.TODDLERS_ALL_UNITS.find(u => u.id === numId) || null;
    },

    getUnitActivities: function (unit, skillName) {
      if (!unit) return [];
      if (unit[skillName] && Array.isArray(unit[skillName])) return unit[skillName];
      if (unit.skills && unit.skills[skillName] && Array.isArray(unit.skills[skillName])) return unit.skills[skillName];
      return [];
    },

    getTotalActivitiesCount: function () {
      return window.TODDLERS_ALL_UNITS.reduce((acc, u) => {
        const l = this.getUnitActivities(u, 'listening').length;
        const r = this.getUnitActivities(u, 'reading').length;
        const w = this.getUnitActivities(u, 'writing').length;
        const s = this.getUnitActivities(u, 'speaking').length;
        return acc + l + r + w + s;
      }, 0);
    },

    getTotalExercisesCount: function () {
      let total = 0;
      window.TODDLERS_ALL_UNITS.forEach(u => {
        ['listening', 'reading', 'writing', 'speaking'].forEach(sk => {
          const acts = this.getUnitActivities(u, sk);
          acts.forEach(act => {
            if (act.exercises && Array.isArray(act.exercises)) {
              total += act.exercises.length;
            }
          });
        });
      });
      return total;
    },

    getTotalGameLevelsCount: function () {
      return window.TODDLERS_ALL_UNITS.reduce((acc, u) => {
        return acc + ((u.game && u.game.levels) ? u.game.levels.length : 0);
      }, 0);
    },

    getTotalChallengeStepsCount: function () {
      return window.TODDLERS_ALL_UNITS.reduce((acc, u) => {
        return acc + ((u.finalChallenge && u.finalChallenge.steps) ? u.finalChallenge.steps.length : 0);
      }, 0);
    }
  };

  console.log('[ToddlersCurriculum] Loaded 15 Units. Total Units:', allUnits.length);
})(window);
