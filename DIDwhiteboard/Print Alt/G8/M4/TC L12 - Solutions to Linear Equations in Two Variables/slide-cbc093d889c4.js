const { ggb1, feedback1, text1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.updateData({ names: [] });
    ggb1.updateData({ init: true });
    ggb1.instance.evalCommand("Translate(picCheck, Vector((0,0),P10x11))");
    ggb1.instance.setVisible("P10x11", false);
  }
}

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClickListener(styleIt);

let prevPoints =
  getFromSlide("slide-f52d3361f76f", "ggb1.data.names", false) || false;

if (prevPoints.length) {
  let nums = [...prevPoints];
  for (let i = 0, L = prevPoints.length; i < L; i++) {
    styleIt(prevPoints[i]);
    ggb1.instance.setValue("count", ggb1.instance.getValue("count") - 1);
    nums.push(prevPoints[i]);
  }
}

function styleIt(a) {
  let nums = [...ggb1.data.names];
  //if (ggb1.instance.getValue('count') < 5) {
  if (ggb1.instance.getObjectType(a) == "point") {
    if (
      ggb1.instance.getYcoord(a) ==
      ggb1.instance.getValue("answer(" + ggb1.instance.getXcoord(a) + ")")
    ) {
      ggb1.instance.evalCommand("Translate(picCheck, Vector((0,0)," + a + "))");
      ggb1.instance.setVisible(a, false);
    } else {
      ggb1.instance.setColor(a, 218, 41, 28);
      ggb1.instance.setPointStyle(a, 1);
      ggb1.instance.setPointSize(a, 6);
      ggb1.instance.evalCommand("SelectObjects()");
      ggb1.instance.setFixed(a, false, false);
    }
    nums.push(a);
    ggb1.updateData({ names: [...nums] });
    ggb1.instance.setValue("count", ggb1.instance.getValue("count") + 1);
  }

  ggb1.instance.registerObjectUpdateListener("count", update);

  function update() {
    let allPoints = ggb1.instance.getAllObjectNames("point");
    for (let i = 0, L = allPoints.length; i < L; i++) {
      ggb1.instance.setFixed(allPoints[i], false, false);
    }
    ggb1.instance.unregisterObjectUpdateListener("count");
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Learn","lessonInfo":"8 M4 TC L12 - Print Alt: Solutions to Linear Equations in Two Variables","teacherView":true,"layout":"two col"}
*/
