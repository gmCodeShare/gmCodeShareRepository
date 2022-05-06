const { ggb1, feedback1, text1, text2, text3 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('val1', update);
ggb1.instance.registerObjectUpdateListener('val2', update2);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 6);
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

function update() {
  let num = ggb1.instance.getValue('val1');
  let num2 = ggb1.instance.getValue('absVal1');
  text2.updateData({ text: `$|${num}|=${num2}$` });
  text2.updateData({ visible: true });
}

function update2() {
  let num3 = ggb1.instance.getValue('val2');
  let num4 = ggb1.instance.getValue('absVal2');
  text3.updateData({ text: `$|${num3}|=${num4}$` });
  text3.updateData({ visible: true });
}

/*
{"compTotals":{"geogebra":1,"textbox":4},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
