const {
	ggb1,
	ggb2,
	select1,
	media1,
	media2,
	media3,
	media4,
	media5,
	media6,
	media7,
	media8,
	media9,
	media10,
	media11,
	media12,
	media13,
	cubesHelp,
	drawHelp,
	numPathHelp,
	text1,
	fib1,
	fib2,
	buttonGroup1,
} = components;

/////////////////////  SLIDE LOAD  /////////////////////
slide.on("firstload", () => {
	//	select1.setVisible(false);
	text1.updateData({ visible: false, visibilityBehavior: "hide" });
	fib1.setVisible(false);
	fib2.setVisible(false);
	ggb1.updateData({ visible: false });
	buttonGroup1.updateData({ visible: false });
	select1.setVisible(false);
	ggb2.updateData({ visible: false, visibilityBehavior: "hide" });
	cubesHelp.updateData({ visible: false });
	drawHelp.updateData({ visible: false });
	numPathHelp.updateData({ visible: false });
	media2.updateData({ visible: false });
	media3.updateData({ visible: false });
	media4.updateData({ visible: false });
	media5.updateData({ visible: false });
	media6.updateData({ visible: false });
	media7.updateData({ visible: false });
	media8.updateData({ visible: false });
	media9.updateData({ visible: false });
	media10.updateData({ visible: false });
	media11.updateData({ visible: false });
	media12.updateData({ visible: false });
	media13.updateData({ visible: false });
	saveData({
		ggbXML: ggb1.instance.getXML(),
		count: 1,
		holdnum: -1,
		watched6: false,
		secondSubmitActivated: false,
	});
	ggb1.instance.registerObjectClickListener("button2", getSomeHelp);
	ggb1.instance.registerClientListener(makePoints);
	ggb1.instance.registerClickListener(deselectPoints);
	ggb1.instance.registerClientListener(drop);
	ggb1.instance.registerClientListener(copy);
	ggb1.instance.registerAddListener(setStatus);
	ggb2.instance.registerClickListener(readText);
});

let splatNum = 0;
let click = 0;

/////////////////////  VIDEO LOAD  /////////////////////
//cubes help
cubesHelp.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		cubesHelp.updateData({ visible: false });
	});
});

//draw help
drawHelp.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		drawHelp.updateData({ visible: false });
	});
});

//numPath help
numPathHelp.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		numPathHelp.updateData({ visible: false });
	});
});

//welcome to class my marvelous mathematicians...
media1.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		ggb2.updateData({ visible: true });
		media2.updateData({ visible: true });
		media1.updateData({ visible: false });
	});
});

//There are 11 people at the playground
media2.on("ready", ({ data: vid }) => {
	vid.play();
	ggb2.instance.setValue("click", 1);
	vid.bind("end", () => {
		media2.updateData({ visible: false });
		media3.updateData({ visible: true });
	});
});

//Some more people come
media3.on("ready", ({ data: vid }) => {
	vid.play();
	ggb2.instance.setValue("click", 2);
	vid.bind("end", () => {
		media3.updateData({ visible: false });
		media4.updateData({ visible: true });
	});
});

//Now there are 14 people
media4.on("ready", ({ data: vid }) => {
	vid.play();
	ggb2.instance.setValue("click", 3);
	vid.bind("end", () => {
		media4.updateData({ visible: false });
		media5.updateData({ visible: true });
	});
});

//How many people came to the playground?
media5.on("ready", ({ data: vid }) => {
	vid.play();
	ggb2.instance.setValue("click", 4);
	vid.bind("end", () => {
		media5.updateData({ visible: false });
		if (getData("watched6") == false) {
			media6.updateData({ visible: true });
		}
		ggb2.instance.setValue("click", 5);
		ggb2.instance.setFixed("text1", true, true);
		ggb2.instance.setFixed("text2", true, true);
		ggb2.instance.setFixed("text3", true, true);
		ggb2.instance.setFixed("text4", true, true);
		ggb2.instance.setFixed("text1_1", true, true);
		ggb2.instance.setFixed("text2_1", true, true);
		ggb2.instance.setFixed("text3_1", true, true);
		ggb2.instance.setFixed("text4_1", true, true);
	});
});

//We have some tools that we could use to solve.  Pick a tool...
media6.on("ready", ({ data: vid }) => {
	if (getData("watched6") == false) {
		vid.play();
	}
	vid.bind("end", () => {
		ggb1.updateData({ visible: true });
		buttonGroup1.updateData({ visible: true });
		media6.updateData({ visible: false });
		select1.setVisible(true);
		saveData({ watched6: true });
		text1.updateData({ visible: true, visibilityBehavior: "none" });
	});
});

//Wrong: Hmm, let me reread to check...
media7.on("ready", ({ data: vid }) => {
	vid.play();
});

//Right: You have 11 people represented...
media8.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		media8.updateData({ visible: false });
		media9.updateData({ visible: true });
	});
});

//Some more people come, don't know how many.  Use your tool to show 14...THIS ONE HAS ONE LINE TOO MANY
media9.on("ready", ({ data: vid }) => {
	vid.play();
	fib1.setVisible(true);
	vid.bind("betweentimes", 18, 19, (withinInterval) => {
		if (withinInterval) {
			fib1.setVisible(false);
			fib2.setVisible(true);
		}
	});
	vid.bind("betweentimes", 23, 24, (withinInterval) => {
		if (withinInterval) {
			vid.pause();
		}
	});
	text1.updateData({ visible: false });
});

//Wrong: Let me reread to check...
media10.on("ready", ({ data: vid }) => {
	vid.play();
});

//Awesome! Now complete your equation...
media11.on("ready", ({ data: vid }) => {
	vid.play();
});

//Wrong: Check your work, how many did you count on...
media12.on("ready", ({ data: vid }) => {
	vid.play();
});

//Right: Way to work!  Thanks for helping...Let's compare both (WILL NEED TO BE CODED IN SECOND ROUND)...
media13.on("ready", ({ data: vid }) => {
	vid.play();
	//next slide at end of video
	vid.bind("end", controls.next);
});

/////////////////////  FIB INPUT  /////////////////////
//unknown addend input
fib2.on("change", () => {
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

/////////////////////  BUTTONS  /////////////////////
//submit
buttonGroup1.on("click:1", () => {
	console.log(fib2.getInput("0").text);
	if (fib2.getInput("0").text == 3 && getData("thirdSubmitActivated")) {
		media12.updateData({ visible: false });
		media11.updateData({ visible: false });
		media13.updateData({ visible: true });
	}
	if (fib2.getInput("0").text != 3 && getData("thirdSubmitActivated")) {
		media13.updateData({ visible: false });
		media12.updateData({ visible: true });
		media11.updateData({ visible: false });
	}
	if (
		ggb1.instance.getValue("currentValue") == 14 &&
		getData("secondSubmitActivated") &&
		!getData("thirdSubmitActivated")
	) {
		media11.updateData({ visible: true });
		media9.updateData({ visible: false });
		media10.updateData({ visible: false });
		saveData({ thirdSubmitActivated: true });
	}
	if (
		ggb1.instance.getValue("currentValue") != 14 &&
		getData("secondSubmitActivated") &&
		!getData("thirdSubmitActivated")
	) {
		console.log(getData("finalHop"));
		if (select1.data.selected.includes("0") && getData("finalHop") == 14) {
			media11.updateData({ visible: true });
			media9.updateData({ visible: false });
			media10.updateData({ visible: false });
			saveData({ thirdSubmitActivated: true });
		} else {
			media10.updateData({ visible: true });
			media9.updateData({ visible: false });
		}
	}
	if (
		ggb1.instance.getValue("currentValue") == 11 &&
		!getData("secondSubmitActivated")
	) {
		media7.updateData({ visible: false });
		media8.updateData({ visible: true });
		saveData({ secondSubmitActivated: true });
	}
	if (
		ggb1.instance.getValue("currentValue") != 11 &&
		!getData("secondSubmitActivated")
	) {
		media7.updateData({ visible: true });
	}
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

//reset
buttonGroup1.on("click:2", () => {
	ggb1.instance.setXML(getData("ggbXML"));
	saveData({ count: 1, holdnum: -1 });
	ggb1.instance.registerClientListener(drop);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
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

/////////////////////  REPEAT VIDEOS  /////////////////////
//ggb2 text click
function readText(clicked) {
	if (clicked == "text1" || clicked == "text1_{1}") {
		media2.updateData({ visible: true });
		media3.updateData({ visible: false });
		media4.updateData({ visible: false });
		media5.updateData({ visible: false });
		media2.play();
	}
	if (clicked == "text2" || clicked == "text2_{1}") {
		media2.updateData({ visible: false });
		media3.updateData({ visible: true });
		media4.updateData({ visible: false });
		media5.updateData({ visible: false });
		media3.play();
	}
	if (clicked == "text3" || clicked == "text3_{1}") {
		media2.updateData({ visible: false });
		media3.updateData({ visible: false });
		media4.updateData({ visible: false });
		media5.updateData({ visible: true });
		media5.play();
	}
	if (clicked == "text4" || clicked == "text4_{1}") {
		media2.updateData({ visible: false });
		media3.updateData({ visible: false });
		media4.updateData({ visible: true });
		media5.updateData({ visible: false });
		media4.play();
	}
}

/////////////////////  TOOL CHOICE  /////////////////////
//choosing tools
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

//text update based on starting number
autorun(() => {
	let currentValue = ggb1.innerData["currentValue"];
	text1.updateData({ text: `$${currentValue}$` });
});

//help videos
function getSomeHelp() {
	//number path
	if (select1.data.selected.includes("0")) {
		numPathHelp.updateData({ visible: true });
		drawHelp.updateData({ visible: false });
		cubesHelp.updateData({ visible: false });
	}
	//cubes
	if (select1.data.selected.includes("2")) {
		cubesHelp.updateData({ visible: true });
		numPathHelp.updateData({ visible: false });
		drawHelp.updateData({ visible: false });
	}
	//draw
	if (select1.data.selected.includes("3")) {
		drawHelp.updateData({ visible: true });
		cubesHelp.updateData({ visible: false });
		numPathHelp.updateData({ visible: false });
	}
}

/////////////////////  NUMBER PATH  /////////////////////
//governs number path operations
function drop(b) {
	if (b[0] == "mouseDown" && ggb1.instance.getValue("pathBool")) {
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
					ggb1.instance.setValue("currentValue", Math.round(num));
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
					ggb1.instance.evalCommand(
						"SetConditionToShowObject(arc" + count + ",pathBool)"
					);
					ggb1.instance.evalCommand(
						"SetConditionToShowObject(arcfixed" +
							count +
							",pathBool)"
					);
					saveData({
						finalHop: Math.floor(b.x) + 1,
						count: count + 1,
						holdnum: num,
					});
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
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	if (ggb1.instance.getValue("drawingBool")) {
		if (splat.type == "mouseDown" && splat.hits.length == 0) {
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
			splat.hits.length != 0 &&
			splat.hits != "button2"
		) {
			ggb1.instance.deleteObject(splat.hits[0]);
		}
		let totalSplats = [];
		let totalPoints = ggb1.instance.getAllObjectNames("point");
		totalPoints.forEach((element) => {
			if (element.includes("Splat")) {
				totalSplats.push(element);
			}
		});
		ggb1.instance.setValue("currentValue", totalSplats.length);
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
	let binHeight = -4;
	if (ggb1.instance.getValue("cubesBool") == true) {
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
						"SetConditionToShowObject(BlueCube" +
							click +
							", cubesBool)"
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
				ggb1.instance.getYcoord("GreenPoint" + objNumRemGreen) <
					binHeight
			) {
				ggb1.instance.deleteObject(objName);
				totalCubes.pop();
			}
		}
		let totalCubes = [];
		let totalPossible = ggb1.instance.getAllObjectNames("quadrilateral");
		totalPossible.forEach((element) => {
			if (element.includes("Cube")) {
				totalCubes.push(element);
			}
		});
		ggb1.instance.setValue("currentValue", totalCubes.length);
	}
}

//sets cube sides fixed and conditional
function setStatus(added) {
	if (ggb1.instance.getObjectType(added) == "segment") {
		ggb1.instance.setFixed(added, true, false);
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
