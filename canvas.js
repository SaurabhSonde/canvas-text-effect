var canvas = document.querySelector("canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");


var text = "Neon"
ctx.fillStyle = "#000"
ctx.fillText(text, -7, 0);
ctx.fillStyle = "red"
ctx.fillText(text, 0, 0);
ctx.fillStyle = "cyan"
ctx.fillText(text, 7, 0);

var width = ctx.measureText(text).width;
var style = shadowStyles[text];
// add a background to the current effect
ctx.fillStyle = style.background;
ctx.fillRect(0, offsetY, ctx.canvas.width, textHeight - 1)
// parse text-shadows from css
var shadows = parseShadow(style.shadow);
// loop through the shadow collection
var n = shadows.length; while(n--) {
    var shadow = shadows[n];
    var totalWidth = width + shadow.blur * 2;
    ctx.save();
    ctx.beginPath();
    ctx.rect(offsetX - shadow.blur, offsetY, offsetX + totalWidth, textHeight);
    ctx.clip();
    if (shadow.blur) { // just run shadow (clip text)
        ctx.shadowColor = shadow.color;
        ctx.shadowOffsetX = shadow.x + totalWidth;
        ctx.shadowOffsetY = shadow.y;
        ctx.shadowBlur = shadow.blur;
        ctx.fillText(text, -totalWidth + offsetX, offsetY + metrics.top);
    } else { // just run pseudo-shadow
        ctx.fillStyle = shadow.color;
        ctx.fillText(text, offsetX + (shadow.x||0), offsetY - (shadow.y||0) + metrics.top);
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