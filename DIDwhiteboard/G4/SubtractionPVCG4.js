function ggbOnInit() {
  ggbApplet.registerObjectClickListener("subtract", "popul8");
  ggbApplet.registerClientListener("breakOut");
  ggbApplet.registerObjectClickListener("reset", "reset");
  ggbApplet.registerObjectClickListener("button1", "matchIt");
  ggbApplet.registerObjectUpdateListener("InputBox2", "popul8");
  ggbApplet.registerObjectUpdateListener("InputBox3", "popul8");
}

//alll of the global variables
var rowAdderOnes = 0;
var rowAdderTens = 0;
var rowAdderHuns = 0;
var rowAdderThous = 0;
var rowAdderTenThou = 0;
var rowAdderHunThou = 0;
var rowAdderMil = 0;
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
var unbundledMil = 0;
var unbundledHunThou = 0;
var unbundledTenThou = 0;
var unbundledThous = 0;
var unbundledHuns = 0;
var unbundledTens = 0;
var unbundledOnes = 0;
var pointsM = [];
var pointsHT = [];
var pointsTT = [];
var pointsTH = [];
var pointsH = [];
var pointsT = [];
var pointsO = [];
var click = 0;
var a = 0;
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

    //updates alogrithm text on right
    setText();
  }
}

//unbundles points dragged into new regions
function breakOut(grabbed) {
  a = a + 1;
  if (grabbed[0] == "select") {
    name = grabbed[1];
    type = ggbApplet.getObjectType(grabbed[1]);
    if (type == "point") {
      xCoord = ggbApplet.getXcoord(grabbed[1]);
      yCoord = ggbApplet.getYcoord(grabbed[1]);
    }
  }
  if (grabbed[0] == "dragEnd") {
    type = ggbApplet.getObjectType(grabbed[1]);
    if (type == "point") {
      //point goes from millions to hundred thousands
      if (name.includes("M") && ggbApplet.getXcoord(grabbed[1]) > -27 && ggbApplet.getYcoord(grabbed[1]) > -10) {
        //splice out unbundled point from point list
        var choppingBlock = pointsM.indexOf(name);
        pointsM.splice(choppingBlock, 1);
        ggbApplet.evalCommand("XMil" + a + "=PointIn(box)");
        ggbApplet.setCoords(name, xCoord, yCoord);
        ggbApplet.setCoords("XMil" + a, xCoord, yCoord);
        ggbApplet.setPointStyle("XMil" + a, 1);
        ggbApplet.setColor("XMil" + a, 0, 0, 0);
        //set the dragged point to invisible and create ten new points in region
        for (var column = 0; column < 2; column++) {
          for (var row = 0; row < 5; row++) {
            ggbApplet.evalCommand("HT" + labelHunThou + "=PointIn(box)");
            ggbApplet.setCoords("HT" + labelHunThou, ggbApplet.getXcoord("ig23") + row, ggbApplet.getYcoord("ig23") - 2 - column - 2 * rowAdderHunThou);
            ggbApplet.setColor("HT" + labelHunThou, 255, 127, 0);
            ggbApplet.setLayer("HT" + labelHunThou, 0);
            pointsHT.push("HT" + labelHunThou);
            //rewrites the algorithm to reflect new pvc
            ggbApplet.setValue("milCount3", pointsM.length);
            ggbApplet.setValue("hunthouCount3", pointsHT.length);
            ggbApplet.setVisible("f", true);
            ggbApplet.setVisible("g", true);
            ggbApplet.setVisible("textMil3", true);
            ggbApplet.setVisible("textHunThou3", true);
            ggbApplet.setValue("milBool", true);
            ggbApplet.setValue("hunThouBool", true);
            labelHunThou++;
          }
        }
        //adds a new row for unbundler and tells how many unbundled sets of points there are
        rowAdderHunThou = rowAdderHunThou + 1;
        unbundledHunThou = unbundledHunThou + 1;
      }
    }
    if (type == "point") {
      if (name.includes("HT") && ggbApplet.getXcoord(grabbed[1]) > -21 && ggbApplet.getYcoord(grabbed[1]) > -10) {
        var choppingBlock = pointsHT.indexOf(name);
        pointsHT.splice(choppingBlock, 1);
        for (var column = 0; column < 2; column++) {
          for (var row = 0; row < 5; row++) {
            ggbApplet.evalCommand("XHunThou" + a + "=PointIn(box)");
            ggbApplet.setCoords(name, xCoord, yCoord);
            ggbApplet.setCoords("XHunThou" + a, xCoord, yCoord);
            ggbApplet.setPointStyle("XHunThou" + a, 1);
            ggbApplet.setColor("XHunThou" + a, 0, 0, 0);
            ggbApplet.evalCommand("TT" + labelTenThou + "=PointIn(box)");
            ggbApplet.setCoords("TT" + labelTenThou, ggbApplet.getXcoord("ig22") + row, ggbApplet.getYcoord("ig22") - 2 - column - 2 * rowAdderTenThou);
            ggbApplet.setColor("TT" + labelTenThou, 255, 215, 0);
            ggbApplet.setLayer("TT" + labelTenThou, 0);
            pointsTT.push("TT" + labelTenThou);
            ggbApplet.setValue("hunthouCount3", pointsHT.length);
            ggbApplet.setValue("tenthouCount3", pointsTT.length);
            ggbApplet.setVisible("g", true);
            ggbApplet.setVisible("h", true);
            ggbApplet.setVisible("textHunThou3", true);
            ggbApplet.setVisible("textTenThou3", true);
            ggbApplet.setValue("hunThouBool", true);
            ggbApplet.setValue("tenThouBool", true);
            labelTenThou++;
          }
        }
        rowAdderTenThou = rowAdderTenThou + 1;
        unbundledTenThou = unbundledTenThou + 1;
      }
    }
    if (type == "point") {
      if (name.includes("TT") && ggbApplet.getXcoord(grabbed[1]) > -15 && ggbApplet.getYcoord(grabbed[1]) > -10) {
        var choppingBlock = pointsTT.indexOf(name);
        pointsTT.splice(choppingBlock, 1);
        for (var column = 0; column < 2; column++) {
          for (var row = 0; row < 5; row++) {
            ggbApplet.evalCommand("XTenThou" + a + "=PointIn(box)");
            ggbApplet.setCoords(name, xCoord, yCoord);
            ggbApplet.setCoords("XTenThou" + a, xCoord, yCoord);
            ggbApplet.setPointStyle("XTenThou" + a, 1);
            ggbApplet.setColor("XTenThou" + a, 0, 0, 0);
            ggbApplet.evalCommand("TH" + labelThous + "=PointIn(box)");
            ggbApplet.setCoords("TH" + labelThous, ggbApplet.getXcoord("ig21") + row, ggbApplet.getYcoord("ig21") - 2 - column - 2 * rowAdderThous);
            ggbApplet.setColor("TH" + labelThous, 0, 100, 0);
            ggbApplet.setLayer("TH" + labelThous, 0);
            pointsTH.push("TH" + labelThous);
            ggbApplet.setValue("tenthouCount3", pointsTT.length);
            ggbApplet.setValue("thouCount3", pointsTH.length);
            ggbApplet.setVisible("h", true);
            ggbApplet.setVisible("i", true);
            ggbApplet.setVisible("textTenThou3", true);
            ggbApplet.setVisible("textThou3", true);
            ggbApplet.setValue("tenThouBool", true);
            ggbApplet.setValue("thouBool", true);
            labelThous++;
          }
        }
        rowAdderThous = rowAdderThous + 1;
        unbundledThous = unbundledThous + 1;
      }
    }
    if (type == "point") {
      if (name.includes("TH") && ggbApplet.getXcoord(grabbed[1]) > -9 && ggbApplet.getYcoord(grabbed[1]) > -10) {
        var choppingBlock = pointsTH.indexOf(name);
        pointsTH.splice(choppingBlock, 1);
        for (var column = 0; column < 2; column++) {
          for (var row = 0; row < 5; row++) {
            ggbApplet.evalCommand("XThou" + a + "=PointIn(box)");
            ggbApplet.setCoords(name, xCoord, yCoord);
            ggbApplet.setCoords("XThou" + a, xCoord, yCoord);
            ggbApplet.setPointStyle("XThou" + a, 1);
            ggbApplet.setColor("XThou" + a, 0, 0, 0);
            ggbApplet.evalCommand("HU" + labelHuns + "=PointIn(box)");
            ggbApplet.setCoords("HU" + labelHuns, ggbApplet.getXcoord("ig5") + row, ggbApplet.getYcoord("ig5") - 2 - column - 2 * rowAdderHuns);
            ggbApplet.setColor("HU" + labelHuns, 0, 127, 175);
            ggbApplet.setLayer("HU" + labelHuns, 0);
            pointsH.push("HU" + labelHuns);
            ggbApplet.setValue("thouCount3", pointsTH.length);
            ggbApplet.setValue("hunsCount3", pointsH.length);
            ggbApplet.setVisible("i", true);
            ggbApplet.setVisible("t_1", true);
            ggbApplet.setVisible("textThou3", true);
            ggbApplet.setVisible("textHuns3", true);
            ggbApplet.setValue("thouBool", true);
            ggbApplet.setValue("hunBool", true);
            labelHuns++;
          }
        }
        rowAdderHuns = rowAdderHuns + 1;
        unbundledHuns = unbundledHuns + 1;
      }
    }
    if (type == "point") {
      if (name.includes("HU") && ggbApplet.getXcoord(grabbed[1]) > -3 && ggbApplet.getYcoord(grabbed[1]) > -10) {
        var choppingBlock = pointsH.indexOf(name);
        pointsH.splice(choppingBlock, 1);
        for (var column = 0; column < 2; column++) {
          for (var row = 0; row < 5; row++) {
            ggbApplet.evalCommand("XHun" + a + "=PointIn(box)");
            ggbApplet.setCoords(name, xCoord, yCoord);
            ggbApplet.setCoords("XHun" + a, xCoord, yCoord);
            ggbApplet.setPointStyle("XHun" + a, 1);
            ggbApplet.setColor("XHun" + a, 0, 0, 0);
            ggbApplet.evalCommand("TE" + labelTens + " =PointIn(box)");
            ggbApplet.setCoords("TE" + labelTens, ggbApplet.getXcoord("ig6") + row, ggbApplet.getYcoord("ig6") - 2 - column - 2 * rowAdderTens);
            ggbApplet.setColor("TE" + labelTens, 0, 0, 255);
            ggbApplet.setLayer("TE" + labelTens, 0);
            pointsT.push("TE" + labelTens);
            ggbApplet.setValue("hunsCount3", pointsH.length);
            ggbApplet.setValue("tensCount3", pointsT.length);
            ggbApplet.setVisible("t_1", true);
            ggbApplet.setVisible("a_1", true);
            ggbApplet.setVisible("textHuns3", true);
            ggbApplet.setVisible("textTens3", true);
            ggbApplet.setValue("hunBool", true);
            ggbApplet.setValue("tenBool", true);
            labelTens++;
          }
        }
        rowAdderTens = rowAdderTens + 1;
        unbundledTens = unbundledTens + 1;
      }
    }
    if (type == "point") {
      if (name.includes("TE") && ggbApplet.getXcoord(grabbed[1]) > 3 && ggbApplet.getYcoord(grabbed[1]) > -10) {
        var choppingBlock = pointsT.indexOf(name);
        pointsT.splice(choppingBlock, 1);
        for (var column = 0; column < 2; column++) {
          for (var row = 0; row < 5; row++) {
            ggbApplet.evalCommand("XTen" + a + "=PointIn(box)");
            ggbApplet.setCoords(name, xCoord, yCoord);
            ggbApplet.setCoords("XTen" + a, xCoord, yCoord);
            ggbApplet.setPointStyle("XTen" + a, 1);
            ggbApplet.setColor("XTen" + a, 0, 0, 0);
            ggbApplet.evalCommand("O" + labelOnes + "=PointIn(box)");
            ggbApplet.setCoords("O" + labelOnes, ggbApplet.getXcoord("ig7") + row, ggbApplet.getYcoord("ig7") - 2 - column - 2 * rowAdderOnes);
            ggbApplet.setColor("O" + labelOnes, 127, 0, 255);
            ggbApplet.setLayer("O" + labelOnes, 0);
            pointsO.push("O" + labelOnes);
            ggbApplet.setValue("tensCount3", pointsT.length);
            ggbApplet.setValue("onesCount3", pointsO.length);
            ggbApplet.setVisible("a_1", true);
            ggbApplet.setVisible("b_1", true);
            ggbApplet.setVisible("textTens3", true);
            ggbApplet.setVisible("textOnes3", true);
            ggbApplet.setValue("tenBool", true);
            ggbApplet.setValue("oneBool", true);
            labelOnes++;
          }
        }
        rowAdderOnes = rowAdderOnes + 1;
        unbundledOnes = unbundledOnes + 1;
      }
    }
  }
  if (pointsM.length >= labelMil2 && pointsHT.length >= labelHunThou2 && pointsTT.length >= labelTenThou2 && pointsTH.length >= labelThous2 && pointsH.length >= labelHuns2 && pointsT.length >= labelTens2 && pointsO.length >= labelOnes2) {
    //set question button invisible and subtract it button visible
    ggbApplet.setVisible("subtract", false);
    ggbApplet.setVisible("button1", true);
  } else {
    ggbApplet.setVisible("subtract", true);
    ggbApplet.setVisible("button1", false);
  }
}

//If there are at least as many points at the top as the bottom, set the crosses on top of the dots for each region
function matchIt() {
  if (pointsM.length >= labelMil2) {
    //create x points in millions region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelMil2; popLoop++) {
      ggbApplet.evalCommand("MB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("MB" + popLoop, ggbApplet.getXcoord(pointsM[popLoop]), ggbApplet.getYcoord(pointsM[popLoop]));
      ggbApplet.setVisible("MB" + popLoop, false);
      if (labelMil2 == 1) {
        ggbApplet.evalCommand("MBCross" + popLoop + "=Segment(MB" + popLoop + "-(0.5,0.5),MB" + popLoop + "+(0.5,0.5))");
        ggbApplet.setLayer("MBCross" + popLoop, 2);
        ggbApplet.setColor("MBCross" + popLoop, 0, 0, 0);
      } else {
        ggbApplet.evalCommand("MBCross" + popLoop + "=Segment(MB" + popLoop + "+(0.5,0),MB" + popLoop + "-(0.5,0))");
        ggbApplet.setLayer("MBCross" + popLoop, 2);
        ggbApplet.setColor("MBCross" + popLoop, 0, 0, 0);
      }
    }
  }
  if (pointsHT.length >= labelHunThou2) {
    //create x points in hundred thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelHunThou2; popLoop++) {
      ggbApplet.evalCommand("HTB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("HTB" + popLoop, ggbApplet.getXcoord(pointsHT[popLoop]), ggbApplet.getYcoord(pointsHT[popLoop]));
      ggbApplet.setVisible("HTB" + popLoop, false);
      if (labelHunThou2 == 1) {
        ggbApplet.evalCommand("HTBCross" + popLoop + "=Segment(HTB" + popLoop + "-(0.5,0.5),HTB" + popLoop + "+(0.5,0.5))");
        ggbApplet.setLayer("HTBCross" + popLoop, 2);
        ggbApplet.setColor("HTBCross" + popLoop, 0, 0, 0);
      } else {
        ggbApplet.evalCommand("HTBCross" + popLoop + "=Segment(HTB" + popLoop + "+(0.5,0),HTB" + popLoop + "-(0.5,0))");
        ggbApplet.setLayer("HTBCross" + popLoop, 2);
        ggbApplet.setColor("HTBCross" + popLoop, 0, 0, 0);
      }
    }
  }
  if (pointsTT.length >= labelTenThou2) {
    //create x points in ten thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelTenThou2; popLoop++) {
      ggbApplet.evalCommand("TTB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("TTB" + popLoop, ggbApplet.getXcoord(pointsTT[popLoop]), ggbApplet.getYcoord(pointsTT[popLoop]));
      ggbApplet.setVisible("TTB" + popLoop, false);
      if (labelTenThou2 == 1) {
        ggbApplet.evalCommand("TTBCross" + popLoop + "=Segment(TTB" + popLoop + "-(0.5,0.5),TTB" + popLoop + "+(0.5,0.5))");
        ggbApplet.setLayer("TTBCross" + popLoop, 2);
        ggbApplet.setColor("TTBCross" + popLoop, 0, 0, 0);
      } else {
        ggbApplet.evalCommand("TTBCross" + popLoop + "=Segment(TTB" + popLoop + "+(0.5,0),TTB" + popLoop + "-(0.5,0))");
        ggbApplet.setLayer("TTBCross" + popLoop, 2);
        ggbApplet.setColor("TTBCross" + popLoop, 0, 0, 0);
      }
    }
  }
  if (pointsTH.length >= labelThous2) {
    //create x points in thousands region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelThous2; popLoop++) {
      ggbApplet.evalCommand("THB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("THB" + popLoop, ggbApplet.getXcoord(pointsTH[popLoop]), ggbApplet.getYcoord(pointsTH[popLoop]));
      ggbApplet.setVisible("THB" + popLoop, false);
      if (labelThous2 == 1) {
        ggbApplet.evalCommand("THBCross" + popLoop + "=Segment(THB" + popLoop + "-(0.5,0.5),THB" + popLoop + "+(0.5,0.5))");
        ggbApplet.setLayer("THBCross" + popLoop, 2);
        ggbApplet.setColor("THBCross" + popLoop, 0, 0, 0);
      } else {
        ggbApplet.evalCommand("THBCross" + popLoop + "=Segment(THB" + popLoop + "+(0.5,0),THB" + popLoop + "-(0.5,0))");
        ggbApplet.setLayer("THBCross" + popLoop, 2);
        ggbApplet.setColor("THBCross" + popLoop, 0, 0, 0);
      }
    }
  }
  if (pointsH.length >= labelHuns2) {
    //create x points in hundreds region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelHuns2; popLoop++) {
      ggbApplet.evalCommand("HB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("HB" + popLoop, ggbApplet.getXcoord(pointsH[popLoop]), ggbApplet.getYcoord(pointsH[popLoop]));
      ggbApplet.setVisible("HB" + popLoop, false);
      if (labelHuns2 == 1) {
        ggbApplet.evalCommand("HBCross" + popLoop + "=Segment(HB" + popLoop + "-(0.5,0.5),HB" + popLoop + "+(0.5,0.5))");
        ggbApplet.setLayer("HBCross" + popLoop, 2);
        ggbApplet.setColor("HBCross" + popLoop, 0, 0, 0);
      } else {
        ggbApplet.evalCommand("HBCross" + popLoop + "=Segment(HB" + popLoop + "+(0.5,0),HB" + popLoop + "-(0.5,0))");
        ggbApplet.setLayer("HBCross" + popLoop, 2);
        ggbApplet.setColor("HBCross" + popLoop, 0, 0, 0);
      }
    }
  }
  if (pointsT.length >= labelTens2) {
    //create x points in tens region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelTens2; popLoop++) {
      ggbApplet.evalCommand("TB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("TB" + popLoop, ggbApplet.getXcoord(pointsT[popLoop]), ggbApplet.getYcoord(pointsT[popLoop]));
      ggbApplet.setVisible("TB" + popLoop, false);
      if (labelTens2 == 1) {
        ggbApplet.evalCommand("TBCross" + popLoop + "=Segment(TB" + popLoop + "-(0.5,0.5),TB" + popLoop + "+(0.5,0.5))");
        ggbApplet.setLayer("TBCross" + popLoop, 2);
        ggbApplet.setColor("TBCross" + popLoop, 0, 0, 0);
      } else {
        ggbApplet.evalCommand("TBCross" + popLoop + "=Segment(TB" + popLoop + "+(0.5,0),TB" + popLoop + "-(0.5,0))");
        ggbApplet.setLayer("TBCross" + popLoop, 2);
        ggbApplet.setColor("TBCross" + popLoop, 0, 0, 0);
      }
    }
  }
  if (pointsO.length >= labelOnes2) {
    //create x points in ones region and add point name to list of points in that region
    for (var popLoop = 0; popLoop < labelOnes2; popLoop++) {
      ggbApplet.evalCommand("OB" + popLoop + "=PointIn(box)");
      ggbApplet.setCoords("OB" + popLoop, ggbApplet.getXcoord(pointsO[popLoop]), ggbApplet.getYcoord(pointsO[popLoop]));
      ggbApplet.setVisible("OB" + popLoop, false);
      if (labelOnes2 == 1) {
        ggbApplet.evalCommand("OBCross" + popLoop + "=Segment(OB" + popLoop + "-(0.5,0.5),OB" + popLoop + "+(0.5,0.5))");
        ggbApplet.setLayer("OBCross" + popLoop, 2);
        ggbApplet.setColor("OBCross" + popLoop, 0, 0, 0);
      } else {
        ggbApplet.evalCommand("OBCross" + popLoop + "=Segment(OB" + popLoop + "+(0.5,0),OB" + popLoop + "-(0.5,0))");
        ggbApplet.setLayer("OBCross" + popLoop, 2);
        ggbApplet.setColor("OBCross" + popLoop, 0, 0, 0);
      }
    }
  }
  //if all of the points at the top are more than all of the points on the bottom, show the answer to the problem
  if (pointsM.length >= labelMil2 && pointsHT.length >= labelHunThou2 && pointsTT.length >= labelTenThou2 && pointsTH.length >= labelThous2 && pointsH.length >= labelHuns2 && pointsT.length >= labelTens2 && pointsO.length >= labelOnes2) {
    ggbApplet.setVisible("textMil4", true);
    ggbApplet.setVisible("textHunThou4", true);
    ggbApplet.setVisible("textTenThou4", true);
    ggbApplet.setVisible("textThou4", true);
    ggbApplet.setVisible("textHuns4", true);
    ggbApplet.setVisible("textTens4", true);
    ggbApplet.setVisible("textOnes4", true);

  } else {
    ggbApplet.setVisible("textMil4", false);
    ggbApplet.setVisible("textHunThou4", false);
    ggbApplet.setVisible("textTenThou4", false);
    ggbApplet.setVisible("textThou4", false);
    ggbApplet.setVisible("textHuns4", false);
    ggbApplet.setVisible("textTens4", false);
    ggbApplet.setVisible("textOnes4", false);
  }
  setAnswerText();
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
  ggbApplet.setVisible("subtract", true);
  ggbApplet.setVisible("button1", false);
  rowAdderOnes = 0;
  rowAdderTens = 0;
  rowAdderHuns = 0;
  rowAdderThous = 0;
  rowAdderTenThou = 0;
  rowAdderHunThou = 0;
  rowAdderMil = 0;
  unbundledMil = 0;
  unbundledHunThou = 0;
  unbundledTenThou = 0;
  unbundledThous = 0;
  unbundledHuns = 0;
  unbundledTens = 0;
  unbundledOnes = 0;
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
  labelMil2 = ggbApplet.getValue("milCount2");
  labelHunThou2 = ggbApplet.getValue("hunthouCount2");
  labelTenThou2 = ggbApplet.getValue("tenthouCount2");
  labelThous2 = ggbApplet.getValue("thouCount2");
  labelHuns2 = ggbApplet.getValue("hunsCount2");
  labelTens2 = ggbApplet.getValue("tensCount2");
  labelOnes2 = ggbApplet.getValue("onesCount2");

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
