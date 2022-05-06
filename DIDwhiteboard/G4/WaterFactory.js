function ggbOnInit() {
    ggbApplet.registerObjectUpdateListener("galBool", "start");
    ggbApplet.registerObjectUpdateListener("quartBool", "start");
    ggbApplet.registerObjectUpdateListener("pintBool", "start");
    ggbApplet.registerObjectUpdateListener("conveyorTime", "pour");
    ggbApplet.registerObjectUpdateListener("vesselH2OHeight", "moveOn");
    ggbApplet.registerObjectUpdateListener("vesselH2OHeight2", "moveOn2");
    ggbApplet.registerObjectUpdateListener("vesselH2OHeight3", "moveOn3");
    ggbApplet.registerObjectUpdateListener("vesselH2OHeight4", "moveOn4");
    ggbApplet.registerObjectClickListener("button1", "startOver");
}

//global variables - tells how many cups were filled
var vessels = ggbApplet.getValue("vessels");
var tolerance = ggbApplet.getValue("tolerance");

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
            ggbApplet.stopAnimation();
            ggbApplet.reset();
            break;
        case 1:
            ggbApplet.setValue("splash", false);
            ggbApplet.setAnimating("galH2OHeight", false);
            ggbApplet.setAnimating("vesselH2OHeight", false);
            ggbApplet.setAnimating("vesselH2OHeight2", false);
            ggbApplet.setAnimating("vesselH2OHeight3", false);
            ggbApplet.setAnimating("vesselH2OHeight4", false);
            ggbApplet.setColor("vesselBottomBack", 0, 127, 175);
            ggbApplet.setColor("vesselBottomFront", 0, 127, 175);
            ggbApplet.setColor("vesselTop", 0, 127, 175);
            ggbApplet.setColor("n", 0, 127, 175);
            ggbApplet.setColor("p", 0, 127, 175);
            ggbApplet.setColor("vesselBottomBack2", 0, 127, 175);
            ggbApplet.setColor("vesselBottomFront2", 0, 127, 175);
            ggbApplet.setColor("vesselTop2", 0, 127, 175);
            ggbApplet.setColor("a", 0, 127, 175);
            ggbApplet.setColor("b", 0, 127, 175);
            ggbApplet.setColor("vesselBottomBack3", 0, 127, 175);
            ggbApplet.setColor("vesselBottomFront3", 0, 127, 175);
            ggbApplet.setColor("vesselTop3", 0, 127, 175);
            ggbApplet.setColor("c", 0, 127, 175);
            ggbApplet.setColor("d", 0, 127, 175);
            ggbApplet.setColor("vesselBottomBack4", 0, 127, 175);
            ggbApplet.setColor("vesselBottomFront4", 0, 127, 175);
            ggbApplet.setColor("vesselTop4", 0, 127, 175);
            ggbApplet.setColor("e", 0, 127, 175);
            ggbApplet.setColor("f_1", 0, 127, 175);
            ggbApplet.setColor("vesselH2OTop", 255, 255, 255);
            ggbApplet.setColor("galH2OTop", 0, 127, 175);
            ggbApplet.setValue("conveyorTime", -20);
            ggbApplet.setAnimating("conveyorTime", true);
            ggbApplet.startAnimation();
            break;
        case 2:
            ggbApplet.setValue("splash", false);
            ggbApplet.setVisible("vesselH2OTop3", false);
            ggbApplet.setVisible("vesselTop3", false);
            ggbApplet.setVisible("vesselBottomBack3", false);
            ggbApplet.setVisible("vesselBottomFront3", false);
            ggbApplet.setVisible("c", false);
            ggbApplet.setVisible("d", false);
            ggbApplet.setVisible("vesselH2OTop4", false);
            ggbApplet.setVisible("vesselTop4", false);
            ggbApplet.setVisible("vesselBottomBack4", false);
            ggbApplet.setVisible("vesselBottomFront4", false);
            ggbApplet.setVisible("e", false);
            ggbApplet.setVisible("f_1", false);
            ggbApplet.setAnimating("quartH2OHeight", false);
            ggbApplet.setAnimating("vesselH2OHeight", false);
            ggbApplet.setAnimating("vesselH2OHeight2", false);
            ggbApplet.setAnimating("vesselH2OHeight3", false);
            ggbApplet.setAnimating("vesselH2OHeight4", false);
            ggbApplet.setColor("vesselBottomBack", 0, 129, 57);
            ggbApplet.setColor("vesselBottomFront", 0, 129, 57);
            ggbApplet.setColor("vesselTop", 0, 129, 57);
            ggbApplet.setColor("n", 0, 129, 57);
            ggbApplet.setColor("p", 0, 129, 57);
            ggbApplet.setColor("vesselBottomBack2", 0, 129, 57);
            ggbApplet.setColor("vesselBottomFront2", 0, 129, 57);
            ggbApplet.setColor("vesselTop2", 0, 129, 57);
            ggbApplet.setColor("a", 0, 129, 57);
            ggbApplet.setColor("b", 0, 129, 57);
            ggbApplet.setColor("vesselH2OTop", 255, 255, 255);
            ggbApplet.setColor("quartH2OTop", 0, 127, 175);
            ggbApplet.setValue("conveyorTime", -20);
            ggbApplet.setAnimating("conveyorTime", true);
            ggbApplet.startAnimation();
            break;
        case 3:
            ggbApplet.setValue("splash", false);
            ggbApplet.setVisible("vesselH2OTop3", false);
            ggbApplet.setVisible("vesselTop3", false);
            ggbApplet.setVisible("vesselBottomBack3", false);
            ggbApplet.setVisible("vesselBottomFront3", false);
            ggbApplet.setVisible("c", false);
            ggbApplet.setVisible("d", false);
            ggbApplet.setVisible("vesselH2OTop4", false);
            ggbApplet.setVisible("vesselTop4", false);
            ggbApplet.setVisible("vesselBottomBack4", false);
            ggbApplet.setVisible("vesselBottomFront4", false);
            ggbApplet.setVisible("e", false);
            ggbApplet.setVisible("f_1", false);
            ggbApplet.setAnimating("pintH2OHeight", false);
            ggbApplet.setAnimating("vesselH2OHeight", false);
            ggbApplet.setAnimating("vesselH2OHeight2", false);
            ggbApplet.setAnimating("vesselH2OHeight3", false);
            ggbApplet.setAnimating("vesselH2OHeight4", false);
            ggbApplet.setColor("vesselBottomBack", 130, 63, 152);
            ggbApplet.setColor("vesselBottomFront", 130, 63, 152);
            ggbApplet.setColor("vesselTop", 130, 63, 152);
            ggbApplet.setColor("n", 130, 63, 152);
            ggbApplet.setColor("p", 130, 63, 152);
            ggbApplet.setColor("vesselBottomBack2", 130, 63, 152);
            ggbApplet.setColor("vesselBottomFront2", 130, 63, 152);
            ggbApplet.setColor("vesselTop2", 130, 63, 152);
            ggbApplet.setColor("a", 130, 63, 152);
            ggbApplet.setColor("b", 130, 63, 152);
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
        if (Math.abs(ggbApplet.getXcoord("M") - ggbApplet.getXcoord("A")) < tolerance) {
            //updates minimum amount of water in machine and text
            vessels = 1;
            ggbApplet.setValue("vessels", vessels);
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
        if (Math.abs(ggbApplet.getXcoord("P") - ggbApplet.getXcoord("A")) < tolerance) {
            //updates minimum amount of water in machine and text
            vessels = 2;
            ggbApplet.setValue("vessels", vessels);
            //pauses conveyor belt
            ggbApplet.stopAnimation();
            ggbApplet.setAnimating("conveyorTime", false);
            //makes water pour visible
            ggbApplet.setValue("splash", true);
            //increases water level in cup
            ggbApplet.setColor("vesselH2OTop2", 0, 127, 175);
            ggbApplet.setAnimating("vesselH2OHeight2", true);
            //decreases water level in machine
            ggbApplet.setAnimating("galH2OHeight", true);
            ggbApplet.startAnimation();
        }
        if (Math.abs(ggbApplet.getXcoord("S") - ggbApplet.getXcoord("A")) < tolerance) {
            //updates minimum amount of water in machine and text
            vessels = 3;
            ggbApplet.setValue("vessels", vessels);
            //pauses conveyor belt
            ggbApplet.stopAnimation();
            ggbApplet.setAnimating("conveyorTime", false);
            //makes water pour visible
            ggbApplet.setValue("splash", true);
            //increases water level in cup
            ggbApplet.setColor("vesselH2OTop3", 0, 127, 175);
            ggbApplet.setAnimating("vesselH2OHeight3", true);
            //decreases water level in machine
            ggbApplet.setAnimating("galH2OHeight", true);
            ggbApplet.startAnimation();
        }
        if (Math.abs(ggbApplet.getXcoord("V") - ggbApplet.getXcoord("A")) < tolerance) {
            //updates minimum amount of water in machine and text
            vessels = 4;
            ggbApplet.setValue("vessels", vessels);
            //pauses conveyor belt
            ggbApplet.stopAnimation();
            ggbApplet.setAnimating("conveyorTime", false);
            //makes water pour visible
            ggbApplet.setValue("splash", true);
            //increases water level in cup
            ggbApplet.setColor("vesselH2OTop4", 0, 127, 175);
            ggbApplet.setAnimating("vesselH2OHeight4", true);
            //decreases water level in machine
            ggbApplet.setAnimating("galH2OHeight", true);
            ggbApplet.startAnimation();
        }
    }
    if (ggbApplet.getValue("quartBool") == 1) {
        //if cup is under machine
        if (Math.abs(ggbApplet.getXcoord("M") - ggbApplet.getXcoord("D")) < tolerance) {
            //updates minimum amount of water in machine and text
            vessels = 1;
            ggbApplet.setValue("vessels", vessels);
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
        if (Math.abs(ggbApplet.getXcoord("P") - ggbApplet.getXcoord("D")) < tolerance) {
            //updates minimum amount of water in machine and text
            vessels = 2;
            ggbApplet.setValue("vessels", vessels);
            //pauses conveyor belt
            ggbApplet.stopAnimation();
            ggbApplet.setAnimating("conveyorTime", false);
            //makes water pour visible
            ggbApplet.setValue("splash", true);
            //increases water level in cup
            ggbApplet.setColor("vesselH2OTop2", 0, 127, 175);
            ggbApplet.setAnimating("vesselH2OHeight2", true);
            //decreases water level in machine
            ggbApplet.setAnimating("quartH2OHeight", true);
            ggbApplet.startAnimation();
        }
    }
    if (ggbApplet.getValue("pintBool") == 1) {
        //if cup is under machine
        if (Math.abs(ggbApplet.getXcoord("M") - ggbApplet.getXcoord("G")) < tolerance) {
            //updates minimum amount of water in machine and text
            vessels = 1;
            ggbApplet.setValue("vessels", vessels);
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
        if (Math.abs(ggbApplet.getXcoord("P") - ggbApplet.getXcoord("G")) < tolerance) {
            //updates minimum amount of water in machine and text
            vessels = 2;
            ggbApplet.setValue("vessels", vessels);
            //pauses conveyor belt
            ggbApplet.stopAnimation();
            ggbApplet.setAnimating("conveyorTime", false);
            //makes water pour visible
            ggbApplet.setValue("splash", true);
            //increases water level in cup
            ggbApplet.setColor("vesselH2OTop2", 0, 127, 175);
            ggbApplet.setAnimating("vesselH2OHeight2", true);
            //decreases water level in machine
            ggbApplet.setAnimating("pintH2OHeight", true);
            ggbApplet.startAnimation();
        }
    }
    //empty the machine
    if (ggbApplet.getValue("galH2OHeight") == 0) {
        ggbApplet.setColor("galH2OTop", 255, 255, 255);
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
    }
    //empty the machine
    if (ggbApplet.getValue("quartH2OHeight") == 0) {
        ggbApplet.setColor("quartH2OTop", 255, 255, 255);
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
    }
    //empty the machine
    if (ggbApplet.getValue("pintH2OHeight") == 0) {
        ggbApplet.setColor("pintH2OTop", 255, 255, 255);
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
    }
}

function moveOn() {
    if (Math.abs(ggbApplet.getValue("vesselHeight") - ggbApplet.getValue("vesselH2OHeight")) < 0.2) {
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
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

function moveOn2() {
    if (Math.abs(ggbApplet.getValue("vesselHeight") - ggbApplet.getValue("vesselH2OHeight2")) < 0.2) {
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight2", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
        //empty the machine
        if (ggbApplet.getValue("quartH2OHeight") == 0) {
            ggbApplet.setColor("quartH2OTop", 255, 255, 255);
            ggbApplet.setValue("splash", false);
            ggbApplet.stopAnimation();
        }
        //empty the machine
        if (ggbApplet.getValue("pintH2OHeight") == 0) {
            ggbApplet.setColor("pintH2OTop", 255, 255, 255);
            ggbApplet.setValue("splash", false);
            ggbApplet.stopAnimation();
        }
    }
}

function moveOn3() {
    if (Math.abs(ggbApplet.getValue("vesselHeight") - ggbApplet.getValue("vesselH2OHeight3")) < 0.2) {
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight3", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
    }
}

function moveOn4() {
    if (ggbApplet.getValue("vesselHeight") - ggbApplet.getValue("vesselH2OHeight4") < 0.2) {
        //stop water pour
        ggbApplet.setValue("splash", false);
        ggbApplet.stopAnimation();
        //stop pouring water
        ggbApplet.setAnimating("vesselH2OHeight4", false);
        ggbApplet.setAnimating("galH2OHeight", false);
        ggbApplet.setAnimating("quartH2OHeight", false);
        ggbApplet.setAnimating("pintH2OHeight", false);
        //turn the conveyor belt back on
        ggbApplet.setAnimating("conveyorTime", true);
        ggbApplet.startAnimation();
        //empty the machine
        if (ggbApplet.getValue("galH2OHeight") == 0) {
            ggbApplet.setColor("galH2OTop", 255, 255, 255);
            ggbApplet.setValue("splash", false);
            ggbApplet.stopAnimation();
        }
    }
}

function startOver() {
    ggbApplet.stopAnimation();
    ggbApplet.setValue("conveyorTime", -20);
    ggbApplet.setValue("splash", false);
    ggbApplet.setVisible("vesselH2OTop3", true);
    ggbApplet.setVisible("vesselTop3", true);
    ggbApplet.setVisible("vesselBottomBack3", true);
    ggbApplet.setVisible("vesselBottomFront3", true);
    ggbApplet.setVisible("c", true);
    ggbApplet.setVisible("d", true);
    ggbApplet.setVisible("vesselH2OTop4", true);
    ggbApplet.setVisible("vesselTop4", true);
    ggbApplet.setVisible("vesselBottomBack4", true);
    ggbApplet.setVisible("vesselBottomFront4", true);
    ggbApplet.setVisible("e", true);
    ggbApplet.setVisible("f_1", true);
    ggbApplet.setAnimating("vesselH2OHeight", false);
    ggbApplet.setAnimating("galH2OHeight", false);
    ggbApplet.setAnimating("conveyorTime", false);
    vessels = 0;
    ggbApplet.setValue("vessels", vessels);
    ggbApplet.setValue("galH2OHeight", ggbApplet.getValue("galHeight"));
    ggbApplet.setColor("galH2OTop", 0, 127, 175);
    ggbApplet.setColor("quartH2OTop", 0, 127, 175);
    ggbApplet.setColor("pintH2OTop", 0, 127, 175);
    ggbApplet.setValue("quartH2OHeight", ggbApplet.getValue("quartHeight"));
    ggbApplet.setValue("pintH2OHeight", ggbApplet.getValue("pintHeight"));
    ggbApplet.setValue("vesselH2OHeight", 0);
    ggbApplet.setValue("vesselH2OHeight2", 0);
    ggbApplet.setValue("vesselH2OHeight3", 0);
    ggbApplet.setValue("vesselH2OHeight4", 0);
    ggbApplet.setColor("vesselH2OTop", 255, 255, 255);
    ggbApplet.setColor("vesselH2OTop2", 255, 255, 255);
    ggbApplet.setColor("vesselH2OTop3", 255, 255, 255);
    ggbApplet.setColor("vesselH2OTop4", 255, 255, 255);
}
