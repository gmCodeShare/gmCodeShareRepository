const { ggb1, select1, buttonGroup1 } = components;
ggb1.instance.registerObjectUpdateListener("galBool", start);
ggb1.instance.registerObjectUpdateListener("quartBool", start);
ggb1.instance.registerObjectUpdateListener("pintBool", start);
ggb1.instance.registerObjectUpdateListener("conveyorTime", pour);
ggb1.instance.registerObjectUpdateListener("vesselH2OHeight", moveOn);

//global variables
var tolerance = ggb1.instance.getValue("tolerance");
var vessels = ggb1.instance.getValue("vessels");
var state;
ggb1.instance.evalCommand("Text(galH2OHeight,(0,0),true)");
buttonGroup1.updateSingleButton({ disabled: true }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);

select1.on("change", ({ values }) => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  reset();
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  if (select1.data.selected[0] == "0") {
    state = 1;
    ggb1.instance.setValue("galBool", 1);
    ggb1.instance.setValue("quartBool", 0);
    ggb1.instance.setValue("pintBool", 0);
    ggb1.instance.setValue("showGal", true);
    ggb1.instance.setValue("showQuart", false);
    ggb1.instance.setValue("showPint", false);
  }
  if (select1.data.selected[0] == "1") {
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    state = 2;
    ggb1.instance.setValue("galBool", 0);
    ggb1.instance.setValue("quartBool", 1);
    ggb1.instance.setValue("pintBool", 0);
    ggb1.instance.setValue("showGal", false);
    ggb1.instance.setValue("showQuart", true);
    ggb1.instance.setValue("showPint", false);
  }
  if (select1.data.selected[0] == "2") {
    state = 3;
    ggb1.instance.setValue("galBool", 0);
    ggb1.instance.setValue("quartBool", 0);
    ggb1.instance.setValue("pintBool", 1);
    ggb1.instance.setValue("showGal", false);
    ggb1.instance.setValue("showQuart", false);
    ggb1.instance.setValue("showPint", true);
  }
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  reset();
  select1.unselectAll();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

//start the conveyor belt
function start() {
  switch (state) {
    case 1:
      ggb1.instance.setVisible("quart1", true);
      ggb1.instance.setVisible("quart2", true);
      ggb1.instance.setVisible("quart3", true);
      ggb1.instance.setVisible("quart4", true);
      ggb1.instance.setVisible("quart5", true);
      ggb1.instance.setVisible("quart6", true);
      ggb1.instance.setValue("splash", false);
      ggb1.instance.setAnimating("galH2OHeight", false);
      ggb1.instance.setAnimating("vesselH2OHeight", false);
      ggb1.instance.setColor("vesselH2OTop", 255, 255, 255);
      ggb1.instance.setColor("galH2OTop", 0, 127, 175);
      ggb1.instance.setValue("conveyorTime", -20);
      ggb1.instance.setAnimating("conveyorTime", true);
      ggb1.instance.startAnimation();
      break;
    case 2:
      ggb1.instance.setVisible("pint1", true);
      ggb1.instance.setVisible("pint2", true);
      ggb1.instance.setVisible("pint3", true);
      ggb1.instance.setVisible("pint4", true);
      ggb1.instance.setVisible("pint5", true);
      ggb1.instance.setVisible("pint6", true);
      ggb1.instance.setValue("splash", false);
      ggb1.instance.setAnimating("quartH2OHeight", false);
      ggb1.instance.setAnimating("vesselH2OHeight", false);
      ggb1.instance.setColor("vesselH2OTop", 255, 255, 255);
      ggb1.instance.setColor("quartH2OTop", 0, 127, 175);
      ggb1.instance.setValue("conveyorTime", -20);
      ggb1.instance.setAnimating("conveyorTime", true);
      ggb1.instance.startAnimation();
      break;
    case 3:
      ggb1.instance.setVisible("cup1", true);
      ggb1.instance.setVisible("cup2", true);
      ggb1.instance.setVisible("cup3", true);
      ggb1.instance.setVisible("cup4", true);
      ggb1.instance.setVisible("cup5", true);
      ggb1.instance.setVisible("cup6", true);
      ggb1.instance.setValue("splash", false);
      ggb1.instance.setAnimating("pintH2OHeight", false);
      ggb1.instance.setAnimating("vesselH2OHeight", false);
      ggb1.instance.setColor("vesselH2OTop", 255, 255, 255);
      ggb1.instance.setColor("pintH2OTop", 0, 127, 175);
      ggb1.instance.setValue("conveyorTime", -20);
      ggb1.instance.setAnimating("conveyorTime", true);
      ggb1.instance.startAnimation();
      break;
  }
}

//when the cup is under the machine, pours the water
function pour() {
  console.log("pour");
  switch (true) {
    case ggb1.instance.getValue("galBool") == 1:
      //if vessel is under machine
      if (
        ggb1.instance.getValue("IsInRegion(M,GalRegion)") == false &&
        ggb1.instance.getValue("IsInRegion(P,GalRegion)") == false &&
        ggb1.instance.getValue("IsInRegion(S,GalRegion)") == false &&
        ggb1.instance.getValue("IsInRegion(S,GalRegion)") == false
      ) {
        ggb1.instance.setValue("IsItFullYet", false);
      }
      if (
        ggb1.instance.getValue("IsInRegion(M,GalRegion)") == true &&
        ggb1.instance.getValue("IsItFullYet") == false
      ) {
        ggb1.instance.setVisible("quart1", false);
        ggb1.instance.setVisible("quartFilling", true);
        ggb1.instance.setCoords(
          "G_1",
          ggb1.instance.getXcoord("J"),
          ggb1.instance.getYcoord("J")
        );
        ggb1.instance.setCoords(
          "H_1",
          ggb1.instance.getXcoord("K"),
          ggb1.instance.getYcoord("K")
        );
        //updates minimum amount of water in machine and text
        vessels = 1;
        ggb1.instance.setValue("vessels", vessels);
        ggb1.instance.setValue("minGalHeight", 5.325);
        //pauses conveyor belt
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("conveyorTime", false);
        //makes water pour visible
        ggb1.instance.setValue("splash", true);
        //increases water level in cup
        ggb1.instance.setColor("vesselH2OTop", 0, 127, 175);
        ggb1.instance.setAnimating("vesselH2OHeight", true);
        //decreases water level in machine
        ggb1.instance.setAnimating("galH2OHeight", true);
        ggb1.instance.startAnimation();
      }
      if (
        ggb1.instance.getValue("IsInRegion(P,GalRegion)") == true &&
        ggb1.instance.getValue("IsItFullYet") == false
      ) {
        ggb1.instance.setVisible("quart2", false);
        ggb1.instance.setVisible("quartFilling", true);
        ggb1.instance.setCoords(
          "I_1",
          ggb1.instance.getXcoord("J"),
          ggb1.instance.getYcoord("J")
        );
        ggb1.instance.setCoords(
          "J_1",
          ggb1.instance.getXcoord("K"),
          ggb1.instance.getYcoord("K")
        );
        //updates minimum amount of water in machine and text
        vessels = 2;
        ggb1.instance.setValue("vessels", vessels);
        ggb1.instance.setValue("minGalHeight", 3.55);
        //pauses conveyor belt
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("conveyorTime", false);
        //makes water pour visible
        ggb1.instance.setValue("splash", true);
        //increases water level in cup
        ggb1.instance.setColor("vesselH2OTop", 0, 127, 175);
        ggb1.instance.setAnimating("vesselH2OHeight", true);
        //decreases water level in machine
        ggb1.instance.setAnimating("galH2OHeight", true);
        ggb1.instance.startAnimation();
      }
      if (
        ggb1.instance.getValue("IsInRegion(S,GalRegion)") == true &&
        ggb1.instance.getValue("IsItFullYet") == false
      ) {
        ggb1.instance.setVisible("quart3", false);
        ggb1.instance.setVisible("quartFilling", true);
        ggb1.instance.setCoords(
          "K_1",
          ggb1.instance.getXcoord("J"),
          ggb1.instance.getYcoord("J")
        );
        ggb1.instance.setCoords(
          "L_1",
          ggb1.instance.getXcoord("K"),
          ggb1.instance.getYcoord("K")
        );
        //updates minimum amount of water in machine and text
        vessels = 3;
        ggb1.instance.setValue("vessels", vessels);
        ggb1.instance.setValue("minGalHeight", 1.775);
        //pauses conveyor belt
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("conveyorTime", false);
        //makes water pour visible
        ggb1.instance.setValue("splash", true);
        //increases water level in vessel
        ggb1.instance.setColor("vesselH2OTop", 0, 127, 175);
        ggb1.instance.setAnimating("vesselH2OHeight", true);
        //decreases water level in machine
        ggb1.instance.setAnimating("galH2OHeight", true);
        ggb1.instance.startAnimation();
      }
      if (
        ggb1.instance.getValue("IsInRegion(V,GalRegion)") == true &&
        ggb1.instance.getValue("IsItFullYet") == false
      ) {
        ggb1.instance.setVisible("quart4", false);
        ggb1.instance.setVisible("quartFilling", true);
        ggb1.instance.setCoords(
          "M_1",
          ggb1.instance.getXcoord("J"),
          ggb1.instance.getYcoord("J")
        );
        ggb1.instance.setCoords(
          "N_1",
          ggb1.instance.getXcoord("K"),
          ggb1.instance.getYcoord("K")
        );
        //updates minimum amount of water in machine and text
        vessels = 4;
        ggb1.instance.setValue("vessels", vessels);
        ggb1.instance.setValue("minGalHeight", 0);
        //pauses conveyor belt
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("conveyorTime", false);
        //makes water pour visible
        ggb1.instance.setValue("splash", true);
        //increases water level in cup
        ggb1.instance.setColor("vesselH2OTop", 0, 127, 175);
        ggb1.instance.setAnimating("vesselH2OHeight", true);
        //decreases water level in machine
        ggb1.instance.setAnimating("galH2OHeight", true);
        ggb1.instance.startAnimation();
      }
      break;
    case ggb1.instance.getValue("quartBool") == 1:
      //if cup is under machine
      if (
        ggb1.instance.getValue("IsInRegion(M,QuartRegion)") == false &&
        ggb1.instance.getValue("IsInRegion(P,QuartRegion)") == false
      ) {
        ggb1.instance.setValue("IsItFullYet", false);
      }
      if (
        ggb1.instance.getValue("IsInRegion(M,QuartRegion)") == true &&
        ggb1.instance.getValue("IsItFullYet") == false
      ) {
        ggb1.instance.setVisible("pint1", false);
        ggb1.instance.setVisible("pintFilling", true);
        ggb1.instance.setCoords(
          "O_1",
          ggb1.instance.getXcoord("H_2"),
          ggb1.instance.getYcoord("H_2")
        );
        ggb1.instance.setCoords(
          "P_1",
          ggb1.instance.getXcoord("I_2"),
          ggb1.instance.getYcoord("I_2")
        );
        //updates minimum amount of water in machine and text
        vessels = 1;
        ggb1.instance.setValue("vessels", vessels);
        ggb1.instance.setValue("minQuartHeight", 2.125);
        //pauses conveyor belt
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("conveyorTime", false);
        //makes water pour visible
        ggb1.instance.setValue("splash", true);
        //increases water level in cup
        ggb1.instance.setColor("vesselH2OTop", 0, 127, 175);
        ggb1.instance.setAnimating("vesselH2OHeight", true);
        //decreases water level in machine
        ggb1.instance.setAnimating("quartH2OHeight", true);
        ggb1.instance.startAnimation();
      }
      if (
        ggb1.instance.getValue("IsInRegion(P,QuartRegion)") == true &&
        ggb1.instance.getValue("IsItFullYet") == false
      ) {
        ggb1.instance.setVisible("pint2", false);
        ggb1.instance.setVisible("pintFilling", true);
        ggb1.instance.setCoords(
          "Q_1",
          ggb1.instance.getXcoord("H_2"),
          ggb1.instance.getYcoord("H_2")
        );
        ggb1.instance.setCoords(
          "R_1",
          ggb1.instance.getXcoord("I_2"),
          ggb1.instance.getYcoord("I_2")
        );
        //updates minimum amount of water in machine and text
        vessels = 2;
        ggb1.instance.setValue("vessels", vessels);
        ggb1.instance.setValue("minQuartHeight", 0);
        //pauses conveyor belt
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("conveyorTime", false);
        //makes water pour visible
        ggb1.instance.setValue("splash", true);
        //increases water level in cup
        ggb1.instance.setColor("vesselH2OTop", 0, 127, 175);
        ggb1.instance.setAnimating("vesselH2OHeight", true);
        //decreases water level in machine
        ggb1.instance.setAnimating("quartH2OHeight", true);
        ggb1.instance.startAnimation();
      }
      break;
    case ggb1.instance.getValue("pintBool") == 1:
      //if cup is under machine
      if (
        ggb1.instance.getValue("IsInRegion(M,PintRegion)") == false &&
        ggb1.instance.getValue("IsInRegion(P,PintRegion)") == false
      ) {
        ggb1.instance.setValue("IsItFullYet", false);
      }
      if (
        ggb1.instance.getValue("IsInRegion(M,PintRegion)") == true &&
        ggb1.instance.getValue("IsItFullYet") == false
      ) {
        ggb1.instance.setVisible("cup1", false);
        ggb1.instance.setVisible("cupFilling", true);
        ggb1.instance.setCoords(
          "G_1",
          ggb1.instance.getXcoord("J"),
          ggb1.instance.getYcoord("J")
        );
        ggb1.instance.setCoords(
          "H_1",
          ggb1.instance.getXcoord("K"),
          ggb1.instance.getYcoord("K")
        );
        //updates minimum amount of water in machine and text
        vessels = 1;
        ggb1.instance.setValue("vessels", vessels);
        ggb1.instance.setValue("minPintHeight", 1.75);
        //pauses conveyor belt
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("conveyorTime", false);
        //makes water pour visible
        ggb1.instance.setValue("splash", true);
        //increases water level in cup
        ggb1.instance.setColor("vesselH2OTop", 0, 127, 175);
        ggb1.instance.setAnimating("vesselH2OHeight", true);
        //decreases water level in machine
        ggb1.instance.setAnimating("pintH2OHeight", true);
        ggb1.instance.startAnimation();
      }
      if (
        ggb1.instance.getValue("IsInRegion(P,PintRegion)") == true &&
        ggb1.instance.getValue("IsItFullYet") == false
      ) {
        ggb1.instance.setVisible("cup2", false);
        ggb1.instance.setVisible("cupFilling", true);
        ggb1.instance.setCoords(
          "I_1",
          ggb1.instance.getXcoord("J"),
          ggb1.instance.getYcoord("J")
        );
        ggb1.instance.setCoords(
          "J_1",
          ggb1.instance.getXcoord("K"),
          ggb1.instance.getYcoord("K")
        );
        //updates minimum amount of water in machine and text
        vessels = 2;
        ggb1.instance.setValue("vessels", vessels);
        ggb1.instance.setValue("minPintHeight", 0);
        //pauses conveyor belt
        ggb1.instance.stopAnimation();
        ggb1.instance.setAnimating("conveyorTime", false);
        //makes water pour visible
        ggb1.instance.setValue("splash", true);
        //increases water level in cup
        ggb1.instance.setColor("vesselH2OTop", 0, 127, 175);
        ggb1.instance.setAnimating("vesselH2OHeight", true);
        //decreases water level in machine
        ggb1.instance.setAnimating("pintH2OHeight", true);
        ggb1.instance.startAnimation();
      }
      break;
  }
}

function moveOn() {
  console.log("move on");
  if (
    Math.abs(
      ggb1.instance.getValue("vesselH2OHeight") -
        ggb1.instance.getValue("vesselHeight")
    ) < 0.2
  ) {
    if (ggb1.instance.getValue("galBool") == 1) {
      if (ggb1.instance.getValue("IsInRegion(M,GalRegion)") == true) {
        ggb1.instance.setValue("IsItFullYet", true);
        //stop water pour
        ggb1.instance.setValue("splash", false);
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("quartFilling", false);
        ggb1.instance.setVisible("quartFull1", true);
        //stop pouring water
        ggb1.instance.setAnimating("vesselH2OHeight", false);
        ggb1.instance.setAnimating("galH2OHeight", false);
        ggb1.instance.setAnimating("quartH2OHeight", false);
        ggb1.instance.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggb1.instance.setAnimating("conveyorTime", true);
        ggb1.instance.startAnimation();
        ggb1.instance.setValue("vesselH2OHeight", 0);
      }
      if (ggb1.instance.getValue("IsInRegion(P,GalRegion)") == true) {
        ggb1.instance.setValue("IsItFullYet", true);
        //stop water pour
        ggb1.instance.setValue("splash", false);
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("quartFilling", false);
        ggb1.instance.setVisible("quartFull2", true);
        //stop pouring water
        ggb1.instance.setAnimating("vesselH2OHeight", false);
        ggb1.instance.setAnimating("galH2OHeight", false);
        ggb1.instance.setAnimating("quartH2OHeight", false);
        ggb1.instance.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggb1.instance.setAnimating("conveyorTime", true);
        ggb1.instance.startAnimation();
      }
      if (ggb1.instance.getValue("IsInRegion(S,GalRegion)") == true) {
        ggb1.instance.setValue("IsItFullYet", true);
        //stop water pour
        ggb1.instance.setValue("splash", false);
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("quartFilling", false);
        ggb1.instance.setVisible("quartFull3", true);
        //stop pouring water
        ggb1.instance.setAnimating("vesselH2OHeight", false);
        ggb1.instance.setAnimating("galH2OHeight", false);
        ggb1.instance.setAnimating("quartH2OHeight", false);
        ggb1.instance.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggb1.instance.setAnimating("conveyorTime", true);
        ggb1.instance.startAnimation();
      }
      if (ggb1.instance.getValue("IsInRegion(V,GalRegion)") == true) {
        ggb1.instance.setValue("IsItFullYet", true);
        //stop water pour
        ggb1.instance.setValue("splash", false);
        ggb1.instance.stopAnimation();
        ggb1.instance.setValue("vesselH2OHeight", 0);
        ggb1.instance.setVisible("quartFilling", false);
        ggb1.instance.setVisible("quartFull4", true);
        //stop pouring water
        ggb1.instance.setAnimating("vesselH2OHeight", false);
        ggb1.instance.setAnimating("galH2OHeight", false);
        ggb1.instance.setAnimating("quartH2OHeight", false);
        ggb1.instance.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggb1.instance.setAnimating("conveyorTime", true);
        ggb1.instance.startAnimation();
      }
    }
    if (ggb1.instance.getValue("quartBool") == 1) {
      if (ggb1.instance.getValue("IsInRegion(M,QuartRegion)") == true) {
        ggb1.instance.setValue("IsItFullYet", true);
        //stop water pour
        ggb1.instance.setValue("splash", false);
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("pintFilling", false);
        ggb1.instance.setVisible("pintFull1", true);
        //stop pouring water
        ggb1.instance.setAnimating("vesselH2OHeight", false);
        ggb1.instance.setAnimating("galH2OHeight", false);
        ggb1.instance.setAnimating("quartH2OHeight", false);
        ggb1.instance.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggb1.instance.setAnimating("conveyorTime", true);
        ggb1.instance.startAnimation();
        ggb1.instance.setValue("vesselH2OHeight", 0);
      }
      if (ggb1.instance.getValue("IsInRegion(P,QuartRegion)") == true) {
        ggb1.instance.setValue("IsItFullYet", true);
        //stop water pour
        ggb1.instance.setValue("splash", false);
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("pintFilling", false);
        ggb1.instance.setCoords(
          "Q_1",
          ggb1.instance.getXcoord("H_2"),
          ggb1.instance.getYcoord("H_2")
        );
        ggb1.instance.setCoords(
          "R_1",
          ggb1.instance.getXcoord("I_2"),
          ggb1.instance.getYcoord("I_2")
        );
        ggb1.instance.setVisible("pintFull2", true);
        //stop pouring water
        ggb1.instance.setAnimating("vesselH2OHeight", false);
        ggb1.instance.setAnimating("galH2OHeight", false);
        ggb1.instance.setAnimating("quartH2OHeight", false);
        ggb1.instance.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggb1.instance.setAnimating("conveyorTime", true);
        ggb1.instance.startAnimation();
      }
    }
    if (ggb1.instance.getValue("pintBool") == 1) {
      if (ggb1.instance.getValue("IsInRegion(M,PintRegion)") == true) {
        ggb1.instance.setValue("IsItFullYet", true);
        //stop water pour
        ggb1.instance.setValue("splash", false);
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("cupFilling", false);
        ggb1.instance.setVisible("cupFull1", true);
        //stop pouring water
        ggb1.instance.setAnimating("vesselH2OHeight", false);
        ggb1.instance.setAnimating("galH2OHeight", false);
        ggb1.instance.setAnimating("quartH2OHeight", false);
        ggb1.instance.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggb1.instance.setAnimating("conveyorTime", true);
        ggb1.instance.startAnimation();
        ggb1.instance.setValue("vesselH2OHeight", 0);
      }
      if (ggb1.instance.getValue("IsInRegion(P,PintRegion)") == true) {
        ggb1.instance.setValue("IsItFullYet", true);
        //stop water pour
        ggb1.instance.setValue("splash", false);
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("cupFilling", false);
        ggb1.instance.setVisible("cupFull2", true);
        //stop pouring water
        ggb1.instance.setAnimating("vesselH2OHeight", false);
        ggb1.instance.setAnimating("galH2OHeight", false);
        ggb1.instance.setAnimating("quartH2OHeight", false);
        ggb1.instance.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggb1.instance.setAnimating("conveyorTime", true);
        ggb1.instance.startAnimation();
      }
    }
    ggb1.instance.setValue("vesselH2OHeight", 0);
  }
  //empty the machine
  if (
    ggb1.instance.getValue("galH2OHeight") < 0.5 &&
    ggb1.instance.getValue("IsItFullYet") == true
  ) {
    ggb1.instance.setCoords(
      "N_1",
      ggb1.instance.getXcoord("K"),
      ggb1.instance.getYcoord("K")
    );
    ggb1.instance.setCoords(
      "M_1",
      ggb1.instance.getXcoord("J"),
      ggb1.instance.getYcoord("J")
    );
    console.log(
      "M_1: (" +
        ggb1.instance.getXcoord("M_1") +
        ", " +
        ggb1.instance.getYcoord("M_1") +
        ")"
    );
    console.log(
      "J: (" +
        ggb1.instance.getXcoord("J") +
        ", " +
        ggb1.instance.getYcoord("J") +
        ")"
    );
    ggb1.instance.setColor("galH2OTop", 255, 255, 255);
    ggb1.instance.setColor("galH2OSides", 255, 255, 255);
    ggb1.instance.setValue("splash", false);
    ggb1.instance.stopAnimation();
  }
  //empty the machine
  if (
    ggb1.instance.getValue("quartH2OHeight") < 0.5 &&
    ggb1.instance.getValue("IsItFullYet") == true
  ) {
    ggb1.instance.setCoords(
      "Q_1",
      ggb1.instance.getXcoord("H_2"),
      ggb1.instance.getYcoord("H_2")
    );
    ggb1.instance.setCoords(
      "R_1",
      ggb1.instance.getXcoord("I_2"),
      ggb1.instance.getYcoord("I_2")
    );
    console.log("coords moved");
    ggb1.instance.setColor("quartH2OTop", 255, 255, 255);
    ggb1.instance.setColor("quartH2OSides", 255, 255, 255);
    ggb1.instance.setValue("splash", false);
    ggb1.instance.stopAnimation();
  }
  //empty the machine
  if (
    ggb1.instance.getValue("pintH2OHeight") < 0.5 &&
    ggb1.instance.getValue("IsItFullYet") == true
  ) {
    ggb1.instance.setCoords(
      "U_1",
      ggb1.instance.getXcoord("F_2"),
      ggb1.instance.getYcoord("F_2")
    );
    ggb1.instance.setCoords(
      "V_1",
      ggb1.instance.getXcoord("G_2"),
      ggb1.instance.getYcoord("G_2")
    );
    console.log("coords moved");
    ggb1.instance.setColor("pintH2OTop", 255, 255, 255);
    ggb1.instance.setColor("pintH2OSides", 255, 255, 255);
    ggb1.instance.setValue("splash", false);
    ggb1.instance.stopAnimation();
  }
}
function reset() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating(false);
  ggb1.instance.setValue("vesselH2OHeight", 0);
  ggb1.instance.setValue("conveyorTime", -20);
  ggb1.instance.setValue("galH2OHeight", 7.1);
  ggb1.instance.setValue("quartH2OHeight", 4);
  ggb1.instance.setValue("pintH2OHeight", 3.5);

  ggb1.instance.setValue("showGal", false);
  ggb1.instance.setValue("showQuart", false);
  ggb1.instance.setValue("showPint", false);
  ggb1.instance.setValue("splash", false);
  ggb1.instance.setColor("galH2OTop", 0, 127, 175);
  ggb1.instance.setColor("quartH2OTop", 0, 127, 175);
  ggb1.instance.setColor("pintH2OTop", 0, 127, 175);
  ggb1.instance.setColor("galH2OSides", 0, 127, 175);
  ggb1.instance.setColor("quartH2OSides", 0, 127, 175);
  ggb1.instance.setColor("pintH2OSides", 0, 127, 175);

  for (let i = 1, N = 7; i < N; i++) {
    ggb1.instance.setVisible("quart" + i, false);
    ggb1.instance.setVisible("pint" + i, false);
    ggb1.instance.setVisible("cup" + i, false);
  }

  for (let i = 1, N = 3; i < N; i++) {
    ggb1.instance.setVisible("quartFull" + i, false);
    ggb1.instance.setVisible("pintFull" + i, false);
    ggb1.instance.setVisible("cupFull" + i, false);
  }

  ggb1.instance.setVisible("quartFull3", false);
  ggb1.instance.setVisible("quartFull4", false);
  ggb1.instance.setVisible("cupFilling", false);
  ggb1.instance.setVisible("pintFilling", false);
  ggb1.instance.setVisible("pintFilling", false);
  ggb1.instance.setVisible("pintFilling", false);
  ggb1.instance.setVisible("pintFilling", false);
  ggb1.instance.setVisible("pintFilling", false);
  ggb1.instance.setVisible("pintFilling", false);
  ggb1.instance.setVisible("pintFilling", false);
  ggb1.instance.setVisible("quartFilling", false);
}
