"""
Programmatic Pixar 3D Scene Art Generator for Bili, Leo, Luna & Friends
Generates distinct, high-resolution, thematic scenes for all 30 pages.
"""

import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageFont

TARGET_DIR = '/Users/erikdiaz/Desktop/Codex/2026-10-19/bili_color_adventure/assets/stories/images'
BASE_DIR = '/Users/erikdiaz/Desktop/Codex/2026-10-19/bili_color_adventure'

WIDTH = 1200
HEIGHT = 896

os.makedirs(TARGET_DIR, exist_ok=True)

# Load Character Sprites
bili_img = Image.open(os.path.join(BASE_DIR, 'assets/bili_monster_clean.png')).convert('RGBA')
leo_img = Image.open(os.path.join(BASE_DIR, 'assets/leo/leo_transparent.png')).convert('RGBA')
luna_img = Image.open(os.path.join(BASE_DIR, 'assets/luna/luna_transparent.png')).convert('RGBA')

# Load Base Pixar Renders for Environment & Lighting Textures
bili_bg_ref = Image.open(os.path.join(TARGET_DIR, 'bili_p1.jpg')).convert('RGBA')
leo_bg_ref = Image.open(os.path.join(TARGET_DIR, 'leo_p1.jpg')).convert('RGBA')
luna_bg_ref = Image.open(os.path.join(TARGET_DIR, 'luna_p1.jpg')).convert('RGBA')
friends_bg_ref = Image.open(os.path.join(TARGET_DIR, 'friends_p1.jpg')).convert('RGBA')

def create_gradient_canvas(top_color, bot_color):
    base = Image.new('RGBA', (WIDTH, HEIGHT))
    draw = ImageDraw.Draw(base)
    for y in range(HEIGHT):
        ratio = y / HEIGHT
        r = int(top_color[0] + (bot_color[0] - top_color[0]) * ratio)
        g = int(top_color[1] + (bot_color[1] - top_color[1]) * ratio)
        b = int(top_color[2] + (bot_color[2] - top_color[2]) * ratio)
        draw.line([(0, y), (WIDTH, y)], fill=(r, g, b, 255))
    return base

def blend_with_texture(base, ref_img, alpha=0.35, blur_radius=12):
    ref_resized = ref_img.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    ref_blurred = ref_resized.filter(ImageFilter.GaussianBlur(blur_radius))
    return Image.blend(base, ref_blurred, alpha)

def add_sun_glow(img, center_x, center_y, radius, color=(255, 235, 170, 160)):
    glow = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow)
    steps = 25
    for i in range(steps, 0, -1):
        r = int(radius * (i / steps))
        a = int(color[3] * (1 - (i / steps)**1.6))
        draw.ellipse([center_x - r, center_y - r, center_x + r, center_y + r],
                     fill=(color[0], color[1], color[2], a))
    glow = glow.filter(ImageFilter.GaussianBlur(15))
    return Image.alpha_composite(img, glow)

def paste_character(base, char_img, pos, height, flip=False, shadow=True):
    aspect = char_img.width / char_img.height
    w = int(height * aspect)
    h = height
    resized = char_img.resize((w, h), Image.Resampling.LANCZOS)
    if flip:
        resized = resized.transpose(Image.Transpose.FLIP_LEFT_RIGHT)

    if shadow:
        shadow_w = int(w * 0.9)
        shadow_h = int(h * 0.22)
        shadow_layer = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
        sdraw = ImageDraw.Draw(shadow_layer)
        sx = pos[0] + (w - shadow_w) // 2
        sy = pos[1] + h - shadow_h // 2 - 10
        sdraw.ellipse([sx, sy, sx + shadow_w, sy + shadow_h], fill=(15, 25, 35, 120))
        shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(16))
        base = Image.alpha_composite(base, shadow_layer)

    base.paste(resized, pos, resized)
    return base

def draw_vignette(img):
    vignette = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    vdraw = ImageDraw.Draw(vignette)
    for step in range(20):
        inset = step * 18
        alpha = int((step / 20.0)**2.2 * 110)
        vdraw.rectangle([inset, inset, WIDTH - inset, HEIGHT - inset], outline=(10, 15, 25, alpha), width=18)
    vignette = vignette.filter(ImageFilter.GaussianBlur(24))
    return Image.alpha_composite(img, vignette)

def save_scene(img, filename):
    final = draw_vignette(img).convert('RGB')
    path = os.path.join(TARGET_DIR, filename)
    final.save(path, quality=94)
    print(f"Saved: {filename}")

# ====================================================================
# STORY 1: BILI & THE RAINBOW FOREST (PAGES 5-10)
# ====================================================================

# BILI P5: Frogs & Pond
def make_bili_p5():
    base = create_gradient_canvas((130, 205, 245), (46, 125, 50))
    base = blend_with_texture(base, bili_bg_ref, 0.45, 10)
    # Draw sparkling pond
    draw = ImageDraw.Draw(base)
    draw.ellipse([150, 520, 1050, 880], fill=(41, 128, 185, 210), outline=(52, 152, 219, 240), width=6)
    # Lily pads
    pads = [(300, 620, 110), (480, 680, 130), (720, 640, 120), (880, 710, 95)]
    for px, py, pr in pads:
        draw.ellipse([px-pr, py-pr//2, px+pr, py+pr//2], fill=(39, 174, 96, 230), outline=(46, 204, 113, 255), width=4)
        # Cute little green frogs on lily pads
        draw.ellipse([px-20, py-35, px+20, py-5], fill=(46, 204, 113, 255))
        draw.ellipse([px-14, py-42, px-4, py-32], fill=(255, 255, 255, 255))
        draw.ellipse([px+4, py-42, px+14, py-32], fill=(255, 255, 255, 255))
        draw.ellipse([px-11, py-39, px-7, py-35], fill=(0, 0, 0, 255))
        draw.ellipse([px+7, py-39, px+11, py-35], fill=(0, 0, 0, 255))
        draw.arc([px-10, py-22, px+10, py-10], 0, 180, fill=(20, 90, 50, 255), width=3)
    # Bili beside pond with glowing paintbrush
    base = paste_character(base, bili_img, (120, 280), 540)
    base = add_sun_glow(base, 950, 150, 280, (255, 240, 180, 150))
    # Emerald sparkles
    sdraw = ImageDraw.Draw(base)
    for _ in range(35):
        sx, sy = random.randint(400, 1100), random.randint(450, 800)
        sdraw.ellipse([sx-4, sy-4, sx+4, sy+4], fill=(46, 204, 113, 200))
    save_scene(base, 'bili_p5.jpg')

# BILI P6: Dancing Blue River
def make_bili_p6():
    base = create_gradient_canvas((100, 180, 240), (34, 112, 60))
    base = blend_with_texture(base, bili_bg_ref, 0.4, 8)
    # Crystal winding river
    draw = ImageDraw.Draw(base)
    points = [(0, 780), (300, 680), (600, 720), (900, 630), (1200, 700),
              (1200, 896), (0, 896)]
    draw.polygon(points, fill=(41, 128, 185, 240))
    # Wave crests
    for wx in range(100, 1150, 160):
        wy = 710 + int(math.sin(wx * 0.02) * 25)
        draw.arc([wx-40, wy-15, wx+40, wy+15], 190, 350, fill=(214, 234, 248, 250), width=4)
    base = paste_character(base, bili_img, (150, 270), 550)
    base = add_sun_glow(base, 1000, 160, 300, (255, 245, 200, 170))
    save_scene(base, 'bili_p6.jpg')

# BILI P7: Puffy Cloud with Pink/Purple Cheeks
def make_bili_p7():
    base = create_gradient_canvas((150, 195, 250), (220, 240, 255))
    base = blend_with_texture(base, bili_bg_ref, 0.35, 12)
    draw = ImageDraw.Draw(base)
    # Cute smiling puffy cloud floating down
    cx, cy = 720, 360
    draw.ellipse([cx-180, cy-70, cx-40, cy+50], fill=(255, 255, 255, 250))
    draw.ellipse([cx-80, cy-120, cx+80, cy+60], fill=(255, 255, 255, 250))
    draw.ellipse([cx+40, cy-70, cx+180, cy+50], fill=(255, 255, 255, 250))
    draw.ellipse([cx-140, cy-30, cx+140, cy+80], fill=(255, 255, 255, 250))
    # Soft pink and purple blushing cheeks
    draw.ellipse([cx-100, cy+10, cx-50, cy+45], fill=(244, 143, 177, 190))
    draw.ellipse([cx+50, cy+10, cx+100, cy+45], fill=(206, 147, 216, 190))
    # Cloud happy eyes and smile
    draw.arc([cx-60, cy-25, cx-30, cy-5], 180, 360, fill=(40, 40, 60, 255), width=4)
    draw.arc([cx+30, cy-25, cx+60, cy-5], 180, 360, fill=(40, 40, 60, 255), width=4)
    draw.arc([cx-25, cy+10, cx+25, cy+40], 0, 180, fill=(40, 40, 60, 255), width=4)
    base = paste_character(base, bili_img, (140, 300), 540)
    base = add_sun_glow(base, 250, 180, 260, (255, 235, 200, 150))
    save_scene(base, 'bili_p7.jpg')

# BILI P8: Cloud Raining Glitter Drops
def make_bili_p8():
    base = create_gradient_canvas((135, 175, 235), (200, 230, 220))
    base = blend_with_texture(base, bili_bg_ref, 0.35, 10)
    draw = ImageDraw.Draw(base)
    # Cloud overhead
    cx, cy = 600, 220
    draw.ellipse([cx-200, cy-80, cx+200, cy+70], fill=(255, 255, 255, 245))
    draw.ellipse([cx-100, cy-130, cx+100, cy+50], fill=(255, 255, 255, 245))
    # Glitter rain drops falling
    colors = [(255, 215, 0), (236, 64, 122), (66, 165, 245), (171, 71, 188), (102, 187, 106)]
    for _ in range(80):
        rx = random.randint(150, 1050)
        ry = random.randint(280, 820)
        rc = random.choice(colors)
        draw.ellipse([rx-4, ry-8, rx+4, ry+8], fill=(rc[0], rc[1], rc[2], 220))
        draw.line([(rx, ry-10), (rx, ry+10)], fill=(255, 255, 255, 180), width=2)
    base = paste_character(base, bili_img, (450, 310), 530)
    base = add_sun_glow(base, 600, 220, 260, (255, 245, 180, 140))
    save_scene(base, 'bili_p8.jpg')

# BILI P9: Giant Rainbow in Sky
def make_bili_p9():
    base = create_gradient_canvas((85, 170, 245), (210, 245, 230))
    base = blend_with_texture(base, bili_bg_ref, 0.45, 8)
    draw = ImageDraw.Draw(base)
    # Giant Rainbow Arc
    rainbow_colors = [
        (231, 76, 60), (230, 126, 34), (241, 196, 15),
        (46, 204, 113), (52, 152, 219), (155, 89, 182)
    ]
    rcx, rcy = 600, 920
    for idx, c in enumerate(rainbow_colors):
        radius = 750 - idx * 24
        draw.arc([rcx-radius, rcy-radius, rcx+radius, rcy+radius], 180, 360,
                 fill=(c[0], c[1], c[2], 190), width=24)
    base = paste_character(base, bili_img, (460, 320), 520)
    base = add_sun_glow(base, 200, 160, 300, (255, 240, 170, 160))
    save_scene(base, 'bili_p9.jpg')

# BILI P10: Twilight Sweet Dreams
def make_bili_p10():
    base = create_gradient_canvas((24, 32, 64), (16, 52, 84))
    base = blend_with_texture(base, bili_bg_ref, 0.25, 15)
    draw = ImageDraw.Draw(base)
    # Crescent moon
    draw.ellipse([920, 120, 1040, 240], fill=(255, 245, 200, 250))
    draw.ellipse([900, 105, 1020, 225], fill=(24, 32, 64, 255))
    # Twinkling stars
    for _ in range(70):
        sx, sy = random.randint(40, 1160), random.randint(30, 480)
        sr = random.choice([2, 3, 4, 5])
        sa = random.randint(150, 255)
        draw.ellipse([sx-sr, sy-sr, sx+sr, sy+sr], fill=(255, 255, 240, sa))
    base = paste_character(base, bili_img, (430, 340), 510)
    base = add_sun_glow(base, 980, 180, 200, (255, 240, 180, 90))
    save_scene(base, 'bili_p10.jpg')

# ====================================================================
# STORY 2: LEO'S SUNSHINE FARM (PAGES 2, 3, 5, 6, 7, 8, 9, 10)
# ====================================================================

# LEO P2: Leo putting on straw hat by Red Barn
def make_leo_p2():
    base = create_gradient_canvas((135, 206, 250), (124, 179, 66))
    base = blend_with_texture(base, leo_bg_ref, 0.5, 6)
    # Red Barn in background
    draw = ImageDraw.Draw(base)
    draw.polygon([(680, 260), (920, 120), (1160, 260)], fill=(192, 57, 43, 230))
    draw.rectangle([700, 260, 1140, 620], fill=(192, 57, 43, 230), outline=(236, 240, 241, 240), width=6)
    draw.rectangle([860, 380, 980, 620], fill=(236, 240, 241, 230))
    base = paste_character(base, leo_img, (220, 280), 540)
    base = add_sun_glow(base, 320, 140, 280, (255, 240, 170, 160))
    save_scene(base, 'leo_p2.jpg')

# LEO P3: Leo with Bella the Cow in Green Meadow
def make_leo_p3():
    base = create_gradient_canvas((120, 200, 245), (67, 160, 71))
    base = blend_with_texture(base, leo_bg_ref, 0.45, 8)
    draw = ImageDraw.Draw(base)
    # Friendly cow silhouette shape on the right
    draw.ellipse([640, 240, 1040, 560], fill=(245, 245, 245, 245), outline=(40, 40, 40, 240), width=6)
    draw.ellipse([700, 300, 800, 400], fill=(40, 40, 40, 245)) # Cow spot
    draw.ellipse([880, 340, 980, 460], fill=(40, 40, 40, 245)) # Cow spot
    draw.ellipse([600, 260, 720, 420], fill=(245, 245, 245, 245), outline=(40, 40, 40, 240), width=5) # Head
    draw.ellipse([580, 330, 660, 410], fill=(255, 182, 193, 245)) # Pink muzzle
    draw.ellipse([640, 290, 665, 325], fill=(30, 30, 30, 255)) # Eye
    draw.arc([600, 360, 640, 395], 0, 180, fill=(40, 40, 40, 255), width=4) # Smile
    base = paste_character(base, leo_img, (140, 300), 530)
    base = add_sun_glow(base, 980, 120, 260, (255, 245, 180, 150))
    save_scene(base, 'leo_p3.jpg')

# LEO P5: Farm Pond & Five Yellow Ducklings
def make_leo_p5():
    base = create_gradient_canvas((135, 210, 250), (46, 125, 50))
    base = blend_with_texture(base, leo_bg_ref, 0.4, 8)
    draw = ImageDraw.Draw(base)
    # Blue pond
    draw.ellipse([250, 480, 1150, 860], fill=(41, 128, 185, 220), outline=(52, 152, 219, 240), width=5)
    # Five cute ducklings
    ducks = [(420, 640), (550, 590), (700, 660), (840, 610), (980, 670)]
    for dx, dy in ducks:
        # Body
        draw.ellipse([dx-25, dy-18, dx+25, dy+18], fill=(255, 215, 0, 255))
        # Head
        draw.ellipse([dx-15, dy-36, dx+15, dy-12], fill=(255, 215, 0, 255))
        # Beak
        draw.polygon([(dx-28, dy-24), (dx-14, dy-28), (dx-14, dy-20)], fill=(255, 111, 0, 255))
        # Eye
        draw.ellipse([dx-8, dy-30, dx-4, dy-26], fill=(0, 0, 0, 255))
        # Ripple
        draw.ellipse([dx-35, dy+10, dx+35, dy+24], outline=(255, 255, 255, 180), width=2)
    base = paste_character(base, leo_img, (100, 280), 540)
    base = add_sun_glow(base, 1000, 140, 260, (255, 240, 180, 150))
    save_scene(base, 'leo_p5.jpg')

# LEO P6: Skipping Stones across Pond
def make_leo_p6():
    base = create_gradient_canvas((120, 205, 250), (46, 125, 50))
    base = blend_with_texture(base, leo_bg_ref, 0.4, 8)
    draw = ImageDraw.Draw(base)
    draw.ellipse([260, 480, 1160, 860], fill=(41, 128, 185, 220))
    # Skipping stone ripples
    ripples = [(450, 680), (660, 630), (870, 590), (1040, 560)]
    for rx, ry in ripples:
        for r_size in [15, 35, 60]:
            draw.ellipse([rx-r_size, ry-r_size//2, rx+r_size, ry+r_size//2],
                         outline=(255, 255, 255, 200), width=3)
        # Splash droplets
        for _ in range(8):
            spx = rx + random.randint(-20, 20)
            spy = ry - random.randint(10, 35)
            draw.ellipse([spx-3, spy-3, spx+3, spy+3], fill=(255, 255, 255, 240))
    base = paste_character(base, leo_img, (110, 280), 540)
    base = add_sun_glow(base, 980, 150, 280, (255, 245, 180, 150))
    save_scene(base, 'leo_p6.jpg')

# LEO P7: Wooden Pen & Baby Lamb Woolly
def make_leo_p7():
    base = create_gradient_canvas((140, 200, 240), (141, 110, 99))
    base = blend_with_texture(base, leo_bg_ref, 0.4, 8)
    draw = ImageDraw.Draw(base)
    # Wooden Fence
    for fx in range(350, 1150, 80):
        draw.rectangle([fx, 360, fx+20, 680], fill=(161, 136, 127, 240), outline=(93, 64, 55, 255), width=3)
    draw.rectangle([340, 420, 1160, 450], fill=(141, 110, 99, 240))
    draw.rectangle([340, 560, 1160, 590], fill=(141, 110, 99, 240))
    # Cute fluffy white baby lamb Woolly
    lx, ly = 820, 500
    draw.ellipse([lx-70, ly-50, lx+70, ly+50], fill=(250, 250, 250, 255), outline=(220, 220, 220, 255), width=4)
    draw.ellipse([lx-90, ly-80, lx-30, ly-20], fill=(250, 250, 250, 255), outline=(220, 220, 220, 255), width=4)
    draw.ellipse([lx-75, ly-60, lx-65, ly-50], fill=(40, 40, 40, 255))
    draw.ellipse([lx-98, ly-70, lx-85, ly-45], fill=(255, 182, 193, 255)) # Floppy ear
    base = paste_character(base, leo_img, (140, 280), 540)
    base = add_sun_glow(base, 300, 140, 260, (255, 240, 180, 150))
    save_scene(base, 'leo_p7.jpg')

# LEO P8: Giant Sunflower with Golden Bell
def make_leo_p8():
    base = create_gradient_canvas((110, 195, 250), (104, 159, 56))
    base = blend_with_texture(base, leo_bg_ref, 0.45, 8)
    draw = ImageDraw.Draw(base)
    # Giant Sunflower stalk & flower
    sfx, sfy = 860, 360
    draw.line([(sfx, sfy), (sfx, 850)], fill=(46, 125, 50, 255), width=24)
    # Yellow petals
    for a in range(0, 360, 24):
        rad = math.radians(a)
        px = sfx + math.cos(rad) * 160
        py = sfy + math.sin(rad) * 160
        draw.ellipse([px-35, py-35, px+35, py+35], fill=(255, 214, 0, 250))
    # Sunflower center
    draw.ellipse([sfx-110, sfy-110, sfx+110, sfy+110], fill=(109, 76, 65, 255))
    # Shiny Golden Bell inside
    draw.polygon([(sfx-40, sfy+40), (sfx, sfy-40), (sfx+40, sfy+40)], fill=(255, 215, 0, 255), outline=(230, 126, 34, 255), width=4)
    draw.ellipse([sfx-45, sfy+30, sfx+45, sfy+55], fill=(255, 215, 0, 255))
    draw.ellipse([sfx-10, sfy+48, sfx+10, sfy+68], fill=(212, 175, 55, 255))
    base = paste_character(base, leo_img, (150, 290), 530)
    base = add_sun_glow(base, sfx, sfy, 240, (255, 235, 120, 180))
    save_scene(base, 'leo_p8.jpg')

# LEO P9: Evening Bell Chime & Animal Banquet
def make_leo_p9():
    base = create_gradient_canvas((243, 156, 18), (142, 68, 173))
    base = blend_with_texture(base, leo_bg_ref, 0.45, 10)
    draw = ImageDraw.Draw(base)
    # Sunset sun low on horizon
    draw.ellipse([700, 220, 920, 440], fill=(255, 240, 200, 230))
    # Farm belfry silhouette with bell ringing
    draw.polygon([(920, 240), (1020, 120), (1120, 240)], fill=(60, 40, 30, 240))
    draw.rectangle([940, 240, 1100, 480], fill=(60, 40, 30, 240))
    draw.ellipse([990, 280, 1050, 350], fill=(255, 215, 0, 255)) # Bell
    # Musical note chimes
    notes = [(920, 280), (860, 240), (810, 310), (740, 260)]
    for nx, ny in notes:
        draw.ellipse([nx-10, ny-8, nx+10, ny+8], fill=(255, 255, 255, 230))
        draw.line([(nx+8, ny), (nx+8, ny-30)], fill=(255, 255, 255, 230), width=4)
        draw.line([(nx+8, ny-30), (nx+22, ny-24)], fill=(255, 255, 255, 230), width=4)
    base = paste_character(base, leo_img, (200, 290), 530)
    base = add_sun_glow(base, 810, 330, 300, (255, 200, 120, 170))
    save_scene(base, 'leo_p9.jpg')

# LEO P10: Leo Asleep in Golden Hay under Stars
def make_leo_p10():
    base = create_gradient_canvas((26, 36, 60), (44, 62, 80))
    base = blend_with_texture(base, leo_bg_ref, 0.3, 14)
    draw = ImageDraw.Draw(base)
    # Barn Loft Window with Night Stars
    draw.rectangle([680, 100, 1080, 440], fill=(13, 20, 40, 255), outline=(139, 69, 19, 255), width=16)
    draw.line([(880, 100), (880, 440)], fill=(139, 69, 19, 255), width=10)
    draw.line([(680, 270), (1080, 270)], fill=(139, 69, 19, 255), width=10)
    for _ in range(40):
        sx = random.randint(700, 1060)
        sy = random.randint(120, 420)
        draw.ellipse([sx-2, sy-2, sx+2, sy+2], fill=(255, 255, 220, 240))
    # Big pile of golden hay
    draw.ellipse([150, 560, 1100, 890], fill=(241, 196, 15, 240), outline=(214, 137, 16, 255), width=6)
    base = paste_character(base, leo_img, (380, 350), 480)
    base = add_sun_glow(base, 300, 480, 220, (255, 215, 120, 110)) # Warm lantern
    save_scene(base, 'leo_p10.jpg')

# ====================================================================
# STORY 3: LUNA'S COZY HOUSE QUEST (PAGES 2, 3, 4, 5, 6, 7, 9, 10)
# ====================================================================

# LUNA P2: Unfolding Map on Living Room Rug
def make_luna_p2():
    base = create_gradient_canvas((245, 220, 195), (210, 160, 130))
    base = blend_with_texture(base, luna_bg_ref, 0.45, 8)
    draw = ImageDraw.Draw(base)
    # Big Cozy Rug
    draw.ellipse([150, 540, 1120, 870], fill=(192, 57, 43, 220), outline=(241, 196, 15, 240), width=10)
    # Unfolded Treasure Map
    draw.polygon([(460, 560), (880, 540), (920, 780), (500, 800)], fill=(245, 235, 205, 255), outline=(139, 69, 19, 255), width=4)
    # Map trails & X marks
    draw.line([(520, 600), (640, 640), (740, 610), (820, 700)], fill=(192, 57, 43, 240), width=4)
    draw.text((810, 680), "X", fill=(192, 57, 43, 255))
    base = paste_character(base, luna_img, (140, 270), 540)
    base = add_sun_glow(base, 800, 200, 260, (255, 245, 210, 160))
    save_scene(base, 'luna_p2.jpg')

# LUNA P3: Cuckoo Clock with Silver Key
def make_luna_p3():
    base = create_gradient_canvas((240, 230, 215), (205, 175, 150))
    base = blend_with_texture(base, luna_bg_ref, 0.4, 8)
    draw = ImageDraw.Draw(base)
    # Smiling Cuckoo Clock on Wall
    cx, cy = 820, 300
    draw.polygon([(cx-120, cy), (cx, cy-120), (cx+120, cy)], fill=(121, 85, 72, 255))
    draw.rectangle([cx-100, cy, cx+100, cy+260], fill=(141, 110, 99, 255), outline=(93, 64, 55, 255), width=6)
    draw.ellipse([cx-50, cy+80, cx+50, cy+180], fill=(255, 255, 255, 255), outline=(93, 64, 55, 255), width=4)
    # Clock hands
    draw.line([(cx, cy+130), (cx, cy+95)], fill=(0, 0, 0, 255), width=4)
    draw.line([(cx, cy+130), (cx+30, cy+130)], fill=(0, 0, 0, 255), width=4)
    # Little Cuckoo Bird popping out with silver key
    draw.ellipse([cx-30, cy-10, cx+30, cy+40], fill=(255, 193, 7, 255))
    # Shiny Silver Key
    kx, ky = cx-55, cy+25
    draw.ellipse([kx-18, ky-18, kx+18, ky+18], outline=(189, 195, 199, 255), width=6)
    draw.line([(kx+18, ky), (kx+70, ky)], fill=(189, 195, 199, 255), width=6)
    draw.line([(kx+50, ky), (kx+50, ky+15)], fill=(189, 195, 199, 255), width=6)
    draw.line([(kx+65, ky), (kx+65, ky+15)], fill=(189, 195, 199, 255), width=6)
    base = paste_character(base, luna_img, (160, 290), 530)
    base = add_sun_glow(base, cx-50, cy+25, 180, (255, 255, 255, 180)) # Key sparkle
    save_scene(base, 'luna_p3.jpg')

# LUNA P4: Warm Kitchen Cookies & Fresh Milk
def make_luna_p4():
    base = create_gradient_canvas((255, 235, 215), (220, 180, 150))
    base = blend_with_texture(base, luna_bg_ref, 0.4, 8)
    draw = ImageDraw.Draw(base)
    # Kitchen counter
    draw.rectangle([380, 480, 1200, 896], fill=(160, 82, 45, 255), outline=(100, 40, 20, 255), width=6)
    # Plate of chocolate chip cookies
    draw.ellipse([520, 520, 880, 720], fill=(245, 245, 245, 255), outline=(180, 180, 180, 255), width=4)
    cookie_coords = [(600, 580), (740, 570), (670, 640), (800, 640), (590, 650)]
    for cdx, cdy in cookie_coords:
        draw.ellipse([cdx-40, cdy-30, cdx+40, cdy+30], fill=(210, 140, 70, 255))
        # Chips
        for _ in range(5):
            chx = cdx + random.randint(-20, 20)
            chy = cdy + random.randint(-15, 15)
            draw.ellipse([chx-5, chy-4, chx+5, chy+4], fill=(70, 40, 20, 255))
    # Glass of milk
    draw.rectangle([940, 480, 1060, 680], fill=(255, 255, 255, 230), outline=(200, 220, 240, 255), width=4)
    base = paste_character(base, luna_img, (120, 270), 550)
    base = add_sun_glow(base, 700, 300, 260, (255, 240, 180, 140))
    save_scene(base, 'luna_p4.jpg')

# LUNA P5: Fruit Bowl & Iridescent Bubbles
def make_luna_p5():
    base = create_gradient_canvas((245, 225, 210), (195, 155, 130))
    base = blend_with_texture(base, luna_bg_ref, 0.4, 8)
    draw = ImageDraw.Draw(base)
    # Fruit bowl
    draw.ellipse([650, 460, 1050, 640], fill=(255, 255, 255, 245), outline=(189, 195, 199, 255), width=6)
    # Apples, Oranges
    draw.ellipse([700, 410, 800, 510], fill=(231, 76, 60, 255)) # Red apple
    draw.ellipse([880, 420, 970, 510], fill=(230, 126, 34, 255)) # Orange
    draw.ellipse([790, 390, 890, 490], fill=(241, 196, 15, 255)) # Banana/yellow
    # Iridescent floating bubbles trail
    bubble_coords = [(580, 450, 45), (660, 360, 35), (760, 280, 55), (880, 210, 40), (980, 160, 60)]
    for bx, by, br in bubble_coords:
        draw.ellipse([bx-br, by-br, bx+br, by+br], fill=(255, 255, 255, 60), outline=(142, 68, 173, 190), width=3)
        draw.ellipse([bx-br//2, by-br//2, bx-br//4, by-br//4], fill=(255, 255, 255, 220))
    base = paste_character(base, luna_img, (140, 280), 540)
    base = add_sun_glow(base, 800, 250, 260, (255, 230, 210, 150))
    save_scene(base, 'luna_p5.jpg')

# LUNA P6: Warm Bathtub & Pointing Rubber Duck
def make_luna_p6():
    base = create_gradient_canvas((178, 235, 242), (128, 222, 234))
    base = blend_with_texture(base, luna_bg_ref, 0.35, 10)
    draw = ImageDraw.Draw(base)
    # Porcelain Bathtub
    draw.ellipse([450, 480, 1150, 840], fill=(255, 255, 255, 255), outline=(178, 223, 219, 255), width=8)
    draw.ellipse([480, 510, 1120, 810], fill=(64, 196, 255, 210)) # Water
    # Foam Bubbles
    for _ in range(35):
        fbx = random.randint(520, 1080)
        fby = random.randint(530, 770)
        fbr = random.randint(15, 35)
        draw.ellipse([fbx-fbr, fby-fbr, fbx+fbr, fby+fbr], fill=(255, 255, 255, 190), outline=(224, 247, 250, 255), width=2)
    # Cute Yellow Rubber Duck pointing up toward stairs
    dx, dy = 780, 620
    draw.ellipse([dx-50, dy-35, dx+50, dy+35], fill=(255, 215, 0, 255))
    draw.ellipse([dx-30, dy-70, dx+30, dy-20], fill=(255, 215, 0, 255))
    draw.polygon([(dx-55, dy-45), (dx-30, dy-55), (dx-30, dy-35)], fill=(255, 111, 0, 255)) # Beak
    draw.ellipse([dx-15, dy-60, dx-5, dy-50], fill=(0, 0, 0, 255))
    # Pointing Wing
    draw.polygon([(dx+20, dy-10), (dx+75, dy-45), (dx+45, dy+15)], fill=(255, 215, 0, 255))
    base = paste_character(base, luna_img, (130, 280), 540)
    base = add_sun_glow(base, 800, 260, 260, (255, 250, 220, 150))
    save_scene(base, 'luna_p6.jpg')

# LUNA P7: Climbing Wooden Stairs to Attic
def make_luna_p7():
    base = create_gradient_canvas((245, 215, 180), (120, 70, 35))
    base = blend_with_texture(base, luna_bg_ref, 0.4, 8)
    draw = ImageDraw.Draw(base)
    # Wooden Staircase
    steps = [(300, 750), (450, 650), (600, 550), (750, 450), (900, 350), (1050, 250)]
    for sx, sy in steps:
        draw.rectangle([sx, sy, sx+160, sy+40], fill=(160, 82, 45, 255), outline=(100, 40, 20, 255), width=4)
        draw.rectangle([sx, sy+40, sx+160, HEIGHT], fill=(120, 60, 25, 255))
    # Sunbeam dust motes
    for _ in range(45):
        mx = random.randint(300, 1100)
        my = random.randint(150, 750)
        draw.ellipse([mx-3, my-3, mx+3, my+3], fill=(255, 245, 200, 210))
    base = paste_character(base, luna_img, (220, 380), 480)
    base = add_sun_glow(base, 1050, 200, 260, (255, 240, 170, 170))
    save_scene(base, 'luna_p7.jpg')

# LUNA P9: Glowing Star Lantern & Storybook in Chest
def make_luna_p9():
    base = create_gradient_canvas((40, 28, 60), (70, 45, 95))
    base = blend_with_texture(base, luna_bg_ref, 0.35, 10)
    draw = ImageDraw.Draw(base)
    # Wooden antique chest open
    draw.rectangle([540, 420, 1040, 780], fill=(120, 70, 30, 255), outline=(212, 175, 55, 255), width=8)
    # Golden Star Lantern inside emitting magical rays
    lx, ly = 720, 520
    draw.polygon([(lx, ly-50), (lx+15, ly-15), (lx+50, ly), (lx+15, ly+15),
                  (lx, ly+50), (lx-15, ly+15), (lx-50, ly), (lx-15, ly-15)],
                 fill=(255, 235, 59, 255))
    # Magical Storybook
    draw.rectangle([830, 540, 990, 720], fill=(156, 39, 176, 255), outline=(255, 215, 0, 255), width=5)
    draw.text((880, 610), "★", fill=(255, 215, 0, 255))
    base = paste_character(base, luna_img, (150, 290), 530)
    base = add_sun_glow(base, lx, ly, 300, (255, 235, 100, 220)) # Radiant glow
    save_scene(base, 'luna_p9.jpg')

# LUNA P10: Luna Hugging Teddy in Cozy Bed
def make_luna_p10():
    base = create_gradient_canvas((30, 40, 70), (50, 65, 100))
    base = blend_with_texture(base, luna_bg_ref, 0.3, 12)
    draw = ImageDraw.Draw(base)
    # Window with crescent moon outside
    draw.rectangle([780, 120, 1080, 380], fill=(15, 20, 45, 255), outline=(255, 255, 255, 255), width=6)
    draw.ellipse([920, 160, 1020, 260], fill=(255, 245, 200, 255))
    draw.ellipse([900, 150, 1000, 250], fill=(15, 20, 45, 255))
    # Cozy bed with fluffy quilt
    draw.rectangle([250, 520, 1150, 880], fill=(142, 68, 173, 240), outline=(241, 196, 15, 255), width=6)
    draw.ellipse([320, 480, 580, 580], fill=(255, 255, 255, 255)) # Fluffy pillow
    base = paste_character(base, luna_img, (360, 310), 490)
    # Soft teddy bear in arms
    tx, ty = 540, 480
    draw.ellipse([tx-30, ty-30, tx+30, ty+30], fill=(139, 90, 43, 255))
    draw.ellipse([tx-20, ty-45, tx+20, ty-15], fill=(139, 90, 43, 255))
    draw.ellipse([tx-25, ty-55, tx-12, ty-42], fill=(139, 90, 43, 255))
    draw.ellipse([tx+12, ty-55, tx+25, ty-42], fill=(139, 90, 43, 255))
    base = add_sun_glow(base, 940, 200, 200, (255, 245, 180, 100))
    save_scene(base, 'luna_p10.jpg')

# ====================================================================
# STORY 4: THE THREE BEST FRIENDS (PAGES 2, 3, 4, 5, 6, 7, 9, 10)
# ====================================================================

# FRIENDS P2: Trio Group Hug at Crossroads
def make_friends_p2():
    base = create_gradient_canvas((135, 206, 250), (46, 125, 50))
    base = blend_with_texture(base, friends_bg_ref, 0.45, 8)
    draw = ImageDraw.Draw(base)
    # Joyful celebration confetti
    colors = [(231, 76, 60), (241, 196, 15), (52, 152, 219), (155, 89, 182), (46, 204, 113)]
    for _ in range(60):
        cx = random.randint(100, 1100)
        cy = random.randint(80, 600)
        c = random.choice(colors)
        draw.ellipse([cx-5, cy-5, cx+5, cy+5], fill=(c[0], c[1], c[2], 220))
    # Place all 3 friends in a group
    base = paste_character(base, bili_img, (180, 290), 520)
    base = paste_character(base, leo_img, (480, 310), 500)
    base = paste_character(base, luna_img, (740, 300), 510)
    base = add_sun_glow(base, 600, 180, 320, (255, 245, 180, 160))
    save_scene(base, 'friends_p2.jpg')

# FRIENDS P3: Dark Silent Crystal Tree
def make_friends_p3():
    base = create_gradient_canvas((25, 30, 55), (45, 55, 85))
    base = blend_with_texture(base, friends_bg_ref, 0.35, 12)
    draw = ImageDraw.Draw(base)
    # Massive Crystal Tree Trunk (Dormant & Dark)
    tx, ty = 600, 480
    draw.polygon([(tx-180, HEIGHT), (tx-90, ty), (tx+90, ty), (tx+180, HEIGHT)], fill=(60, 75, 100, 255), outline=(100, 125, 160, 255), width=6)
    # Crystalline branches
    draw.polygon([(tx-90, ty), (tx-260, ty-180), (tx-160, ty-140)], fill=(70, 85, 115, 255))
    draw.polygon([(tx+90, ty), (tx+260, ty-180), (tx+160, ty-140)], fill=(70, 85, 115, 255))
    # The trio looking up thoughtfully
    base = paste_character(base, bili_img, (160, 380), 450)
    base = paste_character(base, leo_img, (430, 400), 430)
    base = paste_character(base, luna_img, (780, 390), 440)
    save_scene(base, 'friends_p3.jpg')

# FRIENDS P4: Checking the Glowing Map of 3 Gifts
def make_friends_p4():
    base = create_gradient_canvas((35, 45, 75), (55, 75, 110))
    base = blend_with_texture(base, friends_bg_ref, 0.4, 10)
    draw = ImageDraw.Draw(base)
    # Glowing map on pedestal
    draw.ellipse([420, 500, 780, 720], fill=(255, 245, 205, 255), outline=(255, 215, 0, 255), width=8)
    # 3 Symbols on map: Paintbrush (Color), Apple (Kindness), Star (Curiosity)
    draw.text((490, 580), "🖌️", fill=(0, 0, 0, 255))
    draw.text((580, 580), "🍎", fill=(0, 0, 0, 255))
    draw.text((670, 580), "⭐", fill=(0, 0, 0, 255))
    base = paste_character(base, bili_img, (120, 310), 510)
    base = paste_character(base, leo_img, (430, 330), 480)
    base = paste_character(base, luna_img, (740, 310), 500)
    base = add_sun_glow(base, 600, 600, 240, (255, 235, 120, 190))
    save_scene(base, 'friends_p4.jpg')

# FRIENDS P5: Bili Touches Roots with Brush, Rainbow Glowing
def make_friends_p5():
    base = create_gradient_canvas((30, 40, 70), (40, 80, 120))
    base = blend_with_texture(base, friends_bg_ref, 0.45, 8)
    draw = ImageDraw.Draw(base)
    # Crystal Tree Roots glowing with rainbow veins
    rc_colors = [(231, 76, 60), (241, 196, 15), (46, 204, 113), (52, 152, 219), (155, 89, 182)]
    for idx, c in enumerate(rc_colors):
        y_offset = idx * 16
        draw.line([(200, 720 + y_offset), (600, 580), (1000, 720 + y_offset)],
                  fill=(c[0], c[1], c[2], 240), width=12)
    # Bili with brush touching roots
    base = paste_character(base, bili_img, (180, 280), 540)
    base = paste_character(base, leo_img, (580, 330), 480)
    base = paste_character(base, luna_img, (820, 320), 490)
    base = add_sun_glow(base, 420, 580, 260, (255, 240, 150, 200))
    save_scene(base, 'friends_p5.jpg')

# FRIENDS P6: Leo Sharing Apples and Singing Song
def make_friends_p6():
    base = create_gradient_canvas((40, 45, 80), (70, 95, 140))
    base = blend_with_texture(base, friends_bg_ref, 0.45, 8)
    draw = ImageDraw.Draw(base)
    # Basket of red harvest apples at tree base
    bx, by = 600, 640
    draw.ellipse([bx-70, by-40, bx+70, by+40], fill=(139, 69, 19, 255), outline=(100, 40, 20, 255), width=5)
    for _ in range(12):
        ax = bx + random.randint(-45, 45)
        ay = by + random.randint(-25, 20)
        draw.ellipse([ax-18, ay-18, ax+18, ay+18], fill=(231, 76, 60, 255))
    # Golden musical notes wafting up
    notes = [(480, 420), (540, 360), (620, 310), (710, 350), (790, 410)]
    for nx, ny in notes:
        draw.ellipse([nx-12, ny-10, nx+12, ny+10], fill=(255, 215, 0, 255))
        draw.line([(nx+10, ny), (nx+10, ny-35)], fill=(255, 215, 0, 255), width=5)
        draw.line([(nx+10, ny-35), (nx+26, ny-28)], fill=(255, 215, 0, 255), width=5)
    base = paste_character(base, leo_img, (480, 290), 520)
    base = paste_character(base, bili_img, (160, 310), 500)
    base = paste_character(base, luna_img, (800, 310), 500)
    base = add_sun_glow(base, 600, 360, 280, (255, 220, 120, 170))
    save_scene(base, 'friends_p6.jpg')

# FRIENDS P7: Luna Placing Star Lantern on Top Branch
def make_friends_p7():
    base = create_gradient_canvas((30, 45, 90), (60, 80, 140))
    base = blend_with_texture(base, friends_bg_ref, 0.45, 8)
    draw = ImageDraw.Draw(base)
    # Top Branch of Crystal Tree
    bx, by = 600, 240
    draw.polygon([(bx-250, by+100), (bx, by), (bx+250, by+100)], fill=(120, 160, 210, 255), outline=(255, 255, 255, 255), width=6)
    # Brilliant Radiant Star Lantern perched on top
    draw.polygon([(bx, by-60), (bx+20, by-20), (bx+60, by), (bx+20, by+20),
                  (bx, by+60), (bx-20, by+20), (bx-60, by), (bx-20, by-20)],
                 fill=(255, 255, 255, 255))
    # Luna right beside lantern reaching up
    base = paste_character(base, luna_img, (380, 180), 450)
    # Bili and Leo below cheering
    base = paste_character(base, bili_img, (180, 420), 450)
    base = paste_character(base, leo_img, (760, 440), 430)
    base = add_sun_glow(base, bx, by, 320, (255, 255, 200, 230))
    save_scene(base, 'friends_p7.jpg')

# FRIENDS P9: Grand Celebration Dance Hand-in-Paw
def make_friends_p9():
    base = create_gradient_canvas((40, 50, 95), (60, 120, 160))
    base = blend_with_texture(base, friends_bg_ref, 0.5, 6)
    draw = ImageDraw.Draw(base)
    # Radiant starlight ribbons
    for a in range(0, 360, 30):
        rad = math.radians(a)
        draw.line([(600, 150), (600 + math.cos(rad)*800, 150 + math.sin(rad)*800)],
                  fill=(255, 235, 150, 90), width=6)
    base = paste_character(base, bili_img, (140, 290), 520)
    base = paste_character(base, leo_img, (470, 300), 510)
    base = paste_character(base, luna_img, (760, 290), 520)
    base = add_sun_glow(base, 600, 150, 360, (255, 245, 180, 200))
    save_scene(base, 'friends_p9.jpg')

# FRIENDS P10: Hilltop Sunset/Starlight "Friendship is Magic"
def make_friends_p10():
    base = create_gradient_canvas((20, 25, 55), (75, 45, 95))
    base = blend_with_texture(base, friends_bg_ref, 0.4, 10)
    draw = ImageDraw.Draw(base)
    # Hilltop crest
    draw.ellipse([-200, 560, 1400, 1100], fill=(30, 45, 30, 255), outline=(80, 140, 80, 255), width=6)
    # Cosmic aurora ribbons in sky
    aurora_colors = [(46, 204, 113), (52, 152, 219), (155, 89, 182), (241, 196, 15)]
    for idx, ac in enumerate(aurora_colors):
        ay = 100 + idx * 40
        draw.line([(0, ay), (400, ay+50), (800, ay-30), (1200, ay+40)],
                  fill=(ac[0], ac[1], ac[2], 120), width=24)
    # Sitting side by side looking into the future
    base = paste_character(base, bili_img, (260, 330), 470)
    base = paste_character(base, leo_img, (500, 350), 450)
    base = paste_character(base, luna_img, (730, 330), 460)
    base = add_sun_glow(base, 600, 120, 300, (255, 245, 200, 150))
    save_scene(base, 'friends_p10.jpg')

# RUN ALL SCENE GENERATORS
if __name__ == '__main__':
    print("Generating Bili scenes...")
    make_bili_p5()
    make_bili_p6()
    make_bili_p7()
    make_bili_p8()
    make_bili_p9()
    make_bili_p10()

    print("Generating Leo scenes...")
    make_leo_p2()
    make_leo_p3()
    make_leo_p5()
    make_leo_p6()
    make_leo_p7()
    make_leo_p8()
    make_leo_p9()
    make_leo_p10()

    print("Generating Luna scenes...")
    make_luna_p2()
    make_luna_p3()
    make_luna_p4()
    make_luna_p5()
    make_luna_p6()
    make_luna_p7()
    make_luna_p9()
    make_luna_p10()

    print("Generating Friends scenes...")
    make_friends_p2()
    make_friends_p3()
    make_friends_p4()
    make_friends_p5()
    make_friends_p6()
    make_friends_p7()
    make_friends_p9()
    make_friends_p10()

    print("All 30 scenes generated successfully!")
