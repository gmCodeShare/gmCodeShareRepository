//slide-c8b4bc1ba3b8

const { media1, ggb1, fib1, select1, buttonGroup1 } = components;
media1.on("ready", ({ data: vid }) => {
    vid.play();
    vid.bind("betweentimes", 20, 21, (withinInterval) => {
		if (withinInterval) {
			vid.pause();
			ggb1.updateData({ disabled: false });
		}
	});
	vid.bind("end", controls.next);
});

slide.on("firstload", () => {
	select1.selectOption("0");
	saveData({
		ggbXML: ggb1.instance.getXML(),
		count: 1,
		holdnum: -1,
	});
	ggb1.instance.registerClientListener(drop);
});

autorun(() => {
	if (select1.data.selected.includes("0")) {
		ggb1.instance.setValue("showCubes", false);
	}
	if (select1.data.selected.includes("1")) {
		ggb1.instance.setValue("showCubes", true);
	}
});

buttonGroup1.on("click:1", () => {
    buttonGroup1.updateSingleButton({disabled: true, text: "Submitted"}, 1);
    if (fib1.getInput('0').text == "5") {
        media1.play();
    }
});

buttonGroup1.on("click:2", () => {
	select1.selectOption("0");
	ggb1.instance.setXML(getData("ggbXML"));
	saveData({ count: 1, holdnum: -1 });
	ggb1.instance.registerClientListener(drop);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

function drop(b) {
	if (b[0] == "mouseDown") {
		buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
		if (0 < b.y && b.y < 1) {
			var num = parseInt(b.hits[0].slice(3)) - 0.5;
			saveData({ num });
			console.log(num, getData("holdnum"));
			const count = getData("count");
			if (num != getData("holdnum")) {
				var xcenter = num.toString();
				if (count == 1) {
					ggb1.instance.evalCommand(
						"circle1=Circle((" + xcenter + ",0.5),0.5)"
					);
					ggb1.instance.evalCommand(
						"Anchor1=(" + (Math.floor(b.x) + 0.5) + "," + 1 + ")"
					);
					ggb1.instance.evalCommand(
						"Arcmid1=(x(Midpoint(Anchor1,Follow)),1.5)"
					);
					ggb1.instance.evalCommand(
						"arc1=CircumcircularArc(Anchor1,Arcmid1,(x(Follow),1))"
					);
					saveData({ count: count + 1 });
				} else {
					ggb1.instance.deleteObject("arc" + (count - 1));
					ggb1.instance.evalCommand(
						"Anchor" +
							count +
							"=(" +
							(Math.floor(b.x) + 0.5) +
							"," +
							1 +
							")"
					);
					ggb1.instance.evalCommand(
						"Arcmidfixed" +
							count +
							"=(x(Midpoint(Anchor" +
							count +
							",Anchor" +
							(count - 1) +
							")),1.5)"
					);
					ggb1.instance.evalCommand(
						"arcfixed" +
							count +
							"=CircumcircularArc(Anchor" +
							(count - 1) +
							",Arcmidfixed" +
							count +
							",(x(Anchor" +
							count +
							"),1))"
					);
					ggb1.instance.evalCommand(
						"Arcmid" +
							count +
							"=(x(Midpoint(Anchor" +
							count +
							",Follow)),1.5)"
					);
					ggb1.instance.evalCommand(
						"arc" +
							count +
							"=CircumcircularArc(Anchor" +
							count +
							",Arcmid" +
							count +
							",(x(Follow),1))"
					);
					saveData({ count: count + 1, holdnum: num });
				}
			} else {
				ggb1.instance.deleteObject("arc" + (count - 1));
				ggb1.instance.unregisterClientListener(drop);
			}
		}
	}
}

function saveData(dataObj = {}, target = "") {
	const allComps = Object.keys(components).sort();
	const firstComp = allComps[0];
	if (!firstComp) {
		return;
	} // make sure at least 1 comp exists
	if (typeof target !== "string" || typeof dataObj !== "object") {
		console.error(
			"saveData error: Parameters should be an object and a string!"
		);
	}
	let tarComp = !!target ? target : firstComp;
	if (!components[tarComp]?.storage) {
		components[tarComp].storage = {};
	}
	components[tarComp].storage = {
		...components[tarComp].storage,
		...dataObj,
	};
}

function getData(dataName, target = "") {
	const allComps = Object.keys(components).sort();
	const firstComp = allComps[0];
	if (!firstComp) {
		return;
	} // make sure at least 1 comp exists
	if (typeof target !== "string" || typeof dataName !== "string") {
		console.error("getData error: Parameters should both be strings!");
	}
	let tarComp = !!target ? target : firstComp;
	return components[tarComp]?.storage?.[dataName];
}
