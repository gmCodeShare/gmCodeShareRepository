const { ggb1, input1, select1, buttonGroup1 } = components;

//array of all points created on the fly
let allPoints = [];
let clickCount = 0;

buttonGroup1.updateData({ visible: false });

//makes points if select option has changed
select1.on("change", () => {
	reset();
	if (input1.data.text != "") {
		popul8();
		buttonGroup1.updateData({ visible: true });
	}
});

//make points on first button click
buttonGroup1.on("click:1", () => {
	//popul8();
});

//multiply points by 10 on second button click until points are in millions region
buttonGroup1.on("click:1", () => {
	clickCount++;
	moveIt();
});

//reset the applet on third button click
buttonGroup1.on("click:2", () => {
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	input1.updateData({ text: "" });
	select1.unselectAll();
	reset();
	clickCount = 0;
});

autorun(() => {
	let checkPoint = ggb1.innerData["MovingPoint0"];
	console.log(checkPoint);
	if (checkPoint != undefined && checkPoint[0] <= -33) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	} else {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}
	if (input1.data.text != input1.data.last) {
		reset();
		popul8();
		buttonGroup1.updateData({ visible: true });
		input1.updateData({ last: input1.data.text });
	}
});

//select helper function to test select conditions
function selectedLabels(selectComponent) {
	let selected = [...selectComponent.data.selected];
	let labels = selected.map(
		(index) => selectComponent.data.options[parseInt(index)].label
	);
	let options = [...selectComponent.data.options];
	let optionLabels = options.map((element) => element.label);
	return optionLabels.filter((value) => labels.includes(value));
}

//creates
function popul8() {
	let baseNum = input1.data.text;
	let startPoint = "";
	let chosenUnit = selectedLabels(select1);
	console.log(chosenUnit[0]);
	switch (chosenUnit[0]) {
		case "ones":
			startPoint = "Ig7";
			break;
		case "tens":
			startPoint = "Ig6";
			break;
		case "hundreds":
			startPoint = "Ig5";
			break;
		case "thousands":
			startPoint = "Ig25";
			break;
		case "ten thousands":
			startPoint = "Ig26";
			break;
		case "hundred thousands":
			startPoint = "Ig27";
			break;
	}
	if (startPoint != "") {
		for (let i = 0; i < baseNum; i++) {
			ggb1.instance.evalCommand(
				"Point" +
					i +
					"=CopyFreeObject(" +
					startPoint +
					"+(" +
					(i % 5) +
					"," +
					-Math.floor(i / 5) +
					"))"
			);
			allPoints.push("Point" + i);
			ggb1.instance.setFixed("Point" + i, true, false);
		}
	}
}

function moveIt() {
	ggb1.instance.setValue("speed", 10);
	for (let i = 0, L = allPoints.length; i < L; i++) {
		ggb1.instance.setVisible(allPoints[i], false);
		ggb1.instance.evalCommand(
			"MovingPoint" +
				i +
				"=Translate(" +
				allPoints[i] +
				",time*(-sectionWidth,-2)+time2*(-sectionWidth,-2)+time3*(-sectionWidth,-2)+time4*(-sectionWidth,-2)+time5*(-sectionWidth,-2)+time6*(-sectionWidth,-2))"
		);
	}
	ggb1.instance.evalCommand(
		"FirstVector=Vector(MovingPoint0-time*(-sectionWidth,-2)+(5,0),MovingPoint0+(5,0))"
	);
	ggb1.instance.evalCommand(
		"SecondVector=Vector(MovingPoint0-1*(-sectionWidth,-2)-time2*(-sectionWidth,-2)+(5,0),MovingPoint0-1*(-sectionWidth,-2)+(5,0))"
	);
	ggb1.instance.evalCommand(
		"ThirdVector=Vector(MovingPoint0-2*(-sectionWidth,-2)-time3*(-sectionWidth,-2)+(5,0),MovingPoint0-2*(-sectionWidth,-2)+(5,0))"
	);
	ggb1.instance.evalCommand(
		"FourthVector=Vector(MovingPoint0-3*(-sectionWidth,-2)-time4*(-sectionWidth,-2)+(5,0),MovingPoint0-3*(-sectionWidth,-2)+(5,0))"
	);
	ggb1.instance.evalCommand(
		"FifthVector=Vector(MovingPoint0-4*(-sectionWidth,-2)-time5*(-sectionWidth,-2)+(5,0),MovingPoint0-4*(-sectionWidth,-2)+(5,0))"
	);
	ggb1.instance.evalCommand(
		"SixthVector=Vector(MovingPoint0-5*(-sectionWidth,-2)-time6*(-sectionWidth,-2)+(5,0),MovingPoint0-5*(-sectionWidth,-2)+(5,0))"
	);
	ggb1.instance.setFixed("FirstVector", true, false);
	ggb1.instance.setFixed("SecondVector", true, false);
	ggb1.instance.setFixed("ThirdVector", true, false);
	ggb1.instance.setFixed("FourthVector", true, false);
	ggb1.instance.setFixed("FifthVector", true, false);
	ggb1.instance.setFixed("SixthVector", true, false);
	ggb1.instance.setVisible("FirstVector", false);
	ggb1.instance.setVisible("SecondVector", false);
	ggb1.instance.setVisible("ThirdVector", false);
	ggb1.instance.setVisible("FourthVector", false);
	ggb1.instance.setVisible("FifthVector", false);
	ggb1.instance.setVisible("SixthVector", false);
	if (clickCount >= 1) {
		ggb1.instance.setVisible("FirstVector", true);
	}
	if (clickCount >= 2) {
		ggb1.instance.setVisible("SecondVector", true);
	}
	if (clickCount >= 3) {
		ggb1.instance.setVisible("ThirdVector", true);
	}
	if (clickCount >= 4) {
		ggb1.instance.setVisible("FourthVector", true);
	}
	if (clickCount >= 5) {
		ggb1.instance.setVisible("FifthVector", true);
	}
	if (clickCount >= 6) {
		ggb1.instance.setVisible("SixthVector", true);
	}

	if (ggb1.instance.getValue("time5") == 1) {
		ggb1.instance.setAnimating("time6", true);
	}
	if (ggb1.instance.getValue("time4") == 1) {
		ggb1.instance.setAnimating("time5", true);
	}
	if (ggb1.instance.getValue("time3") == 1) {
		ggb1.instance.setAnimating("time4", true);
	}
	if (ggb1.instance.getValue("time2") == 1) {
		ggb1.instance.setAnimating("time3", true);
	}
	if (ggb1.instance.getValue("time") == 1) {
		ggb1.instance.setAnimating("time2", true);
	}
	if (ggb1.instance.getValue("time") == 0) {
		ggb1.instance.setAnimating("time", true);
	}
	ggb1.instance.startAnimation();
}

function reset() {
	clickCount = 0;
	buttonGroup1.updateData({ visible: false });
	ggb1.instance.setValue("time", 0);
	ggb1.instance.setValue("time2", 0);
	ggb1.instance.setValue("time3", 0);
	ggb1.instance.setValue("time4", 0);
	ggb1.instance.setValue("time5", 0);
	ggb1.instance.setValue("time6", 0);
	for (let i = 0, L = allPoints.length; i < L; i++) {
		ggb1.instance.deleteObject("MovingPoint" + i);
		if (!allPoints[i].includes("Ig")) {
			ggb1.instance.deleteObject(allPoints[i]);
		}
	}
	allPoints = [];
}
function boundIt(inputComp, min, max) {
	const result = utils.math.evaluateLatex(inputComp.data.text);
	if (result.error) {
		inputComp.updateData({ text: "0" }); // what should the text do/say if students input "cabbage"?
		return 0; // whatever you go with here, make sure it's inside of your min and max!
	} else if (result.value < min) {
		inputComp.updateData({ text: `${min}` });
		return min;
	} else if (result.value > max) {
		inputComp.updateData({ text: `${max}` });
		return max;
	}
	// you can add things like floor or toFixed to validate only integers, or something similar
	//let flooredNum = Math.floor(result.value);
	//inputComp.updateData({ text: `${flooredNum}` });
	//return flooredNum;
	return result.value;
}

boundIt(input1, 0, 100);
