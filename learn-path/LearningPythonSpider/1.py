# print(type('1'))
# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# for i in range(len(arr)):
#     print(arr[i])

# 斐波那契数列


# def feb(n):
#     if n == 1:
#         return 1
#     return n * feb(n - 1)


# print(feb(15))
# import os
# file = open('./1.txt', encoding='utf-8')
# print(file.read())
# def division(x, y):
#     try:
#         return x / y
#     except:
#         print("程序报错了")
#     finally:
#         print("Hello world")


# division(100, 0)


# import calendar

# print(calendar.calendar(theyear=2020, w=2, l=1, c=6))

# import xlrd
# workbook = xlrd.open_workbook('1.xlsx')
# print(workbook.sheet_by_index(1))

import xlsxwriter

workbook = xlsxwriter.Workbook('test.xlsx')
sheet1 = workbook.add_worksheet('test_sheet')
workbook.close()
