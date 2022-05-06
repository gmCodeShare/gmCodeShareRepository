//slide-6daef052363b

const { select1, button1, media1, input1 } = components;

slide.on("firstload", () => {
	button1.updateData({
		align: "right",
		disabled: "true",
	});
	input1.updateData({ visible: false });
//	media1.updateData({ visible: false });
});

select1.on("change", ({ selected }) => {
	button1.updateData({
		text: "Submit",
		disabled: !selected.length,
	});
	input1.updateData({ visible: selected.includes("3") });
});

autorun(() => {
	if (input1.data.text != input1.data.last && input1.data.visible) {
		button1.updateData({ text: "Submit", disabled: !input1.data.text });
		input1.updateData({ last: input1.data.text });
	}
});

media1.on("ready", ({data: vid}) => {
	vid.play();
	vid.pause();
	select1.on("change", () => {
		vid.pause();
	});
	button1.on("click", () => {
		vid.play();
	});
	vid.bind("end", controls.next);
});

button1.on("click", () => {
	button1.updateData({ text: "Submitted", disabled: true });
	// if (!media1.data.visible) {
	// 	media1.on("ready", media1.play);
	// }
	// media1.updateData({ visible: true });
});
