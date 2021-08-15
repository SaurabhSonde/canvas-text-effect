class Text {
  constructor(radius, color) {
    this.x = 0;
    this.y = 0;
    this.radius = 30;

    this.color = "blue";
    this.lineWidth = 1;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.fillStyle = this.color;

    ctx.fillText("Hello World!", 0, 0);

    ctx.restore();
  }
}

var canvas = document.getElementById("canvas1"),
  ctx = canvas.getContext("2d"),
  text = new Text(),
  angle = 0,
  centerX = 110,
  centerY = canvas.height / 2,
  radiusX = 100,
  radiusY = 70,
  speed = 0.03;

(function drawFrame() {
  window.requestAnimationFrame(drawFrame, canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  text.x = centerX + Math.sin(angle) * radiusX;
  text.y = centerY + Math.cos(angle) * radiusY;
  angle += speed;
  text.draw(ctx);
})();
