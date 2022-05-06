const { ggb1, buttonGroup1 } = components;
buttonGroup1.updateSingleButton({ disabled: true }, 2);
//separate button
buttonGroup1.on("click:1", () => {
  ggb1.instance.setValue("speed", 10);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  //ggb1.instance.setColor("DHalo", 0, 0, 0);
  ggb1.instance.setColor("D", 0, 0, 0);
  ggb1.instance.setValue("oneTape", false);
  ggb1.instance.setValue("twoTapes", true);
  //ggb1.instance.evalCommand("SetDecoration(l2, 0)");
  ggb1.instance.evalCommand("ReadText(separateButtonText)");
});
//combine button
buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("speed", -10);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  //ggb1.instance.setColor("DHalo", 0, 127, 175);
  ggb1.instance.setColor("D", 0, 127, 175);
  ggb1.instance.setValue("oneTape", true);
  ggb1.instance.setValue("twoTapes", false);
  //ggb1.instance.evalCommand("SetDecoration(l2, 1)");
  ggb1.instance.evalCommand("ReadText(combineButtonText)");
});

// function halo(point) {
// 	var haloSize = 10;
// 	var HexyColor = '"' + ggb1.instance.getColor(point) + '"';
// 	ggb1.instance.setPointStyle(point, 10);
// 	ggb1.instance.evalCommand(
// 		point +
// 			"Halo:(x - x(" +
// 			point +
// 			"))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" +
// 			point +
// 			"))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" +
// 			haloSize +
// 			"^2"
// 	);
// 	ggb1.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
// 	ggb1.instance.setFilling(point + "Halo", 0.25);
// 	ggb1.instance.setLineThickness(point + "Halo", 0);
// 	ggb1.instance.setFixed(point + "Halo", false, false);
// }
// halo("C");
// halo("D");
