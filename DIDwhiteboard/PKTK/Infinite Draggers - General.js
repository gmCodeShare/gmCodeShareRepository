/*

This file allows anyone to create infinite draggers quickly.  In order to use this, you need:
-two copies of each image named by description, one named Perma_____ and one named Movable_____ (eg PermaCircle, MovableCircle)
-to place both images where you want them to be in the starting position and set the Perma_____ image to not selectable
-to name the corner1 and corner2 points of the Perma image _____StartBL and _____StartBR (eg CircleStartBL and CircleStartBR).  
    These MUST be free points that the image is defined on, NOT Corner(image,1) and Corner(image,2).
-to name the corner1 and corner2 points of the Movable image _____EndBL and _____EndBR (eg CircleEndBL and CircleEndBR).  
    These MUST be free points that the image is defined on, NOT Corner(image,1) and Corner(image,2).
-a variable called active_____ that describes the number of new images on the screen (eg activeCircle=1)

*/

/*Things to do:
    - Make it so that we don't need to slice off the number part of points (what if we had a hundred images?) 
        This can be accomplished by adding point to the end of the object name found in line 45ish, or maybe there's another, better way?
    - Make it keyboard operable.  This is a free-play infinite dragger, so we do not need (or really want?) point-on-path. 
        Should it be a rubber stamp method where they move an object and press space to make an impression and send the stamper back to the inkpad?
        Should it be a more physical experience where they move the movable object and tab to the next thing to leave a version of that object where it was?
        Some third amazing option?
*/
function ggbOnInit() {
    //client listener function that makes a new image and sends the movable image back

    //dragEnd functionality
    function snapback(event) {
        if (event.type = "select"&&event.target!="canvas") { 
            var selected = event.target;
            console.log("Here is what we selected:", selected);
        }
        //two cases - create a new image or delete when over drag bin
        console.log(event);
        console.log("This is the chosen one:", selected);
        switch (true) {
            //making a new image - student dragged movable image
            case (event.type == "dragEnd") && selected.includes("Movable"):
                //actions based on dragged image
                let imageName = selected.slice(7);
                //     console.log(imageName);
                let objectNumber = ggbApplet.getValue("active" + imageName);
                //  console.log(objectNumber);
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
            case event.type == "dragEnd" && !selected.includes("Movable") && !selected.includes("bin") && !selected.includes("button"):
                const findNum = /\d+/g;
                let imageNumber = selected.match(findNum);
                let deletingImage = "";
                if (imageNumber >= 10) {
                    deletingImage = selected.slice(0, -2);
                    var yCoord = ggbApplet.getYcoord(deletingImage + "Point" + imageNumber);
                } else {
                    deletingImage = selected.slice(0, -1);
                    var yCoord = ggbApplet.getYcoord(deletingImage + "Point" + imageNumber);
                }
                if (yCoord < -8) {
                    ggbApplet.deleteObject(selected);
                    ggbApplet.setValue(
                        deletingImage + "OnScreen",
                        ggbApplet.getValue(deletingImage + "OnScreen") - 1
                    );
                }
                break;
            default:
              //  console.log("default", event);
                break;
        }
    }
    //keyboard functionality
    function keyboardSnapback(keyedEvent) {
        if (keyedEvent.type = "select" && typeof keyedEvent.target!="object") { 
            var selected = keyedEvent.target;
            console.log("Here is what we selected:", selected);
        }
        //two cases - create a new image or delete when over drag bin
        console.log(keyedEvent);
        console.log("This is the chosen one:", typeof selected);
        switch (true) {
            //making a new image - student dragged movable image
            case (keyedEvent.key=="tab" && selected.includes("Movable")):
                //actions based on dragged image
                let imageName = selected.slice(7);
                //     console.log(imageName);
                let objectNumber = ggbApplet.getValue("active" + imageName);
                //  console.log(objectNumber);
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
            case keyedEvent.type == "dragEnd" && !selected.includes("Movable") && !selected.includes("bin") && !selected.includes("button"):
                const findNum = /\d+/g;
                let imageNumber = selected.match(findNum);
                let deletingImage = "";
                if (imageNumber >= 10) {
                    deletingImage = selected.slice(0, -2);
                    var yCoord = ggbApplet.getYcoord(deletingImage + "Point" + imageNumber);
                } else {
                    deletingImage = selected.slice(0, -1);
                    var yCoord = ggbApplet.getYcoord(deletingImage + "Point" + imageNumber);
                }
                if (yCoord < -8) {
                    ggbApplet.deleteObject(selected);
                    ggbApplet.setValue(
                        deletingImage + "OnScreen",
                        ggbApplet.getValue(deletingImage + "OnScreen") - 1
                    );
                }
                break;
            default:
                break;
        }
    }
  //  ggbApplet.registerClientListener(snapback);
    document.addEventListener('keyup', keyboardSnapback);
}

