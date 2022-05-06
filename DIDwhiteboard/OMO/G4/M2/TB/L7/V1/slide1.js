const { ggb1, ggb2, text1, buttonGroup1, buttonGroup2} = components;
ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button3", false);
ggb1.instance.setVisible("button4", false);
let separated = false;
let grid = true;
ggb1.instance.setValue("xMax",32);
ggb2.instance.setValue("xMax",38);

// fib1.on("change", () => {
// 	ggb1.instance.setValue("xMax", (parseFloat(fib1.getInput(0).text) + parseFloat(2)));
// 	ggb2.instance.setValue("xMax", (parseFloat(fib1.getInput(0).text) + parseFloat(2)));
// 	ggb2.instance.setPointSize("l1", fib1.getInput(1).text);
// 	ggb2.instance.setPointSize("l2",  fib1.getInput(1).text);
// 	ggb2.instance.setPointSize("l3",  fib1.getInput(1).text);
// })

ggb1.instance.setValue("xMin",-2);
autorun(() => {
	let handle = ggb1.innerData["Number"];
	let divider = ggb1.innerData["B"];
	let multiplier = ggb1.innerData["totalVertSide"];
	let multiplicand = ggb1.innerData["totalHorizSide"];
	ggb2.instance.setValue("multiplicand", multiplicand);
	ggb2.instance.setValue("multiplier", multiplier);
	ggb2.instance.setValue("greenPoints", ggb1.instance.getValue("splitLeft"));
	ggb2.instance.setValue("bluePoints", ggb1.instance.getValue("splitRight"));
	let tensCount = ggb2.instance.getValue("multiplicandTens");
    let onesCount = ggb2.instance.getValue("multiplicandOnes");

	console.log(tensCount, onesCount);
	let onesTextLine1;
	let onesTextLine2;
	let onesTextLine3;
	let onesTextLine4;
	let onesOperator;
	let tensOperator;

	if (tensCount == 0) {
		onesOperator = ``;
	} else {
		onesOperator = ` + `;
	}
	if (tensCount != 0) {
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
		onesTextLine2 = `${onesOperator} \(${multiplier} \\times ${onesCount} \\text{ one}\)`;
		onesTextLine3 = `${onesOperator} \(${multiplier} \\times ${onesCount}\)`;
		onesTextLine4 = `${onesOperator} ${multiplier * onesCount}`;
	} else {
		onesTextLine1 = `${onesOperator} ${onesCount}`;
		onesTextLine2 = `${onesOperator} \(${multiplier} \\times ${onesCount} \\text{ ones}\)`;
		onesTextLine3 = `${onesOperator} \(${multiplier} \\times ${onesCount}\)`;
		onesTextLine4 = `${onesOperator} ${multiplier * onesCount}`;
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
		tensTextLine1 = `${tensOperator} ${tensCount * 10}`;
		tensTextLine2 = `${tensOperator} \(${multiplier} \\times ${tensCount} \\text{ ten}\)`;
		tensTextLine3 = `${tensOperator} \(${multiplier} \\times ${
			tensCount * 10
		}\)`;
		tensTextLine4 = `${tensOperator} ${multiplier * tensCount * 10}`;
	} else {
		tensTextLine1 = `${tensOperator} ${tensCount * 10}`;
		tensTextLine2 = `${tensOperator} \(${multiplier} \\times ${tensCount} \\text{ tens}\)`;
		tensTextLine3 = `${tensOperator} \(${multiplier} \\times ${
			tensCount * 10
		}\)`;
		tensTextLine4 = `${tensOperator} ${multiplier * tensCount * 10}`;
	}

	text1.updateData({
		text: `
			$\\begin{alignedat}{1}
			\\small ${multiplier} \\times ${multiplicand} &= \\small ${multiplier} \\times \(${tensTextLine1} ${onesTextLine1}\)  \\\\
			&= \\small ${tensTextLine2} ${onesTextLine2} \\\\
            &= \\small${tensTextLine3} ${onesTextLine3} \\\\
            &= \\small  ${tensTextLine4} ${onesTextLine4} \\\\
            &= \\small ${multiplier * multiplicand}
			\\end{alignedat}$`,
	});
	buttonGroup1.updateSingleButton(
		{ disabled: divider[0] == 0 || divider[0] == handle[0] || separated },
		1
	);
	buttonGroup1.updateSingleButton(
		{ disabled: divider[0] == 0 || divider[0] == handle[0] || !separated },
		2
	);
	buttonGroup2.updateSingleButton({ disabled: handle[0] == 0 || !grid }, 1);
	buttonGroup2.updateSingleButton({ disabled: handle[0] == 0 || grid }, 2);
});

buttonGroup1.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(button1)");
	separated = true;
});
buttonGroup1.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(button1)");
	separated = false;
});

buttonGroup2.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(button3)");
	grid = false;
	buttonGroup2.updateSingleButton({ disabled: !grid }, 1);
	buttonGroup2.updateSingleButton({ disabled: grid }, 2);
});
buttonGroup2.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(button4)");
	grid = true;
	buttonGroup2.updateSingleButton({ disabled: !grid }, 1);
	buttonGroup2.updateSingleButton({ disabled: grid }, 2);
});
