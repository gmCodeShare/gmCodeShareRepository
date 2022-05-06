const { ggb4, text4 } = components;

function halo(point) {
	var haloSize = 10;
	var HexyColor = '"' + ggb4.instance.getColor(point) + '"';
	ggb4.instance.setPointStyle(point, 10);
	ggb4.instance.evalCommand(
		point +
			"Halo:(x - x(" +
			point +
			"))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" +
			point +
			"))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" +
			haloSize +
			"^2"
	);
	ggb4.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
	ggb4.instance.setFilling(point + "Halo", 0.25);
	ggb4.instance.setLineThickness(point + "Halo", 0);
	ggb4.instance.setFixed(point + "Halo", false, false);
}
halo("J_4");
halo("K_4");
halo("L_4");
halo("M_4");
