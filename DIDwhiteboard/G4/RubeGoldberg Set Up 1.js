function ggbOnInit() {
  ggbApplet.registerObjectUpdateListener("M", "tilt");
  ggbApplet.registerObjectUpdateListener("K", "tilt");
}

function tilt() {
  ggbApplet.setVisible("text1", false);
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