const { ggb1, button1, button2 } = components;
ggb1.instance.evalCommand("SetVisibleInView(button1,1,false)");
ggb1.instance.evalCommand("SetVisibleInView(button2,1,false)");

autorun(() => {
	let selectNum = ggb1.innerData["selectedPV"];
	let timer = ggb1.innerData["animT"];
	let button2Bool = ggb1.innerData["showNumberPlotButton"];
	let userNumber = ggb1.innerData["myNumber"];
	console.log(typeof userNumber);
	if (
		selectNum > 1 &&
		timer < 0.1 &&
		typeof userNumber == "number" &&
		!isNaN(userNumber)
	) {
		button1.updateData({ visible: true });
	} else {
		button1.updateData({ visible: false });
	}
	if (button2Bool) {
		button2.updateData({ visible: true });
	} else {
		button2.updateData({ visible: false });
	}
});

button1.on("click", () => {
	ggb1.instance.evalCommand("RunClickScript(button1)");
});

button2.on("click", () => {
	ggb1.instance.evalCommand("RunClickScript(button2)");
});

ggb1.instance.registerObjectUpdateListener("InputBox1", allCommas);
ggb1.instance.registerObjectUpdateListener("E", allCommas);

//makes integers into strings with appropriate commas
function commas(number) {
	//makes the integer a string
	var stringyNumber = String(number);
	//gets the length of the string
	var stringyLength = stringyNumber.length;
	//if it requires a comma
	if (stringyLength > 3) {
		//put a comma three places from the end
		stringyNumber =
			stringyNumber.slice(0, stringyLength - 3) +
			"," +
			stringyNumber.slice(-3);
		//if there's already a comma
		if (stringyNumber.indexOf(",") > -1) {
			//keep placing commas in the right spots
			for (var i = 0; i < Math.floor(stringyLength / 3) - 1; i++) {
				if (stringyNumber.indexOf(",") - 3 != 0) {
					stringyNumber =
						stringyNumber.slice(0, stringyNumber.indexOf(",") - 3) +
						"," +
						stringyNumber.slice(stringyNumber.indexOf(",") - 3);
				}
			}
		}
	}
	//send back the string you want
	return stringyNumber;
}

//updates the text boxes
function allCommas() {
	ggb1.instance.setTextValue(
		"textUpper",
		commas(ggb1.instance.getValue("upper"))
	);
	ggb1.instance.setTextValue(
		"textLower",
		commas(ggb1.instance.getValue("lower"))
	);
	ggb1.instance.setTextValue(
		"textNumLabel",
		commas(ggb1.instance.getValue("myNumber"))
	);
	ggb1.instance.setTextValue(
		"textMid",
		commas(ggb1.instance.getValue("middle"))
	);
	var strNum = commas(ggb1.instance.getValue("myNumber"));
	ggb1.instance.setTextValue("textNum", strNum);
	ggb1.instance.setCoords(
		"textNumLabel",
		ggb1.instance.getXcoord("E") -
			0.5 -
			ggb1.instance.getValue(
				"x(Corner(textNumLabel,3))-x(Corner(textNumLabel,1))"
			),
		ggb1.instance.getYcoord("E") - 0.2
	);
}
