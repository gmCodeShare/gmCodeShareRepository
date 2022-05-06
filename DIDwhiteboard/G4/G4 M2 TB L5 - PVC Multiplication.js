const { ggb1, text1, fib1, buttonGroup1, select1 } = components;

buttonGroup1.updateSingleButton({ disabled: true }, 2);
select1.selectOption("1");

text1.updateData({ visible: false });

fib1.on("change", ({ values }) => {
	boundIt(fib1, 0, 0, 9);
	boundIt(fib1, 1, 0, 99);
	ggb1.instance.setValue("multiplier", fib1.getInput(0).text);
	ggb1.instance.setValue("multiplicand", fib1.getInput(1).text);

	reset();

	let multiplicand = ggb1.instance.getValue("multiplicand");
	let multiplier = ggb1.instance.getValue("multiplier");
	let tensCount = ggb1.instance.getValue("tensCount");
	let onesCount = ggb1.instance.getValue("onesCount");
	let tenishCount = ggb1.instance.getValue("tenishCount");
	let productTenish = ggb1.instance.getValue("productTenish");
	let productOneish = ggb1.instance.getValue("productOneish");
	let product = ggb1.instance.getValue("product");

	if (tensCount == 1 && onesCount == 1 && multiplier == 1) {
		text1.updateData({
			text: `
			$\\begin{alignedat}{1}
			${multiplier} \\times ${multiplicand} &= ${multiplier} \\times \(${tensCount} \\text{ ten} + ${onesCount} \\text{ one}\)  \\\\
			&= \(${multiplier} \\times ${tensCount} \\text{ ten} \)+\(${multiplier} \\times ${onesCount} \\text{ one}\) \\\\
			&= \(${tenishCount}  \\text{ ten}\) + \(${productOneish} \\text{ one}\)  \\\\
			&= ${productTenish} + ${productOneish}  \\\\
			&= ${product} 
			\\end{alignedat}$`,
		});
	} else if (tensCount == 1 && onesCount == 1 && multiplier != 1) {
		text1.updateData({
			text: `
            $\\begin{alignedat}{1}
            ${multiplier} \\times ${multiplicand} &= ${multiplier} \\times \(${tensCount} \\text{ ten} + ${onesCount} \\text{ one}\) \\\\
				&= \(${multiplier} \\times ${tensCount} \\text{ ten}\)+\(${multiplier} \\times ${onesCount} \\text{ one}\) \\\\
				&= \(${tenishCount}  \\text{ tens}\) + \(${productOneish} \\text{ ones}\) \\\\
				&= ${productTenish} + ${productOneish} \\\\
				&= ${product}
                \\end{alignedat}$`,
		});
	} else if (tensCount == 1 && onesCount != 1 && multiplier == 1) {
		text1.updateData({
			text: `
            $\\begin{alignedat}{1}
            ${multiplier} \\times ${multiplicand} &= ${multiplier} \\times \(${tensCount} \\text{ ten} + ${onesCount} \\text{ ones}\) \\\\  
				&= \(${multiplier} \\times ${tensCount} \\text{ ten}\)+\(${multiplier} \\times ${onesCount} \\text{ ones}\) \\\\  
				&= \(${tenishCount}  \\text{ ten}\) + \(${productOneish} \\text{ ones}\) \\\\
				&= ${productTenish} + ${productOneish} \\\\
				&= ${product}
                \\end{alignedat}$`,
		});
	} else if (tensCount != 1 && onesCount == 1 && multiplier == 1) {
		text1.updateData({
			text: `
            $\\begin{alignedat}{1}
            ${multiplier} \\times ${multiplicand} &= ${multiplier} \\times \(${tensCount} \\text{ tens} + ${onesCount} \\text{ one}\) \\\\  
				&= \(${multiplier} \\times ${tensCount} \\text{ tens}\)+\(${multiplier} \\times ${onesCount} \\text{ one}\) \\\\  
				&= \(${tenishCount}  \\text{ tens}\) + \(${productOneish} \\text{ one}\) \\\\
				&= ${productTenish} + ${productOneish} \\\\
				&= ${product}
                \\end{alignedat}$`,
		});
	} else if (tensCount == 1 && onesCount != 1 && multiplier != 1) {
		text1.updateData({
			text: `
            $\\begin{alignedat}{1}
            ${multiplier} \\times ${multiplicand} &= ${multiplier} \\times \(${tensCount} \\text{ ten} + ${onesCount} \\text{ ones}\) \\\\  
				&= \(${multiplier} \\times ${tensCount} \\text{ ten}\)+\(${multiplier} \\times ${onesCount} \\text{ ones}\) \\\\  
				&= \(${tenishCount}  \\text{ tens}\) + \(${productOneish} \\text{ ones}\) \\\\
				&= ${productTenish} + ${productOneish} \\\\
				&= ${product}
                \\end{alignedat}$`,
		});
	} else if (tensCount != 1 && onesCount == 1 && multiplier != 1) {
		text1.updateData({
			text: `
            $\\begin{alignedat}{1}
            ${multiplier} \\times ${multiplicand} &= ${multiplier} \\times \(${tensCount} \\text{ tens} + ${onesCount} \\text{ one}\) \\\\  
				&= \(${multiplier} \\times ${tensCount} \\text{ tens}\)+\(${multiplier} \\times ${onesCount} \\text{ one}\) \\\\  
				&= \(${tenishCount}  \\text{ tens}\) + \(${productOneish} \\text{ ones}\) \\\\
				&= ${productTenish} + ${productOneish} \\\\
				&= ${product}
                \\end{alignedat}$`,
		});
	} else {
		text1.updateData({
			text: `
            $\\begin{alignedat}{1}
            ${multiplier} \\times ${multiplicand} &= ${multiplier} \\times \(${tensCount} \\text{ tens} + ${onesCount} \\text{ ones}\) \\\\  
				&= \(${multiplier} \\times ${tensCount} \\text{ tens}\)+\(${multiplier} \\times ${onesCount} \\text{ ones}\) \\\\  
				&= \(${tenishCount}  \\text{ tens}\) + \(${productOneish} \\text{ ones}\) \\\\
				&= ${productTenish} + ${productOneish} \\\\
				&= ${product}
                \\end{alignedat}$`,
		});
	}
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
	boundIt(fib1, 0, 0, 9);
	boundIt(fib1, 1, 0, 99);
	ggb1.instance.setValue("multiplier", fib1.getInput(0).text);
	ggb1.instance.setValue("multiplicand", fib1.getInput(1).text);
	multiplyIt();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});
buttonGroup1.on("click:2", () => {
	reset();
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	select1.selectOption("1");
});

select1.on("change", () => {
	console.log(select1.data.selected);
	if (select1.data.selected == "0") {
		text1.updateData({ visible: true });
	} else {
		text1.updateData({ visible: false });
	}
});

ggb1.instance.registerClientListener(breakOut);

function multiplyIt() {
	for (var z = 0; z < ggb1.instance.getValue("multiplier"); z++) {
		for (var j = 0; j < ggb1.instance.getValue("tensCount"); j++) {
			tensRowCount = Math.floor(ggb1.instance.getValue(j) / 5) + 1;
			ggb1.instance.evalCommand("T" + j + z + "=PointIn(box)");
			ggb1.instance.setCoords(
				"T" + j + z,
				ggb1.instance.getXcoord("Ig7") + 2 * (j % 5) + 1,
				ggb1.instance.getYcoord("Ig7") + -2 * tensRowCount - 5 * z + 1
			);
			ggb1.instance.setColor("T" + j + z, 0, 155, 69);
			ggb1.instance.evalCommand(
				"SetConditionToShowObject(T" +
					j +
					z +
					",IsInRegion(T" +
					j +
					z +
					",tens))"
			);
		}
		for (var k = 0; k < ggb1.instance.getValue("onesCount"); k++) {
			onesRowCount = Math.floor(ggb1.instance.getValue(k) / 5) + 1;
			ggb1.instance.evalCommand("O" + k + z + "=PointIn(ones)");
			ggb1.instance.setCoords(
				"O" + k + z,
				ggb1.instance.getXcoord("Ig8") + 2 * (k % 5) + 1,
				ggb1.instance.getYcoord("Ig8") + -2 * onesRowCount - 5 * z + 1
			);
			ggb1.instance.setColor("O" + k + z, 230, 15, 33);
		}
	}
}
var rowAdder = 0;

function breakOut(grabbed) {
	if (grabbed[0] == "select") {
		name = grabbed[1];
		type = ggb1.instance.getObjectType(grabbed[1]);
	}
	if (grabbed[0] == "dragEnd") {
		type = ggb1.instance.getObjectType(grabbed[1]);
		if (type == "point") {
			if (
				name.includes("T") &&
				ggb1.instance.getXcoord(grabbed[1]) > 16
			) {
				for (var column = 0; column < 2; column++) {
					for (var row = 0; row < 5; row++) {
						ggb1.instance.evalCommand(
							"UO" + row + column + rowAdder + "=PointIn(ones)"
						);
						ggb1.instance.setCoords(
							"UO" + row + column + rowAdder,
							1 + 2 * row + ggb1.instance.getXcoord("Ig8"),
							ggb1.instance.getYcoord("Ig8") +
								-5 * ggb1.instance.getValue("multiplier") -
								2 * column -
								1 -
								5 * rowAdder
						);
						ggb1.instance.setColor(
							"UO" + row + column + rowAdder,
							230,
							15,
							33
						);
					}
				}
				rowAdder = rowAdder + 1;
			}
		}
	}
}

function reset() {
	rowAdder = 0;
	pointNames = [];
	pointNames = ggb1.instance.getAllObjectNames("point");
	lengthPointNames = pointNames.length;
	for (let iter8 = 0; iter8 < lengthPointNames; iter8++) {
		if (
			!pointNames[iter8].includes("Ig") &&
			!pointNames[iter8].includes("corner")
		) {
			ggb1.instance.deleteObject(pointNames[iter8]);
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
