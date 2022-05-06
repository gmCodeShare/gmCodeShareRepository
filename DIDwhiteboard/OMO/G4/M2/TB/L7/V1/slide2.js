const { ggb1, ggb2, text1, buttonGroup1, buttonGroup2 } = components;
ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button3", false);
ggb1.instance.setVisible("button4", false);

let separated = false;
let grid = true;
ggb2.updateData({ visible: false });

autorun(() => {
	let handle = ggb1.innerData["Number"];
	let divider = ggb1.innerData["B"];
	let multiplier = ggb1.innerData["totalVertSide"];
	let multiplicand = ggb1.innerData["totalHorizSide"];
	ggb2.instance.setValue("multiplicand", multiplicand);
	ggb2.instance.setValue("multiplier", multiplier);
	let tensCount = ggb1.instance.getValue("splitLeft");
	let onesCount = ggb1.instance.getValue("splitRight");
	console.log(tensCount, onesCount);
	let onesTextLine1;
	let onesTextLine3;
	let onesTextLine4;
	let onesOperator = "+";
	let tensOperator = "";

	onesTextLine1 = `${onesOperator} ${onesCount}`;
	onesTextLine3 = `${onesOperator} \(${multiplier} \\times ${onesCount}\)`;
	onesTextLine4 = `${onesOperator} ${multiplier * onesCount}`;

	let tensTextLine1;
	let tensTextLine3;
	let tensTextLine4;
	tensTextLine1 = `${tensOperator} ${tensCount}`;
	tensTextLine3 = `${tensOperator} \(${multiplier} \\times ${tensCount}\)`;
	tensTextLine4 = `${tensOperator} ${multiplier * tensCount}`;

	text1.updateData({
		text: `
			$\\begin{alignedat}{1}
			\\small ${multiplier} \\times ${multiplicand} &= \\small ${multiplier} \\times \(${tensTextLine1} ${onesTextLine1}\)  \\\\
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
