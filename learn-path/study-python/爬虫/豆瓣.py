import requests
from bs4 import BeautifulSoup

url = 'https://movie.douban.com/top250'
header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
}

res = requests.get(url, headers=header)

douban = BeautifulSoup(res.text, 'html.parser')

douban_title = douban.find_all('span', class_='title')

print(douban_title)
