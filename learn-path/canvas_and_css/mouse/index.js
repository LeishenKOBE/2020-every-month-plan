var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	WIDTH = canvas.width = document.documentElement.clientWidth,
	HEIGHT = canvas.height = document.documentElement.clientHeight,
	para = {
		num: 100,
		color: false,
		r: 0.9,
		o: 0.09,
		a: 1
	},
	color,
	color2,
	round_arr = []

function animate() {
	if (!para.color) {
		color += .1
		color2 = 'hsl(' + color + ',100%,80%)';
	}
	ctx.clearRect(0, 0, WIDTH, HEIGHT)
	for (var i = 0; i < round_arr.length; i++) {
		ctx.fillStyle = color2
		ctx.beginPath()
		ctx.arc(round_arr[i].mouseX, round_arr[i].mouseY, round_arr[i].r, 0, Math.PI * 2)
		ctx.closePath()
		ctx.fill()
		round_arr[i].r += para.r
		round_arr[i].o -= para.o

		if (round_arr[i] += para.r) {
			round_arr.splice(i, 1)
			i--
		}
	}
	window.requestAnimationFrame(animate)
}


window.onmousemove = function(event) {
	let mouseX = event.clientX
	let mouseY = event.clientY
	round_arr.push({
		mouseX,
		mouseY,
		r: para.r,
		o: 1
	})
}
if (para.color) {
	color2 = para.color;
} else {
	color = Math.random() * 360;
}

animate()
