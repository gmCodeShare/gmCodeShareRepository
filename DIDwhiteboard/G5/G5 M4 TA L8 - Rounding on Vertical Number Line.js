const { ggb1, button1, button2, input1 } = components;
ggb1.instance.evalCommand("SetVisibleInView(button1,1,false)");
ggb1.instance.evalCommand("SetVisibleInView(button2,1,false)");

autorun(() => {
	let selectNum = ggb1.innerData["selectedPV"];
	ggb1.instance.setValue("animT", 0);
	ggb1.instance.setValue("myNumber", input1.data.text);
	if (input1.data.text == "" || Math.floor(input1.data.text / 10000) != 0) {
		ggb1.instance.setVisible("text1", false);
		ggb1.instance.setVisible("text2", false);
		ggb1.instance.setVisible("K", false);
		ggb1.instance.setVisible("digitOptions", false);
		ggb1.instance.setVisible("pvSelectorPoint", false);
	} else {
		ggb1.instance.setVisible("text1", true);
		ggb1.instance.setVisible("text2", true);
		ggb1.instance.setVisible("K", true);
		ggb1.instance.setVisible("digitOptions", true);
		ggb1.instance.setVisible("pvSelectorPoint", true);
	}
});

autorun(() => {
	let selectNum = ggb1.innerData["selectedPV"];
	let timer = ggb1.innerData["animT"];
	let button2Bool = ggb1.innerData["showNumberPlotButton"];
	console.log(ggb1.instance.getValue("IsDefined(myNumber"));
	if (
		selectNum > 0 &&
		timer < 0.1 &&
		ggb1.instance.getValue("IsDefined(myNumber)") &&
		Math.floor(input1.data.text / 10000) == 0
	) {
		button1.updateData({ visible: true, visibilityBehavior: "hide" });
	} else {
		button1.updateData({ visible: false, visibilityBehavior: "hide" });
	}
	if (button2Bool) {
		button2.updateData({ visible: true, visibilityBehavior: "hide" });
	} else {
		button2.updateData({ visible: false, visibilityBehavior: "hide" });
	}
});

button1.on("click", () => {
	ggb1.instance.evalCommand("RunClickScript(button1)");
});

button2.on("click", () => {
	ggb1.instance.evalCommand("RunClickScript(button2)");
});

ggb1.instance.registerObjectUpdateListener("E", setTextValues);

//updates the text boxes
function setTextValues() {
	ggb1.instance.setTextValue("textUpper", ggb1.instance.getValue("upper"));
	ggb1.instance.setTextValue("textLower", ggb1.instance.getValue("lower"));
	ggb1.instance.setTextValue(
		"textNumLabel",
		ggb1.instance.getValue("myNumber")
	);
	ggb1.instance.setTextValue("textMid", ggb1.instance.getValue("middle"));
	ggb1.instance.setFixed("textMid", true, false);
	let strNum = ggb1.instance.getValue("myNumber");
	ggb1.instance.setTextValue("textNum", strNum);
	ggb1.instance.setCoords(
		"textNumLabel",
		ggb1.instance.getXcoord("E") -
			0.5 -
			ggb1.instance.getValue(
				"x(Corner(textNumLabel,3))-x(Corner(textNumLabel,1))"
			),
		ggb1.instance.getYcoord("E") +
			ggb1.instance.getValue(
				"(y(Corner(textNumLabel,3))-y(Corner(textNumLabel,1)))/2"
			)
	);
}
