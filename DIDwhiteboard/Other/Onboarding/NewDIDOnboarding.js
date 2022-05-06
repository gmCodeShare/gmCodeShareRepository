const { buttonGroup1, ggb1, text1 } = components;

//global variables
let numberSubmits = 0;
let onesList = [];
let xStartOne = 0;
let yStartOne = 0;

//when slide loads for the first time only
slide.on("firstload", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

//button creates points in PVC
buttonGroup1.on("click:1", () => {
	//disables reset button
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	numberSubmits++;
	ggb1.instance.setValue("timesSubmitted", numberSubmits);
	//creates ones points, sets coords, changes color, adds to array
	ggbApplet.evalCommand("UO" + numberSubmits + "=PointIn(box)");
	ggbApplet.setCoords("UO" + numberSubmits,xStartOne + (numberSubmits % 5),yStartOne - Math.floor(numberSubmits / 5));
	ggbApplet.setColor("UO" + numberSubmits, 0, 100, 0);
	onesList.push("UO" + numberSubmits);
	//creates ones points, sets coords, changes color, adds to array
	ggbApplet.evalCommand("UT" + numberSubmits + "=PointIn(box)");
	ggbApplet.setCoords("UT" + numberSubmits,xStartOne + (numberSubmits % 5),yStartOne - Math.floor(numberSubmits / 5));
	ggbApplet.setColor("UT" + numberSubmits, 0, 100, 0);
	onesList.push("UT" + numberSubmits);
	//if student clicks button 20 times, button disables
	if (numberSubmits == 20) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	}
});

//reset button
buttonGroup1.on("click:2", () => {
	//disables Add Point button and enables reset button
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	let pointList = ggb1.instance.getAllObjectNames("point");
	pointList.forEach((element) => {
		if (element.includes("UO")) {
			ggb1.instance.deleteObject(element);
		}
	});
	onesList = [];
	numberSubmits = 0;
});