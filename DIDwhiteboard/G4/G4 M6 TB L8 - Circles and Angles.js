const { ggb1, ggb2, buttonGroup1, text1 } = components;

buttonGroup1.updateSingleButton({ disabled: true }, 1);
text1.updateData({ text: `$0$°=$\\frac{$0$}{360}$`, align: "center" });

buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	ggb1.instance.setValue("showAngles", true);
});

buttonGroup1.on("click:2", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	ggb1.instance.setValue("showAngles", false);
});

ggb2.instance.registerObjectUpdateListener("β", updateLeft);
let beta;

function updateLeft() {
	ggb1.instance.setValue("β", ggb2.instance.getValue("β"));
	beta = ggb1.instance.getValue("β");
	text1.updateData({ text: `${beta}°=$\\frac{${beta}}{360}$` });
}
