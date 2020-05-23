import requests
from lxml import etree
import time

url = 'https://movie.douban.com/subject/33417030/comments?start=%d&limit=20&sort=new_score&status=P'
headers = {
    'Accept': '*/*',
    # 'Accept-Encoding': 'gzip, deflate, sdch, br',
    'Accept-Language': 'zh-CN, zh;q=0.8',
    'Connection': 'keep-alive',
    'Host': 'movie.douban.com',
    'Referer': 'https://movie.douban.com/subject/33417030/comments?start=0&limit=20&sort=new_score&status=P',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER',
    'Cookie': 'douban-fav-remind=1; viewed="10546125"; gr_user_id=c4e54069-a814-4f21-a09e-8a80c42f53f0; ll="108288"; bid=TMpV8lKxof0; ap_v=0,6.0; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1588348338%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DXVowY51MAT3I6fKkcCEegJGZKb-2B7gtUQ3giBQZs-v8E0btNBq95zSVbq9LIpcg%26wd%3D%26eqid%3D857283b50017f9e7000000025eac45ae%22%5D; UM_distinctid=171d0f03f7b32-0f71896a4005d2-2b6f686a-1fa400-171d0f03f7cc7; _vwo_uuid_v2=DA957BB7A744E8DE2AC3067C7E79CDB3F|03e3d4fda0abc3cf2f4235d837b621a4; _pk_id.100001.4cf6=5b85386f4800b039.1554623881.3.1588348650.1560851360.; _pk_ses.100001.4cf6=*; __utma=30149280.2057032338.1554623881.1578157123.1588348338.8; __utmb=30149280.0.10.1588348338; __utmc=30149280; __utmz=30149280.1588348338.8.6.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.1465884913.1554623881.1560851360.1588348338.3; __utmb=223695111.0.10.1588348338; __utmc=223695111; __utmz=223695111.1588348338.3.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; CNZZDATA1256793290=582809397-1588344319-https%253A%252F%252Fwww.baidu.com%252F%7C1588344319'
}


if __name__ == '__main__':
    f = open('./climb.csv', mode='a', encoding='utf-8')
    f.write('author\tcomment\tvote\n')

    for i in range(10):
        if(i == 25):
            url_climb = url % (490)
        else:
            url_climb = url % (i*20)
        res = requests.get(url_climb, headers=headers)
        res.encoding = 'utf-8'
        text = res.text
        # with open('./climb.html',mode='w',encoding='utf-8') as f:
        #     f.write(text)
        html = etree.HTML(text)
        comments = html.xpath(
            '//div[@id="comments"]/div[@class="comment-item"]')
        for comment in comments:
            author = comment.xpath(
                './div[@class="avatar"]/a/@title')[0].strip()
            p = comment.xpath('.//span[@class="short"]/text()')[0].strip()
            vote = comment.xpath('.//span[@class="votes"]/text()')[0].strip()

            f.write('%s\t%s\t%s\n' %(author, p, vote))
            time.sleep(1)
    f.close()