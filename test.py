import shutil
import os

import os
import json
from bs4 import BeautifulSoup
import requests
import json
import codecs
import re

def copy_and_replace_file(src_file, dest_folder):
    # Проверяем, существует ли исходный файл
    if not os.path.isfile(src_file):
        raise FileNotFoundError(f"Исходный файл не найден: {src_file}")

    # Получаем имя файла из пути
    file_name = os.path.basename(src_file)

    # Создаем путь для файла в целевой папке
    dest_file = os.path.join(dest_folder, file_name)

    # Копируем файл в папку назначения с заменой, если файл уже существует
    shutil.copy2(src_file, dest_file)
    print(f"Файл {file_name} успешно скопирован в {dest_folder} с заменой.")

# Пример использования
src_file = "data/index.html"
dest_folder = "/путь/к/целевой/папке"

#copy_and_replace_file(src_file, dest_folder)


fileObj = codecs.open( "data/data.json", "r", "utf_8_sig" )
text = fileObj.read()
jess_dict = json.loads(text)

#print(len(jess_dict['data']['characters']))
i = 0
while i < 90:
    if jess_dict['data']['characters'][i]['nid'] == 'PlayerBoy':
        i += 1
    elif jess_dict['data']['characters'][i]['nid'] == 'PlayerGirl':
        i += 1
    elif jess_dict['data']['characters'][i]['nid'] == 'Tohma':
        i += 1
    else:
        print('characters/' + jess_dict['data']['characters'][i]['nid'] + '/')
        copy_and_replace_file(src_file, 'characters/' + jess_dict['data']['characters'][i]['nid'] + '/')
        i += 1

#for i in jess_dict['data']['characters']:
#    print(i['name_ru'])
#    par(i['name_ru'], i['name'])

fileObj.close()