const { fib1, buttonGroup1, ggb1 } = components;
buttonGroup1.updateSingleButton({ disabled: false }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 3);

reset();

fib1.on("change", ({ values }) => {
	reset();
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

buttonGroup1.on("click:1", () => {
	boundIt(fib1, 0, 0, 9999999);
	if (fib1.getInput(0)) {
		boundIt(fib1, 1, 0, fib1.getInput(0).text.replaceAll(",", ""));
	}
	ggb1.instance.setValue("subt1", fib1.getInput(0).text.replaceAll(",", ""));
	ggb1.instance.setValue("subt2", fib1.getInput(1).text.replaceAll(",", ""));
	popul8();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
	if (
		pointsM.length >= labelMil2 &&
		pointsHT.length >= labelHunThou2 &&
		pointsTT.length >= labelTenThou2 &&
		pointsTH.length >= labelThous2 &&
		pointsH.length >= labelHuns2 &&
		pointsT.length >= labelTens2 &&
		pointsO.length >= labelOnes2
	) {
		//set question button invisible and subtract it button visible
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	} else {
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	}
});

buttonGroup1.on("click:2", () => {
	matchIt();
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:3", () => {
	reset();
	fib1.updateInput(0, { text: "" });
	fib1.updateInput(1, { text: "" });
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

ggb1.instance.registerClientListener(breakOut);

//alll of the global variables
var rowAdderOnes = 0;
var rowAdderTens = 0;
var rowAdderHuns = 0;
var rowAdderThous = 0;
var rowAdderTenThou = 0;
var rowAdderHunThou = 0;
var rowAdderMil = 0;
var labelMil = ggb1.instance.getValue("milCount");
var labelHunThou = ggb1.instance.getValue("hunthouCount");
var labelTenThou = ggb1.instance.getValue("tenthouCount");
var labelThous = ggb1.instance.getValue("thouCount");
var labelHuns = ggb1.instance.getValue("hunsCount");
var labelTens = ggb1.instance.getValue("tensCount");
var labelOnes = ggb1.instance.getValue("onesCount");
var labelMil2 = ggb1.instance.getValue("milCount2");
var labelHunThou2 = ggb1.instance.getValue("hunthouCount2");
var labelTenThou2 = ggb1.instance.getValue("tenthouCount2");
var labelThous2 = ggb1.instance.getValue("thouCount2");
var labelHuns2 = ggb1.instance.getValue("hunsCount2");
var labelTens2 = ggb1.instance.getValue("tensCount2");
var labelOnes2 = ggb1.instance.getValue("onesCount2");
var unbundledMil = 0;
var unbundledHunThou = 0;
var unbundledTenThou = 0;
var unbundledThous = 0;
var unbundledHuns = 0;
var unbundledTens = 0;
var unbundledOnes = 0;
var pointsM = [];
var pointsHT = [];
var pointsTT = [];
var pointsTH = [];
var pointsH = [];
var pointsT = [];
var pointsO = [];
var click = 0;
var a = 0;

//creates the initial points
function popul8() {
	reset();
	click = click + 1;
	labelMil = ggb1.instance.getValue("milCount");
	labelHunThou = ggb1.instance.getValue("hunthouCount");
	labelTenThou = ggb1.instance.getValue("tenthouCount");
	labelThous = ggb1.instance.getValue("thouCount");
	labelHuns = ggb1.instance.getValue("hunsCount");
	labelTens = ggb1.instance.getValue("tensCount");
	labelOnes = ggb1.instance.getValue("onesCount");
	labelMil2 = ggb1.instance.getValue("milCount2");
	labelHunThou2 = ggb1.instance.getValue("hunthouCount2");
	labelTenThou2 = ggb1.instance.getValue("tenthouCount2");
	labelThous2 = ggb1.instance.getValue("thouCount2");
	labelHuns2 = ggb1.instance.getValue("hunsCount2");
	labelTens2 = ggb1.instance.getValue("tensCount2");
	labelOnes2 = ggb1.instance.getValue("onesCount2");
	if (click == 1) {
		//create points in millions region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelMil; popLoop++) {
			ggb1.instance.evalCommand("M" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"M" + popLoop,
				ggb1.instance.getXcoord("ig24") + (popLoop % 5),
				ggb1.instance.getYcoord("ig24") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("M" + popLoop, 127, 206, 235);
			ggb1.instance.setLayer("M" + popLoop, 0);
			pointsM.push("M" + popLoop);
		}
		//create points in hundred thousands region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelHunThou; popLoop++) {
			ggb1.instance.evalCommand("HT" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"HT" + popLoop,
				ggb1.instance.getXcoord("ig23") + (popLoop % 5),
				ggb1.instance.getYcoord("ig23") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("HT" + popLoop, 255, 218, 0);
			ggb1.instance.setLayer("HT" + popLoop, 0);
			pointsHT.push("HT" + popLoop);
		}
		//create points in ten thousands region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelTenThou; popLoop++) {
			ggb1.instance.evalCommand("TT" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"TT" + popLoop,
				ggb1.instance.getXcoord("ig22") + (popLoop % 5),
				ggb1.instance.getYcoord("ig22") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("TT" + popLoop, 241, 127, 9);
			ggb1.instance.setLayer("TT" + popLoop, 0);
			pointsTT.push("TT" + popLoop);
		}
		//create points in thousands region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelThous; popLoop++) {
			ggb1.instance.evalCommand("TH" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"TH" + popLoop,
				ggb1.instance.getXcoord("ig21") + (popLoop % 5),
				ggb1.instance.getYcoord("ig21") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("TH" + popLoop, 255, 255, 255);
			ggb1.instance.setLayer("TH" + popLoop, 0);
			pointsTH.push("TH" + popLoop);
		}
		//create points in hundreds region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelHuns; popLoop++) {
			ggb1.instance.evalCommand("HU" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"HU" + popLoop,
				ggb1.instance.getXcoord("ig5") + (popLoop % 5),
				ggb1.instance.getYcoord("ig5") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("HU" + popLoop, 0, 118, 165);
			ggb1.instance.setLayer("HU" + popLoop, 0);
			pointsH.push("HU" + popLoop);
		}
		//create points in tens region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelTens; popLoop++) {
			ggb1.instance.evalCommand("TE" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"TE" + popLoop,
				ggb1.instance.getXcoord("ig6") + (popLoop % 5),
				ggb1.instance.getYcoord("ig6") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("TE" + popLoop, 0, 155, 69);
			ggb1.instance.setLayer("TE" + popLoop, 0);
			pointsT.push("TE" + popLoop);
		}
		//create points in ones region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelOnes; popLoop++) {
			ggb1.instance.evalCommand("O" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"O" + popLoop,
				ggb1.instance.getXcoord("ig7") + (popLoop % 5),
				ggb1.instance.getYcoord("ig7") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("O" + popLoop, 230, 15, 33);
			ggb1.instance.setLayer("O" + popLoop, 0);
			pointsO.push("O" + popLoop);
		}

		//updates alogrithm text on right
		setText();
	}
}

//unbundles points dragged into new regions
function breakOut(grabbed) {
	a = a + 1;
	if (grabbed[0] == "select") {
		name = grabbed[1];
		type = ggb1.instance.getObjectType(grabbed[1]);
		if (type == "point") {
			xCoord = ggb1.instance.getXcoord(grabbed[1]);
			yCoord = ggb1.instance.getYcoord(grabbed[1]);
		}
	}
	if (grabbed[0] == "dragEnd") {
		type = ggb1.instance.getObjectType(grabbed[1]);
		if (type == "point") {
			//point goes from millions to hundred thousands
			if (
				name.includes("M") &&
				ggb1.instance.getXcoord(grabbed[1]) > -27 &&
				ggb1.instance.getYcoord(grabbed[1]) > -10
			) {
				//splice out unbundled point from point list
				var choppingBlock = pointsM.indexOf(name);
				pointsM.splice(choppingBlock, 1);
				ggb1.instance.evalCommand("XMil" + a + "=PointIn(box)");
				ggb1.instance.setCoords(name, xCoord, yCoord);
				ggb1.instance.setCoords("XMil" + a, xCoord, yCoord);
				ggb1.instance.setPointStyle("XMil" + a, 1);
				ggb1.instance.setColor("XMil" + a, 0, 0, 0);
				ggb1.instance.setFixed("XMil" + a, true, false);
				ggb1.instance.setFixed(name, true, false);
				//set the dragged point to invisible and create ten new points in region
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand(
							"HT" + labelHunThou + "=PointIn(box)"
						);
						ggb1.instance.setCoords(
							"HT" + labelHunThou,
							ggb1.instance.getXcoord("ig23") + row,
							ggb1.instance.getYcoord("ig23") -
								2 -
								column -
								2 * rowAdderHunThou
						);
						ggb1.instance.setColor(
							"HT" + labelHunThou,
							255,
							218,
							0
						);
						ggb1.instance.setLayer("HT" + labelHunThou, 0);
						pointsHT.push("HT" + labelHunThou);
						//rewrites the algorithm to reflect new pvc
						ggb1.instance.setValue("milCount3", pointsM.length);
						ggb1.instance.setValue(
							"hunthouCount3",
							pointsHT.length
						);
						ggb1.instance.setVisible("f", true);
						ggb1.instance.setVisible("g", true);
						ggb1.instance.setVisible("textMil3", true);
						ggb1.instance.setVisible("textHunThou3", true);
						ggb1.instance.setValue("milBool", true);
						ggb1.instance.setValue("hunThouBool", true);
						labelHunThou++;
					}
				}
				//adds a new row for unbundler and tells how many unbundled sets of points there are
				rowAdderHunThou = rowAdderHunThou + 1;
				unbundledHunThou = unbundledHunThou + 1;
			}
		}
		if (type == "point") {
			if (
				name.includes("HT") &&
				ggb1.instance.getXcoord(grabbed[1]) > -21 &&
				ggb1.instance.getYcoord(grabbed[1]) > -10
			) {
				var choppingBlock = pointsHT.indexOf(name);
				pointsHT.splice(choppingBlock, 1);
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand(
							"XHunThou" + a + "=PointIn(box)"
						);
						ggb1.instance.setCoords(name, xCoord, yCoord);
						ggb1.instance.setCoords("XHunThou" + a, xCoord, yCoord);
						ggb1.instance.setPointStyle("XHunThou" + a, 1);
						ggb1.instance.setColor("XHunThou" + a, 0, 0, 0);
						ggb1.instance.setFixed("XHunThou" + a, true, false);
						ggb1.instance.setFixed(name, true, false);
						ggb1.instance.evalCommand(
							"TT" + labelTenThou + "=PointIn(box)"
						);
						ggb1.instance.setCoords(
							"TT" + labelTenThou,
							ggb1.instance.getXcoord("ig22") + row,
							ggb1.instance.getYcoord("ig22") -
								2 -
								column -
								2 * rowAdderTenThou
						);
						ggb1.instance.setColor(
							"TT" + labelTenThou,
							241,
							127,
							9
						);
						ggb1.instance.setLayer("TT" + labelTenThou, 0);
						pointsTT.push("TT" + labelTenThou);
						ggb1.instance.setValue(
							"hunthouCount3",
							pointsHT.length
						);
						ggb1.instance.setValue(
							"tenthouCount3",
							pointsTT.length
						);
						ggb1.instance.setVisible("g", true);
						ggb1.instance.setVisible("h", true);
						ggb1.instance.setVisible("textHunThou3", true);
						ggb1.instance.setVisible("textTenThou3", true);
						ggb1.instance.setValue("hunThouBool", true);
						ggb1.instance.setValue("tenThouBool", true);
						labelTenThou++;
					}
				}
				rowAdderTenThou = rowAdderTenThou + 1;
				unbundledTenThou = unbundledTenThou + 1;
			}
		}
		if (type == "point") {
			if (
				name.includes("TT") &&
				ggb1.instance.getXcoord(grabbed[1]) > -15 &&
				ggb1.instance.getYcoord(grabbed[1]) > -10
			) {
				var choppingBlock = pointsTT.indexOf(name);
				pointsTT.splice(choppingBlock, 1);
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand(
							"XTenThou" + a + "=PointIn(box)"
						);
						ggb1.instance.setCoords(name, xCoord, yCoord);
						ggb1.instance.setCoords("XTenThou" + a, xCoord, yCoord);
						ggb1.instance.setPointStyle("XTenThou" + a, 1);
						ggb1.instance.setColor("XTenThou" + a, 0, 0, 0);
						ggb1.instance.setFixed("XTenThou" + a, true, false);
						ggb1.instance.setFixed(name, true, false);
						ggb1.instance.evalCommand(
							"TH" + labelThous + "=PointIn(box)"
						);
						ggb1.instance.setCoords(
							"TH" + labelThous,
							ggb1.instance.getXcoord("ig21") + row,
							ggb1.instance.getYcoord("ig21") -
								2 -
								column -
								2 * rowAdderThous
						);
						ggb1.instance.setColor(
							"TH" + labelThous,
							255,
							255,
							255
						);
						ggb1.instance.setLayer("TH" + labelThous, 0);
						pointsTH.push("TH" + labelThous);
						ggb1.instance.setValue(
							"tenthouCount3",
							pointsTT.length
						);
						ggb1.instance.setValue("thouCount3", pointsTH.length);
						ggb1.instance.setVisible("h", true);
						ggb1.instance.setVisible("i", true);
						ggb1.instance.setVisible("textTenThou3", true);
						ggb1.instance.setVisible("textThou3", true);
						ggb1.instance.setValue("tenThouBool", true);
						ggb1.instance.setValue("thouBool", true);
						labelThous++;
					}
				}
				rowAdderThous = rowAdderThous + 1;
				unbundledThous = unbundledThous + 1;
			}
		}
		if (type == "point") {
			if (
				name.includes("TH") &&
				ggb1.instance.getXcoord(grabbed[1]) > -9 &&
				ggb1.instance.getYcoord(grabbed[1]) > -10
			) {
				var choppingBlock = pointsTH.indexOf(name);
				pointsTH.splice(choppingBlock, 1);
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand(
							"XThou" + a + "=PointIn(box)"
						);
						ggb1.instance.setCoords(name, xCoord, yCoord);
						ggb1.instance.setCoords("XThou" + a, xCoord, yCoord);
						ggb1.instance.setPointStyle("XThou" + a, 1);
						ggb1.instance.setColor("XThou" + a, 0, 0, 0);
						ggb1.instance.setFixed("XThou" + a, true, false);
						ggb1.instance.setFixed(name, true, false);
						ggb1.instance.evalCommand(
							"HU" + labelHuns + "=PointIn(box)"
						);
						ggb1.instance.setCoords(
							"HU" + labelHuns,
							ggb1.instance.getXcoord("ig5") + row,
							ggb1.instance.getYcoord("ig5") -
								2 -
								column -
								2 * rowAdderHuns
						);
						ggb1.instance.setColor("HU" + labelHuns, 0, 118, 165);
						ggb1.instance.setLayer("HU" + labelHuns, 0);
						pointsH.push("HU" + labelHuns);
						ggb1.instance.setValue("thouCount3", pointsTH.length);
						ggb1.instance.setValue("hunsCount3", pointsH.length);
						ggb1.instance.setVisible("i", true);
						ggb1.instance.setVisible("t_1", true);
						ggb1.instance.setVisible("textThou3", true);
						ggb1.instance.setVisible("textHuns3", true);
						ggb1.instance.setValue("thouBool", true);
						ggb1.instance.setValue("hunBool", true);
						labelHuns++;
					}
				}
				rowAdderHuns = rowAdderHuns + 1;
				unbundledHuns = unbundledHuns + 1;
			}
		}
		if (type == "point") {
			if (
				name.includes("HU") &&
				ggb1.instance.getXcoord(grabbed[1]) > -3 &&
				ggb1.instance.getYcoord(grabbed[1]) > -10
			) {
				var choppingBlock = pointsH.indexOf(name);
				pointsH.splice(choppingBlock, 1);
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand("XHun" + a + "=PointIn(box)");
						ggb1.instance.setCoords(name, xCoord, yCoord);
						ggb1.instance.setCoords("XHun" + a, xCoord, yCoord);
						ggb1.instance.setPointStyle("XHun" + a, 1);
						ggb1.instance.setColor("XHun" + a, 0, 0, 0);
						ggb1.instance.setFixed("XHun" + a, true, false);
						ggb1.instance.setFixed(name, true, false);
						ggb1.instance.evalCommand(
							"TE" + labelTens + " =PointIn(box)"
						);
						ggb1.instance.setCoords(
							"TE" + labelTens,
							ggb1.instance.getXcoord("ig6") + row,
							ggb1.instance.getYcoord("ig6") -
								2 -
								column -
								2 * rowAdderTens
						);
						ggb1.instance.setColor("TE" + labelTens, 0, 155, 69);
						ggb1.instance.setLayer("TE" + labelTens, 0);
						pointsT.push("TE" + labelTens);
						ggb1.instance.setValue("hunsCount3", pointsH.length);
						ggb1.instance.setValue("tensCount3", pointsT.length);
						ggb1.instance.setVisible("t_1", true);
						ggb1.instance.setVisible("a_1", true);
						ggb1.instance.setVisible("textHuns3", true);
						ggb1.instance.setVisible("textTens3", true);
						ggb1.instance.setValue("hunBool", true);
						ggb1.instance.setValue("tenBool", true);
						labelTens++;
					}
				}
				rowAdderTens = rowAdderTens + 1;
				unbundledTens = unbundledTens + 1;
			}
		}
		if (type == "point") {
			if (
				name.includes("TE") &&
				ggb1.instance.getXcoord(grabbed[1]) > 3 &&
				ggb1.instance.getYcoord(grabbed[1]) > -10
			) {
				var choppingBlock = pointsT.indexOf(name);
				pointsT.splice(choppingBlock, 1);
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand("XTen" + a + "=PointIn(box)");
						ggb1.instance.setCoords(name, xCoord, yCoord);
						ggb1.instance.setCoords("XTen" + a, xCoord, yCoord);
						ggb1.instance.setPointStyle("XTen" + a, 1);
						ggb1.instance.setColor("XTen" + a, 0, 0, 0);
						ggb1.instance.setFixed("XTen" + a, true, false);
						ggb1.instance.setFixed(name, true, false);
						ggb1.instance.evalCommand(
							"O" + labelOnes + "=PointIn(box)"
						);
						ggb1.instance.setCoords(
							"O" + labelOnes,
							ggb1.instance.getXcoord("ig7") + row,
							ggb1.instance.getYcoord("ig7") -
								2 -
								column -
								2 * rowAdderOnes
						);
						ggb1.instance.setColor("O" + labelOnes, 230, 15, 33);
						ggb1.instance.setLayer("O" + labelOnes, 0);
						pointsO.push("O" + labelOnes);
						ggb1.instance.setValue("tensCount3", pointsT.length);
						ggb1.instance.setValue("onesCount3", pointsO.length);
						ggb1.instance.setVisible("a_1", true);
						ggb1.instance.setVisible("b_1", true);
						ggb1.instance.setVisible("textTens3", true);
						ggb1.instance.setVisible("textOnes3", true);
						ggb1.instance.setValue("tenBool", true);
						ggb1.instance.setValue("oneBool", true);
						labelOnes++;
					}
				}
				rowAdderOnes = rowAdderOnes + 1;
				unbundledOnes = unbundledOnes + 1;
			}
		}
		if (
			pointsM.length >= labelMil2 &&
			pointsHT.length >= labelHunThou2 &&
			pointsTT.length >= labelTenThou2 &&
			pointsTH.length >= labelThous2 &&
			pointsH.length >= labelHuns2 &&
			pointsT.length >= labelTens2 &&
			pointsO.length >= labelOnes2
		) {
			//set question button invisible and subtract it button visible
			buttonGroup1.updateSingleButton({ disabled: false }, 2);
		} else {
			buttonGroup1.updateSingleButton({ disabled: true }, 2);
		}
	}
}

//If there are at least as many points at the top as the bottom, set the crosses on top of the dots for each region
function matchIt() {
	if (pointsM.length >= labelMil2) {
		//create x points in millions region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelMil2; popLoop++) {
			ggb1.instance.evalCommand("MB" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"MB" + popLoop,
				ggb1.instance.getXcoord(pointsM[popLoop]),
				ggb1.instance.getYcoord(pointsM[popLoop])
			);
			ggb1.instance.setVisible("MB" + popLoop, false);
			if (labelMil2 == 1) {
				ggb1.instance.evalCommand(
					"MBCross" +
						popLoop +
						"=Segment(MB" +
						popLoop +
						"-(0.5,0.5),MB" +
						popLoop +
						"+(0.5,0.5))"
				);
				ggb1.instance.setFixed("MBCross" + popLoop, true, false);
				ggb1.instance.setLayer("MBCross" + popLoop, 2);
				ggb1.instance.setColor("MBCross" + popLoop, 0, 0, 0);
			} else {
				ggb1.instance.evalCommand(
					"MBCross" +
						popLoop +
						"=Segment(MB" +
						popLoop +
						"+(0.5,0),MB" +
						popLoop +
						"-(0.5,0))"
				);
				ggb1.instance.setFixed("MBCross" + popLoop, true, false);
				ggb1.instance.setLayer("MBCross" + popLoop, 2);
				ggb1.instance.setColor("MBCross" + popLoop, 0, 0, 0);
			}
		}
	}
	if (pointsHT.length >= labelHunThou2) {
		//create x points in hundred thousands region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelHunThou2; popLoop++) {
			ggb1.instance.evalCommand("HTB" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"HTB" + popLoop,
				ggb1.instance.getXcoord(pointsHT[popLoop]),
				ggb1.instance.getYcoord(pointsHT[popLoop])
			);
			ggb1.instance.setVisible("HTB" + popLoop, false);
			if (labelHunThou2 == 1) {
				ggb1.instance.evalCommand(
					"HTBCross" +
						popLoop +
						"=Segment(HTB" +
						popLoop +
						"-(0.5,0.5),HTB" +
						popLoop +
						"+(0.5,0.5))"
				);
				ggb1.instance.setFixed("HTBCross" + popLoop, true, false);
				ggb1.instance.setLayer("HTBCross" + popLoop, 2);
				ggb1.instance.setColor("HTBCross" + popLoop, 0, 0, 0);
			} else {
				ggb1.instance.evalCommand(
					"HTBCross" +
						popLoop +
						"=Segment(HTB" +
						popLoop +
						"+(0.5,0),HTB" +
						popLoop +
						"-(0.5,0))"
				);
				ggb1.instance.setFixed("HTBCross" + popLoop, true, false);
				ggb1.instance.setLayer("HTBCross" + popLoop, 2);
				ggb1.instance.setColor("HTBCross" + popLoop, 0, 0, 0);
			}
		}
	}
	if (pointsTT.length >= labelTenThou2) {
		//create x points in ten thousands region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelTenThou2; popLoop++) {
			ggb1.instance.evalCommand("TTB" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"TTB" + popLoop,
				ggb1.instance.getXcoord(pointsTT[popLoop]),
				ggb1.instance.getYcoord(pointsTT[popLoop])
			);
			ggb1.instance.setVisible("TTB" + popLoop, false);
			if (labelTenThou2 == 1) {
				ggb1.instance.evalCommand(
					"TTBCross" +
						popLoop +
						"=Segment(TTB" +
						popLoop +
						"-(0.5,0.5),TTB" +
						popLoop +
						"+(0.5,0.5))"
				);
				ggb1.instance.setFixed("TTBCross" + popLoop, true, false);
				ggb1.instance.setLayer("TTBCross" + popLoop, 2);
				ggb1.instance.setColor("TTBCross" + popLoop, 0, 0, 0);
			} else {
				ggb1.instance.evalCommand(
					"TTBCross" +
						popLoop +
						"=Segment(TTB" +
						popLoop +
						"+(0.5,0),TTB" +
						popLoop +
						"-(0.5,0))"
				);
				ggb1.instance.setFixed("TTBCross" + popLoop, true, false);
				ggb1.instance.setLayer("TTBCross" + popLoop, 2);
				ggb1.instance.setColor("TTBCross" + popLoop, 0, 0, 0);
			}
		}
	}
	if (pointsTH.length >= labelThous2) {
		//create x points in thousands region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelThous2; popLoop++) {
			ggb1.instance.evalCommand("THB" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"THB" + popLoop,
				ggb1.instance.getXcoord(pointsTH[popLoop]),
				ggb1.instance.getYcoord(pointsTH[popLoop])
			);
			ggb1.instance.setVisible("THB" + popLoop, false);
			if (labelThous2 == 1) {
				ggb1.instance.evalCommand(
					"THBCross" +
						popLoop +
						"=Segment(THB" +
						popLoop +
						"-(0.5,0.5),THB" +
						popLoop +
						"+(0.5,0.5))"
				);
				ggb1.instance.setFixed("THBCross" + popLoop, true, false);
				ggb1.instance.setLayer("THBCross" + popLoop, 2);
				ggb1.instance.setColor("THBCross" + popLoop, 0, 0, 0);
			} else {
				ggb1.instance.evalCommand(
					"THBCross" +
						popLoop +
						"=Segment(THB" +
						popLoop +
						"+(0.5,0),THB" +
						popLoop +
						"-(0.5,0))"
				);
				ggb1.instance.setFixed("THBCross" + popLoop, true, false);
				ggb1.instance.setLayer("THBCross" + popLoop, 2);
				ggb1.instance.setColor("THBCross" + popLoop, 0, 0, 0);
			}
		}
	}
	if (pointsH.length >= labelHuns2) {
		//create x points in hundreds region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelHuns2; popLoop++) {
			ggb1.instance.evalCommand("HB" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"HB" + popLoop,
				ggb1.instance.getXcoord(pointsH[popLoop]),
				ggb1.instance.getYcoord(pointsH[popLoop])
			);
			ggb1.instance.setVisible("HB" + popLoop, false);
			if (labelHuns2 == 1) {
				ggb1.instance.evalCommand(
					"HBCross" +
						popLoop +
						"=Segment(HB" +
						popLoop +
						"-(0.5,0.5),HB" +
						popLoop +
						"+(0.5,0.5))"
				);
				ggb1.instance.setFixed("HBCross" + popLoop, true, false);
				ggb1.instance.setLayer("HBCross" + popLoop, 2);
				ggb1.instance.setColor("HBCross" + popLoop, 0, 0, 0);
			} else {
				ggb1.instance.evalCommand(
					"HBCross" +
						popLoop +
						"=Segment(HB" +
						popLoop +
						"+(0.5,0),HB" +
						popLoop +
						"-(0.5,0))"
				);
				ggb1.instance.setFixed("HBCross" + popLoop, true, false);
				ggb1.instance.setLayer("HBCross" + popLoop, 2);
				ggb1.instance.setColor("HBCross" + popLoop, 0, 0, 0);
			}
		}
	}
	if (pointsT.length >= labelTens2) {
		//create x points in tens region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelTens2; popLoop++) {
			ggb1.instance.evalCommand("TB" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"TB" + popLoop,
				ggb1.instance.getXcoord(pointsT[popLoop]),
				ggb1.instance.getYcoord(pointsT[popLoop])
			);
			ggb1.instance.setVisible("TB" + popLoop, false);
			if (labelTens2 == 1) {
				ggb1.instance.evalCommand(
					"TBCross" +
						popLoop +
						"=Segment(TB" +
						popLoop +
						"-(0.5,0.5),TB" +
						popLoop +
						"+(0.5,0.5))"
				);
				ggb1.instance.setFixed("TBCross" + popLoop, true, false);
				ggb1.instance.setLayer("TBCross" + popLoop, 2);
				ggb1.instance.setColor("TBCross" + popLoop, 0, 0, 0);
			} else {
				ggb1.instance.evalCommand(
					"TBCross" +
						popLoop +
						"=Segment(TB" +
						popLoop +
						"+(0.5,0),TB" +
						popLoop +
						"-(0.5,0))"
				);
				ggb1.instance.setFixed("TBCross" + popLoop, true, false);
				ggb1.instance.setLayer("TBCross" + popLoop, 2);
				ggb1.instance.setColor("TBCross" + popLoop, 0, 0, 0);
			}
		}
	}
	if (pointsO.length >= labelOnes2) {
		//create x points in ones region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelOnes2; popLoop++) {
			ggb1.instance.evalCommand("OB" + popLoop + "=PointIn(box)");
			ggb1.instance.setCoords(
				"OB" + popLoop,
				ggb1.instance.getXcoord(pointsO[popLoop]),
				ggb1.instance.getYcoord(pointsO[popLoop])
			);
			ggb1.instance.setVisible("OB" + popLoop, false);
			if (labelOnes2 == 1) {
				ggb1.instance.evalCommand(
					"OBCross" +
						popLoop +
						"=Segment(OB" +
						popLoop +
						"-(0.5,0.5),OB" +
						popLoop +
						"+(0.5,0.5))"
				);
				ggb1.instance.setFixed("OBCross" + popLoop, true, false);
				ggb1.instance.setLayer("OBCross" + popLoop, 2);
				ggb1.instance.setColor("OBCross" + popLoop, 0, 0, 0);
			} else {
				ggb1.instance.evalCommand(
					"OBCross" +
						popLoop +
						"=Segment(OB" +
						popLoop +
						"+(0.5,0),OB" +
						popLoop +
						"-(0.5,0))"
				);
				ggb1.instance.setFixed("OBCross" + popLoop, true, false);
				ggb1.instance.setLayer("OBCross" + popLoop, 2);
				ggb1.instance.setColor("OBCross" + popLoop, 0, 0, 0);
			}
		}
	}
	//if all of the points at the top are more than all of the points on the bottom, show the answer to the problem
	if (
		pointsM.length >= labelMil2 &&
		pointsHT.length >= labelHunThou2 &&
		pointsTT.length >= labelTenThou2 &&
		pointsTH.length >= labelThous2 &&
		pointsH.length >= labelHuns2 &&
		pointsT.length >= labelTens2 &&
		pointsO.length >= labelOnes2
	) {
		ggb1.instance.setVisible("textMil4", true);
		ggb1.instance.setVisible("textHunThou4", true);
		ggb1.instance.setVisible("textTenThou4", true);
		ggb1.instance.setVisible("textThou4", true);
		ggb1.instance.setVisible("textHuns4", true);
		ggb1.instance.setVisible("textTens4", true);
		ggb1.instance.setVisible("textOnes4", true);
	} else {
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textTenThou4", false);
		ggb1.instance.setVisible("textThou4", false);
		ggb1.instance.setVisible("textHuns4", false);
		ggb1.instance.setVisible("textTens4", false);
		ggb1.instance.setVisible("textOnes4", false);
	}
	setAnswerText();
	let everything = ggb1.instance.getAllObjectNames("point");
	for (let i = 0, L = everything.length; i < L; i++) {
		ggb1.instance.setFixed(everything[i], true, false);
	}
}

//updates text for the first number based on number of points in each region
function setText() {
	ggb1.instance.evalCommand("textMil = Text(" + pointsM.length + ")");
	ggb1.instance.evalCommand("textHunThou = Text(" + pointsHT.length + ")");
	ggb1.instance.evalCommand("textTenThou = Text(" + pointsTT.length + ")");
	ggb1.instance.evalCommand("textThou = Text(" + pointsTH.length + ")");
	ggb1.instance.evalCommand("textHuns = Text(" + pointsH.length + ")");
	ggb1.instance.evalCommand("textTens = Text(" + pointsT.length + ")");
	ggb1.instance.evalCommand("textOnes = Text(" + pointsO.length + ")");
	ggb1.instance.setVisible("textMil", true);
	ggb1.instance.setVisible("textHunThou", true);
	ggb1.instance.setVisible("textTenThou", true);
	ggb1.instance.setVisible("textThou", true);
	ggb1.instance.setVisible("textHuns", true);
	ggb1.instance.setVisible("textTens", true);
	ggb1.instance.setVisible("textOnes", true);
	ggb1.instance.setVisible("textComma", true);
	ggb1.instance.setVisible("textCommas", true);
	if (pointsM.length == 0) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textCommas", false);
	}
	if (pointsM.length == 0 && pointsHT.length == 0) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textCommas", false);
	}
	if (pointsM.length == 0 && pointsHT.length == 0 && pointsTT.length == 0) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textTenThou", false);
		ggb1.instance.setVisible("textCommas", false);
	}
	if (
		pointsM.length == 0 &&
		pointsHT.length == 0 &&
		pointsTT.length == 0 &&
		pointsTH.length == 0
	) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textTenThou", false);
		ggb1.instance.setVisible("textThou", false);
		ggb1.instance.setVisible("textCommas", false);
		ggb1.instance.setVisible("textComma", false);
	}
	if (
		pointsM.length == 0 &&
		pointsHT.length == 0 &&
		pointsTT.length == 0 &&
		pointsTH.length == 0 &&
		pointsH.length == 0
	) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textTenThou", false);
		ggb1.instance.setVisible("textThou", false);
		ggb1.instance.setVisible("textHuns", false);
		ggb1.instance.setVisible("textCommas", false);
		ggb1.instance.setVisible("textComma", false);
	}
	if (
		pointsM.length == 0 &&
		pointsHT.length == 0 &&
		pointsTT.length == 0 &&
		pointsTH.length == 0 &&
		pointsH.length == 0 &&
		pointsT.length == 0
	) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textTenThou", false);
		ggb1.instance.setVisible("textThou", false);
		ggb1.instance.setVisible("textHuns", false);
		ggb1.instance.setVisible("textTens", false);
		ggb1.instance.setVisible("textCommas", false);
		ggb1.instance.setVisible("textComma", false);
	}
	ggb1.instance.setVisible("textMil2", true);
	ggb1.instance.setVisible("textHunThou2", true);
	ggb1.instance.setVisible("textTenThou2", true);
	ggb1.instance.setVisible("textThou2", true);
	ggb1.instance.setVisible("textHuns2", true);
	ggb1.instance.setVisible("textTens2", true);
	ggb1.instance.setVisible("textOnes2", true);
	ggb1.instance.setVisible("textComma2", true);
	ggb1.instance.setVisible("textCommas2", true);
	if (labelMil2 == 0) {
		ggb1.instance.setVisible("textMil2", false);
		ggb1.instance.setVisible("textCommas2", false);
	}
	if (labelMil2 == 0 && labelHunThou2 == 0) {
		ggb1.instance.setVisible("textMil2", false);
		ggb1.instance.setVisible("textHunThou2", false);
		ggb1.instance.setVisible("textCommas2", false);
	}
	if (labelMil2 == 0 && labelHunThou2 == 0 && labelTenThou2 == 0) {
		ggb1.instance.setVisible("textMil2", false);
		ggb1.instance.setVisible("textHunThou2", false);
		ggb1.instance.setVisible("textTenThou2", false);
		ggb1.instance.setVisible("textCommas2", false);
	}
	if (
		labelMil2 == 0 &&
		labelHunThou2 == 0 &&
		labelTenThou2 == 0 &&
		labelThous2 == 0
	) {
		ggb1.instance.setVisible("textMil2", false);
		ggb1.instance.setVisible("textHunThou2", false);
		ggb1.instance.setVisible("textTenThou2", false);
		ggb1.instance.setVisible("textThou2", false);
		ggb1.instance.setVisible("textCommas2", false);
		ggb1.instance.setVisible("textComma2", false);
	}
	if (
		labelMil2 == 0 &&
		labelHunThou2 == 0 &&
		labelTenThou2 == 0 &&
		labelThous2 == 0 &&
		labelHuns2 == 0
	) {
		ggb1.instance.setVisible("textMil2", false);
		ggb1.instance.setVisible("textHunThou2", false);
		ggb1.instance.setVisible("textTenThou2", false);
		ggb1.instance.setVisible("textThou2", false);
		ggb1.instance.setVisible("textHuns2", false);
		ggb1.instance.setVisible("textCommas2", false);
		ggb1.instance.setVisible("textComma2", false);
	}
	if (
		labelMil2 == 0 &&
		labelHunThou2 == 0 &&
		labelTenThou2 == 0 &&
		labelThous2 == 0 &&
		labelHuns2 == 0 &&
		labelTens2 == 0
	) {
		ggb1.instance.setVisible("textMil2", false);
		ggb1.instance.setVisible("textHunThou2", false);
		ggb1.instance.setVisible("textTenThou2", false);
		ggb1.instance.setVisible("textThou2", false);
		ggb1.instance.setVisible("textHuns2", false);
		ggb1.instance.setVisible("textTens2", false);
		ggb1.instance.setVisible("textCommas2", false);
		ggb1.instance.setVisible("textComma2", false);
	}
}

function setAnswerText() {
	ggb1.instance.setVisible("textMil4", true);
	ggb1.instance.setVisible("textHunThou4", true);
	ggb1.instance.setVisible("textTenThou4", true);
	ggb1.instance.setVisible("textThou4", true);
	ggb1.instance.setVisible("textHuns4", true);
	ggb1.instance.setVisible("textTens4", true);
	ggb1.instance.setVisible("textOnes4", true);
	ggb1.instance.setVisible("textComma4", true);
	ggb1.instance.setVisible("textCommas4", true);
	if (ggb1.instance.getValue("milCount4") == 0) {
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textCommas4", false);
	}
	if (
		ggb1.instance.getValue("milCount4") == 0 &&
		ggb1.instance.getValue("hunthouCount4") == 0
	) {
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textCommas4", false);
	}
	if (
		ggb1.instance.getValue("milCount4") == 0 &&
		ggb1.instance.getValue("hunthouCount4") == 0 &&
		ggb1.instance.getValue("tenthouCount4") == 0
	) {
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textTenThou4", false);
		ggb1.instance.setVisible("textCommas4", false);
	}
	if (
		ggb1.instance.getValue("milCount4") == 0 &&
		ggb1.instance.getValue("hunthouCount4") == 0 &&
		ggb1.instance.getValue("tenthouCount4") == 0 &&
		ggb1.instance.getValue("thouCount4") == 0
	) {
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textTenThou4", false);
		ggb1.instance.setVisible("textThou4", false);
		ggb1.instance.setVisible("textCommas4", false);
		ggb1.instance.setVisible("textComma4", false);
	}
	if (
		ggb1.instance.getValue("milCount4") == 0 &&
		ggb1.instance.getValue("hunthouCount4") == 0 &&
		ggb1.instance.getValue("tenthouCount4") == 0 &&
		ggb1.instance.getValue("thouCount4") == 0 &&
		ggb1.instance.getValue("hunsCount4") == 0
	) {
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textTenThou4", false);
		ggb1.instance.setVisible("textThou4", false);
		ggb1.instance.setVisible("textHuns4", false);
		ggb1.instance.setVisible("textCommas4", false);
		ggb1.instance.setVisible("textComma4", false);
	}
	if (
		ggb1.instance.getValue("milCount4") == 0 &&
		ggb1.instance.getValue("hunthouCount4") == 0 &&
		ggb1.instance.getValue("tenthouCount4") == 0 &&
		ggb1.instance.getValue("thouCount4") == 0 &&
		ggb1.instance.getValue("hunsCount4") == 0 &&
		ggb1.instance.getValue("tensCount4") == 0
	) {
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textTenThou4", false);
		ggb1.instance.setVisible("textThou4", false);
		ggb1.instance.setVisible("textHuns4", false);
		ggb1.instance.setVisible("textTens4", false);
		ggb1.instance.setVisible("textCommas4", false);
		ggb1.instance.setVisible("textComma4", false);
	}
}

//sets all values back to the start
function reset() {
	click = 0;
	//set question button visible and subtract it button invisible
	ggb1.instance.setVisible("subtract", true);
	ggb1.instance.setVisible("button1", false);
	rowAdderOnes = 0;
	rowAdderTens = 0;
	rowAdderHuns = 0;
	rowAdderThous = 0;
	rowAdderTenThou = 0;
	rowAdderHunThou = 0;
	rowAdderMil = 0;
	unbundledMil = 0;
	unbundledHunThou = 0;
	unbundledTenThou = 0;
	unbundledThous = 0;
	unbundledHuns = 0;
	unbundledTens = 0;
	unbundledOnes = 0;
	pointsM = [];
	pointsHT = [];
	pointsTT = [];
	pointsTH = [];
	pointsH = [];
	pointsT = [];
	pointsO = [];
	pointNames = [];
	labelMil = ggb1.instance.getValue("milCount");
	labelHunThou = ggb1.instance.getValue("hunthouCount");
	labelTenThou = ggb1.instance.getValue("tenthouCount");
	labelThous = ggb1.instance.getValue("thouCount");
	labelHuns = ggb1.instance.getValue("hunsCount");
	labelTens = ggb1.instance.getValue("tensCount");
	labelOnes = ggb1.instance.getValue("onesCount");
	labelMil2 = ggb1.instance.getValue("milCount2");
	labelHunThou2 = ggb1.instance.getValue("hunthouCount2");
	labelTenThou2 = ggb1.instance.getValue("tenthouCount2");
	labelThous2 = ggb1.instance.getValue("thouCount2");
	labelHuns2 = ggb1.instance.getValue("hunsCount2");
	labelTens2 = ggb1.instance.getValue("tensCount2");
	labelOnes2 = ggb1.instance.getValue("onesCount2");

	//sets the cross outs and extra text invisible
	ggb1.instance.setVisible("f", false);
	ggb1.instance.setVisible("g", false);
	ggb1.instance.setVisible("h", false);
	ggb1.instance.setVisible("i", false);
	ggb1.instance.setVisible("a_1", false);
	ggb1.instance.setVisible("b_1", false);
	ggb1.instance.setVisible("t_1", false);
	ggb1.instance.setVisible("textMil", false);
	ggb1.instance.setVisible("textHunThou", false);
	ggb1.instance.setVisible("textTenThou", false);
	ggb1.instance.setVisible("textThou", false);
	ggb1.instance.setVisible("textHuns", false);
	ggb1.instance.setVisible("textTens", false);
	ggb1.instance.setVisible("textOnes", false);
	ggb1.instance.setVisible("textMil2", false);
	ggb1.instance.setVisible("textHunThou2", false);
	ggb1.instance.setVisible("textTenThou2", false);
	ggb1.instance.setVisible("textThou2", false);
	ggb1.instance.setVisible("textHuns2", false);
	ggb1.instance.setVisible("textTens2", false);
	ggb1.instance.setVisible("textOnes2", false);
	ggb1.instance.setVisible("textMil3", false);
	ggb1.instance.setVisible("textHunThou3", false);
	ggb1.instance.setVisible("textTenThou3", false);
	ggb1.instance.setVisible("textThou3", false);
	ggb1.instance.setVisible("textHuns3", false);
	ggb1.instance.setVisible("textTens3", false);
	ggb1.instance.setVisible("textOnes3", false);
	ggb1.instance.setVisible("textMil4", false);
	ggb1.instance.setVisible("textHunThou4", false);
	ggb1.instance.setVisible("textTenThou4", false);
	ggb1.instance.setVisible("textThou4", false);
	ggb1.instance.setVisible("textHuns4", false);
	ggb1.instance.setVisible("textTens4", false);
	ggb1.instance.setVisible("textOnes4", false);
	ggb1.instance.setVisible("textComma", false);
	ggb1.instance.setVisible("textComma2", false);
	ggb1.instance.setVisible("textComma4", false);
	ggb1.instance.setVisible("textCommas", false);
	ggb1.instance.setVisible("textCommas2", false);
	ggb1.instance.setVisible("textCommas4", false);

	ggb1.instance.setValue("milBool", false);
	ggb1.instance.setValue("hunThouBool", false);
	ggb1.instance.setValue("tenThouBool", false);
	ggb1.instance.setValue("thouBool", false);
	ggb1.instance.setValue("hunBool", false);
	ggb1.instance.setValue("tenBool", false);
	ggb1.instance.setValue("oneBool", false);

	//determined what points where not integral to applet and deletes them
	pointNames = ggb1.instance.getAllObjectNames("point");
	lengthPointNames = pointNames.length;
	for (iter9 = 0; iter9 < lengthPointNames; iter9++) {
		if (!pointNames[iter9].includes("ig")) {
			ggb1.instance.deleteObject(pointNames[iter9]);
		}
	}
}

function boundIt(inputComp, position, min, max) {
	const result = utils.math.evaluateLatex(
		inputComp.getInput(position).text.replaceAll(",", "")
	);
	if (result.error) {
		inputComp.updateInput(position, { text: "0" }); // what should the text do/say if students input "cabbage"?
		return 0; // whatever you go with here, make sure it's inside of your min and max!
	} else if (result.value < min) {
		inputComp.updateInput(position, { text: `${min}` });
		return min;
	} else if (result.value > max) {
		inputComp.updateInput(position, { text: `${max}` });
		return max;
	}
	// you can add things like floor or toFixed to validate only integers, or something similar
	//let flooredNum = Math.floor(result.value);
	//inputComp.updateInput(position, { text: `${flooredNum}` });
	//return flooredNum;
	return result.value;
}
