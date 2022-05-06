//slide-0c682e584049

const {
	media1,
	ggb1,
	ggb2,
	select1,
	select2,
	select3,
	buttonGroup1,
	feedback,
} = components;
media1.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		media1.updateData({ visible: false });
        ggb1.updateData({visible: true});
        if (select1.data.selected.includes("0") || select1.data.selected.includes("1")) {
            ggb2.updateData({visible: true});
            select3.setVisible(true);
        }
		select1.setVisible(true);
		buttonGroup1.updateData({ visible: true });
		feedback.updateData({ visible: false });
	});
});
var click = 0;
let safeArray = ggb2.instance.getAllObjectNames("point");
slide.on("firstload", () => {
	ggb1.updateData({ visible: false });
	select1.setVisible(false);
	select2.setVisible(false);
	select2.selectOption("0");
	select3.selectOption("0");
	select3.setVisible(false);
	buttonGroup1.updateData({ visible: false });
	saveData({
		ggbXML: ggb2.instance.getXML(),
		count: 1,
		holdnum: -1,
	});
	ggb1.instance.registerClientListener(choose);
    ggb2.instance.registerClientListener(drop);
    ggb2.instance.registerClientListener(copy);
	ggb2.updateData({ visible: false });
});

autorun(() => {
	if (select1.data.selected.includes("0")) {
		ggb1.instance.setValue("playerA", true);
        ggb1.instance.setValue("playerB", false);
        ggb2.updateData({visible: true});
        select3.setVisible(true);
	}
	if (select1.data.selected.includes("1")) {
		ggb1.instance.setValue("playerA", false);
        ggb1.instance.setValue("playerB", true);
        ggb2.updateData({visible: true});
        select3.setVisible(true);
    }
	ggb1.instance.setVisible("plus", false);
	ggb1.instance.setVisible("equal", false);
	ggb1.instance.setVisible("answerBox", false);
	ggb1.instance.getAllObjectNames("image").forEach((element) => {
		ggb1.instance.setVisible(element, false);
	});
	ggb1.instance.evalCommand('answer=""');
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
});
autorun(() => {
	if (select2.data.selected.includes("0")) {
		ggb1.instance.setValue("challengeBool", false);
	}
	if (select2.data.selected.includes("1")) {
		ggb1.instance.setValue("challengeBool", true);
        select1.selectOption("0");
        ggb2.instance.setXML(getData("ggbXML"));
	saveData({ count: 1, holdnum: -1 });
    ggb2.instance.registerClientListener(drop);
    ggb2.instance.registerClientListener(copy);
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	select1.selectOption("0");
    let pointArray = ggb2.instance.getAllObjectNames("point");
	pointArray.forEach((element) => {
		if (!safeArray.includes(element)) {
			ggb2.instance.deleteObject(element);
		}
    });
	}
	ggb1.instance.setVisible("plus", false);
	ggb1.instance.setVisible("equal", false);
	ggb1.instance.setVisible("answerBox", false);
	ggb1.instance.getAllObjectNames("image").forEach((element) => {
		ggb1.instance.setVisible(element, false);
	});
	ggb1.instance.evalCommand('answer=""');
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
});
autorun(() => {
	if (select3.data.selected.includes("0")) {
		ggb2.instance.setValue("showCubes", false);
	}
	if (select3.data.selected.includes("1")) {
		ggb2.instance.setValue("showCubes", true);
	}
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
});

buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true, text: "Submitted" }, 1);
	select2.setVisible(true);
});

buttonGroup1.on("click:2", () => {
	ggb2.instance.setXML(getData("ggbXML"));
	saveData({ count: 1, holdnum: -1 });
    ggb2.instance.registerClientListener(drop);
    ggb2.instance.registerClientListener(copy);
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	select1.selectOption("0");
    select2.selectOption("0");
    let pointArray = ggb2.instance.getAllObjectNames("point");
	pointArray.forEach((element) => {
		if (!safeArray.includes(element)) {
			ggb2.instance.deleteObject(element);
		}
    });
});

function choose(clicked) {
	if (clicked.type == "select" && clicked.target.includes("pic")) {
		let otherPlayerA = Math.floor(Math.random() * 5) + 1;
		let otherChallengerA = Math.floor(Math.random() * 10) + 1;
		let otherPlayerB = Math.floor(Math.random() * 5) + 6;
		let otherChallengerB = Math.floor(Math.random() * 10) + 10;
		ggb1.instance.getAllObjectNames("image").forEach((element) => {
			ggb1.instance.setVisible(element, false);
		});
		ggb1.instance.setVisible("plus", true);
		ggb1.instance.setVisible("equal", true);
		//	ggb1.instance.setVisible("square", true);
		ggb1.instance.setVisible("answerBox", true);
		switch (true) {
			case select1.data.selected.includes("0") &&
				select2.data.selected.includes("0"):
				ggb1.instance.setVisible("bigPic" + otherPlayerB, true);
				ggb1.instance.setVisible(
					"bigPic" + clicked.target.slice(3),
					true
				);
				break;
			case select1.data.selected.includes("1") &&
				select2.data.selected.includes("0"):
				ggb1.instance.setVisible("bigPic" + otherPlayerA, true);
				ggb1.instance.setVisible(
					"bigPic" + clicked.target.slice(3),
					true
				);
				break;
			case select1.data.selected.includes("0") &&
				select2.data.selected.includes("1"):
				ggb1.instance.setVisible("bigPic" + otherChallengerB, true);
				ggb1.instance.setVisible(
					"bigPic" + clicked.target.slice(3),
					true
				);
				break;
			case select1.data.selected.includes("1") &&
				select2.data.selected.includes("1"):
				if (otherChallengerA > 5) {
					ggb1.instance.setVisible(
						"bigPic" + otherChallengerA + "c",
						true
					);
				} else {
					ggb1.instance.setVisible("bigPic" + otherChallengerA, true);
				}
				ggb1.instance.setVisible(
					"bigPic" + clicked.target.slice(3),
					true
				);
				break;
			default:
				break;
		}
		ggb1.instance.setValue("playerA", false);
		ggb1.instance.setValue("playerB", false);
	}
}

function drop(b) {
	if (b[0] == "mouseDown") {
		buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
		if (0 < b.y && b.y < 1) {
			var num = parseInt(b.hits[0].slice(3)) - 0.5;
			saveData({ num });
			const count = getData("count");
			if (num != getData("holdnum")) {
				var xcenter = num.toString();
				if (count == 1) {
					ggb2.instance.evalCommand(
						"circle1=Circle((" + xcenter + ",0.5),0.5)"
					);
					ggb2.instance.evalCommand(
						"Anchor1=(" + (Math.floor(b.x) + 0.5) + "," + 1 + ")"
					);
					ggb2.instance.evalCommand(
						"Arcmid1=(x(Midpoint(Anchor1,Follow)),1.5)"
					);
					ggb2.instance.evalCommand(
						"arc1=CircumcircularArc(Anchor1,Arcmid1,(x(Follow),1))"
					);
					saveData({ count: count + 1 });
				} else {
					ggb2.instance.deleteObject("arc" + (count - 1));
					ggb2.instance.evalCommand(
						"Anchor" +
							count +
							"=(" +
							(Math.floor(b.x) + 0.5) +
							"," +
							1 +
							")"
					);
					ggb2.instance.evalCommand(
						"Arcmidfixed" +
							count +
							"=(x(Midpoint(Anchor" +
							count +
							",Anchor" +
							(count - 1) +
							")),1.5)"
					);
					ggb2.instance.evalCommand(
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
					ggb2.instance.evalCommand(
						"Arcmid" +
							count +
							"=(x(Midpoint(Anchor" +
							count +
							",Follow)),1.5)"
					);
					ggb2.instance.evalCommand(
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
				ggb2.instance.deleteObject("arc" + (count - 1));
				ggb2.instance.unregisterClientListener(drop);
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

function copy(grabbed) {
	buttonGroup1.updateSingleButton({ disabled: false, text: "Submit" }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	//sets information about whatever is selected
	if (grabbed.type == "select") {
		objName = grabbed.target;
        type = ggb2.instance.getObjectType(objName);
	}
	//when dragged
    if (grabbed.type == "dragEnd") {
        if (objName == "dragger") {
			type = ggb2.instance.getObjectType(objName);
			//gets coordinates of the corner point
			var xEnd = ggb2.instance.getXcoord("DragPoint");
			var yEnd = ggb2.instance.getYcoord("DragPoint");
			//if the picture dragged is over the line
            if (yEnd > -2) {
				ggb2.instance.evalCommand("Point" + click + "=(" + xEnd + "," + yEnd + ")");
				ggb2.instance.setVisible("Point" + click,false);
				//create a new copy of the dragged box and put the old one back in the toolbox
				ggb2.instance.evalCommand(
					"BlueCube" +
						click +
						"=Polygon(Point" +
						click +
						",Point" +
						click +
						"+(width,0), Point" +
						click +
						"+(width,width),Point" +
						click +
						"+(0,width))"
                );
                ggb2.instance.evalCommand("SetConditionToShowObject(BlueCube"+click+", showCubes)");
				ggb2.instance.setColor("BlueCube" + click, 0, 127, 175);
                ggb2.instance.setFilling("BlueCube" + click, 0.35);
                if (ggb2.instance.getYcoord("BluePoint"+click) == 0) {
                    ggb2.instance.setFixed("BlueCube" + click, true, false);
                }
				ggb2.instance.setCoords(
					"DragPoint",
					ggb2.instance.getXcoord("BlueStart"),
					ggb2.instance.getYcoord("BlueStart")
                );
				click++;
			}
        } else if (objName == "draggerGreen") {
           	type = ggb2.instance.getObjectType(objName);
			//gets coordinates of the corner point
			var xEnd = ggb2.instance.getXcoord("DragPointGreen");
			var yEnd = ggb2.instance.getYcoord("DragPointGreen");
			//if the picture dragged is over the line
            if (yEnd > -2) {
				ggb2.instance.evalCommand(
					"GreenPoint" + click + "=(" + xEnd + "," + yEnd + ")"
				);
				ggb2.instance.setVisible("GreenPoint" + click,false);
				//create a new copy of the dragged box and put the old one back in the toolbox
				ggb2.instance.evalCommand(
					"GreenCube" +
						click +
						"=Polygon(GreenPoint" +
						click +
						",GreenPoint" +
						click +
						"+(width,0), GreenPoint" +
						click +
						"+(width,width),GreenPoint" +
						click +
						"+(0,width))"
                );
                ggb2.instance.evalCommand("SetConditionToShowObject(GreenCube"+click+", showCubes)");
				ggb2.instance.setColor("GreenCube" + click, 0, 129, 57);
                ggb2.instance.setFilling("GreenCube" + click, 0.35);
                if (ggb2.instance.getYcoord("GreenPoint"+click) == 0) {
                    ggb2.instance.setFixed("GreenCube" + click, true, false);
                }
				ggb2.instance.setCoords(
					"DragPointGreen",
					ggb2.instance.getXcoord("GreenStart"),
					ggb2.instance.getYcoord("GreenStart")
				);
				click++;
			}
		}
	}
}