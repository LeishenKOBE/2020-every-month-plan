const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let x = 10

// let width = ctx.canvas.width
// let height = ctx.canvas.height

// console.log(width, height)

// ctx.fillStyle = 'rgb(200,0,0)'
// ctx.fillRect(10, 10, 55, 50)

// ctx.fillStyle = 'rgba(0,0,200,0.5)'
// ctx.fillRect(30, 30, 55, 50)
//绘制对话框
// ctx.beginPath()
// ctx.moveTo(75, 25)
// ctx.quadraticCurveTo(25, 25, 25, 62.5)
// ctx.quadraticCurveTo(25, 100, 50, 100)
// ctx.quadraticCurveTo(50, 120, 30, 125)
// ctx.quadraticCurveTo(60, 120, 65, 100)
// ctx.quadraticCurveTo(125, 100, 125, 62.5)
// ctx.quadraticCurveTo(125, 25, 75, 25)
// ctx.stroke()

// function MClick(e) {
// 	console.log('鼠标点击了事件')
// }

// canvas.addEventListener('mousedown', MClick, false)


// ctx.moveTo()



// ctx.beginPath()
// ctx.moveTo(0, 100)
// ctx.lineTo(100, 100)
// ctx.lineTo(200, 100)	
// ctx.arc(100, 100, 100, 0, Math.PI, true)
// ctx.fillStyle = 'red'
// ctx.fill()

// drawCircle(ctx, 100, 100, 100, 1, true)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function Ball(x, y, dx, dy, radius, color) {
	this.x = x
	this.y = y
	this.dx = dx
	this.dy = dy
	this.radius = radius
	this.color = color

	this.draw = function() {
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
		ctx.fillStyle = this.color
		ctx.fill()
		ctx.closePath()
	}

	this.update = function() {
		if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
			this.dx = -this.dx
		}
		if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
			this.dy = -this.dy
		}
		this.x += this.dx
		this.y += this.dy
		this.draw()
	}
}

let ball = new Ball(300, 300, 1, 1, 50, 'red')
let ballArray = []
let colorArray = ['#C004D9', '#AB05F2', '#6D0FF2', '#3316F2', '#0D0D0D']
for (let i = 0; i < 100; i++) {
	let radius = Math.random() * 4 + 1;
	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height
	let dx = (Math.random() - 0.5) * 2
	let dy = (Math.random() - 0.5) * 2
	let color = colorArray[Math.floor(Math.random() * 5)]
	ballArray.push(new Ball(x, y, dx, dy, radius, color))
}

function animate() {
	requestAnimationFrame(animate)
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	for (let n of ballArray) {
		n.update()
	}
}
animate()
