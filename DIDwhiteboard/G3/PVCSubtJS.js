function ggbOnInit() {
    ggbApplet.registerObjectClickListener("subtractReady", "popul8");
    ggbApplet.registerClientListener("breakOut");
    ggbApplet.registerObjectClickListener("reset", "reset");
    ggbApplet.registerObjectClickListener("subtract", "matchIt");
    ggbApplet.registerObjectUpdateListener("InputBox2", "reset");
    ggbApplet.registerObjectUpdateListener("InputBox3", "reset");

}
//alll of the global variables
var rowAdderOnes = 0;
var rowAdderTens = 0;
var rowAdderHuns = 0;
var rowAdderThous = 0;
var rowAdderTenThou = 0;
var rowAdderHunThou = 0;
var rowAdderMil = 0;
var labelMil = 0;
var labelHunThou = 0;
var labelTenThou = 0;
var labelThous = 0;
var labelHuns = 0;
var labelTens = 0;
var labelOnes = 0;
var labelMil2 = 0;
var labelHunThou2 = 0;
var labelTenThou2 = 0;
var labelThous2 = 0;
var labelHuns2 = 0;
var labelTens2 = 0;
var labelOnes2 = 0;
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

//creates the initial points
function popul8() {
    ggbApplet.setVisible("subtractReady", true);
    //disable the button after first click
    click = click + 1;
    //create the variables that access each place value digit for both minuend and subtrahend
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
    //only on first click
    if (click == 1) {
        //create points in millions region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelMil; popLoop++) {
            ggbApplet.evalCommand("M" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("M" + popLoop, ggbApplet.getXcoord("ig24") + popLoop % 5, ggbApplet.getYcoord("ig24") - Math.floor(popLoop / 5));
            ggbApplet.setColor("M" + popLoop, 255, 0, 0);
            pointsM.push("M" + popLoop);
        }
        //create points in hundred thousands region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelHunThou; popLoop++) {
            ggbApplet.evalCommand("HT" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("HT" + popLoop, ggbApplet.getXcoord("ig23") + popLoop % 5, ggbApplet.getYcoord("ig23") - Math.floor(popLoop / 5));
            ggbApplet.setColor("HT" + popLoop, 255, 127, 0);
            pointsHT.push("HT" + popLoop);
        }
        //create points in ten thousands region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelTenThou; popLoop++) {
            ggbApplet.evalCommand("TT" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("TT" + popLoop, ggbApplet.getXcoord("ig22") + popLoop % 5, ggbApplet.getYcoord("ig22") - Math.floor(popLoop / 5));
            ggbApplet.setColor("TT" + popLoop, 255, 215, 0);
            pointsTT.push("TT" + popLoop);
        }
        //create points in thousands region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelThous; popLoop++) {
            ggbApplet.evalCommand("TH" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("TH" + popLoop, ggbApplet.getXcoord("ig21") + popLoop % 5, ggbApplet.getYcoord("ig21") - Math.floor(popLoop / 5));
            ggbApplet.setColor("TH" + popLoop, 0, 100, 0);
            pointsTH.push("TH" + popLoop);
        }
        //create points in hundreds region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelHuns; popLoop++) {
            ggbApplet.evalCommand("HU" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("HU" + popLoop, ggbApplet.getXcoord("ig5") + popLoop % 5, ggbApplet.getYcoord("ig5") - Math.floor(popLoop / 5));
            ggbApplet.setColor("HU" + popLoop, 0, 127, 175);
            pointsH.push("HU" + popLoop);
        }
        //create points in tens region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelTens; popLoop++) {
            ggbApplet.evalCommand("TE" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("TE" + popLoop, ggbApplet.getXcoord("ig6") + popLoop % 5, ggbApplet.getYcoord("ig6") - Math.floor(popLoop / 5));
            ggbApplet.setColor("TE" + popLoop, 0, 0, 255);
            pointsT.push("TE" + popLoop);
        }
        //create points in ones region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelOnes; popLoop++) {
            ggbApplet.evalCommand("O" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("O" + popLoop, ggbApplet.getXcoord("ig7") + popLoop % 5, ggbApplet.getYcoord("ig7") - Math.floor(popLoop / 5));
            ggbApplet.setColor("O" + popLoop, 127, 0, 255);
            pointsO.push("O" + popLoop);
        }
        //updates algorithm text on right
        setText();
    }
}

//unbundles points dragged into new regions
function breakOut(grabbed) {
    if (grabbed[0] == "select") {
        name = grabbed[1];
        type = ggbApplet.getObjectType(grabbed[1]);
    }
    if (grabbed[0] == "dragEnd") {
        type = ggbApplet.getObjectType(grabbed[1]);
        if (type == "point") {
            //point goes from millions to hundred thousands
            if (name.includes("M") && ggbApplet.getXcoord(grabbed[1]) > -27 && ggbApplet.getYcoord(grabbed[1]) > -10) {
                //splice out unbundled point from point list
                var choppingBlock = pointsM.indexOf(name);
                pointsM.splice(choppingBlock, 1);
                //set the dragged point to invisible and create ten new points in region
                for (var column = 0; column < 2; column++) {
                    for (var row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("SetVisibleInView(" + name + ",1,false)");
                        ggbApplet.evalCommand("HT" + labelHunThou + "=PointIn(box)");
                        ggbApplet.setCoords("HT" + labelHunThou, ggbApplet.getXcoord("ig23") + row, ggbApplet.getYcoord("ig23") - 2 - column - 2 * rowAdderHunThou);
                        ggbApplet.setColor("HT" + labelHunThou, 255, 127, 0);
                        pointsHT.push("HT" + labelHunThou);
                        //rewrites the algorithm to reflect new pvc
                        ggbApplet.evalCommand("textMil3=Text(" + pointsM.length + ")");
                        ggbApplet.evalCommand("textHunThou3=Text(" + pointsHT.length + ")");
                        ggbApplet.setVisible("f", true);
                        ggbApplet.setVisible("g", true);
                        ggbApplet.setVisible("textMil3", true);
                        ggbApplet.setVisible("textHunThou3", true);
                        labelHunThou++;
                    }
                }
                //adds a new row for unbundler and tells how many unbundled sets of points there are
                rowAdderHunThou = rowAdderHunThou + 1;
                unbundledHunThou = unbundledHunThou + 1;
            }
        }
        if (type == "point") {
            //point goes from hundred thousands to ten thousands
            if (name.includes("HT") && ggbApplet.getXcoord(grabbed[1]) > -21 && ggbApplet.getYcoord(grabbed[1]) > -10) {
                //splice out unbundled point from point list
                var choppingBlock = pointsHT.indexOf(name);
                pointsHT.splice(choppingBlock, 1);
                //set the dragged point to invisible and create ten new points in region
                for (var column = 0; column < 2; column++) {
                    for (var row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("SetVisibleInView(" + name + ",1, false)");
                        ggbApplet.evalCommand("TT" + labelTenThou + "=PointIn(box)");
                        ggbApplet.setCoords("TT" + labelTenThou, ggbApplet.getXcoord("ig22") + row, ggbApplet.getYcoord("ig22") - 2 - column - 2 * rowAdderTenThou);
                        ggbApplet.setColor("TT" + labelTenThou, 255, 215, 0);
                        pointsTT.push("TT" + labelTenThou);
                        //rewrites the algorithm to reflect new pvc
                        ggbApplet.evalCommand("textHunThou3=Text(" + pointsHT.length + ")");
                        ggbApplet.evalCommand("textTenThou3=Text(" + pointsTT.length + ")");
                        ggbApplet.setVisible("g", true);
                        ggbApplet.setVisible("h", true);
                        ggbApplet.setVisible("textHunThou3", true);
                        ggbApplet.setVisible("textTenThou3", true);
                        labelTenThou++;
                    }
                }
                //adds a new row for unbundler and tells how many unbundled sets of points there are
                rowAdderTenThou = rowAdderTenThou + 1;
                unbundledTenThou = unbundledTenThou + 1;
            }
        }
        if (type == "point") {
            //point goes from ten thousands to thousands
            if (name.includes("TT") && ggbApplet.getXcoord(grabbed[1]) > -15 && ggbApplet.getYcoord(grabbed[1]) > -10) {
                //splice out unbundled point from point list
                var choppingBlock = pointsTT.indexOf(name);
                pointsTT.splice(choppingBlock, 1);
                //set the dragged point to invisible and create ten new points in region
                for (var column = 0; column < 2; column++) {
                    for (var row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("SetVisibleInView(" + name + ",1, false)");
                        ggbApplet.evalCommand("TH" + labelThous + "=PointIn(box)");
                        ggbApplet.setCoords("TH" + labelThous, ggbApplet.getXcoord("ig21") + row, ggbApplet.getYcoord("ig21") - 2 - column - 2 * rowAdderThous);
                        ggbApplet.setColor("TH" + labelThous, 0, 100, 0);
                        pointsTH.push("TH" + labelThous);
                        //rewrites the algorithm to reflect new pvc
                        ggbApplet.evalCommand("textTenThou3=Text(" + pointsTT.length + ")");
                        ggbApplet.evalCommand("textThou3=Text(" + pointsTH.length + ")");
                        ggbApplet.setVisible("h", true);
                        ggbApplet.setVisible("i", true);
                        ggbApplet.setVisible("textTenThou3", true);
                        ggbApplet.setVisible("textThou3", true);
                        labelThous++;
                    }
                }
                //adds a new row for unbundler and tells how many unbundled sets of points there are
                rowAdderThous = rowAdderThous + 1;
                unbundledThous = unbundledThous + 1;
            }
        }
        if (type == "point") {
            //point goes from thousands to hundreds
            if (name.includes("TH") && ggbApplet.getXcoord(grabbed[1]) > -9 && ggbApplet.getYcoord(grabbed[1]) > -10) {
                //splice out unbundled point from point list
                var choppingBlock = pointsTH.indexOf(name);
                pointsTH.splice(choppingBlock, 1);
                //set the dragged point to invisible and create ten new points in region
                for (var column = 0; column < 2; column++) {
                    for (var row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("SetVisibleInView(" + name + ",1, false)");
                        ggbApplet.evalCommand("HU" + labelHuns + "=PointIn(box)");
                        ggbApplet.setCoords("HU" + labelHuns, ggbApplet.getXcoord("ig5") + row, ggbApplet.getYcoord("ig5") - 2 - column - 2 * rowAdderHuns);
                        ggbApplet.setColor("HU" + labelHuns, 0, 127, 175);
                        pointsH.push("HU" + labelHuns);
                        //rewrites the algorithm to reflect new pvc
                        ggbApplet.evalCommand("textThou3=Text(" + pointsTH.length + ")");
                        ggbApplet.evalCommand("textHuns3=Text(" + pointsH.length + ")");
                        ggbApplet.setVisible("i", true);
                        ggbApplet.setVisible("t_1", true);
                        ggbApplet.setVisible("textThou3", true);
                        ggbApplet.setVisible("textHuns3", true);
                        labelHuns++;
                    }
                }
                //adds a new row for unbundler and tells how many unbundled sets of points there are
                rowAdderHuns = rowAdderHuns + 1;
                unbundledHuns = unbundledHuns + 1;
            }
        }
        if (type == "point") {
            //point goes from hundreds to tens
            if (name.includes("HU") && ggbApplet.getXcoord(grabbed[1]) > -3 && ggbApplet.getYcoord(grabbed[1]) > -10) {
                //splice out unbundled point from point list
                var choppingBlock = pointsH.indexOf(name);
                pointsH.splice(choppingBlock, 1);
                //set the dragged point to invisible and create ten new points in region
                for (var column = 0; column < 2; column++) {
                    for (var row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("SetVisibleInView(" + name + ",1, false)");
                        ggbApplet.evalCommand("TE" + labelTens + " =PointIn(box)");
                        ggbApplet.setCoords("TE" + labelTens, ggbApplet.getXcoord("ig6") + row, ggbApplet.getYcoord("ig6") - 2 - column - 2 * rowAdderTens);
                        ggbApplet.setColor("TE" + labelTens, 0, 0, 255);
                        pointsT.push("TE" + labelTens);
                        //rewrites the algorithm to reflect new pvc
                        ggbApplet.evalCommand("textHuns3=Text(" + pointsH.length + ")");
                        ggbApplet.evalCommand("textTens3=Text(" + pointsT.length + ")");
                        ggbApplet.setVisible("t_1", true);
                        ggbApplet.setVisible("a_1", true);
                        ggbApplet.setVisible("textHuns3", true);
                        ggbApplet.setVisible("textTens3", true);
                        labelTens++;
                    }
                }
                //adds a new row for unbundler and tells how many unbundled sets of points there are
                rowAdderTens = rowAdderTens + 1;
                unbundledTens = unbundledTens + 1;
            }
        }
        if (type == "point") {
            //point goes from tens to ones
            if (name.includes("TE") && ggbApplet.getXcoord(grabbed[1]) > 3 && ggbApplet.getYcoord(grabbed[1]) > -10) {
                //splice out unbundled point from point list
                var choppingBlock = pointsT.indexOf(name);
                pointsT.splice(choppingBlock, 1);
                //set the dragged point to invisible and create ten new points in region
                for (var column = 0; column < 2; column++) {
                    for (var row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("SetVisibleInView(" + name + ",1, false)");
                        ggbApplet.evalCommand("O" + labelOnes + "=PointIn(box)");
                        ggbApplet.setCoords("O" + labelOnes, ggbApplet.getXcoord("ig7") + row, ggbApplet.getYcoord("ig7") - 2 - column - 2 * rowAdderOnes);
                        ggbApplet.setColor("O" + labelOnes, 127, 0, 255);
                        pointsO.push("O" + labelOnes);
                        //rewrites the algorithm to reflect new pvc
                        ggbApplet.evalCommand("textTens3=Text(" + pointsT.length + ")");
                        ggbApplet.evalCommand("textOnes3=Text(" + pointsO.length + ")");
                        ggbApplet.setVisible("a_1", true);
                        ggbApplet.setVisible("b_1", true);
                        ggbApplet.setVisible("textTens3", true);
                        ggbApplet.setVisible("textOnes3", true);
                        labelOnes++;
                    }
                }
                //adds a new row for unbundler and tells how many unbundled sets of points there are
                rowAdderOnes = rowAdderOnes + 1;
                unbundledOnes = unbundledOnes + 1;
            }
        }
    }
    //if ready to subtract
  /*  if (pointsM.length >= labelMil2 && pointsHT.length >= labelHunThou2 && pointsTT.length >= labelTenThou2 && pointsTH.length >= labelThous2 && pointsH.length >= labelHuns2 && pointsT.length >= labelTens2 && pointsO.length >= labelOnes2) {
        //set question button invisible and subtract it button visible
        ggbApplet.setVisible("subtractReady", false);
        ggbApplet.setVisible("subtract", true);
    } else {
        ggbApplet.setVisible("subtractReady", true);
        ggbApplet.setVisible("subtract", false);
    }
    */
}
//If there are at least as many points at the top as the bottom, set the crosses on top of the dots for each region
function matchIt() {
    if (pointsM.length >= labelMil2) {
        //create x points in millions region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelMil2; popLoop++) {
            ggbApplet.evalCommand("MB" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("MB" + popLoop, ggbApplet.getXcoord(pointsM[popLoop]), ggbApplet.getYcoord(pointsM[popLoop]));
            ggbApplet.setPointStyle("MB" + popLoop, 1);
            ggbApplet.setColor("MB" + popLoop, 0, 0, 0);
        }
        milDiff = pointsM.length - labelMil2;
        ggbApplet.evalCommand("textMil4=Text(" + milDiff + ")");
    }
    if (pointsHT.length >= labelHunThou2) {
        //create x points in hundred thousands region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelHunThou2; popLoop++) {
            ggbApplet.evalCommand("HTB" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("HTB" + popLoop, ggbApplet.getXcoord(pointsHT[popLoop]), ggbApplet.getYcoord(pointsHT[popLoop]));
            ggbApplet.setPointStyle("HTB" + popLoop, 1);
            ggbApplet.setColor("HTB" + popLoop, 0, 0, 0);
        }
        htDiff = pointsHT.length - labelHunThou2;
        ggbApplet.evalCommand("textHunThou4=Text(" + htDiff + ")");
    }
    if (pointsTT.length >= labelTenThou2) {
        //create x points in ten thousands region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelTenThou2; popLoop++) {
            ggbApplet.evalCommand("TTB" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("TTB" + popLoop, ggbApplet.getXcoord(pointsTT[popLoop]), ggbApplet.getYcoord(pointsTT[popLoop]));
            ggbApplet.setPointStyle("TTB" + popLoop, 1);
            ggbApplet.setColor("TTB" + popLoop, 0, 0, 0);
        }
        ttDiff = pointsTT.length - labelTenThou2;
        ggbApplet.evalCommand("textTenThou4=Text(" + ttDiff + ")");
    }
    if (pointsTH.length >= labelThous2) {
        //create x points in thousands region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelThous2; popLoop++) {
            ggbApplet.evalCommand("THB" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("THB" + popLoop, ggbApplet.getXcoord(pointsTH[popLoop]), ggbApplet.getYcoord(pointsTH[popLoop]));
            ggbApplet.setPointStyle("THB" + popLoop, 1);
            ggbApplet.setColor("THB" + popLoop, 0, 0, 0);
        }
        thDiff = pointsTH.length - labelThous2;
        ggbApplet.evalCommand("textThou4=Text(" + thDiff + ")");
    }
    if (pointsH.length >= labelHuns2) {
        //create x points in hundreds region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelHuns2; popLoop++) {
            ggbApplet.evalCommand("HB" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("HB" + popLoop, ggbApplet.getXcoord(pointsH[popLoop]), ggbApplet.getYcoord(pointsH[popLoop]));
            ggbApplet.setPointStyle("HB" + popLoop, 1);
            ggbApplet.setColor("HB" + popLoop, 0, 0, 0);
        }
        hunDiff = pointsH.length - labelHuns2;
        ggbApplet.evalCommand("textHuns4=Text(" + hunDiff + ")");
    }
    if (pointsT.length >= labelTens2) {
        //create x points in tens region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelTens2; popLoop++) {
            ggbApplet.evalCommand("TB" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("TB" + popLoop, ggbApplet.getXcoord(pointsT[popLoop]), ggbApplet.getYcoord(pointsT[popLoop]));
            ggbApplet.setPointStyle("TB" + popLoop, 1);
            ggbApplet.setColor("TB" + popLoop, 0, 0, 0);
        }
        tenDiff = pointsT.length - labelTens2;
        ggbApplet.evalCommand("textTens4=Text(" + tenDiff + ")");
    }
    if (pointsO.length >= labelOnes2) {
        //create x points in ones region and add point name to list of points in that region
        for (var popLoop = 0; popLoop < labelOnes2; popLoop++) {
            ggbApplet.evalCommand("OB" + popLoop + "=PointIn(box)");
            ggbApplet.setCoords("OB" + popLoop, ggbApplet.getXcoord(pointsO[popLoop]), ggbApplet.getYcoord(pointsO[popLoop]));
            ggbApplet.setPointStyle("OB" + popLoop, 1);
            ggbApplet.setColor("OB" + popLoop, 0, 0, 0);
        }
        oneDiff = pointsO.length - labelOnes2;
        ggbApplet.evalCommand("textOnes4=Text(" + oneDiff + ")");
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

    if (pointsM.length == "0") {
        ggbApplet.setVisible("textMil", false);
        ggbApplet.setVisible("textHunThou", true);
        ggbApplet.setVisible("textTenThou", true);
        ggbApplet.setVisible("textThou", true);
        ggbApplet.setVisible("textHuns", true);
        ggbApplet.setVisible("textTens", true);
        ggbApplet.setVisible("textOnes", true);
    }
    if (pointsM.length == 0 && pointsHT.length == 0) {
        ggbApplet.setVisible("textMil", false);
        ggbApplet.setVisible("textHunThou", false);
        ggbApplet.setVisible("textTenThou", true);
        ggbApplet.setVisible("textThou", true);
        ggbApplet.setVisible("textHuns", true);
        ggbApplet.setVisible("textTens", true);
        ggbApplet.setVisible("textOnes", true);
    }
    if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0) {
        ggbApplet.setVisible("textMil", false);
        ggbApplet.setVisible("textHunThou", false);
        ggbApplet.setVisible("textTenThou", false);
        ggbApplet.setVisible("textThou", true);
        ggbApplet.setVisible("textHuns", true);
        ggbApplet.setVisible("textTens", true);
        ggbApplet.setVisible("textOnes", true);
    }
    if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0 && pointsTH.length == 0) {
        ggbApplet.setVisible("textMil", false);
        ggbApplet.setVisible("textHunThou", false);
        ggbApplet.setVisible("textTenThou", false);
        ggbApplet.setVisible("textThou", false);
        ggbApplet.setVisible("textHuns", true);
        ggbApplet.setVisible("textTens", true);
        ggbApplet.setVisible("textOnes", true);
    }
    if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0 && pointsTH.length == 0 && pointsH.length == 0) {
        ggbApplet.setVisible("textMil", false);
        ggbApplet.setVisible("textHunThou", false);
        ggbApplet.setVisible("textTenThou", false);
        ggbApplet.setVisible("textThou", false);
        ggbApplet.setVisible("textHuns", false);
        ggbApplet.setVisible("textTens", true);
        ggbApplet.setVisible("textOnes", true);
    }
    if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0 && pointsTH.length == 0 && pointsH.length == 0 && pointsT.length == 0) {
        ggbApplet.setVisible("textMil", false);
        ggbApplet.setVisible("textHunThou", false);
        ggbApplet.setVisible("textTenThou", false);
        ggbApplet.setVisible("textThou", false);
        ggbApplet.setVisible("textHuns", false);
        ggbApplet.setVisible("textTens", false);
        ggbApplet.setVisible("textOnes", true);
    }
    if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0 && pointsTH.length == 0 && pointsH.length == 0 && pointsT.length == 0 && pointsO.length == 0) {
        ggbApplet.setVisible("textMil", false);
        ggbApplet.setVisible("textHunThou", false);
        ggbApplet.setVisible("textTenThou", false);
        ggbApplet.setVisible("textThou", false);
        ggbApplet.setVisible("textHuns", false);
        ggbApplet.setVisible("textTens", false);
        ggbApplet.setVisible("textOnes", false);
    }
    if (labelMil2 == "0") {
        ggbApplet.setVisible("textMil2", false);
        ggbApplet.setVisible("textHunThou2", true);
        ggbApplet.setVisible("textTenThou2", true);
        ggbApplet.setVisible("textThou2", true);
        ggbApplet.setVisible("textHuns2", true);
        ggbApplet.setVisible("textTens2", true);
        ggbApplet.setVisible("textOnes2", true);
    }
    if (labelMil2 == 0 && labelHunThou2 == 0) {
        ggbApplet.setVisible("textMil2", false);
        ggbApplet.setVisible("textHunThou2", false);
        ggbApplet.setVisible("textTenThou2", true);
        ggbApplet.setVisible("textThou2", true);
        ggbApplet.setVisible("textHuns2", true);
        ggbApplet.setVisible("textTens2", true);
        ggbApplet.setVisible("textOnes2", true);
    }
    if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0) {
        ggbApplet.setVisible("textMil2", false);
        ggbApplet.setVisible("textHunThou2", false);
        ggbApplet.setVisible("textTenThou2", false);
        ggbApplet.setVisible("textThou2", true);
        ggbApplet.setVisible("textHuns2", true);
        ggbApplet.setVisible("textTens2", true);
        ggbApplet.setVisible("textOnes2", true);
    }
    if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0 && labelThous2 == 0) {
        ggbApplet.setVisible("textMil2", false);
        ggbApplet.setVisible("textHunThou2", false);
        ggbApplet.setVisible("textTenThou2", false);
        ggbApplet.setVisible("textThou2", false);
        ggbApplet.setVisible("textHuns2", true);
        ggbApplet.setVisible("textTens2", true);
        ggbApplet.setVisible("textOnes2", true);
    }
    if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0 && labelThous2 == 0 && labelHuns2 == 0) {
        ggbApplet.setVisible("textMil2", false);
        ggbApplet.setVisible("textHunThou2", false);
        ggbApplet.setVisible("textTenThou2", false);
        ggbApplet.setVisible("textThou2", false);
        ggbApplet.setVisible("textHuns2", false);
        ggbApplet.setVisible("textTens2", true);
        ggbApplet.setVisible("textOnes2", true);
    }
    if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0 && labelThous2 == 0 && labelHuns2 == 0 && labelTens2 == 0) {
        ggbApplet.setVisible("textMil2", false);
        ggbApplet.setVisible("textHunThou2", false);
        ggbApplet.setVisible("textTenThou2", false);
        ggbApplet.setVisible("textThou2", false);
        ggbApplet.setVisible("textHuns2", false);
        ggbApplet.setVisible("textTens2", false);
        ggbApplet.setVisible("textOnes2", true);
    }
    if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0 && labelThous2 == 0 && labelHuns2 == 0 && labelTens2 == 0 && labelOnes2 == 0) {
        ggbApplet.setVisible("textMil2", false);
        ggbApplet.setVisible("textHunThou2", false);
        ggbApplet.setVisible("textTenThou2", false);
        ggbApplet.setVisible("textThou2", false);
        ggbApplet.setVisible("textHuns2", false);
        ggbApplet.setVisible("textTens2", false);
        ggbApplet.setVisible("textOnes2", false);
    }
    if (labelMil4 == "0") {
        ggbApplet.setVisible("textMil4", false);
        ggbApplet.setVisible("textHunThou4", true);
        ggbApplet.setVisible("textTenThou4", true);
        ggbApplet.setVisible("textThou4", true);
        ggbApplet.setVisible("textHuns4", true);
        ggbApplet.setVisible("textTens4", true);
        ggbApplet.setVisible("textOnes4", true);
    }
    if (labelMil4 == 0 && labelHunThou4 == 0) {
        ggbApplet.setVisible("textMil4", false);
        ggbApplet.setVisible("textHunThou4", false);
        ggbApplet.setVisible("textTenThou4", true);
        ggbApplet.setVisible("textThou4", true);
        ggbApplet.setVisible("textHuns4", true);
        ggbApplet.setVisible("textTens4", true);
        ggbApplet.setVisible("textOnes4", true);
    }
    if (labelMil4 == 0 && labelHunThou4 == 0 && labelTenThou4 == 0) {
        ggbApplet.setVisible("textMil4", false);
        ggbApplet.setVisible("textHunThou4", false);
        ggbApplet.setVisible("textTenThou4", false);
        ggbApplet.setVisible("textThou4", true);
        ggbApplet.setVisible("textHuns4", true);
        ggbApplet.setVisible("textTens4", true);
        ggbApplet.setVisible("textOnes4", true);
    }
    if (labelMil4 == 0 && labelHunThou4 == 0 && labelTenThou4 == 0 && labelThous4 == 0) {
        ggbApplet.setVisible("textMil4", false);
        ggbApplet.setVisible("textHunThou4", false);
        ggbApplet.setVisible("textTenThou4", false);
        ggbApplet.setVisible("textThou4", false);
        ggbApplet.setVisible("textHuns4", true);
        ggbApplet.setVisible("textTens4", true);
        ggbApplet.setVisible("textOnes4", true);
    }
    if (labelMil4 == 0 && labelHunThou4 == 0 && labelTenThou4 == 0 && labelThous4 == 0 && labelHuns4 == 0) {
        ggbApplet.setVisible("textMil4", false);
        ggbApplet.setVisible("textHunThou4", false);
        ggbApplet.setVisible("textTenThou4", false);
        ggbApplet.setVisible("textThou4", false);
        ggbApplet.setVisible("textHuns4", false);
        ggbApplet.setVisible("textTens4", true);
        ggbApplet.setVisible("textOnes4", true);
    }
    if (labelMil4 == 0 && labelHunThou4 == 0 && labelTenThou4 == 0 && labelThous4 == 0 && labelHuns4 == 0 && labelTens4 == 0) {
        ggbApplet.setVisible("textMil4", false);
        ggbApplet.setVisible("textHunThou4", false);
        ggbApplet.setVisible("textTenThou4", false);
        ggbApplet.setVisible("textThou4", false);
        ggbApplet.setVisible("textHuns4", false);
        ggbApplet.setVisible("textTens4", false);
        ggbApplet.setVisible("textOnes4", true);
    }
    if (labelMil4 == 0 && labelHunThou4 == 0 && labelTenThou4 == 0 && labelThous4 == 0 && labelHuns4 == 0 && labelTens4 == 0 && labelOnes4 == 0) {
        ggbApplet.setVisible("textMil4", false);
        ggbApplet.setVisible("textHunThou4", false);
        ggbApplet.setVisible("textTenThou4", false);
        ggbApplet.setVisible("textThou4", false);
        ggbApplet.setVisible("textHuns4", false);
        ggbApplet.setVisible("textTens4", false);
        ggbApplet.setVisible("textOnes4", true);
    }
    if (labelMil == 0 && labelMil2 == 0 && labelMil4 == 0 && labelHunThou4 == 0 && labelTenThou4 == 0 && labelThous4 == 0 && labelHuns4 == 0 && labelTens4 == 0 && labelOnes4 == 0) {
        ggbApplet.setVisible("textMil4", false);
        ggbApplet.setVisible("textHunThou4", false);
        ggbApplet.setVisible("textTenThou4", false);
        ggbApplet.setVisible("textThou4", false);
        ggbApplet.setVisible("textHuns4", false);
        ggbApplet.setVisible("textTens4", false);
        ggbApplet.setVisible("textOnes4", false);
    }
}
//sets all values back to the start
function reset() {
    setText();
    click = 0;
    //set question button visible and subtract it button invisible
    ggbApplet.setVisible("subtractReady", true);
    ggbApplet.setVisible("subtract", false);
    rowAdderOnes = 0;
    rowAdderTens = 0;
    rowAdderHuns = 0;
    rowAdderThous = 0;
    rowAdderTenThou = 0;
    rowAdderHunThou = 0;
    rowAdderMil = 0;
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

    //determined what points where not integral to applet and deletes them
    pointNames = ggbApplet.getAllObjectNames("point");
    lengthPointNames = pointNames.length;
    for (iter9 = 0; iter9 < lengthPointNames; iter9++) {
        if (!pointNames[iter9].includes("ig")) {
            ggbApplet.deleteObject(pointNames[iter9]);
        }
    }
}
