const { ggb1, buttonGroup1, checkbox1, checkbox2 } = components;

//global variables governing button states
let empty;
let click = 0;
buttonGroup1.updateSingleButton({ disabled: false }, 1);

//displays a new triangle chosen randomly from the list
buttonGroup1.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(newTriangle)");
});

//displays challenge triangles, disables once all three are complete
buttonGroup1.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(challenge)");
	click++;
	if (click % 3 == 0) {
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	}
});

//resets the demo back to the beginning
buttonGroup1.on("click:3", () => {
	ggb1.instance.evalCommand("RunClickScript(reset)");
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

autorun(() => {
	empty = ggb1.innerData["triListLength"];
	console.log(empty);
	//if there are no more tirangles in the list, it disables the "New Triangle" button
	if (empty == 0) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	} else {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}
	//sets the boolean variables in GGB to the checkbox states
	ggb1.instance.setValue("showAngles", checkbox1.data.checked);
	ggb1.instance.setValue("showSides", checkbox2.data.checked);
});
