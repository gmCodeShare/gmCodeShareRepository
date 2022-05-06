const {
	media3,
	media3a,
	media4,
	media4a,
	media4b,
	media5,
	media5a,
	media5b,
	buttonGroup1,
	buttonGroup2,
	ggb1,
	ggb2,
	ggb3,
	select1,
	select2,
	text1,
	text2,
	text3,
	text4,
	separatorRex,
} = components;

ggb1.instance.registerClientListener(makePoints);
ggb1.instance.registerClickListener(deselectPoints);
ggb3.instance.registerClientListener(client);
ggb1.instance.registerClickListener(clickedCube);
ggb1.instance.registerAddListener(setStatus);
ggb1.instance.registerStoreUndoListener(() => {
	saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
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
	ggb2.instance.setValue("eqn2", true);
	media3a.updateData({ visible: false });
	media4.updateData({ visible: false });
	media4a.updateData({ visible: false });
	media4b.updateData({ visible: false });
	media5.updateData({ visible: false });
	media5a.updateData({ visible: false });
	media5b.updateData({ visible: false });
	buttonGroup2.updateData({ visible: false });
	select1.setVisible(false);
	select2.setVisible(false);
	ggb2.instance.setFixed("InputBox1", true, false);
	buttonGroup1.updateData({ visible: false });
	buttonGroup1.updateSingleButton({disabled: true}, 1);
	ggb1.instance.evalCommand("Border=Polygon({Corner(1)+(0.1,0.1),Corner(2)+(-0.1,0.1),Corner(3)+(-0.1,-0.1),Corner(4)+(0.1,-0.1)})");
	ggb1.instance.evalCommand("SetConditionToShowObject(Border,drawingBool)");
	ggb1.instance.setFixed("Border", true, false);
	ggb1.instance.setColor("Border", 1, 1, 1);
	ggb1.instance.setFilling("Border", 0);
	saveData(
		{
			ggbXML: ggb1.instance.getXML(),
			ggbXML3: ggb3.instance.getXML(),
			count: 1,
			holdnum: -1,
			problem2aAttempts: 0,
			problem2bAttempts: 0,
			problem2cAttempts: 0,
			problem2Correct: 0,
			count3: 1,
			firstNum3: -1,
			lastClickedGreaterNum3: -1,
			splatNum: 0,
			click: 0,
			totalCubes: [],
			videoPlayed: false,
		},
		"ggb1"
	);
	ggb2.instance.setValue("showSquare", true);
	ggb1.updateData({ visible: false, disabled: true });
	ggb2.updateData({ visible: false });
	ggb3.updateData({ visible: false, disabled: true });
	text1.updateData({ visible: false});
	text2.updateData({ visible: false, align: "center"});
	text3.updateData({ visible: false});
	text4.updateData({ visible: false});
	text1.instance.setValue("instructionNumber", 2);
	//text2.instance.setValue("instructionNumber", 3);
	text3.instance.setValue("instructionNumber", 4);
	text4.instance.setValue("instructionNumber", 5);
});

////////////////////  VIDEOS  ////////////////////
media3.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("betweentimes", 19, 20, (withinInterval) => {
		if (withinInterval) {
			ggb2.updateData({ visible: true });
		}
	});
	vid.bind("betweentimes", 30, 31, (withinInterval) => {
		if (withinInterval) {
			vid.pause();
			select1.setVisible(true);
			text1.updateData({ visible: true });
		}
	});
	vid.bind("end", () => {
		ggb2.updateData({ visible: true });
		select2.setVisible(true);
		text2.updateData({ visible: true });
		saveData({ videoPlayed: true }, "ggb1");
	});
});
media3a.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {});
});
//show 7 with your tool
media4.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		ggb1.updateData({ disabled: false });
		ggb3.updateData({ disabled: false });
		if (select1.data.selected.includes("2")) {
			ggb1.instance.evalCommand("SetVisibleInView(Follow,1,true)");
		}
		text3.updateData({ visible: true });
		select1.setVisible(true);
		buttonGroup1.updateData({ visible: true });
	});
});
//did you show 7?
media4a.on("ready", ({ data: vid }) => {
	vid.height(332);
	saveData({ count3: 1 }, "ggb1");
	vid.play();
	vid.bind("end", () => {
		buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
		if (select1.data.selected.includes("2")) {
			ggb1.instance.evalCommand("SetVisibleInView(Follow,1,true)");
		}
	});
});
//here, let me help out
media4b.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		media5.updateData({ visible: true });
		media4b.updateData({ visible: false });
		ggb1.instance.setXML(getData("ggbXML", "ggb1"));
		ggb3.instance.setXML(getData("ggbXML3", "ggb1"));
		saveData(
			{
				count: 1,
				holdnum: -1,
				count3: 1,
				firstNum3: -1,
				lastClickedGreaterNum3: -1,
				splatNum: 0,
				click: 0,
				totalCubes: [],
			},
			"ggb1"
		);
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
		//number path
		if (select1.data.selected.includes("0")) {
			ggb3.updateData({ visible: true });
			ggb1.updateData({ visible: false });
			ggb1.instance.setValue("pathBool", true);
			ggb1.instance.setValue("cubesBool", false);
			ggb1.instance.setValue("drawingBool", false);
			ggb3.instance.evalCommand(
				"circle1=Circle((" + 7 + "-0.5,0.5),0.5)"
			);
			ggb3.instance.setFixed("circle1", true, false);
			saveData(
				{
					count3: 2,
					firstNum3: 7,
					lastClickedGreaterNum3: 7,
				},
				"ggb1"
			);
		}
		//cubes
		if (select1.data.selected.includes("1")) {
			ggb1.updateData({ visible: true });
			ggb3.updateData({ visible: false });
			ggb1.instance.setValue("pathBool", false);
			ggb1.instance.setValue("cubesBool", true);
			ggb1.instance.setValue("drawingBool", false);
			for (let i = 0; i < 7; i++) {
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
					"SetConditionToShowObject(BlueCube" + click + ", cubesBool)"
				);
				ggb1.instance.setColor("BlueCube" + click, 0, 127, 175);
				ggb1.instance.setFilling("BlueCube" + click, 0.35);
				ggb1.instance.setFixed("BlueCube" + click, true, false);
				ggb1.instance.setCoords(
					"DragPoint",
					ggb1.instance.getXcoord("BlueStart"),
					ggb1.instance.getYcoord("BlueStart")
				);
				totalCubes.push("BlueCube" + click);
				saveData({ totalCubes: totalCubes }, "ggb1");
				saveData({ click: click + 1 }, "ggb1");
			}
			saveData({ ggbXML: ggb1.instance.getXML() }, "ggb1");
		}
		//draw
		if (select1.data.selected.includes("2")) {
			ggb1.updateData({ visible: true });
			ggb3.updateData({ visible: false });
			ggb1.instance.setValue("pathBool", false);
			ggb1.instance.setValue("cubesBool", false);
			ggb1.instance.setValue("drawingBool", true);
			ggb1.instance.setColor("Follow", 0, 129, 57);
			ggb1.instance.evalCommand("SetVisibleInView(Follow,1,false)");
			for (let i = 0; i < 7; i++) {
				ggb1.instance.evalCommand(
					`Splat${i}=(${2 + (i % 5)},${3 - Math.floor(i / 5)})`
				);
				ggb1.instance.setVisible(`Splat${i}`, true);
			}
			saveData(
				{
					ggbXML: ggb1.instance.getXML(),
					splatNum: 7,
					problem2Correct: true,
				},
				"ggb1"
			);
		}
		buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
		buttonGroup1.updateData({ visible: false });
		buttonGroup2.updateData({ visible: true });
	});
});
media5.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	buttonGroup2.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
	select2.setVisible(false);
	vid.bind("end", () => {
		buttonGroup2.updateSingleButton({ disabled: false, text: "Submit" }, 1);
		buttonGroup2.updateSingleButton({ disabled: false }, 2);
		text3.updateData({ visible: false });
		text4.updateData({ visible: true });
		if (select1.data.selected.includes("2")) {
			ggb1.instance.evalCommand("SetVisibleInView(Follow,1,true)");
		}
	});
});
media5a.on("ready", ({ data: vid }) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		buttonGroup2.updateSingleButton({ disabled: false, text: "Submit" }, 1);
		buttonGroup2.updateSingleButton({ disabled: false }, 2);
		if (select1.data.selected.includes("2")) {
			ggb1.instance.evalCommand("SetVisibleInView(Follow,1,true)");
		}
	});
});
media5b.on("ready", ({ data: vid }) => {
	media5a.updateData({ visible: false });
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		ggb1.instance.evalCommand("SetVisibleInView(Follow,1,false)");
		switch (true) {
			case select1.data.selected.includes("0"):
				ggb3.instance.setXML(getData("ggbXML3", "ggb1"));
				ggb3.instance.evalCommand(
					"circle1=Circle((" + 7 + "-0.5,0.5),0.5)"
				);
				ggb3.instance.setFixed("circle1", true, false);
				for (let i = 6, L = 11; i < L; i++) {
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
				saveData({ click: 7 }, "ggb1");
				for (let i = 7; i < 12; i++) {
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

				for (let i = 0; i < 5; i++) {
					ggb1.instance.evalCommand(
						`Splat${i + 7}=(${9 + (i % 5)},${
							3 - Math.floor(i / 5)
						})`
					);
					ggb1.instance.setVisible(`Splat${i + 7}`, true);
					ggb1.instance.setColor(`Splat${i + 7}`, 0, 129, 57);
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

/////////////////////  7 or 12 SELECT  /////////////////////
//when choice is made, move on
autorun(() => {
	if (select2.data.selected.includes("0")) {
		media3.updateData({ visible: false });
		media3a.updateData({ visible: false });
		media4.updateData({ visible: true });
		select2.setDisabled(true);
		saveData(
			{ problem2aAttempts: getData("problem2aAttempts", "ggb1") + 1 },
			"ggb1"
		);
		text2.updateData({ visible: false });
		separatorRex.updateData({ size: "16px" });
	}
	if (select2.data.selected.includes("1")) {
		media3.updateData({ visible: false });
		media3a.updateData({ visible: true });
		media4.updateData({ visible: false });
		saveData({ problem2aAttempts: 1 }, "ggb1");
		text2.updateData({ visible: false });
		separatorRex.updateData({ size: "16px" });
	}
});

////////////////////  TOOL CHOICE  ////////////////////
//choosing tools
autorun(() => {
	//number path
	if (select1.data.selected.includes("0")) {
		ggb1.instance.setValue("pathBool", true);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", false);
		if (!getData("videoPlayed", "ggb1")) {
			media3.play();
		}
		ggb3.updateData({ visible: true });
		ggb1.updateData({ visible: false });
		text1.updateData({ visible: false });
	}
	//cubes
	if (select1.data.selected.includes("1")) {
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("cubesBool", true);
		ggb1.instance.setValue("drawingBool", false);
		if (!getData("videoPlayed", "ggb1")) {
			media3.play();
		}
		ggb1.updateData({ visible: true });
		ggb3.updateData({ visible: false });
		text1.updateData({ visible: false });
	}
	//draw
	if (select1.data.selected.includes("2")) {
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", true);
		if (!getData("videoPlayed", "ggb1")) {
			media3.play();
		}
		ggb1.updateData({ visible: true });
		ggb3.updateData({ visible: false });
		text1.updateData({ visible: false });
	}
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

////////////////////  BUTTON CONTROLS  ////////////////////
///////////////  buttonGroup1 - find the part  ///////////////
//submit
buttonGroup1.on("click:1", () => {
	ggb1.instance.evalCommand("SetVisibleInView(Follow,1,false)");
	saveData(
		{ problem2bAttempts: getData("problem2bAttempts", "ggb1") + 1 },
		"ggb1"
	);
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	if (ggb1.instance.getValue("currentValue") == 7) {
		ggb1.instance.setColor("Follow", 0, 129, 57);
		saveData(
			{
				ggbXML: ggb1.instance.getXML(),
				ggbXML3: ggb3.instance.getXML(),
				problem2Correct: true,
			},
			"ggb1"
		);
		if (select1.data.selected.includes("0")) {
			ggb3.instance.setValue("showCheck", true);
			setTimeout(() => {
				ggb3.instance.setValue("showCheck", false);
			}, 2000);
		}
		if (
			select1.data.selected.includes("1") ||
			select1.data.selected.includes("2")
		) {
			ggb1.instance.setValue("showCheck", true);
			setTimeout(() => {
				ggb1.instance.setValue("showCheck", false);
			}, 2000);
		}
		media5.updateData({ visible: true });
		media4.updateData({ visible: false });
		media4a.updateData({ visible: false });
		media4b.updateData({ visible: false });
		buttonGroup1.updateData({ visible: false });
		buttonGroup2.updateData({ visible: true });
	}
	if (
		ggb1.instance.getValue("currentValue") != 7 &&
		getData("problem2bAttempts", "ggb1") == 1
	) {
		media4a.updateData({ visible: true });
		media4b.updateData({ visible: false });
		media4.updateData({ visible: false });
	}
	if (
		ggb1.instance.getValue("currentValue") != 7 &&
		getData("problem2bAttempts", "ggb1") == 2
	) {
		media4a.updateData({ visible: false });
		media4b.updateData({ visible: true });
		media4.updateData({ visible: false });
	}

	console.log(
		"Problem 2A:",
		getData("problem2aAttempts", "ggb1"),
		"Problem 2B:",
		getData("problem2bAttempts", "ggb1")
	);
});

//reset
buttonGroup1.on("click:2", () => {
	ggb1.instance.setXML(getData("ggbXML", "ggb1"));
	ggb3.instance.setXML(getData("ggbXML3", "ggb1"));
	saveData(
		{
			count: 1,
			holdnum: -1,
			count3: 1,
			firstNum3: -1,
			lastClickedGreaterNum3: -1,
			splatNum: 0,
			click: 0,
			totalCubes: [],
		},
		"ggb1"
	);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	//number path
	if (select1.data.selected.includes("0")) {
		ggb3.updateData({ visible: true });
		ggb1.updateData({ visible: false });
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
		ggb1.updateData({ visible: true });
		ggb3.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", true);
	}
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
///////////////  buttonGroup2 - find the total  ///////////////
//submit
buttonGroup2.on("click:1", () => {
	ggb1.instance.evalCommand("SetVisibleInView(Follow,1,false)");
	console.log(ggb1.instance.getValue("currentValue"));
	saveData(
		{ problem2cAttempts: getData("problem2cAttempts", "ggb1") + 1 },
		"ggb1"
	);
	buttonGroup2.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
	if (ggb1.instance.getValue("currentValue") == 12) {
		media5.updateData({ visible: false });
		media5a.updateData({ visible: false });
		media5b.updateData({ visible: false });
		if (select1.data.selected.includes("0")) {
			ggb3.instance.setValue("showCheck", true);
			setTimeout(() => {
				saveData({ saveXML: ggb3.instance.getXML() }, "ggb3");
				controls.next();
			}, 2000);
		}
		if (
			select1.data.selected.includes("1") ||
			select1.data.selected.includes("2")
		) {
			ggb1.instance.setValue("showCheck", true);
			setTimeout(() => {
				saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
				controls.next();
			}, 2000);
		}
	}
	if (
		ggb1.instance.getValue("currentValue") != 12 &&
		getData("problem2cAttempts", "ggb1") == 1
	) {
		media5a.updateData({ visible: true });
		media5b.updateData({ visible: false });
		media5.updateData({ visible: false });
	}
	if (
		ggb1.instance.getValue("currentValue") != 12 &&
		getData("problem2cAttempts", "ggb1") == 2
	) {
		media5a.updateData({ visible: false });
		media5b.updateData({ visible: true });
		media5.updateData({ visible: false });
	}
	console.log(
		"Problem 2A:",
		getData("problem2aAttempts", "ggb1"),
		"Problem 2B:",
		getData("problem2bAttempts", "ggb1"),
		"Problem 2C:",
		getData("problem2cAttempts", "ggb1")
	);
});

//reset
buttonGroup2.on("click:2", () => {
	ggb1.instance.setXML(getData("ggbXML", "ggb1"));
	saveData(
		{
			count: 1,
			holdnum: -1,
			splatNum: 7,
			click: 7,
			totalCubes: [
				"BlueCube0",
				"BlueCube1",
				"BlueCube2",
				"BlueCube3",
				"BlueCube4",
				"BlueCube5",
				"BlueCube6",
			],
		},
		"ggb1"
	);
	buttonGroup2.updateSingleButton({ disabled: true }, 2);
	//number path
	if (select1.data.selected.includes("0")) {
		ggb3.updateData({ visible: true });
		ggb1.updateData({ visible: false });
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
		ggb1.updateData({ visible: true });
		ggb3.updateData({ visible: false });
		ggb1.instance.setValue("pathBool", false);
		ggb1.instance.setValue("cubesBool", false);
		ggb1.instance.setValue("drawingBool", true);
	}
	buttonGroup2.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup2.updateSingleButton({ disabled: true }, 2);
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
					if (!getData("problem2Correct", "ggb1")) {
						ggb1.instance.setValue(
							"currentValue",
							getData("firstNum3", "ggb1")
						);
					} else if (getData("problem2Correct", "ggb1")) {
						ggb1.instance.setValue("currentValue", num);
					}
					console.log(
						getData("count3", "ggb1"),
						getData("problem2bAttempts", "ggb1"),
						getData("problem2cAttempts", "ggb1"),
						ggb1.instance.getValue("currentValue")
					);
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
