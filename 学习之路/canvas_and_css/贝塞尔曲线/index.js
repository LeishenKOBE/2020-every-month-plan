const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(103, 141)
ctx.quadraticCurveTo(145, 268, 415, 59)

// ctx.strokeStyle = 'white'
ctx.lineWidth = 20
ctx.stroke()
