const { text1, ggb1 } = components;

ggb1.instance.setValue('gridLength', 5);
ggb1.instance.setValue('gridWidth', 4);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('sideLength', 1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"textbox":1,"geogebra":1},"stage":"Learn","lessonInfo":"6 M2 TA L01 - PA Factors and Multiples","teacherView":false,"layout":"one col"}
*/
