// setup in GGB
/*
Execute({"snap = Button()", "screen = Corner(5)", "nearlyWhiteBG = Polygon({Corner(1), Corner(2), Corner(3), Corner(4)})", "SetColor(nearlyWhiteBG, 1, 1, 254/255)", "SetLayer(nearlyWhiteBG, 0)", "SetFixed(nearlyWhiteBG, false, false)", "SetFilling(nearlyWhiteBG, 1)", "fileName = " + UnicodeToLetter(34) + UnicodeToLetter(34), "input1 = InputBox(fileName)", "SetConditionToShowObject(fileName, false)"})
*/

// in console:

const fileName = "EM2_NL_TE_IM1_M1TAL02_TE_learn1";

ggb1.evalCommand(
  `ExportImage("height", y(screen), "width", x(screen), "type", "pdf", "filename", "${fileName}.pdf")`
);
ggb1.evalCommand(
  `ExportImage("height", y(screen), "width", x(screen), "type", "png", "filename", "${fileName}.png")`
);
ggb1.evalCommand(
  `ExportImage("height", y(screen), "width", x(screen), "type", "svg", "filename", "${fileName}.svg")`
);

// in GGB:

/*
SetVisibleInView(snap,1,false)
SetVisibleInView(input1,1,false)
ExportImage("height", y(screen), "width", x(screen), "type", "pdf", "filename", fileName+".pdf")
ExportImage("height", y(screen), "width", x(screen), "type", "png", "filename", fileName+".png")
ExportImage("height", y(screen), "width", x(screen), "type", "svg", "filename", fileName+".svg")
*/
