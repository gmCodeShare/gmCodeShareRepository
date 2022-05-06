function ggbOnInit() {
  ggbApplet.registerObjectClickListener("popul8Button", "popul8");
  ggbApplet.registerObjectClickListener("reset", "reset");
  ggbApplet.registerObjectClickListener("x10Button", "multiply");
  ggbApplet.registerObjectUpdateListener("InputBox2", "popul8");
  ggbApplet.registerObjectClickListener("bundle", "bundle");
  ggbApplet.registerObjectUpdateListener("time", "moveIt");
}

//alll of the global variables
//sets beginning point for organizing points
var xStartTen = ggbApplet.getXcoord("ig6");
var yStartTen = ggbApplet.getYcoord("ig6");
var xStartOne = ggbApplet.getXcoord("ig7");
var yStartOne = ggbApplet.getYcoord("ig7");
var xStartHun = ggbApplet.getXcoord("ig5");
var yStartHun = ggbApplet.getYcoord("ig5");
var xStartThou = ggbApplet.getXcoord("ig21");
var yStartThou = ggbApplet.getYcoord("ig21");
var xStartTenThou = ggbApplet.getXcoord("ig22");
var yStartTenThou = ggbApplet.getYcoord("ig22");
var xStartHunThou = ggbApplet.getXcoord("ig23");
var yStartHunThou = ggbApplet.getYcoord("ig23");
var xStartMil = ggbApplet.getXcoord("ig24");
var yStartMil = ggbApplet.getYcoord("ig24");
var labelMil = ggbApplet.getValue("milCount");
var labelHunThou = ggbApplet.getValue("hunthouCount");
var labelTenThou = ggbApplet.getValue("tenthouCount");
var labelThous = ggbApplet.getValue("thouCount");
var labelHuns = ggbApplet.getValue("hunsCount");
var labelTens = ggbApplet.getValue("tensCount");
var labelOnes = ggbApplet.getValue("onesCount");

var pointsM = [];
var pointsHT = [];
var pointsTT = [];
var pointsTH = [];
var pointsH = [];
var pointsT = [];
var pointsO = [];

var click = 0;
var a = 0;
var bundled = false;
//number of points that have been bundled up
var bundleNum = 0;
var multiplier = 10;

//creates the initial points
function popul8() {
  reset();
  click = click + 1;
  labelMil = ggbApplet.getValue("milCount");
  labelHunThou = ggbApplet.getValue("hunthouCount");
  labelTenThou = ggbApplet.getValue("tenthouCount");
  labelThous = ggbApplet.getValue("thouCount");
  labelHuns = ggbApplet.getValue("hunsCount");
  labelTens = ggbApplet.getValue("tensCount");
  labelOnes = ggbApplet.getValue("onesCount");
  if (click == 1) {
    //create points in millions region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelMil; popLoop++) {
      ggbApplet.evalCommand("M" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("M" + popLoop, false, false);
      ggbApplet.setCoords("M" + popLoop, ggbApplet.getXcoord("ig24") + popLoop % 5, ggbApplet.getYcoord("ig24") - Math.floor(popLoop / 5));
      ggbApplet.setColor("M" + popLoop, 255, 0, 0);
      ggbApplet.setLayer("M" + popLoop, 0);
      pointsM.push("M" + popLoop);
    }
    //create points in hundred thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelHunThou; popLoop++) {
      ggbApplet.evalCommand("HT" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HT" + popLoop, false, false);
      ggbApplet.setCoords("HT" + popLoop, ggbApplet.getXcoord("ig23") + popLoop % 5, ggbApplet.getYcoord("ig23") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HT" + popLoop, 255, 127, 0);
      ggbApplet.setLayer("HT" + popLoop, 0);
      pointsHT.push("HT" + popLoop);
    }
    //create points in ten thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelTenThou; popLoop++) {
      ggbApplet.evalCommand("TT" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TT" + popLoop, false, false);
      ggbApplet.setCoords("TT" + popLoop, ggbApplet.getXcoord("ig22") + popLoop % 5, ggbApplet.getYcoord("ig22") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TT" + popLoop, 255, 215, 0);
      ggbApplet.setLayer("TT" + popLoop, 0);
      pointsTT.push("TT" + popLoop);
    }
    //create points in thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelThous; popLoop++) {
      ggbApplet.evalCommand("TH" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TH" + popLoop, false, false);
      ggbApplet.setCoords("TH" + popLoop, ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TH" + popLoop, 0, 100, 0);
      ggbApplet.setLayer("TH" + popLoop, 0);
      pointsTH.push("TH" + popLoop);
    }
    //create points in hundreds region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelHuns; popLoop++) {
      ggbApplet.evalCommand("HU" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HU" + popLoop, false, false);
      ggbApplet.setCoords("HU" + popLoop, ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HU" + popLoop, 0, 127, 175);
      ggbApplet.setLayer("HU" + popLoop, 0);
      pointsH.push("HU" + popLoop);
    }
    //create points in tens region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelTens; popLoop++) {
      ggbApplet.evalCommand("TE" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TE" + popLoop, false, false);
      ggbApplet.setCoords("TE" + popLoop, ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TE" + popLoop, 0, 0, 255);
      ggbApplet.setLayer("TE" + popLoop, 0);
      pointsT.push("TE" + popLoop);
    }
    //create points in ones region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelOnes; popLoop++) {
      ggbApplet.evalCommand("O" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("O" + popLoop, false, false);
      ggbApplet.setCoords("O" + popLoop, ggbApplet.getXcoord("ig7") + popLoop % 5, ggbApplet.getYcoord("ig7") - Math.floor(popLoop / 5));
      ggbApplet.setColor("O" + popLoop, 127, 0, 255);
      ggbApplet.setLayer("O" + popLoop, 0);
      pointsO.push("O" + popLoop);
    }
  }
  ggbApplet.setVisible("popul8Button", false);
  ggbApplet.setVisible("x10Button", true);
}

function multiply() {
  reset();
  click = click + 1;
  labelMil = ggbApplet.getValue("milCount");
  labelHunThou = ggbApplet.getValue("hunthouCount");
  labelTenThou = ggbApplet.getValue("tenthouCount");
  labelThous = ggbApplet.getValue("thouCount");
  labelHuns = ggbApplet.getValue("hunsCount");
  labelTens = ggbApplet.getValue("tensCount");
  labelOnes = ggbApplet.getValue("onesCount");
  if (click == 1) {
    //create points in millions region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < multiplier * labelMil; popLoop++) {
      ggbApplet.evalCommand("M" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("M" + popLoop, false, false);
      ggbApplet.setCoords("M" + popLoop, ggbApplet.getXcoord("ig24") + popLoop % 5, ggbApplet.getYcoord("ig24") - Math.floor(popLoop / 5));
      ggbApplet.setColor("M" + popLoop, 255, 0, 0);
      ggbApplet.setLayer("M" + popLoop, 0);
      pointsM.push("M" + popLoop);
    }
    //create points in hundred thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < multiplier * labelHunThou; popLoop++) {
      ggbApplet.evalCommand("HT" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HT" + popLoop, false, false);
      ggbApplet.setCoords("HT" + popLoop, ggbApplet.getXcoord("ig23") + popLoop % 5, ggbApplet.getYcoord("ig23") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HT" + popLoop, 255, 127, 0);
      ggbApplet.setLayer("HT" + popLoop, 0);
      pointsHT.push("HT" + popLoop);
    }
    //create points in ten thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < multiplier * labelTenThou; popLoop++) {
      ggbApplet.evalCommand("TT" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TT" + popLoop, false, false);
      ggbApplet.setCoords("TT" + popLoop, ggbApplet.getXcoord("ig22") + popLoop % 5, ggbApplet.getYcoord("ig22") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TT" + popLoop, 255, 215, 0);
      ggbApplet.setLayer("TT" + popLoop, 0);
      pointsTT.push("TT" + popLoop);
    }
    //create points in thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < multiplier * labelThous; popLoop++) {
      ggbApplet.evalCommand("TH" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TH" + popLoop, false, false);
      ggbApplet.setCoords("TH" + popLoop, ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TH" + popLoop, 0, 100, 0);
      ggbApplet.setLayer("TH" + popLoop, 0);
      pointsTH.push("TH" + popLoop);
    }
    //create points in hundreds region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < multiplier * labelHuns; popLoop++) {
      ggbApplet.evalCommand("HU" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HU" + popLoop, false, false);
      ggbApplet.setCoords("HU" + popLoop, ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HU" + popLoop, 0, 127, 175);
      ggbApplet.setLayer("HU" + popLoop, 0);
      pointsH.push("HU" + popLoop);
    }
    //create points in tens region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < multiplier * labelTens; popLoop++) {
      ggbApplet.evalCommand("TE" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TE" + popLoop, false, false);
      ggbApplet.setCoords("TE" + popLoop, ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TE" + popLoop, 0, 0, 255);
      ggbApplet.setLayer("TE" + popLoop, 0);
      pointsT.push("TE" + popLoop);
    }
    //create points in ones region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < multiplier * labelOnes; popLoop++) {
      ggbApplet.evalCommand("O" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("O" + popLoop, false, false);
      ggbApplet.setCoords("O" + popLoop, ggbApplet.getXcoord("ig7") + popLoop % 5, ggbApplet.getYcoord("ig7") - Math.floor(popLoop / 5));
      ggbApplet.setColor("O" + popLoop, 127, 0, 255);
      ggbApplet.setLayer("O" + popLoop, 0);
      pointsO.push("O" + popLoop);
    }
  }
  ggbApplet.setVisible("popul8Button", false);
  ggbApplet.setVisible("x10Button", false);
  ggbApplet.setVisible("bundle", true);
}

//replots points in the optimal configuration
function organize() {
  ggbApplet.setVisible("BundlePoint0", false);
  milsListLength = pointsM.length;
  hunThousListLength = pointsHT.length;
  tenThousListLength = pointsTT.length;
  thousListLength = pointsTH.length;
  hunsListLength = pointsH.length;
  tensListLength = pointsT.length;
  onesListLength = pointsO.length;

  //create points in millions region
  for (var popLoop = 0; popLoop < milsListLength; popLoop++) {
    ggbApplet.setCoords(pointsM[popLoop], ggbApplet.getXcoord("ig24") + popLoop % 5, ggbApplet.getYcoord("ig24") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsM[popLoop], 255, 0, 0);
    ggbApplet.setLayer(pointsM[popLoop], 0);
    ggbApplet.setVisible(pointsM[popLoop], true);
  }
  //create points in hundred thousands region
  for (var popLoop = 0; popLoop < hunThousListLength; popLoop++) {
    ggbApplet.setCoords(pointsHT[popLoop], ggbApplet.getXcoord("ig23") + popLoop % 5, ggbApplet.getYcoord("ig23") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsHT[popLoop], 255, 127, 0);
    ggbApplet.setLayer(pointsHT[popLoop], 0);
    ggbApplet.setVisible(pointsHT[popLoop], true);
  }
  //create points in ten thousands region
  for (var popLoop = 0; popLoop < tenThousListLength; popLoop++) {
    ggbApplet.setCoords(pointsTT[popLoop], ggbApplet.getXcoord("ig22") + popLoop % 5, ggbApplet.getYcoord("ig22") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsTT[popLoop], 255, 215, 0);
    ggbApplet.setLayer(pointsTT[popLoop], 0);
    ggbApplet.setVisible(pointsTT[popLoop], true);
  }
  //create points in thousands region
  for (var popLoop = 0; popLoop < thousListLength; popLoop++) {
    ggbApplet.setCoords(pointsTH[popLoop], ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsTH[popLoop], 0, 100, 0);
    ggbApplet.setLayer(pointsTH[popLoop], 0);
    ggbApplet.setVisible(pointsTH[popLoop], true);
  }
  //create points in hundreds region
  for (var popLoop = 0; popLoop < hunsListLength; popLoop++) {
    ggbApplet.setCoords(pointsH[popLoop], ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsH[popLoop], 0, 127, 175);
    ggbApplet.setLayer(pointsH[popLoop], 0);
    ggbApplet.setVisible(pointsH[popLoop], true);
  }
  //create points in tens region
  for (var popLoop = 0; popLoop < tensListLength; popLoop++) {
    ggbApplet.setCoords(pointsT[popLoop], ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsT[popLoop], 0, 0, 255);
    ggbApplet.setLayer(pointsT[popLoop], 0);
    ggbApplet.setVisible(pointsT[popLoop], true);
  }
  //create points in ones region
  for (var popLoop = 0; popLoop < onesListLength; popLoop++) {
    ggbApplet.setCoords(pointsO[popLoop], ggbApplet.getXcoord("ig7") + popLoop % 5, ggbApplet.getYcoord("ig7") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsO[popLoop], 127, 0, 255);
    ggbApplet.setLayer(pointsO[popLoop], 0);
    ggbApplet.setVisible(pointsO[popLoop], true);
  }
}

function bundle() {
  ggbApplet.setValue("time", 0);
  ggbApplet.setAnimating("time", true);
  ggbApplet.startAnimation();
  bundleNum++;
}

function moveIt() {
  //if there are ten or more points in the ones region, translate ten at a time to the tens region, swap them for a ten and reorganize
  if (pointsO.length >= 10) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointsO[pointsO.length - i], false);
      ggbApplet.evalCommand("MovingOnes" + i + "=Translate(" + pointsO[pointsO.length - i] + ",time*Vector(" + pointsO[pointsO.length - i] + ",ig30))");
      ggbApplet.setVisible("MovingOnes" + i, true);
      ggbApplet.setColor("MovingOnes" + i, 127, 0, 255);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingOnes" + i, 0, 0, 255);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingOnes" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointsO.splice(pointsO.length - 10, pointsO.length);
      ggbApplet.evalCommand("BundlePointT" + bundleNum + "=(0,0);");
      pointsT.push("BundlePointT" + bundleNum);
      organize();
    }
  }
  //if there are ten or more points in the tens region, translate ten at a time to the tens region, swap them for a ten and reorganize
  if (pointsO.length < 10 && pointsT.length >= 10) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointsT[pointsT.length - i], false);
      ggbApplet.evalCommand("MovingTens" + i + "=Translate(" + pointsT[pointsT.length - i] + ",time*Vector(" + pointsT[pointsT.length - i] + ",ig29))");
      ggbApplet.setVisible("MovingTens" + i, true);
      ggbApplet.setColor("MovingTens" + i, 0, 0, 255);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingTens" + i, 0, 127, 175);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingTens" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointsT.splice(pointsT.length - 10, pointsT.length);
      ggbApplet.evalCommand("BundlePointH" + bundleNum + "=(0,0);");
      pointsH.push("BundlePointH" + bundleNum);
      organize();
    }
  }
}
//sets all values back to the start
function reset() {
  onesGrowthMarker = 0;
  tensGrowthMarker = 0;
  hunsGrowthMarker = 0;
  thousGrowthMarker = 0;
  tenThousGrowthMarker = 0;
  hunThousGrowthMarker = 0;
  milGrowthMarker = 0;
  click = 0;
  bundNum = 0;
  //set question button visible and subtract it button invisible
  ggbApplet.setVisible("popul8Button", true);
  ggbApplet.setVisible("addButton", false);
  ggbApplet.setVisible("bundle", false);
  pointsM = [];
  pointsHT = [];
  pointsTT = [];
  pointsTH = [];
  pointsH = [];
  pointsT = [];
  pointsO = [];

  pointNames = [];
  labelMil = ggbApplet.getValue("milCount");
  labelHunThou = ggbApplet.getValue("hunthouCount");
  labelTenThou = ggbApplet.getValue("tenthouCount");
  labelThous = ggbApplet.getValue("thouCount");
  labelHuns = ggbApplet.getValue("hunsCount");
  labelTens = ggbApplet.getValue("tensCount");
  labelOnes = ggbApplet.getValue("onesCount");
  ggbApplet.setValue("timeShrink", 0);
  ggbApplet.setValue("timeGrow", 0);
  milsListLength = 0;
  hunThousListLength = 0;
  tenThousListLength = 0;
  thousListLength = 0;
  hunsListLength = 0;
  tensListLength = 0;
  onesListLength = 0;
  bundled = false;

  ggbApplet.setValue("milBool", false);
  ggbApplet.setValue("hunThouBool", false);
  ggbApplet.setValue("tenThouBool", false);
  ggbApplet.setValue("thouBool", false);
  ggbApplet.setValue("hunBool", false);
  ggbApplet.setValue("tenBool", false);
  ggbApplet.setValue("oneBool", false);

  //determined what points where not integral to applet and deletes them
  pointNames = ggbApplet.getAllObjectNames("point");
  lengthPointNames = pointNames.length;
  for (iter9 = 0; iter9 < lengthPointNames; iter9++) {
    if (!pointNames[iter9].includes("ig")) {
      ggbApplet.deleteObject(pointNames[iter9]);
    }
  }
}