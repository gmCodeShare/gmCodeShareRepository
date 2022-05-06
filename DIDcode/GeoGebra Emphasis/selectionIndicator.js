// intended for use within ggbOnInit inside GGB's global JS tab
// see pairAppletCanvas.js for details
// works for polygons and images

ggbObject.registerClientListener(function(a) {
    switch (a.type) {
        case "select":
            showSelection(a.target);
            break;
        case "deselect":
            showSelection();
            break;
    }
});

function showSelection(target) {
    var color = [0, 0, 0];
    // delete previous selection poly
    var allPoints = ggbObject.getAllObjectNames("point");
    for (var i = 0, L = allPoints.length; i < L; i++) {
        var point = allPoints[i];
        if (ggbObject.getCaption(point) === "selection") {
            ggbObject.deleteObject(point);
        }
    }
    if (!target) {
        return;
    }
    // create new selection poly
    var points = getVerticesString(target);
    if (!points) {
        return;
    }
    var selPoly = ggbObject.evalCommandGetLabels("Polygon({" + points + "})");
    ggbObject.setFixed(selPoly, false, false);
    ggbObject.setColor(selPoly, ...color);
    ggbObject.setFilling(selPoly, 0);
    ggbObject.setLineThickness(selPoly, 8);
    ggbObject.setLayer(selPoly, ggbObject.getLayer(target) + 1);
}

function getVerticesString(target) {
    // get points for selection poly depending on selected object type
    if (isPoly(target)) {
        var vertString = ggbObject.evalCommandGetLabels("Vertex(" + target + ")");
        var vertArr = vertString.split(",");
        hidePoints(vertArr);
        return vertString;
    } else if (ggbObject.getObjectType(target) === "image") {
        var BL = ggbObject.evalCommandGetLabels("Corner(" + target + ", 1) + 10(-xPix, -yPix)");
        var BR = ggbObject.evalCommandGetLabels("Corner(" + target + ", 2) + 10(xPix, -yPix)");
        var TR = ggbObject.evalCommandGetLabels("Corner(" + target + ", 3) + 10(xPix, yPix)");
        var TL = ggbObject.evalCommandGetLabels("Corner(" + target + ", 4) + 10(-xPix, yPix)");
        var vertArr = [BL, BR, TR, TL];
        hidePoints(vertArr);
        var vertString = vertArr.join(",");
        return vertString;
    }
}

function hidePoints(arr) {
    for (var i = 0, L = arr.length; i < L; i++) {
        var point = arr[i];
        ggbObject.setVisible(point, false);
        ggbObject.setCaption(point, "selection");
    }
}

function isPoly(thing) {
    var polyTypes = ["polygon", "triangle", "quadrilateral", "pentagon", "hexagon"];
    return polyTypes.includes(ggbObject.getObjectType(thing));
}
