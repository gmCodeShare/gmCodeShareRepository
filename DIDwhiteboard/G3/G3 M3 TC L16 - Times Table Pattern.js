const { ggb1, buttonGroup1, buttonGroup2 } = components;

slide.on("firstload", () => {
	buttonGroup2.updateData({ visible: false });
	ggb1.instance.setValue("reveal", false);
	ggb1.instance.setValue("revealOne", false);
});

alwaysShow = [
	"F1",
	"F2",
	"F3",
	"F4",
	"F5",
	"F6",
	"F7",
	"F8",
	"F9",
	"F10",
	"F11",
	"F12",
	"F157",
	"F158",
	"F159",
	"F160",
	"F161",
	"F162",
	"F163",
	"F164",
	"F165",
	"F166",
	"F167",
	"F168",
	"F169",
];
possibleText = [];

//hides text except gray boxes
for (let i = 1; i < 170; i++) {
	ggb1.instance.setVisible("F" + i, false);
	possibleText.push("F" + i);
}
for (let i = 0, L = alwaysShow.length; i < L; i++) {
	ggb1.instance.setVisible(alwaysShow[i], true);
}

//Show all numbers
buttonGroup1.on("click:1", () => {
	for (let i = 1; i < 170; i++) {
		ggb1.instance.setVisible("F" + i, true);
	}
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

//Clear all numbers
buttonGroup1.on("click:2", () => {
	for (let i = 1; i < 170; i++) {
		ggb1.instance.setVisible("F" + i, false);
	}
	for (let i = 0, L = alwaysShow.length; i < L; i++) {
		ggb1.instance.setVisible(alwaysShow[i], true);
	}
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	ggb1.instance.setValue("reveal", false);
	ggb1.instance.setValue("revealOne", false);
});

//Reveal
buttonGroup2.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	ggb1.instance.setValue("revealOne", true);
	buttonGroup2.updateSingleButton({ disabled: true }, 1);
	const area = ggb1.instance.getValue("area");
	for (let i = 0, L = possibleText.length; i < L; i++) {
		console.log(
			ggb1.instance.getValue(
				"IsInRegion(A,Circle(Corner(" + possibleText[i] + ",2),1))"
			)
		);
		if (
			ggb1.instance.getValueString(possibleText[i]) == area &&
			ggb1.instance.getValue(
				"IsInRegion(A,Circle(Corner(" + possibleText[i] + ",2),1))"
			)
		) {
			ggb1.instance.setVisible(possibleText[i], true);
		}
	}
});

//Reveal other facts
buttonGroup2.on("click:2", () => {
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	ggb1.instance.setValue("reveal", true);
	buttonGroup2.updateSingleButton({ disabled: true }, 2);
	const area = ggb1.instance.getValue("area");
	for (let i = 0, L = possibleText.length; i < L; i++) {
		if (ggb1.instance.getValueString(possibleText[i]) == area) {
			ggb1.instance.setVisible(possibleText[i], true);
		}
	}
});

autorun(() => {
	let handle = ggb1.innerData["A"];
	buttonGroup2.updateSingleButton({ disabled: false }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
	if (handle[0] != 0 && handle[1] != 12) {
		buttonGroup2.updateData({ visible: true });
	}
});
