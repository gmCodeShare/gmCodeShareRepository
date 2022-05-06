const {
  text1,
  text2,
  select1,
  separator1,
  cc_sharewithclass_fcf317f61313_textbox1: shareText1,
  cc_sharewithclass_fcf317f61313_input1: shareInput1,
  cc_sharewithclass_fcf317f61313_button1: shareButton1,
  cc_sharewithclass_fcf317f61313_studentanswers1,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    text1.updateData({ init: true });
  }
}

let choiceVal;

autorun(() => {
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
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

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-7ce621d4daee', {
      choiceVal,
    });
  }
});

/*
{"compTotals":{"textbox":3,"radiogroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"one col"}
*/
