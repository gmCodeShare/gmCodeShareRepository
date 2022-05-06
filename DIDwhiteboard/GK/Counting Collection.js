function ggbOnInit() {
	ggbApplet.registerClientListener("snap");
	ggbApplet.registerObjectClickListener("button2", "showCounters");
	ggbApplet.registerObjectUpdateListener("click", "showCounters");
	ggbApplet.registerObjectUpdateListener("time", "showHide");
	ggbApplet.registerClickListener("clickSnap");
}

var q1Location = 0;
var q1List = [
	"CartonButton1",
	"CartonButton2",
	"CartonButton3",
	"CartonButton4",
	"CartonButton5",
	"CartonButton6",
	"CartonButton7",
	"CartonButton8",
	"CartonButton9",
	"CartonButton10",
];
var lastX = 0;
var lastY = 0;
var trayNumber = 1;
var minButtons = ggbApplet.getValue("MinButtons");
var maxButtons = ggbApplet.getValue("MaxButtons");

function showCounters() {
	ggbApplet.setVisible("FullCarton", false);
	for (let i = 2; i < 11; i++) {
		ggbApplet.setVisible("FullCarton" + i, false);
	}
	ggbApplet.setValue("time", 0);
	ggbApplet.setCoords("VectorEnd", -14, 4);
	trayNumber = 1;
	var buttons =
		minButtons + Math.floor(Math.random() * (maxButtons - minButtons));
	ggbApplet.setValue("DrawSize", buttons);
	console.log(buttons);
	for (let i = 1; i < 101; i++) {
		ggbApplet.setVisible("Counter" + i, false);
		ggbApplet.setVisible("Counter" + i + "Button", false);
	}
	//repopulates list of counters to use and sets their visibility to false
	for (var i = 1, L = ggbApplet.getValue("Length(l2)"); i <= L; i++) {
		console.log("Counter" + ggbApplet.getListValue("l2", i));
		ggbApplet.setCoords(
			"Counter" + ggbApplet.getListValue("l2", i),
			2 * (i % 13) + (Math.floor(i / 13) % 2) + Math.random(),
			2 * Math.floor(i / 13) - 8 + Math.random()
		);
		ggbApplet.setVisible("Counter" + ggbApplet.getListValue("l2", i), true);
		ggbApplet.setVisible(
			"Counter" + ggbApplet.getListValue("l2", i) + "Button",
			true
		);
	}
	//resets counter for number of points in q1
	q1Location = 0;
	//sets tray point visibility to false
	for (var i = 0; i < 10; i++) {
		ggbApplet.setVisible(q1List[i], false);
	}
}

function clickSnap(clicked) {
	lastX = ggbApplet.getXcoord(clicked);
	lastY = ggbApplet.getYcoord(clicked);
	if (ggbApplet.getObjectType(clicked) == "point") {
		if (q1Location < 10) {
			ggbApplet.setVisible(clicked, false);
			ggbApplet.setVisible(clicked + "Button", false);
			ggbApplet.setVisible(q1List[q1Location], true);
			q1Location++;
		}
		if (q1Location == 10) {
			//sets tray point visibility to false
			for (var i = 0; i < 10; i++) {
				ggbApplet.setVisible(q1List[i], false);
			}
			ggbApplet.setVisible("FullCarton", true);
			q1Location = 0;
			ggbApplet.setCoords(
				"VectorEnd",
				-14 +
					Math.ceil(ggbApplet.getValue("cartonWidth")) *
						Math.floor(trayNumber / 5),
				7 - 3 * (trayNumber % 5)
			);
			trayNumber++;
			ggbApplet.setValue("time", 0);
			ggbApplet.setAnimating("time", true);
			ggbApplet.startAnimation();
		}
		if (q1Location > 10) {
			ggbApplet.setCoords(clicked, lastX, lastY);
		}
	}
}

function snap(grabbed) {
	if (grabbed[0] == "mouseDown") {
		lastX = grabbed.x;
		lastY = grabbed.y;
	}
	if (ggbApplet.getObjectType(grabbed[1]) == "point") {
		if (
			q1Location < 10 &&
			grabbed[0] == "dragEnd" &&
			ggbApplet.getValue("IsInRegion(" + grabbed[1] + ",q1)") == 1
		) {
			ggbApplet.setVisible(grabbed[1], false);
			ggbApplet.setVisible(grabbed[1] + "Button", false);
			ggbApplet.setVisible(q1List[q1Location], true);
			q1Location++;
		}
		//  console.log(grabbed[0]);
		if (q1Location == 10) {
			//sets tray point visibility to false
			for (var i = 0; i < 10; i++) {
				ggbApplet.setVisible(q1List[i], false);
			}
			ggbApplet.setVisible("FullCarton", true);
			q1Location = 0;
			ggbApplet.setCoords(
				"VectorEnd",
				-14 +
					Math.ceil(ggbApplet.getValue("cartonWidth")) *
						Math.floor(trayNumber / 5),
				7 - 3 * (trayNumber % 5)
			);
			trayNumber++;
			ggbApplet.setValue("time", 0);
			ggbApplet.setAnimating("time", true);
			ggbApplet.startAnimation();
		}
		if (q1Location > 10) {
			ggbApplet.setCoords(grabbed[1], lastX, lastY);
		}
	}
}

function showHide() {
	if (ggbApplet.getValue("time") == 1) {
		ggbApplet.setVisible("FullCarton" + trayNumber, true);
		ggbApplet.setVisible("FullCarton", false);
	}
}
