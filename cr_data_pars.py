import os
import json
from bs4 import BeautifulSoup
import requests
import json
import codecs

def par(n, e, r, w, el):
    #temp = bs.find('h2', 'pi-item pi-item-spacing pi-title pi-secondary-background')
    #print(temp.text)
    url = 'https://genshin-impact.fandom.com/ru/wiki/Эмилия'# + n
    response = requests.get(url)
    bs = BeautifulSoup(response.text,"lxml")
    name_ru = bs.find('h2', 'pi-item pi-item-spacing pi-title pi-secondary-background')
    briefly = bs.find('div', 'pi-data-value pi-font')
    description = bs.find('div', 'description__text')
    birthday = bs.find_all('div', 'pi-data-value pi-font')
    constellation = bs.find_all('div', 'pi-data-value pi-font')
    region = bs.find_all('div', 'pi-data-value pi-font')
    group = bs.find_all('div', 'pi-data-value pi-font')
    skill_1 = bs.find_all('table', 'wikitable talent_table')
    constellations = bs.find_all('table', 'wikitable tdc1 tdc2')
    data = {e: {
                'name': e,
                'name_ru': name_ru.text,
                'element': el,
                'weapon': w,
                'rarity': r,
                'briefly': briefly.text,
                'birthday': birthday[5].text,
                'constellation': constellation[6].text,
                'region': region[7].text,
                'group': group[0].text,
                'description': description.text,
                'skills': [
                    {
                        'skill_name': skill_1[0].find_all('td')[1].text.rstrip(),
                        'skill_desc': skill_1[0].find_all('td')[3].text.rstrip()
                    },{
                        'skill_name': skill_1[0].find_all('td')[5].text.rstrip(),
                        'skill_desc': skill_1[0].find_all('td')[7].text.rstrip()
                    },{
                        'skill_name': skill_1[0].find_all('td')[9].text.rstrip(),
                        'skill_desc': skill_1[0].find_all('td')[11].text.rstrip()
                    },{
                        'skill_name': skill_1[0].find_all('td')[13].text.rstrip(),
                        'skill_desc': skill_1[0].find_all('td')[15].text.rstrip()
                    },{
                        'skill_name': skill_1[0].find_all('td')[17].text.rstrip(),
                        'skill_desc': skill_1[0].find_all('td')[19].text.rstrip()
                    },{
                        'skill_name': skill_1[0].find_all('td')[21].text.rstrip(),
                        'skill_desc': skill_1[0].find_all('td')[23].text.rstrip()
                    }
                ],
                'constellations': [
                    {
                        'const_name': constellations[0].find_all('td')[2].text.rstrip(),
                        'const_desc': constellations[0].find_all('td')[3].text.rstrip()
                    },{
                        'const_name': constellations[0].find_all('td')[6].text.rstrip(),
                        'const_desc': constellations[0].find_all('td')[7].text.rstrip()
                    },{
                        'const_name': constellations[0].find_all('td')[10].text.rstrip(),
                        'const_desc': constellations[0].find_all('td')[11].text.rstrip()
                    },{
                        'const_name': constellations[0].find_all('td')[14].text.rstrip(),
                        'const_desc': constellations[0].find_all('td')[15].text.rstrip()
                    },{
                        'const_name': constellations[0].find_all('td')[18].text.rstrip(),
                        'const_desc': constellations[0].find_all('td')[19].text.rstrip()
                    },{
                        'const_name': constellations[0].find_all('td')[22].text.rstrip(),
                        'const_desc': constellations[0].find_all('td')[23].text.rstrip()
                    }
                ]
            }
        }
    print(data)

fileObj = codecs.open( "data/data.json", "r", "utf_8_sig" )
text = fileObj.read()
jess_dict = json.loads(text)

par(jess_dict['data']['characters'][3]['name_ru'],
    jess_dict['data']['characters'][3]['name'],
    jess_dict['data']['characters'][3]['rarity'],
    jess_dict['data']['characters'][3]['weapon'],
    jess_dict['data']['characters'][3]['element'])

#for i in jess_dict['data']['characters']:
#    print(i['name_ru'])
#    par(i['name_ru'], i['name'])

fileObj.close()

#
#def weap(n):
#    #temp = bs.find('h2', 'pi-item pi-item-spacing pi-title pi-secondary-background')
#    #print(temp.text)
#    url = 'https://genshin-impact.fandom.com/wiki/' + n
#    response = requests.get(url)
#    bs = BeautifulSoup(response.text,"lxml")
#    temp = bs.find('span', 'no-wrap')
#    #print(temp)
#    if temp == None:
#        print(temp)
#    else:
#        return temp.text.replace(' ', '')
#
#def rarity(n):
#    #temp = bs.find('h2', 'pi-item pi-item-spacing pi-title pi-secondary-background')
#    #print(temp.text)
#    url = 'https://genshin-impact.fandom.com/wiki/' + n
#    response = requests.get(url)
#    bs = BeautifulSoup(response.text,"lxml")
#    temp = bs.find('td', 'pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing')
#    #print(temp)
#    if temp == None:
#        print(temp)
#    else:
#        return temp.find('img').attrs['alt'][0]
#        
#def el(n):
#    #temp = bs.find('h2', 'pi-item pi-item-spacing pi-title pi-secondary-background')
#    #print(temp.text)
#    url = 'https://genshin-impact.fandom.com/wiki/' + n
#    response = requests.get(url)
#    bs = BeautifulSoup(response.text,"lxml")
#    temp = bs.find_all('td', 'pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing')
#    #print(temp)
#    if temp == []:
#        print('temp')
#    else:
#        return temp[2].find('img').attrs['alt'][8:]
#
#directory = "data/characters/"
#files = os.listdir(directory)
#
#data = {'data': {
#            'characters': []
#            }
#        }
#
#for i in files:
#    data['data']['characters'].append({'nid': i,
#                                       'name': name(i),
#                                       'name_ru': '',
#                                       'element': el(i),
#                                       'weapon': weap(i),
#                                       'rarity': rarity(i),
#                                       'element_icon': 'https://raw.githubusercontent.com/Paddfoot/Awarin/main/data/elements/anemo.webp',
#                                       'icon': 'https://raw.githubusercontent.com/Paddfoot/Awarin/main/data/characters/' + i + '/UI_AvatarIcon_' + i + '.png',
#                                       'gacha_img': 'https://raw.githubusercontent.com/Paddfoot/Awarin/main/data/characters/' + i + '/UI_Gacha_AvatarImg_' + i + '.webp',
#                                       'namecard': 'https://raw.githubusercontent.com/Paddfoot/Awarin/main/data/characters/' + i + '/UI_NameCardPic_' + i + '_P.jpg'
#                                       })
#print(data)