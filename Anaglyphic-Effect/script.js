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
  Anaglyphic: {
    color: "rgba(0,0,255,0.5)",
    background: "#fff",
    shadow: "3px 3px 0 rgba(255,0,180,0.5)",
  },
};

function anaglyphicEffect() {
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
  var offsetX = 170;
  var offsetY = 220;
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
anaglyphicEffect();
