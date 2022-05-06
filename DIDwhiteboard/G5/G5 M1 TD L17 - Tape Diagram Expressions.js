const { ggb1, buttonGroup1, ggb2 } = components;

ggb1.instance.registerClientListener(spawn);
ggb1.instance.registerObjectUpdateListener("D", reset);
ggb1.instance.registerObjectUpdateListener("C", reset);

var click = 0;
ggb1.instance.setFixed("q3", true, false);

buttonGroup1.on("click:1", () => {
	reset();
});

function spawn(grabbed) {
    if (grabbed.type == "dragEnd") {
        if (grabbed.target == "RedDragged") {
            ggb1.instance.setVisible("q3", false);
			click++;
			/*
            ggb1.instance.setCoords(
                "Dragger1",
                ggb1.instance.getXcoord("A"),
                ggb1.instance.getYcoord("A")
            );
            ggb1.instance.setCoords(
                "Dragger2",
                ggb1.instance.getXcoord("B"),
                ggb1.instance.getYcoord("B")
            );
            ggb1.instance.setCoords(
                "Dragger3",
                ggb1.instance.getXcoord("C"),
                ggb1.instance.getYcoord("C")
            );
            ggb1.instance.setCoords(
                "Dragger4",
                ggb1.instance.getXcoord("D"),
                ggb1.instance.getYcoord("D")
            );
            ggb1.instance.setCoords(
                "Dragger5",
                ggb1.instance.getXcoord("E"),
                ggb1.instance.getYcoord("E")
            );
            ggb1.instance.setCoords(
                "Dragger6",
                ggb1.instance.getXcoord("F"),
                ggb1.instance.getYcoord("F")
            );
            ggb1.instance.setCoords(
                "Dragger7",
                ggb1.instance.getXcoord("G"),
                ggb1.instance.getYcoord("G")
            );
            ggb1.instance.setCoords(
                "Dragger8",
                ggb1.instance.getXcoord("H"),
                ggb1.instance.getYcoord("H")
            );
*/
			ggb1.instance.evalCommand(
				"DraggedRed" +
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
            ggb1.instance.setColor("DraggedRed" + click, 218, 41, 28);
            ggb1.instance.setFilling("DraggedRed" + click, 0.35);
			//ggb1.instance.setFixed("DraggedRed" + click, true, false);
		}
        if (grabbed.target == "BlueDragged") {
            ggb1.instance.setVisible("q3", false);
			click++;
			ggb1.instance.evalCommand(
				"DraggedBlue" +
					click +
					"=Polygon((" +
					ggb1.instance.getXcoord("Dragger5") +
					"," +
					ggb1.instance.getYcoord("Dragger5") +
					"),(" +
					ggb1.instance.getXcoord("Dragger6") +
					"," +
					ggb1.instance.getYcoord("Dragger6") +
					"),(" +
					ggb1.instance.getXcoord("Dragger7") +
					"," +
					ggb1.instance.getYcoord("Dragger7") +
					"),(" +
					ggb1.instance.getXcoord("Dragger8") +
					"," +
					ggb1.instance.getYcoord("Dragger8") +
					"))"
			);
            ggb1.instance.setColor("DraggedBlue" + click, 0, 127, 175);
            ggb1.instance.setFilling("DraggedBlue" + click, 0.35);
			//ggb1.instance.setFixed("DraggedBlue" + click, true, false);
		}
		ggb1.instance.setCoords(
			"Dragger1",
			ggb1.instance.getXcoord("A"),
			ggb1.instance.getYcoord("A")
		);
		ggb1.instance.setCoords(
			"Dragger5",
			ggb1.instance.getXcoord("B"),
			ggb1.instance.getYcoord("B")
		);
		ggb1.instance.setCoords(
			"Dragger2",
			ggb1.instance.getXcoord("C"),
			ggb1.instance.getYcoord("C")
		);
		ggb1.instance.setCoords(
			"Dragger6",
			ggb1.instance.getXcoord("D"),
			ggb1.instance.getYcoord("D")
        );
        ggb1.instance.evalCommand("SelectObjects()");
    }
}

function reset() {
    ggb1.instance.setVisible("q3", true);
	var draggedBlocks = ggb1.instance.getAllObjectNames("quadrilateral");
	for (var i = 0; i < draggedBlocks.length; i++) {
		if (draggedBlocks[i].includes("DraggedRed")||draggedBlocks[i].includes("DraggedBlue")) {
			ggb1.instance.deleteObject(draggedBlocks[i]);
		}
	}
}
function halo(point) {
    var haloSize = 10;
        var HexyColor = "\"" + ggb1.instance.getColor(point) + "\"";
        ggb1.instance.setPointStyle(point, 10);
        ggb1.instance.evalCommand(point + "Halo:(x - x(" + point + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + point + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" + haloSize + "^2");
        ggb1.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
        ggb1.instance.setFilling(point + "Halo", 0.25);
        ggb1.instance.setLineThickness(point + "Halo", 0);
        ggb1.instance.setFixed(point + "Halo", false, false);
}

halo("C");
halo("D");