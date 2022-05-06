const {ggb1, buttonGroup1} = components;

buttonGroup1.on("click:1", () => {
    ggb1.instance.evalCommand("CopyFreeObject(Segment(IntersectNear, IntersectFar))");
    ggb1.instance.evalCommand("SelectObjects(q1)");
    ggb1.instance.evalCommand("SelectObjects()");
})

buttonGroup1.on("click:2", () => {
    deleteThem();
})
ggb1.instance.registerClientListener(fold);

    ggb1.instance.registerObjectUpdateListener("A", deleteThem);
    ggb1.instance.registerObjectUpdateListener("B", deleteThem);
    ggb1.instance.registerObjectUpdateListener("C", deleteThem);
    ggb1.instance.registerObjectUpdateListener("D", deleteThem);


function fold(a) {
    if (a[0] == "select" && a[1] != "button1") {
        ggb1.instance.setValue("time", 0);
    }
    if (a[0] == "dragEnd" && a[1] == "F") {
        ggb1.instance.setAnimating("time", true);
        ggb1.instance.startAnimation();
    }
    if (ggb1.instance.getValue("time") == 1) {
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("time", false);
    }
}

function deleteThem() {
    var segmentList = [];
    segmentList = ggb1.instance.getAllObjectNames("segment");
    segmentList.splice(segmentList.indexOf("a"), 1);
    segmentList.splice(segmentList.indexOf("b"), 1);
    segmentList.splice(segmentList.indexOf("c"), 1);
    segmentList.splice(segmentList.indexOf("d"), 1);
    for (var i = 0; i < segmentList.length; i++) {
        ggb1.instance.deleteObject(segmentList[i]);
    }
}

function halo(point) {
    var haloSize = 10;
        var HexyColor = "\"" + ggb1.instance.getColor(point) + "\"";
        ggb1.instance.setPointStyle(point, 10);
        ggb1.instance.evalCommand(point + "Halo:(x - x(" + point + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + point + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" + haloSize + "^2");
        ggb1.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
        ggb1.instance.setFilling(point + "Halo", 0.25);
        ggb1.instance.setLineThickness(point + "Halo", 0);
        ggb1.instance.setFixed(point + "Halo", false, false);
}

halo("A");
halo("B");
halo("C");
halo("D");
halo("F");
