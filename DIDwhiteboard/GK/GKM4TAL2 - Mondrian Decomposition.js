const { ggb1, ggb2 } = components;

ggb1.instance.registerClientListener("losefocus");
ggb1.instance.registerObjectUpdateListener("crop", "display2");

autorun(() => {
	let cropLocation = ggb1.innerData["crop"];
	display2();
});
function losefocus(a) {
	if (a[0] == "dragEnd") {
		ggb1.instance.evalCommand("SelectObjects()");
	}
}

function display2() {
	if (ggb1.instance.getValue("q1q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q1,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q1,2,false)");
	}
	if (ggb1.instance.getValue("q2q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q2,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q2,2,false)");
	}
	if (ggb1.instance.getValue("q3q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q3,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q3,2,false)");
	}
	if (ggb1.instance.getValue("q4q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q4,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q4,2,false)");
	}
	if (ggb1.instance.getValue("q5q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q5,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q5,2,false)");
	}
	if (ggb1.instance.getValue("q6q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q6,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q6,2,false)");
	}
	if (ggb1.instance.getValue("q7q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q7,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q7,2,false)");
	}
	if (ggb1.instance.getValue("q8q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q8,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q8,2,false)");
	}
	if (ggb1.instance.getValue("q9q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q9,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q9,2,false)");
	}
	if (ggb1.instance.getValue("q10q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q10,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q10,2,false)");
	}
	if (ggb1.instance.getValue("q11q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q11,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q11,2,false)");
	}
	if (ggb1.instance.getValue("q12q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q12,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q12,2,false)");
	}
	if (ggb1.instance.getValue("q13q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q13,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q13,2,false)");
	}
	if (ggb1.instance.getValue("q14q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q14,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q14,2,false)");
	}
	if (ggb1.instance.getValue("q15q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q15,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q15,2,false)");
	}
	if (ggb1.instance.getValue("q16q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q16,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q16,2,false)");
	}
	if (ggb1.instance.getValue("q17q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q17,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q17,2,false)");
	}
	if (ggb1.instance.getValue("q18q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q18,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q18,2,false)");
	}
	if (ggb1.instance.getValue("q19q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q19,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q19,2,false)");
	}
	if (ggb1.instance.getValue("q20q")) {
		ggb2.instance.evalCommand("SetVisibleInView(q20,2,true)");
	} else {
		ggb2.instance.evalCommand("SetVisibleInView(q20,2,false)");
	}
}
