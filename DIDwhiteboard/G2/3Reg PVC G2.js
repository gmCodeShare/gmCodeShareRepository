function ggbOnInit() {
    ggbApplet.registerClientListener("popul8");
    ggbApplet.registerClientListener("unbundle");
    ggbApplet.registerObjectClickListener("reset", "reset");
    ggbApplet.registerObjectClickListener("bundleButton", "bundleTens");
    ggbApplet.registerObjectClickListener("bundleButton2", "bundleOnes");
}
//global variables
//add lists for increased regions
//lists for initial population of points
var starterHunsList = [];
var starterTensList = [];
var starterOnesList = [];
//lists for all points in a given region
var hunsList = [];
var tensList = [];
var onesList = [];
//number of points that have been bundled up
var bundNumTens = 0;
var bundNumHuns = 0;
//sets beginning point for organizing points
var xStartHund = ggbApplet.getXcoord("HunsStarter");
var yStartHund = ggbApplet.getYcoord("HunsStarter");
var xStartTen = ggbApplet.getXcoord("TensStarter");
var yStartTen = ggbApplet.getYcoord("TensStarter");
var xStartOne = ggbApplet.getXcoord("OnesStarter");
var yStartOne = ggbApplet.getYcoord("OnesStarter");
var rowAdderOnes = 0;
var rowAdderTens = 0;
var rowAdderHuns = 0;
var labelHuns = ggbApplet.getValue("hunsCount");
var labelTens = ggbApplet.getValue("tensCount");
var labelOnes = ggbApplet.getValue("onesCount");
var unbundledHunds = 0;
var unbundledTens = 0;
var unbundledOnes = 0;

//inital population of points
//student grabs points from bottom and drags into box
function popul8(grabbed) {
    //assigns name and type of object selected
    if (grabbed[0] == "select") {
        name = grabbed[1];
        type = ggbApplet.getObjectType(grabbed[1]);
    }
    //at the end of the drag
    if (grabbed[0] == "dragEnd") {
        //assigns name and type of object selected
        name = grabbed[1];
        type = ggbApplet.getObjectType(grabbed[1]);
        if (type == "point") {
            //move master points to hundreds region of pvc chart
            if (name.includes("MasterHun") && ggbApplet.getYcoord(name) > 5 && ggbApplet.getYcoord(name) < 27) {
                //make a list of points that are initially populated
                starterHunsList.push(name);
                //organizes points into 5 columns and up to 2 rows, starting at
                for (var i = 0; i < starterHunsList.length; i++) {
                    ggbApplet.setCoords(name, xStartHund + i % 5, yStartHund - Math.floor(i / 5));
                }
            }
            //move master points to tens region of pvc chart
            if (name.includes("MasterTen") && ggbApplet.getYcoord(name) > 5 && ggbApplet.getYcoord(name) < 27) {
                //make a list of points that are initially populated
                starterTensList.push(name);
                //organizes points into 5 columns and up to 2 rows, starting at
                for (var i = 0; i < starterTensList.length; i++) {
                    ggbApplet.setCoords(name, xStartTen + i % 5, yStartTen - Math.floor(i / 5));
                }
            }
            //move master points to ones region of pvc chart
            if (name.includes("MasterOne") && ggbApplet.getYcoord(name) > 5 && ggbApplet.getYcoord(name) < 27) {
                starterOnesList.push(name);
                for (var i = 0; i < starterOnesList.length; i++) {
                    ggbApplet.setCoords(name, xStartOne + i % 5, yStartOne - Math.floor(i / 5));
                }
            }
        }
    }
       update();
}
//bundles points into a dot in a new region when clicked if possible
function bundleTens() {
    //updates the number that tracks how many sets were bundled
    bundNumHuns = bundNumHuns + 1;
    //determines length of tens list
    var hunLength = hunsList.length;
    //gives the starting x coordinate for bundled points
    var xBP = xStartHund - 1;
    //gives the starting y coordinate for bundled points if no tens exist yet or based on last created tens point
    if (hunLength == 0) {
        var yBP = yStartHund - 1;
    } else {
        var yBP = ggbApplet.getYcoord(hunsList[hunLength - 1]);
    }
    //gives the starting y coordinate if points have not already been bundled
    if (!hunsList[hunLength - 1].includes("BundlePoint")) {
        yBP = yBP - 2;
    }
    //gives the starting y coordinate if up to 5 points have already been bundled
    if (bundNumHuns < 6) {
        xBP = xBP + bundNumHuns;
    }
    //gives the starting x and y coordinate if bundling 6th point, which creates another row
    if (bundNumHuns == 6) {
        xBP = xBP + 1;
        yBP = yBP - 2;
    }
    //gives the starting x and y coordinate in the for points in the new row
    if (bundNumHuns > 6) {
        xBP = xBP + bundNumHuns - 5;
    }
    //sets coordinate of new BundlePoint
    ggbApplet.setCoords("BundlePoint" + bundNumHuns, xBP, yBP);
    //adds that point to the list of points in the tens region
    tensList.push("BundlePoint" + bundNumHuns);
    //sets the bundled points visibility to false and removes them from the ones list
    var tenLength = tensList.length;
    for (var i = 0; i < 10; i++) {
        ggbApplet.setVisible(tensList[tenLength - 1 - i], false);
        tensList.pop();
    }
    //allows you to see the bundle button if there are enough points to bundle
    if (tensList.length >= 10) {
        ggbApplet.setVisible("bundleButton", true);
    } else {
        ggbApplet.setVisible("bundleButton", false);
    }
}
//bundles points into a dot in a new region when clicked if possible
function bundleOnes() {
    //updates the number that tracks how many sets were bundled
    bundNumTens = bundNumTens + 1;
    //determines length of tens list
    var tenLength = tensList.length;
    //gives the starting x coordinate for bundled points
    var xBP = xStartTen - 1;
    //gives the starting y coordinate for bundled points if no tens exist yet or based on last created tens point
    if (tenLength == 0) {
        var yBP = yStartTen - 1;
    } else {
        var yBP = ggbApplet.getYcoord(tensList[tenLength - 1]);
    }
    //gives the starting y coordinate if points have not already been bundled
    if (!tensList[tenLength - 1].includes("BundlePoint")) {
        yBP = yBP - 2;
    }
    //gives the starting y coordinate if up to 5 points have already been bundled
    if (bundNumTens < 6) {
        xBP = xBP + bundNumTens;
    }
    //gives the starting x and y coordinate if bundling 6th point, which creates another row
    if (bundNumTens == 6) {
        xBP = xBP + 1;
        yBP = yBP - 2;
    }
    //gives the starting x and y coordinate in the for points in the new row
    if (bundNumTens > 6) {
        xBP = xBP + bundNumTens - 5;
    }
    //sets coordinate of new BundlePoint
    ggbApplet.setCoords("BundlePoint" + bundNumTens, xBP, yBP);
    //adds that point to the list of points in the tens region
    tensList.push("BundlePoint" + bundNumTens);
    //sets the bundled points visibility to false and removes them from the ones list
    var oneLength = onesList.length;
    for (var i = 0; i < 10; i++) {
        ggbApplet.setVisible(onesList[oneLength - 1 - i], false);
        onesList.pop();
    }
    //allows you to see the bundle button if there are enough points to bundle
    if (onesList.length >= 10) {
        ggbApplet.setVisible("bundleButton2", true);
    } else {
        ggbApplet.setVisible("bundleButton2", false);
    }
}

//unbundles points when dragged to a new region
function unbundle(grabbed) {
    if (grabbed[0] == "select") {
        name = grabbed[1];
        type = ggbApplet.getObjectType(grabbed[1]);
    }
    //if a tens point is dragged to the ones region
    if (grabbed[0] == "dragEnd") {
        type = ggbApplet.getObjectType(grabbed[1]);
        if (type == "point") {
            if ((name.includes("T") && ggbApplet.getXcoord(grabbed[1]) > 27) || (name.includes("BundlePoint") && ggbApplet.getXcoord(grabbed[1]) > 27)) {
                //removes point from tens list
                var choppingBlock = tensList.indexOf(name);
                tensList.splice(choppingBlock, 1);
                //it sets that point's visibility to false and creates ten new points in the ones region in two rows of five and adds them to the regional list
                ggbApplet.evalCommand("SetVisibleInView(" + name + ",1,false)");
                var yEndOne = ggbApplet.getYcoord(onesList[onesList.length - 1]) - 1;
                for (var column = 0; column < 2; column++) {
                    for (var row = 0; row < 5; row++) {
                        ggbApplet.evalCommand("UO" + labelOnes + "=PointIn(box)");
                        ggbApplet.setCoords("UO" + labelOnes, xStartOne + row, yEndOne - column);
                        ggbApplet.setColor("UO" + labelOnes, 0, 100, 0);
                        onesList.push("UO" + labelOnes);
                        labelOnes++;
                    }
                }
                //bumps the next row available down one and tells later functions how many unbundled ones there are
                rowAdderOnes = rowAdderOnes + 1;
                unbundledOnes = unbundledOnes + 1;
            }
        }
    }
    //allows you to see the bundle button if there are enough points to bundle
    if (onesList.length >= 10) {
        ggbApplet.setVisible("bundleButton", true);
    } else {
        ggbApplet.setVisible("bundleButton", false);
    }
}

//updates text
function update() {
    //update variables to represent disks present
    //comment out lines pertaining to other operations
    multiplicand = 10 * starterTensList.length + starterOnesList.length;
    multiplier = ggbApplet.getValue("multiplier");
    ggbApplet.evalCommand("text4=Text(" + multiplier + ")");
    ggbApplet.evalCommand("text6=Text(" + multiplicand + ")");
}

//multiplies existing copies based on MultiplierDot position
function multiplyIt() {
    //hide the master points
    for (var i = 1; i < 11; i++) {
        ggbApplet.setVisible("MasterTen" + i, false);
        ggbApplet.setVisible("MasterOne" + i, false);
    }
    //update variables and text to represent disks present
    update();
    //create product points and set the color to red
    var tensCount = Math.floor(multiplicand / 10);
    for (var i = 0; i < multiplier; i++) {
        for (var j = 0; j < tensCount; j++) {
            var tensRowCount = Math.floor(j / 5) + 1;
            ggbApplet.evalCommand("T" + j + i + " = PointIn(box)");
            ggbApplet.setCoords("T" + j + i, j % 5 + xStartTen, yStartTen + 1 - tensRowCount - 2 * i);
            ggbApplet.setColor("T" + j + i, 255, 0, 0);
            if (tensList.indexOf("T" + j + i) == -1) {
                tensList.push("T" + j + i);
            }
        }
        //create product points and set the color to green
        var onesCount = multiplicand % 10;
        for (var k = 0; k < onesCount; k++) {
            var onesRowCount = Math.floor(k / 5) + 1;
            ggbApplet.evalCommand("O" + k + i + " = PointIn(box)");
            ggbApplet.setCoords("O" + k + i, k % 5 + xStartOne, yStartOne + 1 - onesRowCount - 2 * i);
            ggbApplet.setColor("O" + k + i, 0, 100, 0);
            if (onesList.indexOf("O" + k + i) == -1) {
                onesList.push("O" + k + i);
            }
        }
    }
    if (onesList.length >= 10) {
        ggbApplet.setVisible("bundleButton", true);
    } else {
        ggbApplet.setVisible("bundleButton", false);
    }
}

//puts everything back to the start
function reset() {
    //put the master points and multiplier dot back to start
    ggbApplet.setCoords("MultiplierDot", 30, 28);
    for (var i = 1; i < 11; i++) {
        ggbApplet.setCoords("MasterHundred" + i, 10.5, 4);
        ggbApplet.setCoords("MasterTen" + i, 21.5, 4);
        ggbApplet.setCoords("MasterOne" + i, 32.5, 4);
        ggbApplet.setVisible("MasterHundred" + i, true);
        ggbApplet.setVisible("MasterTen" + i, true);
        ggbApplet.setVisible("MasterOne" + i, true);
        ggbApplet.setCoords("BundlePoint" + i, 0, 0);
    }
    //hides the bundle button
    ggbApplet.setVisible("bundleButton", false);
    //sets number of bundled points back to zero
    bundNum = 0;
    labelHuns = ggbApplet.getValue("hunsCount");
    labelTens = ggbApplet.getValue("tensCount");
    labelOnes = ggbApplet.getValue("onesCount");
    //clears out lists
    starterTensList = [];
    starterOnesList = [];
    tensList = [];
    onesList = [];
    //delete all points that aren't important
    var pointNames = [];
    pointNames = ggbApplet.getAllObjectNames("point");
    console.log(pointNames);
    lengthPointNames = pointNames.length;
    for (var i = 0; i < lengthPointNames; i++) {
        if (!pointNames[i].includes("ig") && !pointNames[i].includes("Master") && !pointNames[i].includes("BundlePoint") && !pointNames[i].includes("Dot") && !pointNames[i].includes("Starter") && !pointNames[i].includes("Vac")) {
            ggbApplet.deleteObject(pointNames[i]);
        }
    }
}
