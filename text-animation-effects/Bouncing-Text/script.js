var canvas = document.getElementById("canvas1");
context = canvas.getContext("2d");
setInterval(draw, 10);

var initialX3 = 650;
var initialY3 = 250;

var x3 = 10;
var y3 = 10;

function draw() {
  context.clearRect(0, 0, 650, 250);

  context.fillStyle = "red";

  context.font = "50px Arial";
  context.fillText("Hello World!", initialX3, initialY3);

  if (initialX3 < 0 || initialX3 > 650) x3 = -x3;

  if (initialY3 < 0 || initialY3 > 250) y3 = -y3;
  initialX3 += x3;
  initialY3 += y3;
}
