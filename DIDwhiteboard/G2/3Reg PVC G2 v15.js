function ggbOnInit() {
  ggbApplet.registerObjectClickListener("scatter", "scatter");
  ggbApplet.registerObjectClickListener("organize", "organize");
  ggbApplet.registerObjectClickListener("bundle", "bundle");
  ggbApplet.registerObjectUpdateListener("time", "moveIt");
  ggbApplet.registerObjectUpdateListener("time2", "slideToTheLeft");
  ggbApplet.registerObjectUpdateListener("time3", "takeItBackNowYall");
  ggbApplet.registerObjectClickListener("reset", "reset");
}

var Number = ggbApplet.getValue("Number");
onesPointList = [];
tensPointList = [];
hunsPointList = [];

function scatter() {
  //updates number
  Number = ggbApplet.getValue("Number");
  for (var i = 0; i < Number; i++) {
    //create the points that make the center of the sticks
    ggbApplet.evalCommand("OnesPoint" + i + "=(0,0)");
    //randomizes those stick centers
    ggbApplet.setCoords("OnesPoint" + i, Math.random() * 10 + 27, Math.random() * 10 + 1);
    onesPointList.push("OnesPoint" + i);
    //creates randomly-oriented sticks, makes them tan, and makes them thick
    ggbApplet.evalCommand("rand" + i + "=Random()");
    ggbApplet.evalCommand("OnesStick" + i + "=Segment(OnesPoint" + i + "+(rand" + i + ",1 - rand" + i + "^2),OnesPoint" + i + "-(rand" + i + ",1 - rand" + i + "^2))");
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

//begins the bundling process
function bundle() {
  //creates vectors from random points to ones nodes and hides vectors
  for (var i = 0; i < Number; i++) {
    ggbApplet.evalCommand("Vector" + i + "=Vector(OnesPoint" + i + ",Node(1+floor(" + i + "/10)))");
    ggbApplet.setVisible("Vector" + i, false);
  }
  //starts time animating, triggers moveIt
  ggbApplet.setAnimating("time", true);
  ggbApplet.startAnimation();
}

//triggered by time, moves sticks to the tens region
function moveIt() {
  for (var i = 0; i < Math.floor(Number / 10) * 10; i++) {
    //hides ones points and sticks
    ggbApplet.setVisible("OnesPoint" + i, false);
    ggbApplet.setVisible("OnesStick" + i, false);
    //creates new ones points and sticks that translate with vector
    ggbApplet.evalCommand("OnesPointB" + i + "=Translate(OnesPoint" + i + ",AnimT(time)*Vector" + i + ")");
    ggbApplet.evalCommand("OnesStickB" + i + "=Translate(OnesStick" + i + ",AnimT(time)*Vector" + i + ")");
  }
  //at the end of the animation
  if (ggbApplet.getValue("time") > 0.98) {
    for (var i = 0; i < Math.floor(Number / 10); i++) {
      //create new points for tens region
      ggbApplet.evalCommand("TensPoint" + i + "=(0,0)");
      //sets them to the position of the moved ones points and sticks
      ggbApplet.setCoords("TensPoint" + i, ggbApplet.getXcoord("OnesPointB" + 10 * i), ggbApplet.getYcoord("OnesPointB" + 10 * i));
      ggbApplet.evalCommand("TensStick" + i + "=Segment(TensPoint" + i + "+(0,1),TensPoint" + i + "-(0,1))");
      //matches color and size
      ggbApplet.setColor("TensPoint" + i, 217, 61, 31);
      ggbApplet.setColor("TensStick" + i, 153, 51, 0);
      ggbApplet.setLineThickness("TensStick" + i, 13);
      //starts time2 animating, triggers slideToTheLeft
      ggbApplet.setAnimating("time2", true);
      ggbApplet.startAnimation();
      ggbApplet.evalCommand("VectorB" + i + "=Vector(TensPoint" + i + ",NodeTen(" + i + "+1))");
      ggbApplet.setVisible("VectorB" + i, false);
    }
  }
  for (var i = Math.floor(Number / 10) * 10; i < Number; i++) {
    console.log("OnesPoint" + i + "=(" + i % 10 + "," + Math.floor(i / 10) + ")");
    ggbApplet.setCoords("OnesPoint" + i, i % 10, Math.floor(i / 10));
  }
}

//triggered by time2
function slideToTheLeft() {
  for (var i = 0; i < Math.floor(Number / 10) * 10; i++) {
    //deletes ones points and sticks
    ggbApplet.deleteObject("OnesPointB" + i);
    ggbApplet.deleteObject("OnesStickB" + i);
    //hides tens points and sticks
    ggbApplet.setVisible("TensPoint" + i, false);
    ggbApplet.setVisible("TensStick" + i, false);
  }
  for (var i = 0; i < Math.floor(Number / 10); i++) {
    //creates new tens points and sticks that translate with vector
    ggbApplet.evalCommand("TensPointB" + i + "=Translate(TensPoint" + i + ",AnimT(time2)*VectorB" + i + ")");
    ggbApplet.evalCommand("TensStickB" + i + "=Translate(TensStick" + i + ",AnimT(time2)*VectorB" + i + ")");
    //at the end of the animation
    if (ggbApplet.getValue("time2") > 0.98) {
      //create new points for hundreds region
      ggbApplet.evalCommand("HunsPoint" + i + "=(0,0)");
      //sets them to the position of the moved ones points and sticks
      ggbApplet.setCoords("HunsPoint" + i, ggbApplet.getXcoord("TensPointB" + i), ggbApplet.getYcoord("TensPointB" + i));
      ggbApplet.evalCommand("HunsStick" + i + "=Segment(HunsPoint" + i + "+(0,1),HunsPoint" + i + "-(0,1))");
      //matches color and size
      ggbApplet.setColor("HunsPoint" + i, 217, 61, 31);
      ggbApplet.setColor("HunsStick" + i, 153, 51, 0);
      ggbApplet.setLineThickness("HunsStick" + i, 13);
      //starts time3 animating, triggers takeItBackNowYall
      ggbApplet.setAnimating("time3", true);
      ggbApplet.startAnimation();
      ggbApplet.evalCommand("VectorC" + i + "=Vector(HunsPoint" + i + ",NodeHundred(1+Floor(" + i + "/10)))");
      ggbApplet.setVisible("VectorC" + i, false);
    }
  }
}

//triggered by time3
function takeItBackNowYall() {
  for (var i = 0; i < Math.floor(Number / 10); i++) {
    //deletes tens points and sticks
    ggbApplet.deleteObject("TensPoint" + i);
    ggbApplet.deleteObject("TensStick" + i);
  }
  for (var i = 0; i < Math.floor(Number / 100) * 10; i++) {
    //creates new hundreds points and sticks that translate with vector
    ggbApplet.evalCommand("HunsPointB" + i + "=Translate(HunsPoint" + i + ",AnimT(time3)*VectorC" + i + ")");
    ggbApplet.evalCommand("HunsStickB" + i + "=Translate(HunsStick" + i + ",AnimT(time3)*VectorC" + i + ")");
    //at the end of the animation
    if (ggbApplet.getValue("time3") > 0.98) {
      //matches color and size
      ggbApplet.setColor("HunsPointB" + i, 217, 61, 31);
    }
  }
  for (var i = 0; i < Math.floor(Number / 100) * 10; i++) {
    ggbApplet.setVisible("HunsPoint" + i, false);
    ggbApplet.setVisible("HunsStick" + i, false);
  }
}

function reset() {
  for (var i = 0; i < Number; i++) {}
  ggbApplet.setValue("time", 0);
  ggbApplet.setValue("Number", 0);
  pointList = [];
  //sets visibility of buttons
  ggbApplet.setVisible("scatter", true);
  ggbApplet.setVisible("organize", false);
  ggbApplet.setVisible("bundle", false);
  ggbApplet.setVisible("reset", false);
}