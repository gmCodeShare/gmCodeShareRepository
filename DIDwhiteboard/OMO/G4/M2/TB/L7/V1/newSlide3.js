//slide-65f8cc3cf967

const {
	ggb1,
	ggb2,
	cc_submit_9c0c22e4df05_textbox1: text1,
	cc_submit_9c0c22e4df05_input1: input1,
	cc_submit_9c0c22e4df05_button1: button1,
} = components;

ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button3", false);
ggb1.instance.setVisible("button4", false);
ggb1.instance.setValue("xMax", 16);
ggb2.instance.setValue("xMax", 22);
ggb1.instance.setValue("xMin", -2);

let separated = false;
let grid = true;

slide.on("firstload", () => {
	text1.updateData({ visible: false });
	input1.updateData({ visible: false });
	button1.updateData({ visible: false });
});
autorun(() => {
	let handle = ggb1.innerData["Number"];
	let divider = ggb1.innerData["B"];
	if (divider[0] != "0") {
		text1.updateData({ visible: true });
		input1.updateData({ visible: true });
		button1.updateData({ visible: true });
	}
	let multiplier = ggb1.innerData["totalVertSide"];
	let multiplicand = ggb1.innerData["totalHorizSide"];
	ggb2.instance.setValue("multiplicand", multiplicand);
	ggb2.instance.setValue("multiplier", multiplier);
	ggb2.instance.setValue("greenPoints", ggb1.instance.getValue("splitLeft"));
	ggb2.instance.setValue("bluePoints", ggb1.instance.getValue("splitRight"));
	let tensCount = ggb2.instance.getValue("multiplicandTens");
	let onesCount = ggb2.instance.getValue("multiplicandOnes");
});

button1.on("click", () => {
	controls.next();
});
