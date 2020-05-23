import requests
# params = {
#     'name':"geekdigging",
#     'age': '18'
# }

# headers = {

# }

# r = requests.get('https://httpbin.org/get',params=params)

# print(r.json())

# r = requests.get("https://www.baidu.com/img/bd_logo1.png?where=super")

# with open('baidu.png','wb') as f:
#     f.write(r.content)


import requests

# r = requests.get("https://www.csdn.net")
# print(type(r.cookies), r.cookies)
# for key, value in r.cookies.items():
#     print(key + '=' + value)

# headers = {
#     'cookie':'_zap=f1554d31-1519-45df-95ef-49b5d7da834c; d_c0="AFCnL10XWQ-PTlAtjG3TiOg63rTwifQNKDM=|1556456851"; _xsrf=3byY5lStlpBCh0YENUGlU5hgSDa9HnOm; __utma=51854390.1541155630.1556550259.1561007912.1562421959.8; __utmv=51854390.100-1|2=registration_date=20130814=1^3=entry_date=20130814=1; z_c0=Mi4xWFU0VEFBQUFBQUFBVUtjdlhSZFpEeGNBQUFCaEFsVk5ncTZ5WGdCelNMX3ZZdEdGUjFic0piUzZGRkoyc1N2NmZB|1573216386|75a075eb65400bb0c8b4201362d000f76902e683; q_c1=438a92f109b44e7884f82aab1ebf8ada|1582033519000|1556889269000; _ga=GA1.2.1541155630.1556550259; _gid=GA1.2.1431849190.1582948255; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1582948254,1582960222,1582960446,1582977677; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1582983449; tshl=; tst=h; KLBRSID=9d75f80756f65c61b0a50d80b4ca9b13|1582983493|1582983444',
#     'host':'www.zhihu.com',
#     'use-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
# }
# r = requests.get("https://www.zhihu.com/hot",headers=headers)
# print(r.text)import requests

# headers = {
#     'cookie': '_zap=7c875737-af7a-4d55-b265-4e3726f8bd30; _xsrf=MU9NN2kHxdMZBVlENJkgnAarY6lFlPmu; d_c0="ALCiqBcc8Q-PTryJU9ro0XH9RqT4NIEHsMU=|1566658638"; UM_distinctid=16d16b54075bed-05edc85e15710b-5373e62-1fa400-16d16b54076e3d; tst=r; q_c1=1a9d0d0f293f4880806c995d7453718f|1573961075000|1566816770000; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1574492254,1574954599,1575721552,1575721901; tgw_l7_route=f2979fdd289e2265b2f12e4f4a478330; CNZZDATA1272960301=1829573289-1568039631-%7C1575793922; capsion_ticket="2|1:0|10:1575798464|14:capsion_ticket|44:M2FlYTAzMDdkYjIzNDQzZWJhMDcyZGQyZTZiYzA1NmU=|46043c1e4e6d9c381eb18f5dd8e5ca0ddbf6da90cddf10a6845d5d8c589e7754"; z_c0="2|1:0|10:1575798467|4:z_c0|92:Mi4xLXNyV0FnQUFBQUFBc0tLb0Z4enhEeVlBQUFCZ0FsVk53eFRhWGdBSlc3WFo1Vk5RUThBMHMtanZIQ2tYcGFXV2pn|02268679f394bd32662a43630236c2fd97e439151b0132995db7322736857ab6"; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1575798469',
#     'host': 'www.zhihu.com',
#     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
# }

# r = requests.get('https://www.zhihu.com', headers = headers)
# print(r.text)

# cookies = '_zap=7c875737-af7a-4d55-b265-4e3726f8bd30; _xsrf=MU9NN2kHxdMZBVlENJkgnAarY6lFlPmu; d_c0="ALCiqBcc8Q-PTryJU9ro0XH9RqT4NIEHsMU=|1566658638"; UM_distinctid=16d16b54075bed-05edc85e15710b-5373e62-1fa400-16d16b54076e3d; tst=r; q_c1=1a9d0d0f293f4880806c995d7453718f|1573961075000|1566816770000; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1574492254,1574954599,1575721552,1575721901; tgw_l7_route=f2979fdd289e2265b2f12e4f4a478330; CNZZDATA1272960301=1829573289-1568039631-%7C1575793922; capsion_ticket="2|1:0|10:1575798464|14:capsion_ticket|44:M2FlYTAzMDdkYjIzNDQzZWJhMDcyZGQyZTZiYzA1NmU=|46043c1e4e6d9c381eb18f5dd8e5ca0ddbf6da90cddf10a6845d5d8c589e7754"; z_c0="2|1:0|10:1575798467|4:z_c0|92:Mi4xLXNyV0FnQUFBQUFBc0tLb0Z4enhEeVlBQUFCZ0FsVk53eFRhWGdBSlc3WFo1Vk5RUThBMHMtanZIQ2tYcGFXV2pn|02268679f394bd32662a43630236c2fd97e439151b0132995db7322736857ab6"; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1575798469'

# jar = requests.cookies.RequestsCookieJar()

# for cookie in cookies.split(';'):
#         key,val = cookie.split('=',1)
#         jar.set(key,val)

# headers_request = {
#     'host' : "www.zhihu.com",
#     'user-agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
# }
# r = requests.get('https://www.zhihu.com',cookie = jar,headers = headers_request)
# print(r.text)
import requests
from bs4 import BeautifulSoup

response = requests.get('https://www.geekdigging.com/')
soup = BeautifulSoup(response.content, "html5lib")
print(soup.prettify())