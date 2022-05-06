function ggbOnInit() {
  ggbApplet.registerObjectClickListener("measure", "measure");
  ggbApplet.registerObjectClickListener("reset", "reset");
  ggbApplet.registerObjectClickListener("stop", "stop");
  ggbApplet.registerObjectUpdateListener("time", "bounce");
  ggbApplet.registerObjectUpdateListener("InputBox2", "count");
  ggbApplet.registerObjectUpdateListener("InputBox1", "count");
}
//NOTE: MOVING POINT A MOVES ALL INPUT BOXES, BUTTONS, AND LEGENDS
//global variable, gives the row of the first polygon cell in spreadsheet
var next = 2;
var rulers = ggbApplet.getValue("rulers");
var blocks = ggbApplet.getValue("blocks");
var timeMax = ggbApplet.getValue("blocks") - 1;

//sets the number of bounces for the squares
function count() {
  rulers = ggbApplet.getValue("rulers");
  blocks = ggbApplet.getValue("blocks");
  ggbApplet.setValue("timeMax", blocks - 1);
}
//starts time counter which moves squares
function measure() {
  ggbApplet.setAnimating("time", true);
  ggbApplet.startAnimation("time");
  //updates buttons
  showButtons();
}

//sets squares visible as original square bounces through
function bounce() {
  //sets end of time slider
  timeMax = blocks - 1;
  //sets blocks visible as the master block bounces
  ggbApplet.setVisible("quadP", true);
  if (ggbApplet.getValue("IsInRegion(StartPtP,C" + next + ")")) {
    ggbApplet.setVisible("C" + next, true); //polygon
    ggbApplet.setVisible("D" + next, true); //seg
    ggbApplet.setVisible("E" + next, true); //seg
    ggbApplet.setVisible("F" + next, true); //seg
    ggbApplet.setVisible("G" + next, true); //seg
    if (next % 10 == 0) {
      ggbApplet.setVisible("M2", true);
    }
    if (next > 51) {
      next = 2;
    } else {
      next++;
    }
  }
  if (ggbApplet.getValue("time") == timeMax) {
    ggbApplet.stopAnimation("time");
  }
  //updates buttons
  showButtons();
}

//pauses animation
function stop() {
  ggbApplet.stopAnimation("time");
  showButtons();
}
//determines what buttons to show
function showButtons() {
  //at beginning
  if (ggbApplet.isAnimationRunning("time") == false && ggbApplet.getValue("time") == -1) {
    ggbApplet.setVisible("reset", false);
    ggbApplet.setVisible("stop", false);
    ggbApplet.setVisible("measure", true);
  }
  //at end
  if (ggbApplet.isAnimationRunning("time") == false && ggbApplet.getValue("time") > -1) {
    ggbApplet.setVisible("reset", true);
    ggbApplet.setVisible("stop", false);
    ggbApplet.setVisible("measure", false);
  }
  //while bouncing
  if (ggbApplet.isAnimationRunning("time") == true) {
    ggbApplet.setVisible("reset", false);
    ggbApplet.setVisible("stop", true);
    ggbApplet.setVisible("measure", false);
  }
}

//stops animation and resets everything to square one
function reset() {
  //stops and resets time
  ggbApplet.stopAnimation("time");
  ggbApplet.setValue("time", -1);
  //sets bouncing block back to beginning
  next = 2;
  //sets all blocks invisible
  for (var i = 2; i < 92; i++) {
    ggbApplet.setVisible("C" + i, false);
    ggbApplet.setVisible("D" + i, false);
    ggbApplet.setVisible("E" + i, false);
    ggbApplet.setVisible("F" + i, false);
    ggbApplet.setVisible("G" + i, false);
    ggbApplet.setVisible("quadP", false);
  }
  //updates buttons
  showButtons();
}
