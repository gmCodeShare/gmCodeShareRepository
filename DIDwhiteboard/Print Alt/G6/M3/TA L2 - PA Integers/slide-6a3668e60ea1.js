const { text1, ggb1, feedback, separator4 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('G', updateRight);
ggb1.instance.registerObjectUpdateListener('H', update);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setPointSize('center', 9);
    ggb1.instance.setValue('submitted', true);
    ggb1.instance.setLayer('B', 6);
    ggb1.instance.setLayer('C', 4);
    ggb1.instance.setVisible('H', false);
    ggb1.instance.setVisible('eq5', false);
    ggb1.instance.setVisible('time', false);
    ggb1.instance.setValue('submitted', true);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

function updateRight() {
  ggb1.instance.setVisible('H', true);
  ggb1.instance.setVisible('eq5', true);
}

function update() {
  ggb1.instance.setVisible('time', true);
}

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1},"stage":"Learn","lessonInfo":"6 M3 TA L02 - PA Integers","teacherView":true,"layout":"one col"}
*/
