// use this if you need a bar that covers the whole bottom of the screen
fullBin();
function fullBin() {
  ggbApplet.evalCommand("binHeight = 2");
  ggbApplet.evalCommand("bin = Polygon({Corner(1) + (-1, -1), Corner(2) + (1, -1), Corner(2) + (1, 1 + binHeight), Corner(1) + (-1, 1 + binHeight)})");
  ggbApplet.setLineStyle("bin", 2);
  ggbApplet.setFilling("bin", 0.15);
  ggbApplet.setColor("bin", 160, 160, 160);
  ggbApplet.setFixed("bin", false, false);
  // if you need a full opacity bin, RGB 235, 235, 235 is virtually indistinguishable
  // if you go that route, don't forget to fiddle with the segments on the poly!
}


// use this if you need a smaller bin
// the spacing norm, as per sway, is 5 pix from the bottom-left corner of the screen
boxBin();
function boxBin() {
  ggbApplet.evalCommand("binHeight = 2");
  ggbApplet.evalCommand("binWidth = 2");
  ggbApplet.evalCommand("xFromPix = (x(Corner(3)) - x(Corner(1))) / x(Corner(5))");
  ggbApplet.evalCommand("yFromPix = (y(Corner(3)) - y(Corner(1))) / y(Corner(5))");
  ggbApplet.evalCommand("BLbin = Corner(1) + 5(xFromPix, yFromPix)");
  ggbApplet.setVisible("BLbin", false);
  ggbApplet.evalCommand("bin = Polygon({BLbin, BLbin + (binWidth, 0), BLbin + (binWidth, binHeight), BLbin + (0, binHeight)})");
  ggbApplet.setLineStyle("bin", 2);
  ggbApplet.setFilling("bin", 0.15);
  ggbApplet.setColor("bin", 160, 160, 160);
  ggbApplet.setFixed("bin", false, false);
  // if you need a full opacity bin, RGB 235, 235, 235 is virtually indistinguishable
  // if you go that route, don't forget to fiddle with the segments on the poly!
}
