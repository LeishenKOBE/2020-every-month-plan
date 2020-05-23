function drawCircle(ctx, r, x, y, ard, dir) {
	ctx.beginPath()
	if (dir) {
		ctx.moveTo(x + r + r * Math.cos(ard * Math.PI), y + r - r * Math.sin(ard * Math.PI))
	} else {
		ctx.moveTo(x + r + r * Math.cos(ard * Math.PI), y + r + r * Math.sin(ard * Math.PI))
	}
	ctx.lineTo(x + r, y + r)
	ctx.lineTo(x + 2 * r, y + r)
	ctx.arc(x, y, r, 0, ard * Math.PI, dir)

	ctx.strokeStyle = 'red'
	ctx.stroke()
}
