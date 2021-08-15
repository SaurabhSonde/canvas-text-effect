let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

function drawScreen() {
  //background
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 640, 480);
  //image
  ctx.globalAlpha = 0.25;
  ctx.drawImage(userText, 0, 0);
  //text
  ctx.font = "30px Sans-Serif";
  ctx.textBaseline = "top";

  if (fadeIn) {
    alpha += 0.01;
    if (alpha >= 1) {
      alpha = 1;
      fadeIn = false;
    }
  } else {
    alpha -= 0.01;
    if (alpha < 0) {
      alpha = 0;
      fadeIn = true;
    }
  }

  ctx.globalAlpha = alpha;
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText(text, 70, 50);
}

let text = "Hello World!";
let alpha = 0;
let fadeIn = true;
//image
let userText = new Image();

//box
function gameLoop() {
  window.setTimeout(gameLoop, 20);
  drawScreen();
}

gameLoop();
