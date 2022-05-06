const { ggb5, text5 } = components;

function halo(point) {
	var haloSize = 10;
	var HexyColor = '"' + ggb5.instance.getColor(point) + '"';
	ggb5.instance.setPointStyle(point, 10);
	ggb5.instance.evalCommand(
		point +
			"Halo:(x - x(" +
			point +
			"))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" +
			point +
			"))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" +
			haloSize +
			"^2"
	);
	ggb5.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
	ggb5.instance.setFilling(point + "Halo", 0.25);
	ggb5.instance.setLineThickness(point + "Halo", 0);
	ggb5.instance.setFixed(point + "Halo", false, false);
}
halo("T_4");
halo("U_4");
halo("W_4");
halo("B_5");
