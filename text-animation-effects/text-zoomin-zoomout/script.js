window.requestAnimationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (a) {
      window.setTimeout(a, 1e3 / 60);
    }
  );
})();

var canvas = document.getElementById("canvas1"),
  ctx = canvas.getContext("2d"),
  txt = "Hello",
  textCanvas = document.createElement("canvas"),
  textCtx = textCanvas.getContext("2d"),
  index = 0,
  remain = 20,
  remainCount = remain,
  dList = [
    { x: 0, y: 0, angle: 0, scale: 1 },
    { x: 0, y: -10, angle: 0, scale: 1.1 },
    { x: 0, y: -17, angle: 0, scale: 1.3 },
    { x: 0, y: -22, angle: 0, scale: 1.5 },
    { x: 0, y: -25, angle: 0, scale: 1.7 },
    { x: 0, y: -25, angle: 0, scale: 2.0 },
    { x: 0, y: -22, angle: 0, scale: 2.0 },
    { x: 0, y: -17, angle: 0, scale: 1.5 },
    { x: 0, y: -10, angle: 0, scale: 1.3 },
    { x: 0, y: 0, angle: 0, scale: 1 },
  ];
textCtx.fillStyle = "white";
textCtx.font = "40px Arial";

textCtx.fillText(txt, 100, 100);

var loop = function () {
  canvas.width = canvas.width;

  ctx.save();
  ctx.translate(
    dList[index].x + textCanvas.width / 2,
    dList[index].y + textCanvas.height / 2
  );
  ctx.rotate((dList[index].angle * Math.PI) / 180);
  ctx.translate(
    (-1 * textCanvas.width * dList[index].scale) / 2,
    (-1 * textCanvas.height * dList[index].scale) / 2
  );
  ctx.drawImage(
    textCanvas,
    0,
    0,
    textCanvas.width * dList[index].scale,
    textCanvas.height * dList[index].scale
  );
  ctx.restore();
  if (index >= dList.length - 1) {
    if (remainCount >= 0) {
      remainCount--;
    } else {
      index = 0;
      remainCount = remain;
    }
  } else {
    index++;
  }
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
