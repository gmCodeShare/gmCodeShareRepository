const { ggb1, buttonGroup1 } = components;

buttonGroup1.updateSingleButton({ disabled: true }, 3);
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 4);
let click = 0;

buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: false }, 4);
	ggb1.instance.evalCommand("RunClickScript(button3)");
	if (click == 0 || click == 2) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	}
	if (click == 4) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
		buttonGroup1.updateSingleButton({ disabled: false }, 3);
	}
	click++;
});

buttonGroup1.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(button1)");
	if (click == 1 || click == 3) {
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}
	click++;
});

buttonGroup1.on("click:3", () => {
	ggb1.instance.evalCommand("RunClickScript(button4)");
	if (click == 5) {
		buttonGroup1.updateSingleButton({ disabled: true }, 3);
	}
	click++;
});

buttonGroup1.on("click:4", () => {
	ggb1.instance.evalCommand("RunClickScript(button2)");
	click = 0;
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});
