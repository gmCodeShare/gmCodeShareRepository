//slide-6f24135ecc1e

const { ggb1, media1, buttonGroup1 } = components;

//disable button at first
slide.on("firstload", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

//sets initial x and y values of points
let x1 = ggb1.innerData["C"][0];
let y1 = ggb1.innerData["C"][1];
let x2 = ggb1.innerData["E"][0];
let y2 = ggb1.innerData["E"][1];
let firstTime = true;

//if points are both moved, enable graph button and hide line
autorun(() => {
	let P1 = ggb1.innerData["C"];
	let P2 = ggb1.innerData["E"];
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	ggb1.instance.setValue("time", 0);
});

autorun(() => {
	let timer = ggb1.innerData["time"];
	if (timer > 0.9) {
		ggb1.instance.setVisible("text11", true);
		ggb1.instance.setVisible("text12", true);
	} else {
		ggb1.instance.setVisible("text11", false);
		ggb1.instance.setVisible("text12", false);
	}
});
////////////////////  BUTTON CONTROLS  ////////////////////
//graphs line
buttonGroup1.on("click:1", () => {
	firstTime = false;
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	x1 = ggb1.innerData["C"][0];
	y1 = ggb1.innerData["C"][1];
	x2 = ggb1.innerData["E"][0];
	y2 = ggb1.innerData["E"][1];
	saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
});

////////////////////  VIDEO CONTROLS  ////////////////////
media1.on("ready", ({ data: vid }) => {
	//	vid.play();
});

//saves work for next slide
ggb1.instance.registerStoreUndoListener(() => {
	saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
});

////////////////////  DATA MANAGEMENT  ////////////////////
//save data for slide 2
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
