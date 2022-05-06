const { fib1, ggb1, buttonGroup1 } = components;

fib1.updateInput(0, { text: "\\frac{1}{3}" });
fib1.updateInput(1, { text: "\\frac{5}{2}" });

fib1.on("change", ({ values }) => {
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

buttonGroup1.on("click:1", () => {
	boundIt(fib1, 1, 0, 8);
	boundIt(fib1, 0, 0, 1);
	if (boundIt(fib1, 0, 0, 1) == 1 || boundIt(fib1, 1, 0, 8) == 1) {
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
		buttonGroup1.updateSingleButton({ disabled: true }, 3);
	}
	ggb1.instance.setValue("time", 0);
	let firstFraction = undoLaTeX(fib1.getInput(1).text);
	let secondFraction = undoLaTeX(fib1.getInput(0).text);
	let firstDecimal = utils.math.evaluateLatex(fib1.getInput(1).text);
	let secondDecimal = utils.math.evaluateLatex(fib1.getInput(0).text);
	if (!firstDecimal.error && !secondDecimal.error) {
		ggb1.instance.setValue("FirstDivision", firstDecimal.value);
		ggb1.instance.setValue("SecondDivision", secondDecimal.value);

		breakApart(firstFraction, "DenomFD");
		breakApart(firstFraction, "NumeratorNumber");
		breakApart(secondFraction, "DenomSD");
		breakApart(firstFraction, "DivisorNumber");

		console.log(ggb1.instance.getValue("FirstDivision"));
		console.log(ggb1.instance.getValue("SecondDivision"));
		console.log(ggb1.instance.getValue("DenomFD"));
		console.log(ggb1.instance.getValue("DenomSD"));
		console.log(ggb1.instance.getValue("DivisorNumber"));
		console.log(ggb1.instance.getValue("NumeratorNumber"));
	} else {
		fib1.updateInput(0, { text: "" });
		fib1.updateInput(1, { text: "" });
	}
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	if (ggb1.instance.getValue("DivisorNumber") == 1) {
		ggb1.instance.setVisible("F2", true);
		ggb1.instance.setVisible("text2", false);
	} else {
		ggb1.instance.setVisible("F2", false);
		ggb1.instance.setVisible("text2", true);
	}
});

buttonGroup1.on("click:2", () => {
	console.log(ggb1.instance.getValue("FirstDivision"));
	console.log(ggb1.instance.getValue("SecondDivision"));
	console.log(ggb1.instance.getValue("DenomFD"));
	console.log(ggb1.instance.getValue("DenomSD"));
	console.log(ggb1.instance.getValue("DivisorNumber"));
	console.log(ggb1.instance.getValue("NumeratorNumber"));
	ggb1.instance.setValue("speed", 3);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on("click:3", () => {
	ggb1.instance.setValue("speed", -3);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

function undoLaTeX(inp) {
	let frac = inp.replace(/\\frac{/, "");
	let fracMid = frac.replace(/\}\{/, "/");
	let leftParen = fracMid.replace(/\\left/g, "");
	let rightParen = leftParen.replace(/\\right/g, "");
	let absLeft = rightParen.replace(/\|/, "abs(");
	let absRight = absLeft.replace(/\|/, ")");
	let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt(");
	let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt(");
	let brackRight = cbrtLeft.replace(/\}/g, "");
	let brackLeft = brackRight.replace(/\{/g, "");
	let lessThan = brackLeft.replace(/\\le/g, "<=");
	let greaterThan = lessThan.replace(/\\ge/g, ">=");
	let cDot = greaterThan.replace(/\\cdot/g, "*");
	let finalAnswer = cDot;
	return finalAnswer;
}

function breakApart(fraction, ggbItem) {
	let num, denom;

	if (fraction.indexOf("/") != -1) {
		num = fraction.slice(0, fraction.indexOf("/"));
		denom = fraction.slice(fraction.indexOf("/") + 1);
	} else {
		num = fraction;
		denom = "1";
	}

	switch (ggbItem) {
		case "NumeratorNumber":
			ggb1.instance.setValue(ggbItem, Number(num));
			break;
		case "DenomFD":
			ggb1.instance.setValue(ggbItem, Number(denom));
			break;
		case "DenomSD":
			ggb1.instance.setValue(ggbItem, Number(denom));
			break;
		case "DivisorNumber":
			ggb1.instance.setValue(ggbItem, Number(denom));
			break;
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
