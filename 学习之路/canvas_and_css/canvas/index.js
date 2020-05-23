const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')
let x = 100
console.log(Math.atan2(1, -1) * 180 / Math.PI)
animatetion()
// ctx.closePath()


function animatetion() {
	requestAnimationFrame(animatetion)
	ctx.beginPath()
	ctx.clearRect(0, 0, 800, 600)
	if (x == 800) {
		x = 0
	}
	ctx.arc(x, 100, 100, 0, 2 * Math.PI, false)
	ctx.stroke()
	x += 10

}
