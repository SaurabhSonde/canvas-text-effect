class Text {
  constructor() {
    this.x = 120;
    this.y = 0;
    this.radius = 10;
    this.vx = 0;
    this.vy = 0;

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
  log = document.getElementById("log"),
  text = new Text(),
  easing = 0.08,
  targetX = canvas.width / 2,
  animRequest;

text.y = canvas.height / 2;

(function drawFrame() {
  animRequest = window.requestAnimationFrame(drawFrame, canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var dx = targetX - text.x;

  if (Math.abs(dx) < 1) {
    text.x = targetX;

    log.value = "Animation done!";
  } else {
    var vx = dx * easing;
    text.x += vx;
  }
  text.draw(ctx);
})();
