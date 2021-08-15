var canvas = document.getElementById("canvas1"),
  ctx = canvas.getContext("2d");

var start = 0;
setInterval(function () {
  //speed
  start += 4;

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText("Hello World!", start, 250);
}, 40);
