const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')


// context.beginPath()
// context.arc(100, 100, 1, 0, Math.PI * 2, true)
// context.closePath()
// context.arc(100, 100, 50, 0, 1.5 * Math.PI, false)
// context.strokeStyle = 'black'
// context.stroke()

// 画的长方形
// context.beginPath()

// context.moveTo(100, 100)
// context.lineTo(200, 400);
// context.lineTo(400, 400);
// context.lineWidth = 2;
// context.lineCap = 'round';



// context.strokeStyle = 'red';
// context.closePath();
// context.stroke();

// 阴影

// context.beginPath()
// context.arc(200, 200, 100, 0, 2 * Math.PI, true)
// context.fillStyle = 'white'
// context.shadowBlur = 200
// context.shadowColor = 'white'
// context.fill()
//渐变

// var grd = context.createLinearGradient(100, 100, 100, 200)
// grd.addColorStop(0, 'rgb(255, 0, 0)');
// grd.addColorStop(0.2, 'rgb(255, 165, 0)');
// grd.addColorStop(0.3, 'rgb(255, 255, 0)');
// grd.addColorStop(0.5, 'rgb(0, 255, 0)');
// grd.addColorStop(0.7, 'rgb(0, 127, 255)');
// grd.addColorStop(0.9, 'rgb(0, 0, 255)');
// grd.addColorStop(1, 'rgb(139, 0, 255)');
// context.fillStyle = grd
// context.fillRect(100, 100, 200, 200)

// 缩放

// context.strokeStyle = 'white'
// context.strokeRect(5, 5, 50, 25)
// context.scale(2, 2)
// context.strokeRect(5, 5, 50, 25)
// context.scale(2, 2)
// context.strokeRect(5,5,50,25);

// //旋转

context.fillStyle = 'white'
context.rotate(20 * Math.PI / 180)
context.fillRect(70, 30, 200, 100)
