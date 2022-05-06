const { ggb1, buttonGroup1, fib1 } = components;

slide.on("firstload", () => {
	//disable reset button
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	ggb1.instance.setAnimating("t1", false);
	ggb1.instance.setAnimating("n", false);
	ggb1.instance.setValue("t1", 0);
	ggb1.instance.setValue("n", 0);
	halo("N");
	halo("A");
});

//sets x pattern
fib1.on("change:0", () => {
	ggb1.instance.setAnimating("t1", false);
	ggb1.instance.setAnimating("n", false);
	ggb1.instance.setValue("t1", 0);
	ggb1.instance.setValue("n", 0);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	ggb1.instance.setValue("a", fib1.getInput("0").text);
});

//sets y pattern
fib1.on("change:1", () => {
	ggb1.instance.setAnimating("t1", false);
	ggb1.instance.setAnimating("n", false);
	ggb1.instance.setValue("t1", 0);
	ggb1.instance.setValue("n", 0);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	ggb1.instance.setValue("b", fib1.getInput("1").text);
});

buttonGroup1.on("click:1", () => {
	ggb1.instance.setValue("n", -1);
	ggb1.instance.setAnimating("n", true);
	ggb1.instance.startAnimation();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on("click:2", () => {
	ggb1.instance.setValue("t1", 0);
	ggb1.instance.setAnimating("t1", true);
	ggb1.instance.startAnimation();
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on("click:3", () => {
	ggb1.instance.setAnimating("t1", false);
	ggb1.instance.setAnimating("n", false);
	ggb1.instance.setValue("t1", 0);
	ggb1.instance.setValue("n", 0);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	fib1.updateInput("0", { text: "0" });
	fib1.updateInput("1", { text: "0" });
	ggb1.instance.setValue("a", fib1.getInput("0").text);
	ggb1.instance.setValue("b", fib1.getInput("1").text);
});

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

autorun(() => {
	if (fib1.getInput("0").text == "" || fib1.getInput("1").text == "") {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	}
});
