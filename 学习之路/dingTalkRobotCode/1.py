'''
                       _oo0oo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      0\  =  /0
                    ___/`---'\___
                  .' \\|     |// '.
                 / \\|||  :  |||// \
                / _||||| -:- |||||- \
               |   | \\\  - /// |   |
               | \_|  ''\---/''  |_/ |
               \  .-\__  '-'  ___/-. /
             ___'. .'  /--.--\  `. .'___
          ."" '<  `.___\_<|>_/___.' >' "".
         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
         \  \ `_.   \_ __\ /__ _/   .-` /  /
     =====`-.____`.___ \_____/___.-`___.-'=====
                       `=---='


     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

           佛祖保佑       永不宕机     永无BUG

       佛曰:  
               写字楼里写字间，写字间里程序员；  
               程序人员写程序，又拿程序换酒钱。  
               酒醒只在网上坐，酒醉还来网下眠；  
               酒醉酒醒日复日，网上网下年复年。  
               但愿老死电脑间，不愿鞠躬老板前；  
               奔驰宝马贵者趣，公交自行程序员。  
               别人笑我忒疯癫，我笑自己命太贱；  
               不见满街漂亮妹，哪个归得程序员？

@Description: 
@Author: 石东昭
@Date: 2020-05-21 15:56:04
@LastEditors: shidongzhao
@LastEditTime: 2020-05-21 17:54:30
'''
# https://oapi.dingtalk.com/robot/send?access_token=b386b2008b69e98cbb3f14235b058f0adc29c17a55a6dec64dd6abef8bdf658e


import requests
import json
import time
import hmac
import hashlib
import base64
import urllib.parse

timestamp = str(round(time.time() * 1000))
print(time.time())
secret = 'SEC662eab928173979600e6b91e25433eacb28e6e3b63205f7ff471728685b463ac'
secret_enc = secret.encode('utf-8')
string_to_sign = '{}\n{}'.format(timestamp, secret)
string_to_sign_enc = string_to_sign.encode('utf-8')
hmac_code = hmac.new(secret_enc, string_to_sign_enc, digestmod=hashlib.sha256).digest()
sign = urllib.parse.quote_plus(base64.b64encode(hmac_code))

def dingmessage():
    webhook = 'https://oapi.dingtalk.com/robot/send?access_token=b386b2008b69e98cbb3f14235b058f0adc29c17a55a6dec64dd6abef8bdf658e&timestamp='+timestamp+'&sign='+sign
    header = {
        "Content-Type": 'application/json',
        "Charset": "UTF-8"
    }

    text = '上班下班要注意打卡'
    message = {
        'msgtype': 'text',
        "text": {
            "content": text
        },
        'at': {
            'isAtAll': True
        }
    }
    message_json = json.dumps(message)
    # info = requests.post(url=webhook, data=message_json, headers=header)

if __name__ == '__main__':
    dingmessage()
