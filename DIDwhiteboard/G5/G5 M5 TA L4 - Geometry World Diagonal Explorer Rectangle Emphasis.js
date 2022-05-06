const { ggb1, buttonGroup1, buttonGroup2 } = components;

//set explorer type here
ggb1.instance.setValue("DiagonalBool", true);

//disable all buttons except Animate
buttonGroup2.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);

autorun(() => {
	//monitor shape booleans
	let isRect = ggb1.innerData[`IsRect`];
	let RectLock = ggb1.innerData[`RectLock`];

	//set button states based on booleans
	if (isRect && !RectLock) {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}

	if (!isRect || RectLock) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	}
});

//lock into trapezoid state
buttonGroup1.on("click:1", () => {
	ggb1.instance.setCoords(
		"RectTopLeft",
		ggb1.instance.getXcoord("D"),
		ggb1.instance.getYcoord("D")
	);
	ggb1.instance.setCoords(
		"RectBottomRight",
		ggb1.instance.getXcoord("A"),
		ggb1.instance.getYcoord("A")
	);
	ggb1.instance.setValue("RectLock", true);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});
//unlock points
buttonGroup1.on("click:2", () => {
	ggb1.instance.setCoords(
		"D",
		ggb1.instance.getXcoord("RectTopLeft"),
		ggb1.instance.getYcoord("RectTopLeft")
	);
	ggb1.instance.setCoords(
		"A",
		ggb1.instance.getXcoord("RectBottomRight"),
		ggb1.instance.getYcoord("RectBottomRight")
	);
	ggb1.instance.setCoords(
		"B",
		ggb1.instance.getXcoord("RectTopRight"),
		ggb1.instance.getYcoord("RectTopRight")
	);
	ggb1.instance.setValue("RectLock", false);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

//animates sides/diagonals/angles to the left
buttonGroup2.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(Animate)");
	buttonGroup2.updateSingleButton({ disabled: true }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
});
//animates sides/diagonals/angles back to quad
buttonGroup2.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(FlyBack)");
	buttonGroup2.updateSingleButton({ disabled: true }, 2);
	buttonGroup2.updateSingleButton({ disabled: false }, 1);
});
