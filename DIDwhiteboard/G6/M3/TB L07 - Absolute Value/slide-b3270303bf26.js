const { ggb1, feedback1, text1, select1, text2, select2 } = components;

ggb1.instance.setErrorDialogsActive(false);

let choiceVal;
let choiceVal2;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    select2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('BluePoint', change);

function change() {
  ggb1.instance.setValue('show', false);
}

autorun(() => {
  if (select1.data.selected) {
    text2.updateData({ visible: true });
    select2.updateData({ visible: true });
  }
  if (select1.data.selected == 0) {
    choiceVal = 1;
  }
  if (select1.data.selected == 1) {
    choiceVal = 2;
  }
  if (select1.data.selected == 2) {
    choiceVal = 3;
  }
});

autorun(() => {
  if (select2.data.selected == 0) {
    choiceVal2 = 1;
  }
  if (select2.data.selected == 1) {
    choiceVal2 = 2;
  }
  if (select2.data.selected == 2) {
    choiceVal2 = 3;
  }
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-b3270303bf26', {
      choiceVal,
      choiceVal2,
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"radiogroup":2},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
