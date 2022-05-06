const { ggb3, text3 } = components;

ggb3.instance.registerClientListener(weighOptions);
ggb3.instance.evalCommand("hangHeavy=false");
ggb3.instance.evalCommand("hangLight=false");

function weighOptions(a) {
	if (a.type == "dragEnd") {
		//if heavy ball is close
		if (ggb3.instance.getValue("Distance(B_4, (84, -7))") < 2) {
			ggb3.instance.setCoords("C", 75.75, -6.625);
			ggb3.instance.setCoords("E", 84.25, -6.625);
			ggb3.instance.setCoords("N", 75.95, -8.5);
			ggb3.instance.setCoords("B_4", 84, -8.5);
			ggb3.instance.setValue("hangHeavy", true);
			ggb3.instance.setValue("hangLight", false);
		}
		//if light ball is close
		if (ggb3.instance.getValue("Distance(C_4, (84, -7))") < 2) {
			ggb3.instance.setCoords("C", 75.75, -7);
			ggb3.instance.setCoords("E", 84.25, -6.25);
			ggb3.instance.setCoords("N", 75.95, -9);
			ggb3.instance.setCoords("C_4", 84, -8.25);
			ggb3.instance.setValue("hangHeavy", false);
			ggb3.instance.setValue("hangLight", true);
		}
		//if neither are close
		if (
			ggb3.instance.getValue("Distance(B_4, (84, -7))") >= 2 &&
			ggb3.instance.getValue("Distance(C_4, (84, -7))") >= 2
		) {
			ggb3.instance.setCoords("C", 75.75, -7.25);
			ggb3.instance.setCoords("E", 84.25, -6);
			ggb3.instance.setCoords("N", 75.95, -9.25);
			ggb3.instance.setValue("hangHeavy", false);
			ggb3.instance.setValue("hangLight", false);
		}
	}
}