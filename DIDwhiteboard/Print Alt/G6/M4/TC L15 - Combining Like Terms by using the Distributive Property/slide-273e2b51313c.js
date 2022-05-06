const { ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('state', 5);
    ggb1.instance.setValue('ymin', -3);
    ggb1.instance.setValue('ymax', 9);

    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M4 TC L15 - Print Alternate Slide Deck for Combining Like Terms by using the Distributive Property","teacherView":true,"layout":"one col"}
*/
