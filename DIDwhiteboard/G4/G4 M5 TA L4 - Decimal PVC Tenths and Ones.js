const { ggb1, buttonGroup1, input1 } = components;

//register listeners for moving points
ggb1.instance.registerObjectUpdateListener("time", moveIt);
ggb1.instance.registerObjectUpdateListener("untime", unMoveIt);

//show disks on button click
buttonGroup1.on("click:1", () => {
	ggb1.instance.setValue("myNumber", input1.data.text);
	populate();
});

//bundle disks on button click
buttonGroup1.on("click:2", () => {
	bundle();
});

//unbundle disks on button click
buttonGroup1.on("click:3", () => {
	unbundle();
});

//resets the applet
buttonGroup1.on("click:4", () => {
	reset();
});

//sets up lists and variables for list management
var hundredthsList = [];
var tenthsList = [];
var onesList = [];
var hundredthsImageList = [];
var tenthsImageList = [];
var onesImageList = [];
var bundleNum = 0;
var unbundleNum = 0;
var hiddenTenths = [];
var hiddenHundredths = [];
var possibleHundredths = [];
var firstVisit = true;
var allDone = false;
var noMore = false;
var unclick = 0;
buttonVisibility();

//creates hidden points that are the anchors for movement vectors
function setUp() {
	if (firstVisit == true) {
		firstVisit = false;
		for (var i = 1; i < 100; i++) {
			ggb1.instance.evalCommand(
				"PossibleHundredth" +
					i +
					"=HundredthStart+2*(" +
					((i - 1) % 5) +
					"," +
					-Math.floor((i - 1) / 5) +
					")"
			);
			possibleHundredths.push("PossibleHundredth" + i);
			ggb1.instance.setVisible("PossibleHundredth" + i, false);
		}
	}
}

function buttonVisibility() {
	if (tenthsList.length < 10 && hundredthsList.length < 10) {
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	}
	if (tenthsList.length >= 10 || hundredthsList.length >= 10) {
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	}
	if ((onesList.length < 1 && tenthsList.length < 1) || unclick >= 6) {
		buttonGroup1.updateSingleButton({ disabled: true }, 3);
	}
	if (
		onesList.length >= 1 ||
		(tenthsList.length >= 1 && firstVisit == false && unclick < 6)
	) {
		buttonGroup1.updateSingleButton({ disabled: false }, 3);
	}
}

//every ones place becomes a tenths and every tenths becomes a hundredth
function populate() {
	setUp();
	for (
		var i = 1,
			N =
				ggb1.instance.getValue("hundredths") +
				ggb1.instance.getValue("tenths") * 10;
		i <= N;
		i++
	) {
		ggb1.instance.evalCommand(
			"HundredthsPoint" +
				i +
				"=HundredthStart+2*(" +
				((i - 1) % 5) +
				"," +
				-Math.floor((i - 1) / 5) +
				")"
		);
		ggb1.instance.evalCommand(
			"HundredthsImage" +
				i +
				"=Translate(Hundredth',HundredthsPoint" +
				i +
				")"
		);
		ggb1.instance.setVisible("HundredthsPoint" + i, false);
		hundredthsList.push("HundredthsPoint" + i);
		hundredthsImageList.push("HundredthsImage" + i);
	}
	for (var i = 1; i <= ggb1.instance.getValue("ones") * 10; i++) {
		ggb1.instance.evalCommand(
			"TenthsPoint" +
				i +
				"=TenthStart+2*(" +
				((i - 1) % 5) +
				"," +
				-Math.floor((i - 1) / 5) +
				")"
		);
		ggb1.instance.evalCommand(
			"TenthsImage" + i + "=Translate(Tenth',TenthsPoint" + i + ")"
		);
		ggb1.instance.setVisible("TenthsPoint" + i, false);
		tenthsList.push("TenthsPoint" + i);
		tenthsImageList.push("TenthsImage" + i);
	}
	//sets button states
	buttonVisibility();
	//ensures points and images are where they are supposed to be
	organize();
}

//sets numbers for new points and starts animation time running
function bundle() {
	//increases number for new points by one
	bundleNum++;
	allDone = false;
	unclick--;
	//starts time running
	ggb1.instance.setValue("time", 0);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	//sets button states
	buttonVisibility();
}

function moveIt() {
	//if there are ten or more points in the tenths region, translate ten at a time to the ones region, swap them for a one and reorganize
	if (
		tenthsList.length >= 10 &&
		hundredthsList.length < 10 &&
		allDone == false
	) {
		for (var i = 1; i <= 10; i++) {
			//hides points and images at the end of the list
			ggb1.instance.setVisible(tenthsList[tenthsList.length - i], false);
			ggb1.instance.setVisible(
				tenthsImageList[tenthsImageList.length - i],
				false
			);
			//make points in the tenths region that move to the hundredths place
			ggb1.instance.evalCommand(
				"MovingTenths" +
					i +
					"=Translate(" +
					tenthsList[tenthsList.length - i] +
					",time*Vector(" +
					tenthsList[tenthsList.length - i] +
					",OnesMiddle))"
			);
			ggb1.instance.setVisible("MovingTenths" + i, true);
			ggb1.instance.setColor("MovingTenths" + i, 163, 110, 255);
			if (
				ggb1.instance.getValue("time") > 0.95 &&
				ggb1.instance.getValue("time") < 1
			) {
				ggb1.instance.setColor("MovingTenths" + i, 218, 41, 28);
			}
			if (ggb1.instance.getValue("time") == 1) {
				ggb1.instance.stopAnimation();
				ggb1.instance.setVisible("MovingTenths" + i, false);
				hiddenTenths.push(tenthsList[tenthsList.length - i]);
			}
		}
		if (ggb1.instance.getValue("time") == 1) {
			tenthsList.splice(tenthsList.length - 10, tenthsList.length);
			tenthsImageList.splice(
				tenthsImageList.length - 10,
				tenthsImageList.length
			);
			ggb1.instance.evalCommand(
				"BundlePointTens" + bundleNum + "=(0,0);"
			);
			ggb1.instance.setVisible("BundlePointTens" + bundleNum, false);
			onesList.push("BundlePointTens" + bundleNum);
			allDone = true;
			organize();
		}
	}
	//if there are ten or more points in the hundredths region, translate ten at a time to the tenths region, swap them for a tenth and reorganize
	if (hundredthsList.length >= 10 && allDone == false) {
		for (var i = 1; i < 11; i++) {
			//hide last ten images
			ggb1.instance.setVisible(
				hundredthsImageList[hundredthsImageList.length - i],
				false
			);
			//hide last ten points
			ggb1.instance.setVisible(
				hundredthsList[hundredthsList.length - i],
				false
			);
			//create new points that move from hundredths to tenths
			ggb1.instance.evalCommand(
				"MovingHundredths" +
					i +
					"=Translate(" +
					hundredthsList[hundredthsList.length - i] +
					",time*Vector(" +
					hundredthsList[hundredthsList.length - i] +
					",TenthsMiddle))"
			);
			//show those points and set their colors to yellow
			ggb1.instance.setVisible("MovingHundredths" + i, true);
			ggb1.instance.setColor("MovingHundredths" + i, 255, 212, 102);
			//if almost to the end, set color to purple
			if (
				ggb1.instance.getValue("time") > 0.95 &&
				ggb1.instance.getValue("time") < 1
			) {
				ggb1.instance.setColor("MovingHundredths" + i, 163, 110, 255);
			}
			//at the end, hide points, push hidden points to a list
			if (ggb1.instance.getValue("time") == 1) {
				ggb1.instance.setVisible("MovingHundredths" + i, false);
				hiddenHundredths.push(
					hundredthsList[hundredthsList.length - i]
				);
			}
		}
		//at the end, remove last ten points and images from hundredths lists
		if (ggb1.instance.getValue("time") == 1) {
			hundredthsList.splice(
				hundredthsList.length - 10,
				hundredthsList.length
			);
			hundredthsImageList.splice(
				hundredthsImageList.length - 10,
				hundredthsImageList.length
			);
			//add one point to tenths place
			ggb1.instance.evalCommand(
				"BundlePointHunds" + bundleNum + "=(0,0);"
			);
			ggb1.instance.setVisible("BundlePointHunds" + bundleNum, false);
			tenthsList.push("BundlePointHunds" + bundleNum);
			//organize everything
			allDone = true;
			organize();
		}
	}
}

//sets numbers for new points and starts animation time running
function unbundle() {
	unbundleNum++;
	noMore = false;
	unclick++;
	ggb1.instance.setValue("untime", 0);
	ggb1.instance.setAnimating("untime", true);
	ggb1.instance.startAnimation();
	buttonVisibility();
}

//moves points when unbundling
function unMoveIt() {
	//if no points in the ones section and some points in the tenths section
	if (onesList.length < 1 && tenthsList.length >= 1 && noMore == false) {
		for (var i = 1; i <= 10; i++) {
			//hides points and images at the end of the list
			ggb1.instance.setVisible(tenthsList[tenthsList.length - 1], false);
			ggb1.instance.setVisible(
				tenthsImageList[tenthsImageList.length - 1],
				false
			);
			//make points in the tenths region that move to the hundredths place
			console.log("Before" + hundredthsList.length);
			ggb1.instance.evalCommand(
				"MovingTenths" +
					i +
					"=Translate(" +
					tenthsList[tenthsList.length - 1] +
					",untime*Vector(" +
					tenthsList[tenthsList.length - 1] +
					"," +
					possibleHundredths[hundredthsList.length + (i - 1)] +
					"))"
			);
			ggb1.instance.setVisible("MovingTenths" + i, true);
			ggb1.instance.setColor("MovingTenths" + i, 255, 212, 102);
			//hide moving points at the end and show points and images in the new place
			if (ggb1.instance.getValue("untime") == 1) {
				ggb1.instance.setVisible("MovingTenths" + i, false);
				ggb1.instance.evalCommand(
					"UnBundlePointTenths" + unbundleNum + i + "=(0,0)"
				);
				hundredthsImageList.push(
					"UnBundleImageTenths" + unbundleNum + i
				);
				hundredthsList.push("UnBundlePointTenths" + unbundleNum + i);
				console.log("After" + hundredthsList.length);
			}
		}
		//at the end, remove tenths from lists and remove the hidden hundreths from possible values list
		if (ggb1.instance.getValue("untime") == 1) {
			tenthsList.pop();
			hiddenHundredths.splice(
				hiddenHundredths.length - 10,
				hiddenHundredths.length
			);
			noMore = true;
			organize();
		}
	}
	//if there is at least 1 ones disk
	if (onesList.length >= 1 && noMore == false) {
		for (var i = 1; i <= 10; i++) {
			//hides points and images at the end of the ones list
			ggb1.instance.setVisible(onesList[onesList.length - 1], false);
			ggb1.instance.setVisible(
				onesImageList[onesImageList.length - 1],
				false
			);
			//make points in the tenths region that move to the hundredths place
			ggb1.instance.evalCommand(
				"MovingOnes" +
					i +
					"=Translate(" +
					onesList[onesList.length - 1] +
					",untime*Vector(" +
					onesList[onesList.length - 1] +
					"," +
					hiddenTenths[hiddenTenths.length - i] +
					"))"
			);
			ggb1.instance.setVisible("MovingOnes" + i, true);
			ggb1.instance.setColor("MovingOnes" + i, 163, 110, 255);
			if (ggb1.instance.getValue("untime") == 1) {
				ggb1.instance.setVisible("MovingOnes" + i, false);
				ggb1.instance.evalCommand(
					"UnBundlePoint" + unbundleNum + i + "=(0,0)"
				);
				tenthsImageList.push("UnBundleImage" + unbundleNum + i);
				tenthsList.push("UnBundlePoint" + unbundleNum + i);
			}
		}
		//at the end, remove tenths from lists and remove the hidden hundreths from possible values list
		if (ggb1.instance.getValue("untime") == 1) {
			onesList.pop();
			hiddenTenths.splice(hiddenTenths.length - 10, hiddenTenths.length);
			noMore = true;
			organize();
		}
	}
}

function organize() {
	//clear image lists
	hundredthsImageList = [];
	tenthsImageList = [];
	onesImageList = [];
	//for every point in the point list
	for (var i = 1; i <= onesList.length; i++) {
		//set coords
		ggb1.instance.setCoords(
			onesList[i - 1],
			ggb1.instance.getXcoord("OneStart") + 2 * ((i - 1) % 5),
			ggb1.instance.getYcoord("OneStart") - 2 * Math.floor((i - 1) / 5)
		);
		//translate new images
		ggb1.instance.evalCommand(
			"OnesImage" + i + "=Translate(One'," + onesList[i - 1] + ")"
		);
		//set properties of the point and images
		ggb1.instance.setFixed("OnesImage" + i, true, false);
		ggb1.instance.setColor(onesList[i - 1], 218, 41, 28);
		ggb1.instance.setLayer(onesList[i - 1], 0);
		onesImageList.push("OnesImage" + i);
		ggb1.instance.setVisible(onesImageList[i - 1], true);
		ggb1.instance.setVisible(onesList[i - 1], false);
	}
	//for every point in the point list
	for (var i = 1; i <= tenthsList.length; i++) {
		//set coords
		ggb1.instance.setCoords(
			tenthsList[i - 1],
			ggb1.instance.getXcoord("TenthStart") + 2 * ((i - 1) % 5),
			ggb1.instance.getYcoord("TenthStart") - 2 * Math.floor((i - 1) / 5)
		);
		//translate new images
		ggb1.instance.evalCommand(
			"TenthsImage" + i + "=Translate(Tenth'," + tenthsList[i - 1] + ")"
		);
		//set properties of the point and images
		ggb1.instance.setFixed("TenthsImage" + i, true, false);
		ggb1.instance.setColor(tenthsList[i - 1], 163, 110, 255);
		ggb1.instance.setLayer(tenthsList[i - 1], 0);
		tenthsImageList.push("TenthsImage" + i);
		ggb1.instance.setVisible(tenthsImageList[i - 1], true);
		ggb1.instance.setVisible(tenthsList[i - 1], false);
	}
	//for every point in the point list
	for (var i = 1; i <= hundredthsList.length; i++) {
		//set coords
		ggb1.instance.setCoords(
			hundredthsList[i - 1],
			ggb1.instance.getXcoord("HundredthStart") + 2 * ((i - 1) % 5),
			ggb1.instance.getYcoord("HundredthStart") -
				2 * Math.floor((i - 1) / 5)
		);
		//translate new images
		ggb1.instance.evalCommand(
			"HundredthsImage" +
				i +
				"=Translate(Hundredth'," +
				hundredthsList[i - 1] +
				")"
		);
		//set properties of the point and images
		ggb1.instance.setFixed("HundredthsImage" + i, true, false);
		ggb1.instance.setColor(hundredthsList[i - 1], 255, 212, 102);
		ggb1.instance.setLayer(hundredthsList[i - 1], 0);
		hundredthsImageList.push("HundredthsImage" + i);
		ggb1.instance.setVisible(hundredthsImageList[i - 1], true);
		ggb1.instance.setVisible(hundredthsList[i - 1], false);
	}
	//sets button states
	buttonVisibility();
	console.log("number of hundredths: " + hundredthsImageList.length);
	console.log("number of tenths: " + tenthsImageList.length);
	console.log("number of ones: " + onesImageList.length);
	ggb1.instance.stopAnimation();
}

function reset() {
	let L = hundredthsImageList.length;
	let M = tenthsImageList.length;
	let N = onesImageList.length;
	for (let i = 0; i < L; i++) {
		ggb1.instance.deleteObject(hundredthsImageList[i]);
	}
	for (let i = 0; i < M; i++) {
		ggb1.instance.deleteObject(tenthsImageList[i]);
	}
	for (let i = 0; i < N; i++) {
		ggb1.instance.deleteObject(onesImageList[i]);
	}
	input1.updateData({ text: "" });
	hundredthsList = [];
	tenthsList = [];
	onesList = [];
	hundredthsImageList = [];
	tenthsImageList = [];
	onesImageList = [];
	bundleNum = 0;
	unbundleNum = 0;
	hiddenTenths = [];
	hiddenHundredths = [];
	possibleHundredths = [];
	firstVisit = true;
	unclick = 0;
	noMore = false;
	allDone = false;
	ggb1.instance.setValue("time", 0);
	ggb1.instance.setValue("untime", 0);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
}

function boundIt(inputComp, min, max) {
	const result = utils.math.evaluateLatex(inputComp.data.text);
	if (result.error) {
		inputComp.updateData({ text: "0" }); // what should the text do/say if students input "cabbage"?
		return 0; // whatever you go with here, make sure it's inside of your min and max!
	} else if (result.value < min) {
		inputComp.updateData({ text: `${min}` });
		return min;
	} else if (result.value > max) {
		inputComp.updateData({ text: `${max}` });
		return max;
	}
	// you can add things like floor or toFixed to validate only integers, or something similar
	//let flooredNum = Math.floor(result.value);
	//inputComp.updateData({ text: `${flooredNum}` });
	//return flooredNum;
	return result.value;
}

autorun(() => {
	if (input1.data.text != input1.data.last) {
		boundIt(input1, 0, 6);
		input1.updateData({ last: input1.data.text });
	}
});
