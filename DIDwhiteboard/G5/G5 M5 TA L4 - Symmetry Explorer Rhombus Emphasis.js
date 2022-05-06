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
congruence();
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


function congruence() {
	let a = ggb1.instance.getValue("Length(a)");
	let b = ggb1.instance.getValue("Length(b)");
	let c = ggb1.instance.getValue("Length(c)");
	let d = ggb1.instance.getValue("Length(d)");

	let sideLengths = [a, b, c, d];
	let sideNames = ["a", "b", "c", "d"];
	let congruent = [];
	let congruentB = [];
    if (a == b && a == c && a == d) {
        congruent.push("a");
        congruent.push("b");
        congruent.push("c");
        congruent.push("d");
      } else {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (sideLengths[i] == sideLengths[j] && i != j) {
                    if (
                        congruent.length >= 2 &&
                        congruent.indexOf(sideNames[i]) == -1 &&
                        congruent.indexOf(sideNames[j]) == -1 &&
                        ggb1.instance.getValue(`Length(${congruent[0]})`) == sideLengths[i]
                    ) {
                        congruent.push(sideNames[j]);
                    }
                    if (congruent.length < 2) {
                        congruent.push(sideNames[i]);
                        congruent.push(sideNames[j]);
                    }
                    if (congruentB.length < 2 && congruent.length >= 2 && ggb1.instance.getValue(`Length(${congruent[0]})`) != sideLengths[i]) {
                        congruentB.push(sideNames[i]);
                        congruentB.push(sideNames[j]);
                    }
                    if (
                        congruentB.length >= 2 &&
                        congruentB.indexOf(sideNames[i]) == -1 &&
                        congruentB.indexOf(sideNames[j]) == -1 &&
                        ggb1.instance.getValue(`Length(${congruentB[0]})`) == sideLengths[i]
                    ) {
                        congruentB.push(sideNames[j]);
                    }
                }
            }

        }
    }
   console.log(congruent, congruentB);
    ggb1.instance.evalCommand(`SetDecoration(a,0)`);
    ggb1.instance.evalCommand(`SetDecoration(b,0)`);
    ggb1.instance.evalCommand(`SetDecoration(c,0)`);
    ggb1.instance.evalCommand(`SetDecoration(d,0)`);
    for (let i = 0, L = congruent.length; i < L; i++) {
        ggb1.instance.evalCommand(`SetDecoration(${congruent[i]},1)`);
    }
    for (let i = 0, L = congruentB.length; i < L; i++) {
        ggb1.instance.evalCommand(`SetDecoration(${congruentB[i]},2)`);
    }
}
