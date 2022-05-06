function ggbOnInit() {
  ggbApplet.registerObjectClickListener("popul8Button", "popul8");
  ggbApplet.registerObjectClickListener("reset", "reset");
  ggbApplet.registerObjectClickListener("addButton", "organize");
  ggbApplet.registerObjectUpdateListener("InputBox2", "popul8");
  ggbApplet.registerObjectUpdateListener("InputBox3", "popul8");
  ggbApplet.registerObjectClickListener("bundle", "bundle");
}

//alll of the global variables
var rowAdderOnes = 0;
var rowAdderTens = 0;
var rowAdderHuns = 0;
var rowAdderThous = 0;
var rowAdderTenThou = 0;
var rowAdderHunThou = 0;
var rowAdderMil = 0;
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
var labelMil2 = ggbApplet.getValue("milCount2");
var labelHunThou2 = ggbApplet.getValue("hunthouCount2");
var labelTenThou2 = ggbApplet.getValue("tenthouCount2");
var labelThous2 = ggbApplet.getValue("thouCount2");
var labelHuns2 = ggbApplet.getValue("hunsCount2");
var labelTens2 = ggbApplet.getValue("tensCount2");
var labelOnes2 = ggbApplet.getValue("onesCount2");
var pointsM = [];
var pointsHT = [];
var pointsTT = [];
var pointsTH = [];
var pointsH = [];
var pointsT = [];
var pointsO = [];
var pointsMB = [];
var pointsHTB = [];
var pointsTTB = [];
var pointsTHB = [];
var pointsHB = [];
var pointsTB = [];
var pointsOB = [];
var click = 0;
var a = 0;
//number of points that have been bundled up
var bundNum = 0;
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
  labelMil2 = ggbApplet.getValue("milCount2");
  labelHunThou2 = ggbApplet.getValue("hunthouCount2");
  labelTenThou2 = ggbApplet.getValue("tenthouCount2");
  labelThous2 = ggbApplet.getValue("thouCount2");
  labelHuns2 = ggbApplet.getValue("hunsCount2");
  labelTens2 = ggbApplet.getValue("tensCount2");
  labelOnes2 = ggbApplet.getValue("onesCount2");
  if (click == 1) {
    //create points in millions region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelMil; popLoop++) {
      ggbApplet.evalCommand("M" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("M" + popLoop, ggbApplet.getXcoord("ig24") + popLoop % 5, ggbApplet.getYcoord("ig24") - Math.floor(popLoop / 5));
      ggbApplet.setColor("M" + popLoop, 255, 0, 0);
      ggbApplet.setLayer("M" + popLoop, 0);
      pointsM.push("M" + popLoop);
    }
    //create points in hundred thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelHunThou; popLoop++) {
      ggbApplet.evalCommand("HT" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("HT" + popLoop, ggbApplet.getXcoord("ig23") + popLoop % 5, ggbApplet.getYcoord("ig23") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HT" + popLoop, 255, 127, 0);
      ggbApplet.setLayer("HT" + popLoop, 0);
      pointsHT.push("HT" + popLoop);
    }
    //create points in ten thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelTenThou; popLoop++) {
      ggbApplet.evalCommand("TT" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("TT" + popLoop, ggbApplet.getXcoord("ig22") + popLoop % 5, ggbApplet.getYcoord("ig22") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TT" + popLoop, 255, 215, 0);
      ggbApplet.setLayer("TT" + popLoop, 0);
      pointsTT.push("TT" + popLoop);
    }
    //create points in thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelThous; popLoop++) {
      ggbApplet.evalCommand("TH" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("TH" + popLoop, ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TH" + popLoop, 0, 100, 0);
      ggbApplet.setLayer("TH" + popLoop, 0);
      pointsTH.push("TH" + popLoop);
    }
    //create points in hundreds region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelHuns; popLoop++) {
      ggbApplet.evalCommand("HU" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("HU" + popLoop, ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HU" + popLoop, 0, 127, 175);
      ggbApplet.setLayer("HU" + popLoop, 0);
      pointsH.push("HU" + popLoop);
    }
    //create points in tens region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelTens; popLoop++) {
      ggbApplet.evalCommand("TE" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("TE" + popLoop, ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TE" + popLoop, 0, 0, 255);
      ggbApplet.setLayer("TE" + popLoop, 0);
      pointsT.push("TE" + popLoop);
    }
    //create points in ones region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelOnes; popLoop++) {
      ggbApplet.evalCommand("O" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("O" + popLoop, ggbApplet.getXcoord("ig7") + popLoop % 5, ggbApplet.getYcoord("ig7") - Math.floor(popLoop / 5));
      ggbApplet.setColor("O" + popLoop, 127, 0, 255);
      ggbApplet.setLayer("O" + popLoop, 0);
      pointsO.push("O" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelMil2; popLoop++) {
      ggbApplet.evalCommand("MB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("MB" + popLoop, ggbApplet.getXcoord("ig24") + popLoop % 5, ggbApplet.getYcoord("ig24") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("MB" + popLoop, 255, 0, 0);
      pointsMB.push("MB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelHunThou2; popLoop++) {
      ggbApplet.evalCommand("HTB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("HTB" + popLoop, ggbApplet.getXcoord("ig23") + popLoop % 5, ggbApplet.getYcoord("ig23") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("HTB" + popLoop, 255, 127, 0);
      pointsHTB.push("HTB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelTenThou2; popLoop++) {
      ggbApplet.evalCommand("TTB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("TTB" + popLoop, ggbApplet.getXcoord("ig22") + popLoop % 5, ggbApplet.getYcoord("ig22") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("TTB" + popLoop, 255, 215, 0);
      pointsTTB.push("TTB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelThous2; popLoop++) {
      ggbApplet.evalCommand("THB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("THB" + popLoop, ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("THB" + popLoop, 0, 100, 0);
      pointsTHB.push("THB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelHuns2; popLoop++) {
      ggbApplet.evalCommand("HB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("HB" + popLoop, ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("HB" + popLoop, 0, 127, 175);
      pointsHB.push("HB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelTens2; popLoop++) {
      ggbApplet.evalCommand("TB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("TB" + popLoop, ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("TB" + popLoop, 0, 0, 255);
      pointsTB.push("TB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelOnes2; popLoop++) {
      ggbApplet.evalCommand("OB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("OB" + popLoop, ggbApplet.getXcoord("ig7") + popLoop % 5, ggbApplet.getYcoord("ig7") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("OB" + popLoop, 127, 0, 255);
      pointsOB.push("OB" + popLoop);
    }
    //updates alogrithm text on right
    setText();
  }
  ggbApplet.setVisible("popul8Button", false);
  ggbApplet.setVisible("addButton", true);

  milsList = [...new Set(pointsM.concat(pointsMB))];
  hunThousList = [...new Set(pointsHT.concat(pointsHTB))];
  tenThousList = [...new Set(pointsTT.concat(pointsTTB))];
  thousList = [...new Set(pointsTH.concat(pointsTHB))];
  hunsList = [...new Set(pointsH.concat(pointsHB))];
  tensList = [...new Set(pointsT.concat(pointsTB))];
  onesList = [...new Set(pointsO.concat(pointsOB))];
}

//replots points in the optimal configuration
function organize() {
  milsListLength = milsList.length;
  hunThousListLength = hunThousList.length;
  tenThousListLength = tenThousList.length;
  thousListLength = thousList.length;
  hunsListLength = hunsList.length;
  tensListLength = tensList.length;
  onesListLength = onesList.length;

  //create points in millions region
  for (var popLoop = 0; popLoop < milsListLength; popLoop++) {
    ggbApplet.setCoords(milsList[popLoop], ggbApplet.getXcoord("ig24") + popLoop % 5, ggbApplet.getYcoord("ig24") - Math.floor(popLoop / 5));
    ggbApplet.setColor(milsList[popLoop], 255, 0, 0);
    ggbApplet.setLayer(milsList[popLoop], 0);
  }
  //create points in hundred thousands region
  for (var popLoop = 0; popLoop < hunThousListLength; popLoop++) {
    ggbApplet.setCoords(hunThousList[popLoop], ggbApplet.getXcoord("ig23") + popLoop % 5, ggbApplet.getYcoord("ig23") - Math.floor(popLoop / 5));
    ggbApplet.setColor(hunThousList[popLoop], 255, 127, 0);
    ggbApplet.setLayer(hunThousList[popLoop], 0);
  }
  //create points in ten thousands region
  for (var popLoop = 0; popLoop < tenThousListLength; popLoop++) {
    ggbApplet.setCoords(tenThousList[popLoop], ggbApplet.getXcoord("ig22") + popLoop % 5, ggbApplet.getYcoord("ig22") - Math.floor(popLoop / 5));
    ggbApplet.setColor(tenThousList[popLoop], 255, 215, 0);
    ggbApplet.setLayer(tenThousList[popLoop], 0);
  }
  //create points in thousands region
  for (var popLoop = 0; popLoop < thousListLength; popLoop++) {
    ggbApplet.setCoords(thousList[popLoop], ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - Math.floor(popLoop / 5));
    ggbApplet.setColor(thousList[popLoop], 0, 100, 0);
    ggbApplet.setLayer(thousList[popLoop], 0);
  }
  //create points in hundreds region
  for (var popLoop = 0; popLoop < hunsListLength; popLoop++) {
    ggbApplet.setCoords(hunsList[popLoop], ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - Math.floor(popLoop / 5));
    ggbApplet.setColor(hunsList[popLoop], 0, 127, 175);
    ggbApplet.setLayer(hunsList[popLoop], 0);
  }
  //create points in tens region
  for (var popLoop = 0; popLoop < tensListLength; popLoop++) {
    ggbApplet.setCoords(tensList[popLoop], ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - Math.floor(popLoop / 5));
    ggbApplet.setColor(tensList[popLoop], 0, 0, 255);
    ggbApplet.setLayer(tensList[popLoop], 0);
  }
  //create points in ones region
  for (var popLoop = 0; popLoop < onesListLength; popLoop++) {
    ggbApplet.setCoords(onesList[popLoop], ggbApplet.getXcoord("ig7") + popLoop % 5, ggbApplet.getYcoord("ig7") - Math.floor(popLoop / 5));
    ggbApplet.setColor(onesList[popLoop], 127, 0, 255);
    ggbApplet.setLayer(onesList[popLoop], 0);
  }
  setAnswerText();
  ggbApplet.setVisible("addButton", false);
  ggbApplet.setVisible("bundle", true);
}

function bundle() {
  //determines length of lists
  milsListLength = milsList.length;
  hunThousListLength = hunThousList.length;
  tenThousListLength = tenThousList.length;
  thousListLength = thousList.length;
  hunsListLength = hunsList.length;
  tensListLength = tensList.length;
  onesListLength = onesList.length;
  //set points invisible and remove from ones list
  if (onesListLength >= 10) {
    for (var i = 0; i < 10; i++) {
      ggbApplet.setVisible(onesList[onesListLength - 1 - i], false);
      onesList.pop();
    }
    ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
    tensList.push("BundlePoint" + bundNum);
    bundNum = bundNum + 1;
    organize();
    //rewrites the algorithm to reflect new pvc
    ggbApplet.setValue("tensCount3", ggbApplet.getValue("tensCount") + 1);
    ggbApplet.setVisible("a_1", true);
    ggbApplet.setVisible("textTens3", true);
    ggbApplet.setValue("oneBool", true);
  }
  if (tensListLength >= 10) {
    for (var i = 0; i < 10; i++) {
      ggbApplet.setVisible(tensList[tensListLength - 1 - i], false);
      tensList.pop();
    }
    ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
    hunsList.push("BundlePoint" + bundNum);
    bundNum = bundNum + 1;
    organize();
    //rewrites the algorithm to reflect new pvc
    ggbApplet.setValue("hunsCount3", ggbApplet.getValue("hunsCount") + 1);
    ggbApplet.setVisible("t_1", true);
    ggbApplet.setVisible("textHuns3", true);
    ggbApplet.setValue("tenBool", true);
  }
  if (hunsListLength >= 10) {
    for (var i = 0; i < 10; i++) {
      ggbApplet.setVisible(hunsList[hunsListLength - 1 - i], false);
      hunsList.pop();
    }
    ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
    thousList.push("BundlePoint" + bundNum);
    bundNum = bundNum + 1;
    organize();
    //rewrites the algorithm to reflect new pvc
    ggbApplet.setValue("thouCount3", ggbApplet.getValue("thouCount") + 1);
    ggbApplet.setVisible("i", true);
    ggbApplet.setVisible("textThou3", true);
    ggbApplet.setValue("hunBool", true);
  }
  if (thousListLength >= 10) {
    for (var i = 0; i < 10; i++) {
      ggbApplet.setVisible(thousList[thousListLength - 1 - i], false);
      thousList.pop();
    }
    ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
    tenThousList.push("BundlePoint" + bundNum);
    bundNum = bundNum + 1;
    organize();
    //rewrites the algorithm to reflect new pvc
    ggbApplet.setValue("tenthouCount3", ggbApplet.getValue("tenthouCount") + 1);
    ggbApplet.setVisible("h", true);
    ggbApplet.setVisible("textTenThou3", true);
    ggbApplet.setValue("thouBool", true);
  }
  if (tenThousListLength >= 10) {
    for (var i = 0; i < 10; i++) {
      ggbApplet.setVisible(tenThousList[tenThousListLength - 1 - i], false);
      tenThousList.pop();
    }
    ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
    hunThousList.push("BundlePoint" + bundNum);
    bundNum = bundNum + 1;
    organize();
    //rewrites the algorithm to reflect new pvc
    ggbApplet.setValue("hunthouCount3", ggbApplet.getValue("hunthouCount") + 1);
    ggbApplet.setVisible("g", true);
    ggbApplet.setVisible("textHunThou3", true);
    ggbApplet.setValue("tenThouBool", true);
  }
  if (hunThousListLength >= 10) {
    for (var i = 0; i < 10; i++) {
      ggbApplet.setVisible(hunThousList[hunThousListLength - 1 - i], false);
      hunThousList.pop();
    }
    ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
    milsList.push("BundlePoint" + bundNum);
    bundNum = bundNum + 1;
    organize();
    //rewrites the algorithm to reflect new pvc
    if (ggbApplet.getValue("milCount") == 0) {
      ggbApplet.setValue("hunthouCount3", ggbApplet.getValue("hunthouCount") + 10);
    } else {
      ggbApplet.setValue("milCount3", ggbApplet.getValue("milCount") + 1);
      ggbApplet.setVisible("f", true);
      ggbApplet.setVisible("textMil3", true);
      ggbApplet.setValue("hunThouBool", true);
    }
  }
  ggbApplet.setVisible("bundle", false);
}

//updates text for the first number based on number of points in each region
function setText() {
  ggbApplet.evalCommand("textMil = Text(" + pointsM.length + ")");
  ggbApplet.evalCommand("textHunThou = Text(" + pointsHT.length + ")");
  ggbApplet.evalCommand("textTenThou = Text(" + pointsTT.length + ")");
  ggbApplet.evalCommand("textThou = Text(" + pointsTH.length + ")");
  ggbApplet.evalCommand("textHuns = Text(" + pointsH.length + ")");
  ggbApplet.evalCommand("textTens = Text(" + pointsT.length + ")");
  ggbApplet.evalCommand("textOnes = Text(" + pointsO.length + ")");
  ggbApplet.setVisible("textMil", true);
  ggbApplet.setVisible("textHunThou", true);
  ggbApplet.setVisible("textTenThou", true);
  ggbApplet.setVisible("textThou", true);
  ggbApplet.setVisible("textHuns", true);
  ggbApplet.setVisible("textTens", true);
  ggbApplet.setVisible("textOnes", true);
  if (pointsM.length == 0) {
    ggbApplet.setVisible("textMil", false);
  }
  if (pointsM.length == 0 && pointsHT.length == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
  }
  if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
    ggbApplet.setVisible("textTenThou", false);
  }
  if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0 && pointsTH.length == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
    ggbApplet.setVisible("textTenThou", false);
    ggbApplet.setVisible("textThou", false);
  }
  if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0 && pointsTH.length == 0 && pointsH.length == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
    ggbApplet.setVisible("textTenThou", false);
    ggbApplet.setVisible("textThou", false);
    ggbApplet.setVisible("textHuns", false);
  }
  if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0 && pointsTH.length == 0 && pointsH.length == 0 && pointsT.length == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
    ggbApplet.setVisible("textTenThou", false);
    ggbApplet.setVisible("textThou", false);
    ggbApplet.setVisible("textHuns", false);
    ggbApplet.setVisible("textTens", false);
  }
  ggbApplet.setVisible("textMil2", true);
  ggbApplet.setVisible("textHunThou2", true);
  ggbApplet.setVisible("textTenThou2", true);
  ggbApplet.setVisible("textThou2", true);
  ggbApplet.setVisible("textHuns2", true);
  ggbApplet.setVisible("textTens2", true);
  ggbApplet.setVisible("textOnes2", true);
  if (labelMil2 == 0) {
    ggbApplet.setVisible("textMil2", false);
  }
  if (labelMil2 == 0 && labelHunThou2 == 0) {
    ggbApplet.setVisible("textMil2", false);
    ggbApplet.setVisible("textHunThou2", false);
  }
  if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0) {
    ggbApplet.setVisible("textMil2", false);
    ggbApplet.setVisible("textHunThou2", false);
    ggbApplet.setVisible("textTenThou2", false);
  }
  if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0 && labelThous2 == 0) {
    ggbApplet.setVisible("textMil2", false);
    ggbApplet.setVisible("textHunThou2", false);
    ggbApplet.setVisible("textTenThou2", false);
    ggbApplet.setVisible("textThou2", false);
  }
  if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0 && labelThous2 == 0 && labelHuns2 == 0) {
    ggbApplet.setVisible("textMil2", false);
    ggbApplet.setVisible("textHunThou2", false);
    ggbApplet.setVisible("textTenThou2", false);
    ggbApplet.setVisible("textThou2", false);
    ggbApplet.setVisible("textHuns2", false);
  }
  if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0 && labelThous2 == 0 && labelHuns2 == 0 && labelTens2 == 0) {
    ggbApplet.setVisible("textMil2", false);
    ggbApplet.setVisible("textHunThou2", false);
    ggbApplet.setVisible("textTenThou2", false);
    ggbApplet.setVisible("textThou2", false);
    ggbApplet.setVisible("textHuns2", false);
    ggbApplet.setVisible("textTens2", false);
  }
}

function setAnswerText() {
  ggbApplet.setVisible("textMil4", true);
  ggbApplet.setVisible("textHunThou4", true);
  ggbApplet.setVisible("textTenThou4", true);
  ggbApplet.setVisible("textThou4", true);
  ggbApplet.setVisible("textHuns4", true);
  ggbApplet.setVisible("textTens4", true);
  ggbApplet.setVisible("textOnes4", true);
  if (ggbApplet.getValue("milCount4") == 0) {
    ggbApplet.setVisible("textMil4", false);
  }
  if (ggbApplet.getValue("milCount4") == 0 && ggbApplet.getValue("hunthouCount4") == 0) {
    ggbApplet.setVisible("textMil4", false);
    ggbApplet.setVisible("textHunThou4", false);
  }
  if (ggbApplet.getValue("milCount4") == 0 && ggbApplet.getValue("hunthouCount4") == 0 && ggbApplet.getValue("tenthouCount4") == 0) {
    ggbApplet.setVisible("textMil4", false);
    ggbApplet.setVisible("textHunThou4", false);
    ggbApplet.setVisible("textTenThou4", false);
  }
  if (ggbApplet.getValue("milCount4") == 0 && ggbApplet.getValue("hunthouCount4") == 0 && ggbApplet.getValue("tenthouCount4") == 0 && ggbApplet.getValue("thouCount4") == 0) {
    ggbApplet.setVisible("textMil4", false);
    ggbApplet.setVisible("textHunThou4", false);
    ggbApplet.setVisible("textTenThou4", false);
    ggbApplet.setVisible("textThou4", false);
  }
  if (ggbApplet.getValue("milCount4") == 0 && ggbApplet.getValue("hunthouCount4") == 0 && ggbApplet.getValue("tenthouCount4") == 0 && ggbApplet.getValue("thouCount4") == 0 && ggbApplet.getValue("hunsCount4") == 0) {
    ggbApplet.setVisible("textMil4", false);
    ggbApplet.setVisible("textHunThou4", false);
    ggbApplet.setVisible("textTenThou4", false);
    ggbApplet.setVisible("textThou4", false);
    ggbApplet.setVisible("textHuns4", false);
  }
  if (ggbApplet.getValue("milCount4") == 0 && ggbApplet.getValue("hunthouCount4") == 0 && ggbApplet.getValue("tenthouCount4") == 0 && ggbApplet.getValue("thouCount4") == 0 && ggbApplet.getValue("hunsCount4") == 0 && ggbApplet.getValue("tensCount4") == 0) {
    ggbApplet.setVisible("textMil4", false);
    ggbApplet.setVisible("textHunThou4", false);
    ggbApplet.setVisible("textTenThou4", false);
    ggbApplet.setVisible("textThou4", false);
    ggbApplet.setVisible("textHuns4", false);
    ggbApplet.setVisible("textTens4", false);
  }
}

//sets all values back to the start
function reset() {
  click = 0;
  //set question button visible and subtract it button invisible
  ggbApplet.setVisible("popul8Button", true);
  ggbApplet.setVisible("addButton", false);
  ggbApplet.setVisible("bundle", false);
  rowAdderOnes = 0;
  rowAdderTens = 0;
  rowAdderHuns = 0;
  rowAdderThous = 0;
  rowAdderTenThou = 0;
  rowAdderHunThou = 0;
  rowAdderMil = 0;
  pointsM = [];
  pointsHT = [];
  pointsTT = [];
  pointsTH = [];
  pointsH = [];
  pointsT = [];
  pointsO = [];
  pointsMB = [];
  pointsHTB = [];
  pointsTTB = [];
  pointsTHB = [];
  pointsHB = [];
  pointsTB = [];
  pointsOB = [];
  pointNames = [];
  labelMil = ggbApplet.getValue("milCount");
  labelHunThou = ggbApplet.getValue("hunthouCount");
  labelTenThou = ggbApplet.getValue("tenthouCount");
  labelThous = ggbApplet.getValue("thouCount");
  labelHuns = ggbApplet.getValue("hunsCount");
  labelTens = ggbApplet.getValue("tensCount");
  labelOnes = ggbApplet.getValue("onesCount");
  labelMil2 = ggbApplet.getValue("milCount2");
  labelHunThou2 = ggbApplet.getValue("hunthouCount2");
  labelTenThou2 = ggbApplet.getValue("tenthouCount2");
  labelThous2 = ggbApplet.getValue("thouCount2");
  labelHuns2 = ggbApplet.getValue("hunsCount2");
  labelTens2 = ggbApplet.getValue("tensCount2");
  labelOnes2 = ggbApplet.getValue("onesCount2");
  milsListLength = 0;
  hunThousListLength = 0;
  tenThousListLength = 0;
  thousListLength = 0;
  hunsListLength = 0;
  tensListLength = 0;
  onesListLength = 0;

  //sets the cross outs and extra text invisible
  ggbApplet.setVisible("f", false);
  ggbApplet.setVisible("g", false);
  ggbApplet.setVisible("h", false);
  ggbApplet.setVisible("i", false);
  ggbApplet.setVisible("a_1", false);
  ggbApplet.setVisible("b_1", false);
  ggbApplet.setVisible("t_1", false);
  ggbApplet.setVisible("textMil3", false);
  ggbApplet.setVisible("textHunThou3", false);
  ggbApplet.setVisible("textTenThou3", false);
  ggbApplet.setVisible("textThou3", false);
  ggbApplet.setVisible("textHuns3", false);
  ggbApplet.setVisible("textTens3", false);
  ggbApplet.setVisible("textOnes3", false);
  ggbApplet.setVisible("textMil4", false);
  ggbApplet.setVisible("textHunThou4", false);
  ggbApplet.setVisible("textTenThou4", false);
  ggbApplet.setVisible("textThou4", false);
  ggbApplet.setVisible("textHuns4", false);
  ggbApplet.setVisible("textTens4", false);
  ggbApplet.setVisible("textOnes4", false);

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