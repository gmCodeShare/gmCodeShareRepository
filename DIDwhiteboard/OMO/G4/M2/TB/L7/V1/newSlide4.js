//slide-d1de37d98688

const { ggb1, ggb2, buttonGroup2, media1 } = components;
ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button3", false);
ggb1.instance.setVisible("button4", false);

let separated = false;
let grid = true;
ggb1.instance.setValue("xMax", 16);
ggb2.instance.setValue("xMax", 22);
ggb1.instance.setValue("xMin", -2);
ggb1.updateData({flag: false});

media1.on("ready", ({data: vid}) => {
	ggb1.updateData({disabled: true});
	ggb2.updateData({disabled: true});
	vid.play();
	vid.bind("betweentimes", 10, 11, (withinInterval) => {
		if (withinInterval) {
			vid.pause();
			ggb1.updateData({disabled: false});
			ggb2.updateData({disabled: false});
		}
	});
	vid.bind("betweentimes", 53, 54, (withinInterval) => {
		if (withinInterval) {
			vid.pause();
			ggb1.updateData({disabled: false});
			ggb2.updateData({disabled: false});
		}
	});
	vid.bind("betweentimes", 62, 63, (withinInterval) => {
		if (withinInterval) {
			vid.pause();
			ggb1.updateData({disabled: false});
			ggb2.updateData({disabled: false});
		}
	});
	buttonGroup2.on("click:1", () => {
		vid.play();
		ggb1.updateData({disabled: true});
		ggb2.updateData({disabled: true});
	});
	vid.bind("end", controls.next);
});

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
	if (handle[0] == 12 && handle[1] == -3 && divider[0] == 0&&!ggb1.data.flag) {
		media1.play();
		ggb1.updateData({flag: true, disabled: true});
		ggb2.updateData({disabled: true});
	}
	if (divider[0] == 10 && ggb1.data.flag) {
		ggb1.updateData({disabled: true});
		ggb2.updateData({disabled: true});
		media1.play();
	}
	buttonGroup2.updateSingleButton({ disabled: divider[0] == 0 || (divider[0]!=0&&!grid) }, 1);
	buttonGroup2.updateSingleButton({ disabled: divider[0] == 0 || (divider[0]!=0&&grid) }, 2);
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
