const { ggb1, ggb3, buttonGroup1, media6 } = components;
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


////////////////////  VIDEOS  ////////////////////
media6.on("ready", ({data: vid}) => {
	vid.height(332);
	vid.play();
	vid.bind("betweentimes", 30, 31, (withinInterval) => {
		if (withinInterval) {
			if (id1PrevSelect1.data.selected.includes("0")) {
				ggb3.instance.setLineThickness(arcList[6], 10);
				ggb3.instance.setColor(arcList[6], 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("1")) {
				ggb1.instance.setFilling("GreenCube7", 1);
				ggb1.instance.setColor("GreenCube7", 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("2")) {
				ggb1.instance.evalCommand("SplatCircle7=Circle(Splat7,0.5)");
				ggb1.instance.setColor("Splat7", 0, 0, 0);
				ggb1.instance.setColor("SplatCircle7", 0, 0, 0);
				ggb1.instance.setFilling("SplatCircle7", 1);
			}
		}
	});
	vid.bind("betweentimes", 31, 32, (withinInterval) => {
		if (withinInterval) {
			if (id1PrevSelect1.data.selected.includes("0")) {
				ggb3.instance.setLineThickness(arcList[6], 5);
				ggb3.instance.setLineThickness(arcList[7], 10);
				ggb3.instance.setColor(arcList[6], 0, 129, 57);
				ggb3.instance.setColor(arcList[7], 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("1")) {
				ggb1.instance.setFilling("GreenCube7", 0.35);
				ggb1.instance.setFilling("GreenCube8", 1);
				ggb1.instance.setColor("GreenCube7", 0, 129, 57);
				ggb1.instance.setColor("GreenCube8", 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("2")) {
				ggb1.instance.setVisible("SplatCircle7", false);
				ggb1.instance.evalCommand("SplatCircle8=Circle(Splat8,0.5)");
				ggb1.instance.setColor("Splat7", 0, 129, 57);
				ggb1.instance.setFilling("SplatCircle8", 1);
				ggb1.instance.setColor("Splat8", 0, 0, 0);
			}
		}
	});
	vid.bind("betweentimes", 32, 33, (withinInterval) => {
		if (withinInterval) {
			if (id1PrevSelect1.data.selected.includes("0")) {
				ggb3.instance.setLineThickness(arcList[7], 5);
				ggb3.instance.setLineThickness(arcList[8], 10);
				ggb3.instance.setColor(arcList[7], 0, 129, 57);
				ggb3.instance.setColor(arcList[8], 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("1")) {
				ggb1.instance.setFilling("GreenCube8", 0.35);
				ggb1.instance.setFilling("GreenCube9", 1);
				ggb1.instance.setColor("GreenCube8", 0, 129, 57);
				ggb1.instance.setColor("GreenCube9", 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("2")) {
				ggb1.instance.setVisible("SplatCircle8", false);
				ggb1.instance.evalCommand("SplatCircle9=Circle(Splat9,0.5)");
				ggb1.instance.setColor("Splat8", 0, 129, 57);
				ggb1.instance.setColor("SplatCircle9", 0, 0, 0);
				ggb1.instance.setFilling("SplatCircle9", 1);
			}
		}
	});
	vid.bind("betweentimes", 33, 34, (withinInterval) => {
		if (withinInterval) {
			if (id1PrevSelect1.data.selected.includes("0")) {
				ggb3.instance.setLineThickness(arcList[8], 5);
				ggb3.instance.setLineThickness(arcList[9], 10);
				ggb3.instance.setColor(arcList[8], 0, 129, 57);
				ggb3.instance.setColor(arcList[9], 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("1")) {
				ggb1.instance.setFilling("GreenCube9", 0.35);
				ggb1.instance.setFilling("GreenCube10", 1);
				ggb1.instance.setColor("GreenCube9", 0, 129, 57);
				ggb1.instance.setColor("GreenCube10", 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("2")) {
				ggb1.instance.setVisible("SplatCircle9", false);
				ggb1.instance.setColor("Splat9", 0, 129, 57);
				ggb1.instance.evalCommand("SplatCircle10=Circle(Splat10,0.5)");
				ggb1.instance.setColor("SplatCircle10", 0, 0, 0);
				ggb1.instance.setFilling("SplatCircle10", 1);
			}
		}
	});
	vid.bind("betweentimes", 34, 35, (withinInterval) => {
		if (withinInterval) {
			if (id1PrevSelect1.data.selected.includes("0")) {
				ggb3.instance.setLineThickness(arcList[9], 5);
				ggb3.instance.setLineThickness(arcList[10], 10);
				ggb3.instance.setColor(arcList[9], 0, 129, 57);
				ggb3.instance.setColor(arcList[10], 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("1")) {
				ggb1.instance.setFilling("GreenCube10", 0.35);
				ggb1.instance.setFilling("GreenCube11", 1);
				ggb1.instance.setColor("GreenCube10", 0, 129, 57);
				ggb1.instance.setColor("GreenCube11", 0, 0, 0);
			}
			if (id1PrevSelect1.data.selected.includes("2")) {
				ggb1.instance.setVisible("SplatCircle10", false);
				ggb1.instance.setColor("Splat10", 0, 129, 57);
				ggb1.instance.evalCommand("SplatCircle11=Circle(Splat11,0.5)");
				ggb1.instance.setColor("SplatCircle11", 0, 0, 0);
				ggb1.instance.setFilling("SplatCircle11", 1);
			}
		}
	});
	vid.bind("betweentimes", 35, 36, (withinInterval) => {
		if (withinInterval) {
			if (id1PrevSelect1.data.selected.includes("0")) {
				ggb3.instance.setLineThickness(arcList[10], 5);
				ggb3.instance.setColor(arcList[10], 0, 129, 57);
			}
			if (id1PrevSelect1.data.selected.includes("1")) {
				ggb1.instance.setFilling("GreenCube11", 0.35);
				ggb1.instance.setColor("GreenCube11", 0, 129, 57);
			}
			if (id1PrevSelect1.data.selected.includes("2")) {
				ggb1.instance.setVisible("SplatCircle11", false);
			}
		}
	});
	vid.bind("end", () => {
		controls.next();
	});
});

////////////////////  GET/SAVE DATA  ////////////////////
//get from slide 2
const id1 = "slide-fd6853a2f0bf";
const id1PrevSelect1 = getPrevSelect(id1, "select1");
const id1GGB1Storage = getPrevStorage(id1, "ggb1");

if (
	(id1GGB1Storage.saveXML && id1PrevSelect1.data.selected.includes("1")) ||
	(id1GGB1Storage.saveXML && id1PrevSelect1.data.selected.includes("2"))
) {
	ggb1.updateData({ visible: true });
	ggb3.updateData({ visible: false });
	ggb1.instance.setXML(id1GGB1Storage.saveXML);
	ggb1.instance.setValue("showCheck", false);
}

const id1GGB3Storage = getPrevStorage(id1, "ggb3");

if (id1GGB3Storage.saveXML && id1PrevSelect1.data.selected.includes("0")) {
	ggb1.updateData({ visible: false });
	ggb3.updateData({ visible: true });
	ggb3.instance.setXML(id1GGB3Storage.saveXML);
	ggb3.instance.setValue("showCheck", false);
	ggb3.instance.setValue("showHoverState", false);
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
