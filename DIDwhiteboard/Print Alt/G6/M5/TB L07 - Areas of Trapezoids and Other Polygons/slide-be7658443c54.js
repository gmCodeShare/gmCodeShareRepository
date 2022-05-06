const { ggb1, feedback1 } = components;

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
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M5 TB L07 - Print Alternate Slide Deck for Areas of Trapezoids and Other Polygons","teacherView":true,"layout":"one col"}
*/
