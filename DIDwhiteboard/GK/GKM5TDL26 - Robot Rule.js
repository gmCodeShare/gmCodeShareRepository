const {
	ggb1,
	input1,
	buttonGroup1,
	text1,
	text2,
	text3,
	text4,
	text5,
	text6,
} = components;
ggb1.instance.setValue("Input", input1.data.text);
ggb1.instance.setValue("Output", "");

autorun(() => {
	let numberIn = input1.data.text;
	ggb1.instance.setValue("Input", numberIn);
	let numberOut = ggb1.instance.getValue("Input+Rule");
	console.log("Number in:" + numberIn);
	console.log("Number out:" + numberOut);
});

//Try It button
buttonGroup1.on("click:1", () => {
	numberIn = input1.data.text;
	ggb1.instance.setValue("Input", numberIn);
	numberOut = ggb1.instance.getValue("Input+Rule");
	ggb1.instance.setValue("Output", numberOut);
	if (numberIn != "" && numberOut <= 20) {
		ggb1.instance.setValue(
			"clickCount",
			ggb1.instance.getValue("clickCount") + 1
		);
	}
	if (
		numberOut <= 20 &&
		numberIn > 0 &&
		ggb1.instance.getValue("clickCount") == 1
	) {
		text1.updateData({ text: `$${numberIn}\\to${numberOut}$` });
	}
	if (
		numberOut <= 20 &&
		numberIn > 0 &&
		ggb1.instance.getValue("clickCount") == 2
	) {
		text2.updateData({ text: `$${numberIn}\\to${numberOut}$` });
	}
	if (
		numberOut <= 20 &&
		numberIn > 0 &&
		ggb1.instance.getValue("clickCount") == 3
	) {
		text3.updateData({ text: `$${numberIn}\\to${numberOut}$` });
	}
	if (
		numberOut <= 20 &&
		numberIn > 0 &&
		ggb1.instance.getValue("clickCount") == 4
	) {
		text4.updateData({ text: `$${numberIn}\\to${numberOut}$` });
	}
	if (
		numberOut <= 20 &&
		numberIn > 0 &&
		ggb1.instance.getValue("clickCount") == 5
	) {
		text5.updateData({ text: `$${numberIn}\\to${numberOut}$` });
	}
	if (numberOut > 20) {
		text6.updateData({
			text: "This number is too big for the robot to handle!",
		});
	}
	if (numberOut <= 20) {
		text6.updateData({ text: "" });
	}
	if (ggb1.instance.getValue("clickCount") == 5) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	}
	input1.updateData({ text: "" });
});

//New Rule button
buttonGroup1.on("click:2", () => {
	ggb1.instance.evalCommand("UpdateConstruction()");
	input1.updateData({ text: "" });
	ggb1.instance.setValue("Input", "");
	ggb1.instance.setValue("clickCount", 0);
	ggb1.instance.setValue(
		"clickRule",
		ggb1.instance.getValue("clickRule") + 1
	);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	text1.updateData({ text: "" });
	text2.updateData({ text: "" });
	text3.updateData({ text: "" });
	text4.updateData({ text: "" });
	text5.updateData({ text: "" });
});
