import requests
from bs4 import BeautifulSoup
import smtplib

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
}

url = 'http://www.weather.com.cn/weather/101010100.shtml'

res = requests.get(url, headers=headers)

res.encoding = 'utf-8'
bsdata = BeautifulSoup(res.text, 'html.parser')
data1 = bsdata.find(class_='tem')
data2 = bsdata.find(class_='wea')

# 邮箱
mailhost = 'smtp.qq.com'
qqmail = smtplib.SMTP()

qqmail.connect(mailhost, 25)

account = input('请输入你的邮箱：')
password = input('请输入你的密码：')
qqmail.login(account, password)
receiver = input('请输入收件人的邮箱：')

