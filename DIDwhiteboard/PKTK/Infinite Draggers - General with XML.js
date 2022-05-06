//need to edit tab order so the kid goes back to same object
//need to make it fill in the missing object before continuing forward
//should we have two variables for objectNumber vs on screen number?
//needs selection indicators

/*
Execute #1
	Create bin (in GH already)
Import two copies of each image and name them Perma(ImageName) and Movable(ImageName)
Name the points for each Perma(ImageName) (ImageName)StartBL and (ImageName)StartBR
Name the points for each Movable(ImageName) (ImageName)EndBL and (ImageName)EndBR
	Could use Rename(Object,Name)
Execute #2
	Find height and width of Perma images (use execute #2)
	Create (ImageName)Box and (ImageName)Box2 based on image height and width
*/

function ggbOnInit() {
	//client listener function that makes a new image and sends the movable image back
	var imageName = "";
	function snapback(event) {
		console.log(event); //note: no events are fired when arrows are pressed
		switch (event.type) {
			case "select":
				imageName = event.target;
				console.log("selected image on select is", event.target);
				console.log("Select has been fired on", event.target);
				break;
			case "mouseDown":
				if (event.hits[0].includes("Movable")) {
					imageName = event.hits[0];
					console.log("selected image on select is", event.hits[0]);
					console.log("Select has been fired on", event.hits[0]);
				}
				break;
		}
		if (event.type == "deselect" || event.type == "dragEnd") {
			//need to know if object is in the bin or not.
			console.log(event.type, imageName + objectNumber);
			if (imageName.includes("Movable")) {
				imageName = imageName.slice(7);
				if (
					!ggbApplet.getValue(
						"IsInRegion(" + imageName + "EndBL, bin)"
					)
				) {
					//rename the Movable Chicken to chicken 1
					var objectNumber = ggbApplet.getValue("active" + imageName);
					//concatenate name
					let nameAndNumber = imageName + objectNumber;
					//create left and right points in region and place them accordingly
					ggbApplet.evalCommand(
						nameAndNumber + "BL=PointIn(" + imageName + "Box)"
					);
					ggbApplet.setCoords(
						nameAndNumber + "BL",
						ggbApplet.getXcoord(imageName + "EndBL"),
						ggbApplet.getYcoord(imageName + "EndBL")
					);
					ggbApplet.evalCommand(
						nameAndNumber + "BR=PointIn(" + imageName + "Box2)"
					);
					ggbApplet.setCoords(
						nameAndNumber + "BR",
						ggbApplet.getXcoord(imageName + "EndBR"),
						ggbApplet.getYcoord(imageName + "EndBR")
					);
					//create image
					ggbApplet.evalCommand(
						imageName +
							objectNumber +
							"=CopyFreeObject(Movable" +
							imageName +
							")"
					);
					//call function to reassociate image points
					reassociateImage(nameAndNumber);
					ggbApplet.setVisible(nameAndNumber + "BL", false);
					ggbApplet.setVisible(nameAndNumber + "BR", false);
					ggbApplet.setValue(
						"active" + imageName,
						ggbApplet.getValue("active" + imageName) + 1
					);
					ggbApplet.setValue(
						imageName + "OnScreen",
						ggbApplet.getValue(imageName + "OnScreen") + 1
					);
				}
				ggbApplet.setCoords(
					imageName + "EndBL",
					ggbApplet.getXcoord(imageName + "StartBL"),
					ggbApplet.getYcoord(imageName + "StartBL")
				);
				ggbApplet.setCoords(
					imageName + "EndBR",
					ggbApplet.getXcoord(imageName + "StartBR"),
					ggbApplet.getYcoord(imageName + "StartBR")
				);
			} // might be able to do an else here fo when it gets deleted?
			if (
				!imageName.includes("Movable") &&
				ggbApplet.getValue("IsInRegion(" + imageName + "BL, bin)")
			) {
				console.log(event.type, imageName);
				ggbApplet.deleteObject(imageName);
			}
			//do more stuff here
		}
	}

	function reassociateImage(prefix) {
		//get XML of element as a string
		var xmlstring = ggbApplet.getXML(prefix);

		//convert XML string to XML document
		var parser = new DOMParser();
		var xmldom = parser.parseFromString(xmlstring, "application/xml");

		//naviagte the XML DOM to change the value of an attribute
		xmldom
			.getElementsByTagName("startPoint")[0]
			.setAttribute("exp", prefix + "BL");
		xmldom
			.getElementsByTagName("startPoint")[1]
			.setAttribute("exp", prefix + "BR");

		//convert the XML document back into a string
		var serializer = new XMLSerializer();
		xmlstring = serializer.serializeToString(xmldom);

		//evaluate XML string to update the element in Geogebra
		ggbApplet.evalXML(xmlstring);
	}

	ggbApplet.registerClientListener(snapback);
}
