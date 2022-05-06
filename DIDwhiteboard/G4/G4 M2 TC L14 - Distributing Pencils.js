const { ggb1, button1 } = components;

ggb1.instance.registerClientListener(breakOut);
ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ disabled: true });

slide.on("firstload", () => {
	const initialXML = ggb1.instance.getXML();
	saveData({ initialXML });
	saveData({ click: 0 });
});

button1.on("click", () => {
	const resetData = getData("initialXML");
	ggb1.instance.setXML(resetData);
	button1.updateData({ disabled: true });
});

function breakOut(grabbed) {
	if (grabbed[0] == "select") {
		name = grabbed[1];
		type = ggb1.instance.getObjectType(grabbed[1]);
		saveData({ click: getData("click") + 1 });
		console.log(getData("click"));
		ggb1.instance.evalCommand(
			"NotCorner" + getData("click") + "=Corner(" + name + ",1)"
		);
		ggb1.instance.setVisible("NotCorner" + getData("click"), false);
	}
	if (grabbed[0] == "dragEnd") {
		type = ggb1.instance.getObjectType(grabbed[1]);
		var xEnd = ggb1.instance.getXcoord("NotCorner" + getData("click"));
		var yEnd = ggb1.instance.getYcoord("NotCorner" + getData("click"));
		if (
			name.includes("casePic") &&
			xEnd > ggb1.instance.getValue("chartWidth") &&
			yEnd > -4
		) {
			ggb1.instance.setVisible(name, false);
			for (var i = 4; i < 14; i++) {
				ggb1.instance.setVisible("boxPic" + i, true);
			}
		}
		if (
			name.includes("boxPic") &&
			xEnd > 2 * ggb1.instance.getValue("chartWidth") &&
			yEnd > -4
		) {
			ggb1.instance.setVisible(name, false);
			for (var i = 7; i < 17; i++) {
				ggb1.instance.setVisible("pencilPic" + i, true);
			}
		}
		button1.updateData({ disabled: false });
	}
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
