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
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = "17px Arial";
  ctx.fillText("Hello World!", myText.x, myText.y);
}
function animate(myText, canvas, ctx, startTime) {
  // update
  var time = new Date().getTime() - startTime;

  var linearSpeed = 100;
  // pixels / second
  var newY = (linearSpeed * time) / 1000;

  if (newY < canvas.height - myText.height / 1) {
    myText.y = newY;
  }

  // clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawText(myText, ctx);

  // request new frame
  requestAnimFrame(function () {
    animate(myText, canvas, ctx, startTime);
  });
}
var myText = {
  x: 100,
  y: 0,
  width: 100,
  height: 9,
};

drawText(myText, ctx);

// wait one second before starting animation
setTimeout(function () {
  var startTime = new Date().getTime();
  animate(myText, canvas, ctx, startTime);
}, 1000);
