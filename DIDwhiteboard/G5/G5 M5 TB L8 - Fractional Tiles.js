const { ggb1, buttonGroup1, ggb2 } = components;

ggb1.instance.registerClientListener(spawn);
ggb1.instance.registerObjectUpdateListener("Denom", makeDragger);
ggb1.instance.registerObjectUpdateListener("D", reset);

var click = 0;

ggb1.instance.setFixed("q1", true, false);

buttonGroup1.on("click:1", () => {
	ggb1.instance.setVisible("l3", true);
	hideAndTile();
});

buttonGroup1.on("click:2", () => {
	reset();
});

ggb2.instance.registerObjectUpdateListener("Denom", moveSlider);
function moveSlider() {
	let denominator = ggb2.instance.getValue("Denom");
	ggb1.instance.setValue("Denom", denominator);
}

autorun(() => {
	let dragPoint = ggb1.innerData["Dragger1"];

	if (
		ggb1.instance.getXcoord("Dragger1") ==
			ggb1.instance.getXcoord("UnitSquareStarter") -
				ggb1.instance.getValue("10/Denom") &&
		ggb1.instance.getYcoord("Dragger1") ==
			ggb1.instance.getYcoord("UnitSquareStarter")
	) {
		ggb1.instance.setVisible("q2", false);
	} else {
		ggb1.instance.setVisible("q2", true);
	}
});

function hideAndTile() {
	ggb1.instance.setValue("time", 0);
	console.log(ggb1.instance.getValue("time"));
	console.log(ggb1.instance.getValue("Length(l3)"));
	if (ggb1.instance.getValue("Length(l3)") > 100) {
		ggb1.instance.setValue(
			"time",
			ggb1.instance.getValue("Height*Width*Denom + 2")
		);
	}
	ggb1.instance.setValue(
		"speed",
		Math.min(0.1 + ggb1.instance.getValue("Length(l3)") / 100, 0.25)
	);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	var draggedBlocks = ggb1.instance.getAllObjectNames("quadrilateral");
	for (var i = 0; i < draggedBlocks.length; i++) {
		if (draggedBlocks[i].includes("dragged")) {
			ggb1.instance.deleteObject(draggedBlocks[i]);
		}
	}
	console.log(ggb1.instance.getValue("time"));
}

function makeDragger() {
	for (var i = 0; i <= click; i++) {
		ggb1.instance.deleteObject("dragged" + i);
	}
	ggb1.instance.setCoords(
		"Dragger1",
		ggb1.instance.getXcoord("UnitSquareStarter") -
			ggb1.instance.getValue("10/Denom"),
		ggb1.instance.getYcoord("UnitSquareStarter")
	);
	ggb1.instance.setCoords(
		"Dragger2",
		ggb1.instance.getXcoord("UnitSquareStarter"),
		ggb1.instance.getYcoord("UnitSquareStarter")
	);
	ggb1.instance.setCoords(
		"Dragger3",
		ggb1.instance.getXcoord("UnitSquareStarter"),
		ggb1.instance.getYcoord("UnitSquareStarter") +
			ggb1.instance.getValue("10/Denom")
	);
	ggb1.instance.setCoords(
		"Dragger4",
		ggb1.instance.getXcoord("UnitSquareStarter") -
			ggb1.instance.getValue("10/Denom"),
		ggb1.instance.getYcoord("UnitSquareStarter") +
			ggb1.instance.getValue("10/Denom")
	);
}

function spawn(grabbed) {
	if (grabbed.type == "dragEnd") {
		if (grabbed.target == "dragger") {
			ggb1.instance.setVisible("l3", false);
			click++;
			ggb1.instance.setCoords(
				"Dragger1",
				ggb1.instance.getXcoord("ClosestPoint"),
				ggb1.instance.getYcoord("ClosestPoint")
			);
			ggb1.instance.setCoords(
				"Dragger2",
				ggb1.instance.getXcoord("ClosestPoint") +
					ggb1.instance.getValue("10/Denom"),
				ggb1.instance.getYcoord("ClosestPoint")
			);
			ggb1.instance.setCoords(
				"Dragger3",
				ggb1.instance.getXcoord("ClosestPoint") +
					ggb1.instance.getValue("10/Denom"),
				ggb1.instance.getYcoord("ClosestPoint") +
					ggb1.instance.getValue("10/Denom")
			);
			ggb1.instance.setCoords(
				"Dragger4",
				ggb1.instance.getXcoord("ClosestPoint"),
				ggb1.instance.getYcoord("ClosestPoint") +
					ggb1.instance.getValue("10/Denom")
			);

			ggb1.instance.evalCommand(
				"dragged" +
					click +
					"=Polygon((" +
					ggb1.instance.getXcoord("Dragger1") +
					"," +
					ggb1.instance.getYcoord("Dragger1") +
					"),(" +
					ggb1.instance.getXcoord("Dragger2") +
					"," +
					ggb1.instance.getYcoord("Dragger2") +
					"),(" +
					ggb1.instance.getXcoord("Dragger3") +
					"," +
					ggb1.instance.getYcoord("Dragger3") +
					"),(" +
					ggb1.instance.getXcoord("Dragger4") +
					"," +
					ggb1.instance.getYcoord("Dragger4") +
					"))"
			);
			ggb1.instance.setColor("dragged" + click, 0, 127, 175);
			ggb1.instance.setFixed("dragged" + click, true, false);
			ggb1.instance.setCoords(
				"Dragger1",
				ggb1.instance.getXcoord("UnitSquareStarter") -
					ggb1.instance.getValue("10/Denom"),
				ggb1.instance.getYcoord("UnitSquareStarter")
			);
			ggb1.instance.setCoords(
				"Dragger2",
				ggb1.instance.getXcoord("UnitSquareStarter"),
				ggb1.instance.getYcoord("UnitSquareStarter")
			);
			ggb1.instance.setCoords(
				"Dragger3",
				ggb1.instance.getXcoord("UnitSquareStarter"),
				ggb1.instance.getYcoord("UnitSquareStarter") +
					ggb1.instance.getValue("10/Denom")
			);
			ggb1.instance.setCoords(
				"Dragger4",
				ggb1.instance.getXcoord("UnitSquareStarter") -
					ggb1.instance.getValue("10/Denom"),
				ggb1.instance.getYcoord("UnitSquareStarter") +
					ggb1.instance.getValue("10/Denom")
			);
		}
	}
}

function reset() {
	ggb1.instance.stopAnimation();
	ggb1.instance.setValue("time", 0);
	var draggedBlocks = ggb1.instance.getAllObjectNames("quadrilateral");
	for (var i = 0; i < draggedBlocks.length; i++) {
		if (draggedBlocks[i].includes("dragged")) {
			ggb1.instance.deleteObject(draggedBlocks[i]);
		}
	}
}
