//slide-7c2bb4549d63
const { media1, ggb1, text1, text2, buttonGroup1 } = components;

////////////////////  SLIDELOAD  ////////////////////
slide.on("firstload", () => {
	saveData(
		{
			q1Correct: false,
			ggbXML: ggb1.instance.getXML(),
			resetXML: ggb1.instance.getXML(),
		},
		"ggb1"
	);
	ggb1.instance.evalCommand("SetVisibleInView(SideHandle,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(SideLowerIndicator,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(SideUpperIndicator,1,false)");
	ggb1.updateData({ visible: false });
	text1.updateData({ visible: false });
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateData({ visible: false });
});

////////////////////  VIDEO LOAD  ////////////////////
media1.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		ggb1.updateData({ visible: true });
		text1.updateData({ visible: true });
		buttonGroup1.updateData({ visible: true });
		media1.updateData({ visible: false });
	});
});
////////////////////  BUTTON CONTROLS  ////////////////////
//buttonGroup1
//submit bg1
buttonGroup1.on("click:1", () => {
	ggb1.instance.evalCommand("SelectObjects()");
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	let TopDenom = ggb1.instance.getValue("TopDenom");
	let SideDenom = ggb1.instance.getValue("SideDenom");
	let clickedVerts = ggb1.instance.getValue("clickedVerts");
	let clickedParts = ggb1.instance.getValue("clickedParts");
	console.log(TopDenom, SideDenom, clickedVerts, clickedParts);
	if (TopDenom==5&&clickedVerts==2) {
		ggb1.instance.setValue("showCheck", true);
		// setTimeout(() => {
		// 	ggb1.instance.setValue("showCheck", false);
		// }, 2000);
	}else{
		ggb1.instance.setValue("showCheck", false);
		text2.updateData({ visible: true });
		switch (true) {
			case TopDenom != 5 && clickedVerts != 2:
				text2.updateData({
					text: `Your tape diagram represents $\\frac{${clickedVerts}}{${TopDenom}}$. Divide the tape into fifths and shade in regions to represent $\\frac{2}{5}$.`,
				});
				break;
			case TopDenom == 5 && clickedVerts != 2:
				text2.updateData({
					text: `Your tape diagram represents $\\frac{${clickedVerts}}{${TopDenom}}$. Shade in regions to represent $\\frac{2}{5}$.`,
				});
				break;
			case TopDenom != 5 && clickedVerts == 2:
				text2.updateData({
					text: `Your tape diagram represents $\\frac{${clickedVerts}}{${TopDenom}}$. Divide the tape into fifths.`,
				});
				break;
			default:
				break;
		}
	}
	saveData({ ggbXML: ggb1.instance.getXML() }, "ggb1");
	utils.RTS.sendData("slide-70413f4e7f20", {
		prompt: 4,
		slide: controls.current,
		attempt: {
			visual2: getData("ggbXML", "ggb1"),
		},
	});
});
//reset bg1
buttonGroup1.on("click:2", () => {
	ggb1.instance.setXML(getData("resetXML", "ggb1"));
	ggb1.instance.evalCommand("SetVisibleInView(SideHandle,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(SideLowerIndicator,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(SideUpperIndicator,1,false)");
	ggb1.instance.registerObjectUpdateListener("TopHandle", makeRects);

	// ggb1.instance.registerClickListener(lightSwitch);
});

////////////////////  AUTORUN  ////////////////////
function handleDrag(){
	text2.updateData({ visible: false });
	let TopDenom = ggb1.innerData["TopDenom"];
	ggb1.instance.getAllObjectNames("boolean").forEach(element => {
		ggb1.instance.setValue(element, false);
	});
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	if (TopDenom == 1) {
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	} else {
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	}
}

//save data on slide change
let now = controls.current;
autorun(() => {
	if (controls.current == now + 1) {
		saveData({ ggbXML: ggb1.instance.getXML() }, "ggb1");
	}
});

////////////////////  TAPE DIAGRAM FUNCTIONS  ////////////////////

ggb1.instance.registerObjectUpdateListener("TopHandle", makeRects);

ggb1.instance.registerClickListener(lightSwitch);

function makeRects() {
	switch (true) {
		case ggb1.instance.getValue("SideDenom") == 1 &&
			ggb1.instance.getValue("TopDenom") == 1:
			ggb1.instance.getAllObjectNames("boolean").forEach((element) => {
				ggb1.instance.setValue(element, false);
			});
			break;
		case ggb1.instance.getValue("movingTop") &&
			ggb1.instance.getValue("SideDenom") == 1:
			console.log("case1: moving top makes vertical rectangles");
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("VertPoly")) {
						ggb1.instance.deleteObject(element);
					}
				});
			makeVertRects();
			//makes vertical rectangles selectable
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("VertPoly")) {
						ggb1.instance.setFixed(element, false, true);
					}
				});
			//makes horizontal rectangles unselectable
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("HorizPoly")) {
						ggb1.instance.setFixed(element, true, false);
					}
				});
			break;
		case ggb1.instance.getValue("movingSide") &&
			ggb1.instance.getValue("TopDenom") == 1:
			console.log("case2: moving side makes horizontal rectangles");

			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("HorizPoly")) {
						ggb1.instance.deleteObject(element);
					}
				});
			makeHorizRects();
			//makes horizontal rectangles selectable
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("HorizPoly")) {
						ggb1.instance.setFixed(element, false, true);
					}
				});
			//makes vertical rectangles unselectable
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("VertPoly")) {
						ggb1.instance.setFixed(element, true, false);
					}
				});
			break;
		case ggb1.instance.getValue("movingTop") &&
			ggb1.instance.getValue("SideDenom") != 1:
			console.log("case3");
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("HorizPoly")) {
						ggb1.instance.setFixed(element, true, false);
					}
				});
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("VertPoly")) {
						ggb1.instance.setFixed(element, false, true);
					}
				});
			makeVertRects();
			break;
		case ggb1.instance.getValue("movingSide") &&
			ggb1.instance.getValue("TopDenom") != 1:
			console.log("case4");
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("VertPoly")) {
						ggb1.instance.setFixed(element, true, false);
					}
				});
			ggb1.instance
				.getAllObjectNames("quadrilateral")
				.forEach((element) => {
					if (element.includes("HorizPoly")) {
						ggb1.instance.setFixed(element, false, true);
					}
				});
			makeHorizRects();
			break;
		default:
			break;
	}
	handleDrag();
}

function makeSmallRects() {
	for (let i = 0, L = ggb1.instance.getValue("TopDenom"); i < L; i++) {
		for (let j = 0, M = ggb1.instance.getValue("SideDenom"); j < M; j++) {
			ggb1.instance.evalCommand(
				"SmallPoly" +
					i +
					j +
					"=Polygon({(" +
					i +
					"*width/TopDenom," +
					j +
					"*width/SideDenom),((" +
					i +
					"+1)*width/TopDenom," +
					j +
					"*width/SideDenom),((" +
					i +
					"+1)*width/TopDenom," +
					(j + 1) +
					"*width/SideDenom),(" +
					i +
					"*width/TopDenom," +
					(j + 1) +
					"*width/SideDenom)})"
			);
			ggb1.instance.evalCommand(
				"SetConditionToShowObject(SmallPoly" +
					i +
					j +
					"," +
					i +
					"<=TopDenom-1&&x(TopHandle)!=width)"
			);
			ggb1.instance.evalCommand("SmallBool" + i + j + "=false");
			ggb1.instance.evalCommand(
				"SetDynamicColor(SmallPoly" +
					i +
					j +
					",If(SmallBool" +
					i +
					j +
					",130/255,1),If(SmallBool" +
					i +
					j +
					",63/255,1),If(SmallBool" +
					i +
					j +
					",152/255,1),0.35)"
			);
			ggb1.instance.evalCommand("SetLayer(SmallPoly" + i + j + ",0)");
		}
	}
}

function makeVertRects() {
	for (let i = 0, L = ggb1.instance.getValue("TopDenom"); i < L; i++) {
		ggb1.instance.evalCommand(
			"VertPoly" +
				i +
				"=Polygon({(" +
				i +
				"*width/TopDenom,0),((" +
				i +
				"+1)*width/TopDenom,0),((" +
				i +
				"+1)*width/TopDenom,width),(" +
				i +
				"*width/TopDenom,width)})"
		);
		ggb1.instance.evalCommand(
			"SetConditionToShowObject(VertPoly" +
				i +
				"," +
				i +
				"<=TopDenom-1&&x(TopHandle)!=width)"
		);
		let booleanArray = ggb1.instance.getAllObjectNames("boolean");
		if (!booleanArray.includes("VertBool" + i)) {
			ggb1.instance.evalCommand("VertBool" + i + "=false");
		}
		ggb1.instance.evalCommand(
			"SetDynamicColor(VertPoly" +
				i +
				",If(VertBool" +
				i +
				",0,1),If(VertBool" +
				i +
				",127/255,1),If(VertBool" +
				i +
				",175/255,1),0.35)"
		);
		ggb1.instance.evalCommand("SetLayer(VertPoly" + i + ",0)");
	}
}

function makeHorizRects() {
	for (let j = 0, M = ggb1.instance.getValue("SideDenom"); j < M; j++) {
		ggb1.instance.evalCommand(
			"HorizPoly" +
				j +
				"=Polygon({(0," +
				j +
				"*width/SideDenom),(0,(" +
				j +
				"+1)*width/SideDenom),(width,(" +
				j +
				"+1)*width/SideDenom),(width," +
				j +
				"*width/SideDenom)})"
		);
		ggb1.instance.evalCommand(
			"SetConditionToShowObject(HorizPoly" +
				j +
				"," +
				j +
				"<=SideDenom-1&&x(SideHandle)!=width)"
		);
		let booleanArray = ggb1.instance.getAllObjectNames("boolean");
		if (!booleanArray.includes("HorizBool" + j)) {
			ggb1.instance.evalCommand("HorizBool" + j + "=false");
		}
		ggb1.instance.evalCommand(
			"SetDynamicColor(HorizPoly" +
				j +
				",If(HorizBool" +
				j +
				",0,1),If(HorizBool" +
				j +
				",129/255,1),If(HorizBool" +
				j +
				",57/255,1),0.35)"
		);
		ggb1.instance.evalCommand("SetLayer(HorizPoly" + j + ",0)");
	}
}

function lightSwitch(clicked) {
	console.log(clicked);
	if (clicked.includes("Vert")) {
		ggb1.instance.setValue(
			"VertBool" + clicked.replace("VertPoly", ""),
			!ggb1.instance.getValue(
				"VertBool" + clicked.replace("VertPoly", "")
			)
		);
		//find out how many are clicked
		ggb1.instance.setValue("clickedVerts", 0);
		for (
			let i = 0, L = ggb1.instance.getValue("TopDenom") + 1;
			i < L;
			i++
		) {
			if (ggb1.instance.getValue("VertBool" + i) == true) {
				ggb1.instance.setValue(
					"clickedVerts",
					ggb1.instance.getValue("clickedVerts") + 1
				);
			}
		}
	}
	if (clicked.includes("Horiz")) {
		ggb1.instance.setValue(
			"HorizBool" + clicked.replace("HorizPoly", ""),
			!ggb1.instance.getValue(
				"HorizBool" + clicked.replace("HorizPoly", "")
			)
		);
		ggb1.instance.setValue("clickedParts", 0);
		for (
			let i = 0, L = ggb1.instance.getValue("TopDenom") + 1;
			i < L;
			i++
		) {
			for (
				let j = 0, M = ggb1.instance.getValue("SideDenom") + 1;
				j < M;
				j++
			) {
				if (ggb1.instance.getValue("HorizBool" + i + j) == true) {
					ggb1.instance.setValue(
						"clickedParts",
						ggb1.instance.getValue("clickedParts") + 1
					);
				}
			}
		}
	}
	console.log(
		ggb1.instance.getValue("clickedVerts"),
		ggb1.instance.getValue("clickedParts")
	);
buttonGroup1.updateSingleButton({disabled: false, text: "Submit"}, 1);
}

////////////////////  SAVE/GET DATA  ////////////////////
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
