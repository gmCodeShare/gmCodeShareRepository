const { ggb1, buttonGroup1 } = components;

buttonGroup1.updateSingleButton({ disabled: true }, 4);

function halo(point) {
	var haloSize = 20;
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

halo("W_1");

buttonGroup1.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(newangle)");
	//	buttonGroup1.updateSingleButton({ disabled: true }, 4);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
buttonGroup1.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(flipangle)");
	ggb1.instance.setValue("b", false);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
buttonGroup1.on("click:3", () => {
	//ggb1.instance.setValue("angle", (fib1.getInput(0).text * Math.PI) / 180);
	ggb1.instance.evalCommand("RunClickScript(check)");
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	//buttonGroup1.updateSingleButton({ disabled: false }, 4);
});
/*buttonGroup1.on("click:4", () => {
	ggb1.instance.evalCommand("RunClickScript(tryagain)");
	buttonGroup1.updateSingleButton({ disabled: true }, 4);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});*/

autorun(() => {
	let pointer = ggb1.innerData["W_1"];
	//	buttonGroup1.updateSingleButton({ disabled: true }, 4);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
