class Text {
  constructor(radius, color) {
    this.x = 0;
    this.y = 0;
    this.color = "red";
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillText("Hello World", 0, 0);
    ctx.restore();
  }
}

var canvas = document.getElementById("canvas1"),
  ctx = canvas.getContext("2d"),
  text = new Text(),
  angle = 0;

text.x = canvas.width / 2;
text.y = canvas.height / 2;

(function drawFrame() {
  window.requestAnimationFrame(drawFrame, canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  text.y = canvas.height / 2 + Math.sin(angle) * 50;
  angle += 0.1;
  text.draw(ctx);
})();
