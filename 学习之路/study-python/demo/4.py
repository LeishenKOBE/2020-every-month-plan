import requests
from bs4 import BeautifulSoup

res = requests.get('https://localprod.pandateacher.com/python-manuscript/crawler-html/spider-men5.0.html')

html = res.text
soup = BeautifulSoup(html, 'html.parser')

item = soup.find_all(class_='books')

for i in item:
    print('想找的数据都在这里：\n', i)
