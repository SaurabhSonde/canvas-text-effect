var ctx = document.querySelector("canvas").getContext("2d"),
  dashLen = 220,
  dashOffset = dashLen,
  speed = 5,
  txt = "STROKE-ON CANVAS",
  x = 30,
  i = 0;

ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
ctx.lineWidth = 5;
ctx.lineJoin = "round";
ctx.globalAlpha = 2 / 3;
ctx.strokeStyle = ctx.fillStyle = "#1f2f90";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed; // reduce dash length
  ctx.strokeText(txt[i], x, 90); // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);
  // animate
  else {
    ctx.fillText(txt[i], x, 90); // fill final letter
    dashOffset = dashLen; // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random()); // random y-delta
    ctx.rotate(Math.random() * 0.005); // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();

// var xText = -100;
// var yText = 150;

// // This will update the canvas as fast as possible (not good)
// setInterval(function () {
//   // Clear the canvas
//   ctx.fillStyle = "#F0F";
//   ctx.fillRect(0, 0, c.width, c.height);

//   ctx.save();

//   // We create a clip rect
//   ctx.rect(200, 0, 400, 400);
//   ctx.clip();

//   // Draw text
//   ctx.fillStyle = "#FFF";
//   ctx.font = "30px Arial";
//   ctx.fillText("Hello World", xText, yText);

//   ctx.restore();

//   // Increase the text x position
//   if (xText < 200) {
//     xText += 0.5;
//   }
// }, 15);
