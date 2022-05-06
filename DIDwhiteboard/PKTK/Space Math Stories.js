function ggbOnInit() {
  let xmlString = ggbApplet.getXML();

  function reset() {
    ggbApplet.setXML(xmlString);
  }

  function snapback(event) {
    switch (true) {
      case event.type == "dragEnd" && event.target.includes("Movable"):
        //This function allows any "Moveable" object to be copied in the scene.
        console.log(event.target);
        switch (event.target) {
          case "MovableRocket":
            let rocketNumber = ggbApplet.getValue("activeRocket");
            if (!ggbApplet.getValue("IsInRegion(RocketEndBL,bin)")) {
              //This removes any rocket that is placed with BL point in bin region.
              ggbApplet.evalCommand(
                "Rocket" + rocketNumber + "=CopyFreeObject(MovableRocket)"
              );
              //This allows the moveable rocket to be copied.
              ggbApplet.evalCommand(
                "Rocket" +
                  rocketNumber +
                  "Point=Corner(Rocket" +
                  rocketNumber +
                  ",1)"
              );
              //This assigns the copied rocket a number based on its corner 1 point.
              ggbApplet.setVisible("Rocket" + rocketNumber + "Point", false);
              //This makes the copied rocket visible.
              ggbApplet.setValue(
                "activeRocket",
                ggbApplet.getValue("activeRocket") + 1
              );
              //This turns the copied rocket to an absolute object in the scene.
            }
            ggbApplet.setCoords(
              "RocketEndBL",
              ggbApplet.getXcoord("RocketStartBL"),
              ggbApplet.getYcoord("RocketStartBL")
            );
            ggbApplet.setCoords(
              "RocketEndBR",
              ggbApplet.getXcoord("RocketStartBR"),
              ggbApplet.getYcoord("RocketStartBR")
            );
            //This sets the coordinates of the new rocket based on rocket start and end points.
            break;
          case "MovableAstronaut":
            let astronautNumber = ggbApplet.getValue("activeAstronaut");
            if (!ggbApplet.getValue("IsInRegion(AstronautEndBL,bin)")) {
              ggbApplet.evalCommand(
                "Astronaut" +
                  astronautNumber +
                  "=CopyFreeObject(MovableAstronaut)"
              );
              ggbApplet.evalCommand(
                "Astronaut" +
                  astronautNumber +
                  "Point=Corner(Astronaut" +
                  astronautNumber +
                  ",1)"
              );
              ggbApplet.setVisible(
                "Astronaut" + astronautNumber + "Point",
                false
              );
              ggbApplet.setValue(
                "activeAstronaut",
                ggbApplet.getValue("activeAstronaut") + 1
              );
            }
            ggbApplet.setCoords(
              "AstronautEndBL",
              ggbApplet.getXcoord("AstronautStartBL"),
              ggbApplet.getYcoord("AstronautStartBL")
            );
            ggbApplet.setCoords(
              "AstronautEndBR",
              ggbApplet.getXcoord("AstronautStartBR"),
              ggbApplet.getYcoord("AstronautStartBR")
            );

            break;
        }
        break;
      case !event.target.includes("Movable") &&
        ggbApplet.getXcoord(event.target + "Point") < 0 &&
        !event.target.includes("button") &&
        !event.target.includes("bin"):
        ggbApplet.deleteObject(event.target);
        //This deletes the moveable object(s) when placed over original object, placed in bin or when button is selected.
        switch (true) {
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
          //This sets the rocket/astronaut value back.
        }
        break;
    }
  }

  ggbApplet.registerClientListener(snapback);
  ggbApplet.registerObjectClickListener("resetButton", reset);
}
