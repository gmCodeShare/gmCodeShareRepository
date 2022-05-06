//slide-bca62c674e2b

const { media8, text1, text2, text3, select1, ggb1, buttonGroup1 } = components;

slide.on("firstload", () => {
	ggb1.instance.setValue("animationOn", false);
	ggb1.updateData({ visible: false });
	text1.updateData({ visible: false });
	select1.setVisible(false);
	buttonGroup1.updateData({ visible: false });
	text3.updateData({ visible: false, visibilityBehavior: "hide" });
});

select1.on("change", ({ selected }) => {
	ggb1.instance.setAnimating("time", false);
	ggb1.instance.setValue("time", 0);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	ggb1.instance.setValue("showCheck", false);
	text3.updateData({ visible: false });
	switch (true) {
		case selected.includes("0"):
			text2.updateData({
				text: `Graph the line by using the $x$-intercept point and $y$-intercept point.`,
			});
			ggb1.instance.setValue("showSTD", true);
			ggb1.updateData({ visible: true });
			buttonGroup1.updateData({ visible: true });
			break;
		case selected.includes("1"):
			text2.updateData({
				text: `Graph the line by using the slope and $y$-intercept point.  
				$\\phantom{point}$`,
			});
			ggb1.instance.setValue("showSI", true);
			ggb1.updateData({ visible: true });
			buttonGroup1.updateData({ visible: true });
			break;
		default:
			break;
	}
});

//sets initial x and y values of points
let x1 = ggb1.innerData["A"][0];
let y1 = ggb1.innerData["A"][1];
let x2 = ggb1.innerData["B"][0];
let y2 = ggb1.innerData["B"][1];
let x3 = ggb1.innerData["C"][0];
let y3 = ggb1.innerData["C"][1];

//if points are both moved, enable graph button and hide line
autorun(() => {
	let P1 = ggb1.innerData["A"];
	let P2 = ggb1.innerData["B"];
	let P3 = ggb1.innerData["C"];
	ggb1.instance.setValue("showCheck", false);
	text3.updateData({ visible: false });
	ggb1.instance.setAnimating("time", false);
	ggb1.instance.setValue("time", 0);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	if (
		P1[0] != x1 ||
		P1[1] != y1 ||
		P2[0] != x2 ||
		P2[1] != y2 ||
		P3[0] != x3 ||
		P3[1] != y3
	) {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}
	//saves work for next slide
	ggb1.instance.registerStoreUndoListener(() => {
		saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
	});
});

////////////////////  VIDEO CONTROLS  ////////////////////
media8.on("ready", ({ data: vid }) => {
	//	vid.play();
	vid.bind("end", () => {
		text1.updateData({ visible: true });
		select1.setVisible(true);
	});
});

////////////////////  BUTTON CONTROLS  ////////////////////
//graphs line
buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	text3.updateData({ visible: false });
	ggb1.instance.setValue("showCheck", false);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	x1 = ggb1.innerData["A"][0];
	y1 = ggb1.innerData["A"][1];
	x2 = ggb1.innerData["B"][0];
	y2 = ggb1.innerData["B"][1];
	x3 = ggb1.innerData["C"][0];
	y3 = ggb1.innerData["C"][1];
	console.log(x1, y1, x2, y2, x3, y3);
	//ggb1.instance.setVisible("Slide8Line", true);
	setTimeout(() => {
		//	ggb1.instance.setVisible("Slide8Line", false);
		if (ggb1.instance.getValue("showSI")) {
			console.log(
				ggb1.instance.getValue("Slope(Slide8Line)"),
				ggb1.instance.getValue("Slope(SISegAnim)"),
				x2,
				y2
			);
			if (
				ggb1.instance.getValue("Slope(Slide8Line)") ==
					Math.round(
						1000 * ggb1.instance.getValue("Slope(SISegAnim)")
					) /
						1000 &&
				x2 == 0 &&
				y2 == 3
			) {
				ggb1.instance.setValue("showCheck", true);
				text3.updateData({ visible: false });
			} else {
				ggb1.instance.setValue("showCheck", false);
				if (ggb1.instance.getValue("x(C)-x(B)") != 0) {
					text3.updateData({
						visible: true,
						text: `Your line represents $${ggb1.instance.getValueString(
							"SISegEqn"
						)}$.  Try again.`,
					});
				} else {
					text3.updateData({
						visible: true,
						text: `Your line represents $x=${ggb1.instance.getXcoord(
							"B"
						)}$.  Try again.`,
					});
				}
			}
		} else if (ggb1.instance.getValue("showSTD")) {
			if (
				ggb1.instance.getValue("Slope(Slide8Line)") ==
					Math.round(
						1000 * ggb1.instance.getValue("Slope(StandardSegAnim)")
					) /
						1000 &&
				x2 == 0 &&
				y2 == 3
			) {
				ggb1.instance.setValue("showCheck", true);
				text3.updateData({ visible: false });
			} else {
				ggb1.instance.setValue("showCheck", false);
				console.log(ggb1.instance.getValue("x(A)-x(B)"));
				if (ggb1.instance.getValue("x(A)-x(B)") != 0) {
					text3.updateData({
						visible: true,
						text: `Your line represents $${ggb1.instance.getValueString(
							"StandardSegEqn"
						)}$. Try again.`,
					});
				} else {
					text3.updateData({
						visible: true,
						text: `Your line represents $x=${ggb1.instance.getXcoord(
							"B"
						)}$. Try again.`,
					});
				}
			}
		}
	}, 2000);
	//saves work for next slide
		saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
});

let now = controls.current;
autorun(() => {
	if (controls.current != now) {
		//saves work for next slide
			saveData({ saveXML: ggb1.instance.getXML() }, "ggb1");
	}
});

////////////////////  DATA MANAGEMENT  ////////////////////
//save data for slide 2
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
