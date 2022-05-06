function ggbOnInit(name, ggbObject) {
	function selectIndicator(selectedObject) {
		if (selectedObject.type == "select") {
			let name = selectedObject.target;
			ggbObject.setTextValue("WhatsSelected", name);
		}
	}

	function hideNote(clicked) {
		switch (true) {
			case clicked.includes("PostIt") &&
				!clicked.includes("Cover") &&
				!clicked.includes("Choice"):
				ggbObject.setVisible("PostItCover" + clicked.slice(-1), true);
				ggbObject.setVisible("PostIt" + clicked.slice(-1), false);
				break;
			case clicked.includes("Choice"):
				ggbObject.setValue("timer1", 0);
				ggbObject.setTextValue("ChosenCard", clicked);

				break;
			case clicked.includes("Cover"):
				ggbObject.setTextValue("ChosenCover", clicked);
				ggbObject.setAnimating("timer1", true);
				ggbObject.startAnimation();
				break;
		}
	}

	ggbObject.registerClientListener(selectIndicator);
	ggbObject.registerClickListener(hideNote);

	var arialabel = "Missing Piece Interactive";
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
}
