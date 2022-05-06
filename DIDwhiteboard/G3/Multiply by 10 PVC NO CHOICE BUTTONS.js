const { ggb1, input1, button1, buttonGroup1, feedback } = components;
feedback.updateData({ visible: false });

slide.on("firstload", () => {
	ggb1.instance.setValue("factor1", 1);
	ggb1.instance.setValue("factor2", 3 * 6);
	ggb1.instance.setValue("factor3", 10);
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let number1 = 0;
let number2 = 0;
let number3 = 0;
let regex = /(\d+)\D+(\d+)\D*(\d+)?/;

autorun(() => {
	console.log("Input:" + input1.data.text);
	parensSW = input1.data.text.startsWith("\\left(");
	console.log("It starts with parens: " + parensSW);
	parensEW = input1.data.text.endsWith("\\right)");
	console.log("It ends with parens: " + parensEW);
	parensFirst = input1.data.text.match(regex);
	console.log(parensFirst);
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
	ggb1.instance.reset();
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	if (parensSW) {
		ggb1.instance.setValue("factorCase", 3);
		ggb1.instance.setValue("factor1", parensFirst[3]);
		ggb1.instance.setValue("factor2", parensFirst[2]);
		ggb1.instance.setValue("factor3", parensFirst[1]);
	}
	if (parensEW) {
		ggb1.instance.setValue("factorCase", 2);
		ggb1.instance.setValue("factor1", parensFirst[1]);
		ggb1.instance.setValue("factor2", parensFirst[2]);
		ggb1.instance.setValue("factor3", parensFirst[3]);
	}
	if (parensSW && parensEW) {
		console.log("try again");
	}
	if (!parensSW && !parensEW && typeof parensFirst[3] !== "undefined") {
		ggb1.instance.setValue("factorCase", 1);
		ggb1.instance.setValue("factor1", 1);
		ggb1.instance.setValue("factor2", parensFirst[2] * parensFirst[1]);
		ggb1.instance.setValue("factor3", parensFirst[3]);
	}
	if (!parensSW && !parensEW && typeof parensFirst[3] == "undefined") {
		ggb1.instance.setValue("factorCase", 1);
		ggb1.instance.setValue("factor1", 1);
		ggb1.instance.setValue("factor2", parensFirst[2]);
		ggb1.instance.setValue("factor3", parensFirst[1]);
	}
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
