const { ggb1, ggb2, buttonGroup1, select1, select2 } = components;

ggb1.instance.setValue("SeeWhat", 0);
ggb2.instance.setValue("SeeWhat", 0);
ggb2.instance.evalCommand("SetViewDirection(Vector(Midpoint(A,G),D))");
ggb2.instance.setCoordSystem(-6, 12, -9, 9, -4, 14, false);
select2.selectOption("0");
select2.selectOption("1");
select2.selectOption("2");
select2.setVisible(false);

autorun(() => {
	let height = ggb1.innerData["Height"];
	let width = ggb1.innerData["Width"];
	let length = ggb1.innerData["Length"];

	ggb2.instance.setValue("Height", height);
	ggb2.instance.setValue("Width", width);
	ggb2.instance.setValue("Length", length);
});

select1.on("change", ({ selected }) => {
	if (selectedLabels(select1).includes("See Rectangle")) {
		ggb1.instance.setValue("SeeWhat", 1);
        ggb2.instance.setValue("SeeWhat", 1);
        select2.setVisible(false);
	}
	if (selectedLabels(select1).includes("See Rectangular Prism")) {
		ggb1.instance.setValue("SeeWhat", 2);
        ggb2.instance.setValue("SeeWhat", 2);
        select2.setVisible(true);
	}
	if (selectedLabels(select1).includes("See Both")) {
		ggb1.instance.setValue("SeeWhat", 3);
        ggb2.instance.setValue("SeeWhat", 3);
        select2.setVisible(true);
	}
});

select2.on("change", ({ selected }) => {
	if (selectedLabels(select2).includes("Show Edges")) {
		ggb2.instance.setValue("ShowEdges", true);
	}
	if (!selectedLabels(select2).includes("Show Edges")) {
		ggb2.instance.setValue("ShowEdges", false);
	}
	if (selectedLabels(select2).includes("Show Faces")) {
		ggb2.instance.setValue("ShowFaces", true);
	}
	if (!selectedLabels(select2).includes("Show Faces")) {
		ggb2.instance.setValue("ShowFaces", false);
	}
	if (selectedLabels(select2).includes("Show Vertices")) {
		ggb2.instance.setValue("ShowVertices", true);
	}
	if (!selectedLabels(select2).includes("Show Vertices")) {
		ggb2.instance.setValue("ShowVertices", false);
	}
});

buttonGroup1.on("click:1", () => {
	ggb2.instance.evalCommand("SetViewDirection(Vector(Midpoint(A,G),D))");
	ggb2.instance.setCoordSystem(-6, 12, -9, 9, -4, 14, false);
	let allObjects = ggb2.instance.getAllObjectNames();
	console.log(allObjects);
	for (let i = 0, L = allObjects.length; i < L; i++) {
		if (allObjects[i].includes("ighlight")) {
			ggb2.instance.evalCommand(
				`SetVisibleInView(${allObjects[i]},-1,false)`
			);
		}
	}
	ggb2.instance.evalCommand("SelectObjects()");
});

function selectedLabels(selectComponent) {
	let selected = [...selectComponent.data.selected];
	// create an array out of the labels for each element of the selected array
	let labels = selected.map(
		(index) => selectComponent.data.options[parseInt(index)].label
	);
	let options = [...selectComponent.data.options];
	// create an array out of the labels for each element of the options array
	let optionLabels = options.map((element) => element.label);
	// grab only elements from options that also appear in selected
	return optionLabels.filter((value) => labels.includes(value));
}
