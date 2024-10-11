from bs4 import BeautifulSoup
import json
import requests

# Загружаем HTML файл
url2 = 'https://genshin-impact.fandom.com/wiki/Mualani'

response2 = requests.get(url2)
bs2 = BeautifulSoup(response2.text,"lxml")

# Парсинг HTML с помощью BeautifulSoup
soup = BeautifulSoup(response2.text, 'lxml')

# Ищем все строки таблиц с классом 'ascension-stats' 
ascension_table = soup.find('table', class_='wikitable ascension-stats')


# Ищем все ряды с ascension costs
ascension_rows = ascension_table.find_all('tr', id='mw-customcollapsible-toggle-ascension')
#print(ascension_rows)

# Преобразуем данные в нужный формат
data = {}

ascension_stages = ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6']
stage_idx = 0

# Обрабатываем ряды и собираем данные
for row in ascension_rows:
    items = row.find_all('span', class_='card-text card-font')
    if items:
        ascension_data = {}
        for idx, item in enumerate(items):
            name = item.find_previous('a')['title']
            qty = item.text.strip()
            ascension_data[idx] = {'name': name, 'len': qty}
        data[ascension_stages[stage_idx]] = ascension_data
        stage_idx += 1

# Преобразование в JSON формат
json_data = json.dumps(data, ensure_ascii=False, indent=4)
print(json_data)
