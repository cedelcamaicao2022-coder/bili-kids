"""
Update stories_engine.js:
1. Map all 40 page images to assets/stories/images/{audioId}.jpg
2. Initialize sceneActionLayer in this.dom
3. Add renderSceneAnimations() to bring each of the 40 pages alive with matching Pixar animated props & effects
"""

import re

ENGINE_PATH = '/Users/erikdiaz/Desktop/Codex/2026-10-19/bili_color_adventure/stories_engine.js'

with open(ENGINE_PATH, 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update all 40 image paths to match audioId
new_code, count = re.subn(
    r"(audioId:\s*'([a-z]+_p\d+)',\s*\n\s*)image:\s*'assets/stories/images/[^']+'",
    r"\1image: 'assets/stories/images/\2.jpg'",
    code
)
print(f"Updated {count} page image paths to exact audioId.jpg")

# 2. Add sceneActionLayer to this.dom
dom_target = "sceneImage: document.getElementById('sceneImage'),"
dom_replacement = """sceneImage: document.getElementById('sceneImage'),
        sceneActionLayer: document.getElementById('sceneActionLayer'),"""
new_code = new_code.replace(dom_target, dom_replacement, 1)

# 3. Add SCENE_ANIMATIONS dictionary and helper method
scene_anim_def = '''
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
'''

# Insert PAGE_SCENE_ELEMENTS before STORIES
new_code = new_code.replace("  // --- STORY DEFINITIONS (4 STORIES * 10 PAGES EACH) ---",
                            scene_anim_def + "\n  // --- STORY DEFINITIONS (4 STORIES * 10 PAGES EACH) ---", 1)

# 4. Enhance renderCurrentPage to inject dynamic living scene elements into this.dom.sceneActionLayer
render_target = """      // Navigation state
      this.dom.btnPrevPage.disabled = this.currentPageIndex === 0;"""

render_replacement = """      // Update Living Scene Action Layer (Pixar living animations)
      if (this.dom.sceneActionLayer) {
        const pageAnim = PAGE_SCENE_ELEMENTS[page.audioId];
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
      this.dom.btnPrevPage.disabled = this.currentPageIndex === 0;"""

new_code = new_code.replace(render_target, render_replacement, 1)

with open(ENGINE_PATH, 'w', encoding='utf-8') as f:
    f.write(new_code)

print("stories_engine.js updated successfully with all 40 scenes and living animations!")
