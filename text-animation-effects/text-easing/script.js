// Declare as variable
let canvas;
let context;
let X = 0;
let Y = 0;
let movingSpeed = 50;
let secondsPassed = 0;
let oldTimeStamp = 0;
let timePassed = 0;

// Listen to the onLoad event
window.onload = init;

// Trigger init function when the page has loaded
function init() {
  canvas = document.getElementById("canvas1");
  context = canvas.getContext("2d");

  // Request an animation frame for the first time
  // The gameLoop() function will be called as a callback of this request
  window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
  // Calculate how much time has passed
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  // Update game objects
  update(secondsPassed);

  // Perform the drawing operation
  draw();

  // The loop function has reached it's end
  // Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}

function update(secondsPassed) {
  timePassed += secondsPassed;

  // Set the speed of the objects
  // Use different easing functions for different effects
  X = easeInOutQuint(timePassed, 50, 500, 1.5);
  Y = easeLinear(timePassed, 50, 250, 1.5);
}

// Example easing functions
function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
}

function easeLinear(t, b, c, d) {
  return (c * t) / d + b;
}

function draw() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a rectangle on the canvas
  context.fillStyle = "red";
  context.font = "30px Arial";
  context.fillText("Hello World!", X, Y);
}
