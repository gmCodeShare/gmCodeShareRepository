const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('state', 2);
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - Print Alt: More Practice with Box Plots","teacherView":true,"layout":"one col"}
*/
