const { ggb1, input1, buttonGroup1 } = components;

ggb1.instance.setValue("step", 0);
slide.on("firstload", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	ggb1.updateData({ flag: false });
});
let number1 = 0;
let number2 = 0;
let regex = /\d+/;
let regex2 = /\-\d+/;

autorun(() => {
	let visibleBool = ggb1.innerData["subtractReady"];
	if (visibleBool && !ggb1.data.flag) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	} else {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	}

	if (input1.data.text.match(regex) != null) {
		number1 = input1.data.text.match(regex)[0];
		console.log(number1);
	}
	if (input1.data.text.match(regex2) != null) {
		number2 = -1 * input1.data.text.match(regex2)[0];
		console.log(number2);
	}
});

buttonGroup1.on("click:1", () => {
	ggb1.updateData({ flag: false });
	ggb1.instance.setValue("subt1", number1);
	ggb1.instance.setValue("subt2", number2);
	ggb1.instance.evalCommand("RunClickScript(subtract)");
	ggb1.instance.setValue("step", 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
	if (number1 == number2) {
		ggb1.instance.setValue("subtractReady", true);
	}
});

buttonGroup1.on("click:2", () => {
	ggb1.instance.setValue("step", 2);
	ggb1.instance.evalCommand("RunClickScript(button1)");
	ggb1.updateData({ flag: true });
});

buttonGroup1.on("click:3", () => {
	ggb1.instance.evalCommand("RunClickScript(reset)");
	ggb1.instance.setValue("step", 3);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	ggb1.updateData({ flag: false });
});
