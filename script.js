// Bubble Effect
function bubbleEffect() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particleArray = [];
  let adjustX = 25;
  let adjustY = 8;
  const mouse = {
    x: null,
    y: null,
    radius: 250,
  };

  ctx.fillStyle = "white";
  ctx.font = "12px Verdana";
  ctx.fillText("Hello World!", 0, 30);
  const textCoordinates = ctx.getImageData(0, 0, 100, 100);

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      //radius of each particlae
      this.size = 3;
      //initial postion of each particle
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = Math.random() * 5 + 0.5;
      this.distance;
    }

    draw() {
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.strokeStyle = "rgba(34, 147, 214, 1)";
      ctx.beginPath();

      if (this.distance < mouse.radius - 5) {
        this.size = 13;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x - 3, this.y - 3, this.size / 2.5, 0, Math.PI * 2);
        ctx.arc(this.x + 7, this.y - 1, this.size / 3.5, 0, Math.PI * 2);
      } else if (this.distance <= mouse.radius) {
        this.size = 10;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.arc(this.x - 1, this.y - 1, this.size / 3, 0, Math.PI * 2);
      } else {
        this.size = 8;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x - 1, this.y - 1, this.size / 3, 0, Math.PI * 2);
      }

      ctx.closePath();
      ctx.fill();
    }
  }

  //calling particle class many time
  function init() {
    particleArray = [];

    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
      for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
        if (
          textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
        ) {
          let positionX = x + adjustX;
          let positionY = y + adjustY;

          particleArray.push(new Particle(positionX * 10, positionY * 10));
        }
      }
    }
  }

  //pushing particles to the array
  init();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// dot effect
function dotEffect() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particleArray = [];
  let adjustX = 33;
  let adjustY = 1;
  const mouse = {
    x: null,
    y: null,
    radius: 250,
  };

  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Hello World!", 0, 30);
  const textCoordinates = ctx.getImageData(0, 0, 100, 100);

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      //radius of each particlae
      this.size = 3;
    }

    draw() {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  //calling particle class many time
  function init() {
    particleArray = [];

    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
      for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
        if (
          textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
        ) {
          let positionX = x + adjustX;
          let positionY = y + adjustY;

          particleArray.push(new Particle(positionX * 10, positionY * 10));
        }
      }
    }
  }

  //pushing particles to the array
  init();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].draw();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// spider effect
function spiderEffect() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particleArray = [];
  let adjustX = 23;
  let adjustY = 1;
  const mouse = {
    x: null,
    y: null,
    radius: 250,
  };

  ctx.fillStyle = "red";
  ctx.font = "12px Verdana";
  ctx.fillText("Hello World!", 0, 30);
  const textCoordinates = ctx.getImageData(0, 0, 100, 100);

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      //radius of each particle
      this.size = 3;
    }

    draw() {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  //calling particle class many time
  function init() {
    particleArray = [];

    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
      for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
        if (
          textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
        ) {
          let positionX = x + adjustX;
          let positionY = y + adjustY;

          particleArray.push(new Particle(positionX * 10, positionY * 10));
        }
      }
    }
  }

  //pushing particles to the array
  init();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
  }

  animate();

  function connect() {
    for (let a = 0; a < particleArray.length; a++) {
      for (let b = a; b < particleArray.length; b++) {
        let dx = particleArray[a].x - particleArray[b].x;
        let dy = particleArray[a].y - particleArray[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 15) {
          ctx.strokeStyle = "white";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particleArray[a].x, particleArray[a].y);
          ctx.lineTo(particleArray[b].x, particleArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
}

// Glitch Effect

function glitchEffect() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  var text = "Hello World!";
  var xPosition = canvas.width / 2;
  var yPosition = canvas.height / 2;

  var imageObjShadow = new Image();

  var imageObjWithShadow = new Image();

  function glitch() {
    imageObjShadow.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var arr = lineShadowsHeight();
      var sy = 0;
      for (var i = 0; i < arr.length; i++) {
        ctx.drawImage(
          this,
          0,
          sy,
          canvas.width,
          arr[i],
          getRandomInt(-2 * offset(), 2 * offset()),
          sy,
          canvas.width,
          arr[i]
        );
        sy = sy + arr[i];
      }
      drawText();
      imageDataWithShadow = canvas.toDataURL("image/png", 1.0);

      imageObjWithShadow.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          this,
          0,
          0,
          canvas.width,
          canvas.height / 3 + 5,
          1,
          0,
          canvas.width,
          canvas.height / 3 + 5
        );
        ctx.drawImage(
          this,
          0,
          canvas.height / 3 + 5,
          canvas.width,
          canvas.height / 3 - 5,
          0,
          canvas.height / 3 + 5,
          canvas.width,
          canvas.height / 3 - 5
        );
        ctx.drawImage(
          this,
          0,
          (canvas.height / 3) * 2,
          canvas.width,
          canvas.height / 3,
          0,
          (canvas.height / 3) * 2,
          canvas.width,
          canvas.height / 3
        );
      };
      imageObjWithShadow.src = imageDataWithShadow;
    };
    imageObjShadow.src = imageDataShadows;

    setTimeout(function () {
      imageObjWithShadow.onload = function () {
        ctx.clearRect(
          0,
          (canvas.height / 3) * 2,
          canvas.width,
          canvas.height / 3
        );
        var arr = lineShadowsHeight();
        var sy = 0;
        for (var i = 0; i < arr.length; i++) {
          ctx.drawImage(
            this,
            0,
            sy,
            canvas.width,
            arr[i],
            getRandomInt(-2 * offset(), 2 * offset()),
            sy,
            canvas.width,
            arr[i]
          );
          sy = sy + arr[i];
        }
      };
      imageObjWithShadow.src = imageDataWithShadow;
    }, 80);
  }

  function drawText() {
    ctx.font = "normal 80px Roboto Condensed";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, xPosition, yPosition);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var lineShadows = function () {
    return Math.floor(Math.random() * (7 - 4 + 1) + 4);
  };

  var offset = function () {
    return Math.floor(Math.random() * (3 - 2 + 1) + 2) * 0.8;
  };

  var lineShadowsHeight = function () {
    var h = canvas.height;
    var count = lineShadows();
    var arr = [];
    var s = 0;

    for (var i = 0; i < count; i++) {
      arr[i] = Math.floor(Math.random() * (h / (count - 1) - 2 + 1) + 2);
      h = h - arr[i];
      s = s + arr[i];
      arr[count] = canvas.height - s;
    }
    return arr;
  };

  function getShadowsImg() {
    ctx.save();
    ctx.font = "bold 80px Roboto Condensed";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#a3004a";
    ctx.fillText(text, xPosition - 2, yPosition);
    ctx.fillStyle = "#09c4de";
    ctx.fillText(text, xPosition + 2, yPosition);
    ctx.restore();

    imageDataShadows = canvas.toDataURL("image/png", 1.0);
  }

  getShadowsImg();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText();

  glitch();
}

//neon effect
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

var createInterlace = function (size, color1, color2) {
  var proto = document.createElement("canvas").getContext("2d");
  proto.canvas.width = size * 2;
  proto.canvas.height = size * 2;
  proto.fillStyle = color1; // top-left
  proto.fillRect(0, 0, size, size);
  proto.fillStyle = color2; // top-right
  proto.fillRect(size, 0, size, size);
  proto.fillStyle = color2; // bottom-left
  proto.fillRect(0, size, size, size);
  proto.fillStyle = color1; // bottom-right
  proto.fillRect(size, size, size, size);
  var pattern = proto.createPattern(proto.canvas, "repeat");
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

var op_8x8 = createInterlace(8, "#FFF", "#eee");

/// get text-metrics from DOM, to use with <canvas>

(function () {
  var image = document.createElement("img");
  image.width = 42;
  image.height = 1;
  image.src = op_8x8.data;
  image.style.cssText = "display: inline";

  getMetrics = function (text, font) {
    var metrics = document.getElementById("metrics");
    if (metrics) {
      metrics.style.cssText = "display: block";
      var parent = metrics.firstChild;
      parent.firstChild.textContent = text;
    } else {
      // setting up html used for measuring text-metrics
      var parent = document.createElement("span");
      parent.appendChild(document.createTextNode(text));
      parent.appendChild(image);
      var metrics = document.createElement("div");
      metrics.id = "metrics";
      metrics.appendChild(parent);
      document.body.insertBefore(metrics, document.body.firstChild);
    }

    // direction of the text
    var direction = window.getComputedStyle(document.body, "")["direction"];

    // getting css equivalent of ctx.measureText()
    parent.style.cssText =
      "font: " + font + "; white-space: nowrap; display: inline;";
    var width = parent.offsetWidth;
    var height = parent.offsetHeight;

    // capturing the "top" and "bottom" baseline
    parent.style.cssText =
      "font: " + font + "; white-space: nowrap; display: block;";
    var top = image.offsetTop;
    var bottom = top - height;

    // capturing the "middle" baseline
    parent.style.cssText =
      "font: " +
      font +
      "; white-space: nowrap; line-height: 0; display: block;";
    var middle = image.offsetTop + 1;

    // capturing "1em"
    parent.style.cssText =
      "font: " + font + "; white-space: nowrap; height: 1em; display: block;";
    parent.firstChild.textContent = "";
    var em = parent.offsetHeight;

    // cleanup
    metrics.style.display = "none";

    return {
      direction: direction,
      top: top,
      em: em,
      middle: middle,
      bottom: bottom,
      height: height,
      width: width,
    };
  };
})();

var shadowStyles = {
  Neon: {
    color: "#FFF",
    background: "#000",
    shadow:
      "0 0 7px #fff, 0 0 12px #fff, 0 0 30px #fff, 0 0 30px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de",
  },
};

function neonEffect() {
  function parseShadow(shadows) {
    shadows = shadows.split(", ");
    var ret = [];
    for (var n = 0, length = shadows.length; n < length; n++) {
      var shadow = shadows[n].split(" ");
      var type = shadow[0].replace(parseFloat(shadow[0]), "");
      if (type == "em") {
        var obj = {
          x: metrics.em * parseFloat(shadow[0]),
          y: metrics.em * parseFloat(shadow[1]),
        };
      } else {
        var obj = {
          x: parseFloat(shadow[0]),
          y: parseFloat(shadow[1]),
        };
      }
      if (shadow[3]) {
        obj.blur = parseFloat(shadow[2]);
        obj.color = shadow[3];
      } else {
        obj.blur = 0;
        obj.color = shadow[2];
      }
      ret.push(obj);
    }
    return ret;
  }
  ctx.save();
  ctx.font = "100px Futura, Helvetica, sans-serif";
  // absolute position of the text (within a translation state)
  var offsetX = 500;
  var offsetY = 200;
  // gather information about the height of the font
  var metrics = getMetrics("thequickbrownfox", ctx.font);
  var textHeight = metrics.height * 1.2;
  // loop through text-shadow based effects
  for (var text in shadowStyles) {
    var width = ctx.measureText(text).width;
    var style = shadowStyles[text];
    // add a background to the current effect
    ctx.fillStyle = style.background;
    ctx.fillRect(0, offsetY, ctx.canvas.width, textHeight - 1);
    // parse text-shadows from css
    var shadows = parseShadow(style.shadow);
    // loop through the shadow collection
    var n = shadows.length;
    while (n--) {
      var shadow = shadows[n];
      var totalWidth = width + shadow.blur * 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        offsetX - shadow.blur,
        offsetY,
        offsetX + totalWidth,
        textHeight
      );
      ctx.clip();
      if (shadow.blur) {
        // just run shadow (clip text)
        ctx.shadowColor = shadow.color;
        ctx.shadowOffsetX = shadow.x + totalWidth;
        ctx.shadowOffsetY = shadow.y;
        ctx.shadowBlur = shadow.blur;
        ctx.fillText(text, -totalWidth + offsetX, offsetY + metrics.top);
      } else {
        // just run pseudo-shadow
        ctx.fillStyle = shadow.color;
        ctx.fillText(
          text,
          offsetX + (shadow.x || 0),
          offsetY - (shadow.y || 0) + metrics.top
        );
      }
      ctx.restore();
    }
    // drawing the text in the foreground
    if (style.color) {
      ctx.fillStyle = style.color;
      ctx.fillText(text, offsetX, offsetY + metrics.top);
    }
    // jump to next em-line
    ctx.translate(0, textHeight);
  }
  ctx.restore();
}
