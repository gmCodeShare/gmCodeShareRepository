const { ggb1, buttonGroup1, radio1 } = components;

//on screenload
ggb1.instance.setVisible("BowlingBall", true);
buttonGroup1.updateSingleButton({ disabled: true }, 1);
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

halo("M");
ggb1.instance.setVisible("MHalo", false);
for (let i = 1; i < 11;i++){
ggb1.instance.setColor("Pin" + i, 0, 0, 0);
}

//roll the ball
buttonGroup1.on("click:1", () => {
	ggb1.instance.setVisible("M", false);
	ggb1.instance.setVisible("MHalo", false);
	ggb1.instance.evalCommand("RunClickScript(button1)");
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	setTimeout(function () {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}, 6000);
});

//reset
buttonGroup1.on("click:2", () => {
	ggb1.instance.setVisible("BowlingBall", true);
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	radio1.updateData({ selected: "" });
	ggb1.instance.reset();
});

//radio selection
autorun(() => {
	//if roll carefully
	if (radio1.data.selected == "0") {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
		ggb1.instance.setValue("careful", true);
		ggb1.instance.setVisible("MHalo", true);
		ggb1.instance.setCoords(
			"BowlingBall",
			ggb1.instance.getValue("x(N)"),
			ggb1.instance.getValue("y(N)")
		);
	}

	//if roll randomly
	if (radio1.data.selected == "1") {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
		ggb1.instance.setValue("careful", false);
		ggb1.instance.setVisible("MHalo", false);
		ggb1.instance.setCoords(
			"BowlingBall",
			ggb1.instance.getValue("x(N)"),
			ggb1.instance.getValue("y(N)")
		);
	}
});
