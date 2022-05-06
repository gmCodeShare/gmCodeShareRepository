function xMarksTheSpot(a) {
    if (a[0] == "mouseDown" && a[1] != "n") {
        click++;
        xHit = Math.round(ggbApplet.getValue("n") * a.x) / ggbApplet.getValue("n");
        yHit = Math.round(125 * a.y) / 125;
        if (yHit > 0) {
            ggbApplet.evalCommand("XPoint" + click + "=(" + xHit + "," + 0.125 + ")");
            ggbApplet.setPointStyle("XPoint" + click, 1);
            //  ggbApplet.setFixed("XPoint" + click, true, false);
            ggbApplet.setColor("XPoint" + click, 130, 63, 152);
            xList.push("XPoint" + click);
        }
    }
    if (click > 4) {
        ggbApplet.unregisterClientListener("xMarksTheSpot");
    }
}

function validate() {
    for (var i = 1; i <= ggbApplet.getValue("Length(pointsTrue)"); i++) {
        realPoints.push(ggbApplet.getValue("pointsTrue(" + i + ")"));
    }
    realPointSet = [...new Set(realPoints.sort())];
    xSet = [...new Set(xList.sort())];
    console.log(xSet);
    console.log(realPointSet);
    for (var j = 0; j < 4; j++) {
        if (xSet[j] === realPointSet[j]) {
            ggbApplet.setValue("pointsCorrect", ggbApplet.getValue("pointsCorrect") + 0.25);
        }
        console.log("Points correct: " + ggbApplet.getValue("pointsCorrect"));
    }
}


function mischiefManaged() {
    for (var i = 1; i <= click; i++) {
        ggbApplet.deleteObject("XPoint" + i);
    }
    click = 0;
    xList = [];
    ggbApplet.registerClientListener("xMarksTheSpot");
}
