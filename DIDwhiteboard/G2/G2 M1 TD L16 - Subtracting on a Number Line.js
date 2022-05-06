const { ggb1, button1, button2, button3, button4 } = components;

slide.on("firstload", () => {
	button2.updateData({ visible: false });
	button3.updateData({ visible: false });
	button4.updateData({ visible: false });
});

button1.on("click", () => {
	button1.updateData({ visible: false });
	button2.updateData({ visible: true });
	ggb1.instance.evalCommand("RunClickScript(button1)");
});

button2.on("click", () => {
	button2.updateData({ visible: false });
	button3.updateData({ visible: true });
	ggb1.instance.evalCommand("RunClickScript(button2)");
});

button3.on("click", () => {
	button3.updateData({ visible: false });
	button4.updateData({ visible: true });
	ggb1.instance.evalCommand("RunClickScript(button3)");
});

button4.on("click", () => {
	button4.updateData({ visible: false });
	button1.updateData({ visible: true });
	ggb1.instance.evalCommand("RunClickScript(button4)");
});
