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
      console.log("Deselect has been fired");
      console.log("selected image on deselect is", event.target, imageName);
      console.log(event.type, imageName + objectNumber);
      if (imageName.includes("Movable")) {
        imageName = imageName.slice(7);
        if (!ggbApplet.getValue("IsInRegion(" + imageName + "EndBL, bin)")) {
          console.log("The " + event.target + " is not in the bin.");
          //rename the Movable Chicken to chicken 1
          var objectNumber = ggbApplet.getValue("active" + imageName);
          ggbApplet.evalCommand(
            imageName +
              objectNumber +
              "=CopyFreeObject(Movable" +
              imageName +
              ")"
          );
          console.log("The " + event.target + " has been renamed.");
          ggbApplet.evalCommand(
            imageName +
              objectNumber +
              "Point" +
              "=Corner(" +
              imageName +
              objectNumber +
              ",1)"
          );
          ggbApplet.setVisible(imageName + objectNumber + "Point", false);
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
        ggbApplet.getValue("IsInRegion(" + imageName + "Point, bin)")
      ) {
        console.log(event.type, imageName);
        ggbApplet.deleteObject(imageName);
      }
      //do more stuff here
    }

    //Need to check to see if/which animal has been moved from original position
    //if animal has been moved, 2 cases: animal stays and movable goes back OR animal is deleted if over drag bin
  }

  // switch (event.type) {
  //   case "select":
  //     console.log("Select has been fired on", imageName)
  //     break;

  //   case "deselect":
  //     console.log("Deselect has been fired on", imageName)
  //     break;
  // }

  //two cases - create a new image or delete when over drag bin

  /* case event.type == "dragEnd" && event.target.includes("Movable"):
          console.log(event);
          //actions based on dragged image
          let imageName = event.target.slice(7);
          console.log(imageName);
          let objectNumber = ggbApplet.getValue("active" + imageName);
          console.log(objectNumber);
          if (!ggbApplet.getValue("IsInRegion(" + imageName + "EndBL, bin)")) {
            ggbApplet.evalCommand(
              imageName +
                objectNumber +
                "=CopyFreeObject(Movable" +
                imageName +
                ")"
            );
            ggbApplet.evalCommand(
              imageName +
                "Point" +
                objectNumber +
                "=Corner(" +
                imageName +
                objectNumber +
                ",1)"
            );
            ggbApplet.setVisible(imageName + "Point" + objectNumber, false);
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
          break;
  
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //delete image if it in dragged into the bin
        case event.type == "dragEnd" &&
          !event.target.includes("Movable") &&
          !event.target.includes("bin") &&
          !event.target.includes("button"):
          const findNum = /\d+/g;
          let imageNumber = event.target.match(findNum);
          let deletingImage = "";
          if (imageNumber >= 10) {
            deletingImage = event.target.slice(0, -2);
            var xCoord = ggbApplet.getXcoord(
              deletingImage + "Point" + imageNumber
            );
          } else {
            deletingImage = event.target.slice(0, -1);
            var xCoord = ggbApplet.getXcoord(
              deletingImage + "Point" + imageNumber
            );
          }
          if (xCoord < 0) {
            ggbApplet.deleteObject(event.target);
            ggbApplet.setValue(
              deletingImage + "OnScreen",
              ggbApplet.getValue(deletingImage + "OnScreen") - 1
            );
          }
          break;
        default:
          console.log("default", event);
          break;
      }*/
  ggbApplet.registerClientListener(snapback);
}

// ggbApplet.registerObjectUpdateListener("MovableCow", keyboardSnapback);
// ggbApplet.registerObjectUpdateListener("MovableChicken", keyboardSnapback);
// ggbApplet.registerObjectUpdateListener("MovableSheep", keyboardSnapback);
// ggbApplet.registerObjectUpdateListener("MovablePig", keyboardSnapback);
