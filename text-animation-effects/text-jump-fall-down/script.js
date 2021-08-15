class Text {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 3;
    this.vx = 0;
    this.vy = 0;
    this.color = "blue";
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.fillText("Hello World!", 0, 0);

    ctx.restore();
  }
}

var canvas = document.getElementById("canvas1"),
  ctx = canvas.getContext("2d"),
  text = new Text(),
  vx = Math.random() * 10 - 5,
  vy = Math.random() * 10 - 5,
  bounce = -0.7,
  gravity = 0.1;

text.x = canvas.width / 2;
text.y = canvas.height / 2;

(function drawFrame() {
  window.requestAnimationFrame(drawFrame, canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var left = 0,
    right = 250,
    top = 0,
    bottom = canvas.height;

  vy += gravity;
  text.x += vx;
  text.y += vy;

  if (text.x + text.radius > right) {
    text.x = right - text.radius;
    vx *= bounce;
  } else if (text.x - text.radius < left) {
    text.x = left + text.radius;
    vx *= bounce;
  }
  if (text.y + text.radius > bottom) {
    text.y = bottom - text.radius;
    vy *= bounce;
  } else if (text.y - text.radius < top) {
    text.y = top + text.radius;
    vy *= bounce;
  }
  text.draw(ctx);
})();
