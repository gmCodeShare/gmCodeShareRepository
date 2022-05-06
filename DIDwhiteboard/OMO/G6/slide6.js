//slide-7c2bb4549d63
const {
	media1,
	ggb1,
	text1,
	text2,
	image1,
	cc_submit_8d5f0daa1065_textbox1: text3,
	cc_submit_8d5f0daa1065_input1: input3,
	cc_submit_8d5f0daa1065_button1: button3,
} = components;

//import GGB from slide 5
const id1 = "slide-8528cc63e2e2";
const id1GGB1Storage = getPrevStorage(id1, "ggb1");
if (id1GGB1Storage.ggbXML) {
	//update GGB to reflect student work
	ggb1.instance.setXML(id1GGB1Storage.ggbXML);

		//if not correct
		let SideDenom = ggb1.instance.getValue(`SideDenom`);
		if (SideDenom != 4) {
			console.log("SideDenom:", SideDenom);
			ggb1.instance.setCoords("SideHandle", 0, 9);
			makeHorizRects();
			SideDenom = ggb1.instance.getValue(`SideDenom`);
			console.log("SideDenom:", SideDenom);
		}
		let clickedParts = ggb1.instance.getValue(`clickedParts`);
		if (clickedParts != 1) {
			console.log("SideDenom:", SideDenom, "clickedParts:", clickedParts);
			ggb1.instance.getAllObjectNames("boolean").forEach((element) => {
				if (element.includes("Horiz")) {
					ggb1.instance.setValue(element, false);
				}
			});
			ggb1.instance.setValue("HorizBool0", true);
	}
	
	//set all fixed and handles not visible
	ggb1.instance.getAllObjectNames().forEach((element) => {
		ggb1.instance.setFixed(element, true, false);
	});
	ggb1.instance.setValue("showCheck", false);
	ggb1.instance.evalCommand("SetVisibleInView(SideHandle,1,false)");

} else {
	ggb1.instance.setCoords("TopHandle", 2.4, 12);
	ggb1.instance.setCoords("SideHandle", 0, 9);
	makeVertRects();
	makeHorizRects();
	ggb1.instance.getAllObjectNames("boolean").forEach((element) => {
		ggb1.instance.setValue(element, false);
	});
	ggb1.instance.setValue("VertBool0", true);
	ggb1.instance.setValue("VertBool1", true);
	ggb1.instance.setValue("HorizBool0", true);

	ggb1.instance.evalCommand("SetVisibleInView(SideHandle,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(SideLowerIndicator,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(SideUpperIndicator,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(TopHandle,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(TopLeftIndicator,1,false)");
	ggb1.instance.evalCommand("SetVisibleInView(TopRightIndicator,1,false)");
	ggb1.instance.getAllObjectNames().forEach((element) => {
		ggb1.instance.setFixed(element, true, false);
	});
}

////////////////////  SLIDELOAD  ////////////////////
slide.on("firstload", () => {
	saveData(
		{
			q3Correct: false,
		},
		"ggb1"
	);
	image1.updateData({ visible: false });
	text2.updateData({ visible: false });
});

////////////////////  VIDEO LOAD  ////////////////////
media1.on("ready", ({ data: vid }) => {
	vid.play();
	let startTime = 15;
	vid.bind("betweentimes", startTime, startTime, (withinInterval) => {
		if (withinInterval) {
			ggb1.updateData({ visible: true });
		}
	});
	vid.bind("end", () => {
		//	media1.updateData({ visible: false });
	});
});

////////////////////  BUTTON CONTROLS  ////////////////////
//submit3
button3.on("click", () => {
	let studentResponse = input3.data;
	let regExp = /\+|\-|\/|\\frac{\\frac{|\\cdot/g;
	const result3 = utils.math.evaluateLatex(input3.data.text);
	if (!result3.error && result3.value == 0.1) {
		switch (regExp.test(studentResponse)) {
			case true:
				console.log(
					"no error, evaluates correctly, more than one term"
				);
				saveData({ q3Correct: false }, "ggb1");
				text2.updateData({ visible: true });
				break;
			case false:
				console.log("no error, evaluates correctly, only one term");
				saveData({ q3Correct: true }, "ggb1");
				image1.updateData({ visible: true });
				text2.updateData({ visible: false });
				// setTimeout(() => {
				// 	image1.updateData({ visible: false });
				// }, 2000);
				break;
			default:
				break;
		}
	}
	if (result3.error || result3.value != "0.1") {
		console.log("error or evaluates incorrectly");
		saveData({ q3Correct: false }, "ggb1");
		text2.updateData({ visible: true });
	}
	utils.RTS.sendData("slide-70413f4e7f20", {
		prompt: 6,
		slide: controls.current,
		attempt: {
			result: input3.data.text,
		},
	});
});

////////////////////  TAPE DIAGRAM FUNCTIONS  ////////////////////

ggb1.instance.registerObjectUpdateListener("TopHandle", makeRects);
ggb1.instance.registerObjectUpdateListener("SideHandle", makeRects);
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
	if (clicked.includes("Vert")) {
		ggb1.instance.setValue(
			"VertBool" + clicked.replace("VertPoly", ""),
			!ggb1.instance.getValue(
				"VertBool" + clicked.replace("VertPoly", "")
			)
		);
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
