// interpret and use student's penstrokes, courtesy of Kim
function ggbOnInit() {
    ggbApplet.registerAddListener("parseStroke");
}

function parseStroke(name) {
    if (ggbApplet.getObjectType(name) == "penstroke") {
        ggbApplet.setVisible(name, false);
        let cmdString = ggbApplet.getCommandString(name);
        // remove the front and end of that string
        let defPoints = cmdString.slice(cmdString.indexOf("("), cmdString.length - 18);
        let pointsArr = defPoints.split(", ");
        let newPLine = ggbApplet.evalCommandGetLabels("Polyline({" + pointsArr + "})");
        ggbApplet.setFixed(newPLine, false, false);
        // if you want to create intersections with the polyline, use something like this
        let intList = ggbApplet.evalCommandGetLabels("{Intersect(f, " + newPLine + ")}");
        ggbApplet.setFixed(intList, false, false);
        // if you want to attach something to each intersection, use something like this
        let images = ggbApplet.evalCommandGetLabels("Sequence(Translate(t1, Vector(E, Element(" + intList + ",i))), i, 1, Length(" + intList + "))");
        ggbApplet.setFixed(images, false, false);
        ggbApplet.setVisible(intList, false);
    };
}
