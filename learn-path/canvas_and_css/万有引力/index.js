/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-17 16:45:30
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-17 17:32:29
 */
const vanvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    scale(n) {
        this.x *= n
        this.y *= n
        return this
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    normalize() {
        var m = this.mag()
        if (m != 0 && m != 1) {
            this.scale(1 / m)
        }
        return this
    }

    add(other) {
        this.x += other.x
        this.y += other.y
        return this
    }

    sub(other) {
        this.x -= other.x
        this.y -= other.y
        return this
    }

    static add(one, other) {
        return new Vector(one.x + other.x, one.y + other.y)
    }

    static sub(one, other) {
        return new Vector(one.x - other.x, one.y - other.y)
    }

    static dist(one, other) {
        var dx = one.x - other.x
        var dy = one.y - other.y
        return Math.sqrt(dx * dx + dy * dy)
    }
}

function gravity(sun, earth) {
    var dist = Vector.dist(sun.p, earth.p)
    var f = sun.m * earth.m / (dist * dist)
    var vec = Vector.sub(sun.p, earth.p)
    return vec.normalize().scale(f)
}

class Ball {
    constructor() {
        this.p = new Vector(0, 0)
        this.m = 0
        this.radius = 20
        this.color = 'white'
    }

    draw(context) {
        context.save()
        context.translate(this.p.x, this.p.y)
        context.beginPath()
        context.arc(0, 0, this.radius, 0, 2 * Math.PI)
        context.fillStyle = this.color
        context.fill()
        context.restore()
    }
}
var sun = new Ball()
sun.radius = 30
sun.color = 'red'
sun.p = new Vector(canvas.width / 2, canvas.height / 2)
sun.m = 1000

var earth = new Ball()
earth.radius = 3
earth.color = 'aqua'
earth.p = new Vector(canvas.width / 2 + 100, canvas.height / 2 + 80)
earth.m = 1

var v = new Vector(-2.5, 1)

var drawPath = true
canvas.addEventListener('click', _ => drawPath = !drawPath)


    ; (function drawFrame() {
        window.requestAnimationFrame(drawFrame)
        if (!drawPath) {
            context.clearRect(0, 0, canvas.width, canvas.height)
        }
        sun.draw(context)
        var g = gravity(sun, earth)
        var a = g.scale(1 / earth.m)
        v.add(a)
        earth.p.add(v)
        earth.draw(context)
    })()