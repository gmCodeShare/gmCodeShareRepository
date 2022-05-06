const { ggb1 } = components;
ggb1.instance.registerClientListener(controlSpacing);

let firstUp = "";
let secondUp = "";

function controlSpacing(grabbed) {
	if (
		grabbed.type == "dragEnd" &&
		ggb1.instance.getYcoord(`Corner(${grabbed.target},1)`) > -5 &&
		firstUp == "" &&
		grabbed.target.includes("Blue")
	) {
		firstUp = grabbed.target;
	}
	if (
		grabbed.type == "dragEnd" &&
		ggb1.instance.getYcoord(`Corner(${grabbed.target},1)`) > -5 &&
		secondUp == "" &&
		grabbed.target.includes("Red")
	) {
		secondUp = grabbed.target;
	}
	if (
		grabbed.type == "dragEnd" &&
		ggb1.instance.getYcoord(`Corner(${grabbed.target},1)`) > -5 &&
		firstUp.includes("Blue") &&
		firstUp.includes("1")
	) {
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint1+(width,0),BluePoint2)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint2,BlueDragger1)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint2",
				ggb1.instance.getValue("x(BluePoint1)+width"),
				ggb1.instance.getYcoord("BluePoint1")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint1+(width,0),BluePoint3)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint3,BlueDragger1)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint3",
				ggb1.instance.getValue("x(BluePoint1)+width"),
				ggb1.instance.getYcoord("BluePoint1")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint2+(width,0),BluePoint3)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint3,BlueDragger2)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint3",
				ggb1.instance.getValue("x(BluePoint2)+width"),
				ggb1.instance.getYcoord("BluePoint2")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint3+(width,0),BluePoint2)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint2,BlueDragger3)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint2",
				ggb1.instance.getValue("x(BluePoint3)+width"),
				ggb1.instance.getYcoord("BluePoint3")
			);
		}
		ggb1.instance.evalCommand("SelectObjects()");
	}
	if (
		grabbed.type == "dragEnd" &&
		ggb1.instance.getYcoord(`Corner(${grabbed.target},1)`) > -5 &&
		firstUp.includes("Blue") &&
		firstUp.includes("2")
	) {
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint2+(width,0),BluePoint1)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint1,BlueDragger2)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint1",
				ggb1.instance.getValue("x(BluePoint2)+width"),
				ggb1.instance.getYcoord("BluePoint2")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint2+(width,0),BluePoint3)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint3,BlueDragger2)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint3",
				ggb1.instance.getValue("x(BluePoint2)+width"),
				ggb1.instance.getYcoord("BluePoint2")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint1+(width,0),BluePoint3)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint3,BlueDragger1)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint3",
				ggb1.instance.getValue("x(BluePoint1)+width"),
				ggb1.instance.getYcoord("BluePoint1")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint3+(width,0),BluePoint1)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint1,BlueDragger3)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint1",
				ggb1.instance.getValue("x(BluePoint3)+width"),
				ggb1.instance.getYcoord("BluePoint3")
			);
		}
		ggb1.instance.evalCommand("SelectObjects()");
	}
	if (
		grabbed.type == "dragEnd" &&
		ggb1.instance.getYcoord(`Corner(${grabbed.target},1)`) > -5 &&
		firstUp.includes("Blue") &&
		firstUp.includes("3")
	) {
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint3+(width,0),BluePoint1)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint1,BlueDragger3)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint1",
				ggb1.instance.getValue("x(BluePoint3)+width"),
				ggb1.instance.getYcoord("BluePoint3")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint3+(width,0),BluePoint2)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint2,BlueDragger3)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint2",
				ggb1.instance.getValue("x(BluePoint3)+width"),
				ggb1.instance.getYcoord("BluePoint3")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint2+(width,0),BluePoint1)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint1,BlueDragger2)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint1",
				ggb1.instance.getValue("x(BluePoint2)+width"),
				ggb1.instance.getYcoord("BluePoint2")
			);
		}
		if (
			ggb1.instance.getValue(
				"Distance(BluePoint1+(width,0),BluePoint2)"
			) < 2 ||
			ggb1.instance.getValue("IsInRegion(BluePoint2,BlueDragger1)") ==
				true
		) {
			ggb1.instance.setCoords(
				"BluePoint2",
				ggb1.instance.getValue("x(BluePoint1)+width"),
				ggb1.instance.getYcoord("BluePoint1")
			);
		}
		ggb1.instance.evalCommand("SelectObjects()");
	}
	if (
		grabbed.type == "dragEnd" &&
		ggb1.instance.getYcoord(`Corner(${grabbed.target},1)`) > -5 &&
		secondUp.includes("Red") &&
		secondUp.includes("1")
	) {
		if (
			ggb1.instance.getValue("Distance(RedPoint1+(width,0),RedPoint2)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint2,RedDragger1)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint2",
				ggb1.instance.getValue("x(RedPoint1)+width"),
				ggb1.instance.getYcoord("RedPoint1")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint1+(width,0),RedPoint3)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint3,RedDragger1)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint3",
				ggb1.instance.getValue("x(RedPoint1)+width"),
				ggb1.instance.getYcoord("RedPoint1")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint2+(width,0),RedPoint3)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint3,RedDragger2)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint3",
				ggb1.instance.getValue("x(RedPoint2)+width"),
				ggb1.instance.getYcoord("RedPoint2")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint3+(width,0),RedPoint2)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint2,RedDragger3)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint2",
				ggb1.instance.getValue("x(RedPoint3)+width"),
				ggb1.instance.getYcoord("RedPoint3")
			);
		}
		ggb1.instance.evalCommand("SelectObjects()");
	}
	if (
		grabbed.type == "dragEnd" &&
		ggb1.instance.getYcoord(`Corner(${grabbed.target},1)`) > -5 &&
		secondUp.includes("Red") &&
		secondUp.includes("2")
	) {
		if (
			ggb1.instance.getValue("Distance(RedPoint2+(width,0),RedPoint1)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint1,RedDragger2)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint1",
				ggb1.instance.getValue("x(RedPoint2)+width"),
				ggb1.instance.getYcoord("RedPoint2")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint2+(width,0),RedPoint3)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint3,RedDragger2)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint3",
				ggb1.instance.getValue("x(RedPoint2)+width"),
				ggb1.instance.getYcoord("RedPoint2")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint1+(width,0),RedPoint3)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint3,RedDragger1)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint3",
				ggb1.instance.getValue("x(RedPoint1)+width"),
				ggb1.instance.getYcoord("RedPoint1")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint3+(width,0),RedPoint1)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint1,RedDragger3)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint1",
				ggb1.instance.getValue("x(RedPoint3)+width"),
				ggb1.instance.getYcoord("RedPoint3")
			);
		}
		ggb1.instance.evalCommand("SelectObjects()");
	}
	if (
		grabbed.type == "dragEnd" &&
		ggb1.instance.getYcoord(`Corner(${grabbed.target},1)`) > -5 &&
		secondUp.includes("Red") &&
		secondUp.includes("3")
	) {
		if (
			ggb1.instance.getValue("Distance(RedPoint3+(width,0),RedPoint1)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint1,RedDragger3)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint1",
				ggb1.instance.getValue("x(RedPoint3)+width"),
				ggb1.instance.getYcoord("RedPoint3")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint3+(width,0),RedPoint2)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint2,RedDragger3)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint2",
				ggb1.instance.getValue("x(RedPoint3)+width"),
				ggb1.instance.getYcoord("RedPoint3")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint2+(width,0),RedPoint1)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint1,RedDragger2)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint1",
				ggb1.instance.getValue("x(RedPoint2)+width"),
				ggb1.instance.getYcoord("RedPoint2")
			);
		}
		if (
			ggb1.instance.getValue("Distance(RedPoint1+(width,0),RedPoint2)") <
				2 ||
			ggb1.instance.getValue("IsInRegion(RedPoint2,RedDragger1)") == true
		) {
			ggb1.instance.setCoords(
				"RedPoint2",
				ggb1.instance.getValue("x(RedPoint1)+width"),
				ggb1.instance.getYcoord("RedPoint1")
			);
		}
		ggb1.instance.evalCommand("SelectObjects()");
	}
}
