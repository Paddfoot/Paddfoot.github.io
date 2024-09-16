import requests
import json
import codecs
import os
from PIL import Image

image_path = 'data/res/characters.png'
img = Image.open(image_path)
new_image = img.resize((64, 64))
new_image.save('data/res/characters.png')