const { ggb1, ggb2 } = components;

slide.on("firstload", () => {
	ggb1.instance.setValue("H", 10);
	ggb1.instance.setValue("W", 10);
	ggb1.instance.setValue("L", 10);
});

autorun(() => {
	let height = ggb1.innerData["H"];
	let width = ggb1.innerData["W"];
	let length = ggb1.innerData["L"];

	ggb2.instance.setValue("H", height);
	ggb2.instance.setValue("W", width);
	ggb2.instance.setValue("L", length);
	ggb2.instance.setCoords(
		"N",
		ggb2.instance.getXcoord("A"),
		ggb2.instance.getYcoord("A"),
		ggb2.instance.getZcoord("A") + height
	);
	ggb2.instance.setCoords(
		"M",
		ggb2.instance.getXcoord("A") + width,
		ggb2.instance.getYcoord("A"),
		ggb2.instance.getZcoord("A")
	);
	ggb2.instance.setCoords(
		"O",
		ggb2.instance.getXcoord("A"),
		ggb2.instance.getYcoord("A") + length,
		ggb2.instance.getZcoord("A")
	);
});

let everything = ggb2.instance.getAllObjectNames();
let allPoints = ggb2.instance.getAllObjectNames("point");
for (let i = 0, L = everything.length; i < L; i++) {
	if (allPoints.indexOf(everything[i]) == -1) {
		ggb2.instance.setFixed(everything[i], true, false);
	}
}
