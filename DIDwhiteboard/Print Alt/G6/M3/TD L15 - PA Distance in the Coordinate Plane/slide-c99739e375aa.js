const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.showToolBar(true);
    ggb1.instance.setMode(62);
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - PA Distance in the Coordinate Plane","teacherView":true,"layout":"one col"}
*/
