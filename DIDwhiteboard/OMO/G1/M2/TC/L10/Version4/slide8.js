const { table1 } = components;

// function recordAttempt(prompt = 1, data = {}) {
//     utils.RTS.sendData("slide-3d79ba9a5cf4", {
//       prompt,
//       slide: controls.current,
//       attempt: {
//         ...data,
//       },
//     });
//   }

const id1 = "slide-bbb7bd43c6ac";
const id2 = "slide-fd6853a2f0bf";
const id4 = "slide-ce94c903cbac";
const id5 = "slide-faba8298e52d";

const id1PrevGGB1 = getPrevGGB(id1, "ggb1", { problem1Attempts: 0 });
const id2PrevGGB1 = getPrevGGB(id2, "ggb1", {
	problem2aAttempts: 0,
	problem2bAttempts: 0,
	problem2cAttempts: 0,
});
const id4PrevGGB1 = getPrevGGB(id4, "ggb1", { problem3Attempts: 0 });
const id5PrevGGB1 = getPrevGGB(id5, "ggb1", { problem4Attempts: 0 });

console.log(id1PrevGGB1, id2PrevGGB1, id4PrevGGB1, id5PrevGGB1);

if (id1PrevGGB1.storage) {
	table1.updateCell(1, 2, {
		math: true,
		editable: false,
		value: id1PrevGGB1.storage.problem1Attempts,
	});
} else {
	table1.updateCell(1, 2, { math: true, editable: false, value: 0 });
}
if (id2PrevGGB1.storage) {
	table1.updateCell(2, 2, {
		math: true,
		editable: false,
		value: id2PrevGGB1.storage.problem2aAttempts,
	});
	table1.updateCell(3, 2, {
		math: true,
		editable: false,
		value: id2PrevGGB1.storage.problem2bAttempts,
	});
	table1.updateCell(4, 2, {
		math: true,
		editable: false,
		value: id2PrevGGB1.storage.problem2cAttempts,
	});
} else {
	table1.updateCell(2, 2, { math: true, editable: false, value: 0 });
	table1.updateCell(3, 2, { math: true, editable: false, value: 0 });
	table1.updateCell(4, 2, { math: true, editable: false, value: 0 });
}
if (id4PrevGGB1.storage) {
	table1.updateCell(5, 2, {
		math: true,
		editable: false,
		value: id4PrevGGB1.storage.problem3Attempts,
	});
} else {
	table1.updateCell(5, 2, { math: true, editable: false, value: 0 });
}
if (id5PrevGGB1.storage) {
	table1.updateCell(6, 2, {
		math: true,
		editable: false,
		value: id5PrevGGB1.storage.problem4Attempts,
	});
} else {
	table1.updateCell(6, 2, { math: true, editable: false, value: 0 });
}

function getPrevGGB(slideID, compName = "ggb1", innerData, storageComp = "") {
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
	let defGGB = {
		data: {},
		innerData,
	};
	// get previous data
	let prevGGB = getFromSlide(slideID, compName, false) || false;
	// check previous data
	const hasData = !prevGGB
		? false
		: !Object.keys(prevGGB).includes("innerData")
		? false
		: !Object.keys(prevGGB.innerData).length
		? false
		: true;
	let returnGGB = hasData ? prevGGB : defGGB;
	// fill in other useful data
	returnGGB.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
	returnGGB.data.hasData = hasData;
	returnGGB.data.slideNum = slideNum;
	// set text value
	returnGGB.data.flagText = hasData ? "" : returnGGB.data.goBackString;
	// record if there was already data so it doesn't wrongfully overwritten
	// maintain a record of whether we've had data
	const existingData = getData(`oldData${slideID + compName}`, storageComp);
	const hadData = hasData || existingData?.data?.hadData || false;
	if (hasData) {
		// if we have new data, (over)write to save it
		returnGGB.data.hadData = hadData;
		// create a dummy object to pass to updateData
		const newData = {};
		newData[`oldData${slideID + compName}`] = { ...returnGGB };
		// storageComp.updateData(newData);
		saveData(newData, storageComp);
	} else if (existingData?.data?.hasData) {
		// if we don't have new data but there is oldData, grab it
		returnGGB = { ...existingData };
	}
	return { ...returnGGB };
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
