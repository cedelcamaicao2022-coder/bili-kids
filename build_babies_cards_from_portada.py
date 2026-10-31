import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

src_dir = '/Users/erikdiaz/Desktop/imagen portada'
dst_dir = 'assets/subpages_cards'
os.makedirs(dst_dir, exist_ok=True)

# Fonts
f_cat_title = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 44)
f_cat_sub = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 24)
f_arrow = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 32)

f_cont_title = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 34)
f_cont_meta = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 24)

# --------------------------------------------------------------------------
# Helper to remove background / create clean cutout for category cards
# --------------------------------------------------------------------------
def extract_subject(im_path, target_h=420, max_w=440):
    im = Image.open(im_path).convert('RGBA')
    bg = im.getpixel((5, 5))
    w, h = im.size
    
    # Find bounding box of subject
    box = [w, h, 0, 0]
    for x in range(0, w, 8):
        for y in range(0, h, 8):
            c = im.getpixel((x, y))
            diff = sum(abs(c[i]-bg[i]) for i in range(3))
            if diff > 30:
                box[0] = min(box[0], x)
                box[1] = min(box[1], y)
                box[2] = max(box[2], x)
                box[3] = max(box[3], y)
                
    if box[2] > box[0] and box[3] > box[1]:
        pad = 16
        crop_box = (max(0, box[0]-pad), max(0, box[1]-pad), min(w, box[2]+pad), min(h, box[3]+pad))
        cropped = im.crop(crop_box)
    else:
        cropped = im
        
    # Scale to fit target dimensions
    scale = min(target_h / cropped.height, max_w / cropped.width)
    new_w = int(cropped.width * scale)
    new_h = int(cropped.height * scale)
    scaled = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Remove background color smoothly
    bg_scaled = scaled.getpixel((2, 2))
    data = []
    for p in scaled.getdata():
        diff = sum(abs(p[i]-bg_scaled[i]) for i in range(3))
        if diff < 20:
            data.append((255, 255, 255, 0))
        elif diff < 45:
            alpha = int(255 * (diff - 20) / 25.0)
            data.append((p[0], p[1], p[2], max(0, min(255, alpha))))
        else:
            data.append(p)
    scaled.putdata(data)
    return scaled

# --------------------------------------------------------------------------
# Generate 5 Category Cards (736 x 528)
# --------------------------------------------------------------------------
cat_cards = [
    {
        'file': 'babies_cat_stories.png',
        'src': 'stories.png',
        'title': 'Stories',
        'sub': 'Cuentos en inglés',
        'bg1': (255, 241, 245),
        'bg2': (254, 226, 236),
        'btn': (244, 63, 94)
    },
    {
        'file': 'babies_cat_videos.png',
        'src': 'osito.png',
        'title': 'Videos',
        'sub': 'Mira y aprende',
        'bg1': (240, 249, 255),
        'bg2': (218, 240, 252),
        'btn': (14, 165, 233)
    },
    {
        'file': 'babies_cat_songs.png',
        'src': 'songs.png',
        'title': 'Songs',
        'sub': 'Escucha y canta',
        'bg1': (254, 252, 232),
        'bg2': (253, 240, 203),
        'btn': (245, 158, 11)
    },
    {
        'file': 'babies_cat_games.png',
        'src': 'plays.png',
        'title': 'Games',
        'sub': 'Juega y practica',
        'bg1': (250, 245, 255),
        'bg2': (230, 223, 252),
        'btn': (139, 92, 246)
    },
    {
        'file': 'babies_cat_activities.png',
        'src': 'muchila.png',
        'title': 'Activities',
        'sub': 'Manualidades y actividades',
        'bg1': (240, 253, 244),
        'bg2': (212, 240, 220),
        'btn': (16, 185, 129)
    }
]

cw, ch = 736, 528
for c in cat_cards:
    card = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
    
    # Rounded background mask
    mask = Image.new('L', (cw, ch), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([(0, 0), (cw, ch)], radius=36, fill=255)
    
    # Background gradient
    bg = Image.new('RGBA', (cw, ch), (255, 255, 255, 255))
    bg_draw = ImageDraw.Draw(bg)
    r1, g1, b1 = c['bg1']
    r2, g2, b2 = c['bg2']
    for y in range(ch):
        t = y / float(ch)
        r = int(r1 + (r2 - r1) * t)
        g = int(g1 + (g2 - g1) * t)
        b = int(b1 + (b2 - b1) * t)
        bg_draw.line([(0, y), (cw, y)], fill=(r, g, b, 255))
        
    card.paste(bg, (0, 0), mask)
    
    # Extract & paste 3D art from master image
    src_path = os.path.join(src_dir, c['src'])
    subject = extract_subject(src_path, target_h=440, max_w=460)
    
    # Position subject nicely on the right
    paste_x = cw - subject.width - 24
    paste_y = (ch - subject.height) // 2 + 10
    card.paste(subject, (paste_x, paste_y), subject)
    
    # Typography
    draw = ImageDraw.Draw(card)
    draw.text((44, 46), c['title'], font=f_cat_title, fill=(30, 41, 59, 255))
    draw.text((44, 104), c['sub'], font=f_cat_sub, fill=(100, 116, 139, 255))
    
    # Circular Button with Arrow
    bx, by, br = cw - 80, ch - 80, 36
    draw.ellipse([(bx-br, by-br), (bx+br, by+br)], fill=c['btn'] + (255,))
    draw.text((bx-14, by-20), '➔', font=f_arrow, fill=(255, 255, 255, 255))
    
    out_p = os.path.join(dst_dir, c['file'])
    card.convert('RGB').save(out_p, 'PNG', optimize=True)
    print(f'Generated category card: {c["file"]} (736x528) from {c["src"]}')

# --------------------------------------------------------------------------
# Generate 6 Continúa Cards (604 x 480)
# --------------------------------------------------------------------------
cont_cards = [
    {
        'file': 'babies_cont_colors.png',
        'src': 'colors.png',
        'title': 'Colors',
        'meta_text': 'Video',
        'meta_type': 'video'
    },
    {
        'file': 'babies_cont_animals.png',
        'src': 'animals.png',
        'title': 'Animals',
        'meta_text': 'Canción',
        'meta_type': 'song'
    },
    {
        'file': 'babies_cont_house.png',
        'src': 'house.png',
        'title': 'My House',
        'meta_text': 'Cuento',
        'meta_type': 'story'
    },
    {
        'file': 'babies_cont_fruits.png',
        'src': 'fruits.png',
        'title': 'Fruits',
        'meta_text': 'Juego',
        'meta_type': 'game'
    },
    {
        'file': 'babies_cont_hello.png',
        'src': 'hello and good bay.png',
        'title': 'Hello and Goodbye',
        'meta_text': 'Video',
        'meta_type': 'video'
    },
    {
        'file': 'babies_cont_shapes.png',
        'src': 'colores.png',
        'title': 'Shapes',
        'meta_text': 'Actividad',
        'meta_type': 'activity'
    }
]

cw, ch = 604, 480
thumb_h = 320
body_h = ch - thumb_h

for c in cont_cards:
    card = Image.new('RGBA', (cw, ch), (255, 255, 255, 255))
    
    # Master artwork
    src_p = os.path.join(src_dir, c['src'])
    m_im = Image.open(src_p).convert('RGB')
    
    # Scale to cover top area (604 x 320)
    scale = max(cw / m_im.width, thumb_h / m_im.height)
    sw = int(m_im.width * scale)
    sh = int(m_im.height * scale)
    m_scaled = m_im.resize((sw, sh), Image.Resampling.LANCZOS)
    
    # Center crop
    crop_x = (sw - cw) // 2
    crop_y = (sh - thumb_h) // 2
    thumb = m_scaled.crop((crop_x, crop_y, crop_x + cw, crop_y + thumb_h))
    
    card.paste(thumb, (0, 0))
    
    # Bottom white body
    draw = ImageDraw.Draw(card)
    draw.rectangle([(0, thumb_h), (cw, ch)], fill=(255, 255, 255, 255))
    # Separator line
    draw.line([(0, thumb_h), (cw, thumb_h)], fill=(241, 245, 249, 255), width=2)
    
    # Title
    draw.text((32, thumb_h + 26), c['title'], font=f_cont_title, fill=(15, 23, 42, 255))
    
    # Meta badge: icon circle + text
    icon_y = thumb_h + 88
    if c['meta_type'] == 'video':
        # Blue circle with white triangle
        draw.ellipse([(32, icon_y), (32+30, icon_y+30)], fill=(2, 132, 199, 255))
        draw.polygon([(42, icon_y+8), (42, icon_y+22), (54, icon_y+15)], fill=(255, 255, 255, 255))
    elif c['meta_type'] == 'song':
        draw.ellipse([(32, icon_y), (32+30, icon_y+30)], fill=(245, 158, 11, 255))
        draw.text((38, icon_y+4), '♪', font=ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 20), fill=(255, 255, 255, 255))
    elif c['meta_type'] == 'story':
        draw.ellipse([(32, icon_y), (32+30, icon_y+30)], fill=(244, 63, 94, 255))
        draw.text((38, icon_y+4), '📖', font=ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 18), fill=(255, 255, 255, 255))
    elif c['meta_type'] == 'game':
        draw.ellipse([(32, icon_y), (32+30, icon_y+30)], fill=(139, 92, 246, 255))
        draw.text((36, icon_y+4), '🎮', font=ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 18), fill=(255, 255, 255, 255))
    else:
        draw.ellipse([(32, icon_y), (32+30, icon_y+30)], fill=(16, 185, 129, 255))
        draw.text((38, icon_y+4), '✏', font=ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 18), fill=(255, 255, 255, 255))
        
    draw.text((74, icon_y + 3), c['meta_text'], font=f_cont_meta, fill=(100, 116, 139, 255))
    
    # Outer rounded mask
    mask = Image.new('L', (cw, ch), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([(0, 0), (cw, ch)], radius=28, fill=255)
    
    final_card = Image.new('RGB', (cw, ch), (255, 255, 255))
    final_card.paste(card.convert('RGB'), (0, 0), mask)
    
    # Draw subtle border
    fdraw = ImageDraw.Draw(final_card)
    fdraw.rounded_rectangle([(0, 0), (cw-1, ch-1)], radius=28, outline=(226, 232, 240), width=2)
    
    out_p = os.path.join(dst_dir, c['file'])
    final_card.save(out_p, 'PNG', optimize=True)
    print(f'Generated continua card: {c["file"]} (604x480) from {c["src"]}')

print('All 11 cards successfully generated from imagen portada!')
