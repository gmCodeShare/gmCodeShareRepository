function ggbOnInit() {
    ggbApplet.registerObjectClickListener("button1", "multiplyIt");
    ggbApplet.registerObjectClickListener("button2", "reset");
    ggbApplet.registerClientListener("breakOut");
    ggbApplet.registerClientListener("vacuumIt");
    ggbApplet.registerObjectClickListener("dump", "dumpVac");
}

function multiplyIt() {
    var z;
    for (z = 0; z < ggbApplet.getValue("multiplier"); z++) {
        var i;
        for (i = 0; i < ggbApplet.getValue("hundredsCount"); i++) {
            hundRowCount = Math.floor(ggbApplet.getValue(i) /
                5) + 1;
            ggbApplet.evalCommand("H" + i + z + "=PointIn(box)");
            ggbApplet.setCoords("H" + i + z, i % 5 + 6, 30 - hundRowCount - 2 * z);
            ggbApplet.evalCommand("SetConditionToShowObject(H" + i + z + ",IsInRegion(H" + i + z + ",hundreds))");
        }
        var j;
        for (j = 0; j < ggbApplet.getValue("tensCount"); j++) {
            tensRowCount = Math.floor(ggbApplet.getValue(j) / 5) + 1;
            ggbApplet.evalCommand("T" + j + z + "=PointIn(box)");
            ggbApplet.setCoords("T" + j + z, j % 5 + 17, 30 - tensRowCount - 2 * z);
            ggbApplet.evalCommand("SetConditionToShowObject(T" + j + z + ",IsInRegion(T" + j + z + ",tens))");
        }
        var k;
        for (k = 0; k < ggbApplet.getValue("onesCount"); k++) {
            onesRowCount = Math.floor(ggbApplet.getValue(k) / 5) + 1;
            ggbApplet.evalCommand("O" + k + z + "=PointIn(box)");
            ggbApplet.setCoords("O" + k + z, k % 5 + 28, 30 - onesRowCount - 2 * z);
            ggbApplet.evalCommand("SetConditionToShowObject(O" + k + z + ",IsInRegion(O" + k + z + ",ones))");
        }
    }
}

function breakOut(grabbed) {
    if (grabbed[0] == "select") {
        name = grabbed[1];
        type = ggbApplet.getObjectType(grabbed[1]);
    }
    if (grabbed[0] == "dragEnd") {
        type = ggbApplet.getObjectType(grabbed[1]);
        if (type == "point") {
            if (name.includes("H") && ggbApplet.getXcoord(grabbed[1]) > 16) {
                for (column = 0; column < 2; column++) {
                    for (row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("UT" + row + column + "=PointIn(tens)");
                        ggbApplet.setCoords("UT" + row + column, row + 17, 30 - 2 * ggbApplet.getValue("multiplier") - column - 1);
                        ggbApplet.setColor("UT" + row + column, 145, 145, 213);
                    }
                }
            }
        }
        if (type == "point") {
            if (name.includes("T") && ggbApplet.getXcoord(grabbed[1]) > 27) {
                for (column = 0; column < 2; column++) {
                    for (row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("UO" + row + column + "=PointIn(ones)");
                        ggbApplet.setCoords("UO" + row + column, row + 28, 30 - 2 * ggbApplet.getValue("multiplier") - column - 1);
                        ggbApplet.setColor("UO" + row + column, 145, 145, 213);
                    }
                }
            }
        }
    }
}

var allPoints = ggbApplet.getAllObjectNames("point");
var vacuuming = "";
var step = 1;

function vacuumIt(hoover) {
    allPoints = ggbApplet.getAllObjectNames("point");
    if (hoover[0] == "dragEnd") {
        var iter8;
        for (iter8 = 0; iter8 < allPoints.length; iter8++) {

            // Check that we're vacuuming uniformly vs some ones and some tens. Also don't vacuum points that make the corners of the regions.
            if (ggbApplet.getValue("IsInRegion(" + allPoints[iter8] + ",ones)") && ggbApplet.getValue("IsInRegion(" + allPoints[iter8] + ",vacuum)") && !allPoints[iter8].includes("Vac") && !allPoints[iter8].includes("ig") && vacuuming != "ten" && step < 11) {
                //Here's what we're vacuuming:
                vacuuming = "one";
                ggbApplet.deleteObject(allPoints[iter8]);
                ggbApplet.setVisible("Vac" + step, true);
                step++;
            };

            if (ggbApplet.getValue("IsInRegion(" + allPoints[iter8] + ",tens)") && ggbApplet.getValue("IsInRegion(" + allPoints[iter8] + ",vacuum)") && !allPoints[iter8].includes("Vac") && !allPoints[iter8].includes("ig") && vacuuming != "one" && step < 11) {
                //Here's what we're vacuuming:
                vacuuming = "ten";
                ggbApplet.deleteObject(allPoints[iter8]);
                ggbApplet.setVisible("Vac" + step, true);
                step++;
            };
        };

        // Once the bag is full and user drags the vacuum into the next region up, release the points and make a new one in the next region.
        if (hoover[1] == "vacuum" && step == 11 && vacuuming == "one") {
            var jter8;
            var vacCheck = [];
            for (jter8 = 1; jter8 < 11; jter8++) {
                if (ggbApplet.getValue("IsInRegion(Vac" + jter8 + ",tens)")) {
                    vacCheck.push("y");
                };
            };
            // Next line is changeable. It modifies how much of the vacuum has to be in the new region before it creates the new point.
            if (vacCheck.length == 10) {
                ggbApplet.evalCommand("PointIn(tens)");
                allPoints = ggbApplet.getAllObjectNames("point");
                // Next line is changeable. It just tells the new point where to go.
                ggbApplet.setCoords(allPoints[allPoints.length - 1], 20, 13);
                resetVac();
            };
        };

        if (hoover[1] == "vacuum" && step == 11 && vacuuming == "ten") {
            var mter8;
            var vacCheck = [];
            for (mter8 = 1; mter8 < 11; mter8++) {
                if (ggbApplet.getValue("IsInRegion(Vac" + mter8 + ",hundreds)")) {
                    vacCheck.push("y");
                };
            };
            // Next line is changeable. It modifies how much of the vacuum has to be in the new region before it creates the new point.
            if (vacCheck.length == 10) {
                ggbApplet.evalCommand("PointIn(hundreds)");
                allPoints = ggbApplet.getAllObjectNames("point");
                // Next line is changeable. It just tells the new point where to go.
                ggbApplet.setCoords(allPoints[allPoints.length - 1], 8, 13);
                resetVac();
            };
        };
    }; // dragEnd if statement
}

function resetVac() {
    var kter8;
    for (kter8 = 1; kter8 < 11; kter8++) {
        ggbApplet.setVisible("Vac" + kter8, false);
    };
    step = 1;
    vacuuming = "";
    ggbApplet.setCoords("VacBL", ggbApplet.getXcoord("igBL"), ggbApplet.getYcoord("igBL"));
    ggbApplet.setCoords("VacBR", ggbApplet.getXcoord("igBR"), ggbApplet.getYcoord("igBR"));
    ggbApplet.setCoords("VacTL", ggbApplet.getXcoord("igTL"), ggbApplet.getYcoord("igTL"));
    ggbApplet.setCoords("VacTR", ggbApplet.getXcoord("igTR"), ggbApplet.getYcoord("igTR"));
}

function dumpVac() {
    if (vacuuming == "one") {
        var pter8;
        for (pter8 = 1; pter8 < step; pter8++) {
            ggbApplet.evalCommand("PointIn(ones)");
            allPoints = ggbApplet.getAllObjectNames("point");
            // This line is where you'd tell the new point to go somewhere specific.
        };
    };

    if (vacuuming == "ten") {
        var qter8;
        for (qter8 = 1; qter8 < step; qter8++) {
            ggbApplet.evalCommand("PointIn(tens)");
            allPoints = ggbApplet.getAllObjectNames("point");
            // This line is where you'd tell the new point to go somewhere specific.
        };
    };
    resetVac();
}

function reset() {
    pointNames = [];
    pointNames = ggbApplet.getAllObjectNames("point");
    lengthPointNames = pointNames.length;
    for (iter9 = 0; iter9 < lengthPointNames; iter9++) {
        if (!pointNames[iter9].includes("ig") && !pointNames[iter9].includes("Vac")) {
            ggbApplet.deleteObject(pointNames[iter9]);
        }
    }
}
