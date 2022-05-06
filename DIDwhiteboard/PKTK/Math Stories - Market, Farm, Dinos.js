function ggbOnInit() {
  //client listener function that makes a new image and sends the movable image back
  function snapback(event) {
    //two cases - create a new image or delete when over drag bin
    switch (true) {
      //making a new image - student dragged movable image
      case event.type == "dragEnd" && event.target.includes("Movable"):
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
    }
  }
  ggbApplet.registerClientListener(snapback);
}
