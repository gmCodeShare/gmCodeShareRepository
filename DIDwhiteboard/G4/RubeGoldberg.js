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
  ggbApplet.registerObjectUpdateListener("B_4", "weighOptions");
  ggbApplet.registerObjectUpdateListener("C_4", "weighOptions");
  ggbApplet.registerObjectUpdateListener("J_2", "pass");
}

function rollBall() {
  ggbApplet.setValue("time", 0);
  ggbApplet.setAnimating("time", true);
  ggbApplet.setAnimating("J_2", false);
  ggbApplet.setAnimating("NISTtimer", false);
  ggbApplet.setAnimating("time_2", false);
  ggbApplet.setAnimating("time_3", false);
  ggbApplet.setAnimating("α", false);
  ggbApplet.setAnimating("Z_3", false);
  ggbApplet.startAnimation();
}

function reset() {
  ggbApplet.stopAnimation();
  ggbApplet.setValue("time", 0);
  ggbApplet.setVisible("eq1", false);
  ggbApplet.setCoords("K", -12, -6);
  ggbApplet.setCoords("M", -8, -6);
  ggbApplet.setVisible("text1", false);
  ggbApplet.setValue("length", 0);
  ggbApplet.setValue("time_2", 0);
  ggbApplet.setVisible("RedBall_2", false);
  ggbApplet.setCoords("G_1", 26, 0);
  ggbApplet.setCoords("F_1", 18, 0);
  ggbApplet.setCoords("D_1", 34, 0);
  ggbApplet.setValue("α", 0);
  ggbApplet.setCoords("J_2", 52, -8);
  ggbApplet.setValue("time_3", 0);
  ggbApplet.setCoords("Z_3", 80, -10);
  ggbApplet.setCoords("B_4", 87, -10);
  ggbApplet.setCoords("C_4", 91, -10);
  ggbApplet.setCoords("R_4", 80, 0);
  ggbApplet.setValue("β", -1);
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
  if (ggbApplet.getValue("Distance(H_1, RedBall_2)") < 0.2 && ggbApplet.getYcoord("F_1") == -11 && ggbApplet.getYcoord("G_1") == -11 && ggbApplet.getYcoord("D_1") == -11) {
    ggbApplet.setAnimating("length2", true);
    ggbApplet.setAnimating("length", false);
    ggbApplet.setAnimating("length3", false);
  }
  if (ggbApplet.getValue("Distance(K_1, RedBall_2)") < 0.2 && ggbApplet.getYcoord("F_1") == -11 && ggbApplet.getYcoord("G_1") == -11 && ggbApplet.getYcoord("D_1") == -11) {
    ggbApplet.setAnimating("length2", false);
    ggbApplet.setAnimating("length", true);
    ggbApplet.setAnimating("length3", false);
  }
  if (ggbApplet.getValue("Distance(J_1, RedBall_2)") < 0.2 && ggbApplet.getYcoord("F_1") == -11 && ggbApplet.getYcoord("G_1") == -11 && ggbApplet.getYcoord("D_1") == -11) {
    ggbApplet.setAnimating("length2", false);
    ggbApplet.setAnimating("length", false);
    ggbApplet.setAnimating("length3", true);
  }
  if (ggbApplet.getValue("time_2") == 1) {
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
}

function weighOptions() {


}

/*

OnUpdate

lean1 If(lean1 > 2.8, StartAnimation(lean2, true))
lean2 If(lean2 > 2.85, StartAnimation(lean3, true))
lean3 If(lean3 > 2.86, StartAnimation(lean4, true))
lean4 If(lean4 > 2, StartAnimation(β, true))


β If(β > -0.2, StartAnimation(γ, true), StartAnimation(γ))
poly5 If(ggbApplet.getYcoord(Z_3) > -0.5, StartAnimation(R_4, true), StartAnimation(R_4, false))
B_4 {
  If(Distance(B_4, (84, -7)) < 1, SetCoords(R_3, 76, -3))
  If(Distance(B_4, (84, -7)) < 1, SetCoords(S_3, 84, -3))
  If(Distance(B_4, (84, -7)) < 1, SetCoords(B_4, 84, -8))
  If(Distance(B_4, (84, -8)) < 1, StartAnimation(Z_3, true))
  If(Distance(B_4, (84, -8)) < 1, SetColor(poly5, 237 / 255, 178 / 255, 32 / 255))
}
C_4 If(Distance(C_4, (84, -8)) < 1, SetColor(poly5, 217 / 255, 61 / 255, 31 / 255))

J_2 {
              If(Distance(J_2, (64, -8)) < 0.2, StartAnimation(α))
              If(Distance(J_2, (64, -8)) < 0.2, StartAnimation(time_3))
              If(Distance(J_2, (64, -8)) < 0.2, StartAnimation(J_2, false))
            }
K {
              If(Distance(K, (9, -2)) < 2, ggbApplet.setValue(K, (9, -1)))
              If(Distance(K, (9, -2)) < 2, ggbApplet.setValue(S, l3(3)), ggbApplet.setValue(S, l3(2)))
              ggbApplet.setValue(time, 0)
            }


RedBall_2 {
              If(ggbApplet.getXcoord(RedBall_2) == 26 && ggbApplet.getYcoord(RedBall_2) == 7, ggbApplet.setVisible("RedBall_2,1,false))
                    If(ggbApplet.getXcoord(RedBall_2) == 26 && ggbApplet.getYcoord(RedBall_2) == 7, ggbApplet.setVisible("eq3,1,true),ggbApplet.setVisible("
                      eq3, 1, false)) If(ggbApplet.getXcoord(RedBall_2) == 36 && ggbApplet.getYcoord(RedBall_2) == -13, ggbApplet.setVisible("eq4,1,true),ggbApplet.setVisible("
                      eq4, 1, false)) If(ggbApplet.getXcoord(RedBall_2) == 36 && ggbApplet.getYcoord(RedBall_2) == -13, ggbApplet.setVisible("RedBall_2,1,false))
                        If(ggbApplet.getXcoord(RedBall_2) == 51 && ggbApplet.getYcoord(RedBall_2) == -7.8, StartAnimation(J_2))
                      }
Z_3 {
                        If(Distance(Z_3, H_3) < 0.5, StartAnimation(Z_3, false))
                      }
                      */