class Text {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 3;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.color = "blue";
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.fillStyle = this.color;

    ctx.fillText("Hello World!", 0, 0);

    ctx.restore();
  }
}

var canvas = document.getElementById("canvas1"),
  ctx = canvas.getContext("2d"),
  text = new Text(),
  vx = Math.random() * 10 - 5,
  vy = Math.random() * 10 - 5;

text.x = canvas.width / 2;
text.y = canvas.height / 2;

(function drawFrame() {
  window.requestAnimationFrame(drawFrame, canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // manage text hitting position
  var left = 0,
    right = 250,
    top = 0,
    bottom = canvas.height;

  text.x += vx;
  text.y += vy;

  if (text.x + text.radius > right) {
    text.x = right - text.radius;
    vx *= -1;
  } else if (text.x - text.radius < left) {
    text.x = left + text.radius;
    vx *= -1;
  }
  if (text.y + text.radius > bottom) {
    text.y = bottom - text.radius;
    vy *= -1;
  } else if (text.y - text.radius < top) {
    text.y = top + text.radius;
    vy *= -1;
  }
  text.draw(ctx);
})();
