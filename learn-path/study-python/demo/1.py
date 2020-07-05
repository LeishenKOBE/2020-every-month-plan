class Person:
    def __init__(self, pos):
        self.pos = pos
        self.arr = [1, 2, 3, 4, 5]

    def print_pos(self):
        print(self.arr)

    def push_arr(self):
        i = input('请输入要的文字')
        self.arr.append(i)


a = Person('许嵩')
a.push_arr()
a.print_pos()
