var canvas = document.getElementById("canvas1"),
  ctx = canvas.getContext("2d");

(w = canvas.width),
  (h = canvas.height),
  (cx = w * 0.5), // center of canvas
  (cy = h * 0.5),
  (angleStep = 0.1),
  (txt = "Hello World!");
ctx.fillStyle = "white";
ctx.font = "bold 30px sans-serif"; // set font
ctx.textAlign = "center"; // align text in center
ctx.textBaseline = "middle";

(function rotate() {
  ctx.clearRect(0, 0, w, h); // clear canvas
  ctx.translate(cx, cy); // translate to center of rotation
  ctx.rotate(angleStep); // rotate (accumulative)
  ctx.translate(-cx, -cy); // translate back
  ctx.fillText(txt, cx, cy); // draw text at rotated center

  requestAnimationFrame(rotate); // loop
})();
