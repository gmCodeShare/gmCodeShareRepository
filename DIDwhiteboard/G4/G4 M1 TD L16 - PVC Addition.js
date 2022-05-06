const { ggb1, buttonGroup1, fib1 } = components;

buttonGroup1.updateSingleButton({ disabled: true }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 3);
buttonGroup1.updateSingleButton({ disabled: true }, 4);

fib1.on("change", ({ values }) => {
	reset();
	buttonGroup1.updateSingleButton({ disabled: true }, 4);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});
buttonGroup1.on("click:1", () => {
	boundIt(fib1, 0, 0, 4999999);
	boundIt(fib1, 1, 0, 4999999);
	ggb1.instance.setValue("add1", fib1.getInput(0).text.replaceAll(",", ""));
	ggb1.instance.setValue("add2", fib1.getInput(1).text.replaceAll(",", ""));
	popul8();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	buttonGroup1.updateSingleButton({ disabled: false }, 4);
});

buttonGroup1.on("click:2", () => {
	organize();
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:3", () => {
	bundle();
});

buttonGroup1.on("click:4", () => {
	reset();
	fib1.updateInput(0, { text: "" });
	fib1.updateInput(1, { text: "" });
	buttonGroup1.updateSingleButton({ disabled: true }, 4);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

ggb1.instance.registerObjectUpdateListener("time", moveIt);

//alll of the global variables
//sets beginning point for organizing points
var xStartTen = ggb1.instance.getXcoord("ig6");
var yStartTen = ggb1.instance.getYcoord("ig6");
var xStartOne = ggb1.instance.getXcoord("ig7");
var yStartOne = ggb1.instance.getYcoord("ig7");
var xStartHun = ggb1.instance.getXcoord("ig5");
var yStartHun = ggb1.instance.getYcoord("ig5");
var xStartThou = ggb1.instance.getXcoord("ig21");
var yStartThou = ggb1.instance.getYcoord("ig21");
var xStartTenThou = ggb1.instance.getXcoord("ig22");
var yStartTenThou = ggb1.instance.getYcoord("ig22");
var xStartHunThou = ggb1.instance.getXcoord("ig23");
var yStartHunThou = ggb1.instance.getYcoord("ig23");
var xStartMil = ggb1.instance.getXcoord("ig24");
var yStartMil = ggb1.instance.getYcoord("ig24");
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
var pointsM = [];
var pointsHT = [];
var pointsTT = [];
var pointsTH = [];
var pointsH = [];
var pointsT = [];
var pointsO = [];
var pointsMB = [];
var pointsHTB = [];
var pointsTTB = [];
var pointsTHB = [];
var pointsHB = [];
var pointsTB = [];
var pointsOB = [];
var click = 0;
var allDone = false;
var a = 0;
var bundled = false;
//number of points that have been bundled up
var bundleNum = 0;
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
			ggb1.instance.setFixed("M" + popLoop, false, false);
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
			ggb1.instance.setFixed("HT" + popLoop, false, false);
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
			ggb1.instance.setFixed("TT" + popLoop, false, false);
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
			ggb1.instance.setFixed("TH" + popLoop, false, false);
			ggb1.instance.setCoords(
				"TH" + popLoop,
				ggb1.instance.getXcoord("ig21") + (popLoop % 5),
				ggb1.instance.getYcoord("ig21") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("TH" + popLoop, 255, 255, 255);
			ggb1.instance.setPointStyle("TH" + popLoop, -1); //////////////////////////////////////////////////////
			ggb1.instance.setLayer("TH" + popLoop, 0);
			pointsTH.push("TH" + popLoop);
		}
		//create points in hundreds region and add point name to list of points in that region
		for (var popLoop = 0; popLoop < labelHuns; popLoop++) {
			ggb1.instance.evalCommand("HU" + popLoop + "=PointIn(box)");
			ggb1.instance.setFixed("HU" + popLoop, false, false);
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
			ggb1.instance.setFixed("TE" + popLoop, false, false);
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
			ggb1.instance.setFixed("O" + popLoop, false, false);
			ggb1.instance.setCoords(
				"O" + popLoop,
				ggb1.instance.getXcoord("ig7") + (popLoop % 5),
				ggb1.instance.getYcoord("ig7") - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("O" + popLoop, 230, 15, 33);
			ggb1.instance.setLayer("O" + popLoop, 0);
			pointsO.push("O" + popLoop);
		}
		for (var popLoop = 0; popLoop < labelMil2; popLoop++) {
			ggb1.instance.evalCommand("MB" + popLoop + "=PointIn(box)");
			ggb1.instance.setFixed("MB" + popLoop, false, false);
			ggb1.instance.setCoords(
				"MB" + popLoop,
				ggb1.instance.getXcoord("ig24") + (popLoop % 5),
				ggb1.instance.getYcoord("ig24") - 10 - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("MB" + popLoop, 127, 206, 235);
			pointsMB.push("MB" + popLoop);
		}
		for (var popLoop = 0; popLoop < labelHunThou2; popLoop++) {
			ggb1.instance.evalCommand("HTB" + popLoop + "=PointIn(box)");
			ggb1.instance.setFixed("HTB" + popLoop, false, false);
			ggb1.instance.setCoords(
				"HTB" + popLoop,
				ggb1.instance.getXcoord("ig23") + (popLoop % 5),
				ggb1.instance.getYcoord("ig23") - 10 - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("HTB" + popLoop, 255, 218, 0);
			pointsHTB.push("HTB" + popLoop);
		}
		for (var popLoop = 0; popLoop < labelTenThou2; popLoop++) {
			ggb1.instance.evalCommand("TTB" + popLoop + "=PointIn(box)");
			ggb1.instance.setFixed("TTB" + popLoop, false, false);
			ggb1.instance.setCoords(
				"TTB" + popLoop,
				ggb1.instance.getXcoord("ig22") + (popLoop % 5),
				ggb1.instance.getYcoord("ig22") - 10 - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("TTB" + popLoop, 241, 127, 9);
			pointsTTB.push("TTB" + popLoop);
		}
		for (var popLoop = 0; popLoop < labelThous2; popLoop++) {
			ggb1.instance.evalCommand("THB" + popLoop + "=PointIn(box)");
			ggb1.instance.setFixed("THB" + popLoop, false, false);
			ggb1.instance.setCoords(
				"THB" + popLoop,
				ggb1.instance.getXcoord("ig21") + (popLoop % 5),
				ggb1.instance.getYcoord("ig21") - 10 - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("THB" + popLoop, 255, 255, 255);
			ggb1.instance.setPointStyle("THB" + popLoop, -1); //////////////////////////////////////////////////////
			pointsTHB.push("THB" + popLoop);
		}
		for (var popLoop = 0; popLoop < labelHuns2; popLoop++) {
			ggb1.instance.evalCommand("HB" + popLoop + "=PointIn(box)");
			ggb1.instance.setFixed("HB" + popLoop, false, false);
			ggb1.instance.setCoords(
				"HB" + popLoop,
				ggb1.instance.getXcoord("ig5") + (popLoop % 5),
				ggb1.instance.getYcoord("ig5") - 10 - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("HB" + popLoop, 0, 118, 165);
			pointsHB.push("HB" + popLoop);
		}
		for (var popLoop = 0; popLoop < labelTens2; popLoop++) {
			ggb1.instance.evalCommand("TB" + popLoop + "=PointIn(box)");
			ggb1.instance.setFixed("TB" + popLoop, false, false);
			ggb1.instance.setCoords(
				"TB" + popLoop,
				ggb1.instance.getXcoord("ig6") + (popLoop % 5),
				ggb1.instance.getYcoord("ig6") - 10 - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("TB" + popLoop, 0, 155, 69);
			pointsTB.push("TB" + popLoop);
		}
		for (var popLoop = 0; popLoop < labelOnes2; popLoop++) {
			ggb1.instance.evalCommand("OB" + popLoop + "=PointIn(box)");
			ggb1.instance.setFixed("OB" + popLoop, false, false);
			ggb1.instance.setCoords(
				"OB" + popLoop,
				ggb1.instance.getXcoord("ig7") + (popLoop % 5),
				ggb1.instance.getYcoord("ig7") - 10 - Math.floor(popLoop / 5)
			);
			ggb1.instance.setColor("OB" + popLoop, 230, 15, 33);
			pointsOB.push("OB" + popLoop);
		}
		//updates alogrithm text on right
		setText();
	}

	milsList = [...new Set(pointsM.concat(pointsMB))];
	hunThousList = [...new Set(pointsHT.concat(pointsHTB))];
	tenThousList = [...new Set(pointsTT.concat(pointsTTB))];
	thousList = [...new Set(pointsTH.concat(pointsTHB))];
	hunsList = [...new Set(pointsH.concat(pointsHB))];
	tensList = [...new Set(pointsT.concat(pointsTB))];
	onesList = [...new Set(pointsO.concat(pointsOB))];
}

//replots points in the optimal configuration
function organize() {
	console.log("organize:" + tensList);
	milsListLength = milsList.length;
	hunThousListLength = hunThousList.length;
	tenThousListLength = tenThousList.length;
	thousListLength = thousList.length;
	hunsListLength = hunsList.length;
	tensListLength = tensList.length;
	onesListLength = onesList.length;

	if (
		hunThousListLength >= 10 ||
		tenThousListLength >= 10 ||
		thousListLength >= 10 ||
		hunsListLength >= 10 ||
		tensListLength >= 10 ||
		onesListLength >= 10
	) {
		buttonGroup1.updateSingleButton({ disabled: false }, 3);
		ggb1.instance.setVisible("textComma4", false);
		ggb1.instance.setVisible("textCommas4", false);
	} else {
		ggb1.instance.setVisible("textComma4", true);
		ggb1.instance.setVisible("textCommas4", true);
		buttonGroup1.updateSingleButton({ disabled: true }, 3);
	}
	//create points in millions region
	for (var popLoop = 0; popLoop < milsListLength; popLoop++) {
		ggb1.instance.setCoords(
			milsList[popLoop],
			ggb1.instance.getXcoord("ig24") + (popLoop % 5),
			ggb1.instance.getYcoord("ig24") - Math.floor(popLoop / 5)
		);
		ggb1.instance.setFixed(milsList[popLoop], true, false);
		ggb1.instance.setColor(milsList[popLoop], 127, 206, 235);
		ggb1.instance.setLayer(milsList[popLoop], 0);
		ggb1.instance.setVisible(milsList[popLoop], true);
	}
	//create points in hundred thousands region
	for (var popLoop = 0; popLoop < hunThousListLength; popLoop++) {
		ggb1.instance.setCoords(
			hunThousList[popLoop],
			ggb1.instance.getXcoord("ig23") + (popLoop % 5),
			ggb1.instance.getYcoord("ig23") - Math.floor(popLoop / 5)
		);
		ggb1.instance.setFixed(hunThousList[popLoop], true, false);
		ggb1.instance.setColor(hunThousList[popLoop], 255, 218, 0);
		ggb1.instance.setLayer(hunThousList[popLoop], 0);
		ggb1.instance.setVisible(hunThousList[popLoop], true);
	}
	//create points in ten thousands region
	for (var popLoop = 0; popLoop < tenThousListLength; popLoop++) {
		ggb1.instance.setCoords(
			tenThousList[popLoop],
			ggb1.instance.getXcoord("ig22") + (popLoop % 5),
			ggb1.instance.getYcoord("ig22") - Math.floor(popLoop / 5)
		);
		ggb1.instance.setFixed(tenThousList[popLoop], true, false);
		ggb1.instance.setColor(tenThousList[popLoop], 241, 127, 9);
		ggb1.instance.setLayer(tenThousList[popLoop], 0);
		ggb1.instance.setVisible(tenThousList[popLoop], true);
	}
	//create points in thousands region
	for (var popLoop = 0; popLoop < thousListLength; popLoop++) {
		ggb1.instance.setCoords(
			thousList[popLoop],
			ggb1.instance.getXcoord("ig21") + (popLoop % 5),
			ggb1.instance.getYcoord("ig21") - Math.floor(popLoop / 5)
		);
		ggb1.instance.setFixed(thousList[popLoop], true, false);
		ggb1.instance.setColor(thousList[popLoop], 255, 255, 255);
		ggb1.instance.setLayer(thousList[popLoop], 0);
		ggb1.instance.setVisible(thousList[popLoop], true);
	}
	//create points in hundreds region
	for (var popLoop = 0; popLoop < hunsListLength; popLoop++) {
		ggb1.instance.setCoords(
			hunsList[popLoop],
			ggb1.instance.getXcoord("ig5") + (popLoop % 5),
			ggb1.instance.getYcoord("ig5") - Math.floor(popLoop / 5)
		);
		ggb1.instance.setFixed(hunsList[popLoop], true, false);
		ggb1.instance.setColor(hunsList[popLoop], 0, 118, 165);
		ggb1.instance.setLayer(hunsList[popLoop], 0);
		ggb1.instance.setVisible(hunsList[popLoop], true);
	}
	//create points in tens region
	for (var popLoop = 0; popLoop < tensListLength; popLoop++) {
		ggb1.instance.setCoords(
			tensList[popLoop],
			ggb1.instance.getXcoord("ig6") + (popLoop % 5),
			ggb1.instance.getYcoord("ig6") - Math.floor(popLoop / 5)
		);
		ggb1.instance.setFixed(tensList[popLoop], true, false);
		ggb1.instance.setColor(tensList[popLoop], 0, 155, 69);
		ggb1.instance.setLayer(tensList[popLoop], 0);
		ggb1.instance.setVisible(tensList[popLoop], true);
	}
	//create points in ones region
	for (var popLoop = 0; popLoop < onesListLength; popLoop++) {
		ggb1.instance.setCoords(
			onesList[popLoop],
			ggb1.instance.getXcoord("ig7") + (popLoop % 5),
			ggb1.instance.getYcoord("ig7") - Math.floor(popLoop / 5)
		);
		ggb1.instance.setFixed(onesList[popLoop], true, false);
		ggb1.instance.setColor(onesList[popLoop], 230, 15, 33);
		ggb1.instance.setLayer(onesList[popLoop], 0);
		ggb1.instance.setVisible(onesList[popLoop], true);
	}
	if (
		bundled == false &&
		(ggb1.instance.getValue("milsCount4") > 9 ||
			ggb1.instance.getValue("hunthouCount4") > 9 ||
			ggb1.instance.getValue("tenthouCount4") > 9 ||
			ggb1.instance.getValue("thouCount4") > 9 ||
			ggb1.instance.getValue("hunsCount4") > 9 ||
			ggb1.instance.getValue("tensCount4") > 9 ||
			ggb1.instance.getValue("onesCount4") > 9)
	) {
	}
	setAnswerText();
}

function bundle() {
	//increases number for new points by one
	bundleNum++;
	allDone = false;
	//starts time running
	ggb1.instance.setValue("time", 0);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	//sets button states
}

function moveIt() {
	//if there are ten or more points in the ones region, translate ten at a time to the tens region, swap them for a ten and reorganize
	if (onesListLength >= 10 && allDone == false) {
		for (let i = 1; i <= 10; i++) {
			//hides points and images at the end of the list
			ggb1.instance.setVisible(onesList[onesListLength - i], false);
			//make points in the ones region that move to the tens place
			ggb1.instance.evalCommand(
				"MovingOnes" +
					i +
					"=Translate(" +
					onesList[onesListLength - i] +
					",time*Vector(" +
					onesList[onesListLength - i] +
					",(0,-9)))"
			);
			ggb1.instance.setVisible("MovingOnes" + i, true);
			ggb1.instance.setColor("MovingOnes" + i, 230, 15, 33);
			if (
				ggb1.instance.getValue("time") > 0.95 &&
				ggb1.instance.getValue("time") < 1
			) {
				ggb1.instance.setColor("MovingOnes" + i, 0, 155, 69);
			}
			if (ggb1.instance.getValue("time") == 1) {
				ggb1.instance.stopAnimation();
				ggb1.instance.setVisible("MovingOnes" + i, false);
			}
		}
		if (ggb1.instance.getValue("time") == 1) {
			onesList.splice(onesListLength - 10, onesListLength);
			ggb1.instance.evalCommand(
				"BundlePointTens" + bundleNum + "=(0,0);"
			);
			ggb1.instance.setVisible("BundlePointTens" + bundleNum, false);
			tensList.push("BundlePointTens" + bundleNum);
			console.log(tensList);
			allDone = true;
			organize();
			ggb1.instance.setValue("tensCount3", 1);
			ggb1.instance.setVisible("textTens3", true);
		}
	}
	//if there are ten or more points in the hundredths region, translate ten at a time to the tenths region, swap them for a tenth and reorganize
	if (tensListLength >= 10 && onesListLength < 10 && allDone == false) {
		for (var i = 1; i < 11; i++) {
			//hide last ten points
			ggb1.instance.setVisible(tensList[tensListLength - i], false);
			//create new points that move from hundredths to tenths
			ggb1.instance.evalCommand(
				"MovingTens" +
					i +
					"=Translate(" +
					tensList[tensListLength - i] +
					",time*Vector(" +
					tensList[tensListLength - i] +
					",(-6,-9)))"
			);
			//show those points and set their colors to yellow
			ggb1.instance.setVisible("MovingTens" + i, true);
			ggb1.instance.setColor("MovingTens" + i, 0, 155, 69);
			//if almost to the end, set color to purple
			if (
				ggb1.instance.getValue("time") > 0.95 &&
				ggb1.instance.getValue("time") < 1
			) {
				ggb1.instance.setColor("MovingTens" + i, 0, 118, 165);
			}
			//at the end, hide points, push hidden points to a list
			if (ggb1.instance.getValue("time") == 1) {
				ggb1.instance.setVisible("MovingTens" + i, false);
			}
		}
		//at the end, remove last ten points and images from hundredths lists
		if (ggb1.instance.getValue("time") == 1) {
			tensList.splice(tensListLength - 10, tensListLength);
			//add one point to tenths place
			ggb1.instance.evalCommand(
				"BundlePointHunds" + bundleNum + "=(0,0);"
			);
			ggb1.instance.setVisible("BundlePointHunds" + bundleNum, false);
			hunsList.push("BundlePointHunds" + bundleNum);
			//organize everything
			allDone = true;
			organize();
			ggb1.instance.setValue("hunsCount3", 1);
			ggb1.instance.setVisible("textHuns3", true);
		}
	}
	//if there are ten or more points in the hundredths region, translate ten at a time to the tenths region, swap them for a tenth and reorganize
	if (
		hunsListLength >= 10 &&
		tensListLength < 10 &&
		onesListLength < 10 &&
		allDone == false
	) {
		for (var i = 1; i < 11; i++) {
			//hide last hundred points
			ggb1.instance.setVisible(hunsList[hunsListLength - i], false);
			//create new points that move from hundredths to tenths
			ggb1.instance.evalCommand(
				"MovingHuns" +
					i +
					"=Translate(" +
					hunsList[hunsListLength - i] +
					",time*Vector(" +
					hunsList[hunsListLength - i] +
					",(-12,-9)))"
			);
			//show those points and set their colors to yellow
			ggb1.instance.setVisible("MovingHuns" + i, true);
			ggb1.instance.setColor("MovingHuns" + i, 0, 118, 165);
			//if almost to the end, set color to purple
			if (
				ggb1.instance.getValue("time") > 0.95 &&
				ggb1.instance.getValue("time") < 1
			) {
				ggb1.instance.setColor("MovingHuns" + i, 255, 255, 255);
			}
			//at the end, hide points, push hidden points to a list
			if (ggb1.instance.getValue("time") == 1) {
				ggb1.instance.setVisible("MovingHuns" + i, false);
			}
		}
		//at the end, remove last ten points and images from hundredths lists
		if (ggb1.instance.getValue("time") == 1) {
			hunsList.splice(hunsListLength - 10, hunsListLength);
			//add one point to tenths place
			ggb1.instance.evalCommand(
				"BundlePointThous" + bundleNum + "=(0,0);"
			);
			ggb1.instance.setVisible("BundlePointThous" + bundleNum, false);
			thousList.push("BundlePointThous" + bundleNum);
			//organize everything
			allDone = true;
			organize();
			ggb1.instance.setValue("thouCount3", 1);
			ggb1.instance.setVisible("textThou3", true);
		}
	}
	//if there are ten or more points in the hundredths region, translate ten at a time to the tenths region, swap them for a tenth and reorganize
	if (
		thousListLength >= 10 &&
		hunsListLength < 10 &&
		tensListLength < 10 &&
		onesListLength < 10 &&
		allDone == false
	) {
		for (var i = 1; i < 11; i++) {
			//hide last hundred points
			ggb1.instance.setVisible(thousList[thousListLength - i], false);
			//create new points that move from hundredths to tenths
			ggb1.instance.evalCommand(
				"MovingThous" +
					i +
					"=Translate(" +
					thousList[thousListLength - i] +
					",time*Vector(" +
					thousList[thousListLength - i] +
					",(-18,-9)))"
			);
			//show those points and set their colors to yellow
			ggb1.instance.setVisible("MovingThous" + i, true);
			ggb1.instance.setColor("MovingThous" + i, 255, 255, 255);
			//if almost to the end, set color to purple
			if (
				ggb1.instance.getValue("time") > 0.95 &&
				ggb1.instance.getValue("time") < 1
			) {
				ggb1.instance.setColor("MovingThous" + i, 241, 127, 9);
			}
			//at the end, hide points, push hidden points to a list
			if (ggb1.instance.getValue("time") == 1) {
				ggb1.instance.setVisible("MovingThous" + i, false);
			}
		}
		//at the end, remove last ten points and images from hundredths lists
		if (ggb1.instance.getValue("time") == 1) {
			thousList.splice(thousListLength - 10, thousListLength);
			//add one point to tenths place
			ggb1.instance.evalCommand(
				"BundlePointTenThous" + bundleNum + "=(0,0);"
			);
			ggb1.instance.setVisible("BundlePointTenThous" + bundleNum, false);
			tenThousList.push("BundlePointTenThous" + bundleNum);
			//organize everything
			allDone = true;
			organize();
			ggb1.instance.setValue("tenThouCount3", 1);
			ggb1.instance.setVisible("textTenThou3", true);
		}
	}
	//if there are ten or more points in the hundredths region, translate ten at a time to the tenths region, swap them for a tenth and reorganize
	if (
		tenThousListLength >= 10 &&
		thousListLength < 10 &&
		hunsListLength < 10 &&
		tensListLength < 10 &&
		onesListLength < 10 &&
		allDone == false
	) {
		for (var i = 1; i < 11; i++) {
			//hide last hundred points
			ggb1.instance.setVisible(
				tenThousList[tenThousListLength - i],
				false
			);
			//create new points that move from hundredths to tenths
			ggb1.instance.evalCommand(
				"MovingTenThous" +
					i +
					"=Translate(" +
					tenThousList[tenThousListLength - i] +
					",time*Vector(" +
					tenThousList[tenThousListLength - i] +
					",(-24,-9)))"
			);
			//show those points and set their colors to yellow
			ggb1.instance.setVisible("MovingTenThous" + i, true);
			ggb1.instance.setColor("MovingTenThous" + i, 241, 127, 9);
			//if almost to the end, set color to purple
			if (
				ggb1.instance.getValue("time") > 0.95 &&
				ggb1.instance.getValue("time") < 1
			) {
				ggb1.instance.setColor("MovingTenThous" + i, 255, 218, 0);
			}
			//at the end, hide points, push hidden points to a list
			if (ggb1.instance.getValue("time") == 1) {
				ggb1.instance.setVisible("MovingTenThous" + i, false);
			}
		}
		//at the end, remove last ten points and images from hundredths lists
		if (ggb1.instance.getValue("time") == 1) {
			tenThousList.splice(tenThousListLength - 10, tenThousListLength);
			//add one point to tenths place
			ggb1.instance.evalCommand(
				"BundlePointHunThous" + bundleNum + "=(0,0);"
			);
			ggb1.instance.setVisible("BundlePointHunThous" + bundleNum, false);
			hunThousList.push("BundlePointHunThous" + bundleNum);
			//organize everything
			allDone = true;
			organize();
			ggb1.instance.setValue("hunThouCount3", 1);
			ggb1.instance.setVisible("textHunThou3", true);
		}
	}
	//if there are ten or more points in the hundredths region, translate ten at a time to the tenths region, swap them for a tenth and reorganize
	if (
		hunThousListLength >= 10 &&
		tenThousListLength < 10 &&
		thousListLength < 10 &&
		hunsListLength < 10 &&
		tensListLength < 10 &&
		onesListLength < 10 &&
		allDone == false
	) {
		for (var i = 1; i < 11; i++) {
			//hide last hundred points
			ggb1.instance.setVisible(
				hunThousList[hunThousListLength - i],
				false
			);
			//create new points that move from hundredths to tenths
			ggb1.instance.evalCommand(
				"MovingHunThous" +
					i +
					"=Translate(" +
					hunThousList[hunThousListLength - i] +
					",time*Vector(" +
					hunThousList[hunThousListLength - i] +
					",(-30,-9)))"
			);
			//show those points and set their colors to yellow
			ggb1.instance.setVisible("MovingHunThous" + i, true);
			ggb1.instance.setColor("MovingHunThous" + i, 255, 218, 0);
			//if almost to the end, set color to purple
			if (
				ggb1.instance.getValue("time") > 0.95 &&
				ggb1.instance.getValue("time") < 1
			) {
				ggb1.instance.setColor("MovingHunThous" + i, 127, 206, 235);
			}
			//at the end, hide points, push hidden points to a list
			if (ggb1.instance.getValue("time") == 1) {
				ggb1.instance.setVisible("MovingHunThous" + i, false);
			}
		}
		//at the end, remove last ten points and images from hundredths lists
		if (ggb1.instance.getValue("time") == 1) {
			hunThousList.splice(hunThousListLength - 10, hunThousListLength);
			//add one point to tenths place
			ggb1.instance.evalCommand(
				"BundlePointMils" + bundleNum + "=(0,0);"
			);
			ggb1.instance.setVisible("BundlePointMils" + bundleNum, false);
			milsList.push("BundlePointMils" + bundleNum);
			//organize everything
			allDone = true;
			organize();
			ggb1.instance.setValue("milCount3", 1);
			ggb1.instance.setVisible("textMil3", true);
		}
	}
	setAnswerText();
	bundled = true;
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
	if (ggb1.instance.getValue("milCount") == 0) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textCommas", false);
	}
	if (
		ggb1.instance.getValue("milCount") == 0 &&
		ggb1.instance.getValue("hunthouCount") == 0
	) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textCommas", false);
	}
	if (
		ggb1.instance.getValue("milCount") == 0 &&
		ggb1.instance.getValue("hunthouCount") == 0 &&
		ggb1.instance.getValue("tenthouCount") == 0
	) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textTenThou", false);
		ggb1.instance.setVisible("textCommas", false);
	}
	if (
		ggb1.instance.getValue("milCount") == 0 &&
		ggb1.instance.getValue("hunthouCount") == 0 &&
		ggb1.instance.getValue("tenthouCount") == 0 &&
		ggb1.instance.getValue("thouCount") == 0
	) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textTenThou", false);
		ggb1.instance.setVisible("textThou", false);
		ggb1.instance.setVisible("textComma", false);
		ggb1.instance.setVisible("textCommas", false);
	}
	if (
		ggb1.instance.getValue("milCount") == 0 &&
		ggb1.instance.getValue("hunthouCount") == 0 &&
		ggb1.instance.getValue("tenthouCount") == 0 &&
		ggb1.instance.getValue("thouCount") == 0 &&
		ggb1.instance.getValue("hunsCount") == 0
	) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textTenThou", false);
		ggb1.instance.setVisible("textThou", false);
		ggb1.instance.setVisible("textHuns", false);
		ggb1.instance.setVisible("textComma", false);
		ggb1.instance.setVisible("textCommas", false);
	}
	if (
		ggb1.instance.getValue("milCount") == 0 &&
		ggb1.instance.getValue("hunthouCount") == 0 &&
		ggb1.instance.getValue("tenthouCount") == 0 &&
		ggb1.instance.getValue("thouCount") == 0 &&
		ggb1.instance.getValue("hunsCount") == 0 &&
		ggb1.instance.getValue("tensCount") == 0
	) {
		ggb1.instance.setVisible("textMil", false);
		ggb1.instance.setVisible("textHunThou", false);
		ggb1.instance.setVisible("textTenThou", false);
		ggb1.instance.setVisible("textThou", false);
		ggb1.instance.setVisible("textHuns", false);
		ggb1.instance.setVisible("textTens", false);
		ggb1.instance.setVisible("textComma", false);
		ggb1.instance.setVisible("textCommas", false);
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
		ggb1.instance.setVisible("textComma2", false);
		ggb1.instance.setVisible("textCommas2", false);
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
		ggb1.instance.setVisible("textComma2", false);
		ggb1.instance.setVisible("textCommas2", false);
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
		ggb1.instance.setVisible("textComma2", false);
		ggb1.instance.setVisible("textCommas2", false);
	}
}

function setAnswerText() {
	ggb1.instance.setTextValue("textOnes4", onesListLength);
	ggb1.instance.setTextValue("textTens4", tensListLength);
	ggb1.instance.setTextValue("textHuns4", hunsListLength);
	ggb1.instance.setTextValue("textThou4", thousListLength);
	ggb1.instance.setTextValue("textTenThou4", tenThousListLength);
	ggb1.instance.setTextValue("textHunThou4", hunThousListLength);
	ggb1.instance.setTextValue("textMil4", milsListLength);
	ggb1.instance.setVisible("textOnes4", true);
	ggb1.instance.setVisible("textTens4", true);
	ggb1.instance.setVisible("textHuns4", true);
	ggb1.instance.setVisible("textThou4", true);
	ggb1.instance.setVisible("textTenThou4", true);
	ggb1.instance.setVisible("textHunThou4", true);
	ggb1.instance.setVisible("textMil4", true);
//	ggb1.instance.setVisible("textComma4", true);
//	ggb1.instance.setVisible("textCommas4", true);
	/*
	if (
		bundled == true ||
		(milsListLength < 10 &&
			hunThousListLength < 10 &&
			tenThousListLength < 10 &&
			thousListLength < 10 &&
			hunsListLength < 10 &&
			tensListLength < 10)
	) {*/
	if (milsListLength == 0) {
		ggb1.instance.setVisible("textMil5", false);
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textCommas4", false);
	}
	if (milsListLength == 0 && hunThousListLength == 0) {
		ggb1.instance.setVisible("textMil5", false);
		ggb1.instance.setVisible("textHunThou5", false);
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textCommas4", false);
	}
	if (
		milsListLength == 0 &&
		hunThousListLength == 0 &&
		tenThousListLength == 0
	) {
		ggb1.instance.setVisible("textMil5", false);
		ggb1.instance.setVisible("textHunThou5", false);
		ggb1.instance.setVisible("textTenThou5", false);
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textTenThou4", false);
		ggb1.instance.setVisible("textCommas4", false);
	}
	if (
		milsListLength == 0 &&
		hunThousListLength == 0 &&
		tenThousListLength == 0 &&
		thousListLength == 0
	) {
		ggb1.instance.setVisible("textMil5", false);
		ggb1.instance.setVisible("textHunThou5", false);
		ggb1.instance.setVisible("textTenThou5", false);
		ggb1.instance.setVisible("textThou5", false);
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textTenThou4", false);
		ggb1.instance.setVisible("textThou4", false);
		ggb1.instance.setVisible("textCommas4", false);
		ggb1.instance.setVisible("textComma4", false);
	}
	if (
		milsListLength == 0 &&
		hunThousListLength == 0 &&
		tenThousListLength == 0 &&
		thousListLength == 0 &&
		hunsListLength == 0
	) {
		ggb1.instance.setVisible("textMil5", false);
		ggb1.instance.setVisible("textHunThou5", false);
		ggb1.instance.setVisible("textTenThou5", false);
		ggb1.instance.setVisible("textThou5", false);
		ggb1.instance.setVisible("textHuns5", false);
		ggb1.instance.setVisible("textMil4", false);
		ggb1.instance.setVisible("textHunThou4", false);
		ggb1.instance.setVisible("textTenThou4", false);
		ggb1.instance.setVisible("textThou4", false);
		ggb1.instance.setVisible("textHuns4", false);
		ggb1.instance.setVisible("textCommas4", false);
		ggb1.instance.setVisible("textComma4", false);
	}
	if (
		milsListLength == 0 &&
		hunThousListLength == 0 &&
		tenThousListLength == 0 &&
		thousListLength == 0 &&
		hunsListLength == 0 &&
		tensListLength == 0
	) {
		ggb1.instance.setVisible("textMil5", false);
		ggb1.instance.setVisible("textHunThou5", false);
		ggb1.instance.setVisible("textTenThou5", false);
		ggb1.instance.setVisible("textThou5", false);
		ggb1.instance.setVisible("textHuns5", false);
		ggb1.instance.setVisible("textTens5", false);
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
//}
//sets all values back to the start
function reset() {
	onesGrowthMarker = 0;
	tensGrowthMarker = 0;
	hunsGrowthMarker = 0;
	thousGrowthMarker = 0;
	tenThousGrowthMarker = 0;
	hunThousGrowthMarker = 0;
	milGrowthMarker = 0;
	click = 0;
	bundleNum = 0;

	pointsM = [];
	pointsHT = [];
	pointsTT = [];
	pointsTH = [];
	pointsH = [];
	pointsT = [];
	pointsO = [];
	pointsMB = [];
	pointsHTB = [];
	pointsTTB = [];
	pointsTHB = [];
	pointsHB = [];
	pointsTB = [];
	pointsOB = [];
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
	ggb1.instance.setValue("milCount3", 0);
	ggb1.instance.setValue("hunthouCount3", 0);
	ggb1.instance.setValue("tenthouCount3", 0);
	ggb1.instance.setValue("thouCount3", 0);
	ggb1.instance.setValue("hunsCount3", 0);
	ggb1.instance.setValue("tensCount3", 0);
	ggb1.instance.setValue("onesCount3", 0);
	ggb1.instance.setValue("timeShrink", 0);
	ggb1.instance.setValue("timeGrow", 0);
	milsListLength = 0;
	hunThousListLength = 0;
	tenThousListLength = 0;
	thousListLength = 0;
	hunsListLength = 0;
	tensListLength = 0;
	onesListLength = 0;
	bundled = false;

	//sets the cross outs and extra text invisible
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
	ggb1.instance.setVisible("textMil5", false);
	ggb1.instance.setVisible("textHunThou5", false);
	ggb1.instance.setVisible("textTenThou5", false);
	ggb1.instance.setVisible("textThou5", false);
	ggb1.instance.setVisible("textHuns5", false);
	ggb1.instance.setVisible("textTens5", false);
	ggb1.instance.setVisible("textOnes5", false);
	ggb1.instance.setVisible("textComma", false);
	ggb1.instance.setVisible("textCommas", false);
	ggb1.instance.setVisible("textComma2", false);
	ggb1.instance.setVisible("textCommas2", false);
	ggb1.instance.setVisible("textComma4", false);
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
