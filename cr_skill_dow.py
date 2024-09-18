import requests
import json
import codecs
import os
from PIL import Image

def dow(d, w, n):
    def aa(url):
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S1.' + url.split('.')[-1], 'wb') as f:
            f.write(res)

    #Auto
    if w == 'Sword':
        url = "https://enka.network/ui/Skill_A_01.png"
        aa(url)
    if w == 'Bow':
        url = "https://enka.network/ui/Skill_A_02.png"
        aa(url)
    if w == 'Claymore':
        url = "https://enka.network/ui/Skill_A_04.png"
        aa(url)
    if w == 'Catalyst':
        url = "https://enka.network/ui/Skill_A_Catalyst_MD.png"
        aa(url)
    if w == 'Polearm':
        url = "https://enka.network/ui/Skill_A_03.png"
        aa(url)

    #E
    if d == 'Qin':
        url = "https://enka.network/ui/Skill_S_" + d + "_02.png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S2.' + url.split('.')[-1], 'wb') as f:
            f.write(res)
    elif d == 'Diluc':
        url = "https://enka.network/ui/Skill_S_" + d + "_01_01.png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S2.' + url.split('.')[-1], 'wb') as f:
            f.write(res)
    else:
        url = "https://enka.network/ui/Skill_S_" + d + "_01.png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S2.' + url.split('.')[-1], 'wb') as f:
            f.write(res)

    if d == 'Ayaka':
        url = "https://enka.network/ui/Skill_S_" + d + "_02.png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S2_2.' + url.split('.')[-1], 'wb') as f:
            f.write(res)

    if d == 'Mona':
        url = "https://enka.network/ui/Skill_S_" + d + "_02.png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S2_2.' + url.split('.')[-1], 'wb') as f:
            f.write(res)
    
    #Q
    if d == 'Ayaka':
        url = "https://enka.network/ui/Skill_E_" + d + ".png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S3.' + url.split('.')[-1], 'wb') as f:
            f.write(res)
    elif d == 'Ambor':
        url = "https://enka.network/ui/Skill_E_" + d + ".png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S3.' + url.split('.')[-1], 'wb') as f:
            f.write(res)
    else:
        url = "https://enka.network/ui/Skill_E_" + d + "_01.png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_S3.' + url.split('.')[-1], 'wb') as f:
            f.write(res)

    #Passi
    i = 4
    while i <= 6:
        url = "https://rerollcdn.com/GENSHIN/Skill/1/" + n + "/talent_" + str(i) + ".png"
        res = requests.get(url).content
        with open('data/characters/' + d + '/' + d + '_P' + str(i) + '.' + url.split('.')[-1], 'wb') as f:
            f.write(res)
        i = i + 1

    #Const
    url = "https://enka.network/ui/UI_Talent_S_" + d + "_01.png"
    res = requests.get(url).content
    with open('data/characters/' + d + '/' + d + '_C1.' + url.split('.')[-1], 'wb') as f:
        f.write(res)
    
    url = "https://enka.network/ui/UI_Talent_S_" + d + "_02.png"
    res = requests.get(url).content
    with open('data/characters/' + d + '/' + d + '_C2.' + url.split('.')[-1], 'wb') as f:
        f.write(res)

    url = "https://enka.network/ui/UI_Talent_U_" + d + "_02.png"
    res = requests.get(url).content
    with open('data/characters/' + d + '/' + d + '_C3.' + url.split('.')[-1], 'wb') as f:
        f.write(res)

    url = "https://enka.network/ui/UI_Talent_S_" + d + "_03.png"
    res = requests.get(url).content
    with open('data/characters/' + d + '/' + d + '_C4.' + url.split('.')[-1], 'wb') as f:
        f.write(res)
    
    url = "https://enka.network/ui/UI_Talent_U_" + d + "_01.png"
    res = requests.get(url).content
    with open('data/characters/' + d + '/' + d + '_C5.' + url.split('.')[-1], 'wb') as f:
        f.write(res)

    url = "https://enka.network/ui/UI_Talent_S_" + d + "_04.png"
    res = requests.get(url).content
    with open('data/characters/' + d + '/' + d + '_C6.' + url.split('.')[-1], 'wb') as f:
        f.write(res)
        

fileObj = codecs.open( "data/data.json", "r", "utf_8_sig")
text = fileObj.read()
jess_dict = json.loads(text)

i = 0
while i < len(jess_dict['data']['characters']):
    print(jess_dict['data']['characters'][i]['nid'])
    os.makedirs('data/characters/' + jess_dict['data']['characters'][i]['nid'], exist_ok=True)
    dow(jess_dict['data']['characters'][i]['nid'], jess_dict['data']['characters'][i]['weapon'], jess_dict['data']['characters'][i]['name'])
    i += 1

fileObj.close()