//slide-389f17967cf9

const {
	ggb1,
	media2,
	cc_submit_c0507f8ff1fb_textbox1: text1,
	cc_submit_c0507f8ff1fb_button1: button1,
	cc_submit_c0507f8ff1fb_input1: input1,
	cc_submit_1efd15790434_textbox1: text2,
	cc_submit_1efd15790434_input1: input2,
	cc_submit_1efd15790434_button1: button2,
} = components;

//hide submit components
slide.on("firstload", () => {
	text1.updateData({visible: false});
	input1.updateData({visible: false});
	button1.updateData({visible: false});
	text2.updateData({visible: false});
	input2.updateData({visible: false});
	button2.updateData({visible: false});
});

//play video when available, show submit at end and hide GGB
media2.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		ggb1.updateData({ visible: false });
		text1.updateData({ visible: true });
		input1.updateData({ visible: true });
		button1.updateData({ visible: true });
	});
});
//show second submit on first submit
button1.on("click", () => {
	text2.updateData({ visible: true });
	input2.updateData({ visible: true });
	button2.updateData({ visible: true });
});

////////////////////  DATA MANAGEMENT  ////////////////////

//get and set previous ggb
const id1 = "slide-6f24135ecc1e";

const id1GGB1Storage = getPrevStorage(id1, "ggb1");

if (id1GGB1Storage.saveXML) {
	ggb1.instance.setXML(id1GGB1Storage.saveXML);
	ggb1.instance.setValue("time", 1);
	ggb1.instance.setFixed("C", true, false);
	ggb1.instance.setFixed("E", true, false);
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
