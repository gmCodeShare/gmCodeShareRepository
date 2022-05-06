const { ggb1, fib1, buttonGroup1 } = components;

ggb1.instance.registerClientListener(breakOut);
buttonGroup1.updateSingleButton({ disabled: true }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 3);

fib1.on("change", ({ values }) => {
	reset();
	ggb1.instance.setValue("dividend", fib1.getInput(0).text);
	ggb1.instance.setValue("divisor", fib1.getInput(1).text);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});
buttonGroup1.on("click:1", () => {
	popul8();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
buttonGroup1.on("click:2", () => {
	share();
});
buttonGroup1.on("click:3", () => {
	reset();
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

//global variables for all of the functions
var rowAdderOnes = 0;
var rowAdderTens = 0;
var labelTens = ggb1.instance.getValue("tensCount");
var labelOnes = ggb1.instance.getValue("onesCount");
var unbundledTens = 0;
var unbundledOnes = 0;
var pointsH = [];
var pointsT = [];
var pointsO = [];
var sharedPointsH = [];
var sharedPointsT = [];
var sharedPointsO = [];

function popul8() {
	//creates the name of points so that points and unbundled points follow in sequence
	labelTens = ggb1.instance.getValue("tensCount");
	labelOnes = ggb1.instance.getValue("onesCount");

	//creates points in the hundreds region of the chart and sets their coordinates and color
	for (
		var popLoop = 0;
		popLoop < ggb1.instance.getValue("hundredsCount");
		popLoop++
	) {
		ggb1.instance.evalCommand("H" + popLoop + "=PointIn(box)");
		ggb1.instance.setCoords(
			"H" + popLoop,
			ggb1.instance.getXcoord("ig1") + 1 + (popLoop % 5),
			ggb1.instance.getYcoord("ig1") - 1 - 2 * Math.floor(popLoop / 5)
		);
		ggb1.instance.setColor("H" + popLoop, 0, 118, 165);
		//creates list of points in the hundreds region
		pointsH.push("H" + popLoop);
	}
	//creates points in the tens region of the chart and sets their coordinates and color
	for (
		var popLoop = 0;
		popLoop < ggb1.instance.getValue("tensCount");
		popLoop++
	) {
		ggb1.instance.evalCommand("T" + popLoop + "=PointIn(box)");
		ggb1.instance.setCoords(
			"T" + popLoop,
			ggb1.instance.getXcoord("ig4") + 1 + (popLoop % 5),
			ggb1.instance.getYcoord("ig4") - 1 - 2 * Math.floor(popLoop / 5)
		);
		ggb1.instance.setColor("T" + popLoop, 0, 155, 69);
		//creates list of points in the tens region
		pointsT.push("T" + popLoop);
	}
	//creates points in the ones region of the chart and sets their coordinates and color
	for (
		var popLoop = 0;
		popLoop < ggb1.instance.getValue("onesCount");
		popLoop++
	) {
		ggb1.instance.evalCommand("O" + popLoop + "=PointIn(box)");
		ggb1.instance.setCoords(
			"O" + popLoop,
			ggb1.instance.getXcoord("ig5") + 1 + (popLoop % 5),
			ggb1.instance.getYcoord("ig5") - 1 - 2 * Math.floor(popLoop / 5)
		);
		ggb1.instance.setColor("O" + popLoop, 230, 15, 33);
		//creates list of points in the ones region
		pointsO.push("O" + popLoop);
	}
}
function organize() {
	for (let i = 0, L = pointsH.length; i < L; i++) {
		ggb1.instance.setCoords(
			pointsH[i],
			ggb1.instance.getXcoord("ig1") + 1 + (i % 5),
			ggb1.instance.getYcoord("ig1") - 1 - 2 * Math.floor(i / 5)
		);
	}
	for (let i = 0, L = pointsT.length; i < L; i++) {
		ggb1.instance.setCoords(
			pointsT[i],
			ggb1.instance.getXcoord("ig4") + 1 + (i % 5),
			ggb1.instance.getYcoord("ig4") - 1 - 2 * Math.floor(i / 5)
		);
	}
	for (let i = 0, L = pointsO.length; i < L; i++) {
		ggb1.instance.setCoords(
			pointsO[i],
			ggb1.instance.getXcoord("ig5") + 1 + (i % 5),
			ggb1.instance.getYcoord("ig5") - 1 - 2 * Math.floor(i / 5)
		);
	}
	//||(pointsH.length>(10*ggb1.instance.getValue("divisor"))||pointsT.length>(10*ggb1.instance.getValue("divisor"))||pointsO.length>(10*ggb1.instance.getValue("divisor")))
	if (
		pointsH.length == 0 &&
		pointsT.length == 0 &&
		pointsO.length < ggb1.instance.getValue("divisor")
	) {
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	} else {
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	}
}

//unbundles points when dragged to a new region
function breakOut(grabbed) {
	if (grabbed[0] == "select") {
		name = grabbed[1];
		type = ggb1.instance.getObjectType(grabbed[1]);
	}

	//if a hundreds point is dragged to the tens region
	if (grabbed[0] == "dragEnd") {
		type = ggb1.instance.getObjectType(grabbed[1]);
		if (type == "point") {
			if (
				name.includes("H") &&
				ggb1.instance.getXcoord(grabbed[1]) >
					ggb1.instance.getValue("SectionLength")
			) {
				//removes point from hundreds list
				var choppingBlock = pointsH.indexOf(name);
				pointsH.splice(choppingBlock, 1);
				// it sets that point's visibility to false and creates ten new points in the ones region in two rows of five and adds them to the regional list
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand(
							"SetVisibleInView(" + name + ",1,false)"
						);
						ggb1.instance.evalCommand(
							"T" + labelTens + "=PointIn(box)"
						);
						ggb1.instance.setCoords(
							"T" + labelTens,
							ggb1.instance.getXcoord("ig4") + 1 + row,
							ggb1.instance.getYcoord("ig4") -
								5 -
								2 * column -
								4 * rowAdderTens
						);
						ggb1.instance.setColor("T" + labelTens, 0, 155, 69);
						pointsT.push("T" + labelTens);
						labelTens++;
					}
				}
				//bumps the next row available down one and tells later functions how many unbundled tens there are
				rowAdderTens = rowAdderTens + 1;
				unbundledTens = unbundledTens + 1;
			}
		}
		//if a tens point is dragged to the ones region
		if (type == "point") {
			if (
				name.includes("T") &&
				ggb1.instance.getXcoord(grabbed[1]) >
					2 * ggb1.instance.getValue("SectionLength")
			) {
				//removes point from tens list
				var choppingBlock = pointsT.indexOf(name);
				pointsT.splice(choppingBlock, 1);
				//it sets that point's visibility to false and creates ten new points in the ones region in two rows of five and adds them to the regional list
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand(
							"SetVisibleInView(" + name + ",1,false)"
						);
						ggb1.instance.evalCommand(
							"O" + labelOnes + "=PointIn(box)"
						);
						ggb1.instance.setCoords(
							"O" + labelOnes,
							ggb1.instance.getXcoord("ig5") + 1 + row,
							ggb1.instance.getYcoord("ig5") -
								5 -
								2 * column -
								4 * rowAdderOnes
						);
						ggb1.instance.setColor("O" + labelOnes, 230, 15, 33);
						pointsO.push("O" + labelOnes);
						labelOnes++;
					}
				}
				//bumps the next row available down one and tells later functions how many unbundled ones there are
				rowAdderOnes = rowAdderOnes + 1;
				unbundledOnes = unbundledOnes + 1;
			}
		}
		console.log("Before: ", pointsH, pointsT, pointsO);
		console.log(
			"Shared Before: ",
			sharedPointsH,
			sharedPointsT,
			sharedPointsO
		);
	}
	organize();
}

//divides the points evenly into divisor groups of quotient points
function share() {
	rowAdderTens = 0;
	rowAdderOnes = 0;
	//creates gray spacers for the groups
	for (var i = 0; i < ggb1.instance.getValue("divisor") - 1; i++) {
		ggb1.instance.evalCommand(
			"DividerSeg" +
				i +
				"=Segment((x(ig2),y(ig2)+2+2*(Mod(" +
				i +
				",divisor))),(x(ig2)+3*SectionLength,y(ig2)+2+2*(Mod(" +
				i +
				",divisor))))"
		);
		ggb1.instance.setColor("DividerSeg" + i, 167, 167, 167);
		ggb1.instance.setFixed("DividerSeg" + i, true, false);
	}
	//if there are more hundreds points in the chart than the divisor, it moves as many sets of points to the bottom of the chart as it can
	if (pointsH.length >= ggb1.instance.getValue("divisor")) {
		let L =
			Math.floor(pointsH.length / ggb1.instance.getValue("divisor")) *
			ggb1.instance.getValue("divisor");
		for (var shareLoopHunds = 0; shareLoopHunds < L; shareLoopHunds++) {
			ggb1.instance.setCoords(
				pointsH[shareLoopHunds],
				ggb1.instance.getXcoord("ig2") +
					Math.floor(
						sharedPointsH.length / ggb1.instance.getValue("divisor")
					) +
					1 +
					Math.floor(shareLoopHunds / L),
				ggb1.instance.getYcoord("ig2") +
					1 +
					2 * (shareLoopHunds % ggb1.instance.getValue("divisor"))
			);
			ggb1.instance.setFixed(pointsH[shareLoopHunds], true, false);
			sharedPointsH.push(pointsH[shareLoopHunds]);
		}
		pointsH.splice(0, L);
	}

	//if there are more tens points in the chart than the divisor, it moves as many sets of points to the bottom of the chart as it can
	if (pointsT.length >= ggb1.instance.getValue("divisor")) {
		let L =
			Math.floor(pointsT.length / ggb1.instance.getValue("divisor")) *
			ggb1.instance.getValue("divisor");
		for (var shareLoopTens = 0; shareLoopTens < L; shareLoopTens++) {
			ggb1.instance.setCoords(
				pointsT[shareLoopTens],
				ggb1.instance.getXcoord("ig3") +
					Math.floor(
						sharedPointsT.length / ggb1.instance.getValue("divisor")
					) +
					1 +
					Math.floor(shareLoopTens / L),
				ggb1.instance.getYcoord("ig3") +
					1 +
					2 * (shareLoopTens % ggb1.instance.getValue("divisor"))
			);
			ggb1.instance.setFixed(pointsT[shareLoopTens], true, false);
			sharedPointsT.push(pointsT[shareLoopTens]);
		}
		pointsT.splice(0, L);
	}
	//if there are more ones points in the chart than the divisor, it moves as many sets of points to the bottom of the chart as it can
	if (pointsO.length >= ggb1.instance.getValue("divisor")) {
		let L =
			Math.floor(pointsO.length / ggb1.instance.getValue("divisor")) *
			ggb1.instance.getValue("divisor");
		for (var shareLoopOnes = 0; shareLoopOnes < L; shareLoopOnes++) {
			ggb1.instance.setCoords(
				pointsO[shareLoopOnes],
				ggb1.instance.getXcoord("ig6") +
					Math.floor(
						sharedPointsO.length / ggb1.instance.getValue("divisor")
					) +
					1 +
					Math.floor(shareLoopOnes / L),
				ggb1.instance.getYcoord("ig6") +
					1 +
					2 * (shareLoopOnes % ggb1.instance.getValue("divisor"))
			);
			ggb1.instance.setFixed(pointsO[shareLoopOnes], true, false);
			sharedPointsO.push(pointsO[shareLoopOnes]);
		}
		pointsO.splice(0, L);
	}
	organize();
}

//back to square one
function reset() {
	//sets the "Show Points" button to be visible
	ggb1.instance.setVisible("button1", true);
	ggb1.instance.setVisible("button3", false);
	//resets all values to their starting points
	pointsH = [];
	pointsT = [];
	pointsO = [];
	sharedPointsH = [];
	sharedPointsT = [];
	sharedPointsO = [];
	rowAdderOnes = 0;
	rowAdderTens = 0;
	labelTens = ggb1.instance.getValue("tensCount");
	labelOnes = ggb1.instance.getValue("onesCount");
	unbundledTens = 0;
	unbundledOnes = 0;
	//creates a list of points and deletes any point that is not named with ig, which is integral to the applet
	pointNames = [];
	pointNames = ggb1.instance.getAllObjectNames("point");
	for (var i = 0; i < ggb1.instance.getValue("divisor") - 1; i++) {
		ggb1.instance.deleteObject("DividerSeg" + i);
	}
	lengthPointNames = pointNames.length;
	for (iter9 = 0; iter9 < lengthPointNames; iter9++) {
		if (!pointNames[iter9].includes("ig")) {
			ggb1.instance.deleteObject(pointNames[iter9]);
		}
	}
}
