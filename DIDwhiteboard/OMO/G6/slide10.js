const { media1, text1 } = components;

////////////////////  SLIDELOAD  ////////////////////
slide.on("slideload", () => {
});

////////////////////  VIDEO CONTROLS  ////////////////////
media1.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
	});
});

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

const id1 = "slide-c3eab3f9862d";
const id2 = "slide-4d064b09ec0a";
const id1PrevInput1 = getPrevInput(id1, "cc_submit_31e27b14a67f_input1");
const id2PrevInput2 = getPrevInput(id2, "cc_submit_231a224eed6a_input1");

text1.updateData({
	text: `You found the value:
  >$${id1PrevInput1.data.text}$  
    
 You said:
  >${id2PrevInput2.data.text}`,
});

function getPrevInput(slideID, compName = "input1") {
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
