function ggbOnInit() {
  ggbApplet.registerObjectClickListener("popul8Button", "popul8");
  ggbApplet.registerObjectClickListener("reset", "reset");
  ggbApplet.registerObjectClickListener("addButton", "organize");
  ggbApplet.registerObjectUpdateListener("InputBox2", "popul8");
  ggbApplet.registerObjectUpdateListener("InputBox3", "popul8");
  ggbApplet.registerObjectClickListener("bundle", "bundle");
  ggbApplet.registerObjectUpdateListener("timeShrink", "shrink");
  ggbApplet.registerObjectUpdateListener("timeGrow", "grow");
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
var bundled = false;
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
    for (var popLoop = 0; popLoop < labelMil2; popLoop++) {
      ggbApplet.evalCommand("MB" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("MB" + popLoop, false, false);
      ggbApplet.setCoords("MB" + popLoop, ggbApplet.getXcoord("ig24") + popLoop % 5, ggbApplet.getYcoord("ig24") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("MB" + popLoop, 255, 0, 0);
      pointsMB.push("MB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelHunThou2; popLoop++) {
      ggbApplet.evalCommand("HTB" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HTB" + popLoop, false, false);
      ggbApplet.setCoords("HTB" + popLoop, ggbApplet.getXcoord("ig23") + popLoop % 5, ggbApplet.getYcoord("ig23") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("HTB" + popLoop, 255, 127, 0);
      pointsHTB.push("HTB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelTenThou2; popLoop++) {
      ggbApplet.evalCommand("TTB" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TTB" + popLoop, false, false);
      ggbApplet.setCoords("TTB" + popLoop, ggbApplet.getXcoord("ig22") + popLoop % 5, ggbApplet.getYcoord("ig22") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("TTB" + popLoop, 255, 215, 0);
      pointsTTB.push("TTB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelThous2; popLoop++) {
      ggbApplet.evalCommand("THB" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("THB" + popLoop, false, false);
      ggbApplet.setCoords("THB" + popLoop, ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("THB" + popLoop, 0, 100, 0);
      pointsTHB.push("THB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelHuns2; popLoop++) {
      ggbApplet.evalCommand("HB" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HB" + popLoop, false, false);
      ggbApplet.setCoords("HB" + popLoop, ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("HB" + popLoop, 0, 127, 175);
      pointsHB.push("HB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelTens2; popLoop++) {
      ggbApplet.evalCommand("TB" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TB" + popLoop, false, false);
      ggbApplet.setCoords("TB" + popLoop, ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - 10 - Math.floor(popLoop / 5));
      ggbApplet.setColor("TB" + popLoop, 0, 0, 255);
      pointsTB.push("TB" + popLoop);
    }
    for (var popLoop = 0; popLoop < labelOnes2; popLoop++) {
      ggbApplet.evalCommand("OB" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("OB" + popLoop, false, false);
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
  ggbApplet.setVisible("BundlePoint0", false);
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
  ggbApplet.setVisible("addButton", false);
  if (bundled == false && (ggbApplet.getValue("milsCount4") > 9 || ggbApplet.getValue("hunthouCount4") > 9 || ggbApplet.getValue("tenthouCount4") > 9 || ggbApplet.getValue("thouCount4") > 9 || ggbApplet.getValue("hunsCount4") > 9 || ggbApplet.getValue("tensCount4") > 9 || ggbApplet.getValue("onesCount4") > 9)) {
    ggbApplet.setVisible("bundle", true);
  }
  setAnswerText();
}

function bundle() {
  ggbApplet.setAnimating("timeShrink", true);
  ggbApplet.startAnimation();
  bundled = true;
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
    ggbApplet.setValue("oneBool", true);
  }
  if (tensListLength >= 10) {
    ggbApplet.setValue("tenBool", true);
  }
  if (hunsListLength >= 10) {
    ggbApplet.setValue("hunBool", true);
  }
  if (thousListLength >= 10) {
    ggbApplet.setValue("thouBool", true);
  }
  if (tenThousListLength >= 10) {
    ggbApplet.setValue("tenThouBool", true);
  }
  if (hunThousListLength >= 10) {
    ggbApplet.setValue("hunThouBool", true);
  }
  if (ggbApplet.getValue("milCount") == 0) {
    ggbApplet.setValue("hunthouCount3", 1);
  } else {
    ggbApplet.setValue("milCount3", 1);
    ggbApplet.setVisible("textMil3", true);
    ggbApplet.setValue("hunThouBool", true);
  }
  ggbApplet.setVisible("bundle", false);
  setAnswerText();
}

var shrinkMarker = 0;

function shrink() {
  var timeShrink = ggbApplet.getValue("timeShrink");
  for (var i = 0; i < 10; i++) {
    if (ggbApplet.getValue("oneBool") == true) {
      ggbApplet.setPointSize(onesList[onesListLength - 1 - i], 5 - timeShrink * 5);
    }
    if (ggbApplet.getValue("tenBool") == true) {
      ggbApplet.setPointSize(tensList[tensListLength - 1 - i], 5 - timeShrink * 5);
    }
    if (ggbApplet.getValue("hunBool") == true) {
      ggbApplet.setPointSize(hunsList[hunsListLength - 1 - i], 5 - timeShrink * 5);
    }
    if (ggbApplet.getValue("thouBool") == true) {
      ggbApplet.setPointSize(thousList[thousListLength - 1 - i], 5 - timeShrink * 5);
    }
    if (ggbApplet.getValue("tenThouBool") == true) {
      ggbApplet.setPointSize(tenThousList[tenThousListLength - 1 - i], 5 - timeShrink * 5);
    }
    if (ggbApplet.getValue("hunThouBool") == true) {
      ggbApplet.setPointSize(hunThousList[hunThousListLength - 1 - i], 5 - timeShrink * 5);
    }
  }
  if (timeShrink > 0.98) {
    ggbApplet.setAnimating("timeGrow", true);
    ggbApplet.startAnimation();
  }
}

var onesGrowthMarker = 0;
var tensGrowthMarker = 0;
var hunsGrowthMarker = 0;
var thousGrowthMarker = 0;
var tenThousGrowthMarker = 0;
var hunThousGrowthMarker = 0;

function grow() {
  var timeGrow = ggbApplet.getValue("timeGrow");
  for (var i = 0; i < 10; i++) {
    if (ggbApplet.getValue("oneBool") == true) {
      ggbApplet.setVisible(tensList[tensListLength - 1], true);
      ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
      //    ggbApplet.setFixed("BundlePoint" + bundNum, false, false);
      if (onesGrowthMarker == 0) {
        for (var i = 0; i < 10; i++) {
          ggbApplet.deleteObject(onesList[onesListLength - 1 - i]);
          onesList.pop();
          bundNum = bundNum + 1;
        }
        tensList.push("BundlePoint" + bundNum);
      }
      organize();
      ggbApplet.setPointSize(tensList[tensListLength - 1], timeGrow * 5);
      onesGrowthMarker++;
    }
    if (ggbApplet.getValue("tenBool") == true) {
      ggbApplet.setVisible(hunsList[hunsListLength - 1], true);
      ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
      //    ggbApplet.setFixed("BundlePoint" + bundNum, false, false);
      ggbApplet.setPointSize("BundlePoint" + bundNum, 1);
      if (tensGrowthMarker == 0) {
        for (var i = 0; i < 10; i++) {
          ggbApplet.deleteObject(tensList[tensListLength - 1 - i]);
          tensList.pop();
          bundNum = bundNum + 1;
        }
        hunsList.push("BundlePoint" + bundNum);
      }
      organize();
      ggbApplet.setPointSize(hunsList[hunsListLength - 1], timeGrow * 5);
      tensGrowthMarker++;
    }
    if (ggbApplet.getValue("hunBool") == true) {
      ggbApplet.setVisible(thousList[hunsListLength - 1], true);
      ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
      //    ggbApplet.setFixed("BundlePoint" + bundNum, false, false);
      ggbApplet.setPointSize("BundlePoint" + bundNum, 1);
      if (hunsGrowthMarker == 0) {
        for (var i = 0; i < 10; i++) {
          ggbApplet.deleteObject(hunsList[hunsListLength - 1 - i]);
          hunsList.pop();
          bundNum = bundNum + 1;
        }
        thousList.push("BundlePoint" + bundNum);
      }
      organize();
      ggbApplet.setPointSize(thousList[thousListLength - 1], timeGrow * 5);
      hunsGrowthMarker++;
    }
    if (ggbApplet.getValue("thouBool") == true) {
      ggbApplet.setVisible(tenThousList[tenThousListLength - 1], true);
      ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
      //    ggbApplet.setFixed("BundlePoint" + bundNum, false, false);
      ggbApplet.setPointSize("BundlePoint" + bundNum, 1);
      if (thousGrowthMarker == 0) {
        for (var i = 0; i < 10; i++) {
          ggbApplet.deleteObject(thousList[thousListLength - 1 - i]);
          thousList.pop();
          bundNum = bundNum + 1;
        }
        tenThousList.push("BundlePoint" + bundNum);
      }
      organize();
      ggbApplet.setPointSize(tenThousList[tenThousListLength - 1], timeGrow * 5);
      thousGrowthMarker++;
    }
    if (ggbApplet.getValue("tenThouBool") == true) {
      ggbApplet.setVisible(hunThousList[hunThousListLength - 1], true);
      ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
      //    ggbApplet.setFixed("BundlePoint" + bundNum, false, false);
      ggbApplet.setPointSize("BundlePoint" + bundNum, 1);
      if (tenThousGrowthMarker == 0) {
        for (var i = 0; i < 10; i++) {
          ggbApplet.deleteObject(tenThousList[tenThousListLength - 1 - i]);
          tenThousList.pop();
          bundNum = bundNum + 1;
        }
        hunThousList.push("BundlePoint" + bundNum);
      }
      organize();
      ggbApplet.setPointSize(hunThousList[hunThousListLength - 1], timeGrow * 5);
      tenThousGrowthMarker++;
    }
    if (ggbApplet.getValue("hunThouBool") == true) {
      ggbApplet.setVisible(milsList[milsListLength - 1], true);
      ggbApplet.evalCommand("BundlePoint" + bundNum + "=PointIn(box)");
      //    ggbApplet.setFixed("BundlePoint" + bundNum, false, false);
      ggbApplet.setPointSize("BundlePoint" + bundNum, 1);
      if (hunThousGrowthMarker == 0) {
        for (var i = 0; i < 10; i++) {
          ggbApplet.deleteObject(hunThousList[hunThousListLength - 1 - i]);
          hunThousList.pop();
          bundNum = bundNum + 1;
        }
        milsList.push("BundlePoint" + bundNum);
      }
      organize();
      ggbApplet.setPointSize(milsList[milsListLength - 1], timeGrow * 5);
      hunThousGrowthMarker++;
    }
  }
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
  if (ggbApplet.getValue("milCount") == 0) {
    ggbApplet.setVisible("textMil", false);
  }
  if (ggbApplet.getValue("milCount") == 0 && ggbApplet.getValue("hunthouCount") == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
  }
  if (ggbApplet.getValue("milCount") == 0 && ggbApplet.getValue("hunthouCount") == 0 && ggbApplet.getValue("tenthouCount") == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
    ggbApplet.setVisible("textTenThou", false);
  }
  if (ggbApplet.getValue("milCount") == 0 && ggbApplet.getValue("hunthouCount") == 0 && ggbApplet.getValue("tenthouCount") == 0 && ggbApplet.getValue("thouCount") == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
    ggbApplet.setVisible("textTenThou", false);
    ggbApplet.setVisible("textThou", false);
  }
  if (ggbApplet.getValue("milCount") == 0 && ggbApplet.getValue("hunthouCount") == 0 && ggbApplet.getValue("tenthouCount") == 0 && ggbApplet.getValue("thouCount") == 0 && ggbApplet.getValue("hunsCount") == 0) {
    ggbApplet.setVisible("textMil", false);
    ggbApplet.setVisible("textHunThou", false);
    ggbApplet.setVisible("textTenThou", false);
    ggbApplet.setVisible("textThou", false);
    ggbApplet.setVisible("textHuns", false);
  }
  if (ggbApplet.getValue("milCount") == 0 && ggbApplet.getValue("hunthouCount") == 0 && ggbApplet.getValue("tenthouCount") == 0 && ggbApplet.getValue("thouCount") == 0 && ggbApplet.getValue("hunsCount") == 0) {
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
  if (bundled == true) {
    ggbApplet.setVisible("textMil4", false);
    ggbApplet.setVisible("textHunThou4", false);
    ggbApplet.setVisible("textTenThou4", false);
    ggbApplet.setVisible("textThou4", false);
    ggbApplet.setVisible("textHuns4", false);
    ggbApplet.setVisible("textTens4", false);
    ggbApplet.setVisible("textOnes4", false);
    ggbApplet.setVisible("textMil5", true);
    ggbApplet.setVisible("textHunThou5", true);
    ggbApplet.setVisible("textTenThou5", true);
    ggbApplet.setVisible("textThou5", true);
    ggbApplet.setVisible("textHuns5", true);
    ggbApplet.setVisible("textTens5", true);
    ggbApplet.setVisible("textOnes5", true);
    if (ggbApplet.getValue("milCount5") == 0) {
      ggbApplet.setVisible("textMil5", false);
    }
    if (ggbApplet.getValue("milCount5") == 0 && ggbApplet.getValue("hunthouCount5") == 0) {
      ggbApplet.setVisible("textMil5", false);
      ggbApplet.setVisible("textHunThou5", false);
    }
    if (ggbApplet.getValue("milCount5") == 0 && ggbApplet.getValue("hunthouCount5") == 0 && ggbApplet.getValue("tenthouCount5") == 0) {
      ggbApplet.setVisible("textMil5", false);
      ggbApplet.setVisible("textHunThou5", false);
      ggbApplet.setVisible("textTenThou5", false);
    }
    if (ggbApplet.getValue("milCount5") == 0 && ggbApplet.getValue("hunthouCount5") == 0 && ggbApplet.getValue("tenthouCount5") == 0 && ggbApplet.getValue("thouCount5") == 0) {
      ggbApplet.setVisible("textMil5", false);
      ggbApplet.setVisible("textHunThou5", false);
      ggbApplet.setVisible("textTenThou5", false);
      ggbApplet.setVisible("textThou5", false);
    }
    if (ggbApplet.getValue("milCount5") == 0 && ggbApplet.getValue("hunthouCount5") == 0 && ggbApplet.getValue("tenthouCount5") == 0 && ggbApplet.getValue("thouCount5") == 0 && ggbApplet.getValue("hunsCount5") == 0) {
      ggbApplet.setVisible("textMil5", false);
      ggbApplet.setVisible("textHunThou5", false);
      ggbApplet.setVisible("textTenThou5", false);
      ggbApplet.setVisible("textThou5", false);
      ggbApplet.setVisible("textHuns5", false);
    }
    if (ggbApplet.getValue("milCount5") == 0 && ggbApplet.getValue("hunthouCount5") == 0 && ggbApplet.getValue("tenthouCount5") == 0 && ggbApplet.getValue("thouCount5") == 0 && ggbApplet.getValue("hunsCount5") == 0 && ggbApplet.getValue("tensCount5") == 0) {
      ggbApplet.setVisible("textMil5", false);
      ggbApplet.setVisible("textHunThou5", false);
      ggbApplet.setVisible("textTenThou5", false);
      ggbApplet.setVisible("textThou5", false);
      ggbApplet.setVisible("textHuns5", false);
      ggbApplet.setVisible("textTens5", false);
    }
  } else {
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
  ggbApplet.setValue("milCount3", 0);
  ggbApplet.setValue("hunthouCount3", 0);
  ggbApplet.setValue("tenthouCount3", 0);
  ggbApplet.setValue("thouCount3", 0);
  ggbApplet.setValue("hunsCount3", 0);
  ggbApplet.setValue("tensCount3", 0);
  ggbApplet.setValue("onesCount3", 0);
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

  //sets the cross outs and extra text invisible
  ggbApplet.setVisible("textMil", false);
  ggbApplet.setVisible("textHunThou", false);
  ggbApplet.setVisible("textTenThou", false);
  ggbApplet.setVisible("textThou", false);
  ggbApplet.setVisible("textHuns", false);
  ggbApplet.setVisible("textTens", false);
  ggbApplet.setVisible("textOnes", false);
  ggbApplet.setVisible("textMil2", false);
  ggbApplet.setVisible("textHunThou2", false);
  ggbApplet.setVisible("textTenThou2", false);
  ggbApplet.setVisible("textThou2", false);
  ggbApplet.setVisible("textHuns2", false);
  ggbApplet.setVisible("textTens2", false);
  ggbApplet.setVisible("textOnes2", false);
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
  ggbApplet.setVisible("textMil5", false);
  ggbApplet.setVisible("textHunThou5", false);
  ggbApplet.setVisible("textTenThou5", false);
  ggbApplet.setVisible("textThou5", false);
  ggbApplet.setVisible("textHuns5", false);
  ggbApplet.setVisible("textTens5", false);
  ggbApplet.setVisible("textOnes5", false);

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