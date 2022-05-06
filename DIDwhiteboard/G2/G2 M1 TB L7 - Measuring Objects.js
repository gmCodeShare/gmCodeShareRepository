const { ggb1, buttonGroup1, select1, button1 } = components;

//global variable
var next = 2;
var rulers = ggb1.instance.getValue("rulers");
var blocks = ggb1.instance.getValue("blocks");
var timeMax = ggb1.instance.getValue("timeMax");
let flip = 0;
let saved = false;

ggb1.updateData({ visible: false });
buttonGroup1.updateData({ visible: false });

//sets initial values for applet
ggb1.instance.setValue("rulers", 0);
ggb1.instance.setValue("blocks", 0);

//measure button
button1.on("click", () => {
	select1.setVisible(false);
	button1.updateData({ visible: false });
	ggb1.updateData({ visible: true });
	buttonGroup1.updateData({ visible: true });
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	buttonGroup1.updateSingleButton({ disabled: true }, 4);
});

// generates an array with the names of each selected element in original order
function selectedLabels(selectComponent) {
	let selected = [...selectComponent.data.selected];
	// create an array out of the labels for each element of the selected array
	let labels = selected.map(
		(index) => selectComponent.data.options[parseInt(index)].label
	);
	let options = [...selectComponent.data.options];
	// create an array out of the labels for each element of the options array
	let optionLabels = options.map((element) => element.label);
	// grab only elements from options that also appear in selected
	return optionLabels.filter((value) => labels.includes(value));
}

// generates an array with the names of each selected element in order chosen by user
function selectedLabelsOrdered(selectComponent) {
	let selected = [...selectComponent.data.selected];
	// create an array out of the labels for each element of the selected array
	return selected.map(
		(index) => selectComponent.data.options[parseInt(index)].label
	);
}

select1.on("change", ({ selected }) => {
	ggb1.instance.evalCommand("RunClickScript(button2)");
	switch (selectedLabels(select1)[0]) {
		case "Feather":
			ggb1.instance.setValue("selectedElement", 1);
			break;
		case "Sneaker":
			ggb1.instance.setValue("selectedElement", 2);
			break;
		case "Stapler":
			ggb1.instance.setValue("selectedElement", 3);
			break;
		case "Pink Eraser":
			ggb1.instance.setValue("selectedElement", 4);
			break;
		case "Whiteboard Eraser":
			ggb1.instance.setValue("selectedElement", 5);
			break;
		case "Carrot":
			ggb1.instance.setValue("selectedElement", 6);
			break;
		case "Toy Car":
			ggb1.instance.setValue("selectedElement", 7);
			break;
		case "Bear":
			ggb1.instance.setValue("selectedElement", 8);
			break;
		case "Recorder":
			ggb1.instance.setValue("selectedElement", 9);
			break;
	}
	console.log(ggb1.instance.getValue("selectedElement"));
});

autorun(() => {
	count();
	let timer = ggb1.innerData["time"];
	if (timer >= 10 * rulers + blocks) {
		buttonGroup1.updateSingleButton({ disabled: false }, 3);
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
		ggb1.instance.stopAnimation();
	}
});

autorun(() => {
	let rulers = ggb1.innerData["rulers"];
	let blocks = ggb1.innerData["blocks"];
	if (Number.isNaN(rulers) || Number.isNaN(blocks)) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	} else {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}
	count();
});

//sets the number of bounces for the squares
function count() {
	rulers = ggb1.instance.getValue("rulers");
	blocks = ggb1.instance.getValue("blocks");
}

//measure button
buttonGroup1.on("click:1", () => {
	if (rulers != 0 || blocks != 0) {
		ggb1.instance.evalCommand("RunClickScript(button1)");
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
		buttonGroup1.updateSingleButton({ disabled: false }, 4);
		buttonGroup1.updateSingleButton({ disabled: true }, 5);
	}
});

//pause/play button
buttonGroup1.on("click:2", () => {
	flip++;
	if (flip % 2 == 0) {
		ggb1.instance.startAnimation();
		buttonGroup1.updateSingleButton({ text: "Pause" }, 2);
	} else {
		ggb1.instance.stopAnimation();
		buttonGroup1.updateSingleButton({ text: "Play" }, 2);
	}
});

//save button
buttonGroup1.on("click:3", () => {
	ggb1.instance.evalCommand("RunClickScript(button3)");
	saved = true;
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

//clear button
buttonGroup1.on("click:4", () => {
	ggb1.instance.evalCommand("RunClickScript(button2)");
	saved = false;
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	buttonGroup1.updateSingleButton({ disabled: true }, 4);
	buttonGroup1.updateSingleButton({ disabled: false }, 5);
});

//choose another button
buttonGroup1.on("click:5", () => {
	select1.setVisible(true);
	button1.updateData({ visible: true });
	ggb1.updateData({ visible: false });
	buttonGroup1.updateData({ visible: false });
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 4);
});
