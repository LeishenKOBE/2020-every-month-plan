/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-17 18:11:34
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-17 18:20:49
 */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class Ball {
    constructor() {
        this.x = 0
        this.y = 0
        this.radius = 20
    }

    draw(context) {
        context.save()
        context.translate(this.x, this.y)
        context.fillStyle = 'red';
        context.beginPath()
        context.arc(0, 0, this.radius, 0, Math.PI * 2);
        context.fill()
        context.restore()
    }
}