//Lets create a simple particle system in HTML5 canvas and JS

//Initializing the canvas
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

//Canvas dimensions using the variables W and H
var W = 640;
var H = 480;
canvas.width = W;
canvas.height = H;

//Lets create an array of words
var particles = [];
for (var i = 0; i < 10; i++) {
  //This will add 10 words to the array with random positions
  particles.push(new create_particle());
}

//Lets create a function which will help us to create multiple particles
function create_particle() {
  //Places the words at random positions on the canvas
  this.x = Math.random() * W; //Notice I am using the W again here with a random number between 0 and 1.
  this.y = Math.random() * H; //Notice I am using the H again here with a random number between 0 and 1.

  //Lets add random velocity to each particle.
  this.vx = Math.random() * -10 - 10; // Change the number 50 to change the speed.  Lower is slower.
  this.vy = Math.random() * 10 - 10; // Change the number 50 to change the speed.  Lower is slower.
}

//Lets animate and draw the words.
function draw() {
  //Lets draw particles from the array now
  // t represents the number of words in the array which is 10
  for (var t = 0; t < particles.length; t++) {
    //Creates the words
    var p = particles[t];

    //An array of text to use for each separate word particle
    var textText = [
      "comma",
      // "semi-colon",
      // "colon",
      // "dash",
      // "question mark",
      // "period",
      // "apostrophe",
      // "quotation mark",
      // "hyphen",
      // "exclamation point",
    ];

    //An array of colors to use with each fill or stroke
    var texttheme = [
      "#199BFF",
      "#B1B260",
      "#FCFF00",
      "#CC9897",
      "#B20C09",
      "#199BFF",
      "#B1B260",
      "#FCFF00",
      "#CC9897",
      "#B20C09",
      "#FFFFFF",
    ];

    //An array of Google Web Fonts
    var textfont = [
      "Molle",
      "Fascinate Inline",
      "Skranji",
      "Just Me Again Down Here",
      "Stalinist One",
      "Kavoon",
      "Berkshire Swash",
      "Henny Penny",
      "Butcherman",
      "Audiowide",
    ];

    //This is the size of the text combined with the type of font.
    //The font size is 85 pixels
    //The textfont[t] means that it will choose the font at that place in the font array as t is counted
    //through the loop.  So, if t = 1, it will choose Molle as its font.  If t = 6 it will choose Kavoon.
    ctx.font = "8em '" + textfont[t] + "'";

    //This is the thickness of the line or border around the text.
    ctx.lineWidth = 3;

    //Chooses the color of the border around the word
    ctx.strokeStyle = texttheme[t];

    //Chooses the color of the shadow off the word
    ctx.shadowColor = texttheme[t - 1];
    //Locations of the drop shadow.   0 and 0 is a glow.
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    //How blurred the shadow is.  The higher the number the more blurry it is.
    ctx.shadowBlur = 25;

    //Chooses the color of the fill inside the word plus one.  This makes sure that the same color
    //isn't used for the same word.
    ctx.fillStyle = texttheme[t + 1];

    //Chooses the text from the array of text for the border of the word
    ctx.fillText(textText[t], p.x, p.y);
    //Chooses the text from the array of text for the fill of the word
    ctx.strokeText(textText[t], p.x, p.y);

    //Lets use the velocity now which means movement.
    p.x += p.vx;
    p.y += p.vy;

    //To prevent the words from moving out of the canvas
    if (p.x < -50) p.x = W + 50;
    if (p.y < -50) p.y = H + 50;
    if (p.x > W + 50) p.x = -50;
    if (p.y > H + 50) p.y = -50;
  }
}
//Function that clears the canvas at each interval which creates movement
function clearf() {
  ctx.clearRect(0, 0, canvas1.width, canvas1.height);
}
//Clear interval fires the function that clears the canvas.
setInterval(clearf, 30);
//Draw interval fires the function that draws the words on the canvas
setInterval(draw, 30);
