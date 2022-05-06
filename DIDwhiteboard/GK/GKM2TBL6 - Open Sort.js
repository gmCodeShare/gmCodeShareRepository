const { buttonGroup1, ggb1 } = components;

buttonGroup1.on("click:1", () => {
	ggb1.instance.setValue("currentindex", 0);
	console.log(ggb1.instance.getValue("currentindex"));
});
buttonGroup1.on("click:2", () => {
	ggb1.instance.setValue("currentindex", 1);
	console.log(ggb1.instance.getValue("currentindex"));
	buttonGroup1.updateSingleButton({ text: "Sort 2" }, 2);
});
buttonGroup1.on("click:3", () => {
	ggb1.instance.setValue("currentindex", 2);
	console.log(ggb1.instance.getValue("currentindex"));
	buttonGroup1.updateSingleButton({ text: "Sort 3" }, 3);
});
