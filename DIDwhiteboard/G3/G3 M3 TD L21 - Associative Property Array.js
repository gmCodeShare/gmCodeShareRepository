const { ggb1, input1, button1, buttonGroup1, buttonGroup2 } = components;

//swap out the asterisk or hand-typed x with a times sign
autorun(() => {
	if (input1.data.text.includes("cdot")) {
		input1.updateData({
			text: input1.data.text.replace("\\cdot", "\\times"),
		});
	}
	if (input1.data.text.includes("x")) {
		input1.updateData({
			text: input1.data.text.replace("x", "\\times"),
		});
	}
});

slide.on("firstload", () => {
	//don't choose how to break apart the factors yet
	ggb1.instance.setValue("factorCase", 0);
	// ggb1.instance.setValue("factor1", 1);
	// ggb1.instance.setValue("factor2", 3 * 6);
	// ggb1.instance.setValue("factor3", 10);
	// buttonGroup1.updateSingleButton({ disabled: true }, 1);
	// buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup2.updateData({ visible: false });
});

let number1 = 0;
let number2 = 0;
let number3 = 0;
let regex = /(\d+)\\times(\d+)?/;

autorun(() => {
	parensFirst = input1.data.text.match(regex);
	console.log("ParensFirst: " + parensFirst, typeof parensFirst);
	console.log("Input: " + input1.data.text);
	if (
		input1.data.text != "" &&
		ggb1.instance.getValue("factorCase") == 0 &&
		regex.test(input1.data.text)
	) {
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

//break apart a factor button
buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	if (
		typeof parensFirst != undefined &&
		parensFirst[2] / 10 == Math.floor(parensFirst[2] / 10)
	) {
		buttonGroup2.updateSingleButton(
			{
				text: `$${parensFirst[1]}\\times ${
					parensFirst[2] / 10
				}\\times 10$`,
			},
			1
		);

		buttonGroup2.updateSingleButton(
			{
				text: `$${parensFirst[1]}\\times ( ${
					parensFirst[2] / 10
				}\\times 10)$`,
			},
			2
		);
		buttonGroup2.updateSingleButton(
			{
				text: `$(${parensFirst[1]}\\times ${
					parensFirst[2] / 10
				})\\times 10$`,
			},
			3
		);
		ggb1.instance.setValue("factor1", parensFirst[2] / 10);
		ggb1.instance.setValue("factor2", parensFirst[1]);
		ggb1.instance.setValue("factor3", 10);
		buttonGroup2.updateData({ visible: true });
	} else {
		buttonGroup2.updateSingleButton({ visible: false });
	}

	ggb1.instance.setVisible("ySlider", false);
	ggb1.instance.reset();
	buttonGroup2.updateSingleButton({ disabled: false }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
	buttonGroup2.updateSingleButton({ disabled: false }, 3);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	ggb1.instance.setValue("factorCase", 0);
});

//reset
buttonGroup1.on("click:2", () => {
	ggb1.instance.reset();
	buttonGroup2.updateData({ visible: false });
	button1.updateData({ disabled: false });
	input1.updateData({ text: "" });
	ggb1.instance.setValue("factorCase", 0);
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

button1.on("click", () => {
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	ggb1.instance.setVisible("text4", true);
	ggb1.instance.setVisible("u", true);
	button1.updateData({ disabled: true });
});

buttonGroup2.on("click:1", () => {
	ggb1.instance.reset();
	ggb1.instance.setValue("factorCase", 1);
	ggb1.instance.setValue("factor1", 1);
	ggb1.instance.setValue(
		"factor2",
		(parensFirst[2] / 10) * parensFirst[1] - 1
	);
	ggb1.instance.setValue("factor3", 10);
	ggb1.instance.setValue("step", 1);
	console.log(
		"first button: ",
		ggb1.instance.getValue("step"),
		ggb1.instance.getValue("factorCase"),
		ggb1.instance.getValue("factor2"),
		ggb1.instance.getValue("factor3")
	);
	buttonGroup2.updateSingleButton({ disabled: true }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
	buttonGroup2.updateSingleButton({ disabled: false }, 3);
	ggb1.instance.setVisible("ySlider", true);
});
buttonGroup2.on("click:2", () => {
	ggb1.instance.reset();
	ggb1.instance.setValue("factorCase", 2);
	ggb1.instance.setValue("factor1", parensFirst[1]);
	ggb1.instance.setValue("factor2", parensFirst[2] / 10);
	ggb1.instance.setValue("factor3", 10);
	ggb1.instance.setValue("step", 1);
	console.log(
		ggb1.instance.getValue("step"),
		ggb1.instance.getValue("factorCase")
	);
	buttonGroup2.updateSingleButton({ disabled: false }, 1);
	buttonGroup2.updateSingleButton({ disabled: true }, 2);
	buttonGroup2.updateSingleButton({ disabled: false }, 3);
	ggb1.instance.setVisible("ySlider", true);
});
buttonGroup2.on("click:3", () => {
	ggb1.instance.reset();
	ggb1.instance.setValue("factorCase", 3);
	ggb1.instance.setValue("factor1", 1);
	ggb1.instance.setValue("factor3", parensFirst[2] / 10);
	ggb1.instance.setValue("factor2", parensFirst[1]);
	ggb1.instance.setValue("step", 1);
	console.log(
		ggb1.instance.getValue("step"),
		ggb1.instance.getValue("factorCase")
	);
	buttonGroup2.updateSingleButton({ disabled: false }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
	buttonGroup2.updateSingleButton({ disabled: true }, 3);
	ggb1.instance.setVisible("ySlider", false);
});
