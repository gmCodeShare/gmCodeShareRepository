//////rebuilt to accommodate space and shipwreck
function ggbOnInit() {
	function snapback(event) {
		switch (true) {
			//This function allows any "Moveable" object to be copied in the scene.
			case event.type == "dragEnd" && event.target.includes("Movable"):
				let objectName = ["Rocket", "Astronaut", "Alien", "Diver", "Fish", "Octopus", "Shark", "Crab"];
				let number = -1;
				switch (event.target) {
					//if moving rockets
					case "MovableRocket":
						number = 0;
						break;
					//if moving astronauts
					case "MovableAstronaut":
						number = 1;
						break;
					default:
						number = -1;
				}
				//if images isn't in region, then create new image, set a point on the corner of that image, hide the corner, and increment rocket number
				if (
					!ggbApplet.getValue("IsInRegion("+objectName[number]+"EndBL,bin)")
				) {
					console.log(objectName[number],"active"+objectName[number]);
					ggbApplet.evalCommand(
						objectName[number] +
							ggbApplet.getValue("active"+objectName[number]) +
							"=CopyFreeObject(Movable"+objectName[number]+")"
					);
					ggbApplet.evalCommand(objectName[number] + ggbApplet.getValue("active"+objectName[number]) + "Point=Corner("+objectName[number]+ggbApplet.getValue("active"+objectName[number]) +",1)"	);
					ggbApplet.setVisible(
						objectName[number] + ggbApplet.getValue("active"+objectName[number]) + "Point",
						false
					);
					ggbApplet.setValue(
						"active"+objectName[number],
						ggbApplet.getValue("active"+objectName[number]) + 1
					);
				}
				//This sets the coordinates of the new rocket based on rocket start and end points.
				ggbApplet.setCoords(
					objectName[number]+"EndBL",
					ggbApplet.getXcoord(objectName[number]+"StartBL"),
					ggbApplet.getYcoord(objectName[number]+"StartBL")
				);
				ggbApplet.setCoords(
					objectName[number]+"EndBR",
					ggbApplet.getXcoord(objectName[number]+"StartBR"),
					ggbApplet.getYcoord(objectName[number]+"StartBR")
				);
				break;
			//This deletes the moveable object(s) when placed in bin, but doesn't delete bin or button
			case !event.target.includes("Movable") &&
				ggbApplet.getXcoord(event.target + "Point") < 0 &&
				!event.target.includes("button") &&
				!event.target.includes("bin"):
				ggbApplet.deleteObject(event.target);
				switch (true) {
					//This sets the rocket/astronaut value back.
					case event.target.includes("Rocket"):
						ggbApplet.setValue(
							"activeRocket",
							ggbApplet.getValue("activeRocket") - 1
						);
						break;
					case event.target.includes("Astronaut"):
						ggbApplet.setValue(
							"activeAstronaut",
							ggbApplet.getValue("activeAstronaut") - 1
						);
						break;
				}
				break;
		}
	}

	ggbApplet.registerClientListener(snapback);
}
