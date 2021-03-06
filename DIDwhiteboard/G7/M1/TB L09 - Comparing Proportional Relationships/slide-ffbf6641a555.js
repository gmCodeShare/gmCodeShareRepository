const {
  text1,
  table1,
  text2,
  table2,
  feedback1,
  text3,
  check1,
  check2,
  check3,
  check4,
  cc_sharewithclass_5f588d790100_textbox1: text5,
  cc_sharewithclass_5f588d790100_input1: input1,
  cc_sharewithclass_5f588d790100_button1: button1,
  cc_sharewithclass_5f588d790100_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    button1.updateData({ align: 'right' });
    button1.updateData({ visible: false });
    input1.updateData({ visible: false });
    text5.updateData({ visible: false });
    text1.updateData({ align: 'center' });
    text2.updateData({ align: 'center' });
    table1.updateData({ init: true });
  }
}

autorun(() => {
  if (check1.data.checked) {
    text5.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check2.updateData({ checked: false });
    check3.updateData({ checked: false });
    check4.updateData({ checked: false });
    input1.updateData({ text: 'Table A, because', visible: true });
  }
});

autorun(() => {
  if (check2.data.checked) {
    text5.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check3.updateData({ checked: false });
    check4.updateData({ checked: false });
    input1.updateData({ text: 'Table B, because', visible: true });
  }
});

autorun(() => {
  if (check3.data.checked) {
    text5.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check2.updateData({ checked: false });
    check4.updateData({ checked: false });
    input1.updateData({
      text: 'They would be the same steepness, because',
      visible: true,
    });
  }
});

autorun(() => {
  if (check4.data.checked) {
    text5.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check2.updateData({ checked: false });
    check3.updateData({ checked: false });
    input1.updateData({ text: 'Unable to determine, because', visible: true });
  }
});

/*
{"compTotals":{"textbox":4,"table":2,"checkbox":4,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships???","teacherView":false,"layout":"two col"}
*/
