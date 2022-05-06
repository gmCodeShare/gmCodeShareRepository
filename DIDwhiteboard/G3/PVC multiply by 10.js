const {
	ggb1,
	input1,
	button1,
	buttonGroup1,
	feedback,
	buttonGroup2,
} = components;
feedback.updateData({ visible: false });

slide.on("firstload", () => {
	ggb1.instance.setValue("factor1", 1);
	ggb1.instance.setValue("factor2", 3 * 6);
	ggb1.instance.setValue("factor3", 10);
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup2.updateData({ visible: false });
});

let number1 = 0;
let number2 = 0;
let number3 = 0;
let regex = /(\d+)\\cdot(\d+)?/;

autorun(() => {
	parensFirst = input1.data.text.match(regex);
	console.log(parensFirst);
	console.log("Input: " + input1.data.text);
	if (input1.data.text != "") {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	} else {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	}
	let showButton = ggb1.innerData["factorCase"];
	console.log(showButton);
	if (ggb1.instance.getValue("factorCase") == 3) {
		button1.updateData({ visible: true });
	} else {
		button1.updateData({ visible: false });
	}
});

buttonGroup1.on("click:1", () => {
	if (typeof parensFirst != undefined) {
		buttonGroup2.updateSingleButton(
			{
				text: `$${parensFirst[1]}\\cdot ${
					parensFirst[2] / 10
				}\\cdot 10$`,
			},
			1
		);
		buttonGroup2.updateSingleButton(
			{
				text: `$${parensFirst[1]}\\cdot( ${
					parensFirst[2] / 10
				}\\cdot 10)$`,
			},
			2
		);
		buttonGroup2.updateSingleButton(
			{
				text: `$(${parensFirst[1]}\\cdot ${
					parensFirst[2] / 10
				})\\cdot 10$`,
			},
			3
		);
		ggb1.instance.setValue("factor1", parensFirst[1]);
		ggb1.instance.setValue("factor2", parensFirst[2] / 10);
		ggb1.instance.setValue("factor3", 10);
	}
	buttonGroup2.updateData({ visible: true });
	ggb1.instance.reset();
	buttonGroup1.updateSingleButton({ disabled: false }, 2);

	ggb1.instance.setValue("step", 1);
});

buttonGroup1.on("click:2", () => {
	ggb1.instance.reset();

	input1.updateData({ text: "" });
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

button1.on("click", () => {
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
});

buttonGroup2.on("click:1", () => {
	ggb1.instance.setValue("factorCase", 1);
	ggb1.instance.setValue("factor1", 1);
	ggb1.instance.setValue("factor2", parensFirst[2] * parensFirst[1]);
	ggb1.instance.setValue("factor3", parensFirst[3]);
});
buttonGroup2.on("click:2", () => {
	ggb1.instance.setValue("factorCase", 2);
	ggb1.instance.setValue("factor1", parensFirst[1]);
	ggb1.instance.setValue("factor2", parensFirst[2]);
	ggb1.instance.setValue("factor3", 10);
});
buttonGroup2.on("click:3", () => {
	ggb1.instance.setValue("factorCase", 3);
	ggb1.instance.setValue("factor1", 10);
	ggb1.instance.setValue("factor2", parensFirst[2]);
	ggb1.instance.setValue("factor3", parensFirst[1]);
});
