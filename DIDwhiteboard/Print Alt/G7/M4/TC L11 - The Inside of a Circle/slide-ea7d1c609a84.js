const { ggb1, feedback1, ggb2 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('radius', 1.7);
    ggb1.instance.setValue('showInnerQuads', true);
    ggb1.instance.setValue('showOuterQuads', false);
    ggb2.instance.setValue('radius', 1.6);
    ggb2.instance.setValue('showInnerQuads', false);
    ggb2.instance.setValue('showOuterQuads', true);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":2,"textbox":1},"stage":"Learn","lessonInfo":"7 M4 TC L11 - Print Alternate Slide Deck for The Inside of a Circle","teacherView":true,"layout":"two col"}
*/
