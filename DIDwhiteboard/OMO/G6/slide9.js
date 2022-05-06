//slide-4d064b09ec0a
const {
	image3,
	ggb1,
	text1,
	cc_submit_231a224eed6a_textbox1: submitText2,
	cc_submit_231a224eed6a_input1: submitInput2,
	cc_submit_231a224eed6a_button1: submitButton2,
} = components;

const id1 = "slide-c3eab3f9862d";
const id1PrevInput1 = getPrevInput(id1, "cc_submit_31e27b14a67f_input1");

text1.updateData({
	text: `You said:  
	>$${id1PrevInput1.data.text}$`,
  });


////////////////////  SLIDELOAD  ////////////////////
slide.on("firstload", () => {
	ggb1.updateData({ visible: false });
	saveData({ q4Correct: false }, "ggb1");
});


////////////////////  BUTTON CONTROLS  ////////////////////

//submit2
submitButton2.on("click", () => {
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

function getPrevInput(slideID, compName = "input1") {
	// find slide num of source
	const slideNum = ((slideId) => {
	  if (
		typeof controls == "undefined" ||
		!controls.slidesNavigationData?.length
	  ) {
		return "missing slide!";
	  }
	  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
	  return allIds.indexOf(slideId) + 1;
	})(slideID);
	// establish default in same data structure as original
	let defInput = {
	  data: {
		text: "",
	  },
	};
	// get previous data
	let prevInput = getFromSlide(slideID, compName, defInput) || defInput;
	// fill in other useful data
	prevInput.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
	prevInput.data.hasData = !!prevInput.data.text;
	prevInput.data.slideNum = slideNum;
	// set text values
	prevInput.data.text = prevInput.data.hasData
	  ? prevInput.data.text
	  : prevInput.data.goBackString;
	prevInput.data.flagText = prevInput.data.hasData
	  ? ""
	  : prevInput.data.goBackString;
	return { ...prevInput };
  }
  
