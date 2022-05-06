function ggbOnInit() {
    ggbApplet.registerClientListener("vacuumIt");
    ggbApplet.registerObjectClickListener("dump", "dumpVac");
}

var allPoints = ggbApplet.getAllObjectNames("point");
var vacuuming = "";
var step = 1;


function vacuumIt(a) {
    if (a[0] == "dragEnd") {
        var i
        for (i = 0; i < allPoints.length; i++) {

            // Check that we're vacuuming uniformly vs some ones and some tens. Also don't vacuum points that make the corners of the regions.
            if (ggbApplet.getValue("IsInRegion(" + allPoints[i] + ",oneRegion)") && ggbApplet.getValue("IsInRegion(" + allPoints[i] + ",vacuum)") && !allPoints[i].includes("Vac") && !allPoints[i].includes("ig") && vacuuming != "tens" && step < 11) {
                //Here's what we're vacuuming:
                vacuuming = "ones";
                ggbApplet.deleteObject(allPoints[i]);
                ggbApplet.setVisible("Vac" + step, true);
                step++;
            };

            if (ggbApplet.getValue("IsInRegion(" + allPoints[i] + ",tenRegion)") && ggbApplet.getValue("IsInRegion(" + allPoints[i] + ",vacuum)") && !allPoints[i].includes("Vac") && !allPoints[i].includes("ig") && vacuuming != "ones" && step < 11) {
                //Here's what we're vacuuming:
                vacuuming = "tens";
                ggbApplet.deleteObject(allPoints[i]);
                ggbApplet.setVisible("Vac" + step, true);
                step++;
            };
        };

        // Once the bag is full and user drags the vacuum into the next region up, release the points and make a new one in the next region.
        if (a[1] == "vacuum" && step == 11 && vacuuming == "ones") {
            var j;
            var vacCheck = [];
            for (j = 1; j < 11; j++) {
                if (ggbApplet.getValue("IsInRegion(Vac" + j + ",tenRegion)")) {
                    vacCheck.push("y");
                };
            };
            // Next line is changeable. It modifies how much of the vacuum has to be in the new region before it creates the new point.
            if (vacCheck.length == 10) {
                ggbApplet.evalCommand("PointIn(tenRegion)");
                allPoints = ggbApplet.getAllObjectNames("point");
                // Next line is changeable. It just tells the new point where to go.
                ggbApplet.setCoords(allPoints[allPoints.length - 1], 2, 3);
                resetVac();
            };
        };

        if (a[1] == "vacuum" && step == 11 && vacuuming == "tens") {
            var m;
            var vacCheck = [];
            for (m = 1; m < 11; m++) {
                if (ggbApplet.getValue("IsInRegion(Vac" + m + ",hunRegion)")) {
                    vacCheck.push("y");
                };
            };
            // Next line is changeable. It modifies how much of the vacuum has to be in the new region before it creates the new point.
            if (vacCheck.length == 10) {
                ggbApplet.evalCommand("PointIn(hunRegion)");
                allPoints = ggbApplet.getAllObjectNames("point");
                // Next line is changeable. It just tells the new point where to go.
                ggbApplet.setCoords(allPoints[allPoints.length - 1], -7, 3);
                resetVac();
            };
        };

    }; // dragEnd if statement
}

function resetVac() {
    var k
    for (k = 1; k < 11; k++) {
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
        var p
        for (p = 1; p < step; p++) {
            ggbApplet.evalCommand("PointIn(oneRegion)");
            allPoints = ggbApplet.getAllObjectNames("point");
            // This line is where you'd tell the new point to go somewhere specific.
        };
    };

    if (vacuuming == "tens") {
        var q
        for (q = 1; q < step; q++) {
            ggbApplet.evalCommand("PointIn(tenRegion)");
            allPoints = ggbApplet.getAllObjectNames("point");
            // This line is where you'd tell the new point to go somewhere specific.
        };
    };
    resetVac();
}
