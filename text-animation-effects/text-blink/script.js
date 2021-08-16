var ctx = c.getContext("2d"),
  bg = 0,
  db = 0.01;

// BlinkText objects which will hold appearance and timings
function BlinkText(txt, x, y, interval) {
  this.text = txt;
  this.x = x;
  this.y = y;
  this.interval = interval;
  this.font = "bold 20px sans-serif";
  this.color = "red";
  this.active = false;
  this.time = 0;
  this.toggle = true;
}

// If several instances is to be defined, use prototypal approach
BlinkText.prototype = {
  start: function (time) {
    this.time = time; // store start time to calc. delta
    this.active = true; // enable drawing in render()
    this.toggle = true; // reset toggle flag so first check is "on"
  },

  stop: function () {
    this.active = false; // disable drawing in render()
  },

  render: function (ctx) {
    // render if active
    if (this.active) {
      if (this.toggle) {
        // are we on nor off?
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y); // render text if on
      }

      // calc time interval and toggle every other time
      var time = performance.now();
      if (time - this.time >= this.interval) {
        // passed interval?
        this.time = time; // update start time
        this.toggle = !this.toggle; // toggle state
      }
    }
  },
};

// create a couple of instances
var txt1 = new BlinkText("Hello World", 50, 50, 500);

(function loop() {
  // draw other stuff
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);
  txt1.render(ctx); // call render() regardless of state

  bg += db;
  if (bg < 0 || bg > 1) db = -db;
  requestAnimationFrame(loop);
})();

txt1.start(performance.now()); // init start with current time
