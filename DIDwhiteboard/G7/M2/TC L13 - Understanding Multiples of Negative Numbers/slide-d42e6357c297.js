const {
  text2,
  table1,
  feedback,
  cc_sharewithclass_1b2b32102d85_textbox1: shareText1,
  cc_sharewithclass_1b2b32102d85_input1: shareInput1,
  cc_sharewithclass_1b2b32102d85_button1: shareButton1,
  cc_sharewithclass_1b2b32102d85_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false, align: 'right' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    table1.updateData({ init: true });
  }
}

autorun(() => {
  if (
    table1.getCell(0, 1).value != '' &&
    table1.getCell(1, 1).value != '' &&
    table1.getCell(2, 1).value != '' &&
    table1.getCell(3, 1).value != ''
  ) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"textbox":2,"table":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M2 TC L13 - Understanding Multiples of Negative Numbers","teacherView":false,"layout":"two col"}
*/
