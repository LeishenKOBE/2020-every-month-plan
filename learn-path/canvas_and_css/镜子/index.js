const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(200, 200)
ctx.fillStyle = 'black'
ctx.lineWidth = 10
ctx.stroke()
ctx.closePath()
