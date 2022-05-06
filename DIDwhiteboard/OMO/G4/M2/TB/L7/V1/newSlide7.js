//slide-9a8fe5b06d52

const {
	ggb1,
	text1,
	buttonGroup2,
	media1,
	cc_submit_62830b32bb1f_textbox1: textbox1,
	cc_submit_62830b32bb1f_input1: input1,
	cc_submit_62830b32bb1f_button1: button1,
} = components;
ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button3", false);
ggb1.instance.setVisible("button4", false);
ggb1.instance.setValue("xMax", 32);
ggb1.instance.setValue("xMin", -2);

let separated = false;
let grid = true;

media1.on("ready", ({ data: vid }) => {
	ggb1.updateData({ disabled: true });
	vid.play();
	vid.bind("end", () => {
		ggb1.updateData({ disabled: false });
	});
});

slide.on("firstload", () => {
	textbox1.updateData({ visible: false });
	input1.updateData({ visible: false });
	button1.updateData({ visible: false });
	ggb1.updateData({ flag: false });
});

autorun(() => {
	let handle = ggb1.innerData["Number"];
	let divider = ggb1.innerData["B"];
	if (divider[0] != "0") {
		ggb1.updateData({ flag: true });
	}
	if (ggb1.data.flag) {
		textbox1.updateData({ visible: ggb1.data.flag });
		input1.updateData({ visible: ggb1.data.flag });
		button1.updateData({ visible: ggb1.data.flag });
	}
	let multiplier = ggb1.innerData["totalVertSide"];
	let multiplicand = ggb1.innerData["totalHorizSide"];
	let tensCount = ggb1.instance.getValue("splitLeft");
	let onesCount = ggb1.instance.getValue("splitRight");
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

	buttonGroup2.updateSingleButton(
		{ disabled: divider[0] == 0 || (divider[0] != 0 && !grid) },
		1
	);
	buttonGroup2.updateSingleButton(
		{ disabled: divider[0] == 0 || (divider[0] != 0 && grid) },
		2
	);
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

button1.on("click", () => {
	controls.next();
});
