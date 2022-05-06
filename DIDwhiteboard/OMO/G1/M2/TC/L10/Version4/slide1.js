const { ggb1, media1, media1a, media1b, media2, buttonGroup1, text1 } =
	components;

////////////////////  SLIDE LOAD  ////////////////////
slide.on("firstload", () => {
	media1a.updateData({ visible: false });
	media1b.updateData({ visible: false });
	media2.updateData({ visible: false });
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	ggb1.updateData({ visible: false });
	saveData({ problem1Attempts: 0 },"ggb1");
	buttonGroup1.updateData({ visible: false });
	text1.updateData({visible: false});
	text1.instance.setValue("instructionNumber", 1);
});

////////////////////  VIDEOS  ////////////////////
media1.on("ready", ({data: vid}) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		ggb1.updateData({ visible: true });
		buttonGroup1.updateData({ visible: true });
		text1.updateData({ visible: true });
	});
});
media1a.on("ready", ({data: vid}) => {
	vid.height(332);
	vid.play();
	//	vid.bind("end", () => {});
});
media1b.on("ready", ({data: vid}) => {
	vid.height(332);
	vid.play();
	vid.bind("end", () => {
		media2.updateData({ visible: true });
		media1b.updateData({ visible: false });
	});
});
media2.on("ready", ({data: vid}) => {
	vid.height(332);
	vid.play();
	ggb1.instance.setTextValue("answer", "3");
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	vid.bind("end", () => {
		controls.next();
	});
});

////////////////////  BUTTON CONTROLS  ////////////////////
autorun(() => {
	let studentInput = ggb1.innerData["answer"];
	if (studentInput == "") {
		buttonGroup1.updateSingleButton({ disabled: true, text: "Submit" }, 1);
	} else {
		buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	}
});

buttonGroup1.on("click:1", () => {
	let studentInput = ggb1.instance.getValueString("answer");
	console.log(
		`problem1Attempts: ${getData(
			"problem1Attempts"
			,"ggb1")} studentInput: ${studentInput}`
	);
	switch (true) {
		case studentInput == "":
			break;
		case studentInput == "3" && getData("problem1Attempts","ggb1") == 0:
			buttonGroup1.updateSingleButton(
				{ disabled: true, text: "Submitted" },
				1
			);
			ggb1.instance.setValue("showCheck", true);
			media1.updateData({ visible: false });
			media1a.updateData({ visible: false });
			media1b.updateData({ visible: false });
			media2.updateData({ visible: true });
			saveData({ problem1Attempts: 1 },"ggb1");
			break;
		case studentInput == "3" && getData("problem1Attempts","ggb1") != 0:
			buttonGroup1.updateSingleButton(
				{ disabled: true, text: "Submitted" },
				1
			);
			ggb1.instance.setValue("showCheck", true);
			media1.updateData({ visible: false });
			media1a.updateData({ visible: false });
			media1b.updateData({ visible: false });
			media2.updateData({ visible: true });
			saveData({ problem1Attempts: getData("problem1Attempts","ggb1") + 1 },"ggb1");
			break;
		case studentInput != "3" && getData("problem1Attempts","ggb1") == 0:
			ggb1.instance.setValue("showCheck", false);
			buttonGroup1.updateSingleButton(
				{ disabled: true, text: "Submitted" },
				1
			);
			media1.updateData({ visible: false });
			media1a.updateData({ visible: true });
			media1b.updateData({ visible: false });
			media2.updateData({ visible: false });
			saveData({ problem1Attempts: 1 },"ggb1");
			break;
		case studentInput != "3" && getData("problem1Attempts","ggb1") == 1:
			ggb1.instance.setValue("showCheck", false);
			buttonGroup1.updateSingleButton(
				{ disabled: true, text: "Submitted" },
				1
			);
			media1.updateData({ visible: false });
			media1a.updateData({ visible: false });
			media1b.updateData({ visible: true });
			media2.updateData({ visible: false });
			saveData({ problem1Attempts: 2 },"ggb1");

			break;
		default:
			break;
	}
	console.log(
		`problem1Attempts: ${getData(
			"problem1Attempts"
			,"ggb1")} studentInput: ${studentInput}`
	);
});

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
