/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-17 18:28:50
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-27 16:40:53
 */
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
let WIDTH, HEIGHT, initRoundPopulation = 80, round = [];

WIDTH = document.documentElement.clientWidth
HEIGHT = document.documentElement.clientHeight

canvas.width = WIDTH
canvas.height = HEIGHT

class Round_item {
    constructor(index, x, y) {
        this.index = index
        this.x = x
        this.y = y
        this.r = Math.random() * 2 + 1
        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.color = "rgba(255,255,255," + alpha + ")";
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.shadowBlur = this.r * 2
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        ctx.closePath()
        ctx.fill()
    }
    move() {
        this.y -= 0.15;
        if (this.y <= -10) {
            this.y = HEIGHT + 10;
        }
        this.draw();
    }
}
function init() {
    for (var i = 0; i < initRoundPopulation; i++) {
        round[i] = new Round_item(i, Math.random() * WIDTH, Math.random() * HEIGHT);
        round[i].draw();

    }
}
function animate() {
    content.clearRect(0, 0, WIDTH, HEIGHT);
    for(let i in round){
        round[i].move()
    }
    requestAnimationFrame(animate)
}
init()