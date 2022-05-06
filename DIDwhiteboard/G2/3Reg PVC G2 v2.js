function ggbOnInit() {
  ggbApplet.registerObjectClickListener("scatter", "scatter");
  ggbApplet.registerObjectClickListener("reset", "reset");
  ggbApplet.registerObjectClickListener("organize", "organize");
  ggbApplet.registerObjectClickListener("bundle", "bundle");
  ggbApplet.registerObjectUpdateListener("radius", "scoop");
  ggbApplet.registerObjectUpdateListener("InputBox1", "scatter");
}
//number of sticks
var Number = ggbApplet.getValue("Number");

//scatters sticks in field
function scatter() {
  //updates number
  Number = ggbApplet.getValue("Number");
  //circles (tens) loop
  for (var j = 0; j < Math.floor(Number / 10); j++) {
    //ones loop
    for (var i = 0; i < Number; i++) {
      //weird variable for circle number based on tens
      //creates center of circle and circle-related points
      ggbApplet.evalCommand("Center" + j + "=(6,4)");
      ggbApplet.evalCommand("Bundle" + j + "=Circle(Center" + j + ", radius)");
      ggbApplet.evalCommand("CircleTop" + j + "=Center" + j + "+(0,radius)");
      //creates evenly spaced points around circle
      ggbApplet.evalCommand("SnapPointList" + j + "=Sequence(Rotate(CircleTop" + j + ", 36°*i,Center" + j + "), i, 1, 10)");
      //create the points that make the center of the sticks
      ggbApplet.evalCommand("OnesPoint" + i + "=(0,0)");
      //randomizes those stick centers
      ggbApplet.setCoords("OnesPoint" + i, Math.floor(Math.random() * 11), Math.floor(Math.random() * 11));
      //creates randomly-oriented sticks, makes them tan, and makes them thick
      ggbApplet.evalCommand("rand" + i + "=Random()");
      ggbApplet.evalCommand("OnesStick" + i + "=Segment(OnesPoint" + i + "+(rand" + i + ",1 - rand" + i + "^2),OnesPoint" + i + "-(rand" + i + ",1 - rand" + i + "^2))");
      ggbApplet.setColor("OnesStick" + i, 153, 51, 0);
      ggbApplet.setLineThickness("OnesStick" + i, 13);
      //gets point on circle closest to ones points
      ggbApplet.evalCommand("CloseSnapPoint" + j + i + "=ClosestPoint(SnapPointList" + j + ",OnesPoint" + i + ")");
      //sets functional points visiblity to false
      ggbApplet.setVisible("CloseSnapPoint" + j + i, false);
      ggbApplet.setVisible("SnapPointList" + j, false);
      ggbApplet.setVisible("CircleTop" + j, false);
    }
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
    var pseudoJ = Math.floor(i / 10);
    //make segment vertical, maintain color and thickness
    ggbApplet.evalCommand("OnesStick" + j + i + "=Segment(OnesPoint" + j + i + "+(0,1),OnesPoint" + j + i + "-(0,1))");
    ggbApplet.setColor("OnesStick" + j + i, 153, 51, 0);
    ggbApplet.setLineThickness("OnesStick" + j + i, 13);
  }
  //sets visibility of buttons
  ggbApplet.setVisible("scatter", false);
  ggbApplet.setVisible("organize", false);
  ggbApplet.setVisible("bundle", true);
  ggbApplet.setVisible("reset", true);
}

//starts animation of radius, which triggers scoop
function bundle() {
  ggbApplet.setAnimating("radius", true);
  ggbApplet.startAnimation();
  //sets visibility of buttons
  ggbApplet.setVisible("scatter", false);
  ggbApplet.setVisible("organize", false);
  ggbApplet.setVisible("bundle", false);
  ggbApplet.setVisible("reset", true);
}

//drags points together
function scoop() {
  for (var j = 0; j < Math.floor(Number / 10); j++) {
    for (var i = 0; i < 10; i++) {
      //sets OnesPoint to follow closest point on circle
      ggbApplet.evalCommand("OnesPoint" + j + i + ":DynamicCoordinates(OnesPoint" + j + i + ",If(Distance(CloseSnapPoint" + j + i + ",OnesPoint" + j + i + ")<=2,x(CloseSnapPoint" + j + i + "),x(OnesPoint" + j + i + ")),If(Distance(CloseSnapPoint" + j + i + ",OnesPoint" + j + i + ")<=2,y(CloseSnapPoint" + j + i + "),y(OnesPoint" + j + i + ")))");
    }
    //makes center the top selectable point
    ggbApplet.setLayer("Center" + j, 1);
  }
  for (var j = 0; j < Math.floor(Number / 10); j++) {
    for (var i = 0; i < 10; i++) {
      //if the radius is sufficiently small
      if (ggbApplet.getValue("radius") < 0.2) {
        //hide the ones points and sticks
        ggbApplet.setVisible("OnesPoint" + j + i, false);
        ggbApplet.setVisible("OnesStick" + j + i, false);
        //create bundle points and sticks, matching prior segment style
        ggbApplet.evalCommand("TensBundlePoint" + j + i + "=Center" + j + "+(0.1" + i + ",0.1" + i + ")");
        ggbApplet.evalCommand("TensBundleStick" + j + i + "=Segment(TensBundlePoint" + j + i + "+(0,1),TensBundlePoint" + j + i + "-(0,1))");
        ggbApplet.setColor("TensBundleStick" + j + i, 153, 51, 0);
        ggbApplet.setLineThickness("TensBundleStick" + j + i, 13);
      }
    }
  }
}

//resets to the beginning
function reset() {
  ggbApplet.setValue("radius", 10);
  for (var i = 0; i < Number; i++) {
    var pseudoJ = Math.floor(i / 10);
    //deletes everything created
    ggbApplet.deleteObject("OnesPoint" + i);
    ggbApplet.deleteObject("rand" + i);
    ggbApplet.deleteObject("CloseSnapPoint" + i);
    ggbApplet.deleteObject("Center" + pseudoJ);
  }
  //sets visibility of buttons
  ggbApplet.setVisible("scatter", true);
  ggbApplet.setVisible("organize", false);
  ggbApplet.setVisible("bundle", false);
  ggbApplet.setVisible("reset", false);
}