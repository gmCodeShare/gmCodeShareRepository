function ggbOnInit() {
    ggbApplet.registerClientListener("popul8");
    ggbApplet.registerObjectUpdateListener("MultiplierDot", "multiplyIt");
    ggbApplet.registerObjectClickListener("button2", "reset");
}
//global variables
var starterTensList = [];
var starterOnesList = [];
var multiplicand = 10 * starterTensList.length + starterOnesList.length;
var multiplier = ggbApplet.getValue("multiplier");

//inital population of points
function popul8(grabbed) {
    //assigns name and type of object grabbed
    if (grabbed[0] == "select") {
        name = grabbed[1];
        type = ggbApplet.getObjectType(grabbed[1]);
    }
    //at the end of the drag
    if (grabbed[0] == "dragEnd") {
        name = grabbed[1];
        type = ggbApplet.getObjectType(grabbed[1]);
        if (type == "point") {
            //move master points to tens region of pvc chart
            if (name.includes("MasterTen") && ggbApplet.getYcoord(name) > 5 && ggbApplet.getYcoord(name) < 27) {
                starterTensList.push(name);
                for (var i = 0; i < starterTensList.length; i++) {
                    ggbApplet.setCoords(name, 6 + i % 5, 29 - Math.floor(i / 5));
                }
            }
            //move master points to ones region of pvc chart
            if (name.includes("MasterOne") && ggbApplet.getYcoord(name) > 5 && ggbApplet.getYcoord(name) < 27) {
                starterOnesList.push(name);
                for (var i = 0; i < starterOnesList.length; i++) {
                    ggbApplet.setCoords(name, 17 + i % 5, 29 - Math.floor(i / 5));
                }
            }
        }
    }
    //update variables and text to represent disks present
    multiplicand = 10 * starterTensList.length + starterOnesList.length;
    multiplier = ggbApplet.getValue("multiplier");
    ggbApplet.evalCommand("text4=Text(" + multiplier + ")");
    ggbApplet.evalCommand("text6=Text(" + multiplicand + ")");
}

function multiplyIt() {
    //hide the master points
    ggbApplet.setVisible("MasterTen1", false);
    ggbApplet.setVisible("MasterTen2", false);
    ggbApplet.setVisible("MasterTen3", false);
    ggbApplet.setVisible("MasterTen4", false);
    ggbApplet.setVisible("MasterTen5", false);
    ggbApplet.setVisible("MasterTen6", false);
    ggbApplet.setVisible("MasterTen7", false);
    ggbApplet.setVisible("MasterTen8", false);
    ggbApplet.setVisible("MasterTen9", false);
    ggbApplet.setVisible("MasterTen10", false);
    ggbApplet.setVisible("MasterOne1", false);
    ggbApplet.setVisible("MasterOne2", false);
    ggbApplet.setVisible("MasterOne3", false);
    ggbApplet.setVisible("MasterOne4", false);
    ggbApplet.setVisible("MasterOne5", false);
    ggbApplet.setVisible("MasterOne6", false);
    ggbApplet.setVisible("MasterOne7", false);
    ggbApplet.setVisible("MasterOne8", false);
    ggbApplet.setVisible("MasterOne9", false);
    ggbApplet.setVisible("MasterOne10", false);
    //update variables and text to represent disks present
    multiplier = ggbApplet.getValue("multiplier");
    ggbApplet.evalCommand("text4=Text(" + multiplier + ")");
    ggbApplet.evalCommand("text6=Text(" + multiplicand + ")");
    //create product points and set the color to red
    var tensCount = Math.floor(multiplicand / 10);
    for (var z = 0; z < multiplier; z++) {
        for (var j = 0; j < tensCount; j++) {
            var tensRowCount = Math.floor(j / 5) + 1;
            ggbApplet.evalCommand("T" + j + z + " = PointIn(tens)");
            ggbApplet.setCoords("T" + j + z, j % 5 + 6, 30 - tensRowCount - 2 * z);
            ggbApplet.setColor("T" + j + z, 255, 0, 0);
        }
        //create product points and set the color to green
        var onesCount = multiplicand % 10;
        for (var k = 0; k < onesCount; k++) {
            var onesRowCount = Math.floor(k / 5) + 1;
            ggbApplet.evalCommand("O" + k + z + " = PointIn(ones)");
            ggbApplet.setCoords("O" + k + z, k % 5 + 17, 30 - onesRowCount - 2 * z);
            ggbApplet.setColor("O" + k + z, 0, 100, 0);
        }
    }
}

function reset() {
    //put the master points and multiplier dot back
    ggbApplet.setCoords("MasterTen1", 6, 4);
    ggbApplet.setCoords("MasterTen2", 7, 4);
    ggbApplet.setCoords("MasterTen3", 8, 4);
    ggbApplet.setCoords("MasterTen4", 9, 4);
    ggbApplet.setCoords("MasterTen5", 10, 4);
    ggbApplet.setCoords("MasterTen6", 6, 3);
    ggbApplet.setCoords("MasterTen7", 7, 3);
    ggbApplet.setCoords("MasterTen8", 8, 3);
    ggbApplet.setCoords("MasterTen9", 9, 3);
    ggbApplet.setCoords("MasterTen10", 10, 3);
    ggbApplet.setCoords("MasterOne1", 17, 4);
    ggbApplet.setCoords("MasterOne2", 18, 4);
    ggbApplet.setCoords("MasterOne3", 19, 4);
    ggbApplet.setCoords("MasterOne4", 20, 4);
    ggbApplet.setCoords("MasterOne5", 21, 4);
    ggbApplet.setCoords("MasterOne6", 17, 3);
    ggbApplet.setCoords("MasterOne7", 18, 3);
    ggbApplet.setCoords("MasterOne8", 19, 3);
    ggbApplet.setCoords("MasterOne9", 20, 3);
    ggbApplet.setCoords("MasterOne10", 21, 3);
    ggbApplet.setCoords("MultiplierDot", 30, 28);
    //set the master points visible
    ggbApplet.setVisible("MasterTen1", true);
    ggbApplet.setVisible("MasterTen2", true);
    ggbApplet.setVisible("MasterTen3", true);
    ggbApplet.setVisible("MasterTen4", true);
    ggbApplet.setVisible("MasterTen5", true);
    ggbApplet.setVisible("MasterTen6", true);
    ggbApplet.setVisible("MasterTen7", true);
    ggbApplet.setVisible("MasterTen8", true);
    ggbApplet.setVisible("MasterTen9", true);
    ggbApplet.setVisible("MasterTen10", true);
    ggbApplet.setVisible("MasterOne1", true);
    ggbApplet.setVisible("MasterOne2", true);
    ggbApplet.setVisible("MasterOne3", true);
    ggbApplet.setVisible("MasterOne4", true);
    ggbApplet.setVisible("MasterOne5", true);
    ggbApplet.setVisible("MasterOne6", true);
    ggbApplet.setVisible("MasterOne7", true);
    ggbApplet.setVisible("MasterOne8", true);
    ggbApplet.setVisible("MasterOne9", true);
    ggbApplet.setVisible("MasterOne10", true);
    //delete all points that aren't important
    pointNames = [];
    starterTensList = [];
    starterOnesList = [];
    pointNames = ggbApplet.getAllObjectNames("point");
    lengthPointNames = pointNames.length;
    for (var iter9 = 0; iter9 < lengthPointNames; iter9++) {
        if (!pointNames[iter9].includes("ig") && !pointNames[iter9].includes("Master") && !pointNames[iter9].includes("Dot") && !pointNames[iter9].includes("Vac")) {
            ggbApplet.deleteObject(pointNames[iter9]);
        }
    }
}
