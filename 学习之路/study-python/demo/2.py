# def print_str():
#     str1 = input('请输入你的名字：')
#     print(str1)
#
#
# print_str()
# list2 = [5, 6, 7, 8, 9]
# print(list2[:])
# print(list2[2:])
# print(list2[:2])
# print(list2[1:3])
# print(list2[2:4])

# str1 = 'love'
#
# for i in str1:
#     print(i)

# student = ['党志文', '浦欣然', '罗鸿朗', '姜信然', '居俊德', '宿鸿福', '张成和', '林景辉', '戴英华', '马鸿宝', '郑翰音', '厉和煦', '钟英纵', '卢信然', '任正真',
#            '翟彭勃', '蒋华清', '双英朗', '金文柏', '饶永思', '堵宏盛', '濮嘉澍', '戈睿慈', '邰子默', '于斯年', '扈元驹', '厍良工', '甘锐泽', '姚兴怀', '殳英杰',
#            '吴鸿福', '王永年', '宫锐泽', '黎兴发', '朱乐贤', '关乐童', '养永寿', '养承嗣', '贾康成', '韩修齐', '彭凯凯', '白天干', '瞿学义', '那同济', '衡星文',
#            '公兴怀', '宫嘉熙', '牧乐邦', '温彭祖', '桂永怡']
# for i in student:
#     print(i + '在不在？')

# dict = {'日本': '东京', '英国': '伦敦', '法国': '巴黎'}
# for i in dict:
#     print(i)
# a = [91, 95, 97, 99]
# b = [92, 93, 96, 98]
#
# for i in b:
#     a.append(i)
# a.sort()
# print(a)


def menu(*arg):
    print(*arg)


menu('Hello', '许嵩')
