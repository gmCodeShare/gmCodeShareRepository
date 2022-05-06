const { ggb1, text1 } = components;
ggb1.instance.registerClientListener(tilt);

function tilt(a) {
	if (a.type == "dragEnd") {
		ggb1.instance.setVisible("text1", false);
		if (
			ggb1.instance.getValue("Distance(M, C)") >= 1 &&
			ggb1.instance.getValue("Distance(K, C)") >= 1
		) {
			ggb1.instance.setCoords("S", 1, -2);
			ggb1.instance.setValue("hangRight", false);
			ggb1.instance.setValue("hangLeft", false);
		}
		if (ggb1.instance.getValue("Distance(M, C)") < 1) {
			ggb1.instance.setCoords("J_2", 8, -5);
			ggb1.instance.setCoords("S_2", 10, -5);
			ggb1.instance.setCoords("S", 1, -1);
			ggb1.instance.setValue("hangRight", true);
			ggb1.instance.setValue("hangLeft", false);
		}
		if (ggb1.instance.getValue("Distance(K, C)") < 1) {
			ggb1.instance.setCoords("N", 8, -3);
			ggb1.instance.setCoords("O", 10, -3);
			ggb1.instance.setCoords("S", 1, -3);
			ggb1.instance.setValue("hangRight", false);
			ggb1.instance.setValue("hangLeft", true);
		}
		ggb1.instance.setValue("time", 0);
	}
}
