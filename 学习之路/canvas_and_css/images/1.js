var ctx = document.getElementById('canvas')
var content = ctx.getContext('2d')
var round = []
var WIDTH
var HEIGHT
var initRoundPopulation = 80


WIDTH = document.documentElement.clientWidth;
HEIGHT = document.documentElement.clientHeight;

ctx.width = WIDTH;
ctx.height = HEIGHT;

function Round_item(index, x, y) {
	this.index = index;
	this.x = x;
	this.y = y;
	this.r = Math.random() * 2 + 1;
	var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
	this.color = "rgba(255,255,255," + alpha + ")";
}

Round_item.prototype.draw = function() {
	content.fillStyle = this.color;
	content.shadowBlur = this.r * 2;
	content.beginPath();
	content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	content.closePath();
	content.fill();
};

Round_item.prototype.move = function() {
	this.y -= 0.15;
	if (this.y <= -10) {
		this.y = HEIGHT + 10;
	}
	this.draw();
};

function animate() {
	content.clearRect(0, 0, WIDTH, HEIGHT);

	for (var i of round) {
		round[i].move();
	}
	requestAnimationFrame(animate)
}




function init() {
	for (var i = 0; i < initRoundPopulation; i++) {
		round[i] = new Round_item(i, Math.random() * WIDTH, Math.random() * HEIGHT);
		round[i].draw();
	}
	animate();

}

init();
