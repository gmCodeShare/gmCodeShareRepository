//slide-352ee5cfff43
const { media1, ggb1, text1} = components;

////////////////////  FIRSTLOAD  ////////////////////
slide.on("firstload", () => {
	saveData({ ggbXML: ggb1.instance.getXML() }, "ggb1");
	ggb1.updateData({ visible: false });
	text1.updateData({visible:false});
});

ggb1.instance.registerClientListener(sharePizza);

////////////////////  VIDEO CONTROLS  ////////////////////
media1.on("ready", ({data: vid}) => {
	vid.play();
	let firstPause=15;
	vid.bind("betweentimes", firstPause, firstPause + 1, (withinInterval) => {
		if (withinInterval) {
			ggb1.updateData({ visible: true });
			text1.updateData({visible:true});
		}
	});
	vid.bind("end", () => {
		utils.RTS.sendData("slide-70413f4e7f20", {
			prompt: 1,
			slide: controls.current,
			attempt: {
				visual1: getData("ggbXML","ggb1"),
			},
		});
	});
});

////////////////////  AUTORUN  ////////////////////
autorun(() => {
	let dragger = ggb1.innerData['myDragger'];
	ggb1.instance.setValue("translationTimer", 0);
	ggb1.instance.setValue("showDelay", 0);
})

////////////////////  PIZZA CONTROLS  ////////////////////
function sharePizza(dragged) {
	if (dragged.target == "myDragger" && dragged.type == "dragEnd") {
		ggb1.instance.setValue("translationTimer", 0);
		ggb1.instance.setAnimating("translationTimer", true);
		ggb1.instance.setValue("showDelay", 0);
		ggb1.instance.setAnimating("showDelay", true);
		ggb1.instance.startAnimation();
	}
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
