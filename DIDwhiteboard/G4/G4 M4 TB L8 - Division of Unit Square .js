const { ggb1, text1 } = components;

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

halo("A");
halo("B");
halo("C");

autorun(() => {
	let denom = Math.round(ggb1.innerData["Denominator"]);
	let num = Math.round(ggb1.innerData["Numerator"]);
	let simpleDenom = Math.round(ggb1.innerData["SimpDenom"]);
	let simpleNum = Math.round(ggb1.innerData["SimpNum"] - 1);
	text1.updateData({
		text: `###### $\\frac{${simpleNum}}{${simpleDenom}}=\\frac{${num}}{${denom}}$ ######`,
	});
});
