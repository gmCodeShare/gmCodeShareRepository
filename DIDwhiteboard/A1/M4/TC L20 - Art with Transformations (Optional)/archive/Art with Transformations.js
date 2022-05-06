function ggbOnInit() {
  ggbApplet.registerObjectUpdateListener("addLin", "addLinear");
  ggbApplet.registerObjectUpdateListener("addQuad", "addQuadratic");
  ggbApplet.registerObjectUpdateListener("addAbsVal", "addAbsVal");
  ggbApplet.registerObjectUpdateListener("addCubic", "addCubic");
  ggbApplet.registerObjectUpdateListener("addSqrt", "addSqrt");
  ggbApplet.registerObjectUpdateListener("addCbrt", "addCbrt");
  ggbApplet.registerObjectUpdateListener("addExpDecay", "addExpDecay");
  ggbApplet.registerObjectUpdateListener("addExpGrowth", "addExpGrowth");

  ggbApplet.registerAddListener("pointConditions");
  ggbApplet.registerClientListener("tuck");

  ggbApplet.registerObjectClickListener("button6", "trash");
  ggbApplet.registerClickListener("grab");
  ggbApplet.setSize(590, 590);
  ggbApplet.registerClickListener("changeColor");
}

var colors = [ggbApplet.getColor("color1"), ggbApplet.getColor("color2"), ggbApplet.getColor("color3"), ggbApplet.getColor("color4"), ggbApplet.getColor("color5"), ggbApplet.getColor("color6")];

function changeColor(a) {
  if (ggbApplet.getObjectType(a) != "point") {
    if (ggbApplet.getVisible(a, 1)) {
      var currentColor = colors.indexOf(ggbApplet.getColor(a));
      if (currentColor == 5) {
        var nextColor = 0
      } else {
        var nextColor = currentColor + 1
      };
      ggbApplet.setColor(a, hexToRgb(colors[nextColor]).r, hexToRgb(colors[nextColor]).g, hexToRgb(colors[nextColor]).b);
    }
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var objs = [];
var counterLinear = 0;
var counterQuadratic = 0;
var counterAbsVal = 0;
var counterCubic = 0;
var counterSqrt = 0;
var counterCbrt = 0;
var counterED = 0;
var counterEG = 0;

function halo(PointName) {
  var haloSize = 10;
  var HexyColor = "\"" + ggbApplet.getColor(PointName) + "\"";
  ggbApplet.setPointStyle(PointName, 10);
  ggbApplet.evalCommand(PointName + "Halo:(x - x(" + PointName + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + PointName + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" + haloSize + "^2");
  ggbApplet.evalCommand("SetColor(" + PointName + "Halo," + HexyColor + ")");
  ggbApplet.setFilling(PointName + "Halo", 0.25);
  ggbApplet.setLineThickness(PointName + "Halo", 0);
  ggbApplet.setFixed(PointName + "Halo", false, false);
  ggbApplet.evalCommand("SetVisibleInView(" + PointName + "Halo, 1, true)");
}

function addLinear() {
  //create a point, second point, and segment between them
  ggbApplet.evalCommand("S_" + counterLinear + "=(-3,8)");
  ggbApplet.evalCommand("T_" + counterLinear + "=(3,8)");
  ggbApplet.evalCommand("s_" + counterLinear + "=Segment(S_" + counterLinear + ",T_" + counterLinear + ")");

  //make segment visible in view 1, change line style to dotted, change line thickness to 3, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(s_" + counterLinear + ", 1, true)");
  ggbApplet.evalCommand("SetLineStyle(s_" + counterLinear + ", 2)");
  ggbApplet.setLineThickness("s_" + counterLinear, 3);
  ggbApplet.setColor("s_" + counterLinear, 192, 192, 192);

  //make first point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(S_" + counterLinear + ", 1, true)");
  ggbApplet.setPointSize("S_" + counterLinear, 4);
  ggbApplet.setColor("S_" + counterLinear, 192, 192, 192);

  //create halo for first point
  halo("S_" + counterLinear);

  //make second point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(T_" + counterLinear + ", 1, true)");
  ggbApplet.setPointSize("T_" + counterLinear, 4);
  ggbApplet.setColor("T_" + counterLinear, 192, 192, 192);

  //create halo for second point
  halo("T_" + counterLinear);

  //increment counter
  counterLinear++;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addQuadratic() {
  //create a point, second point, third point, and quadratic between them
  ggbApplet.evalCommand("U_" + counterQuadratic + "=(-3,8)");
  ggbApplet.evalCommand("V_" + counterQuadratic + "=(0,8)");
  ggbApplet.evalCommand("W_" + counterQuadratic + "=(3,8)");
  ggbApplet.evalCommand("listQuad_" + counterQuadratic + "={U_" + counterQuadratic + ",V_" + counterQuadratic + ",W_" + counterQuadratic + "}");
  ggbApplet.evalCommand("u_" + counterQuadratic + "=FitPoly(listQuad_" + counterQuadratic + ")");
  ggbApplet.evalCommand("v_" + counterQuadratic + "=Function(u_" + counterQuadratic + ",Min(x(listQuad_" + counterQuadratic + ")),Max(x(listQuad_" + counterQuadratic + ")))");

  //make quadratic visible in view 1, change line style to dotted, change line thickness to 3, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(u_" + counterQuadratic + ", 1, false)");
  ggbApplet.evalCommand("SetVisibleInView(v_" + counterQuadratic + ", 1, true)");
  ggbApplet.evalCommand("SetLineStyle(v_" + counterQuadratic + ", 2)");
  ggbApplet.setColor("v_" + counterQuadratic, 192, 192, 192);
  ggbApplet.setLineThickness("v_" + counterQuadratic, 3);

  //make first point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(U_" + counterQuadratic + ", 1, true)");
  ggbApplet.setPointSize("U_" + counterQuadratic, 4);
  ggbApplet.setColor("U_" + counterQuadratic, 192, 192, 192);

  //create halo for first point
  halo("U_" + counterQuadratic);

  //make second point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(V_" + counterQuadratic + ", 1, true)");
  ggbApplet.setPointSize("V_" + counterQuadratic, 4);
  ggbApplet.setColor("V_" + counterQuadratic, 192, 192, 192);

  //create halo for second point
  halo("V_" + counterQuadratic);

  //make third point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(W_" + counterQuadratic + ", 2, false)");
  ggbApplet.evalCommand("SetVisibleInView(W_" + counterQuadratic + ", 1, true)");
  ggbApplet.setPointSize("W_" + counterQuadratic, 4);
  ggbApplet.setColor("W_" + counterQuadratic, 192, 192, 192);

  //create halo for third point
  halo("W_" + counterQuadratic);

  //increment counter
  counterQuadratic++;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addAbsVal() {
  //create absolute value shape
  ggbApplet.evalCommand("F_" + counterAbsVal + "=(0,7)");
  ggbApplet.evalCommand("G_" + counterAbsVal + "=(3,10)");
  ggbApplet.evalCommand("f_" + counterAbsVal + "=Ray(G_" + counterAbsVal + ",F_" + counterAbsVal + ")");

  ggbApplet.evalCommand("Fref_" + counterAbsVal + "=Reflect(F_" + counterAbsVal + ", Line(G_" + counterAbsVal + ",yAxis))");
  ggbApplet.evalCommand("Gref_" + counterAbsVal + "=Reflect(G_" + counterAbsVal + ", Line(G_" + counterAbsVal + ",yAxis))");

  ggbApplet.evalCommand("g_" + counterAbsVal + "=Ray(Gref_" + counterAbsVal + ",Fref_" + counterAbsVal + ")");
  ggbApplet.evalCommand("H_" + counterAbsVal + "=Point(g_" + counterAbsVal + ")");
  ggbApplet.evalCommand("f_" + counterAbsVal + "=Segment(G_" + counterAbsVal + ",F_" + counterAbsVal + ")");
  ggbApplet.evalCommand("h_" + counterAbsVal + "=Segment(G_" + counterAbsVal + ",H_" + counterAbsVal + ")");

  //make absolute value visible in view 1, change line style to dotted, change line thickness to 3, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(Fref_" + counterAbsVal + ", 1, false)");
  ggbApplet.evalCommand("SetVisibleInView(g_" + counterAbsVal + ", 1, false)");
  ggbApplet.evalCommand("SetVisibleInView(f_" + counterAbsVal + ", 1, true)");
  ggbApplet.evalCommand("SetVisibleInView(h_" + counterAbsVal + ", 1, true)");

  ggbApplet.evalCommand("SetLineStyle(f_" + counterAbsVal + ", 2)");
  ggbApplet.setColor("f_" + counterAbsVal, 192, 192, 192);
  ggbApplet.setLineThickness("f_" + counterAbsVal, 3);

  ggbApplet.evalCommand("SetLineStyle(h_" + counterAbsVal + ", 2)");
  ggbApplet.setColor("h_" + counterAbsVal, 192, 192, 192);
  ggbApplet.setLineThickness("h_" + counterAbsVal, 3);

  //make first point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(F_" + counterAbsVal + ", 1, true)");
  ggbApplet.setPointSize("F_" + counterAbsVal, 4);
  ggbApplet.setColor("F_" + counterAbsVal, 192, 192, 192);

  //create halo for first point
  halo("F_" + counterAbsVal);

  //make second point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(G_" + counterAbsVal + ", 1, true)");
  ggbApplet.setPointSize("G_" + counterAbsVal, 4);
  ggbApplet.setColor("G_" + counterAbsVal, 192, 192, 192);

  //create halo for second point
  halo("G_" + counterAbsVal);

  //make third point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(H_" + counterAbsVal + ", 1, true)");
  ggbApplet.setPointSize("H_" + counterAbsVal, 4);
  ggbApplet.setPointStyle("H_" + counterAbsVal, 10);
  ggbApplet.setColor("H_" + counterAbsVal, 192, 192, 192);

  //create halo for third point
  halo("H_" + counterAbsVal);

  //increment counter
  counterAbsVal++;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addCubic() {
  //create cubic shape
  ggbApplet.evalCommand("CMid_" + counterCubic + "=(0,0)");
  ggbApplet.evalCommand("CLeft_" + counterCubic + "=Point((x-x(CMid_" + counterCubic + "))^3+y(CMid_" + counterCubic + "))");
  ggbApplet.setCoords("CLeft_" + counterCubic, -1, -1);
  ggbApplet.evalCommand("CRight_" + counterCubic + "=Point((x-x(CMid_" + counterCubic + "))^3+y(CMid_" + counterCubic + "))");
  ggbApplet.setCoords("CRight_" + counterCubic, 1, 1);
  ggbApplet.evalCommand("Cubic_" + counterCubic + "=If(x(CLeft_" + counterCubic + ") ≤ x ≤ x(CRight_" + counterCubic + "),(x-x(CMid_" + counterCubic + "))^3+y(CMid_" + counterCubic + "))");

  //make cubic visible in view 1, change line style to dotted, change line thickness to 3, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(Cubic_" + counterCubic + ", 1, true)");
  ggbApplet.evalCommand("SetLineStyle(Cubic_" + counterCubic + ", 2)");
  ggbApplet.setColor("Cubic_" + counterCubic, 192, 192, 192);
  ggbApplet.setLineThickness("Cubic_" + counterCubic, 3);

  //make first point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(CLeft_" + counterCubic + ", 1, true)");
  ggbApplet.setPointSize("CLeft_" + counterCubic, 4);
  ggbApplet.setColor("CLeft_" + counterCubic, 192, 192, 192);

  //create halo for first point
  halo("CLeft_" + counterCubic);

  //make second point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(CMid_" + counterCubic + ", 1, true)");
  ggbApplet.setPointSize("CMid_" + counterCubic, 4);
  ggbApplet.setColor("CMid_" + counterCubic, 192, 192, 192);

  //create halo for first point
  halo("CMid_" + counterCubic);

  //make third point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(CRight_" + counterCubic + ", 1, true)");
  ggbApplet.setPointSize("CRight_" + counterCubic, 4);
  ggbApplet.setColor("CRight_" + counterCubic, 192, 192, 192);

  //create halo for third point
  halo("CRight_" + counterCubic);

  //increment counter
  counterCubic++;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addSqrt() {
  //create sqrt shape
  ggbApplet.evalCommand("SROrigin_" + counterSqrt + "=(0,0)");
  ggbApplet.evalCommand("SROuter_" + counterSqrt + "=Point((x-x(SROrigin_" + counterSqrt + "))^(1/2)+y(SROrigin_" + counterSqrt + "))");
  ggbApplet.setCoords("SROuter_" + counterSqrt, 4, 2);
  ggbApplet.evalCommand("Sqrt_" + counterSqrt + "=If(x(SROrigin_" + counterSqrt + ") ≤ x ≤ x(SROuter_" + counterSqrt + "), (x-x(SROrigin_" + counterSqrt + "))^(1/2)+y(SROrigin_" + counterSqrt + "))");

  //make sqrt visible in view 1, change line style to dotted, change line thickness to 3, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(Sqrt_" + counterSqrt + ", 1, true)");
  ggbApplet.evalCommand("SetLineStyle(Sqrt_" + counterSqrt + ", 2)");
  ggbApplet.setColor("Sqrt_" + counterSqrt, 192, 192, 192);
  ggbApplet.setLineThickness("Sqrt_" + counterSqrt, 3);

  //make first point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(SROrigin_" + counterSqrt + ", 1, true)");
  ggbApplet.setPointSize("SROrigin_" + counterSqrt, 4);
  ggbApplet.setColor("SROrigin_" + counterSqrt, 192, 192, 192);

  //create halo for first point
  halo("SROrigin_" + counterSqrt);

  //make second point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(SROuter_" + counterSqrt + ", 1, true)");
  ggbApplet.setPointSize("SROuter_" + counterSqrt, 4);
  ggbApplet.setColor("SROuter_" + counterSqrt, 192, 192, 192);

  //create halo for second point
  halo("SROuter_" + counterSqrt);

  //increment counter
  counterSqrt++;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addCbrt() {
  //create cbrt shape
  ggbApplet.evalCommand("CROrigin_" + counterCbrt + "=(0,0)");
  ggbApplet.evalCommand("CRLeft_" + counterCbrt + "=Point((x-x(CROrigin_" + counterCbrt + "))^(1/3)+y(CROrigin_" + counterCbrt + "))");
  ggbApplet.setCoords("CRLeft_" + counterCbrt, -1, -1);
  ggbApplet.evalCommand("CRRight_" + counterCbrt + "=Point((x-x(CROrigin_" + counterCbrt + "))^(1/3)+y(CROrigin_" + counterCbrt + "))");
  ggbApplet.setCoords("CRRight_" + counterCbrt, 1, 1);
  ggbApplet.evalCommand("Cbrt_" + counterCbrt + "=If(x(CRLeft_" + counterCbrt + ") ≤ x ≤ x(CRRight_" + counterCbrt + "),(x-x(CROrigin_" + counterCbrt + "))^(1/3)+y(CROrigin_" + counterCbrt + "))");

  //make cbrt visible in view 1, change line style to dotted, change line thickness to 3, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(Cbrt_" + counterCbrt + ", 1, true)");
  ggbApplet.evalCommand("SetLineStyle(Cbrt_" + counterCbrt + ", 2)");
  ggbApplet.setColor("Cbrt_" + counterCbrt, 192, 192, 192);
  ggbApplet.setLineThickness("Cbrt_" + counterCbrt, 3);

  //make first point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(CROrigin_" + counterCbrt + ", 1, true)");
  ggbApplet.setPointSize("CROrigin_" + counterCbrt, 4);
  ggbApplet.setColor("CROrigin_" + counterCbrt, 192, 192, 192);

  //create halo for first point
  halo("CROrigin_" + counterCbrt);

  //make second point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(CRLeft_" + counterCbrt + ", 1, true)");
  ggbApplet.setPointSize("CRLeft_" + counterCbrt, 4);
  ggbApplet.setColor("CRLeft_" + counterCbrt, 192, 192, 192);

  //create halo for second point
  halo("CRLeft_" + counterCbrt);

  //make third point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(CRRight_" + counterCbrt + ", 1, true)");
  ggbApplet.setPointSize("CRRight_" + counterCbrt, 4);
  ggbApplet.setColor("CRRight_" + counterCbrt, 192, 192, 192);

  //create halo for third point
  halo("CRRight_" + counterCbrt);

  //increment counter
  counterCbrt++;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addExpGrowth() {
  //create exp growth shape
  ggbApplet.evalCommand("EGOrigin_" + counterEG + "=(0,1)");
  ggbApplet.evalCommand("EGLeft_" + counterEG + "=Point(2^(x-x(EGOrigin_" + counterEG + "))+y(EGOrigin_" + counterEG + ")-1)");
  ggbApplet.setCoords("EGLeft_" + counterEG, -1, 1 / 2);
  ggbApplet.evalCommand("EGRight_" + counterEG + "=Point(2^(x-x(EGOrigin_" + counterEG + "))+y(EGOrigin_" + counterEG + ")-1)");
  ggbApplet.setCoords("EGRight_" + counterEG, 3, 8);
  ggbApplet.evalCommand("ExpGrowth_" + counterEG + "=If(x(EGLeft_" + counterEG + ") ≤ x ≤ x(EGRight_" + counterEG + "),2^(x-x(EGOrigin_" + counterEG + "))+y(EGOrigin_" + counterEG + ")-1)");

  //make exp growth visible in view 1, change line style to dotted, change line thickness to 3, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(ExpGrowth_" + counterEG + ", 1, true)");
  ggbApplet.evalCommand("SetLineStyle(ExpGrowth_" + counterEG + ", 2)");
  ggbApplet.setColor("ExpGrowth_" + counterEG, 192, 192, 192);
  ggbApplet.setLineThickness("ExpGrowth_" + counterEG, 3);

  //make first point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(EGOrigin_" + counterEG + ", 1, true)");
  ggbApplet.setPointSize("EGOrigin_" + counterEG, 4);
  ggbApplet.setColor("EGOrigin_" + counterEG, 192, 192, 192);

  //create halo for first point
  halo("EGOrigin_" + counterEG);

  //make second point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(EGLeft_" + counterEG + ", 1, true)");
  ggbApplet.setPointSize("EGLeft_" + counterEG, 4);
  ggbApplet.setColor("EGLeft_" + counterEG, 192, 192, 192);

  //create halo for second point
  halo("EGLeft_" + counterEG);

  //make third point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(EGRight_" + counterEG + ", 1, true)");
  ggbApplet.setPointSize("EGRight_" + counterEG, 4);
  ggbApplet.setColor("EGRight_" + counterEG, 192, 192, 192);

  //create halo for third point
  halo("EGRight_" + counterEG);

  //increment counter
  counterEG++;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addExpDecay() {
  //create exp decay shape
  ggbApplet.evalCommand("EDOrigin_" + counterED + "=(0,1)");
  ggbApplet.evalCommand("EDLeft_" + counterED + "=Point((1/2)^(x-x(EDOrigin_" + counterED + "))+y(EDOrigin_" + counterED + ")-1)");
  ggbApplet.setCoords("EDLeft_" + counterED, -3, 8);
  ggbApplet.evalCommand("EDRight_" + counterED + "=Point((1/2)^(x-x(EDOrigin_" + counterED + "))+y(EDOrigin_" + counterED + ")-1)");
  ggbApplet.setCoords("EDRight_" + counterED, 1, 1 / 2);
  ggbApplet.evalCommand("ExpDecay_" + counterED + "=If(x(EDLeft_" + counterED + ") ≤ x ≤ x(EDRight_" + counterED + "),(1/2)^(x-x(EDOrigin_" + counterED + "))+y(EDOrigin_" + counterED + ")-1)");

  //make exp growth visible in view 1, change line style to dotted, change line thickness to 3, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(ExpDecay_" + counterED + ", 1, true)");
  ggbApplet.evalCommand("SetLineStyle(ExpDecay_" + counterED + ", 2)");
  ggbApplet.setColor("ExpDecay_" + counterED, 192, 192, 192);
  ggbApplet.setLineThickness("ExpDecay_" + counterED, 3);

  //make first point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(EDOrigin_" + counterED + ", 1, true)");
  ggbApplet.setPointSize("EDOrigin_" + counterED, 4);
  ggbApplet.setColor("EDOrigin_" + counterED, 192, 192, 192);

  //create halo for first point
  halo("EDOrigin_" + counterED);

  //make second point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(EDLeft_" + counterED + ", 1, true)");
  ggbApplet.setPointSize("EDLeft_" + counterED, 4);
  ggbApplet.setColor("EDLeft_" + counterED, 192, 192, 192);

  //create halo for second point
  halo("EDLeft_" + counterED);

  //make third point visible in view 1, change size, change color to gray
  ggbApplet.evalCommand("SetVisibleInView(EDRight_" + counterED + ", 1, true)");
  ggbApplet.setPointSize("EDRight_" + counterED, 4);
  ggbApplet.setColor("EDRight_" + counterED, 192, 192, 192);

  //create halo for third point
  halo("EDRight_" + counterED);

  //increment counter
  counterED++;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
function pointConditions(object) {
  if (ggbApplet.getObjectType(object) == "point") {
    ggbApplet.evalCommand("SetConditionToShowObject(" + object + ", showPoints)");
  }
  if (ggbApplet.getObjectType(object) == "ellipse") {
    ggbApplet.evalCommand("SetConditionToShowObject(" + object + ", showPoints)");
  }
}

function grab(a) {
  if (ggbApplet.getObjectType(a) != "button") {
    objs.push(a);
    pts = ggbApplet.getAllObjectNames("point");
    for (i = 0; i < pts.length; i++) {
      ggbApplet.evalCommand("onpath=" + a + "(x(" + pts[i] + "))==y(" + pts[i] + ")");
      if (ggbApplet.getValue("onpath")) {
        objs.push(pts[i]);
      }
    }
  }
}

//updates coordinates when midpoint is moved
function tuck(grabbed) {
  if (grabbed.type == "select") {
    if (grabbed.target.includes("CMid_")) {
      let number = grabbed.target.replace("CMid_", "");
      ggbApplet.registerObjectUpdateListener("CMid_" + number, () => {
        ggbApplet.setCoords("CLeft_" + number, ggbApplet.getXcoord("CMid_" + number) - 1, ggbApplet.getYcoord("CMid_" + number) - 1);
        ggbApplet.setCoords("CRight_" + number, ggbApplet.getXcoord("CMid_" + number) + 1, ggbApplet.getYcoord("CMid_" + number) + 1);
      });
    }
    if (grabbed.target.includes("SROrigin_")) {
      let number = grabbed.target.replace("SROrigin_", "");
      ggbApplet.registerObjectUpdateListener("SROrigin_" + number, () => {
        ggbApplet.setCoords("SROuter_" + number, ggbApplet.getXcoord("SROrigin_" + number) + 4, ggbApplet.getYcoord("SROrigin_" + number) + 2);
      });
    }
    if (grabbed.target.includes("CROrigin_")) {
      let number = grabbed.target.replace("CROrigin_", "");
      ggbApplet.registerObjectUpdateListener("CROrigin_" + number, () => {
        ggbApplet.setCoords("CRLeft_" + number, ggbApplet.getXcoord("CROrigin_" + number) - 1, ggbApplet.getYcoord("CROrigin_" + number) - 1);
        ggbApplet.setCoords("CRRight_" + number, ggbApplet.getXcoord("CROrigin_" + number) + 1, ggbApplet.getYcoord("CROrigin_" + number) + 1);
      });
    }
    if (grabbed.target.includes("EDOrigin_")) {
      let number = grabbed.target.replace("EDOrigin_", "");
      ggbApplet.registerObjectUpdateListener("EDOrigin_" + number, () => {
        ggbApplet.setCoords("EDLeft_" + number, ggbApplet.getXcoord("EDOrigin_" + number) - 3, ggbApplet.getYcoord("EDOrigin_" + number) + 8);
        ggbApplet.setCoords("EDRight_" + number, ggbApplet.getXcoord("EDOrigin_" + number) + 1, ggbApplet.getYcoord("EDOrigin_" + number) - (1 / 2));
      });
    }
    if (grabbed.target.includes("EGOrigin_")) {
      let number = grabbed.target.replace("EGOrigin_", "");
      ggbApplet.registerObjectUpdateListener("EGOrigin_" + number, () => {
        ggbApplet.setCoords("EGLeft_" + number, ggbApplet.getXcoord("EGOrigin_" + number) - 1, ggbApplet.getYcoord("EGOrigin_" + number) - (1 / 2));
        ggbApplet.setCoords("EGRight_" + number, ggbApplet.getXcoord("EGOrigin_" + number) + 3, ggbApplet.getYcoord("EGOrigin_" + number) + 8);
      });
    }
  }
}

function trash() {
  for (i = 0; i < objs.length; i++) {
    ggbApplet.deleteObject(objs[i]);
    objs = [];
  };
}