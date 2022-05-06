const {
	media7,
	media7a,
	media7b,
	ggb1,
	ggb2,
	ggb3,
	buttonGroup1,
	select1,
	text1,
} = components;

ggb1.instance.registerClientListener(makePoints); //draw
ggb1.instance.registerClickListener(deselectPoints);
ggb3.instance.registerClientListener(client); //number path
ggb1.instance.registerClickListener(clickedCube); //cubes
ggb1.instance.registerAddListener(setStatus);
ggb1.instance.registerStoreUndoListener(() => {
	const saveXML = ggb1.instance.getXML();
	saveData({ saveXML }, "ggb1");
	console.log("from listener", saveXML);
});
ggb3.instance.registerStoreUndoListener(() => {
	saveData({ saveXML: ggb3.instance.getXML() }, "ggb3");
});
let arcList = [
	"arcSmall1",
	"arcSmall2",
	"arcSmall3",
	"arcSmall4",
	"arcSmall5",
	"arcSmall6",
	"arcSmall7",
	"arcSmall8",
	"arcSmall9",
	"arcSmall10",
	"arcSmall11",
	"arcSmall12",
	"arcSmall13",
	"arcSmall14",
];

let blankNumList1 = [
	"blank1num1",
	"blank1num2",
	"blank1num3",
	"blank1num4",
	"blank1num5",
	"blank1num6",
	"blank1num7",
	"blank1num8",
	"blank1num9",
	"blank1num10",
	"blank1num11",
	"blank1num12",
	"blank1num13",
	"blank1num14",
	"blank1num15",
];

let blankNumList2 = [
	"blank2num1",
	"blank2num2",
	"blank2num3",
	"blank2num4",
	"blank2num5",
	"blank2num6",
	"blank2num7",
	"blank2num8",
	"blank2num9",
	"blank2num10",
	"blank2num11",
	"blank2num12",
	"blank2num13",
	"blank2num14",
	"blank2num15",
];

let blankNumList3 = [
	"blank3num1",
	"blank3num2",
	"blank3num3",
	"blank3num4",
	"blank3num5",
	"blank3num6",
	"blank3num7",
	"blank3num8",
	"blank3num9",
	"blank3num10",
	"blank3num11",
	"blank3num12",
	"blank3num13",
	"blank3num14",
	"blank3num15",
];

////////////////////  SLIDE LOAD  ////////////////////
slide.on("firstload", () => {
	ggb2.instance.setValue("eqn1", false);
	ggb2.instance.setValue("eqn2", false);
	ggb2.instance.setValue("eqn3", true);
	media7.updateData({ visible: true });
	media7a.updateData({ visible: false });
	media7b.updateData({ visible: false });
	saveData({
		ggbXML: ggb1.instance.getXML(),
		ggbXML3: ggb3.instance.getXML(),
		count: 1,
		holdnum: -1,
		problem3Attempts: 0,
		count3: 1,
		firstNum3: -1,
		lastClickedGreaterNum3: -1,
		splatNum: 0,
		click: 0,
		totalCubes: [],
	}, "ggb1");
	ggb1.instance.evalCommand("Border=Polygon({Corner(1)+(0.1,0.1),Corner(2)+(-0.1,0.1),Corner(3)+(-0.1,-0.1),Corner(4)+(0.1,-0.1)})");
	ggb1.instance.evalCommand("SetConditionToShowObject(Border,drawingBool)");
	ggb1.instance.setFixed("Border", true, false);
	ggb1.instance.setColor("Border", 1, 1, 1);
	ggb1.instance.setFilling("Border", 0);
	ggb2.instance.setFixed("InputBox1", true, false);
	buttonGroup1.updateData({ visible: false });
	select1.setDisabled(true);
	ggb1.updateData({ visible: false });
	ggb2.updateData({ visible: true });
	ggb3.updateData({visible: false});
	text1.instance.setValue("instructionNumber", 6);
	text1.updateData({visible: false});
	ggb2.instance.setValue("showSquare", true);
});

////////////////////  VIDEOS  ////////////////////
media7.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		ggb1.updateData({ disabled: false });
		buttonGroup1.updateData({ visible: true });
		select1.setDisabled(false);
		text1.updateData({ visible: true });
	});
});
media7a.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
});
media7b.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		switch (true) {
			case select1.data.selected.includes("0"):
				ggb3.instance.setXML(getData("ggbXML3", "ggb1"));
				ggb3.instance.evalCommand(
					"circle1=Circle((" + 5 + "-0.5,0.5),0.5)"
				);
				ggb3.instance.setFixed("circle1", true, false);
				for (let i = 4, L = 10; i < L; i++) {
					ggb3.instance.setVisible(arcList[i], true);
				}
				break;
			case select1.data.selected.includes("1"):
				ggb1.instance.setXML(getData("ggbXML", "ggb1"));
				ggb1.updateData({ visible: true });
				ggb3.updateData({ visible: false });
				ggb1.instance.setValue("pathBool", false);
				ggb1.instance.setValue("cubesBool", true);
				ggb1.instance.setValue("drawingBool", false);
				saveData({ click: 0 }, "ggb1");
				for (let i = 0; i < 5; i++) {
					let click = getData("click", "ggb1");
					let totalCubes = getData("totalCubes", "ggb1");
					ggb1.instance.evalCommand(
						"Point" +
							click +
							"=(" +
							click * ggb1.instance.getValue("width") +
							"," +
							2 +
							")"
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
					totalCubes.push("BlueCube" + click);
					saveData({ totalCubes: totalCubes }, "ggb1");
					saveData({ click: click + 1 }, "ggb1");
				}
				for (let i = 5; i < 11; i++) {
					let click = getData("click", "ggb1");
					let totalCubes = getData("totalCubes", "ggb1");
					ggb1.instance.evalCommand(
						"GreenPoint" +
							click +
							"=(" +
							click * ggb1.instance.getValue("width") +
							"," +
							2 +
							")"
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
					totalCubes.push("GreenCube" + click);
					saveData({ totalCubes: totalCubes }, "ggb1");
					saveData({ click: click + 1 }, "ggb1");
				}
				break;
			case select1.data.selected.includes("2"):
				ggb1.instance.setXML(getData("ggbXML", "ggb1"));
				ggb1.updateData({ visible: true });
				ggb3.updateData({ visible: false });
				ggb1.instance.setValue("pathBool", false);
				ggb1.instance.setValue("cubesBool", false);
				ggb1.instance.setValue("drawingBool", true);
				for (let i = 0; i < 6; i++) {
					ggb1.instance.evalCommand(
						`Splat${i}=(${1 + (i % 5)},${
							3 - Math.floor(i / 5)
						})`
					);
					ggb1.instance.setVisible(`Splat${i}`, true);
					ggb1.instance.setColor(`Splat${i}`, 0, 127, 175);
				}
				for (let i = 0; i < 6; i++) {
					ggb1.instance.evalCommand(
						`Splat${i + 5}=(${9 + (i % 5)},${
							3 - Math.floor(i / 5)
						})`
					);
					ggb1.instance.setVisible(`Splat${i + 5}`, true);
					ggb1.instance.setColor(`Splat${i + 5}`, 0, 129, 57);
				}
				saveData({ ggbXML: ggb1.instance.getXML() }, "ggb1");
				break;
			default:
				break;
		}
		setTimeout(() => {
			saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
			saveData({ saveXML: ggb3.instance.getXML() }, "ggb3");
			controls.next();
		}, 3000);
	});
});

////////////////////  BUTTON CONTROLS  ////////////////////
//submit
buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	if (ggb1.instance.getValue("currentValue") == 11) {
		ggb1.instance.evalCommand("SetVisibleInView(Follow,1,false)");
		if (
			select1.data.selected.includes("1") ||
			select1.data.selected.includes("2")
		) {
			ggb1.instance.setValue("showCheck", true);
		}
		if (select1.data.selected.includes("0")) {
			ggb3.instance.setValue("showCheck", true);
		}
		saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
		saveData({ saveXML: ggb3.instance.getXML() }, "ggb3");
		setTimeout(() => {
			controls.next();
		}, 2000);
	}
	if (
		ggb1.instance.getValue("currentValue") != 11 &&
		getData("problem3Attempts", "ggb1") == 0
	) {
		media7a.updateData({ visible: true });
		media7b.updateData({ visible: false });
		media7.updateData({ visible: false });
	}
	if (
		ggb1.instance.getValue("currentValue") != 11 &&
		getData("problem3Attempts", "ggb1") == 1
	) {
		media7a.updateData({ visible: false });
		media7b.updateData({ visible: true });
		media7.updateData({ visible: false });
	}
	saveData({ problem3Attempts: getData("problem3Attempts", "ggb1") + 1 }, "ggb1");
	console.log("Problem 3:", getData("problem3Attempts", "ggb1"));
});

//reset
buttonGroup1.on("click:2", () => {
	ggb1.instance.setXML(getData("ggbXML", "ggb1"));
	ggb3.instance.setXML(getData("ggbXML3", "ggb1"));
	saveData({ count: 1, holdnum: -1, click:0 }, "ggb1");
	ggb3.instance.registerClientListener(client);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	//number path
	if (select1.data.selected.includes("0")) {
		ggb3.updateData({visible: true});
		ggb1.updateData({visible: false});
		ggb1.instance.setValue("pathBool", true);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", false);
	}
	//cubes
	if (select1.data.selected.includes("1")) {
		ggb1.updateData({ visible: true });
		ggb3.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("cubesBool", true);
		ggb1.instance.setValue("drawingBool", false);
	}
	//draw
	if (select1.data.selected.includes("2")) {
		ggb1.updateData({visible: true});
		ggb3.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", true);
	}
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

////////////////////  TOOL CHOICE  ////////////////////
//choosing tools
autorun(() => {
	//number path
	if (select1.data.selected.includes("0")) {
		ggb1.updateData({ visible: false });
		ggb3.updateData({ visible: true });
		ggb1.instance.setValue("pathBool", true);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", false);
		text1.updateData({ visible: false });
	}
	//cubes
	if (select1.data.selected.includes("1")) {
		ggb1.updateData({ visible: true });
		ggb3.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("cubesBool", true);
		ggb1.instance.setValue("drawingBool", false);
		text1.updateData({ visible: false });
	}
	//draw
	if (select1.data.selected.includes("2")) {
		ggb1.updateData({ visible: true });
		ggb3.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", true);
		text1.updateData({ visible: false });
	}
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

/////////////////////  NUMBER PATH  /////////////////////
//governs number path operations
function client(a) {
	switch (a[0]) {
		case "mouseDown":
			let num = ggb3.instance.getValue("followLocation");
			let count = getData("count3", "ggb1");
			let firstNum = getData("firstNum3", "ggb1");
			switch (num) {
				case -1:
					break;
				default:
					switch (count) {
						case 1:
							ggb3.instance.evalCommand(
								"circle1=Circle((" + num + "-0.5,0.5),0.5)"
							);
							ggb3.instance.setFixed("circle1", true, false);
							saveData({
								count3: count + 1,
								firstNum3: num,
								lastClickedGreaterNum3: num,
							}, "ggb1");
							break;
						default:
							let comparison =
								firstNum - num < 0
									? 1
									: firstNum - num > 0
									? -1
									: 0;
							switch (comparison) {
								case 1:
									//show addened
									let addend = num - firstNum;
									//show arcs
									for (
										let i = 0, L = arcList.length;
										i < L;
										i++
									) {
										ggb3.instance.setVisible(
											arcList[i],
											false
										);
									}
									for (
										let i = 0, L = num - firstNum;
										i < L;
										i++
									) {
										ggb3.instance.setVisible(
											arcList[firstNum + i - 1],
											true
										);
									}
									saveData({ lastClickedGreaterNum3: num }, "ggb1");
									buttonGroup1.updateSingleButton(
										{ disabled: false, text: "Submit" },
										1
									);
									break;
								case -1:
									break;
								default:
							}
					}
					buttonGroup1.updateSingleButton({ disabled: false }, 2);
					ggb1.instance.setValue("currentValue", num);
					saveData({ saveXML: ggb3.instance.getXML() }, "ggb3");
			}
			break;
	}
}

/////////////////////  DRAW  /////////////////////
//governs draw operations
function makePoints(splat) {
	let splatNum = getData("splatNum", "ggb1");
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
			if (getData("problem2Correct", "ggb1") == true) {
				ggb1.instance.setColor(`Splat${splatNum}`, 0, 129, 57);
			}
			ggb1.instance.evalCommand(
				"SetConditionToShowObject(Splat" + splatNum + ",drawingBool)"
			);
			saveData({ splatNum: splatNum + 1 }, "ggb1");
		}
		if (
			splat.type == "mouseDown" &&
			splat.hits.length != 0 &&
			splat.hits != "button2"
		) {
			ggb1.instance.deleteObject(splat.hits[0]);
			saveData({ splatNum: splatNum - 1 }, "ggb1");
		}
		let totalSplats = [];
		let totalPoints = ggb1.instance.getAllObjectNames("point");
		totalPoints.forEach((element) => {
			if (element.includes("Splat")) {
				totalSplats.push(element);
			}
		});
		ggb1.instance.setValue("currentValue", totalSplats.length);
		console.log(totalSplats, ggb1.instance.getValue("currentValue"));
		saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
	}
}

//deselects points when added
function deselectPoints(pointName) {
	let deselectAchieved = ggb1.instance.evalCommand("SelectObjects()");
	console.log(`Added ${pointName}, deselected ${deselectAchieved}`);
}

/////////////////////  CUBES  /////////////////////
//governs cube operations when dragger is clicked
function clickedCube(clicked) {
	let click = getData("click", "ggb1");
	let totalCubes = getData("totalCubes", "ggb1");
	if (clicked == "dragger") {
		ggb1.instance.evalCommand(
			"Point" +
				click +
				"=(" +
				click * ggb1.instance.getValue("width") +
				"," +
				2 +
				")"
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
		totalCubes.push("BlueCube" + click);
		saveData({ totalCubes: totalCubes }, "ggb1");
		saveData({ click: click + 1 }, "ggb1");
	}
	if (clicked == "draggerGreen") {
		ggb1.instance.evalCommand(
			"GreenPoint" +
				click +
				"=(" +
				click * ggb1.instance.getValue("width") +
				"," +
				2 +
				")"
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
			"SetConditionToShowObject(GreenCube" + click + ", cubesBool)"
		);
		ggb1.instance.setColor("GreenCube" + click, 0, 129, 57);
		ggb1.instance.setFilling("GreenCube" + click, 0.35);

		ggb1.instance.setCoords(
			"DragPointGreen",
			ggb1.instance.getXcoord("GreenStart"),
			ggb1.instance.getYcoord("GreenStart")
		);
		totalCubes.push("GreenCube" + click);
		saveData({ totalCubes: totalCubes }, "ggb1");
		saveData({ click: click + 1 }, "ggb1");
	}
	if (clicked.includes("Cube")) {
		ggb1.instance.deleteObject(clicked);
		totalCubes.pop();
		saveData({ click: click - 1 }, "ggb1");
		saveData({ totalCubes: totalCubes }, "ggb1");
	}
	if (clicked.includes("Cube") || clicked.includes("dragger")) {
		totalCubes.forEach((element) => {
			ggb1.instance.setFixed(element, true, false);
		});
		ggb1.instance.setFixed(totalCubes[totalCubes.length - 1], false, true);
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
////////////////////  GET/SAVE DATA  ////////////////////
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
