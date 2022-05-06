function ggbOnInit() {
  ggbApplet.registerObjectClickListener("measure", "measure");
  ggbApplet.registerObjectClickListener("reset", "reset");
  ggbApplet.registerObjectClickListener("stop", "stop");
  ggbApplet.registerObjectUpdateListener("time", "bounce");
  ggbApplet.registerObjectUpdateListener("InputBox2", "count");
  ggbApplet.registerObjectUpdateListener("InputBox1", "count");
  ggbApplet.registerObjectClickListener("save", "save");
}

//global variable, gives the row of the first polygon cell in spreadsheet
var next = 2;
var StartPt = "";
var rulers = ggbApplet.getValue("rulers");
var blocks = ggbApplet.getValue("blocks");

//sets the number of bounces for the squares
function count() {
  rulers = ggbApplet.getValue("rulers");
  blocks = ggbApplet.getValue("blocks");
  ggbApplet.setValue("timeMax", blocks + 10 * rulers - 1);
}

//starts time counter which moves squares
function measure() {
  ggbApplet.setAnimating("time", true);
  ggbApplet.startAnimation("time");
  //allows bouncing square if there are blocks to display
  if (blocks > 0) {
    switch (rulers) {
      case 0: //if no rulers
        ggbApplet.setVisible("quadP", true);
        ggbApplet.setVisible("quadQ", false);
        ggbApplet.setVisible("quadR", false);
        ggbApplet.setVisible("quadS", false);
        ggbApplet.setVisible("quadT", false);
        //tells which bounce function to call
        StartPt = "StartPtP";
        break;
      case 1: //if one ruler
        ggbApplet.setVisible("quadQ", true);
        ggbApplet.setVisible("quadP", false);
        ggbApplet.setVisible("quadR", false);
        ggbApplet.setVisible("quadS", false);
        ggbApplet.setVisible("quadT", false);
        //tells which bounce function to call
        StartPt = "StartPtQ";
        //sets spot for blocks to start appearing
        next = 12;
        break;
      case 2: //if two rulers
        ggbApplet.setVisible("quadR", true);
        ggbApplet.setVisible("quadP", false);
        ggbApplet.setVisible("quadQ", false);
        ggbApplet.setVisible("quadS", false);
        ggbApplet.setVisible("quadT", false);
        //tells which bounce function to call
        StartPt = "StartPtR";
        //sets spot for blocks to start appearing
        next = 22;
        break;
      case 3: //if three rulers
        ggbApplet.setVisible("quadS", true);
        ggbApplet.setVisible("quadP", false);
        ggbApplet.setVisible("quadQ", false);
        ggbApplet.setVisible("quadR", false);
        ggbApplet.setVisible("quadT", false);
        //tells which bounce function to call
        StartPt = "StartPtS";
        //sets spot for blocks to start appearing
        next = 32;
        break;
      case 4: //if four rulers
        ggbApplet.setVisible("quadT", true);
        ggbApplet.setVisible("quadP", false);
        ggbApplet.setVisible("quadQ", false);
        ggbApplet.setVisible("quadR", false);
        ggbApplet.setVisible("quadS", false);
        //tells which bounce function to call
        StartPt = "StartPtT";
        //sets spot for blocks to start appearing
        next = 42;
    }
  }
  //updates buttons
  showButtons();
}

//sets squares visible as original square bounces through
function bounce() {
  //sets end of time slider
  timeMax = blocks + 10 * rulers - 1;
  //sets first ruler visible
  if (rulers > 0 && ggbApplet.getValue("time") > 0) {
    ggbApplet.setVisible("C46", true);
    for (var i = 51; i < 60; i++) {
      ggbApplet.setVisible("C" + i, true);
    }
  }
  //sets second ruler visible
  if (rulers > 1 && ggbApplet.getValue("time") > 10) {
    ggbApplet.setVisible("C47", true);
    for (var i = 60; i < 70; i++) {
      ggbApplet.setVisible("C" + i, true);
    }
  }
  //sets third ruler visible
  if (rulers > 2 && ggbApplet.getValue("time") > 20) {
    ggbApplet.setVisible("C48", true);
    for (var i = 70; i < 80; i++) {
      ggbApplet.setVisible("C" + i, true);
    }
  }
  //sets fourth ruler visible
  if (rulers > 3 && ggbApplet.getValue("time") > 30) {
    ggbApplet.setVisible("C49", true);
    for (var i = 80; i < 90; i++) {
      ggbApplet.setVisible("C" + i, true);
    }
  }
  //sets blocks visible as the master block bounces
  if (ggbApplet.getValue("IsInRegion(" + StartPt + ",C" + next + ")")) {
    ggbApplet.setVisible("C" + next, true); //polygon
    ggbApplet.setVisible("D" + next, true); //seg
    ggbApplet.setVisible("E" + next, true); //seg
    ggbApplet.setVisible("F" + next, true); //seg
    ggbApplet.setVisible("G" + next, true); //seg
    if (next > 45) {
      next = 2;
    } else {
      next++;
    }
  }
  //updates buttons
  showButtons();
}

//pauses animation
function stop() {
  ggbApplet.stopAnimation("time");
  showButtons();
}

//saves the last measurement
function save() {
  //sets original line invisible
  for (var i = 2; i < 92; i++) {
    ggbApplet.setVisible("C" + i, false);
    ggbApplet.setVisible("D" + i, false);
    ggbApplet.setVisible("E" + i, false);
    ggbApplet.setVisible("F" + i, false);
    ggbApplet.setVisible("G" + i, false);
  }
  ggbApplet.setVisible("quadP", false);
  ggbApplet.setVisible("quadQ", false);
  ggbApplet.setVisible("quadR", false);
  ggbApplet.setVisible("quadS", false);
  ggbApplet.setVisible("quadT", false);
  ggbApplet.setVisible("measure", true);
  ggbApplet.setVisible("reset", false
  //sets the time back to -1
  ggbApplet.setValue("time", -1);
  //sets first ruler visible
  if (rulers > 0) {
    ggbApplet.setVisible("K46", true);
    for (var i = 51; i < 60; i++) {
      ggbApplet.setVisible("K" + i, true);
    }
  }
  //sets second ruler visible
  if (rulers > 1) {
    ggbApplet.setVisible("K47", true);
    for (var i = 60; i < 70; i++) {
      ggbApplet.setVisible("K" + i, true);
    }
  }
  //sets third ruler visible
  if (rulers > 2) {
    ggbApplet.setVisible("K48", true);
    for (var i = 70; i < 80; i++) {
      ggbApplet.setVisible("K" + i, true);
    }
  }
  //sets fourth ruler visible
  if (rulers > 3) {
    ggbApplet.setVisible("K49", true);
    for (var i = 80; i < 90; i++) {
      ggbApplet.setVisible("K" + i, true);
    }
  }
  //sets blocks visible all at once
  for (i = 10 * rulers + 2; i < blocks + 10 * rulers + 2; i++) {
    ggbApplet.setVisible("K" + i, true); //polygon
    ggbApplet.setVisible("L" + i, true); //seg
    ggbApplet.setVisible("M" + i, true); //seg
    ggbApplet.setVisible("N" + i, true); //seg
    ggbApplet.setVisible("O" + i, true); //seg
  }
  //updates buttons
  showButtons();
}

//determines what buttons to show
function showButtons() {
  //at beginning
  if (ggbApplet.isAnimationRunning("time") == false && ggbApplet.getValue("time") == -1) {
    ggbApplet.setVisible("reset", false);
    ggbApplet.setVisible("save", false);
    ggbApplet.setVisible("stop", false);
    ggbApplet.setVisible("measure", true);
  }
  //at end
  if (ggbApplet.isAnimationRunning("time") == false && ggbApplet.getValue("time") > -1) {
    ggbApplet.setVisible("reset", true);
    ggbApplet.setVisible("save", true);
    ggbApplet.setVisible("stop", false);
    ggbApplet.setVisible("measure", false);
  }
  //while bouncing
  if (ggbApplet.isAnimationRunning("time") == true) {
    ggbApplet.setVisible("reset", false);
    ggbApplet.setVisible("save", false);
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
  StartPt = "";
  //sets all blocks invisible
  for (var i = 2; i < 92; i++) {
    ggbApplet.setVisible("C" + i, false);
    ggbApplet.setVisible("D" + i, false);
    ggbApplet.setVisible("E" + i, false);
    ggbApplet.setVisible("F" + i, false);
    ggbApplet.setVisible("G" + i, false);
    ggbApplet.setVisible("I" + i, false);
    ggbApplet.setVisible("J" + i, false);
    ggbApplet.setVisible("K" + i, false);
    ggbApplet.setVisible("L" + i, false);
    ggbApplet.setVisible("M" + i, false);
    ggbApplet.setVisible("N" + i, false);
    ggbApplet.setVisible("O" + i, false);
    ggbApplet.setVisible("quadP", false);
    ggbApplet.setVisible("quadQ", false);
    ggbApplet.setVisible("quadR", false);
    ggbApplet.setVisible("quadS", false);
    ggbApplet.setVisible("quadT", false);
  }
  //updates buttons
  showButtons();
}
