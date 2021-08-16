var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
ctx.font = "12px Arial";

var story1 = {
  txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non dui ut quam malesuada lobortis. Integer ac efficitur nunc. Phasellus suscipit nulla tincidunt justo porta, vitae gravida diam convallis.",
  storycount: 0,
  linecount: 0,
  lineheight: 18,
  xpos: 0,
  ypos: 0,
  startY: 10,
  speed: 2,
  animate: true,
  complete: false,
  storyarr: [],
};

var story2 = {
  txt: "Creswell does an excellent job categorizing the various qualitative methods into five approaches: narrative research, phenomenology, grounded theory, ethnography, and case study...The author has expanded on and updated the information he presented in the first edition of the book (Creswell, 1998), including discussion of the various schools of thought that have developed among qualitative researchers since the mid 1990's...Qualitative Inquiry & Research Design: Choosing among five approaches is a highly informative book; researchers will likely return again and against to the book as they expand their comfort zone within qualitative research.",
  storycount: 0,
  linecount: 0,
  lineheight: 18,
  xpos: 10,
  ypos: 150,
  startY: 150,
  speed: 2,
  animate: true,
  complete: false,
  storyarr: [],
};

var animate = setInterval(doAnimation, 50);
var canvasWidth = 550;
var canvasHeight = 400;
story1.storyarr = getLines(ctx, story1.txt, 10, 500);
story2.storyarr = getLines(ctx, story2.txt, 10, 500);
function doAnimation() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  animateTxt(story1, ctx);
  if (story1.complete) {
    story2.startY = story1.ypos + 30;
    animateTxt(story2, ctx);
  }
}

function getLines(context, str, x, maxWidth) {
  //adapt from https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
  var words = str.split(" ");
  var lineNumber = 0;
  var linesarr = [];
  var lineOfText = "";
  for (var n = 0; n < words.length; n++) {
    var checkEndOfLine = lineOfText + words[n] + " ";
    var checkTextWidth = context.measureText(checkEndOfLine);
    var textWidth = checkTextWidth.width;

    if (textWidth > maxWidth - 10) {
      lineNumber++;
      lineOfText = words[n] + " ";
    } else {
      lineOfText = checkEndOfLine;
    }
    linesarr[lineNumber] = lineOfText;
  }
  return linesarr;
}

function animateTxt(story, context) {
  if (story.animate) {
    story.storycount += story.speed;
    var storytxt = story.storyarr[story.linecount];
    story.ypos = story.startY + story.lineheight * story.linecount;
    if (story.storycount > storytxt.length - 1) {
      story.storycount = 0;
      story.linecount++;

      if (story.linecount > story.storyarr.length - 1) {
        //clearInterval(intervalID);
        story.animate = false;
        story.complete = true;
      }
    }
    //context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillText(
      storytxt.substr(0, story.storycount),
      story.xpos,
      story.ypos
    );
  }
  //Write Out The Previous Lines Too
  for (var i = 0; i < story.storyarr.length; i++) {
    if (i < story.linecount) {
      context.fillText(
        story.storyarr[i],
        story.xpos,
        story.startY + story.lineheight * i
      );
    }
  }
}
