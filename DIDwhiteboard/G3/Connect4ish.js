function ggbOnInit() {
  ggbApplet.registerClientListener("dropIt");
}
var xHit = 0;
var yHit = 0;
var click = 0;

function dropIt(a) {
  if (a[0] == "mouseDown") {
    click++;
    xHit = Math.round(a.x);
    for (var i = 1; i < 7; i++) {
      console.log((ggbApplet.getListValue("x_" + xHit, i)));
      if (ggbApplet.getListValue("x_" + xHit, i) == 0) {
        yHit = i;
        ggbApplet.setListValue("x_" + xHit, i, 1);
        break;
      }
    }
    ggbApplet.evalCommand("Chip" + click + "=(" + xHit + "," + yHit + ")");
    if (click % 2 == 0) {
      ggbApplet.setColor("Chip" + click, 218, 41, 28);
    } else {
      ggbApplet.setColor("Chip" + click, 0, 127, 175);
    }
  }
}