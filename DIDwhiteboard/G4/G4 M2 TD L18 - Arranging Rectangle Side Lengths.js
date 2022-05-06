const { ggb1, fib1, buttonGroup1 } = components;
ggb1.instance.evalCommand("CenterView((8.5,8.5))");
function boundIt(inputComp, position, min, max) {
	const result = utils.math.evaluateLatex(inputComp.getInput(position).text);
	if (result.error) {
		inputComp.updateInput(position, { text: "0" }); // what should the text do/say if students input "cabbage"?
		return 0; // whatever you go with here, make sure it's inside of your min and max!
	} else if (result.value < min) {
		inputComp.updateInput(position, { text: `${min}` });
		return min;
	} else if (result.value > max) {
		inputComp.updateInput(position, { text: `${max}` });
		return max;
	}
	// you can add things like floor or toFixed to validate only integers, or something similar
	//let flooredNum = Math.floor(result.value);
	//inputComp.updateData({ text: `${flooredNum}` });
	//return flooredNum;
	return result.value;
}

ggb1.instance.registerObjectUpdateListener("time", playable);
fib1.updateInput(0, { text: "7", type: "math" });
fib1.updateInput(1, { text: "7", type: "math" });
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 3);

buttonGroup1.on("click:1", () => {
	createSides();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
buttonGroup1.on("click:2", () => {
	moveSides();
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
buttonGroup1.on("click:3", () => {
	reset();
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

fib1.on("change", ({ values }) => {
	reset();
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	boundIt(fib1, 0, 0, 15);
	boundIt(fib1, 1, 0, 15);
	ggb1.instance.setValue("length", values[0].text);
	ggb1.instance.setValue("width", values[1].text);
});

function createSides() {
	ggb1.instance.setValue("Step1Visible", true);
	ggb1.instance.setCoords(
		"MoveLeft",
		ggb1.instance.getXcoord("PointBL"),
		ggb1.instance.getYcoord("PointBL")
	);
	ggb1.instance.setCoords(
		"MoveTop",
		ggb1.instance.getXcoord("PointTL"),
		ggb1.instance.getYcoord("PointTL")
	);
	ggb1.instance.setCoords(
		"MoveBottom",
		ggb1.instance.getXcoord("PointBR"),
		ggb1.instance.getYcoord("PointBR")
	);
	ggb1.instance.setCoords(
		"MoveRight",
		ggb1.instance.getXcoord("PointTR"),
		ggb1.instance.getYcoord("PointTR")
	);
	ggb1.instance.setCoords(
		"RotateLeft",
		ggb1.instance.getXcoord("PointTL"),
		ggb1.instance.getYcoord("PointTL")
	);
	ggb1.instance.setCoords(
		"RotateTop",
		ggb1.instance.getXcoord("PointTR"),
		ggb1.instance.getYcoord("PointTR")
	);
	ggb1.instance.setCoords(
		"RotateBottom",
		ggb1.instance.getXcoord("PointBL"),
		ggb1.instance.getYcoord("PointBL")
	);
	ggb1.instance.setCoords(
		"RotateRight",
		ggb1.instance.getXcoord("PointBR"),
		ggb1.instance.getYcoord("PointBR")
	);
}

function moveSides() {
	ggb1.instance.setValue("Step1Visible", true);
	ggb1.instance.setValue("Step1Visible", false);
	ggb1.instance.setValue("Step2Visible", true);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
}

function playable() {
	ggb1.instance.setCoords(
		"MoveLeft3",
		ggb1.instance.getXcoord("PointBL") - 2,
		ggb1.instance.getYcoord("PointBL")
	);
	ggb1.instance.setCoords(
		"MoveTop3",
		ggb1.instance.getXcoord("PointTL"),
		ggb1.instance.getYcoord("PointTL") + 2
	);
	ggb1.instance.setCoords(
		"MoveBottom3",
		ggb1.instance.getXcoord("PointBR"),
		ggb1.instance.getYcoord("PointBR") - 2
	);
	ggb1.instance.setCoords(
		"MoveRight3",
		ggb1.instance.getXcoord("PointTR") + 2,
		ggb1.instance.getYcoord("PointTR")
	);
	ggb1.instance.setCoords(
		"RotateLeft3",
		ggb1.instance.getXcoord("PointTL") - 2,
		ggb1.instance.getYcoord("PointTL")
	);
	ggb1.instance.setCoords(
		"RotateTop3",
		ggb1.instance.getXcoord("PointTR"),
		ggb1.instance.getYcoord("PointTR") + 2
	);
	ggb1.instance.setCoords(
		"RotateBottom3",
		ggb1.instance.getXcoord("PointBL"),
		ggb1.instance.getYcoord("PointBL") - 2
	);
	ggb1.instance.setCoords(
		"RotateRight3",
		ggb1.instance.getXcoord("PointBR") + 2,
		ggb1.instance.getYcoord("PointBR")
	);
	if (ggb1.instance.getValue("time") == 1) {
		ggb1.instance.setValue("Step2Visible", false);
		ggb1.instance.setValue("Step3Visible", true);
	}
}

function reset() {
	ggb1.instance.setValue("Step1Visible", false);
	ggb1.instance.setValue("Step2Visible", false);
	ggb1.instance.setValue("Step3Visible", false);
	ggb1.instance.setValue("time", 0);
}

function halo(point) {
	var haloSize = 10;
	var HexyColor = '"' + ggb1.instance.getColor(point) + '"';
	ggb1.instance.setPointStyle(point, 10);
	ggb1.instance.evalCommand(
		point +
			"Halo:(x - x(" +
			point +
			"))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" +
			point +
			"))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" +
			haloSize +
			"^2"
	);
	ggb1.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
	ggb1.instance.setFilling(point + "Halo", 0.25);
	ggb1.instance.setLineThickness(point + "Halo", 0);
	ggb1.instance.setFixed(point + "Halo", false, false);
}

halo("MoveBottom");
halo("MoveBottom2");
halo("MoveBottom3");
halo("MoveLeft");
halo("MoveLeft2");
halo("MoveLeft3");
halo("MoveRight");
halo("MoveRight2");
halo("MoveRight3");
halo("MoveTop");
halo("MoveTop2");
halo("MoveTop3");
halo("RotateBottom");
halo("RotateBottom2");
halo("RotateBottom3");
halo("RotateLeft");
halo("RotateLeft2");
halo("RotateLeft3");
halo("RotateRight");
halo("RotateRight2");
halo("RotateRight3");
halo("RotateTop");
halo("RotateTop2");
halo("RotateTop3");

ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveBottomHalo,Step1Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveLeftHalo,Step1Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveRightHalo,Step1Visible)"
);
ggb1.instance.evalCommand("SetConditionToShowObject(MoveTopHalo,Step1Visible)");
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateBottomHalo,Step1Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateLeftHalo,Step1Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateRightHalo,Step1Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateTopHalo,Step1Visible)"
);

ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveBottom2Halo,Step2Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveLeft2Halo, Step2Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveRight2Halo,Step2Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveTop2Halo,Step2Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateBottom2Halo,Step2Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateLeft2Halo,Step2Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateRight2Halo,Step2Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateTop2Halo,Step2Visible)"
);

ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveBottom3Halo,Step3Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveLeft3Halo,Step3Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveRight3Halo,Step3Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(MoveTop3Halo,Step3Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateBottom3Halo,Step3Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateLeft3Halo,Step3Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateRight3Halo,Step3Visible)"
);
ggb1.instance.evalCommand(
	"SetConditionToShowObject(RotateTop3Halo,Step3Visible)"
);
