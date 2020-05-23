# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class DoubanItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    publish = scrapy.Field()
    score = scrapy.Field()
book = DoubanItem()
book['title'] = '海边的卡夫卡'
book['publish'] = '[日] 村上春树 / 林少华 / 上海译文出版社'
book['score'] = '8.1'

print(book)
