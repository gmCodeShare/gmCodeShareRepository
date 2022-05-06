const { ggb1, feedback1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Launch","lessonInfo":"6 M5 TB L07 - Areas of Trapezoids and Other Polygons","teacherView":false,"layout":"two col"}
*/
