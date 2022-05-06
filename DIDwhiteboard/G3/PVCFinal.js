function ggbOnInit() {
    ggbApplet.registerClientListener("vacuumIt");
    ggbApplet.registerObjectClickListener("dump", "dumpVac");
    ggbApplet.registerObjectClickListener("multiply", "multiplyIt");
    ggbApplet.registerObjectClickListener("reset", "resetAll");
    ggbApplet.registerObjectUpdateListener("mult1", "resetAll");
    ggbApplet.registerObjectUpdateListener("mult2", "resetAll");
}

// Yeah, we really do want these variables to be global
var allPoints = ggbApplet.getAllObjectNames("point");
var vacuuming = "";
var dragging = "";
var step = 1;

// This function contains everything that needs a client listener, not just vacuum-related stuff
function vacuumIt(a) {
    if (a[0] == "dragEnd") {
        allPoints = ggbApplet.getAllObjectNames("point");
        for (var i = 0; i < allPoints.length; i++) {

            // Check that we're vacuuming uniformly vs some ones and some tens. Also don't vacuum points that make the corners of the regions.
            if (onesPoints.includes(allPoints[i]) && ggbApplet.getValue("IsInRegion(" + allPoints[i] + ",vacuum)") && !allPoints[i].includes("Vac") && !allPoints[i].includes("ig") && vacuuming != "tens" && step < 11) {
                //Here's what we're vacuuming:
                vacuuming = "ones";
                onesPoints.splice(onesPoints.indexOf(allPoints[i]), 1);
                ggbApplet.deleteObject(allPoints[i]);
                ggbApplet.setVisible("Vac" + step, true);
                step++;
            };

            if (tensPoints.includes(allPoints[i]) && ggbApplet.getValue("IsInRegion(" + allPoints[i] + ",vacuum)") && !allPoints[i].includes("Vac") && !allPoints[i].includes("ig") && vacuuming != "ones" && step < 11) {
                //Here's what we're vacuuming:
                vacuuming = "tens";
                tensPoints.splice(tensPoints.indexOf(allPoints[i]), 1);
                ggbApplet.deleteObject(allPoints[i]);
                ggbApplet.setVisible("Vac" + step, true);
                step++;
            };
        };

        // Once the bag is full and user drags the vacuum into the next region up, release the points and make a new one in the next region.
        if (a[1] == "vacuum" && step == 11 && vacuuming == "ones") {
            var vacCheck = [];
            for (var j = 1; j < 11; j++) {
                if (ggbApplet.getValue("IsInRegion(Vac" + j + ",tenRegion)")) {
                    vacCheck.push("y");
                };
            };
            // Next line is changeable. It modifies how much of the vacuum has to be in the new region before it creates the new point.
            if (vacCheck.length == 10) {
                ggbApplet.evalCommand("PointIn(oneTenRegion)");
                allPoints = ggbApplet.getAllObjectNames("point");
                tensPoints.push(allPoints[allPoints.length - 1]);
                resetVac();
                shufflePoints();
            };
        };

        if (a[1] == "vacuum" && step == 11 && vacuuming == "tens") {
            var vacCheck = [];
            for (var m = 1; m < 11; m++) {
                if (ggbApplet.getValue("IsInRegion(Vac" + m + ",hunRegion)")) {
                    vacCheck.push("y");
                };
            };
            // Next line is changeable. It modifies how much of the vacuum has to be in the new region before it creates the new point.
            if (vacCheck.length == 10) {
                ggbApplet.evalCommand("PointIn(tenHunRegion)");
                allPoints = ggbApplet.getAllObjectNames("point");
                hunsPoints.push(allPoints[allPoints.length - 1]);
                resetVac();
                shufflePoints();
            };
        };

        // Explode those points! (At the appropriate time)
        if (dragging == "tens" && ggbApplet.getObjectType(a[1]) == "point" && ggbApplet.getValue("IsInRegion(" + a[1] + ",oneRegion)")) {
            tensPoints.splice(tensPoints.indexOf(a[1]), 1);
            ggbApplet.deleteObject(a[1]);
            for (var i = 0; i < 10; i++) {
                ggbApplet.evalCommand("PointIn(oneRegion)");
                allPoints = ggbApplet.getAllObjectNames("point");
                onesPoints.push(allPoints[allPoints.length - 1]);
            };
            shufflePoints();
        };

        if (dragging == "hundreds" && ggbApplet.getObjectType(a[1]) == "point" && ggbApplet.getValue("IsInRegion(" + a[1] + ",tenRegion)")) {
            hunsPoints.splice(hunsPoints.indexOf(a[1]), 1);
            ggbApplet.deleteObject(a[1]);
            for (var i = 0; i < 10; i++) {
                ggbApplet.evalCommand("PointIn(oneTenRegion)");
                allPoints = ggbApplet.getAllObjectNames("point");
                tensPoints.push(allPoints[allPoints.length - 1]);
            };
            shufflePoints();
        };

    }; // dragEnd if statement

    // Some of the dragEnd stuff above needs to know what sort of point we're dragging
    if (a[0] == "select" && ggbApplet.getObjectType(a[1]) == "point") {
        if (onesPoints.includes(a[1])) {
            dragging = "ones";
        };
        if (tensPoints.includes(a[1])) {
            dragging = "tens";
        };
        if (hunsPoints.includes(a[1])) {
            dragging = "hundreds";
        };
    };

}

function resetVac() {
    for (var k = 1; k < 11; k++) {
        ggbApplet.setVisible("Vac" + k, false);
    };
    step = 1;
    vacuuming = "";
    ggbApplet.setCoords("VacBL", ggbApplet.getXcoord("igBL"), ggbApplet.getYcoord("igBL"));
    ggbApplet.setCoords("VacBR", ggbApplet.getXcoord("igBR"), ggbApplet.getYcoord("igBR"));
    ggbApplet.setCoords("VacTL", ggbApplet.getXcoord("igTL"), ggbApplet.getYcoord("igTL"));
    ggbApplet.setCoords("VacTR", ggbApplet.getXcoord("igTR"), ggbApplet.getYcoord("igTR"));
}

function dumpVac() {
    if (vacuuming == "ones") {
        for (var p = 1; p < step; p++) {
            ggbApplet.evalCommand("PointIn(oneRegion)");
            allPoints = ggbApplet.getAllObjectNames("point");
            onesPoints.push(allPoints[allPoints.length - 1]);
        };
    };

    if (vacuuming == "tens") {
        for (var q = 1; q < step; q++) {
            ggbApplet.evalCommand("PointIn(oneTenRegion)");
            allPoints = ggbApplet.getAllObjectNames("point");
            tensPoints.push(allPoints[allPoints.length - 1]);
        };
    };
    resetVac();
    shufflePoints();
}

// More global variables
var onesPoints = [];
var tensPoints = [];
var hunsPoints = [];
multiplier = ggbApplet.getValue("mult1");
multiplicand = ggbApplet.getValue("mult2");
var hunsPlace = Math.floor(multiplicand / 100) % 10;
var tensPlace = Math.floor(multiplicand / 10) - hunsPlace * 10;
var onesPlace = multiplicand % 10;

function multiplyIt() {
    resetAll();
    let total = ggbApplet.getValue("mult1") * ggbApplet.getValue("mult2");


    for (var i = 1; i <= onesPlace * multiplier; i++) {
        ggbApplet.evalCommand("PointIn(oneRegion)");
        allPoints = ggbApplet.getAllObjectNames("point");
        onesPoints.push(allPoints[allPoints.length - 1]);
    };

    for (var i = 1; i <= tensPlace * multiplier; i++) {
        ggbApplet.evalCommand("PointIn(oneTenRegion)");
        allPoints = ggbApplet.getAllObjectNames("point");
        tensPoints.push(allPoints[allPoints.length - 1]);
    };

    for (var i = 1; i <= hunsPlace * multiplier; i++) {
        ggbApplet.evalCommand("PointIn(tenHunRegion)");
        allPoints = ggbApplet.getAllObjectNames("point");
        hunsPoints.push(allPoints[allPoints.length - 1]);
    };
    shufflePoints();
}

function shufflePoints() {
    let xHuns = [];
    let yHuns = [];
    let xTens = [];
    let yTens = [];
    let xOnes = [];
    let yOnes = [];

    for (z = 0; z < ggbApplet.getValue("mult1"); z++) {
        for (i = 0; i < hunsPlace; i++) {
            var hundRowCount = Math.floor(i / 5) + 1;
            xHuns.push(ggbApplet.getValue("x(ig5)") + i % 5);
            yHuns.push(ggbApplet.getValue("y(ig5)") - hundRowCount - 2 * z);
        }

        for (var j = 0; j < tensPlace; j++) {
            var tensRowCount = Math.floor(j / 5) + 1;
            xTens.push(ggbApplet.getValue("x(ig6)") + j % 5);
            yTens.push(ggbApplet.getValue("y(ig6)") - tensRowCount - 2 * z);
        }

        for (var k = 0; k < onesPlace; k++) {
            var onesRowCount = Math.floor(k / 5) + 1;
            xOnes.push(ggbApplet.getValue("x(ig7)") + k % 5);
            yOnes.push(ggbApplet.getValue("y(ig7)") - onesRowCount - 2 * z);
        }
    }


    for (var i = 0; i < xOnes.length * multiplier; i++) {
        ggbApplet.setCoords(onesPoints[i], xOnes[i], yOnes[i]);
    };

    for (var i = 0; i < xTens.length * multiplier; i++) {
        ggbApplet.setCoords(tensPoints[i - 1], xTens[i - 1], yTens[i - 1]);
    };

    for (var i = 0; i < xHuns.length * multiplier; i++) {
        ggbApplet.setCoords(hunsPoints[i], xHuns[i], yHuns[i]);
    };
}

function resetPoints() {
    allPoints = ggbApplet.getAllObjectNames("point");
    for (var i = 0; i < allPoints.length; i++) {
        if (!allPoints[i].includes("Vac") && !allPoints[i].includes("ig")) {
            ggbApplet.deleteObject(allPoints[i]);
        };
    };
    onesPoints = [];
    tensPoints = [];
    hunsPoints = [];
    dragging = "";
}

function resetAll() {
    resetPoints();
    resetVac();
}
