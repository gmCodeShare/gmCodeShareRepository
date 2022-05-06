function ggbOnInit() {
  ggbApplet.registerClientListener("popul8");
  ggbApplet.registerClientListener("unbundle");
  ggbApplet.registerObjectClickListener("reset", "reset");
  ggbApplet.registerObjectClickListener("bundleButton", "bundle");
  ggbApplet.registerObjectUpdateListener("MultiplierDot", "multiplyIt");
  ggbApplet.registerObjectUpdateListener("DivisorDot", "update");
  ggbApplet.registerObjectClickListener("share", "divideIt");
}
//global variables
//add lists for increased regions
//lists for initial population of points
var starterTensList = [];
var starterOnesList = [];
//lists for all points in a given region
var tensList = [];
var onesList = [];
//change based on number of places
var multiplicand = 10 * starterTensList.length + starterOnesList.length;
var multiplier = ggbApplet.getValue("multiplier");
var dividend = 10 * starterTensList.length + starterOnesList.length;
var divisor = ggbApplet.getValue("divisor");
//number of points that have been bundled up
var bundNum = 0;
//sets beginning point for organizing points
var xStartTen = ggbApplet.getXcoord("TensStarter");
var yStartTen = ggbApplet.getYcoord("TensStarter");
var xStartOne = ggbApplet.getXcoord("OnesStarter");
var yStartOne = ggbApplet.getYcoord("OnesStarter");
var rowAdderOnes = 0;
var rowAdderTens = 0;
var labelTens = ggbApplet.getValue("tensCount");
var labelOnes = ggbApplet.getValue("onesCount");
var unbundledTens = 0;
var unbundledOnes = 0;

//inital population of points
//student grabs points from bottom and drags into box
function popul8(grabbed) {
  //assigns name and type of object selected
  if (grabbed[0] == "select") {
    name = grabbed[1];
    type = ggbApplet.getObjectType(grabbed[1]);
  }
  //at the end of the drag
  if (grabbed[0] == "dragEnd") {
    //assigns name and type of object selected
    name = grabbed[1];
    type = ggbApplet.getObjectType(grabbed[1]);
    if (type == "point") {
      //move master points to tens region of pvc chart
      if (name.includes("MasterTen") && ggbApplet.getYcoord(name) > 5 && ggbApplet.getYcoord(name) < 27) {
        //make a list of points that are initially populated
        starterTensList.push(name);
        //organizes points into 5 columns and up to 2 rows, starting at
        for (var i = 0; i < starterTensList.length; i++) {
          ggbApplet.setCoords(name, xStartTen + i % 5, yStartTen - Math.floor(i / 5));
        }
      }
      //move master points to ones region of pvc chart
      if (name.includes("MasterOne") && ggbApplet.getYcoord(name) > 5 && ggbApplet.getYcoord(name) < 27) {
        starterOnesList.push(name);
        for (var i = 0; i < starterOnesList.length; i++) {
          ggbApplet.setCoords(name, xStartOne + i % 5, yStartOne - Math.floor(i / 5));
        }
      }
    }
  }
  update();
}

//bundles points into a dot in a new region when clicked if possible
function bundle() {
  debugger;
  //updates the number that tracks how many sets were bundled
  bundNum = bundNum + 1;
  //determines length of tens list
  var tenLength = tensList.length;
  //gives the starting x coordinate for bundled points
  var xBP = xStartTen - 1;
  //gives the starting y coordinate for bundled points if no tens exist yet or based on last created tens point
  if (tenLength == 0) {
    var yBP = yStartTen - 1;
  } else {
    var yBP = ggbApplet.getYcoord(tensList[tenLength - 1]);
  }
  //gives the starting y coordinate if points have not already been bundled
  if (tenLength > 0 && !tensList[tenLength - 1].includes("BundlePoint")) {
    yBP = yBP - 2;
  }
  //gives the starting y coordinate if up to 5 points have already been bundled
  if (bundNum < 6) {
    xBP = xBP + bundNum;
  }
  //gives the starting x and y coordinate if bundling 6th point, which creates another row
  if (bundNum == 6) {
    xBP = xBP + 1;
    yBP = yBP - 2;
  }
  //gives the starting x and y coordinate in the for points in the new row
  if (bundNum > 6) {
    xBP = xBP + bundNum - 5;
  }
  //sets coordinate of new BundlePoint
  ggbApplet.setCoords("BundlePoint" + bundNum, xBP, yBP);
  //adds that point to the list of points in the tens region
  tensList.push("BundlePoint" + bundNum);
  //sets the bundled points visibility to false and removes them from the ones list
  var oneLength = onesList.length;
  for (var i = 0; i < 10; i++) {
    ggbApplet.setVisible(onesList[oneLength - 1 - i], false);
    onesList.pop();
  }
  //allows you to see the bundle button if there are enough points to bundle
  if (onesList.length >= 10) {
    ggbApplet.setVisible("bundleButton", true);
  } else {
    ggbApplet.setVisible("bundleButton", false);
  }
}

//unbundles points when dragged to a new region
function unbundle(grabbed) {
  if (grabbed[0] == "select") {
    name = grabbed[1];
    type = ggbApplet.getObjectType(grabbed[1]);
  }
  //if a tens point is dragged to the ones region
  if (grabbed[0] == "dragEnd") {
    type = ggbApplet.getObjectType(grabbed[1]);
    if (type == "point") {
      if ((name.includes("T") && ggbApplet.getXcoord(grabbed[1]) > 16) || (name.includes("BundlePoint") && ggbApplet.getXcoord(grabbed[1]) > 16)) {
        //removes point from tens list
        var choppingBlock = tensList.indexOf(name);
        tensList.splice(choppingBlock, 1);
        //it sets that point's visibility to false and creates ten new points in the ones region in two rows of five and adds them to the regional list
        ggbApplet.evalCommand("SetVisibleInView(" + name + ",1,false)");
        var yEndOne = ggbApplet.getYcoord(onesList[onesList.length - 1]) - 1;
        for (var column = 0; column < 2; column++) {
          for (var row = 0; row < 5; row++) {
            ggbApplet.evalCommand("UO" + labelOnes + "=PointIn(box)");
            ggbApplet.setCoords("UO" + labelOnes, xStartOne + row, yEndOne - column);
            ggbApplet.setColor("UO" + labelOnes, 0, 100, 0);
            onesList.push("UO" + labelOnes);
            labelOnes++;
          }
        }
        //bumps the next row available down one and tells later functions how many unbundled ones there are
        rowAdderOnes = rowAdderOnes + 1;
        unbundledOnes = unbundledOnes + 1;
      }
    }
  }
  //allows you to see the bundle button if there are enough points to bundle
  if (onesList.length >= 10) {
    ggbApplet.setVisible("bundleButton", true);
  } else {
    ggbApplet.setVisible("bundleButton", false);
  }
}

//updates text
function update() {
  //update variables to represent disks present
  //comment out lines pertaining to other operations
  multiplicand = 10 * starterTensList.length + starterOnesList.length;
  multiplier = ggbApplet.getValue("multiplier");
  ggbApplet.evalCommand("text4=Text(" + multiplier + ")");
  ggbApplet.evalCommand("text6=Text(" + multiplicand + ")");
  dividend = 10 * starterTensList.length + starterOnesList.length;
  divisor = ggbApplet.getValue("divisor");
  ggbApplet.evalCommand("text7=Text(" + dividend + ")");
  ggbApplet.evalCommand("text9=Text(" + divisor + ")");
  if (ggbApplet.getValue("o") == true) {
    ggbApplet.setCoords("ig2", ggbApplet.getXcoord("ig2"), 22);
    ggbApplet.setCoords("ig3", ggbApplet.getXcoord("ig3"), 22);
    ggbApplet.setCoords("ig6", ggbApplet.getXcoord("ig6"), 22);
  } else {
    ggbApplet.setCoords("ig2", ggbApplet.getXcoord("ig2"), 5);
    ggbApplet.setCoords("ig3", ggbApplet.getXcoord("ig3"), 5);
    ggbApplet.setCoords("ig6", ggbApplet.getXcoord("ig6"), 5);
  }
}

//multiplies existing copies based on MultiplierDot position
function multiplyIt() {
  //hide the master points
  for (var i = 1; i < 11; i++) {
    ggbApplet.setVisible("MasterTen" + i, false);
    ggbApplet.setVisible("MasterOne" + i, false);
  }
  //update variables and text to represent disks present
  update();
  //create product points and set the color to red
  var tensCount = Math.floor(multiplicand / 10);
  for (var i = 0; i < multiplier; i++) {
    for (var j = 0; j < tensCount; j++) {
      var tensRowCount = Math.floor(j / 5) + 1;
      ggbApplet.evalCommand("T" + j + i + " = PointIn(box)");
      ggbApplet.setCoords("T" + j + i, j % 5 + xStartTen, yStartTen + 1 - tensRowCount - 2 * i);
      ggbApplet.setColor("T" + j + i, 255, 0, 0);
      if (tensList.indexOf("T" + j + i) == -1) {
        tensList.push("T" + j + i);
      }
    }
    //create product points and set the color to green
    var onesCount = multiplicand % 10;
    for (var k = 0; k < onesCount; k++) {
      var onesRowCount = Math.floor(k / 5) + 1;
      ggbApplet.evalCommand("O" + k + i + " = PointIn(box)");
      ggbApplet.setCoords("O" + k + i, k % 5 + xStartOne, yStartOne + 1 - onesRowCount - 2 * i);
      ggbApplet.setColor("O" + k + i, 0, 100, 0);
      if (onesList.indexOf("O" + k + i) == -1) {
        onesList.push("O" + k + i);
      }
    }
  }
  if (onesList.length >= 10) {
    ggbApplet.setVisible("bundleButton", true);
  } else {
    ggbApplet.setVisible("bundleButton", false);
  }
}

//divides existing copies based on DivisorDot position
function divideIt() {
  //hide the bundle button
  ggbApplet.setVisible("bundleButton", false);
  //hide the master points
  for (var i = 1; i < 11; i++) {
    ggbApplet.setVisible("MasterTen" + i, false);
    ggbApplet.setVisible("MasterOne" + i, false);
  }
  //update variables and text to represent disks present
  update();
  //create dividend points and set the color to red
  var tensCount = Math.floor(dividend / 10);
  for (var j = 0; j < tensCount; j++) {
    var tensRowCount = Math.floor(j / 5) + 1;
    ggbApplet.evalCommand("T" + j + " = PointIn(box)");
    ggbApplet.setCoords("T" + j, j % 5 + xStartTen, yStartTen);
    ggbApplet.setColor("T" + j, 255, 0, 0);
    if (tensList.indexOf("T" + j) == -1) {
      tensList.push("T" + j);
    }
    //create dividend points and set the color to green
    var onesCount = dividend % 10;
    for (var k = 0; k < onesCount; k++) {
      var onesRowCount = Math.floor(k / 5) + 1;
      ggbApplet.evalCommand("O" + k + " = PointIn(box)");
      ggbApplet.setCoords("O" + k, k % 5 + xStartOne, yStartOne);
      ggbApplet.setColor("O" + k, 0, 100, 0);
      if (onesList.indexOf("O" + k) == -1) {
        onesList.push("O" + k);
      }
    }
  }
  //if there are more tens points in the chart than the divisor, it moves as many sets of points to the bottom of the chart as it can
  for (var i = 0; i < Math.floor(tensList.length / divisor) * divisor; i++) {
    if (pointsT.length >= divisor) {
      ggbApplet.setCoords(tensList[i], xStartTen + 1 + Math.floor(i / divisor), ggbApplet.getYcoord("ig2") + 1 + i % divisor);
    }
  }
  //if there are more ones points in the chart than the divisor, it moves as many sets of points to the bottom of the chart as it can
  for (var i = 0; i < Math.floor(onesList.length / divisor) * divisor; i++) {
    if (onesList.length >= divisor) {
      ggbApplet.setCoords(onesList[i], xStartOne + 1 + Math.floor(i / divisor), ggbApplet.getYcoord("ig3") + 1 + i % divisor);
    }
  }
}


//puts everything back to the start
function reset() {
  //put the master points and multiplier dot back to start
  ggbApplet.setCoords("MultiplierDot", 30, 28);
  ggbApplet.setCoords("DivisorDot", 34, 28);
  for (var i = 1; i < 11; i++) {
    ggbApplet.setCoords("MasterOne" + i, (ggbApplet.getXcoord("ig6") - ggbApplet.getXcoord("ig3")) / 2 + ggbApplet.getXcoord("ig3"), ggbApplet.getYcoord("ig3") - 1);
    ggbApplet.setCoords("MasterTen" + i, (ggbApplet.getXcoord("ig3") - ggbApplet.getXcoord("ig2")) / 2 + ggbApplet.getXcoord("ig2"), ggbApplet.getYcoord("ig2") - 1);
    ggbApplet.setVisible("MasterTen" + i, true);
    ggbApplet.setVisible("MasterOne" + i, true);
    ggbApplet.setCoords("BundlePoint" + i, 0, 0);
  }
  //hides the bundle button
  ggbApplet.setVisible("bundleButton", false);
  //sets number of bundled points back to zero
  bundNum = 0;
  labelTens = ggbApplet.getValue("tensCount");
  labelOnes = ggbApplet.getValue("onesCount");
  //clears out lists
  starterTensList = [];
  starterOnesList = [];
  tensList = [];
  onesList = [];
  //delete all points that aren't important
  var pointNames = [];
  pointNames = ggbApplet.getAllObjectNames("point");
  lengthPointNames = pointNames.length;
  for (var i = 0; i < lengthPointNames; i++) {
    if (!pointNames[i].includes("ig") && !pointNames[i].includes("Master") && !pointNames[i].includes("BundlePoint") && !pointNames[i].includes("Dot") && !pointNames[i].includes("Starter") && !pointNames[i].includes("Vac")) {
      ggbApplet.deleteObject(pointNames[i]);
    }
  }
}
