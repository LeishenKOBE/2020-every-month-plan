import requests
from bs4 import BeautifulSoup
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
}

res_foods = requests.get('http://www.xiachufang.com/explore/', headers=headers)

bs_food = BeautifulSoup(res_foods.text, 'html.parser')

title_item = bs_food.find_all(class_='name')

foods = []

for item in title_item:
    a = item.find('a').text.strip()
    href = 'http://www.xiachufang.com' + item.find('a')['href']
    obj = {'name': a, 'href': href}
    foods.append(obj)
foods = json.dumps(foods)
k = open('菜谱.txt', 'a+')
k.write(foods)
k.close()
print(foods)
