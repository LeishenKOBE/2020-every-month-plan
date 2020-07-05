import requests

# res = requests.get('https://res.pandateacher.com/2018-12-18-10-43-07.png')
#
# pic = res.content
#
# photo = open('ppt.jpg', 'wb')
#
# photo.write(pic)
#
# photo.close()

res = requests.get('https://localprod.pandateacher.com/python-manuscript/crawler-html/sanguo.md')
res.encoding = 'utf-8'
novel = res.text

k = open('三国演义.md', 'a+')
k.write(novel)
k.close()
print(novel)
