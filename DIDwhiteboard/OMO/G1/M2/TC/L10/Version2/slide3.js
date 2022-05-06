const { select1, ggb1, buttonGroup1, fib1, media1 } = components;

/////////////////////  SLIDE LOAD  /////////////////////
slide.on("firstload", () => {
	saveData({
		ggbXML: ggb1.instance.getXML(),
		count: 1,
		holdnum: -1,
	});
	media1.updateData({ visible: false });
	ggb1.instance.registerClientListener(makePoints);
	ggb1.instance.registerClickListener(deselectPoints);
	ggb1.instance.registerClientListener(drop);
	ggb1.instance.registerClientListener(copy);
	ggb1.instance.registerAddListener(setStatus);
});

let splatNum = 0;

/////////////////////  TOOL CHOICE  /////////////////////
autorun(() => {
	//number path
	if (select1.data.selected.includes("0")) {
		// ggb1.updateData({ visible: false });
		ggb1.updateData({ visible: true });
		ggb1.instance.setValue("pathBool", true);
		ggb1.instance.setValue("fingersBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", false);
	}
	//fingers
	if (select1.data.selected.includes("1")) {
		ggb1.updateData({ visible: true });
		// ggb1.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("fingersBool", true);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", false);
	}
	//cubes
	if (select1.data.selected.includes("2")) {
		// ggb1.updateData({ visible: false });
		ggb1.updateData({ visible: true });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("fingersBool", false);
		ggb1.instance.setValue("cubesBool", true);
		ggb1.instance.setValue("drawingBool", false);
	}
	//draw
	if (select1.data.selected.includes("3")) {
		ggb1.updateData({ visible: true });
		// ggb1.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("fingersBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", true);
	}
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

/////////////////////  VIDEO LOAD  /////////////////////
media1.on("ready", ({ data: vid }) => {
	vid.play();
});

var click = 0;
let safeArray = ggb1.instance.getAllObjectNames("point");

/////////////////////  BUTTONS  /////////////////////
//submit
buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	if (fib1.getInput("0").text == 9) {
		media1.updateData({ visible: true });
	}
});
//reset
buttonGroup1.on("click:2", () => {
	ggb1.instance.setXML(getData("ggbXML"));
	saveData({ count: 1, holdnum: -1 });
	ggb1.instance.registerClientListener(drop);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	//number path
	if (select1.data.selected.includes("0")) {
		// ggb1.updateData({ visible: false });
		ggb1.updateData({ visible: true });
		ggb1.instance.setValue("pathBool", true);
		ggb1.instance.setValue("fingersBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", false);
	}
	//fingers
	if (select1.data.selected.includes("1")) {
		ggb1.updateData({ visible: true });
		// ggb1.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("fingersBool", true);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", false);
	}
	//cubes
	if (select1.data.selected.includes("2")) {
		// ggb1.updateData({ visible: false });
		ggb1.updateData({ visible: true });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("fingersBool", false);
		ggb1.instance.setValue("cubesBool", true);
		ggb1.instance.setValue("drawingBool", false);
	}
	//draw
	if (select1.data.selected.includes("3")) {
		ggb1.updateData({ visible: true });
		// ggb1.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("fingersBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", true);
	}
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
/////////////////////  NUMBER PATH  /////////////////////
//governs number path operations
function drop(b) {
	if (b[0] == "mouseDown") {
		buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
		if (0 < b.y && b.y < 1) {
			var num = parseInt(b.hits[0].slice(3)) - 0.5;
			saveData({ num });
			const count = getData("count");
			if (num != getData("holdnum")) {
				var xcenter = num.toString();
				if (count == 1) {
					ggb1.instance.evalCommand(
						"circle1=Circle((" + xcenter + ",0.5),0.5)"
					);
					ggb1.instance.evalCommand(
						"Anchor1=(" + (Math.floor(b.x) + 0.5) + "," + 1 + ")"
					);
					ggb1.instance.evalCommand(
						"Arcmid1=(x(Midpoint(Anchor1,Follow)),1.5)"
					);
					ggb1.instance.evalCommand(
						"arc1=CircumcircularArc(Anchor1,Arcmid1,(x(Follow),1))"
					);
					ggb1.instance.evalCommand(
						"SetConditionToShowObject(circle1,pathBool)"
					);
					//   ggb1.instance.evalCommand("SetConditionToShowObject(Arcmid1,pathBool)")
					ggb1.instance.evalCommand(
						"SetConditionToShowObject(arc1,pathBool)"
					);
					saveData({ count: count + 1 });
				} else {
					ggb1.instance.deleteObject("arc" + (count - 1));
					ggb1.instance.evalCommand(
						"Anchor" +
							count +
							"=(" +
							(Math.floor(b.x) + 0.5) +
							"," +
							1 +
							")"
					);
					ggb1.instance.evalCommand(
						"Arcmidfixed" +
							count +
							"=(x(Midpoint(Anchor" +
							count +
							",Anchor" +
							(count - 1) +
							")),1.5)"
					);
					ggb1.instance.evalCommand(
						"arcfixed" +
							count +
							"=CircumcircularArc(Anchor" +
							(count - 1) +
							",Arcmidfixed" +
							count +
							",(x(Anchor" +
							count +
							"),1))"
					);
					ggb1.instance.evalCommand(
						"Arcmid" +
							count +
							"=(x(Midpoint(Anchor" +
							count +
							",Follow)),1.5)"
					);
					ggb1.instance.evalCommand(
						"arc" +
							count +
							"=CircumcircularArc(Anchor" +
							count +
							",Arcmid" +
							count +
							",(x(Follow),1))"
					);
					ggb1.instance.evalCommand(
						"SetConditionToShowObject(circle1,pathBool)"
					);
					//   ggb1.instance.evalCommand("SetConditionToShowObject(Arcmidfixed"+count+",pathBool)")
					//  ggb1.instance.evalCommand("SetConditionToShowObject(Arcmid"+count+",pathBool)")
					ggb1.instance.evalCommand(
						"SetConditionToShowObject(arc" + count + ",pathBool)"
					);
					ggb1.instance.evalCommand(
						"SetConditionToShowObject(arcfixed" +
							count +
							",pathBool)"
					);
					saveData({ count: count + 1, holdnum: num });
				}
			} else {
				ggb1.instance.deleteObject("arc" + (count - 1));
				ggb1.instance.unregisterClientListener(drop);
			}
		}
	}
}
/////////////////////  DRAW  /////////////////////
//governs draw operations
function makePoints(splat) {
	console.log(splat, splat.x, splat.y);
	if (
		splat.type == "mouseDown" &&
		ggb1.instance.getValue("drawingBool") &&
		splat.hits.length == 0
	) {
		ggb1.instance.evalCommand(
			"Splat" +
				splatNum +
				"=(" +
				Math.round(2 * splat.x) / 2 +
				"," +
				Math.round(2 * splat.y) / 2 +
				")"
		);
		ggb1.instance.evalCommand(
			"SetConditionToShowObject(Splat" + splatNum + ",drawingBool)"
		);
		splatNum++;
	}
	if (
		splat.type == "mouseDown" &&
		ggb1.instance.getValue("drawingBool") &&
		splat.hits.length != 0
	) {
		ggb1.instance.deleteObject(splat.hits[0]);
	}
}
//deselects points when added
function deselectPoints(pointName) {
	let deselectAchieved = ggb1.instance.evalCommand("SelectObjects()");
	console.log(`Added ${pointName}, deselected ${deselectAchieved}`);
}
/////////////////////  CUBES  /////////////////////
//governs cubes operations
function copy(grabbed) {
	let binHeight = -1.5;
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
			if (yEnd > binHeight) {
				ggb1.instance.evalCommand(
					"Point" + click + "=(" + xEnd + "," + yEnd + ")"
				);
				ggb1.instance.setVisible("Point" + click, false);
				//create a new copy of the dragged box and put the old one back in the toolbox
				ggb1.instance.evalCommand(
					"BlueCube" +
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
				ggb1.instance.evalCommand(
					"SetConditionToShowObject(BlueCube" + click + ", cubesBool)"
				);
				ggb1.instance.setColor("BlueCube" + click, 0, 127, 175);
				ggb1.instance.setFilling("BlueCube" + click, 0.35);
				ggb1.instance.setCoords(
					"DragPoint",
					ggb1.instance.getXcoord("BlueStart"),
					ggb1.instance.getYcoord("BlueStart")
				);
				click++;
			}
		} else if (objName == "draggerGreen") {
			type = ggb1.instance.getObjectType(objName);
			//gets coordinates of the corner point
			var xEnd = ggb1.instance.getXcoord("DragPointGreen");
			var yEnd = ggb1.instance.getYcoord("DragPointGreen");
			//if the picture dragged is over the line
			if (yEnd > binHeight) {
				ggb1.instance.evalCommand(
					"GreenPoint" + click + "=(" + xEnd + "," + yEnd + ")"
				);
				ggb1.instance.setVisible("GreenPoint" + click, false);
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
				ggb1.instance.evalCommand(
					"SetConditionToShowObject(GreenCube" +
						click +
						", cubesBool)"
				);
				ggb1.instance.setColor("GreenCube" + click, 0, 129, 57);
				ggb1.instance.setFilling("GreenCube" + click, 0.35);

				ggb1.instance.setCoords(
					"DragPointGreen",
					ggb1.instance.getXcoord("GreenStart"),
					ggb1.instance.getYcoord("GreenStart")
				);
				click++;
			}
		}
		let objNumRemBlue = objName.replace("BlueCube", "");
		if (
			objName.includes("BlueCube") &&
			ggb1.instance.getYcoord("Point" + objNumRemBlue) < binHeight
		) {
			ggb1.instance.deleteObject(objName);
			totalCubes.pop();
		}
		let objNumRemGreen = objNumRemBlue.replace("GreenCube", "");
		if (
			objName.includes("GreenCube") &&
			ggb1.instance.getYcoord("GreenPoint" + objNumRemGreen) < binHeight
		) {
			ggb1.instance.deleteObject(objName);
			totalCubes.pop();
		}
	}
}
//sets cube sides fixed and conditional
function setStatus(added) {
	if (ggb1.instance.getObjectType(added) == "segment") {
		ggb1.instance.setFixed(added, true);
		ggb1.instance.evalCommand(
			"SetConditionToShowObject(" + added + ",cubesBool)"
		);
	}
}
/////////////////////  SAVE AND GET DATA  /////////////////////
function saveData(dataObj = {}, target = "") {
	const allComps = Object.keys(components).sort();
	const firstComp = allComps[0];
	if (!firstComp) {
		return;
	} // make sure at least 1 comp exists
	if (typeof target !== "string" || typeof dataObj !== "object") {
		console.error(
			"saveData error: Parameters should be an object and a string!"
		);
	}
	let tarComp = !!target ? target : firstComp;
	if (!components[tarComp]?.storage) {
		components[tarComp].storage = {};
	}
	components[tarComp].storage = {
		...components[tarComp].storage,
		...dataObj,
	};
}

function getData(dataName, target = "") {
	const allComps = Object.keys(components).sort();
	const firstComp = allComps[0];
	if (!firstComp) {
		return;
	} // make sure at least 1 comp exists
	if (typeof target !== "string" || typeof dataName !== "string") {
		console.error("getData error: Parameters should both be strings!");
	}
	let tarComp = !!target ? target : firstComp;
	return components[tarComp]?.storage?.[dataName];
}
