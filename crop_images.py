import sys
from PIL import Image

src_path = "/Users/vinit/.gemini/antigravity/brain/186920ae-0312-4f00-9acd-d11747286687/.user_uploaded/media_1787491166989.jpg"
img = Image.open(src_path)
width, height = img.size

# 1. Portrait crop for About Us page (main focus on person without the top text or bottom banner)
# Top text ends around 3%, bottom namecard starts around 78%
box_founder = (0, int(height * 0.03), width, int(height * 0.79))
founder_img = img.crop(box_founder)
founder_img.save("/Users/vinit/Desktop/medico finder/dr_sachin_singh.jpg", quality=95)

# 2. Square avatar crop for Home page doctor card
# Focus on face & shoulders
avatar_box = (int(width * 0.15), int(height * 0.03), int(width * 0.85), int(height * 0.50))
avatar_img = img.crop(avatar_box)
avatar_img.save("/Users/vinit/Desktop/medico finder/dr_sachin_avatar.jpg", quality=95)

print("Images cropped successfully!")
