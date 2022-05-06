const { ggb1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setPointSize('center', 9);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - PA Integers","teacherView":true,"layout":"one col"}
*/
