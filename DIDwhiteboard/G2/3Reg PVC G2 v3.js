function ggbOnInit() {
  ggbApplet.registerObjectClickListener("scatter", "scatter");
  ggbApplet.registerObjectClickListener("organize", "organize");
  ggbApplet.registerObjectClickListener("bundle", "bundle");
  ggbApplet.registerObjectUpdateListener("time", "moveIt");
  ggbApplet.registerObjectUpdateListener("time2", "slideToTheLeft");
  ggbApplet.registerObjectUpdateListener("time3", "takeItBackNowYall");
  ggbApplet.registerObjectClickListener("reset", "reset");
  // ggbApplet.registerObjectUpdateListener("InputBox1", "reset");
}

var Number = ggbApplet.getValue("Number");
pointList = [];

function scatter() {
  //updates number
  Number = ggbApplet.getValue("Number");
  for (var i = 0; i < Number; i++) {
    //create the points that make the center of the sticks
    ggbApplet.evalCommand("OnesPoint" + i + "=(0,0)");
    //randomizes those stick centers
    ggbApplet.setCoords("OnesPoint" + i, Math.random() * 9 + 1, Math.random() * 9 + 1);
    // ggbApplet.setVisible("OnesPoint" + i, false);
    pointList.push("OnesPoint" + i);
    //creates randomly-oriented sticks, makes them tan, and makes them thick
    ggbApplet.evalCommand("rand" + i + "=Random()");
    ggbApplet.evalCommand("OnesStick" + i + "=Segment(OnesPoint" + +i + "+(rand" + i + ",1 - rand" + i + "^2),OnesPoint" + +i + "-(rand" + i + ",1 - rand" + i + "^2))");
    ggbApplet.setColor("OnesStick" + i, 153, 51, 0);
    ggbApplet.setLineThickness("OnesStick" + i, 13);
  }
  //sets visibility of buttons
  ggbApplet.setVisible("scatter", false);
  ggbApplet.setVisible("organize", true);
  ggbApplet.setVisible("bundle", false);
  ggbApplet.setVisible("reset", true);
}

//orients all sticks vertically
function organize() {
  //for each of the sticks
  for (var i = 0; i < Number; i++) {
    //make segment vertical, maintain color and thickness
    ggbApplet.evalCommand("OnesStick" + i + "=Segment(OnesPoint" + i + "+(0,1),OnesPoint" + i + "-(0,1))");
    ggbApplet.setColor("OnesStick" + i, 153, 51, 0);
    ggbApplet.setLineThickness("OnesStick" + i, 13);
  }
  //sets visibility of buttons
  ggbApplet.setVisible("scatter", false);
  ggbApplet.setVisible("organize", false);
  ggbApplet.setVisible("bundle", true);
  ggbApplet.setVisible("reset", true);
}

function bundle() {
  for (var i = 0; i < Number; i++) {
    var vectorList = [];
    ggbApplet.evalCommand("Vector" + i + "=Vector(" + pointList[i] + ",Node(1+floor(" + i + "/10)))");
    ggbApplet.setVisible("Vector" + i, false);
  }
  ggbApplet.setAnimating("time", true);
  ggbApplet.startAnimation();
}

function moveIt() {
  for (var i = 0; i < Math.floor(Number / 10) * 10; i++) {
    ggbApplet.setVisible("OnesPoint" + i, false);
    ggbApplet.setVisible("OnesStick" + i, false);
    ggbApplet.evalCommand("OnesPointB" + i + "=Translate(OnesPoint" + i + ",AnimT(time)*Vector" + i + ")");
    ggbApplet.evalCommand("OnesStickB" + i + "=Translate(OnesStick" + i + ",AnimT(time)*Vector" + i + ")");
    if (ggbApplet.getValue("time") > 0.98) {
      ggbApplet.setColor("OnesPointB" + i, 217, 61, 31);
      ggbApplet.setAnimating("time2", true);
      ggbApplet.startAnimation();
    }
    ggbApplet.evalCommand("VectorB" + i + "=Vector(OnesPointB" + i + ",NodeTen(1+floor(" + i + "/10)))");
    ggbApplet.setVisible("VectorB" + i, false);
  }
}

function slideToTheLeft() {
  for (var i = 0; i < Math.floor(Number / 10) * 10; i++) {
    ggbApplet.setVisible("OnesPointB" + i, false);
    ggbApplet.setVisible("OnesStickB" + i, false);
    ggbApplet.evalCommand("OnesPointC" + i + "=Translate(OnesPointB" + i + ",AnimT(time)*VectorB" + i + ")");
    ggbApplet.evalCommand("OnesStickC" + i + "=Translate(OnesStickB" + i + ",AnimT(time)*VectorB" + i + ")");
    ggbApplet.evalCommand("VectorC" + i + "=Vector(OnesPointC" + i + ",NodeHundred(1+floor(" + i + "/10)))");
    ggbApplet.setVisible("VectorC" + i, false);
    if (ggbApplet.getValue("time") > 0.98) {
      ggbApplet.setColor("OnesPointC" + i, 217, 61, 31);
      ggbApplet.setAnimating("time3", true);
      ggbApplet.startAnimation();
    }
  }
}

function takeItBackNowYall() {
  for (var i = 0; i < Math.floor(Number / 10) * 10; i++) {
    ggbApplet.setVisible("OnesPointC" + i, false);
    ggbApplet.setVisible("OnesStickC" + i, false);
    ggbApplet.evalCommand("OnesPointD" + i + "=Translate(OnesPointC" + i + ",AnimT(time)*VectorC" + i + ")");
    ggbApplet.evalCommand("OnesStickD" + i + "=Translate(OnesStickC" + i + ",AnimT(time)*VectorC" + i + ")");
    if (ggbApplet.getValue("time") > 0.98) {
      ggbApplet.setColor("OnesPointD" + i, 217, 61, 31);
    }
  }
}

function reset() {
  ggbApplet.setValue("time", 0);
  for (var i = 0; i < Number; i++) {
    ggbApplet.deleteObject("Vector" + i);
    ggbApplet.deleteObject("OnesStickB" + i);
    ggbApplet.deleteObject("OnesPoint" + i);
    ggbApplet.deleteObject("OnesStick" + i);
    ggbApplet.deleteObject("rand" + i);
  }
  pointList = [];
  //sets visibility of buttons
  ggbApplet.setVisible("scatter", true);
  ggbApplet.setVisible("organize", false);
  ggbApplet.setVisible("bundle", false);
  ggbApplet.setVisible("reset", false);
}