const { ggb1, ggb2, ggb3, buttonGroup1, media8, media8a, media8b, text1 } =
	components;
////////////////////  SLIDE LOAD  ////////////////////
slide.on("firstload", () => {
	ggb2.instance.setValue("eqn1", false);
	ggb2.instance.setValue("eqn2", false);
	ggb2.instance.setValue("eqn3", true);
	media8.updateData({ visible: true });
	media8a.updateData({ visible: false });
	media8b.updateData({visible: false});
	text1.instance.setValue("instructionNumber", 7);
	saveData(
		{
			ggbXML: ggb1.instance.getXML(),
			count: 1,
			holdnum: -1,
			problem4Attempts: 0,
		},
		"ggb1"
	);
	ggb1.instance.evalCommand("SetVisibleInView(Follow,1,false)");
	text1.updateData({visible: false});
});


////////////////////  VIDEOS  ////////////////////
media8.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		text1.updateData({ visible: true });
	});
});
media8a.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {});
});
media8b.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		ggb2.instance.setTextValue("answer", "6");
		setTimeout(() => {
			controls.next();
		}, 2000);
	});
});

////////////////////  BUTTON CONTROLS  ////////////////////
//submit
buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	saveData(
		{ problem4Attempts: getData("problem4Attempts", "ggb1") + 1 },
		"ggb1"
	);
	if (ggb2.instance.getValueString("answer") == "6") {
		ggb2.instance.setValue("showCheck", true);
		setTimeout(() => {
			controls.next();
		}, 2000);
	}
	if (
		ggb2.instance.getValueString("answer") != "6" &&
		getData("problem4Attempts", "ggb1") == 1
	) {
		media8a.updateData({ visible: true });
		media8b.updateData({ visible: false });
		media8.updateData({ visible: false });
	}
	if (
		ggb2.instance.getValueString("answer") != "6" &&
		getData("problem4Attempts", "ggb1") == 2
	) {
		media8a.updateData({ visible: false });
		media8b.updateData({ visible: true });
		media8.updateData({ visible: false });
	}

	console.log("Problem 4:", getData("problem4Attempts", "ggb1"));
});

//reset
buttonGroup1.on("click:2", () => {
	ggb2.instance.setTextValue("answer", "");
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

//autorun to resubmit
autorun(() => {
	let answer = ggb2.innerData["answer"];
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	text1.updateData({ visible: false });
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
							saveData(
								{
									count3: count + 1,
									firstNum3: num,
									lastClickedGreaterNum3: num,
								},
								"ggb1"
							);
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
									saveData(
										{ lastClickedGreaterNum3: num },
										"ggb1"
									);
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
let click = 0;
/////////////////////  CUBES  /////////////////////
//governs cubes operations
function copy(grabbed) {
	let binHeight = -1.5;
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
					console.log(binHeight, xEnd, yEnd);
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
					console.log("copied");
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

////////////////////  GET/SAVE DATA  ////////////////////
//get from slide 4
const id1 = "slide-ce94c903cbac";
const id1PrevSelect1 = getPrevSelect(id1, "select1");

const id1GGB1Storage = getPrevStorage(id1, "ggb1");
const id1GGB3Storage = getPrevStorage(id1, "ggb3");

if (
	(id1GGB1Storage.saveXML && id1PrevSelect1.data.selected.includes("1")) ||
	(id1GGB1Storage.saveXML && id1PrevSelect1.data.selected.includes("2"))
) {
	ggb1.updateData({ visible: true });
	ggb3.updateData({ visible: false });
	ggb1.instance.setXML(id1GGB1Storage.saveXML);
	ggb1.instance.setValue("showCheck", false);
}

if (id1GGB3Storage.saveXML && id1PrevSelect1.data.selected.includes("0")) {
	ggb1.updateData({ visible: false });
	ggb3.updateData({ visible: true });
	ggb3.instance.setXML(id1GGB3Storage.saveXML);
	ggb3.instance.setValue("showCheck", false);
}
function getPrevSelect(slideID, compName = "select1") {
	// find slide num of source
	const slideNum = ((slideId) => {
		if (
			typeof controls == "undefined" ||
			!controls.slidesNavigationData?.length
		) {
			return "missing slide!";
		}
		let allIds = controls.slidesNavigationData.map(
			({ slideId }) => slideId
		);
		return allIds.indexOf(slideId) + 1;
	})(slideID);
	// establish default in same data structure as original
	let defSelect = {
		data: {
			selected: [""],
			options: [{ label: "", value: "0" }],
		},
	};
	// get previous data
	let prevSelect = getFromSlide(slideID, compName, defSelect) || defSelect;
	let selLabels = prevSelect.data.options
		.map((opt) => {
			if (prevSelect.data.selected.includes(opt.value)) {
				return opt.label;
			}
		})
		.filter((label) => !!label);
	// fill in other useful data
	prevSelect.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
	prevSelect.data.hasData = !!prevSelect.data.selected.length;
	prevSelect.data.chosen =
		prevSelect.data.type == "single"
			? parseInt(prevSelect.data.selected[0])
			: prevSelect.data.selected.map((stringNum) => parseInt(stringNum));
	prevSelect.data.chosenSingle = parseInt(prevSelect.data.selected[0]);
	prevSelect.data.chosenMult = prevSelect.data.selected.map((stringNum) =>
		parseInt(stringNum)
	);
	prevSelect.data.chosenLabels = selLabels.length
		? [...selLabels]
		: [prevSelect.data.goBackString];
	prevSelect.data.slideNum = slideNum;
	// set text values
	prevSelect.data.flagText = prevSelect.data.hasData
		? ""
		: prevSelect.data.goBackString;
	return { ...prevSelect };
}

function getPrevStorage(slideID, compName) {
	// find slide num of source
	const slideNum = ((slideId) => {
		if (
			typeof controls == "undefined" ||
			!controls.slidesNavigationData?.length
		) {
			return "missing slide!";
		}
		let allIds = controls.slidesNavigationData.map(
			({ slideId }) => slideId
		);
		return allIds.indexOf(slideId) + 1;
	})(slideID);
	// get previous data
	let prevComp = getFromSlide(slideID, compName, {}) || {};
	console.log(prevComp);
	// check previous data
	const hasData = !prevComp
		? false
		: !Object.keys(prevComp).includes("storage")
		? false
		: !Object.keys(prevComp.storage).length
		? false
		: true;
	let returnStorage = hasData ? prevComp.storage : {};
	// fill in other useful data
	returnStorage.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
	returnStorage.hasData = hasData;
	returnStorage.slideNum = slideNum;
	// set text value
	returnStorage.flagText = hasData ? "" : returnStorage.goBackString;
	// record if there was already data so it doesn't wrongfully overwritten
	// maintain a record of whether we've had data
	const existingData = getData(`oldData${slideID + compName}`);
	const hadData = hasData || existingData?.hadData || false;
	if (hasData) {
		// if we have new data, (over)write to save it
		returnStorage.hadData = hadData;
		// create a dummy object to pass to updateData
		const newData = {};
		newData[`oldData${slideID + compName}`] = { ...returnStorage };
		saveData(newData);
	} else if (existingData?.hasData) {
		// if we don't have new data but there is oldData, grab it
		returnStorage = { ...existingData };
	}
	return { ...returnStorage };
}

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
