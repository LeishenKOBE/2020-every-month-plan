const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.onmousedown = function(e) {
	console.log(e)
	ctx.beginPath()
	ctx.moveTo(e.clientX, e.clientY)
	ctx.strokeStyle = 'white'
	canvas.onmousemove = function(e) {
		ctx.lineTo(e.clientX, e.clientY)
		ctx.stroke()
	}
	canvas.onmouseup = function(e) {
		canvas.onmousemove = null
	}
	canvas.oncontextmenu = function(e) {
		e.preventDefault()
		ctx.clearRect(0, 0, 1024, 768)
	}
}
