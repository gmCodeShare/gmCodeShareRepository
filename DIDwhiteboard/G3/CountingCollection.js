function ggbOnInit() {
  ggbApplet.registerClientListener("snap");
  ggbApplet.registerObjectClickListener("button2", "showCounters");
  ggbApplet.registerObjectUpdateListener("time", "showHide");
}

var q1Location = 0;
var q1List = ["CartonButton1", "CartonButton2", "CartonButton3", "CartonButton4", "CartonButton5", "CartonButton6", "CartonButton7", "CartonButton8", "CartonButton9", "CartonButton10"];
var lastX = 0;
var lastY = 0;
var possibleCounters = [];
var usedCounters = [];
var usedButtons = [];

function showCounters() {
  ggbApplet.setVisible("FullCarton", false);
  ggbApplet.setValue("time", 0);
  var buttons = Math.floor(Math.random() * 50);
  usedCounters = [];
  usedButtons = [];
  possibleCounters = [];
  //repopulates list of counters to use and sets their visibility to false
  for (var i = 1; i <= 50; i++) {
    possibleCounters.push("Counter" + i);
    ggbApplet.setVisible("Counter" + i, false);
    ggbApplet.setVisible("Counter" + i + "Button", false);
    ggbApplet.setCoords("Counter" + i, Math.floor(i / 10) % 2 + 2 * (i % 10) - 10, 2 * Math.floor((i - 1) / 10) - 5);
  }
  //resets counter for number of points in q1
  q1Location = 0;
  //sets tray point visibility to false
  for (var i = 0; i < 10; i++) {
    ggbApplet.setVisible(q1List[i], false);
  }
  //populates chosen counters
  for (var i = 0; i < buttons; i++) {
    var randomGenerator = Math.floor(Math.random() * (possibleCounters.length - 1))
    usedCounters.push("Counter" + (1 + randomGenerator));
    usedButtons.push("Counter" + (1 + randomGenerator) + "Button");
    possibleCounters.splice(possibleCounters.indexOf("Counter" + (1 + randomGenerator)), 1);
  }
  //sets visibility of points in usedCounters to true
  for (var i = 0; i < usedCounters.length; i++) {
    ggbApplet.setVisible(usedCounters[i], true);
    ggbApplet.setVisible(usedButtons[i], true);
  }
}

function snap(grabbed) {
  if (grabbed[0] == "mouseDown") {
    lastX = grabbed.x;
    lastY = grabbed.y;
  }
  if (ggbApplet.getObjectType(grabbed[1]) == "point") {
    if (q1Location < 10 && grabbed[0] == "dragEnd") {
      if (ggbApplet.getValue("IsInRegion(" + grabbed[1] + ",q1)") == 1) {
        ggbApplet.setVisible(grabbed[1], false);
        ggbApplet.setVisible(grabbed[1] + "Button", false);
        ggbApplet.setVisible(q1List[q1Location], true);
        q1Location++;
      }
    }
    if (q1Location == 10) {
      //sets tray point visibility to false
      for (var i = 0; i < 10; i++) {
        ggbApplet.setVisible(q1List[i], false);
      }
      ggbApplet.setVisible("FullCarton", true);
      console.log("triggered");
      ggbApplet.setAnimating("time", true);
      ggbApplet.startAnimation();
      ggbApplet.setValue("q1Location", 0);
    }
    if (q1Location > 10) {
      ggbApplet.setCoords(grabbed[1], lastX, lastY);
    }
  }
}

function showHide() {
  if (ggbApplet.getValue("time") == 1) {
    ggbApplet.setVisible("FullCarton2", true);
    ggbApplet.setVisible("FullCarton", false);
  }
}