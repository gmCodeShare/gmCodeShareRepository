const { ggb1, buttonGroup1 } = components;

//measure button
buttonGroup1.on("click:1", () => {
	measure();
});

//pause/play button
buttonGroup1.on("click:2", () => {
	stop();
	flip++;
	if (flip % 2 == 0) {
		buttonGroup1.updateSingleButton({ text: "Pause" }, 2);
	} else {
		buttonGroup1.updateSingleButton({ text: "Play" }, 2);
	}
});

//reset button
buttonGroup1.on("click:3", () => {
	reset();
});

ggb1.instance.registerObjectUpdateListener("time", bounce);
ggb1.instance.registerObjectUpdateListener("shift", shift);

//NOTE: MOVING POINT A MOVES ALL INPUT BOXES, BUTTONS, AND LEGENDS
//global variable, gives the row of the first polygon cell in spreadsheet
var next = 2;
var rulers = ggb1.instance.getValue("rulers");
var blocks = ggb1.instance.getValue("blocks");
var timeMax = ggb1.instance.getValue("timeMax");
let flip = 0;

//sets the number of bounces for the squares
function count() {
	rulers = ggb1.instance.getValue("rulers");
	blocks = ggb1.instance.getValue("blocks");
	ggb1.instance.setValue("timeMax", blocks);
}

//starts time counter which moves squares
function measure() {
	count();
	reset();
	ggb1.instance.setAnimating("shift", true);
	ggb1.instance.startAnimation("shift");
}

function shift() {
	if (ggb1.instance.getValue("shift") == 0) {
		ggb1.instance.stopAnimation("shift");
		ggb1.instance.setAnimating("time", true);
		ggb1.instance.startAnimation("time");
	}
}

//sets squares visible as original square bounces through
function bounce() {
	//sets end of time slider
	timeMax = blocks - 1;
	//sets blocks visible as the master block bounces
	ggb1.instance.setVisible("quadP", true);
	if (next % 10 == 2 && next <= 51) {
		ggb1.instance.setVisible("M" + Math.ceil((next + 10) / 10), true);
		for (
			var i = 2 + 10 * Math.floor(next / 10);
			i < 12 + 10 * Math.floor(next / 10);
			i++
		) {
			ggb1.instance.setVisible("L" + i, true);
		}
	}
	if (next % 10 == 2 && next > 51) {
		ggb1.instance.setVisible("M" + Math.ceil((next + 10) / 10), true);
		for (
			var i = 3 + 10 * Math.floor(next / 10);
			i < 13 + 10 * Math.floor(next / 10);
			i++
		) {
			ggb1.instance.setVisible("L" + i, true);
		}
	}
	if (ggb1.instance.getValue("IsInRegion(StartPtP,C" + next + ")")) {
		ggb1.instance.setVisible("C" + next, true); //polygon
		ggb1.instance.setVisible("D" + next, true); //seg
		ggb1.instance.setVisible("E" + next, true); //seg
		ggb1.instance.setVisible("F" + next, true); //seg
		ggb1.instance.setVisible("G" + next, true); //seg
		if (next > 103) {
			next = 2;
		} else {
			next++;
		}
	}
	if (ggb1.instance.getValue("time") == 100) {
		ggb1.instance.setVisible("quadP", false);
		ggb1.instance.stopAnimation("time");
		ggb1.instance.setAnimating("shiftBack", true);
		ggb1.instance.startAnimation("shiftBack");
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

//stops animation and resets everything to square one
function reset() {
	//stops and resets time and shift
	ggb1.instance.stopAnimation("time");
	ggb1.instance.setValue("time", 0);
	ggb1.instance.setValue("shift", 50);
	ggb1.instance.setValue("shiftBack", 0);
	//sets bouncing block back to beginning
	next = 2;
	//sets all blocks invisible
	for (var i = 2; i < 105; i++) {
		ggb1.instance.setVisible("C" + i, false);
		ggb1.instance.setVisible("D" + i, false);
		ggb1.instance.setVisible("E" + i, false);
		ggb1.instance.setVisible("F" + i, false);
		ggb1.instance.setVisible("G" + i, false);
		ggb1.instance.setVisible("L" + i, false);
		ggb1.instance.setVisible("M" + i, false);
		ggb1.instance.setVisible("quadP", false);
	}
}
