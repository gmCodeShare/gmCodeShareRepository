/*
First slide - if M

*/

function ggbOnInit() {
  ggbApplet.registerObjectClickListener("button1", "rollBall");
  ggbApplet.registerObjectClickListener("button2", "reset");
  ggbApplet.registerObjectUpdateListener("time", "section1");
  ggbApplet.registerObjectUpdateListener("time_2", "section2");
  ggbApplet.registerObjectUpdateListener("time_3", "section3");
  ggbApplet.registerObjectUpdateListener("D_1", "checkSpring");
  ggbApplet.registerObjectUpdateListener("F_1", "checkSpring");
  ggbApplet.registerObjectUpdateListener("G_1", "checkSpring");
  ggbApplet.registerObjectUpdateListener("M", "tilt");
  ggbApplet.registerObjectUpdateListener("K", "tilt");
  ggbApplet.registerObjectUpdateListener("J_2", "pass");
  ggbApplet.registerObjectUpdateListener("B_4", "weighOptions");
  ggbApplet.registerObjectUpdateListener("C_4", "weighOptions");
  ggbApplet.registerObjectUpdateListener("Z_3", "pew");
  ggbApplet.registerObjectUpdateListener("R_4", "thump");
  ggbApplet.registerObjectUpdateListener("M_4", "pew");
  ggbApplet.registerObjectUpdateListener("J_4", "pew");
  ggbApplet.registerObjectUpdateListener("K_4", "pew");
  ggbApplet.registerObjectUpdateListener("L_4", "pew");
  ggbApplet.registerObjectUpdateListener("lean1", "dominoes");
  ggbApplet.registerObjectUpdateListener("lean2", "dominoes2");
  ggbApplet.registerObjectUpdateListener("lean3", "dominoes3");
  ggbApplet.registerObjectUpdateListener("lean4", "kickoff");
  ggbApplet.registerObjectUpdateListener("β", "zoom");
  ggbApplet.registerObjectUpdateListener("H_5", "sooperDooper");
  ggbApplet.registerObjectUpdateListener("γ", "weeee");
  ggbApplet.registerObjectUpdateListener("I_5", "drop");
  ggbApplet.registerObjectUpdateListener("U_5", "boing");
  ggbApplet.registerObjectUpdateListener("N_5", "kaboom");
}


function rollBall() {
  ggbApplet.setValue("time", 0);
  ggbApplet.setAnimating("time", true);
  ggbApplet.startAnimation();
}

function reset() {
  ggbApplet.reset();
}

function section1() {
  if (ggbApplet.getValue("time") == 1 && ggbApplet.getXcoord("K") == 9) {
    ggbApplet.setVisible("eq1", true);
    ggbApplet.setVisible("RedBall", false);
  } else {
    ggbApplet.setVisible("eq1", false);
    ggbApplet.setVisible("RedBall", true);
  }

  if (ggbApplet.getXcoord("K") != 9 && ggbApplet.getXcoord("M") != 9 && ggbApplet.getValue("time") < 1) {
    ggbApplet.setVisible("text1", true);
  } else {
    ggbApplet.setVisible("text1", false);
  }
}

function section2() {
  if (ggbApplet.getValue("Distance(H_1, RedBall_2)") < 0.2 && ggbApplet.getXcoord("D_1") == 25 && ggbApplet.getYcoord("F_1") == -11 && ggbApplet.getYcoord("G_1") == -11 && ggbApplet.getYcoord("D_1") == -11) {
    ggbApplet.setAnimating("length2", true);
    ggbApplet.setAnimating("length", false);
    ggbApplet.setAnimating("length3", false);
  }
  if (ggbApplet.getValue("Distance(K_1, RedBall_2)") < 0.2 && ggbApplet.getXcoord("F_1") == 25 && ggbApplet.getYcoord("F_1") == -11 && ggbApplet.getYcoord("G_1") == -11 && ggbApplet.getYcoord("D_1") == -11) {
    ggbApplet.setAnimating("length2", false);
    ggbApplet.setAnimating("length", true);
    ggbApplet.setAnimating("length3", false);
  }
  if (ggbApplet.getValue("Distance(J_1, RedBall_2)") < 0.2 && ggbApplet.getXcoord("G_1") == 25 && ggbApplet.getYcoord("F_1") == -11 && ggbApplet.getYcoord("G_1") == -11 && ggbApplet.getYcoord("D_1") == -11) {
    ggbApplet.setAnimating("length2", false);
    ggbApplet.setAnimating("length", false);
    ggbApplet.setAnimating("length3", true);
  }
  if (ggbApplet.getValue("Distance(RedBall_2,J_2)") < 3) {
    ggbApplet.setAnimating("J_2", true);
  }
  ggbApplet.startAnimation();
}

function pass() {
  if (ggbApplet.getValue("Distance(J_2,GreenBall_3)") < 2) {
    ggbApplet.setAnimating("time_3", true);
    ggbApplet.setAnimating("α", true);
  }
  ggbApplet.startAnimation();
}

function checkSpring() {
  ggbApplet.setValue("time_2", 0);
  ggbApplet.setValue("length", 0);
  ggbApplet.setValue("length2", 0);
  ggbApplet.setValue("length3", 0);
  if (ggbApplet.getYcoord("D_1") == -11 && ggbApplet.getYcoord("F_1") == -11 && ggbApplet.getYcoord("G_1") == -11) {
    ggbApplet.setVisible("RedBall_2", true);
    ggbApplet.setVisible("RedBall", false);
    ggbApplet.setAnimating("time_2", true);
    ggbApplet.setAnimating("time", false);
  } else {
    ggbApplet.setVisible("RedBall_2", false);
    ggbApplet.setVisible("RedBall", true);
  }
}

function tilt() {
  if (ggbApplet.getValue("Distance(M, C)") >= 1 && ggbApplet.getValue("Distance(K, C)") >= 1) {
    ggbApplet.setCoords("S", 1, -2);
  }
  if (ggbApplet.getValue("Distance(M, C)") < 1) {
    ggbApplet.setCoords("M", 9, -3);
    ggbApplet.setCoords("S", 1, -1);
  }
  if (ggbApplet.getValue("Distance(K, C)") < 1) {
    ggbApplet.setCoords("K", 9, -1);
    ggbApplet.setCoords("S", 1, -3);
  }
  ggbApplet.setValue("time", 0);
}

function section3() {
  if (ggbApplet.getValue("time_3") > 0.9) {
    ggbApplet.setAnimating("J_2", false);
  }
  if (ggbApplet.getValue("Distance(GreenBall_3, (76, -9))") < 1) {
    ggbApplet.setCoords("R_3", 76, -4);
    ggbApplet.setCoords("S_3", 84, -2);
    ggbApplet.setVisible("text2", true);
  } else {
    ggbApplet.setCoords("R_3", 76, -3);
    ggbApplet.setCoords("S_3", 84, -3);
    ggbApplet.setVisible("text2", false);
  }
}

function weighOptions() {
  if (ggbApplet.getValue("Distance(C_4, (84, -8))") < 2) {
    ggbApplet.setColor("poly5", 217, 61, 31);
  }
  if (ggbApplet.getValue("Distance(B_4, (84, -7))") < 2) {
    ggbApplet.setCoords("R_3", 76, -3);
    ggbApplet.setCoords("S_3", 84, -3);
    ggbApplet.setAnimating("Z_3", true);
    ggbApplet.setColor("poly5", 237, 178, 32);
  }
  ggbApplet.startAnimation();
}

function pew() {
  if (ggbApplet.getValue("Distance(Z_3,R_4)") < 0.2 && ggbApplet.getYcoord("J_4") == -5 && ggbApplet.getYcoord("M_4") == -5 && ggbApplet.getYcoord("L_4") == -5 && ggbApplet.getYcoord("K_4") == -5) {
    ggbApplet.stopAnimation();
    ggbApplet.setAnimating("Z_3", false);
    ggbApplet.setAnimating("time_4", true);
  }
  ggbApplet.startAnimation();
}


function thump() {
  if (ggbApplet.getValue("Distance(R_4, G_4)") < 0.4 && ggbApplet.getYcoord("J_4") == -5 && ggbApplet.getYcoord("M_4") == -5 && ggbApplet.getYcoord("L_4") == -5 && ggbApplet.getYcoord("K_4") == -5) {
    ggbApplet.setAnimating("lean1", true);
    ggbApplet.startAnimation();
  }
}

function dominoes() {
  if (Math.abs(ggbApplet.getValue("lean1") - 2.8) < 0.3) {
    ggbApplet.setAnimating("lean2", true);
    ggbApplet.startAnimation();
  }
}

function dominoes2() {
  if (Math.abs(ggbApplet.getValue("lean2") - 2.8) < 0.3) {
    ggbApplet.setAnimating("lean3", true);
    ggbApplet.startAnimation();
  }
}


function dominoes3() {
  if (Math.abs(ggbApplet.getValue("lean3") - 2.8) < 0.3) {
    ggbApplet.setAnimating("lean4", true);
    ggbApplet.startAnimation();
  }
}

function kickoff() {
  if (Math.abs(ggbApplet.getValue("lean4") - 1.75) < 0.3) {
    ggbApplet.setAnimating("β", true);
    ggbApplet.startAnimation();
  }
}

function zoom() {
  if (ggbApplet.getValue("β") == 0) {
    ggbApplet.setAnimating("H_5", true);
    ggbApplet.startAnimation();
  }
}

function sooperDooper() {
  if (ggbApplet.getXcoord("H_5") == ggbApplet.getXcoord("LoopDeCenter") - 2) {
    ggbApplet.stopAnimation();
    ggbApplet.setAnimating("H_5", false);
    ggbApplet.setAnimating("γ", true);
    ggbApplet.startAnimation();
  }
}

function weeee() {
  if (ggbApplet.getValue("γ") > 6.28) {
    ggbApplet.stopAnimation();
    ggbApplet.setAnimating("γ", false);
    ggbApplet.setAnimating("H_5", true);
    ggbApplet.startAnimation();
  }
}

function drop() {
  if (Math.abs(ggbApplet.getXcoord("I_5") - ggbApplet.getXcoord("D_5")) < 0.2) {
    ggbApplet.setAnimating("U_5", true);
    ggbApplet.setAnimating("T_5", true);
    ggbApplet.startAnimation();
  }
}

function boing() {
  if (Math.abs(ggbApplet.getYcoord("U_5") - ggbApplet.getYcoord("D_5")) < 0.2) {
    ggbApplet.setVisible("T_4", false);
    ggbApplet.setVisible("U_4", false);
    ggbApplet.setVisible("W_4", false);
    ggbApplet.setVisible("B_5", false);
    ggbApplet.setVisible("v", false);
    ggbApplet.setVisible("w", false);
    ggbApplet.setVisible("u_1", false);
    ggbApplet.setVisible("v_1", false);
    ggbApplet.setAnimating("biggestLilyPad", true);
    ggbApplet.setAnimating("bigMediumLilyPad", true);
    ggbApplet.setAnimating("smallMediumLilyPad", true);
    ggbApplet.setAnimating("smallestLilyPad", true);
    ggbApplet.setAnimating("time_5", true);
    ggbApplet.startAnimation();
  }
}

function kaboom() {
  if (ggbApplet.getXcoord("N_5") > 175) {
    ggbApplet.setAnimating("Fire1", true);
    ggbApplet.startAnimation();
  }
}

function stopMoving() {
  ggbApplet.setAnimating("J_2", false);
  ggbApplet.setAnimating("NISTtimer", false);
  ggbApplet.setAnimating("time_2", false);
  ggbApplet.setAnimating("time_3", false);
  ggbApplet.setAnimating("length2", false);
  ggbApplet.setAnimating("length", false);
  ggbApplet.setAnimating("length3", false);
  ggbApplet.setAnimating("α", false);
  ggbApplet.setAnimating("Z_3", false);
  ggbApplet.setAnimating("lean1", false);
  ggbApplet.setAnimating("lean2", false);
  ggbApplet.setAnimating("lean3", false);
  ggbApplet.setAnimating("lean4", false);
  ggbApplet.setAnimating("β", false);
  ggbApplet.setAnimating("γ", false);
  ggbApplet.setAnimating("H_5", false);
  ggbApplet.setAnimating("U_5", false);
  ggbApplet.setAnimating("T_5", false);
  ggbApplet.setAnimating("biggestLilyPad", false);
  ggbApplet.setAnimating("bigMediumLilyPad", false);
  ggbApplet.setAnimating("smallMediumLilyPad", false);
  ggbApplet.setAnimating("smallestLilyPad", false);
  ggbApplet.setAnimating("time_5", false);
  ggbApplet.setAnimating("Fire1", false);
}