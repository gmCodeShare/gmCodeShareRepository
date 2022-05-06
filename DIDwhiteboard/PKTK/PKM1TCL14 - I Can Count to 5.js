const { ggb1, buttonGroup1 } = components;

ggb1.instance.setValue("click", 0);
ggb1.instance.setValue("maxNumber", 5);
buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	ggb1.instance.evalCommand("RunClickScript(button1)");
	if (ggb1.instance.getValue("click") == 5) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	}
});
buttonGroup1.on("click:2", () => {
	ggb1.instance.setValue("click", 0);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	for (let i = 1; i < 6; i++) {
		ggb1.instance.evalCommand("SetVisibleInView(CardQuad" + i + ",1,true)");
		ggb1.instance.evalCommand("SetVisibleInView(pic" + i + ",1,false)");
		ggb1.instance.setValue("hidingClick" + i, 0);
		ggb1.instance.setColor("HidingCard" + i, 255, 255, 255);
		ggb1.instance.setFilling("HidingCard" + i, 0.1);
	}
	ggb1.instance.evalCommand("SelectObjects()");
});
