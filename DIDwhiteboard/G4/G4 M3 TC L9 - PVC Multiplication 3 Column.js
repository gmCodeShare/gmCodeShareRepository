/////write conditionals for text!!!!!!!!!!!!!!!!!!

const { ggb1, text1, fib1, buttonGroup1, select1 } = components;

buttonGroup1.updateSingleButton({ disabled: true }, 2);
select1.selectOption("1");

text1.updateData({ visible: false });

fib1.on("change", ({ values }) => {
	boundIt(fib1, 0, 0, 9);
	boundIt(fib1, 1, 0, 999);
	ggb1.instance.setValue("multiplier", fib1.getInput(0).text);
	ggb1.instance.setValue("multiplicand", fib1.getInput(1).text);

	reset();

	let multiplicand = ggb1.instance.getValue("multiplicand");
	let multiplier = ggb1.instance.getValue("multiplier");
	let hunsCount = ggb1.instance.getValue("hunsCount");
	let tensCount = ggb1.instance.getValue("tensCount");
	let onesCount = ggb1.instance.getValue("onesCount");
	let hunishCount = ggb1.instance.getValue("hunishCount");
	let tenishCount = ggb1.instance.getValue("tenishCount");
	let productHunish = ggb1.instance.getValue("productHunish");
	let productTenish = ggb1.instance.getValue("productTenish");
	let productOneish = ggb1.instance.getValue("productOneish");
	let product = ggb1.instance.getValue("product");

	let onesTextLine1;
	let onesTextLine2;
	let onesTextLine3;
	let onesTextLine4;
	let onesOperator;
	let tensOperator;
	if (hunsCount == 0 && tensCount == 0) {
		onesOperator = ``;
	} else {
		onesOperator = ` + `;
	}
	if (hunsCount == 0 && tensCount != 0) {
		tensOperator = ``;
	} else {
		tensOperator = ` + `;
	}
	
	if (onesCount == 0) {
		onesTextLine1 = ``;
		onesTextLine2 = ``;
		onesTextLine3 = ``;
		onesTextLine4 = ``;
	} else if (onesCount == 1) {
		onesTextLine1 = `${onesOperator} ${onesCount}`;
		onesTextLine2=`${onesOperator} \(${multiplier} \\times ${onesCount} \\text{ one}\)`;
		onesTextLine3=`${onesOperator} \(${multiplier} \\times ${onesCount}\)`;
		onesTextLine4=`${onesOperator} ${multiplier*onesCount}`;
	} else {
		onesTextLine1 =`${onesOperator} ${onesCount}`
		onesTextLine2=`${onesOperator} \(${multiplier} \\times ${onesCount} \\text{ ones}\)`;
		onesTextLine3=`${onesOperator} \(${multiplier} \\times ${onesCount}\)`;
		onesTextLine4=`${onesOperator} ${multiplier*onesCount}`;
	}

	let tensTextLine1;
	let tensTextLine2;
	let tensTextLine3;
	let tensTextLine4;
	if (tensCount == 0) {
		tensTextLine1 = ``;
		tensTextLine2 = ``;
		tensTextLine3 = ``;
		tensTextLine4 = ``;
	} else if (tensCount == 1) {
		tensTextLine1 = `${tensOperator} ${tenishCount}`;
		tensTextLine2=`${tensOperator} \(${multiplier} \\times ${tensCount} \\text{ ten}\)`;
		tensTextLine3=`${tensOperator} \(${multiplier} \\times ${tenishCount}\)`;
		tensTextLine4=`${tensOperator} ${multiplier*tenishCount}`;
	} else {
		tensTextLine1 =`${tensOperator} ${tenishCount}`
		tensTextLine2=`${tensOperator} \(${multiplier} \\times ${tensCount} \\text{ tens}\)`;
		tensTextLine3=`${tensOperator} \(${multiplier} \\times ${tenishCount}\)`;
		tensTextLine4=`${tensOperator} ${multiplier*tenishCount}`;
	}

	let hunsTextLine1;
	let hunsTextLine2;
	let hunsTextLine3;
	let hunsTextLine4;
	if (hunsCount == 0) {
		hunsTextLine1 = ``;
		hunsTextLine2 = ``;
		hunsTextLine3 = ``;
		hunsTextLine4 = ``;
	} else if (hunsCount == 1) {
		hunsTextLine1 = `${hunishCount}`;
		hunsTextLine2=`\(${multiplier} \\times ${hunsCount} \\text{ hundred}\)`;
		hunsTextLine3=`\(${multiplier} \\times ${hunishCount}\)`;
		hunsTextLine4=`${multiplier*hunishCount}`;
	} else {
		hunsTextLine1 =`${hunishCount}`
		hunsTextLine2=`\(${multiplier} \\times ${hunsCount} \\text{ hundreds}\)`;
		hunsTextLine3=`\(${multiplier} \\times ${hunishCount}\)`;
		hunsTextLine4=`${multiplier*hunishCount}`;
	}

	if (hunsCount == 0 && tensCount == 0 || hunsCount == 0 && onesCount == 0 || tensCount == 0 && onesCount == 0) {
		text1.updateData({
			text: `
			$\\begin{alignedat}{1}
			\\small ${multiplier} \\times ${multiplicand} &= \\small ${multiplier} \\times \(${hunsTextLine1} ${tensTextLine1} ${onesTextLine1}\)  \\\\
			&= \\small ${hunsTextLine2} ${tensTextLine2} ${onesTextLine2} \\\\
            &= \\small ${hunsTextLine3} ${tensTextLine3} ${onesTextLine3} \\\\
            &= \\small ${product}
			\\end{alignedat}$`
		});	
	} else {
		text1.updateData({
			text: `
			$\\begin{alignedat}{1}
			\\small ${multiplier} \\times ${multiplicand} &= \\small ${multiplier} \\times \(${hunsTextLine1} ${tensTextLine1} ${onesTextLine1}\)  \\\\
			&= \\small ${hunsTextLine2} ${tensTextLine2} ${onesTextLine2} \\\\
            &= \\small ${hunsTextLine3} ${tensTextLine3} ${onesTextLine3} \\\\
            &= \\small ${hunsTextLine4} ${tensTextLine4} ${onesTextLine4} \\\\
            &= \\small ${product}
			\\end{alignedat}$`
		});
	}

	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
	boundIt(fib1, 0, 0, 9);
	boundIt(fib1, 1, 0, 999);
	ggb1.instance.setValue("multiplier", fib1.getInput(0).text);
	ggb1.instance.setValue("multiplicand", fib1.getInput(1).text);
	multiplyIt();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});
buttonGroup1.on("click:2", () => {
	reset();
	fib1.updateInput(0, {text: ""});
	fib1.updateInput(1, {text: ""});
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({disabled: true}, 2);
	select1.selectOption("1");
});

select1.on("change", () => {
	if (select1.data.selected == "0") {
		text1.updateData({visible: true});
	} else {
		text1.updateData({visible: false});
	}
});

function multiplyIt() {
	reset();
	//sets the amount of vertical space between sets of numbers so that there's one empty line between each set
	var spacerH = 3;
	var spacerT = 3;
	var spacerO = 3;
	if (
		ggb1.instance.getValue("onesCount") < 6 &&
		ggb1.instance.getValue("tensCount") < 6 &&
		ggb1.instance.getValue("hunsCount") < 6
	) {
		spacerH = 3;
		spacerT = 3;
		spacerO = 3;
	} else {
		spacerH = 6;
		spacerT = 6;
		spacerO = 6;
		if (ggb1.instance.getValue("onesCount") > 5) {
			spacerO = 3;
		}
		if (ggb1.instance.getValue("tensCount") > 5) {
			spacerT = 3;
		}
		if (ggb1.instance.getValue("hunsCount") > 5) {
			spacerH = 3;
		}
	}
	console.log(spacerH);
	console.log(spacerT);
	console.log(spacerO);
	for (var l = 0; l < ggb1.instance.getValue("multiplier"); l++) {
		for (var j = 0; j < ggb1.instance.getValue("hunsCount"); j++) {
			hunsRowCount = Math.floor(j / 5) + 1;
			maxHunsRowCount = Math.ceil(
				ggb1.instance.getValue("hunsCount") / 5
			);
			ggb1.instance.evalCommand("H" + j + l + "=PointIn(huns)");
			ggb1.instance.setCoords(
				"H" + j + l,
				ggb1.instance.getXcoord("Ig9") + 3 * (j % 5) + 1,
				ggb1.instance.getYcoord("Ig9") -
					2.5 * hunsRowCount -
					spacerH * l * maxHunsRowCount+1
			);
			ggb1.instance.setColor("H" + j + l, 0, 118, 165);
			ggb1.instance.setFixed("H" + j + l, true, false);
		}
		for (var j = 0; j < ggb1.instance.getValue("tensCount"); j++) {
			tensRowCount = Math.floor(j / 5) + 1;
			maxTensRowCount = Math.ceil(
				ggb1.instance.getValue("tensCount") / 5
			);
			ggb1.instance.evalCommand(
				"T" +
					ggb1.instance.getValue(j) +
					ggb1.instance.getValue(l) +
					"=PointIn(tens)"
			);
			ggb1.instance.setCoords(
				"T" + ggb1.instance.getValue(j) + ggb1.instance.getValue(l),
				ggb1.instance.getXcoord("Ig10") + 3 * (j % 5) + 1,
				ggb1.instance.getYcoord("Ig10") -
					2.5 * tensRowCount -
					spacerT * l * maxTensRowCount+1
			);
			ggb1.instance.setColor("T" + j + l, 0, 155, 69);
			ggb1.instance.setFixed("T" + j + l, true, false);
		}
		for (var k = 0; k < ggb1.instance.getValue("onesCount"); k++) {
			onesRowCount = Math.floor(k / 5) + 1;
			maxOnesRowCount = Math.ceil(
				ggb1.instance.getValue("onesCount") / 5
			);
			ggb1.instance.evalCommand(
				"O" +
					ggb1.instance.getValue(k) +
					ggb1.instance.getValue(l) +
					"=PointIn(ones)"
			);
			ggb1.instance.setCoords(
				"O" + ggb1.instance.getValue(k) + ggb1.instance.getValue(l),
				ggb1.instance.getXcoord("Ig11") + 3 * (k % 5) + 1,
				ggb1.instance.getYcoord("Ig11") -
					2.5 * onesRowCount -
					spacerO * l * maxOnesRowCount+1
			);
			ggb1.instance.setColor("O" + k + l, 230, 15, 33);
			ggb1.instance.setFixed("O" + k + l, true, false);
		}
	}
}

function reset() {
	var points = ggb1.instance.getAllObjectNames("point");
	for (var m = 0; m < points.length; m++) {
		if (!points[m].includes("Ig") && !points[m].includes("corner")) {
			ggb1.instance.deleteObject(points[m]);
		}
	}
}

function boundIt(inputComp, position, min, max) {
	const result = utils.math.evaluateLatex(inputComp.getInput(position).text);
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
