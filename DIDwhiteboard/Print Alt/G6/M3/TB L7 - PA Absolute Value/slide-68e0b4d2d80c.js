const { text1, ggb1, feedback1, separator1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 4);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - PA Absolute Value","teacherView":true,"layout":"one col"}
*/
