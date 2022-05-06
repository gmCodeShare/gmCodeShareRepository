function ggbOnInit() {
  ggbApplet.registerObjectUpdateListener("galBool", "start");
  ggbApplet.registerObjectUpdateListener("quartBool", "start");
  ggbApplet.registerObjectUpdateListener("pintBool", "start");
  ggbApplet.registerObjectUpdateListener("conveyorTime", "pour");
  ggbApplet.registerObjectUpdateListener("vesselH2OHeight", "moveOn");
  ggbApplet.registerObjectClickListener("button1", "startOver");
}

//global variables
var tolerance = ggbApplet.getValue("tolerance");
var vessels = ggbApplet.getValue("vessels");

//start the conveyor belt
function start() {
  var state = 0;
  if (ggbApplet.getValue("galBool") == 0 && ggbApplet.getValue("quartBool") == 0 && ggbApplet.getValue("pintBool") == 0) {
    state = 0;
  }
  if (ggbApplet.getValue("galBool") == 1 && ggbApplet.getValue("quartBool") == 0 && ggbApplet.getValue("pintBool") == 0) {
    state = 1;
  }
  if (ggbApplet.getValue("galBool") == 0 && ggbApplet.getValue("quartBool") == 1 && ggbApplet.getValue("pintBool") == 0) {
    state = 2;
  }
  if (ggbApplet.getValue("galBool") == 0 && ggbApplet.getValue("quartBool") == 0 && ggbApplet.getValue("pintBool") == 1) {
    state = 3;
  }
  switch (state) {
    case 0:
      ggbApplet.reset();
      break;
    case 1:
      ggbApplet.setVisible("quart1", true);
      ggbApplet.setVisible("quart2", true);
      ggbApplet.setVisible("quart3", true);
      ggbApplet.setVisible("quart4", true);
      ggbApplet.setValue("splash", false);
      ggbApplet.setAnimating("galH2OHeight", false);
      ggbApplet.setAnimating("vesselH2OHeight", false);
      ggbApplet.setColor("vesselH2OTop", 255, 255, 255);
      ggbApplet.setColor("galH2OTop", 0, 127, 175);
      ggbApplet.setValue("conveyorTime", -20);
      ggbApplet.setAnimating("conveyorTime", true);
      ggbApplet.startAnimation();
      break;
    case 2:
      ggbApplet.setVisible("pint1", true);
      ggbApplet.setVisible("pint2", true);
      ggbApplet.setValue("splash", false);
      ggbApplet.setAnimating("quartH2OHeight", false);
      ggbApplet.setAnimating("vesselH2OHeight", false);
      ggbApplet.setColor("vesselH2OTop", 255, 255, 255);
      ggbApplet.setColor("quartH2OTop", 0, 127, 175);
      ggbApplet.setValue("conveyorTime", -20);
      ggbApplet.setAnimating("conveyorTime", true);
      ggbApplet.startAnimation();
      break;
    case 3:
      ggbApplet.setVisible("cup1", true);
      ggbApplet.setVisible("cup2", true);
      ggbApplet.setValue("splash", false);
      ggbApplet.setAnimating("pintH2OHeight", false);
      ggbApplet.setAnimating("vesselH2OHeight", false);
      ggbApplet.setColor("vesselH2OTop", 255, 255, 255);
      ggbApplet.setColor("pintH2OTop", 0, 127, 175);
      ggbApplet.setValue("conveyorTime", -20);
      ggbApplet.setAnimating("conveyorTime", true);
      ggbApplet.startAnimation();
      break;
  }
}

//when the cup is under the machine, pours the water
function pour() {
  if (ggbApplet.getValue("galBool") == 1) {
    //if cup is under machine
    if (ggbApplet.getValue("IsInRegion(M,GalRegion)") == false && ggbApplet.getValue("IsInRegion(P,GalRegion)") == false && ggbApplet.getValue("IsInRegion(S,GalRegion)") == false && ggbApplet.getValue("IsInRegion(S,GalRegion)") == false) {
      ggbApplet.setValue("IsItFullYet", false);
    }
    if (ggbApplet.getValue("IsInRegion(M,GalRegion)") == true && ggbApplet.getValue("IsItFullYet") == false) {
      ggbApplet.setVisible("quart1", false);
      ggbApplet.setVisible("quartFilling", true);
      ggbApplet.setCoords("G_1", ggbApplet.getXcoord("J"), ggbApplet.getYcoord("J"));
      ggbApplet.setCoords("H_1", ggbApplet.getXcoord("K"), ggbApplet.getYcoord("K"));
      //updates minimum amount of water in machine and text
      vessels = 1;
      ggbApplet.setValue("vessels", vessels);
      ggbApplet.setValue("minGalHeight", 5.25);
      //pauses conveyor belt
      ggbApplet.stopAnimation();
      ggbApplet.setAnimating("conveyorTime", false);
      //makes water pour visible
      ggbApplet.setValue("splash", true);
      //increases water level in cup
      ggbApplet.setColor("vesselH2OTop", 0, 127, 175);
      ggbApplet.setAnimating("vesselH2OHeight", true);
      //decreases water level in machine
      ggbApplet.setAnimating("galH2OHeight", true);
      ggbApplet.startAnimation();
    }
    if (ggbApplet.getValue("IsInRegion(P,GalRegion)") == true && ggbApplet.getValue("IsItFullYet") == false) {
      ggbApplet.setVisible("quart2", false);
      ggbApplet.setVisible("quartFilling", true);
      ggbApplet.setCoords("I_1", ggbApplet.getXcoord("J"), ggbApplet.getYcoord("J"));
      ggbApplet.setCoords("J_1", ggbApplet.getXcoord("K"), ggbApplet.getYcoord("K"));
      //updates minimum amount of water in machine and text
      vessels = 2;
      ggbApplet.setValue("vessels", vessels);
      ggbApplet.setValue("minGalHeight", 3.5);
      //pauses conveyor belt
      ggbApplet.stopAnimation();
      ggbApplet.setAnimating("conveyorTime", false);
      //makes water pour visible
      ggbApplet.setValue("splash", true);
      //increases water level in cup
      ggbApplet.setColor("vesselH2OTop", 0, 127, 175);
      ggbApplet.setAnimating("vesselH2OHeight", true);
      //decreases water level in machine
      ggbApplet.setAnimating("galH2OHeight", true);
      ggbApplet.startAnimation();
    }
    if (ggbApplet.getValue("IsInRegion(S,GalRegion)") == true && ggbApplet.getValue("IsItFullYet") == false) {
      ggbApplet.setVisible("quart3", false);
      ggbApplet.setVisible("quartFilling", true);
      ggbApplet.setCoords("K_1", ggbApplet.getXcoord("J"), ggbApplet.getYcoord("J"));
      ggbApplet.setCoords("L_1", ggbApplet.getXcoord("K"), ggbApplet.getYcoord("K"));
      //updates minimum amount of water in machine and text
      vessels = 3;
      ggbApplet.setValue("vessels", vessels);
      ggbApplet.setValue("minGalHeight", 1.75);
      //pauses conveyor belt
      ggbApplet.stopAnimation();
      ggbApplet.setAnimating("conveyorTime", false);
      //makes water pour visible
      ggbApplet.setValue("splash", true);
      //increases water level in cup
      ggbApplet.setColor("vesselH2OTop", 0, 127, 175);
      ggbApplet.setAnimating("vesselH2OHeight", true);
      //decreases water level in machine
      ggbApplet.setAnimating("galH2OHeight", true);
      ggbApplet.startAnimation();
    }
    if (ggbApplet.getValue("IsInRegion(V,GalRegion)") == true && ggbApplet.getValue("IsItFullYet") == false) {
      ggbApplet.setVisible("quart4", false);
      ggbApplet.setVisible("quartFilling", true);
      ggbApplet.setCoords("M_1", ggbApplet.getXcoord("J"), ggbApplet.getYcoord("J"));
      ggbApplet.setCoords("N_1", ggbApplet.getXcoord("K"), ggbApplet.getYcoord("K"));
      //updates minimum amount of water in machine and text
      vessels = 4;
      ggbApplet.setValue("vessels", vessels);
      ggbApplet.setValue("minGalHeight", 0);
      //pauses conveyor belt
      ggbApplet.stopAnimation();
      ggbApplet.setAnimating("conveyorTime", false);
      //makes water pour visible
      ggbApplet.setValue("splash", true);
      //increases water level in cup
      ggbApplet.setColor("vesselH2OTop", 0, 127, 175);
      ggbApplet.setAnimating("vesselH2OHeight", true);
      //decreases water level in machine
      ggbApplet.setAnimating("galH2OHeight", true);
      ggbApplet.startAnimation();
    }
  }
  if (ggbApplet.getValue("quartBool") == 1) {
    //if cup is under machine
    if (ggbApplet.getValue("IsInRegion(M,QuartRegion)") == false && ggbApplet.getValue("IsInRegion(P,QuartRegion)") == false) {
      ggbApplet.setValue("IsItFullYet", false);
    }
    if (ggbApplet.getValue("IsInRegion(M,QuartRegion)") == true && ggbApplet.getValue("IsItFullYet") == false) {
      ggbApplet.setVisible("pint1", false);
      ggbApplet.setVisible("pintFilling", true);
      ggbApplet.setCoords("O_1", ggbApplet.getXcoord("H_2"), ggbApplet.getYcoord("H_2"));
      ggbApplet.setCoords("P_1", ggbApplet.getXcoord("I_2"), ggbApplet.getYcoord("I_2"));
      //updates minimum amount of water in machine and text
      vessels = 1;
      ggbApplet.setValue("vessels", vessels);
      ggbApplet.setValue("minQuartHeight", 2);
      //pauses conveyor belt
      ggbApplet.stopAnimation();
      ggbApplet.setAnimating("conveyorTime", false);
      //makes water pour visible
      ggbApplet.setValue("splash", true);
      //increases water level in cup
      ggbApplet.setColor("vesselH2OTop", 0, 127, 175);
      ggbApplet.setAnimating("vesselH2OHeight", true);
      //decreases water level in machine
      ggbApplet.setAnimating("quartH2OHeight", true);
      ggbApplet.startAnimation();
    }
    if (ggbApplet.getValue("IsInRegion(P,QuartRegion)") == true && ggbApplet.getValue("IsItFullYet") == false) {
      ggbApplet.setVisible("pint2", false);
      ggbApplet.setVisible("pintFilling", true);
      ggbApplet.setCoords("Q_1", ggbApplet.getXcoord("H_2"), ggbApplet.getYcoord("H_2"));
      ggbApplet.setCoords("R_1", ggbApplet.getXcoord("I_2"), ggbApplet.getYcoord("I_2"));
      //updates minimum amount of water in machine and text
      vessels = 2;
      ggbApplet.setValue("vessels", vessels);
      ggbApplet.setValue("minQuartHeight", 0);
      //pauses conveyor belt
      ggbApplet.stopAnimation();
      ggbApplet.setAnimating("conveyorTime", false);
      //makes water pour visible
      ggbApplet.setValue("splash", true);
      //increases water level in cup
      ggbApplet.setColor("vesselH2OTop", 0, 127, 175);
      ggbApplet.setAnimating("vesselH2OHeight", true);
      //decreases water level in machine
      ggbApplet.setAnimating("quartH2OHeight", true);
      ggbApplet.startAnimation();
    }
  }
  if (ggbApplet.getValue("pintBool") == 1) {
    //if cup is under machine
    if (ggbApplet.getValue("IsInRegion(M,PintRegion)") == false && ggbApplet.getValue("IsInRegion(P,PintRegion)") == false) {
      ggbApplet.setValue("IsItFullYet", false);
    }
    if (ggbApplet.getValue("IsInRegion(M,PintRegion)") == true && ggbApplet.getValue("IsItFullYet") == false) {
      ggbApplet.setVisible("cup1", false);
      ggbApplet.setVisible("cupFilling", true);
      ggbApplet.setCoords("G_1", ggbApplet.getXcoord("J"), ggbApplet.getYcoord("J"));
      ggbApplet.setCoords("H_1", ggbApplet.getXcoord("K"), ggbApplet.getYcoord("K"));
      //updates minimum amount of water in machine and text
      vessels = 1;
      ggbApplet.setValue("vessels", vessels);
      ggbApplet.setValue("minPintHeight", 1);
      //pauses conveyor belt
      ggbApplet.stopAnimation();
      ggbApplet.setAnimating("conveyorTime", false);
      //makes water pour visible
      ggbApplet.setValue("splash", true);
      //increases water level in cup
      ggbApplet.setColor("vesselH2OTop", 0, 127, 175);
      ggbApplet.setAnimating("vesselH2OHeight", true);
      //decreases water level in machine
      ggbApplet.setAnimating("pintH2OHeight", true);
      ggbApplet.startAnimation();
    }
    if (ggbApplet.getValue("IsInRegion(P,PintRegion)") == true && ggbApplet.getValue("IsItFullYet") == false) {
      ggbApplet.setVisible("cup2", false);
      ggbApplet.setVisible("cupFilling", true);
      ggbApplet.setCoords("I_1", ggbApplet.getXcoord("J"), ggbApplet.getYcoord("J"));
      ggbApplet.setCoords("J_1", ggbApplet.getXcoord("K"), ggbApplet.getYcoord("K"));
      //updates minimum amount of water in machine and text
      vessels = 2;
      ggbApplet.setValue("vessels", vessels);
      ggbApplet.setValue("minPintHeight", 0);
      //pauses conveyor belt
      ggbApplet.stopAnimation();
      ggbApplet.setAnimating("conveyorTime", false);
      //makes water pour visible
      ggbApplet.setValue("splash", true);
      //increases water level in cup
      ggbApplet.setColor("vesselH2OTop", 0, 127, 175);
      ggbApplet.setAnimating("vesselH2OHeight", true);
      //decreases water level in machine
      ggbApplet.setAnimating("pintH2OHeight", true);
      ggbApplet.startAnimation();
    }
  }
}

function moveOn() {
  if (Math.abs(ggbApplet.getValue("vesselH2OHeight") - ggbApplet.getValue("vesselHeight")) < 0.3) {
    if (ggbApplet.getValue("galBool") == 1) {
      if (ggbApplet.getValue("IsInRegion(M,GalRegion)") == true) {
        ggbApplet.setValue("IsItFullYet", true);
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        ggbApplet.setVisible("quartFilling", false);
        ggbApplet.setVisible("quartFull1", true);
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
        ggbApplet.setValue("vesselH2OHeight", 0);
      }
      if (ggbApplet.getValue("IsInRegion(P,GalRegion)") == true) {
        ggbApplet.setValue("IsItFullYet", true);
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        ggbApplet.setVisible("quartFilling", false);
        ggbApplet.setVisible("quartFull2", true);
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
      }
      if (ggbApplet.getValue("IsInRegion(S,GalRegion)") == true) {
        ggbApplet.setValue("IsItFullYet", true);
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        ggbApplet.setVisible("quartFilling", false);
        ggbApplet.setVisible("quartFull3", true);
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
      }
      if (ggbApplet.getValue("IsInRegion(V,GalRegion)") == true) {
        ggbApplet.setValue("IsItFullYet", true);
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        ggbApplet.setValue("vesselH2OHeight", 0);
        ggbApplet.setVisible("quartFilling", false);
        ggbApplet.setVisible("quartFull4", true);
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
      }
    }
    if (ggbApplet.getValue("quartBool") == 1) {
      if (ggbApplet.getValue("IsInRegion(M,QuartRegion)") == true) {
        ggbApplet.setValue("IsItFullYet", true);
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        ggbApplet.setVisible("pintFilling", false);
        ggbApplet.setVisible("pintFull1", true);
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
        ggbApplet.setValue("vesselH2OHeight", 0);
      }
      if (ggbApplet.getValue("IsInRegion(P,QuartRegion)") == true) {
        ggbApplet.setValue("IsItFullYet", true);
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        ggbApplet.setVisible("pintFilling", false);
        ggbApplet.setVisible("pintFull2", true);
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
      }
    }
    if (ggbApplet.getValue("pintBool") == 1) {
      if (ggbApplet.getValue("IsInRegion(M,PintRegion)") == true) {
        ggbApplet.setValue("IsItFullYet", true);
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        ggbApplet.setVisible("cupFilling", false);
        ggbApplet.setVisible("cupFull1", true);
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
        ggbApplet.setValue("vesselH2OHeight", 0);
      }
      if (ggbApplet.getValue("IsInRegion(P,PintRegion)") == true) {
        ggbApplet.setValue("IsItFullYet", true);
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        ggbApplet.setVisible("cupFilling", false);
        ggbApplet.setVisible("cupFull2", true);
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
      }
    }
    ggbApplet.setValue("vesselH2OHeight", 0);
  }
  //empty the machine
  if (ggbApplet.getValue("galH2OHeight") < 0.5 && ggbApplet.getValue("IsItFullYet") == true) {
    ggbApplet.setColor("galH2OTop", 255, 255, 255);
    ggbApplet.setColor("galH2OSides", 255, 255, 255);
    ggbApplet.setValue("splash", false);
    ggbApplet.stopAnimation();
    ggbApplet.setCoords("M_1", ggbApplet.getXcoord("J"), ggbApplet.getYcoord("J"));
    ggbApplet.setCoords("N_1", ggbApplet.getXcoord("K"), ggbApplet.getYcoord("K"));
  }
  //empty the machine
  if (ggbApplet.getValue("quartH2OHeight") < 0.5 && ggbApplet.getValue("IsItFullYet") == true) {
    ggbApplet.setColor("quartH2OTop", 255, 255, 255);
    ggbApplet.setColor("quartH2OSides", 255, 255, 255);
    ggbApplet.setValue("splash", false);
    ggbApplet.stopAnimation();
    ggbApplet.setCoords("Q_1", ggbApplet.getXcoord("H_2"), ggbApplet.getYcoord("H_2"));
    ggbApplet.setCoords("R_1", ggbApplet.getXcoord("I_2"), ggbApplet.getYcoord("I_2"));
  }
  //empty the machine
  if (ggbApplet.getValue("pintH2OHeight") < 0.5 && ggbApplet.getValue("IsItFullYet") == true) {
    ggbApplet.setColor("pintH2OTop", 255, 255, 255);
    ggbApplet.setColor("pintH2OSides", 255, 255, 255);
    ggbApplet.setValue("splash", false);
    ggbApplet.stopAnimation();
    ggbApplet.setCoords("U_1", ggbApplet.getXcoord("F_2"), ggbApplet.getYcoord("F_2"));
    ggbApplet.setCoords("V_1", ggbApplet.getXcoord("G_2"), ggbApplet.getYcoord("G_2"));
  }
}