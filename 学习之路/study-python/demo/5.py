'''
@Author: your name
@Date: 2020-04-29 16:23:40
@LastEditTime: 2020-04-29 17:00:57
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: /study-python/demo/5.py
'''
import requests
import os
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4122.7 Safari/537.36'
}

res = requests.get('https://daily.zhihu.com/', headers=headers)

bs_text = BeautifulSoup(res.text, 'html.parser')

img_link = bs_text.find_all(class_='preview-image')

img_url = []

for i in img_link:
    link = i.get('src')
    img_url.append(link)

for index, j in enumerate(img_url):
    r = requests.get(j).content
    with open(str(index)+'.jpg', 'wb') as f:
        f.write(r)
