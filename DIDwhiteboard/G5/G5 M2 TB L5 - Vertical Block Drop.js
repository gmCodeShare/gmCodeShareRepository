const { ggb1, buttonGroup1 } = components;

buttonGroup1.on("click:1", () => {
	reset();
});

ggb1.instance.registerClientListener(springBack);

ggb1.instance.setAnimating("time", true);
ggb1.instance.startAnimation();

function springBack(grabbed) {
	if (grabbed.type == "dragEnd" && grabbed.target == "Handle") {
		if (ggb1.instance.getXcoord("Handle") == -1) {
			ggb1.instance.stopAnimation();
			ggb1.instance.setAnimating("time", false);
			ggb1.instance.setVisible("I", false);
			ggb1.instance.setVisible("H", false);
			ggb1.instance.setVisible("E", false);
			ggb1.instance.setVisible("G", false);
			ggb1.instance.setVisible("EHalo", false);
			ggb1.instance.setVisible("GHalo", false);
			ggb1.instance.setVisible("IHalo", false);
			ggb1.instance.setVisible("HHalo", false);
			ggb1.instance.setCoords("Handle", -4.75, -2.5);
			ggb1.instance.setValue(
				"HandlePull",
				ggb1.instance.getValue("HandlePull") + 1
			);
			if (ggb1.instance.getValue("NumberOfBlocksTop") == 1) {
				ggb1.instance.setFixed("Handle", true, false);
				ggb1.instance.setVisible("HandleHalo", false);
				ggb1.instance.setColor("Handle", 192, 192, 192);
			}
			ggb1.instance.setCoords(
				"E",
				ggb1.instance.getXcoord("PointBelow"),
				ggb1.instance.getYcoord("PointBelow")
			);
		}
	}
}

function reset() {
	ggb1.instance.setValue("time", 0);
	ggb1.instance.setVisible("I", true);
	ggb1.instance.setVisible("H", true);
	ggb1.instance.setVisible("E", true);
	ggb1.instance.setVisible("G", true);
	ggb1.instance.setVisible("EHalo", true);
	ggb1.instance.setVisible("GHalo", true);
	ggb1.instance.setVisible("IHalo", true);
	ggb1.instance.setVisible("HHalo", true);
	ggb1.instance.setCoords("Handle", -4.75, -2.5);
	ggb1.instance.setValue("HandlePull", 0);
	ggb1.instance.setFixed("Handle", false, true);
	ggb1.instance.setVisible("HandleHalo", true);
	ggb1.instance.setColor("Handle", 237, 178, 32);
}
