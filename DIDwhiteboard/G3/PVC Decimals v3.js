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
var xStartThousandth = ggbApplet.getXcoord("ig46");
var yStartThousandth = ggbApplet.getYcoord("ig46");
var xStartHundredth = ggbApplet.getXcoord("ig45");
var yStartHundredth = ggbApplet.getYcoord("ig45");
var xStartTenth = ggbApplet.getXcoord("ig44");
var yStartTenth = ggbApplet.getYcoord("ig44");
var xStartOne = ggbApplet.getXcoord("ig7");
var yStartOne = ggbApplet.getYcoord("ig7");
var xStartTen = ggbApplet.getXcoord("ig6");
var yStartTen = ggbApplet.getYcoord("ig6");
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
var labelTenths = ggbApplet.getValue("tenthsCount");
var labelHundredths = ggbApplet.getValue("hundredthsCount");
var labelThousandths = ggbApplet.getValue("thousandthsCount");

var pointsM = [];
var pointsHT = [];
var pointsTT = [];
var pointsTH = [];
var pointsH = [];
var pointsT = [];
var pointsO = [];
var pointst = [];
var pointsh = [];
var pointsth = [];

var click = 0;
var a = 0;
var bundled = false;
//number of points that have been bundled up
var bundleNum = 0;
var multiplier = 10;

//creates the initial points
function popul8() {
  // reset();
  click = click + 1;
  labelMil = ggbApplet.getValue("milCount");
  labelHunThou = ggbApplet.getValue("hunthouCount");
  labelTenThou = ggbApplet.getValue("tenthouCount");
  labelThous = ggbApplet.getValue("thouCount");
  labelHuns = ggbApplet.getValue("hunsCount");
  labelTens = ggbApplet.getValue("tensCount");
  labelOnes = ggbApplet.getValue("onesCount");
  labelTenths = ggbApplet.getValue("tenthsCount");
  labelHundredths = ggbApplet.getValue("hundredthsCount");
  labelThousandths = ggbApplet.getValue("thousandthsCount");
  if (click == 1) {
    //create points in millions region and add point name to list of points in that region
    /*      for (var popLoop = 0; popLoop < labelMil; popLoop++) {
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
    }*/
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
    //create points in tenths region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelTenths; popLoop++) {
      ggbApplet.evalCommand("TENTHS" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TENTHS" + popLoop, false, false);
      ggbApplet.setCoords("TENTHS" + popLoop, ggbApplet.getXcoord("ig44") + popLoop % 5, ggbApplet.getYcoord("ig44") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TENTHS" + popLoop, 163, 110, 255);
      ggbApplet.setLayer("TENTHS" + popLoop, 0);
      pointst.push("TENTHS" + popLoop);
    }
    //create points in hundredths region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelHundredths; popLoop++) {
      ggbApplet.evalCommand("HUNDREDTHS" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HUNDREDTHS" + popLoop, false, false);
      ggbApplet.setCoords("HUNDREDTHS" + popLoop, ggbApplet.getXcoord("ig45") + popLoop % 5, ggbApplet.getYcoord("ig45") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HUNDREDTHS" + popLoop, 255, 212, 102);
      ggbApplet.setLayer("HUNDREDTHS" + popLoop, 0);
      pointsh.push("HUNDREDTHS" + popLoop);
    }
    //create points in thousandths region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelThousandths; popLoop++) {
      ggbApplet.evalCommand("THOUSANDTHS" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("THOUSANDTHS" + popLoop, false, false);
      ggbApplet.setCoords("THOUSANDTHS" + popLoop, ggbApplet.getXcoord("ig46") + popLoop % 5, ggbApplet.getYcoord("ig46") - Math.floor(popLoop / 5));
      ggbApplet.setColor("THOUSANDTHS" + popLoop, 179, 255, 77);
      ggbApplet.setLayer("THOUSANDTHS" + popLoop, 0);
      pointsth.push("THOUSANDTHS" + popLoop);
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
  labelTenths = ggbApplet.getValue("tenthsCount");
  labelHundredths = ggbApplet.getValue("hundredthsCount");
  labelThousandths = ggbApplet.getValue("thousandthsCount");

  if (click == 1) {
    //create points in millions region and add point name to list of points in that region
    /*        for (var popLoop = 0; popLoop < multiplier * labelMil; popLoop++) {
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
*/
    //create points in thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < (multiplier * labelThous); popLoop++) {
      ggbApplet.evalCommand("TH" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TH" + popLoop, false, false);
      ggbApplet.setCoords("TH" + popLoop, ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TH" + popLoop, 0, 100, 0);
      ggbApplet.setLayer("TH" + popLoop, 0);
      pointsTH.push("TH" + popLoop);
    }
    //create points in hundreds region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < (multiplier * labelHuns); popLoop++) {
      ggbApplet.evalCommand("HU" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HU" + popLoop, false, false);
      ggbApplet.setCoords("HU" + popLoop, ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HU" + popLoop, 0, 127, 175);
      ggbApplet.setLayer("HU" + popLoop, 0);
      pointsH.push("HU" + popLoop);
    }
    //create points in tens region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < (multiplier * labelTens); popLoop++) {
      ggbApplet.evalCommand("TE" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TE" + popLoop, false, false);
      ggbApplet.setCoords("TE" + popLoop, ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TE" + popLoop, 0, 0, 255);
      ggbApplet.setLayer("TE" + popLoop, 0);
      pointsT.push("TE" + popLoop);
    }
    //create points in ones region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < (multiplier * labelOnes); popLoop++) {
      ggbApplet.evalCommand("O" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("O" + popLoop, false, false);
      ggbApplet.setCoords("O" + popLoop, ggbApplet.getXcoord("ig7") + popLoop % 5, ggbApplet.getYcoord("ig7") - Math.floor(popLoop / 5));
      ggbApplet.setColor("O" + popLoop, 127, 0, 255);
      ggbApplet.setLayer("O" + popLoop, 0);
      pointsO.push("O" + popLoop);
    }
    //create points in tenths region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < (multiplier * labelTenths); popLoop++) {
      ggbApplet.evalCommand("TENTHS" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("TENTHS" + popLoop, false, false);
      ggbApplet.setCoords("TENTHS" + popLoop, ggbApplet.getXcoord("ig44") + popLoop % 5, ggbApplet.getYcoord("ig44") - Math.floor(popLoop / 5));
      ggbApplet.setColor("TENTHS" + popLoop, 163, 110, 255);
      ggbApplet.setLayer("TENTHS" + popLoop, 0);
      pointst.push("TENTHS" + popLoop);
    }
    //create points in hundredths region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < (multiplier * labelHundredths); popLoop++) {
      ggbApplet.evalCommand("HUNDREDTHS" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("HUNDREDTHS" + popLoop, false, false);
      ggbApplet.setCoords("HUNDREDTHS" + popLoop, ggbApplet.getXcoord("ig45") + popLoop % 5, ggbApplet.getYcoord("ig45") - Math.floor(popLoop / 5));
      ggbApplet.setColor("HUNDREDTHS" + popLoop, 255, 212, 102);
      ggbApplet.setLayer("HUNDREDTHS" + popLoop, 0);
      pointsh.push("HUNDREDTHS" + popLoop);
    }
    //create points in thousandths region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < (multiplier * labelThousandths); popLoop++) {
      ggbApplet.evalCommand("THOUSANDTHS" + popLoop + "=PointIn(box)");
      ggbApplet.setFixed("THOUSANDTHS" + popLoop, false, false);
      ggbApplet.setCoords("THOUSANDTHS" + popLoop, ggbApplet.getXcoord("ig46") + popLoop % 5, ggbApplet.getYcoord("ig46") - Math.floor(popLoop / 5));
      ggbApplet.setColor("THOUSANDTHS" + popLoop, 179, 255, 77);
      ggbApplet.setLayer("THOUSANDTHS" + popLoop, 0);
      pointsth.push("THOUSANDTHS" + popLoop);
    }
  }
  ggbApplet.setVisible("popul8Button", false);
  ggbApplet.setVisible("x10Button", false);
  ggbApplet.setVisible("bundle", true);
}

//replots points in the optimal configuration
function organize() {
  milsListLength = pointsM.length;
  hunThousListLength = pointsHT.length;
  tenThousListLength = pointsTT.length;
  thousListLength = pointsTH.length;
  hunsListLength = pointsH.length;
  tensListLength = pointsT.length;
  onesListLength = pointsO.length;
  tenthsListLength = pointst.length;
  hundredthsListLength = pointsh.length;
  thousandthsListLength = pointsth.length;

  //create points in millions region
  /*  for (var popLoop = 0; popLoop < milsListLength; popLoop++) {
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
  }*/
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
  //create points in tenths region
  for (var popLoop = 0; popLoop < tenthsListLength; popLoop++) {
    ggbApplet.setCoords(pointst[popLoop], ggbApplet.getXcoord("ig44") + popLoop % 5, ggbApplet.getYcoord("ig44") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointst[popLoop], 163, 110, 255);
    ggbApplet.setLayer(pointst[popLoop], 0);
    ggbApplet.setVisible(pointst[popLoop], true);
  }
  //create points in hundredths region
  for (var popLoop = 0; popLoop < hundredthsListLength; popLoop++) {
    ggbApplet.setCoords(pointsh[popLoop], ggbApplet.getXcoord("ig45") + popLoop % 5, ggbApplet.getYcoord("ig45") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsh[popLoop], 255, 212, 102);
    ggbApplet.setLayer(pointsh[popLoop], 0);
    ggbApplet.setVisible(pointsh[popLoop], true);
  }
  //create points in thousandths region
  for (var popLoop = 0; popLoop < thousandthsListLength; popLoop++) {
    ggbApplet.setCoords(pointsth[popLoop], ggbApplet.getXcoord("ig46") + popLoop % 5, ggbApplet.getYcoord("ig46") - Math.floor(popLoop / 5));
    ggbApplet.setColor(pointsth[popLoop], 179, 255, 77);
    ggbApplet.setLayer(pointsth[popLoop], 0);
    ggbApplet.setVisible(pointsth[popLoop], true);
  }
}

function bundle() {
  bundleNum++;
  if (pointsth.length >= 10) {
    ggbApplet.setValue("thousandthsBool", true);
  } else {
    ggbApplet.setValue("thousandthsBool", false);
  }
  if (pointsth.length < 10 && pointsh.length >= 10) {
    ggbApplet.setValue("hundredthsBool", true);
  } else {
    ggbApplet.setValue("hundredthsBool", false);
  }
  if (pointsth.length < 10 && pointsh.length < 10 && pointst.length >= 10) {
    ggbApplet.setValue("tenthsBool", true);
  } else {
    ggbApplet.setValue("tenthsBool", false);
  }
  if (pointsth.length < 10 && pointsh.length < 10 && pointst.length < 10 && pointsO.length >= 10) {
    ggbApplet.setValue("oneBool", true);
  } else {
    ggbApplet.setValue("oneBool", false);
  }
  if (pointsth.length < 10 && pointsh.length < 10 && pointst.length < 10 && pointsO.length < 10 && pointsT.length >= 10) {
    ggbApplet.setValue("tenBool", true);
  } else {
    ggbApplet.setValue("tenBool", false);
  }
  if (pointsth.length < 10 && pointsh.length < 10 && pointst.length < 10 && pointsO.length < 10 && pointsT.length < 10 && pointsH.length >= 10) {
    ggbApplet.setValue("hunBool", true);
  } else {
    ggbApplet.setValue("hunBool", false);
  }
  if (pointsth.length < 10 && pointsh.length < 10 && pointst.length < 10 && pointsO.length < 10 && pointsT.length < 10 && pointsH.length < 10 && pointsTH.length >= 10) {
    ggbApplet.setValue("thouBool", true);
  } else {
    ggbApplet.setValue("thouBool", false);
  }
  /*
    if (pointsth.length < 10 && pointsh.length < 10 && pointst.length < 10 && pointsO.length < 10 && pointsT.length < 10 && pointsH.length < 10 && pointsTH.length < 10 && pointsTT.length >= 10) {
        ggbApplet.setValue("tenThouBool", true);
    } else {
        ggbApplet.setValue("tenThouBool", false);
    }
    if (pointsth.length < 10 && pointsh.length < 10 && pointst.length < 10 && pointsO.length < 10 && pointsT.length < 10 && pointsH.length < 10 && pointsTH.length < 10 && pointsTT.length < 10 && pointsHT.length >= 10) {
        ggbApplet.setValue("hunThouBool", true);
    } else {
        ggbApplet.setValue("hunThouBool", false);
    }
*/
  if (pointsth.length < 10 && pointsh.length < 10 && pointst.length < 10 && pointsO.length < 10 && pointsT.length < 10 && pointsH.length < 10 && pointsTH.length < 20) {
    ggbApplet.setVisible("bundle", false);
  }
  ggbApplet.setValue("time", 0);
  ggbApplet.setAnimating("time", true);
  ggbApplet.startAnimation();
}

function moveIt() {
  //if there are ten or more points in the ones region, translate ten at a time to the tens region, swap them for a ten and reorganize
  if (ggbApplet.getValue("thousandthsBool") == true) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointsth[pointsth.length - i], false);
      ggbApplet.evalCommand("MovingThousandths" + i + "=Translate(" + pointsth[pointsth.length - i] + ",time*Vector(" + pointsth[pointsth.length - i] + ",ig42))");
      ggbApplet.setVisible("MovingThousandths" + i, true);
      ggbApplet.setColor("MovingThousandths" + i, 179, 255, 77);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingThousandths" + i, 255, 212, 102);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingThousandths" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointsth.splice(pointsth.length - 10, pointsth.length);
      ggbApplet.evalCommand("BundlePointth" + bundleNum + "=(0,0);");
      pointsh.push("BundlePointth" + bundleNum);
      organize();
    }
  }
  //if there are ten or more points in the hundredths region, translate ten at a time to the tenths region, swap them for a tenth and reorganize
  if (ggbApplet.getValue("hundredthsBool") == true) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointsh[pointsh.length - i], false);
      ggbApplet.evalCommand("MovingHundredths" + i + "=Translate(" + pointsh[pointsh.length - i] + ",time*Vector(" + pointsh[pointsh.length - i] + ",ig41))");
      ggbApplet.setVisible("MovingHundredths" + i, true);
      ggbApplet.setColor("MovingHundredths" + i, 255, 212, 102);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingHundredths" + i, 163, 110, 255);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingHundredths" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointsh.splice(pointsh.length - 10, pointsh.length);
      ggbApplet.evalCommand("BundlePointh" + bundleNum + "=(0,0);");
      pointst.push("BundlePointh" + bundleNum);
      organize();
    }
  }
  //if there are ten or more points in the tenths region, translate ten at a time to the ones region, swap them for a one and reorganize
  if (ggbApplet.getValue("tenthsBool") == true) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointst[pointst.length - i], false);
      ggbApplet.evalCommand("MovingTenths" + i + "=Translate(" + pointst[pointst.length - i] + ",time*Vector(" + pointst[pointst.length - i] + ",ig31))");
      ggbApplet.setVisible("MovingTenths" + i, true);
      ggbApplet.setColor("MovingTenths" + i, 163, 110, 255);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingTenths" + i, 127, 0, 1755);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingTenths" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointst.splice(pointst.length - 10, pointst.length);
      ggbApplet.evalCommand("BundlePointt" + bundleNum + "=(0,0);");
      pointsO.push("BundlePointt" + bundleNum);
      organize();
    }
  }
  //if there are ten or more points in the ones region, translate ten at a time to the tens region, swap them for a ten and reorganize
  if (ggbApplet.getValue("oneBool") == true) {
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
  //if there are ten or more points in the tens region, translate ten at a time to the hundreds region, swap them for a hundred and reorganize
  if (ggbApplet.getValue("tenBool") == true) {
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
  //if there are ten or more points in the hundreds region, translate ten at a time to the thousands region, swap them for a thousand and reorganize
  if (ggbApplet.getValue("hunBool") == true) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointsH[pointsH.length - i], false);
      ggbApplet.evalCommand("MovingHuns" + i + "=Translate(" + pointsH[pointsH.length - i] + ",time*Vector(" + pointsH[pointsH.length - i] + ",ig28))");
      ggbApplet.setVisible("MovingHuns" + i, true);
      ggbApplet.setColor("MovingHuns" + i, 0, 127, 175);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingHuns" + i, 0, 100, 0);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingHuns" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointsH.splice(pointsH.length - 10, pointsH.length);
      ggbApplet.evalCommand("BundlePointTH" + bundleNum + "=(0,0);");
      pointsTH.push("BundlePointTH" + bundleNum);
      organize();
    }
  }
  //if there are ten or more points in the thousands region, translate ten at a time to the ten-thousands region, swap them for a ten-thousand and reorganize
  if (ggbApplet.getValue("thouBool") == true) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointsTH[pointsTH.length - i], false);
      ggbApplet.evalCommand("MovingThous" + i + "=Translate(" + pointsTH[pointsTH.length - i] + ",time*Vector(" + pointsTH[pointsTH.length - i] + ",ig27))");
      ggbApplet.setVisible("MovingThous" + i, true);
      ggbApplet.setColor("MovingThous" + i, 0, 100, 0);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingThous" + i, 255, 215, 0);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingThous" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointsTH.splice(pointsTH.length - 10, pointsTH.length);
      ggbApplet.evalCommand("BundlePointTT" + bundleNum + "=(0,0);");
      pointsTT.push("BundlePointTT" + bundleNum);
      organize();
    }
  }
  //if there are ten or more points in the hundreds region, translate ten at a time to the thousands region, swap them for a thousand and reorganize
  if (ggbApplet.getValue("tenThouBool") == true) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointsTT[pointsTT.length - i], false);
      ggbApplet.evalCommand("MovingTenThous" + i + "=Translate(" + pointsTT[pointsTT.length - i] + ",time*Vector(" + pointsTT[pointsTT.length - i] + ",ig26))");
      ggbApplet.setVisible("MovingTenThous" + i, true);
      ggbApplet.setColor("MovingTenThous" + i, 255, 215, 0);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingTenThous" + i, 255, 127, 0);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingTenThous" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointsTT.splice(pointsTT.length - 10, pointsTT.length);
      ggbApplet.evalCommand("BundlePointHT" + bundleNum + "=(0,0);");
      pointsHT.push("BundlePointHT" + bundleNum);
      organize();
    }
  }
  //if there are ten or more points in the hundreds region, translate ten at a time to the thousands region, swap them for a thousand and reorganize
  if (ggbApplet.getValue("hunThouBool") == true) {
    for (var i = 1; i <= 10; i++) {
      ggbApplet.setVisible(pointsHT[pointsHT.length - i], false);
      ggbApplet.evalCommand("MovingHunThous" + i + "=Translate(" + pointsHT[pointsHT.length - i] + ",time*Vector(" + pointsHT[pointsHT.length - i] + ",ig25))");
      ggbApplet.setVisible("MovingHunThous" + i, true);
      ggbApplet.setColor("MovingHunThous" + i, 255, 127, 0);
      if (ggbApplet.getValue("time") > 0.95) {
        ggbApplet.setColor("MovingHunThous" + i, 255, 0, 0);
      }
      if (ggbApplet.getValue("time") == 1) {
        ggbApplet.setVisible("MovingHunThous" + i, false);
      }
    }
    if (ggbApplet.getValue("time") == 1) {
      pointsHT.splice(pointsHT.length - 10, pointsHT.length);
      ggbApplet.evalCommand("BundlePointM" + bundleNum + "=(0,0);");
      pointsM.push("BundlePointM" + bundleNum);
      organize();
    }
  }
}

//sets all values back to the start
function reset() {
  click = 0;
  bundleNum = 0;
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
  pointst = [];
  pointsh = [];
  pointsth = [];

  pointNames = [];
  labelMil = ggbApplet.getValue("milCount");
  labelHunThou = ggbApplet.getValue("hunthouCount");
  labelTenThou = ggbApplet.getValue("tenthouCount");
  labelThous = ggbApplet.getValue("thouCount");
  labelHuns = ggbApplet.getValue("hunsCount");
  labelTens = ggbApplet.getValue("tensCount");
  labelOnes = ggbApplet.getValue("onesCount");
  labelTenths = ggbApplet.getValue("tenthsCount");
  labelHundredths = ggbApplet.getValue("hundredthsCount");
  labelThousandths = ggbApplet.getValue("thousandthsCount");

  milsListLength = 0;
  hunThousListLength = 0;
  tenThousListLength = 0;
  thousListLength = 0;
  hunsListLength = 0;
  tensListLength = 0;
  onesListLength = 0;
  tenthsListLength = 0;
  hundredthsListLength = 0;
  thousandthsListLength = 0;
  bundled = false;

  ggbApplet.setValue("milBool", false);
  ggbApplet.setValue("hunThouBool", false);
  ggbApplet.setValue("tenThouBool", false);
  ggbApplet.setValue("thouBool", false);
  ggbApplet.setValue("hunBool", false);
  ggbApplet.setValue("tenBool", false);
  ggbApplet.setValue("oneBool", false);
  ggbApplet.setValue("tenthsBool", false);
  ggbApplet.setValue("hundredthsBool", false);
  ggbApplet.setValue("thousandthsBool", false);

  //determined what points where not integral to applet and deletes them
  var pointNames = ggbApplet.getAllObjectNames("point");
  var lengthPointNames = pointNames.length;
  for (var iter9 = 0; iter9 < lengthPointNames; iter9++) {
    if (!pointNames[iter9].includes("ig")) {
      ggbApplet.deleteObject(pointNames[iter9]);
    }
  }
}