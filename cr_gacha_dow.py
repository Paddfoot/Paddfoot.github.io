import requests
import json
import codecs
import os
from PIL import Image

def dow(d):
    url = "https://enka.network/ui/UI_Gacha_AvatarImg_" + d + ".webp"
    res = requests.get(url).content
    with open('data/characters/' + d + '/' + d + '_gacha.' + url.split('.')[-1], 'wb') as f:
        f.write(res)

fileObj = codecs.open( "data/data.json", "r", "utf_8_sig")
text = fileObj.read()
jess_dict = json.loads(text)

i = 0
while i < len(jess_dict['data']['characters']):
    print(jess_dict['data']['characters'][i]['nid'])
    os.makedirs('data/characters/' + jess_dict['data']['characters'][i]['nid'], exist_ok=True)
    dow(jess_dict['data']['characters'][i]['nid'])
    i += 1

fileObj.close()