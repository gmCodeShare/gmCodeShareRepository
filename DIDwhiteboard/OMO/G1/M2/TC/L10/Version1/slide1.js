//slide-290c0399a706
const { ggb1, buttonGroup1, media1 } = components;

ggb1.instance.registerClientListener(copy);
slide.on("firstload", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	ggb1.instance.setVisible("draggerGreen", false);
	ggb1.instance.setVisible("q2", false);
	ggb1.updateData({ disabled: true });
});

media1.on("ready", ({ data: vid }) => {
	vid.play();
	// when submitted and correct and video is finished, controls.next
	vid.bind("betweentimes", 39, 40, (withinInterval) => {
		if (withinInterval) {
			vid.pause();
			ggb1.updateData({ disabled: false });
		}
	});
	vid.bind("betweentimes", 61, 62, (withinInterval) => {
		if (withinInterval) {
			vid.pause();
			ggb1.instance.setVisible("draggerGreen", true);
			ggb1.instance.setVisible("q2", true);
			ggb1.updateData({ disabled: false });
		}
	});
	vid.bind("end", controls.next);
});

var click = 0;
function copy(grabbed) {
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	//sets information about whatever is selected
	if (grabbed.type == "select") {
		objName = grabbed.target;
		type = ggb1.instance.getObjectType(objName);
	}
	//when dragged
	if (grabbed.type == "dragEnd") {
		if (objName == "dragger") {
			type = ggb1.instance.getObjectType(objName);
			//gets coordinates of the corner point

			var xEnd = ggb1.instance.getXcoord("DragPoint");
			var yEnd = ggb1.instance.getYcoord("DragPoint");
			//if the picture dragged is over the line
			if (yEnd > -1) {
				ggb1.instance.evalCommand(
					"Point" + click + "=(" + xEnd + "," + yEnd + ")"
				);
				ggb1.instance.setVisible("Point" + click);
				//create a new copy of the dragged box and put the old one back in the toolbox
				ggb1.instance.evalCommand(
					"Cube" +
						click +
						"=Polygon(Point" +
						click +
						",Point" +
						click +
						"+(width,0), Point" +
						click +
						"+(width,width),Point" +
						click +
						"+(0,width))"
				);
				ggb1.instance.setColor("Cube" + click, 0, 127, 175);
				ggb1.instance.setFilling("Cube" + click, 0.35);
				ggb1.instance.setCoords(
					"DragPoint",
					ggb1.instance.getXcoord("A"),
					ggb1.instance.getYcoord("A")
				);
				click++;
			}
		} else if (objName == "draggerGreen") {
			type = ggb1.instance.getObjectType(objName);
			//gets coordinates of the corner point
			var xEnd = ggb1.instance.getXcoord("DragPointGreen");
			var yEnd = ggb1.instance.getYcoord("DragPointGreen");
			//if the picture dragged is over the line
			if (yEnd > -1) {
				ggb1.instance.evalCommand(
					"GreenPoint" + click + "=(" + xEnd + "," + yEnd + ")"
				);
				ggb1.instance.setVisible("GreenPoint" + click);
				//create a new copy of the dragged box and put the old one back in the toolbox
				ggb1.instance.evalCommand(
					"GreenCube" +
						click +
						"=Polygon(GreenPoint" +
						click +
						",GreenPoint" +
						click +
						"+(width,0), GreenPoint" +
						click +
						"+(width,width),GreenPoint" +
						click +
						"+(0,width))"
				);
				ggb1.instance.setColor("GreenCube" + click, 0, 129, 57);
				ggb1.instance.setFilling("GreenCube" + click, 0.35);
				ggb1.instance.setCoords(
					"DragPointGreen",
					ggb1.instance.getXcoord("E"),
					ggb1.instance.getYcoord("E")
				);
				click++;
			}
		}
	}
}

buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	media1.play();
	ggb1.updateData({ disabled: true });
});
buttonGroup1.on("click:2", () => {
	let safeArray = [
		"A",
		"B",
		"BLbin",
		"C",
		"D",
		"DragPoint",
		"DragPointGreen",
		"E",
		"F",
		"G",
		"H",
		"corner",
	];
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	let pointArray = ggb1.instance.getAllObjectNames("point");
	pointArray.forEach((element) => {
		if (!safeArray.includes(element)) {
			ggb1.instance.deleteObject(element);
		}
	});
});
