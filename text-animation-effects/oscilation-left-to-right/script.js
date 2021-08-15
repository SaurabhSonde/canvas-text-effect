var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

window.requestAnimFrame = (function (callback) {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function drawText(myText, ctx) {
  ctx.fillStyle = "red";
  ctx.font = "20px Arial";
  ctx.fillText("Hello World!", myText.x, myText.y);
}
function animate(myText, canvas, ctx, startTime) {
  // update
  var time = new Date().getTime() - startTime;
  var amplitude = 150;

  // in ms
  var period = 2000;
  var centerX = canvas.width / 2 - myText.width / 2;
  var nextX = amplitude * Math.sin((time * 2 * Math.PI) / period) + centerX;
  myText.x = nextX;

  // clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw
  drawText(myText, ctx);

  // request new frame
  requestAnimFrame(function () {
    animate(myText, canvas, ctx, startTime);
  });
}

//manage text positon here
var myText = {
  x: 250,
  y: 70,
  width: 100,
};

drawText(myText, ctx);

// wait one second before starting animation
setTimeout(function () {
  var startTime = new Date().getTime();
  animate(myText, canvas, ctx, startTime);
}, 1000);
