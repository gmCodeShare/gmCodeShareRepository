function ggbOnInit(name, ggbObject) {
	function announcekey(a) {
		switch (ggbObject.getObjectType(a)) {
			case "point":
				var v = ggbObject.getValue(a);
				switch (a) {
					case "B":
						ggbObject.evalCommand("ReadText(text4)");
						break;
					case "C":
						ggbObject.evalCommand("ReadText(text4)");
						break;
					case "D":
						ggbObject.evalCommand("ReadText(text3)");
						break;
					case "E":
						ggbObject.evalCommand("ReadText(text3)");
						break;
					case "boolean":

						break;
				}
		}
	}


	var arialabel = "Parallel and Perpendicular Lines Interactive";
	var ggbcanvasarray = document.querySelectorAll("canvas");
	for (i = 0; i < ggbcanvasarray.length; i++) {
		var parameterID = ggbcanvasarray[i]
			.closest("div.appletParameters,div.notranslate")
			.getAttribute("id");
		var canvasID = "canvas" + parameterID;
		ggbcanvasarray[i].setAttribute("id", canvasID);
	}
	var id = "canvas" + name;
	var ggbcanvas = document.getElementById(id);
	if (ggbcanvas) {
		ggbcanvas.setAttribute("aria-label", arialabel);
	}

	//   ggbObject.registerClientListener(previewkey);
	ggbObject.registerUpdateListener(announcekey);
	eventTarget.addEventListener("keyup", previewkey);
}
