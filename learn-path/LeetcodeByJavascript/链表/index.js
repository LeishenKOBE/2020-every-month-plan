/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-23 22:07:47
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-23 22:37:48
 */
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class linkNode {
    constructor() {
        this.length = 0
        this.head = null
    }
    // 增删改查
    append(element) {
        let node = new Node(element)
        let cur

        //两张情况

        if (this.head === null) {
            this.head = node
        } else {
            cur = head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = node
        }
        this.lentg += 1
    }
    print() {
        let cur = this.head
        let res = []
        while (cur) {
            res.push(cur.element)
            cur = cur.next
        }
        console.log()
        return res.join("===>")
    }
}


let node = new linkNode()

node.append('许嵩')
node.append('许嵩')
node.append('许嵩')
node.append('许嵩')
node.append('许嵩')
node.append('许嵩')

node.print()