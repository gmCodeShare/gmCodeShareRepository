const { ggb1, buttonGroup1 } = components;

//disable all but the start button
slide.on("firstload", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

//adjust speed to accurately count time.  Per my flawed measurement technique, the clock sweeps out 1 minute in 59.51 seconds with this value.
ggb1.instance.setValue("speed", 0.16666667);
//ggb1.instance.setValue("speed",1);

//start clock button
buttonGroup1.on("click:1", () => {
	tick();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

//stop clock button
buttonGroup1.on("click:2", () => {
	stopIt();
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

//reset clock button
buttonGroup1.on("click:3", () => {
	ggb1.instance.unregisterObjectUpdateListener("MinutePoint");
	ggb1.instance.unregisterObjectUpdateListener("SecondPoint");
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	buttonGroup1.updateSingleButton({ disabled: false }, 4);
	stopIt();
	ggb1.instance.stopAnimation();
	ggb1.instance.setCoords(
		"SecondPoint",
		0,
		ggb1.instance.getValue("secondRadius")
	);
	ggb1.instance.setCoords(
		"MinutePoint",
		0,
		ggb1.instance.getValue("minuteRadius")
	);
	ggb1.instance.setCoords(
		"HourPoint",
		0,
		ggb1.instance.getValue("hourRadius")
	);
});

//run for a minute button
buttonGroup1.on("click:4", () => {
	ggb1.instance.setCoords("SecondPoint", 0.01, 0.98);
	tick();
	ggb1.instance.registerObjectUpdateListener("MinutePoint", justOneMinute);
	ggb1.instance.registerObjectUpdateListener("SecondPoint", justOneMinute);
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
	buttonGroup1.updateSingleButton({ disabled: false }, 4);
});

//starts the clock
function tick() {
	ggb1.instance.stopAnimation();
	ggb1.instance.setAnimating("SecondPoint", true);
	//ggb1.instance.setAnimationSpeed("SecondPoint", -1);
	ggb1.instance.setAnimating("MinutePoint", true);
	//ggb1.instance.setAnimationSpeed("MinutePoint", -1 / 60);
	ggb1.instance.setAnimating("HourPoint", true);
	// ggb1.instance.setAnimationSpeed("HourPoint", -1 / 720);
	ggb1.instance.startAnimation();
	ggb1.instance.setVisible("speedUp", true);
	ggb1.instance.setVisible("stopClock", false);
	ggb1.instance.setVisible("startClock", false);
}

//unused function from G3.  You cannot set animation speed in JS with current configuration
function tock() {
	ggb1.instance.stopAnimation();
	ggb1.instance.setAnimating("SecondPoint", true);
	ggb1.instance.setAnimationSpeed("SecondPoint", -15);
	ggb1.instance.setAnimating("MinutePoint", true);
	ggb1.instance.setAnimationSpeed("MinutePoint", -15 / 60);
	ggb1.instance.setAnimating("HourPoint", true);
	ggb1.instance.setAnimationSpeed("HourPoint", -15 / 720);
	ggb1.instance.startAnimation();
	ggb1.instance.setVisible("speedUp", false);
	ggb1.instance.setVisible("stopClock", true);
	ggb1.instance.setVisible("startClock", false);
}

//stops the clock
function stopIt() {
	ggb1.instance.stopAnimation();
	ggb1.instance.setVisible("stopClock", false);
	ggb1.instance.setVisible("startClock", true);
	ggb1.instance.setVisible("speedUp", false);
}

//runs the clock for one minute
function justOneMinute() {
	if (
		Math.round(100 * ggb1.instance.getXcoord("SecondPoint")) / 100 == 0 &&
		Math.round(100 * ggb1.instance.getYcoord("SecondPoint")) / 100 == 0.98
	) {
		stopIt();
		console.log(
			"SecondPoint = (" +
				ggb1.instance.getXcoord("SecondPoint") +
				"," +
				ggb1.instance.getYcoord("SecondPoint") +
				")"
		);
		console.log(
			"MinutePoint = (" +
				ggb1.instance.getXcoord("MinutePoint") +
				"," +
				ggb1.instance.getYcoord("MinutePoint") +
				")"
		);
	}
}
