function ggbOnInit() {
    ggb1.instance.registerObjectClickListener("measure", "measure");
    ggb1.instance.registerObjectClickListener("reset", "reset");
    ggb1.instance.registerObjectClickListener("stop", "stop");
    ggb1.instance.registerObjectUpdateListener("time", "bounce");
    ggb1.instance.registerObjectUpdateListener("InputBox2", "count");
    ggb1.instance.registerObjectUpdateListener("InputBox1", "count");
    ggb1.instance.registerObjectClickListener("save", "save");
    ggb1.instance.registerObjectUpdateListener("clickNumber", "buttonClick");
}

//global variable, gives the row of the first polygon cell in spreadsheet
var next = 2;
var StartPt = "";
var rulers = ggb1.instance.getValue("rulers");
var blocks = ggb1.instance.getValue("blocks");
var timeMax = ggb1.instance.getValue("timeMax");
var clickNumber = ggb1.instance.getValue("clickNumber");

function buttonClick() {
    clickNumber = ggb1.instance.getValue("clickNumber");
    if (clickNumber == 1) {
        measure();
    }
    if (clickNumber == 2) {
        stop();
    }
    if (clickNumber == 3) {
        save();
    }
    if (clickNumber == 4) {
        reset();
    }
}

//sets the number of bounces for the squares
function count() {
    rulers = ggb1.instance.getValue("rulers");
    blocks = ggb1.instance.getValue("blocks");
    ggb1.instance.setValue("timeMax", blocks + 10 * rulers - 1);
}

//starts time counter which moves squares
function measure() {
    next = 2;
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation("time");
    //allows bouncing square if there are blocks to display
    if (blocks > 0) {
        switch (rulers) {
            case 0: //if no rulers
                ggb1.instance.setVisible("quadP", true);
                ggb1.instance.setVisible("quadQ", false);
                ggb1.instance.setVisible("quadR", false);
                ggb1.instance.setVisible("quadS", false);
                ggb1.instance.setVisible("quadT", false);
                //tells which bounce function to call
                StartPt = "StartPtP";
                break;
            case 1: //if one ruler
                ggb1.instance.setVisible("quadQ", true);
                ggb1.instance.setVisible("quadP", false);
                ggb1.instance.setVisible("quadR", false);
                ggb1.instance.setVisible("quadS", false);
                ggb1.instance.setVisible("quadT", false);
                //tells which bounce function to call
                StartPt = "StartPtQ";
                //sets spot for blocks to start appearing
                next = 12;
                break;
            case 2: //if two rulers
                ggb1.instance.setVisible("quadR", true);
                ggb1.instance.setVisible("quadP", false);
                ggb1.instance.setVisible("quadQ", false);
                ggb1.instance.setVisible("quadS", false);
                ggb1.instance.setVisible("quadT", false);
                //tells which bounce function to call
                StartPt = "StartPtR";
                //sets spot for blocks to start appearing
                next = 22;
                break;
            case 3: //if three rulers
                ggb1.instance.setVisible("quadS", true);
                ggb1.instance.setVisible("quadP", false);
                ggb1.instance.setVisible("quadQ", false);
                ggb1.instance.setVisible("quadR", false);
                ggb1.instance.setVisible("quadT", false);
                //tells which bounce function to call
                StartPt = "StartPtS";
                //sets spot for blocks to start appearing
                next = 32;
                break;
            case 4: //if four rulers
                ggb1.instance.setVisible("quadT", true);
                ggb1.instance.setVisible("quadP", false);
                ggb1.instance.setVisible("quadQ", false);
                ggb1.instance.setVisible("quadR", false);
                ggb1.instance.setVisible("quadS", false);
                //tells which bounce function to call
                StartPt = "StartPtT";
                //sets spot for blocks to start appearing
                next = 42;
        }
    }
}

//sets squares visible as original square bounces through
function bounce() {
    //sets end of time slider
    timeMax = Math.ceil(blocks + 10 * rulers - 1);
    //sets first ruler visible
    if (rulers > 0 && ggb1.instance.getValue("time") > 0) {
        ggb1.instance.setVisible("C46", true);
        for (var i = 51; i < 60; i++) {
            ggb1.instance.setVisible("C" + i, true);
        }
    }
    //sets second ruler visible
    if (rulers > 1 && ggb1.instance.getValue("time") > 10) {
        ggb1.instance.setVisible("C47", true);
        for (var i = 60; i < 70; i++) {
            ggb1.instance.setVisible("C" + i, true);
        }
    }
    //sets third ruler visible
    if (rulers > 2 && ggb1.instance.getValue("time") > 20) {
        ggb1.instance.setVisible("C48", true);
        for (var i = 70; i < 80; i++) {
            ggb1.instance.setVisible("C" + i, true);
        }
    }
    //sets fourth ruler visible
    if (rulers > 3 && ggb1.instance.getValue("time") > 30) {
        ggb1.instance.setVisible("C49", true);
        for (var i = 80; i < 90; i++) {
            ggb1.instance.setVisible("C" + i, true);
        }
    }
    //sets blocks visible as the master block bounces
    if (ggb1.instance.getValue("IsInRegion(" + StartPt + ",C" + next + ")")) {
        ggb1.instance.setVisible("C" + next, true); //polygon
        ggb1.instance.setVisible("D" + next, true); //seg
        ggb1.instance.setVisible("E" + next, true); //seg
        ggb1.instance.setVisible("F" + next, true); //seg
        ggb1.instance.setVisible("G" + next, true); //seg
        if (next > 45) {
            next = 2;
        } else {
            next++;
        }
    }
    if (ggb1.instance.getValue("time") == ggb1.instance.getValue("timeMax")) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setVisible("quadP", false);
    ggb1.instance.setVisible("quadQ", false);
    ggb1.instance.setVisible("quadR", false);
    ggb1.instance.setVisible("quadS", false);
    ggb1.instance.setVisible("quadT", false);
    }
}

//pauses animation
function stop() {
    if (ggb1.instance.isAnimationRunning()) {
        ggb1.instance.stopAnimation();
    } else {
        ggb1.instance.startAnimation();
    }
}

//saves the last measurement
function save() {
    //sets the time back to -1
    ggb1.instance.setValue("time", -1);
    //sets first ruler visible
    if (rulers > 0) {
        ggb1.instance.setVisible("K46", true);
        for (var i = 51; i < 60; i++) {
            ggb1.instance.setVisible("K" + i, true);
        }
    }
    //sets second ruler visible
    if (rulers > 1) {
        ggb1.instance.setVisible("K47", true);
        for (var i = 60; i < 70; i++) {
            ggb1.instance.setVisible("K" + i, true);
        }
    }
    //sets third ruler visible
    if (rulers > 2) {
        ggb1.instance.setVisible("K48", true);
        for (var i = 70; i < 80; i++) {
            ggb1.instance.setVisible("K" + i, true);
        }
    }
    //sets fourth ruler visible
    if (rulers > 3) {
        ggb1.instance.setVisible("K49", true);
        for (var i = 80; i < 90; i++) {
            ggb1.instance.setVisible("K" + i, true);
        }
    }
    //sets blocks visible all at once
    for (i = 10 * rulers + 2; i < blocks + 10 * rulers + 2; i++) {
        ggb1.instance.setVisible("K" + i, true); //polygon
        ggb1.instance.setVisible("L" + i, true); //seg
        ggb1.instance.setVisible("M" + i, true); //seg
        ggb1.instance.setVisible("N" + i, true); //seg
        ggb1.instance.setVisible("O" + i, true); //seg
    }
    //sets original line invisible
    for (var i = 2; i < 92; i++) {
        ggb1.instance.setVisible("C" + i, false);
        ggb1.instance.setVisible("D" + i, false);
        ggb1.instance.setVisible("E" + i, false);
        ggb1.instance.setVisible("F" + i, false);
        ggb1.instance.setVisible("G" + i, false);
    }
    ggb1.instance.setVisible("quadP", false);
    ggb1.instance.setVisible("quadQ", false);
    ggb1.instance.setVisible("quadR", false);
    ggb1.instance.setVisible("quadS", false);
    ggb1.instance.setVisible("quadT", false);
    ggb1.instance.setVisible("measure", true);
    ggb1.instance.setVisible("reset", false);
}

/*
//determines what buttons to show
function showButtons() {
	//at beginning
	if (
		ggb1.instance.isAnimationRunning("time") == false &&
		ggb1.instance.getValue("time") == -1
	) {
		ggb1.instance.setVisible("reset", false);
		ggb1.instance.setVisible("save", false);
		ggb1.instance.setVisible("stop", false);
		ggb1.instance.setVisible("measure", true);
	}
	//at end
	if (
		ggb1.instance.isAnimationRunning("time") == false &&
		ggb1.instance.getValue("time") > -1
	) {
		ggb1.instance.setVisible("reset", true);
		ggb1.instance.setVisible("save", true);
		ggb1.instance.setVisible("stop", false);
		ggb1.instance.setVisible("measure", false);
	}
	//while bouncing
	if (ggb1.instance.isAnimationRunning("time") == true) {
		ggb1.instance.setVisible("reset", false);
		ggb1.instance.setVisible("save", false);
		ggb1.instance.setVisible("stop", true);
		ggb1.instance.setVisible("measure", false);
	}
}
*/
//stops animation and resets everything to square one

function reset() {
    //stops and resets time
    ggb1.instance.stopAnimation("time");
    ggb1.instance.setValue("time", -1);
    //sets bouncing block back to beginning
    next = 2;
    StartPt = "";
    //sets all blocks invisible
    for (var i = 2; i < 92; i++) {
        ggb1.instance.setVisible("C" + i, false);
        ggb1.instance.setVisible("D" + i, false);
        ggb1.instance.setVisible("E" + i, false);
        ggb1.instance.setVisible("F" + i, false);
        ggb1.instance.setVisible("G" + i, false);
        ggb1.instance.setVisible("I" + i, false);
        ggb1.instance.setVisible("J" + i, false);
        ggb1.instance.setVisible("K" + i, false);
        ggb1.instance.setVisible("L" + i, false);
        ggb1.instance.setVisible("M" + i, false);
        ggb1.instance.setVisible("N" + i, false);
        ggb1.instance.setVisible("O" + i, false);
        ggb1.instance.setVisible("quadP", false);
        ggb1.instance.setVisible("quadQ", false);
        ggb1.instance.setVisible("quadR", false);
        ggb1.instance.setVisible("quadS", false);
        ggb1.instance.setVisible("quadT", false);
    }
}