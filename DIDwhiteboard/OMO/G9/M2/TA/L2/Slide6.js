//slide-9904fc72d223

const { text1,text2, ggb1, buttonGroup1 } = components;

slide.on("firstload", () => {
	ggb1.instance.setValue("animationOn", false);
	ggb1.instance.setValue("showSI", true);
	ggb1.instance.setValue("showCheck", false);
	ggb1.instance.setCoords("B", 0, 6);
	text2.updateData({visible: false});
});

////////////////////  SETTING TEXT  ////////////////////
const id1 = "slide-25a189f8d901";
const id1FIB = getPrevFIB(id1, "fib1", 1);
const id2FIB = getPrevFIB(id1, "fib2", 1);
let slope = ggb1.instance.getValue("Slope(g)");
let yInt = ggb1.instance.getValue("g(0)");


////////////////////  BUTTON DISABLING  ////////////////////
//sets initial x and y values of points
let x1 = ggb1.innerData["B"][0];
let y1 = ggb1.innerData["B"][1];
let x2 = ggb1.innerData["C"][0];
let y2 = ggb1.innerData["C"][1];

//if points are both moved, enable graph button and hide line
autorun(() => {
	let P1 = ggb1.innerData["B"];
	let P2 = ggb1.innerData["C"];
	ggb1.instance.setAnimating(false);
	ggb1.instance.setValue("showCheck", false);

	if (P1[0] != x1 || P1[1] != y1 || P2[0] != x2 || P2[1] != y2) {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
		ggb1.instance.setValue("time", 0);
	}
	slope = ggb1.instance.getValue("Slope(g)");

});

////////////////////  BUTTON CONTROLS  ////////////////////
//graphs line
buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	text2.updateData({ visible: false });
	ggb1.instance.setValue("showCheck", false);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	x1 = ggb1.innerData["B"][0];
	y1 = ggb1.innerData["B"][1];
	x2 = ggb1.innerData["C"][0];
	y2 = ggb1.innerData["C"][1];
	//ggb1.instance.setVisible("Slide4Line", true);
	setTimeout(() => {
	//	ggb1.instance.setVisible("Slide4Line", false);
		console.log(ggb1.instance.getValue("Slope(Slide4Line)"), slope);
		if (
			ggb1.instance.getValue("Slope(Slide4Line)") == slope &&
			x1 == 0 &&
			y1 == 4
		) {
			ggb1.instance.setValue("showCheck", true);
			text2.updateData({ visible: false });
		} else {
			ggb1.instance.setValue("showCheck", false);
			if (ggb1.instance.getValue("Slope(g)") == Math.floor(ggb1.instance.getValue("Slope(g)"))) {
				text2.updateData({
					visible: true, text: `You graphed a line with a slope of $${ggb1.instance.getValue("Slope(g)")}$ and a $y$-intercept of $${ggb1.instance.getValue("g(0)")}$. Graph the line with a slope of $-2$ and a $y$-intercept of $4$.`,
				});
			} else {
				if (ggb1.instance.getValue("Slope(g)") > 0) {
					text2.updateData({
						visible: true, text: `You graphed a line with a slope of $\\frac{${ggb1.instance.getValue("abs(Numerator(Slope(g)))")}}{${ggb1.instance.getValue("Denominator(Slope(g))")}}$ and a $y$-intercept of $${ggb1.instance.getValue("g(0)")}$. Graph the line with a slope of $-2$ and a $y$-intercept of $4$.`,
					});
				} else {
					text2.updateData({
						visible: true, text: `You graphed a line with a slope of $\-\\frac{${ggb1.instance.getValue("abs(Numerator(Slope(g)))")}}{${ggb1.instance.getValue("Denominator(Slope(g))")}}$ and a $y$-intercept of $${ggb1.instance.getValue("g(0)")}$. Graph the line with a slope of $-2$ and a $y$-intercept of $4$.`,
					});
				}
			}
		}
	}, 2000);
});

////////////////////  DATA MANAGEMENT  ////////////////////

function getPrevFIB(slideID, compName = "fib1", inputs = 0) {
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
	let defFib = {
		data: { values: [] },
	};
	const prelimFib = getFromSlide(slideID, compName, defFib) || defFib;
	const numInputs = !!prelimFib.data?.values?.length
		? prelimFib.data.values.length
		: inputs;
	for (let i = 0; i < numInputs; i++) {
		defFib.data.values.push({ text: "", inputType: "text" });
	}
	// get previous data
	let prevFib = getFromSlide(slideID, compName, defFib) || defFib;
	// check previous data, fill in useful data
	prevFib.data.hasData = prevFib.data.values.some(
		({ text, inputType }) => !!text
	);
	prevFib.data.isComplete = prevFib.data.values.every(
		({ text, inputType }) => !!text
	);
	prevFib.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
	prevFib.data.slideNum = slideNum;
	prevFib.data.flagText = prevFib.data.isComplete
		? ""
		: prevFib.data.goBackString;
	// add some useful methods
	prevFib.getInput = function (position, leaveBlanks = false) {
		const emptyVal = leaveBlanks ? "" : this.data.goBackString;
		let text = this.data?.values?.[position]?.text
			? this.data.values[position].text
			: emptyVal;
		return { ...this.data.values[position], text };
	};
	return { ...prevFib };
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
