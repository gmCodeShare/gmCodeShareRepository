//////infinite draggers for eggs
function ggbOnInit() {
	function snapback(event) {
		switch (true) {
			//This function allows any "Movable" object to be copied in the scene.
			case event.type == "dragEnd" && event.target.includes("Movable"):
				//if images isn't in region, then create new image, set a point on the corner of that image, hide the corner, and increment rocket number
				if (!ggbApplet.getValue("IsInRegion(EggEndBL,bin)")) {
					ggbApplet.evalCommand(
						"Egg" +
							ggbApplet.getValue("activeEgg") +
							"=CopyFreeObject(MovableEgg)"
					);
					ggbApplet.evalCommand(
						"Egg" +
							ggbApplet.getValue("activeEgg") +
							"Point=Corner(Egg" +
							ggbApplet.getValue("activeEgg") +
							",1)"
					);
					ggbApplet.setVisible(
						"Egg" + ggbApplet.getValue("activeEgg") + "Point",
						false
					);
					ggbApplet.setValue(
						"activeEgg",
						ggbApplet.getValue("activeEgg") + 1
					);
				}
				//This sets the coordinates of the new rocket based on rocket start and end points.
				ggbApplet.setCoords(
					"EggEndBL",
					ggbApplet.getXcoord("EggStartBL"),
					ggbApplet.getYcoord("EggStartBL")
				);
				ggbApplet.setCoords(
					"EggEndBR",
					ggbApplet.getXcoord("EggStartBR"),
					ggbApplet.getYcoord("EggStartBR")
				);
				break;
			//This deletes the moveable object(s) when placed in bin, but doesn't delete bin or button
			case !event.target.includes("Movable") &&
				event.target.includes("Egg") &&
				ggbApplet.getYcoord(event.target + "Point") < 4 &&
				!event.target.includes("button") &&
				!event.target.includes("bin"):
				ggbApplet.deleteObject(event.target);
				ggbApplet.setValue(
					"activeEgg",
					ggbApplet.getValue("activeEgg") - 1
				);

				break;
		}
	}

	ggbApplet.registerClientListener(snapback);
}
