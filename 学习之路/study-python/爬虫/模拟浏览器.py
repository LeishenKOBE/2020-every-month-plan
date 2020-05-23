from selenium import webdriver

import time

driver = webdriver.Chrome()
# driver.get('https://localprod.pandateacher.com/python-manuscript/hello-spiderman/')
#
# time.sleep(2)
# teacher = driver.find_element_by_id('teacher')
# teacher.send_keys('必须是吴枫呀')
# assisent = driver.find_element_by_name('assistant')
# assisent.send_keys('都喜欢')
# time.sleep(1)
# button = driver.find_element_by_class_name('sub')
# time.sleep(1)
# button.click()
# driver.close()
driver.get('https://localprod.pandateacher.com/python-manuscript/hello-spiderman/') # 访问页面
time.sleep(2) # 等待两秒，等浏览器加缓冲载数据

pageSource = driver.page_source # 获取完整渲染的网页源代码
print(type(pageSource)) # 打印pageSource的类型
print(pageSource) # 打印pageSource
driver.close() # 关闭浏览器